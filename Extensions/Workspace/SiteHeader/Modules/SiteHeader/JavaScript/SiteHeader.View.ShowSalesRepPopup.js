define('TelQuest.SiteHeader.SiteHeader.View.ShowSalesRepPopup',
    [
        'Header.View',
        'TelQuest.SiteHeader.SalesPopup.View',
        'Profile.Model',
        'Backbone',
        'underscore',
        'jQuery',
    ],
    function HeaderViewShowSalesRepPopup(
        HeaderView,
        SalesPopupView,
        ProfileModel,
        Backbone,
        _,
        jQuery
    ) {
        'use strict';

        _.extend(HeaderView.prototype, {

            events: _.extend(HeaderView.prototype.events, {
                'click [data-action="show-salesrep-popup"]': 'showSalesrepPopup'
            }),

            initialize: _.wrap(HeaderView.prototype.initialize, function (fn, options) {
                var ret = fn.apply(this, _.toArray(arguments).slice(1));
                return ret;
            }),

            showSalesrepPopup: function (e) {
                e.preventDefault();
                e.stopPropagation();
                var popUpView = new SalesPopupView();
                this.options.application.getLayout().showInModal(popUpView);
            },

            getContext: _.wrap(HeaderView.prototype.getContext, function (fn) {
                var context = fn.apply(this, _.toArray(arguments).slice(1));
                var profile = ProfileModel.getInstance();
                var isLoggedIn = profile.get('isLoggedIn') === 'T';
				console.log('isLoggedIn',isLoggedIn);
                var salesRep = profile.get('salesrep');
				console.log('salesRep',salesRep);
				console.log('salesRep111',ProfileModel.getInstance());

                return _.extend(context, {
                    //isLoggedIn: isLoggedIn && salesRep && salesRep.name
                    isLoggedIn: isLoggedIn
                });
            })
        });
    });