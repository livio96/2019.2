define('subscriptions_details.tpl', ['Handlebars','Handlebars.CompilerNameLookup'], function (Handlebars, compilerNameLookup){ var t = {"1":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3=container.escapeExpression;

  return "            <span class=\"subscriptions-details-label subscriptions-details-label-"
    + alias3(((helper = (helper = compilerNameLookup(helpers,"statusLowerCase") || (depth0 != null ? compilerNameLookup(depth0,"statusLowerCase") : depth0)) != null ? helper : alias2),(typeof helper === "function" ? helper.call(alias1,{"name":"statusLowerCase","hash":{},"data":data}) : helper)))
    + "\">"
    + alias3((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || alias2).call(alias1,(depth0 != null ? compilerNameLookup(depth0,"status") : depth0),{"name":"translate","hash":{},"data":data}))
    + "</span>\n";
},"3":function(container,depth0,helpers,partials,data) {
    return "        <section class=\"subscriptions-details-plan\">\n	<div class=\"subscriptions-details-plan-header\">\n                <h3>"
    + container.escapeExpression((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"Subscription",{"name":"translate","hash":{},"data":data}))
    + "</h3>\n	</div>\n            <div data-view='Required.Lines.Collection' class=\"subscriptions-details-required-lines-list\"></div>\n        </section>\n";
},"5":function(container,depth0,helpers,partials,data) {
    return "        <section class=\"subscriptions-details-lines\">\n	<div class=\"subscriptions-details-lines-header\">\n                <h3>"
    + container.escapeExpression((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"Add-ons",{"name":"translate","hash":{},"data":data}))
    + "</h3>\n	</div>\n            <div data-view='Optional.Lines.Collection' class=\"subscriptions-details-optional-lines-list\"></div>\n        </section>\n";
},"7":function(container,depth0,helpers,partials,data) {
    return "    <button class=\"subscriptions-details-cancel-button\" data-action=\"cancel-subscription\">"
    + container.escapeExpression((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"Cancel Subscription",{"name":"translate","hash":{},"data":data}))
    + "</button>\n";
},"9":function(container,depth0,helpers,partials,data) {
    return "    <button class=\"subscriptions-details-reactivate-button\" data-action=\"reactivate-subscription\">"
    + container.escapeExpression((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"Reactivate Subscription",{"name":"translate","hash":{},"data":data}))
    + "</button>\n";
},"11":function(container,depth0,helpers,partials,data) {
    return "    <button data-action=\"goToAddOnsMarket\" class=\"subscriptions-details-addons-button\">\n        "
    + container.escapeExpression((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"Add-ons",{"name":"translate","hash":{},"data":data}))
    + "\n    </button>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<div class=\"subscriptions-details\">\n<header class=\"subscriptions-details-top-header\">\n        <h2>"
    + alias4(((helper = (helper = compilerNameLookup(helpers,"name") || (depth0 != null ? compilerNameLookup(depth0,"name") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data}) : helper)))
    + "</h2>\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"hasSubscriptionStatus") : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "</header>\n\n<section class=\"subscriptions-details-top-info\">\n        <div class=\"subscriptions-details-header-container subscriptions-details-last-bill\">\n            <span class=\"subscriptions-details-line-label\">"
    + alias4((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || alias2).call(alias1,"Last Billing",{"name":"translate","hash":{},"data":data}))
    + "</span><br/>\n            <span class=\"subscriptions-details-line-value\">"
    + alias4(((helper = (helper = compilerNameLookup(helpers,"lastBillDate") || (depth0 != null ? compilerNameLookup(depth0,"lastBillDate") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"lastBillDate","hash":{},"data":data}) : helper)))
    + "</span>\n    	</div>\n        <div class=\"subscriptions-details-header-container subscriptions-details-next-bill\">\n            <span class=\"subscriptions-details-line-label\">"
    + alias4((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || alias2).call(alias1,"Next Billing",{"name":"translate","hash":{},"data":data}))
    + "</span><br/>\n            <span class=\"subscriptions-details-line-value\">"
    + alias4(((helper = (helper = compilerNameLookup(helpers,"nextBillCycleDate") || (depth0 != null ? compilerNameLookup(depth0,"nextBillCycleDate") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"nextBillCycleDate","hash":{},"data":data}) : helper)))
    + "</span>\n        </div>\n        <a class=\"subscriptions-details-invoice-link\" href=\"/invoices\">"
    + alias4((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || alias2).call(alias1,"View Invoices",{"name":"translate","hash":{},"data":data}))
    + "</a>\n</section>\n\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"isRequiredLinesCountGreaterThan0") : depth0),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"isOptionalLinesCountGreaterThan0") : depth0),{"name":"if","hash":{},"fn":container.program(5, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\n<div class=\"subscriptions-details-buttons-container\">\n\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"canBeSuspended") : depth0),{"name":"if","hash":{},"fn":container.program(7, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"canBeReactivated") : depth0),{"name":"if","hash":{},"fn":container.program(9, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"isNonIncludedLinesCountGreaterThan0") : depth0),{"name":"if","hash":{},"fn":container.program(11, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "</div>\n</div>\n\n";
},"useData":true}; var main = t.main; t.main = function(){ arguments[1] = arguments[1] || {}; var ctx = arguments[1]; ctx._extension_path = 'http://localhost:7777/tmp/extensions/TelQuest/Cool_Menu_Theme/19.2.0/'; ctx._theme_path = 'http://localhost:7777/tmp/extensions/TelQuest/Cool_Menu_Theme/19.2.0/'; return main.apply(this, arguments); }; var template = Handlebars.template(t); template.Name = 'subscriptions_details'; return template;});