module.exports = function (grunt){
    grunt.loadNpmTasks('grunt-karma');
    grunt.registerTask('default', ['karma']);



    grunt.initConfig({
         karma: {
             unit: {
                 configFile: 'config/karma.conf.js',
             },
             //continuous integration mode: run tests once in PhantomJS browser.
             continuous: {
                 configFile: 'config/karma.conf.js',
                 singleRun: true,
                 browsers: ['PhantomJS']
             },
         }
     });
};