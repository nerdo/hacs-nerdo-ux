#!/usr/bin/env node

import fs from 'fs';
import path from 'path';

// Generate build-info.ts file with current timestamp
const timestamp = new Date().toISOString();

console.log(`📅 Generating build info with timestamp: ${timestamp}`);

const content = `// Auto-generated build info
export const BUILD_TIMESTAMP = '${timestamp}';
`;

const buildInfoPath = path.resolve('./src/build-info.ts');
fs.writeFileSync(buildInfoPath, content, 'utf8');

console.log(`✅ Generated ${buildInfoPath}`);