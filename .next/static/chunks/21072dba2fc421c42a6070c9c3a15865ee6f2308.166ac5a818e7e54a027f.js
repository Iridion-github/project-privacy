(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[6],{"+JL2":function(e,t,n){"use strict";var r=n("RjgW"),o=n("GEtZ"),a=n("q1tI"),i=n("ZCiN"),c=n("2W6z"),s=n.n(c),u=n("dZvc"),f=n("B8pp"),l=function(){};var p=function(e){return e&&("current"in e?e.current:e)};t.a=function(e,t,n){var c=void 0===n?{}:n,d=c.disabled,m=c.clickTrigger,b=void 0===m?"click":m,v=Object(a.useRef)(!1),h=t||l,g=Object(a.useCallback)((function(t){var n,o=p(e);s()(!!o,"RootClose captured a close event but does not have a ref to compare it to. useRootClose(), should be passed a ref that resolves to a DOM node"),v.current=!o||!!((n=t).metaKey||n.altKey||n.ctrlKey||n.shiftKey)||!function(e){return 0===e.button}(t)||!!Object(r.a)(o,t.target)}),[e]),y=Object(i.a)((function(e){v.current||h(e)})),O=Object(i.a)((function(e){27===e.keyCode&&h(e)}));Object(a.useEffect)((function(){if(!d&&null!=e){var t,n=(t=p(e),Object(u.a)(Object(f.a)(t))),r=Object(o.a)(n,b,g,!0),a=Object(o.a)(n,b,y),i=Object(o.a)(n,"keyup",O),c=[];return"ontouchstart"in n.documentElement&&(c=[].slice.call(n.body.children).map((function(e){return Object(o.a)(e,"mousemove",l)}))),function(){r(),a(),i(),c.forEach((function(e){return e()}))}}}),[e,d,b,g,y,O])}},"2NPC":function(e,t,n){"use strict";n.d(t,"a",(function(){return V}));var r=n("KQm4"),o=n("q1tI"),a=n.n(o),i=n("wx14"),c=n("zLVn"),s=n("TSYQ"),u=n.n(s),f=(n("BO/t"),n("vUet")),l=a.a.forwardRef((function(e,t){var n=e.as,r=void 0===n?"div":n,o=e.bsPrefix,s=e.className,l=e.children,p=Object(c.a)(e,["as","bsPrefix","className","children"]);return o=Object(f.a)(o,"popover-header"),a.a.createElement(r,Object(i.a)({ref:t},p,{className:u()(o,s)}),l)})),p=a.a.forwardRef((function(e,t){var n=e.as,r=void 0===n?"div":n,o=e.bsPrefix,s=e.className,l=e.children,p=Object(c.a)(e,["as","bsPrefix","className","children"]);return o=Object(f.a)(o,"popover-body"),a.a.createElement(r,Object(i.a)({ref:t},p,{className:u()(s,o)}),l)})),d=a.a.forwardRef((function(e,t){var n=e.bsPrefix,r=e.placement,o=e.className,s=e.style,l=e.children,d=e.content,m=e.arrowProps,b=(e.popper,e.show,Object(c.a)(e,["bsPrefix","placement","className","style","children","content","arrowProps","popper","show"])),v=Object(f.a)(n,"popover"),h=((null==r?void 0:r.split("-"))||[])[0];return a.a.createElement("div",Object(i.a)({ref:t,role:"tooltip",style:s,"x-placement":h,className:u()(o,v,h&&"bs-popover-"+h)},b),a.a.createElement("div",Object(i.a)({className:"arrow"},m)),d?a.a.createElement(p,null,l):l)}));d.defaultProps={placement:"right"},d.Title=l,d.Content=p;var m=d,b=n("dI71"),v=n("RjgW"),h=n("Vhrh"),g=n("B8pp"),y=(n("2W6z"),n("JCAc")),O=n("17x9"),w=n.n(O),j=n("i8i4"),x=n.n(j),E=n("7A6N"),C=n("lcWJ"),N=n("cRaf"),k=n("RcA9"),M=n("+JL2"),R=n("knGs"),P=n("QxbT"),D=a.a.forwardRef((function(e,t){var n=e.flip,r=e.offset,s=e.placement,u=e.containerPadding,f=void 0===u?5:u,l=e.popperConfig,p=void 0===l?{}:l,d=e.transition,m=Object(E.a)(),b=m[0],v=m[1],h=Object(E.a)(),g=h[0],y=h[1],O=Object(C.a)(v,t),w=Object(R.a)(e.container),j=Object(R.a)(e.target),N=Object(o.useState)(!e.show),D=N[0],A=N[1],T=Object(k.a)(j,b,Object(P.a)({placement:s,enableEvents:!!e.show,containerPadding:f||5,flip:n,offset:r,arrowElement:g,popperConfig:p})),L=T.styles,S=T.attributes,B=Object(c.a)(T,["styles","attributes"]);e.show?D&&A(!1):e.transition||D||A(!0);var I=e.show||d&&!D;if(Object(M.a)(b,e.onHide,{disabled:!e.rootClose||e.rootCloseDisabled,clickTrigger:e.rootCloseEvent}),!I)return null;var q=e.children(Object(i.a)({},B,{show:!!e.show,props:Object(i.a)({},S.popper,{style:L.popper,ref:O}),arrowProps:Object(i.a)({},S.arrow,{style:L.arrow,ref:y})}));if(d){var W=e.onExit,H=e.onExiting,J=e.onEnter,U=e.onEntering,_=e.onEntered;q=a.a.createElement(d,{in:e.show,appear:!0,onExit:W,onExiting:H,onExited:function(){A(!0),e.onExited&&e.onExited.apply(e,arguments)},onEnter:J,onEntering:U,onEntered:_},q)}return w?x.a.createPortal(q,w):null}));D.displayName="Overlay",D.propTypes={show:w.a.bool,placement:w.a.oneOf(N.b),target:w.a.any,container:w.a.any,flip:w.a.bool,children:w.a.func.isRequired,containerPadding:w.a.number,popperConfig:w.a.object,rootClose:w.a.bool,rootCloseEvent:w.a.oneOf(["click","mousedown"]),rootCloseDisabled:w.a.bool,onHide:function(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var o;return e.rootClose?(o=w.a.func).isRequired.apply(o,[e].concat(n)):w.a.func.apply(w.a,[e].concat(n))},transition:w.a.elementType,onEnter:w.a.func,onEntering:w.a.func,onEntered:w.a.func,onExit:w.a.func,onExiting:w.a.func,onExited:w.a.func};var A=D,T=n("KXUJ");function L(e){var t=window.getComputedStyle(e);return{top:parseFloat(t.marginTop)||0,right:parseFloat(t.marginRight)||0,bottom:parseFloat(t.marginBottom)||0,left:parseFloat(t.marginLeft)||0}}var S=n("7xGa"),B={transition:S.a,rootClose:!1,show:!1,placement:"top"};function I(e){var t=e.children,n=e.transition,r=e.popperConfig,s=void 0===r?{}:r,f=Object(c.a)(e,["children","transition","popperConfig"]),l=Object(o.useRef)({}),p=function(){var e=Object(o.useRef)(null),t=Object(o.useRef)(null);return[Object(o.useCallback)((function(n){n&&(Object(T.a)(n,"popover")||Object(T.a)(n,"dropdown-menu"))&&(t.current=L(n),n.style.margin="0",e.current=n)}),[]),[Object(o.useMemo)((function(){return{name:"offset",options:{offset:function(e){var n=e.placement;if(!t.current)return[0,0];var r=t.current,o=r.top,a=r.left,i=r.bottom,c=r.right;switch(n.split("-")[0]){case"top":return[0,i];case"left":return[0,c];case"bottom":return[0,o];case"right":return[0,a];default:return[0,0]}}}}}),[t]),Object(o.useMemo)((function(){return{name:"popoverArrowMargins",enabled:!0,phase:"main",requiresIfExists:["arrow"],effect:function(t){var n=t.state;if(e.current&&n.elements.arrow&&Object(T.a)(e.current,"popover")&&n.modifiersData["arrow#persistent"]){var r=L(n.elements.arrow),o=r.top,a=r.right,i=o||a;return n.modifiersData["arrow#persistent"].padding={top:i,left:i,right:i,bottom:i},n.elements.arrow.style.margin="0",function(){n.elements.arrow&&(n.elements.arrow.style.margin="")}}}}}),[])]]}(),d=p[0],m=p[1],b=!0===n?S.a:n||null;return a.a.createElement(A,Object(i.a)({},f,{ref:d,popperConfig:Object(i.a)({},s,{modifiers:m.concat(s.modifiers||[])}),transition:b}),(function(e){var r,o=e.props,s=e.arrowProps,f=e.show,p=e.update,d=(e.forceUpdate,e.placement),m=e.state,b=Object(c.a)(e,["props","arrowProps","show","update","forceUpdate","placement","state"]);!function(e,t){var n=e.ref,r=t.ref;e.ref=n.__wrapped||(n.__wrapped=function(e){return n(Object(g.a)(e))}),t.ref=r.__wrapped||(r.__wrapped=function(e){return r(Object(g.a)(e))})}(o,s);var v=Object.assign(l.current,{state:m,scheduleUpdate:p,placement:d,outOfBoundaries:(null==m||null==(r=m.modifiersData.hide)?void 0:r.isReferenceHidden)||!1});return"function"===typeof t?t(Object(i.a)({},b,{},o,{placement:d,show:f,popper:v,arrowProps:s})):a.a.cloneElement(t,Object(i.a)({},b,{},o,{placement:d,arrowProps:s,popper:v,className:u()(t.props.className,!n&&f&&"show"),style:Object(i.a)({},t.props.style,{},o.style)}))}))}I.defaultProps=B;var q=I,W=function(e){function t(){return e.apply(this,arguments)||this}return Object(b.a)(t,e),t.prototype.render=function(){return this.props.children},t}(a.a.Component);function H(e,t,n){var r=t[0],o=r.currentTarget,a=r.relatedTarget||r.nativeEvent[n];a&&a===o||Object(v.a)(o,a)||e.apply(void 0,t)}function J(e){var t=e.trigger,n=e.overlay,r=e.children,s=e.popperConfig,u=void 0===s?{}:s,f=e.show,l=e.defaultShow,p=void 0!==l&&l,d=e.onToggle,m=e.delay,b=e.placement,v=e.flip,O=void 0===v?b&&-1!==b.indexOf("auto"):v,w=Object(c.a)(e,["trigger","overlay","children","popperConfig","show","defaultShow","onToggle","delay","placement","flip"]),j=Object(o.useRef)(null),x=Object(h.a)(),E=Object(o.useRef)(""),C=Object(y.b)(f,p,d),N=C[0],k=C[1],M=function(e){return e&&"object"===typeof e?e:{show:e,hide:e}}(m),R="function"!==typeof r?a.a.Children.only(r).props:{},P=R.onFocus,D=R.onBlur,A=R.onClick,T=Object(o.useCallback)((function(){return Object(g.a)(j.current)}),[]),L=Object(o.useCallback)((function(){x.clear(),E.current="show",M.show?x.set((function(){"show"===E.current&&k(!0)}),M.show):k(!0)}),[M.show,k,x]),S=Object(o.useCallback)((function(){x.clear(),E.current="hide",M.hide?x.set((function(){"hide"===E.current&&k(!1)}),M.hide):k(!1)}),[M.hide,k,x]),B=Object(o.useCallback)((function(){L();for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];null==P||P.apply(void 0,t)}),[L,P]),I=Object(o.useCallback)((function(){S();for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];null==D||D.apply(void 0,t)}),[S,D]),J=Object(o.useCallback)((function(){k(!N),A&&A.apply(void 0,arguments)}),[A,k,N]),U=Object(o.useCallback)((function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];H(L,t,"fromElement")}),[L]),_=Object(o.useCallback)((function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];H(S,t,"toElement")}),[S]),z=null==t?[]:[].concat(t),F={};return-1!==z.indexOf("click")&&(F.onClick=J),-1!==z.indexOf("focus")&&(F.onFocus=B,F.onBlur=I),-1!==z.indexOf("hover")&&(F.onMouseOver=U,F.onMouseOut=_),a.a.createElement(a.a.Fragment,null,"function"===typeof r?r(Object(i.a)({},F,{ref:j})):a.a.createElement(W,{ref:j},Object(o.cloneElement)(r,F)),a.a.createElement(q,Object(i.a)({},w,{show:N,onHide:S,flip:O,placement:b,popperConfig:u,target:T}),n))}J.defaultProps={defaultShow:!1,trigger:["hover","focus"]};var U=J,_=n("76ZC"),z=n.n(_),F=a.a.createElement,V=function(e,t){for(var n=e,o=t.map((function(e){return e.name})),a=Object(r.a)(n),i=[],c=[],s=0;s<a.length;s++){RegExp("^[a-zA-Z0-9\xe0\xe8\xe9\xec\xf2\xf9]*$").test(a[s])?i.push(a[s]):(o.map((function(e){return e.toLowerCase()})).includes(i.join("").toLowerCase())&&c.push({start:Number(s-i.length),end:s,value:t.find((function(e){return e.name===i.join("").toLowerCase()})).name,meaning:t.find((function(e){return e.name===i.join("").toLowerCase()})).meaning,reference:t.find((function(e){return e.name===i.join("").toLowerCase()})).reference}),i=[])}var u=[],f=0;c.forEach((function(t,n){var r=e.slice(f,t.start).trim();u.push(r," ");var o=F(m,{id:"glossary-popover"},F(m.Title,{as:"h3",id:"glossary-popover-title"},t.value),F(m.Content,{id:"glossary-popover-content"},t.meaning),F(m.Title,{id:"glossary-popover-footer"},t.reference)),a=F(U,{trigger:["click","hover","focus"],placement:"auto",overlay:o,key:n,id:"glossary-word-container"},F("span",{id:"glossary-word"},e.slice(t.start,t.end)));if(u.push(a," "),f=t.end,c.length===n+1&&e.slice(f).trim().length>0){var i=e.slice(f).trim();u.push(i," ")}})),0===c.length&&(u=z()(e.trim()));for(var l=[],p=0;p<u.length;p++)"string"===typeof u[p]?l.push(z()(u[p])):l.push(u[p]);return l}},"7A6N":function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var r=n("q1tI");function o(){return Object(r.useState)(null)}},"7xGa":function(e,t,n){"use strict";var r,o=n("wx14"),a=n("zLVn"),i=n("TSYQ"),c=n.n(i),s=n("YECM"),u=n("q1tI"),f=n.n(u),l=n("dRu9"),p=n("z+q/"),d=((r={})[l.b]="show",r[l.a]="show",r),m=f.a.forwardRef((function(e,t){var n=e.className,r=e.children,i=Object(a.a)(e,["className","children"]),m=Object(u.useCallback)((function(e){Object(p.a)(e),i.onEnter&&i.onEnter(e)}),[i]);return f.a.createElement(l.e,Object(o.a)({ref:t,addEndListener:s.a},i,{onEnter:m}),(function(e,t){return f.a.cloneElement(r,Object(o.a)({},t,{className:c()("fade",n,r.props.className,d[e])}))}))}));m.defaultProps={in:!1,timeout:300,mountOnEnter:!1,unmountOnExit:!1,appear:!1},m.displayName="Fade",t.a=m},B8pp:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var r=n("i8i4"),o=n.n(r);function a(e){return e&&"setState"in e?o.a.findDOMNode(e):null!=e?e:null}},"BO/t":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return function(t,n,r,o,a){var i=r||"<<anonymous>>",c=a||n;if(null==t[n])return new Error("The "+o+" `"+c+"` is required to make `"+i+"` accessible for users of assistive technologies such as screen readers.");for(var s=arguments.length,u=Array(s>5?s-5:0),f=5;f<s;f++)u[f-5]=arguments[f];return e.apply(void 0,[t,n,r,o,a].concat(u))}},e.exports=t.default},KQm4:function(e,t,n){"use strict";function r(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function o(e){return function(e){if(Array.isArray(e))return r(e)}(e)||function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||function(e,t){if(e){if("string"===typeof e)return r(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?r(e,t):void 0}}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}n.d(t,"a",(function(){return o}))},KXUJ:function(e,t,n){"use strict";function r(e,t){return e.classList?!!t&&e.classList.contains(t):-1!==(" "+(e.className.baseVal||e.className)+" ").indexOf(" "+t+" ")}n.d(t,"a",(function(){return r}))},LrFz:function(e,t,n){"use strict";n.d(t,"a",(function(){return p}));var r=n("q1tI"),o=n.n(r),a=n("JCBN"),i=n("nOHt"),c=n("6xyR"),s=n("3Z9Z"),u=n("JI6e"),f=n("cWnB"),l=o.a.createElement;function p(e){var t=Object(a.b)(),n=Object(i.useRouter)();return l(c.a,{className:"w-75 p-2 no-border"},l(c.a.Title,{className:"text-center"},l("h2",null,"ita"===t?"Errore 404":"Error 404")),l(c.a.Img,{className:"error-img",variant:"top",src:"/standardError.png"}),l(c.a.Body,null,l(s.a,null,l(u.a,{md:{span:8,offset:2},className:"text-justify text-center"},l("h5",null,"ita"===t?"La pagina che hai cercato di raggiungere non esiste.":"The page you tried to reach doesn't exist."))),l(s.a,{className:"pt-3"},l(u.a,{md:{span:2,offset:3},className:"text-justify text-center mb-3"},l(f.a,{block:!0,variant:"info",href:"/"},l("i",{className:"fas fa-home mr-2"}),"ita"===t?"Torna alla Home":"Return to Home")),l(u.a,{md:{span:2},className:"text-justify text-center mb-3"},l(f.a,{block:!0,variant:"info",onClick:function(){return n.back()}},l("i",{className:"fas fa-undo-alt mr-2"}),"ita"===t?"Torna Indietro":"Go Back")),l(u.a,{md:{span:2},className:"text-justify text-center mb-3"},l(f.a,{block:!0,variant:"info",onClick:function(){return n.reload()}},l("i",{className:"fas fa-sync-alt mr-2"}),"ita"===t?"Riprova":"Try Again")))))}},QxbT:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var r=n("wx14");function o(e){var t,n,o,a,i,c=e.enabled,s=e.enableEvents,u=e.placement,f=e.flip,l=e.offset,p=e.containerPadding,d=e.arrowElement,m=e.popperConfig,b=void 0===m?{}:m,v=function(e){var t={};return Array.isArray(e)?(null==e||e.forEach((function(e){t[e.name]=e})),t):e||t}(b.modifiers);return Object(r.a)({},b,{placement:u,enabled:c,modifiers:(i=Object(r.a)({},v,{eventListeners:{enabled:s},preventOverflow:Object(r.a)({},v.preventOverflow,{options:p?Object(r.a)({padding:p},null==(t=v.preventOverflow)?void 0:t.options):null==(n=v.preventOverflow)?void 0:n.options}),offset:{options:Object(r.a)({offset:l},null==(o=v.offset)?void 0:o.options)},arrow:Object(r.a)({},v.arrow,{enabled:!!d,options:Object(r.a)({},null==(a=v.arrow)?void 0:a.options,{element:d})}),flip:Object(r.a)({enabled:!!f},v.flip)}),void 0===i&&(i={}),Array.isArray(i)?i:Object.keys(i).map((function(e){return i[e].name=e,i[e]})))})}},RcA9:function(e,t,n){"use strict";var r=n("wx14"),o=n("zLVn"),a=n("q1tI"),i=n("XcHJ");var c=function(e){var t=Object(i.a)();return[e[0],Object(a.useCallback)((function(n){if(t())return e[1](n)}),[t,e[1]])]},s=n("cRaf"),u=function(e){return{position:e,top:"0",left:"0",opacity:"0",pointerEvents:"none"}},f={name:"applyStyles",enabled:!1},l={name:"ariaDescribedBy",enabled:!0,phase:"afterWrite",effect:function(e){var t=e.state;return function(){var e=t.elements,n=e.reference,r=e.popper;if("removeAttribute"in n){var o=(n.getAttribute("aria-describedby")||"").split(",").filter((function(e){return e.trim()!==r.id}));o.length?n.setAttribute("aria-describedby",o.join(",")):n.removeAttribute("aria-describedby")}}},fn:function(e){var t,n=e.state.elements,r=n.popper,o=n.reference,a=null==(t=r.getAttribute("role"))?void 0:t.toLowerCase();if(r.id&&"tooltip"===a&&"setAttribute"in o){var i=o.getAttribute("aria-describedby");o.setAttribute("aria-describedby",i?i+","+r.id:r.id)}}},p=[];t.a=function(e,t,n){var i=void 0===n?{}:n,d=i.enabled,m=void 0===d||d,b=i.placement,v=void 0===b?"bottom":b,h=i.strategy,g=void 0===h?"absolute":h,y=i.modifiers,O=void 0===y?p:y,w=Object(o.a)(i,["enabled","placement","strategy","modifiers"]),j=Object(a.useRef)(),x=Object(a.useCallback)((function(){var e;null==(e=j.current)||e.update()}),[]),E=Object(a.useCallback)((function(){var e;null==(e=j.current)||e.forceUpdate()}),[]),C=c(Object(a.useState)({placement:v,update:x,forceUpdate:E,attributes:{},styles:{popper:u(g),arrow:{}}})),N=C[0],k=C[1],M=Object(a.useMemo)((function(){return{name:"updateStateModifier",enabled:!0,phase:"write",requires:["computeStyles"],fn:function(e){var t=e.state,n={},r={};Object.keys(t.elements).forEach((function(e){n[e]=t.styles[e],r[e]=t.attributes[e]})),k({state:t,styles:n,attributes:r,update:x,forceUpdate:E,placement:t.placement})}}}),[x,E,k]);return Object(a.useEffect)((function(){j.current&&m&&j.current.setOptions({placement:v,strategy:g,modifiers:[].concat(O,[M,f])})}),[g,v,M,m]),Object(a.useEffect)((function(){if(m&&null!=e&&null!=t)return j.current=Object(s.a)(e,t,Object(r.a)({},w,{placement:v,strategy:g,modifiers:[].concat(O,[l,M])})),function(){null!=j.current&&(j.current.destroy(),j.current=void 0,k((function(e){return Object(r.a)({},e,{attributes:{},styles:{popper:u(g)}})})))}}),[m,e,t]),N}},RjgW:function(e,t,n){"use strict";function r(e,t){return e.contains?e.contains(t):e.compareDocumentPosition?e===t||!!(16&e.compareDocumentPosition(t)):void 0}n.d(t,"a",(function(){return r}))},Vhrh:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var r=n("q1tI"),o=n("XcHJ"),a=n("i52p"),i=Math.pow(2,31)-1;function c(){var e=Object(o.a)(),t=Object(r.useRef)();return Object(a.a)((function(){return clearTimeout(t.current)})),Object(r.useMemo)((function(){var n=function(){return clearTimeout(t.current)};return{set:function(r,o){void 0===o&&(o=0),e()&&(n(),o<=i?t.current=setTimeout(r,o):function e(t,n,r){var o=r-Date.now();t.current=o<=i?setTimeout(n,o):setTimeout((function(){return e(t,n,r)}),i)}(t,r,Date.now()+o))},clear:n}}),[])}},X0II:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var r=n("nOHt"),o=function(e,t,n){var o=[],a=Object(r.useRouter)().asPath.slice(1).split("/").reverse().pop();return o.push({title:"Home",path:"/"}),o.push({title:a,path:"/"+a}),o.push({title:e[n],path:t}),o}},XcHJ:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var r=n("q1tI");function o(){var e=Object(r.useRef)(!0),t=Object(r.useRef)((function(){return e.current}));return Object(r.useEffect)((function(){return function(){e.current=!1}}),[]),t.current}},ZvOU:function(e,t,n){"use strict";var r=n("wx14"),o=n("zLVn"),a=n("TSYQ"),i=n.n(a),c=n("q1tI"),s=n.n(c),u=n("vUet"),f=s.a.forwardRef((function(e,t){var n=e.bsPrefix,a=e.className,c=Object(o.a)(e,["bsPrefix","className"]),f=Object(u.a)(n,"btn-toolbar");return s.a.createElement("div",Object(r.a)({},c,{ref:t,className:i()(a,f)}))}));f.displayName="ButtonToolbar",f.defaultProps={role:"toolbar"},t.a=f},b4WN:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var r=function(e,t,n){var r=new Date(e),o=r.getDate();"eng"===t&&(o+=function(e){var t="";return 1===e&&(t="st"),2===e&&(t="nd"),3===e&&(t="rd"),e>=4&&(t="th"),t}(o));var a=["Domenica","Luned\xec","Marted\xec","Mercoled\xec","Gioved\xec","Venerd\xec","Sabato"][r.getDay()],i=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"][r.getDay()],c=["Gennaio","Febbraio","Marzo","Aprile","Maggio","Giugno","Luglio","Agosto","Settembre","Ottobre","Novembre","Dicembre"][r.getMonth()],s=["January","February","March","April","May","June","July","August","September","October","November","December"][r.getMonth()],u=r.getFullYear();return"ita"===t?(n?"":a+", ")+o+" "+c+" "+u:(n?"":i+", ")+s+" "+o+" "+u}},cRaf:function(e,t,n){"use strict";function r(e){return e.split("-")[0]}function o(e){return{x:e.offsetLeft,y:e.offsetTop,width:e.offsetWidth,height:e.offsetHeight}}function a(e){if("[object Window]"!==e.toString()){var t=e.ownerDocument;return t&&t.defaultView||window}return e}function i(e){return e instanceof a(e).Element||e instanceof Element}function c(e){return e instanceof a(e).HTMLElement||e instanceof HTMLElement}function s(e,t){var n,r=t.getRootNode&&t.getRootNode();if(e.contains(t))return!0;if((n=r)instanceof a(n).ShadowRoot||n instanceof ShadowRoot){var o=t;do{if(o&&e.isSameNode(o))return!0;o=o.parentNode||o.host}while(o)}return!1}function u(e){return e?(e.nodeName||"").toLowerCase():null}function f(e){return a(e).getComputedStyle(e)}function l(e){return["table","td","th"].indexOf(u(e))>=0}function p(e){return((i(e)?e.ownerDocument:e.document)||window.document).documentElement}function d(e){return"html"===u(e)?e:e.assignedSlot||e.parentNode||e.host||p(e)}function m(e){if(!c(e)||"fixed"===f(e).position)return null;var t=e.offsetParent;if(t){var n=p(t);if("body"===u(t)&&"static"===f(t).position&&"static"!==f(n).position)return n}return t}function b(e){for(var t=a(e),n=m(e);n&&l(n)&&"static"===f(n).position;)n=m(n);return n&&"body"===u(n)&&"static"===f(n).position?t:n||function(e){for(var t=d(e);c(t)&&["html","body"].indexOf(u(t))<0;){var n=f(t);if("none"!==n.transform||"none"!==n.perspective||n.willChange&&"auto"!==n.willChange)return t;t=t.parentNode}return null}(e)||t}function v(e){return["top","bottom"].indexOf(e)>=0?"x":"y"}function h(e,t,n){return Math.max(e,Math.min(t,n))}function g(e){return Object.assign(Object.assign({},{top:0,right:0,bottom:0,left:0}),e)}function y(e,t){return t.reduce((function(t,n){return t[n]=e,t}),{})}n.d(t,"a",(function(){return se})),n.d(t,"b",(function(){return N}));var O="top",w="bottom",j="right",x="left",E=[O,w,j,x],C=E.reduce((function(e,t){return e.concat([t+"-start",t+"-end"])}),[]),N=[].concat(E,["auto"]).reduce((function(e,t){return e.concat([t,t+"-start",t+"-end"])}),[]),k=["beforeRead","read","afterRead","beforeMain","main","afterMain","beforeWrite","write","afterWrite"];var M={name:"arrow",enabled:!0,phase:"main",fn:function(e){var t,n=e.state,a=e.name,i=n.elements.arrow,c=n.modifiersData.popperOffsets,s=r(n.placement),u=v(s),f=[x,j].indexOf(s)>=0?"height":"width";if(i&&c){var l=n.modifiersData[a+"#persistent"].padding,p=o(i),d="y"===u?O:x,m="y"===u?w:j,g=n.rects.reference[f]+n.rects.reference[u]-c[u]-n.rects.popper[f],y=c[u]-n.rects.reference[u],E=b(i),C=E?"y"===u?E.clientHeight||0:E.clientWidth||0:0,N=g/2-y/2,k=l[d],M=C-p[f]-l[m],R=C/2-p[f]/2+N,P=h(k,R,M),D=u;n.modifiersData[a]=((t={})[D]=P,t.centerOffset=P-R,t)}},effect:function(e){var t=e.state,n=e.options,r=e.name,o=n.element,a=void 0===o?"[data-popper-arrow]":o,i=n.padding,c=void 0===i?0:i;null!=a&&("string"!==typeof a||(a=t.elements.popper.querySelector(a)))&&s(t.elements.popper,a)&&(t.elements.arrow=a,t.modifiersData[r+"#persistent"]={padding:g("number"!==typeof c?c:y(c,E))})},requires:["popperOffsets"],requiresIfExists:["preventOverflow"]},R={top:"auto",right:"auto",bottom:"auto",left:"auto"};function P(e){var t,n=e.popper,r=e.popperRect,o=e.placement,i=e.offsets,c=e.position,s=e.gpuAcceleration,u=e.adaptive,f=function(e){var t=e.x,n=e.y,r=window.devicePixelRatio||1;return{x:Math.round(t*r)/r||0,y:Math.round(n*r)/r||0}}(i),l=f.x,d=f.y,m=i.hasOwnProperty("x"),v=i.hasOwnProperty("y"),h=x,g=O,y=window;if(u){var E=b(n);E===a(n)&&(E=p(n)),o===O&&(g=w,d-=E.clientHeight-r.height,d*=s?1:-1),o===x&&(h=j,l-=E.clientWidth-r.width,l*=s?1:-1)}var C,N=Object.assign({position:c},u&&R);return s?Object.assign(Object.assign({},N),{},((C={})[g]=v?"0":"",C[h]=m?"0":"",C.transform=(y.devicePixelRatio||1)<2?"translate("+l+"px, "+d+"px)":"translate3d("+l+"px, "+d+"px, 0)",C)):Object.assign(Object.assign({},N),{},((t={})[g]=v?d+"px":"",t[h]=m?l+"px":"",t.transform="",t))}var D={name:"computeStyles",enabled:!0,phase:"beforeWrite",fn:function(e){var t=e.state,n=e.options,o=n.gpuAcceleration,a=void 0===o||o,i=n.adaptive,c=void 0===i||i,s={placement:r(t.placement),popper:t.elements.popper,popperRect:t.rects.popper,gpuAcceleration:a};null!=t.modifiersData.popperOffsets&&(t.styles.popper=Object.assign(Object.assign({},t.styles.popper),P(Object.assign(Object.assign({},s),{},{offsets:t.modifiersData.popperOffsets,position:t.options.strategy,adaptive:c})))),null!=t.modifiersData.arrow&&(t.styles.arrow=Object.assign(Object.assign({},t.styles.arrow),P(Object.assign(Object.assign({},s),{},{offsets:t.modifiersData.arrow,position:"absolute",adaptive:!1})))),t.attributes.popper=Object.assign(Object.assign({},t.attributes.popper),{},{"data-popper-placement":t.placement})},data:{}},A={passive:!0};var T={name:"eventListeners",enabled:!0,phase:"write",fn:function(){},effect:function(e){var t=e.state,n=e.instance,r=e.options,o=r.scroll,i=void 0===o||o,c=r.resize,s=void 0===c||c,u=a(t.elements.popper),f=[].concat(t.scrollParents.reference,t.scrollParents.popper);return i&&f.forEach((function(e){e.addEventListener("scroll",n.update,A)})),s&&u.addEventListener("resize",n.update,A),function(){i&&f.forEach((function(e){e.removeEventListener("scroll",n.update,A)})),s&&u.removeEventListener("resize",n.update,A)}},data:{}},L={left:"right",right:"left",bottom:"top",top:"bottom"};function S(e){return e.replace(/left|right|bottom|top/g,(function(e){return L[e]}))}var B={start:"end",end:"start"};function I(e){return e.replace(/start|end/g,(function(e){return B[e]}))}function q(e){var t=e.getBoundingClientRect();return{width:t.width,height:t.height,top:t.top,right:t.right,bottom:t.bottom,left:t.left,x:t.left,y:t.top}}function W(e){var t=a(e);return{scrollLeft:t.pageXOffset,scrollTop:t.pageYOffset}}function H(e){return q(p(e)).left+W(e).scrollLeft}function J(e){var t=f(e),n=t.overflow,r=t.overflowX,o=t.overflowY;return/auto|scroll|overlay|hidden/.test(n+o+r)}function U(e,t){void 0===t&&(t=[]);var n=function e(t){return["html","body","#document"].indexOf(u(t))>=0?t.ownerDocument.body:c(t)&&J(t)?t:e(d(t))}(e),r="body"===u(n),o=a(n),i=r?[o].concat(o.visualViewport||[],J(n)?n:[]):n,s=t.concat(i);return r?s:s.concat(U(d(i)))}function _(e){return Object.assign(Object.assign({},e),{},{left:e.x,top:e.y,right:e.x+e.width,bottom:e.y+e.height})}function z(e,t){return"viewport"===t?_(function(e){var t=a(e),n=p(e),r=t.visualViewport,o=n.clientWidth,i=n.clientHeight,c=0,s=0;return r&&(o=r.width,i=r.height,/^((?!chrome|android).)*safari/i.test(navigator.userAgent)||(c=r.offsetLeft,s=r.offsetTop)),{width:o,height:i,x:c+H(e),y:s}}(e)):c(t)?function(e){var t=q(e);return t.top=t.top+e.clientTop,t.left=t.left+e.clientLeft,t.bottom=t.top+e.clientHeight,t.right=t.left+e.clientWidth,t.width=e.clientWidth,t.height=e.clientHeight,t.x=t.left,t.y=t.top,t}(t):_(function(e){var t=p(e),n=W(e),r=e.ownerDocument.body,o=Math.max(t.scrollWidth,t.clientWidth,r?r.scrollWidth:0,r?r.clientWidth:0),a=Math.max(t.scrollHeight,t.clientHeight,r?r.scrollHeight:0,r?r.clientHeight:0),i=-n.scrollLeft+H(e),c=-n.scrollTop;return"rtl"===f(r||t).direction&&(i+=Math.max(t.clientWidth,r?r.clientWidth:0)-o),{width:o,height:a,x:i,y:c}}(p(e)))}function F(e,t,n){var r="clippingParents"===t?function(e){var t=U(d(e)),n=["absolute","fixed"].indexOf(f(e).position)>=0&&c(e)?b(e):e;return i(n)?t.filter((function(e){return i(e)&&s(e,n)&&"body"!==u(e)})):[]}(e):[].concat(t),o=[].concat(r,[n]),a=o[0],l=o.reduce((function(t,n){var r=z(e,n);return t.top=Math.max(r.top,t.top),t.right=Math.min(r.right,t.right),t.bottom=Math.min(r.bottom,t.bottom),t.left=Math.max(r.left,t.left),t}),z(e,a));return l.width=l.right-l.left,l.height=l.bottom-l.top,l.x=l.left,l.y=l.top,l}function V(e){return e.split("-")[1]}function Z(e){var t,n=e.reference,o=e.element,a=e.placement,i=a?r(a):null,c=a?V(a):null,s=n.x+n.width/2-o.width/2,u=n.y+n.height/2-o.height/2;switch(i){case O:t={x:s,y:n.y-o.height};break;case w:t={x:s,y:n.y+n.height};break;case j:t={x:n.x+n.width,y:u};break;case x:t={x:n.x-o.width,y:u};break;default:t={x:n.x,y:n.y}}var f=i?v(i):null;if(null!=f){var l="y"===f?"height":"width";switch(c){case"start":t[f]=Math.floor(t[f])-Math.floor(n[l]/2-o[l]/2);break;case"end":t[f]=Math.floor(t[f])+Math.ceil(n[l]/2-o[l]/2)}}return t}function G(e,t){void 0===t&&(t={});var n=t,r=n.placement,o=void 0===r?e.placement:r,a=n.boundary,c=void 0===a?"clippingParents":a,s=n.rootBoundary,u=void 0===s?"viewport":s,f=n.elementContext,l=void 0===f?"popper":f,d=n.altBoundary,m=void 0!==d&&d,b=n.padding,v=void 0===b?0:b,h=g("number"!==typeof v?v:y(v,E)),x="popper"===l?"reference":"popper",C=e.elements.reference,N=e.rects.popper,k=e.elements[m?x:l],M=F(i(k)?k:k.contextElement||p(e.elements.popper),c,u),R=q(C),P=Z({reference:R,element:N,strategy:"absolute",placement:o}),D=_(Object.assign(Object.assign({},N),P)),A="popper"===l?D:R,T={top:M.top-A.top+h.top,bottom:A.bottom-M.bottom+h.bottom,left:M.left-A.left+h.left,right:A.right-M.right+h.right},L=e.modifiersData.offset;if("popper"===l&&L){var S=L[o];Object.keys(T).forEach((function(e){var t=[j,w].indexOf(e)>=0?1:-1,n=[O,w].indexOf(e)>=0?"y":"x";T[e]+=S[n]*t}))}return T}var K={name:"flip",enabled:!0,phase:"main",fn:function(e){var t=e.state,n=e.options,o=e.name;if(!t.modifiersData[o]._skip){for(var a=n.mainAxis,i=void 0===a||a,c=n.altAxis,s=void 0===c||c,u=n.fallbackPlacements,f=n.padding,l=n.boundary,p=n.rootBoundary,d=n.altBoundary,m=n.flipVariations,b=void 0===m||m,v=n.allowedAutoPlacements,h=t.options.placement,g=r(h),y=u||(g===h||!b?[S(h)]:function(e){if("auto"===r(e))return[];var t=S(e);return[I(e),t,I(t)]}(h)),k=[h].concat(y).reduce((function(e,n){return e.concat("auto"===r(n)?function(e,t){void 0===t&&(t={});var n=t,o=n.placement,a=n.boundary,i=n.rootBoundary,c=n.padding,s=n.flipVariations,u=n.allowedAutoPlacements,f=void 0===u?N:u,l=V(o),p=l?s?C:C.filter((function(e){return V(e)===l})):E,d=p.filter((function(e){return f.indexOf(e)>=0}));0===d.length&&(d=p);var m=d.reduce((function(t,n){return t[n]=G(e,{placement:n,boundary:a,rootBoundary:i,padding:c})[r(n)],t}),{});return Object.keys(m).sort((function(e,t){return m[e]-m[t]}))}(t,{placement:n,boundary:l,rootBoundary:p,padding:f,flipVariations:b,allowedAutoPlacements:v}):n)}),[]),M=t.rects.reference,R=t.rects.popper,P=new Map,D=!0,A=k[0],T=0;T<k.length;T++){var L=k[T],B=r(L),q="start"===V(L),W=[O,w].indexOf(B)>=0,H=W?"width":"height",J=G(t,{placement:L,boundary:l,rootBoundary:p,altBoundary:d,padding:f}),U=W?q?j:x:q?w:O;M[H]>R[H]&&(U=S(U));var _=S(U),z=[];if(i&&z.push(J[B]<=0),s&&z.push(J[U]<=0,J[_]<=0),z.every((function(e){return e}))){A=L,D=!1;break}P.set(L,z)}if(D)for(var F=function(e){var t=k.find((function(t){var n=P.get(t);if(n)return n.slice(0,e).every((function(e){return e}))}));if(t)return A=t,"break"},Z=b?3:1;Z>0;Z--){if("break"===F(Z))break}t.placement!==A&&(t.modifiersData[o]._skip=!0,t.placement=A,t.reset=!0)}},requiresIfExists:["offset"],data:{_skip:!1}};function Q(e,t,n){return void 0===n&&(n={x:0,y:0}),{top:e.top-t.height-n.y,right:e.right-t.width+n.x,bottom:e.bottom-t.height+n.y,left:e.left-t.width-n.x}}function X(e){return[O,j,w,x].some((function(t){return e[t]>=0}))}var Y={name:"hide",enabled:!0,phase:"main",requiresIfExists:["preventOverflow"],fn:function(e){var t=e.state,n=e.name,r=t.rects.reference,o=t.rects.popper,a=t.modifiersData.preventOverflow,i=G(t,{elementContext:"reference"}),c=G(t,{altBoundary:!0}),s=Q(i,r),u=Q(c,o,a),f=X(s),l=X(u);t.modifiersData[n]={referenceClippingOffsets:s,popperEscapeOffsets:u,isReferenceHidden:f,hasPopperEscaped:l},t.attributes.popper=Object.assign(Object.assign({},t.attributes.popper),{},{"data-popper-reference-hidden":f,"data-popper-escaped":l})}};var $={name:"offset",enabled:!0,phase:"main",requires:["popperOffsets"],fn:function(e){var t=e.state,n=e.options,o=e.name,a=n.offset,i=void 0===a?[0,0]:a,c=N.reduce((function(e,n){return e[n]=function(e,t,n){var o=r(e),a=[x,O].indexOf(o)>=0?-1:1,i="function"===typeof n?n(Object.assign(Object.assign({},t),{},{placement:e})):n,c=i[0],s=i[1];return c=c||0,s=(s||0)*a,[x,j].indexOf(o)>=0?{x:s,y:c}:{x:c,y:s}}(n,t.rects,i),e}),{}),s=c[t.placement],u=s.x,f=s.y;null!=t.modifiersData.popperOffsets&&(t.modifiersData.popperOffsets.x+=u,t.modifiersData.popperOffsets.y+=f),t.modifiersData[o]=c}};var ee={name:"popperOffsets",enabled:!0,phase:"read",fn:function(e){var t=e.state,n=e.name;t.modifiersData[n]=Z({reference:t.rects.reference,element:t.rects.popper,strategy:"absolute",placement:t.placement})},data:{}};var te={name:"preventOverflow",enabled:!0,phase:"main",fn:function(e){var t=e.state,n=e.options,a=e.name,i=n.mainAxis,c=void 0===i||i,s=n.altAxis,u=void 0!==s&&s,f=n.boundary,l=n.rootBoundary,p=n.altBoundary,d=n.padding,m=n.tether,g=void 0===m||m,y=n.tetherOffset,E=void 0===y?0:y,C=G(t,{boundary:f,rootBoundary:l,padding:d,altBoundary:p}),N=r(t.placement),k=V(t.placement),M=!k,R=v(N),P="x"===R?"y":"x",D=t.modifiersData.popperOffsets,A=t.rects.reference,T=t.rects.popper,L="function"===typeof E?E(Object.assign(Object.assign({},t.rects),{},{placement:t.placement})):E,S={x:0,y:0};if(D){if(c){var B="y"===R?O:x,I="y"===R?w:j,q="y"===R?"height":"width",W=D[R],H=D[R]+C[B],J=D[R]-C[I],U=g?-T[q]/2:0,_="start"===k?A[q]:T[q],z="start"===k?-T[q]:-A[q],F=t.elements.arrow,Z=g&&F?o(F):{width:0,height:0},K=t.modifiersData["arrow#persistent"]?t.modifiersData["arrow#persistent"].padding:{top:0,right:0,bottom:0,left:0},Q=K[B],X=K[I],Y=h(0,A[q],Z[q]),$=M?A[q]/2-U-Y-Q-L:_-Y-Q-L,ee=M?-A[q]/2+U+Y+X+L:z+Y+X+L,te=t.elements.arrow&&b(t.elements.arrow),ne=te?"y"===R?te.clientTop||0:te.clientLeft||0:0,re=t.modifiersData.offset?t.modifiersData.offset[t.placement][R]:0,oe=D[R]+$-re-ne,ae=D[R]+ee-re,ie=h(g?Math.min(H,oe):H,W,g?Math.max(J,ae):J);D[R]=ie,S[R]=ie-W}if(u){var ce="x"===R?O:x,se="x"===R?w:j,ue=D[P],fe=h(ue+C[ce],ue,ue-C[se]);D[P]=fe,S[P]=fe-ue}t.modifiersData[a]=S}},requiresIfExists:["offset"]};function ne(e,t,n){void 0===n&&(n=!1);var r=p(t),o=q(e),i=c(t),s={scrollLeft:0,scrollTop:0},f={x:0,y:0};return(i||!i&&!n)&&(("body"!==u(t)||J(r))&&(s=function(e){return e!==a(e)&&c(e)?{scrollLeft:(t=e).scrollLeft,scrollTop:t.scrollTop}:W(e);var t}(t)),c(t)?((f=q(t)).x+=t.clientLeft,f.y+=t.clientTop):r&&(f.x=H(r))),{x:o.left+s.scrollLeft-f.x,y:o.top+s.scrollTop-f.y,width:o.width,height:o.height}}function re(e){var t=new Map,n=new Set,r=[];return e.forEach((function(e){t.set(e.name,e)})),e.forEach((function(e){n.has(e.name)||function e(o){n.add(o.name),[].concat(o.requires||[],o.requiresIfExists||[]).forEach((function(r){if(!n.has(r)){var o=t.get(r);o&&e(o)}})),r.push(o)}(e)})),r}function oe(e){var t;return function(){return t||(t=new Promise((function(n){Promise.resolve().then((function(){t=void 0,n(e())}))}))),t}}var ae={placement:"bottom",modifiers:[],strategy:"absolute"};function ie(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return!t.some((function(e){return!(e&&"function"===typeof e.getBoundingClientRect)}))}function ce(e){void 0===e&&(e={});var t=e,n=t.defaultModifiers,r=void 0===n?[]:n,a=t.defaultOptions,c=void 0===a?ae:a;return function(e,t,n){void 0===n&&(n=c);var a={placement:"bottom",orderedModifiers:[],options:Object.assign(Object.assign({},ae),c),modifiersData:{},elements:{reference:e,popper:t},attributes:{},styles:{}},s=[],u=!1,f={state:a,setOptions:function(n){l(),a.options=Object.assign(Object.assign(Object.assign({},c),a.options),n),a.scrollParents={reference:i(e)?U(e):e.contextElement?U(e.contextElement):[],popper:U(t)};var o=function(e){var t=re(e);return k.reduce((function(e,n){return e.concat(t.filter((function(e){return e.phase===n})))}),[])}(function(e){var t=e.reduce((function(e,t){var n=e[t.name];return e[t.name]=n?Object.assign(Object.assign(Object.assign({},n),t),{},{options:Object.assign(Object.assign({},n.options),t.options),data:Object.assign(Object.assign({},n.data),t.data)}):t,e}),{});return Object.keys(t).map((function(e){return t[e]}))}([].concat(r,a.options.modifiers)));return a.orderedModifiers=o.filter((function(e){return e.enabled})),a.orderedModifiers.forEach((function(e){var t=e.name,n=e.options,r=void 0===n?{}:n,o=e.effect;if("function"===typeof o){var i=o({state:a,name:t,instance:f,options:r}),c=function(){};s.push(i||c)}})),f.update()},forceUpdate:function(){if(!u){var e=a.elements,t=e.reference,n=e.popper;if(ie(t,n)){a.rects={reference:ne(t,b(n),"fixed"===a.options.strategy),popper:o(n)},a.reset=!1,a.placement=a.options.placement,a.orderedModifiers.forEach((function(e){return a.modifiersData[e.name]=Object.assign({},e.data)}));for(var r=0;r<a.orderedModifiers.length;r++)if(!0!==a.reset){var i=a.orderedModifiers[r],c=i.fn,s=i.options,l=void 0===s?{}:s,p=i.name;"function"===typeof c&&(a=c({state:a,options:l,name:p,instance:f})||a)}else a.reset=!1,r=-1}}},update:oe((function(){return new Promise((function(e){f.forceUpdate(),e(a)}))})),destroy:function(){l(),u=!0}};if(!ie(e,t))return f;function l(){s.forEach((function(e){return e()})),s=[]}return f.setOptions(n).then((function(e){!u&&n.onFirstUpdate&&n.onFirstUpdate(e)})),f}}var se=ce({defaultModifiers:[Y,ee,D,T,$,K,te,M]})},i52p:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var r=n("q1tI");function o(e){var t=function(e){var t=Object(r.useRef)(e);return t.current=e,t}(e);Object(r.useEffect)((function(){return function(){return t.current()}}),[])}},knGs:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var r=n("dZvc"),o=n("q1tI"),a=function(e){var t;return"undefined"===typeof document?null:null==e?Object(r.a)().body:("function"===typeof e&&(e=e()),e&&"current"in e&&(e=e.current),(null==(t=e)?void 0:t.nodeType)&&e||null)};function i(e,t){var n=Object(o.useState)((function(){return a(e)})),r=n[0],i=n[1];if(!r){var c=a(e);c&&i(c)}return Object(o.useEffect)((function(){t&&r&&t(r)}),[t,r]),Object(o.useEffect)((function(){var t=a(e);t!==r&&i(t)}),[e,r]),r}},miik:function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));var r=n("q1tI"),o=n.n(r),a=n("3Z9Z"),i=n("JI6e"),c=n("JCBN"),s=o.a.createElement,u=function(e){Object(c.b)();return s(o.a.Fragment,null,e.index>0&&s("span",null," \xbb "),s("a",{href:e.lastElem?null:e.route.path,onClick:function(){}},e.route.title))},f=o.a.createElement,l=function(e){return f(a.a,{className:"m-0 w-100 breadcrumbs"},f(i.a,{md:{span:6,offset:3},className:""},e.breadcrumbsList&&e.breadcrumbsList.map((function(t,n){return f(u,{route:t,index:n,key:n,lastElem:n===e.breadcrumbsList.length-1})}))))}},pJDg:function(e,t,n){"use strict";var r=n("wx14"),o=n("zLVn"),a=n("TSYQ"),i=n.n(a),c=n("q1tI"),s=n.n(c),u=n("vUet"),f=s.a.forwardRef((function(e,t){var n=e.bsPrefix,a=e.size,c=e.toggle,f=e.vertical,l=e.className,p=e.as,d=void 0===p?"div":p,m=Object(o.a)(e,["bsPrefix","size","toggle","vertical","className","as"]),b=Object(u.a)(n,"btn-group"),v=b;return f&&(v=b+"-vertical"),s.a.createElement(d,Object(r.a)({},m,{ref:t,className:i()(l,v,a&&b+"-"+a,c&&b+"-toggle")}))}));f.displayName="ButtonGroup",f.defaultProps={vertical:!1,toggle:!1,role:"group"},t.a=f}}]);