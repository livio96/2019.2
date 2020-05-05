
function service(request, response)
{
	'use strict';
	try 
	{
		require('TelQuest.WebPrice.WebPrice.ServiceController').handle(request, response);
	} 
	catch(ex)
	{
		console.log('TelQuest.WebPrice.WebPrice.ServiceController ', ex);
		var controller = require('ServiceController');
		controller.response = response;
		controller.request = request;
		controller.sendError(ex);
	}
}