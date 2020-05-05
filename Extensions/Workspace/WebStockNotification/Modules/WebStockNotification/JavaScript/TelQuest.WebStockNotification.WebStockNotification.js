
define(
	'TelQuest.WebStockNotification.WebStockNotification'
,   [
		'TelQuest.WebStockNotification.WebStockNotification.View'
	,	'ProductDetails.Full.View'
	,	'ProductDetails.Base.View'
	,   'ProductViews.Option.View'
	,   'ProductDetails.QuickView.View'
	,   'ProductDetails.Quantity.View'
	,   'telquest_webstocknotification_webstocknotification.tpl'
	,	'GlobalViews.Message.View'
	,   'Cart.Detailed.View'
	,	'Cart.Lines.View'
	,   'LiveOrder.Model'
	,	'Utils'
	,	'underscore'
	,	'Backbone'

	,	'jQuery'
	,	'jQuery.scStickyButton'
	]
,   function (
	   WebStockNotificationView
	,  ProductDetailsFullView
	,  ProductDetailsBaseView
	,  ProductViewsOptionView
	,  ProductDetailsQuickViewView
	,  ProductDetailsQuantityView
	,  telquest_webstocknotification_webstocknotification_tpl
	,  GlobalViewsMessageView
	,  CartDetailedView
	,  	CartLinesView
	, 	LiveOrderModel
	,	Utils
	,	_
	,	Backbone

	,	jQuery
	)
{
	'use strict';
	return  {
		mountToApp: function mountToApp (container)
		{
		/*_.extend(CartDetailedView.prototype,{
		updateItemQuantity:function updateItemQuantity(e) {
         var self = this;
        var $line = null;
        var $form = jQuery(e.target).closest('form');
        var options = $form.serializeObject();
        var internalid = options;
        var line = this.model.get('lines').get(internalid);
        var $input = $form.find('[name="quantity"]');
        //var validInput = this.validInputValue($input[0]);

        if (!line || this.isRemoving) {
            return;
        }

       // if (!validInput || options.quantity) {
        if (options.quantity) {
            let new_quantity = parseInt(options.quantity, 10);
            var item = line.get('item');
            var min_quantity = item
                ? item.get('_minimumQuantity', true)
                : line.get('minimumquantity');
            var max_quantity = item
                ? item.get('_maximumQuantity', true)
                : line.get('maximumquantity');
            var current_quantity = parseInt(line.get('quantity'), 10);

            new_quantity = new_quantity >= min_quantity ? new_quantity : current_quantity;
            new_quantity =
                !!max_quantity && new_quantity > max_quantity ? current_quantity : new_quantity;

		var vendorstock=item.get('custitem_vendor_stock');
		console.log('vendorstockupdate',vendorstock);
		/* if(vendorstock)
			{
			if(new_quantity>vendorstock)
			{
			$input.attr('max',vendorstock); 
			$input.val(vendorstock).change(); 
			return;
			}
			} 
			if(vendorstock)
						{
							if(vendorstock > 250)
							{
								$input.attr('max',250); 
								if(new_quantity > 250)
								{
									$input.val(250).change();
									//return;
								}							
								return;
							}
							else if(vendorstock >0 && vendorstock <= 250)
							{
								$input.attr('max',vendorstock);
								if(new_quantity > vendorstock)
								{
									//self.showError('Maximum you can order '+vendorstock ,$aa);
									//self.$('.qty-error').html('Maximum you can order '+vendorstock ,$aa);
									$input.val(vendorstock).change();
								}
								return;
							}
							else if(vendorstock == 0)
							{
								$input.attr('max',250);
								if(new_quantity > 250)
								{
									$input.val(250).change();
								}
								return;
							}
							
						}
						else
						{
							if(vendorstock == 0)
							{
								
								$input.attr('max',250);
								if(new_quantity > 250)
								{
									$input.val(250).change();
								    return;
								}								
							}
							else
							$input.val(new_quantity).trigger('blur'); 
						} 
           // $input.val(new_quantity);
            if (new_quantity !== current_quantity) {
                $input.val(new_quantity).prop('disabled', true);
                line.set('quantity', new_quantity);

                var invalid = line.validate();

                if (!invalid) {
                    var update_promise = this.model.updateLine(line, true);
                    this.disableElementsOnPromise(update_promise, '#' + internalid + ' button');

                    update_promise
                        .fail(function(jqXhr) {
                            var result = JSON.parse(jqXhr.responseText);
                            var { errorDetails } = result;

                            if (errorDetails.newLineId) {
                                internalid = errorDetails.newLineId;
                                // we use the new line
                                line = self.model.get('lines').get(internalid);
                            }

                            // revert quantity to the last quantity
                            line.set('quantity', current_quantity);
                            self.render();

                            $line = self.$('#' + internalid);
                            self.showError(result.errorMessage, $line, result.errorDetails);
                        })
                        .always(function() {
                            $input.prop('disabled', false);
                        });
                } else {
                    var placeholder = this.$(
                        '#' + internalid + ' [data-type="alert-placeholder"]'
                    );
                    placeholder.empty();

                    _.each(invalid, function(value) {
                        var global_view_message = new GlobalViewsMessageView({
                            message: value,
                            type: 'error',
                            closable: true
                        });

                        placeholder.append(global_view_message.render().$el.html());
                    });

                    $input.prop('disabled', false);
                    line.set('quantity', current_quantity);
                }
            }
        }
    }
			});*/
			
			  _.extend(ProductDetailsBaseView.prototype, {
					selectDefaultCondition1: function selectDefaultCondition1() {
					var self=this;
					console.log('base',this.model.getItem());
					var itm=this.model.getItem();
					// _.each(itm.get('relateditems_detail'),function(relateddata){
						 //console.log('relateddata',relateddata);
						var webstoredefaultavial;
					// webstoredefaultavial=itm.attributes.custitem_item_availibility;
					var vendstock=itm.attributes.custitem_vendor_stock;
					 webstoredefaultavial=itm.attributes.custitem_webstore_default_availibility;
					 console.log('webstoredefaultavial',webstoredefaultavial);
					 if(vendstock==0)
					 {
					 if(webstoredefaultavial=='' || webstoredefaultavial==undefined)
					 {
						 webstoredefaultavial='Call for Availability';
					 }
					 }
					  if(vendstock>0)
					 {
					 if(webstoredefaultavial=='' || webstoredefaultavial==undefined)
					 {
						 webstoredefaultavial='In Stock';
					 }
					 }
					if(webstoredefaultavial=='Call for Availability' || webstoredefaultavial=='Not Available Online')
					{
						//self.$('.cart-add-to-cart-button-container').hide();
						//self.$('.product-details-quantity-options').hide();	
						self.$('.cart-add-to-cart-button-container').find('.cart-add-to-cart-button-button').prop('disabled',true);
						self.$('.product-details-quantity-container').find('button, input').prop('disabled',true);
						 

					} 
					if(webstoredefaultavial=='In Stock' || webstoredefaultavial=='Pre Order'){
						//self.$('.cart-add-to-cart-button-container').show();
						//self.$('.product-details-quantity-options').show();	
						self.$('.cart-add-to-cart-button-container').find('.cart-add-to-cart-button-button').prop('disabled',false);
						self.$('.product-details-quantity-container').find('button, input').prop('disabled',false);

					}
					console.log('optionsmodel',this.model);
						this.model.on('change', function onChange() {
							 self.generateViewBindings();
							  self.updateURL();
							self.render();
						}) ;
						//this.model.on('change',self.render,self);
				}
			   ,   setQuantity1: function setQuantity1(){
				 //  debugger;
						 var self=this;
						 var livemodel=LiveOrderModel.getInstance();
						 console.log('livemodel',livemodel);
						 var itm=this.model.getItem();
						// var webstoredefaultavial=itm.attributes.custitem_item_availibility;
						 var webstoredefaultavial=itm.attributes.custitem_webstore_default_availibility;
						 var vendstock=itm.attributes.custitem_vendor_stock;
						 var pdqitmid=itm.attributes.internalid;
						 console.log('pdqitmid',pdqitmid);
						 if(webstoredefaultavial=='In Stock' || webstoredefaultavial=='Pre Order')
						{
							//self.$('.cart-add-to-cart-button-container').show();
							//self.$('.product-details-quantity-options').show();
							self.$('.cart-add-to-cart-button-container').find('.cart-add-to-cart-button-button').prop('disabled',false);
							self.$('.product-details-quantity-container').find('button, input').prop('disabled',false);
						}
						if(webstoredefaultavial=='Call for Availability')
						{
							//self.$('.cart-add-to-cart-button-container').hide();
							//self.$('.product-details-quantity-options').hide();
							self.$('.cart-add-to-cart-button-container').find('.cart-add-to-cart-button-button').prop('disabled',true);
							self.$('.product-details-quantity-container').find('button, input').prop('disabled',true);
						}
						var	$input_quantity = self.$('[name="quantity"]');
						    var value = parseInt(self.$('#quantity').val(), 10)
							,	$input_quantity = self.$('[name="quantity"]')
							,	old_value = parseInt($input_quantity.val(), 10)
							,	new_quantity = old_value;
						 var itemInternlid=self.model.get('item').get('internalid');
						 var $aa = self.$('[name="quantity"]');
						 var check= _.find(livemodel.attributes.lines.models,function(itemint){
							console.log('itemint',itemint);
							var itmintid=itemint.attributes.item.attributes.internalid;
							console.log('itmintid',itmintid);
							console.log('itmid',itm.id);
							if(itmintid==pdqitmid)
							{
								var cartqty=itemint.attributes.quantity;
								console.log('cartqty',cartqty);
								if(vendstock==0 || vendstock==undefined)
								{
									vendstock=250;
								}
								var remainigqtyvalue=(cartqty)-(vendstock);
								remainigqtyvalue=Math.abs(remainigqtyvalue);
								console.log('remainigqtyvalue',remainigqtyvalue);
								if(vendstock)
								{
									if(cartqty>=vendstock)
									{
										//self.showError(_('this item having only'+vendstock).translate());
										//self.$('.cart-add-to-cart-button-container').hide();
										//self.$('.product-details-quantity-options').hide();	
										self.$('.cart-add-to-cart-button-container').find('.cart-add-to-cart-button-button').prop('disabled',true);
										self.$('.product-details-quantity-container').find('button, input').prop('disabled',true);
										$input_quantity.val(1).prop('disabled', true);
										return;
									}
									else{
										//self.showError(_('maximum you can order'+remainigqtyvalue).translate());
										//self.$('.qty-error').html('Maximum you can order '+remainigqtyvalue);
										//self.$('.cart-add-to-cart-button-container').show();
										self.$('.cart-add-to-cart-button-container').find('.cart-add-to-cart-button-button').prop('disabled',false);
										self.$('.product-details-quantity-container').find('button, input').prop('disabled',false);
										$input_quantity.attr('max',remainigqtyvalue);
										$input_quantity.val(new_quantity).trigger('blur');
										return;
									}
								}
							}
						});
						if(vendstock)
						{
							if(vendstock > 250)
							{
								//alert('>250');
								//self.showError('Maximum you can order '+250 ,$aa);
								$input_quantity.attr('max',250); 
								if(new_quantity > 250)
								{
									$input_quantity.val(250).change();
								return;
								}							
							}
							else if(vendstock >0 && vendstock <=250)
							{
								$input_quantity.attr('max',vendstock);
								if(new_quantity > vendstock)
								{
									//self.showError('Maximum you can order '+vendstock ,$aa);
									//self.$('.qty-error').html('Maximum you can order '+remainigqtyvalue);
									$input_quantity.val(vendstock).change();
								return;
								}
							}
							else if(vendstock == 0)
							{
								$input_quantity.attr('max',250);
								if(new_quantity > 250)
								{
									//self.showError('Maximum you can order '+250 ,$aa);
									//self.$('.qty-error').html('Maximum you can order '+250);
									$input_quantity.val(250).change();
								return;
								}
							}
						}
						else
						{
							if(vendstock == 0)
							{
								$input_quantity.attr('max',250);
								if(new_quantity > 250)
								{
									//self.showError('Maximum you can order '+250 ,$aa);
									//self.$('.qty-error').html('Maximum you can order '+250);
									$input_quantity.val(250).change();
								    return;
								}								
							}
							else
							$input_quantity.val(new_quantity).trigger('blur'); 
						} 	
			}
			,	getContext: _.wrap(ProductDetailsBaseView.prototype.getContext, function getContext(fn) { 
				var context = fn.apply(this, _.toArray(arguments).slice(1)); 
				var it=this.model.getItem();
				var webstore_free_shipping=it.get('custitem_awa_freeshipping'); 
				var warrantyterms=it.get('custitem_wrm_item_warrantyterms'); 
				console.log('warrantyterms',warrantyterms);
				return _.extend(context, {
					webstore_free_shipping:webstore_free_shipping 
				,	warrantyterms:warrantyterms 
				});
			})
		});
		_.extend(ProductDetailsQuickViewView.prototype, {
           initialize: _.wrap(ProductDetailsQuickViewView.prototype.initialize, function initialize(fn) {
			   var self=this;
            fn.apply(this, _.toArray(arguments).slice(1));
			//this.on('afterViewRender', this.disablequantity1,this);
			this.on('afterViewRender', this.selectDefaultCondition1,this);
			this.model.on('afterViewRender', this.setQuantity1,this);
			this.model.on('click change', this.setQuantity1,this);
			this.model.on('click change', this.selectDefaultCondition1,this);
				})
				
			/* ,disablequantity1:function()
			{
				var self=this;
				var warrantyoption=self.$('.cart-warranty-added').text();
				console.log('warrantyoptionmodel',this.model);
			    self.$("input").attr('disabled','disabled');
				
			} */
			});
		_.extend(ProductDetailsFullView.prototype, {
			initialize: _.wrap(ProductDetailsFullView.prototype.initialize, function initialize(fn) {
				var self = this;
				fn.apply(this, _.toArray(arguments).slice(1));
				this.on('afterViewRender', this.selectDefaultCondition1,this);
				this.on('afterViewRender', this.setQuantity1,this);
				this.model.on('click change', this.setQuantity1,this);
				this.model.on('click change', this.selectDefaultCondition1,this);
			})
			
		});	
			 
		 _.extend(CartLinesView.prototype, { 

			getContext: _.wrap(CartLinesView.prototype.getContext, function getContext(fn) { 
				var context = fn.apply(this, _.toArray(arguments).slice(1));
				var quantity = this.model.get('quantity');
				var vendstock=this.model.get('item').get('custitem_vendor_stock');
				var showVendStockMsg=false;
				/*Vend Stock Notification*/
					if(quantity>250){ 
						showVendStockMsg=true;
					}else{
						if(quantity>vendstock){
							showVendStockMsg=true;
						}else{
							showVendStockMsg=false;
						}
					}
				/*Vend Stock Notification*/
				return _.extend(context, {
					showVendStockMsg: showVendStockMsg
				});
			})
		});
	   _.extend(ProductDetailsBaseView.prototype.events, {
			'click [data-action="updateQuantity"]': function setQuantity1(event) {
			}
		});   
		//ProductDetailsQuantityView.prototype.template=telquest_webstocknotification_webstocknotification_tpl;
	 }
	};
});
