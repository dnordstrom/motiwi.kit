#!/bin/bash

##
# Build TiddlyWiki5 for publishing.
# Generates static pages as well.
##

##
# Set up the build output directory
##

if [  -z "$TW5_BUILD_OUTPUT" ]; then
    TW5_BUILD_OUTPUT=./build
fi

if [  ! -d "$TW5_BUILD_OUTPUT" ]; then
    echo 'A valid TW5_BUILD_OUTPUT environment variable must be set'
    exit 1
fi

echo "Using TW5_BUILD_OUTPUT as [$TW5_BUILD_OUTPUT]"

##
# Make the CNAME file that GitHub Pages requires
##

echo "example.com" > $TW5_BUILD_OUTPUT/CNAME

##
# Create `static` directory if necessary, deleting existing content
##

mkdir -p $TW5_BUILD_OUTPUT/static
rm $TW5_BUILD_OUTPUT/static/*

# Build,
#  index.html: the main file, including content
#  static.html: the static version of the default tiddlers

node ./tiddlywiki.js \
	./site \
	--verbose \
	--rendertiddler $:/core/templates/tiddlywiki5.template.html $TW5_BUILD_OUTPUT/index.html text/plain \
	--rendertiddler $:/core/templates/static.template.html $TW5_BUILD_OUTPUT/static.html text/plain \
	--rendertiddler $:/core/templates/static.template.css $TW5_BUILD_OUTPUT/static/static.css text/plain \
	--rendertiddlers [!is[system]] $:/core/templates/static.tiddler.html $TW5_BUILD_OUTPUT/static text/plain \
	|| exit 1