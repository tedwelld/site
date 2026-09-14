import { readFile } from "node:fs/promises";
import path from "node:path";
import { site } from "@/content/site";

/** Use the supplied logo unchanged in generated metadata images. */
export async function logoMarkDataUri() {
  const logo = await readFile(
    path.join(process.cwd(), "public", site.logo.replace(/^\//, "")),
  );
  return `data:image/jpeg;base64,${logo.toString("base64")}`;
}
