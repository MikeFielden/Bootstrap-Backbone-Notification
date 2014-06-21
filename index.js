'use strict';

var Backbone = require('Backbone');
var Handlebars = require('Handlebars');

var defaultOptions = {
	type: 'info',
	speed: 'fast'
};

var styleClasses = {
	types: {
		'info': 'info',
		'success': 'success',
		'warning': 'warning',
		'error': 'error'
	},
	animationSpeeds: {
		'fast': 'ani-fast',
		'normal': 'ani-medium',
		'slow': 'ani-slow'
	},
};

var notificationView = Backbone.View.extend({
	template: function () {
		return [
		'<h4 class="note-heading">{{header}}</h4>',
		'<p class="lead note-body">{{message}}</p>',
		'<button type="button" class="close" aria-hidden="true">&times;</button>'
		].join('');
	},

	className: 'alert row-fluid col-lg-8 col-lg-offset-2 ' +
	 'col-md-8 col-md-offset-2 col-sm-10 col-sm-offset-1 ' +
	 'note-container',

	events: {
		'click button.close': 'closeNotification'
	},

	initialize: function (options) {
		var speed, type;

		if (options === undefined) options = {};

		this.options = _.defaults(options, defaultOptions);

		// Add the right classes based on options
		speed = styleClasses.animationSpeeds[this.options.speed];
		type = styleClasses.types[this.options.type];

		if (speed) {
			this.$el.addClass(speed);
		}

		if (type) {
			this.$el.addClass(type);
		}

		if (this.options.animateInClass) {
			this.$el.addClass(this.options.animateInClass);
		}

		this.render();
	},

	render: function () {
		this.$el.append(Handlebars.compile(this.template())(this.options));

		return this;
	},

	closeNotification: function (evt) {
		evt.preventDefault();

		this.trigger('close');

		if (this.options.animateOutClass) {
			this.$el.on('animationend webkitTransitionEnd', function () {
				this.$el.off().remove();
			}.bind(this));

			this.$el.addClass(this.options.animateOutClass);
		} else {
			this.$el.off().remove();
		}
	}
});

module.exports = notificationView;