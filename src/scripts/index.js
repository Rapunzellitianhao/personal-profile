


var $ = require('./common/utils/zepto-modules/zepto');
require('./common/utils/zepto-modules/event');
require('./common/utils/zepto-modules/touch');
require('./common/utils/zepto-modules/ajax');
var a = require('./common/utils/jquery.min');

var Swiper = require('./common/libs/swiper/swiper.min.js');
var swiperAni = require('./common/libs/swiper/swiper.animate1.0.2.min.js');
var IScroll = require('./common/libs/iscroll/iscroll.js');


var swiper = new Swiper('.swiper-container',{
      onInit: function(swiper){ 
        swiperAni.swiperAnimateCache(swiper); 
        swiperAni.swiperAnimate(swiper); 
      }, 
      onSlideChangeEnd: function(swiper){ 
        swiperAni.swiperAnimate(swiper); 
      } 
});

$(function(){
	if(localStorage.name=='aa'){
	$('.boxindex').css('display','none')
	$('.boxinfo').css('display','block')
	$('.yf').html('<audio src="../audio/bg.mp3" autoplay="autoplay"></audio>')
	var Audio=document.getElementsByTagName('audio')[0];
	var yf=document.getElementsByClassName('yf')[0];
	var bstop=true;
	yf.onclick=function(){
		if (bstop){
			Audio.pause();
			$('.yf').css('animation-name','aa');
			bstop=false;
		}else{
			Audio.play();
			$('.yf').css('animation-name','rot');
			bstop=true;
		}
	}
	
	$('.skillinfo').html('<ul><li><aside><p></p></aside><p><span>HTML4、5、ES5、CommonJS等基础规范</span></p></li><li><aside><p></p></aside><p><span>使用Jquery、Zepto、AngularJs等框架</span></p></li><li><aside><p></p></aside><p><span>使用Swiper、Iscroll等类库</span></p></li><li><aside><p></p></aside><p><span>Fixed、Fulid、Flex、Responsive等布局</span></p></li><li><aside><p></p></aside><p><span>Javascript原生、Jquery及Zepto等程序</span></p></li></ul>')
	
	
	}
})


	



$('.expe').find('p').tap(function(){
	$('.boxindex').css('display','none')
	$('.boxinfo').css('display','block')
	$('.yf').html('<audio src="../audio/bg.mp3" autoplay="autoplay"></audio>')
	var Audio=document.getElementsByTagName('audio')[0];
	var yf=document.getElementsByClassName('yf')[0];
	var bstop=true;
	yf.onclick=function(){
		if (bstop){
			Audio.pause();
			$('.yf').css('animation-name','aa');
			bstop=false;
		}else{
			Audio.play();
			$('.yf').css('animation-name','rot');
			bstop=true;
		}
	}
	
localStorage.name="aa";
	
	$('.skillinfo').html('<ul><li><aside><p></p></aside><p><span>HTML4、5、ES5、CommonJS等基础规范</span></p></li><li><aside><p></p></aside><p><span>使用Jquery、Zepto、AngularJs等框架</span></p></li><li><aside><p></p></aside><p><span>使用Swiper、Iscroll等类库</span></p></li><li><aside><p></p></aside><p><span>Fixed、Fulid、Flex、Responsive等布局</span></p></li><li><aside><p></p></aside><p><span>Javascript原生、Jquery及Zepto等程序</span></p></li></ul>')
	
	
	})


$('.skilltap').tap(function(){
	$('.procontent').hide()
	$('.expcontent').hide()
	$('.selfcontent').hide()
	$('.skillcontent').show()
	$('.skillheader').show()
	$('.proheader').hide()
	$('.expheader').hide()
	$('.selfheader').hide()
})
$('.protap').tap(function(){
	$('.skillcontent').hide()
	$('.expcontent').hide()
	$('.selfcontent').hide()
	$('.procontent').show()
	$('.skillheader').hide()
	$('.expheader').hide()
	$('.selfheader').hide()
	$('.proheader').show()
})


$('.exptap').tap(function(){
	$('.procontent').hide()
	$('.skillcontent').hide()
	$('.selfcontent').hide()
	$('.expcontent').show()
	$('.skillheader').hide()
	$('.proheader').hide()
	$('.selfheader').hide()
	$('.expheader').show()
})
$('.selftap').tap(function(){
	$('.procontent').hide()
	$('.expcontent').hide()
	$('.skillcontent').hide()
	$('.selfcontent').show()
	$('.skillheader').hide()
	$('.expheader').hide()
	$('.proheader').hide()
	$('.selfheader').show()
})

$.post('http://localhost:8000/skill',function(data){
	for(var i=0;i<data.info.length;i++){
		$('.skills').find('li').eq(i).find('span').eq(0).html(data.info[i].skill);	
		$('.skills').find('li').eq(i).find('span').eq(1).html(data.info[i].deep);
	}
})

$.post('http://localhost:8000/project',function(data){
	for(var i=0;i<data.per.length;i++){
		$('.exp').find('li').eq(i).find('span').html(data.per[i].title);	
}
})




 


















