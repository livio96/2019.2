define('payment_wizard_confirmation_module.tpl', ['Handlebars','Handlebars.CompilerNameLookup'], function (Handlebars, compilerNameLookup){ var t = {"1":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "		<p class=\"payment-wizard-confirmation-module-body\">\n			<a href=\"/transactionhistory/customerpayment/"
    + alias4(((helper = (helper = compilerNameLookup(helpers,"confirmationId") || (depth0 != null ? compilerNameLookup(depth0,"confirmationId") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"confirmationId","hash":{},"data":data}) : helper)))
    + "\" data-touchpoint=\"customercenter\" data-hashtag=\"#transactionhistory/customerpayment/"
    + alias4(((helper = (helper = compilerNameLookup(helpers,"confirmationId") || (depth0 != null ? compilerNameLookup(depth0,"confirmationId") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"confirmationId","hash":{},"data":data}) : helper)))
    + "\" data-action=\"update-layout\">"
    + alias4((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || alias2).call(alias1,"Payment #$(0)",(depth0 != null ? compilerNameLookup(depth0,"tranId") : depth0),{"name":"translate","hash":{},"data":data}))
    + "</a>\n		</p>\n";
},"3":function(container,depth0,helpers,partials,data) {
    var alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3=container.escapeExpression;

  return "		<p class=\"payment-wizard-confirmation-module-body\">"
    + alias3((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || alias2).call(alias1,"A Deposit/Credit Memo Application was generated.",{"name":"translate","hash":{},"data":data}))
    + "</p>\n		<p class=\"payment-wizard-confirmation-module-body\">"
    + alias3((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || alias2).call(alias1,"You can see the details in <a href=\"/transactionhistory\" data-action=\"update-layout\">Transaction History</a> page.",{"name":"translate","hash":{},"data":data}))
    + "</p>\n";
},"5":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing;

  return "		<a href=\""
    + ((stack1 = ((helper = (helper = compilerNameLookup(helpers,"dwonloadPDFURL") || (depth0 != null ? compilerNameLookup(depth0,"dwonloadPDFURL") : depth0)) != null ? helper : alias2),(typeof helper === "function" ? helper.call(alias1,{"name":"dwonloadPDFURL","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "\" target=\"_blank\" class=\"payment-wizard-confirmation-module-download\" >\n			"
    + container.escapeExpression((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || alias2).call(alias1,"Download as PDF",{"name":"translate","hash":{},"data":data}))
    + "\n		</a>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3=container.escapeExpression;

  return "<div class=\"payment-wizard-confirmation-module alert fade in\">\n	<h2 class=\"payment-wizard-confirmation-module-title\">"
    + alias3((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || alias2).call(alias1,"Thank you!",{"name":"translate","hash":{},"data":data}))
    + "</h2>\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"showLinkConfirmation") : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.program(3, data, 0),"data":data})) != null ? stack1 : "")
    + "	<p class=\"payment-wizard-confirmation-module-body\">"
    + alias3((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || alias2).call(alias1,"You will receive an email with your payment confirmation.",{"name":"translate","hash":{},"data":data}))
    + "</p>\n\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"isConfirmationCreated") : depth0),{"name":"if","hash":{},"fn":container.program(5, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\n	<a href=\"/invoices\" class=\"payment-wizard-confirmation-module-payment\" data-action=\"update-layout\" >"
    + alias3((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || alias2).call(alias1,"Back to Invoices",{"name":"translate","hash":{},"data":data}))
    + " </a>\n</div>\n\n\n\n\n";
},"useData":true}; var main = t.main; t.main = function(){ arguments[1] = arguments[1] || {}; var ctx = arguments[1]; ctx._extension_path = 'http://localhost:7777/tmp/extensions/TelQuest/Cool_Menu_Theme/19.2.0/'; ctx._theme_path = 'http://localhost:7777/tmp/extensions/TelQuest/Cool_Menu_Theme/19.2.0/'; return main.apply(this, arguments); }; var template = Handlebars.template(t); template.Name = 'payment_wizard_confirmation_module'; return template;});