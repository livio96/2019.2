define('telquest_siteheader_siteheader.tpl', ['Handlebars','Handlebars.CompilerNameLookup'], function (Handlebars, compilerNameLookup){ var t = {"1":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3=container.escapeExpression, alias4=container.lambda;

  return "    <p>"
    + alias3((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || alias2).call(alias1,"Name:",{"name":"translate","hash":{},"data":data}))
    + " "
    + alias3(alias4(((stack1 = (depth0 != null ? compilerNameLookup(depth0,"salesRep") : depth0)) != null ? compilerNameLookup(stack1,"name") : stack1), depth0))
    + "</p>\n    <p><i class=\"fas fa-phone\"></i> <a href=\"tel:"
    + alias3(alias4(((stack1 = (depth0 != null ? compilerNameLookup(depth0,"salesRep") : depth0)) != null ? compilerNameLookup(stack1,"phone") : stack1), depth0))
    + "\">"
    + alias3((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || alias2).call(alias1,"phone:",{"name":"translate","hash":{},"data":data}))
    + " "
    + alias3(alias4(((stack1 = (depth0 != null ? compilerNameLookup(depth0,"salesRep") : depth0)) != null ? compilerNameLookup(stack1,"phone") : stack1), depth0))
    + "</a></p>\n    <p><i class=\"fas fa-envelope-open-text\"></i> <a href=\"mailto:"
    + alias3(alias4(((stack1 = (depth0 != null ? compilerNameLookup(depth0,"salesRep") : depth0)) != null ? compilerNameLookup(stack1,"email") : stack1), depth0))
    + "\"> "
    + alias3((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || alias2).call(alias1,"email:",{"name":"translate","hash":{},"data":data}))
    + " "
    + alias3(alias4(((stack1 = (depth0 != null ? compilerNameLookup(depth0,"salesRep") : depth0)) != null ? compilerNameLookup(stack1,"email") : stack1), depth0))
    + "</a></p>\n	<p class=\"salesrep-image\"><img src=\""
    + alias3(alias4(((stack1 = (depth0 != null ? compilerNameLookup(depth0,"salesRep") : depth0)) != null ? compilerNameLookup(stack1,"image") : stack1), depth0))
    + "\"></p>\n<!-- <p><i class=\"fab fa-skype\"></i> <a href=\"skype:"
    + alias3(alias4(((stack1 = (depth0 != null ? compilerNameLookup(depth0,"salesRep") : depth0)) != null ? compilerNameLookup(stack1,"email") : stack1), depth0))
    + "?chat\" target=\"_blank\"> : Start Skype Chat </a></p> -->   \n";
},"3":function(container,depth0,helpers,partials,data) {
    return "	<p>Please contact 800-288-7466 our sales rep will assist you.</p>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<div>\n    <div style=\"width: 50%; display: inline-block;\">\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = (depth0 != null ? compilerNameLookup(depth0,"salesRep") : depth0)) != null ? compilerNameLookup(stack1,"name") : stack1),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.program(3, data, 0),"data":data})) != null ? stack1 : "")
    + " </div>\n\n</div>\n\n";
},"useData":true}; var main = t.main; t.main = function(){ arguments[1] = arguments[1] || {}; var ctx = arguments[1]; ctx._extension_path = 'http://localhost:7777/tmp/extensions/TelQuest/SiteHeader/1.0.0/'; ctx._theme_path = 'http://localhost:7777/tmp/extensions/TelQuest/Cool_Menu_Theme/19.2.0/'; return main.apply(this, arguments); }; var template = Handlebars.template(t); template.Name = 'telquest_siteheader_siteheader'; return template;});