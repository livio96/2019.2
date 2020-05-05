
function service(request, response)
{
	'use strict';
	try 
	{
		require('TelQuest.SiteCart.SiteCart.ServiceController').handle(request, response);
	} 
	catch(ex)
	{
		console.log('TelQuest.SiteCart.SiteCart.ServiceController ', ex);
		var controller = require('ServiceController');
		controller.response = response;
		controller.request = request;
		controller.sendError(ex);
	}
}