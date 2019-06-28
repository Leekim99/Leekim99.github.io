$(document).ready(function(){
	//section3_noticeList
	$('.notice > li').each(function(){
		$(this).click(function(){
			$('.notice > li > div').removeClass('on');
			$(this).children('div').toggleClass('on');
			if($(this).children('div').is('.on')){
				$('.notice > li > span').css('color','#fff');
				$(this).children('span:first').css('color','#eb3665');

			}
		})
	})
	//gnb
	$('#gnb1 > li').each(function(){
		$(this).mouseenter(function(){
			$(this).children('a').css('color','#004bb2');
			$('ul.gnb2').css('display','block');
		})
		$(this).mouseleave(function(){
			$(this).children('a').css('color','#222');
			$('ul.gnb2').css('display','none');
		})
	})



	$('#id').click(function(){
		if($('#pw').val()==''){
			$('#pw').css({background:'url(images/pwBg.gif) no-repeat #fff'});
			$(this).css('background','#fff');
		}else{
			$(this).css('background','#fff');
		}
	})
	$('#pw').click(function(){
		if($('#id').val()==''){
			$('#id').css({background:'url(images/idBg.gif) no-repeat #fff'});
			$(this).css('background','#fff');
		}else{
			$(this).css('background','#fff');

		}
	})

	$('#loginBtn').click(function(){
		if($(this).parent().find('#id','#pw').val()==''){
			alert('아이디, 비밀번호를 입력해주세요');
			$('#id').focus();
			$('#id').css('background','#fff');
			$('#pw').css({background:'url(images/pwBg.gif) no-repeat #fff'});
		}else if($(this).parent().find('#id').val()==''){
			alert('아이디를 입력해주세요.');
			$('#id').focus();
			$('#id').css('background','#fff');
		}else if($(this).parent().find('#pw').val()==''){
			alert('비밀번호를 입력해주세요.');
			$('#pw').focus();
			$('#pw').css('background','#fff');
		}else{
			alert('회원정보가 없습니다. 회원가입창으로 넘어갑니다.')
			window.open('sub3.html','_parent')
		}
		return false;
	})

	$('.monthLIst li').click(function(e){
		e.preventDefault();
	})


	$('.curiList li').click(function(e){
		e.preventDefault();
	})

	$('.noticeList li').click(function(e){
		e.preventDefault();
	})

	$('.notice_btn a').click(function(e){
		e.preventDefault();
	})

	$('.bannerList li').click(function(e){
		e.preventDefault();
	})

	$('.aviList li a').click(function(e){
		e.preventDefault();
	})

	$('.quick li a').click(function(e){
		e.preventDefault();
	})

	$('.footerList li a').click(function(e){
		e.preventDefault();
	})

	var num=1;
	var st;

	$('.bannerList li:gt(0)').hide()



	function bannerIndex(dis){
		if(dis=='next'){
			var listRange=$('.bannerList li.on').index()+1;
			if(listRange > $('.bannerList li').length-1){
				listRange=0;
			}

			$('.currentNum').text(listRange+1);
			bannerRolling(listRange);
		}else if(dis=='prev'){
			var listRange=$('.bannerList li.on').index()-1;//0+1=1
			if(0 > listRange){
				listRange=3;
			}
			$('.currentNum').text(listRange+1);
			bannerVersRolling(listRange);
		}
	}

	$('.banner_next').click(function(e){
		e.preventDefault();
		bannerIndex('next');
	})//next클릭시 움직이지만 4장을 넘어가면 흰 화면이 나오므로 범위를 지정해줄 필요가 있다

	$('.banner_prev').click(function(e){
		e.preventDefault();
		bannerIndex('prev');
	})

	$('.banner_stop').click(function(e){
		if($(this).hasClass('banner_stop')){
			e.preventDefault();
			clearInterval(st);
			$(this).text('자동넘김 멈춤')
			$(this).removeClass().addClass('banner_play');
		}else if($(this).hasClass('banner_play')){
			e.preventDefault();
			$('.banner_play').removeClass().addClass('banner_stop');
			$(this).text('자동넘김 시작');
			st = setInterval(autoBanner,3000)
		}
	})

	function bannerRolling(idx){
		if($('.bannerList li.on').is('animated')==false){
			$('.bannerList li:eq('+idx+')').css({
				left:'300px',
				display:'block'
			})
			$('.bannerList li.on').animate({
				left:'-300px'
			},500,function(){
				$(this).removeClass('on');
				$(this).hide();
			})
			$('.bannerList li:eq('+idx+')').animate({
				left:'0px'
			},500,function(){
				$(this).addClass('on')
			})
		}
	}

	function bannerVersRolling(idx){
		if($('.bannerList li.on').is('animated')==false){
			$('.bannerList li:eq('+idx+')').css({
				left:'-300px',
				display:'block'
			})
			$('.bannerList li.on').animate({
				left:'300px'
			},500,function(){
				$(this).removeClass('on');
				$(this).hide();
			})
			$('.bannerList li:eq('+idx+')').animate({
				left:'0px'
			},500,function(){
				$(this).addClass('on')
			})
		}
	}

	function autoBanner(){
		$('.banner_next').trigger('click')
	}

	st = setInterval(autoBanner,3000)
})