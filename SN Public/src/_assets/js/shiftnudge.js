// @codekit-prepend 'vendor/imagesloaded.min.js'
// @codekit-prepend 'vendor/jquery.js'
// @codekit-prepend 'vendor/jquery.countdown.min.js'


// grid for review page
function resizeGridItem(item){
	grid = document.getElementsByClassName("grid")[0];
	rowHeight = parseInt(window.getComputedStyle(grid).getPropertyValue('grid-auto-rows'));
	rowGap = parseInt(window.getComputedStyle(grid).getPropertyValue('grid-row-gap'));
	rowSpan = Math.ceil((item.querySelector('.content').getBoundingClientRect().height+rowGap)/(rowHeight+rowGap));
	item.style.gridRowEnd = "span "+rowSpan;
}

function resizeAllGridItems(){
	allItems = document.getElementsByClassName("item");
	for(x=0;x<allItems.length;x++){
	  resizeGridItem(allItems[x]);
	}
}

window.onload = resizeAllGridItems();

window.addEventListener("resize", resizeAllGridItems);

allItems = document.getElementsByClassName("item");
	for(x=0;x<allItems.length;x++){
	imagesLoaded( allItems[x], resizeInstance);
}

function resizeInstance(instance){
	item = instance.elements[0];
	resizeGridItem(item);
}


// jquery stuff
$(document).ready(function() {

	console.log("Thanks for popping open the inspector.\nI hand-coded everything myself so if \nyou see something wrong, let me know!\n\nA DM or public reply is perfectly acceptable. 👍\n\n—MDS\nhttp://twitter.com/mds\n\n");

	// countdown
	$('.sn-countdown').countdown('2020/04/9', function(event) {
		$(this).html(event.strftime('%Dd %Hh %Mm %Ss'));
	});

	// make sure things are loaded
	window.addEventListener("load", () => {
		document.querySelector("body").classList.add("loaded"); 
	 });

	// show hide full lesson list
	$('.sn-module').on( "click", function(event) {
		$('.sn-lessons').toggleClass( "sn-lessons--showing" );
	});

	$(".formkit-field input").on('focus blur', function(){
		$(this).parent().parent().toggleClass('is_focused');
	})

	// dynamic year in footer
	var now = new Date();
	var year = now.getFullYear();
	$('.copyright').html('©'+year);

	// randomize order of testimonials
	var cards = $(".sn-student-quote");
	for(var i = 0; i < cards.length; i++){
	    var target = Math.floor(Math.random() * cards.length -1) + 1;
	    var target2 = Math.floor(Math.random() * cards.length -1) +1;
	    cards.eq(target).before(cards.eq(target2));
	}


});