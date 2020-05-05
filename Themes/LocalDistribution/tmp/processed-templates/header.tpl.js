define('header.tpl', ['Handlebars','Handlebars.CompilerNameLookup','header_sidebar.tpl','header_sidebar.tpl'], function (Handlebars, compilerNameLookup){ var t = {"1":function(container,depth0,helpers,partials,data) {
    return "header-main-wrapper-standalone";
},"3":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "	<div class=\"header-subheader\">\n        <div class=\"header-subheader-container\">\n            <!-- <div class=\"header-sidebar-toggle-wrapper\">\n                <button class=\"header-sidebar-toggle\" data-action=\"header-sidebar-show\">\n                    <i class=\"header-sidebar-toggle-icon\"></i>\n                </button>\n            </div> -->\n            <ul class=\"header-subheader-options\">\n              <div class=\"header-menu-profile-support header-menu-support\">\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? compilerNameLookup(depth0,"isLoggedIn") : depth0),{"name":"if","hash":{},"fn":container.program(4, data, 0),"inverse":container.program(6, data, 0),"data":data})) != null ? stack1 : "")
    + "                </div>\n                <div class=\"header-menu-profile\" data-view=\"Header.Profile\"></div>\n                <!-- <li data-view=\"StoreLocatorHeaderLink\"></li> -->\n                <li data-view=\"RequestQuoteWizardHeaderLink\"></li>\n                <li data-view=\"QuickOrderHeaderLink\"></li>\n            </ul>\n		</div>\n	</div>\n";
},"4":function(container,depth0,helpers,partials,data) {
    return "                        <a href=\"#\" data-action=\"show-salesrep-popup\" class=\"header-icon-container\">\n                            <i class=\"fa-fa-phone\" ></i>\n                        </a> <span class=\"sales-rep-info-text\"> Need Support? <a href=\"#\" data-action=\"show-salesrep-popup\"> Contact your sales rep</a></span>\n";
},"6":function(container,depth0,helpers,partials,data) {
    return "                        <a href=\"/sales-reps\" data-hashtag=\"#sales-reps\" class=\"header-icon-container\" data-touchpoint=\"home\">\n                            <i class=\"fa-fa-phone\" ></i>\n                        </a><span class=\"sales-rep-info-text\"> Speak to our <a href=\"/sales-reps\">Technology Experts!</a>  Give Us a Call: <a href=\"tel:800-288-7466\">800-288-7466</a></span>\n";
},"8":function(container,depth0,helpers,partials,data) {
    return " header-secondary-wrapper-standalone";
},"10":function(container,depth0,helpers,partials,data) {
    return "					<!-- <div class=\"header-menu-locator-mobile\" data-view=\"StoreLocatorHeaderLink\"></div> -->\n					<div class=\"header-menu-searchmobile\" data-view=\"SiteSearch.Button\"></div>\n					<div class=\"header-menu-cart\">\n						<div class=\"header-menu-cart-dropdown\" >\n							<div data-view=\"Header.MiniCart\"></div>\n						</div>\n					</div>\n";
},"12":function(container,depth0,helpers,partials,data) {
    return "				<div class=\"header-menu-locator-mobile\" data-view=\"StoreLocatorHeaderLink\"></div>\n				<div class=\"header-menu-searchmobile\" data-view=\"SiteSearch.Button\"></div>\n				<div class=\"header-menu-cart\">\n					<div class=\"header-menu-cart-dropdown\" >\n						<div data-view=\"Header.MiniCart\"></div>\n					</div>\n				</div>\n";
},"14":function(container,depth0,helpers,partials,data) {
    return "	<div data-view=\"SiteSearch\"></div>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {});

  return "<div class=\"header-message\" data-view=\"Message.Placeholder\"></div>\n\n<div class=\"header-main-wrapper "
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"isStandalone") : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\">\n"
    + ((stack1 = compilerNameLookup(helpers,"unless").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"isStandalone") : depth0),{"name":"unless","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\n	<nav class=\"header-main-nav\">\n		<div id=\"banner-header-top\" class=\"content-banner banner-header-top\" data-cms-area=\"header_banner_top\" data-cms-area-filters=\"global\"></div>\n		<div class=\"header-sidebar-toggle-wrapper\">\n			<button class=\"header-sidebar-toggle\" data-action=\"header-sidebar-show\">\n				<i class=\"header-sidebar-toggle-icon\"></i>\n			</button>\n		</div>\n		<div class=\"header-content\">\n			<div class=\"header-logo-wrapper\">\n				<div data-view=\"Header.Logo\"></div>\n			</div>\n\n			<div class=\"header-secondary-wrapper"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"isStandalone") : depth0),{"name":"if","hash":{},"fn":container.program(8, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\" data-view=\"Header.Menu\" data-phone-template=\"header_sidebar\" data-tablet-template=\"header_sidebar\"></div>\n			<div class=\"icon-right-div\">\n"
    + ((stack1 = compilerNameLookup(helpers,"unless").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"isStandalone") : depth0),{"name":"unless","hash":{},"fn":container.program(10, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "			</div>\n			<!-- <div class=\"header-right-menu\">\n				<div class=\"header-menu-profile\" data-view=\"Header.Profile\"></div>\n"
    + ((stack1 = compilerNameLookup(helpers,"unless").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"isStandalone") : depth0),{"name":"unless","hash":{},"fn":container.program(12, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "			</div> -->\n		</div>\n		<div id=\"banner-header-bottom\" class=\"content-banner banner-header-bottom\" data-cms-area=\"header_banner_bottom\" data-cms-area-filters=\"global\"></div>\n	</nav>\n\n</div>\n"
    + ((stack1 = compilerNameLookup(helpers,"unless").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"isStandalone") : depth0),{"name":"unless","hash":{},"fn":container.program(14, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "<div class=\"header-sidebar-overlay\" data-action=\"header-sidebar-hide\"></div>\n\n\n";
},"useData":true}; var main = t.main; t.main = function(){ arguments[1] = arguments[1] || {}; var ctx = arguments[1]; ctx._extension_path = 'http://localhost:7777/tmp/extensions/TelQuest/Cool_Menu_Theme/19.2.0/'; ctx._theme_path = 'http://localhost:7777/tmp/extensions/TelQuest/Cool_Menu_Theme/19.2.0/'; return main.apply(this, arguments); }; var template = Handlebars.template(t); template.Name = 'header'; return template;});