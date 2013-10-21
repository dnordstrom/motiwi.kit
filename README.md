# MOtiwi, a theme and plugin kit for TiddlyWiki5

This kit includes jQuery and Semantic UI plugins, and a MOtiwi theme and plugin, as well as build scripts to generate TiddlyWiki5. The build scripts are modified versions of the default `bld.sh`—one for encrypted wikis.

## Usage

To run the web server and serve the wiki locally at `http://localhost:8080`, simply run `./serve Administrator` (replace “Administrator” with a username of your choice).

Specify domain if necessary in `build.sh`, and build a wiki by running `./build.sh`. By default, it generates the wiki in a `./build` directory. You may specify another directory by running:

`TW5_BUILD_OUTPUT=../example.com ./build.sh`.

Build an encrypted wiki by running:

`TW5_PASSWORD=password ./build_secure.sh`.

See the [TiddlyWiki5 repository](https://github.com/Jermolene/TiddlyWiki5) for more information on how to use TiddlyWiki5.