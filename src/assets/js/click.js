var intent = " ";
var pagename = " ";
var section = " ";
var userevent = " ";
var journey = " ";

function evar_set(evar6) {
	var omni_role = $(".b2b_omniture_role").val();
	if(omni_role == "USER"){
	s.pageName = pagename.replace(/\s+/g, '').toLowerCase();
	s.eVar6 = evar6;
	}
}

function trk_event_set(track_events) {
	var omni_role = $(".b2b_omniture_role").val();
	if(omni_role == "USER"){
	s.linkTrackEvents = track_events;
	}
}

function events_set(events) {
	var omni_role = $(".b2b_omniture_role").val();
	if(omni_role == "USER"){
	s.events = events;
	}
}

function setFormName(formname) {
	var omni_role = $(".b2b_omniture_role").val();
	if(omni_role == "USER"){
	formName = formname;
	}
}

function setAnalytics(pagename, linkname, section) {
	var omni_role = $(".b2b_omniture_role").val();
	if(omni_role == "USER" || omni_role == "ROLE_MP_PORTAL"){
		s.pageName = pagename.replace(/\s+/g, '').toLowerCase();
		console.log("s.pageName"+s.pageName);
		s.linkTrackVars = 'events,eVar6,prop4,prop6,prop10';
		s.prop4 = pagename.replace(/\s+/g, '').toLowerCase();
		s.prop6 = linkname.replace(/\s+/g, '').toLowerCase();
		console.log("s.linkTrackVars->"+s.linkTrackVars+"=====s.prop4============>"+s.prop4+"==========s.prop6>"+s.prop6);
		s.prop10 = section;
		s.tl(this, 'o',
				pagename.replace(/\s+/g, '').toLowerCase() + ':' + linkname.replace(/\s+/g, '').toLowerCase(), null,
				'navigate');

		s.prop4 = undefined;
		s.prop6 = undefined;
	}
}

function setPageName() {

	var omni_role = $(".b2b_omniture_role").val();
	if(omni_role == "USER"){
	path = window.location.href;
	path = path.replace("#", "/");
	path = path.split("/");
	arr = [];
	for (var i = 0, flag = 0; i < path.length; i++)

	{
		if (path[i] == "app")
			flag = 1;

		if (path[i] != "app" && flag == 1) {
			arr = arr + path[i] + ":";
		}
	}

	var n = arr.lastIndexOf(":");


	if(arr && arr.length> 0){
		arr = arr.substring(0, n);

		if(arr[n]==":"){
			arr=arr.substring(0, n-1);
		}
		arr = arr.split('?')[0];
		pagename = analyticsObj.postlogin_sitename + ':' + arr;
		}
	}


}

