
function service(request, response)
{
	'use strict';
	try 
	{
		require('TelQuest.Pacejet.TelQuest.Pacejet.Pacejet.ServiceController').handle(request, response);
	} 
	catch(ex)
	{
		console.log('TelQuest.Pacejet.TelQuest.Pacejet.Pacejet.ServiceController ', ex);
		var controller = require('ServiceController');
		controller.response = response;
		controller.request = request;
		controller.sendError(ex);
	}
}