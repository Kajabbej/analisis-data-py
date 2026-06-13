// ================= STATE & DATA GLOBAL =================
let rawDataset = [];
let filteredDataset = [];
let tableState = {
    searchQuery: '',
    sortColumn: typeof excelDataset !== 'undefined' ? 'Tanggal' : 'id',
    sortDirection: 'asc',
    currentPage: 1,
    pageSize: 25
};
let samplingTableState = {
    method: 'srs', // 'srs' or 'stratified'
    currentPage: 1,
    pageSize: 10,
    searchQuery: '',
    data: []
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
    if (typeof excelDataset !== 'undefined') {
        rawDataset = excelDataset;
        filteredDataset = [...excelDataset];
    } else {
        generateMockData(1000);
    }
    initChart();
    renderTable();
    initSamplingTable();
    updateJSONConsole();

    // Auto-rotation slider hero
    setInterval(nextHeroSlide, 5000);

    // GSAP load animation untuk Hero Section
    if (typeof gsap !== 'undefined') {
        // Inisialisasi pemisahan teks huruf demi huruf untuk header
        initHeroTextSplitting();

        // Set awal posisi element lainnya
        gsap.set("#about-project .lg\\:col-span-6:first-child > *:not(h2)", { opacity: 0, y: 30 });
        gsap.set("#about-project .lg\\:col-span-6:last-child > *", { opacity: 0, scale: 0.95 });

        // Buat Timeline agar animasi berjalan teratur
        const tl = gsap.timeline();

        // 1. Tagline di atas heading
        tl.to("#about-project .lg\\:col-span-6:first-child > div:first-child", {
            opacity: 1,
            y: 0,
            duration: 0.5,
            ease: "power2.out"
        });

        // 2. Animasi huruf demi huruf (Metode Statistika & Data Analisis UTM)
        tl.to("#about-project h2 .char-span", {
            opacity: 1,
            y: 0,
            scale: 1,
            rotateX: 0,
            duration: 0.45,
            stagger: 0.03,
            ease: "back.out(1.5)"
        }, "-=0.25");

        // 3. Deskripsi & tombol-tombol
        tl.to("#about-project .lg\\:col-span-6:first-child > p, #about-project .lg\\:col-span-6:first-child > div.pt-4", {
            opacity: 1,
            y: 0,
            duration: 0.6,
            stagger: 0.15,
            ease: "power2.out"
        }, "-=0.3");

        // 4. Jalankan animasi bounce/scale untuk gambar & slider kanan
        gsap.to("#about-project .lg\\:col-span-6:last-child > *", {
            opacity: 1,
            scale: 1,
            duration: 1.0,
            stagger: 0.25,
            ease: "back.out(1.2)",
            delay: 0.6
        });
    }
});

// ================= TRANSISI ANTARA LANDING PAGE & WORKSPACE =================
function enterAppConsole() {
    // Sembunyikan Landing Page, Tampilkan Konsol Kerja
    const landing = document.getElementById('view-landing-page');
    const workspace = document.getElementById('view-app-workspace');

    if (typeof gsap !== 'undefined') {
        gsap.to(landing, {
            opacity: 0,
            y: -20,
            duration: 0.3,
            onComplete: () => {
                landing.classList.add('hidden');
                workspace.classList.remove('hidden');
                
                gsap.fromTo(workspace, {
                    opacity: 0,
                    y: 20
                }, {
                    opacity: 1,
                    y: 0,
                    duration: 0.4,
                    ease: "power2.out",
                    onComplete: () => {
                        gsap.set(workspace, { clearProps: "all" });
                    }
                });

                switchTab('data-table');
            }
        });
    } else {
        landing.classList.add('hidden');
        workspace.classList.remove('hidden');
        switchTab('data-table');
    }

    showToast("Masuk ke konsol aplikasi operasional.");

    // Paksa ChartJS merender ulang sesuai ukuran kontainer workspace yang baru
    if (samplingChart) {
        setTimeout(() => {
            samplingChart.resize();
            updateChartData();
        }, 400);
    }
}

