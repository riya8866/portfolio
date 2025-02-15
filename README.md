# Portfolio Website - Setup Guide

## Prerequisites
1. Install [Node.js](https://nodejs.org/) (LTS version recommended)
2. Install [Visual Studio Code](https://code.visualstudio.com/)
3. Install [Git](https://git-scm.com/) for version control

## Setup Instructions

1. Clone the repository:
```bash
git clone <your-repository-url>
cd portfolio-website
```

2. Install dependencies:
```bash
npm install
```

3. Environment Setup:
Create a `.env` file in the root directory with the following content:
```env
DATABASE_URL=your_database_url_here  # Only needed if you're using database features
```

4. Start the development server:
```bash
npm run dev
```
The application will start on `http://localhost:5000`

## Project Structure
- `client/src/` - React frontend code
  - `components/` - Reusable UI components
  - `pages/` - Page components
  - `lib/` - Utility functions and configurations
- `server/` - Express backend code
- `shared/` - Shared types and schemas

## Available Scripts
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run check` - Type-check TypeScript code

## VS Code Extensions (Recommended)
1. ESLint
2. Prettier
3. Tailwind CSS IntelliSense
4. TypeScript and JavaScript Language Features

## Troubleshooting
1. If you see module not found errors, try:
   ```bash
   rm -rf node_modules
   npm install
   ```

2. If you get TypeScript errors:
   ```bash
   npm run check
   ```
   This will show you detailed type errors to fix.

3. For database-related issues:
   - Ensure DATABASE_URL is properly set in your .env file
   - Check if your database is running and accessible

## Development Tips
1. Use the VS Code integrated terminal to run commands
2. Enable "Format on Save" in VS Code for consistent code formatting
3. Use the VS Code debugger with Chrome/Edge for React debugging
4. The server auto-reloads on file changes
5. Check the terminal for build errors and logs
