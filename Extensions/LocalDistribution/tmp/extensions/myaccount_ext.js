var extensions = {};

extensions['TelQuest.ExtendOrderHistory.1.0.0'] = function(){

function getExtensionAssetsPath(asset){
	return 'extensions/TelQuest/ExtendOrderHistory/1.0.0/' + asset;
}

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


define(
	'TelQuest.ExtendOrderHistory.ExtendOrderHistory'
,   [
		'TelQuest.ExtendOrderHistory.ExtendOrderHistory.View'
	]
,   function (
		ExtendOrderHistoryView
	)
{
	'use strict';

	return  {
		mountToApp: function mountToApp (container)
		{
			
		}
	};
});


};

extensions['TelQuest.ExtendProfileinfo.1.0.0'] = function(){

function getExtensionAssetsPath(asset){
	return 'extensions/TelQuest/ExtendProfileinfo/1.0.0/' + asset;
}

// @module TelQuest.ExtendProfileinfo.ExtendProfileinfo
define('TelQuest.ExtendProfileinfo.ExtendProfileinfo.View'
,	[
		'telquest_extendprofileinfo_extendprofileinfo.tpl'
	,	'Utils'
	,	'Backbone'
	,	'jQuery'
	,	'underscore'
	]
,	function (
		telquest_extendprofileinfo_extendprofileinfo_tpl
	,	Utils
	,	Backbone
	,	jQuery
	,	_
	)
{
	'use strict';

	// @class TelQuest.ExtendProfileinfo.ExtendProfileinfo.View @extends Backbone.View
	return Backbone.View.extend({

		template: telquest_extendprofileinfo_extendprofileinfo_tpl

	,	initialize: function (options) {

			/*  Uncomment to test backend communication with an example service 
				(you'll need to deploy and activate the extension first)
			*/
			this.message = '';
			// var service_url = Utils.getAbsoluteUrl(getExtensionAssetsPath('services/ExtendProfileinfo.Service.ss'));

			// jQuery.get(service_url)
			// .then((result) => {

			// 	this.message = result;
			// 	this.render();
			// });
		}

	,	events: {
		}

	,	bindings: {
		}

	, 	childViews: {
			
		}

		//@method getContext @return TelQuest.ExtendProfileinfo.ExtendProfileinfo.View.Context
	,	getContext: function getContext()
		{
			//@class TelQuest.ExtendProfileinfo.ExtendProfileinfo.View.Context
			//this.message = this.message || 'Hello World!!'
			return {
				//message: this.message
			};
		}
	});
});


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


};

