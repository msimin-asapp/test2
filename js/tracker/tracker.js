var e,t=function(e){try{return JSON.stringify(e)}catch(t){return e}};!function(e){e[e.CONNECTING=0]="CONNECTING",e[e.OPEN=1]="OPEN",e[e.CLOSING=2]="CLOSING",e[e.CLOSED=3]="CLOSED"}(e||(e={}));var n=function(e){this.url=e,this.events={connect:[],disconnect:[],message:[]},this.ws=null,this.reconnect()},r={status:{configurable:!0}};n.prototype.reconnect=function(){var t=this;this.ws&&this.ws.readyState!==e.CLOSED||(this.ws=new WebSocket(this.url),this.ws.onopen=function(){return t.events.connect.forEach(function(e){return e()})},this.ws.onclose=function(){t.events.disconnect.forEach(function(e){return e()}),setTimeout(function(){return t.reconnect()},1e3)},this.ws.onmessage=function(e){t.events.message.forEach(function(t){return t(function(e){try{return JSON.parse(e)}catch(t){return e}}(e.data),e)})})},r.status.get=function(){return this.ws?this.ws.readyState:e.CLOSED},n.prototype.on=function(e,t){if(!this.events[e])throw new Error('Event "'+e+'" not supported');return this.events[e].push(t),this},n.prototype.send=function(n){if(!this.ws||this.status!==e.OPEN)throw new Error("WebSock is not connected");return this.ws.send(t(n)),this},Object.defineProperties(n.prototype,r);var o="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function i(e,t){return e(t={exports:{}},t.exports),t.exports}i(function(e,t){var n;n=function(e){var t={},n={href:e.location.href||null,userAgent:window.navigator&&window.navigator.userAgent?window.navigator.userAgent:null,version:"0.1.2"},r={absolutePaths:["action","data","href","src"],attributes:!0,computedStyle:!1,cull:!0,deep:!0,domProperties:!0,filter:!1,htmlOnly:!1,metadata:!0,serialProperties:!1,stringify:!1,allowDangerousElements:!1},o={noMeta:!1,allowDangerousElements:!1},i=["link","script"],s=["nodeType","nodeValue","tagName"],u=["attributes","childNodes","children","classList","dataset","style"],a=["innerHTML","innerText","outerHTML","outerText","prefix","text","textContent","wholeText"],c=function(e){if(!arguments.length)return arguments[0]||{};for(var t in arguments[1])e[t]=arguments[1][t];if(arguments.length>2){var n=[e].concat(Array.prototype.slice.call(arguments,2));return c.apply(null,n)}return e},l=function(){if(!arguments.length)return[];for(var e=Array.prototype.concat.apply([],arguments),t=0;t<e.length;t++)e.indexOf(e[t])<t&&(e.splice(t,1),t--);return e},f=function(e){if(e instanceof Array)return e.slice();var t={};for(var n in e)t[n]=e[n];return t},p=function(e,t){var n;if(e instanceof Array)n=l(e.filter(function(e){return t.indexOf(e)>-1}));else for(var r in n={},t)e.hasOwnProperty(t[r])&&(n[t[r]]=e[t[r]]);return n},d=function(e,t){var n;if(e instanceof Array)n=l(e.filter(function(e){return-1===t.indexOf(e)}));else{for(var r in n={},e)n[r]=e[r];for(var o in t)n.hasOwnProperty(t[o])&&delete n[t[o]]}return n},h=function(e,t){return!1===t?e instanceof Array?[]:{}:t instanceof Array&&t.length?"boolean"==typeof t[0]?1==t.length&&"boolean"==typeof t[0]?!0===t[0]?f(e):e instanceof Array?[]:{}:!0===t[0]?d(e,t.slice(1)):p(e,t.slice(1)):p(e,t):f(e)},g=function(e){var t;return"boolean"==typeof e?e:"object"==typeof e&&null!==e?e instanceof Array?e.filter(function(e,t){return"string"==typeof e||0===t&&!0===e}):e.values instanceof Array&&!!(t=e.values.filter(function(e){return"string"==typeof e})).length&&(e.exclude&&t.unshift(e.exclude),t):!!e},y=function(e,t){var n,r,o;if(e.match(/(?:^data\:|^[\w\-\+\.]*?\:\/\/|^\/\/)/i))return e;if("/"===e.charAt(0))return t+e.substr(1);r=((n=t.indexOf("://")>-1?t.substring(0,t.indexOf("://")+3):"").length?t.substring(n.length):t).split("/"),o=e.split("/"),r.pop();for(var i=0;i<o.length;i++)"."!=o[i]&&(".."==o[i]?r.length>1&&r.pop():r.push(o[i]));return n+r.join("/")},m=function(t,n,r){var o,s,u,a,c,l=function(e,t){var n={};for(var r in e)void 0!==e[r]&&"function"!=typeof e[r]&&r.charAt(0).toLowerCase()===r.charAt(0)&&("object"!=typeof e[r]||e[r]instanceof Array)&&(t.cull?(e[r]||0===e[r]||!1===e[r])&&(n[r]=e[r]):n[r]=e[r]);return h(n,t.domProperties)}(t,n);if(1===t.nodeType){if(!n.allowDangerousElements)for(var f in i)if(t.tagName.toLowerCase()===i[f])return null}else if(3===t.nodeType&&!t.nodeValue.trim())return null;if(n.attributes&&t.attributes&&(l.attributes=function(e,t){for(var n,r={},o=e.attributes,i=o.length,s=0;s<i;s++)r[o[s].name]=o[s].value;for(var s in r=t.attributes?h(r,t.attributes):null,n=h(r,t.absolutePaths))r[s]=y(n[s],t.absoluteBase);return r}(t,n)),n.computedStyle&&(o=function(t,n){var r,o={};if(!(n.computedStyle&&t.style instanceof CSSStyleDeclaration))return null;for(var i in r=e.getComputedStyle(t))"cssText"!==i&&!i.match(/\d/)&&"string"==typeof r[i]&&r[i].length&&(o[i]=r[i]);return n.computedStyle instanceof Array?h(o,n.computedStyle):o}(t,n))&&(l.style=o),!0===n.deep||"number"==typeof n.deep&&n.deep>r){c=[],u=(s=n.htmlOnly?t.children:t.childNodes).length;for(var p=0;p<u;p++)(a=m(s[p],n,r+1))&&c.push(a);l.childNodes=c}return l};t.toJSON=function(t,o){var i,f={},h={},y=(new Date).getTime(),v=s.slice(),w=u.slice();return(f=c({},r,o)).absolutePaths=g(f.absolutePaths),f.attributes=g(f.attributes),f.computedStyle=g(f.computedStyle),f.domProperties=g(f.domProperties),f.serialProperties=g(f.serialProperties),f.absoluteBase=e.location.origin+"/",!0!==f.serialProperties&&(w=f.serialProperties instanceof Array&&f.serialProperties.length?w.concat(!0===f.serialProperties[0]?d(a,f.serialProperties):p(a,f.serialProperties)):w.concat(a)),f.domProperties=f.domProperties instanceof Array?!0===f.domProperties[0]?d(l(f.domProperties,w),v):d(l(f.domProperties,v),w):!1===f.domProperties?v:[!0].concat(w),i=m(t,f,0),f.metadata?(h.meta=c({},n,{clock:(new Date).getTime()-y,date:(new Date).toISOString(),dimensions:{inner:{x:window.innerWidth,y:window.innerHeight},outer:{x:window.outerWidth,y:window.outerHeight}},options:f}),h.node=i):h=i,f.stringify?JSON.stringify(h):h};var v=function(e,t,n,r){if(!e.nodeType)return!1;if(1===e.nodeType&&!r.allowDangerousElements)for(var o in i)if(e.tagName.toLowerCase()===i[o])return!1;var s=function(t,n,r){switch(n instanceof DocumentFragment&&(n=n.ownerDocument),e.nodeType){case 1:return"string"==typeof r.tagName&&n.createElement(r.tagName);case 3:return n.createTextNode("string"==typeof r.nodeValue&&r.nodeValue.length?r.nodeValue:"");case 7:return!(!r.hasOwnProperty("target")||!r.hasOwnProperty("data"))&&n.createProcessingInstruction(r.target,r.data);case 8:return n.createComment("string"==typeof r.nodeValue?r.nodeValue:"");case 9:return n.implementation.createHTMLDocument(r);case 11:return n;default:return!1}}(0,n,e);for(var u in t.appendChild(s),e)if("object"!=typeof e[u]&&"isContentEditable"!==u&&"childNodes"!==u)try{s[u]=e[u]}catch(e){continue}if(1===e.nodeType&&e.tagName&&e.attributes)for(var a in e.attributes)s.setAttribute(a,e.attributes[a]);if(e.childNodes&&e.childNodes.length)for(var c in e.childNodes)v(e.childNodes[c],s,n,r)};return t.toDOM=function(e,t){var n,r;return"string"==typeof e&&(e=JSON.parse(e)),n=c({},o,t),r=document.createDocumentFragment(),v(n.noMeta?e:e.node,r,r,n),r},t.__extend=c,t.__unique=l,t.__copy=f,t.__boolFilter=h,t.__boolInter=p,t.__boolDiff=d,t.__toShorthand=g,t}(o),e.exports&&(e.exports=n)});var s=i(function(e){!function(t){var n,r,o,i,s,u,a,c,l,f,p,d,h,g,y,m,v,w,b,N="sizzle"+1*new Date,E=t.document,S=0,x=0,C=ue(),T=ue(),A=ue(),L=function(e,t){return e===t&&(p=!0),0},D={}.hasOwnProperty,I=[],P=I.pop,_=I.push,O=I.push,k=I.slice,R=function(e,t){for(var n=0,r=e.length;n<r;n++)if(e[n]===t)return n;return-1},q="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",B="[\\x20\\t\\r\\n\\f]",M="(?:\\\\.|[\\w-]|[^\0-\\xa0])+",j="\\["+B+"*("+M+")(?:"+B+"*([*^$|!~]?=)"+B+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+M+"))|)"+B+"*\\]",H=":("+M+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+j+")*)|.*)\\)|)",$=new RegExp(B+"+","g"),V=new RegExp("^"+B+"+|((?:^|[^\\\\])(?:\\\\.)*)"+B+"+$","g"),F=new RegExp("^"+B+"*,"+B+"*"),U=new RegExp("^"+B+"*([>+~]|"+B+")"+B+"*"),z=new RegExp("="+B+"*([^\\]'\"]*?)"+B+"*\\]","g"),G=new RegExp(H),J=new RegExp("^"+M+"$"),W={ID:new RegExp("^#("+M+")"),CLASS:new RegExp("^\\.("+M+")"),TAG:new RegExp("^("+M+"|[*])"),ATTR:new RegExp("^"+j),PSEUDO:new RegExp("^"+H),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+B+"*(even|odd|(([+-]|)(\\d*)n|)"+B+"*(?:([+-]|)"+B+"*(\\d+)|))"+B+"*\\)|)","i"),bool:new RegExp("^(?:"+q+")$","i"),needsContext:new RegExp("^"+B+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+B+"*((?:-\\d)?\\d*)"+B+"*\\)|)(?=[^-]|$)","i")},K=/^(?:input|select|textarea|button)$/i,X=/^h\d$/i,Q=/^[^{]+\{\s*\[native \w/,Y=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,Z=/[+~]/,ee=new RegExp("\\\\([\\da-f]{1,6}"+B+"?|("+B+")|.)","ig"),te=function(e,t,n){var r="0x"+t-65536;return r!=r||n?t:r<0?String.fromCharCode(r+65536):String.fromCharCode(r>>10|55296,1023&r|56320)},ne=/([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,re=function(e,t){return t?"\0"===e?"�":e.slice(0,-1)+"\\"+e.charCodeAt(e.length-1).toString(16)+" ":"\\"+e},oe=function(){d()},ie=we(function(e){return!0===e.disabled&&("form"in e||"label"in e)},{dir:"parentNode",next:"legend"});try{O.apply(I=k.call(E.childNodes),E.childNodes)}catch(e){O={apply:I.length?function(e,t){_.apply(e,k.call(t))}:function(e,t){for(var n=e.length,r=0;e[n++]=t[r++];);e.length=n-1}}}function se(e,t,n,o){var i,s,a,l,f,p,g,v=t&&t.ownerDocument,w=t?t.nodeType:9;if(n=n||[],"string"!=typeof e||!e||1!==w&&9!==w&&11!==w)return n;if(!o&&((t?t.ownerDocument||t:E)!==h&&d(t),t=t||h,y)){if(11!==w&&(f=Y.exec(e)))if(i=f[1]){if(9===w){if(!(a=t.getElementById(i)))return n;if(a.id===i)return n.push(a),n}else if(v&&(a=v.getElementById(i))&&b(t,a)&&a.id===i)return n.push(a),n}else{if(f[2])return O.apply(n,t.getElementsByTagName(e)),n;if((i=f[3])&&r.getElementsByClassName&&t.getElementsByClassName)return O.apply(n,t.getElementsByClassName(i)),n}if(r.qsa&&!A[e+" "]&&(!m||!m.test(e))){if(1!==w)v=t,g=e;else if("object"!==t.nodeName.toLowerCase()){for((l=t.getAttribute("id"))?l=l.replace(ne,re):t.setAttribute("id",l=N),s=(p=u(e)).length;s--;)p[s]="#"+l+" "+ve(p[s]);g=p.join(","),v=Z.test(e)&&ye(t.parentNode)||t}if(g)try{return O.apply(n,v.querySelectorAll(g)),n}catch(e){}finally{l===N&&t.removeAttribute("id")}}}return c(e.replace(V,"$1"),t,n,o)}function ue(){var e=[];return function t(n,r){return e.push(n+" ")>o.cacheLength&&delete t[e.shift()],t[n+" "]=r}}function ae(e){return e[N]=!0,e}function ce(e){var t=h.createElement("fieldset");try{return!!e(t)}catch(e){return!1}finally{t.parentNode&&t.parentNode.removeChild(t),t=null}}function le(e,t){for(var n=e.split("|"),r=n.length;r--;)o.attrHandle[n[r]]=t}function fe(e,t){var n=t&&e,r=n&&1===e.nodeType&&1===t.nodeType&&e.sourceIndex-t.sourceIndex;if(r)return r;if(n)for(;n=n.nextSibling;)if(n===t)return-1;return e?1:-1}function pe(e){return function(t){return"input"===t.nodeName.toLowerCase()&&t.type===e}}function de(e){return function(t){var n=t.nodeName.toLowerCase();return("input"===n||"button"===n)&&t.type===e}}function he(e){return function(t){return"form"in t?t.parentNode&&!1===t.disabled?"label"in t?"label"in t.parentNode?t.parentNode.disabled===e:t.disabled===e:t.isDisabled===e||t.isDisabled!==!e&&ie(t)===e:t.disabled===e:"label"in t&&t.disabled===e}}function ge(e){return ae(function(t){return t=+t,ae(function(n,r){for(var o,i=e([],n.length,t),s=i.length;s--;)n[o=i[s]]&&(n[o]=!(r[o]=n[o]))})})}function ye(e){return e&&void 0!==e.getElementsByTagName&&e}for(n in r=se.support={},s=se.isXML=function(e){var t=e&&(e.ownerDocument||e).documentElement;return!!t&&"HTML"!==t.nodeName},d=se.setDocument=function(e){var t,n,i=e?e.ownerDocument||e:E;return i!==h&&9===i.nodeType&&i.documentElement?(g=(h=i).documentElement,y=!s(h),E!==h&&(n=h.defaultView)&&n.top!==n&&(n.addEventListener?n.addEventListener("unload",oe,!1):n.attachEvent&&n.attachEvent("onunload",oe)),r.attributes=ce(function(e){return e.className="i",!e.getAttribute("className")}),r.getElementsByTagName=ce(function(e){return e.appendChild(h.createComment("")),!e.getElementsByTagName("*").length}),r.getElementsByClassName=Q.test(h.getElementsByClassName),r.getById=ce(function(e){return g.appendChild(e).id=N,!h.getElementsByName||!h.getElementsByName(N).length}),r.getById?(o.filter.ID=function(e){var t=e.replace(ee,te);return function(e){return e.getAttribute("id")===t}},o.find.ID=function(e,t){if(void 0!==t.getElementById&&y){var n=t.getElementById(e);return n?[n]:[]}}):(o.filter.ID=function(e){var t=e.replace(ee,te);return function(e){var n=void 0!==e.getAttributeNode&&e.getAttributeNode("id");return n&&n.value===t}},o.find.ID=function(e,t){if(void 0!==t.getElementById&&y){var n,r,o,i=t.getElementById(e);if(i){if((n=i.getAttributeNode("id"))&&n.value===e)return[i];for(o=t.getElementsByName(e),r=0;i=o[r++];)if((n=i.getAttributeNode("id"))&&n.value===e)return[i]}return[]}}),o.find.TAG=r.getElementsByTagName?function(e,t){return void 0!==t.getElementsByTagName?t.getElementsByTagName(e):r.qsa?t.querySelectorAll(e):void 0}:function(e,t){var n,r=[],o=0,i=t.getElementsByTagName(e);if("*"===e){for(;n=i[o++];)1===n.nodeType&&r.push(n);return r}return i},o.find.CLASS=r.getElementsByClassName&&function(e,t){if(void 0!==t.getElementsByClassName&&y)return t.getElementsByClassName(e)},v=[],m=[],(r.qsa=Q.test(h.querySelectorAll))&&(ce(function(e){g.appendChild(e).innerHTML="<a id='"+N+"'></a><select id='"+N+"-\r\\' msallowcapture=''><option selected=''></option></select>",e.querySelectorAll("[msallowcapture^='']").length&&m.push("[*^$]="+B+"*(?:''|\"\")"),e.querySelectorAll("[selected]").length||m.push("\\["+B+"*(?:value|"+q+")"),e.querySelectorAll("[id~="+N+"-]").length||m.push("~="),e.querySelectorAll(":checked").length||m.push(":checked"),e.querySelectorAll("a#"+N+"+*").length||m.push(".#.+[+~]")}),ce(function(e){e.innerHTML="<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";var t=h.createElement("input");t.setAttribute("type","hidden"),e.appendChild(t).setAttribute("name","D"),e.querySelectorAll("[name=d]").length&&m.push("name"+B+"*[*^$|!~]?="),2!==e.querySelectorAll(":enabled").length&&m.push(":enabled",":disabled"),g.appendChild(e).disabled=!0,2!==e.querySelectorAll(":disabled").length&&m.push(":enabled",":disabled"),e.querySelectorAll("*,:x"),m.push(",.*:")})),(r.matchesSelector=Q.test(w=g.matches||g.webkitMatchesSelector||g.mozMatchesSelector||g.oMatchesSelector||g.msMatchesSelector))&&ce(function(e){r.disconnectedMatch=w.call(e,"*"),w.call(e,"[s!='']:x"),v.push("!=",H)}),m=m.length&&new RegExp(m.join("|")),v=v.length&&new RegExp(v.join("|")),t=Q.test(g.compareDocumentPosition),b=t||Q.test(g.contains)?function(e,t){var n=9===e.nodeType?e.documentElement:e,r=t&&t.parentNode;return e===r||!(!r||1!==r.nodeType||!(n.contains?n.contains(r):e.compareDocumentPosition&&16&e.compareDocumentPosition(r)))}:function(e,t){if(t)for(;t=t.parentNode;)if(t===e)return!0;return!1},L=t?function(e,t){if(e===t)return p=!0,0;var n=!e.compareDocumentPosition-!t.compareDocumentPosition;return n||(1&(n=(e.ownerDocument||e)===(t.ownerDocument||t)?e.compareDocumentPosition(t):1)||!r.sortDetached&&t.compareDocumentPosition(e)===n?e===h||e.ownerDocument===E&&b(E,e)?-1:t===h||t.ownerDocument===E&&b(E,t)?1:f?R(f,e)-R(f,t):0:4&n?-1:1)}:function(e,t){if(e===t)return p=!0,0;var n,r=0,o=e.parentNode,i=t.parentNode,s=[e],u=[t];if(!o||!i)return e===h?-1:t===h?1:o?-1:i?1:f?R(f,e)-R(f,t):0;if(o===i)return fe(e,t);for(n=e;n=n.parentNode;)s.unshift(n);for(n=t;n=n.parentNode;)u.unshift(n);for(;s[r]===u[r];)r++;return r?fe(s[r],u[r]):s[r]===E?-1:u[r]===E?1:0},h):h},se.matches=function(e,t){return se(e,null,null,t)},se.matchesSelector=function(e,t){if((e.ownerDocument||e)!==h&&d(e),t=t.replace(z,"='$1']"),r.matchesSelector&&y&&!A[t+" "]&&(!v||!v.test(t))&&(!m||!m.test(t)))try{var n=w.call(e,t);if(n||r.disconnectedMatch||e.document&&11!==e.document.nodeType)return n}catch(e){}return se(t,h,null,[e]).length>0},se.contains=function(e,t){return(e.ownerDocument||e)!==h&&d(e),b(e,t)},se.attr=function(e,t){(e.ownerDocument||e)!==h&&d(e);var n=o.attrHandle[t.toLowerCase()],i=n&&D.call(o.attrHandle,t.toLowerCase())?n(e,t,!y):void 0;return void 0!==i?i:r.attributes||!y?e.getAttribute(t):(i=e.getAttributeNode(t))&&i.specified?i.value:null},se.escape=function(e){return(e+"").replace(ne,re)},se.error=function(e){throw new Error("Syntax error, unrecognized expression: "+e)},se.uniqueSort=function(e){var t,n=[],o=0,i=0;if(p=!r.detectDuplicates,f=!r.sortStable&&e.slice(0),e.sort(L),p){for(;t=e[i++];)t===e[i]&&(o=n.push(i));for(;o--;)e.splice(n[o],1)}return f=null,e},i=se.getText=function(e){var t,n="",r=0,o=e.nodeType;if(o){if(1===o||9===o||11===o){if("string"==typeof e.textContent)return e.textContent;for(e=e.firstChild;e;e=e.nextSibling)n+=i(e)}else if(3===o||4===o)return e.nodeValue}else for(;t=e[r++];)n+=i(t);return n},(o=se.selectors={cacheLength:50,createPseudo:ae,match:W,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(e){return e[1]=e[1].replace(ee,te),e[3]=(e[3]||e[4]||e[5]||"").replace(ee,te),"~="===e[2]&&(e[3]=" "+e[3]+" "),e.slice(0,4)},CHILD:function(e){return e[1]=e[1].toLowerCase(),"nth"===e[1].slice(0,3)?(e[3]||se.error(e[0]),e[4]=+(e[4]?e[5]+(e[6]||1):2*("even"===e[3]||"odd"===e[3])),e[5]=+(e[7]+e[8]||"odd"===e[3])):e[3]&&se.error(e[0]),e},PSEUDO:function(e){var t,n=!e[6]&&e[2];return W.CHILD.test(e[0])?null:(e[3]?e[2]=e[4]||e[5]||"":n&&G.test(n)&&(t=u(n,!0))&&(t=n.indexOf(")",n.length-t)-n.length)&&(e[0]=e[0].slice(0,t),e[2]=n.slice(0,t)),e.slice(0,3))}},filter:{TAG:function(e){var t=e.replace(ee,te).toLowerCase();return"*"===e?function(){return!0}:function(e){return e.nodeName&&e.nodeName.toLowerCase()===t}},CLASS:function(e){var t=C[e+" "];return t||(t=new RegExp("(^|"+B+")"+e+"("+B+"|$)"))&&C(e,function(e){return t.test("string"==typeof e.className&&e.className||void 0!==e.getAttribute&&e.getAttribute("class")||"")})},ATTR:function(e,t,n){return function(r){var o=se.attr(r,e);return null==o?"!="===t:!t||(o+="","="===t?o===n:"!="===t?o!==n:"^="===t?n&&0===o.indexOf(n):"*="===t?n&&o.indexOf(n)>-1:"$="===t?n&&o.slice(-n.length)===n:"~="===t?(" "+o.replace($," ")+" ").indexOf(n)>-1:"|="===t&&(o===n||o.slice(0,n.length+1)===n+"-"))}},CHILD:function(e,t,n,r,o){var i="nth"!==e.slice(0,3),s="last"!==e.slice(-4),u="of-type"===t;return 1===r&&0===o?function(e){return!!e.parentNode}:function(t,n,a){var c,l,f,p,d,h,g=i!==s?"nextSibling":"previousSibling",y=t.parentNode,m=u&&t.nodeName.toLowerCase(),v=!a&&!u,w=!1;if(y){if(i){for(;g;){for(p=t;p=p[g];)if(u?p.nodeName.toLowerCase()===m:1===p.nodeType)return!1;h=g="only"===e&&!h&&"nextSibling"}return!0}if(h=[s?y.firstChild:y.lastChild],s&&v){for(w=(d=(c=(l=(f=(p=y)[N]||(p[N]={}))[p.uniqueID]||(f[p.uniqueID]={}))[e]||[])[0]===S&&c[1])&&c[2],p=d&&y.childNodes[d];p=++d&&p&&p[g]||(w=d=0)||h.pop();)if(1===p.nodeType&&++w&&p===t){l[e]=[S,d,w];break}}else if(v&&(w=d=(c=(l=(f=(p=t)[N]||(p[N]={}))[p.uniqueID]||(f[p.uniqueID]={}))[e]||[])[0]===S&&c[1]),!1===w)for(;(p=++d&&p&&p[g]||(w=d=0)||h.pop())&&((u?p.nodeName.toLowerCase()!==m:1!==p.nodeType)||!++w||(v&&((l=(f=p[N]||(p[N]={}))[p.uniqueID]||(f[p.uniqueID]={}))[e]=[S,w]),p!==t)););return(w-=o)===r||w%r==0&&w/r>=0}}},PSEUDO:function(e,t){var n,r=o.pseudos[e]||o.setFilters[e.toLowerCase()]||se.error("unsupported pseudo: "+e);return r[N]?r(t):r.length>1?(n=[e,e,"",t],o.setFilters.hasOwnProperty(e.toLowerCase())?ae(function(e,n){for(var o,i=r(e,t),s=i.length;s--;)e[o=R(e,i[s])]=!(n[o]=i[s])}):function(e){return r(e,0,n)}):r}},pseudos:{not:ae(function(e){var t=[],n=[],r=a(e.replace(V,"$1"));return r[N]?ae(function(e,t,n,o){for(var i,s=r(e,null,o,[]),u=e.length;u--;)(i=s[u])&&(e[u]=!(t[u]=i))}):function(e,o,i){return t[0]=e,r(t,null,i,n),t[0]=null,!n.pop()}}),has:ae(function(e){return function(t){return se(e,t).length>0}}),contains:ae(function(e){return e=e.replace(ee,te),function(t){return(t.textContent||t.innerText||i(t)).indexOf(e)>-1}}),lang:ae(function(e){return J.test(e||"")||se.error("unsupported lang: "+e),e=e.replace(ee,te).toLowerCase(),function(t){var n;do{if(n=y?t.lang:t.getAttribute("xml:lang")||t.getAttribute("lang"))return(n=n.toLowerCase())===e||0===n.indexOf(e+"-")}while((t=t.parentNode)&&1===t.nodeType);return!1}}),target:function(e){var n=t.location&&t.location.hash;return n&&n.slice(1)===e.id},root:function(e){return e===g},focus:function(e){return e===h.activeElement&&(!h.hasFocus||h.hasFocus())&&!!(e.type||e.href||~e.tabIndex)},enabled:he(!1),disabled:he(!0),checked:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&!!e.checked||"option"===t&&!!e.selected},selected:function(e){return!0===e.selected},empty:function(e){for(e=e.firstChild;e;e=e.nextSibling)if(e.nodeType<6)return!1;return!0},parent:function(e){return!o.pseudos.empty(e)},header:function(e){return X.test(e.nodeName)},input:function(e){return K.test(e.nodeName)},button:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&"button"===e.type||"button"===t},text:function(e){var t;return"input"===e.nodeName.toLowerCase()&&"text"===e.type&&(null==(t=e.getAttribute("type"))||"text"===t.toLowerCase())},first:ge(function(){return[0]}),last:ge(function(e,t){return[t-1]}),eq:ge(function(e,t,n){return[n<0?n+t:n]}),even:ge(function(e,t){for(var n=0;n<t;n+=2)e.push(n);return e}),odd:ge(function(e,t){for(var n=1;n<t;n+=2)e.push(n);return e}),lt:ge(function(e,t,n){for(var r=n<0?n+t:n;--r>=0;)e.push(r);return e}),gt:ge(function(e,t,n){for(var r=n<0?n+t:n;++r<t;)e.push(r);return e})}}).pseudos.nth=o.pseudos.eq,{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})o.pseudos[n]=pe(n);for(n in{submit:!0,reset:!0})o.pseudos[n]=de(n);function me(){}function ve(e){for(var t=0,n=e.length,r="";t<n;t++)r+=e[t].value;return r}function we(e,t,n){var r=t.dir,o=t.next,i=o||r,s=n&&"parentNode"===i,u=x++;return t.first?function(t,n,o){for(;t=t[r];)if(1===t.nodeType||s)return e(t,n,o);return!1}:function(t,n,a){var c,l,f,p=[S,u];if(a){for(;t=t[r];)if((1===t.nodeType||s)&&e(t,n,a))return!0}else for(;t=t[r];)if(1===t.nodeType||s)if(l=(f=t[N]||(t[N]={}))[t.uniqueID]||(f[t.uniqueID]={}),o&&o===t.nodeName.toLowerCase())t=t[r]||t;else{if((c=l[i])&&c[0]===S&&c[1]===u)return p[2]=c[2];if(l[i]=p,p[2]=e(t,n,a))return!0}return!1}}function be(e){return e.length>1?function(t,n,r){for(var o=e.length;o--;)if(!e[o](t,n,r))return!1;return!0}:e[0]}function Ne(e,t,n,r,o){for(var i,s=[],u=0,a=e.length,c=null!=t;u<a;u++)(i=e[u])&&(n&&!n(i,r,o)||(s.push(i),c&&t.push(u)));return s}function Ee(e,t,n,r,o,i){return r&&!r[N]&&(r=Ee(r)),o&&!o[N]&&(o=Ee(o,i)),ae(function(i,s,u,a){var c,l,f,p=[],d=[],h=s.length,g=i||function(e,t,n){for(var r=0,o=t.length;r<o;r++)se(e,t[r],n);return n}(t||"*",u.nodeType?[u]:u,[]),y=!e||!i&&t?g:Ne(g,p,e,u,a),m=n?o||(i?e:h||r)?[]:s:y;if(n&&n(y,m,u,a),r)for(c=Ne(m,d),r(c,[],u,a),l=c.length;l--;)(f=c[l])&&(m[d[l]]=!(y[d[l]]=f));if(i){if(o||e){if(o){for(c=[],l=m.length;l--;)(f=m[l])&&c.push(y[l]=f);o(null,m=[],c,a)}for(l=m.length;l--;)(f=m[l])&&(c=o?R(i,f):p[l])>-1&&(i[c]=!(s[c]=f))}}else m=Ne(m===s?m.splice(h,m.length):m),o?o(null,s,m,a):O.apply(s,m)})}function Se(e){for(var t,n,r,i=e.length,s=o.relative[e[0].type],u=s||o.relative[" "],a=s?1:0,c=we(function(e){return e===t},u,!0),f=we(function(e){return R(t,e)>-1},u,!0),p=[function(e,n,r){var o=!s&&(r||n!==l)||((t=n).nodeType?c(e,n,r):f(e,n,r));return t=null,o}];a<i;a++)if(n=o.relative[e[a].type])p=[we(be(p),n)];else{if((n=o.filter[e[a].type].apply(null,e[a].matches))[N]){for(r=++a;r<i&&!o.relative[e[r].type];r++);return Ee(a>1&&be(p),a>1&&ve(e.slice(0,a-1).concat({value:" "===e[a-2].type?"*":""})).replace(V,"$1"),n,a<r&&Se(e.slice(a,r)),r<i&&Se(e=e.slice(r)),r<i&&ve(e))}p.push(n)}return be(p)}me.prototype=o.filters=o.pseudos,o.setFilters=new me,u=se.tokenize=function(e,t){var n,r,i,s,u,a,c,l=T[e+" "];if(l)return t?0:l.slice(0);for(u=e,a=[],c=o.preFilter;u;){for(s in n&&!(r=F.exec(u))||(r&&(u=u.slice(r[0].length)||u),a.push(i=[])),n=!1,(r=U.exec(u))&&(n=r.shift(),i.push({value:n,type:r[0].replace(V," ")}),u=u.slice(n.length)),o.filter)!(r=W[s].exec(u))||c[s]&&!(r=c[s](r))||(n=r.shift(),i.push({value:n,type:s,matches:r}),u=u.slice(n.length));if(!n)break}return t?u.length:u?se.error(e):T(e,a).slice(0)},a=se.compile=function(e,t){var n,r=[],i=[],s=A[e+" "];if(!s){for(t||(t=u(e)),n=t.length;n--;)(s=Se(t[n]))[N]?r.push(s):i.push(s);(s=A(e,function(e,t){var n=t.length>0,r=e.length>0,i=function(i,s,u,a,c){var f,p,g,m=0,v="0",w=i&&[],b=[],N=l,E=i||r&&o.find.TAG("*",c),x=S+=null==N?1:Math.random()||.1,C=E.length;for(c&&(l=s===h||s||c);v!==C&&null!=(f=E[v]);v++){if(r&&f){for(p=0,s||f.ownerDocument===h||(d(f),u=!y);g=e[p++];)if(g(f,s||h,u)){a.push(f);break}c&&(S=x)}n&&((f=!g&&f)&&m--,i&&w.push(f))}if(m+=v,n&&v!==m){for(p=0;g=t[p++];)g(w,b,s,u);if(i){if(m>0)for(;v--;)w[v]||b[v]||(b[v]=P.call(a));b=Ne(b)}O.apply(a,b),c&&!i&&b.length>0&&m+t.length>1&&se.uniqueSort(a)}return c&&(S=x,l=N),w};return n?ae(i):i}(i,r))).selector=e}return s},c=se.select=function(e,t,n,r){var i,s,c,l,f,p="function"==typeof e&&e,d=!r&&u(e=p.selector||e);if(n=n||[],1===d.length){if((s=d[0]=d[0].slice(0)).length>2&&"ID"===(c=s[0]).type&&9===t.nodeType&&y&&o.relative[s[1].type]){if(!(t=(o.find.ID(c.matches[0].replace(ee,te),t)||[])[0]))return n;p&&(t=t.parentNode),e=e.slice(s.shift().value.length)}for(i=W.needsContext.test(e)?0:s.length;i--&&!o.relative[l=(c=s[i]).type];)if((f=o.find[l])&&(r=f(c.matches[0].replace(ee,te),Z.test(s[0].type)&&ye(t.parentNode)||t))){if(s.splice(i,1),!(e=r.length&&ve(s)))return O.apply(n,r),n;break}}return(p||a(e,d))(r,t,!y,n,!t||Z.test(e)&&ye(t.parentNode)||t),n},r.sortStable=N.split("").sort(L).join("")===N,r.detectDuplicates=!!p,d(),r.sortDetached=ce(function(e){return 1&e.compareDocumentPosition(h.createElement("fieldset"))}),ce(function(e){return e.innerHTML="<a href='#'></a>","#"===e.firstChild.getAttribute("href")})||le("type|href|height|width",function(e,t,n){if(!n)return e.getAttribute(t,"type"===t.toLowerCase()?1:2)}),r.attributes&&ce(function(e){return e.innerHTML="<input/>",e.firstChild.setAttribute("value",""),""===e.firstChild.getAttribute("value")})||le("value",function(e,t,n){if(!n&&"input"===e.nodeName.toLowerCase())return e.defaultValue}),ce(function(e){return null==e.getAttribute("disabled")})||le(q,function(e,t,n){var r;if(!n)return!0===e[t]?t.toLowerCase():(r=e.getAttributeNode(t))&&r.specified?r.value:null});var xe=t.Sizzle;se.noConflict=function(){return t.Sizzle===se&&(t.Sizzle=xe),se},e.exports?e.exports=se:t.Sizzle=se}(window)}),u=function(e){for(var t=[];null!=e.parentNode;){var n=e.nodeName.toLowerCase(),r=e.classList.length>0?"."+Array.prototype.slice.call(e.classList).join("."):"",o=Array.prototype.slice.call(e.attributes).reduce(function(e,t){return/id|class|style/.test(t.name)||e.push("["+t.name+"='"+t.value+"']"),e},[]);e.hasAttribute("id")&&""!==e.id&&(n+="#"+e.id),t.unshift(n+r+o.join("")),e=e.parentNode}return t.slice(2)},a=function(e){var t=s(e).pop();return{target:t||null,isVisible:function(){return this.target.offsetWidth>0&&this.target.offsetHeight>0},click:function(){if(!this.target)throw new Error("click target does not exist");this.target.click()},scrollTo:function(){if(!this.target)throw new Error("scrollTo target does not exist");this.target.scrollIntoView({behavior:"smooth",block:"center",inline:"nearest"})},focus:function(){if(!this.target)throw new Error("focus target does not exist");this.scrollTo(),this.target.focus()},blur:function(){if(!this.target)throw new Error("blur target does not exist");this.target.blur()},setValue:function(e){if(!this.target)throw new Error("setValue target does not exist");this.target.value=e},keyPress:function(e,n){t.dispatchEvent(new KeyboardEvent("keypress",{key:e,keyCode:n}))},keyUp:function(e,n){t.dispatchEvent(new KeyboardEvent("keyup",{key:e,keyCode:n}))},keyDown:function(e,n){t.dispatchEvent(new KeyboardEvent("keydown",{key:e,keyCode:n}))},trigger:function(e){var n=document.createEvent("HTMLEvents");n.initEvent(e,!0,!1),t.dispatchEvent(n)}}},c=function(){this.enabled=!0,this.queue=[]};c.prototype.dequeue=function(){return this.queue.splice(0,this.queue.length)},c.prototype.eventTrack=function(e,t){var n={t:e,ts:Date.now(),tx:t.innerText,n:t.nodeName.toLowerCase(),c:t.className,p:u(t)};console.log(n.p.join(" ")),this.queue.push(n)};const l=function(){function e(){}return e.prototype.then=function(t,n){const r=new e,o=this.s;if(o){const e=1&o?t:n;if(e){try{f(r,1,e(this.v))}catch(e){f(r,2,e)}return r}return this}return this.o=function(e){try{const o=e.v;1&e.s?f(r,1,t?t(o):o):n?f(r,1,n(o)):f(r,2,o)}catch(e){f(r,2,e)}},r},e}();function f(e,t,n){if(!e.s){if(n instanceof l){if(!n.s)return void(n.o=f.bind(null,e,t));1&t&&(t=n.s),n=n.v}if(n&&n.then)return void n.then(f.bind(null,e,t),f.bind(null,e,2));e.s=t,e.v=n;const r=e.o;r&&r(e)}}function p(e,t){try{var n=e()}catch(e){return t(e)}return n&&n.then?n.then(void 0,t):n}const d={};!function(){function e(e){this._entry=e,this._pact=null,this._resolve=null,this._return=null,this._promise=null}function t(e){return{value:e,done:!0}}function n(e){return{value:e,done:!1}}e.prototype[Symbol.asyncIterator||(Symbol.asyncIterator=Symbol("Symbol.asyncIterator"))]=function(){return this},e.prototype._yield=function(e){return this._resolve(e&&e.then?e.then(n):n(e)),this._pact=new l},e.prototype.next=function(e){const n=this;return n._promise=new Promise(function(r){const o=n._pact;if(null===o){const e=n._entry;if(null===e)return r(n._promise);function i(e){n._resolve(e&&e.then?e.then(t):t(e)),n._pact=null,n._resolve=null}n._entry=null,n._resolve=r,e(n).then(i,function(e){if(e===d)i(n._return);else{const t=new l;n._resolve(t),n._pact=null,n._resolve=null,_resolve(t,2,e)}})}else n._pact=null,n._resolve=r,f(o,1,e)})},e.prototype.return=function(e){const n=this;return n._promise=new Promise(function(r){const o=n._pact;if(null===o)return null===n._entry?r(n._promise):(n._entry=null,r(e&&e.then?e.then(t):t(e)));n._return=e,n._resolve=r,n._pact=null,f(o,2,d)})},e.prototype.throw=function(e){const t=this;return t._promise=new Promise(function(n,r){const o=t._pact;if(null===o)return null===t._entry?n(t._promise):(t._entry=null,r(e));t._resolve=n,t._pact=null,f(o,2,e)})}}();var h=function(e,t){return(""+e).replace(/\$\{([^}]+)\}/g,function(e,n){return function(e,r){for(var o=t,i=0,s=n.split(".");i<s.length;i+=1)o=o[s[i]];return o}()||""})},g=function(e){this.steps=[],this.args=null,this.events={end:[],error:[]},this.isRunning=!1,this.currentActionId="",this.apiURL=e};g.prototype.saveState=function(){sessionStorage.setItem("crml-automator-state",btoa(JSON.stringify({currentActionId:this.currentActionId,args:this.args,steps:this.steps})))},g.prototype.restoreState=function(){var e=sessionStorage.getItem("crml-automator-state");if(e){var t=JSON.parse(atob(e)),n=t.steps,r=t.args;this.currentActionId=t.currentActionId,this.args=r,this.steps=n}},g.prototype.clearState=function(){sessionStorage.removeItem("crml-automator-state")},g.prototype.getActionSteps=function(e){try{var t=this;return p(function(){return Promise.resolve(fetch(t.apiURL+"/scripts/"+e)).then(function(e){return e.json()})},function(e){throw e})}catch(e){return Promise.reject(e)}},g.prototype.getDomPath=function(e,n,r){try{var o=this;return p(function(){var e=document.body.outerHTML;return Promise.resolve(fetch(o.apiURL+"/dom",{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:t({html:e,type:n,target:r})})).then(function(e){return Promise.resolve(e.json()).then(function(e){return e.path})})},function(e){throw e})}catch(e){return Promise.reject(e)}},g.prototype.playNextStep=function(e){var n=this;try{if(e)throw e;if(0===this.steps.length)return this.clearState(),void(this.isRunning=!1);this.saveState();var r=this.steps.shift(),o=r.type,i=r.target,s=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&-1===t.indexOf(r)&&(n[r]=e[r]);return n}(r,["type","target"]),u=document.body.outerHTML;Promise.resolve().then(function(){return i?fetch(n.apiURL+"/dom",{method:"POST",headers:{"content-type":"application/json"},body:t({html:u,type:o,target:i})}).then(function(e){return e.json()}).then(function(e){return e&&e.path||s.selector}):s.selector}).then(function(e){!1!==n.execAction(o,Object.assign({},s,{selector:e}))&&n.playNextStep()}).catch(function(e){throw e})}catch(e){this.clearState(),this.events.error.forEach(function(t){return t(e)})}},g.prototype.execAction=function(e,t){var n,r,o=this;switch(e){case"triggerAction":var i=t.actionId;return console.log('action "triggerAction"',i),this.getActionSteps(i).then(function(e){var t;(t=o.steps).splice.apply(t,[0,0].concat(e)),o.playNextStep()}).catch(function(e){throw e}),!1;case"click":var s=h(t.selector,this.args);console.log('action "click"',s),a(s).click();break;case"focus":var u=h(t.selector,this.args);console.log('action "focus"',u),a(u).focus();break;case"scrollTo":var c=h(t.selector,this.args);return console.log('action "scrollTo"',c),a(c).scrollTo(),setTimeout(function(){return o.playNextStep()},500),!1;case"wait":var l=t.ms,f=t.selector&&h(t.selector,this.args);if(console.log('action "wait"',f||l),f){var p=function(e){if(0===e)throw new Error('wait timeout for target "'+f+'"');if(a(f).target)return o.playNextStep();setTimeout(function(){return p(e-1)},1e3)};return p(10),!1}return setTimeout(function(){return o.playNextStep()},l),!1;case"type":var d=t.text,g=t.focus,y=h(t.selector,this.args);console.log('action "type"',y);var m=a(y);!1!==g&&m.trigger("focus"),console.log("setting value via "+d+" to "+h(d,this.args)),m.setValue(h(d,this.args)),m.trigger("input"),m.trigger("change"),m.trigger("blur"),m.blur();break;case"match":var v=t.match,w=t.fail,b=h(t.selector,this.args);console.log('action "match"',b);var N=a(b);N.target&&v?(n=this.steps).splice.apply(n,[0,0].concat(v)):!N.target&&w&&(r=this.steps).splice.apply(r,[0,0].concat(w));break;default:throw new Error('Unknown action type "'+e+'"!')}return!0},g.prototype.on=function(e,t){if(!this.events[e])throw new Error('Event "'+e+'" not supported');return this.events[e].push(t),this},g.prototype.play=function(e,t){var n=this;return this.currentActionId=e,this.getActionSteps(e).then(function(e){n.isRunning=!0,n.steps=e,n.args=t,n.playNextStep()}).catch(function(e){n.events.error.forEach(function(e){return e()})}),this},g.prototype.resume=function(){this.restoreState(),this.steps.length>0&&this.playNextStep()};var y=document.getElementsByTagName("script"),m=Array.prototype.slice.call(y).pop(),v=new URL(m?m.src:"http://localhost:8125/"),w=v.host,b=v.protocol;!function(e){var t=/^https:$/.test(b),r={wsURL:(t?"wss":"ws")+"://"+w+"/ws",apiURL:(t?"https":"http")+"://"+w+"/api"};if(!("WebSocket"in e))throw new Error("WebSocket NOT supported by your Browser!");var o,i=sessionStorage.getItem("crml-uid"),s=new c,u=new g(r.apiURL),a=new n(r.wsURL);a.on("message",function(e){console.log("INCOMING MESSAGE",e),"CRM_ACTION"===e.type&&u.play(e.payload.actionId,e.payload.args)}).on("connect",function(){a.send({type:"INIT",payload:{type:"CRM",uid:i,url:e.location.href,ts:Date.now()}})}),u.on("end",function(){a.send({type:"CRM_ACTION_COMPLETE",payload:{actionId:u.currentActionId,error:null}})}).on("error",function(e){a.send({type:"CRM_ACTION_COMPLETE",payload:{actionId:u.currentActionId,error:e}}),console.error("CRM Listener Error:",e)});var l=function(){clearTimeout(o),o=setTimeout(function(){var e=s.dequeue();e.length>0&&a.send({type:"EVENTS",payload:{events:e}})},1e3)};document.body.addEventListener("click",function(e){u.isRunning||(s.eventTrack("click",e.target),l())},!0),e.addEventListener("beforeunload",function(){l()}),setTimeout(function(){return u.resume()},1e3)}(window);
