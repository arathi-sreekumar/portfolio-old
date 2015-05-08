(function() {
  'use strict';

  // Configure RequireJS to shim Jasmine
  require.config({
      baseUrl: '../js/',
      paths: {
          jquery: 'vendor/jquery1.7.2',
          html5shim: 'vendor/html5shiv',
          'jasmine': '../test/lib/jasmine/jasmine',
          'jasmine-html': '../test/lib/jasmine/jasmine-html',
          'boot': '../test/lib/jasmine/boot',
          spec: '../test/spec/'
      },
      shim: {
          jquery: {
              exports: 'jQuery'
          },
          jasmine: {
            exports: 'jasmine'
          },
          'jasmine-html': {
            deps: ['jasmine'],
            exports: 'jasmine'
          },
          'boot': {
            deps: ['jasmine', 'jasmine-html'],
            exports: 'window.jasmineRequire'
          }
      }
  });


  require(['boot'], function(){

    var specs = [];
   
    specs.push('spec/toggleSectionSpec');

    require(specs, function(spec){
        // Initialize the HTML Reporter and execute the environment (setup by `boot.js`)
      window.onload();
    });
   
  });
})();
