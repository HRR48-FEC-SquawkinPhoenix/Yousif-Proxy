module.exports = function(grunt) {
  grunt.initConfig ({
    pkg: grunt.file.readJSON('package.json'),
    concat: {
      options: {
        separator: ';',
      },
      dist: {
        src: ['Reviews/public/bundle.js','ImageCarousel/public/bundle.js', 'Add-To-Cart/Dist/bundle.js'],
        dest: 'Dist/built1.js',
      },
    }
  })

  grunt.loadNpmTasks('grunt-contrib-concat')

  grunt.registerTask('default', ['concat']);
}