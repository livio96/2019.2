
define(
	'TelQuest.WebPrice.WebPrice'
,   [
		'TelQuest.WebPrice.WebPrice.View'
	,   'ProductViews.Price.View'
	,   'Transaction.Line.Views.Price.View'
	,	'telquest_webprice_webprice.tpl'
	,   'ProductDetails.Full.View'
	,   'ProductDetails.Quantity.View'
	,   'Profile.Model'	
	,   'SC.Configuration'
	,   'underscore'
	,	'jQuery'
	
	]
,   function (
		WebPriceView
	,   ProductViewsPriceView
	,   TransactionLineViewsPrice
	,   telquest_webprice_webprice_tpl
	,   ProductDetailsFullView
	,   ProductDetailsQuantityView
	,   ProfileModel
	,   Configuration
	,   underscore
	,	jQuery
	)
{
	'use strict';
	return  {
		mountToApp: function mountToApp (container)
		{
				   _.extend(ProductViewsPriceView.prototype, {
							getContext: _.wrap(ProductViewsPriceView.prototype.getContext, function (fn) {
							var retVal = fn.apply(this, _.toArray(arguments).slice(1));
							debugger;
							var self=this;
							 var itmmsg=this.model.getSelectedMatrixChilds && this.model.getSelectedMatrixChilds();
							var vendstock;
							var MSRPPriceformatted;
							var MSRPPrice;
							var loggedoutprice;
							var loggedoutpriceformatted;
							var loggedinPrice;
							 var webitemavailability;
							 var webitemavailabilityMsg;
								 _.filter(itmmsg, function filterItem(item) {
									 vendstock=item.attributes.custitem_vendor_stock;
									 MSRPPriceformatted=item.attributes.pricelevel13_formatted;
									 MSRPPrice=item.attributes.pricelevel13;
									 loggedoutpriceformatted=item.attributes.pricelevel14_formatted;
									 loggedoutprice=item.attributes.pricelevel14;
									 loggedinPrice=item.attributes.pricelevel17_formatted;
									 if(MSRPPrice>loggedoutprice)
									 {
										 self.$('.product-views-price-msrp').addClass('strike');
									 }
									// if(MSRPPrice==loggedoutprice)
									// {
									//	 self.$('.product-views-price-msrp').addClass('strike');
									// }
									 if(vendstock==0)
									 {
									// webitemavailability=item.attributes.custitem_item_availibility;
									 webitemavailability=item.attributes.custitem_webstore_default_availibility;
									 if(webitemavailability=='' || webitemavailability==undefined)
									 {	
										if(webitemavailabilityMsg!='In Stock'){
										 webitemavailabilityMsg='Call for Availability';
										}
									 }
									 }
									 if(vendstock>0)
									 {
									// webitemavailability=item.attributes.custitem_item_availibility;
									 webitemavailability=item.attributes.custitem_webstore_default_availibility;
									 if(webitemavailability=='' || webitemavailability==undefined)
									 {
										 webitemavailabilityMsg='In Stock';
									 }
									 }
								 });
							 var profileinstance = ProfileModel.getInstance();
							 var custlgin = profileinstance.get('isLoggedIn');
							 setTimeout(function(){ 
							 if(MSRPPrice>loggedoutprice)
									 {
										self.$('.product-views-price-msrp').css('display','block');
										self.$('.product-views-price-msrp').addClass('strike');
									 }
									 //if(MSRPPrice && loggedoutprice)
									 //{
										 //if(MSRPPrice==loggedoutprice)
										// {
										//	self.$('.product-views-price-msrp').css('display','block');
										//	self.$('.product-views-price-msrp').addClass('strike');
										 //}
									 //}
							},1000);
									
								 _.extend(retVal, {
							   	vendstock:vendstock
							,   webitemavailability:webitemavailabilityMsg=='Call for Availability' || webitemavailabilityMsg=='Pre Order' ? 		webitemavailabilityMsg :'',
								webinstock:webitemavailabilityMsg=='In Stock' ? webitemavailabilityMsg : ''
							//,isLoggedIn:custlgin=='T' ? '' : custlgin
							, 	MSRPPrice: MSRPPriceformatted 
							
							}); 
							return retVal;
						}) 
				});
				/* _.extend(TransactionLineViewsPrice.prototype, {
							getContext: _.wrap(TransactionLineViewsPrice.prototype.getContext, function (fn) {
							var retVal = fn.apply(this, _.toArray(arguments).slice(1));
							if (!_.isUndefined(this.model.get('item'))) {
							 console.log('this.model',this.model); 
							 var profileinstance = ProfileModel.getInstance();
							 console.log('Cust login', profileinstance.get('isLoggedIn')); 
							 var custlgin = profileinstance.get('isLoggedIn');
							 if(custlgin == 'F')
							 {
								 _.extend(retVal, {
								price: this.model.attributes.item.attributes.pricelevel14 ? this.model.attributes.item.attributes.pricelevel14 : this.model.attributes.item.attributes.pricelevel13
							,   rateFormatted: this.model.attributes.item.attributes.pricelevel14_formatted || ''
							}); 
								 
							 }							
							}
							return retVal;
						}) 
				});  */
			ProductViewsPriceView.prototype.template=telquest_webprice_webprice_tpl; 
			
			
		}
	};
});
