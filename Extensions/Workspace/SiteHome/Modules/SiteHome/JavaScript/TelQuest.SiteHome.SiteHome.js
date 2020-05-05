
define(
	'TelQuest.SiteHome.SiteHome'
,   [
	  'TelQuest.SiteHome.SiteHome.View'
	, 'Home.View'
    , 'SC.Configuration'
    , 'Utils'
    , 'underscore'
    , 'jQuery'
	]
,   function (
	   SiteHomeView
	 , HomeView
     , Configuration
     , Utils
     , _
	)
{
	'use strict';

	return  {
		mountToApp: function mountToApp (container)
		{
			_.extend(HomeView.prototype, {
           /* initialize: function () {
                var self = this;
                this.windowWidth = jQuery(window).width();
                this.on('afterViewRender', function () {
                    _.initBxSlider(self.$('[data-slider]'), {
                        adaptiveHeight: true,
                        auto: true,
                        pause:6000,
                        nextText: '<a class="home-gallery-next-icon"></a>',
                        prevText: '<a class="home-gallery-prev-icon"></a>'
                    });
                });
                var windowResizeHandler = _.throttle(function () {
                    if (_.getDeviceType(this.windowWidth) === _.getDeviceType(jQuery(window).width())) {
                        return;
                    }
                    this.showContent();
                    _.resetViewportWidth();
                    this.windowWidth = jQuery(window).width();
                }, 1000);
                this._windowResizeHandler = _.bind(windowResizeHandler, this);
                jQuery(window).on('resize', this._windowResizeHandler);
            },*/
            getPageDescription: function getPageDescription() {
                return Utils.translate(Configuration.get('athqHome.description'));
            },

            getMetaDescription: function ()            {
                return this.getPageDescription()
            },

            getTitle: function getTitle() {
                return Utils.translate(Configuration.get('athqHome.title'));
            },

    		getMetaKeywords: function getMetaKeywords() {
                return Utils.translate(Configuration.get('athqHome.keywords'));
            },

            getCanonical: function getCanonical() {
                return Utils.translate(Configuration.get('athqHome.canonical'));
            }

        });
		 HomeView.prototype.getContext = _.wrap(HomeView.prototype.getContext, function (fn) {
            var originalContext = fn.apply(this, _.toArray(arguments).slice(1));
            originalContext.homeSlides = Configuration.get('athqHome.homeSlides');
            originalContext.description = Utils.translate(Configuration.get('athqHome.description'));
            originalContext.title = Utils.translate(Configuration.get('athqHome.title'));
            originalContext.canonical = Utils.translate(Configuration.get('athqHome.canonical')) || 'https://www.telquestintl.com/';
            originalContext.logoUrl = location.href +'/' + Utils.getAbsoluteUrl('img/telquest.jpg');
            return originalContext;
        });


		}
	};
});
