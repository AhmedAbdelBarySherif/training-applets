
$(".mycourses-gray-header").on('click' ,function(){
  $(this).toggleClass("mycourses-header-active")
});

$(".mycourses_gray_header").on('click' ,function(){
  $(this).toggleClass("mycourses_header-active")
 });
 //mycourses-cart-details
 $(".progress-courses-item .mycourses-cart-details ").on("click",function(){
  $(this).parents(".tab-content").find(".hidden").fadeOut();
  $(this).parents(".tab-content").find(".mycourses__details").fadeIn();
 });
 $(".hidden .go_training_page").on("click",function(){
  $(this).parents(".tab-content").find(".hidden").fadeOut();
  $(this).parents(".tab-content").find(".mycourses_training_page").fadeIn();
 });
 $(".mycourses_details_page .back ").on("click",function(){
  $(this).parents(".mycourses_details_page").fadeOut();
  $(this).parents(".tab-content").find(".hidden").fadeIn();
 });
 $( document ).ready(function() {
  $('.course-info').click(function () {
    $(this).parents('.tab-content').find('.show-part').hide(
            500);
    $(this).parents('.tab-content').find('.hide-part').show(
            500);
});
$('#back-courses').click(function () {
  $(this).parents('.tab-content').find('.hide-part').hide(
          500);
  $(this).parents('.tab-content').find('.show-part').show(
          500);
});
});

 $(document).ready(function() {
	/* change icon svg background */
	$(".heart-img").click(function() {
		$(this).toggleClass("heart-icon");
	});
	$(".calender-img").click(function() {
		$(this).toggleClass("calenderhover");
	})
	/* datapickr calender */
	$(function() {
		$('.datepicker-me-class').datepicker({
			language: 'es',
			weekStart: 1,
			todayBtn: true,
			autoclose: true,
			todayHighlight: true,
			startView: 2,
			minViewMode: 2,
			forceParse: false
		});
		$('.to_icon').on('click', function() {
			$('#date2').datepicker('show');
    });
    $('.to_icon2').on('click', function() {
			$('#date111').datepicker('show');
	});
	
	$('.datepicker-me-class').on('changeDate', function() {
		let valdate = $('#date2 .in').val();
		 let scliceByDat = valdate.slice(3,5)
		console.log( scliceByDat );
		
		});

	});
	/* horizontal scroll for carts by owl carousel.js */
	$('.owl-carousel.owl-drag .owl-item').removeClass("owl-item").addClass("owel-item--custom");
	$('.owl-carousel').owlCarousel({
		loop: false,
		rtl: true,
		margin: 10,
		autoplayHoverPause: true,
		center: true,
  });
  $('.owl-stage .owl-item').removeClass("owl-item").addClass("owel-item--custom");
  
  //Start eslam desha
	$('.start-now-calender').click(function () {
		$(this).parents('.tab-content').find('.show-part-calender').fadeOut(
				200);
		$(this).parents('.tab-content').find('.hide-part-calender').fadeIn();
	});
	$('#back-calender').click(function () {
	$(this).parents('.tab-content').find('.hide-part-calender').fadeOut(
			200);
	$(this).parents('.tab-content').find('.show-part-calender').fadeIn();
	});
	});


	/* اشعار  خارجى */

	$( document ).ready(function() {
	$('.start-now-calender').click(function () {
		$(this).parents('.tab-content').find('.show-part-calender').fadeOut(
				200);
		$(this).parents('.tab-content').find('.hide-part-calender-outside').fadeIn();
	});
	$('#back-calender').click(function () {
	$(this).parents('.tab-content').find('.hide-part-calender-outside').fadeOut(
			200);
	$(this).parents('.tab-content').find('.show-part-calender').fadeIn();
	});
  //End eslam desha

  //Strat sondos

	$(".mycourses-gray-header").on('click' ,function(){
		$(this).toggleClass("mycourses-header_active")
	});
	//mycourses-cart-details
	$(".mycourses-out-item .progress-card-vertical").on("click",function(){
		$(this).parents(".tab-content").find(".hidden").fadeOut();
		$(this).parents(".tab-content").find(".mycourses-complete-page").fadeIn();
	});
	$(".hidden .go-out-details-page").on("click",function(){
		$(this).parents(".tab-content").find(".hidden").fadeOut();
		$(this).parents(".tab-content").find(".mycourses-out-details-page").fadeIn();
	});
	$(".mycourses-details-page .back ").on("click",function(){
		$(this).parents(".mycourses-details-page").fadeOut();
		$(this).parents(".tab-content").find(".hidden").fadeIn();
	});
		// JavaScript for disabling form submissions if there are invalid fields
		(function() {
		'use strict';
		window.addEventListener('load', function() {
			// Fetch all the forms we want to apply custom Bootstrap validation styles to
			var forms = document.getElementsByClassName('needs-validation');
			// Loop over them and prevent submission
			var validation = Array.prototype.filter.call(forms, function(form) {
				form.addEventListener('submit', function(event) {
					if (form.checkValidity() === false) {
						event.preventDefault();
						event.stopPropagation();
					}
					form.classList.add('was-validated');
				}, false);
			});
		}, false);
	})();
  //End sondos
});

// function related to live course page---
function liveCourse() {
	$('.showing').click(function() {
		if( $(this).hasClass('collapsed') ) {
			$('.btn-link i').css('transform', 'rotate(0deg)');
			$(this).children('span').html('اخفاء');
		} else {
			$('.btn-link i').css('transform', 'rotate(180deg)');
			$(this).children('span').html('ظهور');
		}
	});
} liveCourse();

$(document).ready(function() {
	//working on action of attendace button
	$('.course-content-live_attend').click(function() {
		$(this).html('تم الحضور');
		$(this).attr('disabled', 'disabled');
		if($(this).attr('disabled')) {
			$(this).addClass('disabled');
			$('.course-content-live_leave').css({'background-color': 'red'});
		}
	});

	//events to handle colors on btn in agenda tap
	$('.course-content-live_leave').click(function() {
		$(this).addClass('hide_btn').removeClass('show_btn');
		$(this).siblings('button').addClass('hide_btn').removeClass('show_btn');
		$('.content_course_live .btns .noticing_form').addClass('show_btn').removeClass('hide_btn');
	});
	
	$('.accordion-live-course-card .content .live-course .content_course_live .btns form .live-course_action').click(function() {
		$('.content_course_live .btns .noticing_form').addClass('hide_btn').removeClass('show_btn');
		$('.course-content-live_leave').addClass('show_btn').removeClass('hide_btn').html('تم الانصراف').css({width: '105px', 'background-color': '#929292'}).attr('disabled', 'disabled');
		$('.course-content-live_leave').siblings('button').addClass('show_btn').removeClass('hide_btn');
	})
});

$('.carousel').carousel({
	interval: 0
});

(function(){
      
	$('.carousel-item:not(:last-of-type)').append('<button id="next" class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">التالى</button>');
	
	$('.carousel-item:not(:first-of-type)').append('<button id="prev" class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">السابق</button>');
	
	$('.carousel-item:last-of-type').append('<button type="submit" id="next" class="carousel-control-next" data-slide="next">النتيجه</button>');

	$('.carousel').carousel({
	  interval: 0
	})

	$('.start_now').click(function() {
		$('.test_work').slideUp();
		$('.form-wizard').slideDown();
	});
  }());