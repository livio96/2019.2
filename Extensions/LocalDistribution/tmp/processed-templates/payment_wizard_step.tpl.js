define('payment_wizard_step.tpl', ['Handlebars','Handlebars.CompilerNameLookup'], function (Handlebars, compilerNameLookup){ var t = {"1":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {});

  return "	<div class=\"payment-wizard-step-actions\">\n		<div class=\"payment-wizard-step-button-container\">\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"showContinueButton") : depth0),{"name":"if","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"showBackButton") : depth0),{"name":"if","hash":{},"fn":container.program(4, data, 0),"inverse":container.program(6, data, 0),"data":data})) != null ? stack1 : "")
    + "		</div>\n	</div>\n";
},"2":function(container,depth0,helpers,partials,data) {
    var helper;

  return "				<button class=\"payment-wizard-step-button-continue\" data-action=\"submit-step\">\n					"
    + container.escapeExpression(((helper = (helper = compilerNameLookup(helpers,"continueButtonLabel") || (depth0 != null ? compilerNameLookup(depth0,"continueButtonLabel") : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"continueButtonLabel","hash":{},"data":data}) : helper)))
    + "\n				</button>\n";
},"4":function(container,depth0,helpers,partials,data) {
    return "				<button class=\"payment-wizard-step-button-back\" data-action=\"previous-step\">\n					"
    + container.escapeExpression((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"Back",{"name":"translate","hash":{},"data":data}))
    + "\n				</button>\n";
},"6":function(container,depth0,helpers,partials,data) {
    return "				<a class=\"payment-wizard-step-button-back\" href=\"/invoices\"> \n					"
    + container.escapeExpression((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"Back",{"name":"translate","hash":{},"data":data}))
    + "\n				</a>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {});

  return "<h2 class=\"payment-wizard-step-title\">"
    + container.escapeExpression(((helper = (helper = compilerNameLookup(helpers,"currentStepGroupName") || (depth0 != null ? compilerNameLookup(depth0,"currentStepGroupName") : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(alias1,{"name":"currentStepGroupName","hash":{},"data":data}) : helper)))
    + "</h2>\n\n<div data-type=\"alert-placeholder-step\"></div>\n\n<div class=\"payment-wizard-step-content-wrapper\">\n	<div id=\"wizard-step-content\" class=\"payment-wizard-step-content-main\"></div>\n	<div id=\"wizard-step-content-right\" class=\"payment-wizard-step-content-secondary\"></div>\n\n\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"showNavButtons") : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\n</div>\n\n\n\n\n";
},"useData":true}; var main = t.main; t.main = function(){ arguments[1] = arguments[1] || {}; var ctx = arguments[1]; ctx._extension_path = 'http://localhost:7777/tmp/extensions/TelQuest/Cool_Menu_Theme/19.2.0/'; ctx._theme_path = 'http://localhost:7777/tmp/extensions/TelQuest/Cool_Menu_Theme/19.2.0/'; return main.apply(this, arguments); }; var template = Handlebars.template(t); template.Name = 'payment_wizard_step'; return template;});