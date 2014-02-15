module.exports = function(grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        concat: {
          js: {
            src: [
              'js/**/*.js',
              '!js/build/production.js'
            ],
            dest: 'js/build/production.js',
          },
          css: {
            src: [
              'css/lib/*.css',
              'css/main.css'
            ],
            dest: 'style.css',
          }
        },
        uglify: {
          js: {
            src: 'js/build/production.js',
            dest: 'js/build/production.min.js'
          },
        },
        imagemin: {
          dynamic: {
            files: [{
              expand: true,
              cwd: 'img/',
              src: ['*.{png,jpg,gif}'],
              dest: 'dist/img'
            }]
          }
        },
        watch: {
          options: {
            livereload: true,
          },
          css: {
            files: ['css/**/*.scss'],
            tasks: ['sass'],
            options: {
              spawn: false,
            }
          },
          php: {
            files: ['*.php', '*.html'],
            options: {
              spawn: false,
            }
          }
        },
        sass: {
          dist: {
            files: {
              'css/main.css': 'css/sass/main.scss'
            }
          }
        },
        clean: ['dist', '.tmp'],
        copy: {
          main: {
            files: [
              {expand: true, src: ['js/**'], dest: 'dist/', filter: 'isFile'},
              {expand: true, src: ['style.css'], dest: 'dist/', filter: 'isFile'},
            ]
          }
        },
        replace: {
          stripWp: {
            src: ['*.php'],
            dest: '.tmp/',
            replacements: [{
              from: '<link rel="stylesheet" href="<?php bloginfo(\'template_directory\'); ?>',
              to: '<link rel="stylesheet" href="'
            },
            {
              from: '<script src="<?php bloginfo(\'template_directory\'); ?>',
              to: '<script src="'
            }]
          },
          addWp: {
            src: ['.tmp/*.php'],
            dest: 'dist/',
            replacements: [{
              from: '<link rel="stylesheet" href="style.css" media="screen">',
              to: '<link rel="stylesheet" href="<?php echo get_stylesheet_uri(); ?>" media="screen">'
            },
            {
              from: '<script src="/js/',
              to: '<script src="<?php bloginfo(\'template_directory\'); ?>/js/'
            }]
          },
        },
        htmlmin: {
          dist: {
            options: {
              removeComments: true,
              collapseWhitespace: true,
              removeOptionalTags: false,
              removeEmptyElements: false,
            },
            files: [
              {
                expand: true,
                cwd: '',
                src: ['.tmp/*.php', '.tmp/*.html'],
                dest: 'dist/',
              },
            ]
          }
        },
        useminPrepare: {
          foo: {
            src: ['.tmp/*.php'],
          },
          options: {
            root: './'
          }
        },
        usemin: {
          html: '.tmp/*.php',
        },
        cssmin: {
          wp: { // cssmin:wp is in use just to add this banner
            options: {
              banner:  '/*\n' +
                ' Theme Name: Jobs at Azavea\n' +
                ' Theme URI: http://jobs.azavea.com\n' +
                ' Description: Custom theme for the Jobs at Azavea microsite\n' +
                ' Author: Jeff Frankl\n' +
                ' Author URI: http://www.azavea.com\n' +
                '*/\n'
            },
            src: 'dist/style.css',
            dest: 'dist/style.css'
          },
        },
    });

    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-imagemin');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-htmlmin');
    grunt.loadNpmTasks('grunt-usemin');
    grunt.loadNpmTasks('grunt-text-replace');
    grunt.loadNpmTasks('grunt-csscss');

    grunt.registerTask('dist', ['htmlmin', 'sass', 'concat', 'uglify', 'cssmin', 'imagemin', 'copy']);
    grunt.registerTask('wp', ['clean', 'sass', 'replace:stripWp', 'useminPrepare', 'usemin', 'concat:generated', 'uglify:generated', 'cssmin:generated', 'imagemin', 'cssmin:wp', 'replace:addWp']);

};