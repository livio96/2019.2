// @module Profile
// This file define the functions to be used on profile service
define('TelQuest.ExtendProfileinfo.ExtendProfileinfo.Model', 
	[
	'SC.Model',
    'Profile.Model',
	'SC.Models.Init',
	'PaymentMethod.Model', 
	'Utils'
	], 
function (
    SCModel,
	ProfileModel,
    ModelsInit,
    PaymentMethodModel,
    Utils
) {
  'use strict';
  /* _.extend(ProfileModel,{
	  get: function ()
		{
			var profile = {};

			//You can get the profile information only if you are logged in.
			if (ModelsInit.session.isLoggedIn2() && this.isSecure)
			{

				//Define the fields to be returned
				this.fields = this.fields || ['isperson', 'email', 'internalid', 'name', 'overduebalance', 'phoneinfo', 'companyname', 'firstname', 'lastname', 'middlename', 'emailsubscribe', 'campaignsubscriptions', 'paymentterms', 'creditlimit', 'balance', 'creditholdoverride'];

				profile = ModelsInit.customer.getFieldValues(this.fields);

				//Make some attributes more friendly to the response
				profile.phone = profile.phoneinfo.phone;
				profile.altphone = profile.phoneinfo.altphone;
				profile.fax = profile.phoneinfo.fax;
				profile.type = profile.isperson ? 'INDIVIDUAL' : 'COMPANY';
				
				profile.creditlimit = parseFloat(profile.creditlimit || 0);
				profile.creditlimit_formatted = Utils.formatCurrency(profile.creditlimit);

				profile.balance = parseFloat(profile.balance || 0);
				profile.balance_formatted = Utils.formatCurrency(profile.balance);

				profile.balance_available = profile.creditlimit - profile.balance;
				profile.balance_available_formatted = Utils.formatCurrency(profile.balance_available);
			}
			else
			{
				profile = ModelsInit.customer.getFieldValues(['addressbook', 'balance', 'campaignsubscriptions', 'companyname', 'creditcards', 'creditholdoverride', 'creditlimit', 'email', 'emailsubscribe', 'firstname', 'internalid', 'isperson', 'lastname', 'middlename', 'name', 'paymentterms', 'phoneinfo', 'vatregistration']);

				profile.isLoggedIn = ModelsInit.session.isLoggedIn2() ? 'T' : 'F';
				profile.isRecognized = ModelsInit.session.isRecognized() ? 'T' : 'F';
				profile.isGuest = ModelsInit.customer.isGuest() ? 'T' : 'F';
				profile.priceLevel = ModelsInit.session.getShopperPriceLevel().internalid ? ModelsInit.session.getShopperPriceLevel().internalid : ModelsInit.session.getSiteSettings('defaultpricelevel');


				profile.internalid = nlapiGetUser() + '';
			}

			profile.isGuest = ModelsInit.customer.isGuest() ? 'T' : 'F';
			profile.subsidiary = ModelsInit.session.getShopperSubsidiary();
			profile.language = ModelsInit.session.getShopperLanguageLocale();
			profile.currency = ModelsInit.session.getShopperCurrency();
			profile.priceLevel = ModelsInit.session.getShopperPriceLevel().internalid ? ModelsInit.session.getShopperPriceLevel().internalid : ModelsInit.session.getSiteSettings(['defaultpricelevel']).defaultpricelevel;
			profile.customfields = ModelsInit.customer.getCustomFields(); //get custom fields

			return profile;
		}

	,	update: function (data)
		{
			var login = nlapiGetLogin();

			if (data.current_password && data.password && data.password === data.confirm_password)
			{
				//Updating password
				return login.changePassword(data.current_password, data.password);
			}

			this.currentSettings = ModelsInit.customer.getFieldValues();

			//Define the customer to be updated

			var customerUpdate = {
				internalid: parseInt(nlapiGetUser(), 10)
			};

			//Assign the values to the customer to be updated

			customerUpdate.firstname = data.firstname;

			if(data.lastname !== '')
			{
				customerUpdate.lastname = data.lastname;
			}

			if(this.currentSettings.lastname === data.lastname)
			{
				delete this.validation.lastname;
			}

			customerUpdate.companyname = data.companyname;


			customerUpdate.phoneinfo = {
					altphone: data.altphone
				,	phone: data.phone
				,	fax: data.fax
			};

			if(data.phone !== '')
			{
				customerUpdate.phone = data.phone;
			}

			if(this.currentSettings.phone === data.phone)
			{
				delete this.validation.phone;
			}

			customerUpdate.emailsubscribe = (data.emailsubscribe && data.emailsubscribe !== 'F') ? 'T' : 'F';

			if (!(this.currentSettings.companyname === '' || this.currentSettings.isperson || ModelsInit.session.getSiteSettings(['registration']).registration.companyfieldmandatory !== 'T'))
			{
				this.validation.companyname = {required: true, msg: 'Company Name is required'};
			}

			if (!this.currentSettings.isperson)
			{
				delete this.validation.firstname;
				delete this.validation.lastname;
			}

			//Updating customer data
			if (data.email && data.email !== this.currentSettings.email && data.email === data.confirm_email && data.isGuest === 'T')
				{
					customerUpdate.email = data.email;
				}
			else if (data.new_email && data.new_email === data.confirm_email && data.new_email !== this.currentSettings.email)
				{
				ModelsInit.session.login({
					email: data.email
				,	password: data.current_password
				});
				login.changeEmail(data.current_password, data.new_email, true);
			}

			// Patch to make the updateProfile call work when the user is not updating the email
			data.confirm_email = data.email;
			var prefereddata;
			var numberofLocations;
			var numberofemployees;
			var altmail;
			if(data.custentity_preferred_equip)
			{
				prefereddata=data.custentity_preferred_equip;
			}
			else
			{
				prefereddata='';
			}
			if(data.custentity18)
			{
				numberofLocations=data.custentity18;
			}
			else
			{
				numberofLocations='';
			}
			if(data.custentitynumber_of_employees)
			{
				numberofemployees=data.custentitynumber_of_employees;
			}
			else
			{
				numberofemployees='';
			}
			if(data.custentityaltemail)
			{
				altmail=data.custentityaltemail;
			}
			else
			{
				altmail='';
			}
		
			var custprefered;
			var newchar = "";
			var catsts = Array.isArray(prefereddata);
		
			if(catsts == true)
			{
			prefereddata=prefereddata.join(newchar);	
		    }
			
			
			var custdata={
				          custentity_preferred_equip:prefereddata,
						  custentity18:numberofLocations,
						  custentitynumber_of_employees:numberofemployees,
						  custentityaltemail:altmail
					    };
			customerUpdate.customfields = custdata;

			this.validate(data);
			// check if this throws error
			ModelsInit.customer.updateProfile(customerUpdate);

			if (data.campaignsubscriptions)
			{
				ModelsInit.customer.updateCampaignSubscriptions(data.campaignsubscriptions);
			}

			return this.get();
		}
  }); */
});
