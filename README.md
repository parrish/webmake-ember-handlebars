# webmake-handlebars

## Require Handlebars template files with [Webmake](https://github.com/medikoo/modules-webmake)

To use this extension, install it aside of Webmake:

    $ npm install webmake-handlebars

If you use global installation of Webmake, then extension also needs to be installed globally:

    $ npm install -g webmake-handlebars

When running Webmake, ask webmake to use it:

    $ webmake --ext=handlebars program.js bundle.js

Same way when Webmake is used programmatically:

    webmake(inputPath, { ext: 'handlebars' }, cb);

webmake-handlebars can be used with any other Webmake extension, e.g.:

    $ webmake --ext=handlebars --ext=otherext program.js bundle.js

Programmatically:

    webmake(inputPath, { ext: ['handlebars', 'otherext'] }, cb);

## How to Use the Bundled Template
To add the template to your bundle, just require it.  Ember will access it from the template id.

The template id will be set to the name and path of the file with a few caveats:

  - Templates are expected to be in the `app/` directory
  - Templates must have `.hbs`, `.handlebars`, `.ehb` file extensions
  - If the template path includes `templates`, `views`, or `partials`, those segments will be ignored in the template id

For example:

```javascript
require('./foo') // app/foo.hbs will be accessible at #foo
require('./templates/foo') // app/templates/foo.hbs will be accessible at #foo
require('./templates/foo/bar') // app/templates/foo/bar.hbs will be accessible at #foo/bar
require('./templates/foo.bar') // app/templates/foo.bar.hbs will be accessible at #foo/bar
```
