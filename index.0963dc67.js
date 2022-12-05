function t(t){return t&&t.__esModule?t.default:t}var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},i={},o=e.parcelRequired7c6;null==o&&((o=function(t){if(t in n)return n[t].exports;if(t in i){var e=i[t];delete i[t];var o={id:t,exports:{}};return n[t]=o,e.call(o.exports,o,o.exports),o.exports}var r=new Error("Cannot find module '"+t+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(t,e){i[t]=e},e.parcelRequired7c6=o);var r,s,a,c,u=o("cBso0"),l=o("eWCmQ"),d={};r=d,s="Spinner",a=function(){return h},c=function(t){return h=t},Object.defineProperty(r,s,{get:a,set:c,enumerable:!0,configurable:!0});var f=function(){return f=Object.assign||function(t){for(var e,n=1,i=arguments.length;n<i;n++)for(var o in e=arguments[n])Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t},f.apply(this,arguments)},p={lines:12,length:7,width:5,radius:10,scale:1,corners:1,color:"#000",fadeColor:"transparent",animation:"spinner-line-fade-default",rotate:0,direction:1,speed:1,zIndex:2e9,className:"spinner",top:"50%",left:"50%",shadow:"0 0 1px transparent",position:"absolute"},h=function(){function t(t){void 0===t&&(t={}),this.opts=f(f({},p),t)}return t.prototype.spin=function(t){return this.stop(),this.el=document.createElement("div"),this.el.className=this.opts.className,this.el.setAttribute("role","progressbar"),g(this.el,{position:this.opts.position,width:0,zIndex:this.opts.zIndex,left:this.opts.left,top:this.opts.top,transform:"scale("+this.opts.scale+")"}),t&&t.insertBefore(this.el,t.firstChild||null),function(t,e){var n=Math.round(e.corners*e.width*500)/1e3+"px",i="none";!0===e.shadow?i="0 2px 4px #000":"string"==typeof e.shadow&&(i=e.shadow);for(var o=function(t){for(var e=/^\s*([a-zA-Z]+\s+)?(-?\d+(\.\d+)?)([a-zA-Z]*)\s+(-?\d+(\.\d+)?)([a-zA-Z]*)(.*)$/,n=[],i=0,o=t.split(",");i<o.length;i++){var r=o[i].match(e);if(null!==r){var s=+r[2],a=+r[5],c=r[4],u=r[7];0!==s||c||(c=u),0!==a||u||(u=c),c===u&&n.push({prefix:r[1]||"",x:s,y:a,xUnits:c,yUnits:u,end:r[8]})}}return n}(i),r=0;r<e.lines;r++){var s=~~(360/e.lines*r+e.rotate),a=g(document.createElement("div"),{position:"absolute",top:-e.width/2+"px",width:e.length+e.width+"px",height:e.width+"px",background:m(e.fadeColor,r),borderRadius:n,transformOrigin:"left",transform:"rotate("+s+"deg) translateX("+e.radius+"px)"}),c=r*e.direction/e.lines/e.speed;c-=1/e.speed;var u=g(document.createElement("div"),{width:"100%",height:"100%",background:m(e.color,r),borderRadius:n,boxShadow:v(o,s),animation:1/e.speed+"s linear "+c+"s infinite "+e.animation});a.appendChild(u),t.appendChild(a)}}(this.el,this.opts),this},t.prototype.stop=function(){return this.el&&("undefined"!=typeof requestAnimationFrame?cancelAnimationFrame(this.animateId):clearTimeout(this.animateId),this.el.parentNode&&this.el.parentNode.removeChild(this.el),this.el=void 0),this},t}();function g(t,e){for(var n in e)t.style[n]=e[n];return t}function m(t,e){return"string"==typeof t?t:t[e%t.length]}function v(t,e){for(var n=[],i=0,o=t;i<o.length;i++){var r=o[i],s=_(r.x,r.y,e);n.push(r.prefix+s[0]+r.xUnits+" "+s[1]+r.yUnits+r.end)}return n.join(", ")}function _(t,e,n){var i=n*Math.PI/180,o=Math.sin(i),r=Math.cos(i);return[Math.round(1e3*(t*r+e*o))/1e3,Math.round(1e3*(-t*o+e*r))/1e3]}window.onload=function(){const t=document.querySelector(".spinner");setTimeout((function(){t.classList.add("visually-hidden")}),2e3)};const y=document.getElementById("foo"),x=document.querySelector(".spinner-backdrop"),b=new(0,d.Spinner)({lines:13,length:38,width:17,radius:45,scale:1,corners:1,speed:1,rotate:0,animation:"spinner-line-fade-quick",direction:1,color:"#FF6B02",fadeColor:"transparent",top:"50%",left:"50%",shadow:"0 0 1px transparent",zIndex:2e9,className:"spinner",position:"absolute"});function w(){x.classList.remove("is-closed"),b.spin(y)}function E(){x.classList.add("is-closed"),b.stop()}function P(t){new IntersectionObserver((function(t){t.forEach((async t=>{if(t.isIntersecting&&S.query)try{!async function(){w(),S.incrementPage();const{data:{results:t}}=await S.fetchIoMoviesbyName(),e=await q();O(t,e),B.filmsContainer.insertAdjacentHTML("beforeend",k(t)),E()}()}catch(t){console.log(t)}if(t.isIntersecting&&!S.query)try{!async function(){w(),S.incrementPage();const{data:{results:t}}=await S.fetchIoTrendingMovies(),e=await q();O(t,e),B.filmsContainer.insertAdjacentHTML("beforeend",k(t)),E()}()}catch(t){console.log(t)}}))}),{root:null,rootMargin:"0px 0px 700px 0px",threshold:0}).observe(t)}var C,M=o("5uEKZ"),L={};window,
/*!
 * TOAST UI Pagination
 * @version 3.4.1
 * @author NHN FE Development Team <dl_javascript@nhn.com>
 * @license MIT
 */
C=function(){return function(t){var e={};function n(i){if(e[i])return e[i].exports;var o=e[i]={i:i,l:!1,exports:{}};return t[i].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=t,n.c=e,n.d=function(t,e,i){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(i,o,function(e){return t[e]}.bind(null,o));return i},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="dist",n(n.s=10)}([function(t,e,n){t.exports=function(t,e){var n,i,o,r,s=Object.prototype.hasOwnProperty;for(o=1,r=arguments.length;o<r;o+=1)for(i in n=arguments[o])s.call(n,i)&&(t[i]=n[i]);return t}},function(t,e,n){t.exports=function(t){return void 0===t}},function(t,e,n){t.exports=function(t){return t instanceof Array}},function(t,e,n){var i=n(2),o=n(17),r=n(6);t.exports=function(t,e,n){i(t)?o(t,e,n):r(t,e,n)}},function(t,e,n){t.exports=function(t){return"string"==typeof t||t instanceof String}},function(t,e,n){t.exports=function(t){return t instanceof Function}},function(t,e,n){t.exports=function(t,e,n){var i;for(i in n=n||null,t)if(t.hasOwnProperty(i)&&!1===e.call(n,t[i],i,t))break}},function(t,e,n){var i=n(18),o=n(0);t.exports=function(t,e){var n;return e||(e=t,t=null),n=e.init||function(){},t&&i(n,t),e.hasOwnProperty("static")&&(o(n,e.static),delete e.static),o(n.prototype,e),n}},function(t,e,n){var i=n(2);t.exports=function(t,e,n){var o,r;if(n=n||0,!i(e))return-1;if(Array.prototype.indexOf)return Array.prototype.indexOf.call(e,t,n);for(r=e.length,o=n;n>=0&&o<r;o+=1)if(e[o]===t)return o;return-1}},function(t,e,n){var i=n(29),o=n(30),r=n(5),s={capitalizeFirstLetter:function(t){return t.substring(0,1).toUpperCase()+t.substring(1,t.length)},isContained:function(t,e){return!!e&&(t===e||e.contains(t))},createElementByTemplate:function(t,e){var n=document.createElement("div"),o=r(t)?t(e):i(t,e);return n.innerHTML=o,n.firstChild},bind:function(t,e){var n,i=Array.prototype.slice;return t.bind?t.bind.apply(t,i.call(arguments,1)):(n=i.call(arguments,2),function(){return t.apply(e,n.length?n.concat(i.call(arguments)):arguments)})},sendHostName:function(){o("pagination","UA-129987462-1")}};t.exports=s},function(t,e,n){n(11),t.exports=n(12)},function(t,e,n){},function(t,e,n){var i=n(13),o=n(7),r=n(0),s=n(1),a=n(20),c=n(9),u={totalItems:10,itemsPerPage:10,visiblePages:10,page:1,centerAlign:!1,firstItemClassName:"tui-first-child",lastItemClassName:"tui-last-child",usageStatistics:!0},l=o({init:function(t,e){this._options=r({},u,e),this._currentPage=0,this._view=new a(t,this._options,c.bind(this._onClickHandler,this)),this._paginate(),this._options.usageStatistics&&c.sendHostName()},_setCurrentPage:function(t){this._currentPage=t||this._options.page},_getLastPage:function(){var t=Math.ceil(this._options.totalItems/this._options.itemsPerPage);return t||1},_getPageIndex:function(t){var e;return this._options.centerAlign?(e=t-Math.floor(this._options.visiblePages/2),e=Math.max(e,1),e=Math.min(e,this._getLastPage()-this._options.visiblePages+1)):Math.ceil(t/this._options.visiblePages)},_getRelativePage:function(t){var e="prev"===t,n=this.getCurrentPage();return e?n-1:n+1},_getMorePageIndex:function(t){var e=this._getPageIndex(this.getCurrentPage()),n=this._options.visiblePages,i="prev"===t;return this._options.centerAlign?i?e-1:e+n:i?(e-1)*n:e*n+1},_convertToValidPage:function(t){var e=this._getLastPage();return t=Math.max(t,1),t=Math.min(t,e)},_paginate:function(t){var e=this._makeViewData(t||this._options.page);this._setCurrentPage(t),this._view.update(e)},_makeViewData:function(t){var e={},n=this._getLastPage(),i=this._getPageIndex(t),o=this._getPageIndex(n),r=this._getEdge(t);return e.leftPageNumber=r.left,e.rightPageNumber=r.right,e.prevMore=i>1,e.nextMore=i<o,e.page=t,e.currentPageIndex=t,e.lastPage=n,e.lastPageListIndex=n,e},_getEdge:function(t){var e,n,i,o=this._getLastPage(),r=this._options.visiblePages,s=this._getPageIndex(t);return this._options.centerAlign?(i=Math.floor(r/2),(n=(e=Math.max(t-i,1))+r-1)>o&&(e=Math.max(o-r+1,1),n=o)):(e=(s-1)*r+1,n=s*r,n=Math.min(n,o)),{left:e,right:n}},_onClickHandler:function(t,e){switch(t){case"first":e=1;break;case"prev":e=this._getRelativePage("prev");break;case"next":e=this._getRelativePage("next");break;case"prevMore":e=this._getMorePageIndex("prev");break;case"nextMore":e=this._getMorePageIndex("next");break;case"last":e=this._getLastPage();break;default:if(!e)return}this.movePageTo(e)},reset:function(t){s(t)&&(t=this._options.totalItems),this._options.totalItems=t,this._paginate(1)},movePageTo:function(t){t=this._convertToValidPage(t),this.invoke("beforeMove",{page:t})&&(this._paginate(t),this.fire("afterMove",{page:t}))},setTotalItems:function(t){this._options.totalItems=t},setItemsPerPage:function(t){this._options.itemsPerPage=t},getCurrentPage:function(){return this._currentPage||this._options.page}});i.mixin(l),t.exports=l},function(t,e,n){var i=n(0),o=n(14),r=n(4),s=n(16),a=n(2),c=n(5),u=n(3),l=/\s+/g;function d(){this.events=null,this.contexts=null}d.mixin=function(t){i(t.prototype,d.prototype)},d.prototype._getHandlerItem=function(t,e){var n={handler:t};return e&&(n.context=e),n},d.prototype._safeEvent=function(t){var e,n=this.events;return n||(n=this.events={}),t&&((e=n[t])||(e=[],n[t]=e),n=e),n},d.prototype._safeContext=function(){var t=this.contexts;return t||(t=this.contexts=[]),t},d.prototype._indexOfContext=function(t){for(var e=this._safeContext(),n=0;e[n];){if(t===e[n][0])return n;n+=1}return-1},d.prototype._memorizeContext=function(t){var e,n;o(t)&&(e=this._safeContext(),(n=this._indexOfContext(t))>-1?e[n][1]+=1:e.push([t,1]))},d.prototype._forgetContext=function(t){var e,n;o(t)&&(e=this._safeContext(),(n=this._indexOfContext(t))>-1&&(e[n][1]-=1,e[n][1]<=0&&e.splice(n,1)))},d.prototype._bindEvent=function(t,e,n){var i=this._safeEvent(t);this._memorizeContext(n),i.push(this._getHandlerItem(e,n))},d.prototype.on=function(t,e,n){var i=this;r(t)?(t=t.split(l),u(t,(function(t){i._bindEvent(t,e,n)}))):s(t)&&(n=e,u(t,(function(t,e){i.on(e,t,n)})))},d.prototype.once=function(t,e,n){var i=this;if(s(t))return n=e,void u(t,(function(t,e){i.once(e,t,n)}));this.on(t,(function o(){e.apply(n,arguments),i.off(t,o,n)}),n)},d.prototype._spliceMatches=function(t,e){var n,i=0;if(a(t))for(n=t.length;i<n;i+=1)!0===e(t[i])&&(t.splice(i,1),n-=1,i-=1)},d.prototype._matchHandler=function(t){var e=this;return function(n){var i=t===n.handler;return i&&e._forgetContext(n.context),i}},d.prototype._matchContext=function(t){var e=this;return function(n){var i=t===n.context;return i&&e._forgetContext(n.context),i}},d.prototype._matchHandlerAndContext=function(t,e){var n=this;return function(i){var o=t===i.handler,r=e===i.context,s=o&&r;return s&&n._forgetContext(i.context),s}},d.prototype._offByEventName=function(t,e){var n=this,i=c(e),o=n._matchHandler(e);t=t.split(l),u(t,(function(t){var e=n._safeEvent(t);i?n._spliceMatches(e,o):(u(e,(function(t){n._forgetContext(t.context)})),n.events[t]=[])}))},d.prototype._offByHandler=function(t){var e=this,n=this._matchHandler(t);u(this._safeEvent(),(function(t){e._spliceMatches(t,n)}))},d.prototype._offByObject=function(t,e){var n,i=this;this._indexOfContext(t)<0?u(t,(function(t,e){i.off(e,t)})):r(e)?(n=this._matchContext(t),i._spliceMatches(this._safeEvent(e),n)):c(e)?(n=this._matchHandlerAndContext(e,t),u(this._safeEvent(),(function(t){i._spliceMatches(t,n)}))):(n=this._matchContext(t),u(this._safeEvent(),(function(t){i._spliceMatches(t,n)})))},d.prototype.off=function(t,e){r(t)?this._offByEventName(t,e):arguments.length?c(t)?this._offByHandler(t):s(t)&&this._offByObject(t,e):(this.events={},this.contexts=[])},d.prototype.fire=function(t){this.invoke.apply(this,arguments)},d.prototype.invoke=function(t){var e,n,i,o;if(!this.hasListener(t))return!0;for(e=this._safeEvent(t),n=Array.prototype.slice.call(arguments,1),i=0;e[i];){if(!1===(o=e[i]).handler.apply(o.context,n))return!1;i+=1}return!0},d.prototype.hasListener=function(t){return this.getListenerLength(t)>0},d.prototype.getListenerLength=function(t){return this._safeEvent(t).length},t.exports=d},function(t,e,n){var i=n(1),o=n(15);t.exports=function(t){return!i(t)&&!o(t)}},function(t,e,n){t.exports=function(t){return null===t}},function(t,e,n){t.exports=function(t){return t===Object(t)}},function(t,e,n){t.exports=function(t,e,n){var i=0,o=t.length;for(n=n||null;i<o&&!1!==e.call(n,t[i],i,t);i+=1);}},function(t,e,n){var i=n(19);t.exports=function(t,e){var n=i(e.prototype);n.constructor=t,t.prototype=n}},function(t,e,n){t.exports=function(t){function e(){}return e.prototype=t,new e}},function(t,e,n){var i=n(3),o=n(7),r=n(21),s=n(22),a=n(24),c=n(25),u=n(0),l=n(4),d=n(28),f=n(9),p={page:'<a href="#" class="tui-page-btn">{{page}}</a>',currentPage:'<strong class="tui-page-btn tui-is-selected">{{page}}</strong>',moveButton:'<a href="#" class="tui-page-btn tui-{{type}}"><span class="tui-ico-{{type}}">{{type}}</span></a>',disabledMoveButton:'<span class="tui-page-btn tui-is-disabled tui-{{type}}"><span class="tui-ico-{{type}}">{{type}}</span></span>',moreButton:'<a href="#" class="tui-page-btn tui-{{type}}-is-ellip"><span class="tui-ico-ellip">...</span></a>'},h=["first","prev","next","last"],g=["prev","next"],m=o({init:function(t,e,n){this._containerElement=null,this._firstItemClassName=e.firstItemClassName,this._lastItemClassName=e.lastItemClassName,this._template=u({},p,e.template),this._buttons={},this._enabledPageElements=[],this._setRootElement(t),this._setMoveButtons(),this._setDisabledMoveButtons(),this._setMoreButtons(),this._attachClickEvent(n)},_setRootElement:function(t){if(l(t)?t=document.getElementById(t)||document.querySelector(t):t.jquery&&(t=t[0]),!d(t))throw new Error("The container element is invalid.");this._containerElement=t},_setMoveButtons:function(){i(h,(function(t){this._buttons[t]=f.createElementByTemplate(this._template.moveButton,{type:t})}),this)},_setDisabledMoveButtons:function(){i(h,(function(t){var e="disabled"+f.capitalizeFirstLetter(t);this._buttons[e]=f.createElementByTemplate(this._template.disabledMoveButton,{type:t})}),this)},_setMoreButtons:function(){i(g,(function(t){var e=t+"More";this._buttons[e]=f.createElementByTemplate(this._template.moreButton,{type:t})}),this)},_getContainerElement:function(){return this._containerElement},_appendFirstButton:function(t){var e;e=t.page>1?this._buttons.first:this._buttons.disabledFirst,this._getContainerElement().appendChild(e)},_appendPrevButton:function(t){var e;e=t.currentPageIndex>1?this._buttons.prev:this._buttons.disabledPrev,this._getContainerElement().appendChild(e)},_appendNextButton:function(t){var e;e=t.currentPageIndex<t.lastPageListIndex?this._buttons.next:this._buttons.disabledNext,this._getContainerElement().appendChild(e)},_appendLastButton:function(t){var e;e=t.page<t.lastPage?this._buttons.last:this._buttons.disabledLast,this._getContainerElement().appendChild(e)},_appendPrevMoreButton:function(t){var e;t.prevMore&&(e=this._buttons.prevMore,c(e,this._firstItemClassName),this._getContainerElement().appendChild(e))},_appendNextMoreButton:function(t){var e;t.nextMore&&(e=this._buttons.nextMore,c(e,this._lastItemClassName),this._getContainerElement().appendChild(e))},_appendPages:function(t){var e,n,i=t.leftPageNumber,o=t.rightPageNumber;for(n=i;n<=o;n+=1)n===t.page?e=f.createElementByTemplate(this._template.currentPage,{page:n}):(e=f.createElementByTemplate(this._template.page,{page:n}),this._enabledPageElements.push(e)),n!==i||t.prevMore||c(e,this._firstItemClassName),n!==o||t.nextMore||c(e,this._lastItemClassName),this._getContainerElement().appendChild(e)},_attachClickEvent:function(t){var e=this._getContainerElement();s(e,"click",(function(e){var n,i,o=r(e);a(e),(i=this._getButtonType(o))||(n=this._getPageNumber(o)),t(i,n)}),this)},_getButtonType:function(t){var e,n=this._buttons;return i(n,(function(n,i){return!f.isContained(t,n)||(e=i,!1)}),this),e},_getPageNumber:function(t){var e,n=this._findPageElement(t);return n&&(e=parseInt(n.innerText,10)),e},_findPageElement:function(t){for(var e,n=0,i=this._enabledPageElements.length;n<i;n+=1)if(e=this._enabledPageElements[n],f.isContained(t,e))return e;return null},_empty:function(){this._enabledPageElements=[],i(this._buttons,(function(t,e){this._buttons[e]=t.cloneNode(!0)}),this),this._getContainerElement().innerHTML=""},update:function(t){this._empty(),this._appendFirstButton(t),this._appendPrevButton(t),this._appendPrevMoreButton(t),this._appendPages(t),this._appendNextMoreButton(t),this._appendNextButton(t),this._appendLastButton(t)}});t.exports=m},function(t,e,n){t.exports=function(t){return t.target||t.srcElement}},function(t,e,n){var i=n(4),o=n(3),r=n(23);function s(t,e,n,i){function s(e){n.call(i||t,e||window.event)}"addEventListener"in t?t.addEventListener(e,s):"attachEvent"in t&&t.attachEvent("on"+e,s),function(t,e,n,i){var s=r(t,e),a=!1;o(s,(function(t){return t.handler!==n||(a=!0,!1)})),a||s.push({handler:n,wrappedHandler:i})}(t,e,n,s)}t.exports=function(t,e,n,r){i(e)?o(e.split(/\s+/g),(function(e){s(t,e,n,r)})):o(e,(function(e,i){s(t,i,e,n)}))}},function(t,e,n){var i="_feEventKey";t.exports=function(t,e){var n,o=t[i];return o||(o=t[i]={}),(n=o[e])||(n=o[e]=[]),n}},function(t,e,n){t.exports=function(t){t.preventDefault?t.preventDefault():t.returnValue=!1}},function(t,e,n){var i=n(3),o=n(8),r=n(26),s=n(27);t.exports=function(t){var e,n=Array.prototype.slice.call(arguments,1),a=t.classList,c=[];a?i(n,(function(e){t.classList.add(e)})):((e=r(t))&&(n=[].concat(e.split(/\s+/),n)),i(n,(function(t){o(t,c)<0&&c.push(t)})),s(t,c))}},function(t,e,n){var i=n(1);t.exports=function(t){return t&&t.className?i(t.className.baseVal)?t.className:t.className.baseVal:""}},function(t,e,n){var i=n(2),o=n(1);t.exports=function(t,e){e=(e=i(e)?e.join(" "):e).replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,""),o(t.className.baseVal)?t.className=e:t.className.baseVal=e}},function(t,e,n){t.exports=function(t){return"object"==typeof HTMLElement?t&&(t instanceof HTMLElement||!!t.nodeType):!(!t||!t.nodeType)}},function(t,e,n){var i=n(8),o=n(3),r=n(2),s=n(4),a=n(0),c=/{{\s?|\s?}}/g,u=/^[a-zA-Z0-9_@]+\[[a-zA-Z0-9_@"']+\]$/,l=/\[\s?|\s?\]/,d=/^[a-zA-Z_]+\.[a-zA-Z_]+$/,f=/\./,p=/^["']\w+["']$/,h=/"|'/g,g=/^-?\d+\.?\d*$/,m={if:function(t,e,n){var i=function(t,e){var n=[t],i=[],r=0,s=0;return o(e,(function(t,o){0===t.indexOf("if")?r+=1:"/if"===t?r-=1:r||0!==t.indexOf("elseif")&&"else"!==t||(n.push("else"===t?["true"]:t.split(" ").slice(1)),i.push(e.slice(s,o)),s=o+1)})),i.push(e.slice(s)),{exps:n,sourcesInsideIf:i}}(t,e),r=!1,s="";return o(i.exps,(function(t,e){return(r=x(t,n))&&(s=b(i.sourcesInsideIf[e],n)),!r})),s},each:function(t,e,n){var i=x(t,n),s=r(i)?"@index":"@key",c={},u="";return o(i,(function(t,i){c[s]=i,c["@this"]=t,a(n,c),u+=b(e.slice(),n)})),u},with:function(t,e,n){var o=i("as",t),r=t[o+1],s=x(t.slice(0,o),n),c={};return c[r]=s,b(e,a(n,c))||""}},v=3==="a".split(/a/).length?function(t,e){return t.split(e)}:function(t,e){var n,i,o=[],r=0;for(e.global||(e=new RegExp(e,"g")),n=e.exec(t);null!==n;)i=n.index,o.push(t.slice(r,i)),r=i+n[0].length,n=e.exec(t);return o.push(t.slice(r)),o};function _(t,e){var n,i=e[t];return"true"===t?i=!0:"false"===t?i=!1:p.test(t)?i=t.replace(h,""):u.test(t)?i=_((n=t.split(l))[0],e)[_(n[1],e)]:d.test(t)?i=_((n=t.split(f))[0],e)[n[1]]:g.test(t)&&(i=parseFloat(t)),i}function y(t,e,n){for(var i,o,r,a,c=m[t],u=1,l=2,d=e[l];u&&s(d);)0===d.indexOf(t)?u+=1:0===d.indexOf("/"+t)&&(u-=1,i=l),d=e[l+=2];if(u)throw Error(t+" needs {{/"+t+"}} expression.");return e[0]=c(e[0].split(" ").slice(1),(o=0,r=i,(a=e.splice(o+1,r-o)).pop(),a),n),e}function x(t,e){var n=_(t[0],e);return n instanceof Function?function(t,e,n){var i=[];return o(e,(function(t){i.push(_(t,n))})),t.apply(null,i)}(n,t.slice(1),e):n}function b(t,e){for(var n,i,o,r=1,a=t[r];s(a);)i=(n=a.split(" "))[0],m[i]?(o=y(i,t.splice(r,t.length-r),e),t=t.concat(o)):t[r]=x(n,e),a=t[r+=2];return t.join("")}t.exports=function(t,e){return b(v(t,c),e)}},function(t,e,n){var i=n(1),o=n(31);t.exports=function(t,e){var n=location.hostname,r="TOAST UI "+t+" for "+n+": Statistics",s=window.localStorage.getItem(r);(i(window.tui)||!1!==window.tui.usageStatistics)&&(s&&!function(t){return(new Date).getTime()-t>6048e5}(s)||(window.localStorage.setItem(r,(new Date).getTime()),setTimeout((function(){"interactive"!==document.readyState&&"complete"!==document.readyState||o("https://www.google-analytics.com/collect",{v:1,t:"event",tid:e,cid:n,dp:n,dh:t,el:t,ec:"use"})}),1e3)))}},function(t,e,n){var i=n(6);t.exports=function(t,e){var n=document.createElement("img"),o="";return i(e,(function(t,e){o+="&"+e+"="+t})),o=o.substring(1),n.src=t+"?"+o,n.style.display="none",document.body.appendChild(n),document.body.removeChild(n),n}}])},L=C();const T={paginationContainer:document.querySelector("#tui-pagination-container"),filmsContainer:document.querySelector(".films__list")};function I(e){const n={totalItems:e,itemsPerPage:20,visiblePages:5,page:1,centerAlign:!0,usageStatistics:!1};new(t(L))(T.paginationContainer,n).on("afterMove",N)}async function N(t){try{if(!S.query){w();const{data:{results:e}}=await S.fetchTrendingMovies(t.page);return O(e,await q()),T.filmsContainer.innerHTML=k(e),E(),void window.scrollTo(0,0)}w();const{data:{results:e}}=await S.fetchMoviesbyName(t.page);O(e,await q()),T.filmsContainer.innerHTML=k(e),E(),window.scrollTo(0,0)}catch(t){console.log(t)}}const B={filmsContainer:document.querySelector(".films__list"),form:document.querySelector("#header-form"),wrongSearchEl:document.querySelector(".header__form-message"),sentinel:document.querySelector("#sentinel"),paginationContainer:document.querySelector("#tui-pagination-container")},S=new(0,u.MovieApi);function k(t){return t.map((({title:t,release_date:e,poster_path:n,genres:i,id:o,vote_average:r,vote_count:s,original_title:a,overview:c,popularity:u})=>{const l=new Date(e).getFullYear(),d=n?`${S.imgUrl}${S.imgSize}${n}`:"https://upload.wikimedia.org/wikipedia/commons/6/65/No-Image-Placeholder.svg";return` <li class='films__item' style="min-height:100px" data-id='${o}' data-title='${t}' data-release-date='${l}' data-poster-path='${d}' data-genres='${i}' data-vote-average='${r}' data-vote-count='${s}' data-original-title='${a}' data-overview='${c}' data-populatiry='${u}'>\n                    <a class='films__link'>\n                    <img class='films__poster' src='${d}' alt='${t} poster' />\n                    <div class='films__info'>\n                    <h2 class='films__title'>${t}</h2>\n                    <p class='films__genres'>${i.length>3?i[0]+", "+i[1]+" and others":i.join(", ")||"No genre"} | ${l||"Unknown release date"}</p>\n                    </div></a>\n                </li>`})).join("")}function O(t,e){t.forEach((t=>{t.genres=[],e.forEach((e=>{t.genre_ids.includes(e.id)&&t.genres.push(e.name)}))}))}async function q(){try{if(!(0,M.getFromSessionStorage)("genresList")){const{data:{genres:t}}=await S.fetchMoviesGenres();(0,M.addToSessionStorage)("genresList",t)}return(0,M.getFromSessionStorage)("genresList")}catch(t){console.log(t)}}window.addEventListener("load",(async function(){try{const t=await q(),{data:{results:e,total_results:n}}=await S.fetchTrendingMovies();O(e,t),I(n),B.filmsContainer.innerHTML=k(e),window.matchMedia("(max-width: 768px)").matches&&(P(B.sentinel),B.paginationContainer.classList.add("visually-hidden"))}catch(t){console.log(t)}})),B.form.addEventListener("submit",(async function(e){try{if(e.preventDefault(),w(),S.resetPage(),S.query=e.currentTarget.elements.movie_title.value.trim(),!S.query)return t(l).Notify.warning("Please, enter search query"),void E();B.wrongSearchEl.classList.add("hidden");const{data:{results:n,total_pages:i,total_results:o}}=await S.fetchMoviesbyName();if(!i)return B.wrongSearchEl.classList.remove("hidden"),void E();I(o);const r=await q();O(n,r),B.filmsContainer.innerHTML=k(n),e.target.reset(),E()}catch(t){console.log(t)}}));var A=o("gXygc"),F=o("37v9V");const H={closeModalBtn:document.querySelector("[data-modal-close]"),filmCard:document.querySelector(".films__list"),backdropEl:document.querySelector(".backdrop"),startTrailerBtn:document.querySelector(".trailer__btn")};function $(t){H.backdropEl.classList.add("is-hidden"),document.removeEventListener("keydown",j),document.body.style.overflow=""}function j(t){"Escape"===t.code&&$()}function z(t){t.target===H.backdropEl&&$()}H.filmCard.addEventListener("click",(function(t){if(!t.target.closest(".films__item"))return;H.backdropEl.classList.remove("is-hidden"),H.closeModalBtn.addEventListener("click",$),document.addEventListener("keydown",j),document.addEventListener("click",z),document.body.style.overflow="hidden",(0,A.renderFilmCard)(t)})),H.startTrailerBtn.addEventListener("click",(t=>(0,F.launchTrailer)(t))),o("7bYU0"),o("cxCVv"),o("krGWQ"),o("aR4bl"),o("zEbIk"),o("1h4OK");l=o("eWCmQ"),M=o("5uEKZ");const D={addToWatchedBtn:document.querySelector(".btn-add-watched"),addToQueueBtn:document.querySelector(".btn-add-queue")},U=(0,M.getFromLocalStorage)("watchedList")||[],R=(0,M.getFromLocalStorage)("queueList")||[];D.addToWatchedBtn.addEventListener("click",(function(t){const e={...t.target.closest("#film-modal").dataset};if(!U.length)return U.push(e),(0,M.addToLocalStorage)("watchedList",U),void l.Notify.success("The movie has been successfully added to your watch list");const n=U.some((t=>t.id===e.id));n||(U.push(e),(0,M.addToLocalStorage)("watchedList",U),l.Notify.success("The movie has been successfully added to your watch list"));n&&l.Notify.info("This movie is already in your watch list")})),D.addToQueueBtn.addEventListener("click",(function(t){const e={...t.target.closest("#film-modal").dataset};if(!R.length)return R.push(e),(0,M.addToLocalStorage)("queueList",R),void l.Notify.success("The movie has been successfully added to your queue list");console.log(e.id);const n=R.some((t=>t.id===e.id));n||(R.push(e),(0,M.addToLocalStorage)("queueList",R),l.Notify.success("The movie has been successfully added to your queue list"));n&&l.Notify.info("This movie is already in your queue list")}));
//# sourceMappingURL=index.0963dc67.js.map
