// ================= STATE & DATA GLOBAL =================
let rawDataset = [];
let filteredDataset = [];
let tableState = {
    searchQuery: '',
    sortColumn: 'id',
    sortDirection: 'asc',
    currentPage: 1,
    pageSize: 25
};
let paramState = {
    model: 'normal',
    mean: 50,
    std: 10,
    n: 1000,
    noise: 5
};
let samplingChart = null;

// ================= INISIALISASI SAAT LOAD =================
window.addEventListener('DOMContentLoaded', () => {
    generateMockData(1000);
    initChart();
    renderTable();
    updateJSONConsole();
});

// ================= TRANSISI ANTARA LANDING PAGE & WORKSPACE =================
function enterAppConsole() {
    // Sembunyikan Landing Page, Tampilkan Konsol Kerja
    const landing = document.getElementById('view-landing-page');
    const workspace = document.getElementById('view-app-workspace');
    
    landing.classList.add('hidden');
    workspace.classList.remove('hidden');
    
    // Atur default tab di dalam konsol ke 'Tabel Data Asli'
    switchTab('data-table');
    showToast("Masuk ke konsol aplikasi operasional.");
    
    // Paksa ChartJS merender ulang sesuai ukuran kontainer workspace yang baru
    if (samplingChart) {
        setTimeout(() => {
            samplingChart.resize();
            updateChartData();
        }, 100);
    }
}