function setAnalyticsPost(linkname,offerName) {
	var omni_role = $(".b2b_omniture_role").val();

	if(window.location.hostname.indexOf('estore') >= 0) {
		console.log("omniture for disclaimer--- ", linkname,"offerName", offerName)
        s.linkTrackVars = 'eVar28,eVar1,prop4,eVar74';
        s.linkTrackEvents = 'event150';
        s.events = 'event150';
	    s.pageName='sbi-card:postlogin:estore';
	    s.prop4='sbi-card:postlogin:estore';
	    s.eVar1=userId;
	    s.eVar28= 'estore:disclaimer-popup'+linkname.replace(/\s+/g, '').toLowerCase();
	    s.eVar74=offerName;
	    s.tl(this, 'o',s.eVar28,null);

	}else{
	if(omni_role == "USER"){
	setPageName();
	s.pageName = pagename.replace(/\s+/g, '').toLowerCase();
	s.linkTrackVars = 'events,prop4,prop6';
	s.linkTrackEvents = 'None';
	s.prop4 = pagename.replace(/\s+/g, '').toLowerCase();
	s.prop6 = linkname.replace(/\s+/g, '').toLowerCase();
	if (linkname == 'Print' || linkname == 'Download' || linkname == 'Download Catalog' || linkname == 'Download Catalogue' || linkname == 'Reward-Catalogue' || linkname == 'à¤¡à¤¾à¤‰à¤¨à¤²à¥‹à¤¡') {
		s.tl(this, 'd', pagename.replace(/\s+/g, '').toLowerCase()
				+ ':download_' + formName.replace(/\s+/g, '').toLowerCase(),
				null, 'navigate');

	} else {
		s.tl(this, 'o', pagename.replace(/\s+/g, '').toLowerCase() + ':'
				+ linkname.replace(/\s+/g, '').toLowerCase(), null, 'navigate');
	}

	s.prop4 = undefined;
	s.prop6 = undefined;
	}
	}
	/*if(omni_role == "USER"){
		setPageName();
		s.pageName = pagename.replace(/\s+/g, '').toLowerCase();
		s.linkTrackVars = 'events,prop4,prop6';
		s.linkTrackEvents = 'None';
		s.prop4 = pagename.replace(/\s+/g, '').toLowerCase();
		s.prop6 = linkname.replace(/\s+/g, '').toLowerCase();
		if (linkname == 'Print' || linkname == 'Download' || linkname == 'Download Catalog' || linkname == 'Download Catalogue' || linkname == 'Reward-Catalogue' || linkname == 'à¤¡à¤¾à¤‰à¤¨à¤²à¥‹à¤¡') {
			s.tl(this, 'd', pagename.replace(/\s+/g, '').toLowerCase()
					+ ':download_' + formName.replace(/\s+/g, '').toLowerCase(),
					null, 'navigate');

		} else {
			s.tl(this, 'o', pagename.replace(/\s+/g, '').toLowerCase() + ':'
					+ linkname.replace(/\s+/g, '').toLowerCase(), null, 'navigate');
}

		s.prop4 = undefined;
		s.prop6 = undefined;
	}*/

}

function setAnalyticsPayNow(linkname, paymenttype) {
	var omni_role = $(".b2b_omniture_role").val();
	if(omni_role == "USER"){
	setPageName();
	s.pageName = pagename.replace(/\s+/g, '').toLowerCase();
	s.linkTrackVars = 'events,prop4,prop5,prop6,eVar1,eVar9';
	s.linkTrackEvents = 'event12';
	s.prop4 = s.pageName;
	s.prop6 = linkname.replace(/\s+/g, '').toLowerCase();
	s.prop5 = userId;
	s.eVar1 = userId;
	s.eVar9 = paymenttype.replace(/\s+/g, '').toLowerCase();
	s.events = 'event12,';
	s.tl(this, 'o',
			pagename.replace(/\s+/g, '').toLowerCase() + ':' + linkname.replace(/\s+/g, '').toLowerCase(), null,
			'navigate');

	s.prop4 = undefined;
	s.prop6 = undefined;
	}

}

function setAnalyticsForm(linkname) {
	var omni_role = $(".b2b_omniture_role").val();
	if(omni_role == "USER"){
	setPageName();
	s.pageName = pagename.replace(/\s+/g, '').toLowerCase();
	s.linkTrackVars='events,prop4,prop5,prop6,eVar1,eVar16';
	s.linkTrackEvents='event29, event11, event30';
	s.prop4 = s.pageName;
	s.prop6 = linkname.replace(/\s+/g, '').toLowerCase();
	s.prop5 = userId;
	s.eVar1 = userId;
	s.eVar16=journey_link.replace(/\s+/g, '').toLowerCase()+'form';

	if(linkname ==Â "Go:Advanced" || linkname ==Â "Go:Quick" || linkname == "à¤œà¤¾à¤¯à¥‡à¤‚:à¤¤à¥à¤°à¤‚à¤¤" || linkname == "à¤œà¤¾à¤¯à¥‡à¤‚:à¤…à¤—à¥à¤°à¤¿à¤®")
		{
		s.events = 'event29, event11, event30';
		}
	else{
		s.events = 'event29';
	}

	s.tl(this, 'o',
			pagename.replace(/\s+/g, '').toLowerCase() + ':' + journey_link.replace(/\s+/g, '').toLowerCase()+'form_initiate', null,
			'navigate');

	s.prop4 = undefined;
	s.prop6 = undefined;
	}

}


