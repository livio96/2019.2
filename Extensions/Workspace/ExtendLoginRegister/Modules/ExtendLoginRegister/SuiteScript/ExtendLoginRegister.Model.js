/*
	© 2019 NetSuite Inc.
	User may not copy, modify, distribute, or re-bundle or otherwise make available this code;
	provided, however, if you are an authorized user with a NetSuite account or log-in, you
	may use this code subject to the terms that govern your access and use.
*/

// @module Account
// ----------
// Handles account creation, login, logout and password reset
// module Account
define('TelQuest.ExtendLoginRegister.ExtendLoginRegister.Model', [
    'SC.Model',
	'Account.Model',
    'Application',
    'SC.Models.Init',
    'Profile.Model',
    'LiveOrder.Model',
    'Address.Model',
    'CreditCard.Model',
    'SiteSettings.Model',
    'underscore'
], function(
    SCModel,
	AccountModel,
    Application,
    ModelsInit,
    Profile,
    LiveOrder,
    Address,
    CreditCard,
    SiteSettings,
    _
) {
    // @class Account.Model Defines the model used by the all Account related services.
    // @extends SCModel
    _.extend(AccountModel,{
		register: function (user_data)
		{
			//var customer = ModelsInit.getCustomer();

			if (ModelsInit.customer.isGuest())
			{
				var guest_data = ModelsInit.customer.getFieldValues();

				ModelsInit.customer.setLoginCredentials({
					internalid: guest_data.internalid
				,	email: user_data.email
				,	password: user_data.password
				});

				ModelsInit.session.login({
					email: user_data.email
				,	password: user_data.password
				});

				ModelsInit.customer.updateProfile({
					internalid: guest_data.internalid
				,	firstname: user_data.firstname
				,	lastname: user_data.lastname
				,	companyname: user_data.company
				,	emailsubscribe: (user_data.emailsubscribe && user_data.emailsubscribe !== 'F') ? 'T' : 'F'
				});
			}
			else
			{
				user_data.emailsubscribe = (user_data.emailsubscribe && user_data.emailsubscribe !== 'F') ? 'T' : 'F';

				ModelsInit.session.registerCustomer({
					firstname: 'Guest' //user_data.firstname
				,	lastname: 'Shopper' //user_data.lastname
				,	companyname: user_data.company
				,	email:user_data.email
				,	password:user_data.password
				,	password2:user_data.password2
				,	emailsubscribe: (user_data.emailsubscribe && user_data.emailsubscribe !== 'F') ? 'T' : 'F'
				});
			}
			/*
			var cust_prefer=user_data.custentity_preferred_equip;
			var newchar = "";
			var catsts = Array.isArray(cust_prefer);
			if(catsts == true)
			{
			cust_prefer=cust_prefer.join(newchar);	
		    }
			var customerUpdate={};
			var custdata={custentity_preferred_equip:cust_prefer};
			customerUpdate.customfields = custdata;
			customer.updateProfile(customerUpdate); 
			*/
			var user = Profile.get();
			customer.updateProfile({
			    internalid: user.internalid
			,	phoneinfo:{"phone":user_data.phone, "fax" : null, "altphone" : null}
			});
			user.isLoggedIn = ModelsInit.session.isLoggedIn2() ? 'T' : 'F';
			user.isRecognized = ModelsInit.session.isRecognized() ? 'T' : 'F';

			return {
				touchpoints: ModelsInit.session.getSiteSettings(['touchpoints']).touchpoints
			,	user: user
			,	cart: LiveOrder.get()
			,	address: Address.list()
			,	creditcard: CreditCard.list()
			};
		}
	});
});

// @class UserData
// @property {String} email
// @property {String} password
// @property {String} password2
// @property {String} firstname
// @property {String} lastname
// @property {String} company
// @property {String} emailsubscribe T or F
