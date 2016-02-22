module.exports = function(grunt) {

  grunt.initConfig({
    requirejs: {
      compile: {
        options: {
          baseUrl: "./",
          name: "node_modules/almond/almond.js",
          include: [ 'src/main.js'],
          out: "dist/app.js",
          optimize: "none",
        },
      },
    },
  });

  grunt.loadNpmTasks('grunt-contrib-requirejs');

  grunt.registerTask('default', ['requirejs']);
};

