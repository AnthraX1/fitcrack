"use strict";var precacheConfig=[["index.html","ef5ca8c691e409d27ddd99ba893f19d6"],["service-worker.js","e897172e4e99396f820720772fe178a5"],["static/configuration.js","85d6dda12c88391e482c20da4a6ba342"],["static/css/app.3c46327495e3577c7df4fc785acf9fc1.css","56ca3f19cc078916d5a08a71ccf37902"],["static/js/0.9771892a44aba08c0650.js","f74f7dd293d5a5d857e1cc1c73fae49c"],["static/js/1.d2c20fd0f5143aa35997.js","81d4cf578209f30b8cb90c6fa4d513c4"],["static/js/10.5073af2ba0f66c60fd5e.js","aa76682babb22a5946d07570da6ede9d"],["static/js/11.af9e7293105a4749650a.js","3a6e77c6a0388b22feb9b3f7ddeb791a"],["static/js/12.38046021e4adea626af7.js","c8a1756b9c1eb4ec4ef7c9a541e85e9f"],["static/js/13.2669c4cbb07319340ef2.js","3cbc0da66894228d5bb4844cf0e685d2"],["static/js/14.ec493bea835522e186fb.js","9f7ddd6bb87cf915fb813d12662c7dfa"],["static/js/15.e3f9eb1e57d7c2bfeb07.js","555bf8649ae01422638a4ab71beaa026"],["static/js/16.9844d3d1e422babd66a3.js","7eff45231b32ef80bb1468769ee018ea"],["static/js/17.e9ac2c471afaba279fda.js","ad4cce3bd422eacadb7f1792a4c81545"],["static/js/18.bbd90f1c60d80fc0a618.js","5452826c0b1049c1f7955fa476078c0e"],["static/js/19.c6468d3ae3f46396779b.js","899d1733424523ed283c55e21e1746cd"],["static/js/2.e6311ec35aa4094386e1.js","688f628f8697bc7814b8dba88f39c087"],["static/js/20.be512f2f87be3992121c.js","34b2fdd232bdb6eee3aa22dc6c80e3c4"],["static/js/21.fa69e30b2cf1dfaa596f.js","64eae79631684013ef3f3af5ed6b0922"],["static/js/22.28eff129c9fb4dcefd9a.js","a178850f2acc5436935416b0a61bf40b"],["static/js/23.3568e4ec4b83d68c8811.js","3957a7a43e3218fccdc233c17dda710e"],["static/js/24.5b043a7e313cc61f77f0.js","4d7b8e06a0353a64f8eaaee5247a8279"],["static/js/25.4596824c72d92b6a0be4.js","768d23c5fccc0e46556ab9b08568aa73"],["static/js/26.0008b49ba3f51a05a8b8.js","06d77f0344d1702cc1b0cdce34e7679c"],["static/js/3.0adb3a3fe4942c011c91.js","ae48f64ebacc8112ffd434d4aa889c3c"],["static/js/4.061a126e12b375306ba6.js","28d4487401bcd6060e39439fd39bda35"],["static/js/5.f005f62a4d49df6170e6.js","9c2bcd1ba258b6492d5e2eeed530c4fb"],["static/js/6.6b26715de0fa41663c9f.js","f17dc8f6abbe52c2a1427314f562b7ee"],["static/js/7.b9a9b9d266e0d6f10d10.js","f7067d7586c7255836043d1c4cfcef21"],["static/js/8.ee0cf633408203192f96.js","911c651f0d79b0d508e51df425941d34"],["static/js/9.35209219714947770bda.js","eee50acaa4463e3e3888fea440cf656a"],["static/js/app.1c12741d228c9ca79ce8.js","98f692d994d9f5eff624a125845f241f"],["static/js/manifest.8d5c953c1e2cbe587eee.js","5832f5f357bef0d91f778aa8c1f09234"],["static/js/vendor.3e027fd77623f1ce3ecd.js","301681eab1c8f7a6a7ef30ed45a7c8c1"]],cacheName="sw-precache-v3-Fitcrack-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,a){var c=new URL(e);return"/"===c.pathname.slice(-1)&&(c.pathname+=a),c.toString()},cleanResponse=function(e){return e.redirected?("body"in e?Promise.resolve(e.body):e.blob()).then(function(a){return new Response(a,{headers:e.headers,status:e.status,statusText:e.statusText})}):Promise.resolve(e)},createCacheKey=function(e,a,c,t){var s=new URL(e);return t&&s.pathname.match(t)||(s.search+=(s.search?"&":"")+encodeURIComponent(a)+"="+encodeURIComponent(c)),s.toString()},isPathWhitelisted=function(e,a){if(0===e.length)return!0;var c=new URL(a).pathname;return e.some(function(e){return c.match(e)})},stripIgnoredUrlParameters=function(e,a){var c=new URL(e);return c.hash="",c.search=c.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return a.every(function(a){return!a.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),c.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var a=e[0],c=e[1],t=new URL(a,self.location),s=createCacheKey(t,hashParamName,c,!1);return[t.toString(),s]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(a){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(c){if(!a.has(c)){var t=new Request(c,{credentials:"same-origin"});return fetch(t).then(function(a){if(!a.ok)throw new Error("Request for "+c+" returned a response with status "+a.status);return cleanResponse(a).then(function(a){return e.put(c,a)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var a=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(c){return Promise.all(c.map(function(c){if(!a.has(c.url))return e.delete(c)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var a,c=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching);(a=urlsToCacheKeys.has(c))||(c=addDirectoryIndex(c,"index.html"),a=urlsToCacheKeys.has(c));0,a&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(c)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(a){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,a),fetch(e.request)}))}});