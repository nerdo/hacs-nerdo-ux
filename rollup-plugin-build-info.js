import fs from 'fs';
import path from 'path';

export function buildInfo() {
  const timestamp = new Date().toISOString();
  
  return {
    name: 'build-info',
    buildStart() {
      console.log(`\n🔨 Building Nerdo UX`);
      console.log(`📅 Build timestamp: ${timestamp}\n`);
      
      // Write timestamp to a file that can be imported
      const content = `// Auto-generated build info
export const BUILD_TIMESTAMP = '${timestamp}';
`;
      
      fs.writeFileSync(
        path.resolve('./src/build-info.ts'),
        content,
        'utf8'
      );
    }
  };
}