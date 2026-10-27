# What is home when it’s far away?

An interactive essay for ENGL 1301, Project 3, by Tahmid Ahnaf Taseen. Built with React, Vite, Motion and Tailwind CSS.

## Edit the words and photos

Everything the reader sees lives in `src/content.js`. Photos go in `public/media/` and are referenced as `media/file.webp`. Write `{{pulao}}` inside a paragraph to insert a tappable glossary word defined in `glossary`.

## Run and build

```
npm install
npm run dev       # local preview
npm run build     # production build into dist/
npm run preview   # serve dist/ locally
```

## Publish

- **GitHub Pages:** push this folder to a GitHub repo, then Settings → Pages → Source: GitHub Actions. `.github/workflows/deploy.yml` redeploys on every push to `main`.
- **Netlify:** run `npm run build`, then drag `dist/` onto app.netlify.com/drop.

Asset paths are relative (`base: './'`), so the build works from any subfolder.

## Credits

Illustrations in chapter 03 are from unDraw. Hero photo: Cultural Fest 2026, International Cultural Center, Texas Tech.
