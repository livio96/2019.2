
function service(request, response)
{
	'use strict';
	try 
	{
		require('TelQuest.ExtendLoginRegister.ExtendLoginRegister.ServiceController').handle(request, response);
	} 
	catch(ex)
	{
		console.log('TelQuest.ExtendLoginRegister.ExtendLoginRegister.ServiceController ', ex);
		var controller = require('ServiceController');
		controller.response = response;
		controller.request = request;
		controller.sendError(ex);
	}
}