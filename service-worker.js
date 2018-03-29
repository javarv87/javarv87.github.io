/**
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

// This generated service worker JavaScript will precache your site's resources.
// The code needs to be saved in a .js file at the top-level of your site, and registered
// from your pages in order to be used. See
// https://github.com/googlechrome/sw-precache/blob/master/demo/app/js/service-worker-registration.js
// for an example of how you can register this script and handle various service worker events.

/* eslint-env worker, serviceworker */
/* eslint-disable indent, no-unused-vars, no-multiple-empty-lines, max-nested-callbacks, space-before-function-paren */
'use strict';




importScripts("scripts/sw/sw-toolbox.js","scripts/sw/runtime-caching.js");


/* eslint-disable quotes, comma-spacing */
var PrecacheConfig = [["fonts/fontawesome/css/fa-svg-with-js.css","3700b0dd4de47820ca79e149cf84e56f"],["fonts/fontawesome/css/fa-svg-with-js.css.map","5e5f85502eb8b538ddb2ff4167cf5f36"],["fonts/fontawesome/js/fa-brands.js","a91c2b8a49bb9546020c830e5f87777e"],["fonts/fontawesome/js/fa-brands.js.map","2f15c6c88e686d75797a3b4aa1314a3a"],["fonts/fontawesome/js/fa-brands.min.js","96ea9add9eac5631b76c23695ad961bf"],["fonts/fontawesome/js/fa-brands.min.js.map","5293cc2c3e6c305d37a2087d5ffd1a97"],["fonts/fontawesome/js/fa-regular.js","3ced7ac7787b18b6eb2a0343aa4927c4"],["fonts/fontawesome/js/fa-regular.js.map","4d231d8e0d026777c5215896d3836e79"],["fonts/fontawesome/js/fa-regular.min.js","e83cd2e35f6965ebcc87258f5dda5421"],["fonts/fontawesome/js/fa-regular.min.js.map","3356329ad80954003356773da96a03e8"],["fonts/fontawesome/js/fa-solid.js","3a959796371cdea42f376357c324dd08"],["fonts/fontawesome/js/fa-solid.js.map","f08ff4b187b940d88964ebf607c60fdb"],["fonts/fontawesome/js/fa-solid.min.js","b12da39c7b16f99b4c0f826be9d7244d"],["fonts/fontawesome/js/fa-solid.min.js.map","0a19274ce74e4d3220216e92e51a53bf"],["fonts/fontawesome/js/fa-v4-shims.js","4b9cb4f3ee7ea42aea90665ac21922d7"],["fonts/fontawesome/js/fa-v4-shims.js.map","245d6e15cb8ec0b15e7a7d3b69d8fd15"],["fonts/fontawesome/js/fa-v4-shims.min.js","5d9f73ee47cd4b8e50b3322966afa44a"],["fonts/fontawesome/js/fa-v4-shims.min.js.map","1afe947ea9cd1281f4f34937315dffb5"],["fonts/fontawesome/js/fontawesome-all.js","71f1f48cf486f54232e0e8c77692f581"],["fonts/fontawesome/js/fontawesome-all.js.map","28ffa5cd273aa7b6a34369d5ba108a0b"],["fonts/fontawesome/js/fontawesome-all.min.js","0512b15078d61c74ebc51e24f84fc29a"],["fonts/fontawesome/js/fontawesome-all.min.js.map","bc17cb142921a4ff4f86afc234604cd2"],["fonts/fontawesome/js/fontawesome.js","bd53ff92dd6d2567262fe5ccfde0daaf"],["fonts/fontawesome/js/fontawesome.js.map","225daf452fee887cca0b59bd52b3ece8"],["fonts/fontawesome/js/fontawesome.min.js","6b5d62fb14f8bcfdc1bb270758477c3b"],["fonts/fontawesome/js/fontawesome.min.js.map","0f65c49089a62d0131ba8512c30d98c7"],["google9c06373062945f6f.html","7ffeb1e9161a2d71c036aa91b656d70f"],["images/am.png","4ff46b68f74714418ce43d0d0c2fccfe"],["images/cv/javier_ruiz_vazquez_en.pdf","27d38779c566daa7fc47217383f99db4"],["images/decoration1.png","01d35c4def2573c3e79930ffcfc3dba7"],["images/decoration2.png","327d2f3ab864906ba657e3216ce78fa3"],["images/decoration3.png","e8e7dfb123906be1b7bf70af24535bcc"],["images/decoration4.png","176dfc20e0396e97b2cffd51b61b29b5"],["images/directum-lex.png","3b2484501bb6ed1164276120ed2d9487"],["images/esencia_dolorense.png","9fe13de64c9313b91d66a535e7a85522"],["images/iqmas.png","32e695e0a8cf0f5efe9d3f7f4f4c8f42"],["images/jarking.png","ab3cc09c7b452381fc5c874248de8740"],["images/laptop.png","013c7a010ecc51be6e8f64f428d8a1b4"],["images/medicospro.png","8db5a0c94e41ce63c29f0122ea589447"],["images/phone.png","620dc4a3cb3bae019210d5fb97f4b29a"],["images/signot.png","b5ea7291019930f1d21bd731f9ca766b"],["images/touch/apple-touch-icon.png","7326f54bfe6776293f08b34c3a5fde7b"],["images/touch/chrome-touch-icon-192x192.png","571f134f59f14a6d298ddd66c015b293"],["images/touch/icon-128x128.png","7c46d686765c49b813ac5eb34fabf712"],["images/touch/ms-touch-icon-144x144-precomposed.png","452d90b250d6f41a0c8f9db729113ffd"],["index.html","ffdab69ff7334364fd4c21f8892e283b"],["manifest.json","0d89acedc66b45915e5a987f0a74bed1"],["scripts/main.min.js","f5c9be1d3da596610da7a426caa6fd4f"],["scripts/sw/runtime-caching.js","e3e34dcb62b5d62453b9215961585488"],["scripts/sw/sw-toolbox.js","2770efb889cc10c4de88d0b746c2a13c"],["styles/main.css","6d55cb43aaa1edc43fd677603bca4258"],["styles/tailwind.css","48785a69fad68e4d47e4be3f4f7fbd8c"]];
/* eslint-enable quotes, comma-spacing */
var CacheNamePrefix = 'sw-precache-v1-web-starter-kit-' + (self.registration ? self.registration.scope : '') + '-';


