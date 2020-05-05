
define(
	'TelQuest.MSRPPrice.MSRPPrice'
,   [
		'TelQuest.MSRPPrice.MSRPPrice.View'
	  ,	'Backbone'
	  , 'SC.Configuration'
	  , 'Product.Model'
	  ,	'ProductViews.Price.View'
	  ,	'telquest_msrpprice_msrpprice.tpl'

	  , 'underscore'
	]
,   function (
		MSRPPriceView
	,	Backbone
	,  Configuration
	, ItemDetailsModel
	, ItemViewsPriceView
	,telquest_msrpprice_msrpprice_tpl
	, _
	)
{
	'use strict';

	return  {
		mountToApp: function mountToApp (container)
		{
			/* Configuration.itemKeyMapping = Configuration.itemKeyMapping || {};
		  _.extend(Configuration.itemKeyMapping,
		  {
			_retailPrice: function _retailPrice(item)
			{
			  return item.get('pricelevel13');
			}
		  , _retailPriceFormatted: function _retailPriceFormatted(item)
			{
			  return item.get('pricelevel13');
			}
		  });
		  ItemDetailsModel.prototype.getRetailPrice = function getRetailPrice()
			{
			  var price_retail = this.get('_retailPrice')
			  , price_retail_formatted = this.get('_retailPriceFormatted');

			  return {
				unformatted: price_retail
			  , formatted: price_retail_formatted
			  };
			}
			//pro
			ItemViewsPriceView.prototype.getContext = _.wrap(ItemViewsPriceView.prototype.getContext, function(fn)
			{
			  var context = fn.apply(this, _.toArray(arguments).slice(1));

			  context.priceRetail = this.model.getRetailPrice().unformatted;
			  context.priceRetailFormatted = this.model.getRetailPrice().formatted;

			  return context;
			}); */

		}
	};
});
