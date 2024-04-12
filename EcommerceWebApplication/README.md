Step 1. npm create vite@latest MKShop -- --template react-ts  
This will create your vite project with react-ts configuration.

Step 2. npm install -D tailwindcss postcss autoprefixer
Step 3. npx tailwindcss init -p
Install tailwindcss and its peer dependencies, then generate your tailwind.config.js and postcss.config.js files.

Step 4. Configure your template paths
Add the paths to all of your template files in your tailwind.config.js file.

/** @type {import('tailwindcss').Config} \*/
export default {
content: [
"./index.html",
"./src/**/\*.{js,ts,jsx,tsx}",
],
theme: {
extend: {},
},
plugins: [],
}

Step 5. Add these to your index.css file -

@tailwind base;
@tailwind components;
@tailwind utilities;
