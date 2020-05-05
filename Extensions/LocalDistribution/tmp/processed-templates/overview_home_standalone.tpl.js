define('overview_home_standalone.tpl', ['Handlebars','Handlebars.CompilerNameLookup'], function (Handlebars, compilerNameLookup){ var t = {"1":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3=container.escapeExpression;

  return "\n            <table class=\"overview-home-invoices-list-table\">\n                <thead class=\"overview-home-content-table\">\n                    <tr class=\"overview-home-content-table-header-row\">\n                        <th class=\"overview-home-content-table-header-row-title\">\n                            <span>"
    + alias3((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || alias2).call(alias1,"Invoice No.",{"name":"translate","hash":{},"data":data}))
    + "</span>\n                        </th>\n                        <th class=\"overview-home-content-table-header-row-date\">\n                            <span>"
    + alias3((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || alias2).call(alias1,"Date",{"name":"translate","hash":{},"data":data}))
    + "</span>\n                        </th>\n\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"isSCISIntegrationEnabled") : depth0),{"name":"if","hash":{},"fn":container.program(2, data, 0),"inverse":container.program(4, data, 0),"data":data})) != null ? stack1 : "")
    + "                    </tr>\n                </thead>\n                <tbody class=\"overview-home-invoices-list\" data-view=\"Invoices.Results\"></tbody>\n            </table>\n\n";
},"2":function(container,depth0,helpers,partials,data) {
    return "\n                        <th class=\"overview-home-content-table-header-row-amount\">\n                            <span>"
    + container.escapeExpression((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"Amount",{"name":"translate","hash":{},"data":data}))
    + "</span>\n                        </th>\n\n";
},"4":function(container,depth0,helpers,partials,data) {
    var alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3=container.escapeExpression;

  return "\n                        <th class=\"overview-home-content-table-header-row-amount\">\n                            <span>"
    + alias3((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || alias2).call(alias1,"Amount",{"name":"translate","hash":{},"data":data}))
    + "</span>\n                        </th>\n                        <th class=\"overview-home-content-table-header-row-status\">\n                            <span>"
    + alias3((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || alias2).call(alias1,"Status",{"name":"translate","hash":{},"data":data}))
    + "</span>\n                        </th>\n\n";
},"6":function(container,depth0,helpers,partials,data) {
    return "\n            <div class=\"overview-home-invoices-empty-section\">\n                <h5>"
    + container.escapeExpression((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"You don't have any invoice in your account right now.",{"name":"translate","hash":{},"data":data}))
    + "</h5>\n            </div>\n\n";
},"8":function(container,depth0,helpers,partials,data) {
    return "	<div class=\"overview-home-header-links\">\n		"
    + container.escapeExpression((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"Need Help? Contact <a href=\"$(0)\">Customer Service</a>",(depth0 != null ? compilerNameLookup(depth0,"customerSupportURL") : depth0),{"name":"translate","hash":{},"data":data}))
    + "\n	</div>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3=container.escapeExpression;

  return "<section class=\"overview-home-standalone\">\n\n  <div class=\"overview-home-invoices\">\n    <div class=\"overview-home-invoices-header\">\n      <h2 class=\"overview-home-title\">Account Overview</h2>\n      <hr>\n      <h3 class=\"overview-home-invoices-title\">"
    + alias3((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || alias2).call(alias1,"Recent Invoices",{"name":"translate","hash":{},"data":data}))
    + "</h3>\n        <a href=\"/invoices\" data-type=\"invoices-list\" class=\"overview-home-anchor-invoices-list\">\n          "
    + alias3((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || alias2).call(alias1,"View Invoices List",{"name":"translate","hash":{},"data":data}))
    + "\n        </a>\n      </div>\n		  <div class=\"overview-home-invoices-results-container\">\n\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"collectionLengthGreaterThan0") : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.program(6, data, 0),"data":data})) != null ? stack1 : "")
    + "\n		</div>\n	</div>\n</section>\n\n<section class=\"overview-home-mysettings\">\n    <h3>"
    + alias3((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || alias2).call(alias1,"My Settings",{"name":"translate","hash":{},"data":data}))
    + "</h3>\n    <div class=\"overview-home-mysettings-row\">\n        <div class=\"overview-home-mysettings-profile\">\n            <div data-view=\"Overview.Profile\"></div>\n        </div>\n        <div class=\"overview-home-mysettings-shipping\">\n            <div data-view=\"Overview.Shipping\"></div>\n        </div>\n        <div class=\"overview-home-mysettings-payment\">\n            <div data-view=\"Overview.Payment\"></div>\n        </div>\n    </div>\n</section>\n<div data-view=\"Overview.Banner\"></div>\n\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"hasCustomerSupportURL") : depth0),{"name":"if","hash":{},"fn":container.program(8, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\n\n\n";
},"useData":true}; var main = t.main; t.main = function(){ arguments[1] = arguments[1] || {}; var ctx = arguments[1]; ctx._extension_path = 'http://localhost:7777/tmp/extensions/TelQuest/Cool_Menu_Theme/19.2.0/'; ctx._theme_path = 'http://localhost:7777/tmp/extensions/TelQuest/Cool_Menu_Theme/19.2.0/'; return main.apply(this, arguments); }; var template = Handlebars.template(t); template.Name = 'overview_home_standalone'; return template;});