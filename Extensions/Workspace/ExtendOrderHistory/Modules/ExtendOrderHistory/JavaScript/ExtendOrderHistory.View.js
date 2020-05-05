// @module TelQuest.ExtendOrderHistory.ExtendOrderHistory
define('TelQuest.ExtendOrderHistory.ExtendOrderHistory.View'
,	[
		'telquest_extendorderhistory_extendorderhistory.tpl'
	,	'Utils'
	,	'Backbone'
	,	'jQuery'
	,	'underscore'
	]
,	function (
		telquest_extendorderhistory_extendorderhistory_tpl
	,	Utils
	,	Backbone
	,	jQuery
	,	_
	)
{
	'use strict';

	// @class TelQuest.ExtendOrderHistory.ExtendOrderHistory.View @extends Backbone.View
	return Backbone.View.extend({

		template: telquest_extendorderhistory_extendorderhistory_tpl

	,	initialize: function (options) {

		}

	,	events: {
		}

	,	bindings: {
		}

	, 	childViews: {
			
		}

		//@method getContext @return TelQuest.ExtendOrderHistory.ExtendOrderHistory.View.Context
	,	getContext: function getContext()
		{
			//@class TelQuest.ExtendOrderHistory.ExtendOrderHistory.View.Context
			return {
			};
		}
	});
});