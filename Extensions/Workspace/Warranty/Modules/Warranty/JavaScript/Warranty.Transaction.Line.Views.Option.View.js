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
