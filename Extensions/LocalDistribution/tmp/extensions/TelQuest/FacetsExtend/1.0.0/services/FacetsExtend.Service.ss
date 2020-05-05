
function service(request, response)
{
	'use strict';
	try 
	{
		require('TelQuest.FacetsExtend.FacetsExtend.ServiceController').handle(request, response);
	} 
	catch(ex)
	{
		console.log('TelQuest.FacetsExtend.FacetsExtend.ServiceController ', ex);
		var controller = require('ServiceController');
		controller.response = response;
		controller.request = request;
		controller.sendError(ex);
	}
}