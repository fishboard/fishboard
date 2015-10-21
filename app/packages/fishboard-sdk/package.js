Package.describe({
  name: 'fishboard:sdk',
  version: '0.0.1',
  // Brief, one-line summary of the package.
  summary: '',
  // URL to the Git repository containing the source code for this package.
  git: '',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom("METEOR@1.2.0.2");  
  api.export("Fishboard", ["client", "server"]);

  api.addFiles('sdk.js');
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('fishboard:sdk');
  api.addFiles('sdk-tests.js');
});
