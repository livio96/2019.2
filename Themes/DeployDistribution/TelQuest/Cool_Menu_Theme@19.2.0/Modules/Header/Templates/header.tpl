<div class="header-message" data-view="Message.Placeholder"></div>

<div class="header-main-wrapper {{#if isStandalone}}header-main-wrapper-standalone{{/if}}">
    {{#unless isStandalone}}
	<div class="header-subheader">
        <div class="header-subheader-container">
            <!-- <div class="header-sidebar-toggle-wrapper">
                <button class="header-sidebar-toggle" data-action="header-sidebar-show">
                    <i class="header-sidebar-toggle-icon"></i>
                </button>
            </div> -->
            <ul class="header-subheader-options">
                {{!--
                {{#if showLanguagesOrCurrencies}}
                <li class="header-subheader-settings">
                    <a href="#" class="header-subheader-settings-link" data-toggle="dropdown" title="{{translate 'Settings'}}">
                        <i class="header-menu-settings-icon"></i>
                        <i class="header-menu-settings-carret"></i>
                    </a>
                    <div class="header-menu-settings-dropdown">
                        <h5 class="header-menu-settings-dropdown-title">{{translate 'Site Settings'}}</h5>
                        {{#if showLanguages}}
                            <div data-view="Global.HostSelector"></div>
                        {{/if}}
                        {{#if showCurrencies}}
                            <div data-view="Global.CurrencySelector"></div>
                        {{/if}}
                    </div>
                </li>
                {{/if}}
                --}}
              <div class="header-menu-profile-support header-menu-support">
                    {{#if isLoggedIn}}
                        <a href="#" data-action="show-salesrep-popup" class="header-icon-container">
                            <i class="fa-fa-phone" ></i>
                        </a> <span class="sales-rep-info-text"> Need Support? <a href="#" data-action="show-salesrep-popup"> Contact your sales rep</a></span>
                    {{else}}
                        <a href="/sales-reps" data-hashtag="#sales-reps" class="header-icon-container" data-touchpoint="home">
                            <i class="fa-fa-phone" ></i>
                        </a><span class="sales-rep-info-text"> Speak to our <a href="/sales-reps">Technology Experts!</a>  Give Us a Call: <a href="tel:800-288-7466">800-288-7466</a></span>
                    {{/if}}
                </div>
                <div class="header-menu-profile" data-view="Header.Profile"></div>
                <!-- <li data-view="StoreLocatorHeaderLink"></li> -->
                <li data-view="RequestQuoteWizardHeaderLink"></li>
                <li data-view="QuickOrderHeaderLink"></li>
            </ul>
		</div>
	</div>
    {{/unless}}

	<nav class="header-main-nav">
		<div id="banner-header-top" class="content-banner banner-header-top" data-cms-area="header_banner_top" data-cms-area-filters="global"></div>
		<div class="header-sidebar-toggle-wrapper">
			<button class="header-sidebar-toggle" data-action="header-sidebar-show">
				<i class="header-sidebar-toggle-icon"></i>
			</button>
		</div>
		<div class="header-content">
			<div class="header-logo-wrapper">
				<div data-view="Header.Logo"></div>
			</div>

			<div class="header-secondary-wrapper{{#if isStandalone}} header-secondary-wrapper-standalone{{/if}}" data-view="Header.Menu" data-phone-template="header_sidebar" data-tablet-template="header_sidebar"></div>
			<div class="icon-right-div">
				{{#unless isStandalone}}
					<!-- <div class="header-menu-locator-mobile" data-view="StoreLocatorHeaderLink"></div> -->
					<div class="header-menu-searchmobile" data-view="SiteSearch.Button"></div>
					<div class="header-menu-cart">
						<div class="header-menu-cart-dropdown" >
							<div data-view="Header.MiniCart"></div>
						</div>
					</div>
				{{/unless}}
			</div>
			<!-- <div class="header-right-menu">
				<div class="header-menu-profile" data-view="Header.Profile"></div>
				{{#unless isStandalone}}
				<div class="header-menu-locator-mobile" data-view="StoreLocatorHeaderLink"></div>
				<div class="header-menu-searchmobile" data-view="SiteSearch.Button"></div>
				<div class="header-menu-cart">
					<div class="header-menu-cart-dropdown" >
						<div data-view="Header.MiniCart"></div>
					</div>
				</div>
				{{/unless}}
			</div> -->
		</div>
		<div id="banner-header-bottom" class="content-banner banner-header-bottom" data-cms-area="header_banner_bottom" data-cms-area-filters="global"></div>
	</nav>

</div>
{{#unless isStandalone}}
	<div data-view="SiteSearch"></div>
{{/unless}}
<div class="header-sidebar-overlay" data-action="header-sidebar-hide"></div>


{{!----
Use the following context variables when customizing this template:

	profileModel (Object)
	profileModel.addresses (Array)
	profileModel.addresses.0 (Array)
	profileModel.creditcards (Array)
	profileModel.firstname (String)
	profileModel.paymentterms (undefined)
	profileModel.phoneinfo (undefined)
	profileModel.middlename (String)
	profileModel.vatregistration (undefined)
	profileModel.creditholdoverride (undefined)
	profileModel.lastname (String)
	profileModel.internalid (String)
	profileModel.addressbook (undefined)
	profileModel.campaignsubscriptions (Array)
	profileModel.isperson (undefined)
	profileModel.balance (undefined)
	profileModel.companyname (undefined)
	profileModel.name (undefined)
	profileModel.emailsubscribe (String)
	profileModel.creditlimit (undefined)
	profileModel.email (String)
	profileModel.isLoggedIn (String)
	profileModel.isRecognized (String)
	profileModel.isGuest (String)
	profileModel.priceLevel (String)
	profileModel.subsidiary (String)
	profileModel.language (String)
	profileModel.currency (Object)
	profileModel.currency.internalid (String)
	profileModel.currency.symbol (String)
	profileModel.currency.currencyname (String)
	profileModel.currency.code (String)
	profileModel.currency.precision (Number)
	showLanguages (Boolean)
	showCurrencies (Boolean)
	showLanguagesOrCurrencies (Boolean)
	showLanguagesAndCurrencies (Boolean)
	isHomeTouchpoint (Boolean)
	cartTouchPoint (String)

----}}
