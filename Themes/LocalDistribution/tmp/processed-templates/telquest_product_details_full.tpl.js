define('telquest_product_details_full.tpl', ['Handlebars','Handlebars.CompilerNameLookup'], function (Handlebars, compilerNameLookup){ var t = {"1":function(container,depth0,helpers,partials,data) {
    return "                    <div class=\"product-detail-full-cms-banner-area\" data-cms-area=\"product-detail-full-cms-banner-area\" id=\"product-detail-full-cms-banner-area\" data-cms-area-filters=\"page_type\"></div>\n";
},"3":function(container,depth0,helpers,partials,data) {
    return "                            <img class=\"pdp-option\"  src=\"https://www.telquestintl.com/site/freeshipping.png\" ></img>\n";
},"5":function(container,depth0,helpers,partials,data) {
    return "                            <img class=\"pdp-option\" src=\"https://www.telquestintl.com/site/fastshipping.png\" ></img>\n";
},"7":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {});

  return "                                    <p>"
    + container.escapeExpression(((helper = (helper = compilerNameLookup(helpers,"vendor_stock_message") || (depth0 != null ? compilerNameLookup(depth0,"vendor_stock_message") : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(alias1,{"name":"vendor_stock_message","hash":{},"data":data}) : helper)))
    + "</p>\n                                    <div class=\"price-container\">\n                                        <div class=\"price-block\" data-view=\"Product.Price\"></div>\n                                        <div  data-view=\"Quantity\" class=\"quantity-block clearfix\"></div>\n\n                                    </div>\n\n                                    <section class=\"product-details-full-actions\">\n\n                                        <div class=\"product-details-full-actions-container\">\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"showCart") : depth0),{"name":"if","hash":{},"fn":container.program(8, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "                                        </div>\n                                        <br>\n                                        <div data-view=\"ProductDetails.AddToQuote\" class=\"product-details-full-actions-addtoquote\"></div>\n                                        <br>\n                                        <div class=\"product-details-full-actions-container\">\n\n                                            <div data-view=\"AddToProductList\" class=\"product-details-full-actions-addtowishlist\"></div>\n\n                                        </div>\n\n                                    </section>\n\n\n";
},"8":function(container,depth0,helpers,partials,data) {
    return "\n                                                <div data-view=\"MainActionView\"></div>\n";
},"10":function(container,depth0,helpers,partials,data) {
    return "                            <form id=\"product-details-full-form\" data-action=\"submit-form\" method=\"POST\">\n\n                                <section class=\"product-details-full-info\">\n                                    <div id=\"banner-summary-bottom\" class=\"product-details-full-banner-summary-bottom\"></div>\n                                </section>\n\n\n                                <div data-view=\"Quantity.Pricing\"></div>\n\n                                <div data-view=\"Product.Stock.Info\"></div>\n\n                                <section data-view=\"Warranty.Options\"></section>\n\n                                <div data-view=\"StockDescription\"></div>\n\n                                <div class=\"product-details-full-main-bottom-banner\">\n                                    <div id=\"banner-summary-bottom\" class=\"product-details-full-banner-summary-bottom\"></div>\n                                </div>\n                            </form>\n";
},"12":function(container,depth0,helpers,partials,data) {
    return "                            <div data-view=\"GlobalViewsMessageView.WronglyConfigureItem\"></div>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "\n<div data-cms-area=\"item_details_top_banner\" data-cms-area-filters=\"page_type\"></div>\n<div class=\"product-details-full\">\n    <div data-cms-area=\"item_details_banner\" data-cms-area-filters=\"page_type\"></div>\n\n\n    <article class=\"product-details-full-content\" itemscope itemtype=\"https://schema.org/Product\">\n        <meta itemprop=\"url\" content=\""
    + alias4(((helper = (helper = compilerNameLookup(helpers,"itemUrl") || (depth0 != null ? compilerNameLookup(depth0,"itemUrl") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"itemUrl","hash":{},"data":data}) : helper)))
    + "\">\n        <div id=\"banner-details-top\" class=\"product-details-full-banner-top-details\"></div>\n\n        <section class=\"product-details-full-main-content\">\n            <div class=\"product-details-full-main-content-left\">\n                <div>\n                    <h1 class=\"product-details-full-content-header-title\" itemprop=\"name\">"
    + alias4(((helper = (helper = compilerNameLookup(helpers,"pageHeader") || (depth0 != null ? compilerNameLookup(depth0,"pageHeader") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"pageHeader","hash":{},"data":data}) : helper)))
    + "</h1>\n                    <div data-view=\"Product.Sku\"></div>\n                    <div class=\"product-details-full-rating\" data-view=\"Global.StarRating\"></div>\n                </div>\n\n                <div class=\"product-details-full-image-gallery-container\">\n                    <div id=\"banner-image-top\" class=\"content-banner banner-image-top\"></div>\n                    <div data-view=\"Product.ImageGallery\"></div>\n                    <div id=\"banner-image-bottom\" class=\"content-banner banner-image-bottom\"></div>\n                    <div data-view=\"ProductBadges\"></div>\n\n                </div>\n                <div class=\"clearfix\"></div>\n"
    + ((stack1 = compilerNameLookup(helpers,"unless").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"isLoggedIn") : depth0),{"name":"unless","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\n            </div>\n\n            <div class=\"product-details-full-main-content-right\">\n                <div class=\"product-details-full-content-header\">\n                    <div class=\"product-detail-cms-banner-area\" data-cms-area=\"product-detail-cms-banner-area\" id=\"product-detail-cms-banner-area\" data-cms-area-filters=\"page_type\"></div>\n\n                    <div class=\"top-pdp-options\" >\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"webstore_free_shipping") : depth0),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.program(5, data, 0),"data":data})) != null ? stack1 : "")
    + "                        <button id=\"price_match_btn\" class=\"price-request-button\"><img class=\"price-request-image\" src=\"https://www.telquestintl.com/site/pricematch.png\" ></button>\n                        <a target=\"_blank\" class=\"pdp-option\" href=\"https://www.telquestintl.com/return-policy\"> <div ><img  src=\"https://www.telquestintl.com/site/30dayreturns.png\" ></div></a>\n                        <a target=\"_blank\" class=\"pdp-option\" href=\"https://www.telquestintl.com/telquest-rewards\"> <div ><img  src=\"https://www.telquestintl.com/site/claimrewards.png\"></div></a>\n                    </div>\n                    <hr>\n                    <div class=\"product-detail-page-item-description\">\n                        "
    + ((stack1 = container.lambda(((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"item") : stack1)) != null ? compilerNameLookup(stack1,"featureddescription") : stack1), depth0)) != null ? stack1 : "")
    + "\n                    </div>\n                    <div class=\"product-detail-page-item-description\">\n\n\n\n\n\n\n                        <div data-cms-area=\"item_info\" data-cms-area-filters=\"path\"></div>\n                        <div data-cms-area=\"item_info_2\" data-cms-area-filters=\"page_type\"></div>\n                    </div>\n\n                    <div class=\"custom-pdp-section row\">\n\n                        <div class=\"col-md-6\">\n                            <section data-view=\"Product.Options\"></section>\n                            <div class=\"upsell-items\" data-view=\"UpsellItems.Items\"></div>\n                        </div>\n\n                        <div class=\"col-md-6 actions\">\n                            <div class=\"actions-container\">\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"isPriceEnabled") : depth0),{"name":"if","hash":{},"fn":container.program(7, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "                            </div>\n\n                            <div data-cms-area=\"payment_methods\" data-cms-area-filters=\"page_type\"></div>\n\n                            <div data-cms-area=\"request_price_match\" data-cms-area-filters=\"page_type\"></div>\n\n                            <div data-cms-area=\"undersocial\" data-cms-area-filters=\"page_type\"></div>\n                        </div>\n                    </div>\n\n                    <hr style=\"border-bottom: 1px solid #cccccc;\">\n\n                    <div data-view=\"SocialSharing.Flyout\" class=\"product-details-full-social-sharing\"></div>\n                    <div data-view=\"PrintPage\"></div>\n\n                    <div class=\"product-details-full-main\">\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"isItemProperlyConfigured") : depth0),{"name":"if","hash":{},"fn":container.program(10, data, 0),"inverse":container.program(12, data, 0),"data":data})) != null ? stack1 : "")
    + "\n                    </div>\n                </div>\n            </div>\n        </section>\n        <div id=\"banner-details-bottom\" class=\"product-details-full-banner-details-bottom\" data-cms-area=\"item_info_bottom_path\" data-cms-area-filters=\"path\"></div>\n        <div id=\"banner-details-bottom\" class=\"product-details-full-banner-details-bottom\" data-cms-area=\"item_info_bottom\" data-cms-area-filters=\"page_type\"></div>\n\n    </article>\n</div>\n\n<div class=\"product-details-full-content-related-items\">\n    <div data-view=\"Related.Items\"></div>\n</div>\n\n<div class=\"product-details-full-divider-desktop\"></div>\n\n<section data-view=\"Product.Information\"></section>\n\n<div class =\"product-details-full\">\n    <article class=\"product-details-full-content\" itemscope itemtype=\"https://schema.org/Product\">\n\n        <div id=\"banner-details-bottom\" class=\"content-banner banner-details-bottom\" data-cms-area=\"item_details_banner_bottom\" data-cms-area-filters=\"page_type\"></div>\n    </article>\n\n    <div data-view=\"ProductReviews.Center\"></div>\n\n    <div class=\"product-details-full-content-correlated-items\">\n        <div data-view=\"Correlated.Items\"></div>\n    </div>\n</div>\n\n\n\n";
},"useData":true}; var main = t.main; t.main = function(){ arguments[1] = arguments[1] || {}; var ctx = arguments[1]; ctx._extension_path = 'http://localhost:7777/tmp/extensions/TelQuest/ProductDetails/1.0.0/'; ctx._theme_path = 'http://localhost:7777/tmp/extensions/SuiteCommerce/ThemeTwo/19.2.0/'; return main.apply(this, arguments); }; var template = Handlebars.template(t); template.Name = 'telquest_product_details_full'; return template;});