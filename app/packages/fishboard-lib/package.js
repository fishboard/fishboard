Package.describe({
  name: 'fishboard:lib',
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

 var packages = [
    "standard-app-packages",
    "matteodem:gridster",
    "agnito:raphael",
    "meteor-platform",
    "iron:router",
    "twbs:bootstrap",
    "ian:accounts-ui-bootstrap-3",
    "accounts-password",
    "fortawesome:fontawesome",
    "dburles:packery",
    "em0ney:chartjs",
    "mrt:justgage-package",
    "planettraining:jquery-ui-drag-resize",
    "percolate:synced-cron",
    "peppelg:bootstrap-3-modal",
    "mrt:bootstrap-select",
    "joshowens:accounts-entry"
  ];

  api.use(packages);
  api.imply(packages);

  //api.versionsFrom('1.1.0.3');

  // JustGage Added Manually
  api.export('JustGage');  
  api.addFiles(['lib/justgage-1.1.0.js', 
    'lib/image-picker.js', 
    'lib/image-picker.css'], 
    ['client']);


});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('fishboard:lib');
  api.addFiles('lib-tests.js');
});
