
function service(request, response)
{
	'use strict';
	try 
	{
		require('TelQuest.Warranty.Warranty.LiveOrder.ServiceController').handle(request, response);
	} 
	catch(ex)
	{
		console.log('TelQuest.Warranty.Warranty.LiveOrder.ServiceController ', ex);
		var controller = require('ServiceController');
		controller.response = response;
		controller.request = request;
		controller.sendError(ex);
	}
}