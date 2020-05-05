define('subscriptions_addon_summary.tpl', ['Handlebars','Handlebars.CompilerNameLookup'], function (Handlebars, compilerNameLookup){ var t = {"1":function(container,depth0,helpers,partials,data) {
    var helper;

  return container.escapeExpression(((helper = (helper = compilerNameLookup(helpers,"itemPrice") || (depth0 != null ? compilerNameLookup(depth0,"itemPrice") : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"itemPrice","hash":{},"data":data}) : helper)));
},"3":function(container,depth0,helpers,partials,data) {
    return container.escapeExpression((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"-",{"name":"translate","hash":{},"data":data}));
},"5":function(container,depth0,helpers,partials,data) {
    var helper;

  return container.escapeExpression(((helper = (helper = compilerNameLookup(helpers,"itemPriceTotal") || (depth0 != null ? compilerNameLookup(depth0,"itemPriceTotal") : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"itemPriceTotal","hash":{},"data":data}) : helper)));
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3=container.escapeExpression;

  return "<div class=\"subscriptions-addon-summary-container\">\n    <h3 class=\"subscriptions-addon-summary-title\">Summary</h3>\n    <div class=\"subscriptions-addon-summary-subtotal\">\n        <p class=\"subscriptions-addon-summary-grid-float\">\n            <span class=\"subscriptions-addon-summary-grid-left\">"
    + alias3((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || alias2).call(alias1,"Subtotal",{"name":"translate","hash":{},"data":data}))
    + " <span>"
    + alias3(((helper = (helper = compilerNameLookup(helpers,"itemQuantity") || (depth0 != null ? compilerNameLookup(depth0,"itemQuantity") : depth0)) != null ? helper : alias2),(typeof helper === "function" ? helper.call(alias1,{"name":"itemQuantity","hash":{},"data":data}) : helper)))
    + " "
    + alias3((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || alias2).call(alias1,"item",{"name":"translate","hash":{},"data":data}))
    + "(s)</span></span>\n            <span class=\"subscriptions-addon-summary-grid-right\">"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"hasItemPrice") : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.program(3, data, 0),"data":data})) != null ? stack1 : "")
    + "</span>\n        </p>\n    </div>\n    <div class=\"subscriptions-addon-summary-total\">\n        <p class=\"subscriptions-addon-summary-grid-float\">\n            "
    + alias3((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || alias2).call(alias1,"Total",{"name":"translate","hash":{},"data":data}))
    + " <span class=\"subscriptions-addon-summary-grid-right\">"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"hasItemPrice") : depth0),{"name":"if","hash":{},"fn":container.program(5, data, 0),"inverse":container.program(3, data, 0),"data":data})) != null ? stack1 : "")
    + "</span>\n        </p>\n    </div>\n</div>\n";
},"useData":true}; var main = t.main; t.main = function(){ arguments[1] = arguments[1] || {}; var ctx = arguments[1]; ctx._extension_path = 'http://localhost:7777/tmp/extensions/TelQuest/Cool_Menu_Theme/19.2.0/'; ctx._theme_path = 'http://localhost:7777/tmp/extensions/TelQuest/Cool_Menu_Theme/19.2.0/'; return main.apply(this, arguments); }; var template = Handlebars.template(t); template.Name = 'subscriptions_addon_summary'; return template;});