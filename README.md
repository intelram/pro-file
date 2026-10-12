# pro-file

Personal portfolio of Alok Singh, cybersecurity instructor and practitioner.

A single static page (`index.html`) hosted on GitHub Pages at **https://intelram.github.io/pro-file/**.

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
| `.nojekyll` | Serves files as-is (no Jekyll processing) |
| `robots.txt`, `sitemap.xml` | Search-engine discovery |
| `update-csp.mjs` | Recomputes the CSP script hash |

## Using a custom domain later

To serve the site from your own domain, add a file named `CNAME` containing just the domain
(for example `example.com`), update the `canonical` / `og:url` tags in `index.html` and the URLs in
`robots.txt` and `sitemap.xml`, then point the domain's DNS at GitHub Pages.
