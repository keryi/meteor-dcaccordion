Package.describe({
  name: 'keryi:meteor-dcaccordion',
  version: '1.0.1',
  summary: "Design Chemical's jQuery vertical accordion",
  git: 'https://github.com/keryi/meteor-dcaccordion.git',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.0.3.2');
  api.use('jquery');
  api.addFiles('lib/jquery-cookie/src/jquery.cookie.js');
  api.addFiles('lib/jquery-hoverIntent/jquery.hoverIntent.js');
  api.addFiles('lib/jquery.dcaccordion/jquery.dcaccordion.2.7.min.js', 'client');
});
