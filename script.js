window.addEventListener('scroll', function(e) {
	let scrollPos = window.scrollY;
	if (scrollPos > 50) {
		document.getElementById("header-wrapper").classList.add("header-border");
	} else {
		document.getElementById("header-wrapper").classList.remove("header-border");
	}
});