function setAnalyticsOffer(linkname) {

	var omni_role = $(".b2b_omniture_role").val();
	if(omni_role == "USER"){
	var checkedValues = $('.styled-checkbox:checked').map(function() {
Â Â Â Â return this.value;
	}).get();
	setPageName();
	s.pageName = pagename.replace(/\s+/g, '').toLowerCase();
	s.linkTrackVars = 'events,prop4,prop6,prop5,eVar1,list2';
	s.linkTrackEvents = 'None';
	s.prop4 = s.pageName;
	s.prop6 = linkname.replace(/\s+/g, '').toLowerCase();
	s.prop5 = userId;
	s.eVar1 = userId;
	s.list2=checkedValues;

	s.tl(this, 'o',
			pagename.replace(/\s+/g, '').toLowerCase() + ':' + linkname.replace(/\s+/g, '').toLowerCase(), null,
			'navigate');

	s.prop4 = undefined;
	s.prop6 = undefined;
	}
}


$("body").on('click','.view-demos-custom', function(e){
	var omni_role = $(".b2b_omniture_role").val();
	if(omni_role == "USER"){
	setAnalyticsPost($(this).text());
	}
});


$("body").off('click').on('click','.have-question', function(e){
	var omni_role = $(".b2b_omniture_role").val();
	if(omni_role == "USER"){
	setAnalyticsPost($(this).text());
	}
});

function setAnalyticsRewards(linkname, giftvoucher) {

	var omni_role = $(".b2b_omniture_role").val();
	if(omni_role == "USER"){
	setPageName();
	s.pageName = pagename.replace(/\s+/g, '').toLowerCase();

	s.linkTrackVars='products,events,prop4,prop5,prop6,eVar1';
	if (linkname == 'Set Goal' || linkname == 'Set Goal Now')
		{
		s.linkTrackEvents='event27'
		s.events='event27';
		}
	if (linkname == 'Redeem Now' || linkname == 'Add to Cart' || linkname == 'à¤•à¤¾à¤°à¥à¤Ÿ à¤®à¥‡à¤‚ à¤œà¥‹à¤¡à¥‡à¤‚' || linkname == 'à¤…à¤­à¥€ à¤°à¤¿à¤¡à¥€à¤® à¤•à¤°à¥‡à¤‚')
		{
		s.linkTrackEvents='scAdd'
		s.events='scAdd';
		}
	if (linkname == 'Clear Cart' || linkname == 'Remove Item' || linkname == 'à¤•à¤¾à¤°à¥à¤Ÿ à¤–à¤¾à¤²à¥€ à¤•à¤°à¥‡à¤‚')
	{
	s.linkTrackEvents='scRemove'
	s.events='scRemove';
	}

	if (linkname == 'Place Order' || linkname == 'à¤‘à¤°à¥à¤¡à¤° à¤•à¤°à¥‡à¤‚')
	{
	s.linkTrackEvents='scCheckout'
	s.events='scCheckout';
	}

	s.products=';'+giftvoucher;
	s.prop4=s.pageName;
	s.prop6=linkname.replace(/\s+/g, '').toLowerCase();
	s.prop5=userId;
	s.eVar1=userId;
	s.tl(this,'o',pagename.replace(/\s+/g, '').toLowerCase() + ':' + linkname.replace(/\s+/g, '').toLowerCase(),null,'navigate');

	s.prop4 = undefined;
	s.prop6 = undefined;
	}
}

function clearShoppingData(shoppingData){
	var omni_role = $(".b2b_omniture_role").val();
	if(omni_role == "USER"){
	clearItems=[];
	for (var i = 0; i < shoppingData.items.length; i++){
		clearItems = clearItems+";"+shoppingData.items[i].itemCode+",";
	}
	var n = clearItems.lastIndexOf(",");
	if(clearItems!=""){
		clearItems = clearItems.substring(1, n);
	}
	}
}

