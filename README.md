# React Animation Showcase

This project combines three animation demos into a single React app with navigation:

- `Bar Chart`
- `Collapsible Tree`
- `Vertex Sphere`

The main app uses `react-router-dom@4.3.1` so each animation can be viewed from its own route inside one shared UI.

## Routes

- `/bar-chart`
- `/collapsible-tree`
- `/vertex-sphere`

The root path `/` redirects to `/bar-chart`.

## Tech Stack

- React `16.8.6`
- React DOM `16.8.6`
- React Scripts `2.1.8`
- React Router / React Router DOM `4.3.1`
- `react-move`
- `@vx/*`
- `@react-vertex/*`

## Getting Started

Install dependencies:

```bash
npm install
```

Start the app:

```bash
npm start
```


## Important Note About Node

This repo uses older Create React App tooling. To keep it working on newer machines, the npm scripts run `react-scripts` through a Node `16.20.2` shim with `npx`.

That means you can still use the normal commands:

```bash
npm start
npm test
```

## Project Structure

```text
.
|-- public/
|-- src/
|   |-- App.js
|   |-- styles.css
|   |-- apps/
|   |   |-- bar-chart/
|   |   |-- collapsible-tree/
|   |   `-- vertex-sphere/
|   `-- hooks/
|-- package.json
`-- README.md
```

## What’s Included

- A combined routed app in the repo root
- Updated bar chart SVG sizing so the height grows with the content
- Updated tree controls so they appear above the tree instead of beside it


