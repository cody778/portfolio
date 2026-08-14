# 📋 Project Reports & Images Setup Guide

## Quick Start

### Step 1: Place Your Files
Copy your Word documents to the **project root directory**:
```
d:\EAAA\Portfolio\portfolio\
├── Technical Report IT Technology - 4th SEM.docx
├── PCB Journal.docx
├── Third semester - Final project Report.docx
└── ...other files
```

### Step 2: Extract Images from Documents
Run this command in the project directory:

```bash
python extract_images.py
```

This will:
- Extract all images from your .docx files
- Save them to `public/images/`
- Display which images were extracted

### Step 3: Convert Documents to PDF
You have two options:

#### Option A: Manual (Easiest)
1. Open each Word document
2. File → Save As
3. Choose PDF format
4. Save to `public/reports/`
5. Name the files:
   - `Technical-Report-IT-Technology-4th-SEM.pdf`
   - `PCB-Journal.pdf`
   - `Third-Semester-Final-Project-Report.pdf`

#### Option B: Automatic (Requires LibreOffice)
If LibreOffice is installed:
```bash
python extract_reports.py
```

### Step 4: Update Projects View
After images are extracted, update `src/components/terminal/views/Projects.jsx`:

```javascript
{
  title: "Project Name",
  // ... other fields ...
  imageUrl: "/images/filename.jpg",  // Add this line
  reportUrl: "/reports/report-name.pdf",  // Already set
}
```

### Step 5: Restart Dev Server
```bash
npm run dev
```

## File Structure

```
portfolio/
├── public/
│   ├── images/                    ← Project images go here
│   │   ├── Technical-Report-*-image-1.jpg
│   │   ├── PCB-Journal-image-1.jpg
│   │   └── ...
│   └── reports/                   ← PDF reports go here
│       ├── Technical-Report-IT-Technology-4th-SEM.pdf
│       ├── PCB-Journal.pdf
│       └── Third-Semester-Final-Project-Report.pdf
│
├── extract_images.py              ← Run this to extract images
├── extract_reports.py             ← Run this to convert to PDF (optional)
└── ...
```

## Example: How Projects Display

Each project now shows:
- Title, Date, Description
- Technologies & Responsibilities
- **Project Image** (250×200px)
- **📄 Download Report** button (clickable link)

```
┌─────────────────────────────────────────┐
│ [Project Image]  │ Title               │
│ (250×200px)      │ Date                │
│                  │ Description...      │
│                  │ Tech: ...           │
│                  │ • Responsibility 1  │
│                  │ • Responsibility 2  │
│                  │ [📄 Download Report]│
└─────────────────────────────────────────┘
```

## Troubleshooting

### Images not showing in browser?
- Check the filename matches in `Projects.jsx`
- Make sure image is in `public/images/`
- Use correct path: `/images/filename.jpg`

### Download button not working?
- Make sure PDF exists in `public/reports/`
- Check filename in `Projects.jsx` matches exactly
- Filename should not have spaces (use hyphens instead)

### Extract script fails?
- Make sure Python is installed
- Install required package: `pip install python-docx`
- Place .docx files in project root directory

## Adding More Projects

1. Add new project object to `projects` array in `Projects.jsx`
2. Include `imageUrl` and `reportUrl` properties
3. Images automatically display in card
4. Download button appears if `reportUrl` is provided

## Recommended Image Sizes

- **Width:** 250px
- **Height:** 200px
- **Format:** JPG or PNG
- **File Size:** < 500KB per image
- **Aspect Ratio:** 1.25:1 (landscape)

---

**Questions?** Check the Projects.jsx file for the complete project object structure!