extensions['TelQuest.FacetsExtend.1.0.0'] = function(){

function getExtensionAssetsPath(asset){
	return 'extensions/TelQuest/FacetsExtend/1.0.0/' + asset;
}

/*
	© 2017 NetSuite Inc.
	User may not copy, modify, distribute, or re-bundle or otherwise make available this code;
	provided, however, if you are an authorized user with a NetSuite account or log-in, you
	may use this code subject to the terms that govern your access and use.
*/

// @module Facets
// @class Facets.Translator
// Holds the mapping of a url compoment with an api call,
// is able to translate and to return different configurations of himself with diferent options
define('TelQuest.FacetsExtend.Facets.Translator'
    ,	[	'underscore'
        ,	'jQuery'
        ,	'SC.Configuration'
        ,	'Utils'
        ,	'UrlHelper'
    ]
    ,	function (
        _
        ,	jQuery
        ,	Configuration
    )
    {
        'use strict';

        // This is just for internal use only, DO NOT EDIT IT HERE!!
        // the same options should be somewhere in the configuration file
        var default_config = {
            fallbackUrl: 'search'
            ,	defaultShow: null
            ,	defaultOrder: null
            ,	defaultDisplay: null
            ,	facets: []
            ,	facetDelimiters: {
                betweenFacetNameAndValue: '/'
                ,	betweenDifferentFacets: '/'
                ,	betweenDifferentFacetsValues: ','
                ,	betweenRangeFacetsValues: 'to'
                ,	betweenFacetsAndOptions: '?'
                ,	betweenOptionNameAndValue: '='
                ,	betweenDifferentOptions: '&'
            }
        };

        //@constructor @param {Array}facets @param {Object} options @param {Object} configuration
        function FacetsTranslator (facets, options, configuration, category)
        {
            // Enforces new
            if (!(this instanceof FacetsTranslator))
            {
                return new FacetsTranslator(facets, options, configuration, category);
            }

            // Facets go Here
            this.facets = [];

            // Other options like page, view, etc. goes here
            this.options = {};

            // This is an object that must contain a fallbackUrl and a lists of facet configurations
            this.configuration = configuration || default_config;

            // Get the facets that are in the sitesettings but not in the config.
            // These facets will get a default config (max, behavior, etc.) - Facets.Translator
            // Include facet aliases to be conisdered as a possible route
            var facets_data = Configuration.get('siteSettings.facetfield')
                ,	facets_to_include = [];

            _.each(facets_data, function(facet)
            {
                if (facet.facetfieldid !== 'commercecategory')
                {
                    facets_to_include.push(facet.facetfieldid);

                    // If the facet has an urlcomponent defined, then add it to the possible values list.
                    facet.urlcomponent && facets_to_include.push(facet.urlcomponent);

                    // Finally, include URL Component Aliases...
                    _.each(facet.urlcomponentaliases, function(facet_alias)
                    {
                        facets_to_include.push(facet_alias.urlcomponent);
                    });
                }
            });

            facets_to_include = _.union(facets_to_include, _.pluck(Configuration.get('facets'), 'id'));
            facets_to_include = _.uniq(facets_to_include);

            this.facetsToInclude = facets_to_include;

            this.isCategoryPage = !!category;

            if (_.isBoolean(category) && category)
            {
                var facetsOptions = facets.indexOf(this.configuration.facetDelimiters.betweenFacetsAndOptions);
                var index = facetsOptions && facetsOptions > 0 ? facetsOptions : facets.length
                    ,	facetsToInclude = this.facetsToInclude.slice(0)
                    ,	delimiterBetweenDifferentFacets = this.configuration.facetDelimiters.betweenDifferentFacets
                    ,	delimiterBetweenFacetNameAndValue = this.configuration.facetDelimiters.betweenFacetNameAndValue
                    ,	delimitedUrlFragment = facets + delimiterBetweenFacetNameAndValue
                    ,	delimiter_added = false;

                facetsToInclude.push(this.configuration.facetDelimiters.betweenFacetsAndOptions);

                if (facets.substring(0, delimiterBetweenDifferentFacets.length) !== delimiterBetweenDifferentFacets)
                {
                    delimitedUrlFragment = delimiterBetweenDifferentFacets + delimitedUrlFragment;
                    delimiter_added = true;
                }

                _.each(facetsToInclude, function (facetName)
                {
                    var i = delimitedUrlFragment.indexOf(delimiterBetweenDifferentFacets + facetName + delimiterBetweenFacetNameAndValue);

                    if (i !== -1 && i < index)
                    {
                        index = delimiter_added ? i - 1 : i;
                    }
                });

                var categoryUrl = facets.substring(0, index);

                facets = facets.substring(index);

                if (categoryUrl[0] !== '/')
                {
                    categoryUrl = '/' + categoryUrl;
                }

                if (categoryUrl[categoryUrl.length - 1] === '/')
                {
                    categoryUrl = categoryUrl.substring(0, categoryUrl.length - 1);
                }

                this.categoryUrl = categoryUrl;
            }
            else if (_.isString(category))
            {
                this.categoryUrl = category;
            }

            // We cast on top of the passed in parameters.
            if (facets && options)
            {
                this.facets = facets;
                this.options = options;
            }
            else if (_.isString(facets))
            {
                // It's a url
                this.parseUrl(facets);
            }
            else if (facets)
            {
                // It's an API option object
                this.parseOptions(facets);
            }
        }

        _.extend(FacetsTranslator.prototype, {

            //@property {Object}defaultFacetConfig
            defaultFacetConfig: {
                behavior: 'single'
                ,	max: 5
            }

            // @method getFacetsToInclude
            ,	getFacetsToInclude: function getFacetsToInclude ()
            {
                return this.facetsToInclude;
            }

            // @method parseUrl Url strings get translated into the differnts part of the object, facets and options
            // @param {String} url
            ,	parseUrl: function parseUrl (url)
            {
                // We remove a posible 1st / (slash)
                url = (url[0] === '/') ? url.substr(1) : url;

                // given an url with options we split them into 2 strings (options and facets)
                var facets_n_options = url.split(this.configuration.facetDelimiters.betweenFacetsAndOptions)
                    ,	facets = (facets_n_options[0] && facets_n_options[0] !== this.configuration.fallbackUrl) ? facets_n_options[0] : ''
                    ,	options = facets_n_options[1] || '';

                // We treat category as the 1st unnamed facet filter, so if you are using categories
                // we will try to take that out by comparing the url with the category tree
                if (this.isCategoryPage)
                {
                    facets = facets.replace(this.categoryUrl, '');

                    // We remove a posible 1st / (slash) (again, it me be re added by taking the category out)
                    facets = (facets[0] === '/') ? facets.substr(1) : facets;
                }

                // The facet part of the url gets splitted and computed by pairs
                var facet_tokens = facets.split(new RegExp('[\\'+ this.configuration.facetDelimiters.betweenDifferentFacets +'\\'+ this.configuration.facetDelimiters.betweenFacetNameAndValue +']+', 'ig'));

                while (facet_tokens.length > 0)
                {
                    var facet_name = facet_tokens.shift()
                        ,	facet_value = facet_tokens.shift();

                    if (!this.facetIsParameter(facet_name))
                    {
                        this.parseUrlFacet(facet_name, facet_value);
                    }
                }

                // The same for the options part of the url
                var options_tokens = options.split(new RegExp('[\\'+ this.configuration.facetDelimiters.betweenOptionNameAndValue +'\\'+ this.configuration.facetDelimiters.betweenDifferentOptions +']+', 'ig'))
                    ,	tmp_options = {};

                while (options_tokens.length > 0)
                {
                    var option_name = options_tokens.shift()
                        ,	option_value = options_tokens.shift()
                        ,	option_is_facet = _.contains(this.facetsToInclude, option_name);

                    if (option_is_facet && this.facetIsParameter(option_name))
                    {
                        this.parseUrlFacet(option_name, option_value);
                    }

                    tmp_options[option_name] = option_value;
                }

                this.parseUrlOptions(tmp_options);
            }


            // @method facetIsParameter
            // Given a facet name, returns true if the facet needs to be interpreted as an url parameter, false otherwise.
            // @param {String} facet_name
            ,	facetIsParameter: function facetIsParameter (facet_name)
            {
                var facet_config = this.getFacetConfig(facet_name);

                return _.isUndefined(facet_config.isParameter) ? this.configuration.facetsAsUrlParameters : facet_config.isParameter;
            }

            /*
            @method sanitizeValue
            Translates values that came from the url into JS data types that this objects know of
            Examples for different types:

            range/10to100 gets translated to {from: '10', to: '100'}
            range/100 gets translated to {from: '0', to: '100'}
            multi/1,2,3 gets translated to ['1', '2', '3']
            */
            ,	sanitizeValue: function sanitizeValue (value, behavior)
            {
                var parsed_value;

                switch (behavior)
                {
                    case 'range':
                        // we return an object like {from: string, to: string }
                        if (_.isString(value))
                        {
                            if (value.indexOf(this.configuration.facetDelimiters.betweenRangeFacetsValues) !== -1)
                            {
                                var tokens = value.split(this.configuration.facetDelimiters.betweenRangeFacetsValues);
                                parsed_value = {from: tokens[0], to: tokens[1]};
                            }
                            else
                            {
                                parsed_value = {from: '0', to: value};
                            }
                        }
                        else
                        {
                            parsed_value = value;
                        }

                        break;
                    case 'multi':
                        // we always return an array for a multi value
                        if (value.indexOf(this.configuration.facetDelimiters.betweenDifferentFacetsValues) !== -1)
                        {
                            parsed_value = value.split(this.configuration.facetDelimiters.betweenDifferentFacetsValues);
                        }
                        else
                        {
                            parsed_value = [value];
                        }

                        break;
                    default:
                        parsed_value = value;
                }

                return parsed_value;
            }

            // @method getUrlFacetValue
            // Returns the value of an active facet by the facet URL component
            // @param {String} facet_url
            ,	getUrlFacetValue: function getUrlFacetValue (facet_url)
            {
                return (_.find(this.facets, function (facet)
                {
                    return facet.url === facet_url;
                }) || {}).value;
            }

            // @method getFacetValue:
            // Returns the value of an active facet by the facet id
            // @param {String} facet_id
            ,	getFacetValue: function getFacetValue (facet_id)
            {
                return (_.find(this.facets, function (facet)
                {
                    return facet.id === facet_id;
                }) || {}).value;
            }

            // @method getAllFacets
            // @returns {Array} a copy of the internal array of facets containing values and configuration
            ,	getAllFacets: function getAllFacets ()
            {
                return this.facets.slice(0);
            }

            // @param getOptionValue
            // Returns the value of an active options or it's default value
            ,	getOptionValue: function getOptionValue (option_id)
            {
                return this.options[option_id] || null;
            }

            // @param parseUrlFacet
            // for a given name value, it gets the config, sanitize the value and stores it all in the internal facets array
            // @param {String} @param {String} value
            ,	parseUrlFacet: function parseUrlFacet (name, value)
            {
                // Gets the config for the current facet
                var config = this.getFacetConfig(name, 'id')
                    ,	facets_values
                ;

                if (config.id === 'commercecategoryname' || config.id === 'category' || !name)
                {
                    return;
                }

                facets_values = value && value.split(this.configuration.facetDelimiters.betweenDifferentFacetsValues);

                facets_values = _.map(facets_values, function (val) {
                    if (val === decodeURIComponent(val))
                    {
                        val = encodeURIComponent(val);
                    }

                    return val;
                });

                this.facets.push({
                    config: config
                    ,	id: config.id
                    ,	url: config.id
                    ,	value: this.sanitizeValue(facets_values.join(this.configuration.facetDelimiters.betweenDifferentFacetsValues), config.behavior)
                    ,	isParameter: config.isParameter
                });
            }

            // @method parseFacet:
            // Same as parseUrlFacet but from id
            // @param facet_id @param value
            ,	parseFacet: function parseFacet (facet_id, value)
            {
                // Gets the config for the current facet
                var config = this.getFacetConfig(facet_id, 'id');

                this.facets.push({
                    config: config
                    ,	id: config.id
                    ,	url: config.id
                    ,	value: this.sanitizeValue(value, config.behavior)
                    ,	isParameter: config.isParameter
                });
            }

            // @method parseUrlOptions:
            // Sets options from the options argument or sets default values
            // @param {Object} options
            ,	parseUrlOptions: function parseUrlOptions (options)
            {
                this.options.show = options.show || this.configuration.defaultShow;
                this.options.order = options.order || this.configuration.defaultOrder;
                this.options.page = parseInt(options.page, 10) || 1;
                this.options.display = options.display || this.configuration.defaultDisplay;
                this.options.keywords = options.keywords ? decodeURIComponent(options.keywords) : this.configuration.defaultKeywords;
            }

            // facet@method getFacetConfig
            // Gets the configuration for a given facet by id,
            // @param {String}name @param {String}by
            ,	getFacetConfig: function getFacetConfig (name)
            {
                var result =  _.find(this.configuration.facets, function (facet)
                {
                    return facet.id === name;
                });

                result =  result || _.find(this.configuration.facets, function (facet)
                {
                    return facet.url === name;
                });

                return result || _.extend({ id: name, name: name, url: name, isParameter: undefined }, this.defaultFacetConfig);
            }

            // @method getUrl
            // Gets the url for current state of the object
            ,	getUrl: function getUrl ()
            {
                var url = this.categoryUrl || ''
                    ,	self = this;

                // Prepares seo limits
                var facets_seo_limits = {};

                if (SC.ENVIRONMENT.jsEnvironment === 'server')
                {
                    facets_seo_limits = {
                        numberOfFacetsGroups: this.configuration.facetsSeoLimits && this.configuration.facetsSeoLimits.numberOfFacetsGroups || false
                        ,	numberOfFacetsValues: this.configuration.facetsSeoLimits && this.configuration.facetsSeoLimits.numberOfFacetsValues || false
                        ,	options: this.configuration.facetsSeoLimits && this.configuration.facetsSeoLimits.options || false
                    };
                }

                // If there are too many facets selected
                if (facets_seo_limits.numberOfFacetsGroups && this.facets.length > facets_seo_limits.numberOfFacetsGroups)
                {
                    return '#';
                }

                // Encodes the other Facets
                var sorted_facets = _.sortBy(this.facets, 'url')
                    ,	facets_as_options = [];

                for (var i = 0; i < sorted_facets.length; i++)
                {
                    var facet = sorted_facets[i];

                    // Category should be already added
                    if ((facet.id === 'commercecategoryname') || (facet.id === 'category'))
                    {
                        break;
                    }

                    var name = facet.url || facet.id
                        ,	value = '';

                    switch (facet.config.behavior)
                    {
                        case 'range':
                            facet.value = (typeof facet.value === 'object') ? facet.value : {from: 0, to: facet.value};
                            value = facet.value.from + self.configuration.facetDelimiters.betweenRangeFacetsValues + facet.value.to;
                            break;
                        case 'multi':
                            value = facet.value.sort().join(self.configuration.facetDelimiters.betweenDifferentFacetsValues);

                            if (facets_seo_limits.numberOfFacetsValues && facet.value.length > facets_seo_limits.numberOfFacetsValues)
                            {
                                return '#';
                            }

                            break;
                        default:
                            value = facet.value;
                    }

                    if (self.facetIsParameter(name))
                    {
                        facets_as_options.push({ facetName: name, facetValue: value });
                    }
                    else
                    {
                        // Do not add a facet separator at the begining of an url
                        if (url !== '')
                        {
                            url += self.configuration.facetDelimiters.betweenDifferentFacets;
                        }

                        url += name + self.configuration.facetDelimiters.betweenFacetNameAndValue + value;
                    }
                }

                url = (url !== '') ? url : '/' + this.configuration.fallbackUrl;

                // Encodes the Options
                var tmp_options = {}
                    ,	separator = this.configuration.facetDelimiters.betweenOptionNameAndValue;

                if (this.options.order && this.options.order !== this.configuration.defaultOrder)
                {
                    tmp_options.order = 'order' + separator + this.options.order;
                }

                if (this.options.page && parseInt(this.options.page, 10) !== 1)
                {
                    tmp_options.page = 'page' + separator + encodeURIComponent(this.options.page);
                }

                if (this.options.show && parseInt(this.options.show, 10) !== this.configuration.defaultShow)
                {
                    tmp_options.show = 'show' + separator + encodeURIComponent(this.options.show);
                }

                if (this.options.display && this.options.display !== this.configuration.defaultDisplay)
                {
                    tmp_options.display = 'display' + separator + encodeURIComponent(this.options.display);
                }

                if (this.options.keywords && this.options.keywords !== this.configuration.defaultKeywords)
                {
                    tmp_options.keywords = 'keywords' + separator + encodeURIComponent(this.options.keywords);
                }

                for (i = 0; i < facets_as_options.length; i ++)
                {
                    var facet_option_obj = facets_as_options[i];

                    tmp_options[facet_option_obj.facetName] = facet_option_obj.facetName + separator + facet_option_obj.facetValue;
                }

                var tmp_options_keys = _.keys(tmp_options)
                    ,	tmp_options_vals = _.values(tmp_options);

                // If there are options that should not be indexed also return #
                if (facets_seo_limits.options && _.difference(tmp_options_keys, facets_seo_limits.options).length)
                {
                    return '#';
                }

                url += (tmp_options_vals.length) ? this.configuration.facetDelimiters.betweenFacetsAndOptions + tmp_options_vals.join(this.configuration.facetDelimiters.betweenDifferentOptions) : '';

                if (url && url[0] !== this.configuration.facetDelimiters.betweenDifferentFacets)
                {
                    url = this.configuration.facetDelimiters.betweenDifferentFacets + url;
                }

                return _(url).fixUrl();
            }

            // @method getCategoryUrl Returns the current category url
            ,	getCategoryUrl: function getCategoryUrl ()
            {
                return this.categoryUrl;
            }

            // @method getApiParams
            // Gets the api parameters representing the current status of the object
            ,	getApiParams: function getApiParams ()
            {
                var params = {};

                _.each(this.facets, function (facet)
                {
                    switch (facet.config.behavior)
                    {
                        case 'range':
                            var value = (typeof facet.value === 'object') ? facet.value : {from: 0, to: facet.value};
                            params[facet.id + '.from'] = value.from;
                            params[facet.id + '.to'] = value.to;
                            break;
                        case 'multi':
                            params[facet.id] = facet.value.sort().join(',') ; // this coma is part of the api call so it should not be removed
                            break;
                        default:
                            params[facet.id] =  facet.value;
                    }
                });

                params.sort = this.options.order;
                params.limit = this.options.show;
                params.offset = (this.options.show * this.options.page) - this.options.show;

                params.q = this.options.keywords;

                if (this.isCategoryPage)
                {
                    params.commercecategoryurl = this.categoryUrl;
                    params.sort = params.sort.replace('relevance', 'commercecategory');
                }

                return params;
            }

            // @method cloneForFacetId
            // retruns a deep copy of this object with a new value for one facet,
            // if in a name value that is the same as what's in, it will take it out
            ,	cloneForFacetId: function cloneForFacetId (facet_id, facet_value)
            {
                // Using jQuery here because it offers deep cloning
                var facets	= _.toArray(jQuery.extend(true, {}, this.facets))
                    ,	options	= jQuery.extend(true, {}, this.options)
                    ,	current_facet = _.find(facets, function (facet)
                {
                    return facet.id === facet_id;
                });

                if (current_facet)
                {
                    if (current_facet.config.behavior === 'multi')
                    {
                        if (_.indexOf(current_facet.value, facet_value) === -1)
                        {
                            current_facet.value.push(facet_value);
                        }
                        else
                        {
                            current_facet.value = _.without(current_facet.value, facet_value);
                        }

                        if (current_facet.value.length === 0)
                        {
                            facets = _.without(facets, current_facet);
                        }
                    }
                    else
                    {
                        if (!_.isEqual(current_facet.value, facet_value))
                        {
                            current_facet.value = facet_value;
                        }
                        else
                        {
                            facets = _.without(facets, current_facet);
                        }
                    }
                }

                options.page = 1;

                var translator = new FacetsTranslator(facets, options, this.configuration, this.categoryUrl);

                if (!current_facet)
                {
                    translator.parseFacet(facet_id, facet_value);
                }

                return translator;
            }

            // @method cloneWithoutFacetId
            // retruns a deep copy of this object without a facet,
            ,	cloneWithoutFacetId: function cloneWithoutFacetId (facet_id)
            {
                var facets = _.toArray(jQuery.extend(true, {}, this.facets))
                    ,	options = jQuery.extend(true, {}, this.options);

                facets = _.without(facets, _.find(facets, function (facet)
                {
                    return facet.id === facet_id;
                }));

                return new FacetsTranslator(facets, options, this.configuration, this.categoryUrl);
            }

            // @method cloneWithoutFacets
            // Clones the translator removeing all the facets, leaving only options
            ,	cloneWithoutFacets: function cloneWithoutFacets ()
            {
                // Creates a new translator with the same params as this;
                var translator = new FacetsTranslator(this.facets.slice(), this.options, this.configuration, this.categoryUrl);

                _.each(translator.getAllFacets(), function (facet)
                {
                    // Categories are not facets, so lets not remove those
                    if ((facet.id !== 'commercecategoryname') && (facet.id !== 'category'))
                    {
                        translator = translator.cloneWithoutFacetId(facet.id);
                    }
                });

                return translator;
            }

            //@method cloneForOption
            ,	cloneForOption: function cloneForOption (option_id, option_value)
            {
                var facets  = _.toArray(jQuery.extend(true, {}, this.facets))
                    ,	options = jQuery.extend(true, {}, this.options);

                options[option_id] = option_value;
                return new FacetsTranslator(facets, options, this.configuration, this.categoryUrl);
            }

            // @method cloneForOptions
            // same as cloneForFacetId but for options instead of facets
            ,	cloneForOptions: function cloneForOptions (object)
            {
                var facets  = _.toArray(jQuery.extend(true, {}, this.facets))
                    ,	options = jQuery.extend(true, {}, this.options, object);

                return new FacetsTranslator(facets, options, this.configuration, this.categoryUrl);
            }

            // @method cloneWithoutOption
            // same as cloneWithoutFacetId but for options instead of facets
            ,	cloneWithoutOption: function cloneWithoutOption (option_id)
            {
                var facets  = _.toArray(jQuery.extend(true, {}, this.facets))
                    ,	options = jQuery.extend(true, {}, this.options);

                delete options[option_id];

                return new FacetsTranslator(facets, options, this.configuration, this.categoryUrl);
            }

            // @method resetAll
            // Returns a blank instance of itself
            ,	resetAll: function resetAll ()
            {
                return new FacetsTranslator([], {}, this.configuration, false);
            }

            // @method setLabelsFromFacets
            // This let the translator known about labels the api proportions
            // Tho this make the translator a bit less API agnostic
            // this step is totaly optional and it should work regardless of this step
            ,	setLabelsFromFacets: function setLabelsFromFacets (facets_labels)
            {
                this.facetsLabels = facets_labels;
            }

            // @method getLabelForValue
            // If facets labels have been setted it will try to look for the label for the
            // [id, value] combination and return it's label, otherways it will return the value
            ,	getLabelForValue: function getLabelForValue (id, value)
            {
                var facet = _.filter(this.facetsLabels || [], function (facet_label)
                {
                    return facet_label.id === id || facet_label.url === id;
                });

                if (facet.length)
                {
                    var label = _.where(facet[0].values || [], {name: value});

                    // if the value could not be found by name, look for url
                    if (!label.length)
                    {
                        label = _.where(facet[0].values || [], {url: value});
                    }

                    if (label.length && label[0].label)
                    {
                        return label[0].label;
                    }
                }

                return value;
            }
        });

        return FacetsTranslator;
    });


define('TelQuest.FacetsExtend.FacetsExtend.Browse.View.Tags', [
    'SC.Configuration',
    'Facets.Browse.View',
    'underscore',
	'Utils'
], function FacetTags(
    Configuration,
    FacetsBrowseViewExtension,
    _,
	Utils
) {
    'use strict';

    function textCutter(text, n) {
        var short = text.substr(0, n);
        if (/^\S/.test(text.substr(n))) {
            return short.replace(/\s+\S*$/, '');
        }
        return short;
    }

    /* eslint-disable */
    //@class Facets.Browse.View.Extension @extends Facets.Browse.View
    _.extend(FacetsBrowseViewExtension.prototype, {
        getTitle: function () {

            var facets = this.translator;
            var category = this.model.get('category');
            var title = category ? category.get('pagetitle') || _.pluck(this.getBreadcrumbPages(), 'text').join(' > ') : '';

            if (facets && facets.length) {
                title = title ? title + ' - ' : '';

                var buffer = []
                    , facet = null;

                for (var i = 0; i < facets.length; i++) {
                    facet = facets[i];
                    buffer.push(this.formatFacetTitle(facet));
                }

                title = title + this.application.getConfig('searchTitlePrefix', '') +
                    buffer.join(facet.config.titleSeparator || ', ') +
                    this.application.getConfig('searchTitleSuffix', '');
            }
            else if (this.translator.getOptionValue('keywords')) {
                title = _('Search results for "$(0)"').translate(
                    this.translator.getOptionValue('keywords')
                );
            }
            else {
                title = title || this.application.getConfig('defaultSearchTitle', '');
            }
            if (title.indexOf(Configuration.get('defaultSiteSearchName')) < 0) {
                title = Configuration.get('defaultSiteSearchName') ?
                    Configuration.get('defaultSiteSearchName') + ' ' + title : title;
            }
            this.setMetaTwitterTitle(title);

            return title;
        },
        /* eslint-enable */


        formatFacetTitle: _.wrap(FacetsBrowseViewExtension.prototype.formatFacetTitle, function wrap(fn) {
            return _.unescape(fn.apply(this, _.toArray(arguments).slice(1)));
        }),

        /* eslint-disable */
        getMetaDescription: function () {
            var useFacet = false;
            var category = this.model.get('category');
            var metaDescription = category && category.get('metadescription') || this.metaDescription || '';
            if (!metaDescription && category) {
                metaDescription = category.get('name')
            }
            var applied_facets = this.translator.cloneWithoutFacetId('category').facets;
            var narrowedBy = " Narrowed by: ";
            for (var i = 0; i < applied_facets.length; i++) {
                useFacet = true;
                var facet = applied_facets[i];

                if (i > 0) {
                    narrowedBy = narrowedBy + ", ";
                }
                narrowedBy = narrowedBy + facet.config.name + ": " + this.translator.getLabelForValue(facet.id, facet.value)
            }
            if (metaDescription === '') {
                metaDescription = this.getTitle();
            } else {
                metaDescription = Configuration.get('defaultSiteSearchName') ? Configuration.get('defaultSiteSearchName') + ' ' + metaDescription : metaDescription;
            }
            var finalText = textCutter(useFacet ? ((metaDescription + narrowedBy).trim()) : metaDescription, 156);

            return finalText;
        },
        /* eslint-enable */

        getContext: _.wrap(FacetsBrowseViewExtension.prototype.getContext, function getContext(fn) {
            var context = fn.apply(this, _.toArray(arguments).slice(1));
            var isBrand = false;

            try{
                isBrand = this.model.get('category').get('name') === 'Brands'
            }catch (e) {}

            _.extend(context, {
               // isLoggedIn: Utils.isLoggedIn(),
                showCategoryBrand: isBrand
            });
            return context;
        })
    });
});


define('TelQuest.FacetsExtend.FacetsExtend.CategoryCell.View', [
    'Facets.CategoryCell.View',
    'underscore',
    'Handlebars'
],
function SiteFacetsCategoryCellView(
    FacetsCategoryCellView,
    _,
    Handlebars
) {
    'use strict';
    Handlebars.registerHelper('unescapeHTML', function unescapeHTML(text) {
        return new Handlebars.SafeString(_.unescape(text));
    });
    _.extend(FacetsCategoryCellView.prototype, {
        getContext: _.wrap(FacetsCategoryCellView.prototype.getContext, function(fn) {
            var originalRet = fn.apply(this, _.toArray(arguments).slice(1));

            originalRet.customDescription = this.model.get('custrecord_description_for_brands') || this.model.get('name')
            return originalRet;
        })
    });
});


define('TelQuest.FacetsExtend.FacetsExtend.ItemCell.View', [
    'Facets.ItemCell.View',
    'GlobalViews.StarRating.View',
    'Utils',
    'underscore'
], function SiteFacets(
    FacetsItemCell,
    GlobalViewsStarRating,
    Utils,
    _
) {
    'use strict';

    FacetsItemCell.prototype.childViews['GlobalViews.StarRating'] = function generateNewChildView() {
        var ratingCount = this.model.get('_ratingsCount') || 0;
        var view;

        if (ratingCount >= 0) {
            view = new GlobalViewsStarRating({
                model: this.model,
                showRatingCount: false,
                queryOptions: Utils.parseUrlOptions(location.href)
            });

            return this.options.showStarRating === false ? null : view;
        }
        return false;
    };
});


define('TelQuest.FacetsExtend.FacetsExtend.Translator', [
    'Facets.Translator',
    'underscore',
    'jQuery',
    'SC.Configuration',
    'Utils',
    'UrlHelper'
], function siteFacetsTranslator(
    FacetsTranslator,
    _,
    jQuery,
    Configuration
) {
    'use strict';

    _.extend(FacetsTranslator.prototype, {
        shouldFacetBeOnSEOUrl: function shouldFacetBeOnSEOUrl(facetName) {
            var allowed = _.pluck(Configuration.get('allowedFacets'), 'facetid');
            return allowed.indexOf(facetName) !== -1;
        },

        /* eslint-disable */
        getUrl: function getUrl() {

            var url = this.categoryUrl || '';
            var self = this;

            // Prepares seo limits
            var facets_seo_limits = {};

            if (SC.ENVIRONMENT.jsEnvironment === 'server') {
                facets_seo_limits = {
                    numberOfFacetsGroups: this.configuration.facetsSeoLimits && this.configuration.facetsSeoLimits.numberOfFacetsGroups || false,
                    numberOfFacetsValues: this.configuration.facetsSeoLimits && this.configuration.facetsSeoLimits.numberOfFacetsValues || false,
                    options: this.configuration.facetsSeoLimits && this.configuration.facetsSeoLimits.options || false
                };
            }

            // If there are too many facets selected
            if (facets_seo_limits.numberOfFacetsGroups && this.facets.length > facets_seo_limits.numberOfFacetsGroups) {
                return '#';
            }


            // Encodes the other Facets
            var sorted_facets = _.sortBy(this.facets, 'url')
                , facets_as_options = [];

            for (var i = 0; i < sorted_facets.length; i++) {
                var facet = sorted_facets[i];

                // Category should be already added
                if ((facet.id === 'commercecategoryname') || (facet.id === 'category')) {
                    break;
                }

                var name = facet.url || facet.id
                    , value = '';

                switch (facet.config.behavior) {
                    case 'range':
                        facet.value = (typeof facet.value === 'object') ? facet.value : {from: 0, to: facet.value};
                        value = facet.value.from + self.configuration.facetDelimiters.betweenRangeFacetsValues + facet.value.to;
                        break;
                    case 'multi':
                        value = facet.value.sort().join(self.configuration.facetDelimiters.betweenDifferentFacetsValues);

                        if (facets_seo_limits.numberOfFacetsValues && facet.value.length > facets_seo_limits.numberOfFacetsValues) {
                            return '#';
                        }

                        break;
                    default:
                        value = facet.value;
                }

                if (SC.ENVIRONMENT.jsEnvironment === 'server' && !self.shouldFacetBeOnSEOUrl(name)) {
                    return '#';
                }

                if (self.facetIsParameter(name)) {
                    facets_as_options.push({facetName: name, facetValue: value});
                } else {
                    // Do not add a facet separator at the begining of an url
                    if (url !== '') {
                        url += self.configuration.facetDelimiters.betweenDifferentFacets;
                    }

                    url += name + self.configuration.facetDelimiters.betweenFacetNameAndValue + value;
                }
            }

            url = (url !== '') ? url : '/' + this.configuration.fallbackUrl;

            // Encodes the Options
            var tmp_options = {}
                , separator = this.configuration.facetDelimiters.betweenOptionNameAndValue;

            if (this.options.order && this.options.order !== this.configuration.defaultOrder) {
                tmp_options.order = 'order' + separator + this.options.order;
            }

            if (this.options.page && parseInt(this.options.page, 10) !== 1) {
                tmp_options.page = 'page' + separator + encodeURIComponent(this.options.page);
            }

            if (this.options.show && parseInt(this.options.show, 10) !== this.configuration.defaultShow) {
                tmp_options.show = 'show' + separator + encodeURIComponent(this.options.show);
            }

            if (this.options.display && this.options.display !== this.configuration.defaultDisplay) {
                tmp_options.display = 'display' + separator + encodeURIComponent(this.options.display);
            }

            if (this.options.keywords && this.options.keywords !== this.configuration.defaultKeywords) {
                tmp_options.keywords = 'keywords' + separator + encodeURIComponent(this.options.keywords);
            }

            for (i = 0; i < facets_as_options.length; i++) {
                var facet_option_obj = facets_as_options[i];

                tmp_options[facet_option_obj.facetName] = facet_option_obj.facetName + separator + facet_option_obj.facetValue;
            }

            var tmp_options_keys = _.keys(tmp_options)
                , tmp_options_vals = _.values(tmp_options);

            // If there are options that should not be indexed also return #
            if (facets_seo_limits.options && _.difference(tmp_options_keys, facets_seo_limits.options).length) {
                return '#';
            }

            url += (tmp_options_vals.length) ?
                this.configuration.facetDelimiters.betweenFacetsAndOptions + tmp_options_vals.join(this.configuration.facetDelimiters.betweenDifferentOptions) :
                '';

            var fixedUrl = _(url).fixUrl();

            // Crucial fix to avoid infinite formation of facet combinations
            if (fixedUrl[0] !== '/') {
                fixedUrl = '/' + fixedUrl;
            }

            return fixedUrl;
        }
        /* eslint-enable */
    });
});


define('TelQuest.FacetsExtend.HidePrice.Facets.ItemCell.View', [
    'Facets.ItemCell.View',
    'Product.Model',
    'Cart.QuickAddToCart.View',
    'underscore'
],
function HidePriceFacetsItemCellView(
    ItemCellView,
    ProductModel,
    CartQuickAddToCartView,
    _
) {
    'use strict';

    _.extend(ItemCellView.prototype, {
        getContext: _.wrap(ItemCellView.prototype.getContext, function(fn) {
            var originalRet = fn.apply(this, _.toArray(arguments).slice(1));
            var features = this.model.get('storedescription') || '';
            features = features.replace(/&nbsp;/g, '');
            features = features || '';
            features = features.split(',');
            if (features[0] === '') {
                features = null;
            }
            originalRet.features = features;
            originalRet.mpn = this.model.get('mpn');
            return originalRet;
        })
    });
    _.extend(ItemCellView.prototype.childViews, {
        'Cart.QuickAddToCart': function CartQuickAddToCart() {
            var product = new ProductModel({
                item: this.model,
                quantity: this.model.get('_minimumQuantity', true)
            });
            return new CartQuickAddToCartView({
                hidePrice: this.options.hidePrice,
                model: product,
                application: this.options.application
            });
        }
    });
});



define(
	'TelQuest.FacetsExtend.FacetsExtend'
,   [
	    'TelQuest.FacetsExtend.HidePrice.Facets.ItemCell.View',
		'TelQuest.FacetsExtend.FacetsExtend.Browse.View.Tags',
		'TelQuest.FacetsExtend.FacetsExtend.Translator',
		'TelQuest.FacetsExtend.FacetsExtend.ItemCell.View',
		'TelQuest.FacetsExtend.FacetsExtend.CategoryCell.View',
		'TelQuest.FacetsExtend.Facets.Translator'
	]
,   function (
	)
{
	'use strict';

	return  {
		mountToApp: function mountToApp (container)
		{

		}
	};
});


};

