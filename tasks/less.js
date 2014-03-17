module.exports = {
  development: {
    options :{
      cleancss: true
    },
    files: {
      '<%= paths.stylesheets %>style.css': '<%= paths.less %>imports.less'
    }
  }
}
