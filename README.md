# Meteor package for dcaccordion
dcaccordion from Design Chemical, https://github.com/dillonforrest/jquery.dcaccordion packaged for Meteor

# To install
meteor add keryi:meteor-dcaccordion

# To use (use markdown for code)
```
Template.menu.rendered = function() {
  $('#accordion').dcAccordion({
    eventType: 'click',
    autoClose: true,
    saveState: true,
    disableLink: true,
    showCount: true,
    speed: 'slow'
  });
}
```

# Examples
Please refer to the link by the original author for more examples, http://www.designchemical.com/lab/jquery-vertical-accordion-menu-plugin/examples/