$(document).ready(function(){
	$('.visualList > li').click(function(e){
		e.preventDefault()

		$('.visualList li').removeClass('on');
		$(this).addClass('on');

		$('.visual li img').hide();
		$('.visual li:eq('+$(this).index()+')').find('img').css('display','block');
		if($(this).hasClass('originPage')==true){
			$('.originUrl').show()
		}else{$('.originUrl').hide();}
	})
	$('.linkBtn li').click(function(e){
		e.preventDefault();
		var linkAdd=$(this).find('a').attr('href');
		window.open(linkAdd, '_blank');

	})
})