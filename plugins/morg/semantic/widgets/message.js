/*\
title: $:/plugins/morg/semantic/widgets/message.js
type: application/javascript
module-type: widget

Implements the message widget.

\*/
(function(){

/*jslint node: true, browser: true */
/*global $tw: false */
"use strict";

var SemanticMessageWidget = function(renderer) {
	this.renderer = renderer; // Save state
	this.generate(); // Generate child nodes
};

SemanticMessageWidget.prototype.generate = function() {
  ////
	// Get the parameters from the attributes
  ////
  
  var child_elements = [];
	this.message = this.renderer.getAttribute("message");
	this.icon = this.renderer.getAttribute("icon");
	this.title = this.renderer.getAttribute("title");
  this.type = this.renderer.getAttribute("type");
  this.color = this.renderer.getAttribute("color");
	this["class"] = this.renderer.getAttribute("class");
  
	////
  // Start composing message
  ////
  
	var classes = ["ui", "message", "mo-message"];
  
	if (this["class"]) {
		$tw.utils.pushTop(classes, this["class"]);
	}
  
  ////
  // Set color, icon, or predefined styles.
  ////
  
  classes.push("icon");
  classes.push(this.type);
  
  if (!this.icon) {
    if (this.type == "info") {
      this.icon = "attention"
    } else if (this.type == "error") {
      this.icon = "warning"
    } else if (this.type == "success") {
      this.icon = "ok sign"
    }
  }

  ////
  // Color
  ///
  
  if (this.color) {
    classes.push(this.color); 
  }
  
  ////
  // Icon
  ////
  
  if (this.icon) {
		classes.push("icon");
  
    child_elements.push({
  		type: "element",
  		tag: "i",
  		attributes: {
  			class: { type: "string", value: "icon " + this.icon }
      }
  	});
  }
  
  ////
	// Compose the element and child elements
  ////
  
  this.tag = "div";
	this.attributes = { "class": classes.join(" ") };
  
  child_elements.push({
		type: "element",
		tag: "div",
		attributes: {
			class: { type: "string", value: "content" }
    },
    children: [{
      	type: "element",
    		tag: "div",
    		attributes: {
    			class: { type: "string", value: "header" }
        },
        children: this.renderer.renderTree.wiki.parseText("text/vnd.tiddlywiki", this.title, { parseAsInline: true }).tree
    },
    {
    	type: "element",
  		tag: "p",
      children: this.renderer.renderTree.wiki.parseText("text/vnd.tiddlywiki", this.message, { parseAsInline: true }).tree
  	}]
	});
  
  this.children = this.renderer.renderTree.createRenderers(this.renderer, child_elements);
};

exports.semanticmessage = SemanticMessageWidget;

})();
