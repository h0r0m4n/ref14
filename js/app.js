/*
 * Avoid `console` errors in browsers that lack a console.
 */

(function() {
  var method;
  var noop = function () {};
  var methods = [
    'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
    'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
    'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
    'timeStamp', 'trace', 'warn'
  ];
  var length = methods.length;
  var console = (window.console = window.console || {});

  while (length--) {
    method = methods[length];

    // Only stub undefined methods.
    if (!console[method]) {
      console[method] = noop;
    }
  }
}());

/*
 * Foundation
 */

$(document).foundation({
  orbit: {
    slide_number: false,
    bullets: false
  },
  topbar: {
    custom_back_text: true,
    back_text: 'Indietro'
  }
});

/*
 * Article header handler - test
 */

(function ($) {
  var resizeTimer;

  function headerHeight() {
    var documentHeight = $(window).height();
    Foundation.utils.S('.event-header').css('min-height', documentHeight);
  };

  //$(window).resize(function () {
  //  clearTimeout(resizeTimer);
  //  resizeTimer = setTimeout(headerHeight, 500);
  //});

  // Foundation mode
  $(window).resize(Foundation.utils.throttle(function () {
    headerHeight();
  }, 500));

  headerHeight();

})(jQuery);

/*
 * Search
 */

$(function () {
  var menuTarget = $(document.body);

  Foundation.utils.S('a.search').on('click', Foundation.utils.debounce(function (e) {
    menuTarget.toggleClass('search-open');
    Foundation.utils.S('input#search-query').focus();
    return false;
  }, 300, true));
});

/*
 * pushState() and popState()
 */


// $(function() {
//   $('nav a').click(function(e) {

//     $("#loading").show(); // Loader accessibility

//     href = $(this).attr("href");

//     loadContent(href);

//     // HISTORY.PUSHSTATE
//     history.pushState('', 'New URL: '+href, href);
//     e.preventDefault();
//   });

//   // THIS EVENT MAKES SURE THAT THE BACK/FORWARD BUTTONS WORK AS WELL
//   window.onpopstate = function(event) {
//     $("#loading").show();
//     console.log("pathname: "+location.pathname);
//     loadContent(location.pathname);
//   };
// });

// function loadContent(url) {
//   // USES JQUERY TO LOAD THE CONTENT
//   $.getJSON("content.php", {cid: url, format: 'json'}, function(json) {
//     // THIS LOOP PUTS ALL THE CONTENT INTO THE RIGHT PLACES
//     $.each(json, function(key, value){
//       $(key).html(value);
//     });
//     $("#loading").hide();
//   });

//   // THESE TWO LINES JUST MAKE SURE THAT THE NAV BAR REFLECTS THE CURRENT URL
//   $('li').removeClass('active');
//   $('a[href="'+url+'"]').parent().addClass('active');
// }

/*
 * Log all jQuery AJAX requests to Google Analytics
 * See: http://www.alfajango.com/blog/track-jquery-ajax-requests-in-google-analytics/
 */

if (typeof ga !== "undefined" && ga !== null) {
  $(document).ajaxSend(function(event, xhr, settings){
    ga('send', 'pageview', settings.url);
  });
}