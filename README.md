# "Fellas"

## Getting Started

### Clone this repo locally

### Install dependencies
```bash
$ yarn install # or npm
```

### Copy all the games folders to src/assets 

### Run the application in development
```bash
$ yarn tauri dev
```

### Or test the UI with Storybook
```bash
$ yarn storybook
```

### Build to production
```bash
$ yarn tauri build
```
This will compile both the react application with Vite and the rust binaries and may require some platform specific modules
<br>
The built .exe and .msi installer(if windows) can be found on ./src-tauri/target 

## Tauri + React + Typescript
### Recommended IDE Setup

- [VS Code](https://code.visualstudio.com/) + [Tauri](https://marketplace.visualstudio.com/items?itemName=tauri-apps.tauri-vscode) + [rust-analyzer](https://marketplace.visualstudio.com/items?itemName=rust-lang.rust-analyzer)
