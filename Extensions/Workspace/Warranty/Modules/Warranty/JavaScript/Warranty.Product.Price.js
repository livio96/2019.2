define('TelQuest.Warranty.Warranty.Product.Price', [
    'SC.Configuration',
    'Product.Model',
	'Transaction.Line.Model',
    'bignumber',
    'underscore',
    'Utils'
], function WarrantyProductModel(
    Configuration,
    ProductModel,
	TransactionLineModel,
    BigNumber,
    _,
    Utils
) {
    'use strict';

    _.extend(ProductModel.prototype, {
        getPrice: _.wrap(ProductModel.prototype.getPrice, function getPrice(fn) {
            var self = this;
            var currentChildPrice;
            var currentCompareChildPrice;
            var currentChildWarranty;
            var overridePrice = false;
            var isMatrix = false;
            var newPrice = {};
            var priceToAdd = new BigNumber(0);
            var args = _.toArray(arguments).slice(1);
            var getPriceResult = fn.apply(self, args);
			console.log('getPriceResult',getPriceResult);
            var warrantyItemOption = self.getOption(Configuration.get('warranty.itemOption'));
            var warrantyOption = warrantyItemOption && warrantyItemOption.get('value');
            var comparePriceFinal;
            var priceFinal;
            var childPriceCompare;
            var childPriceFinal;
            var minPriceCompare;
            var minPriceFinal;
            var maxPriceCompare;
            var maxPriceFinal;
            if (warrantyOption) {
                isMatrix = self.getSelectedMatrixChilds().length > 0;
                overridePrice = true;
                priceToAdd = priceToAdd.plus(self.get('item').get('custitem_awa_warranty_' + warrantyOption.internalid) || 0);
                newPrice = getPriceResult;
                comparePriceFinal = priceToAdd.plus(getPriceResult.compare_price || 0);
				console.log('comparePriceFinal',comparePriceFinal);
                priceFinal = priceToAdd.plus(getPriceResult.price || 0);
				console.log('priceFinal',priceFinal);
                newPrice = {
                    compare_price: comparePriceFinal.toNumber(),
                    compare_price_formatted: Utils.formatCurrency(comparePriceFinal.toNumber()),
                    price: priceFinal.toNumber(),
                    price_formatted: Utils.formatCurrency(priceFinal.toNumber())
                };
                if (isMatrix) {
                    _.each(self.getSelectedMatrixChilds(), function examineMinMax(currentChild) {
						console.log('currentChild',currentChild);
                        currentChildPrice = currentChild.get('onlinecustomerprice');
						console.log('currentChildPrice',currentChildPrice);
                        currentCompareChildPrice = currentChild.get('_comparePriceAgainst');
						console.log('currentCompareChildPrice',currentCompareChildPrice);
                        currentChildWarranty = new BigNumber(currentChild.get('custitem_awa_warranty_' + warrantyOption.internalid) || 0);
						console.log('currentChildWarranty',currentChildWarranty);
						console.log('self.getSelectedMatrixChilds().length',self.getSelectedMatrixChilds().length);
                        if (self.getSelectedMatrixChilds().length === 1) {
                            // if we have only one selected child, then use its price and avoid min and max
                            childPriceCompare = currentChildWarranty.plus(getPriceResult.compare_price || 0);
							console.log('childPriceCompare',childPriceCompare);
                            childPriceFinal = currentChildWarranty.plus(getPriceResult.price || 0);
							console.log('childPriceFinal',childPriceFinal);
                            newPrice = {
                                compare_price: childPriceCompare.toNumber(),
                                compare_price_formatted: Utils.formatCurrency(childPriceCompare.toNumber()),
                                price: childPriceFinal.toNumber(),
                                price_formatted: Utils.formatCurrency(childPriceFinal.toNumber()),
                                rateFormatted: Utils.formatCurrency(childPriceFinal.toNumber()),
                                rate: childPriceFinal.toNumber()
                            };
                       }
						 else {
                            // use min and max
                            if (!newPrice.min || (currentChildPrice + currentChildWarranty) < newPrice.min.price) {
                                // then use currenchidlprice
                                minPriceCompare = currentChildWarranty.plus(currentCompareChildPrice || 0);
								console.log('minPriceCompare',minPriceCompare);
                                minPriceFinal = currentChildWarranty.plus(currentChildPrice || 0);
								console.log('minPriceFinal',minPriceFinal);
                                newPrice.min = {
                                    compare_price: minPriceCompare.toNumber(),
                                    compare_price_formatted: Utils.formatCurrency(minPriceCompare.toNumber()),
                                    price: minPriceCompare.toNumber(),
                                    price_formatted: Utils.formatCurrency(minPriceCompare.toNumber())
                                };
                            }
                            if (!newPrice.max || (currentChildPrice + currentChildWarranty) > newPrice.max.price) {
                                // then use currenchidlprice
                                maxPriceCompare = currentChildWarranty.plus(currentCompareChildPrice || 0);
                                maxPriceFinal = currentChildWarranty.plus(currentChildPrice || 0);
                                newPrice.max = {
                                    compare_price: minPriceCompare.toNumber(),
                                    compare_price_formatted: Utils.formatCurrency(minPriceCompare.toNumber()),
                                    price: minPriceCompare.toNumber(),
                                    price_formatted: Utils.formatCurrency(minPriceCompare.toNumber())
                                };
                            }
                        } 
                    });
                    if (newPrice.min && newPrice.max && newPrice.min.price === newPrice.max.price) {
                        // delete if unnecesary min or max have been created
                        delete newPrice.min;
                        delete newPrice.max;
                    }
                } else {
					/*console.log('else price',getPriceResult);
					 newPrice={
						    compare_price: getPriceResult.min.compare_price + priceToAdd,
                            compare_price_formatted: Utils.formatCurrency(getPriceResult.min.compare_price + priceToAdd),
                            price: getPriceResult.min.price + priceToAdd,
                            price_formatted: Utils.formatCurrency(getPriceResult.min.price + priceToAdd)
					}; */
                     if (getPriceResult.min) {
                        newPrice.min = {
                            compare_price: getPriceResult.min.compare_price + priceToAdd,
                            compare_price_formatted: Utils.formatCurrency(getPriceResult.min.compare_price + priceToAdd),
                            price: getPriceResult.min.price + priceToAdd,
                            price_formatted: Utils.formatCurrency(getPriceResult.min.price + priceToAdd)
                        };
                    }
                    if (getPriceResult.max) {
                        newPrice.max = {
                            compare_price: getPriceResult.max.compare_price + priceToAdd,
                            compare_price_formatted: Utils.formatCurrency(getPriceResult.max.compare_price + priceToAdd),
                            price: getPriceResult.max.price + priceToAdd,
                            price_formatted: Utils.formatCurrency(getPriceResult.max.price + priceToAdd)
                        };
                    } 
                } 
            }
			console.log('newPrice',newPrice);
            return overridePrice ? newPrice : getPriceResult;
        })
    });
	//transaction line price
	

});
