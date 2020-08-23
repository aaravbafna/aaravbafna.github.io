function hidePreloader() {
	preloaderDiv.setAttribute("class", "displaynone")
}

function showPreloader() {
	preloaderDiv.setAttribute("class", "")
}

function shiftUpPreloader() {
	turnOffPreloaderDotsAnimation(), $(preloaderDiv).stop().animate({
		bottom: "100%"
	}, 1e3, function () {
		hidePreloader()
	})
}

function turnOffPreloaderDotsAnimation() {
	preloaderDotsDiv.setAttribute("class", "preloader-dots-static")
}
var preloaderDotsDiv = document.getElementById("preloader-dots");
showPreloader();