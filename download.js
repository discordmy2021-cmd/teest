import fs from 'fs';
import https from 'https';
import { execSync } from 'child_process';

const url = 'https://github.com/discordmy2021-cmd/Nashama-Drive/archive/refs/heads/main.zip';

function downloadFile(url, dest) {
  return new Promise((resolve, reject) => {
    https.get(url, (res) => {
      if (res.statusCode === 301 || res.statusCode === 302) {
        downloadFile(res.headers.location, dest).then(resolve).catch(reject);
      } else if (res.statusCode === 200) {
        const file = fs.createWriteStream(dest);
        res.pipe(file);
        file.on('finish', () => {
          file.close();
          resolve();
        });
      } else {
        reject(new Error(`Failed to download: ${res.statusCode}`));
      }
    }).on('error', reject);
  });
}

async function main() {
  try {
    console.log('Downloading repo...');
    await downloadFile(url, 'repo.zip');
    console.log('Downloaded repo.zip');
    
    execSync('unzip -o repo.zip');
    console.log('Unzipped repo.zip');
    
    // Create directories if they don't exist
    execSync('mkdir -p src public');
    
    execSync('cp -r Nashama-Drive-main/src/* src/');
    execSync('cp -r Nashama-Drive-main/public/* public/');
    execSync('cp Nashama-Drive-main/index.html .');
    
    console.log('Files copied successfully');
  } catch (err) {
    console.error('Error:', err);
    process.exit(1);
  }
}

main();
