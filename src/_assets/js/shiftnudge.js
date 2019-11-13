// @codekit-prepend 'vendor/jquery.js'
// @codekit-prepend 'vendor/jquery.countdown.min.js'

$(document).ready(function() {

	console.log("Thanks for popping open the inspector.\nIf you see something wrong, please let me know!\nA DM or public reply is perfectly acceptable.\n\n—MDS\nhttp://twitter.com/mds\n\n");

	// countdown
	$('.sn-countdown').countdown('2019/12/13', function(event) {
		$(this).html(event.strftime('%Dd %Hh %Mm %Ss'));
	});

	// make sure things are loaded
	window.addEventListener("load", () => {
		document.querySelector("body").classList.add("loaded"); 
	 });

	// show hide full lesson list
	$('.sn-lessons').on( "click", function(event) {
		$('.sn-lessons').toggleClass( "sn-lessons--showing" );
	});

	// dynamic year in footer
	var now = new Date();
	var year = now.getFullYear();
	$('.copyright').html('©'+year);

});

