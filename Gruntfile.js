module.exports = function(grunt) {

  grunt.loadNpmTasks('grunt-karma');
  // Project configuration.

  grunt.initConfig({
      // Test settings
    karma: {
      unit: {
        configFile: './karma.conf.js',
        autoWatch: true
      }
    }

  });



  grunt.registerTask('default', ['test']);

  grunt.registerTask('test', [
    'karma'
  ]);



};
