
function service(request, response)
{
	'use strict';
	try 
	{
		require('TelQuest.FakeMatrix.FakeMatrix.ServiceController').handle(request, response);
	} 
	catch(ex)
	{
		console.log('TelQuest.FakeMatrix.FakeMatrix.ServiceController ', ex);
		var controller = require('ServiceController');
		controller.response = response;
		controller.request = request;
		controller.sendError(ex);
	}
}