define('subscriptions_addon_review.tpl', ['Handlebars','Handlebars.CompilerNameLookup'], function (Handlebars, compilerNameLookup){ var t = {"1":function(container,depth0,helpers,partials,data) {
    return "                <p class=\"subscriptions-addon-review-summary-message-info\">"
    + container.escapeExpression((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"Costs will be prorated to the current subscription billing period",{"name":"translate","hash":{},"data":data}))
    + "</p>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<div class=\"subscriptions-addon-review\">\n    <h2 class=\"subscriptions-addon-review-title\">"
    + alias4(((helper = (helper = compilerNameLookup(helpers,"itemName") || (depth0 != null ? compilerNameLookup(depth0,"itemName") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"itemName","hash":{},"data":data}) : helper)))
    + "</h2>\n    <div class=\"subscriptions-addon-review-container\">\n        <div class=\"subscriptions-addon-review-left\">\n            <div class=\"subscriptions-addon-review-review\">\n                <section class=\"subscriptions-addon-review-review\">\n                    <div class=\"subscriptions-addon-review-review-image\">\n                        <img src=\""
    + alias4((compilerNameLookup(helpers,"resizeImage") || (depth0 && compilerNameLookup(depth0,"resizeImage")) || alias2).call(alias1,(depth0 != null ? compilerNameLookup(depth0,"itemImage") : depth0),"thumbnail",{"name":"resizeImage","hash":{},"data":data}))
    + "\" />\n                    </div>\n                    <div class=\"subscriptions-addon-review-review-data\">\n                        <h4>"
    + alias4(((helper = (helper = compilerNameLookup(helpers,"itemName") || (depth0 != null ? compilerNameLookup(depth0,"itemName") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"itemName","hash":{},"data":data}) : helper)))
    + "</h4>\n                        <p>"
    + alias4(((helper = (helper = compilerNameLookup(helpers,"itemPrice") || (depth0 != null ? compilerNameLookup(depth0,"itemPrice") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"itemPrice","hash":{},"data":data}) : helper)))
    + "</p>\n                        <p>"
    + alias4((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || alias2).call(alias1,"Quantity",{"name":"translate","hash":{},"data":data}))
    + ": "
    + alias4(((helper = (helper = compilerNameLookup(helpers,"itemQuantity") || (depth0 != null ? compilerNameLookup(depth0,"itemQuantity") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"itemQuantity","hash":{},"data":data}) : helper)))
    + "</p>\n                        <p>"
    + ((stack1 = ((helper = (helper = compilerNameLookup(helpers,"itemDescription") || (depth0 != null ? compilerNameLookup(depth0,"itemDescription") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"itemDescription","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "</p>\n                    </div>\n                </section>\n            </div>\n        </div>\n        <div class=\"subscriptions-addon-review-right\">\n            <div class=\"subscriptions-addon-review-summary\" data-view=\"Summary.View\"></div>\n            <div class=\"subscriptions-addon-review-row-fluid\">\n                <button class=\"subscriptions-addon-review-button-continue\" data-action=\"submit\">\n                    "
    + alias4((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || alias2).call(alias1,"Place Order",{"name":"translate","hash":{},"data":data}))
    + "\n                </button>\n            </div>\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"showInfoMessage") : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "        </div>\n    </div>\n</div>\n\n";
},"useData":true}; var main = t.main; t.main = function(){ arguments[1] = arguments[1] || {}; var ctx = arguments[1]; ctx._extension_path = 'http://localhost:7777/tmp/extensions/TelQuest/Cool_Menu_Theme/19.2.0/'; ctx._theme_path = 'http://localhost:7777/tmp/extensions/TelQuest/Cool_Menu_Theme/19.2.0/'; return main.apply(this, arguments); }; var template = Handlebars.template(t); template.Name = 'subscriptions_addon_review'; return template;});