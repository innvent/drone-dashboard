module.exports = {
  uglify: {
    options: {
      mangle: true
    },
    files: {
      '<%= paths.javascript %>custom.min.js': ['<%= paths.javascript %>custom.js']
    }
  }
}
