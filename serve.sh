#!/bin/bash

# serve TiddlyWiki5 over HTTP

# Optional parameter is the username for signing edits

node ./tiddlywiki.js \
	site \
	--verbose \
	--server 8080 $:/core/templates/tiddlywiki5.template.html text/plain text/html $1\
	|| exit 1
