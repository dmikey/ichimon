define("haridashi/src/haridashi",["require"],function(e){var t={};t.isObject=function(e){var t=typeof e;return t==="object"&&!!e},t.extend=function(e){if(!t.isObject(e))return e;var n,r;for(var i=1,s=arguments.length;i<s;i++){n=arguments[i];for(r in n)typeof e[r]=="function"&&typeof n[r]=="function"?function(n,i){e[r]=function(){var e=t.bind(i,this),r=n,s=[r].concat(arguments);e.apply(this,s)}}(e[r],n[r]):e[r]=n[r]}return e},t.ready=function(e){var t=window.setInterval(function(){document.readyState==="complete"&&(window.clearInterval(t),e())},10)},t.bind=function(e,t){if(!e)return e;var n=Array.prototype,r=Function.prototype,i=n.slice,s=r.bind,o,u;return s&&e.bind===s?s.apply(e,i.call(arguments,1)):(o=i.call(arguments,2),u=function(){if(this instanceof u){ctor.prototype=e.prototype;var n=new ctor;ctor.prototype=null;var r=e.apply(n,o.concat(i.call(arguments)));return Object(r)===r?r:n}return e.apply(t,o.concat(i.call(arguments)))})};var n={};return t.template=function r(e,t){var i=/\W/.test(e)?new Function("obj","var p=[],print=function(){p.push.apply(p,arguments);};with(obj){p.push('"+e.replace(/[\r\t\n]/g," ").split("<%").join("	").replace(/((^|%>)[^\t]*)'/g,"$1\r").replace(/\t=(.*?)%>/g,"',$1,'").split("	").join("');").split("%>").join("p.push('").split("\r").join("\\'")+"');}return p.join('');"):n[e]=n[e]||r(document.getElementById(e).innerHTML);return t?i(t):i},t}),define("haridashi/main",["./src/haridashi"],function(e){return e}),define("ichimon",["haridashi/main"],function(e){var t={};return t.mix=function(t,n){var r=!e.isObject(t),i=r?t.prototype:t,s=n,o=e.extend(i,s);return r?(t.prototype=o,t):o},t});define(["main"], function (main) { return main; });