function setAnalyticsApp(pagename,linkname) {
	var omni_role = $(".b2b_omniture_role").val();
	if(omni_role == "USER"){
	Â Â s.pageName=pagename;
	Â Â s.linkTrackVars='events,prop4,prop6';
	Â Â s.linkTrackEvents='None';
	Â Â s.prop4=pagename;
	Â Â s.prop6=linkname.replace(/\s+/g, '').toLowerCase();
	Â Â s.tl(this,'e',pagename+':'+linkname.replace(/\s+/g, '').toLowerCase());
	}
}
/*Omniture Addon Kyc :Tanya*/
function setAnalyticsAddonKyc(linkname) {
	var omni_role = $(".b2b_omniture_role").val();
	if(omni_role == "USER"){
	setPageName();
	s.pageName = pagename.replace(/\s+/g, '').toLowerCase();
	s.linkTrackVars = 'events,prop4,prop6,eVar9';
	s.linkTrackEvents = 'event12';
	s.prop4 = s.pageName;
	s.prop6 = linkname.replace(/\s+/g, '').toLowerCase();
	//s.eVar9 = paymenttype.replace(/\s+/g, '').toLowerCase();
	//console.log("Addon Kyc Omniture "+s.prop4+"=="+s.prop6);
	s.tl(this,'o','sbi:'+s.prop4+':'+s.prop6,null);
	s.prop4 = undefined;
	s.prop6 = undefined;
	}

}
/*Omniture Addon Kyc End*/

/*omniture webform start*/
function setAnalyticsMailbox(linkname) {
	var omni_role = $(".b2b_omniture_role").val();
	if(omni_role == "USER"){
	setPageName();
	s.pageName = pagename.replace(/\s+/g, '').toLowerCase();
	s.linkTrackVars = 'events,prop4,prop6,eVar9';
	s.linkTrackEvents = 'event12';
	s.prop4 = s.pageName;
	s.prop6 = linkname.replace(/\s+/g, '').toLowerCase();
	//s.eVar9 = paymenttype.replace(/\s+/g, '').toLowerCase();
	s.tl(this,'o','sbi:'+s.prop4+':'+s.prop6,null);
	//console.log("Webform Omniture "+s.prop4+"===="+s.prop6);
	s.prop4 = undefined;
	s.prop6 = undefined;
	}
}
/*omniture webform end*/

/*omniture prime card start : Tanya*/
function setAnalyticsPrimeCard(linkname) {
	var omni_role = $(".b2b_omniture_role").val();
	if(omni_role == "USER"){
	setPageName();
	s.pageName = pagename.replace(/\s+/g, '').toLowerCase();
	s.linkTrackVars = 'events,prop4,prop6,eVar9';
	s.linkTrackEvents = 'event12';
	s.prop4 = s.pageName;
	s.prop6 = linkname.replace(/\s+/g, '').toLowerCase();
    s.tl(this,'o','sbi:'+s.prop4+':'+s.prop6,null);
	s.prop4 = undefined;
	s.prop6 = undefined;
	}
}
/*omniture prime card end*/

//H-Block
function HBlocksetAnalytics(linkname) {
	var omni_role = $(".b2b_omniture_role").val();
	if(omni_role == "USER"){
	setPageName();
	s.pageName = pagename.replace(/\s+/g, '').toLowerCase();
	s.linkTrackVars = 'events,prop4,prop6,eVar9';
	s.linkTrackEvents='event12';
	s.prop4 = pagename.replace(/\s+/g, '').toLowerCase();
	s.prop6 = linkname.replace(/\s+/g, '').toLowerCase();
	//console.log(s.prop4+"==="+s.prop6);
	s.tl(this,'e',pagename+':'+linkname.replace(/\s+/g, '').toLowerCase());
	s.prop4 = undefined;
	s.prop6 = undefined;
	}

}
//H-Block
/*omniture corporate card start*/
function setAnalyticsCorporateCard(pagename, linkname) {
	setPageName();
	s.pageName = pagename.replace(/\s+/g, '').toLowerCase();
	s.linkTrackVars = 'events,prop4,prop6,eVar9';
	s.linkTrackEvents = 'event12';
	s.prop4 = s.pageName;
	s.prop6 = linkname.replace(/\s+/g, '').toLowerCase();
	//console.log(s.prop4+"==="+s.prop6);
    s.tl(this,'o','sbi:'+s.prop4+':'+s.prop6,null);
	s.prop4 = undefined;
	s.prop6 = undefined;
}

