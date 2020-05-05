// @module TelQuest.ExtendLoginRegister.ExtendLoginRegister
define('TelQuest.ExtendLoginRegister.ExtendLoginRegister.View'
,	[
		'telquest_extendloginregister_extendloginregister.tpl'
	,	'Utils'
	,	'Backbone'
	,	'jQuery'
	,	'underscore'
	]
,	function (
		telquest_extendloginregister_extendloginregister_tpl
	,	Utils
	,	Backbone
	,	jQuery
	,	_
	)
{
	'use strict';

	// @class TelQuest.ExtendLoginRegister.ExtendLoginRegister.View @extends Backbone.View
	return Backbone.View.extend({

		template: telquest_extendloginregister_extendloginregister_tpl

	,	initialize: function (options) {

			/*  Uncomment to test backend communication with an example service 
				(you'll need to deploy and activate the extension first)
			*/
			this.message = '';
			// var service_url = Utils.getAbsoluteUrl(getExtensionAssetsPath('services/ExtendLoginRegister.Service.ss'));

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

		//@method getContext @return TelQuest.ExtendLoginRegister.ExtendLoginRegister.View.Context
	,	getContext: function getContext()
		{
			//@class TelQuest.ExtendLoginRegister.ExtendLoginRegister.View.Context
			this.message = this.message || 'Hello World!!'
			return {
				message: this.message
			};
		}
	});
});