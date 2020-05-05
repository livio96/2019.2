
function service(request, response)
{
	'use strict';
	try 
	{
		require('TelQuest.ProductBadges.ProductBadges.ServiceController').handle(request, response);
	} 
	catch(ex)
	{
		console.log('TelQuest.ProductBadges.ProductBadges.ServiceController ', ex);
		var controller = require('ServiceController');
		controller.response = response;
		controller.request = request;
		controller.sendError(ex);
	}
}