$( document ).ready(function() {
	try{
		var omni_role = $(".b2b_omniture_role").val();
		if(omni_role == "USER"){
		$('.rewards.rewards-catalog .have-question').off('click').on('click', function(e){
			setAnalyticsPost($(this).text());
		});
		}
	}catch(e){
		//console.log(e);
	}//end of cat
});

function setAnalyticsInsurance(linkname) {
	setPageName();
	s.pageName = pagename.replace(/\s+/g, '').toLowerCase();
	s.linkTrackVars = 'events,prop4,prop6,eVar9';
	s.linkTrackEvents = 'event12';
	s.prop4 = s.pageName;
	s.prop6 = linkname.replace(/\s+/g, '').toLowerCase();
    s.tl(this,'o','sbi:'+s.prop4+':'+s.prop6,null);
    //console.log("insurance Omniture "+s.prop4+"===="+s.prop6);
	s.prop4 = undefined;
	s.prop6 = undefined;
}

/*omniture etihad start*/
function setAnalyticsEtihadCardUpgrade(linkname) {
	var omni_role = $(".b2b_omniture_role").val();
	if(omni_role == "USER"){
	setPageName();
	s.pageName = pagename.replace(/\s+/g, '').toLowerCase();
	s.linkTrackVars = 'events,prop4,prop6,eVar9';
	s.linkTrackEvents = 'event12';
	s.prop4 = s.pageName;
	s.prop6 = linkname.replace(/\s+/g, '').toLowerCase();
    s.tl(this,'o','sbi:'+s.prop4+':'+s.prop6,null);
	s.prop4 = undefined;
	s.prop6 = undefined;
	}
}
/*omniture etihad end*/


/*Omniture code for alerts&notification start*/


function setAnalyticsCTAClick(linkname, alertid, alertlink) {
	setPageName();
	s.pageName = pagename.replace(/\s+/g, '').toLowerCase();
	s.linkTrackVars = 'events,prop4,prop5,prop6,eVar1,eVar9,prop10';
	s.linkTrackEvents = 'event12';
	s.prop4 = s.pageName;
	s.prop6 = linkname.replace(/\s+/g, '').toLowerCase();
	s.prop5 = userId;
	s.eVar1 = userId;
	s.eVar9 = alertid.replace(/\s+/g, '').toLowerCase();
	s.prop10 = alertlink;
	s.events = 'event12,';
	s.tl(this, 'o',
			pagename.replace(/\s+/g, '').toLowerCase() + ':' + linkname.replace(/\s+/g, '').toLowerCase(), null,
			'navigate');

	s.prop4 = undefined;
	s.prop6 = undefined;


}
function setAnalyticsIconClick(linkname) {
	setPageName();
	s.pageName = pagename.replace(/\s+/g, '').toLowerCase();
	s.linkTrackVars = 'events,prop4,prop6,eVar9';
	s.linkTrackEvents = 'event12';
	s.prop4 = s.pageName;
	s.prop6 = linkname.replace(/\s+/g, '').toLowerCase();
    s.tl(this,'o','sbi:'+s.prop4+':'+s.prop6,null);
    //console.log("insurance Omniture "+s.prop4+"===="+s.prop6);
	s.prop4 = undefined;
	s.prop6 = undefined;
}

function setAnalyticsaAlertList(linkname){
	setPageName();
	s.pageName = pagename.replace(/\s+/g, '').toLowerCase();
	s.linkTrackVars = 'events,prop4,prop6,eVar9';
	s.linkTrackEvents = 'event12';
	s.prop4 = s.pageName;
	s.prop6 = linkname.replace(/\s+/g, '').toLowerCase();
	s.tl(this,'o','sbi:'+s.prop4+':'+s.prop6,null);
    //console.log("insurance Omniture "+s.prop4+"===="+s.prop6);
	s.prop4 = undefined;
	s.prop6 = undefined;
}

