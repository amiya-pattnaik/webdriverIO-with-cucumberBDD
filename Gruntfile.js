module.exports = function(grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        webdriver: {
            test: {
                configFile: './test/config/suite.cucumber.conf.js'
            },
            test-mobile: {
                configFile: './test/config/suite.appium.conf.js'
            },
        },
    });

    grunt.loadNpmTasks('grunt-cucumberjs');
    grunt.loadNpmTasks('grunt-webdriver');
    grunt.registerTask('default', ['webdriver:test']);
    //grunt.registerTask('default', ['webdriver:test-mobile']);
};
