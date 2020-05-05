{{#unless isStandalone}}
<nav class="header-menu-secondary-nav">

	<div class="header-menu-search" data-view="SiteSearch.Button"></div>

	<ul class="header-menu-level1">		
		{{#each categories}}
			{{#unless additionalFields.custrecord_hide_from_navigation}}
			{{#if text}}
				<li {{#if categories}}data-toggle="categories-menu"{{/if}}>
					<a class="{{class}}" {{objectToAtrributes this}}>
					{{translate text}}
					</a>
					{{#if categories}}
					<ul class="header-menu-level-container">
						<li>
							<ul class="header-menu-level2">
								{{#each categories}}
								{{#unless additionalFields.custrecord_hide_from_navigation}}
								<li>
									<a class="{{class}}" {{objectToAtrributes this}}>
									<span class="img-span">
										{{#if categoryurl}}
                                         <img src="{{categoryurl}}"/>
                                            {{else if this.imagepath}}
                                             <img src="{{ this.imagepath}}"/>
                                             {{else}}
                                        <img src="http://newtelquest.com/site/Second theme Img/No_img.png">
                                        {{/if}}
									</span>
										{{translate text}}</a>

									{{#if categories}}
									<ul class="header-menu-level3">
										{{#each categories}}
										{{#unless additionalFields.custrecord_hide_from_navigation}}
										<li>
											<a class="{{class}}" {{objectToAtrributes this}}>
											<span class="img-span">
											{{#if categoryurl}}
                                       			<img src="{{categoryurl}}"/>
	                                            {{else if this.imagepath}}
	                                             <img src="{{ this.imagepath}}"/>
	                                             {{else}}
                                      			  <img src="http://newtelquest.com/site/Second theme Img/No_img.png">
                                       		 {{/if}}
                                    		</span>{{translate text}}</a>
										</li>
										{{/unless}}
										{{/each}}
									</ul>
									{{/if}}
								</li>
								{{/unless}}
								{{/each}}
							</ul>
						</li>
					</ul>
					{{/if}}
				</li>
			{{/if}}
			{{/unless}}
		{{/each}}

	</ul>

</nav>
{{/unless}}
<script>
	$(".header-menu-level2-anchor").mouseenter(function () {
	  	$(this).addClass("open");
	});
	$(".header-menu-level2-anchor").mouseleave(function () {
	  	$(this).removeClass("open");
	});
	$(".header-menu-level3").mouseenter(function () {
	  	$(this).closest('li').children('a').addClass("open");
	});
	$(".header-menu-level3").mouseleave(function () {
	  	$(this).closest('li').children('a').removeClass("open");
	});
</script>

{{!----
Use the following context variables when customizing this template:

	categories (Array)
	showExtendedMenu (Boolean)
	showLanguages (Boolean)
	showCurrencies (Boolean)

----}}
