module.exports = function(grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        webdriver: {
            'test-sauce': {
                configFile: './test/config/wdio.sauce.conf.js'
            },
            'test-browserstack': {
                configFile: './test/config/wdio.browserstack.conf.js'
            },
            'test-local': {
                configFile: './test/config/wdio.local.conf.js'
            },
        },
    });

    grunt.loadNpmTasks('grunt-cucumberjs');
    grunt.loadNpmTasks('grunt-webdriver');
    grunt.registerTask('default', ['webdriver:test-local']);
    // grunt.registerTask('default', ['webdriver:test-sauce']);
    // grunt.registerTask('default', ['test-browserstack']);
};
