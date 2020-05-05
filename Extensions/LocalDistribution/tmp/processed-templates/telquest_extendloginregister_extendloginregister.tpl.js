define('telquest_extendloginregister_extendloginregister.tpl', ['Handlebars','Handlebars.CompilerNameLookup'], function (Handlebars, compilerNameLookup){ var t = {"1":function(container,depth0,helpers,partials,data) {
    var alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3=container.escapeExpression;

  return "<p class=\"login-register-register-form-description\">\n	"
    + alias3((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || alias2).call(alias1,"Create an account and take advantage of faster checkouts and other great benefits.",{"name":"translate","hash":{},"data":data}))
    + "\n</p>\n\n<form class=\"login-register-register-form\" method=\"POST\" novalidate>\n	<small class=\"login-register-register-required\">"
    + alias3((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || alias2).call(alias1,"Required <span class=\"login-register-register-form-required\">*</span>",{"name":"translate","hash":{},"data":data}))
    + "</small>\n\n";
},"3":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "		<div class=\"login-register-register-form-controls-group\" data-validation=\"control-group\">\n			<label class=\"login-register-register-form-label\" for=\"register-company\">\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? compilerNameLookup(depth0,"isCompanyFieldRequire") : depth0),{"name":"if","hash":{},"fn":container.program(4, data, 0),"inverse":container.program(6, data, 0),"data":data})) != null ? stack1 : "")
    + "			</label>\n			<div class=\"login-register-register-form-controls\" data-validation=\"control\">\n				<input type=\"text\" name=\"company\" id=\"register-company\" class=\"login-register-register-form-input\"/>\n			</div>\n		</div>\n";
},"4":function(container,depth0,helpers,partials,data) {
    return "					"
    + container.escapeExpression((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"Company <small class=\"login-register-register-form-required\">*</small>",{"name":"translate","hash":{},"data":data}))
    + "\n";
},"6":function(container,depth0,helpers,partials,data) {
    var alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3=container.escapeExpression;

  return "					"
    + alias3((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || alias2).call(alias1,"Company",{"name":"translate","hash":{},"data":data}))
    + " <small class=\"login-register-register-form-optional\">"
    + alias3((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || alias2).call(alias1,"(optional)",{"name":"translate","hash":{},"data":data}))
    + "</small>\n";
},"8":function(container,depth0,helpers,partials,data) {
    return "		<div class=\"login-register-register-form-controls-group\" data-validation=\"control-group\">\n			<div class=\"login-register-register-form-controls\" data-validation=\"control\">\n				<input value=\"true\" type=\"hidden\" name=\"redirect\">\n			</div>\n		</div>\n";
},"10":function(container,depth0,helpers,partials,data) {
    return " checked ";
},"12":function(container,depth0,helpers,partials,data) {
    return "	<div class=\"login-register-register-form-controls-group\">\n		<button type=\"submit\" class=\"login-register-register-form-submit\">\n			"
    + container.escapeExpression((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"Create Account",{"name":"translate","hash":{},"data":data}))
    + "\n		</button>\n	</div>\n</form>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3=container.escapeExpression, alias4="function";

  return "\n"
    + ((stack1 = compilerNameLookup(helpers,"unless").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"showFormFieldsOnly") : depth0),{"name":"unless","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"showCompanyField") : depth0),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\n	<div class=\"login-register-register-form-controls-group\" data-validation=\"control-group\">\n		<label class=\"login-register-register-form-label\" for=\"register-email\">\n			"
    + alias3((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || alias2).call(alias1,"Email Address <small class=\"login-register-register-form-required\">*</small>",{"name":"translate","hash":{},"data":data}))
    + "\n		</label>\n		<div class=\"login-register-register-form-controls\" data-validation=\"control\">\n			<input type=\"email\" name=\"email\" id=\"register-email\" class=\"login-register-register-form-input\" placeholder=\""
    + alias3((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || alias2).call(alias1,"your@email.com",{"name":"translate","hash":{},"data":data}))
    + "\">\n			<p class=\"login-register-register-form-help-block\">\n				<small>\n					"
    + alias3((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || alias2).call(alias1,"We need your email address to contact you about your order.",{"name":"translate","hash":{},"data":data}))
    + "\n				</small>\n			</p>\n		</div>\n	</div>\n	<div class=\"login-register-register-form-controls-group\" data-validation=\"control-group\">\n		<label class=\"login-register-register-form-label\" for=\"register-password\">\n			"
    + alias3((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || alias2).call(alias1,"Password <small class=\"login-register-register-form-required\">*</small>",{"name":"translate","hash":{},"data":data}))
    + "\n		</label>\n		<div class=\"login-register-register-form-controls\" data-validation=\"control\">\n			<input type=\"password\" name=\"password\" id=\"register-password\" class=\"login-register-register-form-input\">\n		</div>\n	</div>\n\n	<div class=\"login-register-register-form-controls-group\" data-validation=\"control-group\">\n		<label class=\"login-register-register-form-label\" for=\"register-password2\">\n			"
    + alias3((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || alias2).call(alias1,"Re-Enter Password <small class=\"login-register-register-form-required\">*</small>",{"name":"translate","hash":{},"data":data}))
    + "\n		</label>\n		<div class=\"login-register-register-form-controls\" data-validation=\"control\">\n			<input type=\"password\" name=\"password2\" id=\"register-password2\" class=\"login-register-register-form-input\">\n		</div>\n	</div>\n	<!--Phone Number-->\n	<div class=\"login-register-register-form-controls-group\" data-validation=\"control-group\">\n		<label class=\"login-register-register-form-label\" for=\""
    + alias3(((helper = (helper = compilerNameLookup(helpers,"manage") || (depth0 != null ? compilerNameLookup(depth0,"manage") : depth0)) != null ? helper : alias2),(typeof helper === alias4 ? helper.call(alias1,{"name":"manage","hash":{},"data":data}) : helper)))
    + "phone\">\n			"
    + alias3((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || alias2).call(alias1,"Phone Number <small class=\"login-register-register-form-required\">*</small>",{"name":"translate","hash":{},"data":data}))
    + "\n		</label>\n		<div class=\"login-register-register-form-controls\" data-validation=\"control\">\n			<input type=\"tel\" name=\"phone\" id=\""
    + alias3(((helper = (helper = compilerNameLookup(helpers,"manage") || (depth0 != null ? compilerNameLookup(depth0,"manage") : depth0)) != null ? helper : alias2),(typeof helper === alias4 ? helper.call(alias1,{"name":"manage","hash":{},"data":data}) : helper)))
    + "phone\" class=\"login-register-register-form-input\" value=\""
    + alias3(((helper = (helper = compilerNameLookup(helpers,"phone") || (depth0 != null ? compilerNameLookup(depth0,"phone") : depth0)) != null ? helper : alias2),(typeof helper === alias4 ? helper.call(alias1,{"name":"phone","hash":{},"data":data}) : helper)))
    + "\" data-action=\"inputphone\">\n			<p class=\"address-edit-fields-input-help\">"
    + alias3((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || alias2).call(alias1,"Example: 555-123-1234",{"name":"translate","hash":{},"data":data}))
    + "</p>\n		</div>\n	</div>\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"isRedirect") : depth0),{"name":"if","hash":{},"fn":container.program(8, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\n	<div class=\"login-register-register-form-controls-group\">\n		<label class=\"login-register-register-form-label\">\n			<input type=\"checkbox\" name=\"emailsubscribe\" id=\"register-emailsubscribe\" value=\"T\" "
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"isEmailSubscribeChecked") : depth0),{"name":"if","hash":{},"fn":container.program(10, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ">\n			"
    + alias3((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || alias2).call(alias1,"Yes, Please sign me up for $(0) exclusive offers and promotions",(depth0 != null ? compilerNameLookup(depth0,"siteName") : depth0),{"name":"translate","hash":{},"data":data}))
    + "\n		</label>\n	</div>\n\n	<div class=\"login-register-register-form-messages\" data-type=\"alert-placeholder\"></div>\n\n"
    + ((stack1 = compilerNameLookup(helpers,"unless").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"showFormFieldsOnly") : depth0),{"name":"unless","hash":{},"fn":container.program(12, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\n\n\n\n";
},"useData":true}; var main = t.main; t.main = function(){ arguments[1] = arguments[1] || {}; var ctx = arguments[1]; ctx._extension_path = 'http://localhost:7777/tmp/extensions/TelQuest/ExtendLoginRegister/1.0.0/'; ctx._theme_path = 'http://localhost:7777/tmp/extensions/TelQuest/Cool_Menu_Theme/19.2.0/'; return main.apply(this, arguments); }; var template = Handlebars.template(t); template.Name = 'telquest_extendloginregister_extendloginregister'; return template;});