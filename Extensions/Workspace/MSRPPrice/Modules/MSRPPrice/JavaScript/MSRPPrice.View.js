// @module TelQuest.MSRPPrice.MSRPPrice
define('TelQuest.MSRPPrice.MSRPPrice.View'
,	[
		'telquest_msrpprice_msrpprice.tpl'
	,	'ProductViews.Price.View'
	,	'Utils'
	,	'Backbone'
	,	'jQuery'
	,	'underscore'
	]
,	function (
		telquest_msrpprice_msrpprice_tpl
	,  ItemViewsPriceView
	,	Utils
	,	Backbone
	,	jQuery
	,	_
	)
{
	'use strict';

	// @class TelQuest.MSRPPrice.MSRPPrice.View @extends Backbone.View
	return Backbone.View.extend({

		template: telquest_msrpprice_msrpprice_tpl

	,	initialize: function (options) {

			/*  Uncomment to test backend communication with an example service 
				(you'll need to deploy and activate the extension first)
			*/
			this.message = '';
			// var service_url = Utils.getAbsoluteUrl(getExtensionAssetsPath('services/MSRPPrice.Service.ss'));

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

		//@method getContext @return TelQuest.MSRPPrice.MSRPPrice.View.Context
	,	getContext: function getContext()
		{
			//@class TelQuest.MSRPPrice.MSRPPrice.View.Context
			var priceRetail = this.model.getRetailPrice().unformatted;
			 var priceRetailFormatted = this.model.getRetailPrice().formatted;
			return {
				priceRetail: priceRetail,
				priceRetailFormatted:priceRetailFormatted
			};
		}
	});
});