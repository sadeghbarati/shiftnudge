// @codekit-prepend 'vendor/jquery.js'
// @codekit-prepend 'vendor/jquery.countdown.min.js'



// jquery stuff
$(document).ready(function() {

	console.log("Thanks for popping open the inspector.\nI hand-coded everything myself so if \nyou see something wrong, let me know!\n\nA DM or public reply is perfectly acceptable. 👍\n\n—MDS\nhttp://twitter.com/mds\n\n");

	// show / hide header bg on scroll
  var h = $(".sn-header");
  var pos = h.position();
  $(window).scroll(function() {
    var windowpos = $(window).scrollTop();
    if (windowpos >= pos.top & windowpos >=180) {
      h.addClass("sn-header-scrolled");
    } else {
      h.removeClass("sn-header-scrolled");
    }
  });

	// countdown
	$('.sn-countdown').countdown('2020/09/08', function(event) {
		$(this).html(event.strftime('Closes in <span>%Dd %Hh %Mm %Ss</span>'));
	});

	// make sure things are loaded
	window.addEventListener("load", () => {
		document.querySelector("body").classList.add("loaded"); 
	 });

	// show hide full lesson list
	$('.sn-module').on( "click", function(event) {
		$('.sn-module').toggleClass( "sn-lessons--showing" );
	});




	// emojis on hover for quotes
	var emojis = [
		"url('../_assets/img/emoji/clap.png'), auto",
		"url('../_assets/img/emoji/heart.png'), auto",
		"url('../_assets/img/emoji/raise.png'), auto",
		"url('../_assets/img/emoji/rock.png'), auto",
		"url('../_assets/img/emoji/smile.png'), auto",
		"url('../_assets/img/emoji/thumbs.png'), auto",
		"url('../_assets/img/emoji/strong.png'), auto",
		"url('../_assets/img/emoji/peace.png'), auto",
		"url('../_assets/img/emoji/fire.png'), auto",
		"url('../_assets/img/emoji/pray.png'), auto",
		"url('../_assets/img/emoji/boom.png'), auto",
		"url('../_assets/img/emoji/pop.png'), auto",
		"url('../_assets/img/emoji/key.png'), auto",
		"url('../_assets/img/emoji/celebrate.png'), auto",
		"url('../_assets/img/emoji/smile-soft.png'), auto",
		"url('../_assets/img/emoji/heart-eyes.png'), auto",
		"url('../_assets/img/emoji/tongue.png'), auto"
	];

	$('.sn-student-quote').mouseenter(function() {
	    var randomEmoji = emojis[Math.floor(Math.random() * emojis.length)];
	    $(this).css('cursor', randomEmoji);
	});

	$('.sn-student-quote').mouseleave(function() {
	    $(this).css('cursor', '');
	});


	// $(".formkit-field input").on('focus blur', function(){
	// 	$(this).parent().parent().toggleClass('is_focused');
	// })

	// grid for review page
	// function resizeGridItem(item){
	// 	grid = document.getElementsByClassName("grid")[0];
	// 	rowHeight = parseInt(window.getComputedStyle(grid).getPropertyValue('grid-auto-rows'));
	// 	rowGap = parseInt(window.getComputedStyle(grid).getPropertyValue('grid-row-gap'));
	// 	rowSpan = Math.ceil((item.querySelector('.content').getBoundingClientRect().height+rowGap)/(rowHeight+rowGap));
	// 	item.style.gridRowEnd = "span "+rowSpan;
	// }

	// function resizeAllGridItems(){
	// 	allItems = document.getElementsByClassName("item");
	// 	for(x=0;x<allItems.length;x++){
	// 	  resizeGridItem(allItems[x]);
	// 	}
	// }

	// window.onload = resizeAllGridItems();

	// window.addEventListener("resize", resizeAllGridItems);

	// allItems = document.getElementsByClassName("item");
	// 	for(x=0;x<allItems.length;x++){
	// 	imagesLoaded( allItems[x], resizeInstance);
	// }

	// function resizeInstance(instance){
	// 	item = instance.elements[0];
	// 	resizeGridItem(item);
	// }

	// dynamic year in footer
	var now = new Date();
	var year = now.getFullYear();
	$('.copyright').html('©'+year);

	// randomize order of testimonials
	var cards = $(".sn-review-page .sn-student-quote");
	for(var i = 0; i < cards.length; i++){
	    var target = Math.floor(Math.random() * cards.length -1) + 1;
	    var target2 = Math.floor(Math.random() * cards.length -1) +1;
	    cards.eq(target).before(cards.eq(target2));
	}

	// toggle payment options
	$('.payment-option').on( "click", function(event) {

		$('.payment-option-monthly').toggleClass( "is-selected" );
		$('.payment-option-one-time').toggleClass( "is-selected" );

		if ($( ".payment-option-monthly" ).hasClass( "is-selected" )) {
			$(".sn-core .sn-cta").attr("href", "https://transactions.sendowl.com/subscriptions/15428/AB8F3CAF/purchase")
			$(".sn-pro .sn-cta").attr("href", "https://transactions.sendowl.com/subscriptions/15427/526D9F28/purchase")
		} else {
			$(".sn-core .sn-cta").attr("href", "https://transactions.sendowl.com/products/78343146/21A4DE94/purchase")
			$(".sn-pro .sn-cta").attr("href", "https://transactions.sendowl.com/products/78343087/E3E6D25A/purchase")
		}
		
	});


});


