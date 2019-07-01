$(function() {

	$(".toggle-mnu").click(function() {
	  $(this).toggleClass("on");
	 
	  if ($(this).hasClass("footer-toggle-mnu")) {
	  	 $('html, body').animate({scrollTop: $(document).height()},'slow');
	  }
	  $(this).parent().find("nav").slideToggle();
	  return false;
	});

	$(".mouse-icon").click(function() {
		$('html,body').animate({
			scrollTop : $(".advantages").offset().top
		},800)
	})

	var waypoint = new Waypoint({
  element: document.querySelector('.advantages'),
  handler: function() {
    $({blurRadius: 5}).animate({blurRadius: 0}, {
			duration: 1000,
			easing: 'swing',
			step: function() {
				$(".advantage-title__number").css({
					"-webkit-filter": "blur("+this.blurRadius+"px)",
					"filter": "blur("+this.blurRadius+"px)"
				});
			}
		});
		var comma_separator_number_step = $.animateNumber.numberStepFactories.separator(' ');
		$(".advantage-title__number").each(function() {
			var tcount = $(this).data("count");
			$(this).animateNumber({ number: tcount,
				easing: 'easeInQuad',
				"font-size": "1.8125rem",
				numberStep: comma_separator_number_step},
				1000);
		});	
  },
  offset: 350
})
	$('.popup-gallery').each(function(){
		$(this).magnificPopup({
			delegate: 'a',
			mainClass: 'mfp-zoom-in',
			type: 'image',
			tLoading: '',
			gallery:{
				enabled:true,
			},
			removalDelay: 300,
			callbacks: {
				beforeChange: function() {
					this.items[0].src = this.items[0].src + '?=' + Math.random(); 
				},
				open: function() {
					$.magnificPopup.instance.next = function() {
						var self = this;
						self.wrap.removeClass('mfp-image-loaded');
						setTimeout(function() { $.magnificPopup.proto.next.call(self); }, 120);
					}
					$.magnificPopup.instance.prev = function() {
						var self = this;
						self.wrap.removeClass('mfp-image-loaded');
						setTimeout(function() { $.magnificPopup.proto.prev.call(self); }, 120);
					}
				},
				imageLoadComplete: function() { 
					var self = this;
					setTimeout(function() { self.wrap.addClass('mfp-image-loaded'); }, 16);
				}
			}
		});
	});

	!function(a){a.fn.equalHeights=function(){var b=0,c=a(this);return c.each(function(){var c=a(this).innerHeight();c>b&&(b=c)}),c.css("height",b)},a("[data-equal]").each(function(){var b=a(this),c=b.data("equal");b.find(c).equalHeights()})}(jQuery);

	

	function equalHeight(){
		$('.service-descr').height('auto').equalHeights();
		$(".equipment-item__text").height('auto').equalHeights();
		$(".testimonial-header").height('auto').equalHeights();
		$(".testimonial-body").height('auto').equalHeights();
	}

	equalHeight()

	$(window)
		.resize(function(){
		equalHeight()
	})
		.scroll(function() {
			if($(this).scrollTop()>200){
				$(".top-button").addClass("active")
			}else{
				$(".top-button").removeClass("active")
			}
		})

	$('.portfolio-item').each(function(e){
		var th = $(this); 
		th.attr('href', '#portfolio-img-' + e)
		.find('.portfolio-popup').attr('id', 'portfolio-img-' + e);
	});

	$('.portfolio-item').magnificPopup({
		mainClass: 'mfp-zoom-in',
		type: 'inline',
		removalDelay: 300
	});

	$(".euqipment-carousel").owlCarousel({
		items: 4,
		loop: true,
		responsive:{
			0:{
				items:1
			},
			480:{
				items:1
			},
			768:{
				items:2
			},
			992:{
				items:3
			},
			1200:{
				items:4
			}
		}
	});

	$('.partners-carousel').owlCarousel({
		items: 5,
		loop: true,
		nav: true,
		navText: ['<i class="fas fa-chevron-left"></i>','<i class="fas fa-chevron-right"></i>'],
		responsive:{
			0:{
				items:1
			},
			480:{
				items:2
			},
			768:{
				items:3
			},
			992:{
				items:4
			},
			1200:{
				items:5
			}
		}
	});

	$(".contact-form select").selectize();

	$(".top-button").click(function() {
		$("html,body").animate({scrollTop: 0}, "slow")
	})

});
