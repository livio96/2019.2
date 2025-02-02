<tr id="{{lineId}}" data-item-id="{{itemId}}" data-type="order-item" class="{{#if showGeneralClass}} {{generalClass}} {{/if}} cart-lines-row">
	<td class="cart-lines-table-first">
		<div class="cart-lines-thumbnail">
			{{#if isNavigable}}
				<a {{{linkAttributes}}}>
					<img src="{{resizeImage thumbnail.url 'thumbnail'}}" alt="{{thumbnail.altimagetext}}">
				</a>
			{{else}}
				<img src="{{resizeImage thumbnail.url 'thumbnail'}}" alt="{{thumbnail.altimagetext}}">
			{{/if}}
		</div>
	</td>
	<td class="cart-lines-table-middle">
		<div class="cart-lines-name">
		{{#if isNavigable}}
			<a {{{linkAttributes}}} class="cart-lines-name-link">
				{{item._name}}
			</a>
		{{else}}
				<span class="cart-lines-name-viewonly">{{item._name}}</span>
		{{/if}}
		</div>
		<div data-view="Item.Sku"></div>
		<div class="cart-lines-price">
			<div data-view="Item.Price"></div>
		</div>
		<div data-view="Item.Tax.Info"></div>

		<div class="cart-lines-options">
			<div data-view="Item.SelectedOptions"></div>
		</div>
		
		<div data-view="StockDescription"></div>
		{{#if showSummaryView}}
			<div class="cart-lines-table-last-first-line mobile"> 
				<div class="cart-lines-summary" data-view="Item.Summary.View"></div>
				{{#if showVendStockMsg}}
               	 <p class="vend-stock-msg">Some units may not be shipped immediately.</p>
                {{/if}}
			</div>
		{{/if}}
		{{#if hasWarrantiesAvailable}}
            <div class="cart-lines-table-last-warranty mobile">
                <p>{{translate 'Add extended warranty'}}</p>

                {{#each warranties}}
                    {{#if internalid}}
                        <div class="cart-lines-table-last-warranty-label">
                            <input type="radio" {{#if isActive}}checked{{/if}}  data-toggle="select-warranty" name="{{cartOptionId}}" id="{{cartOptionId}}" value="{{internalid}}" />
                            <label for="" name="{{cartOptionId}}"
                                   id="{{cartOptionId}}" value="{{internalid}}" {{#if isActive}}selected{{/if}}
                                   data-active="{{isActive}}"
                                   data-available="{{isAvailable}}"><span>{{label}}</span> {{#if price}}<span class="color-orange">{{formatCurrency price}}</span>{{/if}}</label>
                        </div>
                    {{/if}}
                {{/each}}

            </div>
        {{/if}}
        <div class="cart-lines-shipping-method mobile" data-view="CartLines.PickupInStore"></div>
        <div class="cart-lines-item-actions-desktop" data-view="Item.Actions.View"></div>
        <div class="cart-lines-item-actions-mobile" data-view="Item.Actions.View"></div>

	</td>
	<td class="cart-lines-table-last">
		{{#if showSummaryView}}
			<div class="cart-lines-table-last-first-line desktop"> 
				<div class="cart-lines-summary" data-view="Item.Summary.View"></div>
				{{#if showVendStockMsg}}
               	 <p class="vend-stock-msg">Some units may not be shipped immediately.</p>
                {{/if}}
			</div>
		{{/if}}
		 {{#if hasWarrantiesAvailable}}
            <div class="cart-lines-table-last-warranty desktop">
                <p>{{translate 'Add extended warranty'}}</p>

                {{#each warranties}}
                    {{#if internalid}}
                        <div class="cart-lines-table-last-warranty-label">
                            <input type="radio" {{#if isActive}}checked{{/if}}  data-toggle="select-warranty" name="{{cartOptionId}}" id="{{cartOptionId}}" value="{{internalid}}" />
                            <label for="" name="{{cartOptionId}}"
                                   id="{{cartOptionId}}" value="{{internalid}}" {{#if isActive}}selected{{/if}}
                                   data-active="{{isActive}}"
                                   data-available="{{isAvailable}}"><span>{{label}}</span> {{#if price}}<span class="color-orange">{{formatCurrency price}}</span>{{/if}}</label>
                        </div>
                    {{/if}}
                {{/each}}

            </div>
        {{/if}}
        <div class="cart-lines-shipping-method desktop" data-view="CartLines.PickupInStore"></div>

		<div class="cart-lines-stock" data-view="Product.Stock.Info"></div>

		{{#if showAlert}}
			<div class="cart-lines-alert-placeholder" data-type="alert-placeholder"></div>
		{{/if}}

		{{#if showCustomAlert}}
			<div class="alert alert-{{customAlertType}}">
				{{item._cartCustomAlert}}
			</div>
		{{/if}}
	</td>
</tr>




{{!----
Use the following context variables when customizing this template: 
	
	line (Object)
	line.item (Object)
	line.item.internalid (Number)
	line.item.type (String)
	line.quantity (Number)
	line.internalid (String)
	line.options (Array)
	line.location (String)
	line.fulfillmentChoice (String)
	lineId (String)
	item (Object)
	item.isinactive (Boolean)
	item.isinstock (Boolean)
	item.isonline (Boolean)
	item.matrixchilditems_detail (undefined)
	item.itemid (String)
	item.minimumquantity (undefined)
	item.ispurchasable (Boolean)
	item.stockdescription (String)
	item.isbackorderable (Boolean)
	item.itemimages_detail (Object)
	item.onlinecustomerprice_detail (Object)
	item.onlinecustomerprice_detail.onlinecustomerprice_formatted (String)
	item.onlinecustomerprice_detail.onlinecustomerprice (Number)
	item.internalid (Number)
	item.showoutofstockmessage (Boolean)
	item.itemtype (String)
	item.outofstockmessage (String)
	item.itemoptions_detail (Object)
	item.itemoptions_detail.fields (Array)
	item.itemoptions_detail.fields.0 (Object)
	item.itemoptions_detail.fields.0.internalid (String)
	item.itemoptions_detail.fields.0.label (String)
	item.itemoptions_detail.fields.0.type (String)
	item.displayname (String)
	item.storedisplayname2 (String)
	item.pricelevel1 (Number)
	item.pricelevel1_formatted (String)
	item.urlcomponent (String)
	item._optionsDetails (Object)
	item._optionsDetails.fields (Array)
	item._optionsDetails.fields.0 (Object)
	item._optionsDetails.fields.0.internalid (String)
	item._optionsDetails.fields.0.label (String)
	item._optionsDetails.fields.0.type (String)
	item._matrixParent (Object)
	item._matrixParent.options (Array)
	item.options (Array)
	item.options.0 (Object)
	item.options.0.cartOptionId (String)
	item.options.0.itemOptionId (String)
	item.options.0.label (String)
	item.options.0.type (String)
	item._url (String)
	item._isPurchasable (Boolean)
	item._name (String)
	item._priceDetails (Object)
	item._priceDetails.onlinecustomerprice_formatted (String)
	item._priceDetails.onlinecustomerprice (Number)
	item._comparePriceAgainst (Number)
	item._comparePriceAgainstFormated (String)
	item._isInStock (Boolean)
	item._outOfStockMessage (String)
	item._showOutOfStockMessage (Boolean)
	item._inStockMessage (String)
	item._showInStockMessage (Boolean)
	item._stockDescription (String)
	item._showStockDescription (Boolean)
	item._stockDescriptionClass (String)
	item._quantityavailableforstorepickup_detail (Array)
	item._showQuantityAvailable (Boolean)
	item._sku (String)
	item._minimumQuantity (Number)
	item._itemType (String)
	itemId (Number)
	linkAttributes (String)
	isNavigable (Boolean)
	showCustomAlert (Boolean)
	customAlertType (String)
	showActionsView (Boolean)
	showSummaryView (Boolean)
	showAlert (Boolean)
	showGeneralClass (Boolean)
	thumbnail (Object)
	thumbnail.url (String)
	thumbnail.altimagetext (String)

----}}
