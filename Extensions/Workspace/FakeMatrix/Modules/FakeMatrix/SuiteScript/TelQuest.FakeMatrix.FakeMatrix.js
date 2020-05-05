// TelQuest.FakeMatrix.FakeMatrix.js
// Load all your starter dependencies in backend for your extension here
// ----------------

define('TelQuest.FakeMatrix.FakeMatrix'
,	[
		//'TelQuest.FakeMatrix.FakeMatrix.ServiceController',
		'Configuration',
		'TelQuest.FakeMatrix.FakeMatrix.CustomList.Values.Model',
		'TelQuest.FakeMatrix.FakeMatrix.StoreItem.Model',
		'TelQuest.FakeMatrix.FakeMatrix.ProductList.Item.Search',
		'TelQuest.FakeMatrix.FakeMatrix.LiveOrder.Model',
		'TelQuest.FakeMatrix.FakeMatrix.Quote.Model'
	]
,	function (
		//FakeMatrixServiceController,
		Configuration,
		FakeMatrixCustomListValues,
		FakeMatrixStoreItemModel,
		FakeMatrixProductListItemSearch,
		FakeMatrixLiveOrderModel,
		FakeMatrixQuoteModel
	)
{
	'use strict';
	Configuration.get().publish = Configuration.get().publish || [];
    Configuration.get().publish.push({
        key: 'FakeMatrixCustomLists',
        model: 'TelQuest.FakeMatrix.FakeMatrix.CustomList.Values.Model',
        call: 'getCustomLists'
    });
});