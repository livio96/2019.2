 <div id="site-logo" class="content-banner"></div>

<a class="header-logo" href="{{headerLinkHref}}" data-touchpoint="{{headerLinkTouchPoint}}" data-hashtag="{{headerLinkHashtag}}" title="{{headerLinkTitle}}">

{{#if logoUrl}}
	<img class="header-logo-image" src="{{getThemeAssetsPathWithDefault 'img/telquest.jpg'}}" alt="{{siteName}}">
	<!-- <img class="header-logo-image" src="https://www.telquestintl.com/sca-dev-kilimanjaro/img/telquest.png" alt="{{siteName}}"> -->
{{else}}
	<span class="header-logo-sitename">
		{{siteName}}
	</span>
{{/if}}
</a>





{{!----
Use the following context variables when customizing this template:

	logoUrl (String)
	headerLinkHref (String)
	headerLinkTouchPoint (String)
	headerLinkHashtag (String)
	headerLinkTitle (String)

----}}
