/*\
title: $:/plugins/morg/motiwi/widgets/blockquote.js
type: application/javascript
module-type: widget

Implements the moblockquote widget.

\*/
(function(){

/*jslint node: true, browser: true */
/*global $tw: false */
"use strict";

var BlockquoteWidget = function(renderer) {
	this.renderer = renderer; // Save state
	this.generate(); // Generate child nodes
};

BlockquoteWidget.prototype.generate = function() {
  ////
	// Get the parameters from the attributes
  ////
  
  var child_elements = [];
	this.quote = this.renderer.getAttribute("quote");
	this.by = this.renderer.getAttribute("by");
	this["class"] = this.renderer.getAttribute("class");
  
  ////
	// Compose the element and child elements
  ////
  
	if (this["class"]) {
		this.attributes = { "class": this["class"].join(" ") };
	} else {
	  this.attributes = { "class": "" };
	}
  
  if (this.by) {
    this.quote += "<small>" + this.by + "</small>";
  }
  
  child_elements.push({
		type: "element",
		tag: "blockquote",
		attributes: this.attributes,
    children: this.renderer.renderTree.wiki.parseText("text/vnd.tiddlywiki", this.quote, { parseAsInline: true }).tree
	});
  
  this.children = this.renderer.renderTree.createRenderers(this.renderer, child_elements);
};

exports.moblockquote = BlockquoteWidget;

})();
