'use strict';

const grid = require('@yr/graphics-component/previewGrid')
  , ReactDOM = require('react-dom')
  , recipes = require('./lib/recipes')
  , symbolComponent = require('./index')

  , el = document.getElementById('viewport')
  , symbol = symbolComponent.create({ rootImagePath: 'dist/png/100' });

ReactDOM.render(grid({
  ids: Object.keys(recipes),
  graphic: symbol
}), el);