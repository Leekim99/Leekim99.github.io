$(document).ready(function(){
	//sub2 jquery
	$('.section_left ul li a').click(function(e){
		e.preventDefault();
	})

	$('#searchBtn').click(function(e){
		e.preventDefault();
		if($('#lectureName').val()==''){
			alert('검색어를 입력해주세요')
		}else{
			alert('과정이 존재하지 않습니다.')
		}
		//console.log('신청월 클릭시 달력나오게하기/ 교육기간 월도 /!!!과정명을 입력하지 않으면 alret창 띄우기 과정명을 입력해주세요')
	})
	$('.lectureTable > li > a').click(function(e){
		e.preventDefault();
		var showIdx = $(this).parent('.lectureTotal');
		var liNum=$(this).parent('.lectureTotal').find('table tbody > tr').length;

		if($(showIdx).hasClass('.currentTable')==false){
			$('li.currentTable').removeClass('currentTable');
			$(showIdx).addClass('currentTable');
			$('.liNum').text(liNum)
		}
		$('span.currentTable').removeClass();
		$(this).find('span').addClass('currentTable')

	})
	$('.quickView').click(function(e){
		e.preventDefault();
		alert('모바일에서 확인가능합니다.')
	})

	$('.page a').click(function(e){
		e.preventDefault();
	})

//sub3
	$('.agree').click(function(e){
		e.preventDefault();
		if($('#agree_1').is(':checked')==false || $('#agree_2').is(':checked')==false){
			alert('회원 이용약관과 개인정보 수집 및 이용에 동의하셔야 합니다')
		}else{
			window.location.href='sub4.html'
		}
	})

	$('.disagree').click(function(e){
		e.preventDefault();
		alert('필수항목에 동의하지 않으시면 회원가입이 불가능합니다');
		$(this).css({
			color:'#fff',
			backgroundColor:'#ff0000',
			borderColor:'#ff0000'
		})
		$(this).text('메인페이지로 가기')
	})

	//sub4
	$('.joinBtn a').click(function(e){
		e.preventDefault();
		var username=$('#username').val();
		// var birth=$('#selectBox').find("option[value='" + $('#selectBox').val() + "']").text();
		var birthY=$('.brithyear option').eq(0).is(':selected');
		var birthM=$('.brithmonth option').eq(0).is(':selected');
		var birthD=$('.brithday option').eq(0).is(':selected');

		var userId=$('#userID').val();
		var userPw=$('#userPW').val();
		var userPwRe=$('#userPW_re').val();

		var phoneNum=$('.phoneNumWrap option').eq(0).is(':selected');


		var phoneNum1=$('.phoneNum:eq(0)').val();
		var phoneNum2=$('.phoneNum:eq(1)').val();
		var userType=$('#usertype01').is(':checked');
		var userType2=$('#usertype02').is(':checked');
		var userType3=$('#usertype03').is(':checked');


		if($('#username').val('')){
			$('.joinImpo:eq(0)').css({
				color:'#ff0000'
			})
		}else if($('#userID').val()==''){

		}else{

		}
	})
})






