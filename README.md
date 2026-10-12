# aloksingh.com

Personal portfolio of Alok Singh, cybersecurity instructor and practitioner.

A single static page (`index.html`) hosted on GitHub Pages at **https://aloksingh.com**.

## Editing content

All text, links, tools, projects and timeline entries live in the `SITE` object at the top of the
`<script>` in `index.html`. After editing anything inside that script, run:

```bash
node update-csp.mjs
```

This updates the page's Content-Security-Policy hash. If you skip it, browsers will block the script
and the page will not animate or fill in.

## Files

| File | Purpose |
|---|---|
| `index.html` | The whole site |
| `assets/Alok_Singh_Resume.pdf` | Resume linked from "View My Resume" |
| `CNAME` | Tells GitHub Pages to serve the site at aloksingh.com |
| `.nojekyll` | Serves files as-is (no Jekyll processing) |
| `robots.txt`, `sitemap.xml` | Search-engine discovery |
| `update-csp.mjs` | Recomputes the CSP script hash |
