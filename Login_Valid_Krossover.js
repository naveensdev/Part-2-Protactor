describe ("test login field for krossover pgae With the Valid credential ", function(){
	it ("to test input field ", function(){
		browser.ignoreSynchronization = true;
		browser.get("https://v2-pre-prod-app.krossover.com/intelligence/login");
		element(by.name("email")).sendKeys("adityakumar643@gmail.com");// Value is hardcorded , Please create a maually first
		element(by.name("password")).sendKeys("Welcome@12");  // Value is hardcorded , Please create a maually first
		element(by.id("sign-in-cta")).click();
		} 	);
});