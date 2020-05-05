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