extensions['TelQuest.FakeMatrix.1.0.0'] = function(){

function getExtensionAssetsPath(asset){
	return 'extensions/TelQuest/FakeMatrix/1.0.0/' + asset;
}

// @module TelQuest.FakeMatrix.FakeMatrix
define('TelQuest.FakeMatrix.FakeMatrix.View'
,	[
		'telquest_fakematrix_fakematrix.tpl'
	,	'Utils'
	,	'Backbone'
	,	'jQuery'
	,	'underscore'
	]
,	function (
		telquest_fakematrix_fakematrix_tpl
	,	Utils
	,	Backbone
	,	jQuery
	,	_
	)
{
	'use strict';

	// @class TelQuest.FakeMatrix.FakeMatrix.View @extends Backbone.View
	return Backbone.View.extend({

		template: telquest_fakematrix_fakematrix_tpl

	,	initialize: function (options) {

			/*  Uncomment to test backend communication with an example service 
				(you'll need to deploy and activate the extension first)
			*/
			this.message = '';
			// var service_url = Utils.getAbsoluteUrl(getExtensionAssetsPath('services/FakeMatrix.Service.ss'));

			// jQuery.get(service_url)
			// .then((result) => {

			// 	this.message = result;
			// 	this.render();
			// });
		}

	,	events: {
		}

	,	bindings: {
		}

	, 	childViews: {
			
		}

		//@method getContext @return TelQuest.FakeMatrix.FakeMatrix.View.Context
	,	getContext: function getContext()
		{
			//@class TelQuest.FakeMatrix.FakeMatrix.View.Context
			this.message = this.message || 'Hello World!!'
			return {
				message: this.message
			};
		}
	});
});

define('TelQuest.FakeMatrix.FakeMatrix.Cart.QuickAddToCart.View', [
    'Cart.QuickAddToCart.View',
    'underscore'
], function (
    CartQuickAddToCartView,
    _
) {
    _.extend(CartQuickAddToCartView.prototype, {
        getContext: _.wrap(CartQuickAddToCartView.prototype.getContext, function(fn) {
            var context = fn.apply(this, _.toArray(arguments).slice(1));
            var itemModel = this.model.get('item');
            return _.extend(context, {
                isParent: itemModel.get('_isParent'),
                url: itemModel.get('urlcomponent')
            });
        })
    });
});


define('TelQuest.FakeMatrix.FakeMatrix.Configuration', [
    'SC.Configuration',
    'underscore'
], function (
    Configuration,
    _
) {
    var FakeMatrixConfig = {
        searchApiMasterOptions: _.extend(Configuration.searchApiMasterOptions, {
            Facets: _.extend(Configuration.searchApiMasterOptions.Facets, {
                relateditems_fieldset: 'searchmatrix'
            }),
            merchandisingZone: _.extend(Configuration.searchApiMasterOptions.merchandisingZone, {
                relateditems_fieldset: 'searchmatrix'
            }),
            typeAhead: _.extend(Configuration.searchApiMasterOptions.typeAhead, {
                relateditems_fieldset: 'searchmatrix'
            })
        })
    };

    return {
        mountToApp: function mountToApp(application) {
            _.extend(application.Configuration, FakeMatrixConfig);
        }
    };
});


define('TelQuest.FakeMatrix.FakeMatrix.Item.KeyMapping', [
    'Item.KeyMapping',
    'SC.Configuration',
    'underscore',
   'Profile.Model',
	'Utils'
], function (
    ItemKeyMapping,
    Configuration,
    _,
	ProfileModel,
	Utils
) {
    if (!Configuration.itemKeyMapping) {
        Configuration.itemKeyMapping = {};
    }

    function setConfigurationOption(matrixDimension) {
        var itemOptions = Configuration.ItemOptions.optionsConfiguration || [];
        var option = _.findWhere(itemOptions, { cartOptionId: matrixDimension.fieldId });
        var url;
        var index;
        if (!option) {
            index = matrixDimension.fieldId.lastIndexOf('_');
            url = matrixDimension.fieldId.substring(index + 1);
            itemOptions.push({
                cartOptionId: matrixDimension.fieldId,
                label: matrixDimension.label,
                url: url,
                urlParameterName: url
            });
        }
    }

    _(Configuration.itemKeyMapping).extend({
        _url: function url(item) {
            if (item.get('_isChild') && item.get('_getParentUrl')) {
                return '/' + item.get('_getParentUrl');
            }
            return item.get('urlcomponent') ? '/' + item.get('urlcomponent') : '/product/' + item.get('internalid');
        },
        _isParent: function isParent(item) {
            return item.get('custitem_awa_is_custom_parent');
        },
        _getParentUrl: function getParentUrl(item) {
            return item.get('custitem_awa_custom_parent_url');
        },
        _isChild: function isChild(item) {
            return item.get('custitem_awa_is_custom_child');
        },
        _optionsDetails: function optionsDetails(item) {

            var options = item.get('itemoptions_detail');
			console.log('optionsoptionsDetails',options);
            var lists = SC.getPublishedObject('FakeMatrixCustomLists');
			console.log('lists',lists);
            var matrixOptions;
            var dimensions;
            if (item.get('_isParent') || (item.get('_isChild') && item.get('matrix_parent') && item.get('matrix_parent').internalid)) {
                matrixOptions = Configuration.get('fakematrix.options');
				console.log('matrixOptions',matrixOptions);
                dimensions = ((item.get('matrix_parent') && item.get('matrix_parent').custitem_awa_matrix_dimensions) ||
                    item.get('custitem_awa_matrix_dimensions') || '').trim();

                dimensions = dimensions.split(', ');

                options.fields = options.fields || [];
                debugger;
                _.each(dimensions, function eachDimension(dimension) {
                    var matrixDimension = _.findWhere(matrixOptions, { name: dimension });

                    
                    if (matrixDimension && matrixDimension.fieldId) {
                       var isAvailable=false;
                        for(var md=0;md<options.fields.length;md++){
                           if(options.fields[md].internalid==matrixDimension.fieldId){
                                isAvailable=true;
                           }
                        } 
                        if(!isAvailable){
                            options.fields.push({
                                internalid: matrixDimension.fieldId,
                                ismatrixdimension: true,
                                ismandatory: true,
                                sourcefrom: matrixDimension.fieldId,
                                label: matrixDimension.label,
                                type: 'select',
                                values: (lists && matrixDimension.fieldId) ? lists[matrixDimension.fieldId] || [] : []
                            });
                            setConfigurationOption(matrixDimension);
                        }

                    }
                });
            }

            return options;
        },

        _getChildSelectedOptions: function getChildSelectedOptions(item) {
            var ret = {};
            var optionValue = '';
            var lists = SC.getPublishedObject('FakeMatrixCustomLists');
			console.log('lists11',lists);
            var childOptions = Configuration.get('fakematrix.options');
            var url;
            if (item.get('_isChild')) {
                _.each(childOptions, function eachChildOption(currentOption) {
                    optionValue = _.findWhere(lists[currentOption.fieldId], { label: item.get(currentOption.fieldId) }) || '';
                    if (optionValue && optionValue.internalid && optionValue.internalid !== '') {
                        url = currentOption.url;
                        ret[url] = optionValue.internalid;
                    }
                });
                return ret;
            }
            return {};
        },

        _matrixChilds: function matrixChilds(item) {
            var relatedItems = item.get('relateditems_detail');
            var childOptions = Configuration.get('fakematrix.options');
            relatedItems = _.map(relatedItems, function mapRelatedItems(item) {
                _.each(childOptions, function eachChildOption(option) {
                    if (item[option.fieldId]) {
                        item[option.fieldId] = item[option.fieldId].toString();
                    }
                });
                return item;
            });
            return relatedItems;
        },

        _name: function _name(item) {
            // If its a matrix child it will use the name of the parent
            var itemId = item.get('itemid') || '';
            var parent = item.get('_matrixParent');
            var matches;
            var childName;
            if (parent.get('internalid')) {
                matches = itemId.match(/:(.*)/);
                childName = matches && matches[1];
                return childName || parent.get('storedisplayname2') || parent.get('displayname') || itemId;
            } else if (item.get('_isChild')) {
                parent = item.get('matrix_parent');
                if (parent && parent.get('internalid')) {
                    matches = itemId.match(/:(.*)/);
                    childName = matches && matches[1];
                    return childName || parent.get('storedisplayname2') || parent.get('displayname') || itemId;
                }
            }

            // Otherwise return its own name
            return item.get('storedisplayname2') || item.get('displayname') || itemId;
        },

        _originalName: function _originalName(item) {
            var itemId = item.get('itemid') || '';
            // Otherwise return its own name
            return item.get('storedisplayname2') || item.get('displayname') || itemId;
        },

        _isPurchasable: function _isPurchasable(item) {
            return item.get('ispurchasable') && !item.get('_isParent');
        }
		,   _priceDetails: function priceDetails(item) {
                var onlineCustPrice = item.get('onlinecustomerprice_detail') || {}; 
                var profileinstance = ProfileModel.getInstance(); 
                var custlgin = profileinstance.get('isLoggedIn');
                if (custlgin== 'F') { 
                        onlineCustPrice.onlinecustomerprice= item.get('pricelevel14')? item.get('pricelevel14'):item.get('pricelevel16');
                        onlineCustPrice.onlinecustomerprice_formatted= item.get('pricelevel14_formatted')? item.get('pricelevel14_formatted'):item.get('pricelevel16_formatted');                
                }
                return onlineCustPrice;
        }
		// , _vendorstock:function _vendorstock(item)
		// {
			// var vendorstock=item.get('custitem_vendor_stock');
			// var webitesiteavailability;
			// if(vendorstock==0)
			// {
				// webitesiteavailability=item.get('custitem_item_availibility');
				// if(webitesiteavailability=='' || webitesiteavailability==undefined)
				// {
					// webitesiteavailability='Call for Availability'
				// }
				// else{
					// webitesiteavailability;
				// }
			// }
			// return webitesiteavailability;
		// }
    });
});


define('TelQuest.FakeMatrix.FakeMatrix.Item.Model.Url', [
    'Item.Model',
    'underscore'
], function (
    ItemModel,
     _
) {
    'use strict';

    _.extend(ItemModel.prototype, {
        generateURL: function generateURL() {
            var ret;
            var parametersForUrl;
            if (this.get('_getParentUrl')) {
                parametersForUrl = this.get('_getChildSelectedOptions');
                ret = this.get('_getParentUrl');
                ret = _.addParamsToUrl(ret, parametersForUrl);
            } else {
                ret = this.get('_url');
            }
            return ret;
        }
    });
});



define('TelQuest.FakeMatrix.FakeMatrix.ItemRelations.Correlated.Collection', [
    'ItemRelations.Correlated.Collection',
    'SC.Configuration',
    'underscore'
], function (
    ItemRelationsCorrelatedCollection,
    Configuration,
    _
) {
    _.extend(ItemRelationsCorrelatedCollection.prototype, {
        parse: _.wrap(ItemRelationsCorrelatedCollection.prototype.parse, function(fn) {
            var originalItems = fn.apply(this, _.toArray(arguments).slice(1));
            var masterFacets = Configuration.get('masterFacets.facets');

            originalItems = _.filter(originalItems, function(originalItem) {
                return _.all(masterFacets, function allFacets(facet) {
                    return !facet.hideFromCorrelated || originalItem[facet.facetId].toString() === facet.facetValue;
                });
            });

            return originalItems;
        })
    });
});


define('TelQuest.FakeMatrix.FakeMatrix.ItemRelations.Related.Collection', [
    'ItemRelations.Related.Collection',
    'SC.Configuration',
    'underscore'
], function (
    ItemRelationsRelatedCollection,
    Configuration,
    _
) {
    _.extend(ItemRelationsRelatedCollection.prototype, {
        initialize: _.wrap(ItemRelationsRelatedCollection.prototype.initialize, function initialize(fn) {
            fn.apply(this, _.toArray(arguments).slice(1));
            this.searchApiMasterOptions = Configuration.searchApiMasterOptions.Facets;
        }),

        parse: function parse(response) {
            var originalItems = _.compact(response.items);

            if (originalItems.length === 0) {
                return []; // No items. Return an empty array, nothing else to do here.
            }

            return originalItems;
        }
    });
});


define('TelQuest.FakeMatrix.FakeMatrix.LiveOrder.Line.Model', [
    'LiveOrder.Line.Model',
    'underscore'
], function (
    LiveOrderLineModel,
    _
) {
    _.extend(LiveOrderLineModel, {
        createFromProduct: function createFromProduct(product) {
            var line = new LiveOrderLineModel(product.toJSON());
            var item = product.get('item');
            var itemImagesDetail = product.getImages();
            var isMatrixItem = !!item.get('_matrixChilds').length;
            var lineOption;

            if (_.isEqual(itemImagesDetail, {}) && item.get('_matrixParent').get('internalid') && item.get('_matrixParent').get('itemimages_detail')) {
                itemImagesDetail = item.get('_matrixParent').get('itemimages_detail');
            }

            line.set('item', product.getItem().clone(), { silent: true });
            line.get('item').set('itemimages_detail', itemImagesDetail, { silent: true });
            line.get('item').set('itemid', item.get('itemid'), { silent: true });
            line.set('rate_formatted', product.getPrice().price_formatted, { silent: true });

            product.get('options').each(function eachProductOption(productOption) {
                lineOption = line.get('options').findWhere({ cartOptionId: '' + productOption.get('cartOptionId') });
                lineOption.attributes = _.extend({}, productOption.attributes, lineOption.attributes);
            });

            if (isMatrixItem) {
                line.get('item').set('matrix_parent', product.get('item'));
            }

            return line;
        }
    });
});


define('TelQuest.FakeMatrix.FakeMatrix.LiveOrder.Model', [
    'LiveOrder.Model',
    'underscore'
], function (
    LiveOrderModel,
    _
) {
    _.extend(LiveOrderModel.prototype, {
        getItemsRelated: function getItemsRelated() {
            var relatedItems = [];
            var item;
            var itemsRelated;
            this.get('lines').each(function eachLine(line) {
                item = line.get('item');
                itemsRelated = item.get('custitem_awa_related_items') || item.get('_matrixParent').get('custitem_awa_related_items') || '';
                itemsRelated = itemsRelated && itemsRelated[itemsRelated.length-1] === ',' ? itemsRelated.substring(0, itemsRelated.length-1) : itemsRelated;
                itemsRelated = (itemsRelated && itemsRelated.split(',')) || [];
                if (itemsRelated && itemsRelated.length) {
                    relatedItems = _.union(relatedItems, itemsRelated);
                }
            });
            return relatedItems;
        }
    });
});


define('TelQuest.FakeMatrix.FakeMatrix.MyAccount', [
    'TelQuest.FakeMatrix.FakeMatrix.RequestQuoteWizard'
], function FakeMatrixMyAccount() {
});


define('TelQuest.FakeMatrix.FakeMatrix.Product.Model', [
    'Product.Model',
    'underscore'
], function (
    ProductModel,
    _
) {
        _.extend(ProductModel.prototype, {
            getImages: _.wrap(ProductModel.prototype.getImages, function(fn) {
                var images = fn.apply(this, _.toArray(arguments).slice(1));
                var selectedChilds = this.getSelectedMatrixChilds();
                var item = this.get('item');
                var itemVideo = item.get('custitem_youtube_id') || '';
                var childImages = [];
                if (selectedChilds && selectedChilds.length > 0) {
                    _.each(selectedChilds, function eachChildImage(selectedChild) {
                        if (!_.isEmpty(selectedChild.get('itemimages_detail'))) {
                            childImages = _.union(childImages, selectedChild.getImages());
                        }
                    });
                }
                if (childImages.length) {
                    images = childImages;
                }
                if (images.length === 1 && images[0].url.indexOf('no_image_available') > -1 && itemVideo) {
                    // I want to show by default the video thumb instead of the no image.
                    images = [{
                        youtubeId: itemVideo,
                        altimagetext: item.get('_name'),
                        url: 'http://img.youtube.com/vi/' + itemVideo + '/0.jpg'
                    }];
                }
                else if (itemVideo) {
                    // If product has images and videos, then push it to the array
                    images.push({
                        youtubeId: itemVideo,
                        altimagetext: item.get('_name'),
                        url: 'http://img.youtube.com/vi/' + itemVideo + '/0.jpg'
                    });
                }
                return images;
            })
        });
    });


define('TelQuest.FakeMatrix.FakeMatrix.ProductDetails.Full.View', [
    'ProductDetails.Full.View',
    'ItemRelations.Related.View',
    'ItemRelations.Correlated.View',
    'SC.Configuration',
	'Item.Model',
	'ProductDetails.Options.Selector.View',
    'ProductDetails.Base.View',
    'ProductDetails.QuickView.View',
	'Profile.Model',
    'underscore'
], function (
    ProductDetailsFullView,
    ItemRelationsRelatedView,
    ItemRelationsCorrelatedView,
    Configuration,
	ItemModel,
	ProductDetailsOptionsSelectorView,
    ProductDetailsBaseView,
    ProductDetailsQuickViewView,
	ProfileModel,
    _
) {

    _.extend(ProductDetailsBaseView.prototype, {

        selectDefaultCondition: function selectDefaultCondition() {
            var conditionsToSelect = _.filter(Configuration.get('fakematrix.options'), function matrixOptionFilter(matrixOption) {
                return !!matrixOption.defaultValue;
            });
            var self = this;
            var conditionToSelect;
            var selectedMatrixOptions = this.model.getMatrixOptionsSelection();
            var matrixOptions = this.model.get('item').getPosibleOptions().where({ isMatrixDimension: true });
            var conditionOption;
            if (!selectedMatrixOptions || _.isEmpty(selectedMatrixOptions)) {
                if (matrixOptions && matrixOptions.length) {
                    _.each(conditionsToSelect, function eachConditionToSelect(matrixOption) {
                        conditionOption = _.findWhere(matrixOptions, function matrixOptionsWhere(option) {
                            return '' + option.get('cartOptionId') === '' + matrixOption.fieldId;
                        });
                        if (conditionOption) {
                            self.model.setOption(matrixOption.fieldId, matrixOption.defaultValue);
                        }
                    });
                }
            }
			//this.model.on('click change',self.render,self);
        }
    });

    _.extend(ProductDetailsQuickViewView.prototype, {
        initialize: _.wrap(ProductDetailsQuickViewView.prototype.initialize, function initialize(fn) {
			var self=this;
            fn.apply(this, _.toArray(arguments).slice(1));
            this.selectDefaultCondition();
        })
    });

    _.extend(ProductDetailsFullView.prototype, {
        initialize: _.wrap(ProductDetailsFullView.prototype.initialize, function initialize(fn) {
            var self = this;
            fn.apply(this, _.toArray(arguments).slice(1));
			console.log('self',self);
            this.model.on('change', function onChange() {
                if (!self.model.changed.quantity) {
                    self.generateViewBindings();
                    //self.showContent(true);
                }
            }) ; 
			//this.on('afterViewRender',this.render,this);
            this.selectDefaultCondition();
        }),

        childViews: _.extend(ProductDetailsFullView.prototype.childViews, {
            'Related.Items': function RelatedItems() {
                var relatedItems = this.model.get('item').get('custitem_awa_related_items');
				console.log('relatedItemsmodel',this.model);
				console.log('relatedItems',relatedItems);
                if (relatedItems && relatedItems.length) { // TODO: review if this is always this way or only if its a fake matrix
                    if (relatedItems[relatedItems.length-1] === ',') {
                        relatedItems = relatedItems.substring(0, relatedItems.length-1);
                    }

                    if (relatedItems && relatedItems.length) {
                        return new ItemRelationsRelatedView({
                            itemsIds: relatedItems.split(','),
                            application: this.application
                        });
                    }
                }
            },

            'Correlated.Items': function CorrelatedItems() {
                var itemsIds = this.model.get('item').get('internalid');
                if (this.model.get('item').get('_isParent')) {
                    itemsIds = this.model.get('item').get('_matrixChilds').pluck('internalid');
                }
                if (itemsIds && !_.isEmpty(itemsIds)) {
                    return new ItemRelationsCorrelatedView({
                        itemsIds: itemsIds,
                        application: this.application
                    });
                }
            }
        })
		, getContext: _.wrap(ProductDetailsFullView.prototype.getContext, function getContext(fn) {
			 var retVal = fn.apply(this, _.toArray(arguments).slice(1));
			 var self=this;
			 var profileinstance = ProfileModel.getInstance();
			 console.log('Cust login', profileinstance.get('isLoggedIn')); 
			 var custlgin = profileinstance.get('isLoggedIn');
			  _.extend(retVal, {
							isLoggedIn:custlgin=='T' ? true : false
							
							}); 
							return retVal;
		 })
    });
});


define('TelQuest.FakeMatrix.FakeMatrix.ProductLine.Common.Image', [
    'ProductLine.Common.Image',
    'ProductList.Item.Model',
    'ProductList.CartSaveForLater.View',
    'ProductLine.Common',
    'Product.Model',
    'Item.Model',
    'ProductLine.Common.Url',
    'underscore'
], function (
    ProductLineCommonImage,
    ProductListItemModel,
    ProductListCartSaveForLaterView,
    ProductLineCommon,
    ProductModel,
    Item,
    ProductLineCommonUrl,
    _
) {
    var FakeCommonImages = {
        getThumbnail: _.wrap(ProductLineCommonImage.getThumbnail, function getThumbnail(fn) {
            var thumbnail = fn.apply(this, _.toArray(arguments).slice(1));
            var selectedChilds = this.getSelectedMatrixChilds();
            var childImages = [];
            if (selectedChilds && selectedChilds.length > 0) {
                _.each(selectedChilds, function eachChildImage(selectedChild) {
                    if (!_.isEmpty(selectedChild.get('itemimages_detail'))) {
                        childImages = _.union(childImages, [selectedChild.getThumbnail()]);
                    }
                });
            }

            if (childImages.length) {
                return childImages[0];
            }
            return thumbnail;
        })
    };

    _.extend(ProductLineCommonImage, FakeCommonImages);
    _.extend(ProductLineCommon, FakeCommonImages);
    _.extend(ProductLineCommonUrl, FakeCommonImages);
    _.extend(ProductListCartSaveForLaterView.prototype, FakeCommonImages);
    _.extend(ProductModel.prototype, FakeCommonImages);
    _.extend(ProductListItemModel.prototype, FakeCommonImages);
});


define('TelQuest.FakeMatrix.FakeMatrix.ProductLine.Common', [
    'ProductLine.Common',
    'Product.Model',
    'Transaction.Line.Model',
    'underscore'
], function (
    ProductLineCommon,
    ProductModel,
    TransactionLineModel,
    _
) {
    var ProductLineCommonFakeMatrix = {
        extendOptionsFromItem: function extendOptionsFromItem(item, productline) {
            var options = productline.get('options');
			
            console.log('options11',options);
			console.log('item11',item);
            // Here we make sure that the options collection of the line always
            // (event when the line is loaded from an already created transaction via SuiteScript) have all the properties
            item.get('options').each(function eachOption(itemOption) {
                // IMPORTANT: The comparison here is done in lowercase because both the LiveOrder.Model and the Transaction.Model in
                // the back-end send their option in lower case. However the search API returns some option (Gift certificate ones) in
                // Uppercase and this case is require to be preserved so the Commerce API actually add the item into the cart.
                var itemOptionCartId = itemOption.get('cartOptionId').toLowerCase();
                var productlineOption = productline.get('options').find(function findOption(productOption) {
                    return productOption.get('cartOptionId').toLowerCase() === itemOptionCartId;
                });
                var selectedOption;

                if (!productlineOption && productline.get('item').get('_isChild') && productline.get('item').get(itemOptionCartId)) {
                    selectedOption = _.findWhere(itemOption.get('values'), { label: '' + productline.get('item').get(itemOptionCartId) });

                    if (selectedOption) {
                        itemOption.set('value', selectedOption);
                        productlineOption = itemOption;
                        options.push(itemOption);
                    }
                }

                if (productlineOption) {
                    productlineOption.attributes = _.extend({}, productlineOption.attributes, itemOption.attributes);
                }
            });

            productline.set('options', options);
        }
    };


    _.extend(ProductLineCommon, ProductLineCommonFakeMatrix);
    _.extend(ProductModel.prototype, ProductLineCommonFakeMatrix);
    _.extend(TransactionLineModel.prototype, ProductLineCommonFakeMatrix);
});


define('TelQuest.FakeMatrix.FakeMatrix.ProductLine.Url', [
    'ProductLine.Common.Url',
    'underscore',
    'Utils',
    'PluginContainer',
    'SC.Configuration'
], function (
    ProductLineCommonUrl,
    _,
    Utils,
    PluginContainer,
    Configuration
) {
    'use strict';

    _.extend(ProductLineCommonUrl, {
        getFullLink: function getFullLink(parametersToOverride) {
            var url;
            var linkAttributes;
            _.extend(parametersToOverride, this.get('item').get('_getChildSelectedOptions'));
            url = this.generateURL(parametersToOverride);
            linkAttributes = {
                href: url
            };
            if (SC.ENVIRONMENT.siteSettings.sitetype === 'ADVANCED') {
                _.extend(linkAttributes, {
                    data: {
                        touchpoint: 'home',
                        hashtag: Configuration.get('currentTouchpoint') !== 'home' ? encodeURIComponent(url) : url
                    }
                });
            }
            return Utils.objectToAtrributes(linkAttributes);
        }
    });
});


define('TelQuest.FakeMatrix.FakeMatrix.ProductViews.Price.View', [
    'ProductViews.Price.View',
    'Profile.Model',
    'Session',
    'SC.Configuration',
    'product_views_price.tpl',
    'Backbone',
    'underscore'
], function (
    ProductViewsPriceView,
    ProfileModel,
    Session,
    Configuration,
    productViewsPriceTpl,
    Backbone,
    _
) {
    'use strict';

    _.extend(ProductViewsPriceView.prototype, {
        showFakeMatrixPriceOptions: function showFakeMatrixPriceOptions() {
            return this.model.get('item') && this.model.get('item').get('_isParent') && this.options.origin === 'ITEMCELL';
        },
        getFakeMatrixPriceOptions: function getFakeMatrixPriceOptions() {
            var priceOpts = [];
            this.model.get('item').get('_matrixChilds').each(function eachRelatedItem(currentChild) {
                var exists = _.findWhere(priceOpts, { custitem_awa_condition: currentChild.get('custitem_awa_condition') });
				console.log('exists',exists);

                var onlinePrice = currentChild.get('_priceDetails') || {};

                if(currentChild.get('custitem_awa_condition')==="New") {



                    if (exists) {
                        if (onlinePrice.onlinecustomerprice < exists.price) {
                            exists.internalid = currentChild.get('internalid');
                            exists.priceFormatted = onlinePrice.onlinecustomerprice_formatted;
                            exists.price = onlinePrice.onlinecustomerprice;
                            exists.comparePrice = currentChild.get('_comparePriceAgainst'),
                                exists.comparePriceFormatted = currentChild.get('_comparePriceAgainstFormated'),
                                exists.showComparePrice = currentChild.get('_comparePriceAgainst') > onlinePrice.onlinecustomerprice
                        }
                    } else {
                        priceOpts.push({
                            internalid: currentChild.get('internalid'),
                            isNew: currentChild.get('custitem_awa_condition') === 'New',
                            isLikeNew: currentChild.get('custitem_awa_condition') === 'Like New',
                            isRecertified: currentChild.get('custitem_awa_condition') === 'Recertified',
                            OnlinePriceOnly: currentChild.get('custitem_webstore_online_price_only'),
                            custitem_awa_condition: currentChild.get('custitem_awa_condition'),
                            priceFormatted: onlinePrice.onlinecustomerprice_formatted,
                            price: onlinePrice.onlinecustomerprice,
                            comparePrice: currentChild.get('_comparePriceAgainst'),
                            comparePriceFormatted: currentChild.get('_comparePriceAgainstFormated'),
                            showComparePrice: currentChild.get('_comparePriceAgainst') > onlinePrice.onlinecustomerprice
                        });
                    }

                }
            });

            priceOpts = _.sortBy(priceOpts, 'custitem_awa_condition');

            return priceOpts;
        },

        showFakeMatrixPriceOptionsRecertified: function showFakeMatrixPriceOptionsRecertified() {
            return this.model.get('item') && this.model.get('item').get('_isParent') && this.options.origin === 'ITEMCELL';
        },
        getFakeMatrixPriceOptionsRecertified: function getFakeMatrixPriceOptionsRecertified() {
            var priceOptsRecertified = [];
            this.model.get('item').get('_matrixChilds').each(function eachRelatedItem(currentChild) {
                var exists = _.findWhere(priceOptsRecertified, { custitem_awa_condition: currentChild.get('custitem_awa_condition') });
				console.log('exists',exists);
                var onlinePrice = currentChild.get('_priceDetails') || {};

                if(currentChild.get('custitem_awa_condition')==="Recertified") {


                    if (exists) {
                        if (onlinePrice.onlinecustomerprice < exists.price) {
                            exists.internalid = currentChild.get('internalid');
                            exists.priceFormatted = onlinePrice.onlinecustomerprice_formatted;
                            exists.price = onlinePrice.onlinecustomerprice;
                            exists.comparePrice = currentChild.get('_comparePriceAgainst'), exists.comparePriceFormatted = currentChild.get('_comparePriceAgainstFormated'), exists.showComparePrice = currentChild.get('_comparePriceAgainst') > onlinePrice.onlinecustomerprice
                        }
                    } else {
                        priceOptsRecertified.push({
                            internalid: currentChild.get('internalid'),
                            isNew: currentChild.get('custitem_awa_condition') === 'New',
                            isLikeNew: currentChild.get('custitem_awa_condition') === 'Like New',
                            isRecertified: currentChild.get('custitem_awa_condition') === 'Recertified',
                            catalog: currentChild.get('custitem_catalog'),
                            custitem_awa_condition: currentChild.get('custitem_awa_condition'),
                            priceFormatted: onlinePrice.onlinecustomerprice_formatted,
                            price: onlinePrice.onlinecustomerprice,
                            comparePrice: currentChild.get('_comparePriceAgainst'),
                            comparePriceFormatted: currentChild.get('_comparePriceAgainstFormated'),
                            showComparePrice: currentChild.get('_comparePriceAgainst') > onlinePrice.onlinecustomerprice
                        });
                    }

                }
            });

            priceOptsRecertified = _.sortBy(priceOptsRecertified, 'custitem_awa_condition');

            return priceOptsRecertified;
        },




        getContext: _.wrap(ProductViewsPriceView.prototype.getContext, function getContext(fn) {
            return _.extend(fn.apply(this, _.toArray(arguments).slice(1)), {
                fakeMatrixPrices: this.showFakeMatrixPriceOptions() ? this.getFakeMatrixPriceOptions() : false,
                recertifiedMessage: Configuration.get('recertifiedhelpinformation'),
                newMessage: Configuration.get('newhelpinformation'),
                likeNewMessage: Configuration.get('likehelpinformation'),
                fakeMatrixPricesRecertified: this.showFakeMatrixPriceOptionsRecertified() ? this.getFakeMatrixPriceOptionsRecertified() : false
            });
        })

    });
});


// @module QuickAdd
define('TelQuest.FakeMatrix.FakeMatrix.QuickAdd.ItemsSearcher.Plugins', [
    'QuickAdd.ItemsSearcher.Plugins',
    'Item.Model',
    'Product.Model',
    'Product.Collection',
    'underscore'
], function (
    QuickAddItemsSearcherPlugins,
    ItemModel,
    ProductModel,
    ProductCollection,
    _
) {
    'use strict';

    _.extend(QuickAddItemsSearcherPlugins.flatItemsMatrixResult, {
        execute: function execute(collection, configuration) {
            // Current item that is begin processed
            var products = [];
                // Variable that contains the new product created from all parent matrix items to generated one items per child
                // We do this to flat the list of items in the collection
            var newProduct;
                // List of option for the current child item
            var itemOptions;
                // Counter used to emulate the ids of the new products. This is required so the ItemSearcher can identify selected products in the result list
            var internalidCounter = 1;

            collection.each(function eachCollection(item) {
                if (item.get('isinstock') || (item.get('isbackorderable') || configuration.showBackorderables)) {
                    if (item.get('_matrixChilds') && item.get('_matrixChilds').length) {
                        itemOptions = item.get('options').where({ isMatrixDimension: true });

                        item.get('_matrixChilds').each(function eachcMatrixChild(childItem) {
                            var itemimagesDetail;
                            newProduct = new ProductModel({
                                item: new ItemModel(_.extend({}, item.attributes))
                            });

                            _.each(itemOptions, function eachItemOption(option) {
                                var selectedChildItemOptionLabel = childItem.get(option.get('itemOptionId'));
                                var selectedOptionValueObject = _.findWhere(option.get('values'), { label: selectedChildItemOptionLabel });

                                newProduct.setOption(option.get('cartOptionId'), selectedOptionValueObject.internalid);
                            });

                            // Give than the behavior to extract thumbnail images is based on the current selected item (thought for lines)
                            // we provide all children with the image object
                            itemimagesDetail = newProduct.getItem().get('itemimages_detail');
                            if (!itemimagesDetail || _.isEmpty(itemimagesDetail)) {
                                itemimagesDetail = item.get('itemimages_detail');
                            }
                            newProduct.getItem().set('itemimages_detail', itemimagesDetail);

                            newProduct.set('isfulfillable', item.get('isfulfillable'));
                            newProduct.set('internalid', internalidCounter++);
                            // newProduct.set('matrix_parent', item);
                            // newProduct.set('_matrixParent', item);
                            products.push(newProduct);
                        });
                    } else {
                        products.push(new ProductModel({
                            item: item,
                            internalid: internalidCounter++
                        })
                        );
                    }
                }
            });

            products = _.filter(products, function filterProduct(product) {
                var queryOnSku = (product.getSku() ? product.getSku().toUpperCase() : '').indexOf(configuration.query.toUpperCase()) >= 0;
                var queryOnName = (product.get('item').get('_name') ? product.get('item').get('_name').toUpperCase() : '')
                    .indexOf(configuration.query.toUpperCase()) >= 0;
                var itemNotGiftCertificate = product.get('item').get('itemtype') !== 'GiftCert';

                return itemNotGiftCertificate && (queryOnName || queryOnSku);
            });

            return new ProductCollection(_.first(products, configuration.limit));
        }
    });
});


define('TelQuest.FakeMatrix.FakeMatrix.QuickAdd.View', [
    'QuickAdd.View',
    'underscore'
], function (
    QuickAddView,
    _
) {
    _.extend(QuickAddView.prototype, {
        onItemSelected: function onItemSelected(result) {
            // As the item searcher has been thought to work with items the property is called selectedItem, but we changed in the installed
            // plugin to use Products
            var product = result.selectedItem;
            var item;
            var minimumQuantity;

            if (product) {
                item = product.getItem();
                item.set('_matrixParent', product.get('item'));

                this.model.set('quickaddSearch', item.get('_name'));
                this.model.set('selectedProduct', product);

                this.setDefaultQuantity(item.get('_minimumQuantity', true), item.get('internalid'));
                this.$('[name="quantity"]').focus();
                this.selectAll();

                minimumQuantity = item.get('_minimumQuantity', true);

                if (minimumQuantity > 1) {
                    this.$('[data-type="minimum-quantity"]').html(_('Minimum of $(0) required').translate(minimumQuantity));
                }

                this.$('[data-validation-error="block"]').remove();
            } else {
                this.model.unset('selectedProduct');
                this.$('[data-type="minimum-quantity"]').empty();
            }
        }
    });
});


define('TelQuest.FakeMatrix.FakeMatrix.RequestQuoteWizard', [
    'RequestQuoteWizard',
    'ProductList.Item.Model',
    'underscore'
], function FakeMatrixRequestQuoteWizard(
    RequestQuoteWizard,
    ProductListItemModel,
    _
) {
    _.extend(RequestQuoteWizard, {
        doAddItemToList: function doAddItemToList(product) {
            var productListLine = ProductListItemModel.createFromProduct(product);

            if (product.get('item').get('_matrixParent').id) {
                // As the quote is a line, it will only save the child item, but product list saves the parent item
                // so we override the item with the parent one
                if (!product.get('item').get('_isChild')) {
                    productListLine.set('item', product.get('item').get('_matrixParent'), { silent: true });
                }
            }

            productListLine.set('productList', {
                id: this.pl_internalid
            });

            productListLine.save(null, {
                // Note this is lack of validation is require to not validate the JSON returned from the services
                // as it will lack the Model/Collection structure required to run the validation.
                // for example the list of options will be an array and not a collection as the event handle that parse them didn't run yet
                validate: false
            }).done(function saveProductLitLineDone(obj) {
                product.set('pl_item_internalid', obj.internalid, { silent: true });
            });
        }
    });
});


define('TelQuest.FakeMatrix.FakeMatrix.Transaction.Line.Model', [
    'Transaction.Line.Model',
    'underscore'
], function FakeMatrixProductLineCommonImage(
    TransactionLineModel,
    _
) {
    _.extend(TransactionLineModel, {
        createFromProduct: function createFromProduct(product) {
            var line = new TransactionLineModel(product.toJSON());
            var item = product.get('item');
            var itemImagesDetail = item.get('itemimages_detail');
            var isMatrixItem = !!item.get('_matrixChilds').length;
            var children = product.getSelectedMatrixChilds();
            var price = product.getPrice();
            if (children && children.length) {
                itemImagesDetail = children[0].get('itemimages_detail');
            }

            if (_.isEqual(itemImagesDetail, {}) && item.get('_matrixParent').get('internalid') && item.get('_matrixParent').get('itemimages_detail')) {
                itemImagesDetail = item.get('_matrixParent').get('itemimages_detail');
            }

            line.set('item', product.getItem().clone(), { silent: true });
            line.get('item').set('itemimages_detail', itemImagesDetail, { silent: true });
            line.get('item').set('_name', item.get('_name'), { silent: true });

            line.set('minimumquantity', product.get('item').minimumquantity);

            if (isMatrixItem) {
                line.get('item').set('matrix_parent', product.get('item'));
            }

            line.set('rate', price.price, { silent: true });
            line.set('rate_formatted', price.price_formatted, { silent: true });

            product.get('options').each(function eachOption(productOption) {
                var lineOption = line.get('options').findWhere({ cartOptionId: '' + productOption.get('cartOptionId') });
                lineOption.attributes = _.extend({}, productOption.attributes, lineOption.attributes);
            });

            return line;
        }
    });
});


define('TelQuest.FakeMatrix.ItemRelations', [
    'ItemRelations.Related.View',
    'ItemRelations.Correlated.View',
    'Cart.Detailed.View'
], function (
    ItemRelationsRelatedView,
    ItemRelationsCorrelatedView,
    CartDetailedView
) {
    'use strict';

    return {
        // @method mountToApp
        // @param {ApplicationSkeleton} application
        // @return {Void}
        mountToApp: function mountToApp(application) {
            CartDetailedView.addChildViews({
                'Correlated.Items': function wrapperFunction(options) { // eslint-disable-line consistent-return
                    var itemsIds = options.model.getItemsIds();
                    if (itemsIds && itemsIds.length) {
                        return function CorrelatedItems() {
                            return new ItemRelationsCorrelatedView({
                                itemsIds: itemsIds,
                                application: application
                            });
                        };
                    }
                },
                'Related.Items': function wrapperFunction(options) {
                    return function relatedView() { // eslint-disable-line consistent-return
                        var itemsIds = options.model.getItemsRelated();
                        if (itemsIds && itemsIds.length) {
                            return new ItemRelationsRelatedView({
                                itemsIds: itemsIds,
                                application: application
                            });
                        }
                    };
                }
            });
        }
    };
});


define('TelQuest.FakeMatrix.FakeMatrix.ProductDetails.Router', [
    'ProductDetails.Base.View',
    'Product.Model',
    'ProductDetails.Full.View',
    'ProductDetails.QuickView.View',

    'Backbone',
    'AjaxRequestsKiller',
    'Utils',
    'underscore'
], function (
    ProductDetailsBaseView,
    ProductModel,
    ProductDetailsFullView,
    ProductDetailsQuickView,

    Backbone,
    AjaxRequestsKiller,
    Utils,
    _
) {
    _.extend(ProductDetailsBaseView.prototype, {
			getView: function()
		{
			if (this.application.getLayout().isShowContentRewritten)
			{
				return ProductDetailsQuickView;
			}
			return ProductDetailsFullView;
		},
        productDetails: function(apiQuery, options) {
			var self=this;
			console.log('baseurl', self.base_url)
            var application = this.application;
            var product = this.model;
			var promise = jQuery.Deferred();
           // var ViewConstructor = self.getView();
            var item = product.get('item');
			console.log('item',item);
           // var view;
          item.fetch({
                data: apiQuery,
                killerId: AjaxRequestsKiller.getKillerId(),
				async:true
            }).then(
                // Success function
                function(data, result, jqXhr) {
					//self.render();
					  //promise.resolve(false);
                    if (!item.get('custitem_display_sca')) {
						//promise.resolve(true);
                        //return application.getLayout().notFound();
                        return promise.reject();
                    }
                    if (item.get('_isChild')) {
                        Backbone.history.navigate(item.get('_getParentUrl'), { trigger: true, replace: true });
                    } else if (!item.isNew()) {
                        // once the item is fully loaded we set its options
                        product.setOptionsFromURL(options);

                        product.set('source', options && options.source);

                        product.set('internalid', options && options.internalid);

                        if (apiQuery.id && item.get('urlcomponent') && SC.ENVIRONMENT.jsEnvironment === 'server') {
                            nsglobal.statusCode = 301;
                            nsglobal.location = product.generateURL();
                        }

                        if (data.corrections && data.corrections.length > 0) {
                            if (item.get('urlcomponent') && SC.ENVIRONMENT.jsEnvironment === 'server') {
                                nsglobal.statusCode = 301;
                                nsglobal.location = data.corrections[0].url + product.getQuery();
                            } else {
                                return Backbone.history.navigate('#' + data.corrections[0].url + product.getQuery(), { trigger: true });
								 promise.reject();
                            }
                        }
						self.bindModel();
                        promise.resolve();
                         /* var view = new ViewConstructor({
                            model: product,
                            baseUrl: self.base_url,
                            application: application
                        });
                        // then we show the content
                        view.showContent();  */
						self.selectDefaultCondition();
                    } else if (jqXhr.status >= 500) {
                        //application.getLayout().internalError();
						 promise.reject();
                    } else if (jqXhr.responseJSON.errorCode !== 'ERR_USER_SESSION_TIMED_OUT') {
                        // We just show the 404 page
                        //application.getLayout().notFound();
					   promise.reject();
                    }

                    //return true;
                }, function(jqXhr) {
                    // Error function
                    // this will stop the ErrorManagment module to process this error
                    // as we are taking care of it
                    try {
                        jqXhr.preventDefault = true;
                    } catch (e) {
                        console.log(e.message);
                    }

                    if (jqXhr.status >= 500) {
                        //application.getLayout().internalError();
						promise.reject();
                    } else if (jqXhr.responseJSON.errorCode !== 'ERR_USER_SESSION_TIMED_OUT') {
                        // We just show the 404 page
                      //application.getLayout().notFound();
					     promise.reject();
                    }
                }
            );
			return promise;
        }
    });
});


// @module TelQuest.FakeMatrix.FakeMatrix
define('TelQuest.FakeMatrix.FakeMatrix.CustomList.Values.Model'
,	[
	   'Backbone'
	,  'underscore'
	,  'Utils'
	]
,	function (
     Backbone
	,	_
	,	Utils
	
	)
{
    'use strict';
    return Backbone.Model.extend({
        //urlRoot: _.getAbsoluteUrl(getExtensionAssetsPath('services/FakeMatrix.Service.ss'))
    });
});


define('TelQuest.FakeMatrix.FakeMatrix.Information.Tabs', [
    'ProductDetails.Information.View',
    'SC.Configuration',
    'jQuery',
    'Utils',
    'underscore'
], function(
    ProductDetailsInformationView,
    Configuration,
    jQuery,
    Utils,
    _
) {
    'use strict';

    _.extend(ProductDetailsInformationView.prototype, {
        computeDetailsArea: function computeDetailsArea() {
            var self = this;
            var details = [];
            var label;
            _.each(Configuration.get('productDetailsInformation', []), function eachItemInformation(itemInformation) {
                var content = '';
                if (itemInformation.contentFromKey) {
                    content = self.model.get('item').get(itemInformation.contentFromKey);
					console.log('content',content);
                    if (itemInformation.contentFromKey.match(/custitem_awa_tab[0-9]content/g)) {
                        label = itemInformation.contentFromKey.replace('content', 'label');
						console.log('label',label);
                        if (self.model.get('item').get(label)) {
                            itemInformation.name = self.model.get('item').get(label);
                        }
                    }
                    if (self.model.get('item').get('custitem_awa_show_child_info') && self.model.getSelectedMatrixChilds().length === 1) {
                        content = self.model.getSelectedMatrixChilds()[0].get(itemInformation.contentFromKey) || content;
                    }
                }
                if (content && Utils.trim(content)) {
                    // @class ProductDetails.Information.DataContainer
                    details.push({
                        // @property {String} name
                        name: itemInformation.name,
                        // @property {String} content Any string and event valid HTML is allowed
                        content: content,
                        // @property {String} itemprop
                        itemprop: itemInformation.itemprop
                    });
                    // @class ProductDetails.Information.View
                }
            });
            return details;
        }
    });
});



define(
	'TelQuest.FakeMatrix.FakeMatrix'
,   [
	'TelQuest.FakeMatrix.FakeMatrix.Item.KeyMapping',
	'telquest_fakematrix_cart_quickaddtocart.tpl',
	'telquest_fakematrix_information.tpl',
    'TelQuest.FakeMatrix.FakeMatrix.ProductDetails.Router',
    'TelQuest.FakeMatrix.FakeMatrix.Product.Model',
    'TelQuest.FakeMatrix.FakeMatrix.LiveOrder.Line.Model',
    'TelQuest.FakeMatrix.FakeMatrix.ProductDetails.Full.View',
    'TelQuest.FakeMatrix.FakeMatrix.ProductLine.Common',
    'TelQuest.FakeMatrix.FakeMatrix.Configuration',
    'TelQuest.FakeMatrix.FakeMatrix.ProductViews.Price.View',
    'TelQuest.FakeMatrix.FakeMatrix.ProductLine.Common.Image',
    'TelQuest.FakeMatrix.FakeMatrix.QuickAdd.ItemsSearcher.Plugins',
    'TelQuest.FakeMatrix.FakeMatrix.QuickAdd.View',
    'TelQuest.FakeMatrix.FakeMatrix.ItemRelations.Related.Collection',
    'TelQuest.FakeMatrix.FakeMatrix.ItemRelations.Correlated.Collection',
    'TelQuest.FakeMatrix.FakeMatrix.Item.Model.Url',
    'TelQuest.FakeMatrix.FakeMatrix.LiveOrder.Model',
    'TelQuest.FakeMatrix.FakeMatrix.Transaction.Line.Model',
    'TelQuest.FakeMatrix.FakeMatrix.ProductLine.Url',
    'TelQuest.FakeMatrix.FakeMatrix.Cart.QuickAddToCart.View',
	'Cart.QuickAddToCart.View',
	'ProductDetails.Information.View',
	'TelQuest.FakeMatrix.ItemRelations',
	'TelQuest.FakeMatrix.FakeMatrix.Information.Tabs'
	]
,   function (
        FakeMatrixItemKeyMapping,
		cart_quickaddtocarttpl,
		fakematrix_informationtpl,
		FakeMatrixProductDetailsRouter,
		FakeMatrixProductModel,
		FakeMatrixLiveOrderLineModel,
	    FakeMatrixProductDetailsFullView,
        FakeMatrixProductLineCommon,
        FakeMatrixConfiguration,
		FakeMatrixProductViewsPriceView,
		FakeMatrixProductLineCommonImage,
		FakeMatrixQuickAddItemsSearcherPlugins,
		FakeMatrixQuickAddView,
		FakeMatrixItemRelationsRelatedCollection,
		FakeMatrixItemRelationsCorrelatedCollection,
		FakeMatrixItemModelUrl,
		FakeMatrixLiveOrderModel,
		FakeMatrixTransactionLineModel,
		FakeMatrixProductLineUrl,
		FakeMatrixCartQuickAddToCartView,
		CartQuickAddToCartView,
		ProductDetailsInformationView,
		ItemRelations,
		FakeMatrixInformationTabs
	)
{
	'use strict';
	return  {
		mountToApp: function mountToApp (container)
		{
			CartQuickAddToCartView.prototype.template=cart_quickaddtocarttpl;
			ProductDetailsInformationView.prototype.template=fakematrix_informationtpl;
		}
	};
});


};

