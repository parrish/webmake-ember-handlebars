var deferred, ember, fs, handlebars, jquery, jsdom, path;
var fs = require('fs'),
  path = require('path'),
  jsdom = require('jsdom'),
  deferred = require('deferred');

jquery = fs.readFileSync(path.join(__dirname, 'vendor/jquery.min.js'));
handlebars = fs.readFileSync(path.join(__dirname, 'vendor/handlebars.min.js'));
ember = fs.readFileSync(path.join(__dirname, 'vendor/ember.min.js'));

exports.extension = ['hbs', 'handlebars', 'ehb'];
exports.compile = function(src, options) {
  var d = deferred(),
    name = options.filename.match(/.*\/app\/(templates\/|views\/|\/partials)?(.*)(\.hbs|\.handlebars)/)[2].replace(/\./g, '/');
  
  jsdom.env({
    html: '<div></div>',
    src: [jquery, handlebars, ember],
    done: function(error, window) {
      if (error) {
        return d.reject(error);
      } else {
        var compiled = window.Ember.Handlebars.precompile(src);
        return d.resolve("Ember.TEMPLATES['" + name + "'] = Ember.Handlebars.template(" + compiled + ");");
      }
    }
  });
  return {
    code: d.promise
  };
};
