
define(
	'TelQuest.WarrantyRegistration.WarrantyRegistration.ServiceController'
,	[
		'ServiceController'
	,	'Application'
	,	'TelQuest.WarrantyRegistration.WarrantyRegistration.Model'
	]
,	function(
		ServiceController
	,	Application
	,	WarrantyRegistrationModel
	)
	{
		'use strict';

		return ServiceController.extend({

			name: 'TelQuest.WarrantyRegistration.WarrantyRegistration.ServiceController'

			// The values in this object are the validation needed for the current service.
		,	options: {
				common: {
					requireLogin: true
				,	requirePermissions: {
						list: [
							'transactions.tranFind.1'
						]
					}
				}
			}

		,	get: function()
			{
				var id = this.request.getParameter('internalid');
				return id ? WarrantyRegistrationModel.get(id) : WarrantyRegistrationModel.list();
			}
		});
	}
);