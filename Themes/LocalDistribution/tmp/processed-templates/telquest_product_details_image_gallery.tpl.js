define('telquest_product_details_image_gallery.tpl', ['Handlebars','Handlebars.CompilerNameLookup'], function (Handlebars, compilerNameLookup){ var t = {"1":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1;

  return ((stack1 = compilerNameLookup(helpers,"if").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? compilerNameLookup(depth0,"showImageSlider") : depth0),{"name":"if","hash":{},"fn":container.program(2, data, 0, blockParams, depths),"inverse":container.program(8, data, 0, blockParams, depths),"data":data})) != null ? stack1 : "");
},"2":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1;

  return "            <ul class=\"bxslider\" data-slider>\n"
    + ((stack1 = compilerNameLookup(helpers,"each").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? compilerNameLookup(depth0,"images") : depth0),{"name":"each","hash":{},"fn":container.program(3, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "            </ul>\n";
},"3":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1;

  return ((stack1 = compilerNameLookup(helpers,"if").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? compilerNameLookup(depth0,"youtubeId") : depth0),{"name":"if","hash":{},"fn":container.program(4, data, 0, blockParams, depths),"inverse":container.program(6, data, 0, blockParams, depths),"data":data})) != null ? stack1 : "");
},"4":function(container,depth0,helpers,partials,data) {
    var helper;

  return "                        <div class=\"product-details-image-gallery-detailed-image\">\n                            <iframe class=\"product-details-video\" src=\"https://www.youtube.com/embed/"
    + container.escapeExpression(((helper = (helper = compilerNameLookup(helpers,"youtubeId") || (depth0 != null ? compilerNameLookup(depth0,"youtubeId") : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"youtubeId","hash":{},"data":data}) : helper)))
    + "\" height=\"100%\" width=\"100%\" frameborder=\"0\"\n                                    allow=\"autoplay; encrypted-media\" allowfullscreen></iframe>\n                        </div>\n";
},"6":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3=container.escapeExpression;

  return "                        <li data-zoom class=\"product-details-image-gallery-container\">\n                            <img\n                                    src=\""
    + alias3((compilerNameLookup(helpers,"resizeImage") || (depth0 && compilerNameLookup(depth0,"resizeImage")) || alias2).call(alias1,(depth0 != null ? compilerNameLookup(depth0,"url") : depth0),(depths[1] != null ? compilerNameLookup(depths[1],"imageResizeId") : depths[1]),{"name":"resizeImage","hash":{},"data":data}))
    + "\"\n                                    alt=\""
    + alias3(((helper = (helper = compilerNameLookup(helpers,"altimagetext") || (depth0 != null ? compilerNameLookup(depth0,"altimagetext") : depth0)) != null ? helper : alias2),(typeof helper === "function" ? helper.call(alias1,{"name":"altimagetext","hash":{},"data":data}) : helper)))
    + "\"\n                                    itemprop=\"image\"\n                                    data-loader=\"false\">\n                        </li>\n";
},"8":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1;

  return ((stack1 = compilerNameLookup(helpers,"with").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? compilerNameLookup(depth0,"firstImage") : depth0),{"name":"with","hash":{},"fn":container.program(9, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\n";
},"9":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1;

  return ((stack1 = compilerNameLookup(helpers,"if").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? compilerNameLookup(depth0,"youtubeId") : depth0),{"name":"if","hash":{},"fn":container.program(10, data, 0, blockParams, depths),"inverse":container.program(12, data, 0, blockParams, depths),"data":data})) != null ? stack1 : "");
},"10":function(container,depth0,helpers,partials,data) {
    var helper;

  return "                    <div class=\"product-details-image-gallery-detailed-image\">\n                        <iframe src=\"https://www.youtube.com/embed/"
    + container.escapeExpression(((helper = (helper = compilerNameLookup(helpers,"youtubeId") || (depth0 != null ? compilerNameLookup(depth0,"youtubeId") : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"youtubeId","hash":{},"data":data}) : helper)))
    + "\" height=\"100%\" width=\"100%\" frameborder=\"0\"\n                                allow=\"autoplay; encrypted-media\" allowfullscreen></iframe>\n                    </div>\n";
},"12":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3=container.escapeExpression;

  return "                    <div class=\"product-details-image-gallery-detailed-image\" data-zoom>\n                        <img\n                                class=\"center-block\"\n                                src=\""
    + alias3((compilerNameLookup(helpers,"resizeImage") || (depth0 && compilerNameLookup(depth0,"resizeImage")) || alias2).call(alias1,(depth0 != null ? compilerNameLookup(depth0,"url") : depth0),(depths[1] != null ? compilerNameLookup(depths[1],"imageResizeId") : depths[1]),{"name":"resizeImage","hash":{},"data":data}))
    + "\"\n                                alt=\""
    + alias3(((helper = (helper = compilerNameLookup(helpers,"altimagetext") || (depth0 != null ? compilerNameLookup(depth0,"altimagetext") : depth0)) != null ? helper : alias2),(typeof helper === "function" ? helper.call(alias1,{"name":"altimagetext","hash":{},"data":data}) : helper)))
    + "\"\n                                itemprop=\"image\"\n                                data-loader=\"false\">\n                    </div>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1;

  return "\n<div class=\"product-details-image-gallery\">\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? compilerNameLookup(depth0,"showImages") : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "    <div data-view=\"SocialSharing.Flyout.Hover\"></div>\n</div>\n\n";
},"useData":true,"useDepths":true}; var main = t.main; t.main = function(){ arguments[1] = arguments[1] || {}; var ctx = arguments[1]; ctx._extension_path = 'http://localhost:7777/tmp/extensions/TelQuest/ProductDetails/1.0.0/'; ctx._theme_path = 'http://localhost:7777/tmp/extensions/SuiteCommerce/ThemeTwo/19.2.0/'; return main.apply(this, arguments); }; var template = Handlebars.template(t); template.Name = 'telquest_product_details_image_gallery'; return template;});