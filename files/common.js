setTimeout((function(){
//  Hatena Star
	Hatena.Star.EntryLoader.loaded = false;
	Hatena.Star.EntryLoader.entries = undefined;
	Hatena.Star.SiteConfig = {
		entryNodes: {
			'.hatenastar-entrynode': {
				uri:       '.hatenastar-url',
				title:     '.hatenastar-title',
				container: '.hatenastar-container'
			}
		}
	};
	new Hatena.Star.EntryLoader();
}),12000);

button_onclick01=function(self,hidden){
	if(self.classList.contains(hidden)){
		self.alt='+';
		self.src='/files/common_arr1.png';
		self.classList.remove(hidden);
		self.parentElement.nextElementSibling.style.display='none';
	}else{
		self.alt='-';
		self.src='/files/common_arr0.png';
		self.classList.add(hidden);
		self.parentElement.nextElementSibling.style.display='block';
	}
}