extensions['TelQuest.MSRPPrice.1.0.0'] = function(){

function getExtensionAssetsPath(asset){
	return 'extensions/TelQuest/MSRPPrice/1.0.0/' + asset;
}

// @module TelQuest.MSRPPrice.MSRPPrice
define('TelQuest.MSRPPrice.MSRPPrice.View'
,	[
		'telquest_msrpprice_msrpprice.tpl'
	,	'ProductViews.Price.View'
	,	'Utils'
	,	'Backbone'
	,	'jQuery'
	,	'underscore'
	]
,	function (
		telquest_msrpprice_msrpprice_tpl
	,  ItemViewsPriceView
	,	Utils
	,	Backbone
	,	jQuery
	,	_
	)
{
	'use strict';

	// @class TelQuest.MSRPPrice.MSRPPrice.View @extends Backbone.View
	return Backbone.View.extend({

		template: telquest_msrpprice_msrpprice_tpl

	,	initialize: function (options) {

			/*  Uncomment to test backend communication with an example service 
				(you'll need to deploy and activate the extension first)
			*/
			this.message = '';
			// var service_url = Utils.getAbsoluteUrl(getExtensionAssetsPath('services/MSRPPrice.Service.ss'));

			// jQuery.get(service_url)
			// .then((result) => {

			// 	this.message = result;
			// 	this.render();
			// });
		}

	,	events: {
		}

	,	bindings: {
		}

	, 	childViews: {
			
		}

		//@method getContext @return TelQuest.MSRPPrice.MSRPPrice.View.Context
	,	getContext: function getContext()
		{
			//@class TelQuest.MSRPPrice.MSRPPrice.View.Context
			var priceRetail = this.model.getRetailPrice().unformatted;
			 var priceRetailFormatted = this.model.getRetailPrice().formatted;
			return {
				priceRetail: priceRetail,
				priceRetailFormatted:priceRetailFormatted
			};
		}
	});
});


define(
	'TelQuest.MSRPPrice.MSRPPrice'
,   [
		'TelQuest.MSRPPrice.MSRPPrice.View'
	  ,	'Backbone'
	  , 'SC.Configuration'
	  , 'Product.Model'
	  ,	'ProductViews.Price.View'
	  ,	'telquest_msrpprice_msrpprice.tpl'

	  , 'underscore'
	]
,   function (
		MSRPPriceView
	,	Backbone
	,  Configuration
	, ItemDetailsModel
	, ItemViewsPriceView
	,telquest_msrpprice_msrpprice_tpl
	, _
	)
{
	'use strict';

	return  {
		mountToApp: function mountToApp (container)
		{
			/* Configuration.itemKeyMapping = Configuration.itemKeyMapping || {};
		  _.extend(Configuration.itemKeyMapping,
		  {
			_retailPrice: function _retailPrice(item)
			{
			  return item.get('pricelevel13');
			}
		  , _retailPriceFormatted: function _retailPriceFormatted(item)
			{
			  return item.get('pricelevel13');
			}
		  });
		  ItemDetailsModel.prototype.getRetailPrice = function getRetailPrice()
			{
			  var price_retail = this.get('_retailPrice')
			  , price_retail_formatted = this.get('_retailPriceFormatted');

			  return {
				unformatted: price_retail
			  , formatted: price_retail_formatted
			  };
			}
			//pro
			ItemViewsPriceView.prototype.getContext = _.wrap(ItemViewsPriceView.prototype.getContext, function(fn)
			{
			  var context = fn.apply(this, _.toArray(arguments).slice(1));

			  context.priceRetail = this.model.getRetailPrice().unformatted;
			  context.priceRetailFormatted = this.model.getRetailPrice().formatted;

			  return context;
			}); */

		}
	};
});


};

