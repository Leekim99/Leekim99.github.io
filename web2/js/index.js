// stock date
function date(){
	var d = new Date();
	var y = d.getFullYear()
	var mm = d.getMonth();
	var n = d.getDate();

	var time = d.getHours();
	var min = d.getMinutes();
	var sec = d.getSeconds();
	document.getElementById('dateY').innerHTML = y+' -';
	document.getElementById('dateM').innerHTML = mm+1;
	document.getElementById('dateD').innerHTML = '- '+n;
	document.getElementById('NowTime').innerHTML = time+' : '+min+' : '+sec;
}



$(document).ready(function(){
	window.onload=date;

	$(window).scroll(function(){
		var wscroll=$(this).scrollTop();
		//console.log(wscroll);//900
		if(wscroll >= 900){
			$('.midBanner span').addClass('show')
		}
	})

	$('#payDateS, #payDateE').click(function(){
		$(this).val('');
		$('#payDateS, #payDateE').datepicker({
			showMonthAfterYear: true ,
			dateFormat: "yy-mm-dd",
			monthNames: [ '1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월' ],
    		dayNamesMin: ['일', '월', '화', '수', '목', '금', '토']
		});
	})
	$('#phoneNumber').click(function(){
		$(this).val('')
	})
	$('.paymentBtn').click(function(e){
		e.preventDefault();
		if($('.payType').find('input[type=radio]').is(":checked")==false){
			alert('결제 종류를 입력해주세요')
		} else if($('#phoneNumber').val()==''||$('#phoneNumber').val()=='010-0000-0000'){
			alert('휴대폰 번호를 확인해주세요')
		} else if($('.payDate').find('input[type=radio]').is(":checked")==false || $('.payDate').find('input[type=text]').val()=='' || $('.payDate').find('input[type=text]').val()=="검색시작월"){
			alert('거래기간 범위를 입력해주세요')
		}else{
			alert('본인인증 페이지로 넘어갑니다')
		}

	})

//gnb
	$('.newsWrap ul li a h3.title').click(function(e){
		e.preventDefault();
		if($(this).next().hasClass('on')==true){
			$(this).next().removeClass().addClass('on');
		}else{//on X
			$('.newsWrap ul li a h3.title').next().removeClass('on');
			$(this).next().addClass('on');

		}
	})
//mainvisual slide
	$('.mainVisual').bxSlider({
		mode: 'fade',
		speed:600,
		pagerCustom: '.imgIndex',
		auto:true,
		controls:false
		});
	$('.familySiteList a').click(function(e){
		e.preventDefault();
	})
	$('.footerList a').click(function(e){
		e.preventDefault();
	})
})

