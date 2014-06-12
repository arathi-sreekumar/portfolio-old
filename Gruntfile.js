module.exports = function (grunt) {
    'use strict';
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        jshint: {
            all: {
                src: ['Gruntfile.js', 'js/**/*.js', 'js/*.js', '!js/vendor/**/*.js']
            },
            options: grunt.file.readJSON('.jshintrc')
        },
        watch: {
            scripts: {
                files: ['Gruntfile.js', 'js/**/*.js', 'js/*.js', 'js/**/*.hbs', '!js/vendor/**/*.js'],
                tasks: ['jshint']
            },
            styles: {
                files: ['LESS/*.less'],
                tasks: ['less']
            },
            // livereload: {
            //     files: ['*.html', 'js/**', '!node_modules'],
            //     options: {
            //         livereload: true
            //     }
            // }
        },
        less: {
            all: {
                files: {
                    'css/main_less.css': 'LESS/main.less'
                }
            }
        }
    });
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-less');
};