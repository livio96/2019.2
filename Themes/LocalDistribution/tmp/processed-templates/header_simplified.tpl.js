define('header_simplified.tpl', ['Handlebars','Handlebars.CompilerNameLookup'], function (Handlebars, compilerNameLookup){ var t = {"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<nav class=\"header-simplified-header\">\n	<div class=\"header-simplified-header-logo\" data-view=\"Header.Logo\"></div>\n	<div id=\"banner-header-top\" class=\"content-banner banner-header-top\" data-cms-area=\"simplified_header_banner\" data-cms-area-filters=\"global\"></div>\n</nav>\n\n\n\n";
},"useData":true}; var main = t.main; t.main = function(){ arguments[1] = arguments[1] || {}; var ctx = arguments[1]; ctx._extension_path = 'http://localhost:7777/tmp/extensions/TelQuest/Cool_Menu_Theme/19.2.0/'; ctx._theme_path = 'http://localhost:7777/tmp/extensions/TelQuest/Cool_Menu_Theme/19.2.0/'; return main.apply(this, arguments); }; var template = Handlebars.template(t); template.Name = 'header_simplified'; return template;});