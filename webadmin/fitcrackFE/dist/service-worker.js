"use strict";var precacheConfig=[["index.html","9559478489c55bb8836f657f02b48e0a"],["service-worker.js","46d324feb46401a5c890d1820593d4aa"],["static/configuration.js","576483399c1d91ff476c0a09f1275313"],["static/css/app.653efa95f7f4a078c26ed7e407e26172.css","aa25af0fbbb571e734e8484f15a895f0"],["static/js/0.5ad1ce96d14123a8789a.js","904bebdaadabd2ea503a9c59ff3e8a75"],["static/js/1.d272ddad094f18fc1a91.js","3dd85210e1fbdda17fc0e3e2b01d5f12"],["static/js/10.9ae4a71513df0f6554a8.js","d33c43e1faf83000fe0f351ebd6cff32"],["static/js/11.75557fad4408c6ecdc3b.js","7d8b73529e6d7961d430b57ddc3e2066"],["static/js/12.034ded9c45b414af09e4.js","73be2752b69a1b0f0e4cc8a3fec00e02"],["static/js/13.e1ff15c3d524c05f38c6.js","dab7fc014e1d881c48e150a4eec5b187"],["static/js/14.bf0054e67868f1a0f0a0.js","4bac5530d152943c3de88bdc6cdee3a5"],["static/js/15.a5f7d681df174b75f183.js","dbe2c8c7bdf8dcc04171f2b25cc6143d"],["static/js/16.fd6dc3a7763fa146e7c4.js","7b1a251c0c7385738d686eaad211d882"],["static/js/17.36a4023691c8aa3bc7c0.js","16b9909e0d9549bae60191e4fc164655"],["static/js/18.7a9b1ce08b9c1f7905d4.js","9acca06b8e325e1f70dd4c7576f6b4c3"],["static/js/19.20edd23a38da4dc2f88f.js","a70414b07530ec2a6eff160349e1bc16"],["static/js/2.7cd19badbdacfcd7b65b.js","587dcc5135be168685fd54db6f349d31"],["static/js/20.8f4fd5787211a35cb666.js","20b2175b95cf27983c81ccdf81df25f1"],["static/js/21.78ed6ee2768c3f5e75f0.js","b57706a497e4333f7ce9db7c9723fd50"],["static/js/22.73aa9ea95185979aac87.js","ad55b7396da2f0bcf25099712bb796f8"],["static/js/23.056b58c7619ccf4f2985.js","5f4bc7fa15abd763c95eba79c7f27913"],["static/js/24.350f453bf89892b86271.js","c316ed7d75dfad076da9d30a44140d0e"],["static/js/25.2e2fb40f3a56ff7ec3d7.js","43231ec1fa5fbe3b3d19e92a7ed5905e"],["static/js/26.b3a06c517b0a0e629b89.js","87f660ffe02be2cf13d7b2e0b451a52b"],["static/js/27.33d11118c2c16dd9321c.js","31c88da054507737198a7bfe8335697c"],["static/js/28.5b737a5ff48ed976f233.js","72fac16a0651990676f40784fabdbcad"],["static/js/29.aa1fce2b5178db8ef5ee.js","06cb32f1147da563edccc81b5f06604a"],["static/js/3.5f33371752a3a8a1f2b1.js","6841ce740d4036e542d092eabeeae796"],["static/js/30.36fd0f95eb2e1e0a2e2c.js","0efe746d6ee37f1ffaf0c23781a65d09"],["static/js/31.8b3e5b4f1be5ee897db1.js","a64348d1de4aad6b61111ef19a1ec85a"],["static/js/4.1eb584609d0e023da7cd.js","a6537601fb4b05135b95a8245a90791a"],["static/js/5.16e4ee33bc8b9ccb3d9a.js","9a12e585b4d059615d1f576c5bbaaa24"],["static/js/6.67982cf48b681aed80f3.js","842017bf329ca7b852d90c72a541c01f"],["static/js/7.2403aa08f117a6a5f5d7.js","e51b80ef68e9e288b20fea363f27b2a9"],["static/js/8.603ded210236823a3d20.js","e7a4ac226391700493bb6d31dcd29128"],["static/js/9.b904f65727e12a5575aa.js","a4f2a1e8225d4f490656752e6ba1a7f8"],["static/js/app.d673ebd477014927b483.js","fcbe88ab92d8b7f6af0ab2e3e9070f42"],["static/js/manifest.660853ab021d3280e4d7.js","3eecaedcd1cab272efa8a212df8c5f3b"],["static/js/vendor.225581580a18c85684aa.js","9f484b73127083b6899ec4c968da8b95"]],cacheName="sw-precache-v3-Fitcrack-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,a){var c=new URL(e);return"/"===c.pathname.slice(-1)&&(c.pathname+=a),c.toString()},cleanResponse=function(e){return e.redirected?("body"in e?Promise.resolve(e.body):e.blob()).then(function(a){return new Response(a,{headers:e.headers,status:e.status,statusText:e.statusText})}):Promise.resolve(e)},createCacheKey=function(e,a,c,t){var s=new URL(e);return t&&s.pathname.match(t)||(s.search+=(s.search?"&":"")+encodeURIComponent(a)+"="+encodeURIComponent(c)),s.toString()},isPathWhitelisted=function(e,a){if(0===e.length)return!0;var c=new URL(a).pathname;return e.some(function(e){return c.match(e)})},stripIgnoredUrlParameters=function(e,a){var c=new URL(e);return c.hash="",c.search=c.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return a.every(function(a){return!a.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),c.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var a=e[0],c=e[1],t=new URL(a,self.location),s=createCacheKey(t,hashParamName,c,!1);return[t.toString(),s]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(a){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(c){if(!a.has(c)){var t=new Request(c,{credentials:"same-origin"});return fetch(t).then(function(a){if(!a.ok)throw new Error("Request for "+c+" returned a response with status "+a.status);return cleanResponse(a).then(function(a){return e.put(c,a)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var a=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(c){return Promise.all(c.map(function(c){if(!a.has(c.url))return e.delete(c)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var a,c=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching);(a=urlsToCacheKeys.has(c))||(c=addDirectoryIndex(c,"index.html"),a=urlsToCacheKeys.has(c));0,a&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(c)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(a){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,a),fetch(e.request)}))}});