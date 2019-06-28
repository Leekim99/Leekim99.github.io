$(document).ready(function(){
    var m = new Number;
    var count = 0;

     window.onload=function(){
        setTimeout(function(){
            scrollTo(0,0);
        },50)
    }
    function heightSetting(){
        var innerH=$(window).innerHeight();
	    $('.section1').height(innerH*1+'px')
        $('.num1').height(innerH+700+'px');
        $('.section2').height(innerH+'px');
        $('.newCon').height(innerH+'px');
        $('.num5').height(innerH+'px');
    }
    $(function(){
        $('html, body').on('mousewheel', function(e){
            document.addEventListener('mousewheel', {passive: false});
            m = e.originalEvent.wheelDelta;
        })
        $('#link1').click(function(){
            count=7
        })
        $('#link2').click(function(){
            count=8
        })
        $('#link3').click(function(){
            count=9
        })
        heightSetting()
    })
    $(window).scroll(function(){
    	var scrollEvent = false;
        var variDri = new Array;
            variDri = [
                'images/americano-intenso.jpg','images/latte_macchiatovanila.jpg',
                'images/greentealatte.jpg','images/tealatte.jpg'
                ]
        var NScroll=$(this).scrollTop();

        heightSetting()

        if(m < 0 && scrollEvent==false){
            if(NScroll > 0 && count==0){
            	scrollEvent = true;
                count=1;
                $('.num1 > .tit').css({
                    opacity:'0',
                    transition:'opacity .3s ease'
                })
                $('.num1 > a').hide()
                $('.num1 > .txt1').css({
                    opacity:'1',
                    position:'fixed',
                    transition:'opacity .5s ease'
                })
                $('.num1 > .txt2').css({
                    opacity:'1',
                    transition:'opacity .7s ease-in',
                    position:'fixed',
                    color:'#fff'
                })
                $('html, body').stop().animate(
                    {scrollTop : 80},
                    {duration : 500, complete : function(){
                        scrollEvent=false
                    }
                })
            }else if(NScroll > 100 && count==1){
            	scrollEvent = true;
                count=2;
                $('.fixedImg').addClass('move')
                $('.bgCon').addClass('onMove')
                $('.changeImg').css({
                    opacity:'1',
                    transition:'opacity 0.5s ease-in-out'
                })
                $('.num1 > .txt2').css({
                    color:'#333'
                })
                $('.num1 > .txt1').css({
                    opacity:'0'
                })
                $('html, body').stop().animate(
                    {scrollTop : 200},
                    {duration : 500, complete : function(){
                        scrollEvent=false
                    }
                })
            }else if(NScroll > 200 && count==2){
            	scrollEvent = true;
                count=3;
                $('.changeImg > img').attr('src',variDri[1])
                $('html, body').stop().animate(
                    {scrollTop : 280},
                    {duration : 600, complete : function(){
                        scrollEvent=false
                    }
                })
            }else if(NScroll > 300 && count==3){
                scrollEvent = true;
                count=4;
                $('.changeImg > img').attr('src',variDri[2])
                $('html, body').stop().animate(
                    {scrollTop : 380},
                    {duration : 600, complete : function(){
                        scrollEvent=false
                    }
                })
            }else if(NScroll > 400 && count==4){
                count=5;
                scrollEvent = true;
                $('.changeImg > img').attr('src',variDri[3])

                $('html, body').animate(
                    {scrollTop : 480},
                    {duration :600, complete : function(){
                        scrollEvent=false;
                    }
                })
            }else if(NScroll > 500 && count==5){
            	count=6;
                scrollEvent = true;
                $('.num1 > .txt2').css({
                    opacity:'0',
                    transition:'opacity 0.5s ease-in-out'
                })
                $('.changeImg').css({
                    opacity:'0',
                    transition:'opacity 0.5s ease-in-out'
                })
                $('.num1 > .fixedImg').css({
                    opacity:'0',
                    transition:'opacity 0.5s ease-in-out'
                })
                $('html, body').animate(
	                {scrollTop : $('.num2').offset().top},
	                {duration : 400, complete : function(){
	                    $('.section1 > .txt1').css({
	                        transition:'all 0.8s ease'
	                    });
	                    $('.section1 > .txt2').css({
	                        opacity:'1',
	                        transition:'all 1s ease'
	                    })
	                    $('.section1 > .txt2').css({lineHeight:'1.5'})

	                    scrollEvent=false
	                }
	            })
            }else if(NScroll > $('.num2').offset().top+80 && count==6){
            	count=7;
				scrollEvent = true;
				$('html, body').stop().animate({scrollTop : $('.num2 > .section2').offset().top},400,function(){
                    $('.section1').css({backgroundColor:'#ff8400'})
                    $('.section2 > .txt2').css({
                        opacity:'1',
                        transition:'opacity .8s ease'
                    })
                    $('.section2 > .txt3').css({
                        opacity:'1',
                        transition:'all 1s ease'
                    })
                        scrollEvent = false;
                    }
                )
            }else if(NScroll > $('.num2 > .section2').offset().top && count==7){
            	count=8;
                scrollEvent = true;

                $('html, body').stop().animate({scrollTop:$('.num3').offset().top},800,function(){
                    $('.section2 > .txt2').css({
                        opacity:'1',
                        transition:'opacity .8s ease'
                    })
                    $('.section2 > .txt3').css({
                        opacity:'1',
                        marginRight:'5%',
                        transition:'all 1s ease'
                    })
                    $('.num3 > .txt2').css({
                        opacity:'1',
                        color:'#ff8400',
                        textDecoration:'underline',
                        transition:'opacity .5s ease'
                    })
                    scrollEvent=false
                })
            }else if(NScroll > $('.num3').offset().top+50 && count==8){
                count=9;
                scrollEvent = true;
                $('html, body').stop().animate({
                    scrollTop:$('.num4').offset().top
                    },500,function(){
                        $('.imgWrapper').animate({
                            right:'3%'
                        },800, function(){
                        $('.circle').css({
                            opacity:'1',
                            transition:'opacity .4s ease-out'
                            })
                        })
                        $('.num4 > .txt1').css({
                            opacity:'.6',
                            transition:'opacity .4s ease-out'
                        })
                        $('.num4 > .txt2').css({
                            opacity:1,
                            transition:'opacity .8s ease-out'
                        })
                        scrollEvent = false;
                    }
                )
            }else if(NScroll > $('.num4').offset().top && count==9){
            	count=10;
                scrollEvent = true;
                $('html, body').stop().animate({
                    scrollTop:$('.num5').offset().top
                },800,function(){
                    scrollEvent=false
                })
            }
        }else if(m > 0 && scrollEvent==false){
        	if(NScroll < 110 && count==1){
        		scrollEvent = true;
                count=0;
                $('.num1 > .tit').css({
                    opacity:'1'
                })
                $('.num1 > .txt1').css({
                    opacity:'0',
                    transition:'opacity .2s ease'
                })
                $('.num1 > .txt2').css({
                    opacity:'0',
                    transition:'opacity .2s ease'
                })
                $('.num1 > a').show()
                $('.BGpos').stop().animate(
                    {scrollTop :0},
                    {duration : 500, complete : function(){
                        scrollEvent=false;
                    }
                })
        	}else if(NScroll < 200 && count==2){
        		scrollEvent = true;
                count=1;
                $('.fixedImg').removeClass('move')
                $('.num1 > .tit').css({
                   opacity:'0'
                })
                $('.num1 > .txt1').css({
                    opacity:'1'
                })
                $('.bgCon').removeClass('onMove')
                $('.changeImg').css({
                    opacity:'0',
                    transition:'opacity 0.2s ease-in-out'
                })
                $('.num1 > .txt2').css({
                    color:'#fff'
                })
                $('html, body').stop().animate(
                    {scrollTop : 100},
                    {duration : 1000, complete : function(){
                        scrollEvent=false
                    }
                })
                $('.fixedImg').show()
            }else if(NScroll < 300 && count==3){
            	scrollEvent = true;
                count=2;
                $('.changeImg > img').attr('src',variDri[0])
                $('html, body').stop().animate(
                    {scrollTop : 200},
                    {duration : 500, complete : function(){
                        scrollEvent=false
                    }
                })
        	}else if(NScroll < 400 && count==4){
                scrollEvent = true;
                count=3;
                $('.changeImg > img').attr('src',variDri[1])
                $('html, body').stop().animate(
                    {scrollTop : 300},
                    {duration : 500, complete : function(){
                        scrollEvent=false
                    }
                })
            }else if(NScroll < 500 && count==5){
                scrollEvent = true;
                count=4;
                $('.changeImg > img').attr('src',variDri[2])
                $('html, body').stop().animate(
                    {scrollTop : 400},
                    {duration : 500, complete : function(){
                        scrollEvent=false
                    }
                })
            }else if(NScroll < $('.section1').offset().top-20 && count==6){
            	scrollEvent = true;
                count=5;

                $('.changeImg > img').attr('src',variDri[3])
                $('.changeImg').css({
                    opacity:'1'
                })
                $('.num1 > .txt2').css({
                    opacity:'1'
                })
                $('.num1 > .txt2').css({
                  opacity:'1',
                  transition:'opacity 0.2s ease-in-out'
                })
                $('.changeImg').css({
                    opacity:'1',
                    transition:'opacity 0.2s ease-in-out'
                })
                $('.num1 > .fixedImg').css({
                    opacity:'1'
                })
                $('html, body').stop().animate(
                    {scrollTop : 500},
                    {duration : 500, complete : function(){
                        scrollEvent=false
                    }
                })
            }else if(NScroll < $('.section2').offset().top-20 && count==7){
            	scrollEvent = true;
                count=6;
                $('html, body').stop().animate(
                    {scrollTop :  $('.num2 > .section1').offset().top},
                    {duration : 400, complete : function(){
                        scrollEvent=false
                    }
                })
            }else if(NScroll < $('.num3').offset().top-10 && count==8){
                scrollEvent = true;
                count=7;
                $('html, body').stop().animate(
                    {scrollTop :  $('.num2 > .section2').offset().top},
                    {duration : 400, complete : function(){
                        scrollEvent=false
                    }
                })
            }else if(NScroll < $('.num4').offset().top-10 && count==9){
                scrollEvent = true;
                count=8;
                $('html, body').stop().animate(
                    {scrollTop :  $('.num3').offset().top},
                    {duration : 400, complete : function(){
                        scrollEvent=false
                    }
                })
            }else if(NScroll < $('.num5').offset().top-10 && count==10){
                scrollEvent = true;
                count=9;
                $('html, body').stop().animate(
                    {scrollTop :  $('.num4').offset().top},
                    {duration : 400, complete : function(){
                        scrollEvent=false
                    }
                })
            }
        }
    })
})