var IgnoreUrlParametersMatching = [/^utm_/];



var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
      url.pathname += index;
    }
    return url.toString();
  };

var getCacheBustedUrl = function (url, param) {
    param = param || Date.now();

    var urlWithCacheBusting = new URL(url);
    urlWithCacheBusting.search += (urlWithCacheBusting.search ? '&' : '') +
      'sw-precache=' + param;

    return urlWithCacheBusting.toString();
  };

var isPathWhitelisted = function (whitelist, absoluteUrlString) {
    // If the whitelist is empty, then consider all URLs to be whitelisted.
    if (whitelist.length === 0) {
      return true;
    }

    // Otherwise compare each path regex to the path of the URL passed in.
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function(whitelistedPathRegex) {
      return path.match(whitelistedPathRegex);
    });
  };

var populateCurrentCacheNames = function (precacheConfig,
    cacheNamePrefix, baseUrl) {
    var absoluteUrlToCacheName = {};
    var currentCacheNamesToAbsoluteUrl = {};

    precacheConfig.forEach(function(cacheOption) {
      var absoluteUrl = new URL(cacheOption[0], baseUrl).toString();
      var cacheName = cacheNamePrefix + absoluteUrl + '-' + cacheOption[1];
      currentCacheNamesToAbsoluteUrl[cacheName] = absoluteUrl;
      absoluteUrlToCacheName[absoluteUrl] = cacheName;
    });

    return {
      absoluteUrlToCacheName: absoluteUrlToCacheName,
      currentCacheNamesToAbsoluteUrl: currentCacheNamesToAbsoluteUrl
    };
  };

var stripIgnoredUrlParameters = function (originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);

    url.search = url.search.slice(1) // Exclude initial '?'
      .split('&') // Split into an array of 'key=value' strings
      .map(function(kv) {
        return kv.split('='); // Split each 'key=value' string into a [key, value] array
      })
      .filter(function(kv) {
        return ignoreUrlParametersMatching.every(function(ignoredRegex) {
          return !ignoredRegex.test(kv[0]); // Return true iff the key doesn't match any of the regexes.
        });
      })
      .map(function(kv) {
        return kv.join('='); // Join each [key, value] array into a 'key=value' string
      })
      .join('&'); // Join the array of 'key=value' strings into a string with '&' in between each

    return url.toString();
  };


var mappings = populateCurrentCacheNames(PrecacheConfig, CacheNamePrefix, self.location);
var AbsoluteUrlToCacheName = mappings.absoluteUrlToCacheName;
var CurrentCacheNamesToAbsoluteUrl = mappings.currentCacheNamesToAbsoluteUrl;

function deleteAllCaches() {
  return caches.keys().then(function(cacheNames) {
    return Promise.all(
      cacheNames.map(function(cacheName) {
        return caches.delete(cacheName);
      })
    );
  });
}

