$(function(){

//alert('a');

//변수모음
//sticky헤더
var $window = $(window);
var $header = $('header');
var $hot = $header.offset().top;
//alert($hot);

//메인탭
var $tabNav = $('#tabs-nav');
var $tabAnchor = $tabNav.find('li>a');


var $txtBox = $('#content1').find('.wrapper>div>div:nth-child(2)');
var $tot = $txtBox.offset().top;




//리사이징후 메인슬라이더
$mainSlider = $('.main_bxslider').bxSlider({
  // mode:'horizontal',
  auto:true,
  speed:1000,
  pause:4000,
  //touchEnabled:(navigator.maxTouchPoints > 0),
  // preventDefaultSwipeY:true,
  //preventDefaultSwipeX:false,
  //preventDefaultSwipeY:true
});

$('#mainSlider').on('mouseover',function(){
  $mainSlider.stopAuto();
}).on('mouseout',function(){
  $mainSlider.startAuto();
});



//리사이징후 뉴 아이템
$newSlider = $('.new_bxslider').bxSlider({
  // mode:'horizontal',
  auto:true,
  speed:1000,
  pause:4000,
  responsive:true,
  minSlides:3,
  maxSlides:3,
  slideMargin:20,
  moveSlides:1,
  shrinkItems: true,
  slideWidth:333,

});

$('#content3').on('mouseover',function(){
  $newSlider.stopAuto();
}).on('mouseout',function(){
  $newSlider.startAuto();
});


//리사이징 후 유튜브 슬라이더
$youtubeslider = $('.youtube_bxslider').bxSlider({
  // mode:'horizontal',
  auto:true,
  speed:1000,
  pause:6000,
  responsive:true,
});

$('#content4').on('mouseover',function(){
  $youtubeslider.stopAuto();
}).on('mouseout',function(){
  $youtubeslider.startAuto();
});


//리사이징 후 뉴아이템 슬라이더
$newSlider2 = $('.new_bxslider2').bxSlider({
  // mode:'horizontal',
  auto:true,
  speed:1000,
  pause:6000,
  responsive:true,
  minSlides:2,
  maxSlides:2,
  slideMargin:20,
  moveSlides:1,
  shrinkItems: true,
  slideWidth:250,
});

$('#content3').on('mouseover',function(){
  $newSlider2.stopAuto();
}).on('mouseout',function(){
  $newSlider2.startAuto();
});






//스크롤시 stick 헤더
$window.on('scroll',function(){
  var $scroll = $window.scrollTop();
  //alert($scroll);
  //alert('a');

  if($scroll > $hot+100){
    $header.addClass('sticky');
  }else{
    $header.removeClass('sticky');
  }

});


//메인 탭 기능
$tabAnchor.on('click',function(event){
  //alert('a');
  //e.preventDefault(); //초기화 오류?남
   if($(this).hasClass('bold')){
     return;
   }

  //탭네비에 bold 추가
  $tabAnchor.removeClass('bold');
  $(this).addClass('bold');

  //탭이미지 전부 숨기고 나타남
  $('.tabs').hide();
  var $tab = $(this).attr('href');
  //alert($tab);
  $($tab).fadeIn(400);
});



//메인 gnb메뉴에 마우스오버시 하위메뉴 나타남
var $gnbMenu = $('#gnb').find('>ul>li');

$gnbMenu.on('mouseover',function(){
  //alert('1');
  if($window.width() >= 1300){
  $(this).find('>ul').css({'display':'block'}).stop().animate({
    'height':220
  },200,'linear');
}

}).on('mouseout',function(){
  $(this).find('>ul').css({'display':'none'}).stop().animate({
    'height':0
  },200,'linear');
});


//gnb2 하위메뉴


var $gnb2Close = $('#gnb2').find('div:nth-child(2)');



//gnb2 미디어쿼리 1300보다 작을때
$gnbMenu.on('click',function(){
  //alert('a');
    if($window.width() < 1300){
    $('#gnb2').stop().animate({
      'height':300
    },200,'linear');
    $('#gnb2').find('div').css({'display':'block'});

    //중첩메뉴는 안내려오게 함
    $(this).find('>ul').css({'display':'none'}).stop().animate({
      'height':0
    },200,'linear');
}
});

  $gnb2Close.on('click',function(){
    $('#gnb2').stop().animate({
      'height':0
    },200,'linear');
    $('#gnb2').find('div').css({'display':'none'});
  });


  //gnb 미디어쿼리 689보다 작을때

  var $bar = $('.bars');
  $bar.on('click',function(){
    //alert('a');
    if($window.width() <= 689){
      $('#gnb').stop().animate({
        'width':'100%'
      },200,'linear');
      $('#gnb').find('div').css({'display':'block'});
      $('#gnb').find('ul').css({'display':'block'});

      $('#gnb2').stop().animate({
        'height':0
      },200,'linear');
      $('#gnb2').find('div').css({'display':'none'});
    }else if($window.width() > 690){
      $('#gnb').css({'display':'none'});
    }
  });

  var $miniNavClose = $('.mininav_close');
  $miniNavClose.on('click',function(){
    $('#gnb').stop().animate({
      'width':0
    },200,'linear');
    $('#gnb').find('div').css({'display':'none'});
    $('#gnb').find('ul').css({'display':'none'});
  });







//버튼 애니메이트
var $btn = $('button');
$btn.on('mouseover',function(){
  //alert('a');
  $(this).find('>span').stop().animate({
    'width':100
  },100,'linear');
  $(this).find('>span>span').css({'color':'#fff'});
}).on('mouseout',function(){
  $(this).find('>span').stop().animate({
    'width':0
  },100,'linear');
  $(this).find('>span>span').css({'color':'#444'});
});


$('#top').on('mouseover',function(){
  $(this).stop().animate({
    'bottom':'48px'
  },200,'linear');
}).on('mouseout',function(){
  $(this).stop().animate({
    'bottom':'40px'
  },200,'linear');
});


$('#top').on('click',function(){
  //alert('a');
  $('html,body').stop().animate({
    scrollTop:'0'
  },300,'linear');
});



//////////////////////////////////////////////////////
//슬라이더
//////////////////////////////////////////////////////

//con2슬라이더
$con2Slider = $('.con2_bxslider').bxSlider({
  // mode:'horizontal',
  auto:true,
  speed:1000,
  pause:4000,
});

$('#content2').on('mouseover',function(){
  $con2Slider.stopAuto();
}).on('mouseout',function(){
  $con2Slider.startAuto();
});

//con2미니슬라이더
$con2MiniSlider = $('.con2mini_bxslider').bxSlider({
  // mode:'horizontal',
  auto:true,
  speed:1000,
  pause:4000,
});

$('#content2').on('mouseover',function(){
  $con2MiniSlider.stopAuto();
}).on('mouseout',function(){
  $con2MiniSlider.startAuto();
});





});//jQuery닫기
