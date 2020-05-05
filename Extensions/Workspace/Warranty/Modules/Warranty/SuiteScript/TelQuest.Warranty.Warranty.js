define('TelQuest.Warranty.Warranty', [
    'Configuration',
    'TelQuest.Warranty.Warranty.LiveOrder.Model',
    'TelQuest.Warranty.Warranty.LiveOrder.ServiceController'
], function Warranty(
    Configuration
) {
    'use strict';

    if (Configuration.get().warranty.itemOptionAssociation) {
        Configuration.get().associatedFields = Configuration.associatedFields || [];
        Configuration.get().associatedFields.push({
            option: Configuration.get().warranty.itemOptionAssociation,
            error: {
                code: 'ERR_REMOVE_WARRANTY',
                message: 'Warranty cannot be removed by itself, you need to remove the item it is associated to.',
                status: 400
            }
        });
    }
});