/*Omniture code for alerts&notification end*/



/*digital-onboarding start*/

function setAnalyticsDigitalOnboard(linkname) {
	setPageName();
	s.pageName = pagename.replace(/\s+/g, '').toLowerCase();
	s.linkTrackVars = 'events,prop6';
	s.linkTrackEvents = 'event12';
	s.prop4 = s.pageName;
	//s.prop6 = linkname.replace(/\s+/g, '').toLowerCase();
	s.prop6 = linkname;
    s.tl(this,'o','sbi:'+s.prop4+':'+s.prop6,null);
    s.prop4 = undefined;
	s.prop6 = undefined;
}

/*digital-onboarding end*/

/*multicarding end*/
function setAnalyticsMulticardingSPAbuttons(pageName, description) {
	console.log('multicarding SPA called', pageName, description);
	s.linkTrackVars='events,prop6,eVar9';
	s.linkTrackEvents='event12';
	s.prop4=pageName;
	s.prop6=description;
	s.tl(this,'o','sbi:'+s.prop4+':'+s.prop6,null);
	}
/*multicarding end*/

/*Super Premium start*/
function setAnalyticsAurumMVC(linkname) {
	console.log('setAnalyticsAurum called', linkname);
	setPageName();
	s.pageName = pagename.replace(/\s+/g, '').toLowerCase();
	s.linkTrackVars = 'events,prop6';
	s.linkTrackEvents = 'event12';
	s.prop4 = s.pageName;
	//s.prop6 = linkname.replace(/\s+/g, '').toLowerCase();
	s.prop6 = linkname;
    s.tl(this,'o','sbi:'+s.prop4+':'+s.prop6,null);
    s.prop4 = undefined;
	s.prop6 = undefined;
}

function setAnalyticsAurumSPA(pageName, url) {
	console.log('setAnalyticsAurumSPA called', pageName, url);
	 s.pageName= pageName;
	 s.channel='personal';
	 s.prop1= url;
	 s.prop10='personal';
	 s.prop11='credit-cards';
	 s.eVar2= url;
	 var s_code=s.t();
	 if(s_code)document.write(s_code)//-->
}

function setAnalyticsAurumSPAbuttons(pageName, description) {
	console.log('setAnalyticsAurumSPA called', pageName, description);
	s.linkTrackVars='events,prop6,eVar9';
	s.linkTrackEvents='event12';
	s.prop4=pageName;
	s.prop6=description;
	s.tl(this,'o','sbi:'+s.prop4+':'+s.prop6,null);
}
/*Super premium end*/

// Reinstatement Start
function setAnalyticsReinstatement(linkname) {
	//console.log('setAnalyticsReinstatement called', linkname);
	setPageName();
	s.pageName = pagename.replace(/\s+/g, '').toLowerCase();
	s.linkTrackVars = 'events,prop4,prop6,eVar9';
	s.linkTrackEvents = 'event12';
	s.prop4 = s.pageName;
	s.prop6 = s.prop4+":"+linkname;
	console.log('setAnalyticsReinstatement called link name', s.prop6);
    s.tl(this,'o','sbi:'+s.prop4+':'+s.prop6,null);
    s.prop4 = undefined;
	s.prop6 = undefined;
}

// Reinstatement end

//card closure changes start

function setAnalyticsReasonandSR(url, reason, button) {
	s.pageName='sbi-card:postlogin:requests:creditclosure';
    s.prop1=url;
    s.prop5= userId;
    s.prop9='Repeat';
	s.prop14=  'postlogin:requests:creditclosure';
	s.prop6= reason;
	s.prop4 = button;
    s.eVar2= url;
    var s_code=s.t();
    if(s_code)document.write(s_code)//-->
}

