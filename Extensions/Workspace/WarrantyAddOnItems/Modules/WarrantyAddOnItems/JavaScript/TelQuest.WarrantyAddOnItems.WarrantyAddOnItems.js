define(
	'TelQuest.WarrantyAddOnItems.WarrantyAddOnItems'
,   [
	'TelQuest.WarrantyAddOnItems.WarrantyAddOnItems.Configuration',
    'underscore',
    'SC.Configuration',
    'TelQuest.WarrantyAddOnItems.WarrantyAddOnItems.ProductList.Item.Model',
    'TelQuest.WarrantyAddOnItems.WarrantyAddOnItems.ProductDetailsToQuote.View',
    'TelQuest.WarrantyAddOnItems.WarrantyAddOnItems.RequestQuoteWizard.Module.Comments'
], function AddOnItems(
    AddOnItemsConfiguration,
    _,
    Configuration
) {
    'use strict';

    Configuration.ItemOptions.optionsConfiguration = Configuration.addAddOnOptions(Configuration.get('ItemOptions.optionsConfiguration', []));
});