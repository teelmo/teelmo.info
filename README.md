# teelmo.info

Teemo Tebest's personal homepage — career history, awards, knowledge, media mentions, blog, and contact info, plus three data visualisations embedded live from other UNCTAD/ebuddj projects (a food price index line chart, an animated temperature column chart, and a race-of-bars/map figure).

**Live**: https://teelmo.info

## Tech stack

- [Vite](https://vitejs.dev/) + React 19
- [Biome](https://biomejs.dev/) for formatting/linting
- [@teelmo/web-styles](https://github.com/teelmo/web-tools) for the shared CSS reset/basics/arrow
- A small local `useIsVisible` hook (`src/jsx/helpers/UseIsVisible.js`) drives the scroll-reveal animations — replaces the `react-is-visible` package, whose class component calls the now-removed `ReactDOM.findDOMNode` and crashes under React 19
- The three embedded charts are loaded at runtime as external scripts/stylesheets (see the `loadScript` calls in `src/jsx/App.jsx`), not bundled — they're independent projects hosted on GitHub Pages

## Development

```
npm install
npm start
```

Opens at http://localhost:8080.

## Build

```
npm run build
```

## Deploy

```
npm run push            # push to GitHub
npm run sync-gh-pages   # publish dist/ to the gh-pages branch
npm run sync-prod       # pull the latest commit on the teelmo.info server
```

`sync-prod` pulls the repo directly on the server, which serves `dist/` as-is (no build step there) — so `dist/` is committed here, unlike a typical Vite project.
