
function service(request, response)
{
	'use strict';
	try 
	{
		require('TelQuest.SiteSession.SiteSession.ServiceController').handle(request, response);
	} 
	catch(ex)
	{
		console.log('TelQuest.SiteSession.SiteSession.ServiceController ', ex);
		var controller = require('ServiceController');
		controller.response = response;
		controller.request = request;
		controller.sendError(ex);
	}
}