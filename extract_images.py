#!/usr/bin/env python3
"""
Simple script to extract images from DOCX files
For PDF conversion, manually save your Word docs as PDF
"""

import os
from pathlib import Path
from docx import Document

def extract_images_from_docx(docx_path, output_dir):
    """Extract all images from a DOCX file"""
    print(f"\n📄 Processing: {Path(docx_path).name}")
    print("-" * 60)
    
    try:
        doc = Document(docx_path)
        image_count = 0
        
        # Extract images from document relationships
        for rel_id, rel in doc.part.rels.items():
            if "image" in rel.target_ref:
                image_count += 1
                image_part = rel.target_part
                image_bytes = image_part.blob
                
                # Determine extension from content type
                content_type = image_part.content_type
                if 'png' in content_type:
                    ext = 'png'
                elif 'jpeg' in content_type or 'jpg' in content_type:
                    ext = 'jpg'
                elif 'gif' in content_type:
                    ext = 'gif'
                else:
                    ext = content_type.split('/')[-1]
                
                # Create image filename
                docx_name = Path(docx_path).stem
                image_name = f"{docx_name}-image-{image_count}.{ext}"
                image_path = os.path.join(output_dir, image_name)
                
                # Save image
                with open(image_path, 'wb') as f:
                    f.write(image_bytes)
                
                print(f"  ✓ Saved: {image_name} ({len(image_bytes) / 1024:.1f} KB)")
        
        if image_count == 0:
            print("  ℹ No images found in this document")
        else:
            print(f"  Total: {image_count} image(s) extracted")
        
        return image_count
        
    except Exception as e:
        print(f"  ✗ Error: {e}")
        return 0

def main():
    # Setup paths
    project_root = Path(__file__).parent
    images_dir = project_root / 'public' / 'images'
    
    # Create directory
    images_dir.mkdir(parents=True, exist_ok=True)
    
    # Find all DOCX files in project root
    docx_files = list(project_root.glob('*.docx'))
    
    if not docx_files:
        print("\n⚠️  No .docx files found in project root directory")
        print("   Place your Word documents in the project root and run this script again")
        return
    
    print(f"\n{'='*60}")
    print(f"📚 Found {len(docx_files)} DOCX file(s)")
    print(f"{'='*60}")
    
    total_images = 0
    for docx_path in docx_files:
        total_images += extract_images_from_docx(str(docx_path), str(images_dir))
    
    print(f"\n{'='*60}")
    print(f"✓ Extraction Complete!")
    print(f"  • Total images extracted: {total_images}")
    print(f"  • Image location: {images_dir}")
    print(f"  • Report location: {project_root / 'public' / 'reports'}")
    print(f"\n📝 Next steps:")
    print(f"  1. Copy your .docx files as PDF to public/reports/")
    print(f"  2. Or use: File > Save As > PDF in Microsoft Word")
    print(f"  3. Update Projects.jsx with correct image paths:")
    print(f"     imageUrl: '/images/filename.jpg'")
    print(f"{'='*60}\n")

if __name__ == '__main__':
    main()
