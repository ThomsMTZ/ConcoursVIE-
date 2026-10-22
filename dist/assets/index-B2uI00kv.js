(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();function Wv(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var Dm={exports:{}},jl={},Um={exports:{}},Ge={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var jo=Symbol.for("react.element"),jv=Symbol.for("react.portal"),Xv=Symbol.for("react.fragment"),$v=Symbol.for("react.strict_mode"),qv=Symbol.for("react.profiler"),Yv=Symbol.for("react.provider"),Kv=Symbol.for("react.context"),Zv=Symbol.for("react.forward_ref"),Qv=Symbol.for("react.suspense"),Jv=Symbol.for("react.memo"),ex=Symbol.for("react.lazy"),xh=Symbol.iterator;function tx(t){return t===null||typeof t!="object"?null:(t=xh&&t[xh]||t["@@iterator"],typeof t=="function"?t:null)}var Fm={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Om=Object.assign,km={};function Us(t,e,n){this.props=t,this.context=e,this.refs=km,this.updater=n||Fm}Us.prototype.isReactComponent={};Us.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Us.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function zm(){}zm.prototype=Us.prototype;function tf(t,e,n){this.props=t,this.context=e,this.refs=km,this.updater=n||Fm}var nf=tf.prototype=new zm;nf.constructor=tf;Om(nf,Us.prototype);nf.isPureReactComponent=!0;var _h=Array.isArray,Bm=Object.prototype.hasOwnProperty,rf={current:null},Hm={key:!0,ref:!0,__self:!0,__source:!0};function Vm(t,e,n){var i,r={},s=null,o=null;if(e!=null)for(i in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)Bm.call(e,i)&&!Hm.hasOwnProperty(i)&&(r[i]=e[i]);var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){for(var l=Array(a),c=0;c<a;c++)l[c]=arguments[c+2];r.children=l}if(t&&t.defaultProps)for(i in a=t.defaultProps,a)r[i]===void 0&&(r[i]=a[i]);return{$$typeof:jo,type:t,key:s,ref:o,props:r,_owner:rf.current}}function nx(t,e){return{$$typeof:jo,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function sf(t){return typeof t=="object"&&t!==null&&t.$$typeof===jo}function ix(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var yh=/\/+/g;function mc(t,e){return typeof t=="object"&&t!==null&&t.key!=null?ix(""+t.key):e.toString(36)}function Ya(t,e,n,i,r){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case jo:case jv:o=!0}}if(o)return o=t,r=r(o),t=i===""?"."+mc(o,0):i,_h(r)?(n="",t!=null&&(n=t.replace(yh,"$&/")+"/"),Ya(r,e,n,"",function(c){return c})):r!=null&&(sf(r)&&(r=nx(r,n+(!r.key||o&&o.key===r.key?"":(""+r.key).replace(yh,"$&/")+"/")+t)),e.push(r)),1;if(o=0,i=i===""?".":i+":",_h(t))for(var a=0;a<t.length;a++){s=t[a];var l=i+mc(s,a);o+=Ya(s,e,n,l,r)}else if(l=tx(t),typeof l=="function")for(t=l.call(t),a=0;!(s=t.next()).done;)s=s.value,l=i+mc(s,a++),o+=Ya(s,e,n,l,r);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function ia(t,e,n){if(t==null)return t;var i=[],r=0;return Ya(t,i,"","",function(s){return e.call(n,s,r++)}),i}function rx(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var tn={current:null},Ka={transition:null},sx={ReactCurrentDispatcher:tn,ReactCurrentBatchConfig:Ka,ReactCurrentOwner:rf};function Gm(){throw Error("act(...) is not supported in production builds of React.")}Ge.Children={map:ia,forEach:function(t,e,n){ia(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return ia(t,function(){e++}),e},toArray:function(t){return ia(t,function(e){return e})||[]},only:function(t){if(!sf(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};Ge.Component=Us;Ge.Fragment=Xv;Ge.Profiler=qv;Ge.PureComponent=tf;Ge.StrictMode=$v;Ge.Suspense=Qv;Ge.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=sx;Ge.act=Gm;Ge.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var i=Om({},t.props),r=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=rf.current),e.key!==void 0&&(r=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)Bm.call(e,l)&&!Hm.hasOwnProperty(l)&&(i[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){a=Array(l);for(var c=0;c<l;c++)a[c]=arguments[c+2];i.children=a}return{$$typeof:jo,type:t.type,key:r,ref:s,props:i,_owner:o}};Ge.createContext=function(t){return t={$$typeof:Kv,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:Yv,_context:t},t.Consumer=t};Ge.createElement=Vm;Ge.createFactory=function(t){var e=Vm.bind(null,t);return e.type=t,e};Ge.createRef=function(){return{current:null}};Ge.forwardRef=function(t){return{$$typeof:Zv,render:t}};Ge.isValidElement=sf;Ge.lazy=function(t){return{$$typeof:ex,_payload:{_status:-1,_result:t},_init:rx}};Ge.memo=function(t,e){return{$$typeof:Jv,type:t,compare:e===void 0?null:e}};Ge.startTransition=function(t){var e=Ka.transition;Ka.transition={};try{t()}finally{Ka.transition=e}};Ge.unstable_act=Gm;Ge.useCallback=function(t,e){return tn.current.useCallback(t,e)};Ge.useContext=function(t){return tn.current.useContext(t)};Ge.useDebugValue=function(){};Ge.useDeferredValue=function(t){return tn.current.useDeferredValue(t)};Ge.useEffect=function(t,e){return tn.current.useEffect(t,e)};Ge.useId=function(){return tn.current.useId()};Ge.useImperativeHandle=function(t,e,n){return tn.current.useImperativeHandle(t,e,n)};Ge.useInsertionEffect=function(t,e){return tn.current.useInsertionEffect(t,e)};Ge.useLayoutEffect=function(t,e){return tn.current.useLayoutEffect(t,e)};Ge.useMemo=function(t,e){return tn.current.useMemo(t,e)};Ge.useReducer=function(t,e,n){return tn.current.useReducer(t,e,n)};Ge.useRef=function(t){return tn.current.useRef(t)};Ge.useState=function(t){return tn.current.useState(t)};Ge.useSyncExternalStore=function(t,e,n){return tn.current.useSyncExternalStore(t,e,n)};Ge.useTransition=function(){return tn.current.useTransition()};Ge.version="18.3.1";Um.exports=Ge;var Re=Um.exports;const ox=Wv(Re);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ax=Re,lx=Symbol.for("react.element"),cx=Symbol.for("react.fragment"),ux=Object.prototype.hasOwnProperty,dx=ax.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,fx={key:!0,ref:!0,__self:!0,__source:!0};function Wm(t,e,n){var i,r={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(i in e)ux.call(e,i)&&!fx.hasOwnProperty(i)&&(r[i]=e[i]);if(t&&t.defaultProps)for(i in e=t.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:lx,type:t,key:s,ref:o,props:r,_owner:dx.current}}jl.Fragment=cx;jl.jsx=Wm;jl.jsxs=Wm;Dm.exports=jl;var _=Dm.exports,yu={},jm={exports:{}},En={},Xm={exports:{}},$m={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(I,K){var Z=I.length;I.push(K);e:for(;0<Z;){var oe=Z-1>>>1,ye=I[oe];if(0<r(ye,K))I[oe]=K,I[Z]=ye,Z=oe;else break e}}function n(I){return I.length===0?null:I[0]}function i(I){if(I.length===0)return null;var K=I[0],Z=I.pop();if(Z!==K){I[0]=Z;e:for(var oe=0,ye=I.length,Fe=ye>>>1;oe<Fe;){var $=2*(oe+1)-1,ie=I[$],le=$+1,de=I[le];if(0>r(ie,Z))le<ye&&0>r(de,ie)?(I[oe]=de,I[le]=Z,oe=le):(I[oe]=ie,I[$]=Z,oe=$);else if(le<ye&&0>r(de,Z))I[oe]=de,I[le]=Z,oe=le;else break e}}return K}function r(I,K){var Z=I.sortIndex-K.sortIndex;return Z!==0?Z:I.id-K.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var l=[],c=[],u=1,f=null,h=3,p=!1,v=!1,S=!1,m=typeof setTimeout=="function"?setTimeout:null,d=typeof clearTimeout=="function"?clearTimeout:null,g=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function x(I){for(var K=n(c);K!==null;){if(K.callback===null)i(c);else if(K.startTime<=I)i(c),K.sortIndex=K.expirationTime,e(l,K);else break;K=n(c)}}function E(I){if(S=!1,x(I),!v)if(n(l)!==null)v=!0,G(L);else{var K=n(c);K!==null&&Q(E,K.startTime-I)}}function L(I,K){v=!1,S&&(S=!1,d(R),R=-1),p=!0;var Z=h;try{for(x(K),f=n(l);f!==null&&(!(f.expirationTime>K)||I&&!T());){var oe=f.callback;if(typeof oe=="function"){f.callback=null,h=f.priorityLevel;var ye=oe(f.expirationTime<=K);K=t.unstable_now(),typeof ye=="function"?f.callback=ye:f===n(l)&&i(l),x(K)}else i(l);f=n(l)}if(f!==null)var Fe=!0;else{var $=n(c);$!==null&&Q(E,$.startTime-K),Fe=!1}return Fe}finally{f=null,h=Z,p=!1}}var C=!1,A=null,R=-1,j=5,M=-1;function T(){return!(t.unstable_now()-M<j)}function W(){if(A!==null){var I=t.unstable_now();M=I;var K=!0;try{K=A(!0,I)}finally{K?V():(C=!1,A=null)}}else C=!1}var V;if(typeof g=="function")V=function(){g(W)};else if(typeof MessageChannel<"u"){var Y=new MessageChannel,ee=Y.port2;Y.port1.onmessage=W,V=function(){ee.postMessage(null)}}else V=function(){m(W,0)};function G(I){A=I,C||(C=!0,V())}function Q(I,K){R=m(function(){I(t.unstable_now())},K)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(I){I.callback=null},t.unstable_continueExecution=function(){v||p||(v=!0,G(L))},t.unstable_forceFrameRate=function(I){0>I||125<I?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):j=0<I?Math.floor(1e3/I):5},t.unstable_getCurrentPriorityLevel=function(){return h},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(I){switch(h){case 1:case 2:case 3:var K=3;break;default:K=h}var Z=h;h=K;try{return I()}finally{h=Z}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(I,K){switch(I){case 1:case 2:case 3:case 4:case 5:break;default:I=3}var Z=h;h=I;try{return K()}finally{h=Z}},t.unstable_scheduleCallback=function(I,K,Z){var oe=t.unstable_now();switch(typeof Z=="object"&&Z!==null?(Z=Z.delay,Z=typeof Z=="number"&&0<Z?oe+Z:oe):Z=oe,I){case 1:var ye=-1;break;case 2:ye=250;break;case 5:ye=1073741823;break;case 4:ye=1e4;break;default:ye=5e3}return ye=Z+ye,I={id:u++,callback:K,priorityLevel:I,startTime:Z,expirationTime:ye,sortIndex:-1},Z>oe?(I.sortIndex=Z,e(c,I),n(l)===null&&I===n(c)&&(S?(d(R),R=-1):S=!0,Q(E,Z-oe))):(I.sortIndex=ye,e(l,I),v||p||(v=!0,G(L))),I},t.unstable_shouldYield=T,t.unstable_wrapCallback=function(I){var K=h;return function(){var Z=h;h=K;try{return I.apply(this,arguments)}finally{h=Z}}}})($m);Xm.exports=$m;var hx=Xm.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var px=Re,Mn=hx;function re(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var qm=new Set,To={};function Dr(t,e){Ms(t,e),Ms(t+"Capture",e)}function Ms(t,e){for(To[t]=e,t=0;t<e.length;t++)qm.add(e[t])}var vi=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Su=Object.prototype.hasOwnProperty,mx=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Sh={},Mh={};function gx(t){return Su.call(Mh,t)?!0:Su.call(Sh,t)?!1:mx.test(t)?Mh[t]=!0:(Sh[t]=!0,!1)}function vx(t,e,n,i){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function xx(t,e,n,i){if(e===null||typeof e>"u"||vx(t,e,n,i))return!0;if(i)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function nn(t,e,n,i,r,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var Bt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Bt[t]=new nn(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Bt[e]=new nn(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Bt[t]=new nn(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Bt[t]=new nn(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Bt[t]=new nn(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Bt[t]=new nn(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Bt[t]=new nn(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Bt[t]=new nn(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Bt[t]=new nn(t,5,!1,t.toLowerCase(),null,!1,!1)});var of=/[\-:]([a-z])/g;function af(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(of,af);Bt[e]=new nn(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(of,af);Bt[e]=new nn(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(of,af);Bt[e]=new nn(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Bt[t]=new nn(t,1,!1,t.toLowerCase(),null,!1,!1)});Bt.xlinkHref=new nn("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Bt[t]=new nn(t,1,!1,t.toLowerCase(),null,!0,!0)});function lf(t,e,n,i){var r=Bt.hasOwnProperty(e)?Bt[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(xx(e,n,r,i)&&(n=null),i||r===null?gx(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):r.mustUseProperty?t[r.propertyName]=n===null?r.type===3?!1:"":n:(e=r.attributeName,i=r.attributeNamespace,n===null?t.removeAttribute(e):(r=r.type,n=r===3||r===4&&n===!0?"":""+n,i?t.setAttributeNS(i,e,n):t.setAttribute(e,n))))}var Ei=px.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,ra=Symbol.for("react.element"),Jr=Symbol.for("react.portal"),es=Symbol.for("react.fragment"),cf=Symbol.for("react.strict_mode"),Mu=Symbol.for("react.profiler"),Ym=Symbol.for("react.provider"),Km=Symbol.for("react.context"),uf=Symbol.for("react.forward_ref"),Eu=Symbol.for("react.suspense"),wu=Symbol.for("react.suspense_list"),df=Symbol.for("react.memo"),Li=Symbol.for("react.lazy"),Zm=Symbol.for("react.offscreen"),Eh=Symbol.iterator;function Vs(t){return t===null||typeof t!="object"?null:(t=Eh&&t[Eh]||t["@@iterator"],typeof t=="function"?t:null)}var pt=Object.assign,gc;function no(t){if(gc===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);gc=e&&e[1]||""}return`
`+gc+t}var vc=!1;function xc(t,e){if(!t||vc)return"";vc=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var i=c}Reflect.construct(t,[],e)}else{try{e.call()}catch(c){i=c}t.call(e.prototype)}else{try{throw Error()}catch(c){i=c}t()}}catch(c){if(c&&i&&typeof c.stack=="string"){for(var r=c.stack.split(`
`),s=i.stack.split(`
`),o=r.length-1,a=s.length-1;1<=o&&0<=a&&r[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(r[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||r[o]!==s[a]){var l=`
`+r[o].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=o&&0<=a);break}}}finally{vc=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?no(t):""}function _x(t){switch(t.tag){case 5:return no(t.type);case 16:return no("Lazy");case 13:return no("Suspense");case 19:return no("SuspenseList");case 0:case 2:case 15:return t=xc(t.type,!1),t;case 11:return t=xc(t.type.render,!1),t;case 1:return t=xc(t.type,!0),t;default:return""}}function Tu(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case es:return"Fragment";case Jr:return"Portal";case Mu:return"Profiler";case cf:return"StrictMode";case Eu:return"Suspense";case wu:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case Km:return(t.displayName||"Context")+".Consumer";case Ym:return(t._context.displayName||"Context")+".Provider";case uf:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case df:return e=t.displayName||null,e!==null?e:Tu(t.type)||"Memo";case Li:e=t._payload,t=t._init;try{return Tu(t(e))}catch{}}return null}function yx(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Tu(e);case 8:return e===cf?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Ki(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Qm(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function Sx(t){var e=Qm(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),i=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var r=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return r.call(this)},set:function(o){i=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return i},setValue:function(o){i=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function sa(t){t._valueTracker||(t._valueTracker=Sx(t))}function Jm(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),i="";return t&&(i=Qm(t)?t.checked?"true":"false":t.value),t=i,t!==n?(e.setValue(t),!0):!1}function ml(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Au(t,e){var n=e.checked;return pt({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function wh(t,e){var n=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;n=Ki(e.value!=null?e.value:n),t._wrapperState={initialChecked:i,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function e0(t,e){e=e.checked,e!=null&&lf(t,"checked",e,!1)}function bu(t,e){e0(t,e);var n=Ki(e.value),i=e.type;if(n!=null)i==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(i==="submit"||i==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Cu(t,e.type,n):e.hasOwnProperty("defaultValue")&&Cu(t,e.type,Ki(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Th(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Cu(t,e,n){(e!=="number"||ml(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var io=Array.isArray;function fs(t,e,n,i){if(t=t.options,e){e={};for(var r=0;r<n.length;r++)e["$"+n[r]]=!0;for(n=0;n<t.length;n++)r=e.hasOwnProperty("$"+t[n].value),t[n].selected!==r&&(t[n].selected=r),r&&i&&(t[n].defaultSelected=!0)}else{for(n=""+Ki(n),e=null,r=0;r<t.length;r++){if(t[r].value===n){t[r].selected=!0,i&&(t[r].defaultSelected=!0);return}e!==null||t[r].disabled||(e=t[r])}e!==null&&(e.selected=!0)}}function Ru(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(re(91));return pt({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Ah(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(re(92));if(io(n)){if(1<n.length)throw Error(re(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:Ki(n)}}function t0(t,e){var n=Ki(e.value),i=Ki(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),i!=null&&(t.defaultValue=""+i)}function bh(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function n0(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Pu(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?n0(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var oa,i0=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,i,r){MSApp.execUnsafeLocalFunction(function(){return t(e,n,i,r)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(oa=oa||document.createElement("div"),oa.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=oa.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Ao(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var uo={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Mx=["Webkit","ms","Moz","O"];Object.keys(uo).forEach(function(t){Mx.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),uo[e]=uo[t]})});function r0(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||uo.hasOwnProperty(t)&&uo[t]?(""+e).trim():e+"px"}function s0(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var i=n.indexOf("--")===0,r=r0(n,e[n],i);n==="float"&&(n="cssFloat"),i?t.setProperty(n,r):t[n]=r}}var Ex=pt({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Nu(t,e){if(e){if(Ex[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(re(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(re(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(re(61))}if(e.style!=null&&typeof e.style!="object")throw Error(re(62))}}function Lu(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Iu=null;function ff(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Du=null,hs=null,ps=null;function Ch(t){if(t=qo(t)){if(typeof Du!="function")throw Error(re(280));var e=t.stateNode;e&&(e=Kl(e),Du(t.stateNode,t.type,e))}}function o0(t){hs?ps?ps.push(t):ps=[t]:hs=t}function a0(){if(hs){var t=hs,e=ps;if(ps=hs=null,Ch(t),e)for(t=0;t<e.length;t++)Ch(e[t])}}function l0(t,e){return t(e)}function c0(){}var _c=!1;function u0(t,e,n){if(_c)return t(e,n);_c=!0;try{return l0(t,e,n)}finally{_c=!1,(hs!==null||ps!==null)&&(c0(),a0())}}function bo(t,e){var n=t.stateNode;if(n===null)return null;var i=Kl(n);if(i===null)return null;n=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(t=t.type,i=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!i;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(re(231,e,typeof n));return n}var Uu=!1;if(vi)try{var Gs={};Object.defineProperty(Gs,"passive",{get:function(){Uu=!0}}),window.addEventListener("test",Gs,Gs),window.removeEventListener("test",Gs,Gs)}catch{Uu=!1}function wx(t,e,n,i,r,s,o,a,l){var c=Array.prototype.slice.call(arguments,3);try{e.apply(n,c)}catch(u){this.onError(u)}}var fo=!1,gl=null,vl=!1,Fu=null,Tx={onError:function(t){fo=!0,gl=t}};function Ax(t,e,n,i,r,s,o,a,l){fo=!1,gl=null,wx.apply(Tx,arguments)}function bx(t,e,n,i,r,s,o,a,l){if(Ax.apply(this,arguments),fo){if(fo){var c=gl;fo=!1,gl=null}else throw Error(re(198));vl||(vl=!0,Fu=c)}}function Ur(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function d0(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Rh(t){if(Ur(t)!==t)throw Error(re(188))}function Cx(t){var e=t.alternate;if(!e){if(e=Ur(t),e===null)throw Error(re(188));return e!==t?null:t}for(var n=t,i=e;;){var r=n.return;if(r===null)break;var s=r.alternate;if(s===null){if(i=r.return,i!==null){n=i;continue}break}if(r.child===s.child){for(s=r.child;s;){if(s===n)return Rh(r),t;if(s===i)return Rh(r),e;s=s.sibling}throw Error(re(188))}if(n.return!==i.return)n=r,i=s;else{for(var o=!1,a=r.child;a;){if(a===n){o=!0,n=r,i=s;break}if(a===i){o=!0,i=r,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,i=r;break}if(a===i){o=!0,i=s,n=r;break}a=a.sibling}if(!o)throw Error(re(189))}}if(n.alternate!==i)throw Error(re(190))}if(n.tag!==3)throw Error(re(188));return n.stateNode.current===n?t:e}function f0(t){return t=Cx(t),t!==null?h0(t):null}function h0(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=h0(t);if(e!==null)return e;t=t.sibling}return null}var p0=Mn.unstable_scheduleCallback,Ph=Mn.unstable_cancelCallback,Rx=Mn.unstable_shouldYield,Px=Mn.unstable_requestPaint,yt=Mn.unstable_now,Nx=Mn.unstable_getCurrentPriorityLevel,hf=Mn.unstable_ImmediatePriority,m0=Mn.unstable_UserBlockingPriority,xl=Mn.unstable_NormalPriority,Lx=Mn.unstable_LowPriority,g0=Mn.unstable_IdlePriority,Xl=null,ei=null;function Ix(t){if(ei&&typeof ei.onCommitFiberRoot=="function")try{ei.onCommitFiberRoot(Xl,t,void 0,(t.current.flags&128)===128)}catch{}}var jn=Math.clz32?Math.clz32:Fx,Dx=Math.log,Ux=Math.LN2;function Fx(t){return t>>>=0,t===0?32:31-(Dx(t)/Ux|0)|0}var aa=64,la=4194304;function ro(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function _l(t,e){var n=t.pendingLanes;if(n===0)return 0;var i=0,r=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~r;a!==0?i=ro(a):(s&=o,s!==0&&(i=ro(s)))}else o=n&~r,o!==0?i=ro(o):s!==0&&(i=ro(s));if(i===0)return 0;if(e!==0&&e!==i&&!(e&r)&&(r=i&-i,s=e&-e,r>=s||r===16&&(s&4194240)!==0))return e;if(i&4&&(i|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=i;0<e;)n=31-jn(e),r=1<<n,i|=t[n],e&=~r;return i}function Ox(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function kx(t,e){for(var n=t.suspendedLanes,i=t.pingedLanes,r=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-jn(s),a=1<<o,l=r[o];l===-1?(!(a&n)||a&i)&&(r[o]=Ox(a,e)):l<=e&&(t.expiredLanes|=a),s&=~a}}function Ou(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function v0(){var t=aa;return aa<<=1,!(aa&4194240)&&(aa=64),t}function yc(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Xo(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-jn(e),t[e]=n}function zx(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var i=t.eventTimes;for(t=t.expirationTimes;0<n;){var r=31-jn(n),s=1<<r;e[r]=0,i[r]=-1,t[r]=-1,n&=~s}}function pf(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var i=31-jn(n),r=1<<i;r&e|t[i]&e&&(t[i]|=e),n&=~r}}var nt=0;function x0(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var _0,mf,y0,S0,M0,ku=!1,ca=[],zi=null,Bi=null,Hi=null,Co=new Map,Ro=new Map,Di=[],Bx="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Nh(t,e){switch(t){case"focusin":case"focusout":zi=null;break;case"dragenter":case"dragleave":Bi=null;break;case"mouseover":case"mouseout":Hi=null;break;case"pointerover":case"pointerout":Co.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ro.delete(e.pointerId)}}function Ws(t,e,n,i,r,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:i,nativeEvent:s,targetContainers:[r]},e!==null&&(e=qo(e),e!==null&&mf(e)),t):(t.eventSystemFlags|=i,e=t.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),t)}function Hx(t,e,n,i,r){switch(e){case"focusin":return zi=Ws(zi,t,e,n,i,r),!0;case"dragenter":return Bi=Ws(Bi,t,e,n,i,r),!0;case"mouseover":return Hi=Ws(Hi,t,e,n,i,r),!0;case"pointerover":var s=r.pointerId;return Co.set(s,Ws(Co.get(s)||null,t,e,n,i,r)),!0;case"gotpointercapture":return s=r.pointerId,Ro.set(s,Ws(Ro.get(s)||null,t,e,n,i,r)),!0}return!1}function E0(t){var e=xr(t.target);if(e!==null){var n=Ur(e);if(n!==null){if(e=n.tag,e===13){if(e=d0(n),e!==null){t.blockedOn=e,M0(t.priority,function(){y0(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Za(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=zu(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var i=new n.constructor(n.type,n);Iu=i,n.target.dispatchEvent(i),Iu=null}else return e=qo(n),e!==null&&mf(e),t.blockedOn=n,!1;e.shift()}return!0}function Lh(t,e,n){Za(t)&&n.delete(e)}function Vx(){ku=!1,zi!==null&&Za(zi)&&(zi=null),Bi!==null&&Za(Bi)&&(Bi=null),Hi!==null&&Za(Hi)&&(Hi=null),Co.forEach(Lh),Ro.forEach(Lh)}function js(t,e){t.blockedOn===e&&(t.blockedOn=null,ku||(ku=!0,Mn.unstable_scheduleCallback(Mn.unstable_NormalPriority,Vx)))}function Po(t){function e(r){return js(r,t)}if(0<ca.length){js(ca[0],t);for(var n=1;n<ca.length;n++){var i=ca[n];i.blockedOn===t&&(i.blockedOn=null)}}for(zi!==null&&js(zi,t),Bi!==null&&js(Bi,t),Hi!==null&&js(Hi,t),Co.forEach(e),Ro.forEach(e),n=0;n<Di.length;n++)i=Di[n],i.blockedOn===t&&(i.blockedOn=null);for(;0<Di.length&&(n=Di[0],n.blockedOn===null);)E0(n),n.blockedOn===null&&Di.shift()}var ms=Ei.ReactCurrentBatchConfig,yl=!0;function Gx(t,e,n,i){var r=nt,s=ms.transition;ms.transition=null;try{nt=1,gf(t,e,n,i)}finally{nt=r,ms.transition=s}}function Wx(t,e,n,i){var r=nt,s=ms.transition;ms.transition=null;try{nt=4,gf(t,e,n,i)}finally{nt=r,ms.transition=s}}function gf(t,e,n,i){if(yl){var r=zu(t,e,n,i);if(r===null)Pc(t,e,i,Sl,n),Nh(t,i);else if(Hx(r,t,e,n,i))i.stopPropagation();else if(Nh(t,i),e&4&&-1<Bx.indexOf(t)){for(;r!==null;){var s=qo(r);if(s!==null&&_0(s),s=zu(t,e,n,i),s===null&&Pc(t,e,i,Sl,n),s===r)break;r=s}r!==null&&i.stopPropagation()}else Pc(t,e,i,null,n)}}var Sl=null;function zu(t,e,n,i){if(Sl=null,t=ff(i),t=xr(t),t!==null)if(e=Ur(t),e===null)t=null;else if(n=e.tag,n===13){if(t=d0(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Sl=t,null}function w0(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Nx()){case hf:return 1;case m0:return 4;case xl:case Lx:return 16;case g0:return 536870912;default:return 16}default:return 16}}var Oi=null,vf=null,Qa=null;function T0(){if(Qa)return Qa;var t,e=vf,n=e.length,i,r="value"in Oi?Oi.value:Oi.textContent,s=r.length;for(t=0;t<n&&e[t]===r[t];t++);var o=n-t;for(i=1;i<=o&&e[n-i]===r[s-i];i++);return Qa=r.slice(t,1<i?1-i:void 0)}function Ja(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function ua(){return!0}function Ih(){return!1}function wn(t){function e(n,i,r,s,o){this._reactName=n,this._targetInst=r,this.type=i,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?ua:Ih,this.isPropagationStopped=Ih,this}return pt(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=ua)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=ua)},persist:function(){},isPersistent:ua}),e}var Fs={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},xf=wn(Fs),$o=pt({},Fs,{view:0,detail:0}),jx=wn($o),Sc,Mc,Xs,$l=pt({},$o,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:_f,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Xs&&(Xs&&t.type==="mousemove"?(Sc=t.screenX-Xs.screenX,Mc=t.screenY-Xs.screenY):Mc=Sc=0,Xs=t),Sc)},movementY:function(t){return"movementY"in t?t.movementY:Mc}}),Dh=wn($l),Xx=pt({},$l,{dataTransfer:0}),$x=wn(Xx),qx=pt({},$o,{relatedTarget:0}),Ec=wn(qx),Yx=pt({},Fs,{animationName:0,elapsedTime:0,pseudoElement:0}),Kx=wn(Yx),Zx=pt({},Fs,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),Qx=wn(Zx),Jx=pt({},Fs,{data:0}),Uh=wn(Jx),e_={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},t_={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},n_={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function i_(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=n_[t])?!!e[t]:!1}function _f(){return i_}var r_=pt({},$o,{key:function(t){if(t.key){var e=e_[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Ja(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?t_[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:_f,charCode:function(t){return t.type==="keypress"?Ja(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Ja(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),s_=wn(r_),o_=pt({},$l,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Fh=wn(o_),a_=pt({},$o,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:_f}),l_=wn(a_),c_=pt({},Fs,{propertyName:0,elapsedTime:0,pseudoElement:0}),u_=wn(c_),d_=pt({},$l,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),f_=wn(d_),h_=[9,13,27,32],yf=vi&&"CompositionEvent"in window,ho=null;vi&&"documentMode"in document&&(ho=document.documentMode);var p_=vi&&"TextEvent"in window&&!ho,A0=vi&&(!yf||ho&&8<ho&&11>=ho),Oh=" ",kh=!1;function b0(t,e){switch(t){case"keyup":return h_.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function C0(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var ts=!1;function m_(t,e){switch(t){case"compositionend":return C0(e);case"keypress":return e.which!==32?null:(kh=!0,Oh);case"textInput":return t=e.data,t===Oh&&kh?null:t;default:return null}}function g_(t,e){if(ts)return t==="compositionend"||!yf&&b0(t,e)?(t=T0(),Qa=vf=Oi=null,ts=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return A0&&e.locale!=="ko"?null:e.data;default:return null}}var v_={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function zh(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!v_[t.type]:e==="textarea"}function R0(t,e,n,i){o0(i),e=Ml(e,"onChange"),0<e.length&&(n=new xf("onChange","change",null,n,i),t.push({event:n,listeners:e}))}var po=null,No=null;function x_(t){B0(t,0)}function ql(t){var e=rs(t);if(Jm(e))return t}function __(t,e){if(t==="change")return e}var P0=!1;if(vi){var wc;if(vi){var Tc="oninput"in document;if(!Tc){var Bh=document.createElement("div");Bh.setAttribute("oninput","return;"),Tc=typeof Bh.oninput=="function"}wc=Tc}else wc=!1;P0=wc&&(!document.documentMode||9<document.documentMode)}function Hh(){po&&(po.detachEvent("onpropertychange",N0),No=po=null)}function N0(t){if(t.propertyName==="value"&&ql(No)){var e=[];R0(e,No,t,ff(t)),u0(x_,e)}}function y_(t,e,n){t==="focusin"?(Hh(),po=e,No=n,po.attachEvent("onpropertychange",N0)):t==="focusout"&&Hh()}function S_(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return ql(No)}function M_(t,e){if(t==="click")return ql(e)}function E_(t,e){if(t==="input"||t==="change")return ql(e)}function w_(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var $n=typeof Object.is=="function"?Object.is:w_;function Lo(t,e){if($n(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),i=Object.keys(e);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var r=n[i];if(!Su.call(e,r)||!$n(t[r],e[r]))return!1}return!0}function Vh(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Gh(t,e){var n=Vh(t);t=0;for(var i;n;){if(n.nodeType===3){if(i=t+n.textContent.length,t<=e&&i>=e)return{node:n,offset:e-t};t=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Vh(n)}}function L0(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?L0(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function I0(){for(var t=window,e=ml();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=ml(t.document)}return e}function Sf(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function T_(t){var e=I0(),n=t.focusedElem,i=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&L0(n.ownerDocument.documentElement,n)){if(i!==null&&Sf(n)){if(e=i.start,t=i.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var r=n.textContent.length,s=Math.min(i.start,r);i=i.end===void 0?s:Math.min(i.end,r),!t.extend&&s>i&&(r=i,i=s,s=r),r=Gh(n,s);var o=Gh(n,i);r&&o&&(t.rangeCount!==1||t.anchorNode!==r.node||t.anchorOffset!==r.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),t.removeAllRanges(),s>i?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var A_=vi&&"documentMode"in document&&11>=document.documentMode,ns=null,Bu=null,mo=null,Hu=!1;function Wh(t,e,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Hu||ns==null||ns!==ml(i)||(i=ns,"selectionStart"in i&&Sf(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),mo&&Lo(mo,i)||(mo=i,i=Ml(Bu,"onSelect"),0<i.length&&(e=new xf("onSelect","select",null,e,n),t.push({event:e,listeners:i}),e.target=ns)))}function da(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var is={animationend:da("Animation","AnimationEnd"),animationiteration:da("Animation","AnimationIteration"),animationstart:da("Animation","AnimationStart"),transitionend:da("Transition","TransitionEnd")},Ac={},D0={};vi&&(D0=document.createElement("div").style,"AnimationEvent"in window||(delete is.animationend.animation,delete is.animationiteration.animation,delete is.animationstart.animation),"TransitionEvent"in window||delete is.transitionend.transition);function Yl(t){if(Ac[t])return Ac[t];if(!is[t])return t;var e=is[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in D0)return Ac[t]=e[n];return t}var U0=Yl("animationend"),F0=Yl("animationiteration"),O0=Yl("animationstart"),k0=Yl("transitionend"),z0=new Map,jh="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function er(t,e){z0.set(t,e),Dr(e,[t])}for(var bc=0;bc<jh.length;bc++){var Cc=jh[bc],b_=Cc.toLowerCase(),C_=Cc[0].toUpperCase()+Cc.slice(1);er(b_,"on"+C_)}er(U0,"onAnimationEnd");er(F0,"onAnimationIteration");er(O0,"onAnimationStart");er("dblclick","onDoubleClick");er("focusin","onFocus");er("focusout","onBlur");er(k0,"onTransitionEnd");Ms("onMouseEnter",["mouseout","mouseover"]);Ms("onMouseLeave",["mouseout","mouseover"]);Ms("onPointerEnter",["pointerout","pointerover"]);Ms("onPointerLeave",["pointerout","pointerover"]);Dr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Dr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Dr("onBeforeInput",["compositionend","keypress","textInput","paste"]);Dr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Dr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Dr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var so="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),R_=new Set("cancel close invalid load scroll toggle".split(" ").concat(so));function Xh(t,e,n){var i=t.type||"unknown-event";t.currentTarget=n,bx(i,e,void 0,t),t.currentTarget=null}function B0(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var i=t[n],r=i.event;i=i.listeners;e:{var s=void 0;if(e)for(var o=i.length-1;0<=o;o--){var a=i[o],l=a.instance,c=a.currentTarget;if(a=a.listener,l!==s&&r.isPropagationStopped())break e;Xh(r,a,c),s=l}else for(o=0;o<i.length;o++){if(a=i[o],l=a.instance,c=a.currentTarget,a=a.listener,l!==s&&r.isPropagationStopped())break e;Xh(r,a,c),s=l}}}if(vl)throw t=Fu,vl=!1,Fu=null,t}function at(t,e){var n=e[Xu];n===void 0&&(n=e[Xu]=new Set);var i=t+"__bubble";n.has(i)||(H0(e,t,2,!1),n.add(i))}function Rc(t,e,n){var i=0;e&&(i|=4),H0(n,t,i,e)}var fa="_reactListening"+Math.random().toString(36).slice(2);function Io(t){if(!t[fa]){t[fa]=!0,qm.forEach(function(n){n!=="selectionchange"&&(R_.has(n)||Rc(n,!1,t),Rc(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[fa]||(e[fa]=!0,Rc("selectionchange",!1,e))}}function H0(t,e,n,i){switch(w0(e)){case 1:var r=Gx;break;case 4:r=Wx;break;default:r=gf}n=r.bind(null,e,n,t),r=void 0,!Uu||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?t.addEventListener(e,n,{capture:!0,passive:r}):t.addEventListener(e,n,!0):r!==void 0?t.addEventListener(e,n,{passive:r}):t.addEventListener(e,n,!1)}function Pc(t,e,n,i,r){var s=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var o=i.tag;if(o===3||o===4){var a=i.stateNode.containerInfo;if(a===r||a.nodeType===8&&a.parentNode===r)break;if(o===4)for(o=i.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===r||l.nodeType===8&&l.parentNode===r))return;o=o.return}for(;a!==null;){if(o=xr(a),o===null)return;if(l=o.tag,l===5||l===6){i=s=o;continue e}a=a.parentNode}}i=i.return}u0(function(){var c=s,u=ff(n),f=[];e:{var h=z0.get(t);if(h!==void 0){var p=xf,v=t;switch(t){case"keypress":if(Ja(n)===0)break e;case"keydown":case"keyup":p=s_;break;case"focusin":v="focus",p=Ec;break;case"focusout":v="blur",p=Ec;break;case"beforeblur":case"afterblur":p=Ec;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":p=Dh;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":p=$x;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":p=l_;break;case U0:case F0:case O0:p=Kx;break;case k0:p=u_;break;case"scroll":p=jx;break;case"wheel":p=f_;break;case"copy":case"cut":case"paste":p=Qx;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":p=Fh}var S=(e&4)!==0,m=!S&&t==="scroll",d=S?h!==null?h+"Capture":null:h;S=[];for(var g=c,x;g!==null;){x=g;var E=x.stateNode;if(x.tag===5&&E!==null&&(x=E,d!==null&&(E=bo(g,d),E!=null&&S.push(Do(g,E,x)))),m)break;g=g.return}0<S.length&&(h=new p(h,v,null,n,u),f.push({event:h,listeners:S}))}}if(!(e&7)){e:{if(h=t==="mouseover"||t==="pointerover",p=t==="mouseout"||t==="pointerout",h&&n!==Iu&&(v=n.relatedTarget||n.fromElement)&&(xr(v)||v[xi]))break e;if((p||h)&&(h=u.window===u?u:(h=u.ownerDocument)?h.defaultView||h.parentWindow:window,p?(v=n.relatedTarget||n.toElement,p=c,v=v?xr(v):null,v!==null&&(m=Ur(v),v!==m||v.tag!==5&&v.tag!==6)&&(v=null)):(p=null,v=c),p!==v)){if(S=Dh,E="onMouseLeave",d="onMouseEnter",g="mouse",(t==="pointerout"||t==="pointerover")&&(S=Fh,E="onPointerLeave",d="onPointerEnter",g="pointer"),m=p==null?h:rs(p),x=v==null?h:rs(v),h=new S(E,g+"leave",p,n,u),h.target=m,h.relatedTarget=x,E=null,xr(u)===c&&(S=new S(d,g+"enter",v,n,u),S.target=x,S.relatedTarget=m,E=S),m=E,p&&v)t:{for(S=p,d=v,g=0,x=S;x;x=Or(x))g++;for(x=0,E=d;E;E=Or(E))x++;for(;0<g-x;)S=Or(S),g--;for(;0<x-g;)d=Or(d),x--;for(;g--;){if(S===d||d!==null&&S===d.alternate)break t;S=Or(S),d=Or(d)}S=null}else S=null;p!==null&&$h(f,h,p,S,!1),v!==null&&m!==null&&$h(f,m,v,S,!0)}}e:{if(h=c?rs(c):window,p=h.nodeName&&h.nodeName.toLowerCase(),p==="select"||p==="input"&&h.type==="file")var L=__;else if(zh(h))if(P0)L=E_;else{L=S_;var C=y_}else(p=h.nodeName)&&p.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(L=M_);if(L&&(L=L(t,c))){R0(f,L,n,u);break e}C&&C(t,h,c),t==="focusout"&&(C=h._wrapperState)&&C.controlled&&h.type==="number"&&Cu(h,"number",h.value)}switch(C=c?rs(c):window,t){case"focusin":(zh(C)||C.contentEditable==="true")&&(ns=C,Bu=c,mo=null);break;case"focusout":mo=Bu=ns=null;break;case"mousedown":Hu=!0;break;case"contextmenu":case"mouseup":case"dragend":Hu=!1,Wh(f,n,u);break;case"selectionchange":if(A_)break;case"keydown":case"keyup":Wh(f,n,u)}var A;if(yf)e:{switch(t){case"compositionstart":var R="onCompositionStart";break e;case"compositionend":R="onCompositionEnd";break e;case"compositionupdate":R="onCompositionUpdate";break e}R=void 0}else ts?b0(t,n)&&(R="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(R="onCompositionStart");R&&(A0&&n.locale!=="ko"&&(ts||R!=="onCompositionStart"?R==="onCompositionEnd"&&ts&&(A=T0()):(Oi=u,vf="value"in Oi?Oi.value:Oi.textContent,ts=!0)),C=Ml(c,R),0<C.length&&(R=new Uh(R,t,null,n,u),f.push({event:R,listeners:C}),A?R.data=A:(A=C0(n),A!==null&&(R.data=A)))),(A=p_?m_(t,n):g_(t,n))&&(c=Ml(c,"onBeforeInput"),0<c.length&&(u=new Uh("onBeforeInput","beforeinput",null,n,u),f.push({event:u,listeners:c}),u.data=A))}B0(f,e)})}function Do(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Ml(t,e){for(var n=e+"Capture",i=[];t!==null;){var r=t,s=r.stateNode;r.tag===5&&s!==null&&(r=s,s=bo(t,n),s!=null&&i.unshift(Do(t,s,r)),s=bo(t,e),s!=null&&i.push(Do(t,s,r))),t=t.return}return i}function Or(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function $h(t,e,n,i,r){for(var s=e._reactName,o=[];n!==null&&n!==i;){var a=n,l=a.alternate,c=a.stateNode;if(l!==null&&l===i)break;a.tag===5&&c!==null&&(a=c,r?(l=bo(n,s),l!=null&&o.unshift(Do(n,l,a))):r||(l=bo(n,s),l!=null&&o.push(Do(n,l,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var P_=/\r\n?/g,N_=/\u0000|\uFFFD/g;function qh(t){return(typeof t=="string"?t:""+t).replace(P_,`
`).replace(N_,"")}function ha(t,e,n){if(e=qh(e),qh(t)!==e&&n)throw Error(re(425))}function El(){}var Vu=null,Gu=null;function Wu(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var ju=typeof setTimeout=="function"?setTimeout:void 0,L_=typeof clearTimeout=="function"?clearTimeout:void 0,Yh=typeof Promise=="function"?Promise:void 0,I_=typeof queueMicrotask=="function"?queueMicrotask:typeof Yh<"u"?function(t){return Yh.resolve(null).then(t).catch(D_)}:ju;function D_(t){setTimeout(function(){throw t})}function Nc(t,e){var n=e,i=0;do{var r=n.nextSibling;if(t.removeChild(n),r&&r.nodeType===8)if(n=r.data,n==="/$"){if(i===0){t.removeChild(r),Po(e);return}i--}else n!=="$"&&n!=="$?"&&n!=="$!"||i++;n=r}while(n);Po(e)}function Vi(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function Kh(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var Os=Math.random().toString(36).slice(2),Jn="__reactFiber$"+Os,Uo="__reactProps$"+Os,xi="__reactContainer$"+Os,Xu="__reactEvents$"+Os,U_="__reactListeners$"+Os,F_="__reactHandles$"+Os;function xr(t){var e=t[Jn];if(e)return e;for(var n=t.parentNode;n;){if(e=n[xi]||n[Jn]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=Kh(t);t!==null;){if(n=t[Jn])return n;t=Kh(t)}return e}t=n,n=t.parentNode}return null}function qo(t){return t=t[Jn]||t[xi],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function rs(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(re(33))}function Kl(t){return t[Uo]||null}var $u=[],ss=-1;function tr(t){return{current:t}}function ct(t){0>ss||(t.current=$u[ss],$u[ss]=null,ss--)}function st(t,e){ss++,$u[ss]=t.current,t.current=e}var Zi={},$t=tr(Zi),cn=tr(!1),br=Zi;function Es(t,e){var n=t.type.contextTypes;if(!n)return Zi;var i=t.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},s;for(s in n)r[s]=e[s];return i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=r),r}function un(t){return t=t.childContextTypes,t!=null}function wl(){ct(cn),ct($t)}function Zh(t,e,n){if($t.current!==Zi)throw Error(re(168));st($t,e),st(cn,n)}function V0(t,e,n){var i=t.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return n;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(re(108,yx(t)||"Unknown",r));return pt({},n,i)}function Tl(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Zi,br=$t.current,st($t,t),st(cn,cn.current),!0}function Qh(t,e,n){var i=t.stateNode;if(!i)throw Error(re(169));n?(t=V0(t,e,br),i.__reactInternalMemoizedMergedChildContext=t,ct(cn),ct($t),st($t,t)):ct(cn),st(cn,n)}var di=null,Zl=!1,Lc=!1;function G0(t){di===null?di=[t]:di.push(t)}function O_(t){Zl=!0,G0(t)}function nr(){if(!Lc&&di!==null){Lc=!0;var t=0,e=nt;try{var n=di;for(nt=1;t<n.length;t++){var i=n[t];do i=i(!0);while(i!==null)}di=null,Zl=!1}catch(r){throw di!==null&&(di=di.slice(t+1)),p0(hf,nr),r}finally{nt=e,Lc=!1}}return null}var os=[],as=0,Al=null,bl=0,bn=[],Cn=0,Cr=null,fi=1,hi="";function dr(t,e){os[as++]=bl,os[as++]=Al,Al=t,bl=e}function W0(t,e,n){bn[Cn++]=fi,bn[Cn++]=hi,bn[Cn++]=Cr,Cr=t;var i=fi;t=hi;var r=32-jn(i)-1;i&=~(1<<r),n+=1;var s=32-jn(e)+r;if(30<s){var o=r-r%5;s=(i&(1<<o)-1).toString(32),i>>=o,r-=o,fi=1<<32-jn(e)+r|n<<r|i,hi=s+t}else fi=1<<s|n<<r|i,hi=t}function Mf(t){t.return!==null&&(dr(t,1),W0(t,1,0))}function Ef(t){for(;t===Al;)Al=os[--as],os[as]=null,bl=os[--as],os[as]=null;for(;t===Cr;)Cr=bn[--Cn],bn[Cn]=null,hi=bn[--Cn],bn[Cn]=null,fi=bn[--Cn],bn[Cn]=null}var Sn=null,_n=null,ut=!1,Hn=null;function j0(t,e){var n=Rn(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function Jh(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,Sn=t,_n=Vi(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,Sn=t,_n=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Cr!==null?{id:fi,overflow:hi}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Rn(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,Sn=t,_n=null,!0):!1;default:return!1}}function qu(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Yu(t){if(ut){var e=_n;if(e){var n=e;if(!Jh(t,e)){if(qu(t))throw Error(re(418));e=Vi(n.nextSibling);var i=Sn;e&&Jh(t,e)?j0(i,n):(t.flags=t.flags&-4097|2,ut=!1,Sn=t)}}else{if(qu(t))throw Error(re(418));t.flags=t.flags&-4097|2,ut=!1,Sn=t}}}function ep(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Sn=t}function pa(t){if(t!==Sn)return!1;if(!ut)return ep(t),ut=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Wu(t.type,t.memoizedProps)),e&&(e=_n)){if(qu(t))throw X0(),Error(re(418));for(;e;)j0(t,e),e=Vi(e.nextSibling)}if(ep(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(re(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){_n=Vi(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}_n=null}}else _n=Sn?Vi(t.stateNode.nextSibling):null;return!0}function X0(){for(var t=_n;t;)t=Vi(t.nextSibling)}function ws(){_n=Sn=null,ut=!1}function wf(t){Hn===null?Hn=[t]:Hn.push(t)}var k_=Ei.ReactCurrentBatchConfig;function $s(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(re(309));var i=n.stateNode}if(!i)throw Error(re(147,t));var r=i,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=r.refs;o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(re(284));if(!n._owner)throw Error(re(290,t))}return t}function ma(t,e){throw t=Object.prototype.toString.call(e),Error(re(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function tp(t){var e=t._init;return e(t._payload)}function $0(t){function e(d,g){if(t){var x=d.deletions;x===null?(d.deletions=[g],d.flags|=16):x.push(g)}}function n(d,g){if(!t)return null;for(;g!==null;)e(d,g),g=g.sibling;return null}function i(d,g){for(d=new Map;g!==null;)g.key!==null?d.set(g.key,g):d.set(g.index,g),g=g.sibling;return d}function r(d,g){return d=Xi(d,g),d.index=0,d.sibling=null,d}function s(d,g,x){return d.index=x,t?(x=d.alternate,x!==null?(x=x.index,x<g?(d.flags|=2,g):x):(d.flags|=2,g)):(d.flags|=1048576,g)}function o(d){return t&&d.alternate===null&&(d.flags|=2),d}function a(d,g,x,E){return g===null||g.tag!==6?(g=zc(x,d.mode,E),g.return=d,g):(g=r(g,x),g.return=d,g)}function l(d,g,x,E){var L=x.type;return L===es?u(d,g,x.props.children,E,x.key):g!==null&&(g.elementType===L||typeof L=="object"&&L!==null&&L.$$typeof===Li&&tp(L)===g.type)?(E=r(g,x.props),E.ref=$s(d,g,x),E.return=d,E):(E=ol(x.type,x.key,x.props,null,d.mode,E),E.ref=$s(d,g,x),E.return=d,E)}function c(d,g,x,E){return g===null||g.tag!==4||g.stateNode.containerInfo!==x.containerInfo||g.stateNode.implementation!==x.implementation?(g=Bc(x,d.mode,E),g.return=d,g):(g=r(g,x.children||[]),g.return=d,g)}function u(d,g,x,E,L){return g===null||g.tag!==7?(g=Ar(x,d.mode,E,L),g.return=d,g):(g=r(g,x),g.return=d,g)}function f(d,g,x){if(typeof g=="string"&&g!==""||typeof g=="number")return g=zc(""+g,d.mode,x),g.return=d,g;if(typeof g=="object"&&g!==null){switch(g.$$typeof){case ra:return x=ol(g.type,g.key,g.props,null,d.mode,x),x.ref=$s(d,null,g),x.return=d,x;case Jr:return g=Bc(g,d.mode,x),g.return=d,g;case Li:var E=g._init;return f(d,E(g._payload),x)}if(io(g)||Vs(g))return g=Ar(g,d.mode,x,null),g.return=d,g;ma(d,g)}return null}function h(d,g,x,E){var L=g!==null?g.key:null;if(typeof x=="string"&&x!==""||typeof x=="number")return L!==null?null:a(d,g,""+x,E);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case ra:return x.key===L?l(d,g,x,E):null;case Jr:return x.key===L?c(d,g,x,E):null;case Li:return L=x._init,h(d,g,L(x._payload),E)}if(io(x)||Vs(x))return L!==null?null:u(d,g,x,E,null);ma(d,x)}return null}function p(d,g,x,E,L){if(typeof E=="string"&&E!==""||typeof E=="number")return d=d.get(x)||null,a(g,d,""+E,L);if(typeof E=="object"&&E!==null){switch(E.$$typeof){case ra:return d=d.get(E.key===null?x:E.key)||null,l(g,d,E,L);case Jr:return d=d.get(E.key===null?x:E.key)||null,c(g,d,E,L);case Li:var C=E._init;return p(d,g,x,C(E._payload),L)}if(io(E)||Vs(E))return d=d.get(x)||null,u(g,d,E,L,null);ma(g,E)}return null}function v(d,g,x,E){for(var L=null,C=null,A=g,R=g=0,j=null;A!==null&&R<x.length;R++){A.index>R?(j=A,A=null):j=A.sibling;var M=h(d,A,x[R],E);if(M===null){A===null&&(A=j);break}t&&A&&M.alternate===null&&e(d,A),g=s(M,g,R),C===null?L=M:C.sibling=M,C=M,A=j}if(R===x.length)return n(d,A),ut&&dr(d,R),L;if(A===null){for(;R<x.length;R++)A=f(d,x[R],E),A!==null&&(g=s(A,g,R),C===null?L=A:C.sibling=A,C=A);return ut&&dr(d,R),L}for(A=i(d,A);R<x.length;R++)j=p(A,d,R,x[R],E),j!==null&&(t&&j.alternate!==null&&A.delete(j.key===null?R:j.key),g=s(j,g,R),C===null?L=j:C.sibling=j,C=j);return t&&A.forEach(function(T){return e(d,T)}),ut&&dr(d,R),L}function S(d,g,x,E){var L=Vs(x);if(typeof L!="function")throw Error(re(150));if(x=L.call(x),x==null)throw Error(re(151));for(var C=L=null,A=g,R=g=0,j=null,M=x.next();A!==null&&!M.done;R++,M=x.next()){A.index>R?(j=A,A=null):j=A.sibling;var T=h(d,A,M.value,E);if(T===null){A===null&&(A=j);break}t&&A&&T.alternate===null&&e(d,A),g=s(T,g,R),C===null?L=T:C.sibling=T,C=T,A=j}if(M.done)return n(d,A),ut&&dr(d,R),L;if(A===null){for(;!M.done;R++,M=x.next())M=f(d,M.value,E),M!==null&&(g=s(M,g,R),C===null?L=M:C.sibling=M,C=M);return ut&&dr(d,R),L}for(A=i(d,A);!M.done;R++,M=x.next())M=p(A,d,R,M.value,E),M!==null&&(t&&M.alternate!==null&&A.delete(M.key===null?R:M.key),g=s(M,g,R),C===null?L=M:C.sibling=M,C=M);return t&&A.forEach(function(W){return e(d,W)}),ut&&dr(d,R),L}function m(d,g,x,E){if(typeof x=="object"&&x!==null&&x.type===es&&x.key===null&&(x=x.props.children),typeof x=="object"&&x!==null){switch(x.$$typeof){case ra:e:{for(var L=x.key,C=g;C!==null;){if(C.key===L){if(L=x.type,L===es){if(C.tag===7){n(d,C.sibling),g=r(C,x.props.children),g.return=d,d=g;break e}}else if(C.elementType===L||typeof L=="object"&&L!==null&&L.$$typeof===Li&&tp(L)===C.type){n(d,C.sibling),g=r(C,x.props),g.ref=$s(d,C,x),g.return=d,d=g;break e}n(d,C);break}else e(d,C);C=C.sibling}x.type===es?(g=Ar(x.props.children,d.mode,E,x.key),g.return=d,d=g):(E=ol(x.type,x.key,x.props,null,d.mode,E),E.ref=$s(d,g,x),E.return=d,d=E)}return o(d);case Jr:e:{for(C=x.key;g!==null;){if(g.key===C)if(g.tag===4&&g.stateNode.containerInfo===x.containerInfo&&g.stateNode.implementation===x.implementation){n(d,g.sibling),g=r(g,x.children||[]),g.return=d,d=g;break e}else{n(d,g);break}else e(d,g);g=g.sibling}g=Bc(x,d.mode,E),g.return=d,d=g}return o(d);case Li:return C=x._init,m(d,g,C(x._payload),E)}if(io(x))return v(d,g,x,E);if(Vs(x))return S(d,g,x,E);ma(d,x)}return typeof x=="string"&&x!==""||typeof x=="number"?(x=""+x,g!==null&&g.tag===6?(n(d,g.sibling),g=r(g,x),g.return=d,d=g):(n(d,g),g=zc(x,d.mode,E),g.return=d,d=g),o(d)):n(d,g)}return m}var Ts=$0(!0),q0=$0(!1),Cl=tr(null),Rl=null,ls=null,Tf=null;function Af(){Tf=ls=Rl=null}function bf(t){var e=Cl.current;ct(Cl),t._currentValue=e}function Ku(t,e,n){for(;t!==null;){var i=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),t===n)break;t=t.return}}function gs(t,e){Rl=t,Tf=ls=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(ln=!0),t.firstContext=null)}function Ln(t){var e=t._currentValue;if(Tf!==t)if(t={context:t,memoizedValue:e,next:null},ls===null){if(Rl===null)throw Error(re(308));ls=t,Rl.dependencies={lanes:0,firstContext:t}}else ls=ls.next=t;return e}var _r=null;function Cf(t){_r===null?_r=[t]:_r.push(t)}function Y0(t,e,n,i){var r=e.interleaved;return r===null?(n.next=n,Cf(e)):(n.next=r.next,r.next=n),e.interleaved=n,_i(t,i)}function _i(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Ii=!1;function Rf(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function K0(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function gi(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function Gi(t,e,n){var i=t.updateQueue;if(i===null)return null;if(i=i.shared,$e&2){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,_i(t,n)}return r=i.interleaved,r===null?(e.next=e,Cf(i)):(e.next=r.next,r.next=e),i.interleaved=e,_i(t,n)}function el(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,pf(t,n)}}function np(t,e){var n=t.updateQueue,i=t.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var r=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?r=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?r=s=e:s=s.next=e}else r=s=e;n={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:s,shared:i.shared,effects:i.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Pl(t,e,n,i){var r=t.updateQueue;Ii=!1;var s=r.firstBaseUpdate,o=r.lastBaseUpdate,a=r.shared.pending;if(a!==null){r.shared.pending=null;var l=a,c=l.next;l.next=null,o===null?s=c:o.next=c,o=l;var u=t.alternate;u!==null&&(u=u.updateQueue,a=u.lastBaseUpdate,a!==o&&(a===null?u.firstBaseUpdate=c:a.next=c,u.lastBaseUpdate=l))}if(s!==null){var f=r.baseState;o=0,u=c=l=null,a=s;do{var h=a.lane,p=a.eventTime;if((i&h)===h){u!==null&&(u=u.next={eventTime:p,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var v=t,S=a;switch(h=e,p=n,S.tag){case 1:if(v=S.payload,typeof v=="function"){f=v.call(p,f,h);break e}f=v;break e;case 3:v.flags=v.flags&-65537|128;case 0:if(v=S.payload,h=typeof v=="function"?v.call(p,f,h):v,h==null)break e;f=pt({},f,h);break e;case 2:Ii=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,h=r.effects,h===null?r.effects=[a]:h.push(a))}else p={eventTime:p,lane:h,tag:a.tag,payload:a.payload,callback:a.callback,next:null},u===null?(c=u=p,l=f):u=u.next=p,o|=h;if(a=a.next,a===null){if(a=r.shared.pending,a===null)break;h=a,a=h.next,h.next=null,r.lastBaseUpdate=h,r.shared.pending=null}}while(!0);if(u===null&&(l=f),r.baseState=l,r.firstBaseUpdate=c,r.lastBaseUpdate=u,e=r.shared.interleaved,e!==null){r=e;do o|=r.lane,r=r.next;while(r!==e)}else s===null&&(r.shared.lanes=0);Pr|=o,t.lanes=o,t.memoizedState=f}}function ip(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var i=t[e],r=i.callback;if(r!==null){if(i.callback=null,i=n,typeof r!="function")throw Error(re(191,r));r.call(i)}}}var Yo={},ti=tr(Yo),Fo=tr(Yo),Oo=tr(Yo);function yr(t){if(t===Yo)throw Error(re(174));return t}function Pf(t,e){switch(st(Oo,e),st(Fo,t),st(ti,Yo),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Pu(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Pu(e,t)}ct(ti),st(ti,e)}function As(){ct(ti),ct(Fo),ct(Oo)}function Z0(t){yr(Oo.current);var e=yr(ti.current),n=Pu(e,t.type);e!==n&&(st(Fo,t),st(ti,n))}function Nf(t){Fo.current===t&&(ct(ti),ct(Fo))}var dt=tr(0);function Nl(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Ic=[];function Lf(){for(var t=0;t<Ic.length;t++)Ic[t]._workInProgressVersionPrimary=null;Ic.length=0}var tl=Ei.ReactCurrentDispatcher,Dc=Ei.ReactCurrentBatchConfig,Rr=0,ft=null,At=null,Lt=null,Ll=!1,go=!1,ko=0,z_=0;function Ht(){throw Error(re(321))}function If(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!$n(t[n],e[n]))return!1;return!0}function Df(t,e,n,i,r,s){if(Rr=s,ft=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,tl.current=t===null||t.memoizedState===null?G_:W_,t=n(i,r),go){s=0;do{if(go=!1,ko=0,25<=s)throw Error(re(301));s+=1,Lt=At=null,e.updateQueue=null,tl.current=j_,t=n(i,r)}while(go)}if(tl.current=Il,e=At!==null&&At.next!==null,Rr=0,Lt=At=ft=null,Ll=!1,e)throw Error(re(300));return t}function Uf(){var t=ko!==0;return ko=0,t}function Kn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Lt===null?ft.memoizedState=Lt=t:Lt=Lt.next=t,Lt}function In(){if(At===null){var t=ft.alternate;t=t!==null?t.memoizedState:null}else t=At.next;var e=Lt===null?ft.memoizedState:Lt.next;if(e!==null)Lt=e,At=t;else{if(t===null)throw Error(re(310));At=t,t={memoizedState:At.memoizedState,baseState:At.baseState,baseQueue:At.baseQueue,queue:At.queue,next:null},Lt===null?ft.memoizedState=Lt=t:Lt=Lt.next=t}return Lt}function zo(t,e){return typeof e=="function"?e(t):e}function Uc(t){var e=In(),n=e.queue;if(n===null)throw Error(re(311));n.lastRenderedReducer=t;var i=At,r=i.baseQueue,s=n.pending;if(s!==null){if(r!==null){var o=r.next;r.next=s.next,s.next=o}i.baseQueue=r=s,n.pending=null}if(r!==null){s=r.next,i=i.baseState;var a=o=null,l=null,c=s;do{var u=c.lane;if((Rr&u)===u)l!==null&&(l=l.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),i=c.hasEagerState?c.eagerState:t(i,c.action);else{var f={lane:u,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};l===null?(a=l=f,o=i):l=l.next=f,ft.lanes|=u,Pr|=u}c=c.next}while(c!==null&&c!==s);l===null?o=i:l.next=a,$n(i,e.memoizedState)||(ln=!0),e.memoizedState=i,e.baseState=o,e.baseQueue=l,n.lastRenderedState=i}if(t=n.interleaved,t!==null){r=t;do s=r.lane,ft.lanes|=s,Pr|=s,r=r.next;while(r!==t)}else r===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Fc(t){var e=In(),n=e.queue;if(n===null)throw Error(re(311));n.lastRenderedReducer=t;var i=n.dispatch,r=n.pending,s=e.memoizedState;if(r!==null){n.pending=null;var o=r=r.next;do s=t(s,o.action),o=o.next;while(o!==r);$n(s,e.memoizedState)||(ln=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,i]}function Q0(){}function J0(t,e){var n=ft,i=In(),r=e(),s=!$n(i.memoizedState,r);if(s&&(i.memoizedState=r,ln=!0),i=i.queue,Ff(ng.bind(null,n,i,t),[t]),i.getSnapshot!==e||s||Lt!==null&&Lt.memoizedState.tag&1){if(n.flags|=2048,Bo(9,tg.bind(null,n,i,r,e),void 0,null),It===null)throw Error(re(349));Rr&30||eg(n,e,r)}return r}function eg(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=ft.updateQueue,e===null?(e={lastEffect:null,stores:null},ft.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function tg(t,e,n,i){e.value=n,e.getSnapshot=i,ig(e)&&rg(t)}function ng(t,e,n){return n(function(){ig(e)&&rg(t)})}function ig(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!$n(t,n)}catch{return!0}}function rg(t){var e=_i(t,1);e!==null&&Xn(e,t,1,-1)}function rp(t){var e=Kn();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:zo,lastRenderedState:t},e.queue=t,t=t.dispatch=V_.bind(null,ft,t),[e.memoizedState,t]}function Bo(t,e,n,i){return t={tag:t,create:e,destroy:n,deps:i,next:null},e=ft.updateQueue,e===null?(e={lastEffect:null,stores:null},ft.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(i=n.next,n.next=t,t.next=i,e.lastEffect=t)),t}function sg(){return In().memoizedState}function nl(t,e,n,i){var r=Kn();ft.flags|=t,r.memoizedState=Bo(1|e,n,void 0,i===void 0?null:i)}function Ql(t,e,n,i){var r=In();i=i===void 0?null:i;var s=void 0;if(At!==null){var o=At.memoizedState;if(s=o.destroy,i!==null&&If(i,o.deps)){r.memoizedState=Bo(e,n,s,i);return}}ft.flags|=t,r.memoizedState=Bo(1|e,n,s,i)}function sp(t,e){return nl(8390656,8,t,e)}function Ff(t,e){return Ql(2048,8,t,e)}function og(t,e){return Ql(4,2,t,e)}function ag(t,e){return Ql(4,4,t,e)}function lg(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function cg(t,e,n){return n=n!=null?n.concat([t]):null,Ql(4,4,lg.bind(null,e,t),n)}function Of(){}function ug(t,e){var n=In();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&If(e,i[1])?i[0]:(n.memoizedState=[t,e],t)}function dg(t,e){var n=In();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&If(e,i[1])?i[0]:(t=t(),n.memoizedState=[t,e],t)}function fg(t,e,n){return Rr&21?($n(n,e)||(n=v0(),ft.lanes|=n,Pr|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,ln=!0),t.memoizedState=n)}function B_(t,e){var n=nt;nt=n!==0&&4>n?n:4,t(!0);var i=Dc.transition;Dc.transition={};try{t(!1),e()}finally{nt=n,Dc.transition=i}}function hg(){return In().memoizedState}function H_(t,e,n){var i=ji(t);if(n={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null},pg(t))mg(e,n);else if(n=Y0(t,e,n,i),n!==null){var r=Qt();Xn(n,t,i,r),gg(n,e,i)}}function V_(t,e,n){var i=ji(t),r={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null};if(pg(t))mg(e,r);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(r.hasEagerState=!0,r.eagerState=a,$n(a,o)){var l=e.interleaved;l===null?(r.next=r,Cf(e)):(r.next=l.next,l.next=r),e.interleaved=r;return}}catch{}finally{}n=Y0(t,e,r,i),n!==null&&(r=Qt(),Xn(n,t,i,r),gg(n,e,i))}}function pg(t){var e=t.alternate;return t===ft||e!==null&&e===ft}function mg(t,e){go=Ll=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function gg(t,e,n){if(n&4194240){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,pf(t,n)}}var Il={readContext:Ln,useCallback:Ht,useContext:Ht,useEffect:Ht,useImperativeHandle:Ht,useInsertionEffect:Ht,useLayoutEffect:Ht,useMemo:Ht,useReducer:Ht,useRef:Ht,useState:Ht,useDebugValue:Ht,useDeferredValue:Ht,useTransition:Ht,useMutableSource:Ht,useSyncExternalStore:Ht,useId:Ht,unstable_isNewReconciler:!1},G_={readContext:Ln,useCallback:function(t,e){return Kn().memoizedState=[t,e===void 0?null:e],t},useContext:Ln,useEffect:sp,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,nl(4194308,4,lg.bind(null,e,t),n)},useLayoutEffect:function(t,e){return nl(4194308,4,t,e)},useInsertionEffect:function(t,e){return nl(4,2,t,e)},useMemo:function(t,e){var n=Kn();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var i=Kn();return e=n!==void 0?n(e):e,i.memoizedState=i.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},i.queue=t,t=t.dispatch=H_.bind(null,ft,t),[i.memoizedState,t]},useRef:function(t){var e=Kn();return t={current:t},e.memoizedState=t},useState:rp,useDebugValue:Of,useDeferredValue:function(t){return Kn().memoizedState=t},useTransition:function(){var t=rp(!1),e=t[0];return t=B_.bind(null,t[1]),Kn().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var i=ft,r=Kn();if(ut){if(n===void 0)throw Error(re(407));n=n()}else{if(n=e(),It===null)throw Error(re(349));Rr&30||eg(i,e,n)}r.memoizedState=n;var s={value:n,getSnapshot:e};return r.queue=s,sp(ng.bind(null,i,s,t),[t]),i.flags|=2048,Bo(9,tg.bind(null,i,s,n,e),void 0,null),n},useId:function(){var t=Kn(),e=It.identifierPrefix;if(ut){var n=hi,i=fi;n=(i&~(1<<32-jn(i)-1)).toString(32)+n,e=":"+e+"R"+n,n=ko++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=z_++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},W_={readContext:Ln,useCallback:ug,useContext:Ln,useEffect:Ff,useImperativeHandle:cg,useInsertionEffect:og,useLayoutEffect:ag,useMemo:dg,useReducer:Uc,useRef:sg,useState:function(){return Uc(zo)},useDebugValue:Of,useDeferredValue:function(t){var e=In();return fg(e,At.memoizedState,t)},useTransition:function(){var t=Uc(zo)[0],e=In().memoizedState;return[t,e]},useMutableSource:Q0,useSyncExternalStore:J0,useId:hg,unstable_isNewReconciler:!1},j_={readContext:Ln,useCallback:ug,useContext:Ln,useEffect:Ff,useImperativeHandle:cg,useInsertionEffect:og,useLayoutEffect:ag,useMemo:dg,useReducer:Fc,useRef:sg,useState:function(){return Fc(zo)},useDebugValue:Of,useDeferredValue:function(t){var e=In();return At===null?e.memoizedState=t:fg(e,At.memoizedState,t)},useTransition:function(){var t=Fc(zo)[0],e=In().memoizedState;return[t,e]},useMutableSource:Q0,useSyncExternalStore:J0,useId:hg,unstable_isNewReconciler:!1};function zn(t,e){if(t&&t.defaultProps){e=pt({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function Zu(t,e,n,i){e=t.memoizedState,n=n(i,e),n=n==null?e:pt({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Jl={isMounted:function(t){return(t=t._reactInternals)?Ur(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var i=Qt(),r=ji(t),s=gi(i,r);s.payload=e,n!=null&&(s.callback=n),e=Gi(t,s,r),e!==null&&(Xn(e,t,r,i),el(e,t,r))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var i=Qt(),r=ji(t),s=gi(i,r);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=Gi(t,s,r),e!==null&&(Xn(e,t,r,i),el(e,t,r))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=Qt(),i=ji(t),r=gi(n,i);r.tag=2,e!=null&&(r.callback=e),e=Gi(t,r,i),e!==null&&(Xn(e,t,i,n),el(e,t,i))}};function op(t,e,n,i,r,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(i,s,o):e.prototype&&e.prototype.isPureReactComponent?!Lo(n,i)||!Lo(r,s):!0}function vg(t,e,n){var i=!1,r=Zi,s=e.contextType;return typeof s=="object"&&s!==null?s=Ln(s):(r=un(e)?br:$t.current,i=e.contextTypes,s=(i=i!=null)?Es(t,r):Zi),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Jl,t.stateNode=e,e._reactInternals=t,i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=r,t.__reactInternalMemoizedMaskedChildContext=s),e}function ap(t,e,n,i){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,i),e.state!==t&&Jl.enqueueReplaceState(e,e.state,null)}function Qu(t,e,n,i){var r=t.stateNode;r.props=n,r.state=t.memoizedState,r.refs={},Rf(t);var s=e.contextType;typeof s=="object"&&s!==null?r.context=Ln(s):(s=un(e)?br:$t.current,r.context=Es(t,s)),r.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(Zu(t,e,s,n),r.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&Jl.enqueueReplaceState(r,r.state,null),Pl(t,n,r,i),r.state=t.memoizedState),typeof r.componentDidMount=="function"&&(t.flags|=4194308)}function bs(t,e){try{var n="",i=e;do n+=_x(i),i=i.return;while(i);var r=n}catch(s){r=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:r,digest:null}}function Oc(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function Ju(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var X_=typeof WeakMap=="function"?WeakMap:Map;function xg(t,e,n){n=gi(-1,n),n.tag=3,n.payload={element:null};var i=e.value;return n.callback=function(){Ul||(Ul=!0,cd=i),Ju(t,e)},n}function _g(t,e,n){n=gi(-1,n),n.tag=3;var i=t.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;n.payload=function(){return i(r)},n.callback=function(){Ju(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){Ju(t,e),typeof i!="function"&&(Wi===null?Wi=new Set([this]):Wi.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function lp(t,e,n){var i=t.pingCache;if(i===null){i=t.pingCache=new X_;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(n)||(r.add(n),t=oy.bind(null,t,e,n),e.then(t,t))}function cp(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function up(t,e,n,i,r){return t.mode&1?(t.flags|=65536,t.lanes=r,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=gi(-1,1),e.tag=2,Gi(n,e,1))),n.lanes|=1),t)}var $_=Ei.ReactCurrentOwner,ln=!1;function Zt(t,e,n,i){e.child=t===null?q0(e,null,n,i):Ts(e,t.child,n,i)}function dp(t,e,n,i,r){n=n.render;var s=e.ref;return gs(e,r),i=Df(t,e,n,i,s,r),n=Uf(),t!==null&&!ln?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,yi(t,e,r)):(ut&&n&&Mf(e),e.flags|=1,Zt(t,e,i,r),e.child)}function fp(t,e,n,i,r){if(t===null){var s=n.type;return typeof s=="function"&&!jf(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,yg(t,e,s,i,r)):(t=ol(n.type,null,i,e,e.mode,r),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&r)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:Lo,n(o,i)&&t.ref===e.ref)return yi(t,e,r)}return e.flags|=1,t=Xi(s,i),t.ref=e.ref,t.return=e,e.child=t}function yg(t,e,n,i,r){if(t!==null){var s=t.memoizedProps;if(Lo(s,i)&&t.ref===e.ref)if(ln=!1,e.pendingProps=i=s,(t.lanes&r)!==0)t.flags&131072&&(ln=!0);else return e.lanes=t.lanes,yi(t,e,r)}return ed(t,e,n,i,r)}function Sg(t,e,n){var i=e.pendingProps,r=i.children,s=t!==null?t.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},st(us,vn),vn|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,st(us,vn),vn|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=s!==null?s.baseLanes:n,st(us,vn),vn|=i}else s!==null?(i=s.baseLanes|n,e.memoizedState=null):i=n,st(us,vn),vn|=i;return Zt(t,e,r,n),e.child}function Mg(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function ed(t,e,n,i,r){var s=un(n)?br:$t.current;return s=Es(e,s),gs(e,r),n=Df(t,e,n,i,s,r),i=Uf(),t!==null&&!ln?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,yi(t,e,r)):(ut&&i&&Mf(e),e.flags|=1,Zt(t,e,n,r),e.child)}function hp(t,e,n,i,r){if(un(n)){var s=!0;Tl(e)}else s=!1;if(gs(e,r),e.stateNode===null)il(t,e),vg(e,n,i),Qu(e,n,i,r),i=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,c=n.contextType;typeof c=="object"&&c!==null?c=Ln(c):(c=un(n)?br:$t.current,c=Es(e,c));var u=n.getDerivedStateFromProps,f=typeof u=="function"||typeof o.getSnapshotBeforeUpdate=="function";f||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==i||l!==c)&&ap(e,o,i,c),Ii=!1;var h=e.memoizedState;o.state=h,Pl(e,i,o,r),l=e.memoizedState,a!==i||h!==l||cn.current||Ii?(typeof u=="function"&&(Zu(e,n,u,i),l=e.memoizedState),(a=Ii||op(e,n,a,i,h,l,c))?(f||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=l),o.props=i,o.state=l,o.context=c,i=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{o=e.stateNode,K0(t,e),a=e.memoizedProps,c=e.type===e.elementType?a:zn(e.type,a),o.props=c,f=e.pendingProps,h=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=Ln(l):(l=un(n)?br:$t.current,l=Es(e,l));var p=n.getDerivedStateFromProps;(u=typeof p=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==f||h!==l)&&ap(e,o,i,l),Ii=!1,h=e.memoizedState,o.state=h,Pl(e,i,o,r);var v=e.memoizedState;a!==f||h!==v||cn.current||Ii?(typeof p=="function"&&(Zu(e,n,p,i),v=e.memoizedState),(c=Ii||op(e,n,c,i,h,v,l)||!1)?(u||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(i,v,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(i,v,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=v),o.props=i,o.state=v,o.context=l,i=c):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=1024),i=!1)}return td(t,e,n,i,s,r)}function td(t,e,n,i,r,s){Mg(t,e);var o=(e.flags&128)!==0;if(!i&&!o)return r&&Qh(e,n,!1),yi(t,e,s);i=e.stateNode,$_.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,t!==null&&o?(e.child=Ts(e,t.child,null,s),e.child=Ts(e,null,a,s)):Zt(t,e,a,s),e.memoizedState=i.state,r&&Qh(e,n,!0),e.child}function Eg(t){var e=t.stateNode;e.pendingContext?Zh(t,e.pendingContext,e.pendingContext!==e.context):e.context&&Zh(t,e.context,!1),Pf(t,e.containerInfo)}function pp(t,e,n,i,r){return ws(),wf(r),e.flags|=256,Zt(t,e,n,i),e.child}var nd={dehydrated:null,treeContext:null,retryLane:0};function id(t){return{baseLanes:t,cachePool:null,transitions:null}}function wg(t,e,n){var i=e.pendingProps,r=dt.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(r&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(r|=1),st(dt,r&1),t===null)return Yu(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=i.children,t=i.fallback,s?(i=e.mode,s=e.child,o={mode:"hidden",children:o},!(i&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=nc(o,i,0,null),t=Ar(t,i,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=id(n),e.memoizedState=nd,t):kf(e,o));if(r=t.memoizedState,r!==null&&(a=r.dehydrated,a!==null))return q_(t,e,o,i,a,r,n);if(s){s=i.fallback,o=e.mode,r=t.child,a=r.sibling;var l={mode:"hidden",children:i.children};return!(o&1)&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=l,e.deletions=null):(i=Xi(r,l),i.subtreeFlags=r.subtreeFlags&14680064),a!==null?s=Xi(a,s):(s=Ar(s,o,n,null),s.flags|=2),s.return=e,i.return=e,i.sibling=s,e.child=i,i=s,s=e.child,o=t.child.memoizedState,o=o===null?id(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=nd,i}return s=t.child,t=s.sibling,i=Xi(s,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=n),i.return=e,i.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=i,e.memoizedState=null,i}function kf(t,e){return e=nc({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function ga(t,e,n,i){return i!==null&&wf(i),Ts(e,t.child,null,n),t=kf(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function q_(t,e,n,i,r,s,o){if(n)return e.flags&256?(e.flags&=-257,i=Oc(Error(re(422))),ga(t,e,o,i)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=i.fallback,r=e.mode,i=nc({mode:"visible",children:i.children},r,0,null),s=Ar(s,r,o,null),s.flags|=2,i.return=e,s.return=e,i.sibling=s,e.child=i,e.mode&1&&Ts(e,t.child,null,o),e.child.memoizedState=id(o),e.memoizedState=nd,s);if(!(e.mode&1))return ga(t,e,o,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var a=i.dgst;return i=a,s=Error(re(419)),i=Oc(s,i,void 0),ga(t,e,o,i)}if(a=(o&t.childLanes)!==0,ln||a){if(i=It,i!==null){switch(o&-o){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|o)?0:r,r!==0&&r!==s.retryLane&&(s.retryLane=r,_i(t,r),Xn(i,t,r,-1))}return Wf(),i=Oc(Error(re(421))),ga(t,e,o,i)}return r.data==="$?"?(e.flags|=128,e.child=t.child,e=ay.bind(null,t),r._reactRetry=e,null):(t=s.treeContext,_n=Vi(r.nextSibling),Sn=e,ut=!0,Hn=null,t!==null&&(bn[Cn++]=fi,bn[Cn++]=hi,bn[Cn++]=Cr,fi=t.id,hi=t.overflow,Cr=e),e=kf(e,i.children),e.flags|=4096,e)}function mp(t,e,n){t.lanes|=e;var i=t.alternate;i!==null&&(i.lanes|=e),Ku(t.return,e,n)}function kc(t,e,n,i,r){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:r}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=i,s.tail=n,s.tailMode=r)}function Tg(t,e,n){var i=e.pendingProps,r=i.revealOrder,s=i.tail;if(Zt(t,e,i.children,n),i=dt.current,i&2)i=i&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&mp(t,n,e);else if(t.tag===19)mp(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}i&=1}if(st(dt,i),!(e.mode&1))e.memoizedState=null;else switch(r){case"forwards":for(n=e.child,r=null;n!==null;)t=n.alternate,t!==null&&Nl(t)===null&&(r=n),n=n.sibling;n=r,n===null?(r=e.child,e.child=null):(r=n.sibling,n.sibling=null),kc(e,!1,r,n,s);break;case"backwards":for(n=null,r=e.child,e.child=null;r!==null;){if(t=r.alternate,t!==null&&Nl(t)===null){e.child=r;break}t=r.sibling,r.sibling=n,n=r,r=t}kc(e,!0,n,null,s);break;case"together":kc(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function il(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function yi(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Pr|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(re(153));if(e.child!==null){for(t=e.child,n=Xi(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=Xi(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function Y_(t,e,n){switch(e.tag){case 3:Eg(e),ws();break;case 5:Z0(e);break;case 1:un(e.type)&&Tl(e);break;case 4:Pf(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;st(Cl,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(st(dt,dt.current&1),e.flags|=128,null):n&e.child.childLanes?wg(t,e,n):(st(dt,dt.current&1),t=yi(t,e,n),t!==null?t.sibling:null);st(dt,dt.current&1);break;case 19:if(i=(n&e.childLanes)!==0,t.flags&128){if(i)return Tg(t,e,n);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),st(dt,dt.current),i)break;return null;case 22:case 23:return e.lanes=0,Sg(t,e,n)}return yi(t,e,n)}var Ag,rd,bg,Cg;Ag=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};rd=function(){};bg=function(t,e,n,i){var r=t.memoizedProps;if(r!==i){t=e.stateNode,yr(ti.current);var s=null;switch(n){case"input":r=Au(t,r),i=Au(t,i),s=[];break;case"select":r=pt({},r,{value:void 0}),i=pt({},i,{value:void 0}),s=[];break;case"textarea":r=Ru(t,r),i=Ru(t,i),s=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(t.onclick=El)}Nu(n,i);var o;n=null;for(c in r)if(!i.hasOwnProperty(c)&&r.hasOwnProperty(c)&&r[c]!=null)if(c==="style"){var a=r[c];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(To.hasOwnProperty(c)?s||(s=[]):(s=s||[]).push(c,null));for(c in i){var l=i[c];if(a=r!=null?r[c]:void 0,i.hasOwnProperty(c)&&l!==a&&(l!=null||a!=null))if(c==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(c,n)),n=l;else c==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(c,l)):c==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(c,""+l):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(To.hasOwnProperty(c)?(l!=null&&c==="onScroll"&&at("scroll",t),s||a===l||(s=[])):(s=s||[]).push(c,l))}n&&(s=s||[]).push("style",n);var c=s;(e.updateQueue=c)&&(e.flags|=4)}};Cg=function(t,e,n,i){n!==i&&(e.flags|=4)};function qs(t,e){if(!ut)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:i.sibling=null}}function Vt(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,i=0;if(e)for(var r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=t,r=r.sibling;else for(r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=t,r=r.sibling;return t.subtreeFlags|=i,t.childLanes=n,e}function K_(t,e,n){var i=e.pendingProps;switch(Ef(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Vt(e),null;case 1:return un(e.type)&&wl(),Vt(e),null;case 3:return i=e.stateNode,As(),ct(cn),ct($t),Lf(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(t===null||t.child===null)&&(pa(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Hn!==null&&(fd(Hn),Hn=null))),rd(t,e),Vt(e),null;case 5:Nf(e);var r=yr(Oo.current);if(n=e.type,t!==null&&e.stateNode!=null)bg(t,e,n,i,r),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(re(166));return Vt(e),null}if(t=yr(ti.current),pa(e)){i=e.stateNode,n=e.type;var s=e.memoizedProps;switch(i[Jn]=e,i[Uo]=s,t=(e.mode&1)!==0,n){case"dialog":at("cancel",i),at("close",i);break;case"iframe":case"object":case"embed":at("load",i);break;case"video":case"audio":for(r=0;r<so.length;r++)at(so[r],i);break;case"source":at("error",i);break;case"img":case"image":case"link":at("error",i),at("load",i);break;case"details":at("toggle",i);break;case"input":wh(i,s),at("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!s.multiple},at("invalid",i);break;case"textarea":Ah(i,s),at("invalid",i)}Nu(n,s),r=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?i.textContent!==a&&(s.suppressHydrationWarning!==!0&&ha(i.textContent,a,t),r=["children",a]):typeof a=="number"&&i.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&ha(i.textContent,a,t),r=["children",""+a]):To.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&at("scroll",i)}switch(n){case"input":sa(i),Th(i,s,!0);break;case"textarea":sa(i),bh(i);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(i.onclick=El)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{o=r.nodeType===9?r:r.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=n0(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof i.is=="string"?t=o.createElement(n,{is:i.is}):(t=o.createElement(n),n==="select"&&(o=t,i.multiple?o.multiple=!0:i.size&&(o.size=i.size))):t=o.createElementNS(t,n),t[Jn]=e,t[Uo]=i,Ag(t,e,!1,!1),e.stateNode=t;e:{switch(o=Lu(n,i),n){case"dialog":at("cancel",t),at("close",t),r=i;break;case"iframe":case"object":case"embed":at("load",t),r=i;break;case"video":case"audio":for(r=0;r<so.length;r++)at(so[r],t);r=i;break;case"source":at("error",t),r=i;break;case"img":case"image":case"link":at("error",t),at("load",t),r=i;break;case"details":at("toggle",t),r=i;break;case"input":wh(t,i),r=Au(t,i),at("invalid",t);break;case"option":r=i;break;case"select":t._wrapperState={wasMultiple:!!i.multiple},r=pt({},i,{value:void 0}),at("invalid",t);break;case"textarea":Ah(t,i),r=Ru(t,i),at("invalid",t);break;default:r=i}Nu(n,r),a=r;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?s0(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&i0(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&Ao(t,l):typeof l=="number"&&Ao(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(To.hasOwnProperty(s)?l!=null&&s==="onScroll"&&at("scroll",t):l!=null&&lf(t,s,l,o))}switch(n){case"input":sa(t),Th(t,i,!1);break;case"textarea":sa(t),bh(t);break;case"option":i.value!=null&&t.setAttribute("value",""+Ki(i.value));break;case"select":t.multiple=!!i.multiple,s=i.value,s!=null?fs(t,!!i.multiple,s,!1):i.defaultValue!=null&&fs(t,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(t.onclick=El)}switch(n){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Vt(e),null;case 6:if(t&&e.stateNode!=null)Cg(t,e,t.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(re(166));if(n=yr(Oo.current),yr(ti.current),pa(e)){if(i=e.stateNode,n=e.memoizedProps,i[Jn]=e,(s=i.nodeValue!==n)&&(t=Sn,t!==null))switch(t.tag){case 3:ha(i.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&ha(i.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else i=(n.nodeType===9?n:n.ownerDocument).createTextNode(i),i[Jn]=e,e.stateNode=i}return Vt(e),null;case 13:if(ct(dt),i=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(ut&&_n!==null&&e.mode&1&&!(e.flags&128))X0(),ws(),e.flags|=98560,s=!1;else if(s=pa(e),i!==null&&i.dehydrated!==null){if(t===null){if(!s)throw Error(re(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(re(317));s[Jn]=e}else ws(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Vt(e),s=!1}else Hn!==null&&(fd(Hn),Hn=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(i=i!==null,i!==(t!==null&&t.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(t===null||dt.current&1?Ct===0&&(Ct=3):Wf())),e.updateQueue!==null&&(e.flags|=4),Vt(e),null);case 4:return As(),rd(t,e),t===null&&Io(e.stateNode.containerInfo),Vt(e),null;case 10:return bf(e.type._context),Vt(e),null;case 17:return un(e.type)&&wl(),Vt(e),null;case 19:if(ct(dt),s=e.memoizedState,s===null)return Vt(e),null;if(i=(e.flags&128)!==0,o=s.rendering,o===null)if(i)qs(s,!1);else{if(Ct!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=Nl(t),o!==null){for(e.flags|=128,qs(s,!1),i=o.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=n,n=e.child;n!==null;)s=n,t=i,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return st(dt,dt.current&1|2),e.child}t=t.sibling}s.tail!==null&&yt()>Cs&&(e.flags|=128,i=!0,qs(s,!1),e.lanes=4194304)}else{if(!i)if(t=Nl(o),t!==null){if(e.flags|=128,i=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),qs(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!ut)return Vt(e),null}else 2*yt()-s.renderingStartTime>Cs&&n!==1073741824&&(e.flags|=128,i=!0,qs(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=yt(),e.sibling=null,n=dt.current,st(dt,i?n&1|2:n&1),e):(Vt(e),null);case 22:case 23:return Gf(),i=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?vn&1073741824&&(Vt(e),e.subtreeFlags&6&&(e.flags|=8192)):Vt(e),null;case 24:return null;case 25:return null}throw Error(re(156,e.tag))}function Z_(t,e){switch(Ef(e),e.tag){case 1:return un(e.type)&&wl(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return As(),ct(cn),ct($t),Lf(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return Nf(e),null;case 13:if(ct(dt),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(re(340));ws()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return ct(dt),null;case 4:return As(),null;case 10:return bf(e.type._context),null;case 22:case 23:return Gf(),null;case 24:return null;default:return null}}var va=!1,jt=!1,Q_=typeof WeakSet=="function"?WeakSet:Set,ve=null;function cs(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(i){gt(t,e,i)}else n.current=null}function sd(t,e,n){try{n()}catch(i){gt(t,e,i)}}var gp=!1;function J_(t,e){if(Vu=yl,t=I0(),Sf(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var r=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,c=0,u=0,f=t,h=null;t:for(;;){for(var p;f!==n||r!==0&&f.nodeType!==3||(a=o+r),f!==s||i!==0&&f.nodeType!==3||(l=o+i),f.nodeType===3&&(o+=f.nodeValue.length),(p=f.firstChild)!==null;)h=f,f=p;for(;;){if(f===t)break t;if(h===n&&++c===r&&(a=o),h===s&&++u===i&&(l=o),(p=f.nextSibling)!==null)break;f=h,h=f.parentNode}f=p}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(Gu={focusedElem:t,selectionRange:n},yl=!1,ve=e;ve!==null;)if(e=ve,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,ve=t;else for(;ve!==null;){e=ve;try{var v=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(v!==null){var S=v.memoizedProps,m=v.memoizedState,d=e.stateNode,g=d.getSnapshotBeforeUpdate(e.elementType===e.type?S:zn(e.type,S),m);d.__reactInternalSnapshotBeforeUpdate=g}break;case 3:var x=e.stateNode.containerInfo;x.nodeType===1?x.textContent="":x.nodeType===9&&x.documentElement&&x.removeChild(x.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(re(163))}}catch(E){gt(e,e.return,E)}if(t=e.sibling,t!==null){t.return=e.return,ve=t;break}ve=e.return}return v=gp,gp=!1,v}function vo(t,e,n){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&t)===t){var s=r.destroy;r.destroy=void 0,s!==void 0&&sd(e,n,s)}r=r.next}while(r!==i)}}function ec(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var i=n.create;n.destroy=i()}n=n.next}while(n!==e)}}function od(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function Rg(t){var e=t.alternate;e!==null&&(t.alternate=null,Rg(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[Jn],delete e[Uo],delete e[Xu],delete e[U_],delete e[F_])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function Pg(t){return t.tag===5||t.tag===3||t.tag===4}function vp(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||Pg(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function ad(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=El));else if(i!==4&&(t=t.child,t!==null))for(ad(t,e,n),t=t.sibling;t!==null;)ad(t,e,n),t=t.sibling}function ld(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(i!==4&&(t=t.child,t!==null))for(ld(t,e,n),t=t.sibling;t!==null;)ld(t,e,n),t=t.sibling}var Ot=null,Bn=!1;function Ti(t,e,n){for(n=n.child;n!==null;)Ng(t,e,n),n=n.sibling}function Ng(t,e,n){if(ei&&typeof ei.onCommitFiberUnmount=="function")try{ei.onCommitFiberUnmount(Xl,n)}catch{}switch(n.tag){case 5:jt||cs(n,e);case 6:var i=Ot,r=Bn;Ot=null,Ti(t,e,n),Ot=i,Bn=r,Ot!==null&&(Bn?(t=Ot,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Ot.removeChild(n.stateNode));break;case 18:Ot!==null&&(Bn?(t=Ot,n=n.stateNode,t.nodeType===8?Nc(t.parentNode,n):t.nodeType===1&&Nc(t,n),Po(t)):Nc(Ot,n.stateNode));break;case 4:i=Ot,r=Bn,Ot=n.stateNode.containerInfo,Bn=!0,Ti(t,e,n),Ot=i,Bn=r;break;case 0:case 11:case 14:case 15:if(!jt&&(i=n.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var s=r,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&sd(n,e,o),r=r.next}while(r!==i)}Ti(t,e,n);break;case 1:if(!jt&&(cs(n,e),i=n.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=n.memoizedProps,i.state=n.memoizedState,i.componentWillUnmount()}catch(a){gt(n,e,a)}Ti(t,e,n);break;case 21:Ti(t,e,n);break;case 22:n.mode&1?(jt=(i=jt)||n.memoizedState!==null,Ti(t,e,n),jt=i):Ti(t,e,n);break;default:Ti(t,e,n)}}function xp(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new Q_),e.forEach(function(i){var r=ly.bind(null,t,i);n.has(i)||(n.add(i),i.then(r,r))})}}function Un(t,e){var n=e.deletions;if(n!==null)for(var i=0;i<n.length;i++){var r=n[i];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:Ot=a.stateNode,Bn=!1;break e;case 3:Ot=a.stateNode.containerInfo,Bn=!0;break e;case 4:Ot=a.stateNode.containerInfo,Bn=!0;break e}a=a.return}if(Ot===null)throw Error(re(160));Ng(s,o,r),Ot=null,Bn=!1;var l=r.alternate;l!==null&&(l.return=null),r.return=null}catch(c){gt(r,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)Lg(e,t),e=e.sibling}function Lg(t,e){var n=t.alternate,i=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Un(e,t),qn(t),i&4){try{vo(3,t,t.return),ec(3,t)}catch(S){gt(t,t.return,S)}try{vo(5,t,t.return)}catch(S){gt(t,t.return,S)}}break;case 1:Un(e,t),qn(t),i&512&&n!==null&&cs(n,n.return);break;case 5:if(Un(e,t),qn(t),i&512&&n!==null&&cs(n,n.return),t.flags&32){var r=t.stateNode;try{Ao(r,"")}catch(S){gt(t,t.return,S)}}if(i&4&&(r=t.stateNode,r!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&e0(r,s),Lu(a,o);var c=Lu(a,s);for(o=0;o<l.length;o+=2){var u=l[o],f=l[o+1];u==="style"?s0(r,f):u==="dangerouslySetInnerHTML"?i0(r,f):u==="children"?Ao(r,f):lf(r,u,f,c)}switch(a){case"input":bu(r,s);break;case"textarea":t0(r,s);break;case"select":var h=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!s.multiple;var p=s.value;p!=null?fs(r,!!s.multiple,p,!1):h!==!!s.multiple&&(s.defaultValue!=null?fs(r,!!s.multiple,s.defaultValue,!0):fs(r,!!s.multiple,s.multiple?[]:"",!1))}r[Uo]=s}catch(S){gt(t,t.return,S)}}break;case 6:if(Un(e,t),qn(t),i&4){if(t.stateNode===null)throw Error(re(162));r=t.stateNode,s=t.memoizedProps;try{r.nodeValue=s}catch(S){gt(t,t.return,S)}}break;case 3:if(Un(e,t),qn(t),i&4&&n!==null&&n.memoizedState.isDehydrated)try{Po(e.containerInfo)}catch(S){gt(t,t.return,S)}break;case 4:Un(e,t),qn(t);break;case 13:Un(e,t),qn(t),r=t.child,r.flags&8192&&(s=r.memoizedState!==null,r.stateNode.isHidden=s,!s||r.alternate!==null&&r.alternate.memoizedState!==null||(Hf=yt())),i&4&&xp(t);break;case 22:if(u=n!==null&&n.memoizedState!==null,t.mode&1?(jt=(c=jt)||u,Un(e,t),jt=c):Un(e,t),qn(t),i&8192){if(c=t.memoizedState!==null,(t.stateNode.isHidden=c)&&!u&&t.mode&1)for(ve=t,u=t.child;u!==null;){for(f=ve=u;ve!==null;){switch(h=ve,p=h.child,h.tag){case 0:case 11:case 14:case 15:vo(4,h,h.return);break;case 1:cs(h,h.return);var v=h.stateNode;if(typeof v.componentWillUnmount=="function"){i=h,n=h.return;try{e=i,v.props=e.memoizedProps,v.state=e.memoizedState,v.componentWillUnmount()}catch(S){gt(i,n,S)}}break;case 5:cs(h,h.return);break;case 22:if(h.memoizedState!==null){yp(f);continue}}p!==null?(p.return=h,ve=p):yp(f)}u=u.sibling}e:for(u=null,f=t;;){if(f.tag===5){if(u===null){u=f;try{r=f.stateNode,c?(s=r.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=f.stateNode,l=f.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=r0("display",o))}catch(S){gt(t,t.return,S)}}}else if(f.tag===6){if(u===null)try{f.stateNode.nodeValue=c?"":f.memoizedProps}catch(S){gt(t,t.return,S)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===t)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===t)break e;for(;f.sibling===null;){if(f.return===null||f.return===t)break e;u===f&&(u=null),f=f.return}u===f&&(u=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:Un(e,t),qn(t),i&4&&xp(t);break;case 21:break;default:Un(e,t),qn(t)}}function qn(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(Pg(n)){var i=n;break e}n=n.return}throw Error(re(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(Ao(r,""),i.flags&=-33);var s=vp(t);ld(t,s,r);break;case 3:case 4:var o=i.stateNode.containerInfo,a=vp(t);ad(t,a,o);break;default:throw Error(re(161))}}catch(l){gt(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function ey(t,e,n){ve=t,Ig(t)}function Ig(t,e,n){for(var i=(t.mode&1)!==0;ve!==null;){var r=ve,s=r.child;if(r.tag===22&&i){var o=r.memoizedState!==null||va;if(!o){var a=r.alternate,l=a!==null&&a.memoizedState!==null||jt;a=va;var c=jt;if(va=o,(jt=l)&&!c)for(ve=r;ve!==null;)o=ve,l=o.child,o.tag===22&&o.memoizedState!==null?Sp(r):l!==null?(l.return=o,ve=l):Sp(r);for(;s!==null;)ve=s,Ig(s),s=s.sibling;ve=r,va=a,jt=c}_p(t)}else r.subtreeFlags&8772&&s!==null?(s.return=r,ve=s):_p(t)}}function _p(t){for(;ve!==null;){var e=ve;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:jt||ec(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!jt)if(n===null)i.componentDidMount();else{var r=e.elementType===e.type?n.memoizedProps:zn(e.type,n.memoizedProps);i.componentDidUpdate(r,n.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&ip(e,s,i);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}ip(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var u=c.memoizedState;if(u!==null){var f=u.dehydrated;f!==null&&Po(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(re(163))}jt||e.flags&512&&od(e)}catch(h){gt(e,e.return,h)}}if(e===t){ve=null;break}if(n=e.sibling,n!==null){n.return=e.return,ve=n;break}ve=e.return}}function yp(t){for(;ve!==null;){var e=ve;if(e===t){ve=null;break}var n=e.sibling;if(n!==null){n.return=e.return,ve=n;break}ve=e.return}}function Sp(t){for(;ve!==null;){var e=ve;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{ec(4,e)}catch(l){gt(e,n,l)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(l){gt(e,r,l)}}var s=e.return;try{od(e)}catch(l){gt(e,s,l)}break;case 5:var o=e.return;try{od(e)}catch(l){gt(e,o,l)}}}catch(l){gt(e,e.return,l)}if(e===t){ve=null;break}var a=e.sibling;if(a!==null){a.return=e.return,ve=a;break}ve=e.return}}var ty=Math.ceil,Dl=Ei.ReactCurrentDispatcher,zf=Ei.ReactCurrentOwner,Nn=Ei.ReactCurrentBatchConfig,$e=0,It=null,wt=null,zt=0,vn=0,us=tr(0),Ct=0,Ho=null,Pr=0,tc=0,Bf=0,xo=null,an=null,Hf=0,Cs=1/0,ui=null,Ul=!1,cd=null,Wi=null,xa=!1,ki=null,Fl=0,_o=0,ud=null,rl=-1,sl=0;function Qt(){return $e&6?yt():rl!==-1?rl:rl=yt()}function ji(t){return t.mode&1?$e&2&&zt!==0?zt&-zt:k_.transition!==null?(sl===0&&(sl=v0()),sl):(t=nt,t!==0||(t=window.event,t=t===void 0?16:w0(t.type)),t):1}function Xn(t,e,n,i){if(50<_o)throw _o=0,ud=null,Error(re(185));Xo(t,n,i),(!($e&2)||t!==It)&&(t===It&&(!($e&2)&&(tc|=n),Ct===4&&Ui(t,zt)),dn(t,i),n===1&&$e===0&&!(e.mode&1)&&(Cs=yt()+500,Zl&&nr()))}function dn(t,e){var n=t.callbackNode;kx(t,e);var i=_l(t,t===It?zt:0);if(i===0)n!==null&&Ph(n),t.callbackNode=null,t.callbackPriority=0;else if(e=i&-i,t.callbackPriority!==e){if(n!=null&&Ph(n),e===1)t.tag===0?O_(Mp.bind(null,t)):G0(Mp.bind(null,t)),I_(function(){!($e&6)&&nr()}),n=null;else{switch(x0(i)){case 1:n=hf;break;case 4:n=m0;break;case 16:n=xl;break;case 536870912:n=g0;break;default:n=xl}n=Hg(n,Dg.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function Dg(t,e){if(rl=-1,sl=0,$e&6)throw Error(re(327));var n=t.callbackNode;if(vs()&&t.callbackNode!==n)return null;var i=_l(t,t===It?zt:0);if(i===0)return null;if(i&30||i&t.expiredLanes||e)e=Ol(t,i);else{e=i;var r=$e;$e|=2;var s=Fg();(It!==t||zt!==e)&&(ui=null,Cs=yt()+500,Tr(t,e));do try{ry();break}catch(a){Ug(t,a)}while(!0);Af(),Dl.current=s,$e=r,wt!==null?e=0:(It=null,zt=0,e=Ct)}if(e!==0){if(e===2&&(r=Ou(t),r!==0&&(i=r,e=dd(t,r))),e===1)throw n=Ho,Tr(t,0),Ui(t,i),dn(t,yt()),n;if(e===6)Ui(t,i);else{if(r=t.current.alternate,!(i&30)&&!ny(r)&&(e=Ol(t,i),e===2&&(s=Ou(t),s!==0&&(i=s,e=dd(t,s))),e===1))throw n=Ho,Tr(t,0),Ui(t,i),dn(t,yt()),n;switch(t.finishedWork=r,t.finishedLanes=i,e){case 0:case 1:throw Error(re(345));case 2:fr(t,an,ui);break;case 3:if(Ui(t,i),(i&130023424)===i&&(e=Hf+500-yt(),10<e)){if(_l(t,0)!==0)break;if(r=t.suspendedLanes,(r&i)!==i){Qt(),t.pingedLanes|=t.suspendedLanes&r;break}t.timeoutHandle=ju(fr.bind(null,t,an,ui),e);break}fr(t,an,ui);break;case 4:if(Ui(t,i),(i&4194240)===i)break;for(e=t.eventTimes,r=-1;0<i;){var o=31-jn(i);s=1<<o,o=e[o],o>r&&(r=o),i&=~s}if(i=r,i=yt()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*ty(i/1960))-i,10<i){t.timeoutHandle=ju(fr.bind(null,t,an,ui),i);break}fr(t,an,ui);break;case 5:fr(t,an,ui);break;default:throw Error(re(329))}}}return dn(t,yt()),t.callbackNode===n?Dg.bind(null,t):null}function dd(t,e){var n=xo;return t.current.memoizedState.isDehydrated&&(Tr(t,e).flags|=256),t=Ol(t,e),t!==2&&(e=an,an=n,e!==null&&fd(e)),t}function fd(t){an===null?an=t:an.push.apply(an,t)}function ny(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var i=0;i<n.length;i++){var r=n[i],s=r.getSnapshot;r=r.value;try{if(!$n(s(),r))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Ui(t,e){for(e&=~Bf,e&=~tc,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-jn(e),i=1<<n;t[n]=-1,e&=~i}}function Mp(t){if($e&6)throw Error(re(327));vs();var e=_l(t,0);if(!(e&1))return dn(t,yt()),null;var n=Ol(t,e);if(t.tag!==0&&n===2){var i=Ou(t);i!==0&&(e=i,n=dd(t,i))}if(n===1)throw n=Ho,Tr(t,0),Ui(t,e),dn(t,yt()),n;if(n===6)throw Error(re(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,fr(t,an,ui),dn(t,yt()),null}function Vf(t,e){var n=$e;$e|=1;try{return t(e)}finally{$e=n,$e===0&&(Cs=yt()+500,Zl&&nr())}}function Nr(t){ki!==null&&ki.tag===0&&!($e&6)&&vs();var e=$e;$e|=1;var n=Nn.transition,i=nt;try{if(Nn.transition=null,nt=1,t)return t()}finally{nt=i,Nn.transition=n,$e=e,!($e&6)&&nr()}}function Gf(){vn=us.current,ct(us)}function Tr(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,L_(n)),wt!==null)for(n=wt.return;n!==null;){var i=n;switch(Ef(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&wl();break;case 3:As(),ct(cn),ct($t),Lf();break;case 5:Nf(i);break;case 4:As();break;case 13:ct(dt);break;case 19:ct(dt);break;case 10:bf(i.type._context);break;case 22:case 23:Gf()}n=n.return}if(It=t,wt=t=Xi(t.current,null),zt=vn=e,Ct=0,Ho=null,Bf=tc=Pr=0,an=xo=null,_r!==null){for(e=0;e<_r.length;e++)if(n=_r[e],i=n.interleaved,i!==null){n.interleaved=null;var r=i.next,s=n.pending;if(s!==null){var o=s.next;s.next=r,i.next=o}n.pending=i}_r=null}return t}function Ug(t,e){do{var n=wt;try{if(Af(),tl.current=Il,Ll){for(var i=ft.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}Ll=!1}if(Rr=0,Lt=At=ft=null,go=!1,ko=0,zf.current=null,n===null||n.return===null){Ct=1,Ho=e,wt=null;break}e:{var s=t,o=n.return,a=n,l=e;if(e=zt,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var c=l,u=a,f=u.tag;if(!(u.mode&1)&&(f===0||f===11||f===15)){var h=u.alternate;h?(u.updateQueue=h.updateQueue,u.memoizedState=h.memoizedState,u.lanes=h.lanes):(u.updateQueue=null,u.memoizedState=null)}var p=cp(o);if(p!==null){p.flags&=-257,up(p,o,a,s,e),p.mode&1&&lp(s,c,e),e=p,l=c;var v=e.updateQueue;if(v===null){var S=new Set;S.add(l),e.updateQueue=S}else v.add(l);break e}else{if(!(e&1)){lp(s,c,e),Wf();break e}l=Error(re(426))}}else if(ut&&a.mode&1){var m=cp(o);if(m!==null){!(m.flags&65536)&&(m.flags|=256),up(m,o,a,s,e),wf(bs(l,a));break e}}s=l=bs(l,a),Ct!==4&&(Ct=2),xo===null?xo=[s]:xo.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var d=xg(s,l,e);np(s,d);break e;case 1:a=l;var g=s.type,x=s.stateNode;if(!(s.flags&128)&&(typeof g.getDerivedStateFromError=="function"||x!==null&&typeof x.componentDidCatch=="function"&&(Wi===null||!Wi.has(x)))){s.flags|=65536,e&=-e,s.lanes|=e;var E=_g(s,a,e);np(s,E);break e}}s=s.return}while(s!==null)}kg(n)}catch(L){e=L,wt===n&&n!==null&&(wt=n=n.return);continue}break}while(!0)}function Fg(){var t=Dl.current;return Dl.current=Il,t===null?Il:t}function Wf(){(Ct===0||Ct===3||Ct===2)&&(Ct=4),It===null||!(Pr&268435455)&&!(tc&268435455)||Ui(It,zt)}function Ol(t,e){var n=$e;$e|=2;var i=Fg();(It!==t||zt!==e)&&(ui=null,Tr(t,e));do try{iy();break}catch(r){Ug(t,r)}while(!0);if(Af(),$e=n,Dl.current=i,wt!==null)throw Error(re(261));return It=null,zt=0,Ct}function iy(){for(;wt!==null;)Og(wt)}function ry(){for(;wt!==null&&!Rx();)Og(wt)}function Og(t){var e=Bg(t.alternate,t,vn);t.memoizedProps=t.pendingProps,e===null?kg(t):wt=e,zf.current=null}function kg(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=Z_(n,e),n!==null){n.flags&=32767,wt=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Ct=6,wt=null;return}}else if(n=K_(n,e,vn),n!==null){wt=n;return}if(e=e.sibling,e!==null){wt=e;return}wt=e=t}while(e!==null);Ct===0&&(Ct=5)}function fr(t,e,n){var i=nt,r=Nn.transition;try{Nn.transition=null,nt=1,sy(t,e,n,i)}finally{Nn.transition=r,nt=i}return null}function sy(t,e,n,i){do vs();while(ki!==null);if($e&6)throw Error(re(327));n=t.finishedWork;var r=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(re(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(zx(t,s),t===It&&(wt=It=null,zt=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||xa||(xa=!0,Hg(xl,function(){return vs(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=Nn.transition,Nn.transition=null;var o=nt;nt=1;var a=$e;$e|=4,zf.current=null,J_(t,n),Lg(n,t),T_(Gu),yl=!!Vu,Gu=Vu=null,t.current=n,ey(n),Px(),$e=a,nt=o,Nn.transition=s}else t.current=n;if(xa&&(xa=!1,ki=t,Fl=r),s=t.pendingLanes,s===0&&(Wi=null),Ix(n.stateNode),dn(t,yt()),e!==null)for(i=t.onRecoverableError,n=0;n<e.length;n++)r=e[n],i(r.value,{componentStack:r.stack,digest:r.digest});if(Ul)throw Ul=!1,t=cd,cd=null,t;return Fl&1&&t.tag!==0&&vs(),s=t.pendingLanes,s&1?t===ud?_o++:(_o=0,ud=t):_o=0,nr(),null}function vs(){if(ki!==null){var t=x0(Fl),e=Nn.transition,n=nt;try{if(Nn.transition=null,nt=16>t?16:t,ki===null)var i=!1;else{if(t=ki,ki=null,Fl=0,$e&6)throw Error(re(331));var r=$e;for($e|=4,ve=t.current;ve!==null;){var s=ve,o=s.child;if(ve.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var c=a[l];for(ve=c;ve!==null;){var u=ve;switch(u.tag){case 0:case 11:case 15:vo(8,u,s)}var f=u.child;if(f!==null)f.return=u,ve=f;else for(;ve!==null;){u=ve;var h=u.sibling,p=u.return;if(Rg(u),u===c){ve=null;break}if(h!==null){h.return=p,ve=h;break}ve=p}}}var v=s.alternate;if(v!==null){var S=v.child;if(S!==null){v.child=null;do{var m=S.sibling;S.sibling=null,S=m}while(S!==null)}}ve=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,ve=o;else e:for(;ve!==null;){if(s=ve,s.flags&2048)switch(s.tag){case 0:case 11:case 15:vo(9,s,s.return)}var d=s.sibling;if(d!==null){d.return=s.return,ve=d;break e}ve=s.return}}var g=t.current;for(ve=g;ve!==null;){o=ve;var x=o.child;if(o.subtreeFlags&2064&&x!==null)x.return=o,ve=x;else e:for(o=g;ve!==null;){if(a=ve,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:ec(9,a)}}catch(L){gt(a,a.return,L)}if(a===o){ve=null;break e}var E=a.sibling;if(E!==null){E.return=a.return,ve=E;break e}ve=a.return}}if($e=r,nr(),ei&&typeof ei.onPostCommitFiberRoot=="function")try{ei.onPostCommitFiberRoot(Xl,t)}catch{}i=!0}return i}finally{nt=n,Nn.transition=e}}return!1}function Ep(t,e,n){e=bs(n,e),e=xg(t,e,1),t=Gi(t,e,1),e=Qt(),t!==null&&(Xo(t,1,e),dn(t,e))}function gt(t,e,n){if(t.tag===3)Ep(t,t,n);else for(;e!==null;){if(e.tag===3){Ep(e,t,n);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(Wi===null||!Wi.has(i))){t=bs(n,t),t=_g(e,t,1),e=Gi(e,t,1),t=Qt(),e!==null&&(Xo(e,1,t),dn(e,t));break}}e=e.return}}function oy(t,e,n){var i=t.pingCache;i!==null&&i.delete(e),e=Qt(),t.pingedLanes|=t.suspendedLanes&n,It===t&&(zt&n)===n&&(Ct===4||Ct===3&&(zt&130023424)===zt&&500>yt()-Hf?Tr(t,0):Bf|=n),dn(t,e)}function zg(t,e){e===0&&(t.mode&1?(e=la,la<<=1,!(la&130023424)&&(la=4194304)):e=1);var n=Qt();t=_i(t,e),t!==null&&(Xo(t,e,n),dn(t,n))}function ay(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),zg(t,n)}function ly(t,e){var n=0;switch(t.tag){case 13:var i=t.stateNode,r=t.memoizedState;r!==null&&(n=r.retryLane);break;case 19:i=t.stateNode;break;default:throw Error(re(314))}i!==null&&i.delete(e),zg(t,n)}var Bg;Bg=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||cn.current)ln=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return ln=!1,Y_(t,e,n);ln=!!(t.flags&131072)}else ln=!1,ut&&e.flags&1048576&&W0(e,bl,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;il(t,e),t=e.pendingProps;var r=Es(e,$t.current);gs(e,n),r=Df(null,e,i,t,r,n);var s=Uf();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,un(i)?(s=!0,Tl(e)):s=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,Rf(e),r.updater=Jl,e.stateNode=r,r._reactInternals=e,Qu(e,i,t,n),e=td(null,e,i,!0,s,n)):(e.tag=0,ut&&s&&Mf(e),Zt(null,e,r,n),e=e.child),e;case 16:i=e.elementType;e:{switch(il(t,e),t=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=uy(i),t=zn(i,t),r){case 0:e=ed(null,e,i,t,n);break e;case 1:e=hp(null,e,i,t,n);break e;case 11:e=dp(null,e,i,t,n);break e;case 14:e=fp(null,e,i,zn(i.type,t),n);break e}throw Error(re(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:zn(i,r),ed(t,e,i,r,n);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:zn(i,r),hp(t,e,i,r,n);case 3:e:{if(Eg(e),t===null)throw Error(re(387));i=e.pendingProps,s=e.memoizedState,r=s.element,K0(t,e),Pl(e,i,null,n);var o=e.memoizedState;if(i=o.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){r=bs(Error(re(423)),e),e=pp(t,e,i,n,r);break e}else if(i!==r){r=bs(Error(re(424)),e),e=pp(t,e,i,n,r);break e}else for(_n=Vi(e.stateNode.containerInfo.firstChild),Sn=e,ut=!0,Hn=null,n=q0(e,null,i,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(ws(),i===r){e=yi(t,e,n);break e}Zt(t,e,i,n)}e=e.child}return e;case 5:return Z0(e),t===null&&Yu(e),i=e.type,r=e.pendingProps,s=t!==null?t.memoizedProps:null,o=r.children,Wu(i,r)?o=null:s!==null&&Wu(i,s)&&(e.flags|=32),Mg(t,e),Zt(t,e,o,n),e.child;case 6:return t===null&&Yu(e),null;case 13:return wg(t,e,n);case 4:return Pf(e,e.stateNode.containerInfo),i=e.pendingProps,t===null?e.child=Ts(e,null,i,n):Zt(t,e,i,n),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:zn(i,r),dp(t,e,i,r,n);case 7:return Zt(t,e,e.pendingProps,n),e.child;case 8:return Zt(t,e,e.pendingProps.children,n),e.child;case 12:return Zt(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,s=e.memoizedProps,o=r.value,st(Cl,i._currentValue),i._currentValue=o,s!==null)if($n(s.value,o)){if(s.children===r.children&&!cn.current){e=yi(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===i){if(s.tag===1){l=gi(-1,n&-n),l.tag=2;var c=s.updateQueue;if(c!==null){c=c.shared;var u=c.pending;u===null?l.next=l:(l.next=u.next,u.next=l),c.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),Ku(s.return,n,e),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(re(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),Ku(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}Zt(t,e,r.children,n),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,gs(e,n),r=Ln(r),i=i(r),e.flags|=1,Zt(t,e,i,n),e.child;case 14:return i=e.type,r=zn(i,e.pendingProps),r=zn(i.type,r),fp(t,e,i,r,n);case 15:return yg(t,e,e.type,e.pendingProps,n);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:zn(i,r),il(t,e),e.tag=1,un(i)?(t=!0,Tl(e)):t=!1,gs(e,n),vg(e,i,r),Qu(e,i,r,n),td(null,e,i,!0,t,n);case 19:return Tg(t,e,n);case 22:return Sg(t,e,n)}throw Error(re(156,e.tag))};function Hg(t,e){return p0(t,e)}function cy(t,e,n,i){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Rn(t,e,n,i){return new cy(t,e,n,i)}function jf(t){return t=t.prototype,!(!t||!t.isReactComponent)}function uy(t){if(typeof t=="function")return jf(t)?1:0;if(t!=null){if(t=t.$$typeof,t===uf)return 11;if(t===df)return 14}return 2}function Xi(t,e){var n=t.alternate;return n===null?(n=Rn(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function ol(t,e,n,i,r,s){var o=2;if(i=t,typeof t=="function")jf(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case es:return Ar(n.children,r,s,e);case cf:o=8,r|=8;break;case Mu:return t=Rn(12,n,e,r|2),t.elementType=Mu,t.lanes=s,t;case Eu:return t=Rn(13,n,e,r),t.elementType=Eu,t.lanes=s,t;case wu:return t=Rn(19,n,e,r),t.elementType=wu,t.lanes=s,t;case Zm:return nc(n,r,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case Ym:o=10;break e;case Km:o=9;break e;case uf:o=11;break e;case df:o=14;break e;case Li:o=16,i=null;break e}throw Error(re(130,t==null?t:typeof t,""))}return e=Rn(o,n,e,r),e.elementType=t,e.type=i,e.lanes=s,e}function Ar(t,e,n,i){return t=Rn(7,t,i,e),t.lanes=n,t}function nc(t,e,n,i){return t=Rn(22,t,i,e),t.elementType=Zm,t.lanes=n,t.stateNode={isHidden:!1},t}function zc(t,e,n){return t=Rn(6,t,null,e),t.lanes=n,t}function Bc(t,e,n){return e=Rn(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function dy(t,e,n,i,r){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=yc(0),this.expirationTimes=yc(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=yc(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function Xf(t,e,n,i,r,s,o,a,l){return t=new dy(t,e,n,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Rn(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:i,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Rf(s),t}function fy(t,e,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Jr,key:i==null?null:""+i,children:t,containerInfo:e,implementation:n}}function Vg(t){if(!t)return Zi;t=t._reactInternals;e:{if(Ur(t)!==t||t.tag!==1)throw Error(re(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(un(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(re(171))}if(t.tag===1){var n=t.type;if(un(n))return V0(t,n,e)}return e}function Gg(t,e,n,i,r,s,o,a,l){return t=Xf(n,i,!0,t,r,s,o,a,l),t.context=Vg(null),n=t.current,i=Qt(),r=ji(n),s=gi(i,r),s.callback=e??null,Gi(n,s,r),t.current.lanes=r,Xo(t,r,i),dn(t,i),t}function ic(t,e,n,i){var r=e.current,s=Qt(),o=ji(r);return n=Vg(n),e.context===null?e.context=n:e.pendingContext=n,e=gi(s,o),e.payload={element:t},i=i===void 0?null:i,i!==null&&(e.callback=i),t=Gi(r,e,o),t!==null&&(Xn(t,r,o,s),el(t,r,o)),o}function kl(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function wp(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function $f(t,e){wp(t,e),(t=t.alternate)&&wp(t,e)}function hy(){return null}var Wg=typeof reportError=="function"?reportError:function(t){console.error(t)};function qf(t){this._internalRoot=t}rc.prototype.render=qf.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(re(409));ic(t,e,null,null)};rc.prototype.unmount=qf.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Nr(function(){ic(null,t,null,null)}),e[xi]=null}};function rc(t){this._internalRoot=t}rc.prototype.unstable_scheduleHydration=function(t){if(t){var e=S0();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Di.length&&e!==0&&e<Di[n].priority;n++);Di.splice(n,0,t),n===0&&E0(t)}};function Yf(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function sc(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Tp(){}function py(t,e,n,i,r){if(r){if(typeof i=="function"){var s=i;i=function(){var c=kl(o);s.call(c)}}var o=Gg(e,i,t,0,null,!1,!1,"",Tp);return t._reactRootContainer=o,t[xi]=o.current,Io(t.nodeType===8?t.parentNode:t),Nr(),o}for(;r=t.lastChild;)t.removeChild(r);if(typeof i=="function"){var a=i;i=function(){var c=kl(l);a.call(c)}}var l=Xf(t,0,!1,null,null,!1,!1,"",Tp);return t._reactRootContainer=l,t[xi]=l.current,Io(t.nodeType===8?t.parentNode:t),Nr(function(){ic(e,l,n,i)}),l}function oc(t,e,n,i,r){var s=n._reactRootContainer;if(s){var o=s;if(typeof r=="function"){var a=r;r=function(){var l=kl(o);a.call(l)}}ic(e,o,t,r)}else o=py(n,e,t,r,i);return kl(o)}_0=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=ro(e.pendingLanes);n!==0&&(pf(e,n|1),dn(e,yt()),!($e&6)&&(Cs=yt()+500,nr()))}break;case 13:Nr(function(){var i=_i(t,1);if(i!==null){var r=Qt();Xn(i,t,1,r)}}),$f(t,1)}};mf=function(t){if(t.tag===13){var e=_i(t,134217728);if(e!==null){var n=Qt();Xn(e,t,134217728,n)}$f(t,134217728)}};y0=function(t){if(t.tag===13){var e=ji(t),n=_i(t,e);if(n!==null){var i=Qt();Xn(n,t,e,i)}$f(t,e)}};S0=function(){return nt};M0=function(t,e){var n=nt;try{return nt=t,e()}finally{nt=n}};Du=function(t,e,n){switch(e){case"input":if(bu(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var i=n[e];if(i!==t&&i.form===t.form){var r=Kl(i);if(!r)throw Error(re(90));Jm(i),bu(i,r)}}}break;case"textarea":t0(t,n);break;case"select":e=n.value,e!=null&&fs(t,!!n.multiple,e,!1)}};l0=Vf;c0=Nr;var my={usingClientEntryPoint:!1,Events:[qo,rs,Kl,o0,a0,Vf]},Ys={findFiberByHostInstance:xr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},gy={bundleType:Ys.bundleType,version:Ys.version,rendererPackageName:Ys.rendererPackageName,rendererConfig:Ys.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Ei.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=f0(t),t===null?null:t.stateNode},findFiberByHostInstance:Ys.findFiberByHostInstance||hy,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var _a=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!_a.isDisabled&&_a.supportsFiber)try{Xl=_a.inject(gy),ei=_a}catch{}}En.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=my;En.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Yf(e))throw Error(re(200));return fy(t,e,null,n)};En.createRoot=function(t,e){if(!Yf(t))throw Error(re(299));var n=!1,i="",r=Wg;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=Xf(t,1,!1,null,null,n,!1,i,r),t[xi]=e.current,Io(t.nodeType===8?t.parentNode:t),new qf(e)};En.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(re(188)):(t=Object.keys(t).join(","),Error(re(268,t)));return t=f0(e),t=t===null?null:t.stateNode,t};En.flushSync=function(t){return Nr(t)};En.hydrate=function(t,e,n){if(!sc(e))throw Error(re(200));return oc(null,t,e,!0,n)};En.hydrateRoot=function(t,e,n){if(!Yf(t))throw Error(re(405));var i=n!=null&&n.hydratedSources||null,r=!1,s="",o=Wg;if(n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=Gg(e,null,t,1,n??null,r,!1,s,o),t[xi]=e.current,Io(t),i)for(t=0;t<i.length;t++)n=i[t],r=n._getVersion,r=r(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,r]:e.mutableSourceEagerHydrationData.push(n,r);return new rc(e)};En.render=function(t,e,n){if(!sc(e))throw Error(re(200));return oc(null,t,e,!1,n)};En.unmountComponentAtNode=function(t){if(!sc(t))throw Error(re(40));return t._reactRootContainer?(Nr(function(){oc(null,null,t,!1,function(){t._reactRootContainer=null,t[xi]=null})}),!0):!1};En.unstable_batchedUpdates=Vf;En.unstable_renderSubtreeIntoContainer=function(t,e,n,i){if(!sc(n))throw Error(re(200));if(t==null||t._reactInternals===void 0)throw Error(re(38));return oc(t,e,n,!1,i)};En.version="18.3.1-next-f1338f8080-20240426";function jg(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(jg)}catch(t){console.error(t)}}jg(),jm.exports=En;var Xg=jm.exports,Ap=Xg;yu.createRoot=Ap.createRoot,yu.hydrateRoot=Ap.hydrateRoot;const on=85,ya={name:"THOMAS MARTINEZ",role:"DÉVELOPPEUR FULL-STACK & SCRUM MASTER",contest:"GRAND PRIX V.I.E ROUMANIE 2026",coordinates:"44.4268° N, 26.1025° E"},yn=[{id:1,phaseCode:"ACTE 01 // 30,000 FT",tStart:0,tEnd:22,altitude:"30,000 FT",system:"AMS // AIR TRAFFIC CONTROL",tag:"01. ALTITUDE DE CROISIÈRE — MISSION AMS",title:"Contrôler les trajectoires dans le ciel.",summary:"Rapatriement et migration d'outils critiques de gestion du trafic aérien.",subtitles:"« À trente mille pieds d'altitude, une trajectoire ne doit rien au hasard. En arrivant à Bucarest en mai 2025 pour mon V.I.E, j'ai pris de la hauteur sur le projet AMS : moderniser et migrer des outils critiques de gestion du trafic aérien pour plus de cent mille vols quotidiens. En tant que développeur Full-Stack et Scrum Master, j'ai orchestré les sprints d'une équipe biculturelle, alliant rigueur aéronautique et développement réactif. »",metrics:[{label:"PROJET AMS",value:"AIR TRAFFIC",detail:"Migration & modernisation critique"},{label:"DOUBLE CASQUETTE",value:"FULL-STACK & SCRUM",detail:"Développement réactif & pilotage agile"}]},{id:2,phaseCode:"ACTE 02 // 4,500 FT",tStart:22,tEnd:44,altitude:"4,500 FT",system:"APPROCHE // HUB DE BUCAREST",tag:"02. DESCENTE À TRAVERS LES NUAGES — ROUMANIE",title:"Plonger au cœur de l'écosystème roumain.",summary:"Immersion culturelle et synergie avec les ingénieurs locaux francophiles.",subtitles:"« Traverser les nuages pour atterrir en Roumanie, c'est s'ancrer dans un carrefour technologique européen d'une vitalité remarquable. À Bucarest, j'ai découvert un écosystème d'ingénieurs talentueux et francophiles, dont la réactivité et la créativité ont immédiatement nourri nos méthodes. Cette immersion culturelle au quotidien a soudé notre équipe et renforcé l'agilité de nos architectures. »",metrics:[{label:"ÉQUIPE AGILE",value:"12 INGÉNIEURS",detail:"Synergie biculturelle FR-RO & francophonie"},{label:"RÔLE SCRUM MASTER",value:"SPRINTS 2 SEM.",detail:"+28% vélocité & gouvernance réactive"}]},{id:3,phaseCode:"ACTE 03 // 0 FT (SOL)",tStart:44,tEnd:67,altitude:"0 FT (SOL)",system:"CABIS // BIOMÉTRIE AÉROPORTUAIRE",tag:"03. SUR LE TARMAC — PORTIQUES CABIS",title:"Du radar aérien aux portiques biométriques.",summary:"Sécurisation et fluidification des flux passagers en aéroport de bout en bout.",subtitles:"« En mars 2026, ma mission franchit une nouvelle étape décisive avec le projet CABIS. Du suivi des avions dans le ciel, je passe à la sécurisation des passagers dans les aéroports grâce aux portiques de contrôle biométrique. De la caméra de reconnaissance faciale haute sécurité aux algorithmes d'authentification temps réel, mon engagement Full-Stack s'incarne directement à chaque franchissement de frontière. »",metrics:[{label:"PROJET CABIS",value:"BIOMÉTRIE SÉCURISÉE",detail:"Scanners e-Gates & contrôle d'accès temps réel"},{label:"INGÉNIERIE COMPLETE",value:"END-TO-END",detail:"Frontend réactif, backend robuste & hardware"}]},{id:4,phaseCode:"ACTE 04 // PERSPECTIVES",tStart:67,tEnd:85,altitude:"ORBITAL",system:"ALLIANCE // RAYONNEMENT FR-RO",tag:"04. IMPACT INTERNATIONAL — NOUVELLE TRAJECTOIRE",title:"L'excellence française portée par l'énergie roumaine.",summary:"La rencontre des savoir-faire comme tremplin d'une carrière internationale.",subtitles:"« Des couloirs aériens jusqu'aux terminaux internationaux, ce V.I.E prouve que l'alliance du savoir-faire technologique français et de l'énergie roumaine repousse les frontières de l'ingénierie. Plus qu'une mission professionnelle, cette aventure a forgé mon leadership, accéléré mes compétences et changé pour toujours ma propre trajectoire. »",metrics:[{label:"RAYONNEMENT",value:"SAVOIR-FAIRE FR",detail:"Rigueur technologique déployée à l'international"},{label:"TRAJECTOIRE",value:"ACCÉLÉRATEUR V.I.E",detail:"Leadership affirmé & propulsion de carrière"}]}];yn.map(t=>t.subtitles.replace(/^[«\s]+|[»\s]+$/g,"")).join(" ");function vy(){const[t,e]=Re.useState(0),[n,i]=Re.useState(!1),[r,s]=Re.useState(!1),[o,a]=Re.useState(!1),l=Re.useRef(null),c=Re.useRef(performance.now()),u=Re.useRef(null),f=Re.useRef(0),h=Re.useRef(0);Re.useEffect(()=>(window.seekTimeline=R=>{const j=Math.max(0,Math.min(on,R));f.current=j,Xg.flushSync(()=>{e(j)}),l.current&&Math.abs(l.current.currentTime-j)>.05&&(l.current.currentTime=j),typeof window.renderSceneAt=="function"&&window.renderSceneAt(j)},window.getTimelineCurrentTime=()=>f.current,window.TOTAL_DURATION=on,window.startTimelinePlayback=()=>{f.current=0,e(0),i(!0),s(!0),l.current&&(l.current.currentTime=0,l.current.play().catch(()=>{}))},()=>{delete window.seekTimeline,delete window.getTimelineCurrentTime,delete window.TOTAL_DURATION,delete window.startTimelinePlayback}),[]),Re.useEffect(()=>{const R="./assets/voiceover.mp3",j=new Audio(R);return j.preload="auto",l.current=j,()=>{j.pause(),l.current=null}},[]),Re.useEffect(()=>{const R=new URLSearchParams(window.location.search);R.get("record")==="1"&&(a(!0),document.body.classList.add("automated-record")),R.get("autoplay")==="1"&&(i(!0),s(!0))},[]);const p=Math.max(0,yn.findIndex(R=>t>=R.tStart&&t<R.tEnd)),v=yn[p!==-1?p:yn.length-1];Re.useEffect(()=>{const R=l.current;R&&(n&&r?(Math.abs(R.currentTime-f.current)>.25&&(R.currentTime=f.current),R.play().catch(()=>{})):R.pause())},[n,r]),Re.useEffect(()=>{if(!n){u.current&&cancelAnimationFrame(u.current);return}c.current=performance.now();const R=j=>{const M=(j-c.current)/1e3;c.current=j;const T=Math.min(M,.1);if(f.current+=T,f.current>=on){f.current=on,e(on),i(!1);return}if(e(f.current),j-h.current>500){h.current=j;const W=l.current;W&&r&&!W.paused&&Math.abs(W.currentTime-f.current)>.35&&(W.currentTime=f.current)}u.current=requestAnimationFrame(R)};return u.current=requestAnimationFrame(R),()=>{u.current&&cancelAnimationFrame(u.current)}},[n,r]);const S=Re.useCallback(()=>{i(R=>(!R&&f.current>=on&&(f.current=0,e(0)),!R))},[]),m=Re.useCallback(()=>{f.current>=on&&(f.current=0,e(0)),i(!0)},[]),d=Re.useCallback(()=>{i(!1)},[]),g=Re.useCallback(R=>{const j=Math.max(0,Math.min(on,R));f.current=j,e(j),l.current&&(l.current.currentTime=j)},[]),x=Re.useCallback(R=>{const j=yn[R];j&&g(j.tStart)},[g]),E=Re.useCallback(()=>{g(0),i(!0)},[g]),L=Re.useCallback(()=>{s(R=>!R)},[]),C=Re.useCallback(()=>{a(!0),document.body.classList.add("recording-mode"),g(0),i(!0),s(!0)},[g]),A=Re.useCallback(()=>{a(!1),document.body.classList.remove("recording-mode")},[]);return Re.useEffect(()=>{const R=j=>{j.key==="Escape"&&o&&A()};return window.addEventListener("keydown",R),()=>window.removeEventListener("keydown",R)},[o,A]),{currentTime:t,duration:on,progress:Math.min(1,t/on),isPlaying:n,activeChapter:v,activeChapterIndex:p,audioEnabled:r,isRecordingMode:o,togglePlay:S,play:m,pause:d,seekTo:g,jumpToChapter:x,restart:E,toggleAudio:L,startRecordingMode:C,exitRecordingMode:A}}const hd=["./assets/images/act1_airplane.jpg","./assets/images/act2_plane_landing_bucharest.jpg","./assets/images/act3_cabis_thomas_gate.jpg","./assets/images/act4_radiance.jpg"],Yn=1.6;function Sa(t){const e=Math.max(0,Math.min(1,t));return e*e*(3-2*e)}function xy(t,e){const n=yn[t],{tStart:i,tEnd:r}=n,s=t===0,o=t===hd.length-1,a=s?0:i-Yn,l=o?on:r;if(e<a||e>l)return 0;if(s){if(e>r-Yn){const c=(r-e)/Yn;return Sa(c)}return 1}if(o){if(e<i){const c=(e-(i-Yn))/Yn;return Sa(c)}return 1}if(e<i){const c=(e-(i-Yn))/Yn;return Sa(c)}if(e>r-Yn){const c=(r-e)/Yn;return Sa(c)}return 1}const _y=({currentTime:t,className:e="fixed inset-0 w-full h-full overflow-hidden z-0 pointer-events-none select-none bg-slate-950"})=>_.jsxs("div",{className:e,children:[hd.map((n,i)=>{const r=yn[i],{tStart:s,tEnd:o}=r,a=i===0,l=i===hd.length-1,c=xy(i,t),u=a?0:s-Yn,h=Math.max(.1,(l?on:o)-u),p=Math.max(0,Math.min(1,(t-u)/h)),v=1+p*.08,S=(i%2===0?1:-1)*p*1.5,m=p*-1,d=c>1e-4;return _.jsx("div",{className:"absolute inset-0 w-full h-full",style:{opacity:c,display:d?"block":"none",zIndex:i+1},children:_.jsx("img",{src:n,alt:r.title,className:"w-full h-full object-cover will-change-transform",style:{transform:`scale(${v.toFixed(5)}) translate(${S.toFixed(4)}%, ${m.toFixed(4)}%)`,transformOrigin:i%2===0?"center center":"60% 40%"}})},i)}),_.jsx("div",{className:"absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-slate-950/70 pointer-events-none z-10"}),_.jsx("div",{className:"absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_40%,rgba(3,7,18,0.75)_100%)] pointer-events-none z-10"})]});/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Kf="169",yy=0,bp=1,Sy=2,$g=1,My=2,ci=3,Qi=0,fn=1,bt=2,$i=0,xs=1,mr=2,Cp=3,Rp=4,Ey=5,gr=100,wy=101,Ty=102,Ay=103,by=104,Cy=200,Ry=201,Py=202,Ny=203,pd=204,md=205,Ly=206,Iy=207,Dy=208,Uy=209,Fy=210,Oy=211,ky=212,zy=213,By=214,gd=0,vd=1,xd=2,Rs=3,_d=4,yd=5,Sd=6,Md=7,qg=0,Hy=1,Vy=2,qi=0,Gy=1,Wy=2,jy=3,Yg=4,Xy=5,$y=6,qy=7,Kg=300,Ps=301,Ns=302,Ed=303,wd=304,ac=306,Td=1e3,Sr=1001,Ad=1002,Pn=1003,Yy=1004,Ma=1005,Vn=1006,Hc=1007,Mr=1008,Si=1009,Zg=1010,Qg=1011,Vo=1012,Zf=1013,Lr=1014,pi=1015,Ko=1016,Qf=1017,Jf=1018,Ls=1020,Jg=35902,ev=1021,tv=1022,Wn=1023,nv=1024,iv=1025,_s=1026,Is=1027,rv=1028,eh=1029,sv=1030,th=1031,nh=1033,al=33776,ll=33777,cl=33778,ul=33779,bd=35840,Cd=35841,Rd=35842,Pd=35843,Nd=36196,Ld=37492,Id=37496,Dd=37808,Ud=37809,Fd=37810,Od=37811,kd=37812,zd=37813,Bd=37814,Hd=37815,Vd=37816,Gd=37817,Wd=37818,jd=37819,Xd=37820,$d=37821,dl=36492,qd=36494,Yd=36495,ov=36283,Kd=36284,Zd=36285,Qd=36286,Ky=3200,Zy=3201,Qy=0,Jy=1,Fi="",Zn="srgb",ir="srgb-linear",ih="display-p3",lc="display-p3-linear",zl="linear",lt="srgb",Bl="rec709",Hl="p3",kr=7680,Pp=519,eS=512,tS=513,nS=514,av=515,iS=516,rS=517,sS=518,oS=519,Np=35044,Lp="300 es",mi=2e3,Vl=2001;class ks{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(n);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const Gt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Ip=1234567;const yo=Math.PI/180,Go=180/Math.PI;function zs(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Gt[t&255]+Gt[t>>8&255]+Gt[t>>16&255]+Gt[t>>24&255]+"-"+Gt[e&255]+Gt[e>>8&255]+"-"+Gt[e>>16&15|64]+Gt[e>>24&255]+"-"+Gt[n&63|128]+Gt[n>>8&255]+"-"+Gt[n>>16&255]+Gt[n>>24&255]+Gt[i&255]+Gt[i>>8&255]+Gt[i>>16&255]+Gt[i>>24&255]).toLowerCase()}function kt(t,e,n){return Math.max(e,Math.min(n,t))}function rh(t,e){return(t%e+e)%e}function aS(t,e,n,i,r){return i+(t-e)*(r-i)/(n-e)}function lS(t,e,n){return t!==e?(n-t)/(e-t):0}function So(t,e,n){return(1-n)*t+n*e}function cS(t,e,n,i){return So(t,e,1-Math.exp(-n*i))}function uS(t,e=1){return e-Math.abs(rh(t,e*2)-e)}function dS(t,e,n){return t<=e?0:t>=n?1:(t=(t-e)/(n-e),t*t*(3-2*t))}function fS(t,e,n){return t<=e?0:t>=n?1:(t=(t-e)/(n-e),t*t*t*(t*(t*6-15)+10))}function hS(t,e){return t+Math.floor(Math.random()*(e-t+1))}function pS(t,e){return t+Math.random()*(e-t)}function mS(t){return t*(.5-Math.random())}function gS(t){t!==void 0&&(Ip=t);let e=Ip+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function vS(t){return t*yo}function xS(t){return t*Go}function _S(t){return(t&t-1)===0&&t!==0}function yS(t){return Math.pow(2,Math.ceil(Math.log(t)/Math.LN2))}function SS(t){return Math.pow(2,Math.floor(Math.log(t)/Math.LN2))}function MS(t,e,n,i,r){const s=Math.cos,o=Math.sin,a=s(n/2),l=o(n/2),c=s((e+i)/2),u=o((e+i)/2),f=s((e-i)/2),h=o((e-i)/2),p=s((i-e)/2),v=o((i-e)/2);switch(r){case"XYX":t.set(a*u,l*f,l*h,a*c);break;case"YZY":t.set(l*h,a*u,l*f,a*c);break;case"ZXZ":t.set(l*f,l*h,a*u,a*c);break;case"XZX":t.set(a*u,l*v,l*p,a*c);break;case"YXY":t.set(l*p,a*u,l*v,a*c);break;case"ZYZ":t.set(l*v,l*p,a*u,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function Qr(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("Invalid component type.")}}function qt(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("Invalid component type.")}}const Dp={DEG2RAD:yo,RAD2DEG:Go,generateUUID:zs,clamp:kt,euclideanModulo:rh,mapLinear:aS,inverseLerp:lS,lerp:So,damp:cS,pingpong:uS,smoothstep:dS,smootherstep:fS,randInt:hS,randFloat:pS,randFloatSpread:mS,seededRandom:gS,degToRad:vS,radToDeg:xS,isPowerOfTwo:_S,ceilPowerOfTwo:yS,floorPowerOfTwo:SS,setQuaternionFromProperEuler:MS,normalize:qt,denormalize:Qr};class Te{constructor(e=0,n=0){Te.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(kt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),r=Math.sin(n),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Be{constructor(e,n,i,r,s,o,a,l,c){Be.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,c)}set(e,n,i,r,s,o,a,l,c){const u=this.elements;return u[0]=e,u[1]=r,u[2]=a,u[3]=n,u[4]=s,u[5]=l,u[6]=i,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],u=i[4],f=i[7],h=i[2],p=i[5],v=i[8],S=r[0],m=r[3],d=r[6],g=r[1],x=r[4],E=r[7],L=r[2],C=r[5],A=r[8];return s[0]=o*S+a*g+l*L,s[3]=o*m+a*x+l*C,s[6]=o*d+a*E+l*A,s[1]=c*S+u*g+f*L,s[4]=c*m+u*x+f*C,s[7]=c*d+u*E+f*A,s[2]=h*S+p*g+v*L,s[5]=h*m+p*x+v*C,s[8]=h*d+p*E+v*A,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return n*o*u-n*a*c-i*s*u+i*a*l+r*s*c-r*o*l}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],f=u*o-a*c,h=a*l-u*s,p=c*s-o*l,v=n*f+i*h+r*p;if(v===0)return this.set(0,0,0,0,0,0,0,0,0);const S=1/v;return e[0]=f*S,e[1]=(r*c-u*i)*S,e[2]=(a*i-r*o)*S,e[3]=h*S,e[4]=(u*n-r*l)*S,e[5]=(r*s-a*n)*S,e[6]=p*S,e[7]=(i*l-c*n)*S,e[8]=(o*n-i*s)*S,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,r,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-r*c,r*l,-r*(-c*o+l*a)+a+n,0,0,1),this}scale(e,n){return this.premultiply(Vc.makeScale(e,n)),this}rotate(e){return this.premultiply(Vc.makeRotation(-e)),this}translate(e,n){return this.premultiply(Vc.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Vc=new Be;function lv(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function Wo(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function ES(){const t=Wo("canvas");return t.style.display="block",t}const Up={};function fl(t){t in Up||(Up[t]=!0,console.warn(t))}function wS(t,e,n){return new Promise(function(i,r){function s(){switch(t.clientWaitSync(e,t.SYNC_FLUSH_COMMANDS_BIT,0)){case t.WAIT_FAILED:r();break;case t.TIMEOUT_EXPIRED:setTimeout(s,n);break;default:i()}}setTimeout(s,n)})}function TS(t){const e=t.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function AS(t){const e=t.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const Fp=new Be().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Op=new Be().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Ks={[ir]:{transfer:zl,primaries:Bl,luminanceCoefficients:[.2126,.7152,.0722],toReference:t=>t,fromReference:t=>t},[Zn]:{transfer:lt,primaries:Bl,luminanceCoefficients:[.2126,.7152,.0722],toReference:t=>t.convertSRGBToLinear(),fromReference:t=>t.convertLinearToSRGB()},[lc]:{transfer:zl,primaries:Hl,luminanceCoefficients:[.2289,.6917,.0793],toReference:t=>t.applyMatrix3(Op),fromReference:t=>t.applyMatrix3(Fp)},[ih]:{transfer:lt,primaries:Hl,luminanceCoefficients:[.2289,.6917,.0793],toReference:t=>t.convertSRGBToLinear().applyMatrix3(Op),fromReference:t=>t.applyMatrix3(Fp).convertLinearToSRGB()}},bS=new Set([ir,lc]),Je={enabled:!0,_workingColorSpace:ir,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(t){if(!bS.has(t))throw new Error(`Unsupported working color space, "${t}".`);this._workingColorSpace=t},convert:function(t,e,n){if(this.enabled===!1||e===n||!e||!n)return t;const i=Ks[e].toReference,r=Ks[n].fromReference;return r(i(t))},fromWorkingColorSpace:function(t,e){return this.convert(t,this._workingColorSpace,e)},toWorkingColorSpace:function(t,e){return this.convert(t,e,this._workingColorSpace)},getPrimaries:function(t){return Ks[t].primaries},getTransfer:function(t){return t===Fi?zl:Ks[t].transfer},getLuminanceCoefficients:function(t,e=this._workingColorSpace){return t.fromArray(Ks[e].luminanceCoefficients)}};function ys(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function Gc(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}let zr;class CS{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{zr===void 0&&(zr=Wo("canvas")),zr.width=e.width,zr.height=e.height;const i=zr.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=zr}return n.width>2048||n.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),n.toDataURL("image/jpeg",.6)):n.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=Wo("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=ys(s[o]/255)*255;return i.putImageData(r,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(ys(n[i]/255)*255):n[i]=ys(n[i]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let RS=0;class cv{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:RS++}),this.uuid=zs(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(Wc(r[o].image)):s.push(Wc(r[o]))}else s=Wc(r);i.url=s}return n||(e.images[this.uuid]=i),i}}function Wc(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?CS.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let PS=0;class Jt extends ks{constructor(e=Jt.DEFAULT_IMAGE,n=Jt.DEFAULT_MAPPING,i=Sr,r=Sr,s=Vn,o=Mr,a=Wn,l=Si,c=Jt.DEFAULT_ANISOTROPY,u=Fi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:PS++}),this.uuid=zs(),this.name="",this.source=new cv(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Te(0,0),this.repeat=new Te(1,1),this.center=new Te(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Be,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Kg)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Td:e.x=e.x-Math.floor(e.x);break;case Sr:e.x=e.x<0?0:1;break;case Ad:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Td:e.y=e.y-Math.floor(e.y);break;case Sr:e.y=e.y<0?0:1;break;case Ad:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Jt.DEFAULT_IMAGE=null;Jt.DEFAULT_MAPPING=Kg;Jt.DEFAULT_ANISOTROPY=1;class St{constructor(e=0,n=0,i=0,r=1){St.prototype.isVector4=!0,this.x=e,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,r){return this.x=e,this.y=n,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*n+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*n+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*n+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*n+o[7]*i+o[11]*r+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,r,s;const l=e.elements,c=l[0],u=l[4],f=l[8],h=l[1],p=l[5],v=l[9],S=l[2],m=l[6],d=l[10];if(Math.abs(u-h)<.01&&Math.abs(f-S)<.01&&Math.abs(v-m)<.01){if(Math.abs(u+h)<.1&&Math.abs(f+S)<.1&&Math.abs(v+m)<.1&&Math.abs(c+p+d-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const x=(c+1)/2,E=(p+1)/2,L=(d+1)/2,C=(u+h)/4,A=(f+S)/4,R=(v+m)/4;return x>E&&x>L?x<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(x),r=C/i,s=A/i):E>L?E<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(E),i=C/r,s=R/r):L<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(L),i=A/s,r=R/s),this.set(i,r,s,n),this}let g=Math.sqrt((m-v)*(m-v)+(f-S)*(f-S)+(h-u)*(h-u));return Math.abs(g)<.001&&(g=1),this.x=(m-v)/g,this.y=(f-S)/g,this.z=(h-u)/g,this.w=Math.acos((c+p+d-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this.w=Math.max(e.w,Math.min(n.w,this.w)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this.w=Math.max(e,Math.min(n,this.w)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class NS extends ks{constructor(e=1,n=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=1,this.scissor=new St(0,0,e,n),this.scissorTest=!1,this.viewport=new St(0,0,e,n);const r={width:e,height:n,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Vn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const s=new Jt(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);s.flipY=!1,s.generateMipmaps=i.generateMipmaps,s.internalFormat=i.internalFormat,this.textures=[];const o=i.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,n,i=1){if(this.width!==e||this.height!==n||this.depth!==i){this.width=e,this.height=n,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=n,this.textures[r].image.depth=i;this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,r=e.textures.length;i<r;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const n=Object.assign({},e.texture.image);return this.texture.source=new cv(n),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ir extends NS{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}}class uv extends Jt{constructor(e=null,n=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Pn,this.minFilter=Pn,this.wrapR=Sr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class LS extends Jt{constructor(e=null,n=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Pn,this.minFilter=Pn,this.wrapR=Sr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Zo{constructor(e=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=r}static slerpFlat(e,n,i,r,s,o,a){let l=i[r+0],c=i[r+1],u=i[r+2],f=i[r+3];const h=s[o+0],p=s[o+1],v=s[o+2],S=s[o+3];if(a===0){e[n+0]=l,e[n+1]=c,e[n+2]=u,e[n+3]=f;return}if(a===1){e[n+0]=h,e[n+1]=p,e[n+2]=v,e[n+3]=S;return}if(f!==S||l!==h||c!==p||u!==v){let m=1-a;const d=l*h+c*p+u*v+f*S,g=d>=0?1:-1,x=1-d*d;if(x>Number.EPSILON){const L=Math.sqrt(x),C=Math.atan2(L,d*g);m=Math.sin(m*C)/L,a=Math.sin(a*C)/L}const E=a*g;if(l=l*m+h*E,c=c*m+p*E,u=u*m+v*E,f=f*m+S*E,m===1-a){const L=1/Math.sqrt(l*l+c*c+u*u+f*f);l*=L,c*=L,u*=L,f*=L}}e[n]=l,e[n+1]=c,e[n+2]=u,e[n+3]=f}static multiplyQuaternionsFlat(e,n,i,r,s,o){const a=i[r],l=i[r+1],c=i[r+2],u=i[r+3],f=s[o],h=s[o+1],p=s[o+2],v=s[o+3];return e[n]=a*v+u*f+l*p-c*h,e[n+1]=l*v+u*h+c*f-a*p,e[n+2]=c*v+u*p+a*h-l*f,e[n+3]=u*v-a*f-l*h-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),u=a(r/2),f=a(s/2),h=l(i/2),p=l(r/2),v=l(s/2);switch(o){case"XYZ":this._x=h*u*f+c*p*v,this._y=c*p*f-h*u*v,this._z=c*u*v+h*p*f,this._w=c*u*f-h*p*v;break;case"YXZ":this._x=h*u*f+c*p*v,this._y=c*p*f-h*u*v,this._z=c*u*v-h*p*f,this._w=c*u*f+h*p*v;break;case"ZXY":this._x=h*u*f-c*p*v,this._y=c*p*f+h*u*v,this._z=c*u*v+h*p*f,this._w=c*u*f-h*p*v;break;case"ZYX":this._x=h*u*f-c*p*v,this._y=c*p*f+h*u*v,this._z=c*u*v-h*p*f,this._w=c*u*f+h*p*v;break;case"YZX":this._x=h*u*f+c*p*v,this._y=c*p*f+h*u*v,this._z=c*u*v-h*p*f,this._w=c*u*f-h*p*v;break;case"XZY":this._x=h*u*f-c*p*v,this._y=c*p*f-h*u*v,this._z=c*u*v+h*p*f,this._w=c*u*f+h*p*v;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],r=n[4],s=n[8],o=n[1],a=n[5],l=n[9],c=n[2],u=n[6],f=n[10],h=i+a+f;if(h>0){const p=.5/Math.sqrt(h+1);this._w=.25/p,this._x=(u-l)*p,this._y=(s-c)*p,this._z=(o-r)*p}else if(i>a&&i>f){const p=2*Math.sqrt(1+i-a-f);this._w=(u-l)/p,this._x=.25*p,this._y=(r+o)/p,this._z=(s+c)/p}else if(a>f){const p=2*Math.sqrt(1+a-i-f);this._w=(s-c)/p,this._x=(r+o)/p,this._y=.25*p,this._z=(l+u)/p}else{const p=2*Math.sqrt(1+f-i-a);this._w=(o-r)/p,this._x=(s+c)/p,this._y=(l+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(kt(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,n/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,r=e._y,s=e._z,o=e._w,a=n._x,l=n._y,c=n._z,u=n._w;return this._x=i*u+o*a+r*c-s*l,this._y=r*u+o*l+s*a-i*c,this._z=s*u+o*c+i*l-r*a,this._w=o*u-i*a-r*l-s*c,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+i*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const p=1-n;return this._w=p*o+n*this._w,this._x=p*i+n*this._x,this._y=p*r+n*this._y,this._z=p*s+n*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,a),f=Math.sin((1-n)*u)/c,h=Math.sin(n*u)/c;return this._w=o*f+this._w*h,this._x=i*f+this._x*h,this._y=r*f+this._y*h,this._z=s*f+this._z*h,this._onChangeCallback(),this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(n),s*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class P{constructor(e=0,n=0,i=0){P.prototype.isVector3=!0,this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(kp.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(kp.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6]*r,this.y=s[1]*n+s[4]*i+s[7]*r,this.z=s[2]*n+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*n+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*n+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*n+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*n+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){const n=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*r-a*i),u=2*(a*n-s*r),f=2*(s*i-o*n);return this.x=n+l*c+o*f-a*u,this.y=i+l*u+a*c-s*f,this.z=r+l*f+s*u-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[4]*i+s[8]*r,this.y=s[1]*n+s[5]*i+s[9]*r,this.z=s[2]*n+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,r=e.y,s=e.z,o=n.x,a=n.y,l=n.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return jc.copy(this).projectOnVector(e),this.sub(jc)}reflect(e){return this.sub(jc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(kt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return n*n+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const r=Math.sin(n)*e;return this.x=r*Math.sin(i),this.y=Math.cos(n)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(e),this.y=n,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const jc=new P,kp=new Zo;class Qo{constructor(e=new P(1/0,1/0,1/0),n=new P(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(Fn.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(Fn.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=Fn.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(n===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Fn):Fn.fromBufferAttribute(s,o),Fn.applyMatrix4(e.matrixWorld),this.expandByPoint(Fn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Ea.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Ea.copy(i.boundingBox)),Ea.applyMatrix4(e.matrixWorld),this.union(Ea)}const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Fn),Fn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Zs),wa.subVectors(this.max,Zs),Br.subVectors(e.a,Zs),Hr.subVectors(e.b,Zs),Vr.subVectors(e.c,Zs),Ai.subVectors(Hr,Br),bi.subVectors(Vr,Hr),sr.subVectors(Br,Vr);let n=[0,-Ai.z,Ai.y,0,-bi.z,bi.y,0,-sr.z,sr.y,Ai.z,0,-Ai.x,bi.z,0,-bi.x,sr.z,0,-sr.x,-Ai.y,Ai.x,0,-bi.y,bi.x,0,-sr.y,sr.x,0];return!Xc(n,Br,Hr,Vr,wa)||(n=[1,0,0,0,1,0,0,0,1],!Xc(n,Br,Hr,Vr,wa))?!1:(Ta.crossVectors(Ai,bi),n=[Ta.x,Ta.y,Ta.z],Xc(n,Br,Hr,Vr,wa))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Fn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Fn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ri[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ri[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ri[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ri[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ri[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ri[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ri[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ri[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ri),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const ri=[new P,new P,new P,new P,new P,new P,new P,new P],Fn=new P,Ea=new Qo,Br=new P,Hr=new P,Vr=new P,Ai=new P,bi=new P,sr=new P,Zs=new P,wa=new P,Ta=new P,or=new P;function Xc(t,e,n,i,r){for(let s=0,o=t.length-3;s<=o;s+=3){or.fromArray(t,s);const a=r.x*Math.abs(or.x)+r.y*Math.abs(or.y)+r.z*Math.abs(or.z),l=e.dot(or),c=n.dot(or),u=i.dot(or);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const IS=new Qo,Qs=new P,$c=new P;class Jo{constructor(e=new P,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):IS.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Qs.subVectors(e,this.center);const n=Qs.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),r=(i-this.radius)*.5;this.center.addScaledVector(Qs,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):($c.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Qs.copy(e.center).add($c)),this.expandByPoint(Qs.copy(e.center).sub($c))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const si=new P,qc=new P,Aa=new P,Ci=new P,Yc=new P,ba=new P,Kc=new P;class sh{constructor(e=new P,n=new P(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,si)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=si.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(si.copy(this.origin).addScaledVector(this.direction,n),si.distanceToSquared(e))}distanceSqToSegment(e,n,i,r){qc.copy(e).add(n).multiplyScalar(.5),Aa.copy(n).sub(e).normalize(),Ci.copy(this.origin).sub(qc);const s=e.distanceTo(n)*.5,o=-this.direction.dot(Aa),a=Ci.dot(this.direction),l=-Ci.dot(Aa),c=Ci.lengthSq(),u=Math.abs(1-o*o);let f,h,p,v;if(u>0)if(f=o*l-a,h=o*a-l,v=s*u,f>=0)if(h>=-v)if(h<=v){const S=1/u;f*=S,h*=S,p=f*(f+o*h+2*a)+h*(o*f+h+2*l)+c}else h=s,f=Math.max(0,-(o*h+a)),p=-f*f+h*(h+2*l)+c;else h=-s,f=Math.max(0,-(o*h+a)),p=-f*f+h*(h+2*l)+c;else h<=-v?(f=Math.max(0,-(-o*s+a)),h=f>0?-s:Math.min(Math.max(-s,-l),s),p=-f*f+h*(h+2*l)+c):h<=v?(f=0,h=Math.min(Math.max(-s,-l),s),p=h*(h+2*l)+c):(f=Math.max(0,-(o*s+a)),h=f>0?s:Math.min(Math.max(-s,-l),s),p=-f*f+h*(h+2*l)+c);else h=o>0?-s:s,f=Math.max(0,-(o*h+a)),p=-f*f+h*(h+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,f),r&&r.copy(qc).addScaledVector(Aa,h),p}intersectSphere(e,n){si.subVectors(e.center,this.origin);const i=si.dot(this.direction),r=si.dot(si)-i*i,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,n):this.at(a,n)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,r,s,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,h=this.origin;return c>=0?(i=(e.min.x-h.x)*c,r=(e.max.x-h.x)*c):(i=(e.max.x-h.x)*c,r=(e.min.x-h.x)*c),u>=0?(s=(e.min.y-h.y)*u,o=(e.max.y-h.y)*u):(s=(e.max.y-h.y)*u,o=(e.min.y-h.y)*u),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),f>=0?(a=(e.min.z-h.z)*f,l=(e.max.z-h.z)*f):(a=(e.max.z-h.z)*f,l=(e.min.z-h.z)*f),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(e){return this.intersectBox(e,si)!==null}intersectTriangle(e,n,i,r,s){Yc.subVectors(n,e),ba.subVectors(i,e),Kc.crossVectors(Yc,ba);let o=this.direction.dot(Kc),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Ci.subVectors(this.origin,e);const l=a*this.direction.dot(ba.crossVectors(Ci,ba));if(l<0)return null;const c=a*this.direction.dot(Yc.cross(Ci));if(c<0||l+c>o)return null;const u=-a*Ci.dot(Kc);return u<0?null:this.at(u/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ht{constructor(e,n,i,r,s,o,a,l,c,u,f,h,p,v,S,m){ht.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,c,u,f,h,p,v,S,m)}set(e,n,i,r,s,o,a,l,c,u,f,h,p,v,S,m){const d=this.elements;return d[0]=e,d[4]=n,d[8]=i,d[12]=r,d[1]=s,d[5]=o,d[9]=a,d[13]=l,d[2]=c,d[6]=u,d[10]=f,d[14]=h,d[3]=p,d[7]=v,d[11]=S,d[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ht().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,i=e.elements,r=1/Gr.setFromMatrixColumn(e,0).length(),s=1/Gr.setFromMatrixColumn(e,1).length(),o=1/Gr.setFromMatrixColumn(e,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*s,n[5]=i[5]*s,n[6]=i[6]*s,n[7]=0,n[8]=i[8]*o,n[9]=i[9]*o,n[10]=i[10]*o,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),c=Math.sin(r),u=Math.cos(s),f=Math.sin(s);if(e.order==="XYZ"){const h=o*u,p=o*f,v=a*u,S=a*f;n[0]=l*u,n[4]=-l*f,n[8]=c,n[1]=p+v*c,n[5]=h-S*c,n[9]=-a*l,n[2]=S-h*c,n[6]=v+p*c,n[10]=o*l}else if(e.order==="YXZ"){const h=l*u,p=l*f,v=c*u,S=c*f;n[0]=h+S*a,n[4]=v*a-p,n[8]=o*c,n[1]=o*f,n[5]=o*u,n[9]=-a,n[2]=p*a-v,n[6]=S+h*a,n[10]=o*l}else if(e.order==="ZXY"){const h=l*u,p=l*f,v=c*u,S=c*f;n[0]=h-S*a,n[4]=-o*f,n[8]=v+p*a,n[1]=p+v*a,n[5]=o*u,n[9]=S-h*a,n[2]=-o*c,n[6]=a,n[10]=o*l}else if(e.order==="ZYX"){const h=o*u,p=o*f,v=a*u,S=a*f;n[0]=l*u,n[4]=v*c-p,n[8]=h*c+S,n[1]=l*f,n[5]=S*c+h,n[9]=p*c-v,n[2]=-c,n[6]=a*l,n[10]=o*l}else if(e.order==="YZX"){const h=o*l,p=o*c,v=a*l,S=a*c;n[0]=l*u,n[4]=S-h*f,n[8]=v*f+p,n[1]=f,n[5]=o*u,n[9]=-a*u,n[2]=-c*u,n[6]=p*f+v,n[10]=h-S*f}else if(e.order==="XZY"){const h=o*l,p=o*c,v=a*l,S=a*c;n[0]=l*u,n[4]=-f,n[8]=c*u,n[1]=h*f+S,n[5]=o*u,n[9]=p*f-v,n[2]=v*f-p,n[6]=a*u,n[10]=S*f+h}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(DS,e,US)}lookAt(e,n,i){const r=this.elements;return mn.subVectors(e,n),mn.lengthSq()===0&&(mn.z=1),mn.normalize(),Ri.crossVectors(i,mn),Ri.lengthSq()===0&&(Math.abs(i.z)===1?mn.x+=1e-4:mn.z+=1e-4,mn.normalize(),Ri.crossVectors(i,mn)),Ri.normalize(),Ca.crossVectors(mn,Ri),r[0]=Ri.x,r[4]=Ca.x,r[8]=mn.x,r[1]=Ri.y,r[5]=Ca.y,r[9]=mn.y,r[2]=Ri.z,r[6]=Ca.z,r[10]=mn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],u=i[1],f=i[5],h=i[9],p=i[13],v=i[2],S=i[6],m=i[10],d=i[14],g=i[3],x=i[7],E=i[11],L=i[15],C=r[0],A=r[4],R=r[8],j=r[12],M=r[1],T=r[5],W=r[9],V=r[13],Y=r[2],ee=r[6],G=r[10],Q=r[14],I=r[3],K=r[7],Z=r[11],oe=r[15];return s[0]=o*C+a*M+l*Y+c*I,s[4]=o*A+a*T+l*ee+c*K,s[8]=o*R+a*W+l*G+c*Z,s[12]=o*j+a*V+l*Q+c*oe,s[1]=u*C+f*M+h*Y+p*I,s[5]=u*A+f*T+h*ee+p*K,s[9]=u*R+f*W+h*G+p*Z,s[13]=u*j+f*V+h*Q+p*oe,s[2]=v*C+S*M+m*Y+d*I,s[6]=v*A+S*T+m*ee+d*K,s[10]=v*R+S*W+m*G+d*Z,s[14]=v*j+S*V+m*Q+d*oe,s[3]=g*C+x*M+E*Y+L*I,s[7]=g*A+x*T+E*ee+L*K,s[11]=g*R+x*W+E*G+L*Z,s[15]=g*j+x*V+E*Q+L*oe,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],f=e[6],h=e[10],p=e[14],v=e[3],S=e[7],m=e[11],d=e[15];return v*(+s*l*f-r*c*f-s*a*h+i*c*h+r*a*p-i*l*p)+S*(+n*l*p-n*c*h+s*o*h-r*o*p+r*c*u-s*l*u)+m*(+n*c*f-n*a*p-s*o*f+i*o*p+s*a*u-i*c*u)+d*(-r*a*u-n*l*f+n*a*h+r*o*f-i*o*h+i*l*u)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],f=e[9],h=e[10],p=e[11],v=e[12],S=e[13],m=e[14],d=e[15],g=f*m*c-S*h*c+S*l*p-a*m*p-f*l*d+a*h*d,x=v*h*c-u*m*c-v*l*p+o*m*p+u*l*d-o*h*d,E=u*S*c-v*f*c+v*a*p-o*S*p-u*a*d+o*f*d,L=v*f*l-u*S*l-v*a*h+o*S*h+u*a*m-o*f*m,C=n*g+i*x+r*E+s*L;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const A=1/C;return e[0]=g*A,e[1]=(S*h*s-f*m*s-S*r*p+i*m*p+f*r*d-i*h*d)*A,e[2]=(a*m*s-S*l*s+S*r*c-i*m*c-a*r*d+i*l*d)*A,e[3]=(f*l*s-a*h*s-f*r*c+i*h*c+a*r*p-i*l*p)*A,e[4]=x*A,e[5]=(u*m*s-v*h*s+v*r*p-n*m*p-u*r*d+n*h*d)*A,e[6]=(v*l*s-o*m*s-v*r*c+n*m*c+o*r*d-n*l*d)*A,e[7]=(o*h*s-u*l*s+u*r*c-n*h*c-o*r*p+n*l*p)*A,e[8]=E*A,e[9]=(v*f*s-u*S*s-v*i*p+n*S*p+u*i*d-n*f*d)*A,e[10]=(o*S*s-v*a*s+v*i*c-n*S*c-o*i*d+n*a*d)*A,e[11]=(u*a*s-o*f*s-u*i*c+n*f*c+o*i*p-n*a*p)*A,e[12]=L*A,e[13]=(u*S*r-v*f*r+v*i*h-n*S*h-u*i*m+n*f*m)*A,e[14]=(v*a*r-o*S*r-v*i*l+n*S*l+o*i*m-n*a*m)*A,e[15]=(o*f*r-u*a*r+u*i*l-n*f*l-o*i*h+n*a*h)*A,this}scale(e){const n=this.elements,i=e.x,r=e.y,s=e.z;return n[0]*=i,n[4]*=r,n[8]*=s,n[1]*=i,n[5]*=r,n[9]*=s,n[2]*=i,n[6]*=r,n[10]*=s,n[3]*=i,n[7]*=r,n[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),r=Math.sin(n),s=1-i,o=e.x,a=e.y,l=e.z,c=s*o,u=s*a;return this.set(c*o+i,c*a-r*l,c*l+r*a,0,c*a+r*l,u*a+i,u*l-r*o,0,c*l-r*a,u*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,n,r,1,0,0,0,0,1),this}compose(e,n,i){const r=this.elements,s=n._x,o=n._y,a=n._z,l=n._w,c=s+s,u=o+o,f=a+a,h=s*c,p=s*u,v=s*f,S=o*u,m=o*f,d=a*f,g=l*c,x=l*u,E=l*f,L=i.x,C=i.y,A=i.z;return r[0]=(1-(S+d))*L,r[1]=(p+E)*L,r[2]=(v-x)*L,r[3]=0,r[4]=(p-E)*C,r[5]=(1-(h+d))*C,r[6]=(m+g)*C,r[7]=0,r[8]=(v+x)*A,r[9]=(m-g)*A,r[10]=(1-(h+S))*A,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,i){const r=this.elements;let s=Gr.set(r[0],r[1],r[2]).length();const o=Gr.set(r[4],r[5],r[6]).length(),a=Gr.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],On.copy(this);const c=1/s,u=1/o,f=1/a;return On.elements[0]*=c,On.elements[1]*=c,On.elements[2]*=c,On.elements[4]*=u,On.elements[5]*=u,On.elements[6]*=u,On.elements[8]*=f,On.elements[9]*=f,On.elements[10]*=f,n.setFromRotationMatrix(On),i.x=s,i.y=o,i.z=a,this}makePerspective(e,n,i,r,s,o,a=mi){const l=this.elements,c=2*s/(n-e),u=2*s/(i-r),f=(n+e)/(n-e),h=(i+r)/(i-r);let p,v;if(a===mi)p=-(o+s)/(o-s),v=-2*o*s/(o-s);else if(a===Vl)p=-o/(o-s),v=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=u,l[9]=h,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=v,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,n,i,r,s,o,a=mi){const l=this.elements,c=1/(n-e),u=1/(i-r),f=1/(o-s),h=(n+e)*c,p=(i+r)*u;let v,S;if(a===mi)v=(o+s)*f,S=-2*f;else if(a===Vl)v=s*f,S=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-h,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=S,l[14]=-v,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}}const Gr=new P,On=new ht,DS=new P(0,0,0),US=new P(1,1,1),Ri=new P,Ca=new P,mn=new P,zp=new ht,Bp=new Zo;class Mi{constructor(e=0,n=0,i=0,r=Mi.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,r=this._order){return this._x=e,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],c=r[5],u=r[9],f=r[2],h=r[6],p=r[10];switch(n){case"XYZ":this._y=Math.asin(kt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-kt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(kt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-f,p),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-kt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(h,p),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(kt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-kt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return zp.makeRotationFromQuaternion(e),this.setFromRotationMatrix(zp,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return Bp.setFromEuler(this),this.setFromQuaternion(Bp,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Mi.DEFAULT_ORDER="XYZ";let dv=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},FS=0;const Hp=new P,Wr=new Zo,oi=new ht,Ra=new P,Js=new P,OS=new P,kS=new Zo,Vp=new P(1,0,0),Gp=new P(0,1,0),Wp=new P(0,0,1),jp={type:"added"},zS={type:"removed"},jr={type:"childadded",child:null},Zc={type:"childremoved",child:null};class en extends ks{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:FS++}),this.uuid=zs(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=en.DEFAULT_UP.clone();const e=new P,n=new Mi,i=new Zo,r=new P(1,1,1);function s(){i.setFromEuler(n,!1)}function o(){n.setFromQuaternion(i,void 0,!1)}n._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new ht},normalMatrix:{value:new Be}}),this.matrix=new ht,this.matrixWorld=new ht,this.matrixAutoUpdate=en.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=en.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new dv,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return Wr.setFromAxisAngle(e,n),this.quaternion.multiply(Wr),this}rotateOnWorldAxis(e,n){return Wr.setFromAxisAngle(e,n),this.quaternion.premultiply(Wr),this}rotateX(e){return this.rotateOnAxis(Vp,e)}rotateY(e){return this.rotateOnAxis(Gp,e)}rotateZ(e){return this.rotateOnAxis(Wp,e)}translateOnAxis(e,n){return Hp.copy(e).applyQuaternion(this.quaternion),this.position.add(Hp.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(Vp,e)}translateY(e){return this.translateOnAxis(Gp,e)}translateZ(e){return this.translateOnAxis(Wp,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(oi.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?Ra.copy(e):Ra.set(e,n,i);const r=this.parent;this.updateWorldMatrix(!0,!1),Js.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?oi.lookAt(Js,Ra,this.up):oi.lookAt(Ra,Js,this.up),this.quaternion.setFromRotationMatrix(oi),r&&(oi.extractRotation(r.matrixWorld),Wr.setFromRotationMatrix(oi),this.quaternion.premultiply(Wr.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(jp),jr.child=e,this.dispatchEvent(jr),jr.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(zS),Zc.child=e,this.dispatchEvent(Zc),Zc.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),oi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),oi.multiply(e.parent.matrixWorld)),e.applyMatrix4(oi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(jp),jr.child=e,this.dispatchEvent(jr),jr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,n);if(o!==void 0)return o}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Js,e,OS),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Js,kS,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].updateMatrixWorld(e)}updateWorldMatrix(e,n){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const f=l[c];s(e.shapes,f)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(n){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),f=o(e.shapes),h=o(e.skeletons),p=o(e.animations),v=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),f.length>0&&(i.shapes=f),h.length>0&&(i.skeletons=h),p.length>0&&(i.animations=p),v.length>0&&(i.nodes=v)}return i.object=r,i;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}en.DEFAULT_UP=new P(0,1,0);en.DEFAULT_MATRIX_AUTO_UPDATE=!0;en.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const kn=new P,ai=new P,Qc=new P,li=new P,Xr=new P,$r=new P,Xp=new P,Jc=new P,eu=new P,tu=new P,nu=new St,iu=new St,ru=new St;class Gn{constructor(e=new P,n=new P,i=new P){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,r){r.subVectors(i,n),kn.subVectors(e,n),r.cross(kn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,n,i,r,s){kn.subVectors(r,n),ai.subVectors(i,n),Qc.subVectors(e,n);const o=kn.dot(kn),a=kn.dot(ai),l=kn.dot(Qc),c=ai.dot(ai),u=ai.dot(Qc),f=o*c-a*a;if(f===0)return s.set(0,0,0),null;const h=1/f,p=(c*l-a*u)*h,v=(o*u-a*l)*h;return s.set(1-p-v,v,p)}static containsPoint(e,n,i,r){return this.getBarycoord(e,n,i,r,li)===null?!1:li.x>=0&&li.y>=0&&li.x+li.y<=1}static getInterpolation(e,n,i,r,s,o,a,l){return this.getBarycoord(e,n,i,r,li)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,li.x),l.addScaledVector(o,li.y),l.addScaledVector(a,li.z),l)}static getInterpolatedAttribute(e,n,i,r,s,o){return nu.setScalar(0),iu.setScalar(0),ru.setScalar(0),nu.fromBufferAttribute(e,n),iu.fromBufferAttribute(e,i),ru.fromBufferAttribute(e,r),o.setScalar(0),o.addScaledVector(nu,s.x),o.addScaledVector(iu,s.y),o.addScaledVector(ru,s.z),o}static isFrontFacing(e,n,i,r){return kn.subVectors(i,n),ai.subVectors(e,n),kn.cross(ai).dot(r)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,r){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,n,i,r){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return kn.subVectors(this.c,this.b),ai.subVectors(this.a,this.b),kn.cross(ai).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Gn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return Gn.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,i,r,s){return Gn.getInterpolation(e,this.a,this.b,this.c,n,i,r,s)}containsPoint(e){return Gn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Gn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,r=this.b,s=this.c;let o,a;Xr.subVectors(r,i),$r.subVectors(s,i),Jc.subVectors(e,i);const l=Xr.dot(Jc),c=$r.dot(Jc);if(l<=0&&c<=0)return n.copy(i);eu.subVectors(e,r);const u=Xr.dot(eu),f=$r.dot(eu);if(u>=0&&f<=u)return n.copy(r);const h=l*f-u*c;if(h<=0&&l>=0&&u<=0)return o=l/(l-u),n.copy(i).addScaledVector(Xr,o);tu.subVectors(e,s);const p=Xr.dot(tu),v=$r.dot(tu);if(v>=0&&p<=v)return n.copy(s);const S=p*c-l*v;if(S<=0&&c>=0&&v<=0)return a=c/(c-v),n.copy(i).addScaledVector($r,a);const m=u*v-p*f;if(m<=0&&f-u>=0&&p-v>=0)return Xp.subVectors(s,r),a=(f-u)/(f-u+(p-v)),n.copy(r).addScaledVector(Xp,a);const d=1/(m+S+h);return o=S*d,a=h*d,n.copy(i).addScaledVector(Xr,o).addScaledVector($r,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const fv={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Pi={h:0,s:0,l:0},Pa={h:0,s:0,l:0};function su(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class et{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=Zn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Je.toWorkingColorSpace(this,n),this}setRGB(e,n,i,r=Je.workingColorSpace){return this.r=e,this.g=n,this.b=i,Je.toWorkingColorSpace(this,r),this}setHSL(e,n,i,r=Je.workingColorSpace){if(e=rh(e,1),n=kt(n,0,1),i=kt(i,0,1),n===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+n):i+n-i*n,o=2*i-s;this.r=su(o,s,e+1/3),this.g=su(o,s,e),this.b=su(o,s,e-1/3)}return Je.toWorkingColorSpace(this,r),this}setStyle(e,n=Zn){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,n);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,n);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,n);if(o===6)return this.setHex(parseInt(s,16),n);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=Zn){const i=fv[e.toLowerCase()];return i!==void 0?this.setHex(i,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ys(e.r),this.g=ys(e.g),this.b=ys(e.b),this}copyLinearToSRGB(e){return this.r=Gc(e.r),this.g=Gc(e.g),this.b=Gc(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Zn){return Je.fromWorkingColorSpace(Wt.copy(this),e),Math.round(kt(Wt.r*255,0,255))*65536+Math.round(kt(Wt.g*255,0,255))*256+Math.round(kt(Wt.b*255,0,255))}getHexString(e=Zn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=Je.workingColorSpace){Je.fromWorkingColorSpace(Wt.copy(this),n);const i=Wt.r,r=Wt.g,s=Wt.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const f=o-a;switch(c=u<=.5?f/(o+a):f/(2-o-a),o){case i:l=(r-s)/f+(r<s?6:0);break;case r:l=(s-i)/f+2;break;case s:l=(i-r)/f+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,n=Je.workingColorSpace){return Je.fromWorkingColorSpace(Wt.copy(this),n),e.r=Wt.r,e.g=Wt.g,e.b=Wt.b,e}getStyle(e=Zn){Je.fromWorkingColorSpace(Wt.copy(this),e);const n=Wt.r,i=Wt.g,r=Wt.b;return e!==Zn?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,n,i){return this.getHSL(Pi),this.setHSL(Pi.h+e,Pi.s+n,Pi.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(Pi),e.getHSL(Pa);const i=So(Pi.h,Pa.h,n),r=So(Pi.s,Pa.s,n),s=So(Pi.l,Pa.l,n);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*n+s[3]*i+s[6]*r,this.g=s[1]*n+s[4]*i+s[7]*r,this.b=s[2]*n+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Wt=new et;et.NAMES=fv;let BS=0;class Bs extends ks{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:BS++}),this.uuid=zs(),this.name="",this.type="Material",this.blending=xs,this.side=Qi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=pd,this.blendDst=md,this.blendEquation=gr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new et(0,0,0),this.blendAlpha=0,this.depthFunc=Rs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Pp,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=kr,this.stencilZFail=kr,this.stencilZPass=kr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==xs&&(i.blending=this.blending),this.side!==Qi&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==pd&&(i.blendSrc=this.blendSrc),this.blendDst!==md&&(i.blendDst=this.blendDst),this.blendEquation!==gr&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Rs&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Pp&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==kr&&(i.stencilFail=this.stencilFail),this.stencilZFail!==kr&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==kr&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(n){const s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const r=n.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=n[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class _t extends Bs{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new et(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Mi,this.combine=qg,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Et=new P,Na=new Te;class Xt{constructor(e,n,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=Np,this.updateRanges=[],this.gpuType=pi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=n.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)Na.fromBufferAttribute(this,n),Na.applyMatrix3(e),this.setXY(n,Na.x,Na.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)Et.fromBufferAttribute(this,n),Et.applyMatrix3(e),this.setXYZ(n,Et.x,Et.y,Et.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)Et.fromBufferAttribute(this,n),Et.applyMatrix4(e),this.setXYZ(n,Et.x,Et.y,Et.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)Et.fromBufferAttribute(this,n),Et.applyNormalMatrix(e),this.setXYZ(n,Et.x,Et.y,Et.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)Et.fromBufferAttribute(this,n),Et.transformDirection(e),this.setXYZ(n,Et.x,Et.y,Et.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=Qr(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=qt(i,this.array)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=Qr(n,this.array)),n}setX(e,n){return this.normalized&&(n=qt(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=Qr(n,this.array)),n}setY(e,n){return this.normalized&&(n=qt(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=Qr(n,this.array)),n}setZ(e,n){return this.normalized&&(n=qt(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=Qr(n,this.array)),n}setW(e,n){return this.normalized&&(n=qt(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=qt(n,this.array),i=qt(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,r){return e*=this.itemSize,this.normalized&&(n=qt(n,this.array),i=qt(i,this.array),r=qt(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,n,i,r,s){return e*=this.itemSize,this.normalized&&(n=qt(n,this.array),i=qt(i,this.array),r=qt(r,this.array),s=qt(s,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Np&&(e.usage=this.usage),e}}class hv extends Xt{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class pv extends Xt{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class Dt extends Xt{constructor(e,n,i){super(new Float32Array(e),n,i)}}let HS=0;const An=new ht,ou=new en,qr=new P,gn=new Qo,eo=new Qo,Nt=new P;class qe extends ks{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:HS++}),this.uuid=zs(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(lv(e)?pv:hv)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Be().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return An.makeRotationFromQuaternion(e),this.applyMatrix4(An),this}rotateX(e){return An.makeRotationX(e),this.applyMatrix4(An),this}rotateY(e){return An.makeRotationY(e),this.applyMatrix4(An),this}rotateZ(e){return An.makeRotationZ(e),this.applyMatrix4(An),this}translate(e,n,i){return An.makeTranslation(e,n,i),this.applyMatrix4(An),this}scale(e,n,i){return An.makeScale(e,n,i),this.applyMatrix4(An),this}lookAt(e){return ou.lookAt(e),ou.updateMatrix(),this.applyMatrix4(ou.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(qr).negate(),this.translate(qr.x,qr.y,qr.z),this}setFromPoints(e){const n=[];for(let i=0,r=e.length;i<r;i++){const s=e[i];n.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new Dt(n,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Qo);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new P(-1/0,-1/0,-1/0),new P(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,r=n.length;i<r;i++){const s=n[i];gn.setFromBufferAttribute(s),this.morphTargetsRelative?(Nt.addVectors(this.boundingBox.min,gn.min),this.boundingBox.expandByPoint(Nt),Nt.addVectors(this.boundingBox.max,gn.max),this.boundingBox.expandByPoint(Nt)):(this.boundingBox.expandByPoint(gn.min),this.boundingBox.expandByPoint(gn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Jo);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new P,1/0);return}if(e){const i=this.boundingSphere.center;if(gn.setFromBufferAttribute(e),n)for(let s=0,o=n.length;s<o;s++){const a=n[s];eo.setFromBufferAttribute(a),this.morphTargetsRelative?(Nt.addVectors(gn.min,eo.min),gn.expandByPoint(Nt),Nt.addVectors(gn.max,eo.max),gn.expandByPoint(Nt)):(gn.expandByPoint(eo.min),gn.expandByPoint(eo.max))}gn.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)Nt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(Nt));if(n)for(let s=0,o=n.length;s<o;s++){const a=n[s],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)Nt.fromBufferAttribute(a,c),l&&(qr.fromBufferAttribute(e,c),Nt.add(qr)),r=Math.max(r,i.distanceToSquared(Nt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=n.position,r=n.normal,s=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Xt(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let R=0;R<i.count;R++)a[R]=new P,l[R]=new P;const c=new P,u=new P,f=new P,h=new Te,p=new Te,v=new Te,S=new P,m=new P;function d(R,j,M){c.fromBufferAttribute(i,R),u.fromBufferAttribute(i,j),f.fromBufferAttribute(i,M),h.fromBufferAttribute(s,R),p.fromBufferAttribute(s,j),v.fromBufferAttribute(s,M),u.sub(c),f.sub(c),p.sub(h),v.sub(h);const T=1/(p.x*v.y-v.x*p.y);isFinite(T)&&(S.copy(u).multiplyScalar(v.y).addScaledVector(f,-p.y).multiplyScalar(T),m.copy(f).multiplyScalar(p.x).addScaledVector(u,-v.x).multiplyScalar(T),a[R].add(S),a[j].add(S),a[M].add(S),l[R].add(m),l[j].add(m),l[M].add(m))}let g=this.groups;g.length===0&&(g=[{start:0,count:e.count}]);for(let R=0,j=g.length;R<j;++R){const M=g[R],T=M.start,W=M.count;for(let V=T,Y=T+W;V<Y;V+=3)d(e.getX(V+0),e.getX(V+1),e.getX(V+2))}const x=new P,E=new P,L=new P,C=new P;function A(R){L.fromBufferAttribute(r,R),C.copy(L);const j=a[R];x.copy(j),x.sub(L.multiplyScalar(L.dot(j))).normalize(),E.crossVectors(C,j);const T=E.dot(l[R])<0?-1:1;o.setXYZW(R,x.x,x.y,x.z,T)}for(let R=0,j=g.length;R<j;++R){const M=g[R],T=M.start,W=M.count;for(let V=T,Y=T+W;V<Y;V+=3)A(e.getX(V+0)),A(e.getX(V+1)),A(e.getX(V+2))}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Xt(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let h=0,p=i.count;h<p;h++)i.setXYZ(h,0,0,0);const r=new P,s=new P,o=new P,a=new P,l=new P,c=new P,u=new P,f=new P;if(e)for(let h=0,p=e.count;h<p;h+=3){const v=e.getX(h+0),S=e.getX(h+1),m=e.getX(h+2);r.fromBufferAttribute(n,v),s.fromBufferAttribute(n,S),o.fromBufferAttribute(n,m),u.subVectors(o,s),f.subVectors(r,s),u.cross(f),a.fromBufferAttribute(i,v),l.fromBufferAttribute(i,S),c.fromBufferAttribute(i,m),a.add(u),l.add(u),c.add(u),i.setXYZ(v,a.x,a.y,a.z),i.setXYZ(S,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let h=0,p=n.count;h<p;h+=3)r.fromBufferAttribute(n,h+0),s.fromBufferAttribute(n,h+1),o.fromBufferAttribute(n,h+2),u.subVectors(o,s),f.subVectors(r,s),u.cross(f),i.setXYZ(h+0,u.x,u.y,u.z),i.setXYZ(h+1,u.x,u.y,u.z),i.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)Nt.fromBufferAttribute(e,n),Nt.normalize(),e.setXYZ(n,Nt.x,Nt.y,Nt.z)}toNonIndexed(){function e(a,l){const c=a.array,u=a.itemSize,f=a.normalized,h=new c.constructor(l.length*u);let p=0,v=0;for(let S=0,m=l.length;S<m;S++){a.isInterleavedBufferAttribute?p=l[S]*a.data.stride+a.offset:p=l[S]*u;for(let d=0;d<u;d++)h[v++]=c[p++]}return new Xt(h,u,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new qe,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],c=e(l,i);n.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let u=0,f=c.length;u<f;u++){const h=c[u],p=e(h,i);l.push(p)}n.morphAttributes[a]=l}n.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];n.addGroup(c.start,c.count,c.materialIndex)}return n}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let f=0,h=c.length;f<h;f++){const p=c[f];u.push(p.toJSON(e.data))}u.length>0&&(r[l]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(n));const r=e.attributes;for(const c in r){const u=r[c];this.setAttribute(c,u.clone(n))}const s=e.morphAttributes;for(const c in s){const u=[],f=s[c];for(let h=0,p=f.length;h<p;h++)u.push(f[h].clone(n));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,u=o.length;c<u;c++){const f=o[c];this.addGroup(f.start,f.count,f.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const $p=new ht,ar=new sh,La=new Jo,qp=new P,Ia=new P,Da=new P,Ua=new P,au=new P,Fa=new P,Yp=new P,Oa=new P;class it extends en{constructor(e=new qe,n=new _t){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,n){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;n.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){Fa.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=a[l],f=s[l];u!==0&&(au.fromBufferAttribute(f,e),o?Fa.addScaledVector(au,u):Fa.addScaledVector(au.sub(n),u))}n.add(Fa)}return n}raycast(e,n){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),La.copy(i.boundingSphere),La.applyMatrix4(s),ar.copy(e.ray).recast(e.near),!(La.containsPoint(ar.origin)===!1&&(ar.intersectSphere(La,qp)===null||ar.origin.distanceToSquared(qp)>(e.far-e.near)**2))&&($p.copy(s).invert(),ar.copy(e.ray).applyMatrix4($p),!(i.boundingBox!==null&&ar.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,ar)))}_computeIntersections(e,n,i){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,f=s.attributes.normal,h=s.groups,p=s.drawRange;if(a!==null)if(Array.isArray(o))for(let v=0,S=h.length;v<S;v++){const m=h[v],d=o[m.materialIndex],g=Math.max(m.start,p.start),x=Math.min(a.count,Math.min(m.start+m.count,p.start+p.count));for(let E=g,L=x;E<L;E+=3){const C=a.getX(E),A=a.getX(E+1),R=a.getX(E+2);r=ka(this,d,e,i,c,u,f,C,A,R),r&&(r.faceIndex=Math.floor(E/3),r.face.materialIndex=m.materialIndex,n.push(r))}}else{const v=Math.max(0,p.start),S=Math.min(a.count,p.start+p.count);for(let m=v,d=S;m<d;m+=3){const g=a.getX(m),x=a.getX(m+1),E=a.getX(m+2);r=ka(this,o,e,i,c,u,f,g,x,E),r&&(r.faceIndex=Math.floor(m/3),n.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let v=0,S=h.length;v<S;v++){const m=h[v],d=o[m.materialIndex],g=Math.max(m.start,p.start),x=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let E=g,L=x;E<L;E+=3){const C=E,A=E+1,R=E+2;r=ka(this,d,e,i,c,u,f,C,A,R),r&&(r.faceIndex=Math.floor(E/3),r.face.materialIndex=m.materialIndex,n.push(r))}}else{const v=Math.max(0,p.start),S=Math.min(l.count,p.start+p.count);for(let m=v,d=S;m<d;m+=3){const g=m,x=m+1,E=m+2;r=ka(this,o,e,i,c,u,f,g,x,E),r&&(r.faceIndex=Math.floor(m/3),n.push(r))}}}}function VS(t,e,n,i,r,s,o,a){let l;if(e.side===fn?l=i.intersectTriangle(o,s,r,!0,a):l=i.intersectTriangle(r,s,o,e.side===Qi,a),l===null)return null;Oa.copy(a),Oa.applyMatrix4(t.matrixWorld);const c=n.ray.origin.distanceTo(Oa);return c<n.near||c>n.far?null:{distance:c,point:Oa.clone(),object:t}}function ka(t,e,n,i,r,s,o,a,l,c){t.getVertexPosition(a,Ia),t.getVertexPosition(l,Da),t.getVertexPosition(c,Ua);const u=VS(t,e,n,i,Ia,Da,Ua,Yp);if(u){const f=new P;Gn.getBarycoord(Yp,Ia,Da,Ua,f),r&&(u.uv=Gn.getInterpolatedAttribute(r,a,l,c,f,new Te)),s&&(u.uv1=Gn.getInterpolatedAttribute(s,a,l,c,f,new Te)),o&&(u.normal=Gn.getInterpolatedAttribute(o,a,l,c,f,new P),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const h={a,b:l,c,normal:new P,materialIndex:0};Gn.getNormal(Ia,Da,Ua,h.normal),u.face=h,u.barycoord=f}return u}class ea extends qe{constructor(e=1,n=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],u=[],f=[];let h=0,p=0;v("z","y","x",-1,-1,i,n,e,o,s,0),v("z","y","x",1,-1,i,n,-e,o,s,1),v("x","z","y",1,1,e,i,n,r,o,2),v("x","z","y",1,-1,e,i,-n,r,o,3),v("x","y","z",1,-1,e,n,i,r,s,4),v("x","y","z",-1,-1,e,n,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new Dt(c,3)),this.setAttribute("normal",new Dt(u,3)),this.setAttribute("uv",new Dt(f,2));function v(S,m,d,g,x,E,L,C,A,R,j){const M=E/A,T=L/R,W=E/2,V=L/2,Y=C/2,ee=A+1,G=R+1;let Q=0,I=0;const K=new P;for(let Z=0;Z<G;Z++){const oe=Z*T-V;for(let ye=0;ye<ee;ye++){const Fe=ye*M-W;K[S]=Fe*g,K[m]=oe*x,K[d]=Y,c.push(K.x,K.y,K.z),K[S]=0,K[m]=0,K[d]=C>0?1:-1,u.push(K.x,K.y,K.z),f.push(ye/A),f.push(1-Z/R),Q+=1}}for(let Z=0;Z<R;Z++)for(let oe=0;oe<A;oe++){const ye=h+oe+ee*Z,Fe=h+oe+ee*(Z+1),$=h+(oe+1)+ee*(Z+1),ie=h+(oe+1)+ee*Z;l.push(ye,Fe,ie),l.push(Fe,$,ie),I+=6}a.addGroup(p,I,j),p+=I,h+=Q}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ea(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Ds(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const r=t[n][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=r.clone():Array.isArray(r)?e[n][i]=r.slice():e[n][i]=r}}return e}function Yt(t){const e={};for(let n=0;n<t.length;n++){const i=Ds(t[n]);for(const r in i)e[r]=i[r]}return e}function GS(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function mv(t){const e=t.getRenderTarget();return e===null?t.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Je.workingColorSpace}const WS={clone:Ds,merge:Yt};var jS=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,XS=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ji extends Bs{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=jS,this.fragmentShader=XS,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ds(e.uniforms),this.uniformsGroups=GS(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?n.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?n.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?n.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?n.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?n.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?n.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?n.uniforms[r]={type:"m4",value:o.toArray()}:n.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}}class gv extends en{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ht,this.projectionMatrix=new ht,this.projectionMatrixInverse=new ht,this.coordinateSystem=mi}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Ni=new P,Kp=new Te,Zp=new Te;class xn extends gv{constructor(e=50,n=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=Go*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(yo*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Go*2*Math.atan(Math.tan(yo*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,i){Ni.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Ni.x,Ni.y).multiplyScalar(-e/Ni.z),Ni.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Ni.x,Ni.y).multiplyScalar(-e/Ni.z)}getViewSize(e,n){return this.getViewBounds(e,Kp,Zp),n.subVectors(Zp,Kp)}setViewOffset(e,n,i,r,s,o){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(yo*.5*this.fov)/this.zoom,i=2*n,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*r/l,n-=o.offsetY*i/c,r*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,n,n-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const Yr=-90,Kr=1;class $S extends en{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new xn(Yr,Kr,e,n);r.layers=this.layers,this.add(r);const s=new xn(Yr,Kr,e,n);s.layers=this.layers,this.add(s);const o=new xn(Yr,Kr,e,n);o.layers=this.layers,this.add(o);const a=new xn(Yr,Kr,e,n);a.layers=this.layers,this.add(a);const l=new xn(Yr,Kr,e,n);l.layers=this.layers,this.add(l);const c=new xn(Yr,Kr,e,n);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,r,s,o,a,l]=n;for(const c of n)this.remove(c);if(e===mi)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Vl)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of n)this.add(c),c.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,c,u]=this.children,f=e.getRenderTarget(),h=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),v=e.xr.enabled;e.xr.enabled=!1;const S=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(n,s),e.setRenderTarget(i,1,r),e.render(n,o),e.setRenderTarget(i,2,r),e.render(n,a),e.setRenderTarget(i,3,r),e.render(n,l),e.setRenderTarget(i,4,r),e.render(n,c),i.texture.generateMipmaps=S,e.setRenderTarget(i,5,r),e.render(n,u),e.setRenderTarget(f,h,p),e.xr.enabled=v,i.texture.needsPMREMUpdate=!0}}class vv extends Jt{constructor(e,n,i,r,s,o,a,l,c,u){e=e!==void 0?e:[],n=n!==void 0?n:Ps,super(e,n,i,r,s,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class qS extends Ir{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new vv(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:Vn}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new ea(5,5,5),s=new Ji({name:"CubemapFromEquirect",uniforms:Ds(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:fn,blending:$i});s.uniforms.tEquirect.value=n;const o=new it(r,s),a=n.minFilter;return n.minFilter===Mr&&(n.minFilter=Vn),new $S(1,10,this).update(e,o),n.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,n,i,r){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(n,i,r);e.setRenderTarget(s)}}const lu=new P,YS=new P,KS=new Be;let hr=class{constructor(e=new P(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,r){return this.normal.set(e,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const r=lu.subVectors(i,n).cross(YS.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const i=e.delta(lu),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:n.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||KS.getNormalMatrix(e),r=this.coplanarPoint(lu).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}};const lr=new Jo,za=new P;class xv{constructor(e=new hr,n=new hr,i=new hr,r=new hr,s=new hr,o=new hr){this.planes=[e,n,i,r,s,o]}set(e,n,i,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(n),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=mi){const i=this.planes,r=e.elements,s=r[0],o=r[1],a=r[2],l=r[3],c=r[4],u=r[5],f=r[6],h=r[7],p=r[8],v=r[9],S=r[10],m=r[11],d=r[12],g=r[13],x=r[14],E=r[15];if(i[0].setComponents(l-s,h-c,m-p,E-d).normalize(),i[1].setComponents(l+s,h+c,m+p,E+d).normalize(),i[2].setComponents(l+o,h+u,m+v,E+g).normalize(),i[3].setComponents(l-o,h-u,m-v,E-g).normalize(),i[4].setComponents(l-a,h-f,m-S,E-x).normalize(),n===mi)i[5].setComponents(l+a,h+f,m+S,E+x).normalize();else if(n===Vl)i[5].setComponents(a,f,S,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),lr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),lr.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(lr)}intersectsSprite(e){return lr.center.set(0,0,0),lr.radius=.7071067811865476,lr.applyMatrix4(e.matrixWorld),this.intersectsSphere(lr)}intersectsSphere(e){const n=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(n[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const r=n[i];if(za.x=r.normal.x>0?e.max.x:e.min.x,za.y=r.normal.y>0?e.max.y:e.min.y,za.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(za)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function _v(){let t=null,e=!1,n=null,i=null;function r(s,o){n(s,o),i=t.requestAnimationFrame(r)}return{start:function(){e!==!0&&n!==null&&(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){n=s},setContext:function(s){t=s}}}function ZS(t){const e=new WeakMap;function n(a,l){const c=a.array,u=a.usage,f=c.byteLength,h=t.createBuffer();t.bindBuffer(l,h),t.bufferData(l,c,u),a.onUploadCallback();let p;if(c instanceof Float32Array)p=t.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?p=t.HALF_FLOAT:p=t.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=t.SHORT;else if(c instanceof Uint32Array)p=t.UNSIGNED_INT;else if(c instanceof Int32Array)p=t.INT;else if(c instanceof Int8Array)p=t.BYTE;else if(c instanceof Uint8Array)p=t.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:h,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:f}}function i(a,l,c){const u=l.array,f=l.updateRanges;if(t.bindBuffer(c,a),f.length===0)t.bufferSubData(c,0,u);else{f.sort((p,v)=>p.start-v.start);let h=0;for(let p=1;p<f.length;p++){const v=f[h],S=f[p];S.start<=v.start+v.count+1?v.count=Math.max(v.count,S.start+S.count-v.start):(++h,f[h]=S)}f.length=h+1;for(let p=0,v=f.length;p<v;p++){const S=f[p];t.bufferSubData(c,S.start*u.BYTES_PER_ELEMENT,u,S.start,S.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(t.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=e.get(a);if(c===void 0)e.set(a,n(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:r,remove:s,update:o}}class Yi extends qe{constructor(e=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:r};const s=e/2,o=n/2,a=Math.floor(i),l=Math.floor(r),c=a+1,u=l+1,f=e/a,h=n/l,p=[],v=[],S=[],m=[];for(let d=0;d<u;d++){const g=d*h-o;for(let x=0;x<c;x++){const E=x*f-s;v.push(E,-g,0),S.push(0,0,1),m.push(x/a),m.push(1-d/l)}}for(let d=0;d<l;d++)for(let g=0;g<a;g++){const x=g+c*d,E=g+c*(d+1),L=g+1+c*(d+1),C=g+1+c*d;p.push(x,E,C),p.push(E,L,C)}this.setIndex(p),this.setAttribute("position",new Dt(v,3)),this.setAttribute("normal",new Dt(S,3)),this.setAttribute("uv",new Dt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Yi(e.width,e.height,e.widthSegments,e.heightSegments)}}var QS=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,JS=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,e1=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,t1=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,n1=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,i1=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,r1=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,s1=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,o1=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,a1=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,l1=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,c1=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,u1=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,d1=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,f1=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,h1=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,p1=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,m1=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,g1=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,v1=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,x1=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,_1=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,y1=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,S1=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,M1=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,E1=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,w1=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,T1=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,A1=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,b1=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,C1="gl_FragColor = linearToOutputTexel( gl_FragColor );",R1=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,P1=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,N1=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,L1=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,I1=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,D1=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,U1=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,F1=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,O1=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,k1=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,z1=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,B1=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,H1=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,V1=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,G1=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,W1=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,j1=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,X1=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,$1=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,q1=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Y1=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,K1=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Z1=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Q1=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,J1=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,eM=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,tM=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,nM=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,iM=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,rM=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,sM=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,oM=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,aM=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,lM=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,cM=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,uM=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,dM=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,fM=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,hM=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,pM=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,mM=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,gM=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,vM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,xM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,_M=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,yM=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,SM=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,MM=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,EM=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,wM=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,TM=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,AM=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,bM=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,CM=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,RM=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,PM=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,NM=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,LM=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,IM=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,DM=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,UM=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,FM=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,OM=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,kM=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,zM=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,BM=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,HM=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,VM=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,GM=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,WM=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,jM=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,XM=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,$M=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,qM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,YM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,KM=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const ZM=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,QM=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,JM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,eE=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,tE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,nE=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,iE=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,rE=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,sE=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,oE=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,aE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,lE=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,cE=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,uE=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,dE=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,fE=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,hE=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,pE=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,mE=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,gE=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,vE=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,xE=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,_E=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,yE=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,SE=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,ME=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,EE=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,wE=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,TE=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,AE=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,bE=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,CE=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,RE=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,PE=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,ze={alphahash_fragment:QS,alphahash_pars_fragment:JS,alphamap_fragment:e1,alphamap_pars_fragment:t1,alphatest_fragment:n1,alphatest_pars_fragment:i1,aomap_fragment:r1,aomap_pars_fragment:s1,batching_pars_vertex:o1,batching_vertex:a1,begin_vertex:l1,beginnormal_vertex:c1,bsdfs:u1,iridescence_fragment:d1,bumpmap_pars_fragment:f1,clipping_planes_fragment:h1,clipping_planes_pars_fragment:p1,clipping_planes_pars_vertex:m1,clipping_planes_vertex:g1,color_fragment:v1,color_pars_fragment:x1,color_pars_vertex:_1,color_vertex:y1,common:S1,cube_uv_reflection_fragment:M1,defaultnormal_vertex:E1,displacementmap_pars_vertex:w1,displacementmap_vertex:T1,emissivemap_fragment:A1,emissivemap_pars_fragment:b1,colorspace_fragment:C1,colorspace_pars_fragment:R1,envmap_fragment:P1,envmap_common_pars_fragment:N1,envmap_pars_fragment:L1,envmap_pars_vertex:I1,envmap_physical_pars_fragment:W1,envmap_vertex:D1,fog_vertex:U1,fog_pars_vertex:F1,fog_fragment:O1,fog_pars_fragment:k1,gradientmap_pars_fragment:z1,lightmap_pars_fragment:B1,lights_lambert_fragment:H1,lights_lambert_pars_fragment:V1,lights_pars_begin:G1,lights_toon_fragment:j1,lights_toon_pars_fragment:X1,lights_phong_fragment:$1,lights_phong_pars_fragment:q1,lights_physical_fragment:Y1,lights_physical_pars_fragment:K1,lights_fragment_begin:Z1,lights_fragment_maps:Q1,lights_fragment_end:J1,logdepthbuf_fragment:eM,logdepthbuf_pars_fragment:tM,logdepthbuf_pars_vertex:nM,logdepthbuf_vertex:iM,map_fragment:rM,map_pars_fragment:sM,map_particle_fragment:oM,map_particle_pars_fragment:aM,metalnessmap_fragment:lM,metalnessmap_pars_fragment:cM,morphinstance_vertex:uM,morphcolor_vertex:dM,morphnormal_vertex:fM,morphtarget_pars_vertex:hM,morphtarget_vertex:pM,normal_fragment_begin:mM,normal_fragment_maps:gM,normal_pars_fragment:vM,normal_pars_vertex:xM,normal_vertex:_M,normalmap_pars_fragment:yM,clearcoat_normal_fragment_begin:SM,clearcoat_normal_fragment_maps:MM,clearcoat_pars_fragment:EM,iridescence_pars_fragment:wM,opaque_fragment:TM,packing:AM,premultiplied_alpha_fragment:bM,project_vertex:CM,dithering_fragment:RM,dithering_pars_fragment:PM,roughnessmap_fragment:NM,roughnessmap_pars_fragment:LM,shadowmap_pars_fragment:IM,shadowmap_pars_vertex:DM,shadowmap_vertex:UM,shadowmask_pars_fragment:FM,skinbase_vertex:OM,skinning_pars_vertex:kM,skinning_vertex:zM,skinnormal_vertex:BM,specularmap_fragment:HM,specularmap_pars_fragment:VM,tonemapping_fragment:GM,tonemapping_pars_fragment:WM,transmission_fragment:jM,transmission_pars_fragment:XM,uv_pars_fragment:$M,uv_pars_vertex:qM,uv_vertex:YM,worldpos_vertex:KM,background_vert:ZM,background_frag:QM,backgroundCube_vert:JM,backgroundCube_frag:eE,cube_vert:tE,cube_frag:nE,depth_vert:iE,depth_frag:rE,distanceRGBA_vert:sE,distanceRGBA_frag:oE,equirect_vert:aE,equirect_frag:lE,linedashed_vert:cE,linedashed_frag:uE,meshbasic_vert:dE,meshbasic_frag:fE,meshlambert_vert:hE,meshlambert_frag:pE,meshmatcap_vert:mE,meshmatcap_frag:gE,meshnormal_vert:vE,meshnormal_frag:xE,meshphong_vert:_E,meshphong_frag:yE,meshphysical_vert:SE,meshphysical_frag:ME,meshtoon_vert:EE,meshtoon_frag:wE,points_vert:TE,points_frag:AE,shadow_vert:bE,shadow_frag:CE,sprite_vert:RE,sprite_frag:PE},ue={common:{diffuse:{value:new et(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Be},alphaMap:{value:null},alphaMapTransform:{value:new Be},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Be}},envmap:{envMap:{value:null},envMapRotation:{value:new Be},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Be}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Be}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Be},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Be},normalScale:{value:new Te(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Be},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Be}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Be}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Be}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new et(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new et(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Be},alphaTest:{value:0},uvTransform:{value:new Be}},sprite:{diffuse:{value:new et(16777215)},opacity:{value:1},center:{value:new Te(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Be},alphaMap:{value:null},alphaMapTransform:{value:new Be},alphaTest:{value:0}}},Qn={basic:{uniforms:Yt([ue.common,ue.specularmap,ue.envmap,ue.aomap,ue.lightmap,ue.fog]),vertexShader:ze.meshbasic_vert,fragmentShader:ze.meshbasic_frag},lambert:{uniforms:Yt([ue.common,ue.specularmap,ue.envmap,ue.aomap,ue.lightmap,ue.emissivemap,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.fog,ue.lights,{emissive:{value:new et(0)}}]),vertexShader:ze.meshlambert_vert,fragmentShader:ze.meshlambert_frag},phong:{uniforms:Yt([ue.common,ue.specularmap,ue.envmap,ue.aomap,ue.lightmap,ue.emissivemap,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.fog,ue.lights,{emissive:{value:new et(0)},specular:{value:new et(1118481)},shininess:{value:30}}]),vertexShader:ze.meshphong_vert,fragmentShader:ze.meshphong_frag},standard:{uniforms:Yt([ue.common,ue.envmap,ue.aomap,ue.lightmap,ue.emissivemap,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.roughnessmap,ue.metalnessmap,ue.fog,ue.lights,{emissive:{value:new et(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ze.meshphysical_vert,fragmentShader:ze.meshphysical_frag},toon:{uniforms:Yt([ue.common,ue.aomap,ue.lightmap,ue.emissivemap,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.gradientmap,ue.fog,ue.lights,{emissive:{value:new et(0)}}]),vertexShader:ze.meshtoon_vert,fragmentShader:ze.meshtoon_frag},matcap:{uniforms:Yt([ue.common,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.fog,{matcap:{value:null}}]),vertexShader:ze.meshmatcap_vert,fragmentShader:ze.meshmatcap_frag},points:{uniforms:Yt([ue.points,ue.fog]),vertexShader:ze.points_vert,fragmentShader:ze.points_frag},dashed:{uniforms:Yt([ue.common,ue.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ze.linedashed_vert,fragmentShader:ze.linedashed_frag},depth:{uniforms:Yt([ue.common,ue.displacementmap]),vertexShader:ze.depth_vert,fragmentShader:ze.depth_frag},normal:{uniforms:Yt([ue.common,ue.bumpmap,ue.normalmap,ue.displacementmap,{opacity:{value:1}}]),vertexShader:ze.meshnormal_vert,fragmentShader:ze.meshnormal_frag},sprite:{uniforms:Yt([ue.sprite,ue.fog]),vertexShader:ze.sprite_vert,fragmentShader:ze.sprite_frag},background:{uniforms:{uvTransform:{value:new Be},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ze.background_vert,fragmentShader:ze.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Be}},vertexShader:ze.backgroundCube_vert,fragmentShader:ze.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ze.cube_vert,fragmentShader:ze.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ze.equirect_vert,fragmentShader:ze.equirect_frag},distanceRGBA:{uniforms:Yt([ue.common,ue.displacementmap,{referencePosition:{value:new P},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ze.distanceRGBA_vert,fragmentShader:ze.distanceRGBA_frag},shadow:{uniforms:Yt([ue.lights,ue.fog,{color:{value:new et(0)},opacity:{value:1}}]),vertexShader:ze.shadow_vert,fragmentShader:ze.shadow_frag}};Qn.physical={uniforms:Yt([Qn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Be},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Be},clearcoatNormalScale:{value:new Te(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Be},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Be},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Be},sheen:{value:0},sheenColor:{value:new et(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Be},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Be},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Be},transmissionSamplerSize:{value:new Te},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Be},attenuationDistance:{value:0},attenuationColor:{value:new et(0)},specularColor:{value:new et(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Be},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Be},anisotropyVector:{value:new Te},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Be}}]),vertexShader:ze.meshphysical_vert,fragmentShader:ze.meshphysical_frag};const Ba={r:0,b:0,g:0},cr=new Mi,NE=new ht;function LE(t,e,n,i,r,s,o){const a=new et(0);let l=s===!0?0:1,c,u,f=null,h=0,p=null;function v(g){let x=g.isScene===!0?g.background:null;return x&&x.isTexture&&(x=(g.backgroundBlurriness>0?n:e).get(x)),x}function S(g){let x=!1;const E=v(g);E===null?d(a,l):E&&E.isColor&&(d(E,1),x=!0);const L=t.xr.getEnvironmentBlendMode();L==="additive"?i.buffers.color.setClear(0,0,0,1,o):L==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(t.autoClear||x)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil))}function m(g,x){const E=v(x);E&&(E.isCubeTexture||E.mapping===ac)?(u===void 0&&(u=new it(new ea(1,1,1),new Ji({name:"BackgroundCubeMaterial",uniforms:Ds(Qn.backgroundCube.uniforms),vertexShader:Qn.backgroundCube.vertexShader,fragmentShader:Qn.backgroundCube.fragmentShader,side:fn,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(L,C,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),cr.copy(x.backgroundRotation),cr.x*=-1,cr.y*=-1,cr.z*=-1,E.isCubeTexture&&E.isRenderTargetTexture===!1&&(cr.y*=-1,cr.z*=-1),u.material.uniforms.envMap.value=E,u.material.uniforms.flipEnvMap.value=E.isCubeTexture&&E.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=x.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(NE.makeRotationFromEuler(cr)),u.material.toneMapped=Je.getTransfer(E.colorSpace)!==lt,(f!==E||h!==E.version||p!==t.toneMapping)&&(u.material.needsUpdate=!0,f=E,h=E.version,p=t.toneMapping),u.layers.enableAll(),g.unshift(u,u.geometry,u.material,0,0,null)):E&&E.isTexture&&(c===void 0&&(c=new it(new Yi(2,2),new Ji({name:"BackgroundMaterial",uniforms:Ds(Qn.background.uniforms),vertexShader:Qn.background.vertexShader,fragmentShader:Qn.background.fragmentShader,side:Qi,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=E,c.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,c.material.toneMapped=Je.getTransfer(E.colorSpace)!==lt,E.matrixAutoUpdate===!0&&E.updateMatrix(),c.material.uniforms.uvTransform.value.copy(E.matrix),(f!==E||h!==E.version||p!==t.toneMapping)&&(c.material.needsUpdate=!0,f=E,h=E.version,p=t.toneMapping),c.layers.enableAll(),g.unshift(c,c.geometry,c.material,0,0,null))}function d(g,x){g.getRGB(Ba,mv(t)),i.buffers.color.setClear(Ba.r,Ba.g,Ba.b,x,o)}return{getClearColor:function(){return a},setClearColor:function(g,x=1){a.set(g),l=x,d(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(g){l=g,d(a,l)},render:S,addToRenderList:m}}function IE(t,e){const n=t.getParameter(t.MAX_VERTEX_ATTRIBS),i={},r=h(null);let s=r,o=!1;function a(M,T,W,V,Y){let ee=!1;const G=f(V,W,T);s!==G&&(s=G,c(s.object)),ee=p(M,V,W,Y),ee&&v(M,V,W,Y),Y!==null&&e.update(Y,t.ELEMENT_ARRAY_BUFFER),(ee||o)&&(o=!1,E(M,T,W,V),Y!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,e.get(Y).buffer))}function l(){return t.createVertexArray()}function c(M){return t.bindVertexArray(M)}function u(M){return t.deleteVertexArray(M)}function f(M,T,W){const V=W.wireframe===!0;let Y=i[M.id];Y===void 0&&(Y={},i[M.id]=Y);let ee=Y[T.id];ee===void 0&&(ee={},Y[T.id]=ee);let G=ee[V];return G===void 0&&(G=h(l()),ee[V]=G),G}function h(M){const T=[],W=[],V=[];for(let Y=0;Y<n;Y++)T[Y]=0,W[Y]=0,V[Y]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:T,enabledAttributes:W,attributeDivisors:V,object:M,attributes:{},index:null}}function p(M,T,W,V){const Y=s.attributes,ee=T.attributes;let G=0;const Q=W.getAttributes();for(const I in Q)if(Q[I].location>=0){const Z=Y[I];let oe=ee[I];if(oe===void 0&&(I==="instanceMatrix"&&M.instanceMatrix&&(oe=M.instanceMatrix),I==="instanceColor"&&M.instanceColor&&(oe=M.instanceColor)),Z===void 0||Z.attribute!==oe||oe&&Z.data!==oe.data)return!0;G++}return s.attributesNum!==G||s.index!==V}function v(M,T,W,V){const Y={},ee=T.attributes;let G=0;const Q=W.getAttributes();for(const I in Q)if(Q[I].location>=0){let Z=ee[I];Z===void 0&&(I==="instanceMatrix"&&M.instanceMatrix&&(Z=M.instanceMatrix),I==="instanceColor"&&M.instanceColor&&(Z=M.instanceColor));const oe={};oe.attribute=Z,Z&&Z.data&&(oe.data=Z.data),Y[I]=oe,G++}s.attributes=Y,s.attributesNum=G,s.index=V}function S(){const M=s.newAttributes;for(let T=0,W=M.length;T<W;T++)M[T]=0}function m(M){d(M,0)}function d(M,T){const W=s.newAttributes,V=s.enabledAttributes,Y=s.attributeDivisors;W[M]=1,V[M]===0&&(t.enableVertexAttribArray(M),V[M]=1),Y[M]!==T&&(t.vertexAttribDivisor(M,T),Y[M]=T)}function g(){const M=s.newAttributes,T=s.enabledAttributes;for(let W=0,V=T.length;W<V;W++)T[W]!==M[W]&&(t.disableVertexAttribArray(W),T[W]=0)}function x(M,T,W,V,Y,ee,G){G===!0?t.vertexAttribIPointer(M,T,W,Y,ee):t.vertexAttribPointer(M,T,W,V,Y,ee)}function E(M,T,W,V){S();const Y=V.attributes,ee=W.getAttributes(),G=T.defaultAttributeValues;for(const Q in ee){const I=ee[Q];if(I.location>=0){let K=Y[Q];if(K===void 0&&(Q==="instanceMatrix"&&M.instanceMatrix&&(K=M.instanceMatrix),Q==="instanceColor"&&M.instanceColor&&(K=M.instanceColor)),K!==void 0){const Z=K.normalized,oe=K.itemSize,ye=e.get(K);if(ye===void 0)continue;const Fe=ye.buffer,$=ye.type,ie=ye.bytesPerElement,le=$===t.INT||$===t.UNSIGNED_INT||K.gpuType===Zf;if(K.isInterleavedBufferAttribute){const de=K.data,be=de.stride,Me=K.offset;if(de.isInstancedInterleavedBuffer){for(let Pe=0;Pe<I.locationSize;Pe++)d(I.location+Pe,de.meshPerAttribute);M.isInstancedMesh!==!0&&V._maxInstanceCount===void 0&&(V._maxInstanceCount=de.meshPerAttribute*de.count)}else for(let Pe=0;Pe<I.locationSize;Pe++)m(I.location+Pe);t.bindBuffer(t.ARRAY_BUFFER,Fe);for(let Pe=0;Pe<I.locationSize;Pe++)x(I.location+Pe,oe/I.locationSize,$,Z,be*ie,(Me+oe/I.locationSize*Pe)*ie,le)}else{if(K.isInstancedBufferAttribute){for(let de=0;de<I.locationSize;de++)d(I.location+de,K.meshPerAttribute);M.isInstancedMesh!==!0&&V._maxInstanceCount===void 0&&(V._maxInstanceCount=K.meshPerAttribute*K.count)}else for(let de=0;de<I.locationSize;de++)m(I.location+de);t.bindBuffer(t.ARRAY_BUFFER,Fe);for(let de=0;de<I.locationSize;de++)x(I.location+de,oe/I.locationSize,$,Z,oe*ie,oe/I.locationSize*de*ie,le)}}else if(G!==void 0){const Z=G[Q];if(Z!==void 0)switch(Z.length){case 2:t.vertexAttrib2fv(I.location,Z);break;case 3:t.vertexAttrib3fv(I.location,Z);break;case 4:t.vertexAttrib4fv(I.location,Z);break;default:t.vertexAttrib1fv(I.location,Z)}}}}g()}function L(){R();for(const M in i){const T=i[M];for(const W in T){const V=T[W];for(const Y in V)u(V[Y].object),delete V[Y];delete T[W]}delete i[M]}}function C(M){if(i[M.id]===void 0)return;const T=i[M.id];for(const W in T){const V=T[W];for(const Y in V)u(V[Y].object),delete V[Y];delete T[W]}delete i[M.id]}function A(M){for(const T in i){const W=i[T];if(W[M.id]===void 0)continue;const V=W[M.id];for(const Y in V)u(V[Y].object),delete V[Y];delete W[M.id]}}function R(){j(),o=!0,s!==r&&(s=r,c(s.object))}function j(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:R,resetDefaultState:j,dispose:L,releaseStatesOfGeometry:C,releaseStatesOfProgram:A,initAttributes:S,enableAttribute:m,disableUnusedAttributes:g}}function DE(t,e,n){let i;function r(c){i=c}function s(c,u){t.drawArrays(i,c,u),n.update(u,i,1)}function o(c,u,f){f!==0&&(t.drawArraysInstanced(i,c,u,f),n.update(u,i,f))}function a(c,u,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,u,0,f);let p=0;for(let v=0;v<f;v++)p+=u[v];n.update(p,i,1)}function l(c,u,f,h){if(f===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let v=0;v<c.length;v++)o(c[v],u[v],h[v]);else{p.multiDrawArraysInstancedWEBGL(i,c,0,u,0,h,0,f);let v=0;for(let S=0;S<f;S++)v+=u[S];for(let S=0;S<h.length;S++)n.update(v,i,h[S])}}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function UE(t,e,n,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const A=e.get("EXT_texture_filter_anisotropic");r=t.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(A){return!(A!==Wn&&i.convert(A)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(A){const R=A===Ko&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(A!==Si&&i.convert(A)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_TYPE)&&A!==pi&&!R)}function l(A){if(A==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=n.precision!==void 0?n.precision:"highp";const u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const f=n.logarithmicDepthBuffer===!0,h=n.reverseDepthBuffer===!0&&e.has("EXT_clip_control");if(h===!0){const A=e.get("EXT_clip_control");A.clipControlEXT(A.LOWER_LEFT_EXT,A.ZERO_TO_ONE_EXT)}const p=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),v=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),S=t.getParameter(t.MAX_TEXTURE_SIZE),m=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),d=t.getParameter(t.MAX_VERTEX_ATTRIBS),g=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),x=t.getParameter(t.MAX_VARYING_VECTORS),E=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),L=v>0,C=t.getParameter(t.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:f,reverseDepthBuffer:h,maxTextures:p,maxVertexTextures:v,maxTextureSize:S,maxCubemapSize:m,maxAttributes:d,maxVertexUniforms:g,maxVaryings:x,maxFragmentUniforms:E,vertexTextures:L,maxSamples:C}}function FE(t){const e=this;let n=null,i=0,r=!1,s=!1;const o=new hr,a=new Be,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,h){const p=f.length!==0||h||i!==0||r;return r=h,i=f.length,p},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(f,h){n=u(f,h,0)},this.setState=function(f,h,p){const v=f.clippingPlanes,S=f.clipIntersection,m=f.clipShadows,d=t.get(f);if(!r||v===null||v.length===0||s&&!m)s?u(null):c();else{const g=s?0:i,x=g*4;let E=d.clippingState||null;l.value=E,E=u(v,h,x,p);for(let L=0;L!==x;++L)E[L]=n[L];d.clippingState=E,this.numIntersection=S?this.numPlanes:0,this.numPlanes+=g}};function c(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(f,h,p,v){const S=f!==null?f.length:0;let m=null;if(S!==0){if(m=l.value,v!==!0||m===null){const d=p+S*4,g=h.matrixWorldInverse;a.getNormalMatrix(g),(m===null||m.length<d)&&(m=new Float32Array(d));for(let x=0,E=p;x!==S;++x,E+=4)o.copy(f[x]).applyMatrix4(g,a),o.normal.toArray(m,E),m[E+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=S,e.numIntersection=0,m}}function OE(t){let e=new WeakMap;function n(o,a){return a===Ed?o.mapping=Ps:a===wd&&(o.mapping=Ns),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===Ed||a===wd)if(e.has(o)){const l=e.get(o).texture;return n(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new qS(l.height);return c.fromEquirectangularTexture(t,o),e.set(o,c),o.addEventListener("dispose",r),n(c.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}class kE extends gv{constructor(e=-1,n=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,o=i+e,a=r+n,l=r-n;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}const ds=4,Qp=[.125,.215,.35,.446,.526,.582],vr=20,cu=new kE,Jp=new et;let uu=null,du=0,fu=0,hu=!1;const pr=(1+Math.sqrt(5))/2,Zr=1/pr,em=[new P(-pr,Zr,0),new P(pr,Zr,0),new P(-Zr,0,pr),new P(Zr,0,pr),new P(0,pr,-Zr),new P(0,pr,Zr),new P(-1,1,-1),new P(1,1,-1),new P(-1,1,1),new P(1,1,1)];class tm{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,i=.1,r=100){uu=this._renderer.getRenderTarget(),du=this._renderer.getActiveCubeFace(),fu=this._renderer.getActiveMipmapLevel(),hu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),n>0&&this._blur(s,0,0,n),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=rm(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=im(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(uu,du,fu),this._renderer.xr.enabled=hu,e.scissorTest=!1,Ha(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===Ps||e.mapping===Ns?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),uu=this._renderer.getRenderTarget(),du=this._renderer.getActiveCubeFace(),fu=this._renderer.getActiveMipmapLevel(),hu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:Vn,minFilter:Vn,generateMipmaps:!1,type:Ko,format:Wn,colorSpace:ir,depthBuffer:!1},r=nm(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=nm(e,n,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=zE(s)),this._blurMaterial=BE(s,e,n)}return r}_compileMaterial(e){const n=new it(this._lodPlanes[0],e);this._renderer.compile(n,cu)}_sceneToCubeUV(e,n,i,r){const a=new xn(90,1,n,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,f=u.autoClear,h=u.toneMapping;u.getClearColor(Jp),u.toneMapping=qi,u.autoClear=!1;const p=new _t({name:"PMREM.Background",side:fn,depthWrite:!1,depthTest:!1}),v=new it(new ea,p);let S=!1;const m=e.background;m?m.isColor&&(p.color.copy(m),e.background=null,S=!0):(p.color.copy(Jp),S=!0);for(let d=0;d<6;d++){const g=d%3;g===0?(a.up.set(0,l[d],0),a.lookAt(c[d],0,0)):g===1?(a.up.set(0,0,l[d]),a.lookAt(0,c[d],0)):(a.up.set(0,l[d],0),a.lookAt(0,0,c[d]));const x=this._cubeSize;Ha(r,g*x,d>2?x:0,x,x),u.setRenderTarget(r),S&&u.render(v,a),u.render(e,a)}v.geometry.dispose(),v.material.dispose(),u.toneMapping=h,u.autoClear=f,e.background=m}_textureToCubeUV(e,n){const i=this._renderer,r=e.mapping===Ps||e.mapping===Ns;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=rm()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=im());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new it(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;Ha(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(o,cu)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=em[(r-s-1)%em.length];this._blur(e,s-1,s,o,a)}n.autoClear=i}_blur(e,n,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,n,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,n,i,r,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,f=new it(this._lodPlanes[r],c),h=c.uniforms,p=this._sizeLods[i]-1,v=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*vr-1),S=s/v,m=isFinite(s)?1+Math.floor(u*S):vr;m>vr&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${vr}`);const d=[];let g=0;for(let A=0;A<vr;++A){const R=A/S,j=Math.exp(-R*R/2);d.push(j),A===0?g+=j:A<m&&(g+=2*j)}for(let A=0;A<d.length;A++)d[A]=d[A]/g;h.envMap.value=e.texture,h.samples.value=m,h.weights.value=d,h.latitudinal.value=o==="latitudinal",a&&(h.poleAxis.value=a);const{_lodMax:x}=this;h.dTheta.value=v,h.mipInt.value=x-i;const E=this._sizeLods[r],L=3*E*(r>x-ds?r-x+ds:0),C=4*(this._cubeSize-E);Ha(n,L,C,3*E,2*E),l.setRenderTarget(n),l.render(f,cu)}}function zE(t){const e=[],n=[],i=[];let r=t;const s=t-ds+1+Qp.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);n.push(a);let l=1/a;o>t-ds?l=Qp[o-t+ds-1]:o===0&&(l=0),i.push(l);const c=1/(a-2),u=-c,f=1+c,h=[u,u,f,u,f,f,u,u,f,f,u,f],p=6,v=6,S=3,m=2,d=1,g=new Float32Array(S*v*p),x=new Float32Array(m*v*p),E=new Float32Array(d*v*p);for(let C=0;C<p;C++){const A=C%3*2/3-1,R=C>2?0:-1,j=[A,R,0,A+2/3,R,0,A+2/3,R+1,0,A,R,0,A+2/3,R+1,0,A,R+1,0];g.set(j,S*v*C),x.set(h,m*v*C);const M=[C,C,C,C,C,C];E.set(M,d*v*C)}const L=new qe;L.setAttribute("position",new Xt(g,S)),L.setAttribute("uv",new Xt(x,m)),L.setAttribute("faceIndex",new Xt(E,d)),e.push(L),r>ds&&r--}return{lodPlanes:e,sizeLods:n,sigmas:i}}function nm(t,e,n){const i=new Ir(t,e,n);return i.texture.mapping=ac,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Ha(t,e,n,i,r){t.viewport.set(e,n,i,r),t.scissor.set(e,n,i,r)}function BE(t,e,n){const i=new Float32Array(vr),r=new P(0,1,0);return new Ji({name:"SphericalGaussianBlur",defines:{n:vr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:oh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:$i,depthTest:!1,depthWrite:!1})}function im(){return new Ji({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:oh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:$i,depthTest:!1,depthWrite:!1})}function rm(){return new Ji({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:oh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:$i,depthTest:!1,depthWrite:!1})}function oh(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function HE(t){let e=new WeakMap,n=null;function i(a){if(a&&a.isTexture){const l=a.mapping,c=l===Ed||l===wd,u=l===Ps||l===Ns;if(c||u){let f=e.get(a);const h=f!==void 0?f.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==h)return n===null&&(n=new tm(t)),f=c?n.fromEquirectangular(a,f):n.fromCubemap(a,f),f.texture.pmremVersion=a.pmremVersion,e.set(a,f),f.texture;if(f!==void 0)return f.texture;{const p=a.image;return c&&p&&p.height>0||u&&p&&r(p)?(n===null&&(n=new tm(t)),f=c?n.fromEquirectangular(a):n.fromCubemap(a),f.texture.pmremVersion=a.pmremVersion,e.set(a,f),a.addEventListener("dispose",s),f.texture):null}}}return a}function r(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:o}}function VE(t){const e={};function n(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=t.getExtension("WEBGL_depth_texture")||t.getExtension("MOZ_WEBGL_depth_texture")||t.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=t.getExtension("EXT_texture_filter_anisotropic")||t.getExtension("MOZ_EXT_texture_filter_anisotropic")||t.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=t.getExtension("WEBGL_compressed_texture_s3tc")||t.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=t.getExtension("WEBGL_compressed_texture_pvrtc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=t.getExtension(i)}return e[i]=r,r}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){const r=n(i);return r===null&&fl("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function GE(t,e,n,i){const r={},s=new WeakMap;function o(f){const h=f.target;h.index!==null&&e.remove(h.index);for(const v in h.attributes)e.remove(h.attributes[v]);for(const v in h.morphAttributes){const S=h.morphAttributes[v];for(let m=0,d=S.length;m<d;m++)e.remove(S[m])}h.removeEventListener("dispose",o),delete r[h.id];const p=s.get(h);p&&(e.remove(p),s.delete(h)),i.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,n.memory.geometries--}function a(f,h){return r[h.id]===!0||(h.addEventListener("dispose",o),r[h.id]=!0,n.memory.geometries++),h}function l(f){const h=f.attributes;for(const v in h)e.update(h[v],t.ARRAY_BUFFER);const p=f.morphAttributes;for(const v in p){const S=p[v];for(let m=0,d=S.length;m<d;m++)e.update(S[m],t.ARRAY_BUFFER)}}function c(f){const h=[],p=f.index,v=f.attributes.position;let S=0;if(p!==null){const g=p.array;S=p.version;for(let x=0,E=g.length;x<E;x+=3){const L=g[x+0],C=g[x+1],A=g[x+2];h.push(L,C,C,A,A,L)}}else if(v!==void 0){const g=v.array;S=v.version;for(let x=0,E=g.length/3-1;x<E;x+=3){const L=x+0,C=x+1,A=x+2;h.push(L,C,C,A,A,L)}}else return;const m=new(lv(h)?pv:hv)(h,1);m.version=S;const d=s.get(f);d&&e.remove(d),s.set(f,m)}function u(f){const h=s.get(f);if(h){const p=f.index;p!==null&&h.version<p.version&&c(f)}else c(f);return s.get(f)}return{get:a,update:l,getWireframeAttribute:u}}function WE(t,e,n){let i;function r(h){i=h}let s,o;function a(h){s=h.type,o=h.bytesPerElement}function l(h,p){t.drawElements(i,p,s,h*o),n.update(p,i,1)}function c(h,p,v){v!==0&&(t.drawElementsInstanced(i,p,s,h*o,v),n.update(p,i,v))}function u(h,p,v){if(v===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,p,0,s,h,0,v);let m=0;for(let d=0;d<v;d++)m+=p[d];n.update(m,i,1)}function f(h,p,v,S){if(v===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let d=0;d<h.length;d++)c(h[d]/o,p[d],S[d]);else{m.multiDrawElementsInstancedWEBGL(i,p,0,s,h,0,S,0,v);let d=0;for(let g=0;g<v;g++)d+=p[g];for(let g=0;g<S.length;g++)n.update(d,i,S[g])}}this.setMode=r,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=f}function jE(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(n.calls++,o){case t.TRIANGLES:n.triangles+=a*(s/3);break;case t.LINES:n.lines+=a*(s/2);break;case t.LINE_STRIP:n.lines+=a*(s-1);break;case t.LINE_LOOP:n.lines+=a*s;break;case t.POINTS:n.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:i}}function XE(t,e,n){const i=new WeakMap,r=new St;function s(o,a,l){const c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,f=u!==void 0?u.length:0;let h=i.get(a);if(h===void 0||h.count!==f){let M=function(){R.dispose(),i.delete(a),a.removeEventListener("dispose",M)};var p=M;h!==void 0&&h.texture.dispose();const v=a.morphAttributes.position!==void 0,S=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,d=a.morphAttributes.position||[],g=a.morphAttributes.normal||[],x=a.morphAttributes.color||[];let E=0;v===!0&&(E=1),S===!0&&(E=2),m===!0&&(E=3);let L=a.attributes.position.count*E,C=1;L>e.maxTextureSize&&(C=Math.ceil(L/e.maxTextureSize),L=e.maxTextureSize);const A=new Float32Array(L*C*4*f),R=new uv(A,L,C,f);R.type=pi,R.needsUpdate=!0;const j=E*4;for(let T=0;T<f;T++){const W=d[T],V=g[T],Y=x[T],ee=L*C*4*T;for(let G=0;G<W.count;G++){const Q=G*j;v===!0&&(r.fromBufferAttribute(W,G),A[ee+Q+0]=r.x,A[ee+Q+1]=r.y,A[ee+Q+2]=r.z,A[ee+Q+3]=0),S===!0&&(r.fromBufferAttribute(V,G),A[ee+Q+4]=r.x,A[ee+Q+5]=r.y,A[ee+Q+6]=r.z,A[ee+Q+7]=0),m===!0&&(r.fromBufferAttribute(Y,G),A[ee+Q+8]=r.x,A[ee+Q+9]=r.y,A[ee+Q+10]=r.z,A[ee+Q+11]=Y.itemSize===4?r.w:1)}}h={count:f,texture:R,size:new Te(L,C)},i.set(a,h),a.addEventListener("dispose",M)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(t,"morphTexture",o.morphTexture,n);else{let v=0;for(let m=0;m<c.length;m++)v+=c[m];const S=a.morphTargetsRelative?1:1-v;l.getUniforms().setValue(t,"morphTargetBaseInfluence",S),l.getUniforms().setValue(t,"morphTargetInfluences",c)}l.getUniforms().setValue(t,"morphTargetsTexture",h.texture,n),l.getUniforms().setValue(t,"morphTargetsTextureSize",h.size)}return{update:s}}function $E(t,e,n,i){let r=new WeakMap;function s(l){const c=i.render.frame,u=l.geometry,f=e.get(l,u);if(r.get(f)!==c&&(e.update(f),r.set(f,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==c&&(n.update(l.instanceMatrix,t.ARRAY_BUFFER),l.instanceColor!==null&&n.update(l.instanceColor,t.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const h=l.skeleton;r.get(h)!==c&&(h.update(),r.set(h,c))}return f}function o(){r=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),n.remove(c.instanceMatrix),c.instanceColor!==null&&n.remove(c.instanceColor)}return{update:s,dispose:o}}class yv extends Jt{constructor(e,n,i,r,s,o,a,l,c,u=_s){if(u!==_s&&u!==Is)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&u===_s&&(i=Lr),i===void 0&&u===Is&&(i=Ls),super(null,r,s,o,a,l,u,i,c),this.isDepthTexture=!0,this.image={width:e,height:n},this.magFilter=a!==void 0?a:Pn,this.minFilter=l!==void 0?l:Pn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}const Sv=new Jt,sm=new yv(1,1),Mv=new uv,Ev=new LS,wv=new vv,om=[],am=[],lm=new Float32Array(16),cm=new Float32Array(9),um=new Float32Array(4);function Hs(t,e,n){const i=t[0];if(i<=0||i>0)return t;const r=e*n;let s=om[r];if(s===void 0&&(s=new Float32Array(r),om[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=n,t[o].toArray(s,a)}return s}function Rt(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function Pt(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function cc(t,e){let n=am[e];n===void 0&&(n=new Int32Array(e),am[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function qE(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function YE(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Rt(n,e))return;t.uniform2fv(this.addr,e),Pt(n,e)}}function KE(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(Rt(n,e))return;t.uniform3fv(this.addr,e),Pt(n,e)}}function ZE(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Rt(n,e))return;t.uniform4fv(this.addr,e),Pt(n,e)}}function QE(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Rt(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),Pt(n,e)}else{if(Rt(n,i))return;um.set(i),t.uniformMatrix2fv(this.addr,!1,um),Pt(n,i)}}function JE(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Rt(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),Pt(n,e)}else{if(Rt(n,i))return;cm.set(i),t.uniformMatrix3fv(this.addr,!1,cm),Pt(n,i)}}function ew(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Rt(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),Pt(n,e)}else{if(Rt(n,i))return;lm.set(i),t.uniformMatrix4fv(this.addr,!1,lm),Pt(n,i)}}function tw(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function nw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Rt(n,e))return;t.uniform2iv(this.addr,e),Pt(n,e)}}function iw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Rt(n,e))return;t.uniform3iv(this.addr,e),Pt(n,e)}}function rw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Rt(n,e))return;t.uniform4iv(this.addr,e),Pt(n,e)}}function sw(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function ow(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Rt(n,e))return;t.uniform2uiv(this.addr,e),Pt(n,e)}}function aw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Rt(n,e))return;t.uniform3uiv(this.addr,e),Pt(n,e)}}function lw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Rt(n,e))return;t.uniform4uiv(this.addr,e),Pt(n,e)}}function cw(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r);let s;this.type===t.SAMPLER_2D_SHADOW?(sm.compareFunction=av,s=sm):s=Sv,n.setTexture2D(e||s,r)}function uw(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||Ev,r)}function dw(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTextureCube(e||wv,r)}function fw(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||Mv,r)}function hw(t){switch(t){case 5126:return qE;case 35664:return YE;case 35665:return KE;case 35666:return ZE;case 35674:return QE;case 35675:return JE;case 35676:return ew;case 5124:case 35670:return tw;case 35667:case 35671:return nw;case 35668:case 35672:return iw;case 35669:case 35673:return rw;case 5125:return sw;case 36294:return ow;case 36295:return aw;case 36296:return lw;case 35678:case 36198:case 36298:case 36306:case 35682:return cw;case 35679:case 36299:case 36307:return uw;case 35680:case 36300:case 36308:case 36293:return dw;case 36289:case 36303:case 36311:case 36292:return fw}}function pw(t,e){t.uniform1fv(this.addr,e)}function mw(t,e){const n=Hs(e,this.size,2);t.uniform2fv(this.addr,n)}function gw(t,e){const n=Hs(e,this.size,3);t.uniform3fv(this.addr,n)}function vw(t,e){const n=Hs(e,this.size,4);t.uniform4fv(this.addr,n)}function xw(t,e){const n=Hs(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function _w(t,e){const n=Hs(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function yw(t,e){const n=Hs(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function Sw(t,e){t.uniform1iv(this.addr,e)}function Mw(t,e){t.uniform2iv(this.addr,e)}function Ew(t,e){t.uniform3iv(this.addr,e)}function ww(t,e){t.uniform4iv(this.addr,e)}function Tw(t,e){t.uniform1uiv(this.addr,e)}function Aw(t,e){t.uniform2uiv(this.addr,e)}function bw(t,e){t.uniform3uiv(this.addr,e)}function Cw(t,e){t.uniform4uiv(this.addr,e)}function Rw(t,e,n){const i=this.cache,r=e.length,s=cc(n,r);Rt(i,s)||(t.uniform1iv(this.addr,s),Pt(i,s));for(let o=0;o!==r;++o)n.setTexture2D(e[o]||Sv,s[o])}function Pw(t,e,n){const i=this.cache,r=e.length,s=cc(n,r);Rt(i,s)||(t.uniform1iv(this.addr,s),Pt(i,s));for(let o=0;o!==r;++o)n.setTexture3D(e[o]||Ev,s[o])}function Nw(t,e,n){const i=this.cache,r=e.length,s=cc(n,r);Rt(i,s)||(t.uniform1iv(this.addr,s),Pt(i,s));for(let o=0;o!==r;++o)n.setTextureCube(e[o]||wv,s[o])}function Lw(t,e,n){const i=this.cache,r=e.length,s=cc(n,r);Rt(i,s)||(t.uniform1iv(this.addr,s),Pt(i,s));for(let o=0;o!==r;++o)n.setTexture2DArray(e[o]||Mv,s[o])}function Iw(t){switch(t){case 5126:return pw;case 35664:return mw;case 35665:return gw;case 35666:return vw;case 35674:return xw;case 35675:return _w;case 35676:return yw;case 5124:case 35670:return Sw;case 35667:case 35671:return Mw;case 35668:case 35672:return Ew;case 35669:case 35673:return ww;case 5125:return Tw;case 36294:return Aw;case 36295:return bw;case 36296:return Cw;case 35678:case 36198:case 36298:case 36306:case 35682:return Rw;case 35679:case 36299:case 36307:return Pw;case 35680:case 36300:case 36308:case 36293:return Nw;case 36289:case 36303:case 36311:case 36292:return Lw}}class Dw{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.setValue=hw(n.type)}}class Uw{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=Iw(n.type)}}class Fw{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,n[a.id],i)}}}const pu=/(\w+)(\])?(\[|\.)?/g;function dm(t,e){t.seq.push(e),t.map[e.id]=e}function Ow(t,e,n){const i=t.name,r=i.length;for(pu.lastIndex=0;;){const s=pu.exec(i),o=pu.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===r){dm(n,c===void 0?new Dw(a,t,e):new Uw(a,t,e));break}else{let f=n.map[a];f===void 0&&(f=new Fw(a),dm(n,f)),n=f}}}class hl{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(n,r),o=e.getUniformLocation(n,s.name);Ow(s,o,this)}}setValue(e,n,i,r){const s=this.map[n];s!==void 0&&s.setValue(e,i,r)}setOptional(e,n,i){const r=n[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,n,i,r){for(let s=0,o=n.length;s!==o;++s){const a=n[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,n){const i=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in n&&i.push(o)}return i}}function fm(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}const kw=37297;let zw=0;function Bw(t,e){const n=t.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,n.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${n[o]}`)}return i.join(`
`)}function Hw(t){const e=Je.getPrimaries(Je.workingColorSpace),n=Je.getPrimaries(t);let i;switch(e===n?i="":e===Hl&&n===Bl?i="LinearDisplayP3ToLinearSRGB":e===Bl&&n===Hl&&(i="LinearSRGBToLinearDisplayP3"),t){case ir:case lc:return[i,"LinearTransferOETF"];case Zn:case ih:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",t),[i,"LinearTransferOETF"]}}function hm(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),r=t.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return n.toUpperCase()+`

`+r+`

`+Bw(t.getShaderSource(e),o)}else return r}function Vw(t,e){const n=Hw(e);return`vec4 ${t}( vec4 value ) { return ${n[0]}( ${n[1]}( value ) ); }`}function Gw(t,e){let n;switch(e){case Gy:n="Linear";break;case Wy:n="Reinhard";break;case jy:n="Cineon";break;case Yg:n="ACESFilmic";break;case $y:n="AgX";break;case qy:n="Neutral";break;case Xy:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const Va=new P;function Ww(){Je.getLuminanceCoefficients(Va);const t=Va.x.toFixed(4),e=Va.y.toFixed(4),n=Va.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${t}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function jw(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",t.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(oo).join(`
`)}function Xw(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function $w(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=t.getActiveAttrib(e,r),o=s.name;let a=1;s.type===t.FLOAT_MAT2&&(a=2),s.type===t.FLOAT_MAT3&&(a=3),s.type===t.FLOAT_MAT4&&(a=4),n[o]={type:s.type,location:t.getAttribLocation(e,o),locationSize:a}}return n}function oo(t){return t!==""}function pm(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function mm(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const qw=/^[ \t]*#include +<([\w\d./]+)>/gm;function Jd(t){return t.replace(qw,Kw)}const Yw=new Map;function Kw(t,e){let n=ze[e];if(n===void 0){const i=Yw.get(e);if(i!==void 0)n=ze[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Jd(n)}const Zw=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function gm(t){return t.replace(Zw,Qw)}function Qw(t,e,n,i){let r="";for(let s=parseInt(e);s<parseInt(n);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function vm(t){let e=`precision ${t.precision} float;
	precision ${t.precision} int;
	precision ${t.precision} sampler2D;
	precision ${t.precision} samplerCube;
	precision ${t.precision} sampler3D;
	precision ${t.precision} sampler2DArray;
	precision ${t.precision} sampler2DShadow;
	precision ${t.precision} samplerCubeShadow;
	precision ${t.precision} sampler2DArrayShadow;
	precision ${t.precision} isampler2D;
	precision ${t.precision} isampler3D;
	precision ${t.precision} isamplerCube;
	precision ${t.precision} isampler2DArray;
	precision ${t.precision} usampler2D;
	precision ${t.precision} usampler3D;
	precision ${t.precision} usamplerCube;
	precision ${t.precision} usampler2DArray;
	`;return t.precision==="highp"?e+=`
#define HIGH_PRECISION`:t.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:t.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Jw(t){let e="SHADOWMAP_TYPE_BASIC";return t.shadowMapType===$g?e="SHADOWMAP_TYPE_PCF":t.shadowMapType===My?e="SHADOWMAP_TYPE_PCF_SOFT":t.shadowMapType===ci&&(e="SHADOWMAP_TYPE_VSM"),e}function eT(t){let e="ENVMAP_TYPE_CUBE";if(t.envMap)switch(t.envMapMode){case Ps:case Ns:e="ENVMAP_TYPE_CUBE";break;case ac:e="ENVMAP_TYPE_CUBE_UV";break}return e}function tT(t){let e="ENVMAP_MODE_REFLECTION";if(t.envMap)switch(t.envMapMode){case Ns:e="ENVMAP_MODE_REFRACTION";break}return e}function nT(t){let e="ENVMAP_BLENDING_NONE";if(t.envMap)switch(t.combine){case qg:e="ENVMAP_BLENDING_MULTIPLY";break;case Hy:e="ENVMAP_BLENDING_MIX";break;case Vy:e="ENVMAP_BLENDING_ADD";break}return e}function iT(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function rT(t,e,n,i){const r=t.getContext(),s=n.defines;let o=n.vertexShader,a=n.fragmentShader;const l=Jw(n),c=eT(n),u=tT(n),f=nT(n),h=iT(n),p=jw(n),v=Xw(s),S=r.createProgram();let m,d,g=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(m=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,v].filter(oo).join(`
`),m.length>0&&(m+=`
`),d=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,v].filter(oo).join(`
`),d.length>0&&(d+=`
`)):(m=[vm(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,v,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+u:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(oo).join(`
`),d=[vm(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,v,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.envMap?"#define "+u:"",n.envMap?"#define "+f:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor||n.batchingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==qi?"#define TONE_MAPPING":"",n.toneMapping!==qi?ze.tonemapping_pars_fragment:"",n.toneMapping!==qi?Gw("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",ze.colorspace_pars_fragment,Vw("linearToOutputTexel",n.outputColorSpace),Ww(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(oo).join(`
`)),o=Jd(o),o=pm(o,n),o=mm(o,n),a=Jd(a),a=pm(a,n),a=mm(a,n),o=gm(o),a=gm(a),n.isRawShaderMaterial!==!0&&(g=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,d=["#define varying in",n.glslVersion===Lp?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===Lp?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+d);const x=g+m+o,E=g+d+a,L=fm(r,r.VERTEX_SHADER,x),C=fm(r,r.FRAGMENT_SHADER,E);r.attachShader(S,L),r.attachShader(S,C),n.index0AttributeName!==void 0?r.bindAttribLocation(S,0,n.index0AttributeName):n.morphTargets===!0&&r.bindAttribLocation(S,0,"position"),r.linkProgram(S);function A(T){if(t.debug.checkShaderErrors){const W=r.getProgramInfoLog(S).trim(),V=r.getShaderInfoLog(L).trim(),Y=r.getShaderInfoLog(C).trim();let ee=!0,G=!0;if(r.getProgramParameter(S,r.LINK_STATUS)===!1)if(ee=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(r,S,L,C);else{const Q=hm(r,L,"vertex"),I=hm(r,C,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(S,r.VALIDATE_STATUS)+`

Material Name: `+T.name+`
Material Type: `+T.type+`

Program Info Log: `+W+`
`+Q+`
`+I)}else W!==""?console.warn("THREE.WebGLProgram: Program Info Log:",W):(V===""||Y==="")&&(G=!1);G&&(T.diagnostics={runnable:ee,programLog:W,vertexShader:{log:V,prefix:m},fragmentShader:{log:Y,prefix:d}})}r.deleteShader(L),r.deleteShader(C),R=new hl(r,S),j=$w(r,S)}let R;this.getUniforms=function(){return R===void 0&&A(this),R};let j;this.getAttributes=function(){return j===void 0&&A(this),j};let M=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=r.getProgramParameter(S,kw)),M},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(S),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=zw++,this.cacheKey=e,this.usedTimes=1,this.program=S,this.vertexShader=L,this.fragmentShader=C,this}let sT=0;class oT{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(n),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new aT(e),n.set(e,i)),i}}class aT{constructor(e){this.id=sT++,this.code=e,this.usedTimes=0}}function lT(t,e,n,i,r,s,o){const a=new dv,l=new oT,c=new Set,u=[],f=r.logarithmicDepthBuffer,h=r.reverseDepthBuffer,p=r.vertexTextures;let v=r.precision;const S={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function m(M){return c.add(M),M===0?"uv":`uv${M}`}function d(M,T,W,V,Y){const ee=V.fog,G=Y.geometry,Q=M.isMeshStandardMaterial?V.environment:null,I=(M.isMeshStandardMaterial?n:e).get(M.envMap||Q),K=I&&I.mapping===ac?I.image.height:null,Z=S[M.type];M.precision!==null&&(v=r.getMaxPrecision(M.precision),v!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",v,"instead."));const oe=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,ye=oe!==void 0?oe.length:0;let Fe=0;G.morphAttributes.position!==void 0&&(Fe=1),G.morphAttributes.normal!==void 0&&(Fe=2),G.morphAttributes.color!==void 0&&(Fe=3);let $,ie,le,de;if(Z){const sn=Qn[Z];$=sn.vertexShader,ie=sn.fragmentShader}else $=M.vertexShader,ie=M.fragmentShader,l.update(M),le=l.getVertexShaderID(M),de=l.getFragmentShaderID(M);const be=t.getRenderTarget(),Me=Y.isInstancedMesh===!0,Pe=Y.isBatchedMesh===!0,je=!!M.map,He=!!M.matcap,D=!!I,Ut=!!M.aoMap,Oe=!!M.lightMap,Ve=!!M.bumpMap,Ae=!!M.normalMap,Ke=!!M.displacementMap,Ce=!!M.emissiveMap,b=!!M.metalnessMap,y=!!M.roughnessMap,O=M.anisotropy>0,q=M.clearcoat>0,N=M.dispersion>0,U=M.iridescence>0,J=M.sheen>0,te=M.transmission>0,ce=O&&!!M.anisotropyMap,Ue=q&&!!M.clearcoatMap,se=q&&!!M.clearcoatNormalMap,pe=q&&!!M.clearcoatRoughnessMap,Ie=U&&!!M.iridescenceMap,De=U&&!!M.iridescenceThicknessMap,xe=J&&!!M.sheenColorMap,We=J&&!!M.sheenRoughnessMap,ke=!!M.specularMap,rt=!!M.specularColorMap,F=!!M.specularIntensityMap,me=te&&!!M.transmissionMap,X=te&&!!M.thicknessMap,ne=!!M.gradientMap,fe=!!M.alphaMap,ge=M.alphaTest>0,Xe=!!M.alphaHash,Mt=!!M.extensions;let rn=qi;M.toneMapped&&(be===null||be.isXRRenderTarget===!0)&&(rn=t.toneMapping);const Ye={shaderID:Z,shaderType:M.type,shaderName:M.name,vertexShader:$,fragmentShader:ie,defines:M.defines,customVertexShaderID:le,customFragmentShaderID:de,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:v,batching:Pe,batchingColor:Pe&&Y._colorsTexture!==null,instancing:Me,instancingColor:Me&&Y.instanceColor!==null,instancingMorph:Me&&Y.morphTexture!==null,supportsVertexTextures:p,outputColorSpace:be===null?t.outputColorSpace:be.isXRRenderTarget===!0?be.texture.colorSpace:ir,alphaToCoverage:!!M.alphaToCoverage,map:je,matcap:He,envMap:D,envMapMode:D&&I.mapping,envMapCubeUVHeight:K,aoMap:Ut,lightMap:Oe,bumpMap:Ve,normalMap:Ae,displacementMap:p&&Ke,emissiveMap:Ce,normalMapObjectSpace:Ae&&M.normalMapType===Jy,normalMapTangentSpace:Ae&&M.normalMapType===Qy,metalnessMap:b,roughnessMap:y,anisotropy:O,anisotropyMap:ce,clearcoat:q,clearcoatMap:Ue,clearcoatNormalMap:se,clearcoatRoughnessMap:pe,dispersion:N,iridescence:U,iridescenceMap:Ie,iridescenceThicknessMap:De,sheen:J,sheenColorMap:xe,sheenRoughnessMap:We,specularMap:ke,specularColorMap:rt,specularIntensityMap:F,transmission:te,transmissionMap:me,thicknessMap:X,gradientMap:ne,opaque:M.transparent===!1&&M.blending===xs&&M.alphaToCoverage===!1,alphaMap:fe,alphaTest:ge,alphaHash:Xe,combine:M.combine,mapUv:je&&m(M.map.channel),aoMapUv:Ut&&m(M.aoMap.channel),lightMapUv:Oe&&m(M.lightMap.channel),bumpMapUv:Ve&&m(M.bumpMap.channel),normalMapUv:Ae&&m(M.normalMap.channel),displacementMapUv:Ke&&m(M.displacementMap.channel),emissiveMapUv:Ce&&m(M.emissiveMap.channel),metalnessMapUv:b&&m(M.metalnessMap.channel),roughnessMapUv:y&&m(M.roughnessMap.channel),anisotropyMapUv:ce&&m(M.anisotropyMap.channel),clearcoatMapUv:Ue&&m(M.clearcoatMap.channel),clearcoatNormalMapUv:se&&m(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:pe&&m(M.clearcoatRoughnessMap.channel),iridescenceMapUv:Ie&&m(M.iridescenceMap.channel),iridescenceThicknessMapUv:De&&m(M.iridescenceThicknessMap.channel),sheenColorMapUv:xe&&m(M.sheenColorMap.channel),sheenRoughnessMapUv:We&&m(M.sheenRoughnessMap.channel),specularMapUv:ke&&m(M.specularMap.channel),specularColorMapUv:rt&&m(M.specularColorMap.channel),specularIntensityMapUv:F&&m(M.specularIntensityMap.channel),transmissionMapUv:me&&m(M.transmissionMap.channel),thicknessMapUv:X&&m(M.thicknessMap.channel),alphaMapUv:fe&&m(M.alphaMap.channel),vertexTangents:!!G.attributes.tangent&&(Ae||O),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,pointsUvs:Y.isPoints===!0&&!!G.attributes.uv&&(je||fe),fog:!!ee,useFog:M.fog===!0,fogExp2:!!ee&&ee.isFogExp2,flatShading:M.flatShading===!0,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:f,reverseDepthBuffer:h,skinning:Y.isSkinnedMesh===!0,morphTargets:G.morphAttributes.position!==void 0,morphNormals:G.morphAttributes.normal!==void 0,morphColors:G.morphAttributes.color!==void 0,morphTargetsCount:ye,morphTextureStride:Fe,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numLightProbes:T.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:M.dithering,shadowMapEnabled:t.shadowMap.enabled&&W.length>0,shadowMapType:t.shadowMap.type,toneMapping:rn,decodeVideoTexture:je&&M.map.isVideoTexture===!0&&Je.getTransfer(M.map.colorSpace)===lt,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===bt,flipSided:M.side===fn,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionClipCullDistance:Mt&&M.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Mt&&M.extensions.multiDraw===!0||Pe)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()};return Ye.vertexUv1s=c.has(1),Ye.vertexUv2s=c.has(2),Ye.vertexUv3s=c.has(3),c.clear(),Ye}function g(M){const T=[];if(M.shaderID?T.push(M.shaderID):(T.push(M.customVertexShaderID),T.push(M.customFragmentShaderID)),M.defines!==void 0)for(const W in M.defines)T.push(W),T.push(M.defines[W]);return M.isRawShaderMaterial===!1&&(x(T,M),E(T,M),T.push(t.outputColorSpace)),T.push(M.customProgramCacheKey),T.join()}function x(M,T){M.push(T.precision),M.push(T.outputColorSpace),M.push(T.envMapMode),M.push(T.envMapCubeUVHeight),M.push(T.mapUv),M.push(T.alphaMapUv),M.push(T.lightMapUv),M.push(T.aoMapUv),M.push(T.bumpMapUv),M.push(T.normalMapUv),M.push(T.displacementMapUv),M.push(T.emissiveMapUv),M.push(T.metalnessMapUv),M.push(T.roughnessMapUv),M.push(T.anisotropyMapUv),M.push(T.clearcoatMapUv),M.push(T.clearcoatNormalMapUv),M.push(T.clearcoatRoughnessMapUv),M.push(T.iridescenceMapUv),M.push(T.iridescenceThicknessMapUv),M.push(T.sheenColorMapUv),M.push(T.sheenRoughnessMapUv),M.push(T.specularMapUv),M.push(T.specularColorMapUv),M.push(T.specularIntensityMapUv),M.push(T.transmissionMapUv),M.push(T.thicknessMapUv),M.push(T.combine),M.push(T.fogExp2),M.push(T.sizeAttenuation),M.push(T.morphTargetsCount),M.push(T.morphAttributeCount),M.push(T.numDirLights),M.push(T.numPointLights),M.push(T.numSpotLights),M.push(T.numSpotLightMaps),M.push(T.numHemiLights),M.push(T.numRectAreaLights),M.push(T.numDirLightShadows),M.push(T.numPointLightShadows),M.push(T.numSpotLightShadows),M.push(T.numSpotLightShadowsWithMaps),M.push(T.numLightProbes),M.push(T.shadowMapType),M.push(T.toneMapping),M.push(T.numClippingPlanes),M.push(T.numClipIntersection),M.push(T.depthPacking)}function E(M,T){a.disableAll(),T.supportsVertexTextures&&a.enable(0),T.instancing&&a.enable(1),T.instancingColor&&a.enable(2),T.instancingMorph&&a.enable(3),T.matcap&&a.enable(4),T.envMap&&a.enable(5),T.normalMapObjectSpace&&a.enable(6),T.normalMapTangentSpace&&a.enable(7),T.clearcoat&&a.enable(8),T.iridescence&&a.enable(9),T.alphaTest&&a.enable(10),T.vertexColors&&a.enable(11),T.vertexAlphas&&a.enable(12),T.vertexUv1s&&a.enable(13),T.vertexUv2s&&a.enable(14),T.vertexUv3s&&a.enable(15),T.vertexTangents&&a.enable(16),T.anisotropy&&a.enable(17),T.alphaHash&&a.enable(18),T.batching&&a.enable(19),T.dispersion&&a.enable(20),T.batchingColor&&a.enable(21),M.push(a.mask),a.disableAll(),T.fog&&a.enable(0),T.useFog&&a.enable(1),T.flatShading&&a.enable(2),T.logarithmicDepthBuffer&&a.enable(3),T.reverseDepthBuffer&&a.enable(4),T.skinning&&a.enable(5),T.morphTargets&&a.enable(6),T.morphNormals&&a.enable(7),T.morphColors&&a.enable(8),T.premultipliedAlpha&&a.enable(9),T.shadowMapEnabled&&a.enable(10),T.doubleSided&&a.enable(11),T.flipSided&&a.enable(12),T.useDepthPacking&&a.enable(13),T.dithering&&a.enable(14),T.transmission&&a.enable(15),T.sheen&&a.enable(16),T.opaque&&a.enable(17),T.pointsUvs&&a.enable(18),T.decodeVideoTexture&&a.enable(19),T.alphaToCoverage&&a.enable(20),M.push(a.mask)}function L(M){const T=S[M.type];let W;if(T){const V=Qn[T];W=WS.clone(V.uniforms)}else W=M.uniforms;return W}function C(M,T){let W;for(let V=0,Y=u.length;V<Y;V++){const ee=u[V];if(ee.cacheKey===T){W=ee,++W.usedTimes;break}}return W===void 0&&(W=new rT(t,T,M,s),u.push(W)),W}function A(M){if(--M.usedTimes===0){const T=u.indexOf(M);u[T]=u[u.length-1],u.pop(),M.destroy()}}function R(M){l.remove(M)}function j(){l.dispose()}return{getParameters:d,getProgramCacheKey:g,getUniforms:L,acquireProgram:C,releaseProgram:A,releaseShaderCache:R,programs:u,dispose:j}}function cT(){let t=new WeakMap;function e(o){return t.has(o)}function n(o){let a=t.get(o);return a===void 0&&(a={},t.set(o,a)),a}function i(o){t.delete(o)}function r(o,a,l){t.get(o)[a]=l}function s(){t=new WeakMap}return{has:e,get:n,remove:i,update:r,dispose:s}}function uT(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.z!==e.z?t.z-e.z:t.id-e.id}function xm(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function _m(){const t=[];let e=0;const n=[],i=[],r=[];function s(){e=0,n.length=0,i.length=0,r.length=0}function o(f,h,p,v,S,m){let d=t[e];return d===void 0?(d={id:f.id,object:f,geometry:h,material:p,groupOrder:v,renderOrder:f.renderOrder,z:S,group:m},t[e]=d):(d.id=f.id,d.object=f,d.geometry=h,d.material=p,d.groupOrder=v,d.renderOrder=f.renderOrder,d.z=S,d.group=m),e++,d}function a(f,h,p,v,S,m){const d=o(f,h,p,v,S,m);p.transmission>0?i.push(d):p.transparent===!0?r.push(d):n.push(d)}function l(f,h,p,v,S,m){const d=o(f,h,p,v,S,m);p.transmission>0?i.unshift(d):p.transparent===!0?r.unshift(d):n.unshift(d)}function c(f,h){n.length>1&&n.sort(f||uT),i.length>1&&i.sort(h||xm),r.length>1&&r.sort(h||xm)}function u(){for(let f=e,h=t.length;f<h;f++){const p=t[f];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:n,transmissive:i,transparent:r,init:s,push:a,unshift:l,finish:u,sort:c}}function dT(){let t=new WeakMap;function e(i,r){const s=t.get(i);let o;return s===void 0?(o=new _m,t.set(i,[o])):r>=s.length?(o=new _m,s.push(o)):o=s[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}function fT(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new P,color:new et};break;case"SpotLight":n={position:new P,direction:new P,color:new et,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new P,color:new et,distance:0,decay:0};break;case"HemisphereLight":n={direction:new P,skyColor:new et,groundColor:new et};break;case"RectAreaLight":n={color:new et,position:new P,halfWidth:new P,halfHeight:new P};break}return t[e.id]=n,n}}}function hT(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Te};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Te};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Te,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let pT=0;function mT(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function gT(t){const e=new fT,n=hT(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new P);const r=new P,s=new ht,o=new ht;function a(c){let u=0,f=0,h=0;for(let j=0;j<9;j++)i.probe[j].set(0,0,0);let p=0,v=0,S=0,m=0,d=0,g=0,x=0,E=0,L=0,C=0,A=0;c.sort(mT);for(let j=0,M=c.length;j<M;j++){const T=c[j],W=T.color,V=T.intensity,Y=T.distance,ee=T.shadow&&T.shadow.map?T.shadow.map.texture:null;if(T.isAmbientLight)u+=W.r*V,f+=W.g*V,h+=W.b*V;else if(T.isLightProbe){for(let G=0;G<9;G++)i.probe[G].addScaledVector(T.sh.coefficients[G],V);A++}else if(T.isDirectionalLight){const G=e.get(T);if(G.color.copy(T.color).multiplyScalar(T.intensity),T.castShadow){const Q=T.shadow,I=n.get(T);I.shadowIntensity=Q.intensity,I.shadowBias=Q.bias,I.shadowNormalBias=Q.normalBias,I.shadowRadius=Q.radius,I.shadowMapSize=Q.mapSize,i.directionalShadow[p]=I,i.directionalShadowMap[p]=ee,i.directionalShadowMatrix[p]=T.shadow.matrix,g++}i.directional[p]=G,p++}else if(T.isSpotLight){const G=e.get(T);G.position.setFromMatrixPosition(T.matrixWorld),G.color.copy(W).multiplyScalar(V),G.distance=Y,G.coneCos=Math.cos(T.angle),G.penumbraCos=Math.cos(T.angle*(1-T.penumbra)),G.decay=T.decay,i.spot[S]=G;const Q=T.shadow;if(T.map&&(i.spotLightMap[L]=T.map,L++,Q.updateMatrices(T),T.castShadow&&C++),i.spotLightMatrix[S]=Q.matrix,T.castShadow){const I=n.get(T);I.shadowIntensity=Q.intensity,I.shadowBias=Q.bias,I.shadowNormalBias=Q.normalBias,I.shadowRadius=Q.radius,I.shadowMapSize=Q.mapSize,i.spotShadow[S]=I,i.spotShadowMap[S]=ee,E++}S++}else if(T.isRectAreaLight){const G=e.get(T);G.color.copy(W).multiplyScalar(V),G.halfWidth.set(T.width*.5,0,0),G.halfHeight.set(0,T.height*.5,0),i.rectArea[m]=G,m++}else if(T.isPointLight){const G=e.get(T);if(G.color.copy(T.color).multiplyScalar(T.intensity),G.distance=T.distance,G.decay=T.decay,T.castShadow){const Q=T.shadow,I=n.get(T);I.shadowIntensity=Q.intensity,I.shadowBias=Q.bias,I.shadowNormalBias=Q.normalBias,I.shadowRadius=Q.radius,I.shadowMapSize=Q.mapSize,I.shadowCameraNear=Q.camera.near,I.shadowCameraFar=Q.camera.far,i.pointShadow[v]=I,i.pointShadowMap[v]=ee,i.pointShadowMatrix[v]=T.shadow.matrix,x++}i.point[v]=G,v++}else if(T.isHemisphereLight){const G=e.get(T);G.skyColor.copy(T.color).multiplyScalar(V),G.groundColor.copy(T.groundColor).multiplyScalar(V),i.hemi[d]=G,d++}}m>0&&(t.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ue.LTC_FLOAT_1,i.rectAreaLTC2=ue.LTC_FLOAT_2):(i.rectAreaLTC1=ue.LTC_HALF_1,i.rectAreaLTC2=ue.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=f,i.ambient[2]=h;const R=i.hash;(R.directionalLength!==p||R.pointLength!==v||R.spotLength!==S||R.rectAreaLength!==m||R.hemiLength!==d||R.numDirectionalShadows!==g||R.numPointShadows!==x||R.numSpotShadows!==E||R.numSpotMaps!==L||R.numLightProbes!==A)&&(i.directional.length=p,i.spot.length=S,i.rectArea.length=m,i.point.length=v,i.hemi.length=d,i.directionalShadow.length=g,i.directionalShadowMap.length=g,i.pointShadow.length=x,i.pointShadowMap.length=x,i.spotShadow.length=E,i.spotShadowMap.length=E,i.directionalShadowMatrix.length=g,i.pointShadowMatrix.length=x,i.spotLightMatrix.length=E+L-C,i.spotLightMap.length=L,i.numSpotLightShadowsWithMaps=C,i.numLightProbes=A,R.directionalLength=p,R.pointLength=v,R.spotLength=S,R.rectAreaLength=m,R.hemiLength=d,R.numDirectionalShadows=g,R.numPointShadows=x,R.numSpotShadows=E,R.numSpotMaps=L,R.numLightProbes=A,i.version=pT++)}function l(c,u){let f=0,h=0,p=0,v=0,S=0;const m=u.matrixWorldInverse;for(let d=0,g=c.length;d<g;d++){const x=c[d];if(x.isDirectionalLight){const E=i.directional[f];E.direction.setFromMatrixPosition(x.matrixWorld),r.setFromMatrixPosition(x.target.matrixWorld),E.direction.sub(r),E.direction.transformDirection(m),f++}else if(x.isSpotLight){const E=i.spot[p];E.position.setFromMatrixPosition(x.matrixWorld),E.position.applyMatrix4(m),E.direction.setFromMatrixPosition(x.matrixWorld),r.setFromMatrixPosition(x.target.matrixWorld),E.direction.sub(r),E.direction.transformDirection(m),p++}else if(x.isRectAreaLight){const E=i.rectArea[v];E.position.setFromMatrixPosition(x.matrixWorld),E.position.applyMatrix4(m),o.identity(),s.copy(x.matrixWorld),s.premultiply(m),o.extractRotation(s),E.halfWidth.set(x.width*.5,0,0),E.halfHeight.set(0,x.height*.5,0),E.halfWidth.applyMatrix4(o),E.halfHeight.applyMatrix4(o),v++}else if(x.isPointLight){const E=i.point[h];E.position.setFromMatrixPosition(x.matrixWorld),E.position.applyMatrix4(m),h++}else if(x.isHemisphereLight){const E=i.hemi[S];E.direction.setFromMatrixPosition(x.matrixWorld),E.direction.transformDirection(m),S++}}}return{setup:a,setupView:l,state:i}}function ym(t){const e=new gT(t),n=[],i=[];function r(u){c.camera=u,n.length=0,i.length=0}function s(u){n.push(u)}function o(u){i.push(u)}function a(){e.setup(n)}function l(u){e.setupView(n,u)}const c={lightsArray:n,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:c,setupLights:a,setupLightsView:l,pushLight:s,pushShadow:o}}function vT(t){let e=new WeakMap;function n(r,s=0){const o=e.get(r);let a;return o===void 0?(a=new ym(t),e.set(r,[a])):s>=o.length?(a=new ym(t),o.push(a)):a=o[s],a}function i(){e=new WeakMap}return{get:n,dispose:i}}class xT extends Bs{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Ky,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class _T extends Bs{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const yT=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,ST=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function MT(t,e,n){let i=new xv;const r=new Te,s=new Te,o=new St,a=new xT({depthPacking:Zy}),l=new _T,c={},u=n.maxTextureSize,f={[Qi]:fn,[fn]:Qi,[bt]:bt},h=new Ji({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Te},radius:{value:4}},vertexShader:yT,fragmentShader:ST}),p=h.clone();p.defines.HORIZONTAL_PASS=1;const v=new qe;v.setAttribute("position",new Xt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const S=new it(v,h),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=$g;let d=this.type;this.render=function(C,A,R){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||C.length===0)return;const j=t.getRenderTarget(),M=t.getActiveCubeFace(),T=t.getActiveMipmapLevel(),W=t.state;W.setBlending($i),W.buffers.color.setClear(1,1,1,1),W.buffers.depth.setTest(!0),W.setScissorTest(!1);const V=d!==ci&&this.type===ci,Y=d===ci&&this.type!==ci;for(let ee=0,G=C.length;ee<G;ee++){const Q=C[ee],I=Q.shadow;if(I===void 0){console.warn("THREE.WebGLShadowMap:",Q,"has no shadow.");continue}if(I.autoUpdate===!1&&I.needsUpdate===!1)continue;r.copy(I.mapSize);const K=I.getFrameExtents();if(r.multiply(K),s.copy(I.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/K.x),r.x=s.x*K.x,I.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/K.y),r.y=s.y*K.y,I.mapSize.y=s.y)),I.map===null||V===!0||Y===!0){const oe=this.type!==ci?{minFilter:Pn,magFilter:Pn}:{};I.map!==null&&I.map.dispose(),I.map=new Ir(r.x,r.y,oe),I.map.texture.name=Q.name+".shadowMap",I.camera.updateProjectionMatrix()}t.setRenderTarget(I.map),t.clear();const Z=I.getViewportCount();for(let oe=0;oe<Z;oe++){const ye=I.getViewport(oe);o.set(s.x*ye.x,s.y*ye.y,s.x*ye.z,s.y*ye.w),W.viewport(o),I.updateMatrices(Q,oe),i=I.getFrustum(),E(A,R,I.camera,Q,this.type)}I.isPointLightShadow!==!0&&this.type===ci&&g(I,R),I.needsUpdate=!1}d=this.type,m.needsUpdate=!1,t.setRenderTarget(j,M,T)};function g(C,A){const R=e.update(S);h.defines.VSM_SAMPLES!==C.blurSamples&&(h.defines.VSM_SAMPLES=C.blurSamples,p.defines.VSM_SAMPLES=C.blurSamples,h.needsUpdate=!0,p.needsUpdate=!0),C.mapPass===null&&(C.mapPass=new Ir(r.x,r.y)),h.uniforms.shadow_pass.value=C.map.texture,h.uniforms.resolution.value=C.mapSize,h.uniforms.radius.value=C.radius,t.setRenderTarget(C.mapPass),t.clear(),t.renderBufferDirect(A,null,R,h,S,null),p.uniforms.shadow_pass.value=C.mapPass.texture,p.uniforms.resolution.value=C.mapSize,p.uniforms.radius.value=C.radius,t.setRenderTarget(C.map),t.clear(),t.renderBufferDirect(A,null,R,p,S,null)}function x(C,A,R,j){let M=null;const T=R.isPointLight===!0?C.customDistanceMaterial:C.customDepthMaterial;if(T!==void 0)M=T;else if(M=R.isPointLight===!0?l:a,t.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0){const W=M.uuid,V=A.uuid;let Y=c[W];Y===void 0&&(Y={},c[W]=Y);let ee=Y[V];ee===void 0&&(ee=M.clone(),Y[V]=ee,A.addEventListener("dispose",L)),M=ee}if(M.visible=A.visible,M.wireframe=A.wireframe,j===ci?M.side=A.shadowSide!==null?A.shadowSide:A.side:M.side=A.shadowSide!==null?A.shadowSide:f[A.side],M.alphaMap=A.alphaMap,M.alphaTest=A.alphaTest,M.map=A.map,M.clipShadows=A.clipShadows,M.clippingPlanes=A.clippingPlanes,M.clipIntersection=A.clipIntersection,M.displacementMap=A.displacementMap,M.displacementScale=A.displacementScale,M.displacementBias=A.displacementBias,M.wireframeLinewidth=A.wireframeLinewidth,M.linewidth=A.linewidth,R.isPointLight===!0&&M.isMeshDistanceMaterial===!0){const W=t.properties.get(M);W.light=R}return M}function E(C,A,R,j,M){if(C.visible===!1)return;if(C.layers.test(A.layers)&&(C.isMesh||C.isLine||C.isPoints)&&(C.castShadow||C.receiveShadow&&M===ci)&&(!C.frustumCulled||i.intersectsObject(C))){C.modelViewMatrix.multiplyMatrices(R.matrixWorldInverse,C.matrixWorld);const V=e.update(C),Y=C.material;if(Array.isArray(Y)){const ee=V.groups;for(let G=0,Q=ee.length;G<Q;G++){const I=ee[G],K=Y[I.materialIndex];if(K&&K.visible){const Z=x(C,K,j,M);C.onBeforeShadow(t,C,A,R,V,Z,I),t.renderBufferDirect(R,null,V,Z,C,I),C.onAfterShadow(t,C,A,R,V,Z,I)}}}else if(Y.visible){const ee=x(C,Y,j,M);C.onBeforeShadow(t,C,A,R,V,ee,null),t.renderBufferDirect(R,null,V,ee,C,null),C.onAfterShadow(t,C,A,R,V,ee,null)}}const W=C.children;for(let V=0,Y=W.length;V<Y;V++)E(W[V],A,R,j,M)}function L(C){C.target.removeEventListener("dispose",L);for(const R in c){const j=c[R],M=C.target.uuid;M in j&&(j[M].dispose(),delete j[M])}}}const ET={[gd]:vd,[xd]:Sd,[_d]:Md,[Rs]:yd,[vd]:gd,[Sd]:xd,[Md]:_d,[yd]:Rs};function wT(t){function e(){let F=!1;const me=new St;let X=null;const ne=new St(0,0,0,0);return{setMask:function(fe){X!==fe&&!F&&(t.colorMask(fe,fe,fe,fe),X=fe)},setLocked:function(fe){F=fe},setClear:function(fe,ge,Xe,Mt,rn){rn===!0&&(fe*=Mt,ge*=Mt,Xe*=Mt),me.set(fe,ge,Xe,Mt),ne.equals(me)===!1&&(t.clearColor(fe,ge,Xe,Mt),ne.copy(me))},reset:function(){F=!1,X=null,ne.set(-1,0,0,0)}}}function n(){let F=!1,me=!1,X=null,ne=null,fe=null;return{setReversed:function(ge){me=ge},setTest:function(ge){ge?le(t.DEPTH_TEST):de(t.DEPTH_TEST)},setMask:function(ge){X!==ge&&!F&&(t.depthMask(ge),X=ge)},setFunc:function(ge){if(me&&(ge=ET[ge]),ne!==ge){switch(ge){case gd:t.depthFunc(t.NEVER);break;case vd:t.depthFunc(t.ALWAYS);break;case xd:t.depthFunc(t.LESS);break;case Rs:t.depthFunc(t.LEQUAL);break;case _d:t.depthFunc(t.EQUAL);break;case yd:t.depthFunc(t.GEQUAL);break;case Sd:t.depthFunc(t.GREATER);break;case Md:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}ne=ge}},setLocked:function(ge){F=ge},setClear:function(ge){fe!==ge&&(t.clearDepth(ge),fe=ge)},reset:function(){F=!1,X=null,ne=null,fe=null}}}function i(){let F=!1,me=null,X=null,ne=null,fe=null,ge=null,Xe=null,Mt=null,rn=null;return{setTest:function(Ye){F||(Ye?le(t.STENCIL_TEST):de(t.STENCIL_TEST))},setMask:function(Ye){me!==Ye&&!F&&(t.stencilMask(Ye),me=Ye)},setFunc:function(Ye,sn,ii){(X!==Ye||ne!==sn||fe!==ii)&&(t.stencilFunc(Ye,sn,ii),X=Ye,ne=sn,fe=ii)},setOp:function(Ye,sn,ii){(ge!==Ye||Xe!==sn||Mt!==ii)&&(t.stencilOp(Ye,sn,ii),ge=Ye,Xe=sn,Mt=ii)},setLocked:function(Ye){F=Ye},setClear:function(Ye){rn!==Ye&&(t.clearStencil(Ye),rn=Ye)},reset:function(){F=!1,me=null,X=null,ne=null,fe=null,ge=null,Xe=null,Mt=null,rn=null}}}const r=new e,s=new n,o=new i,a=new WeakMap,l=new WeakMap;let c={},u={},f=new WeakMap,h=[],p=null,v=!1,S=null,m=null,d=null,g=null,x=null,E=null,L=null,C=new et(0,0,0),A=0,R=!1,j=null,M=null,T=null,W=null,V=null;const Y=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let ee=!1,G=0;const Q=t.getParameter(t.VERSION);Q.indexOf("WebGL")!==-1?(G=parseFloat(/^WebGL (\d)/.exec(Q)[1]),ee=G>=1):Q.indexOf("OpenGL ES")!==-1&&(G=parseFloat(/^OpenGL ES (\d)/.exec(Q)[1]),ee=G>=2);let I=null,K={};const Z=t.getParameter(t.SCISSOR_BOX),oe=t.getParameter(t.VIEWPORT),ye=new St().fromArray(Z),Fe=new St().fromArray(oe);function $(F,me,X,ne){const fe=new Uint8Array(4),ge=t.createTexture();t.bindTexture(F,ge),t.texParameteri(F,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(F,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let Xe=0;Xe<X;Xe++)F===t.TEXTURE_3D||F===t.TEXTURE_2D_ARRAY?t.texImage3D(me,0,t.RGBA,1,1,ne,0,t.RGBA,t.UNSIGNED_BYTE,fe):t.texImage2D(me+Xe,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,fe);return ge}const ie={};ie[t.TEXTURE_2D]=$(t.TEXTURE_2D,t.TEXTURE_2D,1),ie[t.TEXTURE_CUBE_MAP]=$(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),ie[t.TEXTURE_2D_ARRAY]=$(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),ie[t.TEXTURE_3D]=$(t.TEXTURE_3D,t.TEXTURE_3D,1,1),r.setClear(0,0,0,1),s.setClear(1),o.setClear(0),le(t.DEPTH_TEST),s.setFunc(Rs),Oe(!1),Ve(bp),le(t.CULL_FACE),D($i);function le(F){c[F]!==!0&&(t.enable(F),c[F]=!0)}function de(F){c[F]!==!1&&(t.disable(F),c[F]=!1)}function be(F,me){return u[F]!==me?(t.bindFramebuffer(F,me),u[F]=me,F===t.DRAW_FRAMEBUFFER&&(u[t.FRAMEBUFFER]=me),F===t.FRAMEBUFFER&&(u[t.DRAW_FRAMEBUFFER]=me),!0):!1}function Me(F,me){let X=h,ne=!1;if(F){X=f.get(me),X===void 0&&(X=[],f.set(me,X));const fe=F.textures;if(X.length!==fe.length||X[0]!==t.COLOR_ATTACHMENT0){for(let ge=0,Xe=fe.length;ge<Xe;ge++)X[ge]=t.COLOR_ATTACHMENT0+ge;X.length=fe.length,ne=!0}}else X[0]!==t.BACK&&(X[0]=t.BACK,ne=!0);ne&&t.drawBuffers(X)}function Pe(F){return p!==F?(t.useProgram(F),p=F,!0):!1}const je={[gr]:t.FUNC_ADD,[wy]:t.FUNC_SUBTRACT,[Ty]:t.FUNC_REVERSE_SUBTRACT};je[Ay]=t.MIN,je[by]=t.MAX;const He={[Cy]:t.ZERO,[Ry]:t.ONE,[Py]:t.SRC_COLOR,[pd]:t.SRC_ALPHA,[Fy]:t.SRC_ALPHA_SATURATE,[Dy]:t.DST_COLOR,[Ly]:t.DST_ALPHA,[Ny]:t.ONE_MINUS_SRC_COLOR,[md]:t.ONE_MINUS_SRC_ALPHA,[Uy]:t.ONE_MINUS_DST_COLOR,[Iy]:t.ONE_MINUS_DST_ALPHA,[Oy]:t.CONSTANT_COLOR,[ky]:t.ONE_MINUS_CONSTANT_COLOR,[zy]:t.CONSTANT_ALPHA,[By]:t.ONE_MINUS_CONSTANT_ALPHA};function D(F,me,X,ne,fe,ge,Xe,Mt,rn,Ye){if(F===$i){v===!0&&(de(t.BLEND),v=!1);return}if(v===!1&&(le(t.BLEND),v=!0),F!==Ey){if(F!==S||Ye!==R){if((m!==gr||x!==gr)&&(t.blendEquation(t.FUNC_ADD),m=gr,x=gr),Ye)switch(F){case xs:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case mr:t.blendFunc(t.ONE,t.ONE);break;case Cp:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case Rp:t.blendFuncSeparate(t.ZERO,t.SRC_COLOR,t.ZERO,t.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",F);break}else switch(F){case xs:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case mr:t.blendFunc(t.SRC_ALPHA,t.ONE);break;case Cp:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case Rp:t.blendFunc(t.ZERO,t.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",F);break}d=null,g=null,E=null,L=null,C.set(0,0,0),A=0,S=F,R=Ye}return}fe=fe||me,ge=ge||X,Xe=Xe||ne,(me!==m||fe!==x)&&(t.blendEquationSeparate(je[me],je[fe]),m=me,x=fe),(X!==d||ne!==g||ge!==E||Xe!==L)&&(t.blendFuncSeparate(He[X],He[ne],He[ge],He[Xe]),d=X,g=ne,E=ge,L=Xe),(Mt.equals(C)===!1||rn!==A)&&(t.blendColor(Mt.r,Mt.g,Mt.b,rn),C.copy(Mt),A=rn),S=F,R=!1}function Ut(F,me){F.side===bt?de(t.CULL_FACE):le(t.CULL_FACE);let X=F.side===fn;me&&(X=!X),Oe(X),F.blending===xs&&F.transparent===!1?D($i):D(F.blending,F.blendEquation,F.blendSrc,F.blendDst,F.blendEquationAlpha,F.blendSrcAlpha,F.blendDstAlpha,F.blendColor,F.blendAlpha,F.premultipliedAlpha),s.setFunc(F.depthFunc),s.setTest(F.depthTest),s.setMask(F.depthWrite),r.setMask(F.colorWrite);const ne=F.stencilWrite;o.setTest(ne),ne&&(o.setMask(F.stencilWriteMask),o.setFunc(F.stencilFunc,F.stencilRef,F.stencilFuncMask),o.setOp(F.stencilFail,F.stencilZFail,F.stencilZPass)),Ke(F.polygonOffset,F.polygonOffsetFactor,F.polygonOffsetUnits),F.alphaToCoverage===!0?le(t.SAMPLE_ALPHA_TO_COVERAGE):de(t.SAMPLE_ALPHA_TO_COVERAGE)}function Oe(F){j!==F&&(F?t.frontFace(t.CW):t.frontFace(t.CCW),j=F)}function Ve(F){F!==yy?(le(t.CULL_FACE),F!==M&&(F===bp?t.cullFace(t.BACK):F===Sy?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):de(t.CULL_FACE),M=F}function Ae(F){F!==T&&(ee&&t.lineWidth(F),T=F)}function Ke(F,me,X){F?(le(t.POLYGON_OFFSET_FILL),(W!==me||V!==X)&&(t.polygonOffset(me,X),W=me,V=X)):de(t.POLYGON_OFFSET_FILL)}function Ce(F){F?le(t.SCISSOR_TEST):de(t.SCISSOR_TEST)}function b(F){F===void 0&&(F=t.TEXTURE0+Y-1),I!==F&&(t.activeTexture(F),I=F)}function y(F,me,X){X===void 0&&(I===null?X=t.TEXTURE0+Y-1:X=I);let ne=K[X];ne===void 0&&(ne={type:void 0,texture:void 0},K[X]=ne),(ne.type!==F||ne.texture!==me)&&(I!==X&&(t.activeTexture(X),I=X),t.bindTexture(F,me||ie[F]),ne.type=F,ne.texture=me)}function O(){const F=K[I];F!==void 0&&F.type!==void 0&&(t.bindTexture(F.type,null),F.type=void 0,F.texture=void 0)}function q(){try{t.compressedTexImage2D.apply(t,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function N(){try{t.compressedTexImage3D.apply(t,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function U(){try{t.texSubImage2D.apply(t,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function J(){try{t.texSubImage3D.apply(t,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function te(){try{t.compressedTexSubImage2D.apply(t,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function ce(){try{t.compressedTexSubImage3D.apply(t,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Ue(){try{t.texStorage2D.apply(t,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function se(){try{t.texStorage3D.apply(t,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function pe(){try{t.texImage2D.apply(t,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Ie(){try{t.texImage3D.apply(t,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function De(F){ye.equals(F)===!1&&(t.scissor(F.x,F.y,F.z,F.w),ye.copy(F))}function xe(F){Fe.equals(F)===!1&&(t.viewport(F.x,F.y,F.z,F.w),Fe.copy(F))}function We(F,me){let X=l.get(me);X===void 0&&(X=new WeakMap,l.set(me,X));let ne=X.get(F);ne===void 0&&(ne=t.getUniformBlockIndex(me,F.name),X.set(F,ne))}function ke(F,me){const ne=l.get(me).get(F);a.get(me)!==ne&&(t.uniformBlockBinding(me,ne,F.__bindingPointIndex),a.set(me,ne))}function rt(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),c={},I=null,K={},u={},f=new WeakMap,h=[],p=null,v=!1,S=null,m=null,d=null,g=null,x=null,E=null,L=null,C=new et(0,0,0),A=0,R=!1,j=null,M=null,T=null,W=null,V=null,ye.set(0,0,t.canvas.width,t.canvas.height),Fe.set(0,0,t.canvas.width,t.canvas.height),r.reset(),s.reset(),o.reset()}return{buffers:{color:r,depth:s,stencil:o},enable:le,disable:de,bindFramebuffer:be,drawBuffers:Me,useProgram:Pe,setBlending:D,setMaterial:Ut,setFlipSided:Oe,setCullFace:Ve,setLineWidth:Ae,setPolygonOffset:Ke,setScissorTest:Ce,activeTexture:b,bindTexture:y,unbindTexture:O,compressedTexImage2D:q,compressedTexImage3D:N,texImage2D:pe,texImage3D:Ie,updateUBOMapping:We,uniformBlockBinding:ke,texStorage2D:Ue,texStorage3D:se,texSubImage2D:U,texSubImage3D:J,compressedTexSubImage2D:te,compressedTexSubImage3D:ce,scissor:De,viewport:xe,reset:rt}}function Sm(t,e,n,i){const r=TT(i);switch(n){case ev:return t*e;case nv:return t*e;case iv:return t*e*2;case rv:return t*e/r.components*r.byteLength;case eh:return t*e/r.components*r.byteLength;case sv:return t*e*2/r.components*r.byteLength;case th:return t*e*2/r.components*r.byteLength;case tv:return t*e*3/r.components*r.byteLength;case Wn:return t*e*4/r.components*r.byteLength;case nh:return t*e*4/r.components*r.byteLength;case al:case ll:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case cl:case ul:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Cd:case Pd:return Math.max(t,16)*Math.max(e,8)/4;case bd:case Rd:return Math.max(t,8)*Math.max(e,8)/2;case Nd:case Ld:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case Id:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Dd:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Ud:return Math.floor((t+4)/5)*Math.floor((e+3)/4)*16;case Fd:return Math.floor((t+4)/5)*Math.floor((e+4)/5)*16;case Od:return Math.floor((t+5)/6)*Math.floor((e+4)/5)*16;case kd:return Math.floor((t+5)/6)*Math.floor((e+5)/6)*16;case zd:return Math.floor((t+7)/8)*Math.floor((e+4)/5)*16;case Bd:return Math.floor((t+7)/8)*Math.floor((e+5)/6)*16;case Hd:return Math.floor((t+7)/8)*Math.floor((e+7)/8)*16;case Vd:return Math.floor((t+9)/10)*Math.floor((e+4)/5)*16;case Gd:return Math.floor((t+9)/10)*Math.floor((e+5)/6)*16;case Wd:return Math.floor((t+9)/10)*Math.floor((e+7)/8)*16;case jd:return Math.floor((t+9)/10)*Math.floor((e+9)/10)*16;case Xd:return Math.floor((t+11)/12)*Math.floor((e+9)/10)*16;case $d:return Math.floor((t+11)/12)*Math.floor((e+11)/12)*16;case dl:case qd:case Yd:return Math.ceil(t/4)*Math.ceil(e/4)*16;case ov:case Kd:return Math.ceil(t/4)*Math.ceil(e/4)*8;case Zd:case Qd:return Math.ceil(t/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function TT(t){switch(t){case Si:case Zg:return{byteLength:1,components:1};case Vo:case Qg:case Ko:return{byteLength:2,components:1};case Qf:case Jf:return{byteLength:2,components:4};case Lr:case Zf:case pi:return{byteLength:4,components:1};case Jg:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${t}.`)}function AT(t,e,n,i,r,s,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Te,u=new WeakMap;let f;const h=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function v(b,y){return p?new OffscreenCanvas(b,y):Wo("canvas")}function S(b,y,O){let q=1;const N=Ce(b);if((N.width>O||N.height>O)&&(q=O/Math.max(N.width,N.height)),q<1)if(typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&b instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&b instanceof ImageBitmap||typeof VideoFrame<"u"&&b instanceof VideoFrame){const U=Math.floor(q*N.width),J=Math.floor(q*N.height);f===void 0&&(f=v(U,J));const te=y?v(U,J):f;return te.width=U,te.height=J,te.getContext("2d").drawImage(b,0,0,U,J),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+N.width+"x"+N.height+") to ("+U+"x"+J+")."),te}else return"data"in b&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+N.width+"x"+N.height+")."),b;return b}function m(b){return b.generateMipmaps&&b.minFilter!==Pn&&b.minFilter!==Vn}function d(b){t.generateMipmap(b)}function g(b,y,O,q,N=!1){if(b!==null){if(t[b]!==void 0)return t[b];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+b+"'")}let U=y;if(y===t.RED&&(O===t.FLOAT&&(U=t.R32F),O===t.HALF_FLOAT&&(U=t.R16F),O===t.UNSIGNED_BYTE&&(U=t.R8)),y===t.RED_INTEGER&&(O===t.UNSIGNED_BYTE&&(U=t.R8UI),O===t.UNSIGNED_SHORT&&(U=t.R16UI),O===t.UNSIGNED_INT&&(U=t.R32UI),O===t.BYTE&&(U=t.R8I),O===t.SHORT&&(U=t.R16I),O===t.INT&&(U=t.R32I)),y===t.RG&&(O===t.FLOAT&&(U=t.RG32F),O===t.HALF_FLOAT&&(U=t.RG16F),O===t.UNSIGNED_BYTE&&(U=t.RG8)),y===t.RG_INTEGER&&(O===t.UNSIGNED_BYTE&&(U=t.RG8UI),O===t.UNSIGNED_SHORT&&(U=t.RG16UI),O===t.UNSIGNED_INT&&(U=t.RG32UI),O===t.BYTE&&(U=t.RG8I),O===t.SHORT&&(U=t.RG16I),O===t.INT&&(U=t.RG32I)),y===t.RGB_INTEGER&&(O===t.UNSIGNED_BYTE&&(U=t.RGB8UI),O===t.UNSIGNED_SHORT&&(U=t.RGB16UI),O===t.UNSIGNED_INT&&(U=t.RGB32UI),O===t.BYTE&&(U=t.RGB8I),O===t.SHORT&&(U=t.RGB16I),O===t.INT&&(U=t.RGB32I)),y===t.RGBA_INTEGER&&(O===t.UNSIGNED_BYTE&&(U=t.RGBA8UI),O===t.UNSIGNED_SHORT&&(U=t.RGBA16UI),O===t.UNSIGNED_INT&&(U=t.RGBA32UI),O===t.BYTE&&(U=t.RGBA8I),O===t.SHORT&&(U=t.RGBA16I),O===t.INT&&(U=t.RGBA32I)),y===t.RGB&&O===t.UNSIGNED_INT_5_9_9_9_REV&&(U=t.RGB9_E5),y===t.RGBA){const J=N?zl:Je.getTransfer(q);O===t.FLOAT&&(U=t.RGBA32F),O===t.HALF_FLOAT&&(U=t.RGBA16F),O===t.UNSIGNED_BYTE&&(U=J===lt?t.SRGB8_ALPHA8:t.RGBA8),O===t.UNSIGNED_SHORT_4_4_4_4&&(U=t.RGBA4),O===t.UNSIGNED_SHORT_5_5_5_1&&(U=t.RGB5_A1)}return(U===t.R16F||U===t.R32F||U===t.RG16F||U===t.RG32F||U===t.RGBA16F||U===t.RGBA32F)&&e.get("EXT_color_buffer_float"),U}function x(b,y){let O;return b?y===null||y===Lr||y===Ls?O=t.DEPTH24_STENCIL8:y===pi?O=t.DEPTH32F_STENCIL8:y===Vo&&(O=t.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):y===null||y===Lr||y===Ls?O=t.DEPTH_COMPONENT24:y===pi?O=t.DEPTH_COMPONENT32F:y===Vo&&(O=t.DEPTH_COMPONENT16),O}function E(b,y){return m(b)===!0||b.isFramebufferTexture&&b.minFilter!==Pn&&b.minFilter!==Vn?Math.log2(Math.max(y.width,y.height))+1:b.mipmaps!==void 0&&b.mipmaps.length>0?b.mipmaps.length:b.isCompressedTexture&&Array.isArray(b.image)?y.mipmaps.length:1}function L(b){const y=b.target;y.removeEventListener("dispose",L),A(y),y.isVideoTexture&&u.delete(y)}function C(b){const y=b.target;y.removeEventListener("dispose",C),j(y)}function A(b){const y=i.get(b);if(y.__webglInit===void 0)return;const O=b.source,q=h.get(O);if(q){const N=q[y.__cacheKey];N.usedTimes--,N.usedTimes===0&&R(b),Object.keys(q).length===0&&h.delete(O)}i.remove(b)}function R(b){const y=i.get(b);t.deleteTexture(y.__webglTexture);const O=b.source,q=h.get(O);delete q[y.__cacheKey],o.memory.textures--}function j(b){const y=i.get(b);if(b.depthTexture&&b.depthTexture.dispose(),b.isWebGLCubeRenderTarget)for(let q=0;q<6;q++){if(Array.isArray(y.__webglFramebuffer[q]))for(let N=0;N<y.__webglFramebuffer[q].length;N++)t.deleteFramebuffer(y.__webglFramebuffer[q][N]);else t.deleteFramebuffer(y.__webglFramebuffer[q]);y.__webglDepthbuffer&&t.deleteRenderbuffer(y.__webglDepthbuffer[q])}else{if(Array.isArray(y.__webglFramebuffer))for(let q=0;q<y.__webglFramebuffer.length;q++)t.deleteFramebuffer(y.__webglFramebuffer[q]);else t.deleteFramebuffer(y.__webglFramebuffer);if(y.__webglDepthbuffer&&t.deleteRenderbuffer(y.__webglDepthbuffer),y.__webglMultisampledFramebuffer&&t.deleteFramebuffer(y.__webglMultisampledFramebuffer),y.__webglColorRenderbuffer)for(let q=0;q<y.__webglColorRenderbuffer.length;q++)y.__webglColorRenderbuffer[q]&&t.deleteRenderbuffer(y.__webglColorRenderbuffer[q]);y.__webglDepthRenderbuffer&&t.deleteRenderbuffer(y.__webglDepthRenderbuffer)}const O=b.textures;for(let q=0,N=O.length;q<N;q++){const U=i.get(O[q]);U.__webglTexture&&(t.deleteTexture(U.__webglTexture),o.memory.textures--),i.remove(O[q])}i.remove(b)}let M=0;function T(){M=0}function W(){const b=M;return b>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+b+" texture units while this GPU supports only "+r.maxTextures),M+=1,b}function V(b){const y=[];return y.push(b.wrapS),y.push(b.wrapT),y.push(b.wrapR||0),y.push(b.magFilter),y.push(b.minFilter),y.push(b.anisotropy),y.push(b.internalFormat),y.push(b.format),y.push(b.type),y.push(b.generateMipmaps),y.push(b.premultiplyAlpha),y.push(b.flipY),y.push(b.unpackAlignment),y.push(b.colorSpace),y.join()}function Y(b,y){const O=i.get(b);if(b.isVideoTexture&&Ae(b),b.isRenderTargetTexture===!1&&b.version>0&&O.__version!==b.version){const q=b.image;if(q===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(q.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Fe(O,b,y);return}}n.bindTexture(t.TEXTURE_2D,O.__webglTexture,t.TEXTURE0+y)}function ee(b,y){const O=i.get(b);if(b.version>0&&O.__version!==b.version){Fe(O,b,y);return}n.bindTexture(t.TEXTURE_2D_ARRAY,O.__webglTexture,t.TEXTURE0+y)}function G(b,y){const O=i.get(b);if(b.version>0&&O.__version!==b.version){Fe(O,b,y);return}n.bindTexture(t.TEXTURE_3D,O.__webglTexture,t.TEXTURE0+y)}function Q(b,y){const O=i.get(b);if(b.version>0&&O.__version!==b.version){$(O,b,y);return}n.bindTexture(t.TEXTURE_CUBE_MAP,O.__webglTexture,t.TEXTURE0+y)}const I={[Td]:t.REPEAT,[Sr]:t.CLAMP_TO_EDGE,[Ad]:t.MIRRORED_REPEAT},K={[Pn]:t.NEAREST,[Yy]:t.NEAREST_MIPMAP_NEAREST,[Ma]:t.NEAREST_MIPMAP_LINEAR,[Vn]:t.LINEAR,[Hc]:t.LINEAR_MIPMAP_NEAREST,[Mr]:t.LINEAR_MIPMAP_LINEAR},Z={[eS]:t.NEVER,[oS]:t.ALWAYS,[tS]:t.LESS,[av]:t.LEQUAL,[nS]:t.EQUAL,[sS]:t.GEQUAL,[iS]:t.GREATER,[rS]:t.NOTEQUAL};function oe(b,y){if(y.type===pi&&e.has("OES_texture_float_linear")===!1&&(y.magFilter===Vn||y.magFilter===Hc||y.magFilter===Ma||y.magFilter===Mr||y.minFilter===Vn||y.minFilter===Hc||y.minFilter===Ma||y.minFilter===Mr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),t.texParameteri(b,t.TEXTURE_WRAP_S,I[y.wrapS]),t.texParameteri(b,t.TEXTURE_WRAP_T,I[y.wrapT]),(b===t.TEXTURE_3D||b===t.TEXTURE_2D_ARRAY)&&t.texParameteri(b,t.TEXTURE_WRAP_R,I[y.wrapR]),t.texParameteri(b,t.TEXTURE_MAG_FILTER,K[y.magFilter]),t.texParameteri(b,t.TEXTURE_MIN_FILTER,K[y.minFilter]),y.compareFunction&&(t.texParameteri(b,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(b,t.TEXTURE_COMPARE_FUNC,Z[y.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(y.magFilter===Pn||y.minFilter!==Ma&&y.minFilter!==Mr||y.type===pi&&e.has("OES_texture_float_linear")===!1)return;if(y.anisotropy>1||i.get(y).__currentAnisotropy){const O=e.get("EXT_texture_filter_anisotropic");t.texParameterf(b,O.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(y.anisotropy,r.getMaxAnisotropy())),i.get(y).__currentAnisotropy=y.anisotropy}}}function ye(b,y){let O=!1;b.__webglInit===void 0&&(b.__webglInit=!0,y.addEventListener("dispose",L));const q=y.source;let N=h.get(q);N===void 0&&(N={},h.set(q,N));const U=V(y);if(U!==b.__cacheKey){N[U]===void 0&&(N[U]={texture:t.createTexture(),usedTimes:0},o.memory.textures++,O=!0),N[U].usedTimes++;const J=N[b.__cacheKey];J!==void 0&&(N[b.__cacheKey].usedTimes--,J.usedTimes===0&&R(y)),b.__cacheKey=U,b.__webglTexture=N[U].texture}return O}function Fe(b,y,O){let q=t.TEXTURE_2D;(y.isDataArrayTexture||y.isCompressedArrayTexture)&&(q=t.TEXTURE_2D_ARRAY),y.isData3DTexture&&(q=t.TEXTURE_3D);const N=ye(b,y),U=y.source;n.bindTexture(q,b.__webglTexture,t.TEXTURE0+O);const J=i.get(U);if(U.version!==J.__version||N===!0){n.activeTexture(t.TEXTURE0+O);const te=Je.getPrimaries(Je.workingColorSpace),ce=y.colorSpace===Fi?null:Je.getPrimaries(y.colorSpace),Ue=y.colorSpace===Fi||te===ce?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,y.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,y.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ue);let se=S(y.image,!1,r.maxTextureSize);se=Ke(y,se);const pe=s.convert(y.format,y.colorSpace),Ie=s.convert(y.type);let De=g(y.internalFormat,pe,Ie,y.colorSpace,y.isVideoTexture);oe(q,y);let xe;const We=y.mipmaps,ke=y.isVideoTexture!==!0,rt=J.__version===void 0||N===!0,F=U.dataReady,me=E(y,se);if(y.isDepthTexture)De=x(y.format===Is,y.type),rt&&(ke?n.texStorage2D(t.TEXTURE_2D,1,De,se.width,se.height):n.texImage2D(t.TEXTURE_2D,0,De,se.width,se.height,0,pe,Ie,null));else if(y.isDataTexture)if(We.length>0){ke&&rt&&n.texStorage2D(t.TEXTURE_2D,me,De,We[0].width,We[0].height);for(let X=0,ne=We.length;X<ne;X++)xe=We[X],ke?F&&n.texSubImage2D(t.TEXTURE_2D,X,0,0,xe.width,xe.height,pe,Ie,xe.data):n.texImage2D(t.TEXTURE_2D,X,De,xe.width,xe.height,0,pe,Ie,xe.data);y.generateMipmaps=!1}else ke?(rt&&n.texStorage2D(t.TEXTURE_2D,me,De,se.width,se.height),F&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,se.width,se.height,pe,Ie,se.data)):n.texImage2D(t.TEXTURE_2D,0,De,se.width,se.height,0,pe,Ie,se.data);else if(y.isCompressedTexture)if(y.isCompressedArrayTexture){ke&&rt&&n.texStorage3D(t.TEXTURE_2D_ARRAY,me,De,We[0].width,We[0].height,se.depth);for(let X=0,ne=We.length;X<ne;X++)if(xe=We[X],y.format!==Wn)if(pe!==null)if(ke){if(F)if(y.layerUpdates.size>0){const fe=Sm(xe.width,xe.height,y.format,y.type);for(const ge of y.layerUpdates){const Xe=xe.data.subarray(ge*fe/xe.data.BYTES_PER_ELEMENT,(ge+1)*fe/xe.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,X,0,0,ge,xe.width,xe.height,1,pe,Xe,0,0)}y.clearLayerUpdates()}else n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,X,0,0,0,xe.width,xe.height,se.depth,pe,xe.data,0,0)}else n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,X,De,xe.width,xe.height,se.depth,0,xe.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ke?F&&n.texSubImage3D(t.TEXTURE_2D_ARRAY,X,0,0,0,xe.width,xe.height,se.depth,pe,Ie,xe.data):n.texImage3D(t.TEXTURE_2D_ARRAY,X,De,xe.width,xe.height,se.depth,0,pe,Ie,xe.data)}else{ke&&rt&&n.texStorage2D(t.TEXTURE_2D,me,De,We[0].width,We[0].height);for(let X=0,ne=We.length;X<ne;X++)xe=We[X],y.format!==Wn?pe!==null?ke?F&&n.compressedTexSubImage2D(t.TEXTURE_2D,X,0,0,xe.width,xe.height,pe,xe.data):n.compressedTexImage2D(t.TEXTURE_2D,X,De,xe.width,xe.height,0,xe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ke?F&&n.texSubImage2D(t.TEXTURE_2D,X,0,0,xe.width,xe.height,pe,Ie,xe.data):n.texImage2D(t.TEXTURE_2D,X,De,xe.width,xe.height,0,pe,Ie,xe.data)}else if(y.isDataArrayTexture)if(ke){if(rt&&n.texStorage3D(t.TEXTURE_2D_ARRAY,me,De,se.width,se.height,se.depth),F)if(y.layerUpdates.size>0){const X=Sm(se.width,se.height,y.format,y.type);for(const ne of y.layerUpdates){const fe=se.data.subarray(ne*X/se.data.BYTES_PER_ELEMENT,(ne+1)*X/se.data.BYTES_PER_ELEMENT);n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,ne,se.width,se.height,1,pe,Ie,fe)}y.clearLayerUpdates()}else n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,se.width,se.height,se.depth,pe,Ie,se.data)}else n.texImage3D(t.TEXTURE_2D_ARRAY,0,De,se.width,se.height,se.depth,0,pe,Ie,se.data);else if(y.isData3DTexture)ke?(rt&&n.texStorage3D(t.TEXTURE_3D,me,De,se.width,se.height,se.depth),F&&n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,se.width,se.height,se.depth,pe,Ie,se.data)):n.texImage3D(t.TEXTURE_3D,0,De,se.width,se.height,se.depth,0,pe,Ie,se.data);else if(y.isFramebufferTexture){if(rt)if(ke)n.texStorage2D(t.TEXTURE_2D,me,De,se.width,se.height);else{let X=se.width,ne=se.height;for(let fe=0;fe<me;fe++)n.texImage2D(t.TEXTURE_2D,fe,De,X,ne,0,pe,Ie,null),X>>=1,ne>>=1}}else if(We.length>0){if(ke&&rt){const X=Ce(We[0]);n.texStorage2D(t.TEXTURE_2D,me,De,X.width,X.height)}for(let X=0,ne=We.length;X<ne;X++)xe=We[X],ke?F&&n.texSubImage2D(t.TEXTURE_2D,X,0,0,pe,Ie,xe):n.texImage2D(t.TEXTURE_2D,X,De,pe,Ie,xe);y.generateMipmaps=!1}else if(ke){if(rt){const X=Ce(se);n.texStorage2D(t.TEXTURE_2D,me,De,X.width,X.height)}F&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,pe,Ie,se)}else n.texImage2D(t.TEXTURE_2D,0,De,pe,Ie,se);m(y)&&d(q),J.__version=U.version,y.onUpdate&&y.onUpdate(y)}b.__version=y.version}function $(b,y,O){if(y.image.length!==6)return;const q=ye(b,y),N=y.source;n.bindTexture(t.TEXTURE_CUBE_MAP,b.__webglTexture,t.TEXTURE0+O);const U=i.get(N);if(N.version!==U.__version||q===!0){n.activeTexture(t.TEXTURE0+O);const J=Je.getPrimaries(Je.workingColorSpace),te=y.colorSpace===Fi?null:Je.getPrimaries(y.colorSpace),ce=y.colorSpace===Fi||J===te?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,y.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,y.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,ce);const Ue=y.isCompressedTexture||y.image[0].isCompressedTexture,se=y.image[0]&&y.image[0].isDataTexture,pe=[];for(let ne=0;ne<6;ne++)!Ue&&!se?pe[ne]=S(y.image[ne],!0,r.maxCubemapSize):pe[ne]=se?y.image[ne].image:y.image[ne],pe[ne]=Ke(y,pe[ne]);const Ie=pe[0],De=s.convert(y.format,y.colorSpace),xe=s.convert(y.type),We=g(y.internalFormat,De,xe,y.colorSpace),ke=y.isVideoTexture!==!0,rt=U.__version===void 0||q===!0,F=N.dataReady;let me=E(y,Ie);oe(t.TEXTURE_CUBE_MAP,y);let X;if(Ue){ke&&rt&&n.texStorage2D(t.TEXTURE_CUBE_MAP,me,We,Ie.width,Ie.height);for(let ne=0;ne<6;ne++){X=pe[ne].mipmaps;for(let fe=0;fe<X.length;fe++){const ge=X[fe];y.format!==Wn?De!==null?ke?F&&n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ne,fe,0,0,ge.width,ge.height,De,ge.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ne,fe,We,ge.width,ge.height,0,ge.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):ke?F&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ne,fe,0,0,ge.width,ge.height,De,xe,ge.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ne,fe,We,ge.width,ge.height,0,De,xe,ge.data)}}}else{if(X=y.mipmaps,ke&&rt){X.length>0&&me++;const ne=Ce(pe[0]);n.texStorage2D(t.TEXTURE_CUBE_MAP,me,We,ne.width,ne.height)}for(let ne=0;ne<6;ne++)if(se){ke?F&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,0,0,pe[ne].width,pe[ne].height,De,xe,pe[ne].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,We,pe[ne].width,pe[ne].height,0,De,xe,pe[ne].data);for(let fe=0;fe<X.length;fe++){const Xe=X[fe].image[ne].image;ke?F&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ne,fe+1,0,0,Xe.width,Xe.height,De,xe,Xe.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ne,fe+1,We,Xe.width,Xe.height,0,De,xe,Xe.data)}}else{ke?F&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,0,0,De,xe,pe[ne]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,We,De,xe,pe[ne]);for(let fe=0;fe<X.length;fe++){const ge=X[fe];ke?F&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ne,fe+1,0,0,De,xe,ge.image[ne]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ne,fe+1,We,De,xe,ge.image[ne])}}}m(y)&&d(t.TEXTURE_CUBE_MAP),U.__version=N.version,y.onUpdate&&y.onUpdate(y)}b.__version=y.version}function ie(b,y,O,q,N,U){const J=s.convert(O.format,O.colorSpace),te=s.convert(O.type),ce=g(O.internalFormat,J,te,O.colorSpace);if(!i.get(y).__hasExternalTextures){const se=Math.max(1,y.width>>U),pe=Math.max(1,y.height>>U);N===t.TEXTURE_3D||N===t.TEXTURE_2D_ARRAY?n.texImage3D(N,U,ce,se,pe,y.depth,0,J,te,null):n.texImage2D(N,U,ce,se,pe,0,J,te,null)}n.bindFramebuffer(t.FRAMEBUFFER,b),Ve(y)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,q,N,i.get(O).__webglTexture,0,Oe(y)):(N===t.TEXTURE_2D||N>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&N<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,q,N,i.get(O).__webglTexture,U),n.bindFramebuffer(t.FRAMEBUFFER,null)}function le(b,y,O){if(t.bindRenderbuffer(t.RENDERBUFFER,b),y.depthBuffer){const q=y.depthTexture,N=q&&q.isDepthTexture?q.type:null,U=x(y.stencilBuffer,N),J=y.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,te=Oe(y);Ve(y)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,te,U,y.width,y.height):O?t.renderbufferStorageMultisample(t.RENDERBUFFER,te,U,y.width,y.height):t.renderbufferStorage(t.RENDERBUFFER,U,y.width,y.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,J,t.RENDERBUFFER,b)}else{const q=y.textures;for(let N=0;N<q.length;N++){const U=q[N],J=s.convert(U.format,U.colorSpace),te=s.convert(U.type),ce=g(U.internalFormat,J,te,U.colorSpace),Ue=Oe(y);O&&Ve(y)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,Ue,ce,y.width,y.height):Ve(y)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,Ue,ce,y.width,y.height):t.renderbufferStorage(t.RENDERBUFFER,ce,y.width,y.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function de(b,y){if(y&&y.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(t.FRAMEBUFFER,b),!(y.depthTexture&&y.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(y.depthTexture).__webglTexture||y.depthTexture.image.width!==y.width||y.depthTexture.image.height!==y.height)&&(y.depthTexture.image.width=y.width,y.depthTexture.image.height=y.height,y.depthTexture.needsUpdate=!0),Y(y.depthTexture,0);const q=i.get(y.depthTexture).__webglTexture,N=Oe(y);if(y.depthTexture.format===_s)Ve(y)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,q,0,N):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,q,0);else if(y.depthTexture.format===Is)Ve(y)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,q,0,N):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,q,0);else throw new Error("Unknown depthTexture format")}function be(b){const y=i.get(b),O=b.isWebGLCubeRenderTarget===!0;if(y.__boundDepthTexture!==b.depthTexture){const q=b.depthTexture;if(y.__depthDisposeCallback&&y.__depthDisposeCallback(),q){const N=()=>{delete y.__boundDepthTexture,delete y.__depthDisposeCallback,q.removeEventListener("dispose",N)};q.addEventListener("dispose",N),y.__depthDisposeCallback=N}y.__boundDepthTexture=q}if(b.depthTexture&&!y.__autoAllocateDepthBuffer){if(O)throw new Error("target.depthTexture not supported in Cube render targets");de(y.__webglFramebuffer,b)}else if(O){y.__webglDepthbuffer=[];for(let q=0;q<6;q++)if(n.bindFramebuffer(t.FRAMEBUFFER,y.__webglFramebuffer[q]),y.__webglDepthbuffer[q]===void 0)y.__webglDepthbuffer[q]=t.createRenderbuffer(),le(y.__webglDepthbuffer[q],b,!1);else{const N=b.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,U=y.__webglDepthbuffer[q];t.bindRenderbuffer(t.RENDERBUFFER,U),t.framebufferRenderbuffer(t.FRAMEBUFFER,N,t.RENDERBUFFER,U)}}else if(n.bindFramebuffer(t.FRAMEBUFFER,y.__webglFramebuffer),y.__webglDepthbuffer===void 0)y.__webglDepthbuffer=t.createRenderbuffer(),le(y.__webglDepthbuffer,b,!1);else{const q=b.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,N=y.__webglDepthbuffer;t.bindRenderbuffer(t.RENDERBUFFER,N),t.framebufferRenderbuffer(t.FRAMEBUFFER,q,t.RENDERBUFFER,N)}n.bindFramebuffer(t.FRAMEBUFFER,null)}function Me(b,y,O){const q=i.get(b);y!==void 0&&ie(q.__webglFramebuffer,b,b.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),O!==void 0&&be(b)}function Pe(b){const y=b.texture,O=i.get(b),q=i.get(y);b.addEventListener("dispose",C);const N=b.textures,U=b.isWebGLCubeRenderTarget===!0,J=N.length>1;if(J||(q.__webglTexture===void 0&&(q.__webglTexture=t.createTexture()),q.__version=y.version,o.memory.textures++),U){O.__webglFramebuffer=[];for(let te=0;te<6;te++)if(y.mipmaps&&y.mipmaps.length>0){O.__webglFramebuffer[te]=[];for(let ce=0;ce<y.mipmaps.length;ce++)O.__webglFramebuffer[te][ce]=t.createFramebuffer()}else O.__webglFramebuffer[te]=t.createFramebuffer()}else{if(y.mipmaps&&y.mipmaps.length>0){O.__webglFramebuffer=[];for(let te=0;te<y.mipmaps.length;te++)O.__webglFramebuffer[te]=t.createFramebuffer()}else O.__webglFramebuffer=t.createFramebuffer();if(J)for(let te=0,ce=N.length;te<ce;te++){const Ue=i.get(N[te]);Ue.__webglTexture===void 0&&(Ue.__webglTexture=t.createTexture(),o.memory.textures++)}if(b.samples>0&&Ve(b)===!1){O.__webglMultisampledFramebuffer=t.createFramebuffer(),O.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,O.__webglMultisampledFramebuffer);for(let te=0;te<N.length;te++){const ce=N[te];O.__webglColorRenderbuffer[te]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,O.__webglColorRenderbuffer[te]);const Ue=s.convert(ce.format,ce.colorSpace),se=s.convert(ce.type),pe=g(ce.internalFormat,Ue,se,ce.colorSpace,b.isXRRenderTarget===!0),Ie=Oe(b);t.renderbufferStorageMultisample(t.RENDERBUFFER,Ie,pe,b.width,b.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+te,t.RENDERBUFFER,O.__webglColorRenderbuffer[te])}t.bindRenderbuffer(t.RENDERBUFFER,null),b.depthBuffer&&(O.__webglDepthRenderbuffer=t.createRenderbuffer(),le(O.__webglDepthRenderbuffer,b,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(U){n.bindTexture(t.TEXTURE_CUBE_MAP,q.__webglTexture),oe(t.TEXTURE_CUBE_MAP,y);for(let te=0;te<6;te++)if(y.mipmaps&&y.mipmaps.length>0)for(let ce=0;ce<y.mipmaps.length;ce++)ie(O.__webglFramebuffer[te][ce],b,y,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+te,ce);else ie(O.__webglFramebuffer[te],b,y,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+te,0);m(y)&&d(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(J){for(let te=0,ce=N.length;te<ce;te++){const Ue=N[te],se=i.get(Ue);n.bindTexture(t.TEXTURE_2D,se.__webglTexture),oe(t.TEXTURE_2D,Ue),ie(O.__webglFramebuffer,b,Ue,t.COLOR_ATTACHMENT0+te,t.TEXTURE_2D,0),m(Ue)&&d(t.TEXTURE_2D)}n.unbindTexture()}else{let te=t.TEXTURE_2D;if((b.isWebGL3DRenderTarget||b.isWebGLArrayRenderTarget)&&(te=b.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(te,q.__webglTexture),oe(te,y),y.mipmaps&&y.mipmaps.length>0)for(let ce=0;ce<y.mipmaps.length;ce++)ie(O.__webglFramebuffer[ce],b,y,t.COLOR_ATTACHMENT0,te,ce);else ie(O.__webglFramebuffer,b,y,t.COLOR_ATTACHMENT0,te,0);m(y)&&d(te),n.unbindTexture()}b.depthBuffer&&be(b)}function je(b){const y=b.textures;for(let O=0,q=y.length;O<q;O++){const N=y[O];if(m(N)){const U=b.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:t.TEXTURE_2D,J=i.get(N).__webglTexture;n.bindTexture(U,J),d(U),n.unbindTexture()}}}const He=[],D=[];function Ut(b){if(b.samples>0){if(Ve(b)===!1){const y=b.textures,O=b.width,q=b.height;let N=t.COLOR_BUFFER_BIT;const U=b.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,J=i.get(b),te=y.length>1;if(te)for(let ce=0;ce<y.length;ce++)n.bindFramebuffer(t.FRAMEBUFFER,J.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+ce,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,J.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+ce,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,J.__webglMultisampledFramebuffer),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,J.__webglFramebuffer);for(let ce=0;ce<y.length;ce++){if(b.resolveDepthBuffer&&(b.depthBuffer&&(N|=t.DEPTH_BUFFER_BIT),b.stencilBuffer&&b.resolveStencilBuffer&&(N|=t.STENCIL_BUFFER_BIT)),te){t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,J.__webglColorRenderbuffer[ce]);const Ue=i.get(y[ce]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,Ue,0)}t.blitFramebuffer(0,0,O,q,0,0,O,q,N,t.NEAREST),l===!0&&(He.length=0,D.length=0,He.push(t.COLOR_ATTACHMENT0+ce),b.depthBuffer&&b.resolveDepthBuffer===!1&&(He.push(U),D.push(U),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,D)),t.invalidateFramebuffer(t.READ_FRAMEBUFFER,He))}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),te)for(let ce=0;ce<y.length;ce++){n.bindFramebuffer(t.FRAMEBUFFER,J.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+ce,t.RENDERBUFFER,J.__webglColorRenderbuffer[ce]);const Ue=i.get(y[ce]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,J.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+ce,t.TEXTURE_2D,Ue,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,J.__webglMultisampledFramebuffer)}else if(b.depthBuffer&&b.resolveDepthBuffer===!1&&l){const y=b.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[y])}}}function Oe(b){return Math.min(r.maxSamples,b.samples)}function Ve(b){const y=i.get(b);return b.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&y.__useRenderToTexture!==!1}function Ae(b){const y=o.render.frame;u.get(b)!==y&&(u.set(b,y),b.update())}function Ke(b,y){const O=b.colorSpace,q=b.format,N=b.type;return b.isCompressedTexture===!0||b.isVideoTexture===!0||O!==ir&&O!==Fi&&(Je.getTransfer(O)===lt?(q!==Wn||N!==Si)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",O)),y}function Ce(b){return typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement?(c.width=b.naturalWidth||b.width,c.height=b.naturalHeight||b.height):typeof VideoFrame<"u"&&b instanceof VideoFrame?(c.width=b.displayWidth,c.height=b.displayHeight):(c.width=b.width,c.height=b.height),c}this.allocateTextureUnit=W,this.resetTextureUnits=T,this.setTexture2D=Y,this.setTexture2DArray=ee,this.setTexture3D=G,this.setTextureCube=Q,this.rebindTextures=Me,this.setupRenderTarget=Pe,this.updateRenderTargetMipmap=je,this.updateMultisampleRenderTarget=Ut,this.setupDepthRenderbuffer=be,this.setupFrameBufferTexture=ie,this.useMultisampledRTT=Ve}function bT(t,e){function n(i,r=Fi){let s;const o=Je.getTransfer(r);if(i===Si)return t.UNSIGNED_BYTE;if(i===Qf)return t.UNSIGNED_SHORT_4_4_4_4;if(i===Jf)return t.UNSIGNED_SHORT_5_5_5_1;if(i===Jg)return t.UNSIGNED_INT_5_9_9_9_REV;if(i===Zg)return t.BYTE;if(i===Qg)return t.SHORT;if(i===Vo)return t.UNSIGNED_SHORT;if(i===Zf)return t.INT;if(i===Lr)return t.UNSIGNED_INT;if(i===pi)return t.FLOAT;if(i===Ko)return t.HALF_FLOAT;if(i===ev)return t.ALPHA;if(i===tv)return t.RGB;if(i===Wn)return t.RGBA;if(i===nv)return t.LUMINANCE;if(i===iv)return t.LUMINANCE_ALPHA;if(i===_s)return t.DEPTH_COMPONENT;if(i===Is)return t.DEPTH_STENCIL;if(i===rv)return t.RED;if(i===eh)return t.RED_INTEGER;if(i===sv)return t.RG;if(i===th)return t.RG_INTEGER;if(i===nh)return t.RGBA_INTEGER;if(i===al||i===ll||i===cl||i===ul)if(o===lt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===al)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===ll)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===cl)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===ul)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===al)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===ll)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===cl)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===ul)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===bd||i===Cd||i===Rd||i===Pd)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===bd)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Cd)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Rd)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Pd)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Nd||i===Ld||i===Id)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===Nd||i===Ld)return o===lt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===Id)return o===lt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===Dd||i===Ud||i===Fd||i===Od||i===kd||i===zd||i===Bd||i===Hd||i===Vd||i===Gd||i===Wd||i===jd||i===Xd||i===$d)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===Dd)return o===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Ud)return o===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Fd)return o===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Od)return o===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===kd)return o===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===zd)return o===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Bd)return o===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Hd)return o===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Vd)return o===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Gd)return o===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Wd)return o===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===jd)return o===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Xd)return o===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===$d)return o===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===dl||i===qd||i===Yd)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===dl)return o===lt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===qd)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Yd)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===ov||i===Kd||i===Zd||i===Qd)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===dl)return s.COMPRESSED_RED_RGTC1_EXT;if(i===Kd)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Zd)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Qd)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Ls?t.UNSIGNED_INT_24_8:t[i]!==void 0?t[i]:null}return{convert:n}}class CT extends xn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Tt extends en{constructor(){super(),this.isGroup=!0,this.type="Group"}}const RT={type:"move"};class mu{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Tt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Tt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new P,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new P),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Tt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new P,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new P),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const S of e.hand.values()){const m=n.getJointPose(S,i),d=this._getHandJoint(c,S);m!==null&&(d.matrix.fromArray(m.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=m.radius),d.visible=m!==null}const u=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],h=u.position.distanceTo(f.position),p=.02,v=.005;c.inputState.pinching&&h>p+v?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&h<=p-v&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=n.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=n.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(RT)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new Tt;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}const PT=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,NT=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class LT{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n,i){if(this.texture===null){const r=new Jt,s=e.properties.get(r);s.__webglTexture=n.texture,(n.depthNear!=i.depthNear||n.depthFar!=i.depthFar)&&(this.depthNear=n.depthNear,this.depthFar=n.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,i=new Ji({vertexShader:PT,fragmentShader:NT,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new it(new Yi(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class IT extends ks{constructor(e,n){super();const i=this;let r=null,s=1,o=null,a="local-floor",l=1,c=null,u=null,f=null,h=null,p=null,v=null;const S=new LT,m=n.getContextAttributes();let d=null,g=null;const x=[],E=[],L=new Te;let C=null;const A=new xn;A.layers.enable(1),A.viewport=new St;const R=new xn;R.layers.enable(2),R.viewport=new St;const j=[A,R],M=new CT;M.layers.enable(1),M.layers.enable(2);let T=null,W=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function($){let ie=x[$];return ie===void 0&&(ie=new mu,x[$]=ie),ie.getTargetRaySpace()},this.getControllerGrip=function($){let ie=x[$];return ie===void 0&&(ie=new mu,x[$]=ie),ie.getGripSpace()},this.getHand=function($){let ie=x[$];return ie===void 0&&(ie=new mu,x[$]=ie),ie.getHandSpace()};function V($){const ie=E.indexOf($.inputSource);if(ie===-1)return;const le=x[ie];le!==void 0&&(le.update($.inputSource,$.frame,c||o),le.dispatchEvent({type:$.type,data:$.inputSource}))}function Y(){r.removeEventListener("select",V),r.removeEventListener("selectstart",V),r.removeEventListener("selectend",V),r.removeEventListener("squeeze",V),r.removeEventListener("squeezestart",V),r.removeEventListener("squeezeend",V),r.removeEventListener("end",Y),r.removeEventListener("inputsourceschange",ee);for(let $=0;$<x.length;$++){const ie=E[$];ie!==null&&(E[$]=null,x[$].disconnect(ie))}T=null,W=null,S.reset(),e.setRenderTarget(d),p=null,h=null,f=null,r=null,g=null,Fe.stop(),i.isPresenting=!1,e.setPixelRatio(C),e.setSize(L.width,L.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function($){s=$,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function($){a=$,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function($){c=$},this.getBaseLayer=function(){return h!==null?h:p},this.getBinding=function(){return f},this.getFrame=function(){return v},this.getSession=function(){return r},this.setSession=async function($){if(r=$,r!==null){if(d=e.getRenderTarget(),r.addEventListener("select",V),r.addEventListener("selectstart",V),r.addEventListener("selectend",V),r.addEventListener("squeeze",V),r.addEventListener("squeezestart",V),r.addEventListener("squeezeend",V),r.addEventListener("end",Y),r.addEventListener("inputsourceschange",ee),m.xrCompatible!==!0&&await n.makeXRCompatible(),C=e.getPixelRatio(),e.getSize(L),r.renderState.layers===void 0){const ie={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(r,n,ie),r.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),g=new Ir(p.framebufferWidth,p.framebufferHeight,{format:Wn,type:Si,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil})}else{let ie=null,le=null,de=null;m.depth&&(de=m.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,ie=m.stencil?Is:_s,le=m.stencil?Ls:Lr);const be={colorFormat:n.RGBA8,depthFormat:de,scaleFactor:s};f=new XRWebGLBinding(r,n),h=f.createProjectionLayer(be),r.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),g=new Ir(h.textureWidth,h.textureHeight,{format:Wn,type:Si,depthTexture:new yv(h.textureWidth,h.textureHeight,le,void 0,void 0,void 0,void 0,void 0,void 0,ie),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1})}g.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await r.requestReferenceSpace(a),Fe.setContext(r),Fe.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return S.getDepthTexture()};function ee($){for(let ie=0;ie<$.removed.length;ie++){const le=$.removed[ie],de=E.indexOf(le);de>=0&&(E[de]=null,x[de].disconnect(le))}for(let ie=0;ie<$.added.length;ie++){const le=$.added[ie];let de=E.indexOf(le);if(de===-1){for(let Me=0;Me<x.length;Me++)if(Me>=E.length){E.push(le),de=Me;break}else if(E[Me]===null){E[Me]=le,de=Me;break}if(de===-1)break}const be=x[de];be&&be.connect(le)}}const G=new P,Q=new P;function I($,ie,le){G.setFromMatrixPosition(ie.matrixWorld),Q.setFromMatrixPosition(le.matrixWorld);const de=G.distanceTo(Q),be=ie.projectionMatrix.elements,Me=le.projectionMatrix.elements,Pe=be[14]/(be[10]-1),je=be[14]/(be[10]+1),He=(be[9]+1)/be[5],D=(be[9]-1)/be[5],Ut=(be[8]-1)/be[0],Oe=(Me[8]+1)/Me[0],Ve=Pe*Ut,Ae=Pe*Oe,Ke=de/(-Ut+Oe),Ce=Ke*-Ut;if(ie.matrixWorld.decompose($.position,$.quaternion,$.scale),$.translateX(Ce),$.translateZ(Ke),$.matrixWorld.compose($.position,$.quaternion,$.scale),$.matrixWorldInverse.copy($.matrixWorld).invert(),be[10]===-1)$.projectionMatrix.copy(ie.projectionMatrix),$.projectionMatrixInverse.copy(ie.projectionMatrixInverse);else{const b=Pe+Ke,y=je+Ke,O=Ve-Ce,q=Ae+(de-Ce),N=He*je/y*b,U=D*je/y*b;$.projectionMatrix.makePerspective(O,q,N,U,b,y),$.projectionMatrixInverse.copy($.projectionMatrix).invert()}}function K($,ie){ie===null?$.matrixWorld.copy($.matrix):$.matrixWorld.multiplyMatrices(ie.matrixWorld,$.matrix),$.matrixWorldInverse.copy($.matrixWorld).invert()}this.updateCamera=function($){if(r===null)return;let ie=$.near,le=$.far;S.texture!==null&&(S.depthNear>0&&(ie=S.depthNear),S.depthFar>0&&(le=S.depthFar)),M.near=R.near=A.near=ie,M.far=R.far=A.far=le,(T!==M.near||W!==M.far)&&(r.updateRenderState({depthNear:M.near,depthFar:M.far}),T=M.near,W=M.far);const de=$.parent,be=M.cameras;K(M,de);for(let Me=0;Me<be.length;Me++)K(be[Me],de);be.length===2?I(M,A,R):M.projectionMatrix.copy(A.projectionMatrix),Z($,M,de)};function Z($,ie,le){le===null?$.matrix.copy(ie.matrixWorld):($.matrix.copy(le.matrixWorld),$.matrix.invert(),$.matrix.multiply(ie.matrixWorld)),$.matrix.decompose($.position,$.quaternion,$.scale),$.updateMatrixWorld(!0),$.projectionMatrix.copy(ie.projectionMatrix),$.projectionMatrixInverse.copy(ie.projectionMatrixInverse),$.isPerspectiveCamera&&($.fov=Go*2*Math.atan(1/$.projectionMatrix.elements[5]),$.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(h===null&&p===null))return l},this.setFoveation=function($){l=$,h!==null&&(h.fixedFoveation=$),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=$)},this.hasDepthSensing=function(){return S.texture!==null},this.getDepthSensingMesh=function(){return S.getMesh(M)};let oe=null;function ye($,ie){if(u=ie.getViewerPose(c||o),v=ie,u!==null){const le=u.views;p!==null&&(e.setRenderTargetFramebuffer(g,p.framebuffer),e.setRenderTarget(g));let de=!1;le.length!==M.cameras.length&&(M.cameras.length=0,de=!0);for(let Me=0;Me<le.length;Me++){const Pe=le[Me];let je=null;if(p!==null)je=p.getViewport(Pe);else{const D=f.getViewSubImage(h,Pe);je=D.viewport,Me===0&&(e.setRenderTargetTextures(g,D.colorTexture,h.ignoreDepthValues?void 0:D.depthStencilTexture),e.setRenderTarget(g))}let He=j[Me];He===void 0&&(He=new xn,He.layers.enable(Me),He.viewport=new St,j[Me]=He),He.matrix.fromArray(Pe.transform.matrix),He.matrix.decompose(He.position,He.quaternion,He.scale),He.projectionMatrix.fromArray(Pe.projectionMatrix),He.projectionMatrixInverse.copy(He.projectionMatrix).invert(),He.viewport.set(je.x,je.y,je.width,je.height),Me===0&&(M.matrix.copy(He.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),de===!0&&M.cameras.push(He)}const be=r.enabledFeatures;if(be&&be.includes("depth-sensing")){const Me=f.getDepthInformation(le[0]);Me&&Me.isValid&&Me.texture&&S.init(e,Me,r.renderState)}}for(let le=0;le<x.length;le++){const de=E[le],be=x[le];de!==null&&be!==void 0&&be.update(de,ie,c||o)}oe&&oe($,ie),ie.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ie}),v=null}const Fe=new _v;Fe.setAnimationLoop(ye),this.setAnimationLoop=function($){oe=$},this.dispose=function(){}}}const ur=new Mi,DT=new ht;function UT(t,e){function n(m,d){m.matrixAutoUpdate===!0&&m.updateMatrix(),d.value.copy(m.matrix)}function i(m,d){d.color.getRGB(m.fogColor.value,mv(t)),d.isFog?(m.fogNear.value=d.near,m.fogFar.value=d.far):d.isFogExp2&&(m.fogDensity.value=d.density)}function r(m,d,g,x,E){d.isMeshBasicMaterial||d.isMeshLambertMaterial?s(m,d):d.isMeshToonMaterial?(s(m,d),f(m,d)):d.isMeshPhongMaterial?(s(m,d),u(m,d)):d.isMeshStandardMaterial?(s(m,d),h(m,d),d.isMeshPhysicalMaterial&&p(m,d,E)):d.isMeshMatcapMaterial?(s(m,d),v(m,d)):d.isMeshDepthMaterial?s(m,d):d.isMeshDistanceMaterial?(s(m,d),S(m,d)):d.isMeshNormalMaterial?s(m,d):d.isLineBasicMaterial?(o(m,d),d.isLineDashedMaterial&&a(m,d)):d.isPointsMaterial?l(m,d,g,x):d.isSpriteMaterial?c(m,d):d.isShadowMaterial?(m.color.value.copy(d.color),m.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function s(m,d){m.opacity.value=d.opacity,d.color&&m.diffuse.value.copy(d.color),d.emissive&&m.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(m.map.value=d.map,n(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,n(d.alphaMap,m.alphaMapTransform)),d.bumpMap&&(m.bumpMap.value=d.bumpMap,n(d.bumpMap,m.bumpMapTransform),m.bumpScale.value=d.bumpScale,d.side===fn&&(m.bumpScale.value*=-1)),d.normalMap&&(m.normalMap.value=d.normalMap,n(d.normalMap,m.normalMapTransform),m.normalScale.value.copy(d.normalScale),d.side===fn&&m.normalScale.value.negate()),d.displacementMap&&(m.displacementMap.value=d.displacementMap,n(d.displacementMap,m.displacementMapTransform),m.displacementScale.value=d.displacementScale,m.displacementBias.value=d.displacementBias),d.emissiveMap&&(m.emissiveMap.value=d.emissiveMap,n(d.emissiveMap,m.emissiveMapTransform)),d.specularMap&&(m.specularMap.value=d.specularMap,n(d.specularMap,m.specularMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest);const g=e.get(d),x=g.envMap,E=g.envMapRotation;x&&(m.envMap.value=x,ur.copy(E),ur.x*=-1,ur.y*=-1,ur.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(ur.y*=-1,ur.z*=-1),m.envMapRotation.value.setFromMatrix4(DT.makeRotationFromEuler(ur)),m.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=d.reflectivity,m.ior.value=d.ior,m.refractionRatio.value=d.refractionRatio),d.lightMap&&(m.lightMap.value=d.lightMap,m.lightMapIntensity.value=d.lightMapIntensity,n(d.lightMap,m.lightMapTransform)),d.aoMap&&(m.aoMap.value=d.aoMap,m.aoMapIntensity.value=d.aoMapIntensity,n(d.aoMap,m.aoMapTransform))}function o(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,d.map&&(m.map.value=d.map,n(d.map,m.mapTransform))}function a(m,d){m.dashSize.value=d.dashSize,m.totalSize.value=d.dashSize+d.gapSize,m.scale.value=d.scale}function l(m,d,g,x){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.size.value=d.size*g,m.scale.value=x*.5,d.map&&(m.map.value=d.map,n(d.map,m.uvTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,n(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function c(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.rotation.value=d.rotation,d.map&&(m.map.value=d.map,n(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,n(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function u(m,d){m.specular.value.copy(d.specular),m.shininess.value=Math.max(d.shininess,1e-4)}function f(m,d){d.gradientMap&&(m.gradientMap.value=d.gradientMap)}function h(m,d){m.metalness.value=d.metalness,d.metalnessMap&&(m.metalnessMap.value=d.metalnessMap,n(d.metalnessMap,m.metalnessMapTransform)),m.roughness.value=d.roughness,d.roughnessMap&&(m.roughnessMap.value=d.roughnessMap,n(d.roughnessMap,m.roughnessMapTransform)),d.envMap&&(m.envMapIntensity.value=d.envMapIntensity)}function p(m,d,g){m.ior.value=d.ior,d.sheen>0&&(m.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),m.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(m.sheenColorMap.value=d.sheenColorMap,n(d.sheenColorMap,m.sheenColorMapTransform)),d.sheenRoughnessMap&&(m.sheenRoughnessMap.value=d.sheenRoughnessMap,n(d.sheenRoughnessMap,m.sheenRoughnessMapTransform))),d.clearcoat>0&&(m.clearcoat.value=d.clearcoat,m.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(m.clearcoatMap.value=d.clearcoatMap,n(d.clearcoatMap,m.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,n(d.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(m.clearcoatNormalMap.value=d.clearcoatNormalMap,n(d.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===fn&&m.clearcoatNormalScale.value.negate())),d.dispersion>0&&(m.dispersion.value=d.dispersion),d.iridescence>0&&(m.iridescence.value=d.iridescence,m.iridescenceIOR.value=d.iridescenceIOR,m.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(m.iridescenceMap.value=d.iridescenceMap,n(d.iridescenceMap,m.iridescenceMapTransform)),d.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=d.iridescenceThicknessMap,n(d.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),d.transmission>0&&(m.transmission.value=d.transmission,m.transmissionSamplerMap.value=g.texture,m.transmissionSamplerSize.value.set(g.width,g.height),d.transmissionMap&&(m.transmissionMap.value=d.transmissionMap,n(d.transmissionMap,m.transmissionMapTransform)),m.thickness.value=d.thickness,d.thicknessMap&&(m.thicknessMap.value=d.thicknessMap,n(d.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=d.attenuationDistance,m.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(m.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(m.anisotropyMap.value=d.anisotropyMap,n(d.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=d.specularIntensity,m.specularColor.value.copy(d.specularColor),d.specularColorMap&&(m.specularColorMap.value=d.specularColorMap,n(d.specularColorMap,m.specularColorMapTransform)),d.specularIntensityMap&&(m.specularIntensityMap.value=d.specularIntensityMap,n(d.specularIntensityMap,m.specularIntensityMapTransform))}function v(m,d){d.matcap&&(m.matcap.value=d.matcap)}function S(m,d){const g=e.get(d).light;m.referencePosition.value.setFromMatrixPosition(g.matrixWorld),m.nearDistance.value=g.shadow.camera.near,m.farDistance.value=g.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function FT(t,e,n,i){let r={},s={},o=[];const a=t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS);function l(g,x){const E=x.program;i.uniformBlockBinding(g,E)}function c(g,x){let E=r[g.id];E===void 0&&(v(g),E=u(g),r[g.id]=E,g.addEventListener("dispose",m));const L=x.program;i.updateUBOMapping(g,L);const C=e.render.frame;s[g.id]!==C&&(h(g),s[g.id]=C)}function u(g){const x=f();g.__bindingPointIndex=x;const E=t.createBuffer(),L=g.__size,C=g.usage;return t.bindBuffer(t.UNIFORM_BUFFER,E),t.bufferData(t.UNIFORM_BUFFER,L,C),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,x,E),E}function f(){for(let g=0;g<a;g++)if(o.indexOf(g)===-1)return o.push(g),g;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(g){const x=r[g.id],E=g.uniforms,L=g.__cache;t.bindBuffer(t.UNIFORM_BUFFER,x);for(let C=0,A=E.length;C<A;C++){const R=Array.isArray(E[C])?E[C]:[E[C]];for(let j=0,M=R.length;j<M;j++){const T=R[j];if(p(T,C,j,L)===!0){const W=T.__offset,V=Array.isArray(T.value)?T.value:[T.value];let Y=0;for(let ee=0;ee<V.length;ee++){const G=V[ee],Q=S(G);typeof G=="number"||typeof G=="boolean"?(T.__data[0]=G,t.bufferSubData(t.UNIFORM_BUFFER,W+Y,T.__data)):G.isMatrix3?(T.__data[0]=G.elements[0],T.__data[1]=G.elements[1],T.__data[2]=G.elements[2],T.__data[3]=0,T.__data[4]=G.elements[3],T.__data[5]=G.elements[4],T.__data[6]=G.elements[5],T.__data[7]=0,T.__data[8]=G.elements[6],T.__data[9]=G.elements[7],T.__data[10]=G.elements[8],T.__data[11]=0):(G.toArray(T.__data,Y),Y+=Q.storage/Float32Array.BYTES_PER_ELEMENT)}t.bufferSubData(t.UNIFORM_BUFFER,W,T.__data)}}}t.bindBuffer(t.UNIFORM_BUFFER,null)}function p(g,x,E,L){const C=g.value,A=x+"_"+E;if(L[A]===void 0)return typeof C=="number"||typeof C=="boolean"?L[A]=C:L[A]=C.clone(),!0;{const R=L[A];if(typeof C=="number"||typeof C=="boolean"){if(R!==C)return L[A]=C,!0}else if(R.equals(C)===!1)return R.copy(C),!0}return!1}function v(g){const x=g.uniforms;let E=0;const L=16;for(let A=0,R=x.length;A<R;A++){const j=Array.isArray(x[A])?x[A]:[x[A]];for(let M=0,T=j.length;M<T;M++){const W=j[M],V=Array.isArray(W.value)?W.value:[W.value];for(let Y=0,ee=V.length;Y<ee;Y++){const G=V[Y],Q=S(G),I=E%L,K=I%Q.boundary,Z=I+K;E+=K,Z!==0&&L-Z<Q.storage&&(E+=L-Z),W.__data=new Float32Array(Q.storage/Float32Array.BYTES_PER_ELEMENT),W.__offset=E,E+=Q.storage}}}const C=E%L;return C>0&&(E+=L-C),g.__size=E,g.__cache={},this}function S(g){const x={boundary:0,storage:0};return typeof g=="number"||typeof g=="boolean"?(x.boundary=4,x.storage=4):g.isVector2?(x.boundary=8,x.storage=8):g.isVector3||g.isColor?(x.boundary=16,x.storage=12):g.isVector4?(x.boundary=16,x.storage=16):g.isMatrix3?(x.boundary=48,x.storage=48):g.isMatrix4?(x.boundary=64,x.storage=64):g.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",g),x}function m(g){const x=g.target;x.removeEventListener("dispose",m);const E=o.indexOf(x.__bindingPointIndex);o.splice(E,1),t.deleteBuffer(r[x.id]),delete r[x.id],delete s[x.id]}function d(){for(const g in r)t.deleteBuffer(r[g]);o=[],r={},s={}}return{bind:l,update:c,dispose:d}}class Tv{constructor(e={}){const{canvas:n=ES(),context:i=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:f=!1}=e;this.isWebGLRenderer=!0;let h;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");h=i.getContextAttributes().alpha}else h=o;const p=new Uint32Array(4),v=new Int32Array(4);let S=null,m=null;const d=[],g=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Zn,this.toneMapping=qi,this.toneMappingExposure=1;const x=this;let E=!1,L=0,C=0,A=null,R=-1,j=null;const M=new St,T=new St;let W=null;const V=new et(0);let Y=0,ee=n.width,G=n.height,Q=1,I=null,K=null;const Z=new St(0,0,ee,G),oe=new St(0,0,ee,G);let ye=!1;const Fe=new xv;let $=!1,ie=!1;const le=new ht,de=new ht,be=new P,Me=new St,Pe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let je=!1;function He(){return A===null?Q:1}let D=i;function Ut(w,k){return n.getContext(w,k)}try{const w={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:f};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${Kf}`),n.addEventListener("webglcontextlost",ne,!1),n.addEventListener("webglcontextrestored",fe,!1),n.addEventListener("webglcontextcreationerror",ge,!1),D===null){const k="webgl2";if(D=Ut(k,w),D===null)throw Ut(k)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(w){throw console.error("THREE.WebGLRenderer: "+w.message),w}let Oe,Ve,Ae,Ke,Ce,b,y,O,q,N,U,J,te,ce,Ue,se,pe,Ie,De,xe,We,ke,rt,F;function me(){Oe=new VE(D),Oe.init(),ke=new bT(D,Oe),Ve=new UE(D,Oe,e,ke),Ae=new wT(D),Ve.reverseDepthBuffer&&Ae.buffers.depth.setReversed(!0),Ke=new jE(D),Ce=new cT,b=new AT(D,Oe,Ae,Ce,Ve,ke,Ke),y=new OE(x),O=new HE(x),q=new ZS(D),rt=new IE(D,q),N=new GE(D,q,Ke,rt),U=new $E(D,N,q,Ke),De=new XE(D,Ve,b),se=new FE(Ce),J=new lT(x,y,O,Oe,Ve,rt,se),te=new UT(x,Ce),ce=new dT,Ue=new vT(Oe),Ie=new LE(x,y,O,Ae,U,h,l),pe=new MT(x,U,Ve),F=new FT(D,Ke,Ve,Ae),xe=new DE(D,Oe,Ke),We=new WE(D,Oe,Ke),Ke.programs=J.programs,x.capabilities=Ve,x.extensions=Oe,x.properties=Ce,x.renderLists=ce,x.shadowMap=pe,x.state=Ae,x.info=Ke}me();const X=new IT(x,D);this.xr=X,this.getContext=function(){return D},this.getContextAttributes=function(){return D.getContextAttributes()},this.forceContextLoss=function(){const w=Oe.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){const w=Oe.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return Q},this.setPixelRatio=function(w){w!==void 0&&(Q=w,this.setSize(ee,G,!1))},this.getSize=function(w){return w.set(ee,G)},this.setSize=function(w,k,B=!0){if(X.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}ee=w,G=k,n.width=Math.floor(w*Q),n.height=Math.floor(k*Q),B===!0&&(n.style.width=w+"px",n.style.height=k+"px"),this.setViewport(0,0,w,k)},this.getDrawingBufferSize=function(w){return w.set(ee*Q,G*Q).floor()},this.setDrawingBufferSize=function(w,k,B){ee=w,G=k,Q=B,n.width=Math.floor(w*B),n.height=Math.floor(k*B),this.setViewport(0,0,w,k)},this.getCurrentViewport=function(w){return w.copy(M)},this.getViewport=function(w){return w.copy(Z)},this.setViewport=function(w,k,B,H){w.isVector4?Z.set(w.x,w.y,w.z,w.w):Z.set(w,k,B,H),Ae.viewport(M.copy(Z).multiplyScalar(Q).round())},this.getScissor=function(w){return w.copy(oe)},this.setScissor=function(w,k,B,H){w.isVector4?oe.set(w.x,w.y,w.z,w.w):oe.set(w,k,B,H),Ae.scissor(T.copy(oe).multiplyScalar(Q).round())},this.getScissorTest=function(){return ye},this.setScissorTest=function(w){Ae.setScissorTest(ye=w)},this.setOpaqueSort=function(w){I=w},this.setTransparentSort=function(w){K=w},this.getClearColor=function(w){return w.copy(Ie.getClearColor())},this.setClearColor=function(){Ie.setClearColor.apply(Ie,arguments)},this.getClearAlpha=function(){return Ie.getClearAlpha()},this.setClearAlpha=function(){Ie.setClearAlpha.apply(Ie,arguments)},this.clear=function(w=!0,k=!0,B=!0){let H=0;if(w){let z=!1;if(A!==null){const ae=A.texture.format;z=ae===nh||ae===th||ae===eh}if(z){const ae=A.texture.type,he=ae===Si||ae===Lr||ae===Vo||ae===Ls||ae===Qf||ae===Jf,_e=Ie.getClearColor(),Se=Ie.getClearAlpha(),Ne=_e.r,Le=_e.g,Ee=_e.b;he?(p[0]=Ne,p[1]=Le,p[2]=Ee,p[3]=Se,D.clearBufferuiv(D.COLOR,0,p)):(v[0]=Ne,v[1]=Le,v[2]=Ee,v[3]=Se,D.clearBufferiv(D.COLOR,0,v))}else H|=D.COLOR_BUFFER_BIT}k&&(H|=D.DEPTH_BUFFER_BIT,D.clearDepth(this.capabilities.reverseDepthBuffer?0:1)),B&&(H|=D.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),D.clear(H)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",ne,!1),n.removeEventListener("webglcontextrestored",fe,!1),n.removeEventListener("webglcontextcreationerror",ge,!1),ce.dispose(),Ue.dispose(),Ce.dispose(),y.dispose(),O.dispose(),U.dispose(),rt.dispose(),F.dispose(),J.dispose(),X.dispose(),X.removeEventListener("sessionstart",uh),X.removeEventListener("sessionend",dh),rr.stop()};function ne(w){w.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),E=!0}function fe(){console.log("THREE.WebGLRenderer: Context Restored."),E=!1;const w=Ke.autoReset,k=pe.enabled,B=pe.autoUpdate,H=pe.needsUpdate,z=pe.type;me(),Ke.autoReset=w,pe.enabled=k,pe.autoUpdate=B,pe.needsUpdate=H,pe.type=z}function ge(w){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function Xe(w){const k=w.target;k.removeEventListener("dispose",Xe),Mt(k)}function Mt(w){rn(w),Ce.remove(w)}function rn(w){const k=Ce.get(w).programs;k!==void 0&&(k.forEach(function(B){J.releaseProgram(B)}),w.isShaderMaterial&&J.releaseShaderCache(w))}this.renderBufferDirect=function(w,k,B,H,z,ae){k===null&&(k=Pe);const he=z.isMesh&&z.matrixWorld.determinant()<0,_e=Bv(w,k,B,H,z);Ae.setMaterial(H,he);let Se=B.index,Ne=1;if(H.wireframe===!0){if(Se=N.getWireframeAttribute(B),Se===void 0)return;Ne=2}const Le=B.drawRange,Ee=B.attributes.position;let tt=Le.start*Ne,ot=(Le.start+Le.count)*Ne;ae!==null&&(tt=Math.max(tt,ae.start*Ne),ot=Math.min(ot,(ae.start+ae.count)*Ne)),Se!==null?(tt=Math.max(tt,0),ot=Math.min(ot,Se.count)):Ee!=null&&(tt=Math.max(tt,0),ot=Math.min(ot,Ee.count));const mt=ot-tt;if(mt<0||mt===1/0)return;rt.setup(z,H,_e,B,Se);let hn,Ze=xe;if(Se!==null&&(hn=q.get(Se),Ze=We,Ze.setIndex(hn)),z.isMesh)H.wireframe===!0?(Ae.setLineWidth(H.wireframeLinewidth*He()),Ze.setMode(D.LINES)):Ze.setMode(D.TRIANGLES);else if(z.isLine){let we=H.linewidth;we===void 0&&(we=1),Ae.setLineWidth(we*He()),z.isLineSegments?Ze.setMode(D.LINES):z.isLineLoop?Ze.setMode(D.LINE_LOOP):Ze.setMode(D.LINE_STRIP)}else z.isPoints?Ze.setMode(D.POINTS):z.isSprite&&Ze.setMode(D.TRIANGLES);if(z.isBatchedMesh)if(z._multiDrawInstances!==null)Ze.renderMultiDrawInstances(z._multiDrawStarts,z._multiDrawCounts,z._multiDrawCount,z._multiDrawInstances);else if(Oe.get("WEBGL_multi_draw"))Ze.renderMultiDraw(z._multiDrawStarts,z._multiDrawCounts,z._multiDrawCount);else{const we=z._multiDrawStarts,Ft=z._multiDrawCounts,Qe=z._multiDrawCount,Dn=Se?q.get(Se).bytesPerElement:1,Fr=Ce.get(H).currentProgram.getUniforms();for(let pn=0;pn<Qe;pn++)Fr.setValue(D,"_gl_DrawID",pn),Ze.render(we[pn]/Dn,Ft[pn])}else if(z.isInstancedMesh)Ze.renderInstances(tt,mt,z.count);else if(B.isInstancedBufferGeometry){const we=B._maxInstanceCount!==void 0?B._maxInstanceCount:1/0,Ft=Math.min(B.instanceCount,we);Ze.renderInstances(tt,mt,Ft)}else Ze.render(tt,mt)};function Ye(w,k,B){w.transparent===!0&&w.side===bt&&w.forceSinglePass===!1?(w.side=fn,w.needsUpdate=!0,na(w,k,B),w.side=Qi,w.needsUpdate=!0,na(w,k,B),w.side=bt):na(w,k,B)}this.compile=function(w,k,B=null){B===null&&(B=w),m=Ue.get(B),m.init(k),g.push(m),B.traverseVisible(function(z){z.isLight&&z.layers.test(k.layers)&&(m.pushLight(z),z.castShadow&&m.pushShadow(z))}),w!==B&&w.traverseVisible(function(z){z.isLight&&z.layers.test(k.layers)&&(m.pushLight(z),z.castShadow&&m.pushShadow(z))}),m.setupLights();const H=new Set;return w.traverse(function(z){if(!(z.isMesh||z.isPoints||z.isLine||z.isSprite))return;const ae=z.material;if(ae)if(Array.isArray(ae))for(let he=0;he<ae.length;he++){const _e=ae[he];Ye(_e,B,z),H.add(_e)}else Ye(ae,B,z),H.add(ae)}),g.pop(),m=null,H},this.compileAsync=function(w,k,B=null){const H=this.compile(w,k,B);return new Promise(z=>{function ae(){if(H.forEach(function(he){Ce.get(he).currentProgram.isReady()&&H.delete(he)}),H.size===0){z(w);return}setTimeout(ae,10)}Oe.get("KHR_parallel_shader_compile")!==null?ae():setTimeout(ae,10)})};let sn=null;function ii(w){sn&&sn(w)}function uh(){rr.stop()}function dh(){rr.start()}const rr=new _v;rr.setAnimationLoop(ii),typeof self<"u"&&rr.setContext(self),this.setAnimationLoop=function(w){sn=w,X.setAnimationLoop(w),w===null?rr.stop():rr.start()},X.addEventListener("sessionstart",uh),X.addEventListener("sessionend",dh),this.render=function(w,k){if(k!==void 0&&k.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(E===!0)return;if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),k.parent===null&&k.matrixWorldAutoUpdate===!0&&k.updateMatrixWorld(),X.enabled===!0&&X.isPresenting===!0&&(X.cameraAutoUpdate===!0&&X.updateCamera(k),k=X.getCamera()),w.isScene===!0&&w.onBeforeRender(x,w,k,A),m=Ue.get(w,g.length),m.init(k),g.push(m),de.multiplyMatrices(k.projectionMatrix,k.matrixWorldInverse),Fe.setFromProjectionMatrix(de),ie=this.localClippingEnabled,$=se.init(this.clippingPlanes,ie),S=ce.get(w,d.length),S.init(),d.push(S),X.enabled===!0&&X.isPresenting===!0){const ae=x.xr.getDepthSensingMesh();ae!==null&&dc(ae,k,-1/0,x.sortObjects)}dc(w,k,0,x.sortObjects),S.finish(),x.sortObjects===!0&&S.sort(I,K),je=X.enabled===!1||X.isPresenting===!1||X.hasDepthSensing()===!1,je&&Ie.addToRenderList(S,w),this.info.render.frame++,$===!0&&se.beginShadows();const B=m.state.shadowsArray;pe.render(B,w,k),$===!0&&se.endShadows(),this.info.autoReset===!0&&this.info.reset();const H=S.opaque,z=S.transmissive;if(m.setupLights(),k.isArrayCamera){const ae=k.cameras;if(z.length>0)for(let he=0,_e=ae.length;he<_e;he++){const Se=ae[he];hh(H,z,w,Se)}je&&Ie.render(w);for(let he=0,_e=ae.length;he<_e;he++){const Se=ae[he];fh(S,w,Se,Se.viewport)}}else z.length>0&&hh(H,z,w,k),je&&Ie.render(w),fh(S,w,k);A!==null&&(b.updateMultisampleRenderTarget(A),b.updateRenderTargetMipmap(A)),w.isScene===!0&&w.onAfterRender(x,w,k),rt.resetDefaultState(),R=-1,j=null,g.pop(),g.length>0?(m=g[g.length-1],$===!0&&se.setGlobalState(x.clippingPlanes,m.state.camera)):m=null,d.pop(),d.length>0?S=d[d.length-1]:S=null};function dc(w,k,B,H){if(w.visible===!1)return;if(w.layers.test(k.layers)){if(w.isGroup)B=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(k);else if(w.isLight)m.pushLight(w),w.castShadow&&m.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||Fe.intersectsSprite(w)){H&&Me.setFromMatrixPosition(w.matrixWorld).applyMatrix4(de);const he=U.update(w),_e=w.material;_e.visible&&S.push(w,he,_e,B,Me.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||Fe.intersectsObject(w))){const he=U.update(w),_e=w.material;if(H&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),Me.copy(w.boundingSphere.center)):(he.boundingSphere===null&&he.computeBoundingSphere(),Me.copy(he.boundingSphere.center)),Me.applyMatrix4(w.matrixWorld).applyMatrix4(de)),Array.isArray(_e)){const Se=he.groups;for(let Ne=0,Le=Se.length;Ne<Le;Ne++){const Ee=Se[Ne],tt=_e[Ee.materialIndex];tt&&tt.visible&&S.push(w,he,tt,B,Me.z,Ee)}}else _e.visible&&S.push(w,he,_e,B,Me.z,null)}}const ae=w.children;for(let he=0,_e=ae.length;he<_e;he++)dc(ae[he],k,B,H)}function fh(w,k,B,H){const z=w.opaque,ae=w.transmissive,he=w.transparent;m.setupLightsView(B),$===!0&&se.setGlobalState(x.clippingPlanes,B),H&&Ae.viewport(M.copy(H)),z.length>0&&ta(z,k,B),ae.length>0&&ta(ae,k,B),he.length>0&&ta(he,k,B),Ae.buffers.depth.setTest(!0),Ae.buffers.depth.setMask(!0),Ae.buffers.color.setMask(!0),Ae.setPolygonOffset(!1)}function hh(w,k,B,H){if((B.isScene===!0?B.overrideMaterial:null)!==null)return;m.state.transmissionRenderTarget[H.id]===void 0&&(m.state.transmissionRenderTarget[H.id]=new Ir(1,1,{generateMipmaps:!0,type:Oe.has("EXT_color_buffer_half_float")||Oe.has("EXT_color_buffer_float")?Ko:Si,minFilter:Mr,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Je.workingColorSpace}));const ae=m.state.transmissionRenderTarget[H.id],he=H.viewport||M;ae.setSize(he.z,he.w);const _e=x.getRenderTarget();x.setRenderTarget(ae),x.getClearColor(V),Y=x.getClearAlpha(),Y<1&&x.setClearColor(16777215,.5),x.clear(),je&&Ie.render(B);const Se=x.toneMapping;x.toneMapping=qi;const Ne=H.viewport;if(H.viewport!==void 0&&(H.viewport=void 0),m.setupLightsView(H),$===!0&&se.setGlobalState(x.clippingPlanes,H),ta(w,B,H),b.updateMultisampleRenderTarget(ae),b.updateRenderTargetMipmap(ae),Oe.has("WEBGL_multisampled_render_to_texture")===!1){let Le=!1;for(let Ee=0,tt=k.length;Ee<tt;Ee++){const ot=k[Ee],mt=ot.object,hn=ot.geometry,Ze=ot.material,we=ot.group;if(Ze.side===bt&&mt.layers.test(H.layers)){const Ft=Ze.side;Ze.side=fn,Ze.needsUpdate=!0,ph(mt,B,H,hn,Ze,we),Ze.side=Ft,Ze.needsUpdate=!0,Le=!0}}Le===!0&&(b.updateMultisampleRenderTarget(ae),b.updateRenderTargetMipmap(ae))}x.setRenderTarget(_e),x.setClearColor(V,Y),Ne!==void 0&&(H.viewport=Ne),x.toneMapping=Se}function ta(w,k,B){const H=k.isScene===!0?k.overrideMaterial:null;for(let z=0,ae=w.length;z<ae;z++){const he=w[z],_e=he.object,Se=he.geometry,Ne=H===null?he.material:H,Le=he.group;_e.layers.test(B.layers)&&ph(_e,k,B,Se,Ne,Le)}}function ph(w,k,B,H,z,ae){w.onBeforeRender(x,k,B,H,z,ae),w.modelViewMatrix.multiplyMatrices(B.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),z.onBeforeRender(x,k,B,H,w,ae),z.transparent===!0&&z.side===bt&&z.forceSinglePass===!1?(z.side=fn,z.needsUpdate=!0,x.renderBufferDirect(B,k,H,z,w,ae),z.side=Qi,z.needsUpdate=!0,x.renderBufferDirect(B,k,H,z,w,ae),z.side=bt):x.renderBufferDirect(B,k,H,z,w,ae),w.onAfterRender(x,k,B,H,z,ae)}function na(w,k,B){k.isScene!==!0&&(k=Pe);const H=Ce.get(w),z=m.state.lights,ae=m.state.shadowsArray,he=z.state.version,_e=J.getParameters(w,z.state,ae,k,B),Se=J.getProgramCacheKey(_e);let Ne=H.programs;H.environment=w.isMeshStandardMaterial?k.environment:null,H.fog=k.fog,H.envMap=(w.isMeshStandardMaterial?O:y).get(w.envMap||H.environment),H.envMapRotation=H.environment!==null&&w.envMap===null?k.environmentRotation:w.envMapRotation,Ne===void 0&&(w.addEventListener("dispose",Xe),Ne=new Map,H.programs=Ne);let Le=Ne.get(Se);if(Le!==void 0){if(H.currentProgram===Le&&H.lightsStateVersion===he)return gh(w,_e),Le}else _e.uniforms=J.getUniforms(w),w.onBeforeCompile(_e,x),Le=J.acquireProgram(_e,Se),Ne.set(Se,Le),H.uniforms=_e.uniforms;const Ee=H.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(Ee.clippingPlanes=se.uniform),gh(w,_e),H.needsLights=Vv(w),H.lightsStateVersion=he,H.needsLights&&(Ee.ambientLightColor.value=z.state.ambient,Ee.lightProbe.value=z.state.probe,Ee.directionalLights.value=z.state.directional,Ee.directionalLightShadows.value=z.state.directionalShadow,Ee.spotLights.value=z.state.spot,Ee.spotLightShadows.value=z.state.spotShadow,Ee.rectAreaLights.value=z.state.rectArea,Ee.ltc_1.value=z.state.rectAreaLTC1,Ee.ltc_2.value=z.state.rectAreaLTC2,Ee.pointLights.value=z.state.point,Ee.pointLightShadows.value=z.state.pointShadow,Ee.hemisphereLights.value=z.state.hemi,Ee.directionalShadowMap.value=z.state.directionalShadowMap,Ee.directionalShadowMatrix.value=z.state.directionalShadowMatrix,Ee.spotShadowMap.value=z.state.spotShadowMap,Ee.spotLightMatrix.value=z.state.spotLightMatrix,Ee.spotLightMap.value=z.state.spotLightMap,Ee.pointShadowMap.value=z.state.pointShadowMap,Ee.pointShadowMatrix.value=z.state.pointShadowMatrix),H.currentProgram=Le,H.uniformsList=null,Le}function mh(w){if(w.uniformsList===null){const k=w.currentProgram.getUniforms();w.uniformsList=hl.seqWithValue(k.seq,w.uniforms)}return w.uniformsList}function gh(w,k){const B=Ce.get(w);B.outputColorSpace=k.outputColorSpace,B.batching=k.batching,B.batchingColor=k.batchingColor,B.instancing=k.instancing,B.instancingColor=k.instancingColor,B.instancingMorph=k.instancingMorph,B.skinning=k.skinning,B.morphTargets=k.morphTargets,B.morphNormals=k.morphNormals,B.morphColors=k.morphColors,B.morphTargetsCount=k.morphTargetsCount,B.numClippingPlanes=k.numClippingPlanes,B.numIntersection=k.numClipIntersection,B.vertexAlphas=k.vertexAlphas,B.vertexTangents=k.vertexTangents,B.toneMapping=k.toneMapping}function Bv(w,k,B,H,z){k.isScene!==!0&&(k=Pe),b.resetTextureUnits();const ae=k.fog,he=H.isMeshStandardMaterial?k.environment:null,_e=A===null?x.outputColorSpace:A.isXRRenderTarget===!0?A.texture.colorSpace:ir,Se=(H.isMeshStandardMaterial?O:y).get(H.envMap||he),Ne=H.vertexColors===!0&&!!B.attributes.color&&B.attributes.color.itemSize===4,Le=!!B.attributes.tangent&&(!!H.normalMap||H.anisotropy>0),Ee=!!B.morphAttributes.position,tt=!!B.morphAttributes.normal,ot=!!B.morphAttributes.color;let mt=qi;H.toneMapped&&(A===null||A.isXRRenderTarget===!0)&&(mt=x.toneMapping);const hn=B.morphAttributes.position||B.morphAttributes.normal||B.morphAttributes.color,Ze=hn!==void 0?hn.length:0,we=Ce.get(H),Ft=m.state.lights;if($===!0&&(ie===!0||w!==j)){const Tn=w===j&&H.id===R;se.setState(H,w,Tn)}let Qe=!1;H.version===we.__version?(we.needsLights&&we.lightsStateVersion!==Ft.state.version||we.outputColorSpace!==_e||z.isBatchedMesh&&we.batching===!1||!z.isBatchedMesh&&we.batching===!0||z.isBatchedMesh&&we.batchingColor===!0&&z.colorTexture===null||z.isBatchedMesh&&we.batchingColor===!1&&z.colorTexture!==null||z.isInstancedMesh&&we.instancing===!1||!z.isInstancedMesh&&we.instancing===!0||z.isSkinnedMesh&&we.skinning===!1||!z.isSkinnedMesh&&we.skinning===!0||z.isInstancedMesh&&we.instancingColor===!0&&z.instanceColor===null||z.isInstancedMesh&&we.instancingColor===!1&&z.instanceColor!==null||z.isInstancedMesh&&we.instancingMorph===!0&&z.morphTexture===null||z.isInstancedMesh&&we.instancingMorph===!1&&z.morphTexture!==null||we.envMap!==Se||H.fog===!0&&we.fog!==ae||we.numClippingPlanes!==void 0&&(we.numClippingPlanes!==se.numPlanes||we.numIntersection!==se.numIntersection)||we.vertexAlphas!==Ne||we.vertexTangents!==Le||we.morphTargets!==Ee||we.morphNormals!==tt||we.morphColors!==ot||we.toneMapping!==mt||we.morphTargetsCount!==Ze)&&(Qe=!0):(Qe=!0,we.__version=H.version);let Dn=we.currentProgram;Qe===!0&&(Dn=na(H,k,z));let Fr=!1,pn=!1,fc=!1;const xt=Dn.getUniforms(),wi=we.uniforms;if(Ae.useProgram(Dn.program)&&(Fr=!0,pn=!0,fc=!0),H.id!==R&&(R=H.id,pn=!0),Fr||j!==w){Ve.reverseDepthBuffer?(le.copy(w.projectionMatrix),TS(le),AS(le),xt.setValue(D,"projectionMatrix",le)):xt.setValue(D,"projectionMatrix",w.projectionMatrix),xt.setValue(D,"viewMatrix",w.matrixWorldInverse);const Tn=xt.map.cameraPosition;Tn!==void 0&&Tn.setValue(D,be.setFromMatrixPosition(w.matrixWorld)),Ve.logarithmicDepthBuffer&&xt.setValue(D,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(H.isMeshPhongMaterial||H.isMeshToonMaterial||H.isMeshLambertMaterial||H.isMeshBasicMaterial||H.isMeshStandardMaterial||H.isShaderMaterial)&&xt.setValue(D,"isOrthographic",w.isOrthographicCamera===!0),j!==w&&(j=w,pn=!0,fc=!0)}if(z.isSkinnedMesh){xt.setOptional(D,z,"bindMatrix"),xt.setOptional(D,z,"bindMatrixInverse");const Tn=z.skeleton;Tn&&(Tn.boneTexture===null&&Tn.computeBoneTexture(),xt.setValue(D,"boneTexture",Tn.boneTexture,b))}z.isBatchedMesh&&(xt.setOptional(D,z,"batchingTexture"),xt.setValue(D,"batchingTexture",z._matricesTexture,b),xt.setOptional(D,z,"batchingIdTexture"),xt.setValue(D,"batchingIdTexture",z._indirectTexture,b),xt.setOptional(D,z,"batchingColorTexture"),z._colorsTexture!==null&&xt.setValue(D,"batchingColorTexture",z._colorsTexture,b));const hc=B.morphAttributes;if((hc.position!==void 0||hc.normal!==void 0||hc.color!==void 0)&&De.update(z,B,Dn),(pn||we.receiveShadow!==z.receiveShadow)&&(we.receiveShadow=z.receiveShadow,xt.setValue(D,"receiveShadow",z.receiveShadow)),H.isMeshGouraudMaterial&&H.envMap!==null&&(wi.envMap.value=Se,wi.flipEnvMap.value=Se.isCubeTexture&&Se.isRenderTargetTexture===!1?-1:1),H.isMeshStandardMaterial&&H.envMap===null&&k.environment!==null&&(wi.envMapIntensity.value=k.environmentIntensity),pn&&(xt.setValue(D,"toneMappingExposure",x.toneMappingExposure),we.needsLights&&Hv(wi,fc),ae&&H.fog===!0&&te.refreshFogUniforms(wi,ae),te.refreshMaterialUniforms(wi,H,Q,G,m.state.transmissionRenderTarget[w.id]),hl.upload(D,mh(we),wi,b)),H.isShaderMaterial&&H.uniformsNeedUpdate===!0&&(hl.upload(D,mh(we),wi,b),H.uniformsNeedUpdate=!1),H.isSpriteMaterial&&xt.setValue(D,"center",z.center),xt.setValue(D,"modelViewMatrix",z.modelViewMatrix),xt.setValue(D,"normalMatrix",z.normalMatrix),xt.setValue(D,"modelMatrix",z.matrixWorld),H.isShaderMaterial||H.isRawShaderMaterial){const Tn=H.uniformsGroups;for(let pc=0,Gv=Tn.length;pc<Gv;pc++){const vh=Tn[pc];F.update(vh,Dn),F.bind(vh,Dn)}}return Dn}function Hv(w,k){w.ambientLightColor.needsUpdate=k,w.lightProbe.needsUpdate=k,w.directionalLights.needsUpdate=k,w.directionalLightShadows.needsUpdate=k,w.pointLights.needsUpdate=k,w.pointLightShadows.needsUpdate=k,w.spotLights.needsUpdate=k,w.spotLightShadows.needsUpdate=k,w.rectAreaLights.needsUpdate=k,w.hemisphereLights.needsUpdate=k}function Vv(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return L},this.getActiveMipmapLevel=function(){return C},this.getRenderTarget=function(){return A},this.setRenderTargetTextures=function(w,k,B){Ce.get(w.texture).__webglTexture=k,Ce.get(w.depthTexture).__webglTexture=B;const H=Ce.get(w);H.__hasExternalTextures=!0,H.__autoAllocateDepthBuffer=B===void 0,H.__autoAllocateDepthBuffer||Oe.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),H.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(w,k){const B=Ce.get(w);B.__webglFramebuffer=k,B.__useDefaultFramebuffer=k===void 0},this.setRenderTarget=function(w,k=0,B=0){A=w,L=k,C=B;let H=!0,z=null,ae=!1,he=!1;if(w){const Se=Ce.get(w);if(Se.__useDefaultFramebuffer!==void 0)Ae.bindFramebuffer(D.FRAMEBUFFER,null),H=!1;else if(Se.__webglFramebuffer===void 0)b.setupRenderTarget(w);else if(Se.__hasExternalTextures)b.rebindTextures(w,Ce.get(w.texture).__webglTexture,Ce.get(w.depthTexture).__webglTexture);else if(w.depthBuffer){const Ee=w.depthTexture;if(Se.__boundDepthTexture!==Ee){if(Ee!==null&&Ce.has(Ee)&&(w.width!==Ee.image.width||w.height!==Ee.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");b.setupDepthRenderbuffer(w)}}const Ne=w.texture;(Ne.isData3DTexture||Ne.isDataArrayTexture||Ne.isCompressedArrayTexture)&&(he=!0);const Le=Ce.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(Le[k])?z=Le[k][B]:z=Le[k],ae=!0):w.samples>0&&b.useMultisampledRTT(w)===!1?z=Ce.get(w).__webglMultisampledFramebuffer:Array.isArray(Le)?z=Le[B]:z=Le,M.copy(w.viewport),T.copy(w.scissor),W=w.scissorTest}else M.copy(Z).multiplyScalar(Q).floor(),T.copy(oe).multiplyScalar(Q).floor(),W=ye;if(Ae.bindFramebuffer(D.FRAMEBUFFER,z)&&H&&Ae.drawBuffers(w,z),Ae.viewport(M),Ae.scissor(T),Ae.setScissorTest(W),ae){const Se=Ce.get(w.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_CUBE_MAP_POSITIVE_X+k,Se.__webglTexture,B)}else if(he){const Se=Ce.get(w.texture),Ne=k||0;D.framebufferTextureLayer(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,Se.__webglTexture,B||0,Ne)}R=-1},this.readRenderTargetPixels=function(w,k,B,H,z,ae,he){if(!(w&&w.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let _e=Ce.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&he!==void 0&&(_e=_e[he]),_e){Ae.bindFramebuffer(D.FRAMEBUFFER,_e);try{const Se=w.texture,Ne=Se.format,Le=Se.type;if(!Ve.textureFormatReadable(Ne)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Ve.textureTypeReadable(Le)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}k>=0&&k<=w.width-H&&B>=0&&B<=w.height-z&&D.readPixels(k,B,H,z,ke.convert(Ne),ke.convert(Le),ae)}finally{const Se=A!==null?Ce.get(A).__webglFramebuffer:null;Ae.bindFramebuffer(D.FRAMEBUFFER,Se)}}},this.readRenderTargetPixelsAsync=async function(w,k,B,H,z,ae,he){if(!(w&&w.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let _e=Ce.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&he!==void 0&&(_e=_e[he]),_e){const Se=w.texture,Ne=Se.format,Le=Se.type;if(!Ve.textureFormatReadable(Ne))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Ve.textureTypeReadable(Le))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(k>=0&&k<=w.width-H&&B>=0&&B<=w.height-z){Ae.bindFramebuffer(D.FRAMEBUFFER,_e);const Ee=D.createBuffer();D.bindBuffer(D.PIXEL_PACK_BUFFER,Ee),D.bufferData(D.PIXEL_PACK_BUFFER,ae.byteLength,D.STREAM_READ),D.readPixels(k,B,H,z,ke.convert(Ne),ke.convert(Le),0);const tt=A!==null?Ce.get(A).__webglFramebuffer:null;Ae.bindFramebuffer(D.FRAMEBUFFER,tt);const ot=D.fenceSync(D.SYNC_GPU_COMMANDS_COMPLETE,0);return D.flush(),await wS(D,ot,4),D.bindBuffer(D.PIXEL_PACK_BUFFER,Ee),D.getBufferSubData(D.PIXEL_PACK_BUFFER,0,ae),D.deleteBuffer(Ee),D.deleteSync(ot),ae}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(w,k=null,B=0){w.isTexture!==!0&&(fl("WebGLRenderer: copyFramebufferToTexture function signature has changed."),k=arguments[0]||null,w=arguments[1]);const H=Math.pow(2,-B),z=Math.floor(w.image.width*H),ae=Math.floor(w.image.height*H),he=k!==null?k.x:0,_e=k!==null?k.y:0;b.setTexture2D(w,0),D.copyTexSubImage2D(D.TEXTURE_2D,B,0,0,he,_e,z,ae),Ae.unbindTexture()},this.copyTextureToTexture=function(w,k,B=null,H=null,z=0){w.isTexture!==!0&&(fl("WebGLRenderer: copyTextureToTexture function signature has changed."),H=arguments[0]||null,w=arguments[1],k=arguments[2],z=arguments[3]||0,B=null);let ae,he,_e,Se,Ne,Le;B!==null?(ae=B.max.x-B.min.x,he=B.max.y-B.min.y,_e=B.min.x,Se=B.min.y):(ae=w.image.width,he=w.image.height,_e=0,Se=0),H!==null?(Ne=H.x,Le=H.y):(Ne=0,Le=0);const Ee=ke.convert(k.format),tt=ke.convert(k.type);b.setTexture2D(k,0),D.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,k.flipY),D.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,k.premultiplyAlpha),D.pixelStorei(D.UNPACK_ALIGNMENT,k.unpackAlignment);const ot=D.getParameter(D.UNPACK_ROW_LENGTH),mt=D.getParameter(D.UNPACK_IMAGE_HEIGHT),hn=D.getParameter(D.UNPACK_SKIP_PIXELS),Ze=D.getParameter(D.UNPACK_SKIP_ROWS),we=D.getParameter(D.UNPACK_SKIP_IMAGES),Ft=w.isCompressedTexture?w.mipmaps[z]:w.image;D.pixelStorei(D.UNPACK_ROW_LENGTH,Ft.width),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,Ft.height),D.pixelStorei(D.UNPACK_SKIP_PIXELS,_e),D.pixelStorei(D.UNPACK_SKIP_ROWS,Se),w.isDataTexture?D.texSubImage2D(D.TEXTURE_2D,z,Ne,Le,ae,he,Ee,tt,Ft.data):w.isCompressedTexture?D.compressedTexSubImage2D(D.TEXTURE_2D,z,Ne,Le,Ft.width,Ft.height,Ee,Ft.data):D.texSubImage2D(D.TEXTURE_2D,z,Ne,Le,ae,he,Ee,tt,Ft),D.pixelStorei(D.UNPACK_ROW_LENGTH,ot),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,mt),D.pixelStorei(D.UNPACK_SKIP_PIXELS,hn),D.pixelStorei(D.UNPACK_SKIP_ROWS,Ze),D.pixelStorei(D.UNPACK_SKIP_IMAGES,we),z===0&&k.generateMipmaps&&D.generateMipmap(D.TEXTURE_2D),Ae.unbindTexture()},this.copyTextureToTexture3D=function(w,k,B=null,H=null,z=0){w.isTexture!==!0&&(fl("WebGLRenderer: copyTextureToTexture3D function signature has changed."),B=arguments[0]||null,H=arguments[1]||null,w=arguments[2],k=arguments[3],z=arguments[4]||0);let ae,he,_e,Se,Ne,Le,Ee,tt,ot;const mt=w.isCompressedTexture?w.mipmaps[z]:w.image;B!==null?(ae=B.max.x-B.min.x,he=B.max.y-B.min.y,_e=B.max.z-B.min.z,Se=B.min.x,Ne=B.min.y,Le=B.min.z):(ae=mt.width,he=mt.height,_e=mt.depth,Se=0,Ne=0,Le=0),H!==null?(Ee=H.x,tt=H.y,ot=H.z):(Ee=0,tt=0,ot=0);const hn=ke.convert(k.format),Ze=ke.convert(k.type);let we;if(k.isData3DTexture)b.setTexture3D(k,0),we=D.TEXTURE_3D;else if(k.isDataArrayTexture||k.isCompressedArrayTexture)b.setTexture2DArray(k,0),we=D.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}D.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,k.flipY),D.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,k.premultiplyAlpha),D.pixelStorei(D.UNPACK_ALIGNMENT,k.unpackAlignment);const Ft=D.getParameter(D.UNPACK_ROW_LENGTH),Qe=D.getParameter(D.UNPACK_IMAGE_HEIGHT),Dn=D.getParameter(D.UNPACK_SKIP_PIXELS),Fr=D.getParameter(D.UNPACK_SKIP_ROWS),pn=D.getParameter(D.UNPACK_SKIP_IMAGES);D.pixelStorei(D.UNPACK_ROW_LENGTH,mt.width),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,mt.height),D.pixelStorei(D.UNPACK_SKIP_PIXELS,Se),D.pixelStorei(D.UNPACK_SKIP_ROWS,Ne),D.pixelStorei(D.UNPACK_SKIP_IMAGES,Le),w.isDataTexture||w.isData3DTexture?D.texSubImage3D(we,z,Ee,tt,ot,ae,he,_e,hn,Ze,mt.data):k.isCompressedArrayTexture?D.compressedTexSubImage3D(we,z,Ee,tt,ot,ae,he,_e,hn,mt.data):D.texSubImage3D(we,z,Ee,tt,ot,ae,he,_e,hn,Ze,mt),D.pixelStorei(D.UNPACK_ROW_LENGTH,Ft),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,Qe),D.pixelStorei(D.UNPACK_SKIP_PIXELS,Dn),D.pixelStorei(D.UNPACK_SKIP_ROWS,Fr),D.pixelStorei(D.UNPACK_SKIP_IMAGES,pn),z===0&&k.generateMipmaps&&D.generateMipmap(we),Ae.unbindTexture()},this.initRenderTarget=function(w){Ce.get(w).__webglFramebuffer===void 0&&b.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?b.setTextureCube(w,0):w.isData3DTexture?b.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?b.setTexture2DArray(w,0):b.setTexture2D(w,0),Ae.unbindTexture()},this.resetState=function(){L=0,C=0,A=null,Ae.reset(),rt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return mi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=e===ih?"display-p3":"srgb",n.unpackColorSpace=Je.workingColorSpace===lc?"display-p3":"srgb"}}class Av extends en{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Mi,this.environmentIntensity=1,this.environmentRotation=new Mi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}class Kt extends Bs{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new et(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Gl=new P,Wl=new P,Mm=new ht,to=new sh,Ga=new Jo,gu=new P,Em=new P;class Er extends en{constructor(e=new qe,n=new Kt){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,i=[0];for(let r=1,s=n.count;r<s;r++)Gl.fromBufferAttribute(n,r-1),Wl.fromBufferAttribute(n,r),i[r]=i[r-1],i[r]+=Gl.distanceTo(Wl);e.setAttribute("lineDistance",new Dt(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,n){const i=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Ga.copy(i.boundingSphere),Ga.applyMatrix4(r),Ga.radius+=s,e.ray.intersectsSphere(Ga)===!1)return;Mm.copy(r).invert(),to.copy(e.ray).applyMatrix4(Mm);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,u=i.index,h=i.attributes.position;if(u!==null){const p=Math.max(0,o.start),v=Math.min(u.count,o.start+o.count);for(let S=p,m=v-1;S<m;S+=c){const d=u.getX(S),g=u.getX(S+1),x=Wa(this,e,to,l,d,g);x&&n.push(x)}if(this.isLineLoop){const S=u.getX(v-1),m=u.getX(p),d=Wa(this,e,to,l,S,m);d&&n.push(d)}}else{const p=Math.max(0,o.start),v=Math.min(h.count,o.start+o.count);for(let S=p,m=v-1;S<m;S+=c){const d=Wa(this,e,to,l,S,S+1);d&&n.push(d)}if(this.isLineLoop){const S=Wa(this,e,to,l,v-1,p);S&&n.push(S)}}}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function Wa(t,e,n,i,r,s){const o=t.geometry.attributes.position;if(Gl.fromBufferAttribute(o,r),Wl.fromBufferAttribute(o,s),n.distanceSqToSegment(Gl,Wl,gu,Em)>i)return;gu.applyMatrix4(t.matrixWorld);const l=e.ray.origin.distanceTo(gu);if(!(l<e.near||l>e.far))return{distance:l,point:Em.clone().applyMatrix4(t.matrixWorld),index:r,face:null,faceIndex:null,barycoord:null,object:t}}const wm=new P,Tm=new P;class ao extends Er{constructor(e,n){super(e,n),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,i=[];for(let r=0,s=n.count;r<s;r+=2)wm.fromBufferAttribute(n,r),Tm.fromBufferAttribute(n,r+1),i[r]=r===0?0:i[r-1],i[r+1]=i[r]+wm.distanceTo(Tm);e.setAttribute("lineDistance",new Dt(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class lo extends Er{constructor(e,n){super(e,n),this.isLineLoop=!0,this.type="LineLoop"}}class Mo extends Bs{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new et(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Am=new ht,ef=new sh,ja=new Jo,Xa=new P;class pl extends en{constructor(e=new qe,n=new Mo){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,n){const i=this.geometry,r=this.matrixWorld,s=e.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),ja.copy(i.boundingSphere),ja.applyMatrix4(r),ja.radius+=s,e.ray.intersectsSphere(ja)===!1)return;Am.copy(r).invert(),ef.copy(e.ray).applyMatrix4(Am);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=i.index,f=i.attributes.position;if(c!==null){const h=Math.max(0,o.start),p=Math.min(c.count,o.start+o.count);for(let v=h,S=p;v<S;v++){const m=c.getX(v);Xa.fromBufferAttribute(f,m),bm(Xa,m,l,r,e,n,this)}}else{const h=Math.max(0,o.start),p=Math.min(f.count,o.start+o.count);for(let v=h,S=p;v<S;v++)Xa.fromBufferAttribute(f,v),bm(Xa,v,l,r,e,n,this)}}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function bm(t,e,n,i,r,s,o){const a=ef.distanceSqToPoint(t);if(a<n){const l=new P;ef.closestPointToPoint(t,l),l.applyMatrix4(i);const c=r.ray.origin.distanceTo(l);if(c<r.near||c>r.far)return;s.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}class ni{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,n){const i=this.getUtoTmapping(e);return this.getPoint(i,n)}getPoints(e=5){const n=[];for(let i=0;i<=e;i++)n.push(this.getPoint(i/e));return n}getSpacedPoints(e=5){const n=[];for(let i=0;i<=e;i++)n.push(this.getPointAt(i/e));return n}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const n=[];let i,r=this.getPoint(0),s=0;n.push(0);for(let o=1;o<=e;o++)i=this.getPoint(o/e),s+=i.distanceTo(r),n.push(s),r=i;return this.cacheArcLengths=n,n}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,n){const i=this.getLengths();let r=0;const s=i.length;let o;n?o=n:o=e*i[s-1];let a=0,l=s-1,c;for(;a<=l;)if(r=Math.floor(a+(l-a)/2),c=i[r]-o,c<0)a=r+1;else if(c>0)l=r-1;else{l=r;break}if(r=l,i[r]===o)return r/(s-1);const u=i[r],h=i[r+1]-u,p=(o-u)/h;return(r+p)/(s-1)}getTangent(e,n){let r=e-1e-4,s=e+1e-4;r<0&&(r=0),s>1&&(s=1);const o=this.getPoint(r),a=this.getPoint(s),l=n||(o.isVector2?new Te:new P);return l.copy(a).sub(o).normalize(),l}getTangentAt(e,n){const i=this.getUtoTmapping(e);return this.getTangent(i,n)}computeFrenetFrames(e,n){const i=new P,r=[],s=[],o=[],a=new P,l=new ht;for(let p=0;p<=e;p++){const v=p/e;r[p]=this.getTangentAt(v,new P)}s[0]=new P,o[0]=new P;let c=Number.MAX_VALUE;const u=Math.abs(r[0].x),f=Math.abs(r[0].y),h=Math.abs(r[0].z);u<=c&&(c=u,i.set(1,0,0)),f<=c&&(c=f,i.set(0,1,0)),h<=c&&i.set(0,0,1),a.crossVectors(r[0],i).normalize(),s[0].crossVectors(r[0],a),o[0].crossVectors(r[0],s[0]);for(let p=1;p<=e;p++){if(s[p]=s[p-1].clone(),o[p]=o[p-1].clone(),a.crossVectors(r[p-1],r[p]),a.length()>Number.EPSILON){a.normalize();const v=Math.acos(kt(r[p-1].dot(r[p]),-1,1));s[p].applyMatrix4(l.makeRotationAxis(a,v))}o[p].crossVectors(r[p],s[p])}if(n===!0){let p=Math.acos(kt(s[0].dot(s[e]),-1,1));p/=e,r[0].dot(a.crossVectors(s[0],s[e]))>0&&(p=-p);for(let v=1;v<=e;v++)s[v].applyMatrix4(l.makeRotationAxis(r[v],p*v)),o[v].crossVectors(r[v],s[v])}return{tangents:r,normals:s,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class ah extends ni{constructor(e=0,n=0,i=1,r=1,s=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=n,this.xRadius=i,this.yRadius=r,this.aStartAngle=s,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(e,n=new Te){const i=n,r=Math.PI*2;let s=this.aEndAngle-this.aStartAngle;const o=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=r;for(;s>r;)s-=r;s<Number.EPSILON&&(o?s=0:s=r),this.aClockwise===!0&&!o&&(s===r?s=-r:s=s-r);const a=this.aStartAngle+e*s;let l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const u=Math.cos(this.aRotation),f=Math.sin(this.aRotation),h=l-this.aX,p=c-this.aY;l=h*u-p*f+this.aX,c=h*f+p*u+this.aY}return i.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class OT extends ah{constructor(e,n,i,r,s,o){super(e,n,i,i,r,s,o),this.isArcCurve=!0,this.type="ArcCurve"}}function lh(){let t=0,e=0,n=0,i=0;function r(s,o,a,l){t=s,e=a,n=-3*s+3*o-2*a-l,i=2*s-2*o+a+l}return{initCatmullRom:function(s,o,a,l,c){r(o,a,c*(a-s),c*(l-o))},initNonuniformCatmullRom:function(s,o,a,l,c,u,f){let h=(o-s)/c-(a-s)/(c+u)+(a-o)/u,p=(a-o)/u-(l-o)/(u+f)+(l-a)/f;h*=u,p*=u,r(o,a,h,p)},calc:function(s){const o=s*s,a=o*s;return t+e*s+n*o+i*a}}}const $a=new P,vu=new lh,xu=new lh,_u=new lh;class kT extends ni{constructor(e=[],n=!1,i="centripetal",r=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=n,this.curveType=i,this.tension=r}getPoint(e,n=new P){const i=n,r=this.points,s=r.length,o=(s-(this.closed?0:1))*e;let a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/s)+1)*s:l===0&&a===s-1&&(a=s-2,l=1);let c,u;this.closed||a>0?c=r[(a-1)%s]:($a.subVectors(r[0],r[1]).add(r[0]),c=$a);const f=r[a%s],h=r[(a+1)%s];if(this.closed||a+2<s?u=r[(a+2)%s]:($a.subVectors(r[s-1],r[s-2]).add(r[s-1]),u=$a),this.curveType==="centripetal"||this.curveType==="chordal"){const p=this.curveType==="chordal"?.5:.25;let v=Math.pow(c.distanceToSquared(f),p),S=Math.pow(f.distanceToSquared(h),p),m=Math.pow(h.distanceToSquared(u),p);S<1e-4&&(S=1),v<1e-4&&(v=S),m<1e-4&&(m=S),vu.initNonuniformCatmullRom(c.x,f.x,h.x,u.x,v,S,m),xu.initNonuniformCatmullRom(c.y,f.y,h.y,u.y,v,S,m),_u.initNonuniformCatmullRom(c.z,f.z,h.z,u.z,v,S,m)}else this.curveType==="catmullrom"&&(vu.initCatmullRom(c.x,f.x,h.x,u.x,this.tension),xu.initCatmullRom(c.y,f.y,h.y,u.y,this.tension),_u.initCatmullRom(c.z,f.z,h.z,u.z,this.tension));return i.set(vu.calc(l),xu.calc(l),_u.calc(l)),i}copy(e){super.copy(e),this.points=[];for(let n=0,i=e.points.length;n<i;n++){const r=e.points[n];this.points.push(r.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let n=0,i=this.points.length;n<i;n++){const r=this.points[n];e.points.push(r.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let n=0,i=e.points.length;n<i;n++){const r=e.points[n];this.points.push(new P().fromArray(r))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function Cm(t,e,n,i,r){const s=(i-e)*.5,o=(r-n)*.5,a=t*t,l=t*a;return(2*n-2*i+s+o)*l+(-3*n+3*i-2*s-o)*a+s*t+n}function zT(t,e){const n=1-t;return n*n*e}function BT(t,e){return 2*(1-t)*t*e}function HT(t,e){return t*t*e}function Eo(t,e,n,i){return zT(t,e)+BT(t,n)+HT(t,i)}function VT(t,e){const n=1-t;return n*n*n*e}function GT(t,e){const n=1-t;return 3*n*n*t*e}function WT(t,e){return 3*(1-t)*t*t*e}function jT(t,e){return t*t*t*e}function wo(t,e,n,i,r){return VT(t,e)+GT(t,n)+WT(t,i)+jT(t,r)}class bv extends ni{constructor(e=new Te,n=new Te,i=new Te,r=new Te){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=n,this.v2=i,this.v3=r}getPoint(e,n=new Te){const i=n,r=this.v0,s=this.v1,o=this.v2,a=this.v3;return i.set(wo(e,r.x,s.x,o.x,a.x),wo(e,r.y,s.y,o.y,a.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class Cv extends ni{constructor(e=new P,n=new P,i=new P,r=new P){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=n,this.v2=i,this.v3=r}getPoint(e,n=new P){const i=n,r=this.v0,s=this.v1,o=this.v2,a=this.v3;return i.set(wo(e,r.x,s.x,o.x,a.x),wo(e,r.y,s.y,o.y,a.y),wo(e,r.z,s.z,o.z,a.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class Rv extends ni{constructor(e=new Te,n=new Te){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=n}getPoint(e,n=new Te){const i=n;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,n){return this.getPoint(e,n)}getTangent(e,n=new Te){return n.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,n){return this.getTangent(e,n)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class XT extends ni{constructor(e=new P,n=new P){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=n}getPoint(e,n=new P){const i=n;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,n){return this.getPoint(e,n)}getTangent(e,n=new P){return n.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,n){return this.getTangent(e,n)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Pv extends ni{constructor(e=new Te,n=new Te,i=new Te){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=n,this.v2=i}getPoint(e,n=new Te){const i=n,r=this.v0,s=this.v1,o=this.v2;return i.set(Eo(e,r.x,s.x,o.x),Eo(e,r.y,s.y,o.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Nv extends ni{constructor(e=new P,n=new P,i=new P){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=n,this.v2=i}getPoint(e,n=new P){const i=n,r=this.v0,s=this.v1,o=this.v2;return i.set(Eo(e,r.x,s.x,o.x),Eo(e,r.y,s.y,o.y),Eo(e,r.z,s.z,o.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Lv extends ni{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,n=new Te){const i=n,r=this.points,s=(r.length-1)*e,o=Math.floor(s),a=s-o,l=r[o===0?o:o-1],c=r[o],u=r[o>r.length-2?r.length-1:o+1],f=r[o>r.length-3?r.length-1:o+2];return i.set(Cm(a,l.x,c.x,u.x,f.x),Cm(a,l.y,c.y,u.y,f.y)),i}copy(e){super.copy(e),this.points=[];for(let n=0,i=e.points.length;n<i;n++){const r=e.points[n];this.points.push(r.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let n=0,i=this.points.length;n<i;n++){const r=this.points[n];e.points.push(r.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let n=0,i=e.points.length;n<i;n++){const r=e.points[n];this.points.push(new Te().fromArray(r))}return this}}var Rm=Object.freeze({__proto__:null,ArcCurve:OT,CatmullRomCurve3:kT,CubicBezierCurve:bv,CubicBezierCurve3:Cv,EllipseCurve:ah,LineCurve:Rv,LineCurve3:XT,QuadraticBezierCurve:Pv,QuadraticBezierCurve3:Nv,SplineCurve:Lv});class $T extends ni{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),n=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(n)){const i=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Rm[i](n,e))}return this}getPoint(e,n){const i=e*this.getLength(),r=this.getCurveLengths();let s=0;for(;s<r.length;){if(r[s]>=i){const o=r[s]-i,a=this.curves[s],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,n)}s++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let n=0;for(let i=0,r=this.curves.length;i<r;i++)n+=this.curves[i].getLength(),e.push(n);return this.cacheLengths=e,e}getSpacedPoints(e=40){const n=[];for(let i=0;i<=e;i++)n.push(this.getPoint(i/e));return this.autoClose&&n.push(n[0]),n}getPoints(e=12){const n=[];let i;for(let r=0,s=this.curves;r<s.length;r++){const o=s[r],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,l=o.getPoints(a);for(let c=0;c<l.length;c++){const u=l[c];i&&i.equals(u)||(n.push(u),i=u)}}return this.autoClose&&n.length>1&&!n[n.length-1].equals(n[0])&&n.push(n[0]),n}copy(e){super.copy(e),this.curves=[];for(let n=0,i=e.curves.length;n<i;n++){const r=e.curves[n];this.curves.push(r.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let n=0,i=this.curves.length;n<i;n++){const r=this.curves[n];e.curves.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let n=0,i=e.curves.length;n<i;n++){const r=e.curves[n];this.curves.push(new Rm[r.type]().fromJSON(r))}return this}}class co extends $T{constructor(e){super(),this.type="Path",this.currentPoint=new Te,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let n=1,i=e.length;n<i;n++)this.lineTo(e[n].x,e[n].y);return this}moveTo(e,n){return this.currentPoint.set(e,n),this}lineTo(e,n){const i=new Rv(this.currentPoint.clone(),new Te(e,n));return this.curves.push(i),this.currentPoint.set(e,n),this}quadraticCurveTo(e,n,i,r){const s=new Pv(this.currentPoint.clone(),new Te(e,n),new Te(i,r));return this.curves.push(s),this.currentPoint.set(i,r),this}bezierCurveTo(e,n,i,r,s,o){const a=new bv(this.currentPoint.clone(),new Te(e,n),new Te(i,r),new Te(s,o));return this.curves.push(a),this.currentPoint.set(s,o),this}splineThru(e){const n=[this.currentPoint.clone()].concat(e),i=new Lv(n);return this.curves.push(i),this.currentPoint.copy(e[e.length-1]),this}arc(e,n,i,r,s,o){const a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+a,n+l,i,r,s,o),this}absarc(e,n,i,r,s,o){return this.absellipse(e,n,i,i,r,s,o),this}ellipse(e,n,i,r,s,o,a,l){const c=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(e+c,n+u,i,r,s,o,a,l),this}absellipse(e,n,i,r,s,o,a,l){const c=new ah(e,n,i,r,s,o,a,l);if(this.curves.length>0){const f=c.getPoint(0);f.equals(this.currentPoint)||this.lineTo(f.x,f.y)}this.curves.push(c);const u=c.getPoint(1);return this.currentPoint.copy(u),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class wr extends qe{constructor(e=1,n=32,i=0,r=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:n,thetaStart:i,thetaLength:r},n=Math.max(3,n);const s=[],o=[],a=[],l=[],c=new P,u=new Te;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let f=0,h=3;f<=n;f++,h+=3){const p=i+f/n*r;c.x=e*Math.cos(p),c.y=e*Math.sin(p),o.push(c.x,c.y,c.z),a.push(0,0,1),u.x=(o[h]/e+1)/2,u.y=(o[h+1]/e+1)/2,l.push(u.x,u.y)}for(let f=1;f<=n;f++)s.push(f,f+1,0);this.setIndex(s),this.setAttribute("position",new Dt(o,3)),this.setAttribute("normal",new Dt(a,3)),this.setAttribute("uv",new Dt(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new wr(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class uc extends qe{constructor(e=.5,n=1,i=32,r=1,s=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:n,thetaSegments:i,phiSegments:r,thetaStart:s,thetaLength:o},i=Math.max(3,i),r=Math.max(1,r);const a=[],l=[],c=[],u=[];let f=e;const h=(n-e)/r,p=new P,v=new Te;for(let S=0;S<=r;S++){for(let m=0;m<=i;m++){const d=s+m/i*o;p.x=f*Math.cos(d),p.y=f*Math.sin(d),l.push(p.x,p.y,p.z),c.push(0,0,1),v.x=(p.x/n+1)/2,v.y=(p.y/n+1)/2,u.push(v.x,v.y)}f+=h}for(let S=0;S<r;S++){const m=S*(i+1);for(let d=0;d<i;d++){const g=d+m,x=g,E=g+i+1,L=g+i+2,C=g+1;a.push(x,E,C),a.push(E,L,C)}}this.setIndex(a),this.setAttribute("position",new Dt(l,3)),this.setAttribute("normal",new Dt(c,3)),this.setAttribute("uv",new Dt(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new uc(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class Ss extends qe{constructor(e=1,n=32,i=16,r=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:n,heightSegments:i,phiStart:r,phiLength:s,thetaStart:o,thetaLength:a},n=Math.max(3,Math.floor(n)),i=Math.max(2,Math.floor(i));const l=Math.min(o+a,Math.PI);let c=0;const u=[],f=new P,h=new P,p=[],v=[],S=[],m=[];for(let d=0;d<=i;d++){const g=[],x=d/i;let E=0;d===0&&o===0?E=.5/n:d===i&&l===Math.PI&&(E=-.5/n);for(let L=0;L<=n;L++){const C=L/n;f.x=-e*Math.cos(r+C*s)*Math.sin(o+x*a),f.y=e*Math.cos(o+x*a),f.z=e*Math.sin(r+C*s)*Math.sin(o+x*a),v.push(f.x,f.y,f.z),h.copy(f).normalize(),S.push(h.x,h.y,h.z),m.push(C+E,1-x),g.push(c++)}u.push(g)}for(let d=0;d<i;d++)for(let g=0;g<n;g++){const x=u[d][g+1],E=u[d][g],L=u[d+1][g],C=u[d+1][g+1];(d!==0||o>0)&&p.push(x,E,C),(d!==i-1||l<Math.PI)&&p.push(E,L,C)}this.setIndex(p),this.setAttribute("position",new Dt(v,3)),this.setAttribute("normal",new Dt(S,3)),this.setAttribute("uv",new Dt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ss(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}const Pm={enabled:!1,files:{},add:function(t,e){this.enabled!==!1&&(this.files[t]=e)},get:function(t){if(this.enabled!==!1)return this.files[t]},remove:function(t){delete this.files[t]},clear:function(){this.files={}}};class qT{constructor(e,n,i){const r=this;let s=!1,o=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=n,this.onError=i,this.itemStart=function(u){a++,s===!1&&r.onStart!==void 0&&r.onStart(u,o,a),s=!0},this.itemEnd=function(u){o++,r.onProgress!==void 0&&r.onProgress(u,o,a),o===a&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(u){r.onError!==void 0&&r.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,f){return c.push(u,f),this},this.removeHandler=function(u){const f=c.indexOf(u);return f!==-1&&c.splice(f,2),this},this.getHandler=function(u){for(let f=0,h=c.length;f<h;f+=2){const p=c[f],v=c[f+1];if(p.global&&(p.lastIndex=0),p.test(u))return v}return null}}}const YT=new qT;class ch{constructor(e){this.manager=e!==void 0?e:YT,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,n){const i=this;return new Promise(function(r,s){i.load(e,r,n,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}ch.DEFAULT_MATERIAL_NAME="__DEFAULT";class KT extends ch{constructor(e){super(e)}load(e,n,i,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,o=Pm.get(e);if(o!==void 0)return s.manager.itemStart(e),setTimeout(function(){n&&n(o),s.manager.itemEnd(e)},0),o;const a=Wo("img");function l(){u(),Pm.add(e,this),n&&n(this),s.manager.itemEnd(e)}function c(f){u(),r&&r(f),s.manager.itemError(e),s.manager.itemEnd(e)}function u(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),s.manager.itemStart(e),a.src=e,a}}class ZT extends ch{constructor(e){super(e)}load(e,n,i,r){const s=new Jt,o=new KT(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){s.image=a,s.needsUpdate=!0,n!==void 0&&n(s)},i,r),s}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Kf}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Kf);const QT=({progress:t,currentTime:e})=>{const n=Re.useRef(null),i=Re.useRef(t),r=Re.useRef(e);return Re.useEffect(()=>{i.current=t,r.current=e},[t,e]),Re.useEffect(()=>{const s=n.current;if(!s)return;const o=new Tv({canvas:s,antialias:!0,alpha:!0,powerPreference:"high-performance"});o.setSize(window.innerWidth,window.innerHeight),o.setPixelRatio(Math.min(window.devicePixelRatio,2)),o.setClearColor(0,0);const a=new Av,l=new xn(54,window.innerWidth/window.innerHeight,.1,1e3);l.position.set(0,0,50);const c=new Tt;a.add(c);const u=new Kt({color:61695,transparent:!0,opacity:.55}),f=new Tt;c.add(f);const h=[new P(-14,0,0),new P(-4,0,0),new P(4,0,0),new P(14,0,0)];f.add(new ao(new qe().setFromPoints(h),u)),[-8,-4,4,8].forEach(N=>{const U=5-Math.abs(N)*.2,J=[new P(-U,N,0),new P(-U+1.8,N,0),new P(U-1.8,N,0),new P(U,N,0)];f.add(new ao(new qe().setFromPoints(J),u))});const v=new Tt,S=new lo(new qe().setFromPoints(new co().absarc(0,0,.9,0,Math.PI*2,!0).getPoints(32)),new Kt({color:3718648,transparent:!0,opacity:.85})),m=new ao(new qe().setFromPoints([new P(-1.8,0,0),new P(-.9,0,0),new P(.9,0,0),new P(1.8,0,0),new P(0,.9,0),new P(0,1.8,0)]),new Kt({color:3718648,transparent:!0,opacity:.85}));v.add(S,m),c.add(v);const d=new Tt;d.position.set(20,-9,0),d.rotation.set(0,0,0),c.add(d);for(let N=1;N<=3;N++){const U=N*4.5,J=new lo(new qe().setFromPoints(new co().absarc(0,0,U,0,Math.PI*2,!0).getPoints(64)),new Kt({color:61695,transparent:!0,opacity:.35-N*.08}));d.add(J)}const g=new Kt({color:61695,transparent:!0,opacity:.2}),x=new qe().setFromPoints([new P(-14.5,0,0),new P(14.5,0,0),new P(0,-14.5,0),new P(0,14.5,0)]);d.add(new ao(x,g));const E=new Tt;d.add(E);const L=new Er(new qe().setFromPoints([new P(0,0,.05),new P(14.5,0,.05)]),new Kt({color:3718648,transparent:!0,opacity:.95}));E.add(L);const C=new it(new wr(14.5,32,0,.25),new _t({color:61695,transparent:!0,opacity:.25,side:bt}));E.add(C);const A=new it(new wr(14.5,32,.25,.35),new _t({color:61695,transparent:!0,opacity:.12,side:bt}));E.add(A);const R=new it(new wr(14.5,32,.6,.45),new _t({color:165063,transparent:!0,opacity:.05,side:bt}));E.add(R);const j=[{x:5,y:7,label:"BUD"},{x:-7,y:4,label:"BEG"},{x:3,y:-6,label:"OTP"},{x:-6,y:-5,label:"SOF"}],M=[];j.forEach(N=>{const U=new _t({color:3718648,transparent:!0,opacity:.4}),J=new it(new wr(.38,16),U);J.position.set(N.x,N.y,.05),d.add(J);const te=(Math.atan2(N.y,N.x)+Math.PI*2)%(Math.PI*2);M.push({mesh:J,mat:U,angle:te})});const T=new Tt;a.add(T);const W=[];for(let N=0;N<=40;N++){const U=N/40;W.push(new P(-25+U*40,15-U*20,(1-U)*10))}const V=new Er(new qe().setFromPoints(W),new Kt({color:3718648,transparent:!0,opacity:.65}));T.add(V);const Y=new Tt;Y.position.set(0,-6,0),T.add(Y);const ee=new lo(new qe().setFromPoints(new co().absarc(0,0,7.5,0,Math.PI*2,!0).getPoints(64)),new Kt({color:61695,transparent:!0,opacity:.7})),G=new lo(new qe().setFromPoints(new co().absarc(0,0,11.5,0,Math.PI*2,!0).getPoints(64)),new Kt({color:3718648,transparent:!0,opacity:.4}));Y.add(ee,G);const Q=180,I=new qe,K=new Float32Array(Q*3),Z=new Float32Array(Q*3);for(let N=0;N<Q;N++){const U=N*3,J=N/Q*Math.PI*2,te=6+Math.random()*16;K[U]=Math.cos(J)*te*1.5,K[U+1]=Math.sin(J)*te*.6-6,K[U+2]=(Math.random()-.5)*6,N%2===0?(Z[U]=1,Z[U+1]=.85,Z[U+2]=.3):(Z[U]=.95,Z[U+1]=.2,Z[U+2]=.25)}I.setAttribute("position",new Xt(K,3)),I.setAttribute("color",new Xt(Z,3));const oe=new pl(I,new Mo({size:.45,vertexColors:!0,transparent:!0,opacity:.75}));T.add(oe);const ye=new Tt;a.add(ye);const Fe=new it(new Yi(32,.12),new _t({color:1096065,transparent:!0,opacity:.85,side:bt}));ye.add(Fe);const $=new qe().setFromPoints([new P(0,16,0),new P(-16,0,0),new P(16,0,0)]),ie=new _t({color:1096065,transparent:!0,opacity:.08,side:bt}),le=new it($,ie);ye.add(le);const de=new Kt({color:1096065,transparent:!0,opacity:.75}),be=new Tt;[[-6,6],[6,6],[-6,-6],[6,-6]].forEach(([N,U])=>{const J=Math.sign(N),te=Math.sign(U),ce=[new P(N-J*2,U,0),new P(N,U,0),new P(N,U-te*2,0)];be.add(new Er(new qe().setFromPoints(ce),de))}),be.position.set(0,1,0),ye.add(be);const Me=new Tt;a.add(Me);const Pe={BUCAREST:new P(12,-4,2),PARIS:new P(-14,2,4),FRANKFURT:new P(-4,4,3),LONDON:new P(-16,8,3),AMSTERDAM:new P(-9,7,3)};function je(N,U,J){const te=new P().addVectors(N,U).multiplyScalar(.5);te.y+=J,te.z+=J*.4;const ce=new Nv(N,te,U),Ue=ce.getPoints(50);return{curve:ce,points:Ue}}const He=[{start:Pe.BUCAREST,end:Pe.PARIS,height:9.5,color:61695},{start:Pe.BUCAREST,end:Pe.FRANKFURT,height:7,color:3718648},{start:Pe.BUCAREST,end:Pe.AMSTERDAM,height:8,color:61695},{start:Pe.PARIS,end:Pe.LONDON,height:4,color:1096065}],D=[];He.forEach(N=>{const{curve:U,points:J}=je(N.start,N.end,N.height);D.push(U);const te=new Er(new qe().setFromPoints(J),new Kt({color:N.color,transparent:!0,opacity:.65}));Me.add(te)});const Ut=14,Oe=[],Ve=new Ss(.28,12,12),Ae=new _t({color:61695});for(let N=0;N<Ut;N++){const U=new it(Ve,Ae);Me.add(U),Oe.push(U)}const Ke=[Pe.BUCAREST,Pe.PARIS],Ce=[];Ke.forEach((N,U)=>{for(let J=0;J<2;J++){const te=new it(new uc(.6+J*.8,.72+J*.8,32),new _t({color:U===0?61695:1096065,side:bt,transparent:!0,opacity:.8}));te.position.copy(N),Me.add(te),Ce.push(te)}});let b;const y=N=>{if(r.current=N,i.current=Math.min(1,Math.max(0,N/on)),c.visible=N>=0&&N<22.8,c.visible){const J=-N*1.45;E.rotation.z=J;const te=(-J%(Math.PI*2)+Math.PI*2)%(Math.PI*2);M.forEach(Ue=>{const se=(te-Ue.angle+Math.PI*2)%(Math.PI*2);if(se<.6){const pe=1-se/.6;Ue.mat.opacity=.4+pe*.6,Ue.mesh.scale.setScalar(1+pe*.4)}else Ue.mat.opacity=.4,Ue.mesh.scale.setScalar(1)}),v.position.x=Math.sin(N*.8)*.8,v.position.y=Math.cos(N*.6)*.5;const ce=N>21?Math.max(0,(22.8-N)/1.8):1;u.opacity=.55*ce}if(T.visible=N>=21.5&&N<44.8,T.visible){Y.rotation.z=N*.45;const U=I.attributes.position.array;for(let J=0;J<Q;J++){const te=J*3;U[te+2]+=J%2===0?.02:-.02,U[te+2]>3&&(U[te+2]=-3),U[te+2]<-3&&(U[te+2]=3)}I.attributes.position.needsUpdate=!0}if(ye.visible=N>=43.8&&N<67.5,ye.visible){const U=Math.sin(N*2.6)*5.5+1;Fe.position.y=U,le.position.y=(U+16)*.5-8;const J=N>66?(67.5-N)/1.5:N<45?(N-43.8)/1.2:1;Fe.material.opacity=.85*Math.max(0,J)}Me.visible=N>=66.5,Me.visible&&(Oe.forEach((U,J)=>{const te=J%D.length,ce=D[te],Ue=.08+J%3*.02,se=((N-66.5)*Ue+J*.18)%1,pe=ce.getPoint(se);U.position.copy(pe)}),Ce.forEach((U,J)=>{const te=1+Math.sin(N*3.5+J*1.5)*.25;U.scale.set(te,te,1)})),o.render(a,l)},O=N=>{b=requestAnimationFrame(O),y(r.current)};b=requestAnimationFrame(O),window.renderSceneAt=N=>{y(N)};const q=()=>{l.aspect=window.innerWidth/window.innerHeight,l.updateProjectionMatrix(),o.setSize(window.innerWidth,window.innerHeight)};return window.addEventListener("resize",q),()=>{cancelAnimationFrame(b),window.removeEventListener("resize",q),delete window.renderSceneAt,o.dispose(),a.clear()}},[]),_.jsx("canvas",{ref:n,className:"fixed top-0 left-0 w-full h-full z-10 pointer-events-none"})},JT=({currentTime:t})=>{const e=Re.useRef(null),n=Re.useRef(null),i=Re.useRef(t);return Re.useEffect(()=>{i.current=t},[t]),Re.useEffect(()=>{const r=n.current;if(!r)return;const s=new Tv({canvas:r,antialias:!0,alpha:!0,powerPreference:"high-performance"});s.setSize(window.innerWidth,window.innerHeight),s.setPixelRatio(Math.min(window.devicePixelRatio,2)),s.toneMapping=Yg,s.toneMappingExposure=1.3;const o=new Av,a=new xn(50,window.innerWidth/window.innerHeight,.1,1e3);a.position.set(0,0,50);const l=new ZT,c=l.load("./assets/images/act1_airplane.jpg"),u=l.load("./assets/images/act2_plane_landing_bucharest.jpg"),f=l.load("./assets/images/act3_cabis_thomas_gate.jpg"),h=l.load("./assets/images/act4_radiance.jpg"),p=new Tt;o.add(p);const v=new Yi(96,54),S=new _t({map:c,transparent:!0,opacity:1}),m=new it(v,S);m.position.z=-10,p.add(m);const d=new _t({map:u,transparent:!0,opacity:0}),g=new it(v,d);g.position.z=-10,p.add(g);const x=new _t({map:f,transparent:!0,opacity:0}),E=new it(v,x);E.position.z=-10,p.add(E);const L=new _t({map:h,transparent:!0,opacity:0}),C=new it(v,L);C.position.z=-10,p.add(C);const A=45,R=new qe,j=new Float32Array(A*3),M=new Float32Array(A);for(let y=0;y<A;y++){const O=y*3;j[O]=(Math.random()-.5)*80,j[O+1]=(Math.random()-.5)*40,j[O+2]=5+Math.random()*30,M[y]=4+Math.random()*8}R.setAttribute("position",new Xt(j,3));const T=new Mo({color:16777215,size:6,transparent:!0,opacity:.18,blending:mr}),W=new pl(R,T);o.add(W);const V=400,Y=new qe,ee=new Float32Array(V*3),G=new Float32Array(V*3);for(let y=0;y<V;y++){const O=y*3;ee[O]=(Math.random()-.5)*70,ee[O+1]=-12+(Math.random()-.5)*14,ee[O+2]=(Math.random()-.5)*20,y%3===0?(G[O]=1,G[O+1]=.2,G[O+2]=.2):(G[O]=1,G[O+1]=.85,G[O+2]=.35)}Y.setAttribute("position",new Xt(ee,3)),Y.setAttribute("color",new Xt(G,3));const Q=new pl(Y,new Mo({size:.75,vertexColors:!0,transparent:!0,opacity:.85,blending:mr}));o.add(Q);const I=new Tt;o.add(I);const K=new it(new Yi(36,.35),new _t({color:1096065,transparent:!0,opacity:.95,side:bt}));I.add(K);const Z=new it(new Yi(36,3.5),new _t({color:1096065,transparent:!0,opacity:.3,side:bt,blending:mr}));I.add(Z);const oe=38,ye=new qe,Fe=new Float32Array(oe*3);for(let y=0;y<oe;y++){const O=y*3,q=y/oe*Math.PI*2,N=4.2+y%3*.4,U=5.8+y%2*.5;Fe[O]=Math.cos(q)*N,Fe[O+1]=2.5+Math.sin(q)*U,Fe[O+2]=2+(Math.random()-.5)*1.5}ye.setAttribute("position",new Xt(Fe,3));const $=new pl(ye,new Mo({color:61695,size:.4,transparent:!0,opacity:.85,blending:mr}));I.add($);const ie=new Tt;o.add(ie);const le=new P(12,-4,0),de=[{name:"Paris",pos:new P(-14,6,0),color:1096065},{name:"London",pos:new P(-18,12,0),color:3718648},{name:"Frankfurt",pos:new P(-4,8,0),color:61695},{name:"Rome",pos:new P(-3,-10,0),color:16096779},{name:"Warsaw",pos:new P(8,10,0),color:3718648},{name:"Amsterdam",pos:new P(-8,14,0),color:3718648}],be=[];de.forEach(y=>{const O=new P().addVectors(le,y.pos).multiplyScalar(.5).add(new P(0,8,6)),q=new Cv(le,O,O,y.pos);be.push(q);const N=new Er(new qe().setFromPoints(q.getPoints(50)),new Kt({color:y.color,transparent:!0,opacity:.85,blending:mr}));ie.add(N);const U=new it(new Ss(.5,12,12),new _t({color:y.color}));U.position.copy(y.pos),ie.add(U)});const Me=new it(new Ss(.8,16,16),new _t({color:16498468}));Me.position.copy(le),ie.add(Me);const Pe=new it(new uc(.6,1.2,36),new _t({color:16498468,transparent:!0,opacity:.9,side:bt}));Pe.position.copy(le),ie.add(Pe);const je=[];for(let y=0;y<16;y++){const O=new it(new Ss(.35,12,12),new _t({color:y%2===0?61695:16498468}));ie.add(O),je.push(O)}const He=new Tt;o.add(He);const D=new Kt({color:61695,transparent:!0,opacity:.75}),Ut=[new P(-14,0,10),new P(-4,0,10),new P(4,0,10),new P(14,0,10)];He.add(new ao(new qe().setFromPoints(Ut),D));const Oe=new Tt;Oe.position.set(24,-12,10),He.add(Oe);for(let y=1;y<=3;y++)Oe.add(new lo(new qe().setFromPoints(new co().absarc(0,0,y*4,0,Math.PI*2,!0).getPoints(36)),new Kt({color:3718648,transparent:!0,opacity:.35})));const Ve=new it(new wr(12,32,0,.45),new _t({color:61695,transparent:!0,opacity:.22,side:bt}));Oe.add(Ve);let Ae;const Ke=y=>{const q=(N,U)=>y<N-1.4||y>U?0:y<N?Dp.smoothstep((y-(N-1.4))/1.4,0,1):y>U-1.4?1-Dp.smoothstep((y-(U-1.4))/1.4,0,1):1;if(S.opacity=q(0,22.5),d.opacity=q(22.5,44.5),x.opacity=q(44.5,67.5),L.opacity=q(67.5,85),y<22.5){if(y<7){const N=y/7;a.position.set(Math.sin(y*1.5)*.4,2+N*1.5,42-N*4),a.rotation.z=Math.sin(y*.8)*.02}else if(y<15){const N=(y-7)/8;a.position.set(4-N*8,4+Math.sin(y*.5)*1.2,46),a.rotation.z=-.04+N*.08}else{const N=(y-15)/7.5;a.position.set(Math.sin(y*.6)*2,3,44-N*6),a.rotation.z=Math.sin(y*.9)*.015}m.position.x=Math.sin(y*.4)*1.2,m.position.y=Math.cos(y*.3)*.8}else if(y<44.5)if(y<30){const N=(y-22.5)/7.5;a.position.set(Math.sin(y*.4)*3,8-N*6,48-N*5),a.rotation.z=Math.sin(y*.7)*.02}else if(y<38){const N=(y-30)/8;a.position.set(-4+N*8,2,42),a.rotation.z=.02}else{const N=(y-38)/6.5;a.position.set(0,1+N*2,40-N*4),a.rotation.z=0}else if(y<67.5)if(y<52){const N=(y-44.5)/7.5;a.position.set(0,1,46-N*6),a.rotation.z=0}else if(y<60)a.position.set(Math.sin(y*.5)*.8,2,38),a.rotation.z=0;else{const N=(y-60)/7.5;a.position.set(0,1.5,36-N*6),a.rotation.z=0}else if(y<74){const N=(y-67.5)/6.5;a.position.set(2,4,38+N*10),a.rotation.z=-N*.03}else if(y<80)a.position.set(1+Math.sin(y*.4)*2,6,48),a.rotation.z=-.03;else{const N=(y-80)/5;a.position.set(0,5,48-N*3),a.rotation.z=0}if(W.visible=y<44.5,W.visible){const N=R.attributes.position.array;for(let U=0;U<A;U++){const J=U*3;N[J]-=.35,N[J]<-50&&(N[J]=50)}R.attributes.position.needsUpdate=!0}if(Q.visible=y>=21&&y<45,Q.visible){const N=Y.attributes.position.array;for(let U=0;U<V;U++){const J=U*3;N[J]+=U%2===0?.35:-.35,N[J]>35&&(N[J]=-35),N[J]<-35&&(N[J]=35)}Y.attributes.position.needsUpdate=!0}if(I.visible=y>=44&&y<67.5,I.visible){const N=Math.sin(y*3.5)*4.8+2.5;K.position.y=N,Z.position.y=N}if(ie.visible=y>=66.5,ie.visible){const N=(y-67)*1.5%1;Pe.scale.setScalar(1+N*3.8),Pe.material.opacity=Math.max(0,(1-N)*.9),je.forEach((U,J)=>{const te=be[J%be.length],ce=.16+J%3*.04,Ue=((y-67)*ce+J*.15)%1;U.position.copy(te.getPoint(Ue))})}Ve.rotation.z=-y*1.8,s.render(o,a)},Ce=()=>{Ae=requestAnimationFrame(Ce),Ke(i.current)};Ae=requestAnimationFrame(Ce),window.renderParallaxDirectorAt=y=>{Ke(y)};const b=()=>{a.aspect=window.innerWidth/window.innerHeight,a.updateProjectionMatrix(),s.setSize(window.innerWidth,window.innerHeight)};return window.addEventListener("resize",b),()=>{cancelAnimationFrame(Ae),window.removeEventListener("resize",b),delete window.renderParallaxDirectorAt,s.dispose(),o.clear()}},[]),_.jsx("div",{ref:e,className:"fixed inset-0 w-full h-full overflow-hidden bg-black select-none pointer-events-none",children:_.jsx("canvas",{ref:n,className:"w-full h-full block"})})},eA=({currentTime:t,onJumpToChapter:e})=>{let n=0;t>=67.5?n=3:t>=44.5?n=2:t>=22.5&&(n=1);const i=yn[n];return Math.max(0,Math.min(1,(t-i.tStart)/(i.tEnd-i.tStart))),_.jsxs("div",{className:"fixed inset-0 w-full h-full overflow-y-auto overflow-x-hidden bg-black text-white font-sans select-none flex flex-col justify-between px-4 sm:px-8 md:px-14 pt-4 pb-24 md:pb-28 z-10",children:[_.jsx("div",{className:"absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,rgba(16,185,129,0.07)_0%,transparent_60%)] pointer-events-none"}),_.jsx("div",{className:"absolute inset-0 bg-[radial-gradient(circle_at_80%_80%,rgba(0,240,255,0.06)_0%,transparent_50%)] pointer-events-none"}),_.jsxs("header",{className:"sticky top-0 z-30 flex items-center justify-between w-full border-b border-white/10 pb-4 pt-1 bg-black/80 backdrop-blur-xl",children:[_.jsxs("div",{className:"flex items-center gap-3 sm:gap-4",children:[_.jsx("div",{className:"w-2.5 sm:w-3 h-2.5 sm:h-3 rounded-full bg-emerald-400 shadow-[0_0_12px_rgba(52,211,153,0.8)] animate-pulse"}),_.jsxs("div",{className:"flex flex-col",children:[_.jsx("span",{className:"font-mono text-[10px] sm:text-xs tracking-[0.25em] text-slate-400 uppercase",children:"Grand Prix V.I.E Roumanie 2026"}),_.jsx("span",{className:"text-xs sm:text-sm font-semibold tracking-tight text-slate-200",children:"Thomas MARTINEZ — Candidat Officiel"})]})]}),_.jsx("div",{className:"absolute left-1/2 -translate-x-1/2 h-8 p-1 rounded-full bg-slate-900/90 border border-white/10 backdrop-blur-xl flex items-center gap-1",children:yn.map((r,s)=>_.jsxs("button",{type:"button",onClick:()=>e==null?void 0:e(s),className:`h-6 px-3 sm:px-3.5 rounded-full text-xs font-sans whitespace-nowrap transition-all duration-200 cursor-pointer ${n===s?"bg-gradient-to-r from-emerald-400 to-teal-400 text-slate-950 font-semibold shadow-md shadow-emerald-500/20":"text-slate-400 hover:text-white hover:bg-white/[0.08]"}`,children:["Acte 0",s+1]},s))}),_.jsxs("div",{className:"font-mono text-xs tracking-widest text-slate-400",children:[Math.floor(t/60),":",(t%60).toFixed(0).padStart(2,"0")," / 01:25"]})]}),_.jsxs("main",{className:"relative z-20 my-auto flex flex-col items-center justify-center text-center max-w-5xl mx-auto w-full py-4 sm:py-6",children:[_.jsx("div",{className:"inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/5 border border-white/10 mb-3 sm:mb-4 backdrop-blur-md",children:_.jsxs("span",{className:"font-mono text-[11px] sm:text-xs font-medium tracking-[0.2em] uppercase text-emerald-400",children:[n===0&&"01 // ALTITUDE DE CROISIÈRE — 30 000 FT",n===1&&"02 // IMMERSION & GOUVERNANCE AGILE",n===2&&"03 // PORTIQUES BIOMÉTRIQUES CABIS",n===3&&"04 // RAYONNEMENT EUROPÉEN"]})}),_.jsxs("h1",{className:"text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.12] max-w-4xl mb-4 sm:mb-6",children:[n===0&&_.jsxs(_.Fragment,{children:["Contrôler les trajectoires dans le ciel."," ",_.jsx("span",{className:"bg-gradient-to-r from-cyan-400 via-sky-300 to-emerald-400 bg-clip-text text-transparent",children:"Plus de 100 000 vols quotidiens."})]}),n===1&&_.jsxs(_.Fragment,{children:["Plonger au cœur de l'écosystème roumain."," ",_.jsx("span",{className:"bg-gradient-to-r from-amber-400 via-yellow-200 to-emerald-400 bg-clip-text text-transparent",children:"Synergie biculturelle & vélocité agile."})]}),n===2&&_.jsxs(_.Fragment,{children:["Du radar aérien aux portiques biométriques."," ",_.jsx("span",{className:"bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400 bg-clip-text text-transparent",children:"Sécuriser les frontières Schengen."})]}),n===3&&_.jsxs(_.Fragment,{children:["L'excellence française portée par l'énergie roumaine."," ",_.jsx("span",{className:"bg-gradient-to-r from-yellow-300 via-amber-400 to-emerald-400 bg-clip-text text-transparent",children:"Une nouvelle trajectoire."})]})]}),_.jsx("div",{className:"flex items-center justify-center gap-1 sm:gap-1.5 h-8 my-2 sm:my-3",children:Array.from({length:32}).map((r,s)=>{const o=Math.sin(t*4.5+s*.35)*.5+.5,a=6+o*26;return _.jsx("div",{className:"w-1 sm:w-1.5 rounded-full transition-all duration-75",style:{height:`${a}px`,backgroundColor:n===1?"#fbbf24":n===2?"#34d399":"#38bdf8",opacity:.4+o*.6}},s)})}),_.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 w-full max-w-4xl mt-2 sm:mt-4",children:[n===0&&_.jsxs(_.Fragment,{children:[_.jsxs("div",{className:"p-3.5 sm:p-4 rounded-xl bg-gradient-to-b from-white/10 to-white/5 border border-white/15 backdrop-blur-xl text-left",children:[_.jsx("div",{className:"text-2xl sm:text-3xl lg:text-4xl font-extrabold text-cyan-400 font-mono tracking-tight",children:"30 000 FT"}),_.jsx("div",{className:"text-[10px] sm:text-xs font-mono tracking-wider text-slate-400 uppercase mt-1",children:"Altitude de croisière"}),_.jsx("div",{className:"text-[11px] sm:text-xs text-slate-300 mt-1.5 leading-snug",children:"Prise de hauteur & migration des flux critiques AMS."})]}),_.jsxs("div",{className:"p-3.5 sm:p-4 rounded-xl bg-gradient-to-b from-white/10 to-white/5 border border-white/15 backdrop-blur-xl text-left",children:[_.jsx("div",{className:"text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white font-mono tracking-tight",children:"100 000+"}),_.jsx("div",{className:"text-[10px] sm:text-xs font-mono tracking-wider text-slate-400 uppercase mt-1",children:"Vols surveillés / jour"}),_.jsx("div",{className:"text-[11px] sm:text-xs text-slate-300 mt-1.5 leading-snug",children:"Architecture haute disponibilité & zéro tolérance à la panne."})]}),_.jsxs("div",{className:"p-3.5 sm:p-4 rounded-xl bg-gradient-to-b from-white/10 to-white/5 border border-white/15 backdrop-blur-xl text-left",children:[_.jsx("div",{className:"text-2xl sm:text-3xl lg:text-4xl font-extrabold text-emerald-400 font-mono tracking-tight",children:"DOUBLE RÔLE"}),_.jsx("div",{className:"text-[10px] sm:text-xs font-mono tracking-wider text-slate-400 uppercase mt-1",children:"Full-Stack & Scrum Master"}),_.jsx("div",{className:"text-[11px] sm:text-xs text-slate-300 mt-1.5 leading-snug",children:"Développement réactif et pilotage agile de l'équipe."})]})]}),n===1&&_.jsxs(_.Fragment,{children:[_.jsxs("div",{className:"p-3.5 sm:p-4 rounded-xl bg-gradient-to-b from-white/10 to-white/5 border border-white/15 backdrop-blur-xl text-left",children:[_.jsx("div",{className:"text-2xl sm:text-3xl lg:text-4xl font-extrabold text-amber-400 font-mono tracking-tight",children:"+35%"}),_.jsx("div",{className:"text-[10px] sm:text-xs font-mono tracking-wider text-slate-400 uppercase mt-1",children:"Vélocité d'équipe"}),_.jsx("div",{className:"text-[11px] sm:text-xs text-slate-300 mt-1.5 leading-snug",children:"Gouvernance Scrum réactive & suppression des goulets."})]}),_.jsxs("div",{className:"p-3.5 sm:p-4 rounded-xl bg-gradient-to-b from-white/10 to-white/5 border border-white/15 backdrop-blur-xl text-left",children:[_.jsx("div",{className:"text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white font-mono tracking-tight",children:"12 INGÉNIEURS"}),_.jsx("div",{className:"text-[10px] sm:text-xs font-mono tracking-wider text-slate-400 uppercase mt-1",children:"Équipe biculturelle"}),_.jsx("div",{className:"text-[11px] sm:text-xs text-slate-300 mt-1.5 leading-snug",children:"Synergie quotidienne talentueuse et francophile à Bucarest."})]}),_.jsxs("div",{className:"p-3.5 sm:p-4 rounded-xl bg-gradient-to-b from-white/10 to-white/5 border border-white/15 backdrop-blur-xl text-left",children:[_.jsx("div",{className:"text-2xl sm:text-3xl lg:text-4xl font-extrabold text-emerald-400 font-mono tracking-tight",children:"2 SEMAINES"}),_.jsx("div",{className:"text-[10px] sm:text-xs font-mono tracking-wider text-slate-400 uppercase mt-1",children:"Cadence de sprint"}),_.jsx("div",{className:"text-[11px] sm:text-xs text-slate-300 mt-1.5 leading-snug",children:"Itérations rapides & déploiement continu sans friction."})]})]}),n===2&&_.jsxs(_.Fragment,{children:[_.jsxs("div",{className:"p-3.5 sm:p-4 rounded-xl bg-gradient-to-b from-white/10 to-white/5 border border-white/15 backdrop-blur-xl text-left",children:[_.jsx("div",{className:"text-2xl sm:text-3xl lg:text-4xl font-extrabold text-emerald-400 font-mono tracking-tight",children:"100%"}),_.jsx("div",{className:"text-[10px] sm:text-xs font-mono tracking-wider text-slate-400 uppercase mt-1",children:"Conformité Schengen"}),_.jsx("div",{className:"text-[11px] sm:text-xs text-slate-300 mt-1.5 leading-snug",children:"Passage e-Gates automatisé & sécurisé aux frontières."})]}),_.jsxs("div",{className:"p-3.5 sm:p-4 rounded-xl bg-gradient-to-b from-white/10 to-white/5 border border-white/15 backdrop-blur-xl text-left",children:[_.jsx("div",{className:"text-2xl sm:text-3xl lg:text-4xl font-extrabold text-cyan-400 font-mono tracking-tight",children:"99.4%"}),_.jsx("div",{className:"text-[10px] sm:text-xs font-mono tracking-wider text-slate-400 uppercase mt-1",children:"Précision Biométrique"}),_.jsx("div",{className:"text-[11px] sm:text-xs text-slate-300 mt-1.5 leading-snug",children:"Reconnaissance faciale ICAO 9303 haute sécurité temps réel."})]}),_.jsxs("div",{className:"p-3.5 sm:p-4 rounded-xl bg-gradient-to-b from-white/10 to-white/5 border border-white/15 backdrop-blur-xl text-left",children:[_.jsx("div",{className:"text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white font-mono tracking-tight",children:"END-TO-END"}),_.jsx("div",{className:"text-[10px] sm:text-xs font-mono tracking-wider text-slate-400 uppercase mt-1",children:"Caméra à l'actionneur"}),_.jsx("div",{className:"text-[11px] sm:text-xs text-slate-300 mt-1.5 leading-snug",children:"Intégration du logiciel avec les portiques physiques."})]})]}),n===3&&_.jsxs(_.Fragment,{children:[_.jsxs("div",{className:"p-3.5 sm:p-4 rounded-xl bg-gradient-to-b from-white/10 to-white/5 border border-white/15 backdrop-blur-xl text-left",children:[_.jsx("div",{className:"text-2xl sm:text-3xl lg:text-4xl font-extrabold text-amber-300 font-mono tracking-tight",children:"14 HUBS"}),_.jsx("div",{className:"text-[10px] sm:text-xs font-mono tracking-wider text-slate-400 uppercase mt-1",children:"Rayonnement Européen"}),_.jsx("div",{className:"text-[11px] sm:text-xs text-slate-300 mt-1.5 leading-snug",children:"Aéroports internationaux connectés au savoir-faire franco-roumain."})]}),_.jsxs("div",{className:"p-3.5 sm:p-4 rounded-xl bg-gradient-to-b from-white/10 to-white/5 border border-white/15 backdrop-blur-xl text-left",children:[_.jsx("div",{className:"text-2xl sm:text-3xl lg:text-4xl font-extrabold text-emerald-400 font-mono tracking-tight",children:"LEADERSHIP"}),_.jsx("div",{className:"text-[10px] sm:text-xs font-mono tracking-wider text-slate-400 uppercase mt-1",children:"Trajectoire Transformée"}),_.jsx("div",{className:"text-[11px] sm:text-xs text-slate-300 mt-1.5 leading-snug",children:"Passage d'ingénieur logiciel à leader technique international."})]}),_.jsxs("div",{className:"p-3.5 sm:p-4 rounded-xl bg-gradient-to-b from-white/10 to-white/5 border border-white/15 backdrop-blur-xl text-left",children:[_.jsx("div",{className:"text-2xl sm:text-3xl lg:text-4xl font-extrabold text-cyan-400 font-mono tracking-tight",children:"2026"}),_.jsx("div",{className:"text-[10px] sm:text-xs font-mono tracking-wider text-slate-400 uppercase mt-1",children:"Grand Prix V.I.E"}),_.jsx("div",{className:"text-[11px] sm:text-xs text-slate-300 mt-1.5 leading-snug",children:"L'impact concret et durable de l'expérience roumaine."})]})]})]})]}),_.jsx("footer",{className:"relative z-20 w-full max-w-4xl mx-auto border-t border-white/10 pt-4 pb-2 text-center mt-4",children:_.jsxs("p",{className:"text-xs sm:text-sm md:text-base font-light text-slate-300 tracking-wide leading-relaxed",children:["« ",i.subtitles," »"]})})]})};/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tA=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),Iv=(...t)=>t.filter((e,n,i)=>!!e&&i.indexOf(e)===n).join(" ");/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var nA={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const iA=Re.forwardRef(({color:t="currentColor",size:e=24,strokeWidth:n=2,absoluteStrokeWidth:i,className:r="",children:s,iconNode:o,...a},l)=>Re.createElement("svg",{ref:l,...nA,width:e,height:e,stroke:t,strokeWidth:i?Number(n)*24/Number(e):n,className:Iv("lucide",r),...a},[...o.map(([c,u])=>Re.createElement(c,u)),...Array.isArray(s)?s:[s]]));/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vt=(t,e)=>{const n=Re.forwardRef(({className:i,...r},s)=>Re.createElement(iA,{ref:s,iconNode:e,className:Iv(`lucide-${tA(t)}`,i),...r}));return n.displayName=`${t}`,n};/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nm=vt("Activity",[["path",{d:"M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2",key:"169zse"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rA=vt("Award",[["path",{d:"m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526",key:"1yiouv"}],["circle",{cx:"12",cy:"8",r:"6",key:"1vp47v"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dv=vt("CircleCheck",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sA=vt("Compass",[["path",{d:"m16.24 7.76-1.804 5.411a2 2 0 0 1-1.265 1.265L7.76 16.24l1.804-5.411a2 2 0 0 1 1.265-1.265z",key:"9ktpf1"}],["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const oA=vt("Download",[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"7 10 12 15 17 10",key:"2ggqvy"}],["line",{x1:"12",x2:"12",y1:"15",y2:"3",key:"1vk2je"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Uv=vt("Fingerprint",[["path",{d:"M12 10a2 2 0 0 0-2 2c0 1.02-.1 2.51-.26 4",key:"1nerag"}],["path",{d:"M14 13.12c0 2.38 0 6.38-1 8.88",key:"o46ks0"}],["path",{d:"M17.29 21.02c.12-.6.43-2.3.5-3.02",key:"ptglia"}],["path",{d:"M2 12a10 10 0 0 1 18-6",key:"ydlgp0"}],["path",{d:"M2 16h.01",key:"1gqxmh"}],["path",{d:"M21.8 16c.2-2 .131-5.354 0-6",key:"drycrb"}],["path",{d:"M5 19.5C5.5 18 6 15 6 12a6 6 0 0 1 .34-2",key:"1tidbn"}],["path",{d:"M8.65 22c.21-.66.45-1.32.57-2",key:"13wd9y"}],["path",{d:"M9 6.8a6 6 0 0 1 9 5.2v2",key:"1fr1j5"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const aA=vt("Layers",[["path",{d:"m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z",key:"8b97xw"}],["path",{d:"m22 17.65-9.17 4.16a2 2 0 0 1-1.66 0L2 17.65",key:"dd6zsq"}],["path",{d:"m22 12.65-9.17 4.16a2 2 0 0 1-1.66 0L2 12.65",key:"ep9fru"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fv=vt("LockOpen",[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 9.9-1",key:"1mm8w8"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ov=vt("Lock",[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4",key:"fwvmzm"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lA=vt("MapPin",[["path",{d:"M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",key:"1r0f0z"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cA=vt("Maximize2",[["polyline",{points:"15 3 21 3 21 9",key:"mznyad"}],["polyline",{points:"9 21 3 21 3 15",key:"1avn1i"}],["line",{x1:"21",x2:"14",y1:"3",y2:"10",key:"ota7mn"}],["line",{x1:"3",x2:"10",y1:"21",y2:"14",key:"1atl0r"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uA=vt("Minimize2",[["polyline",{points:"4 14 10 14 10 20",key:"11kfnr"}],["polyline",{points:"20 10 14 10 14 4",key:"rlmsce"}],["line",{x1:"14",x2:"21",y1:"10",y2:"3",key:"o5lafz"}],["line",{x1:"3",x2:"10",y1:"21",y2:"14",key:"1atl0r"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dA=vt("Pause",[["rect",{x:"14",y:"4",width:"4",height:"16",rx:"1",key:"zuxfzm"}],["rect",{x:"6",y:"4",width:"4",height:"16",rx:"1",key:"1okwgv"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fA=vt("Plane",[["path",{d:"M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z",key:"1v9wt8"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hA=vt("Play",[["polygon",{points:"6 3 20 12 6 21 6 3",key:"1oa8hb"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pA=vt("Quote",[["path",{d:"M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z",key:"rib7q0"}],["path",{d:"M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z",key:"1ymkrd"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mA=vt("Radio",[["path",{d:"M4.9 19.1C1 15.2 1 8.8 4.9 4.9",key:"1vaf9d"}],["path",{d:"M7.8 16.2c-2.3-2.3-2.3-6.1 0-8.5",key:"u1ii0m"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}],["path",{d:"M16.2 7.8c2.3 2.3 2.3 6.1 0 8.5",key:"1j5fej"}],["path",{d:"M19.1 4.9C23 8.8 23 15.1 19.1 19",key:"10b0cb"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gA=vt("RotateCcw",[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kv=vt("ScanFace",[["path",{d:"M3 7V5a2 2 0 0 1 2-2h2",key:"aa7l1z"}],["path",{d:"M17 3h2a2 2 0 0 1 2 2v2",key:"4qcy5o"}],["path",{d:"M21 17v2a2 2 0 0 1-2 2h-2",key:"6vwrx8"}],["path",{d:"M7 21H5a2 2 0 0 1-2-2v-2",key:"ioqczr"}],["path",{d:"M8 14s1.5 2 4 2 4-2 4-2",key:"1y1vjs"}],["path",{d:"M9 9h.01",key:"1q5me6"}],["path",{d:"M15 9h.01",key:"x1ddxp"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zv=vt("ShieldCheck",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vA=vt("Volume2",[["path",{d:"M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z",key:"uqj9uw"}],["path",{d:"M16 9a5 5 0 0 1 0 6",key:"1q6k2b"}],["path",{d:"M19.364 18.364a9 9 0 0 0 0-12.728",key:"ijwkga"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xA=vt("VolumeX",[["path",{d:"M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z",key:"uqj9uw"}],["line",{x1:"22",x2:"16",y1:"9",y2:"15",key:"1ewh16"}],["line",{x1:"16",x2:"22",y1:"9",y2:"15",key:"5ykzw1"}]]),_A=({currentTime:t})=>{if(!(t>=44&&t<=67.5))return null;const n=t>=52.5;let i=1;t<45.5?i=Math.max(0,(t-44)/1.5):t>66&&(i=Math.max(0,(67.5-t)/1.5));const r=n?99.8:Math.min(99.4,Math.round((t-44.5)/8*75+24)),s=n?44:(Math.sin(t*3.8)*.5+.5)*46+34,o=n?50:Math.round((Math.cos(t*5.5)*.5+.5)*70+15),a=[{id:"L_EYE",x:40.8,y:43.2,label:"L_EYE"},{id:"R_EYE",x:68.5,y:45.6,label:"R_EYE"},{id:"GLABELLA",x:54.7,y:40.6,label:"GLABELLA"},{id:"NOSE_BRIDGE",x:55,y:46.2,label:"BRIDGE"},{id:"NOSE_TIP",x:56.4,y:54.5,label:"TIP"},{id:"NOSE_L",x:49.5,y:54.8,label:"NOSE_L"},{id:"NOSE_R",x:63,y:55.8,label:"NOSE_R"},{id:"L_BROW",x:39.2,y:36.4,label:"BROW_L"},{id:"R_BROW",x:69.3,y:39.1,label:"BROW_R"},{id:"L_MOUTH",x:45.9,y:64.8,label:"MOUTH_L"},{id:"R_MOUTH",x:62.4,y:66.4,label:"MOUTH_R"},{id:"MOUTH_MID",x:53.9,y:65.5,label:"LIPS"},{id:"CHIN",x:55,y:78.5,label:"CHIN"},{id:"L_JAW",x:32.1,y:58.3,label:"JAW_L"},{id:"R_JAW",x:77.6,y:62.9,label:"JAW_R"},{id:"L_TEMPLE",x:29.3,y:41.7,label:"TEMPLE_L"},{id:"R_TEMPLE",x:80.8,y:45.2,label:"TEMPLE_R"}],l=[{cx:32,cy:30},{cx:48,cy:22},{cx:64,cy:34},{cx:38,cy:46},{cx:52,cy:52},{cx:62,cy:62},{cx:44,cy:68},{cx:56,cy:78}];return _.jsx("div",{className:"absolute right-6 top-24 z-30 w-[350px] sm:w-[380px] pointer-events-none select-none transition-all duration-500 font-sans",style:{opacity:i},children:_.jsxs("div",{className:`relative rounded-2xl p-4 overflow-hidden backdrop-blur-2xl border shadow-[0_20px_50px_rgba(0,0,0,0.9)] transition-colors duration-700 ${n?"bg-slate-950/92 border-emerald-400/50 shadow-[0_0_35px_rgba(16,185,129,0.3)]":"bg-slate-950/92 border-cyan-400/40 shadow-[0_0_30px_rgba(0,240,255,0.2)]"}`,children:[_.jsx("div",{className:`absolute top-0 left-0 w-3.5 h-3.5 border-t-2 border-l-2 ${n?"border-emerald-400":"border-cyan-400"}`}),_.jsx("div",{className:`absolute top-0 right-0 w-3.5 h-3.5 border-t-2 border-r-2 ${n?"border-emerald-400":"border-cyan-400"}`}),_.jsx("div",{className:`absolute bottom-0 left-0 w-3.5 h-3.5 border-b-2 border-l-2 ${n?"border-emerald-400":"border-cyan-400"}`}),_.jsx("div",{className:`absolute bottom-0 right-0 w-3.5 h-3.5 border-b-2 border-r-2 ${n?"border-emerald-400":"border-cyan-400"}`}),_.jsxs("div",{className:"flex items-center justify-between pb-2.5 mb-3 border-b border-white/10 font-mono",children:[_.jsxs("div",{className:"flex items-center gap-2",children:[_.jsx("div",{className:`w-2 h-2 rounded-full ${n?"bg-emerald-400 animate-ping":"bg-cyan-400 animate-pulse"}`}),_.jsx("span",{className:`text-[10px] font-bold tracking-widest uppercase ${n?"text-emerald-300":"text-cyan-300"}`,children:"CABIS // BIOMETRICS HUD"})]}),_.jsxs("div",{className:"flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-white/5 border border-white/10 text-[9px] text-slate-300",children:[_.jsx(zv,{className:`w-3 h-3 ${n?"text-emerald-400":"text-cyan-400"}`}),_.jsx("span",{children:"ICAO 9303"})]})]}),_.jsxs("div",{className:"grid grid-cols-2 gap-3 mb-3",children:[_.jsxs("div",{className:"relative h-[200px] rounded-xl overflow-hidden bg-black border border-white/15 flex items-center justify-center",children:[_.jsx("div",{className:"absolute inset-0 opacity-15 pointer-events-none",style:{backgroundImage:"linear-gradient(to right, rgba(0,240,255,0.2) 1px, transparent 1px), linear-gradient(to bottom, rgba(0,240,255,0.2) 1px, transparent 1px)",backgroundSize:"16px 16px"}}),_.jsx("img",{src:"./assets/images/thomas_studio_portrait.png",alt:"Thomas Martinez Studio Portrait",className:`w-full h-full object-cover object-center pointer-events-none transition-all duration-700 ${n?"brightness-105 contrast-110 filter drop-shadow-[0_0_15px_rgba(16,185,129,0.35)]":"brightness-100 contrast-105"}`}),_.jsxs("div",{className:"absolute left-0 right-0 z-20 pointer-events-none transition-all duration-75",style:{top:`${s}%`},children:[_.jsx("div",{className:`h-[2px] w-full ${n?"bg-emerald-400 shadow-[0_0_12px_#10b981]":"bg-cyan-300 shadow-[0_0_10px_#00f0ff]"}`}),_.jsx("div",{className:`h-4 -mt-2 w-full opacity-35 blur-xs ${n?"bg-emerald-500":"bg-cyan-400"}`})]}),_.jsxs("svg",{className:"absolute inset-0 w-full h-full z-20 pointer-events-none",viewBox:"0 0 100 100",preserveAspectRatio:"none",children:[_.jsx("polygon",{points:"29.3,41.7 39.2,36.4 54.7,40.6 69.3,39.1 80.8,45.2 77.6,62.9 55.0,78.5 32.1,58.3",fill:n?"rgba(16, 185, 129, 0.12)":"rgba(0, 240, 255, 0.08)",stroke:n?"rgba(16, 185, 129, 0.7)":"rgba(0, 240, 255, 0.55)",strokeWidth:"0.6",strokeDasharray:n?"none":"2 2"}),_.jsx("polyline",{points:"39.2,36.4 54.7,40.6 69.3,39.1",fill:"none",stroke:n?"#10b981":"#00f0ff",strokeWidth:"0.5",opacity:"0.8"}),_.jsx("polyline",{points:"29.3,41.7 40.8,43.2 54.7,40.6 68.5,45.6 80.8,45.2",fill:"none",stroke:n?"#10b981":"#00f0ff",strokeWidth:"0.5",opacity:"0.75"}),_.jsx("line",{x1:"54.7",y1:"40.6",x2:"55.0",y2:"46.2",stroke:n?"#10b981":"#00f0ff",strokeWidth:"0.5",opacity:"0.8"}),_.jsx("line",{x1:"55.0",y1:"46.2",x2:"56.4",y2:"54.5",stroke:n?"#10b981":"#00f0ff",strokeWidth:"0.5",opacity:"0.8"}),_.jsx("polyline",{points:"49.5,54.8 56.4,54.5 63.0,55.8",fill:"none",stroke:n?"#10b981":"#00f0ff",strokeWidth:"0.5",opacity:"0.8"}),_.jsx("line",{x1:"56.4",y1:"54.5",x2:"53.9",y2:"65.5",stroke:n?"#10b981":"#00f0ff",strokeWidth:"0.5",opacity:"0.7"}),_.jsx("polyline",{points:"45.9,64.8 53.9,65.5 62.4,66.4",fill:"none",stroke:n?"#10b981":"#00f0ff",strokeWidth:"0.6",opacity:"0.85"}),_.jsx("line",{x1:"45.9",y1:"64.8",x2:"55.0",y2:"78.5",stroke:n?"#10b981":"#00f0ff",strokeWidth:"0.5",opacity:"0.7"}),_.jsx("line",{x1:"62.4",y1:"66.4",x2:"55.0",y2:"78.5",stroke:n?"#10b981":"#00f0ff",strokeWidth:"0.5",opacity:"0.7"}),_.jsx("line",{x1:"53.9",y1:"65.5",x2:"55.0",y2:"78.5",stroke:n?"#10b981":"#00f0ff",strokeWidth:"0.5",opacity:"0.7"}),_.jsxs("g",{stroke:n?"#10b981":"#00f0ff",strokeWidth:"0.6",fill:"none",opacity:"0.8",children:[_.jsx("path",{d:"M 37.5 41.5 L 37.5 40.5 L 39.0 40.5"}),_.jsx("path",{d:"M 42.5 40.5 L 44.0 40.5 L 44.0 41.5"}),_.jsx("path",{d:"M 37.5 45.0 L 37.5 46.0 L 39.0 46.0"}),_.jsx("path",{d:"M 42.5 46.0 L 44.0 46.0 L 44.0 45.0"}),_.jsx("path",{d:"M 65.5 43.5 L 65.5 42.5 L 67.0 42.5"}),_.jsx("path",{d:"M 70.0 42.5 L 71.5 42.5 L 71.5 43.5"}),_.jsx("path",{d:"M 65.5 47.5 L 65.5 48.5 L 67.0 48.5"}),_.jsx("path",{d:"M 70.0 48.5 L 71.5 48.5 L 71.5 47.5"})]}),a.map(c=>{const u=Math.abs(c.y-s)<7;return _.jsxs("g",{children:[u&&!n&&_.jsx("circle",{cx:c.x,cy:c.y,r:"3.2",fill:"rgba(0, 240, 255, 0.25)",stroke:"#00f0ff",strokeWidth:"0.4"}),n&&_.jsx("circle",{cx:c.x,cy:c.y,r:"2.2",fill:"rgba(16, 185, 129, 0.2)"}),_.jsx("circle",{cx:c.x,cy:c.y,r:u?"1.5":"1.1",fill:n?"#10b981":u?"#ffffff":"#00f0ff",stroke:n?"#047857":u?"#00f0ff":"#0891b2",strokeWidth:"0.3"})]},c.id)})]}),_.jsxs("div",{className:"absolute bottom-1.5 left-1.5 z-20 font-mono text-[8px] text-slate-200 bg-black/80 px-2 py-0.5 rounded border border-white/10 flex items-center gap-1",children:[_.jsx(kv,{className:`w-2.5 h-2.5 ${n?"text-emerald-400":"text-cyan-400"}`}),_.jsx("span",{children:n?"17/17 LOCKED":"3D MESH SCAN"})]})]}),_.jsxs("div",{className:"relative h-[200px] rounded-xl overflow-hidden bg-gradient-to-b from-slate-950 via-slate-900/80 to-slate-950 border border-white/15 flex flex-col items-center justify-center p-2",children:[_.jsxs("div",{className:"relative w-28 h-28 flex items-center justify-center",children:[_.jsxs("svg",{viewBox:"0 0 100 100",className:`w-full h-full transition-colors duration-500 ${n?"text-emerald-400":"text-cyan-400"}`,fill:"none",stroke:"currentColor",strokeWidth:"1.6",strokeLinecap:"round",children:[_.jsx("path",{d:"M 50 18 A 32 32 0 0 1 82 50 C 82 66 74 78 70 84",opacity:"0.4"}),_.jsx("path",{d:"M 18 50 A 32 32 0 0 1 50 18",opacity:"0.4"}),_.jsx("path",{d:"M 50 25 A 25 25 0 0 1 75 50 C 75 64 68 74 64 80",opacity:"0.6"}),_.jsx("path",{d:"M 25 50 A 25 25 0 0 1 50 25",opacity:"0.6"}),_.jsx("path",{d:"M 50 32 A 18 18 0 0 1 68 50 C 68 60 62 70 58 76",opacity:"0.8"}),_.jsx("path",{d:"M 32 50 A 18 18 0 0 1 50 32",opacity:"0.8"}),_.jsx("path",{d:"M 50 39 A 11 11 0 0 1 61 50 C 61 58 56 64 54 70",opacity:"0.9"}),_.jsx("path",{d:"M 39 50 A 11 11 0 0 1 50 39",opacity:"0.9"}),_.jsx("path",{d:"M 50 46 A 4 4 0 0 1 54 50 C 54 54 52 58 50 64",strokeWidth:"2"}),_.jsx("path",{d:"M 46 50 A 4 4 0 0 1 50 46",strokeWidth:"2"}),l.map((c,u)=>_.jsx("circle",{cx:c.cx,cy:c.cy,r:n?1.8:1.4,fill:n?"#10b981":"#00f0ff"},u))]}),_.jsxs("div",{className:"absolute left-0 right-0 z-20 pointer-events-none transition-all duration-75",style:{top:`${o}%`},children:[_.jsx("div",{className:`h-[2px] w-full ${n?"bg-emerald-400 shadow-[0_0_10px_#10b981]":"bg-cyan-300 shadow-[0_0_8px_#00f0ff]"}`}),_.jsx("div",{className:`h-3 -mt-1.5 w-full opacity-35 blur-xs ${n?"bg-emerald-500":"bg-cyan-400"}`})]})]}),_.jsxs("div",{className:"w-full mt-2 pt-1 border-t border-white/10 font-mono text-center",children:[_.jsxs("div",{className:"flex items-center justify-between text-[8px] text-slate-400 px-1",children:[_.jsx("span",{children:"MINUTIES :"}),_.jsx("span",{className:`font-bold ${n?"text-emerald-300":"text-cyan-300"}`,children:n?"48/48 MATCH":"SCANNING..."})]}),_.jsx("div",{className:"text-[8px] text-slate-500 mt-0.5",children:"500 DPI // CAPTEUR OPTIQUE"})]}),_.jsxs("div",{className:"absolute bottom-1.5 left-1.5 z-20 font-mono text-[8px] text-slate-200 bg-black/80 px-2 py-0.5 rounded border border-white/10 flex items-center gap-1",children:[_.jsx(Uv,{className:`w-2.5 h-2.5 ${n?"text-emerald-400":"text-cyan-400"}`}),_.jsx("span",{children:"EMPREINTE"})]})]})]}),_.jsxs("div",{className:"p-2.5 rounded-xl bg-black/50 border border-white/10 font-mono mb-2.5",children:[_.jsxs("div",{className:"flex items-center justify-between text-[11px] font-bold text-white mb-0.5",children:[_.jsx("span",{children:"THOMAS MARTINEZ"}),_.jsx("span",{className:`text-[10px] ${n?"text-emerald-400":"text-cyan-300 animate-pulse"}`,children:n?"✓ 99.8% MATCH":`${r.toFixed(1)}%`})]}),_.jsx("div",{className:"text-[9px] text-slate-400 leading-tight",children:"FULL-STACK & SCRUM MASTER // V.I.E BUCAREST"}),_.jsx("div",{className:"w-full h-1.5 bg-slate-800 rounded-full overflow-hidden mt-2",children:_.jsx("div",{className:`h-full transition-all duration-300 rounded-full ${n?"bg-gradient-to-r from-emerald-500 to-emerald-300 shadow-[0_0_10px_#10b981]":"bg-gradient-to-r from-cyan-500 to-cyan-300 shadow-[0_0_8px_#00f0ff]"}`,style:{width:`${r}%`}})})]}),_.jsxs("div",{className:`p-2 rounded-xl border font-mono transition-all duration-500 flex items-center justify-between ${n?"bg-emerald-950/70 border-emerald-400/60 text-emerald-200 shadow-[0_0_20px_rgba(16,185,129,0.35)]":"bg-slate-900/60 border-amber-400/30 text-amber-200"}`,children:[_.jsxs("div",{className:"flex items-center gap-2",children:[n?_.jsx(Fv,{className:"w-4 h-4 text-emerald-400 animate-bounce"}):_.jsx(Ov,{className:"w-4 h-4 text-amber-400"}),_.jsxs("div",{className:"flex flex-col",children:[_.jsx("span",{className:"text-[10px] font-extrabold tracking-wide uppercase",children:n?"PORTIQUE e-GATE 04 : DÉVERROUILLÉ":"PORTIQUE e-GATE 04 : EN ATTENTE"}),_.jsx("span",{className:"text-[8px] text-slate-300",children:n?"PASSAGE AUTORISÉ // FRONTIÈRE SCHENGEN":"AUTHENTIFICATION BIOMÉTRIQUE EN COURS..."})]})]}),n&&_.jsx(Dv,{className:"w-4 h-4 text-emerald-400 shrink-0"})]})]})})},qa=[{id:"1_1",src:"./assets/videos/act1_radar.mp4",tStart:0,tEnd:7.5,label:"RADAR SURVEILLANCE // 30 000 FT",act:0},{id:"1_2",src:"./assets/videos/act1_real_flight.mp4",tStart:7.5,tEnd:15,label:"COMMERCIAL FLIGHT // CRUISE ALTITUDE",act:0},{id:"1_3",src:"./assets/videos/act1_dev_console.mp4",tStart:15,tEnd:22.5,label:"AIR TRAFFIC DEV CONSOLE // 3D TRAJECTORIES",act:0},{id:"2_1",src:"./assets/videos/act2_plane_descent.mp4",tStart:22.5,tEnd:29.5,label:"DESCENT OVER BUCHAREST // GOLDEN HOUR",act:1},{id:"2_2",src:"./assets/videos/act2_real_arcul_de_triumf.mp4",tStart:29.5,tEnd:37,label:"BUCHAREST ARCUL DE TRIUMF // NIGHT TIMELAPSE",act:1},{id:"2_3",src:"./assets/videos/act2_team_agile.mp4",tStart:37,tEnd:44.5,label:"AGILE SPRINT COLLABORATION // BUCHAREST TEAM",act:1},{id:"3_1",src:"./assets/videos/act3_real_cabis_scan.mp4",tStart:44.5,tEnd:52,label:"BIOMETRIC SCAN // ICAO 9303 MATCHING",act:2},{id:"3_2",src:"./assets/videos/act3_egate_open.mp4",tStart:52,tEnd:59.5,label:"CABIS SMART E-GATE // AUTOMATED CLEARANCE",act:2},{id:"3_3",src:"./assets/videos/act3_thomas_cabis_spy.mp4",tStart:59.5,tEnd:67.5,label:"SCHENGEN BORDER PASSING // FIELD SUCCESS",act:2},{id:"4_1",src:"./assets/videos/act4_real_iss_earth.mp4",tStart:67.5,tEnd:76,label:"CONTINENTAL HORIZON // PAN-EUROPEAN REACH",act:3},{id:"4_2",src:"./assets/videos/act4_thomas_future.mp4",tStart:76,tEnd:85,label:"FUTURE LEADERSHIP // TRAJECTOIRE V.I.E",act:3}],yA=({currentTime:t,isPlaying:e=!0,onTogglePlay:n,onJumpToChapter:i})=>{const r=Re.useRef(null);Re.useEffect(()=>{const c=r.current;return c?(new URLSearchParams(window.location.search).get("autoplay")==="1"&&c.paused&&e&&c.play().catch(()=>{}),window.startFootagePlayback=()=>{c&&(c.currentTime=0,c.play().catch(()=>{}))},window.isMasterVideoReady=()=>c&&c.readyState>=3,()=>{delete window.startFootagePlayback,delete window.isMasterVideoReady}):void 0},[]),Re.useEffect(()=>{const c=r.current;c&&(e?c.paused&&(Math.abs(c.currentTime-t)>.15&&(c.currentTime=t),c.play().catch(()=>{})):c.paused||(c.pause(),c.currentTime=t))},[e]),Re.useEffect(()=>{const c=r.current;if(!c)return;const u=Math.abs(c.currentTime-t);e?u>.35&&(c.currentTime=t):u>.04&&(c.currentTime=t)},[t,e]);let s=0;t>=67.5?s=3:t>=44.5?s=2:t>=22.5&&(s=1);const o=yn[s],a=qa.find(c=>t>=c.tStart&&t<c.tEnd)||qa[qa.length-1],l=qa.findIndex(c=>c.id===a.id);return _.jsxs("div",{className:"fixed inset-0 w-full h-full overflow-hidden bg-black select-none font-sans",children:[_.jsxs("div",{onClick:n,className:"absolute inset-0 w-full h-full z-0 cursor-pointer",title:e?"Cliquer sur l'écran pour mettre en pause":"Cliquer pour reprendre la lecture",children:[_.jsx("video",{ref:r,src:"./assets/videos/master_footage_85s.mp4",muted:!0,playsInline:!0,preload:"auto",onCanPlay:c=>{new URLSearchParams(window.location.search).get("autoplay")==="1"&&c.currentTarget.paused&&e&&c.currentTarget.play().catch(()=>{})},className:"w-full h-full object-cover scale-105 pointer-events-none"}),_.jsx("div",{className:"absolute inset-0 bg-gradient-to-t from-slate-950/85 via-transparent to-slate-950/75 pointer-events-none z-10"})]}),!e&&_.jsxs("div",{onClick:n,className:"absolute inset-0 z-30 flex flex-col items-center justify-center bg-black/45 backdrop-blur-[2px] cursor-pointer transition-all animate-in fade-in duration-200",title:"Reprendre la lecture",children:[_.jsx("div",{className:"w-20 h-20 rounded-full bg-cyan-500 hover:bg-cyan-400 text-slate-950 flex items-center justify-center shadow-[0_0_40px_rgba(0,240,255,0.6)] transform hover:scale-110 active:scale-95 transition-all",children:_.jsx("svg",{className:"w-9 h-9 fill-current ml-1",viewBox:"0 0 24 24",children:_.jsx("polygon",{points:"5 3 19 12 5 21 5 3"})})}),_.jsx("div",{className:"mt-4 px-5 py-2 rounded-full bg-slate-950/90 border border-cyan-400/40 text-cyan-300 font-mono text-xs tracking-widest shadow-xl",children:"VIDÉO EN PAUSE — CLIQUER OU ESPACE POUR REPRENDRE"})]}),_.jsxs("header",{className:"absolute top-0 left-0 right-0 z-20 flex items-center justify-between px-8 py-5 border-b border-white/10 bg-slate-950/50 backdrop-blur-md",children:[_.jsxs("div",{className:"flex items-center gap-3",children:[_.jsx("div",{className:"w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping"}),_.jsxs("div",{className:"flex flex-col",children:[_.jsx("span",{className:"font-mono text-[10px] tracking-[0.25em] text-slate-400 uppercase",children:"Grand Prix V.I.E Roumanie 2026 // Documentary Feature"}),_.jsx("span",{className:"text-xs font-bold text-white tracking-wide",children:"THOMAS MARTINEZ — FULL-STACK & SCRUM MASTER"})]})]}),_.jsx("div",{className:"absolute left-1/2 -translate-x-1/2 h-8 p-1 rounded-full bg-slate-900/90 border border-white/10 backdrop-blur-xl flex items-center gap-1",children:yn.map((c,u)=>_.jsxs("button",{type:"button",onClick:()=>i==null?void 0:i(u),className:`h-6 px-3.5 rounded-full text-xs font-sans whitespace-nowrap transition-all duration-200 cursor-pointer ${s===u?"bg-emerald-400/25 text-emerald-300 font-semibold border border-emerald-400/40 shadow-[0_0_12px_rgba(52,211,153,0.25)]":"text-slate-400 hover:text-white hover:bg-white/[0.06] border border-transparent"}`,children:["Acte 0",u+1]},u))}),_.jsxs("div",{className:"flex items-center gap-2",children:[_.jsxs("div",{className:"h-8 px-3 rounded-full bg-slate-900/80 border border-white/10 font-mono text-[10px] text-cyan-300 flex items-center gap-2",children:[_.jsx("span",{className:"w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse"}),_.jsxs("span",{children:["PLAN ",String(l+1).padStart(2,"0"),"/11 : ",a.label.split(" // ")[0]]})]}),_.jsx("div",{className:"h-8 px-3 rounded-full bg-white/5 border border-white/10 font-mono text-[10px] text-slate-300 flex items-center",children:_.jsx("span",{children:"1080P60 // 0-LOOP"})})]})]}),_.jsxs("div",{className:"absolute left-8 top-28 z-20 max-w-md pointer-events-none",children:[_.jsx("div",{className:"px-4 py-1 rounded-full bg-black/60 border border-white/10 backdrop-blur-md inline-flex items-center gap-2 mb-3",children:_.jsxs("span",{className:"font-mono text-[10px] tracking-widest text-emerald-400 uppercase",children:[s===0&&"AERONAUTICAL SURVEILLANCE // AMS",s===1&&"BUCHAREST AGILE SPRINT // ROUMANIE",s===2&&"BORDER CONTROL BIOMETRICS // CABIS",s===3&&"PAN-EUROPEAN TRAJECTORY // RAYONNEMENT"]})}),_.jsx("h2",{className:"text-2xl md:text-3xl font-extrabold text-white tracking-tight leading-tight",children:o.title}),_.jsx("p",{className:"text-xs text-slate-300 mt-2 font-light leading-relaxed",children:o.summary}),_.jsxs("div",{className:"flex items-center gap-3 mt-4",children:[s===0&&_.jsxs(_.Fragment,{children:[_.jsxs("div",{className:"px-3 py-2 rounded-xl bg-slate-900/80 border border-white/10 backdrop-blur-md",children:[_.jsx("div",{className:"text-sm font-mono font-bold text-cyan-400",children:"30 000 FT"}),_.jsx("div",{className:"text-[9px] font-mono text-slate-400",children:"CROISIÈRE AMS"})]}),_.jsxs("div",{className:"px-3 py-2 rounded-xl bg-slate-900/80 border border-white/10 backdrop-blur-md",children:[_.jsx("div",{className:"text-sm font-mono font-bold text-white",children:"100k+ VOLS"}),_.jsx("div",{className:"text-[9px] font-mono text-slate-400",children:"HAUTE DISPO"})]})]}),s===1&&_.jsxs(_.Fragment,{children:[_.jsxs("div",{className:"px-3 py-2 rounded-xl bg-slate-900/80 border border-white/10 backdrop-blur-md",children:[_.jsx("div",{className:"text-sm font-mono font-bold text-amber-400",children:"+35% VÉLOCITÉ"}),_.jsx("div",{className:"text-[9px] font-mono text-slate-400",children:"SPRINT RECOVERY"})]}),_.jsxs("div",{className:"px-3 py-2 rounded-xl bg-slate-900/80 border border-white/10 backdrop-blur-md",children:[_.jsx("div",{className:"text-sm font-mono font-bold text-white",children:"12 INGS"}),_.jsx("div",{className:"text-[9px] font-mono text-slate-400",children:"TEAM FR-RO"})]})]}),s===2&&_.jsxs(_.Fragment,{children:[_.jsxs("div",{className:"px-3 py-2 rounded-xl bg-slate-900/80 border border-white/10 backdrop-blur-md",children:[_.jsx("div",{className:"text-sm font-mono font-bold text-emerald-400",children:"100% CONFORME"}),_.jsx("div",{className:"text-[9px] font-mono text-slate-400",children:"SCHENGEN E-GATES"})]}),_.jsxs("div",{className:"px-3 py-2 rounded-xl bg-slate-900/80 border border-white/10 backdrop-blur-md",children:[_.jsx("div",{className:"text-sm font-mono font-bold text-cyan-400",children:"99.4% MATCH"}),_.jsx("div",{className:"text-[9px] font-mono text-slate-400",children:"ICAO 9303"})]})]}),s===3&&_.jsxs(_.Fragment,{children:[_.jsxs("div",{className:"px-3 py-2 rounded-xl bg-slate-900/80 border border-white/10 backdrop-blur-md",children:[_.jsx("div",{className:"text-sm font-mono font-bold text-amber-300",children:"14 HUBS"}),_.jsx("div",{className:"text-[9px] font-mono text-slate-400",children:"RÉSEAU EUROPÉEN"})]}),_.jsxs("div",{className:"px-3 py-2 rounded-xl bg-slate-900/80 border border-white/10 backdrop-blur-md",children:[_.jsx("div",{className:"text-sm font-mono font-bold text-emerald-400",children:"LEADERSHIP"}),_.jsx("div",{className:"text-[9px] font-mono text-slate-400",children:"TRAJECTOIRE V.I.E"})]})]})]})]}),_.jsx(_A,{currentTime:t}),_.jsx("footer",{className:"absolute bottom-20 md:bottom-24 left-1/2 -translate-x-1/2 z-20 w-full max-w-3xl text-center px-6 pointer-events-none",children:_.jsx("div",{className:"px-6 py-3 rounded-2xl bg-slate-950/85 border border-white/15 backdrop-blur-xl shadow-2xl",children:_.jsx("p",{className:"text-sm md:text-base font-light text-slate-200 tracking-wide leading-relaxed",children:o.subtitles})})})]})},Lm=({activeChapter:t})=>_.jsxs("header",{className:"header-nav-container fixed top-0 left-0 w-full z-40 pointer-events-none select-none px-6 py-4 flex flex-col md:flex-row items-center justify-between gap-4 border-b border-white/10 bg-gradient-to-b from-slate-950/90 via-slate-950/60 to-transparent backdrop-blur-md",children:[_.jsxs("div",{className:"flex items-center gap-3",children:[_.jsx("div",{className:"w-2.5 h-2.5 rounded-full bg-cyan-400 animate-pulse shadow-[0_0_8px_#00f0ff]"}),_.jsxs("div",{children:[_.jsx("div",{className:"font-mono text-xs md:text-sm tracking-widest uppercase font-bold text-cyan-400 drop-shadow-[0_0_10px_rgba(0,240,255,0.4)]",children:ya.name}),_.jsx("div",{className:"text-[10px] md:text-xs text-slate-400 font-mono tracking-wider",children:ya.role})]})]}),_.jsxs("div",{className:"flex items-center gap-3 md:gap-4 font-mono text-[11px] md:text-xs",children:[_.jsxs("div",{className:"h-8 flex items-center gap-2 bg-slate-900/60 border border-white/10 px-3 rounded-lg",children:[_.jsx(fA,{className:"w-3.5 h-3.5 text-cyan-400"}),_.jsx("span",{className:"text-slate-400",children:"ALTITUDE:"}),_.jsx("span",{className:"text-white font-bold tracking-wider",children:t.altitude})]}),_.jsxs("div",{className:"h-8 flex items-center gap-2 bg-slate-900/60 border border-white/10 px-3 rounded-lg",children:[_.jsx(sA,{className:"w-3.5 h-3.5 text-emerald-400 animate-spin-slow"}),_.jsx("span",{className:"text-slate-400",children:"SYSTÈME:"}),_.jsx("span",{className:"text-emerald-400 font-bold tracking-wider",children:t.system})]}),_.jsxs("div",{className:"hidden lg:flex h-8 items-center gap-2 bg-slate-900/60 border border-white/10 px-3 rounded-lg",children:[_.jsx(lA,{className:"w-3.5 h-3.5 text-cyan-400"}),_.jsx("span",{className:"text-slate-400",children:"COORD:"}),_.jsxs("span",{className:"text-white font-mono",children:[ya.coordinates," (BUCAREST)"]})]}),_.jsxs("div",{className:"hidden sm:flex h-8 items-center gap-1.5 bg-cyan-950/40 border border-cyan-500/30 px-3 rounded-lg text-cyan-300",children:[_.jsx(rA,{className:"w-3.5 h-3.5 text-cyan-400"}),_.jsx("span",{className:"font-semibold tracking-wider text-[10px]",children:ya.contest})]})]})]}),SA=({activeChapter:t})=>_.jsx("aside",{className:"fixed top-[13%] left-4 md:left-8 z-30 w-[420px] max-w-[92vw] pointer-events-none select-none transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]",children:_.jsx("div",{className:"relative p-2 rounded-[2rem] bg-white/[0.04] border border-white/10 ring-1 ring-white/5 backdrop-blur-3xl shadow-[0_30px_90px_rgba(0,0,0,0.85)]",children:_.jsxs("div",{className:"relative p-5 md:p-6 rounded-[calc(2rem-0.5rem)] bg-slate-950/90 border border-cyan-500/25 shadow-[inset_0_1px_1px_rgba(255,255,255,0.15)] overflow-hidden",children:[_.jsx("div",{className:"absolute top-0 left-0 w-3.5 h-3.5 border-t-2 border-l-2 border-cyan-400"}),_.jsx("div",{className:"absolute top-0 right-0 w-3.5 h-3.5 border-t-2 border-r-2 border-cyan-400"}),_.jsx("div",{className:"absolute bottom-0 left-0 w-3.5 h-3.5 border-b-2 border-l-2 border-cyan-400"}),_.jsx("div",{className:"absolute bottom-0 right-0 w-3.5 h-3.5 border-b-2 border-r-2 border-cyan-400"}),_.jsxs("div",{className:"flex items-center justify-between gap-2 mb-3",children:[_.jsxs("div",{className:"inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-400/30",children:[_.jsx("span",{className:"w-1.5 h-1.5 rounded-full bg-cyan-400 animate-ping inline-block"}),_.jsx("span",{className:"font-mono text-[10px] tracking-[0.2em] text-cyan-300 font-semibold uppercase",children:t.tag})]}),_.jsxs("div",{className:"font-mono text-[9px] text-slate-400 uppercase tracking-widest flex items-center gap-1.5",children:[_.jsx(mA,{className:"w-3 h-3 text-cyan-400 animate-pulse"}),_.jsx("span",{children:"LIVE_HUD"})]})]}),_.jsx("h1",{className:"text-xl sm:text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-100 to-cyan-200 tracking-tight leading-snug mb-2.5",children:t.title}),_.jsx("p",{className:"text-xs sm:text-sm text-slate-300/90 font-sans leading-relaxed mb-4",children:t.summary}),_.jsx("div",{className:"grid grid-cols-2 gap-2.5 pt-3.5 border-t border-white/10",children:t.metrics.map((e,n)=>_.jsxs("div",{className:"bg-slate-900/80 border border-slate-700/60 rounded-xl p-3 shadow-inner",children:[_.jsxs("div",{className:"flex items-center gap-1.5 mb-1",children:[n===0?_.jsx(aA,{className:"w-3.5 h-3.5 text-cyan-400 shrink-0"}):_.jsx(zv,{className:"w-3.5 h-3.5 text-emerald-400 shrink-0"}),_.jsx("span",{className:"text-[10px] font-mono text-slate-400 uppercase tracking-wider truncate",children:e.label})]}),_.jsx("div",{className:"font-mono text-sm font-black text-emerald-400 tracking-wide truncate",children:e.value}),_.jsx("div",{className:"text-[10px] text-slate-400 leading-tight mt-0.5 line-clamp-1",children:e.detail})]},n))})]})})}),MA=({currentTime:t})=>{if(!(t>=43.5&&t<=67.5))return null;const n=t>=53.5;let i=1;t<45?i=Math.max(0,(t-43.5)/1.5):t>66&&(i=Math.max(0,(67.5-t)/1.5));const r=n?50:Math.round((Math.sin(t*4.5)*.5+.5)*78+10),s=n?99.8:Math.min(99.4,Math.round((t-44)/9.5*81+18)),o=[{x:40.8,y:43.2,label:"L_EYE"},{x:68.5,y:45.6,label:"R_EYE"},{x:54.7,y:40.6,label:"GLABELLA"},{x:56.4,y:54.5,label:"NOSE"},{x:45.9,y:64.8,label:"L_MOUTH"},{x:62.4,y:66.4,label:"R_MOUTH"},{x:55,y:78.5,label:"CHIN"}];return _.jsx("aside",{className:"fixed top-[14%] right-4 md:right-8 z-30 w-[300px] sm:w-[340px] pointer-events-none select-none transition-all duration-300 ease-out",style:{opacity:i},children:_.jsxs("div",{className:`relative glass-panel rounded-xl p-4 overflow-hidden backdrop-blur-xl border shadow-[0_20px_50px_rgba(0,0,0,0.85)] transition-colors duration-700 ${n?"border-emerald-400/40 bg-slate-950/85":"border-cyan-400/40 bg-slate-950/85"}`,children:[_.jsx("div",{className:`absolute top-0 left-0 w-3.5 h-3.5 border-t-2 border-l-2 transition-colors duration-500 ${n?"border-emerald-400":"border-cyan-400"}`}),_.jsx("div",{className:`absolute top-0 right-0 w-3.5 h-3.5 border-t-2 border-r-2 transition-colors duration-500 ${n?"border-emerald-400":"border-cyan-400"}`}),_.jsx("div",{className:`absolute bottom-0 left-0 w-3.5 h-3.5 border-b-2 border-l-2 transition-colors duration-500 ${n?"border-emerald-400":"border-cyan-400"}`}),_.jsx("div",{className:`absolute bottom-0 right-0 w-3.5 h-3.5 border-b-2 border-r-2 transition-colors duration-500 ${n?"border-emerald-400":"border-cyan-400"}`}),_.jsxs("div",{className:"flex items-center justify-between gap-2 mb-2.5 pb-2 border-b border-white/10",children:[_.jsxs("div",{className:"flex items-center gap-1.5",children:[_.jsx(kv,{className:`w-4 h-4 transition-colors duration-500 ${n?"text-emerald-400 animate-pulse":"text-cyan-400 animate-spin"}`}),_.jsx("span",{className:`font-mono text-[10px] font-bold tracking-wider uppercase transition-colors duration-500 ${n?"text-emerald-400":"text-cyan-400"}`,children:"CABIS // BIOMETRIC HUD"})]}),_.jsxs("div",{className:`flex items-center gap-1 px-1.5 py-0.5 rounded font-mono text-[9px] font-semibold tracking-widest uppercase transition-all duration-500 ${n?"bg-emerald-500/20 text-emerald-300 border border-emerald-500/40":"bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 animate-pulse"}`,children:[_.jsx(Nm,{className:"w-2.5 h-2.5"}),_.jsx("span",{children:n?"VERIFIED":"SCANNING"})]})]}),_.jsxs("div",{className:"relative w-full h-[230px] rounded-lg overflow-hidden bg-gradient-to-b from-cyan-950/30 via-slate-900/60 to-slate-950 border border-white/10 flex items-center justify-center",children:[_.jsx("div",{className:"absolute inset-0 pointer-events-none z-10 opacity-30",style:{backgroundImage:"repeating-linear-gradient(0deg, rgba(0, 240, 255, 0.15) 0px, transparent 2px, transparent 4px)",backgroundSize:"100% 4px"}}),_.jsx("img",{src:"./assets/images/thomas_studio_portrait.png",alt:"Thomas Martinez Biometric Face",className:`w-full h-full object-cover object-center pointer-events-none transition-all duration-700 ${n?"brightness-105 contrast-105":"brightness-95 contrast-100"}`}),_.jsxs("div",{className:`absolute left-0 right-0 z-20 pointer-events-none transition-all duration-100 ${n?"opacity-70":"opacity-90"}`,style:{top:`${r}%`},children:[_.jsx("div",{className:`h-[2px] w-full ${n?"bg-emerald-400 shadow-[0_0_12px_#10b981]":"bg-cyan-300 shadow-[0_0_10px_#00f0ff]"}`}),_.jsx("div",{className:`h-4 -mt-2 w-full opacity-30 blur-xs ${n?"bg-emerald-500":"bg-cyan-400"}`})]}),_.jsxs("svg",{className:"absolute inset-0 w-full h-full z-20 pointer-events-none",viewBox:"0 0 100 100",preserveAspectRatio:"none",children:[_.jsx("polygon",{points:"41,46 55,32 68,48 64,67 55,80 47,67",fill:n?"rgba(16, 185, 129, 0.08)":"rgba(0, 240, 255, 0.06)",stroke:n?"rgba(16, 185, 129, 0.55)":"rgba(0, 240, 255, 0.45)",strokeWidth:"0.6",strokeDasharray:n?"none":"1.5 1.5"}),_.jsx("polyline",{points:"41,46 55,57 68,48",fill:"none",stroke:n?"rgba(16, 185, 129, 0.5)":"rgba(0, 240, 255, 0.4)",strokeWidth:"0.5"}),_.jsx("polyline",{points:"47,67 55,57 64,67",fill:"none",stroke:n?"rgba(16, 185, 129, 0.5)":"rgba(0, 240, 255, 0.4)",strokeWidth:"0.5"}),_.jsx("line",{x1:"55",y1:"57",x2:"55",y2:"80",stroke:n?"rgba(16, 185, 129, 0.5)":"rgba(0, 240, 255, 0.4)",strokeWidth:"0.5"}),o.map((a,l)=>_.jsxs("g",{children:[_.jsx("circle",{cx:a.x,cy:a.y,r:"1.2",fill:n?"#10b981":"#00f0ff",className:n?"animate-none":"animate-ping",style:{transformOrigin:`${a.x}px ${a.y}px`,animationDuration:"2s"}}),_.jsx("circle",{cx:a.x,cy:a.y,r:"0.75",fill:"#ffffff"})]},l))]}),_.jsx("div",{className:"absolute top-2 left-2 w-2 h-2 border-t border-l border-white/40"}),_.jsx("div",{className:"absolute top-2 right-2 w-2 h-2 border-t border-r border-white/40"}),_.jsx("div",{className:"absolute bottom-2 left-2 w-2 h-2 border-b border-l border-white/40"}),_.jsx("div",{className:"absolute bottom-2 right-2 w-2 h-2 border-b border-r border-white/40"}),_.jsx("div",{className:"absolute bottom-1.5 left-2 z-20 font-mono text-[8px] tracking-wider text-slate-400 bg-black/60 px-1 py-0.5 rounded",children:"ICAO 9303 // 3D MESH"})]}),_.jsxs("div",{className:"mt-2.5 pt-2 border-t border-white/10",children:[_.jsxs("div",{className:"flex items-center justify-between mb-1",children:[_.jsxs("span",{className:"font-mono text-[9px] uppercase tracking-wider text-slate-400 flex items-center gap-1",children:[_.jsx(Uv,{className:"w-3 h-3 text-cyan-400"}),"STATUS"]}),_.jsx("span",{className:`font-mono text-[10px] font-bold tracking-wider transition-colors duration-500 ${n?"text-emerald-400":"text-cyan-300"}`,children:n?"MATCH: 99.8%":`${s.toFixed(1)}%`})]}),_.jsx("div",{className:"w-full h-1.5 bg-slate-800 rounded-full overflow-hidden mb-2",children:_.jsx("div",{className:`h-full transition-all duration-300 rounded-full ${n?"bg-gradient-to-r from-emerald-500 to-emerald-300 shadow-[0_0_8px_#10b981]":"bg-gradient-to-r from-cyan-500 to-cyan-300 shadow-[0_0_8px_#00f0ff]"}`,style:{width:`${s}%`}})}),_.jsxs("div",{className:`p-2 rounded-lg border font-mono text-center transition-all duration-500 ${n?"bg-emerald-950/40 border-emerald-400/50 text-emerald-300 shadow-[0_0_15px_rgba(16,185,129,0.2)]":"bg-slate-900/60 border-cyan-400/30 text-cyan-200"}`,children:[_.jsx("div",{className:"flex items-center justify-center gap-1.5 text-[10px] sm:text-[11px] font-extrabold tracking-wide uppercase",children:n?_.jsxs(_.Fragment,{children:[_.jsx(Dv,{className:"w-3.5 h-3.5 text-emerald-400"}),_.jsx("span",{children:"MATCH 99.8% // IDENTITY CONFIRMED"})]}):_.jsxs(_.Fragment,{children:[_.jsx(Nm,{className:"w-3.5 h-3.5 text-cyan-400 animate-spin"}),_.jsx("span",{children:"SCANNING FACIAL MESH..."})]})}),_.jsx("div",{className:"text-[9px] tracking-wider text-slate-300 mt-0.5 truncate",children:n?"ID: MARTINEZ_THOMAS // BUCAREST":"MATCHING WITH BORDER CONTROL ARCHIVES..."})]}),_.jsxs("div",{className:"flex items-center justify-between text-[8px] font-mono text-slate-400 mt-2 px-1",children:[_.jsxs("div",{className:"flex items-center gap-1",children:[n?_.jsx(Fv,{className:"w-2.5 h-2.5 text-emerald-400"}):_.jsx(Ov,{className:"w-2.5 h-2.5 text-amber-400"}),_.jsx("span",{children:n?"e-GATE 04: PASSENGER CLEARED":"e-GATE 04: STANDBY"})]}),_.jsx("div",{className:"text-slate-500",children:"CABIS v2.6"})]})]})]})})},Im=({text:t})=>{const e=n=>{const i=["AMS","Bucarest","CABIS","Full-Stack","Scrum Master","trajectoire","Roumanie","portiques","biométrique","biométriques","excellence","savoir-faire","mai 2025","mars 2026","V.I.E"];let r=n;return i.forEach(s=>{const o=new RegExp(`(${s})`,"gi");r=r.replace(o,'<span class="text-cyan-300 font-semibold border-b border-cyan-400/40">$1</span>')}),{__html:r}};return _.jsx("div",{className:"fixed bottom-20 md:bottom-24 left-1/2 -translate-x-1/2 z-30 w-[94vw] max-w-4xl pointer-events-none select-none transition-all duration-500 ease-out",children:_.jsx("div",{className:"p-1.5 rounded-[1.75rem] bg-white/[0.04] border border-white/10 ring-1 ring-white/5 backdrop-blur-3xl shadow-[0_25px_60px_rgba(0,0,0,0.9)]",children:_.jsxs("div",{className:"px-6 py-3 md:px-8 md:py-4 rounded-[calc(1.75rem-0.375rem)] bg-slate-950/90 border border-cyan-500/20 text-center",children:[_.jsxs("div",{className:"flex items-center justify-center gap-1.5 mb-1 opacity-80",children:[_.jsx(pA,{className:"w-3.5 h-3.5 text-cyan-400"}),_.jsx("span",{className:"font-mono text-[9px] tracking-[0.25em] text-cyan-300 uppercase font-semibold",children:"RÉCIT & TÉMOIGNAGE DU CANDIDAT V.I.E"})]}),_.jsx("p",{className:"text-xs sm:text-sm md:text-[15px] text-slate-100 font-sans font-medium leading-relaxed drop-shadow",dangerouslySetInnerHTML:e(t)})]})})})},EA=({currentTime:t,duration:e,progress:n,isPlaying:i,activeChapterIndex:r,audioEnabled:s,viewMode:o="footage",onTogglePlay:a,onRestart:l,onSeek:c,onJumpToChapter:u,onToggleAudio:f,onSelectViewMode:h})=>{const[p,v]=Re.useState(!1);Re.useEffect(()=>{const g=()=>{v(!!document.fullscreenElement)};return document.addEventListener("fullscreenchange",g),()=>document.removeEventListener("fullscreenchange",g)},[]);const S=()=>{document.fullscreenElement?document.exitFullscreen&&document.exitFullscreen().catch(()=>{}):document.documentElement.requestFullscreen().catch(()=>{})},m=g=>{const x=Math.floor(g/60),E=Math.floor(g%60);return`${String(x).padStart(2,"0")}:${String(E).padStart(2,"0")}`},d=g=>{const x=g.currentTarget.getBoundingClientRect(),E=Math.max(0,Math.min(1,(g.clientX-x.left)/x.width));c(E*e)};return _.jsx("footer",{className:"bottom-dock-container fixed bottom-0 left-0 w-full z-40 select-none bg-slate-950/90 border-t border-white/10 px-3 sm:px-4 lg:px-6 py-2.5 sm:py-3 backdrop-blur-2xl",children:_.jsxs("div",{className:"w-full max-w-[1920px] mx-auto flex items-center justify-between gap-2 lg:gap-3 flex-wrap xl:flex-nowrap",children:[_.jsxs("div",{className:"flex items-center gap-1.5 sm:gap-2 flex-shrink-0",children:[_.jsx("button",{type:"button",onClick:a,className:"h-9 px-3.5 sm:px-4 rounded-xl flex items-center gap-2 whitespace-nowrap flex-shrink-0 bg-cyan-400 hover:bg-cyan-300 text-slate-950 font-sans font-semibold text-xs transition-all shadow-[0_0_16px_rgba(0,240,255,0.35)] active:scale-95 cursor-pointer",title:i?"Mettre en pause (Espace)":"Lancer la lecture (Espace)",children:i?_.jsxs(_.Fragment,{children:[_.jsx(dA,{className:"w-3.5 h-3.5 fill-current"}),_.jsx("span",{children:"Pause"})]}):_.jsxs(_.Fragment,{children:[_.jsx(hA,{className:"w-3.5 h-3.5 fill-current"}),_.jsx("span",{children:"Lecture"})]})}),_.jsxs("button",{type:"button",onClick:l,className:"h-9 px-3 rounded-xl flex items-center gap-1.5 whitespace-nowrap flex-shrink-0 bg-white/[0.06] hover:bg-white/[0.12] text-slate-300 hover:text-white font-sans text-xs border border-white/10 transition-all active:scale-95 cursor-pointer",title:"Recommencer depuis le début (Touche R)",children:[_.jsx(gA,{className:"w-3.5 h-3.5"}),_.jsx("span",{className:"hidden xl:inline",children:"Reset"})]}),_.jsx("button",{type:"button",onClick:f,className:`h-9 px-3 rounded-xl flex items-center gap-1.5 whitespace-nowrap flex-shrink-0 font-sans text-xs border transition-all active:scale-95 cursor-pointer ${s?"bg-emerald-500/15 border-emerald-500/40 text-emerald-300 shadow-[0_0_10px_rgba(16,185,129,0.2)]":"bg-white/[0.06] hover:bg-white/[0.12] border-white/10 text-slate-400 hover:text-white"}`,title:"Activer / désactiver la voix-off (Touche M)",children:s?_.jsxs(_.Fragment,{children:[_.jsx(vA,{className:"w-3.5 h-3.5 text-emerald-400"}),_.jsx("span",{className:"hidden xl:inline",children:"Audio On"})]}):_.jsxs(_.Fragment,{children:[_.jsx(xA,{className:"w-3.5 h-3.5 text-slate-400"}),_.jsx("span",{className:"hidden xl:inline",children:"Audio Off"})]})}),_.jsx("div",{className:"h-6 w-px bg-white/10 mx-0.5 sm:mx-1 hidden sm:block flex-shrink-0"}),_.jsx("div",{className:"h-9 p-1 rounded-xl bg-white/[0.04] border border-white/10 flex items-center gap-0.5 sm:gap-1 flex-shrink-0",children:yn.map((g,x)=>{const E=x===r;return _.jsxs("button",{type:"button",onClick:()=>u(x),className:`h-7 px-2.5 sm:px-3 rounded-lg font-sans text-xs whitespace-nowrap transition-all cursor-pointer ${E?"bg-cyan-500/20 text-cyan-300 font-semibold border border-cyan-400/40 shadow-[0_0_10px_rgba(0,240,255,0.2)]":"text-slate-400 hover:text-white hover:bg-white/[0.06] border border-transparent"}`,title:`Aller à l'Acte 0${g.id}`,children:["Acte 0",g.id]},g.id)})})]}),_.jsxs("div",{className:"w-full xl:w-auto flex-1 flex items-center gap-2.5 min-w-[120px] max-w-lg order-last xl:order-none",children:[_.jsxs("div",{onClick:d,className:"relative flex-1 h-2 bg-white/[0.08] hover:bg-white/[0.12] border border-white/10 rounded-full cursor-pointer overflow-hidden group transition-all",title:"Cliquer pour naviguer dans la timeline",children:[_.jsx("div",{className:"h-full bg-gradient-to-r from-cyan-400 via-sky-400 to-emerald-400 rounded-full transition-all duration-75 relative",style:{width:`${n*100}%`},children:_.jsx("div",{className:"absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 bg-white rounded-full shadow-[0_0_8px_#00f0ff] scale-0 group-hover:scale-100 transition-transform"})}),yn.map((g,x)=>{if(x===0)return null;const E=g.tStart/on*100;return _.jsx("div",{className:"absolute top-0 bottom-0 w-0.5 bg-white/25 pointer-events-none",style:{left:`${E}%`}},x)})]}),_.jsxs("div",{className:"font-mono text-xs text-cyan-400 font-semibold tracking-wider whitespace-nowrap tabular-nums",children:[m(t)," ",_.jsxs("span",{className:"text-slate-500 font-normal",children:["/ ",m(e)]})]})]}),_.jsxs("div",{className:"flex items-center gap-1.5 sm:gap-2 flex-shrink-0",children:[h&&_.jsxs("div",{className:"h-9 p-1 rounded-xl bg-white/[0.04] border border-white/10 flex items-center gap-0.5 sm:gap-1 flex-shrink-0",children:[_.jsx("button",{type:"button",onClick:()=>h("footage"),className:`h-7 px-2.5 sm:px-3 rounded-lg font-sans text-xs whitespace-nowrap transition-all cursor-pointer ${o==="footage"?"bg-cyan-500/20 text-cyan-300 font-semibold border border-cyan-400/40 shadow-[0_0_10px_rgba(0,240,255,0.2)]":"text-slate-400 hover:text-white hover:bg-white/[0.06] border border-transparent"}`,title:"Mode Documentaire Vidéo B-Roll",children:"Footage"}),_.jsx("button",{type:"button",onClick:()=>h("cinematic"),className:`h-7 px-2.5 sm:px-3 rounded-lg font-sans text-xs whitespace-nowrap transition-all cursor-pointer ${o==="cinematic"?"bg-cyan-500/20 text-cyan-300 font-semibold border border-cyan-400/40 shadow-[0_0_10px_rgba(0,240,255,0.2)]":"text-slate-400 hover:text-white hover:bg-white/[0.06] border border-transparent"}`,title:"Mode Cinématographique 2.5D",children:"Ciné 2.5D"}),_.jsx("button",{type:"button",onClick:()=>h("keynote"),className:`h-7 px-2.5 sm:px-3 rounded-lg font-sans text-xs whitespace-nowrap transition-all cursor-pointer ${o==="keynote"?"bg-cyan-500/20 text-cyan-300 font-semibold border border-cyan-400/40 shadow-[0_0_10px_rgba(0,240,255,0.2)]":"text-slate-400 hover:text-white hover:bg-white/[0.06] border border-transparent"}`,title:"Mode Apple Keynote",children:"Keynote"}),_.jsx("button",{type:"button",onClick:()=>h("cockpit"),className:`h-7 px-2 sm:px-2.5 rounded-lg font-sans text-xs whitespace-nowrap transition-all cursor-pointer ${o==="cockpit"?"bg-cyan-500/20 text-cyan-300 font-semibold border border-cyan-400/40 shadow-[0_0_10px_rgba(0,240,255,0.2)]":"text-slate-400 hover:text-white hover:bg-white/[0.06] border border-transparent"}`,title:"Mode Télémétrie 3D Cockpit",children:"V1 HUD"})]}),_.jsx("button",{type:"button",onClick:S,className:"h-9 px-3 rounded-xl flex items-center gap-1.5 whitespace-nowrap flex-shrink-0 bg-white/[0.06] hover:bg-white/[0.12] text-slate-300 hover:text-white font-sans text-xs border border-white/10 transition-all active:scale-95 cursor-pointer",title:p?"Quitter le plein écran (Échap ou F11)":"Plein écran (F11)",children:p?_.jsxs(_.Fragment,{children:[_.jsx(uA,{className:"w-3.5 h-3.5 text-cyan-400"}),_.jsx("span",{className:"hidden xl:inline",children:"Fenêtré"})]}):_.jsxs(_.Fragment,{children:[_.jsx(cA,{className:"w-3.5 h-3.5 text-cyan-400"}),_.jsx("span",{className:"hidden xl:inline",children:"Plein Écran"})]})}),_.jsxs("a",{href:"./MARTINEZ_Thomas_Grand_Prix_VIE_2026.mp4",download:"MARTINEZ_Thomas_Grand_Prix_VIE_2026.mp4",className:"h-9 px-3.5 sm:px-4 rounded-xl flex items-center gap-1.5 sm:gap-2 whitespace-nowrap flex-shrink-0 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-sans font-semibold text-xs shadow-[0_0_14px_rgba(16,185,129,0.35)] transition-all active:scale-95 cursor-pointer",title:"Télécharger la vidéo officielle du concours (1080p 60fps MP4, 85s)",children:[_.jsx(oA,{className:"w-3.5 h-3.5"}),_.jsx("span",{className:"hidden 2xl:inline",children:"Télécharger MP4"}),_.jsx("span",{className:"2xl:hidden",children:"MP4"})]})]})]})})},wA=()=>{const{currentTime:t,duration:e,progress:n,isPlaying:i,activeChapter:r,activeChapterIndex:s,audioEnabled:o,togglePlay:a,restart:l,seekTo:c,jumpToChapter:u,toggleAudio:f}=vy(),[h,p]=Re.useState(()=>{const S=new URLSearchParams(window.location.search).get("view");return S==="keynote"?"keynote":S==="footage"?"footage":S==="cockpit"?"cockpit":S==="editorial"||S==="cinematic"?"cinematic":"footage"});return Re.useEffect(()=>{const v=S=>{var m;["INPUT","TEXTAREA"].includes((m=S.target)==null?void 0:m.tagName)||(S.code==="Space"?(S.preventDefault(),a()):S.key==="r"||S.key==="R"?l():S.key==="m"||S.key==="M"?f():S.key==="1"?p("cinematic"):S.key==="2"?p("keynote"):S.key==="3"?p("footage"):S.key==="4"&&p("cockpit"))};return window.addEventListener("keydown",v),()=>window.removeEventListener("keydown",v)},[a,l,f]),_.jsxs("div",{className:"relative w-screen h-screen overflow-hidden bg-slate-950 font-sans",children:[h==="cinematic"&&_.jsxs(_.Fragment,{children:[_.jsx(JT,{currentTime:t}),_.jsx(Lm,{activeChapter:r}),_.jsx(Im,{text:r.subtitles})]}),h==="keynote"&&_.jsx(eA,{currentTime:t,onJumpToChapter:u}),h==="footage"&&_.jsx(yA,{currentTime:t,isPlaying:i,onTogglePlay:a,onJumpToChapter:u}),h==="cockpit"&&_.jsxs(_.Fragment,{children:[_.jsx(_y,{currentTime:t}),_.jsx(QT,{progress:n,currentTime:t}),_.jsx(Lm,{activeChapter:r}),_.jsx(SA,{activeChapter:r}),_.jsx(MA,{currentTime:t}),_.jsx(Im,{text:r.subtitles})]}),_.jsx(EA,{currentTime:t,duration:e,progress:n,isPlaying:i,activeChapterIndex:s,audioEnabled:o,viewMode:h,onTogglePlay:a,onRestart:l,onSeek:c,onJumpToChapter:u,onToggleAudio:f,onSelectViewMode:v=>p(v)})]})};yu.createRoot(document.getElementById("root")).render(_.jsx(ox.StrictMode,{children:_.jsx(wA,{})}));