extensions['TelQuest.Pacejet.1.0.0'] = function(){

function getExtensionAssetsPath(asset){
	return 'extensions/TelQuest/Pacejet/1.0.0/' + asset;
}

// @module TelQuest.Pacejet.Pacejet
define('TelQuest.Pacejet.Pacejet.View'
,	[
		'telquest_pacejet_pacejet.tpl'
	,	'Utils'
	,	'Backbone'
	,	'jQuery'
	,	'underscore'
	]
,	function (
		telquest_pacejet_pacejet_tpl
	,	Utils
	,	Backbone
	,	jQuery
	,	_
	)
{
	'use strict';

	// @class TelQuest.Pacejet.Pacejet.View @extends Backbone.View
	return Backbone.View.extend({

		template: telquest_pacejet_pacejet_tpl

	,	initialize: function (options) {

			/*  Uncomment to test backend communication with an example service 
				(you'll need to deploy and activate the extension first)
			*/
			//this.message = '';
			// var service_url = Utils.getAbsoluteUrl(getExtensionAssetsPath('services/Pacejet.Service.ss'));

			// jQuery.get(service_url)
			// .then((result) => {

			// 	this.message = result;
			// 	this.render();
			// });
		}

	,	events: {
		}

	,	bindings: {
		}

	, 	childViews: {
			
		}

		//@method getContext @return TelQuest.Pacejet.Pacejet.View.Context
	,	getContext: function getContext()
		{
			//@class TelQuest.Pacejet.Pacejet.View.Context
			return {
			};
		}
	});
});


define(
	'TelQuest.Pacejet.Pacejet'
,   [
		'TelQuest.Pacejet.Pacejet.View'
	]
,   function (
		PacejetView
	)
{
	'use strict';

	return  {
		mountToApp: function mountToApp (container)
		{
		}
	};
});


};

