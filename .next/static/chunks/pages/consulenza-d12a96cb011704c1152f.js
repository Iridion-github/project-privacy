_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[16],{"8oxB":function(t,n){var e,r,a=t.exports={};function o(){throw new Error("setTimeout has not been defined")}function i(){throw new Error("clearTimeout has not been defined")}function s(t){if(e===setTimeout)return setTimeout(t,0);if((e===o||!e)&&setTimeout)return e=setTimeout,setTimeout(t,0);try{return e(t,0)}catch(n){try{return e.call(null,t,0)}catch(n){return e.call(this,t,0)}}}!function(){try{e="function"===typeof setTimeout?setTimeout:o}catch(t){e=o}try{r="function"===typeof clearTimeout?clearTimeout:i}catch(t){r=i}}();var u,c=[],l=!1,f=-1;function h(){l&&u&&(l=!1,u.length?c=u.concat(c):f=-1,c.length&&p())}function p(){if(!l){var t=s(h);l=!0;for(var n=c.length;n;){for(u=c,c=[];++f<n;)u&&u[f].run();f=-1,n=c.length}u=null,l=!1,function(t){if(r===clearTimeout)return clearTimeout(t);if((r===i||!r)&&clearTimeout)return r=clearTimeout,clearTimeout(t);try{r(t)}catch(n){try{return r.call(null,t)}catch(n){return r.call(this,t)}}}(t)}}function m(t,n){this.fun=t,this.array=n}function v(){}a.nextTick=function(t){var n=new Array(arguments.length-1);if(arguments.length>1)for(var e=1;e<arguments.length;e++)n[e-1]=arguments[e];c.push(new m(t,n)),1!==c.length||l||s(p)},m.prototype.run=function(){this.fun.apply(null,this.array)},a.title="browser",a.browser=!0,a.env={},a.argv=[],a.version="",a.versions={},a.on=v,a.addListener=v,a.once=v,a.off=v,a.removeListener=v,a.removeAllListeners=v,a.emit=v,a.prependListener=v,a.prependOnceListener=v,a.listeners=function(t){return[]},a.binding=function(t){throw new Error("process.binding is not supported")},a.cwd=function(){return"/"},a.chdir=function(t){throw new Error("process.chdir is not supported")},a.umask=function(){return 0}},Jy3C:function(t,n,e){"use strict";e.d(n,"a",(function(){return c}));var r=e("q1tI"),a=e.n(r),o=e("cWnB"),i=e("JCBN"),s=e("nOHt"),u=a.a.createElement,c=function(t){var n=Object(s.useRouter)(),e=Object(i.b)();return u(o.a,{size:"lg",variant:"info",onClick:function(){return n.push("/contatti")}},"ita"===e?"I miei Contatti":"My Contacts",u("i",{className:"far fa-share-square ml-2"}))}},YFr8:function(t,n,e){"use strict";e.r(n);var r=e("o0o1"),a=e.n(r),o=e("HaE+"),i=e("q1tI"),s=e.n(i),u=e("vRNQ"),c=e.n(u),l=(e("tpqs"),e("JCBN")),f=e("6xyR"),h=e("3Z9Z"),p=e("JI6e"),m=e("cWnB"),v=e("FCqg"),d=e("nABS"),g=e("cFkv"),b=s.a.createElement,w=function(t){var n=Object(l.b)();return b(m.a,{className:"py-5",block:!0,variant:"info",onClick:function(){return t.setConsultation(t.consultation)}},b(h.a,null,b(p.a,{className:"text-center px-2"}," ",b("h3",null,t.consultation[n].title))),b(h.a,null,b(p.a,{className:"text-center px-4"},b("p",null,("ita"===n?"Piccola descrizione del consulto offerto riguardo ":"Short description regarding the offered consultation about")+t.consultation[n].title))))},y=s.a.createElement,N=function(t){Object(l.b)();return y(h.a,{className:"m-0 p-0"},y(p.a,{md:{span:8,offset:2},className:"p-0"},y(h.a,{className:""},t.consultations.map((function(n,e){return y(p.a,{key:n.id,md:{span:6,offset:e===t.consultations.length-1&&t.consultations.length%2!==0?3:0},className:"mb-4"},y(w,{consultation:n,setConsultation:t.setConsultation}))})))))},C=e("76ZC"),T=e.n(C),k=e("Jy3C"),E=s.a.createElement,j=function(t){var n=Object(l.b)();return E(s.a.Fragment,null,E(h.a,null,E(p.a,{md:{span:8,offset:2},className:""},T()(t.consultation[n].content))),E(h.a,{className:"justify-content-center"},E(k.a,null)))},x=s.a.createElement;function A(t){var n=Object(l.b)(),e=Object(i.useState)(null),r=e[0],a=e[1];return x("div",{className:c.a.container},x(v.a,{title:"ita"===n?"Consulenza":"Privacy Advice"}),x(d.a,null),x("main",{className:c.a.main},x(f.a,{className:"p-2 responsive-width-card"},x(f.a.Img,{className:"black-border",variant:"top",src:"consulenza.png"}),x(f.a.Body,null,x(h.a,null,x(p.a,{md:3},r&&x(m.a,{variant:"info",onClick:function(){return a(null)}},x("i",{className:"fas fa-long-arrow-alt-left mr-2"}),"ita"===n?"Torna Indietro":"Back to Selection")),x(p.a,{md:6},x(f.a.Title,{className:"text-center"}," ",x("h1",null,"ita"===n?"Consulenza":"Consultation",r?": "+r[n].title:"")))),!r&&x(N,{consultations:t.consultations,setConsultation:a}),r&&x(j,{consultation:r,setConsultation:a})),x(f.a.Footer,{className:"text-center"}))),x(g.a,null))}A.getInitialProps=function(){var t=Object(o.a)(a.a.mark((function t(n){var e,r,o;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e="http://"+n.req.headers.host+"/api/consultation",t.next=3,fetch(e);case 3:return r=t.sent,t.next=6,r.json();case 6:return o=t.sent,t.abrupt("return",{consultations:o.data});case 8:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}();n.default=A},ak6E:function(t,n,e){(window.__NEXT_P=window.__NEXT_P||[]).push(["/consulenza",function(){return e("YFr8")}])},tpqs:function(t,n,e){(function(t){function e(t,n){for(var e=0,r=t.length-1;r>=0;r--){var a=t[r];"."===a?t.splice(r,1):".."===a?(t.splice(r,1),e++):e&&(t.splice(r,1),e--)}if(n)for(;e--;e)t.unshift("..");return t}function r(t,n){if(t.filter)return t.filter(n);for(var e=[],r=0;r<t.length;r++)n(t[r],r,t)&&e.push(t[r]);return e}n.resolve=function(){for(var n="",a=!1,o=arguments.length-1;o>=-1&&!a;o--){var i=o>=0?arguments[o]:t.cwd();if("string"!==typeof i)throw new TypeError("Arguments to path.resolve must be strings");i&&(n=i+"/"+n,a="/"===i.charAt(0))}return(a?"/":"")+(n=e(r(n.split("/"),(function(t){return!!t})),!a).join("/"))||"."},n.normalize=function(t){var o=n.isAbsolute(t),i="/"===a(t,-1);return(t=e(r(t.split("/"),(function(t){return!!t})),!o).join("/"))||o||(t="."),t&&i&&(t+="/"),(o?"/":"")+t},n.isAbsolute=function(t){return"/"===t.charAt(0)},n.join=function(){var t=Array.prototype.slice.call(arguments,0);return n.normalize(r(t,(function(t,n){if("string"!==typeof t)throw new TypeError("Arguments to path.join must be strings");return t})).join("/"))},n.relative=function(t,e){function r(t){for(var n=0;n<t.length&&""===t[n];n++);for(var e=t.length-1;e>=0&&""===t[e];e--);return n>e?[]:t.slice(n,e-n+1)}t=n.resolve(t).substr(1),e=n.resolve(e).substr(1);for(var a=r(t.split("/")),o=r(e.split("/")),i=Math.min(a.length,o.length),s=i,u=0;u<i;u++)if(a[u]!==o[u]){s=u;break}var c=[];for(u=s;u<a.length;u++)c.push("..");return(c=c.concat(o.slice(s))).join("/")},n.sep="/",n.delimiter=":",n.dirname=function(t){if("string"!==typeof t&&(t+=""),0===t.length)return".";for(var n=t.charCodeAt(0),e=47===n,r=-1,a=!0,o=t.length-1;o>=1;--o)if(47===(n=t.charCodeAt(o))){if(!a){r=o;break}}else a=!1;return-1===r?e?"/":".":e&&1===r?"/":t.slice(0,r)},n.basename=function(t,n){var e=function(t){"string"!==typeof t&&(t+="");var n,e=0,r=-1,a=!0;for(n=t.length-1;n>=0;--n)if(47===t.charCodeAt(n)){if(!a){e=n+1;break}}else-1===r&&(a=!1,r=n+1);return-1===r?"":t.slice(e,r)}(t);return n&&e.substr(-1*n.length)===n&&(e=e.substr(0,e.length-n.length)),e},n.extname=function(t){"string"!==typeof t&&(t+="");for(var n=-1,e=0,r=-1,a=!0,o=0,i=t.length-1;i>=0;--i){var s=t.charCodeAt(i);if(47!==s)-1===r&&(a=!1,r=i+1),46===s?-1===n?n=i:1!==o&&(o=1):-1!==n&&(o=-1);else if(!a){e=i+1;break}}return-1===n||-1===r||0===o||1===o&&n===r-1&&n===e+1?"":t.slice(n,r)};var a="b"==="ab".substr(-1)?function(t,n,e){return t.substr(n,e)}:function(t,n,e){return n<0&&(n=t.length+n),t.substr(n,e)}}).call(this,e("8oxB"))}},[["ak6E",0,2,1,3,5]]]);