// vercel-build.js
const { execSync } = require('child_process');

execSync('prisma generate');
