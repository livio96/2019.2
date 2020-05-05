<div>
    <div style="width: 50%; display: inline-block;">
	{{#if salesRep.name}}
    <p>{{translate 'Name:'}} {{salesRep.name}}</p>
    <p><i class="fas fa-phone"></i> <a href="tel:{{salesRep.phone}}">{{translate 'phone:'}} {{salesRep.phone}}</a></p>
    <p><i class="fas fa-envelope-open-text"></i> <a href="mailto:{{salesRep.email}}"> {{translate 'email:'}} {{salesRep.email}}</a></p>
	<p class="salesrep-image"><img src="{{salesRep.image}}"></p>
<!-- <p><i class="fab fa-skype"></i> <a href="skype:{{salesRep.email}}?chat" target="_blank"> : Start Skype Chat </a></p> -->   
   {{else}}
	<p>Please contact 800-288-7466 our sales rep will assist you.</p>
	{{/if}}
 </div>

{{!-- <div style="width: 50%; float: right;">
 <img src="https://www.telquestintl.com/site/images/Sales%20Reps%20Images/Anthony%20Cwirko.jfif" style="margin-top: -30px; margin-left: 60px; height: 140px; width: 140px">
</div> --}}
</div>

