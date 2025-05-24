// types/pdf-poppler.d.ts
declare module "pdf-poppler" {
  export interface ConvertOptions {
    format: string; // 'png', 'jpeg', etc.
    out_dir: string;
    out_prefix: string;
    page?: number | null;
    resolution?: number;
  }

  export class PdfConverter {
    constructor(filePath: string);
    convert(options: ConvertOptions): Promise<void>;
  }
}
