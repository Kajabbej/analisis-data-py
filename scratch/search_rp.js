const fs = require('fs');
const path = require('path');

const workspaceDir = 'c:\\Users\\mohgh\\analisis-data-py';
const filesToCheck = ['index.html', 'script.js'];

filesToCheck.forEach(filename => {
    const filepath = path.join(workspaceDir, filename);
    if (fs.existsSync(filepath)) {
        console.log(`Checking ${filename}...`);
        const content = fs.readFileSync(filepath, 'utf8');
        const lines = content.split('\n');
        lines.forEach((line, idx) => {
            if (line.includes('Rp') || line.toLowerCase().includes('rupiah')) {
                console.log(`Line ${idx + 1}: ${line.trim()}`);
            }
        });
    }
});
