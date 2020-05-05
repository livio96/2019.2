define('netsuite_newslettercct.tpl', ['Handlebars','Handlebars.CompilerNameLookup'], function (Handlebars, compilerNameLookup){ var t = {"1":function(container,depth0,helpers,partials,data) {
    return " newslettercct-background-image ";
},"3":function(container,depth0,helpers,partials,data) {
    var helper;

  return " style=\"background-image: url('"
    + container.escapeExpression(((helper = (helper = compilerNameLookup(helpers,"bgimg_url") || (depth0 != null ? compilerNameLookup(depth0,"bgimg_url") : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"bgimg_url","hash":{},"data":data}) : helper)))
    + "');\" ";
},"5":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {});

  return "                <div class=\"newslettercct-input-group\" data-input=\"firstName\" data-validation=\"control-group\">\n                    <div class=\"fields-group-form-control\" data-validation=\"control\">\n                      "
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"labelFirstName") : depth0),{"name":"if","hash":{},"fn":container.program(6, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\n                        <input type=\"text\"\n                               class=\"newslettercct-input\"\n                               id=\"firstName\"\n                               name=\"firstName\"\n                               maxlength=\"32\"\n                               placeholder=\""
    + container.escapeExpression(((helper = (helper = compilerNameLookup(helpers,"firstName") || (depth0 != null ? compilerNameLookup(depth0,"firstName") : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(alias1,{"name":"firstName","hash":{},"data":data}) : helper)))
    + "\">\n                    </div>\n                </div>\n";
},"6":function(container,depth0,helpers,partials,data) {
    var helper;

  return "<label class=\"newslettercct-label\">"
    + container.escapeExpression(((helper = (helper = compilerNameLookup(helpers,"labelFirstName") || (depth0 != null ? compilerNameLookup(depth0,"labelFirstName") : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"labelFirstName","hash":{},"data":data}) : helper)))
    + "</label>";
},"8":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {});

  return "                <div class=\"newslettercct-input-group\" data-input=\"lastName\" data-validation=\"control-group\">\n                    <div class=\"fields-group-form-control\" data-validation=\"control\">\n                      "
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"labelLastName") : depth0),{"name":"if","hash":{},"fn":container.program(9, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\n                        <input type=\"text\"\n                               class=\"newslettercct-input\"\n                               id=\"lastName\"\n                               name=\"lastName\"\n                               maxlength=\"32\"\n                               placeholder=\""
    + container.escapeExpression(((helper = (helper = compilerNameLookup(helpers,"lastName") || (depth0 != null ? compilerNameLookup(depth0,"lastName") : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(alias1,{"name":"lastName","hash":{},"data":data}) : helper)))
    + "\">\n                    </div>\n                </div>\n";
},"9":function(container,depth0,helpers,partials,data) {
    var helper;

  return "<label class=\"newslettercct-label\">"
    + container.escapeExpression(((helper = (helper = compilerNameLookup(helpers,"labelLastName") || (depth0 != null ? compilerNameLookup(depth0,"labelLastName") : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"labelLastName","hash":{},"data":data}) : helper)))
    + "</label>";
},"11":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {});

  return "                <div class=\"newslettercct-input-group\" data-input=\"company\" data-validation=\"control-group\">\n                    <div class=\"fields-group-form-control\" data-validation=\"control\">\n                      "
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"labelCompany") : depth0),{"name":"if","hash":{},"fn":container.program(12, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\n                        <input type=\"text\"\n                               class=\"newslettercct-input\"\n                               id=\"company\"\n                               name=\"company\"\n                               maxlength=\"32\"\n                               placeholder=\""
    + container.escapeExpression(((helper = (helper = compilerNameLookup(helpers,"company") || (depth0 != null ? compilerNameLookup(depth0,"company") : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(alias1,{"name":"company","hash":{},"data":data}) : helper)))
    + "\">\n                    </div>\n                </div>\n";
},"12":function(container,depth0,helpers,partials,data) {
    var helper;

  return "<label class=\"newslettercct-label\">"
    + container.escapeExpression(((helper = (helper = compilerNameLookup(helpers,"labelCompany") || (depth0 != null ? compilerNameLookup(depth0,"labelCompany") : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"labelCompany","hash":{},"data":data}) : helper)))
    + "</label>";
},"14":function(container,depth0,helpers,partials,data) {
    var helper;

  return "<label class=\"newslettercct-label\">"
    + container.escapeExpression(((helper = (helper = compilerNameLookup(helpers,"labelEmail") || (depth0 != null ? compilerNameLookup(depth0,"labelEmail") : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"labelEmail","hash":{},"data":data}) : helper)))
    + "</label>";
},"16":function(container,depth0,helpers,partials,data) {
    return "                    <div data-view=\"GlobalMessageFeedback\"></div>\n";
},"18":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "                <div>\n                    <a class=\"newsletter-link\" href=\""
    + alias4(((helper = (helper = compilerNameLookup(helpers,"termsLink") || (depth0 != null ? compilerNameLookup(depth0,"termsLink") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"termsLink","hash":{},"data":data}) : helper)))
    + "\" target=\"_blank\">"
    + alias4(((helper = (helper = compilerNameLookup(helpers,"termsLabel") || (depth0 != null ? compilerNameLookup(depth0,"termsLabel") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"termsLabel","hash":{},"data":data}) : helper)))
    + "</a>\n                </div>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<section class=\"newslettercct-layout newslettercct-align-center newslettercct-"
    + alias4(((helper = (helper = compilerNameLookup(helpers,"layout") || (depth0 != null ? compilerNameLookup(depth0,"layout") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"layout","hash":{},"data":data}) : helper)))
    + " "
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"bgimg_url") : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + " newslettercct-background clearfix\" "
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"bgimg_url") : depth0),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ">\n  <div class=\"newslettercct-overlay\">\n    <form class=\"newslettercct-form\" data-action=\"newsletter-signup\" novalidate>\n        <div class=\"newslettercct-container\" data-validation=\"control-group\">\n            <h3 class=\"newslettercct-header\">"
    + alias4(((helper = (helper = compilerNameLookup(helpers,"header") || (depth0 != null ? compilerNameLookup(depth0,"header") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"header","hash":{},"data":data}) : helper)))
    + "</h3>\n            <div class=\"newslettercct-subheader\">"
    + ((stack1 = ((helper = (helper = compilerNameLookup(helpers,"subHeader") || (depth0 != null ? compilerNameLookup(depth0,"subHeader") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"subHeader","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "</div>\n\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"showFirstName") : depth0),{"name":"if","hash":{},"fn":container.program(5, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"showLastName") : depth0),{"name":"if","hash":{},"fn":container.program(8, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"showCompany") : depth0),{"name":"if","hash":{},"fn":container.program(11, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\n            <div class=\"newslettercct-input-group\" data-input=\"email\" data-validation=\"control-group\">\n                <div class=\"fields-group-form-control\" data-validation=\"control\">\n                  "
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"labelEmail") : depth0),{"name":"if","hash":{},"fn":container.program(14, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\n                    <input type=\"text\"\n                           class=\"newslettercct-input\"\n                           id=\"email\"\n                           name=\"email\"\n                           maxlength=\"254\"\n                           placeholder=\""
    + alias4(((helper = (helper = compilerNameLookup(helpers,"email") || (depth0 != null ? compilerNameLookup(depth0,"email") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"email","hash":{},"data":data}) : helper)))
    + "\">\n                </div>\n            </div>\n\n            <span class=\"newslettercct-button-container\">\n                    <button type=\"submit\"\n                            data-action=\"submit\"\n                            class=\"newslettercct-submit\">"
    + alias4(((helper = (helper = compilerNameLookup(helpers,"buttonText") || (depth0 != null ? compilerNameLookup(depth0,"buttonText") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"buttonText","hash":{},"data":data}) : helper)))
    + "\n                    </button>\n            </span>\n\n            <div class=\"newsletter-alert-placeholder\" data-type=\"alert-placeholder\">\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"isFeedback") : depth0),{"name":"if","hash":{},"fn":container.program(16, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "            </div>\n\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"hasLink") : depth0),{"name":"if","hash":{},"fn":container.program(18, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "        </div>\n    </form>\n  </div>\n</section>\n\n";
},"useData":true}; var main = t.main; t.main = function(){ arguments[1] = arguments[1] || {}; var ctx = arguments[1]; ctx._extension_path = 'http://localhost:7777/tmp/extensions/SuiteCommerce/NewsletterSignUp/1.1.0/'; ctx._theme_path = 'http://localhost:7777/tmp/extensions/TelQuest/Cool_Menu_Theme/19.2.0/'; return main.apply(this, arguments); }; var template = Handlebars.template(t); template.Name = 'netsuite_newslettercct'; return template;});