extensions['TelQuest.ProductBadges.1.0.0'] = function(){

function getExtensionAssetsPath(asset){
	return 'extensions/TelQuest/ProductBadges/1.0.0/' + asset;
}

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



define(
	'TelQuest.ProductBadges.ProductBadges'
,   [
		'TelQuest.ProductBadges.ProductBadges.View'
	,	'ItemRelations.RelatedItem.View'
    ,   'ProductDetails.Full.View'
    ,   'Facets.ItemCell.View'
    ,   'SC.Configuration'
	]
,   function (
		ProductBadgesView,
		ItemRelationsRelatedItemView,
		ProductDetailsFullView,
		FacetsItemCellView,
		Configuration
	)
{
	'use strict';

	return  {
		ProductBadgesView: ProductBadgesView,
		mountToApp: function mountToApp (container)
		{
			if (Configuration.get('productBadges.badgesEnable')) {
                ItemRelationsRelatedItemView.addChildViews({
                    'ProductBadges': function wrapperFunction() {
                        return new ProductBadgesView({
                            model: this.model
                        });
                    }
                });
                FacetsItemCellView.addChildViews({
                    'ProductBadges': function wrapperFunction() {
                        return new ProductBadgesView({
                            model: this.model
                        });
                    }
                });
                ProductDetailsFullView.addChildViews({
                    'ProductBadges': function wrapperFunction() {
                        return new ProductBadgesView({
                            model: this.model.get('item')
                        });
                    }
                });
            }
		}
	};
});


};

extensions['TelQuest.SiteCart.1.0.0'] = function(){

function getExtensionAssetsPath(asset){
	return 'extensions/TelQuest/SiteCart/1.0.0/' + asset;
}

// @module TelQuest.SiteCart.SiteCart
define('TelQuest.SiteCart.SiteCart.View'
,	[
		'telquest_sitecart_sitecart.tpl'
	,	'Utils'
	,	'Backbone'
	,	'jQuery'
	,	'underscore'
	]
,	function (
		telquest_sitecart_sitecart_tpl
	,	Utils
	,	Backbone
	,	jQuery
	,	_
	)
{
	'use strict';

	// @class TelQuest.SiteCart.SiteCart.View @extends Backbone.View
	return Backbone.View.extend({

		template: telquest_sitecart_sitecart_tpl

	,	initialize: function (options) {

			/*  Uncomment to test backend communication with an example service 
				(you'll need to deploy and activate the extension first)
			*/
			this.message = '';
			// var service_url = Utils.getAbsoluteUrl(getExtensionAssetsPath('services/SiteCart.Service.ss'));

			// jQuery.get(service_url)
			// .then((result) => {

			// 	this.message = result;
			// 	this.render();
			// });
		}

	,	events: {
		}

	,	bindings: {
		}

	, 	childViews: {
			
		}

		//@method getContext @return TelQuest.SiteCart.SiteCart.View.Context
	,	getContext: function getContext()
		{
			//@class TelQuest.SiteCart.SiteCart.View.Context
			this.message = this.message || 'Hello World!!'
			return {
				message: this.message
			};
		}
	});
});

define('TelQuest.SiteCart.HidePrice.Cart.QuickAddToCartView', [
    'Cart.QuickAddToCart.View',
    'ProductViews.Price.View',
    'underscore'
], function HidePriceCartQuickView(
    QuickAddToCartView,
    ProductViewsPriceView,
    _
) {
    'use strict';

   /*  _.extend(QuickAddToCartView.prototype.childViews, {
        'ProductViewsPrice.Price': function ProductViewsPricePrice() {
            if (!this.options.hidePrice) {
                return new ProductViewsPriceView({
                    model: this.model,
                    origin: 'ITEMCELL'
                });
            }
        }
    }); */
});



define(
	'TelQuest.SiteCart.SiteCart'
,   [
		'TelQuest.SiteCart.HidePrice.Cart.QuickAddToCartView'
	]
,   function (
		SiteCartHidePriceCartQuickAddToCartView
	)
{
	'use strict';
	return  {};
});


};

extensions['TelQuest.SiteHeader.1.0.0'] = function(){

function getExtensionAssetsPath(asset){
	return 'extensions/TelQuest/SiteHeader/1.0.0/' + asset;
}

//@module SalesPopup
define(
	'TelQuest.SiteHeader.SalesPopup.View'
	,	[
		'Profile.Model'
		,	'Backbone'
		,  'telquest_siteheader_siteheader.tpl'
		,	'underscore'
		,	'jQuery'

	]
	,	function (
		ProfileModel
		, Backbone
		,   sales_popup_tpl
		,	_
		,	jQuery

	)
	{
		'use strict';

		return Backbone.View.extend({

			//@property {Function} template
			template: sales_popup_tpl,

            title: _('Sales Rep Information').translate(),

            modalClass: 'sales-rep-modal',

			initialize: function (options) {

			},

			getContext: function getContext() {
				var profile = ProfileModel.getInstance();
				var salesrep = profile.get('salesrep');
				console.log('salesrep',salesrep);
				return {
					salesRep : salesrep
				};
			}
		});
	});




define('TelQuest.SiteHeader.SiteHeader.Profile.Site.View',	[
		'Profile.Model'
	,	'Header.Profile.View'
	,	'underscore'
	]
,	function(
		Profile
	,	HeaderProfileView
	,	_
	)
{
	'use strict';

	_.extend(HeaderProfileView.prototype, {
		getContext: _.wrap(HeaderProfileView.prototype.getContext, function (fn) {
			var context = fn.apply(this, _.toArray(arguments).slice(1));
			var profile = Profile.getInstance();
			console.log('profile',profile);
			return _.extend(context, {
				salesrep: profile.get('salesrep')
			});
		})
	})
});


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


define(
	'TelQuest.SiteHeader.SiteHeader'
,   [
		'TelQuest.SiteHeader.SiteHeader.View.ShowSalesRepPopup',
		'TelQuest.SiteHeader.SiteHeader.Profile.Site.View',
		'TelQuest.SiteHeader.SalesPopup.View'
	]
,   function (
		SiteHeaderShowSalesRepPopup,
		SiteHeaderProfileSite,
		SalesPopupView
		
	)
{
	'use strict';

	return  {
		mountToApp: function mountToApp (container)
		{
			

		}
	};
});


};

extensions['TelQuest.SiteSession.1.0.0'] = function(){

function getExtensionAssetsPath(asset){
	return 'extensions/TelQuest/SiteSession/1.0.0/' + asset;
}

// @module TelQuest.SiteSession.SiteSession
define('TelQuest.SiteSession.SiteSession.View'
,	[
		'telquest_sitesession_sitesession.tpl'
	,	'Utils'
	,	'Backbone'
	,	'jQuery'
	,	'underscore'
	]
,	function (
		telquest_sitesession_sitesession_tpl
	,	Utils
	,	Backbone
	,	jQuery
	,	_
	)
{
	'use strict';

	// @class TelQuest.SiteSession.SiteSession.View @extends Backbone.View
	return Backbone.View.extend({

		template: telquest_sitesession_sitesession_tpl

	,	initialize: function (options) {

			/*  Uncomment to test backend communication with an example service 
				(you'll need to deploy and activate the extension first)
			*/
			this.message = '';
			// var service_url = Utils.getAbsoluteUrl(getExtensionAssetsPath('services/SiteSession.Service.ss'));

			// jQuery.get(service_url)
			// .then((result) => {

			// 	this.message = result;
			// 	this.render();
			// });
		}

	,	events: {
		}

	,	bindings: {
		}

	, 	childViews: {
			
		}

		//@method getContext @return TelQuest.SiteSession.SiteSession.View.Context
	,	getContext: function getContext()
		{
			//@class TelQuest.SiteSession.SiteSession.View.Context
			this.message = this.message || 'Hello World!!'
			return {
				message: this.message
			};
		}
	});
});


define(
	'TelQuest.SiteSession.SiteSession'
,   [
	'Session',
    'underscore',
    'SC.Configuration'
	]
,   function (
		Session,
         _,
      Configuration
	)
{
	'use strict';
_.extend(Session, {
        getSearchApiParams: _.wrap(Session.getSearchApiParams, function getSearchApiParams(fn) {
            var searchApiParams = fn.apply(this, _.toArray(arguments).slice(1));
            var masterFacets = Configuration.get('masterFacets.facets');
            _.each(masterFacets, function eachMasterFacet(masterFacet) {
                if (masterFacet.hideFromSearch) {
                    searchApiParams[masterFacet.facetId] = masterFacet.facetValue;
                    _.extend(searchApiParams, {
                        'facet.exclude': searchApiParams['facet.exclude'] ? searchApiParams['facet.exclude'] + ',' + masterFacet.facetId : masterFacet.facetId
                    });
                }
            });
            return searchApiParams;
        })
    });
});


};

