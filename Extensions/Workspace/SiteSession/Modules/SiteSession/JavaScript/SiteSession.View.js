// @module TelQuest.SiteSession.SiteSession
define('TelQuest.SiteSession.SiteSession.View'
,	[
		'telquest_sitesession_sitesession.tpl'
	,	'Utils'
	,	'Backbone'
	,	'jQuery'
	,	'underscore'
	]
,	function (
		telquest_sitesession_sitesession_tpl
	,	Utils
	,	Backbone
	,	jQuery
	,	_
	)
{
	'use strict';

	// @class TelQuest.SiteSession.SiteSession.View @extends Backbone.View
	return Backbone.View.extend({

		template: telquest_sitesession_sitesession_tpl

	,	initialize: function (options) {

			/*  Uncomment to test backend communication with an example service 
				(you'll need to deploy and activate the extension first)
			*/
			this.message = '';
			// var service_url = Utils.getAbsoluteUrl(getExtensionAssetsPath('services/SiteSession.Service.ss'));

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

		//@method getContext @return TelQuest.SiteSession.SiteSession.View.Context
	,	getContext: function getContext()
		{
			//@class TelQuest.SiteSession.SiteSession.View.Context
			this.message = this.message || 'Hello World!!'
			return {
				message: this.message
			};
		}
	});
});