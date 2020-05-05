
function service(request, response)
{
	'use strict';
	try 
	{
		require('TelQuest.SiteHome.SiteHome.ServiceController').handle(request, response);
	} 
	catch(ex)
	{
		console.log('TelQuest.SiteHome.SiteHome.ServiceController ', ex);
		var controller = require('ServiceController');
		controller.response = response;
		controller.request = request;
		controller.sendError(ex);
	}
}