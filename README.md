# ToolAmaze-Full-Stack-Website
ToolAmaze is a full-stack web app that centralizes tools like text converters, code formatters, and utility generators. It offers users personalized access to only the tools they need, eliminating the need to switch between multiple sites. Admins can easily manage tools and user access through a secure, organized dashboard.

What is ToolAmaze?
 ToolAmaze is a modern full-stack web application that unifies various productivity tools like text converters, code formatters, and utility generators into one centralized platform. It removes the hassle of jumping between multiple micro-sites by giving each user personalized access to the tools they actually need. Admins can easily manage tools, assign access, and keep everything organized through a secure dashboard.

Tech Stack Highlights:
 Frontend: React 18, Vite 5, TailwindCSS, Bootstrap
 Backend: Node.js, Express, MySQL
 Features: Role-based access, secure authentication, responsive SPA, RESTful APIs, admin dashboard

**Explanation of Files**
--index.html
The main HTML file located at the root of the frontend project. It includes the entry point for the app (<div id="app"></div>) which Vite targets for injecting scripts during build and development.

--package.json (Frontend)
Defines all frontend dependencies and scripts. Includes:

Tools: vite, tailwindcss, typescript, autoprefixer

Scripts:
json
"scripts": {
  "dev": "vite",
  "build": "vite build",
  "preview": "vite preview"
}

--vite.config.js / vite.config.ts
Configuration for the Vite bundler. Handles:
  Plugin integration
  Server setup
  Aliases
  TypeScript support

--tailwind.config.js
Tailwind CSS configuration file. 
Manages:
  Theme customization
  Color palette
  Fonts
  Breakpoints for responsive design

--postcss.config.js
Configuration for PostCSS, used to compile Tailwind CSS and add browser prefixes.
Contains:
module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
};

--.gitignore
Excludes files and directories from Git tracking. Includes:
  node_modules/
  dist/
  .env
  .DS_Store

--tsconfig.json, tsconfig.app.json, tsconfig.node.json
TypeScript configuration files:
  tsconfig.json: root config
  tsconfig.app.json: settings specific to frontend application code
  tsconfig.node.json: backend-specific TypeScript settings

--config.json
Custom configuration file used for storing general app settings, possibly including environment-specific variables or UI configurations.

--eslint.config.js
Configuration for ESLint. Enforces code quality standards and detects potential bugs or style issues.

**🖥️ Backend**
--backend/server.js
Entry point for the backend using Node.js. 
Contains Express server logic for handling routes, requests, and possibly API integration or database connectivity.

-backend/package.json
Lists backend dependencies such as:
  express
  mongoose (MongoDB is used)
  dotenv
  Backend-related scripts (e.g., start)

**node_modules/ (Frontend & Backend)**
Auto-generated folder that contains installed packages based on package.json. It is excluded from Git via .gitignore.

