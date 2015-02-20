'use strict';

var app = app || {};

app.particleEffect = (function() {
	var s;

	return {
		
		settings: {
			theBody: $('body'),
			introLine: $('.intro-line')
		},

		init: function() {
			s = this.settings;
			this.startParticles();
		},

		whichAnimationEvent: function() {
			var t;
			var el = document.createElement('fakeelement');

			var animations = {
			    'animation'      : 'animationend',
			    'OAnimation'     : 'oAnimationEnd',
			    'MozAnimation'   : 'animationend',
			    'WebkitAnimation' : 'webkitAnimationEnd'
			};

			for (t in animations){
				if (el.style[t] !== undefined){
					return animations[t];
				}
			}
		},

		startParticles: function() {
			var animationEvent = this.whichAnimationEvent();

			s.introLine.one(animationEvent, function() {

				s.theBody.particleground({
				    dotColor: 'rgba(255,255,255,.4)',
				    lineColor: 'rgba(255,255,255,.4)'
				});

			});
		}

	};

}());

$(function() {
	app.particleEffect.init();
});