
function service(request, response)
{
	'use strict';
	try 
	{
		require('TelQuest.ExtendProfileinfo.ExtendProfileinfo.ServiceController').handle(request, response);
	} 
	catch(ex)
	{
		console.log('TelQuest.ExtendProfileinfo.ExtendProfileinfo.ServiceController ', ex);
		var controller = require('ServiceController');
		controller.response = response;
		controller.request = request;
		controller.sendError(ex);
	}
}