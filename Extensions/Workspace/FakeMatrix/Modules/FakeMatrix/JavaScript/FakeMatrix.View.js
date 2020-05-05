// @module TelQuest.FakeMatrix.FakeMatrix
define('TelQuest.FakeMatrix.FakeMatrix.View'
,	[
		'telquest_fakematrix_fakematrix.tpl'
	,	'Utils'
	,	'Backbone'
	,	'jQuery'
	,	'underscore'
	]
,	function (
		telquest_fakematrix_fakematrix_tpl
	,	Utils
	,	Backbone
	,	jQuery
	,	_
	)
{
	'use strict';

	// @class TelQuest.FakeMatrix.FakeMatrix.View @extends Backbone.View
	return Backbone.View.extend({

		template: telquest_fakematrix_fakematrix_tpl

	,	initialize: function (options) {

			/*  Uncomment to test backend communication with an example service 
				(you'll need to deploy and activate the extension first)
			*/
			this.message = '';
			// var service_url = Utils.getAbsoluteUrl(getExtensionAssetsPath('services/FakeMatrix.Service.ss'));

			// jQuery.get(service_url)
			// .then((result) => {

			// 	this.message = result;
			// 	this.render();
			// });
		}

	,	events: {
		}

	,	bindings: {
		}

	, 	childViews: {
			
		}

		//@method getContext @return TelQuest.FakeMatrix.FakeMatrix.View.Context
	,	getContext: function getContext()
		{
			//@class TelQuest.FakeMatrix.FakeMatrix.View.Context
			this.message = this.message || 'Hello World!!'
			return {
				message: this.message
			};
		}
	});
});