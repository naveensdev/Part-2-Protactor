describe ("test for Search Filed ", function(){
	it ("to test input field ", function(){
		browser.ignoreSynchronization = true;
		browser.get("http://support.krossover.com/");
		element(by.name("q")).sendKeys("basketball");
		element(by.id("support-search-submit")).click();
		} 	);
});