function leaveAppConsole() {
    const landing = document.getElementById('view-landing-page');
    const workspace = document.getElementById('view-app-workspace');
    
    workspace.classList.add('hidden');
    landing.classList.remove('hidden');
    
    showToast("Kembali ke Halaman Depan.");
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// ================= FUNGSI NAVIGASI TAB KONSOL =================
function switchTab(tabId) {
    // Sembunyikan semua tab operasional
    document.querySelectorAll('.tab-content').forEach(tab => {
        tab.classList.add('hidden');
    });
    // Tampilkan tab target
    document.getElementById(`tab-${tabId}`).classList.remove('hidden');

    // Atur status aktif pada tombol navigasi konsol
    document.querySelectorAll('.nav-btn').forEach(btn => {
        btn.className = "nav-btn px-4 py-2 rounded-lg text-xs font-bold transition-all text-slate-600 hover:text-slate-950 dark:text-slate-400 dark:hover:text-slate-100 hover:bg-slate-200/20 dark:hover:bg-slate-800/20";
    });
    const activeBtn = document.getElementById(`nav-${tabId}`);
    if (activeBtn) {
        activeBtn.className = "nav-btn px-4 py-2 rounded-lg text-xs font-bold transition-all text-brand-600 dark:text-brand-400 bg-slate-200/50 dark:bg-slate-800/60 font-extrabold";
    }
    
    showToast(`Modul ${getTabName(tabId)} dibuka.`);
}

function getTabName(tabId) {
    switch(tabId) {
        case 'data-table': return 'Tabel Data Asli';
        case 'visualization': return 'Visualisasi Kurva';
        case 'api-doc': return 'Konektivitas Python (API)';
        default: return tabId;
    }
}

function toggleMobileMenuWorkspace() {
    const menu = document.getElementById('mobile-menu-workspace');
    menu.classList.toggle('hidden');
}

// ================= KONTROL UTAMA TEMA (DARK / LIGHT) =================
function toggleTheme() {
    const html = document.documentElement;
    const sunIconLanding = document.getElementById('sun-icon-landing');
    const moonIconLanding = document.getElementById('moon-icon-landing');
    const sunIconWorkspace = document.getElementById('sun-icon-workspace');
    const moonIconWorkspace = document.getElementById('moon-icon-workspace');
    
    if (html.classList.contains('dark')) {
        html.classList.remove('dark');
        // Sync Landing Icons
        sunIconLanding.classList.add('hidden');
        moonIconLanding.classList.remove('hidden');
        // Sync Workspace Icons
        sunIconWorkspace.classList.add('hidden');
        moonIconWorkspace.classList.remove('hidden');
        
        showToast("Beralih ke Mode Terang");
    } else {
        html.classList.add('dark');
        // Sync Landing Icons
        sunIconLanding.classList.remove('hidden');
        moonIconLanding.classList.add('hidden');
        // Sync Workspace Icons
        sunIconWorkspace.classList.remove('hidden');
        moonIconWorkspace.classList.add('hidden');
        
        showToast("Beralih ke Mode Gelap");
    }
    
    // Re-render chart jika sedang aktif untuk memperbarui warna teks/grid
    if (samplingChart) {
        setTimeout(updateChartData, 150);
    }
}

// ================= NOTIFIKASI TOAST CUSTOM =================
function showToast(message) {
    const container = document.getElementById('toast-container');
    const toast = document.createElement('div');
    toast.className = "glassmorphism glass-card rounded-xl px-4 py-3 text-xs font-semibold shadow-lg text-brand-600 dark:text-brand-300 border border-brand-500/20 max-w-sm pointer-events-auto transition-all duration-300 transform translate-x-12 opacity-0 flex items-center space-x-2";
    
    toast.innerHTML = `
        <span class="w-1.5 h-1.5 bg-brand-500 rounded-full"></span>
        <span>${message}</span>
    `;
    
    container.appendChild(toast);
    
    // Trigger animation
    setTimeout(() => {
        toast.classList.remove('translate-x-12', 'opacity-0');
    }, 10);

    // Bersihkan toast setelah 2.5 detik
    setTimeout(() => {
        toast.classList.add('translate-x-12', 'opacity-0');
        setTimeout(() => {
            toast.remove();
        }, 300);
    }, 2500);
}

// ================= GENERATOR DATA IMITASI PYTHON =================
function generateMockData(count) {
    const dataset = [];
    const mean = 50.12;
    const stdDev = 10.05;
    
    // Membangkitkan data terdistribusi normal (Metode Box-Muller)
    for (let i = 1; i <= count; i++) {
        let u = 0, v = 0;
        while(u === 0) u = Math.random(); 
        while(v === 0) v = Math.random();
        let num = Math.sqrt(-2.0 * Math.log(u)) * Math.cos(2.0 * Math.PI * v);
        
        // Distribusikan normal dengan mu=50.12, sigma=10.05
        let val = num * stdDev + mean;
        let zScore = (val - mean) / stdDev;
        
        // Berikan cap kategori klasifikasi
        let category = "Normal (Aman)";
        if (Math.abs(zScore) > 3.0) {
            category = "Anomali Kritis";
        } else if (Math.abs(zScore) > 1.96) {
            category = "Peringatan Luar";
        }
        
        // Format waktu
        let date = new Date(Date.now() - (count - i) * 10 * 1000);
        let timeStr = date.toISOString().replace('T', ' ').substring(0, 19);

        dataset.push({
            id: `SMPL-${String(i).padStart(4, '0')}`,
            timestamp: timeStr,
            value: parseFloat(val.toFixed(4)),
            zScore: parseFloat(zScore.toFixed(4)),
            category: category
        });
    }
    rawDataset = dataset;
    filteredDataset = [...dataset];
}

// ================= LOGIKA TABEL DATA =================
function renderTable() {
    const tbody = document.getElementById('table-body');
    if(!tbody) return;
    tbody.innerHTML = '';

    const startIdx = (tableState.currentPage - 1) * tableState.pageSize;
    const endIdx = startIdx + tableState.pageSize;
    const pageData = filteredDataset.slice(startIdx, endIdx);

    if (pageData.length === 0) {
        tbody.innerHTML = `
            <tr>
                <td colspan="5" class="px-6 py-8 text-center text-slate-500">
                    Tidak ada data yang cocok dengan kriteria pencarian Anda.
                </td>
            </tr>
        `;
        return;
    }

    pageData.forEach(row => {
        let badgeClass = "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300";
        if (row.category === "Anomali Kritis") {
            badgeClass = "bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300 animate-pulse";
        } else if (row.category === "Peringatan Luar") {
            badgeClass = "bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-300";
        }

        const tr = document.createElement('tr');
        tr.className = "hover:bg-slate-200/10 dark:hover:bg-slate-800/10 transition-colors";
        tr.innerHTML = `
            <td class="px-6 py-3 font-semibold font-mono text-xs text-brand-600 dark:text-brand-400">${row.id}</td>
            <td class="px-6 py-3 text-[11px] text-slate-500">${row.timestamp}</td>
            <td class="px-6 py-3 font-medium">${row.value}</td>
            <td class="px-6 py-3 font-mono text-xs">${row.zScore > 0 ? '+' : ''}${row.zScore}</td>
            <td class="px-6 py-3">
                <span class="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-semibold ${badgeClass}">
                    ${row.category}
                </span>
            </td>
        `;
        tbody.appendChild(tr);
    });

    const total = filteredDataset.length;
    const currentMax = Math.min(endIdx, total);
    const currentMin = total === 0 ? 0 : startIdx + 1;
    document.getElementById('table-stats-text').innerText = `Menampilkan ${currentMin}-${currentMax} dari ${total.toLocaleString('id-ID')} data`;

    renderPagination();
}

function renderPagination() {
    const pagesContainer = document.getElementById('pagination-pages');
    if(!pagesContainer) return;
    pagesContainer.innerHTML = '';
    
    const totalPages = Math.ceil(filteredDataset.length / tableState.pageSize);

    if (totalPages > 1) {
        appendPageBtn(1);
    }

    let start = Math.max(2, tableState.currentPage - 1);
    let end = Math.min(totalPages - 1, tableState.currentPage + 1);

    if (tableState.currentPage <= 2) {
        end = Math.min(totalPages - 1, 4);
    }
    if (tableState.currentPage >= totalPages - 1) {
        start = Math.max(2, totalPages - 3);
    }

    if (start > 2) {
        const dots = document.createElement('span');
        dots.className = "text-slate-400 px-1 text-xs";
        dots.innerText = "...";
        pagesContainer.appendChild(dots);
    }

    for (let i = start; i <= end; i++) {
        appendPageBtn(i);
    }

    if (end < totalPages - 1) {
        const dots = document.createElement('span');
        dots.className = "text-slate-400 px-1 text-xs";
        dots.innerText = "...";
        pagesContainer.appendChild(dots);
    }

    if (totalPages > 0) {
        appendPageBtn(totalPages);
    }

    document.getElementById('btn-prev-page').disabled = tableState.currentPage === 1;
    document.getElementById('btn-next-page').disabled = tableState.currentPage === totalPages || totalPages === 0;
}

function appendPageBtn(pageNo) {
    const pagesContainer = document.getElementById('pagination-pages');
    const btn = document.createElement('button');
    btn.className = `w-8 h-8 rounded-lg text-xs font-semibold transition-all ${tableState.currentPage === pageNo ? 'bg-brand-500 text-white' : 'hover:bg-slate-200/50 dark:hover:bg-slate-800/50'}`;
    btn.innerText = pageNo;
    btn.onclick = () => {
        tableState.currentPage = pageNo;
        renderTable();
    };
    pagesContainer.appendChild(btn);
}

function prevPage() {
    if (tableState.currentPage > 1) {
        tableState.currentPage--;
        renderTable();
    }
}

function nextPage() {
    const totalPages = Math.ceil(filteredDataset.length / tableState.pageSize);
    if (tableState.currentPage < totalPages) {
        tableState.currentPage++;
        renderTable();
    }
}

function handlePageSizeChange() {
    const select = document.getElementById('table-page-size');
    tableState.pageSize = parseInt(select.value);
    tableState.currentPage = 1;
    renderTable();
}

function handleTableSearch() {
    const query = document.getElementById('table-search').value.toLowerCase().trim();
    tableState.searchQuery = query;
    tableState.currentPage = 1;

    if (query === '') {
        filteredDataset = [...rawDataset];
    } else {
        filteredDataset = rawDataset.filter(item => {
            return item.id.toLowerCase().includes(query) || 
                   item.category.toLowerCase().includes(query) || 
                   item.value.toString().includes(query);
        });
    }
    renderTable();
}

function sortTable(column) {
    if (tableState.sortColumn === column) {
        tableState.sortDirection = tableState.sortDirection === 'asc' ? 'desc' : 'asc';
    } else {
        tableState.sortColumn = column;
        tableState.sortDirection = 'asc';
    }

    document.querySelectorAll("[id^='sort-indicator-']").forEach(span => span.innerText = '↕');
    const indicator = document.getElementById(`sort-indicator-${column}`);
    if(indicator) {
        indicator.innerText = tableState.sortDirection === 'asc' ? '↑' : '↓';
    }

    filteredDataset.sort((a, b) => {
        let valA = a[column];
        let valB = b[column];

        if (typeof valA === 'string') {
            return tableState.sortDirection === 'asc' 
                ? valA.localeCompare(valB) 
                : valB.localeCompare(valA);
        } else {
            return tableState.sortDirection === 'asc' 
                ? valA - valB 
                : valB - valA;
        }
    });

    tableState.currentPage = 1;
    renderTable();
}

function downloadCSV() {
    let csvContent = "data:text/csv;charset=utf-8,Sample ID,Waktu,Nilai Mentah,Z-Score,Klasifikasi\n";
    filteredDataset.forEach(row => {
        csvContent += `${row.id},${row.timestamp},${row.value},${row.zScore},${row.category}\n`;
    });
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", `Data_Asli_Sampling_${Date.now()}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    showToast("CSV berhasil diunduh.");
}


// ================= LOGIKA GRAFIK & ESTIMASI KURVA =================
function initChart() {
    const ctx = document.getElementById('sampling-chart');
    if(!ctx) return;
    const context = ctx.getContext('2d');
    
    samplingChart = new Chart(context, {
        type: 'line',
        data: {
            datasets: []
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            interaction: {
                mode: 'index',
                intersect: false,
            },
            plugins: {
                legend: {
                    display: true,
                    position: 'top',
                    labels: {
                        color: document.documentElement.classList.contains('dark') ? '#94a3b8' : '#475569',
                        font: {
                            family: '"Nova Flat"',
                            weight: 'bold'
                        }
                    }
                },
                tooltip: {
                    callbacks: {
                        label: function(context) {
                            return `Nilai Y: ${context.parsed.y.toFixed(5)}`;
                        },
                        title: function(context) {
                            return `Titik X: ${context[0].parsed.x.toFixed(2)}`;
                        }
                    }
                }
            },
            scales: {
                x: {
                    type: 'linear',
                    position: 'bottom',
                    grid: {
                        color: document.documentElement.classList.contains('dark') ? 'rgba(255, 255, 255, 0.05)' : 'rgba(0, 0, 0, 0.05)'
                    },
                    ticks: {
                        color: document.documentElement.classList.contains('dark') ? '#94a3b8' : '#475569',
                        font: {
                            family: '"Nova Flat"'
                        }
                    }
                },
                y: {
                    grid: {
                        color: document.documentElement.classList.contains('dark') ? 'rgba(255, 255, 255, 0.05)' : 'rgba(0, 0, 0, 0.05)'
                    },
                    ticks: {
                        color: document.documentElement.classList.contains('dark') ? '#94a3b8' : '#475569',
                        font: {
                            family: '"Nova Flat"'
                        }
                    }
                }
            }
        }
    });

    updateChartData();
}

function updateParamValue(paramKey, value) {
    paramState[paramKey] = parseFloat(value);
    const label = document.getElementById(`label-${paramKey}`);
    if(label) label.innerText = value;
    
    updateChartData();
    updateJSONConsole();
}

function handleModelChange() {
    const model = document.getElementById('param-dist-model').value;
    paramState.model = model;

    if (model === 'normal') {
        document.getElementById('wrapper-param-mean').classList.remove('hidden');
        document.getElementById('wrapper-param-std').classList.remove('hidden');
        document.getElementById('wrapper-param-noise').classList.add('hidden');
        document.getElementById('chart-title').innerText = "Visualisasi Distribusi Kerapatan Peluang (PDF)";
        document.getElementById('chart-indicator-type').innerText = "Gauss Normal";
    } else {
        document.getElementById('wrapper-param-mean').classList.add('hidden');
        document.getElementById('wrapper-param-std').classList.add('hidden');
        document.getElementById('wrapper-param-noise').classList.remove('hidden');
        document.getElementById('chart-title').innerText = "Simulasi Tren Linear Hasil Regresi Python";
        document.getElementById('chart-indicator-type').innerText = "Linear Regression + Noise";
    }
    updateChartData();
    updateJSONConsole();
}

function calculateNormalPDF(x, mean, std) {
    const exponent = Math.exp(-0.5 * Math.pow((x - mean) / std, 2));
    return (1 / (std * Math.sqrt(2 * Math.PI))) * exponent;
}

function updateChartData() {
    if (!samplingChart) return;

    const isDark = document.documentElement.classList.contains('dark');
    const textColor = isDark ? '#94a3b8' : '#475569';
    const gridColor = isDark ? 'rgba(255, 255, 255, 0.05)' : 'rgba(0, 0, 0, 0.05)';

    let datasets = [];

    if (paramState.model === 'normal') {
        const points = [];
        const mean = paramState.mean;
        const std = paramState.std;
        
        const minX = mean - 4 * std;
        const maxX = mean + 4 * std;
        const step = (maxX - minX) / 100;

        for (let x = minX; x <= maxX; x += step) {
            points.push({ x: x, y: calculateNormalPDF(x, mean, std) });
        }

        datasets = [{
            label: `Normal PDF (μ=${mean}, σ=${std})`,
            data: points,
            borderColor: '#8b5cf6',
            borderWidth: 3,
            pointRadius: 0,
            pointHoverRadius: 6,
            fill: true,
            backgroundColor: 'rgba(139, 92, 246, 0.08)',
            tension: 0.3
        }];
    } else {
        const pointsScatter = [];
        const pointsTrend = [];
        const n = Math.min(250, paramState.n);
        
        for (let i = 0; i < n; i++) {
            const x = (i / n) * 100;
            const randNoise = (Math.random() - 0.5) * paramState.noise;
            const y = 0.5 * x + 10 + randNoise;
            pointsScatter.push({ x: x, y: y });
            pointsTrend.push({ x: x, y: 0.5 * x + 10 });
        }

        datasets = [
            {
                label: 'Garis Tren Teoretis Python',
                data: pointsTrend,
                borderColor: '#8b5cf6',
                borderWidth: 3,
                pointRadius: 0,
                pointHoverRadius: 6,
                showLine: true,
                fill: false,
                tension: 0
            },
            {
                label: 'Titik Sampel Lapangan',
                data: pointsScatter,
                borderColor: '#6366f1',
                backgroundColor: 'rgba(99, 102, 241, 0.4)',
                pointRadius: 3,
                showLine: false,
                type: 'scatter'
            }
        ];
    }

    samplingChart.data.datasets = datasets;
    samplingChart.options.scales.x.grid.color = gridColor;
    samplingChart.options.scales.y.grid.color = gridColor;
    samplingChart.options.scales.x.ticks.color = textColor;
    samplingChart.options.scales.y.ticks.color = textColor;
    samplingChart.options.plugins.legend.labels.color = textColor;
    
    samplingChart.update('none');
}

function runPythonSimulation() {
    showToast("Memulai simulasi kalkulasi Python backend...");
    
    setTimeout(() => {
        updateChartData();
        showToast("Simulasi Python Berhasil! Data grafik telah diperbarui.");
    }, 800);
}

// ================= LOGIKA INTEGRASI API JSON CONSOLE =================
function updateJSONConsole() {
    const consolePre = document.getElementById('api-json-console');
    if(!consolePre) return;
    
    let previewCoords = [];
    if (paramState.model === 'normal') {
        const mean = paramState.mean;
        const std = paramState.std;
        for (let i = -2; i <= 2; i++) {
            let xVal = mean + (i * std * 1.5);
            previewCoords.push({
                x: parseFloat(xVal.toFixed(2)),
                y: parseFloat(calculateNormalPDF(xVal, mean, std).toFixed(5))
            });
        }
    } else {
        for (let i = 0; i < 5; i++) {
            let xVal = i * 20;
            previewCoords.push({
                x: xVal,
                y: parseFloat((0.5 * xVal + 10).toFixed(2))
            });
        }
    }

    const response = {
        status: "success",
        timestamp: new Date().toISOString(),
        data: {
            distribution_model: paramState.model,
            total_parameters: {
                mean: paramState.mean,
                std_dev: paramState.std,
                sample_size: paramState.n,
                noise_scale: paramState.noise
            },
            preview_coordinates: previewCoords
        }
    };

    consolePre.innerText = JSON.stringify(response, null, 2);
}

function copyToClipboard() {
    const consolePre = document.getElementById('api-json-console');
    const textarea = document.createElement('textarea');
    textarea.value = consolePre.innerText;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    document.body.removeChild(textarea);
    showToast("JSON berhasil disalin ke clipboard!");
}