module.exports = {
  stylesheets: {
    files: [
      '<%= paths.less %>**/*.less',
      '<%= paths.less %>*.less'
    ],
    tasks: ['less', 'usebanner']
  }
}