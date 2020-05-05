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
            debugger;
            var conditionsToSelect = _.filter(Configuration.get('fakematrix.options'), function matrixOptionFilter(matrixOption) {
                return !!matrixOption.defaultValue;
            });
            var self = this;
            var conditionToSelect;
            var selectedMatrixOptions = this.model.getMatrixOptionsSelection();
            var matrixOptions = this.model.get('item').getPosibleOptions().where({ isMatrixDimension: true });
            //To Set the preferred variations
            var relatedItms=this.model.get('item').get('relateditems_detail');
            var preferredItem=_.find(relatedItms, function (o) { return o.custitem_is_preferred_variation  == true; });
            if(preferredItem){ 
                var optionsData=_.each(matrixOptions, function(matrixOption) {
                    var newFieldId=matrixOption.get('cartOptionId');
                    var preferredItemValue=preferredItem[newFieldId];
                    var optionValues=matrixOption.get('values');
                        optionValues=_.find(optionValues, function (o) { return o.label  == preferredItemValue; })
                    var newDefaultValue=optionValues.internalid;
                     _.each(conditionsToSelect, function(fakeData) {
                         if(fakeData.fieldId==newFieldId){
                             fakeData.defaultValue=newDefaultValue;
                         }
                     });
                });
            }
             //To Set the preferred variations - end
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
