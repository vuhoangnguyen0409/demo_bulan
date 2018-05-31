$(document).ready(function() {
  //fullPage
  $('#fullpage').fullpage({
    menu: '.gnav',
    anchors: ['top', 'concept', 'about', 'info', 'gallery', 'contact'],
    navigation: true,
    loopTop: false,
    loopBottom: false,
    scrollingSpeed: 500,
    onLeave: function() { //scroll leave
      $('.icon_fix').stop().addClass("icon_fix_active");
      $('.contents').removeClass("content_01_active content_02_active");
      $('.nav_btn').removeClass("btn_actived");
      $('.nav_wrap').removeClass("nav_actived");
    }
  });
  //nav_btn
  $('.nav_btn').on('click', function() {
    $(this).toggleClass('btn_actived');
    $('.nav_wrap').toggleClass('nav_actived');
    $('.icon_fix').stop().toggleClass('icon_fix_active');
  });
  $('.gnav ul li a').click(function() {
    $('.nav_btn').removeClass('btn_actived');
    $('.nav_wrap').toggleClass('nav_actived');
    $('.icon_fix').stop().toggleClass('icon_fix_active');
  });
  //language
  $('.lang a').on('click', function() {
    var lang_choose = '.' + $(this).attr('title');
    $('.English, .Japanese').hide();
    $(lang_choose).fadeIn();
    return false;
  });
  //resize window
  $(window).on('load resize', function() {
    var win_w = $(window).width();
    if (468 < win_w && win_w < 768) {
      $('body').removeClass('sp');
      $('body').addClass('tbl');
    } else if (win_w < 468) {
      $('body').removeClass('tbl');
      $('body').addClass('sp');
    } else {
      $('body').removeClass('tbl sp');
      $('.box').removeAttr('style');
    }
  });
  //top
  $('.tlt_top').textillate({
    initialDelay: 400,
    in: {
      // set the effect name
      effect: 'bounceIn',
    }
  });
  //info
  $('.info_btn').on('click', function() {
    var btn_index = $(this).index();
    $('.box').hide();
    $('.box').eq(btn_index).fadeIn();
  });
  //section isInView
  $('section.section').on('inview', function(event, isInView, visiblePartX, visiblePartY) {
    // scroll 2nd time
    if ( $('.contact').hasClass('active') ) {
      $('.contents').removeClass('content_01').addClass('content_02');
      setTimeout(function(){
        $('.icon_fix').remove();
      }, 2000);
    }
    // textillate
    $(this).find('.tlt').textillate({
      initialDelay: 400,
      in: {
        // set the effect name
        effect: 'fadeInLeftBig',
      }
    });
    // animation icon_fix
    setTimeout(function() {
      $('.icon_fix').stop().removeClass("icon_fix_active");
      //title
    }, 1000);
    // animation contents
    $(this).find('.content_01').addClass("content_01_active");
    $(this).find('.content_02').addClass("content_02_active");
  });
}); // end ready
