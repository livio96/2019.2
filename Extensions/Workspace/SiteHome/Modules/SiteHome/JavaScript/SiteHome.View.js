// @module TelQuest.SiteHome.SiteHome
define('TelQuest.SiteHome.SiteHome.View'
,	[
		'telquest_sitehome_sitehome.tpl'
	,	'Utils'
	,	'Backbone'
	,	'jQuery'
	,	'underscore'
	]
,	function (
		telquest_sitehome_sitehome_tpl
	,	Utils
	,	Backbone
	,	jQuery
	,	_
	)
{
	'use strict';

	// @class TelQuest.SiteHome.SiteHome.View @extends Backbone.View
	return Backbone.View.extend({

		template: telquest_sitehome_sitehome_tpl

	,	initialize: function (options) {

			/*  Uncomment to test backend communication with an example service 
				(you'll need to deploy and activate the extension first)
			*/
			this.message = '';
			// var service_url = Utils.getAbsoluteUrl(getExtensionAssetsPath('services/SiteHome.Service.ss'));

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

		//@method getContext @return TelQuest.SiteHome.SiteHome.View.Context
	,	getContext: function getContext()
		{
			
			return {
			};
		}
	});
});