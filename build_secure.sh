#!/bin/bash

##
# Build TiddlyWiki5 for publishing.
# Uses encryption and does not generate unprotected static pages.
##

##
# Set up the build output directory
##

if [  -z "$TW5_BUILD_OUTPUT" ]; then
    TW5_BUILD_OUTPUT=./build
fi

if [  ! -d "$TW5_PASSWORD" ]; then
    echo 'A valid TW5_PASSWORD environment variable must be set'
    exit 1
fi

echo "Using TW5_BUILD_OUTPUT as [$TW5_BUILD_OUTPUT]"

##
# Make the CNAME file that GitHub Pages requires
##

mkdir -p $TW5_BUILD_OUTPUT
echo "example.com" > $TW5_BUILD_OUTPUT/CNAME

##
# Build,
#  index.html: the main file, including content
##

node ./tiddlywiki.js \
	./site \
	--verbose \
  --password $TW_PASSWORD \
	--rendertiddler $:/core/templates/tiddlywiki5.template.html $TW5_BUILD_OUTPUT/index.html text/plain \
	|| exit 1