import fs from "fs-extra";
import path from "path";
import { exec } from "child_process";

const inputPptx = "example.pptx";
const outputFolder = "slides_output";

async function convertPptxToImages(
  pptxPath: string,
  outputDir: string
): Promise<void> {
  if (!fs.existsSync(pptxPath)) {
    console.error("❌ PPTX file does not exist.");
    return;
  }

  fs.ensureDirSync(outputDir);

  const pdfPath = pptxPath.replace(/\.pptx$/i, ".pdf");

  const convertToPdfCmd = `soffice --headless --convert-to pdf "${pptxPath}" --outdir "."`;

  exec(convertToPdfCmd, async (error) => {
    if (error) {
      console.error("❌ Error converting PPTX to PDF:", error.message);
      return;
    }

    if (!fs.existsSync(pdfPath)) {
      console.error(`❌ PDF file not found after conversion: ${pdfPath}`);
      return;
    }

    console.log("✅ PPTX converted to PDF.");

    // Dynamically import pdf-poppler in ESM context
    const popplerModule = await import("pdf-poppler");

    const options = {
      format: "png",
      out_dir: outputDir,
      out_prefix: "slide",
      page: null,
      resolution: 150,
    };

    try {
      await popplerModule.default.convert(pdfPath, options);
      console.log("✅ PDF converted to PNG slides.");

      fs.removeSync(pdfPath);
      console.log("🗑️ Temp PDF removed.");

      console.log("📂 Slides saved in:", outputDir);
    } catch (err) {
      console.error("❌ Error during PDF to PNG conversion:", err);
    }
  });
}

convertPptxToImages(inputPptx, outputFolder);
