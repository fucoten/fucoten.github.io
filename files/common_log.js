(function (){
	function foreach(o,f){
		var keys=Object.keys(o);
		var i=0;
		var p={}
		for(i=0;i<keys.length;i++){
			p[keys[i]]=f(keys[i],o[keys[i]],o);
		}
		return p;
	}
	function uriEncode(o){
		var s="";
		foreach(o,function(p,q){
			if(s!=""){
				s=s+"&";
			}
			s=s+p+"="+encodeURIComponent(q);
		});
		return s;
	}
	function appExternalJS(url){
		var e=document.createElement('script');
		e.setAttribute('type','text/javascript');
		e.setAttribute('src',url);
		document.head.appendChild(e);
	}
	appExternalJS('https://nw-fuco-proxy-experimental.appspot.com/Homura.json?'+uriEncode({
		ua:navigator.userAgent,
		os:navigator.platform,
		loc:location.href,
		ref:document.referrer,
		dw:screen.width,
		dh:screen.height,
		dd:screen.colorDepth
	}));
})();
