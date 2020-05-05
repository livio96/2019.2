
function service(request, response)
{
	'use strict';
	try 
	{
		require('TelQuest.DynamicMerchandisingZone.DynamicMerchandisingZone.ServiceController').handle(request, response);
	} 
	catch(ex)
	{
		console.log('TelQuest.DynamicMerchandisingZone.DynamicMerchandisingZone.ServiceController ', ex);
		var controller = require('ServiceController');
		controller.response = response;
		controller.request = request;
		controller.sendError(ex);
	}
}