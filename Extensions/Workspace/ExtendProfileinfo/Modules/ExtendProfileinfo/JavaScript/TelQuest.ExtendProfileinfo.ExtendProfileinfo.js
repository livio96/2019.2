
define(
	'TelQuest.ExtendProfileinfo.ExtendProfileinfo'
,   [
	  'Profile.Information.View'
	, 'telquest_extendprofileinfo_extendprofileinfo.tpl'
	,  'SC.Configuration'
	,	'GlobalViews.Message.View'
	,	'Backbone.FormView'

	,	'Profile.ChangeEmailAddress.Model'
	,	'Profile.ChangeEmailAddress.View'

	,	'profile_information.tpl'

	,	'Backbone'
	,	'underscore'
	,	'jQuery'
	,	'Utils'
	]
,   function (
		ProfileInformationView
	,	telquest_extendprofileinfo_extendprofileinfo_tpl
	,   Configuration
	,	GlobalViewsMessageView
	,	BackboneFormView

	,	ProfileChangeEmailModel
	,	ProfileChangeEmailView

	,	profile_information_tpl

	,	Backbone
	,	_
	,	jQuery
	)
{
	'use strict';

	return  {
		mountToApp: function mountToApp (container)
		{
			ProfileInformationView.prototype.template=telquest_extendprofileinfo_extendprofileinfo_tpl;
		 _.extend(ProfileInformationView.prototype, {
            initialize: _.wrap(ProfileInformationView.prototype.initialize, function (fn) {
				fn.apply(this, _.toArray(arguments).slice(1));
				var self=this;
				this.on('afterViewRender',this.profiledata,this);
			})
		, profiledata:function()
		{
			
			var self=this;
			var prefereddata=_.find(this.model.get('customfields'),{name:'custentity_preferred_equip'});
			var set_val = prefereddata.value.split("");
			this.$('#custentity_preferred_equip').val(set_val);
			var numberofLocations=_.find(this.model.get('customfields'),{name:'custentity18'});
			this.$('#custentity18').val(numberofLocations.value);
			var numberofemployees=_.find(this.model.get('customfields'),{name:'custentitynumber_of_employees'});
			this.$('#custentitynumber_of_employees').val(numberofemployees.value);
			var altmail=_.find(this.model.get('customfields'),{name:'custentityaltemail'});
			this.$('#custentityaltemail').val(altmail.value);
			
		}
		, getContext: _.wrap(ProfileInformationView.prototype.getContext, function (fn) {
			var self=this;
            var retVal = fn.apply(this, _.toArray(arguments).slice(1));
                _.extend(retVal, {
                     //Custom fields data 
			    cust_preferred:_.find(this.model.get('customfields'),{name:'custentity_preferred_equip'})
			,   cust_locations:_.find(this.model.get('customfields'),{name:'custentity18'})
			,   cust_employees:_.find(this.model.get('customfields'),{name:'custentitynumber_of_employees'})
			,   cust_altemail: _.find(this.model.get('customfields'),{name:'custentityaltemail'})
                });
			return retVal;
		})
		});
		}
	};
});
