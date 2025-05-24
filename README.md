# PPTX to PNG Slides Converter

This is a Node.js/TypeScript script that converts PowerPoint presentations (`.pptx`) into PNG slide images.

It works by first converting the PPTX file to PDF using LibreOffice headless mode, then converting the PDF pages into PNG images using [`pdf-poppler`](https://www.npmjs.com/package/pdf-poppler).

---

## Features

- Converts `.pptx` to `.pdf` with LibreOffice (requires LibreOffice installed)
- Converts PDF pages to PNG images using `pdf-poppler`
- Saves PNG slides to a specified output folder
- Cleans up intermediate PDF file after conversion

---

## Prerequisites

- **Node.js** (tested on v22.x)
- **LibreOffice** installed and accessible in your system PATH
- Windows/macOS/Linux supported (poppler binaries included in the `pdf-poppler` package for Windows)

---

## Installation

```bash
npm install
```
