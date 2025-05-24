import fs from "fs-extra";
import path from "path";
import { exec } from "child_process";

const inputPptx: string = "example.pptx"; // Change to your .pptx file
const outputFolder: string = "slides_output";

async function convertPptxToPng(
  pptxPath: string,
  outputDir: string
): Promise<void> {
  if (!fs.existsSync(pptxPath)) {
    console.error("❌ PPTX file does not exist.");
    return;
  }

  fs.ensureDirSync(outputDir);

  const command: string = `libreoffice --headless --convert-to png --outdir "${outputDir}" "${pptxPath}"`;

  exec(command, (error: Error | null, stdout: string, stderr: string) => {
    if (error) {
      console.error("❌ Error converting PPTX to PNG:", error.message);
      return;
    }

    console.log("✅ Conversion complete.");

    const files: string[] = fs
      .readdirSync(outputDir)
      .filter((f) => f.endsWith(".png"));
    files.forEach((file: string, index: number) => {
      const oldPath: string = path.join(outputDir, file);
      const newPath: string = path.join(outputDir, `slide_${index + 1}.png`);
      fs.renameSync(oldPath, newPath);
    });

    console.log("✅ Slides renamed and saved in:", outputDir);
  });
}

convertPptxToPng(inputPptx, outputFolder);