extensions['TelQuest.Warranty.1.0.0'] = function(){

function getExtensionAssetsPath(asset){
	return 'extensions/TelQuest/Warranty/1.0.0/' + asset;
}

define('TelQuest.Warranty.Warranty.Cart.Detailed.View', [
    'Cart.Detailed.View',
    'TelQuest.Warranty.Warranty.Line.Modal.View',
    'GlobalViews.Confirmation.View',
    'Backbone.CollectionView',
    'SC.Configuration',
    'AjaxRequestsKiller',
    'LiveOrder.Model',
    'underscore',
    'jQuery',
    'jquery.cookie'
], function WarrantyCartDetailedView(
    CartDetailedView,
    WarrantyLineModalView,
    GlobalViewsConfirmationView,
    BackboneCollectionView,
    Configuration,
    AjaxRequestsKiller,
    LiveOrderModel,
    _,
    jQuery
) {

    _.extend(CartDetailedView.prototype, {

        showContent: _.wrap(CartDetailedView.prototype.showContent, function initialize(fn) {
            var self = this;
            fn.apply(this, _.toArray(arguments).slice(1));
            if (this.allLinesReady()) {
                _.defer(function () {
                    self.model.cartLoad.done(function cartLoadDone() {
                        self.showWarrantyModal();
                    });
                });
            } else {
                this.model.on('change', function onModelChanged() {
                    self.model.cartLoad.done(function cartLoadDone() {
                        self.showWarrantyModal();
                    });
                });
            }
        }),

        allLinesReady: function allLinesReady() {
            return this.model.get('lines').all(function allLines(line) {
                return line.get('internalid');
            });
        },

        getLinesThatAcceptWarranties: function getLinesThatAcceptWarranties() {
            var warrantyLines = jQuery.cookie('warrantyLines') || [];
            return this.model.get('lines').filter(function filterLines(line) {
                var warrantyOption = line.getOption(Configuration.get('warranty.itemOption'));
                return (!line.get('internalid') || (warrantyLines.indexOf(line.get('internalid')) < 0)) &&
                    line.get('item').get('_isWarrantyAvailable') && (!warrantyOption || !warrantyOption.get('value'));
            });
        },
        updateLines: function updateLines(options) {
            var linesToUpdate = options.lines;
            var liveOrder = options.cart;
            var self = this;

            linesToUpdate = linesToUpdate.filter(function filterLinesToUpdate(line) {
				var itmoption=Configuration.get('warranty.itemOption');
                var warrantyOption = line.getOption(itmoption);
                return line.get('internalid') && line.get('item').get('_isWarrantyAvailable') && warrantyOption && warrantyOption.get('value');
            });

            if (linesToUpdate && linesToUpdate.length) {
                liveOrder.model.updateLines(linesToUpdate).done(function doneUpdate() {
                    liveOrder.render();
                    self.$containerModal.modal('hide');
                });
            } else {
                this.showError('You must select at least one warranty to a line.');
            }
        },

        hideWarrantyModal: function hideWarrantyModal() {
			var self=this;
            this.$containerModal.modal('hide');
        },

        destroy: _.wrap(CartDetailedView.prototype.destroy, function destroy(fn) {
            fn.apply(this, _.toArray(arguments).slice(1));
            this.warrantyModal && this.warrantyModal.destroy();
            this.model.off('change');
        }),

        addToCookie: function addToCookie(options) {
            var linesToUpdate = options.lines;
            var alreadyInCookie = jQuery.cookie('warrantyLines') || [];
            jQuery.cookie('warrantyLines', _.union(alreadyInCookie, _.pluck(linesToUpdate, 'id')));
        },

        showWarrantyModal: function showWarrantyModal() {
            var lines = this.getLinesThatAcceptWarranties();

            if (lines && lines.length) {
                this.warrantyModal = new GlobalViewsConfirmationView({
                    title: _.translate('Extended Consumer Warranty'),
                    page_header: _.translate('Extended Consumer Warranty'),
                    confirmLabel: 'Add Warranty',
                    cancelLabel: 'No Thanks',
                    callBack: this.updateLines,
                    autohide: false,
                    callBackParameters: {
                        lines: lines,
                        cart: this
                    },
                    modalClass: 'global-views-modal-large',
                    cancelCallBack: this.hideWarrantyModal,
                    view: BackboneCollectionView,
                    viewParameters: {
                        collection: lines,
                        viewsPerRow: 1,
                        childView: WarrantyLineModalView,
                        modalClass: 'global-views-modal-large'
                    },
                    destroyCallBack: this.addToCookie,
                    destroyCallBackParameters: {
                        lines: lines,
                        cart: this
                    }
                });

                this.application.getLayout().showInModal(this.warrantyModal);
            }
        }
    });

});



define('TelQuest.Warranty.Warranty.Cart.Lines.View', [
    'Cart.Lines.View',
    'Product.Option.Model',
    'SC.Configuration',
    'LiveOrder.Model',
    'underscore'
], function WarrantyCartLinesView(
    CartLinesView,
    ProduceOptionModel,
    Configuration,
    LiveOrderModel,
    _
) {
    _.extend(CartLinesView.prototype, {
        events: _.extend(CartLinesView.prototype.events || {}, {
            'click [data-toggle="select-warranty"]': 'selectWarranty'
        }),

        selectWarranty: function selectWarranty(e) {
            var warranty = jQuery(e.currentTarget).val();
            var options = this.model.get('options');
            var cart = LiveOrderModel.getInstance();
            var self = this;
            if (warranty) {
				//debugger;
				if(options){
                options.push(new ProduceOptionModel({
                    cartOptionId: Configuration.get('warranty.itemOption'),
                    value: { internalid: warranty }
                }));
			}
				console.log('optionsdev',options);
                this.model.set('options', options);
				console.log('this.model',this.model);
                 cart.updateLines([this.model]).done(function doneUpdate() {
                 self.render();
                 //self.updateLines();
                });
            }
        },

        getContext: _.wrap(CartLinesView.prototype.getContext, function getContext(fn) {
            var context = fn.apply(this, _.toArray(arguments).slice(1));
            var warrantyOption = this.model.getOption(Configuration.get('warranty.itemOption'));
            return _.extend(context, {
                warranties: this.model.get('item').get('_warrantyOptions'),
                hasWarrantiesAvailable: this.model.get('item').get('_isWarrantyAvailable') && (!warrantyOption || !warrantyOption.get('value'))
            });
        })
    });
});


define('TelQuest.Warranty.Warranty.GlobalViews.Confirmation.View', [
    'GlobalViews.Confirmation.View',
    'underscore'
], function WarrantyGlobalViewsConfirmationView(
    GlobalViewsConfirmationView,
    _
) {
   _.extend(GlobalViewsConfirmationView.prototype, {
       initialize: _.wrap(GlobalViewsConfirmationView.prototype.initialize, function initialize(fn, options) {
           fn.apply(this, _.toArray(arguments).slice(1));

           this.destroyCallBack = options.destroyCallBack;
           this.destroyCallBackParameters = options.destroyCallBackParameters;
           this.modalClass = options.modalClass || this.modalClass;
       }),

       destroy: _.wrap(GlobalViewsConfirmationView.prototype.destroy, function destroy(fn) {
           fn.apply(this, _.toArray(arguments).slice(1));

           _.isFunction(this.destroyCallBack) && this.destroyCallBack.call(this, this.destroyCallBackParameters);
       })
   });
});


define('TelQuest.Warranty.Warranty.Item.Options.View', [
    'ProductViews.Option.View',
    'SC.Configuration',
    'underscore'
    ,'TelQuest.WarrantyAddOnItems.WarrantyAddOnItems.Configuration'
], function WarrantyItemsOptionView(
    ItemViewsOptionView,
    Configuration,
    _
	,AddOnItemsConfiguration
) {
    'use strict';

    _.extend(ItemViewsOptionView.prototype, {
        getContext: _.wrap(ItemViewsOptionView.prototype.getContext, function addOnItemContext(fn) {
            var context = fn.apply(this, _.toArray(arguments).slice(1));
            var modelOption = this.model;
            var addOnItems = this.options.line.getWarrantyOptions() || [];
            var isCheckboxMode;
            var firstOption;
            var selectedAddOnItem;
            var itemForCheckboxMode;
            if (this.options.line.isWarrantyAvailable() && addOnItems.length > 0) {
                switch (modelOption.get('cartOptionId')) {
                case Configuration.get('warranty.itemOption'):

                    if (addOnItems.length) {
                        modelOption.set('values', addOnItems);
                        context.values = addOnItems;
                        isCheckboxMode = modelOption &&
                            modelOption.get('values') &&
                            modelOption.get('values').length === 2 &&
                            modelOption.get('values')[0].label === '';
							console.log('isCheckboxMode',isCheckboxMode);
                        firstOption = modelOption.get('values') && modelOption.get('values').length > 1 ?
                            modelOption.get('values')[1] :
                            {};

                        selectedAddOnItem = context.selectedOption && context.selectedOption.internalId ?
                            modelOption.get(context.selectedOption.internalId) :
                            null;
                        _.extend(context, {
                            isAddOnable: this.options.line.isWarrantyAvailable(),
                            isCheckboxMode: isCheckboxMode,
                            isActive: selectedAddOnItem !== null,
                            addOnItems: addOnItems,
                            firstOption: firstOption
                        });

                        if (isCheckboxMode) {
                            itemForCheckboxMode = addOnItems[1];
                            _.extend(context, {
                                addOnModel: {
                                    internalid: itemForCheckboxMode.internalid,
                                    price: itemForCheckboxMode.price,
                                    isValid: itemForCheckboxMode.price !== 0,
                                    price_formatted: itemForCheckboxMode.price_formatted
                                }
                            });
                        } else {
                            _.each(context.values, function eachOptions(option) {
                                var addOnItem = _.findWhere(addOnItems, { internalid: option.internalid });

                                if (addOnItem) {
                                    _.extend(option, {
                                        addOnModel: {
                                            internalid: addOnItem.internalid,
                                            price: addOnItem.price,
                                            price_formatted: addOnItem.price_formatted
                                        }
                                    });
                                }
                            });
                        }
                    }
                    break;
                default:
                    break;
                }
            }

            return context;
        })
    });
});


define('TelQuest.Warranty.Warranty.Line.Modal.View', [
    'Backbone',
    'warranty_modal_view.tpl',
    'Transaction.Line.Views.Option.View',
    'Product.Option.Model',
    'SC.Configuration',
    'Backbone.CollectionView',
    'jQuery',
    'underscore'
], function WarrantyLineModelView(
    Backbone,
    warrantyModalViewTpl,
    TransactionLineViewsOptionView,
    ProduceOptionModel,
    Configuration,
    BackboneCollectionView,
    jQuery,
    _
) {
    return Backbone.View.extend({
        template: warrantyModalViewTpl,

        events: {
            'click [data-toggle="select-warranty"]': 'selectWarranty'
        },
        initialize: _.wrap(Backbone.View.initialize, function initialize(fn) {
            var self = this;
        }),

        childViews: {
            'Options.Collection': function OptionsCollection() {
                var options = this.model.getVisibleOptions();
                options = options.filter(function filterUpsells(option) {
                    return option.get('cartOptionId') !== Configuration.get('upsell.selectedOption');
                });
                return new BackboneCollectionView({
                    collection: options,
                    childView: TransactionLineViewsOptionView,
                    viewsPerRow: 1,
                    childViewOptions: {
                        line: this.model,
                        templateName: 'selected'
                    }
                });
            }
        },

        selectWarranty: function selectWarranty(e) {
            var warranty = jQuery(e.currentTarget).val();
            var options = this.model.get('options');
            if (warranty) {
                options.push(new ProduceOptionModel({
                    cartOptionId: Configuration.get('warranty.itemOption'),
                    value: { internalid: warranty }
                }));
                this.model.set('options', options);
				this.model.save();
            }
        },

        getContext: function getContext() {
            return {
                name: this.model.get('item').get('_originalName'),
                warranty: this.model.get('item').get('_warrantyOptions'),
                cartOptionId: Configuration.get('warranty.itemOption'),
                thumbnail: this.model.getThumbnail(),
                sku: this.model.getSku()
            };
        }
    });
});


define('TelQuest.Warranty.Warranty.LiveOrder.Model', [
    'LiveOrder.Model',
    'underscore'
], function WarrantyLiveOrderModel(
    LiveOrderModel,
    _
) {
    _.extend(LiveOrderModel.prototype, {
        updateLines: function updateLines(lines) {
            this.set('linesToUpdate', lines);
            return this.save();
        }
    });
});


define('TelQuest.Warranty.Warranty.Product.Model', [
    'Product.Model',
    'SC.Configuration',
    'underscore'
], function WarrantyProductModel(
    ProductModel,
    Configuration,
    _
) {
    _.extend(ProductModel.prototype, {
        getWarrantyOptions: function getWarrantyOptions() {
            var children;

            if (this.get('item').get('_isParent')) {
                children = this.getSelectedMatrixChilds();

                if (children && children.length) {
                    return children[0].get('_warrantyOptions');
                }
            }

            return this.get('item').get('_warrantyOptions');
        },

        isWarrantyAvailable: function isWarrantyAvailable() {
            var children;
            if (this.get('item').get('_isParent')) {
                children = this.getSelectedMatrixChilds();
                if (children && children.length) {
                    return children[0].get('_isWarrantyAvailable');
                }
            }

            return this.get('item').get('isWarrantyAvailable');
        },

        setOption: _.wrap(ProductModel.prototype.setOption, function setOption(fn) {
            var isWarrantyAvailable;
            var warrantyOption;
            fn.apply(this, _.toArray(arguments).slice(1));
            isWarrantyAvailable = this.isWarrantyAvailable();
            warrantyOption = this.getOption(Configuration.get('warranty.itemOption'));
            if (!isWarrantyAvailable && warrantyOption && warrantyOption.get('value') && warrantyOption.get('value').internalid) {
                this.setOption(Configuration.get('warranty.itemOption'), '');
            }
        })
    });
});


define('TelQuest.Warranty.Warranty.Product.Price', [
    'SC.Configuration',
    'Product.Model',
	'Transaction.Line.Model',
    'bignumber',
    'underscore',
    'Utils'
], function WarrantyProductModel(
    Configuration,
    ProductModel,
	TransactionLineModel,
    BigNumber,
    _,
    Utils
) {
    'use strict';

    _.extend(ProductModel.prototype, {
        getPrice: _.wrap(ProductModel.prototype.getPrice, function getPrice(fn) {
            var self = this;
            var currentChildPrice;
            var currentCompareChildPrice;
            var currentChildWarranty;
            var overridePrice = false;
            var isMatrix = false;
            var newPrice = {};
            var priceToAdd = new BigNumber(0);
            var args = _.toArray(arguments).slice(1);
            var getPriceResult = fn.apply(self, args);
			console.log('getPriceResult',getPriceResult);
            var warrantyItemOption = self.getOption(Configuration.get('warranty.itemOption'));
            var warrantyOption = warrantyItemOption && warrantyItemOption.get('value');
            var comparePriceFinal;
            var priceFinal;
            var childPriceCompare;
            var childPriceFinal;
            var minPriceCompare;
            var minPriceFinal;
            var maxPriceCompare;
            var maxPriceFinal;
            if (warrantyOption) {
                isMatrix = self.getSelectedMatrixChilds().length > 0;
                overridePrice = true;
                priceToAdd = priceToAdd.plus(self.get('item').get('custitem_awa_warranty_' + warrantyOption.internalid) || 0);
                newPrice = getPriceResult;
                comparePriceFinal = priceToAdd.plus(getPriceResult.compare_price || 0);
				console.log('comparePriceFinal',comparePriceFinal);
                priceFinal = priceToAdd.plus(getPriceResult.price || 0);
				console.log('priceFinal',priceFinal);
                newPrice = {
                    compare_price: comparePriceFinal.toNumber(),
                    compare_price_formatted: Utils.formatCurrency(comparePriceFinal.toNumber()),
                    price: priceFinal.toNumber(),
                    price_formatted: Utils.formatCurrency(priceFinal.toNumber())
                };
                if (isMatrix) {
                    _.each(self.getSelectedMatrixChilds(), function examineMinMax(currentChild) {
						console.log('currentChild',currentChild);
                        currentChildPrice = currentChild.get('onlinecustomerprice');
						console.log('currentChildPrice',currentChildPrice);
                        currentCompareChildPrice = currentChild.get('_comparePriceAgainst');
						console.log('currentCompareChildPrice',currentCompareChildPrice);
                        currentChildWarranty = new BigNumber(currentChild.get('custitem_awa_warranty_' + warrantyOption.internalid) || 0);
						console.log('currentChildWarranty',currentChildWarranty);
						console.log('self.getSelectedMatrixChilds().length',self.getSelectedMatrixChilds().length);
                        if (self.getSelectedMatrixChilds().length === 1) {
                            // if we have only one selected child, then use its price and avoid min and max
                            childPriceCompare = currentChildWarranty.plus(getPriceResult.compare_price || 0);
							console.log('childPriceCompare',childPriceCompare);
                            childPriceFinal = currentChildWarranty.plus(getPriceResult.price || 0);
							console.log('childPriceFinal',childPriceFinal);
                            newPrice = {
                                compare_price: childPriceCompare.toNumber(),
                                compare_price_formatted: Utils.formatCurrency(childPriceCompare.toNumber()),
                                price: childPriceFinal.toNumber(),
                                price_formatted: Utils.formatCurrency(childPriceFinal.toNumber()),
                                rateFormatted: Utils.formatCurrency(childPriceFinal.toNumber()),
                                rate: childPriceFinal.toNumber()
                            };
                       }
						 else {
                            // use min and max
                            if (!newPrice.min || (currentChildPrice + currentChildWarranty) < newPrice.min.price) {
                                // then use currenchidlprice
                                minPriceCompare = currentChildWarranty.plus(currentCompareChildPrice || 0);
								console.log('minPriceCompare',minPriceCompare);
                                minPriceFinal = currentChildWarranty.plus(currentChildPrice || 0);
								console.log('minPriceFinal',minPriceFinal);
                                newPrice.min = {
                                    compare_price: minPriceCompare.toNumber(),
                                    compare_price_formatted: Utils.formatCurrency(minPriceCompare.toNumber()),
                                    price: minPriceCompare.toNumber(),
                                    price_formatted: Utils.formatCurrency(minPriceCompare.toNumber())
                                };
                            }
                            if (!newPrice.max || (currentChildPrice + currentChildWarranty) > newPrice.max.price) {
                                // then use currenchidlprice
                                maxPriceCompare = currentChildWarranty.plus(currentCompareChildPrice || 0);
                                maxPriceFinal = currentChildWarranty.plus(currentChildPrice || 0);
                                newPrice.max = {
                                    compare_price: minPriceCompare.toNumber(),
                                    compare_price_formatted: Utils.formatCurrency(minPriceCompare.toNumber()),
                                    price: minPriceCompare.toNumber(),
                                    price_formatted: Utils.formatCurrency(minPriceCompare.toNumber())
                                };
                            }
                        } 
                    });
                    if (newPrice.min && newPrice.max && newPrice.min.price === newPrice.max.price) {
                        // delete if unnecesary min or max have been created
                        delete newPrice.min;
                        delete newPrice.max;
                    }
                } else {
					/*console.log('else price',getPriceResult);
					 newPrice={
						    compare_price: getPriceResult.min.compare_price + priceToAdd,
                            compare_price_formatted: Utils.formatCurrency(getPriceResult.min.compare_price + priceToAdd),
                            price: getPriceResult.min.price + priceToAdd,
                            price_formatted: Utils.formatCurrency(getPriceResult.min.price + priceToAdd)
					}; */
                     if (getPriceResult.min) {
                        newPrice.min = {
                            compare_price: getPriceResult.min.compare_price + priceToAdd,
                            compare_price_formatted: Utils.formatCurrency(getPriceResult.min.compare_price + priceToAdd),
                            price: getPriceResult.min.price + priceToAdd,
                            price_formatted: Utils.formatCurrency(getPriceResult.min.price + priceToAdd)
                        };
                    }
                    if (getPriceResult.max) {
                        newPrice.max = {
                            compare_price: getPriceResult.max.compare_price + priceToAdd,
                            compare_price_formatted: Utils.formatCurrency(getPriceResult.max.compare_price + priceToAdd),
                            price: getPriceResult.max.price + priceToAdd,
                            price_formatted: Utils.formatCurrency(getPriceResult.max.price + priceToAdd)
                        };
                    } 
                } 
            }
			console.log('newPrice',newPrice);
            return overridePrice ? newPrice : getPriceResult;
        })
    });
	//transaction line price
	

});


define('TelQuest.Warranty.Warranty.ProductDetails.Base.View', [
    'ProductDetails.Base.View',
    'ProductDetails.Options.Selector.View',
    'ProductDetails.Full.View',
    'ProductDetails.QuickView.View',
    'underscore'
], function WarrantyProductDetailsBaseView(
    ProductDetailsBaseView,
    ProductDetailsOptionsSelectorView,
    ProductDetailsFullView,
    ProductDetailsQuickViewView,
    _
) {
    'use strict';

    var warrantyOptionChildView = {
        'Warranty.Options': function WarrantyOptions() {
            return new ProductDetailsOptionsSelectorView({
                model: this.model,
                isWarranty: true,
                application: this.application,
                show_pusher: this.showOptionsPusher(),
                show_required_label: this.model.get('item').get('itemtype') === 'GiftCert'
            });

        }
    };

    _.extend(ProductDetailsBaseView.prototype.childViews, warrantyOptionChildView);
    _.extend(ProductDetailsFullView.prototype.childViews, warrantyOptionChildView);
    _.extend(ProductDetailsQuickViewView.prototype.childViews, warrantyOptionChildView);
});


define('TelQuest.Warranty.Warranty.ProductDetails.OptionBingings', [
    'ProductDetails.Base.View',
    'SC.Configuration',
    'underscore'
], function WarrantyProductDetailsOptionBingings(
    ProductDetailsBaseView,
    Configuration,
    _
) {
    _.extend(ProductDetailsBaseView.prototype, {
        getBindingEventForOption: _.wrap(ProductDetailsBaseView.prototype.getBindingEventForOption, function getBindingEventForOption(fn, option) {
            if (option.get('cartOptionId') === Configuration.get('warranty.itemOption')) {
                return 'change';
            }

            return fn.apply(this, _.toArray(arguments).slice(1));
        })
    });
});


define('TelQuest.Warranty.Warranty.ProductDetails.Options.Selector.View', [
    'ProductDetails.Options.Selector.View',
    'ProductViews.Option.View',
    'SC.Configuration',
    'Backbone.CollectionView',
    'underscore'
], function WarrantyProductDetailsOptionsSelectorView(
    ProductDetailsOptionsSelectorView,
    ProductViewsOptionView,
    Configuration,
    BackboneCollectionView,
    _
) {
    'use strict';
	console.log('Selector');
    _.extend(ProductDetailsOptionsSelectorView.prototype, {
        childViews: _.extend(ProductDetailsOptionsSelectorView.prototype.childViews || {}, {
            'Options.Collection': function OptionsCollection() {
                var availableOptions = this.model.getVisibleOptions();
				console.log('availableOptionswa',availableOptions);
                if (this.options.isWarranty) {
                    availableOptions = availableOptions.filter(function (option) {
                        return option.get('cartOptionId') === Configuration.get('warranty.itemOption');
                    });
                } else {
                    availableOptions = availableOptions.filter(function (option) {
                        return option.get('cartOptionId') !== Configuration.get('warranty.itemOption');
                    });
                }
                return new BackboneCollectionView({
                    collection: availableOptions,
                    childView: ProductViewsOptionView,
                    viewsPerRow: 1,
                    childViewOptions: {
                        line: this.model,
                        item: this.model.get('item'),
                        templateName: 'selector',
                        show_required_label: this.options.show_required_label
                    }
                });
            }
        }),

        getContext: _.wrap(ProductDetailsOptionsSelectorView.prototype.getContext, function getContext(fn) {
            var context = fn.apply(this, _.toArray(arguments).slice(1));
			console.log('context',context);
            return _.extend(context, {
                isWarrantyOption: this.options.isWarranty
            });
        })
    })
});


define('TelQuest.Warranty.Warranty.ProductDetails.QuickView.View', [
    'ProductDetails.QuickView.View',
    'underscore'
], function WarrantyProductDetailsQuickViewView(
    ProductDetailsQuickViewView,
    _
) {
    _.extend(ProductDetailsQuickViewView.prototype, {
        initialize: _.wrap(ProductDetailsQuickViewView.prototype.initialize, function initialize(fn) {
            var self = this;
            fn.apply(this, _.toArray(arguments).slice(1));
             this.model.on('change', function onChange() {
                if (!self.model.changed.quantity) {
                    self.generateViewBindings();
					//self.updateURL();
                 self.showContent();
                }
            }); 
        })
    });
});


define('TelQuest.Warranty.Warranty.ProductLine.Url', [
    'ProductLine.Common.Url',
    'underscore',
    'SC.Configuration'
], function WarrantyProductLineUrl(
    ProductLineCommonUrl,
    _,
    Configuration
) {
    'use strict';

    _.extend(ProductLineCommonUrl, {
        getFullLink: _.wrap(ProductLineCommonUrl.getFullLink, function getFullLink(fn) {
            var args = _.toArray(arguments).slice(1);
            var parametersToOverride = args && args.length ? args[0] : {};
            _.each(Configuration.get('warranty.fields'), function eachWarrantyField(warrantyField) {
                parametersToOverride[warrantyField.fieldId.replace('custitem', 'custcol')] = null;
            });
            parametersToOverride[Configuration.get('warranty.itemOptionAssociation')] = null;
            return fn.apply(this, args);
        })
    });
});


define('TelQuest.Warranty.Warranty.Transaction.Line.Views.Option.View', [
    'Transaction.Line.Views.Option.View',
    'SC.Configuration',
    'LiveOrder.Model',
    'underscore',
    'Utils'
   ,'TelQuest.WarrantyAddOnItems.WarrantyAddOnItems.Configuration'
], function WarrantyTransactionLineViesOptionView(
    TransactionLineViewsOptionView,
    Configuration,
    LiveOrderModel,
    _,
    Utils
	,AddOnItemsConfiguration
	
) {
    'use strict';

    _.extend(TransactionLineViewsOptionView.prototype, {
        events: _.extend(TransactionLineViewsOptionView.prototype.events || {}, {
            'click [class="warranty-remove"]': 'removeWarranty'
        }),

        removeWarranty: function removeWarranty(e) {
            var self = this;
            var options = this.line_model.get('options');
            var cart = LiveOrderModel.getInstance();
            var warranty = -1;

            e.preventDefault();
            e.stopPropagation();

            options.any(function indexOfWarranty(option, index) {
                if (option.get('cartOptionId') === Configuration.get('warranty.itemOption')) {
                    warranty = index;
                    return true;
                }
                return false;
            });

            if (warranty >= 0) {
                options.models.splice(warranty, 1);
				console.log('optionstr',options);
                this.line_model.set('options', options);
				console.log('cart',cart);
				console.log('this.line_model',this.line_model);
                cart.updateLines([this.line_model]).done(function doneUpdate() {
                    self.render();
                });
            }
        }
		 ,	getMatrixOptionsSelection: function getMatrixOptionsSelection ()
			{

				var matrix_options = _.where(this.model,{isMatrixDimension: true})
				,	result = {};

				_.each(matrix_options, function (matrix_option)
				{
					// var set_value = self.get(matrix_option.get('cartOptionId'));
					var set_value = matrix_option.get('value');

					// if this option have been set in the current line
					if (set_value)
					{
						//Remember that at each option the property itemOptionId is in fact the sourcefrom. See the class Product.Option
						//This line set the label of the selected option (based on he fact the we set option by setting its internalid)
						// result[matrix_option.itemOptionId] = _.findWhere(matrix_option.values, {internalid: set_value}).label;
						result[matrix_option.get('itemOptionId')] = set_value.label;
					}
				});

				// <OPTION:SOURCE ID, SELECTED LABEL>
				return result;
			} 

			// @method getSelectedMatrixChilds Returns all child item that apply for the passed in selection
			// @param {Product.OptionHelper.MatrixSelection} matrix_options
			// @returns {Array<Item.Model>} All the children of a matrix that complies with the current or passed in selection
		 ,	getSelectedMatrixChilds: function getSelectedMatrixChilds (matrix_options)
			{
				var item_matrix_children = this.line_model.get('item').get('_matrixChilds'); //This is a collection of items!!
				//but these items only have a subset of the item options (only those options on the matrixchilditems_detail field set!)

				if (!item_matrix_children)
				{
					return [];
				}

				matrix_options = matrix_options || this.getMatrixOptionsSelection();
				var selection_key = JSON.stringify(matrix_options);

				this.matrixSelectionCache = this.matrixSelectionCache || {};

				// Caches the entry for the item
				if (!this.matrixSelectionCache[selection_key])
				{
					//IF there are option selected THEN get all child items that complies for the current selection ELSE get ALL child items
					this.matrixSelectionCache[selection_key] = _.values(matrix_options).length ? item_matrix_children.where(matrix_options) : item_matrix_children.models;
				}

				return this.matrixSelectionCache[selection_key];
			} 

        ,getContext: _.wrap(TransactionLineViewsOptionView.prototype.getContext, function addOnItemContext(fn) {
            var context = fn.apply(this, _.toArray(arguments).slice(1));
            var modelOption = this.model;
            var warrantyFields = Configuration.get('warranty.fields');
            var warrantySelected;
            var selectedValue = modelOption.get('value');
            var addOnItems;
            var addOnItem;
            var line = this.options.line;
            var children;
            switch (modelOption.get('cartOptionId')) {
            case Configuration.get('warranty.itemOption'):
                if (selectedValue && selectedValue.internalid) {
                    addOnItems = line.get('addOnItems') || {};
                    warrantySelected = _.findWhere(warrantyFields, { fieldId: 'custitem_awa_warranty_' + selectedValue.internalid });
                    if (warrantySelected) {
                        selectedValue.label = warrantySelected.displayName || '';
                        selectedValue.label = selectedValue.label.replace('Warranty', '');
                        addOnItem = addOnItems && addOnItems[Configuration.get('warranty.itemOptionAssociation')];
                        if (addOnItem && addOnItem.length) {
                            addOnItem = addOnItem[0];
                            selectedValue.label += ' ' + addOnItem.rate_formatted;
                        } else if (line.get('item').get(warrantySelected.fieldId)) {
                            selectedValue.label += ' ' + Utils.formatCurrency(line.get('item').get(warrantySelected.fieldId));
                        } else {
                            children = this.getSelectedMatrixChilds();
                            if (children && children.length) {
                                selectedValue.label += ' ' + Utils.formatCurrency(children[0].get(warrantySelected.fieldId));
                            }
                        }
                        context.selectedValue.label = selectedValue.label || context.selectedValue.label;
                    }
                }
                break;
            default:
                break;
            }

            return context;
        })
    });
});


define('TelQuest.Warranty.Warranty', [
    'underscore',
    'SC.Configuration',
    'item_views_option_warranty_item.tpl',
    'item_views_option_warranty_item_selected.tpl',
   'TelQuest.WarrantyAddOnItems.WarrantyAddOnItems.Configuration',
    'TelQuest.Warranty.Warranty.Transaction.Line.Views.Option.View',
    'TelQuest.Warranty.Warranty.Item.Options.View',
    'TelQuest.Warranty.Warranty.ProductLine.Url',
    'TelQuest.Warranty.Warranty.Product.Model',
    'TelQuest.Warranty.Warranty.ProductDetails.QuickView.View',
    'TelQuest.Warranty.Warranty.Product.Price',
    'TelQuest.Warranty.Warranty.ProductDetails.OptionBingings',
    'TelQuest.Warranty.Warranty.Cart.Detailed.View',
    'TelQuest.Warranty.Warranty.LiveOrder.Model',
    'TelQuest.Warranty.Warranty.GlobalViews.Confirmation.View',
    'TelQuest.Warranty.Warranty.ProductDetails.Base.View',
    'TelQuest.Warranty.Warranty.ProductDetails.Options.Selector.View',
    'TelQuest.Warranty.Warranty.Cart.Lines.View'
], function Warranty(
    _,
    Configuration,
    warrantyItemTpl,
    warrantyItemTplSelected,
	warrantyAddOnItemsConfiguration,
	warrantytransactionLineViewsOptionView,
	warrantyitemOptionsView,
	warrantyproductLineUrl,
	warrantyproductModel,
	warrantyproductDetailsQuickViewView,
	warrantyproductPrice,
	warrantyproductDetailsOptionBingings,
	warrantycartDetailedView,
	warrantyliveOrderModel,
	warrantyglobalViewsConfirmationView,
	warrantyproductDetailsBaseView,
	warrantyproductDetailsOptionsSelectorView,
	warrantycartLinesView
) {
    'use strict';
    if (!Configuration.itemKeyMapping) {
        Configuration.itemKeyMapping = {};
    }

    _(Configuration.itemKeyMapping).extend({
        // For an item to be add onable, it needs to have at least
        // one "warranty" possible
        _isWarrantyAvailable: function _isWarrantyAvailable(item) {
            return _.any(Configuration.get('warranty.fields') || [], function hasWarranty(warrantyField) {
                return item.get(warrantyField.fieldId);
            });
        },

        _getMatrixOptionsSelection: function _getMatrixOptionsSelection(item) {
            var matrixOptions = (item.get('options') && item.get('options').where({ isMatrixDimension: true })) || [];
            var result = {};

            _.each(matrixOptions, function eachMatrixOption(matrixOption) {
                var setValue = matrixOption.get('value');

                if (setValue) {
                    result[matrixOption.get('itemOptionId')] = setValue.label;
                }
            });

            return result;
        },

        _getSelectedMatrixChilds: function _getSelectedMatrixChilds(item) {
            var itemMatrixChildren = item.get('_matrixChilds');
            var matrixOptions;
            var selectionKey;

            if (!itemMatrixChildren) {
                return [];
            }

            matrixOptions = item.get('_getMatrixOptionsSelection');
            selectionKey = JSON.stringify(matrixOptions);

            item.matrixSelectionCache = item.matrixSelectionCache || {};

            // Caches the entry for the item
            if (!item.matrixSelectionCache[selectionKey]) {
                item.matrixSelectionCache[selectionKey] = _.values(matrixOptions).length ? itemMatrixChildren.where(matrixOptions) : itemMatrixChildren.models;
            }

            return item.matrixSelectionCache[selectionKey];
        },

        _warrantyOptions: function _warrantyOptions(item) {
            var warrantyOptions = [];
            var children;

            if (item.get('_isParent')) {
                children = item.get('_getSelectedMatrixChilds');
                if (children && children.length) {
                    return children[0].get('_warrantyOptions');
                }
            }
            _.each(Configuration.get('warranty.fields'), function eachWarrantyField(warrantyField) {
                if (item.get(warrantyField.fieldId)) {
                    warrantyOptions.push({
                        label: warrantyField.displayName,
                        value: parseInt(warrantyField.days, 10),
                        internalid: parseInt(warrantyField.days, 10),
                        isAvailable: true,
                        price: item.get(warrantyField.fieldId),
                        price_formatted: item.get(warrantyField.fieldId + '_formatted')
                    });
                }
            });

            if (warrantyOptions && warrantyOptions.length) {
                warrantyOptions.splice(0, 0, { internalid: 0, label: '' });
            }
            return warrantyOptions;
        }
    });

    Configuration.voidTemplates = [];
    Configuration.addOnOptions = Configuration.addOnOptions || [];
   /* Configuration.voidTemplates.push({
        cartOptionId: Configuration.get('warranty.itemOptionAssociation'),
        url: 'warrantyid'
    });*/

    Configuration.addOnOptions.push(Configuration.get('warranty.itemOptionAssociation'));

   /* _.each(Configuration.get('warranty.fields', []), function eachWarrantyField(warrantyField) {
        Configuration.voidTemplates.push({
            cartOptionId: warrantyField.fieldId.replace('custitem', 'custcol'),
            url: 'warranty' + warrantyField.days
        });

        Configuration.addOnOptions.push(warrantyField.fieldId.replace('custitem', 'custcol'));
    });*/

    Configuration.addOnItemOptions = [];
    Configuration.addOnItemOptions.push({
        cartOptionId: Configuration.get('warranty.itemOption'),
        label: 'Additional Warranty',
        url: 'warranty',
        urlParameterName: 'warranty',
        templates: {
            selector: warrantyItemTpl,
            selected: warrantyItemTplSelected
        },
        index: 1000
    });

    Configuration.addOnOptions.push(Configuration.get('warranty.itemOption'));

    Configuration.ItemOptions.optionsConfiguration = Configuration.addAddOnOptions(Configuration.get('ItemOptions.optionsConfiguration', []));
});


};

