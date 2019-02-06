module.exports = function(grunt) {
    grunt.loadNpmTasks('grunt-typescript');

    grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    typescript: {
        base: {
          src: ['./**/src/**/*.ts'],
          dest: 'build/',
          options: {
            module: 'commonjs', //or commonjs
            target: 'es5', //or es3
            basePath: './**/src/**',
            sourceMap: true,
            declaration: true
          }
        }
    }
  });

  grunt.registerTask('default', ['typescript']);
};