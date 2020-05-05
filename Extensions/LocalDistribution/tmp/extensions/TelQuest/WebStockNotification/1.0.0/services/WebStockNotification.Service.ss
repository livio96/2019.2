
function service(request, response)
{
	'use strict';
	try 
	{
		require('TelQuest.WebStockNotification.WebStockNotification.ServiceController').handle(request, response);
	} 
	catch(ex)
	{
		console.log('TelQuest.WebStockNotification.WebStockNotification.ServiceController ', ex);
		var controller = require('ServiceController');
		controller.response = response;
		controller.request = request;
		controller.sendError(ex);
	}
}