extensions['TelQuest.WarrantyAddOnItems.1.0.0'] = function(){

function getExtensionAssetsPath(asset){
	return 'extensions/TelQuest/WarrantyAddOnItems/1.0.0/' + asset;
}

define('TelQuest.WarrantyAddOnItems.WarrantyAddOnItems.Configuration', [
    'underscore',
    'SC.Configuration',
    'telquest_addonitems_item_views_option_void.tpl',
    'transaction_line_views_selected_option.tpl'
], function AddOnItemsConfiguration(
    _,
    Configuration,
    itemViewsOptionVoidTpl,
    selectedOptionTpl
) {
    'use strict';
    var AddOnConfig = {

        addAddOnOptions: function addAddOnOptions(pItemOptions) {
            var itemOptions = pItemOptions || [];
            _.each(Configuration.voidTemplates, function eachVoidTemplate(voidOption) {
                itemOptions.push({
                    cartOptionId: voidOption.cartOptionId,
                    label: 'void',
                    url: voidOption.url,
                    templates: {
                        selector: itemViewsOptionVoidTpl,
                        selected: voidOption.selected || itemViewsOptionVoidTpl
                    }
                });
            });
            _.each(Configuration.addOnItemOptions, function eachItemOption(itemOption) {
                itemOptions.push({
                    cartOptionId: itemOption.cartOptionId,
                    label: itemOption.label,
                    url: itemOption.url,
                    urlParameterName: itemOption.urlParameterName,
                    templates: {
                        selector: itemOption.templates.selector,
                        selected: itemOption.templates.selected || selectedOptionTpl
                    },
                    index: itemOption.index || 10
                });
            });

            return itemOptions;
        }
    };

    _.extend(Configuration, AddOnConfig);

   // return AddOnConfig;
});


define('TelQuest.WarrantyAddOnItems.WarrantyAddOnItems.ProductDetailsToQuote.View', [
    'ProductDetailToQuote.View',
    'ProductList.Model',
    'ProductList.Item.Model',
    'SC.Configuration',
    'underscore'
], function AddonItemsProductDetailsToQuoteView(
    ProductDetailsToQuoteView,
    ProductListModel,
    ProductListItemModel,
    Configuration,
    _
) {
    _.extend(ProductDetailsToQuoteView.prototype, {
        itemToQuote: function itemToQuote(e) {
            var self = this;
            var phone = Configuration.get('quote.defaultPhone', '');
            var email = Configuration.get('quote.defaultEmail', '');
            var productListModel;
            var productListLine;
            var productListLineJson;
            var itemPresentInList;
            e.preventDefault();
            this.state.feedbackMessage = '';

            // if user is logged in but isn't allowed to quote, we warn him.
            if (this.profile_model.get('isLoggedIn') === 'T' && !this.state.quote_permissions) {
                this.state.feedbackMessageType = 'warning';
                this.state.feedbackMessage = _('Sorry, you don\'t have sufficient permissions to request a quote online.' +
                    ' <br/> For immediate assistance <strong>call us at $(0)</strong> or email us to <strong>$(1)</strong>')
                    .translate(phone, email);
                this.render();
            } else if (this.model.isSelectionComplete() && this.isQuotable() && this.validateLogin()) {
                this.application.ProductListModule.Utils.getRequestAQuoteProductList().done(function doneRequestQuoteProductList(productListJson) {
                    productListLine = ProductListItemModel.createFromProductToQuote(self.model);

                    if (!productListJson.internalid) {
                        productListModel = new ProductListModel(productListJson);

                        productListModel.save().done(function doneProductListSave(productListJsonSave) {
                            self.addItemToQuote(productListJsonSave, productListLine, self.model);
                        });
                    } else {
                        productListLineJson = productListLine.toJSON();
                        itemPresentInList = _.find(productListJson.items, function findProductListItem(productListLineAux) {
                            return parseInt(productListLineAux.item.internalid, 10) === productListLineJson.item.internalid &&
                                _.isEqual(productListLineJson.options, productListLineAux.options);
                        });

                        if (itemPresentInList) {
                            self.updateItemInQuote(itemPresentInList);
                        } else {
                            self.addItemToQuote(productListJson, productListLine, self.model);
                        }
                    }
                });
            }
        }
    });
});


define('TelQuest.WarrantyAddOnItems.WarrantyAddOnItems.ProductList.Item.Model', [
    'ProductList.Item.Model',
    'SC.Configuration',
    'underscore'
], function AddOnItemsProductListItemModel(
    ProductListItemModel,
    Configuration,
    _
) {
    _.extend(ProductListItemModel, {
        createFromProductToQuote: function createFromProductToQuote(product) {
            var attributes = product.toJSON();
            delete attributes.internalid;

            Configuration.addOnOptions = Configuration.addOnOptions || [];

            _.each(attributes.options, function eachOptions(option) {
                option.values = product.get('options').findWhere({ cartOptionId: option.cartOptionId }).get('values');
                if (Configuration.addOnOptions.indexOf(option.cartOptionId) >= 0) {
                    option.value = null;
                }
            });

            attributes.item = product.get('item').toJSON();

            return new ProductListItemModel(attributes);
        }
    });
});


define('TelQuest.WarrantyAddOnItems.WarrantyAddOnItems.RequestQuoteWizard.Module.Comments', [
    'RequestQuoteWizard.Module.Comments',
    'SC.Configuration',
    'underscore'
], function AddOnItemsRequestQuoteWizardModuleComments(
    RequestQuoteWizardModuleComments,
    Configuration,
    _
) {
	'use strict';
    _.extend(RequestQuoteWizardModuleComments.prototype, {
        getContext: _.wrap(RequestQuoteWizardModuleComments.prototype.getContext, function getContext(fn) {
            var context = fn.apply(this, _.toArray(arguments).slice(1));
            context.subdesciption = Configuration.get('quote.commentsDescription');
            return context;
        })
    });
});


define(
	'TelQuest.WarrantyAddOnItems.WarrantyAddOnItems'
,   [
	'TelQuest.WarrantyAddOnItems.WarrantyAddOnItems.Configuration',
    'underscore',
    'SC.Configuration',
    'TelQuest.WarrantyAddOnItems.WarrantyAddOnItems.ProductList.Item.Model',
    'TelQuest.WarrantyAddOnItems.WarrantyAddOnItems.ProductDetailsToQuote.View',
    'TelQuest.WarrantyAddOnItems.WarrantyAddOnItems.RequestQuoteWizard.Module.Comments'
], function AddOnItems(
    AddOnItemsConfiguration,
    _,
    Configuration
) {
    'use strict';

    Configuration.ItemOptions.optionsConfiguration = Configuration.addAddOnOptions(Configuration.get('ItemOptions.optionsConfiguration', []));
});

};

extensions['TelQuest.WarrantyRegistration.1.0.0'] = function(){

function getExtensionAssetsPath(asset){
	return 'extensions/TelQuest/WarrantyRegistration/1.0.0/' + asset;
}

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


define(
	'TelQuest.WarrantyRegistration.WarrantyRegistration'
,   [
		'TelQuest.WarrantyRegistration.WarrantyRegistration.Router'
	]
,   function (
		Router
	)
{
	'use strict';

	return  {
		mountToApp: function mountToApp (container)
		{
			// using the 'Layout' component we add a new child view inside the 'Header' existing view 
			// (there will be a DOM element with the HTML attribute data-view="Header.Logo")
			// more documentation of the Extensibility API in
			// https://system.netsuite.com/help/helpcenter/en_US/APIs/SuiteCommerce/Extensibility/Frontend/index.html
			
			/** @type {LayoutComponent} */
			var myaccountmenu  = container.getComponent('MyAccountMenu');
			
			if(myaccountmenu )
			{
				var WarrantyModule = {
			     id: "warranty",
			     name: "Warranty",
			     index: 0,
			     url: 'warranty'
			}

			myaccountmenu.addGroup(WarrantyModule);
			}
				return new Router(container);

		}
	};
});


};


try{
	extensions['TelQuest.ExtendOrderHistory.1.0.0']();
	SC.addExtensionModule('TelQuest.ExtendOrderHistory.ExtendOrderHistory');
}
catch(error)
{
	console.error(error);
}


try{
	extensions['TelQuest.ExtendProfileinfo.1.0.0']();
	SC.addExtensionModule('TelQuest.ExtendProfileinfo.ExtendProfileinfo');
}
catch(error)
{
	console.error(error);
}


try{
	extensions['TelQuest.FacetsExtend.1.0.0']();
	SC.addExtensionModule('TelQuest.FacetsExtend.FacetsExtend');
}
catch(error)
{
	console.error(error);
}


try{
	extensions['TelQuest.FakeMatrix.1.0.0']();
	SC.addExtensionModule('TelQuest.FakeMatrix.FakeMatrix');
}
catch(error)
{
	console.error(error);
}


try{
	extensions['TelQuest.MSRPPrice.1.0.0']();
	SC.addExtensionModule('TelQuest.MSRPPrice.MSRPPrice');
}
catch(error)
{
	console.error(error);
}


try{
	extensions['TelQuest.Pacejet.1.0.0']();
	SC.addExtensionModule('TelQuest.Pacejet.Pacejet');
}
catch(error)
{
	console.error(error);
}


try{
	extensions['TelQuest.ProductBadges.1.0.0']();
	SC.addExtensionModule('TelQuest.ProductBadges.ProductBadges');
}
catch(error)
{
	console.error(error);
}


try{
	extensions['TelQuest.SiteCart.1.0.0']();
	SC.addExtensionModule('TelQuest.SiteCart.SiteCart');
}
catch(error)
{
	console.error(error);
}


try{
	extensions['TelQuest.SiteHeader.1.0.0']();
	SC.addExtensionModule('TelQuest.SiteHeader.SiteHeader');
}
catch(error)
{
	console.error(error);
}


try{
	extensions['TelQuest.SiteSession.1.0.0']();
	SC.addExtensionModule('TelQuest.SiteSession.SiteSession');
}
catch(error)
{
	console.error(error);
}


try{
	extensions['TelQuest.Warranty.1.0.0']();
	SC.addExtensionModule('TelQuest.Warranty.Warranty');
}
catch(error)
{
	console.error(error);
}


try{
	extensions['TelQuest.WarrantyAddOnItems.1.0.0']();
	SC.addExtensionModule('TelQuest.WarrantyAddOnItems.WarrantyAddOnItems');
}
catch(error)
{
	console.error(error);
}


try{
	extensions['TelQuest.WarrantyRegistration.1.0.0']();
	SC.addExtensionModule('TelQuest.WarrantyRegistration.WarrantyRegistration');
}
catch(error)
{
	console.error(error);
}