function leaveAppConsole() {
    const landing = document.getElementById('view-landing-page');
    const workspace = document.getElementById('view-app-workspace');

    if (typeof gsap !== 'undefined') {
        gsap.to(workspace, {
            opacity: 0,
            y: 20,
            duration: 0.3,
            onComplete: () => {
                workspace.classList.add('hidden');
                landing.classList.remove('hidden');
                
                gsap.fromTo(landing, {
                    opacity: 0,
                    y: -20
                }, {
                    opacity: 1,
                    y: 0,
                    duration: 0.4,
                    ease: "power2.out",
                    onComplete: () => {
                        gsap.set(landing, { clearProps: "all" });
                    }
                });
                
                window.scrollTo({ top: 0, behavior: 'smooth' });
            }
        });
    } else {
        workspace.classList.add('hidden');
        landing.classList.remove('hidden');
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    showToast("Kembali ke Halaman Depan.");
}

// ================= FUNGSI NAVIGASI TAB KONSOL =================
function switchTab(tabId) {
    const activeTab = document.getElementById(`tab-${tabId}`);
    if (!activeTab) return;

    // Sembunyikan semua tab operasional
    document.querySelectorAll('.tab-content').forEach(tab => {
        tab.classList.add('hidden');
    });
    // Tampilkan tab target
    activeTab.classList.remove('hidden');

    if (typeof gsap !== 'undefined') {
        gsap.fromTo(activeTab, {
            opacity: 0,
            y: 10
        }, {
            opacity: 1,
            y: 0,
            duration: 0.3,
            ease: "power1.out",
            onComplete: () => {
                gsap.set(activeTab, { clearProps: "opacity,transform,y" });
            }
        });
    }

    // Atur status aktif pada tombol navigasi konsol
    document.querySelectorAll('.nav-btn').forEach(btn => {
        btn.className = "nav-btn px-4 py-2 rounded-lg text-xs font-bold transition-all text-slate-600 hover:text-slate-950 dark:text-slate-400 dark:hover:text-slate-100 hover:bg-slate-200/20 dark:hover:bg-slate-800/20";
    });
    const activeBtn = document.getElementById(`nav-${tabId}`);
    if (activeBtn) {
        activeBtn.className = "nav-btn px-4 py-2 rounded-lg text-xs font-bold transition-all text-brand-600 dark:text-brand-400 bg-slate-200/50 dark:bg-slate-800/60 font-extrabold";
    }

    if (tabId === 'visualization' && samplingChart) {
        setTimeout(() => {
            samplingChart.resize();
            updateChartData();
        }, 50);
    }

    showToast(`Modul ${getTabName(tabId)} dibuka.`);
}

function getTabName(tabId) {
    switch (tabId) {
        case 'data-table': return 'Tabel Data Asli';
        case 'visualization': return 'Visualisasi Kurva';
        case 'api-doc': return 'Diagnosa Data Sampling';
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
        while (u === 0) u = Math.random();
        while (v === 0) v = Math.random();
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
    if (!tbody) return;
    tbody.innerHTML = '';

    const startIdx = (tableState.currentPage - 1) * tableState.pageSize;
    const endIdx = startIdx + tableState.pageSize;
    const pageData = filteredDataset.slice(startIdx, endIdx);

    const isExcel = typeof excelDataset !== 'undefined';

    if (pageData.length === 0) {
        tbody.innerHTML = `
            <tr>
                <td colspan="${isExcel ? 4 : 5}" class="px-6 py-8 text-center text-slate-500">
                    Tidak ada data yang cocok dengan kriteria pencarian Anda.
                </td>
            </tr>
        `;
        return;
    }

    pageData.forEach((row, index) => {
        const tr = document.createElement('tr');
        tr.className = "hover:bg-slate-200/10 dark:hover:bg-slate-800/10 transition-colors";

        if (isExcel) {
            tr.innerHTML = `
                <td class="px-6 py-3 font-semibold font-mono text-xs text-brand-600 dark:text-brand-400">${startIdx + index + 1}</td>
                <td class="px-6 py-3 font-medium text-slate-900 dark:text-slate-100">${row.Tanggal || '-'}</td>
                <td class="px-6 py-3 font-mono text-xs font-bold text-slate-700 dark:text-slate-300">${parseFloat(row.TotalHarga || 0).toLocaleString('id-ID', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</td>
                <td class="px-6 py-3 font-mono text-xs text-slate-500">${row.JumlahTransaksi ? row.JumlahTransaksi.toLocaleString('id-ID') : 0}</td>
            `;
        } else {
            let badgeClass = "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300";
            if (row.category === "Anomali Kritis") {
                badgeClass = "bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300 animate-pulse";
            } else if (row.category === "Peringatan Luar") {
                badgeClass = "bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-300";
            }
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
        }
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
    if (!pagesContainer) return;
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

    const isExcel = typeof excelDataset !== 'undefined';

    if (query === '') {
        filteredDataset = [...rawDataset];
    } else {
        filteredDataset = rawDataset.filter(item => {
            if (isExcel) {
                return (item.Tanggal && item.Tanggal.toLowerCase().includes(query)) ||
                    (item.TotalHarga && item.TotalHarga.toString().includes(query)) ||
                    (item.JumlahTransaksi && item.JumlahTransaksi.toString().includes(query));
            } else {
                return (item.id && item.id.toLowerCase().includes(query)) ||
                    (item.category && item.category.toLowerCase().includes(query)) ||
                    (item.value && item.value.toString().includes(query));
            }
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
    if (indicator) {
        indicator.innerText = tableState.sortDirection === 'asc' ? '↑' : '↓';
    }

    filteredDataset.sort((a, b) => {
        let valA = a[column];
        let valB = b[column];

        if (valA === undefined || valA === null) valA = '';
        if (valB === undefined || valB === null) valB = '';

        if (typeof valA === 'string' || typeof valB === 'string') {
            return tableState.sortDirection === 'asc'
                ? valA.toString().localeCompare(valB.toString())
                : valB.toString().localeCompare(valA.toString());
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
    const link = document.createElement("a");
    link.setAttribute("href", "data exel/data.csv.xlsx");
    link.setAttribute("download", "data.csv.xlsx");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    showToast("Mengunduh file Excel data asli...");
}

function handleExportSelect(elem) {
    if (elem.value === 'current') {
        downloadCSV();
    } else if (elem.value === 'kaggle') {
        window.open('https://www.kaggle.com/datasets/carrie1/ecommerce-data', '_blank');
        showToast("Membuka dataset Kaggle...");
    }
    elem.value = "";
}


// ================= LOGIKA GRAFIK & ESTIMASI KURVA =================
function initChart() {
    const ctx = document.getElementById('sampling-chart');
    if (!ctx) return;
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
                        label: function (context) {
                            return `Nilai Y: ${context.parsed.y.toFixed(5)}`;
                        },
                        title: function (context) {
                            return `Titik X: ${context[0].parsed.x.toFixed(2)}`;
                        }
                    }
                }
            },
            scales: {
                x: {
                    type: 'linear',
                    position: 'bottom',
                    title: {
                        display: true,
                        text: 'Nilai Pendapatan (Daily Revenue)',
                        color: document.documentElement.classList.contains('dark') ? '#e2e8f0' : '#1e293b',
                        font: {
                            family: '"Nova Flat"',
                            size: 11,
                            weight: 'bold'
                        }
                    },
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
                    title: {
                        display: true,
                        text: 'Density',
                        color: document.documentElement.classList.contains('dark') ? '#e2e8f0' : '#1e293b',
                        font: {
                            family: '"Nova Flat"',
                            size: 11,
                            weight: 'bold'
                        }
                    },
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
    if (label) label.innerText = value;

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

function calculateKDE(dataset) {
    if (!dataset || dataset.length === 0) return [];
    const values = dataset.map(d => parseFloat(d.TotalHarga)).filter(v => !isNaN(v));
    const N = values.length;
    if (N === 0) return [];

    const sum = values.reduce((s, v) => s + v, 0);
    const mean = sum / N;
    const variance = values.reduce((s, v) => s + Math.pow(v - mean, 2), 0) / (N - 1 || 1);
    const std = Math.sqrt(variance);

    // Scott's rule for bandwidth (h = std * N^(-1/5))
    const bandwidth = std * Math.pow(N, -0.2);

    const points = [];
    const minX = -20000;
    const maxX = 140000;
    const step = 2000;
    const invSqrt2Pi = 1 / Math.sqrt(2 * Math.PI);

    for (let x = minX; x <= maxX; x += step) {
        let kernelSum = 0;
        for (let i = 0; i < N; i++) {
            const u = (x - values[i]) / bandwidth;
            kernelSum += Math.exp(-0.5 * u * u) * invSqrt2Pi;
        }
        const density = kernelSum / (N * bandwidth);
        points.push({ x: x, y: density });
    }

    return points;
}

function handleModeToggle() {
    const mode = document.getElementById('visualization-mode').value;
    const realPanel = document.getElementById('real-data-summary-panel');
    const simPanel = document.getElementById('simulation-controls-panel');
    const tablePanel = document.getElementById('sampling-table-panel');
    const compWrapper = document.getElementById('wrapper-real-comparison');

    if (mode === 'real') {
        realPanel.classList.remove('hidden');
        simPanel.classList.add('hidden');
        tablePanel.classList.remove('hidden');
        if (compWrapper) compWrapper.classList.remove('hidden');
    } else {
        realPanel.classList.add('hidden');
        simPanel.classList.remove('hidden');
        tablePanel.classList.add('hidden');
        if (compWrapper) compWrapper.classList.add('hidden');
    }

    updateChartData();
}

function updateChartData() {
    if (!samplingChart) return;

    const isDark = document.documentElement.classList.contains('dark');
    const textColor = isDark ? '#94a3b8' : '#475569';
    const gridColor = isDark ? 'rgba(255, 255, 255, 0.05)' : 'rgba(0, 0, 0, 0.05)';

    const mode = document.getElementById('visualization-mode')?.value || 'real';
    let datasets = [];

    if (mode === 'real') {
        document.getElementById('chart-title').innerText = "Visualisasi Kerapatan Distribusi Pendapatan (KDE)";
        document.getElementById('chart-indicator-type').innerText = "Data Riil (Sampling Excel)";

        // Set X-axis range and Y-axis to exponential formatting
        samplingChart.options.scales.x.min = -20000;
        samplingChart.options.scales.x.max = 140000;
        samplingChart.options.scales.y.ticks.callback = function (value) {
            return value.toExponential(1);
        };

        const compSelect = document.getElementById('real-comparison-select')?.value || 'all';

        const metricSrs = document.getElementById('real-metric-srs');
        const metricStratified = document.getElementById('real-metric-stratified');
        const metricComparison = document.getElementById('real-metric-comparison');

        if (compSelect === 'all') {
            if (metricSrs) metricSrs.classList.remove('hidden');
            if (metricStratified) metricStratified.classList.remove('hidden');
            if (metricComparison) metricComparison.classList.remove('hidden');
        } else if (compSelect === 'srs') {
            if (metricSrs) metricSrs.classList.remove('hidden');
            if (metricStratified) metricStratified.classList.add('hidden');
            if (metricComparison) metricComparison.classList.add('hidden');
        } else if (compSelect === 'stratified') {
            if (metricSrs) metricSrs.classList.add('hidden');
            if (metricStratified) metricStratified.classList.remove('hidden');
            if (metricComparison) metricComparison.classList.add('hidden');
        }

        const popDist = calculateKDE(excelDataset);

        datasets.push({
            label: 'Populasi Data Utuh',
            data: popDist,
            borderColor: '#3b82f6',
            backgroundColor: 'rgba(59, 130, 246, 0.25)',
            borderWidth: 2.5,
            pointRadius: 0,
            pointHoverRadius: 6,
            fill: true,
            tension: 0.35
        });

        if (compSelect === 'all' || compSelect === 'srs') {
            const srsDist = calculateKDE(srsDataset);
            datasets.push({
                label: 'Sampel Acak SRS (61 Data)',
                data: srsDist,
                borderColor: '#ef4444',
                backgroundColor: 'transparent',
                borderWidth: 2,
                borderDash: [6, 4],
                pointRadius: 0,
                pointHoverRadius: 6,
                fill: false,
                tension: 0.35
            });
        }

        if (compSelect === 'all' || compSelect === 'stratified') {
            const stratDist = calculateKDE(stratifiedDataset);
            datasets.push({
                label: 'Sampel Stratified (60 Data)',
                data: stratDist,
                borderColor: '#10b981',
                backgroundColor: 'transparent',
                borderWidth: 2,
                borderDash: [6, 4],
                pointRadius: 0,
                pointHoverRadius: 6,
                fill: false,
                tension: 0.35
            });
        }

        samplingChart.options.plugins.tooltip.callbacks.title = function (context) {
            return `Pendapatan: ${context[0].parsed.x.toLocaleString('id-ID')}`;
        };
        samplingChart.options.plugins.tooltip.callbacks.label = function (context) {
            return `${context.dataset.label}: ${context.parsed.y.toExponential(3)}`;
        };
    } else {
        // Revert scale defaults for simulation
        samplingChart.options.scales.x.min = undefined;
        samplingChart.options.scales.x.max = undefined;
        samplingChart.options.scales.y.ticks.callback = undefined;

        const model = paramState.model;
        if (model === 'normal') {
            document.getElementById('chart-title').innerText = "Visualisasi Distribusi Kerapatan Peluang (PDF)";
            document.getElementById('chart-indicator-type').innerText = "Gauss Normal";

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
            document.getElementById('chart-title').innerText = "Simulasi Tren Linear Hasil Regresi Python";
            document.getElementById('chart-indicator-type').innerText = "Linear Regression + Noise";

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

        samplingChart.options.plugins.tooltip.callbacks.title = function (context) {
            return `Titik X: ${context[0].parsed.x.toFixed(2)}`;
        };
        samplingChart.options.plugins.tooltip.callbacks.label = function (context) {
            return `Nilai Y: ${context.parsed.y.toFixed(5)}`;
        };
    }

    samplingChart.data.datasets = datasets;
    samplingChart.options.scales.x.grid.color = gridColor;
    samplingChart.options.scales.y.grid.color = gridColor;
    samplingChart.options.scales.x.ticks.color = textColor;
    samplingChart.options.scales.y.ticks.color = textColor;
    samplingChart.options.plugins.legend.labels.color = textColor;

    samplingChart.update('none');
}

// ================= LOGIKA TABEL SAMPLING WORKSPACE =================
function initSamplingTable() {
    if (typeof srsDataset !== 'undefined') {
        samplingTableState.data = (samplingTableState.method === 'srs') ? srsDataset : stratifiedDataset;
    }
    renderSamplingTable();
}

function switchSamplingMethod(method) {
    samplingTableState.method = method;
    samplingTableState.currentPage = 1;

    const btnSrs = document.getElementById('btn-sampling-srs');
    const btnStrat = document.getElementById('btn-sampling-stratified');

    if (method === 'srs') {
        btnSrs.className = "px-3 py-1.5 rounded-lg text-xs font-bold transition-all bg-white dark:bg-slate-800 text-brand-600 dark:text-brand-400 shadow-sm";
        btnStrat.className = "px-3 py-1.5 rounded-lg text-xs font-bold transition-all text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-100 font-normal";
        samplingTableState.data = srsDataset;
    } else {
        btnStrat.className = "px-3 py-1.5 rounded-lg text-xs font-bold transition-all bg-white dark:bg-slate-800 text-brand-600 dark:text-brand-400 shadow-sm";
        btnSrs.className = "px-3 py-1.5 rounded-lg text-xs font-bold transition-all text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-100 font-normal";
        samplingTableState.data = stratifiedDataset;
    }

    renderSamplingTable();
}

function handleSamplingSearch() {
    samplingTableState.searchQuery = document.getElementById('sampling-search').value.toLowerCase();
    samplingTableState.currentPage = 1;
    renderSamplingTable();
}

function renderSamplingTable() {
    const tbody = document.getElementById('sampling-table-body');
    if (!tbody) return;

    const query = samplingTableState.searchQuery;
    const filtered = samplingTableState.data.filter(row => {
        return row.Tanggal.includes(query) || row.Hari.toLowerCase().includes(query);
    });

    const totalItems = filtered.length;
    const totalPages = Math.max(1, Math.ceil(totalItems / samplingTableState.pageSize));

    if (samplingTableState.currentPage > totalPages) {
        samplingTableState.currentPage = totalPages;
    }

    const startIndex = (samplingTableState.currentPage - 1) * samplingTableState.pageSize;
    const endIndex = Math.min(startIndex + samplingTableState.pageSize, totalItems);
    const paginated = filtered.slice(startIndex, endIndex);

    document.getElementById('sampling-info-count').innerText = paginated.length;
    document.getElementById('sampling-info-total').innerText = totalItems;
    document.getElementById('sampling-pagination-info').innerText = `Halaman ${samplingTableState.currentPage} dari ${totalPages}`;

    document.getElementById('btn-sampling-prev').disabled = samplingTableState.currentPage === 1;
    document.getElementById('btn-sampling-next').disabled = samplingTableState.currentPage === totalPages;

    if (paginated.length === 0) {
        tbody.innerHTML = `
            <tr>
                <td colspan="5" class="px-4 py-8 text-center text-slate-400 dark:text-slate-600">
                    Tidak ditemukan hasil sampling yang cocok.
                </td>
            </tr>
        `;
        return;
    }

    tbody.innerHTML = paginated.map((row, index) => {
        const globalIndex = startIndex + index + 1;
        const formattedPrice = parseFloat(row.TotalHarga).toLocaleString('id-ID', {
            minimumFractionDigits: 0,
            maximumFractionDigits: 2
        });

        return `
            <tr class="hover:bg-slate-200/20 dark:hover:bg-slate-800/10 transition-colors">
                <td class="px-4 py-3 font-semibold text-slate-400 dark:text-slate-650">${globalIndex}</td>
                <td class="px-4 py-3 font-medium text-slate-800 dark:text-slate-250">${row.Tanggal}</td>
                <td class="px-4 py-3">
                    <span class="inline-flex items-center px-2 py-0.5 rounded-md text-[10px] font-semibold bg-slate-200/50 dark:bg-slate-900/50 text-slate-600 dark:text-slate-400 border border-slate-300/20 dark:border-slate-700/20">
                        ${row.Hari}
                    </span>
                </td>
                <td class="px-4 py-3 font-mono font-semibold text-brand-600 dark:text-brand-400">${formattedPrice}</td>
                <td class="px-4 py-3 text-right font-semibold text-slate-700 dark:text-slate-300">${row.JumlahTransaksi.toLocaleString()}</td>
            </tr>
        `;
    }).join('');
}

function prevSamplingPage() {
    if (samplingTableState.currentPage > 1) {
        samplingTableState.currentPage--;
        renderSamplingTable();
    }
}

function nextSamplingPage() {
    const query = samplingTableState.searchQuery;
    const filtered = samplingTableState.data.filter(row => {
        return row.Tanggal.includes(query) || row.Hari.toLowerCase().includes(query);
    });
    const totalPages = Math.ceil(filtered.length / samplingTableState.pageSize);
    if (samplingTableState.currentPage < totalPages) {
        samplingTableState.currentPage++;
        renderSamplingTable();
    }
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
    if (!consolePre) return;

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

// ================= HERO CAROUSEL / SLIDER FUNCTIONS =================
let currentHeroSlide = 0;
const totalHeroSlides = 3;

function showHeroSlide(index) {
    for (let i = 0; i < totalHeroSlides; i++) {
        const slide = document.getElementById(`slide-${i}`);
        if (slide) {
            if (i === index) {
                slide.classList.remove('hidden');
                slide.classList.add('block');
                if (typeof gsap !== 'undefined') {
                    gsap.fromTo(slide, {
                        opacity: 0,
                        scale: 0.98,
                        x: 15
                    }, {
                        opacity: 1,
                        scale: 1,
                        x: 0,
                        duration: 0.45,
                        ease: "power2.out"
                    });
                }
            } else {
                slide.classList.remove('block');
                slide.classList.add('hidden');
            }
        }
    }
}

function nextHeroSlide() {
    currentHeroSlide = (currentHeroSlide + 1) % totalHeroSlides;
    showHeroSlide(currentHeroSlide);
}

function prevHeroSlide() {
    currentHeroSlide = (currentHeroSlide - 1 + totalHeroSlides) % totalHeroSlides;
    showHeroSlide(currentHeroSlide);
}

// ================= DYNAMIC DIAGNOSA SWITCHER =================
function toggleDiagnosaMethod(method) {
    const isSrs = method === 'srs';

    document.getElementById('diag-sample-size').innerText = isSrs ? '61' : '60';
    document.getElementById('diag-mean').innerText = isSrs ? '31.318' : '31.456';
    document.getElementById('diag-std').innerText = isSrs ? '16.910' : '19.032';
    document.getElementById('diag-fpc').innerText = isSrs ? '0.895' : '0.896';
    document.getElementById('diag-se').innerText = isSrs ? '1.935' : '2.226';
    document.getElementById('diag-moe').innerText = isSrs ? '± 3.792' : '± 4.363';
    document.getElementById('diag-ci-lower').innerText = isSrs ? '27.527' : '27.093';
    document.getElementById('diag-ci-upper').innerText = isSrs ? '35.110' : '35.820';

    document.getElementById('diag-ci-text').innerHTML = isSrs
        ? "Kami percaya 95% bahwa rata-rata populasi pendapatan harian sebenarnya berada di antara <strong>27.527</strong> dan <strong>35.110</strong>."
        : "Kami percaya 95% bahwa rata-rata populasi pendapatan harian sebenarnya berada di antara <strong>27.093</strong> dan <strong>35.820</strong>.";

    showToast(`Diagnosa beralih ke metode ${isSrs ? 'Simple Random Sampling' : 'Stratified Random Sampling'}.`);
}

// ================= LOGIKA MODAL SUMBER PYTHON & GAMBAR =================
let srsCodeLoaded = false;
let stratifiedCodeLoaded = false;

function openPythonSourceModal() {
    const modal = document.getElementById('python-source-modal');
    if (modal) {
        modal.classList.remove('hidden');
        modal.classList.add('flex');

        const modalContent = modal.querySelector('.glassmorphism');
        if (modalContent && typeof gsap !== 'undefined') {
            gsap.fromTo(modalContent, {
                scale: 0.9,
                opacity: 0,
                y: 20
            }, {
                scale: 1,
                opacity: 1,
                y: 0,
                duration: 0.35,
                ease: "back.out(1.2)"
            });
            gsap.fromTo(modal, {
                opacity: 0
            }, {
                opacity: 1,
                duration: 0.25
            });
        }
    }

    // Load SRS code on first open
    if (!srsCodeLoaded) {
        fetchPythonScript('srs dan strata/sampling_srs.py', 'code-srs-viewer', () => {
            srsCodeLoaded = true;
        });
    }
    // Load Stratified code on first open
    if (!stratifiedCodeLoaded) {
        fetchPythonScript('srs dan strata/sampling_stratified.py', 'code-stratified-viewer', () => {
            stratifiedCodeLoaded = true;
        });
    }
}

function closePythonSourceModal() {
    const modal = document.getElementById('python-source-modal');
    if (modal) {
        const modalContent = modal.querySelector('.glassmorphism');
        if (modalContent && typeof gsap !== 'undefined') {
            gsap.to(modalContent, {
                scale: 0.9,
                opacity: 0,
                y: 20,
                duration: 0.25,
                ease: "power2.in"
            });
            gsap.to(modal, {
                opacity: 0,
                duration: 0.25,
                onComplete: () => {
                    modal.classList.remove('flex');
                    modal.classList.add('hidden');
                    gsap.set([modal, modalContent], { clearProps: "all" });
                }
            });
        } else {
            modal.classList.remove('flex');
            modal.classList.add('hidden');
        }
    }
}

function fetchPythonScript(filePath, elementId, callback) {
    const viewer = document.getElementById(elementId);
    if (!viewer) return;

    fetch(filePath)
        .then(response => {
            if (!response.ok) throw new Error("Gagal membaca file");
            return response.text();
        })
        .then(text => {
            viewer.textContent = text;
            if (callback) callback();
        })
        .catch(err => {
            viewer.textContent = `Gagal memuat file script: ${err.message}. Pastikan file berada di direktori local server Anda.`;
        });
}

function selectModalTab(tabName) {
    // Hide all panes
    const panes = document.querySelectorAll('.modal-pane');
    panes.forEach(pane => pane.classList.add('hidden'));

    // Show selected pane
    const targetPane = document.getElementById(`modal-pane-${tabName}`);
    if (targetPane) targetPane.classList.remove('hidden');

    // Update active tab styles
    const tabs = [
        { id: 'srs-code', btnId: 'modal-tab-srs-code' },
        { id: 'stratified-code', btnId: 'modal-tab-stratified-code' },
        { id: 'srs-img', btnId: 'modal-tab-srs-img' },
        { id: 'stratified-img', btnId: 'modal-tab-stratified-img' },
        { id: 'general-img', btnId: 'modal-tab-general-img' }
    ];

    tabs.forEach(tab => {
        const btn = document.getElementById(tab.btnId);
        if (!btn) return;
        if (tab.id === tabName) {
            btn.className = "w-full text-left px-3 py-2 rounded-xl text-xs font-bold flex items-center justify-between transition-all bg-brand-500/10 text-brand-600 dark:text-brand-400";
        } else {
            btn.className = "w-full text-left px-3 py-2 rounded-xl text-xs font-semibold flex items-center justify-between transition-all hover:bg-slate-200/50 dark:hover:bg-white/5 text-slate-500 dark:text-slate-400 hover:text-slate-800 dark:hover:text-slate-200";
        }
    });
}

// ================= UTILITY UNTUK ANIMASI HURUF DEMI HURUF =================
function initHeroTextSplitting() {
    const heading1 = document.querySelector("#about-project h2 span:first-child");
    const heading2 = document.querySelector("#about-project h2 span:last-child");
    
    const splitWordAndChars = (element) => {
        if (!element) return;
        const words = element.innerText.split(' ');
        element.innerHTML = '';
        
        words.forEach((word, wordIdx) => {
            const wordSpan = document.createElement('span');
            wordSpan.className = 'inline-block whitespace-nowrap';
            
            [...word].forEach(char => {
                const charSpan = document.createElement('span');
                charSpan.className = 'char-span inline-block';
                charSpan.style.opacity = '0';
                charSpan.style.transform = 'translateY(20px) scale(0.6) rotateX(-45deg)';
                charSpan.style.transformOrigin = 'center bottom';
                charSpan.textContent = char;
                wordSpan.appendChild(charSpan);
            });
            
            element.appendChild(wordSpan);
            
            if (wordIdx < words.length - 1) {
                const space = document.createElement('span');
                space.className = 'inline-block';
                space.innerHTML = '&nbsp;';
                element.appendChild(space);
            }
        });
    };
    
    splitWordAndChars(heading1);
    splitWordAndChars(heading2);
}