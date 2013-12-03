# global module:false
pkg = require './package.json'
module.exports = (grunt) ->

    # Project configuration.
    grunt.initConfig

        banner: """
            /* #{pkg.name} - v#{pkg.version} - #{@template.today('yyyy-mm-dd')}
             * #{pkg.homepage}
             * Copyright (c) #{@template.today('yyyy')} #{pkg.author}
             */\n\n
        """

        coffeelint:
            all: ['Gruntfile.coffee', 'src/**/*.coffee']
            options:
                indentation:
                    value: 4
                    level: 'error'

                max_line_length:
                    value: 80
                    level: 'warn'

                no_backticks:
                    level: 'warn'

        coffee:
            all:
                files: 'main.js': 'src/**/*.coffee'

    grunt.loadNpmTasks 'grunt-coffeelint'
    grunt.loadNpmTasks 'grunt-contrib-coffee'

    grunt.registerTask 'default', ['coffeelint', 'coffee']
