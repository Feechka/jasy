var Zepto=function(){function i(a,b){return n.call(a.querySelectorAll(b))}function k(a){return a.filter(function(b){return b!==void 0&&b!==null})}function d(a,b){function c(h){return c.dom.forEach(h),c}if(b!==void 0)return d(b).find(a);c.dom=k(typeof a=="function"&&"dom"in a?a.dom:a instanceof Array?a:a instanceof Element?[a]:i(f,c.selector=a));d.extend(c,d.fn);return c}var n=[].slice,f=document,l={append:"beforeEnd",prepend:"afterBegin",before:"beforeBegin",after:"afterEnd"},e,j;if(String.prototype.trim===
void 0)String.prototype.trim=function(){return this.replace(/^\s+/,"").replace(/\s+$/,"")};d.extend=function(a,b){for(e in b)a[e]=b[e]};camelize=function(a){return a.replace(/-+(.)?/g,function(b,c){return c?c.toUpperCase():""})};d.fn={compact:function(){this.dom=k(this.dom);return this},get:function(a){return a===void 0?this.dom:this.dom[a]},remove:function(){return this(function(a){a.parentNode.removeChild(a)})},each:function(a){return this(a)},filter:function(a){return d(this.dom.filter(function(b){return i(b.parentNode,
a).indexOf(b)>=0}))},is:function(a){return this.dom.length>0&&d(this.dom[0]).filter(a).dom.length>0},first:function(){this.dom=k([this.dom[0]]);return this},find:function(a){return d(this.dom.map(function(b){return i(b,a)}).reduce(function(b,c){return b.concat(c)},[]))},closest:function(a){var b=this.dom[0].parentNode;for(a=i(f,a);b&&a.indexOf(b)<0;)b=b.parentNode;return d(b&&b!==f?b:[])},pluck:function(a){return this.dom.map(function(b){return b[a]})},show:function(){return this.css("display","block")},
hide:function(){return this.css("display","none")},prev:function(){return d(this.pluck("previousElementSibling"))},next:function(){return d(this.pluck("nextElementSibling"))},html:function(a){return a===void 0?this.dom.length>0?this.dom[0].innerHTML:null:this(function(b){b.innerHTML=a})},attr:function(a,b){return typeof a=="string"&&b===void 0?this.dom.length>0?this.dom[0].getAttribute(a)||undefined:null:this(function(c){if(typeof a=="object")for(e in a)c.setAttribute(e,a[e]);else c.setAttribute(a,
b)})},offset:function(){var a=this.dom[0].getBoundingClientRect();return{left:a.left+f.body.scrollLeft,top:a.top+f.body.scrollTop,width:a.width,height:a.height}},css:function(a,b){if(b===void 0&&typeof a=="string")return this.dom[0].style[camelize(a)];j="";for(e in a)j+=e+":"+a[e]+";";if(typeof a=="string")j=a+":"+b;return this(function(c){c.style.cssText+=";"+j})},index:function(a){return this.dom.indexOf(d(a).get(0))},bind:function(a,b){return this(function(c){a.split(/\s/).forEach(function(h){c.addEventListener(h,
b,false)})})},delegate:function(a,b,c){return this(function(h){h.addEventListener(b,function(m){for(var g=m.target,o=i(h,a);g&&o.indexOf(g)<0;)g=g.parentNode;g&&g!==h&&g!==f&&c(g,m)},false)})},live:function(a,b){d(f.body).delegate(this.selector,a,b);return this},hasClass:function(a){return RegExp("(^|\\s)"+a+"(\\s|$)").test(this.dom[0].className)},addClass:function(a){return this(function(b){!d(b).hasClass(a)&&(b.className+=(b.className?" ":"")+a)})},removeClass:function(a){return this(function(b){b.className=
b.className.replace(RegExp("(^|\\s)"+a+"(\\s|$)")," ").trim()})},trigger:function(a){return this(function(b){var c;b.dispatchEvent(c=f.createEvent("Events"),c.initEvent(a,true,false))})}};["width","height"].forEach(function(a){d.fn[a]=function(){return this.offset()[a]}});for(e in l)d.fn[e]=function(a){return function(b){return this(function(c){c["insertAdjacent"+(b instanceof Element?"Element":"HTML")](a,b)})}}(l[e]);return d}();"$"in window||(window.$=Zepto);