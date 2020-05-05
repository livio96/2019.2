// @module TelQuest.WarrantyRegistration.WarrantyRegistration
define('TelQuest.WarrantyRegistration.WarrantyRegistration.Router'
,	[
	    'TelQuest.WarrantyRegistration.WarrantyRegistration.View'
	 ,  'TelQuest.WarrantyRegistration.WarrantyRegistration.Model'
	,	'Utils'
	,	'Backbone'
	,	'jQuery'
	,	'underscore'
	]
,	function (
		WarrantyView
	,	WarrantyModel
	,	Utils
	,	Backbone
	,	jQuery
	,	_
	)
{
   'use strict';

   //@class Address.Router @extend Backbone.Router
   return Backbone.Router.extend({

      routes: {
         'warranty': 'WarrantyRouter'
      }

   ,   initialize: function (application)
      {
         this.application = application;
      }

      // list myNewRouter output
    ,   WarrantyRouter: function (id)
		{
		var model=new WarrantyModel();
		var promise = jQuery.Deferred();	   
		var self=this;
			model.fetch({				
			}).done(function () 
			{
			  var view = new WarrantyView({
					application: self.application,
					model:model
				})
				view.showContent();
			});

        }
   });
});