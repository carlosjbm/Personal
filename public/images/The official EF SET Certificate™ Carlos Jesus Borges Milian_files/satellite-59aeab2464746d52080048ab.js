_satellite.pushAsyncScript(function(event, target, $variables){
  function efFBCustomEvents(fbq){
	if(window.location.pathname.match(/\/(en|zh\-cn)\/efset\/login/)){ //logins pages
		fbq('track', 'SiteLoginPageView');
	}
	else if(window.location.pathname.match(/\/(en|zh\-cn)\/efset\/register/)){ //register pages
		fbq('track', 'SiteRegisterPageView');
	}
	fbq('track', 'PageView');
}

function initalizeFBIDS(fbq){
	if(typeof fbq!="undefined"){ //checks if the facebok objecrt is available
		console.log("yes")
		var fb_ids = _satellite.getVar("js_fb_ids"); //creates a variable for the fb_ids
		for(i=0;i<fb_ids.length;i++){ //loops through array
			fbq("init",fb_ids[i]); //initalises each facebook ids from the variable
			efFBCustomEvents(fbq); //triggers the function to send events to facebook
		}
	}
}




URLSearchParams = function(name){
  var results = new RegExp('[\?&]' + name + '=([^&#]*)').exec(window.location.href);
  if (results==null){
    return null;
  }
  else{
    return decodeURI(results[1]) || 0;
  }
}

URLSearchParams(window.location.search);
var host_domain = URLSearchParams('host_domain');
var partner_id = URLSearchParams('partner_id');
if(host_domain === null)
  host_domain = '';
if(partner_id === null)
  partner_id = '';

if((host_domain.match('go.efset.org') !== null || host_domain.match('www.efset.org') !== null)|| (partner_id.match('^efset') !== null) || location.host.match('www.efset')!== null){
  if(window.fbq === undefined){
    !function(f,b,e,v,n,t,s) {
      if(f.fbq)
        return;
      n=f.fbq=function(){
        n.callMethod? n.callMethod.apply(n,arguments):n.queue.push(arguments)
      }; 
      if(!f._fbq)
        f._fbq=n;
      n.push=n;
      n.loaded=!0;
      n.version='2.0'; 
      n.queue=[];
      t=b.createElement(e);
      t.async=!0; 
      t.src=v;
      s=b.getElementsByTagName(e)[0]; 
      s.parentNode.insertBefore(t,s)
    }(window, document,'script','https://connect.facebook.net/en_US/fbevents.js'); 
    initalizeFBIDS(window.fbq);
    fbq('set', 'autoConfig', false, '1065641840152352');
  }
  else{
    efFBCustomEvents(window.fbq);
  }
}



});
