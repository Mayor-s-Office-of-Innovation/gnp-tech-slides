# gnp-tech-slides
Slides about tech handoff for good neighbor program application

## Hosting on GitHub Pages

In the repository's **Settings → Pages → Build and deployment**, set **Source**
to **GitHub Actions**. Push the workflow to `main` to deploy the slides.
Subsequent pushes to `main` deploy automatically. To redeploy manually, select
**Actions → Deploy slides to GitHub Pages → Run workflow** with branch `main`.

After a successful deployment, the slides will be available at:
https://mayor-s-office-of-innovation.github.io/gnp-tech-slides/

The workflow publishes `index.html`, `deck.css`, and `deck.js` directly; no build
step or dependency installation is needed. If you add local images, fonts, or
other assets, include them in the workflow's **Prepare slide files** step.
