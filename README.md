templatezavea
=============
A helpful collection of templates and production tools to jump start Azavea Design Team projects.
### Includes
* Wordpress template files
* Grunt
* Bower
* SASS
* Bootstrap SASS

### File and folder information

- `css\sass` - compiled .scss files for development
- `css\lib` - vendor css files
- `js` - development versions of JS files
- `js\lib` - vendor versions of JS files 
- `bower.json` - Bower project file (front-end components)
- `package.json` - Node project file (node dependencies)
- `Gruntfile.js` - Gruntfile with tasks

### Getting Started
Move your template files from the templates directory into the root directory. For example, if you want to start a Wordpress project, move index.php, footer.php, etc. from the wordpress directory into the root (Templatezavea) directory.
### Installing Dependencies
For asset management and building, we use Node.js, [Grunt](http://www.gruntjs.com), and [Bower](http://bower.io).
#### Node
On OSX, you can use Homebrew to install Node: `$ brew install node`

There is also an install package for OS X and other systems available on the Node [website](http://nodejs.org/download/).

#### Grunt

In the terminal, install the [Grunt](https://github.com/gruntjs/grunt-cli) command line tool: `$ npm install -g grunt-cli`

#### Bower

Also using the terminal, install Bower: `npm install -g bower`

#### Node Dependencies and Bower Packages

Install project dependencies using npm and Bower (run in the project folder): `$ npm install` and `$ bower install`.

### Development
In the project folder, run `grunt watch`. This will automatically process your SASS files and run livereload.

### Production
#### Wordpress
In the project folder, run `grunt wp`. This will build a new directory `dist` with your Wordpress theme.