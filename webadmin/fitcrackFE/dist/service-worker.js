"use strict";var precacheConfig=[["index.html","b1479f15a43bf8499b1f4859d57d702d"],["service-worker.js","91fc8d50e31b4ccb34b5687152df5f62"],["static/configuration.js","9cec3b516ef4631f7d3af53e7bfb34fa"],["static/css/app.3c46327495e3577c7df4fc785acf9fc1.css","56ca3f19cc078916d5a08a71ccf37902"],["static/js/0.c0b35093418c9f923d5e.js","a9ce7490cb54b93d9de50f2a7ce0bf57"],["static/js/1.0746113b05ed27fd7b06.js","dd0b310d61bb6064a185422fecc640ed"],["static/js/10.2f05cf7d3791d5a32b77.js","20bf0f9fcc2e67518776cececf0134b8"],["static/js/11.224722992ac67a1214a8.js","f8e39f7d90cfcda3ef9b709a4aebd4b4"],["static/js/12.391983a2d92d6236a641.js","97a6f2edf09fade57565bea20e8d9cbd"],["static/js/13.cbf800b7022b973ad380.js","82f0c65c9670d8d61508522f6b1f2074"],["static/js/14.180849bf855251588ae9.js","7e95fb26d06f3d3b30f8aa0a0df492ea"],["static/js/15.0f9dfeb13b305f376878.js","679339ef31af1f136c720556f30da5f0"],["static/js/16.52bf58f758e9d2e30dac.js","47bd4fb420f6137d8db34b17ec5cb01d"],["static/js/17.3b6f9269f1b305aa2950.js","e0a30d7cf8174bd457c8d1b9e36cea2f"],["static/js/18.af8974777491f17facdd.js","f0d7ae957e40950ed562588e3d13f030"],["static/js/19.23555d03701ffc4fbbbe.js","6e369b36cddcc7dc923f16bfe42644eb"],["static/js/2.4e6530874c6675961283.js","95d34c9feaea959cb84265e3b0fad0d7"],["static/js/20.1c9f97a6695e951e4123.js","131b8074c661c94667d87ad48a586c8d"],["static/js/21.510cd0608d06b6c58cc2.js","a87f25ff0b137b921898e485b1167ae3"],["static/js/22.58f081eb064e2ef99c79.js","8dfb1bee4d15a25de47144e9645d8f87"],["static/js/23.aceed3f69e52c155c24c.js","7be3024fefbe5ff5b9c171941663c007"],["static/js/24.3e9a2619a44b6bb88d59.js","54370fcc4018c48e2a66e6dd247c7ef7"],["static/js/25.ddc65c1cc38c5a73cafd.js","9ddf26d0303ae84e597353c3dda5ff5f"],["static/js/26.97a45593c3653c4102f0.js","032b55886c8d28a504a0d2a86d7535a0"],["static/js/3.fec3893da151043d5a66.js","bf9e10ee1c3187875c903461781b089a"],["static/js/4.85f0a8bb4948c8f5cf8f.js","f05596479f0d1a79b5ef09ec4ce06245"],["static/js/5.a51595ec6ede3019089d.js","dabf7aec8bb4526a418735086baf5867"],["static/js/6.d2b8da9bc6f144ffcd29.js","cd16ff53e88b80ed4406e2a54f4bc697"],["static/js/7.394b45eefe24fbcbc848.js","889133093da5bf83dad2f4d59886a52e"],["static/js/8.f546801a7f793dbd4b4b.js","e0c2b700787f9f32d3b29fdf4aafb2f0"],["static/js/9.acbea0bc500c86281ede.js","5512371b89d26aa32190d9e198ec646d"],["static/js/app.c280ef14386be1424adf.js","3e9b0222ec4bf839b39429b7ab593fdf"],["static/js/manifest.37724e0e29af386c0528.js","f834cab199675331eb26e862c6cebae2"],["static/js/vendor.fa07485e7cb71d6297a5.js","d57ecea99e7094ed26f978e3a32e8ff4"]],cacheName="sw-precache-v3-Fitcrack-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,a){var c=new URL(e);return"/"===c.pathname.slice(-1)&&(c.pathname+=a),c.toString()},cleanResponse=function(e){return e.redirected?("body"in e?Promise.resolve(e.body):e.blob()).then(function(a){return new Response(a,{headers:e.headers,status:e.status,statusText:e.statusText})}):Promise.resolve(e)},createCacheKey=function(e,a,c,t){var s=new URL(e);return t&&s.pathname.match(t)||(s.search+=(s.search?"&":"")+encodeURIComponent(a)+"="+encodeURIComponent(c)),s.toString()},isPathWhitelisted=function(e,a){if(0===e.length)return!0;var c=new URL(a).pathname;return e.some(function(e){return c.match(e)})},stripIgnoredUrlParameters=function(e,a){var c=new URL(e);return c.hash="",c.search=c.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return a.every(function(a){return!a.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),c.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var a=e[0],c=e[1],t=new URL(a,self.location),s=createCacheKey(t,hashParamName,c,!1);return[t.toString(),s]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(a){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(c){if(!a.has(c)){var t=new Request(c,{credentials:"same-origin"});return fetch(t).then(function(a){if(!a.ok)throw new Error("Request for "+c+" returned a response with status "+a.status);return cleanResponse(a).then(function(a){return e.put(c,a)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var a=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(c){return Promise.all(c.map(function(c){if(!a.has(c.url))return e.delete(c)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var a,c=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching);(a=urlsToCacheKeys.has(c))||(c=addDirectoryIndex(c,"index.html"),a=urlsToCacheKeys.has(c));0,a&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(c)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(a){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,a),fetch(e.request)}))}});