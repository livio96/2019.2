// @module TelQuest.WarrantyRegistration.WarrantyRegistration
define('TelQuest.WarrantyRegistration.WarrantyRegistration.View'
,	[
		'telquest_warrantyregistration_warrantyregistration.tpl'
	,	'Utils'
	,	'Backbone'
	,	'jQuery'
	,	'underscore'
	]
,	function (
		telquest_warrantyregistration_warrantyregistration_tpl
	,	Utils
	,	Backbone
	,	jQuery
	,	_
	)
{
   'use strict';

   //@class Address.List.View List profile's addresses @extend Backbone.View
   return Backbone.View.extend({

      template: telquest_warrantyregistration_warrantyregistration_tpl
	  
	, initialize: function(options) {
		
		this.application = options.application;
		this.model=options.model;
    }
	,   getContext: function ()
    {
      var baseprotocol=SC.ENVIRONMENT.baseUrl;
      var protocol;
      if(baseprotocol.search('https') >-1)
      {
        protocol="https";
      }
      else
      {
        protocol="http";
      }
        return {
			  warrantyobj: this.model.get('resObj')
    ,   protocol:protocol
        };
    }
   });
});