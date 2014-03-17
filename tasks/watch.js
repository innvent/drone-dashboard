module.exports = {
  stylesheets: {
    files: [
      '<%= paths.less %>**/*.less',
      '<%= paths.less %>*.less'
    ],
    tasks: ['less', 'cssmin']
  },
  javascript: {
    files: [
      '<%= paths.javascript %>*.js'
    ],
    tasks: ['uglify']
  }
}
