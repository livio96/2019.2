define('TelQuest.FakeMatrix.FakeMatrix.ProductDetails.Router', [
    'ProductDetails.Base.View',
    'Product.Model',
    'ProductDetails.Full.View',
    'ProductDetails.QuickView.View',

    'Backbone',
    'AjaxRequestsKiller',
    'Utils',
    'underscore'
], function (
    ProductDetailsBaseView,
    ProductModel,
    ProductDetailsFullView,
    ProductDetailsQuickView,

    Backbone,
    AjaxRequestsKiller,
    Utils,
    _
) {
    _.extend(ProductDetailsBaseView.prototype, {
			getView: function()
		{
			if (this.application.getLayout().isShowContentRewritten)
			{
				return ProductDetailsQuickView;
			}
			return ProductDetailsFullView;
		},
        productDetails: function(apiQuery, options) {
			var self=this;
			console.log('baseurl', self.base_url)
            var application = this.application;
            var product = this.model;
			var promise = jQuery.Deferred();
           // var ViewConstructor = self.getView();
            var item = product.get('item');
			console.log('item',item);
           // var view;
          item.fetch({
                data: apiQuery,
                killerId: AjaxRequestsKiller.getKillerId(),
				async:true
            }).then(
                // Success function
                function(data, result, jqXhr) {
					//self.render();
					  //promise.resolve(false);
                    if (!item.get('custitem_display_sca')) {
						//promise.resolve(true);
                        //return application.getLayout().notFound();
                        return promise.reject();
                    }
                    if (item.get('_isChild')) {
                        Backbone.history.navigate(item.get('_getParentUrl'), { trigger: true, replace: true });
                    } else if (!item.isNew()) {
                        // once the item is fully loaded we set its options
                        product.setOptionsFromURL(options);

                        product.set('source', options && options.source);

                        product.set('internalid', options && options.internalid);

                        if (apiQuery.id && item.get('urlcomponent') && SC.ENVIRONMENT.jsEnvironment === 'server') {
                            nsglobal.statusCode = 301;
                            nsglobal.location = product.generateURL();
                        }

                        if (data.corrections && data.corrections.length > 0) {
                            if (item.get('urlcomponent') && SC.ENVIRONMENT.jsEnvironment === 'server') {
                                nsglobal.statusCode = 301;
                                nsglobal.location = data.corrections[0].url + product.getQuery();
                            } else {
                                return Backbone.history.navigate('#' + data.corrections[0].url + product.getQuery(), { trigger: true });
								 promise.reject();
                            }
                        }
						self.bindModel();
                        promise.resolve();
                         /* var view = new ViewConstructor({
                            model: product,
                            baseUrl: self.base_url,
                            application: application
                        });
                        // then we show the content
                        view.showContent();  */
						self.selectDefaultCondition();
                    } else if (jqXhr.status >= 500) {
                        //application.getLayout().internalError();
						 promise.reject();
                    } else if (jqXhr.responseJSON.errorCode !== 'ERR_USER_SESSION_TIMED_OUT') {
                        // We just show the 404 page
                        //application.getLayout().notFound();
					   promise.reject();
                    }

                    //return true;
                }, function(jqXhr) {
                    // Error function
                    // this will stop the ErrorManagment module to process this error
                    // as we are taking care of it
                    try {
                        jqXhr.preventDefault = true;
                    } catch (e) {
                        console.log(e.message);
                    }

                    if (jqXhr.status >= 500) {
                        //application.getLayout().internalError();
						promise.reject();
                    } else if (jqXhr.responseJSON.errorCode !== 'ERR_USER_SESSION_TIMED_OUT') {
                        // We just show the 404 page
                      //application.getLayout().notFound();
					     promise.reject();
                    }
                }
            );
			return promise;
        }
    });
});
