/*\
title: $:/plugins/morg/motiwi/motiwi.js
type: application/javascript
module-type: browser-startup

Motiwi JavaScript

\*/

jQuery(function($) {
  $('.ui.sidebar').addClass("floating").sidebar('attach events', '.toggle')
  $('.ui.dropdown').dropdown()
  
  $(document).bind('DOMNodeInserted',function() {
    $('.ui.accordion').accordion()
  })

  $('.popup').popup()
})
