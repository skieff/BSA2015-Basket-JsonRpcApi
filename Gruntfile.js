module.exports = function (grunt) {
    grunt.initConfig({
        babel: {
            options: {
                modules: 'amd',
                sourceMap: true,
                ignore: [
                    '**/config.js',
                    '**/libs/*.js'
                ]
            },
            dist: {
                files: [
                    {
                        expand: true,
                        cwd: 'scripts/dev',
                        src: '**/*.js',
                        dest: 'scripts/build'
                    }
                ]
            }
        }

    });

    grunt.loadNpmTasks('grunt-babel');

    grunt.registerTask('default', ['babel']);
};