function setAnalyticsButton(button) {
	var url = window.location.href;
	s.pageName='sbi-card:postlogin:requests:creditclosure';
    s.prop1=url;
    s.prop5= userId;
    s.prop9='Repeat';
	s.prop14=  'postlogin:requests:creditclosure';
	s.prop4 = button;
    s.eVar2= url;
    var s_code=s.t();
    if(s_code)document.write(s_code)//-->
}

function setAnalyticsReasonAndButton(button, reason, url) {
	s.pageName='sbi-card:postlogin:requests:creditclosure';
    s.prop1=url;
	s.prop6= button + reason;
	s.prop11 = 'credit_card_closure';
    s.eVar2= url;
    var s_code=s.t();
    if(s_code)document.write(s_code)//-->
}
//card closure changes end

//kyc renewal changes start
function setAnalyticsKYCRenewal(button, action) {
Â Â Â  var url = window.location.href;
Â Â Â  s.pageName='sbi-card:postlogin:myaccount:kycrenewal';
Â Â Â  s.channel='MyAccount';
Â Â Â  s.prop1=url;
Â Â Â  s.prop6= button;
Â Â Â  s.prop11=action;
Â Â Â  s.eVar2=url;
Â Â Â  var s_code=s.t();if(s_code)document.write(s_code)//-->

}
function setAnalyticsKYCConfirmation(button,action) {
Â Â Â  var url = window.location.href;
Â Â Â  s.pageName='sbi-card:postlogin:myaccount:kycrenewal:confirmation';
Â Â Â  s.channel='MyAccount';
Â Â Â  s.prop1=url;
Â Â Â  s.prop6=button;
Â Â Â  s.prop11=action;
Â Â Â  s.eVar2=url;
Â Â Â  var s_code=s.t();if(s_code)document.write(s_code)//-->Â Â Â Â
}
//kyc renewal change ends

//Anti-phishing omniture code implemantation start
function setAnalyticsAntiPhishingAuthImageSelection(action,button) {
	Â Â Â  var url = window.location.href;
	Â Â Â  s.pageName='sbi-card:postlogin:authenticationimage&text';
	Â Â Â  s.channel='MyAccount';
	Â Â Â  s.prop1=url;
	Â Â Â  s.prop6=action;
	Â Â Â  s.prop11=button;
	Â Â Â  s.eVar2=url;
	Â Â Â  var s_code=s.t();if(s_code)document.write(s_code)//-->Â Â Â Â
	}

	//Encash and Encash Inline Revamp start
function setAnalyticsEncashJourney(var1,var2) {
Â Â Â  var url = window.location.href;
Â Â Â  s.pageName='sbi-card:postlogin:encash';
Â Â Â  s.channel='EMI&More:encash';
Â Â Â  s.prop1=url;
Â Â Â  s.prop6=var1;
Â Â Â  s.prop11=var2;
Â Â Â  s.eVar2=url;
Â Â Â  var s_code=s.t();if(s_code)document.write(s_code)//-->Â Â Â Â
}
//Encash and Encash Inline Revamp End

//postlogin banner offers
function setAnalyticsPostLoginOffer(action,button,clickUrl) {
    var url = window.location.href;
	s.pageName='sbi-card:postlogin:dashboard';
	s.channel='mydashboard';
	s.prop1= clickUrl;
	s.prop06='sbi-card:postlogin:dashboard_offer_selection_'+ button;
	s.prop11='sbi-card:postlogin:dashboard_offer_selection_'+ action;
	s.eVar2= clickUrl ;
	var s_code=s.t();if(s_code)document.write(s_code)//-->
Â Â Â
	}

//Travel Card Phase 2 Omniture changes start
function setAnalyticsTravelCard(var1,var2) {
	var url = window.location.href;
	s.pageName='sbi-card:postlogin:MilesCard';
	s.channel=var1;
	s.prop1=url;
	s.prop06=var2;
	s.prop11=var2;
	s.eVar2=url;
	var s_code=s.t();if(s_code)document.write(s_code)
}
//Travel Card Phase2 omniture changes ends

