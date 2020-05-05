// @module TelQuest.Pacejet.Pacejet
define('TelQuest.Pacejet.Pacejet.View'
,	[
		'telquest_pacejet_pacejet.tpl'
	,	'Utils'
	,	'Backbone'
	,	'jQuery'
	,	'underscore'
	]
,	function (
		telquest_pacejet_pacejet_tpl
	,	Utils
	,	Backbone
	,	jQuery
	,	_
	)
{
	'use strict';

	// @class TelQuest.Pacejet.Pacejet.View @extends Backbone.View
	return Backbone.View.extend({

		template: telquest_pacejet_pacejet_tpl

	,	initialize: function (options) {

			/*  Uncomment to test backend communication with an example service 
				(you'll need to deploy and activate the extension first)
			*/
			//this.message = '';
			// var service_url = Utils.getAbsoluteUrl(getExtensionAssetsPath('services/Pacejet.Service.ss'));

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

		//@method getContext @return TelQuest.Pacejet.Pacejet.View.Context
	,	getContext: function getContext()
		{
			//@class TelQuest.Pacejet.Pacejet.View.Context
			return {
			};
		}
	});
});