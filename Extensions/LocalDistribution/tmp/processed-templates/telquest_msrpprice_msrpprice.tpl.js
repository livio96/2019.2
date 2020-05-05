define('telquest_msrpprice_msrpprice.tpl', ['Handlebars','Handlebars.CompilerNameLookup'], function (Handlebars, compilerNameLookup){ var t = {"1":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3=container.escapeExpression;

  return "\n    <small class=\"item-views-price-msrp\">\n        "
    + alias3((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || alias2).call(alias1,"MSRP",{"name":"translate","hash":{},"data":data}))
    + ": "
    + alias3(((helper = (helper = compilerNameLookup(helpers,"priceRetailFormatted") || (depth0 != null ? compilerNameLookup(depth0,"priceRetailFormatted") : depth0)) != null ? helper : alias2),(typeof helper === "function" ? helper.call(alias1,{"name":"priceRetailFormatted","hash":{},"data":data}) : helper)))
    + "\n    </small>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "rama"
    + ((stack1 = compilerNameLookup(helpers,"if").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? compilerNameLookup(depth0,"priceRetailFormatted") : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"useData":true}; var main = t.main; t.main = function(){ arguments[1] = arguments[1] || {}; var ctx = arguments[1]; ctx._extension_path = 'http://localhost:7777/tmp/extensions/TelQuest/MSRPPrice/1.0.0/'; ctx._theme_path = 'http://localhost:7777/tmp/extensions/TelQuest/Cool_Menu_Theme/19.2.0/'; return main.apply(this, arguments); }; var template = Handlebars.template(t); template.Name = 'telquest_msrpprice_msrpprice'; return template;});