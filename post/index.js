'use strict';
var util = require('util');
var yeoman = require('yeoman-generator');


var PostGenerator = yeoman.generators.NamedBase.extend({
  init: function () {
    console.log(this.name + '.html created.');
  },

  files: function () {
    this.template(
      'template.html',
      this.name + '.html',
      {name: this.name}
    );
  }
});

module.exports = PostGenerator;