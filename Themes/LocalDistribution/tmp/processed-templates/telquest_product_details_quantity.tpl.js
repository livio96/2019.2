define('telquest_product_details_quantity.tpl', ['Handlebars','Handlebars.CompilerNameLookup'], function (Handlebars, compilerNameLookup){ var t = {"1":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3=container.escapeExpression;

  return "		<div class=\"product-details-quantity-options\" data-validation=\"control-group\">\n			<label for=\"quantity\" class=\"product-details-quantity-options-title\">\n				"
    + alias3((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || alias2).call(alias1,"Quantity",{"name":"translate","hash":{},"data":data}))
    + "\n			</label>\n\n			<div data-validation=\"control\">\n				<div class=\"product-details-quantity-container\">\n					<button type=\"button\" class=\"product-details-quantity-remove\" data-action=\"updateQuantity\" data-type=\"product-details-quantity-remove\" data-value=\"-1\" "
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"isMinusButtonDisabled") : depth0),{"name":"if","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ">-</button>\n				<input type=\"number\" name=\"quantity\" id=\"quantity\" data-action=\"changeQuantity\" class=\"product-details-quantity-value\" value=\""
    + alias3(container.lambda(((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"quantity") : stack1), depth0))
    + "\" min=\"1\" max=\""
    + alias3(((helper = (helper = compilerNameLookup(helpers,"vendor_stock") || (depth0 != null ? compilerNameLookup(depth0,"vendor_stock") : depth0)) != null ? helper : alias2),(typeof helper === "function" ? helper.call(alias1,{"name":"vendor_stock","hash":{},"data":data}) : helper)))
    + "\">\n				<button  type=\"button\" class=\"product-details-quantity-add\" data-action=\"updateQuantity\" data-value=\"+1\">+</button>\n			</div>\n		</div>\n		</div>\n";
},"2":function(container,depth0,helpers,partials,data) {
    return "disabled=\"disabled\"";
},"4":function(container,depth0,helpers,partials,data) {
    return "		<input type=\"hidden\" name=\"quantity\" id=\"quantity\" value=\"1\">\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "\n<div>\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? compilerNameLookup(depth0,"showQuantity") : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.program(4, data, 0),"data":data})) != null ? stack1 : "")
    + "</div>\n\n\n\n\n";
},"useData":true}; var main = t.main; t.main = function(){ arguments[1] = arguments[1] || {}; var ctx = arguments[1]; ctx._extension_path = 'http://localhost:7777/tmp/extensions/TelQuest/ProductDetails/1.0.0/'; ctx._theme_path = 'http://localhost:7777/tmp/extensions/SuiteCommerce/ThemeTwo/19.2.0/'; return main.apply(this, arguments); }; var template = Handlebars.template(t); template.Name = 'telquest_product_details_quantity'; return template;});