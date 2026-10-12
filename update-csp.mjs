// Recomputes the CSP hash for the inline <script> in index.html.
// Run after editing the SITE data or any script code:  node update-csp.mjs
import { readFileSync, writeFileSync } from "node:fs";
import { createHash } from "node:crypto";

const file = new URL("./index.html", import.meta.url);
let html = readFileSync(file, "utf8");

const m = html.match(/<script>([\s\S]*?)<\/script>/);
if (!m) throw new Error("Inline <script> not found");
const hash = "sha256-" + createHash("sha256").update(m[1], "utf8").digest("base64");

html = html.replace(/'(?:__SCRIPT_HASH__|sha256-[A-Za-z0-9+/=]+)'/, `'${hash}'`);
writeFileSync(file, html);
console.log("CSP script hash updated:", hash);
