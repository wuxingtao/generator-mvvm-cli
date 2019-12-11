# generator-mvvm-cli 
[![NPM version][npm-image]][npm-url] 
[![license status][license-image]][npm-url]
[![Coverage Status](https://coveralls.io/repos/github/wuxingtao/generator-mvvm-cli/badge.svg?branch=master)](https://coveralls.io/github/wuxingtao/generator-mvvm-cli?branch=master)
[![Build Status][travis-image]][travis-url]

> Yeoman generator cli for react + Webpack.

> Lets you quickly set up a project with:
> * simple template with React/Vue without create-react-app / vue-cli
> * your favorite technologies
> * web best pratices.
> * guidelines powered by Google.

## Installation

First, install [Yeoman](http://yeoman.io) and generator-mvvm-cli using [npm](https://www.npmjs.com/) (we assume you have pre-installed [node.js](https://nodejs.org/)).

```bash
npm install -g yo
npm install -g generator-mvvm-cli
```

Then generate your new project:

```bash
yo rt-webpack
```

## feature lists

### React-template
* React 16.10.2
* webpack 4 
  * webpack-dev-server
* babel (default: @babel 7)
* redux
  * react-redux
  * redux-logger
  * redux-thunk
  * redux-devtools-extension

### Vue-template

## template file list
```
│  .babelrc
│  .gitignore
│  package-lock.json
│  package.json
│  README.md
│  yarn-error.log
│  yarn.lock
│  
├─src
│      App.css
│      App.js
│      index.html
│      index.js
│      
└─webpack
    ├─build
    │      webpack.base.conf.js
    │      webpack.dev.conf.js
    │      webpack.prod.conf.js
    │      
    ├─config
    │      index.js
    │      resolve.js
    │      
    └─dist
            index.html
```


## License

MIT © [xingtao]()


[npm-image]: https://badge.fury.io/js/generator-mvvm-cli.svg
[npm-url]: https://www.npmjs.com/package/generator-mvvm-cli
[travis-image]: https://travis-ci.com//generator-mvvm-cli.svg?branch=master
[travis-url]: https://travis-ci.com//generator-mvvm-cli
[daviddm-image]: https://david-dm.org//generator-mvvm-cli.svg?theme=shields.io
[daviddm-url]: https://david-dm.org//generator-mvvm-cli
[license-image]: https://img.shields.io/github/license/wuxingtao/generator-mvvm-cli
