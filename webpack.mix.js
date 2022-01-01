const mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel applications. By default, we are compiling the CSS
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.js('resources/assets/general/js/app.js', 'public/assets/general/js')
    .sass('resources/assets/general/css/app.scss', 'public/assets/general/css', [

    ]);


mix.js("resources/assets/tailwindcss/js/app.js", "public/assets/tailwindcss/js")
    .postCss("resources/assets/tailwindcss/css/app.css", "public/assets/tailwindcss/css", [
        require("tailwindcss"),
    ]);
