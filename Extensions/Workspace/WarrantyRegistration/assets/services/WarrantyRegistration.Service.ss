
function service(request, response)
{
	'use strict';
	try 
	{
		require('TelQuest.WarrantyRegistration.WarrantyRegistration.ServiceController').handle(request, response);
	} 
	catch(ex)
	{
		console.log('TelQuest.WarrantyRegistration.WarrantyRegistration.ServiceController ', ex);
		var controller = require('ServiceController');
		controller.response = response;
		controller.request = request;
		controller.sendError(ex);
	}
}