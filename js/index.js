$(document).ready(function(){
	$('.gnbProfile').click(function(){
		$(this).css('opacity','1');
		$(this).parent().find('a:eq(0)').css('opacity','0.4')
		$('body').append('<div id="dimBG"></div>');
		$('#dimBG').css({
			width:'100%',
			height:'100%',
			position:'fixed',
			left:0,
			top:0,
			backgroundColor:'rgba(0,0,0,0.5)'
		})
		$('html, body').css({
			overflow:'hidden',
			height:'100%'
		})
		$('#profileWrap').on('scroll touchmove mousewheel',function(e){
			e.preventDefault();
			e.stopPropagation();
		})
		$('#profileWrap').css({
			position:'fixed',
			left: '50%',
			top:'100px',
			marginLeft:'-500px',
			zIndex:'999'
		})
		$('#profileWrap').show();
	})

	$('#pfCloseBtn').click(function(){
		$('#profileWrap').hide();
		$('#dimBG').remove();
		$('html, body').css({
			overflow:'auto',
			height:'100%'
		})
		$('#profileWrap').off('scroll touchmove mousewheel',function(e){
			e.preventDefault();
			e.stopPropagation();
		})
		$('.skillwrap').css('display','none')
		$('.profile').css('display','block')
		$('#gnb').find('a:eq(0)').css('opacity','1')
		$('#gnb').find('a:eq(1)').css('opacity','0.4')

	})

	$('.skillBtn').click(function(){
		$('.skillwrap').css('display','block')
		$('.profile').css('display','none')
	})

	$('.profileBtn').click(function(){
		$('.skillwrap').css('display','none')
		$('.profile').css('display','block')
	})

	$('.sidebar').click(function(){
		if($(this).hasClass('on')==false){
			$(this).addClass('on');
			$('.sidebar').css({
				// transform:'rotate(180deg)',
				transition:'all 0.5s ease'
			});
			$('.sidebar').attr('title','이미지형식으로 보기');
			$('.markwrap > div').removeClass('skip');
			$('.markwrap').css({
				width:'865px',
				bottom:'-30px',
				left:'60px'
			});
			$('.mark').css({
				float:'left',
				marginRight:'10px'
			});
			$('.listImg').css('display','none');
			$('.listCon > h3').css({
				textAlign:'left',
				marginTop:'-10px'
			});
			$('.humdredMark').css('float','right');
			$('.humdredMark li').css({
				fontSize:'11px'
			})
		}else if($(this).hasClass('on')){
			$('.sidebar').css({
				// transform:'rotate(360deg)',
				transition:'all 0.5s ease'
			});
			$(this).removeClass('on');
			$('.sidebar').attr('title','목록형식으로 보기');
			$('.markwrap > div').addClass('skip');
			$('.markwrap').css({
				width:'60px',
				bottom:'61px',
				left:'930px'
			});
			$('.listImg').css('display','block');
			$('.listCon > h3').css({
				textAlign:'right',
				marginTop:'0px'
			});
			$('.humdredMark').css('float','left');
			$('.humdredMark li').css({
				fontSize:'14px'
			})
			$('.mark').css({
				float:''
			});
		}
	})
	var AppImg = new Array();
	var ImgWd = new Array();
	AppImg=['images/01_main.png','images/02_main.png','images/03_main.png','images/04_main.png']
	ImgWd=['650px','470px','300px','700px']
	$('.listCon > h3').on({
		mouseenter:function(){
			if($('.sidebar').hasClass('on')){
				$('.mainVisual').append('<span class="preview"><img src='+AppImg[$(this).parents('div').index()]+' width='+ImgWd[$(this).parents('div').index()]+'/></span>');
			}
		},
		mouseleave:function(){
			if($('.sidebar').hasClass('on')){
				$('.mainVisual').find('.preview').remove();
			}
		}
	})

	var MainBg= new Array();
		MainBg[0]=['images/lib_main_wide.jpg','images/lib_sub1.jpg','images/lib_sub2.jpg','images/lib_sub3.jpg','images/lib_sub4.jpg'];
		MainBg[1]=['images/danal_main.jpg','images/danal_sub1.jpg'];
		MainBg[2]=['images/typo_main.jpg','images/typo_gnb.jpg','images/typo_gnb_open.jpg'];
		MainBg[3]=['images/dolce_main.jpg','images/dolce_scroll_01.jpg','images/dolce_scroll_02.jpg','images/dolce_scroll_03.jpg','images/dolce_scroll_04.jpg','images/dolce_scroll_05.jpg','images/dolce_scroll_06.jpg','images/dolce_scroll_07.jpg','images/dolce_scroll_08.jpg','images/dolce_scroll_09.jpg','images/dolce_scroll_10.jpg','images/dolce_scroll_11.jpg'];
	var BgIdx;
	var num=0;
	var St;

	function changeImg(){
		if($('.sidebar > a').hasClass('on')==false){
			num++;
			if(num > MainBg[BgIdx].length -1 ){
				num=0
			}
			$('.listCon').eq(BgIdx).children('.listImg').prop('src', MainBg[BgIdx][num])
		}
	}

	$('.listCon').on({
		mouseenter:function(){
			BgIdx = $(this).parent().index();

			st=setInterval(changeImg,1200)
		},
		mouseleave:function(){
			clearInterval(st);
			num=0;

			setTimeout(function(){
				$('.listCon').eq(BgIdx).children('.listImg').prop('src', MainBg[BgIdx][num])
			},500)
		}
	})
})






