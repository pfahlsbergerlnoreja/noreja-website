import sharp from 'sharp';
import { readdir, stat, mkdir, copyFile, readFile } from 'fs/promises';
import { existsSync } from 'fs';
import { resolve, dirname, join, relative } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Configuration
const SOURCE_DIR = resolve(__dirname, '../src/assets_raw');
const DEST_DIR = resolve(__dirname, '../src/assets');
const WEBP_QUALITY = 80;
const DEFAULT_EXCLUDED_FOLDERS = ['icons', 'platform'];

// Supported image formats for conversion
const CONVERTIBLE_FORMATS = ['.png', '.jpg', '.jpeg'];
const SVG_FORMATS = ['.svg'];
const VIDEO_FORMATS = ['.webm', '.mp4', '.mov', '.avi', '.mkv'];

interface ProcessingStats {
  converted: number;
  copied: number;
  skipped: number;
  errors: number;
  convertedFiles: string[];
}

// Parse command-line arguments
function parseArgs(): string[] {
  const args = process.argv.slice(2);
  const excludeIndex = args.indexOf('--exclude');
  
  if (excludeIndex === -1) {
    return DEFAULT_EXCLUDED_FOLDERS;
  }
  
  const excludeValue = args[excludeIndex + 1];
  if (!excludeValue) {
    console.warn('⚠️  --exclude flag provided but no folders specified. Using defaults.');
    return DEFAULT_EXCLUDED_FOLDERS;
  }
  
  const customExclusions = excludeValue.split(',').map(f => f.trim()).filter(Boolean);
  return [...DEFAULT_EXCLUDED_FOLDERS, ...customExclusions];
}

// Check if a path is in an excluded folder
function isExcluded(relativePath: string, excludedFolders: string[]): boolean {
  const pathParts = relativePath.split('/');
  return excludedFolders.some(excluded => pathParts.includes(excluded));
}

// Get file extension
function getExtension(filename: string): string {
  const ext = filename.toLowerCase().substring(filename.lastIndexOf('.'));
  return ext;
}

// Check if file is a video
function isVideo(ext: string): boolean {
  return VIDEO_FORMATS.includes(ext);
}

// Check if file is SVG
function isSVG(ext: string): boolean {
  return SVG_FORMATS.includes(ext);
}

// Check if file should be converted
function shouldConvert(ext: string): boolean {
  return CONVERTIBLE_FORMATS.includes(ext);
}

// Process a single file
async function processFile(
  sourcePath: string,
  destPath: string,
  stats: ProcessingStats,
  relativePath: string
): Promise<void> {
  const filename = sourcePath.split('/').pop() || '';
  const ext = getExtension(filename);
  
  try {
    // Create destination directory if it doesn't exist
    const destDir = dirname(destPath);
    if (!existsSync(destDir)) {
      await mkdir(destDir, { recursive: true });
    }
    
    if (isVideo(ext)) {
      // Skip video files
      stats.skipped++;
      return;
    }
    
    if (isSVG(ext)) {
      // Copy SVG files as-is
      await copyFile(sourcePath, destPath);
      stats.copied++;
      return;
    }
    
    if (shouldConvert(ext)) {
      // Convert to WebP
      const webpPath = destPath.replace(/\.(png|jpg|jpeg)$/i, '.webp');
      
      await sharp(sourcePath)
        .webp({ quality: WEBP_QUALITY })
        .toFile(webpPath);
      
      stats.converted++;
      stats.convertedFiles.push(relativePath);
      return;
    }
    
    // Unknown format - skip
    stats.skipped++;
    console.warn(`⚠️  Unknown format for ${relativePath}, skipping...`);
  } catch (error) {
    stats.errors++;
    console.error(`❌ Error processing ${relativePath}:`, error);
  }
}

// Recursively process directory
async function processDirectory(
  sourceDir: string,
  destDir: string,
  excludedFolders: string[],
  stats: ProcessingStats,
  basePath: string = ''
): Promise<void> {
  try {
    const entries = await readdir(sourceDir, { withFileTypes: true });
    
    for (const entry of entries) {
      const sourcePath = join(sourceDir, entry.name);
      const relativePath = basePath ? join(basePath, entry.name) : entry.name;
      
      // Check if folder is excluded
      if (entry.isDirectory()) {
        if (isExcluded(relativePath, excludedFolders)) {
          console.log(`⏭️  Skipping excluded folder: ${relativePath}`);
          stats.skipped++;
          continue;
        }
        
        // Recursively process subdirectory
        const destSubDir = join(destDir, entry.name);
        await processDirectory(sourcePath, destSubDir, excludedFolders, stats, relativePath);
      } else if (entry.isFile()) {
        // Check if parent folder is excluded
        if (basePath && isExcluded(basePath, excludedFolders)) {
          stats.skipped++;
          continue;
        }
        
        const destPath = join(destDir, entry.name);
        await processFile(sourcePath, destPath, stats, relativePath);
      }
    }
  } catch (error) {
    console.error(`❌ Error reading directory ${sourceDir}:`, error);
    stats.errors++;
  }
}

// Main function
async function compressImages() {
  console.log('🖼️  Starting image compression...\n');
  
  // Check if source directory exists
  if (!existsSync(SOURCE_DIR)) {
    console.error(`❌ Source directory not found: ${SOURCE_DIR}`);
    process.exit(1);
  }
  
  // Parse excluded folders
  const excludedFolders = parseArgs();
  console.log(`📁 Excluded folders: ${excludedFolders.join(', ')}\n`);
  
  // Initialize stats
  const stats: ProcessingStats = {
    converted: 0,
    copied: 0,
    skipped: 0,
    errors: 0,
    convertedFiles: []
  };
  
  // Process all files
  await processDirectory(SOURCE_DIR, DEST_DIR, excludedFolders, stats);
  
  // Print summary
  console.log('\n' + '='.repeat(60));
  console.log('📊 Compression Summary');
  console.log('='.repeat(60));
  console.log(`✅ Converted to WebP: ${stats.converted}`);
  console.log(`📋 Copied (SVG): ${stats.copied}`);
  console.log(`⏭️  Skipped: ${stats.skipped}`);
  console.log(`❌ Errors: ${stats.errors}`);
  console.log('='.repeat(60));
  
  if (stats.convertedFiles.length > 0) {
    console.log('\n📝 Converted files (for reference):');
    stats.convertedFiles.slice(0, 10).forEach(file => {
      console.log(`   - ${file}`);
    });
    if (stats.convertedFiles.length > 10) {
      console.log(`   ... and ${stats.convertedFiles.length - 10} more`);
    }
  }
  
  if (stats.errors > 0) {
    console.error('\n⚠️  Some files had errors during processing. Check the logs above.');
    process.exit(1);
  }
  
  console.log('\n✅ Image compression completed successfully!');
}

// Run the compression
compressImages().catch((error) => {
  console.error('❌ Fatal error:', error);
  process.exit(1);
});

