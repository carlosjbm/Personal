_satellite.pushAsyncScript(function(event, target, $variables){
  var domainName = document.location.hostname;

if(domainName == "qa.efset.org"){
  if(typeof window.s != "undefined" && window.s != "" ){
    window.s.account="efefsetdev";
    console.log('Dev Report Suite set in custome code');
  }
}
});
