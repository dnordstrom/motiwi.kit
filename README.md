# MOtiwi, a theme and plugin kit for TiddlyWiki5

This kit includes jQuery and Semantic UI plugins, and a MOtiwi theme and plugin, as well as build scripts to generate TiddlyWiki5. Build scripts are modified versions of the default; one for encrypted wikis.

## Usage

To run the web server and serve the wiki locally at `http://localhost:8080`, simply run:

`./serve Administrator`

Replace “Administrator” with a username of your choice—it will show up in the meta data when editing and creating pages.

Build a wiki by running `./build.sh`. Specify a domain in `build.sh` if necessary (id you need a GitHub Pages CNAME file). By default, the wiki is generated in a `./build` directory. You may specify another directory by running:

`TW5_BUILD_OUTPUT=../example.com ./build.sh`

Build an encrypted wiki by running:

`TW5_PASSWORD=password ./build_secure.sh`

See the [TiddlyWiki5 repository](https://github.com/Jermolene/TiddlyWiki5) for more information on how to use TiddlyWiki5.