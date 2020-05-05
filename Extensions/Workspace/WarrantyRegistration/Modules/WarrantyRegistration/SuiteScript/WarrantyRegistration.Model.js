define(
	'TelQuest.WarrantyRegistration.WarrantyRegistration.Model'
,	[
		'SC.Model'
	,	'SC.Models.Init'
	,	'Backbone.Validation'
	,	'underscore'
	]
,	function(
		SCModel
	,	ModelsInit

	,	BackboneValidation
	,	_
	)
	{
		'use strict';

	return SCModel.extend({
		name: 'WarrantyRegistration'

	,	get: function (id)
		{
			var user = nlapiGetUser();
			nlapiLogExecution('Debug','user',user);
			return user;
		}
	, list: function()
		{
			var isloogedin=ModelsInit.session.isLoggedIn2();
			nlapiLogExecution('debug','isloogedin',isloogedin);
			if(isloogedin)
			{
			var warrantyObj = [];		
			var customrecord_wrm_warrantyregSearch = nlapiSearchRecord("customrecord_wrm_warrantyreg",null,
			[
				["custrecord_wrm_reg_customer",'is', nlapiGetUser()]
			], 
			[
				new nlobjSearchColumn("custrecord_wrm_reg_customer"), 
				new nlobjSearchColumn("custrecord_wrm_reg_item"), 
				new nlobjSearchColumn("custrecord_wrm_reg_quantity"), 
				new nlobjSearchColumn("custrecord_wrm_reg_serialnumber"), 
				new nlobjSearchColumn("custrecord_wrm_reg_warrantyterm"), 
				new nlobjSearchColumn("custrecord_wrm_reg_warrantyexpire"), 
				new nlobjSearchColumn("custrecord_wrm_reg_invoice"),
				new nlobjSearchColumn("id"),
				new nlobjSearchColumn("custrecord_wrm_reg_warrantybegin")
			]);		
            if(customrecord_wrm_warrantyregSearch && customrecord_wrm_warrantyregSearch.length >0)
			{				
				for(var i=0;i<customrecord_wrm_warrantyregSearch.length;i++){
					var customer 		=   customrecord_wrm_warrantyregSearch[i].getValue("custrecord_wrm_reg_customer");
					var item 			=   customrecord_wrm_warrantyregSearch[i].getText("custrecord_wrm_reg_item");
					var quantity 		=   customrecord_wrm_warrantyregSearch[i].getValue("custrecord_wrm_reg_quantity");
					var serialnumber	=   customrecord_wrm_warrantyregSearch[i].getValue("custrecord_wrm_reg_serialnumber");
					var warrantyterm 	=   customrecord_wrm_warrantyregSearch[i].getText("custrecord_wrm_reg_warrantyterm");
					var warrantyexpire  =   customrecord_wrm_warrantyregSearch[i].getValue("custrecord_wrm_reg_warrantyexpire");
					var warrantystart   =   customrecord_wrm_warrantyregSearch[i].getValue("custrecord_wrm_reg_warrantybegin");
					var invoice 		=   customrecord_wrm_warrantyregSearch[i].getText("custrecord_wrm_reg_invoice");
					var pdfSearch       =   customrecord_wrm_warrantyregSearch[i].getValue("id");
					var shoppingdomain  =   ModelsInit.session.getEffectiveShoppingDomain();
					nlapiLogExecution("Debug","shoppingdomain",shoppingdomain);
					nlapiLogExecution("Debug","warrantystart",warrantystart);

					warrantyObj.push({'customer':customer
					,	'item':item
					,	'quantity':quantity
					,	'serialnumber':serialnumber
					,	'warrantyterm':warrantyterm
					,	'warrantyexpire':warrantyexpire
					,	'invoice':invoice
					,   'pdfurl':pdfSearch	
					,   'shoppingurl':shoppingdomain	
					,	'warrantystart':warrantystart
					});
				}
				
			}
			return {resObj:warrantyObj};
		}
		}

	});
});
