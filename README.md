# Excalidraw Desktop App

An open source Windows app for the <a href="https://excalidraw.com/">Excalidraw</a> whiteboard tool.

## Features
- All features of the original Excalidraw tool.
- Persistent storage of drawing.
- Multiple drawing support. ( To be implemented )
- Live collaboration. ( Under consideration )

## Out of scope
Please do not ask for these features to be implemented:
- Cloud sync.

## Installation

1. Go to Releases and download the latest installer for your platform.
2. Run the installer and follow the instructions.
3. Do not run the app from the installer ( it will save the Chart in the wrong location - To be fixed ). Instead, run the app from the start menu or run the executable from the installation directory.
4. If you like the app, please consider starring the repository. Thank you!

## Manual Installation

### Windows

Prerequisites:
- <a href="https://nodejs.org/">Node.js</a>
- <a href="https://www.rust-lang.org//">Rust</a>
- <a href="https://bun.sh/">Bun</a> ( Optional, faster alternative to npm )

1. Clone the repository.
2. Run `npm install` or `bun install` in the project directory.
3. Run `npm run tauri build` or `bunx tauri build` in the project directory.
4. Go to the `src-tauri/target/release/bundle/msi` directory and run the executable to install the app.
5. Do not run the app from the installer ( it will save the Chart in the wrong location - To be fixed ). Instead, run the app from the start menu or run the executable from the installation directory.
6. If you like the app, please consider starring the repository. Thank you!

## License
This project is licensed under GNU General Public License v3.0.

The original Excalidraw project is licensed under the MIT License, but this repository does not redistribute the original code. The original code is downloaded during the build process.

Source code for the original Excalidraw project can be found <a href="https://github.com/excalidraw/excalidraw/tree/master">here</a>.