define('footer_simplified.tpl', ['Handlebars','Handlebars.CompilerNameLookup'], function (Handlebars, compilerNameLookup){ var t = {"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<div data-view=\"Global.BackToTop\"></div>\n<div class=\"footer-simplified-content\">\n	<div class=\"footer-simplified-content-nav\"></div>\n	<div id=\"banner-footer\" class=\"content-banner banner-footer\" data-cms-area=\"simplified_footer_banner\" data-cms-area-filters=\"global\"></div>\n\n	<div class=\"footer-simplified-content-copyright\">\n		"
    + container.escapeExpression((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"&copy; 2008-2015 Company Name",{"name":"translate","hash":{},"data":data}))
    + "\n	</div>\n</div>\n\n\n\n";
},"useData":true}; var main = t.main; t.main = function(){ arguments[1] = arguments[1] || {}; var ctx = arguments[1]; ctx._extension_path = 'http://localhost:7777/tmp/extensions/TelQuest/Cool_Menu_Theme/19.2.0/'; ctx._theme_path = 'http://localhost:7777/tmp/extensions/TelQuest/Cool_Menu_Theme/19.2.0/'; return main.apply(this, arguments); }; var template = Handlebars.template(t); template.Name = 'footer_simplified'; return template;});