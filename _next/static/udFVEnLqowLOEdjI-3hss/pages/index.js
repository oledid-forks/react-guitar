(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{"/QYh":function(e,t,r){"use strict";var n=r("O5Wi"),o=r("zQIG"),a=r("8mBC");function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){var r;if("undefined"===typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(r=function(e,t){if(!e)return;if("string"===typeof e)return u(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return u(e,t)}(e))||t&&e&&"number"===typeof e.length){r&&(e=r);var n=0,o=function(){};return{s:o,n:function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}},e:function(e){throw e},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,i=!0,l=!1;return{s:function(){r=e[Symbol.iterator]()},n:function(){var e=r.next();return i=e.done,e},e:function(e){l=!0,a=e},f:function(){try{i||null==r.return||r.return()}finally{if(l)throw a}}}}function u(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}t.__esModule=!0,t.default=void 0;var c,s=(c=r("ERkP"))&&c.__esModule?c:{default:c},d=r("D3Vl"),f=r("4smK");var h=[],m=[],y=!1;function g(e){var t=e(),r={loading:!0,loaded:null,error:null};return r.promise=t.then((function(e){return r.loading=!1,r.loaded=e,e})).catch((function(e){throw r.loading=!1,r.error=e,e})),r}function b(e){var t={loading:!1,loaded:{},error:null},r=[];try{Object.keys(e).forEach((function(n){var o=g(e[n]);o.loading?t.loading=!0:(t.loaded[n]=o.loaded,t.error=o.error),r.push(o.promise),o.promise.then((function(e){t.loaded[n]=e})).catch((function(e){t.error=e}))}))}catch(n){t.error=n}return t.promise=Promise.all(r).then((function(e){return t.loading=!1,e})).catch((function(e){throw t.loading=!1,e})),t}function v(e,t){return s.default.createElement(function(e){return e&&e.__esModule?e.default:e}(e),t)}function k(e,t){var r=Object.assign({loader:null,loading:null,delay:200,timeout:null,render:v,webpack:null,modules:null},t),n=null;function o(){if(!n){var t=new w(e,r);n={getCurrentValue:t.getCurrentValue.bind(t),subscribe:t.subscribe.bind(t),retry:t.retry.bind(t),promise:t.promise.bind(t)}}return n.promise()}if(!y&&"function"===typeof r.webpack){var a=r.webpack();m.push((function(e){var t,r=p(a);try{for(r.s();!(t=r.n()).done;){var n=t.value;if(-1!==e.indexOf(n))return o()}}catch(i){r.e(i)}finally{r.f()}}))}var i=function(e,t){o();var a=s.default.useContext(f.LoadableContext),i=(0,d.useSubscription)(n);return s.default.useImperativeHandle(t,(function(){return{retry:n.retry}}),[]),a&&Array.isArray(r.modules)&&r.modules.forEach((function(e){a(e)})),s.default.useMemo((function(){return i.loading||i.error?s.default.createElement(r.loading,{isLoading:i.loading,pastDelay:i.pastDelay,timedOut:i.timedOut,error:i.error,retry:n.retry}):i.loaded?r.render(i.loaded,e):null}),[e,i])};return i.preload=function(){return o()},i.displayName="LoadableComponent",s.default.forwardRef(i)}var w=function(){function e(t,r){o(this,e),this._loadFn=t,this._opts=r,this._callbacks=new Set,this._delay=null,this._timeout=null,this.retry()}return a(e,[{key:"promise",value:function(){return this._res.promise}},{key:"retry",value:function(){var e=this;this._clearTimeouts(),this._res=this._loadFn(this._opts.loader),this._state={pastDelay:!1,timedOut:!1};var t=this._res,r=this._opts;t.loading&&("number"===typeof r.delay&&(0===r.delay?this._state.pastDelay=!0:this._delay=setTimeout((function(){e._update({pastDelay:!0})}),r.delay)),"number"===typeof r.timeout&&(this._timeout=setTimeout((function(){e._update({timedOut:!0})}),r.timeout))),this._res.promise.then((function(){e._update({}),e._clearTimeouts()})).catch((function(t){e._update({}),e._clearTimeouts()})),this._update({})}},{key:"_update",value:function(e){this._state=l(l({},this._state),{},{error:this._res.error,loaded:this._res.loaded,loading:this._res.loading},e),this._callbacks.forEach((function(e){return e()}))}},{key:"_clearTimeouts",value:function(){clearTimeout(this._delay),clearTimeout(this._timeout)}},{key:"getCurrentValue",value:function(){return this._state}},{key:"subscribe",value:function(e){var t=this;return this._callbacks.add(e),function(){t._callbacks.delete(e)}}}]),e}();function E(e){return k(g,e)}function _(e,t){for(var r=[];e.length;){var n=e.pop();r.push(n(t))}return Promise.all(r).then((function(){if(e.length)return _(e,t)}))}E.Map=function(e){if("function"!==typeof e.render)throw new Error("LoadableMap requires a `render(loaded, props)` function");return k(b,e)},E.preloadAll=function(){return new Promise((function(e,t){_(h).then(e,t)}))},E.preloadReady=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return new Promise((function(t){var r=function(){return y=!0,t()};_(m,e).then(r,r)}))},window.__NEXT_PRELOADREADY=E.preloadReady;var G=E;t.default=G},"23aj":function(e,t,r){"use strict";r.r(t),r.d(t,"default",(function(){return b}));var n=r("ERkP"),o=r.n(n),a=r("ysqo"),i=r.n(a);function l(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,e.__proto__=t}var p={templateTitle:"",noindex:!1,nofollow:!1,defaultOpenGraphImageWidth:0,defaultOpenGraphImageHeight:0,defaultOpenGraphVideoWidth:0,defaultOpenGraphVideoHeight:0},u=function(e){var t=[];e.titleTemplate&&(p.templateTitle=e.titleTemplate);var r="";e.title&&(r=e.title,p.templateTitle&&(r=p.templateTitle.replace(/%s/g,(function(){return r}))),t.push(o.a.createElement("title",{key:"title"},r)));var n=e.noindex||p.noindex||e.dangerouslySetAllPagesToNoIndex,a=e.nofollow||p.nofollow||e.dangerouslySetAllPagesToNoFollow;if(n||a?(e.dangerouslySetAllPagesToNoIndex&&(p.noindex=!0),e.dangerouslySetAllPagesToNoFollow&&(p.nofollow=!0),t.push(o.a.createElement("meta",{key:"robots",name:"robots",content:(n?"noindex":"index")+","+(a?"nofollow":"follow")})),t.push(o.a.createElement("meta",{key:"googlebot",name:"googlebot",content:(n?"noindex":"index")+","+(a?"nofollow":"follow")}))):(t.push(o.a.createElement("meta",{key:"robots",name:"robots",content:"index,follow"})),t.push(o.a.createElement("meta",{key:"googlebot",name:"googlebot",content:"index,follow"}))),e.description&&t.push(o.a.createElement("meta",{key:"description",name:"description",content:e.description})),e.mobileAlternate&&t.push(o.a.createElement("link",{rel:"alternate",key:"mobileAlternate",media:e.mobileAlternate.media,href:e.mobileAlternate.href})),e.languageAlternates&&e.languageAlternates.length>0&&e.languageAlternates.forEach((function(e){t.push(o.a.createElement("link",{rel:"alternate",key:"languageAlternate-"+e.hrefLang,hrefLang:e.hrefLang,href:e.href}))})),e.twitter&&(e.twitter.cardType&&t.push(o.a.createElement("meta",{key:"twitter:card",name:"twitter:card",content:e.twitter.cardType})),e.twitter.site&&t.push(o.a.createElement("meta",{key:"twitter:site",name:"twitter:site",content:e.twitter.site})),e.twitter.handle&&t.push(o.a.createElement("meta",{key:"twitter:creator",name:"twitter:creator",content:e.twitter.handle}))),e.facebook&&e.facebook.appId&&t.push(o.a.createElement("meta",{key:"fb:app_id",property:"fb:app_id",content:e.facebook.appId})),e.openGraph){if((e.openGraph.url||e.canonical)&&t.push(o.a.createElement("meta",{key:"og:url",property:"og:url",content:e.openGraph.url||e.canonical})),e.openGraph.type){var i=e.openGraph.type.toLowerCase();t.push(o.a.createElement("meta",{key:"og:type",property:"og:type",content:i})),"profile"===i&&e.openGraph.profile?(e.openGraph.profile.firstName&&t.push(o.a.createElement("meta",{key:"profile:first_name",property:"profile:first_name",content:e.openGraph.profile.firstName})),e.openGraph.profile.lastName&&t.push(o.a.createElement("meta",{key:"profile:last_name",property:"profile:last_name",content:e.openGraph.profile.lastName})),e.openGraph.profile.username&&t.push(o.a.createElement("meta",{key:"profile:username",property:"profile:username",content:e.openGraph.profile.username})),e.openGraph.profile.gender&&t.push(o.a.createElement("meta",{key:"profile:gender",property:"profile:gender",content:e.openGraph.profile.gender}))):"book"===i&&e.openGraph.book?(e.openGraph.book.authors&&e.openGraph.book.authors.length&&e.openGraph.book.authors.forEach((function(e,r){t.push(o.a.createElement("meta",{key:"book:author:0"+r,property:"book:author",content:e}))})),e.openGraph.book.isbn&&t.push(o.a.createElement("meta",{key:"book:isbn",property:"book:isbn",content:e.openGraph.book.isbn})),e.openGraph.book.releaseDate&&t.push(o.a.createElement("meta",{key:"book:release_date",property:"book:release_date",content:e.openGraph.book.releaseDate})),e.openGraph.book.tags&&e.openGraph.book.tags.length&&e.openGraph.book.tags.forEach((function(e,r){t.push(o.a.createElement("meta",{key:"book:tag:0"+r,property:"book:tag",content:e}))}))):"article"===i&&e.openGraph.article?(e.openGraph.article.publishedTime&&t.push(o.a.createElement("meta",{key:"article:published_time",property:"article:published_time",content:e.openGraph.article.publishedTime})),e.openGraph.article.modifiedTime&&t.push(o.a.createElement("meta",{key:"article:modified_time",property:"article:modified_time",content:e.openGraph.article.modifiedTime})),e.openGraph.article.expirationTime&&t.push(o.a.createElement("meta",{key:"article:expiration_time",property:"article:expiration_time",content:e.openGraph.article.expirationTime})),e.openGraph.article.authors&&e.openGraph.article.authors.length&&e.openGraph.article.authors.forEach((function(e,r){t.push(o.a.createElement("meta",{key:"article:author:0"+r,property:"article:author",content:e}))})),e.openGraph.article.section&&t.push(o.a.createElement("meta",{key:"article:section",property:"article:section",content:e.openGraph.article.section})),e.openGraph.article.tags&&e.openGraph.article.tags.length&&e.openGraph.article.tags.forEach((function(e,r){t.push(o.a.createElement("meta",{key:"article:tag:0"+r,property:"article:tag",content:e}))}))):"video.movie"!==i&&"video.episode"!==i&&"video.tv_show"!==i&&"video.other"!==i||!e.openGraph.video||(e.openGraph.video.actors&&e.openGraph.video.actors.length&&e.openGraph.video.actors.forEach((function(e,r){e.profile&&t.push(o.a.createElement("meta",{key:"video:actor:0"+r,property:"video:actor",content:e.profile})),e.role&&t.push(o.a.createElement("meta",{key:"video:actor:role:0"+r,property:"video:actor:role",content:e.role}))})),e.openGraph.video.directors&&e.openGraph.video.directors.length&&e.openGraph.video.directors.forEach((function(e,r){t.push(o.a.createElement("meta",{key:"video:director:0"+r,property:"video:director",content:e}))})),e.openGraph.video.writers&&e.openGraph.video.writers.length&&e.openGraph.video.writers.forEach((function(e,r){t.push(o.a.createElement("meta",{key:"video:writer:0"+r,property:"video:writer",content:e}))})),e.openGraph.video.duration&&t.push(o.a.createElement("meta",{key:"video:duration",property:"video:duration",content:e.openGraph.video.duration.toString()})),e.openGraph.video.releaseDate&&t.push(o.a.createElement("meta",{key:"video:release_date",property:"video:release_date",content:e.openGraph.video.releaseDate})),e.openGraph.video.tags&&e.openGraph.video.tags.length&&e.openGraph.video.tags.forEach((function(e,r){t.push(o.a.createElement("meta",{key:"video:tag:0"+r,property:"video:tag",content:e}))})),e.openGraph.video.series&&t.push(o.a.createElement("meta",{key:"video:series",property:"video:series",content:e.openGraph.video.series})))}(e.openGraph.title||e.title)&&t.push(o.a.createElement("meta",{key:"og:title",property:"og:title",content:e.openGraph.title||r})),(e.openGraph.description||e.description)&&t.push(o.a.createElement("meta",{key:"og:description",property:"og:description",content:e.openGraph.description||e.description})),e.defaultOpenGraphImageWidth&&(p.defaultOpenGraphImageWidth=e.defaultOpenGraphImageWidth),e.defaultOpenGraphImageHeight&&(p.defaultOpenGraphImageHeight=e.defaultOpenGraphImageHeight),e.openGraph.images&&e.openGraph.images.length&&e.openGraph.images.forEach((function(e,r){t.push(o.a.createElement("meta",{key:"og:image:0"+r,property:"og:image",content:e.url})),e.alt&&t.push(o.a.createElement("meta",{key:"og:image:alt0"+r,property:"og:image:alt",content:e.alt})),e.width?t.push(o.a.createElement("meta",{key:"og:image:width0"+r,property:"og:image:width",content:e.width.toString()})):p.defaultOpenGraphImageWidth&&t.push(o.a.createElement("meta",{key:"og:image:width0"+r,property:"og:image:width",content:p.defaultOpenGraphImageWidth.toString()})),e.height?t.push(o.a.createElement("meta",{key:"og:image:height"+r,property:"og:image:height",content:e.height.toString()})):p.defaultOpenGraphImageHeight&&t.push(o.a.createElement("meta",{key:"og:image:height"+r,property:"og:image:height",content:p.defaultOpenGraphImageHeight.toString()}))})),e.defaultOpenGraphVideoWidth&&(p.defaultOpenGraphVideoWidth=e.defaultOpenGraphVideoWidth),e.defaultOpenGraphVideoHeight&&(p.defaultOpenGraphVideoHeight=e.defaultOpenGraphVideoHeight),e.openGraph.videos&&e.openGraph.videos.length&&e.openGraph.videos.forEach((function(e,r){t.push(o.a.createElement("meta",{key:"og:video:0"+r,property:"og:video",content:e.url})),e.alt&&t.push(o.a.createElement("meta",{key:"og:video:alt0"+r,property:"og:video:alt",content:e.alt})),e.width?t.push(o.a.createElement("meta",{key:"og:video:width0"+r,property:"og:video:width",content:e.width.toString()})):p.defaultOpenGraphVideoWidth&&t.push(o.a.createElement("meta",{key:"og:video:width0"+r,property:"og:video:width",content:p.defaultOpenGraphVideoWidth.toString()})),e.height?t.push(o.a.createElement("meta",{key:"og:video:height"+r,property:"og:video:height",content:e.height.toString()})):p.defaultOpenGraphVideoHeight&&t.push(o.a.createElement("meta",{key:"og:video:height"+r,property:"og:video:height",content:p.defaultOpenGraphVideoHeight.toString()}))})),e.openGraph.locale&&t.push(o.a.createElement("meta",{key:"og:locale",property:"og:locale",content:e.openGraph.locale})),e.openGraph.site_name&&t.push(o.a.createElement("meta",{key:"og:site_name",property:"og:site_name",content:e.openGraph.site_name}))}return e.canonical&&t.push(o.a.createElement("link",{rel:"canonical",href:e.canonical,key:"canonical"})),e.additionalMetaTags&&e.additionalMetaTags.length>0&&e.additionalMetaTags.forEach((function(e){t.push(o.a.createElement("meta",Object.assign({key:e.name?e.name:e.property},e)))})),t},c=(n.Component,function(e){function t(){return e.apply(this,arguments)||this}return l(t,e),t.prototype.render=function(){var e=this.props,t=e.title,r=e.noindex,n=void 0!==r&&r,a=e.nofollow,l=e.description,p=e.canonical,c=e.openGraph,s=e.facebook,d=e.twitter,f=e.additionalMetaTags,h=e.titleTemplate,m=e.mobileAlternate,y=e.languageAlternates;return o.a.createElement(i.a,null,u({title:t,noindex:n,nofollow:a,description:l,canonical:p,facebook:s,openGraph:c,additionalMetaTags:f,twitter:d,titleTemplate:h,mobileAlternate:m,languageAlternates:y}))},t}(n.Component)),s=r("AU4o"),d=r.n(s),f=o.a.createElement;function h(e){return f("a",{href:e.href,target:e.target,className:"mx-2 border-2 hover:bg-blue-400 text-white font-bold py-1 px-2 rounded"},e.label)}var m=o.a.createElement,y=d()((function(){return Promise.all([r.e(5),r.e(4),r.e(3),r.e(11)]).then(r.bind(null,"GE8T"))}),{ssr:!1,loadableGenerated:{webpack:function(){return["GE8T"]},modules:["../components/Demo"]}}),g="".concat("https://react-guitar.com","/logo.png");function b(){var e="React Guitar",t="A beautiful and flexible guitar component for React.";return m("div",{className:"text-gray-800 font-sans min-h-screen flex flex-col items-center justify-center m-auto"},m(i.a,null,m("link",{rel:"icon",href:g})),m(c,{title:e,description:t,openGraph:{url:"https://react-guitar.com",title:e,description:t,images:[{url:"".concat("https://react-guitar.com","/social.png"),alt:"".concat(e," - ").concat(t)}],site_name:"react-guitar.com"}}),m("header",{className:"shadow-inner w-full text-center flex flex-col items-center bg-blue-500 text-white p-6 sm:p-8"},m("h1",{className:"slide-up text-3xl sm:text-5xl font-bold flex items-center"},m("img",{className:"h-6 w-6 sm:h-10 sm:w-10 mr-2 sm:mr-3",src:g})," ",e),m("p",{className:"slide-up text-lg sm:text-xl mt-2"},t),m("div",{className:"slide-up flex items-center justify-center mt-4 sm:mt-6"},m(h,{href:"https://github.com/4lejandrito/react-guitar",label:"View on GitHub"}),m(h,{href:"storybook",label:"Storybook",target:"_blank"}))),m("main",{className:"flex-grow w-full flex flex-col items-center justify-center max-w-screen-xl"},m(y,null)),m("footer",{className:"w-full text-center bg-gray-100 text-gray-600 p-6 border-t"},"Made with \u2764\ufe0f and \ud83c\udfb6 by"," ",m("a",{className:"hover:underline text-blue-500",href:"https://github.com/4lejandrito"},"4lejandrito")))}},"4smK":function(e,t,r){"use strict";var n;t.__esModule=!0,t.LoadableContext=void 0;var o=((n=r("ERkP"))&&n.__esModule?n:{default:n}).default.createContext(null);t.LoadableContext=o},"8mBC":function(e,t){function r(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}e.exports=function(e,t,n){return t&&r(e.prototype,t),n&&r(e,n),e}},AU4o:function(e,t,r){"use strict";var n=r("O5Wi");function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}t.__esModule=!0,t.noSSR=c,t.default=function(e,t){var r=l.default,n={loading:function(e){e.error,e.isLoading;return e.pastDelay,null}};e instanceof Promise?n.loader=function(){return e}:"function"===typeof e?n.loader=e:"object"===typeof e&&(n=a(a({},n),e));if(n=a(a({},n),t),"object"===typeof e&&!(e instanceof Promise)&&(e.render&&(n.render=function(t,r){return e.render(r,t)}),e.modules)){r=l.default.Map;var o={},i=e.modules();Object.keys(i).forEach((function(e){var t=i[e];"function"!==typeof t.then?o[e]=t:o[e]=function(){return t.then((function(e){return e.default||e}))}})),n.loader=o}n.loadableGenerated&&delete(n=a(a({},n),n.loadableGenerated)).loadableGenerated;if("boolean"===typeof n.ssr){if(!n.ssr)return delete n.ssr,c(r,n);delete n.ssr}return r(n)};var i=p(r("ERkP")),l=p(r("/QYh"));function p(e){return e&&e.__esModule?e:{default:e}}var u=!1;function c(e,t){if(delete t.webpack,delete t.modules,!u)return e(t);var r=t.loading;return function(){return i.default.createElement(r,{error:null,isLoading:!0,pastDelay:!1,timedOut:!1})}}},D7XE:function(e,t,r){var n=r("cHE3");e.exports=function(e,t){if(e){if("string"===typeof e)return n(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?n(e,t):void 0}}},DSo7:function(e,t){e.exports=function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}},"I/kN":function(e,t,r){var n=r("w7mb");e.exports=function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&n(e,t)}},J9Yr:function(e,t,r){"use strict";var n=r("zQIG"),o=r("N7I1"),a=r("8mBC"),i=r("I/kN"),l=r("cMav"),p=r("pSQP"),u=r("iN+R");function c(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=p(e);if(t){var o=p(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return l(this,r)}}t.__esModule=!0,t.default=void 0;var s=r("ERkP"),d=!1;t.default=function(){var e,t=new Set;function r(r){e=r.props.reduceComponentsToState(u(t),r.props),r.props.handleStateChange&&r.props.handleStateChange(e)}return(function(l){i(u,l);var p=c(u);function u(e){var a;return n(this,u),a=p.call(this,e),d&&(t.add(o(a)),r(o(a))),a}return a(u,null,[{key:"rewind",value:function(){var r=e;return e=void 0,t.clear(),r}}]),a(u,[{key:"componentDidMount",value:function(){t.add(this),r(this)}},{key:"componentDidUpdate",value:function(){r(this)}},{key:"componentWillUnmount",value:function(){t.delete(this),r(this)}},{key:"render",value:function(){return null}}]),u}(s.Component))}},Km8e:function(e,t,r){"use strict";var n=Object.assign.bind(Object);e.exports=n,e.exports.default=e.exports},N7I1:function(e,t){e.exports=function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}},O5Wi:function(e,t){e.exports=function(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}},TZT2:function(e,t,r){"use strict";var n;t.__esModule=!0,t.AmpStateContext=void 0;var o=((n=r("ERkP"))&&n.__esModule?n:{default:n}).default.createContext({});t.AmpStateContext=o},bOkD:function(e,t,r){var n=r("cHE3");e.exports=function(e){if(Array.isArray(e))return n(e)}},cHE3:function(e,t){e.exports=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}},cMav:function(e,t,r){var n=r("i2RQ"),o=r("N7I1");e.exports=function(e,t){return!t||"object"!==n(t)&&"function"!==typeof t?o(e):t}},dq4L:function(e,t,r){"use strict";t.__esModule=!0,t.isInAmpMode=i,t.useAmp=function(){return i(o.default.useContext(a.AmpStateContext))};var n,o=(n=r("ERkP"))&&n.__esModule?n:{default:n},a=r("TZT2");function i(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.ampFirst,r=void 0!==t&&t,n=e.hybrid,o=void 0!==n&&n,a=e.hasQuery;return r||o&&(void 0!==a&&a)}},i2RQ:function(e,t){function r(t){return"function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?e.exports=r=function(e){return typeof e}:e.exports=r=function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},r(t)}e.exports=r},"iN+R":function(e,t,r){var n=r("bOkD"),o=r("DSo7"),a=r("D7XE"),i=r("uYlf");e.exports=function(e){return n(e)||o(e)||a(e)||i()}},"op+c":function(e,t,r){"use strict";var n;t.__esModule=!0,t.HeadManagerContext=void 0;var o=((n=r("ERkP"))&&n.__esModule?n:{default:n}).default.createContext(null);t.HeadManagerContext=o},pSQP:function(e,t){function r(t){return e.exports=r=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},r(t)}e.exports=r},uYlf:function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},w7mb:function(e,t){function r(t,n){return e.exports=r=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},r(t,n)}e.exports=r},yaYD:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return r("23aj")}])},ysqo:function(e,t,r){"use strict";t.__esModule=!0,t.defaultHead=u,t.default=void 0;var n=p(r("ERkP")),o=p(r("J9Yr")),a=r("TZT2"),i=r("op+c"),l=r("dq4L");function p(e){return e&&e.__esModule?e:{default:e}}function u(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=[n.default.createElement("meta",{charSet:"utf-8"})];return e||t.push(n.default.createElement("meta",{name:"viewport",content:"width=device-width"})),t}function c(e,t){return"string"===typeof t||"number"===typeof t?e:t.type===n.default.Fragment?e.concat(n.default.Children.toArray(t.props.children).reduce((function(e,t){return"string"===typeof t||"number"===typeof t?e:e.concat(t)}),[])):e.concat(t)}var s=["name","httpEquiv","charSet","itemProp"];function d(e,t){return e.reduce((function(e,t){var r=n.default.Children.toArray(t.props.children);return e.concat(r)}),[]).reduce(c,[]).reverse().concat(u(t.inAmpMode)).filter(function(){var e=new Set,t=new Set,r=new Set,n={};return function(o){var a=!0;if(o.key&&"number"!==typeof o.key&&o.key.indexOf("$")>0){var i=o.key.slice(o.key.indexOf("$")+1);e.has(i)?a=!1:e.add(i)}switch(o.type){case"title":case"base":t.has(o.type)?a=!1:t.add(o.type);break;case"meta":for(var l=0,p=s.length;l<p;l++){var u=s[l];if(o.props.hasOwnProperty(u))if("charSet"===u)r.has(u)?a=!1:r.add(u);else{var c=o.props[u],d=n[u]||new Set;d.has(c)?a=!1:(d.add(c),n[u]=d)}}}return a}}()).reverse().map((function(e,t){var r=e.key||t;return n.default.cloneElement(e,{key:r})}))}var f=(0,o.default)();function h(e){var t=e.children;return(n.default.createElement(a.AmpStateContext.Consumer,null,(function(e){return n.default.createElement(i.HeadManagerContext.Consumer,null,(function(r){return n.default.createElement(f,{reduceComponentsToState:d,handleStateChange:r,inAmpMode:(0,l.isInAmpMode)(e)},t)}))})))}h.rewind=f.rewind;var m=h;t.default=m},zQIG:function(e,t){e.exports=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}}},[["yaYD",0,1]]]);