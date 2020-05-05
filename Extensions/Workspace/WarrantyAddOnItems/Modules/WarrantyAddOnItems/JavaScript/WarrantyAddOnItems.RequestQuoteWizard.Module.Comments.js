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
