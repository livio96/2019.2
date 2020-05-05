
define(
	'Dev.AdditionalCategoryFields.AdditionalCatModule.Model'
,	[
		'Categories.Model'
	,	'SC.Model'
	,	'SC.Models.Init'
	,	'Application'
	,	'Configuration'
	,	'underscore'
	]
,	function(
		CategoriesModel
	,	SCModel
	,	ModelsInit
	,	Application
	,	Configuration
	,	_
	)
	{
		'use strict';

		_.extend(CategoriesModel,{  

			categoryColumns: {
	            boolean: ['displayinsite', 'isinactive', 'isprimaryurl','custrecord_hide_from_navigation'],
	            sideMenu: {
	                sortBy: 'sequencenumber',
	                fields: ['name', 'internalid', 'sequencenumber', 'urlfragment', 'displayinsite']
	            },
	            subCategories: {
	                sortBy: 'sequencenumber',
	                fields: [
	                    'name',
	                    'description',
	                    'internalid',
	                    'sequencenumber',
	                    'urlfragment',
	                    'thumbnailurl',
	                    'displayinsite'
	                ]
	            },
	            category: {
	                fields: [
	                    'internalid',
	                    'name',
	                    'description',
	                    'pagetitle',
	                    'pageheading',
	                    'pagebannerurl',
	                    'addtohead',
	                    'metakeywords',
	                    'metadescription',
	                    'displayinsite',
	                    'urlfragment',
	                    'idpath',
	                    'fullurl',
	                    'isprimaryurl' // needed for canonical path
						
	                ]
	            },
	            breadcrumb: {
	                fields: ['internalid', 'name', 'displayinsite']
	            },
	            menu: {
	                sortBy: 'sequencenumber',
	                fields: ['internalid', 'name', 'sequencenumber', 'displayinsite']
	            },
	            mapping: {
	                internalid: 'subcatid',
	                name: 'subcatnameoverride',
	                description: 'subcatdescoverride',
	                pagetitle: 'subcatpagetitleoverride',
	                pageheading: 'subcatpageheadingoverride',
	                pagebannerurl: 'subcatpagebannerurloverride',
	                addtohead: 'subcataddtoheadoverride',
	                metakeywords: 'subcatmetakeywordsoverride',
	                metadescription: 'subcatmetadescoverride',
	                displayinsite: 'subcatdisplayinsiteoverride',
	                sequencenumber: 'subcatsequencenumber',
	                thumbnailurl: 'subcatthumbnailurloverride',
	                urlfragment: 'subcaturlfragmentoverride'
	            }
	        }
			,	getColumns: function (element)
				{ 
					var config = Configuration.get().categories; 
					return _.union(this.categoryColumns[element].fields, config[element].fields);
				} 

			,	fixBooleans: function(catObject)
				{
					 
					_.each(this.categoryColumns.boolean, function(column)
					{
						if (catObject[column])
						{
							catObject[column] = catObject[column] ? (catObject[column] === 'T' ? true : false) : '';
						}
					});
				}

			,	getCategoryTree: function (level)
				{
					var cmsRequestT0 = new Date().getTime();

					var self = this
					,	result = []
					,	siteId = ModelsInit.session.getSiteSettings(['siteid']).siteid
					,	filters = [
							new nlobjSearchFilter('nestlevel', null, 'lessthanorequalto', level)
						,	new nlobjSearchFilter('isinactive', null, 'is', 'F')
						,	new nlobjSearchFilter('site', null, 'is', siteId)
						]
					,	searchColumns = [
							new nlobjSearchColumn('fullurl')
						,	new nlobjSearchColumn('nestlevel')
						,	new nlobjSearchColumn('idpath').setSort(false)
						]
					,	bag = {}
					,	overrides = {}
					,	columns = this.getColumns('menu')
					,	toSubCategory = this.categoryColumns.mapping;

					_.each(columns, function(column)
					{
						searchColumns.push(new nlobjSearchColumn(column));
						toSubCategory[column] && searchColumns.push(new nlobjSearchColumn(toSubCategory[column]));
					});

					Application.getAllSearchResults('commercecategory', filters, searchColumns).forEach(function (line)
					{
						var idPath = line.getValue('idpath');

						if (!bag[idPath])
						{
							var current = {	categories: [] }
							,	override = overrides[idPath];

							_.each(columns, function(column)
							{
								current[column] = (override && override[column]) ||  line.getValue(column);
							});

							self.fixBooleans(current);

							current.fullurl = line.getValue('fullurl');
							current.level = line.getValue('nestlevel');

							var parentIdPathArr = idPath.split('|');

							if (parentIdPathArr.length > 3)
							{
								parentIdPathArr.splice(parentIdPathArr.length - 2, 1);
							}
							else
							{
								parentIdPathArr = [];
							}

							// Find the idPath of the parent
							current.parentIdPath = parentIdPathArr.join('|');

							if (current.displayinsite)
							{

								if (!current.parentIdPath)
								{
									// Add the roots categories to the result var
									result.push(current);
								}
								else
								{
									// Adding subcategories to parent, by reference is added to result
									bag[current.parentIdPath] && bag[current.parentIdPath].categories.push(current);
								}

								bag[idPath] = current;
							}
						}

						var childId = line.getValue('subcatid');

						if (childId)
						{
							var childIdPath = idPath + childId + '|';

							var child = {};

							_.each(columns, function(column)
							{
								child[column] = line.getValue(toSubCategory[column]);
							});

							overrides[childIdPath] = child;
						}

					});

					this.sortBy(result, this.getSortBy('menu'));

					if (result.length)
					{
						result[0]._debug_requestTime = (new Date().getTime()) - cmsRequestT0;
					}

					return result;
				}

		 });
	}
);