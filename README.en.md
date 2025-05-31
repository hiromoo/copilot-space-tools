# Copilot Spaces Template Generator Tool

![Web UI Preview](assets/web-preview.png)

This repository provides CLI and Web UI tools to easily create anti-siloing templates for GitHub Copilot Spaces.

## Features

- Input project information via CLI or Web UI and auto-generate a Markdown template
- Output template as `copilot_space.md`
- Both CLI and Web UI support language selection (Japanese/English)
- Template generation logic is shared in `src/template.ts`

## Directory Structure

```
init-copilot-space.ts         ... CLI entry point
src/template.ts               ... Shared template logic
web/index.html                ... Web UI
web/main.ts                   ... Web UI logic (TypeScript)
web/main.js                   ... Web UI logic (compiled)
cli/                          ... CLI TypeScript/JS (if needed)
```

## Usage

### CLI Tool

1. Install dependencies
   ```sh
   npm install
   ```
2. Build TypeScript
   ```sh
   npx tsc
   ```
3. Run the CLI
   ```sh
   node init-copilot-space.js
   ```
4. At startup, select your language (Japanese or English) in the prompt
5. Answer the questions to generate `copilot_space.md`

### Web UI

Open `web/index.html` in your browser, select Japanese or English, fill out the form, and generate the template.

## Scripts & Quick Start

- **Build & Clean**
  ```sh
  npm run build
  ```
- **Run CLI Tool**
  ```sh
  npm run start:cli
  ```
- **Open Web UI (open index.html in browser)**
  ```sh
  npm run start:web
  ```

## Template Logic Sharing

- The template generation function is implemented in `src/template.ts` and imported by both CLI and Web UI.
- To update the template or language support, just edit `src/template.ts`.

## License

MIT License
