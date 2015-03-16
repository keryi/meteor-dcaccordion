Package.describe({
  name: 'keryi:meteor-dcaccordion',
  version: '1.0.0',
  summary: "Design Chemical's jQuery vertical accordion",
  git: 'https://github.com/keryi/meteor-dcaccordion.git',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.0.3.2');
  api.use('jquery');
  api.addFiles('lib/jquery.dcaccordion/jquery.dcaccordion.2.7.js', 'client');
  api.addFiles('lib/jquery.dcaccordion/jquery.dcaccordion.2.7.min.js', 'client');
});
