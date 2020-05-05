// @module TelQuest.WarrantyRegistration.WarrantyRegistration
define('TelQuest.WarrantyRegistration.WarrantyRegistration.Model'
,	[
	    'underscore'
	,	'Backbone'
	,	'Utils'
	]
,	function (
		_
	,	Backbone
	)
{
  'use strict';

	// @class Address.Model @extend Backbone.Model
	return Backbone.Model.extend(
	{
		// @property {String} urlRoot
		urlRoot: _.getAbsoluteUrl(getExtensionAssetsPath('services/WarrantyRegistration.Service.ss'))
		
	});
});