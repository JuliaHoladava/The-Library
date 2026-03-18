# Book Finder App

A lightweight vanilla JavaScript application for searching books using the Open Library API.

## Task

You can find the detailed task description here: [\[Link to your task document\]](https://drive.google.com/file/d/1RBRcuH-_oAvtjem5Xs0c4NXZ8I38aYyH/view)

## Features

- **Real-time Search:** Implemented with debounce for better performance.
- **State Management:** Handled via custom events (State-Driven UI).
- **Favorites:** Persistent storage using LocalStorage.
- **Responsive Design:** Mobile-first approach with CSS Grid/Flexbox.

## Project Structure

- `index.html` - Main entry point and HTML templates.
- `style.css` - Global styles and responsive design.
- `src/`
  - `main.js` - App initialization and main logic.
  - `services/` - Modules for API calls and LocalStorage (e.g., `storageService.js`).
  - `components/` - Functions for creating UI elements (e.g., `createBookCard.js`).
  - `utils/` - Helper functions like `debounce`.
  - `features/` - UI rendering helpers (e.g., `renderBooks.js`).

## How to run the app

Since this project uses ES Modules, it requires a local server to run.

1. Clone the repository:
   ```bash
   git clone https://github.com
   ```
2. Open the project folder
3. Start a local server (e.g., using VS Code "Live Server" extension or npx serve).
4. Open the provided local URL in your browser.
