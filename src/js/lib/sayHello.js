// import { $ } from 'jquery';
import 'slick-carousel';

function sayHello() {
  // if (navigator.userAgent.toLowerCase().indexOf('chrome') > -1) {
  //   var args = ['\n %c Made with ❤️ by Rivercode %c http://www.riverco.de/ %c %c 🐳 \n\n', 'border: 1px solid #000;color: #000; background: #fff001; padding:5px 0;', 'color: #fff; background: #1c1c1c; padding:5px 0;border: 1px solid #000;', 'background: #fff; padding:5px 0;', 'color: #b0976d; background: #fff; padding:5px 0;'];
  //   window.console.log.apply(console, args);
  // } else if (window.console) {
  //   window.console.log('Made with love ❤️ Riverco.de - http://www.riverco.de/  ❤️');
  // }
  $('.collections__list').slick({
    slidesToShow: 3,
    slideToScroll: 1,
    // autoplay: true,
    // autoplaySpeed: 1000,
    dots: true
  });
  // var wrapper = $('.tabs'),
  //   allTabs = wrapper.find('.tab-content > ul'),
  //   tabMenu = wrapper.find('.tabs__list li');
  //   // $line = $('<div class="line"></div>').appendTo($tabMenu);
  // // allTabs.not(':first-of-type').hide();
  // // $tabMenu.filter(':first-of-type').find(':first').width('100%');
  // tabMenu.each(function(i) {
  //   $(this).attr('data-tab', 'tab' + i);
  // });

  // allTabs.each(function(i) {
  //   $(this).attr('data-tab', 'tab' + i);
  // });

  // tabMenu.on('click', function() {

  //   var dataTab = $(this).data('tab'),
  //     getWrapper = $(this).closest(wrapper);

  //   getWrapper.find(tabMenu).removeClass('active');
  //   $(this).addClass('active');

  //   getWrapper.find(allTabs).hide();
  //   getWrapper.find(allTabs).filter('[data-tab=' + dataTab + ']').show();
  // });
  $('ul.tabs__list li').click(function() {
    var tab_id = $(this).attr('data-tab');

    $('ul.tabs__list li').removeClass('current');
    $('.lo').removeClass('current');

    $(this).addClass('current');
    $('#' + tab_id).addClass('current');
    $('.slick-prev').trigger('click');
  });
}
module.exports = sayHello;
