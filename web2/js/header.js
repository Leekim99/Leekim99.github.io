
$(document).ready(function(){
	$('#gnb > li').on({
		mouseenter:function(){
			$('#container .currentIndex').removeClass('off');

			$(this).addClass('on');
			$(this).find('.gnb2').show();
			$('#container .currentIndex span').fadeOut(100);
			$('#container .currentIndex').css({
				backgroundColor:'#0089d0',
				borderColor:'#0089d0',
				transition:'all 0.4s ease'
			})
			if($('#container .currentIndex').hasClass('off')){
				$('#container .currentIndex span').fadeIn(500)
			}else{
				$('#container .currentIndex span').hide()
			}
		},
		mouseleave:function(){
			$(this).removeClass('on');
			$(this).find('.gnb2').hide();

			$('#container .currentIndex').css({
				backgroundColor:'#fff',
				borderColor:'#333',
				transition:'all 0.4s ease'
			})
			$('#container .currentIndex').addClass('off');
			if($('#container .currentIndex').hasClass('off')){
				$('#container .currentIndex span').fadeIn(500)
			}else{
				$('#container .currentIndex span').hide()
			}
		}
	})
})