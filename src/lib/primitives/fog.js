'use strict';

const utils = require('../utils');

/**
 * Render fog svg primitive
 * @param {Object} options
 * @returns {String}
 */
module.exports = function render (options) {
  return utils.getElement('#fog', options);
};