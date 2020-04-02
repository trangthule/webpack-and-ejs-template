# webpack-and-ejs-template
An Express.js setup to demonstrate how to make Webpack and EJS template work together.

The `webpack.config.js` will output Javascript files to `dist/js` folder, CSS and SCSS files to `dist/css` folder.

It also contains a setting for `html-webpack-plugin` which take an ejs template and output 
an `index.ejs`that loads stylesheet and script. 

This file is located at `views/layout` directory and loads dynamic content from other ejs files at `views/pages`.

The ejs output means that we can use EJS for server-side rendering.
