
/*! jQuery v3.2.1 | (c) JS Foundation and other contributors | jquery.org/license */
!function(a,b){"use strict";"object"==typeof module&&"object"==typeof module.exports?module.exports=a.document?b(a,!0):function(a){if(!a.document)throw new Error("jQuery requires a window with a document");return b(a)}:b(a)}("undefined"!=typeof window?window:this,function(a,b){"use strict";var c=[],d=a.document,e=Object.getPrototypeOf,f=c.slice,g=c.concat,h=c.push,i=c.indexOf,j={},k=j.toString,l=j.hasOwnProperty,m=l.toString,n=m.call(Object),o={};function p(a,b){b=b||d;var c=b.createElement("script");c.text=a,b.head.appendChild(c).parentNode.removeChild(c)}var q="3.2.1",r=function(a,b){return new r.fn.init(a,b)},s=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,t=/^-ms-/,u=/-([a-z])/g,v=function(a,b){return b.toUpperCase()};r.fn=r.prototype={jquery:q,constructor:r,length:0,toArray:function(){return f.call(this)},get:function(a){return null==a?f.call(this):a<0?this[a+this.length]:this[a]},pushStack:function(a){var b=r.merge(this.constructor(),a);return b.prevObject=this,b},each:function(a){return r.each(this,a)},map:function(a){return this.pushStack(r.map(this,function(b,c){return a.call(b,c,b)}))},slice:function(){return this.pushStack(f.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(a){var b=this.length,c=+a+(a<0?b:0);return this.pushStack(c>=0&&c<b?[this[c]]:[])},end:function(){return this.prevObject||this.constructor()},push:h,sort:c.sort,splice:c.splice},r.extend=r.fn.extend=function(){var a,b,c,d,e,f,g=arguments[0]||{},h=1,i=arguments.length,j=!1;for("boolean"==typeof g&&(j=g,g=arguments[h]||{},h++),"object"==typeof g||r.isFunction(g)||(g={}),h===i&&(g=this,h--);h<i;h++)if(null!=(a=arguments[h]))for(b in a)c=g[b],d=a[b],g!==d&&(j&&d&&(r.isPlainObject(d)||(e=Array.isArray(d)))?(e?(e=!1,f=c&&Array.isArray(c)?c:[]):f=c&&r.isPlainObject(c)?c:{},g[b]=r.extend(j,f,d)):void 0!==d&&(g[b]=d));return g},r.extend({expando:"jQuery"+(q+Math.random()).replace(/\D/g,""),isReady:!0,error:function(a){throw new Error(a)},noop:function(){},isFunction:function(a){return"function"===r.type(a)},isWindow:function(a){return null!=a&&a===a.window},isNumeric:function(a){var b=r.type(a);return("number"===b||"string"===b)&&!isNaN(a-parseFloat(a))},isPlainObject:function(a){var b,c;return!(!a||"[object Object]"!==k.call(a))&&(!(b=e(a))||(c=l.call(b,"constructor")&&b.constructor,"function"==typeof c&&m.call(c)===n))},isEmptyObject:function(a){var b;for(b in a)return!1;return!0},type:function(a){return null==a?a+"":"object"==typeof a||"function"==typeof a?j[k.call(a)]||"object":typeof a},globalEval:function(a){p(a)},camelCase:function(a){return a.replace(t,"ms-").replace(u,v)},each:function(a,b){var c,d=0;if(w(a)){for(c=a.length;d<c;d++)if(b.call(a[d],d,a[d])===!1)break}else for(d in a)if(b.call(a[d],d,a[d])===!1)break;return a},trim:function(a){return null==a?"":(a+"").replace(s,"")},makeArray:function(a,b){var c=b||[];return null!=a&&(w(Object(a))?r.merge(c,"string"==typeof a?[a]:a):h.call(c,a)),c},inArray:function(a,b,c){return null==b?-1:i.call(b,a,c)},merge:function(a,b){for(var c=+b.length,d=0,e=a.length;d<c;d++)a[e++]=b[d];return a.length=e,a},grep:function(a,b,c){for(var d,e=[],f=0,g=a.length,h=!c;f<g;f++)d=!b(a[f],f),d!==h&&e.push(a[f]);return e},map:function(a,b,c){var d,e,f=0,h=[];if(w(a))for(d=a.length;f<d;f++)e=b(a[f],f,c),null!=e&&h.push(e);else for(f in a)e=b(a[f],f,c),null!=e&&h.push(e);return g.apply([],h)},guid:1,proxy:function(a,b){var c,d,e;if("string"==typeof b&&(c=a[b],b=a,a=c),r.isFunction(a))return d=f.call(arguments,2),e=function(){return a.apply(b||this,d.concat(f.call(arguments)))},e.guid=a.guid=a.guid||r.guid++,e},now:Date.now,support:o}),"function"==typeof Symbol&&(r.fn[Symbol.iterator]=c[Symbol.iterator]),r.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(a,b){j["[object "+b+"]"]=b.toLowerCase()});function w(a){var b=!!a&&"length"in a&&a.length,c=r.type(a);return"function"!==c&&!r.isWindow(a)&&("array"===c||0===b||"number"==typeof b&&b>0&&b-1 in a)}var x=function(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u="sizzle"+1*new Date,v=a.document,w=0,x=0,y=ha(),z=ha(),A=ha(),B=function(a,b){return a===b&&(l=!0),0},C={}.hasOwnProperty,D=[],E=D.pop,F=D.push,G=D.push,H=D.slice,I=function(a,b){for(var c=0,d=a.length;c<d;c++)if(a[c]===b)return c;return-1},J="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",K="[\\x20\\t\\r\\n\\f]",L="(?:\\\\.|[\\w-]|[^\0-\\xa0])+",M="\\["+K+"*("+L+")(?:"+K+"*([*^$|!~]?=)"+K+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+L+"))|)"+K+"*\\]",N=":("+L+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+M+")*)|.*)\\)|)",O=new RegExp(K+"+","g"),P=new RegExp("^"+K+"+|((?:^|[^\\\\])(?:\\\\.)*)"+K+"+$","g"),Q=new RegExp("^"+K+"*,"+K+"*"),R=new RegExp("^"+K+"*([>+~]|"+K+")"+K+"*"),S=new RegExp("="+K+"*([^\\]'\"]*?)"+K+"*\\]","g"),T=new RegExp(N),U=new RegExp("^"+L+"$"),V={ID:new RegExp("^#("+L+")"),CLASS:new RegExp("^\\.("+L+")"),TAG:new RegExp("^("+L+"|[*])"),ATTR:new RegExp("^"+M),PSEUDO:new RegExp("^"+N),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+K+"*(even|odd|(([+-]|)(\\d*)n|)"+K+"*(?:([+-]|)"+K+"*(\\d+)|))"+K+"*\\)|)","i"),bool:new RegExp("^(?:"+J+")$","i"),needsContext:new RegExp("^"+K+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+K+"*((?:-\\d)?\\d*)"+K+"*\\)|)(?=[^-]|$)","i")},W=/^(?:input|select|textarea|button)$/i,X=/^h\d$/i,Y=/^[^{]+\{\s*\[native \w/,Z=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,$=/[+~]/,_=new RegExp("\\\\([\\da-f]{1,6}"+K+"?|("+K+")|.)","ig"),aa=function(a,b,c){var d="0x"+b-65536;return d!==d||c?b:d<0?String.fromCharCode(d+65536):String.fromCharCode(d>>10|55296,1023&d|56320)},ba=/([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,ca=function(a,b){return b?"\0"===a?"\ufffd":a.slice(0,-1)+"\\"+a.charCodeAt(a.length-1).toString(16)+" ":"\\"+a},da=function(){m()},ea=ta(function(a){return a.disabled===!0&&("form"in a||"label"in a)},{dir:"parentNode",next:"legend"});try{G.apply(D=H.call(v.childNodes),v.childNodes),D[v.childNodes.length].nodeType}catch(fa){G={apply:D.length?function(a,b){F.apply(a,H.call(b))}:function(a,b){var c=a.length,d=0;while(a[c++]=b[d++]);a.length=c-1}}}function ga(a,b,d,e){var f,h,j,k,l,o,r,s=b&&b.ownerDocument,w=b?b.nodeType:9;if(d=d||[],"string"!=typeof a||!a||1!==w&&9!==w&&11!==w)return d;if(!e&&((b?b.ownerDocument||b:v)!==n&&m(b),b=b||n,p)){if(11!==w&&(l=Z.exec(a)))if(f=l[1]){if(9===w){if(!(j=b.getElementById(f)))return d;if(j.id===f)return d.push(j),d}else if(s&&(j=s.getElementById(f))&&t(b,j)&&j.id===f)return d.push(j),d}else{if(l[2])return G.apply(d,b.getElementsByTagName(a)),d;if((f=l[3])&&c.getElementsByClassName&&b.getElementsByClassName)return G.apply(d,b.getElementsByClassName(f)),d}if(c.qsa&&!A[a+" "]&&(!q||!q.test(a))){if(1!==w)s=b,r=a;else if("object"!==b.nodeName.toLowerCase()){(k=b.getAttribute("id"))?k=k.replace(ba,ca):b.setAttribute("id",k=u),o=g(a),h=o.length;while(h--)o[h]="#"+k+" "+sa(o[h]);r=o.join(","),s=$.test(a)&&qa(b.parentNode)||b}if(r)try{return G.apply(d,s.querySelectorAll(r)),d}catch(x){}finally{k===u&&b.removeAttribute("id")}}}return i(a.replace(P,"$1"),b,d,e)}function ha(){var a=[];function b(c,e){return a.push(c+" ")>d.cacheLength&&delete b[a.shift()],b[c+" "]=e}return b}function ia(a){return a[u]=!0,a}function ja(a){var b=n.createElement("fieldset");try{return!!a(b)}catch(c){return!1}finally{b.parentNode&&b.parentNode.removeChild(b),b=null}}function ka(a,b){var c=a.split("|"),e=c.length;while(e--)d.attrHandle[c[e]]=b}function la(a,b){var c=b&&a,d=c&&1===a.nodeType&&1===b.nodeType&&a.sourceIndex-b.sourceIndex;if(d)return d;if(c)while(c=c.nextSibling)if(c===b)return-1;return a?1:-1}function ma(a){return function(b){var c=b.nodeName.toLowerCase();return"input"===c&&b.type===a}}function na(a){return function(b){var c=b.nodeName.toLowerCase();return("input"===c||"button"===c)&&b.type===a}}function oa(a){return function(b){return"form"in b?b.parentNode&&b.disabled===!1?"label"in b?"label"in b.parentNode?b.parentNode.disabled===a:b.disabled===a:b.isDisabled===a||b.isDisabled!==!a&&ea(b)===a:b.disabled===a:"label"in b&&b.disabled===a}}function pa(a){return ia(function(b){return b=+b,ia(function(c,d){var e,f=a([],c.length,b),g=f.length;while(g--)c[e=f[g]]&&(c[e]=!(d[e]=c[e]))})})}function qa(a){return a&&"undefined"!=typeof a.getElementsByTagName&&a}c=ga.support={},f=ga.isXML=function(a){var b=a&&(a.ownerDocument||a).documentElement;return!!b&&"HTML"!==b.nodeName},m=ga.setDocument=function(a){var b,e,g=a?a.ownerDocument||a:v;return g!==n&&9===g.nodeType&&g.documentElement?(n=g,o=n.documentElement,p=!f(n),v!==n&&(e=n.defaultView)&&e.top!==e&&(e.addEventListener?e.addEventListener("unload",da,!1):e.attachEvent&&e.attachEvent("onunload",da)),c.attributes=ja(function(a){return a.className="i",!a.getAttribute("className")}),c.getElementsByTagName=ja(function(a){return a.appendChild(n.createComment("")),!a.getElementsByTagName("*").length}),c.getElementsByClassName=Y.test(n.getElementsByClassName),c.getById=ja(function(a){return o.appendChild(a).id=u,!n.getElementsByName||!n.getElementsByName(u).length}),c.getById?(d.filter.ID=function(a){var b=a.replace(_,aa);return function(a){return a.getAttribute("id")===b}},d.find.ID=function(a,b){if("undefined"!=typeof b.getElementById&&p){var c=b.getElementById(a);return c?[c]:[]}}):(d.filter.ID=function(a){var b=a.replace(_,aa);return function(a){var c="undefined"!=typeof a.getAttributeNode&&a.getAttributeNode("id");return c&&c.value===b}},d.find.ID=function(a,b){if("undefined"!=typeof b.getElementById&&p){var c,d,e,f=b.getElementById(a);if(f){if(c=f.getAttributeNode("id"),c&&c.value===a)return[f];e=b.getElementsByName(a),d=0;while(f=e[d++])if(c=f.getAttributeNode("id"),c&&c.value===a)return[f]}return[]}}),d.find.TAG=c.getElementsByTagName?function(a,b){return"undefined"!=typeof b.getElementsByTagName?b.getElementsByTagName(a):c.qsa?b.querySelectorAll(a):void 0}:function(a,b){var c,d=[],e=0,f=b.getElementsByTagName(a);if("*"===a){while(c=f[e++])1===c.nodeType&&d.push(c);return d}return f},d.find.CLASS=c.getElementsByClassName&&function(a,b){if("undefined"!=typeof b.getElementsByClassName&&p)return b.getElementsByClassName(a)},r=[],q=[],(c.qsa=Y.test(n.querySelectorAll))&&(ja(function(a){o.appendChild(a).innerHTML="<a id='"+u+"'></a><select id='"+u+"-\r\\' msallowcapture=''><option selected=''></option></select>",a.querySelectorAll("[msallowcapture^='']").length&&q.push("[*^$]="+K+"*(?:''|\"\")"),a.querySelectorAll("[selected]").length||q.push("\\["+K+"*(?:value|"+J+")"),a.querySelectorAll("[id~="+u+"-]").length||q.push("~="),a.querySelectorAll(":checked").length||q.push(":checked"),a.querySelectorAll("a#"+u+"+*").length||q.push(".#.+[+~]")}),ja(function(a){a.innerHTML="<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";var b=n.createElement("input");b.setAttribute("type","hidden"),a.appendChild(b).setAttribute("name","D"),a.querySelectorAll("[name=d]").length&&q.push("name"+K+"*[*^$|!~]?="),2!==a.querySelectorAll(":enabled").length&&q.push(":enabled",":disabled"),o.appendChild(a).disabled=!0,2!==a.querySelectorAll(":disabled").length&&q.push(":enabled",":disabled"),a.querySelectorAll("*,:x"),q.push(",.*:")})),(c.matchesSelector=Y.test(s=o.matches||o.webkitMatchesSelector||o.mozMatchesSelector||o.oMatchesSelector||o.msMatchesSelector))&&ja(function(a){c.disconnectedMatch=s.call(a,"*"),s.call(a,"[s!='']:x"),r.push("!=",N)}),q=q.length&&new RegExp(q.join("|")),r=r.length&&new RegExp(r.join("|")),b=Y.test(o.compareDocumentPosition),t=b||Y.test(o.contains)?function(a,b){var c=9===a.nodeType?a.documentElement:a,d=b&&b.parentNode;return a===d||!(!d||1!==d.nodeType||!(c.contains?c.contains(d):a.compareDocumentPosition&&16&a.compareDocumentPosition(d)))}:function(a,b){if(b)while(b=b.parentNode)if(b===a)return!0;return!1},B=b?function(a,b){if(a===b)return l=!0,0;var d=!a.compareDocumentPosition-!b.compareDocumentPosition;return d?d:(d=(a.ownerDocument||a)===(b.ownerDocument||b)?a.compareDocumentPosition(b):1,1&d||!c.sortDetached&&b.compareDocumentPosition(a)===d?a===n||a.ownerDocument===v&&t(v,a)?-1:b===n||b.ownerDocument===v&&t(v,b)?1:k?I(k,a)-I(k,b):0:4&d?-1:1)}:function(a,b){if(a===b)return l=!0,0;var c,d=0,e=a.parentNode,f=b.parentNode,g=[a],h=[b];if(!e||!f)return a===n?-1:b===n?1:e?-1:f?1:k?I(k,a)-I(k,b):0;if(e===f)return la(a,b);c=a;while(c=c.parentNode)g.unshift(c);c=b;while(c=c.parentNode)h.unshift(c);while(g[d]===h[d])d++;return d?la(g[d],h[d]):g[d]===v?-1:h[d]===v?1:0},n):n},ga.matches=function(a,b){return ga(a,null,null,b)},ga.matchesSelector=function(a,b){if((a.ownerDocument||a)!==n&&m(a),b=b.replace(S,"='$1']"),c.matchesSelector&&p&&!A[b+" "]&&(!r||!r.test(b))&&(!q||!q.test(b)))try{var d=s.call(a,b);if(d||c.disconnectedMatch||a.document&&11!==a.document.nodeType)return d}catch(e){}return ga(b,n,null,[a]).length>0},ga.contains=function(a,b){return(a.ownerDocument||a)!==n&&m(a),t(a,b)},ga.attr=function(a,b){(a.ownerDocument||a)!==n&&m(a);var e=d.attrHandle[b.toLowerCase()],f=e&&C.call(d.attrHandle,b.toLowerCase())?e(a,b,!p):void 0;return void 0!==f?f:c.attributes||!p?a.getAttribute(b):(f=a.getAttributeNode(b))&&f.specified?f.value:null},ga.escape=function(a){return(a+"").replace(ba,ca)},ga.error=function(a){throw new Error("Syntax error, unrecognized expression: "+a)},ga.uniqueSort=function(a){var b,d=[],e=0,f=0;if(l=!c.detectDuplicates,k=!c.sortStable&&a.slice(0),a.sort(B),l){while(b=a[f++])b===a[f]&&(e=d.push(f));while(e--)a.splice(d[e],1)}return k=null,a},e=ga.getText=function(a){var b,c="",d=0,f=a.nodeType;if(f){if(1===f||9===f||11===f){if("string"==typeof a.textContent)return a.textContent;for(a=a.firstChild;a;a=a.nextSibling)c+=e(a)}else if(3===f||4===f)return a.nodeValue}else while(b=a[d++])c+=e(b);return c},d=ga.selectors={cacheLength:50,createPseudo:ia,match:V,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(a){return a[1]=a[1].replace(_,aa),a[3]=(a[3]||a[4]||a[5]||"").replace(_,aa),"~="===a[2]&&(a[3]=" "+a[3]+" "),a.slice(0,4)},CHILD:function(a){return a[1]=a[1].toLowerCase(),"nth"===a[1].slice(0,3)?(a[3]||ga.error(a[0]),a[4]=+(a[4]?a[5]+(a[6]||1):2*("even"===a[3]||"odd"===a[3])),a[5]=+(a[7]+a[8]||"odd"===a[3])):a[3]&&ga.error(a[0]),a},PSEUDO:function(a){var b,c=!a[6]&&a[2];return V.CHILD.test(a[0])?null:(a[3]?a[2]=a[4]||a[5]||"":c&&T.test(c)&&(b=g(c,!0))&&(b=c.indexOf(")",c.length-b)-c.length)&&(a[0]=a[0].slice(0,b),a[2]=c.slice(0,b)),a.slice(0,3))}},filter:{TAG:function(a){var b=a.replace(_,aa).toLowerCase();return"*"===a?function(){return!0}:function(a){return a.nodeName&&a.nodeName.toLowerCase()===b}},CLASS:function(a){var b=y[a+" "];return b||(b=new RegExp("(^|"+K+")"+a+"("+K+"|$)"))&&y(a,function(a){return b.test("string"==typeof a.className&&a.className||"undefined"!=typeof a.getAttribute&&a.getAttribute("class")||"")})},ATTR:function(a,b,c){return function(d){var e=ga.attr(d,a);return null==e?"!="===b:!b||(e+="","="===b?e===c:"!="===b?e!==c:"^="===b?c&&0===e.indexOf(c):"*="===b?c&&e.indexOf(c)>-1:"$="===b?c&&e.slice(-c.length)===c:"~="===b?(" "+e.replace(O," ")+" ").indexOf(c)>-1:"|="===b&&(e===c||e.slice(0,c.length+1)===c+"-"))}},CHILD:function(a,b,c,d,e){var f="nth"!==a.slice(0,3),g="last"!==a.slice(-4),h="of-type"===b;return 1===d&&0===e?function(a){return!!a.parentNode}:function(b,c,i){var j,k,l,m,n,o,p=f!==g?"nextSibling":"previousSibling",q=b.parentNode,r=h&&b.nodeName.toLowerCase(),s=!i&&!h,t=!1;if(q){if(f){while(p){m=b;while(m=m[p])if(h?m.nodeName.toLowerCase()===r:1===m.nodeType)return!1;o=p="only"===a&&!o&&"nextSibling"}return!0}if(o=[g?q.firstChild:q.lastChild],g&&s){m=q,l=m[u]||(m[u]={}),k=l[m.uniqueID]||(l[m.uniqueID]={}),j=k[a]||[],n=j[0]===w&&j[1],t=n&&j[2],m=n&&q.childNodes[n];while(m=++n&&m&&m[p]||(t=n=0)||o.pop())if(1===m.nodeType&&++t&&m===b){k[a]=[w,n,t];break}}else if(s&&(m=b,l=m[u]||(m[u]={}),k=l[m.uniqueID]||(l[m.uniqueID]={}),j=k[a]||[],n=j[0]===w&&j[1],t=n),t===!1)while(m=++n&&m&&m[p]||(t=n=0)||o.pop())if((h?m.nodeName.toLowerCase()===r:1===m.nodeType)&&++t&&(s&&(l=m[u]||(m[u]={}),k=l[m.uniqueID]||(l[m.uniqueID]={}),k[a]=[w,t]),m===b))break;return t-=e,t===d||t%d===0&&t/d>=0}}},PSEUDO:function(a,b){var c,e=d.pseudos[a]||d.setFilters[a.toLowerCase()]||ga.error("unsupported pseudo: "+a);return e[u]?e(b):e.length>1?(c=[a,a,"",b],d.setFilters.hasOwnProperty(a.toLowerCase())?ia(function(a,c){var d,f=e(a,b),g=f.length;while(g--)d=I(a,f[g]),a[d]=!(c[d]=f[g])}):function(a){return e(a,0,c)}):e}},pseudos:{not:ia(function(a){var b=[],c=[],d=h(a.replace(P,"$1"));return d[u]?ia(function(a,b,c,e){var f,g=d(a,null,e,[]),h=a.length;while(h--)(f=g[h])&&(a[h]=!(b[h]=f))}):function(a,e,f){return b[0]=a,d(b,null,f,c),b[0]=null,!c.pop()}}),has:ia(function(a){return function(b){return ga(a,b).length>0}}),contains:ia(function(a){return a=a.replace(_,aa),function(b){return(b.textContent||b.innerText||e(b)).indexOf(a)>-1}}),lang:ia(function(a){return U.test(a||"")||ga.error("unsupported lang: "+a),a=a.replace(_,aa).toLowerCase(),function(b){var c;do if(c=p?b.lang:b.getAttribute("xml:lang")||b.getAttribute("lang"))return c=c.toLowerCase(),c===a||0===c.indexOf(a+"-");while((b=b.parentNode)&&1===b.nodeType);return!1}}),target:function(b){var c=a.location&&a.location.hash;return c&&c.slice(1)===b.id},root:function(a){return a===o},focus:function(a){return a===n.activeElement&&(!n.hasFocus||n.hasFocus())&&!!(a.type||a.href||~a.tabIndex)},enabled:oa(!1),disabled:oa(!0),checked:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&!!a.checked||"option"===b&&!!a.selected},selected:function(a){return a.parentNode&&a.parentNode.selectedIndex,a.selected===!0},empty:function(a){for(a=a.firstChild;a;a=a.nextSibling)if(a.nodeType<6)return!1;return!0},parent:function(a){return!d.pseudos.empty(a)},header:function(a){return X.test(a.nodeName)},input:function(a){return W.test(a.nodeName)},button:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&"button"===a.type||"button"===b},text:function(a){var b;return"input"===a.nodeName.toLowerCase()&&"text"===a.type&&(null==(b=a.getAttribute("type"))||"text"===b.toLowerCase())},first:pa(function(){return[0]}),last:pa(function(a,b){return[b-1]}),eq:pa(function(a,b,c){return[c<0?c+b:c]}),even:pa(function(a,b){for(var c=0;c<b;c+=2)a.push(c);return a}),odd:pa(function(a,b){for(var c=1;c<b;c+=2)a.push(c);return a}),lt:pa(function(a,b,c){for(var d=c<0?c+b:c;--d>=0;)a.push(d);return a}),gt:pa(function(a,b,c){for(var d=c<0?c+b:c;++d<b;)a.push(d);return a})}},d.pseudos.nth=d.pseudos.eq;for(b in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})d.pseudos[b]=ma(b);for(b in{submit:!0,reset:!0})d.pseudos[b]=na(b);function ra(){}ra.prototype=d.filters=d.pseudos,d.setFilters=new ra,g=ga.tokenize=function(a,b){var c,e,f,g,h,i,j,k=z[a+" "];if(k)return b?0:k.slice(0);h=a,i=[],j=d.preFilter;while(h){c&&!(e=Q.exec(h))||(e&&(h=h.slice(e[0].length)||h),i.push(f=[])),c=!1,(e=R.exec(h))&&(c=e.shift(),f.push({value:c,type:e[0].replace(P," ")}),h=h.slice(c.length));for(g in d.filter)!(e=V[g].exec(h))||j[g]&&!(e=j[g](e))||(c=e.shift(),f.push({value:c,type:g,matches:e}),h=h.slice(c.length));if(!c)break}return b?h.length:h?ga.error(a):z(a,i).slice(0)};function sa(a){for(var b=0,c=a.length,d="";b<c;b++)d+=a[b].value;return d}function ta(a,b,c){var d=b.dir,e=b.next,f=e||d,g=c&&"parentNode"===f,h=x++;return b.first?function(b,c,e){while(b=b[d])if(1===b.nodeType||g)return a(b,c,e);return!1}:function(b,c,i){var j,k,l,m=[w,h];if(i){while(b=b[d])if((1===b.nodeType||g)&&a(b,c,i))return!0}else while(b=b[d])if(1===b.nodeType||g)if(l=b[u]||(b[u]={}),k=l[b.uniqueID]||(l[b.uniqueID]={}),e&&e===b.nodeName.toLowerCase())b=b[d]||b;else{if((j=k[f])&&j[0]===w&&j[1]===h)return m[2]=j[2];if(k[f]=m,m[2]=a(b,c,i))return!0}return!1}}function ua(a){return a.length>1?function(b,c,d){var e=a.length;while(e--)if(!a[e](b,c,d))return!1;return!0}:a[0]}function va(a,b,c){for(var d=0,e=b.length;d<e;d++)ga(a,b[d],c);return c}function wa(a,b,c,d,e){for(var f,g=[],h=0,i=a.length,j=null!=b;h<i;h++)(f=a[h])&&(c&&!c(f,d,e)||(g.push(f),j&&b.push(h)));return g}function xa(a,b,c,d,e,f){return d&&!d[u]&&(d=xa(d)),e&&!e[u]&&(e=xa(e,f)),ia(function(f,g,h,i){var j,k,l,m=[],n=[],o=g.length,p=f||va(b||"*",h.nodeType?[h]:h,[]),q=!a||!f&&b?p:wa(p,m,a,h,i),r=c?e||(f?a:o||d)?[]:g:q;if(c&&c(q,r,h,i),d){j=wa(r,n),d(j,[],h,i),k=j.length;while(k--)(l=j[k])&&(r[n[k]]=!(q[n[k]]=l))}if(f){if(e||a){if(e){j=[],k=r.length;while(k--)(l=r[k])&&j.push(q[k]=l);e(null,r=[],j,i)}k=r.length;while(k--)(l=r[k])&&(j=e?I(f,l):m[k])>-1&&(f[j]=!(g[j]=l))}}else r=wa(r===g?r.splice(o,r.length):r),e?e(null,g,r,i):G.apply(g,r)})}function ya(a){for(var b,c,e,f=a.length,g=d.relative[a[0].type],h=g||d.relative[" "],i=g?1:0,k=ta(function(a){return a===b},h,!0),l=ta(function(a){return I(b,a)>-1},h,!0),m=[function(a,c,d){var e=!g&&(d||c!==j)||((b=c).nodeType?k(a,c,d):l(a,c,d));return b=null,e}];i<f;i++)if(c=d.relative[a[i].type])m=[ta(ua(m),c)];else{if(c=d.filter[a[i].type].apply(null,a[i].matches),c[u]){for(e=++i;e<f;e++)if(d.relative[a[e].type])break;return xa(i>1&&ua(m),i>1&&sa(a.slice(0,i-1).concat({value:" "===a[i-2].type?"*":""})).replace(P,"$1"),c,i<e&&ya(a.slice(i,e)),e<f&&ya(a=a.slice(e)),e<f&&sa(a))}m.push(c)}return ua(m)}function za(a,b){var c=b.length>0,e=a.length>0,f=function(f,g,h,i,k){var l,o,q,r=0,s="0",t=f&&[],u=[],v=j,x=f||e&&d.find.TAG("*",k),y=w+=null==v?1:Math.random()||.1,z=x.length;for(k&&(j=g===n||g||k);s!==z&&null!=(l=x[s]);s++){if(e&&l){o=0,g||l.ownerDocument===n||(m(l),h=!p);while(q=a[o++])if(q(l,g||n,h)){i.push(l);break}k&&(w=y)}c&&((l=!q&&l)&&r--,f&&t.push(l))}if(r+=s,c&&s!==r){o=0;while(q=b[o++])q(t,u,g,h);if(f){if(r>0)while(s--)t[s]||u[s]||(u[s]=E.call(i));u=wa(u)}G.apply(i,u),k&&!f&&u.length>0&&r+b.length>1&&ga.uniqueSort(i)}return k&&(w=y,j=v),t};return c?ia(f):f}return h=ga.compile=function(a,b){var c,d=[],e=[],f=A[a+" "];if(!f){b||(b=g(a)),c=b.length;while(c--)f=ya(b[c]),f[u]?d.push(f):e.push(f);f=A(a,za(e,d)),f.selector=a}return f},i=ga.select=function(a,b,c,e){var f,i,j,k,l,m="function"==typeof a&&a,n=!e&&g(a=m.selector||a);if(c=c||[],1===n.length){if(i=n[0]=n[0].slice(0),i.length>2&&"ID"===(j=i[0]).type&&9===b.nodeType&&p&&d.relative[i[1].type]){if(b=(d.find.ID(j.matches[0].replace(_,aa),b)||[])[0],!b)return c;m&&(b=b.parentNode),a=a.slice(i.shift().value.length)}f=V.needsContext.test(a)?0:i.length;while(f--){if(j=i[f],d.relative[k=j.type])break;if((l=d.find[k])&&(e=l(j.matches[0].replace(_,aa),$.test(i[0].type)&&qa(b.parentNode)||b))){if(i.splice(f,1),a=e.length&&sa(i),!a)return G.apply(c,e),c;break}}}return(m||h(a,n))(e,b,!p,c,!b||$.test(a)&&qa(b.parentNode)||b),c},c.sortStable=u.split("").sort(B).join("")===u,c.detectDuplicates=!!l,m(),c.sortDetached=ja(function(a){return 1&a.compareDocumentPosition(n.createElement("fieldset"))}),ja(function(a){return a.innerHTML="<a href='#'></a>","#"===a.firstChild.getAttribute("href")})||ka("type|href|height|width",function(a,b,c){if(!c)return a.getAttribute(b,"type"===b.toLowerCase()?1:2)}),c.attributes&&ja(function(a){return a.innerHTML="<input/>",a.firstChild.setAttribute("value",""),""===a.firstChild.getAttribute("value")})||ka("value",function(a,b,c){if(!c&&"input"===a.nodeName.toLowerCase())return a.defaultValue}),ja(function(a){return null==a.getAttribute("disabled")})||ka(J,function(a,b,c){var d;if(!c)return a[b]===!0?b.toLowerCase():(d=a.getAttributeNode(b))&&d.specified?d.value:null}),ga}(a);r.find=x,r.expr=x.selectors,r.expr[":"]=r.expr.pseudos,r.uniqueSort=r.unique=x.uniqueSort,r.text=x.getText,r.isXMLDoc=x.isXML,r.contains=x.contains,r.escapeSelector=x.escape;var y=function(a,b,c){var d=[],e=void 0!==c;while((a=a[b])&&9!==a.nodeType)if(1===a.nodeType){if(e&&r(a).is(c))break;d.push(a)}return d},z=function(a,b){for(var c=[];a;a=a.nextSibling)1===a.nodeType&&a!==b&&c.push(a);return c},A=r.expr.match.needsContext;function B(a,b){return a.nodeName&&a.nodeName.toLowerCase()===b.toLowerCase()}var C=/^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i,D=/^.[^:#\[\.,]*$/;function E(a,b,c){return r.isFunction(b)?r.grep(a,function(a,d){return!!b.call(a,d,a)!==c}):b.nodeType?r.grep(a,function(a){return a===b!==c}):"string"!=typeof b?r.grep(a,function(a){return i.call(b,a)>-1!==c}):D.test(b)?r.filter(b,a,c):(b=r.filter(b,a),r.grep(a,function(a){return i.call(b,a)>-1!==c&&1===a.nodeType}))}r.filter=function(a,b,c){var d=b[0];return c&&(a=":not("+a+")"),1===b.length&&1===d.nodeType?r.find.matchesSelector(d,a)?[d]:[]:r.find.matches(a,r.grep(b,function(a){return 1===a.nodeType}))},r.fn.extend({find:function(a){var b,c,d=this.length,e=this;if("string"!=typeof a)return this.pushStack(r(a).filter(function(){for(b=0;b<d;b++)if(r.contains(e[b],this))return!0}));for(c=this.pushStack([]),b=0;b<d;b++)r.find(a,e[b],c);return d>1?r.uniqueSort(c):c},filter:function(a){return this.pushStack(E(this,a||[],!1))},not:function(a){return this.pushStack(E(this,a||[],!0))},is:function(a){return!!E(this,"string"==typeof a&&A.test(a)?r(a):a||[],!1).length}});var F,G=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,H=r.fn.init=function(a,b,c){var e,f;if(!a)return this;if(c=c||F,"string"==typeof a){if(e="<"===a[0]&&">"===a[a.length-1]&&a.length>=3?[null,a,null]:G.exec(a),!e||!e[1]&&b)return!b||b.jquery?(b||c).find(a):this.constructor(b).find(a);if(e[1]){if(b=b instanceof r?b[0]:b,r.merge(this,r.parseHTML(e[1],b&&b.nodeType?b.ownerDocument||b:d,!0)),C.test(e[1])&&r.isPlainObject(b))for(e in b)r.isFunction(this[e])?this[e](b[e]):this.attr(e,b[e]);return this}return f=d.getElementById(e[2]),f&&(this[0]=f,this.length=1),this}return a.nodeType?(this[0]=a,this.length=1,this):r.isFunction(a)?void 0!==c.ready?c.ready(a):a(r):r.makeArray(a,this)};H.prototype=r.fn,F=r(d);var I=/^(?:parents|prev(?:Until|All))/,J={children:!0,contents:!0,next:!0,prev:!0};r.fn.extend({has:function(a){var b=r(a,this),c=b.length;return this.filter(function(){for(var a=0;a<c;a++)if(r.contains(this,b[a]))return!0})},closest:function(a,b){var c,d=0,e=this.length,f=[],g="string"!=typeof a&&r(a);if(!A.test(a))for(;d<e;d++)for(c=this[d];c&&c!==b;c=c.parentNode)if(c.nodeType<11&&(g?g.index(c)>-1:1===c.nodeType&&r.find.matchesSelector(c,a))){f.push(c);break}return this.pushStack(f.length>1?r.uniqueSort(f):f)},index:function(a){return a?"string"==typeof a?i.call(r(a),this[0]):i.call(this,a.jquery?a[0]:a):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(a,b){return this.pushStack(r.uniqueSort(r.merge(this.get(),r(a,b))))},addBack:function(a){return this.add(null==a?this.prevObject:this.prevObject.filter(a))}});function K(a,b){while((a=a[b])&&1!==a.nodeType);return a}r.each({parent:function(a){var b=a.parentNode;return b&&11!==b.nodeType?b:null},parents:function(a){return y(a,"parentNode")},parentsUntil:function(a,b,c){return y(a,"parentNode",c)},next:function(a){return K(a,"nextSibling")},prev:function(a){return K(a,"previousSibling")},nextAll:function(a){return y(a,"nextSibling")},prevAll:function(a){return y(a,"previousSibling")},nextUntil:function(a,b,c){return y(a,"nextSibling",c)},prevUntil:function(a,b,c){return y(a,"previousSibling",c)},siblings:function(a){return z((a.parentNode||{}).firstChild,a)},children:function(a){return z(a.firstChild)},contents:function(a){return B(a,"iframe")?a.contentDocument:(B(a,"template")&&(a=a.content||a),r.merge([],a.childNodes))}},function(a,b){r.fn[a]=function(c,d){var e=r.map(this,b,c);return"Until"!==a.slice(-5)&&(d=c),d&&"string"==typeof d&&(e=r.filter(d,e)),this.length>1&&(J[a]||r.uniqueSort(e),I.test(a)&&e.reverse()),this.pushStack(e)}});var L=/[^\x20\t\r\n\f]+/g;function M(a){var b={};return r.each(a.match(L)||[],function(a,c){b[c]=!0}),b}r.Callbacks=function(a){a="string"==typeof a?M(a):r.extend({},a);var b,c,d,e,f=[],g=[],h=-1,i=function(){for(e=e||a.once,d=b=!0;g.length;h=-1){c=g.shift();while(++h<f.length)f[h].apply(c[0],c[1])===!1&&a.stopOnFalse&&(h=f.length,c=!1)}a.memory||(c=!1),b=!1,e&&(f=c?[]:"")},j={add:function(){return f&&(c&&!b&&(h=f.length-1,g.push(c)),function d(b){r.each(b,function(b,c){r.isFunction(c)?a.unique&&j.has(c)||f.push(c):c&&c.length&&"string"!==r.type(c)&&d(c)})}(arguments),c&&!b&&i()),this},remove:function(){return r.each(arguments,function(a,b){var c;while((c=r.inArray(b,f,c))>-1)f.splice(c,1),c<=h&&h--}),this},has:function(a){return a?r.inArray(a,f)>-1:f.length>0},empty:function(){return f&&(f=[]),this},disable:function(){return e=g=[],f=c="",this},disabled:function(){return!f},lock:function(){return e=g=[],c||b||(f=c=""),this},locked:function(){return!!e},fireWith:function(a,c){return e||(c=c||[],c=[a,c.slice?c.slice():c],g.push(c),b||i()),this},fire:function(){return j.fireWith(this,arguments),this},fired:function(){return!!d}};return j};function N(a){return a}function O(a){throw a}function P(a,b,c,d){var e;try{a&&r.isFunction(e=a.promise)?e.call(a).done(b).fail(c):a&&r.isFunction(e=a.then)?e.call(a,b,c):b.apply(void 0,[a].slice(d))}catch(a){c.apply(void 0,[a])}}r.extend({Deferred:function(b){var c=[["notify","progress",r.Callbacks("memory"),r.Callbacks("memory"),2],["resolve","done",r.Callbacks("once memory"),r.Callbacks("once memory"),0,"resolved"],["reject","fail",r.Callbacks("once memory"),r.Callbacks("once memory"),1,"rejected"]],d="pending",e={state:function(){return d},always:function(){return f.done(arguments).fail(arguments),this},"catch":function(a){return e.then(null,a)},pipe:function(){var a=arguments;return r.Deferred(function(b){r.each(c,function(c,d){var e=r.isFunction(a[d[4]])&&a[d[4]];f[d[1]](function(){var a=e&&e.apply(this,arguments);a&&r.isFunction(a.promise)?a.promise().progress(b.notify).done(b.resolve).fail(b.reject):b[d[0]+"With"](this,e?[a]:arguments)})}),a=null}).promise()},then:function(b,d,e){var f=0;function g(b,c,d,e){return function(){var h=this,i=arguments,j=function(){var a,j;if(!(b<f)){if(a=d.apply(h,i),a===c.promise())throw new TypeError("Thenable self-resolution");j=a&&("object"==typeof a||"function"==typeof a)&&a.then,r.isFunction(j)?e?j.call(a,g(f,c,N,e),g(f,c,O,e)):(f++,j.call(a,g(f,c,N,e),g(f,c,O,e),g(f,c,N,c.notifyWith))):(d!==N&&(h=void 0,i=[a]),(e||c.resolveWith)(h,i))}},k=e?j:function(){try{j()}catch(a){r.Deferred.exceptionHook&&r.Deferred.exceptionHook(a,k.stackTrace),b+1>=f&&(d!==O&&(h=void 0,i=[a]),c.rejectWith(h,i))}};b?k():(r.Deferred.getStackHook&&(k.stackTrace=r.Deferred.getStackHook()),a.setTimeout(k))}}return r.Deferred(function(a){c[0][3].add(g(0,a,r.isFunction(e)?e:N,a.notifyWith)),c[1][3].add(g(0,a,r.isFunction(b)?b:N)),c[2][3].add(g(0,a,r.isFunction(d)?d:O))}).promise()},promise:function(a){return null!=a?r.extend(a,e):e}},f={};return r.each(c,function(a,b){var g=b[2],h=b[5];e[b[1]]=g.add,h&&g.add(function(){d=h},c[3-a][2].disable,c[0][2].lock),g.add(b[3].fire),f[b[0]]=function(){return f[b[0]+"With"](this===f?void 0:this,arguments),this},f[b[0]+"With"]=g.fireWith}),e.promise(f),b&&b.call(f,f),f},when:function(a){var b=arguments.length,c=b,d=Array(c),e=f.call(arguments),g=r.Deferred(),h=function(a){return function(c){d[a]=this,e[a]=arguments.length>1?f.call(arguments):c,--b||g.resolveWith(d,e)}};if(b<=1&&(P(a,g.done(h(c)).resolve,g.reject,!b),"pending"===g.state()||r.isFunction(e[c]&&e[c].then)))return g.then();while(c--)P(e[c],h(c),g.reject);return g.promise()}});var Q=/^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;r.Deferred.exceptionHook=function(b,c){a.console&&a.console.warn&&b&&Q.test(b.name)&&a.console.warn("jQuery.Deferred exception: "+b.message,b.stack,c)},r.readyException=function(b){a.setTimeout(function(){throw b})};var R=r.Deferred();r.fn.ready=function(a){return R.then(a)["catch"](function(a){r.readyException(a)}),this},r.extend({isReady:!1,readyWait:1,ready:function(a){(a===!0?--r.readyWait:r.isReady)||(r.isReady=!0,a!==!0&&--r.readyWait>0||R.resolveWith(d,[r]))}}),r.ready.then=R.then;function S(){d.removeEventListener("DOMContentLoaded",S),
a.removeEventListener("load",S),r.ready()}"complete"===d.readyState||"loading"!==d.readyState&&!d.documentElement.doScroll?a.setTimeout(r.ready):(d.addEventListener("DOMContentLoaded",S),a.addEventListener("load",S));var T=function(a,b,c,d,e,f,g){var h=0,i=a.length,j=null==c;if("object"===r.type(c)){e=!0;for(h in c)T(a,b,h,c[h],!0,f,g)}else if(void 0!==d&&(e=!0,r.isFunction(d)||(g=!0),j&&(g?(b.call(a,d),b=null):(j=b,b=function(a,b,c){return j.call(r(a),c)})),b))for(;h<i;h++)b(a[h],c,g?d:d.call(a[h],h,b(a[h],c)));return e?a:j?b.call(a):i?b(a[0],c):f},U=function(a){return 1===a.nodeType||9===a.nodeType||!+a.nodeType};function V(){this.expando=r.expando+V.uid++}V.uid=1,V.prototype={cache:function(a){var b=a[this.expando];return b||(b={},U(a)&&(a.nodeType?a[this.expando]=b:Object.defineProperty(a,this.expando,{value:b,configurable:!0}))),b},set:function(a,b,c){var d,e=this.cache(a);if("string"==typeof b)e[r.camelCase(b)]=c;else for(d in b)e[r.camelCase(d)]=b[d];return e},get:function(a,b){return void 0===b?this.cache(a):a[this.expando]&&a[this.expando][r.camelCase(b)]},access:function(a,b,c){return void 0===b||b&&"string"==typeof b&&void 0===c?this.get(a,b):(this.set(a,b,c),void 0!==c?c:b)},remove:function(a,b){var c,d=a[this.expando];if(void 0!==d){if(void 0!==b){Array.isArray(b)?b=b.map(r.camelCase):(b=r.camelCase(b),b=b in d?[b]:b.match(L)||[]),c=b.length;while(c--)delete d[b[c]]}(void 0===b||r.isEmptyObject(d))&&(a.nodeType?a[this.expando]=void 0:delete a[this.expando])}},hasData:function(a){var b=a[this.expando];return void 0!==b&&!r.isEmptyObject(b)}};var W=new V,X=new V,Y=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,Z=/[A-Z]/g;function $(a){return"true"===a||"false"!==a&&("null"===a?null:a===+a+""?+a:Y.test(a)?JSON.parse(a):a)}function _(a,b,c){var d;if(void 0===c&&1===a.nodeType)if(d="data-"+b.replace(Z,"-$&").toLowerCase(),c=a.getAttribute(d),"string"==typeof c){try{c=$(c)}catch(e){}X.set(a,b,c)}else c=void 0;return c}r.extend({hasData:function(a){return X.hasData(a)||W.hasData(a)},data:function(a,b,c){return X.access(a,b,c)},removeData:function(a,b){X.remove(a,b)},_data:function(a,b,c){return W.access(a,b,c)},_removeData:function(a,b){W.remove(a,b)}}),r.fn.extend({data:function(a,b){var c,d,e,f=this[0],g=f&&f.attributes;if(void 0===a){if(this.length&&(e=X.get(f),1===f.nodeType&&!W.get(f,"hasDataAttrs"))){c=g.length;while(c--)g[c]&&(d=g[c].name,0===d.indexOf("data-")&&(d=r.camelCase(d.slice(5)),_(f,d,e[d])));W.set(f,"hasDataAttrs",!0)}return e}return"object"==typeof a?this.each(function(){X.set(this,a)}):T(this,function(b){var c;if(f&&void 0===b){if(c=X.get(f,a),void 0!==c)return c;if(c=_(f,a),void 0!==c)return c}else this.each(function(){X.set(this,a,b)})},null,b,arguments.length>1,null,!0)},removeData:function(a){return this.each(function(){X.remove(this,a)})}}),r.extend({queue:function(a,b,c){var d;if(a)return b=(b||"fx")+"queue",d=W.get(a,b),c&&(!d||Array.isArray(c)?d=W.access(a,b,r.makeArray(c)):d.push(c)),d||[]},dequeue:function(a,b){b=b||"fx";var c=r.queue(a,b),d=c.length,e=c.shift(),f=r._queueHooks(a,b),g=function(){r.dequeue(a,b)};"inprogress"===e&&(e=c.shift(),d--),e&&("fx"===b&&c.unshift("inprogress"),delete f.stop,e.call(a,g,f)),!d&&f&&f.empty.fire()},_queueHooks:function(a,b){var c=b+"queueHooks";return W.get(a,c)||W.access(a,c,{empty:r.Callbacks("once memory").add(function(){W.remove(a,[b+"queue",c])})})}}),r.fn.extend({queue:function(a,b){var c=2;return"string"!=typeof a&&(b=a,a="fx",c--),arguments.length<c?r.queue(this[0],a):void 0===b?this:this.each(function(){var c=r.queue(this,a,b);r._queueHooks(this,a),"fx"===a&&"inprogress"!==c[0]&&r.dequeue(this,a)})},dequeue:function(a){return this.each(function(){r.dequeue(this,a)})},clearQueue:function(a){return this.queue(a||"fx",[])},promise:function(a,b){var c,d=1,e=r.Deferred(),f=this,g=this.length,h=function(){--d||e.resolveWith(f,[f])};"string"!=typeof a&&(b=a,a=void 0),a=a||"fx";while(g--)c=W.get(f[g],a+"queueHooks"),c&&c.empty&&(d++,c.empty.add(h));return h(),e.promise(b)}});var aa=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,ba=new RegExp("^(?:([+-])=|)("+aa+")([a-z%]*)$","i"),ca=["Top","Right","Bottom","Left"],da=function(a,b){return a=b||a,"none"===a.style.display||""===a.style.display&&r.contains(a.ownerDocument,a)&&"none"===r.css(a,"display")},ea=function(a,b,c,d){var e,f,g={};for(f in b)g[f]=a.style[f],a.style[f]=b[f];e=c.apply(a,d||[]);for(f in b)a.style[f]=g[f];return e};function fa(a,b,c,d){var e,f=1,g=20,h=d?function(){return d.cur()}:function(){return r.css(a,b,"")},i=h(),j=c&&c[3]||(r.cssNumber[b]?"":"px"),k=(r.cssNumber[b]||"px"!==j&&+i)&&ba.exec(r.css(a,b));if(k&&k[3]!==j){j=j||k[3],c=c||[],k=+i||1;do f=f||".5",k/=f,r.style(a,b,k+j);while(f!==(f=h()/i)&&1!==f&&--g)}return c&&(k=+k||+i||0,e=c[1]?k+(c[1]+1)*c[2]:+c[2],d&&(d.unit=j,d.start=k,d.end=e)),e}var ga={};function ha(a){var b,c=a.ownerDocument,d=a.nodeName,e=ga[d];return e?e:(b=c.body.appendChild(c.createElement(d)),e=r.css(b,"display"),b.parentNode.removeChild(b),"none"===e&&(e="block"),ga[d]=e,e)}function ia(a,b){for(var c,d,e=[],f=0,g=a.length;f<g;f++)d=a[f],d.style&&(c=d.style.display,b?("none"===c&&(e[f]=W.get(d,"display")||null,e[f]||(d.style.display="")),""===d.style.display&&da(d)&&(e[f]=ha(d))):"none"!==c&&(e[f]="none",W.set(d,"display",c)));for(f=0;f<g;f++)null!=e[f]&&(a[f].style.display=e[f]);return a}r.fn.extend({show:function(){return ia(this,!0)},hide:function(){return ia(this)},toggle:function(a){return"boolean"==typeof a?a?this.show():this.hide():this.each(function(){da(this)?r(this).show():r(this).hide()})}});var ja=/^(?:checkbox|radio)$/i,ka=/<([a-z][^\/\0>\x20\t\r\n\f]+)/i,la=/^$|\/(?:java|ecma)script/i,ma={option:[1,"<select multiple='multiple'>","</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};ma.optgroup=ma.option,ma.tbody=ma.tfoot=ma.colgroup=ma.caption=ma.thead,ma.th=ma.td;function na(a,b){var c;return c="undefined"!=typeof a.getElementsByTagName?a.getElementsByTagName(b||"*"):"undefined"!=typeof a.querySelectorAll?a.querySelectorAll(b||"*"):[],void 0===b||b&&B(a,b)?r.merge([a],c):c}function oa(a,b){for(var c=0,d=a.length;c<d;c++)W.set(a[c],"globalEval",!b||W.get(b[c],"globalEval"))}var pa=/<|&#?\w+;/;function qa(a,b,c,d,e){for(var f,g,h,i,j,k,l=b.createDocumentFragment(),m=[],n=0,o=a.length;n<o;n++)if(f=a[n],f||0===f)if("object"===r.type(f))r.merge(m,f.nodeType?[f]:f);else if(pa.test(f)){g=g||l.appendChild(b.createElement("div")),h=(ka.exec(f)||["",""])[1].toLowerCase(),i=ma[h]||ma._default,g.innerHTML=i[1]+r.htmlPrefilter(f)+i[2],k=i[0];while(k--)g=g.lastChild;r.merge(m,g.childNodes),g=l.firstChild,g.textContent=""}else m.push(b.createTextNode(f));l.textContent="",n=0;while(f=m[n++])if(d&&r.inArray(f,d)>-1)e&&e.push(f);else if(j=r.contains(f.ownerDocument,f),g=na(l.appendChild(f),"script"),j&&oa(g),c){k=0;while(f=g[k++])la.test(f.type||"")&&c.push(f)}return l}!function(){var a=d.createDocumentFragment(),b=a.appendChild(d.createElement("div")),c=d.createElement("input");c.setAttribute("type","radio"),c.setAttribute("checked","checked"),c.setAttribute("name","t"),b.appendChild(c),o.checkClone=b.cloneNode(!0).cloneNode(!0).lastChild.checked,b.innerHTML="<textarea>x</textarea>",o.noCloneChecked=!!b.cloneNode(!0).lastChild.defaultValue}();var ra=d.documentElement,sa=/^key/,ta=/^(?:mouse|pointer|contextmenu|drag|drop)|click/,ua=/^([^.]*)(?:\.(.+)|)/;function va(){return!0}function wa(){return!1}function xa(){try{return d.activeElement}catch(a){}}function ya(a,b,c,d,e,f){var g,h;if("object"==typeof b){"string"!=typeof c&&(d=d||c,c=void 0);for(h in b)ya(a,h,c,d,b[h],f);return a}if(null==d&&null==e?(e=c,d=c=void 0):null==e&&("string"==typeof c?(e=d,d=void 0):(e=d,d=c,c=void 0)),e===!1)e=wa;else if(!e)return a;return 1===f&&(g=e,e=function(a){return r().off(a),g.apply(this,arguments)},e.guid=g.guid||(g.guid=r.guid++)),a.each(function(){r.event.add(this,b,e,d,c)})}r.event={global:{},add:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,n,o,p,q=W.get(a);if(q){c.handler&&(f=c,c=f.handler,e=f.selector),e&&r.find.matchesSelector(ra,e),c.guid||(c.guid=r.guid++),(i=q.events)||(i=q.events={}),(g=q.handle)||(g=q.handle=function(b){return"undefined"!=typeof r&&r.event.triggered!==b.type?r.event.dispatch.apply(a,arguments):void 0}),b=(b||"").match(L)||[""],j=b.length;while(j--)h=ua.exec(b[j])||[],n=p=h[1],o=(h[2]||"").split(".").sort(),n&&(l=r.event.special[n]||{},n=(e?l.delegateType:l.bindType)||n,l=r.event.special[n]||{},k=r.extend({type:n,origType:p,data:d,handler:c,guid:c.guid,selector:e,needsContext:e&&r.expr.match.needsContext.test(e),namespace:o.join(".")},f),(m=i[n])||(m=i[n]=[],m.delegateCount=0,l.setup&&l.setup.call(a,d,o,g)!==!1||a.addEventListener&&a.addEventListener(n,g)),l.add&&(l.add.call(a,k),k.handler.guid||(k.handler.guid=c.guid)),e?m.splice(m.delegateCount++,0,k):m.push(k),r.event.global[n]=!0)}},remove:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,n,o,p,q=W.hasData(a)&&W.get(a);if(q&&(i=q.events)){b=(b||"").match(L)||[""],j=b.length;while(j--)if(h=ua.exec(b[j])||[],n=p=h[1],o=(h[2]||"").split(".").sort(),n){l=r.event.special[n]||{},n=(d?l.delegateType:l.bindType)||n,m=i[n]||[],h=h[2]&&new RegExp("(^|\\.)"+o.join("\\.(?:.*\\.|)")+"(\\.|$)"),g=f=m.length;while(f--)k=m[f],!e&&p!==k.origType||c&&c.guid!==k.guid||h&&!h.test(k.namespace)||d&&d!==k.selector&&("**"!==d||!k.selector)||(m.splice(f,1),k.selector&&m.delegateCount--,l.remove&&l.remove.call(a,k));g&&!m.length&&(l.teardown&&l.teardown.call(a,o,q.handle)!==!1||r.removeEvent(a,n,q.handle),delete i[n])}else for(n in i)r.event.remove(a,n+b[j],c,d,!0);r.isEmptyObject(i)&&W.remove(a,"handle events")}},dispatch:function(a){var b=r.event.fix(a),c,d,e,f,g,h,i=new Array(arguments.length),j=(W.get(this,"events")||{})[b.type]||[],k=r.event.special[b.type]||{};for(i[0]=b,c=1;c<arguments.length;c++)i[c]=arguments[c];if(b.delegateTarget=this,!k.preDispatch||k.preDispatch.call(this,b)!==!1){h=r.event.handlers.call(this,b,j),c=0;while((f=h[c++])&&!b.isPropagationStopped()){b.currentTarget=f.elem,d=0;while((g=f.handlers[d++])&&!b.isImmediatePropagationStopped())b.rnamespace&&!b.rnamespace.test(g.namespace)||(b.handleObj=g,b.data=g.data,e=((r.event.special[g.origType]||{}).handle||g.handler).apply(f.elem,i),void 0!==e&&(b.result=e)===!1&&(b.preventDefault(),b.stopPropagation()))}return k.postDispatch&&k.postDispatch.call(this,b),b.result}},handlers:function(a,b){var c,d,e,f,g,h=[],i=b.delegateCount,j=a.target;if(i&&j.nodeType&&!("click"===a.type&&a.button>=1))for(;j!==this;j=j.parentNode||this)if(1===j.nodeType&&("click"!==a.type||j.disabled!==!0)){for(f=[],g={},c=0;c<i;c++)d=b[c],e=d.selector+" ",void 0===g[e]&&(g[e]=d.needsContext?r(e,this).index(j)>-1:r.find(e,this,null,[j]).length),g[e]&&f.push(d);f.length&&h.push({elem:j,handlers:f})}return j=this,i<b.length&&h.push({elem:j,handlers:b.slice(i)}),h},addProp:function(a,b){Object.defineProperty(r.Event.prototype,a,{enumerable:!0,configurable:!0,get:r.isFunction(b)?function(){if(this.originalEvent)return b(this.originalEvent)}:function(){if(this.originalEvent)return this.originalEvent[a]},set:function(b){Object.defineProperty(this,a,{enumerable:!0,configurable:!0,writable:!0,value:b})}})},fix:function(a){return a[r.expando]?a:new r.Event(a)},special:{load:{noBubble:!0},focus:{trigger:function(){if(this!==xa()&&this.focus)return this.focus(),!1},delegateType:"focusin"},blur:{trigger:function(){if(this===xa()&&this.blur)return this.blur(),!1},delegateType:"focusout"},click:{trigger:function(){if("checkbox"===this.type&&this.click&&B(this,"input"))return this.click(),!1},_default:function(a){return B(a.target,"a")}},beforeunload:{postDispatch:function(a){void 0!==a.result&&a.originalEvent&&(a.originalEvent.returnValue=a.result)}}}},r.removeEvent=function(a,b,c){a.removeEventListener&&a.removeEventListener(b,c)},r.Event=function(a,b){return this instanceof r.Event?(a&&a.type?(this.originalEvent=a,this.type=a.type,this.isDefaultPrevented=a.defaultPrevented||void 0===a.defaultPrevented&&a.returnValue===!1?va:wa,this.target=a.target&&3===a.target.nodeType?a.target.parentNode:a.target,this.currentTarget=a.currentTarget,this.relatedTarget=a.relatedTarget):this.type=a,b&&r.extend(this,b),this.timeStamp=a&&a.timeStamp||r.now(),void(this[r.expando]=!0)):new r.Event(a,b)},r.Event.prototype={constructor:r.Event,isDefaultPrevented:wa,isPropagationStopped:wa,isImmediatePropagationStopped:wa,isSimulated:!1,preventDefault:function(){var a=this.originalEvent;this.isDefaultPrevented=va,a&&!this.isSimulated&&a.preventDefault()},stopPropagation:function(){var a=this.originalEvent;this.isPropagationStopped=va,a&&!this.isSimulated&&a.stopPropagation()},stopImmediatePropagation:function(){var a=this.originalEvent;this.isImmediatePropagationStopped=va,a&&!this.isSimulated&&a.stopImmediatePropagation(),this.stopPropagation()}},r.each({altKey:!0,bubbles:!0,cancelable:!0,changedTouches:!0,ctrlKey:!0,detail:!0,eventPhase:!0,metaKey:!0,pageX:!0,pageY:!0,shiftKey:!0,view:!0,"char":!0,charCode:!0,key:!0,keyCode:!0,button:!0,buttons:!0,clientX:!0,clientY:!0,offsetX:!0,offsetY:!0,pointerId:!0,pointerType:!0,screenX:!0,screenY:!0,targetTouches:!0,toElement:!0,touches:!0,which:function(a){var b=a.button;return null==a.which&&sa.test(a.type)?null!=a.charCode?a.charCode:a.keyCode:!a.which&&void 0!==b&&ta.test(a.type)?1&b?1:2&b?3:4&b?2:0:a.which}},r.event.addProp),r.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(a,b){r.event.special[a]={delegateType:b,bindType:b,handle:function(a){var c,d=this,e=a.relatedTarget,f=a.handleObj;return e&&(e===d||r.contains(d,e))||(a.type=f.origType,c=f.handler.apply(this,arguments),a.type=b),c}}}),r.fn.extend({on:function(a,b,c,d){return ya(this,a,b,c,d)},one:function(a,b,c,d){return ya(this,a,b,c,d,1)},off:function(a,b,c){var d,e;if(a&&a.preventDefault&&a.handleObj)return d=a.handleObj,r(a.delegateTarget).off(d.namespace?d.origType+"."+d.namespace:d.origType,d.selector,d.handler),this;if("object"==typeof a){for(e in a)this.off(e,b,a[e]);return this}return b!==!1&&"function"!=typeof b||(c=b,b=void 0),c===!1&&(c=wa),this.each(function(){r.event.remove(this,a,c,b)})}});var za=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,Aa=/<script|<style|<link/i,Ba=/checked\s*(?:[^=]|=\s*.checked.)/i,Ca=/^true\/(.*)/,Da=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;function Ea(a,b){return B(a,"table")&&B(11!==b.nodeType?b:b.firstChild,"tr")?r(">tbody",a)[0]||a:a}function Fa(a){return a.type=(null!==a.getAttribute("type"))+"/"+a.type,a}function Ga(a){var b=Ca.exec(a.type);return b?a.type=b[1]:a.removeAttribute("type"),a}function Ha(a,b){var c,d,e,f,g,h,i,j;if(1===b.nodeType){if(W.hasData(a)&&(f=W.access(a),g=W.set(b,f),j=f.events)){delete g.handle,g.events={};for(e in j)for(c=0,d=j[e].length;c<d;c++)r.event.add(b,e,j[e][c])}X.hasData(a)&&(h=X.access(a),i=r.extend({},h),X.set(b,i))}}function Ia(a,b){var c=b.nodeName.toLowerCase();"input"===c&&ja.test(a.type)?b.checked=a.checked:"input"!==c&&"textarea"!==c||(b.defaultValue=a.defaultValue)}function Ja(a,b,c,d){b=g.apply([],b);var e,f,h,i,j,k,l=0,m=a.length,n=m-1,q=b[0],s=r.isFunction(q);if(s||m>1&&"string"==typeof q&&!o.checkClone&&Ba.test(q))return a.each(function(e){var f=a.eq(e);s&&(b[0]=q.call(this,e,f.html())),Ja(f,b,c,d)});if(m&&(e=qa(b,a[0].ownerDocument,!1,a,d),f=e.firstChild,1===e.childNodes.length&&(e=f),f||d)){for(h=r.map(na(e,"script"),Fa),i=h.length;l<m;l++)j=e,l!==n&&(j=r.clone(j,!0,!0),i&&r.merge(h,na(j,"script"))),c.call(a[l],j,l);if(i)for(k=h[h.length-1].ownerDocument,r.map(h,Ga),l=0;l<i;l++)j=h[l],la.test(j.type||"")&&!W.access(j,"globalEval")&&r.contains(k,j)&&(j.src?r._evalUrl&&r._evalUrl(j.src):p(j.textContent.replace(Da,""),k))}return a}function Ka(a,b,c){for(var d,e=b?r.filter(b,a):a,f=0;null!=(d=e[f]);f++)c||1!==d.nodeType||r.cleanData(na(d)),d.parentNode&&(c&&r.contains(d.ownerDocument,d)&&oa(na(d,"script")),d.parentNode.removeChild(d));return a}r.extend({htmlPrefilter:function(a){return a.replace(za,"<$1></$2>")},clone:function(a,b,c){var d,e,f,g,h=a.cloneNode(!0),i=r.contains(a.ownerDocument,a);if(!(o.noCloneChecked||1!==a.nodeType&&11!==a.nodeType||r.isXMLDoc(a)))for(g=na(h),f=na(a),d=0,e=f.length;d<e;d++)Ia(f[d],g[d]);if(b)if(c)for(f=f||na(a),g=g||na(h),d=0,e=f.length;d<e;d++)Ha(f[d],g[d]);else Ha(a,h);return g=na(h,"script"),g.length>0&&oa(g,!i&&na(a,"script")),h},cleanData:function(a){for(var b,c,d,e=r.event.special,f=0;void 0!==(c=a[f]);f++)if(U(c)){if(b=c[W.expando]){if(b.events)for(d in b.events)e[d]?r.event.remove(c,d):r.removeEvent(c,d,b.handle);c[W.expando]=void 0}c[X.expando]&&(c[X.expando]=void 0)}}}),r.fn.extend({detach:function(a){return Ka(this,a,!0)},remove:function(a){return Ka(this,a)},text:function(a){return T(this,function(a){return void 0===a?r.text(this):this.empty().each(function(){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||(this.textContent=a)})},null,a,arguments.length)},append:function(){return Ja(this,arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=Ea(this,a);b.appendChild(a)}})},prepend:function(){return Ja(this,arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=Ea(this,a);b.insertBefore(a,b.firstChild)}})},before:function(){return Ja(this,arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this)})},after:function(){return Ja(this,arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this.nextSibling)})},empty:function(){for(var a,b=0;null!=(a=this[b]);b++)1===a.nodeType&&(r.cleanData(na(a,!1)),a.textContent="");return this},clone:function(a,b){return a=null!=a&&a,b=null==b?a:b,this.map(function(){return r.clone(this,a,b)})},html:function(a){return T(this,function(a){var b=this[0]||{},c=0,d=this.length;if(void 0===a&&1===b.nodeType)return b.innerHTML;if("string"==typeof a&&!Aa.test(a)&&!ma[(ka.exec(a)||["",""])[1].toLowerCase()]){a=r.htmlPrefilter(a);try{for(;c<d;c++)b=this[c]||{},1===b.nodeType&&(r.cleanData(na(b,!1)),b.innerHTML=a);b=0}catch(e){}}b&&this.empty().append(a)},null,a,arguments.length)},replaceWith:function(){var a=[];return Ja(this,arguments,function(b){var c=this.parentNode;r.inArray(this,a)<0&&(r.cleanData(na(this)),c&&c.replaceChild(b,this))},a)}}),r.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(a,b){r.fn[a]=function(a){for(var c,d=[],e=r(a),f=e.length-1,g=0;g<=f;g++)c=g===f?this:this.clone(!0),r(e[g])[b](c),h.apply(d,c.get());return this.pushStack(d)}});var La=/^margin/,Ma=new RegExp("^("+aa+")(?!px)[a-z%]+$","i"),Na=function(b){var c=b.ownerDocument.defaultView;return c&&c.opener||(c=a),c.getComputedStyle(b)};!function(){function b(){if(i){i.style.cssText="box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%",i.innerHTML="",ra.appendChild(h);var b=a.getComputedStyle(i);c="1%"!==b.top,g="2px"===b.marginLeft,e="4px"===b.width,i.style.marginRight="50%",f="4px"===b.marginRight,ra.removeChild(h),i=null}}var c,e,f,g,h=d.createElement("div"),i=d.createElement("div");i.style&&(i.style.backgroundClip="content-box",i.cloneNode(!0).style.backgroundClip="",o.clearCloneStyle="content-box"===i.style.backgroundClip,h.style.cssText="border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute",h.appendChild(i),r.extend(o,{pixelPosition:function(){return b(),c},boxSizingReliable:function(){return b(),e},pixelMarginRight:function(){return b(),f},reliableMarginLeft:function(){return b(),g}}))}();function Oa(a,b,c){var d,e,f,g,h=a.style;return c=c||Na(a),c&&(g=c.getPropertyValue(b)||c[b],""!==g||r.contains(a.ownerDocument,a)||(g=r.style(a,b)),!o.pixelMarginRight()&&Ma.test(g)&&La.test(b)&&(d=h.width,e=h.minWidth,f=h.maxWidth,h.minWidth=h.maxWidth=h.width=g,g=c.width,h.width=d,h.minWidth=e,h.maxWidth=f)),void 0!==g?g+"":g}function Pa(a,b){return{get:function(){return a()?void delete this.get:(this.get=b).apply(this,arguments)}}}var Qa=/^(none|table(?!-c[ea]).+)/,Ra=/^--/,Sa={position:"absolute",visibility:"hidden",display:"block"},Ta={letterSpacing:"0",fontWeight:"400"},Ua=["Webkit","Moz","ms"],Va=d.createElement("div").style;function Wa(a){if(a in Va)return a;var b=a[0].toUpperCase()+a.slice(1),c=Ua.length;while(c--)if(a=Ua[c]+b,a in Va)return a}function Xa(a){var b=r.cssProps[a];return b||(b=r.cssProps[a]=Wa(a)||a),b}function Ya(a,b,c){var d=ba.exec(b);return d?Math.max(0,d[2]-(c||0))+(d[3]||"px"):b}function Za(a,b,c,d,e){var f,g=0;for(f=c===(d?"border":"content")?4:"width"===b?1:0;f<4;f+=2)"margin"===c&&(g+=r.css(a,c+ca[f],!0,e)),d?("content"===c&&(g-=r.css(a,"padding"+ca[f],!0,e)),"margin"!==c&&(g-=r.css(a,"border"+ca[f]+"Width",!0,e))):(g+=r.css(a,"padding"+ca[f],!0,e),"padding"!==c&&(g+=r.css(a,"border"+ca[f]+"Width",!0,e)));return g}function $a(a,b,c){var d,e=Na(a),f=Oa(a,b,e),g="border-box"===r.css(a,"boxSizing",!1,e);return Ma.test(f)?f:(d=g&&(o.boxSizingReliable()||f===a.style[b]),"auto"===f&&(f=a["offset"+b[0].toUpperCase()+b.slice(1)]),f=parseFloat(f)||0,f+Za(a,b,c||(g?"border":"content"),d,e)+"px")}r.extend({cssHooks:{opacity:{get:function(a,b){if(b){var c=Oa(a,"opacity");return""===c?"1":c}}}},cssNumber:{animationIterationCount:!0,columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":"cssFloat"},style:function(a,b,c,d){if(a&&3!==a.nodeType&&8!==a.nodeType&&a.style){var e,f,g,h=r.camelCase(b),i=Ra.test(b),j=a.style;return i||(b=Xa(h)),g=r.cssHooks[b]||r.cssHooks[h],void 0===c?g&&"get"in g&&void 0!==(e=g.get(a,!1,d))?e:j[b]:(f=typeof c,"string"===f&&(e=ba.exec(c))&&e[1]&&(c=fa(a,b,e),f="number"),null!=c&&c===c&&("number"===f&&(c+=e&&e[3]||(r.cssNumber[h]?"":"px")),o.clearCloneStyle||""!==c||0!==b.indexOf("background")||(j[b]="inherit"),g&&"set"in g&&void 0===(c=g.set(a,c,d))||(i?j.setProperty(b,c):j[b]=c)),void 0)}},css:function(a,b,c,d){var e,f,g,h=r.camelCase(b),i=Ra.test(b);return i||(b=Xa(h)),g=r.cssHooks[b]||r.cssHooks[h],g&&"get"in g&&(e=g.get(a,!0,c)),void 0===e&&(e=Oa(a,b,d)),"normal"===e&&b in Ta&&(e=Ta[b]),""===c||c?(f=parseFloat(e),c===!0||isFinite(f)?f||0:e):e}}),r.each(["height","width"],function(a,b){r.cssHooks[b]={get:function(a,c,d){if(c)return!Qa.test(r.css(a,"display"))||a.getClientRects().length&&a.getBoundingClientRect().width?$a(a,b,d):ea(a,Sa,function(){return $a(a,b,d)})},set:function(a,c,d){var e,f=d&&Na(a),g=d&&Za(a,b,d,"border-box"===r.css(a,"boxSizing",!1,f),f);return g&&(e=ba.exec(c))&&"px"!==(e[3]||"px")&&(a.style[b]=c,c=r.css(a,b)),Ya(a,c,g)}}}),r.cssHooks.marginLeft=Pa(o.reliableMarginLeft,function(a,b){if(b)return(parseFloat(Oa(a,"marginLeft"))||a.getBoundingClientRect().left-ea(a,{marginLeft:0},function(){return a.getBoundingClientRect().left}))+"px"}),r.each({margin:"",padding:"",border:"Width"},function(a,b){r.cssHooks[a+b]={expand:function(c){for(var d=0,e={},f="string"==typeof c?c.split(" "):[c];d<4;d++)e[a+ca[d]+b]=f[d]||f[d-2]||f[0];return e}},La.test(a)||(r.cssHooks[a+b].set=Ya)}),r.fn.extend({css:function(a,b){return T(this,function(a,b,c){var d,e,f={},g=0;if(Array.isArray(b)){for(d=Na(a),e=b.length;g<e;g++)f[b[g]]=r.css(a,b[g],!1,d);return f}return void 0!==c?r.style(a,b,c):r.css(a,b)},a,b,arguments.length>1)}});function _a(a,b,c,d,e){return new _a.prototype.init(a,b,c,d,e)}r.Tween=_a,_a.prototype={constructor:_a,init:function(a,b,c,d,e,f){this.elem=a,this.prop=c,this.easing=e||r.easing._default,this.options=b,this.start=this.now=this.cur(),this.end=d,this.unit=f||(r.cssNumber[c]?"":"px")},cur:function(){var a=_a.propHooks[this.prop];return a&&a.get?a.get(this):_a.propHooks._default.get(this)},run:function(a){var b,c=_a.propHooks[this.prop];return this.options.duration?this.pos=b=r.easing[this.easing](a,this.options.duration*a,0,1,this.options.duration):this.pos=b=a,this.now=(this.end-this.start)*b+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),c&&c.set?c.set(this):_a.propHooks._default.set(this),this}},_a.prototype.init.prototype=_a.prototype,_a.propHooks={_default:{get:function(a){var b;return 1!==a.elem.nodeType||null!=a.elem[a.prop]&&null==a.elem.style[a.prop]?a.elem[a.prop]:(b=r.css(a.elem,a.prop,""),b&&"auto"!==b?b:0)},set:function(a){r.fx.step[a.prop]?r.fx.step[a.prop](a):1!==a.elem.nodeType||null==a.elem.style[r.cssProps[a.prop]]&&!r.cssHooks[a.prop]?a.elem[a.prop]=a.now:r.style(a.elem,a.prop,a.now+a.unit)}}},_a.propHooks.scrollTop=_a.propHooks.scrollLeft={set:function(a){a.elem.nodeType&&a.elem.parentNode&&(a.elem[a.prop]=a.now)}},r.easing={linear:function(a){return a},swing:function(a){return.5-Math.cos(a*Math.PI)/2},_default:"swing"},r.fx=_a.prototype.init,r.fx.step={};var ab,bb,cb=/^(?:toggle|show|hide)$/,db=/queueHooks$/;function eb(){bb&&(d.hidden===!1&&a.requestAnimationFrame?a.requestAnimationFrame(eb):a.setTimeout(eb,r.fx.interval),r.fx.tick())}function fb(){return a.setTimeout(function(){ab=void 0}),ab=r.now()}function gb(a,b){var c,d=0,e={height:a};for(b=b?1:0;d<4;d+=2-b)c=ca[d],e["margin"+c]=e["padding"+c]=a;return b&&(e.opacity=e.width=a),e}function hb(a,b,c){for(var d,e=(kb.tweeners[b]||[]).concat(kb.tweeners["*"]),f=0,g=e.length;f<g;f++)if(d=e[f].call(c,b,a))return d}function ib(a,b,c){var d,e,f,g,h,i,j,k,l="width"in b||"height"in b,m=this,n={},o=a.style,p=a.nodeType&&da(a),q=W.get(a,"fxshow");c.queue||(g=r._queueHooks(a,"fx"),null==g.unqueued&&(g.unqueued=0,h=g.empty.fire,g.empty.fire=function(){g.unqueued||h()}),g.unqueued++,m.always(function(){m.always(function(){g.unqueued--,r.queue(a,"fx").length||g.empty.fire()})}));for(d in b)if(e=b[d],cb.test(e)){if(delete b[d],f=f||"toggle"===e,e===(p?"hide":"show")){if("show"!==e||!q||void 0===q[d])continue;p=!0}n[d]=q&&q[d]||r.style(a,d)}if(i=!r.isEmptyObject(b),i||!r.isEmptyObject(n)){l&&1===a.nodeType&&(c.overflow=[o.overflow,o.overflowX,o.overflowY],j=q&&q.display,null==j&&(j=W.get(a,"display")),k=r.css(a,"display"),"none"===k&&(j?k=j:(ia([a],!0),j=a.style.display||j,k=r.css(a,"display"),ia([a]))),("inline"===k||"inline-block"===k&&null!=j)&&"none"===r.css(a,"float")&&(i||(m.done(function(){o.display=j}),null==j&&(k=o.display,j="none"===k?"":k)),o.display="inline-block")),c.overflow&&(o.overflow="hidden",m.always(function(){o.overflow=c.overflow[0],o.overflowX=c.overflow[1],o.overflowY=c.overflow[2]})),i=!1;for(d in n)i||(q?"hidden"in q&&(p=q.hidden):q=W.access(a,"fxshow",{display:j}),f&&(q.hidden=!p),p&&ia([a],!0),m.done(function(){p||ia([a]),W.remove(a,"fxshow");for(d in n)r.style(a,d,n[d])})),i=hb(p?q[d]:0,d,m),d in q||(q[d]=i.start,p&&(i.end=i.start,i.start=0))}}function jb(a,b){var c,d,e,f,g;for(c in a)if(d=r.camelCase(c),e=b[d],f=a[c],Array.isArray(f)&&(e=f[1],f=a[c]=f[0]),c!==d&&(a[d]=f,delete a[c]),g=r.cssHooks[d],g&&"expand"in g){f=g.expand(f),delete a[d];for(c in f)c in a||(a[c]=f[c],b[c]=e)}else b[d]=e}function kb(a,b,c){var d,e,f=0,g=kb.prefilters.length,h=r.Deferred().always(function(){delete i.elem}),i=function(){if(e)return!1;for(var b=ab||fb(),c=Math.max(0,j.startTime+j.duration-b),d=c/j.duration||0,f=1-d,g=0,i=j.tweens.length;g<i;g++)j.tweens[g].run(f);return h.notifyWith(a,[j,f,c]),f<1&&i?c:(i||h.notifyWith(a,[j,1,0]),h.resolveWith(a,[j]),!1)},j=h.promise({elem:a,props:r.extend({},b),opts:r.extend(!0,{specialEasing:{},easing:r.easing._default},c),originalProperties:b,originalOptions:c,startTime:ab||fb(),duration:c.duration,tweens:[],createTween:function(b,c){var d=r.Tween(a,j.opts,b,c,j.opts.specialEasing[b]||j.opts.easing);return j.tweens.push(d),d},stop:function(b){var c=0,d=b?j.tweens.length:0;if(e)return this;for(e=!0;c<d;c++)j.tweens[c].run(1);return b?(h.notifyWith(a,[j,1,0]),h.resolveWith(a,[j,b])):h.rejectWith(a,[j,b]),this}}),k=j.props;for(jb(k,j.opts.specialEasing);f<g;f++)if(d=kb.prefilters[f].call(j,a,k,j.opts))return r.isFunction(d.stop)&&(r._queueHooks(j.elem,j.opts.queue).stop=r.proxy(d.stop,d)),d;return r.map(k,hb,j),r.isFunction(j.opts.start)&&j.opts.start.call(a,j),j.progress(j.opts.progress).done(j.opts.done,j.opts.complete).fail(j.opts.fail).always(j.opts.always),r.fx.timer(r.extend(i,{elem:a,anim:j,queue:j.opts.queue})),j}r.Animation=r.extend(kb,{tweeners:{"*":[function(a,b){var c=this.createTween(a,b);return fa(c.elem,a,ba.exec(b),c),c}]},tweener:function(a,b){r.isFunction(a)?(b=a,a=["*"]):a=a.match(L);for(var c,d=0,e=a.length;d<e;d++)c=a[d],kb.tweeners[c]=kb.tweeners[c]||[],kb.tweeners[c].unshift(b)},prefilters:[ib],prefilter:function(a,b){b?kb.prefilters.unshift(a):kb.prefilters.push(a)}}),r.speed=function(a,b,c){var d=a&&"object"==typeof a?r.extend({},a):{complete:c||!c&&b||r.isFunction(a)&&a,duration:a,easing:c&&b||b&&!r.isFunction(b)&&b};return r.fx.off?d.duration=0:"number"!=typeof d.duration&&(d.duration in r.fx.speeds?d.duration=r.fx.speeds[d.duration]:d.duration=r.fx.speeds._default),null!=d.queue&&d.queue!==!0||(d.queue="fx"),d.old=d.complete,d.complete=function(){r.isFunction(d.old)&&d.old.call(this),d.queue&&r.dequeue(this,d.queue)},d},r.fn.extend({fadeTo:function(a,b,c,d){return this.filter(da).css("opacity",0).show().end().animate({opacity:b},a,c,d)},animate:function(a,b,c,d){var e=r.isEmptyObject(a),f=r.speed(b,c,d),g=function(){var b=kb(this,r.extend({},a),f);(e||W.get(this,"finish"))&&b.stop(!0)};return g.finish=g,e||f.queue===!1?this.each(g):this.queue(f.queue,g)},stop:function(a,b,c){var d=function(a){var b=a.stop;delete a.stop,b(c)};return"string"!=typeof a&&(c=b,b=a,a=void 0),b&&a!==!1&&this.queue(a||"fx",[]),this.each(function(){var b=!0,e=null!=a&&a+"queueHooks",f=r.timers,g=W.get(this);if(e)g[e]&&g[e].stop&&d(g[e]);else for(e in g)g[e]&&g[e].stop&&db.test(e)&&d(g[e]);for(e=f.length;e--;)f[e].elem!==this||null!=a&&f[e].queue!==a||(f[e].anim.stop(c),b=!1,f.splice(e,1));!b&&c||r.dequeue(this,a)})},finish:function(a){return a!==!1&&(a=a||"fx"),this.each(function(){var b,c=W.get(this),d=c[a+"queue"],e=c[a+"queueHooks"],f=r.timers,g=d?d.length:0;for(c.finish=!0,r.queue(this,a,[]),e&&e.stop&&e.stop.call(this,!0),b=f.length;b--;)f[b].elem===this&&f[b].queue===a&&(f[b].anim.stop(!0),f.splice(b,1));for(b=0;b<g;b++)d[b]&&d[b].finish&&d[b].finish.call(this);delete c.finish})}}),r.each(["toggle","show","hide"],function(a,b){var c=r.fn[b];r.fn[b]=function(a,d,e){return null==a||"boolean"==typeof a?c.apply(this,arguments):this.animate(gb(b,!0),a,d,e)}}),r.each({slideDown:gb("show"),slideUp:gb("hide"),slideToggle:gb("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(a,b){r.fn[a]=function(a,c,d){return this.animate(b,a,c,d)}}),r.timers=[],r.fx.tick=function(){var a,b=0,c=r.timers;for(ab=r.now();b<c.length;b++)a=c[b],a()||c[b]!==a||c.splice(b--,1);c.length||r.fx.stop(),ab=void 0},r.fx.timer=function(a){r.timers.push(a),r.fx.start()},r.fx.interval=13,r.fx.start=function(){bb||(bb=!0,eb())},r.fx.stop=function(){bb=null},r.fx.speeds={slow:600,fast:200,_default:400},r.fn.delay=function(b,c){return b=r.fx?r.fx.speeds[b]||b:b,c=c||"fx",this.queue(c,function(c,d){var e=a.setTimeout(c,b);d.stop=function(){a.clearTimeout(e)}})},function(){var a=d.createElement("input"),b=d.createElement("select"),c=b.appendChild(d.createElement("option"));a.type="checkbox",o.checkOn=""!==a.value,o.optSelected=c.selected,a=d.createElement("input"),a.value="t",a.type="radio",o.radioValue="t"===a.value}();var lb,mb=r.expr.attrHandle;r.fn.extend({attr:function(a,b){return T(this,r.attr,a,b,arguments.length>1)},removeAttr:function(a){return this.each(function(){r.removeAttr(this,a)})}}),r.extend({attr:function(a,b,c){var d,e,f=a.nodeType;if(3!==f&&8!==f&&2!==f)return"undefined"==typeof a.getAttribute?r.prop(a,b,c):(1===f&&r.isXMLDoc(a)||(e=r.attrHooks[b.toLowerCase()]||(r.expr.match.bool.test(b)?lb:void 0)),void 0!==c?null===c?void r.removeAttr(a,b):e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:(a.setAttribute(b,c+""),c):e&&"get"in e&&null!==(d=e.get(a,b))?d:(d=r.find.attr(a,b),
null==d?void 0:d))},attrHooks:{type:{set:function(a,b){if(!o.radioValue&&"radio"===b&&B(a,"input")){var c=a.value;return a.setAttribute("type",b),c&&(a.value=c),b}}}},removeAttr:function(a,b){var c,d=0,e=b&&b.match(L);if(e&&1===a.nodeType)while(c=e[d++])a.removeAttribute(c)}}),lb={set:function(a,b,c){return b===!1?r.removeAttr(a,c):a.setAttribute(c,c),c}},r.each(r.expr.match.bool.source.match(/\w+/g),function(a,b){var c=mb[b]||r.find.attr;mb[b]=function(a,b,d){var e,f,g=b.toLowerCase();return d||(f=mb[g],mb[g]=e,e=null!=c(a,b,d)?g:null,mb[g]=f),e}});var nb=/^(?:input|select|textarea|button)$/i,ob=/^(?:a|area)$/i;r.fn.extend({prop:function(a,b){return T(this,r.prop,a,b,arguments.length>1)},removeProp:function(a){return this.each(function(){delete this[r.propFix[a]||a]})}}),r.extend({prop:function(a,b,c){var d,e,f=a.nodeType;if(3!==f&&8!==f&&2!==f)return 1===f&&r.isXMLDoc(a)||(b=r.propFix[b]||b,e=r.propHooks[b]),void 0!==c?e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:a[b]=c:e&&"get"in e&&null!==(d=e.get(a,b))?d:a[b]},propHooks:{tabIndex:{get:function(a){var b=r.find.attr(a,"tabindex");return b?parseInt(b,10):nb.test(a.nodeName)||ob.test(a.nodeName)&&a.href?0:-1}}},propFix:{"for":"htmlFor","class":"className"}}),o.optSelected||(r.propHooks.selected={get:function(a){var b=a.parentNode;return b&&b.parentNode&&b.parentNode.selectedIndex,null},set:function(a){var b=a.parentNode;b&&(b.selectedIndex,b.parentNode&&b.parentNode.selectedIndex)}}),r.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){r.propFix[this.toLowerCase()]=this});function pb(a){var b=a.match(L)||[];return b.join(" ")}function qb(a){return a.getAttribute&&a.getAttribute("class")||""}r.fn.extend({addClass:function(a){var b,c,d,e,f,g,h,i=0;if(r.isFunction(a))return this.each(function(b){r(this).addClass(a.call(this,b,qb(this)))});if("string"==typeof a&&a){b=a.match(L)||[];while(c=this[i++])if(e=qb(c),d=1===c.nodeType&&" "+pb(e)+" "){g=0;while(f=b[g++])d.indexOf(" "+f+" ")<0&&(d+=f+" ");h=pb(d),e!==h&&c.setAttribute("class",h)}}return this},removeClass:function(a){var b,c,d,e,f,g,h,i=0;if(r.isFunction(a))return this.each(function(b){r(this).removeClass(a.call(this,b,qb(this)))});if(!arguments.length)return this.attr("class","");if("string"==typeof a&&a){b=a.match(L)||[];while(c=this[i++])if(e=qb(c),d=1===c.nodeType&&" "+pb(e)+" "){g=0;while(f=b[g++])while(d.indexOf(" "+f+" ")>-1)d=d.replace(" "+f+" "," ");h=pb(d),e!==h&&c.setAttribute("class",h)}}return this},toggleClass:function(a,b){var c=typeof a;return"boolean"==typeof b&&"string"===c?b?this.addClass(a):this.removeClass(a):r.isFunction(a)?this.each(function(c){r(this).toggleClass(a.call(this,c,qb(this),b),b)}):this.each(function(){var b,d,e,f;if("string"===c){d=0,e=r(this),f=a.match(L)||[];while(b=f[d++])e.hasClass(b)?e.removeClass(b):e.addClass(b)}else void 0!==a&&"boolean"!==c||(b=qb(this),b&&W.set(this,"__className__",b),this.setAttribute&&this.setAttribute("class",b||a===!1?"":W.get(this,"__className__")||""))})},hasClass:function(a){var b,c,d=0;b=" "+a+" ";while(c=this[d++])if(1===c.nodeType&&(" "+pb(qb(c))+" ").indexOf(b)>-1)return!0;return!1}});var rb=/\r/g;r.fn.extend({val:function(a){var b,c,d,e=this[0];{if(arguments.length)return d=r.isFunction(a),this.each(function(c){var e;1===this.nodeType&&(e=d?a.call(this,c,r(this).val()):a,null==e?e="":"number"==typeof e?e+="":Array.isArray(e)&&(e=r.map(e,function(a){return null==a?"":a+""})),b=r.valHooks[this.type]||r.valHooks[this.nodeName.toLowerCase()],b&&"set"in b&&void 0!==b.set(this,e,"value")||(this.value=e))});if(e)return b=r.valHooks[e.type]||r.valHooks[e.nodeName.toLowerCase()],b&&"get"in b&&void 0!==(c=b.get(e,"value"))?c:(c=e.value,"string"==typeof c?c.replace(rb,""):null==c?"":c)}}}),r.extend({valHooks:{option:{get:function(a){var b=r.find.attr(a,"value");return null!=b?b:pb(r.text(a))}},select:{get:function(a){var b,c,d,e=a.options,f=a.selectedIndex,g="select-one"===a.type,h=g?null:[],i=g?f+1:e.length;for(d=f<0?i:g?f:0;d<i;d++)if(c=e[d],(c.selected||d===f)&&!c.disabled&&(!c.parentNode.disabled||!B(c.parentNode,"optgroup"))){if(b=r(c).val(),g)return b;h.push(b)}return h},set:function(a,b){var c,d,e=a.options,f=r.makeArray(b),g=e.length;while(g--)d=e[g],(d.selected=r.inArray(r.valHooks.option.get(d),f)>-1)&&(c=!0);return c||(a.selectedIndex=-1),f}}}}),r.each(["radio","checkbox"],function(){r.valHooks[this]={set:function(a,b){if(Array.isArray(b))return a.checked=r.inArray(r(a).val(),b)>-1}},o.checkOn||(r.valHooks[this].get=function(a){return null===a.getAttribute("value")?"on":a.value})});var sb=/^(?:focusinfocus|focusoutblur)$/;r.extend(r.event,{trigger:function(b,c,e,f){var g,h,i,j,k,m,n,o=[e||d],p=l.call(b,"type")?b.type:b,q=l.call(b,"namespace")?b.namespace.split("."):[];if(h=i=e=e||d,3!==e.nodeType&&8!==e.nodeType&&!sb.test(p+r.event.triggered)&&(p.indexOf(".")>-1&&(q=p.split("."),p=q.shift(),q.sort()),k=p.indexOf(":")<0&&"on"+p,b=b[r.expando]?b:new r.Event(p,"object"==typeof b&&b),b.isTrigger=f?2:3,b.namespace=q.join("."),b.rnamespace=b.namespace?new RegExp("(^|\\.)"+q.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,b.result=void 0,b.target||(b.target=e),c=null==c?[b]:r.makeArray(c,[b]),n=r.event.special[p]||{},f||!n.trigger||n.trigger.apply(e,c)!==!1)){if(!f&&!n.noBubble&&!r.isWindow(e)){for(j=n.delegateType||p,sb.test(j+p)||(h=h.parentNode);h;h=h.parentNode)o.push(h),i=h;i===(e.ownerDocument||d)&&o.push(i.defaultView||i.parentWindow||a)}g=0;while((h=o[g++])&&!b.isPropagationStopped())b.type=g>1?j:n.bindType||p,m=(W.get(h,"events")||{})[b.type]&&W.get(h,"handle"),m&&m.apply(h,c),m=k&&h[k],m&&m.apply&&U(h)&&(b.result=m.apply(h,c),b.result===!1&&b.preventDefault());return b.type=p,f||b.isDefaultPrevented()||n._default&&n._default.apply(o.pop(),c)!==!1||!U(e)||k&&r.isFunction(e[p])&&!r.isWindow(e)&&(i=e[k],i&&(e[k]=null),r.event.triggered=p,e[p](),r.event.triggered=void 0,i&&(e[k]=i)),b.result}},simulate:function(a,b,c){var d=r.extend(new r.Event,c,{type:a,isSimulated:!0});r.event.trigger(d,null,b)}}),r.fn.extend({trigger:function(a,b){return this.each(function(){r.event.trigger(a,b,this)})},triggerHandler:function(a,b){var c=this[0];if(c)return r.event.trigger(a,b,c,!0)}}),r.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "),function(a,b){r.fn[b]=function(a,c){return arguments.length>0?this.on(b,null,a,c):this.trigger(b)}}),r.fn.extend({hover:function(a,b){return this.mouseenter(a).mouseleave(b||a)}}),o.focusin="onfocusin"in a,o.focusin||r.each({focus:"focusin",blur:"focusout"},function(a,b){var c=function(a){r.event.simulate(b,a.target,r.event.fix(a))};r.event.special[b]={setup:function(){var d=this.ownerDocument||this,e=W.access(d,b);e||d.addEventListener(a,c,!0),W.access(d,b,(e||0)+1)},teardown:function(){var d=this.ownerDocument||this,e=W.access(d,b)-1;e?W.access(d,b,e):(d.removeEventListener(a,c,!0),W.remove(d,b))}}});var tb=a.location,ub=r.now(),vb=/\?/;r.parseXML=function(b){var c;if(!b||"string"!=typeof b)return null;try{c=(new a.DOMParser).parseFromString(b,"text/xml")}catch(d){c=void 0}return c&&!c.getElementsByTagName("parsererror").length||r.error("Invalid XML: "+b),c};var wb=/\[\]$/,xb=/\r?\n/g,yb=/^(?:submit|button|image|reset|file)$/i,zb=/^(?:input|select|textarea|keygen)/i;function Ab(a,b,c,d){var e;if(Array.isArray(b))r.each(b,function(b,e){c||wb.test(a)?d(a,e):Ab(a+"["+("object"==typeof e&&null!=e?b:"")+"]",e,c,d)});else if(c||"object"!==r.type(b))d(a,b);else for(e in b)Ab(a+"["+e+"]",b[e],c,d)}r.param=function(a,b){var c,d=[],e=function(a,b){var c=r.isFunction(b)?b():b;d[d.length]=encodeURIComponent(a)+"="+encodeURIComponent(null==c?"":c)};if(Array.isArray(a)||a.jquery&&!r.isPlainObject(a))r.each(a,function(){e(this.name,this.value)});else for(c in a)Ab(c,a[c],b,e);return d.join("&")},r.fn.extend({serialize:function(){return r.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var a=r.prop(this,"elements");return a?r.makeArray(a):this}).filter(function(){var a=this.type;return this.name&&!r(this).is(":disabled")&&zb.test(this.nodeName)&&!yb.test(a)&&(this.checked||!ja.test(a))}).map(function(a,b){var c=r(this).val();return null==c?null:Array.isArray(c)?r.map(c,function(a){return{name:b.name,value:a.replace(xb,"\r\n")}}):{name:b.name,value:c.replace(xb,"\r\n")}}).get()}});var Bb=/%20/g,Cb=/#.*$/,Db=/([?&])_=[^&]*/,Eb=/^(.*?):[ \t]*([^\r\n]*)$/gm,Fb=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,Gb=/^(?:GET|HEAD)$/,Hb=/^\/\//,Ib={},Jb={},Kb="*/".concat("*"),Lb=d.createElement("a");Lb.href=tb.href;function Mb(a){return function(b,c){"string"!=typeof b&&(c=b,b="*");var d,e=0,f=b.toLowerCase().match(L)||[];if(r.isFunction(c))while(d=f[e++])"+"===d[0]?(d=d.slice(1)||"*",(a[d]=a[d]||[]).unshift(c)):(a[d]=a[d]||[]).push(c)}}function Nb(a,b,c,d){var e={},f=a===Jb;function g(h){var i;return e[h]=!0,r.each(a[h]||[],function(a,h){var j=h(b,c,d);return"string"!=typeof j||f||e[j]?f?!(i=j):void 0:(b.dataTypes.unshift(j),g(j),!1)}),i}return g(b.dataTypes[0])||!e["*"]&&g("*")}function Ob(a,b){var c,d,e=r.ajaxSettings.flatOptions||{};for(c in b)void 0!==b[c]&&((e[c]?a:d||(d={}))[c]=b[c]);return d&&r.extend(!0,a,d),a}function Pb(a,b,c){var d,e,f,g,h=a.contents,i=a.dataTypes;while("*"===i[0])i.shift(),void 0===d&&(d=a.mimeType||b.getResponseHeader("Content-Type"));if(d)for(e in h)if(h[e]&&h[e].test(d)){i.unshift(e);break}if(i[0]in c)f=i[0];else{for(e in c){if(!i[0]||a.converters[e+" "+i[0]]){f=e;break}g||(g=e)}f=f||g}if(f)return f!==i[0]&&i.unshift(f),c[f]}function Qb(a,b,c,d){var e,f,g,h,i,j={},k=a.dataTypes.slice();if(k[1])for(g in a.converters)j[g.toLowerCase()]=a.converters[g];f=k.shift();while(f)if(a.responseFields[f]&&(c[a.responseFields[f]]=b),!i&&d&&a.dataFilter&&(b=a.dataFilter(b,a.dataType)),i=f,f=k.shift())if("*"===f)f=i;else if("*"!==i&&i!==f){if(g=j[i+" "+f]||j["* "+f],!g)for(e in j)if(h=e.split(" "),h[1]===f&&(g=j[i+" "+h[0]]||j["* "+h[0]])){g===!0?g=j[e]:j[e]!==!0&&(f=h[0],k.unshift(h[1]));break}if(g!==!0)if(g&&a["throws"])b=g(b);else try{b=g(b)}catch(l){return{state:"parsererror",error:g?l:"No conversion from "+i+" to "+f}}}return{state:"success",data:b}}r.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:tb.href,type:"GET",isLocal:Fb.test(tb.protocol),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":Kb,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":JSON.parse,"text xml":r.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(a,b){return b?Ob(Ob(a,r.ajaxSettings),b):Ob(r.ajaxSettings,a)},ajaxPrefilter:Mb(Ib),ajaxTransport:Mb(Jb),ajax:function(b,c){"object"==typeof b&&(c=b,b=void 0),c=c||{};var e,f,g,h,i,j,k,l,m,n,o=r.ajaxSetup({},c),p=o.context||o,q=o.context&&(p.nodeType||p.jquery)?r(p):r.event,s=r.Deferred(),t=r.Callbacks("once memory"),u=o.statusCode||{},v={},w={},x="canceled",y={readyState:0,getResponseHeader:function(a){var b;if(k){if(!h){h={};while(b=Eb.exec(g))h[b[1].toLowerCase()]=b[2]}b=h[a.toLowerCase()]}return null==b?null:b},getAllResponseHeaders:function(){return k?g:null},setRequestHeader:function(a,b){return null==k&&(a=w[a.toLowerCase()]=w[a.toLowerCase()]||a,v[a]=b),this},overrideMimeType:function(a){return null==k&&(o.mimeType=a),this},statusCode:function(a){var b;if(a)if(k)y.always(a[y.status]);else for(b in a)u[b]=[u[b],a[b]];return this},abort:function(a){var b=a||x;return e&&e.abort(b),A(0,b),this}};if(s.promise(y),o.url=((b||o.url||tb.href)+"").replace(Hb,tb.protocol+"//"),o.type=c.method||c.type||o.method||o.type,o.dataTypes=(o.dataType||"*").toLowerCase().match(L)||[""],null==o.crossDomain){j=d.createElement("a");try{j.href=o.url,j.href=j.href,o.crossDomain=Lb.protocol+"//"+Lb.host!=j.protocol+"//"+j.host}catch(z){o.crossDomain=!0}}if(o.data&&o.processData&&"string"!=typeof o.data&&(o.data=r.param(o.data,o.traditional)),Nb(Ib,o,c,y),k)return y;l=r.event&&o.global,l&&0===r.active++&&r.event.trigger("ajaxStart"),o.type=o.type.toUpperCase(),o.hasContent=!Gb.test(o.type),f=o.url.replace(Cb,""),o.hasContent?o.data&&o.processData&&0===(o.contentType||"").indexOf("application/x-www-form-urlencoded")&&(o.data=o.data.replace(Bb,"+")):(n=o.url.slice(f.length),o.data&&(f+=(vb.test(f)?"&":"?")+o.data,delete o.data),o.cache===!1&&(f=f.replace(Db,"$1"),n=(vb.test(f)?"&":"?")+"_="+ub++ +n),o.url=f+n),o.ifModified&&(r.lastModified[f]&&y.setRequestHeader("If-Modified-Since",r.lastModified[f]),r.etag[f]&&y.setRequestHeader("If-None-Match",r.etag[f])),(o.data&&o.hasContent&&o.contentType!==!1||c.contentType)&&y.setRequestHeader("Content-Type",o.contentType),y.setRequestHeader("Accept",o.dataTypes[0]&&o.accepts[o.dataTypes[0]]?o.accepts[o.dataTypes[0]]+("*"!==o.dataTypes[0]?", "+Kb+"; q=0.01":""):o.accepts["*"]);for(m in o.headers)y.setRequestHeader(m,o.headers[m]);if(o.beforeSend&&(o.beforeSend.call(p,y,o)===!1||k))return y.abort();if(x="abort",t.add(o.complete),y.done(o.success),y.fail(o.error),e=Nb(Jb,o,c,y)){if(y.readyState=1,l&&q.trigger("ajaxSend",[y,o]),k)return y;o.async&&o.timeout>0&&(i=a.setTimeout(function(){y.abort("timeout")},o.timeout));try{k=!1,e.send(v,A)}catch(z){if(k)throw z;A(-1,z)}}else A(-1,"No Transport");function A(b,c,d,h){var j,m,n,v,w,x=c;k||(k=!0,i&&a.clearTimeout(i),e=void 0,g=h||"",y.readyState=b>0?4:0,j=b>=200&&b<300||304===b,d&&(v=Pb(o,y,d)),v=Qb(o,v,y,j),j?(o.ifModified&&(w=y.getResponseHeader("Last-Modified"),w&&(r.lastModified[f]=w),w=y.getResponseHeader("etag"),w&&(r.etag[f]=w)),204===b||"HEAD"===o.type?x="nocontent":304===b?x="notmodified":(x=v.state,m=v.data,n=v.error,j=!n)):(n=x,!b&&x||(x="error",b<0&&(b=0))),y.status=b,y.statusText=(c||x)+"",j?s.resolveWith(p,[m,x,y]):s.rejectWith(p,[y,x,n]),y.statusCode(u),u=void 0,l&&q.trigger(j?"ajaxSuccess":"ajaxError",[y,o,j?m:n]),t.fireWith(p,[y,x]),l&&(q.trigger("ajaxComplete",[y,o]),--r.active||r.event.trigger("ajaxStop")))}return y},getJSON:function(a,b,c){return r.get(a,b,c,"json")},getScript:function(a,b){return r.get(a,void 0,b,"script")}}),r.each(["get","post"],function(a,b){r[b]=function(a,c,d,e){return r.isFunction(c)&&(e=e||d,d=c,c=void 0),r.ajax(r.extend({url:a,type:b,dataType:e,data:c,success:d},r.isPlainObject(a)&&a))}}),r._evalUrl=function(a){return r.ajax({url:a,type:"GET",dataType:"script",cache:!0,async:!1,global:!1,"throws":!0})},r.fn.extend({wrapAll:function(a){var b;return this[0]&&(r.isFunction(a)&&(a=a.call(this[0])),b=r(a,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&b.insertBefore(this[0]),b.map(function(){var a=this;while(a.firstElementChild)a=a.firstElementChild;return a}).append(this)),this},wrapInner:function(a){return r.isFunction(a)?this.each(function(b){r(this).wrapInner(a.call(this,b))}):this.each(function(){var b=r(this),c=b.contents();c.length?c.wrapAll(a):b.append(a)})},wrap:function(a){var b=r.isFunction(a);return this.each(function(c){r(this).wrapAll(b?a.call(this,c):a)})},unwrap:function(a){return this.parent(a).not("body").each(function(){r(this).replaceWith(this.childNodes)}),this}}),r.expr.pseudos.hidden=function(a){return!r.expr.pseudos.visible(a)},r.expr.pseudos.visible=function(a){return!!(a.offsetWidth||a.offsetHeight||a.getClientRects().length)},r.ajaxSettings.xhr=function(){try{return new a.XMLHttpRequest}catch(b){}};var Rb={0:200,1223:204},Sb=r.ajaxSettings.xhr();o.cors=!!Sb&&"withCredentials"in Sb,o.ajax=Sb=!!Sb,r.ajaxTransport(function(b){var c,d;if(o.cors||Sb&&!b.crossDomain)return{send:function(e,f){var g,h=b.xhr();if(h.open(b.type,b.url,b.async,b.username,b.password),b.xhrFields)for(g in b.xhrFields)h[g]=b.xhrFields[g];b.mimeType&&h.overrideMimeType&&h.overrideMimeType(b.mimeType),b.crossDomain||e["X-Requested-With"]||(e["X-Requested-With"]="XMLHttpRequest");for(g in e)h.setRequestHeader(g,e[g]);c=function(a){return function(){c&&(c=d=h.onload=h.onerror=h.onabort=h.onreadystatechange=null,"abort"===a?h.abort():"error"===a?"number"!=typeof h.status?f(0,"error"):f(h.status,h.statusText):f(Rb[h.status]||h.status,h.statusText,"text"!==(h.responseType||"text")||"string"!=typeof h.responseText?{binary:h.response}:{text:h.responseText},h.getAllResponseHeaders()))}},h.onload=c(),d=h.onerror=c("error"),void 0!==h.onabort?h.onabort=d:h.onreadystatechange=function(){4===h.readyState&&a.setTimeout(function(){c&&d()})},c=c("abort");try{h.send(b.hasContent&&b.data||null)}catch(i){if(c)throw i}},abort:function(){c&&c()}}}),r.ajaxPrefilter(function(a){a.crossDomain&&(a.contents.script=!1)}),r.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function(a){return r.globalEval(a),a}}}),r.ajaxPrefilter("script",function(a){void 0===a.cache&&(a.cache=!1),a.crossDomain&&(a.type="GET")}),r.ajaxTransport("script",function(a){if(a.crossDomain){var b,c;return{send:function(e,f){b=r("<script>").prop({charset:a.scriptCharset,src:a.url}).on("load error",c=function(a){b.remove(),c=null,a&&f("error"===a.type?404:200,a.type)}),d.head.appendChild(b[0])},abort:function(){c&&c()}}}});var Tb=[],Ub=/(=)\?(?=&|$)|\?\?/;r.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var a=Tb.pop()||r.expando+"_"+ub++;return this[a]=!0,a}}),r.ajaxPrefilter("json jsonp",function(b,c,d){var e,f,g,h=b.jsonp!==!1&&(Ub.test(b.url)?"url":"string"==typeof b.data&&0===(b.contentType||"").indexOf("application/x-www-form-urlencoded")&&Ub.test(b.data)&&"data");if(h||"jsonp"===b.dataTypes[0])return e=b.jsonpCallback=r.isFunction(b.jsonpCallback)?b.jsonpCallback():b.jsonpCallback,h?b[h]=b[h].replace(Ub,"$1"+e):b.jsonp!==!1&&(b.url+=(vb.test(b.url)?"&":"?")+b.jsonp+"="+e),b.converters["script json"]=function(){return g||r.error(e+" was not called"),g[0]},b.dataTypes[0]="json",f=a[e],a[e]=function(){g=arguments},d.always(function(){void 0===f?r(a).removeProp(e):a[e]=f,b[e]&&(b.jsonpCallback=c.jsonpCallback,Tb.push(e)),g&&r.isFunction(f)&&f(g[0]),g=f=void 0}),"script"}),o.createHTMLDocument=function(){var a=d.implementation.createHTMLDocument("").body;return a.innerHTML="<form></form><form></form>",2===a.childNodes.length}(),r.parseHTML=function(a,b,c){if("string"!=typeof a)return[];"boolean"==typeof b&&(c=b,b=!1);var e,f,g;return b||(o.createHTMLDocument?(b=d.implementation.createHTMLDocument(""),e=b.createElement("base"),e.href=d.location.href,b.head.appendChild(e)):b=d),f=C.exec(a),g=!c&&[],f?[b.createElement(f[1])]:(f=qa([a],b,g),g&&g.length&&r(g).remove(),r.merge([],f.childNodes))},r.fn.load=function(a,b,c){var d,e,f,g=this,h=a.indexOf(" ");return h>-1&&(d=pb(a.slice(h)),a=a.slice(0,h)),r.isFunction(b)?(c=b,b=void 0):b&&"object"==typeof b&&(e="POST"),g.length>0&&r.ajax({url:a,type:e||"GET",dataType:"html",data:b}).done(function(a){f=arguments,g.html(d?r("<div>").append(r.parseHTML(a)).find(d):a)}).always(c&&function(a,b){g.each(function(){c.apply(this,f||[a.responseText,b,a])})}),this},r.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(a,b){r.fn[b]=function(a){return this.on(b,a)}}),r.expr.pseudos.animated=function(a){return r.grep(r.timers,function(b){return a===b.elem}).length},r.offset={setOffset:function(a,b,c){var d,e,f,g,h,i,j,k=r.css(a,"position"),l=r(a),m={};"static"===k&&(a.style.position="relative"),h=l.offset(),f=r.css(a,"top"),i=r.css(a,"left"),j=("absolute"===k||"fixed"===k)&&(f+i).indexOf("auto")>-1,j?(d=l.position(),g=d.top,e=d.left):(g=parseFloat(f)||0,e=parseFloat(i)||0),r.isFunction(b)&&(b=b.call(a,c,r.extend({},h))),null!=b.top&&(m.top=b.top-h.top+g),null!=b.left&&(m.left=b.left-h.left+e),"using"in b?b.using.call(a,m):l.css(m)}},r.fn.extend({offset:function(a){if(arguments.length)return void 0===a?this:this.each(function(b){r.offset.setOffset(this,a,b)});var b,c,d,e,f=this[0];if(f)return f.getClientRects().length?(d=f.getBoundingClientRect(),b=f.ownerDocument,c=b.documentElement,e=b.defaultView,{top:d.top+e.pageYOffset-c.clientTop,left:d.left+e.pageXOffset-c.clientLeft}):{top:0,left:0}},position:function(){if(this[0]){var a,b,c=this[0],d={top:0,left:0};return"fixed"===r.css(c,"position")?b=c.getBoundingClientRect():(a=this.offsetParent(),b=this.offset(),B(a[0],"html")||(d=a.offset()),d={top:d.top+r.css(a[0],"borderTopWidth",!0),left:d.left+r.css(a[0],"borderLeftWidth",!0)}),{top:b.top-d.top-r.css(c,"marginTop",!0),left:b.left-d.left-r.css(c,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var a=this.offsetParent;while(a&&"static"===r.css(a,"position"))a=a.offsetParent;return a||ra})}}),r.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(a,b){var c="pageYOffset"===b;r.fn[a]=function(d){return T(this,function(a,d,e){var f;return r.isWindow(a)?f=a:9===a.nodeType&&(f=a.defaultView),void 0===e?f?f[b]:a[d]:void(f?f.scrollTo(c?f.pageXOffset:e,c?e:f.pageYOffset):a[d]=e)},a,d,arguments.length)}}),r.each(["top","left"],function(a,b){r.cssHooks[b]=Pa(o.pixelPosition,function(a,c){if(c)return c=Oa(a,b),Ma.test(c)?r(a).position()[b]+"px":c})}),r.each({Height:"height",Width:"width"},function(a,b){r.each({padding:"inner"+a,content:b,"":"outer"+a},function(c,d){r.fn[d]=function(e,f){var g=arguments.length&&(c||"boolean"!=typeof e),h=c||(e===!0||f===!0?"margin":"border");return T(this,function(b,c,e){var f;return r.isWindow(b)?0===d.indexOf("outer")?b["inner"+a]:b.document.documentElement["client"+a]:9===b.nodeType?(f=b.documentElement,Math.max(b.body["scroll"+a],f["scroll"+a],b.body["offset"+a],f["offset"+a],f["client"+a])):void 0===e?r.css(b,c,h):r.style(b,c,e,h)},b,g?e:void 0,g)}})}),r.fn.extend({bind:function(a,b,c){return this.on(a,null,b,c)},unbind:function(a,b){return this.off(a,null,b)},delegate:function(a,b,c,d){return this.on(b,a,c,d)},undelegate:function(a,b,c){return 1===arguments.length?this.off(a,"**"):this.off(b,a||"**",c)}}),r.holdReady=function(a){a?r.readyWait++:r.ready(!0)},r.isArray=Array.isArray,r.parseJSON=JSON.parse,r.nodeName=B,"function"==typeof define&&define.amd&&define("jquery",[],function(){return r});var Vb=a.jQuery,Wb=a.$;return r.noConflict=function(b){return a.$===r&&(a.$=Wb),b&&a.jQuery===r&&(a.jQuery=Vb),r},b||(a.jQuery=a.$=r),r});

/*!
 * froala_editor v2.8.4 (https://www.froala.com/wysiwyg-editor)
 * License https://froala.com/wysiwyg-editor/terms/
 * Copyright 2014-2018 Froala Labs
 */

!function(n){"function"==typeof define&&define.amd?define(["jquery"],n):"object"==typeof module&&module.exports?module.exports=function(e,t){return t===undefined&&(t="undefined"!=typeof window?require("jquery"):require("jquery")(e)),n(t)}:n(window.jQuery)}(function(be){var s=function(e,t){this.id=++be.FE.ID,this.opts=be.extend(!0,{},be.extend({},s.DEFAULTS,"object"==typeof t&&t));var n=JSON.stringify(this.opts);be.FE.OPTS_MAPPING[n]=be.FE.OPTS_MAPPING[n]||this.id,this.sid=be.FE.OPTS_MAPPING[n],be.FE.SHARED[this.sid]=be.FE.SHARED[this.sid]||{},this.shared=be.FE.SHARED[this.sid],this.shared.count=(this.shared.count||0)+1,this.$oel=be(e),this.$oel.data("froala.editor",this),this.o_doc=e.ownerDocument,this.o_win="defaultView"in this.o_doc?this.o_doc.defaultView:this.o_doc.parentWindow;var r=be(this.o_win).scrollTop();this.$oel.on("froala.doInit",be.proxy(function(){this.$oel.off("froala.doInit"),this.doc=this.$el.get(0).ownerDocument,this.win="defaultView"in this.doc?this.doc.defaultView:this.doc.parentWindow,this.$doc=be(this.doc),this.$win=be(this.win),this.opts.pluginsEnabled||(this.opts.pluginsEnabled=Object.keys(be.FE.PLUGINS)),this.opts.initOnClick?(this.load(be.FE.MODULES),this.$el.on("touchstart.init",function(){be(this).data("touched",!0)}),this.$el.on("touchmove.init",function(){be(this).removeData("touched")}),this.$el.on("mousedown.init touchend.init dragenter.init focus.init",be.proxy(function(e){if("touchend"==e.type&&!this.$el.data("touched"))return!0;if(1===e.which||!e.which){this.$el.off("mousedown.init touchstart.init touchmove.init touchend.init dragenter.init focus.init"),this.load(be.FE.MODULES),this.load(be.FE.PLUGINS);var t=e.originalEvent&&e.originalEvent.originalTarget;t&&"IMG"==t.tagName&&be(t).trigger("mousedown"),"undefined"==typeof this.ul&&this.destroy(),"touchend"==e.type&&this.image&&e.originalEvent&&e.originalEvent.target&&be(e.originalEvent.target).is("img")&&setTimeout(be.proxy(function(){this.image.edit(be(e.originalEvent.target))},this),100),this.ready=!0,this.events.trigger("initialized")}},this)),this.events.trigger("initializationDelayed")):(this.load(be.FE.MODULES),this.load(be.FE.PLUGINS),be(this.o_win).scrollTop(r),"undefined"==typeof this.ul&&this.destroy(),this.ready=!0,this.events.trigger("initialized"))},this)),this._init()};s.DEFAULTS={initOnClick:!1,pluginsEnabled:null},s.MODULES={},s.PLUGINS={},s.VERSION="2.8.4",s.INSTANCES=[],s.OPTS_MAPPING={},s.SHARED={},s.ID=0,s.prototype._init=function(){var e=this.$oel.prop("tagName");this.$oel.closest("label").length;var t=be.proxy(function(){"TEXTAREA"!=e&&(this._original_html=this._original_html||this.$oel.html()),this.$box=this.$box||this.$oel,this.opts.fullPage&&(this.opts.iframe=!0),this.opts.iframe?(this.$iframe=be('<iframe src="about:blank" frameBorder="0">'),this.$wp=be("<div></div>"),this.$box.html(this.$wp),this.$wp.append(this.$iframe),this.$iframe.get(0).contentWindow.document.open(),this.$iframe.get(0).contentWindow.document.write("<!DOCTYPE html>"),this.$iframe.get(0).contentWindow.document.write("<html><head></head><body></body></html>"),this.$iframe.get(0).contentWindow.document.close(),this.$el=this.$iframe.contents().find("body"),this.el=this.$el.get(0),this.$head=this.$iframe.contents().find("head"),this.$html=this.$iframe.contents().find("html"),this.iframe_document=this.$iframe.get(0).contentWindow.document):(this.$el=be("<div></div>"),this.el=this.$el.get(0),this.$wp=be("<div></div>").append(this.$el),this.$box.html(this.$wp)),this.$oel.trigger("froala.doInit")},this),n=be.proxy(function(){this.$box=be("<div>"),this.$oel.before(this.$box).hide(),this._original_html=this.$oel.val(),this.$oel.parents("form").on("submit."+this.id,be.proxy(function(){this.events.trigger("form.submit")},this)),this.$oel.parents("form").on("reset."+this.id,be.proxy(function(){this.events.trigger("form.reset")},this)),t()},this),r=be.proxy(function(){this.$el=this.$oel,this.el=this.$el.get(0),this.$el.attr("contenteditable",!0).css("outline","none").css("display","inline-block"),this.opts.multiLine=!1,this.opts.toolbarInline=!1,this.$oel.trigger("froala.doInit")},this),i=be.proxy(function(){this.$el=this.$oel,this.el=this.$el.get(0),this.opts.toolbarInline=!1,this.$oel.trigger("froala.doInit")},this),a=be.proxy(function(){this.$el=this.$oel,this.el=this.$el.get(0),this.opts.toolbarInline=!1,this.$oel.on("click.popup",function(e){e.preventDefault()}),this.$oel.trigger("froala.doInit")},this);this.opts.editInPopup?a():"TEXTAREA"==e?n():"A"==e?r():"IMG"==e?i():"BUTTON"==e||"INPUT"==e?(this.opts.editInPopup=!0,this.opts.toolbarInline=!1,a()):t()},s.prototype.load=function(e){for(var t in e)if(e.hasOwnProperty(t)){if(this[t])continue;if(be.FE.PLUGINS[t]&&this.opts.pluginsEnabled.indexOf(t)<0)continue;if(this[t]=new e[t](this),this[t]._init&&(this[t]._init(),this.opts.initOnClick&&"core"==t))return!1}},s.prototype.destroy=function(){this.shared.count--,this.events.$off();var e=this.html.get();if(this.opts.iframe&&(this.events.disableBlur(),this.win.focus(),this.events.enableBlur()),this.events.trigger("destroy",[],!0),this.events.trigger("shared.destroy",undefined,!0),0===this.shared.count){for(var t in this.shared)this.shared.hasOwnProperty(t)&&(this.shared[t],be.FE.SHARED[this.sid][t]=null);delete be.FE.SHARED[this.sid]}this.$oel.parents("form").off("."+this.id),this.$oel.off("click.popup"),this.$oel.removeData("froala.editor"),this.$oel.off("froalaEditor"),this.core.destroy(e),be.FE.INSTANCES.splice(be.FE.INSTANCES.indexOf(this),1)},be.fn.froalaEditor=function(i){for(var a=[],e=0;e<arguments.length;e++)a.push(arguments[e]);if("string"==typeof i){var o=[];return this.each(function(){var e=be(this).data("froala.editor");if(e){var t,n;if(0<i.indexOf(".")&&e[i.split(".")[0]]?(e[i.split(".")[0]]&&(t=e[i.split(".")[0]]),n=i.split(".")[1]):(t=e,n=i.split(".")[0]),!t[n])return be.error("Method "+i+" does not exist in Froala Editor.");var r=t[n].apply(e,a.slice(1));r===undefined?o.push(this):0===o.length&&o.push(r)}}),1==o.length?o[0]:o}if("object"==typeof i||!i)return this.each(function(){if(!be(this).data("froala.editor")){new s(this,i)}})},be.fn.froalaEditor.Constructor=s,be.FroalaEditor=s,be.FE=s,be.FE.XS=0,be.FE.SM=1,be.FE.MD=2,be.FE.LG=3;if(be.FE.LinkRegExCommon="[a-z\\u0080-\\u009f\\u00a1-\\uffff0-9-_.]{1,}",be.FE.LinkRegExEnd="((:[0-9]{1,5})|)(((\\/|\\?|#)[a-z\\u00a1-\\uffff0-9@?\\|!^=%&amp;/~+#-\\'*-_{}]*)|())",be.FE.LinkRegExTLD="(("+be.FE.LinkRegExCommon+")(\\.(com|net|org|edu|mil|gov|co|biz|info|me|dev)))",be.FE.LinkRegExHTTP="((ftp|http|https):\\/\\/"+be.FE.LinkRegExCommon+")",be.FE.LinkRegExAuth="((ftp|http|https):\\/\\/[\\u0021-\\uffff]{1,}@"+be.FE.LinkRegExCommon+")",be.FE.LinkRegExWWW="(www\\."+be.FE.LinkRegExCommon+"\\.[a-z0-9-]{2,24})",be.FE.LinkRegEx="("+be.FE.LinkRegExTLD+"|"+be.FE.LinkRegExHTTP+"|"+be.FE.LinkRegExWWW+"|"+be.FE.LinkRegExAuth+")"+be.FE.LinkRegExEnd,be.FE.LinkProtocols=["mailto","tel","sms","notes","data"],be.FE.MAIL_REGEX=/.+@.+\..+/i,be.FE.MODULES.helpers=function(a){function e(){var e,t,n={},r=(t=-1,"Microsoft Internet Explorer"==navigator.appName?(e=navigator.userAgent,null!==new RegExp("MSIE ([0-9]{1,}[\\.0-9]{0,})").exec(e)&&(t=parseFloat(RegExp.$1))):"Netscape"==navigator.appName&&(e=navigator.userAgent,null!==new RegExp("Trident/.*rv:([0-9]{1,}[\\.0-9]{0,})").exec(e)&&(t=parseFloat(RegExp.$1))),t);if(0<r)n.msie=!0;else{var i=navigator.userAgent.toLowerCase(),a=/(edge)[ \/]([\w.]+)/.exec(i)||/(chrome)[ \/]([\w.]+)/.exec(i)||/(webkit)[ \/]([\w.]+)/.exec(i)||/(opera)(?:.*version|)[ \/]([\w.]+)/.exec(i)||/(msie) ([\w.]+)/.exec(i)||i.indexOf("compatible")<0&&/(mozilla)(?:.*? rv:([\w.]+)|)/.exec(i)||[],o=a[1]||"";a[2];a[1]&&(n[o]=!0),n.chrome?n.webkit=!0:n.webkit&&(n.safari=!0)}return n.msie&&(n.version=r),n}function t(){return/(iPad|iPhone|iPod)/g.test(navigator.userAgent)&&!i()}function n(){return/(Android)/g.test(navigator.userAgent)&&!i()}function r(){return/(Blackberry)/g.test(navigator.userAgent)}function i(){return/(Windows Phone)/gi.test(navigator.userAgent)}function o(e){return parseInt(e,10)||0}var s;var l=null;return{_init:function(){a.browser=e(),function(){function e(e,t){var a=e[t];e[t]=function(e){var t,n=!1,r=!1;if(e&&e.match(s)){e=e.replace(s,""),this.parentNode||(o.appendChild(this),r=!0);var i=this.parentNode;return this.id||(this.id="rootedQuerySelector_id_"+(new Date).getTime(),n=!0),t=a.call(i,"#"+this.id+" "+e),n&&(this.id=""),r&&o.removeChild(this),t}return a.call(this,e)}}var o=a.o_doc.createElement("div");try{o.querySelectorAll(":scope *")}catch(t){var s=/^\s*:scope/gi;e(Element.prototype,"querySelector"),e(Element.prototype,"querySelectorAll"),e(HTMLElement.prototype,"querySelector"),e(HTMLElement.prototype,"querySelectorAll")}}(),Element.prototype.matches||(Element.prototype.matches=Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector),Element.prototype.closest||(Element.prototype.closest=function(e){var t=this;if(!t)return null;if(!document.documentElement.contains(this))return null;do{if(t.matches(e))return t;t=t.parentElement}while(null!==t);return null})},isIOS:t,isMac:function(){return null==l&&(l=0<=navigator.platform.toUpperCase().indexOf("MAC")),l},isAndroid:n,isBlackberry:r,isWindowsPhone:i,isMobile:function(){return n()||t()||r()},isEmail:function(e){return!/^(https?:|ftps?:|)\/\//i.test(e)&&be.FE.MAIL_REGEX.test(e)},requestAnimationFrame:function(){return window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||function(e){window.setTimeout(e,1e3/60)}},getPX:o,screenSize:function(){var e=be('<div class="fr-visibility-helper"></div>').appendTo("body:first");try{var t=o(e.css("margin-left"));return e.remove(),t}catch(n){return be.FE.LG}},isTouch:function(){return"ontouchstart"in window||window.DocumentTouch&&document instanceof DocumentTouch},sanitizeURL:function(e){return/^(https?:|ftps?:|)\/\//i.test(e)?e:/^([A-Za-z]:(\\){1,2}|[A-Za-z]:((\\){1,2}[^\\]+)+)(\\)?$/i.test(e)?e:new RegExp("^("+be.FE.LinkProtocols.join("|")+"):\\/\\/","i").test(e)?e:e=encodeURIComponent(e).replace(/%23/g,"#").replace(/%2F/g,"/").replace(/%25/g,"%").replace(/mailto%3A/gi,"mailto:").replace(/file%3A/gi,"file:").replace(/sms%3A/gi,"sms:").replace(/tel%3A/gi,"tel:").replace(/notes%3A/gi,"notes:").replace(/data%3Aimage/gi,"data:image").replace(/blob%3A/gi,"blob:").replace(/%3A(\d)/gi,":$1").replace(/webkit-fake-url%3A/gi,"webkit-fake-url:").replace(/%3F/g,"?").replace(/%3D/g,"=").replace(/%26/g,"&").replace(/&amp;/g,"&").replace(/%2C/g,",").replace(/%3B/g,";").replace(/%2B/g,"+").replace(/%40/g,"@").replace(/%5B/g,"[").replace(/%5D/g,"]").replace(/%7B/g,"{").replace(/%7D/g,"}")},isArray:function(e){return e&&!e.propertyIsEnumerable("length")&&"object"==typeof e&&"number"==typeof e.length},RGBToHex:function(e){function t(e){return("0"+parseInt(e,10).toString(16)).slice(-2)}try{return e&&"transparent"!==e?/^#[0-9A-F]{6}$/i.test(e)?e:("#"+t((e=e.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/))[1])+t(e[2])+t(e[3])).toUpperCase():""}catch(n){return null}},HEXtoRGB:function(e){e=e.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i,function(e,t,n,r){return t+t+n+n+r+r});var t=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(e);return t?"rgb("+parseInt(t[1],16)+", "+parseInt(t[2],16)+", "+parseInt(t[3],16)+")":""},isURL:function(e){return!!/^(https?:|ftps?:|)\/\//i.test(e)&&(e=String(e).replace(/</g,"%3C").replace(/>/g,"%3E").replace(/"/g,"%22").replace(/ /g,"%20"),new RegExp("^"+be.FE.LinkRegExHTTP+be.FE.LinkRegExEnd+"$","gi").test(e))},getAlignment:function(e){var t=(e.css("text-align")||"").replace(/-(.*)-/g,"");if(["left","right","justify","center"].indexOf(t)<0){if(!s){var n=be('<div dir="'+("rtl"==a.opts.direction?"rtl":"auto")+'" style="text-align: '+a.$el.css("text-align")+'; position: fixed; left: -3000px;"><span id="s1">.</span><span id="s2">.</span></div>');be("body:first").append(n);var r=n.find("#s1").get(0).getBoundingClientRect().left,i=n.find("#s2").get(0).getBoundingClientRect().left;n.remove(),s=r<i?"left":"right"}t=s}return t},scrollTop:function(){return a.o_win.pageYOffset?a.o_win.pageYOffset:a.o_doc.documentElement&&a.o_doc.documentElement.scrollTop?a.o_doc.documentElement.scrollTop:a.o_doc.body.scrollTop?a.o_doc.body.scrollTop:0},scrollLeft:function(){return a.o_win.pageXOffset?a.o_win.pageXOffset:a.o_doc.documentElement&&a.o_doc.documentElement.scrollLeft?a.o_doc.documentElement.scrollLeft:a.o_doc.body.scrollLeft?a.o_doc.body.scrollLeft:0},isInViewPort:function(e){var t=e.getBoundingClientRect();return 0<=t.top&&t.bottom<=(window.innerHeight||document.documentElement.clientHeight)||t.top<=0&&t.bottom>=(window.innerHeight||document.documentElement.clientHeight)}}},be.FE.MODULES.events=function(s){var e,o={};function t(e,t,n){f(e,t,n)}function n(e){if(void 0===e&&(e=!0),!s.$wp)return!1;if(s.helpers.isIOS()&&s.$win.get(0).focus(),s.core.hasFocus())return!1;if(!s.core.hasFocus()&&e){var t=s.$win.scrollTop();if(s.browser.msie&&s.$box&&s.$box.css("position","fixed"),s.browser.msie&&s.$wp&&s.$wp.css("overflow","visible"),a(),s.$el.focus(),s.events.trigger("focus"),i(),s.browser.msie&&s.$box&&s.$box.css("position",""),s.browser.msie&&s.$wp&&s.$wp.css("overflow","auto"),t!=s.$win.scrollTop()&&s.$win.scrollTop(t),!s.selection.info(s.el).atStart)return!1}if(!s.core.hasFocus()||0<s.$el.find(".fr-marker").length)return!1;if(s.selection.info(s.el).atStart&&s.selection.isCollapsed()&&null!=s.html.defaultTag()){var n=s.markers.insert();if(n&&!s.node.blockParent(n)){be(n).remove();var r=s.$el.find(s.html.blockTagsQuery()).get(0);r&&(be(r).prepend(be.FE.MARKERS),s.selection.restore())}else n&&be(n).remove()}}var r=!1;function i(){e=!0}function a(){e=!1}function l(){return e}function d(e,t,n){var r,i=e.split(" ");if(1<i.length){for(var a=0;a<i.length;a++)d(i[a],t,n);return!0}void 0===n&&(n=!1),r=0!==e.indexOf("shared.")?o[e]=o[e]||[]:s.shared._events[e]=s.shared._events[e]||[],n?r.unshift(t):r.push(t)}var c=[];function f(e,t,n,r,i){"function"==typeof n&&(i=r,r=n,n=!1);var a=i?s.shared.$_events:c,o=i?s.sid:s.id;n?e.on(t.split(" ").join(".ed"+o+" ")+".ed"+o,n,r):e.on(t.split(" ").join(".ed"+o+" ")+".ed"+o,r),a.push([e,t.split(" ").join(".ed"+o+" ")+".ed"+o])}function p(e){for(var t=0;t<e.length;t++)e[t][0].off(e[t][1])}function u(e,t,n){if(!s.edit.isDisabled()||n){var r,i;if(0!==e.indexOf("shared."))r=o[e];else{if(0<s.shared.count)return!1;r=s.shared._events[e]}if(r)for(var a=0;a<r.length;a++)if(!1===(i=r[a].apply(s,t)))return!1;return!1!==(i=s.$oel.triggerHandler("froalaEditor."+e,be.merge([s],t||[])))&&i}}function h(){for(var e in o)o.hasOwnProperty(e)&&delete o[e]}function g(){for(var e in s.shared._events)s.shared._events.hasOwnProperty(e)&&delete s.shared._events[e]}return{_init:function(){s.shared.$_events=s.shared.$_events||[],s.shared._events={},s.helpers.isMobile()?(s._mousedown="touchstart",s._mouseup="touchend",s._move="touchmove",s._mousemove="touchmove"):(s._mousedown="mousedown",s._mouseup="mouseup",s._move="",s._mousemove="mousemove"),t(s.$el,"click mouseup mousedown touchstart touchend dragenter dragover dragleave dragend drop dragstart",function(e){u(e.type,[e])}),d("mousedown",function(){for(var e=0;e<be.FE.INSTANCES.length;e++)be.FE.INSTANCES[e]!=s&&be.FE.INSTANCES[e].popups&&be.FE.INSTANCES[e].popups.areVisible()&&be.FE.INSTANCES[e].$el.find(".fr-marker").remove()}),t(s.$win,s._mousedown,function(e){u("window.mousedown",[e]),i()}),t(s.$win,s._mouseup,function(e){u("window.mouseup",[e])}),t(s.$win,"cut copy keydown keyup touchmove touchend",function(e){u("window."+e.type,[e])}),t(s.$doc,"dragend drop",function(e){u("document."+e.type,[e])}),t(s.$el,"keydown keypress keyup input",function(e){u(e.type,[e])}),t(s.$el,"focus",function(e){l()&&(n(!1),!1===r&&u(e.type,[e]))}),t(s.$el,"blur",function(e){l()&&!0===r&&(u(e.type,[e]),i())}),d("focus",function(){r=!0}),d("blur",function(){r=!1}),i(),t(s.$el,"cut copy paste beforepaste",function(e){u(e.type,[e])}),d("destroy",h),d("shared.destroy",g)},on:d,trigger:u,bindClick:function(e,t,n){f(e,s._mousedown,t,function(e){var t,n;s.edit.isDisabled()||(n=be((t=e).currentTarget),s.edit.isDisabled()||s.node.hasClass(n.get(0),"fr-disabled")?t.preventDefault():"mousedown"===t.type&&1!==t.which||(s.helpers.isMobile()||t.preventDefault(),(s.helpers.isAndroid()||s.helpers.isWindowsPhone())&&0===n.parents(".fr-dropdown-menu").length&&(t.preventDefault(),t.stopPropagation()),n.addClass("fr-selected"),s.events.trigger("commands.mousedown",[n])))},!0),f(e,s._mouseup+" "+s._move,t,function(e){s.edit.isDisabled()||function(e,t){var n=be(e.currentTarget);if(s.edit.isDisabled()||s.node.hasClass(n.get(0),"fr-disabled"))return e.preventDefault();if(("mouseup"!==e.type||1===e.which)&&s.node.hasClass(n.get(0),"fr-selected"))if("touchmove"!=e.type){if(e.stopPropagation(),e.stopImmediatePropagation(),e.preventDefault(),!s.node.hasClass(n.get(0),"fr-selected"))return s.button.getButtons(".fr-selected",!0).removeClass("fr-selected");if(s.button.getButtons(".fr-selected",!0).removeClass("fr-selected"),n.data("dragging")||n.attr("disabled"))return n.removeData("dragging");var r=n.data("timeout");r&&(clearTimeout(r),n.removeData("timeout")),t.apply(s,[e])}else n.data("timeout")||n.data("timeout",setTimeout(function(){n.data("dragging",!0)},100))}(e,n)},!0),f(e,"mousedown click mouseup",t,function(e){s.edit.isDisabled()||e.stopPropagation()},!0),d("window.mouseup",function(){s.edit.isDisabled()||(e.find(t).removeClass("fr-selected"),i())})},disableBlur:a,enableBlur:i,blurActive:l,focus:n,chainTrigger:function(e,t,n){if(!s.edit.isDisabled()||n){var r,i;if(0!==e.indexOf("shared."))r=o[e];else{if(0<s.shared.count)return!1;r=s.shared._events[e]}if(r)for(var a=0;a<r.length;a++)void 0!==(i=r[a].apply(s,[t]))&&(t=i);return void 0!==(i=s.$oel.triggerHandler("froalaEditor."+e,be.merge([s],[t])))&&(t=i),t}},$on:f,$off:function(){p(c),c=[],0===s.shared.count&&(p(s.shared.$_events),s.shared.$_events=[])}}},be.FE.MODULES.node=function(o){function s(e){return e&&"IFRAME"!=e.tagName?Array.prototype.slice.call(e.childNodes||[]):[]}function l(e){return!!e&&(e.nodeType==Node.ELEMENT_NODE&&0<=be.FE.BLOCK_TAGS.indexOf(e.tagName.toLowerCase()))}function d(e){var t={},n=e.attributes;if(n)for(var r=0;r<n.length;r++){var i=n[r];t[i.nodeName]=i.value}return t}function t(e){for(var t="",n=d(e),r=Object.keys(n).sort(),i=0;i<r.length;i++){var a=r[i],o=n[a];o.indexOf("'")<0&&0<=o.indexOf('"')?t+=" "+a+"='"+o+"'":0<=o.indexOf('"')&&0<=o.indexOf("'")?t+=" "+a+'="'+(o=o.replace(/"/g,"&quot;"))+'"':t+=" "+a+'="'+o+'"'}return t}function n(e){return e===o.el}return{isBlock:l,isEmpty:function(e,t){if(!e)return!0;if(e.querySelector("table"))return!1;var n=s(e);1==n.length&&l(n[0])&&(n=s(n[0]));for(var r=!1,i=0;i<n.length;i++){var a=n[i];if(!(t&&o.node.hasClass(a,"fr-marker")||a.nodeType==Node.TEXT_NODE&&0===a.textContent.length)){if("BR"!=a.tagName&&0<(a.textContent||"").replace(/\u200B/gi,"").replace(/\n/g,"").length)return!1;if(r)return!1;"BR"==a.tagName&&(r=!0)}}return!(e.querySelectorAll(be.FE.VOID_ELEMENTS.join(",")).length-e.querySelectorAll("br").length||e.querySelector(o.opts.htmlAllowedEmptyTags.join(":not(.fr-marker),")+":not(.fr-marker)")||1<e.querySelectorAll(be.FE.BLOCK_TAGS.join(",")).length||e.querySelector(o.opts.htmlDoNotWrapTags.join(":not(.fr-marker),")+":not(.fr-marker)"))},blockParent:function(e){for(;e&&e.parentNode!==o.el&&(!e.parentNode||!o.node.hasClass(e.parentNode,"fr-inner"));)if(l(e=e.parentNode))return e;return null},deepestParent:function(e,t,n){if(void 0===t&&(t=[]),void 0===n&&(n=!0),t.push(o.el),0<=t.indexOf(e.parentNode)||e.parentNode&&o.node.hasClass(e.parentNode,"fr-inner")||e.parentNode&&0<=be.FE.SIMPLE_ENTER_TAGS.indexOf(e.parentNode.tagName)&&n)return null;for(;t.indexOf(e.parentNode)<0&&e.parentNode&&!o.node.hasClass(e.parentNode,"fr-inner")&&(be.FE.SIMPLE_ENTER_TAGS.indexOf(e.parentNode.tagName)<0||!n)&&(!l(e)||!l(e.parentNode)||!n);)e=e.parentNode;return e},rawAttributes:d,attributes:t,clearAttributes:function(e){for(var t=e.attributes,n=t.length-1;0<=n;n--){var r=t[n];e.removeAttribute(r.nodeName)}},openTagString:function(e){return"<"+e.tagName.toLowerCase()+t(e)+">"},closeTagString:function(e){return"</"+e.tagName.toLowerCase()+">"},isFirstSibling:function e(t,n){void 0===n&&(n=!0);for(var r=t.previousSibling;r&&n&&o.node.hasClass(r,"fr-marker");)r=r.previousSibling;return!r||r.nodeType==Node.TEXT_NODE&&""===r.textContent&&e(r)},isLastSibling:function e(t,n){void 0===n&&(n=!0);for(var r=t.nextSibling;r&&n&&o.node.hasClass(r,"fr-marker");)r=r.nextSibling;return!r||r.nodeType==Node.TEXT_NODE&&""===r.textContent&&e(r)},isList:function(e){return!!e&&0<=["UL","OL"].indexOf(e.tagName)},isLink:function(e){return!!e&&e.nodeType==Node.ELEMENT_NODE&&"a"==e.tagName.toLowerCase()},isElement:n,contents:s,isVoid:function(e){return e&&e.nodeType==Node.ELEMENT_NODE&&0<=be.FE.VOID_ELEMENTS.indexOf((e.tagName||"").toLowerCase())},hasFocus:function(e){return e===o.doc.activeElement&&(!o.doc.hasFocus||o.doc.hasFocus())&&!!(n(e)||e.type||e.href||~e.tabIndex)},isEditable:function(e){return(!e.getAttribute||"false"!=e.getAttribute("contenteditable"))&&["STYLE","SCRIPT"].indexOf(e.tagName)<0},isDeletable:function(e){return e&&e.nodeType==Node.ELEMENT_NODE&&e.getAttribute("class")&&0<=(e.getAttribute("class")||"").indexOf("fr-deletable")},hasClass:function(e,t){return e instanceof be&&(e=e.get(0)),e&&e.classList&&e.classList.contains(t)},filter:function(e){return o.browser.msie?e:{acceptNode:e}}}},be.FE.INVISIBLE_SPACE="&#8203;",be.FE.START_MARKER='<span class="fr-marker" data-id="0" data-type="true" style="display: none; line-height: 0;">'+be.FE.INVISIBLE_SPACE+"</span>",be.FE.END_MARKER='<span class="fr-marker" data-id="0" data-type="false" style="display: none; line-height: 0;">'+be.FE.INVISIBLE_SPACE+"</span>",be.FE.MARKERS=be.FE.START_MARKER+be.FE.END_MARKER,be.FE.MODULES.markers=function(d){function l(){if(!d.$wp)return null;try{var e=d.selection.ranges(0),t=e.commonAncestorContainer;if(t!=d.el&&0===d.$el.find(t).length)return null;var n=e.cloneRange(),r=e.cloneRange();n.collapse(!0);var i=be('<span class="fr-marker" style="display: none; line-height: 0;">'+be.FE.INVISIBLE_SPACE+"</span>",d.doc)[0];if(n.insertNode(i),i=d.$el.find("span.fr-marker").get(0)){for(var a=i.nextSibling;a&&a.nodeType===Node.TEXT_NODE&&0===a.textContent.length;)be(a).remove(),a=d.$el.find("span.fr-marker").get(0).nextSibling;return d.selection.clear(),d.selection.get().addRange(r),i}return null}catch(o){}}function c(){d.$el.find(".fr-marker").remove()}return{place:function(e,t,n){var r,i,a;try{var o=e.cloneRange();if(o.collapse(t),o.insertNode(be('<span class="fr-marker" data-id="'+n+'" data-type="'+t+'" style="display: '+(d.browser.safari?"none":"inline-block")+'; line-height: 0;">'+be.FE.INVISIBLE_SPACE+"</span>",d.doc)[0]),!0===t)for(a=(r=d.$el.find('span.fr-marker[data-type="true"][data-id="'+n+'"]').get(0)).nextSibling;a&&a.nodeType===Node.TEXT_NODE&&0===a.textContent.length;)be(a).remove(),a=r.nextSibling;if(!0===t&&!e.collapsed){for(;!d.node.isElement(r.parentNode)&&!a;)be(r.parentNode).after(r),a=r.nextSibling;if(a&&a.nodeType===Node.ELEMENT_NODE&&d.node.isBlock(a)&&"HR"!==a.tagName){for(i=[a];a=i[0],(i=d.node.contents(a))[0]&&d.node.isBlock(i[0]););be(a).prepend(be(r))}}if(!1===t&&!e.collapsed){if((a=(r=d.$el.find('span.fr-marker[data-type="false"][data-id="'+n+'"]').get(0)).previousSibling)&&a.nodeType===Node.ELEMENT_NODE&&d.node.isBlock(a)&&"HR"!==a.tagName){for(i=[a];a=i[i.length-1],(i=d.node.contents(a))[i.length-1]&&d.node.isBlock(i[i.length-1]););be(a).append(be(r))}r.parentNode&&0<=["TD","TH"].indexOf(r.parentNode.tagName)&&r.parentNode.previousSibling&&!r.previousSibling&&be(r.parentNode.previousSibling).append(r)}var s=d.$el.find('span.fr-marker[data-type="'+t+'"][data-id="'+n+'"]').get(0);return s&&(s.style.display="none"),s}catch(l){return null}},insert:l,split:function(){d.selection.isCollapsed()||d.selection.remove();var e=d.$el.find(".fr-marker").get(0);if(null==e&&(e=l()),null==e)return null;var t=d.node.deepestParent(e);if(t||(t=d.node.blockParent(e))&&"LI"!=t.tagName&&(t=null),t)if(d.node.isBlock(t)&&d.node.isEmpty(t))"LI"!=t.tagName||t.parentNode.firstElementChild!=t||d.node.isEmpty(t.parentNode)?be(t).replaceWith('<span class="fr-marker"></span>'):be(t).append('<span class="fr-marker"></span>');else if(d.cursor.isAtStart(e,t))be(t).before('<span class="fr-marker"></span>'),be(e).remove();else if(d.cursor.isAtEnd(e,t))be(t).after('<span class="fr-marker"></span>'),be(e).remove();else{for(var n=e,r="",i="";n=n.parentNode,r+=d.node.closeTagString(n),i=d.node.openTagString(n)+i,n!=t;);be(e).replaceWith('<span id="fr-break"></span>');var a=d.node.openTagString(t)+be(t).html()+d.node.closeTagString(t);a=a.replace(/<span id="fr-break"><\/span>/g,r+'<span class="fr-marker"></span>'+i),be(t).replaceWith(a)}return d.$el.find(".fr-marker").get(0)},insertAtPoint:function(e){var t,n=e.clientX,r=e.clientY;c();var i=null;if("undefined"!=typeof d.doc.caretPositionFromPoint?(t=d.doc.caretPositionFromPoint(n,r),(i=d.doc.createRange()).setStart(t.offsetNode,t.offset),i.setEnd(t.offsetNode,t.offset)):"undefined"!=typeof d.doc.caretRangeFromPoint&&(t=d.doc.caretRangeFromPoint(n,r),(i=d.doc.createRange()).setStart(t.startContainer,t.startOffset),i.setEnd(t.startContainer,t.startOffset)),null!==i&&"undefined"!=typeof d.win.getSelection){var a=d.win.getSelection();a.removeAllRanges(),a.addRange(i)}else if("undefined"!=typeof d.doc.body.createTextRange)try{(i=d.doc.body.createTextRange()).moveToPoint(n,r);var o=i.duplicate();o.moveToPoint(n,r),i.setEndPoint("EndToEnd",o),i.select()}catch(s){return!1}l()},remove:c}},be.FE.MODULES.selection=function(T){function s(){var e="";return T.win.getSelection?e=T.win.getSelection():T.doc.getSelection?e=T.doc.getSelection():T.doc.selection&&(e=T.doc.selection.createRange().text),e.toString()}function A(){return T.win.getSelection?T.win.getSelection():T.doc.getSelection?T.doc.getSelection():T.doc.selection.createRange()}function c(e){var t=A(),n=[];if(t&&t.getRangeAt&&t.rangeCount){n=[];for(var r=0;r<t.rangeCount;r++)n.push(t.getRangeAt(r))}else n=T.doc.createRange?[T.doc.createRange()]:[];return void 0!==e?n[e]:n}function C(){var e=A();try{e.removeAllRanges?e.removeAllRanges():e.empty?e.empty():e.clear&&e.clear()}catch(t){}}function f(e,t){var n=e;return n.nodeType==Node.ELEMENT_NODE&&0<n.childNodes.length&&n.childNodes[t]&&(n=n.childNodes[t]),n.nodeType==Node.TEXT_NODE&&(n=n.parentNode),n}function S(){if(T.$wp){T.markers.remove();var e,t,n=c(),r=[];for(t=0;t<n.length;t++)if(n[t].startContainer!==T.doc||T.browser.msie){var i=(e=n[t]).collapsed,a=T.markers.place(e,!0,t),o=T.markers.place(e,!1,t);if(void 0!==a&&a||!i||(be(".fr-marker").remove(),T.selection.setAtEnd(T.el)),T.el.normalize(),T.browser.safari&&!i)try{(e=T.doc.createRange()).setStartAfter(a),e.setEndBefore(o),r.push(e)}catch(s){}}if(T.browser.safari&&r.length)for(T.selection.clear(),t=0;t<r.length;t++)T.selection.get().addRange(r[t])}}function R(){var e,t=T.el.querySelectorAll('.fr-marker[data-type="true"]');if(!T.$wp)return T.markers.remove(),!1;if(0===t.length)return!1;if(T.browser.msie||T.browser.edge)for(e=0;e<t.length;e++)t[e].style.display="inline-block";T.core.hasFocus()||T.browser.msie||T.browser.webkit||T.$el.focus(),C();var n=A();for(e=0;e<t.length;e++){var r=be(t[e]).data("id"),i=t[e],a=T.doc.createRange(),o=T.$el.find('.fr-marker[data-type="false"][data-id="'+r+'"]');(T.browser.msie||T.browser.edge)&&o.css("display","inline-block");var s=null;if(0<o.length){o=o[0];try{for(var l,d=!1,c=i.nextSibling;c&&c.nodeType==Node.TEXT_NODE&&0===c.textContent.length;)c=(l=c).nextSibling,be(l).remove();for(var f,p,u=o.nextSibling;u&&u.nodeType==Node.TEXT_NODE&&0===u.textContent.length;)u=(l=u).nextSibling,be(l).remove();if(i.nextSibling==o||o.nextSibling==i){for(var h=i.nextSibling==o?i:o,g=h==i?o:i,m=h.previousSibling;m&&m.nodeType==Node.TEXT_NODE&&0===m.length;)m=(l=m).previousSibling,be(l).remove();if(m&&m.nodeType==Node.TEXT_NODE)for(;m&&m.previousSibling&&m.previousSibling.nodeType==Node.TEXT_NODE;)m.previousSibling.textContent=m.previousSibling.textContent+m.textContent,m=m.previousSibling,be(m.nextSibling).remove();for(var v=g.nextSibling;v&&v.nodeType==Node.TEXT_NODE&&0===v.length;)v=(l=v).nextSibling,be(l).remove();if(v&&v.nodeType==Node.TEXT_NODE)for(;v&&v.nextSibling&&v.nextSibling.nodeType==Node.TEXT_NODE;)v.nextSibling.textContent=v.textContent+v.nextSibling.textContent,v=v.nextSibling,be(v.previousSibling).remove();if(m&&(T.node.isVoid(m)||T.node.isBlock(m))&&(m=null),v&&(T.node.isVoid(v)||T.node.isBlock(v))&&(v=null),m&&v&&m.nodeType==Node.TEXT_NODE&&v.nodeType==Node.TEXT_NODE){be(i).remove(),be(o).remove();var E=m.textContent.length;m.textContent=m.textContent+v.textContent,be(v).remove(),T.opts.htmlUntouched||T.spaces.normalize(m),a.setStart(m,E),a.setEnd(m,E),d=!0}else!m&&v&&v.nodeType==Node.TEXT_NODE?(be(i).remove(),be(o).remove(),T.opts.htmlUntouched||T.spaces.normalize(v),s=be(T.doc.createTextNode("\u200b")),be(v).before(s),a.setStart(v,0),a.setEnd(v,0),d=!0):!v&&m&&m.nodeType==Node.TEXT_NODE&&(be(i).remove(),be(o).remove(),T.opts.htmlUntouched||T.spaces.normalize(m),s=be(T.doc.createTextNode("\u200b")),be(m).after(s),a.setStart(m,m.textContent.length),a.setEnd(m,m.textContent.length),d=!0)}if(!d)(T.browser.chrome||T.browser.edge)&&i.nextSibling==o?(f=y(o,a,!0)||a.setStartAfter(o),p=y(i,a,!1)||a.setEndBefore(i)):(i.previousSibling==o&&(o=(i=o).nextSibling),o.nextSibling&&"BR"===o.nextSibling.tagName||!o.nextSibling&&T.node.isBlock(i.previousSibling)||i.previousSibling&&"BR"==i.previousSibling.tagName||(i.style.display="inline",o.style.display="inline",s=be(T.doc.createTextNode("\u200b"))),f=y(i,a,!0)||be(i).before(s)&&a.setStartBefore(i),p=y(o,a,!1)||be(o).after(s)&&a.setEndAfter(o)),"function"==typeof f&&f(),"function"==typeof p&&p()}catch(b){}}s&&s.remove();try{n.addRange(a)}catch(b){}}T.markers.remove()}function y(e,t,n){var r,i=e.previousSibling,a=e.nextSibling;return i&&a&&i.nodeType==Node.TEXT_NODE&&a.nodeType==Node.TEXT_NODE?(r=i.textContent.length,n?(a.textContent=i.textContent+a.textContent,be(i).remove(),be(e).remove(),T.opts.htmlUntouched||T.spaces.normalize(a),function(){t.setStart(a,r)}):(i.textContent=i.textContent+a.textContent,be(a).remove(),be(e).remove(),T.opts.htmlUntouched||T.spaces.normalize(i),function(){t.setEnd(i,r)})):i&&!a&&i.nodeType==Node.TEXT_NODE?(r=i.textContent.length,n?(T.opts.htmlUntouched||T.spaces.normalize(i),function(){t.setStart(i,r)}):(T.opts.htmlUntouched||T.spaces.normalize(i),function(){t.setEnd(i,r)})):!(!a||i||a.nodeType!=Node.TEXT_NODE)&&(n?(T.opts.htmlUntouched||T.spaces.normalize(a),function(){t.setStart(a,0)}):(T.opts.htmlUntouched||T.spaces.normalize(a),function(){t.setEnd(a,0)}))}function _(){for(var e=c(),t=0;t<e.length;t++)if(!e[t].collapsed)return!1;return!0}function i(e){var t,n,r=!1,i=!1;if(T.win.getSelection){var a=T.win.getSelection();a.rangeCount&&((n=(t=a.getRangeAt(0)).cloneRange()).selectNodeContents(e),n.setEnd(t.startContainer,t.startOffset),r=""===n.toString(),n.selectNodeContents(e),n.setStart(t.endContainer,t.endOffset),i=""===n.toString())}else T.doc.selection&&"Control"!=T.doc.selection.type&&((n=(t=T.doc.selection.createRange()).duplicate()).moveToElementText(e),n.setEndPoint("EndToStart",t),r=""===n.text,n.moveToElementText(e),n.setEndPoint("StartToEnd",t),i=""===n.text);return{atStart:r,atEnd:i}}function L(e,t){void 0===t&&(t=!0);var n=be(e).html();n&&n.replace(/\u200b/g,"").length!=n.length&&be(e).html(n.replace(/\u200b/g,""));for(var r=T.node.contents(e),i=0;i<r.length;i++)r[i].nodeType!=Node.ELEMENT_NODE?be(r[i]).remove():(L(r[i],0===i),0===i&&(t=!1));e.nodeType==Node.TEXT_NODE?be(e).replaceWith('<span data-first="true" data-text="true"></span>'):t&&be(e).attr("data-first",!0)}function x(){return 0===be(this).find("fr-inner").length}function p(){try{if(!T.$wp)return!1;for(var e=c(0).commonAncestorContainer;e&&!T.node.isElement(e);)e=e.parentNode;return!!T.node.isElement(e)}catch(t){return!1}}function r(e,t){if(!e||0<e.getElementsByClassName("fr-marker").length)return!1;for(var n=e.firstChild;n&&(T.node.isBlock(n)||t&&!T.node.isVoid(n)&&n.nodeType==Node.ELEMENT_NODE);)n=(e=n).firstChild;e.innerHTML=be.FE.MARKERS+e.innerHTML}function a(e,t){if(!e||0<e.getElementsByClassName("fr-marker").length)return!1;for(var n=e.lastChild;n&&(T.node.isBlock(n)||t&&!T.node.isVoid(n)&&n.nodeType==Node.ELEMENT_NODE);)n=(e=n).lastChild;var r=T.doc.createElement("SPAN");r.setAttribute("id","fr-sel-markers"),r.innerHTML=be.FE.MARKERS,e.appendChild(r);var i=e.querySelector("#fr-sel-markers");i.outerHTML=i.innerHTML}return{text:s,get:A,ranges:c,clear:C,element:function(){var e=A();try{if(e.rangeCount){var t,n=c(0),r=n.startContainer;if(r.nodeType==Node.TEXT_NODE&&n.startOffset==(r.textContent||"").length&&r.nextSibling&&(r=r.nextSibling),r.nodeType==Node.ELEMENT_NODE){var i=!1;if(0<r.childNodes.length&&r.childNodes[n.startOffset]){for(t=r.childNodes[n.startOffset];t&&t.nodeType==Node.TEXT_NODE&&0===t.textContent.length;)t=t.nextSibling;if(t&&t.textContent.replace(/\u200B/g,"")===s().replace(/\u200B/g,"")&&(r=t,i=!0),!i&&1<r.childNodes.length&&0<n.startOffset&&r.childNodes[n.startOffset-1]){for(t=r.childNodes[n.startOffset-1];t&&t.nodeType==Node.TEXT_NODE&&0===t.textContent.length;)t=t.nextSibling;t&&t.textContent.replace(/\u200B/g,"")===s().replace(/\u200B/g,"")&&(r=t,i=!0)}}else!n.collapsed&&r.nextSibling&&r.nextSibling.nodeType==Node.ELEMENT_NODE&&(t=r.nextSibling)&&t.textContent.replace(/\u200B/g,"")===s().replace(/\u200B/g,"")&&(r=t,i=!0);!i&&0<r.childNodes.length&&be(r.childNodes[0]).text().replace(/\u200B/g,"")===s().replace(/\u200B/g,"")&&["BR","IMG","HR"].indexOf(r.childNodes[0].tagName)<0&&(r=r.childNodes[0])}for(;r.nodeType!=Node.ELEMENT_NODE&&r.parentNode;)r=r.parentNode;for(var a=r;a&&"HTML"!=a.tagName;){if(a==T.el)return r;a=be(a).parent()[0]}}}catch(o){}return T.el},endElement:function(){var e=A();try{if(e.rangeCount){var t,n=c(0),r=n.endContainer;if(r.nodeType==Node.ELEMENT_NODE){var i=!1;0<r.childNodes.length&&r.childNodes[n.endOffset]&&be(r.childNodes[n.endOffset]).text()===s()?(r=r.childNodes[n.endOffset],i=!0):!n.collapsed&&r.previousSibling&&r.previousSibling.nodeType==Node.ELEMENT_NODE?(t=r.previousSibling)&&t.textContent.replace(/\u200B/g,"")===s().replace(/\u200B/g,"")&&(r=t,i=!0):!n.collapsed&&0<r.childNodes.length&&r.childNodes[n.endOffset]&&(t=r.childNodes[n.endOffset].previousSibling).nodeType==Node.ELEMENT_NODE&&t&&t.textContent.replace(/\u200B/g,"")===s().replace(/\u200B/g,"")&&(r=t,i=!0),!i&&0<r.childNodes.length&&be(r.childNodes[r.childNodes.length-1]).text()===s()&&["BR","IMG","HR"].indexOf(r.childNodes[r.childNodes.length-1].tagName)<0&&(r=r.childNodes[r.childNodes.length-1])}for(r.nodeType==Node.TEXT_NODE&&0===n.endOffset&&r.previousSibling&&r.previousSibling.nodeType==Node.ELEMENT_NODE&&(r=r.previousSibling);r.nodeType!=Node.ELEMENT_NODE&&r.parentNode;)r=r.parentNode;for(var a=r;a&&"HTML"!=a.tagName;){if(a==T.el)return r;a=be(a).parent()[0]}}}catch(o){}return T.el},save:S,restore:R,isCollapsed:_,isFull:function(){if(_())return!1;T.selection.save();var e,t=T.el.querySelectorAll("td, th, img, br");for(e=0;e<t.length;e++)t[e].nextSibling&&(t[e].innerHTML='<span class="fr-mk">'+be.FE.INVISIBLE_SPACE+"</span>"+t[e].innerHTML);var n=!1,r=i(T.el);for(r.atStart&&r.atEnd&&(n=!0),t=T.el.querySelectorAll(".fr-mk"),e=0;e<t.length;e++)t[e].parentNode.removeChild(t[e]);return T.selection.restore(),n},inEditor:p,remove:function(){if(_())return!0;var t;S();var n=function(e){for(var t=e.previousSibling;t&&t.nodeType==Node.TEXT_NODE&&0===t.textContent.length;){var n=t;t=t.previousSibling,be(n).remove()}return t},r=function(e){for(var t=e.nextSibling;t&&t.nodeType==Node.TEXT_NODE&&0===t.textContent.length;){var n=t;t=t.nextSibling,be(n).remove()}return t},i=T.$el.find('.fr-marker[data-type="true"]');for(t=0;t<i.length;t++)for(var a=i[t];!(n(a)||T.node.isBlock(a.parentNode)||T.$el.is(a.parentNode)||T.node.hasClass(a.parentNode,"fr-inner"));)be(a.parentNode).before(a);var o=T.$el.find('.fr-marker[data-type="false"]');for(t=0;t<o.length;t++){for(var s=o[t];!(r(s)||T.node.isBlock(s.parentNode)||T.$el.is(s.parentNode)||T.node.hasClass(s.parentNode,"fr-inner"));)be(s.parentNode).after(s);s.parentNode&&T.node.isBlock(s.parentNode)&&T.node.isEmpty(s.parentNode)&&!T.$el.is(s.parentNode)&&!T.node.hasClass(s.parentNode,"fr-inner")&&T.opts.keepFormatOnDelete&&be(s.parentNode).after(s)}if(function(){for(var e=T.$el.find(".fr-marker"),t=0;t<e.length;t++)if(be(e[t]).parentsUntil('.fr-element, [contenteditable="true"]','[contenteditable="false"]').length)return!1;return!0}()){!function e(t,n){var r=T.node.contents(t.get(0));0<=["TD","TH"].indexOf(t.get(0).tagName)&&1==t.find(".fr-marker").length&&T.node.hasClass(r[0],"fr-marker")&&t.attr("data-del-cell",!0);for(var i=0;i<r.length;i++){var a=r[i];T.node.hasClass(a,"fr-marker")?n=(n+1)%2:n?0<be(a).find(".fr-marker").length?n=e(be(a),n):["TD","TH"].indexOf(a.tagName)<0&&!T.node.hasClass(a,"fr-inner")?!T.opts.keepFormatOnDelete||0<T.$el.find("[data-first]").length||T.node.isVoid(a)?be(a).remove():L(a):T.node.hasClass(a,"fr-inner")?0===be(a).find(".fr-inner").length?be(a).html("<br>"):be(a).find(".fr-inner").filter(x).html("<br>"):(be(a).empty(),be(a).attr("data-del-cell",!0)):0<be(a).find(".fr-marker").length&&(n=e(be(a),n))}return n}(T.$el,0);var l=T.$el.find('[data-first="true"]');if(l.length)T.$el.find(".fr-marker").remove(),l.append(be.FE.INVISIBLE_SPACE+be.FE.MARKERS).removeAttr("data-first"),l.attr("data-text")&&l.replaceWith(l.html());else for(T.$el.find("table").filter(function(){return 0<be(this).find("[data-del-cell]").length&&be(this).find("[data-del-cell]").length==be(this).find("td, th").length}).remove(),T.$el.find("[data-del-cell]").removeAttr("data-del-cell"),i=T.$el.find('.fr-marker[data-type="true"]'),t=0;t<i.length;t++){var d=i[t],c=d.nextSibling,f=T.$el.find('.fr-marker[data-type="false"][data-id="'+be(d).data("id")+'"]').get(0);if(f){if(d&&(!c||c!=f)){var p=T.node.blockParent(d),u=T.node.blockParent(f),h=!1,g=!1;if(p&&0<=["UL","OL"].indexOf(p.tagName)&&(h=!(p=null)),u&&0<=["UL","OL"].indexOf(u.tagName)&&(g=!(u=null)),be(d).after(f),p!=u)if(null!=p||h)if(null!=u||g||0!==be(p).parentsUntil(T.$el,"table").length)p&&u&&0===be(p).parentsUntil(T.$el,"table").length&&0===be(u).parentsUntil(T.$el,"table").length&&0===be(p).find(u).length&&0===be(u).find(p).length&&(be(p).append(be(u).html()),be(u).remove());else{for(c=p;!c.nextSibling&&c.parentNode!=T.el;)c=c.parentNode;for(c=c.nextSibling;c&&"BR"!=c.tagName;){var m=c.nextSibling;be(p).append(c),c=m}c&&"BR"==c.tagName&&be(c).remove()}else{var v=T.node.deepestParent(d);v?(be(v).after(be(u).html()),be(u).remove()):0===be(u).parentsUntil(T.$el,"table").length&&(be(d).next().after(be(u).html()),be(u).remove())}}}else f=be(d).clone().attr("data-type",!1),be(d).after(f)}}T.$el.find("li:empty").remove(),T.opts.keepFormatOnDelete||T.html.fillEmptyBlocks(),T.html.cleanEmptyTags(!0),T.opts.htmlUntouched||(T.clean.lists(),T.$el.find("li:empty").append("<br>"),T.spaces.normalize());var E=T.$el.find(".fr-marker:last").get(0),b=T.$el.find(".fr-marker:first").get(0);void 0!==E&&void 0!==b&&!E.nextSibling&&b.previousSibling&&"BR"==b.previousSibling.tagName&&T.node.isElement(E.parentNode)&&T.node.isElement(b.parentNode)&&T.$el.append("<br>"),R()},blocks:function(){var e,t=[],n=A();if(p()&&n.rangeCount){var r=c();for(e=0;e<r.length;e++){var i,a=r[e],o=f(a.startContainer,a.startOffset),s=f(a.endContainer,a.endOffset);(T.node.isBlock(o)||T.node.hasClass(o,"fr-inner"))&&t.indexOf(o)<0&&t.push(o),(i=T.node.blockParent(o))&&t.indexOf(i)<0&&t.push(i);for(var l=[],d=o;d!==s&&d!==T.el;)l.indexOf(d)<0&&d.children&&d.children.length?(l.push(d),d=d.children[0]):d.nextSibling?d=d.nextSibling:d.parentNode&&(d=d.parentNode,l.push(d)),T.node.isBlock(d)&&l.indexOf(d)<0&&t.indexOf(d)<0&&(d!==s||0<a.endOffset)&&t.push(d);T.node.isBlock(s)&&t.indexOf(s)<0&&0<a.endOffset&&t.push(s),(i=T.node.blockParent(s))&&t.indexOf(i)<0&&t.push(i)}}for(e=t.length-1;0<e;e--)be(t[e]).find(t).length&&t.splice(e,1);return t},info:i,setAtEnd:a,setAtStart:r,setBefore:function(e,t){void 0===t&&(t=!0);for(var n=e.previousSibling;n&&n.nodeType==Node.TEXT_NODE&&0===n.textContent.length;)n=n.previousSibling;return n?(T.node.isBlock(n)?a(n):"BR"==n.tagName?be(n).before(be.FE.MARKERS):be(n).after(be.FE.MARKERS),!0):!!t&&(T.node.isBlock(e)?r(e):be(e).before(be.FE.MARKERS),!0)},setAfter:function(e,t){void 0===t&&(t=!0);for(var n=e.nextSibling;n&&n.nodeType==Node.TEXT_NODE&&0===n.textContent.length;)n=n.nextSibling;return n?(T.node.isBlock(n)?r(n):be(n).before(be.FE.MARKERS),!0):!!t&&(T.node.isBlock(e)?a(e):be(e).after(be.FE.MARKERS),!0)},rangeElement:f}},be.extend(be.FE.DEFAULTS,{htmlAllowedTags:["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","blockquote","br","button","canvas","caption","cite","code","col","colgroup","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meter","nav","noscript","object","ol","optgroup","option","output","p","param","pre","progress","queue","rp","rt","ruby","s","samp","script","style","section","select","small","source","span","strike","strong","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","var","video","wbr"],htmlRemoveTags:["script","style"],htmlAllowedAttrs:["accept","accept-charset","accesskey","action","align","allowfullscreen","allowtransparency","alt","async","autocomplete","autofocus","autoplay","autosave","background","bgcolor","border","charset","cellpadding","cellspacing","checked","cite","class","color","cols","colspan","content","contenteditable","contextmenu","controls","coords","data","data-.*","datetime","default","defer","dir","dirname","disabled","download","draggable","dropzone","enctype","for","form","formaction","frameborder","headers","height","hidden","high","href","hreflang","http-equiv","icon","id","ismap","itemprop","keytype","kind","label","lang","language","list","loop","low","max","maxlength","media","method","min","mozallowfullscreen","multiple","muted","name","novalidate","open","optimum","pattern","ping","placeholder","playsinline","poster","preload","pubdate","radiogroup","readonly","rel","required","reversed","rows","rowspan","sandbox","scope","scoped","scrolling","seamless","selected","shape","size","sizes","span","src","srcdoc","srclang","srcset","start","step","summary","spellcheck","style","tabindex","target","title","type","translate","usemap","value","valign","webkitallowfullscreen","width","wrap"],htmlAllowedStyleProps:[".*"],htmlAllowComments:!0,htmlUntouched:!1,fullPage:!1}),be.FE.HTML5Map={B:"STRONG",I:"EM",STRIKE:"S"},be.FE.MODULES.clean=function(c){var f,p,u,h;function i(e){if(e.nodeType==Node.ELEMENT_NODE&&e.getAttribute("class")&&0<=e.getAttribute("class").indexOf("fr-marker"))return!1;var t,n=c.node.contents(e),r=[];for(t=0;t<n.length;t++)n[t].nodeType!=Node.ELEMENT_NODE||c.node.isVoid(n[t])?n[t].nodeType==Node.TEXT_NODE&&(n[t].textContent=n[t].textContent.replace(/\u200b/g,"")):n[t].textContent.replace(/\u200b/g,"").length!=n[t].textContent.length&&i(n[t]);if(e.nodeType==Node.ELEMENT_NODE&&!c.node.isVoid(e)&&(e.normalize(),n=c.node.contents(e),r=e.querySelectorAll(".fr-marker"),n.length-r.length==0)){for(t=0;t<n.length;t++)if(n[t].nodeType==Node.ELEMENT_NODE&&(n[t].getAttribute("class")||"").indexOf("fr-marker")<0)return!1;for(t=0;t<r.length;t++)e.parentNode.insertBefore(r[t].cloneNode(!0),e);return e.parentNode.removeChild(e),!1}}function s(e,t){if(e.nodeType==Node.COMMENT_NODE)return"\x3c!--"+e.nodeValue+"--\x3e";if(e.nodeType==Node.TEXT_NODE)return t?e.textContent.replace(/\&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;"):e.textContent.replace(/\&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/\u00A0/g,"&nbsp;").replace(/\u0009/g,"");if(e.nodeType!=Node.ELEMENT_NODE)return e.outerHTML;if(e.nodeType==Node.ELEMENT_NODE&&0<=["STYLE","SCRIPT","NOSCRIPT"].indexOf(e.tagName))return e.outerHTML;if(e.nodeType==Node.ELEMENT_NODE&&"svg"==e.tagName){var n=document.createElement("div"),r=e.cloneNode(!0);return n.appendChild(r),n.innerHTML}if("IFRAME"==e.tagName)return e.outerHTML.replace(/\&lt;/g,"<").replace(/\&gt;/g,">");var i=e.childNodes;if(0===i.length)return e.outerHTML;for(var a="",o=0;o<i.length;o++)"PRE"==e.tagName&&(t=!0),a+=s(i[o],t);return c.node.openTagString(e)+a+c.node.closeTagString(e)}var o=[];function g(e){var t=e.replace(/;;/gi,";");return";"!=(t=t.replace(/^;/gi,"")).charAt(t.length)&&(t+=";"),t}function l(e){var t;for(t in e)if(e.hasOwnProperty(t)){var n=t.match(u),r=null;"style"==t&&c.opts.htmlAllowedStyleProps.length&&(r=e[t].match(h)),n&&r?e[t]=g(r.join(";")):n&&("style"!=t||r)||delete e[t]}for(var i="",a=Object.keys(e).sort(),o=0;o<a.length;o++)e[t=a[o]].indexOf('"')<0?i+=" "+t+'="'+e[t]+'"':i+=" "+t+"='"+e[t]+"'";return i}function d(e,t){var n,r=document.implementation.createHTMLDocument("Froala DOC").createElement("DIV");be(r).append(e);var i="";if(r){var a=c.node.contents(r);for(n=0;n<a.length;n++)t(a[n]);for(a=c.node.contents(r),n=0;n<a.length;n++)i+=s(a[n])}return i}function m(e,t,n){o=[];var r=e=e.replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,function(e){return o.push(e),"[FROALA.EDITOR.SCRIPT "+(o.length-1)+"]"}).replace(/<noscript\b[^<]*(?:(?!<\/noscript>)<[^<]*)*<\/noscript>/gi,function(e){return o.push(e),"[FROALA.EDITOR.NOSCRIPT "+(o.length-1)+"]"}).replace(/<meta((?:[\w\W]*?)) http-equiv="/g,'<meta$1 data-fr-http-equiv="').replace(/<img((?:[\w\W]*?)) src="/g,'<img$1 data-fr-src="'),i=null;c.opts.fullPage&&(r=c.html.extractNode(e,"body")||(0<=e.indexOf("<body")?"":e),n&&(i=c.html.extractNode(e,"head")||"")),r=d(r,t),i&&(i=d(i,t));var a=function(e,t,n){if(c.opts.fullPage){var r=c.html.extractDoctype(n),i=l(c.html.extractNodeAttrs(n,"html"));return t=null==t?c.html.extractNode(n,"head")||"<title></title>":t,r+"<html"+i+"><head"+l(c.html.extractNodeAttrs(n,"head"))+">"+t+"</head><body"+l(c.html.extractNodeAttrs(n,"body"))+">"+e+"</body></html>"}return e}(r,i,e);return a.replace(/\[FROALA\.EDITOR\.SCRIPT ([\d]*)\]/gi,function(e,t){return 0<=c.opts.htmlRemoveTags.indexOf("script")?"":o[parseInt(t,10)]}).replace(/\[FROALA\.EDITOR\.NOSCRIPT ([\d]*)\]/gi,function(e,t){return 0<=c.opts.htmlRemoveTags.indexOf("noscript")?"":o[parseInt(t,10)].replace(/\&lt;/g,"<").replace(/\&gt;/g,">")}).replace(/<img((?:[\w\W]*?)) data-fr-src="/g,'<img$1 src="')}function v(e){var t=c.doc.createElement("DIV");return t.innerText=e,t.textContent}function E(e){for(var t=c.node.contents(e),n=0;n<t.length;n++)t[n].nodeType!=Node.TEXT_NODE&&E(t[n]);!function(e){if("SPAN"==e.tagName&&0<=(e.getAttribute("class")||"").indexOf("fr-marker"))return;var t,n;if("PRE"==e.tagName&&0<=(n=(t=e).innerHTML).indexOf("\n")&&(t.innerHTML=n.replace(/\n/g,"<br>")),e.nodeType==Node.ELEMENT_NODE&&(e.getAttribute("data-fr-src")&&0!==e.getAttribute("data-fr-src").indexOf("blob:")&&e.setAttribute("data-fr-src",c.helpers.sanitizeURL(v(e.getAttribute("data-fr-src")))),e.getAttribute("href")&&e.setAttribute("href",c.helpers.sanitizeURL(v(e.getAttribute("href")))),e.getAttribute("src")&&e.setAttribute("src",c.helpers.sanitizeURL(v(e.getAttribute("src")))),0<=["TABLE","TBODY","TFOOT","TR"].indexOf(e.tagName)&&(e.innerHTML=e.innerHTML.trim())),!c.opts.pasteAllowLocalImages&&e.nodeType==Node.ELEMENT_NODE&&"IMG"==e.tagName&&e.getAttribute("data-fr-src")&&0===e.getAttribute("data-fr-src").indexOf("file://"))return e.parentNode.removeChild(e);if(e.nodeType==Node.ELEMENT_NODE&&be.FE.HTML5Map[e.tagName]&&""===c.node.attributes(e)){var r=be.FE.HTML5Map[e.tagName],i="<"+r+">"+e.innerHTML+"</"+r+">";e.insertAdjacentHTML("beforebegin",i),(e=e.previousSibling).parentNode.removeChild(e.nextSibling)}if(c.opts.htmlAllowComments||e.nodeType!=Node.COMMENT_NODE)if(e.tagName&&e.tagName.match(p))e.parentNode.removeChild(e);else if(e.tagName&&!e.tagName.match(f))"svg"===e.tagName?e.parentNode.removeChild(e):c.browser.safari&&"path"==e.tagName&&e.parentNode&&"svg"==e.parentNode.tagName||(e.outerHTML=e.innerHTML);else{var a=e.attributes;if(a)for(var o=a.length-1;0<=o;o--){var s=a[o],l=s.nodeName.match(u),d=null;"style"==s.nodeName&&c.opts.htmlAllowedStyleProps.length&&(d=s.value.match(h)),l&&d?s.value=g(d.join(";")):l&&("style"!=s.nodeName||d)||e.removeAttribute(s.nodeName)}}else 0!==e.data.indexOf("[FROALA.EDITOR")&&e.parentNode.removeChild(e)}(e)}return{_init:function(){c.opts.fullPage&&be.merge(c.opts.htmlAllowedTags,["head","title","style","link","base","body","html","meta"])},html:function(e,t,n,r){void 0===t&&(t=[]),void 0===n&&(n=[]),void 0===r&&(r=!1);var i,a=be.merge([],c.opts.htmlAllowedTags);for(i=0;i<t.length;i++)0<=a.indexOf(t[i])&&a.splice(a.indexOf(t[i]),1);var o=be.merge([],c.opts.htmlAllowedAttrs);for(i=0;i<n.length;i++)0<=o.indexOf(n[i])&&o.splice(o.indexOf(n[i]),1);return o.push("data-fr-.*"),o.push("fr-.*"),f=new RegExp("^"+a.join("$|^")+"$","gi"),u=new RegExp("^"+o.join("$|^")+"$","gi"),p=new RegExp("^"+c.opts.htmlRemoveTags.join("$|^")+"$","gi"),h=c.opts.htmlAllowedStyleProps.length?new RegExp("((^|;|\\s)"+c.opts.htmlAllowedStyleProps.join(":.+?(?=;|$))|((^|;|\\s)")+":.+?(?=(;)|$))","gi"):null,e=m(e,E,!0)},toHTML5:function(){var e=c.el.querySelectorAll(Object.keys(be.FE.HTML5Map).join(","));if(e.length){var t=!1;c.el.querySelector(".fr-marker")||(c.selection.save(),t=!0);for(var n=0;n<e.length;n++)""===c.node.attributes(e[n])&&be(e[n]).replaceWith("<"+be.FE.HTML5Map[e[n].tagName]+">"+e[n].innerHTML+"</"+be.FE.HTML5Map[e[n].tagName]+">");t&&c.selection.restore()}},tables:function(){!function(){for(var e=c.el.querySelectorAll("tr"),t=0;t<e.length;t++){for(var n=e[t].children,r=!0,i=0;i<n.length;i++)if("TH"!=n[i].tagName){r=!1;break}if(!1!==r&&0!==n.length){for(var a=e[t];a&&"TABLE"!=a.tagName&&"THEAD"!=a.tagName;)a=a.parentNode;var o=a;"THEAD"!=o.tagName&&(o=c.doc.createElement("THEAD"),a.insertBefore(o,a.firstChild)),o.appendChild(e[t])}}}()},lists:function(){!function(){var e,t=[];do{if(t.length){var n=t[0],r=c.doc.createElement("ul");n.parentNode.insertBefore(r,n);do{var i=n;n=n.nextSibling,r.appendChild(i)}while(n&&"LI"==n.tagName)}t=[];for(var a=c.el.querySelectorAll("li"),o=0;o<a.length;o++)e=a[o],c.node.isList(e.parentNode)||t.push(a[o])}while(0<t.length)}(),function(){for(var e=c.el.querySelectorAll("ol + ol, ul + ul"),t=0;t<e.length;t++){var n=e[t];if(c.node.isList(n.previousSibling)&&c.node.openTagString(n)==c.node.openTagString(n.previousSibling)){for(var r=c.node.contents(n),i=0;i<r.length;i++)n.previousSibling.appendChild(r[i]);n.parentNode.removeChild(n)}}}(),function(){for(var e=c.el.querySelectorAll("ul, ol"),t=0;t<e.length;t++)for(var n=c.node.contents(e[t]),r=null,i=n.length-1;0<=i;i--)"LI"!=n[i].tagName?(r||(r=be("<li>")).insertBefore(n[i]),r.prepend(n[i])):r=null}(),function(){var e,t,n;do{t=!1;var r=c.el.querySelectorAll("li:empty");for(e=0;e<r.length;e++)r[e].parentNode.removeChild(r[e]);var i=c.el.querySelectorAll("ul, ol");for(e=0;e<i.length;e++)(n=i[e]).querySelector("LI")||(t=!0,n.parentNode.removeChild(n))}while(!0===t)}(),function(){for(var e=c.el.querySelectorAll("ul > ul, ol > ol, ul > ol, ol > ul"),t=0;t<e.length;t++){var n=e[t],r=n.previousSibling;r&&("LI"==r.tagName?r.appendChild(n):be(n).wrap("<li></li>"))}}(),function(){for(var e=c.el.querySelectorAll("li > ul, li > ol"),t=0;t<e.length;t++){var n=e[t];if(n.nextSibling){var r=n.nextSibling,i=be("<li>");be(n.parentNode).after(i);do{var a=r;r=r.nextSibling,i.append(a)}while(r)}}}(),function(){for(var e=c.el.querySelectorAll("li > ul, li > ol"),t=0;t<e.length;t++){var n=e[t];if(c.node.isFirstSibling(n))be(n).before("<br/>");else if(n.previousSibling&&"BR"==n.previousSibling.tagName){for(var r=n.previousSibling.previousSibling;r&&c.node.hasClass(r,"fr-marker");)r=r.previousSibling;r&&"BR"!=r.tagName&&be(n.previousSibling).remove()}}}(),function(){for(var e=c.el.querySelectorAll("li:empty"),t=0;t<e.length;t++)be(e[t]).remove()}()},invisibleSpaces:function(e){return e.replace(/\u200b/g,"").length==e.length?e:c.clean.exec(e,i)},exec:m}},be.FE.MODULES.spaces=function(l){function r(e,t){var n=e.previousSibling,r=e.nextSibling,i=e.textContent,a=e.parentNode;if(!l.html.isPreformatted(a)){t&&(i=i.replace(/[\f\n\r\t\v ]{2,}/g," "),r&&"BR"!==r.tagName&&!l.node.isBlock(r)||!(l.node.isBlock(a)||l.node.isLink(a)&&!a.nextSibling||l.node.isElement(a))||(i=i.replace(/[\f\n\r\t\v ]{1,}$/g,"")),n&&"BR"!==n.tagName&&!l.node.isBlock(n)||!(l.node.isBlock(a)||l.node.isLink(a)&&!a.previousSibling||l.node.isElement(a))||(i=i.replace(/^[\f\n\r\t\v ]{1,}/g,""))," "===i&&(n&&l.node.isVoid(n)||r&&l.node.isVoid(r))&&(i="")),(!n&&l.node.isBlock(r)||!r&&l.node.isBlock(n))&&l.node.isBlock(a)&&(i=i.replace(/^[\f\n\r\t\v ]{1,}/g,"")),t||(i=i.replace(new RegExp(be.FE.UNICODE_NBSP,"g")," "));for(var o="",s=0;s<i.length;s++)32!=i.charCodeAt(s)||0!==s&&32!=o.charCodeAt(s-1)?o+=i[s]:o+=be.FE.UNICODE_NBSP;(!r||r&&l.node.isBlock(r)||r&&r.nodeType==Node.ELEMENT_NODE&&l.win.getComputedStyle(r)&&"block"==l.win.getComputedStyle(r).display)&&(o=o.replace(/ $/,be.FE.UNICODE_NBSP)),!n||l.node.isVoid(n)||l.node.isBlock(n)||1!==(o=o.replace(/^\u00A0([^ $])/," $1")).length||160!==o.charCodeAt(0)||!r||l.node.isVoid(r)||l.node.isBlock(r)||(o=" "),t||(o=o.replace(/([^ \u00A0])\u00A0([^ \u00A0])/g,"$1 $2")),e.textContent!=o&&(e.textContent=o)}}function d(e,t){if(void 0!==e&&e||(e=l.el),void 0===t&&(t=!1),!e.getAttribute||"false"!=e.getAttribute("contenteditable"))if(e.nodeType==Node.TEXT_NODE)r(e,t);else if(e.nodeType==Node.ELEMENT_NODE)for(var n=l.doc.createTreeWalker(e,NodeFilter.SHOW_TEXT,l.node.filter(function(e){for(var t=e.parentNode;t&&t!==l.el;){if("STYLE"==t.tagName||"IFRAME"==t.tagName)return!1;if("PRE"===t.tagName)return!1;t=t.parentNode}return null!=e.textContent.match(/([ \u00A0\f\n\r\t\v]{2,})|(^[ \u00A0\f\n\r\t\v]{1,})|([ \u00A0\f\n\r\t\v]{1,}$)/g)&&!l.node.hasClass(e.parentNode,"fr-marker")}),!1);n.nextNode();)r(n.currentNode,t)}return{normalize:d,normalizeAroundCursor:function(){for(var e=[],t=l.el.querySelectorAll(".fr-marker"),n=0;n<t.length;n++){for(var r=null,i=l.node.blockParent(t[n]),a=(r=i||t[n]).nextSibling,o=r.previousSibling;a&&"BR"==a.tagName;)a=a.nextSibling;for(;o&&"BR"==o.tagName;)o=o.previousSibling;r&&e.indexOf(r)<0&&e.push(r),o&&e.indexOf(o)<0&&e.push(o),a&&e.indexOf(a)<0&&e.push(a)}for(var s=0;s<e.length;s++)d(e[s])}}},be.FE.UNICODE_NBSP=String.fromCharCode(160),be.FE.VOID_ELEMENTS=["area","base","br","col","embed","hr","img","input","keygen","link","menuitem","meta","param","source","track","wbr"],be.FE.BLOCK_TAGS=["address","article","aside","audio","blockquote","canvas","details","dd","div","dl","dt","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","li","main","nav","noscript","ol","output","p","pre","section","table","tbody","td","tfoot","th","thead","tr","ul","video"],be.extend(be.FE.DEFAULTS,{htmlAllowedEmptyTags:["textarea","a","iframe","object","video","style","script",".fa",".fr-emoticon",".fr-inner","path","line"],htmlDoNotWrapTags:["script","style"],htmlSimpleAmpersand:!1,htmlIgnoreCSSProperties:[],htmlExecuteScripts:!0}),be.FE.MODULES.html=function(x){function c(){return x.opts.enter==be.FE.ENTER_P?"p":x.opts.enter==be.FE.ENTER_DIV?"div":x.opts.enter==be.FE.ENTER_BR?null:void 0}function s(e,t){return!(!e||e===x.el)&&(t?-1!=["PRE","SCRIPT","STYLE"].indexOf(e.tagName)||s(e.parentNode,t):-1!=["PRE","SCRIPT","STYLE"].indexOf(e.tagName))}function a(e){var t,n=[],r=[];if(e){var i=x.el.querySelectorAll(".fr-marker");for(t=0;t<i.length;t++){var a=x.node.blockParent(i[t])||i[t];if(a){var o=a.nextSibling,s=a.previousSibling;a&&r.indexOf(a)<0&&x.node.isBlock(a)&&r.push(a),s&&x.node.isBlock(s)&&r.indexOf(s)<0&&r.push(s),o&&x.node.isBlock(o)&&r.indexOf(o)<0&&r.push(o)}}}else r=x.el.querySelectorAll(p());var l=p();for(l+=","+be.FE.VOID_ELEMENTS.join(","),l+=", .fr-inner",l+=","+x.opts.htmlAllowedEmptyTags.join(":not(.fr-marker),")+":not(.fr-marker)",t=r.length-1;0<=t;t--)if(!(r[t].textContent&&0<r[t].textContent.replace(/\u200B|\n/g,"").length||0<r[t].querySelectorAll(l).length)){for(var d=x.node.contents(r[t]),c=!1,f=0;f<d.length;f++)if(d[f].nodeType!=Node.COMMENT_NODE&&d[f].textContent&&0<d[f].textContent.replace(/\u200B|\n/g,"").length){c=!0;break}c||n.push(r[t])}return n}function p(){return be.FE.BLOCK_TAGS.join(", ")}function e(e){var t,n,r=be.merge([],be.FE.VOID_ELEMENTS);r=be.merge(r,x.opts.htmlAllowedEmptyTags),r=void 0===e?be.merge(r,be.FE.BLOCK_TAGS):be.merge(r,be.FE.NO_DELETE_TAGS),t=x.el.querySelectorAll("*:empty:not("+r.join("):not(")+"):not(.fr-marker)");do{n=!1;for(var i=0;i<t.length;i++)0!==t[i].attributes.length&&void 0===t[i].getAttribute("href")||(t[i].parentNode.removeChild(t[i]),n=!0);t=x.el.querySelectorAll("*:empty:not("+r.join("):not(")+"):not(.fr-marker)")}while(t.length&&n)}function o(e,t){var n=c();if(t&&(n="div"),n){for(var r=x.doc.createDocumentFragment(),i=null,a=!1,o=e.firstChild,s=!1;o;){var l=o.nextSibling;if(o.nodeType==Node.ELEMENT_NODE&&(x.node.isBlock(o)||0<=x.opts.htmlDoNotWrapTags.indexOf(o.tagName.toLowerCase())&&!x.node.hasClass(o,"fr-marker")))i=null,r.appendChild(o.cloneNode(!0));else if(o.nodeType!=Node.ELEMENT_NODE&&o.nodeType!=Node.TEXT_NODE)i=null,r.appendChild(o.cloneNode(!0));else if("BR"==o.tagName)null==i?(i=x.doc.createElement(n),s=!0,t&&(i.setAttribute("class","fr-temp-div"),i.setAttribute("data-empty",!0)),i.appendChild(o.cloneNode(!0)),r.appendChild(i)):!1===a&&(i.appendChild(x.doc.createElement("br")),t&&(i.setAttribute("class","fr-temp-div"),i.setAttribute("data-empty",!0))),i=null;else{var d=o.textContent;(o.nodeType!==Node.TEXT_NODE||0<d.replace(/\n/g,"").replace(/(^ *)|( *$)/g,"").length||d.length&&d.indexOf("\n")<0)&&(null==i&&(i=x.doc.createElement(n),s=!0,t&&i.setAttribute("class","fr-temp-div"),r.appendChild(i),a=!1),i.appendChild(o.cloneNode(!0)),a||x.node.hasClass(o,"fr-marker")||o.nodeType==Node.TEXT_NODE&&0===d.replace(/ /g,"").length||(a=!0))}o=l}s&&(e.innerHTML="",e.appendChild(r))}}function l(e,t){for(var n=e.length-1;0<=n;n--)o(e[n],t)}function t(e,t,n,r,i){if(!x.$wp)return!1;void 0===e&&(e=!1),void 0===t&&(t=!1),void 0===n&&(n=!1),void 0===r&&(r=!1),void 0===i&&(i=!1);var a=x.$wp.scrollTop();o(x.el,e),r&&l(x.el.querySelectorAll(".fr-inner"),e),t&&l(x.el.querySelectorAll("td, th"),e),n&&l(x.el.querySelectorAll("blockquote"),e),i&&l(x.el.querySelectorAll("li"),e),a!=x.$wp.scrollTop()&&x.$wp.scrollTop(a)}function n(e){if(void 0===e&&(e=x.el),e&&0<=["SCRIPT","STYLE","PRE"].indexOf(e.tagName))return!1;for(var t=x.doc.createTreeWalker(e,NodeFilter.SHOW_TEXT,x.node.filter(function(e){return null!=e.textContent.match(/([ \n]{2,})|(^[ \n]{1,})|([ \n]{1,}$)/g)}),!1);t.nextNode();){var n=t.currentNode;if(!s(n.parentNode,!0)){var r=x.node.isBlock(n.parentNode)||x.node.isElement(n.parentNode),i=n.textContent.replace(/(?!^)( ){2,}(?!$)/g," ").replace(/\n/g," ").replace(/^[ ]{2,}/g," ").replace(/[ ]{2,}$/g," ");if(r){var a=n.previousSibling,o=n.nextSibling;a&&o&&" "==i?i=x.node.isBlock(a)&&x.node.isBlock(o)?"":" ":(a||(i=i.replace(/^ */,"")),o||(i=i.replace(/ *$/,"")))}n.textContent=i}}}function r(e,t,n){var r=new RegExp(t,"gi").exec(e);return r?r[n]:null}function N(e){var t=e.doctype,n="<!DOCTYPE html>";return t&&(n="<!DOCTYPE "+t.name+(t.publicId?' PUBLIC "'+t.publicId+'"':"")+(!t.publicId&&t.systemId?" SYSTEM":"")+(t.systemId?' "'+t.systemId+'"':"")+">"),n}function d(e){var t=e.parentNode;if(t&&(x.node.isBlock(t)||x.node.isElement(t))&&["TD","TH"].indexOf(t.tagName)<0){for(var n=e.previousSibling,r=e.nextSibling;n&&(n.nodeType==Node.TEXT_NODE&&0===n.textContent.replace(/\n|\r/g,"").length||x.node.hasClass(n,"fr-tmp"));)n=n.previousSibling;if(r)return!1;n&&t&&"BR"!=n.tagName&&!x.node.isBlock(n)&&!r&&0<t.textContent.replace(/\u200B/g,"").length&&0<n.textContent.length&&!x.node.hasClass(n,"fr-marker")&&(x.el==t&&!r&&x.opts.enter==be.FE.ENTER_BR&&x.browser.msie||e.parentNode.removeChild(e))}else!t||x.node.isBlock(t)||x.node.isElement(t)||e.previousSibling||e.nextSibling||!x.node.isDeletable(e.parentNode)||d(e.parentNode)}function u(){x.opts.htmlUntouched||(e(),t(),n(),x.spaces.normalize(null,!0),x.html.fillEmptyBlocks(),x.clean.lists(),x.clean.tables(),x.clean.toHTML5(),x.html.cleanBRs()),x.selection.restore(),i(),x.placeholder.refresh()}function i(){x.node.isEmpty(x.el)&&(null!=c()?x.el.querySelector(p())||x.el.querySelector(x.opts.htmlDoNotWrapTags.join(":not(.fr-marker),")+":not(.fr-marker)")||(x.core.hasFocus()?(x.$el.html("<"+c()+">"+be.FE.MARKERS+"<br/></"+c()+">"),x.selection.restore()):x.$el.html("<"+c()+"><br/></"+c()+">")):x.el.querySelector("*:not(.fr-marker):not(br)")||(x.core.hasFocus()?(x.$el.html(be.FE.MARKERS+"<br/>"),x.selection.restore()):x.$el.html("<br/>")))}function h(e,t){return r(e,"<"+t+"[^>]*?>([\\w\\W]*)</"+t+">",1)}function g(e,t){var n=be("<div "+(r(e,"<"+t+"([^>]*?)>",1)||"")+">");return x.node.rawAttributes(n.get(0))}function m(e){return(r(e,"<!DOCTYPE([^>]*?)>",0)||"<!DOCTYPE html>").replace(/\n/g," ").replace(/ {2,}/g," ")}function v(e,t){x.opts.htmlExecuteScripts?e.html(t):e.get(0).innerHTML=t}function w(e){var t;(t=/:not\(([^\)]*)\)/g).test(e)&&(e=e.replace(t,"     $1 "));var n=100*(e.match(/(#[^\s\+>~\.\[:]+)/g)||[]).length+10*(e.match(/(\[[^\]]+\])/g)||[]).length+10*(e.match(/(\.[^\s\+>~\.\[:]+)/g)||[]).length+10*(e.match(/(:[\w-]+\([^\)]*\))/gi)||[]).length+10*(e.match(/(:[^\s\+>~\.\[:]+)/g)||[]).length+(e.match(/(::[^\s\+>~\.\[:]+|:first-line|:first-letter|:before|:after)/gi)||[]).length;return n+=((e=(e=e.replace(/[\*\s\+>~]/g," ")).replace(/[#\.]/g," ")).match(/([^\s\+>~\.\[:]+)/g)||[]).length}function O(e){if(x.events.trigger("html.processGet",[e]),e&&e.getAttribute&&""===e.getAttribute("class")&&e.removeAttribute("class"),e&&e.getAttribute&&""===e.getAttribute("style")&&e.removeAttribute("style"),e&&e.nodeType==Node.ELEMENT_NODE){var t,n=e.querySelectorAll('[class=""],[style=""]');for(t=0;t<n.length;t++){var r=n[t];""===r.getAttribute("class")&&r.removeAttribute("class"),""===r.getAttribute("style")&&r.removeAttribute("style")}if("BR"===e.tagName)d(e);else{var i=e.querySelectorAll("br");for(t=0;t<i.length;t++)d(i[t])}}}function I(e,t){return e[3]-t[3]}function f(e){var t=x.doc.createElement("div");return t.innerHTML=e,null!==t.querySelector(p())}function E(e){var t=null;if(void 0===e&&(t=x.selection.element()),x.opts.keepFormatOnDelete)return!1;var n,r,i=t?(t.textContent.match(/\u200B/g)||[]).length-t.querySelectorAll(".fr-marker").length:0;if((x.el.textContent.match(/\u200B/g)||[]).length-x.el.querySelectorAll(".fr-marker").length==i)return!1;do{r=!1,n=x.el.querySelectorAll("*:not(.fr-marker)");for(var a=0;a<n.length;a++){var o=n[a];if(t!=o){var s=o.textContent;0===o.children.length&&1===s.length&&8203==s.charCodeAt(0)&&"TD"!==o.tagName&&(be(o).remove(),r=!0)}}}while(r)}return{defaultTag:c,isPreformatted:s,emptyBlocks:a,emptyBlockTagsQuery:function(){return be.FE.BLOCK_TAGS.join(":empty, ")+":empty"},blockTagsQuery:p,fillEmptyBlocks:function(e){for(var t=a(e),n=0;n<t.length;n++){var r=t[n];"false"===r.getAttribute("contenteditable")||r.querySelector(x.opts.htmlAllowedEmptyTags.join(":not(.fr-marker),")+":not(.fr-marker)")||x.node.isVoid(r)||"TABLE"!=r.tagName&&"TBODY"!=r.tagName&&"TR"!=r.tagName&&"UL"!=r.tagName&&"OL"!=r.tagName&&r.appendChild(x.doc.createElement("br"))}if(x.browser.msie&&x.opts.enter==be.FE.ENTER_BR){var i=x.node.contents(x.el);i.length&&i[i.length-1].nodeType==Node.TEXT_NODE&&x.$el.append("<br>")}},cleanEmptyTags:e,cleanWhiteTags:E,cleanBlankSpaces:n,blocks:function(){return x.$el.get(0).querySelectorAll(p())},getDoctype:N,set:function(e){var t,n,r,i=x.clean.html((e||"").trim(),[],[],x.opts.fullPage);if(x.opts.fullPage){var a=h(i,"body")||(0<=i.indexOf("<body")?"":i),o=g(i,"body"),s=h(i,"head")||"<title></title>",l=g(i,"head"),d=be("<div>").append(s).contents().each(function(){(this.nodeType==Node.COMMENT_NODE||0<=["BASE","LINK","META","NOSCRIPT","SCRIPT","STYLE","TEMPLATE","TITLE"].indexOf(this.tagName))&&this.parentNode.removeChild(this)}).end().html().trim();s=be("<div>").append(s).contents().map(function(){return this.nodeType==Node.COMMENT_NODE?"\x3c!--"+this.nodeValue+"--\x3e":0<=["BASE","LINK","META","NOSCRIPT","SCRIPT","STYLE","TEMPLATE","TITLE"].indexOf(this.tagName)?this.outerHTML:""}).toArray().join("");var c=m(i),f=g(i,"html");v(x.$el,d+"\n"+a),x.node.clearAttributes(x.el),x.$el.attr(o),x.$el.addClass("fr-view"),x.$el.attr("spellcheck",x.opts.spellcheck),x.$el.attr("dir",x.opts.direction),v(x.$head,s),x.node.clearAttributes(x.$head.get(0)),x.$head.attr(l),x.node.clearAttributes(x.$html.get(0)),x.$html.attr(f),x.iframe_document.doctype.parentNode.replaceChild((t=c,n=x.iframe_document,(r=t.match(/<!DOCTYPE ?([^ ]*) ?([^ ]*) ?"?([^"]*)"? ?"?([^"]*)"?>/i))?n.implementation.createDocumentType(r[1],r[3],r[4]):n.implementation.createDocumentType("html")),x.iframe_document.doctype)}else v(x.$el,i);var p=x.edit.isDisabled();x.edit.on(),x.core.injectStyle(x.opts.iframeDefaultStyle+x.opts.iframeStyle),u(),x.opts.useClasses||(x.$el.find("[fr-original-class]").each(function(){this.setAttribute("class",this.getAttribute("fr-original-class")),this.removeAttribute("fr-original-class")}),x.$el.find("[fr-original-style]").each(function(){this.setAttribute("style",this.getAttribute("fr-original-style")),this.removeAttribute("fr-original-style")})),p&&x.edit.off(),x.events.trigger("html.set")},get:function(e,t){if(!x.$wp)return x.$oel.clone().removeClass("fr-view").removeAttr("contenteditable").get(0).outerHTML;var n="";x.events.trigger("html.beforeGet");var r,i,a=[],o={},s=[],l=x.el.querySelectorAll("input, textarea");for(r=0;r<l.length;r++)l[r].setAttribute("value",l[r].value);if(!x.opts.useClasses&&!t){var d=new RegExp("^"+x.opts.htmlIgnoreCSSProperties.join("$|^")+"$","gi");for(r=0;r<x.doc.styleSheets.length;r++){var c,f=0;try{c=x.doc.styleSheets[r].cssRules,x.doc.styleSheets[r].ownerNode&&"STYLE"==x.doc.styleSheets[r].ownerNode.nodeType&&(f=1)}catch(L){}if(c)for(var p=0,u=c.length;p<u;p++)if(c[p].selectorText&&0<c[p].style.cssText.length){var h,g=c[p].selectorText.replace(/body |\.fr-view /g,"").replace(/::/g,":");try{h=x.el.querySelectorAll(g)}catch(L){h=[]}for(i=0;i<h.length;i++){!h[i].getAttribute("fr-original-style")&&h[i].getAttribute("style")?(h[i].setAttribute("fr-original-style",h[i].getAttribute("style")),a.push(h[i])):h[i].getAttribute("fr-original-style")||(h[i].setAttribute("fr-original-style",""),a.push(h[i])),o[h[i]]||(o[h[i]]={});for(var m=1e3*f+w(c[p].selectorText),v=c[p].style.cssText.split(";"),E=0;E<v.length;E++){var b=v[E].trim().split(":")[0];if(b&&!b.match(d)&&(o[h[i]][b]||(o[h[i]][b]=0)<=(h[i].getAttribute("fr-original-style")||"").indexOf(b+":")&&(o[h[i]][b]=1e4),m>=o[h[i]][b]&&(o[h[i]][b]=m,v[E].trim().length))){var T=v[E].trim().split(":");T.splice(0,1),s.push([h[i],b.trim(),T.join(":").trim(),m])}}}}}for(s.sort(I),r=0;r<s.length;r++){var A=s[r];A[0].style[A[1]]=A[2]}for(r=0;r<a.length;r++)if(a[r].getAttribute("class")&&(a[r].setAttribute("fr-original-class",a[r].getAttribute("class")),a[r].removeAttribute("class")),0<(a[r].getAttribute("fr-original-style")||"").trim().length){var C=a[r].getAttribute("fr-original-style").split(";");for(i=0;i<C.length;i++)if(0<C[i].indexOf(":")){var S=C[i].split(":"),R=S[0];S.splice(0,1),a[r].style[R.trim()]=S.join(":").trim()}}}if(x.node.isEmpty(x.el))x.opts.fullPage&&(n=N(x.iframe_document),n+="<html"+x.node.attributes(x.$html.get(0))+">"+x.$html.find("head").get(0).outerHTML+"<body></body></html>");else if(void 0===e&&(e=!1),x.opts.fullPage){n=N(x.iframe_document),x.$el.removeClass("fr-view");var y=x.opts.heightMin;x.opts.heightMin=null,x.size.refresh(),n+="<html"+x.node.attributes(x.$html.get(0))+">"+x.$html.html()+"</html>",x.opts.heightMin=y,x.size.refresh(),x.$el.addClass("fr-view")}else n=x.$el.html();if(!x.opts.useClasses&&!t)for(r=0;r<a.length;r++)a[r].getAttribute("fr-original-class")&&(a[r].setAttribute("class",a[r].getAttribute("fr-original-class")),a[r].removeAttribute("fr-original-class")),null!=a[r].getAttribute("fr-original-style")&&void 0!==a[r].getAttribute("fr-original-style")?(0!==a[r].getAttribute("fr-original-style").length?a[r].setAttribute("style",a[r].getAttribute("fr-original-style")):a[r].removeAttribute("style"),a[r].removeAttribute("fr-original-style")):a[r].removeAttribute("style");x.opts.fullPage&&(n=(n=(n=(n=(n=(n=(n=(n=n.replace(/<style data-fr-style="true">(?:[\w\W]*?)<\/style>/g,"")).replace(/<link([^>]*)data-fr-style="true"([^>]*)>/g,"")).replace(/<style(?:[\w\W]*?)class="firebugResetStyles"(?:[\w\W]*?)>(?:[\w\W]*?)<\/style>/g,"")).replace(/<body((?:[\w\W]*?)) spellcheck="true"((?:[\w\W]*?))>((?:[\w\W]*?))<\/body>/g,"<body$1$2>$3</body>")).replace(/<body((?:[\w\W]*?)) contenteditable="(true|false)"((?:[\w\W]*?))>((?:[\w\W]*?))<\/body>/g,"<body$1$3>$4</body>")).replace(/<body((?:[\w\W]*?)) dir="([\w]*)"((?:[\w\W]*?))>((?:[\w\W]*?))<\/body>/g,"<body$1$3>$4</body>")).replace(/<body((?:[\w\W]*?))class="([\w\W]*?)(fr-rtl|fr-ltr)([\w\W]*?)"((?:[\w\W]*?))>((?:[\w\W]*?))<\/body>/g,'<body$1class="$2$4"$5>$6</body>')).replace(/<body((?:[\w\W]*?)) class=""((?:[\w\W]*?))>((?:[\w\W]*?))<\/body>/g,"<body$1$2>$3</body>")),x.opts.htmlSimpleAmpersand&&(n=n.replace(/\&amp;/gi,"&")),x.events.trigger("html.afterGet"),e||(n=n.replace(/<span[^>]*? class\s*=\s*["']?fr-marker["']?[^>]+>\u200b<\/span>/gi,"")),n=x.clean.invisibleSpaces(n),n=x.clean.exec(n,O);var _=x.events.chainTrigger("html.get",n);return"string"==typeof _&&(n=_),n=(n=n.replace(/<pre(?:[\w\W]*?)>(?:[\w\W]*?)<\/pre>/g,function(e){return e.replace(/<br>/g,"\n")})).replace(/<meta((?:[\w\W]*?)) data-fr-http-equiv="/g,'<meta$1 http-equiv="')},getSelected:function(){var e,t,n=function(e,t){for(;t&&(t.nodeType==Node.TEXT_NODE||!x.node.isBlock(t))&&!x.node.isElement(t)&&!x.node.hasClass(t,"fr-inner");)t&&t.nodeType!=Node.TEXT_NODE&&be(e).wrapInner(x.node.openTagString(t)+x.node.closeTagString(t)),t=t.parentNode;t&&e.innerHTML==t.innerHTML&&(e.innerHTML=t.outerHTML)},r="";if("undefined"!=typeof x.win.getSelection){x.browser.mozilla&&(x.selection.save(),1<x.$el.find('.fr-marker[data-type="false"]').length&&(x.$el.find('.fr-marker[data-type="false"][data-id="0"]').remove(),x.$el.find('.fr-marker[data-type="false"]:last').attr("data-id","0"),x.$el.find(".fr-marker").not('[data-id="0"]').remove()),x.selection.restore());for(var i=x.selection.ranges(),a=0;a<i.length;a++){var o=document.createElement("div");o.appendChild(i[a].cloneContents()),n(o,(t=e=void 0,t=null,x.win.getSelection?(e=x.win.getSelection())&&e.rangeCount&&(t=e.getRangeAt(0).commonAncestorContainer).nodeType!=Node.ELEMENT_NODE&&(t=t.parentNode):(e=x.doc.selection)&&"Control"!=e.type&&(t=e.createRange().parentElement()),null!=t&&(0<=be.inArray(x.el,be(t).parents())||t==x.el)?t:null)),0<be(o).find(".fr-element").length&&(o=x.el),r+=o.innerHTML}}else"undefined"!=typeof x.doc.selection&&"Text"==x.doc.selection.type&&(r=x.doc.selection.createRange().htmlText);return r},insert:function(e,t,n){var r,i,a;if(x.selection.isCollapsed()||x.selection.remove(),r=t?e:x.clean.html(e),e.indexOf('class="fr-marker"')<0&&(i=r,(a=x.doc.createElement("div")).innerHTML=i,x.selection.setAtEnd(a),r=a.innerHTML),x.node.isEmpty(x.el)&&!x.opts.keepFormatOnDelete&&f(r))x.el.innerHTML=r;else{var o=x.markers.insert();if(o){x.node.isLastSibling(o)&&be(o).parent().hasClass("fr-deletable")&&be(o).insertAfter(be(o).parent());var s=x.node.blockParent(o);if((f(r)||n)&&(x.node.deepestParent(o)||s&&"LI"==s.tagName)){if(s&&"LI"==s.tagName&&(r=function(e){if(!x.html.defaultTag())return e;var t=x.doc.createElement("div");t.innerHTML=e;for(var n=t.querySelectorAll(":scope > "+x.html.defaultTag()),r=n.length-1;0<=r;r--){var i=n[r];x.node.isBlock(i.previousSibling)||(i.previousSibling&&!x.node.isEmpty(i)&&be("<br>").insertAfter(i.previousSibling),i.outerHTML=i.innerHTML)}return t.innerHTML}(r)),!(o=x.markers.split()))return!1;o.outerHTML=r}else o.outerHTML=r}else x.el.innerHTML=x.el.innerHTML+r}u(),x.keys.positionCaret(),x.events.trigger("html.inserted")},wrap:t,unwrap:function(){x.$el.find("div.fr-temp-div").each(function(){this.previousSibling&&this.previousSibling.nodeType===Node.TEXT_NODE&&be(this).before("<br>"),be(this).attr("data-empty")||!this.nextSibling||x.node.isBlock(this.nextSibling)&&!be(this.nextSibling).hasClass("fr-temp-div")?be(this).replaceWith(be(this).html()):be(this).replaceWith(be(this).html()+"<br>")}),x.$el.find(".fr-temp-div").removeClass("fr-temp-div").filter(function(){return""===be(this).attr("class")}).removeAttr("class")},escapeEntities:function(e){return e.replace(/</gi,"&lt;").replace(/>/gi,"&gt;").replace(/"/gi,"&quot;").replace(/'/gi,"&#39;")},checkIfEmpty:i,extractNode:h,extractNodeAttrs:g,extractDoctype:m,cleanBRs:function(){for(var e=x.el.getElementsByTagName("br"),t=0;t<e.length;t++)d(e[t])},_init:function(){if(x.$wp){var e=function(){E(),x.placeholder&&setTimeout(x.placeholder.refresh,0)};x.events.on("mouseup",e),x.events.on("keydown",e),x.events.on("contentChanged",i)}}}},be.extend(be.FE.DEFAULTS,{height:null,heightMax:null,heightMin:null,width:null}),be.FE.MODULES.size=function(e){function t(){n(),e.opts.height&&e.$el.css("minHeight",e.opts.height-e.helpers.getPX(e.$el.css("padding-top"))-e.helpers.getPX(e.$el.css("padding-bottom"))),e.$iframe.height(e.$el.outerHeight(!0))}function n(){e.opts.heightMin?e.$el.css("minHeight",e.opts.heightMin):e.$el.css("minHeight",""),e.opts.heightMax?(e.$wp.css("maxHeight",e.opts.heightMax),e.$wp.css("overflow","auto")):(e.$wp.css("maxHeight",""),e.$wp.css("overflow","")),e.opts.height?(e.$wp.height(e.opts.height),e.$wp.css("overflow","auto"),e.$el.css("minHeight",e.opts.height-e.helpers.getPX(e.$el.css("padding-top"))-e.helpers.getPX(e.$el.css("padding-bottom")))):(e.$wp.css("height",""),e.opts.heightMin||e.$el.css("minHeight",""),e.opts.heightMax||e.$wp.css("overflow","")),e.opts.width&&e.$box.width(e.opts.width)}return{_init:function(){if(!e.$wp)return!1;n(),e.$iframe&&(e.events.on("keyup keydown",function(){setTimeout(t,0)},!0),e.events.on("commands.after html.set init initialized paste.after",t))},syncIframe:t,refresh:n}},be.extend(be.FE.DEFAULTS,{language:null}),be.FE.LANGUAGE={},be.FE.MODULES.language=function(e){var t;return{_init:function(){be.FE.LANGUAGE&&(t=be.FE.LANGUAGE[e.opts.language]),t&&t.direction&&(e.opts.direction=t.direction)},translate:function(e){return t&&t.translation[e]&&t.translation[e].length?t.translation[e]:e}}},be.extend(be.FE.DEFAULTS,{placeholderText:"Type something"}),be.FE.MODULES.placeholder=function(c){function e(){c.$placeholder||(c.$placeholder=be('<span class="fr-placeholder"></span>'),c.$wp.append(c.$placeholder));var e=c.opts.iframe?c.$iframe.prev().outerHeight(!0):c.$el.prev().outerHeight(!0),t=0,n=0,r=0,i=0,a=0,o=0,s=c.node.contents(c.el),l=be(c.selection.element()).css("text-align");if(s.length&&s[0].nodeType==Node.ELEMENT_NODE){var d=be(s[0]);(!c.opts.toolbarInline||0<c.$el.prev().length)&&c.ready&&(t=c.helpers.getPX(d.css("margin-top")),i=c.helpers.getPX(d.css("padding-top")),n=c.helpers.getPX(d.css("margin-left")),r=c.helpers.getPX(d.css("margin-right")),a=c.helpers.getPX(d.css("padding-left")),o=c.helpers.getPX(d.css("padding-right"))),c.$placeholder.css("font-size",d.css("font-size")),c.$placeholder.css("line-height",d.css("line-height"))}else c.$placeholder.css("font-size",c.$el.css("font-size")),c.$placeholder.css("line-height",c.$el.css("line-height"));c.$wp.addClass("show-placeholder"),c.$placeholder.css({marginTop:Math.max(c.helpers.getPX(c.$el.css("margin-top")),t)+(e||0),paddingTop:Math.max(c.helpers.getPX(c.$el.css("padding-top")),i),paddingLeft:Math.max(c.helpers.getPX(c.$el.css("padding-left")),a),marginLeft:Math.max(c.helpers.getPX(c.$el.css("margin-left")),n),paddingRight:Math.max(c.helpers.getPX(c.$el.css("padding-right")),o),marginRight:Math.max(c.helpers.getPX(c.$el.css("margin-right")),r),textAlign:l}).text(c.language.translate(c.opts.placeholderText||c.$oel.attr("placeholder")||"")),c.$placeholder.html(c.$placeholder.text().replace(/\n/g,"<br>"))}function t(){c.$wp.removeClass("show-placeholder")}function n(){if(!c.$wp)return!1;c.core.isEmpty()?e():t()}return{_init:function(){if(!c.$wp)return!1;c.events.on("init input keydown keyup contentChanged initialized",n)},show:e,hide:t,refresh:n,isVisible:function(){return!c.$wp||c.node.hasClass(c.$wp.get(0),"show-placeholder")}}},be.FE.MODULES.edit=function(t){function e(){if(t.browser.mozilla)try{t.doc.execCommand("enableObjectResizing",!1,"false"),t.doc.execCommand("enableInlineTableEditing",!1,"false")}catch(e){}if(t.browser.msie)try{t.doc.body.addEventListener("mscontrolselect",function(e){return e.preventDefault(),!1})}catch(e){}}var n=!1;function r(){return n}return{_init:function(){t.events.on("focus",function(){r()?t.edit.off():t.edit.on()})},on:function(){t.$wp?(t.$el.attr("contenteditable",!0),t.$el.removeClass("fr-disabled").attr("aria-disabled",!1),t.$tb&&t.$tb.removeClass("fr-disabled").removeAttr("aria-disabled"),e()):t.$el.is("a")&&t.$el.attr("contenteditable",!0),n=!1},off:function(){t.events.disableBlur(),t.$wp?(t.$el.attr("contenteditable",!1),t.$el.addClass("fr-disabled").attr("aria-disabled",!0),t.$tb&&t.$tb.addClass("fr-disabled").attr("aria-disabled",!0)):t.$el.is("a")&&t.$el.attr("contenteditable",!1),t.events.enableBlur(),n=!0},disableDesign:e,isDisabled:r}},be.extend(be.FE.DEFAULTS,{editorClass:null,typingTimer:500,iframe:!1,requestWithCORS:!0,requestWithCredentials:!1,requestHeaders:{},useClasses:!0,spellcheck:!0,iframeDefaultStyle:'html{margin:0px;height:auto;}body{height:auto;padding:10px;background:transparent;color:#000000;position:relative;z-index: 2;-webkit-user-select:auto;margin:0px;overflow:hidden;min-height:20px;}body:after{content:"";display:block;clear:both;}body::-moz-selection{background:#b5d6fd;color:#000;}body::selection{background:#b5d6fd;color:#000;}',iframeStyle:"",iframeStyleFiles:[],direction:"auto",zIndex:1,tabIndex:null,disableRightClick:!1,scrollableContainer:"body",keepFormatOnDelete:!1,theme:null}),be.FE.MODULES.core=function(a){function t(){if(a.$box.addClass("fr-box"+(a.opts.editorClass?" "+a.opts.editorClass:"")),a.$box.attr("role","application"),a.$wp.addClass("fr-wrapper"),a.opts.iframe||a.$el.addClass("fr-element fr-view"),a.opts.iframe){a.$iframe.addClass("fr-iframe"),a.$el.addClass("fr-view");for(var e=0;e<a.o_doc.styleSheets.length;e++){var t;try{t=a.o_doc.styleSheets[e].cssRules}catch(i){}if(t)for(var n=0,r=t.length;n<r;n++)!t[n].selectorText||0!==t[n].selectorText.indexOf(".fr-view")&&0!==t[n].selectorText.indexOf(".fr-element")||0<t[n].style.cssText.length&&(0===t[n].selectorText.indexOf(".fr-view")?a.opts.iframeStyle+=t[n].selectorText.replace(/\.fr-view/g,"body")+"{"+t[n].style.cssText+"}":a.opts.iframeStyle+=t[n].selectorText.replace(/\.fr-element/g,"body")+"{"+t[n].style.cssText+"}")}}"auto"!=a.opts.direction&&a.$box.removeClass("fr-ltr fr-rtl").addClass("fr-"+a.opts.direction),a.$el.attr("dir",a.opts.direction),a.$wp.attr("dir",a.opts.direction),1<a.opts.zIndex&&a.$box.css("z-index",a.opts.zIndex),a.opts.theme&&a.$box.addClass(a.opts.theme+"-theme"),a.opts.tabIndex=a.opts.tabIndex||a.$oel.attr("tabIndex"),a.opts.tabIndex&&a.$el.attr("tabIndex",a.opts.tabIndex)}return{_init:function(){if(be.FE.INSTANCES.push(a),a.drag_support={filereader:"undefined"!=typeof FileReader,formdata:!!a.win.FormData,progress:"upload"in new XMLHttpRequest},a.$wp){t(),a.html.set(a._original_html),a.$el.attr("spellcheck",a.opts.spellcheck),a.helpers.isMobile()&&(a.$el.attr("autocomplete",a.opts.spellcheck?"on":"off"),a.$el.attr("autocorrect",a.opts.spellcheck?"on":"off"),a.$el.attr("autocapitalize",a.opts.spellcheck?"on":"off")),a.opts.disableRightClick&&a.events.$on(a.$el,"contextmenu",function(e){if(2==e.button)return!1});try{a.doc.execCommand("styleWithCSS",!1,!1)}catch(e){}}"TEXTAREA"==a.$oel.get(0).tagName&&(a.events.on("contentChanged",function(){a.$oel.val(a.html.get())}),a.events.on("form.submit",function(){a.$oel.val(a.html.get())}),a.events.on("form.reset",function(){a.html.set(a._original_html)}),a.$oel.val(a.html.get())),a.helpers.isIOS()&&a.events.$on(a.$doc,"selectionchange",function(){a.$doc.get(0).hasFocus()||a.$win.get(0).focus()}),a.events.trigger("init"),a.opts.autofocus&&!a.opts.initOnClick&&a.$wp&&a.events.on("initialized",function(){a.events.focus(!0)})},destroy:function(e){"TEXTAREA"==a.$oel.get(0).tagName&&a.$oel.val(e),a.$box&&a.$box.removeAttr("role"),a.$wp&&("TEXTAREA"==a.$oel.get(0).tagName?(a.$el.html(""),a.$wp.html(""),a.$box.replaceWith(a.$oel),a.$oel.show()):(a.$wp.replaceWith(e),a.$el.html(""),a.$box.removeClass("fr-view fr-ltr fr-box "+(a.opts.editorClass||"")),a.opts.theme&&a.$box.addClass(a.opts.theme+"-theme"))),this.$wp=null,this.$el=null,this.el=null,this.$box=null},isEmpty:function(){return a.node.isEmpty(a.el)},getXHR:function(e,t){var n=new XMLHttpRequest;for(var r in n.open(t,e,!0),a.opts.requestWithCredentials&&(n.withCredentials=!0),a.opts.requestHeaders)a.opts.requestHeaders.hasOwnProperty(r)&&n.setRequestHeader(r,a.opts.requestHeaders[r]);return n},injectStyle:function(e){if(a.opts.iframe){a.$head.find("style[data-fr-style], link[data-fr-style]").remove(),a.$head.append('<style data-fr-style="true">'+e+"</style>");for(var t=0;t<a.opts.iframeStyleFiles.length;t++){var n=be('<link data-fr-style="true" rel="stylesheet" href="'+a.opts.iframeStyleFiles[t]+'">');n.get(0).addEventListener("load",a.size.syncIframe),a.$head.append(n)}}},hasFocus:function(){return a.browser.mozilla&&a.helpers.isMobile()?a.selection.inEditor():a.node.hasFocus(a.el)||0<a.$el.find("*:focus").length},sameInstance:function(e){if(!e)return!1;var t=e.data("instance");return!!t&&t.id==a.id}}},be.FE.MODULES.cursorLists=function(g){function m(e){for(var t=e;"LI"!=t.tagName;)t=t.parentNode;return t}function v(e){for(var t=e;!g.node.isList(t);)t=t.parentNode;return t}return{_startEnter:function(e){var t,n=m(e),r=n.nextSibling,i=n.previousSibling,a=g.html.defaultTag();if(g.node.isEmpty(n,!0)&&r){for(var o="",s="",l=e.parentNode;!g.node.isList(l)&&l.parentNode&&("LI"!==l.parentNode.tagName||l.parentNode===n);)o=g.node.openTagString(l)+o,s+=g.node.closeTagString(l),l=l.parentNode;o=g.node.openTagString(l)+o,s+=g.node.closeTagString(l);var d="";for(d=l.parentNode&&"LI"==l.parentNode.tagName?s+"<li>"+be.FE.MARKERS+"<br>"+o:a?s+"<"+a+">"+be.FE.MARKERS+"<br></"+a+">"+o:s+be.FE.MARKERS+"<br>"+o;["UL","OL"].indexOf(l.tagName)<0||l.parentNode&&"LI"===l.parentNode.tagName;)l=l.parentNode;be(n).replaceWith('<span id="fr-break"></span>');var c=g.node.openTagString(l)+be(l).html()+g.node.closeTagString(l);c=c.replace(/<span id="fr-break"><\/span>/g,d),be(l).replaceWith(c),g.$el.find("li:empty").remove()}else if(i&&r||!g.node.isEmpty(n,!0)){for(var f="<br>",p=e.parentNode;p&&"LI"!=p.tagName;)f=g.node.openTagString(p)+f+g.node.closeTagString(p),p=p.parentNode;be(n).before("<li>"+f+"</li>"),be(e).remove()}else if(i){t=v(n);for(var u=be.FE.MARKERS+"<br>",h=e.parentNode;h&&"LI"!=h.tagName;)u=g.node.openTagString(h)+u+g.node.closeTagString(h),h=h.parentNode;t.parentNode&&"LI"==t.parentNode.tagName?be(t.parentNode).after("<li>"+u+"</li>"):a?be(t).after("<"+a+">"+u+"</"+a+">"):be(t).after(u),be(n).remove()}else(t=v(n)).parentNode&&"LI"==t.parentNode.tagName?r?be(t.parentNode).before(g.node.openTagString(n)+be.FE.MARKERS+"<br></li>"):be(t.parentNode).after(g.node.openTagString(n)+be.FE.MARKERS+"<br></li>"):a?be(t).before("<"+a+">"+be.FE.MARKERS+"<br></"+a+">"):be(t).before(be.FE.MARKERS+"<br>"),be(n).remove()},_middleEnter:function(e){for(var t=m(e),n="",r=e,i="",a="";r!=t;){var o="A"==(r=r.parentNode).tagName&&g.cursor.isAtEnd(e,r)?"fr-to-remove":"";i=g.node.openTagString(be(r).clone().addClass(o).get(0))+i,a=g.node.closeTagString(r)+a}n=a+n+i+be.FE.MARKERS+be.FE.INVISIBLE_SPACE,be(e).replaceWith('<span id="fr-break"></span>');var s=g.node.openTagString(t)+be(t).html()+g.node.closeTagString(t);s=s.replace(/<span id="fr-break"><\/span>/g,n),be(t).replaceWith(s)},_endEnter:function(e){for(var t=m(e),n=be.FE.MARKERS,r="",i=e,a=!1;i!=t;){var o="A"==(i=i.parentNode).tagName&&g.cursor.isAtEnd(e,i)?"fr-to-remove":"";a||i==t||g.node.isBlock(i)||(a=!0,r+=be.FE.INVISIBLE_SPACE),r=g.node.openTagString(be(i).clone().addClass(o).get(0))+r,n+=g.node.closeTagString(i)}var s=r+n;be(e).remove(),be(t).after(s)},_backspace:function(e){var t=m(e),n=t.previousSibling;if(n){n=be(n).find(g.html.blockTagsQuery()).get(-1)||n,be(e).replaceWith(be.FE.MARKERS);var r=g.node.contents(n);r.length&&"BR"==r[r.length-1].tagName&&be(r[r.length-1]).remove(),be(t).find(g.html.blockTagsQuery()).not("ol, ul, table").each(function(){this.parentNode==t&&be(this).replaceWith(be(this).html()+(g.node.isEmpty(this)?"":"<br>"))});for(var i,a=g.node.contents(t)[0];a&&!g.node.isList(a);)i=a.nextSibling,be(n).append(a),a=i;for(n=t.previousSibling;a;)i=a.nextSibling,be(n).append(a),a=i;be(t).remove()}else{var o=v(t);if(be(e).replaceWith(be.FE.MARKERS),o.parentNode&&"LI"==o.parentNode.tagName){var s=o.previousSibling;g.node.isBlock(s)?(be(t).find(g.html.blockTagsQuery()).not("ol, ul, table").each(function(){this.parentNode==t&&be(this).replaceWith(be(this).html()+(g.node.isEmpty(this)?"":"<br>"))}),be(s).append(be(t).html())):be(o).before(be(t).html())}else{var l=g.html.defaultTag();l&&0===be(t).find(g.html.blockTagsQuery()).length?be(o).before("<"+l+">"+be(t).html()+"</"+l+">"):be(o).before(be(t).html())}be(t).remove(),g.html.wrap(),0===be(o).find("li").length&&be(o).remove()}},_del:function(e){var t,n=m(e),r=n.nextSibling;if(r){(t=g.node.contents(r)).length&&"BR"==t[0].tagName&&be(t[0]).remove(),be(r).find(g.html.blockTagsQuery()).not("ol, ul, table").each(function(){this.parentNode==r&&be(this).replaceWith(be(this).html()+(g.node.isEmpty(this)?"":"<br>"))});for(var i,a=e,o=g.node.contents(r)[0];o&&!g.node.isList(o);)i=o.nextSibling,be(a).after(o),a=o,o=i;for(;o;)i=o.nextSibling,be(n).append(o),o=i;be(e).replaceWith(be.FE.MARKERS),be(r).remove()}else{for(var s=n;!s.nextSibling&&s!=g.el;)s=s.parentNode;if(s==g.el)return!1;if(s=s.nextSibling,g.node.isBlock(s))be.FE.NO_DELETE_TAGS.indexOf(s.tagName)<0&&(be(e).replaceWith(be.FE.MARKERS),(t=g.node.contents(n)).length&&"BR"==t[t.length-1].tagName&&be(t[t.length-1]).remove(),be(n).append(be(s).html()),be(s).remove());else for((t=g.node.contents(n)).length&&"BR"==t[t.length-1].tagName&&be(t[t.length-1]).remove(),be(e).replaceWith(be.FE.MARKERS);s&&!g.node.isBlock(s)&&"BR"!=s.tagName;)be(n).append(be(s)),s=s.nextSibling}}}},be.FE.NO_DELETE_TAGS=["TH","TD","TR","TABLE","FORM"],be.FE.SIMPLE_ENTER_TAGS=["TH","TD","LI","DL","DT","FORM"],be.FE.MODULES.cursor=function(u){function a(e){return!!e&&(!!u.node.isBlock(e)||(e.nextSibling&&e.nextSibling.nodeType==Node.TEXT_NODE&&0===e.nextSibling.textContent.replace(/\u200b/g,"").length?a(e.nextSibling):!(e.nextSibling&&(!e.previousSibling||"BR"!=e.nextSibling.tagName||e.nextSibling.nextSibling))&&a(e.parentNode)))}function o(e){return!!e&&(!!u.node.isBlock(e)||(e.previousSibling&&e.previousSibling.nodeType==Node.TEXT_NODE&&0===e.previousSibling.textContent.replace(/\u200b/g,"").length?o(e.previousSibling):!e.previousSibling&&(!(e.previousSibling||!u.node.hasClass(e.parentNode,"fr-inner"))||o(e.parentNode))))}function h(e,t){return!!e&&(e!=u.$wp.get(0)&&(e.previousSibling&&e.previousSibling.nodeType==Node.TEXT_NODE&&0===e.previousSibling.textContent.replace(/\u200b/g,"").length?h(e.previousSibling,t):!e.previousSibling&&(e.parentNode==t||h(e.parentNode,t))))}function g(e,t){return!!e&&(e!=u.$wp.get(0)&&(e.nextSibling&&e.nextSibling.nodeType==Node.TEXT_NODE&&0===e.nextSibling.textContent.replace(/\u200b/g,"").length?g(e.nextSibling,t):!(e.nextSibling&&(!e.previousSibling||"BR"!=e.nextSibling.tagName||e.nextSibling.nextSibling))&&(e.parentNode==t||g(e.parentNode,t))))}function s(e){return 0<be(e).parentsUntil(u.$el,"LI").length&&0===be(e).parentsUntil("LI","TABLE").length}function d(e,t){var n=new RegExp((t?"^":"")+"(([\\uD83C-\\uDBFF\\uDC00-\\uDFFF]+\\u200D)*[\\uD83C-\\uDBFF\\uDC00-\\uDFFF]{2})"+(t?"":"$"),"i"),r=e.match(n);return r?r[0].length:1}function c(e){for(var t,n=e;!n.previousSibling;)if(n=n.parentNode,u.node.isElement(n))return!1;if(n=n.previousSibling,!u.node.isBlock(n)&&u.node.isEditable(n)){for(t=u.node.contents(n);n.nodeType!=Node.TEXT_NODE&&!u.node.isDeletable(n)&&t.length&&u.node.isEditable(n);)n=t[t.length-1],t=u.node.contents(n);if(n.nodeType==Node.TEXT_NODE){var r=n.textContent,i=r.length;if(r.length&&"\n"===r[r.length-1])return n.textContent=r.substring(0,i-2),0===n.textContent.length&&n.parentNode.removeChild(n),c(e);if(u.opts.tabSpaces&&r.length>=u.opts.tabSpaces)0===r.substr(r.length-u.opts.tabSpaces,r.length-1).replace(/ /g,"").replace(new RegExp(be.FE.UNICODE_NBSP,"g"),"").length&&(i=r.length-u.opts.tabSpaces+1);n.textContent=r.substring(0,i-d(r));var a=r.length!=n.textContent.length;if(0===n.textContent.length)if(a&&u.opts.keepFormatOnDelete)be(n).after(be.FE.INVISIBLE_SPACE+be.FE.MARKERS);else if((2!=n.parentNode.childNodes.length||n.parentNode!=e.parentNode)&&1!=n.parentNode.childNodes.length||u.node.isBlock(n.parentNode)||u.node.isElement(n.parentNode)||!u.node.isDeletable(n.parentNode)){for(;!u.node.isElement(n.parentNode)&&u.node.isEmpty(n.parentNode)&&u.node.isDeletable(n.parentNode);){var o=n;n=n.parentNode,o.parentNode.removeChild(o)}be(n).after(be.FE.MARKERS),u.node.isElement(n.parentNode)&&!e.nextSibling&&n.previousSibling&&"BR"==n.previousSibling.tagName&&be(e).after("<br>"),n.parentNode.removeChild(n)}else be(n.parentNode).after(be.FE.MARKERS),be(n.parentNode).remove();else be(n).after(be.FE.MARKERS)}else u.node.isDeletable(n)?(be(n).after(be.FE.MARKERS),be(n).remove()):e.nextSibling&&"BR"==e.nextSibling.tagName&&u.node.isVoid(n)&&"BR"!=n.tagName?(be(e.nextSibling).remove(),be(e).replaceWith(be.FE.MARKERS)):!1!==u.events.trigger("node.remove",[be(n)])&&(be(n).after(be.FE.MARKERS),be(n).remove())}else if(be.FE.NO_DELETE_TAGS.indexOf(n.tagName)<0&&(u.node.isEditable(n)||u.node.isDeletable(n)))if(u.node.isDeletable(n))be(e).replaceWith(be.FE.MARKERS),be(n).remove();else if(u.node.isEmpty(n)&&!u.node.isList(n))be(n).remove(),be(e).replaceWith(be.FE.MARKERS);else{for(u.node.isList(n)&&(n=be(n).find("li:last").get(0)),(t=u.node.contents(n))&&"BR"==t[t.length-1].tagName&&be(t[t.length-1]).remove(),t=u.node.contents(n);t&&u.node.isBlock(t[t.length-1]);)n=t[t.length-1],t=u.node.contents(n);be(n).append(be.FE.MARKERS);for(var s=e;!s.previousSibling;)s=s.parentNode;for(;s&&"BR"!==s.tagName&&!u.node.isBlock(s);){var l=s;s=s.nextSibling,be(n).append(l)}s&&"BR"==s.tagName&&be(s).remove(),be(e).remove()}else e.nextSibling&&"BR"==e.nextSibling.tagName&&be(e.nextSibling).remove()}function l(e){var t=0<be(e).parentsUntil(u.$el,"BLOCKQUOTE").length,n=u.node.deepestParent(e,[],!t);if(n&&"BLOCKQUOTE"==n.tagName){var r=u.node.deepestParent(e,[be(e).parentsUntil(u.$el,"BLOCKQUOTE").get(0)]);r&&r.nextSibling&&(n=r)}if(null!==n){var i,a=n.nextSibling;if(u.node.isBlock(n)&&(u.node.isEditable(n)||u.node.isDeletable(n))&&a&&be.FE.NO_DELETE_TAGS.indexOf(a.tagName)<0)if(u.node.isDeletable(a))be(a).remove(),be(e).replaceWith(be.FE.MARKERS);else if(u.node.isBlock(a)&&u.node.isEditable(a))if(u.node.isList(a))if(u.node.isEmpty(n,!0))be(n).remove(),be(a).find("li:first").prepend(be.FE.MARKERS);else{var o=be(a).find("li:first");"BLOCKQUOTE"==n.tagName&&(i=u.node.contents(n)).length&&u.node.isBlock(i[i.length-1])&&(n=i[i.length-1]),0===o.find("ul, ol").length&&(be(e).replaceWith(be.FE.MARKERS),o.find(u.html.blockTagsQuery()).not("ol, ul, table").each(function(){this.parentNode==o.get(0)&&be(this).replaceWith(be(this).html()+(u.node.isEmpty(this)?"":"<br>"))}),be(n).append(u.node.contents(o.get(0))),o.remove(),0===be(a).find("li").length&&be(a).remove())}else{if((i=u.node.contents(a)).length&&"BR"==i[0].tagName&&be(i[0]).remove(),"BLOCKQUOTE"!=a.tagName&&"BLOCKQUOTE"==n.tagName)for(i=u.node.contents(n);i.length&&u.node.isBlock(i[i.length-1]);)n=i[i.length-1],i=u.node.contents(n);else if("BLOCKQUOTE"==a.tagName&&"BLOCKQUOTE"!=n.tagName)for(i=u.node.contents(a);i.length&&u.node.isBlock(i[0]);)a=i[0],i=u.node.contents(a);be(e).replaceWith(be.FE.MARKERS),be(n).append(a.innerHTML),be(a).remove()}else{for(be(e).replaceWith(be.FE.MARKERS);a&&"BR"!==a.tagName&&!u.node.isBlock(a)&&u.node.isEditable(a);){var s=a;a=a.nextSibling,be(n).append(s)}a&&"BR"==a.tagName&&u.node.isEditable(a)&&be(a).remove()}}}function n(e){for(var t,n=e;!n.nextSibling;)if(n=n.parentNode,u.node.isElement(n))return!1;if("BR"==(n=n.nextSibling).tagName&&u.node.isEditable(n))if(n.nextSibling){if(u.node.isBlock(n.nextSibling)&&u.node.isEditable(n.nextSibling)){if(!(be.FE.NO_DELETE_TAGS.indexOf(n.nextSibling.tagName)<0))return void be(n).remove();n=n.nextSibling,be(n.previousSibling).remove()}}else if(a(n)){if(s(e))u.cursorLists._del(e);else u.node.deepestParent(n)&&((!u.node.isEmpty(u.node.blockParent(n))||(u.node.blockParent(n).nextSibling&&be.FE.NO_DELETE_TAGS.indexOf(u.node.blockParent(n).nextSibling.tagName))<0)&&be(n).remove(),l(e));return}if(!u.node.isBlock(n)&&u.node.isEditable(n)){for(t=u.node.contents(n);n.nodeType!=Node.TEXT_NODE&&t.length&&!u.node.isDeletable(n)&&u.node.isEditable(n);)n=t[0],t=u.node.contents(n);n.nodeType==Node.TEXT_NODE?(be(n).before(be.FE.MARKERS),n.textContent.length&&(n.textContent=n.textContent.substring(d(n.textContent,!0),n.textContent.length))):u.node.isDeletable(n)?(be(n).before(be.FE.MARKERS),be(n).remove()):!1!==u.events.trigger("node.remove",[be(n)])&&(be(n).before(be.FE.MARKERS),be(n).remove()),be(e).remove()}else if(be.FE.NO_DELETE_TAGS.indexOf(n.tagName)<0&&(u.node.isEditable(n)||u.node.isDeletable(n)))if(u.node.isDeletable(n))be(e).replaceWith(be.FE.MARKERS),be(n).remove();else if(u.node.isList(n))e.previousSibling?(be(n).find("li:first").prepend(e),u.cursorLists._backspace(e)):(be(n).find("li:first").prepend(be.FE.MARKERS),be(e).remove());else if((t=u.node.contents(n))&&"BR"==t[0].tagName&&be(t[0]).remove(),t&&"BLOCKQUOTE"==n.tagName){var r=t[0];for(be(e).before(be.FE.MARKERS);r&&"BR"!=r.tagName;){var i=r;r=r.nextSibling,be(e).before(i)}r&&"BR"==r.tagName&&be(r).remove()}else be(e).after(be(n).html()).after(be.FE.MARKERS),be(n).remove()}function f(){for(var e=u.el.querySelectorAll("blockquote:empty"),t=0;t<e.length;t++)e[t].parentNode.removeChild(e[t])}function p(e,t,n){var r,i=u.node.deepestParent(e,[],!n);if(i&&"BLOCKQUOTE"==i.tagName)return g(e,i)?((r=u.html.defaultTag())?be(i).after("<"+r+">"+be.FE.MARKERS+"<br></"+r+">"):be(i).after(be.FE.MARKERS+"<br>"),be(e).remove()):m(e,t,n),!1;if(null==i)(r=u.html.defaultTag())&&u.node.isElement(e.parentNode)?be(e).replaceWith("<"+r+">"+be.FE.MARKERS+"<br></"+r+">"):!e.previousSibling||be(e.previousSibling).is("br")||e.nextSibling?be(e).replaceWith("<br>"+be.FE.MARKERS):be(e).replaceWith("<br>"+be.FE.MARKERS+"<br>");else{var a=e,o="";u.node.isBlock(i)&&!t||(o="<br/>");var s,l="",d="",c="",f="";(r=u.html.defaultTag())&&u.node.isBlock(i)&&(c="<"+r+">",f="</"+r+">",i.tagName==r.toUpperCase()&&(c=u.node.openTagString(be(i).clone().removeAttr("id").get(0))));do{if(a=a.parentNode,!t||a!=i||t&&!u.node.isBlock(i))if(l+=u.node.closeTagString(a),a==i&&u.node.isBlock(i))d=c+d;else{var p="A"==a.tagName&&g(e,a)?"fr-to-remove":"";d=u.node.openTagString(be(a).clone().addClass(p).get(0))+d}}while(a!=i);o=l+o+d+(e.parentNode==i&&u.node.isBlock(i)?"":be.FE.INVISIBLE_SPACE)+be.FE.MARKERS,u.node.isBlock(i)&&!be(i).find("*:last").is("br")&&be(i).append("<br/>"),be(e).after('<span id="fr-break"></span>'),be(e).remove(),i.nextSibling&&!u.node.isBlock(i.nextSibling)||u.node.isBlock(i)||be(i).after("<br>"),s=(s=!t&&u.node.isBlock(i)?u.node.openTagString(i)+be(i).html()+f:u.node.openTagString(i)+be(i).html()+u.node.closeTagString(i)).replace(/<span id="fr-break"><\/span>/g,o),be(i).replaceWith(s)}}function m(e,t,n){var r=u.node.deepestParent(e,[],!n);if(null==r)u.html.defaultTag()&&e.parentNode===u.el?be(e).replaceWith("<"+u.html.defaultTag()+">"+be.FE.MARKERS+"<br></"+u.html.defaultTag()+">"):(e.nextSibling&&!u.node.isBlock(e.nextSibling)||be(e).after("<br>"),be(e).replaceWith("<br>"+be.FE.MARKERS));else{var i=e,a="";"PRE"==r.tagName&&(t=!0),u.node.isBlock(r)&&!t||(a="<br>");var o="",s="";do{var l=i;if(i=i.parentNode,"BLOCKQUOTE"==r.tagName&&u.node.isEmpty(l)&&!u.node.hasClass(l,"fr-marker")&&0<be(l).find(e).length&&be(l).after(e),("BLOCKQUOTE"!=r.tagName||!g(e,i)&&!h(e,i))&&(!t||i!=r||t&&!u.node.isBlock(r))){o+=u.node.closeTagString(i);var d="A"==i.tagName&&g(e,i)?"fr-to-remove":"";s=u.node.openTagString(be(i).clone().addClass(d).removeAttr("id").get(0))+s}}while(i!=r);var c=r==e.parentNode&&u.node.isBlock(r)||e.nextSibling;if("BLOCKQUOTE"==r.tagName){e.previousSibling&&u.node.isBlock(e.previousSibling)&&e.nextSibling&&"BR"==e.nextSibling.tagName&&(be(e.nextSibling).after(e),e.nextSibling&&"BR"==e.nextSibling.tagName&&be(e.nextSibling).remove());var f=u.html.defaultTag();a=o+a+(f?"<"+f+">":"")+be.FE.MARKERS+"<br>"+(f?"</"+f+">":"")+s}else a=o+a+s+(c?"":be.FE.INVISIBLE_SPACE)+be.FE.MARKERS;be(e).replaceWith('<span id="fr-break"></span>');var p=u.node.openTagString(r)+be(r).html()+u.node.closeTagString(r);p=p.replace(/<span id="fr-break"><\/span>/g,a),be(r).replaceWith(p)}}return{enter:function(t){var n=u.markers.insert();if(!n)return!0;u.el.normalize();var r=!1;0<be(n).parentsUntil(u.$el,"BLOCKQUOTE").length&&(r=!(t=!1)),be(n).parentsUntil(u.$el,"TD, TH").length&&(r=!1),a(n)?!s(n)||t||r?p(n,t,r):u.cursorLists._endEnter(n):o(n)?!s(n)||t||r?function e(t,n,r){var i,a=u.node.deepestParent(t,[],!r);if(a&&"TABLE"==a.tagName)return be(a).find("td:first, th:first").prepend(t),e(t,n,r);if(a&&"BLOCKQUOTE"==a.tagName){if(h(t,a))return(i=u.html.defaultTag())?be(a).before("<"+i+">"+be.FE.MARKERS+"<br></"+i+">"):be(a).before(be.FE.MARKERS+"<br>"),be(t).remove(),!1;g(t,a)?p(t,n,!0):m(t,n,!0)}if(null==a)(i=u.html.defaultTag())&&u.node.isElement(t.parentNode)?be(t).replaceWith("<"+i+">"+be.FE.MARKERS+"<br></"+i+">"):be(t).replaceWith("<br>"+be.FE.MARKERS);else{if(u.node.isBlock(a))if("PRE"==a.tagName&&(n=!0),n)be(t).remove(),be(a).prepend("<br>"+be.FE.MARKERS);else{if(u.node.isEmpty(a,!0))return p(t,n,r);if(u.opts.keepFormatOnDelete){for(var o=t,s=be.FE.INVISIBLE_SPACE;o!=a&&!u.node.isElement(o);)o=o.parentNode,s=u.node.openTagString(o)+s+u.node.closeTagString(o);be(a).before(s)}else be(a).before(u.node.openTagString(be(a).clone().removeAttr("id").get(0))+"<br>"+u.node.closeTagString(a))}else be(a).before("<br>");be(t).remove()}}(n,t,r):u.cursorLists._startEnter(n):!s(n)||t||r?m(n,t,r):u.cursorLists._middleEnter(n),u.$el.find(".fr-to-remove").each(function(){for(var e=u.node.contents(this),t=0;t<e.length;t++)e[t].nodeType==Node.TEXT_NODE&&(e[t].textContent=e[t].textContent.replace(/\u200B/g,""));be(this).replaceWith(this.innerHTML)}),u.html.fillEmptyBlocks(!0),u.opts.htmlUntouched||(u.html.cleanEmptyTags(),u.clean.lists()),u.spaces.normalizeAroundCursor(),u.selection.restore()},backspace:function(){var e=!1,t=u.markers.insert();if(!t)return!0;for(var n=t.parentNode;n&&!u.node.isElement(n);){if("false"===n.getAttribute("contenteditable"))return be(t).replaceWith(be.FE.MARKERS),u.selection.restore(),!1;if("true"===n.getAttribute("contenteditable"))break;n=n.parentNode}u.el.normalize();var r=t.previousSibling;if(r){var i=r.textContent;i&&i.length&&8203==i.charCodeAt(i.length-1)&&(1==i.length?be(r).remove():r.textContent=r.textContent.substr(0,i.length-d(i)))}return a(t)?e=c(t):o(t)?s(t)&&h(t,be(t).parents("li:first").get(0))?u.cursorLists._backspace(t):function(e){for(var t=0<be(e).parentsUntil(u.$el,"BLOCKQUOTE").length,n=u.node.deepestParent(e,[],!t),r=n;n&&!n.previousSibling&&"BLOCKQUOTE"!=n.tagName&&n.parentElement!=u.el&&!u.node.hasClass(n.parentElement,"fr-inner")&&be.FE.SIMPLE_ENTER_TAGS.indexOf(n.parentElement.tagName)<0;)n=n.parentElement;if(n&&"BLOCKQUOTE"==n.tagName){var i=u.node.deepestParent(e,[be(e).parentsUntil(u.$el,"BLOCKQUOTE").get(0)]);i&&i.previousSibling&&(r=n=i)}if(null!==n){var a,o=n.previousSibling;if(u.node.isBlock(n)&&u.node.isEditable(n)&&o&&be.FE.NO_DELETE_TAGS.indexOf(o.tagName)<0)if(u.node.isDeletable(o))be(o).remove(),be(e).replaceWith(be.FE.MARKERS);else if(u.node.isEditable(o))if(u.node.isBlock(o))if(u.node.isEmpty(o)&&!u.node.isList(o))be(o).remove(),be(e).after(u.opts.keepFormatOnDelete?be.FE.INVISIBLE_SPACE:"");else{if(u.node.isList(o)&&(o=be(o).find("li:last").get(0)),(a=u.node.contents(o)).length&&"BR"==a[a.length-1].tagName&&be(a[a.length-1]).remove(),"BLOCKQUOTE"==o.tagName&&"BLOCKQUOTE"!=n.tagName)for(a=u.node.contents(o);a.length&&u.node.isBlock(a[a.length-1]);)o=a[a.length-1],a=u.node.contents(o);else if("BLOCKQUOTE"!=o.tagName&&"BLOCKQUOTE"==n.tagName)for(a=u.node.contents(n);a.length&&u.node.isBlock(a[0]);)n=a[0],a=u.node.contents(n);if(u.node.isEmpty(n))be(e).remove(),u.selection.setAtEnd(o,!0);else{be(e).replaceWith(be.FE.MARKERS);var s=o.childNodes;u.node.isBlock(s[s.length-1])?be(s[s.length-1]).append(r.innerHTML):be(o).append(r.innerHTML)}be(r).remove(),u.node.isEmpty(n)&&be(n).remove()}else be(e).replaceWith(be.FE.MARKERS),"BLOCKQUOTE"==n.tagName&&o.nodeType==Node.ELEMENT_NODE?be(o).remove():(be(o).after(u.node.isEmpty(n)?"":be(n).html()),be(n).remove(),"BR"==o.tagName&&be(o).remove())}}(t):e=c(t),be(t).remove(),f(),u.html.fillEmptyBlocks(!0),u.opts.htmlUntouched||(u.html.cleanEmptyTags(),u.clean.lists(),u.spaces.normalizeAroundCursor()),u.selection.restore(),e},del:function(){var e=u.markers.insert();if(!e)return!1;if(u.el.normalize(),a(e))if(s(e))if(0===be(e).parents("li:first").find("ul, ol").length)u.cursorLists._del(e);else{var t=be(e).parents("li:first").find("ul:first, ol:first").find("li:first");(t=t.find(u.html.blockTagsQuery()).get(-1)||t).prepend(e),u.cursorLists._backspace(e)}else l(e);else o(e),n(e);be(e).remove(),f(),u.html.fillEmptyBlocks(!0),u.opts.htmlUntouched||(u.html.cleanEmptyTags(),u.clean.lists()),u.spaces.normalizeAroundCursor(),u.selection.restore()},isAtEnd:g,isAtStart:h}},be.FE.ENTER_P=0,be.FE.ENTER_DIV=1,be.FE.ENTER_BR=2,be.FE.KEYCODE={BACKSPACE:8,TAB:9,ENTER:13,SHIFT:16,CTRL:17,ALT:18,ESC:27,SPACE:32,ARROW_LEFT:37,ARROW_UP:38,ARROW_RIGHT:39,ARROW_DOWN:40,DELETE:46,ZERO:48,ONE:49,TWO:50,THREE:51,FOUR:52,FIVE:53,SIX:54,SEVEN:55,EIGHT:56,NINE:57,FF_SEMICOLON:59,FF_EQUALS:61,QUESTION_MARK:63,A:65,B:66,C:67,D:68,E:69,F:70,G:71,H:72,I:73,J:74,K:75,L:76,M:77,N:78,O:79,P:80,Q:81,R:82,S:83,T:84,U:85,V:86,W:87,X:88,Y:89,Z:90,META:91,NUM_ZERO:96,NUM_ONE:97,NUM_TWO:98,NUM_THREE:99,NUM_FOUR:100,NUM_FIVE:101,NUM_SIX:102,NUM_SEVEN:103,NUM_EIGHT:104,NUM_NINE:105,NUM_MULTIPLY:106,NUM_PLUS:107,NUM_MINUS:109,NUM_PERIOD:110,NUM_DIVISION:111,F1:112,F2:113,F3:114,F4:115,F5:116,F6:117,F7:118,F8:119,F9:120,F10:121,F11:122,F12:123,FF_HYPHEN:173,SEMICOLON:186,DASH:189,EQUALS:187,COMMA:188,HYPHEN:189,PERIOD:190,SLASH:191,APOSTROPHE:192,TILDE:192,SINGLE_QUOTE:222,OPEN_SQUARE_BRACKET:219,BACKSLASH:220,CLOSE_SQUARE_BRACKET:221,IME:229},be.extend(be.FE.DEFAULTS,{enter:be.FE.ENTER_P,multiLine:!0,tabSpaces:0}),be.FE.MODULES.keys=function(l){var d,n,r,c=!1;function e(){if(l.browser.mozilla&&l.selection.isCollapsed()&&!c){var e=l.selection.ranges(0),t=e.startContainer,n=e.startOffset;t&&t.nodeType==Node.TEXT_NODE&&n<=t.textContent.length&&0<n&&32==t.textContent.charCodeAt(n-1)&&(l.selection.save(),l.spaces.normalize(),l.selection.restore())}}function t(){l.selection.isFull()&&setTimeout(function(){var e=l.html.defaultTag();e?l.$el.html("<"+e+">"+be.FE.MARKERS+"<br/></"+e+">"):l.$el.html(be.FE.MARKERS+"<br/>"),l.selection.restore(),l.placeholder.refresh(),l.button.bulkRefresh(),l.undo.saveStep()},0)}function i(){c=!1}function a(){c=!1}function f(){var e=l.html.defaultTag();e?l.$el.html("<"+e+">"+be.FE.MARKERS+"<br/></"+e+">"):l.$el.html(be.FE.MARKERS+"<br/>"),l.selection.restore()}function o(e){var t=l.selection.element();if(t&&0<=["INPUT","TEXTAREA"].indexOf(t.tagName))return!0;if(e&&h(e.which))return!0;l.events.disableBlur(),null;var n=e.which;if(16===n)return!0;if((d=n)===be.FE.KEYCODE.IME)return c=!0;c=!1;var r,i,a,o=g(n)&&!u(e)&&!e.altKey,s=n==be.FE.KEYCODE.BACKSPACE||n==be.FE.KEYCODE.DELETE;if((l.selection.isFull()&&!l.opts.keepFormatOnDelete&&!l.placeholder.isVisible()||s&&l.placeholder.isVisible()&&l.opts.keepFormatOnDelete)&&(o||s)&&(f(),!g(n)))return e.preventDefault(),!0;n==be.FE.KEYCODE.ENTER?e.shiftKey?((a=e).preventDefault(),a.stopPropagation(),l.opts.multiLine&&(l.selection.isCollapsed()||l.selection.remove(),l.cursor.enter(!0))):(i=e,l.opts.multiLine?(l.helpers.isIOS()||(i.preventDefault(),i.stopPropagation()),l.selection.isCollapsed()||l.selection.remove(),l.cursor.enter()):(i.preventDefault(),i.stopPropagation())):n===be.FE.KEYCODE.BACKSPACE&&(e.metaKey||e.ctrlKey)?setTimeout(function(){l.events.disableBlur(),l.events.focus()},0):n!=be.FE.KEYCODE.BACKSPACE||u(e)||e.altKey?n!=be.FE.KEYCODE.DELETE||u(e)||e.altKey||e.shiftKey?n==be.FE.KEYCODE.SPACE?function(e){var t=l.selection.element();if(!l.helpers.isMobile()&&t&&"A"==t.tagName){e.preventDefault(),e.stopPropagation(),l.selection.isCollapsed()||l.selection.remove();var n=l.markers.insert();if(n){var r=n.previousSibling;!n.nextSibling&&n.parentNode&&"A"==n.parentNode.tagName?(n.parentNode.insertAdjacentHTML("afterend","&nbsp;"+be.FE.MARKERS),n.parentNode.removeChild(n)):(r&&r.nodeType==Node.TEXT_NODE&&1==r.textContent.length&&160==r.textContent.charCodeAt(0)?r.textContent=r.textContent+" ":n.insertAdjacentHTML("beforebegin","&nbsp;"),n.outerHTML=be.FE.MARKERS),l.selection.restore()}}}(e):n==be.FE.KEYCODE.TAB?function(e){if(0<l.opts.tabSpaces)if(l.selection.isCollapsed()){l.undo.saveStep(),e.preventDefault(),e.stopPropagation();for(var t="",n=0;n<l.opts.tabSpaces;n++)t+="&nbsp;";l.html.insert(t),l.placeholder.refresh(),l.undo.saveStep()}else e.preventDefault(),e.stopPropagation(),e.shiftKey?l.commands.outdent():l.commands.indent()}(e):u(e)||!g(e.which)||l.selection.isCollapsed()||e.ctrlKey||e.altKey||l.selection.remove():l.placeholder.isVisible()?(l.opts.keepFormatOnDelete||f(),e.preventDefault(),e.stopPropagation()):((r=e).preventDefault(),r.stopPropagation(),""===l.selection.text()?l.cursor.del():l.selection.remove(),l.placeholder.refresh()):l.placeholder.isVisible()?(l.opts.keepFormatOnDelete||f(),e.preventDefault(),e.stopPropagation()):function(e){if(l.selection.isCollapsed())if(l.cursor.backspace(),l.helpers.isIOS()){var t=l.selection.ranges(0);t.deleteContents(),t.insertNode(document.createTextNode("\u200b")),l.selection.get().modify("move","forward","character")}else e.preventDefault(),e.stopPropagation();else e.preventDefault(),e.stopPropagation(),l.selection.remove();l.placeholder.refresh()}(e),l.events.enableBlur()}function s(){if(!l.$wp)return!0;var e;l.opts.height||l.opts.heightMax?(e=l.position.getBoundingRect().top,(l.helpers.isIOS()||l.helpers.isAndroid())&&(e-=l.helpers.scrollTop()),l.opts.iframe&&(e+=l.$iframe.offset().top),e>l.$wp.offset().top-l.helpers.scrollTop()+l.$wp.height()-20&&l.$wp.scrollTop(e+l.$wp.scrollTop()-(l.$wp.height()+l.$wp.offset().top)+l.helpers.scrollTop()+20)):(e=l.position.getBoundingRect().top,l.opts.toolbarBottom&&(e+=l.opts.toolbarStickyOffset),(l.helpers.isIOS()||l.helpers.isAndroid())&&(e-=l.helpers.scrollTop()),l.opts.iframe&&(e+=l.$iframe.offset().top,e-=l.helpers.scrollTop()),(e+=l.opts.toolbarStickyOffset)>l.o_win.innerHeight-20&&be(l.o_win).scrollTop(e+l.helpers.scrollTop()-l.o_win.innerHeight+20),e=l.position.getBoundingRect().top,l.opts.toolbarBottom||(e-=l.opts.toolbarStickyOffset),(l.helpers.isIOS()||l.helpers.isAndroid())&&(e-=l.helpers.scrollTop()),l.opts.iframe&&(e+=l.$iframe.offset().top,e-=l.helpers.scrollTop()),e<l.$tb.height()+20&&be(l.o_win).scrollTop(e+l.helpers.scrollTop()-l.$tb.height()-20))}function p(e){var t=l.selection.element();if(t&&0<=["INPUT","TEXTAREA"].indexOf(t.tagName))return!0;if(e&&0===e.which&&d&&(e.which=d),l.helpers.isAndroid()&&l.browser.mozilla)return!0;if(c)return!1;if(e&&l.helpers.isIOS()&&e.which==be.FE.KEYCODE.ENTER&&l.doc.execCommand("undo"),!l.selection.isCollapsed())return!0;if(e&&(e.which===be.FE.KEYCODE.META||e.which==be.FE.KEYCODE.CTRL))return!0;if(e&&h(e.which))return!0;if(e&&!l.helpers.isIOS()&&(e.which==be.FE.KEYCODE.ENTER||e.which==be.FE.KEYCODE.BACKSPACE||37<=e.which&&e.which<=40&&!l.browser.msie))try{s()}catch(i){}var n,r=l.selection.element();!function(e){if(!e)return!1;var t=e.innerHTML;return!!((t=t.replace(/<span[^>]*? class\s*=\s*["']?fr-marker["']?[^>]+>\u200b<\/span>/gi,""))&&/\u200B/.test(t)&&0<t.replace(/\u200B/gi,"").length)}(r)||l.node.hasClass(r,"fr-marker")||"IFRAME"==r.tagName||(n=r,l.helpers.isIOS()&&0!==((n.textContent||"").match(/[\u3041-\u3096\u30A0-\u30FF\u4E00-\u9FFF\u3130-\u318F\uAC00-\uD7AF]/gi)||[]).length)||(l.selection.save(),function(e){for(var t=l.doc.createTreeWalker(e,NodeFilter.SHOW_TEXT,l.node.filter(function(e){return/\u200B/gi.test(e.textContent)}),!1);t.nextNode();){var n=t.currentNode;n.textContent=n.textContent.replace(/\u200B/gi,"")}}(r),l.selection.restore())}function u(e){if(-1!=navigator.userAgent.indexOf("Mac OS X")){if(e.metaKey&&!e.altKey)return!0}else if(e.ctrlKey&&!e.altKey)return!0;return!1}function h(e){if(e>=be.FE.KEYCODE.ARROW_LEFT&&e<=be.FE.KEYCODE.ARROW_DOWN)return!0}function g(e){if(e>=be.FE.KEYCODE.ZERO&&e<=be.FE.KEYCODE.NINE)return!0;if(e>=be.FE.KEYCODE.NUM_ZERO&&e<=be.FE.KEYCODE.NUM_MULTIPLY)return!0;if(e>=be.FE.KEYCODE.A&&e<=be.FE.KEYCODE.Z)return!0;if(l.browser.webkit&&0===e)return!0;switch(e){case be.FE.KEYCODE.SPACE:case be.FE.KEYCODE.QUESTION_MARK:case be.FE.KEYCODE.NUM_PLUS:case be.FE.KEYCODE.NUM_MINUS:case be.FE.KEYCODE.NUM_PERIOD:case be.FE.KEYCODE.NUM_DIVISION:case be.FE.KEYCODE.SEMICOLON:case be.FE.KEYCODE.FF_SEMICOLON:case be.FE.KEYCODE.DASH:case be.FE.KEYCODE.EQUALS:case be.FE.KEYCODE.FF_EQUALS:case be.FE.KEYCODE.COMMA:case be.FE.KEYCODE.PERIOD:case be.FE.KEYCODE.SLASH:case be.FE.KEYCODE.APOSTROPHE:case be.FE.KEYCODE.SINGLE_QUOTE:case be.FE.KEYCODE.OPEN_SQUARE_BRACKET:case be.FE.KEYCODE.BACKSLASH:case be.FE.KEYCODE.CLOSE_SQUARE_BRACKET:return!0;default:return!1}}function m(e){var t=e.which;if(u(e)||37<=t&&t<=40||!g(t)&&t!=be.FE.KEYCODE.DELETE&&t!=be.FE.KEYCODE.BACKSPACE&&t!=be.FE.KEYCODE.ENTER&&t!=be.FE.KEYCODE.IME)return!0;n||(r=l.snapshot.get(),l.undo.canDo()||l.undo.saveStep()),clearTimeout(n),n=setTimeout(function(){n=null,l.undo.saveStep()},Math.max(250,l.opts.typingTimer))}function v(e){var t=e.which;if(u(e)||37<=t&&t<=40)return!0;r&&n?(l.undo.saveStep(r),r=null):void 0!==t&&0!==t||r||n||l.undo.saveStep()}function E(e){if(e&&"BR"==e.tagName)return!1;try{return 0===(e.textContent||"").length&&e.querySelector&&!e.querySelector(":scope > br")||e.childNodes&&1==e.childNodes.length&&e.childNodes[0].getAttribute&&("false"==e.childNodes[0].getAttribute("contenteditable")||l.node.hasClass(e.childNodes[0],"fr-img-caption"))}catch(t){return!1}}function b(e){var t=l.el.childNodes,n=l.html.defaultTag();return!(!e.target||e.target===l.el)||(0===t.length||void(l.$el.outerHeight()-e.offsetY<=10?E(t[t.length-1])&&(n?l.$el.append("<"+n+">"+be.FE.MARKERS+"<br></"+n+">"):l.$el.append(be.FE.MARKERS+"<br>"),l.selection.restore(),s()):e.offsetY<=10&&E(t[0])&&(n?l.$el.prepend("<"+n+">"+be.FE.MARKERS+"<br></"+n+">"):l.$el.prepend(be.FE.MARKERS+"<br>"),l.selection.restore(),s())))}function T(){n&&clearTimeout(n)}return{_init:function(){l.events.on("keydown",m),l.events.on("input",e),l.events.on("mousedown",a),l.events.on("keyup input",v),l.events.on("keypress",i),l.events.on("keydown",o),l.events.on("keyup",p),l.events.on("destroy",T),l.events.on("html.inserted",p),l.events.on("cut",t),l.events.on("click",b)},ctrlKey:u,isCharacter:g,isArrow:h,forceUndo:function(){n&&(clearTimeout(n),l.undo.saveStep(),r=null)},isIME:function(){return c},isBrowserAction:function(e){var t=e.which;return u(e)||t==be.FE.KEYCODE.F5},positionCaret:s}},be.FE.MODULES.accessibility=function(f){var a=!0;function s(t){t&&t.length&&!f.$el.find('[contenteditable="true"]').is(":focus")&&(t.data("blur-event-set")||t.parents(".fr-popup").length||(f.events.$on(t,"blur",function(){var e=t.parents(".fr-toolbar, .fr-popup").data("instance")||f;e.events.blurActive()&&e.events.trigger("blur"),setTimeout(function(){e.events.enableBlur()},100)},!0),t.data("blur-event-set",!0)),(t.parents(".fr-toolbar, .fr-popup").data("instance")||f).events.disableBlur(),t.focus(),f.shared.$f_el=t)}function p(e,t){var n=t?"last":"first",r=e.find("button:visible:not(.fr-disabled), .fr-group span.fr-command:visible")[n]();if(r.length)return s(r),!0}function o(e){return e.is("input, textarea, select")&&t(),f.events.disableBlur(),e.focus(),!0}function u(e,t){var n=e.find("input, textarea, button, select").filter(":visible").not(":disabled").filter(t?":last":":first");if(n.length)return o(n);if(f.shared.with_kb){var r=e.find(".fr-active-item:visible:first");if(r.length)return o(r);var i=e.find("[tabIndex]:visible:first");if(i.length)return o(i)}}function t(){0===f.$el.find(".fr-marker").length&&f.core.hasFocus()&&f.selection.save()}function l(){var e=f.popups.areVisible();if(e){var t=e.find(".fr-buttons");return t.find("button:focus, .fr-group span:focus").length?!p(e.data("instance").$tb):!p(t)}return!p(f.$tb)}function d(){var e=null;return f.shared.$f_el.is(".fr-dropdown.fr-active")?e=f.shared.$f_el:f.shared.$f_el.closest(".fr-dropdown-menu").prev().is(".fr-dropdown.fr-active")&&(e=f.shared.$f_el.closest(".fr-dropdown-menu").prev()),e}function n(e,t,n){if(f.shared.$f_el){var r=d();r&&(f.button.click(r),f.shared.$f_el=r);var i=e.find("button:visible:not(.fr-disabled), .fr-group span.fr-command:visible"),a=i.index(f.shared.$f_el);if(0===a&&!n||a==i.length-1&&n){var o;if(t){if(e.parent().is(".fr-popup"))o=!u(e.parent().children().not(".fr-buttons"),!n);!1===o&&(f.shared.$f_el=null)}t&&!1===o||p(e,!n)}else s(be(i.get(a+(n?1:-1))));return!1}}function c(e,t){return n(e,t,!0)}function h(e,t){return n(e,t)}function g(e){if(f.shared.$f_el){var t;if(f.shared.$f_el.is(".fr-dropdown.fr-active"))return s(t=e?f.shared.$f_el.next().find(".fr-command:not(.fr-disabled)").first():f.shared.$f_el.next().find(".fr-command:not(.fr-disabled)").last()),!1;if(f.shared.$f_el.is("a.fr-command"))return(t=e?f.shared.$f_el.closest("li").nextAll(":visible:first").find(".fr-command:not(.fr-disabled)").first():f.shared.$f_el.closest("li").prevAll(":visible:first").find(".fr-command:not(.fr-disabled)").first()).length||(t=e?f.shared.$f_el.closest(".fr-dropdown-menu").find(".fr-command:not(.fr-disabled)").first():f.shared.$f_el.closest(".fr-dropdown-menu").find(".fr-command:not(.fr-disabled)").last()),s(t),!1}}function m(){if(f.shared.$f_el){if(f.shared.$f_el.hasClass("fr-dropdown"))f.button.click(f.shared.$f_el);else if(f.shared.$f_el.is("button.fr-back")){f.opts.toolbarInline&&(f.events.disableBlur(),f.events.focus());var e=f.popups.areVisible(f);e&&(f.shared.with_kb=!1),f.button.click(f.shared.$f_el),E(e)}else{if(f.events.disableBlur(),f.button.click(f.shared.$f_el),f.shared.$f_el.attr("data-popup")){var t=f.popups.areVisible(f);t&&t.data("popup-button",f.shared.$f_el)}else if(f.shared.$f_el.attr("data-modal")){var n=f.modals.areVisible(f);n&&n.data("modal-button",f.shared.$f_el)}f.shared.$f_el=null}return!1}}function v(){f.shared.$f_el&&(f.events.disableBlur(),f.shared.$f_el.blur(),f.shared.$f_el=null),!1!==f.events.trigger("toolbar.focusEditor")&&(f.events.disableBlur(),f.$el.focus(),f.events.focus())}function r(r){r&&r.length&&(f.events.$on(r,"keydown",function(e){if(!be(e.target).is("a.fr-command, button.fr-command, .fr-group span.fr-command"))return!0;var t=r.parents(".fr-popup").data("instance")||r.data("instance")||f;f.shared.with_kb=!0;var n=t.accessibility.exec(e,r);return f.shared.with_kb=!1,n},!0),f.events.$on(r,"mouseenter","[tabIndex]",function(e){var t=r.parents(".fr-popup").data("instance")||r.data("instance")||f;if(!a)return e.stopPropagation(),void e.preventDefault();var n=be(e.currentTarget);t.shared.$f_el&&t.shared.$f_el.not(n)&&t.accessibility.focusEditor()},!0))}function E(e){var t=e.data("popup-button");t&&setTimeout(function(){s(t),e.data("popup-button",null)},0)}function i(e){var t=f.popups.areVisible(e);t&&t.data("popup-button",null)}function e(e){var t=-1!=navigator.userAgent.indexOf("Mac OS X")?e.metaKey:e.ctrlKey;if(e.which==be.FE.KEYCODE.F10&&!t&&!e.shiftKey&&e.altKey){f.shared.with_kb=!0;var n=f.popups.areVisible(f),r=!1;return n&&(r=u(n.children().not(".fr-buttons"))),r||l(),f.shared.with_kb=!1,e.preventDefault(),e.stopPropagation(),!1}return!0}return{_init:function(){f.$wp?f.events.on("keydown",e,!0):f.events.$on(f.$win,"keydown",e,!0),f.events.on("mousedown",function(e){i(f),f.shared.$f_el&&(f.accessibility.restoreSelection(),e.stopPropagation(),f.events.disableBlur(),f.shared.$f_el=null)},!0),f.events.on("blur",function(){f.shared.$f_el=null,i(f)},!0)},registerPopup:function(e){var d,c,t=f.popups.get(e),n=(d=e,c=f.popups.get(d),{_tiKeydown:function(e){var t=c.data("instance")||f;if(!1===t.events.trigger("popup.tab",[e]))return!1;var n=e.which,r=c.find(":focus:first");if(be.FE.KEYCODE.TAB==n){e.preventDefault();var i=c.children().not(".fr-buttons"),a=i.find("input, textarea, button, select").filter(":visible").not(".fr-no-touch input, .fr-no-touch textarea, .fr-no-touch button, .fr-no-touch select, :disabled").toArray(),o=a.indexOf(this)+(e.shiftKey?-1:1);if(0<=o&&o<a.length)return t.events.disableBlur(),be(a[o]).focus(),e.stopPropagation(),!1;var s=c.find(".fr-buttons");if(s.length&&p(s,!!e.shiftKey))return e.stopPropagation(),!1;if(u(i))return e.stopPropagation(),!1}else{if(be.FE.KEYCODE.ENTER!=n||!e.target||"TEXTAREA"===e.target.tagName)return be.FE.KEYCODE.ESC==n?(e.preventDefault(),e.stopPropagation(),t.accessibility.restoreSelection(),t.popups.isVisible(d)&&c.find(".fr-back:visible").length?(t.opts.toolbarInline&&(t.events.disableBlur(),t.events.focus()),t.button.exec(c.find(".fr-back:visible:first")),E(c)):t.popups.isVisible(d)&&c.find(".fr-dismiss:visible").length?t.button.exec(c.find(".fr-dismiss:visible:first")):(t.popups.hide(d),t.opts.toolbarInline&&t.toolbar.showInline(null,!0),E(c)),!1):be.FE.KEYCODE.SPACE==n&&(r.is(".fr-submit")||r.is(".fr-dismiss"))?(e.preventDefault(),e.stopPropagation(),t.events.disableBlur(),t.button.exec(r),!0):t.keys.isBrowserAction(e)?void e.stopPropagation():r.is("input[type=text], textarea")?void e.stopPropagation():be.FE.KEYCODE.SPACE==n&&(r.is(".fr-link-attr")||r.is("input[type=file]"))?void e.stopPropagation():(e.stopPropagation(),e.preventDefault(),!1);var l=null;0<c.find(".fr-submit:visible").length?l=c.find(".fr-submit:visible:first"):c.find(".fr-dismiss:visible").length&&(l=c.find(".fr-dismiss:visible:first")),l&&(e.preventDefault(),e.stopPropagation(),t.events.disableBlur(),t.button.exec(l))}},_tiMouseenter:function(){var e=c.data("instance")||f;i(e)}});r(t.find(".fr-buttons")),f.events.$on(t,"mouseenter","tabIndex",n._tiMouseenter,!0),f.events.$on(t.children().not(".fr-buttons"),"keydown","[tabIndex]",n._tiKeydown,!0),f.popups.onHide(e,function(){(t.data("instance")||f).accessibility.restoreSelection()}),f.popups.onShow(e,function(){a=!1,setTimeout(function(){a=!0},0)})},registerToolbar:r,focusToolbarElement:s,focusToolbar:p,focusContent:u,focusPopup:function(r){var i=r.children().not(".fr-buttons");i.data("mouseenter-event-set")||(f.events.$on(i,"mouseenter","[tabIndex]",function(e){var t=r.data("instance")||f;if(!a)return e.stopPropagation(),void e.preventDefault();var n=i.find(":focus:first");n.length&&!n.is("input, button, textarea, select")&&(t.events.disableBlur(),n.blur(),t.events.disableBlur(),t.events.focus())}),i.data("mouseenter-event-set",!0)),!u(i)&&f.shared.with_kb&&p(r.find(".fr-buttons"))},focusModal:function(e){f.core.hasFocus()||(f.events.disableBlur(),f.events.focus()),f.accessibility.saveSelection(),f.events.disableBlur(),f.$el.blur(),f.selection.clear(),f.events.disableBlur(),f.shared.with_kb?e.find(".fr-command[tabIndex], [tabIndex]").first().focus():e.find("[tabIndex]:first").focus()},focusEditor:v,focusPopupButton:E,focusModalButton:function(e){var t=e.data("modal-button");t&&setTimeout(function(){s(t),e.data("modal-button",null)},0)},hasFocus:function(){return null!=f.shared.$f_el},exec:function(e,t){var n=-1!=navigator.userAgent.indexOf("Mac OS X")?e.metaKey:e.ctrlKey,r=e.which,i=!1;return r!=be.FE.KEYCODE.TAB||n||e.shiftKey||e.altKey?r!=be.FE.KEYCODE.ARROW_RIGHT||n||e.shiftKey||e.altKey?r!=be.FE.KEYCODE.TAB||n||!e.shiftKey||e.altKey?r!=be.FE.KEYCODE.ARROW_LEFT||n||e.shiftKey||e.altKey?r!=be.FE.KEYCODE.ARROW_UP||n||e.shiftKey||e.altKey?r!=be.FE.KEYCODE.ARROW_DOWN||n||e.shiftKey||e.altKey?r!=be.FE.KEYCODE.ENTER&&r!=be.FE.KEYCODE.SPACE||n||e.shiftKey||e.altKey?r!=be.FE.KEYCODE.ESC||n||e.shiftKey||e.altKey?r!=be.FE.KEYCODE.F10||n||e.shiftKey||!e.altKey||(i=l()):i=function(e){if(f.shared.$f_el){var t=d();return t?(f.button.click(t),s(t)):e.parent().find(".fr-back:visible").length?(f.shared.with_kb=!1,f.opts.toolbarInline&&(f.events.disableBlur(),f.events.focus()),f.button.exec(e.parent().find(".fr-back:visible:first")),E(e.parent())):f.shared.$f_el.is("button, .fr-group span")&&(e.parent().is(".fr-popup")?(f.accessibility.restoreSelection(),f.shared.$f_el=null,!1!==f.events.trigger("toolbar.esc")&&(f.popups.hide(e.parent()),f.opts.toolbarInline&&f.toolbar.showInline(null,!0),E(e.parent()))):v()),!1}}(t):i=m():i=f.shared.$f_el&&f.shared.$f_el.is(".fr-dropdown:not(.fr-active)")?m():g(!0):i=g():i=h(t):i=h(t,!0):i=c(t):i=c(t,!0),f.shared.$f_el||i!==undefined||(i=!0),!i&&f.keys.isBrowserAction(e)&&(i=!0),!!i||(e.preventDefault(),e.stopPropagation(),!1)},saveSelection:t,restoreSelection:function(){f.$el.find(".fr-marker").length&&(f.events.disableBlur(),f.selection.restore(),f.events.enableBlur())}}},be.FE.MODULES.format=function(g){function l(e,t){var n="<"+e;for(var r in t)t.hasOwnProperty(r)&&(n+=" "+r+'="'+t[r]+'"');return n+=">"}function f(e,t){var n=e;for(var r in t)t.hasOwnProperty(r)&&(n+="id"==r?"#"+t[r]:"class"==r?"."+t[r]:"["+r+'="'+t[r]+'"]');return n}function p(e,t){return!(!e||e.nodeType!=Node.ELEMENT_NODE)&&(e.matches||e.matchesSelector||e.msMatchesSelector||e.mozMatchesSelector||e.webkitMatchesSelector||e.oMatchesSelector).call(e,t)}function m(e,t,n){if(e){for(;e.nodeType===Node.COMMENT_NODE;)e=e.nextSibling;if(e){if(g.node.isBlock(e)&&"HR"!==e.tagName)return m(e.firstChild,t,n),!1;for(var r=be(l(t,n)).insertBefore(e),i=e;i&&!be(i).is(".fr-marker")&&0===be(i).find(".fr-marker").length&&"UL"!=i.tagName&&"OL"!=i.tagName;){var a=i;i=i.nextSibling,r.append(a)}if(i)(be(i).find(".fr-marker").length||"UL"==i.tagName||"OL"==i.tagName)&&m(i.firstChild,t,n);else{for(var o=r.get(0).parentNode;o&&!o.nextSibling&&!g.node.isElement(o);)o=o.parentNode;if(o){var s=o.nextSibling;s&&(g.node.isBlock(s)?"HR"===s.tagName?m(s.nextSibling,t,n):m(s.firstChild,t,n):m(s,t,n))}}r.is(":empty")&&r.remove()}}}function n(e,t){var n;if(void 0===t&&(t={}),t.style&&delete t.style,g.selection.isCollapsed()){g.markers.insert(),g.$el.find(".fr-marker").replaceWith(l(e,t)+be.FE.INVISIBLE_SPACE+be.FE.MARKERS+("</"+e+">")),g.selection.restore()}else{var r;g.selection.save(),m(g.$el.find('.fr-marker[data-type="true"]').get(0).nextSibling,e,t);do{for(r=g.$el.find(f(e,t)+" > "+f(e,t)),n=0;n<r.length;n++)r[n].outerHTML=r[n].innerHTML}while(r.length);g.el.normalize();var i=g.el.querySelectorAll(".fr-marker");for(n=0;n<i.length;n++){var a=be(i[n]);!0===a.data("type")?p(a.get(0).nextSibling,f(e,t))&&a.next().prepend(a):p(a.get(0).previousSibling,f(e,t))&&a.prev().append(a)}g.selection.restore()}}function v(e,t,n,r){if(!r){var i=!1;if(!0===e.data("type"))for(;g.node.isFirstSibling(e.get(0))&&!e.parent().is(g.$el)&&!e.parent().is("ol")&&!e.parent().is("ul");)e.parent().before(e),i=!0;else if(!1===e.data("type"))for(;g.node.isLastSibling(e.get(0))&&!e.parent().is(g.$el)&&!e.parent().is("ol")&&!e.parent().is("ul");)e.parent().after(e),i=!0;if(i)return!0}if(e.parents(t).length||void 0===t){var a="",o="",s=e.parent();if(s.is(g.$el)||g.node.isBlock(s.get(0)))return!1;for(;!g.node.isBlock(s.parent().get(0))&&(void 0===t||void 0!==t&&!p(s.get(0),f(t,n)));)a+=g.node.closeTagString(s.get(0)),o=g.node.openTagString(s.get(0))+o,s=s.parent();var l=e.get(0).outerHTML;e.replaceWith('<span id="mark"></span>');var d=s.html().replace(/<span id="mark"><\/span>/,a+g.node.closeTagString(s.get(0))+o+l+a+g.node.openTagString(s.get(0))+o);return s.replaceWith(g.node.openTagString(s.get(0))+d+g.node.closeTagString(s.get(0))),!0}return!1}function r(t,n){void 0===n&&(n={}),n.style&&delete n.style;var r=g.selection.isCollapsed();g.selection.save();for(var i=!0;i;){i=!1;for(var a=g.$el.find(".fr-marker"),o=0;o<a.length;o++){var s=be(a[o]),l=null;if(s.attr("data-cloned")||r||(l=s.clone().removeClass("fr-marker").addClass("fr-clone"),!0===s.data("type")?s.attr("data-cloned",!0).after(l):s.attr("data-cloned",!0).before(l)),v(s,t,n,r)){i=!0;break}}}!function e(t,n,r,i){for(var a=g.node.contents(t.get(0)),o=0;o<a.length;o++){var s=a[o];if(g.node.hasClass(s,"fr-marker"))n=(n+1)%2;else if(n)if(0<be(s).find(".fr-marker").length)n=e(be(s),n,r,i);else{for(var l=be(s).find(r||"*:not(a):not(br)"),d=l.length-1;0<=d;d--){var c=l[d];g.node.isBlock(c)||g.node.isVoid(c)||void 0!==r&&!p(c,f(r,i))?g.node.isBlock(c)&&void 0===r&&"TABLE"!=s.tagName&&g.node.clearAttributes(c):g.node.hasClass(c,"fr-clone")||(c.outerHTML=c.innerHTML)}void 0===r&&s.nodeType==Node.ELEMENT_NODE&&!g.node.isVoid(s)||p(s,f(r,i))?be(s).replaceWith(s.innerHTML):void 0===r&&s.nodeType==Node.ELEMENT_NODE&&g.node.isBlock(s)&&"TABLE"!=s.tagName&&g.node.clearAttributes(s)}else 0<be(s).find(".fr-marker").length&&(n=e(be(s),n,r,i))}return n}(g.$el,0,t,n),r||(g.$el.find(".fr-marker").remove(),g.$el.find(".fr-clone").removeClass("fr-clone").addClass("fr-marker")),r&&g.$el.find(".fr-marker").before(be.FE.INVISIBLE_SPACE).after(be.FE.INVISIBLE_SPACE),g.html.cleanEmptyTags(),g.el.normalize(),g.selection.restore()}function t(e,t){var n,r,i,a,o,s=null;if(g.selection.isCollapsed()){g.markers.insert();var l=(r=g.$el.find(".fr-marker")).parent();if(g.node.openTagString(l.get(0))=='<span style="'+e+": "+l.css(e)+';">'){if(g.node.isEmpty(l.get(0)))s=be('<span style="'+e+": "+t+';">'+be.FE.INVISIBLE_SPACE+be.FE.MARKERS+"</span>"),l.replaceWith(s);else{var d={};d["style*"]=e+":",v(r,"span",d,!0),r=g.$el.find(".fr-marker"),t?(s=be('<span style="'+e+": "+t+';">'+be.FE.INVISIBLE_SPACE+be.FE.MARKERS+"</span>"),r.replaceWith(s)):r.replaceWith(be.FE.INVISIBLE_SPACE+be.FE.MARKERS)}g.html.cleanEmptyTags()}else g.node.isEmpty(l.get(0))&&l.is("span")?(r.replaceWith(be.FE.MARKERS),l.css(e,t)):(s=be('<span style="'+e+": "+t+';">'+be.FE.INVISIBLE_SPACE+be.FE.MARKERS+"</span>"),r.replaceWith(s));s&&E(s,e,t)}else{if(g.selection.save(),null==t||"color"==e&&0<g.$el.find(".fr-marker").parents("u, a").length){var c=g.$el.find(".fr-marker");for(n=0;n<c.length;n++)if(!0===(r=be(c[n])).data("type"))for(;g.node.isFirstSibling(r.get(0))&&!r.parent().is(g.$el)&&!g.node.isElement(r.parent().get(0))&&!g.node.isBlock(r.parent().get(0));)r.parent().before(r);else for(;g.node.isLastSibling(r.get(0))&&!r.parent().is(g.$el)&&!g.node.isElement(r.parent().get(0))&&!g.node.isBlock(r.parent().get(0));)r.parent().after(r)}var f=g.$el.find('.fr-marker[data-type="true"]').get(0).nextSibling,p={"class":"fr-unprocessed"};for(t&&(p.style=e+": "+t+";"),m(f,"span",p),g.$el.find(".fr-marker + .fr-unprocessed").each(function(){be(this).prepend(be(this).prev())}),g.$el.find(".fr-unprocessed + .fr-marker").each(function(){be(this).prev().append(this)}),(t||"").match(/\dem$/)&&g.$el.find("span.fr-unprocessed").removeClass("fr-unprocessed");0<g.$el.find("span.fr-unprocessed").length;){if((s=g.$el.find("span.fr-unprocessed:first").removeClass("fr-unprocessed")).parent().get(0).normalize(),s.parent().is("span")&&1==s.parent().get(0).childNodes.length){s.parent().css(e,t);var u=s;s=s.parent(),u.replaceWith(u.html())}var h=s.find("span");for(n=h.length-1;0<=n;n--)i=h[n],a=e,o=void 0,(o=be(i)).css(a,""),""===o.attr("style")&&o.replaceWith(o.html());E(s,e,t)}}!function(){var e;for(;0<g.$el.find(".fr-split:empty").length;)g.$el.find(".fr-split:empty").remove();g.$el.find(".fr-split").removeClass("fr-split"),g.$el.find('[style=""]').removeAttr("style"),g.$el.find('[class=""]').removeAttr("class"),g.html.cleanEmptyTags(),be(g.$el.find("span").get().reverse()).each(function(){this.attributes&&0!==this.attributes.length||be(this).replaceWith(this.innerHTML)}),g.el.normalize();var t=g.$el.find("span[style] + span[style]");for(e=0;e<t.length;e++){var n=be(t[e]),r=be(t[e]).prev();n.get(0).previousSibling==r.get(0)&&g.node.openTagString(n.get(0))==g.node.openTagString(r.get(0))&&(n.prepend(r.html()),r.remove())}g.$el.find("span[style] span[style]").each(function(){if(0<=be(this).attr("style").indexOf("font-size")){var e=be(this).parents("span[style]");0<=e.attr("style").indexOf("background-color")&&(be(this).attr("style",be(this).attr("style")+";"+e.attr("style")),v(be(this),"span[style]",{},!1))}}),g.el.normalize(),g.selection.restore()}()}function E(e,t,n){var r,i,a,o=e.parentsUntil(g.$el,"span[style]"),s=[];for(r=o.length-1;0<=r;r--)i=o[r],a=t,0===be(i).attr("style").indexOf(a+":")||0<=be(i).attr("style").indexOf(";"+a+":")||0<=be(i).attr("style").indexOf("; "+a+":")||s.push(o[r]);if((o=o.not(s)).length){for(var l="",d="",c="",f="",p=e.get(0);p=p.parentNode,be(p).addClass("fr-split"),l+=g.node.closeTagString(p),d=g.node.openTagString(be(p).clone().addClass("fr-split").get(0))+d,o.get(0)!=p&&(c+=g.node.closeTagString(p),f=g.node.openTagString(be(p).clone().addClass("fr-split").get(0))+f),o.get(0)!=p;);var u=l+g.node.openTagString(be(o.get(0)).clone().css(t,n||"").get(0))+f+e.css(t,"").get(0).outerHTML+c+"</span>"+d;e.replaceWith('<span id="fr-break"></span>');var h=o.get(0).outerHTML;be(o.get(0)).replaceWith(h.replace(/<span id="fr-break"><\/span>/g,u))}}function i(e,t){void 0===t&&(t={}),t.style&&delete t.style;var n=g.selection.ranges(0),r=n.startContainer;if(r.nodeType==Node.ELEMENT_NODE&&0<r.childNodes.length&&r.childNodes[n.startOffset]&&(r=r.childNodes[n.startOffset]),!n.collapsed&&r.nodeType==Node.TEXT_NODE&&n.startOffset==(r.textContent||"").length){for(;!g.node.isBlock(r.parentNode)&&!r.nextSibling;)r=r.parentNode;r.nextSibling&&(r=r.nextSibling)}for(var i=r;i&&i.nodeType==Node.ELEMENT_NODE&&!p(i,f(e,t));)i=i.firstChild;if(i&&i.nodeType==Node.ELEMENT_NODE&&p(i,f(e,t)))return!0;var a=r;for(a&&a.nodeType!=Node.ELEMENT_NODE&&(a=a.parentNode);a&&a.nodeType==Node.ELEMENT_NODE&&a!=g.el&&!p(a,f(e,t));)a=a.parentNode;return!(!a||a.nodeType!=Node.ELEMENT_NODE||a==g.el||!p(a,f(e,t)))}return{is:i,toggle:function(e,t){i(e,t)?r(e,t):n(e,t)},apply:n,remove:r,applyStyle:t,removeStyle:function(e){t(e,null)}}},be.extend(be.FE.DEFAULTS,{indentMargin:20}),be.FE.COMMANDS={bold:{title:"Bold",toggle:!0,refresh:function(e){var t=this.format.is("strong");e.toggleClass("fr-active",t).attr("aria-pressed",t)}},italic:{title:"Italic",toggle:!0,refresh:function(e){var t=this.format.is("em");e.toggleClass("fr-active",t).attr("aria-pressed",t)}},underline:{title:"Underline",toggle:!0,refresh:function(e){var t=this.format.is("u");e.toggleClass("fr-active",t).attr("aria-pressed",t)}},strikeThrough:{title:"Strikethrough",toggle:!0,refresh:function(e){var t=this.format.is("s");e.toggleClass("fr-active",t).attr("aria-pressed",t)}},subscript:{title:"Subscript",toggle:!0,refresh:function(e){var t=this.format.is("sub");e.toggleClass("fr-active",t).attr("aria-pressed",t)}},superscript:{title:"Superscript",toggle:!0,refresh:function(e){var t=this.format.is("sup");e.toggleClass("fr-active",t).attr("aria-pressed",t)}},outdent:{title:"Decrease Indent"},indent:{title:"Increase Indent"},undo:{title:"Undo",undo:!1,forcedRefresh:!0,disabled:!0},redo:{title:"Redo",undo:!1,forcedRefresh:!0,disabled:!0},insertHR:{title:"Insert Horizontal Line"},clearFormatting:{title:"Clear Formatting"},selectAll:{title:"Select All",undo:!1}},be.FE.RegisterCommand=function(e,t){be.FE.COMMANDS[e]=t},be.FE.MODULES.commands=function(o){function i(e){return o.html.defaultTag()&&(e="<"+o.html.defaultTag()+">"+e+"</"+o.html.defaultTag()+">"),e}var a={bold:function(){e("bold","strong")},subscript:function(){o.format.is("sup")&&o.format.remove("sup"),e("subscript","sub")},superscript:function(){o.format.is("sub")&&o.format.remove("sub"),e("superscript","sup")},italic:function(){e("italic","em")},strikeThrough:function(){e("strikeThrough","s")},underline:function(){e("underline","u")},undo:function(){o.undo.run()},redo:function(){o.undo.redo()},indent:function(){n(1)},outdent:function(){n(-1)},show:function(){o.opts.toolbarInline&&o.toolbar.showInline(null,!0)},insertHR:function(){o.selection.remove();var e="";o.core.isEmpty()&&(e=i(e="<br>")),o.html.insert('<hr id="fr-just">'+e);var t,n=o.$el.find("hr#fr-just");if(n.removeAttr("id"),0===n.next().length){var r=o.html.defaultTag();r?n.after(be("<"+r+">").append("<br>")):n.after("<br>")}n.prev().is("hr")?t=o.selection.setAfter(n.get(0),!1):n.next().is("hr")?t=o.selection.setBefore(n.get(0),!1):o.selection.setAfter(n.get(0),!1)||o.selection.setBefore(n.get(0),!1),t||void 0===t||(e=i(e=be.FE.MARKERS+"<br>"),n.after(e)),o.selection.restore()},clearFormatting:function(){o.format.remove()},selectAll:function(){o.doc.execCommand("selectAll",!1,!1)}};function t(e,t){if(!1!==o.events.trigger("commands.before",be.merge([e],t||[]))){var n=be.FE.COMMANDS[e]&&be.FE.COMMANDS[e].callback||a[e],r=!0,i=!1;be.FE.COMMANDS[e]&&("undefined"!=typeof be.FE.COMMANDS[e].focus&&(r=be.FE.COMMANDS[e].focus),"undefined"!=typeof be.FE.COMMANDS[e].accessibilityFocus&&(i=be.FE.COMMANDS[e].accessibilityFocus)),(!o.core.hasFocus()&&r&&!o.popups.areVisible()||!o.core.hasFocus()&&i&&o.accessibility.hasFocus())&&o.events.focus(!0),be.FE.COMMANDS[e]&&!1!==be.FE.COMMANDS[e].undo&&(o.$el.find(".fr-marker").length&&(o.events.disableBlur(),o.selection.restore()),o.undo.saveStep()),n&&n.apply(o,be.merge([e],t||[])),o.events.trigger("commands.after",be.merge([e],t||[])),be.FE.COMMANDS[e]&&!1!==be.FE.COMMANDS[e].undo&&o.undo.saveStep()}}function e(e,t){o.format.toggle(t)}function n(e){o.selection.save(),o.html.wrap(!0,!0,!0,!0),o.selection.restore();for(var t=o.selection.blocks(),n=0;n<t.length;n++)if("LI"!=t[n].tagName&&"LI"!=t[n].parentNode.tagName){var r=be(t[n]),i="rtl"==o.opts.direction||"rtl"==r.css("direction")?"margin-right":"margin-left",a=o.helpers.getPX(r.css(i));if(r.width()<2*o.opts.indentMargin&&0<e)continue;r.css(i,Math.max(a+e*o.opts.indentMargin,0)||""),r.removeClass("fr-temp-div")}o.selection.save(),o.html.unwrap(),o.selection.restore()}function r(e){return function(){t(e)}}var s={};for(var l in a)a.hasOwnProperty(l)&&(s[l]=r(l));return be.extend(s,{exec:t,_init:function(){o.events.on("keydown",function(e){var t=o.selection.element();if(t&&"HR"==t.tagName&&!o.keys.isArrow(e.which))return e.preventDefault(),!1}),o.events.on("keyup",function(e){var t=o.selection.element();if(t&&"HR"==t.tagName)if(e.which==be.FE.KEYCODE.ARROW_LEFT||e.which==be.FE.KEYCODE.ARROW_UP){if(t.previousSibling)return o.node.isBlock(t.previousSibling)?o.selection.setAtEnd(t.previousSibling):be(t).before(be.FE.MARKERS),o.selection.restore(),!1}else if((e.which==be.FE.KEYCODE.ARROW_RIGHT||e.which==be.FE.KEYCODE.ARROW_DOWN)&&t.nextSibling)return o.node.isBlock(t.nextSibling)?o.selection.setAtStart(t.nextSibling):be(t).after(be.FE.MARKERS),o.selection.restore(),!1}),o.events.on("mousedown",function(e){if(e.target&&"HR"==e.target.tagName)return e.preventDefault(),e.stopPropagation(),!1}),o.events.on("mouseup",function(){var e=o.selection.element();e==o.selection.endElement()&&e&&"HR"==e.tagName&&(e.nextSibling&&(o.node.isBlock(e.nextSibling)?o.selection.setAtStart(e.nextSibling):be(e).after(be.FE.MARKERS)),o.selection.restore())})}})},be.FE.MODULES.data=function(f){var p="NCKB1zwtPA9tqzajXC2c2A7B-16VD3spzJ1C9C3D5oOF2OB1NB1LD7VA5QF4TE3gytXB2A4C-8VA2AC4E1D3GB2EB2KC3KD1MF1juuSB1A8C6yfbmd1B2a1A5qdsdB2tivbC3CB1KC1CH1eLA2sTF1B4I4H-7B-21UB6b1F5bzzzyAB4JC3MG2hjdKC1JE6C1E1cj1pD-16pUE5B4prra2B5ZB3D3C3pxj1EA6A3rnJA2C-7I-7JD9D1E1wYH1F3sTB5TA2G4H4ZA22qZA5BB3mjcvcCC3JB1xillavC-21VE6PC5SI4YC5C8mb1A3WC3BD2B5aoDA2qqAE3A5D-17fOD1D5RD4WC10tE6OAZC3nF-7b1C4A4D3qCF2fgmapcromlHA2QA6a1E1D3e1A6C2bie2F4iddnIA7B2mvnwcIB5OA1DB2OLQA3PB10WC7WC5d1E3uI-7b1D5D6b1E4D2arlAA4EA1F-11srxI-7MB1D7PF1E5B4adB-21YD5vrZH3D3xAC4E1A2GF2CF2J-7yNC2JE1MI2hH-7QB1C6B5B-9bA-7XB13a1B5VievwpKB4LA3NF-10H-9I-8hhaC-16nqPG4wsleTD5zqYF3h1G2B7B4yvGE2Pi1H-7C-21OE6B1uLD1kI4WC1E7C5g1D-8fue1C8C6c1D4D3Hpi1CC4kvGC2E1legallyXB4axVA11rsA4A-9nkdtlmzBA2GD3A13A6CB1dabE1lezrUE6RD5TB4A-7f1C8c1B5d1D4D3tyfCD5C2D2==",u=function(){for(var e=0,t=document.domain,n=t.split("."),r="_gd"+(new Date).getTime();e<n.length-1&&-1==document.cookie.indexOf(r+"="+r);)t=n.slice(-1-++e).join("."),document.cookie=r+"="+r+";domain="+t+";";return document.cookie=r+"=;expires=Thu, 01 Jan 1970 00:00:01 GMT;domain="+t+";",(t||"").replace(/(^\.*)|(\.*$)/g,"")}();function h(e){return e}var g,m,v=h(function(e){if(!e)return e;for(var t="",n=h("charCodeAt"),r=h("fromCharCode"),i="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".indexOf(e[0]),a=1;a<e.length-2;a++){for(var o=d(++i),s=e[n](a),l="";/[0-9-]/.test(e[a+1]);)l+=e[++a];s=E(s,o,l=parseInt(l,10)||0),s^=i-1&31,t+=String[r](s)}return t});function d(e){for(var t=e.toString(),n=0,r=0;r<t.length;r++)n+=parseInt(t.charAt(r),10);return 10<n?n%9+1:n}function E(e,t,n){for(var r=Math.abs(n);0<r--;)e-=t;return n<0&&(e+=123),e}function b(e){return!(!e||"block"===e.css("display")||(e.remove(),0))}function T(e){return e&&0===f.$box.find(e).length}var e=0;function A(){if(10<e&&(f[h(v("0ppecjvc=="))](),setTimeout(function(){be.FE=null},10)),!f.$box)return!1;f.$wp.prepend(v(h(v(p)))),g=f.$wp.find("> div:first"),m=g.find("> a"),"rtl"==f.opts.direction&&g.css("left","auto").css("right",0).attr("direction","rtl"),e++}function C(e){for(var t=[v("9qqG-7amjlwq=="),v("KA3B3C2A6D1D5H5H1A3=="),v("3B9B3B5F3C4G3E3=="),v("QzbzvxyB2yA-9m=="),v("ji1kacwmgG5bc=="),v("nmA-13aogi1A3c1jd==")],n=0;n<t.length;n++)if(String.prototype.endsWith||(String.prototype.endsWith=function(e,t){return(t===undefined||t>this.length)&&(t=this.length),this.substring(t-e.length,t)===e}),e.endsWith(t[n]))return!0;return!1}return{_init:function(){var e=f.o_win.FEK;try{e=e||localStorage&&localStorage.FEK}catch(E){}e=f.opts.key||e||[""];var t=v(h("ziRA1E3B9pA5B-11D-11xg1A3ZB5D1D4B-11ED2EG2pdeoC1clIH4wB-22yQD5uF4YE3E3A9=="));"string"==typeof e&&(e=[e]);for(var n,r,i,a=!(f.ul=!0),o=0,s=0;s<e.length;s++){var l=(r=e[s],3===(i=(v(r)||"").split("|")).length?i:[null,null,v(r)||""]),d=l[2];if(d===v(h(v("mcVRDoB1BGILD7YFe1BTXBA7B6==")))||0<=d.indexOf(u,d.length-u.length)||C(u)){if(!((null===(n=l[1])||new Date(n)<new Date(v("lC4B3B3D4B5A1E1E4I1A1==")))&&0<(u||"").length)||C(u)){f.ul=!1;break}a=!0,p="RCZB17botVG4A-8yzia1C4A5DG3CD2cFB4qflmCE4I2FB1SC7F6PE4WE3RD6e2A4c1D3d1E2E3ehxdGE3CE2IB2LC1HG2LE1QA3QC7B-13cC-9epmkjc1B4e1C4pgjgvkOC5E1eNE1HB2LD2B-13WD5tvabUA5a1A4f1A2G3C2A-21cihKE3FE2DB2cccJE1iC-7G-7tD-17tVD6A-9qC-7QC7a1E4B4je1E3E2G2ecmsAA1xH-8HB11C1D1lgzQA3dTB8od1D4XE3ohb1B4E4D3mbLA10NA7C-21d1genodKC11PD9PE5tA-8UI3ZC5XB5B-11qXF2F-7wtwjAG3NA1IB1OD1HC1RD4QJ4evUF2D5XG2G4XA8pqocH1F3G2J2hcpHC4D1MD4C1MB8PD5klcQD1A8A6e2A3ed1E2A24A7HC5C3qA-9tiA-61dcC3MD1LE1D4SA3A9ZZXSE4g1C3Pa2C5ufbcGI3I2B4skLF2CA1vxB-22wgUC4kdH-8cVB5iwe1A2D3H3G-7DD5JC2ED2OH2JB10D3C2xHE1KA29PB11wdC-11C4cixb2C7a1C4YYE3B2A15uB-21wpCA1MF1NuC-21dyzD6pPG4I-7pmjc1A4yte1F3B-22yvCC3VbC-7qC-22qNE2hC1vH-8zad1RF6WF3DpI-7C8A-16hpf1F3D2ylalB-13BB2lpA-63IB3uOF6D5G4gabC-21UD2A3PH4ZA20B11b2C6ED4A2H3I1A15DB4KD2laC-8LA5B8B7==",o=l[0]||-1}}var c=new Image;!0===f.ul&&(A(),c.src=a?h(v(t))+"e="+o:h(v(t))+"u"),!0===f.ul&&f.events.on("contentChanged",function(){(b(g)||b(m)||T(g)||T(m))&&A()}),f.events.on("destroy",function(){g&&g.length&&g.remove()},!0)}}},be.extend(be.FE.DEFAULTS,{pastePlain:!1,pasteDeniedTags:["colgroup","col","meta"],pasteDeniedAttrs:["class","id","style"],pasteAllowedStyleProps:[".*"],pasteAllowLocalImages:!1}),be.FE.MODULES.paste=function(b){var o,s,i,T;function n(e,t){try{b.win.localStorage.setItem("fr-copied-html",e),b.win.localStorage.setItem("fr-copied-text",t)}catch(n){}}function e(e){var t=b.html.getSelected();n(t,be("<div>").html(t).text()),"cut"==e.type&&(b.undo.saveStep(),setTimeout(function(){b.selection.save(),b.html.wrap(),b.selection.restore(),b.events.focus(),b.undo.saveStep()},0))}var a=!1;function t(e){if(a)return!1;if(e.originalEvent&&(e=e.originalEvent),!1===b.events.trigger("paste.before",[e]))return e.preventDefault(),!1;if(b.$win.scrollTop(),e&&e.clipboardData&&e.clipboardData.getData){var t="",n=e.clipboardData.types;if(b.helpers.isArray(n))for(var r=0;r<n.length;r++)t+=n[r]+";";else t=n;if(o="",/text\/rtf/.test(t)&&(s=e.clipboardData.getData("text/rtf")),/text\/html/.test(t)&&!b.browser.safari?o=e.clipboardData.getData("text/html"):/text\/rtf/.test(t)&&b.browser.safari?o=s:/public.rtf/.test(t)&&b.browser.safari&&(o=e.clipboardData.getData("text/rtf")),""!==o)return l(),e.preventDefault&&(e.stopPropagation(),e.preventDefault()),!1;o=null}return function(){b.selection.save(),b.events.disableBlur(),o=null,i?(i.html(""),b.browser.edge&&b.opts.iframe&&b.$el.append(i)):(i=be('<div contenteditable="true" style="position: fixed; top: 0; left: -9999px; height: 100%; width: 0; word-break: break-all; overflow:hidden; z-index: 2147483647; line-height: 140%; -moz-user-select: text; -webkit-user-select: text; -ms-user-select: text; user-select: text;" tabIndex="-1"></div>'),b.browser.webkit?(i.css("top",b.$sc.scrollTop()),b.$el.after(i)):b.browser.edge&&b.opts.iframe?b.$el.append(i):b.$box.after(i),b.events.on("destroy",function(){i.remove()}));i.focus(),b.win.setTimeout(l,1)}(),!1}function r(e){if(e.originalEvent&&(e=e.originalEvent),e&&e.dataTransfer&&e.dataTransfer.getData){var t="",n=e.dataTransfer.types;if(b.helpers.isArray(n))for(var r=0;r<n.length;r++)t+=n[r]+";";else t=n;if(o="",/text\/rtf/.test(t)&&(s=e.dataTransfer.getData("text/rtf")),/text\/html/.test(t)?o=e.dataTransfer.getData("text/html"):/text\/rtf/.test(t)&&b.browser.safari?o=s:/text\/plain/.test(t)&&!this.browser.mozilla&&(o=b.html.escapeEntities(e.dataTransfer.getData("text/plain")).replace(/\n/g,"<br>")),""!==o){b.keys.forceUndo(),T=b.snapshot.get(),b.selection.save(),b.$el.find(".fr-marker").removeClass("fr-marker").addClass("fr-marker-helper");var i=b.markers.insertAtPoint(e);if(b.$el.find(".fr-marker").removeClass("fr-marker").addClass("fr-marker-placeholder"),b.$el.find(".fr-marker-helper").addClass("fr-marker").removeClass("fr-marker-helper"),b.selection.restore(),b.selection.remove(),b.$el.find(".fr-marker-placeholder").addClass("fr-marker").removeClass("fr-marker-placeholder"),!1!==i){var a=b.el.querySelector(".fr-marker");return be(a).replaceWith(be.FE.MARKERS),b.selection.restore(),l(),e.preventDefault&&(e.stopPropagation(),e.preventDefault()),!1}}else o=null}}function l(){b.browser.edge&&b.opts.iframe&&b.$box.after(i),T||(b.keys.forceUndo(),T=b.snapshot.get()),o||(o=i.get(0).innerHTML,b.selection.restore(),b.events.enableBlur());var e=o.match(/(class=\"?Mso|class=\'?Mso|class="?Xl|class='?Xl|class=Xl|style=\"[^\"]*\bmso\-|style=\'[^\']*\bmso\-|w:WordDocument)/gi),t=b.events.chainTrigger("paste.beforeCleanup",o);t&&"string"==typeof t&&(o=t),(!e||e&&!1!==b.events.trigger("paste.wordPaste",[o]))&&d(o,e)}function A(e){for(var t="",n=0;n++<e;)t+="&nbsp;";return t}function d(e,t,n){var r,i=null,a=null;if(0<=e.toLowerCase().indexOf("<body")){var o="";0<=e.indexOf("<style")&&(o=e.replace(/[.\s\S\w\W<>]*(<style[^>]*>[\s]*[.\s\S\w\W<>]*[\s]*<\/style>)[.\s\S\w\W<>]*/gi,"$1")),e=(e=o+e.replace(/[.\s\S\w\W<>]*<body[^>]*>[\s]*([.\s\S\w\W<>]*)[\s]*<\/body>[.\s\S\w\W<>]*/gi,"$1")).replace(/ \n/g," ").replace(/\n /g," ").replace(/([^>])\n([^<])/g,"$1 $2")}var s=!1;0<=e.indexOf('id="docs-internal-guid')&&(e=e.replace(/^[\w\W\s\S]* id="docs-internal-guid[^>]*>([\w\W\s\S]*)<\/b>[\w\W\s\S]*$/g,"$1"),s=!0),0<=e.indexOf('content="Sheets"')&&(e=e.replace(/width:0px;/g,""));var l=!1;if(!t&&((l=function(e){var t=null;try{t=b.win.localStorage.getItem("fr-copied-text")}catch(n){}return!(!t||be("<div>").html(e).text().replace(/\u00A0/gi," ").replace(/\r|\n/gi,"")!=t.replace(/\u00A0/gi," ").replace(/\r|\n/gi,""))}(e))&&(e=b.win.localStorage.getItem("fr-copied-html")),!l)){var d=b.opts.htmlAllowedStyleProps;b.opts.htmlAllowedStyleProps=b.opts.pasteAllowedStyleProps,b.opts.htmlAllowComments=!1,e=(e=(e=e.replace(/<span class="Apple-tab-span">\s*<\/span>/g,A(b.opts.tabSpaces||4))).replace(/<span class="Apple-tab-span" style="white-space:pre">(\t*)<\/span>/g,function(e,t){return A(t.length*(b.opts.tabSpaces||4))})).replace(/\t/g,A(b.opts.tabSpaces||4)),e=b.clean.html(e,b.opts.pasteDeniedTags,b.opts.pasteDeniedAttrs),b.opts.htmlAllowedStyleProps=d,b.opts.htmlAllowComments=!0,e=(e=(e=C(e)).replace(/\r/g,"")).replace(/^ */g,"").replace(/ *$/g,"")}!t||b.wordPaste&&n||(0===(e=e.replace(/^\n*/g,"").replace(/^ /g,"")).indexOf("<colgroup>")&&(e="<table>"+e+"</table>"),e=C(e=function(e){var t;e=(e=(e=(e=(e=(e=(e=(e=(e=(e=(e=(e=(e=(e=(e=e.replace(/<p(.*?)class="?'?MsoListParagraph"?'? ([\s\S]*?)>([\s\S]*?)<\/p>/gi,"<ul><li>$3</li></ul>")).replace(/<p(.*?)class="?'?NumberedText"?'? ([\s\S]*?)>([\s\S]*?)<\/p>/gi,"<ol><li>$3</li></ol>")).replace(/<p(.*?)class="?'?MsoListParagraphCxSpFirst"?'?([\s\S]*?)(level\d)?([\s\S]*?)>([\s\S]*?)<\/p>/gi,"<ul><li$3>$5</li>")).replace(/<p(.*?)class="?'?NumberedTextCxSpFirst"?'?([\s\S]*?)(level\d)?([\s\S]*?)>([\s\S]*?)<\/p>/gi,"<ol><li$3>$5</li>")).replace(/<p(.*?)class="?'?MsoListParagraphCxSpMiddle"?'?([\s\S]*?)(level\d)?([\s\S]*?)>([\s\S]*?)<\/p>/gi,"<li$3>$5</li>")).replace(/<p(.*?)class="?'?NumberedTextCxSpMiddle"?'?([\s\S]*?)(level\d)?([\s\S]*?)>([\s\S]*?)<\/p>/gi,"<li$3>$5</li>")).replace(/<p(.*?)class="?'?MsoListBullet"?'?([\s\S]*?)(level\d)?([\s\S]*?)>([\s\S]*?)<\/p>/gi,"<li$3>$5</li>")).replace(/<p(.*?)class="?'?MsoListParagraphCxSpLast"?'?([\s\S]*?)(level\d)?([\s\S]*?)>([\s\S]*?)<\/p>/gi,"<li$3>$5</li></ul>")).replace(/<p(.*?)class="?'?NumberedTextCxSpLast"?'?([\s\S]*?)(level\d)?([\s\S]*?)>([\s\S]*?)<\/p>/gi,"<li$3>$5</li></ol>")).replace(/<span([^<]*?)style="?'?mso-list:Ignore"?'?([\s\S]*?)>([\s\S]*?)<span/gi,"<span><span")).replace(/<!--\[if \!supportLists\]-->([\s\S]*?)<!--\[endif\]-->/gi,"")).replace(/<!\[if \!supportLists\]>([\s\S]*?)<!\[endif\]>/gi,"")).replace(/(\n|\r| class=(")?Mso[a-zA-Z0-9]+(")?)/gi," ")).replace(/<!--[\s\S]*?-->/gi,"")).replace(/<(\/)*(meta|link|span|\\?xml:|st1:|o:|font)(.*?)>/gi,"");var n,r=["style","script","applet","embed","noframes","noscript"];for(t=0;t<r.length;t++){var i=new RegExp("<"+r[t]+".*?"+r[t]+"(.*?)>","gi");e=e.replace(i,"")}for(e=(e=(e=e.replace(/&nbsp;/gi," ")).replace(/<td([^>]*)><\/td>/g,"<td$1><br></td>")).replace(/<th([^>]*)><\/th>/g,"<th$1><br></th>");(e=(n=e).replace(/<[^\/>][^>]*><\/[^>]+>/gi,""))!=n;);e=(e=e.replace(/<lilevel([^1])([^>]*)>/gi,'<li data-indent="true"$2>')).replace(/<lilevel1([^>]*)>/gi,"<li$1>"),e=(e=(e=b.clean.html(e,b.opts.pasteDeniedTags,b.opts.pasteDeniedAttrs)).replace(/<a>(.[^<]+)<\/a>/gi,"$1")).replace(/<br> */g,"<br>");var a=b.o_doc.createElement("div");a.innerHTML=e;var o=a.querySelectorAll("li[data-indent]");for(t=0;t<o.length;t++){var s=o[t],l=s.previousElementSibling;if(l&&"LI"==l.tagName){var d=l.querySelector(":scope > ul, :scope > ol");d||(d=document.createElement("ul"),l.appendChild(d)),d.appendChild(s)}else s.removeAttribute("data-indent")}return b.html.cleanBlankSpaces(a),e=a.innerHTML}(e))),b.opts.pastePlain&&!l&&(e=function(e){var t,n=null,r=b.doc.createElement("div");r.innerHTML=e;var i=r.querySelectorAll("p, div, h1, h2, h3, h4, h5, h6, pre, blockquote");for(t=0;t<i.length;t++)(n=i[t]).outerHTML="<"+(b.html.defaultTag()||"DIV")+">"+n.innerHTML+"</"+(b.html.defaultTag()||"DIV")+">";for(t=(i=r.querySelectorAll("*:not("+"p, div, h1, h2, h3, h4, h5, h6, pre, blockquote, ul, ol, li, table, tbody, thead, tr, td, br, img".split(",").join("):not(")+")")).length-1;0<=t;t--)(n=i[t]).outerHTML=n.innerHTML;var a=function(e){for(var t=b.node.contents(e),n=0;n<t.length;n++)t[n].nodeType!=Node.TEXT_NODE&&t[n].nodeType!=Node.ELEMENT_NODE?t[n].parentNode.removeChild(t[n]):a(t[n])};return a(r),r.innerHTML}(e));var c=b.events.chainTrigger("paste.afterCleanup",e);if("string"==typeof c&&(e=c),""!==e){var f=b.o_doc.createElement("div");0<=(f.innerHTML=e).indexOf("<body>")?(b.html.cleanBlankSpaces(f),b.spaces.normalize(f,!0)):b.spaces.normalize(f);var p=f.getElementsByTagName("span");for(r=p.length-1;0<=r;r--){var u=p[r];0===u.attributes.length&&(u.outerHTML=u.innerHTML)}var h=b.selection.element(),g=!1;if(h&&be(h).parentsUntil(b.el,"ul, ol").length&&(g=!0),g){var m=f.children;1==m.length&&0<=["OL","UL"].indexOf(m[0].tagName)&&(m[0].outerHTML=m[0].innerHTML)}if(!s){var v=f.getElementsByTagName("br");for(r=v.length-1;0<=r;r--){var E=v[r];b.node.isBlock(E.previousSibling)&&E.parentNode.removeChild(E)}}if(b.opts.enter==be.FE.ENTER_BR)for(r=(i=f.querySelectorAll("p, div")).length-1;0<=r;r--)0===(a=i[r]).attributes.length&&(a.outerHTML=a.innerHTML+(a.nextSibling&&!b.node.isEmpty(a)?"<br>":""));else if(b.opts.enter==be.FE.ENTER_DIV)for(r=(i=f.getElementsByTagName("p")).length-1;0<=r;r--)0===(a=i[r]).attributes.length&&(a.outerHTML="<div>"+a.innerHTML+"</div>");else b.opts.enter==be.FE.ENTER_P&&1==f.childNodes.length&&"P"==f.childNodes[0].tagName&&0===f.childNodes[0].attributes.length&&(f.childNodes[0].outerHTML=f.childNodes[0].innerHTML);e=f.innerHTML,l&&(e=function(e){var t,n=b.o_doc.createElement("div");n.innerHTML=e;var r=n.querySelectorAll("*:empty:not(td):not(th):not(tr):not(iframe):not(svg):not("+be.FE.VOID_ELEMENTS.join("):not(")+"):not("+b.opts.htmlAllowedEmptyTags.join("):not(")+")");for(;r.length;){for(t=0;t<r.length;t++)r[t].parentNode.removeChild(r[t]);r=n.querySelectorAll("*:empty:not(td):not(th):not(tr):not(iframe):not(svg):not("+be.FE.VOID_ELEMENTS.join("):not(")+"):not("+b.opts.htmlAllowedEmptyTags.join("):not(")+")")}return n.innerHTML}(e)),b.html.insert(e,!0)}b.events.trigger("paste.after"),b.undo.saveStep(T),T=null,b.undo.saveStep()}function c(e){for(var t=e.length-1;0<=t;t--)e[t].attributes&&e[t].attributes.length&&e.splice(t,1);return e}function C(e){var t,n=b.o_doc.createElement("div");n.innerHTML=e;for(var r=c(Array.prototype.slice.call(n.querySelectorAll(":scope > div:not([style]), td > div:not([style]), th > div:not([style]), li > div:not([style])")));r.length;){var i=r[r.length-1];if(b.html.defaultTag()&&"div"!=b.html.defaultTag())i.querySelector(b.html.blockTagsQuery())?i.outerHTML=i.innerHTML:i.outerHTML="<"+b.html.defaultTag()+">"+i.innerHTML+"</"+b.html.defaultTag()+">";else{var a=i.querySelectorAll("*");!a.length||"BR"!==a[a.length-1].tagName&&0===i.innerText.length?i.outerHTML=i.innerHTML+"<br>":i.outerHTML=i.innerHTML}r=c(Array.prototype.slice.call(n.querySelectorAll(":scope > div:not([style]), td > div:not([style]), th > div:not([style]), li > div:not([style])")))}for(r=c(Array.prototype.slice.call(n.querySelectorAll("div:not([style])")));r.length;){for(t=0;t<r.length;t++){var o=r[t],s=o.innerHTML.replace(/\u0009/gi,"").trim();o.outerHTML=s}r=c(Array.prototype.slice.call(n.querySelectorAll("div:not([style])")))}return n.innerHTML}function f(){b.el.removeEventListener("copy",e),b.el.removeEventListener("cut",e),b.el.removeEventListener("paste",t)}return{_init:function(){b.el.addEventListener("copy",e),b.el.addEventListener("cut",e),b.el.addEventListener("paste",t,{capture:!0}),b.events.on("drop",r),b.browser.msie&&b.browser.version<11&&(b.events.on("mouseup",function(e){2==e.button&&(setTimeout(function(){a=!1},50),a=!0)},!0),b.events.on("beforepaste",t)),b.events.on("destroy",f)},cleanEmptyTagsAndDivs:C,getRtfClipboard:function(){return s},saveCopiedText:n,clean:d}},be.extend(be.FE.DEFAULTS,{shortcutsEnabled:[],shortcutsHint:!0}),be.FE.SHORTCUTS_MAP={},be.FE.RegisterShortcut=function(e,t,n,r,i,a){be.FE.SHORTCUTS_MAP[(i?"^":"")+(a?"@":"")+e]={cmd:t,val:n,letter:r,shift:i,option:a},be.FE.DEFAULTS.shortcutsEnabled.push(t)},be.FE.RegisterShortcut(be.FE.KEYCODE.E,"show",null,"E",!1,!1),be.FE.RegisterShortcut(be.FE.KEYCODE.B,"bold",null,"B",!1,!1),be.FE.RegisterShortcut(be.FE.KEYCODE.I,"italic",null,"I",!1,!1),be.FE.RegisterShortcut(be.FE.KEYCODE.U,"underline",null,"U",!1,!1),be.FE.RegisterShortcut(be.FE.KEYCODE.S,"strikeThrough",null,"S",!1,!1),be.FE.RegisterShortcut(be.FE.KEYCODE.CLOSE_SQUARE_BRACKET,"indent",null,"]",!1,!1),be.FE.RegisterShortcut(be.FE.KEYCODE.OPEN_SQUARE_BRACKET,"outdent",null,"[",!1,!1),be.FE.RegisterShortcut(be.FE.KEYCODE.Z,"undo",null,"Z",!1,!1),be.FE.RegisterShortcut(be.FE.KEYCODE.Z,"redo",null,"Z",!0,!1),be.FE.RegisterShortcut(be.FE.KEYCODE.Y,"redo",null,"Y",!1,!1),be.FE.MODULES.shortcuts=function(s){var r=null;var l=!1;function e(e){if(!s.core.hasFocus())return!0;var t=e.which,n=-1!=navigator.userAgent.indexOf("Mac OS X")?e.metaKey:e.ctrlKey;if("keyup"==e.type&&l&&t!=be.FE.KEYCODE.META)return l=!1;"keydown"==e.type&&(l=!1);var r=(e.shiftKey?"^":"")+(e.altKey?"@":"")+t;if(n&&be.FE.SHORTCUTS_MAP[r]){var i=be.FE.SHORTCUTS_MAP[r].cmd;if(i&&0<=s.opts.shortcutsEnabled.indexOf(i)){var a,o=be.FE.SHORTCUTS_MAP[r].val;if(i&&!o?a=s.$tb.find('.fr-command[data-cmd="'+i+'"]'):i&&o&&(a=s.$tb.find('.fr-command[data-cmd="'+i+'"][data-param1="'+o+'"]')),a.length)return e.preventDefault(),e.stopPropagation(),a.parents(".fr-toolbar").data("instance",s),"keydown"==e.type&&(s.button.exec(a),l=!0),!1;if(i&&(s.commands[i]||be.FE.COMMANDS[i]&&be.FE.COMMANDS[i].callback))return e.preventDefault(),e.stopPropagation(),"keydown"==e.type&&((s.commands[i]||be.FE.COMMANDS[i].callback)(),l=!0),!1}}}return{_init:function(){s.events.on("keydown",e,!0),s.events.on("keyup",e,!0)},get:function(e){if(!s.opts.shortcutsHint)return null;if(!r)for(var t in r={},be.FE.SHORTCUTS_MAP)be.FE.SHORTCUTS_MAP.hasOwnProperty(t)&&0<=s.opts.shortcutsEnabled.indexOf(be.FE.SHORTCUTS_MAP[t].cmd)&&(r[be.FE.SHORTCUTS_MAP[t].cmd+"."+(be.FE.SHORTCUTS_MAP[t].val||"")]={shift:be.FE.SHORTCUTS_MAP[t].shift,option:be.FE.SHORTCUTS_MAP[t].option,letter:be.FE.SHORTCUTS_MAP[t].letter});var n=r[e];return n?(s.helpers.isMac()?String.fromCharCode(8984):s.language.translate("Ctrl")+"+")+(n.shift?s.helpers.isMac()?String.fromCharCode(8679):s.language.translate("Shift")+"+":"")+(n.option?s.helpers.isMac()?String.fromCharCode(8997):s.language.translate("Alt")+"+":"")+n.letter:null}}},be.FE.MODULES.snapshot=function(l){function n(e){for(var t=e.parentNode.childNodes,n=0,r=null,i=0;i<t.length;i++){if(r){var a=t[i].nodeType===Node.TEXT_NODE&&""===t[i].textContent,o=r.nodeType===Node.TEXT_NODE&&t[i].nodeType===Node.TEXT_NODE;a||o||n++}if(t[i]==e)return n;r=t[i]}}function i(e){var t=[];if(!e.parentNode)return[];for(;!l.node.isElement(e);)t.push(n(e)),e=e.parentNode;return t.reverse()}function a(e,t){for(;e&&e.nodeType===Node.TEXT_NODE;){var n=e.previousSibling;n&&n.nodeType==Node.TEXT_NODE&&(t+=n.textContent.length),e=n}return t}function d(e){for(var t=l.el,n=0;n<e.length;n++)t=t.childNodes[e[n]];return t}function r(e,t){try{var n=d(t.scLoc),r=t.scOffset,i=d(t.ecLoc),a=t.ecOffset,o=l.doc.createRange();o.setStart(n,r),o.setEnd(i,a),e.addRange(o)}catch(s){}}return{get:function(){var e,t={};if(l.events.trigger("snapshot.before"),t.html=(l.$wp?l.$el.html():l.$oel.get(0).outerHTML).replace(/ style=""/g,""),t.ranges=[],l.$wp&&l.selection.inEditor()&&l.core.hasFocus())for(var n=l.selection.ranges(),r=0;r<n.length;r++)t.ranges.push({scLoc:i((e=n[r]).startContainer),scOffset:a(e.startContainer,e.startOffset),ecLoc:i(e.endContainer),ecOffset:a(e.endContainer,e.endOffset)});return l.events.trigger("snapshot.after",[t]),t},restore:function(e){l.$el.html()!=e.html&&(l.opts.htmlExecuteScripts?l.$el.html(e.html):l.el.innerHTML=e.html);var t=l.selection.get();l.selection.clear(),l.events.focus(!0);for(var n=0;n<e.ranges.length;n++)r(t,e.ranges[n])},equal:function(e,t){return e.html==t.html&&(!l.core.hasFocus()||JSON.stringify(e.ranges)==JSON.stringify(t.ranges))}}},be.FE.MODULES.undo=function(n){function e(e){var t=e.which;n.keys.ctrlKey(e)&&(90==t&&e.shiftKey&&e.preventDefault(),90==t&&e.preventDefault())}var t=null;function r(){if(!n.undo_stack||n.undoing)return!1;for(;n.undo_stack.length>n.undo_index;)n.undo_stack.pop()}function i(){n.undo_index=0,n.undo_stack=[]}function a(){n.undo_stack=[]}return{_init:function(){i(),n.events.on("initialized",function(){t=(n.$wp?n.$el.html():n.$oel.get(0).outerHTML).replace(/ style=""/g,"")}),n.events.on("blur",function(){n.el.querySelector(".fr-dragging")||n.undo.saveStep()}),n.events.on("keydown",e),n.events.on("destroy",a)},run:function(){if(1<n.undo_index){n.undoing=!0;var e=n.undo_stack[--n.undo_index-1];clearTimeout(n._content_changed_timer),n.snapshot.restore(e),t=e.html,n.popups.hideAll(),n.toolbar.enable(),n.events.trigger("contentChanged"),n.events.trigger("commands.undo"),n.undoing=!1}},redo:function(){if(n.undo_index<n.undo_stack.length){n.undoing=!0;var e=n.undo_stack[n.undo_index++];clearTimeout(n._content_changed_timer),n.snapshot.restore(e),t=e.html,n.popups.hideAll(),n.toolbar.enable(),n.events.trigger("contentChanged"),n.events.trigger("commands.redo"),n.undoing=!1}},canDo:function(){return!(0===n.undo_stack.length||n.undo_index<=1)},canRedo:function(){return n.undo_index!=n.undo_stack.length},dropRedo:r,reset:i,saveStep:function(e){if(!n.undo_stack||n.undoing||n.el.querySelector(".fr-marker"))return!1;void 0===e?(e=n.snapshot.get(),n.undo_stack[n.undo_index-1]&&n.snapshot.equal(n.undo_stack[n.undo_index-1],e)||(r(),n.undo_stack.push(e),n.undo_index++,e.html!=t&&(n.events.trigger("contentChanged"),t=e.html))):(r(),0<n.undo_index?n.undo_stack[n.undo_index-1]=e:(n.undo_stack.push(e),n.undo_index++))}}},be.FE.ICON_TEMPLATES={font_awesome:'<i class="fa fa-[NAME]" aria-hidden="true"></i>',font_awesome_5:'<i class="fas fa-[FA5NAME]" aria-hidden="true"></i>',font_awesome_5r:'<i class="far fa-[FA5NAME]" aria-hidden="true"></i>',font_awesome_5l:'<i class="fal fa-[FA5NAME]" aria-hidden="true"></i>',font_awesome_5b:'<i class="fab fa-[FA5NAME]" aria-hidden="true"></i>',text:'<span style="text-align: center;">[NAME]</span>',image:"<img src=[SRC] alt=[ALT] />",svg:'<svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">[PATH]</svg>'},be.FE.ICONS={bold:{NAME:"bold"},italic:{NAME:"italic"},underline:{NAME:"underline"},strikeThrough:{NAME:"strikethrough"},subscript:{NAME:"subscript"},superscript:{NAME:"superscript"},color:{NAME:"tint"},outdent:{NAME:"outdent"},indent:{NAME:"indent"},undo:{NAME:"rotate-left",FA5NAME:"undo"},redo:{NAME:"rotate-right",FA5NAME:"redo"},insertHR:{NAME:"minus"},clearFormatting:{NAME:"eraser"},selectAll:{NAME:"mouse-pointer"}},be.FE.DefineIconTemplate=function(e,t){be.FE.ICON_TEMPLATES[e]=t},be.FE.DefineIcon=function(e,t){be.FE.ICONS[e]=t},be.extend(be.FE.DEFAULTS,{iconsTemplate:"font_awesome"}),be.FE.MODULES.icon=function(i){return{create:function(n){var e=null,r=be.FE.ICONS[n];if(void 0!==r){var t=r.template||be.FE.ICON_DEFAULT_TEMPLATE||i.opts.iconsTemplate;r.FA5NAME||(r.FA5NAME=r.NAME),t&&(t=be.FE.ICON_TEMPLATES[t])&&(e=t.replace(/\[([a-zA-Z0-9]*)\]/g,function(e,t){return"NAME"==t?r[t]||n:r[t]}))}return e||n},getTemplate:function(e){var t=be.FE.ICONS[e],n=i.opts.iconsTemplate;return void 0!==t?n=t.template||be.FE.ICON_DEFAULT_TEMPLATE||i.opts.iconsTemplate:n}}},be.extend(be.FE.DEFAULTS,{tooltips:!0}),be.FE.MODULES.tooltip=function(i){function r(){if(i.helpers.isMobile())return!1;i.$tooltip&&i.$tooltip.removeClass("fr-visible").css("left","-3000px").css("position","fixed")}function a(e,t){if(i.helpers.isMobile())return!1;if(e.data("title")||e.data("title",e.attr("title")),!e.data("title"))return!1;i.$tooltip||i.opts.tooltips&&!i.helpers.isMobile()&&(i.shared.$tooltip?i.$tooltip=i.shared.$tooltip:(i.shared.$tooltip=be('<div class="fr-tooltip"></div>'),i.$tooltip=i.shared.$tooltip,i.opts.theme&&i.$tooltip.addClass(i.opts.theme+"-theme"),be(i.o_doc).find("body:first").append(i.$tooltip)),i.events.on("shared.destroy",function(){i.$tooltip.html("").removeData().remove(),i.$tooltip=null},!0)),e.removeAttr("title"),i.$tooltip.text(i.language.translate(e.data("title"))),i.$tooltip.addClass("fr-visible");var n=e.offset().left+(e.outerWidth()-i.$tooltip.outerWidth())/2;n<0&&(n=0),n+i.$tooltip.outerWidth()>be(i.o_win).width()&&(n=be(i.o_win).width()-i.$tooltip.outerWidth()),void 0===t&&(t=i.opts.toolbarBottom);var r=t?e.offset().top-i.$tooltip.height():e.offset().top+e.outerHeight();i.$tooltip.css("position",""),i.$tooltip.css("left",n),i.$tooltip.css("top",Math.ceil(r)),"static"!=be(i.o_doc).find("body:first").css("position")?(i.$tooltip.css("margin-left",-be(i.o_doc).find("body:first").offset().left),i.$tooltip.css("margin-top",-be(i.o_doc).find("body:first").offset().top)):(i.$tooltip.css("margin-left",""),i.$tooltip.css("margin-top",""))}return{hide:r,to:a,bind:function(e,t,n){i.opts.tooltips&&!i.helpers.isMobile()&&(i.events.$on(e,"mouseenter",t,function(e){i.node.hasClass(e.currentTarget,"fr-disabled")||i.edit.isDisabled()||a(be(e.currentTarget),n)},!0),i.events.$on(e,"mouseleave "+i._mousedown+" "+i._mouseup,t,function(){r()},!0))}}},be.FE.MODULES.button=function(u){var o=[];(u.opts.toolbarInline||u.opts.toolbarContainer)&&(u.shared.buttons||(u.shared.buttons=[]),o=u.shared.buttons);var s=[];function l(e,t,n){for(var r=be(),i=0;i<e.length;i++){var a=be(e[i]);if(a.is(t)&&(r=r.add(a)),n&&a.is(".fr-dropdown")){var o=a.next().find(t);r=r.add(o)}}return r}function d(e,t){var n,r=be();if(!e)return r;for(n in r=(r=r.add(l(o,e,t))).add(l(s,e,t)),u.shared.popups)if(u.shared.popups.hasOwnProperty(n)){var i=u.shared.popups[n].children().find(e);r=r.add(i)}for(n in u.shared.modals)if(u.shared.modals.hasOwnProperty(n)){var a=u.shared.modals[n].$modal.find(e);r=r.add(a)}return r}function r(e){e.addClass("fr-blink"),setTimeout(function(){e.removeClass("fr-blink")},500);for(var t=e.data("cmd"),n=[];void 0!==e.data("param"+(n.length+1));)n.push(e.data("param"+(n.length+1)));var r=d(".fr-dropdown.fr-active");r.length&&(r.removeClass("fr-active").attr("aria-expanded",!1).next().attr("aria-hidden",!0),r.parent(".fr-toolbar:not(.fr-inline)").css("zIndex","")),e.parents(".fr-popup, .fr-toolbar").data("instance").commands.exec(t,n)}function t(e){var t=e.parents(".fr-popup, .fr-toolbar").data("instance");if(0!==e.parents(".fr-popup").length||e.data("popup")||t.popups.hideAll(),t.popups.areVisible()&&!t.popups.areVisible(t)){for(var n=0;n<be.FE.INSTANCES.length;n++)be.FE.INSTANCES[n]!=t&&be.FE.INSTANCES[n].popups&&be.FE.INSTANCES[n].popups.areVisible()&&be.FE.INSTANCES[n].$el.find(".fr-marker").remove();t.popups.hideAll()}u.node.hasClass(e.get(0),"fr-dropdown")?function(e){var t=e.next(),n=u.node.hasClass(e.get(0),"fr-active"),r=d(".fr-dropdown.fr-active").not(e),i=e.parents(".fr-toolbar, .fr-popup").data("instance")||u;if(i.helpers.isIOS()&&!i.el.querySelector(".fr-marker")&&(i.selection.save(),i.selection.clear(),i.selection.restore()),!n){var a=e.data("cmd");t.find(".fr-command").removeClass("fr-active").attr("aria-selected",!1),be.FE.COMMANDS[a]&&be.FE.COMMANDS[a].refreshOnShow&&be.FE.COMMANDS[a].refreshOnShow.apply(i,[e,t]),t.css("left",e.offset().left-e.parent().offset().left-("rtl"==u.opts.direction?t.width()-e.outerWidth():0)),t.addClass("test-height");var o=t.outerHeight();t.removeClass("test-height"),t.css("top","").css("bottom",""),!u.opts.toolbarBottom&&t.offset().top+e.outerHeight()+o<be(u.o_doc).height()?t.css("top",e.position().top+e.outerHeight()):t.css("bottom",e.parents(".fr-popup, .fr-toolbar").first().height()-e.position().top)}e.addClass("fr-blink").toggleClass("fr-active"),e.hasClass("fr-active")?(t.attr("aria-hidden",!1),e.attr("aria-expanded",!0)):(t.attr("aria-hidden",!0),e.attr("aria-expanded",!1)),setTimeout(function(){e.removeClass("fr-blink")},300),t.css("margin-left",""),t.offset().left+t.outerWidth()>u.$sc.offset().left+u.$sc.width()&&t.css("margin-left",-(t.offset().left+t.outerWidth()-u.$sc.offset().left-u.$sc.width())),t.offset().left<u.$sc.offset().left&&"rtl"==u.opts.direction&&t.css("margin-left",u.$sc.offset().left),r.removeClass("fr-active").attr("aria-expanded",!1).next().attr("aria-hidden",!0),r.parent(".fr-toolbar:not(.fr-inline)").css("zIndex",""),0!==e.parents(".fr-popup").length||u.opts.toolbarInline||(u.node.hasClass(e.get(0),"fr-active")?u.$tb.css("zIndex",(u.opts.zIndex||1)+4):u.$tb.css("zIndex",""));var s=t.find("a.fr-command.fr-active:first");u.helpers.isMobile()||(s.length?u.accessibility.focusToolbarElement(s):u.accessibility.focusToolbarElement(e))}(e):(r(e),be.FE.COMMANDS[e.data("cmd")]&&!1!==be.FE.COMMANDS[e.data("cmd")].refreshAfterCallback&&t.button.bulkRefresh())}function a(e){t(be(e.currentTarget))}function c(e){var t=e.find(".fr-dropdown.fr-active");t.length&&(t.removeClass("fr-active").attr("aria-expanded",!1).next().attr("aria-hidden",!0),t.parent(".fr-toolbar:not(.fr-inline)").css("zIndex",""))}function f(e){e.preventDefault(),e.stopPropagation()}function p(e){if(e.stopPropagation(),!u.helpers.isMobile())return!1}function h(e,t,n){if(u.helpers.isMobile()&&!1===t.showOnMobile)return"";var r,i=t.displaySelection;if("function"==typeof i&&(i=i(u)),i){var a="function"==typeof t.defaultSelection?t.defaultSelection(u):t.defaultSelection;r='<span style="width:'+(t.displaySelectionWidth||100)+'px">'+u.language.translate(a||t.title)+"</span>"}else r=u.icon.create(t.icon||e),r+='<span class="fr-sr-only">'+(u.language.translate(t.title)||"")+"</span>";var o=t.popup?' data-popup="true"':"",s=t.modal?' data-modal="true"':"",l=u.shortcuts.get(e+".");l=l?" ("+l+")":"";var d=e+"-"+u.id,c="dropdown-menu-"+d,f='<button id="'+d+'"type="button" tabIndex="-1" role="button"'+(t.toggle?' aria-pressed="false"':"")+("dropdown"==t.type?' aria-controls="'+c+'" aria-expanded="false" aria-haspopup="true"':"")+(t.disabled?' aria-disabled="true"':"")+' title="'+(u.language.translate(t.title)||"")+l+'" class="fr-command fr-btn'+("dropdown"==t.type?" fr-dropdown":"")+" fr-btn-"+u.icon.getTemplate(t.icon)+(t.displaySelection?" fr-selection":"")+(t.back?" fr-back":"")+(t.disabled?" fr-disabled":"")+(n?"":" fr-hidden")+'" data-cmd="'+e+'"'+o+s+">"+r+"</button>";if("dropdown"==t.type){var p='<div id="'+c+'" class="fr-dropdown-menu" role="listbox" aria-labelledby="'+d+'" aria-hidden="true"><div class="fr-dropdown-wrapper" role="presentation"><div class="fr-dropdown-content" role="presentation">';p+=function(e,t){var n="";if(t.html)"function"==typeof t.html?n+=t.html.call(u):n+=t.html;else{var r=t.options;for(var i in"function"==typeof r&&(r=r()),n+='<ul class="fr-dropdown-list" role="presentation">',r)if(r.hasOwnProperty(i)){var a=u.shortcuts.get(e+"."+i);a=a?'<span class="fr-shortcut">'+a+"</span>":"",n+='<li role="presentation"><a class="fr-command" tabIndex="-1" role="option" data-cmd="'+e+'" data-param1="'+i+'" title="'+r[i]+'">'+u.language.translate(r[i])+"</a></li>"}n+="</ul>"}return n}(e,t),f+=p+="</div></div></div>"}return f}function e(i){var a=u.$tb&&u.$tb.data("instance")||u;if(!1===u.events.trigger("buttons.refresh"))return!0;setTimeout(function(){for(var e=a.selection.inEditor()&&a.core.hasFocus(),t=0;t<i.length;t++){var n=be(i[t]),r=n.data("cmd");0===n.parents(".fr-popup").length?e||be.FE.COMMANDS[r]&&be.FE.COMMANDS[r].forcedRefresh?a.button.refresh(n):u.node.hasClass(n.get(0),"fr-dropdown")||(n.removeClass("fr-active"),n.attr("aria-pressed")&&n.attr("aria-pressed",!1)):n.parents(".fr-popup").is(":visible")&&a.button.refresh(n)}},0)}function n(){e(o),e(s)}function i(){o=[],s=[]}u.shared.popup_buttons||(u.shared.popup_buttons=[]),s=u.shared.popup_buttons;var g=null;function m(){clearTimeout(g),g=setTimeout(n,50)}return{_init:function(){u.opts.toolbarInline?u.events.on("toolbar.show",n):(u.events.on("mouseup",m),u.events.on("keyup",m),u.events.on("blur",m),u.events.on("focus",m),u.events.on("contentChanged",m),u.helpers.isMobile()&&u.events.$on(u.$doc,"selectionchange",n)),u.events.on("shared.destroy",i)},buildList:function(e,t){for(var n="",r=0;r<e.length;r++){var i=e[r],a=be.FE.COMMANDS[i];a&&"undefined"!=typeof a.plugin&&u.opts.pluginsEnabled.indexOf(a.plugin)<0||(a?n+=h(i,a,void 0===t||0<=t.indexOf(i)):"|"==i?n+='<div class="fr-separator fr-vs" role="separator" aria-orientation="vertical"></div>':"-"==i&&(n+='<div class="fr-separator fr-hs" role="separator" aria-orientation="horizontal"></div>'))}return n},bindCommands:function(t,e){u.events.bindClick(t,".fr-command:not(.fr-disabled)",a),u.events.$on(t,u._mousedown+" "+u._mouseup+" "+u._move,".fr-dropdown-menu",f,!0),u.events.$on(t,u._mousedown+" "+u._mouseup+" "+u._move,".fr-dropdown-menu .fr-dropdown-wrapper",p,!0);var n=t.get(0).ownerDocument,r="defaultView"in n?n.defaultView:n.parentWindow,i=function(e){(!e||e.type==u._mouseup&&e.target!=be("html").get(0)||"keydown"==e.type&&(u.keys.isCharacter(e.which)&&!u.keys.ctrlKey(e)||e.which==be.FE.KEYCODE.ESC))&&c(t)};u.events.$on(be(r),u._mouseup+" resize keydown",i,!0),u.opts.iframe&&u.events.$on(u.$win,u._mouseup,i,!0),u.node.hasClass(t.get(0),"fr-popup")?be.merge(s,t.find(".fr-btn").toArray()):be.merge(o,t.find(".fr-btn").toArray()),u.tooltip.bind(t,".fr-btn, .fr-title",e)},refresh:function(e){var t,n=e.parents(".fr-popup, .fr-toolbar").data("instance")||u,r=e.data("cmd");u.node.hasClass(e.get(0),"fr-dropdown")?t=e.next():(e.removeClass("fr-active"),e.attr("aria-pressed")&&e.attr("aria-pressed",!1)),be.FE.COMMANDS[r]&&be.FE.COMMANDS[r].refresh?be.FE.COMMANDS[r].refresh.apply(n,[e,t]):u.refresh[r]&&n.refresh[r](e,t)},bulkRefresh:n,exec:r,click:t,hideActiveDropdowns:c,getButtons:d}},be.FE.MODULES.modals=function(l){l.shared.modals||(l.shared.modals={});var s,d=l.shared.modals;function e(){for(var e in d){var t=d[e];t&&t.$modal&&t.$modal.removeData().remove()}s&&s.removeData().remove(),d={}}function c(e,t){if(d[e]){var n=d[e].$modal,r=n.data("instance")||l;r.events.enableBlur(),n.hide(),s.hide(),be(r.o_doc).find("body:first").removeClass("prevent-scroll fr-mobile"),n.removeClass("fr-active"),t||(r.accessibility.restoreSelection(),r.events.trigger("modals.hide"))}}function n(e){var t;if("string"==typeof e){if(!d[e])return;t=d[e].$modal}else t=e;return t&&l.node.hasClass(t,"fr-active")&&l.core.sameInstance(t)||!1}return{_init:function(){l.events.on("shared.destroy",e,!0)},get:function(e){return d[e]},create:function(n,e,t){if(l.shared.$overlay||(l.shared.$overlay=be('<div class="fr-overlay">').appendTo("body:first")),s=l.shared.$overlay,l.opts.theme&&s.addClass(l.opts.theme+"-theme"),!d[n]){var r=(i=e,a=t,o='<div tabIndex="-1" class="fr-modal'+(l.opts.theme?" "+l.opts.theme+"-theme":"")+'"><div class="fr-modal-wrapper">',o+='<div class="fr-modal-head">'+i+'<i title="'+l.language.translate("Cancel")+'" class="fa fa-times fr-modal-close"></i></div>',o+='<div tabIndex="-1" class="fr-modal-body">'+a+"</div>",be(o+="</div></div>"));d[n]={$modal:r,$head:r.find(".fr-modal-head"),$body:r.find(".fr-modal-body")},l.helpers.isMobile()||r.addClass("fr-desktop"),r.appendTo("body:first"),l.events.$on(r,"click",".fr-modal-close",function(){c(n)},!0),d[n].$body.css("margin-top",d[n].$head.outerHeight()),l.events.$on(r,"keydown",function(e){var t=e.which;return t==be.FE.KEYCODE.ESC?(c(n),l.accessibility.focusModalButton(r),!1):!(!be(e.currentTarget).is("input[type=text], textarea")&&t!=be.FE.KEYCODE.ARROW_UP&&t!=be.FE.KEYCODE.ARROW_DOWN&&!l.keys.isBrowserAction(e)&&(e.preventDefault(),e.stopPropagation(),1))},!0),c(n,!0)}var i,a,o;return d[n]},show:function(e){if(d[e]){var t=d[e].$modal;t.data("instance",l),t.show(),s.show(),be(l.o_doc).find("body:first").addClass("prevent-scroll"),l.helpers.isMobile()&&be(l.o_doc).find("body:first").addClass("fr-mobile"),t.addClass("fr-active"),l.accessibility.focusModal(t)}},hide:c,resize:function(e){if(d[e]){var t=d[e],n=t.$modal,r=t.$body,i=be(l.o_win).height(),a=n.find(".fr-modal-wrapper"),o=i-a.outerHeight(!0)+(a.height()-(r.outerHeight(!0)-r.height())),s="auto";o<r.get(0).scrollHeight&&(s=o),r.height(s)}},isVisible:n,areVisible:function(e){for(var t in d)if(d.hasOwnProperty(t)&&n(t)&&(void 0===e||d[t].$modal.data("instance")==e))return d[t].$modal;return!1}}},be.FE.POPUP_TEMPLATES={"text.edit":"[_EDIT_]"},be.FE.RegisterTemplate=function(e,t){be.FE.POPUP_TEMPLATES[e]=t},be.FE.MODULES.popups=function(c){c.shared.popups||(c.shared.popups={});var f=c.shared.popups;function p(e,t){t.is(":visible")||(t=c.$sc),t.is(f[e].data("container"))||(f[e].data("container",t),t.append(f[e]))}function u(e){return f[e]&&c.node.hasClass(f[e],"fr-active")&&c.core.sameInstance(f[e])||!1}function h(e){for(var t in f)if(f.hasOwnProperty(t)&&u(t)&&(void 0===e||f[t].data("instance")==e))return f[t];return!1}function n(e){var t=null;(t="string"!=typeof e?e:f[e])&&c.node.hasClass(t,"fr-active")&&(t.removeClass("fr-active fr-above"),c.events.trigger("popups.hide."+e),c.$tb&&(1<c.opts.zIndex?c.$tb.css("zIndex",c.opts.zIndex+1):c.$tb.css("zIndex","")),c.events.disableBlur(),t.find("input, textarea, button").filter(":focus").blur(),t.find("input, textarea").attr("disabled","disabled"))}function g(e){for(var t in void 0===e&&(e=[]),f)f.hasOwnProperty(t)&&e.indexOf(t)<0&&n(t)}function t(){c.shared.exit_flag=!0}function m(){c.shared.exit_flag=!1}function a(){return c.shared.exit_flag}function i(e,t){var n,r,i=function(e,t){var n=be.FE.POPUP_TEMPLATES[e];if(!n)return null;for(var r in"function"==typeof n&&(n=n.apply(c)),t)t.hasOwnProperty(r)&&(n=n.replace("[_"+r.toUpperCase()+"_]",t[r]));return n}(e,t);return i?(n=be('<div class="fr-popup'+(c.helpers.isMobile()?" fr-mobile":" fr-desktop")+(c.opts.toolbarInline?" fr-inline":"")+'"><span class="fr-arrow"></span>'+i+"</div>"),c.opts.theme&&n.addClass(c.opts.theme+"-theme"),1<c.opts.zIndex&&(c.opts.editInPopup?n.css("z-index",c.opts.zIndex+2):c.$tb.css("z-index",c.opts.zIndex+2)),"auto"!=c.opts.direction&&n.removeClass("fr-ltr fr-rtl").addClass("fr-"+c.opts.direction),n.find("input, textarea").attr("dir",c.opts.direction).attr("disabled","disabled"),(r=be("body:first")).append(n),n.data("container",r),f[e]=n,c.button.bindCommands(n,!1),n):(n=be('<div class="fr-popup fr-empty"></div>'),(r=be("body:first")).append(n),n.data("container",r),f[e]=n)}function v(r){var i=f[r];return{_windowResize:function(){var e=i.data("instance")||c;!e.helpers.isMobile()&&i.is(":visible")&&(e.events.disableBlur(),e.popups.hide(r),e.events.enableBlur())},_inputFocus:function(e){var t=i.data("instance")||c,n=be(e.currentTarget);if(n.is("input:file")&&n.closest(".fr-layer").addClass("fr-input-focus"),e.preventDefault(),e.stopPropagation(),setTimeout(function(){t.events.enableBlur()},100),t.helpers.isMobile()){var r=be(t.o_win).scrollTop();setTimeout(function(){be(t.o_win).scrollTop(r)},0)}},_inputBlur:function(e){var t=i.data("instance")||c,n=be(e.currentTarget);n.is("input:file")&&n.closest(".fr-layer").removeClass("fr-input-focus"),document.activeElement!=this&&be(this).is(":visible")&&(t.events.blurActive()&&t.events.trigger("blur"),t.events.enableBlur())},_editorKeydown:function(e){var t=i.data("instance")||c;t.keys.ctrlKey(e)||e.which==be.FE.KEYCODE.ALT||e.which==be.FE.KEYCODE.ESC||(u(r)&&i.find(".fr-back:visible").length?t.button.exec(i.find(".fr-back:visible:first")):e.which!=be.FE.KEYCODE.ALT&&t.popups.hide(r))},_preventFocus:function(e){var t=i.data("instance")||c,n=e.originalEvent?e.originalEvent.target||e.originalEvent.originalTarget:null;"mouseup"==e.type||be(n).is(":focus")||t.events.disableBlur(),"mouseup"!=e.type||be(n).hasClass("fr-command")||0<be(n).parents(".fr-command").length||be(n).hasClass("fr-dropdown-content")||c.button.hideActiveDropdowns(i),(c.browser.safari||c.browser.mozilla)&&"mousedown"==e.type&&be(n).is("input[type=file]")&&t.events.disableBlur();var r="input, textarea, button, select, label, .fr-command";if(n&&!be(n).is(r)&&0===be(n).parents(r).length)return e.stopPropagation(),!1;n&&be(n).is(r)&&e.stopPropagation(),m()},_editorMouseup:function(){i.is(":visible")&&a()&&0<i.find("input:focus, textarea:focus, button:focus, select:focus").filter(":visible").length&&c.events.disableBlur()},_windowMouseup:function(e){if(!c.core.sameInstance(i))return!0;var t=i.data("instance")||c;i.is(":visible")&&a()&&(e.stopPropagation(),t.markers.remove(),t.popups.hide(r),m())},_windowKeydown:function(e){if(!c.core.sameInstance(i))return!0;var t=i.data("instance")||c,n=e.which;if(be.FE.KEYCODE.ESC==n){if(t.popups.isVisible(r)&&t.opts.toolbarInline)return e.stopPropagation(),t.popups.isVisible(r)&&(i.find(".fr-back:visible").length?(t.button.exec(i.find(".fr-back:visible:first")),t.accessibility.focusPopupButton(i)):i.find(".fr-dismiss:visible").length?t.button.exec(i.find(".fr-dismiss:visible:first")):(t.popups.hide(r),t.toolbar.showInline(null,!0),t.accessibility.FocusPopupButton(i))),!1;if(t.popups.isVisible(r))return i.find(".fr-back:visible").length?(t.button.exec(i.find(".fr-back:visible:first")),t.accessibility.focusPopupButton(i)):i.find(".fr-dismiss:visible").length?t.button.exec(i.find(".fr-dismiss:visible:first")):(t.popups.hide(r),t.accessibility.focusPopupButton(i)),!1}},_doPlaceholder:function(){0===be(this).next().length&&be(this).attr("placeholder")&&be(this).after('<label for="'+be(this).attr("id")+'">'+be(this).attr("placeholder")+"</label>"),be(this).toggleClass("fr-not-empty",""!==be(this).val())},_repositionPopup:function(){if(!c.opts.height&&!c.opts.heightMax||c.opts.toolbarInline)return!0;if(c.$wp&&u(r)&&i.parent().get(0)==c.$sc.get(0)){var e=i.offset().top-c.$wp.offset().top,t=c.$wp.outerHeight();c.node.hasClass(i.get(0),"fr-above")&&(e+=i.outerHeight()),t<e||e<0?i.addClass("fr-hidden"):i.removeClass("fr-hidden")}}}}function o(e,t){c.events.on("mouseup",e._editorMouseup,!0),c.$wp&&c.events.on("keydown",e._editorKeydown),c.events.on("blur",function(){h()&&c.markers.remove(),g()}),c.$wp&&!c.helpers.isMobile()&&c.events.$on(c.$wp,"scroll.popup"+t,e._repositionPopup),c.events.on("window.mouseup",e._windowMouseup,!0),c.events.on("window.keydown",e._windowKeydown,!0),f[t].data("inst"+c.id,!0),c.events.on("destroy",function(){c.core.sameInstance(f[t])&&f[t].removeClass("fr-active").appendTo("body:first")},!0)}function e(){for(var e in f)if(f.hasOwnProperty(e)){var t=f[e];t&&(t.html("").removeData().remove(),f[e]=null)}f=[]}return c.shared.exit_flag=!1,{_init:function(){c.events.on("shared.destroy",e,!0),c.events.on("window.mousedown",t),c.events.on("window.touchmove",m),c.events.$on(be(c.o_win),"scroll",m),c.events.on("mousedown",function(e){h()&&(e.stopPropagation(),c.$el.find(".fr-marker").remove(),t(),c.events.disableBlur())})},create:function(e,t){var n=i(e,t),r=v(e);return o(r,e),c.events.$on(n,"mousedown mouseup touchstart touchend touch","*",r._preventFocus,!0),c.events.$on(n,"focus","input, textarea, button, select",r._inputFocus,!0),c.events.$on(n,"blur","input, textarea, button, select",r._inputBlur,!0),c.accessibility.registerPopup(e),c.events.$on(n,"keydown keyup change input","input, textarea",r._doPlaceholder,!0),c.helpers.isIOS()&&c.events.$on(n,"touchend","label",function(){be("#"+be(this).attr("for")).prop("checked",function(e,t){return!t})},!0),c.events.$on(be(c.o_win),"resize",r._windowResize,!0),n},get:function(e){var t=f[e];return t&&!t.data("inst"+c.id)&&o(v(e),e),t},show:function(e,t,n,r){if(u(e)||(h()&&0<c.$el.find(".fr-marker").length?(c.events.disableBlur(),c.selection.restore()):h()||(c.events.disableBlur(),c.events.focus(),c.events.enableBlur())),g([e]),!f[e])return!1;var i=c.button.getButtons(".fr-dropdown.fr-active");i.removeClass("fr-active").attr("aria-expanded",!1).parent(".fr-toolbar").css("zIndex",""),i.next().attr("aria-hidden",!0),f[e].data("instance",c),c.$tb&&c.$tb.data("instance",c);var a=f[e].outerWidth(),o=u(e);f[e].addClass("fr-active").removeClass("fr-hidden").find("input, textarea").removeAttr("disabled");var s,l,d=f[e].data("container");s=e,(l=d).is(":visible")||(l=c.$sc),0===l.find([f[s]]).length&&l.append(f[s]),c.opts.toolbarInline&&d&&c.$tb&&d.get(0)==c.$tb.get(0)&&(p(e,c.$sc),n=c.$tb.offset().top-c.helpers.getPX(c.$tb.css("margin-top")),t=c.$tb.offset().left+c.$tb.outerWidth()/2+(parseFloat(c.$tb.find(".fr-arrow").css("margin-left"))||0)+c.$tb.find(".fr-arrow").outerWidth()/2,c.node.hasClass(c.$tb.get(0),"fr-above")&&n&&(n+=c.$tb.outerHeight()),r=0),d=f[e].data("container"),!c.opts.iframe||r||o||(t&&(t-=c.$iframe.offset().left),n&&(n-=c.$iframe.offset().top)),d.is(c.$tb)?c.$tb.css("zIndex",(c.opts.zIndex||1)+4):f[e].css("zIndex",(c.opts.zIndex||1)+4),t&&(t-=a/2),c.opts.toolbarBottom&&d&&c.$tb&&d.get(0)==c.$tb.get(0)&&(f[e].addClass("fr-above"),n&&(n-=f[e].outerHeight())),f[e].removeClass("fr-active"),c.position.at(t,n,f[e],r||0),f[e].addClass("fr-active"),o||c.accessibility.focusPopup(f[e]),c.opts.toolbarInline&&c.toolbar.hide(),c.events.trigger("popups.show."+e),v(e)._repositionPopup(),m()},hide:n,onHide:function(e,t){c.events.on("popups.hide."+e,t)},hideAll:g,setContainer:p,refresh:function(e){f[e].data("instance",c),c.events.trigger("popups.refresh."+e);for(var t=f[e].find(".fr-command"),n=0;n<t.length;n++){var r=be(t[n]);0===r.parents(".fr-dropdown-menu").length&&c.button.refresh(r)}},onRefresh:function(e,t){c.events.on("popups.refresh."+e,t)},onShow:function(e,t){c.events.on("popups.show."+e,t)},isVisible:u,areVisible:h}},be.FE.MODULES.position=function(v){function i(){var e=v.selection.ranges(0).getBoundingClientRect();if(0===e.top&&0===e.left&&0===e.width||0===e.height){var t=!1;0===v.$el.find(".fr-marker").length&&(v.selection.save(),t=!0);var n=v.$el.find(".fr-marker:first");n.css("display","inline"),n.css("line-height","");var r=n.offset(),i=n.outerHeight();n.css("display","none"),n.css("line-height",0),(e={}).left=r.left,e.width=0,e.height=i,e.top=r.top-(v.helpers.isMobile()&&!v.helpers.isIOS()||v.opts.iframe?0:v.helpers.scrollTop()),e.right=1,e.bottom=1,e.ok=!0,t&&v.selection.restore()}return e}function a(e,t,n,r){var i=n.data("container");!i||"BODY"===i.get(0).tagName&&"static"==i.css("position")||(e&&(e-=i.offset().left),t&&(t-=i.offset().top),"BODY"!=i.get(0).tagName?(e&&(e+=i.get(0).scrollLeft),t&&(t+=i.get(0).scrollTop)):"absolute"==i.css("position")&&(e&&(e+=i.position().left),t&&(t+=i.position().top))),v.opts.iframe&&i&&v.$tb&&i.get(0)!=v.$tb.get(0)&&(e&&(e+=v.$iframe.offset().left),t&&(t+=v.$iframe.offset().top));var a,o,s=(a=e,o=n.outerWidth(!0),a+o>v.$sc.get(0).clientWidth-10&&(a=v.$sc.get(0).clientWidth-o-10),a<0&&(a=10),a);if(e){n.css("left",s);var l=n.data("fr-arrow");l||(l=n.find(".fr-arrow"),n.data("fr-arrow",l)),l.data("margin-left")||l.data("margin-left",v.helpers.getPX(l.css("margin-left"))),l.css("margin-left",e-s+l.data("margin-left"))}t&&n.css("top",function(e,t,n){var r=e.outerHeight(!0);if(!v.helpers.isMobile()&&v.$tb&&e.parent().get(0)!=v.$tb.get(0)){var i=e.parent().offset().top,a=t-r-(n||0);e.parent().get(0)==v.$sc.get(0)&&(i-=e.parent().position().top);var o=v.$sc.get(0).clientHeight;i+t+r>v.$sc.offset().top+o&&0<e.parent().offset().top+a&&0<a?a>v.$wp.scrollTop()&&(t=a,e.addClass("fr-above")):e.removeClass("fr-above")}return t}(n,t,r))}function n(e){var n=be(e),t=n.is(".fr-sticky-on"),r=n.data("sticky-top"),i=n.data("sticky-scheduled");if(void 0===r){n.data("sticky-top",0);var a=be('<div class="fr-sticky-dummy" style="height: '+n.outerHeight()+'px;"></div>');v.$box.prepend(a)}else v.$box.find(".fr-sticky-dummy").css("height",n.outerHeight());if(v.core.hasFocus()||0<v.$tb.find("input:visible:focus").length){var o=v.helpers.scrollTop(),s=Math.min(Math.max(o-v.$tb.parent().offset().top,0),v.$tb.parent().outerHeight()-n.outerHeight());s!=r&&s!=i&&(clearTimeout(n.data("sticky-timeout")),n.data("sticky-scheduled",s),n.outerHeight()<o-v.$tb.parent().offset().top&&n.addClass("fr-opacity-0"),n.data("sticky-timeout",setTimeout(function(){var e=v.helpers.scrollTop(),t=Math.min(Math.max(e-v.$tb.parent().offset().top,0),v.$tb.parent().outerHeight()-n.outerHeight());0<t&&"BODY"==v.$tb.parent().get(0).tagName&&(t+=v.$tb.parent().position().top),t!=r&&(n.css("top",Math.max(t,0)),n.data("sticky-top",t),n.data("sticky-scheduled",t)),n.removeClass("fr-opacity-0")},100))),t||(n.css("top","0"),n.width(v.$tb.parent().width()),n.addClass("fr-sticky-on"),v.$box.addClass("fr-sticky-box"))}else clearTimeout(be(e).css("sticky-timeout")),n.css("top","0"),n.css("position",""),n.width(""),n.data("sticky-top",0),n.removeClass("fr-sticky-on"),v.$box.removeClass("fr-sticky-box")}function t(e){if(e.offsetWidth){var t,n,r=be(e),i=r.outerHeight(),a=r.data("sticky-position"),o=be("body"==v.opts.scrollableContainer?v.o_win:v.opts.scrollableContainer).outerHeight(),s=0,l=0;"body"!==v.opts.scrollableContainer&&(s=v.$sc.offset().top,l=be(v.o_win).outerHeight()-s-o);var d="body"==v.opts.scrollableContainer?v.helpers.scrollTop():s,c=r.is(".fr-sticky-on");r.data("sticky-parent")||r.data("sticky-parent",r.parent());var f=r.data("sticky-parent"),p=f.offset().top,u=f.outerHeight();if(r.data("sticky-offset")?v.$box.find(".fr-sticky-dummy").css("height",i+"px"):(r.data("sticky-offset",!0),r.after('<div class="fr-sticky-dummy" style="height: '+i+'px;"></div>')),!a){var h="auto"!==r.css("top")||"auto"!==r.css("bottom");h||r.css("position","fixed"),a={top:v.node.hasClass(r.get(0),"fr-top"),bottom:v.node.hasClass(r.get(0),"fr-bottom")},h||r.css("position",""),r.data("sticky-position",a),r.data("top",v.node.hasClass(r.get(0),"fr-top")?r.css("top"):"auto"),r.data("bottom",v.node.hasClass(r.get(0),"fr-bottom")?r.css("bottom"):"auto")}t=v.helpers.getPX(r.data("top")),n=v.helpers.getPX(r.data("bottom"));var g=a.top&&p<d+t&&d+t<=p+u-i&&(v.helpers.isInViewPort(v.$sc.get(0))||"body"==v.opts.scrollableContainer),m=a.bottom&&p+i<d+o-n&&d+o-n<p+u;g||m?(r.css("width",f.get(0).getBoundingClientRect().width+"px"),c||(r.addClass("fr-sticky-on"),r.removeClass("fr-sticky-off"),r.css("top")&&("auto"!=r.data("top")?r.css("top",v.helpers.getPX(r.data("top"))+s):r.data("top","auto")),r.css("bottom")&&("auto"!=r.data("bottom")?r.css("bottom",v.helpers.getPX(r.data("bottom"))+l):r.css("bottom","auto")))):v.node.hasClass(r.get(0),"fr-sticky-off")||(r.width(""),r.removeClass("fr-sticky-on"),r.addClass("fr-sticky-off"),r.css("top")&&"auto"!=r.data("top")&&a.top&&r.css("top",0),r.css("bottom")&&"auto"!=r.data("bottom")&&a.bottom&&r.css("bottom",0))}}function e(){if(v._stickyElements)for(var e=0;e<v._stickyElements.length;e++)t(v._stickyElements[e])}return{_init:function(){!function(){if(v._stickyElements=[],v.helpers.isIOS()){var t=function(){if(v.helpers.requestAnimationFrame()(t),!1!==v.events.trigger("position.refresh"))for(var e=0;e<v._stickyElements.length;e++)n(v._stickyElements[e])};t(),v.events.$on(be(v.o_win),"scroll",function(){if(v.core.hasFocus())for(var e=0;e<v._stickyElements.length;e++){var t=be(v._stickyElements[e]),n=t.parent(),r=v.helpers.scrollTop();t.outerHeight()<r-n.offset().top&&(t.addClass("fr-opacity-0"),t.data("sticky-top",-1),t.data("sticky-scheduled",-1))}},!0)}else"body"!==v.opts.scrollableContainer&&v.events.$on(be(v.opts.scrollableContainer),"scroll",e,!0),v.events.$on(be(v.o_win),"scroll",e,!0),v.events.$on(be(v.o_win),"resize",e,!0),v.events.on("initialized",e),v.events.on("focus",e),v.events.$on(be(v.o_win),"resize","textarea",e,!0);v.events.on("destroy",function(){v._stickyElements=[]})}()},forSelection:function(e){var t=i();e.css({top:0,left:0});var n=t.top+t.height,r=t.left+t.width/2-e.get(0).offsetWidth/2+v.helpers.scrollLeft();v.opts.iframe||(n+=v.helpers.scrollTop()),a(r,n,e,t.height)},addSticky:function(e){e.addClass("fr-sticky"),v.helpers.isIOS()&&e.addClass("fr-sticky-ios"),e.removeClass("fr-sticky"),v._stickyElements.push(e.get(0))},refresh:e,at:a,getBoundingRect:i}},be.FE.MODULES.refresh=function(i){function a(e,t){e.toggleClass("fr-disabled",t).attr("aria-disabled",t)}return{undo:function(e){a(e,!i.undo.canDo())},redo:function(e){a(e,!i.undo.canRedo())},outdent:function(e){if(i.node.hasClass(e.get(0),"fr-no-refresh"))return!1;for(var t=i.selection.blocks(),n=0;n<t.length;n++){var r="rtl"==i.opts.direction||"rtl"==be(t[n]).css("direction")?"margin-right":"margin-left";if("LI"==t[n].tagName||"LI"==t[n].parentNode.tagName)return a(e,!1),!0;if(0<i.helpers.getPX(be(t[n]).css(r)))return a(e,!1),!0}a(e,!0)},indent:function(e){if(i.node.hasClass(e.get(0),"fr-no-refresh"))return!1;for(var t=i.selection.blocks(),n=0;n<t.length;n++){for(var r=t[n].previousSibling;r&&r.nodeType==Node.TEXT_NODE&&0===r.textContent.length;)r=r.previousSibling;if("LI"!=t[n].tagName||r)return a(e,!1),!0;a(e,!0)}}}},be.extend(be.FE.DEFAULTS,{editInPopup:!1}),be.FE.MODULES.textEdit=function(n){function t(){n.events.$on(n.$el,n._mouseup,function(){setTimeout(function(){var e,t;t=n.popups.get("text.edit"),e="INPUT"===n.$el.prop("tagName")?n.$el.attr("placeholder"):n.$el.text(),t.find("input").val(e).trigger("change"),n.popups.setContainer("text.edit",n.$sc),n.popups.show("text.edit",n.$el.offset().left+n.$el.outerWidth()/2,n.$el.offset().top+n.$el.outerHeight(),n.$el.outerHeight())},10)})}return{_init:function(){var e;n.opts.editInPopup&&(e={edit:'<div id="fr-text-edit-'+n.id+'" class="fr-layer fr-text-edit-layer"><div class="fr-input-line"><input type="text" placeholder="'+n.language.translate("Text")+'" tabIndex="1"></div><div class="fr-action-buttons"><button type="button" class="fr-command fr-submit" data-cmd="updateText" tabIndex="2">'+n.language.translate("Update")+"</button></div></div>"},n.popups.create("text.edit",e),t())},update:function(){var e=n.popups.get("text.edit").find("input").val();0===e.length&&(e=n.opts.placeholderText),"INPUT"===n.$el.prop("tagName")?n.$el.attr("placeholder",e):n.$el.text(e),n.events.trigger("contentChanged"),n.popups.hide("text.edit")}}},be.FE.RegisterCommand("updateText",{focus:!1,undo:!1,callback:function(){this.textEdit.update()}}),be.extend(be.FE.DEFAULTS,{toolbarBottom:!1,toolbarButtons:null,toolbarButtonsXS:null,toolbarButtonsSM:null,toolbarButtonsMD:null,toolbarContainer:null,toolbarInline:!1,toolbarSticky:!0,toolbarStickyOffset:0,toolbarVisibleWithoutSelection:!1}),be.FE.TOOLBAR_BUTTONS=["fullscreen","bold","italic","underline","strikeThrough","subscript","superscript","|","fontFamily","fontSize","color","inlineStyle","paragraphStyle","|","paragraphFormat","align","formatOL","formatUL","outdent","indent","quote","-","insertLink","insertImage","insertVideo","embedly","insertFile","insertTable","|","emoticons","specialCharacters","insertHR","selectAll","clearFormatting","|","print","spellChecker","help","html","|","undo","redo"],be.FE.TOOLBAR_BUTTONS_MD=null,be.FE.TOOLBAR_BUTTONS_SM=["bold","italic","underline","|","fontFamily","fontSize","insertLink","insertImage","table","|","undo","redo"],be.FE.TOOLBAR_BUTTONS_XS=["bold","italic","fontFamily","fontSize","|","undo","redo"],be.FE.MODULES.toolbar=function(i){var r=[];function a(e,t){for(var n=0;n<t.length;n++)"-"!=t[n]&&"|"!=t[n]&&e.indexOf(t[n])<0&&e.push(t[n])}function o(){var e=i.helpers.screenSize();return r[e]}function e(){var e=o();i.$tb.find(".fr-separator").remove(),i.$tb.find("> .fr-command").addClass("fr-hidden");for(var t=0;t<e.length;t++)if("|"==e[t]||"-"==e[t])i.$tb.append(i.button.buildList([e[t]]));else{var n=i.$tb.find('> .fr-command[data-cmd="'+e[t]+'"]'),r=null;i.node.hasClass(n.next().get(0),"fr-dropdown-menu")&&(r=n.next()),n.removeClass("fr-hidden").appendTo(i.$tb),r&&r.appendTo(i.$tb)}}function t(e,t){setTimeout(function(){if((!e||e.which!=be.FE.KEYCODE.ESC)&&i.selection.inEditor()&&i.core.hasFocus()&&!i.popups.areVisible()&&(i.opts.toolbarVisibleWithoutSelection||!i.selection.isCollapsed()&&!i.keys.isIME()||t)){if(i.$tb.data("instance",i),!1===i.events.trigger("toolbar.show",[e]))return!1;i.$tb.show(),i.opts.toolbarContainer||i.position.forSelection(i.$tb),1<i.opts.zIndex?i.$tb.css("z-index",i.opts.zIndex+1):i.$tb.css("z-index",null)}},0)}function n(e){return(!e||"blur"!==e.type||document.activeElement!==i.el)&&(!(!e||"keydown"!==e.type||!i.keys.ctrlKey(e))||(!!i.button.getButtons(".fr-dropdown.fr-active").next().find(i.o_doc.activeElement).length||void(!1!==i.events.trigger("toolbar.hide")&&i.$tb.hide())))}r[be.FE.XS]=i.opts.toolbarButtonsXS||i.opts.toolbarButtons||be.FE.TOOLBAR_BUTTONS_XS||be.FE.TOOLBAR_BUTTONS||[],r[be.FE.SM]=i.opts.toolbarButtonsSM||i.opts.toolbarButtons||be.FE.TOOLBAR_BUTTONS_SM||be.FE.TOOLBAR_BUTTONS||[],r[be.FE.MD]=i.opts.toolbarButtonsMD||i.opts.toolbarButtons||be.FE.TOOLBAR_BUTTONS_MD||be.FE.TOOLBAR_BUTTONS||[],r[be.FE.LG]=i.opts.toolbarButtons||be.FE.TOOLBAR_BUTTONS||[];var s=null;function l(e){clearTimeout(s),e&&e.which==be.FE.KEYCODE.ESC||(s=setTimeout(t,i.opts.typingTimer))}function d(){i.events.on("window.mousedown",n),i.events.on("keydown",n),i.events.on("blur",n),i.helpers.isMobile()||i.events.on("window.mouseup",t),i.helpers.isMobile()?i.helpers.isIOS()||(i.events.on("window.touchend",t),i.browser.mozilla&&setInterval(t,200)):i.events.on("window.keyup",l),i.events.on("keydown",function(e){e&&e.which==be.FE.KEYCODE.ESC&&n()}),i.events.on("keydown",function(e){if(e.which==be.FE.KEYCODE.ALT)return e.stopPropagation(),!1},!0),i.events.$on(i.$wp,"scroll.toolbar",t),i.events.on("commands.after",t),i.helpers.isMobile()&&(i.events.$on(i.$doc,"selectionchange",l),i.events.$on(i.$doc,"orientationchange",t))}function c(){i.$tb.html("").removeData().remove(),i.$tb=null}function f(){i.$box.removeClass("fr-top fr-bottom fr-inline fr-basic"),i.$box.find(".fr-sticky-dummy").remove()}function p(){i.opts.theme&&i.$tb.addClass(i.opts.theme+"-theme"),1<i.opts.zIndex&&i.$tb.css("z-index",i.opts.zIndex+1),"auto"!=i.opts.direction&&i.$tb.removeClass("fr-ltr fr-rtl").addClass("fr-"+i.opts.direction),i.helpers.isMobile()?i.$tb.addClass("fr-mobile"):i.$tb.addClass("fr-desktop"),i.opts.toolbarContainer?(i.opts.toolbarInline&&(d(),n()),i.opts.toolbarBottom?i.$tb.addClass("fr-bottom"):i.$tb.addClass("fr-top")):i.opts.toolbarInline?(i.$sc.append(i.$tb),i.$tb.data("container",i.$sc),i.$tb.addClass("fr-inline"),i.$tb.prepend('<span class="fr-arrow"></span>'),d(),i.opts.toolbarBottom=!1):(i.opts.toolbarBottom&&!i.helpers.isIOS()?(i.$box.append(i.$tb),i.$tb.addClass("fr-bottom"),i.$box.addClass("fr-bottom")):(i.opts.toolbarBottom=!1,i.$box.prepend(i.$tb),i.$tb.addClass("fr-top"),i.$box.addClass("fr-top")),i.$tb.addClass("fr-basic"),i.opts.toolbarSticky&&(i.opts.toolbarStickyOffset&&(i.opts.toolbarBottom?i.$tb.css("bottom",i.opts.toolbarStickyOffset):i.$tb.css("top",i.opts.toolbarStickyOffset)),i.position.addSticky(i.$tb))),function(){var e=be.merge([],o());a(e,r[be.FE.XS]),a(e,r[be.FE.SM]),a(e,r[be.FE.MD]),a(e,r[be.FE.LG]);for(var t=e.length-1;0<=t;t--)"-"!=e[t]&&"|"!=e[t]&&e.indexOf(e[t])<t&&e.splice(t,1);var n=i.button.buildList(e,o());i.$tb.append(n),i.button.bindCommands(i.$tb)}(),i.events.$on(be(i.o_win),"resize",e),i.events.$on(be(i.o_win),"orientationchange",e),i.accessibility.registerToolbar(i.$tb),i.events.$on(i.$tb,i._mousedown+" "+i._mouseup,function(e){var t=e.originalEvent?e.originalEvent.target||e.originalEvent.originalTarget:null;if(t&&"INPUT"!=t.tagName&&!i.edit.isDisabled())return e.stopPropagation(),e.preventDefault(),!1},!0)}var u=!1;return{_init:function(){if(i.$sc=be(i.opts.scrollableContainer).first(),!i.$wp)return!1;i.opts.toolbarContainer?(i.shared.$tb?(i.$tb=i.shared.$tb,i.opts.toolbarInline&&d()):(i.shared.$tb=be('<div class="fr-toolbar"></div>'),i.$tb=i.shared.$tb,be(i.opts.toolbarContainer).append(i.$tb),p(),i.$tb.data("instance",i)),i.opts.toolbarInline?i.$box.addClass("fr-inline"):i.$box.addClass("fr-basic"),i.events.on("focus",function(){i.$tb.data("instance",i)},!0),i.opts.toolbarInline=!1):i.opts.toolbarInline?(i.$box.addClass("fr-inline"),i.shared.$tb?(i.$tb=i.shared.$tb,d()):(i.shared.$tb=be('<div class="fr-toolbar"></div>'),i.$tb=i.shared.$tb,p())):(i.$box.addClass("fr-basic"),i.$tb=be('<div class="fr-toolbar"></div>'),p(),i.$tb.data("instance",i)),i.events.on("destroy",f,!0),i.events.on(i.opts.toolbarInline||i.opts.toolbarContainer?"shared.destroy":"destroy",c,!0)},hide:n,show:function(){if(!1===i.events.trigger("toolbar.show"))return!1;i.$tb.show()},showInline:t,disable:function(){!u&&i.$tb&&(i.$tb.find("> .fr-command").addClass("fr-disabled fr-no-refresh").attr("aria-disabled",!0),u=!0)},enable:function(){u&&i.$tb&&(i.$tb.find("> .fr-command").removeClass("fr-disabled fr-no-refresh").attr("aria-disabled",!1),u=!1),i.button.bulkRefresh()}}},be.FE.PLUGINS.align=function(i){return{apply:function(e){var t=i.selection.element();if(be(t).parents(".fr-img-caption").length)be(t).css("text-align",e);else{i.selection.save(),i.html.wrap(!0,!0,!0,!0),i.selection.restore();for(var n=i.selection.blocks(),r=0;r<n.length;r++)i.helpers.getAlignment(be(n[r].parentNode))==e?be(n[r]).css("text-align","").removeClass("fr-temp-div"):be(n[r]).css("text-align",e).removeClass("fr-temp-div"),""===be(n[r]).attr("class")&&be(n[r]).removeAttr("class"),""===be(n[r]).attr("style")&&be(n[r]).removeAttr("style");i.selection.save(),i.html.unwrap(),i.selection.restore()}},refresh:function(e){var t=i.selection.blocks();if(t.length){var n=i.helpers.getAlignment(be(t[0]));e.find("> *:first").replaceWith(i.icon.create("align-"+n))}},refreshOnShow:function(e,t){var n=i.selection.blocks();if(n.length){var r=i.helpers.getAlignment(be(n[0]));t.find('a.fr-command[data-param1="'+r+'"]').addClass("fr-active").attr("aria-selected",!0)}}}},be.FE.DefineIcon("align",{NAME:"align-left"}),be.FE.DefineIcon("align-left",{NAME:"align-left"}),be.FE.DefineIcon("align-right",{NAME:"align-right"}),be.FE.DefineIcon("align-center",{NAME:"align-center"}),be.FE.DefineIcon("align-justify",{NAME:"align-justify"}),be.FE.RegisterCommand("align",{type:"dropdown",title:"Align",options:{left:"Align Left",center:"Align Center",right:"Align Right",justify:"Align Justify"},html:function(){var e='<ul class="fr-dropdown-list" role="presentation">',t=be.FE.COMMANDS.align.options;for(var n in t)t.hasOwnProperty(n)&&(e+='<li role="presentation"><a class="fr-command fr-title" tabIndex="-1" role="option" data-cmd="align" data-param1="'+n+'" title="'+this.language.translate(t[n])+'">'+this.icon.create("align-"+n)+'<span class="fr-sr-only">'+this.language.translate(t[n])+"</span></a></li>");return e+="</ul>"},callback:function(e,t){this.align.apply(t)},refresh:function(e){this.align.refresh(e)},refreshOnShow:function(e,t){this.align.refreshOnShow(e,t)},plugin:"align"}),be.extend(be.FE.DEFAULTS,{charCounterMax:-1,charCounterCount:!0}),be.FE.PLUGINS.charCounter=function(n){var r;function i(){return(n.el.textContent||"").replace(/\u200B/g,"").length}function e(e){if(n.opts.charCounterMax<0)return!0;if(i()<n.opts.charCounterMax)return!0;var t=e.which;return!(!n.keys.ctrlKey(e)&&n.keys.isCharacter(t)||t===be.FE.KEYCODE.IME)||(e.preventDefault(),e.stopPropagation(),n.events.trigger("charCounter.exceeded"),!1)}function t(e){return n.opts.charCounterMax<0?e:be("<div>").html(e).text().length+i()<=n.opts.charCounterMax?e:(n.events.trigger("charCounter.exceeded"),"")}function a(){if(n.opts.charCounterCount){var e=i()+(0<n.opts.charCounterMax?"/"+n.opts.charCounterMax:"");r.text(e),n.opts.toolbarBottom&&r.css("margin-bottom",n.$tb.outerHeight(!0));var t=n.$wp.get(0).offsetWidth-n.$wp.get(0).clientWidth;0<=t&&("rtl"==n.opts.direction?r.css("margin-left",t):r.css("margin-right",t))}}return{_init:function(){return!!n.$wp&&!!n.opts.charCounterCount&&((r=be('<span class="fr-counter"></span>')).css("bottom",n.$wp.css("border-bottom-width")),n.$box.append(r),n.events.on("keydown",e,!0),n.events.on("paste.afterCleanup",t),n.events.on("keyup contentChanged input",function(){n.events.trigger("charCounter.update")}),n.events.on("charCounter.update",a),n.events.trigger("charCounter.update"),void n.events.on("destroy",function(){be(n.o_win).off("resize.char"+n.id),r.removeData().remove(),r=null}))},count:i}},be.FE.PLUGINS.codeBeautifier=function(){var e,t,n,r,Y={};function x(r,e){var t={"@page":!0,"@font-face":!0,"@keyframes":!0,"@media":!0,"@supports":!0,"@document":!0},n={"@media":!0,"@supports":!0,"@document":!0};e=e||{},r=(r=r||"").replace(/\r\n|[\r\u2028\u2029]/g,"\n");var i=e.indent_size||4,a=e.indent_char||" ",o=e.selector_separator_newline===undefined||e.selector_separator_newline,s=e.end_with_newline!==undefined&&e.end_with_newline,l=e.newline_between_rules===undefined||e.newline_between_rules,d=e.eol?e.eol:"\n";"string"==typeof i&&(i=parseInt(i,10)),e.indent_with_tabs&&(a="\t",i=1),d=d.replace(/\\r/,"\r").replace(/\\n/,"\n");var c,f=/^\s+$/,p=-1,u=0;function h(){return(c=r.charAt(++p))||""}function g(e){var t,n=p;return e&&v(),t=r.charAt(p+1)||"",p=n-1,h(),t}function m(e){for(var t=p;h();)if("\\"===c)h();else{if(-1!==e.indexOf(c))break;if("\n"===c)break}return r.substring(t,p+1)}function v(){for(var e="";f.test(g());)h(),e+=c;return e}function E(){var e="";for(c&&f.test(c)&&(e=c);f.test(h());)e+=c;return e}function b(e){var t=p;for(e="/"===g(),h();h();){if(!e&&"*"===c&&"/"===g()){h();break}if(e&&"\n"===c)return r.substring(t,p)}return r.substring(t,p)+c}function T(e){return r.substring(p-e.length,p).toLowerCase()===e}function A(){for(var e=0,t=p+1;t<r.length;t++){var n=r.charAt(t);if("{"===n)return!0;if("("===n)e+=1;else if(")"===n){if(0==e)return!1;e-=1}else if(";"===n||"}"===n)return!1}return!1}var C=r.match(/^[\t ]*/)[0],S=new Array(i+1).join(a),R=0,y=0;for(var _,L,x={"{":function(e){x.singleSpace(),N.push(e),x.newLine()},"}":function(e){x.newLine(),N.push(e),x.newLine()},_lastCharWhitespace:function(){return f.test(N[N.length-1])},newLine:function(e){N.length&&(e||"\n"===N[N.length-1]||x.trim(),N.push("\n"),C&&N.push(C))},singleSpace:function(){N.length&&!x._lastCharWhitespace()&&N.push(" ")},preserveSingleSpace:function(){M&&x.singleSpace()},trim:function(){for(;x._lastCharWhitespace();)N.pop()}},N=[],w=!1,O=!1,I=!1,D="",k="";;){var F=E(),M=""!==F,$=-1!==F.indexOf("\n");if(k=D,!(D=c))break;if("/"===c&&"*"===g()){var B=0===R;($||B)&&x.newLine(),N.push(b()),x.newLine(),B&&x.newLine(!0)}else if("/"===c&&"/"===g())$||"{"===k||x.trim(),x.singleSpace(),N.push(b()),x.newLine();else if("@"===c){x.preserveSingleSpace(),N.push(c);var P=(void 0,_=p,L=m(": ,;{}()[]/='\""),p=_-1,h(),L);P.match(/[ :]$/)&&(h(),P=m(": ").replace(/\s$/,""),N.push(P),x.singleSpace()),(P=P.replace(/\s$/,""))in t&&(y+=1,P in n&&(I=!0))}else"#"===c&&"{"===g()?(x.preserveSingleSpace(),N.push(m("}"))):"{"===c?"}"===g(!0)?(v(),h(),x.singleSpace(),N.push("{}"),x.newLine(),l&&0===R&&x.newLine(!0)):(R++,C+=S,x["{"](c),I?(I=!1,w=y<R):w=y<=R):"}"===c?(R--,C=C.slice(0,-i),x["}"](c),O=w=!1,y&&y--,l&&0===R&&x.newLine(!0)):":"===c?(v(),!w&&!I||T("&")||A()?":"===g()?(h(),N.push("::")):N.push(":"):(O=!0,N.push(":"),x.singleSpace())):'"'===c||"'"===c?(x.preserveSingleSpace(),N.push(m(c))):";"===c?(O=!1,N.push(c),x.newLine()):"("===c?T("url")?(N.push(c),v(),h()&&(")"!==c&&'"'!==c&&"'"!==c?N.push(m(")")):p--)):(u++,x.preserveSingleSpace(),N.push(c),v()):")"===c?(N.push(c),u--):","===c?(N.push(c),v(),o&&!O&&u<1?x.newLine():x.singleSpace()):("]"===c||("["===c?x.preserveSingleSpace():"="===c?(v(),c="="):x.preserveSingleSpace()),N.push(c))}var U="";return C&&(U+=C),U+=N.join("").replace(/[\r\n\t ]+$/,""),s&&(U+="\n"),"\n"!=d&&(U=U.replace(/[\n]/g,d)),U}function G(e,t){for(var n=0;n<t.length;n+=1)if(t[n]===e)return!0;return!1}function V(e){return e.replace(/^\s+|\s+$/g,"")}function N(e,t){return new function(r,e){var o,i,a,s,l,d,c,f,p,t,n,u,h,g=[],m="";function v(e,t){var n=0;e&&(n=e.indentation_level,!o.just_added_newline()&&e.line_indent_level>n&&(n=e.line_indent_level));var r={mode:t,parent:e,last_text:e?e.last_text:"",last_word:e?e.last_word:"",declaration_statement:!1,declaration_assignment:!1,multiline_frame:!1,if_block:!1,else_block:!1,do_block:!1,do_while:!1,in_case_statement:!1,in_case:!1,case_body:!1,indentation_level:n,line_indent_level:e?e.line_indent_level:n,start_line_index:o.get_line_number(),ternary_depth:0};return r}u={TK_START_EXPR:function(){w();var e=k.Expression;if("["===s.text){if("TK_WORD"===l||")"===f.last_text)return"TK_RESERVED"===l&&G(f.last_text,a.line_starters)&&(o.space_before_token=!0),y(e),S(),R(),void(h.space_in_paren&&(o.space_before_token=!0));e=k.ArrayLiteral,_(f.mode)&&("["!==f.last_text&&(","!==f.last_text||"]"!==d&&"}"!==d)||h.keep_array_indentation||A())}else"TK_RESERVED"===l&&"for"===f.last_text?e=k.ForInitializer:"TK_RESERVED"===l&&G(f.last_text,["if","while"])&&(e=k.Conditional);";"===f.last_text||"TK_START_BLOCK"===l?A():"TK_END_EXPR"===l||"TK_START_EXPR"===l||"TK_END_BLOCK"===l||"."===f.last_text?T(s.wanted_newline):"TK_RESERVED"===l&&"("===s.text||"TK_WORD"===l||"TK_OPERATOR"===l?"TK_RESERVED"===l&&("function"===f.last_word||"typeof"===f.last_word)||"*"===f.last_text&&"function"===d?h.space_after_anon_function&&(o.space_before_token=!0):"TK_RESERVED"!==l||!G(f.last_text,a.line_starters)&&"catch"!==f.last_text||h.space_before_conditional&&(o.space_before_token=!0):o.space_before_token=!0,"("===s.text&&"TK_RESERVED"===l&&"await"===f.last_word&&(o.space_before_token=!0),"("===s.text&&("TK_EQUALS"!==l&&"TK_OPERATOR"!==l||N()||T()),y(e),S(),h.space_in_paren&&(o.space_before_token=!0),R()},TK_END_EXPR:function(){for(;f.mode===k.Statement;)x();f.multiline_frame&&T("]"===s.text&&_(f.mode)&&!h.keep_array_indentation),h.space_in_paren&&("TK_START_EXPR"!==l||h.space_in_empty_paren?o.space_before_token=!0:(o.trim(),o.space_before_token=!1)),"]"===s.text&&h.keep_array_indentation?(S(),x()):(x(),S()),o.remove_redundant_indentation(p),f.do_while&&p.mode===k.Conditional&&(p.mode=k.Expression,f.do_block=!1,f.do_while=!1)},TK_START_BLOCK:function(){var e=I(1),t=I(2);t&&(":"===t.text&&G(e.type,["TK_STRING","TK_WORD","TK_RESERVED"])||G(e.text,["get","set"])&&G(t.type,["TK_WORD","TK_RESERVED"]))?G(d,["class","interface"])?y(k.BlockStatement):y(k.ObjectLiteral):y(k.BlockStatement);var n=!e.comments_before.length&&"}"===e.text&&"function"===f.last_word&&"TK_END_EXPR"===l;"expand"===h.brace_style||"none"===h.brace_style&&s.wanted_newline?"TK_OPERATOR"!==l&&(n||"TK_EQUALS"===l||"TK_RESERVED"===l&&O(f.last_text)&&"else"!==f.last_text)?o.space_before_token=!0:A(!1,!0):"TK_OPERATOR"!==l&&"TK_START_EXPR"!==l?"TK_START_BLOCK"===l?A():o.space_before_token=!0:_(p.mode)&&","===f.last_text&&("}"===d?o.space_before_token=!0:A()),S(),R()},TK_END_BLOCK:function(){for(;f.mode===k.Statement;)x();var e="TK_START_BLOCK"===l;"expand"===h.brace_style?e||A():e||(_(f.mode)&&h.keep_array_indentation?(h.keep_array_indentation=!1,A(),h.keep_array_indentation=!0):A()),x(),S()},TK_WORD:D,TK_RESERVED:D,TK_SEMICOLON:function(){for(w()&&(o.space_before_token=!1);f.mode===k.Statement&&!f.if_block&&!f.do_block;)x();S()},TK_STRING:function(){w()?o.space_before_token=!0:"TK_RESERVED"===l||"TK_WORD"===l?o.space_before_token=!0:"TK_COMMA"===l||"TK_START_EXPR"===l||"TK_EQUALS"===l||"TK_OPERATOR"===l?N()||T():A(),S()},TK_EQUALS:function(){w(),f.declaration_statement&&(f.declaration_assignment=!0),o.space_before_token=!0,S(),o.space_before_token=!0},TK_OPERATOR:function(){if(w(),"TK_RESERVED"===l&&O(f.last_text))return o.space_before_token=!0,void S();if("*"!==s.text||"TK_DOT"!==l){if(":"===s.text&&f.in_case)return f.case_body=!0,R(),S(),A(),void(f.in_case=!1);if("::"!==s.text){"TK_OPERATOR"===l&&T();var e=!0,t=!0;G(s.text,["--","++","!","~"])||G(s.text,["-","+"])&&(G(l,["TK_START_BLOCK","TK_START_EXPR","TK_EQUALS","TK_OPERATOR"])||G(f.last_text,a.line_starters)||","===f.last_text)?(t=e=!1,!s.wanted_newline||"--"!==s.text&&"++"!==s.text||A(!1,!0),";"===f.last_text&&L(f.mode)&&(e=!0),"TK_RESERVED"===l?e=!0:"TK_END_EXPR"===l?e=!("]"===f.last_text&&("--"===s.text||"++"===s.text)):"TK_OPERATOR"===l&&(e=G(s.text,["--","-","++","+"])&&G(f.last_text,["--","-","++","+"]),G(s.text,["+","-"])&&G(f.last_text,["--","++"])&&(t=!0)),f.mode!==k.BlockStatement&&f.mode!==k.Statement||"{"!==f.last_text&&";"!==f.last_text||A()):":"===s.text?0===f.ternary_depth?e=!1:f.ternary_depth-=1:"?"===s.text?f.ternary_depth+=1:"*"===s.text&&"TK_RESERVED"===l&&"function"===f.last_text&&(t=e=!1),o.space_before_token=o.space_before_token||e,S(),o.space_before_token=t}else S()}else S()},TK_COMMA:function(){if(f.declaration_statement)return L(f.parent.mode)&&(f.declaration_assignment=!1),S(),void(f.declaration_assignment?A(f.declaration_assignment=!1,!0):(o.space_before_token=!0,h.comma_first&&T()));S(),f.mode===k.ObjectLiteral||f.mode===k.Statement&&f.parent.mode===k.ObjectLiteral?(f.mode===k.Statement&&x(),A()):(o.space_before_token=!0,h.comma_first&&T())},TK_BLOCK_COMMENT:function(){if(o.raw)return o.add_raw_token(s),void(s.directives&&"end"===s.directives.preserve&&(h.test_output_raw||(o.raw=!1)));if(s.directives)return A(!1,!0),S(),"start"===s.directives.preserve&&(o.raw=!0),void A(!1,!0);if(!Y.newline.test(s.text)&&!s.wanted_newline)return o.space_before_token=!0,S(),void(o.space_before_token=!0);var e,t=function(e){e=e.replace(/\x0d/g,"");for(var t=[],n=e.indexOf("\n");-1!==n;)t.push(e.substring(0,n)),e=e.substring(n+1),n=e.indexOf("\n");return e.length&&t.push(e),t}(s.text),n=!1,r=!1,i=s.whitespace_before,a=i.length;for(A(!1,!0),1<t.length&&(function(e,t){for(var n=0;n<e.length;n++){var r=V(e[n]);if(r.charAt(0)!==t)return!1}return!0}(t.slice(1),"*")?n=!0:function(e,t){for(var n,r=0,i=e.length;r<i;r++)if((n=e[r])&&0!==n.indexOf(t))return!1;return!0}(t.slice(1),i)&&(r=!0)),S(t[0]),e=1;e<t.length;e++)A(!1,!0),n?S(" "+t[e].replace(/^\s+/g,"")):r&&t[e].length>a?S(t[e].substring(a)):o.add_token(t[e]);A(!1,!0)},TK_COMMENT:function(){s.wanted_newline?A(!1,!0):o.trim(!0),o.space_before_token=!0,S(),A(!1,!0)},TK_DOT:function(){w(),"TK_RESERVED"===l&&O(f.last_text)?o.space_before_token=!0:T(")"===f.last_text&&h.break_chained_methods),S()},TK_UNKNOWN:function(){S(),"\n"===s.text[s.text.length-1]&&A()},TK_EOF:function(){for(;f.mode===k.Statement;)x()}},h={},(e=e||{}).braces_on_own_line!==undefined&&(h.brace_style=e.braces_on_own_line?"expand":"collapse");h.brace_style=e.brace_style?e.brace_style:h.brace_style?h.brace_style:"collapse","expand-strict"===h.brace_style&&(h.brace_style="expand");h.indent_size=e.indent_size?parseInt(e.indent_size,10):4,h.indent_char=e.indent_char?e.indent_char:" ",h.eol=e.eol?e.eol:"\n",h.preserve_newlines=e.preserve_newlines===undefined||e.preserve_newlines,h.break_chained_methods=e.break_chained_methods!==undefined&&e.break_chained_methods,h.max_preserve_newlines=e.max_preserve_newlines===undefined?0:parseInt(e.max_preserve_newlines,10),h.space_in_paren=e.space_in_paren!==undefined&&e.space_in_paren,h.space_in_empty_paren=e.space_in_empty_paren!==undefined&&e.space_in_empty_paren,h.jslint_happy=e.jslint_happy!==undefined&&e.jslint_happy,h.space_after_anon_function=e.space_after_anon_function!==undefined&&e.space_after_anon_function,h.keep_array_indentation=e.keep_array_indentation!==undefined&&e.keep_array_indentation,h.space_before_conditional=e.space_before_conditional===undefined||e.space_before_conditional,h.unescape_strings=e.unescape_strings!==undefined&&e.unescape_strings,h.wrap_line_length=e.wrap_line_length===undefined?0:parseInt(e.wrap_line_length,10),h.e4x=e.e4x!==undefined&&e.e4x,h.end_with_newline=e.end_with_newline!==undefined&&e.end_with_newline,h.comma_first=e.comma_first!==undefined&&e.comma_first,h.test_output_raw=e.test_output_raw!==undefined&&e.test_output_raw,h.jslint_happy&&(h.space_after_anon_function=!0);e.indent_with_tabs&&(h.indent_char="\t",h.indent_size=1);h.eol=h.eol.replace(/\\r/,"\r").replace(/\\n/,"\n"),c="";for(;0<h.indent_size;)c+=h.indent_char,h.indent_size-=1;var E=0;if(r&&r.length){for(;" "===r.charAt(E)||"\t"===r.charAt(E);)m+=r.charAt(E),E+=1;r=r.substring(E)}function b(e){var t=e.newlines,n=h.keep_array_indentation&&_(f.mode);if(n)for(r=0;r<t;r+=1)A(0<r);else if(h.max_preserve_newlines&&t>h.max_preserve_newlines&&(t=h.max_preserve_newlines),h.preserve_newlines&&1<e.newlines){A();for(var r=1;r<t;r+=1)A(!0)}u[(s=e).type]()}function T(e){if(e=e!==undefined&&e,!o.just_added_newline())if(h.preserve_newlines&&s.wanted_newline||e)A(!1,!0);else if(h.wrap_line_length){var t=o.current_line.get_character_count()+s.text.length+(o.space_before_token?1:0);t>=h.wrap_line_length&&A(!1,!0)}}function A(e,t){if(!t&&";"!==f.last_text&&","!==f.last_text&&"="!==f.last_text&&"TK_OPERATOR"!==l)for(;f.mode===k.Statement&&!f.if_block&&!f.do_block;)x();o.add_new_line(e)&&(f.multiline_frame=!0)}function C(){o.just_added_newline()&&(h.keep_array_indentation&&_(f.mode)&&s.wanted_newline?(o.current_line.push(s.whitespace_before),o.space_before_token=!1):o.set_indent(f.indentation_level)&&(f.line_indent_level=f.indentation_level))}function S(e){o.raw?o.add_raw_token(s):(h.comma_first&&"TK_COMMA"===l&&o.just_added_newline()&&","===o.previous_line.last()&&(o.previous_line.pop(),C(),o.add_token(","),o.space_before_token=!0),e=e||s.text,C(),o.add_token(e))}function R(){f.indentation_level+=1}function y(e){f?(t.push(f),p=f):p=v(null,e),f=v(p,e)}function _(e){return e===k.ArrayLiteral}function L(e){return G(e,[k.Expression,k.ForInitializer,k.Conditional])}function x(){0<t.length&&(p=f,f=t.pop(),p.mode===k.Statement&&o.remove_redundant_indentation(p))}function N(){return f.parent.mode===k.ObjectLiteral&&f.mode===k.Statement&&(":"===f.last_text&&0===f.ternary_depth||"TK_RESERVED"===l&&G(f.last_text,["get","set"]))}function w(){return!!("TK_RESERVED"===l&&G(f.last_text,["var","let","const"])&&"TK_WORD"===s.type||"TK_RESERVED"===l&&"do"===f.last_text||"TK_RESERVED"===l&&"return"===f.last_text&&!s.wanted_newline||"TK_RESERVED"===l&&"else"===f.last_text&&("TK_RESERVED"!==s.type||"if"!==s.text)||"TK_END_EXPR"===l&&(p.mode===k.ForInitializer||p.mode===k.Conditional)||"TK_WORD"===l&&f.mode===k.BlockStatement&&!f.in_case&&"--"!==s.text&&"++"!==s.text&&"function"!==d&&"TK_WORD"!==s.type&&"TK_RESERVED"!==s.type||f.mode===k.ObjectLiteral&&(":"===f.last_text&&0===f.ternary_depth||"TK_RESERVED"===l&&G(f.last_text,["get","set"])))&&(y(k.Statement),R(),"TK_RESERVED"===l&&G(f.last_text,["var","let","const"])&&"TK_WORD"===s.type&&(f.declaration_statement=!0),N()||T("TK_RESERVED"===s.type&&G(s.text,["do","for","if","while"])),!0)}function O(e){return G(e,["case","return","do","if","throw","else"])}function I(e){var t=i+(e||0);return t<0||t>=g.length?null:g[t]}function D(){if("TK_RESERVED"===s.type&&f.mode!==k.ObjectLiteral&&G(s.text,["set","get"])&&(s.type="TK_WORD"),"TK_RESERVED"===s.type&&f.mode===k.ObjectLiteral){var e=I(1);":"==e.text&&(s.type="TK_WORD")}if(w()||!s.wanted_newline||L(f.mode)||"TK_OPERATOR"===l&&"--"!==f.last_text&&"++"!==f.last_text||"TK_EQUALS"===l||!h.preserve_newlines&&"TK_RESERVED"===l&&G(f.last_text,["var","let","const","set","get"])||A(),f.do_block&&!f.do_while){if("TK_RESERVED"===s.type&&"while"===s.text)return o.space_before_token=!0,S(),o.space_before_token=!0,void(f.do_while=!0);A(),f.do_block=!1}if(f.if_block)if(f.else_block||"TK_RESERVED"!==s.type||"else"!==s.text){for(;f.mode===k.Statement;)x();f.if_block=!1,f.else_block=!1}else f.else_block=!0;if("TK_RESERVED"===s.type&&("case"===s.text||"default"===s.text&&f.in_case_statement))return A(),(f.case_body||h.jslint_happy)&&(0<f.indentation_level&&(!f.parent||f.indentation_level>f.parent.indentation_level)&&(f.indentation_level-=1),f.case_body=!1),S(),f.in_case=!0,void(f.in_case_statement=!0);if("TK_RESERVED"===s.type&&"function"===s.text&&((G(f.last_text,["}",";"])||o.just_added_newline()&&!G(f.last_text,["[","{",":","=",","]))&&(o.just_added_blankline()||s.comments_before.length||(A(),A(!0))),"TK_RESERVED"===l||"TK_WORD"===l?"TK_RESERVED"===l&&G(f.last_text,["get","set","new","return","export","async"])?o.space_before_token=!0:"TK_RESERVED"===l&&"default"===f.last_text&&"export"===d?o.space_before_token=!0:A():"TK_OPERATOR"===l||"="===f.last_text?o.space_before_token=!0:(f.multiline_frame||!L(f.mode)&&!_(f.mode))&&A()),"TK_COMMA"!==l&&"TK_START_EXPR"!==l&&"TK_EQUALS"!==l&&"TK_OPERATOR"!==l||N()||T(),"TK_RESERVED"===s.type&&G(s.text,["function","get","set"]))return S(),void(f.last_word=s.text);if(n="NONE","TK_END_BLOCK"===l?"TK_RESERVED"===s.type&&G(s.text,["else","catch","finally"])?"expand"===h.brace_style||"end-expand"===h.brace_style||"none"===h.brace_style&&s.wanted_newline?n="NEWLINE":(n="SPACE",o.space_before_token=!0):n="NEWLINE":"TK_SEMICOLON"===l&&f.mode===k.BlockStatement?n="NEWLINE":"TK_SEMICOLON"===l&&L(f.mode)?n="SPACE":"TK_STRING"===l?n="NEWLINE":"TK_RESERVED"===l||"TK_WORD"===l||"*"===f.last_text&&"function"===d?n="SPACE":"TK_START_BLOCK"===l?n="NEWLINE":"TK_END_EXPR"===l&&(o.space_before_token=!0,n="NEWLINE"),"TK_RESERVED"===s.type&&G(s.text,a.line_starters)&&")"!==f.last_text&&(n="else"===f.last_text||"export"===f.last_text?"SPACE":"NEWLINE"),"TK_RESERVED"===s.type&&G(s.text,["else","catch","finally"]))if("TK_END_BLOCK"!==l||"expand"===h.brace_style||"end-expand"===h.brace_style||"none"===h.brace_style&&s.wanted_newline)A();else{o.trim(!0);var t=o.current_line;"}"!==t.last()&&A(),o.space_before_token=!0}else"NEWLINE"===n?"TK_RESERVED"===l&&O(f.last_text)?o.space_before_token=!0:"TK_END_EXPR"!==l?"TK_START_EXPR"===l&&"TK_RESERVED"===s.type&&G(s.text,["var","let","const"])||":"===f.last_text||("TK_RESERVED"===s.type&&"if"===s.text&&"else"===f.last_text?o.space_before_token=!0:A()):"TK_RESERVED"===s.type&&G(s.text,a.line_starters)&&")"!==f.last_text&&A():f.multiline_frame&&_(f.mode)&&","===f.last_text&&"}"===d?A():"SPACE"===n&&(o.space_before_token=!0);S(),f.last_word=s.text,"TK_RESERVED"===s.type&&"do"===s.text&&(f.do_block=!0),"TK_RESERVED"===s.type&&"if"===s.text&&(f.if_block=!0)}l="TK_START_BLOCK",d="",(o=new function(t,n){n=n||"",this.indent_cache=[n],this.baseIndentLength=n.length,this.indent_length=t.length,this.raw=!1;var r=[];this.baseIndentString=n,this.indent_string=t,this.previous_line=null,this.current_line=null,this.space_before_token=!1,this.add_outputline=function(){this.previous_line=this.current_line,this.current_line=new function(t){var n=0,r=-1,i=[],a=!0;this.set_indent=function(e){n=t.baseIndentLength+e*t.indent_length,r=e},this.get_character_count=function(){return n},this.is_empty=function(){return a},this.last=function(){return this._empty?null:i[i.length-1]},this.push=function(e){i.push(e),n+=e.length,a=!1},this.pop=function(){var e=null;return a||(e=i.pop(),n-=e.length,a=0===i.length),e},this.remove_indent=function(){0<r&&(r-=1,n-=t.indent_length)},this.trim=function(){for(;" "===this.last();){i.pop();n-=1}a=0===i.length},this.toString=function(){var e="";return this._empty||(0<=r&&(e=t.indent_cache[r]),e+=i.join("")),e}}(this),r.push(this.current_line)},this.add_outputline(),this.get_line_number=function(){return r.length},this.add_new_line=function(e){return(1!==this.get_line_number()||!this.just_added_newline())&&(!(!e&&this.just_added_newline())&&(this.raw||this.add_outputline(),!0))},this.get_code=function(){var e=r.join("\n").replace(/[\r\n\t ]+$/,"");return e},this.set_indent=function(e){if(1<r.length){for(;e>=this.indent_cache.length;)this.indent_cache.push(this.indent_cache[this.indent_cache.length-1]+this.indent_string);return this.current_line.set_indent(e),!0}return this.current_line.set_indent(0),!1},this.add_raw_token=function(e){for(var t=0;t<e.newlines;t++)this.add_outputline();this.current_line.push(e.whitespace_before),this.current_line.push(e.text),this.space_before_token=!1},this.add_token=function(e){this.add_space_before_token(),this.current_line.push(e)},this.add_space_before_token=function(){this.space_before_token&&!this.just_added_newline()&&this.current_line.push(" "),this.space_before_token=!1},this.remove_redundant_indentation=function(e){if(!e.multiline_frame&&e.mode!==k.ForInitializer&&e.mode!==k.Conditional)for(var t=e.start_line_index,n=r.length;t<n;)r[t].remove_indent(),t++},this.trim=function(e){for(e=e!==undefined&&e,this.current_line.trim(t,n);e&&1<r.length&&this.current_line.is_empty();)r.pop(),this.current_line=r[r.length-1],this.current_line.trim();this.previous_line=1<r.length?r[r.length-2]:null},this.just_added_newline=function(){return this.current_line.is_empty()},this.just_added_blankline=function(){if(this.just_added_newline()){if(1===r.length)return!0;var e=r[r.length-2];return e.is_empty()}return!1}}(c,m)).raw=h.test_output_raw,t=[],y(k.BlockStatement),this.beautify=function(){var e,t;for(a=new function(y,_,e){var L="\n\r\t ".split(""),x=/[0-9]/,N=/[01234567]/,w=/[0123456789abcdefABCDEF]/,O="+ - * / % & ++ -- = += -= *= /= %= == === != !== > < >= <= >> << >>> >>>= >>= <<= && &= | || ! ~ , : ? ^ ^= |= :: =>".split(" ");this.line_starters="continue,try,throw,return,var,let,const,if,switch,case,default,for,while,break,function,import,export".split(",");var I,D,k,F,M,$,B=this.line_starters.concat(["do","in","else","get","set","new","catch","finally","typeof","yield","async","await"]),P=/([\s\S]*?)((?:\*\/)|$)/g,U=/([^\n\r\u2028\u2029]*)/g,K=/\/\* beautify( \w+[:]\w+)+ \*\//g,H=/ (\w+)[:](\w+)/g,W=/([\s\S]*?)((?:\/\*\sbeautify\signore:end\s\*\/)|$)/g,z=/((<\?php|<\?=)[\s\S]*?\?>)|(<%[\s\S]*?%>)/g;function o(){var e,t,n=[];if(I=0,D="",$<=M)return["","TK_EOF"];t=F.length?F[F.length-1]:new X("TK_START_BLOCK","{");var r=y.charAt(M);for(M+=1;G(r,L);){if(Y.newline.test(r)?"\n"===r&&"\r"===y.charAt(M-2)||(I+=1,n=[]):n.push(r),$<=M)return["","TK_EOF"];r=y.charAt(M),M+=1}if(n.length&&(D=n.join("")),x.test(r)){var i=!0,a=!0,o=x;for("0"===r&&M<$&&/[Xxo]/.test(y.charAt(M))?(a=i=!1,r+=y.charAt(M),M+=1,o=/[o]/.test(y.charAt(M))?N:w):(r="",M-=1);M<$&&o.test(y.charAt(M));)r+=y.charAt(M),M+=1,i&&M<$&&"."===y.charAt(M)&&(r+=y.charAt(M),M+=1,i=!1),a&&M<$&&/[Ee]/.test(y.charAt(M))&&(r+=y.charAt(M),(M+=1)<$&&/[+-]/.test(y.charAt(M))&&(r+=y.charAt(M),M+=1),i=a=!1);return[r,"TK_WORD"]}if(Y.isIdentifierStart(y.charCodeAt(M-1))){if(M<$)for(;Y.isIdentifierChar(y.charCodeAt(M))&&(r+=y.charAt(M),(M+=1)!==$););return"TK_DOT"===t.type||"TK_RESERVED"===t.type&&G(t.text,["set","get"])||!G(r,B)?[r,"TK_WORD"]:"in"===r?[r,"TK_OPERATOR"]:[r,"TK_RESERVED"]}if("("===r||"["===r)return[r,"TK_START_EXPR"];if(")"===r||"]"===r)return[r,"TK_END_EXPR"];if("{"===r)return[r,"TK_START_BLOCK"];if("}"===r)return[r,"TK_END_BLOCK"];if(";"===r)return[r,"TK_SEMICOLON"];if("/"===r){var s="";if("*"===y.charAt(M)){M+=1,P.lastIndex=M;var l=P.exec(y);s="/*"+l[0],M+=l[0].length;var d=function(e){if(!e.match(K))return null;var t={};H.lastIndex=0;var n=H.exec(e);for(;n;)t[n[1]]=n[2],n=H.exec(e);return t}(s);return d&&"start"===d.ignore&&(W.lastIndex=M,l=W.exec(y),s+=l[0],M+=l[0].length),[s=s.replace(Y.lineBreak,"\n"),"TK_BLOCK_COMMENT",d]}if("/"===y.charAt(M)){M+=1,U.lastIndex=M;var l=U.exec(y);return s="//"+l[0],M+=l[0].length,[s,"TK_COMMENT"]}}if("`"===r||"'"===r||'"'===r||("/"===r||_.e4x&&"<"===r&&y.slice(M-1).match(/^<([-a-zA-Z:0-9_.]+|{[^{}]*}|!\[CDATA\[[\s\S]*?\]\])(\s+[-a-zA-Z:0-9_.]+\s*=\s*('[^']*'|"[^"]*"|{.*?}))*\s*(\/?)\s*>/))&&("TK_RESERVED"===t.type&&G(t.text,["return","case","throw","else","do","typeof","yield"])||"TK_END_EXPR"===t.type&&")"===t.text&&t.parent&&"TK_RESERVED"===t.parent.type&&G(t.parent.text,["if","while","for"])||G(t.type,["TK_COMMENT","TK_START_EXPR","TK_START_BLOCK","TK_END_BLOCK","TK_OPERATOR","TK_EQUALS","TK_EOF","TK_SEMICOLON","TK_COMMA"]))){var c=r,f=!1,p=!1;if(e=r,"/"===c)for(var u=!1;M<$&&(f||u||y.charAt(M)!==c)&&!Y.newline.test(y.charAt(M));)e+=y.charAt(M),f?f=!1:(f="\\"===y.charAt(M),"["===y.charAt(M)?u=!0:"]"===y.charAt(M)&&(u=!1)),M+=1;else if(_.e4x&&"<"===c){var h=/<(\/?)([-a-zA-Z:0-9_.]+|{[^{}]*}|!\[CDATA\[[\s\S]*?\]\])(\s+[-a-zA-Z:0-9_.]+\s*=\s*('[^']*'|"[^"]*"|{.*?}))*\s*(\/?)\s*>/g,g=y.slice(M-1),m=h.exec(g);if(m&&0===m.index){for(var v=m[2],E=0;m;){var b=!!m[1],T=m[2],A=!!m[m.length-1]||"![CDATA["===T.slice(0,8);if(T!==v||A||(b?--E:++E),E<=0)break;m=h.exec(g)}var C=m?m.index+m[0].length:g.length;return g=g.slice(0,C),M+=C-1,[g=g.replace(Y.lineBreak,"\n"),"TK_STRING"]}}else for(;M<$&&(f||y.charAt(M)!==c&&("`"===c||!Y.newline.test(y.charAt(M))));)(f||"`"===c)&&Y.newline.test(y.charAt(M))?("\r"===y.charAt(M)&&"\n"===y.charAt(M+1)&&(M+=1),e+="\n"):e+=y.charAt(M),f?("x"!==y.charAt(M)&&"u"!==y.charAt(M)||(p=!0),f=!1):f="\\"===y.charAt(M),M+=1;if(p&&_.unescape_strings&&(e=function(e){var t,n=!1,r="",i=0,a="",o=0;for(;n||i<e.length;)if(t=e.charAt(i),i++,n){if(n=!1,"x"===t)a=e.substr(i,2),i+=2;else{if("u"!==t){r+="\\"+t;continue}a=e.substr(i,4),i+=4}if(!a.match(/^[0123456789abcdefABCDEF]+$/))return e;if(0<=(o=parseInt(a,16))&&o<32){r+="x"===t?"\\x"+a:"\\u"+a;continue}if(34===o||39===o||92===o)r+="\\"+String.fromCharCode(o);else{if("x"===t&&126<o&&o<=255)return e;r+=String.fromCharCode(o)}}else"\\"===t?n=!0:r+=t;return r}(e)),M<$&&y.charAt(M)===c&&(e+=c,M+=1,"/"===c))for(;M<$&&Y.isIdentifierStart(y.charCodeAt(M));)e+=y.charAt(M),M+=1;return[e,"TK_STRING"]}if("#"===r){if(0===F.length&&"!"===y.charAt(M)){for(e=r;M<$&&"\n"!==r;)r=y.charAt(M),e+=r,M+=1;return[V(e)+"\n","TK_UNKNOWN"]}var S="#";if(M<$&&x.test(y.charAt(M))){for(;r=y.charAt(M),S+=r,(M+=1)<$&&"#"!==r&&"="!==r;);return"#"===r||("["===y.charAt(M)&&"]"===y.charAt(M+1)?(S+="[]",M+=2):"{"===y.charAt(M)&&"}"===y.charAt(M+1)&&(S+="{}",M+=2)),[S,"TK_WORD"]}}if("<"===r&&("?"===y.charAt(M)||"%"===y.charAt(M))){z.lastIndex=M-1;var R=z.exec(y);if(R)return r=R[0],M+=r.length-1,[r=r.replace(Y.lineBreak,"\n"),"TK_STRING"]}if("<"===r&&"\x3c!--"===y.substring(M-1,M+3)){for(M+=3,r="\x3c!--";!Y.newline.test(y.charAt(M))&&M<$;)r+=y.charAt(M),M++;return k=!0,[r,"TK_COMMENT"]}if("-"===r&&k&&"--\x3e"===y.substring(M-1,M+2))return k=!1,M+=2,["--\x3e","TK_COMMENT"];if("."===r)return[r,"TK_DOT"];if(G(r,O)){for(;M<$&&G(r+y.charAt(M),O)&&(r+=y.charAt(M),!($<=(M+=1))););return","===r?[r,"TK_COMMA"]:"="===r?[r,"TK_EQUALS"]:[r,"TK_OPERATOR"]}return[r,"TK_UNKNOWN"]}this.tokenize=function(){var e,t,n;$=y.length,M=0,k=!1,F=[];for(var r=null,i=[],a=[];!t||"TK_EOF"!==t.type;){for(n=o(),e=new X(n[1],n[0],I,D);"TK_COMMENT"===e.type||"TK_BLOCK_COMMENT"===e.type||"TK_UNKNOWN"===e.type;)"TK_BLOCK_COMMENT"===e.type&&(e.directives=n[2]),a.push(e),n=o(),e=new X(n[1],n[0],I,D);a.length&&(e.comments_before=a,a=[]),"TK_START_BLOCK"===e.type||"TK_START_EXPR"===e.type?(e.parent=t,i.push(r),r=e):("TK_END_BLOCK"===e.type||"TK_END_EXPR"===e.type)&&r&&("]"===e.text&&"["===r.text||")"===e.text&&"("===r.text||"}"===e.text&&"{"===r.text)&&(e.parent=r.parent,r=i.pop()),F.push(e),t=e}return F}}(r,h,c),g=a.tokenize(),i=0;e=I();){for(var n=0;n<e.comments_before.length;n++)b(e.comments_before[n]);b(e),d=f.last_text,l=e.type,f.last_text=e.text,i+=1}return t=o.get_code(),h.end_with_newline&&(t+="\n"),"\n"!=h.eol&&(t=t.replace(/[\n]/g,h.eol)),t}}(e,t).beautify()}e=Y,t="\xaa\xb5\xba\xc0-\xd6\xd8-\xf6\xf8-\u02c1\u02c6-\u02d1\u02e0-\u02e4\u02ec\u02ee\u0370-\u0374\u0376\u0377\u037a-\u037d\u0386\u0388-\u038a\u038c\u038e-\u03a1\u03a3-\u03f5\u03f7-\u0481\u048a-\u0527\u0531-\u0556\u0559\u0561-\u0587\u05d0-\u05ea\u05f0-\u05f2\u0620-\u064a\u066e\u066f\u0671-\u06d3\u06d5\u06e5\u06e6\u06ee\u06ef\u06fa-\u06fc\u06ff\u0710\u0712-\u072f\u074d-\u07a5\u07b1\u07ca-\u07ea\u07f4\u07f5\u07fa\u0800-\u0815\u081a\u0824\u0828\u0840-\u0858\u08a0\u08a2-\u08ac\u0904-\u0939\u093d\u0950\u0958-\u0961\u0971-\u0977\u0979-\u097f\u0985-\u098c\u098f\u0990\u0993-\u09a8\u09aa-\u09b0\u09b2\u09b6-\u09b9\u09bd\u09ce\u09dc\u09dd\u09df-\u09e1\u09f0\u09f1\u0a05-\u0a0a\u0a0f\u0a10\u0a13-\u0a28\u0a2a-\u0a30\u0a32\u0a33\u0a35\u0a36\u0a38\u0a39\u0a59-\u0a5c\u0a5e\u0a72-\u0a74\u0a85-\u0a8d\u0a8f-\u0a91\u0a93-\u0aa8\u0aaa-\u0ab0\u0ab2\u0ab3\u0ab5-\u0ab9\u0abd\u0ad0\u0ae0\u0ae1\u0b05-\u0b0c\u0b0f\u0b10\u0b13-\u0b28\u0b2a-\u0b30\u0b32\u0b33\u0b35-\u0b39\u0b3d\u0b5c\u0b5d\u0b5f-\u0b61\u0b71\u0b83\u0b85-\u0b8a\u0b8e-\u0b90\u0b92-\u0b95\u0b99\u0b9a\u0b9c\u0b9e\u0b9f\u0ba3\u0ba4\u0ba8-\u0baa\u0bae-\u0bb9\u0bd0\u0c05-\u0c0c\u0c0e-\u0c10\u0c12-\u0c28\u0c2a-\u0c33\u0c35-\u0c39\u0c3d\u0c58\u0c59\u0c60\u0c61\u0c85-\u0c8c\u0c8e-\u0c90\u0c92-\u0ca8\u0caa-\u0cb3\u0cb5-\u0cb9\u0cbd\u0cde\u0ce0\u0ce1\u0cf1\u0cf2\u0d05-\u0d0c\u0d0e-\u0d10\u0d12-\u0d3a\u0d3d\u0d4e\u0d60\u0d61\u0d7a-\u0d7f\u0d85-\u0d96\u0d9a-\u0db1\u0db3-\u0dbb\u0dbd\u0dc0-\u0dc6\u0e01-\u0e30\u0e32\u0e33\u0e40-\u0e46\u0e81\u0e82\u0e84\u0e87\u0e88\u0e8a\u0e8d\u0e94-\u0e97\u0e99-\u0e9f\u0ea1-\u0ea3\u0ea5\u0ea7\u0eaa\u0eab\u0ead-\u0eb0\u0eb2\u0eb3\u0ebd\u0ec0-\u0ec4\u0ec6\u0edc-\u0edf\u0f00\u0f40-\u0f47\u0f49-\u0f6c\u0f88-\u0f8c\u1000-\u102a\u103f\u1050-\u1055\u105a-\u105d\u1061\u1065\u1066\u106e-\u1070\u1075-\u1081\u108e\u10a0-\u10c5\u10c7\u10cd\u10d0-\u10fa\u10fc-\u1248\u124a-\u124d\u1250-\u1256\u1258\u125a-\u125d\u1260-\u1288\u128a-\u128d\u1290-\u12b0\u12b2-\u12b5\u12b8-\u12be\u12c0\u12c2-\u12c5\u12c8-\u12d6\u12d8-\u1310\u1312-\u1315\u1318-\u135a\u1380-\u138f\u13a0-\u13f4\u1401-\u166c\u166f-\u167f\u1681-\u169a\u16a0-\u16ea\u16ee-\u16f0\u1700-\u170c\u170e-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176c\u176e-\u1770\u1780-\u17b3\u17d7\u17dc\u1820-\u1877\u1880-\u18a8\u18aa\u18b0-\u18f5\u1900-\u191c\u1950-\u196d\u1970-\u1974\u1980-\u19ab\u19c1-\u19c7\u1a00-\u1a16\u1a20-\u1a54\u1aa7\u1b05-\u1b33\u1b45-\u1b4b\u1b83-\u1ba0\u1bae\u1baf\u1bba-\u1be5\u1c00-\u1c23\u1c4d-\u1c4f\u1c5a-\u1c7d\u1ce9-\u1cec\u1cee-\u1cf1\u1cf5\u1cf6\u1d00-\u1dbf\u1e00-\u1f15\u1f18-\u1f1d\u1f20-\u1f45\u1f48-\u1f4d\u1f50-\u1f57\u1f59\u1f5b\u1f5d\u1f5f-\u1f7d\u1f80-\u1fb4\u1fb6-\u1fbc\u1fbe\u1fc2-\u1fc4\u1fc6-\u1fcc\u1fd0-\u1fd3\u1fd6-\u1fdb\u1fe0-\u1fec\u1ff2-\u1ff4\u1ff6-\u1ffc\u2071\u207f\u2090-\u209c\u2102\u2107\u210a-\u2113\u2115\u2119-\u211d\u2124\u2126\u2128\u212a-\u212d\u212f-\u2139\u213c-\u213f\u2145-\u2149\u214e\u2160-\u2188\u2c00-\u2c2e\u2c30-\u2c5e\u2c60-\u2ce4\u2ceb-\u2cee\u2cf2\u2cf3\u2d00-\u2d25\u2d27\u2d2d\u2d30-\u2d67\u2d6f\u2d80-\u2d96\u2da0-\u2da6\u2da8-\u2dae\u2db0-\u2db6\u2db8-\u2dbe\u2dc0-\u2dc6\u2dc8-\u2dce\u2dd0-\u2dd6\u2dd8-\u2dde\u2e2f\u3005-\u3007\u3021-\u3029\u3031-\u3035\u3038-\u303c\u3041-\u3096\u309d-\u309f\u30a1-\u30fa\u30fc-\u30ff\u3105-\u312d\u3131-\u318e\u31a0-\u31ba\u31f0-\u31ff\u3400-\u4db5\u4e00-\u9fcc\ua000-\ua48c\ua4d0-\ua4fd\ua500-\ua60c\ua610-\ua61f\ua62a\ua62b\ua640-\ua66e\ua67f-\ua697\ua6a0-\ua6ef\ua717-\ua71f\ua722-\ua788\ua78b-\ua78e\ua790-\ua793\ua7a0-\ua7aa\ua7f8-\ua801\ua803-\ua805\ua807-\ua80a\ua80c-\ua822\ua840-\ua873\ua882-\ua8b3\ua8f2-\ua8f7\ua8fb\ua90a-\ua925\ua930-\ua946\ua960-\ua97c\ua984-\ua9b2\ua9cf\uaa00-\uaa28\uaa40-\uaa42\uaa44-\uaa4b\uaa60-\uaa76\uaa7a\uaa80-\uaaaf\uaab1\uaab5\uaab6\uaab9-\uaabd\uaac0\uaac2\uaadb-\uaadd\uaae0-\uaaea\uaaf2-\uaaf4\uab01-\uab06\uab09-\uab0e\uab11-\uab16\uab20-\uab26\uab28-\uab2e\uabc0-\uabe2\uac00-\ud7a3\ud7b0-\ud7c6\ud7cb-\ud7fb\uf900-\ufa6d\ufa70-\ufad9\ufb00-\ufb06\ufb13-\ufb17\ufb1d\ufb1f-\ufb28\ufb2a-\ufb36\ufb38-\ufb3c\ufb3e\ufb40\ufb41\ufb43\ufb44\ufb46-\ufbb1\ufbd3-\ufd3d\ufd50-\ufd8f\ufd92-\ufdc7\ufdf0-\ufdfb\ufe70-\ufe74\ufe76-\ufefc\uff21-\uff3a\uff41-\uff5a\uff66-\uffbe\uffc2-\uffc7\uffca-\uffcf\uffd2-\uffd7\uffda-\uffdc",n=new RegExp("["+t+"]"),r=new RegExp("["+t+"\u0300-\u036f\u0483-\u0487\u0591-\u05bd\u05bf\u05c1\u05c2\u05c4\u05c5\u05c7\u0610-\u061a\u0620-\u0649\u0672-\u06d3\u06e7-\u06e8\u06fb-\u06fc\u0730-\u074a\u0800-\u0814\u081b-\u0823\u0825-\u0827\u0829-\u082d\u0840-\u0857\u08e4-\u08fe\u0900-\u0903\u093a-\u093c\u093e-\u094f\u0951-\u0957\u0962-\u0963\u0966-\u096f\u0981-\u0983\u09bc\u09be-\u09c4\u09c7\u09c8\u09d7\u09df-\u09e0\u0a01-\u0a03\u0a3c\u0a3e-\u0a42\u0a47\u0a48\u0a4b-\u0a4d\u0a51\u0a66-\u0a71\u0a75\u0a81-\u0a83\u0abc\u0abe-\u0ac5\u0ac7-\u0ac9\u0acb-\u0acd\u0ae2-\u0ae3\u0ae6-\u0aef\u0b01-\u0b03\u0b3c\u0b3e-\u0b44\u0b47\u0b48\u0b4b-\u0b4d\u0b56\u0b57\u0b5f-\u0b60\u0b66-\u0b6f\u0b82\u0bbe-\u0bc2\u0bc6-\u0bc8\u0bca-\u0bcd\u0bd7\u0be6-\u0bef\u0c01-\u0c03\u0c46-\u0c48\u0c4a-\u0c4d\u0c55\u0c56\u0c62-\u0c63\u0c66-\u0c6f\u0c82\u0c83\u0cbc\u0cbe-\u0cc4\u0cc6-\u0cc8\u0cca-\u0ccd\u0cd5\u0cd6\u0ce2-\u0ce3\u0ce6-\u0cef\u0d02\u0d03\u0d46-\u0d48\u0d57\u0d62-\u0d63\u0d66-\u0d6f\u0d82\u0d83\u0dca\u0dcf-\u0dd4\u0dd6\u0dd8-\u0ddf\u0df2\u0df3\u0e34-\u0e3a\u0e40-\u0e45\u0e50-\u0e59\u0eb4-\u0eb9\u0ec8-\u0ecd\u0ed0-\u0ed9\u0f18\u0f19\u0f20-\u0f29\u0f35\u0f37\u0f39\u0f41-\u0f47\u0f71-\u0f84\u0f86-\u0f87\u0f8d-\u0f97\u0f99-\u0fbc\u0fc6\u1000-\u1029\u1040-\u1049\u1067-\u106d\u1071-\u1074\u1082-\u108d\u108f-\u109d\u135d-\u135f\u170e-\u1710\u1720-\u1730\u1740-\u1750\u1772\u1773\u1780-\u17b2\u17dd\u17e0-\u17e9\u180b-\u180d\u1810-\u1819\u1920-\u192b\u1930-\u193b\u1951-\u196d\u19b0-\u19c0\u19c8-\u19c9\u19d0-\u19d9\u1a00-\u1a15\u1a20-\u1a53\u1a60-\u1a7c\u1a7f-\u1a89\u1a90-\u1a99\u1b46-\u1b4b\u1b50-\u1b59\u1b6b-\u1b73\u1bb0-\u1bb9\u1be6-\u1bf3\u1c00-\u1c22\u1c40-\u1c49\u1c5b-\u1c7d\u1cd0-\u1cd2\u1d00-\u1dbe\u1e01-\u1f15\u200c\u200d\u203f\u2040\u2054\u20d0-\u20dc\u20e1\u20e5-\u20f0\u2d81-\u2d96\u2de0-\u2dff\u3021-\u3028\u3099\u309a\ua640-\ua66d\ua674-\ua67d\ua69f\ua6f0-\ua6f1\ua7f8-\ua800\ua806\ua80b\ua823-\ua827\ua880-\ua881\ua8b4-\ua8c4\ua8d0-\ua8d9\ua8f3-\ua8f7\ua900-\ua909\ua926-\ua92d\ua930-\ua945\ua980-\ua983\ua9b3-\ua9c0\uaa00-\uaa27\uaa40-\uaa41\uaa4c-\uaa4d\uaa50-\uaa59\uaa7b\uaae0-\uaae9\uaaf2-\uaaf3\uabc0-\uabe1\uabec\uabed\uabf0-\uabf9\ufb20-\ufb28\ufe00-\ufe0f\ufe20-\ufe26\ufe33\ufe34\ufe4d-\ufe4f\uff10-\uff19\uff3f]"),e.newline=/[\n\r\u2028\u2029]/,e.lineBreak=new RegExp("\r\n|"+e.newline.source),e.allLineBreaks=new RegExp(e.lineBreak.source,"g"),e.isIdentifierStart=function(e){return e<65?36===e||64===e:e<91||(e<97?95===e:e<123||170<=e&&n.test(String.fromCharCode(e)))},e.isIdentifierChar=function(e){return e<48?36===e:e<58||!(e<65)&&(e<91||(e<97?95===e:e<123||170<=e&&r.test(String.fromCharCode(e))))};var k={BlockStatement:"BlockStatement",Statement:"Statement",ObjectLiteral:"ObjectLiteral",ArrayLiteral:"ArrayLiteral",ForInitializer:"ForInitializer",Conditional:"Conditional",Expression:"Expression"};var X=function(e,t,n,r,i,a){this.type=e,this.text=t,this.comments_before=[],this.newlines=n||0,this.wanted_newline=0<n,this.whitespace_before=r||"",this.parent=null,this.directives=null};return{run:function(e,t){function o(e){return e.replace(/\s+$/g,"")}var n,r,i,m,a,s,v,l,d,E,b,T,c,f;for((t=t||{}).wrap_line_length!==undefined&&0!==parseInt(t.wrap_line_length,10)||t.max_char===undefined||0===parseInt(t.max_char,10)||(t.wrap_line_length=t.max_char),r=t.indent_inner_html!==undefined&&t.indent_inner_html,i=t.indent_size===undefined?4:parseInt(t.indent_size,10),m=t.indent_char===undefined?" ":t.indent_char,s=t.brace_style===undefined?"collapse":t.brace_style,a=0===parseInt(t.wrap_line_length,10)?32786:parseInt(t.wrap_line_length||250,10),v=t.unformatted||["a","span","img","bdo","em","strong","dfn","code","samp","kbd","var","cite","abbr","acronym","q","sub","sup","tt","i","b","big","small","u","s","strike","font","ins","del","address","pre"],l=t.preserve_newlines===undefined||t.preserve_newlines,d=l?isNaN(parseInt(t.max_preserve_newlines,10))?32786:parseInt(t.max_preserve_newlines,10):0,E=t.indent_handlebars!==undefined&&t.indent_handlebars,b=t.wrap_attributes===undefined?"auto":t.wrap_attributes,T=t.wrap_attributes_indent_size===undefined?i:parseInt(t.wrap_attributes_indent_size,10)||i,c=t.end_with_newline!==undefined&&t.end_with_newline,f=Array.isArray(t.extra_liners)?t.extra_liners.concat():"string"==typeof t.extra_liners?t.extra_liners.split(","):"head,body,/html".split(","),t.indent_with_tabs&&(m="\t",i=1),(n=new function(){return this.pos=0,this.token="",this.current_mode="CONTENT",this.tags={parent:"parent1",parentcount:1,parent1:""},this.tag_type="",this.token_text=this.last_token=this.last_text=this.token_type="",this.newlines=0,this.indent_content=r,this.Utils={whitespace:"\n\r\t ".split(""),single_token:"br,input,link,meta,source,!doctype,basefont,base,area,hr,wbr,param,img,isindex,embed".split(","),extra_liners:f,in_array:function(e,t){for(var n=0;n<t.length;n++)if(e==t[n])return!0;return!1}},this.is_whitespace=function(e){for(;0<e.length;e++)if(!this.Utils.in_array(e.charAt(0),this.Utils.whitespace))return!1;return!0},this.traverse_whitespace=function(){var e="";if(e=this.input.charAt(this.pos),this.Utils.in_array(e,this.Utils.whitespace)){for(this.newlines=0;this.Utils.in_array(e,this.Utils.whitespace);)l&&"\n"==e&&this.newlines<=d&&(this.newlines+=1),this.pos++,e=this.input.charAt(this.pos);return!0}return!1},this.space_or_wrap=function(e){this.line_char_count>=this.wrap_line_length?(this.print_newline(!1,e),this.print_indentation(e)):(this.line_char_count++,e.push(" "))},this.get_content=function(){for(var e="",t=[];"<"!=this.input.charAt(this.pos);){if(this.pos>=this.input.length)return t.length?t.join(""):["","TK_EOF"];if(this.traverse_whitespace())this.space_or_wrap(t);else{if(E){var n=this.input.substr(this.pos,3);if("{{#"==n||"{{/"==n)break;if("{{!"==n)return[this.get_tag(),"TK_TAG_HANDLEBARS_COMMENT"];if("{{"==this.input.substr(this.pos,2)&&"{{else}}"==this.get_tag(!0))break}e=this.input.charAt(this.pos),this.pos++,this.line_char_count++,t.push(e)}}return t.length?t.join(""):""},this.get_contents_to=function(e){if(this.pos==this.input.length)return["","TK_EOF"];var t="",n=new RegExp("</"+e+"\\s*>","igm");n.lastIndex=this.pos;var r=n.exec(this.input),i=r?r.index:this.input.length;return this.pos<i&&(t=this.input.substring(this.pos,i),this.pos=i),t},this.record_tag=function(e){this.tags[e+"count"]?this.tags[e+"count"]++:this.tags[e+"count"]=1,this.tags[e+this.tags[e+"count"]]=this.indent_level,this.tags[e+this.tags[e+"count"]+"parent"]=this.tags.parent,this.tags.parent=e+this.tags[e+"count"]},this.retrieve_tag=function(e){if(this.tags[e+"count"]){for(var t=this.tags.parent;t&&e+this.tags[e+"count"]!=t;)t=this.tags[t+"parent"];t&&(this.indent_level=this.tags[e+this.tags[e+"count"]],this.tags.parent=this.tags[t+"parent"]),delete this.tags[e+this.tags[e+"count"]+"parent"],delete this.tags[e+this.tags[e+"count"]],1==this.tags[e+"count"]?delete this.tags[e+"count"]:this.tags[e+"count"]--}},this.indent_to_tag=function(e){if(this.tags[e+"count"]){for(var t=this.tags.parent;t&&e+this.tags[e+"count"]!=t;)t=this.tags[t+"parent"];t&&(this.indent_level=this.tags[e+this.tags[e+"count"]])}},this.get_tag=function(e){var t,n,r="",i=[],a="",o=!1,s=!0,l=this.pos,d=this.line_char_count;e=e!==undefined&&e;do{if(this.pos>=this.input.length)return e&&(this.pos=l,this.line_char_count=d),i.length?i.join(""):["","TK_EOF"];if(r=this.input.charAt(this.pos),this.pos++,this.Utils.in_array(r,this.Utils.whitespace))o=!0;else{if("'"!=r&&'"'!=r||(r+=this.get_unformatted(r),o=!0),"="==r&&(o=!1),i.length&&"="!=i[i.length-1]&&">"!=r&&o){if(this.space_or_wrap(i),o=!1,!s&&"force"==b&&"/"!=r){this.print_newline(!0,i),this.print_indentation(i);for(var c=0;c<T;c++)i.push(m)}for(var f=0;f<i.length;f++)if(" "==i[f]){s=!1;break}}if(E&&"<"==n&&r+this.input.charAt(this.pos)=="{{"&&(r+=this.get_unformatted("}}"),i.length&&" "!=i[i.length-1]&&"<"!=i[i.length-1]&&(r=" "+r),o=!0),"<"!=r||n||(t=this.pos-1,n="<"),E&&!n&&2<=i.length&&"{"==i[i.length-1]&&"{"==i[i.length-2]&&(t="#"==r||"/"==r||"!"==r?this.pos-3:this.pos-2,n="{"),this.line_char_count++,i.push(r),i[1]&&("!"==i[1]||"?"==i[1]||"%"==i[1])){i=[this.get_comment(t)];break}if(E&&i[1]&&"{"==i[1]&&i[2]&&"!"==i[2]){i=[this.get_comment(t)];break}if(E&&"{"==n&&2<i.length&&"}"==i[i.length-2]&&"}"==i[i.length-1])break}}while(">"!=r);var p,u,h=i.join("");p=-1!=h.indexOf(" ")?h.indexOf(" "):"{"==h[0]?h.indexOf("}"):h.indexOf(">"),u="<"!=h[0]&&E?"#"==h[2]?3:2:1;var g=h.substring(u,p).toLowerCase();return"/"==h.charAt(h.length-2)||this.Utils.in_array(g,this.Utils.single_token)?e||(this.tag_type="SINGLE"):E&&"{"==h[0]&&"else"==g?e||(this.indent_to_tag("if"),this.tag_type="HANDLEBARS_ELSE",this.indent_content=!0,this.traverse_whitespace()):this.is_unformatted(g,v)?(a=this.get_unformatted("</"+g+">",h),i.push(a),this.pos,this.tag_type="SINGLE"):"script"==g&&(-1==h.search("type")||-1<h.search("type")&&-1<h.search(/\b(text|application)\/(x-)?(javascript|ecmascript|jscript|livescript)/))?e||(this.record_tag(g),this.tag_type="SCRIPT"):"style"==g&&(-1==h.search("type")||-1<h.search("type")&&-1<h.search("text/css"))?e||(this.record_tag(g),this.tag_type="STYLE"):"!"==g.charAt(0)?e||(this.tag_type="SINGLE",this.traverse_whitespace()):e||("/"==g.charAt(0)?(this.retrieve_tag(g.substring(1)),this.tag_type="END"):(this.record_tag(g),"html"!=g.toLowerCase()&&(this.indent_content=!0),this.tag_type="START"),this.traverse_whitespace()&&this.space_or_wrap(i),this.Utils.in_array(g,this.Utils.extra_liners)&&(this.print_newline(!1,this.output),this.output.length&&"\n"!=this.output[this.output.length-2]&&this.print_newline(!0,this.output))),e&&(this.pos=l,this.line_char_count=d),i.join("")},this.get_comment=function(e){var t="",n=">",r=!1;this.pos=e;var i=this.input.charAt(this.pos);for(this.pos++;this.pos<=this.input.length&&((t+=i)[t.length-1]!=n[n.length-1]||-1==t.indexOf(n));)!r&&t.length<10&&(0===t.indexOf("<![if")?(n="<![endif]>",r=!0):0===t.indexOf("<![cdata[")?(n="]]>",r=!0):0===t.indexOf("<![")?(n="]>",r=!0):0===t.indexOf("\x3c!--")?(n="--\x3e",r=!0):0===t.indexOf("{{!")?(n="}}",r=!0):0===t.indexOf("<?")?(n="?>",r=!0):0===t.indexOf("<%")&&(n="%>",r=!0)),i=this.input.charAt(this.pos),this.pos++;return t},this.get_unformatted=function(e,t){if(t&&-1!=t.toLowerCase().indexOf(e))return"";var n="",r="",i=0,a=!0;do{if(this.pos>=this.input.length)return r;if(n=this.input.charAt(this.pos),this.pos++,this.Utils.in_array(n,this.Utils.whitespace)){if(!a){this.line_char_count--;continue}if("\n"==n||"\r"==n){r+="\n",this.line_char_count=0;continue}}r+=n,this.line_char_count++,a=!0,E&&"{"==n&&r.length&&"{"==r[r.length-2]&&(i=(r+=this.get_unformatted("}}")).length)}while(-1==r.toLowerCase().indexOf(e,i));return r},this.get_token=function(){var e;if("TK_TAG_SCRIPT"==this.last_token||"TK_TAG_STYLE"==this.last_token){var t=this.last_token.substr(7);return"string"!=typeof(e=this.get_contents_to(t))?e:[e,"TK_"+t]}return"CONTENT"==this.current_mode?"string"!=typeof(e=this.get_content())?e:[e,"TK_CONTENT"]:"TAG"==this.current_mode?"string"!=typeof(e=this.get_tag())?e:[e,"TK_TAG_"+this.tag_type]:void 0},this.get_full_indent=function(e){return(e=this.indent_level+e||0)<1?"":new Array(e+1).join(this.indent_string)},this.is_unformatted=function(e,t){if(!this.Utils.in_array(e,t))return!1;if("a"!=e.toLowerCase()||!this.Utils.in_array("a",t))return!0;var n=(this.get_tag(!0)||"").match(/^\s*<\s*\/?([a-z]*)\s*[^>]*>\s*$/);return!(n&&!this.Utils.in_array(n,t))},this.printer=function(e,t,n,r,i){this.input=e||"",this.output=[],this.indent_character=t,this.indent_string="",this.indent_size=n,this.brace_style=i,this.indent_level=0,this.wrap_line_length=r;for(var a=this.line_char_count=0;a<this.indent_size;a++)this.indent_string+=this.indent_character;this.print_newline=function(e,t){this.line_char_count=0,t&&t.length&&(e||"\n"!=t[t.length-1])&&("\n"!=t[t.length-1]&&(t[t.length-1]=o(t[t.length-1])),t.push("\n"))},this.print_indentation=function(e){for(var t=0;t<this.indent_level;t++)e.push(this.indent_string),this.line_char_count+=this.indent_string.length},this.print_token=function(e){this.is_whitespace(e)&&!this.output.length||((e||""!==e)&&this.output.length&&"\n"==this.output[this.output.length-1]&&(this.print_indentation(this.output),e=e.replace(/^\s+/g,"")),this.print_token_raw(e))},this.print_token_raw=function(e){0<this.newlines&&(e=o(e)),e&&""!==e&&(1<e.length&&"\n"==e[e.length-1]?(this.output.push(e.slice(0,-1)),this.print_newline(!1,this.output)):this.output.push(e));for(var t=0;t<this.newlines;t++)this.print_newline(0<t,this.output);this.newlines=0},this.indent=function(){this.indent_level++},this.unindent=function(){0<this.indent_level&&this.indent_level--}},this}).printer(e,m,i,a,s);;){var p=n.get_token();if(n.token_text=p[0],n.token_type=p[1],"TK_EOF"==n.token_type)break;switch(n.token_type){case"TK_TAG_START":n.print_newline(!1,n.output),n.print_token(n.token_text),n.indent_content&&(n.indent(),n.indent_content=!1),n.current_mode="CONTENT";break;case"TK_TAG_STYLE":case"TK_TAG_SCRIPT":n.print_newline(!1,n.output),n.print_token(n.token_text),n.current_mode="CONTENT";break;case"TK_TAG_END":if("TK_CONTENT"==n.last_token&&""===n.last_text){var u=n.token_text.match(/\w+/)[0],h=null;n.output.length&&(h=n.output[n.output.length-1].match(/(?:<|{{#)\s*(\w+)/)),(null==h||h[1]!=u&&!n.Utils.in_array(h[1],v))&&n.print_newline(!1,n.output)}n.print_token(n.token_text),n.current_mode="CONTENT";break;case"TK_TAG_SINGLE":var g=n.token_text.match(/^\s*<([a-z-]+)/i);g&&n.Utils.in_array(g[1],v)||n.print_newline(!1,n.output),n.print_token(n.token_text),n.current_mode="CONTENT";break;case"TK_TAG_HANDLEBARS_ELSE":n.print_token(n.token_text),n.indent_content&&(n.indent(),n.indent_content=!1),n.current_mode="CONTENT";break;case"TK_TAG_HANDLEBARS_COMMENT":case"TK_CONTENT":n.print_token(n.token_text),n.current_mode="TAG";break;case"TK_STYLE":case"TK_SCRIPT":if(""!==n.token_text){n.print_newline(!1,n.output);var A,C=n.token_text,S=1;"TK_SCRIPT"==n.token_type?A=N:"TK_STYLE"==n.token_type&&(A=x),"keep"==t.indent_scripts?S=0:"separate"==t.indent_scripts&&(S=-n.indent_level);var R=n.get_full_indent(S);if(A)C=A(C.replace(/^\s*/,R),t);else{var y=C.match(/^\s*/)[0].match(/[^\n\r]*$/)[0].split(n.indent_string).length-1,_=n.get_full_indent(S-y);C=C.replace(/^\s*/,R).replace(/\r\n|\r|\n/g,"\n"+_).replace(/\s+$/,"")}C&&(n.print_token_raw(C),n.print_newline(!0,n.output))}n.current_mode="TAG";break;default:""!==n.token_text&&n.print_token(n.token_text)}n.last_token=n.token_type,n.last_text=n.token_text}var L=n.output.join("").replace(/[\r\n\t ]+$/,"");return c&&(L+="\n"),L}}},be.extend(be.FE.DEFAULTS,{codeMirror:window.CodeMirror,codeMirrorOptions:{lineNumbers:!0,tabMode:"indent",indentWithTabs:!0,lineWrapping:!0,mode:"text/html",tabSize:2},codeBeautifierOptions:{end_with_newline:!0,indent_inner_html:!0,extra_liners:["p","h1","h2","h3","h4","h5","h6","blockquote","pre","ul","ol","table","dl"],brace_style:"expand",indent_char:"\t",indent_size:1,wrap_line_length:0},codeViewKeepActiveButtons:["fullscreen"]}),be.FE.PLUGINS.codeView=function(l){var d,c;function f(){return l.$box.hasClass("fr-code-view")}function p(){return c?c.getValue():d.val()}function u(){f()&&(c&&c.setSize(null,l.opts.height?l.opts.height:"auto"),l.opts.heightMin||l.opts.height?l.$box.find(".CodeMirror-scroll, .CodeMirror-gutters").css("min-height",l.opts.heightMin||l.opts.height):l.$box.find(".CodeMirror-scroll, .CodeMirror-gutters").css("min-height",""))}var h,g=!1;function m(){f()&&l.events.trigger("blur")}function v(){f()&&g&&l.events.trigger("focus")}function i(e){d||(!function(){d=be('<textarea class="fr-code" tabIndex="-1">'),l.$wp.append(d),d.attr("dir",l.opts.direction),l.$box.hasClass("fr-basic")||(h=be('<a data-cmd="html" title="Code View" class="fr-command fr-btn html-switch'+(l.helpers.isMobile()?"":" fr-desktop")+'" role="button" tabIndex="-1"><i class="fa fa-code"></i></button>'),l.$box.append(h),l.events.bindClick(l.$box,"a.html-switch",function(){E(!1)}));var e=function(){return!f()};l.events.on("buttons.refresh",e),l.events.on("copy",e,!0),l.events.on("cut",e,!0),l.events.on("paste",e,!0),l.events.on("destroy",b,!0),l.events.on("html.set",function(){f()&&E(!0)}),l.events.on("codeView.update",u),l.events.on("form.submit",function(){f()&&(l.html.set(p()),l.events.trigger("contentChanged",[],!0))},!0)}(),!c&&l.opts.codeMirror?((c=l.opts.codeMirror.fromTextArea(d.get(0),l.opts.codeMirrorOptions)).on("blur",m),c.on("focus",v)):(l.events.$on(d,"keydown keyup change input",function(){l.opts.height?this.removeAttribute("rows"):(this.rows=1,0===this.value.length?this.style.height="auto":this.style.height=this.scrollHeight+"px")}),l.events.$on(d,"blur",m),l.events.$on(d,"focus",v))),l.undo.saveStep(),l.html.cleanEmptyTags(),l.html.cleanWhiteTags(!0),l.core.hasFocus()&&(l.core.isEmpty()||(l.selection.save(),l.$el.find('.fr-marker[data-type="true"]:first').replaceWith('<span class="fr-tmp fr-sm">F</span>'),l.$el.find('.fr-marker[data-type="false"]:last').replaceWith('<span class="fr-tmp fr-em">F</span>')));var t=l.html.get(!1,!0);l.$el.find("span.fr-tmp").remove(),l.$box.toggleClass("fr-code-view",!0);var n,r,i=!1;if(l.core.hasFocus()&&(i=!0,l.events.disableBlur(),l.$el.blur()),t=(t=t.replace(/<span class="fr-tmp fr-sm">F<\/span>/,"FROALA-SM")).replace(/<span class="fr-tmp fr-em">F<\/span>/,"FROALA-EM"),l.codeBeautifier&&(t=l.codeBeautifier.run(t,l.opts.codeBeautifierOptions)),c){n=t.indexOf("FROALA-SM"),(r=t.indexOf("FROALA-EM"))<n?n=r:r-=9;var a=(t=t.replace(/FROALA-SM/g,"").replace(/FROALA-EM/g,"")).substring(0,n).length-t.substring(0,n).replace(/\n/g,"").length,o=t.substring(0,r).length-t.substring(0,r).replace(/\n/g,"").length;n=t.substring(0,n).length-t.substring(0,t.substring(0,n).lastIndexOf("\n")+1).length,r=t.substring(0,r).length-t.substring(0,t.substring(0,r).lastIndexOf("\n")+1).length,c.setSize(null,l.opts.height?l.opts.height:"auto"),l.opts.heightMin&&l.$box.find(".CodeMirror-scroll").css("min-height",l.opts.heightMin),c.setValue(t),g=!i,c.focus(),g=!0,c.setSelection({line:a,ch:n},{line:o,ch:r}),c.refresh(),c.clearHistory()}else{n=t.indexOf("FROALA-SM"),r=t.indexOf("FROALA-EM")-9,l.opts.heightMin&&d.css("min-height",l.opts.heightMin),l.opts.height&&d.css("height",l.opts.height),l.opts.heightMax&&d.css("max-height",l.opts.height||l.opts.heightMax),d.val(t.replace(/FROALA-SM/g,"").replace(/FROALA-EM/g,"")).trigger("change");var s=be(l.o_doc).scrollTop();g=!i,d.focus(),g=!0,d.get(0).setSelectionRange(n,r),be(l.o_doc).scrollTop(s)}l.$tb.find(" > .fr-command").not(e).filter(function(){return l.opts.codeViewKeepActiveButtons.indexOf(be(this).data("cmd"))<0}).addClass("fr-disabled").attr("aria-disabled",!0),e.addClass("fr-active").attr("aria-pressed",!0),!l.helpers.isMobile()&&l.opts.toolbarInline&&l.toolbar.hide()}function E(e){void 0===e&&(e=!f());var t,n,r=l.$tb.find('.fr-command[data-cmd="html"]');e?(l.popups.hideAll(),i(r)):(l.$box.toggleClass("fr-code-view",!1),t=r,n=p(),l.html.set(n),l.$el.blur(),l.$tb.find(" > .fr-command").not(t).removeClass("fr-disabled").attr("aria-disabled",!1),t.removeClass("fr-active").attr("aria-pressed",!1),l.selection.setAtStart(l.el),l.selection.restore(),l.placeholder.refresh(),l.undo.saveStep())}function b(){f()&&E(!1),c&&c.toTextArea(),d.val("").removeData().remove(),d=null,h&&(h.remove(),h=null)}return{_init:function(){if(!l.$wp)return!1},toggle:E,isActive:f,get:p}},be.FE.RegisterCommand("html",{title:"Code View",undo:!1,focus:!1,forcedRefresh:!0,toggle:!0,callback:function(){this.codeView.toggle()},plugin:"codeView"}),be.FE.DefineIcon("html",{NAME:"code"}),be.extend(be.FE.POPUP_TEMPLATES,{"colors.picker":"[_BUTTONS_][_TEXT_COLORS_][_BACKGROUND_COLORS_][_CUSTOM_COLOR_]"}),be.extend(be.FE.DEFAULTS,{colorsText:["#61BD6D","#1ABC9C","#54ACD2","#2C82C9","#9365B8","#475577","#CCCCCC","#41A85F","#00A885","#3D8EB9","#2969B0","#553982","#28324E","#000000","#F7DA64","#FBA026","#EB6B56","#E25041","#A38F84","#EFEFEF","#FFFFFF","#FAC51C","#F37934","#D14841","#B8312F","#7C706B","#D1D5D8","REMOVE"],colorsBackground:["#61BD6D","#1ABC9C","#54ACD2","#2C82C9","#9365B8","#475577","#CCCCCC","#41A85F","#00A885","#3D8EB9","#2969B0","#553982","#28324E","#000000","#F7DA64","#FBA026","#EB6B56","#E25041","#A38F84","#EFEFEF","#FFFFFF","#FAC51C","#F37934","#D14841","#B8312F","#7C706B","#D1D5D8","REMOVE"],colorsStep:7,colorsHEXInput:!0,colorsDefaultTab:"text",colorsButtons:["colorsBack","|","-"]}),be.FE.PLUGINS.colors=function(g){function t(){g.popups.hide("colors.picker")}function a(e){for(var t="text"==e?g.opts.colorsText:g.opts.colorsBackground,n='<div class="fr-color-set fr-'+e+"-color"+(g.opts.colorsDefaultTab==e||"text"!=g.opts.colorsDefaultTab&&"background"!=g.opts.colorsDefaultTab&&"text"==e?" fr-selected-set":"")+'">',r=0;r<t.length;r++)0!==r&&r%g.opts.colorsStep==0&&(n+="<br>"),"REMOVE"!=t[r]?n+='<span class="fr-command fr-select-color" style="background: '+t[r]+';" tabIndex="-1" aria-selected="false" role="button" data-cmd="'+e+'Color" data-param1="'+t[r]+'"><span class="fr-sr-only">'+g.language.translate("Color")+" "+t[r]+"&nbsp;&nbsp;&nbsp;</span></span>":n+='<span class="fr-command fr-select-color" data-cmd="'+e+'Color" tabIndex="-1" role="button" data-param1="REMOVE" title="'+g.language.translate("Clear Formatting")+'">'+g.icon.create("remove")+'<span class="fr-sr-only">'+g.language.translate("Clear Formatting")+"</span></span>";return n+"</div>"}function i(e){var t,n=g.popups.get("colors.picker"),r=be(g.selection.element());t="background"==e?"background-color":"color";var i=n.find(".fr-"+e+"-color .fr-select-color");for(i.find(".fr-selected-color").remove(),i.removeClass("fr-active-item"),i.not('[data-param1="REMOVE"]').attr("aria-selected",!1);r.get(0)!=g.el;){if("transparent"!=r.css(t)&&"rgba(0, 0, 0, 0)"!=r.css(t)){var a=n.find(".fr-"+e+'-color .fr-select-color[data-param1="'+g.helpers.RGBToHex(r.css(t))+'"]');a.append('<span class="fr-selected-color" aria-hidden="true">\uf00c</span>'),a.addClass("fr-active-item").attr("aria-selected",!0);break}r=r.parent()}var o=n.find(".fr-color-hex-layer input");o.length&&o.val(g.helpers.RGBToHex(r.css(t))).trigger("change")}function r(e){"REMOVE"!=e?g.format.applyStyle("background-color",g.helpers.HEXtoRGB(e)):g.format.removeStyle("background-color"),t()}function o(e){"REMOVE"!=e?g.format.applyStyle("color",g.helpers.HEXtoRGB(e)):g.format.removeStyle("color"),t()}return{showColorsPopup:function(){var e=g.$tb.find('.fr-command[data-cmd="color"]'),t=g.popups.get("colors.picker");if(t||(t=function(){var e,t='<div class="fr-buttons fr-colors-buttons">';g.opts.toolbarInline&&0<g.opts.colorsButtons.length&&(t+=g.button.buildList(g.opts.colorsButtons)),t+=(e='<div class="fr-colors-tabs fr-group">',e+='<span class="fr-colors-tab '+("background"==g.opts.colorsDefaultTab?"":"fr-selected-tab ")+'fr-command" tabIndex="-1" role="button" aria-pressed="'+("background"!=g.opts.colorsDefaultTab)+'" data-param1="text" data-cmd="colorChangeSet" title="'+g.language.translate("Text")+'">'+g.language.translate("Text")+"</span>",(e+='<span class="fr-colors-tab '+("background"==g.opts.colorsDefaultTab?"fr-selected-tab ":"")+'fr-command" tabIndex="-1" role="button" aria-pressed="'+("background"==g.opts.colorsDefaultTab)+'" data-param1="background" data-cmd="colorChangeSet" title="'+g.language.translate("Background")+'">'+g.language.translate("Background")+"</span>")+"</div></div>");var n="";g.opts.colorsHEXInput&&(n='<div class="fr-color-hex-layer fr-active fr-layer" id="fr-color-hex-layer-'+g.id+'"><div class="fr-input-line"><input maxlength="7" id="fr-color-hex-layer-text-'+g.id+'" type="text" placeholder="'+g.language.translate("HEX Color")+'" tabIndex="1" aria-required="true"></div><div class="fr-action-buttons"><button type="button" class="fr-command fr-submit" data-cmd="customColor" tabIndex="2" role="button">'+g.language.translate("OK")+"</button></div></div>");var h,r={buttons:t,text_colors:a("text"),background_colors:a("background"),custom_color:n},i=g.popups.create("colors.picker",r);return h=i,g.events.on("popup.tab",function(e){var t=be(e.currentTarget);if(!g.popups.isVisible("colors.picker")||!t.is("span"))return!0;var n=e.which,r=!0;if(be.FE.KEYCODE.TAB==n){var i=h.find(".fr-buttons");r=!g.accessibility.focusToolbar(i,!!e.shiftKey)}else if(be.FE.KEYCODE.ARROW_UP==n||be.FE.KEYCODE.ARROW_DOWN==n||be.FE.KEYCODE.ARROW_LEFT==n||be.FE.KEYCODE.ARROW_RIGHT==n){if(t.is("span.fr-select-color")){var a=t.parent().find("span.fr-select-color"),o=a.index(t),s=g.opts.colorsStep,l=Math.floor(a.length/s),d=o%s,c=Math.floor(o/s),f=c*s+d,p=l*s;be.FE.KEYCODE.ARROW_UP==n?f=((f-s)%p+p)%p:be.FE.KEYCODE.ARROW_DOWN==n?f=(f+s)%p:be.FE.KEYCODE.ARROW_LEFT==n?f=((f-1)%p+p)%p:be.FE.KEYCODE.ARROW_RIGHT==n&&(f=(f+1)%p);var u=be(a.get(f));g.events.disableBlur(),u.focus(),r=!1}}else be.FE.KEYCODE.ENTER==n&&(g.button.exec(t),r=!1);return!1===r&&(e.preventDefault(),e.stopPropagation()),r},!0),i}()),!t.hasClass("fr-active"))if(g.popups.setContainer("colors.picker",g.$tb),i(t.find(".fr-selected-tab").attr("data-param1")),e.is(":visible")){var n=e.offset().left+e.outerWidth()/2,r=e.offset().top+(g.opts.toolbarBottom?10:e.outerHeight()-10);g.popups.show("colors.picker",n,r,e.outerHeight())}else g.position.forSelection(t),g.popups.show("colors.picker")},hideColorsPopup:t,changeSet:function(e,t){e.hasClass("fr-selected-tab")||(e.siblings().removeClass("fr-selected-tab").attr("aria-pressed",!1),e.addClass("fr-selected-tab").attr("aria-pressed",!0),e.parents(".fr-popup").find(".fr-color-set").removeClass("fr-selected-set"),e.parents(".fr-popup").find(".fr-color-set.fr-"+t+"-color").addClass("fr-selected-set"),i(t)),g.accessibility.focusPopup(e.parents(".fr-popup"))},background:r,customColor:function(){var e=g.popups.get("colors.picker"),t=e.find(".fr-color-hex-layer input");if(t.length){var n=t.val();"background"==e.find(".fr-selected-tab").attr("data-param1")?r(n):o(n)}},text:o,back:function(){g.popups.hide("colors.picker"),g.toolbar.showInline()}}},be.FE.DefineIcon("colors",{NAME:"tint"}),be.FE.RegisterCommand("color",{title:"Colors",undo:!1,focus:!0,refreshOnCallback:!1,popup:!0,callback:function(){this.popups.isVisible("colors.picker")?(this.$el.find(".fr-marker").length&&(this.events.disableBlur(),this.selection.restore()),this.popups.hide("colors.picker")):this.colors.showColorsPopup()},plugin:"colors"}),be.FE.RegisterCommand("textColor",{undo:!0,callback:function(e,t){this.colors.text(t)}}),be.FE.RegisterCommand("backgroundColor",{undo:!0,callback:function(e,t){this.colors.background(t)}}),be.FE.RegisterCommand("colorChangeSet",{undo:!1,focus:!1,callback:function(e,t){var n=this.popups.get("colors.picker").find('.fr-command[data-cmd="'+e+'"][data-param1="'+t+'"]');this.colors.changeSet(n,t)}}),be.FE.DefineIcon("colorsBack",{NAME:"arrow-left"}),be.FE.RegisterCommand("colorsBack",{title:"Back",undo:!1,focus:!1,back:!0,refreshAfterCallback:!1,callback:function(){this.colors.back()}}),be.FE.RegisterCommand("customColor",{title:"OK",undo:!0,callback:function(){this.colors.customColor()}}),be.FE.DefineIcon("remove",{NAME:"eraser"}),be.extend(be.FE.DEFAULTS,{dragInline:!0}),be.FE.PLUGINS.draggable=function(d){function e(e){return!(!e.originalEvent||!e.originalEvent.target||e.originalEvent.target.nodeType!=Node.TEXT_NODE)||(e.target&&"A"==e.target.tagName&&1==e.target.childNodes.length&&"IMG"==e.target.childNodes[0].tagName&&(e.target=e.target.childNodes[0]),be(e.target).hasClass("fr-draggable")?(d.undo.canDo()||d.undo.saveStep(),d.opts.dragInline?d.$el.attr("contenteditable",!0):d.$el.attr("contenteditable",!1),d.opts.toolbarInline&&d.toolbar.hide(),be(e.target).addClass("fr-dragging"),d.browser.msie||d.browser.edge||d.selection.clear(),void e.originalEvent.dataTransfer.setData("text","Froala")):(e.preventDefault(),!1))}function c(e){return!(e&&("HTML"==e.tagName||"BODY"==e.tagName||d.node.isElement(e)))}function f(e,t,n){d.opts.iframe&&(e+=d.$iframe.offset().top,t+=d.$iframe.offset().left),p.offset().top!=e&&p.css("top",e),p.offset().left!=t&&p.css("left",t),p.width()!=n&&p.css("width",n)}function t(e){e.originalEvent.dataTransfer.dropEffect="move",d.opts.dragInline?function(){for(var e=null,t=0;t<be.FE.INSTANCES.length;t++)if((e=be.FE.INSTANCES[t].$el.find(".fr-dragging")).length)return e.get(0)}()||!d.browser.msie&&!d.browser.edge||e.preventDefault():(e.preventDefault(),function(e){var t=d.doc.elementFromPoint(e.originalEvent.pageX-d.win.pageXOffset,e.originalEvent.pageY-d.win.pageYOffset);if(!c(t)){for(var n=0,r=t;!c(r)&&r==t&&0<e.originalEvent.pageY-d.win.pageYOffset-n;)n++,r=d.doc.elementFromPoint(e.originalEvent.pageX-d.win.pageXOffset,e.originalEvent.pageY-d.win.pageYOffset-n);(!c(r)||p&&0===d.$el.find(r).length&&r!=p.get(0))&&(r=null);for(var i=0,a=t;!c(a)&&a==t&&e.originalEvent.pageY-d.win.pageYOffset+i<be(d.doc).height();)i++,a=d.doc.elementFromPoint(e.originalEvent.pageX-d.win.pageXOffset,e.originalEvent.pageY-d.win.pageYOffset+i);(!c(a)||p&&0===d.$el.find(a).length&&a!=p.get(0))&&(a=null),t=null==a&&r?r:a&&null==r?a:a&&r?n<i?r:a:null}if(be(t).hasClass("fr-drag-helper"))return;if(t&&!d.node.isBlock(t)&&(t=d.node.blockParent(t)),t&&0<=["TD","TH","TR","THEAD","TBODY"].indexOf(t.tagName)&&(t=be(t).parents("table").get(0)),t&&0<=["LI"].indexOf(t.tagName)&&(t=be(t).parents("UL, OL").get(0)),t&&!be(t).hasClass("fr-drag-helper")){var o;p||(be.FE.$draggable_helper||(be.FE.$draggable_helper=be('<div class="fr-drag-helper"></div>')),p=be.FE.$draggable_helper,d.events.on("shared.destroy",function(){p.html("").removeData().remove(),p=null},!0)),o=e.originalEvent.pageY<be(t).offset().top+be(t).outerHeight()/2;var s=be(t),l=0;o||0!==s.next().length?(o||(s=s.next()),"before"==p.data("fr-position")&&s.is(p.data("fr-tag"))||(0<s.prev().length&&(l=parseFloat(s.prev().css("margin-bottom"))||0),l=Math.max(l,parseFloat(s.css("margin-top"))||0),f(s.offset().top-l/2-d.$box.offset().top,s.offset().left-d.win.pageXOffset-d.$box.offset().left,s.width()),p.data("fr-position","before"))):"after"==p.data("fr-position")&&s.is(p.data("fr-tag"))||(l=parseFloat(s.css("margin-bottom"))||0,f(s.offset().top+be(t).height()+l/2-d.$box.offset().top,s.offset().left-d.win.pageXOffset-d.$box.offset().left,s.width()),p.data("fr-position","after")),p.data("fr-tag",s),p.addClass("fr-visible"),p.appendTo(d.$box)}else p&&0<d.$box.find(p).length&&p.removeClass("fr-visible")}(e))}function n(e){e.originalEvent.dataTransfer.dropEffect="move",d.opts.dragInline||e.preventDefault()}function r(e){d.$el.attr("contenteditable",!0);var t=d.$el.find(".fr-dragging");p&&p.hasClass("fr-visible")&&d.$box.find(p).length?i(e):t.length&&(e.preventDefault(),e.stopPropagation()),p&&d.$box.find(p).length&&p.removeClass("fr-visible"),t.removeClass("fr-dragging")}function i(e){for(var t,n,r=0;r<be.FE.INSTANCES.length;r++)if((t=be.FE.INSTANCES[r].$el.find(".fr-dragging")).length){n=be.FE.INSTANCES[r];break}if(t.length){if(e.preventDefault(),e.stopPropagation(),p&&p.hasClass("fr-visible")&&d.$box.find(p).length)p.data("fr-tag")[p.data("fr-position")]('<span class="fr-marker"></span>'),p.removeClass("fr-visible");else if(!1===d.markers.insertAtPoint(e.originalEvent))return!1;if(t.removeClass("fr-dragging"),!1===(t=d.events.chainTrigger("element.beforeDrop",t)))return!1;var i=t;if(t.parent().is("A")&&1==t.parent().get(0).childNodes.length&&(i=t.parent()),d.core.isEmpty())d.events.focus();else d.$el.find(".fr-marker").replaceWith(be.FE.MARKERS),d.selection.restore();if(n==d||d.undo.canDo()||d.undo.saveStep(),d.core.isEmpty())d.$el.html(i);else{var a=d.markers.insert();0===i.find(a).length?be(a).replaceWith(i):0===t.find(a).length&&be(a).replaceWith(t),t.after(be.FE.MARKERS),d.selection.restore()}return d.popups.hideAll(),d.selection.save(),d.$el.find(d.html.emptyBlockTagsQuery()).not("TD, TH, LI, .fr-inner").not(d.opts.htmlAllowedEmptyTags.join(",")).remove(),d.html.wrap(),d.html.fillEmptyBlocks(),d.selection.restore(),d.undo.saveStep(),d.opts.iframe&&d.size.syncIframe(),n!=d&&(n.popups.hideAll(),n.$el.find(n.html.emptyBlockTagsQuery()).not("TD, TH, LI, .fr-inner").remove(),n.html.wrap(),n.html.fillEmptyBlocks(),n.undo.saveStep(),n.events.trigger("element.dropped"),n.opts.iframe&&n.size.syncIframe()),d.events.trigger("element.dropped",[i]),!1}p&&p.removeClass("fr-visible"),d.undo.canDo()||d.undo.saveStep(),setTimeout(function(){d.undo.saveStep()},0)}function a(e){if(e&&"DIV"==e.tagName&&d.node.hasClass(e,"fr-drag-helper"))e.parentNode.removeChild(e);else if(e&&e.nodeType==Node.ELEMENT_NODE)for(var t=e.querySelectorAll("div.fr-drag-helper"),n=0;n<t.length;n++)t[n].parentNode.removeChild(t[n])}var p;return{_init:function(){d.opts.enter==be.FE.ENTER_BR&&(d.opts.dragInline=!0),d.events.on("dragstart",e,!0),d.events.on("dragover",t,!0),d.events.on("dragenter",n,!0),d.events.on("document.dragend",r,!0),d.events.on("document.drop",r,!0),d.events.on("drop",i,!0),d.events.on("html.processGet",a)}}},be.extend(be.FE.POPUP_TEMPLATES,{emoticons:"[_BUTTONS_][_EMOTICONS_]"}),be.extend(be.FE.DEFAULTS,{emoticonsStep:8,emoticonsSet:[{code:"1f600",desc:"Grinning face"},{code:"1f601",desc:"Grinning face with smiling eyes"},{code:"1f602",desc:"Face with tears of joy"},{code:"1f603",desc:"Smiling face with open mouth"},{code:"1f604",desc:"Smiling face with open mouth and smiling eyes"},{code:"1f605",desc:"Smiling face with open mouth and cold sweat"},{code:"1f606",desc:"Smiling face with open mouth and tightly-closed eyes"},{code:"1f607",desc:"Smiling face with halo"},{code:"1f608",desc:"Smiling face with horns"},{code:"1f609",desc:"Winking face"},{code:"1f60a",desc:"Smiling face with smiling eyes"},{code:"1f60b",desc:"Face savoring delicious food"},{code:"1f60c",desc:"Relieved face"},{code:"1f60d",desc:"Smiling face with heart-shaped eyes"},{code:"1f60e",desc:"Smiling face with sunglasses"},{code:"1f60f",desc:"Smirking face"},{code:"1f610",desc:"Neutral face"},{code:"1f611",desc:"Expressionless face"},{code:"1f612",desc:"Unamused face"},{code:"1f613",desc:"Face with cold sweat"},{code:"1f614",desc:"Pensive face"},{code:"1f615",desc:"Confused face"},{code:"1f616",desc:"Confounded face"},{code:"1f617",desc:"Kissing face"},{code:"1f618",desc:"Face throwing a kiss"},{code:"1f619",desc:"Kissing face with smiling eyes"},{code:"1f61a",desc:"Kissing face with closed eyes"},{code:"1f61b",desc:"Face with stuck out tongue"},{code:"1f61c",desc:"Face with stuck out tongue and winking eye"},{code:"1f61d",desc:"Face with stuck out tongue and tightly-closed eyes"},{code:"1f61e",desc:"Disappointed face"},{code:"1f61f",desc:"Worried face"},{code:"1f620",desc:"Angry face"},{code:"1f621",desc:"Pouting face"},{code:"1f622",desc:"Crying face"},{code:"1f623",desc:"Persevering face"},{code:"1f624",desc:"Face with look of triumph"},{code:"1f625",desc:"Disappointed but relieved face"},{code:"1f626",desc:"Frowning face with open mouth"},{code:"1f627",desc:"Anguished face"},{code:"1f628",desc:"Fearful face"},{code:"1f629",desc:"Weary face"},{code:"1f62a",desc:"Sleepy face"},{code:"1f62b",desc:"Tired face"},{code:"1f62c",desc:"Grimacing face"},{code:"1f62d",desc:"Loudly crying face"},{code:"1f62e",desc:"Face with open mouth"},{code:"1f62f",desc:"Hushed face"},{code:"1f630",desc:"Face with open mouth and cold sweat"},{code:"1f631",desc:"Face screaming in fear"},{code:"1f632",desc:"Astonished face"},{code:"1f633",desc:"Flushed face"},{code:"1f634",desc:"Sleeping face"},{code:"1f635",desc:"Dizzy face"},{code:"1f636",desc:"Face without mouth"},{code:"1f637",desc:"Face with medical mask"}],emoticonsButtons:["emoticonsBack","|"],emoticonsUseImage:!0}),be.FE.PLUGINS.emoticons=function(m){function i(){if(!m.selection.isCollapsed())return!1;var e=m.selection.element(),t=m.selection.endElement();if(e&&m.node.hasClass(e,"fr-emoticon"))return e;if(t&&m.node.hasClass(t,"fr-emoticon"))return t;var n=m.selection.ranges(0),r=n.startContainer;if(r.nodeType==Node.ELEMENT_NODE&&0<r.childNodes.length&&0<n.startOffset){var i=r.childNodes[n.startOffset-1];if(m.node.hasClass(i,"fr-emoticon"))return i}return!1}return{_init:function(){var e=function(){for(var e=m.el.querySelectorAll(".fr-emoticon:not(.fr-deletable)"),t=0;t<e.length;t++)e[t].className+=" fr-deletable"};e(),m.events.on("html.set",e),m.events.on("keydown",function(e){if(m.keys.isCharacter(e.which)&&m.selection.inEditor()){var t=m.selection.ranges(0),n=i();m.node.hasClass(n,"fr-emoticon-img")&&n&&(0===t.startOffset&&m.selection.element()===n?be(n).before(be.FE.MARKERS+be.FE.INVISIBLE_SPACE):be(n).after(be.FE.INVISIBLE_SPACE+be.FE.MARKERS),m.selection.restore())}}),m.events.on("keyup",function(e){for(var t=m.el.querySelectorAll(".fr-emoticon"),n=0;n<t.length;n++)"undefined"!=typeof t[n].textContent&&0===t[n].textContent.replace(/\u200B/gi,"").length&&be(t[n]).remove();if(!(e.which>=be.FE.KEYCODE.ARROW_LEFT&&e.which<=be.FE.KEYCODE.ARROW_DOWN)){var r=i();m.node.hasClass(r,"fr-emoticon-img")&&(be(r).append(be.FE.MARKERS),m.selection.restore())}})},insert:function(e,t){var n=i(),r=m.selection.ranges(0);n?(0===r.startOffset&&m.selection.element()===n?be(n).before(be.FE.MARKERS+be.FE.INVISIBLE_SPACE):0<r.startOffset&&m.selection.element()===n&&r.commonAncestorContainer.parentNode.classList.contains("fr-emoticon")&&be(n).after(be.FE.INVISIBLE_SPACE+be.FE.MARKERS),m.selection.restore(),m.html.insert('<span class="fr-emoticon fr-deletable'+(t?" fr-emoticon-img":"")+'"'+(t?' style="background: url('+t+');"':"")+">"+(t?"&nbsp;":e)+"</span>&nbsp;"+be.FE.MARKERS,!0)):m.html.insert('<span class="fr-emoticon fr-deletable'+(t?" fr-emoticon-img":"")+'"'+(t?' style="background: url('+t+');"':"")+">"+(t?"&nbsp;":e)+"</span>&nbsp;",!0)},showEmoticonsPopup:function(){var e=m.$tb.find('.fr-command[data-cmd="emoticons"]'),t=m.popups.get("emoticons");if(t||(t=function(){var e="";m.opts.toolbarInline&&0<m.opts.emoticonsButtons.length&&(e='<div class="fr-buttons fr-emoticons-buttons">'+m.button.buildList(m.opts.emoticonsButtons)+"</div>");var g,t={buttons:e,emoticons:function(){for(var e='<div style="text-align: center">',t=0;t<m.opts.emoticonsSet.length;t++)0!==t&&t%m.opts.emoticonsStep==0&&(e+="<br>"),e+='<span class="fr-command fr-emoticon" tabIndex="-1" data-cmd="insertEmoticon" title="'+m.language.translate(m.opts.emoticonsSet[t].desc)+'" role="button" data-param1="'+m.opts.emoticonsSet[t].code+'">'+(m.opts.emoticonsUseImage?'<img src="https://cdnjs.cloudflare.com/ajax/libs/emojione/2.0.1/assets/svg/'+m.opts.emoticonsSet[t].code+'.svg"/>':"&#x"+m.opts.emoticonsSet[t].code+";")+'<span class="fr-sr-only">'+m.language.translate(m.opts.emoticonsSet[t].desc)+"&nbsp;&nbsp;&nbsp;</span></span>";return m.opts.emoticonsUseImage&&(e+='<p style="font-size: 12px; text-align: center; padding: 0 5px;">Emoji free by <a class="fr-link" tabIndex="-1" href="http://emojione.com/" target="_blank" rel="nofollow" role="link" aria-label="Open Emoji One website.">Emoji One</a></p>'),e+="</div>"}()},n=m.popups.create("emoticons",t);return m.tooltip.bind(n,".fr-emoticon"),g=n,m.events.on("popup.tab",function(e){var t=be(e.currentTarget);if(!m.popups.isVisible("emoticons")||!t.is("span, a"))return!0;var n,r,i,a=e.which;if(be.FE.KEYCODE.TAB==a){if(t.is("span.fr-emoticon")&&e.shiftKey||t.is("a")&&!e.shiftKey){var o=g.find(".fr-buttons");n=!m.accessibility.focusToolbar(o,!!e.shiftKey)}if(!1!==n){var s=g.find("span.fr-emoticon:focus:first, span.fr-emoticon:visible:first, a");t.is("span.fr-emoticon")&&(s=s.not("span.fr-emoticon:not(:focus)")),r=s.index(t),r=e.shiftKey?((r-1)%s.length+s.length)%s.length:(r+1)%s.length,i=s.get(r),m.events.disableBlur(),i.focus(),n=!1}}else if(be.FE.KEYCODE.ARROW_UP==a||be.FE.KEYCODE.ARROW_DOWN==a||be.FE.KEYCODE.ARROW_LEFT==a||be.FE.KEYCODE.ARROW_RIGHT==a){if(t.is("span.fr-emoticon")){var l=t.parent().find("span.fr-emoticon");r=l.index(t);var d=m.opts.emoticonsStep,c=Math.floor(l.length/d),f=r%d,p=Math.floor(r/d),u=p*d+f,h=c*d;be.FE.KEYCODE.ARROW_UP==a?u=((u-d)%h+h)%h:be.FE.KEYCODE.ARROW_DOWN==a?u=(u+d)%h:be.FE.KEYCODE.ARROW_LEFT==a?u=((u-1)%h+h)%h:be.FE.KEYCODE.ARROW_RIGHT==a&&(u=(u+1)%h),i=be(l.get(u)),m.events.disableBlur(),i.focus(),n=!1}}else be.FE.KEYCODE.ENTER==a&&(t.is("a")?t[0].click():m.button.exec(t),n=!1);return!1===n&&(e.preventDefault(),e.stopPropagation()),n},!0),n}()),!t.hasClass("fr-active")){m.popups.refresh("emoticons"),m.popups.setContainer("emoticons",m.$tb);var n=e.offset().left+e.outerWidth()/2,r=e.offset().top+(m.opts.toolbarBottom?10:e.outerHeight()-10);m.popups.show("emoticons",n,r,e.outerHeight())}},hideEmoticonsPopup:function(){m.popups.hide("emoticons")},back:function(){m.popups.hide("emoticons"),m.toolbar.showInline()}}},be.FE.DefineIcon("emoticons",{NAME:"smile-o",FA5NAME:"smile"}),be.FE.RegisterCommand("emoticons",{title:"Emoticons",undo:!1,focus:!0,refreshOnCallback:!1,popup:!0,callback:function(){this.popups.isVisible("emoticons")?(this.$el.find(".fr-marker").length&&(this.events.disableBlur(),this.selection.restore()),this.popups.hide("emoticons")):this.emoticons.showEmoticonsPopup()},plugin:"emoticons"}),be.FE.RegisterCommand("insertEmoticon",{callback:function(e,t){this.emoticons.insert("&#x"+t+";",this.opts.emoticonsUseImage?"https://cdnjs.cloudflare.com/ajax/libs/emojione/2.0.1/assets/svg/"+t+".svg":null),this.emoticons.hideEmoticonsPopup()}}),be.FE.DefineIcon("emoticonsBack",{NAME:"arrow-left"}),be.FE.RegisterCommand("emoticonsBack",{title:"Back",undo:!1,focus:!1,back:!0,refreshAfterCallback:!1,callback:function(){this.emoticons.back()}}),be.extend(be.FE.DEFAULTS,{entities:"&quot;&#39;&iexcl;&cent;&pound;&curren;&yen;&brvbar;&sect;&uml;&copy;&ordf;&laquo;&not;&shy;&reg;&macr;&deg;&plusmn;&sup2;&sup3;&acute;&micro;&para;&middot;&cedil;&sup1;&ordm;&raquo;&frac14;&frac12;&frac34;&iquest;&Agrave;&Aacute;&Acirc;&Atilde;&Auml;&Aring;&AElig;&Ccedil;&Egrave;&Eacute;&Ecirc;&Euml;&Igrave;&Iacute;&Icirc;&Iuml;&ETH;&Ntilde;&Ograve;&Oacute;&Ocirc;&Otilde;&Ouml;&times;&Oslash;&Ugrave;&Uacute;&Ucirc;&Uuml;&Yacute;&THORN;&szlig;&agrave;&aacute;&acirc;&atilde;&auml;&aring;&aelig;&ccedil;&egrave;&eacute;&ecirc;&euml;&igrave;&iacute;&icirc;&iuml;&eth;&ntilde;&ograve;&oacute;&ocirc;&otilde;&ouml;&divide;&oslash;&ugrave;&uacute;&ucirc;&uuml;&yacute;&thorn;&yuml;&OElig;&oelig;&Scaron;&scaron;&Yuml;&fnof;&circ;&tilde;&Alpha;&Beta;&Gamma;&Delta;&Epsilon;&Zeta;&Eta;&Theta;&Iota;&Kappa;&Lambda;&Mu;&Nu;&Xi;&Omicron;&Pi;&Rho;&Sigma;&Tau;&Upsilon;&Phi;&Chi;&Psi;&Omega;&alpha;&beta;&gamma;&delta;&epsilon;&zeta;&eta;&theta;&iota;&kappa;&lambda;&mu;&nu;&xi;&omicron;&pi;&rho;&sigmaf;&sigma;&tau;&upsilon;&phi;&chi;&psi;&omega;&thetasym;&upsih;&piv;&ensp;&emsp;&thinsp;&zwnj;&zwj;&lrm;&rlm;&ndash;&mdash;&lsquo;&rsquo;&sbquo;&ldquo;&rdquo;&bdquo;&dagger;&Dagger;&bull;&hellip;&permil;&prime;&Prime;&lsaquo;&rsaquo;&oline;&frasl;&euro;&image;&weierp;&real;&trade;&alefsym;&larr;&uarr;&rarr;&darr;&harr;&crarr;&lArr;&uArr;&rArr;&dArr;&hArr;&forall;&part;&exist;&empty;&nabla;&isin;&notin;&ni;&prod;&sum;&minus;&lowast;&radic;&prop;&infin;&ang;&and;&or;&cap;&cup;&int;&there4;&sim;&cong;&asymp;&ne;&equiv;&le;&ge;&sub;&sup;&nsub;&sube;&supe;&oplus;&otimes;&perp;&sdot;&lceil;&rceil;&lfloor;&rfloor;&lang;&rang;&loz;&spades;&clubs;&hearts;&diams;"}),be.FE.PLUGINS.entities=function(i){var a,o;function r(e){var t=e.textContent;if(t.match(a)){for(var n="",r=0;r<t.length;r++)o[t[r]]?n+=o[t[r]]:n+=t[r];e.textContent=n}}function s(e){if(e&&0<=["STYLE","SCRIPT","svg","IFRAME"].indexOf(e.tagName))return!0;for(var t=i.node.contents(e),n=0;n<t.length;n++)t[n].nodeType==Node.TEXT_NODE?r(t[n]):s(t[n]);e.nodeType==Node.TEXT_NODE&&r(e)}function l(e){return 0===e.length?"":i.clean.exec(e,s).replace(/\&amp;/g,"&")}return{_init:function(){i.opts.htmlSimpleAmpersand||(i.opts.entities=i.opts.entities+"&amp;");var e=be("<div>").html(i.opts.entities).text(),t=i.opts.entities.split(";");o={},a="";for(var n=0;n<e.length;n++){var r=e.charAt(n);o[r]=t[n]+";",a+="\\"+r+(n<e.length-1?"|":"")}a=new RegExp("("+a+")","g"),i.events.on("html.get",l,!0)}}},be.extend(be.FE.POPUP_TEMPLATES,{"file.insert":"[_BUTTONS_][_UPLOAD_LAYER_][_PROGRESS_BAR_]"}),be.extend(be.FE.DEFAULTS,{fileUpload:!0,fileUploadURL:null,fileUploadParam:"file",fileUploadParams:{},fileUploadToS3:!1,fileUploadMethod:"POST",fileMaxSize:10485760,fileAllowedTypes:["*"],fileInsertButtons:["fileBack","|"],fileUseSelectedText:!1}),be.FE.PLUGINS.file=function(d){var r,c="https://i.froala.com/upload",l=2,f=3,p=4,u=5,h=6,n={};function g(){var e=d.popups.get("file.insert");e||(e=C()),e.find(".fr-layer.fr-active").removeClass("fr-active").addClass("fr-pactive"),e.find(".fr-file-progress-bar-layer").addClass("fr-active"),e.find(".fr-buttons").hide(),a(d.language.translate("Uploading"),0)}function i(e){var t=d.popups.get("file.insert");t&&(t.find(".fr-layer.fr-pactive").addClass("fr-active").removeClass("fr-pactive"),t.find(".fr-file-progress-bar-layer").removeClass("fr-active"),t.find(".fr-buttons").show(),e&&(d.events.focus(),d.popups.hide("file.insert")))}function a(e,t){var n=d.popups.get("file.insert");if(n){var r=n.find(".fr-file-progress-bar-layer");r.find("h3").text(e+(t?" "+t+"%":"")),r.removeClass("fr-error"),t?(r.find("div").removeClass("fr-indeterminate"),r.find("div > span").css("width",t+"%")):r.find("div").addClass("fr-indeterminate")}}function m(e,t,n){d.edit.on(),d.events.focus(!0),d.selection.restore(),d.opts.fileUseSelectedText&&d.selection.text().length&&(t=d.selection.text()),d.html.insert('<a href="'+e+'" target="_blank" id="fr-inserted-file" class="fr-file">'+t+"</a>");var r=d.$el.find("#fr-inserted-file");r.removeAttr("id"),d.popups.hide("file.insert"),d.undo.saveStep(),S(),d.events.trigger("file.inserted",[r,n])}function v(e){var t=this.status,n=this.response,r=this.responseXML,i=this.responseText;try{if(d.opts.fileUploadToS3)if(201==t){var a=function(e){try{var t=be(e).find("Location").text(),n=be(e).find("Key").text();return!1===d.events.trigger("file.uploadedToS3",[t,n,e],!0)?(d.edit.on(),!1):t}catch(r){return T(p,e),!1}}(r);a&&m(a,e,n||r)}else T(p,n||r);else if(200<=t&&t<300){var o=function(e){try{if(!1===d.events.trigger("file.uploaded",[e],!0))return d.edit.on(),!1;var t=JSON.parse(e);return t.link?t:(T(l,e),!1)}catch(n){return T(p,e),!1}}(i);o&&m(o.link,e,n||i)}else T(f,n||i)}catch(s){T(p,n||i)}}function E(){T(p,this.response||this.responseText||this.responseXML)}function b(e){if(e.lengthComputable){var t=e.loaded/e.total*100|0;a(d.language.translate("Uploading"),t)}}function T(e,t){d.edit.on(),function(e){g();var t=d.popups.get("file.insert").find(".fr-file-progress-bar-layer");t.addClass("fr-error");var n=t.find("h3");n.text(e),d.events.disableBlur(),n.focus()}(d.language.translate("Something went wrong. Please try again.")),d.events.trigger("file.error",[{code:e,message:n[e]},t])}function A(){d.edit.on(),i(!0)}function o(e){if(void 0!==e&&0<e.length){if(!1===d.events.trigger("file.beforeUpload",[e]))return!1;var t,n=e[0];if(null===d.opts.fileUploadURL||d.opts.fileUploadURL==c)return s=n,(l=new FileReader).addEventListener("load",function(){for(var e=l.result,t=atob(l.result.split(",")[1]),n=[],r=0;r<t.length;r++)n.push(t.charCodeAt(r));e=window.URL.createObjectURL(new Blob([new Uint8Array(n)],{type:s.type})),d.file.insert(e,s.name,null)},!1),g(),l.readAsDataURL(s),!1;if(n.size>d.opts.fileMaxSize)return T(u),!1;if(d.opts.fileAllowedTypes.indexOf("*")<0&&d.opts.fileAllowedTypes.indexOf(n.type.replace(/file\//g,""))<0)return T(h),!1;if(d.drag_support.formdata&&(t=d.drag_support.formdata?new FormData:null),t){var r;if(!1!==d.opts.fileUploadToS3)for(r in t.append("key",d.opts.fileUploadToS3.keyStart+(new Date).getTime()+"-"+(n.name||"untitled")),t.append("success_action_status","201"),t.append("X-Requested-With","xhr"),t.append("Content-Type",n.type),d.opts.fileUploadToS3.params)d.opts.fileUploadToS3.params.hasOwnProperty(r)&&t.append(r,d.opts.fileUploadToS3.params[r]);for(r in d.opts.fileUploadParams)d.opts.fileUploadParams.hasOwnProperty(r)&&t.append(r,d.opts.fileUploadParams[r]);t.append(d.opts.fileUploadParam,n);var i=d.opts.fileUploadURL;d.opts.fileUploadToS3&&(i=d.opts.fileUploadToS3.uploadURL?d.opts.fileUploadToS3.uploadURL:"https://"+d.opts.fileUploadToS3.region+".amazonaws.com/"+d.opts.fileUploadToS3.bucket);var a=d.core.getXHR(i,d.opts.fileUploadMethod);a.onload=function(){v.call(a,n.name)},a.onerror=E,a.upload.onprogress=b,a.onabort=A,g();var o=d.popups.get("file.insert");o&&o.off("abortUpload").on("abortUpload",function(){4!=a.readyState&&a.abort()}),a.send(t)}}var s,l}function s(){i()}function C(e){if(e)return d.popups.onHide("file.insert",s),!0;var t;d.opts.fileUpload||d.opts.fileInsertButtons.splice(d.opts.fileInsertButtons.indexOf("fileUpload"),1),t='<div class="fr-buttons">'+d.button.buildList(d.opts.fileInsertButtons)+"</div>";var n="";d.opts.fileUpload&&(n='<div class="fr-file-upload-layer fr-layer fr-active" id="fr-file-upload-layer-'+d.id+'"><strong>'+d.language.translate("Drop file")+"</strong><br>("+d.language.translate("or click")+')<div class="fr-form"><input type="file" name="'+d.opts.fileUploadParam+'" accept="/*" tabIndex="-1" aria-labelledby="fr-file-upload-layer-'+d.id+'" role="button"></div></div>');var r,i={buttons:t,upload_layer:n,progress_bar:'<div class="fr-file-progress-bar-layer fr-layer"><h3 tabIndex="-1" class="fr-message">Uploading</h3><div class="fr-loader"><span class="fr-progress"></span></div><div class="fr-action-buttons"><button type="button" class="fr-command fr-dismiss" data-cmd="fileDismissError" tabIndex="2" role="button">OK</button></div></div>'},a=d.popups.create("file.insert",i);return r=a,d.events.$on(r,"dragover dragenter",".fr-file-upload-layer",function(){return be(this).addClass("fr-drop"),!1},!0),d.events.$on(r,"dragleave dragend",".fr-file-upload-layer",function(){return be(this).removeClass("fr-drop"),!1},!0),d.events.$on(r,"drop",".fr-file-upload-layer",function(e){e.preventDefault(),e.stopPropagation(),be(this).removeClass("fr-drop");var t=e.originalEvent.dataTransfer;t&&t.files&&(r.data("instance")||d).file.upload(t.files)},!0),d.helpers.isIOS()&&d.events.$on(r,"touchstart",'.fr-file-upload-layer input[type="file"]',function(){be(this).trigger("click")}),d.events.$on(r,"change",'.fr-file-upload-layer input[type="file"]',function(){if(this.files){var e=r.data("instance")||d;e.events.disableBlur(),r.find("input:focus").blur(),e.events.enableBlur(),e.file.upload(this.files)}be(this).val("")},!0),a}function e(e){d.node.hasClass(e,"fr-file")}function t(e){var t=e.originalEvent.dataTransfer;if(t&&t.files&&t.files.length){var n=t.files[0];if(n&&"undefined"!=typeof n.type){if(n.type.indexOf("image")<0){if(!d.opts.fileUpload)return e.preventDefault(),e.stopPropagation(),!1;d.markers.remove(),d.markers.insertAtPoint(e.originalEvent),d.$el.find(".fr-marker").replaceWith(be.FE.MARKERS),d.popups.hideAll();var r=d.popups.get("file.insert");return r||(r=C()),d.popups.setContainer("file.insert",d.$sc),d.popups.show("file.insert",e.originalEvent.pageX,e.originalEvent.pageY),g(),o(t.files),e.preventDefault(),e.stopPropagation(),!1}}else n.type.indexOf("image")<0&&(e.preventDefault(),e.stopPropagation())}}function S(){var e,t=Array.prototype.slice.call(d.el.querySelectorAll("a.fr-file")),n=[];for(e=0;e<t.length;e++)n.push(t[e].getAttribute("href"));if(r)for(e=0;e<r.length;e++)n.indexOf(r[e].getAttribute("href"))<0&&d.events.trigger("file.unlink",[r[e]]);r=t}return n[1]="File cannot be loaded from the passed link.",n[l]="No link in upload response.",n[f]="Error during file upload.",n[p]="Parsing response failed.",n[u]="File is too large.",n[h]="File file type is invalid.",n[7]="Files can be uploaded only to same domain in IE 8 and IE 9.",{_init:function(){d.events.on("drop",t),d.events.$on(d.$win,"keydown",function(e){var t=e.which,n=d.popups.get("file.insert");n&&t==be.FE.KEYCODE.ESC&&n.trigger("abortUpload")}),d.events.on("destroy",function(){var e=d.popups.get("file.insert");e&&e.trigger("abortUpload")}),d.events.on("link.beforeRemove",e),d.$wp&&(S(),d.events.on("contentChanged",S)),C(!0)},showInsertPopup:function(){var e=d.$tb.find('.fr-command[data-cmd="insertFile"]'),t=d.popups.get("file.insert");if(t||(t=C()),i(),!t.hasClass("fr-active"))if(d.popups.refresh("file.insert"),d.popups.setContainer("file.insert",d.$tb),e.is(":visible")){var n=e.offset().left+e.outerWidth()/2,r=e.offset().top+(d.opts.toolbarBottom?10:e.outerHeight()-10);d.popups.show("file.insert",n,r,e.outerHeight())}else d.position.forSelection(t),d.popups.show("file.insert")},upload:o,insert:m,back:function(){d.events.disableBlur(),d.selection.restore(),d.events.enableBlur(),d.popups.hide("file.insert"),d.toolbar.showInline()},hideProgressBar:i}},be.FE.DefineIcon("insertFile",{NAME:"file-o",FA5NAME:"file"}),be.FE.RegisterCommand("insertFile",{title:"Upload File",undo:!1,focus:!0,refreshAfterCallback:!1,popup:!0,callback:function(){this.popups.isVisible("file.insert")?(this.$el.find(".fr-marker").length&&(this.events.disableBlur(),this.selection.restore()),this.popups.hide("file.insert")):this.file.showInsertPopup()},plugin:"file"}),be.FE.DefineIcon("fileBack",{NAME:"arrow-left"}),be.FE.RegisterCommand("fileBack",{title:"Back",undo:!1,focus:!1,back:!0,refreshAfterCallback:!1,callback:function(){this.file.back()},refresh:function(e){this.opts.toolbarInline?(e.removeClass("fr-hidden"),e.next(".fr-separator").removeClass("fr-hidden")):(e.addClass("fr-hidden"),e.next(".fr-separator").addClass("fr-hidden"))}}),be.FE.RegisterCommand("fileDismissError",{title:"OK",callback:function(){this.file.hideProgressBar(!0)}}),be.extend(be.FE.DEFAULTS,{fontFamily:{"Arial,Helvetica,sans-serif":"Arial","Georgia,serif":"Georgia","Impact,Charcoal,sans-serif":"Impact","Tahoma,Geneva,sans-serif":"Tahoma","Times New Roman,Times,serif,-webkit-standard":"Times New Roman","Verdana,Geneva,sans-serif":"Verdana"},fontFamilySelection:!1,fontFamilyDefaultSelection:"Font Family"}),be.FE.PLUGINS.fontFamily=function(i){function a(e){var t=e.replace(/(sans-serif|serif|monospace|cursive|fantasy)/gi,"").replace(/"|'| /g,"").split(",");return be.grep(t,function(e){return 0<e.length})}function o(e,t){for(var n=0;n<e.length;n++)for(var r=0;r<t.length;r++)if(e[n].toLowerCase()==t[r].toLowerCase())return[n,r];return null}function s(){var e=a(be(i.selection.element()).css("font-family")),t=[];for(var n in i.opts.fontFamily)if(i.opts.fontFamily.hasOwnProperty(n)){var r=o(e,a(n));r&&t.push([n,r])}return 0===t.length?null:(t.sort(function(e,t){var n=e[1][0]-t[1][0];return 0===n?e[1][1]-t[1][1]:n}),t[0][0])}return{apply:function(e){i.format.applyStyle("font-family",e)},refreshOnShow:function(e,t){t.find(".fr-command.fr-active").removeClass("fr-active").attr("aria-selected",!1),t.find('.fr-command[data-param1="'+s()+'"]').addClass("fr-active").attr("aria-selected",!0);var n=t.find(".fr-dropdown-list"),r=t.find(".fr-active").parent();r.length?n.parent().scrollTop(r.offset().top-n.offset().top-(n.parent().outerHeight()/2-r.outerHeight()/2)):n.parent().scrollTop(0)},refresh:function(e){if(i.opts.fontFamilySelection){var t=be(i.selection.element()).css("font-family").replace(/(sans-serif|serif|monospace|cursive|fantasy)/gi,"").replace(/"|'|/g,"").split(",");e.find("> span").text(i.opts.fontFamily[s()]||t[0]||i.language.translate(i.opts.fontFamilyDefaultSelection))}}}},be.FE.RegisterCommand("fontFamily",{type:"dropdown",displaySelection:function(e){return e.opts.fontFamilySelection},defaultSelection:function(e){return e.opts.fontFamilyDefaultSelection},displaySelectionWidth:120,html:function(){var e='<ul class="fr-dropdown-list" role="presentation">',t=this.opts.fontFamily;for(var n in t)t.hasOwnProperty(n)&&(e+='<li role="presentation"><a class="fr-command" tabIndex="-1" role="option" data-cmd="fontFamily" data-param1="'+n+'" style="font-family: '+n+'" title="'+t[n]+'">'+t[n]+"</a></li>");return e+="</ul>"},title:"Font Family",callback:function(e,t){this.fontFamily.apply(t)},refresh:function(e){this.fontFamily.refresh(e)},refreshOnShow:function(e,t){this.fontFamily.refreshOnShow(e,t)},plugin:"fontFamily"}),be.FE.DefineIcon("fontFamily",{NAME:"font"}),be.extend(be.FE.DEFAULTS,{fontSize:["8","9","10","11","12","14","18","24","30","36","48","60","72","96"],fontSizeSelection:!1,fontSizeDefaultSelection:"12",fontSizeUnit:"px"}),be.FE.PLUGINS.fontSize=function(a){return{apply:function(e){a.format.applyStyle("font-size",e)},refreshOnShow:function(e,t){var n=be(a.selection.element()).css("font-size");"pt"===a.opts.fontSizeUnit&&(n=Math.round(72*parseFloat(n,10)/96)+"pt"),t.find(".fr-command.fr-active").removeClass("fr-active").attr("aria-selected",!1),t.find('.fr-command[data-param1="'+n+'"]').addClass("fr-active").attr("aria-selected",!0);var r=t.find(".fr-dropdown-list"),i=t.find(".fr-active").parent();i.length?r.parent().scrollTop(i.offset().top-r.offset().top-(r.parent().outerHeight()/2-i.outerHeight()/2)):r.parent().scrollTop(0)},refresh:function(e){if(a.opts.fontSizeSelection){var t=a.helpers.getPX(be(a.selection.element()).css("font-size"));"pt"===a.opts.fontSizeUnit&&(t=Math.round(72*parseFloat(t,10)/96)+"pt"),e.find("> span").text(t)}}}},be.FE.RegisterCommand("fontSize",{type:"dropdown",title:"Font Size",displaySelection:function(e){return e.opts.fontSizeSelection},displaySelectionWidth:30,defaultSelection:function(e){return e.opts.fontSizeDefaultSelection},html:function(){for(var e='<ul class="fr-dropdown-list" role="presentation">',t=this.opts.fontSize,n=0;n<t.length;n++){var r=t[n];e+='<li role="presentation"><a class="fr-command" tabIndex="-1" role="option" data-cmd="fontSize" data-param1="'+r+this.opts.fontSizeUnit+'" title="'+r+'">'+r+"</a></li>"}return e+="</ul>"},callback:function(e,t){this.fontSize.apply(t)},refresh:function(e){this.fontSize.refresh(e)},refreshOnShow:function(e,t){this.fontSize.refreshOnShow(e,t)},plugin:"fontSize"}),be.FE.DefineIcon("fontSize",{NAME:"text-height"}),be.extend(be.FE.POPUP_TEMPLATES,{"forms.edit":"[_BUTTONS_]","forms.update":"[_BUTTONS_][_TEXT_LAYER_]"}),be.extend(be.FE.DEFAULTS,{formEditButtons:["inputStyle","inputEdit"],formStyles:{"fr-rounded":"Rounded","fr-large":"Large"},formMultipleStyles:!0,formUpdateButtons:["inputBack","|"]}),be.FE.PLUGINS.forms=function(a){var o;function e(e){e.preventDefault(),a.selection.clear(),be(this).data("mousedown",!0)}function t(e){be(this).data("mousedown")&&(e.stopPropagation(),be(this).removeData("mousedown"),l(o=this)),e.preventDefault()}function n(){a.$el.find("input, textarea, button").removeData("mousedown")}function r(){be(this).removeData("mousedown")}function s(){return o||null}function l(e){var t=a.popups.get("forms.edit");t||(t=function(){var e="";0<a.opts.formEditButtons.length&&(e='<div class="fr-buttons">'+a.button.buildList(a.opts.formEditButtons)+"</div>");var t={buttons:e},n=a.popups.create("forms.edit",t);return a.$wp&&a.events.$on(a.$wp,"scroll.link-edit",function(){s()&&a.popups.isVisible("forms.edit")&&l(s())}),n}());var n=be(o=e);a.popups.refresh("forms.edit"),a.popups.setContainer("forms.edit",a.$sc);var r=n.offset().left+n.outerWidth()/2,i=n.offset().top+n.outerHeight();a.popups.show("forms.edit",r,i,n.outerHeight())}function d(){var e=a.popups.get("forms.update"),t=s();if(t){var n=be(t);n.is("button")?e.find('input[type="text"][name="text"]').val(n.text()):e.find('input[type="text"][name="text"]').val(n.attr("placeholder"))}e.find('input[type="text"][name="text"]').trigger("change")}function c(){o=null}function f(e){if(e)return a.popups.onRefresh("forms.update",d),a.popups.onHide("forms.update",c),!0;var t="";1<=a.opts.formUpdateButtons.length&&(t='<div class="fr-buttons">'+a.button.buildList(a.opts.formUpdateButtons)+"</div>");var n="",r=0;n='<div class="fr-forms-text-layer fr-layer fr-active">',n+='<div class="fr-input-line"><input name="text" type="text" placeholder="Text" tabIndex="'+ ++r+'"></div>';var i={buttons:t,text_layer:n+='<div class="fr-action-buttons"><button class="fr-command fr-submit" data-cmd="updateInput" href="#" tabIndex="'+ ++r+'" type="button">'+a.language.translate("Update")+"</button></div></div>"};return a.popups.create("forms.update",i)}return{_init:function(){a.events.$on(a.$el,a._mousedown,"input, textarea, button",e),a.events.$on(a.$el,a._mouseup,"input, textarea, button",t),a.events.$on(a.$el,"touchmove","input, textarea, button",r),a.events.$on(a.$el,a._mouseup,n),a.events.$on(a.$win,a._mouseup,n),f(!0),a.events.$on(a.$el,"submit","form",function(e){return e.preventDefault(),!1})},updateInput:function(){var e=a.popups.get("forms.update"),t=s();if(t){var n=be(t),r=e.find('input[type="text"][name="text"]').val()||"";r.length&&(n.is("button")?n.text(r):n.attr("placeholder",r)),a.popups.hide("forms.update"),l(t)}},getInput:s,applyStyle:function(e,t,n){void 0===t&&(t=a.opts.formStyles),void 0===n&&(n=a.opts.formMultipleStyles);var r=s();if(!r)return!1;if(!n){var i=Object.keys(t);i.splice(i.indexOf(e),1),be(r).removeClass(i.join(" "))}be(r).toggleClass(e)},showUpdatePopup:function(){var e=s();if(e){var t=be(e),n=a.popups.get("forms.update");n||(n=f()),a.popups.isVisible("forms.update")||a.popups.refresh("forms.update"),a.popups.setContainer("forms.update",a.$sc);var r=t.offset().left+t.outerWidth()/2,i=t.offset().top+t.outerHeight();a.popups.show("forms.update",r,i,t.outerHeight())}},showEditPopup:l,back:function(){a.events.disableBlur(),a.selection.restore(),a.events.enableBlur();var e=s();e&&a.$wp&&("BUTTON"==e.tagName&&a.selection.restore(),l(e))}}},be.FE.RegisterCommand("updateInput",{undo:!1,focus:!1,title:"Update",callback:function(){this.forms.updateInput()}}),be.FE.DefineIcon("inputStyle",{NAME:"magic"}),be.FE.RegisterCommand("inputStyle",{title:"Style",type:"dropdown",html:function(){var e='<ul class="fr-dropdown-list">',t=this.opts.formStyles;for(var n in t)t.hasOwnProperty(n)&&(e+='<li><a class="fr-command" tabIndex="-1" data-cmd="inputStyle" data-param1="'+n+'">'+this.language.translate(t[n])+"</a></li>");return e+="</ul>"},callback:function(e,t){var n=this.forms.getInput();n&&(this.forms.applyStyle(t),this.forms.showEditPopup(n))},refreshOnShow:function(e,t){var n=this.forms.getInput();if(n){var r=be(n);t.find(".fr-command").each(function(){var e=be(this).data("param1");be(this).toggleClass("fr-active",r.hasClass(e))})}}}),be.FE.DefineIcon("inputEdit",{NAME:"edit"}),be.FE.RegisterCommand("inputEdit",{title:"Edit Button",undo:!1,refreshAfterCallback:!1,callback:function(){this.forms.showUpdatePopup()}}),be.FE.DefineIcon("inputBack",{NAME:"arrow-left"}),be.FE.RegisterCommand("inputBack",{title:"Back",undo:!1,focus:!1,back:!0,refreshAfterCallback:!1,callback:function(){this.forms.back()}}),be.FE.RegisterCommand("updateInput",{undo:!1,focus:!1,title:"Update",callback:function(){this.forms.updateInput()}}),be.FE.PLUGINS.fullscreen=function(n){var t,r,i,a;function o(){return n.$box.hasClass("fr-fullscreen")}function e(){if(n.helpers.isIOS()&&n.core.hasFocus())return n.$el.blur(),setTimeout(l,250),!1;t=n.helpers.scrollTop(),n.$box.toggleClass("fr-fullscreen"),be("body:first").toggleClass("fr-fullscreen"),n.helpers.isMobile()&&(n.$tb.data("parent",n.$tb.parent()),n.$tb.prependTo(n.$box),n.$tb.data("sticky-dummy")&&n.$tb.after(n.$tb.data("sticky-dummy"))),r=n.opts.height,i=n.opts.heightMax,a=n.opts.zIndex,n.position.refresh(),n.opts.height=n.o_win.innerHeight-(n.opts.toolbarInline?0:n.$tb.outerHeight()),n.opts.zIndex=2147483641,n.opts.heightMax=null,n.size.refresh(),n.opts.toolbarInline&&n.toolbar.showInline();for(var e=n.$box.parent();!e.is("body:first");)e.data("z-index",e.css("z-index")).data("overflow",e.css("overflow")).css("z-index","2147483640").css("overflow","visible"),e=e.parent();n.opts.toolbarContainer&&n.$box.prepend(n.$tb),n.events.trigger("charCounter.update"),n.events.trigger("codeView.update"),n.$win.trigger("scroll")}function s(){if(n.helpers.isIOS()&&n.core.hasFocus())return n.$el.blur(),setTimeout(l,250),!1;n.$box.toggleClass("fr-fullscreen"),be("body:first").toggleClass("fr-fullscreen"),n.$tb.prependTo(n.$tb.data("parent")),n.$tb.data("sticky-dummy")&&n.$tb.after(n.$tb.data("sticky-dummy")),n.opts.height=r,n.opts.heightMax=i,n.opts.zIndex=a,n.size.refresh(),be(n.o_win).scrollTop(t),n.opts.toolbarInline&&n.toolbar.showInline(),n.events.trigger("charCounter.update"),n.opts.toolbarSticky&&n.opts.toolbarStickyOffset&&(n.opts.toolbarBottom?n.$tb.css("bottom",n.opts.toolbarStickyOffset).data("bottom",n.opts.toolbarStickyOffset):n.$tb.css("top",n.opts.toolbarStickyOffset).data("top",n.opts.toolbarStickyOffset));for(var e=n.$box.parent();!e.is("body:first");)e.data("z-index")&&(e.css("z-index",""),e.css("z-index")!=e.data("z-index")&&e.css("z-index",e.data("z-index")),e.removeData("z-index")),e.data("overflow")?(e.css("overflow",""),e.css("overflow")!=e.data("overflow")&&e.css("overflow",e.data("overflow"))):e.css("overflow",""),e.removeData("overflow"),e=e.parent();n.opts.toolbarContainer&&be(n.opts.toolbarContainer).append(n.$tb),be(n.o_win).trigger("scroll"),n.events.trigger("codeView.update")}function l(){o()?s():e(),d(n.$tb.find('.fr-command[data-cmd="fullscreen"]'))}function d(e){var t=o();e.toggleClass("fr-active",t).attr("aria-pressed",t),e.find("> *:not(.fr-sr-only)").replaceWith(t?n.icon.create("fullscreenCompress"):n.icon.create("fullscreen"))}return{_init:function(){if(!n.$wp)return!1;n.events.$on(be(n.o_win),"resize",function(){o()&&(s(),e())}),n.events.on("toolbar.hide",function(){if(o()&&n.helpers.isMobile())return!1}),n.events.on("position.refresh",function(){if(n.helpers.isIOS())return!o()}),n.events.on("destroy",function(){o()&&s()},!0)},toggle:l,refresh:d,isActive:o}},be.FE.RegisterCommand("fullscreen",{title:"Fullscreen",undo:!1,focus:!1,accessibilityFocus:!0,forcedRefresh:!0,toggle:!0,callback:function(){this.fullscreen.toggle()},refresh:function(e){this.fullscreen.refresh(e)},plugin:"fullscreen"}),be.FE.DefineIcon("fullscreen",{NAME:"expand"}),be.FE.DefineIcon("fullscreenCompress",{NAME:"compress"}),be.extend(be.FE.DEFAULTS,{helpSets:[{title:"Inline Editor",commands:[{val:"OSkeyE",desc:"Show the editor"}]},{title:"Common actions",commands:[{val:"OSkeyC",desc:"Copy"},{val:"OSkeyX",desc:"Cut"},{val:"OSkeyV",desc:"Paste"},{val:"OSkeyZ",desc:"Undo"},{val:"OSkeyShift+Z",desc:"Redo"},{val:"OSkeyK",desc:"Insert Link"},{val:"OSkeyP",desc:"Insert Image"}]},{title:"Basic Formatting",commands:[{val:"OSkeyA",desc:"Select All"},{val:"OSkeyB",desc:"Bold"},{val:"OSkeyI",desc:"Italic"},{val:"OSkeyU",desc:"Underline"},{val:"OSkeyS",desc:"Strikethrough"},{val:"OSkey]",desc:"Increase Indent"},{val:"OSkey[",desc:"Decrease Indent"}]},{title:"Quote",commands:[{val:"OSkey'",desc:"Increase quote level"},{val:"OSkeyShift+'",desc:"Decrease quote level"}]},{title:"Image / Video",commands:[{val:"OSkey+",desc:"Resize larger"},{val:"OSkey-",desc:"Resize smaller"}]},{title:"Table",commands:[{val:"Alt+Space",desc:"Select table cell"},{val:"Shift+Left/Right arrow",desc:"Extend selection one cell"},{val:"Shift+Up/Down arrow",desc:"Extend selection one row"}]},{title:"Navigation",commands:[{val:"OSkey/",desc:"Shortcuts"},{val:"Alt+F10",desc:"Focus popup / toolbar"},{val:"Esc",desc:"Return focus to previous position"}]}]}),be.FE.PLUGINS.help=function(o){var r,i="help";return{_init:function(){},show:function(){if(!r){var e="<h4>"+o.language.translate("Shortcuts")+"</h4>",t=function(){for(var e='<div class="fr-help-modal">',t=0;t<o.opts.helpSets.length;t++){var n=o.opts.helpSets[t],r="<table>";r+="<thead><tr><th>"+o.language.translate(n.title)+"</th></tr></thead>",r+="<tbody>";for(var i=0;i<n.commands.length;i++){var a=n.commands[i];r+="<tr>",r+="<td>"+o.language.translate(a.desc)+"</td>",r+="<td>"+a.val.replace("OSkey",o.helpers.isMac()?"&#8984;":"Ctrl+")+"</td>",r+="</tr>"}e+=r+="</tbody></table>"}return e+="</div>"}(),n=o.modals.create(i,e,t);r=n.$modal,n.$head,n.$body,o.events.$on(be(o.o_win),"resize",function(){o.modals.resize(i)})}o.modals.show(i),o.modals.resize(i)},hide:function(){o.modals.hide(i)}}},be.FroalaEditor.DefineIcon("help",{NAME:"question"}),be.FE.RegisterShortcut(be.FE.KEYCODE.SLASH,"help",null,"/"),be.FE.RegisterCommand("help",{title:"Help",icon:"help",undo:!1,focus:!1,modal:!0,callback:function(){this.help.show()},plugin:"help",showOnMobile:!1}),be.extend(be.FE.POPUP_TEMPLATES,{"image.insert":"[_BUTTONS_][_UPLOAD_LAYER_][_BY_URL_LAYER_][_PROGRESS_BAR_]","image.edit":"[_BUTTONS_]","image.alt":"[_BUTTONS_][_ALT_LAYER_]","image.size":"[_BUTTONS_][_SIZE_LAYER_]"}),be.extend(be.FE.DEFAULTS,{imageInsertButtons:["imageBack","|","imageUpload","imageByURL"],imageEditButtons:["imageReplace","imageAlign","imageCaption","imageRemove","|","imageLink","linkOpen","linkEdit","linkRemove","-","imageDisplay","imageStyle","imageAlt","imageSize"],imageAltButtons:["imageBack","|"],imageSizeButtons:["imageBack","|"],imageUpload:!0,imageUploadURL:null,imageCORSProxy:"https://cors-anywhere.froala.com",imageUploadRemoteUrls:!0,imageUploadParam:"file",imageUploadParams:{},imageUploadToS3:!1,imageUploadMethod:"POST",imageMaxSize:10485760,imageAllowedTypes:["jpeg","jpg","png","gif"],imageResize:!0,imageResizeWithPercent:!1,imageRoundPercent:!1,imageDefaultWidth:300,imageDefaultAlign:"center",imageDefaultDisplay:"block",imageSplitHTML:!1,imageStyles:{"fr-rounded":"Rounded","fr-bordered":"Bordered","fr-shadow":"Shadow"},imageMove:!0,imageMultipleStyles:!0,imageTextNear:!0,imagePaste:!0,imagePasteProcess:!1,imageMinWidth:16,imageOutputSize:!1,imageDefaultMargin:5}),be.FE.PLUGINS.image=function(c){var f,l,d,p,s,n,u="https://i.froala.com/upload",t=!1,r=1,h=2,g=3,m=4,v=5,E=6,b=8,i={};function T(){var e=c.popups.get("image.insert").find(".fr-image-by-url-layer input");e.val(""),f&&e.val(f.attr("src")),e.trigger("change")}function a(){var e=c.popups.get("image.edit");if(e||(e=N()),e){var t=ve();Ee()&&(t=t.find(".fr-img-wrap")),c.popups.setContainer("image.edit",c.$sc),c.popups.refresh("image.edit");var n=t.offset().left+t.outerWidth()/2,r=t.offset().top+t.outerHeight();c.popups.show("image.edit",n,r,t.outerHeight())}}function A(){O()}function e(){for(var e,t,n="IMG"==c.el.tagName?[c.el]:c.el.querySelectorAll("img"),r=0;r<n.length;r++){var i=be(n[r]);!c.opts.htmlUntouched&&c.opts.useClasses?((c.opts.imageDefaultAlign||c.opts.imageDefaultDisplay)&&(0<(t=i).parents(".fr-img-caption").length&&(t=t.parents(".fr-img-caption:first")),t.hasClass("fr-dii")||t.hasClass("fr-dib")||(t.addClass("fr-fi"+pe(t)[0]),t.addClass("fr-di"+ue(t)[0]),t.css("margin",""),t.css("float",""),t.css("display",""),t.css("z-index",""),t.css("position",""),t.css("overflow",""),t.css("vertical-align",""))),c.opts.imageTextNear||(0<i.parents(".fr-img-caption").length?i.parents(".fr-img-caption:first").removeClass("fr-dii").addClass("fr-dib"):i.removeClass("fr-dii").addClass("fr-dib"))):c.opts.htmlUntouched||c.opts.useClasses||(c.opts.imageDefaultAlign||c.opts.imageDefaultDisplay)&&(0<(e=i).parents(".fr-img-caption").length&&(e=e.parents(".fr-img-caption:first")),fe(e,e.hasClass("fr-dib")?"block":e.hasClass("fr-dii")?"inline":null,e.hasClass("fr-fil")?"left":e.hasClass("fr-fir")?"right":pe(e)),e.removeClass("fr-dib fr-dii fr-fir fr-fil")),c.opts.iframe&&i.on("load",c.size.syncIframe)}}function C(e){void 0===e&&(e=!0);var t,n=Array.prototype.slice.call(c.el.querySelectorAll("img")),r=[];for(t=0;t<n.length;t++)if(r.push(n[t].getAttribute("src")),be(n[t]).toggleClass("fr-draggable",c.opts.imageMove),""===n[t].getAttribute("class")&&n[t].removeAttribute("class"),""===n[t].getAttribute("style")&&n[t].removeAttribute("style"),n[t].parentNode&&n[t].parentNode.parentNode&&c.node.hasClass(n[t].parentNode.parentNode,"fr-img-caption")){var i=n[t].parentNode.parentNode;c.browser.mozilla||i.setAttribute("contenteditable",!1),i.setAttribute("draggable",!1),i.classList.add("fr-draggable");var a=n[t].nextSibling;a&&a.setAttribute("contenteditable",!0)}if(s)for(t=0;t<s.length;t++)r.indexOf(s[t].getAttribute("src"))<0&&c.events.trigger("image.removed",[be(s[t])]);if(s&&e){var o=[];for(t=0;t<s.length;t++)o.push(s[t].getAttribute("src"));for(t=0;t<n.length;t++)o.indexOf(n[t].getAttribute("src"))<0&&c.events.trigger("image.loaded",[be(n[t])])}s=n}function S(){if(l||function(){var e;c.shared.$image_resizer?(l=c.shared.$image_resizer,p=c.shared.$img_overlay,c.events.on("destroy",function(){l.removeClass("fr-active").appendTo(be("body:first"))},!0)):(c.shared.$image_resizer=be('<div class="fr-image-resizer"></div>'),l=c.shared.$image_resizer,c.events.$on(l,"mousedown",function(e){e.stopPropagation()},!0),c.opts.imageResize&&(l.append(o("nw")+o("ne")+o("sw")+o("se")),c.shared.$img_overlay=be('<div class="fr-image-overlay"></div>'),p=c.shared.$img_overlay,e=l.get(0).ownerDocument,be(e).find("body:first").append(p)));c.events.on("shared.destroy",function(){l.html("").removeData().remove(),l=null,c.opts.imageResize&&(p.remove(),p=null)},!0),c.helpers.isMobile()||c.events.$on(be(c.o_win),"resize",function(){f&&!f.hasClass("fr-uploading")?se(!0):f&&(S(),he(),w(!1))});if(c.opts.imageResize){e=l.get(0).ownerDocument,c.events.$on(l,c._mousedown,".fr-handler",y),c.events.$on(be(e),c._mousemove,_),c.events.$on(be(e.defaultView||e.parentWindow),c._mouseup,L),c.events.$on(p,"mouseleave",L);var r=1,i=null,a=0;c.events.on("keydown",function(e){if(f){var t=-1!=navigator.userAgent.indexOf("Mac OS X")?e.metaKey:e.ctrlKey,n=e.which;(n!==i||200<e.timeStamp-a)&&(r=1),(n==be.FE.KEYCODE.EQUALS||c.browser.mozilla&&n==be.FE.KEYCODE.FF_EQUALS)&&t&&!e.altKey?r=Q.call(this,e,1,1,r):(n==be.FE.KEYCODE.HYPHEN||c.browser.mozilla&&n==be.FE.KEYCODE.FF_HYPHEN)&&t&&!e.altKey?r=Q.call(this,e,2,-1,r):c.keys.ctrlKey(e)||n!=be.FE.KEYCODE.ENTER||(f.before("<br>"),D(f)),i=n,a=e.timeStamp}},!0),c.events.on("keyup",function(){r=1})}}(),!f)return!1;var e=c.$wp||c.$sc;e.append(l),l.data("instance",c);var t=e.scrollTop()-("static"!=e.css("position")?e.offset().top:0),n=e.scrollLeft()-("static"!=e.css("position")?e.offset().left:0);n-=c.helpers.getPX(e.css("border-left-width")),t-=c.helpers.getPX(e.css("border-top-width")),c.$el.is("img")&&c.$sc.is("body")&&(n=t=0);var r=ve();Ee()&&(r=r.find(".fr-img-wrap")),l.css("top",(c.opts.iframe?r.offset().top:r.offset().top+t)-1).css("left",(c.opts.iframe?r.offset().left:r.offset().left+n)-1).css("width",r.get(0).getBoundingClientRect().width).css("height",r.get(0).getBoundingClientRect().height).addClass("fr-active")}function o(e){return'<div class="fr-handler fr-h'+e+'"></div>'}function R(e){Ee()?f.parents(".fr-img-caption").css("width",e):f.css("width",e)}function y(e){if(!c.core.sameInstance(l))return!0;if(e.preventDefault(),e.stopPropagation(),c.$el.find("img.fr-error").left)return!1;c.undo.canDo()||c.undo.saveStep();var t=e.pageX||e.originalEvent.touches[0].pageX;if("mousedown"==e.type){var n=c.$oel.get(0).ownerDocument,r=n.defaultView||n.parentWindow,i=!1;try{i=r.location!=r.parent.location&&!(r.$&&r.$.FE)}catch(s){}i&&r.frameElement&&(t+=c.helpers.getPX(be(r.frameElement).offset().left)+r.frameElement.clientLeft)}(d=be(this)).data("start-x",t),d.data("start-width",f.width()),d.data("start-height",f.height());var a=f.width();if(c.opts.imageResizeWithPercent){var o=f.parentsUntil(c.$el,c.html.blockTagsQuery()).get(0)||c.el;a=(a/be(o).outerWidth()*100).toFixed(2)+"%"}R(a),p.show(),c.popups.hideAll(),ce()}function _(e){if(!c.core.sameInstance(l))return!0;var t;if(d&&f){if(e.preventDefault(),c.$el.find("img.fr-error").left)return!1;var n=e.pageX||(e.originalEvent.touches?e.originalEvent.touches[0].pageX:null);if(!n)return!1;var r=n-d.data("start-x"),i=d.data("start-width");if((d.hasClass("fr-hnw")||d.hasClass("fr-hsw"))&&(r=0-r),c.opts.imageResizeWithPercent){var a=f.parentsUntil(c.$el,c.html.blockTagsQuery()).get(0)||c.el;i=((i+r)/be(a).outerWidth()*100).toFixed(2),c.opts.imageRoundPercent&&(i=Math.round(i)),R(i+"%"),(t=Ee()?(c.helpers.getPX(f.parents(".fr-img-caption").css("width"))/be(a).outerWidth()*100).toFixed(2):(c.helpers.getPX(f.css("width"))/be(a).outerWidth()*100).toFixed(2))===i||c.opts.imageRoundPercent||R(t+"%"),f.css("height","").removeAttr("height")}else i+r>=c.opts.imageMinWidth&&(R(i+r),t=Ee()?c.helpers.getPX(f.parents(".fr-img-caption").css("width")):c.helpers.getPX(f.css("width"))),t!==i+r&&R(t),((f.attr("style")||"").match(/(^height:)|(; *height:)/)||f.attr("height"))&&(f.css("height",d.data("start-height")*f.width()/d.data("start-width")),f.removeAttr("height"));S(),c.events.trigger("image.resize",[me()])}}function L(e){if(!c.core.sameInstance(l))return!0;if(d&&f){if(e&&e.stopPropagation(),c.$el.find("img.fr-error").left)return!1;d=null,p.hide(),S(),a(),c.undo.saveStep(),c.events.trigger("image.resizeEnd",[me()])}}function x(e,t,n){c.edit.on(),f&&f.addClass("fr-error"),function(e){w();var t=c.popups.get("image.insert").find(".fr-image-progress-bar-layer");t.addClass("fr-error");var n=t.find("h3");n.text(e),c.events.disableBlur(),n.focus()}(c.language.translate("Something went wrong. Please try again.")),!f&&n&&Z(n),c.events.trigger("image.error",[{code:e,message:i[e]},t,n])}function N(e){if(e)return c.$wp&&c.events.$on(c.$wp,"scroll",function(){f&&c.popups.isVisible("image.edit")&&(c.events.disableBlur(),D(f))}),!0;var t="";if(0<c.opts.imageEditButtons.length){t+='<div class="fr-buttons">',t+=c.button.buildList(c.opts.imageEditButtons);var n={buttons:t+="</div>"};return c.popups.create("image.edit",n)}return!1}function w(e){var t=c.popups.get("image.insert");if(t||(t=z()),t.find(".fr-layer.fr-active").removeClass("fr-active").addClass("fr-pactive"),t.find(".fr-image-progress-bar-layer").addClass("fr-active"),t.find(".fr-buttons").hide(),f){var n=ve();c.popups.setContainer("image.insert",c.$sc);var r=n.offset().left+n.width()/2,i=n.offset().top+n.height();c.popups.show("image.insert",r,i,n.outerHeight())}void 0===e&&I(c.language.translate("Uploading"),0)}function O(e){var t=c.popups.get("image.insert");if(t&&(t.find(".fr-layer.fr-pactive").addClass("fr-active").removeClass("fr-pactive"),t.find(".fr-image-progress-bar-layer").removeClass("fr-active"),t.find(".fr-buttons").show(),e||c.$el.find("img.fr-error").length)){if(c.events.focus(),c.$el.find("img.fr-error").length&&(c.$el.find("img.fr-error").remove(),c.undo.saveStep(),c.undo.run(),c.undo.dropRedo()),!c.$wp&&f){var n=f;se(!0),c.selection.setAfter(n.get(0)),c.selection.restore()}c.popups.hide("image.insert")}}function I(e,t){var n=c.popups.get("image.insert");if(n){var r=n.find(".fr-image-progress-bar-layer");r.find("h3").text(e+(t?" "+t+"%":"")),r.removeClass("fr-error"),t?(r.find("div").removeClass("fr-indeterminate"),r.find("div > span").css("width",t+"%")):r.find("div").addClass("fr-indeterminate")}}function D(e){oe.call(e.get(0))}function k(){var e=be(this);c.popups.hide("image.insert"),e.removeClass("fr-uploading"),e.next().is("br")&&e.next().remove(),D(e),c.events.trigger("image.loaded",[e])}function F(o,e,s,l,d){c.edit.off(),I(c.language.translate("Loading image")),e&&(o=c.helpers.sanitizeURL(o));var t=new Image;t.onload=function(){var e,t;if(l){c.undo.canDo()||l.hasClass("fr-uploading")||c.undo.saveStep();var n=l.data("fr-old-src");l.data("fr-image-pasted")&&(n=null),c.$wp?((e=l.clone().removeData("fr-old-src").removeClass("fr-uploading").removeAttr("data-fr-image-pasted")).off("load"),n&&l.attr("src",n),l.replaceWith(e)):e=l;for(var r=e.get(0).attributes,i=0;i<r.length;i++){var a=r[i];0===a.nodeName.indexOf("data-")&&e.removeAttr(a.nodeName)}if(void 0!==s)for(t in s)s.hasOwnProperty(t)&&"link"!=t&&e.attr("data-"+t,s[t]);e.on("load",k),e.attr("src",o),c.edit.on(),C(!1),c.undo.saveStep(),c.events.disableBlur(),c.$el.blur(),c.events.trigger(n?"image.replaced":"image.inserted",[e,d])}else e=P(o,s,k),C(!1),c.undo.saveStep(),c.events.disableBlur(),c.$el.blur(),c.events.trigger("image.inserted",[e,d])},t.onerror=function(){x(r)},w(c.language.translate("Loading image")),t.src=o}function M(e){I(c.language.translate("Loading image"));var t=this.status,n=this.response,r=this.responseXML,i=this.responseText;try{if(c.opts.imageUploadToS3)if(201==t){var a=function(e){try{var t=be(e).find("Location").text(),n=be(e).find("Key").text();return!1===c.events.trigger("image.uploadedToS3",[t,n,e],!0)?(c.edit.on(),!1):t}catch(r){return x(m,e),!1}}(r);a&&F(a,!1,[],e,n||r)}else x(m,n||r,e);else if(200<=t&&t<300){var o=function(e){try{if(!1===c.events.trigger("image.uploaded",[e],!0))return c.edit.on(),!1;var t=JSON.parse(e);return t.link?t:(x(h,e),!1)}catch(n){return x(m,e),!1}}(i);o&&F(o.link,!1,o,e,n||i)}else x(g,n||i,e)}catch(s){x(m,n||i,e)}}function $(){x(m,this.response||this.responseText||this.responseXML)}function B(e){if(e.lengthComputable){var t=e.loaded/e.total*100|0;I(c.language.translate("Uploading"),t)}}function P(e,t,n){var r,i="";if(t&&void 0!==t)for(r in t)t.hasOwnProperty(r)&&"link"!=r&&(i+=" data-"+r+'="'+t[r]+'"');var a=c.opts.imageDefaultWidth;a&&"auto"!=a&&(a+=c.opts.imageResizeWithPercent?"%":"px");var o=be('<img src="'+e+'"'+i+(a?' style="width: '+a+';"':"")+">");fe(o,c.opts.imageDefaultDisplay,c.opts.imageDefaultAlign),o.on("load",n),o.on("error",function(){be(this).addClass("fr-error"),x(b)}),c.edit.on(),c.events.focus(!0),c.selection.restore(),c.undo.saveStep(),c.opts.imageSplitHTML?c.markers.split():c.markers.insert(),c.html.wrap();var s=c.$el.find(".fr-marker");return s.length?(s.parent().is("hr")&&s.parent().after(s),c.node.isLastSibling(s)&&s.parent().hasClass("fr-deletable")&&s.insertAfter(s.parent()),s.replaceWith(o)):c.$el.append(o),c.selection.clear(),o}function U(){c.edit.on(),O(!0)}function K(e,t){if(void 0!==e&&0<e.length){if(!1===c.events.trigger("image.beforeUpload",[e,t]))return!1;var n,r=e[0];if(null===c.opts.imageUploadURL||c.opts.imageUploadURL==u)return o=r,s=t||f,(l=new FileReader).addEventListener("load",function(){var e=l.result;if(l.result.indexOf("svg+xml")<0){for(var t=atob(l.result.split(",")[1]),n=[],r=0;r<t.length;r++)n.push(t.charCodeAt(r));e=window.URL.createObjectURL(new Blob([new Uint8Array(n)],{type:o.type})),c.image.insert(e,!1,null,s)}},!1),w(),l.readAsDataURL(o),!1;if(r.name||(r.name=(new Date).getTime()+"."+(r.type||"image/jpeg").replace(/image\//g,"")),r.size>c.opts.imageMaxSize)return x(v),!1;if(c.opts.imageAllowedTypes.indexOf(r.type.replace(/image\//g,""))<0)return x(E),!1;if(c.drag_support.formdata&&(n=c.drag_support.formdata?new FormData:null),n){var i;if(!1!==c.opts.imageUploadToS3)for(i in n.append("key",c.opts.imageUploadToS3.keyStart+(new Date).getTime()+"-"+(r.name||"untitled")),n.append("success_action_status","201"),n.append("X-Requested-With","xhr"),n.append("Content-Type",r.type),c.opts.imageUploadToS3.params)c.opts.imageUploadToS3.params.hasOwnProperty(i)&&n.append(i,c.opts.imageUploadToS3.params[i]);for(i in c.opts.imageUploadParams)c.opts.imageUploadParams.hasOwnProperty(i)&&n.append(i,c.opts.imageUploadParams[i]);n.append(c.opts.imageUploadParam,r,r.name);var a=c.opts.imageUploadURL;c.opts.imageUploadToS3&&(a=c.opts.imageUploadToS3.uploadURL?c.opts.imageUploadToS3.uploadURL:"https://"+c.opts.imageUploadToS3.region+".amazonaws.com/"+c.opts.imageUploadToS3.bucket),function(t,n,e,i){function a(){var e=be(this);e.off("load"),e.addClass("fr-uploading"),e.next().is("br")&&e.next().remove(),c.placeholder.refresh(),D(e),S(),w(),c.edit.off(),t.onload=function(){M.call(t,e)},t.onerror=$,t.upload.onprogress=B,t.onabort=U,e.off("abortUpload").on("abortUpload",function(){4!=t.readyState&&t.abort()}),t.send(n)}var o=new FileReader;o.addEventListener("load",function(){var e=o.result;if(o.result.indexOf("svg+xml")<0){for(var t=atob(o.result.split(",")[1]),n=[],r=0;r<t.length;r++)n.push(t.charCodeAt(r));e=window.URL.createObjectURL(new Blob([new Uint8Array(n)],{type:"image/jpeg"}))}i?(i.on("load",a),i.one("error",function(){i.off("load"),i.attr("src",i.data("fr-old-src")),x(b)}),c.edit.on(),c.undo.saveStep(),i.data("fr-old-src",i.attr("src")),i.attr("src",e)):P(e,null,a)},!1),o.readAsDataURL(e)}(c.core.getXHR(a,c.opts.imageUploadMethod),n,r,t||f)}}var o,s,l}function H(e){if(e.is("img")&&0<e.parents(".fr-img-caption").length)return e.parents(".fr-img-caption")}function W(e){var t=e.originalEvent.dataTransfer;if(t&&t.files&&t.files.length){var n=t.files[0];if(n&&n.type&&-1!==n.type.indexOf("image")&&0<=c.opts.imageAllowedTypes.indexOf(n.type.replace(/image\//g,""))){if(!c.opts.imageUpload)return e.preventDefault(),e.stopPropagation(),!1;c.markers.remove(),c.markers.insertAtPoint(e.originalEvent),c.$el.find(".fr-marker").replaceWith(be.FE.MARKERS),0===c.$el.find(".fr-marker").length&&c.selection.setAtEnd(c.el),c.popups.hideAll();var r=c.popups.get("image.insert");r||(r=z()),c.popups.setContainer("image.insert",c.$sc);var i=e.originalEvent.pageX,a=e.originalEvent.pageY;return c.opts.iframe&&(a+=c.$iframe.offset().top,i+=c.$iframe.offset().left),c.popups.show("image.insert",i,a),w(),0<=c.opts.imageAllowedTypes.indexOf(n.type.replace(/image\//g,""))?(se(!0),K(t.files)):x(E),e.preventDefault(),e.stopPropagation(),!1}}}function z(e){if(e)return c.popups.onRefresh("image.insert",T),c.popups.onHide("image.insert",A),!0;var t,n="";c.opts.imageUpload||c.opts.imageInsertButtons.splice(c.opts.imageInsertButtons.indexOf("imageUpload"),1),1<c.opts.imageInsertButtons.length&&(n='<div class="fr-buttons">'+c.button.buildList(c.opts.imageInsertButtons)+"</div>");var r=c.opts.imageInsertButtons.indexOf("imageUpload"),i=c.opts.imageInsertButtons.indexOf("imageByURL"),a="";0<=r&&(t=" fr-active",0<=i&&i<r&&(t=""),a='<div class="fr-image-upload-layer'+t+' fr-layer" id="fr-image-upload-layer-'+c.id+'"><strong>'+c.language.translate("Drop image")+"</strong><br>("+c.language.translate("or click")+')<div class="fr-form"><input type="file" accept="image/'+c.opts.imageAllowedTypes.join(", image/").toLowerCase()+'" tabIndex="-1" aria-labelledby="fr-image-upload-layer-'+c.id+'" role="button"></div></div>');var o="";0<=i&&(t=" fr-active",0<=r&&r<i&&(t=""),o='<div class="fr-image-by-url-layer'+t+' fr-layer" id="fr-image-by-url-layer-'+c.id+'"><div class="fr-input-line"><input id="fr-image-by-url-layer-text-'+c.id+'" type="text" placeholder="http://" tabIndex="1" aria-required="true"></div><div class="fr-action-buttons"><button type="button" class="fr-command fr-submit" data-cmd="imageInsertByURL" tabIndex="2" role="button">'+c.language.translate("Insert")+"</button></div></div>");var s,l={buttons:n,upload_layer:a,by_url_layer:o,progress_bar:'<div class="fr-image-progress-bar-layer fr-layer"><h3 tabIndex="-1" class="fr-message">Uploading</h3><div class="fr-loader"><span class="fr-progress"></span></div><div class="fr-action-buttons"><button type="button" class="fr-command fr-dismiss" data-cmd="imageDismissError" tabIndex="2" role="button">OK</button></div></div>'},d=c.popups.create("image.insert",l);return c.$wp&&c.events.$on(c.$wp,"scroll",function(){f&&c.popups.isVisible("image.insert")&&he()}),s=d,c.events.$on(s,"dragover dragenter",".fr-image-upload-layer",function(){return be(this).addClass("fr-drop"),!1},!0),c.events.$on(s,"dragleave dragend",".fr-image-upload-layer",function(){return be(this).removeClass("fr-drop"),!1},!0),c.events.$on(s,"drop",".fr-image-upload-layer",function(e){e.preventDefault(),e.stopPropagation(),be(this).removeClass("fr-drop");var t=e.originalEvent.dataTransfer;if(t&&t.files){var n=s.data("instance")||c;n.events.disableBlur(),n.image.upload(t.files),n.events.enableBlur()}},!0),c.helpers.isIOS()&&c.events.$on(s,"touchstart",'.fr-image-upload-layer input[type="file"]',function(){be(this).trigger("click")},!0),c.events.$on(s,"change",'.fr-image-upload-layer input[type="file"]',function(){if(this.files){var e=s.data("instance")||c;e.events.disableBlur(),s.find("input:focus").blur(),e.events.enableBlur(),e.image.upload(this.files,f)}be(this).val("")},!0),d}function Y(){f&&c.popups.get("image.alt").find("input").val(f.attr("alt")||"").trigger("change")}function G(){var e=c.popups.get("image.alt");e||(e=V()),O(),c.popups.refresh("image.alt"),c.popups.setContainer("image.alt",c.$sc);var t=ve();Ee()&&(t=t.find(".fr-img-wrap"));var n=t.offset().left+t.outerWidth()/2,r=t.offset().top+t.outerHeight();c.popups.show("image.alt",n,r,t.outerHeight())}function V(e){if(e)return c.popups.onRefresh("image.alt",Y),!0;var t={buttons:'<div class="fr-buttons">'+c.button.buildList(c.opts.imageAltButtons)+"</div>",alt_layer:'<div class="fr-image-alt-layer fr-layer fr-active" id="fr-image-alt-layer-'+c.id+'"><div class="fr-input-line"><input id="fr-image-alt-layer-text-'+c.id+'" type="text" placeholder="'+c.language.translate("Alternative Text")+'" tabIndex="1"></div><div class="fr-action-buttons"><button type="button" class="fr-command fr-submit" data-cmd="imageSetAlt" tabIndex="2" role="button">'+c.language.translate("Update")+"</button></div></div>"},n=c.popups.create("image.alt",t);return c.$wp&&c.events.$on(c.$wp,"scroll.image-alt",function(){f&&c.popups.isVisible("image.alt")&&G()}),n}function X(){if(f){var e=c.popups.get("image.size");e.find('input[name="width"]').val(f.get(0).style.width).trigger("change"),e.find('input[name="height"]').val(f.get(0).style.height).trigger("change")}}function q(){var e=c.popups.get("image.size");e||(e=j()),O(),c.popups.refresh("image.size"),c.popups.setContainer("image.size",c.$sc);var t=ve();Ee()&&(t=t.find(".fr-img-wrap"));var n=t.offset().left+t.outerWidth()/2,r=t.offset().top+t.outerHeight();c.popups.show("image.size",n,r,t.outerHeight())}function j(e){if(e)return c.popups.onRefresh("image.size",X),!0;var t={buttons:'<div class="fr-buttons">'+c.button.buildList(c.opts.imageSizeButtons)+"</div>",size_layer:'<div class="fr-image-size-layer fr-layer fr-active" id="fr-image-size-layer-'+c.id+'"><div class="fr-image-group"><div class="fr-input-line"><input id="fr-image-size-layer-width-'+c.id+'" type="text" name="width" placeholder="'+c.language.translate("Width")+'" tabIndex="1"></div><div class="fr-input-line"><input id="fr-image-size-layer-height'+c.id+'" type="text" name="height" placeholder="'+c.language.translate("Height")+'" tabIndex="1"></div></div><div class="fr-action-buttons"><button type="button" class="fr-command fr-submit" data-cmd="imageSetSize" tabIndex="2" role="button">'+c.language.translate("Update")+"</button></div></div>"},n=c.popups.create("image.size",t);return c.$wp&&c.events.$on(c.$wp,"scroll.image-size",function(){f&&c.popups.isVisible("image.size")&&q()}),n}function Q(e,t,n,r){return e.pageX=t,y.call(this,e),e.pageX=e.pageX+n*Math.floor(Math.pow(1.1,r)),_.call(this,e),L.call(this,e),++r}function Z(e){(e=e||ve())&&!1!==c.events.trigger("image.beforeRemove",[e])&&(c.popups.hideAll(),ge(),se(!0),c.undo.canDo()||c.undo.saveStep(),e.get(0)==c.el?e.removeAttr("src"):(e.get(0).parentNode&&"A"==e.get(0).parentNode.tagName?(c.selection.setBefore(e.get(0).parentNode)||c.selection.setAfter(e.get(0).parentNode)||e.parent().after(be.FE.MARKERS),be(e.get(0).parentNode).remove()):(c.selection.setBefore(e.get(0))||c.selection.setAfter(e.get(0))||e.after(be.FE.MARKERS),e.remove()),c.html.fillEmptyBlocks(),c.selection.restore()),c.undo.saveStep())}function J(e){var t=e.which;if(f&&(t==be.FE.KEYCODE.BACKSPACE||t==be.FE.KEYCODE.DELETE))return e.preventDefault(),e.stopPropagation(),Z(),!1;if(f&&t==be.FE.KEYCODE.ESC){var n=f;return se(!0),c.selection.setAfter(n.get(0)),c.selection.restore(),e.preventDefault(),!1}if(f&&(t==be.FE.KEYCODE.ARROW_LEFT||t==be.FE.KEYCODE.ARROW_RIGHT)){var r=f.get(0);return se(!0),t==be.FE.KEYCODE.ARROW_LEFT?c.selection.setBefore(r):c.selection.setAfter(r),c.selection.restore(),e.preventDefault(),!1}return f&&t!=be.FE.KEYCODE.F10&&!c.keys.isBrowserAction(e)?(e.preventDefault(),e.stopPropagation(),!1):void 0}function ee(e){if(e&&"IMG"==e.tagName){if(c.node.hasClass(e,"fr-uploading")||c.node.hasClass(e,"fr-error")?e.parentNode.removeChild(e):c.node.hasClass(e,"fr-draggable")&&e.classList.remove("fr-draggable"),e.parentNode&&e.parentNode.parentNode&&c.node.hasClass(e.parentNode.parentNode,"fr-img-caption")){var t=e.parentNode.parentNode;t.removeAttribute("contenteditable"),t.removeAttribute("draggable"),t.classList.remove("fr-draggable");var n=e.nextSibling;n&&n.removeAttribute("contenteditable")}}else if(e&&e.nodeType==Node.ELEMENT_NODE)for(var r=e.querySelectorAll("img.fr-uploading, img.fr-error, img.fr-draggable"),i=0;i<r.length;i++)ee(r[i])}function te(e){if(!1===c.events.trigger("image.beforePasteUpload",[e]))return!1;f=be(e),S(),a(),he(),w(),f.one("load",function(){S(),w()});for(var t=atob(be(e).attr("src").split(",")[1]),n=[],r=0;r<t.length;r++)n.push(t.charCodeAt(r));K([new Blob([new Uint8Array(n)],{type:be(e).attr("src").split(",")[0].replace(/data\:/g,"").replace(/;base64/g,"")})],f)}function ne(){c.opts.imagePaste?c.$el.find("img[data-fr-image-pasted]").each(function(e,n){if(c.opts.imagePasteProcess){var t=c.opts.imageDefaultWidth;t&&"auto"!=t&&(t+=c.opts.imageResizeWithPercent?"%":"px"),be(n).css("width",t).removeClass("fr-dii fr-dib fr-fir fr-fil"),fe(be(n),c.opts.imageDefaultDisplay,c.opts.imageDefaultAlign)}if(0===n.src.indexOf("data:"))te(n);else if(0===n.src.indexOf("blob:")||0===n.src.indexOf("http")&&c.opts.imageUploadRemoteUrls&&c.opts.imageCORSProxy){var r=new Image;r.crossOrigin="Anonymous",r.onload=function(){var e=c.o_doc.createElement("CANVAS"),t=e.getContext("2d");e.height=this.naturalHeight,e.width=this.naturalWidth,t.drawImage(this,0,0),n.src=e.toDataURL("image/png"),te(n)},r.src=(0===n.src.indexOf("blob:")?"":c.opts.imageCORSProxy+"/")+n.src}else 0!==n.src.indexOf("http")||0===n.src.indexOf("https://mail.google.com/mail")?(c.selection.save(),be(n).remove(),c.selection.restore()):be(n).removeAttr("data-fr-image-pasted")}):c.$el.find("img[data-fr-image-pasted]").remove()}function re(e){var t=e.target.result,n=c.opts.imageDefaultWidth;n&&"auto"!=n&&(n+=c.opts.imageResizeWithPercent?"%":"px"),c.undo.saveStep(),c.html.insert('<img data-fr-image-pasted="true" src="'+t+'"'+(n?' style="width: '+n+';"':"")+">");var r=c.$el.find('img[data-fr-image-pasted="true"]');r&&fe(r,c.opts.imageDefaultDisplay,c.opts.imageDefaultAlign),c.events.trigger("paste.after")}function ie(e){if(e&&e.clipboardData&&e.clipboardData.items){var t=null;if(e.clipboardData.getData("text/rtf"))t=e.clipboardData.items[0].getAsFile();else for(var n=0;n<e.clipboardData.items.length&&!(t=e.clipboardData.items[n].getAsFile());n++);if(t)return r=t,(i=new FileReader).onload=re,i.readAsDataURL(r),!1}var r,i}function ae(e){return e=e.replace(/<img /gi,'<img data-fr-image-pasted="true" ')}function oe(e){if("false"==be(this).parents("[contenteditable]:not(.fr-element):not(.fr-img-caption):not(body):first").attr("contenteditable"))return!0;if(e&&"touchend"==e.type&&n)return!0;if(e&&c.edit.isDisabled())return e.stopPropagation(),e.preventDefault(),!1;for(var t=0;t<be.FE.INSTANCES.length;t++)be.FE.INSTANCES[t]!=c&&be.FE.INSTANCES[t].events.trigger("image.hideResizer");c.toolbar.disable(),e&&(e.stopPropagation(),e.preventDefault()),c.helpers.isMobile()&&(c.events.disableBlur(),c.$el.blur(),c.events.enableBlur()),c.opts.iframe&&c.size.syncIframe(),f=be(this),ge(),S(),a(),c.browser.msie||c.selection.clear(),c.helpers.isIOS()&&(c.events.disableBlur(),c.$el.blur()),c.button.bulkRefresh(),c.events.trigger("video.hideResizer")}function se(e){f&&(le||!0===e)&&(c.toolbar.enable(),l.removeClass("fr-active"),c.popups.hide("image.edit"),f=null,ce(),d=null,p&&p.hide())}i[r]="Image cannot be loaded from the passed link.",i[h]="No link in upload response.",i[g]="Error during file upload.",i[m]="Parsing response failed.",i[v]="File is too large.",i[E]="Image file type is invalid.",i[7]="Files can be uploaded only to same domain in IE 8 and IE 9.";var le=!(i[b]="Image file is corrupted.");function de(){le=!0}function ce(){le=!1}function fe(e,t,n){!c.opts.htmlUntouched&&c.opts.useClasses?(e.removeClass("fr-fil fr-fir fr-dib fr-dii"),n&&e.addClass("fr-fi"+n[0]),t&&e.addClass("fr-di"+t[0])):"inline"==t?(e.css({display:"inline-block",verticalAlign:"bottom",margin:c.opts.imageDefaultMargin}),"center"==n?e.css({"float":"none",marginBottom:"",marginTop:"",maxWidth:"calc(100% - "+2*c.opts.imageDefaultMargin+"px)",textAlign:"center"}):"left"==n?e.css({"float":"left",marginLeft:0,maxWidth:"calc(100% - "+c.opts.imageDefaultMargin+"px)",textAlign:"left"}):e.css({"float":"right",marginRight:0,maxWidth:"calc(100% - "+c.opts.imageDefaultMargin+"px)",textAlign:"right"})):"block"==t&&(e.css({display:"block","float":"none",verticalAlign:"top",margin:c.opts.imageDefaultMargin+"px auto",textAlign:"center"}),"left"==n?e.css({marginLeft:0,textAlign:"left"}):"right"==n&&e.css({marginRight:0,textAlign:"right"}))}function pe(e){if(void 0===e&&(e=ve()),e){if(e.hasClass("fr-fil"))return"left";if(e.hasClass("fr-fir"))return"right";if(e.hasClass("fr-dib")||e.hasClass("fr-dii"))return"center";var t=e.css("float");if(e.css("float","none"),"block"==e.css("display")){if(e.css("float",""),e.css("float")!=t&&e.css("float",t),0===parseInt(e.css("margin-left"),10))return"left";if(0===parseInt(e.css("margin-right"),10))return"right"}else{if(e.css("float",""),e.css("float")!=t&&e.css("float",t),"left"==e.css("float"))return"left";if("right"==e.css("float"))return"right"}}return"center"}function ue(e){void 0===e&&(e=ve());var t=e.css("float");return e.css("float","none"),"block"==e.css("display")?(e.css("float",""),e.css("float")!=t&&e.css("float",t),"block"):(e.css("float",""),e.css("float")!=t&&e.css("float",t),"inline")}function he(){var e=c.popups.get("image.insert");e||(e=z()),c.popups.isVisible("image.insert")||(O(),c.popups.refresh("image.insert"),c.popups.setContainer("image.insert",c.$sc));var t=ve();Ee()&&(t=t.find(".fr-img-wrap"));var n=t.offset().left+t.outerWidth()/2,r=t.offset().top+t.outerHeight();c.popups.show("image.insert",n,r,t.outerHeight(!0))}function ge(){if(f){c.events.disableBlur(),c.selection.clear();var e=c.doc.createRange();e.selectNode(f.get(0)),c.browser.msie&&e.collapse(!0),c.selection.get().addRange(e),c.events.enableBlur()}}function me(){return f}function ve(){return Ee()?f.parents(".fr-img-caption:first"):f}function Ee(){return!!f&&0<f.parents(".fr-img-caption").length}return{_init:function(){var r;c.events.$on(c.$el,c._mousedown,"IMG"==c.el.tagName?null:'img:not([contenteditable="false"])',function(e){if("false"==be(this).parents("[contenteditable]:not(.fr-element):not(.fr-img-caption):not(body):first").attr("contenteditable"))return!0;c.helpers.isMobile()||c.selection.clear(),t=!0,c.popups.areVisible()&&c.events.disableBlur(),c.browser.msie&&(c.events.disableBlur(),c.$el.attr("contenteditable",!1)),c.draggable||"touchstart"==e.type||e.preventDefault(),e.stopPropagation()}),c.events.$on(c.$el,c._mouseup,"IMG"==c.el.tagName?null:'img:not([contenteditable="false"])',function(e){if("false"==be(this).parents("[contenteditable]:not(.fr-element):not(.fr-img-caption):not(body):first").attr("contenteditable"))return!0;t&&(t=!1,e.stopPropagation(),c.browser.msie&&(c.$el.attr("contenteditable",!0),c.events.enableBlur()))}),c.events.on("keyup",function(e){if(e.shiftKey&&""===c.selection.text().replace(/\n/g,"")&&c.keys.isArrow(e.which)){var t=c.selection.element(),n=c.selection.endElement();t&&"IMG"==t.tagName?D(be(t)):n&&"IMG"==n.tagName&&D(be(n))}},!0),c.events.on("drop",W),c.events.on("element.beforeDrop",H),c.events.on("mousedown window.mousedown",de),c.events.on("window.touchmove",ce),c.events.on("mouseup window.mouseup",function(){if(f)return se(),!1;ce()}),c.events.on("commands.mousedown",function(e){0<e.parents(".fr-toolbar").length&&se()}),c.events.on("blur image.hideResizer commands.undo commands.redo element.dropped",function(){se(!(t=!1))}),c.events.on("modals.hide",function(){f&&(ge(),c.selection.clear())}),"IMG"==c.el.tagName&&c.$el.addClass("fr-view"),c.events.$on(c.$el,c.helpers.isMobile()&&!c.helpers.isWindowsPhone()?"touchend":"click","IMG"==c.el.tagName?null:'img:not([contenteditable="false"])',oe),c.helpers.isMobile()&&(c.events.$on(c.$el,"touchstart","IMG"==c.el.tagName?null:'img:not([contenteditable="false"])',function(){n=!1}),c.events.$on(c.$el,"touchmove",function(){n=!0})),c.$wp?(c.events.on("window.keydown keydown",J,!0),c.events.on("keyup",function(e){if(f&&e.which==be.FE.KEYCODE.ENTER)return!1},!0)):c.events.$on(c.$win,"keydown",J),c.events.on("toolbar.esc",function(){if(f){if(c.$wp)c.events.disableBlur(),c.events.focus();else{var e=f;se(!0),c.selection.setAfter(e.get(0)),c.selection.restore()}return!1}},!0),c.events.on("toolbar.focusEditor",function(){if(f)return!1},!0),c.events.on("window.cut window.copy",function(e){if(f&&c.popups.isVisible("image.edit")&&!c.popups.get("image.edit").find(":focus").length){var t=ve();Ee()?(t.before(be.FE.START_MARKER),t.after(be.FE.END_MARKER),c.selection.restore(),c.paste.saveCopiedText(t.get(0).outerHTML,t.text())):(ge(),c.paste.saveCopiedText(f.get(0).outerHTML,f.attr("alt"))),"copy"==e.type?setTimeout(function(){D(f)}):(se(!0),c.undo.saveStep(),setTimeout(function(){c.undo.saveStep()},0))}},!0),c.browser.msie&&c.events.on("keydown",function(e){if(!c.selection.isCollapsed()||!f)return!0;var t=e.which;t==be.FE.KEYCODE.C&&c.keys.ctrlKey(e)?c.events.trigger("window.copy"):t==be.FE.KEYCODE.X&&c.keys.ctrlKey(e)&&c.events.trigger("window.cut")}),c.events.$on(be(c.o_win),"keydown",function(e){var t=e.which;if(f&&t==be.FE.KEYCODE.BACKSPACE)return e.preventDefault(),!1}),c.events.$on(c.$win,"keydown",function(e){var t=e.which;f&&f.hasClass("fr-uploading")&&t==be.FE.KEYCODE.ESC&&f.trigger("abortUpload")}),c.events.on("destroy",function(){f&&f.hasClass("fr-uploading")&&f.trigger("abortUpload")}),c.events.on("paste.before",ie),c.events.on("paste.beforeCleanup",ae),c.events.on("paste.after",ne),c.events.on("html.set",e),c.events.on("html.inserted",e),e(),c.events.on("destroy",function(){s=[]}),c.events.on("html.processGet",ee),c.opts.imageOutputSize&&c.events.on("html.beforeGet",function(){r=c.el.querySelectorAll("img");for(var e=0;e<r.length;e++){var t=r[e].style.width||be(r[e]).width(),n=r[e].style.height||be(r[e]).height();t&&r[e].setAttribute("width",(""+t).replace(/px/,"")),n&&r[e].setAttribute("height",(""+n).replace(/px/,""))}}),c.opts.iframe&&c.events.on("image.loaded",c.size.syncIframe),c.$wp&&(C(),c.events.on("contentChanged",C)),c.events.$on(be(c.o_win),"orientationchange.image",function(){setTimeout(function(){f&&D(f)},100)}),N(!0),z(!0),j(!0),V(!0),c.events.on("node.remove",function(e){if("IMG"==e.get(0).tagName)return Z(e),!1})},showInsertPopup:function(){var e=c.$tb.find('.fr-command[data-cmd="insertImage"]'),t=c.popups.get("image.insert");if(t||(t=z()),O(),!t.hasClass("fr-active"))if(c.popups.refresh("image.insert"),c.popups.setContainer("image.insert",c.$tb),e.is(":visible")){var n=e.offset().left+e.outerWidth()/2,r=e.offset().top+(c.opts.toolbarBottom?10:e.outerHeight()-10);c.popups.show("image.insert",n,r,e.outerHeight())}else c.position.forSelection(t),c.popups.show("image.insert")},showLayer:function(e){var t,n,r=c.popups.get("image.insert");if(f||c.opts.toolbarInline){if(f){var i=ve();Ee()&&(i=i.find(".fr-img-wrap")),n=i.offset().top+i.outerHeight(),t=i.offset().left+i.outerWidth()/2}}else{var a=c.$tb.find('.fr-command[data-cmd="insertImage"]');t=a.offset().left+a.outerWidth()/2,n=a.offset().top+(c.opts.toolbarBottom?10:a.outerHeight()-10)}!f&&c.opts.toolbarInline&&(n=r.offset().top-c.helpers.getPX(r.css("margin-top")),r.hasClass("fr-above")&&(n+=r.outerHeight())),r.find(".fr-layer").removeClass("fr-active"),r.find(".fr-"+e+"-layer").addClass("fr-active"),c.popups.show("image.insert",t,n,f?f.outerHeight():0),c.accessibility.focusPopup(r)},refreshUploadButton:function(e){c.popups.get("image.insert").find(".fr-image-upload-layer").hasClass("fr-active")&&e.addClass("fr-active").attr("aria-pressed",!0)},refreshByURLButton:function(e){c.popups.get("image.insert").find(".fr-image-by-url-layer").hasClass("fr-active")&&e.addClass("fr-active").attr("aria-pressed",!0)},upload:K,insertByURL:function(){var e=c.popups.get("image.insert").find(".fr-image-by-url-layer input");if(0<e.val().length){w(),I(c.language.translate("Loading image"));var t=e.val();if(c.opts.imageUploadRemoteUrls&&c.opts.imageCORSProxy&&c.opts.imageUpload){var n=new XMLHttpRequest;n.onload=function(){200==this.status?K([new Blob([this.response],{type:this.response.type||"image/png"})],f):x(r)},n.onerror=function(){F(t,!0,[],f)},n.open("GET",c.opts.imageCORSProxy+"/"+t,!0),n.responseType="blob",n.send()}else F(t,!0,[],f);e.val(""),e.blur()}},align:function(e){var t=ve();t.removeClass("fr-fir fr-fil"),!c.opts.htmlUntouched&&c.opts.useClasses?"left"==e?t.addClass("fr-fil"):"right"==e&&t.addClass("fr-fir"):fe(t,ue(),e),ge(),S(),a(),c.selection.clear()},refreshAlign:function(e){f&&e.find("> *:first").replaceWith(c.icon.create("image-align-"+pe()))},refreshAlignOnShow:function(e,t){f&&t.find('.fr-command[data-param1="'+pe()+'"]').addClass("fr-active").attr("aria-selected",!0)},display:function(e){var t=ve();t.removeClass("fr-dii fr-dib"),!c.opts.htmlUntouched&&c.opts.useClasses?"inline"==e?t.addClass("fr-dii"):"block"==e&&t.addClass("fr-dib"):fe(t,e,pe()),ge(),S(),a(),c.selection.clear()},refreshDisplayOnShow:function(e,t){f&&t.find('.fr-command[data-param1="'+ue()+'"]').addClass("fr-active").attr("aria-selected",!0)},replace:he,back:function(){f?(c.events.disableBlur(),be(".fr-popup input:focus").blur(),D(f)):(c.events.disableBlur(),c.selection.restore(),c.events.enableBlur(),c.popups.hide("image.insert"),c.toolbar.showInline())},get:me,getEl:ve,insert:F,showProgressBar:w,remove:Z,hideProgressBar:O,applyStyle:function(e,t,n){if(void 0===t&&(t=c.opts.imageStyles),void 0===n&&(n=c.opts.imageMultipleStyles),!f)return!1;var r=ve();if(!n){var i=Object.keys(t);i.splice(i.indexOf(e),1),r.removeClass(i.join(" "))}"object"==typeof t[e]?(r.removeAttr("style"),r.css(t[e].style)):r.toggleClass(e),D(f)},showAltPopup:G,showSizePopup:q,setAlt:function(e){if(f){var t=c.popups.get("image.alt");f.attr("alt",e||t.find("input").val()||""),t.find("input:focus").blur(),D(f)}},setSize:function(e,t){if(f){var n=c.popups.get("image.size");e=e||n.find('input[name="width"]').val()||"",t=t||n.find('input[name="height"]').val()||"";var r=/^[\d]+((px)|%)*$/g;f.removeAttr("width").removeAttr("height"),e.match(r)?f.css("width",e):f.css("width",""),t.match(r)?f.css("height",t):f.css("height",""),Ee()&&(f.parent().removeAttr("width").removeAttr("height"),e.match(r)?f.parent().css("width",e):f.parent().css("width",""),t.match(r)?f.parent().css("height",t):f.parent().css("height","")),n.find("input:focus").blur(),D(f)}},toggleCaption:function(){var e;f&&!Ee()?((e=f).parent().is("a")&&(e=f.parent()),e.wrap("<span "+(c.browser.mozilla?"":'contenteditable="false"')+'class="fr-img-caption '+f.attr("class")+'" style="'+(f.attr("style")?f.attr("style")+" ":"")+"width: "+f.width()+'px;" draggable="false"></span>'),e.wrap('<span class="fr-img-wrap"></span>'),e.after('<span class="fr-inner" contenteditable="true">'+be.FE.START_MARKER+"Image caption"+be.FE.END_MARKER+"</span>"),f.removeAttr("class").removeAttr("style").removeAttr("width"),se(!0),c.selection.restore()):(e=ve(),f.insertAfter(e),f.attr("class",e.attr("class").replace("fr-img-caption","")).attr("style",e.attr("style")),e.remove(),D(f))},hasCaption:Ee,exitEdit:se,edit:D}},be.FE.DefineIcon("insertImage",{NAME:"image"}),be.FE.RegisterShortcut(be.FE.KEYCODE.P,"insertImage",null,"P"),be.FE.RegisterCommand("insertImage",{title:"Insert Image",undo:!1,focus:!0,refreshAfterCallback:!1,popup:!0,callback:function(){this.popups.isVisible("image.insert")?(this.$el.find(".fr-marker").length&&(this.events.disableBlur(),this.selection.restore()),this.popups.hide("image.insert")):this.image.showInsertPopup()},plugin:"image"}),be.FE.DefineIcon("imageUpload",{NAME:"upload"}),be.FE.RegisterCommand("imageUpload",{title:"Upload Image",undo:!1,focus:!1,toggle:!0,callback:function(){this.image.showLayer("image-upload")},refresh:function(e){this.image.refreshUploadButton(e)}}),be.FE.DefineIcon("imageByURL",{NAME:"link"}),be.FE.RegisterCommand("imageByURL",{title:"By URL",undo:!1,focus:!1,toggle:!0,callback:function(){this.image.showLayer("image-by-url")},refresh:function(e){this.image.refreshByURLButton(e)}}),be.FE.RegisterCommand("imageInsertByURL",{title:"Insert Image",undo:!0,refreshAfterCallback:!1,callback:function(){this.image.insertByURL()},refresh:function(e){this.image.get()?e.text(this.language.translate("Replace")):e.text(this.language.translate("Insert"))}}),be.FE.DefineIcon("imageDisplay",{NAME:"star"}),be.FE.RegisterCommand("imageDisplay",{title:"Display",type:"dropdown",options:{inline:"Inline",block:"Break Text"},callback:function(e,t){this.image.display(t)},refresh:function(e){this.opts.imageTextNear||e.addClass("fr-hidden")},refreshOnShow:function(e,t){this.image.refreshDisplayOnShow(e,t)}}),be.FE.DefineIcon("image-align",{NAME:"align-left"}),be.FE.DefineIcon("image-align-left",{NAME:"align-left"}),be.FE.DefineIcon("image-align-right",{NAME:"align-right"}),be.FE.DefineIcon("image-align-center",{NAME:"align-justify"}),be.FE.DefineIcon("imageAlign",{NAME:"align-justify"}),be.FE.RegisterCommand("imageAlign",{type:"dropdown",title:"Align",options:{left:"Align Left",center:"None",right:"Align Right"},html:function(){var e='<ul class="fr-dropdown-list" role="presentation">',t=be.FE.COMMANDS.imageAlign.options;for(var n in t)t.hasOwnProperty(n)&&(e+='<li role="presentation"><a class="fr-command fr-title" tabIndex="-1" role="option" data-cmd="imageAlign" data-param1="'+n+'" title="'+this.language.translate(t[n])+'">'+this.icon.create("image-align-"+n)+'<span class="fr-sr-only">'+this.language.translate(t[n])+"</span></a></li>");return e+="</ul>"},callback:function(e,t){this.image.align(t)},refresh:function(e){this.image.refreshAlign(e)},refreshOnShow:function(e,t){this.image.refreshAlignOnShow(e,t)}}),be.FE.DefineIcon("imageReplace",{NAME:"exchange",FA5NAME:"exchange-alt"}),be.FE.RegisterCommand("imageReplace",{title:"Replace",undo:!1,focus:!1,popup:!0,refreshAfterCallback:!1,callback:function(){this.image.replace()}}),be.FE.DefineIcon("imageRemove",{NAME:"trash"}),be.FE.RegisterCommand("imageRemove",{title:"Remove",callback:function(){this.image.remove()}}),be.FE.DefineIcon("imageBack",{NAME:"arrow-left"}),be.FE.RegisterCommand("imageBack",{title:"Back",undo:!1,focus:!1,back:!0,callback:function(){this.image.back()},refresh:function(e){this.image.get()||this.opts.toolbarInline?(e.removeClass("fr-hidden"),e.next(".fr-separator").removeClass("fr-hidden")):(e.addClass("fr-hidden"),e.next(".fr-separator").addClass("fr-hidden"))}}),be.FE.RegisterCommand("imageDismissError",{title:"OK",undo:!1,callback:function(){this.image.hideProgressBar(!0)}}),be.FE.DefineIcon("imageStyle",{NAME:"magic"}),be.FE.RegisterCommand("imageStyle",{title:"Style",type:"dropdown",html:function(){var e='<ul class="fr-dropdown-list" role="presentation">',t=this.opts.imageStyles;for(var n in t)if(t.hasOwnProperty(n)){var r=t[n];"object"==typeof r&&(r=r.title),e+='<li role="presentation"><a class="fr-command" tabIndex="-1" role="option" data-cmd="imageStyle" data-param1="'+n+'">'+this.language.translate(r)+"</a></li>"}return e+="</ul>"},callback:function(e,t){this.image.applyStyle(t)},refreshOnShow:function(e,t){var n=this.image.getEl();n&&t.find(".fr-command").each(function(){var e=be(this).data("param1"),t=n.hasClass(e);be(this).toggleClass("fr-active",t).attr("aria-selected",t)})}}),be.FE.DefineIcon("imageAlt",{NAME:"info"}),be.FE.RegisterCommand("imageAlt",{undo:!1,focus:!1,popup:!0,title:"Alternative Text",callback:function(){this.image.showAltPopup()}}),be.FE.RegisterCommand("imageSetAlt",{undo:!0,focus:!1,title:"Update",refreshAfterCallback:!1,callback:function(){this.image.setAlt()}}),be.FE.DefineIcon("imageSize",{NAME:"arrows-alt"}),be.FE.RegisterCommand("imageSize",{undo:!1,focus:!1,popup:!0,title:"Change Size",callback:function(){this.image.showSizePopup()}}),be.FE.RegisterCommand("imageSetSize",{undo:!0,focus:!1,title:"Update",refreshAfterCallback:!1,callback:function(){this.image.setSize()}}),be.FE.DefineIcon("imageCaption",{NAME:"commenting",FA5NAME:"comment-alt"}),be.FE.RegisterCommand("imageCaption",{undo:!0,focus:!1,title:"Image Caption",refreshAfterCallback:!0,callback:function(){this.image.toggleCaption()},refresh:function(e){this.image.get()&&e.toggleClass("fr-active",this.image.hasCaption())}}),be.extend(be.FE.DEFAULTS,{imageManagerLoadURL:"https://i.froala.com/load-files",imageManagerLoadMethod:"get",imageManagerLoadParams:{},imageManagerPreloader:null,imageManagerDeleteURL:"",imageManagerDeleteMethod:"post",imageManagerDeleteParams:{},imageManagerPageSize:12,imageManagerScrollOffset:20,imageManagerToggleTags:!0}),be.FE.PLUGINS.imageManager=function(s){var l,d,r,i,a,c,o,f,p,u,h,g="image_manager",e=10,m=11,v=12,E=13,b=14,T=15,A=21,C=22,n={};function S(){var e=be(window).outerWidth();return e<768?2:e<1200?3:4}function R(){a.empty();for(var e=0;e<h;e++)a.append('<div class="fr-list-column"></div>')}function y(){if(p<o.length&&(a.outerHeight()<=r.outerHeight()+s.opts.imageManagerScrollOffset||r.scrollTop()+s.opts.imageManagerScrollOffset>a.outerHeight()-r.outerHeight())){f++;for(var e=s.opts.imageManagerPageSize*(f-1);e<Math.min(o.length,s.opts.imageManagerPageSize*f);e++)t(o[e])}}function t(i){var a=new Image,o=be('<div class="fr-image-container fr-empty fr-image-'+u+++'" data-loading="'+s.language.translate("Loading")+'.." data-deleting="'+s.language.translate("Deleting")+'..">');N(!1),a.onload=function(){o.height(Math.floor(o.width()/a.width*a.height));var n=be("<img/>");if(i.thumb)n.attr("src",i.thumb);else{if(D(b,i),!i.url)return D(T,i),!1;n.attr("src",i.url)}if(i.url&&n.attr("data-url",i.url),i.tag)if(d.find(".fr-modal-more.fr-not-available").removeClass("fr-not-available"),d.find(".fr-modal-tags").show(),0<=i.tag.indexOf(",")){for(var e=i.tag.split(","),t=0;t<e.length;t++)e[t]=e[t].trim(),0===c.find('a[title="'+e[t]+'"]').length&&c.append('<a role="button" title="'+e[t]+'">'+e[t]+"</a>");n.attr("data-tag",e.join())}else 0===c.find('a[title="'+i.tag.trim()+'"]').length&&c.append('<a role="button" title="'+i.tag.trim()+'">'+i.tag.trim()+"</a>"),n.attr("data-tag",i.tag.trim());for(var r in i.name&&n.attr("alt",i.name),i)i.hasOwnProperty(r)&&"thumb"!=r&&"url"!=r&&"tag"!=r&&n.attr("data-"+r,i[r]);o.append(n).append(be(s.icon.create("imageManagerDelete")).addClass("fr-delete-img").attr("title",s.language.translate("Delete"))).append(be(s.icon.create("imageManagerInsert")).addClass("fr-insert-img").attr("title",s.language.translate("Insert"))),c.find(".fr-selected-tag").each(function(e,t){$(n,t.text)||o.hide()}),n.on("load",function(){o.removeClass("fr-empty"),o.height("auto"),p++,x(L(parseInt(n.parent().attr("class").match(/fr-image-(\d+)/)[1],10)+1)),N(!1),p%s.opts.imageManagerPageSize==0&&y()}),s.events.trigger("imageManager.imageLoaded",[n])},a.onerror=function(){p++,o.remove(),x(L(parseInt(o.attr("class").match(/fr-image-(\d+)/)[1],10)+1)),D(e,i),p%s.opts.imageManagerPageSize==0&&y()},a.src=i.thumb||i.url,_().append(o)}function _(){var r,i;return a.find(".fr-list-column").each(function(e,t){var n=be(t);0===e?(i=n.outerHeight(),r=n):n.outerHeight()<i&&(i=n.outerHeight(),r=n)}),r}function L(e){e===undefined&&(e=0);for(var t=[],n=u-1;e<=n;n--){var r=a.find(".fr-image-"+n);r.length&&(t.push(r),be('<div id="fr-image-hidden-container">').append(r),a.find(".fr-image-"+n).remove())}return t}function x(e){for(var t=e.length-1;0<=t;t--)_().append(e[t])}function N(e){if(e===undefined&&(e=!0),!l.is(":visible"))return!0;var t=S();if(t!=h){h=t;var n=L();R(),x(n)}s.modals.resize(g),e&&y()}function w(e){var t={},n=e.data();for(var r in n)n.hasOwnProperty(r)&&"url"!=r&&"tag"!=r&&(t[r]=n[r]);return t}function O(e){var t=be(e.currentTarget).siblings("img"),n=l.data("instance")||s,r=l.data("current-image");if(s.modals.hide(g),n.image.showProgressBar(),r)r.data("fr-old-src",r.attr("src")),r.trigger("click");else{n.events.focus(!0),n.selection.restore();var i=n.position.getBoundingRect(),a=i.left+i.width/2+be(s.doc).scrollLeft(),o=i.top+i.height+be(s.doc).scrollTop();n.popups.setContainer("image.insert",s.$sc),n.popups.show("image.insert",a,o)}n.image.insert(t.data("url"),!1,w(t),r)}function I(e){var n=be(e.currentTarget).siblings("img"),t=s.language.translate("Are you sure? Image will be deleted.");confirm(t)&&(s.opts.imageManagerDeleteURL?!1!==s.events.trigger("imageManager.beforeDeleteImage",[n])&&(n.parent().addClass("fr-image-deleting"),be.ajax({method:s.opts.imageManagerDeleteMethod,url:s.opts.imageManagerDeleteURL,data:be.extend(be.extend({src:n.attr("src")},w(n)),s.opts.imageManagerDeleteParams),crossDomain:s.opts.requestWithCORS,xhrFields:{withCredentials:s.opts.requestWithCredentials},headers:s.opts.requestHeaders}).done(function(e){s.events.trigger("imageManager.imageDeleted",[e]);var t=L(parseInt(n.parent().attr("class").match(/fr-image-(\d+)/)[1],10)+1);n.parent().remove(),x(t),l.find("#fr-modal-tags > a").each(function(){0===l.find('#fr-image-list [data-tag*="'+be(this).text()+'"]').length&&be(this).removeClass("fr-selected-tag").hide()}),F(),N(!0)}).fail(function(e){D(A,e.response||e.responseText)})):D(C))}function D(e,t){10<=e&&e<20?i.hide():20<=e&&e<30&&be(".fr-image-deleting").removeClass("fr-image-deleting"),s.events.trigger("imageManager.error",[{code:e,message:n[e]},t])}function k(){var e=d.find(".fr-modal-head-line").outerHeight(),t=c.outerHeight();d.toggleClass("fr-show-tags"),d.hasClass("fr-show-tags")?(d.css("height",e+t),c.find("a").css("opacity",1)):(d.css("height",e),c.find("a").css("opacity",0))}function F(){var e=c.find(".fr-selected-tag");0<e.length?(a.find("img").parent().show(),e.each(function(e,r){a.find("img").each(function(e,t){var n=be(t);$(n,r.text)||n.parent().hide()})})):a.find("img").parent().show(),x(L()),y()}function M(e){e.preventDefault();var t=be(e.currentTarget);t.toggleClass("fr-selected-tag"),s.opts.imageManagerToggleTags&&t.siblings("a").removeClass("fr-selected-tag"),F()}function $(e,t){for(var n=(e.attr("data-tag")||"").split(","),r=0;r<n.length;r++)if(n[r]==t)return!0;return!1}return n[e]="Image cannot be loaded from the passed link.",n[m]="Error during load images request.",n[v]="Missing imageManagerLoadURL option.",n[E]="Parsing load response failed.",n[b]="Missing image thumb.",n[T]="Missing image URL.",n[A]="Error during delete image request.",n[C]="Missing imageManagerDeleteURL option.",{require:["image"],_init:function(){if(!s.$wp&&"IMG"!=s.el.tagName)return!1},show:function(){if(!l){var e,t='<div class="fr-modal-head-line"><i class="fa fa-bars fr-modal-more fr-not-available" id="fr-modal-more-'+s.sid+'" title="'+s.language.translate("Tags")+'"></i><h4 data-text="true">'+s.language.translate("Manage Images")+"</h4></div>";t+='<div class="fr-modal-tags" id="fr-modal-tags"></div>',e=s.opts.imageManagerPreloader?'<img class="fr-preloader" id="fr-preloader" alt="'+s.language.translate("Loading")+'.." src="'+s.opts.imageManagerPreloader+'" style="display: none;">':'<span class="fr-preloader" id="fr-preloader" style="display: none;">'+s.language.translate("Loading")+"</span>",e+='<div class="fr-image-list" id="fr-image-list"></div>';var n=s.modals.create(g,t,e);l=n.$modal,d=n.$head,r=n.$body}l.data("current-image",s.image.get()),s.modals.show(g),i||(i=l.find("#fr-preloader"),a=l.find("#fr-image-list"),c=l.find("#fr-modal-tags"),h=S(),R(),d.css("height",d.find(".fr-modal-head-line").outerHeight()),s.events.$on(be(s.o_win),"resize",function(){N(!!o)}),s.helpers.isMobile()&&(s.events.bindClick(a,"div.fr-image-container",function(e){l.find(".fr-mobile-selected").removeClass("fr-mobile-selected"),be(e.currentTarget).addClass("fr-mobile-selected")}),l.on(s._mousedown,function(){l.find(".fr-mobile-selected").removeClass("fr-mobile-selected")})),s.events.bindClick(a,".fr-insert-img",O),s.events.bindClick(a,".fr-delete-img",I),l.on(s._mousedown+" "+s._mouseup,function(e){e.stopPropagation()}),l.on(s._mousedown,"*",function(){s.events.disableBlur()}),r.on("scroll",y),s.events.bindClick(l,"i#fr-modal-more-"+s.sid,k),s.events.bindClick(c,"a",M)),i.show(),a.find(".fr-list-column").empty(),s.opts.imageManagerLoadURL?be.ajax({url:s.opts.imageManagerLoadURL,method:s.opts.imageManagerLoadMethod,data:s.opts.imageManagerLoadParams,dataType:"json",crossDomain:s.opts.requestWithCORS,xhrFields:{withCredentials:s.opts.requestWithCredentials},headers:s.opts.requestHeaders}).done(function(e,t,n){s.events.trigger("imageManager.imagesLoaded",[e]),function(e,t){try{a.find(".fr-list-column").empty(),u=p=f=0,o=e,y()}catch(n){D(E,t)}}(e,n.response),i.hide()}).fail(function(){var e=this.xhr();D(m,e.response||e.responseText)}):D(v)},hide:function(){s.modals.hide(g)}}},!be.FE.PLUGINS.image)throw new Error("Image manager plugin requires image plugin.");be.FE.DEFAULTS.imageInsertButtons.push("imageManager"),be.FE.RegisterCommand("imageManager",{title:"Browse",undo:!1,focus:!1,modal:!0,callback:function(){this.imageManager.show()},plugin:"imageManager"}),be.FE.DefineIcon("imageManager",{NAME:"folder"}),be.FE.DefineIcon("imageManagerInsert",{NAME:"plus"}),be.FE.DefineIcon("imageManagerDelete",{NAME:"trash"}),be.extend(be.FE.DEFAULTS,{inlineStyles:{"Big Red":"font-size: 20px; color: red;","Small Blue":"font-size: 14px; color: blue;"}}),be.FE.PLUGINS.inlineStyle=function(i){return{apply:function(e){if(""!==i.selection.text())for(var t=e.split(";"),n=0;n<t.length;n++){var r=t[n].split(":");t[n].length&&2==r.length&&i.format.applyStyle(r[0].trim(),r[1].trim())}else i.html.insert('<span style="'+e+'">'+be.FE.INVISIBLE_SPACE+be.FE.MARKERS+"</span>")}}},be.FE.RegisterCommand("inlineStyle",{type:"dropdown",html:function(){var e='<ul class="fr-dropdown-list" role="presentation">',t=this.opts.inlineStyles;for(var n in t)t.hasOwnProperty(n)&&(e+='<li role="presentation"><span style="'+t[n]+'" role="presentation"><a class="fr-command" tabIndex="-1" role="option" data-cmd="inlineStyle" data-param1="'+t[n]+'" title="'+this.language.translate(n)+'">'+this.language.translate(n)+"</a></span></li>");return e+="</ul>"},title:"Inline Style",callback:function(e,t){this.inlineStyle.apply(t)},plugin:"inlineStyle"}),be.FE.DefineIcon("inlineStyle",{NAME:"paint-brush"}),be.extend(be.FE.DEFAULTS,{lineBreakerTags:["table","hr","form","dl","span.fr-video",".fr-embedly"],lineBreakerOffset:15,lineBreakerHorizontalOffset:10}),be.FE.PLUGINS.lineBreaker=function(p){var u,t,i;function s(e,t){var n,r,i,a,o,s,l,d;if(null==e)o=(a=t.parent()).offset().top,n=(l=t.offset().top)-Math.min((l-o)/2,p.opts.lineBreakerOffset),i=a.outerWidth(),r=a.offset().left;else if(null==t)(s=(a=e.parent()).offset().top+a.outerHeight())<(d=e.offset().top+e.outerHeight())&&(s=(a=be(a).parent()).offset().top+a.outerHeight()),n=d+Math.min(Math.abs(s-d)/2,p.opts.lineBreakerOffset),i=a.outerWidth(),r=a.offset().left;else{a=e.parent();var c=e.offset().top+e.height(),f=t.offset().top;if(f<c)return!1;n=(c+f)/2,i=a.outerWidth(),r=a.offset().left}p.opts.iframe&&(r+=p.$iframe.offset().left-p.helpers.scrollLeft(),n+=p.$iframe.offset().top-p.helpers.scrollTop()),p.$box.append(u),u.css("top",n-p.win.pageYOffset),u.css("left",r-p.win.pageXOffset),u.css("width",i),u.data("tag1",e),u.data("tag2",t),u.addClass("fr-visible").data("instance",p)}function l(e){if(e){var t=be(e);if(0===p.$el.find(t).length)return null;if(e.nodeType!=Node.TEXT_NODE&&t.is(p.opts.lineBreakerTags.join(",")))return t;if(0<t.parents(p.opts.lineBreakerTags.join(",")).length)return e=t.parents(p.opts.lineBreakerTags.join(",")).get(0),0!==p.$el.find(e).length&&be(e).is(p.opts.lineBreakerTags.join(","))?be(e):null}return null}function a(e,t){var n=p.doc.elementFromPoint(e,t);return n&&!be(n).closest(".fr-line-breaker").length&&!p.node.isElement(n)&&n!=p.$wp.get(0)&&function(e){if("undefined"!=typeof e.inFroalaWrapper)return e.inFroalaWrapper;for(var t=e;e.parentNode&&e.parentNode!==p.$wp.get(0);)e=e.parentNode;return t.inFroalaWrapper=e.parentNode==p.$wp.get(0),t.inFroalaWrapper}(n)?n:null}function o(e,t,n){for(var r=n,i=null;r<=p.opts.lineBreakerOffset&&!i;)(i=a(e,t-r))||(i=a(e,t+r)),r+=n;return i}function d(e,t,n){for(var r=null,i=100;!r&&e>p.$box.offset().left&&e<p.$box.offset().left+p.$box.outerWidth()&&0<i;)(r=a(e,t))||(r=o(e,t,5)),"left"==n?e-=p.opts.lineBreakerHorizontalOffset:e+=p.opts.lineBreakerHorizontalOffset,i-=p.opts.lineBreakerHorizontalOffset;return r}function n(e){var t=i=null,n=null,r=p.doc.elementFromPoint(e.pageX-p.win.pageXOffset,e.pageY-p.win.pageYOffset);r&&("HTML"==r.tagName||"BODY"==r.tagName||p.node.isElement(r)||0<=(r.getAttribute("class")||"").indexOf("fr-line-breaker"))?((n=o(e.pageX-p.win.pageXOffset,e.pageY-p.win.pageYOffset,1))||(n=d(e.pageX-p.win.pageXOffset-p.opts.lineBreakerHorizontalOffset,e.pageY-p.win.pageYOffset,"left")),n||(n=d(e.pageX-p.win.pageXOffset+p.opts.lineBreakerHorizontalOffset,e.pageY-p.win.pageYOffset,"right")),t=l(n)):t=l(r),t?function(e,t){var n,r,i=e.offset().top,a=e.offset().top+e.outerHeight();if(Math.abs(a-t)<=p.opts.lineBreakerOffset||Math.abs(t-i)<=p.opts.lineBreakerOffset)if(Math.abs(a-t)<Math.abs(t-i)){for(var o=(r=e.get(0)).nextSibling;o&&o.nodeType==Node.TEXT_NODE&&0===o.textContent.length;)o=o.nextSibling;if(!o)return s(e,null);if(n=l(o))return s(e,n)}else{if(!(r=e.get(0)).previousSibling)return s(null,e);if(n=l(r.previousSibling))return s(n,e)}u.removeClass("fr-visible").removeData("instance")}(t,e.pageY):p.core.sameInstance(u)&&u.removeClass("fr-visible").removeData("instance")}function e(e){return!(u.hasClass("fr-visible")&&!p.core.sameInstance(u))&&(p.popups.areVisible()||p.el.querySelector(".fr-selected-cell")?(u.removeClass("fr-visible"),!0):void(!1!==t||p.edit.isDisabled()||(i&&clearTimeout(i),i=setTimeout(n,30,e))))}function r(){i&&clearTimeout(i),u.hasClass("fr-visible")&&u.removeClass("fr-visible").removeData("instance")}function c(){t=!0,r()}function f(){t=!1}function h(e){e.preventDefault();var t=u.data("instance")||p;u.removeClass("fr-visible").removeData("instance");var n=u.data("tag1"),r=u.data("tag2"),i=p.html.defaultTag();null==n?i&&"TD"!=r.parent().get(0).tagName&&0===r.parents(i).length?r.before("<"+i+">"+be.FE.MARKERS+"<br></"+i+">"):r.before(be.FE.MARKERS+"<br>"):i&&"TD"!=n.parent().get(0).tagName&&0===n.parents(i).length?n.after("<"+i+">"+be.FE.MARKERS+"<br></"+i+">"):n.after(be.FE.MARKERS+"<br>"),t.selection.restore()}return{_init:function(){if(!p.$wp)return!1;p.shared.$line_breaker||(p.shared.$line_breaker=be('<div class="fr-line-breaker"><a class="fr-floating-btn" role="button" tabIndex="-1" title="'+p.language.translate("Break")+'"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><rect x="21" y="11" width="2" height="8"/><rect x="14" y="17" width="7" height="2"/><path d="M14.000,14.000 L14.000,22.013 L9.000,18.031 L14.000,14.000 Z"/></svg></a></div>')),u=p.shared.$line_breaker,p.events.on("shared.destroy",function(){u.html("").removeData().remove(),u=null},!0),p.events.on("destroy",function(){u.removeData("instance").removeClass("fr-visible").appendTo("body:first"),clearTimeout(i)},!0),p.events.$on(u,"mousemove",function(e){e.stopPropagation()},!0),p.events.bindClick(u,"a",h),t=!1,p.events.$on(p.$win,"mousemove",e),p.events.$on(be(p.win),"scroll",r),p.events.on("popups.show.table.edit",r),p.events.on("commands.after",r),p.events.$on(be(p.win),"mousedown",c),p.events.$on(be(p.win),"mouseup",f)}}},be.extend(be.FE.POPUP_TEMPLATES,{"link.edit":"[_BUTTONS_]","link.insert":"[_BUTTONS_][_INPUT_LAYER_]"}),be.extend(be.FE.DEFAULTS,{linkEditButtons:["linkOpen","linkStyle","linkEdit","linkRemove"],linkInsertButtons:["linkBack","|","linkList"],linkAttributes:{},linkAutoPrefix:"http://",linkStyles:{"fr-green":"Green","fr-strong":"Thick"},linkMultipleStyles:!0,linkConvertEmailAddress:!0,linkAlwaysBlank:!1,linkAlwaysNoFollow:!1,linkNoOpener:!0,linkNoReferrer:!0,linkList:[{text:"Froala",href:"https://froala.com",target:"_blank"},{text:"Google",href:"https://google.com",target:"_blank"},{displayText:"Facebook",href:"https://facebook.com"}],linkText:!0}),be.FE.PLUGINS.link=function(f){function p(){var e=f.image?f.image.get():null;if(!e&&f.$wp){var t=f.selection.ranges(0).commonAncestorContainer;try{t&&(t.contains&&t.contains(f.el)||!f.el.contains(t)||f.el==t)&&(t=null)}catch(i){t=null}if(t&&"A"===t.tagName)return t;var n=f.selection.element(),r=f.selection.endElement();"A"==n.tagName||f.node.isElement(n)||(n=be(n).parentsUntil(f.$el,"a:first").get(0)),"A"==r.tagName||f.node.isElement(r)||(r=be(r).parentsUntil(f.$el,"a:first").get(0));try{r&&(r.contains&&r.contains(f.el)||!f.el.contains(r)||f.el==r)&&(r=null)}catch(i){r=null}try{n&&(n.contains&&n.contains(f.el)||!f.el.contains(n)||f.el==n)&&(n=null)}catch(i){n=null}return r&&r==n&&"A"==r.tagName?(f.browser.msie||f.helpers.isMobile())&&(f.selection.info(n).atEnd||f.selection.info(n).atStart)?null:n:null}return"A"==f.el.tagName?f.el:e&&e.get(0).parentNode&&"A"==e.get(0).parentNode.tagName?e.get(0).parentNode:void 0}function u(){var e,t,n,r,i=f.image?f.image.get():null,a=[];if(i)"A"==i.get(0).parentNode.tagName&&a.push(i.get(0).parentNode);else if(f.win.getSelection){var o=f.win.getSelection();if(o.getRangeAt&&o.rangeCount){r=f.doc.createRange();for(var s=0;s<o.rangeCount;++s)if((t=(e=o.getRangeAt(s)).commonAncestorContainer)&&1!=t.nodeType&&(t=t.parentNode),t&&"a"==t.nodeName.toLowerCase())a.push(t);else{n=t.getElementsByTagName("a");for(var l=0;l<n.length;++l)r.selectNodeContents(n[l]),r.compareBoundaryPoints(e.END_TO_START,e)<1&&-1<r.compareBoundaryPoints(e.START_TO_END,e)&&a.push(n[l])}}}else if(f.doc.selection&&"Control"!=f.doc.selection.type)if("a"==(t=(e=f.doc.selection.createRange()).parentElement()).nodeName.toLowerCase())a.push(t);else{n=t.getElementsByTagName("a"),r=f.doc.body.createTextRange();for(var d=0;d<n.length;++d)r.moveToElementText(n[d]),-1<r.compareEndPoints("StartToEnd",e)&&r.compareEndPoints("EndToStart",e)<1&&a.push(n[d])}return a}function h(i){if(f.core.hasFocus()){if(o(),i&&"keyup"===i.type&&(i.altKey||i.which==be.FE.KEYCODE.ALT))return!0;setTimeout(function(){if(!i||i&&(1==i.which||"mouseup"!=i.type)){var e=p(),t=f.image?f.image.get():null;if(e&&!t){if(f.image){var n=f.node.contents(e);if(1==n.length&&"IMG"==n[0].tagName){var r=f.selection.ranges(0);return 0===r.startOffset&&0===r.endOffset?be(e).before(be.FE.MARKERS):be(e).after(be.FE.MARKERS),f.selection.restore(),!1}}i&&i.stopPropagation(),a(e)}}},f.helpers.isIOS()?100:0)}}function a(e){var t=f.popups.get("link.edit");t||(t=function(){var e="";1<=f.opts.linkEditButtons.length&&("A"==f.el.tagName&&0<=f.opts.linkEditButtons.indexOf("linkRemove")&&f.opts.linkEditButtons.splice(f.opts.linkEditButtons.indexOf("linkRemove"),1),e='<div class="fr-buttons">'+f.button.buildList(f.opts.linkEditButtons)+"</div>");var t={buttons:e},n=f.popups.create("link.edit",t);f.$wp&&f.events.$on(f.$wp,"scroll.link-edit",function(){p()&&f.popups.isVisible("link.edit")&&a(p())});return n}());var n=be(e);f.popups.isVisible("link.edit")||f.popups.refresh("link.edit"),f.popups.setContainer("link.edit",f.$sc);var r=n.offset().left+be(e).outerWidth()/2,i=n.offset().top+n.outerHeight();f.popups.show("link.edit",r,i,n.outerHeight())}function o(){f.popups.hide("link.edit")}function l(){}function d(){var e=f.popups.get("link.insert"),t=p();if(t){var n,r,i=be(t),a=e.find('input.fr-link-attr[type="text"]'),o=e.find('input.fr-link-attr[type="checkbox"]');for(n=0;n<a.length;n++)(r=be(a[n])).val(i.attr(r.attr("name")||""));for(o.prop("checked",!1),n=0;n<o.length;n++)r=be(o[n]),i.attr(r.attr("name"))==r.data("checked")&&r.prop("checked",!0);e.find('input.fr-link-attr[type="text"][name="text"]').val(i.text())}else e.find('input.fr-link-attr[type="text"]').val(""),e.find('input.fr-link-attr[type="checkbox"]').prop("checked",!1),e.find('input.fr-link-attr[type="text"][name="text"]').val(f.selection.text());e.find("input.fr-link-attr").trigger("change"),(f.image?f.image.get():null)?e.find('.fr-link-attr[name="text"]').parent().hide():e.find('.fr-link-attr[name="text"]').parent().show()}function s(e){if(e)return f.popups.onRefresh("link.insert",d),f.popups.onHide("link.insert",l),!0;var t="";1<=f.opts.linkInsertButtons.length&&(t='<div class="fr-buttons">'+f.button.buildList(f.opts.linkInsertButtons)+"</div>");var n="",r=0;for(var i in n='<div class="fr-link-insert-layer fr-layer fr-active" id="fr-link-insert-layer-'+f.id+'">',n+='<div class="fr-input-line"><input id="fr-link-insert-layer-url-'+f.id+'" name="href" type="text" class="fr-link-attr" placeholder="'+f.language.translate("URL")+'" tabIndex="'+ ++r+'"></div>',f.opts.linkText&&(n+='<div class="fr-input-line"><input id="fr-link-insert-layer-text-'+f.id+'" name="text" type="text" class="fr-link-attr" placeholder="'+f.language.translate("Text")+'" tabIndex="'+ ++r+'"></div>'),f.opts.linkAttributes)if(f.opts.linkAttributes.hasOwnProperty(i)){var a=f.opts.linkAttributes[i];n+='<div class="fr-input-line"><input name="'+i+'" type="text" class="fr-link-attr" placeholder="'+f.language.translate(a)+'" tabIndex="'+ ++r+'"></div>'}f.opts.linkAlwaysBlank||(n+='<div class="fr-checkbox-line"><span class="fr-checkbox"><input name="target" class="fr-link-attr" data-checked="_blank" type="checkbox" id="fr-link-target-'+f.id+'" tabIndex="'+ ++r+'"><span><svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="10" height="10" viewBox="0 0 32 32"><path d="M27 4l-15 15-7-7-5 5 12 12 20-20z" fill="#FFF"></path></svg></span></span><label for="fr-link-target-'+f.id+'">'+f.language.translate("Open in new tab")+"</label></div>");var o={buttons:t,input_layer:n+='<div class="fr-action-buttons"><button class="fr-command fr-submit" role="button" data-cmd="linkInsert" href="#" tabIndex="'+ ++r+'" type="button">'+f.language.translate("Insert")+"</button></div></div>"},s=f.popups.create("link.insert",o);return f.$wp&&f.events.$on(f.$wp,"scroll.link-insert",function(){(f.image?f.image.get():null)&&f.popups.isVisible("link.insert")&&m(),f.popups.isVisible("link.insert")&&g()}),s}function c(e,t,n){if(void 0===n&&(n={}),!1===f.events.trigger("link.beforeInsert",[e,t,n]))return!1;var r=f.image?f.image.get():null;r||"A"==f.el.tagName?"A"==f.el.tagName&&f.$el.focus():(f.selection.restore(),f.popups.hide("link.insert"));var i=e;f.opts.linkConvertEmailAddress&&f.helpers.isEmail(e)&&!/^mailto:.*/i.test(e)&&(e="mailto:"+e);if(""===f.opts.linkAutoPrefix||new RegExp("^("+be.FE.LinkProtocols.join("|")+"):.","i").test(e)||/^data:image.*/i.test(e)||/^(https?:|ftps?:|file:|)\/\//i.test(e)||/^([A-Za-z]:(\\){1,2}|[A-Za-z]:((\\){1,2}[^\\]+)+)(\\)?$/i.test(e)||["/","{","[","#","(","."].indexOf((e||"")[0])<0&&(e=f.opts.linkAutoPrefix+f.helpers.sanitizeURL(e)),e=f.helpers.sanitizeURL(e),f.opts.linkAlwaysBlank&&(n.target="_blank"),f.opts.linkAlwaysNoFollow&&(n.rel="nofollow"),"_blank"==n.target?(f.opts.linkNoOpener&&(n.rel?n.rel+=" noopener":n.rel="noopener"),f.opts.linkNoReferrer&&(n.rel?n.rel+=" noreferrer":n.rel="noreferrer")):null==n.target&&(n.rel?n.rel=n.rel.replace(/noopener/,"").replace(/noreferrer/,""):n.rel=null),t=t||"",e===f.opts.linkAutoPrefix)return f.popups.get("link.insert").find('input[name="href"]').addClass("fr-error"),f.events.trigger("link.bad",[i]),!1;var a,o=p();if(o){if((a=be(o)).attr("href",e),0<t.length&&a.text()!=t&&!r){for(var s=a.get(0);1===s.childNodes.length&&s.childNodes[0].nodeType==Node.ELEMENT_NODE;)s=s.childNodes[0];be(s).text(t)}r||a.prepend(be.FE.START_MARKER).append(be.FE.END_MARKER),a.attr(n),r||f.selection.restore()}else{r?r.wrap('<a href="'+e+'"></a>'):(f.format.remove("a"),f.selection.isCollapsed()?(t=0===t.length?i:t,f.html.insert('<a href="'+e+'">'+be.FE.START_MARKER+t.replace(/&/g,"&amp;")+be.FE.END_MARKER+"</a>"),f.selection.restore()):0<t.length&&t!=f.selection.text().replace(/\n/g,"")?(f.selection.remove(),f.html.insert('<a href="'+e+'">'+be.FE.START_MARKER+t.replace(/&/g,"&amp;")+be.FE.END_MARKER+"</a>"),f.selection.restore()):(!function(){if(!f.selection.isCollapsed()){f.selection.save();for(var e=f.$el.find(".fr-marker").addClass("fr-unprocessed").toArray();e.length;){var t=be(e.pop());t.removeClass("fr-unprocessed");var n=f.node.deepestParent(t.get(0));if(n){for(var r=t.get(0),i="",a="";r=r.parentNode,f.node.isBlock(r)||(i+=f.node.closeTagString(r),a=f.node.openTagString(r)+a),r!=n;);var o=f.node.openTagString(t.get(0))+t.html()+f.node.closeTagString(t.get(0));t.replaceWith('<span id="fr-break"></span>');var s=n.outerHTML;s=s.replace(/<span id="fr-break"><\/span>/g,i+o+a),n.outerHTML=s}e=f.$el.find(".fr-marker.fr-unprocessed").toArray()}f.html.cleanEmptyTags(),f.selection.restore()}}(),f.format.apply("a",{href:e})));for(var l=u(),d=0;d<l.length;d++)(a=be(l[d])).attr(n),a.removeAttr("_moz_dirty");1==l.length&&f.$wp&&!r&&(be(l[0]).prepend(be.FE.START_MARKER).append(be.FE.END_MARKER),f.selection.restore())}if(r){var c=f.popups.get("link.insert");c&&c.find("input:focus").blur(),f.image.edit(r)}else h()}function g(){o();var e=p();if(e){var t=f.popups.get("link.insert");t||(t=s()),f.popups.isVisible("link.insert")||(f.popups.refresh("link.insert"),f.selection.save(),f.helpers.isMobile()&&(f.events.disableBlur(),f.$el.blur(),f.events.enableBlur())),f.popups.setContainer("link.insert",f.$sc);var n=(f.image?f.image.get():null)||be(e),r=n.offset().left+n.outerWidth()/2,i=n.offset().top+n.outerHeight();f.popups.show("link.insert",r,i,n.outerHeight())}}function m(){var e=f.image?f.image.getEl():null;if(e){var t=f.popups.get("link.insert");f.image.hasCaption()&&(e=e.find(".fr-img-wrap")),t||(t=s()),d(),f.popups.setContainer("link.insert",f.$sc);var n=e.offset().left+e.outerWidth()/2,r=e.offset().top+e.outerHeight();f.popups.show("link.insert",n,r,e.outerHeight())}}return{_init:function(){f.events.on("keyup",function(e){e.which!=be.FE.KEYCODE.ESC&&h(e)}),f.events.on("window.mouseup",h),f.events.$on(f.$el,"click","a",function(e){f.edit.isDisabled()&&e.preventDefault()}),f.helpers.isMobile()&&f.events.$on(f.$doc,"selectionchange",h),s(!0),"A"==f.el.tagName&&f.$el.addClass("fr-view"),f.events.on("toolbar.esc",function(){if(f.popups.isVisible("link.edit"))return f.events.disableBlur(),f.events.focus(),!1},!0)},remove:function(){var e=p(),t=f.image?f.image.get():null;if(!1===f.events.trigger("link.beforeRemove",[e]))return!1;t&&e?(t.unwrap(),f.image.edit(t)):e&&(f.selection.save(),be(e).replaceWith(be(e).html()),f.selection.restore(),o())},showInsertPopup:function(){var e=f.$tb.find('.fr-command[data-cmd="insertLink"]'),t=f.popups.get("link.insert");if(t||(t=s()),!t.hasClass("fr-active"))if(f.popups.refresh("link.insert"),f.popups.setContainer("link.insert",f.$tb||f.$sc),e.is(":visible")){var n=e.offset().left+e.outerWidth()/2,r=e.offset().top+(f.opts.toolbarBottom?10:e.outerHeight()-10);f.popups.show("link.insert",n,r,e.outerHeight())}else f.position.forSelection(t),f.popups.show("link.insert")},usePredefined:function(e){var t,n,r=f.opts.linkList[e],i=f.popups.get("link.insert"),a=i.find('input.fr-link-attr[type="text"]'),o=i.find('input.fr-link-attr[type="checkbox"]');for(n=0;n<a.length;n++)r[(t=be(a[n])).attr("name")]?t.val(r[t.attr("name")]):"text"!=t.attr("name")&&t.val("");for(n=0;n<o.length;n++)(t=be(o[n])).prop("checked",t.data("checked")==r[t.attr("name")]);f.accessibility.focusPopup(i)},insertCallback:function(){var e,t,n=f.popups.get("link.insert"),r=n.find('input.fr-link-attr[type="text"]'),i=n.find('input.fr-link-attr[type="checkbox"]'),a=(r.filter('[name="href"]').val()||"").trim(),o=r.filter('[name="text"]').val(),s={};for(t=0;t<r.length;t++)e=be(r[t]),["href","text"].indexOf(e.attr("name"))<0&&(s[e.attr("name")]=e.val());for(t=0;t<i.length;t++)(e=be(i[t])).is(":checked")?s[e.attr("name")]=e.data("checked"):s[e.attr("name")]=e.data("unchecked")||null;var l=f.helpers.scrollTop();c(a,o,s),be(f.o_win).scrollTop(l)},insert:c,update:g,get:p,allSelected:u,back:function(){f.image&&f.image.get()?f.image.back():(f.events.disableBlur(),f.selection.restore(),f.events.enableBlur(),p()&&f.$wp?(f.selection.restore(),o(),h()):"A"==f.el.tagName?(f.$el.focus(),h()):(f.popups.hide("link.insert"),f.toolbar.showInline()))},imageLink:m,applyStyle:function(e,t,n){void 0===n&&(n=f.opts.linkMultipleStyles),void 0===t&&(t=f.opts.linkStyles);var r=p();if(!r)return!1;if(!n){var i=Object.keys(t);i.splice(i.indexOf(e),1),be(r).removeClass(i.join(" "))}be(r).toggleClass(e),h()}}},be.FE.DefineIcon("insertLink",{NAME:"link"}),be.FE.RegisterShortcut(be.FE.KEYCODE.K,"insertLink",null,"K"),be.FE.RegisterCommand("insertLink",{title:"Insert Link",undo:!1,focus:!0,refreshOnCallback:!1,popup:!0,callback:function(){this.popups.isVisible("link.insert")?(this.$el.find(".fr-marker").length&&(this.events.disableBlur(),this.selection.restore()),this.popups.hide("link.insert")):this.link.showInsertPopup()},plugin:"link"}),be.FE.DefineIcon("linkOpen",{NAME:"external-link",FA5NAME:"external-link-alt"}),be.FE.RegisterCommand("linkOpen",{title:"Open Link",undo:!1,refresh:function(e){this.link.get()?e.removeClass("fr-hidden"):e.addClass("fr-hidden")},callback:function(){var e=this.link.get();e&&(this.o_win.open(e.href,"_blank","noopener"),this.popups.hide("link.edit"))},plugin:"link"}),be.FE.DefineIcon("linkEdit",{NAME:"edit"}),be.FE.RegisterCommand("linkEdit",{title:"Edit Link",undo:!1,refreshAfterCallback:!1,popup:!0,callback:function(){this.link.update()},refresh:function(e){this.link.get()?e.removeClass("fr-hidden"):e.addClass("fr-hidden")},plugin:"link"}),be.FE.DefineIcon("linkRemove",{NAME:"unlink"}),be.FE.RegisterCommand("linkRemove",{title:"Unlink",callback:function(){this.link.remove()},refresh:function(e){this.link.get()?e.removeClass("fr-hidden"):e.addClass("fr-hidden")},plugin:"link"}),be.FE.DefineIcon("linkBack",{NAME:"arrow-left"}),be.FE.RegisterCommand("linkBack",{title:"Back",undo:!1,focus:!1,back:!0,refreshAfterCallback:!1,callback:function(){this.link.back()},refresh:function(e){var t=this.link.get()&&this.doc.hasFocus();(this.image?this.image.get():null)||t||this.opts.toolbarInline?(e.removeClass("fr-hidden"),e.next(".fr-separator").removeClass("fr-hidden")):(e.addClass("fr-hidden"),e.next(".fr-separator").addClass("fr-hidden"))},plugin:"link"}),be.FE.DefineIcon("linkList",{NAME:"search"}),be.FE.RegisterCommand("linkList",{title:"Choose Link",type:"dropdown",focus:!1,undo:!1,refreshAfterCallback:!1,html:function(){for(var e='<ul class="fr-dropdown-list" role="presentation">',t=this.opts.linkList,n=0;n<t.length;n++)e+='<li role="presentation"><a class="fr-command" tabIndex="-1" role="option" data-cmd="linkList" data-param1="'+n+'">'+(t[n].displayText||t[n].text)+"</a></li>";return e+="</ul>"},callback:function(e,t){this.link.usePredefined(t)},plugin:"link"}),be.FE.RegisterCommand("linkInsert",{focus:!1,refreshAfterCallback:!1,callback:function(){this.link.insertCallback()},refresh:function(e){this.link.get()?e.text(this.language.translate("Update")):e.text(this.language.translate("Insert"))},plugin:"link"}),be.FE.DefineIcon("imageLink",{NAME:"link"}),be.FE.RegisterCommand("imageLink",{title:"Insert Link",undo:!1,focus:!1,popup:!0,callback:function(){this.link.imageLink()},refresh:function(e){var t;this.link.get()?((t=e.prev()).hasClass("fr-separator")&&t.removeClass("fr-hidden"),e.addClass("fr-hidden")):((t=e.prev()).hasClass("fr-separator")&&t.addClass("fr-hidden"),e.removeClass("fr-hidden"))},plugin:"link"}),be.FE.DefineIcon("linkStyle",{NAME:"magic"}),be.FE.RegisterCommand("linkStyle",{title:"Style",type:"dropdown",html:function(){var e='<ul class="fr-dropdown-list" role="presentation">',t=this.opts.linkStyles;for(var n in t)t.hasOwnProperty(n)&&(e+='<li role="presentation"><a class="fr-command" tabIndex="-1" role="option" data-cmd="linkStyle" data-param1="'+n+'">'+this.language.translate(t[n])+"</a></li>");return e+="</ul>"},callback:function(e,t){this.link.applyStyle(t)},refreshOnShow:function(e,t){var n=this.link.get();if(n){var r=be(n);t.find(".fr-command").each(function(){var e=be(this).data("param1"),t=r.hasClass(e);be(this).toggleClass("fr-active",t).attr("aria-selected",t)})}},refresh:function(e){this.link.get()?e.removeClass("fr-hidden"):e.addClass("fr-hidden")},plugin:"link"}),be.FE.PLUGINS.lists=function(f){function p(e){return'<span class="fr-open-'+e.toLowerCase()+'"></span>'}function u(e){return'<span class="fr-close-'+e.toLowerCase()+'"></span>'}function r(e,t){!function(e,t){for(var n=[],r=0;r<e.length;r++){var i=e[r].parentNode;"LI"==e[r].tagName&&i.tagName!=t&&n.indexOf(i)<0&&n.push(i)}for(r=n.length-1;0<=r;r--){var a=be(n[r]);a.replaceWith("<"+t.toLowerCase()+" "+f.node.attributes(a.get(0))+">"+a.html()+"</"+t.toLowerCase()+">")}}(e,t);var n,r=f.html.defaultTag(),i=null;e.length&&(n="rtl"==f.opts.direction||"rtl"==be(e[0]).css("direction")?"margin-right":"margin-left");for(var a=0;a<e.length;a++)if("LI"!=e[a].tagName){var o=f.helpers.getPX(be(e[a]).css(n))||0;(e[a].style.marginLeft=null)===i&&(i=o);var s=0<i?"<"+t+' style="'+n+": "+i+'px;">':"<"+t+">",l="</"+t+">";for(o-=i;0<o/f.opts.indentMargin;)s+="<"+t+">",l+=l,o-=f.opts.indentMargin;r&&e[a].tagName.toLowerCase()==r?be(e[a]).replaceWith(s+"<li"+f.node.attributes(e[a])+">"+be(e[a]).html()+"</li>"+l):be(e[a]).wrap(s+"<li></li>"+l)}f.clean.lists()}function i(e){var t,n;for(t=e.length-1;0<=t;t--)for(n=t-1;0<=n;n--)if(be(e[n]).find(e[t]).length||e[n]==e[t]){e.splice(t,1);break}var r=[];for(t=0;t<e.length;t++){var i=be(e[t]),a=e[t].parentNode,o=i.attr("class");if(i.before(u(a.tagName)),"LI"==a.parentNode.tagName)i.before(u("LI")),i.after(p("LI"));else{var s="";o&&(s+=' class="'+o+'"');var l="rtl"==f.opts.direction||"rtl"==i.css("direction")?"margin-right":"margin-left";f.helpers.getPX(be(a).css(l))&&0<=(be(a).attr("style")||"").indexOf(l+":")&&(s+=' style="'+l+":"+f.helpers.getPX(be(a).css(l))+'px;"'),f.html.defaultTag()&&0===i.find(f.html.blockTagsQuery()).length&&i.wrapInner("<"+f.html.defaultTag()+s+"></"+f.html.defaultTag()+">"),f.node.isEmpty(i.get(0),!0)||0!==i.find(f.html.blockTagsQuery()).length||i.append("<br>"),i.append(p("LI")),i.prepend(u("LI"))}i.after(p(a.tagName)),"LI"==a.parentNode.tagName&&(a=a.parentNode.parentNode),r.indexOf(a)<0&&r.push(a)}for(t=0;t<r.length;t++){var d=be(r[t]),c=d.html();c=(c=c.replace(/<span class="fr-close-([a-z]*)"><\/span>/g,"</$1>")).replace(/<span class="fr-open-([a-z]*)"><\/span>/g,"<$1>"),d.replaceWith(f.node.openTagString(d.get(0))+c+f.node.closeTagString(d.get(0)))}f.$el.find("li:empty").remove(),f.$el.find("ul:empty, ol:empty").remove(),f.clean.lists(),f.html.wrap()}function a(e){f.selection.save();for(var t=0;t<e.length;t++){var n=e[t].previousSibling;if(n){var r=be(e[t]).find("> ul, > ol").last().get(0);if(r){for(var i=be("<li>").prependTo(be(r)),a=f.node.contents(e[t])[0];a&&!f.node.isList(a);){var o=a.nextSibling;i.append(a),a=o}be(n).append(be(r)),be(e[t]).remove()}else{var s=be(n).find("> ul, > ol").last().get(0);if(s)be(s).append(be(e[t]));else{var l=be("<"+e[t].parentNode.tagName+">");be(n).append(l),l.append(be(e[t]))}}}}f.clean.lists(),f.selection.restore()}function o(e){f.selection.save(),i(e),f.selection.restore()}function e(e){if("indent"==e||"outdent"==e){for(var t=!1,n=f.selection.blocks(),r=[],i=0;i<n.length;i++)"LI"==n[i].tagName?(t=!0,r.push(n[i])):"LI"==n[i].parentNode.tagName&&(t=!0,r.push(n[i].parentNode));t&&("indent"==e?a(r):o(r))}}return{_init:function(){f.events.on("commands.after",e),f.events.on("keydown",function(e){if(e.which==be.FE.KEYCODE.TAB){for(var t=f.selection.blocks(),n=[],r=0;r<t.length;r++)"LI"==t[r].tagName?n.push(t[r]):"LI"==t[r].parentNode.tagName&&n.push(t[r].parentNode);if(1<n.length||n.length&&(f.selection.info(n[0]).atStart||f.node.isEmpty(n[0])))return e.preventDefault(),e.stopPropagation(),e.shiftKey?o(n):a(n),!1}},!0)},format:function(e){f.selection.save(),f.html.wrap(!0,!0,!0,!0),f.selection.restore();for(var t=f.selection.blocks(),n=0;n<t.length;n++)"LI"!=t[n].tagName&&"LI"==t[n].parentNode.tagName&&(t[n]=t[n].parentNode);f.selection.save(),function(e,t){for(var n=!0,r=0;r<e.length;r++){if("LI"!=e[r].tagName)return!1;e[r].parentNode.tagName!=t&&(n=!1)}return n}(t,e)?i(t):r(t,e),f.html.unwrap(),f.selection.restore()},refresh:function(e,t){var n=be(f.selection.element());if(n.get(0)!=f.el){var r=n.get(0);(r="LI"!=r.tagName&&r.firstElementChild&&"LI"!=r.firstElementChild.tagName?n.parents("li").get(0):"LI"==r.tagName||r.firstElementChild?r.firstElementChild&&"LI"==r.firstElementChild.tagName?n.get(0).firstChild:n.get(0):n.parents("li").get(0))&&r.parentNode.tagName==t&&f.el.contains(r.parentNode)&&e.addClass("fr-active")}}}},be.FE.RegisterCommand("formatUL",{title:"Unordered List",refresh:function(e){this.lists.refresh(e,"UL")},callback:function(){this.lists.format("UL")},plugin:"lists"}),be.FE.RegisterCommand("formatOL",{title:"Ordered List",refresh:function(e){this.lists.refresh(e,"OL")},callback:function(){this.lists.format("OL")},plugin:"lists"}),be.FE.DefineIcon("formatUL",{NAME:"list-ul"}),be.FE.DefineIcon("formatOL",{NAME:"list-ol"}),be.extend(be.FE.DEFAULTS,{paragraphFormat:{N:"Normal",H1:"Heading 1",H2:"Heading 2",H3:"Heading 3",H4:"Heading 4",PRE:"Code"},paragraphFormatSelection:!1,paragraphDefaultSelection:"Paragraph Format"}),be.FE.PLUGINS.paragraphFormat=function(p){function u(e,t){var n=p.html.defaultTag();if(t&&t.toLowerCase()!=n)if(0<e.find("ul, ol").length){var r=be("<"+t+">");e.prepend(r);for(var i=p.node.contents(e.get(0))[0];i&&["UL","OL"].indexOf(i.tagName)<0;){var a=i.nextSibling;r.append(i),i=a}}else e.html("<"+t+">"+e.html()+"</"+t+">")}return{apply:function(e){"N"==e&&(e=p.html.defaultTag()),p.selection.save(),p.html.wrap(!0,!0,!p.opts.paragraphFormat.BLOCKQUOTE,!0,!0),p.selection.restore();var t,n,r,i,a,o,s,l,d=p.selection.blocks();p.selection.save(),p.$el.find("pre").attr("skip",!0);for(var c=0;c<d.length;c++)if(d[c].tagName!=e&&!p.node.isList(d[c])){var f=be(d[c]);"LI"==d[c].tagName?u(f,e):"LI"==d[c].parentNode.tagName&&d[c]?(o=f,s=e,l=p.html.defaultTag(),s&&s.toLowerCase()!=l||(s='div class="fr-temp-div"'),o.replaceWith(be("<"+s+">").html(o.html()))):0<=["TD","TH"].indexOf(d[c].parentNode.tagName)?(r=f,i=e,a=p.html.defaultTag(),i||(i='div class="fr-temp-div"'+(p.node.isEmpty(r.get(0),!0)?' data-empty="true"':"")),i.toLowerCase()==a?(p.node.isEmpty(r.get(0),!0)||r.append("<br/>"),r.replaceWith(r.html())):r.replaceWith(be("<"+i+">").html(r.html()))):(t=f,(n=e)||(n='div class="fr-temp-div"'+(p.node.isEmpty(t.get(0),!0)?' data-empty="true"':"")),t.replaceWith(be("<"+n+" "+p.node.attributes(t.get(0))+">").html(t.html()).removeAttr("data-empty")))}p.$el.find('pre:not([skip="true"]) + pre:not([skip="true"])').each(function(){be(this).prev().append("<br>"+be(this).html()),be(this).remove()}),p.$el.find("pre").removeAttr("skip"),p.html.unwrap(),p.selection.restore()},refreshOnShow:function(e,t){var n=p.selection.blocks();if(n.length){var r=n[0],i="N",a=p.html.defaultTag();r.tagName.toLowerCase()!=a&&r!=p.el&&(i=r.tagName),t.find('.fr-command[data-param1="'+i+'"]').addClass("fr-active").attr("aria-selected",!0)}else t.find('.fr-command[data-param1="N"]').addClass("fr-active").attr("aria-selected",!0)},refresh:function(e){if(p.opts.paragraphFormatSelection){var t=p.selection.blocks();if(t.length){var n=t[0],r="N",i=p.html.defaultTag();n.tagName.toLowerCase()!=i&&n!=p.el&&(r=n.tagName),0<=["LI","TD","TH"].indexOf(r)&&(r="N"),e.find("> span").text(p.language.translate(p.opts.paragraphFormat[r]))}else e.find("> span").text(p.language.translate(p.opts.paragraphFormat.N))}}}},be.FE.RegisterCommand("paragraphFormat",{type:"dropdown",displaySelection:function(e){return e.opts.paragraphFormatSelection},defaultSelection:function(e){return e.language.translate(e.opts.paragraphDefaultSelection)},displaySelectionWidth:125,html:function(){var e='<ul class="fr-dropdown-list" role="presentation">',t=this.opts.paragraphFormat;for(var n in t)if(t.hasOwnProperty(n)){var r=this.shortcuts.get("paragraphFormat."+n);r=r?'<span class="fr-shortcut">'+r+"</span>":"",e+='<li role="presentation"><'+("N"==n?this.html.defaultTag()||"DIV":n)+' style="padding: 0 !important; margin: 0 !important;" role="presentation"><a class="fr-command" tabIndex="-1" role="option" data-cmd="paragraphFormat" data-param1="'+n+'" title="'+this.language.translate(t[n])+'">'+this.language.translate(t[n])+"</a></"+("N"==n?this.html.defaultTag()||"DIV":n)+"></li>"}return e+="</ul>"},title:"Paragraph Format",callback:function(e,t){this.paragraphFormat.apply(t)},refresh:function(e){this.paragraphFormat.refresh(e)},refreshOnShow:function(e,t){this.paragraphFormat.refreshOnShow(e,t)},plugin:"paragraphFormat"}),be.FE.DefineIcon("paragraphFormat",{NAME:"paragraph"}),be.extend(be.FE.DEFAULTS,{paragraphStyles:{"fr-text-gray":"Gray","fr-text-bordered":"Bordered","fr-text-spaced":"Spaced","fr-text-uppercase":"Uppercase"},paragraphMultipleStyles:!0}),be.FE.PLUGINS.paragraphStyle=function(s){return{_init:function(){},apply:function(e,t,n){void 0===t&&(t=s.opts.paragraphStyles),void 0===n&&(n=s.opts.paragraphMultipleStyles);var r="";n||((r=Object.keys(t)).splice(r.indexOf(e),1),r=r.join(" ")),s.selection.save(),s.html.wrap(!0,!0,!0,!0),s.selection.restore();var i=s.selection.blocks();s.selection.save();for(var a=be(i[0]).hasClass(e),o=0;o<i.length;o++)be(i[o]).removeClass(r).toggleClass(e,!a),be(i[o]).hasClass("fr-temp-div")&&be(i[o]).removeClass("fr-temp-div"),""===be(i[o]).attr("class")&&be(i[o]).removeAttr("class");s.html.unwrap(),s.selection.restore()},refreshOnShow:function(e,t){var n=s.selection.blocks();if(n.length){var r=be(n[0]);t.find(".fr-command").each(function(){var e=be(this).data("param1"),t=r.hasClass(e);be(this).toggleClass("fr-active",t).attr("aria-selected",t)})}}}},be.FE.RegisterCommand("paragraphStyle",{type:"dropdown",html:function(){var e='<ul class="fr-dropdown-list" role="presentation">',t=this.opts.paragraphStyles;for(var n in t)t.hasOwnProperty(n)&&(e+='<li role="presentation"><a class="fr-command '+n+'" tabIndex="-1" role="option" data-cmd="paragraphStyle" data-param1="'+n+'" title="'+this.language.translate(t[n])+'">'+this.language.translate(t[n])+"</a></li>");return e+="</ul>"},title:"Paragraph Style",callback:function(e,t){this.paragraphStyle.apply(t)},refreshOnShow:function(e,t){this.paragraphStyle.refreshOnShow(e,t)},plugin:"paragraphStyle"}),be.FE.DefineIcon("paragraphStyle",{NAME:"magic"}),be.FE.PLUGINS.print=function(i){return{run:function(){var e=i.$el.html(),t=null;i.shared.print_iframe?t=i.shared.print_iframe:((t=document.createElement("iframe")).name="fr-print",t.style.position="fixed",t.style.top="0",t.style.left="-9999px",t.style.height="100%",t.style.width="0",t.style.overflow="hidden",t.style["z-index"]="2147483647",t.style.tabIndex="-1",document.body.appendChild(t),t.onload=function(){setTimeout(function(){i.events.disableBlur(),window.frames["fr-print"].focus(),window.frames["fr-print"].print(),i.$win.get(0).focus(),i.events.disableBlur(),i.events.focus()},0)},i.events.on("shared.destroy",function(){t.remove()}),i.shared.print_iframe=t);var n=t.contentWindow;n.document.open(),n.document.write("<!DOCTYPE html><html><head><title>"+document.title+"</title>"),Array.prototype.forEach.call(document.querySelectorAll("style"),function(e){e=e.cloneNode(!0),n.document.write(e.outerHTML)});var r=document.querySelectorAll("link[rel=stylesheet]");Array.prototype.forEach.call(r,function(e){var t=document.createElement("link");t.rel=e.rel,t.href=e.href,t.media="print",t.type="text/css",t.media="all",n.document.write(t.outerHTML)}),n.document.write('</head><body style="text-align: '+("rtl"==i.opts.direction?"right":"left")+"; direction: "+i.opts.direction+';"><div class="fr-view">'),n.document.write(e),n.document.write("</div></body></html>"),n.document.close()}}},be.FE.DefineIcon("print",{NAME:"print"}),be.FE.RegisterCommand("print",{title:"Print",undo:!1,focus:!1,plugin:"print",callback:function(){this.print.run()}}),be.extend(be.FE.DEFAULTS,{quickInsertButtons:["image","video","embedly","table","ul","ol","hr"],quickInsertTags:["p","div","h1","h2","h3","h4","h5","h6","pre","blockquote"]}),be.FE.QUICK_INSERT_BUTTONS={},be.FE.DefineIcon("quickInsert",{PATH:'<path d="M22,16.75 L16.75,16.75 L16.75,22 L15.25,22.000 L15.25,16.75 L10,16.75 L10,15.25 L15.25,15.25 L15.25,10 L16.75,10 L16.75,15.25 L22,15.25 L22,16.75 Z"/>',template:"svg"}),be.FE.RegisterQuickInsertButton=function(e,t){be.FE.QUICK_INSERT_BUTTONS[e]=be.extend({undo:!0},t)},be.FE.RegisterQuickInsertButton("image",{icon:"insertImage",requiredPlugin:"image",title:"Insert Image",undo:!1,callback:function(){var e=this;e.shared.$qi_image_input||(e.shared.$qi_image_input=be('<input accept="image/*" name="quickInsertImage'+this.id+'" style="display: none;" type="file">'),be("body:first").append(e.shared.$qi_image_input),e.events.$on(e.shared.$qi_image_input,"change",function(){var e=be(this).data("inst");this.files&&(e.quickInsert.hide(),e.image.upload(this.files)),be(this).val("")},!0)),e.$qi_image_input=e.shared.$qi_image_input,e.helpers.isMobile()&&e.selection.save(),e.events.disableBlur(),e.$qi_image_input.data("inst",e).trigger("click")}}),be.FE.RegisterQuickInsertButton("video",{icon:"insertVideo",requiredPlugin:"video",title:"Insert Video",undo:!1,callback:function(){var e=prompt(this.language.translate("Paste the URL of the video you want to insert."));e&&this.video.insertByURL(e)}}),be.FE.RegisterQuickInsertButton("embedly",{icon:"embedly",requiredPlugin:"embedly",title:"Embed URL",undo:!1,callback:function(){var e=prompt(this.language.translate("Paste the URL of any web content you want to insert."));e&&this.embedly.add(e)}}),be.FE.RegisterQuickInsertButton("table",{icon:"insertTable",requiredPlugin:"table",title:"Insert Table",callback:function(){this.table.insert(2,2)}}),be.FE.RegisterQuickInsertButton("ol",{icon:"formatOL",requiredPlugin:"lists",title:"Ordered List",callback:function(){this.lists.format("OL")}}),be.FE.RegisterQuickInsertButton("ul",{icon:"formatUL",requiredPlugin:"lists",title:"Unordered List",callback:function(){this.lists.format("UL")}}),be.FE.RegisterQuickInsertButton("hr",{icon:"insertHR",title:"Insert Horizontal Line",callback:function(){this.commands.insertHR()}}),be.FE.PLUGINS.quickInsert=function(o){var s,l;function t(e){var t,n,r;t=e.offset().top-o.$box.offset().top,n=0-s.outerWidth(),o.opts.enter!=be.FE.ENTER_BR?r=(s.outerHeight()-e.outerHeight())/2:(be("<span>"+be.FE.INVISIBLE_SPACE+"</span>").insertAfter(e),r=(s.outerHeight()-e.next().outerHeight())/2,e.next().remove()),o.opts.iframe&&(t+=o.$iframe.offset().top-o.helpers.scrollTop()),s.hasClass("fr-on")&&0<=t&&l.css("top",t-r),0<=t&&t-r<=o.$box.outerHeight()-e.outerHeight()?(s.hasClass("fr-hidden")&&(s.hasClass("fr-on")&&a(),s.removeClass("fr-hidden")),s.css("top",t-r)):s.hasClass("fr-visible")&&(s.addClass("fr-hidden"),d()),s.css("left",n)}function n(e){s||function(){o.shared.$quick_insert||(o.shared.$quick_insert=be('<div class="fr-quick-insert"><a class="fr-floating-btn" role="button" tabIndex="-1" title="'+o.language.translate("Quick Insert")+'">'+o.icon.create("quickInsert")+"</a></div>"));s=o.shared.$quick_insert,o.tooltip.bind(o.$box,".fr-quick-insert > a.fr-floating-btn"),o.events.on("destroy",function(){s.removeClass("fr-on").appendTo(be("body:first")).css("left",-9999).css("top",-9999),l&&(d(),l.appendTo(be("body:first")))},!0),o.events.on("shared.destroy",function(){s.html("").removeData().remove(),s=null,l&&(l.html("").removeData().remove(),l=null)},!0),o.events.on("commands.before",i),o.events.on("commands.after",function(){o.popups.areVisible()||r()}),o.events.bindClick(o.$box,".fr-quick-insert > a",a),o.events.bindClick(o.$box,".fr-qi-helper > a.fr-btn",function(e){var t=be(e.currentTarget).data("cmd");if(!1===o.events.trigger("quickInsert.commands.before",[t]))return!1;be.FE.QUICK_INSERT_BUTTONS[t].callback.apply(o,[e.currentTarget]),be.FE.QUICK_INSERT_BUTTONS[t].undo&&o.undo.saveStep(),o.events.trigger("quickInsert.commands.after",[t]),o.quickInsert.hide()}),o.events.$on(o.$wp,"scroll",function(){s.hasClass("fr-visible")&&t(s.data("tag"))})}(),s.hasClass("fr-on")&&d(),o.$box.append(s),t(e),s.data("tag",e),s.addClass("fr-visible")}function r(){if(o.core.hasFocus()){var e=o.selection.element();if(o.opts.enter==be.FE.ENTER_BR||o.node.isBlock(e)||(e=o.node.blockParent(e)),o.opts.enter==be.FE.ENTER_BR&&!o.node.isBlock(e)){var t=o.node.deepestParent(e);t&&(e=t)}e&&(o.opts.enter!=be.FE.ENTER_BR&&o.node.isEmpty(e)&&o.node.isElement(e.parentNode)&&0<=o.opts.quickInsertTags.indexOf(e.tagName.toLowerCase())||o.opts.enter==be.FE.ENTER_BR&&("BR"==e.tagName&&(!e.previousSibling||"BR"==e.previousSibling.tagName||o.node.isBlock(e.previousSibling))||o.node.isEmpty(e)&&(!e.previousSibling||"BR"==e.previousSibling.tagName||o.node.isBlock(e.previousSibling))&&(!e.nextSibling||"BR"==e.nextSibling.tagName||o.node.isBlock(e.nextSibling))))?s&&s.data("tag").is(be(e))&&s.hasClass("fr-on")?d():o.selection.isCollapsed()&&n(be(e)):i()}}function i(){s&&(s.hasClass("fr-on")&&d(),s.removeClass("fr-visible fr-on"),s.css("left",-9999).css("top",-9999))}function a(e){if(e&&e.preventDefault(),s.hasClass("fr-on")&&!s.hasClass("fr-hidden"))d();else{if(!o.shared.$qi_helper){for(var t=o.opts.quickInsertButtons,n='<div class="fr-qi-helper">',r=0,i=0;i<t.length;i++){var a=be.FE.QUICK_INSERT_BUTTONS[t[i]];a&&(!a.requiredPlugin||be.FE.PLUGINS[a.requiredPlugin]&&0<=o.opts.pluginsEnabled.indexOf(a.requiredPlugin))&&(n+='<a class="fr-btn fr-floating-btn" role="button" title="'+o.language.translate(a.title)+'" tabIndex="-1" data-cmd="'+t[i]+'" style="transition-delay: '+.025*r+++'s;">'+o.icon.create(a.icon)+"</a>")}n+="</div>",o.shared.$qi_helper=be(n),o.tooltip.bind(o.shared.$qi_helper,"> a.fr-btn"),o.events.$on(o.shared.$qi_helper,"mousedown",function(e){e.preventDefault()},!0)}(l=o.shared.$qi_helper).appendTo(o.$box),setTimeout(function(){l.css("top",parseFloat(s.css("top"))),l.css("left",parseFloat(s.css("left"))+s.outerWidth()),l.find("a").addClass("fr-size-1"),s.addClass("fr-on")},10)}}function d(){var e=o.$box.find(".fr-qi-helper");e.length&&(e.find("a").removeClass("fr-size-1"),e.css("left",-9999),s.hasClass("fr-hidden")||s.removeClass("fr-on"))}return{_init:function(){if(!o.$wp)return!1;o.opts.iframe&&o.$el.parent("html").find("head").append('<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.4.0/css/font-awesome.min.css">'),o.popups.onShow("image.edit",i),o.events.on("mouseup",r),o.helpers.isMobile()&&o.events.$on(be(o.o_doc),"selectionchange",r),o.events.on("blur",i),o.events.on("keyup",r),o.events.on("keydown",function(){setTimeout(function(){r()},0)})},hide:i}},be.FE.PLUGINS.quote=function(r){function i(e){for(;e.parentNode&&e.parentNode!=r.el;)e=e.parentNode;return e}return{apply:function(e){r.selection.save(),r.html.wrap(!0,!0,!0,!0),r.selection.restore(),"increase"==e?function(){var e,t=r.selection.blocks();for(e=0;e<t.length;e++)t[e]=i(t[e]);r.selection.save();var n=be("<blockquote>");for(n.insertBefore(t[0]),e=0;e<t.length;e++)n.append(t[e]);r.html.unwrap(),r.selection.restore()}():"decrease"==e&&function(){var e,t=r.selection.blocks();for(e=0;e<t.length;e++)"BLOCKQUOTE"!=t[e].tagName&&(t[e]=be(t[e]).parentsUntil(r.$el,"BLOCKQUOTE").get(0));for(r.selection.save(),e=0;e<t.length;e++)t[e]&&be(t[e]).replaceWith(t[e].innerHTML);r.html.unwrap(),r.selection.restore()}()}}},be.FE.RegisterShortcut(be.FE.KEYCODE.SINGLE_QUOTE,"quote","increase","'"),be.FE.RegisterShortcut(be.FE.KEYCODE.SINGLE_QUOTE,"quote","decrease","'",!0),be.FE.RegisterCommand("quote",{title:"Quote",type:"dropdown",options:{increase:"Increase",decrease:"Decrease"},callback:function(e,t){this.quote.apply(t)},plugin:"quote"}),be.FE.DefineIcon("quote",{NAME:"quote-left"}),be.extend(be.FE.DEFAULTS,{saveInterval:1e4,saveURL:null,saveParams:{},saveParam:"body",saveMethod:"POST"}),be.FE.PLUGINS.save=function(s){var e=null,l=null,t=!1,d=1,c=2,n={};function f(e,t){s.events.trigger("save.error",[{code:e,message:n[e]},t])}function r(e){void 0===e&&(e=s.html.get());var t=e,n=s.events.trigger("save.before",[e]);if(!1===n)return!1;if("string"==typeof n&&(e=n),s.opts.saveURL){var r={};for(var i in s.opts.saveParams)if(s.opts.saveParams.hasOwnProperty(i)){var a=s.opts.saveParams[i];r[i]="function"==typeof a?a.call(this):a}var o={};o[s.opts.saveParam]=e,be.ajax({type:s.opts.saveMethod,url:s.opts.saveURL,data:be.extend(o,r),crossDomain:s.opts.requestWithCORS,xhrFields:{withCredentials:s.opts.requestWithCredentials},headers:s.opts.requestHeaders}).done(function(e){l=t,s.events.trigger("save.after",[e])}).fail(function(e){f(c,e.response||e.responseText)})}else f(d)}function i(){clearTimeout(e),e=setTimeout(function(){var e=s.html.get();(l!=e||t)&&(t=!1,r(l=e))},s.opts.saveInterval)}return n[d]="Missing saveURL option.",n[c]="Something went wrong during save.",{_init:function(){s.opts.saveInterval&&(l=s.html.get(),s.events.on("contentChanged",i),s.events.on("keydown destroy",function(){clearTimeout(e)}))},save:r,reset:function(){i(),t=!1},force:function(){t=!0}}},be.FE.DefineIcon("save",{NAME:"floppy-o",FA5NAME:"disk"}),be.FE.RegisterCommand("save",{title:"Save",undo:!1,focus:!1,refreshAfterCallback:!1,callback:function(){this.save.save()},plugin:"save"}),be.extend(be.FE.DEFAULTS,{specialCharactersSets:[{title:"Latin",list:[{"char":"&iexcl;",desc:"INVERTED EXCLAMATION MARK"},{"char":"&cent;",desc:"CENT SIGN"},{"char":"&pound;",desc:"POUND SIGN"},{"char":"&curren;",desc:"CURRENCY SIGN"},{"char":"&yen;",desc:"YEN SIGN"},{"char":"&brvbar;",desc:"BROKEN BAR"},{"char":"&sect;",desc:"SECTION SIGN"},{"char":"&uml;",desc:"DIAERESIS"},{"char":"&copy;",desc:"COPYRIGHT SIGN"},{"char":"&trade;",desc:"TRADEMARK SIGN"},{"char":"&ordf;",desc:"FEMININE ORDINAL INDICATOR"},{"char":"&laquo;",desc:"LEFT-POINTING DOUBLE ANGLE QUOTATION MARK"},{"char":"&not;",desc:"NOT SIGN"},{"char":"&reg;",desc:"REGISTERED SIGN"},{"char":"&macr;",desc:"MACRON"},{"char":"&deg;",desc:"DEGREE SIGN"},{"char":"&plusmn;",desc:"PLUS-MINUS SIGN"},{"char":"&sup2;",desc:"SUPERSCRIPT TWO"},{"char":"&sup3;",desc:"SUPERSCRIPT THREE"},{"char":"&acute;",desc:"ACUTE ACCENT"},{"char":"&micro;",desc:"MICRO SIGN"},{"char":"&para;",desc:"PILCROW SIGN"},{"char":"&middot;",desc:"MIDDLE DOT"},{"char":"&cedil;",desc:"CEDILLA"},{"char":"&sup1;",desc:"SUPERSCRIPT ONE"},{"char":"&ordm;",desc:"MASCULINE ORDINAL INDICATOR"},{"char":"&raquo;",desc:"RIGHT-POINTING DOUBLE ANGLE QUOTATION MARK"},{"char":"&frac14;",desc:"VULGAR FRACTION ONE QUARTER"},{"char":"&frac12;",desc:"VULGAR FRACTION ONE HALF"},{"char":"&frac34;",desc:"VULGAR FRACTION THREE QUARTERS"},{"char":"&iquest;",desc:"INVERTED QUESTION MARK"},{"char":"&Agrave;",desc:"LATIN CAPITAL LETTER A WITH GRAVE"},{"char":"&Aacute;",desc:"LATIN CAPITAL LETTER A WITH ACUTE"},{"char":"&Acirc;",desc:"LATIN CAPITAL LETTER A WITH CIRCUMFLEX"},{"char":"&Atilde;",desc:"LATIN CAPITAL LETTER A WITH TILDE"},{"char":"&Auml;",desc:"LATIN CAPITAL LETTER A WITH DIAERESIS "},{"char":"&Aring;",desc:"LATIN CAPITAL LETTER A WITH RING ABOVE"},{"char":"&AElig;",desc:"LATIN CAPITAL LETTER AE"},{"char":"&Ccedil;",desc:"LATIN CAPITAL LETTER C WITH CEDILLA"},{"char":"&Egrave;",desc:"LATIN CAPITAL LETTER E WITH GRAVE"},{"char":"&Eacute;",desc:"LATIN CAPITAL LETTER E WITH ACUTE"},{"char":"&Ecirc;",desc:"LATIN CAPITAL LETTER E WITH CIRCUMFLEX"},{"char":"&Euml;",desc:"LATIN CAPITAL LETTER E WITH DIAERESIS"},{"char":"&Igrave;",desc:"LATIN CAPITAL LETTER I WITH GRAVE"},{"char":"&Iacute;",desc:"LATIN CAPITAL LETTER I WITH ACUTE"},{"char":"&Icirc;",desc:"LATIN CAPITAL LETTER I WITH CIRCUMFLEX"},{"char":"&Iuml;",desc:"LATIN CAPITAL LETTER I WITH DIAERESIS"},{"char":"&ETH;",desc:"LATIN CAPITAL LETTER ETH"},{"char":"&Ntilde;",desc:"LATIN CAPITAL LETTER N WITH TILDE"},{"char":"&Ograve;",desc:"LATIN CAPITAL LETTER O WITH GRAVE"},{"char":"&Oacute;",desc:"LATIN CAPITAL LETTER O WITH ACUTE"},{"char":"&Ocirc;",desc:"LATIN CAPITAL LETTER O WITH CIRCUMFLEX"},{"char":"&Otilde;",desc:"LATIN CAPITAL LETTER O WITH TILDE"},{"char":"&Ouml;",desc:"LATIN CAPITAL LETTER O WITH DIAERESIS"},{"char":"&times;",desc:"MULTIPLICATION SIGN"},{"char":"&Oslash;",desc:"LATIN CAPITAL LETTER O WITH STROKE"},{"char":"&Ugrave;",desc:"LATIN CAPITAL LETTER U WITH GRAVE"},{"char":"&Uacute;",desc:"LATIN CAPITAL LETTER U WITH ACUTE"},{"char":"&Ucirc;",desc:"LATIN CAPITAL LETTER U WITH CIRCUMFLEX"},{"char":"&Uuml;",desc:"LATIN CAPITAL LETTER U WITH DIAERESIS"},{"char":"&Yacute;",desc:"LATIN CAPITAL LETTER Y WITH ACUTE"},{"char":"&THORN;",desc:"LATIN CAPITAL LETTER THORN"},{"char":"&szlig;",desc:"LATIN SMALL LETTER SHARP S"},{"char":"&agrave;",desc:"LATIN SMALL LETTER A WITH GRAVE"},{"char":"&aacute;",desc:"LATIN SMALL LETTER A WITH ACUTE "},{"char":"&acirc;",desc:"LATIN SMALL LETTER A WITH CIRCUMFLEX"},{"char":"&atilde;",desc:"LATIN SMALL LETTER A WITH TILDE"},{"char":"&auml;",desc:"LATIN SMALL LETTER A WITH DIAERESIS"},{"char":"&aring;",desc:"LATIN SMALL LETTER A WITH RING ABOVE"},{"char":"&aelig;",desc:"LATIN SMALL LETTER AE"},{"char":"&ccedil;",desc:"LATIN SMALL LETTER C WITH CEDILLA"},{"char":"&egrave;",desc:"LATIN SMALL LETTER E WITH GRAVE"},{"char":"&eacute;",desc:"LATIN SMALL LETTER E WITH ACUTE"},{"char":"&ecirc;",desc:"LATIN SMALL LETTER E WITH CIRCUMFLEX"},{"char":"&euml;",desc:"LATIN SMALL LETTER E WITH DIAERESIS"},{"char":"&igrave;",desc:"LATIN SMALL LETTER I WITH GRAVE"},{"char":"&iacute;",desc:"LATIN SMALL LETTER I WITH ACUTE"},{"char":"&icirc;",desc:"LATIN SMALL LETTER I WITH CIRCUMFLEX"},{"char":"&iuml;",desc:"LATIN SMALL LETTER I WITH DIAERESIS"},{"char":"&eth;",desc:"LATIN SMALL LETTER ETH"},{"char":"&ntilde;",desc:"LATIN SMALL LETTER N WITH TILDE"},{"char":"&ograve;",desc:"LATIN SMALL LETTER O WITH GRAVE"},{"char":"&oacute;",desc:"LATIN SMALL LETTER O WITH ACUTE"},{"char":"&ocirc;",desc:"LATIN SMALL LETTER O WITH CIRCUMFLEX"},{"char":"&otilde;",desc:"LATIN SMALL LETTER O WITH TILDE"},{"char":"&ouml;",desc:"LATIN SMALL LETTER O WITH DIAERESIS"},{"char":"&divide;",desc:"DIVISION SIGN"},{"char":"&oslash;",desc:"LATIN SMALL LETTER O WITH STROKE"},{"char":"&ugrave;",desc:"LATIN SMALL LETTER U WITH GRAVE"},{"char":"&uacute;",desc:"LATIN SMALL LETTER U WITH ACUTE"},{"char":"&ucirc;",desc:"LATIN SMALL LETTER U WITH CIRCUMFLEX"},{"char":"&uuml;",desc:"LATIN SMALL LETTER U WITH DIAERESIS"},{"char":"&yacute;",desc:"LATIN SMALL LETTER Y WITH ACUTE"},{"char":"&thorn;",desc:"LATIN SMALL LETTER THORN"},{"char":"&yuml;",desc:"LATIN SMALL LETTER Y WITH DIAERESIS"}]},{title:"Greek",list:[{"char":"&Alpha;",desc:"GREEK CAPITAL LETTER ALPHA"},{"char":"&Beta;",desc:"GREEK CAPITAL LETTER BETA"},{"char":"&Gamma;",desc:"GREEK CAPITAL LETTER GAMMA"},{"char":"&Delta;",desc:"GREEK CAPITAL LETTER DELTA"},{"char":"&Epsilon;",desc:"GREEK CAPITAL LETTER EPSILON"},{"char":"&Zeta;",desc:"GREEK CAPITAL LETTER ZETA"},{"char":"&Eta;",desc:"GREEK CAPITAL LETTER ETA"},{"char":"&Theta;",desc:"GREEK CAPITAL LETTER THETA"},{"char":"&Iota;",desc:"GREEK CAPITAL LETTER IOTA"},{"char":"&Kappa;",desc:"GREEK CAPITAL LETTER KAPPA"},{"char":"&Lambda;",desc:"GREEK CAPITAL LETTER LAMBDA"},{"char":"&Mu;",desc:"GREEK CAPITAL LETTER MU"},{"char":"&Nu;",desc:"GREEK CAPITAL LETTER NU"},{"char":"&Xi;",desc:"GREEK CAPITAL LETTER XI"},{"char":"&Omicron;",desc:"GREEK CAPITAL LETTER OMICRON"},{"char":"&Pi;",desc:"GREEK CAPITAL LETTER PI"},{"char":"&Rho;",desc:"GREEK CAPITAL LETTER RHO"},{"char":"&Sigma;",desc:"GREEK CAPITAL LETTER SIGMA"},{"char":"&Tau;",desc:"GREEK CAPITAL LETTER TAU"},{"char":"&Upsilon;",desc:"GREEK CAPITAL LETTER UPSILON"},{"char":"&Phi;",desc:"GREEK CAPITAL LETTER PHI"},{"char":"&Chi;",desc:"GREEK CAPITAL LETTER CHI"},{"char":"&Psi;",desc:"GREEK CAPITAL LETTER PSI"},{"char":"&Omega;",desc:"GREEK CAPITAL LETTER OMEGA"},{"char":"&alpha;",desc:"GREEK SMALL LETTER ALPHA"},{"char":"&beta;",desc:"GREEK SMALL LETTER BETA"},{"char":"&gamma;",desc:"GREEK SMALL LETTER GAMMA"},{"char":"&delta;",desc:"GREEK SMALL LETTER DELTA"},{"char":"&epsilon;",desc:"GREEK SMALL LETTER EPSILON"},{"char":"&zeta;",desc:"GREEK SMALL LETTER ZETA"},{"char":"&eta;",desc:"GREEK SMALL LETTER ETA"},{"char":"&theta;",desc:"GREEK SMALL LETTER THETA"},{"char":"&iota;",desc:"GREEK SMALL LETTER IOTA"},{"char":"&kappa;",desc:"GREEK SMALL LETTER KAPPA"},{"char":"&lambda;",desc:"GREEK SMALL LETTER LAMBDA"},{"char":"&mu;",desc:"GREEK SMALL LETTER MU"},{"char":"&nu;",desc:"GREEK SMALL LETTER NU"},{"char":"&xi;",desc:"GREEK SMALL LETTER XI"},{"char":"&omicron;",desc:"GREEK SMALL LETTER OMICRON"},{"char":"&pi;",desc:"GREEK SMALL LETTER PI"},{"char":"&rho;",desc:"GREEK SMALL LETTER RHO"},{"char":"&sigmaf;",desc:"GREEK SMALL LETTER FINAL SIGMA"},{"char":"&sigma;",desc:"GREEK SMALL LETTER SIGMA"},{"char":"&tau;",desc:"GREEK SMALL LETTER TAU"},{"char":"&upsilon;",desc:"GREEK SMALL LETTER UPSILON"},{"char":"&phi;",desc:"GREEK SMALL LETTER PHI"},{"char":"&chi;",desc:"GREEK SMALL LETTER CHI"},{"char":"&psi;",desc:"GREEK SMALL LETTER PSI"},{"char":"&omega;",desc:"GREEK SMALL LETTER OMEGA"},{"char":"&thetasym;",desc:"GREEK THETA SYMBOL"},{"char":"&upsih;",desc:"GREEK UPSILON WITH HOOK SYMBOL"},{"char":"&straightphi;",desc:"GREEK PHI SYMBOL"},{"char":"&piv;",desc:"GREEK PI SYMBOL"},{"char":"&Gammad;",desc:"GREEK LETTER DIGAMMA"},{"char":"&gammad;",desc:"GREEK SMALL LETTER DIGAMMA"},{"char":"&varkappa;",desc:"GREEK KAPPA SYMBOL"},{"char":"&varrho;",desc:"GREEK RHO SYMBOL"},{"char":"&straightepsilon;",desc:"GREEK LUNATE EPSILON SYMBOL"},{"char":"&backepsilon;",desc:"GREEK REVERSED LUNATE EPSILON SYMBOL"}]},{title:"Cyrillic",list:[{"char":"&#x400",desc:"CYRILLIC CAPITAL LETTER IE WITH GRAVE"},{"char":"&#x401",desc:"CYRILLIC CAPITAL LETTER IO"},{"char":"&#x402",desc:"CYRILLIC CAPITAL LETTER DJE"},{"char":"&#x403",desc:"CYRILLIC CAPITAL LETTER GJE"},{"char":"&#x404",desc:"CYRILLIC CAPITAL LETTER UKRAINIAN IE"},{"char":"&#x405",desc:"CYRILLIC CAPITAL LETTER DZE"},{"char":"&#x406",desc:"CYRILLIC CAPITAL LETTER BYELORUSSIAN-UKRAINIAN I"},{"char":"&#x407",desc:"CYRILLIC CAPITAL LETTER YI"},{"char":"&#x408",desc:"CYRILLIC CAPITAL LETTER JE"},{"char":"&#x409",desc:"CYRILLIC CAPITAL LETTER LJE"},{"char":"&#x40A",desc:"CYRILLIC CAPITAL LETTER NJE"},{"char":"&#x40B",desc:"CYRILLIC CAPITAL LETTER TSHE"},{"char":"&#x40C",desc:"CYRILLIC CAPITAL LETTER KJE"},{"char":"&#x40D",desc:"CYRILLIC CAPITAL LETTER I WITH GRAVE"},{"char":"&#x40E",desc:"CYRILLIC CAPITAL LETTER SHORT U"},{"char":"&#x40F",desc:"CYRILLIC CAPITAL LETTER DZHE"},{"char":"&#x410",desc:"CYRILLIC CAPITAL LETTER A"},{"char":"&#x411",desc:"CYRILLIC CAPITAL LETTER BE"},{"char":"&#x412",desc:"CYRILLIC CAPITAL LETTER VE"},{"char":"&#x413",desc:"CYRILLIC CAPITAL LETTER GHE"},{"char":"&#x414",desc:"CYRILLIC CAPITAL LETTER DE"},{"char":"&#x415",desc:"CYRILLIC CAPITAL LETTER IE"},{"char":"&#x416",desc:"CYRILLIC CAPITAL LETTER ZHE"},{"char":"&#x417",desc:"CYRILLIC CAPITAL LETTER ZE"},{"char":"&#x418",desc:"CYRILLIC CAPITAL LETTER I"},{"char":"&#x419",desc:"CYRILLIC CAPITAL LETTER SHORT I"},{"char":"&#x41A",desc:"CYRILLIC CAPITAL LETTER KA"},{"char":"&#x41B",desc:"CYRILLIC CAPITAL LETTER EL"},{"char":"&#x41C",desc:"CYRILLIC CAPITAL LETTER EM"},{"char":"&#x41D",desc:"CYRILLIC CAPITAL LETTER EN"},{"char":"&#x41E",desc:"CYRILLIC CAPITAL LETTER O"},{"char":"&#x41F",desc:"CYRILLIC CAPITAL LETTER PE"},{"char":"&#x420",desc:"CYRILLIC CAPITAL LETTER ER"},{"char":"&#x421",desc:"CYRILLIC CAPITAL LETTER ES"},{"char":"&#x422",desc:"CYRILLIC CAPITAL LETTER TE"},{"char":"&#x423",desc:"CYRILLIC CAPITAL LETTER U"},{"char":"&#x424",desc:"CYRILLIC CAPITAL LETTER EF"},{"char":"&#x425",desc:"CYRILLIC CAPITAL LETTER HA"},{"char":"&#x426",desc:"CYRILLIC CAPITAL LETTER TSE"},{"char":"&#x427",desc:"CYRILLIC CAPITAL LETTER CHE"},{"char":"&#x428",desc:"CYRILLIC CAPITAL LETTER SHA"},{"char":"&#x429",desc:"CYRILLIC CAPITAL LETTER SHCHA"},{"char":"&#x42A",desc:"CYRILLIC CAPITAL LETTER HARD SIGN"},{"char":"&#x42B",desc:"CYRILLIC CAPITAL LETTER YERU"},{"char":"&#x42C",desc:"CYRILLIC CAPITAL LETTER SOFT SIGN"},{"char":"&#x42D",desc:"CYRILLIC CAPITAL LETTER E"},{"char":"&#x42E",desc:"CYRILLIC CAPITAL LETTER YU"},{"char":"&#x42F",desc:"CYRILLIC CAPITAL LETTER YA"},{"char":"&#x430",desc:"CYRILLIC SMALL LETTER A"},{"char":"&#x431",desc:"CYRILLIC SMALL LETTER BE"},{"char":"&#x432",desc:"CYRILLIC SMALL LETTER VE"},{"char":"&#x433",desc:"CYRILLIC SMALL LETTER GHE"},{"char":"&#x434",desc:"CYRILLIC SMALL LETTER DE"},{"char":"&#x435",desc:"CYRILLIC SMALL LETTER IE"},{"char":"&#x436",desc:"CYRILLIC SMALL LETTER ZHE"},{"char":"&#x437",desc:"CYRILLIC SMALL LETTER ZE"},{"char":"&#x438",desc:"CYRILLIC SMALL LETTER I"},{"char":"&#x439",desc:"CYRILLIC SMALL LETTER SHORT I"},{"char":"&#x43A",desc:"CYRILLIC SMALL LETTER KA"},{"char":"&#x43B",desc:"CYRILLIC SMALL LETTER EL"},{"char":"&#x43C",desc:"CYRILLIC SMALL LETTER EM"},{"char":"&#x43D",desc:"CYRILLIC SMALL LETTER EN"},{"char":"&#x43E",desc:"CYRILLIC SMALL LETTER O"},{"char":"&#x43F",desc:"CYRILLIC SMALL LETTER PE"},{"char":"&#x440",desc:"CYRILLIC SMALL LETTER ER"},{"char":"&#x441",desc:"CYRILLIC SMALL LETTER ES"},{"char":"&#x442",desc:"CYRILLIC SMALL LETTER TE"},{"char":"&#x443",desc:"CYRILLIC SMALL LETTER U"},{"char":"&#x444",desc:"CYRILLIC SMALL LETTER EF"},{"char":"&#x445",desc:"CYRILLIC SMALL LETTER HA"},{"char":"&#x446",desc:"CYRILLIC SMALL LETTER TSE"},{"char":"&#x447",desc:"CYRILLIC SMALL LETTER CHE"},{"char":"&#x448",desc:"CYRILLIC SMALL LETTER SHA"},{"char":"&#x449",desc:"CYRILLIC SMALL LETTER SHCHA"},{"char":"&#x44A",desc:"CYRILLIC SMALL LETTER HARD SIGN"},{"char":"&#x44B",desc:"CYRILLIC SMALL LETTER YERU"},{"char":"&#x44C",desc:"CYRILLIC SMALL LETTER SOFT SIGN"},{"char":"&#x44D",desc:"CYRILLIC SMALL LETTER E"},{"char":"&#x44E",desc:"CYRILLIC SMALL LETTER YU"},{"char":"&#x44F",desc:"CYRILLIC SMALL LETTER YA"},{"char":"&#x450",desc:"CYRILLIC SMALL LETTER IE WITH GRAVE"},{"char":"&#x451",desc:"CYRILLIC SMALL LETTER IO"},{"char":"&#x452",desc:"CYRILLIC SMALL LETTER DJE"},{"char":"&#x453",desc:"CYRILLIC SMALL LETTER GJE"},{"char":"&#x454",desc:"CYRILLIC SMALL LETTER UKRAINIAN IE"},{"char":"&#x455",desc:"CYRILLIC SMALL LETTER DZE"},{"char":"&#x456",desc:"CYRILLIC SMALL LETTER BYELORUSSIAN-UKRAINIAN I"},{"char":"&#x457",desc:"CYRILLIC SMALL LETTER YI"},{"char":"&#x458",desc:"CYRILLIC SMALL LETTER JE"},{"char":"&#x459",desc:"CYRILLIC SMALL LETTER LJE"},{"char":"&#x45A",desc:"CYRILLIC SMALL LETTER NJE"},{"char":"&#x45B",desc:"CYRILLIC SMALL LETTER TSHE"},{"char":"&#x45C",desc:"CYRILLIC SMALL LETTER KJE"},{"char":"&#x45D",desc:"CYRILLIC SMALL LETTER I WITH GRAVE"},{"char":"&#x45E",desc:"CYRILLIC SMALL LETTER SHORT U"},{"char":"&#x45F",desc:"CYRILLIC SMALL LETTER DZHE"}]},{title:"Punctuation",list:[{"char":"&ndash;",desc:"EN DASH"},{"char":"&mdash;",desc:"EM DASH"},{"char":"&lsquo;",desc:"LEFT SINGLE QUOTATION MARK"},{"char":"&rsquo;",desc:"RIGHT SINGLE QUOTATION MARK"},{"char":"&sbquo;",desc:"SINGLE LOW-9 QUOTATION MARK"},{"char":"&ldquo;",desc:"LEFT DOUBLE QUOTATION MARK"},{"char":"&rdquo;",desc:"RIGHT DOUBLE QUOTATION MARK"},{"char":"&bdquo;",desc:"DOUBLE LOW-9 QUOTATION MARK"},{"char":"&dagger;",desc:"DAGGER"},{"char":"&Dagger;",desc:"DOUBLE DAGGER"},{"char":"&bull;",desc:"BULLET"},{"char":"&hellip;",desc:"HORIZONTAL ELLIPSIS"},{"char":"&permil;",desc:"PER MILLE SIGN"},{"char":"&prime;",desc:"PRIME"},{"char":"&Prime;",desc:"DOUBLE PRIME"},{"char":"&lsaquo;",desc:"SINGLE LEFT-POINTING ANGLE QUOTATION MARK"},{"char":"&rsaquo;",desc:"SINGLE RIGHT-POINTING ANGLE QUOTATION MARK"},{"char":"&oline;",desc:"OVERLINE"},{"char":"&frasl;",desc:"FRACTION SLASH"}]},{title:"Currency",list:[{"char":"&#x20A0",desc:"EURO-CURRENCY SIGN"},{"char":"&#x20A1",desc:"COLON SIGN"},{"char":"&#x20A2",desc:"CRUZEIRO SIGN"},{"char":"&#x20A3",desc:"FRENCH FRANC SIGN"},{"char":"&#x20A4",desc:"LIRA SIGN"},{"char":"&#x20A5",desc:"MILL SIGN"},{"char":"&#x20A6",desc:"NAIRA SIGN"},{"char":"&#x20A7",desc:"PESETA SIGN"},{"char":"&#x20A8",desc:"RUPEE SIGN"},{"char":"&#x20A9",desc:"WON SIGN"},{"char":"&#x20AA",desc:"NEW SHEQEL SIGN"},{"char":"&#x20AB",desc:"DONG SIGN"},{"char":"&#x20AC",desc:"EURO SIGN"},{"char":"&#x20AD",desc:"KIP SIGN"},{"char":"&#x20AE",desc:"TUGRIK SIGN"},{"char":"&#x20AF",desc:"DRACHMA SIGN"},{"char":"&#x20B0",desc:"GERMAN PENNY SYMBOL"},{"char":"&#x20B1",desc:"PESO SIGN"},{"char":"&#x20B2",desc:"GUARANI SIGN"},{"char":"&#x20B3",desc:"AUSTRAL SIGN"},{"char":"&#x20B4",desc:"HRYVNIA SIGN"},{"char":"&#x20B5",desc:"CEDI SIGN"},{"char":"&#x20B6",desc:"LIVRE TOURNOIS SIGN"},{"char":"&#x20B7",desc:"SPESMILO SIGN"},{"char":"&#x20B8",desc:"TENGE SIGN"},{"char":"&#x20B9",desc:"INDIAN RUPEE SIGN"}]},{title:"Arrows",list:[{"char":"&#x2190",desc:"LEFTWARDS ARROW"},{"char":"&#x2191",desc:"UPWARDS ARROW"},{"char":"&#x2192",desc:"RIGHTWARDS ARROW"},{"char":"&#x2193",desc:"DOWNWARDS ARROW"},{"char":"&#x2194",desc:"LEFT RIGHT ARROW"},{"char":"&#x2195",desc:"UP DOWN ARROW"},{"char":"&#x2196",desc:"NORTH WEST ARROW"},{"char":"&#x2197",desc:"NORTH EAST ARROW"},{"char":"&#x2198",desc:"SOUTH EAST ARROW"},{"char":"&#x2199",desc:"SOUTH WEST ARROW"},{"char":"&#x219A",desc:"LEFTWARDS ARROW WITH STROKE"},{"char":"&#x219B",desc:"RIGHTWARDS ARROW WITH STROKE"},{"char":"&#x219C",desc:"LEFTWARDS WAVE ARROW"},{"char":"&#x219D",desc:"RIGHTWARDS WAVE ARROW"},{"char":"&#x219E",desc:"LEFTWARDS TWO HEADED ARROW"},{"char":"&#x219F",desc:"UPWARDS TWO HEADED ARROW"},{"char":"&#x21A0",desc:"RIGHTWARDS TWO HEADED ARROW"},{"char":"&#x21A1",desc:"DOWNWARDS TWO HEADED ARROW"},{"char":"&#x21A2",desc:"LEFTWARDS ARROW WITH TAIL"},{"char":"&#x21A3",desc:"RIGHTWARDS ARROW WITH TAIL"},{"char":"&#x21A4",desc:"LEFTWARDS ARROW FROM BAR"},{"char":"&#x21A5",desc:"UPWARDS ARROW FROM BAR"},{"char":"&#x21A6",desc:"RIGHTWARDS ARROW FROM BAR"},{"char":"&#x21A7",desc:"DOWNWARDS ARROW FROM BAR"},{"char":"&#x21A8",desc:"UP DOWN ARROW WITH BASE"},{"char":"&#x21A9",desc:"LEFTWARDS ARROW WITH HOOK"},{"char":"&#x21AA",desc:"RIGHTWARDS ARROW WITH HOOK"},{"char":"&#x21AB",desc:"LEFTWARDS ARROW WITH LOOP"},{"char":"&#x21AC",desc:"RIGHTWARDS ARROW WITH LOOP"},{"char":"&#x21AD",desc:"LEFT RIGHT WAVE ARROW"},{"char":"&#x21AE",desc:"LEFT RIGHT ARROW WITH STROKE"},{"char":"&#x21AF",desc:"DOWNWARDS ZIGZAG ARROW"},{"char":"&#x21B0",desc:"UPWARDS ARROW WITH TIP LEFTWARDS"},{"char":"&#x21B1",desc:"UPWARDS ARROW WITH TIP RIGHTWARDS"},{"char":"&#x21B2",desc:"DOWNWARDS ARROW WITH TIP LEFTWARDS"},{"char":"&#x21B3",desc:"DOWNWARDS ARROW WITH TIP RIGHTWARDS"},{"char":"&#x21B4",desc:"RIGHTWARDS ARROW WITH CORNER DOWNWARDS"},{"char":"&#x21B5",desc:"DOWNWARDS ARROW WITH CORNER LEFTWARDS"},{"char":"&#x21B6",desc:"ANTICLOCKWISE TOP SEMICIRCLE ARROW"},{"char":"&#x21B7",desc:"CLOCKWISE TOP SEMICIRCLE ARROW"},{"char":"&#x21B8",desc:"NORTH WEST ARROW TO LONG BAR"},{"char":"&#x21B9",desc:"LEFTWARDS ARROW TO BAR OVER RIGHTWARDS ARROW TO BAR"},{"char":"&#x21BA",desc:"ANTICLOCKWISE OPEN CIRCLE ARROW"},{"char":"&#x21BB",desc:"CLOCKWISE OPEN CIRCLE ARROW"},{"char":"&#x21BC",desc:"LEFTWARDS HARPOON WITH BARB UPWARDS"},{"char":"&#x21BD",desc:"LEFTWARDS HARPOON WITH BARB DOWNWARDS"},{"char":"&#x21BE",desc:"UPWARDS HARPOON WITH BARB RIGHTWARDS"},{"char":"&#x21BF",desc:"UPWARDS HARPOON WITH BARB LEFTWARDS"},{"char":"&#x21C0",desc:"RIGHTWARDS HARPOON WITH BARB UPWARDS"},{"char":"&#x21C1",desc:"RIGHTWARDS HARPOON WITH BARB DOWNWARDS"},{"char":"&#x21C2",desc:"DOWNWARDS HARPOON WITH BARB RIGHTWARDS"},{"char":"&#x21C3",desc:"DOWNWARDS HARPOON WITH BARB LEFTWARDS"},{"char":"&#x21C4",desc:"RIGHTWARDS ARROW OVER LEFTWARDS ARROW"},{"char":"&#x21C5",desc:"UPWARDS ARROW LEFTWARDS OF DOWNWARDS ARROW"},{"char":"&#x21C6",desc:"LEFTWARDS ARROW OVER RIGHTWARDS ARROW"},{"char":"&#x21C7",desc:"LEFTWARDS PAIRED ARROWS"},{"char":"&#x21C8",desc:"UPWARDS PAIRED ARROWS"},{"char":"&#x21C9",desc:"RIGHTWARDS PAIRED ARROWS"},{"char":"&#x21CA",desc:"DOWNWARDS PAIRED ARROWS"},{"char":"&#x21CB",desc:"LEFTWARDS HARPOON OVER RIGHTWARDS HARPOON"},{"char":"&#x21CC",desc:"RIGHTWARDS HARPOON OVER LEFTWARDS HARPOON"},{"char":"&#x21CD",desc:"LEFTWARDS DOUBLE ARROW WITH STROKE"},{"char":"&#x21CE",desc:"LEFT RIGHT DOUBLE ARROW WITH STROKE"},{"char":"&#x21CF",desc:"RIGHTWARDS DOUBLE ARROW WITH STROKE"},{"char":"&#x21D0",desc:"LEFTWARDS DOUBLE ARROW"},{"char":"&#x21D1",desc:"UPWARDS DOUBLE ARROW"},{"char":"&#x21D2",desc:"RIGHTWARDS DOUBLE ARROW"},{"char":"&#x21D3",desc:"DOWNWARDS DOUBLE ARROW"},{"char":"&#x21D4",desc:"LEFT RIGHT DOUBLE ARROW"},{"char":"&#x21D5",desc:"UP DOWN DOUBLE ARROW"},{"char":"&#x21D6",desc:"NORTH WEST DOUBLE ARROW"},{"char":"&#x21D7",desc:"NORTH EAST DOUBLE ARROW"},{"char":"&#x21D8",desc:"SOUTH EAST DOUBLE ARROW"},{"char":"&#x21D9",desc:"SOUTH WEST DOUBLE ARROW"},{"char":"&#x21DA",desc:"LEFTWARDS TRIPLE ARROW"},{"char":"&#x21DB",desc:"RIGHTWARDS TRIPLE ARROW"},{"char":"&#x21DC",desc:"LEFTWARDS SQUIGGLE ARROW"},{"char":"&#x21DD",desc:"RIGHTWARDS SQUIGGLE ARROW"},{"char":"&#x21DE",desc:"UPWARDS ARROW WITH DOUBLE STROKE"},{"char":"&#x21DF",desc:"DOWNWARDS ARROW WITH DOUBLE STROKE"},{"char":"&#x21E0",desc:"LEFTWARDS DASHED ARROW"},{"char":"&#x21E1",desc:"UPWARDS DASHED ARROW"},{"char":"&#x21E2",desc:"RIGHTWARDS DASHED ARROW"},{"char":"&#x21E3",desc:"DOWNWARDS DASHED ARROW"},{"char":"&#x21E4",desc:"LEFTWARDS ARROW TO BAR"},{"char":"&#x21E5",desc:"RIGHTWARDS ARROW TO BAR"},{"char":"&#x21E6",desc:"LEFTWARDS WHITE ARROW"},{"char":"&#x21E7",desc:"UPWARDS WHITE ARROW"},{"char":"&#x21E8",desc:"RIGHTWARDS WHITE ARROW"},{"char":"&#x21E9",desc:"DOWNWARDS WHITE ARROW"},{"char":"&#x21EA",desc:"UPWARDS WHITE ARROW FROM BAR"},{"char":"&#x21EB",desc:"UPWARDS WHITE ARROW ON PEDESTAL"},{"char":"&#x21EC",desc:"UPWARDS WHITE ARROW ON PEDESTAL WITH HORIZONTAL BAR"},{"char":"&#x21ED",desc:"UPWARDS WHITE ARROW ON PEDESTAL WITH VERTICAL BAR"},{"char":"&#x21EE",desc:"UPWARDS WHITE DOUBLE ARROW"},{"char":"&#x21EF",desc:"UPWARDS WHITE DOUBLE ARROW ON PEDESTAL"},{"char":"&#x21F0",desc:"RIGHTWARDS WHITE ARROW FROM WALL"},{"char":"&#x21F1",desc:"NORTH WEST ARROW TO CORNER"},{"char":"&#x21F2",desc:"SOUTH EAST ARROW TO CORNER"},{"char":"&#x21F3",desc:"UP DOWN WHITE ARROW"},{"char":"&#x21F4",desc:"RIGHT ARROW WITH SMALL CIRCLE"},{"char":"&#x21F5",desc:"DOWNWARDS ARROW LEFTWARDS OF UPWARDS ARROW"},{"char":"&#x21F6",desc:"THREE RIGHTWARDS ARROWS"},{"char":"&#x21F7",desc:"LEFTWARDS ARROW WITH VERTICAL STROKE"},{"char":"&#x21F8",desc:"RIGHTWARDS ARROW WITH VERTICAL STROKE"},{"char":"&#x21F9",desc:"LEFT RIGHT ARROW WITH VERTICAL STROKE"},{"char":"&#x21FA",desc:"LEFTWARDS ARROW WITH DOUBLE VERTICAL STROKE"},{"char":"&#x21FB",desc:"RIGHTWARDS ARROW WITH DOUBLE VERTICAL STROKE"},{"char":"&#x21FC",desc:"LEFT RIGHT ARROW WITH DOUBLE VERTICAL STROKE"},{"char":"&#x21FD",desc:"LEFTWARDS OPEN-HEADED ARROW"},{"char":"&#x21FE",desc:"RIGHTWARDS OPEN-HEADED ARROW"},{"char":"&#x21FF",desc:"LEFT RIGHT OPEN-HEADED ARROW"}]},{title:"Math",list:[{"char":"&forall;",desc:"FOR ALL"},{"char":"&part;",desc:"PARTIAL DIFFERENTIAL"},{"char":"&exist;",desc:"THERE EXISTS"},{"char":"&empty;",desc:"EMPTY SET"},{"char":"&nabla;",desc:"NABLA"},{"char":"&isin;",desc:"ELEMENT OF"},{"char":"&notin;",desc:"NOT AN ELEMENT OF"},{"char":"&ni;",desc:"CONTAINS AS MEMBER"},{"char":"&prod;",desc:"N-ARY PRODUCT"},{"char":"&sum;",desc:"N-ARY SUMMATION"},{"char":"&minus;",desc:"MINUS SIGN"},{"char":"&lowast;",desc:"ASTERISK OPERATOR"},{"char":"&radic;",desc:"SQUARE ROOT"},{"char":"&prop;",desc:"PROPORTIONAL TO"},{"char":"&infin;",desc:"INFINITY"},{"char":"&ang;",desc:"ANGLE"},{"char":"&and;",desc:"LOGICAL AND"},{"char":"&or;",desc:"LOGICAL OR"},{"char":"&cap;",desc:"INTERSECTION"},{"char":"&cup;",desc:"UNION"},{"char":"&int;",desc:"INTEGRAL"},{"char":"&there4;",desc:"THEREFORE"},{"char":"&sim;",desc:"TILDE OPERATOR"},{"char":"&cong;",desc:"APPROXIMATELY EQUAL TO"},{"char":"&asymp;",desc:"ALMOST EQUAL TO"},{"char":"&ne;",desc:"NOT EQUAL TO"},{"char":"&equiv;",desc:"IDENTICAL TO"},{"char":"&le;",desc:"LESS-THAN OR EQUAL TO"},{"char":"&ge;",desc:"GREATER-THAN OR EQUAL TO"},{"char":"&sub;",desc:"SUBSET OF"},{"char":"&sup;",desc:"SUPERSET OF"},{"char":"&nsub;",desc:"NOT A SUBSET OF"},{"char":"&sube;",desc:"SUBSET OF OR EQUAL TO"},{"char":"&supe;",desc:"SUPERSET OF OR EQUAL TO"},{"char":"&oplus;",desc:"CIRCLED PLUS"},{"char":"&otimes;",desc:"CIRCLED TIMES"},{"char":"&perp;",desc:"UP TACK"}]},{title:"Misc",list:[{"char":"&spades;",desc:"BLACK SPADE SUIT"},{"char":"&clubs;",desc:"BLACK CLUB SUIT"},{"char":"&hearts;",desc:"BLACK HEART SUIT"},{"char":"&diams;",desc:"BLACK DIAMOND SUIT"},{"char":"&#x2669",desc:"QUARTER NOTE"},{"char":"&#x266A",desc:"EIGHTH NOTE"},{"char":"&#x266B",desc:"BEAMED EIGHTH NOTES"},{"char":"&#x266C",desc:"BEAMED SIXTEENTH NOTES"},{"char":"&#x266D",desc:"MUSIC FLAT SIGN"},{"char":"&#x266E",desc:"MUSIC NATURAL SIGN"},{"char":"&#x2600",desc:"BLACK SUN WITH RAYS"},{"char":"&#x2601",desc:"CLOUD"},{"char":"&#x2602",desc:"UMBRELLA"},{"char":"&#x2603",desc:"SNOWMAN"},{"char":"&#x2615",desc:"HOT BEVERAGE"},{"char":"&#x2618",desc:"SHAMROCK"},{"char":"&#x262F",desc:"YIN YANG"},{"char":"&#x2714",desc:"HEAVY CHECK MARK"},{"char":"&#x2716",desc:"HEAVY MULTIPLICATION X"},{"char":"&#x2744",desc:"SNOWFLAKE"},{"char":"&#x275B",desc:"HEAVY SINGLE TURNED COMMA QUOTATION MARK ORNAMENT"},{"char":"&#x275C",desc:"HEAVY SINGLE COMMA QUOTATION MARK ORNAMENT"},{"char":"&#x275D",desc:"HEAVY DOUBLE TURNED COMMA QUOTATION MARK ORNAMENT"},{"char":"&#x275E",desc:"HEAVY DOUBLE COMMA QUOTATION MARK ORNAMENT"},{"char":"&#x2764",desc:"HEAVY BLACK HEART"}]}]}),be.FE.PLUGINS.specialCharacters=function(s){var o,l,r="special_characters";function d(e,t){s.events.disableBlur(),e.focus(),t.preventDefault(),t.stopPropagation()}return{_init:function(){},show:function(){if(!o){var e="<h4>"+s.language.translate("Special Characters")+"</h4>",t=function(){for(var e='<div class="fr-special-characters-modal">',t=0;t<s.opts.specialCharactersSets.length;t++){for(var n=s.opts.specialCharactersSets[t],r=n.list,i='<div class="fr-special-characters-list"><p class="fr-special-characters-title">'+s.language.translate(n.title)+"</p>",a=0;a<r.length;a++){var o=r[a];i+='<span class="fr-command fr-special-character" tabIndex="-1" role="button" value="'+o["char"]+'" title="'+o.desc+'">'+o["char"]+'<span class="fr-sr-only">'+s.language.translate(o.desc)+"&nbsp;&nbsp;&nbsp;</span></span>"}e+=i+"</div>"}return e+="</div>"}(),n=s.modals.create(r,e,t);o=n.$modal,n.$head,l=n.$body,s.events.$on(be(s.o_win),"resize",function(){(o.data("instance")||s).modals.resize(r)}),s.events.bindClick(l,".fr-special-character",function(e){var t=o.data("instance")||s,n=be(e.currentTarget);t.specialCharacters.insert(n)}),s.events.$on(l,"keydown",function(e){var t=e.which,n=l.find("span.fr-special-character:focus:first");if(!(n.length||t!=be.FE.KEYCODE.F10||s.keys.ctrlKey(e)||e.shiftKey)&&e.altKey)return d(l.find("span.fr-special-character:first"),e),!1;if(t==be.FE.KEYCODE.TAB||t==be.FE.KEYCODE.ARROW_LEFT||t==be.FE.KEYCODE.ARROW_RIGHT){var r=null,i=null,a=!1;return t==be.FE.KEYCODE.ARROW_LEFT||t==be.FE.KEYCODE.ARROW_RIGHT?(i=t==be.FE.KEYCODE.ARROW_RIGHT,a=!0):i=!e.shiftKey,n.length?(a&&(r=i?n.nextAll("span.fr-special-character:first"):n.prevAll("span.fr-special-character:first")),r&&r.length||(r=i?n.parent().next().find("span.fr-special-character:first"):n.parent().prev().find("span.fr-special-character:"+(a?"last":"first"))).length||(r=l.find("span.fr-special-character:"+(i?"first":"last")))):r=l.find("span.fr-special-character:"+(i?"first":"last")),d(r,e),!1}if(t!=be.FE.KEYCODE.ENTER||!n.length)return!0;(o.data("instance")||s).specialCharacters.insert(n)},!0)}s.modals.show(r),s.modals.resize(r)},hide:function(){s.modals.hide(r)},insert:function(e){s.specialCharacters.hide(),s.undo.saveStep(),s.html.insert(e.attr("value"),!0),s.undo.saveStep()}}},be.FroalaEditor.DefineIcon("specialCharacters",{template:"text",NAME:"&#937;"}),be.FE.RegisterCommand("specialCharacters",{title:"Special Characters",icon:"specialCharacters",undo:!1,focus:!1,modal:!0,callback:function(){this.specialCharacters.show()},plugin:"specialCharacters",showOnMobile:!0}),be.extend(be.FE.POPUP_TEMPLATES,{"table.insert":"[_BUTTONS_][_ROWS_COLUMNS_]","table.edit":"[_BUTTONS_]","table.colors":"[_BUTTONS_][_COLORS_][_CUSTOM_COLOR_]"}),be.extend(be.FE.DEFAULTS,{tableInsertMaxSize:10,tableEditButtons:["tableHeader","tableRemove","|","tableRows","tableColumns","tableStyle","-","tableCells","tableCellBackground","tableCellVerticalAlign","tableCellHorizontalAlign","tableCellStyle"],tableInsertButtons:["tableBack","|"],tableResizer:!0,tableDefaultWidth:"100%",tableResizerOffset:5,tableResizingLimit:30,tableColorsButtons:["tableBack","|"],tableColors:["#61BD6D","#1ABC9C","#54ACD2","#2C82C9","#9365B8","#475577","#CCCCCC","#41A85F","#00A885","#3D8EB9","#2969B0","#553982","#28324E","#000000","#F7DA64","#FBA026","#EB6B56","#E25041","#A38F84","#EFEFEF","#FFFFFF","#FAC51C","#F37934","#D14841","#B8312F","#7C706B","#D1D5D8","REMOVE"],tableColorsStep:7,tableCellStyles:{"fr-highlighted":"Highlighted","fr-thick":"Thick"},tableStyles:{"fr-dashed-borders":"Dashed Borders","fr-alternate-rows":"Alternate Rows"},tableCellMultipleStyles:!0,tableMultipleStyles:!0,tableInsertHelper:!0,tableInsertHelperOffset:15}),be.FE.PLUGINS.table=function(T){var A,s,i,a,r,o,b;function u(){var e=S();if(e){var t=T.popups.get("table.edit");if(t||(t=p()),t){T.popups.setContainer("table.edit",T.$sc);var n=w(e),r=(n.left+n.right)/2,i=n.bottom;T.popups.show("table.edit",r,i,n.bottom-n.top),T.edit.isDisabled()&&(1<Q().length&&T.toolbar.disable(),T.$el.removeClass("fr-no-selection"),T.edit.on(),T.button.bulkRefresh(),T.selection.setAtEnd(T.$el.find(".fr-selected-cell:last").get(0)),T.selection.restore())}}}function d(){var e,t,n,r,i=S();if(i){var a=T.popups.get("table.colors");a||(a=function(){var e="";0<T.opts.tableColorsButtons.length&&(e='<div class="fr-buttons fr-table-colors-buttons">'+T.button.buildList(T.opts.tableColorsButtons)+"</div>");var t="";T.opts.colorsHEXInput&&(t='<div class="fr-table-colors-hex-layer fr-active fr-layer" id="fr-table-colors-hex-layer-'+T.id+'"><div class="fr-input-line"><input maxlength="7" id="fr-table-colors-hex-layer-text-'+T.id+'" type="text" placeholder="'+T.language.translate("HEX Color")+'" tabIndex="1" aria-required="true"></div><div class="fr-action-buttons"><button type="button" class="fr-command fr-submit" data-cmd="tableCellBackgroundCustomColor" tabIndex="2" role="button">'+T.language.translate("OK")+"</button></div></div>");var n={buttons:e,colors:function(){for(var e='<div class="fr-table-colors">',t=0;t<T.opts.tableColors.length;t++)0!==t&&t%T.opts.tableColorsStep==0&&(e+="<br>"),"REMOVE"!=T.opts.tableColors[t]?e+='<span class="fr-command" style="background: '+T.opts.tableColors[t]+';" tabIndex="-1" role="button" data-cmd="tableCellBackgroundColor" data-param1="'+T.opts.tableColors[t]+'"><span class="fr-sr-only">'+T.language.translate("Color")+" "+T.opts.tableColors[t]+"&nbsp;&nbsp;&nbsp;</span></span>":e+='<span class="fr-command" data-cmd="tableCellBackgroundColor" tabIndex="-1" role="button" data-param1="REMOVE" title="'+T.language.translate("Clear Formatting")+'">'+T.icon.create("tableColorRemove")+'<span class="fr-sr-only">'+T.language.translate("Clear Formatting")+"</span></span>";return e+="</div>"}(),custom_color:t},r=T.popups.create("table.colors",n);return T.events.$on(T.$wp,"scroll.table-colors",function(){T.popups.isVisible("table.colors")&&d()}),h=r,T.events.on("popup.tab",function(e){var t=be(e.currentTarget);if(!T.popups.isVisible("table.colors")||!t.is("span"))return!0;var n=e.which,r=!0;if(be.FE.KEYCODE.TAB==n){var i=h.find(".fr-buttons");r=!T.accessibility.focusToolbar(i,!!e.shiftKey)}else if(be.FE.KEYCODE.ARROW_UP==n||be.FE.KEYCODE.ARROW_DOWN==n||be.FE.KEYCODE.ARROW_LEFT==n||be.FE.KEYCODE.ARROW_RIGHT==n){var a=t.parent().find("span.fr-command"),o=a.index(t),s=T.opts.colorsStep,l=Math.floor(a.length/s),d=o%s,c=Math.floor(o/s),f=c*s+d,p=l*s;be.FE.KEYCODE.ARROW_UP==n?f=((f-s)%p+p)%p:be.FE.KEYCODE.ARROW_DOWN==n?f=(f+s)%p:be.FE.KEYCODE.ARROW_LEFT==n?f=((f-1)%p+p)%p:be.FE.KEYCODE.ARROW_RIGHT==n&&(f=(f+1)%p);var u=be(a.get(f));T.events.disableBlur(),u.focus(),r=!1}else be.FE.KEYCODE.ENTER==n&&(T.button.exec(t),r=!1);return!1===r&&(e.preventDefault(),e.stopPropagation()),r},!0),r;var h}()),T.popups.setContainer("table.colors",T.$sc);var o=w(i),s=(o.left+o.right)/2,l=o.bottom;e=T.popups.get("table.colors"),t=T.$el.find(".fr-selected-cell:first"),n=T.helpers.RGBToHex(t.css("background-color")),r=e.find(".fr-table-colors-hex-layer input"),e.find(".fr-selected-color").removeClass("fr-selected-color fr-active-item"),e.find('span[data-param1="'+n+'"]').addClass("fr-selected-color fr-active-item"),r.val(n).trigger("change"),T.popups.show("table.colors",s,l,o.bottom-o.top)}}function l(){0===Q().length&&T.toolbar.enable()}function c(e){if(e)return T.popups.onHide("table.insert",function(){T.popups.get("table.insert").find('.fr-table-size .fr-select-table-size > span[data-row="1"][data-col="1"]').trigger("mouseenter")}),!0;var t="";0<T.opts.tableInsertButtons.length&&(t='<div class="fr-buttons">'+T.button.buildList(T.opts.tableInsertButtons)+"</div>");var n,r={buttons:t,rows_columns:function(){for(var e='<div class="fr-table-size"><div class="fr-table-size-info">1 &times; 1</div><div class="fr-select-table-size">',t=1;t<=T.opts.tableInsertMaxSize;t++){for(var n=1;n<=T.opts.tableInsertMaxSize;n++){var r="inline-block";2<t&&!T.helpers.isMobile()&&(r="none");var i="fr-table-cell ";1==t&&1==n&&(i+=" hover"),e+='<span class="fr-command '+i+'" tabIndex="-1" data-cmd="tableInsert" data-row="'+t+'" data-col="'+n+'" data-param1="'+t+'" data-param2="'+n+'" style="display: '+r+';" role="button"><span></span><span class="fr-sr-only">'+t+" &times; "+n+"&nbsp;&nbsp;&nbsp;</span></span>"}e+='<div class="new-line"></div>'}return e+="</div></div>"}()},i=T.popups.create("table.insert",r);return T.events.$on(i,"mouseenter",".fr-table-size .fr-select-table-size .fr-table-cell",function(e){f(be(e.currentTarget))},!0),n=i,T.events.$on(n,"focus","[tabIndex]",function(e){var t=be(e.currentTarget);f(t)}),T.events.on("popup.tab",function(e){var t=be(e.currentTarget);if(!T.popups.isVisible("table.insert")||!t.is("span, a"))return!0;var n,r=e.which;if(be.FE.KEYCODE.ARROW_UP==r||be.FE.KEYCODE.ARROW_DOWN==r||be.FE.KEYCODE.ARROW_LEFT==r||be.FE.KEYCODE.ARROW_RIGHT==r){if(t.is("span.fr-table-cell")){var i=t.parent().find("span.fr-table-cell"),a=i.index(t),o=T.opts.tableInsertMaxSize,s=a%o,l=Math.floor(a/o);be.FE.KEYCODE.ARROW_UP==r?l=Math.max(0,l-1):be.FE.KEYCODE.ARROW_DOWN==r?l=Math.min(T.opts.tableInsertMaxSize-1,l+1):be.FE.KEYCODE.ARROW_LEFT==r?s=Math.max(0,s-1):be.FE.KEYCODE.ARROW_RIGHT==r&&(s=Math.min(T.opts.tableInsertMaxSize-1,s+1));var d=l*o+s,c=be(i.get(d));f(c),T.events.disableBlur(),c.focus(),n=!1}}else be.FE.KEYCODE.ENTER==r&&(T.button.exec(t),n=!1);return!1===n&&(e.preventDefault(),e.stopPropagation()),n},!0),i}function f(e){var t=e.data("row"),n=e.data("col"),r=e.parent();r.siblings(".fr-table-size-info").html(t+" &times; "+n),r.find("> span").removeClass("hover fr-active-item");for(var i=1;i<=T.opts.tableInsertMaxSize;i++)for(var a=0;a<=T.opts.tableInsertMaxSize;a++){var o=r.find('> span[data-row="'+i+'"][data-col="'+a+'"]');i<=t&&a<=n?o.addClass("hover"):i<=t+1||i<=2&&!T.helpers.isMobile()?o.css("display","inline-block"):2<i&&!T.helpers.isMobile()&&o.css("display","none")}e.addClass("fr-active-item")}function p(e){if(e)return T.popups.onHide("table.edit",l),!0;if(0<T.opts.tableEditButtons.length){var t={buttons:'<div class="fr-buttons">'+T.button.buildList(T.opts.tableEditButtons)+"</div>"},n=T.popups.create("table.edit",t);return T.events.$on(T.$wp,"scroll.table-edit",function(){T.popups.isVisible("table.edit")&&u()}),n}return!1}function h(){if(0<Q().length){var e=Z();T.selection.setBefore(e.get(0))||T.selection.setAfter(e.get(0)),T.selection.restore(),T.popups.hide("table.edit"),e.remove(),T.toolbar.enable()}}function g(e){var t=Z();if(0<t.length){if(0<T.$el.find("th.fr-selected-cell").length&&"above"==e)return;var n,r,i,a=S(),o=N(a);r="above"==e?o.min_i:o.max_i;var s="<tr>";for(n=0;n<a[r].length;n++)if("below"==e&&r<a.length-1&&a[r][n]==a[r+1][n]||"above"==e&&0<r&&a[r][n]==a[r-1][n]){if(0===n||0<n&&a[r][n]!=a[r][n-1]){var l=be(a[r][n]);l.attr("rowspan",parseInt(l.attr("rowspan"),10)+1)}}else s+="<td><br></td>";s+="</tr>",i=0<T.$el.find("th.fr-selected-cell").length&&"below"==e?be(t.find("tbody").not(t.find("table tbody"))):be(t.find("tr").not(t.find("table tr")).get(r)),"below"==e?"TBODY"==i.prop("tagName")?i.prepend(s):i.after(s):"above"==e&&(i.before(s),T.popups.isVisible("table.edit")&&u())}}function m(e,t,n){var r,i,a,o,s,l=0,d=S(n);if(e<(t=Math.min(t,d[0].length-1)))for(i=e;i<=t;i++)if(!(e<i&&d[0][i]==d[0][i-1])&&1<(o=Math.min(parseInt(d[0][i].getAttribute("colspan"),10)||1,t-e+1))&&d[0][i]==d[0][i+1])for(l=o-1,r=1;r<d.length;r++)if(d[r][i]!=d[r-1][i]){for(a=i;a<i+o;a++)if(1<(s=parseInt(d[r][a].getAttribute("colspan"),10)||1)&&d[r][a]==d[r][a+1])a+=l=Math.min(l,s-1);else if(!(l=Math.max(0,l-1)))break;if(!l)break}l&&E(d,l,"colspan",0,d.length-1,e,t)}function v(e,t,n){var r,i,a,o,s,l=0,d=S(n);if(e<(t=Math.min(t,d.length-1)))for(r=e;r<=t;r++)if(!(e<r&&d[r][0]==d[r-1][0])&&1<(o=Math.min(parseInt(d[r][0].getAttribute("rowspan"),10)||1,t-e+1))&&d[r][0]==d[r+1][0])for(l=o-1,i=1;i<d[0].length;i++)if(d[r][i]!=d[r][i-1]){for(a=r;a<r+o;a++)if(1<(s=parseInt(d[a][i].getAttribute("rowspan"),10)||1)&&d[a][i]==d[a+1][i])a+=l=Math.min(l,s-1);else if(!(l=Math.max(0,l-1)))break;if(!l)break}l&&E(d,l,"rowspan",e,t,0,d[0].length-1)}function E(e,t,n,r,i,a,o){var s,l,d;for(s=r;s<=i;s++)for(l=a;l<=o;l++)r<s&&e[s][l]==e[s-1][l]||a<l&&e[s][l]==e[s][l-1]||1<(d=parseInt(e[s][l].getAttribute(n),10)||1)&&(1<d-t?e[s][l].setAttribute(n,d-t):e[s][l].removeAttribute(n))}function C(e,t,n,r,i){v(e,t,i),m(n,r,i)}function t(e){var t=T.$el.find(".fr-selected-cell");"REMOVE"!=e?t.css("background-color",T.helpers.HEXtoRGB(e)):t.css("background-color",""),u()}function S(e){var d=[];return null==(e=e||null)&&0<Q().length&&(e=Z()),e&&e.find("tr:visible").not(e.find("table tr")).each(function(s,e){var t=be(e),l=0;t.find("> th, > td").each(function(e,t){for(var n=be(t),r=parseInt(n.attr("colspan"),10)||1,i=parseInt(n.attr("rowspan"),10)||1,a=s;a<s+i;a++)for(var o=l;o<l+r;o++)d[a]||(d[a]=[]),d[a][o]?l++:d[a][o]=t;l+=r})}),d}function R(e,t){for(var n=0;n<t.length;n++)for(var r=0;r<t[n].length;r++)if(t[n][r]==e)return{row:n,col:r}}function y(e,t,n){for(var r=e+1,i=t+1;r<n.length;){if(n[r][t]!=n[e][t]){r--;break}r++}for(r==n.length&&r--;i<n[e].length;){if(n[e][i]!=n[e][t]){i--;break}i++}return i==n[e].length&&i--,{row:r,col:i}}function _(){T.el.querySelector(".fr-cell-fixed")&&T.el.querySelector(".fr-cell-fixed").classList.remove("fr-cell-fixed"),T.el.querySelector(".fr-cell-handler")&&T.el.querySelector(".fr-cell-handler").classList.remove("fr-cell-handler")}function L(){var e=T.$el.find(".fr-selected-cell");0<e.length&&e.each(function(){var e=be(this);e.removeClass("fr-selected-cell"),""===e.attr("class")&&e.removeAttr("class")}),_()}function x(){T.events.disableBlur(),T.selection.clear(),T.$el.addClass("fr-no-selection"),T.$el.blur(),T.events.enableBlur()}function N(e){var t=T.$el.find(".fr-selected-cell");if(0<t.length){var n,r=e.length,i=0,a=e[0].length,o=0;for(n=0;n<t.length;n++){var s=R(t[n],e),l=y(s.row,s.col,e);r=Math.min(s.row,r),i=Math.max(l.row,i),a=Math.min(s.col,a),o=Math.max(l.col,o)}return{min_i:r,max_i:i,min_j:a,max_j:o}}return null}function w(e){var t=N(e),n=be(e[t.min_i][t.min_j]),r=be(e[t.min_i][t.max_j]),i=be(e[t.max_i][t.min_j]);return{left:n.offset().left,right:r.offset().left+r.outerWidth(),top:n.offset().top,bottom:i.offset().top+i.outerHeight()}}function O(t,n){if(be(t).is(n))L(),be(t).addClass("fr-selected-cell");else{x(),T.edit.off();var r=S(),i=R(t,r),a=R(n,r),o=function e(t,n,r,i,a){var o,s,l,d,c=t,f=n,p=r,u=i;for(o=c;o<=f;o++)(1<(parseInt(be(a[o][p]).attr("rowspan"),10)||1)||1<(parseInt(be(a[o][p]).attr("colspan"),10)||1))&&(d=y((l=R(a[o][p],a)).row,l.col,a),c=Math.min(l.row,c),f=Math.max(d.row,f),p=Math.min(l.col,p),u=Math.max(d.col,u)),(1<(parseInt(be(a[o][u]).attr("rowspan"),10)||1)||1<(parseInt(be(a[o][u]).attr("colspan"),10)||1))&&(d=y((l=R(a[o][u],a)).row,l.col,a),c=Math.min(l.row,c),f=Math.max(d.row,f),p=Math.min(l.col,p),u=Math.max(d.col,u));for(s=p;s<=u;s++)(1<(parseInt(be(a[c][s]).attr("rowspan"),10)||1)||1<(parseInt(be(a[c][s]).attr("colspan"),10)||1))&&(d=y((l=R(a[c][s],a)).row,l.col,a),c=Math.min(l.row,c),f=Math.max(d.row,f),p=Math.min(l.col,p),u=Math.max(d.col,u)),(1<(parseInt(be(a[f][s]).attr("rowspan"),10)||1)||1<(parseInt(be(a[f][s]).attr("colspan"),10)||1))&&(d=y((l=R(a[f][s],a)).row,l.col,a),c=Math.min(l.row,c),f=Math.max(d.row,f),p=Math.min(l.col,p),u=Math.max(d.col,u));return c==t&&f==n&&p==r&&u==i?{min_i:t,max_i:n,min_j:r,max_j:i}:e(c,f,p,u,a)}(Math.min(i.row,a.row),Math.max(i.row,a.row),Math.min(i.col,a.col),Math.max(i.col,a.col),r);L(),t.classList.add("fr-cell-fixed"),n.classList.add("fr-cell-handler");for(var s=o.min_i;s<=o.max_i;s++)for(var l=o.min_j;l<=o.max_j;l++)be(r[s][l]).addClass("fr-selected-cell")}}function I(e){var t=null,n=be(e.target);return"TD"==e.target.tagName||"TH"==e.target.tagName?t=e.target:0<n.closest("td").length?t=n.closest("td").get(0):0<n.closest("th").length&&(t=n.closest("th").get(0)),0===T.$el.find(t).length?null:t}function D(){L(),T.popups.hide("table.edit")}function e(e){var t=I(e);if("false"==be(t).parents("[contenteditable]:not(.fr-element):not(.fr-img-caption):not(body):first").attr("contenteditable"))return!0;if(0<Q().length&&!t&&D(),!T.edit.isDisabled()||T.popups.isVisible("table.edit"))if(1!=e.which||1==e.which&&T.helpers.isMac()&&e.ctrlKey)(3==e.which||1==e.which&&T.helpers.isMac()&&e.ctrlKey)&&t&&D();else if(a=!0,t){0<Q().length&&!e.shiftKey&&D(),e.stopPropagation(),T.events.trigger("image.hideResizer"),T.events.trigger("video.hideResizer"),i=!0;var n=t.tagName.toLowerCase();e.shiftKey&&0<T.$el.find(n+".fr-selected-cell").length?be(T.$el.find(n+".fr-selected-cell").closest("table")).is(be(t).closest("table"))?O(r,t):x():((T.keys.ctrlKey(e)||e.shiftKey)&&(1<Q().length||0===be(t).find(T.selection.element()).length&&!be(t).is(T.selection.element()))&&x(),r=t,0<T.opts.tableEditButtons.length&&O(r,r))}}function n(e){if(i||T.$tb.is(e.target)||T.$tb.is(be(e.target).closest(T.$tb.get(0)))||(0<Q().length&&T.toolbar.enable(),L()),!(1!=e.which||1==e.which&&T.helpers.isMac()&&e.ctrlKey)){if(a=!1,i)i=!1,I(e)||1!=Q().length?0<Q().length&&(T.selection.isCollapsed()?u():L()):L();if(b){b=!1,A.removeClass("fr-moving"),T.$el.removeClass("fr-no-selection"),T.edit.on();var t=parseFloat(A.css("left"))+T.opts.tableResizerOffset+T.$wp.offset().left;T.opts.iframe&&(t-=T.$iframe.offset().left),A.data("release-position",t),A.removeData("max-left"),A.removeData("max-right"),function(){var e=A.data("origin"),t=A.data("release-position");if(e!==t){var n=A.data("first"),r=A.data("second"),i=A.data("table"),a=i.outerWidth();if(T.undo.canDo()||T.undo.saveStep(),null!==n&&null!==r){var o,s,l,d=S(i),c=[],f=[],p=[],u=[];for(o=0;o<d.length;o++)s=be(d[o][n]),l=be(d[o][r]),c[o]=s.outerWidth(),p[o]=l.outerWidth(),f[o]=c[o]/a*100,u[o]=p[o]/a*100;for(o=0;o<d.length;o++)if(s=be(d[o][n]),l=be(d[o][r]),d[o][n]!=d[o][r]){var h=(f[o]*(c[o]+t-e)/c[o]).toFixed(4);s.css("width",h+"%"),l.css("width",(f[o]+u[o]-h).toFixed(4)+"%")}}else{var g,m=i.parent(),v=a/m.width()*100,E=(parseInt(i.css("margin-left"),10)||0)/m.width()*100,b=(parseInt(i.css("margin-right"),10)||0)/m.width()*100;"rtl"==T.opts.direction&&0===r||"rtl"!=T.opts.direction&&0!==r?(g=(a+t-e)/a*v,i.css("margin-right","calc(100% - "+Math.round(g).toFixed(4)+"% - "+Math.round(E).toFixed(4)+"%)")):("rtl"==T.opts.direction&&0!==r||"rtl"!=T.opts.direction&&0===r)&&(g=(a-t+e)/a*v,i.css("margin-left","calc(100% - "+Math.round(g).toFixed(4)+"% - "+Math.round(b).toFixed(4)+"%)")),i.css("width",Math.round(g).toFixed(4)+"%")}T.selection.restore(),T.undo.saveStep(),T.events.trigger("table.resized",[i.get(0)])}A.removeData("origin"),A.removeData("release-position"),A.removeData("first"),A.removeData("second"),A.removeData("table")}(),B()}}}function k(e){if(!0===i&&0<T.opts.tableEditButtons.length){if(be(e.currentTarget).closest("table").is(Z())){if("TD"==e.currentTarget.tagName&&0===T.$el.find("th.fr-selected-cell").length)return void O(r,e.currentTarget);if("TH"==e.currentTarget.tagName&&0===T.$el.find("td.fr-selected-cell").length)return void O(r,e.currentTarget)}x()}}function F(e,t,n,r){for(var i,a=t;a!=T.el&&"TD"!=a.tagName&&"TH"!=a.tagName&&("up"==r?i=a.previousElementSibling:"down"==r&&(i=a.nextElementSibling),!i);)a=a.parentNode;"TD"==a.tagName||"TH"==a.tagName?function(e,t){for(var n=e;n&&"TABLE"!=n.tagName&&n.parentNode!=T.el;)n=n.parentNode;if(n&&"TABLE"==n.tagName){var r=S(be(n));"up"==t?M(R(e,r),n,r):"down"==t&&$(R(e,r),n,r)}}(a,r):i&&("up"==r&&T.selection.setAtEnd(i),"down"==r&&T.selection.setAtStart(i))}function M(e,t,n){0<e.row?T.selection.setAtEnd(n[e.row-1][e.col]):F(0,t,0,"up")}function $(e,t,n){var r=parseInt(n[e.row][e.col].getAttribute("rowspan"),10)||1;e.row<n.length-r?T.selection.setAtStart(n[e.row+r][e.col]):F(0,t,0,"down")}function B(){A&&(A.find("div").css("opacity",0),A.css("top",0),A.css("left",0),A.css("height",0),A.find("div").css("height",0),A.hide())}function P(){s&&s.removeClass("fr-visible").css("left","-9999px")}function U(e,t){var n=be(t),r=n.closest("table"),i=r.parent();if(t&&"TD"!=t.tagName&&"TH"!=t.tagName&&(0<n.closest("td").length?t=n.closest("td"):0<n.closest("th").length&&(t=n.closest("th"))),!t||"TD"!=t.tagName&&"TH"!=t.tagName)A&&n.get(0)!=A.get(0)&&n.parent().get(0)!=A.get(0)&&T.core.sameInstance(A)&&B();else{if(n=be(t),0===T.$el.find(n).length)return!1;var a=n.offset().left-1,o=a+n.outerWidth();if(Math.abs(e.pageX-a)<=T.opts.tableResizerOffset||Math.abs(o-e.pageX)<=T.opts.tableResizerOffset){var s,l,d,c,f,p=S(r),u=R(t,p),h=y(u.row,u.col,p),g=r.offset().top,m=r.outerHeight()-1;"rtl"!=T.opts.direction?e.pageX-a<=T.opts.tableResizerOffset?(d=a,0<u.col?(c=a-Y(u.col-1,p)+T.opts.tableResizingLimit,f=a+Y(u.col,p)-T.opts.tableResizingLimit,s=u.col-1,l=u.col):(s=null,l=0,c=r.offset().left-1-parseInt(r.css("margin-left"),10),f=r.offset().left-1+r.width()-p[0].length*T.opts.tableResizingLimit)):o-e.pageX<=T.opts.tableResizerOffset&&(d=o,h.col<p[h.row].length&&p[h.row][h.col+1]?(c=o-Y(h.col,p)+T.opts.tableResizingLimit,f=o+Y(h.col+1,p)-T.opts.tableResizingLimit,s=h.col,l=h.col+1):(s=h.col,l=null,c=r.offset().left-1+p[0].length*T.opts.tableResizingLimit,f=i.offset().left-1+i.width()+parseFloat(i.css("padding-left")))):o-e.pageX<=T.opts.tableResizerOffset?(d=o,0<u.col?(c=o-Y(u.col,p)+T.opts.tableResizingLimit,f=o+Y(u.col-1,p)-T.opts.tableResizingLimit,s=u.col,l=u.col-1):(s=null,l=0,c=r.offset().left+p[0].length*T.opts.tableResizingLimit,f=i.offset().left-1+i.width()+parseFloat(i.css("padding-left")))):e.pageX-a<=T.opts.tableResizerOffset&&(d=a,h.col<p[h.row].length&&p[h.row][h.col+1]?(c=a-Y(h.col+1,p)+T.opts.tableResizingLimit,f=a+Y(h.col,p)-T.opts.tableResizingLimit,s=h.col+1,l=h.col):(s=h.col,l=null,c=i.offset().left+parseFloat(i.css("padding-left")),f=r.offset().left-1+r.width()-p[0].length*T.opts.tableResizingLimit)),A||(T.shared.$table_resizer||(T.shared.$table_resizer=be('<div class="fr-table-resizer"><div></div></div>')),A=T.shared.$table_resizer,T.events.$on(A,"mousedown",function(e){return!T.core.sameInstance(A)||(0<Q().length&&D(),1==e.which?(T.selection.save(),b=!0,A.addClass("fr-moving"),x(),T.edit.off(),A.find("div").css("opacity",1),!1):void 0)}),T.events.$on(A,"mousemove",function(e){if(!T.core.sameInstance(A))return!0;b&&(T.opts.iframe&&(e.pageX-=T.$iframe.offset().left),V(e))}),T.events.on("shared.destroy",function(){A.html("").removeData().remove(),A=null},!0),T.events.on("destroy",function(){T.$el.find(".fr-selected-cell").removeClass("fr-selected-cell"),A.hide().appendTo(be("body:first"))},!0)),A.data("table",r),A.data("first",s),A.data("second",l),A.data("instance",T),T.$wp.append(A);var v=d-T.win.pageXOffset-T.opts.tableResizerOffset-T.$wp.offset().left,E=g-T.$wp.offset().top+T.$wp.scrollTop();T.opts.iframe&&(v+=T.$iframe.offset().left,E+=T.$iframe.offset().top,c+=T.$iframe.offset().left,f+=T.$iframe.offset().left),A.data("max-left",c),A.data("max-right",f),A.data("origin",d-T.win.pageXOffset),A.css("top",E),A.css("left",v),A.css("height",m),A.find("div").css("height",m),A.css("padding-left",T.opts.tableResizerOffset),A.css("padding-right",T.opts.tableResizerOffset),A.show()}else T.core.sameInstance(A)&&B()}}function K(e,t){if(T.$box.find(".fr-line-breaker").is(":visible"))return!1;s||q(),T.$box.append(s),s.data("instance",T);var n,r=be(t).find("tr:first"),i=e.pageX,a=0,o=0;T.opts.iframe&&(a+=T.$iframe.offset().left-T.helpers.scrollLeft(),o+=T.$iframe.offset().top-T.helpers.scrollTop()),r.find("th, td").each(function(){var e=be(this);return e.offset().left<=i&&i<e.offset().left+e.outerWidth()/2?(n=parseInt(s.find("a").css("width"),10),s.css("top",o+e.offset().top-T.$box.offset().top-T.win.pageYOffset-n-5),s.css("left",a+e.offset().left-T.$box.offset().left-T.win.pageXOffset-n/2),s.data("selected-cell",e),s.data("position","before"),s.addClass("fr-visible"),!1):e.offset().left+e.outerWidth()/2<=i&&i<e.offset().left+e.outerWidth()?(n=parseInt(s.find("a").css("width"),10),s.css("top",o+e.offset().top-T.$box.offset().top-T.win.pageYOffset-n-5),s.css("left",a+e.offset().left-T.$box.offset().left+e.outerWidth()-T.win.pageXOffset-n/2),s.data("selected-cell",e),s.data("position","after"),s.addClass("fr-visible"),!1):void 0})}function H(e,t){if(T.$box.find(".fr-line-breaker").is(":visible"))return!1;s||q(),T.$box.append(s),s.data("instance",T);var n,r=be(t),i=e.pageY,a=0,o=0;T.opts.iframe&&(a+=T.$iframe.offset().left-T.helpers.scrollLeft(),o+=T.$iframe.offset().top-T.helpers.scrollTop()),r.find("tr").each(function(){var e=be(this);return e.offset().top<=i&&i<e.offset().top+e.outerHeight()/2?(n=parseInt(s.find("a").css("width"),10),s.css("top",o+e.offset().top-T.$box.offset().top-T.win.pageYOffset-n/2),s.css("left",a+e.offset().left-T.$box.offset().left-T.win.pageXOffset-n-5),s.data("selected-cell",e.find("td:first")),s.data("position","above"),s.addClass("fr-visible"),!1):e.offset().top+e.outerHeight()/2<=i&&i<e.offset().top+e.outerHeight()?(n=parseInt(s.find("a").css("width"),10),s.css("top",o+e.offset().top-T.$box.offset().top+e.outerHeight()-T.win.pageYOffset-n/2),s.css("left",a+e.offset().left-T.$box.offset().left-T.win.pageXOffset-n-5),s.data("selected-cell",e.find("td:first")),s.data("position","below"),s.addClass("fr-visible"),!1):void 0})}function W(e){o=null;var t=T.doc.elementFromPoint(e.pageX-T.win.pageXOffset,e.pageY-T.win.pageYOffset);T.opts.tableResizer&&(!T.popups.areVisible()||T.popups.areVisible()&&T.popups.isVisible("table.edit"))&&U(e,t),!T.opts.tableInsertHelper||T.popups.areVisible()||T.$tb.hasClass("fr-inline")&&T.$tb.is(":visible")||function(e,t){if(0===Q().length){var n,r,i;if(t&&("HTML"==t.tagName||"BODY"==t.tagName||T.node.isElement(t)))for(n=1;n<=T.opts.tableInsertHelperOffset;n++){if(r=T.doc.elementFromPoint(e.pageX-T.win.pageXOffset,e.pageY-T.win.pageYOffset+n),be(r).hasClass("fr-tooltip"))return;if(r&&("TH"==r.tagName||"TD"==r.tagName||"TABLE"==r.tagName)&&(be(r).parents(".fr-wrapper").length||T.opts.iframe))return K(e,be(r).closest("table"));if(i=T.doc.elementFromPoint(e.pageX-T.win.pageXOffset+n,e.pageY-T.win.pageYOffset),be(i).hasClass("fr-tooltip"))return;if(i&&("TH"==i.tagName||"TD"==i.tagName||"TABLE"==i.tagName)&&(be(i).parents(".fr-wrapper").length||T.opts.iframe))return H(e,be(i).closest("table"))}T.core.sameInstance(s)&&P()}}(e,t)}function z(){if(b){var e=A.data("table").offset().top-T.win.pageYOffset;T.opts.iframe&&(e+=T.$iframe.offset().top-T.helpers.scrollTop()),A.css("top",e)}}function Y(e,t){var n,r=be(t[0][e]).outerWidth();for(n=1;n<t.length;n++)r=Math.min(r,be(t[n][e]).outerWidth());return r}function G(e,t,n){var r,i=0;for(r=e;r<=t;r++)i+=Y(r,n);return i}function V(e){if(1<Q().length&&a&&x(),!1===a&&!1===i&&!1===b)o&&clearTimeout(o),T.edit.isDisabled()&&!T.popups.isVisible("table.edit")||(o=setTimeout(W,30,e));else if(b){var t=e.pageX-T.win.pageXOffset;T.opts.iframe&&(t+=T.$iframe.offset().left);var n=A.data("max-left"),r=A.data("max-right");n<=t&&t<=r?A.css("left",t-T.opts.tableResizerOffset-T.$wp.offset().left):t<n&&parseFloat(A.css("left"),10)>n-T.opts.tableResizerOffset?A.css("left",n-T.opts.tableResizerOffset-T.$wp.offset().left):r<t&&parseFloat(A.css("left"),10)<r-T.opts.tableResizerOffset&&A.css("left",r-T.opts.tableResizerOffset-T.$wp.offset().left)}else a&&P()}function X(e){T.node.isEmpty(e.get(0))?e.prepend(be.FE.MARKERS):e.prepend(be.FE.START_MARKER).append(be.FE.END_MARKER)}function q(){T.shared.$ti_helper||(T.shared.$ti_helper=be('<div class="fr-insert-helper"><a class="fr-floating-btn" role="button" tabIndex="-1" title="'+T.language.translate("Insert")+'"><svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><path d="M22,16.75 L16.75,16.75 L16.75,22 L15.25,22.000 L15.25,16.75 L10,16.75 L10,15.25 L15.25,15.25 L15.25,10 L16.75,10 L16.75,15.25 L22,15.25 L22,16.75 Z"/></svg></a></div>'),T.events.bindClick(T.shared.$ti_helper,"a",function(){var e=s.data("selected-cell"),t=s.data("position"),n=s.data("instance")||T;"before"==t?(T.undo.saveStep(),e.addClass("fr-selected-cell"),n.table.insertColumn(t),e.removeClass("fr-selected-cell"),T.undo.saveStep()):"after"==t?(T.undo.saveStep(),e.addClass("fr-selected-cell"),n.table.insertColumn(t),e.removeClass("fr-selected-cell"),T.undo.saveStep()):"above"==t?(T.undo.saveStep(),e.addClass("fr-selected-cell"),n.table.insertRow(t),e.removeClass("fr-selected-cell"),T.undo.saveStep()):"below"==t&&(T.undo.saveStep(),e.addClass("fr-selected-cell"),n.table.insertRow(t),e.removeClass("fr-selected-cell"),T.undo.saveStep()),P()}),T.events.on("shared.destroy",function(){T.shared.$ti_helper.html("").removeData().remove(),T.shared.$ti_helper=null},!0),T.events.$on(T.shared.$ti_helper,"mousemove",function(e){e.stopPropagation()},!0),T.events.$on(be(T.o_win),"scroll",function(){P()},!0),T.events.$on(T.$wp,"scroll",function(){P()},!0)),s=T.shared.$ti_helper,T.events.on("destroy",function(){s=null}),T.tooltip.bind(T.$box,".fr-insert-helper > a.fr-floating-btn")}function j(){r=null,clearTimeout(o)}function Q(){return T.el.querySelectorAll(".fr-selected-cell")}function Z(){var e=Q();if(e.length){for(var t=e[0];t&&"TABLE"!=t.tagName&&t.parentNode!=T.el;)t=t.parentNode;return t&&"TABLE"==t.tagName?be(t):be([])}return be([])}return{_init:function(){if(!T.$wp)return!1;if(!T.helpers.isMobile()){b=i=a=!1,T.events.$on(T.$el,"mousedown",e),T.popups.onShow("image.edit",function(){L(),i=a=!1}),T.popups.onShow("link.edit",function(){L(),i=a=!1}),T.events.on("commands.mousedown",function(e){0<e.parents(".fr-toolbar").length&&L()}),T.events.$on(T.$el,"mouseenter","th, td",k),T.events.$on(T.$win,"mouseup",n),T.opts.iframe&&T.events.$on(be(T.o_win),"mouseup",n),T.events.$on(T.$win,"mousemove",V),T.events.$on(be(T.o_win),"scroll",z),T.events.on("contentChanged",function(){0<Q().length&&(u(),T.$el.find("img").on("load.selected-cells",function(){be(this).off("load.selected-cells"),0<Q().length&&u()}))}),T.events.$on(be(T.o_win),"resize",function(){L()}),T.events.on("toolbar.esc",function(){if(0<Q().length)return T.events.disableBlur(),T.events.focus(),!1},!0),T.events.$on(be(T.o_win),"keydown",function(){a&&i&&(i=a=!1,T.$el.removeClass("fr-no-selection"),T.edit.on(),T.selection.setAtEnd(T.$el.find(".fr-selected-cell:last").get(0)),T.selection.restore(),L())}),T.events.$on(T.$el,"keydown",function(e){e.shiftKey?!1===function(e){var t=Q();if(0<t.length){var n,r,i=S(),a=e.which;1==t.length?r=n=t[0]:(n=T.el.querySelector(".fr-cell-fixed"),r=T.el.querySelector(".fr-cell-handler"));var o=R(r,i);if(be.FE.KEYCODE.ARROW_RIGHT==a){if(o.col<i[0].length-1)return O(n,i[o.row][o.col+1]),!1}else if(be.FE.KEYCODE.ARROW_DOWN==a){if(o.row<i.length-1)return O(n,i[o.row+1][o.col]),!1}else if(be.FE.KEYCODE.ARROW_LEFT==a){if(0<o.col)return O(n,i[o.row][o.col-1]),!1}else if(be.FE.KEYCODE.ARROW_UP==a&&0<o.row)return O(n,i[o.row-1][o.col]),!1}}(e)&&setTimeout(function(){u()},0):function(e){var t=e.which,n=T.selection.blocks();if(n.length&&("TD"==(n=n[0]).tagName||"TH"==n.tagName)){for(var r=n;r&&"TABLE"!=r.tagName&&r.parentNode!=T.el;)r=r.parentNode;if(r&&"TABLE"==r.tagName&&(be.FE.KEYCODE.ARROW_LEFT==t||be.FE.KEYCODE.ARROW_UP==t||be.FE.KEYCODE.ARROW_RIGHT==t||be.FE.KEYCODE.ARROW_DOWN==t)&&(0<Q().length&&D(),T.browser.webkit&&(be.FE.KEYCODE.ARROW_UP==t||be.FE.KEYCODE.ARROW_DOWN==t))){var i=T.selection.ranges(0).startContainer;if(i.nodeType==Node.TEXT_NODE&&(be.FE.KEYCODE.ARROW_UP==t&&i.previousSibling||be.FE.KEYCODE.ARROW_DOWN==t&&i.nextSibling))return;e.preventDefault(),e.stopPropagation();var a=S(be(r)),o=R(n,a);be.FE.KEYCODE.ARROW_UP==t?M(o,r,a):be.FE.KEYCODE.ARROW_DOWN==t&&$(o,r,a),T.selection.restore()}}}(e)}),T.events.on("keydown",function(e){if(!1===function(e){if(e.which==be.FE.KEYCODE.TAB){var t;if(0<Q().length)t=T.$el.find(".fr-selected-cell:last");else{var n=T.selection.element();"TD"==n.tagName||"TH"==n.tagName?t=be(n):n!=T.el&&(0<be(n).parentsUntil(T.$el,"td").length?t=be(n).parents("td:first"):0<be(n).parentsUntil(T.$el,"th").length&&(t=be(n).parents("th:first")))}if(t)return e.preventDefault(),!!(0<be(T.selection.element()).parentsUntil(T.$el,"ol, ul").length&&(0<be(T.selection.element()).parents("li").prev().length||be(T.selection.element()).is("li")&&0<be(T.selection.element()).prev().length))||(D(),e.shiftKey?0<t.prev().length?X(t.prev()):0<t.closest("tr").length&&0<t.closest("tr").prev().length?X(t.closest("tr").prev().find("td:last")):0<t.closest("tbody").length&&0<t.closest("table").find("thead tr").length&&X(t.closest("table").find("thead tr th:last")):0<t.next().length?X(t.next()):0<t.closest("tr").length&&0<t.closest("tr").next().length?X(t.closest("tr").next().find("td:first")):0<t.closest("thead").length&&0<t.closest("table").find("tbody tr").length?X(t.closest("table").find("tbody tr td:first")):(t.addClass("fr-selected-cell"),g("below"),L(),X(t.closest("tr").next().find("td:first"))),T.selection.restore(),!1)}}(e))return!1;var t=Q();if(0<t.length){if(0<t.length&&T.keys.ctrlKey(e)&&e.which==be.FE.KEYCODE.A)return L(),T.popups.isVisible("table.edit")&&T.popups.hide("table.edit"),t=[],!0;if(e.which==be.FE.KEYCODE.ESC&&T.popups.isVisible("table.edit"))return L(),T.popups.hide("table.edit"),e.preventDefault(),e.stopPropagation(),e.stopImmediatePropagation(),!(t=[]);if(1<t.length&&(e.which==be.FE.KEYCODE.BACKSPACE||e.which==be.FE.KEYCODE.DELETE)){T.undo.saveStep();for(var n=0;n<t.length;n++)be(t[n]).html("<br>"),n==t.length-1&&be(t[n]).prepend(be.FE.MARKERS);return T.selection.restore(),T.undo.saveStep(),!(t=[])}if(1<t.length&&e.which!=be.FE.KEYCODE.F10&&!T.keys.isBrowserAction(e))return e.preventDefault(),!(t=[])}else if(!(t=[])===function(e){if(e.altKey&&e.which==be.FE.KEYCODE.SPACE){var t,n=T.selection.element();if("TD"==n.tagName||"TH"==n.tagName?t=n:0<be(n).closest("td").length?t=be(n).closest("td").get(0):0<be(n).closest("th").length&&(t=be(n).closest("th").get(0)),t)return e.preventDefault(),O(t,t),u(),!1}}(e))return!1},!0);var t=[];T.events.on("html.beforeGet",function(){t=Q();for(var e=0;e<t.length;e++)t[e].className=(t[e].className||"").replace(/fr-selected-cell/g,"")}),T.events.on("html.afterGet",function(){for(var e=0;e<t.length;e++)t[e].className=(t[e].className?t[e].className.trim()+" ":"")+"fr-selected-cell";t=[]}),c(!0),p(!0)}T.events.on("destroy",j)},insert:function(e,t){var n,r,i="<table "+(T.opts.tableDefaultWidth?'style="width: '+T.opts.tableDefaultWidth+';" ':"")+'class="fr-inserted-table"><tbody>',a=100/t;for(n=0;n<e;n++){for(i+="<tr>",r=0;r<t;r++)i+="<td"+(T.opts.tableDefaultWidth?' style="width: '+a.toFixed(4)+'%;"':"")+">",0===n&&0===r&&(i+=be.FE.MARKERS),i+="<br></td>";i+="</tr>"}i+="</tbody></table>",T.html.insert(i),T.selection.restore();var o=T.$el.find(".fr-inserted-table");o.removeClass("fr-inserted-table"),T.events.trigger("table.inserted",[o.get(0)])},remove:h,insertRow:g,deleteRow:function(){var e=Z();if(0<e.length){var t,n,r,i=S(),a=N(i);if(0===a.min_i&&a.max_i==i.length-1)h();else{for(t=a.max_i;t>=a.min_i;t--){for(r=be(e.find("tr").not(e.find("table tr")).get(t)),n=0;n<i[t].length;n++)if(0===n||i[t][n]!=i[t][n-1]){var o=be(i[t][n]);if(1<parseInt(o.attr("rowspan"),10)){var s=parseInt(o.attr("rowspan"),10)-1;1==s?o.removeAttr("rowspan"):o.attr("rowspan",s)}if(t<i.length-1&&i[t][n]==i[t+1][n]&&(0===t||i[t][n]!=i[t-1][n])){for(var l=i[t][n],d=n;0<d&&i[t][d]==i[t][d-1];)d--;0===d?be(e.find("tr").not(e.find("table tr")).get(t+1)).prepend(l):be(i[t+1][d-1]).after(l)}}var c=r.parent();r.remove(),0===c.find("tr").length&&c.remove(),i=S(e)}C(0,i.length-1,0,i[0].length-1,e),0<a.min_i?T.selection.setAtEnd(i[a.min_i-1][0]):T.selection.setAtEnd(i[0][0]),T.selection.restore(),T.popups.hide("table.edit")}}},insertColumn:function(l){var e=Z();if(0<e.length){var d,c=S(),t=N(c);d="before"==l?t.min_j:t.max_j;var n,f=100/c[0].length,p=100/(c[0].length+1);e.find("th, td").each(function(){(n=be(this)).data("old-width",n.outerWidth()/e.outerWidth()*100)}),e.find("tr").not(e.find("table tr")).each(function(e){for(var t,n=be(this),r=0,i=0;r-1<d;){if(!(t=n.find("> th, > td").get(i))){t=null;break}t==c[e][r]?(r+=parseInt(be(t).attr("colspan"),10)||1,i++):(r+=parseInt(be(c[e][r]).attr("colspan"),10)||1,"after"==l&&(t=0===i?-1:n.find("> th, > td").get(i-1)))}var a,o=be(t);if("after"==l&&d<r-1||"before"==l&&0<d&&c[e][d]==c[e][d-1]){if(0===e||0<e&&c[e][d]!=c[e-1][d]){var s=parseInt(o.attr("colspan"),10)+1;o.attr("colspan",s),o.css("width",(o.data("old-width")*p/f+p).toFixed(4)+"%"),o.removeData("old-width")}}else a=0<n.find("th").length?'<th style="width: '+p.toFixed(4)+'%;"><br></th>':'<td style="width: '+p.toFixed(4)+'%;"><br></td>',-1==t?n.prepend(a):null==t?n.append(a):"before"==l?o.before(a):"after"==l&&o.after(a)}),e.find("th, td").each(function(){(n=be(this)).data("old-width")&&(n.css("width",(n.data("old-width")*p/f).toFixed(4)+"%"),n.removeData("old-width"))}),T.popups.isVisible("table.edit")&&u()}},deleteColumn:function(){var e=Z();if(0<e.length){var t,n,r,i=S(),a=N(i);if(0===a.min_j&&a.max_j==i[0].length-1)h();else{var o=0;for(t=0;t<i.length;t++)for(n=0;n<i[0].length;n++)(r=be(i[t][n])).hasClass("fr-selected-cell")||(r.data("old-width",r.outerWidth()/e.outerWidth()*100),(n<a.min_j||n>a.max_j)&&(o+=r.outerWidth()/e.outerWidth()*100));for(o/=i.length,n=a.max_j;n>=a.min_j;n--)for(t=0;t<i.length;t++)if(0===t||i[t][n]!=i[t-1][n])if(r=be(i[t][n]),1<(parseInt(r.attr("colspan"),10)||1)){var s=parseInt(r.attr("colspan"),10)-1;1==s?r.removeAttr("colspan"):r.attr("colspan",s),r.css("width",(100*(r.data("old-width")-Y(n,i))/o).toFixed(4)+"%"),r.removeData("old-width")}else{var l=be(r.parent().get(0));r.remove(),0===l.find("> th, > td").length&&(0===l.prev().length||0===l.next().length||l.prev().find("> th[rowspan], > td[rowspan]").length<l.prev().find("> th, > td").length)&&l.remove()}C(0,i.length-1,0,i[0].length-1,e),0<a.min_j?T.selection.setAtEnd(i[a.min_i][a.min_j-1]):T.selection.setAtEnd(i[a.min_i][0]),T.selection.restore(),T.popups.hide("table.edit"),e.find("th, td").each(function(){(r=be(this)).data("old-width")&&(r.css("width",(100*r.data("old-width")/o).toFixed(4)+"%"),r.removeData("old-width"))})}}},mergeCells:function(){if(1<Q().length&&(0===T.$el.find("th.fr-selected-cell").length||0===T.$el.find("td.fr-selected-cell").length)){_();var e,t,n=N(S()),r=T.$el.find(".fr-selected-cell"),i=be(r[0]),a=i.parent().find(".fr-selected-cell"),o=i.closest("table"),s=i.html(),l=0;for(e=0;e<a.length;e++)l+=be(a[e]).outerWidth();for(i.css("width",Math.min(100,l/o.outerWidth()*100).toFixed(4)+"%"),n.min_j<n.max_j&&i.attr("colspan",n.max_j-n.min_j+1),n.min_i<n.max_i&&i.attr("rowspan",n.max_i-n.min_i+1),e=1;e<r.length;e++)"<br>"!=(t=be(r[e])).html()&&""!==t.html()&&(s+="<br>"+t.html()),t.remove();i.html(s),T.selection.setAtEnd(i.get(0)),T.selection.restore(),T.toolbar.enable(),v(n.min_i,n.max_i,o);var d=o.find("tr:empty");for(e=d.length-1;0<=e;e--)be(d[e]).remove();m(n.min_j,n.max_j,o),u()}},splitCellVertically:function(){if(1==Q().length){var e=T.$el.find(".fr-selected-cell"),t=parseInt(e.attr("colspan"),10)||1,n=e.parent().outerWidth(),r=e.outerWidth(),i=e.clone().html("<br>"),a=S(),o=R(e.get(0),a);if(1<t){var s=Math.ceil(t/2);r=G(o.col,o.col+s-1,a)/n*100;var l=G(o.col+s,o.col+t-1,a)/n*100;1<s?e.attr("colspan",s):e.removeAttr("colspan"),1<t-s?i.attr("colspan",t-s):i.removeAttr("colspan"),e.css("width",r.toFixed(4)+"%"),i.css("width",l.toFixed(4)+"%")}else{var d;for(d=0;d<a.length;d++)if(0===d||a[d][o.col]!=a[d-1][o.col]){var c=be(a[d][o.col]);if(!c.is(e)){var f=(parseInt(c.attr("colspan"),10)||1)+1;c.attr("colspan",f)}}r=r/n*100/2,e.css("width",r.toFixed(4)+"%"),i.css("width",r.toFixed(4)+"%")}e.after(i),L(),T.popups.hide("table.edit")}},splitCellHorizontally:function(){if(1==Q().length){var e=T.$el.find(".fr-selected-cell"),t=e.parent(),n=e.closest("table"),r=parseInt(e.attr("rowspan"),10),i=S(),a=R(e.get(0),i),o=e.clone().html("<br>");if(1<r){var s=Math.ceil(r/2);1<s?e.attr("rowspan",s):e.removeAttr("rowspan"),1<r-s?o.attr("rowspan",r-s):o.removeAttr("rowspan");for(var l=a.row+s,d=0===a.col?a.col:a.col-1;0<=d&&(i[l][d]==i[l][d-1]||0<l&&i[l][d]==i[l-1][d]);)d--;-1==d?be(n.find("tr").not(n.find("table tr")).get(l)).prepend(o):be(i[l][d]).after(o)}else{var c,f=be("<tr>").append(o);for(c=0;c<i[0].length;c++)if(0===c||i[a.row][c]!=i[a.row][c-1]){var p=be(i[a.row][c]);p.is(e)||p.attr("rowspan",(parseInt(p.attr("rowspan"),10)||1)+1)}t.after(f)}L(),T.popups.hide("table.edit")}},addHeader:function(){var e=Z();if(0<e.length&&0===e.find("th").length){var t,n="<thead><tr>",r=0;for(e.find("tr:first > td").each(function(){var e=be(this);r+=parseInt(e.attr("colspan"),10)||1}),t=0;t<r;t++)n+="<th><br></th>";n+="</tr></thead>",e.prepend(n),u()}},removeHeader:function(){var e=Z(),t=e.find("thead");if(0<t.length)if(0===e.find("tbody tr").length)h();else if(t.remove(),0<Q().length)u();else{T.popups.hide("table.edit");var n=e.find("tbody tr:first td:first").get(0);n&&(T.selection.setAtEnd(n),T.selection.restore())}},setBackground:t,showInsertPopup:function(){var e=T.$tb.find('.fr-command[data-cmd="insertTable"]'),t=T.popups.get("table.insert");if(t||(t=c()),!t.hasClass("fr-active")){T.popups.refresh("table.insert"),T.popups.setContainer("table.insert",T.$tb);var n=e.offset().left+e.outerWidth()/2,r=e.offset().top+(T.opts.toolbarBottom?10:e.outerHeight()-10);T.popups.show("table.insert",n,r,e.outerHeight())}},showEditPopup:u,showColorsPopup:d,back:function(){0<Q().length?u():(T.popups.hide("table.insert"),T.toolbar.showInline())},verticalAlign:function(e){T.$el.find(".fr-selected-cell").css("vertical-align",e)},horizontalAlign:function(e){T.$el.find(".fr-selected-cell").css("text-align",e)},applyStyle:function(e,t,n,r){if(0<t.length){if(!n){var i=Object.keys(r);i.splice(i.indexOf(e),1),t.removeClass(i.join(" "))}t.toggleClass(e)}},selectedTable:Z,selectedCells:Q,customColor:function(){var e=T.popups.get("table.colors").find(".fr-table-colors-hex-layer input");e.length&&t(e.val())},selectCells:O}},be.FE.DefineIcon("insertTable",{NAME:"table"}),be.FE.RegisterCommand("insertTable",{title:"Insert Table",undo:!1,focus:!0,refreshOnCallback:!1,popup:!0,callback:function(){this.popups.isVisible("table.insert")?(this.$el.find(".fr-marker").length&&(this.events.disableBlur(),this.selection.restore()),this.popups.hide("table.insert")):this.table.showInsertPopup()},plugin:"table"}),be.FE.RegisterCommand("tableInsert",{callback:function(e,t,n){this.table.insert(t,n),this.popups.hide("table.insert")}}),be.FE.DefineIcon("tableHeader",{NAME:"header",FA5NAME:"heading"}),be.FE.RegisterCommand("tableHeader",{title:"Table Header",focus:!1,toggle:!0,callback:function(){this.popups.get("table.edit").find('.fr-command[data-cmd="tableHeader"]').hasClass("fr-active")?this.table.removeHeader():this.table.addHeader()},refresh:function(e){var t=this.table.selectedTable();0<t.length&&(0===t.find("th").length?e.removeClass("fr-active").attr("aria-pressed",!1):e.addClass("fr-active").attr("aria-pressed",!0))}}),be.FE.DefineIcon("tableRows",{NAME:"bars"}),be.FE.RegisterCommand("tableRows",{type:"dropdown",focus:!1,title:"Row",options:{above:"Insert row above",below:"Insert row below","delete":"Delete row"},html:function(){var e='<ul class="fr-dropdown-list" role="presentation">',t=be.FE.COMMANDS.tableRows.options;for(var n in t)t.hasOwnProperty(n)&&(e+='<li role="presentation"><a class="fr-command" tabIndex="-1" role="option" data-cmd="tableRows" data-param1="'+n+'" title="'+this.language.translate(t[n])+'">'+this.language.translate(t[n])+"</a></li>");return e+="</ul>"},callback:function(e,t){"above"==t||"below"==t?this.table.insertRow(t):this.table.deleteRow()}}),be.FE.DefineIcon("tableColumns",{NAME:"bars fa-rotate-90"}),be.FE.RegisterCommand("tableColumns",{type:"dropdown",focus:!1,title:"Column",options:{before:"Insert column before",after:"Insert column after","delete":"Delete column"},html:function(){var e='<ul class="fr-dropdown-list" role="presentation">',t=be.FE.COMMANDS.tableColumns.options;for(var n in t)t.hasOwnProperty(n)&&(e+='<li role="presentation"><a class="fr-command" tabIndex="-1" role="option" data-cmd="tableColumns" data-param1="'+n+'" title="'+this.language.translate(t[n])+'">'+this.language.translate(t[n])+"</a></li>");return e+="</ul>"},callback:function(e,t){"before"==t||"after"==t?this.table.insertColumn(t):this.table.deleteColumn()}}),be.FE.DefineIcon("tableCells",{NAME:"square-o",FA5NAME:"square"}),be.FE.RegisterCommand("tableCells",{type:"dropdown",focus:!1,title:"Cell",options:{merge:"Merge cells","vertical-split":"Vertical split","horizontal-split":"Horizontal split"},html:function(){var e='<ul class="fr-dropdown-list" role="presentation">',t=be.FE.COMMANDS.tableCells.options;for(var n in t)t.hasOwnProperty(n)&&(e+='<li role="presentation"><a class="fr-command" tabIndex="-1" role="option" data-cmd="tableCells" data-param1="'+n+'" title="'+this.language.translate(t[n])+'">'+this.language.translate(t[n])+"</a></li>");return e+="</ul>"},callback:function(e,t){"merge"==t?this.table.mergeCells():"vertical-split"==t?this.table.splitCellVertically():this.table.splitCellHorizontally()},refreshOnShow:function(e,t){1<this.$el.find(".fr-selected-cell").length?(t.find('a[data-param1="vertical-split"]').addClass("fr-disabled").attr("aria-disabled",!0),t.find('a[data-param1="horizontal-split"]').addClass("fr-disabled").attr("aria-disabled",!0),t.find('a[data-param1="merge"]').removeClass("fr-disabled").attr("aria-disabled",!1)):(t.find('a[data-param1="merge"]').addClass("fr-disabled").attr("aria-disabled",!0),t.find('a[data-param1="vertical-split"]').removeClass("fr-disabled").attr("aria-disabled",!1),t.find('a[data-param1="horizontal-split"]').removeClass("fr-disabled").attr("aria-disabled",!1))}}),be.FE.DefineIcon("tableRemove",{NAME:"trash"}),be.FE.RegisterCommand("tableRemove",{title:"Remove Table",focus:!1,callback:function(){this.table.remove()}}),be.FE.DefineIcon("tableStyle",{NAME:"paint-brush"}),be.FE.RegisterCommand("tableStyle",{title:"Table Style",type:"dropdown",focus:!1,html:function(){var e='<ul class="fr-dropdown-list" role="presentation">',t=this.opts.tableStyles;for(var n in t)t.hasOwnProperty(n)&&(e+='<li role="presentation"><a class="fr-command" tabIndex="-1" role="option" data-cmd="tableStyle" data-param1="'+n+'" title="'+this.language.translate(t[n])+'">'+this.language.translate(t[n])+"</a></li>");return e+="</ul>"},callback:function(e,t){this.table.applyStyle(t,this.$el.find(".fr-selected-cell").closest("table"),this.opts.tableMultipleStyles,this.opts.tableStyles)},refreshOnShow:function(e,t){var n=this.$el.find(".fr-selected-cell").closest("table");n&&t.find(".fr-command").each(function(){var e=be(this).data("param1"),t=n.hasClass(e);be(this).toggleClass("fr-active",t).attr("aria-selected",t)})}}),be.FE.DefineIcon("tableCellBackground",{NAME:"tint"}),be.FE.RegisterCommand("tableCellBackground",{title:"Cell Background",focus:!1,popup:!0,callback:function(){this.table.showColorsPopup()}}),be.FE.RegisterCommand("tableCellBackgroundColor",{undo:!0,focus:!1,callback:function(e,t){this.table.setBackground(t)}}),be.FE.DefineIcon("tableBack",{NAME:"arrow-left"}),be.FE.RegisterCommand("tableBack",{title:"Back",undo:!1,focus:!1,back:!0,callback:function(){this.table.back()},refresh:function(e){0!==this.table.selectedCells().length||this.opts.toolbarInline?(e.removeClass("fr-hidden"),e.next(".fr-separator").removeClass("fr-hidden")):(e.addClass("fr-hidden"),e.next(".fr-separator").addClass("fr-hidden"))}}),be.FE.DefineIcon("tableCellVerticalAlign",{NAME:"arrows-v",FA5NAME:"arrows-alt-v"}),be.FE.RegisterCommand("tableCellVerticalAlign",{type:"dropdown",focus:!1,title:"Vertical Align",options:{Top:"Align Top",Middle:"Align Middle",Bottom:"Align Bottom"},html:function(){var e='<ul class="fr-dropdown-list" role="presentation">',t=be.FE.COMMANDS.tableCellVerticalAlign.options;for(var n in t)t.hasOwnProperty(n)&&(e+='<li role="presentation"><a class="fr-command" tabIndex="-1" role="option" data-cmd="tableCellVerticalAlign" data-param1="'+n.toLowerCase()+'" title="'+this.language.translate(t[n])+'">'+this.language.translate(n)+"</a></li>");return e+="</ul>"},callback:function(e,t){this.table.verticalAlign(t)},refreshOnShow:function(e,t){t.find('.fr-command[data-param1="'+this.$el.find(".fr-selected-cell").css("vertical-align")+'"]').addClass("fr-active").attr("aria-selected",!0)}}),be.FE.DefineIcon("tableCellHorizontalAlign",{NAME:"align-left"}),be.FE.DefineIcon("align-left",{NAME:"align-left"}),be.FE.DefineIcon("align-right",{NAME:"align-right"}),be.FE.DefineIcon("align-center",{NAME:"align-center"}),be.FE.DefineIcon("align-justify",{NAME:"align-justify"}),be.FE.RegisterCommand("tableCellHorizontalAlign",{type:"dropdown",focus:!1,title:"Horizontal Align",options:{left:"Align Left",center:"Align Center",right:"Align Right",justify:"Align Justify"},html:function(){var e='<ul class="fr-dropdown-list" role="presentation">',t=be.FE.COMMANDS.tableCellHorizontalAlign.options;for(var n in t)t.hasOwnProperty(n)&&(e+='<li role="presentation"><a class="fr-command fr-title" tabIndex="-1" role="option" data-cmd="tableCellHorizontalAlign" data-param1="'+n+'" title="'+this.language.translate(t[n])+'">'+this.icon.create("align-"+n)+'<span class="fr-sr-only">'+this.language.translate(t[n])+"</span></a></li>");return e+="</ul>"},callback:function(e,t){this.table.horizontalAlign(t)},refresh:function(e){var t=this.table.selectedCells();t.length&&e.find("> *:first").replaceWith(this.icon.create("align-"+this.helpers.getAlignment(be(t[0]))))},refreshOnShow:function(e,t){t.find('.fr-command[data-param1="'+this.helpers.getAlignment(this.$el.find(".fr-selected-cell:first"))+'"]').addClass("fr-active").attr("aria-selected",!0)}}),be.FE.DefineIcon("tableCellStyle",{NAME:"magic"}),be.FE.RegisterCommand("tableCellStyle",{title:"Cell Style",type:"dropdown",focus:!1,html:function(){var e='<ul class="fr-dropdown-list" role="presentation">',t=this.opts.tableCellStyles;for(var n in t)t.hasOwnProperty(n)&&(e+='<li role="presentation"><a class="fr-command" tabIndex="-1" role="option" data-cmd="tableCellStyle" data-param1="'+n+'" title="'+this.language.translate(t[n])+'">'+this.language.translate(t[n])+"</a></li>");return e+="</ul>"},callback:function(e,t){this.table.applyStyle(t,this.$el.find(".fr-selected-cell"),this.opts.tableCellMultipleStyles,this.opts.tableCellStyles)},refreshOnShow:function(e,t){var n=this.$el.find(".fr-selected-cell:first");n&&t.find(".fr-command").each(function(){var e=be(this).data("param1"),t=n.hasClass(e);be(this).toggleClass("fr-active",t).attr("aria-selected",t)})}}),be.FE.RegisterCommand("tableCellBackgroundCustomColor",{title:"OK",undo:!0,callback:function(){this.table.customColor()}}),be.FE.DefineIcon("tableColorRemove",{NAME:"eraser"}),be.FE.URLRegEx="(^| |\\u00A0)("+be.FE.LinkRegEx+"|([a-z0-9+-_.]{1,}@[a-z0-9+-_.]{1,}\\.[a-z0-9+-_]{1,}))$",be.FE.PLUGINS.url=function(a){var o=null;function t(e,t,n){for(var r="";n.length&&"."==n[n.length-1];)r+=".",n=n.substring(0,n.length-1);var i=n;if(a.opts.linkConvertEmailAddress)a.helpers.isEmail(i)&&!/^mailto:.*/i.test(i)&&(i="mailto:"+i);else if(a.helpers.isEmail(i))return t+n;return/^((http|https|ftp|ftps|mailto|tel|sms|notes|data)\:)/i.test(i)||(i="//"+i),(t||"")+"<a"+(a.opts.linkAlwaysBlank?' target="_blank"':"")+(o?' rel="'+o+'"':"")+' data-fr-linked="true" href="'+i+'">'+n.replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/&amp;/g,"&").replace(/&/g,"&amp;")+"</a>"+r}function s(){return new RegExp(be.FE.URLRegEx,"gi")}function l(e){return a.opts.linkAlwaysNoFollow&&(o="nofollow"),a.opts.linkAlwaysBlank&&(a.opts.linkNoOpener&&(o?o+=" noopener":o="noopener"),a.opts.linkNoReferrer&&(o?o+=" noreferrer":o="noreferrer")),e.replace(s(),t)}function d(e){var t=e.split(" ");return t[t.length-1]}function n(){var t=a.selection.ranges(0),n=t.startContainer;if(!n||n.nodeType!==Node.TEXT_NODE||t.startOffset!==(n.textContent||"").length)return!1;if(function e(t){return!!t&&("A"===t.tagName||!(!t.parentNode||t.parentNode==a.el)&&e(t.parentNode))}(n))return!1;if(s().test(d(n.textContent))){be(n).before(l(n.textContent));var r=be(n.parentNode).find("a[data-fr-linked]");r.removeAttr("data-fr-linked"),n.parentNode.removeChild(n),a.events.trigger("url.linked",[r.get(0)])}else if(n.textContent.split(" ").length<=2&&n.previousSibling&&"A"===n.previousSibling.tagName){var i=n.previousSibling.innerText+n.textContent;s().test(d(i))&&(be(n.previousSibling).replaceWith(l(i)),n.parentNode.removeChild(n))}}return{_init:function(){a.events.on("keypress",function(e){!a.selection.isCollapsed()||"."!=e.key&&")"!=e.key&&"("!=e.key||n()},!0),a.events.on("keydown",function(e){var t=e.which;!a.selection.isCollapsed()||t!=be.FE.KEYCODE.ENTER&&t!=be.FE.KEYCODE.SPACE||n()},!0),a.events.on("paste.beforeCleanup",function(e){if(a.helpers.isURL(e)){var t=null;return a.opts.linkAlwaysBlank&&(a.opts.linkNoOpener&&(t?t+=" noopener":t="noopener"),a.opts.linkNoReferrer&&(t?t+=" noreferrer":t="noreferrer")),"<a"+(a.opts.linkAlwaysBlank?' target="_blank"':"")+(t?' rel="'+t+'"':"")+' href="'+e+'" >'+e+"</a>"}})}}},be.extend(be.FE.POPUP_TEMPLATES,{"video.insert":"[_BUTTONS_][_BY_URL_LAYER_][_EMBED_LAYER_][_UPLOAD_LAYER_][_PROGRESS_BAR_]","video.edit":"[_BUTTONS_]","video.size":"[_BUTTONS_][_SIZE_LAYER_]"}),be.extend(be.FE.DEFAULTS,{videoAllowedTypes:["mp4","webm","ogg"],videoAllowedProviders:[".*"],videoDefaultAlign:"center",videoDefaultDisplay:"block",videoDefaultWidth:600,videoEditButtons:["videoReplace","videoRemove","|","videoDisplay","videoAlign","videoSize"],videoInsertButtons:["videoBack","|","videoByURL","videoEmbed","videoUpload"],videoMaxSize:52428800,videoMove:!0,videoResize:!0,videoSizeButtons:["videoBack","|"],videoSplitHTML:!1,videoTextNear:!0,videoUpload:!0,videoUploadMethod:"POST",videoUploadParam:"file",videoUploadParams:{},videoUploadToS3:!1,videoUploadURL:null}),be.FE.VIDEO_PROVIDERS=[{test_regex:/^.*((youtu.be)|(youtube.com))\/((v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))?\??v?=?([^#\&\?]*).*/,url_regex:/(?:https?:\/\/)?(?:www\.)?(?:m\.)?(?:youtube\.com|youtu\.be)\/(?:watch\?v=|embed\/)?([0-9a-zA-Z_\-]+)(.+)?/g,url_text:"https://www.youtube.com/embed/$1",html:'<iframe width="640" height="360" src="{url}?wmode=opaque" frameborder="0" allowfullscreen></iframe>',provider:"youtube"},{test_regex:/^.*(?:vimeo.com)\/(?:channels(\/\w+\/)?|groups\/*\/videos\/\u200b\d+\/|video\/|)(\d+)(?:$|\/|\?)/,url_regex:/(?:https?:\/\/)?(?:www\.|player\.)?vimeo.com\/(?:channels\/(?:\w+\/)?|groups\/(?:[^\/]*)\/videos\/|album\/(?:\d+)\/video\/|video\/|)(\d+)(?:[a-zA-Z0-9_\-]+)?(\/[a-zA-Z0-9_\-]+)?/i,url_text:"https://player.vimeo.com/video/$1",html:'<iframe width="640" height="360" src="{url}" frameborder="0" allowfullscreen></iframe>',provider:"vimeo"},{test_regex:/^.+(dailymotion.com|dai.ly)\/(video|hub)?\/?([^_]+)[^#]*(#video=([^_&]+))?/,url_regex:/(?:https?:\/\/)?(?:www\.)?(?:dailymotion\.com|dai\.ly)\/(?:video|hub)?\/?(.+)/g,url_text:"https://www.dailymotion.com/embed/video/$1",html:'<iframe width="640" height="360" src="{url}" frameborder="0" allowfullscreen></iframe>',provider:"dailymotion"},{test_regex:/^.+(screen.yahoo.com)\/[^_&]+/,url_regex:"",url_text:"",html:'<iframe width="640" height="360" src="{url}?format=embed" frameborder="0" allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true" allowtransparency="true"></iframe>',provider:"yahoo"},{test_regex:/^.+(rutube.ru)\/[^_&]+/,url_regex:/(?:https?:\/\/)?(?:www\.)?(?:rutube\.ru)\/(?:video)?\/?(.+)/g,url_text:"https://rutube.ru/play/embed/$1",html:'<iframe width="640" height="360" src="{url}" frameborder="0" allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true" allowtransparency="true"></iframe>',provider:"rutube"},{test_regex:/^(?:.+)vidyard.com\/(?:watch)?\/?([^.&/]+)\/?(?:[^_.&]+)?/,url_regex:/^(?:.+)vidyard.com\/(?:watch)?\/?([^.&/]+)\/?(?:[^_.&]+)?/g,url_text:"https://play.vidyard.com/$1",html:'<iframe width="640" height="360" src="{url}" frameborder="0" allowfullscreen></iframe>',provider:"vidyard"}],be.FE.VIDEO_EMBED_REGEX=/^\W*((<iframe.*><\/iframe>)|(<embed.*>))\W*$/i,be.FE.PLUGINS.video=function(f){var s,c,p,u,r,n,d="https://i.froala.com/upload",l=2,h=3,g=4,m=5,v=6,i={};function E(){var e=f.popups.get("video.insert");e.find(".fr-video-by-url-layer input").val("").trigger("change");var t=e.find(".fr-video-embed-layer textarea");t.val("").trigger("change"),(t=e.find(".fr-video-upload-layer input")).val("").trigger("change")}function a(){var e=f.popups.get("video.edit");if(e||(e=function(){var e="";if(0<f.opts.videoEditButtons.length){e+='<div class="fr-buttons">',e+=f.button.buildList(f.opts.videoEditButtons);var t={buttons:e+="</div>"},n=f.popups.create("video.edit",t);return f.events.$on(f.$wp,"scroll.video-edit",function(){u&&f.popups.isVisible("video.edit")&&(f.events.disableBlur(),y(u))}),n}return!1}()),e){f.popups.setContainer("video.edit",f.$sc),f.popups.refresh("video.edit");var t=u.find("iframe, embed, video"),n=t.offset().left+t.outerWidth()/2,r=t.offset().top+t.outerHeight();f.popups.show("video.edit",n,r,t.outerHeight())}}function o(e){if(e)return f.popups.onRefresh("video.insert",E),f.popups.onHide("image.insert",V),!0;var t="";f.opts.videoUpload||f.opts.videoInsertButtons.splice(f.opts.videoInsertButtons.indexOf("videoUpload"),1),1<f.opts.videoInsertButtons.length&&(t='<div class="fr-buttons">'+f.button.buildList(f.opts.videoInsertButtons)+"</div>");var n,r="",i=f.opts.videoInsertButtons.indexOf("videoUpload"),a=f.opts.videoInsertButtons.indexOf("videoByURL"),o=f.opts.videoInsertButtons.indexOf("videoEmbed");0<=a&&(n=" fr-active",(i<a&&0<=i||o<a&&0<=o)&&(n=""),r='<div class="fr-video-by-url-layer fr-layer'+n+'" id="fr-video-by-url-layer-'+f.id+'"><div class="fr-input-line"><input id="fr-video-by-url-layer-text-'+f.id+'" type="text" placeholder="'+f.language.translate("Paste in a video URL")+'" tabIndex="1" aria-required="true"></div><div class="fr-action-buttons"><button type="button" class="fr-command fr-submit" data-cmd="videoInsertByURL" tabIndex="2" role="button">'+f.language.translate("Insert")+"</button></div></div>");var s="";0<=o&&(n=" fr-active",(i<o&&0<=i||a<o&&0<=a)&&(n=""),s='<div class="fr-video-embed-layer fr-layer'+n+'" id="fr-video-embed-layer-'+f.id+'"><div class="fr-input-line"><textarea id="fr-video-embed-layer-text'+f.id+'" type="text" placeholder="'+f.language.translate("Embedded Code")+'" tabIndex="1" aria-required="true" rows="5"></textarea></div><div class="fr-action-buttons"><button type="button" class="fr-command fr-submit" data-cmd="videoInsertEmbed" tabIndex="2" role="button">'+f.language.translate("Insert")+"</button></div></div>");var l="";0<=i&&(n=" fr-active",(o<i&&0<=o||a<i&&0<=a)&&(n=""),l='<div class="fr-video-upload-layer fr-layer'+n+'" id="fr-video-upload-layer-'+f.id+'"><strong>'+f.language.translate("Drop video")+"</strong><br>("+f.language.translate("or click")+')<div class="fr-form"><input type="file" accept="video/'+f.opts.videoAllowedTypes.join(", video/").toLowerCase()+'" tabIndex="-1" aria-labelledby="fr-video-upload-layer-'+f.id+'" role="button"></div></div>');var d={buttons:t,by_url_layer:r,embed_layer:s,upload_layer:l,progress_bar:'<div class="fr-video-progress-bar-layer fr-layer"><h3 tabIndex="-1" class="fr-message">Uploading</h3><div class="fr-loader"><span class="fr-progress"></span></div><div class="fr-action-buttons"><button type="button" class="fr-command fr-dismiss" data-cmd="videoDismissError" tabIndex="2" role="button">OK</button></div></div>'},c=f.popups.create("video.insert",d);return function(r){f.events.$on(r,"dragover dragenter",".fr-video-upload-layer",function(){return be(this).addClass("fr-drop"),!1},!0),f.events.$on(r,"dragleave dragend",".fr-video-upload-layer",function(){return be(this).removeClass("fr-drop"),!1},!0),f.events.$on(r,"drop",".fr-video-upload-layer",function(e){e.preventDefault(),e.stopPropagation(),be(this).removeClass("fr-drop");var t=e.originalEvent.dataTransfer;if(t&&t.files){var n=r.data("instance")||f;n.events.disableBlur(),n.video.upload(t.files),n.events.enableBlur()}},!0),f.helpers.isIOS()&&f.events.$on(r,"touchstart",'.fr-video-upload-layer input[type="file"]',function(){be(this).trigger("click")},!0);f.events.$on(r,"change",'.fr-video-upload-layer input[type="file"]',function(){if(this.files){var e=r.data("instance")||f;e.events.disableBlur(),r.find("input:focus").blur(),e.events.enableBlur(),e.video.upload(this.files)}be(this).val("")},!0)}(c),c}function b(e){f.events.focus(!0),f.selection.restore();var t=!1;u&&(G(),t=!0),f.html.insert('<span contenteditable="false" draggable="true" class="fr-jiv fr-video">'+e+"</span>",!1,f.opts.videoSplitHTML),f.popups.hide("video.insert");var n=f.$el.find(".fr-jiv");n.removeClass("fr-jiv"),X(n,f.opts.videoDefaultDisplay,f.opts.videoDefaultAlign),n.toggleClass("fr-draggable",f.opts.videoMove),f.events.trigger(t?"video.replaced":"video.inserted",[n])}function T(){var e=be(this);f.popups.hide("video.insert"),e.removeClass("fr-uploading"),e.parent().next().is("br")&&e.parent().next().remove(),y(e.parent()),f.events.trigger("video.loaded",[e.parent()])}function A(s,e,l,d,c){f.edit.off(),R("Loading video"),e&&(s=f.helpers.sanitizeURL(s));C("Loading video"),function(){var e,t;if(d){f.undo.canDo()||d.find("video").hasClass("fr-uploading")||f.undo.saveStep();var n=d.find("video").data("fr-old-src"),r=d.data("fr-replaced");d.data("fr-replaced",!1),f.$wp?((e=d.clone()).find("video").removeData("fr-old-src").removeClass("fr-uploading"),e.find("video").off("canplay"),n&&d.find("video").attr("src",n),d.replaceWith(e)):e=d;for(var i=e.find("video").get(0).attributes,a=0;a<i.length;a++){var o=i[a];0===o.nodeName.indexOf("data-")&&e.find("video").removeAttr(o.nodeName)}if(void 0!==l)for(t in l)l.hasOwnProperty(t)&&"link"!=t&&e.find("video").attr("data-"+t,l[t]);e.find("video").on("canplay",T),e.find("video").attr("src",s),f.edit.on(),k(),f.undo.saveStep(),f.$el.blur(),f.events.trigger(r?"video.replaced":"video.inserted",[e,c])}else e=function(e,t,n){var r,i="";if(t&&void 0!==t)for(r in t)t.hasOwnProperty(r)&&"link"!=r&&(i+=" data-"+r+'="'+t[r]+'"');var a=f.opts.videoDefaultWidth;a&&"auto"!=a&&(a+="px");var o=be('<span contenteditable="false" draggable="true" class="fr-video fr-dv'+f.opts.videoDefaultDisplay[0]+("center"!=f.opts.videoDefaultAlign?" fr-fv"+f.opts.videoDefaultAlign[0]:"")+'"><video src="'+e+'" '+i+(a?' style="width: '+a+';" ':"")+" controls>"+f.language.translate("Your browser does not support HTML5 video.")+"</video></span>");o.toggleClass("fr-draggable",f.opts.videoMove),f.edit.on(),f.events.focus(!0),f.selection.restore(),f.undo.saveStep(),f.opts.videoSplitHTML?f.markers.split():f.markers.insert(),f.html.wrap();var s=f.$el.find(".fr-marker");return f.node.isLastSibling(s)&&s.parent().hasClass("fr-deletable")&&s.insertAfter(s.parent()),s.replaceWith(o),f.selection.clear(),o.find("video").get(0).readyState>o.find("video").get(0).HAVE_FUTURE_DATA||f.helpers.isIOS()?n.call(o.find("video").get(0)):o.find("video").on("canplaythrough load",n),o}(s,l,T),k(),f.undo.saveStep(),f.events.trigger("video.inserted",[e,c])}()}function C(e){var t=f.popups.get("video.insert");if(t||(t=o()),t.find(".fr-layer.fr-active").removeClass("fr-active").addClass("fr-pactive"),t.find(".fr-video-progress-bar-layer").addClass("fr-active"),t.find(".fr-buttons").hide(),u){var n=u.find("video");f.popups.setContainer("video.insert",f.$sc);var r=n.offset().left+n.width()/2,i=n.offset().top+n.height();f.popups.show("video.insert",r,i,n.outerHeight())}void 0===e&&R(f.language.translate("Uploading"),0)}function S(e){var t=f.popups.get("video.insert");if(t&&(t.find(".fr-layer.fr-pactive").addClass("fr-active").removeClass("fr-pactive"),t.find(".fr-video-progress-bar-layer").removeClass("fr-active"),t.find(".fr-buttons").show(),e||f.$el.find("video.fr-error").length)){if(f.events.focus(),f.$el.find("video.fr-error").length&&(f.$el.find("video.fr-error").parent().remove(),f.undo.saveStep(),f.undo.run(),f.undo.dropRedo()),!f.$wp&&u){var n=u;$(!0),f.selection.setAfter(n.find("video").get(0)),f.selection.restore()}f.popups.hide("video.insert")}}function R(e,t){var n=f.popups.get("video.insert");if(n){var r=n.find(".fr-video-progress-bar-layer");r.find("h3").text(e+(t?" "+t+"%":"")),r.removeClass("fr-error"),t?(r.find("div").removeClass("fr-indeterminate"),r.find("div > span").css("width",t+"%")):r.find("div").addClass("fr-indeterminate")}}function y(e){M.call(e.get(0))}function _(e){R("Loading video");var t=this.status,n=this.response,r=this.responseXML,i=this.responseText;try{if(f.opts.videoUploadToS3)if(201==t){var a=function(e){try{var t=be(e).find("Location").text(),n=be(e).find("Key").text();return!1===f.events.trigger("video.uploadedToS3",[t,n,e],!0)?(f.edit.on(),!1):t}catch(r){return K(g,e),!1}}(r);a&&A(a,!1,[],e,n||r)}else K(g,n||r);else if(200<=t&&t<300){var o=function(e){try{if(!1===f.events.trigger("video.uploaded",[e],!0))return f.edit.on(),!1;var t=JSON.parse(e);return t.link?t:(K(l,e),!1)}catch(n){return K(g,e),!1}}(i);o&&A(o.link,!1,o,e,n||i)}else K(h,n||i)}catch(s){K(g,n||i)}}function L(){K(g,this.response||this.responseText||this.responseXML)}function x(e){if(e.lengthComputable){var t=e.loaded/e.total*100|0;R(f.language.translate("Uploading"),t)}}function N(){f.edit.on(),S(!0)}function w(e){if(!f.core.sameInstance(p))return!0;e.preventDefault(),e.stopPropagation();var t=e.pageX||(e.originalEvent.touches?e.originalEvent.touches[0].pageX:null),n=e.pageY||(e.originalEvent.touches?e.originalEvent.touches[0].pageY:null);if(!t||!n)return!1;if("mousedown"==e.type){var r=f.$oel.get(0).ownerDocument,i=r.defaultView||r.parentWindow,a=!1;try{a=i.location!=i.parent.location&&!(i.$&&i.$.FE)}catch(o){}a&&i.frameElement&&(t+=f.helpers.getPX(be(i.frameElement).offset().left)+i.frameElement.clientLeft,n=e.clientY+f.helpers.getPX(be(i.frameElement).offset().top)+i.frameElement.clientTop)}f.undo.canDo()||f.undo.saveStep(),(c=be(this)).data("start-x",t),c.data("start-y",n),s.show(),f.popups.hideAll(),B()}function O(e){if(!f.core.sameInstance(p))return!0;if(c){e.preventDefault();var t=e.pageX||(e.originalEvent.touches?e.originalEvent.touches[0].pageX:null),n=e.pageY||(e.originalEvent.touches?e.originalEvent.touches[0].pageY:null);if(!t||!n)return!1;var r=c.data("start-x"),i=c.data("start-y");c.data("start-x",t),c.data("start-y",n);var a=t-r,o=n-i,s=u.find("iframe, embed, video"),l=s.width(),d=s.height();(c.hasClass("fr-hnw")||c.hasClass("fr-hsw"))&&(a=0-a),(c.hasClass("fr-hnw")||c.hasClass("fr-hne"))&&(o=0-o),s.css("width",l+a),s.css("height",d+o),s.removeAttr("width"),s.removeAttr("height"),F()}}function I(e){if(!f.core.sameInstance(p))return!0;c&&u&&(e&&e.stopPropagation(),c=null,s.hide(),F(),a(),f.undo.saveStep())}function t(e){return'<div class="fr-handler fr-h'+e+'"></div>'}function D(e,t,n,r){return e.pageX=t,e.pageY=t,w.call(this,e),e.pageX=e.pageX+n*Math.floor(Math.pow(1.1,r)),e.pageY=e.pageY+n*Math.floor(Math.pow(1.1,r)),O.call(this,e),I.call(this,e),++r}function k(){var e,t=Array.prototype.slice.call(f.el.querySelectorAll("video, .fr-video > *")),n=[];for(e=0;e<t.length;e++)n.push(t[e].getAttribute("src")),be(t[e]).toggleClass("fr-draggable",f.opts.videoMove),""===t[e].getAttribute("class")&&t[e].removeAttribute("class"),""===t[e].getAttribute("style")&&t[e].removeAttribute("style");if(r)for(e=0;e<r.length;e++)n.indexOf(r[e].getAttribute("src"))<0&&f.events.trigger("video.removed",[be(r[e])]);r=t}function F(){p||function(){var e;if(f.shared.$video_resizer?(p=f.shared.$video_resizer,s=f.shared.$vid_overlay,f.events.on("destroy",function(){p.removeClass("fr-active").appendTo(be("body:first"))},!0)):(f.shared.$video_resizer=be('<div class="fr-video-resizer"></div>'),p=f.shared.$video_resizer,f.events.$on(p,"mousedown",function(e){e.stopPropagation()},!0),f.opts.videoResize&&(p.append(t("nw")+t("ne")+t("sw")+t("se")),f.shared.$vid_overlay=be('<div class="fr-video-overlay"></div>'),s=f.shared.$vid_overlay,e=p.get(0).ownerDocument,be(e).find("body:first").append(s))),f.events.on("shared.destroy",function(){p.html("").removeData().remove(),p=null,f.opts.videoResize&&(s.remove(),s=null)},!0),f.helpers.isMobile()||f.events.$on(be(f.o_win),"resize.video",function(){$(!0)}),f.opts.videoResize){e=p.get(0).ownerDocument,f.events.$on(p,f._mousedown,".fr-handler",w),f.events.$on(be(e),f._mousemove,O),f.events.$on(be(e.defaultView||e.parentWindow),f._mouseup,I),f.events.$on(s,"mouseleave",I);var r=1,i=null,a=0;f.events.on("keydown",function(e){if(u){var t=-1!=navigator.userAgent.indexOf("Mac OS X")?e.metaKey:e.ctrlKey,n=e.which;(n!==i||200<e.timeStamp-a)&&(r=1),(n==be.FE.KEYCODE.EQUALS||f.browser.mozilla&&n==be.FE.KEYCODE.FF_EQUALS)&&t&&!e.altKey?r=D.call(this,e,1,1,r):(n==be.FE.KEYCODE.HYPHEN||f.browser.mozilla&&n==be.FE.KEYCODE.FF_HYPHEN)&&t&&!e.altKey&&(r=D.call(this,e,2,-1,r)),i=n,a=e.timeStamp}}),f.events.on("keyup",function(){r=1})}}(),(f.$wp||f.$sc).append(p),p.data("instance",f);var e=u.find("iframe, embed, video");p.css("top",(f.opts.iframe?e.offset().top-1:e.offset().top-f.$wp.offset().top-1)+f.$wp.scrollTop()).css("left",(f.opts.iframe?e.offset().left-1:e.offset().left-f.$wp.offset().left-1)+f.$wp.scrollLeft()).css("width",e.get(0).getBoundingClientRect().width).css("height",e.get(0).getBoundingClientRect().height).addClass("fr-active")}function M(e){if(e&&"touchend"==e.type&&n)return!0;if(e&&f.edit.isDisabled())return e.stopPropagation(),e.preventDefault(),!1;if(f.edit.isDisabled())return!1;for(var t=0;t<be.FE.INSTANCES.length;t++)be.FE.INSTANCES[t]!=f&&be.FE.INSTANCES[t].events.trigger("video.hideResizer");f.toolbar.disable(),f.helpers.isMobile()&&(f.events.disableBlur(),f.$el.blur(),f.events.enableBlur()),f.$el.find(".fr-video.fr-active").removeClass("fr-active"),(u=be(this)).addClass("fr-active"),f.opts.iframe&&f.size.syncIframe(),j(),F(),a(),f.selection.clear(),f.button.bulkRefresh(),f.events.trigger("image.hideResizer")}function $(e){u&&(f.shared.vid_exit_flag||!0===e)&&(p.removeClass("fr-active"),f.toolbar.enable(),u.removeClass("fr-active"),u=null,B())}function e(){f.shared.vid_exit_flag=!0}function B(){f.shared.vid_exit_flag=!1}function P(e){var t=e.originalEvent.dataTransfer;if(t&&t.files&&t.files.length){var n=t.files[0];if(n&&n.type&&-1!==n.type.indexOf("video")){if(!f.opts.videoUpload)return e.preventDefault(),e.stopPropagation(),!1;f.markers.remove(),f.markers.insertAtPoint(e.originalEvent),f.$el.find(".fr-marker").replaceWith(be.FE.MARKERS),f.popups.hideAll();var r=f.popups.get("video.insert");return r||(r=o()),f.popups.setContainer("video.insert",f.$sc),f.popups.show("video.insert",e.originalEvent.pageX,e.originalEvent.pageY),C(),0<=f.opts.videoAllowedTypes.indexOf(n.type.replace(/video\//g,""))?U(t.files):K(v),e.preventDefault(),e.stopPropagation(),!1}}}function U(e){if(void 0!==e&&0<e.length){if(!1===f.events.trigger("video.beforeUpload",[e]))return!1;var t,n=e[0];if(null===f.opts.videoUploadURL||f.opts.videoUploadURL==d)return s=n,(l=new FileReader).addEventListener("load",function(){l.result;for(var e=atob(l.result.split(",")[1]),t=[],n=0;n<e.length;n++)t.push(e.charCodeAt(n));A(window.URL.createObjectURL(new Blob([new Uint8Array(t)],{type:s.type})),!1,null,u)},!1),C(),l.readAsDataURL(s),!1;if(n.size>f.opts.videoMaxSize)return K(m),!1;if(f.opts.videoAllowedTypes.indexOf(n.type.replace(/video\//g,""))<0)return K(v),!1;if(f.drag_support.formdata&&(t=f.drag_support.formdata?new FormData:null),t){var r;if(!1!==f.opts.videoUploadToS3)for(r in t.append("key",f.opts.videoUploadToS3.keyStart+(new Date).getTime()+"-"+(n.name||"untitled")),t.append("success_action_status","201"),t.append("X-Requested-With","xhr"),t.append("Content-Type",n.type),f.opts.videoUploadToS3.params)f.opts.videoUploadToS3.params.hasOwnProperty(r)&&t.append(r,f.opts.videoUploadToS3.params[r]);for(r in f.opts.videoUploadParams)f.opts.videoUploadParams.hasOwnProperty(r)&&t.append(r,f.opts.videoUploadParams[r]);t.append(f.opts.videoUploadParam,n);var i=f.opts.videoUploadURL;f.opts.videoUploadToS3&&(i=f.opts.videoUploadToS3.uploadURL?f.opts.videoUploadToS3.uploadURL:"https://"+f.opts.videoUploadToS3.region+".amazonaws.com/"+f.opts.videoUploadToS3.bucket);var a=f.core.getXHR(i,f.opts.videoUploadMethod);a.onload=function(){_.call(a,u)},a.onerror=L,a.upload.onprogress=x,a.onabort=N,C(),f.events.disableBlur(),f.edit.off(),f.events.enableBlur();var o=f.popups.get("video.insert");o&&o.off("abortUpload").on("abortUpload",function(){4!=a.readyState&&a.abort()}),a.send(t)}}var s,l}function K(e,t){f.edit.on(),u&&u.find("video").addClass("fr-error"),function(e){C();var t=f.popups.get("video.insert").find(".fr-video-progress-bar-layer");t.addClass("fr-error");var n=t.find("h3");n.text(e),f.events.disableBlur(),n.focus()}(f.language.translate("Something went wrong. Please try again.")),f.events.trigger("video.error",[{code:e,message:i[e]},t])}function H(){if(u){var e=f.popups.get("video.size"),t=u.find("iframe, embed, video");e.find('input[name="width"]').val(t.get(0).style.width||t.attr("width")).trigger("change"),e.find('input[name="height"]').val(t.get(0).style.height||t.attr("height")).trigger("change")}}function W(e){if(e)return f.popups.onRefresh("video.size",H),!0;var t={buttons:'<div class="fr-buttons">'+f.button.buildList(f.opts.videoSizeButtons)+"</div>",size_layer:'<div class="fr-video-size-layer fr-layer fr-active" id="fr-video-size-layer-'+f.id+'"><div class="fr-video-group"><div class="fr-input-line"><input id="fr-video-size-layer-width-'+f.id+'" type="text" name="width" placeholder="'+f.language.translate("Width")+'" tabIndex="1"></div><div class="fr-input-line"><input id="fr-video-size-layer-height-'+f.id+'" type="text" name="height" placeholder="'+f.language.translate("Height")+'" tabIndex="1"></div></div><div class="fr-action-buttons"><button type="button" class="fr-command fr-submit" data-cmd="videoSetSize" tabIndex="2" role="button">'+f.language.translate("Update")+"</button></div></div>"},n=f.popups.create("video.size",t);return f.events.$on(f.$wp,"scroll",function(){u&&f.popups.isVisible("video.size")&&(f.events.disableBlur(),y(u))}),n}function z(e){if(void 0===e&&(e=u),e){if(e.hasClass("fr-fvl"))return"left";if(e.hasClass("fr-fvr"))return"right";if(e.hasClass("fr-dvb")||e.hasClass("fr-dvi"))return"center";if("block"==e.css("display")){if("left"==e.css("text-algin"))return"left";if("right"==e.css("text-align"))return"right"}else{if("left"==e.css("float"))return"left";if("right"==e.css("float"))return"right"}}return"center"}function Y(e){void 0===e&&(e=u);var t=e.css("float");return e.css("float","none"),"block"==e.css("display")?(e.css("float",""),e.css("float")!=t&&e.css("float",t),"block"):(e.css("float",""),e.css("float")!=t&&e.css("float",t),"inline")}function G(){if(u&&!1!==f.events.trigger("video.beforeRemove",[u])){var e=u;f.popups.hideAll(),$(!0),f.selection.setBefore(e.get(0))||f.selection.setAfter(e.get(0)),e.remove(),f.selection.restore(),f.html.fillEmptyBlocks(),f.events.trigger("video.removed",[e])}}function V(){S()}function X(e,t,n){!f.opts.htmlUntouched&&f.opts.useClasses?(e.removeClass("fr-fvl fr-fvr fr-dvb fr-dvi"),e.addClass("fr-fv"+n[0]+" fr-dv"+t[0])):"inline"==t?(e.css({display:"inline-block"}),"center"==n?e.css({"float":"none"}):"left"==n?e.css({"float":"left"}):e.css({"float":"right"})):(e.css({display:"block",clear:"both"}),"left"==n?e.css({textAlign:"left"}):"right"==n?e.css({textAlign:"right"}):e.css({textAlign:"center"}))}function q(){f.$el.find("video").filter(function(){return 0===be(this).parents("span.fr-video").length}).wrap('<span class="fr-video" contenteditable="false"></span>'),f.$el.find("embed, iframe").filter(function(){if(f.browser.safari&&this.getAttribute("src")&&this.setAttribute("src",this.src),0<be(this).parents("span.fr-video").length)return!1;for(var e=be(this).attr("src"),t=0;t<be.FE.VIDEO_PROVIDERS.length;t++){var n=be.FE.VIDEO_PROVIDERS[t];if(n.test_regex.test(e)&&new RegExp(f.opts.videoAllowedProviders.join("|")).test(n.provider))return!0}return!1}).map(function(){return 0===be(this).parents("object").length?this:be(this).parents("object").get(0)}).wrap('<span class="fr-video" contenteditable="false"></span>');for(var e,t,n=f.$el.find("span.fr-video, video"),r=0;r<n.length;r++){var i=be(n[r]);!f.opts.htmlUntouched&&f.opts.useClasses?((t=i).hasClass("fr-dvi")||t.hasClass("fr-dvb")||(t.addClass("fr-fv"+z(t)[0]),t.addClass("fr-dv"+Y(t)[0])),f.opts.videoTextNear||i.removeClass("fr-dvi").addClass("fr-dvb")):f.opts.htmlUntouched||f.opts.useClasses||(X(e=i,e.hasClass("fr-dvb")?"block":e.hasClass("fr-dvi")?"inline":null,e.hasClass("fr-fvl")?"left":e.hasClass("fr-fvr")?"right":z(e)),e.removeClass("fr-dvb fr-dvi fr-fvr fr-fvl"))}n.toggleClass("fr-draggable",f.opts.videoMove)}function j(){if(u){f.selection.clear();var e=f.doc.createRange();e.selectNode(u.get(0)),f.selection.get().addRange(e)}}return i[1]="Video cannot be loaded from the passed link.",i[l]="No link in upload response.",i[h]="Error during file upload.",i[g]="Parsing response failed.",i[m]="File is too large.",i[v]="Video file type is invalid.",i[7]="Files can be uploaded only to same domain in IE 8 and IE 9.",f.shared.vid_exit_flag=!1,{_init:function(){f.events.on("drop",P,!0),f.events.on("mousedown window.mousedown",e),f.events.on("window.touchmove",B),f.events.on("mouseup window.mouseup",$),f.events.on("commands.mousedown",function(e){0<e.parents(".fr-toolbar").length&&$()}),f.events.on("video.hideResizer commands.undo commands.redo element.dropped",function(){$(!0)}),f.helpers.isMobile()&&(f.events.$on(f.$el,"touchstart","span.fr-video",function(){n=!1}),f.events.$on(f.$el,"touchmove",function(){n=!0})),f.events.on("html.set",q),q(),f.events.$on(f.$el,"mousedown","span.fr-video",function(e){e.stopPropagation()}),f.events.$on(f.$el,"click touchend","span.fr-video",function(e){if("false"==be(this).parents("[contenteditable]:not(.fr-element):not(.fr-img-caption):not(body):first").attr("contenteditable"))return!0;M.call(this,e)}),f.events.on("keydown",function(e){var t=e.which;return!u||t!=be.FE.KEYCODE.BACKSPACE&&t!=be.FE.KEYCODE.DELETE?u&&t==be.FE.KEYCODE.ESC?($(!0),e.preventDefault(),!1):u&&t!=be.FE.KEYCODE.F10&&!f.keys.isBrowserAction(e)?(e.preventDefault(),!1):void 0:(e.preventDefault(),G(),f.undo.saveStep(),!1)},!0),f.events.on("toolbar.esc",function(){if(u)return f.events.disableBlur(),f.events.focus(),!1},!0),f.events.on("toolbar.focusEditor",function(){if(u)return!1},!0),f.events.on("keydown",function(){f.$el.find("span.fr-video:empty").remove()}),f.$wp&&(k(),f.events.on("contentChanged",k)),o(!0),W(!0)},showInsertPopup:function(){var e=f.$tb.find('.fr-command[data-cmd="insertVideo"]'),t=f.popups.get("video.insert");if(t||(t=o()),S(),!t.hasClass("fr-active"))if(f.popups.refresh("video.insert"),f.popups.setContainer("video.insert",f.$tb),e.is(":visible")){var n=e.offset().left+e.outerWidth()/2,r=e.offset().top+(f.opts.toolbarBottom?10:e.outerHeight()-10);f.popups.show("video.insert",n,r,e.outerHeight())}else f.position.forSelection(t),f.popups.show("video.insert")},showLayer:function(e){var t,n,r=f.popups.get("video.insert");if(!u&&!f.opts.toolbarInline){var i=f.$tb.find('.fr-command[data-cmd="insertVideo"]');t=i.offset().left+i.outerWidth()/2,n=i.offset().top+(f.opts.toolbarBottom?10:i.outerHeight()-10)}f.opts.toolbarInline&&(n=r.offset().top-f.helpers.getPX(r.css("margin-top")),r.hasClass("fr-above")&&(n+=r.outerHeight())),r.find(".fr-layer").removeClass("fr-active"),r.find(".fr-"+e+"-layer").addClass("fr-active"),f.popups.show("video.insert",t,n,0),f.accessibility.focusPopup(r)},refreshByURLButton:function(e){f.popups.get("video.insert").find(".fr-video-by-url-layer").hasClass("fr-active")&&e.addClass("fr-active").attr("aria-pressed",!0)},refreshEmbedButton:function(e){f.popups.get("video.insert").find(".fr-video-embed-layer").hasClass("fr-active")&&e.addClass("fr-active").attr("aria-pressed",!0)},refreshUploadButton:function(e){f.popups.get("video.insert").find(".fr-video-upload-layer").hasClass("fr-active")&&e.addClass("fr-active").attr("aria-pressed",!0)},upload:U,insertByURL:function(e){void 0===e&&(e=(f.popups.get("video.insert").find('.fr-video-by-url-layer input[type="text"]').val()||"").trim());var t=null;if(/^http/.test(e)||(e="https://"+e),f.helpers.isURL(e))for(var n=0;n<be.FE.VIDEO_PROVIDERS.length;n++){var r=be.FE.VIDEO_PROVIDERS[n];if(r.test_regex.test(e)&&new RegExp(f.opts.videoAllowedProviders.join("|")).test(r.provider)){t=e.replace(r.url_regex,r.url_text),t=r.html.replace(/\{url\}/,t);break}}t?b(t):f.events.trigger("video.linkError",[e])},insertEmbed:function(e){void 0===e&&(e=f.popups.get("video.insert").find(".fr-video-embed-layer textarea").val()||""),0!==e.length&&be.FE.VIDEO_EMBED_REGEX.test(e)?b(e):f.events.trigger("video.codeError",[e])},insert:b,align:function(e){u.removeClass("fr-fvr fr-fvl"),!f.opts.htmlUntouched&&f.opts.useClasses?"left"==e?u.addClass("fr-fvl"):"right"==e&&u.addClass("fr-fvr"):X(u,Y(),e),j(),F(),a(),f.selection.clear()},refreshAlign:function(e){if(!u)return!1;e.find("> *:first").replaceWith(f.icon.create("video-align-"+z()))},refreshAlignOnShow:function(e,t){u&&t.find('.fr-command[data-param1="'+z()+'"]').addClass("fr-active").attr("aria-selected",!0)},display:function(e){u.removeClass("fr-dvi fr-dvb"),!f.opts.htmlUntouched&&f.opts.useClasses?"inline"==e?u.addClass("fr-dvi"):"block"==e&&u.addClass("fr-dvb"):X(u,e,z()),j(),F(),a(),f.selection.clear()},refreshDisplayOnShow:function(e,t){u&&t.find('.fr-command[data-param1="'+Y()+'"]').addClass("fr-active").attr("aria-selected",!0)},remove:G,hideProgressBar:S,showSizePopup:function(){var e=f.popups.get("video.size");e||(e=W()),S(),f.popups.refresh("video.size"),f.popups.setContainer("video.size",f.$sc);var t=u.find("iframe, embed, video"),n=t.offset().left+t.width()/2,r=t.offset().top+t.height();f.popups.show("video.size",n,r,t.height())},replace:function(){var e=f.popups.get("video.insert");e||(e=o()),f.popups.isVisible("video.insert")||(S(),f.popups.refresh("video.insert"),f.popups.setContainer("video.insert",f.$sc));var t=u.offset().left+u.width()/2,n=u.offset().top+u.height();f.popups.show("video.insert",t,n,u.outerHeight())},back:function(){u?(f.events.disableBlur(),u.trigger("click")):(f.events.disableBlur(),f.selection.restore(),f.events.enableBlur(),f.popups.hide("video.insert"),f.toolbar.showInline())},setSize:function(e,t){if(u){var n=f.popups.get("video.size"),r=u.find("iframe, embed, video");r.css("width",e||n.find('input[name="width"]').val()),r.css("height",t||n.find('input[name="height"]').val()),r.get(0).style.width&&r.removeAttr("width"),r.get(0).style.height&&r.removeAttr("height"),n.find("input:focus").blur(),setTimeout(function(){u.trigger("click")},f.helpers.isAndroid()?50:0)}},get:function(){return u}}},be.FE.RegisterCommand("insertVideo",{title:"Insert Video",undo:!1,focus:!0,refreshAfterCallback:!1,popup:!0,callback:function(){this.popups.isVisible("video.insert")?(this.$el.find(".fr-marker").length&&(this.events.disableBlur(),this.selection.restore()),this.popups.hide("video.insert")):this.video.showInsertPopup()},plugin:"video"}),be.FE.DefineIcon("insertVideo",{NAME:"video-camera",FA5NAME:"camera"}),be.FE.DefineIcon("videoByURL",{NAME:"link"}),be.FE.RegisterCommand("videoByURL",{title:"By URL",undo:!1,focus:!1,toggle:!0,callback:function(){this.video.showLayer("video-by-url")},refresh:function(e){this.video.refreshByURLButton(e)}}),be.FE.DefineIcon("videoEmbed",{NAME:"code"}),be.FE.RegisterCommand("videoEmbed",{title:"Embedded Code",undo:!1,focus:!1,toggle:!0,callback:function(){this.video.showLayer("video-embed")},refresh:function(e){this.video.refreshEmbedButton(e)}}),be.FE.DefineIcon("videoUpload",{NAME:"upload"}),be.FE.RegisterCommand("videoUpload",{title:"Upload Video",undo:!1,focus:!1,toggle:!0,callback:function(){this.video.showLayer("video-upload")},refresh:function(e){this.video.refreshUploadButton(e)}}),be.FE.RegisterCommand("videoInsertByURL",{undo:!0,focus:!0,callback:function(){this.video.insertByURL()}}),be.FE.RegisterCommand("videoInsertEmbed",{undo:!0,focus:!0,callback:function(){this.video.insertEmbed()}}),be.FE.DefineIcon("videoDisplay",{NAME:"star"}),be.FE.RegisterCommand("videoDisplay",{title:"Display",type:"dropdown",options:{inline:"Inline",block:"Break Text"},callback:function(e,t){this.video.display(t)},refresh:function(e){this.opts.videoTextNear||e.addClass("fr-hidden")},refreshOnShow:function(e,t){this.video.refreshDisplayOnShow(e,t)}}),be.FE.DefineIcon("video-align",{NAME:"align-left"}),be.FE.DefineIcon("video-align-left",{NAME:"align-left"}),be.FE.DefineIcon("video-align-right",{NAME:"align-right"}),be.FE.DefineIcon("video-align-center",{NAME:"align-justify"}),be.FE.DefineIcon("videoAlign",{NAME:"align-center"}),be.FE.RegisterCommand("videoAlign",{type:"dropdown",title:"Align",options:{left:"Align Left",center:"None",right:"Align Right"},html:function(){var e='<ul class="fr-dropdown-list" role="presentation">',t=be.FE.COMMANDS.videoAlign.options;for(var n in t)t.hasOwnProperty(n)&&(e+='<li role="presentation"><a class="fr-command fr-title" tabIndex="-1" role="option" data-cmd="videoAlign" data-param1="'+n+'" title="'+this.language.translate(t[n])+'">'+this.icon.create("video-align-"+n)+'<span class="fr-sr-only">'+this.language.translate(t[n])+"</span></a></li>");return e+="</ul>"},callback:function(e,t){this.video.align(t)},refresh:function(e){this.video.refreshAlign(e)},refreshOnShow:function(e,t){this.video.refreshAlignOnShow(e,t)}}),be.FE.DefineIcon("videoReplace",{NAME:"exchange",FA5NAME:"exchange-alt"}),be.FE.RegisterCommand("videoReplace",{title:"Replace",undo:!1,focus:!1,popup:!0,refreshAfterCallback:!1,callback:function(){this.video.replace()}}),be.FE.DefineIcon("videoRemove",{NAME:"trash"}),be.FE.RegisterCommand("videoRemove",{title:"Remove",callback:function(){this.video.remove()}}),be.FE.DefineIcon("videoSize",{NAME:"arrows-alt"}),be.FE.RegisterCommand("videoSize",{undo:!1,focus:!1,popup:!0,title:"Change Size",callback:function(){this.video.showSizePopup()}}),be.FE.DefineIcon("videoBack",{NAME:"arrow-left"}),be.FE.RegisterCommand("videoBack",{title:"Back",undo:!1,focus:!1,back:!0,callback:function(){this.video.back()},refresh:function(e){this.video.get()||this.opts.toolbarInline?(e.removeClass("fr-hidden"),e.next(".fr-separator").removeClass("fr-hidden")):(e.addClass("fr-hidden"),e.next(".fr-separator").addClass("fr-hidden"))}}),be.FE.RegisterCommand("videoDismissError",{title:"OK",undo:!1,callback:function(){this.video.hideProgressBar(!0)}}),be.FE.RegisterCommand("videoSetSize",{undo:!0,focus:!1,title:"Update",refreshAfterCallback:!1,callback:function(){this.video.setSize()}}),be.extend(be.FE.DEFAULTS,{wordDeniedTags:[],wordDeniedAttrs:[],wordAllowedStyleProps:["font-family","font-size","background","color","width","text-align","vertical-align","background-color","padding","margin","height","margin-top","margin-left","margin-right","margin-bottom","text-decoration","font-weight","font-style","text-indent"],wordPasteModal:!0}),be.FE.PLUGINS.wordPaste=function(T){var a,r,o="word_paste";function t(e){var t=T.opts.wordAllowedStyleProps;e||(T.opts.wordAllowedStyleProps=[]),0===r.indexOf("<colgroup>")&&(r="<table>"+r+"</table>"),r=function(e,t){!function(e){for(var t=e.split("v:shape"),n=1;n<t.length;n++){var r=t[n],i=r.split(' id="')[1];if(i&&1<i.length){i=i.split('"')[0];var a=r.split(' o:spid="')[1];a&&1<a.length&&(a=a.split('"')[0],h[i]=a)}}}(e=e.replace(/[.\s\S\w\W<>]*(<html[^>]*>[.\s\S\w\W<>]*<\/html>)[.\s\S\w\W<>]*/i,"$1"));var n=(new DOMParser).parseFromString(e,"text/html"),r=n.head,i=n.body,o=function(e){var t={},n=e.getElementsByTagName("style");if(n.length){var r=n[0],i=r.innerHTML.match(/[\S ]+\s+{[\s\S]+?}/gi);if(i)for(var a=0;a<i.length;a++){var o=i[a],s=o.replace(/([\S ]+\s+){[\s\S]+?}/gi,"$1"),l=o.replace(/[\S ]+\s+{([\s\S]+?)}/gi,"$1");s=s.replace(/^[\s]|[\s]$/gm,""),l=l.replace(/^[\s]|[\s]$/gm,""),s=s.replace(/\n|\r|\n\r/g,""),l=l.replace(/\n|\r|\n\r/g,"");for(var d=s.split(", "),c=0;c<d.length;c++)t[d[c]]=l}}return t}(r);c(i,function(e){if(e.nodeType==Node.TEXT_NODE&&/\n|\u00a0|\r/.test(e.data)){if(!/\S| /.test(e.data))return e.data==be.FE.UNICODE_NBSP?(e.data="\u200b",!0):1==e.data.length&&10==e.data.charCodeAt(0)?(e.data=" ",!0):(A(e),!1);e.data=e.data.replace(/\n|\r/gi," ")}return!0}),c(i,function(e){return e.nodeType!=Node.ELEMENT_NODE||"V:IMAGEDATA"!=e.tagName&&"IMG"!=e.tagName||function(e,t){if(!t)return;var n;if("IMG"==e.tagName){var r=e.getAttribute("src");if(!r||-1==r.indexOf("file://"))return;if(0===r.indexOf("file://")&&T.helpers.isURL(e.getAttribute("alt")))return e.setAttribute("src",e.getAttribute("alt"));(n=h[e.getAttribute("v:shapes")])||(n=e.getAttribute("v:shapes"))}else n=e.parentNode.getAttribute("o:spid");if(e.removeAttribute("height"),!n)return;i=t,u={},f(i,"i","\\shppict"),f(i,"s","\\shp{");var i;var a=u[n.substring(7)];if(a){var o=function(e){for(var t=e.match(/[0-9a-f]{2}/gi),n=[],r=0;r<t.length;r++)n.push(String.fromCharCode(parseInt(t[r],16)));var i=n.join("");return btoa(i)}(a.image_hex),s="data:"+a.image_type+";base64,"+o;"IMG"===e.tagName?(e.src=s,e.setAttribute("data-fr-image-pasted",!0)):be(e.parentNode).before('<img data-fr-image-pasted="true" src="'+s+'" style="'+e.parentNode.getAttribute("style")+'">').remove()}}(e,t),!0});for(var a=i.querySelectorAll("ul > ul, ul > ol, ol > ul, ol > ol"),s=a.length-1;0<=s;s--)a[s].previousElementSibling&&"LI"===a[s].previousElementSibling.tagName&&a[s].previousElementSibling.appendChild(a[s]);c(i,function(t){if(t.nodeType==Node.TEXT_NODE)return t.data=t.data.replace(/<br>(\n|\r)/gi,"<br>"),!1;if(t.nodeType==Node.ELEMENT_NODE){if(C(t)){var n=t.parentNode,r=t.previousSibling,i=function e(t,n){var r=/[0-9a-zA-Z]./gi;var i=!1;t.firstElementChild&&t.firstElementChild.firstElementChild&&t.firstElementChild.firstElementChild.firstChild&&!(i=i||r.test(t.firstElementChild.firstElementChild.firstChild.data||""))&&t.firstElementChild.firstElementChild.firstElementChild&&t.firstElementChild.firstElementChild.firstElementChild.firstChild&&(i=i||r.test(t.firstElementChild.firstElementChild.firstElementChild.firstChild.data||""));var a=i?"ol":"ul";var o=g(t);var s="<"+a+"><li>"+m(t,n);var l=t.nextElementSibling;var d=t.parentNode;A(t);t=null;for(;l&&C(l);){var c=l.previousElementSibling,f=g(l);if(o<f)s+=e(l,n).outerHTML;else{if(f<o)break;s+="</li><li>"+m(l,n)}if(o=f,l.previousElementSibling||l.nextElementSibling||l.parentNode){var p=l;l=l.nextElementSibling,A(p),p=null}else l=c?c.nextElementSibling:d.firstElementChild}s+="</li></"+a+">";var u=document.createElement("div");u.innerHTML=s;var h=u.firstElementChild;return h}(t,o),a=null;return(a=r?r.nextSibling:n.firstChild)?n.insertBefore(i,a):n.appendChild(i),!1}return p(t,o)}return t.nodeType!=Node.COMMENT_NODE||(A(t),!1)}),c(i,function(e){if(e.nodeType==Node.ELEMENT_NODE){var t=e.tagName;if(!e.innerHTML&&-1==["BR","IMG"].indexOf(t)){for(var n=e.parentNode;n&&(A(e),!(e=n).innerHTML);)n=e.parentNode;return!1}!function(e){var t=e.getAttribute("style");if(!t)return;(t=R(t))&&";"!=t.slice(-1)&&(t+=";");var n=t.match(/(^|\S+?):.+?;{1,1}/gi);if(!n)return;for(var r={},i=0;i<n.length;i++){var a=n[i],o=a.split(":");2==o.length&&("text-align"==o[0]&&"SPAN"==e.tagName||(r[o[0]]=o[1]))}var s="";for(var l in r)if(r.hasOwnProperty(l)){if("font-size"==l&&"pt;"==r[l].slice(-3)){var d=null;try{d=parseFloat(r[l].slice(0,-3),10)}catch(c){}d&&(d=Math.round(1.33*d),r[l]=d+"px;")}s+=l+":"+r[l]}s&&e.setAttribute("style",s)}(e)}return!0});var l=i.outerHTML,d=T.opts.htmlAllowedStyleProps;return T.opts.htmlAllowedStyleProps=T.opts.wordAllowedStyleProps,l=T.clean.html(l,T.opts.wordDeniedTags,T.opts.wordDeniedAttrs,!1),T.opts.htmlAllowedStyleProps=d,l}(r=r.replace(/<span[\n\r ]*style='mso-spacerun:yes'>([\r\n\u00a0 ]*)<\/span>/g,function(e,t){for(var n="",r=0;r++<t.length;)n+="&nbsp;";return n}),T.paste.getRtfClipboard());var n=T.doc.createElement("DIV");n.innerHTML=r,T.html.cleanBlankSpaces(n),r=n.innerHTML,r=(r=T.paste.cleanEmptyTagsAndDivs(r)).replace(/\u200b/g,""),T.modals.hide(o),T.paste.clean(r,!0,!0),T.opts.wordAllowedStyleProps=t}function A(e){e.parentNode&&e.parentNode.removeChild(e)}function c(e,t){if(t(e))for(var n=e.firstChild;n;){var r=n,i=n.previousSibling;n=n.nextSibling,c(r,t),r.previousSibling||r.nextSibling||r.parentNode||!n||i==n.previousSibling||!n.parentNode?r.previousSibling||r.nextSibling||r.parentNode||!n||n.previousSibling||n.nextSibling||n.parentNode||(i?n=i.nextSibling?i.nextSibling.nextSibling:null:e.firstChild&&(n=e.firstChild.nextSibling)):n=i?i.nextSibling:e.firstChild}}function C(e){if(!e.getAttribute("style")||!/mso-list:[\s]*l/gi.test(e.getAttribute("style").replace(/\n/gi,"")))return!1;try{if(!e.querySelector('[style="mso-list:Ignore"]'))return!1}catch(t){return!1}return!0}function g(e){return e.getAttribute("style").replace(/\n/gi,"").replace(/.*level([0-9]+?).*/gi,"$1")}function m(e,t){var n=e.cloneNode(!0);if(-1!=["H1","H2","H3","H4","H5","H6"].indexOf(e.tagName)){var r=document.createElement(e.tagName.toLowerCase());r.setAttribute("style",e.getAttribute("style")),r.innerHTML=n.innerHTML,n.innerHTML=r.outerHTML}c(n,function(e){return e.nodeType==Node.ELEMENT_NODE&&("mso-list:Ignore"==e.getAttribute("style")&&e.parentNode.removeChild(e),p(e,t)),!0});var i=n.innerHTML;return i=i.replace(/<!--[\s\S]*?-->/gi,"")}function v(e,t){for(var n=document.createElement(t),r=0;r<e.attributes.length;r++){var i=e.attributes[r].name;n.setAttribute(i,e.getAttribute(i))}return n.innerHTML=e.innerHTML,e.parentNode.replaceChild(n,e),n}function S(e){var t=e.getAttribute("align");t&&(e.style["text-align"]=t,e.removeAttribute("align"))}function R(e){return e.replace(/\n|\r|\n\r|&quot;/g,"")}function y(e,t,n){if(t){var r=e.getAttribute("style");r&&";"!=r.slice(-1)&&(r+=";"),t&&";"!=t.slice(-1)&&(t+=";"),t=t.replace(/\n/gi,"");var i=null;i=n?(r||"")+t:t+(r||""),e.setAttribute("style",i)}}var u=null;function f(e,t,n){for(var r=e.split(n),i=1;i<r.length;i++){var a=r[i];if(1<(a=a.split("shplid")).length){a=a[1];for(var o="",s=0;s<a.length&&"\\"!=a[s]&&"{"!=a[s]&&" "!=a[s]&&"\r"!=a[s]&&"\n"!=a[s];)o+=a[s],s++;var l=a.split("bliptag");if(l&&l.length<2)continue;var d=null;if(-1!=l[0].indexOf("pngblip")?d="image/png":-1!=l[0].indexOf("jpegblip")&&(d="image/jpeg"),!d)continue;var c,f=l[1].split("}");if(f&&f.length<2)continue;if(2<f.length&&-1!=f[0].indexOf("blipuid"))c=f[1].split(" ");else{if((c=f[0].split(" "))&&c.length<2)continue;c.shift()}var p=c.join("");u[t+o]={image_hex:p,image_type:d}}}}function p(e,t){var n=e.tagName,r=n.toLowerCase();e.firstElementChild&&("I"==e.firstElementChild.tagName?v(e.firstElementChild,"em"):"B"==e.firstElementChild.tagName&&v(e.firstElementChild,"strong"));if(-1!=["SCRIPT","APPLET","EMBED","NOFRAMES","NOSCRIPT"].indexOf(n))return A(e),!1;var i=-1,a=["META","LINK","XML","ST1:","O:","W:","FONT"];for(i=0;i<a.length;i++)if(-1!=n.indexOf(a[i]))return e.innerHTML&&(e.outerHTML=e.innerHTML),A(e),!1;if("TD"!=n){var o=e.getAttribute("class");if(t&&o){var s=(o=R(o)).split(" ");for(i=0;i<s.length;i++){var l=[],d="."+s[i];l.push(d),d=r+d,l.push(d);for(var c=0;c<l.length;c++)t[l[c]]&&y(e,t[l[c]])}e.removeAttribute("class")}t&&t[r]&&y(e,t[r])}if(-1!=["P","H1","H2","H3","H4","H5","H6","PRE"].indexOf(n)){var f=e.getAttribute("class");if(f&&(t&&t[n.toLowerCase()+"."+f]&&y(e,t[n.toLowerCase()+"."+f]),-1!=f.toLowerCase().indexOf("mso"))){var p=R(f);(p=p.replace(/[0-9a-z-_]*mso[0-9a-z-_]*/gi,""))?e.setAttribute("class",p):e.removeAttribute("class")}var u=e.getAttribute("style");if(u){var h=u.match(/text-align:.+?[; "]{1,1}/gi);h&&h[h.length-1].replace(/(text-align:.+?[; "]{1,1})/gi,"$1")}S(e)}if("TR"==n&&function(e,t){T.node.clearAttributes(e);for(var n=e.firstElementChild,r=0,i=!1,a=null;n;){n.firstElementChild&&-1!=n.firstElementChild.tagName.indexOf("W:")&&(n.innerHTML=n.firstElementChild.innerHTML),(a=n.getAttribute("width"))||i||(i=!0),r+=parseInt(a,10),(!n.firstChild||n.firstChild&&n.firstChild.data==be.FE.UNICODE_NBSP)&&(n.firstChild&&A(n.firstChild),n.innerHTML="<br>");for(var o=n.firstElementChild,s=1==n.children.length;o;)"P"!=o.tagName||C(o)||s&&S(o),o=o.nextElementSibling;if(t){var l=n.getAttribute("class");if(l){var d=(l=R(l)).match(/xl[0-9]+/gi);if(d){var c="."+d[0];t[c]&&y(n,t[c])}}t.td&&y(n,t.td)}var f=n.getAttribute("style");f&&(f=R(f))&&";"!=f.slice(-1)&&(f+=";");var p=n.getAttribute("valign");if(!p&&f){var u=f.match(/vertical-align:.+?[; "]{1,1}/gi);u&&(p=u[u.length-1].replace(/vertical-align:(.+?)[; "]{1,1}/gi,"$1"))}var h=null;if(f){var g=f.match(/text-align:.+?[; "]{1,1}/gi);g&&(h=g[g.length-1].replace(/text-align:(.+?)[; "]{1,1}/gi,"$1")),"general"==h&&(h=null)}var m=null;if(f){var v=f.match(/background:.+?[; "]{1,1}/gi);v&&(m=v[v.length-1].replace(/background:(.+?)[; "]{1,1}/gi,"$1"))}var E=n.getAttribute("colspan"),b=n.getAttribute("rowspan");E&&n.setAttribute("colspan",E),b&&n.setAttribute("rowspan",b),p&&(n.style["vertical-align"]=p),h&&(n.style["text-align"]=h),m&&(n.style["background-color"]=m),a&&n.setAttribute("width",a),n=n.nextElementSibling}for(n=e.firstElementChild;n;)a=n.getAttribute("width"),i?n.removeAttribute("width"):n.setAttribute("width",100*parseInt(a,10)/r+"%"),n=n.nextElementSibling}(e,t),"A"!=n||e.attributes.getNamedItem("href")||e.attributes.getNamedItem("name")||!e.innerHTML||(e.outerHTML=e.innerHTML),"TD"!=n&&"TH"!=n||e.innerHTML||(e.innerHTML="<br>"),"TABLE"==n&&(e.style.width="100%"),e.getAttribute("lang")&&e.removeAttribute("lang"),e.getAttribute("style")&&-1!=e.getAttribute("style").toLowerCase().indexOf("mso")){var g=R(e.getAttribute("style"));(g=g.replace(/[0-9a-z-_]*mso[0-9a-z-_]*:.+?(;{1,1}|$)/gi,""))?e.setAttribute("style",g):e.removeAttribute("style")}return!0}var h={};return{_init:function(){T.events.on("paste.wordPaste",function(e){return r=e,T.opts.wordPasteModal?function(){if(!a){var e='<h4><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 74.95 73.23" style="height: 25px; vertical-align: text-bottom; margin-right: 5px; display: inline-block"><defs><style>.a{fill:#2a5699;}.b{fill:#fff;}</style></defs><path class="a" d="M615.15,827.22h5.09V834c9.11.05,18.21-.09,27.32.05a2.93,2.93,0,0,1,3.29,3.25c.14,16.77,0,33.56.09,50.33-.09,1.72.17,3.63-.83,5.15-1.24.89-2.85.78-4.3.84-8.52,0-17,0-25.56,0v6.81h-5.32c-13-2.37-26-4.54-38.94-6.81q0-29.8,0-59.59c13.05-2.28,26.11-4.5,39.17-6.83Z" transform="translate(-575.97 -827.22)"/><path class="b" d="M620.24,836.59h28.1v54.49h-28.1v-6.81h22.14v-3.41H620.24v-4.26h22.14V873.2H620.24v-4.26h22.14v-3.41H620.24v-4.26h22.14v-3.41H620.24v-4.26h22.14v-3.41H620.24V846h22.14v-3.41H620.24Zm-26.67,15c1.62-.09,3.24-.16,4.85-.25,1.13,5.75,2.29,11.49,3.52,17.21,1-5.91,2-11.8,3.06-17.7,1.7-.06,3.41-.15,5.1-.26-1.92,8.25-3.61,16.57-5.71,24.77-1.42.74-3.55,0-5.24.09-1.13-5.64-2.45-11.24-3.47-16.9-1,5.5-2.29,10.95-3.43,16.42q-2.45-.13-4.92-.3c-1.41-7.49-3.07-14.93-4.39-22.44l4.38-.18c.88,5.42,1.87,10.82,2.64,16.25,1.2-5.57,2.43-11.14,3.62-16.71Z" transform="translate(-575.97 -827.22)"/></svg> '+T.language.translate("Word Paste Detected")+"</h4>",t=(i='<div class="fr-word-paste-modal" style="padding: 20px 20px 10px 20px;">',i+='<p style="text-align: left;">'+T.language.translate("The pasted content is coming from a Microsoft Word document. Do you want to keep the format or clean it up?")+"</p>",i+='<div style="text-align: right; margin-top: 50px;"><button class="fr-remove-word fr-command">'+T.language.translate("Clean")+'</button> <button class="fr-keep-word fr-command">'+T.language.translate("Keep")+"</button></div>",i+="</div>"),n=T.modals.create(o,e,t),r=n.$body;a=n.$modal,n.$modal.addClass("fr-middle"),T.events.bindClick(r,"button.fr-remove-word",function(){var e=a.data("instance")||T;e.wordPaste.clean()}),T.events.bindClick(r,"button.fr-keep-word",function(){var e=a.data("instance")||T;e.wordPaste.clean(!0)}),T.events.$on(be(T.o_win),"resize",function(){T.modals.resize(o)})}var i;T.modals.show(o),T.modals.resize(o)}():t(!0),!1})},clean:t}}});
/* Javascript plotting library for jQuery, version 0.8.3.

Copyright (c) 2007-2014 IOLA and Ole Laursen.
Licensed under the MIT license.

*/

// first an inline dependency, jquery.colorhelpers.js, we inline it here
// for convenience

/* Plugin for jQuery for working with colors.
 *
 * Version 1.1.
 *
 * Inspiration from jQuery color animation plugin by John Resig.
 *
 * Released under the MIT license by Ole Laursen, October 2009.
 *
 * Examples:
 *
 *   $.color.parse("#fff").scale('rgb', 0.25).add('a', -0.5).toString()
 *   var c = $.color.extract($("#mydiv"), 'background-color');
 *   console.log(c.r, c.g, c.b, c.a);
 *   $.color.make(100, 50, 25, 0.4).toString() // returns "rgba(100,50,25,0.4)"
 *
 * Note that .scale() and .add() return the same modified object
 * instead of making a new one.
 *
 * V. 1.1: Fix error handling so e.g. parsing an empty string does
 * produce a color rather than just crashing.
 */
(function($){$.color={};$.color.make=function(r,g,b,a){var o={};o.r=r||0;o.g=g||0;o.b=b||0;o.a=a!=null?a:1;o.add=function(c,d){for(var i=0;i<c.length;++i)o[c.charAt(i)]+=d;return o.normalize()};o.scale=function(c,f){for(var i=0;i<c.length;++i)o[c.charAt(i)]*=f;return o.normalize()};o.toString=function(){if(o.a>=1){return"rgb("+[o.r,o.g,o.b].join(",")+")"}else{return"rgba("+[o.r,o.g,o.b,o.a].join(",")+")"}};o.normalize=function(){function clamp(min,value,max){return value<min?min:value>max?max:value}o.r=clamp(0,parseInt(o.r),255);o.g=clamp(0,parseInt(o.g),255);o.b=clamp(0,parseInt(o.b),255);o.a=clamp(0,o.a,1);return o};o.clone=function(){return $.color.make(o.r,o.b,o.g,o.a)};return o.normalize()};$.color.extract=function(elem,css){var c;do{c=elem.css(css).toLowerCase();if(c!=""&&c!="transparent")break;elem=elem.parent()}while(elem.length&&!$.nodeName(elem.get(0),"body"));if(c=="rgba(0, 0, 0, 0)")c="transparent";return $.color.parse(c)};$.color.parse=function(str){var res,m=$.color.make;if(res=/rgb\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*\)/.exec(str))return m(parseInt(res[1],10),parseInt(res[2],10),parseInt(res[3],10));if(res=/rgba\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]+(?:\.[0-9]+)?)\s*\)/.exec(str))return m(parseInt(res[1],10),parseInt(res[2],10),parseInt(res[3],10),parseFloat(res[4]));if(res=/rgb\(\s*([0-9]+(?:\.[0-9]+)?)\%\s*,\s*([0-9]+(?:\.[0-9]+)?)\%\s*,\s*([0-9]+(?:\.[0-9]+)?)\%\s*\)/.exec(str))return m(parseFloat(res[1])*2.55,parseFloat(res[2])*2.55,parseFloat(res[3])*2.55);if(res=/rgba\(\s*([0-9]+(?:\.[0-9]+)?)\%\s*,\s*([0-9]+(?:\.[0-9]+)?)\%\s*,\s*([0-9]+(?:\.[0-9]+)?)\%\s*,\s*([0-9]+(?:\.[0-9]+)?)\s*\)/.exec(str))return m(parseFloat(res[1])*2.55,parseFloat(res[2])*2.55,parseFloat(res[3])*2.55,parseFloat(res[4]));if(res=/#([a-fA-F0-9]{2})([a-fA-F0-9]{2})([a-fA-F0-9]{2})/.exec(str))return m(parseInt(res[1],16),parseInt(res[2],16),parseInt(res[3],16));if(res=/#([a-fA-F0-9])([a-fA-F0-9])([a-fA-F0-9])/.exec(str))return m(parseInt(res[1]+res[1],16),parseInt(res[2]+res[2],16),parseInt(res[3]+res[3],16));var name=$.trim(str).toLowerCase();if(name=="transparent")return m(255,255,255,0);else{res=lookupColors[name]||[0,0,0];return m(res[0],res[1],res[2])}};var lookupColors={aqua:[0,255,255],azure:[240,255,255],beige:[245,245,220],black:[0,0,0],blue:[0,0,255],brown:[165,42,42],cyan:[0,255,255],darkblue:[0,0,139],darkcyan:[0,139,139],darkgrey:[169,169,169],darkgreen:[0,100,0],darkkhaki:[189,183,107],darkmagenta:[139,0,139],darkolivegreen:[85,107,47],darkorange:[255,140,0],darkorchid:[153,50,204],darkred:[139,0,0],darksalmon:[233,150,122],darkviolet:[148,0,211],fuchsia:[255,0,255],gold:[255,215,0],green:[0,128,0],indigo:[75,0,130],khaki:[240,230,140],lightblue:[173,216,230],lightcyan:[224,255,255],lightgreen:[144,238,144],lightgrey:[211,211,211],lightpink:[255,182,193],lightyellow:[255,255,224],lime:[0,255,0],magenta:[255,0,255],maroon:[128,0,0],navy:[0,0,128],olive:[128,128,0],orange:[255,165,0],pink:[255,192,203],purple:[128,0,128],violet:[128,0,128],red:[255,0,0],silver:[192,192,192],white:[255,255,255],yellow:[255,255,0]}})(jQuery);

// the actual Flot code
(function($) {

	// Cache the prototype hasOwnProperty for faster access

	var hasOwnProperty = Object.prototype.hasOwnProperty;

    // A shim to provide 'detach' to jQuery versions prior to 1.4.  Using a DOM
    // operation produces the same effect as detach, i.e. removing the element
    // without touching its jQuery data.

    // Do not merge this into Flot 0.9, since it requires jQuery 1.4.4+.

    if (!$.fn.detach) {
        $.fn.detach = function() {
            return this.each(function() {
                if (this.parentNode) {
                    this.parentNode.removeChild( this );
                }
            });
        };
    }

	///////////////////////////////////////////////////////////////////////////
	// The Canvas object is a wrapper around an HTML5 <canvas> tag.
	//
	// @constructor
	// @param {string} cls List of classes to apply to the canvas.
	// @param {element} container Element onto which to append the canvas.
	//
	// Requiring a container is a little iffy, but unfortunately canvas
	// operations don't work unless the canvas is attached to the DOM.

	function Canvas(cls, container) {

		var element = container.children("." + cls)[0];

		if (element == null) {

			element = document.createElement("canvas");
			element.className = cls;

			$(element).css({ direction: "ltr", position: "absolute", left: 0, top: 0 })
				.appendTo(container);

			// If HTML5 Canvas isn't available, fall back to [Ex|Flash]canvas

			if (!element.getContext) {
				if (window.G_vmlCanvasManager) {
					element = window.G_vmlCanvasManager.initElement(element);
				} else {
					throw new Error("Canvas is not available. If you're using IE with a fall-back such as Excanvas, then there's either a mistake in your conditional include, or the page has no DOCTYPE and is rendering in Quirks Mode.");
				}
			}
		}

		this.element = element;

		var context = this.context = element.getContext("2d");

		// Determine the screen's ratio of physical to device-independent
		// pixels.  This is the ratio between the canvas width that the browser
		// advertises and the number of pixels actually present in that space.

		// The iPhone 4, for example, has a device-independent width of 320px,
		// but its screen is actually 640px wide.  It therefore has a pixel
		// ratio of 2, while most normal devices have a ratio of 1.

		var devicePixelRatio = window.devicePixelRatio || 1,
			backingStoreRatio =
				context.webkitBackingStorePixelRatio ||
				context.mozBackingStorePixelRatio ||
				context.msBackingStorePixelRatio ||
				context.oBackingStorePixelRatio ||
				context.backingStorePixelRatio || 1;

		this.pixelRatio = devicePixelRatio / backingStoreRatio;

		// Size the canvas to match the internal dimensions of its container

		this.resize(container.width(), container.height());

		// Collection of HTML div layers for text overlaid onto the canvas

		this.textContainer = null;
		this.text = {};

		// Cache of text fragments and metrics, so we can avoid expensively
		// re-calculating them when the plot is re-rendered in a loop.

		this._textCache = {};
	}

	// Resizes the canvas to the given dimensions.
	//
	// @param {number} width New width of the canvas, in pixels.
	// @param {number} width New height of the canvas, in pixels.

	Canvas.prototype.resize = function(width, height) {

		if (width <= 0 || height <= 0) {
			throw new Error("Invalid dimensions for plot, width = " + width + ", height = " + height);
		}

		var element = this.element,
			context = this.context,
			pixelRatio = this.pixelRatio;

		// Resize the canvas, increasing its density based on the display's
		// pixel ratio; basically giving it more pixels without increasing the
		// size of its element, to take advantage of the fact that retina
		// displays have that many more pixels in the same advertised space.

		// Resizing should reset the state (excanvas seems to be buggy though)

		if (this.width != width) {
			element.width = width * pixelRatio;
			element.style.width = width + "px";
			this.width = width;
		}

		if (this.height != height) {
			element.height = height * pixelRatio;
			element.style.height = height + "px";
			this.height = height;
		}

		// Save the context, so we can reset in case we get replotted.  The
		// restore ensure that we're really back at the initial state, and
		// should be safe even if we haven't saved the initial state yet.

		context.restore();
		context.save();

		// Scale the coordinate space to match the display density; so even though we
		// may have twice as many pixels, we still want lines and other drawing to
		// appear at the same size; the extra pixels will just make them crisper.

		context.scale(pixelRatio, pixelRatio);
	};

	// Clears the entire canvas area, not including any overlaid HTML text

	Canvas.prototype.clear = function() {
		this.context.clearRect(0, 0, this.width, this.height);
	};

	// Finishes rendering the canvas, including managing the text overlay.

	Canvas.prototype.render = function() {

		var cache = this._textCache;

		// For each text layer, add elements marked as active that haven't
		// already been rendered, and remove those that are no longer active.

		for (var layerKey in cache) {
			if (hasOwnProperty.call(cache, layerKey)) {

				var layer = this.getTextLayer(layerKey),
					layerCache = cache[layerKey];

				layer.hide();

				for (var styleKey in layerCache) {
					if (hasOwnProperty.call(layerCache, styleKey)) {
						var styleCache = layerCache[styleKey];
						for (var key in styleCache) {
							if (hasOwnProperty.call(styleCache, key)) {

								var positions = styleCache[key].positions;

								for (var i = 0, position; position = positions[i]; i++) {
									if (position.active) {
										if (!position.rendered) {
											layer.append(position.element);
											position.rendered = true;
										}
									} else {
										positions.splice(i--, 1);
										if (position.rendered) {
											position.element.detach();
										}
									}
								}

								if (positions.length == 0) {
									delete styleCache[key];
								}
							}
						}
					}
				}

				layer.show();
			}
		}
	};

	// Creates (if necessary) and returns the text overlay container.
	//
	// @param {string} classes String of space-separated CSS classes used to
	//     uniquely identify the text layer.
	// @return {object} The jQuery-wrapped text-layer div.

	Canvas.prototype.getTextLayer = function(classes) {

		var layer = this.text[classes];

		// Create the text layer if it doesn't exist

		if (layer == null) {

			// Create the text layer container, if it doesn't exist

			if (this.textContainer == null) {
				this.textContainer = $("<div class='flot-text'></div>")
					.css({
						position: "absolute",
						top: 0,
						left: 0,
						bottom: 0,
						right: 0,
						'font-size': "smaller",
						color: "#545454"
					})
					.insertAfter(this.element);
			}

			layer = this.text[classes] = $("<div></div>")
				.addClass(classes)
				.css({
					position: "absolute",
					top: 0,
					left: 0,
					bottom: 0,
					right: 0
				})
				.appendTo(this.textContainer);
		}

		return layer;
	};

	// Creates (if necessary) and returns a text info object.
	//
	// The object looks like this:
	//
	// {
	//     width: Width of the text's wrapper div.
	//     height: Height of the text's wrapper div.
	//     element: The jQuery-wrapped HTML div containing the text.
	//     positions: Array of positions at which this text is drawn.
	// }
	//
	// The positions array contains objects that look like this:
	//
	// {
	//     active: Flag indicating whether the text should be visible.
	//     rendered: Flag indicating whether the text is currently visible.
	//     element: The jQuery-wrapped HTML div containing the text.
	//     x: X coordinate at which to draw the text.
	//     y: Y coordinate at which to draw the text.
	// }
	//
	// Each position after the first receives a clone of the original element.
	//
	// The idea is that that the width, height, and general 'identity' of the
	// text is constant no matter where it is placed; the placements are a
	// secondary property.
	//
	// Canvas maintains a cache of recently-used text info objects; getTextInfo
	// either returns the cached element or creates a new entry.
	//
	// @param {string} layer A string of space-separated CSS classes uniquely
	//     identifying the layer containing this text.
	// @param {string} text Text string to retrieve info for.
	// @param {(string|object)=} font Either a string of space-separated CSS
	//     classes or a font-spec object, defining the text's font and style.
	// @param {number=} angle Angle at which to rotate the text, in degrees.
	//     Angle is currently unused, it will be implemented in the future.
	// @param {number=} width Maximum width of the text before it wraps.
	// @return {object} a text info object.

	Canvas.prototype.getTextInfo = function(layer, text, font, angle, width) {

		var textStyle, layerCache, styleCache, info;

		// Cast the value to a string, in case we were given a number or such

		text = "" + text;

		// If the font is a font-spec object, generate a CSS font definition

		if (typeof font === "object") {
			textStyle = font.style + " " + font.variant + " " + font.weight + " " + font.size + "px/" + font.lineHeight + "px " + font.family;
		} else {
			textStyle = font;
		}

		// Retrieve (or create) the cache for the text's layer and styles

		layerCache = this._textCache[layer];

		if (layerCache == null) {
			layerCache = this._textCache[layer] = {};
		}

		styleCache = layerCache[textStyle];

		if (styleCache == null) {
			styleCache = layerCache[textStyle] = {};
		}

		info = styleCache[text];

		// If we can't find a matching element in our cache, create a new one

		if (info == null) {

			var element = $("<div></div>").html(text)
				.css({
					position: "absolute",
					'max-width': width,
					top: -9999
				})
				.appendTo(this.getTextLayer(layer));

			if (typeof font === "object") {
				element.css({
					font: textStyle,
					color: font.color
				});
			} else if (typeof font === "string") {
				element.addClass(font);
			}

			info = styleCache[text] = {
				width: element.outerWidth(true),
				height: element.outerHeight(true),
				element: element,
				positions: []
			};

			element.detach();
		}

		return info;
	};

	// Adds a text string to the canvas text overlay.
	//
	// The text isn't drawn immediately; it is marked as rendering, which will
	// result in its addition to the canvas on the next render pass.
	//
	// @param {string} layer A string of space-separated CSS classes uniquely
	//     identifying the layer containing this text.
	// @param {number} x X coordinate at which to draw the text.
	// @param {number} y Y coordinate at which to draw the text.
	// @param {string} text Text string to draw.
	// @param {(string|object)=} font Either a string of space-separated CSS
	//     classes or a font-spec object, defining the text's font and style.
	// @param {number=} angle Angle at which to rotate the text, in degrees.
	//     Angle is currently unused, it will be implemented in the future.
	// @param {number=} width Maximum width of the text before it wraps.
	// @param {string=} halign Horizontal alignment of the text; either "left",
	//     "center" or "right".
	// @param {string=} valign Vertical alignment of the text; either "top",
	//     "middle" or "bottom".

	Canvas.prototype.addText = function(layer, x, y, text, font, angle, width, halign, valign) {

		var info = this.getTextInfo(layer, text, font, angle, width),
			positions = info.positions;

		// Tweak the div's position to match the text's alignment

		if (halign == "center") {
			x -= info.width / 2;
		} else if (halign == "right") {
			x -= info.width;
		}

		if (valign == "middle") {
			y -= info.height / 2;
		} else if (valign == "bottom") {
			y -= info.height;
		}

		// Determine whether this text already exists at this position.
		// If so, mark it for inclusion in the next render pass.

		for (var i = 0, position; position = positions[i]; i++) {
			if (position.x == x && position.y == y) {
				position.active = true;
				return;
			}
		}

		// If the text doesn't exist at this position, create a new entry

		// For the very first position we'll re-use the original element,
		// while for subsequent ones we'll clone it.

		position = {
			active: true,
			rendered: false,
			element: positions.length ? info.element.clone() : info.element,
			x: x,
			y: y
		};

		positions.push(position);

		// Move the element to its final position within the container

		position.element.css({
			top: Math.round(y),
			left: Math.round(x),
			'text-align': halign	// In case the text wraps
		});
	};

	// Removes one or more text strings from the canvas text overlay.
	//
	// If no parameters are given, all text within the layer is removed.
	//
	// Note that the text is not immediately removed; it is simply marked as
	// inactive, which will result in its removal on the next render pass.
	// This avoids the performance penalty for 'clear and redraw' behavior,
	// where we potentially get rid of all text on a layer, but will likely
	// add back most or all of it later, as when redrawing axes, for example.
	//
	// @param {string} layer A string of space-separated CSS classes uniquely
	//     identifying the layer containing this text.
	// @param {number=} x X coordinate of the text.
	// @param {number=} y Y coordinate of the text.
	// @param {string=} text Text string to remove.
	// @param {(string|object)=} font Either a string of space-separated CSS
	//     classes or a font-spec object, defining the text's font and style.
	// @param {number=} angle Angle at which the text is rotated, in degrees.
	//     Angle is currently unused, it will be implemented in the future.

	Canvas.prototype.removeText = function(layer, x, y, text, font, angle) {
		if (text == null) {
			var layerCache = this._textCache[layer];
			if (layerCache != null) {
				for (var styleKey in layerCache) {
					if (hasOwnProperty.call(layerCache, styleKey)) {
						var styleCache = layerCache[styleKey];
						for (var key in styleCache) {
							if (hasOwnProperty.call(styleCache, key)) {
								var positions = styleCache[key].positions;
								for (var i = 0, position; position = positions[i]; i++) {
									position.active = false;
								}
							}
						}
					}
				}
			}
		} else {
			var positions = this.getTextInfo(layer, text, font, angle).positions;
			for (var i = 0, position; position = positions[i]; i++) {
				if (position.x == x && position.y == y) {
					position.active = false;
				}
			}
		}
	};

	///////////////////////////////////////////////////////////////////////////
	// The top-level container for the entire plot.

    function Plot(placeholder, data_, options_, plugins) {
        // data is on the form:
        //   [ series1, series2 ... ]
        // where series is either just the data as [ [x1, y1], [x2, y2], ... ]
        // or { data: [ [x1, y1], [x2, y2], ... ], label: "some label", ... }

        var series = [],
            options = {
                // the color theme used for graphs
                colors: ["#edc240", "#afd8f8", "#cb4b4b", "#4da74d", "#9440ed"],
                legend: {
                    show: true,
                    noColumns: 1, // number of colums in legend table
                    labelFormatter: null, // fn: string -> string
                    labelBoxBorderColor: "#ccc", // border color for the little label boxes
                    container: null, // container (as jQuery object) to put legend in, null means default on top of graph
                    position: "ne", // position of default legend container within plot
                    margin: 5, // distance from grid edge to default legend container within plot
                    backgroundColor: null, // null means auto-detect
                    backgroundOpacity: 0.85, // set to 0 to avoid background
                    sorted: null    // default to no legend sorting
                },
                xaxis: {
                    show: null, // null = auto-detect, true = always, false = never
                    position: "bottom", // or "top"
                    mode: null, // null or "time"
                    font: null, // null (derived from CSS in placeholder) or object like { size: 11, lineHeight: 13, style: "italic", weight: "bold", family: "sans-serif", variant: "small-caps" }
                    color: null, // base color, labels, ticks
                    tickColor: null, // possibly different color of ticks, e.g. "rgba(0,0,0,0.15)"
                    transform: null, // null or f: number -> number to transform axis
                    inverseTransform: null, // if transform is set, this should be the inverse function
                    min: null, // min. value to show, null means set automatically
                    max: null, // max. value to show, null means set automatically
                    autoscaleMargin: null, // margin in % to add if auto-setting min/max
                    ticks: null, // either [1, 3] or [[1, "a"], 3] or (fn: axis info -> ticks) or app. number of ticks for auto-ticks
                    tickFormatter: null, // fn: number -> string
                    labelWidth: null, // size of tick labels in pixels
                    labelHeight: null,
                    reserveSpace: null, // whether to reserve space even if axis isn't shown
                    tickLength: null, // size in pixels of ticks, or "full" for whole line
                    alignTicksWithAxis: null, // axis number or null for no sync
                    tickDecimals: null, // no. of decimals, null means auto
                    tickSize: null, // number or [number, "unit"]
                    minTickSize: null // number or [number, "unit"]
                },
                yaxis: {
                    autoscaleMargin: 0.02,
                    position: "left" // or "right"
                },
                xaxes: [],
                yaxes: [],
                series: {
                    points: {
                        show: false,
                        radius: 3,
                        lineWidth: 2, // in pixels
                        fill: true,
                        fillColor: "#ffffff",
                        symbol: "circle" // or callback
                    },
                    lines: {
                        // we don't put in show: false so we can see
                        // whether lines were actively disabled
                        lineWidth: 2, // in pixels
                        fill: false,
                        fillColor: null,
                        steps: false
                        // Omit 'zero', so we can later default its value to
                        // match that of the 'fill' option.
                    },
                    bars: {
                        show: false,
                        lineWidth: 2, // in pixels
                        barWidth: 1, // in units of the x axis
                        fill: true,
                        fillColor: null,
                        align: "left", // "left", "right", or "center"
                        horizontal: false,
                        zero: true
                    },
                    shadowSize: 3,
                    highlightColor: null
                },
                grid: {
                    show: true,
                    aboveData: false,
                    color: "#545454", // primary color used for outline and labels
                    backgroundColor: null, // null for transparent, else color
                    borderColor: null, // set if different from the grid color
                    tickColor: null, // color for the ticks, e.g. "rgba(0,0,0,0.15)"
                    margin: 0, // distance from the canvas edge to the grid
                    labelMargin: 5, // in pixels
                    axisMargin: 8, // in pixels
                    borderWidth: 2, // in pixels
                    minBorderMargin: null, // in pixels, null means taken from points radius
                    markings: null, // array of ranges or fn: axes -> array of ranges
                    markingsColor: "#f4f4f4",
                    markingsLineWidth: 2,
                    // interactive stuff
                    clickable: false,
                    hoverable: false,
                    autoHighlight: true, // highlight in case mouse is near
                    mouseActiveRadius: 10 // how far the mouse can be away to activate an item
                },
                interaction: {
                    redrawOverlayInterval: 1000/60 // time between updates, -1 means in same flow
                },
                hooks: {}
            },
        surface = null,     // the canvas for the plot itself
        overlay = null,     // canvas for interactive stuff on top of plot
        eventHolder = null, // jQuery object that events should be bound to
        ctx = null, octx = null,
        xaxes = [], yaxes = [],
        plotOffset = { left: 0, right: 0, top: 0, bottom: 0},
        plotWidth = 0, plotHeight = 0,
        hooks = {
            processOptions: [],
            processRawData: [],
            processDatapoints: [],
            processOffset: [],
            drawBackground: [],
            drawSeries: [],
            draw: [],
            bindEvents: [],
            drawOverlay: [],
            shutdown: []
        },
        plot = this;

        // public functions
        plot.setData = setData;
        plot.setupGrid = setupGrid;
        plot.draw = draw;
        plot.getPlaceholder = function() { return placeholder; };
        plot.getCanvas = function() { return surface.element; };
        plot.getPlotOffset = function() { return plotOffset; };
        plot.width = function () { return plotWidth; };
        plot.height = function () { return plotHeight; };
        plot.offset = function () {
            var o = eventHolder.offset();
            o.left += plotOffset.left;
            o.top += plotOffset.top;
            return o;
        };
        plot.getData = function () { return series; };
        plot.getAxes = function () {
            var res = {}, i;
            $.each(xaxes.concat(yaxes), function (_, axis) {
                if (axis)
                    res[axis.direction + (axis.n != 1 ? axis.n : "") + "axis"] = axis;
            });
            return res;
        };
        plot.getXAxes = function () { return xaxes; };
        plot.getYAxes = function () { return yaxes; };
        plot.c2p = canvasToAxisCoords;
        plot.p2c = axisToCanvasCoords;
        plot.getOptions = function () { return options; };
        plot.highlight = highlight;
        plot.unhighlight = unhighlight;
        plot.triggerRedrawOverlay = triggerRedrawOverlay;
        plot.pointOffset = function(point) {
            return {
                left: parseInt(xaxes[axisNumber(point, "x") - 1].p2c(+point.x) + plotOffset.left, 10),
                top: parseInt(yaxes[axisNumber(point, "y") - 1].p2c(+point.y) + plotOffset.top, 10)
            };
        };
        plot.shutdown = shutdown;
        plot.destroy = function () {
            shutdown();
            placeholder.removeData("plot").empty();

            series = [];
            options = null;
            surface = null;
            overlay = null;
            eventHolder = null;
            ctx = null;
            octx = null;
            xaxes = [];
            yaxes = [];
            hooks = null;
            highlights = [];
            plot = null;
        };
        plot.resize = function () {
        	var width = placeholder.width(),
        		height = placeholder.height();
            surface.resize(width, height);
            overlay.resize(width, height);
        };

        // public attributes
        plot.hooks = hooks;

        // initialize
        initPlugins(plot);
        parseOptions(options_);
        setupCanvases();
        setData(data_);
        setupGrid();
        draw();
        bindEvents();


        function executeHooks(hook, args) {
            args = [plot].concat(args);
            for (var i = 0; i < hook.length; ++i)
                hook[i].apply(this, args);
        }

        function initPlugins() {

            // References to key classes, allowing plugins to modify them

            var classes = {
                Canvas: Canvas
            };

            for (var i = 0; i < plugins.length; ++i) {
                var p = plugins[i];
                p.init(plot, classes);
                if (p.options)
                    $.extend(true, options, p.options);
            }
        }

        function parseOptions(opts) {

            $.extend(true, options, opts);

            // $.extend merges arrays, rather than replacing them.  When less
            // colors are provided than the size of the default palette, we
            // end up with those colors plus the remaining defaults, which is
            // not expected behavior; avoid it by replacing them here.

            if (opts && opts.colors) {
            	options.colors = opts.colors;
            }

            if (options.xaxis.color == null)
                options.xaxis.color = $.color.parse(options.grid.color).scale('a', 0.22).toString();
            if (options.yaxis.color == null)
                options.yaxis.color = $.color.parse(options.grid.color).scale('a', 0.22).toString();

            if (options.xaxis.tickColor == null) // grid.tickColor for back-compatibility
                options.xaxis.tickColor = options.grid.tickColor || options.xaxis.color;
            if (options.yaxis.tickColor == null) // grid.tickColor for back-compatibility
                options.yaxis.tickColor = options.grid.tickColor || options.yaxis.color;

            if (options.grid.borderColor == null)
                options.grid.borderColor = options.grid.color;
            if (options.grid.tickColor == null)
                options.grid.tickColor = $.color.parse(options.grid.color).scale('a', 0.22).toString();

            // Fill in defaults for axis options, including any unspecified
            // font-spec fields, if a font-spec was provided.

            // If no x/y axis options were provided, create one of each anyway,
            // since the rest of the code assumes that they exist.

            var i, axisOptions, axisCount,
                fontSize = placeholder.css("font-size"),
                fontSizeDefault = fontSize ? +fontSize.replace("px", "") : 13,
                fontDefaults = {
                    style: placeholder.css("font-style"),
                    size: Math.round(0.8 * fontSizeDefault),
                    variant: placeholder.css("font-variant"),
                    weight: placeholder.css("font-weight"),
                    family: placeholder.css("font-family")
                };

            axisCount = options.xaxes.length || 1;
            for (i = 0; i < axisCount; ++i) {

                axisOptions = options.xaxes[i];
                if (axisOptions && !axisOptions.tickColor) {
                    axisOptions.tickColor = axisOptions.color;
                }

                axisOptions = $.extend(true, {}, options.xaxis, axisOptions);
                options.xaxes[i] = axisOptions;

                if (axisOptions.font) {
                    axisOptions.font = $.extend({}, fontDefaults, axisOptions.font);
                    if (!axisOptions.font.color) {
                        axisOptions.font.color = axisOptions.color;
                    }
                    if (!axisOptions.font.lineHeight) {
                        axisOptions.font.lineHeight = Math.round(axisOptions.font.size * 1.15);
                    }
                }
            }

            axisCount = options.yaxes.length || 1;
            for (i = 0; i < axisCount; ++i) {

                axisOptions = options.yaxes[i];
                if (axisOptions && !axisOptions.tickColor) {
                    axisOptions.tickColor = axisOptions.color;
                }

                axisOptions = $.extend(true, {}, options.yaxis, axisOptions);
                options.yaxes[i] = axisOptions;

                if (axisOptions.font) {
                    axisOptions.font = $.extend({}, fontDefaults, axisOptions.font);
                    if (!axisOptions.font.color) {
                        axisOptions.font.color = axisOptions.color;
                    }
                    if (!axisOptions.font.lineHeight) {
                        axisOptions.font.lineHeight = Math.round(axisOptions.font.size * 1.15);
                    }
                }
            }

            // backwards compatibility, to be removed in future
            if (options.xaxis.noTicks && options.xaxis.ticks == null)
                options.xaxis.ticks = options.xaxis.noTicks;
            if (options.yaxis.noTicks && options.yaxis.ticks == null)
                options.yaxis.ticks = options.yaxis.noTicks;
            if (options.x2axis) {
                options.xaxes[1] = $.extend(true, {}, options.xaxis, options.x2axis);
                options.xaxes[1].position = "top";
                // Override the inherit to allow the axis to auto-scale
                if (options.x2axis.min == null) {
                    options.xaxes[1].min = null;
                }
                if (options.x2axis.max == null) {
                    options.xaxes[1].max = null;
                }
            }
            if (options.y2axis) {
                options.yaxes[1] = $.extend(true, {}, options.yaxis, options.y2axis);
                options.yaxes[1].position = "right";
                // Override the inherit to allow the axis to auto-scale
                if (options.y2axis.min == null) {
                    options.yaxes[1].min = null;
                }
                if (options.y2axis.max == null) {
                    options.yaxes[1].max = null;
                }
            }
            if (options.grid.coloredAreas)
                options.grid.markings = options.grid.coloredAreas;
            if (options.grid.coloredAreasColor)
                options.grid.markingsColor = options.grid.coloredAreasColor;
            if (options.lines)
                $.extend(true, options.series.lines, options.lines);
            if (options.points)
                $.extend(true, options.series.points, options.points);
            if (options.bars)
                $.extend(true, options.series.bars, options.bars);
            if (options.shadowSize != null)
                options.series.shadowSize = options.shadowSize;
            if (options.highlightColor != null)
                options.series.highlightColor = options.highlightColor;

            // save options on axes for future reference
            for (i = 0; i < options.xaxes.length; ++i)
                getOrCreateAxis(xaxes, i + 1).options = options.xaxes[i];
            for (i = 0; i < options.yaxes.length; ++i)
                getOrCreateAxis(yaxes, i + 1).options = options.yaxes[i];

            // add hooks from options
            for (var n in hooks)
                if (options.hooks[n] && options.hooks[n].length)
                    hooks[n] = hooks[n].concat(options.hooks[n]);

            executeHooks(hooks.processOptions, [options]);
        }

        function setData(d) {
            series = parseData(d);
            fillInSeriesOptions();
            processData();
        }

        function parseData(d) {
            var res = [];
            for (var i = 0; i < d.length; ++i) {
                var s = $.extend(true, {}, options.series);

                if (d[i].data != null) {
                    s.data = d[i].data; // move the data instead of deep-copy
                    delete d[i].data;

                    $.extend(true, s, d[i]);

                    d[i].data = s.data;
                }
                else
                    s.data = d[i];
                res.push(s);
            }

            return res;
        }

        function axisNumber(obj, coord) {
            var a = obj[coord + "axis"];
            if (typeof a == "object") // if we got a real axis, extract number
                a = a.n;
            if (typeof a != "number")
                a = 1; // default to first axis
            return a;
        }

        function allAxes() {
            // return flat array without annoying null entries
            return $.grep(xaxes.concat(yaxes), function (a) { return a; });
        }

        function canvasToAxisCoords(pos) {
            // return an object with x/y corresponding to all used axes
            var res = {}, i, axis;
            for (i = 0; i < xaxes.length; ++i) {
                axis = xaxes[i];
                if (axis && axis.used)
                    res["x" + axis.n] = axis.c2p(pos.left);
            }

            for (i = 0; i < yaxes.length; ++i) {
                axis = yaxes[i];
                if (axis && axis.used)
                    res["y" + axis.n] = axis.c2p(pos.top);
            }

            if (res.x1 !== undefined)
                res.x = res.x1;
            if (res.y1 !== undefined)
                res.y = res.y1;

            return res;
        }

        function axisToCanvasCoords(pos) {
            // get canvas coords from the first pair of x/y found in pos
            var res = {}, i, axis, key;

            for (i = 0; i < xaxes.length; ++i) {
                axis = xaxes[i];
                if (axis && axis.used) {
                    key = "x" + axis.n;
                    if (pos[key] == null && axis.n == 1)
                        key = "x";

                    if (pos[key] != null) {
                        res.left = axis.p2c(pos[key]);
                        break;
                    }
                }
            }

            for (i = 0; i < yaxes.length; ++i) {
                axis = yaxes[i];
                if (axis && axis.used) {
                    key = "y" + axis.n;
                    if (pos[key] == null && axis.n == 1)
                        key = "y";

                    if (pos[key] != null) {
                        res.top = axis.p2c(pos[key]);
                        break;
                    }
                }
            }

            return res;
        }

        function getOrCreateAxis(axes, number) {
            if (!axes[number - 1])
                axes[number - 1] = {
                    n: number, // save the number for future reference
                    direction: axes == xaxes ? "x" : "y",
                    options: $.extend(true, {}, axes == xaxes ? options.xaxis : options.yaxis)
                };

            return axes[number - 1];
        }

        function fillInSeriesOptions() {

            var neededColors = series.length, maxIndex = -1, i;

            // Subtract the number of series that already have fixed colors or
            // color indexes from the number that we still need to generate.

            for (i = 0; i < series.length; ++i) {
                var sc = series[i].color;
                if (sc != null) {
                    neededColors--;
                    if (typeof sc == "number" && sc > maxIndex) {
                        maxIndex = sc;
                    }
                }
            }

            // If any of the series have fixed color indexes, then we need to
            // generate at least as many colors as the highest index.

            if (neededColors <= maxIndex) {
                neededColors = maxIndex + 1;
            }

            // Generate all the colors, using first the option colors and then
            // variations on those colors once they're exhausted.

            var c, colors = [], colorPool = options.colors,
                colorPoolSize = colorPool.length, variation = 0;

            for (i = 0; i < neededColors; i++) {

                c = $.color.parse(colorPool[i % colorPoolSize] || "#666");

                // Each time we exhaust the colors in the pool we adjust
                // a scaling factor used to produce more variations on
                // those colors. The factor alternates negative/positive
                // to produce lighter/darker colors.

                // Reset the variation after every few cycles, or else
                // it will end up producing only white or black colors.

                if (i % colorPoolSize == 0 && i) {
                    if (variation >= 0) {
                        if (variation < 0.5) {
                            variation = -variation - 0.2;
                        } else variation = 0;
                    } else variation = -variation;
                }

                colors[i] = c.scale('rgb', 1 + variation);
            }

            // Finalize the series options, filling in their colors

            var colori = 0, s;
            for (i = 0; i < series.length; ++i) {
                s = series[i];

                // assign colors
                if (s.color == null) {
                    s.color = colors[colori].toString();
                    ++colori;
                }
                else if (typeof s.color == "number")
                    s.color = colors[s.color].toString();

                // turn on lines automatically in case nothing is set
                if (s.lines.show == null) {
                    var v, show = true;
                    for (v in s)
                        if (s[v] && s[v].show) {
                            show = false;
                            break;
                        }
                    if (show)
                        s.lines.show = true;
                }

                // If nothing was provided for lines.zero, default it to match
                // lines.fill, since areas by default should extend to zero.

                if (s.lines.zero == null) {
                    s.lines.zero = !!s.lines.fill;
                }

                // setup axes
                s.xaxis = getOrCreateAxis(xaxes, axisNumber(s, "x"));
                s.yaxis = getOrCreateAxis(yaxes, axisNumber(s, "y"));
            }
        }

        function processData() {
            var topSentry = Number.POSITIVE_INFINITY,
                bottomSentry = Number.NEGATIVE_INFINITY,
                fakeInfinity = Number.MAX_VALUE,
                i, j, k, m, length,
                s, points, ps, x, y, axis, val, f, p,
                data, format;

            function updateAxis(axis, min, max) {
                if (min < axis.datamin && min != -fakeInfinity)
                    axis.datamin = min;
                if (max > axis.datamax && max != fakeInfinity)
                    axis.datamax = max;
            }

            $.each(allAxes(), function (_, axis) {
                // init axis
                axis.datamin = topSentry;
                axis.datamax = bottomSentry;
                axis.used = false;
            });

            for (i = 0; i < series.length; ++i) {
                s = series[i];
                s.datapoints = { points: [] };

                executeHooks(hooks.processRawData, [ s, s.data, s.datapoints ]);
            }

            // first pass: clean and copy data
            for (i = 0; i < series.length; ++i) {
                s = series[i];

                data = s.data;
                format = s.datapoints.format;

                if (!format) {
                    format = [];
                    // find out how to copy
                    format.push({ x: true, number: true, required: true });
                    format.push({ y: true, number: true, required: true });

                    if (s.bars.show || (s.lines.show && s.lines.fill)) {
                        var autoscale = !!((s.bars.show && s.bars.zero) || (s.lines.show && s.lines.zero));
                        format.push({ y: true, number: true, required: false, defaultValue: 0, autoscale: autoscale });
                        if (s.bars.horizontal) {
                            delete format[format.length - 1].y;
                            format[format.length - 1].x = true;
                        }
                    }

                    s.datapoints.format = format;
                }

                if (s.datapoints.pointsize != null)
                    continue; // already filled in

                s.datapoints.pointsize = format.length;

                ps = s.datapoints.pointsize;
                points = s.datapoints.points;

                var insertSteps = s.lines.show && s.lines.steps;
                s.xaxis.used = s.yaxis.used = true;

                for (j = k = 0; j < data.length; ++j, k += ps) {
                    p = data[j];

                    var nullify = p == null;
                    if (!nullify) {
                        for (m = 0; m < ps; ++m) {
                            val = p[m];
                            f = format[m];

                            if (f) {
                                if (f.number && val != null) {
                                    val = +val; // convert to number
                                    if (isNaN(val))
                                        val = null;
                                    else if (val == Infinity)
                                        val = fakeInfinity;
                                    else if (val == -Infinity)
                                        val = -fakeInfinity;
                                }

                                if (val == null) {
                                    if (f.required)
                                        nullify = true;

                                    if (f.defaultValue != null)
                                        val = f.defaultValue;
                                }
                            }

                            points[k + m] = val;
                        }
                    }

                    if (nullify) {
                        for (m = 0; m < ps; ++m) {
                            val = points[k + m];
                            if (val != null) {
                                f = format[m];
                                // extract min/max info
                                if (f.autoscale !== false) {
                                    if (f.x) {
                                        updateAxis(s.xaxis, val, val);
                                    }
                                    if (f.y) {
                                        updateAxis(s.yaxis, val, val);
                                    }
                                }
                            }
                            points[k + m] = null;
                        }
                    }
                    else {
                        // a little bit of line specific stuff that
                        // perhaps shouldn't be here, but lacking
                        // better means...
                        if (insertSteps && k > 0
                            && points[k - ps] != null
                            && points[k - ps] != points[k]
                            && points[k - ps + 1] != points[k + 1]) {
                            // copy the point to make room for a middle point
                            for (m = 0; m < ps; ++m)
                                points[k + ps + m] = points[k + m];

                            // middle point has same y
                            points[k + 1] = points[k - ps + 1];

                            // we've added a point, better reflect that
                            k += ps;
                        }
                    }
                }
            }

            // give the hooks a chance to run
            for (i = 0; i < series.length; ++i) {
                s = series[i];

                executeHooks(hooks.processDatapoints, [ s, s.datapoints]);
            }

            // second pass: find datamax/datamin for auto-scaling
            for (i = 0; i < series.length; ++i) {
                s = series[i];
                points = s.datapoints.points;
                ps = s.datapoints.pointsize;
                format = s.datapoints.format;

                var xmin = topSentry, ymin = topSentry,
                    xmax = bottomSentry, ymax = bottomSentry;

                for (j = 0; j < points.length; j += ps) {
                    if (points[j] == null)
                        continue;

                    for (m = 0; m < ps; ++m) {
                        val = points[j + m];
                        f = format[m];
                        if (!f || f.autoscale === false || val == fakeInfinity || val == -fakeInfinity)
                            continue;

                        if (f.x) {
                            if (val < xmin)
                                xmin = val;
                            if (val > xmax)
                                xmax = val;
                        }
                        if (f.y) {
                            if (val < ymin)
                                ymin = val;
                            if (val > ymax)
                                ymax = val;
                        }
                    }
                }

                if (s.bars.show) {
                    // make sure we got room for the bar on the dancing floor
                    var delta;

                    switch (s.bars.align) {
                        case "left":
                            delta = 0;
                            break;
                        case "right":
                            delta = -s.bars.barWidth;
                            break;
                        default:
                            delta = -s.bars.barWidth / 2;
                    }

                    if (s.bars.horizontal) {
                        ymin += delta;
                        ymax += delta + s.bars.barWidth;
                    }
                    else {
                        xmin += delta;
                        xmax += delta + s.bars.barWidth;
                    }
                }

                updateAxis(s.xaxis, xmin, xmax);
                updateAxis(s.yaxis, ymin, ymax);
            }

            $.each(allAxes(), function (_, axis) {
                if (axis.datamin == topSentry)
                    axis.datamin = null;
                if (axis.datamax == bottomSentry)
                    axis.datamax = null;
            });
        }

        function setupCanvases() {

            // Make sure the placeholder is clear of everything except canvases
            // from a previous plot in this container that we'll try to re-use.

            placeholder.css("padding", 0) // padding messes up the positioning
                .children().filter(function(){
                    return !$(this).hasClass("flot-overlay") && !$(this).hasClass('flot-base');
                }).remove();

            if (placeholder.css("position") == 'static')
                placeholder.css("position", "relative"); // for positioning labels and overlay

            surface = new Canvas("flot-base", placeholder);
            overlay = new Canvas("flot-overlay", placeholder); // overlay canvas for interactive features

            ctx = surface.context;
            octx = overlay.context;

            // define which element we're listening for events on
            eventHolder = $(overlay.element).unbind();

            // If we're re-using a plot object, shut down the old one

            var existing = placeholder.data("plot");

            if (existing) {
                existing.shutdown();
                overlay.clear();
            }

            // save in case we get replotted
            placeholder.data("plot", plot);
        }

        function bindEvents() {
            // bind events
            if (options.grid.hoverable) {
                eventHolder.mousemove(onMouseMove);

                // Use bind, rather than .mouseleave, because we officially
                // still support jQuery 1.2.6, which doesn't define a shortcut
                // for mouseenter or mouseleave.  This was a bug/oversight that
                // was fixed somewhere around 1.3.x.  We can return to using
                // .mouseleave when we drop support for 1.2.6.

                eventHolder.bind("mouseleave", onMouseLeave);
            }

            if (options.grid.clickable)
                eventHolder.click(onClick);

            executeHooks(hooks.bindEvents, [eventHolder]);
        }

        function shutdown() {
            if (redrawTimeout)
                clearTimeout(redrawTimeout);

            eventHolder.unbind("mousemove", onMouseMove);
            eventHolder.unbind("mouseleave", onMouseLeave);
            eventHolder.unbind("click", onClick);

            executeHooks(hooks.shutdown, [eventHolder]);
        }

        function setTransformationHelpers(axis) {
            // set helper functions on the axis, assumes plot area
            // has been computed already

            function identity(x) { return x; }

            var s, m, t = axis.options.transform || identity,
                it = axis.options.inverseTransform;

            // precompute how much the axis is scaling a point
            // in canvas space
            if (axis.direction == "x") {
                s = axis.scale = plotWidth / Math.abs(t(axis.max) - t(axis.min));
                m = Math.min(t(axis.max), t(axis.min));
            }
            else {
                s = axis.scale = plotHeight / Math.abs(t(axis.max) - t(axis.min));
                s = -s;
                m = Math.max(t(axis.max), t(axis.min));
            }

            // data point to canvas coordinate
            if (t == identity) // slight optimization
                axis.p2c = function (p) { return (p - m) * s; };
            else
                axis.p2c = function (p) { return (t(p) - m) * s; };
            // canvas coordinate to data point
            if (!it)
                axis.c2p = function (c) { return m + c / s; };
            else
                axis.c2p = function (c) { return it(m + c / s); };
        }

        function measureTickLabels(axis) {

            var opts = axis.options,
                ticks = axis.ticks || [],
                labelWidth = opts.labelWidth || 0,
                labelHeight = opts.labelHeight || 0,
                maxWidth = labelWidth || (axis.direction == "x" ? Math.floor(surface.width / (ticks.length || 1)) : null),
                legacyStyles = axis.direction + "Axis " + axis.direction + axis.n + "Axis",
                layer = "flot-" + axis.direction + "-axis flot-" + axis.direction + axis.n + "-axis " + legacyStyles,
                font = opts.font || "flot-tick-label tickLabel";

            for (var i = 0; i < ticks.length; ++i) {

                var t = ticks[i];

                if (!t.label)
                    continue;

                var info = surface.getTextInfo(layer, t.label, font, null, maxWidth);

                labelWidth = Math.max(labelWidth, info.width);
                labelHeight = Math.max(labelHeight, info.height);
            }

            axis.labelWidth = opts.labelWidth || labelWidth;
            axis.labelHeight = opts.labelHeight || labelHeight;
        }

        function allocateAxisBoxFirstPhase(axis) {
            // find the bounding box of the axis by looking at label
            // widths/heights and ticks, make room by diminishing the
            // plotOffset; this first phase only looks at one
            // dimension per axis, the other dimension depends on the
            // other axes so will have to wait

            var lw = axis.labelWidth,
                lh = axis.labelHeight,
                pos = axis.options.position,
                isXAxis = axis.direction === "x",
                tickLength = axis.options.tickLength,
                axisMargin = options.grid.axisMargin,
                padding = options.grid.labelMargin,
                innermost = true,
                outermost = true,
                first = true,
                found = false;

            // Determine the axis's position in its direction and on its side

            $.each(isXAxis ? xaxes : yaxes, function(i, a) {
                if (a && (a.show || a.reserveSpace)) {
                    if (a === axis) {
                        found = true;
                    } else if (a.options.position === pos) {
                        if (found) {
                            outermost = false;
                        } else {
                            innermost = false;
                        }
                    }
                    if (!found) {
                        first = false;
                    }
                }
            });

            // The outermost axis on each side has no margin

            if (outermost) {
                axisMargin = 0;
            }

            // The ticks for the first axis in each direction stretch across

            if (tickLength == null) {
                tickLength = first ? "full" : 5;
            }

            if (!isNaN(+tickLength))
                padding += +tickLength;

            if (isXAxis) {
                lh += padding;

                if (pos == "bottom") {
                    plotOffset.bottom += lh + axisMargin;
                    axis.box = { top: surface.height - plotOffset.bottom, height: lh };
                }
                else {
                    axis.box = { top: plotOffset.top + axisMargin, height: lh };
                    plotOffset.top += lh + axisMargin;
                }
            }
            else {
                lw += padding;

                if (pos == "left") {
                    axis.box = { left: plotOffset.left + axisMargin, width: lw };
                    plotOffset.left += lw + axisMargin;
                }
                else {
                    plotOffset.right += lw + axisMargin;
                    axis.box = { left: surface.width - plotOffset.right, width: lw };
                }
            }

             // save for future reference
            axis.position = pos;
            axis.tickLength = tickLength;
            axis.box.padding = padding;
            axis.innermost = innermost;
        }

        function allocateAxisBoxSecondPhase(axis) {
            // now that all axis boxes have been placed in one
            // dimension, we can set the remaining dimension coordinates
            if (axis.direction == "x") {
                axis.box.left = plotOffset.left - axis.labelWidth / 2;
                axis.box.width = surface.width - plotOffset.left - plotOffset.right + axis.labelWidth;
            }
            else {
                axis.box.top = plotOffset.top - axis.labelHeight / 2;
                axis.box.height = surface.height - plotOffset.bottom - plotOffset.top + axis.labelHeight;
            }
        }

        function adjustLayoutForThingsStickingOut() {
            // possibly adjust plot offset to ensure everything stays
            // inside the canvas and isn't clipped off

            var minMargin = options.grid.minBorderMargin,
                axis, i;

            // check stuff from the plot (FIXME: this should just read
            // a value from the series, otherwise it's impossible to
            // customize)
            if (minMargin == null) {
                minMargin = 0;
                for (i = 0; i < series.length; ++i)
                    minMargin = Math.max(minMargin, 2 * (series[i].points.radius + series[i].points.lineWidth/2));
            }

            var margins = {
                left: minMargin,
                right: minMargin,
                top: minMargin,
                bottom: minMargin
            };

            // check axis labels, note we don't check the actual
            // labels but instead use the overall width/height to not
            // jump as much around with replots
            $.each(allAxes(), function (_, axis) {
                if (axis.reserveSpace && axis.ticks && axis.ticks.length) {
                    if (axis.direction === "x") {
                        margins.left = Math.max(margins.left, axis.labelWidth / 2);
                        margins.right = Math.max(margins.right, axis.labelWidth / 2);
                    } else {
                        margins.bottom = Math.max(margins.bottom, axis.labelHeight / 2);
                        margins.top = Math.max(margins.top, axis.labelHeight / 2);
                    }
                }
            });

            plotOffset.left = Math.ceil(Math.max(margins.left, plotOffset.left));
            plotOffset.right = Math.ceil(Math.max(margins.right, plotOffset.right));
            plotOffset.top = Math.ceil(Math.max(margins.top, plotOffset.top));
            plotOffset.bottom = Math.ceil(Math.max(margins.bottom, plotOffset.bottom));
        }

        function setupGrid() {
            var i, axes = allAxes(), showGrid = options.grid.show;

            // Initialize the plot's offset from the edge of the canvas

            for (var a in plotOffset) {
                var margin = options.grid.margin || 0;
                plotOffset[a] = typeof margin == "number" ? margin : margin[a] || 0;
            }

            executeHooks(hooks.processOffset, [plotOffset]);

            // If the grid is visible, add its border width to the offset

            for (var a in plotOffset) {
                if(typeof(options.grid.borderWidth) == "object") {
                    plotOffset[a] += showGrid ? options.grid.borderWidth[a] : 0;
                }
                else {
                    plotOffset[a] += showGrid ? options.grid.borderWidth : 0;
                }
            }

            $.each(axes, function (_, axis) {
                var axisOpts = axis.options;
                axis.show = axisOpts.show == null ? axis.used : axisOpts.show;
                axis.reserveSpace = axisOpts.reserveSpace == null ? axis.show : axisOpts.reserveSpace;
                setRange(axis);
            });

            if (showGrid) {

                var allocatedAxes = $.grep(axes, function (axis) {
                    return axis.show || axis.reserveSpace;
                });

                $.each(allocatedAxes, function (_, axis) {
                    // make the ticks
                    setupTickGeneration(axis);
                    setTicks(axis);
                    snapRangeToTicks(axis, axis.ticks);
                    // find labelWidth/Height for axis
                    measureTickLabels(axis);
                });

                // with all dimensions calculated, we can compute the
                // axis bounding boxes, start from the outside
                // (reverse order)
                for (i = allocatedAxes.length - 1; i >= 0; --i)
                    allocateAxisBoxFirstPhase(allocatedAxes[i]);

                // make sure we've got enough space for things that
                // might stick out
                adjustLayoutForThingsStickingOut();

                $.each(allocatedAxes, function (_, axis) {
                    allocateAxisBoxSecondPhase(axis);
                });
            }

            plotWidth = surface.width - plotOffset.left - plotOffset.right;
            plotHeight = surface.height - plotOffset.bottom - plotOffset.top;

            // now we got the proper plot dimensions, we can compute the scaling
            $.each(axes, function (_, axis) {
                setTransformationHelpers(axis);
            });

            if (showGrid) {
                drawAxisLabels();
            }

            insertLegend();
        }

        function setRange(axis) {
            var opts = axis.options,
                min = +(opts.min != null ? opts.min : axis.datamin),
                max = +(opts.max != null ? opts.max : axis.datamax),
                delta = max - min;

            if (delta == 0.0) {
                // degenerate case
                var widen = max == 0 ? 1 : 0.01;

                if (opts.min == null)
                    min -= widen;
                // always widen max if we couldn't widen min to ensure we
                // don't fall into min == max which doesn't work
                if (opts.max == null || opts.min != null)
                    max += widen;
            }
            else {
                // consider autoscaling
                var margin = opts.autoscaleMargin;
                if (margin != null) {
                    if (opts.min == null) {
                        min -= delta * margin;
                        // make sure we don't go below zero if all values
                        // are positive
                        if (min < 0 && axis.datamin != null && axis.datamin >= 0)
                            min = 0;
                    }
                    if (opts.max == null) {
                        max += delta * margin;
                        if (max > 0 && axis.datamax != null && axis.datamax <= 0)
                            max = 0;
                    }
                }
            }
            axis.min = min;
            axis.max = max;
        }

        function setupTickGeneration(axis) {
            var opts = axis.options;

            // estimate number of ticks
            var noTicks;
            if (typeof opts.ticks == "number" && opts.ticks > 0)
                noTicks = opts.ticks;
            else
                // heuristic based on the model a*sqrt(x) fitted to
                // some data points that seemed reasonable
                noTicks = 0.3 * Math.sqrt(axis.direction == "x" ? surface.width : surface.height);

            var delta = (axis.max - axis.min) / noTicks,
                dec = -Math.floor(Math.log(delta) / Math.LN10),
                maxDec = opts.tickDecimals;

            if (maxDec != null && dec > maxDec) {
                dec = maxDec;
            }

            var magn = Math.pow(10, -dec),
                norm = delta / magn, // norm is between 1.0 and 10.0
                size;

            if (norm < 1.5) {
                size = 1;
            } else if (norm < 3) {
                size = 2;
                // special case for 2.5, requires an extra decimal
                if (norm > 2.25 && (maxDec == null || dec + 1 <= maxDec)) {
                    size = 2.5;
                    ++dec;
                }
            } else if (norm < 7.5) {
                size = 5;
            } else {
                size = 10;
            }

            size *= magn;

            if (opts.minTickSize != null && size < opts.minTickSize) {
                size = opts.minTickSize;
            }

            axis.delta = delta;
            axis.tickDecimals = Math.max(0, maxDec != null ? maxDec : dec);
            axis.tickSize = opts.tickSize || size;

            // Time mode was moved to a plug-in in 0.8, and since so many people use it
            // we'll add an especially friendly reminder to make sure they included it.

            if (opts.mode == "time" && !axis.tickGenerator) {
                throw new Error("Time mode requires the flot.time plugin.");
            }

            // Flot supports base-10 axes; any other mode else is handled by a plug-in,
            // like flot.time.js.

            if (!axis.tickGenerator) {

                axis.tickGenerator = function (axis) {

                    var ticks = [],
                        start = floorInBase(axis.min, axis.tickSize),
                        i = 0,
                        v = Number.NaN,
                        prev;

                    do {
                        prev = v;
                        v = start + i * axis.tickSize;
                        ticks.push(v);
                        ++i;
                    } while (v < axis.max && v != prev);
                    return ticks;
                };

				axis.tickFormatter = function (value, axis) {

					var factor = axis.tickDecimals ? Math.pow(10, axis.tickDecimals) : 1;
					var formatted = "" + Math.round(value * factor) / factor;

					// If tickDecimals was specified, ensure that we have exactly that
					// much precision; otherwise default to the value's own precision.

					if (axis.tickDecimals != null) {
						var decimal = formatted.indexOf(".");
						var precision = decimal == -1 ? 0 : formatted.length - decimal - 1;
						if (precision < axis.tickDecimals) {
							return (precision ? formatted : formatted + ".") + ("" + factor).substr(1, axis.tickDecimals - precision);
						}
					}

                    return formatted;
                };
            }

            if ($.isFunction(opts.tickFormatter))
                axis.tickFormatter = function (v, axis) { return "" + opts.tickFormatter(v, axis); };

            if (opts.alignTicksWithAxis != null) {
                var otherAxis = (axis.direction == "x" ? xaxes : yaxes)[opts.alignTicksWithAxis - 1];
                if (otherAxis && otherAxis.used && otherAxis != axis) {
                    // consider snapping min/max to outermost nice ticks
                    var niceTicks = axis.tickGenerator(axis);
                    if (niceTicks.length > 0) {
                        if (opts.min == null)
                            axis.min = Math.min(axis.min, niceTicks[0]);
                        if (opts.max == null && niceTicks.length > 1)
                            axis.max = Math.max(axis.max, niceTicks[niceTicks.length - 1]);
                    }

                    axis.tickGenerator = function (axis) {
                        // copy ticks, scaled to this axis
                        var ticks = [], v, i;
                        for (i = 0; i < otherAxis.ticks.length; ++i) {
                            v = (otherAxis.ticks[i].v - otherAxis.min) / (otherAxis.max - otherAxis.min);
                            v = axis.min + v * (axis.max - axis.min);
                            ticks.push(v);
                        }
                        return ticks;
                    };

                    // we might need an extra decimal since forced
                    // ticks don't necessarily fit naturally
                    if (!axis.mode && opts.tickDecimals == null) {
                        var extraDec = Math.max(0, -Math.floor(Math.log(axis.delta) / Math.LN10) + 1),
                            ts = axis.tickGenerator(axis);

                        // only proceed if the tick interval rounded
                        // with an extra decimal doesn't give us a
                        // zero at end
                        if (!(ts.length > 1 && /\..*0$/.test((ts[1] - ts[0]).toFixed(extraDec))))
                            axis.tickDecimals = extraDec;
                    }
                }
            }
        }

        function setTicks(axis) {
            var oticks = axis.options.ticks, ticks = [];
            if (oticks == null || (typeof oticks == "number" && oticks > 0))
                ticks = axis.tickGenerator(axis);
            else if (oticks) {
                if ($.isFunction(oticks))
                    // generate the ticks
                    ticks = oticks(axis);
                else
                    ticks = oticks;
            }

            // clean up/labelify the supplied ticks, copy them over
            var i, v;
            axis.ticks = [];
            for (i = 0; i < ticks.length; ++i) {
                var label = null;
                var t = ticks[i];
                if (typeof t == "object") {
                    v = +t[0];
                    if (t.length > 1)
                        label = t[1];
                }
                else
                    v = +t;
                if (label == null)
                    label = axis.tickFormatter(v, axis);
                if (!isNaN(v))
                    axis.ticks.push({ v: v, label: label });
            }
        }

        function snapRangeToTicks(axis, ticks) {
            if (axis.options.autoscaleMargin && ticks.length > 0) {
                // snap to ticks
                if (axis.options.min == null)
                    axis.min = Math.min(axis.min, ticks[0].v);
                if (axis.options.max == null && ticks.length > 1)
                    axis.max = Math.max(axis.max, ticks[ticks.length - 1].v);
            }
        }

        function draw() {

            surface.clear();

            executeHooks(hooks.drawBackground, [ctx]);

            var grid = options.grid;

            // draw background, if any
            if (grid.show && grid.backgroundColor)
                drawBackground();

            if (grid.show && !grid.aboveData) {
                drawGrid();
            }

            for (var i = 0; i < series.length; ++i) {
                executeHooks(hooks.drawSeries, [ctx, series[i]]);
                drawSeries(series[i]);
            }

            executeHooks(hooks.draw, [ctx]);

            if (grid.show && grid.aboveData) {
                drawGrid();
            }

            surface.render();

            // A draw implies that either the axes or data have changed, so we
            // should probably update the overlay highlights as well.

            triggerRedrawOverlay();
        }

        function extractRange(ranges, coord) {
            var axis, from, to, key, axes = allAxes();

            for (var i = 0; i < axes.length; ++i) {
                axis = axes[i];
                if (axis.direction == coord) {
                    key = coord + axis.n + "axis";
                    if (!ranges[key] && axis.n == 1)
                        key = coord + "axis"; // support x1axis as xaxis
                    if (ranges[key]) {
                        from = ranges[key].from;
                        to = ranges[key].to;
                        break;
                    }
                }
            }

            // backwards-compat stuff - to be removed in future
            if (!ranges[key]) {
                axis = coord == "x" ? xaxes[0] : yaxes[0];
                from = ranges[coord + "1"];
                to = ranges[coord + "2"];
            }

            // auto-reverse as an added bonus
            if (from != null && to != null && from > to) {
                var tmp = from;
                from = to;
                to = tmp;
            }

            return { from: from, to: to, axis: axis };
        }

        function drawBackground() {
            ctx.save();
            ctx.translate(plotOffset.left, plotOffset.top);

            ctx.fillStyle = getColorOrGradient(options.grid.backgroundColor, plotHeight, 0, "rgba(255, 255, 255, 0)");
            ctx.fillRect(0, 0, plotWidth, plotHeight);
            ctx.restore();
        }

        function drawGrid() {
            var i, axes, bw, bc;

            ctx.save();
            ctx.translate(plotOffset.left, plotOffset.top);

            // draw markings
            var markings = options.grid.markings;
            if (markings) {
                if ($.isFunction(markings)) {
                    axes = plot.getAxes();
                    // xmin etc. is backwards compatibility, to be
                    // removed in the future
                    axes.xmin = axes.xaxis.min;
                    axes.xmax = axes.xaxis.max;
                    axes.ymin = axes.yaxis.min;
                    axes.ymax = axes.yaxis.max;

                    markings = markings(axes);
                }

                for (i = 0; i < markings.length; ++i) {
                    var m = markings[i],
                        xrange = extractRange(m, "x"),
                        yrange = extractRange(m, "y");

                    // fill in missing
                    if (xrange.from == null)
                        xrange.from = xrange.axis.min;
                    if (xrange.to == null)
                        xrange.to = xrange.axis.max;
                    if (yrange.from == null)
                        yrange.from = yrange.axis.min;
                    if (yrange.to == null)
                        yrange.to = yrange.axis.max;

                    // clip
                    if (xrange.to < xrange.axis.min || xrange.from > xrange.axis.max ||
                        yrange.to < yrange.axis.min || yrange.from > yrange.axis.max)
                        continue;

                    xrange.from = Math.max(xrange.from, xrange.axis.min);
                    xrange.to = Math.min(xrange.to, xrange.axis.max);
                    yrange.from = Math.max(yrange.from, yrange.axis.min);
                    yrange.to = Math.min(yrange.to, yrange.axis.max);

                    var xequal = xrange.from === xrange.to,
                        yequal = yrange.from === yrange.to;

                    if (xequal && yequal) {
                        continue;
                    }

                    // then draw
                    xrange.from = Math.floor(xrange.axis.p2c(xrange.from));
                    xrange.to = Math.floor(xrange.axis.p2c(xrange.to));
                    yrange.from = Math.floor(yrange.axis.p2c(yrange.from));
                    yrange.to = Math.floor(yrange.axis.p2c(yrange.to));

                    if (xequal || yequal) {
                        var lineWidth = m.lineWidth || options.grid.markingsLineWidth,
                            subPixel = lineWidth % 2 ? 0.5 : 0;
                        ctx.beginPath();
                        ctx.strokeStyle = m.color || options.grid.markingsColor;
                        ctx.lineWidth = lineWidth;
                        if (xequal) {
                            ctx.moveTo(xrange.to + subPixel, yrange.from);
                            ctx.lineTo(xrange.to + subPixel, yrange.to);
                        } else {
                            ctx.moveTo(xrange.from, yrange.to + subPixel);
                            ctx.lineTo(xrange.to, yrange.to + subPixel);                            
                        }
                        ctx.stroke();
                    } else {
                        ctx.fillStyle = m.color || options.grid.markingsColor;
                        ctx.fillRect(xrange.from, yrange.to,
                                     xrange.to - xrange.from,
                                     yrange.from - yrange.to);
                    }
                }
            }

            // draw the ticks
            axes = allAxes();
            bw = options.grid.borderWidth;

            for (var j = 0; j < axes.length; ++j) {
                var axis = axes[j], box = axis.box,
                    t = axis.tickLength, x, y, xoff, yoff;
                if (!axis.show || axis.ticks.length == 0)
                    continue;

                ctx.lineWidth = 1;

                // find the edges
                if (axis.direction == "x") {
                    x = 0;
                    if (t == "full")
                        y = (axis.position == "top" ? 0 : plotHeight);
                    else
                        y = box.top - plotOffset.top + (axis.position == "top" ? box.height : 0);
                }
                else {
                    y = 0;
                    if (t == "full")
                        x = (axis.position == "left" ? 0 : plotWidth);
                    else
                        x = box.left - plotOffset.left + (axis.position == "left" ? box.width : 0);
                }

                // draw tick bar
                if (!axis.innermost) {
                    ctx.strokeStyle = axis.options.color;
                    ctx.beginPath();
                    xoff = yoff = 0;
                    if (axis.direction == "x")
                        xoff = plotWidth + 1;
                    else
                        yoff = plotHeight + 1;

                    if (ctx.lineWidth == 1) {
                        if (axis.direction == "x") {
                            y = Math.floor(y) + 0.5;
                        } else {
                            x = Math.floor(x) + 0.5;
                        }
                    }

                    ctx.moveTo(x, y);
                    ctx.lineTo(x + xoff, y + yoff);
                    ctx.stroke();
                }

                // draw ticks

                ctx.strokeStyle = axis.options.tickColor;

                ctx.beginPath();
                for (i = 0; i < axis.ticks.length; ++i) {
                    var v = axis.ticks[i].v;

                    xoff = yoff = 0;

                    if (isNaN(v) || v < axis.min || v > axis.max
                        // skip those lying on the axes if we got a border
                        || (t == "full"
                            && ((typeof bw == "object" && bw[axis.position] > 0) || bw > 0)
                            && (v == axis.min || v == axis.max)))
                        continue;

                    if (axis.direction == "x") {
                        x = axis.p2c(v);
                        yoff = t == "full" ? -plotHeight : t;

                        if (axis.position == "top")
                            yoff = -yoff;
                    }
                    else {
                        y = axis.p2c(v);
                        xoff = t == "full" ? -plotWidth : t;

                        if (axis.position == "left")
                            xoff = -xoff;
                    }

                    if (ctx.lineWidth == 1) {
                        if (axis.direction == "x")
                            x = Math.floor(x) + 0.5;
                        else
                            y = Math.floor(y) + 0.5;
                    }

                    ctx.moveTo(x, y);
                    ctx.lineTo(x + xoff, y + yoff);
                }

                ctx.stroke();
            }


            // draw border
            if (bw) {
                // If either borderWidth or borderColor is an object, then draw the border
                // line by line instead of as one rectangle
                bc = options.grid.borderColor;
                if(typeof bw == "object" || typeof bc == "object") {
                    if (typeof bw !== "object") {
                        bw = {top: bw, right: bw, bottom: bw, left: bw};
                    }
                    if (typeof bc !== "object") {
                        bc = {top: bc, right: bc, bottom: bc, left: bc};
                    }

                    if (bw.top > 0) {
                        ctx.strokeStyle = bc.top;
                        ctx.lineWidth = bw.top;
                        ctx.beginPath();
                        ctx.moveTo(0 - bw.left, 0 - bw.top/2);
                        ctx.lineTo(plotWidth, 0 - bw.top/2);
                        ctx.stroke();
                    }

                    if (bw.right > 0) {
                        ctx.strokeStyle = bc.right;
                        ctx.lineWidth = bw.right;
                        ctx.beginPath();
                        ctx.moveTo(plotWidth + bw.right / 2, 0 - bw.top);
                        ctx.lineTo(plotWidth + bw.right / 2, plotHeight);
                        ctx.stroke();
                    }

                    if (bw.bottom > 0) {
                        ctx.strokeStyle = bc.bottom;
                        ctx.lineWidth = bw.bottom;
                        ctx.beginPath();
                        ctx.moveTo(plotWidth + bw.right, plotHeight + bw.bottom / 2);
                        ctx.lineTo(0, plotHeight + bw.bottom / 2);
                        ctx.stroke();
                    }

                    if (bw.left > 0) {
                        ctx.strokeStyle = bc.left;
                        ctx.lineWidth = bw.left;
                        ctx.beginPath();
                        ctx.moveTo(0 - bw.left/2, plotHeight + bw.bottom);
                        ctx.lineTo(0- bw.left/2, 0);
                        ctx.stroke();
                    }
                }
                else {
                    ctx.lineWidth = bw;
                    ctx.strokeStyle = options.grid.borderColor;
                    ctx.strokeRect(-bw/2, -bw/2, plotWidth + bw, plotHeight + bw);
                }
            }

            ctx.restore();
        }

        function drawAxisLabels() {

            $.each(allAxes(), function (_, axis) {
                var box = axis.box,
                    legacyStyles = axis.direction + "Axis " + axis.direction + axis.n + "Axis",
                    layer = "flot-" + axis.direction + "-axis flot-" + axis.direction + axis.n + "-axis " + legacyStyles,
                    font = axis.options.font || "flot-tick-label tickLabel",
                    tick, x, y, halign, valign;

                // Remove text before checking for axis.show and ticks.length;
                // otherwise plugins, like flot-tickrotor, that draw their own
                // tick labels will end up with both theirs and the defaults.

                surface.removeText(layer);

                if (!axis.show || axis.ticks.length == 0)
                    return;

                for (var i = 0; i < axis.ticks.length; ++i) {

                    tick = axis.ticks[i];
                    if (!tick.label || tick.v < axis.min || tick.v > axis.max)
                        continue;

                    if (axis.direction == "x") {
                        halign = "center";
                        x = plotOffset.left + axis.p2c(tick.v);
                        if (axis.position == "bottom") {
                            y = box.top + box.padding;
                        } else {
                            y = box.top + box.height - box.padding;
                            valign = "bottom";
                        }
                    } else {
                        valign = "middle";
                        y = plotOffset.top + axis.p2c(tick.v);
                        if (axis.position == "left") {
                            x = box.left + box.width - box.padding;
                            halign = "right";
                        } else {
                            x = box.left + box.padding;
                        }
                    }

                    surface.addText(layer, x, y, tick.label, font, null, null, halign, valign);
                }
            });
        }

        function drawSeries(series) {
            if (series.lines.show)
                drawSeriesLines(series);
            if (series.bars.show)
                drawSeriesBars(series);
            if (series.points.show)
                drawSeriesPoints(series);
        }

        function drawSeriesLines(series) {
            function plotLine(datapoints, xoffset, yoffset, axisx, axisy) {
                var points = datapoints.points,
                    ps = datapoints.pointsize,
                    prevx = null, prevy = null;

                ctx.beginPath();
                for (var i = ps; i < points.length; i += ps) {
                    var x1 = points[i - ps], y1 = points[i - ps + 1],
                        x2 = points[i], y2 = points[i + 1];

                    if (x1 == null || x2 == null)
                        continue;

                    // clip with ymin
                    if (y1 <= y2 && y1 < axisy.min) {
                        if (y2 < axisy.min)
                            continue;   // line segment is outside
                        // compute new intersection point
                        x1 = (axisy.min - y1) / (y2 - y1) * (x2 - x1) + x1;
                        y1 = axisy.min;
                    }
                    else if (y2 <= y1 && y2 < axisy.min) {
                        if (y1 < axisy.min)
                            continue;
                        x2 = (axisy.min - y1) / (y2 - y1) * (x2 - x1) + x1;
                        y2 = axisy.min;
                    }

                    // clip with ymax
                    if (y1 >= y2 && y1 > axisy.max) {
                        if (y2 > axisy.max)
                            continue;
                        x1 = (axisy.max - y1) / (y2 - y1) * (x2 - x1) + x1;
                        y1 = axisy.max;
                    }
                    else if (y2 >= y1 && y2 > axisy.max) {
                        if (y1 > axisy.max)
                            continue;
                        x2 = (axisy.max - y1) / (y2 - y1) * (x2 - x1) + x1;
                        y2 = axisy.max;
                    }

                    // clip with xmin
                    if (x1 <= x2 && x1 < axisx.min) {
                        if (x2 < axisx.min)
                            continue;
                        y1 = (axisx.min - x1) / (x2 - x1) * (y2 - y1) + y1;
                        x1 = axisx.min;
                    }
                    else if (x2 <= x1 && x2 < axisx.min) {
                        if (x1 < axisx.min)
                            continue;
                        y2 = (axisx.min - x1) / (x2 - x1) * (y2 - y1) + y1;
                        x2 = axisx.min;
                    }

                    // clip with xmax
                    if (x1 >= x2 && x1 > axisx.max) {
                        if (x2 > axisx.max)
                            continue;
                        y1 = (axisx.max - x1) / (x2 - x1) * (y2 - y1) + y1;
                        x1 = axisx.max;
                    }
                    else if (x2 >= x1 && x2 > axisx.max) {
                        if (x1 > axisx.max)
                            continue;
                        y2 = (axisx.max - x1) / (x2 - x1) * (y2 - y1) + y1;
                        x2 = axisx.max;
                    }

                    if (x1 != prevx || y1 != prevy)
                        ctx.moveTo(axisx.p2c(x1) + xoffset, axisy.p2c(y1) + yoffset);

                    prevx = x2;
                    prevy = y2;
                    ctx.lineTo(axisx.p2c(x2) + xoffset, axisy.p2c(y2) + yoffset);
                }
                ctx.stroke();
            }

            function plotLineArea(datapoints, axisx, axisy) {
                var points = datapoints.points,
                    ps = datapoints.pointsize,
                    bottom = Math.min(Math.max(0, axisy.min), axisy.max),
                    i = 0, top, areaOpen = false,
                    ypos = 1, segmentStart = 0, segmentEnd = 0;

                // we process each segment in two turns, first forward
                // direction to sketch out top, then once we hit the
                // end we go backwards to sketch the bottom
                while (true) {
                    if (ps > 0 && i > points.length + ps)
                        break;

                    i += ps; // ps is negative if going backwards

                    var x1 = points[i - ps],
                        y1 = points[i - ps + ypos],
                        x2 = points[i], y2 = points[i + ypos];

                    if (areaOpen) {
                        if (ps > 0 && x1 != null && x2 == null) {
                            // at turning point
                            segmentEnd = i;
                            ps = -ps;
                            ypos = 2;
                            continue;
                        }

                        if (ps < 0 && i == segmentStart + ps) {
                            // done with the reverse sweep
                            ctx.fill();
                            areaOpen = false;
                            ps = -ps;
                            ypos = 1;
                            i = segmentStart = segmentEnd + ps;
                            continue;
                        }
                    }

                    if (x1 == null || x2 == null)
                        continue;

                    // clip x values

                    // clip with xmin
                    if (x1 <= x2 && x1 < axisx.min) {
                        if (x2 < axisx.min)
                            continue;
                        y1 = (axisx.min - x1) / (x2 - x1) * (y2 - y1) + y1;
                        x1 = axisx.min;
                    }
                    else if (x2 <= x1 && x2 < axisx.min) {
                        if (x1 < axisx.min)
                            continue;
                        y2 = (axisx.min - x1) / (x2 - x1) * (y2 - y1) + y1;
                        x2 = axisx.min;
                    }

                    // clip with xmax
                    if (x1 >= x2 && x1 > axisx.max) {
                        if (x2 > axisx.max)
                            continue;
                        y1 = (axisx.max - x1) / (x2 - x1) * (y2 - y1) + y1;
                        x1 = axisx.max;
                    }
                    else if (x2 >= x1 && x2 > axisx.max) {
                        if (x1 > axisx.max)
                            continue;
                        y2 = (axisx.max - x1) / (x2 - x1) * (y2 - y1) + y1;
                        x2 = axisx.max;
                    }

                    if (!areaOpen) {
                        // open area
                        ctx.beginPath();
                        ctx.moveTo(axisx.p2c(x1), axisy.p2c(bottom));
                        areaOpen = true;
                    }

                    // now first check the case where both is outside
                    if (y1 >= axisy.max && y2 >= axisy.max) {
                        ctx.lineTo(axisx.p2c(x1), axisy.p2c(axisy.max));
                        ctx.lineTo(axisx.p2c(x2), axisy.p2c(axisy.max));
                        continue;
                    }
                    else if (y1 <= axisy.min && y2 <= axisy.min) {
                        ctx.lineTo(axisx.p2c(x1), axisy.p2c(axisy.min));
                        ctx.lineTo(axisx.p2c(x2), axisy.p2c(axisy.min));
                        continue;
                    }

                    // else it's a bit more complicated, there might
                    // be a flat maxed out rectangle first, then a
                    // triangular cutout or reverse; to find these
                    // keep track of the current x values
                    var x1old = x1, x2old = x2;

                    // clip the y values, without shortcutting, we
                    // go through all cases in turn

                    // clip with ymin
                    if (y1 <= y2 && y1 < axisy.min && y2 >= axisy.min) {
                        x1 = (axisy.min - y1) / (y2 - y1) * (x2 - x1) + x1;
                        y1 = axisy.min;
                    }
                    else if (y2 <= y1 && y2 < axisy.min && y1 >= axisy.min) {
                        x2 = (axisy.min - y1) / (y2 - y1) * (x2 - x1) + x1;
                        y2 = axisy.min;
                    }

                    // clip with ymax
                    if (y1 >= y2 && y1 > axisy.max && y2 <= axisy.max) {
                        x1 = (axisy.max - y1) / (y2 - y1) * (x2 - x1) + x1;
                        y1 = axisy.max;
                    }
                    else if (y2 >= y1 && y2 > axisy.max && y1 <= axisy.max) {
                        x2 = (axisy.max - y1) / (y2 - y1) * (x2 - x1) + x1;
                        y2 = axisy.max;
                    }

                    // if the x value was changed we got a rectangle
                    // to fill
                    if (x1 != x1old) {
                        ctx.lineTo(axisx.p2c(x1old), axisy.p2c(y1));
                        // it goes to (x1, y1), but we fill that below
                    }

                    // fill triangular section, this sometimes result
                    // in redundant points if (x1, y1) hasn't changed
                    // from previous line to, but we just ignore that
                    ctx.lineTo(axisx.p2c(x1), axisy.p2c(y1));
                    ctx.lineTo(axisx.p2c(x2), axisy.p2c(y2));

                    // fill the other rectangle if it's there
                    if (x2 != x2old) {
                        ctx.lineTo(axisx.p2c(x2), axisy.p2c(y2));
                        ctx.lineTo(axisx.p2c(x2old), axisy.p2c(y2));
                    }
                }
            }

            ctx.save();
            ctx.translate(plotOffset.left, plotOffset.top);
            ctx.lineJoin = "round";

            var lw = series.lines.lineWidth,
                sw = series.shadowSize;
            // FIXME: consider another form of shadow when filling is turned on
            if (lw > 0 && sw > 0) {
                // draw shadow as a thick and thin line with transparency
                ctx.lineWidth = sw;
                ctx.strokeStyle = "rgba(0,0,0,0.1)";
                // position shadow at angle from the mid of line
                var angle = Math.PI/18;
                plotLine(series.datapoints, Math.sin(angle) * (lw/2 + sw/2), Math.cos(angle) * (lw/2 + sw/2), series.xaxis, series.yaxis);
                ctx.lineWidth = sw/2;
                plotLine(series.datapoints, Math.sin(angle) * (lw/2 + sw/4), Math.cos(angle) * (lw/2 + sw/4), series.xaxis, series.yaxis);
            }

            ctx.lineWidth = lw;
            ctx.strokeStyle = series.color;
            var fillStyle = getFillStyle(series.lines, series.color, 0, plotHeight);
            if (fillStyle) {
                ctx.fillStyle = fillStyle;
                plotLineArea(series.datapoints, series.xaxis, series.yaxis);
            }

            if (lw > 0)
                plotLine(series.datapoints, 0, 0, series.xaxis, series.yaxis);
            ctx.restore();
        }

        function drawSeriesPoints(series) {
            function plotPoints(datapoints, radius, fillStyle, offset, shadow, axisx, axisy, symbol) {
                var points = datapoints.points, ps = datapoints.pointsize;

                for (var i = 0; i < points.length; i += ps) {
                    var x = points[i], y = points[i + 1];
                    if (x == null || x < axisx.min || x > axisx.max || y < axisy.min || y > axisy.max)
                        continue;

                    ctx.beginPath();
                    x = axisx.p2c(x);
                    y = axisy.p2c(y) + offset;
                    if (symbol == "circle")
                        ctx.arc(x, y, radius, 0, shadow ? Math.PI : Math.PI * 2, false);
                    else
                        symbol(ctx, x, y, radius, shadow);
                    ctx.closePath();

                    if (fillStyle) {
                        ctx.fillStyle = fillStyle;
                        ctx.fill();
                    }
                    ctx.stroke();
                }
            }

            ctx.save();
            ctx.translate(plotOffset.left, plotOffset.top);

            var lw = series.points.lineWidth,
                sw = series.shadowSize,
                radius = series.points.radius,
                symbol = series.points.symbol;

            // If the user sets the line width to 0, we change it to a very 
            // small value. A line width of 0 seems to force the default of 1.
            // Doing the conditional here allows the shadow setting to still be 
            // optional even with a lineWidth of 0.

            if( lw == 0 )
                lw = 0.0001;

            if (lw > 0 && sw > 0) {
                // draw shadow in two steps
                var w = sw / 2;
                ctx.lineWidth = w;
                ctx.strokeStyle = "rgba(0,0,0,0.1)";
                plotPoints(series.datapoints, radius, null, w + w/2, true,
                           series.xaxis, series.yaxis, symbol);

                ctx.strokeStyle = "rgba(0,0,0,0.2)";
                plotPoints(series.datapoints, radius, null, w/2, true,
                           series.xaxis, series.yaxis, symbol);
            }

            ctx.lineWidth = lw;
            ctx.strokeStyle = series.color;
            plotPoints(series.datapoints, radius,
                       getFillStyle(series.points, series.color), 0, false,
                       series.xaxis, series.yaxis, symbol);
            ctx.restore();
        }

        function drawBar(x, y, b, barLeft, barRight, fillStyleCallback, axisx, axisy, c, horizontal, lineWidth) {
            var left, right, bottom, top,
                drawLeft, drawRight, drawTop, drawBottom,
                tmp;

            // in horizontal mode, we start the bar from the left
            // instead of from the bottom so it appears to be
            // horizontal rather than vertical
            if (horizontal) {
                drawBottom = drawRight = drawTop = true;
                drawLeft = false;
                left = b;
                right = x;
                top = y + barLeft;
                bottom = y + barRight;

                // account for negative bars
                if (right < left) {
                    tmp = right;
                    right = left;
                    left = tmp;
                    drawLeft = true;
                    drawRight = false;
                }
            }
            else {
                drawLeft = drawRight = drawTop = true;
                drawBottom = false;
                left = x + barLeft;
                right = x + barRight;
                bottom = b;
                top = y;

                // account for negative bars
                if (top < bottom) {
                    tmp = top;
                    top = bottom;
                    bottom = tmp;
                    drawBottom = true;
                    drawTop = false;
                }
            }

            // clip
            if (right < axisx.min || left > axisx.max ||
                top < axisy.min || bottom > axisy.max)
                return;

            if (left < axisx.min) {
                left = axisx.min;
                drawLeft = false;
            }

            if (right > axisx.max) {
                right = axisx.max;
                drawRight = false;
            }

            if (bottom < axisy.min) {
                bottom = axisy.min;
                drawBottom = false;
            }

            if (top > axisy.max) {
                top = axisy.max;
                drawTop = false;
            }

            left = axisx.p2c(left);
            bottom = axisy.p2c(bottom);
            right = axisx.p2c(right);
            top = axisy.p2c(top);

            // fill the bar
            if (fillStyleCallback) {
                c.fillStyle = fillStyleCallback(bottom, top);
                c.fillRect(left, top, right - left, bottom - top)
            }

            // draw outline
            if (lineWidth > 0 && (drawLeft || drawRight || drawTop || drawBottom)) {
                c.beginPath();

                // FIXME: inline moveTo is buggy with excanvas
                c.moveTo(left, bottom);
                if (drawLeft)
                    c.lineTo(left, top);
                else
                    c.moveTo(left, top);
                if (drawTop)
                    c.lineTo(right, top);
                else
                    c.moveTo(right, top);
                if (drawRight)
                    c.lineTo(right, bottom);
                else
                    c.moveTo(right, bottom);
                if (drawBottom)
                    c.lineTo(left, bottom);
                else
                    c.moveTo(left, bottom);
                c.stroke();
            }
        }

        function drawSeriesBars(series) {
            function plotBars(datapoints, barLeft, barRight, fillStyleCallback, axisx, axisy) {
                var points = datapoints.points, ps = datapoints.pointsize;

                for (var i = 0; i < points.length; i += ps) {
                    if (points[i] == null)
                        continue;
                    drawBar(points[i], points[i + 1], points[i + 2], barLeft, barRight, fillStyleCallback, axisx, axisy, ctx, series.bars.horizontal, series.bars.lineWidth);
                }
            }

            ctx.save();
            ctx.translate(plotOffset.left, plotOffset.top);

            // FIXME: figure out a way to add shadows (for instance along the right edge)
            ctx.lineWidth = series.bars.lineWidth;
            ctx.strokeStyle = series.color;

            var barLeft;

            switch (series.bars.align) {
                case "left":
                    barLeft = 0;
                    break;
                case "right":
                    barLeft = -series.bars.barWidth;
                    break;
                default:
                    barLeft = -series.bars.barWidth / 2;
            }

            var fillStyleCallback = series.bars.fill ? function (bottom, top) { return getFillStyle(series.bars, series.color, bottom, top); } : null;
            plotBars(series.datapoints, barLeft, barLeft + series.bars.barWidth, fillStyleCallback, series.xaxis, series.yaxis);
            ctx.restore();
        }

        function getFillStyle(filloptions, seriesColor, bottom, top) {
            var fill = filloptions.fill;
            if (!fill)
                return null;

            if (filloptions.fillColor)
                return getColorOrGradient(filloptions.fillColor, bottom, top, seriesColor);

            var c = $.color.parse(seriesColor);
            c.a = typeof fill == "number" ? fill : 0.4;
            c.normalize();
            return c.toString();
        }

        function insertLegend() {

            if (options.legend.container != null) {
                $(options.legend.container).html("");
            } else {
                placeholder.find(".legend").remove();
            }

            if (!options.legend.show) {
                return;
            }

            var fragments = [], entries = [], rowStarted = false,
                lf = options.legend.labelFormatter, s, label;

            // Build a list of legend entries, with each having a label and a color

            for (var i = 0; i < series.length; ++i) {
                s = series[i];
                if (s.label) {
                    label = lf ? lf(s.label, s) : s.label;
                    if (label) {
                        entries.push({
                            label: label,
                            color: s.color
                        });
                    }
                }
            }

            // Sort the legend using either the default or a custom comparator

            if (options.legend.sorted) {
                if ($.isFunction(options.legend.sorted)) {
                    entries.sort(options.legend.sorted);
                } else if (options.legend.sorted == "reverse") {
                	entries.reverse();
                } else {
                    var ascending = options.legend.sorted != "descending";
                    entries.sort(function(a, b) {
                        return a.label == b.label ? 0 : (
                            (a.label < b.label) != ascending ? 1 : -1   // Logical XOR
                        );
                    });
                }
            }

            // Generate markup for the list of entries, in their final order

            for (var i = 0; i < entries.length; ++i) {

                var entry = entries[i];

                if (i % options.legend.noColumns == 0) {
                    if (rowStarted)
                        fragments.push('</tr>');
                    fragments.push('<tr>');
                    rowStarted = true;
                }

                fragments.push(
                    '<td class="legendColorBox"><div style="border:1px solid ' + options.legend.labelBoxBorderColor + ';padding:1px"><div style="width:4px;height:0;border:5px solid ' + entry.color + ';overflow:hidden"></div></div></td>' +
                    '<td class="legendLabel">' + entry.label + '</td>'
                );
            }

            if (rowStarted)
                fragments.push('</tr>');

            if (fragments.length == 0)
                return;

            var table = '<table style="font-size:smaller;color:' + options.grid.color + '">' + fragments.join("") + '</table>';
            if (options.legend.container != null)
                $(options.legend.container).html(table);
            else {
                var pos = "",
                    p = options.legend.position,
                    m = options.legend.margin;
                if (m[0] == null)
                    m = [m, m];
                if (p.charAt(0) == "n")
                    pos += 'top:' + (m[1] + plotOffset.top) + 'px;';
                else if (p.charAt(0) == "s")
                    pos += 'bottom:' + (m[1] + plotOffset.bottom) + 'px;';
                if (p.charAt(1) == "e")
                    pos += 'right:' + (m[0] + plotOffset.right) + 'px;';
                else if (p.charAt(1) == "w")
                    pos += 'left:' + (m[0] + plotOffset.left) + 'px;';
                var legend = $('<div class="legend">' + table.replace('style="', 'style="position:absolute;' + pos +';') + '</div>').appendTo(placeholder);
                if (options.legend.backgroundOpacity != 0.0) {
                    // put in the transparent background
                    // separately to avoid blended labels and
                    // label boxes
                    var c = options.legend.backgroundColor;
                    if (c == null) {
                        c = options.grid.backgroundColor;
                        if (c && typeof c == "string")
                            c = $.color.parse(c);
                        else
                            c = $.color.extract(legend, 'background-color');
                        c.a = 1;
                        c = c.toString();
                    }
                    var div = legend.children();
                    $('<div style="position:absolute;width:' + div.width() + 'px;height:' + div.height() + 'px;' + pos +'background-color:' + c + ';"> </div>').prependTo(legend).css('opacity', options.legend.backgroundOpacity);
                }
            }
        }


        // interactive features

        var highlights = [],
            redrawTimeout = null;

        // returns the data item the mouse is over, or null if none is found
        function findNearbyItem(mouseX, mouseY, seriesFilter) {
            var maxDistance = options.grid.mouseActiveRadius,
                smallestDistance = maxDistance * maxDistance + 1,
                item = null, foundPoint = false, i, j, ps;

            for (i = series.length - 1; i >= 0; --i) {
                if (!seriesFilter(series[i]))
                    continue;

                var s = series[i],
                    axisx = s.xaxis,
                    axisy = s.yaxis,
                    points = s.datapoints.points,
                    mx = axisx.c2p(mouseX), // precompute some stuff to make the loop faster
                    my = axisy.c2p(mouseY),
                    maxx = maxDistance / axisx.scale,
                    maxy = maxDistance / axisy.scale;

                ps = s.datapoints.pointsize;
                // with inverse transforms, we can't use the maxx/maxy
                // optimization, sadly
                if (axisx.options.inverseTransform)
                    maxx = Number.MAX_VALUE;
                if (axisy.options.inverseTransform)
                    maxy = Number.MAX_VALUE;

                if (s.lines.show || s.points.show) {
                    for (j = 0; j < points.length; j += ps) {
                        var x = points[j], y = points[j + 1];
                        if (x == null)
                            continue;

                        // For points and lines, the cursor must be within a
                        // certain distance to the data point
                        if (x - mx > maxx || x - mx < -maxx ||
                            y - my > maxy || y - my < -maxy)
                            continue;

                        // We have to calculate distances in pixels, not in
                        // data units, because the scales of the axes may be different
                        var dx = Math.abs(axisx.p2c(x) - mouseX),
                            dy = Math.abs(axisy.p2c(y) - mouseY),
                            dist = dx * dx + dy * dy; // we save the sqrt

                        // use <= to ensure last point takes precedence
                        // (last generally means on top of)
                        if (dist < smallestDistance) {
                            smallestDistance = dist;
                            item = [i, j / ps];
                        }
                    }
                }

                if (s.bars.show && !item) { // no other point can be nearby

                    var barLeft, barRight;

                    switch (s.bars.align) {
                        case "left":
                            barLeft = 0;
                            break;
                        case "right":
                            barLeft = -s.bars.barWidth;
                            break;
                        default:
                            barLeft = -s.bars.barWidth / 2;
                    }

                    barRight = barLeft + s.bars.barWidth;

                    for (j = 0; j < points.length; j += ps) {
                        var x = points[j], y = points[j + 1], b = points[j + 2];
                        if (x == null)
                            continue;

                        // for a bar graph, the cursor must be inside the bar
                        if (series[i].bars.horizontal ?
                            (mx <= Math.max(b, x) && mx >= Math.min(b, x) &&
                             my >= y + barLeft && my <= y + barRight) :
                            (mx >= x + barLeft && mx <= x + barRight &&
                             my >= Math.min(b, y) && my <= Math.max(b, y)))
                                item = [i, j / ps];
                    }
                }
            }

            if (item) {
                i = item[0];
                j = item[1];
                ps = series[i].datapoints.pointsize;

                return { datapoint: series[i].datapoints.points.slice(j * ps, (j + 1) * ps),
                         dataIndex: j,
                         series: series[i],
                         seriesIndex: i };
            }

            return null;
        }

        function onMouseMove(e) {
            if (options.grid.hoverable)
                triggerClickHoverEvent("plothover", e,
                                       function (s) { return s["hoverable"] != false; });
        }

        function onMouseLeave(e) {
            if (options.grid.hoverable)
                triggerClickHoverEvent("plothover", e,
                                       function (s) { return false; });
        }

        function onClick(e) {
            triggerClickHoverEvent("plotclick", e,
                                   function (s) { return s["clickable"] != false; });
        }

        // trigger click or hover event (they send the same parameters
        // so we share their code)
        function triggerClickHoverEvent(eventname, event, seriesFilter) {
            var offset = eventHolder.offset(),
                canvasX = event.pageX - offset.left - plotOffset.left,
                canvasY = event.pageY - offset.top - plotOffset.top,
            pos = canvasToAxisCoords({ left: canvasX, top: canvasY });

            pos.pageX = event.pageX;
            pos.pageY = event.pageY;

            var item = findNearbyItem(canvasX, canvasY, seriesFilter);

            if (item) {
                // fill in mouse pos for any listeners out there
                item.pageX = parseInt(item.series.xaxis.p2c(item.datapoint[0]) + offset.left + plotOffset.left, 10);
                item.pageY = parseInt(item.series.yaxis.p2c(item.datapoint[1]) + offset.top + plotOffset.top, 10);
            }

            if (options.grid.autoHighlight) {
                // clear auto-highlights
                for (var i = 0; i < highlights.length; ++i) {
                    var h = highlights[i];
                    if (h.auto == eventname &&
                        !(item && h.series == item.series &&
                          h.point[0] == item.datapoint[0] &&
                          h.point[1] == item.datapoint[1]))
                        unhighlight(h.series, h.point);
                }

                if (item)
                    highlight(item.series, item.datapoint, eventname);
            }

            placeholder.trigger(eventname, [ pos, item ]);
        }

        function triggerRedrawOverlay() {
            var t = options.interaction.redrawOverlayInterval;
            if (t == -1) {      // skip event queue
                drawOverlay();
                return;
            }

            if (!redrawTimeout)
                redrawTimeout = setTimeout(drawOverlay, t);
        }

        function drawOverlay() {
            redrawTimeout = null;

            // draw highlights
            octx.save();
            overlay.clear();
            octx.translate(plotOffset.left, plotOffset.top);

            var i, hi;
            for (i = 0; i < highlights.length; ++i) {
                hi = highlights[i];

                if (hi.series.bars.show)
                    drawBarHighlight(hi.series, hi.point);
                else
                    drawPointHighlight(hi.series, hi.point);
            }
            octx.restore();

            executeHooks(hooks.drawOverlay, [octx]);
        }

        function highlight(s, point, auto) {
            if (typeof s == "number")
                s = series[s];

            if (typeof point == "number") {
                var ps = s.datapoints.pointsize;
                point = s.datapoints.points.slice(ps * point, ps * (point + 1));
            }

            var i = indexOfHighlight(s, point);
            if (i == -1) {
                highlights.push({ series: s, point: point, auto: auto });

                triggerRedrawOverlay();
            }
            else if (!auto)
                highlights[i].auto = false;
        }

        function unhighlight(s, point) {
            if (s == null && point == null) {
                highlights = [];
                triggerRedrawOverlay();
                return;
            }

            if (typeof s == "number")
                s = series[s];

            if (typeof point == "number") {
                var ps = s.datapoints.pointsize;
                point = s.datapoints.points.slice(ps * point, ps * (point + 1));
            }

            var i = indexOfHighlight(s, point);
            if (i != -1) {
                highlights.splice(i, 1);

                triggerRedrawOverlay();
            }
        }

        function indexOfHighlight(s, p) {
            for (var i = 0; i < highlights.length; ++i) {
                var h = highlights[i];
                if (h.series == s && h.point[0] == p[0]
                    && h.point[1] == p[1])
                    return i;
            }
            return -1;
        }

        function drawPointHighlight(series, point) {
            var x = point[0], y = point[1],
                axisx = series.xaxis, axisy = series.yaxis,
                highlightColor = (typeof series.highlightColor === "string") ? series.highlightColor : $.color.parse(series.color).scale('a', 0.5).toString();

            if (x < axisx.min || x > axisx.max || y < axisy.min || y > axisy.max)
                return;

            var pointRadius = series.points.radius + series.points.lineWidth / 2;
            octx.lineWidth = pointRadius;
            octx.strokeStyle = highlightColor;
            var radius = 1.5 * pointRadius;
            x = axisx.p2c(x);
            y = axisy.p2c(y);

            octx.beginPath();
            if (series.points.symbol == "circle")
                octx.arc(x, y, radius, 0, 2 * Math.PI, false);
            else
                series.points.symbol(octx, x, y, radius, false);
            octx.closePath();
            octx.stroke();
        }

        function drawBarHighlight(series, point) {
            var highlightColor = (typeof series.highlightColor === "string") ? series.highlightColor : $.color.parse(series.color).scale('a', 0.5).toString(),
                fillStyle = highlightColor,
                barLeft;

            switch (series.bars.align) {
                case "left":
                    barLeft = 0;
                    break;
                case "right":
                    barLeft = -series.bars.barWidth;
                    break;
                default:
                    barLeft = -series.bars.barWidth / 2;
            }

            octx.lineWidth = series.bars.lineWidth;
            octx.strokeStyle = highlightColor;

            drawBar(point[0], point[1], point[2] || 0, barLeft, barLeft + series.bars.barWidth,
                    function () { return fillStyle; }, series.xaxis, series.yaxis, octx, series.bars.horizontal, series.bars.lineWidth);
        }

        function getColorOrGradient(spec, bottom, top, defaultColor) {
            if (typeof spec == "string")
                return spec;
            else {
                // assume this is a gradient spec; IE currently only
                // supports a simple vertical gradient properly, so that's
                // what we support too
                var gradient = ctx.createLinearGradient(0, top, 0, bottom);

                for (var i = 0, l = spec.colors.length; i < l; ++i) {
                    var c = spec.colors[i];
                    if (typeof c != "string") {
                        var co = $.color.parse(defaultColor);
                        if (c.brightness != null)
                            co = co.scale('rgb', c.brightness);
                        if (c.opacity != null)
                            co.a *= c.opacity;
                        c = co.toString();
                    }
                    gradient.addColorStop(i / (l - 1), c);
                }

                return gradient;
            }
        }
    }

    // Add the plot function to the top level of the jQuery object

    $.plot = function(placeholder, data, options) {
        //var t0 = new Date();
        var plot = new Plot($(placeholder), data, options, $.plot.plugins);
        //(window.console ? console.log : alert)("time used (msecs): " + ((new Date()).getTime() - t0.getTime()));
        return plot;
    };

    $.plot.version = "0.8.3";

    $.plot.plugins = [];

    // Also add the plot function as a chainable property

    $.fn.plot = function(data, options) {
        return this.each(function() {
            $.plot(this, data, options);
        });
    };

    // round to nearby lower multiple of base
    function floorInBase(n, base) {
        return base * Math.floor(n / base);
    }

})(jQuery);

/* Flot plugin for plotting textual data or categories.

Copyright (c) 2007-2014 IOLA and Ole Laursen.
Licensed under the MIT license.

Consider a dataset like [["February", 34], ["March", 20], ...]. This plugin
allows you to plot such a dataset directly.

To enable it, you must specify mode: "categories" on the axis with the textual
labels, e.g.

	$.plot("#placeholder", data, { xaxis: { mode: "categories" } });

By default, the labels are ordered as they are met in the data series. If you
need a different ordering, you can specify "categories" on the axis options
and list the categories there:

	xaxis: {
		mode: "categories",
		categories: ["February", "March", "April"]
	}

If you need to customize the distances between the categories, you can specify
"categories" as an object mapping labels to values

	xaxis: {
		mode: "categories",
		categories: { "February": 1, "March": 3, "April": 4 }
	}

If you don't specify all categories, the remaining categories will be numbered
from the max value plus 1 (with a spacing of 1 between each).

Internally, the plugin works by transforming the input data through an auto-
generated mapping where the first category becomes 0, the second 1, etc.
Hence, a point like ["February", 34] becomes [0, 34] internally in Flot (this
is visible in hover and click events that return numbers rather than the
category labels). The plugin also overrides the tick generator to spit out the
categories as ticks instead of the values.

If you need to map a value back to its label, the mapping is always accessible
as "categories" on the axis object, e.g. plot.getAxes().xaxis.categories.

*/

(function ($) {
    var options = {
        xaxis: {
            categories: null
        },
        yaxis: {
            categories: null
        }
    };
    
    function processRawData(plot, series, data, datapoints) {
        // if categories are enabled, we need to disable
        // auto-transformation to numbers so the strings are intact
        // for later processing

        var xCategories = series.xaxis.options.mode == "categories",
            yCategories = series.yaxis.options.mode == "categories";
        
        if (!(xCategories || yCategories))
            return;

        var format = datapoints.format;

        if (!format) {
            // FIXME: auto-detection should really not be defined here
            var s = series;
            format = [];
            format.push({ x: true, number: true, required: true });
            format.push({ y: true, number: true, required: true });

            if (s.bars.show || (s.lines.show && s.lines.fill)) {
                var autoscale = !!((s.bars.show && s.bars.zero) || (s.lines.show && s.lines.zero));
                format.push({ y: true, number: true, required: false, defaultValue: 0, autoscale: autoscale });
                if (s.bars.horizontal) {
                    delete format[format.length - 1].y;
                    format[format.length - 1].x = true;
                }
            }
            
            datapoints.format = format;
        }

        for (var m = 0; m < format.length; ++m) {
            if (format[m].x && xCategories)
                format[m].number = false;
            
            if (format[m].y && yCategories)
                format[m].number = false;
        }
    }

    function getNextIndex(categories) {
        var index = -1;
        
        for (var v in categories)
            if (categories[v] > index)
                index = categories[v];

        return index + 1;
    }

    function categoriesTickGenerator(axis) {
        var res = [];
        for (var label in axis.categories) {
            var v = axis.categories[label];
            if (v >= axis.min && v <= axis.max)
                res.push([v, label]);
        }

        res.sort(function (a, b) { return a[0] - b[0]; });

        return res;
    }
    
    function setupCategoriesForAxis(series, axis, datapoints) {
        if (series[axis].options.mode != "categories")
            return;
        
        if (!series[axis].categories) {
            // parse options
            var c = {}, o = series[axis].options.categories || {};
            if ($.isArray(o)) {
                for (var i = 0; i < o.length; ++i)
                    c[o[i]] = i;
            }
            else {
                for (var v in o)
                    c[v] = o[v];
            }
            
            series[axis].categories = c;
        }

        // fix ticks
        if (!series[axis].options.ticks)
            series[axis].options.ticks = categoriesTickGenerator;

        transformPointsOnAxis(datapoints, axis, series[axis].categories);
    }
    
    function transformPointsOnAxis(datapoints, axis, categories) {
        // go through the points, transforming them
        var points = datapoints.points,
            ps = datapoints.pointsize,
            format = datapoints.format,
            formatColumn = axis.charAt(0),
            index = getNextIndex(categories);

        for (var i = 0; i < points.length; i += ps) {
            if (points[i] == null)
                continue;
            
            for (var m = 0; m < ps; ++m) {
                var val = points[i + m];

                if (val == null || !format[m][formatColumn])
                    continue;

                if (!(val in categories)) {
                    categories[val] = index;
                    ++index;
                }
                
                points[i + m] = categories[val];
            }
        }
    }

    function processDatapoints(plot, series, datapoints) {
        setupCategoriesForAxis(series, "xaxis", datapoints);
        setupCategoriesForAxis(series, "yaxis", datapoints);
    }

    function init(plot) {
        plot.hooks.processRawData.push(processRawData);
        plot.hooks.processDatapoints.push(processDatapoints);
    }
    
    $.plot.plugins.push({
        init: init,
        options: options,
        name: 'categories',
        version: '1.0'
    });
})(jQuery);

/* Flot plugin for rendering pie charts.

Copyright (c) 2007-2014 IOLA and Ole Laursen.
Licensed under the MIT license.

The plugin assumes that each series has a single data value, and that each
value is a positive integer or zero.  Negative numbers don't make sense for a
pie chart, and have unpredictable results.  The values do NOT need to be
passed in as percentages; the plugin will calculate the total and per-slice
percentages internally.

* Created by Brian Medendorp

* Updated with contributions from btburnett3, Anthony Aragues and Xavi Ivars

The plugin supports these options:

	series: {
		pie: {
			show: true/false
			radius: 0-1 for percentage of fullsize, or a specified pixel length, or 'auto'
			innerRadius: 0-1 for percentage of fullsize or a specified pixel length, for creating a donut effect
			startAngle: 0-2 factor of PI used for starting angle (in radians) i.e 3/2 starts at the top, 0 and 2 have the same result
			tilt: 0-1 for percentage to tilt the pie, where 1 is no tilt, and 0 is completely flat (nothing will show)
			offset: {
				top: integer value to move the pie up or down
				left: integer value to move the pie left or right, or 'auto'
			},
			stroke: {
				color: any hexidecimal color value (other formats may or may not work, so best to stick with something like '#FFF')
				width: integer pixel width of the stroke
			},
			label: {
				show: true/false, or 'auto'
				formatter:  a user-defined function that modifies the text/style of the label text
				radius: 0-1 for percentage of fullsize, or a specified pixel length
				background: {
					color: any hexidecimal color value (other formats may or may not work, so best to stick with something like '#000')
					opacity: 0-1
				},
				threshold: 0-1 for the percentage value at which to hide labels (if they're too small)
			},
			combine: {
				threshold: 0-1 for the percentage value at which to combine slices (if they're too small)
				color: any hexidecimal color value (other formats may or may not work, so best to stick with something like '#CCC'), if null, the plugin will automatically use the color of the first slice to be combined
				label: any text value of what the combined slice should be labeled
			}
			highlight: {
				opacity: 0-1
			}
		}
	}

More detail and specific examples can be found in the included HTML file.

*/

(function($) {

	// Maximum redraw attempts when fitting labels within the plot

	var REDRAW_ATTEMPTS = 10;

	// Factor by which to shrink the pie when fitting labels within the plot

	var REDRAW_SHRINK = 0.95;

	function init(plot) {

		var canvas = null,
			target = null,
			options = null,
			maxRadius = null,
			centerLeft = null,
			centerTop = null,
			processed = false,
			ctx = null;

		// interactive variables

		var highlights = [];

		// add hook to determine if pie plugin in enabled, and then perform necessary operations

		plot.hooks.processOptions.push(function(plot, options) {
			if (options.series.pie.show) {

				options.grid.show = false;

				// set labels.show

				if (options.series.pie.label.show == "auto") {
					if (options.legend.show) {
						options.series.pie.label.show = false;
					} else {
						options.series.pie.label.show = true;
					}
				}

				// set radius

				if (options.series.pie.radius == "auto") {
					if (options.series.pie.label.show) {
						options.series.pie.radius = 3/4;
					} else {
						options.series.pie.radius = 1;
					}
				}

				// ensure sane tilt

				if (options.series.pie.tilt > 1) {
					options.series.pie.tilt = 1;
				} else if (options.series.pie.tilt < 0) {
					options.series.pie.tilt = 0;
				}
			}
		});

		plot.hooks.bindEvents.push(function(plot, eventHolder) {
			var options = plot.getOptions();
			if (options.series.pie.show) {
				if (options.grid.hoverable) {
					eventHolder.unbind("mousemove").mousemove(onMouseMove);
				}
				if (options.grid.clickable) {
					eventHolder.unbind("click").click(onClick);
				}
			}
		});

		plot.hooks.processDatapoints.push(function(plot, series, data, datapoints) {
			var options = plot.getOptions();
			if (options.series.pie.show) {
				processDatapoints(plot, series, data, datapoints);
			}
		});

		plot.hooks.drawOverlay.push(function(plot, octx) {
			var options = plot.getOptions();
			if (options.series.pie.show) {
				drawOverlay(plot, octx);
			}
		});

		plot.hooks.draw.push(function(plot, newCtx) {
			var options = plot.getOptions();
			if (options.series.pie.show) {
				draw(plot, newCtx);
			}
		});

		function processDatapoints(plot, series, datapoints) {
			if (!processed)	{
				processed = true;
				canvas = plot.getCanvas();
				target = $(canvas).parent();
				options = plot.getOptions();
				plot.setData(combine(plot.getData()));
			}
		}

		function combine(data) {

			var total = 0,
				combined = 0,
				numCombined = 0,
				color = options.series.pie.combine.color,
				newdata = [];

			// Fix up the raw data from Flot, ensuring the data is numeric

			for (var i = 0; i < data.length; ++i) {

				var value = data[i].data;

				// If the data is an array, we'll assume that it's a standard
				// Flot x-y pair, and are concerned only with the second value.

				// Note how we use the original array, rather than creating a
				// new one; this is more efficient and preserves any extra data
				// that the user may have stored in higher indexes.

				if ($.isArray(value) && value.length == 1) {
    				value = value[0];
				}

				if ($.isArray(value)) {
					// Equivalent to $.isNumeric() but compatible with jQuery < 1.7
					if (!isNaN(parseFloat(value[1])) && isFinite(value[1])) {
						value[1] = +value[1];
					} else {
						value[1] = 0;
					}
				} else if (!isNaN(parseFloat(value)) && isFinite(value)) {
					value = [1, +value];
				} else {
					value = [1, 0];
				}

				data[i].data = [value];
			}

			// Sum up all the slices, so we can calculate percentages for each

			for (var i = 0; i < data.length; ++i) {
				total += data[i].data[0][1];
			}

			// Count the number of slices with percentages below the combine
			// threshold; if it turns out to be just one, we won't combine.

			for (var i = 0; i < data.length; ++i) {
				var value = data[i].data[0][1];
				if (value / total <= options.series.pie.combine.threshold) {
					combined += value;
					numCombined++;
					if (!color) {
						color = data[i].color;
					}
				}
			}

			for (var i = 0; i < data.length; ++i) {
				var value = data[i].data[0][1];
				if (numCombined < 2 || value / total > options.series.pie.combine.threshold) {
					newdata.push(
						$.extend(data[i], {     /* extend to allow keeping all other original data values
						                           and using them e.g. in labelFormatter. */
							data: [[1, value]],
							color: data[i].color,
							label: data[i].label,
							angle: value * Math.PI * 2 / total,
							percent: value / (total / 100)
						})
					);
				}
			}

			if (numCombined > 1) {
				newdata.push({
					data: [[1, combined]],
					color: color,
					label: options.series.pie.combine.label,
					angle: combined * Math.PI * 2 / total,
					percent: combined / (total / 100)
				});
			}

			return newdata;
		}

		function draw(plot, newCtx) {

			if (!target) {
				return; // if no series were passed
			}

			var canvasWidth = plot.getPlaceholder().width(),
				canvasHeight = plot.getPlaceholder().height(),
				legendWidth = target.children().filter(".legend").children().width() || 0;

			ctx = newCtx;

			// WARNING: HACK! REWRITE THIS CODE AS SOON AS POSSIBLE!

			// When combining smaller slices into an 'other' slice, we need to
			// add a new series.  Since Flot gives plugins no way to modify the
			// list of series, the pie plugin uses a hack where the first call
			// to processDatapoints results in a call to setData with the new
			// list of series, then subsequent processDatapoints do nothing.

			// The plugin-global 'processed' flag is used to control this hack;
			// it starts out false, and is set to true after the first call to
			// processDatapoints.

			// Unfortunately this turns future setData calls into no-ops; they
			// call processDatapoints, the flag is true, and nothing happens.

			// To fix this we'll set the flag back to false here in draw, when
			// all series have been processed, so the next sequence of calls to
			// processDatapoints once again starts out with a slice-combine.
			// This is really a hack; in 0.9 we need to give plugins a proper
			// way to modify series before any processing begins.

			processed = false;

			// calculate maximum radius and center point

			maxRadius =  Math.min(canvasWidth, canvasHeight / options.series.pie.tilt) / 2;
			centerTop = canvasHeight / 2 + options.series.pie.offset.top;
			centerLeft = canvasWidth / 2;

			if (options.series.pie.offset.left == "auto") {
				if (options.legend.position.match("w")) {
					centerLeft += legendWidth / 2;
				} else {
					centerLeft -= legendWidth / 2;
				}
				if (centerLeft < maxRadius) {
					centerLeft = maxRadius;
				} else if (centerLeft > canvasWidth - maxRadius) {
					centerLeft = canvasWidth - maxRadius;
				}
			} else {
				centerLeft += options.series.pie.offset.left;
			}

			var slices = plot.getData(),
				attempts = 0;

			// Keep shrinking the pie's radius until drawPie returns true,
			// indicating that all the labels fit, or we try too many times.

			do {
				if (attempts > 0) {
					maxRadius *= REDRAW_SHRINK;
				}
				attempts += 1;
				clear();
				if (options.series.pie.tilt <= 0.8) {
					drawShadow();
				}
			} while (!drawPie() && attempts < REDRAW_ATTEMPTS)

			if (attempts >= REDRAW_ATTEMPTS) {
				clear();
				target.prepend("<div class='error'>Could not draw pie with labels contained inside canvas</div>");
			}

			if (plot.setSeries && plot.insertLegend) {
				plot.setSeries(slices);
				plot.insertLegend();
			}

			// we're actually done at this point, just defining internal functions at this point

			function clear() {
				ctx.clearRect(0, 0, canvasWidth, canvasHeight);
				target.children().filter(".pieLabel, .pieLabelBackground").remove();
			}

			function drawShadow() {

				var shadowLeft = options.series.pie.shadow.left;
				var shadowTop = options.series.pie.shadow.top;
				var edge = 10;
				var alpha = options.series.pie.shadow.alpha;
				var radius = options.series.pie.radius > 1 ? options.series.pie.radius : maxRadius * options.series.pie.radius;

				if (radius >= canvasWidth / 2 - shadowLeft || radius * options.series.pie.tilt >= canvasHeight / 2 - shadowTop || radius <= edge) {
					return;	// shadow would be outside canvas, so don't draw it
				}

				ctx.save();
				ctx.translate(shadowLeft,shadowTop);
				ctx.globalAlpha = alpha;
				ctx.fillStyle = "#000";

				// center and rotate to starting position

				ctx.translate(centerLeft,centerTop);
				ctx.scale(1, options.series.pie.tilt);

				//radius -= edge;

				for (var i = 1; i <= edge; i++) {
					ctx.beginPath();
					ctx.arc(0, 0, radius, 0, Math.PI * 2, false);
					ctx.fill();
					radius -= i;
				}

				ctx.restore();
			}

			function drawPie() {

				var startAngle = Math.PI * options.series.pie.startAngle;
				var radius = options.series.pie.radius > 1 ? options.series.pie.radius : maxRadius * options.series.pie.radius;

				// center and rotate to starting position

				ctx.save();
				ctx.translate(centerLeft,centerTop);
				ctx.scale(1, options.series.pie.tilt);
				//ctx.rotate(startAngle); // start at top; -- This doesn't work properly in Opera

				// draw slices

				ctx.save();
				var currentAngle = startAngle;
				for (var i = 0; i < slices.length; ++i) {
					slices[i].startAngle = currentAngle;
					drawSlice(slices[i].angle, slices[i].color, true);
				}
				ctx.restore();

				// draw slice outlines

				if (options.series.pie.stroke.width > 0) {
					ctx.save();
					ctx.lineWidth = options.series.pie.stroke.width;
					currentAngle = startAngle;
					for (var i = 0; i < slices.length; ++i) {
						drawSlice(slices[i].angle, options.series.pie.stroke.color, false);
					}
					ctx.restore();
				}

				// draw donut hole

				drawDonutHole(ctx);

				ctx.restore();

				// Draw the labels, returning true if they fit within the plot

				if (options.series.pie.label.show) {
					return drawLabels();
				} else return true;

				function drawSlice(angle, color, fill) {

					if (angle <= 0 || isNaN(angle)) {
						return;
					}

					if (fill) {
						ctx.fillStyle = color;
					} else {
						ctx.strokeStyle = color;
						ctx.lineJoin = "round";
					}

					ctx.beginPath();
					if (Math.abs(angle - Math.PI * 2) > 0.000000001) {
						ctx.moveTo(0, 0); // Center of the pie
					}

					//ctx.arc(0, 0, radius, 0, angle, false); // This doesn't work properly in Opera
					ctx.arc(0, 0, radius,currentAngle, currentAngle + angle / 2, false);
					ctx.arc(0, 0, radius,currentAngle + angle / 2, currentAngle + angle, false);
					ctx.closePath();
					//ctx.rotate(angle); // This doesn't work properly in Opera
					currentAngle += angle;

					if (fill) {
						ctx.fill();
					} else {
						ctx.stroke();
					}
				}

				function drawLabels() {

					var currentAngle = startAngle;
					var radius = options.series.pie.label.radius > 1 ? options.series.pie.label.radius : maxRadius * options.series.pie.label.radius;

					for (var i = 0; i < slices.length; ++i) {
						if (slices[i].percent >= options.series.pie.label.threshold * 100) {
							if (!drawLabel(slices[i], currentAngle, i)) {
								return false;
							}
						}
						currentAngle += slices[i].angle;
					}

					return true;

					function drawLabel(slice, startAngle, index) {

						if (slice.data[0][1] == 0) {
							return true;
						}

						// format label text

						var lf = options.legend.labelFormatter, text, plf = options.series.pie.label.formatter;

						if (lf) {
							text = lf(slice.label, slice);
						} else {
							text = slice.label;
						}

						if (plf) {
							text = plf(text, slice);
						}

						var halfAngle = ((startAngle + slice.angle) + startAngle) / 2;
						var x = centerLeft + Math.round(Math.cos(halfAngle) * radius);
						var y = centerTop + Math.round(Math.sin(halfAngle) * radius) * options.series.pie.tilt;

						var html = "<span class='pieLabel' id='pieLabel" + index + "' style='position:absolute;top:" + y + "px;left:" + x + "px;'>" + text + "</span>";
						target.append(html);

						var label = target.children("#pieLabel" + index);
						var labelTop = (y - label.height() / 2);
						var labelLeft = (x - label.width() / 2);

						label.css("top", labelTop);
						label.css("left", labelLeft);

						// check to make sure that the label is not outside the canvas

						if (0 - labelTop > 0 || 0 - labelLeft > 0 || canvasHeight - (labelTop + label.height()) < 0 || canvasWidth - (labelLeft + label.width()) < 0) {
							return false;
						}

						if (options.series.pie.label.background.opacity != 0) {

							// put in the transparent background separately to avoid blended labels and label boxes

							var c = options.series.pie.label.background.color;

							if (c == null) {
								c = slice.color;
							}

							var pos = "top:" + labelTop + "px;left:" + labelLeft + "px;";
							$("<div class='pieLabelBackground' style='position:absolute;width:" + label.width() + "px;height:" + label.height() + "px;" + pos + "background-color:" + c + ";'></div>")
								.css("opacity", options.series.pie.label.background.opacity)
								.insertBefore(label);
						}

						return true;
					} // end individual label function
				} // end drawLabels function
			} // end drawPie function
		} // end draw function

		// Placed here because it needs to be accessed from multiple locations

		function drawDonutHole(layer) {
			if (options.series.pie.innerRadius > 0) {

				// subtract the center

				layer.save();
				var innerRadius = options.series.pie.innerRadius > 1 ? options.series.pie.innerRadius : maxRadius * options.series.pie.innerRadius;
				layer.globalCompositeOperation = "destination-out"; // this does not work with excanvas, but it will fall back to using the stroke color
				layer.beginPath();
				layer.fillStyle = options.series.pie.stroke.color;
				layer.arc(0, 0, innerRadius, 0, Math.PI * 2, false);
				layer.fill();
				layer.closePath();
				layer.restore();

				// add inner stroke

				layer.save();
				layer.beginPath();
				layer.strokeStyle = options.series.pie.stroke.color;
				layer.arc(0, 0, innerRadius, 0, Math.PI * 2, false);
				layer.stroke();
				layer.closePath();
				layer.restore();

				// TODO: add extra shadow inside hole (with a mask) if the pie is tilted.
			}
		}

		//-- Additional Interactive related functions --

		function isPointInPoly(poly, pt) {
			for(var c = false, i = -1, l = poly.length, j = l - 1; ++i < l; j = i)
				((poly[i][1] <= pt[1] && pt[1] < poly[j][1]) || (poly[j][1] <= pt[1] && pt[1]< poly[i][1]))
				&& (pt[0] < (poly[j][0] - poly[i][0]) * (pt[1] - poly[i][1]) / (poly[j][1] - poly[i][1]) + poly[i][0])
				&& (c = !c);
			return c;
		}

		function findNearbySlice(mouseX, mouseY) {

			var slices = plot.getData(),
				options = plot.getOptions(),
				radius = options.series.pie.radius > 1 ? options.series.pie.radius : maxRadius * options.series.pie.radius,
				x, y;

			for (var i = 0; i < slices.length; ++i) {

				var s = slices[i];

				if (s.pie.show) {

					ctx.save();
					ctx.beginPath();
					ctx.moveTo(0, 0); // Center of the pie
					//ctx.scale(1, options.series.pie.tilt);	// this actually seems to break everything when here.
					ctx.arc(0, 0, radius, s.startAngle, s.startAngle + s.angle / 2, false);
					ctx.arc(0, 0, radius, s.startAngle + s.angle / 2, s.startAngle + s.angle, false);
					ctx.closePath();
					x = mouseX - centerLeft;
					y = mouseY - centerTop;

					if (ctx.isPointInPath) {
						if (ctx.isPointInPath(mouseX - centerLeft, mouseY - centerTop)) {
							ctx.restore();
							return {
								datapoint: [s.percent, s.data],
								dataIndex: 0,
								series: s,
								seriesIndex: i
							};
						}
					} else {

						// excanvas for IE doesn;t support isPointInPath, this is a workaround.

						var p1X = radius * Math.cos(s.startAngle),
							p1Y = radius * Math.sin(s.startAngle),
							p2X = radius * Math.cos(s.startAngle + s.angle / 4),
							p2Y = radius * Math.sin(s.startAngle + s.angle / 4),
							p3X = radius * Math.cos(s.startAngle + s.angle / 2),
							p3Y = radius * Math.sin(s.startAngle + s.angle / 2),
							p4X = radius * Math.cos(s.startAngle + s.angle / 1.5),
							p4Y = radius * Math.sin(s.startAngle + s.angle / 1.5),
							p5X = radius * Math.cos(s.startAngle + s.angle),
							p5Y = radius * Math.sin(s.startAngle + s.angle),
							arrPoly = [[0, 0], [p1X, p1Y], [p2X, p2Y], [p3X, p3Y], [p4X, p4Y], [p5X, p5Y]],
							arrPoint = [x, y];

						// TODO: perhaps do some mathmatical trickery here with the Y-coordinate to compensate for pie tilt?

						if (isPointInPoly(arrPoly, arrPoint)) {
							ctx.restore();
							return {
								datapoint: [s.percent, s.data],
								dataIndex: 0,
								series: s,
								seriesIndex: i
							};
						}
					}

					ctx.restore();
				}
			}

			return null;
		}

		function onMouseMove(e) {
			triggerClickHoverEvent("plothover", e);
		}

		function onClick(e) {
			triggerClickHoverEvent("plotclick", e);
		}

		// trigger click or hover event (they send the same parameters so we share their code)

		function triggerClickHoverEvent(eventname, e) {

			var offset = plot.offset();
			var canvasX = parseInt(e.pageX - offset.left);
			var canvasY =  parseInt(e.pageY - offset.top);
			var item = findNearbySlice(canvasX, canvasY);

			if (options.grid.autoHighlight) {

				// clear auto-highlights

				for (var i = 0; i < highlights.length; ++i) {
					var h = highlights[i];
					if (h.auto == eventname && !(item && h.series == item.series)) {
						unhighlight(h.series);
					}
				}
			}

			// highlight the slice

			if (item) {
				highlight(item.series, eventname);
			}

			// trigger any hover bind events

			var pos = { pageX: e.pageX, pageY: e.pageY };
			target.trigger(eventname, [pos, item]);
		}

		function highlight(s, auto) {
			//if (typeof s == "number") {
			//	s = series[s];
			//}

			var i = indexOfHighlight(s);

			if (i == -1) {
				highlights.push({ series: s, auto: auto });
				plot.triggerRedrawOverlay();
			} else if (!auto) {
				highlights[i].auto = false;
			}
		}

		function unhighlight(s) {
			if (s == null) {
				highlights = [];
				plot.triggerRedrawOverlay();
			}

			//if (typeof s == "number") {
			//	s = series[s];
			//}

			var i = indexOfHighlight(s);

			if (i != -1) {
				highlights.splice(i, 1);
				plot.triggerRedrawOverlay();
			}
		}

		function indexOfHighlight(s) {
			for (var i = 0; i < highlights.length; ++i) {
				var h = highlights[i];
				if (h.series == s)
					return i;
			}
			return -1;
		}

		function drawOverlay(plot, octx) {

			var options = plot.getOptions();

			var radius = options.series.pie.radius > 1 ? options.series.pie.radius : maxRadius * options.series.pie.radius;

			octx.save();
			octx.translate(centerLeft, centerTop);
			octx.scale(1, options.series.pie.tilt);

			for (var i = 0; i < highlights.length; ++i) {
				drawHighlight(highlights[i].series);
			}

			drawDonutHole(octx);

			octx.restore();

			function drawHighlight(series) {

				if (series.angle <= 0 || isNaN(series.angle)) {
					return;
				}

				//octx.fillStyle = parseColor(options.series.pie.highlight.color).scale(null, null, null, options.series.pie.highlight.opacity).toString();
				octx.fillStyle = "rgba(255, 255, 255, " + options.series.pie.highlight.opacity + ")"; // this is temporary until we have access to parseColor
				octx.beginPath();
				if (Math.abs(series.angle - Math.PI * 2) > 0.000000001) {
					octx.moveTo(0, 0); // Center of the pie
				}
				octx.arc(0, 0, radius, series.startAngle, series.startAngle + series.angle / 2, false);
				octx.arc(0, 0, radius, series.startAngle + series.angle / 2, series.startAngle + series.angle, false);
				octx.closePath();
				octx.fill();
			}
		}
	} // end init (plugin body)

	// define pie specific options and their default values

	var options = {
		series: {
			pie: {
				show: false,
				radius: "auto",	// actual radius of the visible pie (based on full calculated radius if <=1, or hard pixel value)
				innerRadius: 0, /* for donut */
				startAngle: 3/2,
				tilt: 1,
				shadow: {
					left: 5,	// shadow left offset
					top: 15,	// shadow top offset
					alpha: 0.02	// shadow alpha
				},
				offset: {
					top: 0,
					left: "auto"
				},
				stroke: {
					color: "#fff",
					width: 1
				},
				label: {
					show: "auto",
					formatter: function(label, slice) {
						return "<div style='font-size:x-small;text-align:center;padding:2px;color:" + slice.color + ";'>" + label + "<br/>" + Math.round(slice.percent) + "%</div>";
					},	// formatter function
					radius: 1,	// radius at which to place the labels (based on full calculated radius if <=1, or hard pixel value)
					background: {
						color: null,
						opacity: 0
					},
					threshold: 0	// percentage at which to hide the label (i.e. the slice is too narrow)
				},
				combine: {
					threshold: -1,	// percentage at which to combine little slices into one larger slice
					color: null,	// color to give the new slice (auto-generated if null)
					label: "Other"	// label to give the new slice
				},
				highlight: {
					//color: "#fff",		// will add this functionality once parseColor is available
					opacity: 0.5
				}
			}
		}
	};

	$.plot.plugins.push({
		init: init,
		options: options,
		name: "pie",
		version: "1.1"
	});

})(jQuery);

/*!jQuery Knob*/
/**
 * Downward compatible, touchable dial
 *
 * Version: 1.2.12
 * Requires: jQuery v1.7+
 *
 * Copyright (c) 2012 Anthony Terrien
 * Under MIT License (http://www.opensource.org/licenses/mit-license.php)
 *
 * Thanks to vor, eskimoblood, spiffistan, FabrizioC
 */
(function (factory) {
    if (typeof exports === 'object') {
        // CommonJS
        module.exports = factory(require('jquery'));
    } else if (typeof define === 'function' && define.amd) {
        // AMD. Register as an anonymous module.
        define(['jquery'], factory);
    } else {
        // Browser globals
        factory(jQuery);
    }
}(function ($) {

    /**
     * Kontrol library
     */
    "use strict";

    /**
     * Definition of globals and core
     */
    var k = {}, // kontrol
        max = Math.max,
        min = Math.min;

    k.c = {};
    k.c.d = $(document);
    k.c.t = function (e) {
        return e.originalEvent.touches.length - 1;
    };

    /**
     * Kontrol Object
     *
     * Definition of an abstract UI control
     *
     * Each concrete component must call this one.
     * <code>
     * k.o.call(this);
     * </code>
     */
    k.o = function () {
        var s = this;

        this.o = null; // array of options
        this.$ = null; // jQuery wrapped element
        this.i = null; // mixed HTMLInputElement or array of HTMLInputElement
        this.g = null; // deprecated 2D graphics context for 'pre-rendering'
        this.v = null; // value ; mixed array or integer
        this.cv = null; // change value ; not commited value
        this.x = 0; // canvas x position
        this.y = 0; // canvas y position
        this.w = 0; // canvas width
        this.h = 0; // canvas height
        this.$c = null; // jQuery canvas element
        this.c = null; // rendered canvas context
        this.t = 0; // touches index
        this.isInit = false;
        this.fgColor = null; // main color
        this.pColor = null; // previous color
        this.dH = null; // draw hook
        this.cH = null; // change hook
        this.eH = null; // cancel hook
        this.rH = null; // release hook
        this.scale = 1; // scale factor
        this.relative = false;
        this.relativeWidth = false;
        this.relativeHeight = false;
        this.$div = null; // component div

        this.run = function () {
            var cf = function (e, conf) {
                var k;
                for (k in conf) {
                    s.o[k] = conf[k];
                }
                s._carve().init();
                s._configure()
                 ._draw();
            };

            if (this.$.data('kontroled')) return;
            this.$.data('kontroled', true);

            this.extend();
            this.o = $.extend({
                    // Config
                    min: this.$.data('min') !== undefined ? this.$.data('min') : 0,
                    max: this.$.data('max') !== undefined ? this.$.data('max') : 100,
                    stopper: true,
                    readOnly: this.$.data('readonly') || (this.$.attr('readonly') === 'readonly'),

                    // UI
                    cursor: this.$.data('cursor') === true && 30
                            || this.$.data('cursor') || 0,
                    thickness: this.$.data('thickness')
                               && Math.max(Math.min(this.$.data('thickness'), 1), 0.01)
                               || 0.35,
                    lineCap: this.$.data('linecap') || 'butt',
                    width: this.$.data('width') || 200,
                    height: this.$.data('height') || 200,
                    displayInput: this.$.data('displayinput') == null || this.$.data('displayinput'),
                    displayPrevious: this.$.data('displayprevious'),
                    fgColor: this.$.data('fgcolor') || '#87CEEB',
                    inputColor: this.$.data('inputcolor'),
                    font: this.$.data('font') || 'Arial',
                    fontWeight: this.$.data('font-weight') || 'bold',
                    inline: false,
                    step: this.$.data('step') || 1,
                    rotation: this.$.data('rotation'),

                    // Hooks
                    draw: null, // function () {}
                    change: null, // function (value) {}
                    cancel: null, // function () {}
                    release: null, // function (value) {}

                    // Output formatting, allows to add unit: %, ms ...
                    format: function(v) {
                        return v;
                    },
                    parse: function (v) {
                        return parseFloat(v);
                    }
                }, this.o
            );

            // finalize options
            this.o.flip = this.o.rotation === 'anticlockwise' || this.o.rotation === 'acw';
            if (!this.o.inputColor) {
                this.o.inputColor = this.o.fgColor;
            }

            // routing value
            if (this.$.is('fieldset')) {

                // fieldset = array of integer
                this.v = {};
                this.i = this.$.find('input');
                this.i.each(function(k) {
                    var $this = $(this);
                    s.i[k] = $this;
                    s.v[k] = s.o.parse($this.val());

                    $this.bind(
                        'change blur',
                        function () {
                            var val = {};
                            val[k] = $this.val();
                            s.val(s._validate(val));
                        }
                    );
                });
                this.$.find('legend').remove();
            } else {

                // input = integer
                this.i = this.$;
                this.v = this.o.parse(this.$.val());
                this.v === '' && (this.v = this.o.min);
                this.$.bind(
                    'change blur',
                    function () {
                        s.val(s._validate(s.o.parse(s.$.val())));
                    }
                );

            }

            !this.o.displayInput && this.$.hide();

            // adds needed DOM elements (canvas, div)
            this.$c = $(document.createElement('canvas')).attr({
                width: this.o.width,
                height: this.o.height
            });

            // wraps all elements in a div
            // add to DOM before Canvas init is triggered
            this.$div = $('<div style="'
                + (this.o.inline ? 'display:inline;' : '')
                + 'width:' + this.o.width + 'px;height:' + this.o.height + 'px;'
                + '"></div>');

            this.$.wrap(this.$div).before(this.$c);
            this.$div = this.$.parent();

            if (typeof G_vmlCanvasManager !== 'undefined') {
                G_vmlCanvasManager.initElement(this.$c[0]);
            }

            this.c = this.$c[0].getContext ? this.$c[0].getContext('2d') : null;

            if (!this.c) {
                throw {
                    name:        "CanvasNotSupportedException",
                    message:     "Canvas not supported. Please use excanvas on IE8.0.",
                    toString:    function(){return this.name + ": " + this.message}
                }
            }

            // hdpi support
            this.scale = (window.devicePixelRatio || 1) / (
                            this.c.webkitBackingStorePixelRatio ||
                            this.c.mozBackingStorePixelRatio ||
                            this.c.msBackingStorePixelRatio ||
                            this.c.oBackingStorePixelRatio ||
                            this.c.backingStorePixelRatio || 1
                         );

            // detects relative width / height
            this.relativeWidth =  this.o.width % 1 !== 0
                                  && this.o.width.indexOf('%');
            this.relativeHeight = this.o.height % 1 !== 0
                                  && this.o.height.indexOf('%');
            this.relative = this.relativeWidth || this.relativeHeight;

            // computes size and carves the component
            this._carve();

            // prepares props for transaction
            if (this.v instanceof Object) {
                this.cv = {};
                this.copy(this.v, this.cv);
            } else {
                this.cv = this.v;
            }

            // binds configure event
            this.$
                .bind("configure", cf)
                .parent()
                .bind("configure", cf);

            // finalize init
            this._listen()
                ._configure()
                ._xy()
                .init();

            this.isInit = true;

            this.$.val(this.o.format(this.v));
            this._draw();

            return this;
        };

        this._carve = function() {
            if (this.relative) {
                var w = this.relativeWidth ?
                        this.$div.parent().width() *
                        parseInt(this.o.width) / 100
                        : this.$div.parent().width(),
                    h = this.relativeHeight ?
                        this.$div.parent().height() *
                        parseInt(this.o.height) / 100
                        : this.$div.parent().height();

                // apply relative
                this.w = this.h = Math.min(w, h);
            } else {
                this.w = this.o.width;
                this.h = this.o.height;
            }

            // finalize div
            this.$div.css({
                'width': this.w + 'px',
                'height': this.h + 'px'
            });

            // finalize canvas with computed width
            this.$c.attr({
                width: this.w,
                height: this.h
            });

            // scaling
            if (this.scale !== 1) {
                this.$c[0].width = this.$c[0].width * this.scale;
                this.$c[0].height = this.$c[0].height * this.scale;
                this.$c.width(this.w);
                this.$c.height(this.h);
            }

            return this;
        };

        this._draw = function () {

            // canvas pre-rendering
            var d = true;

            s.g = s.c;

            s.clear();

            s.dH && (d = s.dH());

            d !== false && s.draw();
        };

        this._touch = function (e) {
            var touchMove = function (e) {
                var v = s.xy2val(
                            e.originalEvent.touches[s.t].pageX,
                            e.originalEvent.touches[s.t].pageY
                        );

                if (v == s.cv) return;

                if (s.cH && s.cH(v) === false) return;

                s.change(s._validate(v));
                s._draw();
            };

            // get touches index
            this.t = k.c.t(e);

            // First touch
            touchMove(e);

            // Touch events listeners
            k.c.d
                .bind("touchmove.k", touchMove)
                .bind(
                    "touchend.k",
                    function () {
                        k.c.d.unbind('touchmove.k touchend.k');
                        s.val(s.cv);
                    }
                );

            return this;
        };

        this._mouse = function (e) {
            var mouseMove = function (e) {
                var v = s.xy2val(e.pageX, e.pageY);

                if (v == s.cv) return;

                if (s.cH && (s.cH(v) === false)) return;

                s.change(s._validate(v));
                s._draw();
            };

            // First click
            mouseMove(e);

            // Mouse events listeners
            k.c.d
                .bind("mousemove.k", mouseMove)
                .bind(
                    // Escape key cancel current change
                    "keyup.k",
                    function (e) {
                        if (e.keyCode === 27) {
                            k.c.d.unbind("mouseup.k mousemove.k keyup.k");

                            if (s.eH && s.eH() === false)
                                return;

                            s.cancel();
                        }
                    }
                )
                .bind(
                    "mouseup.k",
                    function (e) {
                        k.c.d.unbind('mousemove.k mouseup.k keyup.k');
                        s.val(s.cv);
                    }
                );

            return this;
        };

        this._xy = function () {
            var o = this.$c.offset();
            this.x = o.left;
            this.y = o.top;

            return this;
        };

        this._listen = function () {
            if (!this.o.readOnly) {
                this.$c
                    .bind(
                        "mousedown",
                        function (e) {
                            e.preventDefault();
                            s._xy()._mouse(e);
                        }
                    )
                    .bind(
                        "touchstart",
                        function (e) {
                            e.preventDefault();
                            s._xy()._touch(e);
                        }
                    );

                this.listen();
            } else {
                this.$.attr('readonly', 'readonly');
            }

            if (this.relative) {
                $(window).resize(function() {
                    s._carve().init();
                    s._draw();
                });
            }

            return this;
        };

        this._configure = function () {

            // Hooks
            if (this.o.draw) this.dH = this.o.draw;
            if (this.o.change) this.cH = this.o.change;
            if (this.o.cancel) this.eH = this.o.cancel;
            if (this.o.release) this.rH = this.o.release;

            if (this.o.displayPrevious) {
                this.pColor = this.h2rgba(this.o.fgColor, "0.4");
                this.fgColor = this.h2rgba(this.o.fgColor, "0.6");
            } else {
                this.fgColor = this.o.fgColor;
            }

            return this;
        };

        this._clear = function () {
            this.$c[0].width = this.$c[0].width;
        };

        this._validate = function (v) {
            var val = (~~ (((v < 0) ? -0.5 : 0.5) + (v/this.o.step))) * this.o.step;
            return Math.round(val * 100) / 100;
        };

        // Abstract methods
        this.listen = function () {}; // on start, one time
        this.extend = function () {}; // each time configure triggered
        this.init = function () {}; // each time configure triggered
        this.change = function (v) {}; // on change
        this.val = function (v) {}; // on release
        this.xy2val = function (x, y) {}; //
        this.draw = function () {}; // on change / on release
        this.clear = function () { this._clear(); };

        // Utils
        this.h2rgba = function (h, a) {
            var rgb;
            h = h.substring(1,7);
            rgb = [
                parseInt(h.substring(0,2), 16),
                parseInt(h.substring(2,4), 16),
                parseInt(h.substring(4,6), 16)
            ];

            return "rgba(" + rgb[0] + "," + rgb[1] + "," + rgb[2] + "," + a + ")";
        };

        this.copy = function (f, t) {
            for (var i in f) {
                t[i] = f[i];
            }
        };
    };


    /**
     * k.Dial
     */
    k.Dial = function () {
        k.o.call(this);

        this.startAngle = null;
        this.xy = null;
        this.radius = null;
        this.lineWidth = null;
        this.cursorExt = null;
        this.w2 = null;
        this.PI2 = 2*Math.PI;

        this.extend = function () {
            this.o = $.extend({
                bgColor: this.$.data('bgcolor') || '#EEEEEE',
                angleOffset: this.$.data('angleoffset') || 0,
                angleArc: this.$.data('anglearc') || 360,
                inline: true
            }, this.o);
        };

        this.val = function (v, triggerRelease) {
            if (null != v) {

                // reverse format
                v = this.o.parse(v);

                if (triggerRelease !== false
                    && v != this.v
                    && this.rH
                    && this.rH(v) === false) { return; }

                this.cv = this.o.stopper ? max(min(v, this.o.max), this.o.min) : v;
                this.v = this.cv;
                this.$.val(this.o.format(this.v));
                this._draw();
            } else {
                return this.v;
            }
        };

        this.xy2val = function (x, y) {
            var a, ret;

            a = Math.atan2(
                        x - (this.x + this.w2),
                        - (y - this.y - this.w2)
                    ) - this.angleOffset;

            if (this.o.flip) {
                a = this.angleArc - a - this.PI2;
            }

            if (this.angleArc != this.PI2 && (a < 0) && (a > -0.5)) {

                // if isset angleArc option, set to min if .5 under min
                a = 0;
            } else if (a < 0) {
                a += this.PI2;
            }

            ret = (a * (this.o.max - this.o.min) / this.angleArc) + this.o.min;

            this.o.stopper && (ret = max(min(ret, this.o.max), this.o.min));

            return ret;
        };

        this.listen = function () {

            // bind MouseWheel
            var s = this, mwTimerStop,
                mwTimerRelease,
                mw = function (e) {
                    e.preventDefault();

                    var ori = e.originalEvent,
                        deltaX = ori.detail || ori.wheelDeltaX,
                        deltaY = ori.detail || ori.wheelDeltaY,
                        v = s._validate(s.o.parse(s.$.val()))
                            + (
                                deltaX > 0 || deltaY > 0
                                ? s.o.step
                                : deltaX < 0 || deltaY < 0 ? -s.o.step : 0
                              );

                    v = max(min(v, s.o.max), s.o.min);

                    s.val(v, false);

                    if (s.rH) {
                        // Handle mousewheel stop
                        clearTimeout(mwTimerStop);
                        mwTimerStop = setTimeout(function () {
                            s.rH(v);
                            mwTimerStop = null;
                        }, 100);

                        // Handle mousewheel releases
                        if (!mwTimerRelease) {
                            mwTimerRelease = setTimeout(function () {
                                if (mwTimerStop)
                                    s.rH(v);
                                mwTimerRelease = null;
                            }, 200);
                        }
                    }
                },
                kval,
                to,
                m = 1,
                kv = {
                    37: -s.o.step,
                    38: s.o.step,
                    39: s.o.step,
                    40: -s.o.step
                };

            this.$
                .bind(
                    "keydown",
                    function (e) {
                        var kc = e.keyCode;

                        // numpad support
                        if (kc >= 96 && kc <= 105) {
                            kc = e.keyCode = kc - 48;
                        }

                        kval = parseInt(String.fromCharCode(kc));

                        if (isNaN(kval)) {
                            (kc !== 13)                     // enter
                            && kc !== 8                     // bs
                            && kc !== 9                     // tab
                            && kc !== 189                   // -
                            && (kc !== 190
                                || s.$.val().match(/\./))   // . allowed once
                            && e.preventDefault();

                            // arrows
                            if ($.inArray(kc,[37,38,39,40]) > -1) {
                                e.preventDefault();

                                var v = s.o.parse(s.$.val()) + kv[kc] * m;
                                s.o.stopper && (v = max(min(v, s.o.max), s.o.min));

                                s.change(s._validate(v));
                                s._draw();

                                // long time keydown speed-up
                                to = window.setTimeout(function () {
                                    m *= 2;
                                }, 30);
                            }
                        }
                    }
                )
                .bind(
                    "keyup",
                    function (e) {
                        if (isNaN(kval)) {
                            if (to) {
                                window.clearTimeout(to);
                                to = null;
                                m = 1;
                                s.val(s.$.val());
                            }
                        } else {
                            // kval postcond
                            (s.$.val() > s.o.max && s.$.val(s.o.max))
                            || (s.$.val() < s.o.min && s.$.val(s.o.min));
                        }
                    }
                );

            this.$c.bind("mousewheel DOMMouseScroll", mw);
            this.$.bind("mousewheel DOMMouseScroll", mw);
        };

        this.init = function () {
            if (this.v < this.o.min
                || this.v > this.o.max) { this.v = this.o.min; }

            this.$.val(this.v);
            this.w2 = this.w / 2;
            this.cursorExt = this.o.cursor / 100;
            this.xy = this.w2 * this.scale;
            this.lineWidth = this.xy * this.o.thickness;
            this.lineCap = this.o.lineCap;
            this.radius = this.xy - this.lineWidth / 2;

            this.o.angleOffset
            && (this.o.angleOffset = isNaN(this.o.angleOffset) ? 0 : this.o.angleOffset);

            this.o.angleArc
            && (this.o.angleArc = isNaN(this.o.angleArc) ? this.PI2 : this.o.angleArc);

            // deg to rad
            this.angleOffset = this.o.angleOffset * Math.PI / 180;
            this.angleArc = this.o.angleArc * Math.PI / 180;

            // compute start and end angles
            this.startAngle = 1.5 * Math.PI + this.angleOffset;
            this.endAngle = 1.5 * Math.PI + this.angleOffset + this.angleArc;

            var s = max(
                String(Math.abs(this.o.max)).length,
                String(Math.abs(this.o.min)).length,
                2
            ) + 2;

            this.o.displayInput
                && this.i.css({
                        'width' : ((this.w / 2 + 4) >> 0) + 'px',
                        'height' : ((this.w / 3) >> 0) + 'px',
                        'position' : 'absolute',
                        'vertical-align' : 'middle',
                        'margin-top' : ((this.w / 3) >> 0) + 'px',
                        'margin-left' : '-' + ((this.w * 3 / 4 + 2) >> 0) + 'px',
                        'border' : 0,
                        'background' : 'none',
                        'font' : this.o.fontWeight + ' ' + ((this.w / s) >> 0) + 'px ' + this.o.font,
                        'text-align' : 'center',
                        'color' : this.o.inputColor || this.o.fgColor,
                        'padding' : '0px',
                        '-webkit-appearance': 'none'
                        }) || this.i.css({
                            'width': '0px',
                            'visibility': 'hidden'
                        });
        };

        this.change = function (v) {
            this.cv = v;
            this.$.val(this.o.format(v));
        };

        this.angle = function (v) {
            return (v - this.o.min) * this.angleArc / (this.o.max - this.o.min);
        };

        this.arc = function (v) {
          var sa, ea;
          v = this.angle(v);
          if (this.o.flip) {
              sa = this.endAngle + 0.00001;
              ea = sa - v - 0.00001;
          } else {
              sa = this.startAngle - 0.00001;
              ea = sa + v + 0.00001;
          }
          this.o.cursor
              && (sa = ea - this.cursorExt)
              && (ea = ea + this.cursorExt);

          return {
              s: sa,
              e: ea,
              d: this.o.flip && !this.o.cursor
          };
        };

        this.draw = function () {
            var c = this.g,                 // context
                a = this.arc(this.cv),      // Arc
                pa,                         // Previous arc
                r = 1;

            c.lineWidth = this.lineWidth;
            c.lineCap = this.lineCap;

            if (this.o.bgColor !== "none") {
                c.beginPath();
                    c.strokeStyle = this.o.bgColor;
                    c.arc(this.xy, this.xy, this.radius, this.endAngle - 0.00001, this.startAngle + 0.00001, true);
                c.stroke();
            }

            if (this.o.displayPrevious) {
                pa = this.arc(this.v);
                c.beginPath();
                c.strokeStyle = this.pColor;
                c.arc(this.xy, this.xy, this.radius, pa.s, pa.e, pa.d);
                c.stroke();
                r = this.cv == this.v;
            }

            c.beginPath();
            c.strokeStyle = r ? this.o.fgColor : this.fgColor ;
            c.arc(this.xy, this.xy, this.radius, a.s, a.e, a.d);
            c.stroke();
        };

        this.cancel = function () {
            this.val(this.v);
        };
    };

    $.fn.dial = $.fn.knob = function (o) {
        return this.each(
            function () {
                var d = new k.Dial();
                d.o = o;
                d.$ = $(this);
                d.run();
            }
        ).parent();
    };

}));


(function($){

	function drawSin(xOffset,color1,color2){
        var config = this.data('waterBall').config;
		var canvas = document.createElement('canvas');
		var ctx = canvas.getContext('2d');
		canvas.width = config.cvs_config.width;
		canvas.height = config.cvs_config.height;

        /****剪切内圆画布***/
		ctx.save();
		var points = [];//用于存放绘制Sin曲线的点
        ctx.beginPath();
        ctx.arc(config.circle_config.r,config.circle_config.r,config.circle_config.cR - 5,0,2 * Math.PI);
        ctx.clip();
        ctx.closePath();

        /***画sin曲线***/
		ctx.beginPath();
		//在整个轴长上取点
		var w_sX = config.wave_config.sX,
			w_waveWidth = config.wave_config.waveWidth,
			w_waveHeight = config.wave_config.waveHeight,
			w_axisLength = config.wave_config.axisLength,
			c_width = config.cvs_config.width,
			c_height = config.cvs_config.height;

		for(var x = w_sX;x < w_sX + w_axisLength;x += 20 / w_axisLength) {
			//此处坐标(x,y)的取点，依靠公式 “振幅高*sin(x*振幅宽 + 振幅偏移量)”
			var y = -Math.sin((w_sX + x) * w_waveWidth + xOffset);

			var dY = c_height * (1 - config.nowRange / 100 );

			points.push([x, dY + y * w_waveHeight]);
			ctx.lineTo(x, dY + y * w_waveHeight);
		}
		ctx.lineTo(w_axisLength,c_height);
		ctx.lineTo(w_sX,c_height);
		ctx.lineTo(points[0][0],points[0][1]);

		var gradient = ctx.createLinearGradient(0,c_height,c_width,points[points.length - 1][1]);
		gradient.addColorStop(0,color1);
		gradient.addColorStop(1,color2);

		ctx.fillStyle = gradient;
		ctx.fill();
		ctx.restore();


        /**绘制百分比文本**/
		if (!config.isLoading) {
			ctx.save();
			var size = 0.4 * config.circle_config.cR;
			ctx.font = size + 'px Microsoft Yahei';
			ctx.textAlign = 'center';
			ctx.fillStyle = config.textColorRange[getIndex.call(this)];
			ctx.fillText(~~config.nowRange + '%', config.circle_config.r, config.circle_config.r + size / 2);
			ctx.restore();

		}
		return canvas;
	}

	function drawCircle(){
        var config = this.data('waterBall').config;
        var canvas = document.createElement('canvas');
		var ctx = canvas.getContext('2d');
		canvas.width = config.cvs_config.width;
		canvas.height = config.cvs_config.height;
		ctx.lineWidth = config.lineWidth;
		ctx.beginPath();
		ctx.strokeStyle = config.circle_line_color[getIndex.call(this)];
		ctx.arc(config.circle_config.r,config.circle_config.r,config.circle_config.cR,0,2 * Math.PI);
		ctx.stroke();

		return canvas;
	}

	function getIndex(){
        var config = this.data('waterBall').config;
		for (var i = 0,data = config.data_range;i < data.length;i++) {
			if (config.nowRange < data[i]) {
				return i;
			}
		}
		return data.length - 1;

	}

    var methods = {
        init: function (config) {

         return this.each(function(){
            //使用jQuery data方法对每个元素跟踪变量

            var $this = $(this),
                data = $this.data('waterBall'),
                _config = {
                    cvs_config:{
                        width:220,//canvas的长
                        height:220//canvas的高
                    },
                    wave_config:{
                        sX:0,//x轴偏移
                        sY:220 / 2,
                        waveWidth:0.015,//波宽
                        waveHeight:5,//波高
                        axisLength:220,//轴长
                        speed:0.09,//波速
                        xOffset:0
                    },
                    circle_config:{
                        r:220 / 2,//圆心
                        cR:220 / 2 - 5//半径
                    },
                    isLoading:false,//当isLoading为true时，不显示百分比文字
                    nowRange:0,
                    targetRange:0,
                    lineWidth:2,//圆圈线条宽度
                    data_range:[60,80,100],//数据临界值范围
                    textColorRange:['#fb3960','#fff','#fff'],//不同临界值文字的颜色范围
                    circle_line_color:['#FC6180','#FFB64D','#93BE52'],//不同临界值圆圈线条颜色
                    main_backcolor_range:[['#FC6180','#fc7a94'],['#FFB64D','#ffc067'],['#93BE52','#9fc565']],//渐变色
                    backcolor_range:[['#fb3960','#fc486c'],['#ffa524','#ffac34'],['#7ea83f','#87b343']]
                };
            if (!data) {
                var wave_config = {},circle_config = {};
                if (config.cvs_config) {
                    wave_config = {
                        sY:config.cvs_config.width / 2,
                        axisLength:config.cvs_config.width
                    };
                    circle_config = {
                        r:config.cvs_config.width / 2,
                        cR:config.cvs_config.width / 2 - 5
                    };
                }

                $.extend(true, _config,{
                    wave_config:wave_config,
                    circle_config:circle_config
                },config);
                var canvas = document.createElement('canvas');
                canvas.width = _config.cvs_config.width;
                canvas.height = _config.cvs_config.height;
                $this.html("").html($(canvas));
                $this.data('waterBall',{
                    canvas:canvas,
                    target:$this,
                    config:_config
                });
                methods.render.apply($this);
            }
         });

        },
        destroy: function () {
        },
        updateRange:function (newVal) {
            return this.each(function(){
                var $this = $(this),
                    data = $this.data('waterBall');
                if (!data) return;
                var config = $this.data('waterBall').config;
                config.targetRange = 0;
                config.nowRange = 0;
                config.isLoading = false;
                setTimeout(function () {
                    config.targetRange = newVal;
                },0);
            });
        },
        render: function () {
            var config = this.data('waterBall').config;
            var _canvas = this.data('waterBall').canvas;
            var w_sX = config.wave_config.sX,
                xOffset = config.wave_config.xOffset,
                bg_color1 = config.backcolor_range[getIndex.call(this)][0],
                bg_color2 = config.backcolor_range[getIndex.call(this)][1],
                main_bg_color1 = config.main_backcolor_range[getIndex.call(this)][0],
                main_bg_color2 = config.main_backcolor_range[getIndex.call(this)][1],
                ctx = _canvas.getContext('2d');

            var cvs1 = drawCircle.call(this);

            if (config.nowRange <= config.targetRange) {
                var tmp = 1;
                config.nowRange += tmp;
            }

            if (config.nowRange > config.targetRange) {
                var tmp = 1;
                config.nowRange -= tmp;
            }
            var cvs2 = drawSin.call(this,xOffset + 40, bg_color1, bg_color2);
            var cvs3 = drawSin.call(this,-40 + xOffset, main_bg_color1, main_bg_color2);
            ctx.clearRect(0,0,config.cvs_config.width,config.cvs_config.height);
            ctx.drawImage(cvs1, 0, 0);
            ctx.drawImage(cvs2, 0, 0);
            ctx.drawImage(cvs3, 0, 0);
            delete cvs1;
            delete cvs2;
            delete cvs3;

            config.wave_config.xOffset += config.wave_config.speed;
            requestAnimationFrame(methods.render.bind(this));
        }
    };
	$.fn.createWaterBall = function(method) {

		if (methods[method]) {
			return methods[method].apply(this,Array.prototype.slice.call(arguments,1));
		} else if(typeof method === 'object' || !method) {
			return methods.init.apply(this,arguments);
		} else {
			$.error('Method ' + method + 'does not exits on jQuery.createWaterBall');
		}
	};
})(jQuery);

(function(document,Math,undefined){(function(factory){if(typeof define==="function"&&define.amd){define(["jquery"],factory)}else if(jQuery&&!jQuery.fn.sparkline){factory(jQuery)}})(function($){"use strict";var UNSET_OPTION={},getDefaults,createClass,SPFormat,clipval,quartile,normalizeValue,normalizeValues,remove,isNumber,all,sum,addCSS,ensureArray,formatNumber,RangeMap,MouseHandler,Tooltip,barHighlightMixin,line,bar,tristate,discrete,bullet,pie,box,defaultStyles,initStyles,VShape,VCanvas_base,VCanvas_canvas,VCanvas_vml,pending,shapeCount=0;getDefaults=function(){return{common:{type:"line",lineColor:"#00f",fillColor:"#cdf",defaultPixelsPerValue:3,width:"auto",height:"auto",composite:false,tagValuesAttribute:"values",tagOptionsPrefix:"spark",enableTagOptions:false,enableHighlight:true,highlightLighten:1.4,tooltipSkipNull:true,tooltipPrefix:"",tooltipSuffix:"",disableHiddenCheck:false,numberFormatter:false,numberDigitGroupCount:3,numberDigitGroupSep:",",numberDecimalMark:".",disableTooltips:false,disableInteraction:false},line:{spotColor:"#f80",highlightSpotColor:"#5f5",highlightLineColor:"#f22",spotRadius:1.5,minSpotColor:"#f80",maxSpotColor:"#f80",lineWidth:1,normalRangeMin:undefined,normalRangeMax:undefined,normalRangeColor:"#ccc",drawNormalOnTop:false,chartRangeMin:undefined,chartRangeMax:undefined,chartRangeMinX:undefined,chartRangeMaxX:undefined,tooltipFormat:new SPFormat('<span style="color: {{color}}">&#9679;</span> {{prefix}}{{y}}{{suffix}}')},bar:{barColor:"#3366cc",negBarColor:"#f44",stackedBarColor:["#3366cc","#dc3912","#ff9900","#109618","#66aa00","#dd4477","#0099c6","#990099"],zeroColor:undefined,nullColor:undefined,zeroAxis:true,barWidth:4,barSpacing:1,chartRangeMax:undefined,chartRangeMin:undefined,chartRangeClip:false,colorMap:undefined,tooltipFormat:new SPFormat('<span style="color: {{color}}">&#9679;</span> {{prefix}}{{value}}{{suffix}}')},tristate:{barWidth:4,barSpacing:1,posBarColor:"#6f6",negBarColor:"#f44",zeroBarColor:"#999",colorMap:{},tooltipFormat:new SPFormat('<span style="color: {{color}}">&#9679;</span> {{value:map}}'),tooltipValueLookups:{map:{"-1":"Loss",0:"Draw",1:"Win"}}},discrete:{lineHeight:"auto",thresholdColor:undefined,thresholdValue:0,chartRangeMax:undefined,chartRangeMin:undefined,chartRangeClip:false,tooltipFormat:new SPFormat("{{prefix}}{{value}}{{suffix}}")},bullet:{targetColor:"#f33",targetWidth:3,performanceColor:"#33f",rangeColors:["#d3dafe","#a8b6ff","#7f94ff"],base:undefined,tooltipFormat:new SPFormat("{{fieldkey:fields}} - {{value}}"),tooltipValueLookups:{fields:{r:"Range",p:"Performance",t:"Target"}}},pie:{offset:0,sliceColors:["#3366cc","#dc3912","#ff9900","#109618","#66aa00","#dd4477","#0099c6","#990099"],borderWidth:0,borderColor:"#000",tooltipFormat:new SPFormat('<span style="color: {{color}}">&#9679;</span> {{value}} ({{percent.1}}%)')},box:{raw:false,boxLineColor:"#000",boxFillColor:"#cdf",whiskerColor:"#000",outlierLineColor:"#333",outlierFillColor:"#fff",medianColor:"#f00",showOutliers:true,outlierIQR:1.5,spotRadius:1.5,target:undefined,targetColor:"#4a2",chartRangeMax:undefined,chartRangeMin:undefined,tooltipFormat:new SPFormat("{{field:fields}}: {{value}}"),tooltipFormatFieldlistKey:"field",tooltipValueLookups:{fields:{lq:"Lower Quartile",med:"Median",uq:"Upper Quartile",lo:"Left Outlier",ro:"Right Outlier",lw:"Left Whisker",rw:"Right Whisker"}}}}};defaultStyles=".jqstooltip { "+"position: absolute;"+"left: 0px;"+"top: 0px;"+"visibility: hidden;"+"background: rgb(0, 0, 0) transparent;"+"background-color: rgba(0,0,0,0.6);"+"filter:progid:DXImageTransform.Microsoft.gradient(startColorstr=#99000000, endColorstr=#99000000);"+'-ms-filter: "progid:DXImageTransform.Microsoft.gradient(startColorstr=#99000000, endColorstr=#99000000)";'+"color: white;"+"font: 10px arial, san serif;"+"text-align: left;"+"white-space: nowrap;"+"padding: 5px;"+"border: 1px solid white;"+"box-sizing: content-box;"+"z-index: 10000;"+"}"+".jqsfield { "+"color: white;"+"font: 10px arial, san serif;"+"text-align: left;"+"}";createClass=function(){var Class,args;Class=function(){this.init.apply(this,arguments)};if(arguments.length>1){if(arguments[0]){Class.prototype=$.extend(new arguments[0],arguments[arguments.length-1]);Class._super=arguments[0].prototype}else{Class.prototype=arguments[arguments.length-1]}if(arguments.length>2){args=Array.prototype.slice.call(arguments,1,-1);args.unshift(Class.prototype);$.extend.apply($,args)}}else{Class.prototype=arguments[0]}Class.prototype.cls=Class;return Class};$.SPFormatClass=SPFormat=createClass({fre:/\{\{([\w.]+?)(:(.+?))?\}\}/g,precre:/(\w+)\.(\d+)/,init:function(format,fclass){this.format=format;this.fclass=fclass},render:function(fieldset,lookups,options){var self=this,fields=fieldset,match,token,lookupkey,fieldvalue,prec;return this.format.replace(this.fre,function(){var lookup;token=arguments[1];lookupkey=arguments[3];match=self.precre.exec(token);if(match){prec=match[2];token=match[1]}else{prec=false}fieldvalue=fields[token];if(fieldvalue===undefined){return""}if(lookupkey&&lookups&&lookups[lookupkey]){lookup=lookups[lookupkey];if(lookup.get){return lookups[lookupkey].get(fieldvalue)||fieldvalue}else{return lookups[lookupkey][fieldvalue]||fieldvalue}}if(isNumber(fieldvalue)){if(options.get("numberFormatter")){fieldvalue=options.get("numberFormatter")(fieldvalue)}else{fieldvalue=formatNumber(fieldvalue,prec,options.get("numberDigitGroupCount"),options.get("numberDigitGroupSep"),options.get("numberDecimalMark"))}}return fieldvalue})}});$.spformat=function(format,fclass){return new SPFormat(format,fclass)};clipval=function(val,min,max){if(val<min){return min}if(val>max){return max}return val};quartile=function(values,q){var vl;if(q===2){vl=Math.floor(values.length/2);return values.length%2?values[vl]:(values[vl-1]+values[vl])/2}else{if(values.length%2){vl=(values.length*q+q)/4;return vl%1?(values[Math.floor(vl)]+values[Math.floor(vl)-1])/2:values[vl-1]}else{vl=(values.length*q+2)/4;return vl%1?(values[Math.floor(vl)]+values[Math.floor(vl)-1])/2:values[vl-1]}}};normalizeValue=function(val){var nf;switch(val){case"undefined":val=undefined;break;case"null":val=null;break;case"true":val=true;break;case"false":val=false;break;default:nf=parseFloat(val);if(val==nf){val=nf}}return val};normalizeValues=function(vals){var i,result=[];for(i=vals.length;i--;){result[i]=normalizeValue(vals[i])}return result};remove=function(vals,filter){var i,vl,result=[];for(i=0,vl=vals.length;i<vl;i++){if(vals[i]!==filter){result.push(vals[i])}}return result};isNumber=function(num){return!isNaN(parseFloat(num))&&isFinite(num)};formatNumber=function(num,prec,groupsize,groupsep,decsep){var p,i;num=(prec===false?parseFloat(num).toString():num.toFixed(prec)).split("");p=(p=$.inArray(".",num))<0?num.length:p;if(p<num.length){num[p]=decsep}for(i=p-groupsize;i>0;i-=groupsize){num.splice(i,0,groupsep)}return num.join("")};all=function(val,arr,ignoreNull){var i;for(i=arr.length;i--;){if(ignoreNull&&arr[i]===null)continue;if(arr[i]!==val){return false}}return true};sum=function(vals){var total=0,i;for(i=vals.length;i--;){total+=typeof vals[i]==="number"?vals[i]:0}return total};ensureArray=function(val){return $.isArray(val)?val:[val]};addCSS=function(css){var tag,iefail;if(document.createStyleSheet){try{document.createStyleSheet().cssText=css;return}catch(e){iefail=true}}tag=document.createElement("style");tag.type="text/css";document.getElementsByTagName("head")[0].appendChild(tag);if(iefail){document.styleSheets[document.styleSheets.length-1].cssText=css}else{tag[typeof document.body.style.WebkitAppearance=="string"?"innerText":"innerHTML"]=css}};$.fn.simpledraw=function(width,height,useExisting,interact){var target,mhandler;if(useExisting&&(target=this.data("_jqs_vcanvas"))){return target}if($.fn.sparkline.canvas===false){return false}else if($.fn.sparkline.canvas===undefined){var el=document.createElement("canvas");if(!!(el.getContext&&el.getContext("2d"))){$.fn.sparkline.canvas=function(width,height,target,interact){return new VCanvas_canvas(width,height,target,interact)}}else if(document.namespaces&&!document.namespaces.v){document.namespaces.add("v","urn:schemas-microsoft-com:vml","#default#VML");$.fn.sparkline.canvas=function(width,height,target,interact){return new VCanvas_vml(width,height,target)}}else{$.fn.sparkline.canvas=false;return false}}if(width===undefined){width=$(this).innerWidth()}if(height===undefined){height=$(this).innerHeight()}target=$.fn.sparkline.canvas(width,height,this,interact);mhandler=$(this).data("_jqs_mhandler");if(mhandler){mhandler.registerCanvas(target)}return target};$.fn.cleardraw=function(){var target=this.data("_jqs_vcanvas");if(target){target.reset()}};$.RangeMapClass=RangeMap=createClass({init:function(map){var key,range,rangelist=[];for(key in map){if(map.hasOwnProperty(key)&&typeof key==="string"&&key.indexOf(":")>-1){range=key.split(":");range[0]=range[0].length===0?-Infinity:parseFloat(range[0]);range[1]=range[1].length===0?Infinity:parseFloat(range[1]);range[2]=map[key];rangelist.push(range)}}this.map=map;this.rangelist=rangelist||false},get:function(value){var rangelist=this.rangelist,i,range,result;if((result=this.map[value])!==undefined){return result}if(rangelist){for(i=rangelist.length;i--;){range=rangelist[i];if(range[0]<=value&&range[1]>=value){return range[2]}}}return undefined}});$.range_map=function(map){return new RangeMap(map)};MouseHandler=createClass({init:function(el,options){var $el=$(el);this.$el=$el;this.options=options;this.currentPageX=0;this.currentPageY=0;this.el=el;this.splist=[];this.tooltip=null;this.over=false;this.displayTooltips=!options.get("disableTooltips");this.highlightEnabled=!options.get("disableHighlight")},registerSparkline:function(sp){this.splist.push(sp);if(this.over){this.updateDisplay()}},registerCanvas:function(canvas){var $canvas=$(canvas.canvas);this.canvas=canvas;this.$canvas=$canvas;$canvas.mouseenter($.proxy(this.mouseenter,this));$canvas.mouseleave($.proxy(this.mouseleave,this));$canvas.click($.proxy(this.mouseclick,this))},reset:function(removeTooltip){this.splist=[];if(this.tooltip&&removeTooltip){this.tooltip.remove();this.tooltip=undefined}},mouseclick:function(e){var clickEvent=$.Event("sparklineClick");clickEvent.originalEvent=e;clickEvent.sparklines=this.splist;this.$el.trigger(clickEvent)},mouseenter:function(e){$(document.body).unbind("mousemove.jqs");$(document.body).bind("mousemove.jqs",$.proxy(this.mousemove,this));this.over=true;this.currentPageX=e.pageX;this.currentPageY=e.pageY;this.currentEl=e.target;if(!this.tooltip&&this.displayTooltips){this.tooltip=new Tooltip(this.options);this.tooltip.updatePosition(e.pageX,e.pageY)}this.updateDisplay()},mouseleave:function(){$(document.body).unbind("mousemove.jqs");var splist=this.splist,spcount=splist.length,needsRefresh=false,sp,i;this.over=false;this.currentEl=null;if(this.tooltip){this.tooltip.remove();this.tooltip=null}for(i=0;i<spcount;i++){sp=splist[i];if(sp.clearRegionHighlight()){needsRefresh=true}}if(needsRefresh){this.canvas.render()}},mousemove:function(e){this.currentPageX=e.pageX;this.currentPageY=e.pageY;this.currentEl=e.target;if(this.tooltip){this.tooltip.updatePosition(e.pageX,e.pageY)}this.updateDisplay()},updateDisplay:function(){var splist=this.splist,spcount=splist.length,needsRefresh=false,offset=this.$canvas.offset(),localX=this.currentPageX-offset.left,localY=this.currentPageY-offset.top,tooltiphtml,sp,i,result,changeEvent;if(!this.over){return}for(i=0;i<spcount;i++){sp=splist[i];result=sp.setRegionHighlight(this.currentEl,localX,localY);if(result){needsRefresh=true}}if(needsRefresh){changeEvent=$.Event("sparklineRegionChange");changeEvent.sparklines=this.splist;this.$el.trigger(changeEvent);if(this.tooltip){tooltiphtml="";for(i=0;i<spcount;i++){sp=splist[i];tooltiphtml+=sp.getCurrentRegionTooltip()}this.tooltip.setContent(tooltiphtml)}if(!this.disableHighlight){this.canvas.render()}}if(result===null){this.mouseleave()}}});Tooltip=createClass({sizeStyle:"position: static !important;"+"display: block !important;"+"visibility: hidden !important;"+"float: left !important;",init:function(options){var tooltipClassname=options.get("tooltipClassname","jqstooltip"),sizetipStyle=this.sizeStyle,offset;this.container=options.get("tooltipContainer")||document.body;this.tooltipOffsetX=options.get("tooltipOffsetX",10);this.tooltipOffsetY=options.get("tooltipOffsetY",12);$("#jqssizetip").remove();$("#jqstooltip").remove();this.sizetip=$("<div/>",{id:"jqssizetip",style:sizetipStyle,"class":tooltipClassname});this.tooltip=$("<div/>",{id:"jqstooltip","class":tooltipClassname}).appendTo(this.container);offset=this.tooltip.offset();this.offsetLeft=offset.left;this.offsetTop=offset.top;this.hidden=true;$(window).unbind("resize.jqs scroll.jqs");$(window).bind("resize.jqs scroll.jqs",$.proxy(this.updateWindowDims,this));this.updateWindowDims()},updateWindowDims:function(){this.scrollTop=$(window).scrollTop();this.scrollLeft=$(window).scrollLeft();this.scrollRight=this.scrollLeft+$(window).width();this.updatePosition()},getSize:function(content){this.sizetip.html(content).appendTo(this.container);this.width=this.sizetip.width()+1;this.height=this.sizetip.height();this.sizetip.remove()},setContent:function(content){if(!content){this.tooltip.css("visibility","hidden");this.hidden=true;return}this.getSize(content);this.tooltip.html(content).css({width:this.width,height:this.height,visibility:"visible"});if(this.hidden){this.hidden=false;this.updatePosition()}},updatePosition:function(x,y){if(x===undefined){if(this.mousex===undefined){return}x=this.mousex-this.offsetLeft;y=this.mousey-this.offsetTop}else{this.mousex=x=x-this.offsetLeft;this.mousey=y=y-this.offsetTop}if(!this.height||!this.width||this.hidden){return}y-=this.height+this.tooltipOffsetY;x+=this.tooltipOffsetX;if(y<this.scrollTop){y=this.scrollTop}if(x<this.scrollLeft){x=this.scrollLeft}else if(x+this.width>this.scrollRight){x=this.scrollRight-this.width}this.tooltip.css({left:x,top:y})},remove:function(){this.tooltip.remove();this.sizetip.remove();this.sizetip=this.tooltip=undefined;$(window).unbind("resize.jqs scroll.jqs")}});initStyles=function(){addCSS(defaultStyles)};$(initStyles);pending=[];$.fn.sparkline=function(userValues,userOptions){return this.each(function(){var options=new $.fn.sparkline.options(this,userOptions),$this=$(this),render,i;render=function(){var values,width,height,tmp,mhandler,sp,vals;if(userValues==="html"||userValues===undefined){vals=this.getAttribute(options.get("tagValuesAttribute"));if(vals===undefined||vals===null){vals=$this.html()}values=vals.replace(/(^\s*<!--)|(-->\s*$)|\s+/g,"").split(",")}else{values=userValues}width=options.get("width")==="auto"?values.length*options.get("defaultPixelsPerValue"):options.get("width");if(options.get("height")==="auto"){if(!options.get("composite")||!$.data(this,"_jqs_vcanvas")){tmp=document.createElement("span");tmp.innerHTML="a";$this.html(tmp);height=$(tmp).innerHeight()||$(tmp).height();$(tmp).remove();tmp=null}}else{height=options.get("height")}if(!options.get("disableInteraction")){mhandler=$.data(this,"_jqs_mhandler");if(!mhandler){mhandler=new MouseHandler(this,options);$.data(this,"_jqs_mhandler",mhandler)}else if(!options.get("composite")){mhandler.reset()}}else{mhandler=false}if(options.get("composite")&&!$.data(this,"_jqs_vcanvas")){if(!$.data(this,"_jqs_errnotify")){alert("Attempted to attach a composite sparkline to an element with no existing sparkline");$.data(this,"_jqs_errnotify",true)}return}sp=new($.fn.sparkline[options.get("type")])(this,values,options,width,height);sp.render();if(mhandler){mhandler.registerSparkline(sp)}};if($(this).html()&&!options.get("disableHiddenCheck")&&$(this).is(":hidden")||!$(this).parents("body").length){if(!options.get("composite")&&$.data(this,"_jqs_pending")){for(i=pending.length;i;i--){if(pending[i-1][0]==this){pending.splice(i-1,1)}}}pending.push([this,render]);$.data(this,"_jqs_pending",true)}else{render.call(this)}})};$.fn.sparkline.defaults=getDefaults();$.sparkline_display_visible=function(){var el,i,pl;var done=[];for(i=0,pl=pending.length;i<pl;i++){el=pending[i][0];if($(el).is(":visible")&&!$(el).parents().is(":hidden")){pending[i][1].call(el);$.data(pending[i][0],"_jqs_pending",false);done.push(i)}else if(!$(el).closest("html").length&&!$.data(el,"_jqs_pending")){$.data(pending[i][0],"_jqs_pending",false);done.push(i)}}for(i=done.length;i;i--){pending.splice(done[i-1],1)}};$.fn.sparkline.options=createClass({init:function(tag,userOptions){var extendedOptions,defaults,base,tagOptionType;this.userOptions=userOptions=userOptions||{};this.tag=tag;this.tagValCache={};defaults=$.fn.sparkline.defaults;base=defaults.common;this.tagOptionsPrefix=userOptions.enableTagOptions&&(userOptions.tagOptionsPrefix||base.tagOptionsPrefix);tagOptionType=this.getTagSetting("type");if(tagOptionType===UNSET_OPTION){extendedOptions=defaults[userOptions.type||base.type]}else{extendedOptions=defaults[tagOptionType]}this.mergedOptions=$.extend({},base,extendedOptions,userOptions)},getTagSetting:function(key){var prefix=this.tagOptionsPrefix,val,i,pairs,keyval;if(prefix===false||prefix===undefined){return UNSET_OPTION}if(this.tagValCache.hasOwnProperty(key)){val=this.tagValCache.key}else{val=this.tag.getAttribute(prefix+key);if(val===undefined||val===null){val=UNSET_OPTION}else if(val.substr(0,1)==="["){val=val.substr(1,val.length-2).split(",");for(i=val.length;i--;){val[i]=normalizeValue(val[i].replace(/(^\s*)|(\s*$)/g,""))}}else if(val.substr(0,1)==="{"){pairs=val.substr(1,val.length-2).split(",");val={};for(i=pairs.length;i--;){keyval=pairs[i].split(":",2);val[keyval[0].replace(/(^\s*)|(\s*$)/g,"")]=normalizeValue(keyval[1].replace(/(^\s*)|(\s*$)/g,""))}}else{val=normalizeValue(val)}this.tagValCache.key=val}return val},get:function(key,defaultval){var tagOption=this.getTagSetting(key),result;if(tagOption!==UNSET_OPTION){return tagOption}return(result=this.mergedOptions[key])===undefined?defaultval:result}});$.fn.sparkline._base=createClass({disabled:false,init:function(el,values,options,width,height){this.el=el;this.$el=$(el);this.values=values;this.options=options;this.width=width;this.height=height;this.currentRegion=undefined},initTarget:function(){var interactive=!this.options.get("disableInteraction");if(!(this.target=this.$el.simpledraw(this.width,this.height,this.options.get("composite"),interactive))){this.disabled=true}else{this.canvasWidth=this.target.pixelWidth;this.canvasHeight=this.target.pixelHeight}},render:function(){if(this.disabled){this.el.innerHTML="";return false}return true},getRegion:function(x,y){},setRegionHighlight:function(el,x,y){var currentRegion=this.currentRegion,highlightEnabled=!this.options.get("disableHighlight"),newRegion;if(x>this.canvasWidth||y>this.canvasHeight||x<0||y<0){return null}newRegion=this.getRegion(el,x,y);if(currentRegion!==newRegion){if(currentRegion!==undefined&&highlightEnabled){this.removeHighlight()}this.currentRegion=newRegion;if(newRegion!==undefined&&highlightEnabled){this.renderHighlight()}return true}return false},clearRegionHighlight:function(){if(this.currentRegion!==undefined){this.removeHighlight();this.currentRegion=undefined;return true}return false},renderHighlight:function(){this.changeHighlight(true)},removeHighlight:function(){this.changeHighlight(false)},changeHighlight:function(highlight){},getCurrentRegionTooltip:function(){var options=this.options,header="",entries=[],fields,formats,formatlen,fclass,text,i,showFields,showFieldsKey,newFields,fv,formatter,format,fieldlen,j;if(this.currentRegion===undefined){return""}fields=this.getCurrentRegionFields();formatter=options.get("tooltipFormatter");if(formatter){return formatter(this,options,fields)}if(options.get("tooltipChartTitle")){header+='<div class="jqs jqstitle">'+options.get("tooltipChartTitle")+"</div>\n"}formats=this.options.get("tooltipFormat");if(!formats){return""}if(!$.isArray(formats)){formats=[formats]}if(!$.isArray(fields)){fields=[fields]}showFields=this.options.get("tooltipFormatFieldlist");showFieldsKey=this.options.get("tooltipFormatFieldlistKey");if(showFields&&showFieldsKey){newFields=[];for(i=fields.length;i--;){fv=fields[i][showFieldsKey];if((j=$.inArray(fv,showFields))!=-1){newFields[j]=fields[i]}}fields=newFields}formatlen=formats.length;fieldlen=fields.length;for(i=0;i<formatlen;i++){format=formats[i];if(typeof format==="string"){format=new SPFormat(format)}fclass=format.fclass||"jqsfield";for(j=0;j<fieldlen;j++){if(!fields[j].isNull||!options.get("tooltipSkipNull")){$.extend(fields[j],{prefix:options.get("tooltipPrefix"),suffix:options.get("tooltipSuffix")});text=format.render(fields[j],options.get("tooltipValueLookups"),options);entries.push('<div class="'+fclass+'">'+text+"</div>")}}}if(entries.length){return header+entries.join("\n")}return""},getCurrentRegionFields:function(){},calcHighlightColor:function(color,options){var highlightColor=options.get("highlightColor"),lighten=options.get("highlightLighten"),parse,mult,rgbnew,i;if(highlightColor){return highlightColor}if(lighten){parse=/^#([0-9a-f])([0-9a-f])([0-9a-f])$/i.exec(color)||/^#([0-9a-f]{2})([0-9a-f]{2})([0-9a-f]{2})$/i.exec(color);if(parse){rgbnew=[];mult=color.length===4?16:1;for(i=0;i<3;i++){rgbnew[i]=clipval(Math.round(parseInt(parse[i+1],16)*mult*lighten),0,255)}return"rgb("+rgbnew.join(",")+")"}}return color}});barHighlightMixin={changeHighlight:function(highlight){var currentRegion=this.currentRegion,target=this.target,shapeids=this.regionShapes[currentRegion],newShapes;if(shapeids){newShapes=this.renderRegion(currentRegion,highlight);if($.isArray(newShapes)||$.isArray(shapeids)){target.replaceWithShapes(shapeids,newShapes);this.regionShapes[currentRegion]=$.map(newShapes,function(newShape){return newShape.id})}else{target.replaceWithShape(shapeids,newShapes);this.regionShapes[currentRegion]=newShapes.id}}},render:function(){var values=this.values,target=this.target,regionShapes=this.regionShapes,shapes,ids,i,j;if(!this.cls._super.render.call(this)){return}for(i=values.length;i--;){shapes=this.renderRegion(i);if(shapes){if($.isArray(shapes)){ids=[];for(j=shapes.length;j--;){shapes[j].append();ids.push(shapes[j].id)}regionShapes[i]=ids}else{shapes.append();regionShapes[i]=shapes.id}}else{regionShapes[i]=null}}target.render()}};$.fn.sparkline.line=line=createClass($.fn.sparkline._base,{type:"line",init:function(el,values,options,width,height){line._super.init.call(this,el,values,options,width,height);this.vertices=[];this.regionMap=[];this.xvalues=[];this.yvalues=[];this.yminmax=[];this.hightlightSpotId=null;this.lastShapeId=null;this.initTarget()},getRegion:function(el,x,y){var i,regionMap=this.regionMap;for(i=regionMap.length;i--;){if(regionMap[i]!==null&&x>=regionMap[i][0]&&x<=regionMap[i][1]){return regionMap[i][2]}}return undefined},getCurrentRegionFields:function(){var currentRegion=this.currentRegion;return{isNull:this.yvalues[currentRegion]===null,x:this.xvalues[currentRegion],y:this.yvalues[currentRegion],color:this.options.get("lineColor"),fillColor:this.options.get("fillColor"),offset:currentRegion}},renderHighlight:function(){var currentRegion=this.currentRegion,target=this.target,vertex=this.vertices[currentRegion],options=this.options,spotRadius=options.get("spotRadius"),highlightSpotColor=options.get("highlightSpotColor"),highlightLineColor=options.get("highlightLineColor"),highlightSpot,highlightLine;if(!vertex){return}if(spotRadius&&highlightSpotColor){highlightSpot=target.drawCircle(vertex[0],vertex[1],spotRadius,undefined,highlightSpotColor);this.highlightSpotId=highlightSpot.id;target.insertAfterShape(this.lastShapeId,highlightSpot)}if(highlightLineColor){highlightLine=target.drawLine(vertex[0],this.canvasTop,vertex[0],this.canvasTop+this.canvasHeight,highlightLineColor);this.highlightLineId=highlightLine.id;target.insertAfterShape(this.lastShapeId,highlightLine)}},removeHighlight:function(){var target=this.target;if(this.highlightSpotId){target.removeShapeId(this.highlightSpotId);this.highlightSpotId=null}if(this.highlightLineId){target.removeShapeId(this.highlightLineId);this.highlightLineId=null}},scanValues:function(){var values=this.values,valcount=values.length,xvalues=this.xvalues,yvalues=this.yvalues,yminmax=this.yminmax,i,val,isStr,isArray,sp;for(i=0;i<valcount;i++){val=values[i];isStr=typeof values[i]==="string";isArray=typeof values[i]==="object"&&values[i]instanceof Array;sp=isStr&&values[i].split(":");if(isStr&&sp.length===2){xvalues.push(Number(sp[0]));yvalues.push(Number(sp[1]));yminmax.push(Number(sp[1]))}else if(isArray){xvalues.push(val[0]);yvalues.push(val[1]);yminmax.push(val[1])}else{xvalues.push(i);if(values[i]===null||values[i]==="null"){yvalues.push(null)}else{yvalues.push(Number(val));yminmax.push(Number(val))}}}if(this.options.get("xvalues")){xvalues=this.options.get("xvalues")}this.maxy=this.maxyorg=Math.max.apply(Math,yminmax);this.miny=this.minyorg=Math.min.apply(Math,yminmax);this.maxx=Math.max.apply(Math,xvalues);this.minx=Math.min.apply(Math,xvalues);this.xvalues=xvalues;this.yvalues=yvalues;this.yminmax=yminmax},processRangeOptions:function(){var options=this.options,normalRangeMin=options.get("normalRangeMin"),normalRangeMax=options.get("normalRangeMax");if(normalRangeMin!==undefined){if(normalRangeMin<this.miny){this.miny=normalRangeMin}if(normalRangeMax>this.maxy){this.maxy=normalRangeMax}}if(options.get("chartRangeMin")!==undefined&&(options.get("chartRangeClip")||options.get("chartRangeMin")<this.miny)){this.miny=options.get("chartRangeMin")}if(options.get("chartRangeMax")!==undefined&&(options.get("chartRangeClip")||options.get("chartRangeMax")>this.maxy)){this.maxy=options.get("chartRangeMax")}if(options.get("chartRangeMinX")!==undefined&&(options.get("chartRangeClipX")||options.get("chartRangeMinX")<this.minx)){this.minx=options.get("chartRangeMinX")}if(options.get("chartRangeMaxX")!==undefined&&(options.get("chartRangeClipX")||options.get("chartRangeMaxX")>this.maxx)){this.maxx=options.get("chartRangeMaxX")}},drawNormalRange:function(canvasLeft,canvasTop,canvasHeight,canvasWidth,rangey){var normalRangeMin=this.options.get("normalRangeMin"),normalRangeMax=this.options.get("normalRangeMax"),ytop=canvasTop+Math.round(canvasHeight-canvasHeight*((normalRangeMax-this.miny)/rangey)),height=Math.round(canvasHeight*(normalRangeMax-normalRangeMin)/rangey);this.target.drawRect(canvasLeft,ytop,canvasWidth,height,undefined,this.options.get("normalRangeColor")).append()},render:function(){var options=this.options,target=this.target,canvasWidth=this.canvasWidth,canvasHeight=this.canvasHeight,vertices=this.vertices,spotRadius=options.get("spotRadius"),regionMap=this.regionMap,rangex,rangey,yvallast,canvasTop,canvasLeft,vertex,path,paths,x,y,xnext,xpos,xposnext,last,next,yvalcount,lineShapes,fillShapes,plen,valueSpots,hlSpotsEnabled,color,xvalues,yvalues,i;if(!line._super.render.call(this)){return}this.scanValues();this.processRangeOptions();xvalues=this.xvalues;yvalues=this.yvalues;if(!this.yminmax.length||this.yvalues.length<2){return}canvasTop=canvasLeft=0;rangex=this.maxx-this.minx===0?1:this.maxx-this.minx;rangey=this.maxy-this.miny===0?1:this.maxy-this.miny;yvallast=this.yvalues.length-1;if(spotRadius&&(canvasWidth<spotRadius*4||canvasHeight<spotRadius*4)){spotRadius=0}if(spotRadius){hlSpotsEnabled=options.get("highlightSpotColor")&&!options.get("disableInteraction");if(hlSpotsEnabled||options.get("minSpotColor")||options.get("spotColor")&&yvalues[yvallast]===this.miny){canvasHeight-=Math.ceil(spotRadius)}if(hlSpotsEnabled||options.get("maxSpotColor")||options.get("spotColor")&&yvalues[yvallast]===this.maxy){canvasHeight-=Math.ceil(spotRadius);canvasTop+=Math.ceil(spotRadius)}if(hlSpotsEnabled||(options.get("minSpotColor")||options.get("maxSpotColor"))&&(yvalues[0]===this.miny||yvalues[0]===this.maxy)){canvasLeft+=Math.ceil(spotRadius);canvasWidth-=Math.ceil(spotRadius)}if(hlSpotsEnabled||options.get("spotColor")||(options.get("minSpotColor")||options.get("maxSpotColor")&&(yvalues[yvallast]===this.miny||yvalues[yvallast]===this.maxy))){canvasWidth-=Math.ceil(spotRadius)}}canvasHeight--;if(options.get("normalRangeMin")!==undefined&&!options.get("drawNormalOnTop")){this.drawNormalRange(canvasLeft,canvasTop,canvasHeight,canvasWidth,rangey)}path=[];paths=[path];last=next=null;yvalcount=yvalues.length;for(i=0;i<yvalcount;i++){x=xvalues[i];xnext=xvalues[i+1];y=yvalues[i];xpos=canvasLeft+Math.round((x-this.minx)*(canvasWidth/rangex));xposnext=i<yvalcount-1?canvasLeft+Math.round((xnext-this.minx)*(canvasWidth/rangex)):canvasWidth;next=xpos+(xposnext-xpos)/2;regionMap[i]=[last||0,next,i];last=next;if(y===null){if(i){if(yvalues[i-1]!==null){path=[];paths.push(path)}vertices.push(null)}}else{if(y<this.miny){y=this.miny}if(y>this.maxy){y=this.maxy}if(!path.length){path.push([xpos,canvasTop+canvasHeight])}vertex=[xpos,canvasTop+Math.round(canvasHeight-canvasHeight*((y-this.miny)/rangey))];path.push(vertex);vertices.push(vertex)}}lineShapes=[];fillShapes=[];plen=paths.length;for(i=0;i<plen;i++){path=paths[i];if(path.length){if(options.get("fillColor")){path.push([path[path.length-1][0],canvasTop+canvasHeight]);fillShapes.push(path.slice(0));path.pop()}if(path.length>2){path[0]=[path[0][0],path[1][1]]}lineShapes.push(path)}}plen=fillShapes.length;for(i=0;i<plen;i++){target.drawShape(fillShapes[i],options.get("fillColor"),options.get("fillColor")).append()}if(options.get("normalRangeMin")!==undefined&&options.get("drawNormalOnTop")){this.drawNormalRange(canvasLeft,canvasTop,canvasHeight,canvasWidth,rangey)}plen=lineShapes.length;for(i=0;i<plen;i++){target.drawShape(lineShapes[i],options.get("lineColor"),undefined,options.get("lineWidth")).append()}if(spotRadius&&options.get("valueSpots")){valueSpots=options.get("valueSpots");if(valueSpots.get===undefined){valueSpots=new RangeMap(valueSpots)}for(i=0;i<yvalcount;i++){color=valueSpots.get(yvalues[i]);if(color){target.drawCircle(canvasLeft+Math.round((xvalues[i]-this.minx)*(canvasWidth/rangex)),canvasTop+Math.round(canvasHeight-canvasHeight*((yvalues[i]-this.miny)/rangey)),spotRadius,undefined,color).append()}}}if(spotRadius&&options.get("spotColor")&&yvalues[yvallast]!==null){target.drawCircle(canvasLeft+Math.round((xvalues[xvalues.length-1]-this.minx)*(canvasWidth/rangex)),canvasTop+Math.round(canvasHeight-canvasHeight*((yvalues[yvallast]-this.miny)/rangey)),spotRadius,undefined,options.get("spotColor")).append()}if(this.maxy!==this.minyorg){if(spotRadius&&options.get("minSpotColor")){x=xvalues[$.inArray(this.minyorg,yvalues)];target.drawCircle(canvasLeft+Math.round((x-this.minx)*(canvasWidth/rangex)),canvasTop+Math.round(canvasHeight-canvasHeight*((this.minyorg-this.miny)/rangey)),spotRadius,undefined,options.get("minSpotColor")).append()}if(spotRadius&&options.get("maxSpotColor")){x=xvalues[$.inArray(this.maxyorg,yvalues)];target.drawCircle(canvasLeft+Math.round((x-this.minx)*(canvasWidth/rangex)),canvasTop+Math.round(canvasHeight-canvasHeight*((this.maxyorg-this.miny)/rangey)),spotRadius,undefined,options.get("maxSpotColor")).append()}}this.lastShapeId=target.getLastShapeId();this.canvasTop=canvasTop;target.render()}});$.fn.sparkline.bar=bar=createClass($.fn.sparkline._base,barHighlightMixin,{type:"bar",init:function(el,values,options,width,height){var barWidth=parseInt(options.get("barWidth"),10),barSpacing=parseInt(options.get("barSpacing"),10),chartRangeMin=options.get("chartRangeMin"),chartRangeMax=options.get("chartRangeMax"),chartRangeClip=options.get("chartRangeClip"),stackMin=Infinity,stackMax=-Infinity,isStackString,groupMin,groupMax,stackRanges,numValues,i,vlen,range,zeroAxis,xaxisOffset,min,max,clipMin,clipMax,stacked,vlist,j,slen,svals,val,yoffset,yMaxCalc,canvasHeightEf;bar._super.init.call(this,el,values,options,width,height);for(i=0,vlen=values.length;i<vlen;i++){val=values[i];isStackString=typeof val==="string"&&val.indexOf(":")>-1;if(isStackString||$.isArray(val)){stacked=true;if(isStackString){val=values[i]=normalizeValues(val.split(":"));
}val=remove(val,null);groupMin=Math.min.apply(Math,val);groupMax=Math.max.apply(Math,val);if(groupMin<stackMin){stackMin=groupMin}if(groupMax>stackMax){stackMax=groupMax}}}this.stacked=stacked;this.regionShapes={};this.barWidth=barWidth;this.barSpacing=barSpacing;this.totalBarWidth=barWidth+barSpacing;this.width=width=values.length*barWidth+(values.length-1)*barSpacing;this.initTarget();if(chartRangeClip){clipMin=chartRangeMin===undefined?-Infinity:chartRangeMin;clipMax=chartRangeMax===undefined?Infinity:chartRangeMax}numValues=[];stackRanges=stacked?[]:numValues;var stackTotals=[];var stackRangesNeg=[];for(i=0,vlen=values.length;i<vlen;i++){if(stacked){vlist=values[i];values[i]=svals=[];stackTotals[i]=0;stackRanges[i]=stackRangesNeg[i]=0;for(j=0,slen=vlist.length;j<slen;j++){val=svals[j]=chartRangeClip?clipval(vlist[j],clipMin,clipMax):vlist[j];if(val!==null){if(val>0){stackTotals[i]+=val}if(stackMin<0&&stackMax>0){if(val<0){stackRangesNeg[i]+=Math.abs(val)}else{stackRanges[i]+=val}}else{stackRanges[i]+=Math.abs(val-(val<0?stackMax:stackMin))}numValues.push(val)}}}else{val=chartRangeClip?clipval(values[i],clipMin,clipMax):values[i];val=values[i]=normalizeValue(val);if(val!==null){numValues.push(val)}}}this.max=max=Math.max.apply(Math,numValues);this.min=min=Math.min.apply(Math,numValues);this.stackMax=stackMax=stacked?Math.max.apply(Math,stackTotals):max;this.stackMin=stackMin=stacked?Math.min.apply(Math,numValues):min;if(options.get("chartRangeMin")!==undefined&&(options.get("chartRangeClip")||options.get("chartRangeMin")<min)){min=options.get("chartRangeMin")}if(options.get("chartRangeMax")!==undefined&&(options.get("chartRangeClip")||options.get("chartRangeMax")>max)){max=options.get("chartRangeMax")}this.zeroAxis=zeroAxis=options.get("zeroAxis",true);if(min<=0&&max>=0&&zeroAxis){xaxisOffset=0}else if(zeroAxis==false){xaxisOffset=min}else if(min>0){xaxisOffset=min}else{xaxisOffset=max}this.xaxisOffset=xaxisOffset;range=stacked?Math.max.apply(Math,stackRanges)+Math.max.apply(Math,stackRangesNeg):max-min;this.canvasHeightEf=zeroAxis&&min<0?this.canvasHeight-2:this.canvasHeight-1;if(min<xaxisOffset){yMaxCalc=stacked&&max>=0?stackMax:max;yoffset=(yMaxCalc-xaxisOffset)/range*this.canvasHeight;if(yoffset!==Math.ceil(yoffset)){this.canvasHeightEf-=2;yoffset=Math.ceil(yoffset)}}else{yoffset=this.canvasHeight}this.yoffset=yoffset;if($.isArray(options.get("colorMap"))){this.colorMapByIndex=options.get("colorMap");this.colorMapByValue=null}else{this.colorMapByIndex=null;this.colorMapByValue=options.get("colorMap");if(this.colorMapByValue&&this.colorMapByValue.get===undefined){this.colorMapByValue=new RangeMap(this.colorMapByValue)}}this.range=range},getRegion:function(el,x,y){var result=Math.floor(x/this.totalBarWidth);return result<0||result>=this.values.length?undefined:result},getCurrentRegionFields:function(){var currentRegion=this.currentRegion,values=ensureArray(this.values[currentRegion]),result=[],value,i;for(i=values.length;i--;){value=values[i];result.push({isNull:value===null,value:value,color:this.calcColor(i,value,currentRegion),offset:currentRegion})}return result},calcColor:function(stacknum,value,valuenum){var colorMapByIndex=this.colorMapByIndex,colorMapByValue=this.colorMapByValue,options=this.options,color,newColor;if(this.stacked){color=options.get("stackedBarColor")}else{color=value<0?options.get("negBarColor"):options.get("barColor")}if(value===0&&options.get("zeroColor")!==undefined){color=options.get("zeroColor")}if(colorMapByValue&&(newColor=colorMapByValue.get(value))){color=newColor}else if(colorMapByIndex&&colorMapByIndex.length>valuenum){color=colorMapByIndex[valuenum]}return $.isArray(color)?color[stacknum%color.length]:color},renderRegion:function(valuenum,highlight){var vals=this.values[valuenum],options=this.options,xaxisOffset=this.xaxisOffset,result=[],range=this.range,stacked=this.stacked,target=this.target,x=valuenum*this.totalBarWidth,canvasHeightEf=this.canvasHeightEf,yoffset=this.yoffset,y,height,color,isNull,yoffsetNeg,i,valcount,val,minPlotted,allMin;vals=$.isArray(vals)?vals:[vals];valcount=vals.length;val=vals[0];isNull=all(null,vals);allMin=all(xaxisOffset,vals,true);if(isNull){if(options.get("nullColor")){color=highlight?options.get("nullColor"):this.calcHighlightColor(options.get("nullColor"),options);y=yoffset>0?yoffset-1:yoffset;return target.drawRect(x,y,this.barWidth-1,0,color,color)}else{return undefined}}yoffsetNeg=yoffset;for(i=0;i<valcount;i++){val=vals[i];if(stacked&&val===xaxisOffset){if(!allMin||minPlotted){continue}minPlotted=true}if(range>0){height=Math.floor(canvasHeightEf*(Math.abs(val-xaxisOffset)/range))+1}else{height=1}if(val<xaxisOffset||val===xaxisOffset&&yoffset===0){y=yoffsetNeg;yoffsetNeg+=height}else{y=yoffset-height;yoffset-=height}color=this.calcColor(i,val,valuenum);if(highlight){color=this.calcHighlightColor(color,options)}result.push(target.drawRect(x,y,this.barWidth-1,height-1,color,color))}if(result.length===1){return result[0]}return result}});$.fn.sparkline.tristate=tristate=createClass($.fn.sparkline._base,barHighlightMixin,{type:"tristate",init:function(el,values,options,width,height){var barWidth=parseInt(options.get("barWidth"),10),barSpacing=parseInt(options.get("barSpacing"),10);tristate._super.init.call(this,el,values,options,width,height);this.regionShapes={};this.barWidth=barWidth;this.barSpacing=barSpacing;this.totalBarWidth=barWidth+barSpacing;this.values=$.map(values,Number);this.width=width=values.length*barWidth+(values.length-1)*barSpacing;if($.isArray(options.get("colorMap"))){this.colorMapByIndex=options.get("colorMap");this.colorMapByValue=null}else{this.colorMapByIndex=null;this.colorMapByValue=options.get("colorMap");if(this.colorMapByValue&&this.colorMapByValue.get===undefined){this.colorMapByValue=new RangeMap(this.colorMapByValue)}}this.initTarget()},getRegion:function(el,x,y){return Math.floor(x/this.totalBarWidth)},getCurrentRegionFields:function(){var currentRegion=this.currentRegion;return{isNull:this.values[currentRegion]===undefined,value:this.values[currentRegion],color:this.calcColor(this.values[currentRegion],currentRegion),offset:currentRegion}},calcColor:function(value,valuenum){var values=this.values,options=this.options,colorMapByIndex=this.colorMapByIndex,colorMapByValue=this.colorMapByValue,color,newColor;if(colorMapByValue&&(newColor=colorMapByValue.get(value))){color=newColor}else if(colorMapByIndex&&colorMapByIndex.length>valuenum){color=colorMapByIndex[valuenum]}else if(values[valuenum]<0){color=options.get("negBarColor")}else if(values[valuenum]>0){color=options.get("posBarColor")}else{color=options.get("zeroBarColor")}return color},renderRegion:function(valuenum,highlight){var values=this.values,options=this.options,target=this.target,canvasHeight,height,halfHeight,x,y,color;canvasHeight=target.pixelHeight;halfHeight=Math.round(canvasHeight/2);x=valuenum*this.totalBarWidth;if(values[valuenum]<0){y=halfHeight;height=halfHeight-1}else if(values[valuenum]>0){y=0;height=halfHeight-1}else{y=halfHeight-1;height=2}color=this.calcColor(values[valuenum],valuenum);if(color===null){return}if(highlight){color=this.calcHighlightColor(color,options)}return target.drawRect(x,y,this.barWidth-1,height-1,color,color)}});$.fn.sparkline.discrete=discrete=createClass($.fn.sparkline._base,barHighlightMixin,{type:"discrete",init:function(el,values,options,width,height){discrete._super.init.call(this,el,values,options,width,height);this.regionShapes={};this.values=values=$.map(values,Number);this.min=Math.min.apply(Math,values);this.max=Math.max.apply(Math,values);this.range=this.max-this.min;this.width=width=options.get("width")==="auto"?values.length*2:this.width;this.interval=Math.floor(width/values.length);this.itemWidth=width/values.length;if(options.get("chartRangeMin")!==undefined&&(options.get("chartRangeClip")||options.get("chartRangeMin")<this.min)){this.min=options.get("chartRangeMin")}if(options.get("chartRangeMax")!==undefined&&(options.get("chartRangeClip")||options.get("chartRangeMax")>this.max)){this.max=options.get("chartRangeMax")}this.initTarget();if(this.target){this.lineHeight=options.get("lineHeight")==="auto"?Math.round(this.canvasHeight*.3):options.get("lineHeight")}},getRegion:function(el,x,y){return Math.floor(x/this.itemWidth)},getCurrentRegionFields:function(){var currentRegion=this.currentRegion;return{isNull:this.values[currentRegion]===undefined,value:this.values[currentRegion],offset:currentRegion}},renderRegion:function(valuenum,highlight){var values=this.values,options=this.options,min=this.min,max=this.max,range=this.range,interval=this.interval,target=this.target,canvasHeight=this.canvasHeight,lineHeight=this.lineHeight,pheight=canvasHeight-lineHeight,ytop,val,color,x;val=clipval(values[valuenum],min,max);x=valuenum*interval;ytop=Math.round(pheight-pheight*((val-min)/range));color=options.get("thresholdColor")&&val<options.get("thresholdValue")?options.get("thresholdColor"):options.get("lineColor");if(highlight){color=this.calcHighlightColor(color,options)}return target.drawLine(x,ytop,x,ytop+lineHeight,color)}});$.fn.sparkline.bullet=bullet=createClass($.fn.sparkline._base,{type:"bullet",init:function(el,values,options,width,height){var min,max,vals;bullet._super.init.call(this,el,values,options,width,height);this.values=values=normalizeValues(values);vals=values.slice();vals[0]=vals[0]===null?vals[2]:vals[0];vals[1]=values[1]===null?vals[2]:vals[1];min=Math.min.apply(Math,values);max=Math.max.apply(Math,values);if(options.get("base")===undefined){min=min<0?min:0}else{min=options.get("base")}this.min=min;this.max=max;this.range=max-min;this.shapes={};this.valueShapes={};this.regiondata={};this.width=width=options.get("width")==="auto"?"4.0em":width;this.target=this.$el.simpledraw(width,height,options.get("composite"));if(!values.length){this.disabled=true}this.initTarget()},getRegion:function(el,x,y){var shapeid=this.target.getShapeAt(el,x,y);return shapeid!==undefined&&this.shapes[shapeid]!==undefined?this.shapes[shapeid]:undefined},getCurrentRegionFields:function(){var currentRegion=this.currentRegion;return{fieldkey:currentRegion.substr(0,1),value:this.values[currentRegion.substr(1)],region:currentRegion}},changeHighlight:function(highlight){var currentRegion=this.currentRegion,shapeid=this.valueShapes[currentRegion],shape;delete this.shapes[shapeid];switch(currentRegion.substr(0,1)){case"r":shape=this.renderRange(currentRegion.substr(1),highlight);break;case"p":shape=this.renderPerformance(highlight);break;case"t":shape=this.renderTarget(highlight);break}this.valueShapes[currentRegion]=shape.id;this.shapes[shape.id]=currentRegion;this.target.replaceWithShape(shapeid,shape)},renderRange:function(rn,highlight){var rangeval=this.values[rn],rangewidth=Math.round(this.canvasWidth*((rangeval-this.min)/this.range)),color=this.options.get("rangeColors")[rn-2];if(highlight){color=this.calcHighlightColor(color,this.options)}return this.target.drawRect(0,0,rangewidth-1,this.canvasHeight-1,color,color)},renderPerformance:function(highlight){var perfval=this.values[1],perfwidth=Math.round(this.canvasWidth*((perfval-this.min)/this.range)),color=this.options.get("performanceColor");if(highlight){color=this.calcHighlightColor(color,this.options)}return this.target.drawRect(0,Math.round(this.canvasHeight*.3),perfwidth-1,Math.round(this.canvasHeight*.4)-1,color,color)},renderTarget:function(highlight){var targetval=this.values[0],x=Math.round(this.canvasWidth*((targetval-this.min)/this.range)-this.options.get("targetWidth")/2),targettop=Math.round(this.canvasHeight*.1),targetheight=this.canvasHeight-targettop*2,color=this.options.get("targetColor");if(highlight){color=this.calcHighlightColor(color,this.options)}return this.target.drawRect(x,targettop,this.options.get("targetWidth")-1,targetheight-1,color,color)},render:function(){var vlen=this.values.length,target=this.target,i,shape;if(!bullet._super.render.call(this)){return}for(i=2;i<vlen;i++){shape=this.renderRange(i).append();this.shapes[shape.id]="r"+i;this.valueShapes["r"+i]=shape.id}if(this.values[1]!==null){shape=this.renderPerformance().append();this.shapes[shape.id]="p1";this.valueShapes.p1=shape.id}if(this.values[0]!==null){shape=this.renderTarget().append();this.shapes[shape.id]="t0";this.valueShapes.t0=shape.id}target.render()}});$.fn.sparkline.pie=pie=createClass($.fn.sparkline._base,{type:"pie",init:function(el,values,options,width,height){var total=0,i;pie._super.init.call(this,el,values,options,width,height);this.shapes={};this.valueShapes={};this.values=values=$.map(values,Number);if(options.get("width")==="auto"){this.width=this.height}if(values.length>0){for(i=values.length;i--;){total+=values[i]}}this.total=total;this.initTarget();this.radius=Math.floor(Math.min(this.canvasWidth,this.canvasHeight)/2)},getRegion:function(el,x,y){var shapeid=this.target.getShapeAt(el,x,y);return shapeid!==undefined&&this.shapes[shapeid]!==undefined?this.shapes[shapeid]:undefined},getCurrentRegionFields:function(){var currentRegion=this.currentRegion;return{isNull:this.values[currentRegion]===undefined,value:this.values[currentRegion],percent:this.values[currentRegion]/this.total*100,color:this.options.get("sliceColors")[currentRegion%this.options.get("sliceColors").length],offset:currentRegion}},changeHighlight:function(highlight){var currentRegion=this.currentRegion,newslice=this.renderSlice(currentRegion,highlight),shapeid=this.valueShapes[currentRegion];delete this.shapes[shapeid];this.target.replaceWithShape(shapeid,newslice);this.valueShapes[currentRegion]=newslice.id;this.shapes[newslice.id]=currentRegion},renderSlice:function(valuenum,highlight){var target=this.target,options=this.options,radius=this.radius,borderWidth=options.get("borderWidth"),offset=options.get("offset"),circle=2*Math.PI,values=this.values,total=this.total,next=offset?2*Math.PI*(offset/360):0,start,end,i,vlen,color;vlen=values.length;for(i=0;i<vlen;i++){start=next;end=next;if(total>0){end=next+circle*(values[i]/total)}if(valuenum===i){color=options.get("sliceColors")[i%options.get("sliceColors").length];if(highlight){color=this.calcHighlightColor(color,options)}return target.drawPieSlice(radius,radius,radius-borderWidth,start,end,undefined,color)}next=end}},render:function(){var target=this.target,values=this.values,options=this.options,radius=this.radius,borderWidth=options.get("borderWidth"),donutWidth=options.get("donutWidth"),shape,i;if(!pie._super.render.call(this)){return}if(borderWidth){target.drawCircle(radius,radius,Math.floor(radius-borderWidth/2),options.get("borderColor"),undefined,borderWidth).append()}for(i=values.length;i--;){if(values[i]){shape=this.renderSlice(i).append();this.valueShapes[i]=shape.id;this.shapes[shape.id]=i}}if(donutWidth){target.drawCircle(radius,radius,radius-donutWidth,options.get("donutColor"),options.get("donutColor"),0).append()}target.render()}});$.fn.sparkline.box=box=createClass($.fn.sparkline._base,{type:"box",init:function(el,values,options,width,height){box._super.init.call(this,el,values,options,width,height);this.values=$.map(values,Number);this.width=options.get("width")==="auto"?"4.0em":width;this.initTarget();if(!this.values.length){this.disabled=1}},getRegion:function(){return 1},getCurrentRegionFields:function(){var result=[{field:"lq",value:this.quartiles[0]},{field:"med",value:this.quartiles[1]},{field:"uq",value:this.quartiles[2]}];if(this.loutlier!==undefined){result.push({field:"lo",value:this.loutlier})}if(this.routlier!==undefined){result.push({field:"ro",value:this.routlier})}if(this.lwhisker!==undefined){result.push({field:"lw",value:this.lwhisker})}if(this.rwhisker!==undefined){result.push({field:"rw",value:this.rwhisker})}return result},render:function(){var target=this.target,values=this.values,vlen=values.length,options=this.options,canvasWidth=this.canvasWidth,canvasHeight=this.canvasHeight,minValue=options.get("chartRangeMin")===undefined?Math.min.apply(Math,values):options.get("chartRangeMin"),maxValue=options.get("chartRangeMax")===undefined?Math.max.apply(Math,values):options.get("chartRangeMax"),canvasLeft=0,lwhisker,loutlier,iqr,q1,q2,q3,rwhisker,routlier,i,size,unitSize;if(!box._super.render.call(this)){return}if(options.get("raw")){if(options.get("showOutliers")&&values.length>5){loutlier=values[0];lwhisker=values[1];q1=values[2];q2=values[3];q3=values[4];rwhisker=values[5];routlier=values[6]}else{lwhisker=values[0];q1=values[1];q2=values[2];q3=values[3];rwhisker=values[4]}}else{values.sort(function(a,b){return a-b});q1=quartile(values,1);q2=quartile(values,2);q3=quartile(values,3);iqr=q3-q1;if(options.get("showOutliers")){lwhisker=rwhisker=undefined;for(i=0;i<vlen;i++){if(lwhisker===undefined&&values[i]>q1-iqr*options.get("outlierIQR")){lwhisker=values[i]}if(values[i]<q3+iqr*options.get("outlierIQR")){rwhisker=values[i]}}loutlier=values[0];routlier=values[vlen-1]}else{lwhisker=values[0];rwhisker=values[vlen-1]}}this.quartiles=[q1,q2,q3];this.lwhisker=lwhisker;this.rwhisker=rwhisker;this.loutlier=loutlier;this.routlier=routlier;unitSize=canvasWidth/(maxValue-minValue+1);if(options.get("showOutliers")){canvasLeft=Math.ceil(options.get("spotRadius"));canvasWidth-=2*Math.ceil(options.get("spotRadius"));unitSize=canvasWidth/(maxValue-minValue+1);if(loutlier<lwhisker){target.drawCircle((loutlier-minValue)*unitSize+canvasLeft,canvasHeight/2,options.get("spotRadius"),options.get("outlierLineColor"),options.get("outlierFillColor")).append()}if(routlier>rwhisker){target.drawCircle((routlier-minValue)*unitSize+canvasLeft,canvasHeight/2,options.get("spotRadius"),options.get("outlierLineColor"),options.get("outlierFillColor")).append()}}target.drawRect(Math.round((q1-minValue)*unitSize+canvasLeft),Math.round(canvasHeight*.1),Math.round((q3-q1)*unitSize),Math.round(canvasHeight*.8),options.get("boxLineColor"),options.get("boxFillColor")).append();target.drawLine(Math.round((lwhisker-minValue)*unitSize+canvasLeft),Math.round(canvasHeight/2),Math.round((q1-minValue)*unitSize+canvasLeft),Math.round(canvasHeight/2),options.get("lineColor")).append();target.drawLine(Math.round((lwhisker-minValue)*unitSize+canvasLeft),Math.round(canvasHeight/4),Math.round((lwhisker-minValue)*unitSize+canvasLeft),Math.round(canvasHeight-canvasHeight/4),options.get("whiskerColor")).append();target.drawLine(Math.round((rwhisker-minValue)*unitSize+canvasLeft),Math.round(canvasHeight/2),Math.round((q3-minValue)*unitSize+canvasLeft),Math.round(canvasHeight/2),options.get("lineColor")).append();target.drawLine(Math.round((rwhisker-minValue)*unitSize+canvasLeft),Math.round(canvasHeight/4),Math.round((rwhisker-minValue)*unitSize+canvasLeft),Math.round(canvasHeight-canvasHeight/4),options.get("whiskerColor")).append();target.drawLine(Math.round((q2-minValue)*unitSize+canvasLeft),Math.round(canvasHeight*.1),Math.round((q2-minValue)*unitSize+canvasLeft),Math.round(canvasHeight*.9),options.get("medianColor")).append();if(options.get("target")){size=Math.ceil(options.get("spotRadius"));target.drawLine(Math.round((options.get("target")-minValue)*unitSize+canvasLeft),Math.round(canvasHeight/2-size),Math.round((options.get("target")-minValue)*unitSize+canvasLeft),Math.round(canvasHeight/2+size),options.get("targetColor")).append();target.drawLine(Math.round((options.get("target")-minValue)*unitSize+canvasLeft-size),Math.round(canvasHeight/2),Math.round((options.get("target")-minValue)*unitSize+canvasLeft+size),Math.round(canvasHeight/2),options.get("targetColor")).append()}target.render()}});VShape=createClass({init:function(target,id,type,args){this.target=target;this.id=id;this.type=type;this.args=args},append:function(){this.target.appendShape(this);return this}});VCanvas_base=createClass({_pxregex:/(\d+)(px)?\s*$/i,init:function(width,height,target){if(!width){return}this.width=width;this.height=height;this.target=target;this.lastShapeId=null;if(target[0]){target=target[0]}$.data(target,"_jqs_vcanvas",this)},drawLine:function(x1,y1,x2,y2,lineColor,lineWidth){return this.drawShape([[x1,y1],[x2,y2]],lineColor,lineWidth)},drawShape:function(path,lineColor,fillColor,lineWidth){return this._genShape("Shape",[path,lineColor,fillColor,lineWidth])},drawCircle:function(x,y,radius,lineColor,fillColor,lineWidth){return this._genShape("Circle",[x,y,radius,lineColor,fillColor,lineWidth])},drawPieSlice:function(x,y,radius,startAngle,endAngle,lineColor,fillColor){return this._genShape("PieSlice",[x,y,radius,startAngle,endAngle,lineColor,fillColor])},drawRect:function(x,y,width,height,lineColor,fillColor){return this._genShape("Rect",[x,y,width,height,lineColor,fillColor])},getElement:function(){return this.canvas},getLastShapeId:function(){return this.lastShapeId},reset:function(){alert("reset not implemented")},_insert:function(el,target){$(target).html(el)},_calculatePixelDims:function(width,height,canvas){var match;match=this._pxregex.exec(height);if(match){this.pixelHeight=match[1]}else{this.pixelHeight=$(canvas).height()}match=this._pxregex.exec(width);if(match){this.pixelWidth=match[1]}else{this.pixelWidth=$(canvas).width()}},_genShape:function(shapetype,shapeargs){var id=shapeCount++;shapeargs.unshift(id);return new VShape(this,id,shapetype,shapeargs)},appendShape:function(shape){alert("appendShape not implemented")},replaceWithShape:function(shapeid,shape){alert("replaceWithShape not implemented")},insertAfterShape:function(shapeid,shape){alert("insertAfterShape not implemented")},removeShapeId:function(shapeid){alert("removeShapeId not implemented")},getShapeAt:function(el,x,y){alert("getShapeAt not implemented")},render:function(){alert("render not implemented")}});VCanvas_canvas=createClass(VCanvas_base,{init:function(width,height,target,interact){VCanvas_canvas._super.init.call(this,width,height,target);this.canvas=document.createElement("canvas");if(target[0]){target=target[0]}$.data(target,"_jqs_vcanvas",this);$(this.canvas).css({display:"inline-block",width:width,height:height,verticalAlign:"top"});this._insert(this.canvas,target);this._calculatePixelDims(width,height,this.canvas);this.canvas.width=this.pixelWidth;this.canvas.height=this.pixelHeight;this.interact=interact;this.shapes={};this.shapeseq=[];this.currentTargetShapeId=undefined;$(this.canvas).css({width:this.pixelWidth,height:this.pixelHeight})},_getContext:function(lineColor,fillColor,lineWidth){var context=this.canvas.getContext("2d");if(lineColor!==undefined){context.strokeStyle=lineColor}context.lineWidth=lineWidth===undefined?1:lineWidth;if(fillColor!==undefined){context.fillStyle=fillColor}return context},reset:function(){var context=this._getContext();context.clearRect(0,0,this.pixelWidth,this.pixelHeight);this.shapes={};this.shapeseq=[];this.currentTargetShapeId=undefined},_drawShape:function(shapeid,path,lineColor,fillColor,lineWidth){var context=this._getContext(lineColor,fillColor,lineWidth),i,plen;context.beginPath();context.moveTo(path[0][0]+.5,path[0][1]+.5);for(i=1,plen=path.length;i<plen;i++){context.lineTo(path[i][0]+.5,path[i][1]+.5)}if(lineColor!==undefined){context.stroke()}if(fillColor!==undefined){context.fill()}if(this.targetX!==undefined&&this.targetY!==undefined&&context.isPointInPath(this.targetX,this.targetY)){this.currentTargetShapeId=shapeid}},_drawCircle:function(shapeid,x,y,radius,lineColor,fillColor,lineWidth){var context=this._getContext(lineColor,fillColor,lineWidth);context.beginPath();context.arc(x,y,radius,0,2*Math.PI,false);if(this.targetX!==undefined&&this.targetY!==undefined&&context.isPointInPath(this.targetX,this.targetY)){this.currentTargetShapeId=shapeid}if(lineColor!==undefined){context.stroke()}if(fillColor!==undefined){context.fill()}},_drawPieSlice:function(shapeid,x,y,radius,startAngle,endAngle,lineColor,fillColor){var context=this._getContext(lineColor,fillColor);context.beginPath();context.moveTo(x,y);context.arc(x,y,radius,startAngle,endAngle,false);context.lineTo(x,y);context.closePath();if(lineColor!==undefined){context.stroke()}if(fillColor){context.fill()}if(this.targetX!==undefined&&this.targetY!==undefined&&context.isPointInPath(this.targetX,this.targetY)){this.currentTargetShapeId=shapeid}},_drawRect:function(shapeid,x,y,width,height,lineColor,fillColor){return this._drawShape(shapeid,[[x,y],[x+width,y],[x+width,y+height],[x,y+height],[x,y]],lineColor,fillColor)},appendShape:function(shape){this.shapes[shape.id]=shape;this.shapeseq.push(shape.id);this.lastShapeId=shape.id;return shape.id},replaceWithShape:function(shapeid,shape){var shapeseq=this.shapeseq,i;this.shapes[shape.id]=shape;for(i=shapeseq.length;i--;){if(shapeseq[i]==shapeid){shapeseq[i]=shape.id}}delete this.shapes[shapeid]},replaceWithShapes:function(shapeids,shapes){var shapeseq=this.shapeseq,shapemap={},sid,i,first;for(i=shapeids.length;i--;){shapemap[shapeids[i]]=true}for(i=shapeseq.length;i--;){sid=shapeseq[i];if(shapemap[sid]){shapeseq.splice(i,1);delete this.shapes[sid];first=i}}for(i=shapes.length;i--;){shapeseq.splice(first,0,shapes[i].id);this.shapes[shapes[i].id]=shapes[i]}},insertAfterShape:function(shapeid,shape){var shapeseq=this.shapeseq,i;for(i=shapeseq.length;i--;){if(shapeseq[i]===shapeid){shapeseq.splice(i+1,0,shape.id);this.shapes[shape.id]=shape;return}}},removeShapeId:function(shapeid){var shapeseq=this.shapeseq,i;for(i=shapeseq.length;i--;){if(shapeseq[i]===shapeid){shapeseq.splice(i,1);break}}delete this.shapes[shapeid]},getShapeAt:function(el,x,y){this.targetX=x;this.targetY=y;this.render();return this.currentTargetShapeId},render:function(){var shapeseq=this.shapeseq,shapes=this.shapes,shapeCount=shapeseq.length,context=this._getContext(),shapeid,shape,i;context.clearRect(0,0,this.pixelWidth,this.pixelHeight);for(i=0;i<shapeCount;i++){shapeid=shapeseq[i];shape=shapes[shapeid];this["_draw"+shape.type].apply(this,shape.args)}if(!this.interact){this.shapes={};this.shapeseq=[]}}});VCanvas_vml=createClass(VCanvas_base,{init:function(width,height,target){var groupel;VCanvas_vml._super.init.call(this,width,height,target);if(target[0]){target=target[0]}$.data(target,"_jqs_vcanvas",this);this.canvas=document.createElement("span");$(this.canvas).css({display:"inline-block",position:"relative",overflow:"hidden",width:width,height:height,margin:"0px",padding:"0px",verticalAlign:"top"});this._insert(this.canvas,target);this._calculatePixelDims(width,height,this.canvas);this.canvas.width=this.pixelWidth;this.canvas.height=this.pixelHeight;groupel='<v:group coordorigin="0 0" coordsize="'+this.pixelWidth+" "+this.pixelHeight+'"'+' style="position:absolute;top:0;left:0;width:'+this.pixelWidth+"px;height="+this.pixelHeight+'px;"></v:group>';this.canvas.insertAdjacentHTML("beforeEnd",groupel);this.group=$(this.canvas).children()[0];this.rendered=false;this.prerender=""},_drawShape:function(shapeid,path,lineColor,fillColor,lineWidth){var vpath=[],initial,stroke,fill,closed,vel,plen,i;for(i=0,plen=path.length;i<plen;i++){vpath[i]=""+path[i][0]+","+path[i][1]}initial=vpath.splice(0,1);lineWidth=lineWidth===undefined?1:lineWidth;stroke=lineColor===undefined?' stroked="false" ':' strokeWeight="'+lineWidth+'px" strokeColor="'+lineColor+'" ';fill=fillColor===undefined?' filled="false"':' fillColor="'+fillColor+'" filled="true" ';closed=vpath[0]===vpath[vpath.length-1]?"x ":"";vel='<v:shape coordorigin="0 0" coordsize="'+this.pixelWidth+" "+this.pixelHeight+'" '+' id="jqsshape'+shapeid+'" '+stroke+fill+' style="position:absolute;left:0px;top:0px;height:'+this.pixelHeight+"px;width:"+this.pixelWidth+'px;padding:0px;margin:0px;" '+' path="m '+initial+" l "+vpath.join(", ")+" "+closed+'e">'+" </v:shape>";return vel},_drawCircle:function(shapeid,x,y,radius,lineColor,fillColor,lineWidth){var stroke,fill,vel;x-=radius;y-=radius;stroke=lineColor===undefined?' stroked="false" ':' strokeWeight="'+lineWidth+'px" strokeColor="'+lineColor+'" ';fill=fillColor===undefined?' filled="false"':' fillColor="'+fillColor+'" filled="true" ';vel="<v:oval "+' id="jqsshape'+shapeid+'" '+stroke+fill+' style="position:absolute;top:'+y+"px; left:"+x+"px; width:"+radius*2+"px; height:"+radius*2+'px"></v:oval>';return vel},_drawPieSlice:function(shapeid,x,y,radius,startAngle,endAngle,lineColor,fillColor){var vpath,startx,starty,endx,endy,stroke,fill,vel;if(startAngle===endAngle){return""}if(endAngle-startAngle===2*Math.PI){startAngle=0;endAngle=2*Math.PI}startx=x+Math.round(Math.cos(startAngle)*radius);starty=y+Math.round(Math.sin(startAngle)*radius);endx=x+Math.round(Math.cos(endAngle)*radius);endy=y+Math.round(Math.sin(endAngle)*radius);if(startx===endx&&starty===endy){if(endAngle-startAngle<Math.PI){return""}startx=endx=x+radius;starty=endy=y}if(startx===endx&&starty===endy&&endAngle-startAngle<Math.PI){return""}vpath=[x-radius,y-radius,x+radius,y+radius,startx,starty,endx,endy];stroke=lineColor===undefined?' stroked="false" ':' strokeWeight="1px" strokeColor="'+lineColor+'" ';fill=fillColor===undefined?' filled="false"':' fillColor="'+fillColor+'" filled="true" ';vel='<v:shape coordorigin="0 0" coordsize="'+this.pixelWidth+" "+this.pixelHeight+'" '+' id="jqsshape'+shapeid+'" '+stroke+fill+' style="position:absolute;left:0px;top:0px;height:'+this.pixelHeight+"px;width:"+this.pixelWidth+'px;padding:0px;margin:0px;" '+' path="m '+x+","+y+" wa "+vpath.join(", ")+' x e">'+" </v:shape>";return vel},_drawRect:function(shapeid,x,y,width,height,lineColor,fillColor){return this._drawShape(shapeid,[[x,y],[x,y+height],[x+width,y+height],[x+width,y],[x,y]],lineColor,fillColor)},reset:function(){this.group.innerHTML=""},appendShape:function(shape){var vel=this["_draw"+shape.type].apply(this,shape.args);if(this.rendered){this.group.insertAdjacentHTML("beforeEnd",vel)}else{this.prerender+=vel}this.lastShapeId=shape.id;return shape.id},replaceWithShape:function(shapeid,shape){var existing=$("#jqsshape"+shapeid),vel=this["_draw"+shape.type].apply(this,shape.args);existing[0].outerHTML=vel},replaceWithShapes:function(shapeids,shapes){var existing=$("#jqsshape"+shapeids[0]),replace="",slen=shapes.length,i;for(i=0;i<slen;i++){replace+=this["_draw"+shapes[i].type].apply(this,shapes[i].args)}existing[0].outerHTML=replace;for(i=1;i<shapeids.length;i++){$("#jqsshape"+shapeids[i]).remove()}},insertAfterShape:function(shapeid,shape){var existing=$("#jqsshape"+shapeid),vel=this["_draw"+shape.type].apply(this,shape.args);existing[0].insertAdjacentHTML("afterEnd",vel)},removeShapeId:function(shapeid){var existing=$("#jqsshape"+shapeid);this.group.removeChild(existing[0])},getShapeAt:function(el,x,y){var shapeid=el.id.substr(8);return shapeid},render:function(){if(!this.rendered){this.group.innerHTML=this.prerender;this.rendered=true}}})})})(document,Math);
