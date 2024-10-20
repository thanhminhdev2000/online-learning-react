import fs from 'fs';

const path = './src/api';
fs.readdirSync(path).forEach((file) => {
  const filePath = `${path}/${file}`;
  const content = fs
    .readFileSync(filePath, 'utf8')
    .replace(/Models/g, '')
    .replace(/Create/g, '');
  fs.writeFileSync(filePath, content);
});
