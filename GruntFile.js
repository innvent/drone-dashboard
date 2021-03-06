/*
 * grunt
 * http://gruntjs.com/
 *
 * Copyright (c) 2013 "Cowboy" Ben Alman
 * Licensed under the MIT license.
 * https://github.com/gruntjs/grunt/blob/master/LICENSE-MIT
 */

module.exports = function(grunt) {

  'use strict';

  require("load-grunt-tasks")(grunt);
  require('time-grunt')(grunt);

  function config(name){
    return require("./tasks/" + name);
  }

  // Tasks configurations
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    paths: grunt.file.readJSON('paths.json'),
    less: config("less"),
    cssmin: config("cssmin"),
    uglify: config("uglify"),
    bower: config("bower"),
    watch: config("watch")
  });

  // Build task
  grunt.registerTask('build', ['bower']);

  // Default task
  grunt.registerTask('default', ['less', 'watch', 'notify']);

  // Deploy task
  grunt.registerTask('deploy', ['cssmin', 'uglify']);
};
