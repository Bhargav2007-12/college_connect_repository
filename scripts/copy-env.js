#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// Copy env.json from frontend root to dist directory
const sourceFile = path.join(__dirname, '..', 'src', 'frontend', 'env.json');
const destDir = path.join(__dirname, '..', 'src', 'frontend', 'dist');
const destFile = path.join(destDir, 'env.json');

try {
  // Ensure dist directory exists
  if (!fs.existsSync(destDir)) {
    fs.mkdirSync(destDir, { recursive: true });
  }

  // Copy the file
  fs.copyFileSync(sourceFile, destFile);
  console.log(`✓ Copied env.json to dist/`);
} catch (error) {
  console.error(`✗ Failed to copy env.json: ${error.message}`);
  process.exit(1);
}
