
define(
	'TelQuest.WarrantyRegistration.WarrantyRegistration'
,   [
		'TelQuest.WarrantyRegistration.WarrantyRegistration.Router'
	]
,   function (
		Router
	)
{
	'use strict';

	return  {
		mountToApp: function mountToApp (container)
		{
			// using the 'Layout' component we add a new child view inside the 'Header' existing view 
			// (there will be a DOM element with the HTML attribute data-view="Header.Logo")
			// more documentation of the Extensibility API in
			// https://system.netsuite.com/help/helpcenter/en_US/APIs/SuiteCommerce/Extensibility/Frontend/index.html
			
			/** @type {LayoutComponent} */
			var myaccountmenu  = container.getComponent('MyAccountMenu');
			
			if(myaccountmenu )
			{
				var WarrantyModule = {
			     id: "warranty",
			     name: "Warranty",
			     index: 0,
			     url: 'warranty'
			}

			myaccountmenu.addGroup(WarrantyModule);
			}
				return new Router(container);

		}
	};
});
