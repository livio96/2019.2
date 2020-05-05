// @module TelQuest.ExtendProfileinfo.ExtendProfileinfo
define('TelQuest.ExtendProfileinfo.ExtendProfileinfo.View'
,	[
		'telquest_extendprofileinfo_extendprofileinfo.tpl'
	,	'Utils'
	,	'Backbone'
	,	'jQuery'
	,	'underscore'
	]
,	function (
		telquest_extendprofileinfo_extendprofileinfo_tpl
	,	Utils
	,	Backbone
	,	jQuery
	,	_
	)
{
	'use strict';

	// @class TelQuest.ExtendProfileinfo.ExtendProfileinfo.View @extends Backbone.View
	return Backbone.View.extend({

		template: telquest_extendprofileinfo_extendprofileinfo_tpl

	,	initialize: function (options) {

			/*  Uncomment to test backend communication with an example service 
				(you'll need to deploy and activate the extension first)
			*/
			this.message = '';
			// var service_url = Utils.getAbsoluteUrl(getExtensionAssetsPath('services/ExtendProfileinfo.Service.ss'));

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

		//@method getContext @return TelQuest.ExtendProfileinfo.ExtendProfileinfo.View.Context
	,	getContext: function getContext()
		{
			//@class TelQuest.ExtendProfileinfo.ExtendProfileinfo.View.Context
			//this.message = this.message || 'Hello World!!'
			return {
				//message: this.message
			};
		}
	});
});