// @module TelQuest.WebStockNotification.WebStockNotification
define('TelQuest.WebStockNotification.WebStockNotification.View'
,	[
		'telquest_webstocknotification_webstocknotification.tpl'
	,	'Utils'
	,	'Backbone'
	,	'jQuery'
	,	'underscore'
	]
,	function (
		telquest_webstocknotification_webstocknotification_tpl
	,	Utils
	,	Backbone
	,	jQuery
	,	_
	)
{
	'use strict';

	// @class TelQuest.WebStockNotification.WebStockNotification.View @extends Backbone.View
	return Backbone.View.extend({

		template: telquest_webstocknotification_webstocknotification_tpl

	,	initialize: function (options) {

			/*  Uncomment to test backend communication with an example service 
				(you'll need to deploy and activate the extension first)
			*/
			this.message = '';
			// var service_url = Utils.getAbsoluteUrl(getExtensionAssetsPath('services/WebStockNotification.Service.ss'));

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

		//@method getContext @return TelQuest.WebStockNotification.WebStockNotification.View.Context
	,	getContext: function getContext()
		{
			//@class TelQuest.WebStockNotification.WebStockNotification.View.Context
			this.message = this.message || 'Hello World!!'
			return {
				message: this.message
			};
		}
	});
});