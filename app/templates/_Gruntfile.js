// 'use strict';
module.exports = function(grunt) {
  grunt.initConfig({
    // grunt-contrib-connectの設定
    connect: {
      site: {
        options: {
          port: 9000,
          base: '.',
        },
      },
    },
    // grunt-contrib-watchの設定
    watch: {
      html_files: {
        files: '*.html', // staticディレクトリのhtmlファイルを監視
        options: {
          livereload: true // 自動でリロード,
        },
      },
    },
  });
  // プラグインの読み込み
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-watch');
  // タスク登録
  grunt.registerTask('default', ['connect', 'watch']);
};

