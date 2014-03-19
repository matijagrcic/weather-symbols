var svg = require('svg')
	, Trait = require('trait')
	, TPrimitive = require('./TPrimitive')

	, FILL_COLOUR = require('yr-colours').MOON

	, TMoonPrimitive;

TMoonPrimitive = Trait({

	show: function () {

	},

	hide: function () {

	},

	move: function (options) {

	},

	/**
	 * Render svg version
	 * @param {SVGElement} element
	 */
	renderSVG: function (element) {
		svg.appendChild(
			element,
			'use',
			this.getUseAttributes('#moon')
		);
	},

	/**
	 * Render canvas version
	 * @param {CanvasContext} ctx
	 */
	renderCanvas: function (ctx) {
		ctx.save();
		this.translateCanvas(ctx);

		ctx.fillStyle = FILL_COLOUR;
		ctx.beginPath();
		ctx.moveTo(23,20);
		ctx.bezierCurveTo(23,12.322,25.89,5.3,30.631,0);
		ctx.bezierCurveTo(30.421,0.012,30.212,0,30,0);
		ctx.bezierCurveTo(13.432,0,0,13.432,0,30);
		ctx.bezierCurveTo(0,46.568,13.432,60,30,60);
		ctx.bezierCurveTo(38.891,60,46.875,56.129,52.369,49.984);
		ctx.bezierCurveTo(36.093,49.646,23,36.356,23,20);
		ctx.closePath();
		ctx.fill();
		ctx.restore();
	}
});

module.exports = Trait.compose(
	TPrimitive,
	TMoonPrimitive
).create();
