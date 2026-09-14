import { readFile } from "node:fs/promises";
import path from "node:path";

/** Use the supplied logo unchanged in generated metadata images. */
export async function logoMarkDataUri() {
  const logo = await readFile(path.join(process.cwd(), "public/images/tikobane-logo.jpeg"));
  return `data:image/jpeg;base64,${logo.toString("base64")}`;
}
