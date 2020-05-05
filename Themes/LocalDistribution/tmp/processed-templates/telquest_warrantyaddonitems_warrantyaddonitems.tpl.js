define('telquest_warrantyaddonitems_warrantyaddonitems.tpl', ['Handlebars','Handlebars.CompilerNameLookup'], function (Handlebars, compilerNameLookup){ var t = {"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3=container.escapeExpression;

  return "<section class=\"warrantyaddonitems-info-card\">\n    <span class=\"warrantyaddonitems-info-card-content\">\n      "
    + alias3(((helper = (helper = compilerNameLookup(helpers,"message") || (depth0 != null ? compilerNameLookup(depth0,"message") : depth0)) != null ? helper : alias2),(typeof helper === "function" ? helper.call(alias1,{"name":"message","hash":{},"data":data}) : helper)))
    + "\n    </span>\n</section>\n\n\n<!--\n  Available helpers:\n  "
    + alias3((compilerNameLookup(helpers,"getExtensionAssetsPath") || (depth0 && compilerNameLookup(depth0,"getExtensionAssetsPath")) || alias2).call(alias1,"img/image.jpg",{"name":"getExtensionAssetsPath","hash":{},"data":data}))
    + " - reference assets in your extension\n  \n  "
    + alias3((compilerNameLookup(helpers,"getExtensionAssetsPathWithDefault") || (depth0 && compilerNameLookup(depth0,"getExtensionAssetsPathWithDefault")) || alias2).call(alias1,(depth0 != null ? compilerNameLookup(depth0,"context_var") : depth0),"img/image.jpg",{"name":"getExtensionAssetsPathWithDefault","hash":{},"data":data}))
    + " - use context_var value i.e. configuration variable. If it does not exist, fallback to an asset from the extension assets folder\n  \n  "
    + alias3((compilerNameLookup(helpers,"getThemeAssetsPath") || (depth0 && compilerNameLookup(depth0,"getThemeAssetsPath")) || alias2).call(alias1,(depth0 != null ? compilerNameLookup(depth0,"context_var") : depth0),"img/image.jpg",{"name":"getThemeAssetsPath","hash":{},"data":data}))
    + " - reference assets in the active theme\n  \n  "
    + alias3((compilerNameLookup(helpers,"getThemeAssetsPathWithDefault") || (depth0 && compilerNameLookup(depth0,"getThemeAssetsPathWithDefault")) || alias2).call(alias1,(depth0 != null ? compilerNameLookup(depth0,"context_var") : depth0),"img/theme-image.jpg",{"name":"getThemeAssetsPathWithDefault","hash":{},"data":data}))
    + " - use context_var value i.e. configuration variable. If it does not exist, fallback to an asset from the theme assets folder\n-->";
},"useData":true}; var main = t.main; t.main = function(){ arguments[1] = arguments[1] || {}; var ctx = arguments[1]; ctx._extension_path = 'http://localhost:7777/tmp/extensions/TelQuest/WarrantyAddOnItems/1.0.0/'; ctx._theme_path = 'http://localhost:7777/tmp/extensions/TelQuest/Cool_Menu_Theme/19.2.0/'; return main.apply(this, arguments); }; var template = Handlebars.template(t); template.Name = 'telquest_warrantyaddonitems_warrantyaddonitems'; return template;});