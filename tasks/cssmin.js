module.exports = {
  cssmin: {
    files: {
      '<%= paths.stylesheets %>style.min.css': ['<%= paths.stylesheets %>style.css']
    }
  }
}
