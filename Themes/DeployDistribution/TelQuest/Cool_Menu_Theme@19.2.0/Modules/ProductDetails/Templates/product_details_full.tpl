<div class="product-details-full">
	<div data-cms-area="item_details_banner" data-cms-area-filters="page_type"></div>

	<header class="product-details-full-header">
		<div id="banner-content-top" class="product-details-full-banner-top"></div>
	</header>
	<!-- <div class="product-details-full-divider-desktop"></div> -->
	<article class="product-details-full-content" itemscope itemtype="https://schema.org/Product">
		<meta itemprop="url" content="{{itemUrl}}">
		<div id="banner-details-top" class="product-details-full-banner-top-details"></div>

		<section class="product-details-full-main-content">
			
			<div class="product-details-full-main-content-left">
				
				<div class="product-details-full-image-gallery-container">
					<div id="banner-image-top" class="content-banner banner-image-top"></div>
					<div data-view="Product.ImageGallery"></div>
					<div id="banner-image-bottom" class="content-banner banner-image-bottom"></div>
					<div data-view="ProductBadges"></div>
					<div data-cms-area="product_details_full_cms_area_2" data-cms-area-filters="path"></div>
					<div data-cms-area="product_details_full_cms_area_3" data-cms-area-filters="page_type"></div>
				</div>
			</div>

			<div class="product-details-full-main-content-right">
				<div class="product-details-full-content-header">
					<div data-cms-area="product_details_full_cms_area_1" data-cms-area-filters="page_type"></div>

					<h1 class="product-details-full-content-header-title" itemprop="name">{{pageHeader}}</h1>
					<div data-view="Product.Sku"></div>
					<div class="product-details-full-rating" data-view="Global.StarRating"></div>
					<div data-cms-area="item_info" data-cms-area-filters="path"></div>
				</div>
				<!-- {{#unless isLoggedIn}}
                    <div class="product-detail-full-cms-banner-area" data-cms-area="product-detail-full-cms-banner-area" id="product-detail-full-cms-banner-area" data-cms-area-filters="page_type"></div>
                {{/unless}} -->
                {{#if isLoggedIn}}
                <div class="product-detail-cms-banner-area" data-cms-area="product-detail-cms-banner-area" id="product-detail-cms-banner-area" data-cms-area-filters="page_type"></div>
                 {{/if}}
              	<!--   <div class="product-detail-cms-banner-area" data-cms-area="product-detail-cms-banner-area" id="product-detail-cms-banner-area" data-cms-area-filters="page_type"></div> -->

                    <div class="top-pdp-options" >
                        {{#if webstore_free_shipping}}
                            <img class="pdp-option"  src="https://www.telquestintl.com/site/freeshipping.png" ></img>
                        {{else}}
                            <img class="pdp-option" src="https://www.telquestintl.com/site/fastshipping.png" ></img>
                        {{/if}}
                        <button id="price_match_btn" class="price-request-button pdp-option"><img class="price-request-image" src="https://www.telquestintl.com/site/pricematch.png" ></button>
                        <a target="_blank" class="pdp-option" href="https://www.telquestintl.com/return-policy"> <div ><img  src="https://www.telquestintl.com/site/30dayreturns.png" ></div></a>
                        <a target="_blank" class="pdp-option" href="https://www.telquestintl.com/telquest-rewards"> <div ><img  src="https://www.telquestintl.com/site/claimrewards.png"></div></a>
                    </div>
                    {{#unless isLoggedIn}}
                     <div class="login-prc-link-main">  
                         <a href="#" data-touchpoint="customercenter" class="login-prc-link">{{translate 'Log in for customized pricing'}}</a>
                     </div>
                     {{/unless}}
                    <hr>
                    <div class="product-detail-page-item-description">
                        {{{model.item.featureddescription}}}
                    </div>
                    <div class="product-detail-page-item-description">

                        {{!--  {{#unless isLoggedIn}}
                             <a data-target="fakeLogin">{{translate 'Login For Better Pricing'}}</a>
                         {{/unless}} --}}

                        {{!----  Div under product SKU    ----}}
                        <div data-cms-area="item_info" data-cms-area-filters="path"></div>
                        {{!---- Div under product sku for all product pages ----}}
                        <div data-cms-area="item_info_2" data-cms-area-filters="page_type"></div>
                    </div>
                       {{!----	{{#if webstore_free_shipping}}
						<div class="ship-warranty-info"> 
						<span>
							<img class="ship-warranty-info-img" src="/images/freeshipping.jpg">
							<div class="ship-warranty-info-txt">
								<p><strong>Free Shipping</strong></p>
							</div>
						</span>
						<span>
							<img class="ship-warranty-info-img" src="/images/warranty.jpg">
							<div class="ship-warranty-info-txt">
								<p><strong>{{warrantyterms}}</strong></p>
							</div>
						 </span> 
					  </div>
					{{else}}
						<div class="ship-warranty-info">
							<span>
								<img class="ship-warranty-info-img" src="/images/freeshipping.jpg">
								<div class="ship-warranty-info-txt">
									<p><strong>Fast Shipping</strong></p>
								</div>
							</span>
						</div>
					{{/if}} ----}}
                    <hr>
			<!-- <div class="product-details-full-divider"></div> -->

			<div class="product-details-full-main">
				{{#if isItemProperlyConfigured}}
					<form id="product-details-full-form" data-action="submit-form" method="POST">

						<section class="product-details-full-info">
							<div id="banner-summary-bottom" class="product-details-full-banner-summary-bottom"></div>
						</section>

						<section data-view="Product.Options"></section>

						<div data-cms-area="product_details_full_cms_area_4" data-cms-area-filters="path"></div>

						<!-- <div data-view="Product.Sku"></div> -->
						<div class="price-main">
						<div class="price-sub" data-view="Product.Price"></div>
						{{#if webstore_free_shipping}}
						 
						<span>+ Free Shipping</span>
						 
						{{/if}}
						</div>
						<div data-view="Quantity.Pricing"></div>

						<div data-view="Product.Stock.Info"></div>

						{{#if isPriceEnabled}}
							<div data-view="Quantity"></div>

							<section class="product-details-full-actions">

								<div class="product-details-full-actions-container">
									<div data-view="MainActionView"></div>

								</div>
								<div class="product-details-full-actions-container">
									<!-- <div data-view="AddToProductList" class="product-details-full-actions-addtowishlist"></div> -->

									<div data-view="ProductDetails.AddToQuote" class="product-details-full-actions-addtoquote"></div>
								</div>

							</section>
						{{/if}}
						<div class="qty-error"></div>
						<div data-view="StockDescription"></div>
						 <div class="product-details-full-divider-desktop social-divider"></div>
						<div data-view="SocialSharing.Flyout" class="product-details-full-social-sharing"></div>
						<div data-view="PrintPage"></div>
						
						<section data-view="Warranty.Options"></section>
						
						<div class="product-details-full-main-bottom-banner">
							<div id="banner-summary-bottom" class="product-details-full-banner-summary-bottom"></div>
						</div>
					</form>
				{{else}}
					<div data-view="GlobalViewsMessageView.WronglyConfigureItem"></div>
				{{/if}}

				<div id="banner-details-bottom" class="product-details-full-banner-details-bottom" data-cms-area="item_info_bottom" data-cms-area-filters="page_type"></div>
			</div>
			</div>

		</section>

		<div data-cms-area="product_details_full_cms_area_5" data-cms-area-filters="page_type"></div>
		<div data-cms-area="product_details_full_cms_area_6" data-cms-area-filters="path"></div>


	<!-- 	<div class="product-details-full-divider-desktop"></div> -->

		<div data-cms-area="product_details_full_cms_area_7" data-cms-area-filters="path"></div>

		<!-- <div data-view="ProductReviews.Center"></div> -->

		<div data-cms-area="product_details_full_cms_area_8" data-cms-area-filters="path"></div>

	</article>
	<div class="product-details-full-content-related-items">
	    <div data-view="Related.Items"></div>
	</div>
	<!-- <div class="product-details-full-divider-desktop"></div> -->
	<section data-view="Product.Information"></section>

    <article class="product-details-full-content" itemscope itemtype="https://schema.org/Product">

        <div id="banner-details-bottom" class="content-banner banner-details-bottom" data-cms-area="item_details_banner_bottom" data-cms-area-filters="page_type"></div>
    </article>

    <div data-view="ProductReviews.Center"></div>

    <div class="product-details-full-content-correlated-items">
        <div data-view="Correlated.Items"></div>
    </div>
</div>



{{!----
Use the following context variables when customizing this template:

	model (Object)
	model.item (Object)
	model.item.internalid (Number)
	model.item.type (String)
	model.quantity (Number)
	model.options (Array)
	model.options.0 (Object)
	model.options.0.cartOptionId (String)
	model.options.0.itemOptionId (String)
	model.options.0.label (String)
	model.options.0.type (String)
	model.location (String)
	model.fulfillmentChoice (String)
	pageHeader (String)
	itemUrl (String)
	isItemProperlyConfigured (Boolean)
	isPriceEnabled (Boolean)

----}}
