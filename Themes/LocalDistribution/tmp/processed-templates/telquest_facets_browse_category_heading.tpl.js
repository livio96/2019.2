define('telquest_facets_browse_category_heading.tpl', ['Handlebars','Handlebars.CompilerNameLookup'], function (Handlebars, compilerNameLookup){ var t = {"1":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3=container.escapeExpression;

  return "		<div class=\"facets-browse-category-heading-main-image\">\n			<img class=\"brand-top-banner\" src=\""
    + alias3((compilerNameLookup(helpers,"resizeImage") || (depth0 && compilerNameLookup(depth0,"resizeImage")) || alias2).call(alias1,(depth0 != null ? compilerNameLookup(depth0,"banner") : depth0),"categorybanner",{"name":"resizeImage","hash":{},"data":data}))
    + "\" alt=\""
    + alias3(((helper = (helper = compilerNameLookup(helpers,"pageheading") || (depth0 != null ? compilerNameLookup(depth0,"pageheading") : depth0)) != null ? helper : alias2),(typeof helper === "function" ? helper.call(alias1,{"name":"pageheading","hash":{},"data":data}) : helper)))
    + "\" />\n		</div>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {});

  return "\n<section class=\"facets-browse-category-heading-list-header\">\n	<div class=\"facets-browse-category-heading-main-description\">\n\n	</div>\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"hasBanner") : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "    <p>"
    + ((stack1 = ((helper = (helper = compilerNameLookup(helpers,"description") || (depth0 != null ? compilerNameLookup(depth0,"description") : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(alias1,{"name":"description","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "</p>\n</section>\n\n\n\n\n";
},"useData":true}; var main = t.main; t.main = function(){ arguments[1] = arguments[1] || {}; var ctx = arguments[1]; ctx._extension_path = 'http://localhost:7777/tmp/extensions/TelQuest/ProductDetails/1.0.0/'; ctx._theme_path = 'http://localhost:7777/tmp/extensions/SuiteCommerce/ThemeTwo/19.2.0/'; return main.apply(this, arguments); }; var template = Handlebars.template(t); template.Name = 'telquest_facets_browse_category_heading'; return template;});