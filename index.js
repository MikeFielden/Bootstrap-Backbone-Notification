'use strict';

var Backbone = require('Backbone');
var Handlebars = require('Handlebars');

var notificationView = Backbone.View.extend({
	template: function () {
		return [
		'<h4 class="error-heading">Header here</h4>',
		'<p class="lead error-body">Body of message here</p>'
		].join('');
	},

	className: 'alert row-fluid col-lg-8 col-lg-offset-2 ' +
	 ' col-md-8 col-md-offset-2 col-sm-10 col-sm-offset-1 ' +
	 ' fadeInDown ani-fast error-container',

	events: {
	},

	initialize: function (options) {
		this.options = options;

		this.render();
	},

	render: function () {
		this.$el.append(Handlebars.compile(this.template())(this.options));

		return this;
	}
});

module.exports = notificationView;