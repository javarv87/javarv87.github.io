/*!
 *
 *  Web Starter Kit
 *  Copyright 2015 Google Inc. All rights reserved.
 *
 *  Licensed under the Apache License, Version 2.0 (the "License");
 *  you may not use this file except in compliance with the License.
 *  You may obtain a copy of the License at
 *
 *    https://www.apache.org/licenses/LICENSE-2.0
 *
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License
 *
 */
/* eslint-env browser */
(function($) {
  'use strict';

  // Check to make sure service workers are supported in the current browser,
  // and that the current page is accessed from a secure origin. Using a
  // service worker from an insecure origin will trigger JS console errors. See
  // http://www.chromium.org/Home/chromium-security/prefer-secure-origins-for-powerful-new-features
  var isLocalhost = Boolean(window.location.hostname === 'localhost' ||
      // [::1] is the IPv6 localhost address.
      window.location.hostname === '[::1]' ||
      // 127.0.0.1/8 is considered localhost for IPv4.
      window.location.hostname.match(
        /^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/
      )
    );

  if ('serviceWorker' in navigator &&
      (window.location.protocol === 'https:' || isLocalhost)) {
    navigator.serviceWorker.register('service-worker.js')
    .then(function(registration) {
      // updatefound is fired if service-worker.js changes.
      registration.onupdatefound = function() {
        // updatefound is also fired the very first time the SW is installed,
        // and there's no need to prompt for a reload at that point.
        // So check here to see if the page is already controlled,
        // i.e. whether there's an existing service worker.
        if (navigator.serviceWorker.controller) {
          // The updatefound event implies that registration.installing is set:
          // https://slightlyoff.github.io/ServiceWorker/spec/service_worker/index.html#service-worker-container-updatefound-event
          var installingWorker = registration.installing;

          installingWorker.onstatechange = function() {
            switch (installingWorker.state) {
              case 'installed':
                // At this point, the old content will have been purged and the
                // fresh content will have been added to the cache.
                // It's the perfect time to display a "New content is
                // available; please refresh." message in the page's interface.
                break;

              case 'redundant':
                throw new Error('The installing ' +
                                'service worker became redundant.');

              default:
                // Ignore
            }
          };
        }
      };
    }).catch(function(e) {
      console.error('Error during service worker registration:', e);
    });
  }

  // Your custom JavaScript goes here
  var logo = document.getElementById('logo');
  /**
   * Document Ready
   */
  $(document).ready(function() {
    /**
     * Loader
     */
    var $loadingPage = $('.loading-page');
    $loadingPage.fadeOut('slow');
    /**
     * Menú
     */
    var $navBarContainer = $('#navbar-container');
    var $menuToggle = $('#menu-toggle');
    $menuToggle.click(function() {
      $navBarContainer.toggleClass('opened');
    });
    /**
     * Smooth Scroll
     */
    var $root = $('html, body');
    $('a[href^="#"]').click(function() {
      $navBarContainer.toggleClass('opened');
      var href = $.attr(this, 'href');

      $root.animate({
        scrollTop: $(href).offset().top
      }, 500, function() {
        window.location.hash = href;
      });

      return false;
    });
    /**
     * Logo Size
     */
    logoSize();

    if (window.innerWidth <= 992) {
      logo.removeAttribute('style');
    }
  });

  /**
   * Header Scroll
   */
  var navbarEl = document.getElementById('navbar');
  var specialShadow = document.getElementById('specialShadow');

  var navBarContainer = document.getElementById('navbar-container');
  var NAVBAR_HEIGHT = 54;
  var THRESHOLD = 54;
  var horizon = NAVBAR_HEIGHT;
  var whereYouStoppedScrolling = 0;
  var scrollFactor = 0;
  var currentTranslate = 0;

  /**
   * Validate for up and down navbar
   * @param {*} lastY // last position
   * @param {*} currentY // current position
   * @return {*} // function
   */
  function upOrDown(lastY, currentY) {
    if (currentY >= lastY) {
      return goingDown(currentY);
    }
    return goingUp(currentY);
  }

  /**
   * GoingUp
   * @param {*} currentY // Current positio
   */
  function goingDown(currentY) {
    whereYouStoppedScrolling = currentY;

    if (currentY > horizon) {
      horizon = currentY;
    }

    translateHeader(currentY, false);
  }

  /**
   * Going Down
   * @param {*} currentY // Current positio
   */
  function goingUp(currentY) {
    if (currentY < (whereYouStoppedScrolling - NAVBAR_HEIGHT)) {
      horizon = currentY + NAVBAR_HEIGHT;
    }

    translateHeader(currentY, true);
  }

  /**
   * Delta
   * @param {*} delta // number
   * @return {*} // number
   */
  function constrainDelta(delta) {
    return Math.max(0, Math.min(delta, NAVBAR_HEIGHT));
  }

  /**
   * Translate header
   * @param {*} currentY // Current position
   * @param {*} upwards // up
   */
  function translateHeader(currentY, upwards) {
    var translateValue;

    if (upwards && currentTranslate === 0) {
      translateValue = 0;
    } else if (currentY <= NAVBAR_HEIGHT) {
      translateValue = currentY * -1;
    } else {
      var delta = constrainDelta(Math.abs(currentY - horizon));
      translateValue = delta - NAVBAR_HEIGHT;
    }

    if (translateValue !== currentTranslate) {
      var navbarStyle = 'transform: translateY(' + translateValue + 'px);';
      currentTranslate = translateValue;
      navbarEl.setAttribute('style', navbarStyle);
    }

    if (currentY > THRESHOLD * 2) {
      scrollFactor = 1;
    } else if (currentY > THRESHOLD) {
      scrollFactor = (currentY - THRESHOLD) / THRESHOLD;
    } else {
      scrollFactor = 0;
    }

    var translateFactor = 1 + translateValue / NAVBAR_HEIGHT;
    specialShadow.style.opacity = scrollFactor;
    specialShadow.style.transform = 'scaleY(' + translateFactor + ')';
  }
  /**
   * Logo Resize
   */
  function logoSize() {
    var imgWidth = 32;
    if (window.innerWidth >= 992) {
      // Get the real width of the logo image
      imgWidth = logo.getBBox().width;
    }
    // distance over which zoom effect takes place
    var maxScrollDistance = 54;
    // set to window height if larger
    maxScrollDistance = Math.min(maxScrollDistance, $(window).height());
    // width at maximum zoom out (i.e. when window has scrolled maxScrollDistance)
    var widthAtMax = 32;
    // calculate diff and how many pixels to zoom per pixel scrolled
    var widthDiff = imgWidth - widthAtMax;
    var pixelsPerScroll = (widthDiff / maxScrollDistance);

    $(window).scroll(function() {
      // the currently scrolled-to position - max-out at maxScrollDistance
      var scrollTopPos = Math.min($(document).scrollTop(), maxScrollDistance);
      // how many pixels to adjust by
      var scrollChangePx = Math.floor(scrollTopPos * pixelsPerScroll);
      // calculate the new width
      var zoomedWidth = imgWidth - scrollChangePx;
      // set the width
      logo.style.width = zoomedWidth;
    });
  }

  translateHeader(window.scrollY, false);

  var ticking = false;
  var lastY = 0;

  $(window).scroll(function() {
    var currentY = window.scrollY;
    if (!ticking) {
      window.requestAnimationFrame(function() {
        upOrDown(lastY, currentY);
        ticking = false;
        lastY = currentY;
        if (lastY >= NAVBAR_HEIGHT && window.innerWidth >= 992) {
          navbarEl.style.background = '#ffffff';
          navBarContainer.style.padding = '.75rem 2rem';
        }
        if (window.innerWidth <= 992) {
          navbarEl.style.background = '#ffffff';
          navBarContainer.style.padding = '.75rem 1rem';
        }
        if (lastY === 0 && window.innerWidth >= 992) {
          navbarEl.style.background = 'transparent';
          navBarContainer.style.padding = '2rem';
        }
      });
    }
    ticking = true;
  });
  $(window).resize(function() {
    logoSize();
    if (lastY >= NAVBAR_HEIGHT && window.innerWidth >= 992) {
      navBarContainer.style.padding = '.75rem 2rem';
    }
    if (window.innerWidth <= 992) {
      logo.removeAttribute('style');
      navBarContainer.style.padding = '.75rem 1rem';
    }
    if (lastY === 0 && window.innerWidth >= 992) {
      navBarContainer.style.padding = '2rem';
    }
  });
})(window.jQuery);
