// @module TelQuest.ProductBadges.ProductBadges
define('TelQuest.ProductBadges.ProductBadges.View'
,	[
		'telquest_productbadges_productbadges.tpl'
	,	'Utils'
	,	'Backbone'
	,	'jQuery'
	,	'underscore'
	,   'SC.Configuration'
	]
,	function (
		productBadgesTpl
	,	Utils
	,	Backbone
	,	jQuery
	,	_
	,   Configuration
	)
{
    'use strict';

    return Backbone.View.extend({
        template: productBadgesTpl,
        initialize: function initalize(options) {
            this.model = options.model;
        },
        getBadges: function getBadges() {
            var badges = [];
            var badgeConfig = Configuration.get('productBadges.badgesConfiguration');
			console.log('badgeConfig',badgeConfig);
			console.log('badgeConfigmodel',this.model);
            var appliedBadges = this.model.get('custitem_applied_badges') || '';
			console.log('appliedBadges',appliedBadges);
            appliedBadges = appliedBadges.split(', ');
            if (appliedBadges) {
                _.each(appliedBadges, function eachBadge(currentBadge) {
                    var productBadge = _.find(badgeConfig, { badge: currentBadge, active: true });
                    if (productBadge) {
                        badges.push(productBadge);
                    }
                });
            }
			console.log('badges',badges);
            return badges;
        },
        getContext: function getContext() {
            return {
                badges: this.getBadges()
            };
        }
    });
});
