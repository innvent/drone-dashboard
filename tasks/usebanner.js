module.exports = {
  development: {
    options: {
      position: 'top',
      banner: '<%= banner.name %>' +
      '<%= banner.version %>' +
      '<%= banner.description %>' +
      '<%= banner.repository %>' +
      '<%= banner.authorsName %>' +
      '<%= banner.authorsGithub %>' +
      '<%= banner.lastUpdate %>',
    },
    files: {
      src: [ '<%= paths.stylesheets %>style.css', '<%= paths.javascript %>main.js' ]
    }
  }
}