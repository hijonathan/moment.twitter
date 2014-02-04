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
                files: 'moment-twitter.js': 'src/**/*.coffee'

        bump:
            options:
                files: ['package.json', 'bower.json', 'component.json']
                commitFiles: ['-a']

        _release:
            options:
                bump: false
                add: true
                commit: true
                tag: true
                push: true
                pushTags: true
                npm: true

    grunt.loadNpmTasks 'grunt-coffeelint'
    grunt.loadNpmTasks 'grunt-contrib-coffee'
    grunt.loadNpmTasks 'grunt-bump'
    grunt.loadNpmTasks 'grunt-release'

    grunt.registerTask 'build', ['coffeelint', 'coffee']
    grunt.registerTask 'default', ['build']
    grunt.renameTask 'release', '_release'

    grunt.registerTask 'release', (target='') ->
        grunt.task.run ["bump-only:#{target}", 'build', "_release:#{target}"]
