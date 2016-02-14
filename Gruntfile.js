module.exports = function(grunt) {

  grunt.initConfig({
    requirejs: {
      compile: {
        options: {
          baseUrl: "./",
          name: "node_modules/almond/almond.js",
          mainConfigFile: "config.js",
          out: "dist/app.js",
        },
      },
    },
  });

  grunt.loadNpmTasks('grunt-contrib-requirejs');

  grunt.registerTask('default', ['requirejs']);
};