self.addEventListener('install', function(event) {
  event.waitUntil(
    // Take a look at each of the cache names we expect for this version.
    Promise.all(Object.keys(CurrentCacheNamesToAbsoluteUrl).map(function(cacheName) {
      return caches.open(cacheName).then(function(cache) {
        // Get a list of all the entries in the specific named cache.
        // For caches that are already populated for a given version of a
        // resource, there should be 1 entry.
        return cache.keys().then(function(keys) {
          // If there are 0 entries, either because this is a brand new version
          // of a resource or because the install step was interrupted the
          // last time it ran, then we need to populate the cache.
          if (keys.length === 0) {
            // Use the last bit of the cache name, which contains the hash,
            // as the cache-busting parameter.
            // See https://github.com/GoogleChrome/sw-precache/issues/100
            var cacheBustParam = cacheName.split('-').pop();
            var urlWithCacheBusting = getCacheBustedUrl(
              CurrentCacheNamesToAbsoluteUrl[cacheName], cacheBustParam);

            var request = new Request(urlWithCacheBusting,
              {credentials: 'same-origin'});
            return fetch(request).then(function(response) {
              if (response.ok) {
                return cache.put(CurrentCacheNamesToAbsoluteUrl[cacheName],
                  response);
              }

              console.error('Request for %s returned a response status %d, ' +
                'so not attempting to cache it.',
                urlWithCacheBusting, response.status);
              // Get rid of the empty cache if we can't add a successful response to it.
              return caches.delete(cacheName);
            });
          }
        });
      });
    })).then(function() {
      return caches.keys().then(function(allCacheNames) {
        return Promise.all(allCacheNames.filter(function(cacheName) {
          return cacheName.indexOf(CacheNamePrefix) === 0 &&
            !(cacheName in CurrentCacheNamesToAbsoluteUrl);
          }).map(function(cacheName) {
            return caches.delete(cacheName);
          })
        );
      });
    }).then(function() {
      if (typeof self.skipWaiting === 'function') {
        // Force the SW to transition from installing -> active state
        self.skipWaiting();
      }
    })
  );
});

if (self.clients && (typeof self.clients.claim === 'function')) {
  self.addEventListener('activate', function(event) {
    event.waitUntil(self.clients.claim());
  });
}

self.addEventListener('message', function(event) {
  if (event.data.command === 'delete_all') {
    console.log('About to delete all caches...');
    deleteAllCaches().then(function() {
      console.log('Caches deleted.');
      event.ports[0].postMessage({
        error: null
      });
    }).catch(function(error) {
      console.log('Caches not deleted:', error);
      event.ports[0].postMessage({
        error: error
      });
    });
  }
});


self.addEventListener('fetch', function(event) {
  if (event.request.method === 'GET') {
    var urlWithoutIgnoredParameters = stripIgnoredUrlParameters(event.request.url,
      IgnoreUrlParametersMatching);

    var cacheName = AbsoluteUrlToCacheName[urlWithoutIgnoredParameters];
    var directoryIndex = 'index.html';
    if (!cacheName && directoryIndex) {
      urlWithoutIgnoredParameters = addDirectoryIndex(urlWithoutIgnoredParameters, directoryIndex);
      cacheName = AbsoluteUrlToCacheName[urlWithoutIgnoredParameters];
    }

    var navigateFallback = '';
    // Ideally, this would check for event.request.mode === 'navigate', but that is not widely
    // supported yet:
    // https://code.google.com/p/chromium/issues/detail?id=540967
    // https://bugzilla.mozilla.org/show_bug.cgi?id=1209081
    if (!cacheName && navigateFallback && event.request.headers.has('accept') &&
        event.request.headers.get('accept').includes('text/html') &&
        /* eslint-disable quotes, comma-spacing */
        isPathWhitelisted([], event.request.url)) {
        /* eslint-enable quotes, comma-spacing */
      var navigateFallbackUrl = new URL(navigateFallback, self.location);
      cacheName = AbsoluteUrlToCacheName[navigateFallbackUrl.toString()];
    }

    if (cacheName) {
      event.respondWith(
        // Rely on the fact that each cache we manage should only have one entry, and return that.
        caches.open(cacheName).then(function(cache) {
          return cache.keys().then(function(keys) {
            return cache.match(keys[0]).then(function(response) {
              if (response) {
                return response;
              }
              // If for some reason the response was deleted from the cache,
              // raise and exception and fall back to the fetch() triggered in the catch().
              throw Error('The cache ' + cacheName + ' is empty.');
            });
          });
        }).catch(function(e) {
          console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
          return fetch(event.request);
        })
      );
    }
  }
});




