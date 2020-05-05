define('subscriptions_addon_item_cell.tpl', ['Handlebars','Handlebars.CompilerNameLookup'], function (Handlebars, compilerNameLookup){ var t = {"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<div class=\"subscriptions-addon-item-cell-view-span3\" data-type=\"item\" data-id=\""
    + alias4(((helper = (helper = compilerNameLookup(helpers,"lineNumber") || (depth0 != null ? compilerNameLookup(depth0,"lineNumber") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"lineNumber","hash":{},"data":data}) : helper)))
    + "\">\n	<meta itemprop=\"url\" content=\""
    + alias4(((helper = (helper = compilerNameLookup(helpers,"itemurl") || (depth0 != null ? compilerNameLookup(depth0,"itemurl") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"itemurl","hash":{},"data":data}) : helper)))
    + "\"/>\n\n	<div class=\"subscriptions-addon-item-cell-grid-image-wrapper\">\n		<a class=\"subscriptions-addon-item-cell-grid-link-image\" data-action=\"add\">\n			<img class=\"subscriptions-addon-item-cell-grid-image\" src=\""
    + alias4(((helper = (helper = compilerNameLookup(helpers,"image") || (depth0 != null ? compilerNameLookup(depth0,"image") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"image","hash":{},"data":data}) : helper)))
    + "\" alt=\""
    + alias4(container.lambda(((stack1 = (depth0 != null ? compilerNameLookup(depth0,"thumbnail") : depth0)) != null ? compilerNameLookup(stack1,"altimagetext") : stack1), depth0))
    + "\" itemprop=\"image\"/>\n		</a>\n	</div>\n\n	<div class=\"subscriptions-addon-item-cell-grid-details\">\n		<div class=\"subscriptions-addon-item-cell-grid-title\">\n            <a class=\"subscriptions-addon-item-cell-grid-title-link\" href=\"\" data-action=\"add\" data-id=\""
    + alias4(((helper = (helper = compilerNameLookup(helpers,"lineNumber") || (depth0 != null ? compilerNameLookup(depth0,"lineNumber") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"lineNumber","hash":{},"data":data}) : helper)))
    + "\">"
    + alias4(((helper = (helper = compilerNameLookup(helpers,"title") || (depth0 != null ? compilerNameLookup(depth0,"title") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data}) : helper)))
    + "</a>\n		</div>\n\n		<div class=\"subscriptions-addon-item-cell-grid-price\">\n            "
    + alias4(((helper = (helper = compilerNameLookup(helpers,"price") || (depth0 != null ? compilerNameLookup(depth0,"price") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"price","hash":{},"data":data}) : helper)))
    + "\n		</div>\n		<div class=\"subscriptions-addon-item-cell-grid-description\">\n			"
    + ((stack1 = ((helper = (helper = compilerNameLookup(helpers,"description") || (depth0 != null ? compilerNameLookup(depth0,"description") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"description","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "\n		</div>\n	</div>\n</div>\n\n\n\n";
},"useData":true}; var main = t.main; t.main = function(){ arguments[1] = arguments[1] || {}; var ctx = arguments[1]; ctx._extension_path = 'http://localhost:7777/tmp/extensions/TelQuest/Cool_Menu_Theme/19.2.0/'; ctx._theme_path = 'http://localhost:7777/tmp/extensions/TelQuest/Cool_Menu_Theme/19.2.0/'; return main.apply(this, arguments); }; var template = Handlebars.template(t); template.Name = 'subscriptions_addon_item_cell'; return template;});