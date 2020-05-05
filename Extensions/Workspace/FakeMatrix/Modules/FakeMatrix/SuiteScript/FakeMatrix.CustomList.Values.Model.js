define('TelQuest.FakeMatrix.FakeMatrix.CustomList.Values.Model', [
    'underscore',
    'SC.Model',
	'Configuration',
    'TelQuest.FakeMatrix.FakeMatrix.SuiteletProxy'
], function (
    _,
    SCModel,
	Configuration,
    SuiteletProxy
) {
    'use strict';

    return SCModel.extend({

        name: 'FakeMatrixCustomLists',

        getCustomLists: function getCustomLists() {
			nlapiLogExecution('debug','Configuration',Configuration.get('fakematrix'));
            var configuration=Configuration.get('fakematrix');
            var lists = configuration['options'];
            var matrixLists = {};
            var response;
            var parsedLists = _.compact(_.pluck(lists, 'list'));
            response = new SuiteletProxy({
                scriptId: 'customscript_athq_get_custom_lists',
                deployId: 'customdeploy_athq_get_custom_lists',
                parameters: {
                    lists: parsedLists.join(',')
                },
                body: null,
                requestType: 'GET',
                isAvailableWithoutLogin: true,
                cache: {
                    enabled: true,
                    ttl: 2 * 60 * 60
                }
            }).get();

            if (response) {
                _.each(lists, function eachList(option) {
                    matrixLists[option.fieldId] = response[option.list];
                });
            }

            return matrixLists;
        }
    });
});
