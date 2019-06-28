$(document).ready(function(){
	var winH = $(window).height();
	var headerH = $('#header').height()/2;
	var searchBar = '<div class="searchWrap">'
		searchBar += '<span><input type="text" id="searchBar" class="searchBar" title="검색어를 입력하세요" value="검색어를 입력하세요"/></span>'
		searchBar += '<a href="#" class="searchBtn">검색</a>'
		searchBar += '</div>'

	var gnbMenu = '<ul class="clearfix">';
		gnbMenu += '<li><a href="#">강의</a></li>';
		gnbMenu += '<li><a href="#">수강신청</a></li>'
		gnbMenu += '<li><a href="#">학교소개</a></li>'
		gnbMenu += '<li><a href="#">사진보기</a></li>'
		gnbMenu += '</ul>'

	var lectConArr = new Array();
		lectConArr[0] = ['lect01_1.jpg','lect01_2.jpg','lect01_3.jpg','lect01_4.jpg']
		lectConArr[1] = ['lect02_1.jpg','lect02_2.jpg','lect02_3.jpg']

	var contit = new Array();
		contit[0] = ['글자 그리고<br/>표현(월요일)','라틴타입<br/>디자인 1','라틴타입<br/>디자인2','알파벳 쓰고<br/>그리기']
		contit[1] = ['글자와<br/>공간 다루기','책으로<br/>엮기 1','책으로<br/>엮기 2']

	var contxt = new Array();
		contxt[0] = [
		'<p>4 / 15 - 5 / 20</p><p>월요일 19 : 00 - 22 : 00</p>','<p>6 / 01 - 6 / 22</p><p>토요일 10 : 00 - 13 : 00</p>',
		'<p>6 / 22 - 7 / 14</p><p>수요일 15 : 00 - 17 : 00</p>','<p>6 / 22 - 7 / 14</p><p>수요일 17 : 00 - 19 : 00</p>'
		]
		contxt[1] = [
		'<p>5 / 19 - 7 / 21</p><p>일요일 10 : 00 - 13 : 00</p>','<p>5 / 19 - 7 / 21</p><p>토요일 14 : 00 - 16 : 00</p>',
		'<p>5 / 19 - 7 / 21</p><p>토요일 16 : 00 - 18 : 00</p>'
		]

	var conIdx;
	var listNum = 0;
	var nowWidth=[];

	$('.lectselectBox').click(function(){
		conIdx = $(this).parents('.lectCon').index();
		nowWidth =['25','33.3333']
		if($('.proBar',this).length > 0){
			listNum++;
			if(listNum > lectConArr[conIdx].length-1){listNum=0;}

			$(this).css({
				'background':'linear-gradient(to right, rgba(255,255,255,0) 36%, rgba(0,0,0,1) 100%), url(images/'+lectConArr[conIdx][listNum]+') no-repeat center / 277px 110px',
				'background-size':'cover'
			})

			$(this).find('.numCon > .nowNum').text(listNum+1);
			$(this).find('.proBar > .nowBar').css({
				'width':nowWidth[conIdx]*(listNum+1)+'%',
				'transition':'width 0.4s ease'
			})
			$(this).parent().find('h3').html(contit[conIdx][listNum]);
			$(this).find('.lect_info').html(contxt[conIdx][listNum])
		}
		$('.lectCon').find('.nowClass').removeClass('nowClass');
		$(this).parent().find('.classType').addClass('nowClass');
	})

	$('.gnb > ul > li').click(function(e){
		e.preventDefault();
	})

	$('.menuBtn').click(function(){
		$('.open h3').removeClass().addClass('hasDep')

		if($(this).hasClass('menuBtn')){
			$(this).children('div').addClass('close');
			$('body').css({
				'overflow':'hidden'
			});
			$('.menuWrap').css({
				'display':'block',
				'top':headerH+'px'
			})
			$('.menuWrap').height(winH);
			$('#header').css('background-color','#0d0d0d');
			$('#header h1 a').css('color','#fff');
			$('.gnb').css({'border-bottom':'1px solid #fff'});
			$('.gnb').find('ul').remove();
			$('.gnb').html(searchBar)
			$(this).removeClass().addClass('whBtn');

			$('.searchBtn').click(function(){
				var orival = '검색어를 입력하세요';
				var searchTxt = new Object();

				if($('#searchBar').val()==orival || $('#searchBar').val()==''){
					$('#searchBar').focus();
					$('#searchBar').val('');
				}else{
					$('#searchBar').val('관련된 검색결과가 없습니다');
				}
			})

			$('#searchBar').click(function(){
				$(this).val('');
			})
		}else{
			$(this).children('div').removeClass('close');
			$('.menu2dep').hide();
			$('body').css({
				'overflow':'auto'
			});
			$('.menuWrap').css({
				'display':'none'
			})
			$('#header').css('background-color','#fff');
			$('#header h1 a').css('color','#333');
			$('.gnb').find('div.searchWrap').remove();
			$('.gnb').html(gnbMenu)
			$('.gnb').css({'border-bottom':'1px solid #333'});
			$(this).removeClass().addClass('menuBtn');
		}
	})

	$('.menu1dep > li').click(function(){
		if($(this).find('h3').hasClass('hasDep')==true){
			$('.open > h3').removeClass().addClass('hasDep')
			$(this).addClass('open');
			$('.menu2dep').slideUp();
			$(this).children('.menu2dep').slideDown();
			$(this).children('h3').removeClass().addClass('closeDep')
		}else if($(this).find('h3').hasClass('closeDep')==true){
			$('.open > h3').removeClass().addClass('hasDep')
			$(this).removeClass('open');
			$('.menu2dep').slideUp();
			$(this).children('h3').removeClass().addClass('hasDep')
		}else{
			$('.open > h3').removeClass().addClass('hasDep')
			$('.open').removeClass()
			$('.menu2dep').slideUp();
		}
	})

	$('.conBase').click(function(e){
		e.preventDefault();
	})
	$('.linkSite ul li').click(function(e){
		e.preventDefault();
	})
})