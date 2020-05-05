define('myaccount_layout.tpl', ['Handlebars','Handlebars.CompilerNameLookup'], function (Handlebars, compilerNameLookup){ var t = {"1":function(container,depth0,helpers,partials,data) {
    return "-standalone";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {});

  return "<div id=\"layout\" class=\"myaccount-layout\">\n	<header id=\"site-header\" class=\"myaccount-layout-header\" data-view=\"Header\"></header>\n\n	<div id=\"main-container\" class=\"myaccount-layout-container\">\n\n		<div class=\"myaccount-layout-breadcrumb\" data-view=\"Global.Breadcrumb\" data-type=\"breadcrumb\"></div>\n		<div class=\"myaccount-layout-notifications\">\n			<div data-view=\"Notifications\"></div>\n		</div>\n		<div class=\"myaccount-layout-error-placeholder\"></div>\n\n		<h2 class=\"myaccount-layout-title\">"
    + container.escapeExpression((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helpers.helperMissing).call(alias1,"My Account",{"name":"translate","hash":{},"data":data}))
    + "</h2>\n		<div class=\"myaccount-layout-row\">\n			<nav id=\"side-nav\" class=\"myaccount-layout-side-nav\" data-view=\"MenuTree\"></nav>\n\n			<div id=\"content\" class=\"myaccount"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"isStandalone") : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "-layout-main\"></div>\n		</div>\n\n	</div>\n\n	<footer id=\"site-footer\" class=\"myaccount-layout-footer\" data-view=\"Footer\"></footer>\n\n</div>\n\n\n\n";
},"useData":true}; var main = t.main; t.main = function(){ arguments[1] = arguments[1] || {}; var ctx = arguments[1]; ctx._extension_path = 'http://localhost:7777/tmp/extensions/TelQuest/Cool_Menu_Theme/19.2.0/'; ctx._theme_path = 'http://localhost:7777/tmp/extensions/TelQuest/Cool_Menu_Theme/19.2.0/'; return main.apply(this, arguments); }; var template = Handlebars.template(t); template.Name = 'myaccount_layout'; return template;});