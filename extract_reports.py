#!/usr/bin/env python3
"""
Extract images from DOCX files and convert DOCX to PDF
Place your .docx files in the project root directory
This script will extract images to public/images/ and create PDFs in public/reports/
"""

import os
import subprocess
from pathlib import Path
from docx import Document
from docx.oxml import parse_xml
import shutil

def extract_images_from_docx(docx_path, output_dir):
    """Extract all images from a DOCX file"""
    print(f"Extracting images from: {docx_path}")
    
    doc = Document(docx_path)
    image_count = 0
    
    # Extract images from document relationships
    for rel in doc.part.rels.values():
        if "image" in rel.target_ref:
            image_count += 1
            image_part = rel.target_part
            image_bytes = image_part.blob
            
            # Get image filename
            ext = image_part.content_type.split('/')[-1]
            image_name = f"{Path(docx_path).stem}_image_{image_count}.{ext}"
            image_path = os.path.join(output_dir, image_name)
            
            # Save image
            with open(image_path, 'wb') as f:
                f.write(image_bytes)
            
            print(f"  ✓ Saved: {image_name}")
    
    return image_count

def convert_docx_to_pdf(docx_path, output_path):
    """Convert DOCX to PDF using LibreOffice"""
    try:
        output_dir = os.path.dirname(output_path)
        subprocess.run([
            'soffice',
            '--headless',
            '--convert-to', 'pdf',
            '--outdir', output_dir,
            docx_path
        ], check=True, capture_output=True)
        print(f"  ✓ Converted to PDF: {os.path.basename(output_path)}")
        return True
    except subprocess.CalledProcessError as e:
        print(f"  ✗ PDF conversion failed: {e}")
        return False
    except FileNotFoundError:
        print("  ✗ LibreOffice not found. Install LibreOffice to convert to PDF.")
        return False

def main():
    # Setup paths
    project_root = Path(__file__).parent
    images_dir = project_root / 'public' / 'images'
    reports_dir = project_root / 'public' / 'reports'
    
    # Create directories
    images_dir.mkdir(parents=True, exist_ok=True)
    reports_dir.mkdir(parents=True, exist_ok=True)
    
    # Find all DOCX files in project root
    docx_files = list(project_root.glob('*.docx'))
    
    if not docx_files:
        print("No .docx files found in project root directory")
        return
    
    print(f"Found {len(docx_files)} DOCX file(s)\n")
    
    for docx_path in docx_files:
        print(f"\n{'='*60}")
        print(f"Processing: {docx_path.name}")
        print(f"{'='*60}")
        
        try:
            # Extract images
            image_count = extract_images_from_docx(str(docx_path), str(images_dir))
            print(f"  Total images extracted: {image_count}")
            
            # Convert to PDF
            pdf_name = docx_path.stem.replace(' - ', '-') + '.pdf'
            pdf_path = reports_dir / pdf_name
            
            print(f"\nConverting to PDF...")
            convert_docx_to_pdf(str(docx_path), str(pdf_path))
            
        except Exception as e:
            print(f"  ✗ Error processing {docx_path.name}: {e}")
    
    print(f"\n{'='*60}")
    print("Done! Check:")
    print(f"  Images: {images_dir}")
    print(f"  Reports: {reports_dir}")
    print(f"{'='*60}\n")

if __name__ == '__main__':
    main()
