
function service(request, response)
{
	'use strict';
	try 
	{
		require('TelQuest.MSRPPrice.MSRPPrice.ServiceController').handle(request, response);
	} 
	catch(ex)
	{
		console.log('TelQuest.MSRPPrice.MSRPPrice.ServiceController ', ex);
		var controller = require('ServiceController');
		controller.response = response;
		controller.request = request;
		controller.sendError(ex);
	}
}