
function service(request, response)
{
	'use strict';
	try 
	{
		require('TelQuest.ExtendOrderHistory.ExtendOrderHistory.ServiceController').handle(request, response);
	} 
	catch(ex)
	{
		console.log('TelQuest.ExtendOrderHistory.ExtendOrderHistory.ServiceController ', ex);
		var controller = require('ServiceController');
		controller.response = response;
		controller.request = request;
		controller.sendError(ex);
	}
}