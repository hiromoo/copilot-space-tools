const glob = require('glob');
const fs = require('fs');
const path = require('path');

const ignoreFile = path.join(__dirname, '..', '.gitignore');
const cwd = path.join(__dirname, '..');

const patterns = fs.readFileSync(ignoreFile, 'utf-8')
    .split('\n')
    .map(line => line.trim())
    .filter(line => line && !line.startsWith('#') && !line.startsWith('!') && line !== 'node_modules/');

patterns.forEach(pattern => {
    glob.sync(pattern, { cwd, dot: true }).forEach(file => {
        try {
            fs.rmSync(path.join(cwd, file), { recursive: true, force: true });
            console.log(`Deleted: ${file}`);
        } catch (e) {
            // 無視
        }
    });
});
