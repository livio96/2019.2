<div class="home-mainbanner">
	<div data-cms-area="home_cms_area_1" data-cms-area-filters="path"></div>

	<!-- <div class="home-banner-top">
		<p class="home-banner-top-message">
			{{translate 'Use promo code <strong>SCADEMO</strong> for <strong>30%</strong> off your purchase'}}
		</p>
	</div> -->

	<div data-cms-area="home_cms_area_2" data-cms-area-filters="path"></div>

	<div class="home-slider-container">
		<div class="home-image-slider">
			<ul data-slider class="home-image-slider-list">
				{{#each homeSlides}}
                <li>
                    <div class="home-slide-main-container test">
                        {{#if fullUrlImage}}
                            <a href="{{fullUrlImage}}" class="home-slide-main-full-url"></a>
                        {{/if}}
                        <img src="{{imageUrl}}" alt="" class="home-slide-image desktop">
                        {{#if mobileImageUrl}}
                            <img src="{{mobileImageUrl}}" alt="" class="home-slide-image mobile">
                        {{/if}}
                        <div class="home-slide-caption">
                            <div class="home-slide-caption-container">
                                {{#if title}}
                                <div class="home-slide-caption-content">
                                    <h2 class="home-slide-caption-title">{{translate title}}</h2>
                                    <p>{{translate text}}</p>
                                    <div class="home-slide-caption-button-container">
                                        <a href="{{buttonURL}}" class="home-slide-caption-button">{{translate buttonText}}<i class="home-slide-button-icon"></i></a>
                                    </div>
                                </div>
                                {{/if}}
                            </div>
                        </div>
                    </div>
                </li>
            {{/each}}
				<!-- <li> 
					<div class="home-slide-main-container">
						<div class="home-slide-image-container">
							<a href="#"><img src="/site/Second theme Img/Business-Phone-Systems.png" alt="" /><a>
						</div>
					</div>
				</li>
				<li> 
					<div class="home-slide-main-container">
						<div class="home-slide-image-container">
							<a href="#"><img src="/site/Second theme Img/Headsets-home-banner.png" alt="" /></a>
						</div>
					</div>
				</li>
				<li> 
					<div class="home-slide-main-container">
						<div class="home-slide-image-container">
							<a href="#"><img src="/site/Second theme Img/Phones-home-banner.png" alt="" /></a>
						</div>
					</div>
				</li> -->
				{{!--{{#each carouselImages}}
					<li> 
						<div class="home-slide-main-container">
							<div class="home-slide-image-container">
								<img src="{{resizeImage this ../imageHomeSize}}" alt="" />
							</div>

							<!-- <div class="home-slide-caption">
								<h2 class="home-slide-caption-title">SAMPLE HEADLINE</h2>
								<p>Example descriptive text displayed on multiple lines.</p>
								<div class="home-slide-caption-button-container">
									<a href="/search" class="home-slide-caption-button">Shop Now</a>
								</div>
							</div> -->
						</div>
					</li>
				{{else}}
				<li>
					<div class="home-slide-main-container">
						<div class="home-slide-image-container">
							<img src="{{getThemeAssetsPath (resizeImage 'img/carousel-home-1.png' ../imageHomeSize)}}" alt="" />
						</div>

						<div class="home-slide-caption">
							<h2 class="home-slide-caption-title">SAMPLE HEADLINE</h2>
							<p>Example descriptive text displayed on multiple lines.</p>
							<div class="home-slide-caption-button-container">
								<a href="/search" class="home-slide-caption-button">Shop Now</a>
							</div>
						</div>
					</div>
				</li>
				<li>
					<div class="home-slide-main-container">
						<div class="home-slide-image-container">
							<img src="{{getThemeAssetsPath (resizeImage 'img/carousel-home-2.png' ../imageHomeSize)}}" alt="" />
						</div>

						<div class="home-slide-caption">
							<h2 class="home-slide-caption-title">SAMPLE HEADLINE</h2>
							<p>Example descriptive text displayed on multiple lines.</p>
							<div class="home-slide-caption-button-container">
								<a href="/search" class="home-slide-caption-button">Shop Now</a>
							</div>
						</div>
					</div>
				</li>
				<li>
					<div class="home-slide-main-container">
						<div class="home-slide-image-container">
							<img src="{{getThemeAssetsPath (resizeImage 'img/carousel-home-3.png' ../imageHomeSize)}}" alt="" />
						</div>

						<div class="home-slide-caption">
							<h2 class="home-slide-caption-title">SAMPLE HEADLINE</h2>
							<p>Example descriptive text displayed on multiple lines.</p>
							<div class="home-slide-caption-button-container">
								<a href="/search" class="home-slide-caption-button">Shop Now</a>
							</div>
						</div>
					</div>
				</li>
				{{/each}}--}}
			</ul>
		</div>
	</div>
</div>
<div class="home">
	<div class="home-banner-main">
		<div class="home-banner-main-heading">
			<h3>Shop By Category</h3>
		</div>
		<div class="home-banner-main-container">

	<div data-cms-area="category-1" data-cms-area-filters="path" class="latest-items"></div>
	    <!--<div class="home-banner-main-cell">
	      		<div class="home-banner-main-cell-bg">
	        		<img src="/site/Second theme Img/Switches.png" alt="" >
					<div class="shopnow-div"><a href="/Shop-by-Category/Switches" class="shopnow-btn">Shop now</a></div>
	        	</div>
	        	<a href="/Shop-by-Category/Switches" class="home-banner-main-cell-text">Switches</a>
	      	</div>
	       	<div class="home-banner-main-cell">
	      		<div class="home-banner-main-cell-bg">
	        		<img src="/site/Second theme Img/Speaker-Phones.png" alt="" >
	        		<div class="shopnow-div"><a href="/Shop-by-Category/Speakerphones" class="shopnow-btn">Shop now</a></div>
	        	</div>
	        	<a href="/Shop-by-Category/Speakerphones" class="home-banner-main-cell-text">Speaker Phones</a>
	      	</div>
	     	<div class="home-banner-main-cell">
	      		<div class="home-banner-main-cell-bg">
	        		<img src="/site/Second theme Img/Business_Phones.png" alt="" >
	        		<div class="shopnow-div"><a href="/Shop-by-Category/Business-Phone-Systems" class="shopnow-btn">Shop now</a></div>
	        	</div>
	        	<a href="/Shop-by-Category/Business-Phone-Systems" class="home-banner-main-cell-text">Business Phone Systems</a>
	      	</div>
	      	<div class="home-banner-main-cell">
	      		<div class="home-banner-main-cell-bg">
	        		<img src="/site/Second theme Img/Routers.png" alt="" >
	        		<div class="shopnow-div"><a href="/Shop-by-Category/Routers" class="shopnow-btn">Shop now</a></div>
	        	</div>
	        	<a href="/Shop-by-Category/Routers" class="home-banner-main-cell-text">Routers</a>
	      	</div>
	      	<div class="home-banner-main-cell">
	      		<div class="home-banner-main-cell-bg">
	        		<img src="/site/Second theme Img/Accessories.png" alt="" >
	        		<div class="shopnow-div"><a href="/Shop-by-Category/Accessories-and-Components" class="shopnow-btn">Shop now</a></div>
	        	</div>
	        	<a href="/Shop-by-Category/Accessories-and-Components" class="home-banner-main-cell-text">Accessories and Components</a>
	      	</div>
	      	<div class="home-banner-main-cell">
	      		<div class="home-banner-main-cell-bg">
	        		<img src="/site/Second theme Img/Gateways.png" alt="" >
	        		<div class="shopnow-div"><a href="/Shop-by-Category/Gateways" class="shopnow-btn">Shop now</a></div>
	        	</div>
	        	<a href="/Shop-by-Category/Gateways" class="home-banner-main-cell-text">Gateways</a>
	      	</div>
	      	<div class="home-banner-main-cell">
	      		<div class="home-banner-main-cell-bg">
	        		<img src="/site/Second theme Img/Cameras.png" alt="" >
	        		<div class="shopnow-div"><a href="/Shop-by-Category/Cameras" class="shopnow-btn">Shop now</a></div>
	        	</div>
	        	<a href="/Shop-by-Category/Cameras" class="home-banner-main-cell-text">Cameras</a>
	      	</div>
	      	<div class="home-banner-main-cell">
	      		<div class="home-banner-main-cell-bg">
	        		<img src="/site/Second theme Img/Bundles.png" alt="" >
	        		<div class="shopnow-div"><a href="/Shop-by-Category/Bundles-Kits" class="shopnow-btn">Shop now</a></div>
	        	</div>
	        	<a href="/Shop-by-Category/Bundles-Kits" class="home-banner-main-cell-text">Bundles/Kits</a>
	      	</div> -->
		</div>
	</div>

	<!-- <div data-cms-area="home_cms_area_4" data-cms-area-filters="path"></div> -->
    <!-- <div id="home-first-cms-content" class="banner-container carousel-merch" data-cms-area="second-banner-container" data-cms-area-filters="path"></div> -->

	<div class="home-merchandizing-zone">
		<div data-id="your-merchandising-zone" data-type="merchandising-zone"></div>
	</div>
</div>

{{!----
Use the following context variables when customizing this template:

	imageHomeSize (String)
	imageHomeSizeBottom (String)
	carouselImages (Array)
	bottomBannerImages (Array)

----}}
