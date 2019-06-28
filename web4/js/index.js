$(document).ready(function (){
	$('.closeBtn').click(function(){
		$('.topWrapper').slideUp()
		$('#container').css({
			paddingTop:'100px',
			transition:'all .6s ease'
		})
	})
	// GNB
	$('.gnb2Wrap').on({
		mouseenter:function(){
			$(this).stop().slideDown(600);
		},
		mouseleave:function(){
			$(this).stop().slideUp(600);
		}
	})
	$('.gnb1Dep > li:not(:eq(5))').on({
		mouseenter:function(){
			$('.gnb2Dep > li').removeClass('on');
			$('.gnb2Dep > li').eq($(this).index()).addClass('on');
			$('.gnb2Wrap').stop().slideDown(500);
		},
		mouseleave:function(){
			$('.gnb2Wrap').stop().slideUp(600);
		}
	})
	$('.menuBtn, .menuClose').click(function(){
		if($('#wrapper').hasClass('moved')){
			$('#wrapper').animate({left:'0px'},500,function(){
				$('#wrapper').removeClass('moved')
				$('.menuBtn').show();
				$('.menuClose').hide()
			})
		}else{
			$('#wrapper').animate({left:'-200px'},500,function(){
				$('#wrapper').addClass('moved')
				$('.menuBtn').hide();
				$('.menuClose').show()
			})
		}
	})
	// $('.swapGnb > li').on({
	// 	mouseenter:function(){
	// 		$(this).stop().slideDown(600);
	// 	},
	// 	mouseleave:function(){
	// 		$(this).stop().slideUp(600);
	// 	}
	// })
	//swapGnb
	$('.swapGnb > li').click(function(e){
		e.preventDefault();
		$('.swapGnb > li > ul').slideUp()
		$(this).find('ul').stop().slideDown(600).addClass('show');
	})
	//machine
	$('.prevBtn').click(function(e){
		e.preventDefault();
		$('.machineList').prepend($('.machineList > li:last'));
	})
	$('.nextBtn').click(function(e){
		e.preventDefault();
		$('.machineList').append($('.machineList > li:first'));
	})
	//prevenDefault
	$('.userWrap a, .gnb1Dep a, .gnb2Dep a, .conBtnWrap, .con a, .addList a, .shoppingBtn a, .footerLink a, .newsletterWrap a').click(function(e){
		e.preventDefault()
	})
})