
define(
	'TelQuest.ExtendOrderHistory.ExtendOrderHistory.Model'
,	[
		 'OrderHistory.Model'
	,	'Application'
	,	'Utils'
	,	'SC.Model'
	,	'Models.Init'
	,	'underscore'
	]
,	function(
	    OrderHistoryModel
	, 	Application
	,	Utils
	,	SCModel
	,	ModelsInit
	,	_
	)
	{
	'use strict';
  _.extend(OrderHistoryModel,{
	 _addTransactionColumnFieldsToOptions: function (line)
	{
		var self = this;
		var lineFieldsId = self.record.getAllLineItemFields('item');	
		_.each(lineFieldsId, function(field){					
			if(field.indexOf('custcol') === 0)
			{				
				var lineId = line.index;					
				var fieldValue = self.record.getLineItemValue('item', field, lineId);
				if(fieldValue !== null)
				{
					var fieldInf = self.record.getLineItemField('item', field, lineId);
					if(fieldInf)
					{
					line.options.push(
						self.transactionModelGetLineOptionBuilder(
							field
						,	fieldInf.label
						,	self.transactionModelGetLineOptionValueBuilder(undefined, fieldValue)
						,	fieldInf.mandatory
						)
					);
				}
				}
			}		
		});
	}
	});
	}
);