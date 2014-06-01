'use strict';
var util = require('util');
var path = require('path');
var yeoman = require('yeoman-generator');
var chalk = require('chalk');


var SasatSiteBaseProvider = yeoman.generators.Base.extend({
  init: function () {
    this.pkg = require('../package.json');

    this.on('end', function () {
      if (!this.options['skip-install']) {
        this.installDependencies();
      }
    });
  },

  askFor: function () {
    var done = this.async();
    // サイト名入力プロンプトの表示
    var prompts = [{
      name: 'siteName',
      message: 'サイト名を入力してください: '
    }];
    this.prompt(prompts, function (props) {
      this.name = props.siteName;
      done();
    }.bind(this));
  },

  app: function () {
    // テンプレート設定
    var data = {name: this.name};
    this.template('base.html', 'index.html', data);
    this.copy('_package.json', 'package.json');
    this.copy('_Gruntfile.js', 'Gruntfile.js');
  }
});

module.exports = SasatSiteBaseProvider;