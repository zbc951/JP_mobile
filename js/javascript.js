//jumpBox
$(function(){
    $('.jumpBox .cancelBtn').click(function(){
        $('.post,.loginWindow,.filter').removeClass('display');
	})
	$('.midBar .character').click(function(){
		$('.jumpBox .loginWindow,.filter').addClass('display');
	})
	$('.loginWindow .loginBtn').click(function(){
		$('.logoutBtn').addClass('display');
		$('.jumpBox .loginWindow,.filter').removeClass('display');
		$('.midBar .character').addClass('turn');
	})
	$('.logoBox .logoutBtn').click(function(){
		$('.midBar .character').removeClass('turn');
		$(this).removeClass('display');
	})
})
//圖片輪播
$(document).on('ready', function () {
	$(".single-item").slick({
		dots: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 3500,
		arrows: false,
	})
})
//遊戲按鈕
$(function(){
	$('.gameBox button').click(function(){
		$(this).addClass('active');
		$(this).siblings().removeClass('active');
		$('.gameBox .outerBox').removeClass('firstActive lastActive');
	})
	$('.gameBox .left button:first-child').click(function(){
		$('.gameBox .outerBox').addClass('firstActive');
	})
	$('.gameBox .left button:last-child').click(function(){
		$('.gameBox .outerBox').addClass('lastActive');
	})
	$('.gameBox .left button').click(function(){
		$('.gameBox .right div').removeClass('display');
	})
	$('.gameBox .slot').click(function(){
		$('.gameBox .slotGame').addClass('display');
	})
	$('.gameBox .fish').click(function(){
		$('.gameBox .fishGame').addClass('display');
	})
	$('.gameBox .live').click(function(){
		$('.gameBox .liveGame').addClass('display');
	})
	$('.gameBox .sport').click(function(){
		$('.gameBox .sportGame').addClass('display');
	})
	$('.gameBox .boat').click(function(){
		$('.gameBox .boatGame').addClass('display');
	})
	$('.gameBox .card').click(function(){
		$('.gameBox .cardGame').addClass('display');
	})
})
//footer按鈕
$(function(){
	$('footer li').click(function(){
		$(this).addClass('active');
		$(this).siblings().removeClass('active');
	})
})