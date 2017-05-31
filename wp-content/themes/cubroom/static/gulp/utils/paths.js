// ------------------------------------
// Global paths for gulp
// ------------------------------------

module.exports = {
    script_src_watch : './app/src/js/main.js',
    script_dest      : 'app/dist/js',
    sass_src_watch   : 'app/src/scss/style.scss',
    sass_src         : 'app/src/scss',
    sass_dest        : 'app/dist/css',
    image_src_watch  : [ 'app/src/images/*.png', 'app/src/images/*.svg', 'app/src/images/*.jpg'  ],
    image_dest       : 'app/dist/images/',
    haml_src         : 'app/src/haml/**/*.haml',
    haml_dist        : 'app/dist/templates',
    dist_root        : 'app/dist/',
    src_root         : 'app/src/**',
    markup_root      : 'app/',
    libs             : [
                        "static/src/js/lib/jquery/dist/jquery.min.js",
                        "static/src/js/lib/slick-carousel/slick/slick.min.js",
                        ],
    head             : [
                        "static/src/js/lib/modernizr/modernizr.js"
                        ]

}
