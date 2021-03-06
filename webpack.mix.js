const mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.js('resources/js/app.js', 'public/js');
mix.js('resources/js/site.js', 'public/js');
mix.sass('resources/sass/admin/app.scss', 'public/css');
mix.sass('resources/sass/site.sass', 'public/css');


mix.browserSync({
    proxy: 'http://127.0.0.1:8001'
});
