
define(
	'TelQuest.ProductBadges.ProductBadges'
,   [
		'TelQuest.ProductBadges.ProductBadges.View'
	,	'ItemRelations.RelatedItem.View'
    ,   'ProductDetails.Full.View'
    ,   'Facets.ItemCell.View'
    ,   'SC.Configuration'
	]
,   function (
		ProductBadgesView,
		ItemRelationsRelatedItemView,
		ProductDetailsFullView,
		FacetsItemCellView,
		Configuration
	)
{
	'use strict';

	return  {
		ProductBadgesView: ProductBadgesView,
		mountToApp: function mountToApp (container)
		{
			if (Configuration.get('productBadges.badgesEnable')) {
                ItemRelationsRelatedItemView.addChildViews({
                    'ProductBadges': function wrapperFunction() {
                        return new ProductBadgesView({
                            model: this.model
                        });
                    }
                });
                FacetsItemCellView.addChildViews({
                    'ProductBadges': function wrapperFunction() {
                        return new ProductBadgesView({
                            model: this.model
                        });
                    }
                });
                ProductDetailsFullView.addChildViews({
                    'ProductBadges': function wrapperFunction() {
                        return new ProductBadgesView({
                            model: this.model.get('item')
                        });
                    }
                });
            }
		}
	};
});
