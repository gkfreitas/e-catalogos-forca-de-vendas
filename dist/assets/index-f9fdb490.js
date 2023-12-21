function wp(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const o in r)if(o!=="default"&&!(o in e)){const i=Object.getOwnPropertyDescriptor(r,o);i&&Object.defineProperty(e,o,i.get?i:{enumerable:!0,get:()=>r[o]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const i of o)if(i.type==="childList")for(const l of i.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&r(l)}).observe(document,{childList:!0,subtree:!0});function n(o){const i={};return o.integrity&&(i.integrity=o.integrity),o.referrerPolicy&&(i.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?i.credentials="include":o.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(o){if(o.ep)return;o.ep=!0;const i=n(o);fetch(o.href,i)}})();function _p(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Cc={exports:{}},mi={},Ec={exports:{}},F={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var qr=Symbol.for("react.element"),Sp=Symbol.for("react.portal"),Cp=Symbol.for("react.fragment"),Ep=Symbol.for("react.strict_mode"),kp=Symbol.for("react.profiler"),jp=Symbol.for("react.provider"),Pp=Symbol.for("react.context"),Ip=Symbol.for("react.forward_ref"),Rp=Symbol.for("react.suspense"),Op=Symbol.for("react.memo"),zp=Symbol.for("react.lazy"),As=Symbol.iterator;function Np(e){return e===null||typeof e!="object"?null:(e=As&&e[As]||e["@@iterator"],typeof e=="function"?e:null)}var kc={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},jc=Object.assign,Pc={};function qn(e,t,n){this.props=e,this.context=t,this.refs=Pc,this.updater=n||kc}qn.prototype.isReactComponent={};qn.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};qn.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Ic(){}Ic.prototype=qn.prototype;function Ra(e,t,n){this.props=e,this.context=t,this.refs=Pc,this.updater=n||kc}var Oa=Ra.prototype=new Ic;Oa.constructor=Ra;jc(Oa,qn.prototype);Oa.isPureReactComponent=!0;var Ts=Array.isArray,Rc=Object.prototype.hasOwnProperty,za={current:null},Oc={key:!0,ref:!0,__self:!0,__source:!0};function zc(e,t,n){var r,o={},i=null,l=null;if(t!=null)for(r in t.ref!==void 0&&(l=t.ref),t.key!==void 0&&(i=""+t.key),t)Rc.call(t,r)&&!Oc.hasOwnProperty(r)&&(o[r]=t[r]);var a=arguments.length-2;if(a===1)o.children=n;else if(1<a){for(var s=Array(a),u=0;u<a;u++)s[u]=arguments[u+2];o.children=s}if(e&&e.defaultProps)for(r in a=e.defaultProps,a)o[r]===void 0&&(o[r]=a[r]);return{$$typeof:qr,type:e,key:i,ref:l,props:o,_owner:za.current}}function Ap(e,t){return{$$typeof:qr,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function Na(e){return typeof e=="object"&&e!==null&&e.$$typeof===qr}function Tp(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var Ls=/\/+/g;function bi(e,t){return typeof e=="object"&&e!==null&&e.key!=null?Tp(""+e.key):t.toString(36)}function Co(e,t,n,r,o){var i=typeof e;(i==="undefined"||i==="boolean")&&(e=null);var l=!1;if(e===null)l=!0;else switch(i){case"string":case"number":l=!0;break;case"object":switch(e.$$typeof){case qr:case Sp:l=!0}}if(l)return l=e,o=o(l),e=r===""?"."+bi(l,0):r,Ts(o)?(n="",e!=null&&(n=e.replace(Ls,"$&/")+"/"),Co(o,t,n,"",function(u){return u})):o!=null&&(Na(o)&&(o=Ap(o,n+(!o.key||l&&l.key===o.key?"":(""+o.key).replace(Ls,"$&/")+"/")+e)),t.push(o)),1;if(l=0,r=r===""?".":r+":",Ts(e))for(var a=0;a<e.length;a++){i=e[a];var s=r+bi(i,a);l+=Co(i,t,n,s,o)}else if(s=Np(e),typeof s=="function")for(e=s.call(e),a=0;!(i=e.next()).done;)i=i.value,s=r+bi(i,a++),l+=Co(i,t,n,s,o);else if(i==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return l}function to(e,t,n){if(e==null)return e;var r=[],o=0;return Co(e,r,"","",function(i){return t.call(n,i,o++)}),r}function Lp(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var xe={current:null},Eo={transition:null},Fp={ReactCurrentDispatcher:xe,ReactCurrentBatchConfig:Eo,ReactCurrentOwner:za};F.Children={map:to,forEach:function(e,t,n){to(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return to(e,function(){t++}),t},toArray:function(e){return to(e,function(t){return t})||[]},only:function(e){if(!Na(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};F.Component=qn;F.Fragment=Cp;F.Profiler=kp;F.PureComponent=Ra;F.StrictMode=Ep;F.Suspense=Rp;F.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Fp;F.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=jc({},e.props),o=e.key,i=e.ref,l=e._owner;if(t!=null){if(t.ref!==void 0&&(i=t.ref,l=za.current),t.key!==void 0&&(o=""+t.key),e.type&&e.type.defaultProps)var a=e.type.defaultProps;for(s in t)Rc.call(t,s)&&!Oc.hasOwnProperty(s)&&(r[s]=t[s]===void 0&&a!==void 0?a[s]:t[s])}var s=arguments.length-2;if(s===1)r.children=n;else if(1<s){a=Array(s);for(var u=0;u<s;u++)a[u]=arguments[u+2];r.children=a}return{$$typeof:qr,type:e.type,key:o,ref:i,props:r,_owner:l}};F.createContext=function(e){return e={$$typeof:Pp,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:jp,_context:e},e.Consumer=e};F.createElement=zc;F.createFactory=function(e){var t=zc.bind(null,e);return t.type=e,t};F.createRef=function(){return{current:null}};F.forwardRef=function(e){return{$$typeof:Ip,render:e}};F.isValidElement=Na;F.lazy=function(e){return{$$typeof:zp,_payload:{_status:-1,_result:e},_init:Lp}};F.memo=function(e,t){return{$$typeof:Op,type:e,compare:t===void 0?null:t}};F.startTransition=function(e){var t=Eo.transition;Eo.transition={};try{e()}finally{Eo.transition=t}};F.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};F.useCallback=function(e,t){return xe.current.useCallback(e,t)};F.useContext=function(e){return xe.current.useContext(e)};F.useDebugValue=function(){};F.useDeferredValue=function(e){return xe.current.useDeferredValue(e)};F.useEffect=function(e,t){return xe.current.useEffect(e,t)};F.useId=function(){return xe.current.useId()};F.useImperativeHandle=function(e,t,n){return xe.current.useImperativeHandle(e,t,n)};F.useInsertionEffect=function(e,t){return xe.current.useInsertionEffect(e,t)};F.useLayoutEffect=function(e,t){return xe.current.useLayoutEffect(e,t)};F.useMemo=function(e,t){return xe.current.useMemo(e,t)};F.useReducer=function(e,t,n){return xe.current.useReducer(e,t,n)};F.useRef=function(e){return xe.current.useRef(e)};F.useState=function(e){return xe.current.useState(e)};F.useSyncExternalStore=function(e,t,n){return xe.current.useSyncExternalStore(e,t,n)};F.useTransition=function(){return xe.current.useTransition()};F.version="18.2.0";Ec.exports=F;var x=Ec.exports;const re=_p(x),Mp=wp({__proto__:null,default:re},[x]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var $p=x,Dp=Symbol.for("react.element"),Bp=Symbol.for("react.fragment"),bp=Object.prototype.hasOwnProperty,Up=$p.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Vp={key:!0,ref:!0,__self:!0,__source:!0};function Nc(e,t,n){var r,o={},i=null,l=null;n!==void 0&&(i=""+n),t.key!==void 0&&(i=""+t.key),t.ref!==void 0&&(l=t.ref);for(r in t)bp.call(t,r)&&!Vp.hasOwnProperty(r)&&(o[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)o[r]===void 0&&(o[r]=t[r]);return{$$typeof:Dp,type:e,key:i,ref:l,props:o,_owner:Up.current}}mi.Fragment=Bp;mi.jsx=Nc;mi.jsxs=Nc;Cc.exports=mi;var c=Cc.exports,Cl={},Ac={exports:{}},Oe={},Tc={exports:{}},Lc={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(I,N){var A=I.length;I.push(N);e:for(;0<A;){var $=A-1>>>1,X=I[$];if(0<o(X,N))I[$]=N,I[A]=X,A=$;else break e}}function n(I){return I.length===0?null:I[0]}function r(I){if(I.length===0)return null;var N=I[0],A=I.pop();if(A!==N){I[0]=A;e:for(var $=0,X=I.length,vt=X>>>1;$<vt;){var Ne=2*($+1)-1,lt=I[Ne],Ae=Ne+1,Xe=I[Ae];if(0>o(lt,A))Ae<X&&0>o(Xe,lt)?(I[$]=Xe,I[Ae]=A,$=Ae):(I[$]=lt,I[Ne]=A,$=Ne);else if(Ae<X&&0>o(Xe,A))I[$]=Xe,I[Ae]=A,$=Ae;else break e}}return N}function o(I,N){var A=I.sortIndex-N.sortIndex;return A!==0?A:I.id-N.id}if(typeof performance=="object"&&typeof performance.now=="function"){var i=performance;e.unstable_now=function(){return i.now()}}else{var l=Date,a=l.now();e.unstable_now=function(){return l.now()-a}}var s=[],u=[],f=1,m=null,h=3,v=!1,w=!1,S=!1,j=typeof setTimeout=="function"?setTimeout:null,p=typeof clearTimeout=="function"?clearTimeout:null,d=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function g(I){for(var N=n(u);N!==null;){if(N.callback===null)r(u);else if(N.startTime<=I)r(u),N.sortIndex=N.expirationTime,t(s,N);else break;N=n(u)}}function _(I){if(S=!1,g(I),!w)if(n(s)!==null)w=!0,Zn(C);else{var N=n(u);N!==null&&Wt(_,N.startTime-I)}}function C(I,N){w=!1,S&&(S=!1,p(R),R=-1),v=!0;var A=h;try{for(g(N),m=n(s);m!==null&&(!(m.expirationTime>N)||I&&!K());){var $=m.callback;if(typeof $=="function"){m.callback=null,h=m.priorityLevel;var X=$(m.expirationTime<=N);N=e.unstable_now(),typeof X=="function"?m.callback=X:m===n(s)&&r(s),g(N)}else r(s);m=n(s)}if(m!==null)var vt=!0;else{var Ne=n(u);Ne!==null&&Wt(_,Ne.startTime-N),vt=!1}return vt}finally{m=null,h=A,v=!1}}var k=!1,E=null,R=-1,L=5,z=-1;function K(){return!(e.unstable_now()-z<L)}function Ke(){if(E!==null){var I=e.unstable_now();z=I;var N=!0;try{N=E(!0,I)}finally{N?it():(k=!1,E=null)}}else k=!1}var it;if(typeof d=="function")it=function(){d(Ke)};else if(typeof MessageChannel<"u"){var fn=new MessageChannel,Di=fn.port2;fn.port1.onmessage=Ke,it=function(){Di.postMessage(null)}}else it=function(){j(Ke,0)};function Zn(I){E=I,k||(k=!0,it())}function Wt(I,N){R=j(function(){I(e.unstable_now())},N)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(I){I.callback=null},e.unstable_continueExecution=function(){w||v||(w=!0,Zn(C))},e.unstable_forceFrameRate=function(I){0>I||125<I?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):L=0<I?Math.floor(1e3/I):5},e.unstable_getCurrentPriorityLevel=function(){return h},e.unstable_getFirstCallbackNode=function(){return n(s)},e.unstable_next=function(I){switch(h){case 1:case 2:case 3:var N=3;break;default:N=h}var A=h;h=N;try{return I()}finally{h=A}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(I,N){switch(I){case 1:case 2:case 3:case 4:case 5:break;default:I=3}var A=h;h=I;try{return N()}finally{h=A}},e.unstable_scheduleCallback=function(I,N,A){var $=e.unstable_now();switch(typeof A=="object"&&A!==null?(A=A.delay,A=typeof A=="number"&&0<A?$+A:$):A=$,I){case 1:var X=-1;break;case 2:X=250;break;case 5:X=1073741823;break;case 4:X=1e4;break;default:X=5e3}return X=A+X,I={id:f++,callback:N,priorityLevel:I,startTime:A,expirationTime:X,sortIndex:-1},A>$?(I.sortIndex=A,t(u,I),n(s)===null&&I===n(u)&&(S?(p(R),R=-1):S=!0,Wt(_,A-$))):(I.sortIndex=X,t(s,I),w||v||(w=!0,Zn(C))),I},e.unstable_shouldYield=K,e.unstable_wrapCallback=function(I){var N=h;return function(){var A=h;h=N;try{return I.apply(this,arguments)}finally{h=A}}}})(Lc);Tc.exports=Lc;var Hp=Tc.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Fc=x,Re=Hp;function P(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Mc=new Set,kr={};function un(e,t){Tn(e,t),Tn(e+"Capture",t)}function Tn(e,t){for(kr[e]=t,e=0;e<t.length;e++)Mc.add(t[e])}var pt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),El=Object.prototype.hasOwnProperty,Wp=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Fs={},Ms={};function qp(e){return El.call(Ms,e)?!0:El.call(Fs,e)?!1:Wp.test(e)?Ms[e]=!0:(Fs[e]=!0,!1)}function Gp(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Qp(e,t,n,r){if(t===null||typeof t>"u"||Gp(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function we(e,t,n,r,o,i,l){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=o,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=i,this.removeEmptyString=l}var de={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){de[e]=new we(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];de[t]=new we(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){de[e]=new we(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){de[e]=new we(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){de[e]=new we(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){de[e]=new we(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){de[e]=new we(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){de[e]=new we(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){de[e]=new we(e,5,!1,e.toLowerCase(),null,!1,!1)});var Aa=/[\-:]([a-z])/g;function Ta(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Aa,Ta);de[t]=new we(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Aa,Ta);de[t]=new we(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Aa,Ta);de[t]=new we(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){de[e]=new we(e,1,!1,e.toLowerCase(),null,!1,!1)});de.xlinkHref=new we("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){de[e]=new we(e,1,!1,e.toLowerCase(),null,!0,!0)});function La(e,t,n,r){var o=de.hasOwnProperty(t)?de[t]:null;(o!==null?o.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(Qp(t,n,o,r)&&(n=null),r||o===null?qp(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):o.mustUseProperty?e[o.propertyName]=n===null?o.type===3?!1:"":n:(t=o.attributeName,r=o.attributeNamespace,n===null?e.removeAttribute(t):(o=o.type,n=o===3||o===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var yt=Fc.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,no=Symbol.for("react.element"),mn=Symbol.for("react.portal"),gn=Symbol.for("react.fragment"),Fa=Symbol.for("react.strict_mode"),kl=Symbol.for("react.profiler"),$c=Symbol.for("react.provider"),Dc=Symbol.for("react.context"),Ma=Symbol.for("react.forward_ref"),jl=Symbol.for("react.suspense"),Pl=Symbol.for("react.suspense_list"),$a=Symbol.for("react.memo"),St=Symbol.for("react.lazy"),Bc=Symbol.for("react.offscreen"),$s=Symbol.iterator;function er(e){return e===null||typeof e!="object"?null:(e=$s&&e[$s]||e["@@iterator"],typeof e=="function"?e:null)}var Q=Object.assign,Ui;function ur(e){if(Ui===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Ui=t&&t[1]||""}return`
`+Ui+e}var Vi=!1;function Hi(e,t){if(!e||Vi)return"";Vi=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(u){var r=u}Reflect.construct(e,[],t)}else{try{t.call()}catch(u){r=u}e.call(t.prototype)}else{try{throw Error()}catch(u){r=u}e()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var o=u.stack.split(`
`),i=r.stack.split(`
`),l=o.length-1,a=i.length-1;1<=l&&0<=a&&o[l]!==i[a];)a--;for(;1<=l&&0<=a;l--,a--)if(o[l]!==i[a]){if(l!==1||a!==1)do if(l--,a--,0>a||o[l]!==i[a]){var s=`
`+o[l].replace(" at new "," at ");return e.displayName&&s.includes("<anonymous>")&&(s=s.replace("<anonymous>",e.displayName)),s}while(1<=l&&0<=a);break}}}finally{Vi=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?ur(e):""}function Yp(e){switch(e.tag){case 5:return ur(e.type);case 16:return ur("Lazy");case 13:return ur("Suspense");case 19:return ur("SuspenseList");case 0:case 2:case 15:return e=Hi(e.type,!1),e;case 11:return e=Hi(e.type.render,!1),e;case 1:return e=Hi(e.type,!0),e;default:return""}}function Il(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case gn:return"Fragment";case mn:return"Portal";case kl:return"Profiler";case Fa:return"StrictMode";case jl:return"Suspense";case Pl:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Dc:return(e.displayName||"Context")+".Consumer";case $c:return(e._context.displayName||"Context")+".Provider";case Ma:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case $a:return t=e.displayName||null,t!==null?t:Il(e.type)||"Memo";case St:t=e._payload,e=e._init;try{return Il(e(t))}catch{}}return null}function Kp(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Il(t);case 8:return t===Fa?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function Bt(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function bc(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Xp(e){var t=bc(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var o=n.get,i=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return o.call(this)},set:function(l){r=""+l,i.call(this,l)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(l){r=""+l},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function ro(e){e._valueTracker||(e._valueTracker=Xp(e))}function Uc(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=bc(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function Bo(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Rl(e,t){var n=t.checked;return Q({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function Ds(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=Bt(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Vc(e,t){t=t.checked,t!=null&&La(e,"checked",t,!1)}function Ol(e,t){Vc(e,t);var n=Bt(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?zl(e,t.type,n):t.hasOwnProperty("defaultValue")&&zl(e,t.type,Bt(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Bs(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function zl(e,t,n){(t!=="number"||Bo(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var cr=Array.isArray;function In(e,t,n,r){if(e=e.options,t){t={};for(var o=0;o<n.length;o++)t["$"+n[o]]=!0;for(n=0;n<e.length;n++)o=t.hasOwnProperty("$"+e[n].value),e[n].selected!==o&&(e[n].selected=o),o&&r&&(e[n].defaultSelected=!0)}else{for(n=""+Bt(n),t=null,o=0;o<e.length;o++){if(e[o].value===n){e[o].selected=!0,r&&(e[o].defaultSelected=!0);return}t!==null||e[o].disabled||(t=e[o])}t!==null&&(t.selected=!0)}}function Nl(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(P(91));return Q({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function bs(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(P(92));if(cr(n)){if(1<n.length)throw Error(P(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:Bt(n)}}function Hc(e,t){var n=Bt(t.value),r=Bt(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function Us(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Wc(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Al(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Wc(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var oo,qc=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,o){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,o)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(oo=oo||document.createElement("div"),oo.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=oo.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function jr(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var hr={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Jp=["Webkit","ms","Moz","O"];Object.keys(hr).forEach(function(e){Jp.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),hr[t]=hr[e]})});function Gc(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||hr.hasOwnProperty(e)&&hr[e]?(""+t).trim():t+"px"}function Qc(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,o=Gc(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,o):e[n]=o}}var Zp=Q({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Tl(e,t){if(t){if(Zp[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(P(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(P(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(P(61))}if(t.style!=null&&typeof t.style!="object")throw Error(P(62))}}function Ll(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Fl=null;function Da(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Ml=null,Rn=null,On=null;function Vs(e){if(e=Yr(e)){if(typeof Ml!="function")throw Error(P(280));var t=e.stateNode;t&&(t=wi(t),Ml(e.stateNode,e.type,t))}}function Yc(e){Rn?On?On.push(e):On=[e]:Rn=e}function Kc(){if(Rn){var e=Rn,t=On;if(On=Rn=null,Vs(e),t)for(e=0;e<t.length;e++)Vs(t[e])}}function Xc(e,t){return e(t)}function Jc(){}var Wi=!1;function Zc(e,t,n){if(Wi)return e(t,n);Wi=!0;try{return Xc(e,t,n)}finally{Wi=!1,(Rn!==null||On!==null)&&(Jc(),Kc())}}function Pr(e,t){var n=e.stateNode;if(n===null)return null;var r=wi(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(P(231,t,typeof n));return n}var $l=!1;if(pt)try{var tr={};Object.defineProperty(tr,"passive",{get:function(){$l=!0}}),window.addEventListener("test",tr,tr),window.removeEventListener("test",tr,tr)}catch{$l=!1}function e0(e,t,n,r,o,i,l,a,s){var u=Array.prototype.slice.call(arguments,3);try{t.apply(n,u)}catch(f){this.onError(f)}}var mr=!1,bo=null,Uo=!1,Dl=null,t0={onError:function(e){mr=!0,bo=e}};function n0(e,t,n,r,o,i,l,a,s){mr=!1,bo=null,e0.apply(t0,arguments)}function r0(e,t,n,r,o,i,l,a,s){if(n0.apply(this,arguments),mr){if(mr){var u=bo;mr=!1,bo=null}else throw Error(P(198));Uo||(Uo=!0,Dl=u)}}function cn(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function ed(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Hs(e){if(cn(e)!==e)throw Error(P(188))}function o0(e){var t=e.alternate;if(!t){if(t=cn(e),t===null)throw Error(P(188));return t!==e?null:e}for(var n=e,r=t;;){var o=n.return;if(o===null)break;var i=o.alternate;if(i===null){if(r=o.return,r!==null){n=r;continue}break}if(o.child===i.child){for(i=o.child;i;){if(i===n)return Hs(o),e;if(i===r)return Hs(o),t;i=i.sibling}throw Error(P(188))}if(n.return!==r.return)n=o,r=i;else{for(var l=!1,a=o.child;a;){if(a===n){l=!0,n=o,r=i;break}if(a===r){l=!0,r=o,n=i;break}a=a.sibling}if(!l){for(a=i.child;a;){if(a===n){l=!0,n=i,r=o;break}if(a===r){l=!0,r=i,n=o;break}a=a.sibling}if(!l)throw Error(P(189))}}if(n.alternate!==r)throw Error(P(190))}if(n.tag!==3)throw Error(P(188));return n.stateNode.current===n?e:t}function td(e){return e=o0(e),e!==null?nd(e):null}function nd(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=nd(e);if(t!==null)return t;e=e.sibling}return null}var rd=Re.unstable_scheduleCallback,Ws=Re.unstable_cancelCallback,i0=Re.unstable_shouldYield,l0=Re.unstable_requestPaint,J=Re.unstable_now,a0=Re.unstable_getCurrentPriorityLevel,Ba=Re.unstable_ImmediatePriority,od=Re.unstable_UserBlockingPriority,Vo=Re.unstable_NormalPriority,s0=Re.unstable_LowPriority,id=Re.unstable_IdlePriority,gi=null,nt=null;function u0(e){if(nt&&typeof nt.onCommitFiberRoot=="function")try{nt.onCommitFiberRoot(gi,e,void 0,(e.current.flags&128)===128)}catch{}}var We=Math.clz32?Math.clz32:f0,c0=Math.log,d0=Math.LN2;function f0(e){return e>>>=0,e===0?32:31-(c0(e)/d0|0)|0}var io=64,lo=4194304;function dr(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Ho(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,o=e.suspendedLanes,i=e.pingedLanes,l=n&268435455;if(l!==0){var a=l&~o;a!==0?r=dr(a):(i&=l,i!==0&&(r=dr(i)))}else l=n&~o,l!==0?r=dr(l):i!==0&&(r=dr(i));if(r===0)return 0;if(t!==0&&t!==r&&!(t&o)&&(o=r&-r,i=t&-t,o>=i||o===16&&(i&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-We(t),o=1<<n,r|=e[n],t&=~o;return r}function p0(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function h0(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,o=e.expirationTimes,i=e.pendingLanes;0<i;){var l=31-We(i),a=1<<l,s=o[l];s===-1?(!(a&n)||a&r)&&(o[l]=p0(a,t)):s<=t&&(e.expiredLanes|=a),i&=~a}}function Bl(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function ld(){var e=io;return io<<=1,!(io&4194240)&&(io=64),e}function qi(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Gr(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-We(t),e[t]=n}function m0(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var o=31-We(n),i=1<<o;t[o]=0,r[o]=-1,e[o]=-1,n&=~i}}function ba(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-We(n),o=1<<r;o&t|e[r]&t&&(e[r]|=t),n&=~o}}var B=0;function ad(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var sd,Ua,ud,cd,dd,bl=!1,ao=[],Ot=null,zt=null,Nt=null,Ir=new Map,Rr=new Map,Et=[],g0="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function qs(e,t){switch(e){case"focusin":case"focusout":Ot=null;break;case"dragenter":case"dragleave":zt=null;break;case"mouseover":case"mouseout":Nt=null;break;case"pointerover":case"pointerout":Ir.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Rr.delete(t.pointerId)}}function nr(e,t,n,r,o,i){return e===null||e.nativeEvent!==i?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:i,targetContainers:[o]},t!==null&&(t=Yr(t),t!==null&&Ua(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,o!==null&&t.indexOf(o)===-1&&t.push(o),e)}function y0(e,t,n,r,o){switch(t){case"focusin":return Ot=nr(Ot,e,t,n,r,o),!0;case"dragenter":return zt=nr(zt,e,t,n,r,o),!0;case"mouseover":return Nt=nr(Nt,e,t,n,r,o),!0;case"pointerover":var i=o.pointerId;return Ir.set(i,nr(Ir.get(i)||null,e,t,n,r,o)),!0;case"gotpointercapture":return i=o.pointerId,Rr.set(i,nr(Rr.get(i)||null,e,t,n,r,o)),!0}return!1}function fd(e){var t=Yt(e.target);if(t!==null){var n=cn(t);if(n!==null){if(t=n.tag,t===13){if(t=ed(n),t!==null){e.blockedOn=t,dd(e.priority,function(){ud(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function ko(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Ul(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);Fl=r,n.target.dispatchEvent(r),Fl=null}else return t=Yr(n),t!==null&&Ua(t),e.blockedOn=n,!1;t.shift()}return!0}function Gs(e,t,n){ko(e)&&n.delete(t)}function v0(){bl=!1,Ot!==null&&ko(Ot)&&(Ot=null),zt!==null&&ko(zt)&&(zt=null),Nt!==null&&ko(Nt)&&(Nt=null),Ir.forEach(Gs),Rr.forEach(Gs)}function rr(e,t){e.blockedOn===t&&(e.blockedOn=null,bl||(bl=!0,Re.unstable_scheduleCallback(Re.unstable_NormalPriority,v0)))}function Or(e){function t(o){return rr(o,e)}if(0<ao.length){rr(ao[0],e);for(var n=1;n<ao.length;n++){var r=ao[n];r.blockedOn===e&&(r.blockedOn=null)}}for(Ot!==null&&rr(Ot,e),zt!==null&&rr(zt,e),Nt!==null&&rr(Nt,e),Ir.forEach(t),Rr.forEach(t),n=0;n<Et.length;n++)r=Et[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<Et.length&&(n=Et[0],n.blockedOn===null);)fd(n),n.blockedOn===null&&Et.shift()}var zn=yt.ReactCurrentBatchConfig,Wo=!0;function x0(e,t,n,r){var o=B,i=zn.transition;zn.transition=null;try{B=1,Va(e,t,n,r)}finally{B=o,zn.transition=i}}function w0(e,t,n,r){var o=B,i=zn.transition;zn.transition=null;try{B=4,Va(e,t,n,r)}finally{B=o,zn.transition=i}}function Va(e,t,n,r){if(Wo){var o=Ul(e,t,n,r);if(o===null)nl(e,t,r,qo,n),qs(e,r);else if(y0(o,e,t,n,r))r.stopPropagation();else if(qs(e,r),t&4&&-1<g0.indexOf(e)){for(;o!==null;){var i=Yr(o);if(i!==null&&sd(i),i=Ul(e,t,n,r),i===null&&nl(e,t,r,qo,n),i===o)break;o=i}o!==null&&r.stopPropagation()}else nl(e,t,r,null,n)}}var qo=null;function Ul(e,t,n,r){if(qo=null,e=Da(r),e=Yt(e),e!==null)if(t=cn(e),t===null)e=null;else if(n=t.tag,n===13){if(e=ed(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return qo=e,null}function pd(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(a0()){case Ba:return 1;case od:return 4;case Vo:case s0:return 16;case id:return 536870912;default:return 16}default:return 16}}var Pt=null,Ha=null,jo=null;function hd(){if(jo)return jo;var e,t=Ha,n=t.length,r,o="value"in Pt?Pt.value:Pt.textContent,i=o.length;for(e=0;e<n&&t[e]===o[e];e++);var l=n-e;for(r=1;r<=l&&t[n-r]===o[i-r];r++);return jo=o.slice(e,1<r?1-r:void 0)}function Po(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function so(){return!0}function Qs(){return!1}function ze(e){function t(n,r,o,i,l){this._reactName=n,this._targetInst=o,this.type=r,this.nativeEvent=i,this.target=l,this.currentTarget=null;for(var a in e)e.hasOwnProperty(a)&&(n=e[a],this[a]=n?n(i):i[a]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?so:Qs,this.isPropagationStopped=Qs,this}return Q(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=so)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=so)},persist:function(){},isPersistent:so}),t}var Gn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Wa=ze(Gn),Qr=Q({},Gn,{view:0,detail:0}),_0=ze(Qr),Gi,Qi,or,yi=Q({},Qr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:qa,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==or&&(or&&e.type==="mousemove"?(Gi=e.screenX-or.screenX,Qi=e.screenY-or.screenY):Qi=Gi=0,or=e),Gi)},movementY:function(e){return"movementY"in e?e.movementY:Qi}}),Ys=ze(yi),S0=Q({},yi,{dataTransfer:0}),C0=ze(S0),E0=Q({},Qr,{relatedTarget:0}),Yi=ze(E0),k0=Q({},Gn,{animationName:0,elapsedTime:0,pseudoElement:0}),j0=ze(k0),P0=Q({},Gn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),I0=ze(P0),R0=Q({},Gn,{data:0}),Ks=ze(R0),O0={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},z0={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},N0={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function A0(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=N0[e])?!!t[e]:!1}function qa(){return A0}var T0=Q({},Qr,{key:function(e){if(e.key){var t=O0[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Po(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?z0[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:qa,charCode:function(e){return e.type==="keypress"?Po(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Po(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),L0=ze(T0),F0=Q({},yi,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Xs=ze(F0),M0=Q({},Qr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:qa}),$0=ze(M0),D0=Q({},Gn,{propertyName:0,elapsedTime:0,pseudoElement:0}),B0=ze(D0),b0=Q({},yi,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),U0=ze(b0),V0=[9,13,27,32],Ga=pt&&"CompositionEvent"in window,gr=null;pt&&"documentMode"in document&&(gr=document.documentMode);var H0=pt&&"TextEvent"in window&&!gr,md=pt&&(!Ga||gr&&8<gr&&11>=gr),Js=String.fromCharCode(32),Zs=!1;function gd(e,t){switch(e){case"keyup":return V0.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function yd(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var yn=!1;function W0(e,t){switch(e){case"compositionend":return yd(t);case"keypress":return t.which!==32?null:(Zs=!0,Js);case"textInput":return e=t.data,e===Js&&Zs?null:e;default:return null}}function q0(e,t){if(yn)return e==="compositionend"||!Ga&&gd(e,t)?(e=hd(),jo=Ha=Pt=null,yn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return md&&t.locale!=="ko"?null:t.data;default:return null}}var G0={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function eu(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!G0[e.type]:t==="textarea"}function vd(e,t,n,r){Yc(r),t=Go(t,"onChange"),0<t.length&&(n=new Wa("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var yr=null,zr=null;function Q0(e){Rd(e,0)}function vi(e){var t=wn(e);if(Uc(t))return e}function Y0(e,t){if(e==="change")return t}var xd=!1;if(pt){var Ki;if(pt){var Xi="oninput"in document;if(!Xi){var tu=document.createElement("div");tu.setAttribute("oninput","return;"),Xi=typeof tu.oninput=="function"}Ki=Xi}else Ki=!1;xd=Ki&&(!document.documentMode||9<document.documentMode)}function nu(){yr&&(yr.detachEvent("onpropertychange",wd),zr=yr=null)}function wd(e){if(e.propertyName==="value"&&vi(zr)){var t=[];vd(t,zr,e,Da(e)),Zc(Q0,t)}}function K0(e,t,n){e==="focusin"?(nu(),yr=t,zr=n,yr.attachEvent("onpropertychange",wd)):e==="focusout"&&nu()}function X0(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return vi(zr)}function J0(e,t){if(e==="click")return vi(t)}function Z0(e,t){if(e==="input"||e==="change")return vi(t)}function e1(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Qe=typeof Object.is=="function"?Object.is:e1;function Nr(e,t){if(Qe(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var o=n[r];if(!El.call(t,o)||!Qe(e[o],t[o]))return!1}return!0}function ru(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function ou(e,t){var n=ru(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=ru(n)}}function _d(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?_d(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Sd(){for(var e=window,t=Bo();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Bo(e.document)}return t}function Qa(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function t1(e){var t=Sd(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&_d(n.ownerDocument.documentElement,n)){if(r!==null&&Qa(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var o=n.textContent.length,i=Math.min(r.start,o);r=r.end===void 0?i:Math.min(r.end,o),!e.extend&&i>r&&(o=r,r=i,i=o),o=ou(n,i);var l=ou(n,r);o&&l&&(e.rangeCount!==1||e.anchorNode!==o.node||e.anchorOffset!==o.offset||e.focusNode!==l.node||e.focusOffset!==l.offset)&&(t=t.createRange(),t.setStart(o.node,o.offset),e.removeAllRanges(),i>r?(e.addRange(t),e.extend(l.node,l.offset)):(t.setEnd(l.node,l.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var n1=pt&&"documentMode"in document&&11>=document.documentMode,vn=null,Vl=null,vr=null,Hl=!1;function iu(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Hl||vn==null||vn!==Bo(r)||(r=vn,"selectionStart"in r&&Qa(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),vr&&Nr(vr,r)||(vr=r,r=Go(Vl,"onSelect"),0<r.length&&(t=new Wa("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=vn)))}function uo(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var xn={animationend:uo("Animation","AnimationEnd"),animationiteration:uo("Animation","AnimationIteration"),animationstart:uo("Animation","AnimationStart"),transitionend:uo("Transition","TransitionEnd")},Ji={},Cd={};pt&&(Cd=document.createElement("div").style,"AnimationEvent"in window||(delete xn.animationend.animation,delete xn.animationiteration.animation,delete xn.animationstart.animation),"TransitionEvent"in window||delete xn.transitionend.transition);function xi(e){if(Ji[e])return Ji[e];if(!xn[e])return e;var t=xn[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Cd)return Ji[e]=t[n];return e}var Ed=xi("animationend"),kd=xi("animationiteration"),jd=xi("animationstart"),Pd=xi("transitionend"),Id=new Map,lu="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Ut(e,t){Id.set(e,t),un(t,[e])}for(var Zi=0;Zi<lu.length;Zi++){var el=lu[Zi],r1=el.toLowerCase(),o1=el[0].toUpperCase()+el.slice(1);Ut(r1,"on"+o1)}Ut(Ed,"onAnimationEnd");Ut(kd,"onAnimationIteration");Ut(jd,"onAnimationStart");Ut("dblclick","onDoubleClick");Ut("focusin","onFocus");Ut("focusout","onBlur");Ut(Pd,"onTransitionEnd");Tn("onMouseEnter",["mouseout","mouseover"]);Tn("onMouseLeave",["mouseout","mouseover"]);Tn("onPointerEnter",["pointerout","pointerover"]);Tn("onPointerLeave",["pointerout","pointerover"]);un("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));un("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));un("onBeforeInput",["compositionend","keypress","textInput","paste"]);un("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));un("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));un("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var fr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),i1=new Set("cancel close invalid load scroll toggle".split(" ").concat(fr));function au(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,r0(r,t,void 0,e),e.currentTarget=null}function Rd(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],o=r.event;r=r.listeners;e:{var i=void 0;if(t)for(var l=r.length-1;0<=l;l--){var a=r[l],s=a.instance,u=a.currentTarget;if(a=a.listener,s!==i&&o.isPropagationStopped())break e;au(o,a,u),i=s}else for(l=0;l<r.length;l++){if(a=r[l],s=a.instance,u=a.currentTarget,a=a.listener,s!==i&&o.isPropagationStopped())break e;au(o,a,u),i=s}}}if(Uo)throw e=Dl,Uo=!1,Dl=null,e}function U(e,t){var n=t[Yl];n===void 0&&(n=t[Yl]=new Set);var r=e+"__bubble";n.has(r)||(Od(t,e,2,!1),n.add(r))}function tl(e,t,n){var r=0;t&&(r|=4),Od(n,e,r,t)}var co="_reactListening"+Math.random().toString(36).slice(2);function Ar(e){if(!e[co]){e[co]=!0,Mc.forEach(function(n){n!=="selectionchange"&&(i1.has(n)||tl(n,!1,e),tl(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[co]||(t[co]=!0,tl("selectionchange",!1,t))}}function Od(e,t,n,r){switch(pd(t)){case 1:var o=x0;break;case 4:o=w0;break;default:o=Va}n=o.bind(null,t,n,e),o=void 0,!$l||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(o=!0),r?o!==void 0?e.addEventListener(t,n,{capture:!0,passive:o}):e.addEventListener(t,n,!0):o!==void 0?e.addEventListener(t,n,{passive:o}):e.addEventListener(t,n,!1)}function nl(e,t,n,r,o){var i=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var l=r.tag;if(l===3||l===4){var a=r.stateNode.containerInfo;if(a===o||a.nodeType===8&&a.parentNode===o)break;if(l===4)for(l=r.return;l!==null;){var s=l.tag;if((s===3||s===4)&&(s=l.stateNode.containerInfo,s===o||s.nodeType===8&&s.parentNode===o))return;l=l.return}for(;a!==null;){if(l=Yt(a),l===null)return;if(s=l.tag,s===5||s===6){r=i=l;continue e}a=a.parentNode}}r=r.return}Zc(function(){var u=i,f=Da(n),m=[];e:{var h=Id.get(e);if(h!==void 0){var v=Wa,w=e;switch(e){case"keypress":if(Po(n)===0)break e;case"keydown":case"keyup":v=L0;break;case"focusin":w="focus",v=Yi;break;case"focusout":w="blur",v=Yi;break;case"beforeblur":case"afterblur":v=Yi;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":v=Ys;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":v=C0;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":v=$0;break;case Ed:case kd:case jd:v=j0;break;case Pd:v=B0;break;case"scroll":v=_0;break;case"wheel":v=U0;break;case"copy":case"cut":case"paste":v=I0;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":v=Xs}var S=(t&4)!==0,j=!S&&e==="scroll",p=S?h!==null?h+"Capture":null:h;S=[];for(var d=u,g;d!==null;){g=d;var _=g.stateNode;if(g.tag===5&&_!==null&&(g=_,p!==null&&(_=Pr(d,p),_!=null&&S.push(Tr(d,_,g)))),j)break;d=d.return}0<S.length&&(h=new v(h,w,null,n,f),m.push({event:h,listeners:S}))}}if(!(t&7)){e:{if(h=e==="mouseover"||e==="pointerover",v=e==="mouseout"||e==="pointerout",h&&n!==Fl&&(w=n.relatedTarget||n.fromElement)&&(Yt(w)||w[ht]))break e;if((v||h)&&(h=f.window===f?f:(h=f.ownerDocument)?h.defaultView||h.parentWindow:window,v?(w=n.relatedTarget||n.toElement,v=u,w=w?Yt(w):null,w!==null&&(j=cn(w),w!==j||w.tag!==5&&w.tag!==6)&&(w=null)):(v=null,w=u),v!==w)){if(S=Ys,_="onMouseLeave",p="onMouseEnter",d="mouse",(e==="pointerout"||e==="pointerover")&&(S=Xs,_="onPointerLeave",p="onPointerEnter",d="pointer"),j=v==null?h:wn(v),g=w==null?h:wn(w),h=new S(_,d+"leave",v,n,f),h.target=j,h.relatedTarget=g,_=null,Yt(f)===u&&(S=new S(p,d+"enter",w,n,f),S.target=g,S.relatedTarget=j,_=S),j=_,v&&w)t:{for(S=v,p=w,d=0,g=S;g;g=pn(g))d++;for(g=0,_=p;_;_=pn(_))g++;for(;0<d-g;)S=pn(S),d--;for(;0<g-d;)p=pn(p),g--;for(;d--;){if(S===p||p!==null&&S===p.alternate)break t;S=pn(S),p=pn(p)}S=null}else S=null;v!==null&&su(m,h,v,S,!1),w!==null&&j!==null&&su(m,j,w,S,!0)}}e:{if(h=u?wn(u):window,v=h.nodeName&&h.nodeName.toLowerCase(),v==="select"||v==="input"&&h.type==="file")var C=Y0;else if(eu(h))if(xd)C=Z0;else{C=X0;var k=K0}else(v=h.nodeName)&&v.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(C=J0);if(C&&(C=C(e,u))){vd(m,C,n,f);break e}k&&k(e,h,u),e==="focusout"&&(k=h._wrapperState)&&k.controlled&&h.type==="number"&&zl(h,"number",h.value)}switch(k=u?wn(u):window,e){case"focusin":(eu(k)||k.contentEditable==="true")&&(vn=k,Vl=u,vr=null);break;case"focusout":vr=Vl=vn=null;break;case"mousedown":Hl=!0;break;case"contextmenu":case"mouseup":case"dragend":Hl=!1,iu(m,n,f);break;case"selectionchange":if(n1)break;case"keydown":case"keyup":iu(m,n,f)}var E;if(Ga)e:{switch(e){case"compositionstart":var R="onCompositionStart";break e;case"compositionend":R="onCompositionEnd";break e;case"compositionupdate":R="onCompositionUpdate";break e}R=void 0}else yn?gd(e,n)&&(R="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(R="onCompositionStart");R&&(md&&n.locale!=="ko"&&(yn||R!=="onCompositionStart"?R==="onCompositionEnd"&&yn&&(E=hd()):(Pt=f,Ha="value"in Pt?Pt.value:Pt.textContent,yn=!0)),k=Go(u,R),0<k.length&&(R=new Ks(R,e,null,n,f),m.push({event:R,listeners:k}),E?R.data=E:(E=yd(n),E!==null&&(R.data=E)))),(E=H0?W0(e,n):q0(e,n))&&(u=Go(u,"onBeforeInput"),0<u.length&&(f=new Ks("onBeforeInput","beforeinput",null,n,f),m.push({event:f,listeners:u}),f.data=E))}Rd(m,t)})}function Tr(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Go(e,t){for(var n=t+"Capture",r=[];e!==null;){var o=e,i=o.stateNode;o.tag===5&&i!==null&&(o=i,i=Pr(e,n),i!=null&&r.unshift(Tr(e,i,o)),i=Pr(e,t),i!=null&&r.push(Tr(e,i,o))),e=e.return}return r}function pn(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function su(e,t,n,r,o){for(var i=t._reactName,l=[];n!==null&&n!==r;){var a=n,s=a.alternate,u=a.stateNode;if(s!==null&&s===r)break;a.tag===5&&u!==null&&(a=u,o?(s=Pr(n,i),s!=null&&l.unshift(Tr(n,s,a))):o||(s=Pr(n,i),s!=null&&l.push(Tr(n,s,a)))),n=n.return}l.length!==0&&e.push({event:t,listeners:l})}var l1=/\r\n?/g,a1=/\u0000|\uFFFD/g;function uu(e){return(typeof e=="string"?e:""+e).replace(l1,`
`).replace(a1,"")}function fo(e,t,n){if(t=uu(t),uu(e)!==t&&n)throw Error(P(425))}function Qo(){}var Wl=null,ql=null;function Gl(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Ql=typeof setTimeout=="function"?setTimeout:void 0,s1=typeof clearTimeout=="function"?clearTimeout:void 0,cu=typeof Promise=="function"?Promise:void 0,u1=typeof queueMicrotask=="function"?queueMicrotask:typeof cu<"u"?function(e){return cu.resolve(null).then(e).catch(c1)}:Ql;function c1(e){setTimeout(function(){throw e})}function rl(e,t){var n=t,r=0;do{var o=n.nextSibling;if(e.removeChild(n),o&&o.nodeType===8)if(n=o.data,n==="/$"){if(r===0){e.removeChild(o),Or(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=o}while(n);Or(t)}function At(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function du(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var Qn=Math.random().toString(36).slice(2),tt="__reactFiber$"+Qn,Lr="__reactProps$"+Qn,ht="__reactContainer$"+Qn,Yl="__reactEvents$"+Qn,d1="__reactListeners$"+Qn,f1="__reactHandles$"+Qn;function Yt(e){var t=e[tt];if(t)return t;for(var n=e.parentNode;n;){if(t=n[ht]||n[tt]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=du(e);e!==null;){if(n=e[tt])return n;e=du(e)}return t}e=n,n=e.parentNode}return null}function Yr(e){return e=e[tt]||e[ht],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function wn(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(P(33))}function wi(e){return e[Lr]||null}var Kl=[],_n=-1;function Vt(e){return{current:e}}function H(e){0>_n||(e.current=Kl[_n],Kl[_n]=null,_n--)}function b(e,t){_n++,Kl[_n]=e.current,e.current=t}var bt={},ge=Vt(bt),Ce=Vt(!1),rn=bt;function Ln(e,t){var n=e.type.contextTypes;if(!n)return bt;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var o={},i;for(i in n)o[i]=t[i];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=o),o}function Ee(e){return e=e.childContextTypes,e!=null}function Yo(){H(Ce),H(ge)}function fu(e,t,n){if(ge.current!==bt)throw Error(P(168));b(ge,t),b(Ce,n)}function zd(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var o in r)if(!(o in t))throw Error(P(108,Kp(e)||"Unknown",o));return Q({},n,r)}function Ko(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||bt,rn=ge.current,b(ge,e),b(Ce,Ce.current),!0}function pu(e,t,n){var r=e.stateNode;if(!r)throw Error(P(169));n?(e=zd(e,t,rn),r.__reactInternalMemoizedMergedChildContext=e,H(Ce),H(ge),b(ge,e)):H(Ce),b(Ce,n)}var ut=null,_i=!1,ol=!1;function Nd(e){ut===null?ut=[e]:ut.push(e)}function p1(e){_i=!0,Nd(e)}function Ht(){if(!ol&&ut!==null){ol=!0;var e=0,t=B;try{var n=ut;for(B=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}ut=null,_i=!1}catch(o){throw ut!==null&&(ut=ut.slice(e+1)),rd(Ba,Ht),o}finally{B=t,ol=!1}}return null}var Sn=[],Cn=0,Xo=null,Jo=0,Te=[],Le=0,on=null,ct=1,dt="";function Gt(e,t){Sn[Cn++]=Jo,Sn[Cn++]=Xo,Xo=e,Jo=t}function Ad(e,t,n){Te[Le++]=ct,Te[Le++]=dt,Te[Le++]=on,on=e;var r=ct;e=dt;var o=32-We(r)-1;r&=~(1<<o),n+=1;var i=32-We(t)+o;if(30<i){var l=o-o%5;i=(r&(1<<l)-1).toString(32),r>>=l,o-=l,ct=1<<32-We(t)+o|n<<o|r,dt=i+e}else ct=1<<i|n<<o|r,dt=e}function Ya(e){e.return!==null&&(Gt(e,1),Ad(e,1,0))}function Ka(e){for(;e===Xo;)Xo=Sn[--Cn],Sn[Cn]=null,Jo=Sn[--Cn],Sn[Cn]=null;for(;e===on;)on=Te[--Le],Te[Le]=null,dt=Te[--Le],Te[Le]=null,ct=Te[--Le],Te[Le]=null}var Ie=null,Pe=null,W=!1,He=null;function Td(e,t){var n=Fe(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function hu(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,Ie=e,Pe=At(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,Ie=e,Pe=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=on!==null?{id:ct,overflow:dt}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=Fe(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,Ie=e,Pe=null,!0):!1;default:return!1}}function Xl(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Jl(e){if(W){var t=Pe;if(t){var n=t;if(!hu(e,t)){if(Xl(e))throw Error(P(418));t=At(n.nextSibling);var r=Ie;t&&hu(e,t)?Td(r,n):(e.flags=e.flags&-4097|2,W=!1,Ie=e)}}else{if(Xl(e))throw Error(P(418));e.flags=e.flags&-4097|2,W=!1,Ie=e}}}function mu(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Ie=e}function po(e){if(e!==Ie)return!1;if(!W)return mu(e),W=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Gl(e.type,e.memoizedProps)),t&&(t=Pe)){if(Xl(e))throw Ld(),Error(P(418));for(;t;)Td(e,t),t=At(t.nextSibling)}if(mu(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(P(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){Pe=At(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}Pe=null}}else Pe=Ie?At(e.stateNode.nextSibling):null;return!0}function Ld(){for(var e=Pe;e;)e=At(e.nextSibling)}function Fn(){Pe=Ie=null,W=!1}function Xa(e){He===null?He=[e]:He.push(e)}var h1=yt.ReactCurrentBatchConfig;function Ue(e,t){if(e&&e.defaultProps){t=Q({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}var Zo=Vt(null),ei=null,En=null,Ja=null;function Za(){Ja=En=ei=null}function es(e){var t=Zo.current;H(Zo),e._currentValue=t}function Zl(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function Nn(e,t){ei=e,Ja=En=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(Se=!0),e.firstContext=null)}function $e(e){var t=e._currentValue;if(Ja!==e)if(e={context:e,memoizedValue:t,next:null},En===null){if(ei===null)throw Error(P(308));En=e,ei.dependencies={lanes:0,firstContext:e}}else En=En.next=e;return t}var Kt=null;function ts(e){Kt===null?Kt=[e]:Kt.push(e)}function Fd(e,t,n,r){var o=t.interleaved;return o===null?(n.next=n,ts(t)):(n.next=o.next,o.next=n),t.interleaved=n,mt(e,r)}function mt(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var Ct=!1;function ns(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Md(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function ft(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Tt(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,M&2){var o=r.pending;return o===null?t.next=t:(t.next=o.next,o.next=t),r.pending=t,mt(e,n)}return o=r.interleaved,o===null?(t.next=t,ts(r)):(t.next=o.next,o.next=t),r.interleaved=t,mt(e,n)}function Io(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,ba(e,n)}}function gu(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var o=null,i=null;if(n=n.firstBaseUpdate,n!==null){do{var l={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};i===null?o=i=l:i=i.next=l,n=n.next}while(n!==null);i===null?o=i=t:i=i.next=t}else o=i=t;n={baseState:r.baseState,firstBaseUpdate:o,lastBaseUpdate:i,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function ti(e,t,n,r){var o=e.updateQueue;Ct=!1;var i=o.firstBaseUpdate,l=o.lastBaseUpdate,a=o.shared.pending;if(a!==null){o.shared.pending=null;var s=a,u=s.next;s.next=null,l===null?i=u:l.next=u,l=s;var f=e.alternate;f!==null&&(f=f.updateQueue,a=f.lastBaseUpdate,a!==l&&(a===null?f.firstBaseUpdate=u:a.next=u,f.lastBaseUpdate=s))}if(i!==null){var m=o.baseState;l=0,f=u=s=null,a=i;do{var h=a.lane,v=a.eventTime;if((r&h)===h){f!==null&&(f=f.next={eventTime:v,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var w=e,S=a;switch(h=t,v=n,S.tag){case 1:if(w=S.payload,typeof w=="function"){m=w.call(v,m,h);break e}m=w;break e;case 3:w.flags=w.flags&-65537|128;case 0:if(w=S.payload,h=typeof w=="function"?w.call(v,m,h):w,h==null)break e;m=Q({},m,h);break e;case 2:Ct=!0}}a.callback!==null&&a.lane!==0&&(e.flags|=64,h=o.effects,h===null?o.effects=[a]:h.push(a))}else v={eventTime:v,lane:h,tag:a.tag,payload:a.payload,callback:a.callback,next:null},f===null?(u=f=v,s=m):f=f.next=v,l|=h;if(a=a.next,a===null){if(a=o.shared.pending,a===null)break;h=a,a=h.next,h.next=null,o.lastBaseUpdate=h,o.shared.pending=null}}while(1);if(f===null&&(s=m),o.baseState=s,o.firstBaseUpdate=u,o.lastBaseUpdate=f,t=o.shared.interleaved,t!==null){o=t;do l|=o.lane,o=o.next;while(o!==t)}else i===null&&(o.shared.lanes=0);an|=l,e.lanes=l,e.memoizedState=m}}function yu(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],o=r.callback;if(o!==null){if(r.callback=null,r=n,typeof o!="function")throw Error(P(191,o));o.call(r)}}}var $d=new Fc.Component().refs;function ea(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:Q({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Si={isMounted:function(e){return(e=e._reactInternals)?cn(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=ve(),o=Ft(e),i=ft(r,o);i.payload=t,n!=null&&(i.callback=n),t=Tt(e,i,o),t!==null&&(qe(t,e,o,r),Io(t,e,o))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=ve(),o=Ft(e),i=ft(r,o);i.tag=1,i.payload=t,n!=null&&(i.callback=n),t=Tt(e,i,o),t!==null&&(qe(t,e,o,r),Io(t,e,o))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=ve(),r=Ft(e),o=ft(n,r);o.tag=2,t!=null&&(o.callback=t),t=Tt(e,o,r),t!==null&&(qe(t,e,r,n),Io(t,e,r))}};function vu(e,t,n,r,o,i,l){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,i,l):t.prototype&&t.prototype.isPureReactComponent?!Nr(n,r)||!Nr(o,i):!0}function Dd(e,t,n){var r=!1,o=bt,i=t.contextType;return typeof i=="object"&&i!==null?i=$e(i):(o=Ee(t)?rn:ge.current,r=t.contextTypes,i=(r=r!=null)?Ln(e,o):bt),t=new t(n,i),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Si,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=o,e.__reactInternalMemoizedMaskedChildContext=i),t}function xu(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Si.enqueueReplaceState(t,t.state,null)}function ta(e,t,n,r){var o=e.stateNode;o.props=n,o.state=e.memoizedState,o.refs=$d,ns(e);var i=t.contextType;typeof i=="object"&&i!==null?o.context=$e(i):(i=Ee(t)?rn:ge.current,o.context=Ln(e,i)),o.state=e.memoizedState,i=t.getDerivedStateFromProps,typeof i=="function"&&(ea(e,t,i,n),o.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof o.getSnapshotBeforeUpdate=="function"||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(t=o.state,typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount(),t!==o.state&&Si.enqueueReplaceState(o,o.state,null),ti(e,n,o,r),o.state=e.memoizedState),typeof o.componentDidMount=="function"&&(e.flags|=4194308)}function ir(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(P(309));var r=n.stateNode}if(!r)throw Error(P(147,e));var o=r,i=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===i?t.ref:(t=function(l){var a=o.refs;a===$d&&(a=o.refs={}),l===null?delete a[i]:a[i]=l},t._stringRef=i,t)}if(typeof e!="string")throw Error(P(284));if(!n._owner)throw Error(P(290,e))}return e}function ho(e,t){throw e=Object.prototype.toString.call(t),Error(P(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function wu(e){var t=e._init;return t(e._payload)}function Bd(e){function t(p,d){if(e){var g=p.deletions;g===null?(p.deletions=[d],p.flags|=16):g.push(d)}}function n(p,d){if(!e)return null;for(;d!==null;)t(p,d),d=d.sibling;return null}function r(p,d){for(p=new Map;d!==null;)d.key!==null?p.set(d.key,d):p.set(d.index,d),d=d.sibling;return p}function o(p,d){return p=Mt(p,d),p.index=0,p.sibling=null,p}function i(p,d,g){return p.index=g,e?(g=p.alternate,g!==null?(g=g.index,g<d?(p.flags|=2,d):g):(p.flags|=2,d)):(p.flags|=1048576,d)}function l(p){return e&&p.alternate===null&&(p.flags|=2),p}function a(p,d,g,_){return d===null||d.tag!==6?(d=dl(g,p.mode,_),d.return=p,d):(d=o(d,g),d.return=p,d)}function s(p,d,g,_){var C=g.type;return C===gn?f(p,d,g.props.children,_,g.key):d!==null&&(d.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===St&&wu(C)===d.type)?(_=o(d,g.props),_.ref=ir(p,d,g),_.return=p,_):(_=To(g.type,g.key,g.props,null,p.mode,_),_.ref=ir(p,d,g),_.return=p,_)}function u(p,d,g,_){return d===null||d.tag!==4||d.stateNode.containerInfo!==g.containerInfo||d.stateNode.implementation!==g.implementation?(d=fl(g,p.mode,_),d.return=p,d):(d=o(d,g.children||[]),d.return=p,d)}function f(p,d,g,_,C){return d===null||d.tag!==7?(d=en(g,p.mode,_,C),d.return=p,d):(d=o(d,g),d.return=p,d)}function m(p,d,g){if(typeof d=="string"&&d!==""||typeof d=="number")return d=dl(""+d,p.mode,g),d.return=p,d;if(typeof d=="object"&&d!==null){switch(d.$$typeof){case no:return g=To(d.type,d.key,d.props,null,p.mode,g),g.ref=ir(p,null,d),g.return=p,g;case mn:return d=fl(d,p.mode,g),d.return=p,d;case St:var _=d._init;return m(p,_(d._payload),g)}if(cr(d)||er(d))return d=en(d,p.mode,g,null),d.return=p,d;ho(p,d)}return null}function h(p,d,g,_){var C=d!==null?d.key:null;if(typeof g=="string"&&g!==""||typeof g=="number")return C!==null?null:a(p,d,""+g,_);if(typeof g=="object"&&g!==null){switch(g.$$typeof){case no:return g.key===C?s(p,d,g,_):null;case mn:return g.key===C?u(p,d,g,_):null;case St:return C=g._init,h(p,d,C(g._payload),_)}if(cr(g)||er(g))return C!==null?null:f(p,d,g,_,null);ho(p,g)}return null}function v(p,d,g,_,C){if(typeof _=="string"&&_!==""||typeof _=="number")return p=p.get(g)||null,a(d,p,""+_,C);if(typeof _=="object"&&_!==null){switch(_.$$typeof){case no:return p=p.get(_.key===null?g:_.key)||null,s(d,p,_,C);case mn:return p=p.get(_.key===null?g:_.key)||null,u(d,p,_,C);case St:var k=_._init;return v(p,d,g,k(_._payload),C)}if(cr(_)||er(_))return p=p.get(g)||null,f(d,p,_,C,null);ho(d,_)}return null}function w(p,d,g,_){for(var C=null,k=null,E=d,R=d=0,L=null;E!==null&&R<g.length;R++){E.index>R?(L=E,E=null):L=E.sibling;var z=h(p,E,g[R],_);if(z===null){E===null&&(E=L);break}e&&E&&z.alternate===null&&t(p,E),d=i(z,d,R),k===null?C=z:k.sibling=z,k=z,E=L}if(R===g.length)return n(p,E),W&&Gt(p,R),C;if(E===null){for(;R<g.length;R++)E=m(p,g[R],_),E!==null&&(d=i(E,d,R),k===null?C=E:k.sibling=E,k=E);return W&&Gt(p,R),C}for(E=r(p,E);R<g.length;R++)L=v(E,p,R,g[R],_),L!==null&&(e&&L.alternate!==null&&E.delete(L.key===null?R:L.key),d=i(L,d,R),k===null?C=L:k.sibling=L,k=L);return e&&E.forEach(function(K){return t(p,K)}),W&&Gt(p,R),C}function S(p,d,g,_){var C=er(g);if(typeof C!="function")throw Error(P(150));if(g=C.call(g),g==null)throw Error(P(151));for(var k=C=null,E=d,R=d=0,L=null,z=g.next();E!==null&&!z.done;R++,z=g.next()){E.index>R?(L=E,E=null):L=E.sibling;var K=h(p,E,z.value,_);if(K===null){E===null&&(E=L);break}e&&E&&K.alternate===null&&t(p,E),d=i(K,d,R),k===null?C=K:k.sibling=K,k=K,E=L}if(z.done)return n(p,E),W&&Gt(p,R),C;if(E===null){for(;!z.done;R++,z=g.next())z=m(p,z.value,_),z!==null&&(d=i(z,d,R),k===null?C=z:k.sibling=z,k=z);return W&&Gt(p,R),C}for(E=r(p,E);!z.done;R++,z=g.next())z=v(E,p,R,z.value,_),z!==null&&(e&&z.alternate!==null&&E.delete(z.key===null?R:z.key),d=i(z,d,R),k===null?C=z:k.sibling=z,k=z);return e&&E.forEach(function(Ke){return t(p,Ke)}),W&&Gt(p,R),C}function j(p,d,g,_){if(typeof g=="object"&&g!==null&&g.type===gn&&g.key===null&&(g=g.props.children),typeof g=="object"&&g!==null){switch(g.$$typeof){case no:e:{for(var C=g.key,k=d;k!==null;){if(k.key===C){if(C=g.type,C===gn){if(k.tag===7){n(p,k.sibling),d=o(k,g.props.children),d.return=p,p=d;break e}}else if(k.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===St&&wu(C)===k.type){n(p,k.sibling),d=o(k,g.props),d.ref=ir(p,k,g),d.return=p,p=d;break e}n(p,k);break}else t(p,k);k=k.sibling}g.type===gn?(d=en(g.props.children,p.mode,_,g.key),d.return=p,p=d):(_=To(g.type,g.key,g.props,null,p.mode,_),_.ref=ir(p,d,g),_.return=p,p=_)}return l(p);case mn:e:{for(k=g.key;d!==null;){if(d.key===k)if(d.tag===4&&d.stateNode.containerInfo===g.containerInfo&&d.stateNode.implementation===g.implementation){n(p,d.sibling),d=o(d,g.children||[]),d.return=p,p=d;break e}else{n(p,d);break}else t(p,d);d=d.sibling}d=fl(g,p.mode,_),d.return=p,p=d}return l(p);case St:return k=g._init,j(p,d,k(g._payload),_)}if(cr(g))return w(p,d,g,_);if(er(g))return S(p,d,g,_);ho(p,g)}return typeof g=="string"&&g!==""||typeof g=="number"?(g=""+g,d!==null&&d.tag===6?(n(p,d.sibling),d=o(d,g),d.return=p,p=d):(n(p,d),d=dl(g,p.mode,_),d.return=p,p=d),l(p)):n(p,d)}return j}var Mn=Bd(!0),bd=Bd(!1),Kr={},rt=Vt(Kr),Fr=Vt(Kr),Mr=Vt(Kr);function Xt(e){if(e===Kr)throw Error(P(174));return e}function rs(e,t){switch(b(Mr,t),b(Fr,e),b(rt,Kr),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Al(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Al(t,e)}H(rt),b(rt,t)}function $n(){H(rt),H(Fr),H(Mr)}function Ud(e){Xt(Mr.current);var t=Xt(rt.current),n=Al(t,e.type);t!==n&&(b(Fr,e),b(rt,n))}function os(e){Fr.current===e&&(H(rt),H(Fr))}var q=Vt(0);function ni(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var il=[];function is(){for(var e=0;e<il.length;e++)il[e]._workInProgressVersionPrimary=null;il.length=0}var Ro=yt.ReactCurrentDispatcher,ll=yt.ReactCurrentBatchConfig,ln=0,G=null,ne=null,le=null,ri=!1,xr=!1,$r=0,m1=0;function fe(){throw Error(P(321))}function ls(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Qe(e[n],t[n]))return!1;return!0}function as(e,t,n,r,o,i){if(ln=i,G=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Ro.current=e===null||e.memoizedState===null?x1:w1,e=n(r,o),xr){i=0;do{if(xr=!1,$r=0,25<=i)throw Error(P(301));i+=1,le=ne=null,t.updateQueue=null,Ro.current=_1,e=n(r,o)}while(xr)}if(Ro.current=oi,t=ne!==null&&ne.next!==null,ln=0,le=ne=G=null,ri=!1,t)throw Error(P(300));return e}function ss(){var e=$r!==0;return $r=0,e}function Ze(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return le===null?G.memoizedState=le=e:le=le.next=e,le}function De(){if(ne===null){var e=G.alternate;e=e!==null?e.memoizedState:null}else e=ne.next;var t=le===null?G.memoizedState:le.next;if(t!==null)le=t,ne=e;else{if(e===null)throw Error(P(310));ne=e,e={memoizedState:ne.memoizedState,baseState:ne.baseState,baseQueue:ne.baseQueue,queue:ne.queue,next:null},le===null?G.memoizedState=le=e:le=le.next=e}return le}function Dr(e,t){return typeof t=="function"?t(e):t}function al(e){var t=De(),n=t.queue;if(n===null)throw Error(P(311));n.lastRenderedReducer=e;var r=ne,o=r.baseQueue,i=n.pending;if(i!==null){if(o!==null){var l=o.next;o.next=i.next,i.next=l}r.baseQueue=o=i,n.pending=null}if(o!==null){i=o.next,r=r.baseState;var a=l=null,s=null,u=i;do{var f=u.lane;if((ln&f)===f)s!==null&&(s=s.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:e(r,u.action);else{var m={lane:f,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};s===null?(a=s=m,l=r):s=s.next=m,G.lanes|=f,an|=f}u=u.next}while(u!==null&&u!==i);s===null?l=r:s.next=a,Qe(r,t.memoizedState)||(Se=!0),t.memoizedState=r,t.baseState=l,t.baseQueue=s,n.lastRenderedState=r}if(e=n.interleaved,e!==null){o=e;do i=o.lane,G.lanes|=i,an|=i,o=o.next;while(o!==e)}else o===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function sl(e){var t=De(),n=t.queue;if(n===null)throw Error(P(311));n.lastRenderedReducer=e;var r=n.dispatch,o=n.pending,i=t.memoizedState;if(o!==null){n.pending=null;var l=o=o.next;do i=e(i,l.action),l=l.next;while(l!==o);Qe(i,t.memoizedState)||(Se=!0),t.memoizedState=i,t.baseQueue===null&&(t.baseState=i),n.lastRenderedState=i}return[i,r]}function Vd(){}function Hd(e,t){var n=G,r=De(),o=t(),i=!Qe(r.memoizedState,o);if(i&&(r.memoizedState=o,Se=!0),r=r.queue,us(Gd.bind(null,n,r,e),[e]),r.getSnapshot!==t||i||le!==null&&le.memoizedState.tag&1){if(n.flags|=2048,Br(9,qd.bind(null,n,r,o,t),void 0,null),se===null)throw Error(P(349));ln&30||Wd(n,t,o)}return o}function Wd(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=G.updateQueue,t===null?(t={lastEffect:null,stores:null},G.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function qd(e,t,n,r){t.value=n,t.getSnapshot=r,Qd(t)&&Yd(e)}function Gd(e,t,n){return n(function(){Qd(t)&&Yd(e)})}function Qd(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Qe(e,n)}catch{return!0}}function Yd(e){var t=mt(e,1);t!==null&&qe(t,e,1,-1)}function _u(e){var t=Ze();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Dr,lastRenderedState:e},t.queue=e,e=e.dispatch=v1.bind(null,G,e),[t.memoizedState,e]}function Br(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=G.updateQueue,t===null?(t={lastEffect:null,stores:null},G.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function Kd(){return De().memoizedState}function Oo(e,t,n,r){var o=Ze();G.flags|=e,o.memoizedState=Br(1|t,n,void 0,r===void 0?null:r)}function Ci(e,t,n,r){var o=De();r=r===void 0?null:r;var i=void 0;if(ne!==null){var l=ne.memoizedState;if(i=l.destroy,r!==null&&ls(r,l.deps)){o.memoizedState=Br(t,n,i,r);return}}G.flags|=e,o.memoizedState=Br(1|t,n,i,r)}function Su(e,t){return Oo(8390656,8,e,t)}function us(e,t){return Ci(2048,8,e,t)}function Xd(e,t){return Ci(4,2,e,t)}function Jd(e,t){return Ci(4,4,e,t)}function Zd(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function ef(e,t,n){return n=n!=null?n.concat([e]):null,Ci(4,4,Zd.bind(null,t,e),n)}function cs(){}function tf(e,t){var n=De();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&ls(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function nf(e,t){var n=De();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&ls(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function rf(e,t,n){return ln&21?(Qe(n,t)||(n=ld(),G.lanes|=n,an|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,Se=!0),e.memoizedState=n)}function g1(e,t){var n=B;B=n!==0&&4>n?n:4,e(!0);var r=ll.transition;ll.transition={};try{e(!1),t()}finally{B=n,ll.transition=r}}function of(){return De().memoizedState}function y1(e,t,n){var r=Ft(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},lf(e))af(t,n);else if(n=Fd(e,t,n,r),n!==null){var o=ve();qe(n,e,r,o),sf(n,t,r)}}function v1(e,t,n){var r=Ft(e),o={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(lf(e))af(t,o);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=t.lastRenderedReducer,i!==null))try{var l=t.lastRenderedState,a=i(l,n);if(o.hasEagerState=!0,o.eagerState=a,Qe(a,l)){var s=t.interleaved;s===null?(o.next=o,ts(t)):(o.next=s.next,s.next=o),t.interleaved=o;return}}catch{}finally{}n=Fd(e,t,o,r),n!==null&&(o=ve(),qe(n,e,r,o),sf(n,t,r))}}function lf(e){var t=e.alternate;return e===G||t!==null&&t===G}function af(e,t){xr=ri=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function sf(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,ba(e,n)}}var oi={readContext:$e,useCallback:fe,useContext:fe,useEffect:fe,useImperativeHandle:fe,useInsertionEffect:fe,useLayoutEffect:fe,useMemo:fe,useReducer:fe,useRef:fe,useState:fe,useDebugValue:fe,useDeferredValue:fe,useTransition:fe,useMutableSource:fe,useSyncExternalStore:fe,useId:fe,unstable_isNewReconciler:!1},x1={readContext:$e,useCallback:function(e,t){return Ze().memoizedState=[e,t===void 0?null:t],e},useContext:$e,useEffect:Su,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Oo(4194308,4,Zd.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Oo(4194308,4,e,t)},useInsertionEffect:function(e,t){return Oo(4,2,e,t)},useMemo:function(e,t){var n=Ze();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=Ze();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=y1.bind(null,G,e),[r.memoizedState,e]},useRef:function(e){var t=Ze();return e={current:e},t.memoizedState=e},useState:_u,useDebugValue:cs,useDeferredValue:function(e){return Ze().memoizedState=e},useTransition:function(){var e=_u(!1),t=e[0];return e=g1.bind(null,e[1]),Ze().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=G,o=Ze();if(W){if(n===void 0)throw Error(P(407));n=n()}else{if(n=t(),se===null)throw Error(P(349));ln&30||Wd(r,t,n)}o.memoizedState=n;var i={value:n,getSnapshot:t};return o.queue=i,Su(Gd.bind(null,r,i,e),[e]),r.flags|=2048,Br(9,qd.bind(null,r,i,n,t),void 0,null),n},useId:function(){var e=Ze(),t=se.identifierPrefix;if(W){var n=dt,r=ct;n=(r&~(1<<32-We(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=$r++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=m1++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},w1={readContext:$e,useCallback:tf,useContext:$e,useEffect:us,useImperativeHandle:ef,useInsertionEffect:Xd,useLayoutEffect:Jd,useMemo:nf,useReducer:al,useRef:Kd,useState:function(){return al(Dr)},useDebugValue:cs,useDeferredValue:function(e){var t=De();return rf(t,ne.memoizedState,e)},useTransition:function(){var e=al(Dr)[0],t=De().memoizedState;return[e,t]},useMutableSource:Vd,useSyncExternalStore:Hd,useId:of,unstable_isNewReconciler:!1},_1={readContext:$e,useCallback:tf,useContext:$e,useEffect:us,useImperativeHandle:ef,useInsertionEffect:Xd,useLayoutEffect:Jd,useMemo:nf,useReducer:sl,useRef:Kd,useState:function(){return sl(Dr)},useDebugValue:cs,useDeferredValue:function(e){var t=De();return ne===null?t.memoizedState=e:rf(t,ne.memoizedState,e)},useTransition:function(){var e=sl(Dr)[0],t=De().memoizedState;return[e,t]},useMutableSource:Vd,useSyncExternalStore:Hd,useId:of,unstable_isNewReconciler:!1};function Dn(e,t){try{var n="",r=t;do n+=Yp(r),r=r.return;while(r);var o=n}catch(i){o=`
Error generating stack: `+i.message+`
`+i.stack}return{value:e,source:t,stack:o,digest:null}}function ul(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function na(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var S1=typeof WeakMap=="function"?WeakMap:Map;function uf(e,t,n){n=ft(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){li||(li=!0,fa=r),na(e,t)},n}function cf(e,t,n){n=ft(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var o=t.value;n.payload=function(){return r(o)},n.callback=function(){na(e,t)}}var i=e.stateNode;return i!==null&&typeof i.componentDidCatch=="function"&&(n.callback=function(){na(e,t),typeof r!="function"&&(Lt===null?Lt=new Set([this]):Lt.add(this));var l=t.stack;this.componentDidCatch(t.value,{componentStack:l!==null?l:""})}),n}function Cu(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new S1;var o=new Set;r.set(t,o)}else o=r.get(t),o===void 0&&(o=new Set,r.set(t,o));o.has(n)||(o.add(n),e=F1.bind(null,e,t,n),t.then(e,e))}function Eu(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function ku(e,t,n,r,o){return e.mode&1?(e.flags|=65536,e.lanes=o,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=ft(-1,1),t.tag=2,Tt(n,t,1))),n.lanes|=1),e)}var C1=yt.ReactCurrentOwner,Se=!1;function ye(e,t,n,r){t.child=e===null?bd(t,null,n,r):Mn(t,e.child,n,r)}function ju(e,t,n,r,o){n=n.render;var i=t.ref;return Nn(t,o),r=as(e,t,n,r,i,o),n=ss(),e!==null&&!Se?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,gt(e,t,o)):(W&&n&&Ya(t),t.flags|=1,ye(e,t,r,o),t.child)}function Pu(e,t,n,r,o){if(e===null){var i=n.type;return typeof i=="function"&&!vs(i)&&i.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=i,df(e,t,i,r,o)):(e=To(n.type,null,r,t,t.mode,o),e.ref=t.ref,e.return=t,t.child=e)}if(i=e.child,!(e.lanes&o)){var l=i.memoizedProps;if(n=n.compare,n=n!==null?n:Nr,n(l,r)&&e.ref===t.ref)return gt(e,t,o)}return t.flags|=1,e=Mt(i,r),e.ref=t.ref,e.return=t,t.child=e}function df(e,t,n,r,o){if(e!==null){var i=e.memoizedProps;if(Nr(i,r)&&e.ref===t.ref)if(Se=!1,t.pendingProps=r=i,(e.lanes&o)!==0)e.flags&131072&&(Se=!0);else return t.lanes=e.lanes,gt(e,t,o)}return ra(e,t,n,r,o)}function ff(e,t,n){var r=t.pendingProps,o=r.children,i=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},b(jn,je),je|=n;else{if(!(n&1073741824))return e=i!==null?i.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,b(jn,je),je|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=i!==null?i.baseLanes:n,b(jn,je),je|=r}else i!==null?(r=i.baseLanes|n,t.memoizedState=null):r=n,b(jn,je),je|=r;return ye(e,t,o,n),t.child}function pf(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function ra(e,t,n,r,o){var i=Ee(n)?rn:ge.current;return i=Ln(t,i),Nn(t,o),n=as(e,t,n,r,i,o),r=ss(),e!==null&&!Se?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,gt(e,t,o)):(W&&r&&Ya(t),t.flags|=1,ye(e,t,n,o),t.child)}function Iu(e,t,n,r,o){if(Ee(n)){var i=!0;Ko(t)}else i=!1;if(Nn(t,o),t.stateNode===null)zo(e,t),Dd(t,n,r),ta(t,n,r,o),r=!0;else if(e===null){var l=t.stateNode,a=t.memoizedProps;l.props=a;var s=l.context,u=n.contextType;typeof u=="object"&&u!==null?u=$e(u):(u=Ee(n)?rn:ge.current,u=Ln(t,u));var f=n.getDerivedStateFromProps,m=typeof f=="function"||typeof l.getSnapshotBeforeUpdate=="function";m||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(a!==r||s!==u)&&xu(t,l,r,u),Ct=!1;var h=t.memoizedState;l.state=h,ti(t,r,l,o),s=t.memoizedState,a!==r||h!==s||Ce.current||Ct?(typeof f=="function"&&(ea(t,n,f,r),s=t.memoizedState),(a=Ct||vu(t,n,a,r,h,s,u))?(m||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount()),typeof l.componentDidMount=="function"&&(t.flags|=4194308)):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=s),l.props=r,l.state=s,l.context=u,r=a):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{l=t.stateNode,Md(e,t),a=t.memoizedProps,u=t.type===t.elementType?a:Ue(t.type,a),l.props=u,m=t.pendingProps,h=l.context,s=n.contextType,typeof s=="object"&&s!==null?s=$e(s):(s=Ee(n)?rn:ge.current,s=Ln(t,s));var v=n.getDerivedStateFromProps;(f=typeof v=="function"||typeof l.getSnapshotBeforeUpdate=="function")||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(a!==m||h!==s)&&xu(t,l,r,s),Ct=!1,h=t.memoizedState,l.state=h,ti(t,r,l,o);var w=t.memoizedState;a!==m||h!==w||Ce.current||Ct?(typeof v=="function"&&(ea(t,n,v,r),w=t.memoizedState),(u=Ct||vu(t,n,u,r,h,w,s)||!1)?(f||typeof l.UNSAFE_componentWillUpdate!="function"&&typeof l.componentWillUpdate!="function"||(typeof l.componentWillUpdate=="function"&&l.componentWillUpdate(r,w,s),typeof l.UNSAFE_componentWillUpdate=="function"&&l.UNSAFE_componentWillUpdate(r,w,s)),typeof l.componentDidUpdate=="function"&&(t.flags|=4),typeof l.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof l.componentDidUpdate!="function"||a===e.memoizedProps&&h===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&h===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=w),l.props=r,l.state=w,l.context=s,r=u):(typeof l.componentDidUpdate!="function"||a===e.memoizedProps&&h===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&h===e.memoizedState||(t.flags|=1024),r=!1)}return oa(e,t,n,r,i,o)}function oa(e,t,n,r,o,i){pf(e,t);var l=(t.flags&128)!==0;if(!r&&!l)return o&&pu(t,n,!1),gt(e,t,i);r=t.stateNode,C1.current=t;var a=l&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&l?(t.child=Mn(t,e.child,null,i),t.child=Mn(t,null,a,i)):ye(e,t,a,i),t.memoizedState=r.state,o&&pu(t,n,!0),t.child}function hf(e){var t=e.stateNode;t.pendingContext?fu(e,t.pendingContext,t.pendingContext!==t.context):t.context&&fu(e,t.context,!1),rs(e,t.containerInfo)}function Ru(e,t,n,r,o){return Fn(),Xa(o),t.flags|=256,ye(e,t,n,r),t.child}var ia={dehydrated:null,treeContext:null,retryLane:0};function la(e){return{baseLanes:e,cachePool:null,transitions:null}}function mf(e,t,n){var r=t.pendingProps,o=q.current,i=!1,l=(t.flags&128)!==0,a;if((a=l)||(a=e!==null&&e.memoizedState===null?!1:(o&2)!==0),a?(i=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(o|=1),b(q,o&1),e===null)return Jl(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(l=r.children,e=r.fallback,i?(r=t.mode,i=t.child,l={mode:"hidden",children:l},!(r&1)&&i!==null?(i.childLanes=0,i.pendingProps=l):i=ji(l,r,0,null),e=en(e,r,n,null),i.return=t,e.return=t,i.sibling=e,t.child=i,t.child.memoizedState=la(n),t.memoizedState=ia,e):ds(t,l));if(o=e.memoizedState,o!==null&&(a=o.dehydrated,a!==null))return E1(e,t,l,r,a,o,n);if(i){i=r.fallback,l=t.mode,o=e.child,a=o.sibling;var s={mode:"hidden",children:r.children};return!(l&1)&&t.child!==o?(r=t.child,r.childLanes=0,r.pendingProps=s,t.deletions=null):(r=Mt(o,s),r.subtreeFlags=o.subtreeFlags&14680064),a!==null?i=Mt(a,i):(i=en(i,l,n,null),i.flags|=2),i.return=t,r.return=t,r.sibling=i,t.child=r,r=i,i=t.child,l=e.child.memoizedState,l=l===null?la(n):{baseLanes:l.baseLanes|n,cachePool:null,transitions:l.transitions},i.memoizedState=l,i.childLanes=e.childLanes&~n,t.memoizedState=ia,r}return i=e.child,e=i.sibling,r=Mt(i,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function ds(e,t){return t=ji({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function mo(e,t,n,r){return r!==null&&Xa(r),Mn(t,e.child,null,n),e=ds(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function E1(e,t,n,r,o,i,l){if(n)return t.flags&256?(t.flags&=-257,r=ul(Error(P(422))),mo(e,t,l,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(i=r.fallback,o=t.mode,r=ji({mode:"visible",children:r.children},o,0,null),i=en(i,o,l,null),i.flags|=2,r.return=t,i.return=t,r.sibling=i,t.child=r,t.mode&1&&Mn(t,e.child,null,l),t.child.memoizedState=la(l),t.memoizedState=ia,i);if(!(t.mode&1))return mo(e,t,l,null);if(o.data==="$!"){if(r=o.nextSibling&&o.nextSibling.dataset,r)var a=r.dgst;return r=a,i=Error(P(419)),r=ul(i,r,void 0),mo(e,t,l,r)}if(a=(l&e.childLanes)!==0,Se||a){if(r=se,r!==null){switch(l&-l){case 4:o=2;break;case 16:o=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:o=32;break;case 536870912:o=268435456;break;default:o=0}o=o&(r.suspendedLanes|l)?0:o,o!==0&&o!==i.retryLane&&(i.retryLane=o,mt(e,o),qe(r,e,o,-1))}return ys(),r=ul(Error(P(421))),mo(e,t,l,r)}return o.data==="$?"?(t.flags|=128,t.child=e.child,t=M1.bind(null,e),o._reactRetry=t,null):(e=i.treeContext,Pe=At(o.nextSibling),Ie=t,W=!0,He=null,e!==null&&(Te[Le++]=ct,Te[Le++]=dt,Te[Le++]=on,ct=e.id,dt=e.overflow,on=t),t=ds(t,r.children),t.flags|=4096,t)}function Ou(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Zl(e.return,t,n)}function cl(e,t,n,r,o){var i=e.memoizedState;i===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:o}:(i.isBackwards=t,i.rendering=null,i.renderingStartTime=0,i.last=r,i.tail=n,i.tailMode=o)}function gf(e,t,n){var r=t.pendingProps,o=r.revealOrder,i=r.tail;if(ye(e,t,r.children,n),r=q.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Ou(e,n,t);else if(e.tag===19)Ou(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(b(q,r),!(t.mode&1))t.memoizedState=null;else switch(o){case"forwards":for(n=t.child,o=null;n!==null;)e=n.alternate,e!==null&&ni(e)===null&&(o=n),n=n.sibling;n=o,n===null?(o=t.child,t.child=null):(o=n.sibling,n.sibling=null),cl(t,!1,o,n,i);break;case"backwards":for(n=null,o=t.child,t.child=null;o!==null;){if(e=o.alternate,e!==null&&ni(e)===null){t.child=o;break}e=o.sibling,o.sibling=n,n=o,o=e}cl(t,!0,n,null,i);break;case"together":cl(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function zo(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function gt(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),an|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(P(153));if(t.child!==null){for(e=t.child,n=Mt(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Mt(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function k1(e,t,n){switch(t.tag){case 3:hf(t),Fn();break;case 5:Ud(t);break;case 1:Ee(t.type)&&Ko(t);break;case 4:rs(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,o=t.memoizedProps.value;b(Zo,r._currentValue),r._currentValue=o;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(b(q,q.current&1),t.flags|=128,null):n&t.child.childLanes?mf(e,t,n):(b(q,q.current&1),e=gt(e,t,n),e!==null?e.sibling:null);b(q,q.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return gf(e,t,n);t.flags|=128}if(o=t.memoizedState,o!==null&&(o.rendering=null,o.tail=null,o.lastEffect=null),b(q,q.current),r)break;return null;case 22:case 23:return t.lanes=0,ff(e,t,n)}return gt(e,t,n)}var yf,aa,vf,xf;yf=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};aa=function(){};vf=function(e,t,n,r){var o=e.memoizedProps;if(o!==r){e=t.stateNode,Xt(rt.current);var i=null;switch(n){case"input":o=Rl(e,o),r=Rl(e,r),i=[];break;case"select":o=Q({},o,{value:void 0}),r=Q({},r,{value:void 0}),i=[];break;case"textarea":o=Nl(e,o),r=Nl(e,r),i=[];break;default:typeof o.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Qo)}Tl(n,r);var l;n=null;for(u in o)if(!r.hasOwnProperty(u)&&o.hasOwnProperty(u)&&o[u]!=null)if(u==="style"){var a=o[u];for(l in a)a.hasOwnProperty(l)&&(n||(n={}),n[l]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(kr.hasOwnProperty(u)?i||(i=[]):(i=i||[]).push(u,null));for(u in r){var s=r[u];if(a=o!=null?o[u]:void 0,r.hasOwnProperty(u)&&s!==a&&(s!=null||a!=null))if(u==="style")if(a){for(l in a)!a.hasOwnProperty(l)||s&&s.hasOwnProperty(l)||(n||(n={}),n[l]="");for(l in s)s.hasOwnProperty(l)&&a[l]!==s[l]&&(n||(n={}),n[l]=s[l])}else n||(i||(i=[]),i.push(u,n)),n=s;else u==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,a=a?a.__html:void 0,s!=null&&a!==s&&(i=i||[]).push(u,s)):u==="children"?typeof s!="string"&&typeof s!="number"||(i=i||[]).push(u,""+s):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(kr.hasOwnProperty(u)?(s!=null&&u==="onScroll"&&U("scroll",e),i||a===s||(i=[])):(i=i||[]).push(u,s))}n&&(i=i||[]).push("style",n);var u=i;(t.updateQueue=u)&&(t.flags|=4)}};xf=function(e,t,n,r){n!==r&&(t.flags|=4)};function lr(e,t){if(!W)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function pe(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var o=e.child;o!==null;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags&14680064,r|=o.flags&14680064,o.return=e,o=o.sibling;else for(o=e.child;o!==null;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags,r|=o.flags,o.return=e,o=o.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function j1(e,t,n){var r=t.pendingProps;switch(Ka(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return pe(t),null;case 1:return Ee(t.type)&&Yo(),pe(t),null;case 3:return r=t.stateNode,$n(),H(Ce),H(ge),is(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(po(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,He!==null&&(ma(He),He=null))),aa(e,t),pe(t),null;case 5:os(t);var o=Xt(Mr.current);if(n=t.type,e!==null&&t.stateNode!=null)vf(e,t,n,r,o),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(P(166));return pe(t),null}if(e=Xt(rt.current),po(t)){r=t.stateNode,n=t.type;var i=t.memoizedProps;switch(r[tt]=t,r[Lr]=i,e=(t.mode&1)!==0,n){case"dialog":U("cancel",r),U("close",r);break;case"iframe":case"object":case"embed":U("load",r);break;case"video":case"audio":for(o=0;o<fr.length;o++)U(fr[o],r);break;case"source":U("error",r);break;case"img":case"image":case"link":U("error",r),U("load",r);break;case"details":U("toggle",r);break;case"input":Ds(r,i),U("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!i.multiple},U("invalid",r);break;case"textarea":bs(r,i),U("invalid",r)}Tl(n,i),o=null;for(var l in i)if(i.hasOwnProperty(l)){var a=i[l];l==="children"?typeof a=="string"?r.textContent!==a&&(i.suppressHydrationWarning!==!0&&fo(r.textContent,a,e),o=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(i.suppressHydrationWarning!==!0&&fo(r.textContent,a,e),o=["children",""+a]):kr.hasOwnProperty(l)&&a!=null&&l==="onScroll"&&U("scroll",r)}switch(n){case"input":ro(r),Bs(r,i,!0);break;case"textarea":ro(r),Us(r);break;case"select":case"option":break;default:typeof i.onClick=="function"&&(r.onclick=Qo)}r=o,t.updateQueue=r,r!==null&&(t.flags|=4)}else{l=o.nodeType===9?o:o.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Wc(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=l.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=l.createElement(n,{is:r.is}):(e=l.createElement(n),n==="select"&&(l=e,r.multiple?l.multiple=!0:r.size&&(l.size=r.size))):e=l.createElementNS(e,n),e[tt]=t,e[Lr]=r,yf(e,t,!1,!1),t.stateNode=e;e:{switch(l=Ll(n,r),n){case"dialog":U("cancel",e),U("close",e),o=r;break;case"iframe":case"object":case"embed":U("load",e),o=r;break;case"video":case"audio":for(o=0;o<fr.length;o++)U(fr[o],e);o=r;break;case"source":U("error",e),o=r;break;case"img":case"image":case"link":U("error",e),U("load",e),o=r;break;case"details":U("toggle",e),o=r;break;case"input":Ds(e,r),o=Rl(e,r),U("invalid",e);break;case"option":o=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},o=Q({},r,{value:void 0}),U("invalid",e);break;case"textarea":bs(e,r),o=Nl(e,r),U("invalid",e);break;default:o=r}Tl(n,o),a=o;for(i in a)if(a.hasOwnProperty(i)){var s=a[i];i==="style"?Qc(e,s):i==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,s!=null&&qc(e,s)):i==="children"?typeof s=="string"?(n!=="textarea"||s!=="")&&jr(e,s):typeof s=="number"&&jr(e,""+s):i!=="suppressContentEditableWarning"&&i!=="suppressHydrationWarning"&&i!=="autoFocus"&&(kr.hasOwnProperty(i)?s!=null&&i==="onScroll"&&U("scroll",e):s!=null&&La(e,i,s,l))}switch(n){case"input":ro(e),Bs(e,r,!1);break;case"textarea":ro(e),Us(e);break;case"option":r.value!=null&&e.setAttribute("value",""+Bt(r.value));break;case"select":e.multiple=!!r.multiple,i=r.value,i!=null?In(e,!!r.multiple,i,!1):r.defaultValue!=null&&In(e,!!r.multiple,r.defaultValue,!0);break;default:typeof o.onClick=="function"&&(e.onclick=Qo)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return pe(t),null;case 6:if(e&&t.stateNode!=null)xf(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(P(166));if(n=Xt(Mr.current),Xt(rt.current),po(t)){if(r=t.stateNode,n=t.memoizedProps,r[tt]=t,(i=r.nodeValue!==n)&&(e=Ie,e!==null))switch(e.tag){case 3:fo(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&fo(r.nodeValue,n,(e.mode&1)!==0)}i&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[tt]=t,t.stateNode=r}return pe(t),null;case 13:if(H(q),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(W&&Pe!==null&&t.mode&1&&!(t.flags&128))Ld(),Fn(),t.flags|=98560,i=!1;else if(i=po(t),r!==null&&r.dehydrated!==null){if(e===null){if(!i)throw Error(P(318));if(i=t.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(P(317));i[tt]=t}else Fn(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;pe(t),i=!1}else He!==null&&(ma(He),He=null),i=!0;if(!i)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||q.current&1?oe===0&&(oe=3):ys())),t.updateQueue!==null&&(t.flags|=4),pe(t),null);case 4:return $n(),aa(e,t),e===null&&Ar(t.stateNode.containerInfo),pe(t),null;case 10:return es(t.type._context),pe(t),null;case 17:return Ee(t.type)&&Yo(),pe(t),null;case 19:if(H(q),i=t.memoizedState,i===null)return pe(t),null;if(r=(t.flags&128)!==0,l=i.rendering,l===null)if(r)lr(i,!1);else{if(oe!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(l=ni(e),l!==null){for(t.flags|=128,lr(i,!1),r=l.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)i=n,e=r,i.flags&=14680066,l=i.alternate,l===null?(i.childLanes=0,i.lanes=e,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=l.childLanes,i.lanes=l.lanes,i.child=l.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=l.memoizedProps,i.memoizedState=l.memoizedState,i.updateQueue=l.updateQueue,i.type=l.type,e=l.dependencies,i.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return b(q,q.current&1|2),t.child}e=e.sibling}i.tail!==null&&J()>Bn&&(t.flags|=128,r=!0,lr(i,!1),t.lanes=4194304)}else{if(!r)if(e=ni(l),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),lr(i,!0),i.tail===null&&i.tailMode==="hidden"&&!l.alternate&&!W)return pe(t),null}else 2*J()-i.renderingStartTime>Bn&&n!==1073741824&&(t.flags|=128,r=!0,lr(i,!1),t.lanes=4194304);i.isBackwards?(l.sibling=t.child,t.child=l):(n=i.last,n!==null?n.sibling=l:t.child=l,i.last=l)}return i.tail!==null?(t=i.tail,i.rendering=t,i.tail=t.sibling,i.renderingStartTime=J(),t.sibling=null,n=q.current,b(q,r?n&1|2:n&1),t):(pe(t),null);case 22:case 23:return gs(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?je&1073741824&&(pe(t),t.subtreeFlags&6&&(t.flags|=8192)):pe(t),null;case 24:return null;case 25:return null}throw Error(P(156,t.tag))}function P1(e,t){switch(Ka(t),t.tag){case 1:return Ee(t.type)&&Yo(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return $n(),H(Ce),H(ge),is(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return os(t),null;case 13:if(H(q),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(P(340));Fn()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return H(q),null;case 4:return $n(),null;case 10:return es(t.type._context),null;case 22:case 23:return gs(),null;case 24:return null;default:return null}}var go=!1,he=!1,I1=typeof WeakSet=="function"?WeakSet:Set,O=null;function kn(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Y(e,t,r)}else n.current=null}function sa(e,t,n){try{n()}catch(r){Y(e,t,r)}}var zu=!1;function R1(e,t){if(Wl=Wo,e=Sd(),Qa(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var o=r.anchorOffset,i=r.focusNode;r=r.focusOffset;try{n.nodeType,i.nodeType}catch{n=null;break e}var l=0,a=-1,s=-1,u=0,f=0,m=e,h=null;t:for(;;){for(var v;m!==n||o!==0&&m.nodeType!==3||(a=l+o),m!==i||r!==0&&m.nodeType!==3||(s=l+r),m.nodeType===3&&(l+=m.nodeValue.length),(v=m.firstChild)!==null;)h=m,m=v;for(;;){if(m===e)break t;if(h===n&&++u===o&&(a=l),h===i&&++f===r&&(s=l),(v=m.nextSibling)!==null)break;m=h,h=m.parentNode}m=v}n=a===-1||s===-1?null:{start:a,end:s}}else n=null}n=n||{start:0,end:0}}else n=null;for(ql={focusedElem:e,selectionRange:n},Wo=!1,O=t;O!==null;)if(t=O,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,O=e;else for(;O!==null;){t=O;try{var w=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(w!==null){var S=w.memoizedProps,j=w.memoizedState,p=t.stateNode,d=p.getSnapshotBeforeUpdate(t.elementType===t.type?S:Ue(t.type,S),j);p.__reactInternalSnapshotBeforeUpdate=d}break;case 3:var g=t.stateNode.containerInfo;g.nodeType===1?g.textContent="":g.nodeType===9&&g.documentElement&&g.removeChild(g.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(P(163))}}catch(_){Y(t,t.return,_)}if(e=t.sibling,e!==null){e.return=t.return,O=e;break}O=t.return}return w=zu,zu=!1,w}function wr(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var o=r=r.next;do{if((o.tag&e)===e){var i=o.destroy;o.destroy=void 0,i!==void 0&&sa(t,n,i)}o=o.next}while(o!==r)}}function Ei(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function ua(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function wf(e){var t=e.alternate;t!==null&&(e.alternate=null,wf(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[tt],delete t[Lr],delete t[Yl],delete t[d1],delete t[f1])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function _f(e){return e.tag===5||e.tag===3||e.tag===4}function Nu(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||_f(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function ca(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Qo));else if(r!==4&&(e=e.child,e!==null))for(ca(e,t,n),e=e.sibling;e!==null;)ca(e,t,n),e=e.sibling}function da(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(da(e,t,n),e=e.sibling;e!==null;)da(e,t,n),e=e.sibling}var ue=null,Ve=!1;function wt(e,t,n){for(n=n.child;n!==null;)Sf(e,t,n),n=n.sibling}function Sf(e,t,n){if(nt&&typeof nt.onCommitFiberUnmount=="function")try{nt.onCommitFiberUnmount(gi,n)}catch{}switch(n.tag){case 5:he||kn(n,t);case 6:var r=ue,o=Ve;ue=null,wt(e,t,n),ue=r,Ve=o,ue!==null&&(Ve?(e=ue,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):ue.removeChild(n.stateNode));break;case 18:ue!==null&&(Ve?(e=ue,n=n.stateNode,e.nodeType===8?rl(e.parentNode,n):e.nodeType===1&&rl(e,n),Or(e)):rl(ue,n.stateNode));break;case 4:r=ue,o=Ve,ue=n.stateNode.containerInfo,Ve=!0,wt(e,t,n),ue=r,Ve=o;break;case 0:case 11:case 14:case 15:if(!he&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){o=r=r.next;do{var i=o,l=i.destroy;i=i.tag,l!==void 0&&(i&2||i&4)&&sa(n,t,l),o=o.next}while(o!==r)}wt(e,t,n);break;case 1:if(!he&&(kn(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){Y(n,t,a)}wt(e,t,n);break;case 21:wt(e,t,n);break;case 22:n.mode&1?(he=(r=he)||n.memoizedState!==null,wt(e,t,n),he=r):wt(e,t,n);break;default:wt(e,t,n)}}function Au(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new I1),t.forEach(function(r){var o=$1.bind(null,e,r);n.has(r)||(n.add(r),r.then(o,o))})}}function be(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var o=n[r];try{var i=e,l=t,a=l;e:for(;a!==null;){switch(a.tag){case 5:ue=a.stateNode,Ve=!1;break e;case 3:ue=a.stateNode.containerInfo,Ve=!0;break e;case 4:ue=a.stateNode.containerInfo,Ve=!0;break e}a=a.return}if(ue===null)throw Error(P(160));Sf(i,l,o),ue=null,Ve=!1;var s=o.alternate;s!==null&&(s.return=null),o.return=null}catch(u){Y(o,t,u)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Cf(t,e),t=t.sibling}function Cf(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(be(t,e),Je(e),r&4){try{wr(3,e,e.return),Ei(3,e)}catch(S){Y(e,e.return,S)}try{wr(5,e,e.return)}catch(S){Y(e,e.return,S)}}break;case 1:be(t,e),Je(e),r&512&&n!==null&&kn(n,n.return);break;case 5:if(be(t,e),Je(e),r&512&&n!==null&&kn(n,n.return),e.flags&32){var o=e.stateNode;try{jr(o,"")}catch(S){Y(e,e.return,S)}}if(r&4&&(o=e.stateNode,o!=null)){var i=e.memoizedProps,l=n!==null?n.memoizedProps:i,a=e.type,s=e.updateQueue;if(e.updateQueue=null,s!==null)try{a==="input"&&i.type==="radio"&&i.name!=null&&Vc(o,i),Ll(a,l);var u=Ll(a,i);for(l=0;l<s.length;l+=2){var f=s[l],m=s[l+1];f==="style"?Qc(o,m):f==="dangerouslySetInnerHTML"?qc(o,m):f==="children"?jr(o,m):La(o,f,m,u)}switch(a){case"input":Ol(o,i);break;case"textarea":Hc(o,i);break;case"select":var h=o._wrapperState.wasMultiple;o._wrapperState.wasMultiple=!!i.multiple;var v=i.value;v!=null?In(o,!!i.multiple,v,!1):h!==!!i.multiple&&(i.defaultValue!=null?In(o,!!i.multiple,i.defaultValue,!0):In(o,!!i.multiple,i.multiple?[]:"",!1))}o[Lr]=i}catch(S){Y(e,e.return,S)}}break;case 6:if(be(t,e),Je(e),r&4){if(e.stateNode===null)throw Error(P(162));o=e.stateNode,i=e.memoizedProps;try{o.nodeValue=i}catch(S){Y(e,e.return,S)}}break;case 3:if(be(t,e),Je(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Or(t.containerInfo)}catch(S){Y(e,e.return,S)}break;case 4:be(t,e),Je(e);break;case 13:be(t,e),Je(e),o=e.child,o.flags&8192&&(i=o.memoizedState!==null,o.stateNode.isHidden=i,!i||o.alternate!==null&&o.alternate.memoizedState!==null||(hs=J())),r&4&&Au(e);break;case 22:if(f=n!==null&&n.memoizedState!==null,e.mode&1?(he=(u=he)||f,be(t,e),he=u):be(t,e),Je(e),r&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!f&&e.mode&1)for(O=e,f=e.child;f!==null;){for(m=O=f;O!==null;){switch(h=O,v=h.child,h.tag){case 0:case 11:case 14:case 15:wr(4,h,h.return);break;case 1:kn(h,h.return);var w=h.stateNode;if(typeof w.componentWillUnmount=="function"){r=h,n=h.return;try{t=r,w.props=t.memoizedProps,w.state=t.memoizedState,w.componentWillUnmount()}catch(S){Y(r,n,S)}}break;case 5:kn(h,h.return);break;case 22:if(h.memoizedState!==null){Lu(m);continue}}v!==null?(v.return=h,O=v):Lu(m)}f=f.sibling}e:for(f=null,m=e;;){if(m.tag===5){if(f===null){f=m;try{o=m.stateNode,u?(i=o.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"):(a=m.stateNode,s=m.memoizedProps.style,l=s!=null&&s.hasOwnProperty("display")?s.display:null,a.style.display=Gc("display",l))}catch(S){Y(e,e.return,S)}}}else if(m.tag===6){if(f===null)try{m.stateNode.nodeValue=u?"":m.memoizedProps}catch(S){Y(e,e.return,S)}}else if((m.tag!==22&&m.tag!==23||m.memoizedState===null||m===e)&&m.child!==null){m.child.return=m,m=m.child;continue}if(m===e)break e;for(;m.sibling===null;){if(m.return===null||m.return===e)break e;f===m&&(f=null),m=m.return}f===m&&(f=null),m.sibling.return=m.return,m=m.sibling}}break;case 19:be(t,e),Je(e),r&4&&Au(e);break;case 21:break;default:be(t,e),Je(e)}}function Je(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(_f(n)){var r=n;break e}n=n.return}throw Error(P(160))}switch(r.tag){case 5:var o=r.stateNode;r.flags&32&&(jr(o,""),r.flags&=-33);var i=Nu(e);da(e,i,o);break;case 3:case 4:var l=r.stateNode.containerInfo,a=Nu(e);ca(e,a,l);break;default:throw Error(P(161))}}catch(s){Y(e,e.return,s)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function O1(e,t,n){O=e,Ef(e)}function Ef(e,t,n){for(var r=(e.mode&1)!==0;O!==null;){var o=O,i=o.child;if(o.tag===22&&r){var l=o.memoizedState!==null||go;if(!l){var a=o.alternate,s=a!==null&&a.memoizedState!==null||he;a=go;var u=he;if(go=l,(he=s)&&!u)for(O=o;O!==null;)l=O,s=l.child,l.tag===22&&l.memoizedState!==null?Fu(o):s!==null?(s.return=l,O=s):Fu(o);for(;i!==null;)O=i,Ef(i),i=i.sibling;O=o,go=a,he=u}Tu(e)}else o.subtreeFlags&8772&&i!==null?(i.return=o,O=i):Tu(e)}}function Tu(e){for(;O!==null;){var t=O;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:he||Ei(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!he)if(n===null)r.componentDidMount();else{var o=t.elementType===t.type?n.memoizedProps:Ue(t.type,n.memoizedProps);r.componentDidUpdate(o,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var i=t.updateQueue;i!==null&&yu(t,i,r);break;case 3:var l=t.updateQueue;if(l!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}yu(t,l,n)}break;case 5:var a=t.stateNode;if(n===null&&t.flags&4){n=a;var s=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":s.autoFocus&&n.focus();break;case"img":s.src&&(n.src=s.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var u=t.alternate;if(u!==null){var f=u.memoizedState;if(f!==null){var m=f.dehydrated;m!==null&&Or(m)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(P(163))}he||t.flags&512&&ua(t)}catch(h){Y(t,t.return,h)}}if(t===e){O=null;break}if(n=t.sibling,n!==null){n.return=t.return,O=n;break}O=t.return}}function Lu(e){for(;O!==null;){var t=O;if(t===e){O=null;break}var n=t.sibling;if(n!==null){n.return=t.return,O=n;break}O=t.return}}function Fu(e){for(;O!==null;){var t=O;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{Ei(4,t)}catch(s){Y(t,n,s)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var o=t.return;try{r.componentDidMount()}catch(s){Y(t,o,s)}}var i=t.return;try{ua(t)}catch(s){Y(t,i,s)}break;case 5:var l=t.return;try{ua(t)}catch(s){Y(t,l,s)}}}catch(s){Y(t,t.return,s)}if(t===e){O=null;break}var a=t.sibling;if(a!==null){a.return=t.return,O=a;break}O=t.return}}var z1=Math.ceil,ii=yt.ReactCurrentDispatcher,fs=yt.ReactCurrentOwner,Me=yt.ReactCurrentBatchConfig,M=0,se=null,ee=null,ce=0,je=0,jn=Vt(0),oe=0,br=null,an=0,ki=0,ps=0,_r=null,_e=null,hs=0,Bn=1/0,at=null,li=!1,fa=null,Lt=null,yo=!1,It=null,ai=0,Sr=0,pa=null,No=-1,Ao=0;function ve(){return M&6?J():No!==-1?No:No=J()}function Ft(e){return e.mode&1?M&2&&ce!==0?ce&-ce:h1.transition!==null?(Ao===0&&(Ao=ld()),Ao):(e=B,e!==0||(e=window.event,e=e===void 0?16:pd(e.type)),e):1}function qe(e,t,n,r){if(50<Sr)throw Sr=0,pa=null,Error(P(185));Gr(e,n,r),(!(M&2)||e!==se)&&(e===se&&(!(M&2)&&(ki|=n),oe===4&&kt(e,ce)),ke(e,r),n===1&&M===0&&!(t.mode&1)&&(Bn=J()+500,_i&&Ht()))}function ke(e,t){var n=e.callbackNode;h0(e,t);var r=Ho(e,e===se?ce:0);if(r===0)n!==null&&Ws(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&Ws(n),t===1)e.tag===0?p1(Mu.bind(null,e)):Nd(Mu.bind(null,e)),u1(function(){!(M&6)&&Ht()}),n=null;else{switch(ad(r)){case 1:n=Ba;break;case 4:n=od;break;case 16:n=Vo;break;case 536870912:n=id;break;default:n=Vo}n=Nf(n,kf.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function kf(e,t){if(No=-1,Ao=0,M&6)throw Error(P(327));var n=e.callbackNode;if(An()&&e.callbackNode!==n)return null;var r=Ho(e,e===se?ce:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=si(e,r);else{t=r;var o=M;M|=2;var i=Pf();(se!==e||ce!==t)&&(at=null,Bn=J()+500,Zt(e,t));do try{T1();break}catch(a){jf(e,a)}while(1);Za(),ii.current=i,M=o,ee!==null?t=0:(se=null,ce=0,t=oe)}if(t!==0){if(t===2&&(o=Bl(e),o!==0&&(r=o,t=ha(e,o))),t===1)throw n=br,Zt(e,0),kt(e,r),ke(e,J()),n;if(t===6)kt(e,r);else{if(o=e.current.alternate,!(r&30)&&!N1(o)&&(t=si(e,r),t===2&&(i=Bl(e),i!==0&&(r=i,t=ha(e,i))),t===1))throw n=br,Zt(e,0),kt(e,r),ke(e,J()),n;switch(e.finishedWork=o,e.finishedLanes=r,t){case 0:case 1:throw Error(P(345));case 2:Qt(e,_e,at);break;case 3:if(kt(e,r),(r&130023424)===r&&(t=hs+500-J(),10<t)){if(Ho(e,0)!==0)break;if(o=e.suspendedLanes,(o&r)!==r){ve(),e.pingedLanes|=e.suspendedLanes&o;break}e.timeoutHandle=Ql(Qt.bind(null,e,_e,at),t);break}Qt(e,_e,at);break;case 4:if(kt(e,r),(r&4194240)===r)break;for(t=e.eventTimes,o=-1;0<r;){var l=31-We(r);i=1<<l,l=t[l],l>o&&(o=l),r&=~i}if(r=o,r=J()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*z1(r/1960))-r,10<r){e.timeoutHandle=Ql(Qt.bind(null,e,_e,at),r);break}Qt(e,_e,at);break;case 5:Qt(e,_e,at);break;default:throw Error(P(329))}}}return ke(e,J()),e.callbackNode===n?kf.bind(null,e):null}function ha(e,t){var n=_r;return e.current.memoizedState.isDehydrated&&(Zt(e,t).flags|=256),e=si(e,t),e!==2&&(t=_e,_e=n,t!==null&&ma(t)),e}function ma(e){_e===null?_e=e:_e.push.apply(_e,e)}function N1(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var o=n[r],i=o.getSnapshot;o=o.value;try{if(!Qe(i(),o))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function kt(e,t){for(t&=~ps,t&=~ki,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-We(t),r=1<<n;e[n]=-1,t&=~r}}function Mu(e){if(M&6)throw Error(P(327));An();var t=Ho(e,0);if(!(t&1))return ke(e,J()),null;var n=si(e,t);if(e.tag!==0&&n===2){var r=Bl(e);r!==0&&(t=r,n=ha(e,r))}if(n===1)throw n=br,Zt(e,0),kt(e,t),ke(e,J()),n;if(n===6)throw Error(P(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Qt(e,_e,at),ke(e,J()),null}function ms(e,t){var n=M;M|=1;try{return e(t)}finally{M=n,M===0&&(Bn=J()+500,_i&&Ht())}}function sn(e){It!==null&&It.tag===0&&!(M&6)&&An();var t=M;M|=1;var n=Me.transition,r=B;try{if(Me.transition=null,B=1,e)return e()}finally{B=r,Me.transition=n,M=t,!(M&6)&&Ht()}}function gs(){je=jn.current,H(jn)}function Zt(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,s1(n)),ee!==null)for(n=ee.return;n!==null;){var r=n;switch(Ka(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Yo();break;case 3:$n(),H(Ce),H(ge),is();break;case 5:os(r);break;case 4:$n();break;case 13:H(q);break;case 19:H(q);break;case 10:es(r.type._context);break;case 22:case 23:gs()}n=n.return}if(se=e,ee=e=Mt(e.current,null),ce=je=t,oe=0,br=null,ps=ki=an=0,_e=_r=null,Kt!==null){for(t=0;t<Kt.length;t++)if(n=Kt[t],r=n.interleaved,r!==null){n.interleaved=null;var o=r.next,i=n.pending;if(i!==null){var l=i.next;i.next=o,r.next=l}n.pending=r}Kt=null}return e}function jf(e,t){do{var n=ee;try{if(Za(),Ro.current=oi,ri){for(var r=G.memoizedState;r!==null;){var o=r.queue;o!==null&&(o.pending=null),r=r.next}ri=!1}if(ln=0,le=ne=G=null,xr=!1,$r=0,fs.current=null,n===null||n.return===null){oe=1,br=t,ee=null;break}e:{var i=e,l=n.return,a=n,s=t;if(t=ce,a.flags|=32768,s!==null&&typeof s=="object"&&typeof s.then=="function"){var u=s,f=a,m=f.tag;if(!(f.mode&1)&&(m===0||m===11||m===15)){var h=f.alternate;h?(f.updateQueue=h.updateQueue,f.memoizedState=h.memoizedState,f.lanes=h.lanes):(f.updateQueue=null,f.memoizedState=null)}var v=Eu(l);if(v!==null){v.flags&=-257,ku(v,l,a,i,t),v.mode&1&&Cu(i,u,t),t=v,s=u;var w=t.updateQueue;if(w===null){var S=new Set;S.add(s),t.updateQueue=S}else w.add(s);break e}else{if(!(t&1)){Cu(i,u,t),ys();break e}s=Error(P(426))}}else if(W&&a.mode&1){var j=Eu(l);if(j!==null){!(j.flags&65536)&&(j.flags|=256),ku(j,l,a,i,t),Xa(Dn(s,a));break e}}i=s=Dn(s,a),oe!==4&&(oe=2),_r===null?_r=[i]:_r.push(i),i=l;do{switch(i.tag){case 3:i.flags|=65536,t&=-t,i.lanes|=t;var p=uf(i,s,t);gu(i,p);break e;case 1:a=s;var d=i.type,g=i.stateNode;if(!(i.flags&128)&&(typeof d.getDerivedStateFromError=="function"||g!==null&&typeof g.componentDidCatch=="function"&&(Lt===null||!Lt.has(g)))){i.flags|=65536,t&=-t,i.lanes|=t;var _=cf(i,a,t);gu(i,_);break e}}i=i.return}while(i!==null)}Rf(n)}catch(C){t=C,ee===n&&n!==null&&(ee=n=n.return);continue}break}while(1)}function Pf(){var e=ii.current;return ii.current=oi,e===null?oi:e}function ys(){(oe===0||oe===3||oe===2)&&(oe=4),se===null||!(an&268435455)&&!(ki&268435455)||kt(se,ce)}function si(e,t){var n=M;M|=2;var r=Pf();(se!==e||ce!==t)&&(at=null,Zt(e,t));do try{A1();break}catch(o){jf(e,o)}while(1);if(Za(),M=n,ii.current=r,ee!==null)throw Error(P(261));return se=null,ce=0,oe}function A1(){for(;ee!==null;)If(ee)}function T1(){for(;ee!==null&&!i0();)If(ee)}function If(e){var t=zf(e.alternate,e,je);e.memoizedProps=e.pendingProps,t===null?Rf(e):ee=t,fs.current=null}function Rf(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=P1(n,t),n!==null){n.flags&=32767,ee=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{oe=6,ee=null;return}}else if(n=j1(n,t,je),n!==null){ee=n;return}if(t=t.sibling,t!==null){ee=t;return}ee=t=e}while(t!==null);oe===0&&(oe=5)}function Qt(e,t,n){var r=B,o=Me.transition;try{Me.transition=null,B=1,L1(e,t,n,r)}finally{Me.transition=o,B=r}return null}function L1(e,t,n,r){do An();while(It!==null);if(M&6)throw Error(P(327));n=e.finishedWork;var o=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(P(177));e.callbackNode=null,e.callbackPriority=0;var i=n.lanes|n.childLanes;if(m0(e,i),e===se&&(ee=se=null,ce=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||yo||(yo=!0,Nf(Vo,function(){return An(),null})),i=(n.flags&15990)!==0,n.subtreeFlags&15990||i){i=Me.transition,Me.transition=null;var l=B;B=1;var a=M;M|=4,fs.current=null,R1(e,n),Cf(n,e),t1(ql),Wo=!!Wl,ql=Wl=null,e.current=n,O1(n),l0(),M=a,B=l,Me.transition=i}else e.current=n;if(yo&&(yo=!1,It=e,ai=o),i=e.pendingLanes,i===0&&(Lt=null),u0(n.stateNode),ke(e,J()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)o=t[n],r(o.value,{componentStack:o.stack,digest:o.digest});if(li)throw li=!1,e=fa,fa=null,e;return ai&1&&e.tag!==0&&An(),i=e.pendingLanes,i&1?e===pa?Sr++:(Sr=0,pa=e):Sr=0,Ht(),null}function An(){if(It!==null){var e=ad(ai),t=Me.transition,n=B;try{if(Me.transition=null,B=16>e?16:e,It===null)var r=!1;else{if(e=It,It=null,ai=0,M&6)throw Error(P(331));var o=M;for(M|=4,O=e.current;O!==null;){var i=O,l=i.child;if(O.flags&16){var a=i.deletions;if(a!==null){for(var s=0;s<a.length;s++){var u=a[s];for(O=u;O!==null;){var f=O;switch(f.tag){case 0:case 11:case 15:wr(8,f,i)}var m=f.child;if(m!==null)m.return=f,O=m;else for(;O!==null;){f=O;var h=f.sibling,v=f.return;if(wf(f),f===u){O=null;break}if(h!==null){h.return=v,O=h;break}O=v}}}var w=i.alternate;if(w!==null){var S=w.child;if(S!==null){w.child=null;do{var j=S.sibling;S.sibling=null,S=j}while(S!==null)}}O=i}}if(i.subtreeFlags&2064&&l!==null)l.return=i,O=l;else e:for(;O!==null;){if(i=O,i.flags&2048)switch(i.tag){case 0:case 11:case 15:wr(9,i,i.return)}var p=i.sibling;if(p!==null){p.return=i.return,O=p;break e}O=i.return}}var d=e.current;for(O=d;O!==null;){l=O;var g=l.child;if(l.subtreeFlags&2064&&g!==null)g.return=l,O=g;else e:for(l=d;O!==null;){if(a=O,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:Ei(9,a)}}catch(C){Y(a,a.return,C)}if(a===l){O=null;break e}var _=a.sibling;if(_!==null){_.return=a.return,O=_;break e}O=a.return}}if(M=o,Ht(),nt&&typeof nt.onPostCommitFiberRoot=="function")try{nt.onPostCommitFiberRoot(gi,e)}catch{}r=!0}return r}finally{B=n,Me.transition=t}}return!1}function $u(e,t,n){t=Dn(n,t),t=uf(e,t,1),e=Tt(e,t,1),t=ve(),e!==null&&(Gr(e,1,t),ke(e,t))}function Y(e,t,n){if(e.tag===3)$u(e,e,n);else for(;t!==null;){if(t.tag===3){$u(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Lt===null||!Lt.has(r))){e=Dn(n,e),e=cf(t,e,1),t=Tt(t,e,1),e=ve(),t!==null&&(Gr(t,1,e),ke(t,e));break}}t=t.return}}function F1(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=ve(),e.pingedLanes|=e.suspendedLanes&n,se===e&&(ce&n)===n&&(oe===4||oe===3&&(ce&130023424)===ce&&500>J()-hs?Zt(e,0):ps|=n),ke(e,t)}function Of(e,t){t===0&&(e.mode&1?(t=lo,lo<<=1,!(lo&130023424)&&(lo=4194304)):t=1);var n=ve();e=mt(e,t),e!==null&&(Gr(e,t,n),ke(e,n))}function M1(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Of(e,n)}function $1(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,o=e.memoizedState;o!==null&&(n=o.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(P(314))}r!==null&&r.delete(t),Of(e,n)}var zf;zf=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||Ce.current)Se=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return Se=!1,k1(e,t,n);Se=!!(e.flags&131072)}else Se=!1,W&&t.flags&1048576&&Ad(t,Jo,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;zo(e,t),e=t.pendingProps;var o=Ln(t,ge.current);Nn(t,n),o=as(null,t,r,e,o,n);var i=ss();return t.flags|=1,typeof o=="object"&&o!==null&&typeof o.render=="function"&&o.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Ee(r)?(i=!0,Ko(t)):i=!1,t.memoizedState=o.state!==null&&o.state!==void 0?o.state:null,ns(t),o.updater=Si,t.stateNode=o,o._reactInternals=t,ta(t,r,e,n),t=oa(null,t,r,!0,i,n)):(t.tag=0,W&&i&&Ya(t),ye(null,t,o,n),t=t.child),t;case 16:r=t.elementType;e:{switch(zo(e,t),e=t.pendingProps,o=r._init,r=o(r._payload),t.type=r,o=t.tag=B1(r),e=Ue(r,e),o){case 0:t=ra(null,t,r,e,n);break e;case 1:t=Iu(null,t,r,e,n);break e;case 11:t=ju(null,t,r,e,n);break e;case 14:t=Pu(null,t,r,Ue(r.type,e),n);break e}throw Error(P(306,r,""))}return t;case 0:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:Ue(r,o),ra(e,t,r,o,n);case 1:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:Ue(r,o),Iu(e,t,r,o,n);case 3:e:{if(hf(t),e===null)throw Error(P(387));r=t.pendingProps,i=t.memoizedState,o=i.element,Md(e,t),ti(t,r,null,n);var l=t.memoizedState;if(r=l.element,i.isDehydrated)if(i={element:r,isDehydrated:!1,cache:l.cache,pendingSuspenseBoundaries:l.pendingSuspenseBoundaries,transitions:l.transitions},t.updateQueue.baseState=i,t.memoizedState=i,t.flags&256){o=Dn(Error(P(423)),t),t=Ru(e,t,r,n,o);break e}else if(r!==o){o=Dn(Error(P(424)),t),t=Ru(e,t,r,n,o);break e}else for(Pe=At(t.stateNode.containerInfo.firstChild),Ie=t,W=!0,He=null,n=bd(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Fn(),r===o){t=gt(e,t,n);break e}ye(e,t,r,n)}t=t.child}return t;case 5:return Ud(t),e===null&&Jl(t),r=t.type,o=t.pendingProps,i=e!==null?e.memoizedProps:null,l=o.children,Gl(r,o)?l=null:i!==null&&Gl(r,i)&&(t.flags|=32),pf(e,t),ye(e,t,l,n),t.child;case 6:return e===null&&Jl(t),null;case 13:return mf(e,t,n);case 4:return rs(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=Mn(t,null,r,n):ye(e,t,r,n),t.child;case 11:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:Ue(r,o),ju(e,t,r,o,n);case 7:return ye(e,t,t.pendingProps,n),t.child;case 8:return ye(e,t,t.pendingProps.children,n),t.child;case 12:return ye(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,o=t.pendingProps,i=t.memoizedProps,l=o.value,b(Zo,r._currentValue),r._currentValue=l,i!==null)if(Qe(i.value,l)){if(i.children===o.children&&!Ce.current){t=gt(e,t,n);break e}}else for(i=t.child,i!==null&&(i.return=t);i!==null;){var a=i.dependencies;if(a!==null){l=i.child;for(var s=a.firstContext;s!==null;){if(s.context===r){if(i.tag===1){s=ft(-1,n&-n),s.tag=2;var u=i.updateQueue;if(u!==null){u=u.shared;var f=u.pending;f===null?s.next=s:(s.next=f.next,f.next=s),u.pending=s}}i.lanes|=n,s=i.alternate,s!==null&&(s.lanes|=n),Zl(i.return,n,t),a.lanes|=n;break}s=s.next}}else if(i.tag===10)l=i.type===t.type?null:i.child;else if(i.tag===18){if(l=i.return,l===null)throw Error(P(341));l.lanes|=n,a=l.alternate,a!==null&&(a.lanes|=n),Zl(l,n,t),l=i.sibling}else l=i.child;if(l!==null)l.return=i;else for(l=i;l!==null;){if(l===t){l=null;break}if(i=l.sibling,i!==null){i.return=l.return,l=i;break}l=l.return}i=l}ye(e,t,o.children,n),t=t.child}return t;case 9:return o=t.type,r=t.pendingProps.children,Nn(t,n),o=$e(o),r=r(o),t.flags|=1,ye(e,t,r,n),t.child;case 14:return r=t.type,o=Ue(r,t.pendingProps),o=Ue(r.type,o),Pu(e,t,r,o,n);case 15:return df(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:Ue(r,o),zo(e,t),t.tag=1,Ee(r)?(e=!0,Ko(t)):e=!1,Nn(t,n),Dd(t,r,o),ta(t,r,o,n),oa(null,t,r,!0,e,n);case 19:return gf(e,t,n);case 22:return ff(e,t,n)}throw Error(P(156,t.tag))};function Nf(e,t){return rd(e,t)}function D1(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Fe(e,t,n,r){return new D1(e,t,n,r)}function vs(e){return e=e.prototype,!(!e||!e.isReactComponent)}function B1(e){if(typeof e=="function")return vs(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Ma)return 11;if(e===$a)return 14}return 2}function Mt(e,t){var n=e.alternate;return n===null?(n=Fe(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function To(e,t,n,r,o,i){var l=2;if(r=e,typeof e=="function")vs(e)&&(l=1);else if(typeof e=="string")l=5;else e:switch(e){case gn:return en(n.children,o,i,t);case Fa:l=8,o|=8;break;case kl:return e=Fe(12,n,t,o|2),e.elementType=kl,e.lanes=i,e;case jl:return e=Fe(13,n,t,o),e.elementType=jl,e.lanes=i,e;case Pl:return e=Fe(19,n,t,o),e.elementType=Pl,e.lanes=i,e;case Bc:return ji(n,o,i,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case $c:l=10;break e;case Dc:l=9;break e;case Ma:l=11;break e;case $a:l=14;break e;case St:l=16,r=null;break e}throw Error(P(130,e==null?e:typeof e,""))}return t=Fe(l,n,t,o),t.elementType=e,t.type=r,t.lanes=i,t}function en(e,t,n,r){return e=Fe(7,e,r,t),e.lanes=n,e}function ji(e,t,n,r){return e=Fe(22,e,r,t),e.elementType=Bc,e.lanes=n,e.stateNode={isHidden:!1},e}function dl(e,t,n){return e=Fe(6,e,null,t),e.lanes=n,e}function fl(e,t,n){return t=Fe(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function b1(e,t,n,r,o){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=qi(0),this.expirationTimes=qi(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=qi(0),this.identifierPrefix=r,this.onRecoverableError=o,this.mutableSourceEagerHydrationData=null}function xs(e,t,n,r,o,i,l,a,s){return e=new b1(e,t,n,a,s),t===1?(t=1,i===!0&&(t|=8)):t=0,i=Fe(3,null,null,t),e.current=i,i.stateNode=e,i.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},ns(i),e}function U1(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:mn,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function Af(e){if(!e)return bt;e=e._reactInternals;e:{if(cn(e)!==e||e.tag!==1)throw Error(P(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Ee(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(P(171))}if(e.tag===1){var n=e.type;if(Ee(n))return zd(e,n,t)}return t}function Tf(e,t,n,r,o,i,l,a,s){return e=xs(n,r,!0,e,o,i,l,a,s),e.context=Af(null),n=e.current,r=ve(),o=Ft(n),i=ft(r,o),i.callback=t??null,Tt(n,i,o),e.current.lanes=o,Gr(e,o,r),ke(e,r),e}function Pi(e,t,n,r){var o=t.current,i=ve(),l=Ft(o);return n=Af(n),t.context===null?t.context=n:t.pendingContext=n,t=ft(i,l),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=Tt(o,t,l),e!==null&&(qe(e,o,l,i),Io(e,o,l)),l}function ui(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Du(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function ws(e,t){Du(e,t),(e=e.alternate)&&Du(e,t)}function V1(){return null}var Lf=typeof reportError=="function"?reportError:function(e){console.error(e)};function _s(e){this._internalRoot=e}Ii.prototype.render=_s.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(P(409));Pi(e,t,null,null)};Ii.prototype.unmount=_s.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;sn(function(){Pi(null,e,null,null)}),t[ht]=null}};function Ii(e){this._internalRoot=e}Ii.prototype.unstable_scheduleHydration=function(e){if(e){var t=cd();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Et.length&&t!==0&&t<Et[n].priority;n++);Et.splice(n,0,e),n===0&&fd(e)}};function Ss(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Ri(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Bu(){}function H1(e,t,n,r,o){if(o){if(typeof r=="function"){var i=r;r=function(){var u=ui(l);i.call(u)}}var l=Tf(t,r,e,0,null,!1,!1,"",Bu);return e._reactRootContainer=l,e[ht]=l.current,Ar(e.nodeType===8?e.parentNode:e),sn(),l}for(;o=e.lastChild;)e.removeChild(o);if(typeof r=="function"){var a=r;r=function(){var u=ui(s);a.call(u)}}var s=xs(e,0,!1,null,null,!1,!1,"",Bu);return e._reactRootContainer=s,e[ht]=s.current,Ar(e.nodeType===8?e.parentNode:e),sn(function(){Pi(t,s,n,r)}),s}function Oi(e,t,n,r,o){var i=n._reactRootContainer;if(i){var l=i;if(typeof o=="function"){var a=o;o=function(){var s=ui(l);a.call(s)}}Pi(t,l,e,o)}else l=H1(n,t,e,o,r);return ui(l)}sd=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=dr(t.pendingLanes);n!==0&&(ba(t,n|1),ke(t,J()),!(M&6)&&(Bn=J()+500,Ht()))}break;case 13:sn(function(){var r=mt(e,1);if(r!==null){var o=ve();qe(r,e,1,o)}}),ws(e,1)}};Ua=function(e){if(e.tag===13){var t=mt(e,134217728);if(t!==null){var n=ve();qe(t,e,134217728,n)}ws(e,134217728)}};ud=function(e){if(e.tag===13){var t=Ft(e),n=mt(e,t);if(n!==null){var r=ve();qe(n,e,t,r)}ws(e,t)}};cd=function(){return B};dd=function(e,t){var n=B;try{return B=e,t()}finally{B=n}};Ml=function(e,t,n){switch(t){case"input":if(Ol(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var o=wi(r);if(!o)throw Error(P(90));Uc(r),Ol(r,o)}}}break;case"textarea":Hc(e,n);break;case"select":t=n.value,t!=null&&In(e,!!n.multiple,t,!1)}};Xc=ms;Jc=sn;var W1={usingClientEntryPoint:!1,Events:[Yr,wn,wi,Yc,Kc,ms]},ar={findFiberByHostInstance:Yt,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},q1={bundleType:ar.bundleType,version:ar.version,rendererPackageName:ar.rendererPackageName,rendererConfig:ar.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:yt.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=td(e),e===null?null:e.stateNode},findFiberByHostInstance:ar.findFiberByHostInstance||V1,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var vo=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!vo.isDisabled&&vo.supportsFiber)try{gi=vo.inject(q1),nt=vo}catch{}}Oe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=W1;Oe.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Ss(t))throw Error(P(200));return U1(e,t,null,n)};Oe.createRoot=function(e,t){if(!Ss(e))throw Error(P(299));var n=!1,r="",o=Lf;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),t=xs(e,1,!1,null,null,n,!1,r,o),e[ht]=t.current,Ar(e.nodeType===8?e.parentNode:e),new _s(t)};Oe.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(P(188)):(e=Object.keys(e).join(","),Error(P(268,e)));return e=td(t),e=e===null?null:e.stateNode,e};Oe.flushSync=function(e){return sn(e)};Oe.hydrate=function(e,t,n){if(!Ri(t))throw Error(P(200));return Oi(null,e,t,!0,n)};Oe.hydrateRoot=function(e,t,n){if(!Ss(e))throw Error(P(405));var r=n!=null&&n.hydratedSources||null,o=!1,i="",l=Lf;if(n!=null&&(n.unstable_strictMode===!0&&(o=!0),n.identifierPrefix!==void 0&&(i=n.identifierPrefix),n.onRecoverableError!==void 0&&(l=n.onRecoverableError)),t=Tf(t,null,e,1,n??null,o,!1,i,l),e[ht]=t.current,Ar(e),r)for(e=0;e<r.length;e++)n=r[e],o=n._getVersion,o=o(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,o]:t.mutableSourceEagerHydrationData.push(n,o);return new Ii(t)};Oe.render=function(e,t,n){if(!Ri(t))throw Error(P(200));return Oi(null,e,t,!1,n)};Oe.unmountComponentAtNode=function(e){if(!Ri(e))throw Error(P(40));return e._reactRootContainer?(sn(function(){Oi(null,null,e,!1,function(){e._reactRootContainer=null,e[ht]=null})}),!0):!1};Oe.unstable_batchedUpdates=ms;Oe.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!Ri(n))throw Error(P(200));if(e==null||e._reactInternals===void 0)throw Error(P(38));return Oi(e,t,n,!1,r)};Oe.version="18.2.0-next-9e3b772b8-20220608";function Ff(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Ff)}catch(e){console.error(e)}}Ff(),Ac.exports=Oe;var G1=Ac.exports,bu=G1;Cl.createRoot=bu.createRoot,Cl.hydrateRoot=bu.hydrateRoot;const ot=x.createContext();function Q1({children:e}){const[t,n]=x.useState([]),[r,o]=x.useState({images:[],sizes:[]}),[i,l]=x.useState(0),a=()=>{const u=i+1;if(u<t.length){o(t[u]),l(u);return}o(t[0]),l(0)},s=()=>{const u=i-1;if(u>=0){o(t[u]),l(u);return}o(t[t.length-1]),l(t.length-1)};return x.useEffect(()=>{const u=document.getElementById(`image-${i}`);u&&(u.scrollIntoView({behavior:"smooth"}),o(t[i]))},[i,t]),c.jsx(ot.Provider,{value:{currentProduct:r,setCurrentProduct:o,orderProducts:t,currentProductIndex:i,setCurrentProductIndex:l,selectNextProduct:a,selectPreviousProduct:s,setOrderProducts:n},children:e})}const Ye=x.createContext();function Y1({children:e}){const t={clientName:"",clientCNPJ:"",clientFantasyName:"",orderNumber:"",orderDate:"",deadline:"",shippment:"",productsCart:[],paymentCondition:{method:"",installments:""},installmentsValue:"",totalValue:""},[n,r]=x.useState(JSON.parse(localStorage.getItem("currentOrder"))||t),[o,i]=x.useState(JSON.parse(localStorage.getItem("currentProductOrder"))||{});return x.useEffect(()=>{localStorage.setItem("currentOrder",JSON.stringify(n))},[n]),c.jsx(Ye.Provider,{value:{currentProductOrder:o,setCurrentProductOrder:i,currentOrder:n,setCurrentOrder:r},children:e})}const Xr=x.createContext();function K1({children:e}){const[t,n]=x.useState(!1),[r,o]=x.useState(!1),[i,l]=x.useState(!1),[a,s]=x.useState(!1);return c.jsx(Xr.Provider,{value:{infoCard:t,setInfoCard:n,searchCard:r,setSearchCard:o,errorRef:i,setErrorRef:l,seeAll:a,setSeeAll:s},children:e})}/**
 * @remix-run/router v1.11.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Ur(){return Ur=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Ur.apply(this,arguments)}var Rt;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(Rt||(Rt={}));const Uu="popstate";function X1(e){e===void 0&&(e={});function t(r,o){let{pathname:i,search:l,hash:a}=r.location;return ga("",{pathname:i,search:l,hash:a},o.state&&o.state.usr||null,o.state&&o.state.key||"default")}function n(r,o){return typeof o=="string"?o:Mf(o)}return Z1(t,n,null,e)}function ie(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function Cs(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function J1(){return Math.random().toString(36).substr(2,8)}function Vu(e,t){return{usr:e.state,key:e.key,idx:t}}function ga(e,t,n,r){return n===void 0&&(n=null),Ur({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?Yn(t):t,{state:n,key:t&&t.key||r||J1()})}function Mf(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(t+=r.charAt(0)==="#"?r:"#"+r),t}function Yn(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function Z1(e,t,n,r){r===void 0&&(r={});let{window:o=document.defaultView,v5Compat:i=!1}=r,l=o.history,a=Rt.Pop,s=null,u=f();u==null&&(u=0,l.replaceState(Ur({},l.state,{idx:u}),""));function f(){return(l.state||{idx:null}).idx}function m(){a=Rt.Pop;let j=f(),p=j==null?null:j-u;u=j,s&&s({action:a,location:S.location,delta:p})}function h(j,p){a=Rt.Push;let d=ga(S.location,j,p);n&&n(d,j),u=f()+1;let g=Vu(d,u),_=S.createHref(d);try{l.pushState(g,"",_)}catch(C){if(C instanceof DOMException&&C.name==="DataCloneError")throw C;o.location.assign(_)}i&&s&&s({action:a,location:S.location,delta:1})}function v(j,p){a=Rt.Replace;let d=ga(S.location,j,p);n&&n(d,j),u=f();let g=Vu(d,u),_=S.createHref(d);l.replaceState(g,"",_),i&&s&&s({action:a,location:S.location,delta:0})}function w(j){let p=o.location.origin!=="null"?o.location.origin:o.location.href,d=typeof j=="string"?j:Mf(j);return ie(p,"No window.location.(origin|href) available to create URL for href: "+d),new URL(d,p)}let S={get action(){return a},get location(){return e(o,l)},listen(j){if(s)throw new Error("A history only accepts one active listener");return o.addEventListener(Uu,m),s=j,()=>{o.removeEventListener(Uu,m),s=null}},createHref(j){return t(o,j)},createURL:w,encodeLocation(j){let p=w(j);return{pathname:p.pathname,search:p.search,hash:p.hash}},push:h,replace:v,go(j){return l.go(j)}};return S}var Hu;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(Hu||(Hu={}));function eh(e,t,n){n===void 0&&(n="/");let r=typeof t=="string"?Yn(t):t,o=Bf(r.pathname||"/",n);if(o==null)return null;let i=$f(e);th(i);let l=null;for(let a=0;l==null&&a<i.length;++a)l=ch(i[a],ph(o));return l}function $f(e,t,n,r){t===void 0&&(t=[]),n===void 0&&(n=[]),r===void 0&&(r="");let o=(i,l,a)=>{let s={relativePath:a===void 0?i.path||"":a,caseSensitive:i.caseSensitive===!0,childrenIndex:l,route:i};s.relativePath.startsWith("/")&&(ie(s.relativePath.startsWith(r),'Absolute route path "'+s.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),s.relativePath=s.relativePath.slice(r.length));let u=tn([r,s.relativePath]),f=n.concat(s);i.children&&i.children.length>0&&(ie(i.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),$f(i.children,t,f,u)),!(i.path==null&&!i.index)&&t.push({path:u,score:sh(u,i.index),routesMeta:f})};return e.forEach((i,l)=>{var a;if(i.path===""||!((a=i.path)!=null&&a.includes("?")))o(i,l);else for(let s of Df(i.path))o(i,l,s)}),t}function Df(e){let t=e.split("/");if(t.length===0)return[];let[n,...r]=t,o=n.endsWith("?"),i=n.replace(/\?$/,"");if(r.length===0)return o?[i,""]:[i];let l=Df(r.join("/")),a=[];return a.push(...l.map(s=>s===""?i:[i,s].join("/"))),o&&a.push(...l),a.map(s=>e.startsWith("/")&&s===""?"/":s)}function th(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:uh(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const nh=/^:\w+$/,rh=3,oh=2,ih=1,lh=10,ah=-2,Wu=e=>e==="*";function sh(e,t){let n=e.split("/"),r=n.length;return n.some(Wu)&&(r+=ah),t&&(r+=oh),n.filter(o=>!Wu(o)).reduce((o,i)=>o+(nh.test(i)?rh:i===""?ih:lh),r)}function uh(e,t){return e.length===t.length&&e.slice(0,-1).every((r,o)=>r===t[o])?e[e.length-1]-t[t.length-1]:0}function ch(e,t){let{routesMeta:n}=e,r={},o="/",i=[];for(let l=0;l<n.length;++l){let a=n[l],s=l===n.length-1,u=o==="/"?t:t.slice(o.length)||"/",f=dh({path:a.relativePath,caseSensitive:a.caseSensitive,end:s},u);if(!f)return null;Object.assign(r,f.params);let m=a.route;i.push({params:r,pathname:tn([o,f.pathname]),pathnameBase:xh(tn([o,f.pathnameBase])),route:m}),f.pathnameBase!=="/"&&(o=tn([o,f.pathnameBase]))}return i}function dh(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=fh(e.path,e.caseSensitive,e.end),o=t.match(n);if(!o)return null;let i=o[0],l=i.replace(/(.)\/+$/,"$1"),a=o.slice(1);return{params:r.reduce((u,f,m)=>{let{paramName:h,isOptional:v}=f;if(h==="*"){let S=a[m]||"";l=i.slice(0,i.length-S.length).replace(/(.)\/+$/,"$1")}const w=a[m];return v&&!w?u[h]=void 0:u[h]=hh(w||"",h),u},{}),pathname:i,pathnameBase:l,pattern:e}}function fh(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),Cs(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],o="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:(\w+)(\?)?/g,(l,a,s)=>(r.push({paramName:a,isOptional:s!=null}),s?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(r.push({paramName:"*"}),o+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?o+="\\/*$":e!==""&&e!=="/"&&(o+="(?:(?=\\/|$))"),[new RegExp(o,t?void 0:"i"),r]}function ph(e){try{return decodeURI(e)}catch(t){return Cs(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function hh(e,t){try{return decodeURIComponent(e)}catch(n){return Cs(!1,'The value for the URL param "'+t+'" will not be decoded because'+(' the string "'+e+'" is a malformed URL segment. This is probably')+(" due to a bad percent encoding ("+n+").")),e}}function Bf(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}function mh(e,t){t===void 0&&(t="/");let{pathname:n,search:r="",hash:o=""}=typeof e=="string"?Yn(e):e;return{pathname:n?n.startsWith("/")?n:gh(n,t):t,search:wh(r),hash:_h(o)}}function gh(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(o=>{o===".."?n.length>1&&n.pop():o!=="."&&n.push(o)}),n.length>1?n.join("/"):"/"}function pl(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function yh(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function vh(e,t,n,r){r===void 0&&(r=!1);let o;typeof e=="string"?o=Yn(e):(o=Ur({},e),ie(!o.pathname||!o.pathname.includes("?"),pl("?","pathname","search",o)),ie(!o.pathname||!o.pathname.includes("#"),pl("#","pathname","hash",o)),ie(!o.search||!o.search.includes("#"),pl("#","search","hash",o)));let i=e===""||o.pathname==="",l=i?"/":o.pathname,a;if(r||l==null)a=n;else{let m=t.length-1;if(l.startsWith("..")){let h=l.split("/");for(;h[0]==="..";)h.shift(),m-=1;o.pathname=h.join("/")}a=m>=0?t[m]:"/"}let s=mh(o,a),u=l&&l!=="/"&&l.endsWith("/"),f=(i||l===".")&&n.endsWith("/");return!s.pathname.endsWith("/")&&(u||f)&&(s.pathname+="/"),s}const tn=e=>e.join("/").replace(/\/\/+/g,"/"),xh=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),wh=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,_h=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function Sh(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const bf=["post","put","patch","delete"];new Set(bf);const Ch=["get",...bf];new Set(Ch);/**
 * React Router v6.18.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ci(){return ci=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},ci.apply(this,arguments)}const Es=x.createContext(null),Eh=x.createContext(null),zi=x.createContext(null),Ni=x.createContext(null),Kn=x.createContext({outlet:null,matches:[],isDataRoute:!1}),Uf=x.createContext(null);function Ai(){return x.useContext(Ni)!=null}function Vf(){return Ai()||ie(!1),x.useContext(Ni).location}function Hf(e){x.useContext(zi).static||x.useLayoutEffect(e)}function Jr(){let{isDataRoute:e}=x.useContext(Kn);return e?Mh():kh()}function kh(){Ai()||ie(!1);let e=x.useContext(Es),{basename:t,navigator:n}=x.useContext(zi),{matches:r}=x.useContext(Kn),{pathname:o}=Vf(),i=JSON.stringify(yh(r).map(s=>s.pathnameBase)),l=x.useRef(!1);return Hf(()=>{l.current=!0}),x.useCallback(function(s,u){if(u===void 0&&(u={}),!l.current)return;if(typeof s=="number"){n.go(s);return}let f=vh(s,JSON.parse(i),o,u.relative==="path");e==null&&t!=="/"&&(f.pathname=f.pathname==="/"?t:tn([t,f.pathname])),(u.replace?n.replace:n.push)(f,u.state,u)},[t,n,i,o,e])}function jh(e,t){return Ph(e,t)}function Ph(e,t,n){Ai()||ie(!1);let{navigator:r}=x.useContext(zi),{matches:o}=x.useContext(Kn),i=o[o.length-1],l=i?i.params:{};i&&i.pathname;let a=i?i.pathnameBase:"/";i&&i.route;let s=Vf(),u;if(t){var f;let S=typeof t=="string"?Yn(t):t;a==="/"||(f=S.pathname)!=null&&f.startsWith(a)||ie(!1),u=S}else u=s;let m=u.pathname||"/",h=a==="/"?m:m.slice(a.length)||"/",v=eh(e,{pathname:h}),w=Nh(v&&v.map(S=>Object.assign({},S,{params:Object.assign({},l,S.params),pathname:tn([a,r.encodeLocation?r.encodeLocation(S.pathname).pathname:S.pathname]),pathnameBase:S.pathnameBase==="/"?a:tn([a,r.encodeLocation?r.encodeLocation(S.pathnameBase).pathname:S.pathnameBase])})),o,n);return t&&w?x.createElement(Ni.Provider,{value:{location:ci({pathname:"/",search:"",hash:"",state:null,key:"default"},u),navigationType:Rt.Pop}},w):w}function Ih(){let e=Fh(),t=Sh(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,o={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"},i=null;return x.createElement(x.Fragment,null,x.createElement("h2",null,"Unexpected Application Error!"),x.createElement("h3",{style:{fontStyle:"italic"}},t),n?x.createElement("pre",{style:o},n):null,i)}const Rh=x.createElement(Ih,null);class Oh extends x.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location||n.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error||n.error,location:n.location,revalidation:t.revalidation||n.revalidation}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error?x.createElement(Kn.Provider,{value:this.props.routeContext},x.createElement(Uf.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function zh(e){let{routeContext:t,match:n,children:r}=e,o=x.useContext(Es);return o&&o.static&&o.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(o.staticContext._deepestRenderedBoundaryId=n.route.id),x.createElement(Kn.Provider,{value:t},r)}function Nh(e,t,n){var r;if(t===void 0&&(t=[]),n===void 0&&(n=null),e==null){var o;if((o=n)!=null&&o.errors)e=n.matches;else return null}let i=e,l=(r=n)==null?void 0:r.errors;if(l!=null){let a=i.findIndex(s=>s.route.id&&(l==null?void 0:l[s.route.id]));a>=0||ie(!1),i=i.slice(0,Math.min(i.length,a+1))}return i.reduceRight((a,s,u)=>{let f=s.route.id?l==null?void 0:l[s.route.id]:null,m=null;n&&(m=s.route.errorElement||Rh);let h=t.concat(i.slice(0,u+1)),v=()=>{let w;return f?w=m:s.route.Component?w=x.createElement(s.route.Component,null):s.route.element?w=s.route.element:w=a,x.createElement(zh,{match:s,routeContext:{outlet:a,matches:h,isDataRoute:n!=null},children:w})};return n&&(s.route.ErrorBoundary||s.route.errorElement||u===0)?x.createElement(Oh,{location:n.location,revalidation:n.revalidation,component:m,error:f,children:v(),routeContext:{outlet:null,matches:h,isDataRoute:!0}}):v()},null)}var Wf=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(Wf||{}),di=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(di||{});function Ah(e){let t=x.useContext(Es);return t||ie(!1),t}function Th(e){let t=x.useContext(Eh);return t||ie(!1),t}function Lh(e){let t=x.useContext(Kn);return t||ie(!1),t}function qf(e){let t=Lh(),n=t.matches[t.matches.length-1];return n.route.id||ie(!1),n.route.id}function Fh(){var e;let t=x.useContext(Uf),n=Th(di.UseRouteError),r=qf(di.UseRouteError);return t||((e=n.errors)==null?void 0:e[r])}function Mh(){let{router:e}=Ah(Wf.UseNavigateStable),t=qf(di.UseNavigateStable),n=x.useRef(!1);return Hf(()=>{n.current=!0}),x.useCallback(function(o,i){i===void 0&&(i={}),n.current&&(typeof o=="number"?e.navigate(o):e.navigate(o,ci({fromRouteId:t},i)))},[e,t])}function ya(e){ie(!1)}function $h(e){let{basename:t="/",children:n=null,location:r,navigationType:o=Rt.Pop,navigator:i,static:l=!1}=e;Ai()&&ie(!1);let a=t.replace(/^\/*/,"/"),s=x.useMemo(()=>({basename:a,navigator:i,static:l}),[a,i,l]);typeof r=="string"&&(r=Yn(r));let{pathname:u="/",search:f="",hash:m="",state:h=null,key:v="default"}=r,w=x.useMemo(()=>{let S=Bf(u,a);return S==null?null:{location:{pathname:S,search:f,hash:m,state:h,key:v},navigationType:o}},[a,u,f,m,h,v,o]);return w==null?null:x.createElement(zi.Provider,{value:s},x.createElement(Ni.Provider,{children:n,value:w}))}function Dh(e){let{children:t,location:n}=e;return jh(va(t),n)}new Promise(()=>{});function va(e,t){t===void 0&&(t=[]);let n=[];return x.Children.forEach(e,(r,o)=>{if(!x.isValidElement(r))return;let i=[...t,o];if(r.type===x.Fragment){n.push.apply(n,va(r.props.children,i));return}r.type!==ya&&ie(!1),!r.props.index||!r.props.children||ie(!1);let l={id:r.props.id||i.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(l.children=va(r.props.children,i)),n.push(l)}),n}/**
 * React Router DOM v6.18.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */const Bh="startTransition",qu=Mp[Bh];function bh(e){let{basename:t,children:n,future:r,window:o}=e,i=x.useRef();i.current==null&&(i.current=X1({window:o,v5Compat:!0}));let l=i.current,[a,s]=x.useState({action:l.action,location:l.location}),{v7_startTransition:u}=r||{},f=x.useCallback(m=>{u&&qu?qu(()=>s(m)):s(m)},[s,u]);return x.useLayoutEffect(()=>l.listen(f),[l,f]),x.createElement($h,{basename:t,children:n,location:a.location,navigationType:a.action,navigator:l})}var Gu;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(Gu||(Gu={}));var Qu;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(Qu||(Qu={}));var Gf={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},Yu=re.createContext&&re.createContext(Gf),$t=globalThis&&globalThis.__assign||function(){return $t=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e},$t.apply(this,arguments)},Uh=globalThis&&globalThis.__rest||function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]]);return n};function Qf(e){return e&&e.map(function(t,n){return re.createElement(t.tag,$t({key:n},t.attr),Qf(t.child))})}function te(e){return function(t){return re.createElement(Vh,$t({attr:$t({},e.attr)},t),Qf(e.child))}}function Vh(e){var t=function(n){var r=e.attr,o=e.size,i=e.title,l=Uh(e,["attr","size","title"]),a=o||n.size||"1em",s;return n.className&&(s=n.className),e.className&&(s=(s?s+" ":"")+e.className),re.createElement("svg",$t({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},n.attr,r,l,{className:s,style:$t($t({color:e.color||n.color},n.style),e.style),height:a,width:a,xmlns:"http://www.w3.org/2000/svg"}),i&&re.createElement("title",null,i),e.children)};return Yu!==void 0?re.createElement(Yu.Consumer,null,function(n){return t(n)}):t(Gf)}function Hh(e){return te({tag:"svg",attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M893.3 293.3L730.7 130.7c-12-12-28.3-18.7-45.3-18.7H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V338.5c0-17-6.7-33.2-18.7-45.2zM384 176h256v112H384V176zm128 554c-79.5 0-144-64.5-144-144s64.5-144 144-144 144 64.5 144 144-64.5 144-144 144zm0-224c-44.2 0-80 35.8-80 80s35.8 80 80 80 80-35.8 80-80-35.8-80-80-80z"}}]})(e)}function Wh(e){return te({tag:"svg",attr:{t:"1569683368540",viewBox:"0 0 1024 1024",version:"1.1"},child:[{tag:"defs",attr:{},child:[]},{tag:"path",attr:{d:"M899.1 869.6l-53-305.6H864c14.4 0 26-11.6 26-26V346c0-14.4-11.6-26-26-26H618V138c0-14.4-11.6-26-26-26H432c-14.4 0-26 11.6-26 26v182H160c-14.4 0-26 11.6-26 26v192c0 14.4 11.6 26 26 26h17.9l-53 305.6c-0.3 1.5-0.4 3-0.4 4.4 0 14.4 11.6 26 26 26h723c1.5 0 3-0.1 4.4-0.4 14.2-2.4 23.7-15.9 21.2-30zM204 390h272V182h72v208h272v104H204V390z m468 440V674c0-4.4-3.6-8-8-8h-48c-4.4 0-8 3.6-8 8v156H416V674c0-4.4-3.6-8-8-8h-48c-4.4 0-8 3.6-8 8v156H202.8l45.1-260H776l45.1 260H672z"}}]})(e)}function qh(e){return te({tag:"svg",attr:{viewBox:"0 0 1024 1024",fill:"currentColor",fillRule:"evenodd"},child:[{tag:"path",attr:{d:"M799.855 166.312c.023.007.043.018.084.059l57.69 57.69c.041.041.052.06.059.084a.118.118 0 0 1 0 .069c-.007.023-.018.042-.059.083L569.926 512l287.703 287.703c.041.04.052.06.059.083a.118.118 0 0 1 0 .07c-.007.022-.018.042-.059.083l-57.69 57.69c-.041.041-.06.052-.084.059a.118.118 0 0 1-.069 0c-.023-.007-.042-.018-.083-.059L512 569.926 224.297 857.629c-.04.041-.06.052-.083.059a.118.118 0 0 1-.07 0c-.022-.007-.042-.018-.083-.059l-57.69-57.69c-.041-.041-.052-.06-.059-.084a.118.118 0 0 1 0-.069c.007-.023.018-.042.059-.083L454.073 512 166.371 224.297c-.041-.04-.052-.06-.059-.083a.118.118 0 0 1 0-.07c.007-.022.018-.042.059-.083l57.69-57.69c.041-.041.06-.052.084-.059a.118.118 0 0 1 .069 0c.023.007.042.018.083.059L512 454.073l287.703-287.702c.04-.041.06-.052.083-.059a.118.118 0 0 1 .07 0Z"}}]})(e)}function Gh(e){return te({tag:"svg",attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M257.7 752c2 0 4-.2 6-.5L431.9 722c2-.4 3.9-1.3 5.3-2.8l423.9-423.9a9.96 9.96 0 0 0 0-14.1L694.9 114.9c-1.9-1.9-4.4-2.9-7.1-2.9s-5.2 1-7.1 2.9L256.8 538.8c-1.5 1.5-2.4 3.3-2.8 5.3l-29.5 168.2a33.5 33.5 0 0 0 9.4 29.8c6.6 6.4 14.9 9.9 23.8 9.9zm67.4-174.4L687.8 215l73.3 73.3-362.7 362.6-88.9 15.7 15.6-89zM880 836H144c-17.7 0-32 14.3-32 32v36c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-36c0-17.7-14.3-32-32-32z"}}]})(e)}function Qh(e){return te({tag:"svg",attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M928 160H96c-17.7 0-32 14.3-32 32v640c0 17.7 14.3 32 32 32h832c17.7 0 32-14.3 32-32V192c0-17.7-14.3-32-32-32zm-40 632H136V232h752v560zM610.3 476h123.4c1.3 0 2.3-3.6 2.3-8v-48c0-4.4-1-8-2.3-8H610.3c-1.3 0-2.3 3.6-2.3 8v48c0 4.4 1 8 2.3 8zm4.8 144h185.7c3.9 0 7.1-3.6 7.1-8v-48c0-4.4-3.2-8-7.1-8H615.1c-3.9 0-7.1 3.6-7.1 8v48c0 4.4 3.2 8 7.1 8zM224 673h43.9c4.2 0 7.6-3.3 7.9-7.5 3.8-50.5 46-90.5 97.2-90.5s93.4 40 97.2 90.5c.3 4.2 3.7 7.5 7.9 7.5H522a8 8 0 0 0 8-8.4c-2.8-53.3-32-99.7-74.6-126.1a111.8 111.8 0 0 0 29.1-75.5c0-61.9-49.9-112-111.4-112s-111.4 50.1-111.4 112c0 29.1 11 55.5 29.1 75.5a158.09 158.09 0 0 0-74.6 126.1c-.4 4.6 3.2 8.4 7.8 8.4zm149-262c28.5 0 51.7 23.3 51.7 52s-23.2 52-51.7 52-51.7-23.3-51.7-52 23.2-52 51.7-52z"}}]})(e)}function Yh(e){return te({tag:"svg",attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M724 218.3V141c0-6.7-7.7-10.4-12.9-6.3L260.3 486.8a31.86 31.86 0 0 0 0 50.3l450.8 352.1c5.3 4.1 12.9.4 12.9-6.3v-77.3c0-4.9-2.3-9.6-6.1-12.6l-360-281 360-281.1c3.8-3 6.1-7.7 6.1-12.6z"}}]})(e)}function Kh(e){return te({tag:"svg",attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M832 464h-68V240c0-70.7-57.3-128-128-128H388c-70.7 0-128 57.3-128 128v224h-68c-17.7 0-32 14.3-32 32v384c0 17.7 14.3 32 32 32h640c17.7 0 32-14.3 32-32V496c0-17.7-14.3-32-32-32zM332 240c0-30.9 25.1-56 56-56h248c30.9 0 56 25.1 56 56v224H332V240zm460 600H232V536h560v304zM484 701v53c0 4.4 3.6 8 8 8h40c4.4 0 8-3.6 8-8v-53a48.01 48.01 0 1 0-56 0z"}}]})(e)}function Xh(e){return te({tag:"svg",attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M928 160H96c-17.7 0-32 14.3-32 32v640c0 17.7 14.3 32 32 32h832c17.7 0 32-14.3 32-32V192c0-17.7-14.3-32-32-32zm-40 110.8V792H136V270.8l-27.6-21.5 39.3-50.5 42.8 33.3h643.1l42.8-33.3 39.3 50.5-27.7 21.5zM833.6 232L512 482 190.4 232l-42.8-33.3-39.3 50.5 27.6 21.5 341.6 265.6a55.99 55.99 0 0 0 68.7 0L888 270.8l27.6-21.5-39.3-50.5-42.7 33.2z"}}]})(e)}function Jh(e){return te({tag:"svg",attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M765.7 486.8L314.9 134.7A7.97 7.97 0 0 0 302 141v77.3c0 4.9 2.3 9.6 6.1 12.6l360 281.1-360 281.1c-3.9 3-6.1 7.7-6.1 12.6V883c0 6.7 7.7 10.4 12.9 6.3l450.8-352.1a31.96 31.96 0 0 0 0-50.4z"}}]})(e)}function Zh(e){return te({tag:"svg",attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M858.5 763.6a374 374 0 0 0-80.6-119.5 375.63 375.63 0 0 0-119.5-80.6c-.4-.2-.8-.3-1.2-.5C719.5 518 760 444.7 760 362c0-137-111-248-248-248S264 225 264 362c0 82.7 40.5 156 102.8 201.1-.4.2-.8.3-1.2.5-44.8 18.9-85 46-119.5 80.6a375.63 375.63 0 0 0-80.6 119.5A371.7 371.7 0 0 0 136 901.8a8 8 0 0 0 8 8.2h60c4.4 0 7.9-3.5 8-7.8 2-77.2 33-149.5 87.8-204.3 56.7-56.7 132-87.9 212.2-87.9s155.5 31.2 212.2 87.9C779 752.7 810 825 812 902.2c.1 4.4 3.6 7.8 8 7.8h60a8 8 0 0 0 8-8.2c-1-47.8-10.9-94.3-29.5-138.2zM512 534c-45.9 0-89.1-17.9-121.6-50.4S340 407.9 340 362c0-45.9 17.9-89.1 50.4-121.6S466.1 190 512 190s89.1 17.9 121.6 50.4S684 316.1 684 362c0 45.9-17.9 89.1-50.4 121.6S557.9 534 512 534z"}}]})(e)}function em(e){return te({tag:"svg",attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M960 509.2c0-2.2 0-4.7-.1-7.6-.1-8.1-.3-17.2-.5-26.9-.8-27.9-2.2-55.7-4.4-81.9-3-36.1-7.4-66.2-13.4-88.8a139.52 139.52 0 0 0-98.3-98.5c-28.3-7.6-83.7-12.3-161.7-15.2-37.1-1.4-76.8-2.3-116.5-2.8-13.9-.2-26.8-.3-38.4-.4h-29.4c-11.6.1-24.5.2-38.4.4-39.7.5-79.4 1.4-116.5 2.8-78 3-133.5 7.7-161.7 15.2A139.35 139.35 0 0 0 82.4 304C76.3 326.6 72 356.7 69 392.8c-2.2 26.2-3.6 54-4.4 81.9-.3 9.7-.4 18.8-.5 26.9 0 2.9-.1 5.4-.1 7.6v5.6c0 2.2 0 4.7.1 7.6.1 8.1.3 17.2.5 26.9.8 27.9 2.2 55.7 4.4 81.9 3 36.1 7.4 66.2 13.4 88.8 12.8 47.9 50.4 85.7 98.3 98.5 28.2 7.6 83.7 12.3 161.7 15.2 37.1 1.4 76.8 2.3 116.5 2.8 13.9.2 26.8.3 38.4.4h29.4c11.6-.1 24.5-.2 38.4-.4 39.7-.5 79.4-1.4 116.5-2.8 78-3 133.5-7.7 161.7-15.2 47.9-12.8 85.5-50.5 98.3-98.5 6.1-22.6 10.4-52.7 13.4-88.8 2.2-26.2 3.6-54 4.4-81.9.3-9.7.4-18.8.5-26.9 0-2.9.1-5.4.1-7.6v-5.6zm-72 5.2c0 2.1 0 4.4-.1 7.1-.1 7.8-.3 16.4-.5 25.7-.7 26.6-2.1 53.2-4.2 77.9-2.7 32.2-6.5 58.6-11.2 76.3-6.2 23.1-24.4 41.4-47.4 47.5-21 5.6-73.9 10.1-145.8 12.8-36.4 1.4-75.6 2.3-114.7 2.8-13.7.2-26.4.3-37.8.3h-28.6l-37.8-.3c-39.1-.5-78.2-1.4-114.7-2.8-71.9-2.8-124.9-7.2-145.8-12.8-23-6.2-41.2-24.4-47.4-47.5-4.7-17.7-8.5-44.1-11.2-76.3-2.1-24.7-3.4-51.3-4.2-77.9-.3-9.3-.4-18-.5-25.7 0-2.7-.1-5.1-.1-7.1v-4.8c0-2.1 0-4.4.1-7.1.1-7.8.3-16.4.5-25.7.7-26.6 2.1-53.2 4.2-77.9 2.7-32.2 6.5-58.6 11.2-76.3 6.2-23.1 24.4-41.4 47.4-47.5 21-5.6 73.9-10.1 145.8-12.8 36.4-1.4 75.6-2.3 114.7-2.8 13.7-.2 26.4-.3 37.8-.3h28.6l37.8.3c39.1.5 78.2 1.4 114.7 2.8 71.9 2.8 124.9 7.2 145.8 12.8 23 6.2 41.2 24.4 47.4 47.5 4.7 17.7 8.5 44.1 11.2 76.3 2.1 24.7 3.4 51.3 4.2 77.9.3 9.3.4 18 .5 25.7 0 2.7.1 5.1.1 7.1v4.8zM423 646l232-135-232-133z"}}]})(e)}const tm="/assets/down-line-8038ee6f.svg",nm="/assets/filter-icon-1688ec59.svg",jt=[{id:7934,name:"BLUS├âO VIP - EA16",reference:"89.08.0048",company_id:1,brand_id:21,brand_name:"MOSAICO",category_id:1073,category_name:"BLUS├âO",price:12.5,fixed_qtd:8,box_price:100,group_id:4,group_name:"FEMININO",result_line:4705,sizes:{P:2,M:4,G:2},colors:[],images:[{id:18738,image:"https://marquente.painel.e-catalogos.net/storage/2463/2463_16177162689rsu08ltvkw9mmrm51mqij.png",order:1,product_id:7934},{id:18734,image:"https://marquente.painel.e-catalogos.net/storage/2463/2463_16177162651i227y4v3ov0u0ofk4bp51d.png",order:2,product_id:7934}]},{id:7933,name:"BLUS├âO VIP - EA15",reference:"89.08.0047",company_id:1,brand_id:21,brand_name:"MOSAICO",category_id:1073,category_name:"BLUS├âO",price:13.5,fixed_qtd:8,box_price:108,group_id:4,group_name:"FEMININO",result_line:4705,sizes:{P:2,M:4,G:2},colors:[{color_name:"PRETO/VERMELHO",cod_hex:"000000",cod_rgb:"0 0 0",product_id:7933},{color_name:"MARINHO/OCRE",cod_hex:"273251",cod_rgb:"39 50 81",product_id:7933}],images:[{id:13911,image:"https://marquente.painel.e-catalogos.net/storage/2463/2463_16111676177e2ppubdoaok3co16kwptf.png",order:1,product_id:7933},{id:13910,image:"https://marquente.painel.e-catalogos.net/storage/2463/2463_1611167604rc35xjhmv2h97bkv83ijg9.png",order:2,product_id:7933}]},{id:7932,name:"BLUS├âO VIP - EA80",reference:"89.08.0046",company_id:1,brand_id:21,brand_name:"MOSAICO",category_id:1073,category_name:"BLUS├âO",price:13,fixed_qtd:8,box_price:104,group_id:4,group_name:"FEMININO",result_line:4705,sizes:{P:2,M:4,G:2},colors:[],images:[{id:18732,image:"https://marquente.painel.e-catalogos.net/storage/2463/2463_1617716264t27ug615ypdp2i5126fefl.png",order:1,product_id:7932},{id:18730,image:"https://marquente.painel.e-catalogos.net/storage/2463/2463_1617716263xjyv1eu1jpmlasscv8nj8.png",order:2,product_id:7932}]},{id:7931,name:"BLUS├âO BASIC - 9727",reference:"89.04.0008",company_id:1,brand_id:21,brand_name:"MOSAICO",category_id:1073,category_name:"BLUS├âO",price:29.99,fixed_qtd:6,box_price:179.94,group_id:4,group_name:"FEMININO",result_line:4705,sizes:{P:1,M:2,G:2,GG:1},colors:[{color_name:"PRETO/VERMELHO",cod_hex:"000000",cod_rgb:"0 0 0",product_id:7931},{color_name:"VERDE",cod_hex:"6da85b",cod_rgb:"109 168 91",product_id:7931}],images:[{id:18799,image:"https://marquente.painel.e-catalogos.net/storage/2463/2463_1617809199zmwmdjawavl1e8fgc5mfj.png",order:1,product_id:7931},{id:18804,image:"https://marquente.painel.e-catalogos.net/storage/2463/2463_1617809201r2rjcvdmqpkjfdsy2vfstq.png",order:2,product_id:7931}]},{id:7930,name:"BLUS├âO FS MALHA - 9033",reference:"89.02.0046",company_id:1,brand_id:21,brand_name:"MOSAICO",category_id:1078,category_name:"BLUSAS",price:9,fixed_qtd:6,box_price:54,group_id:20,group_name:"FEMININO PROMO├ç├âO",result_line:4705,sizes:{P:2,M:2,G:2},colors:[{color_name:"PRETO/VERMELHO",cod_hex:"000000",cod_rgb:"0 0 0",product_id:7930},{color_name:"MESCLA ESCURO/VINHO",cod_hex:"9b3133",cod_rgb:"155 49 51",product_id:7930}],images:[{id:13908,image:"https://marquente.painel.e-catalogos.net/storage/2463/2463_1611167600uvvu7qtlo3ru19w8d2itj.png",order:1,product_id:7930},{id:13909,image:"https://marquente.painel.e-catalogos.net/storage/2463/2463_16111676010m4yl8k4ynmn0t9769ihw5rb.png",order:2,product_id:7930}]},{id:7929,name:"CARDIG├â FEMININO MO-35H",reference:"87.14.0011",company_id:1,brand_id:21,brand_name:"MOSAICO",category_id:1099,category_name:"SWEATER",price:34.99,fixed_qtd:5,box_price:174.95,group_id:4,group_name:"FEMININO",result_line:4705,sizes:{P:1,M:2,G:1,GG:1},colors:[{color_name:"BRANCO/VINHO",cod_hex:"ffffff",cod_rgb:"255 255 255",product_id:7929}],images:[{id:13508,image:"https://marquente.painel.e-catalogos.net/storage/2463/2463_1610978905smwiqjovbvfykebjxfla6.png",order:1,product_id:7929},{id:13507,image:"https://marquente.painel.e-catalogos.net/storage/2463/2463_1610978905w755w86l7rn94bu4zcyb0i.png",order:2,product_id:7929}]},{id:7928,name:"CARDIG├â FEMININO MO-35F",reference:"87.14.0009",company_id:1,brand_id:21,brand_name:"MOSAICO",category_id:1099,category_name:"SWEATER",price:34.99,fixed_qtd:5,box_price:174.95,group_id:4,group_name:"FEMININO",result_line:4705,sizes:{P:1,M:2,G:1,GG:1},colors:[{color_name:"GRAFITE MESCLA",cod_hex:"4e4f52",cod_rgb:"78 79 82",product_id:7928}],images:[{id:18776,image:"https://marquente.painel.e-catalogos.net/storage/2463/2463_1617809125fkzp6dscn55e76nqcb519l.png",order:1,product_id:7928},{id:18770,image:"https://marquente.painel.e-catalogos.net/storage/2463/2463_1617809122rdwabtstbj9gypmv8e48gs.png",order:2,product_id:7928}]},{id:7927,name:"CARDIG├â FEMININO MO-35D",reference:"87.14.0007",company_id:1,brand_id:21,brand_name:"MOSAICO",category_id:1099,category_name:"SWEATER",price:34.99,fixed_qtd:5,box_price:174.95,group_id:4,group_name:"FEMININO",result_line:4705,sizes:{P:1,M:2,G:1,GG:1},colors:[{color_name:"BRANCO/VINHO",cod_hex:"ffffff",cod_rgb:"255 255 255",product_id:7927}],images:[{id:18773,image:"https://marquente.painel.e-catalogos.net/storage/2463/2463_16178091240251jncku9wmovt122lxnfc.png",order:1,product_id:7927},{id:18774,image:"https://marquente.painel.e-catalogos.net/storage/2463/2463_1617809124ge53farhh0dhtc4hlvi4gi.png",order:2,product_id:7927}]},{id:7926,name:"SWEATER DIXIE CHINA DXI232",reference:"87.13.0324",company_id:1,brand_id:17,brand_name:"DIXIE",category_id:1099,category_name:"SWEATER",price:49.99,fixed_qtd:6,box_price:299.94,group_id:1,group_name:"MASCULINO",result_line:4705,sizes:{P:1,M:1,G:2,GG:2},colors:[{color_name:"MESCLA",cod_hex:"c9cccf",cod_rgb:"201 204 207",product_id:7926}],images:[{id:12469,image:"https://marquente.painel.e-catalogos.net/storage/2463/2463_1607614197vfup3g99z1dx7qdnx8wzb.png",order:1,product_id:7926},{id:12475,image:"https://marquente.painel.e-catalogos.net/storage/2463/2463_1607614217iqffyhul0nj8wxvgljtam.png",order:1,product_id:7926},{id:12468,image:"https://marquente.painel.e-catalogos.net/storage/2463/2463_16076141977e4ijy4jxunwrhnu2abje.png",order:2,product_id:7926},{id:12476,image:"https://marquente.painel.e-catalogos.net/storage/2463/2463_1607614217zxzhjvkc3jlw0fsqj9ezzb.png",order:2,product_id:7926},{id:12467,image:"https://marquente.painel.e-catalogos.net/storage/2463/2463_1607614196w0sc9z3a87zrbig4hxck7.png",order:3,product_id:7926}]},{id:7925,name:"SWEATER DIXIE CHINA DXI231",reference:"87.13.0323",company_id:1,brand_id:17,brand_name:"DIXIE",category_id:1099,category_name:"SWEATER",price:45.99,fixed_qtd:6,box_price:275.94,group_id:1,group_name:"MASCULINO",result_line:4705,sizes:{P:1,M:1,G:2,GG:2},colors:[{color_name:"MARINHO/OCRE",cod_hex:"273251",cod_rgb:"39 50 81",product_id:7925}],images:[{id:12455,image:"https://marquente.painel.e-catalogos.net/storage/2463/2463_1607614144kfqai4vy287q3zv52x7yo.png",order:1,product_id:7925},{id:12458,image:"https://marquente.painel.e-catalogos.net/storage/2463/2463_16076141465ey1geuvpmdvs4uvqnbxcd.png",order:2,product_id:7925},{id:12463,image:"https://marquente.painel.e-catalogos.net/storage/2463/2463_1607614154t5w50svom1apzzjf6tu0p.png",order:3,product_id:7925}]},{id:7924,name:"SWEATER DIXIE CHINA DXI230",reference:"87.13.0322",company_id:1,brand_id:17,brand_name:"DIXIE",category_id:1099,category_name:"SWEATER",price:45.99,fixed_qtd:6,box_price:275.94,group_id:1,group_name:"MASCULINO",result_line:4705,sizes:{P:1,M:1,G:2,GG:2},colors:[{color_name:"MESCLA",cod_hex:"c9cccf",cod_rgb:"201 204 207",product_id:7924}],images:[{id:12456,image:"https://marquente.painel.e-catalogos.net/storage/2463/2463_1607614145adwk1cgpbsjgs4w2i7b8n.png",order:1,product_id:7924},{id:12459,image:"https://marquente.painel.e-catalogos.net/storage/2463/2463_1607614146v91x5j2alma0lx3hn6kwtj.png",order:2,product_id:7924},{id:12457,image:"https://marquente.painel.e-catalogos.net/storage/2463/2463_1607614145v2kym4up5tjrp23gfur7ur.png",order:3,product_id:7924}]},{id:7923,name:"SWEATER DIXIE CHINA DXI228",reference:"87.13.0320",company_id:1,brand_id:17,brand_name:"DIXIE",category_id:1099,category_name:"SWEATER",price:45.99,fixed_qtd:6,box_price:275.94,group_id:1,group_name:"MASCULINO",result_line:4705,sizes:{P:1,M:1,G:2,GG:2},colors:[{color_name:"MESCLA",cod_hex:"c9cccf",cod_rgb:"201 204 207",product_id:7923}],images:[{id:12460,image:"https://marquente.painel.e-catalogos.net/storage/2463/2463_1607614147hj0ak2rcveau4fas34fiv.png",order:1,product_id:7923},{id:12462,image:"https://marquente.painel.e-catalogos.net/storage/2463/2463_1607614150avn15375cl6k2wqry8vqsg.png",order:2,product_id:7923},{id:12461,image:"https://marquente.painel.e-catalogos.net/storage/2463/2463_16076141490eyog4sawivvuzhiojrjid.png",order:3,product_id:7923}]},{id:7922,name:"SWEATER DIXIE CHINA DXI221",reference:"87.13.0313",company_id:1,brand_id:17,brand_name:"DIXIE",category_id:1099,category_name:"SWEATER",price:45.99,fixed_qtd:6,box_price:275.94,group_id:1,group_name:"MASCULINO",result_line:4705,sizes:{P:1,M:1,G:2,GG:2},colors:[{color_name:"MARINHO/OCRE",cod_hex:"273251",cod_rgb:"39 50 81",product_id:7922}],images:[{id:12449,image:"https://marquente.painel.e-catalogos.net/storage/2463/2463_1607614084pw4c0ehb17bp82q2kfp4yb.png",order:1,product_id:7922},{id:12447,image:"https://marquente.painel.e-catalogos.net/storage/2463/2463_1607614083826hf6qeiwhd7whzmadc3.png",order:2,product_id:7922},{id:12446,image:"https://marquente.painel.e-catalogos.net/storage/2463/2463_1607614082do4gnpquo2j0qpebz7eqmd.png",order:3,product_id:7922}]},{id:7921,name:"SWEATER DIXIE CHINA DXI219",reference:"87.13.0311",company_id:1,brand_id:17,brand_name:"DIXIE",category_id:1099,category_name:"SWEATER",price:45.99,fixed_qtd:6,box_price:275.94,group_id:1,group_name:"MASCULINO",result_line:4705,sizes:{P:1,M:1,G:2,GG:2},colors:[{color_name:"MESCLA",cod_hex:"c9cccf",cod_rgb:"201 204 207",product_id:7921}],images:[{id:12450,image:"https://marquente.painel.e-catalogos.net/storage/2463/2463_1607614087zzgkinoaq9pj8dtjuybuea.png",order:1,product_id:7921},{id:12451,image:"https://marquente.painel.e-catalogos.net/storage/2463/2463_1607614089pgxnsdh302z2evk31zxkg.png",order:2,product_id:7921},{id:12448,image:"https://marquente.painel.e-catalogos.net/storage/2463/2463_1607614085rqf0upb2y8bu8iz5199uj.png",order:3,product_id:7921}]},{id:7920,name:"SWEATER DIXIE CHINA DXI216",reference:"87.13.0308",company_id:1,brand_id:17,brand_name:"DIXIE",category_id:1099,category_name:"SWEATER",price:45.99,fixed_qtd:6,box_price:275.94,group_id:1,group_name:"MASCULINO",result_line:4705,sizes:{P:1,M:1,G:2,GG:2},colors:[{color_name:"MESCLA",cod_hex:"c9cccf",cod_rgb:"201 204 207",product_id:7920}],images:[{id:12453,image:"https://marquente.painel.e-catalogos.net/storage/2463/2463_1607614092c6w9f1e0w8kjuunfq10h97.png",order:1,product_id:7920},{id:12454,image:"https://marquente.painel.e-catalogos.net/storage/2463/2463_1607614093b86pzikr3inmzxqdaft6w.png",order:2,product_id:7920},{id:12452,image:"https://marquente.painel.e-catalogos.net/storage/2463/2463_1607614090ug3heh4d8klkfw4o7x7o9.png",order:3,product_id:7920}]},{id:7919,name:"SUETER FEMININO MO-21",reference:"87.13.0267",company_id:1,brand_id:21,brand_name:"MOSAICO",category_id:1099,category_name:"SWEATER",price:34.99,fixed_qtd:5,box_price:174.95,group_id:4,group_name:"FEMININO",result_line:4705,sizes:{P:1,M:2,G:1,GG:1},colors:[{color_name:"MARINHO/OCRE",cod_hex:"273251",cod_rgb:"39 50 81",product_id:7919}],images:[{id:13450,image:"https://marquente.painel.e-catalogos.net/storage/2463/2463_16109785670ifb7mv96y153easabhz2g.png",order:1,product_id:7919},{id:13479,image:"https://marquente.painel.e-catalogos.net/storage/2463/2463_16109786974kfcymn7u5gx2mwzwmrr4.png",order:1,product_id:7919},{id:13448,image:"https://marquente.painel.e-catalogos.net/storage/2463/2463_1610978566zvzaq5k6w9ixgjysusi18a.png",order:2,product_id:7919},{id:13480,image:"https://marquente.painel.e-catalogos.net/storage/2463/2463_1610978697vi5d579tarvezfltgvii.png",order:2,product_id:7919}]},{id:7918,name:"SUETER FEMININO MO-17",reference:"87.13.0265",company_id:1,brand_id:21,brand_name:"MOSAICO",category_id:1099,category_name:"SWEATER",price:34.99,fixed_qtd:5,box_price:174.95,group_id:4,group_name:"FEMININO",result_line:4705,sizes:{P:1,M:2,G:1,GG:1},colors:[{color_name:"BEGE",cod_hex:"d4d6b2",cod_rgb:"212 214 178",product_id:7918}],images:[{id:13452,image:"https://marquente.painel.e-catalogos.net/storage/2463/2463_16109785680fm5ll045nnhwuyw8ii5yi.png",order:1,product_id:7918},{id:13481,image:"https://marquente.painel.e-catalogos.net/storage/2463/2463_1610978699k4um5dfup9lp5nv9gkrb3q.png",order:1,product_id:7918},{id:13449,image:"https://marquente.painel.e-catalogos.net/storage/2463/2463_16109785675ccmasdypzvhfglfqdpdmb.png",order:2,product_id:7918},{id:13478,image:"https://marquente.painel.e-catalogos.net/storage/2463/2463_1610978696esm3r8t5748avzhi8ip1v7.png",order:2,product_id:7918}]},{id:7917,name:"SUETER FEMININO MO-15",reference:"87.13.0261",company_id:1,brand_id:21,brand_name:"MOSAICO",category_id:1099,category_name:"SWEATER",price:34.99,fixed_qtd:5,box_price:174.95,group_id:4,group_name:"FEMININO",result_line:4705,sizes:{P:1,M:2,G:1,GG:1},colors:[{color_name:"GRAFITE MESCLA",cod_hex:"4e4f52",cod_rgb:"78 79 82",product_id:7917}],images:[{id:13453,image:"https://marquente.painel.e-catalogos.net/storage/2463/2463_1610978571fh8ewjsml6fci0t1uzga3d.png",order:1,product_id:7917},{id:13482,image:"https://marquente.painel.e-catalogos.net/storage/2463/2463_161097869991kai79x6q84dccob7tweo.png",order:1,product_id:7917},{id:13451,image:"https://marquente.painel.e-catalogos.net/storage/2463/2463_16109785680xu0j53eoiy5wgdx2ly5q.png",order:2,product_id:7917},{id:13483,image:"https://marquente.painel.e-catalogos.net/storage/2463/2463_161097869940cpavk10k4zoseez8ittg.png",order:2,product_id:7917}]},{id:7916,name:"SUETER FEMININO MO-14",reference:"87.13.0260",company_id:1,brand_id:21,brand_name:"MOSAICO",category_id:1099,category_name:"SWEATER",price:34.99,fixed_qtd:5,box_price:174.95,group_id:4,group_name:"FEMININO",result_line:4705,sizes:{P:1,M:2,G:1,GG:1},colors:[{color_name:"MARINHO/OCRE",cod_hex:"273251",cod_rgb:"39 50 81",product_id:7916}],images:[{id:18777,image:"https://marquente.painel.e-catalogos.net/storage/2463/2463_1617809125kjkxdfulgcbqahv7ai1y.png",order:1,product_id:7916},{id:18778,image:"https://marquente.painel.e-catalogos.net/storage/2463/2463_1617809126soag7eialapy7yzj4nd8oc.png",order:2,product_id:7916}]},{id:7915,name:"KIDS SWEATER OLY2-0100",reference:"87.13.0258",company_id:1,brand_id:23,brand_name:"OLYNS",category_id:1099,category_name:"SWEATER",price:26.99,fixed_qtd:6,box_price:161.94,group_id:3,group_name:"INFANTIL",result_line:4705,sizes:{4:2,6:2,8:2},colors:[{color_name:"ROSA",cod_hex:"e8a2a8",cod_rgb:"232 162 168",product_id:7915}],images:[]},{id:7914,name:"KIDS SWEATER OLY2-0103",reference:"87.13.0257",company_id:1,brand_id:23,brand_name:"OLYNS",category_id:1099,category_name:"SWEATER",price:26.99,fixed_qtd:6,box_price:161.94,group_id:3,group_name:"INFANTIL",result_line:4705,sizes:{4:2,6:2,8:2},colors:[{color_name:"OFF WHITE",cod_hex:"efe0cb",cod_rgb:"239 224 203",product_id:7914},{color_name:"ROSA",cod_hex:"e8a2a8",cod_rgb:"232 162 168",product_id:7914}],images:[{id:17895,image:"https://marquente.painel.e-catalogos.net/storage/2463/2463_1615233645ccuslfpidq98t7tnkdo26n.png",order:1,product_id:7914},{id:17894,image:"https://marquente.painel.e-catalogos.net/storage/2463/2463_1615233645nvom3fnjaci0nltgyhho9im.png",order:2,product_id:7914},{id:17893,image:"https://marquente.painel.e-catalogos.net/storage/2463/2463_1615233644btbo6ihi5v4b9693tkd98h.png",order:3,product_id:7914}]},{id:7913,name:"KIDS SWEATER OLY2-104",reference:"87.13.0248",company_id:1,brand_id:23,brand_name:"OLYNS",category_id:1099,category_name:"SWEATER",price:26.99,fixed_qtd:6,box_price:161.94,group_id:3,group_name:"INFANTIL",result_line:4705,sizes:{4:2,6:2,8:2},colors:[{color_name:"OFF WHITE",cod_hex:"efe0cb",cod_rgb:"239 224 203",product_id:7913},{color_name:"LILAS LAVANDA",cod_hex:"deabdd",cod_rgb:"222 171 221",product_id:7913}],images:[]},{id:7912,name:"KIDS SWEATER OLY2-102",reference:"87.13.0247",company_id:1,brand_id:23,brand_name:"OLYNS",category_id:1099,category_name:"SWEATER",price:26.99,fixed_qtd:6,box_price:161.94,group_id:3,group_name:"INFANTIL",result_line:4705,sizes:{4:2,6:2,8:2},colors:[{color_name:"MESCLA",cod_hex:"c9cccf",cod_rgb:"201 204 207",product_id:7912},{color_name:"ROSA",cod_hex:"e8a2a8",cod_rgb:"232 162 168",product_id:7912}],images:[{id:18902,image:"https://marquente.painel.e-catalogos.net/storage/2463/2463_16182295367dxyhiez1dewl1fzg6w2g.png",order:1,product_id:7912},{id:18890,image:"https://marquente.painel.e-catalogos.net/storage/2463/2463_16182295330w7nbclv37vmmpr60zp5f.png",order:2,product_id:7912}]},{id:7911,name:"TRICOT PELO OVER CHINA / OVF2-0063",reference:"87.13.0244",company_id:1,brand_id:22,brand_name:"OVERGIRLS",category_id:1099,category_name:"SWEATER",price:35.99,fixed_qtd:6,box_price:215.94,group_id:4,group_name:"FEMININO",result_line:4705,sizes:{P:1,M:2,G:2,GG:1},colors:[{color_name:"OFF WHITE",cod_hex:"efe0cb",cod_rgb:"239 224 203",product_id:7911},{color_name:"VERMELHO/PRETO",cod_hex:"ed3237",cod_rgb:"237 50 55",product_id:7911}],images:[{id:13074,image:"https://marquente.painel.e-catalogos.net/storage/2463/2463_1608558958dyy442fxyxagxxzm2skaaw.png",order:1,product_id:7911},{id:13073,image:"https://marquente.painel.e-catalogos.net/storage/2463/2463_1608558956d8hhimaa49cxviiktnofy8.png",order:2,product_id:7911}]},{id:7910,name:"TRICOT PELO OVER CHINA / OVF2-0062",reference:"87.13.0243",company_id:1,brand_id:22,brand_name:"OVERGIRLS",category_id:1099,category_name:"SWEATER",price:35.99,fixed_qtd:6,box_price:215.94,group_id:4,group_name:"FEMININO",result_line:4705,sizes:{P:1,M:2,G:2,GG:1},colors:[{color_name:"CHUMBO",cod_hex:"6d7073",cod_rgb:"109 112 115",product_id:7910},{color_name:"PRETO/VERMELHO",cod_hex:"000000",cod_rgb:"0 0 0",product_id:7910}],images:[{id:13072,image:"https://marquente.painel.e-catalogos.net/storage/2463/2463_1608558935wvz4pxstf05x48ddkd8qi.png",order:1,product_id:7910},{id:13071,image:"https://marquente.painel.e-catalogos.net/storage/2463/2463_16085589344sjddxvlnjx1ivxvca8lkv.png",order:2,product_id:7910}]},{id:7909,name:"TRICOT PELO OVER CHINA / OVF2-0060",reference:"87.13.0241",company_id:1,brand_id:22,brand_name:"OVERGIRLS",category_id:1099,category_name:"SWEATER",price:35.99,fixed_qtd:6,box_price:215.94,group_id:4,group_name:"FEMININO",result_line:4705,sizes:{P:1,M:2,G:2,GG:1},colors:[{color_name:"OFF WHITE",cod_hex:"efe0cb",cod_rgb:"239 224 203",product_id:7909},{color_name:"ROSA",cod_hex:"e8a2a8",cod_rgb:"232 162 168",product_id:7909}],images:[{id:13070,image:"https://marquente.painel.e-catalogos.net/storage/2463/2463_16085589085lg8eyrkm4df7k9i8hxmjo.png",order:1,product_id:7909},{id:13069,image:"https://marquente.painel.e-catalogos.net/storage/2463/2463_16085589076b6mp3lbq5eed0evzap9ld.png",order:2,product_id:7909}]},{id:7908,name:"KIDS SWEATER OLY2-995",reference:"87.13.0239",company_id:1,brand_id:23,brand_name:"OLYNS",category_id:1099,category_name:"SWEATER",price:26.99,fixed_qtd:6,box_price:161.94,group_id:3,group_name:"INFANTIL",result_line:4705,sizes:{4:2,6:2,8:2},colors:[{color_name:"MESCLA",cod_hex:"c9cccf",cod_rgb:"201 204 207",product_id:7908},{color_name:"OFF WHITE",cod_hex:"efe0cb",cod_rgb:"239 224 203",product_id:7908}],images:[]},{id:7907,name:"KIDS SWEATER OLY2-994",reference:"87.13.0238",company_id:1,brand_id:23,brand_name:"OLYNS",category_id:1099,category_name:"SWEATER",price:26.99,fixed_qtd:6,box_price:161.94,group_id:3,group_name:"INFANTIL",result_line:4705,sizes:{4:2,6:2,8:2},colors:[{color_name:"PRETO/VERMELHO",cod_hex:"000000",cod_rgb:"0 0 0",product_id:7907},{color_name:"VERMELHO/PRETO",cod_hex:"ed3237",cod_rgb:"237 50 55",product_id:7907}],images:[]},{id:7906,name:"MEN SWEATER INV18 CHINA",reference:"87.13.0194",company_id:1,brand_id:15,brand_name:"GANGSTER",category_id:1099,category_name:"SWEATER",price:34.99,fixed_qtd:6,box_price:209.94,group_id:1,group_name:"MASCULINO",result_line:4705,sizes:{P:1,M:2,G:2,GG:1},colors:[{color_name:"MARINHO/OCRE",cod_hex:"273251",cod_rgb:"39 50 81",product_id:7906},{color_name:"GRAFITE MESCLA",cod_hex:"4e4f52",cod_rgb:"78 79 82",product_id:7906}],images:[{id:13905,image:"https://marquente.painel.e-catalogos.net/storage/2463/2463_1611167590uaoe7k79346rljfr1cu8d.png",order:1,product_id:7906},{id:13904,image:"https://marquente.painel.e-catalogos.net/storage/2463/2463_1611167590ekytay2gc7utd7i3wjzu.png",order:2,product_id:7906}]},{id:7905,name:"MEN SWEATER INV18 CHINA",reference:"87.13.0193",company_id:1,brand_id:15,brand_name:"GANGSTER",category_id:1099,category_name:"SWEATER",price:32.5,fixed_qtd:6,box_price:195,group_id:1,group_name:"MASCULINO",result_line:4705,sizes:{P:1,M:2,G:2,GG:1},colors:[{color_name:"MARINHO/OCRE",cod_hex:"273251",cod_rgb:"39 50 81",product_id:7905},{color_name:"PRETO/VERMELHO",cod_hex:"000000",cod_rgb:"0 0 0",product_id:7905}],images:[{id:13907,image:"https://marquente.painel.e-catalogos.net/storage/2463/2463_1611167595vrxecctv7g3g14zno9c7b.png",order:1,product_id:7905},{id:13906,image:"https://marquente.painel.e-catalogos.net/storage/2463/2463_1611167593jshkvk2q2ndqtue68lodd.png",order:2,product_id:7905}]}],Ku=jt.map(({category_name:e})=>e),rm=Ku.filter((e,t)=>Ku.indexOf(e)===t),Xu=jt.map(({brand_name:e})=>e),om=Xu.filter((e,t)=>Xu.indexOf(e)===t),Ju=jt.map(({group_name:e})=>e),im=Ju.filter((e,t)=>Ju.indexOf(e)===t),lm=[{filterName:"Marca",options:om},{filterName:"Entrega",options:["Pronta Entrega","Programado"]},{filterName:"Tipo",options:["Tipo 1","Tipo 2","Tipo 3","Tipo 4","Tipo 5","Tipo 6"]},{filterName:"Gênero",options:im},{filterName:"Categorias",subFilters:rm.map(e=>({filterName:e,options:["Subcategoria 1","Subcategoria 2","Subcategoria 3","Subcategoria 4"]}))}];var me=function(){return me=Object.assign||function(t){for(var n,r=1,o=arguments.length;r<o;r++){n=arguments[r];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},me.apply(this,arguments)};function Vr(e,t,n){if(n||arguments.length===2)for(var r=0,o=t.length,i;r<o;r++)(i||!(r in t))&&(i||(i=Array.prototype.slice.call(t,0,r)),i[r]=t[r]);return e.concat(i||Array.prototype.slice.call(t))}var V="-ms-",Cr="-moz-",D="-webkit-",Yf="comm",Ti="rule",ks="decl",am="@import",Kf="@keyframes",sm="@layer",um=Math.abs,js=String.fromCharCode,xa=Object.assign;function cm(e,t){return ae(e,0)^45?(((t<<2^ae(e,0))<<2^ae(e,1))<<2^ae(e,2))<<2^ae(e,3):0}function Xf(e){return e.trim()}function st(e,t){return(e=t.exec(e))?e[0]:e}function T(e,t,n){return e.replace(t,n)}function Lo(e,t){return e.indexOf(t)}function ae(e,t){return e.charCodeAt(t)|0}function bn(e,t,n){return e.slice(t,n)}function et(e){return e.length}function Jf(e){return e.length}function pr(e,t){return t.push(e),e}function dm(e,t){return e.map(t).join("")}function Zu(e,t){return e.filter(function(n){return!st(n,t)})}var Li=1,Un=1,Zf=0,Be=0,Z=0,Xn="";function Fi(e,t,n,r,o,i,l,a){return{value:e,root:t,parent:n,type:r,props:o,children:i,line:Li,column:Un,length:l,return:"",siblings:a}}function _t(e,t){return xa(Fi("",null,null,"",null,null,0,e.siblings),e,{length:-e.length},t)}function hn(e){for(;e.root;)e=_t(e.root,{children:[e]});pr(e,e.siblings)}function fm(){return Z}function pm(){return Z=Be>0?ae(Xn,--Be):0,Un--,Z===10&&(Un=1,Li--),Z}function Ge(){return Z=Be<Zf?ae(Xn,Be++):0,Un++,Z===10&&(Un=1,Li++),Z}function nn(){return ae(Xn,Be)}function Fo(){return Be}function Mi(e,t){return bn(Xn,e,t)}function wa(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function hm(e){return Li=Un=1,Zf=et(Xn=e),Be=0,[]}function mm(e){return Xn="",e}function hl(e){return Xf(Mi(Be-1,_a(e===91?e+2:e===40?e+1:e)))}function gm(e){for(;(Z=nn())&&Z<33;)Ge();return wa(e)>2||wa(Z)>3?"":" "}function ym(e,t){for(;--t&&Ge()&&!(Z<48||Z>102||Z>57&&Z<65||Z>70&&Z<97););return Mi(e,Fo()+(t<6&&nn()==32&&Ge()==32))}function _a(e){for(;Ge();)switch(Z){case e:return Be;case 34:case 39:e!==34&&e!==39&&_a(Z);break;case 40:e===41&&_a(e);break;case 92:Ge();break}return Be}function vm(e,t){for(;Ge()&&e+Z!==47+10;)if(e+Z===42+42&&nn()===47)break;return"/*"+Mi(t,Be-1)+"*"+js(e===47?e:Ge())}function xm(e){for(;!wa(nn());)Ge();return Mi(e,Be)}function wm(e){return mm(Mo("",null,null,null,[""],e=hm(e),0,[0],e))}function Mo(e,t,n,r,o,i,l,a,s){for(var u=0,f=0,m=l,h=0,v=0,w=0,S=1,j=1,p=1,d=0,g="",_=o,C=i,k=r,E=g;j;)switch(w=d,d=Ge()){case 40:if(w!=108&&ae(E,m-1)==58){Lo(E+=T(hl(d),"&","&\f"),"&\f")!=-1&&(p=-1);break}case 34:case 39:case 91:E+=hl(d);break;case 9:case 10:case 13:case 32:E+=gm(w);break;case 92:E+=ym(Fo()-1,7);continue;case 47:switch(nn()){case 42:case 47:pr(_m(vm(Ge(),Fo()),t,n,s),s);break;default:E+="/"}break;case 123*S:a[u++]=et(E)*p;case 125*S:case 59:case 0:switch(d){case 0:case 125:j=0;case 59+f:p==-1&&(E=T(E,/\f/g,"")),v>0&&et(E)-m&&pr(v>32?tc(E+";",r,n,m-1,s):tc(T(E," ","")+";",r,n,m-2,s),s);break;case 59:E+=";";default:if(pr(k=ec(E,t,n,u,f,o,a,g,_=[],C=[],m,i),i),d===123)if(f===0)Mo(E,t,k,k,_,i,m,a,C);else switch(h===99&&ae(E,3)===110?100:h){case 100:case 108:case 109:case 115:Mo(e,k,k,r&&pr(ec(e,k,k,0,0,o,a,g,o,_=[],m,C),C),o,C,m,a,r?_:C);break;default:Mo(E,k,k,k,[""],C,0,a,C)}}u=f=v=0,S=p=1,g=E="",m=l;break;case 58:m=1+et(E),v=w;default:if(S<1){if(d==123)--S;else if(d==125&&S++==0&&pm()==125)continue}switch(E+=js(d),d*S){case 38:p=f>0?1:(E+="\f",-1);break;case 44:a[u++]=(et(E)-1)*p,p=1;break;case 64:nn()===45&&(E+=hl(Ge())),h=nn(),f=m=et(g=E+=xm(Fo())),d++;break;case 45:w===45&&et(E)==2&&(S=0)}}return i}function ec(e,t,n,r,o,i,l,a,s,u,f,m){for(var h=o-1,v=o===0?i:[""],w=Jf(v),S=0,j=0,p=0;S<r;++S)for(var d=0,g=bn(e,h+1,h=um(j=l[S])),_=e;d<w;++d)(_=Xf(j>0?v[d]+" "+g:T(g,/&\f/g,v[d])))&&(s[p++]=_);return Fi(e,t,n,o===0?Ti:a,s,u,f,m)}function _m(e,t,n,r){return Fi(e,t,n,Yf,js(fm()),bn(e,2,-2),0,r)}function tc(e,t,n,r,o){return Fi(e,t,n,ks,bn(e,0,r),bn(e,r+1,-1),r,o)}function ep(e,t,n){switch(cm(e,t)){case 5103:return D+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return D+e+e;case 4789:return Cr+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return D+e+Cr+e+V+e+e;case 5936:switch(ae(e,t+11)){case 114:return D+e+V+T(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return D+e+V+T(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return D+e+V+T(e,/[svh]\w+-[tblr]{2}/,"lr")+e}case 6828:case 4268:case 2903:return D+e+V+e+e;case 6165:return D+e+V+"flex-"+e+e;case 5187:return D+e+T(e,/(\w+).+(:[^]+)/,D+"box-$1$2"+V+"flex-$1$2")+e;case 5443:return D+e+V+"flex-item-"+T(e,/flex-|-self/g,"")+(st(e,/flex-|baseline/)?"":V+"grid-row-"+T(e,/flex-|-self/g,""))+e;case 4675:return D+e+V+"flex-line-pack"+T(e,/align-content|flex-|-self/g,"")+e;case 5548:return D+e+V+T(e,"shrink","negative")+e;case 5292:return D+e+V+T(e,"basis","preferred-size")+e;case 6060:return D+"box-"+T(e,"-grow","")+D+e+V+T(e,"grow","positive")+e;case 4554:return D+T(e,/([^-])(transform)/g,"$1"+D+"$2")+e;case 6187:return T(T(T(e,/(zoom-|grab)/,D+"$1"),/(image-set)/,D+"$1"),e,"")+e;case 5495:case 3959:return T(e,/(image-set\([^]*)/,D+"$1$`$1");case 4968:return T(T(e,/(.+:)(flex-)?(.*)/,D+"box-pack:$3"+V+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+D+e+e;case 4200:if(!st(e,/flex-|baseline/))return V+"grid-column-align"+bn(e,t)+e;break;case 2592:case 3360:return V+T(e,"template-","")+e;case 4384:case 3616:return n&&n.some(function(r,o){return t=o,st(r.props,/grid-\w+-end/)})?~Lo(e+(n=n[t].value),"span")?e:V+T(e,"-start","")+e+V+"grid-row-span:"+(~Lo(n,"span")?st(n,/\d+/):+st(n,/\d+/)-+st(e,/\d+/))+";":V+T(e,"-start","")+e;case 4896:case 4128:return n&&n.some(function(r){return st(r.props,/grid-\w+-start/)})?e:V+T(T(e,"-end","-span"),"span ","")+e;case 4095:case 3583:case 4068:case 2532:return T(e,/(.+)-inline(.+)/,D+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(et(e)-1-t>6)switch(ae(e,t+1)){case 109:if(ae(e,t+4)!==45)break;case 102:return T(e,/(.+:)(.+)-([^]+)/,"$1"+D+"$2-$3$1"+Cr+(ae(e,t+3)==108?"$3":"$2-$3"))+e;case 115:return~Lo(e,"stretch")?ep(T(e,"stretch","fill-available"),t,n)+e:e}break;case 5152:case 5920:return T(e,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(r,o,i,l,a,s,u){return V+o+":"+i+u+(l?V+o+"-span:"+(a?s:+s-+i)+u:"")+e});case 4949:if(ae(e,t+6)===121)return T(e,":",":"+D)+e;break;case 6444:switch(ae(e,ae(e,14)===45?18:11)){case 120:return T(e,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+D+(ae(e,14)===45?"inline-":"")+"box$3$1"+D+"$2$3$1"+V+"$2box$3")+e;case 100:return T(e,":",":"+V)+e}break;case 5719:case 2647:case 2135:case 3927:case 2391:return T(e,"scroll-","scroll-snap-")+e}return e}function fi(e,t){for(var n="",r=0;r<e.length;r++)n+=t(e[r],r,e,t)||"";return n}function Sm(e,t,n,r){switch(e.type){case sm:if(e.children.length)break;case am:case ks:return e.return=e.return||e.value;case Yf:return"";case Kf:return e.return=e.value+"{"+fi(e.children,r)+"}";case Ti:if(!et(e.value=e.props.join(",")))return""}return et(n=fi(e.children,r))?e.return=e.value+"{"+n+"}":""}function Cm(e){var t=Jf(e);return function(n,r,o,i){for(var l="",a=0;a<t;a++)l+=e[a](n,r,o,i)||"";return l}}function Em(e){return function(t){t.root||(t=t.return)&&e(t)}}function km(e,t,n,r){if(e.length>-1&&!e.return)switch(e.type){case ks:e.return=ep(e.value,e.length,n);return;case Kf:return fi([_t(e,{value:T(e.value,"@","@"+D)})],r);case Ti:if(e.length)return dm(n=e.props,function(o){switch(st(o,r=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":hn(_t(e,{props:[T(o,/:(read-\w+)/,":"+Cr+"$1")]})),hn(_t(e,{props:[o]})),xa(e,{props:Zu(n,r)});break;case"::placeholder":hn(_t(e,{props:[T(o,/:(plac\w+)/,":"+D+"input-$1")]})),hn(_t(e,{props:[T(o,/:(plac\w+)/,":"+Cr+"$1")]})),hn(_t(e,{props:[T(o,/:(plac\w+)/,V+"input-$1")]})),hn(_t(e,{props:[o]})),xa(e,{props:Zu(n,r)});break}return""})}}var jm={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},Vn=typeof process<"u"&&process.env!==void 0&&({}.REACT_APP_SC_ATTR||{}.SC_ATTR)||"data-styled",Ps=typeof window<"u"&&"HTMLElement"in window,Pm=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&process.env!==void 0&&{}.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&{}.REACT_APP_SC_DISABLE_SPEEDY!==""?{}.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&{}.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&process.env!==void 0&&{}.SC_DISABLE_SPEEDY!==void 0&&{}.SC_DISABLE_SPEEDY!==""&&{}.SC_DISABLE_SPEEDY!=="false"&&{}.SC_DISABLE_SPEEDY),Im={},$i=Object.freeze([]),Hn=Object.freeze({});function tp(e,t,n){return n===void 0&&(n=Hn),e.theme!==n.theme&&e.theme||t||n.theme}var np=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),Rm=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,Om=/(^-|-$)/g;function nc(e){return e.replace(Rm,"-").replace(Om,"")}var zm=/(a)(d)/gi,rc=function(e){return String.fromCharCode(e+(e>25?39:97))};function Sa(e){var t,n="";for(t=Math.abs(e);t>52;t=t/52|0)n=rc(t%52)+n;return(rc(t%52)+n).replace(zm,"$1-$2")}var ml,Pn=function(e,t){for(var n=t.length;n;)e=33*e^t.charCodeAt(--n);return e},rp=function(e){return Pn(5381,e)};function op(e){return Sa(rp(e)>>>0)}function Nm(e){return e.displayName||e.name||"Component"}function gl(e){return typeof e=="string"&&!0}var ip=typeof Symbol=="function"&&Symbol.for,lp=ip?Symbol.for("react.memo"):60115,Am=ip?Symbol.for("react.forward_ref"):60112,Tm={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},Lm={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},ap={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},Fm=((ml={})[Am]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},ml[lp]=ap,ml);function oc(e){return("type"in(t=e)&&t.type.$$typeof)===lp?ap:"$$typeof"in e?Fm[e.$$typeof]:Tm;var t}var Mm=Object.defineProperty,$m=Object.getOwnPropertyNames,ic=Object.getOwnPropertySymbols,Dm=Object.getOwnPropertyDescriptor,Bm=Object.getPrototypeOf,lc=Object.prototype;function sp(e,t,n){if(typeof t!="string"){if(lc){var r=Bm(t);r&&r!==lc&&sp(e,r,n)}var o=$m(t);ic&&(o=o.concat(ic(t)));for(var i=oc(e),l=oc(t),a=0;a<o.length;++a){var s=o[a];if(!(s in Lm||n&&n[s]||l&&s in l||i&&s in i)){var u=Dm(t,s);try{Mm(e,s,u)}catch{}}}}return e}function Wn(e){return typeof e=="function"}function Is(e){return typeof e=="object"&&"styledComponentId"in e}function Jt(e,t){return e&&t?"".concat(e," ").concat(t):e||t||""}function Ca(e,t){if(e.length===0)return"";for(var n=e[0],r=1;r<e.length;r++)n+=t?t+e[r]:e[r];return n}function Hr(e){return e!==null&&typeof e=="object"&&e.constructor.name===Object.name&&!("props"in e&&e.$$typeof)}function Ea(e,t,n){if(n===void 0&&(n=!1),!n&&!Hr(e)&&!Array.isArray(e))return t;if(Array.isArray(t))for(var r=0;r<t.length;r++)e[r]=Ea(e[r],t[r]);else if(Hr(t))for(var r in t)e[r]=Ea(e[r],t[r]);return e}function Rs(e,t){Object.defineProperty(e,"toString",{value:t})}function Zr(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(e," for more information.").concat(t.length>0?" Args: ".concat(t.join(", ")):""))}var bm=function(){function e(t){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=t}return e.prototype.indexOfGroup=function(t){for(var n=0,r=0;r<t;r++)n+=this.groupSizes[r];return n},e.prototype.insertRules=function(t,n){if(t>=this.groupSizes.length){for(var r=this.groupSizes,o=r.length,i=o;t>=i;)if((i<<=1)<0)throw Zr(16,"".concat(t));this.groupSizes=new Uint32Array(i),this.groupSizes.set(r),this.length=i;for(var l=o;l<i;l++)this.groupSizes[l]=0}for(var a=this.indexOfGroup(t+1),s=(l=0,n.length);l<s;l++)this.tag.insertRule(a,n[l])&&(this.groupSizes[t]++,a++)},e.prototype.clearGroup=function(t){if(t<this.length){var n=this.groupSizes[t],r=this.indexOfGroup(t),o=r+n;this.groupSizes[t]=0;for(var i=r;i<o;i++)this.tag.deleteRule(r)}},e.prototype.getGroup=function(t){var n="";if(t>=this.length||this.groupSizes[t]===0)return n;for(var r=this.groupSizes[t],o=this.indexOfGroup(t),i=o+r,l=o;l<i;l++)n+="".concat(this.tag.getRule(l)).concat(`/*!sc*/
`);return n},e}(),$o=new Map,pi=new Map,Do=1,xo=function(e){if($o.has(e))return $o.get(e);for(;pi.has(Do);)Do++;var t=Do++;return $o.set(e,t),pi.set(t,e),t},Um=function(e,t){Do=t+1,$o.set(e,t),pi.set(t,e)},Vm="style[".concat(Vn,"][").concat("data-styled-version",'="').concat("6.1.1",'"]'),Hm=new RegExp("^".concat(Vn,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),Wm=function(e,t,n){for(var r,o=n.split(","),i=0,l=o.length;i<l;i++)(r=o[i])&&e.registerName(t,r)},qm=function(e,t){for(var n,r=((n=t.textContent)!==null&&n!==void 0?n:"").split(`/*!sc*/
`),o=[],i=0,l=r.length;i<l;i++){var a=r[i].trim();if(a){var s=a.match(Hm);if(s){var u=0|parseInt(s[1],10),f=s[2];u!==0&&(Um(f,u),Wm(e,f,s[3]),e.getTag().insertRules(u,o)),o.length=0}else o.push(a)}}};function Gm(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var up=function(e){var t=document.head,n=e||t,r=document.createElement("style"),o=function(a){var s=Array.from(a.querySelectorAll("style[".concat(Vn,"]")));return s[s.length-1]}(n),i=o!==void 0?o.nextSibling:null;r.setAttribute(Vn,"active"),r.setAttribute("data-styled-version","6.1.1");var l=Gm();return l&&r.setAttribute("nonce",l),n.insertBefore(r,i),r},Qm=function(){function e(t){this.element=up(t),this.element.appendChild(document.createTextNode("")),this.sheet=function(n){if(n.sheet)return n.sheet;for(var r=document.styleSheets,o=0,i=r.length;o<i;o++){var l=r[o];if(l.ownerNode===n)return l}throw Zr(17)}(this.element),this.length=0}return e.prototype.insertRule=function(t,n){try{return this.sheet.insertRule(n,t),this.length++,!0}catch{return!1}},e.prototype.deleteRule=function(t){this.sheet.deleteRule(t),this.length--},e.prototype.getRule=function(t){var n=this.sheet.cssRules[t];return n&&n.cssText?n.cssText:""},e}(),Ym=function(){function e(t){this.element=up(t),this.nodes=this.element.childNodes,this.length=0}return e.prototype.insertRule=function(t,n){if(t<=this.length&&t>=0){var r=document.createTextNode(n);return this.element.insertBefore(r,this.nodes[t]||null),this.length++,!0}return!1},e.prototype.deleteRule=function(t){this.element.removeChild(this.nodes[t]),this.length--},e.prototype.getRule=function(t){return t<this.length?this.nodes[t].textContent:""},e}(),Km=function(){function e(t){this.rules=[],this.length=0}return e.prototype.insertRule=function(t,n){return t<=this.length&&(this.rules.splice(t,0,n),this.length++,!0)},e.prototype.deleteRule=function(t){this.rules.splice(t,1),this.length--},e.prototype.getRule=function(t){return t<this.length?this.rules[t]:""},e}(),ac=Ps,Xm={isServer:!Ps,useCSSOMInjection:!Pm},hi=function(){function e(t,n,r){t===void 0&&(t=Hn),n===void 0&&(n={});var o=this;this.options=me(me({},Xm),t),this.gs=n,this.names=new Map(r),this.server=!!t.isServer,!this.server&&Ps&&ac&&(ac=!1,function(i){for(var l=document.querySelectorAll(Vm),a=0,s=l.length;a<s;a++){var u=l[a];u&&u.getAttribute(Vn)!=="active"&&(qm(i,u),u.parentNode&&u.parentNode.removeChild(u))}}(this)),Rs(this,function(){return function(i){for(var l=i.getTag(),a=l.length,s="",u=function(m){var h=function(p){return pi.get(p)}(m);if(h===void 0)return"continue";var v=i.names.get(h),w=l.getGroup(m);if(v===void 0||w.length===0)return"continue";var S="".concat(Vn,".g").concat(m,'[id="').concat(h,'"]'),j="";v!==void 0&&v.forEach(function(p){p.length>0&&(j+="".concat(p,","))}),s+="".concat(w).concat(S,'{content:"').concat(j,'"}').concat(`/*!sc*/
`)},f=0;f<a;f++)u(f);return s}(o)})}return e.registerId=function(t){return xo(t)},e.prototype.reconstructWithOptions=function(t,n){return n===void 0&&(n=!0),new e(me(me({},this.options),t),this.gs,n&&this.names||void 0)},e.prototype.allocateGSInstance=function(t){return this.gs[t]=(this.gs[t]||0)+1},e.prototype.getTag=function(){return this.tag||(this.tag=(t=function(n){var r=n.useCSSOMInjection,o=n.target;return n.isServer?new Km(o):r?new Qm(o):new Ym(o)}(this.options),new bm(t)));var t},e.prototype.hasNameForId=function(t,n){return this.names.has(t)&&this.names.get(t).has(n)},e.prototype.registerName=function(t,n){if(xo(t),this.names.has(t))this.names.get(t).add(n);else{var r=new Set;r.add(n),this.names.set(t,r)}},e.prototype.insertRules=function(t,n,r){this.registerName(t,n),this.getTag().insertRules(xo(t),r)},e.prototype.clearNames=function(t){this.names.has(t)&&this.names.get(t).clear()},e.prototype.clearRules=function(t){this.getTag().clearGroup(xo(t)),this.clearNames(t)},e.prototype.clearTag=function(){this.tag=void 0},e}(),Jm=/&/g,Zm=/^\s*\/\/.*$/gm;function cp(e,t){return e.map(function(n){return n.type==="rule"&&(n.value="".concat(t," ").concat(n.value),n.value=n.value.replaceAll(",",",".concat(t," ")),n.props=n.props.map(function(r){return"".concat(t," ").concat(r)})),Array.isArray(n.children)&&n.type!=="@keyframes"&&(n.children=cp(n.children,t)),n})}function eg(e){var t,n,r,o=e===void 0?Hn:e,i=o.options,l=i===void 0?Hn:i,a=o.plugins,s=a===void 0?$i:a,u=function(h,v,w){return w===n||w.startsWith(n)&&w.endsWith(n)&&w.replaceAll(n,"").length>0?".".concat(t):h},f=s.slice();f.push(function(h){h.type===Ti&&h.value.includes("&")&&(h.props[0]=h.props[0].replace(Jm,n).replace(r,u))}),l.prefix&&f.push(km),f.push(Sm);var m=function(h,v,w,S){v===void 0&&(v=""),w===void 0&&(w=""),S===void 0&&(S="&"),t=S,n=v,r=new RegExp("\\".concat(n,"\\b"),"g");var j=h.replace(Zm,""),p=wm(w||v?"".concat(w," ").concat(v," { ").concat(j," }"):j);l.namespace&&(p=cp(p,l.namespace));var d=[];return fi(p,Cm(f.concat(Em(function(g){return d.push(g)})))),d};return m.hash=s.length?s.reduce(function(h,v){return v.name||Zr(15),Pn(h,v.name)},5381).toString():"",m}var tg=new hi,ka=eg(),dp=re.createContext({shouldForwardProp:void 0,styleSheet:tg,stylis:ka});dp.Consumer;re.createContext(void 0);function ja(){return x.useContext(dp)}var ng=function(){function e(t,n){var r=this;this.inject=function(o,i){i===void 0&&(i=ka);var l=r.name+i.hash;o.hasNameForId(r.id,l)||o.insertRules(r.id,l,i(r.rules,l,"@keyframes"))},this.name=t,this.id="sc-keyframes-".concat(t),this.rules=n,Rs(this,function(){throw Zr(12,String(r.name))})}return e.prototype.getName=function(t){return t===void 0&&(t=ka),this.name+t.hash},e}(),rg=function(e){return e>="A"&&e<="Z"};function sc(e){for(var t="",n=0;n<e.length;n++){var r=e[n];if(n===1&&r==="-"&&e[0]==="-")return e;rg(r)?t+="-"+r.toLowerCase():t+=r}return t.startsWith("ms-")?"-"+t:t}var fp=function(e){return e==null||e===!1||e===""},pp=function(e){var t,n,r=[];for(var o in e){var i=e[o];e.hasOwnProperty(o)&&!fp(i)&&(Array.isArray(i)&&i.isCss||Wn(i)?r.push("".concat(sc(o),":"),i,";"):Hr(i)?r.push.apply(r,Vr(Vr(["".concat(o," {")],pp(i),!1),["}"],!1)):r.push("".concat(sc(o),": ").concat((t=o,(n=i)==null||typeof n=="boolean"||n===""?"":typeof n!="number"||n===0||t in jm||t.startsWith("--")?String(n).trim():"".concat(n,"px")),";")))}return r};function Dt(e,t,n,r){if(fp(e))return[];if(Is(e))return[".".concat(e.styledComponentId)];if(Wn(e)){if(!Wn(i=e)||i.prototype&&i.prototype.isReactComponent||!t)return[e];var o=e(t);return Dt(o,t,n,r)}var i;return e instanceof ng?n?(e.inject(n,r),[e.getName(r)]):[e]:Hr(e)?pp(e):Array.isArray(e)?Array.prototype.concat.apply($i,e.map(function(l){return Dt(l,t,n,r)})):[e.toString()]}function hp(e){for(var t=0;t<e.length;t+=1){var n=e[t];if(Wn(n)&&!Is(n))return!1}return!0}var og=rp("6.1.1"),ig=function(){function e(t,n,r){this.rules=t,this.staticRulesId="",this.isStatic=(r===void 0||r.isStatic)&&hp(t),this.componentId=n,this.baseHash=Pn(og,n),this.baseStyle=r,hi.registerId(n)}return e.prototype.generateAndInjectStyles=function(t,n,r){var o=this.baseStyle?this.baseStyle.generateAndInjectStyles(t,n,r):"";if(this.isStatic&&!r.hash)if(this.staticRulesId&&n.hasNameForId(this.componentId,this.staticRulesId))o=Jt(o,this.staticRulesId);else{var i=Ca(Dt(this.rules,t,n,r)),l=Sa(Pn(this.baseHash,i)>>>0);if(!n.hasNameForId(this.componentId,l)){var a=r(i,".".concat(l),void 0,this.componentId);n.insertRules(this.componentId,l,a)}o=Jt(o,l),this.staticRulesId=l}else{for(var s=Pn(this.baseHash,r.hash),u="",f=0;f<this.rules.length;f++){var m=this.rules[f];if(typeof m=="string")u+=m;else if(m){var h=Ca(Dt(m,t,n,r));s=Pn(s,h+f),u+=h}}if(u){var v=Sa(s>>>0);n.hasNameForId(this.componentId,v)||n.insertRules(this.componentId,v,r(u,".".concat(v),void 0,this.componentId)),o=Jt(o,v)}}return o},e}(),Os=re.createContext(void 0);Os.Consumer;var yl={};function lg(e,t,n){var r=Is(e),o=e,i=!gl(e),l=t.attrs,a=l===void 0?$i:l,s=t.componentId,u=s===void 0?function(_,C){var k=typeof _!="string"?"sc":nc(_);yl[k]=(yl[k]||0)+1;var E="".concat(k,"-").concat(op("6.1.1"+k+yl[k]));return C?"".concat(C,"-").concat(E):E}(t.displayName,t.parentComponentId):s,f=t.displayName,m=f===void 0?function(_){return gl(_)?"styled.".concat(_):"Styled(".concat(Nm(_),")")}(e):f,h=t.displayName&&t.componentId?"".concat(nc(t.displayName),"-").concat(t.componentId):t.componentId||u,v=r&&o.attrs?o.attrs.concat(a).filter(Boolean):a,w=t.shouldForwardProp;if(r&&o.shouldForwardProp){var S=o.shouldForwardProp;if(t.shouldForwardProp){var j=t.shouldForwardProp;w=function(_,C){return S(_,C)&&j(_,C)}}else w=S}var p=new ig(n,h,r?o.componentStyle:void 0);function d(_,C){return function(k,E,R){var L=k.attrs,z=k.componentStyle,K=k.defaultProps,Ke=k.foldedComponentIds,it=k.styledComponentId,fn=k.target,Di=re.useContext(Os),Zn=ja(),Wt=k.shouldForwardProp||Zn.shouldForwardProp,I=function(Ne,lt,Ae){for(var Xe,qt=me(me({},lt),{className:void 0,theme:Ae}),Bi=0;Bi<Ne.length;Bi+=1){var eo=Wn(Xe=Ne[Bi])?Xe(qt):Xe;for(var xt in eo)qt[xt]=xt==="className"?Jt(qt[xt],eo[xt]):xt==="style"?me(me({},qt[xt]),eo[xt]):eo[xt]}return lt.className&&(qt.className=Jt(qt.className,lt.className)),qt}(L,E,tp(E,Di,K)||Hn),N=I.as||fn,A={};for(var $ in I)I[$]===void 0||$[0]==="$"||$==="as"||$==="theme"||($==="forwardedAs"?A.as=I.forwardedAs:Wt&&!Wt($,N)||(A[$]=I[$]));var X=function(Ne,lt){var Ae=ja(),Xe=Ne.generateAndInjectStyles(lt,Ae.styleSheet,Ae.stylis);return Xe}(z,I),vt=Jt(Ke,it);return X&&(vt+=" "+X),I.className&&(vt+=" "+I.className),A[gl(N)&&!np.has(N)?"class":"className"]=vt,A.ref=R,x.createElement(N,A)}(g,_,C)}d.displayName=m;var g=re.forwardRef(d);return g.attrs=v,g.componentStyle=p,g.displayName=m,g.shouldForwardProp=w,g.foldedComponentIds=r?Jt(o.foldedComponentIds,o.styledComponentId):"",g.styledComponentId=h,g.target=r?o.target:e,Object.defineProperty(g,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(_){this._foldedDefaultProps=r?function(C){for(var k=[],E=1;E<arguments.length;E++)k[E-1]=arguments[E];for(var R=0,L=k;R<L.length;R++)Ea(C,L[R],!0);return C}({},o.defaultProps,_):_}}),Rs(g,function(){return".".concat(g.styledComponentId)}),i&&sp(g,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),g}function uc(e,t){for(var n=[e[0]],r=0,o=t.length;r<o;r+=1)n.push(t[r],e[r+1]);return n}var cc=function(e){return Object.assign(e,{isCss:!0})};function mp(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];if(Wn(e)||Hr(e)){var r=e;return cc(Dt(uc($i,Vr([r],t,!0))))}var o=e;return t.length===0&&o.length===1&&typeof o[0]=="string"?Dt(o):cc(Dt(uc(o,t)))}function Pa(e,t,n){if(n===void 0&&(n=Hn),!t)throw Zr(1,t);var r=function(o){for(var i=[],l=1;l<arguments.length;l++)i[l-1]=arguments[l];return e(t,n,mp.apply(void 0,Vr([o],i,!1)))};return r.attrs=function(o){return Pa(e,t,me(me({},n),{attrs:Array.prototype.concat(n.attrs,o).filter(Boolean)}))},r.withConfig=function(o){return Pa(e,t,me(me({},n),o))},r}var gp=function(e){return Pa(lg,e)},y=gp;np.forEach(function(e){y[e]=gp(e)});var ag=function(){function e(t,n){this.rules=t,this.componentId=n,this.isStatic=hp(t),hi.registerId(this.componentId+1)}return e.prototype.createStyles=function(t,n,r,o){var i=o(Ca(Dt(this.rules,n,r,o)),""),l=this.componentId+t;r.insertRules(l,l,i)},e.prototype.removeStyles=function(t,n){n.clearRules(this.componentId+t)},e.prototype.renderStyles=function(t,n,r,o){t>2&&hi.registerId(this.componentId+t),this.removeStyles(t,r),this.createStyles(t,n,r,o)},e}();function sg(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];var r=mp.apply(void 0,Vr([e],t,!1)),o="sc-global-".concat(op(JSON.stringify(r))),i=new ag(r,o),l=function(s){var u=ja(),f=re.useContext(Os),m=re.useRef(u.styleSheet.allocateGSInstance(o)).current;return u.styleSheet.server&&a(m,s,u.styleSheet,f,u.stylis),re.useLayoutEffect(function(){if(!u.styleSheet.server)return a(m,s,u.styleSheet,f,u.stylis),function(){return i.removeStyles(m,u.styleSheet)}},[m,s,u.styleSheet,f,u.stylis]),null};function a(s,u,f,m,h){if(i.isStatic)i.renderStyles(s,Im,f,h);else{var v=me(me({},u),{theme:tp(u,m,l.defaultProps)});i.renderStyles(s,v,f,h)}}return re.memo(l)}const ug=y.label`
 color: #000;
  text-align: left;
  font-family: Roboto;
  font-size: 12px;
  font-style: normal;
  font-weight: 300;
  line-height: 12px;
  display: flex;
  align-items: center;
  gap: 4px;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  justify-content: start;
  width: 100%;
`,cg=y.input`
  width: ${({$size:e})=>`${e}px`||"12px"};
  height: ${({$size:e})=>`${e}px`||"12px"};
  cursor: pointer;
`;function Ia({text:e,size:t,...n}){return c.jsxs(ug,{children:[c.jsx(cg,{$size:t,type:"checkbox",...n}),c.jsx("span",{children:e})]})}function zs({margin:e,color:t,height:n}){return c.jsx("div",{style:{width:`calc(100% - ${e}px)`,backgroundColor:t,height:`${n}px`,margin:"0 auto"}})}const dg=y.div`
  transition: all 0.5s ease;
  height: 100svh;
  max-width: ${({$visible:e})=>e?"50%":"0px"};
  border-radius: 0px 5px 5px 0px;
  background: #FAFAFA;
  position: fixed;
  bottom: 0px;
  left: 0px;
`,fg=y.div`
  padding-top: 40px;
  width: 100%;
  height: 100%;
  overflow: auto;
`,pg=y.div`
  position: absolute;
  right: -30px;
  border-radius: 0px 5px 5px 0px;
  background: hsl(0, 8%, 97%);
  top: 50svh;
  display: flex;
  padding: 4px;
  cursor: pointer;
`,hg=y.h1`
  color: #000;
  font-family: Poppins;
  font-size: 30px;
  font-style: normal;
  font-weight: 600;
  text-align: center;
`,mg=y.div`
  padding: 16px 20px;
`,gg=y.p`
  color: #012126;
  font-family: Roboto;
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  padding-bottom: 16px;
`,yg=y.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`,vg=y.div`
  transition-duration: 0.5s;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  max-height: ${({$visible:e})=>e?"100px":"0px"};
  gap: 10px;
`,xg=y.img`
  transition-duration: 0.5s;
  rotate: ${({$visible:e})=>e?"0deg":"180deg"};
  cursor: pointer;
`,wg=y.div`
  display: flex;
  gap: 8px;
  align-items: center;
  padding-bottom: 10px;
`,_g=y.p`
  color: #000;
  font-family: Roboto;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
`;function Sg({setFilters:e}){const[t,n]=x.useState(!1),[r,o]=x.useState({}),i=({target:a},s)=>{const{name:u,checked:f}=a;e(m=>({...m,[s]:f?[...m[s]||[],u]:[...m[s]].filter(h=>h!==u)}))},l=a=>{o(s=>({...s,[a]:!s[a]}))};return c.jsxs(dg,{$visible:t,children:[c.jsxs(fg,{children:[c.jsx(hg,{children:"Filtrar"}),lm.map(({filterName:a,options:s,subFilters:u})=>c.jsxs("div",{children:[c.jsxs(mg,{children:[c.jsx(gg,{children:a}),c.jsxs(yg,{children:[s&&s.map(f=>c.jsx(Ia,{name:f,onClick:m=>i(m,a),text:f},f)),u&&u.map(f=>c.jsxs("div",{children:[c.jsxs(wg,{onClick:m=>l(m.target.innerText),children:[c.jsx(_g,{children:f.filterName}),c.jsx(xg,{src:tm,alt:"seta para baixo",onClick:()=>l(f.filterName),$visible:r[f.filterName]})]}),c.jsx(vg,{$visible:r[f.filterName],children:f.options.map(m=>c.jsx(Ia,{text:m.replace(/├â/g,"Ã")},m))},f.filterName)]},f.filterName))]})]}),c.jsx(zs,{color:"#eee",margin:16,height:2})]},a))]}),c.jsx(pg,{onClick:()=>n(!t),children:c.jsx("img",{src:nm,alt:"icone de filtro"})})]})}const Cg=y.header`
  padding: 8px 20px;
  display: flex;
  justify-content: space-between;
  width: 100%;
  align-items: center;
  background: #809CAA;
`,Eg=y.h1`
  color: #F9F8F8;
  text-align: center;
  font-family: Poppins;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  text-transform: uppercase;
`,kg=y.div`
  color: #809CAA;
  text-align: center;
  font-family: Poppins;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  padding: 3px;
  text-transform: uppercase;
  border-radius: 5px;
  background: #FDFFFD;
  margin: auto;
`,jg=y.div`
  display: flex;
  justify-content: center;
  margin: auto;
  align-items: center;
`;function Jn({title:e,routeBack:t,routeNext:n,children:r}){const o=Jr();return c.jsxs(Cg,{children:[c.jsx(Yh,{onClick:()=>o(t),size:20,fill:"#ffffff",cursor:"pointer",style:{visibility:t?"visible":"hidden"}}),c.jsx(Eg,{children:e}),r,c.jsx(Jh,{onClick:()=>o(n),style:{visibility:n?"visible":"hidden"},size:20,fill:"#ffffff",cursor:"pointer"})]})}function Pg(e){return te({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z"}}]})(e)}function Ig(e){return te({tag:"svg",attr:{viewBox:"0 0 640 512"},child:[{tag:"path",attr:{d:"M624 352h-16V243.9c0-12.7-5.1-24.9-14.1-33.9L494 110.1c-9-9-21.2-14.1-33.9-14.1H416V48c0-26.5-21.5-48-48-48H112C85.5 0 64 21.5 64 48v48H8c-4.4 0-8 3.6-8 8v16c0 4.4 3.6 8 8 8h272c4.4 0 8 3.6 8 8v16c0 4.4-3.6 8-8 8H40c-4.4 0-8 3.6-8 8v16c0 4.4 3.6 8 8 8h208c4.4 0 8 3.6 8 8v16c0 4.4-3.6 8-8 8H8c-4.4 0-8 3.6-8 8v16c0 4.4 3.6 8 8 8h208c4.4 0 8 3.6 8 8v16c0 4.4-3.6 8-8 8H64v128c0 53 43 96 96 96s96-43 96-96h128c0 53 43 96 96 96s96-43 96-96h48c8.8 0 16-7.2 16-16v-32c0-8.8-7.2-16-16-16zM160 464c-26.5 0-48-21.5-48-48s21.5-48 48-48 48 21.5 48 48-21.5 48-48 48zm320 0c-26.5 0-48-21.5-48-48s21.5-48 48-48 48 21.5 48 48-21.5 48-48 48zm80-208H416V144h44.1l99.9 99.9V256z"}}]})(e)}function Rg(e){return te({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M148 288h-40c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12zm108-12v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12zm96 0v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12zm-96 96v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12zm-96 0v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12zm192 0v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12zm96-260v352c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V112c0-26.5 21.5-48 48-48h48V12c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v52h128V12c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v52h48c26.5 0 48 21.5 48 48zm-48 346V160H48v298c0 3.3 2.7 6 6 6h340c3.3 0 6-2.7 6-6z"}}]})(e)}y.div`
  overflow: auto;
  height: 90vh;
`;y.p`
  display: block;
  color: black;
  text-align: center;
  font-family: Poppins;
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
`;const Og=y.main`
  padding: 8px 8px;
  gap: 8px;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(${({$imagesperview:e})=>e}, 1fr);
  grid-gap: 8px;
  justify-content: center;
  align-items: center;
`,zg=y.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  border-radius: 5px;
  border-left: 1px solid #ddd;
  border-right: 1px solid #ddd;
  border-bottom: 1px solid #ddd;
  cursor: pointer;
`,Ng=y.div`
  display: flex;
  justify-content: center;
  padding: 2px 1px;
  border-radius: 5px 5px 0px 0px;
  background: #fff;
  text-align: center;
  border: ${({$selected:e})=>e?"2px solid green":"1px solid #ddd;"};
  gap: 16px;
  width: 100%;
`,Ag=y.span`
  color: #323232;
  text-align: center;
  font-family: Roboto;
  font-size: 10px;
  font-style: normal;
  font-weight: 700;
`,Tg=y.h1`
  color: #000;
  font-family: Roboto;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
`,Lg=y.img`
  cursor: pointer;
  width: 100%;
  height: 100%;
  object-fit: cover;
  background-color: #809CAA;
`;function Fg({imagesPerView:e,filteredProducts:t,selectedProducts:n,setSelectedProducts:r}){const o="https://camo.githubusercontent.com/b7b7dca15c743879821e7cfc14e8034ecee3588e221de0a6f436423e304d95f5/68747470733a2f2f7a7562652e696f2f66696c65732f706f722d756d612d626f612d63617573612f33363664616462316461323032353338616531333332396261333464393030362d696d6167652e706e67",i=JSON.parse(localStorage.getItem("currentProductOrder"))||[],l=s=>{if(i[s.id])return;if(n.some(f=>f.id===s.id)){const f=n.filter(m=>m.id!==s.id);r(f);return}const u=[...n,s];r(u)},a=(s,u)=>{var h;const m=(u.findIndex(v=>v.image===s.target.src)+1)%u.length;s.target.src=((h=u[m])==null?void 0:h.image)||o};return x.useEffect(()=>{localStorage.setItem("selectedProducts",JSON.stringify(n))},[n]),c.jsx(Og,{$imagesperview:e,children:t.map((s,u)=>{var f,m;return c.jsxs(zg,{onClick:()=>l(s),children:[c.jsxs(Ng,{$selected:n.some(h=>h.id===s.id),children:[c.jsxs(Tg,{children:[c.jsx(Ag,{children:"R$"})," ",(f=t[u])==null?void 0:f.price.toFixed(2)]}),c.jsx(Pg,{size:20,fill:"green",style:{display:i[s==null?void 0:s.id]?"block":"none"}})]}),c.jsx(Lg,{src:((m=s.images[0])==null?void 0:m.image)||o,onError:h=>a(h,s.images)})]},u)})})}const Mg=y.div`
  overflow: auto;
  height: 90vh;
`;y.p`
  display: block;
  color: black;
  text-align: center;
  font-family: Poppins;
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
`;y.main`
  flex-grow: 1;
  padding: 8px 8px;
  gap: 8px;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(${({$imagesperview:e})=>e}, 1fr);
  grid-gap: 8px;
  justify-content: center;
`;y.div`
  display: flex;
  flex-direction: column;
  border: ${({$selected:e})=>e?"2px solid green":"1px solid #ddd;"};
  width: 100%;
  border-radius: 5px;
  cursor: pointer;
`;y.div`
  display: flex;
  justify-content: space-between;
  padding: 4px 4px;
  border-radius: 5px 5px 0px 0px;
  background: #D5D5D5;
  text-align: center;
  width: 100%;
`;y.span`
  color: #323232;
  text-align: center;
  font-family: Roboto;
  font-size: 10px;
  font-style: normal;
  font-weight: 700;
`;y.h1`
  color: #000;
  font-family: Roboto;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
`;y.img`
  cursor: pointer;
  width: 100%;
  height: 100%;
  object-fit: cover;
  background-color: #809CAA;
`;const $g=y.button`
  font-size: ${({$selected:e})=>e?"18px":"16px"};
  padding: 4px 6px;
  font-weight: ${({$selected:e})=>e?"bold":"normal"};
  cursor: pointer;
`,Dg=y.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 4px 20px;

`,Bg=y.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
`,bg=y.select`
  padding: 4px 8px;
  justify-content: center;
  align-items: center;
  gap: 4px; 
  border-radius: 2px;
  background: #809CAA;
  color: #FFF;
  text-align: center;
  font-family: Poppins;
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
`,Ug=y.button`
  display: flex;
  padding: 4px 8px;
  justify-content: center;
  gap: 10px;
  border-radius: 2px;
  background: #809CAA;
  color: #FFF;
  text-align: center;
  font-family: Poppins;
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: 14px; /* 140% */
  text-transform: uppercase;
  cursor: pointer;
`;function Vg(){const{setSeeAll:e}=x.useContext(Xr),{setCurrentProductOrder:t}=x.useContext(Ye),[n,r]=x.useState(2),[o,i]=x.useState(jt),[l,a]=x.useState(JSON.parse(localStorage.getItem("selectedProducts"))||[]),[s,u]=x.useState({Tipo:[],Marca:[],Gênero:[],Categorias:[]}),[f,m]=x.useState("Todos"),[h,v]=x.useState(jt),w=Array.from(new Set(o.map(C=>C.category_name))),S=[1,2,3,4],{Marca:j,Gênero:p,Categorias:d}=s;x.useEffect(()=>{const C=jt.filter(k=>{const E=k.images.length,R=j.length?j.includes(k.brand_name):!0,L=p.length?p.includes(k.group_name):!0;return(d.length?d.includes(k.category_name):!0)&&R&&L&&E});v(C)},[o,j,p,d]);const g=C=>{if(m(C.target.value),C.target.value==="Todos"){u(k=>({...k,Categorias:[]}));return}u(k=>({...k,Categorias:[C.target.value]}))},_=()=>{a([]),t({}),localStorage.setItem("selectedProducts",JSON.stringify([])),localStorage.setItem("currentProductOrder",JSON.stringify({}))};return x.useEffect(()=>{e(!1),jt.length===0&&i(jt)},[o,e]),c.jsxs(c.Fragment,{children:[c.jsx(Jn,{title:`Produtos Disponíveis (${h.length})`,routeBack:"/clients",routeNext:l.length&&"/purchase"}),c.jsxs(Dg,{children:[c.jsxs(bg,{name:"Categorias",value:f,onChange:g,children:[c.jsx("option",{children:"Todos"}),w.map(C=>c.jsx("option",{children:C},C))]}),c.jsx(Bg,{children:S.map(C=>c.jsx($g,{$selected:C===n,type:"button",onClick:()=>r(C),children:C},C))}),c.jsxs(Ug,{onClick:_,children:["Limpar",c.jsx(Wh,{size:12,fill:"#fff"})]})]}),c.jsxs(Mg,{children:[c.jsx(Fg,{imagesPerView:n,filteredProducts:h,selectedProducts:l,setSelectedProducts:a}),c.jsx(Sg,{setFilters:u})]})]})}const Hg=y.div`
  margin: 0px auto;
  max-width: 280px;
  width: 100%;
  border-radius: 8px;
  cursor: pointer;
  background: #F7F7F7;
   box-shadow: 0px 4px 4px -2px rgba(0, 0, 0, 0.10);
  &:hover {
    box-shadow: 0px 8px 8px -2px rgba(0, 0, 0, 0.25);
}
`,Wg=y.img`
  width: 100%;
  height: 100%;
  border-radius: 20px;
`;function qg({image:e,onClick:t}){return c.jsx(Hg,{onClick:t,children:c.jsx(Wg,{src:e,alt:e})})}const Gg=[{marca:"Columbia",url_imagem:"https://e-catalogos.net/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fcliente12.ebd657c1.jpg&w=640&q=75"},{marca:"Crocs",url_imagem:"https://e-catalogos.net/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fcliente10.8d53c3da.jpg&w=640&q=75"},{marca:"Dixie",url_imagem:"https://www.tailorbrands.com/wp-content/uploads/2020/07/mcdonalds-logo.jpg"},{marca:"Gangster",url_imagem:"https://hips.hearstapps.com/hmg-prod/images/nissan-brand-logo-1200x938-1594842850.jpg?crop=1.00xw:0.856xh;0.00173xw,0.0730xh&resize=980:*"},{marca:"Puma",url_imagem:"https://www.logolynx.com/images/logolynx/s_14/14973a38754f41223cc0eb0726b8ba8d.jpeg"},{marca:"Adidas",url_imagem:"https://e-catalogos.net/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fcliente3.9e363b81.jpg&w=640&q=75"}],Qg=y.h1`
  margin-top: 24px;
  color: #024650;
  text-align: center;
  font-family: Poppins;
  font-size: 24px;
  font-style: normal;
  font-weight: 500;
  text-transform: uppercase;
  
`,Yg=y.main`
  display: flex;
  gap: 8px;
  padding: 12px 0px;
  width: 100%;
  overflow: auto;
  display: grid;
  grid-template-columns: repeat(auto-fill, 250px);
  grid-gap: 20px;
  justify-content: center;
`,Kg=y.div`
  width: 100%;
  height: 100vh;
  overflow: auto;
`;function Xg(){const e=Jr(),t=()=>e("/purchase");return c.jsxs(Kg,{children:[c.jsx(Jn,{title:"Marcas",routeBack:"/clients",routeNext:"/purchase"}),c.jsx(Qg,{children:"Selecione uma marca"}),c.jsx(Yg,{children:Gg.map((n,r)=>c.jsx(qg,{image:n.url_imagem,onClick:()=>t()},r))})]})}const Jg=y.div`
  margin: 0px auto;
  padding: 8px;
  max-width: 280px;
  width: 100%;
  max-height: 150px;
  overflow: auto;
  border-radius: 8px;
  cursor: pointer;
  flex-shrink: 0;
  border: ${({$currentClient:e})=>e?"1px solid #12A1B8":"none"};
  background: #F7F7F7;
  box-shadow: 0px 4px 4px -2px rgba(0, 0, 0, 0.10);
  &:hover {
    box-shadow: 0px 4px 4px -2px rgba(0, 0, 0, 0.20);
}
`,Zg=y.div`
  margin-top: 4px;
`,e2=y.h1`
  color: #323232;
  font-family: Poppins;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
`,wo=y.p`
  color: #323232;
  font-family: Poppins;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
`,_o=y.span`
  color: #4B4B4B;
  font-family: Roboto;
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
`;function t2({clientName:e,cnpj:t,fantasyName:n,email:r,whatsapp:o,uf:i,onClick:l,currentClient:a}){return c.jsxs(Jg,{onClick:l,$currentClient:a===e,children:[c.jsx(e2,{children:e}),c.jsxs(Zg,{children:[c.jsxs(wo,{children:["CNPJ:"," ",c.jsxs(_o,{children:[t," ","(",i,")"]})]}),c.jsxs(wo,{children:["N.Fantasia:"," ",c.jsx(_o,{children:n})]}),c.jsxs(wo,{children:["E-mail:"," ",c.jsx(_o,{children:r})]}),c.jsxs(wo,{children:["Whatsapp:"," ",c.jsx(_o,{children:o})]})]})]})}function n2(e){return te({tag:"svg",attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M1014.64 969.04L703.71 656.207c57.952-69.408 92.88-158.704 92.88-256.208 0-220.912-179.088-400-400-400s-400 179.088-400 400 179.088 400 400 400c100.368 0 192.048-37.056 262.288-98.144l310.496 312.448c12.496 12.497 32.769 12.497 45.265 0 12.48-12.496 12.48-32.752 0-45.263zM396.59 736.527c-185.856 0-336.528-150.672-336.528-336.528S210.734 63.471 396.59 63.471c185.856 0 336.528 150.672 336.528 336.528S582.446 736.527 396.59 736.527z"}}]})(e)}const r2=y.div`
  padding: 12px 0;
  padding: 8px 12px;
  border-radius: 5px;
  background: #F5F5F5;
  max-width: 480px;
  width: 70%;
  display: flex;
  align-items: center;
  @media (min-width: 744px) {
    padding: 12px 16px;
  }
`,o2=y.input`
  width: 100%;
  background: #F5F5F5;
  color: #646464;
  font-family: Roboto;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  margin-left: 8px;
  @media (min-width: 744px) {
    font-size: 14px;
  }
`;function Ns({value:e,onChange:t,placeholder:n}){return c.jsxs(r2,{children:[c.jsx(n2,{size:16,fill:"#646464"}),c.jsx(o2,{placeholder:n||"Buscar",value:e,onChange:t})]})}const i2=y.div`
  position: fixed;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  z-index: 0;
  background-color: rgba(0,0,0,0.5);
`,l2=y.div`
  z-index: 1;
  width: 90%;
  margin: 10svh auto;
  position: relative;
`,a2=y.div`
  position: relative;
  padding: 8px 20px;
  border-radius: 3px 3px 0px 0px;
  background: #809CAA;

`,s2=y.h1`
  width: 60%;
  text-align: center;
  color: #FFF;
  margin: auto;
  font-family: Roboto;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  padding: 8px 0px;
`,u2=y.div`
  z-index: 1;
  background: #fff;
  padding: ${({$padding:e})=>e||"30"} 0px;
  display: flex;
  gap: 0px;
  align-items: ${({$alignItems:e})=>e||"center"};
  flex-direction: column;
  border-radius: 0px 0px 3px 3px;
`,c2=y.div`
  cursor: pointer;
  position: absolute;
  top: 4px;
  right: 4px;
`,d2=y.div`
  position: fixed;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  z-index: 0;
`;function dn({title:e,children:t,disable:n,alignItems:r,padding:o}){return c.jsxs(d2,{children:[c.jsxs(l2,{children:[c.jsxs(a2,{children:[c.jsx(c2,{onClick:n,children:c.jsx(qh,{size:24,fill:"#fff"})}),c.jsx(s2,{children:e})]}),c.jsx(u2,{$padding:o,$alignItems:r,children:t})]}),c.jsx(i2,{onClick:n})]})}const dc=[{nome:"Empresa A Ltda.",cnpj:"12.345.678/0001-90",uf:"SP",nomeFantasia:"A Tech",email:"contato@a-tech.com",whatsapp:"11 98765-4321"},{nome:"Empresa B S.A.",cnpj:"98.765.432/0001-21",uf:"RJ",nomeFantasia:"B Solutions",email:"contato@b-solutions.com",whatsapp:"21 98765-1234"},{nome:"Empresa C Ltda.",cnpj:"45.678.901/0001-32",uf:"MG",nomeFantasia:"C Innovations",email:"contato@c-innovations.com",whatsapp:"31 98765-5678"},{nome:"Empresa D S.A.",cnpj:"23.456.789/0001-43",uf:"RS",nomeFantasia:"D Technologies",email:"contato@d-tech.com",whatsapp:"51 98765-8765"},{nome:"Empresa E Ltda.",cnpj:"67.890.123/0001-54",uf:"SC",nomeFantasia:"E Solutions",email:"contato@e-solutions.com",whatsapp:"48 98765-4321"},{nome:"Empresa F S.A.",cnpj:"34.567.890/0001-65",uf:"BA",nomeFantasia:"F Innovate",email:"contato@f-innovate.com",whatsapp:"71 98765-1234"},{nome:"Empresa G Ltda.",cnpj:"56.789.012/0001-76",uf:"PR",nomeFantasia:"G Tech",email:"contato@g-tech.com",whatsapp:"41 98765-5678"},{nome:"Empresa H S.A.",cnpj:"78.901.234/0001-87",uf:"CE",nomeFantasia:"H Solutions",email:"contato@h-solutions.com",whatsapp:"85 98765-8765"},{nome:"Empresa I Ltda.",cnpj:"90.123.456/0001-98",uf:"GO",nomeFantasia:"I Innovations",email:"contato@i-innovations.com",whatsapp:"62 98765-4321"},{nome:"Empresa J S.A.",cnpj:"45.678.901/0001-09",uf:"PA",nomeFantasia:"J Technologies",email:"contato@j-tech.com",whatsapp:"91 98765-1234"},{nome:"Empresa K Ltda.",cnpj:"23.456.789/0001-10",uf:"MT",nomeFantasia:"K Solutions",email:"contato@k-solutions.com",whatsapp:"65 98765-5678"},{nome:"Empresa L S.A.",cnpj:"67.890.123/0001-21",uf:"AM",nomeFantasia:"L Innovate",email:"contato@l-innovate.com",whatsapp:"92 98765-8765"},{nome:"Empresa M Ltda.",cnpj:"34.567.890/0001-32",uf:"ES",nomeFantasia:"M Tech",email:"contato@m-tech.com",whatsapp:"27 98765-4321"},{nome:"Empresa N S.A.",cnpj:"56.789.012/0001-43",uf:"AL",nomeFantasia:"N Solutions",email:"contato@n-solutions.com",whatsapp:"82 98765-1234"},{nome:"Empresa O Ltda.",cnpj:"78.901.234/0001-54",uf:"PI",nomeFantasia:"O Innovations",email:"contato@o-innovations.com",whatsapp:"86 98765-5678"},{nome:"Empresa P S.A.",cnpj:"90.123.456/0001-65",uf:"PB",nomeFantasia:"P Tech",email:"contato@p-tech.com",whatsapp:"83 98765-8765"},{nome:"Empresa Q Ltda.",cnpj:"45.678.901/0001-76",uf:"SE",nomeFantasia:"Q Solutions",email:"contato@q-solutions.com",whatsapp:"79 98765-4321"},{nome:"Empresa R S.A.",cnpj:"23.456.789/0001-87",uf:"RO",nomeFantasia:"R Innovate",email:"contato@r-innovate.com",whatsapp:"69 98765-1234"},{nome:"Empresa S Ltda.",cnpj:"67.890.123/0001-98",uf:"TO",nomeFantasia:"S Tech",email:"contato@s-tech.com",whatsapp:"63 98765-5678"},{nome:"Empresa T S.A.",cnpj:"34.567.890/0001-09",uf:"AC",nomeFantasia:"T Solutions",email:"contato@t-solutions.com",whatsapp:"68 98765-8765"}],f2=y.div`
  width: 100%;
  height: 100vh;
  overflow: auto;
`,p2=y.div`
  margin: 0px auto;
  padding: 0 20px;
  max-width: 1280px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`,h2=y.div`
  width: 100%;
  height: 1px;
  border-radius: 5px;
  background: #EEE;
`,m2=y.main`
  display: flex;
  gap: 8px;
  padding: 12px 0px;
  width: 100%;
  overflow: auto;
  display: grid;
  grid-template-columns: repeat(auto-fill, 250px);
  grid-gap: 20px;
  justify-content: center;
`,g2=y.div`
  padding: 10px 5px;
  border-radius: 5px;
  background-color: #6F97AB;
  margin: 4px 0px;
  cursor: pointer;
`,y2=y.h1`
  color: #F9F8F8;
  text-align: center;
  font-family: Roboto;
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
`,v2=y.div`
  margin-top: 6px;
  padding: 5px;
  border-radius: 5px;
  background: #6F97AB;
  width: 60%;
  position: relative;
  
`,x2=y.h1`
  color: #EEE;
  text-align: center;
  font-family: Roboto;
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
`,w2=y.p`
  color: #FFF;
  font-family: Roboto;
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: 12px;
`,_2=y.div`
  position: absolute;
  right: 4px;
  top: 6px;
  cursor: pointer;
`,S2=y.div`
  padding: 12px 0px;
  display: flex;
  align-items: center;
  justify-content: center;
`;function C2(){const[e,t]=x.useState(dc),[n,r]=x.useState(""),[o,i]=x.useState(""),[l,a]=x.useState(""),[s,u]=x.useState(!1),[f,m]=x.useState(""),{setCurrentOrder:h}=x.useContext(Ye),v=["REPRESENTACAO","CENTRO OESTE","NORDESTE","SUL / SUDOESTE"],w=j=>{r(j),u(!0)},S=j=>{i(n),m(j),u(!1)};return x.useEffect(()=>{const j=dc.filter(p=>p.nome.toLowerCase().includes(l.toLowerCase()));t(j)},[l]),x.useEffect(()=>{const j=e.find(p=>p.nome===o);if(j){const{nome:p,cnpj:d,nomeFantasia:g}=j;h(_=>({..._,clientName:p,clientCNPJ:d,clientFantasyName:g}))}},[o,e,h]),c.jsxs(c.Fragment,{children:[c.jsx(Jn,{title:"Clientes",routeBack:"/",routeNext:o&&"/avaliableProducts"}),c.jsx(S2,{children:c.jsx(Ns,{value:l,onChange:j=>a(j.target.value)})}),c.jsx(h2,{}),c.jsxs(f2,{children:[c.jsxs(p2,{children:[f&&c.jsxs(v2,{children:[c.jsx(_2,{onClick:()=>u(!0),children:c.jsx(Gh,{size:24,fill:"#2f2e2e"})}),c.jsxs(x2,{children:["TABLA DE PREÇOS:"," ",c.jsx(w2,{children:f})]})]}),c.jsx(m2,{children:e.map(({nome:j,cnpj:p,uf:d,nomeFantasia:g,email:_,whatsapp:C})=>c.jsx(t2,{currentClient:o,onClick:()=>w(j),clientName:j,cnpj:p,uf:d,fantasyName:g,email:_,whatsapp:C},p))})]}),s&&c.jsx(dn,{title:"Escolha uma Tabela de Preços",disable:()=>u(!1),children:v.map((j,p)=>c.jsx(g2,{onClick:()=>S(j),children:c.jsx(y2,{children:j})},p))})]})]})}function E2(e){return te({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{fill:"none",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"32",d:"M320 367.79h76c55 0 100-29.21 100-83.6s-53-81.47-96-83.6c-8.89-85.06-71-136.8-144-136.8-69 0-113.44 45.79-128 91.2-60 5.7-112 43.88-112 106.4s54 106.4 120 106.4h56"}},{tag:"path",attr:{fill:"none",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"32",d:"M320 255.79l-64-64-64 64m64 192.42V207.79"}}]})(e)}const k2=y.label`
  color: #3C3C3C;
  text-align: center;
  font-family: Roboto;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  padding-bottom: 4px;
  display: flex;
  flex-direction: column;
  gap: 4px;
  justify-content: center;
  align-items: center;
`,j2=y.div`
  padding: 6px;
  border-radius: 3px;
  border-bottom: 1.5px solid #000;
  background: #F2F2F2;
  width: 80%;
  margin: 0 auto;
  text-align: center;
`,P2=y.p`
  color: #000;
  font-family: Roboto;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
`;function I2({title:e,content:t}){return c.jsxs(k2,{children:[e,c.jsx(j2,{children:c.jsx(P2,{children:t})})]})}const R2=y.input`
  width: ${({$size:e})=>`${e}px`||"24px"};
  height: ${({$size:e})=>`${e}px`||"24px"};
  border: 1px solid #809caa;
  background-color: #fff;
`,O2=y.label`
  color: #6A6A6A;
  font-family: Roboto;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  padding-left: 6px;
  display: flex;
  align-items: center;
  gap: ${({$gap:e})=>`${e}px`||"6px"};
`;y.div`
  
`;function Wr({size:e,label:t,gap:n,...r}){return c.jsxs(O2,{$gap:n,children:[c.jsx(R2,{$size:e,type:"radio",...r}),t]})}function z2(e){return te({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"g",attr:{id:"Circle_Plus"},child:[{tag:"g",attr:{},child:[{tag:"path",attr:{d:"M15,12.5H12.5V15a.5.5,0,0,1-1,0V12.5H9a.5.5,0,0,1,0-1h2.5V9a.5.5,0,0,1,1,0v2.5H15A.5.5,0,0,1,15,12.5Z"}},{tag:"path",attr:{d:"M12,21.932A9.934,9.934,0,1,1,21.932,12,9.944,9.944,0,0,1,12,21.932ZM12,3.065A8.934,8.934,0,1,0,20.932,12,8.944,8.944,0,0,0,12,3.065Z"}}]}]}]})(e)}const N2=[{name:"Morgan Sántos",phone:"(02) 4312 7528",email:"molestie.sodales@yahoo.com"},{name:"Sandra Andrade",phone:"(03) 6375 2847",email:"magna.malesuada@hotmail.com"},{name:"Nell de Azevedo",phone:"(05) 1161 7103",email:"nulla.donec.non@icloud.com"},{name:"Mikayla Matias",phone:"(08) 0362 0121",email:"eget.dictum.placerat@yahoo.com"},{name:"Germaine Correa",phone:"(04) 9225 0909",email:"senectus.et.netus@hotmail.com"},{name:"Phyllis Das Chagas",phone:"(09) 3011 4517",email:"justo.eu@google.com"},{name:"Quamar Braga",phone:"(04) 8577 3433",email:"netus.et@outlook.com"},{name:"Armando Barreto",phone:"(03) 7817 8520",email:"donec.non@outlook.com"},{name:"Cairo Fonseca",phone:"(05) 9805 4523",email:"nibh.quisque@protonmail.com"},{name:"Hector de Assis",phone:"(06) 2512 5917",email:"sagittis@google.com"}],A2=y.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  height: 70svh;
  position: relative;
`,T2=y.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  gap: 14px;
  padding-top: 12px;
`,L2=y.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding-top: 12px;
  margin: 0 auto;
  overflow: auto;
`,F2=y.button`
  margin: 20px auto;
  display: flex;
  padding: 10px 20px;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  background: #809CAA;
`,M2=y.p`
  color: #FFF;
  font-family: Roboto;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
`,$2=y.div`
  position: absolute;
  top: 14px;
  right: 4px;
`;function D2({disable:e}){const[t,n]=x.useState([]),[r,o]=x.useState(""),i=N2;return console.log(i),x.useEffect(()=>{const l=i.filter(({name:a})=>a.toLowerCase().includes(r.toLowerCase()));n(l)},[r]),c.jsx(dn,{title:"ENVIAR E-MAIL",disable:e,children:c.jsxs(A2,{children:[c.jsx(T2,{children:c.jsx(Ns,{placeholder:"Buscar / Adicionar",onChange:l=>o(l.target.value),value:r})}),c.jsx($2,{children:c.jsx(z2,{fill:"#809CAA",size:28})}),c.jsx(L2,{children:t.map(({name:l},a)=>c.jsx(Ia,{text:l,gap:6,size:18},a))}),c.jsx(F2,{children:c.jsx(M2,{onClick:e,children:"ENVIAR"})})]})})}const B2=y.div`
  display: flex;
  flex-direction: column;
  height: 100svh;
`,b2=y.p`
  color: #809CAA;
  text-align: center;
  font-family: Roboto;
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  width: 60%;
  margin: 14px auto 24px auto;
  border-bottom: 1px solid #809CAA;
`,U2=y.div`
  width: 100%;
  overflow: auto;
  height: auto;
`,V2=y.div`
  display: flex;
  justify-content: center;
  gap: 14px;
  padding: 14px 0;
`,fc=y.p`
  color: #6A6A6A;
  font-family: Roboto;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
`,H2=y.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 4px;
  padding: 8px;
`,W2=y.p`
  color: #809CAA;
  font-family: Roboto;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
`,q2=y.textarea`
  width: 80%;
  padding: 6px;
  border-radius: 3px;
  border: 0.5px solid #000;
  resize: none;
  color: #4D4D4D;
  font-family: Roboto;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  max-height: 40px;
`,G2=y.footer`
  background: #809CAA;
  width: 100%;
  padding: 4px 30px;
  display: flex;
  justify-content: space-between;
  margin-top: auto;
`,vl=y.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  gap: 4px;
`,xl=y.div`
  width: 30px;
  height: 30px;
  background-color: #fff;
  border-radius: 3px;
  display: flex;
  justify-content: center;
  align-items: center;

`,wl=y.p`
  color: #FFF;
  font-family: Poppins;
  font-size: 8px;
  font-style: normal;
  font-weight: 300;
`;function Q2(){const{currentOrder:e}=x.useContext(Ye),{orderNumber:t,clientName:n,clientCNPJ:r,totalValue:o,paymentCondition:i,installmentsValue:l}=e,{installments:a}=i,s=new Intl.NumberFormat("pt-BR",{style:"currency",currency:"BRL"}),u=["N° do Pedido","Data e hora","Razão Social","CNPJ","Valor Bruto","Desconto","Impostos","Parcelas + Valor total","Endereço de entrega"],f=[t,new Date().toLocaleString(),n,r,s.format(o),"R$ 0,00","R$ 0,00",c.jsxs("span",{children:[`${a}x ${s.format(l)}`," ","="," ",c.jsx("strong",{children:s.format(o)})]},"Total Value"),"Rua Teste, 123, Bairro Teste, Cidade Teste, Estado Teste, CEP Teste"],[m,h]=x.useState(!1);return c.jsxs(B2,{children:[c.jsx(Jn,{title:"Exportar",routeBack:"/order"}),c.jsx(b2,{children:"Resumo do pedido"}),c.jsx(U2,{children:u.map((v,w)=>c.jsx(I2,{title:v,content:f[w]},v))}),c.jsxs(V2,{children:[c.jsx(Wr,{label:c.jsx(fc,{children:"Pedido"}),gap:6,size:18,name:"orderType"}),c.jsx(Wr,{label:c.jsx(fc,{children:"Orçamento"}),gap:6,size:18,name:"orderType"})]}),c.jsxs(H2,{children:[c.jsx(W2,{children:"Observações"}),c.jsx(q2,{placeholder:"Digite sua observação aqui"})]}),c.jsxs(G2,{children:[c.jsxs(vl,{children:[c.jsx(xl,{children:c.jsx(Hh,{size:24,color:"#809CAA"})}),c.jsx(wl,{children:"Salvar Pedido"})]}),c.jsxs(vl,{onClick:()=>h(!0),children:[c.jsx(xl,{children:c.jsx(Xh,{size:24,color:"#809CAA"})}),c.jsx(wl,{children:"Enviar para o E-Mail"})]}),c.jsxs(vl,{children:[c.jsx(xl,{children:c.jsx(E2,{size:24,color:"#809CAA"})}),c.jsx(wl,{children:"Enviar para fábrica"})]})]}),m&&c.jsx(D2,{disable:()=>h(!1)})]})}function Y2(e){return te({tag:"svg",attr:{fill:"none",viewBox:"0 0 24 24",strokeWidth:"1.5",stroke:"currentColor","aria-hidden":"true"},child:[{tag:"path",attr:{strokeLinecap:"round",strokeLinejoin:"round",d:"M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z"}}]})(e)}const K2=y.div`
  display: flex;
  border-bottom: 1px solid #809CAA;
  justify-content: center;
  gap: 6px;
  width: 80%;
`,X2=y.p`
  color: #000;
  text-align: center;
  font-family: Roboto;
  font-size: 16px;
  font-style: normal;
  font-weight: 300;
`,J2=y.p`
  color: #2D4C5B;
  text-align: center;
  font-family: Roboto;
  font-size: 14px;
  font-style: normal;
  font-weight: 300;
`;function Z2({month:e,date:t}){return c.jsxs(K2,{children:[c.jsx(X2,{children:e}),c.jsxs(J2,{children:["(",t,")"]})]})}const ey=y.p`
  color: #809CAA;
  text-align: center;
  font-family: Roboto;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  padding: 1px 0px;
  width: 70%;
  margin: 16px auto;
  border-bottom: 1px solid #809CAA;
`,ty=y.div`
  height: 70svh;
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 0 20px;
`,ny=y.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;function ry({disable:e}){const{setCurrentOrder:t}=x.useContext(Ye),n=[{month:"Novembro",date:"30 a 30/23"},{month:"Dezembro",date:"1 a 31/23"},{month:"Janeiro",date:"1 a 31/24"},{month:"Fevereiro",date:"1 a 29/24"},{month:"Março",date:"1 a 31/24"},{month:"Abril",date:"1 a 30/24"}],r=o=>{t(i=>({...i,deadline:o}))};return c.jsx(dn,{title:"PRAZOS DE ENTREGA",disable:e,children:c.jsxs(ty,{children:[c.jsx(ey,{children:"MENSAL"}),c.jsx(ny,{children:n.map(({month:o,date:i},l)=>c.jsx(Wr,{onChange:()=>r(`${o} (${i})`),gap:10,size:20,label:c.jsx(Z2,{month:o,date:i})},l))})]})})}const oy=y.div`
  padding: 3px 6px;
  border-radius: 3px;
  background: #F7F7F7;
  width: ${({$width:e})=>e||"100%"};
  margin-top: 4px;
  flex-shrink: 0;
`,iy=y.p`
  color: #000;
  font-family: Roboto;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
`,ly=y.span`
  color: #000;
  font-family: Roboto;
  font-size: 12px;
  font-style: normal;
  font-weight: 300;
`;function ay({tag:e,content:t,width:n}){return c.jsx(oy,{$width:n,children:c.jsxs(iy,{children:[e,": ",c.jsx(ly,{children:t})]})})}const sy=y.div`
  display: flex;
  flex-direction: column;
`,pc=y.p`
  color: #535353;
  text-align: center;
  font-family: Roboto;
  font-size: 16px;
  font-style: normal;
  font-weight: 300;
  width: 200px;
`,uy=y.p`
  color: #000;
  text-align: center;
  font-family: Roboto;
  font-size: 16px;
  font-style: normal;
  font-weight: 300;
  border-bottom: 1px solid #809CAA;
  border-top: 1px solid #809CAA;
`;function cy({minValue:e,discount:t,method:n}){return c.jsxs(sy,{children:[c.jsx(pc,{children:n}),c.jsxs(uy,{children:["Mínimo: R$"," ",e]}),c.jsxs(pc,{children:["Desconto:"," ",t,"%"]})]})}const dy=y.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  padding: 20px;
  width: 100%;
  min-height: 70svh;
`;function fy({disable:e}){const t=[{method:"90/120/150",minValue:1e4,discount:7},{method:"120",minValue:0,discount:0},{method:"30/60/90/120",minValue:1e4,discount:7},{method:"30/60/90",minValue:2e4,discount:14},{method:"120/150",minValue:3e4,discount:21}],{setCurrentOrder:n}=x.useContext(Ye),r=o=>{n(i=>({...i,paymentCondition:o}))};return c.jsx(dn,{title:"PAGAMENTO",disable:e,children:c.jsx(dy,{children:t.map(({method:o,minValue:i,discount:l})=>c.jsx(Wr,{name:"payment",size:26,gap:16,onChange:()=>r({method:o,installments:o.split("/").length||1}),value:o,label:c.jsx(cy,{minValue:i,discount:l,method:o})},o))})})}const py=y.div`
  display: flex;
  margin: 8px;
  gap: 4px;
  justify-content: space-between;
  border-radius: 5px;
  box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.25);
`,hy=y.div`
  display: flex;
  align-items: center;
  gap: 4px;
  width: 100%;
`,my=y.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  align-items: flex-start;
  padding: 4px 0;
  width: 100%;
`,gy=y.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: end;
  padding: 0 4px;
  gap: 4px;
`,yy=y.div`
  width: 100%;
  max-width: 80px;
`,vy=y.img`
  object-fit: cover;
  width: 100%;
  height: 100%;
  border-radius: 5px;
`,sr=y.p`
  color: #000;
  font-family: Roboto;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
`,xy=y.span`
  color: #656262;
  text-align: center;
  font-family: Roboto;
  font-size: 12px;
  font-style: normal;
  font-weight: 300;
`,wy=y.div`
  width: 100%;
  max-width: 120px;
  padding: 4px;
  border-radius: 10px;
  background-color: ${({color:e})=>e};
`,_y=y.p`
  color: #FFF;
  text-align: center;
  font-family: Roboto;
  font-size: 8px;
  font-style: normal;
  font-weight: 500;
`,Sy=y.div`
  display: flex;
`,hc=y.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-items: center;
  
`,mc=y.div`
  width: 100%;
  color: #000;
  font-family: Roboto;
  text-align: center;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  padding: 1px 5px;
  border-right: 1px solid #D9D9D9;
  border-bottom: 1px solid #D9D9D9;
`,Cy=y.div`
  width: 100%;
  color: #fff;
  font-family: Roboto;
  text-align: center;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  padding: 1px 5px;
  border-right: 1px solid #D9D9D9;
  border-bottom: 1px solid #D9D9D9;
  background-color: #000;
`,Ey=y.div`
  width: 100%;
  color: #fff;
  font-family: Roboto;
  text-align: center;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  padding: 1px 5px;
  border-right: 1px solid #D9D9D9;
  border-bottom: 1px solid #D9D9D9;
  background-color: #809CAA;
`;function ky({imageSrc:e,reference:t,name:n,colors:r,sizes:o,totalPrice:i,quantity:l}){const a=new Intl.NumberFormat("pt-BR",{style:"currency",currency:"BRL"}),s=o.reduce((u,f)=>u+f[1]*l,0);return c.jsxs(py,{children:[c.jsxs(hy,{children:[c.jsx(yy,{children:c.jsx(vy,{src:e})}),c.jsxs(my,{children:[c.jsxs(sr,{children:["REF:"," ",c.jsx(xy,{children:t})]}),c.jsx(sr,{children:n}),r.map(({cod_hex:u,color_name:f})=>c.jsx(wy,{color:`#${u}`,children:c.jsx(_y,{children:f})},u))]})]}),c.jsxs(gy,{children:[c.jsxs(Sy,{children:[o.map(u=>c.jsxs(hc,{children:[c.jsx(mc,{children:u[0]}),c.jsx(mc,{children:u[1]*l})]},u)),c.jsxs(hc,{children:[c.jsx(Cy,{children:"TOTAL"}),c.jsx(Ey,{children:s})]})]}),c.jsxs(sr,{children:["Descontos: R$"," ",0]}),c.jsxs(sr,{children:["Impostos: R$"," ",0]}),c.jsxs(sr,{children:["Total"," ",a.format(i)]})]})]})}const jy=y.div`
  height: 60svh;
  width: 100%;
  padding: 12px 20px;
  display: flex;
  flex-direction: column;
  gap: 12px;
`;function Py({disable:e}){const{setCurrentOrder:t,currentOrder:n}=x.useContext(Ye),[r,o]=x.useState(""),[i,l]=x.useState([]),{shippment:a}=n;x.useEffect(()=>{const f=["TRANSFACIL","LOGEASY","NOVA TRANSPORTADORA","TRANSPORTADORA NOVA","CORREIOS","ROCKTRANSPORTE","TRANSPORTADORA ROCK"].filter(m=>m.toLowerCase().includes(r.toLowerCase()));l(f)},[r]);const s=u=>{t(f=>({...f,shippment:u}))};return c.jsxs(dn,{title:"TRANSPORTADORA",disable:e,children:[c.jsx(Ns,{value:r,onChange:u=>o(u.target.value)}),c.jsx(zs,{height:1,color:"#D9D9D9",margin:60}),c.jsx(jy,{children:i.map(u=>c.jsx(Wr,{onChange:()=>s(u),value:a,checked:a===u,gap:6,label:c.jsx("span",{children:u}),name:"shippment"},u))})]})}const Iy=y.div`
  height: 100svh;
  width: 100vw;
  display: flex;
  flex-direction: column;
`,Ry=y.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  margin-bottom: 8px;
`,Oy=y.div`
  overflow: auto;
  height: 1%;
  flex-grow: 1;
`,zy=y.div`
  display: flex;
  gap: 20px;
`;y.img`
  
`;const Ny=y.footer`
  height: 48px;
  width:  100%;
  background-color: #809CAA;
  padding: 5px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`,Ay=y.button`
  padding: 5px 10px;
  color: #809CAA;
  font-family: Roboto;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  background: #fff;
  border-radius: 5px;
  cursor: pointer;
`,_l=y.button`
  border-radius: 5px;
  background-color: #fff;
  padding: 2px 4px;
  cursor: pointer;
`;function Ty(){const[e,t]=x.useState([]),[n,r]=x.useState([]),[o,i]=x.useState(!1),[l,a]=x.useState(!1),[s,u]=x.useState(!1),{currentProductOrder:f,setCurrentOrder:m,currentOrder:h}=x.useContext(Ye),{productsCart:v,paymentCondition:w}=h,{method:S,installments:j}=w;x.useEffect(()=>{const k=Object.values(f),E=Object.keys(f),R=k.map((L,z)=>({...L,id:E[z]}));m(L=>({...L,orderDate:L.orderDate||new Date().toLocaleDateString(),orderNumber:L.orderNumber||Math.floor(Math.random()*2e6,1e6),productsCart:R,installmentsValue:R.reduce((z,{total:K})=>z+K,0)/j,totalValue:R.reduce((z,{total:K})=>z+K,0)}))},[j,f,m]),x.useEffect(()=>{const{clientName:_,clientCNPJ:C,shippment:k,deadline:E,orderNumber:R,orderDate:L,installmentsValue:z,totalValue:K}=h,Ke=new Intl.NumberFormat("pt-BR",{style:"currency",currency:"BRL"}),it=["Razão Social","CNPJ","N° do pedido","Data","Entrega","Transportadora","Condição de pagamento","Parcelas","Total"],fn=[_,C,R,L,E,k,S,`${j}x de ${Ke.format(z)}`,Ke.format(K)];t(it),r(fn)},[h,j,S,v]);const p=Jr(),d=["Parcelas","N° do pedido"],g=["Data","Total"];return c.jsxs(Iy,{children:[c.jsx(Jn,{title:"PEDIDO",routeBack:"/purchase"}),c.jsx(Ry,{children:e.map((_,C)=>c.jsx(ay,{tag:_,width:g.includes(_)&&"40%"||d.includes(_)&&"56%",content:n[C]},_))}),c.jsx(zs,{height:2,margin:60,color:"#E9E9E9"}),c.jsx(Oy,{children:v.map(({imageUrl:_,reference:C,name:k,colors:E,sizes:R,total:L,pack:z,quantity:K})=>c.jsx(ky,{imageSrc:_,reference:C,name:k,colors:E,sizes:Object.entries(R),totalPrice:L,pack:z,quantity:K},C))}),c.jsxs(Ny,{children:[c.jsxs(zy,{children:[c.jsx(_l,{onClick:()=>i(!0),children:c.jsx(Ig,{size:26,fill:"#809CAA"})}),c.jsx(_l,{onClick:()=>a(!0),children:c.jsx(Y2,{size:26,stroke:"#809CAA"})}),c.jsx(_l,{onClick:()=>u(!0),children:c.jsx(Rg,{size:26,fill:"#809CAA"})})]}),c.jsx(Ay,{onClick:()=>p("/export"),children:"Avançar"})]}),o&&c.jsx(Py,{disable:()=>i(!1)}),l&&c.jsx(fy,{disable:()=>a(!1)}),s&&c.jsx(ry,{disable:()=>u(!1)})]})}var Er=globalThis&&globalThis.__assign||function(){return Er=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e},Er.apply(this,arguments)},Ly=globalThis&&globalThis.__rest||function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]]);return n},gc=!1,yp=x.forwardRef(function(e,t){var n=e.style,r=Ly(e,["style"]),o=Fy();!gc&&(n!=null&&n.height)&&(gc=!0,console.warn("<Div100vh /> overrides the height property of the style prop"));var i=Er(Er({},n),{height:o?o+"px":"100vh"});return re.createElement("div",Er({ref:t,style:i},r))});yp.displayName="Div100vh";function Fy(){var e=x.useState(yc),t=e[0],n=e[1],r=My();return x.useEffect(function(){if(!r)return;function o(){var i=yc();n(i)}return window.addEventListener("resize",o),function(){return window.removeEventListener("resize",o)}},[r]),r?t:null}function yc(){return vp()?window.innerHeight:null}function My(){var e=x.useState(!1),t=e[0],n=e[1];return x.useEffect(function(){vp()&&n(!0)},[]),t}function vp(){return typeof window<"u"&&typeof document<"u"}const $y="/assets/minus-icon-747030bc.svg",Dy="/assets/plus-icon-44712014.svg",By=y.footer`
  padding: 10px 6px;
  display: flex;
  justify-content: center;
  gap: 12px;
  align-items: center;
`,vc=y.img`
  cursor: pointer;
  width: 36px;
  height: 36px;
`,by=y.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 16px;
`,Uy=y.div`
  border-radius: 5px;
  padding: 2px 8px;
`,Vy=y.p`
  color: #6F97AB;
  text-align: center;
  font-family: Roboto;
  font-size: 24px;
  font-weight: 400;
  line-height: 24px; /* 100% */
  font-style: normal;
  padding: 2px;
  border: 1px solid #6F97AB;
`,xc=y.div`
  border-radius: 5px;
  padding: 2px;
  color: #EEE;
  text-align: center;
  font-family: Poppins;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
`,wc=y.p`
  color: #000;
  text-align: center;
  font-family: Roboto;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`,_c=y.p`
  color: #323131;
  text-align: center;
  font-family: Roboto;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;function Hy(){const{currentProduct:e}=x.useContext(ot),{currentProductOrder:t,setCurrentProductOrder:n}=x.useContext(Ye),{id:r,name:o,reference:i,price:l,images:a,fixed_qtd:s,sizes:u,colors:f}=e||{},[m,h]=x.useState(0),[v,w]=x.useState(0),[S,j]=x.useState(0),p=()=>{if(!t[r])return n(g=>{var _;return{...g,[r]:{name:o,reference:i,imageUrl:(_=a[0])==null?void 0:_.image,sizes:u,quantity:1,pack:s,price:l,colors:f,total:l*s}}});n(g=>({...g,[r]:{...g[r],quantity:g[r].quantity+1,total:(g[r].quantity+1)*g[r].price*g[r].pack}}))},d=()=>{if(t[r]&&t[r].quantity!==0&&(n(g=>({...g,[r]:{...g[r],quantity:g[r].quantity-1,total:(g[r].quantity-1)*g[r].price*g[r].pack}})),t[r].quantity===1)){const{[r]:g,..._}=t;n(_)}};return x.useEffect(()=>{h(0),w(0),t[r]&&(h(t[r].quantity),w(t[r].quantity*l*(s||1)));const g=Object.values(t).reduce((_,C)=>_+C.total,0);j(g)},[t,l,r,s]),x.useEffect(()=>{localStorage.setItem("currentProductOrder",JSON.stringify(t))},[t]),c.jsxs(By,{children:[c.jsxs(xc,{children:[c.jsx(wc,{children:"Atual"}),c.jsxs(_c,{children:["R$"," ",v==null?void 0:v.toFixed(2)]})]}),c.jsx(Uy,{children:c.jsxs(by,{children:[c.jsx(vc,{src:$y,onClick:d}),c.jsx(Vy,{children:m||0}),c.jsx(vc,{src:Dy,onClick:p})]})}),c.jsxs(xc,{children:[c.jsx(wc,{children:"Acumulado"}),c.jsxs(_c,{children:["R$"," ",S==null?void 0:S.toFixed(2)]})]})]})}function Wy(e){return te({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M512 256A256 256 0 1 0 0 256a256 256 0 1 0 512 0zM271 135c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-87 87 87 87c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0L167 273c-9.4-9.4-9.4-24.6 0-33.9L271 135z"}}]})(e)}function qy(e){return te({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM241 377c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l87-87-87-87c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0L345 239c9.4 9.4 9.4 24.6 0 33.9L241 377z"}}]})(e)}function Gy({routeBack:e,routeNext:t}){const{orderProducts:n,currentProduct:r,setCurrentProductIndex:o}=x.useContext(ot),i=r==null?void 0:r.category_name,[l,a]=x.useState(0);x.useEffect(()=>{const h=n.filter(v=>v.category_name===i);a(h.length)},[i,n]);const s=Array.from(new Set(n.map(h=>h.category_name))),u=h=>n.findIndex(w=>w.category_name===h),f=()=>{const h=s.indexOf(i);if(h===s.length-1){const S=s[0],j=u(S);return o(j)}const v=s[h+1],w=u(v);o(w)},m=()=>{const h=s.indexOf(i);if(h===0){const S=s[s.length-1],j=u(S);return o(j)}const v=s[h-1],w=u(v);o(w)};return c.jsx(Jn,{routeBack:e,routeNext:t,children:c.jsxs(jg,{children:[c.jsx(Wy,{style:{marginRight:"4px"},size:20,fill:"#FFf",cursor:"pointer",onClick:m}),c.jsxs(kg,{children:["(",l,")"," ",i==null?void 0:i.replace(/├â/g,"Ã")]}),c.jsx(qy,{style:{marginLeft:"4px"},size:20,fill:"#FFF",cursor:"pointer",onClick:f})]})})}const Qy=y.p`
  color: #000;
  font-family: Roboto;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  padding: 8px 12px;
`,Yy=y.span`
  color: #000;
  font-family: Roboto;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
`,Ky=y.p`
  color: #000;
  font-family: Roboto;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  padding: 8px 12px;
  text-align: center;
  margin: 0 auto;
`,Xy=y.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  width: 100%;
   gap: 8px;
`,Jy=y.div`
  width: 45%;
  padding: 2px;
  background-color: ${({$color:e})=>`#${e}`};
  color: #fff;
  font-family: Roboto;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  text-align: center;
  border-radius: 8px;
 
`;function Zy(){const{currentProduct:e}=x.useContext(ot),{infoCard:t,setInfoCard:n}=x.useContext(Xr),{name:r,reference:o,brand_name:i,category_name:l,group_name:a,colors:s}=e||{},u=["Nome do produto","Referencia","Marca","Categoria","Genero"],f=[r,o,i,l,a];return t&&c.jsxs(dn,{padding:12,title:"Informações",disable:()=>n(!1),alignItems:"start",children:[c.jsx(Ky,{children:"Cores"}),s&&c.jsx(Xy,{children:s.map(({color_name:m,cod_hex:h})=>c.jsx(Jy,{$color:h,children:m},h))}),u.map((m,h)=>{var v;return c.jsxs(Qy,{children:[m,":"," ",c.jsx(Yy,{children:(v=f[h])==null?void 0:v.replace(/├â/g,"Ã")})]},h)})]})}y.div`
  position: absolute;
  z-index: 1;
  width: 100%;
  height: 100%;
  background: rgba(0,0,0,0.3);
  top: 0;
  left: 0;
`;y.div`
  display: ${({$enabled:e})=>e?"flex":"none"};
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
`;const ev=y.div`
  padding: 12px 16px;
  display: flex;
  flex-direction: column;
  border-radius: 5px;
  background: #fff;
  width: 90%;
  text-align: center;
  z-index: 2;
  font-family: Roboto;
  font-size: 18px;
  align-items: center;
`,tv=y.input`
  padding: 8px 12px;
  font-family: Roboto;
  font-size: 18px;
  background-color: #f0f0f0dc;
  width: 100%;
  margin: 12px 0;
`,nv=y.button`
  padding: 5px 10px;
  color: #FFF;
  text-align: center;
  font-family: Poppins;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  border-radius: 5px;
  background: #6F97AB;
  cursor: pointer;
`,rv=y.p`
  color: red;
  font-weight: 300;
  font-size: 12px;
  margin: 4px 0px;
`;function ov(){const[e,t]=x.useState(""),{setCurrentProductIndex:n,orderProducts:r}=x.useContext(ot),{errorRef:o,setErrorRef:i,setSearchCard:l,searchCard:a}=x.useContext(Xr),s=()=>{const u=r.find(m=>m.reference===e),f=r.indexOf(u);if(!u)return i(!0);n(f),l(!1)};return a&&c.jsx(dn,{title:"BUSCAR POR REF",disable:()=>l(!1),children:c.jsxs(ev,{children:[c.jsx(tv,{type:"text",placeholder:"00.00.000",onChange:u=>t(u.target.value)}),o&&c.jsx(rv,{children:"Referencia não encontrada"}),c.jsx(nv,{type:"submit",onClick:s,children:"Buscar"})]})})}function iv(){return c.jsxs(c.Fragment,{children:[c.jsx(Zy,{}),c.jsx(ov,{})]})}const lv="/assets/arrowLeft-fa71fa95.svg",av="/assets/arrowRight-f2fb19bb.svg",sv=y.div`
  flex: 0 0 100%; /* Garante que cada SlideItem ocupe 100% da largura do Slider */
  box-sizing: border-box;
`,uv=y.img`
  object-fit: contain;
  width: 100%;
  height: 100%;
`,cv=y.img`
  position: absolute;
  bottom: 40px;
  left: 20px;
  cursor: pointer;
`,dv=y.img`
  position: absolute;
  bottom: 40px;
  right: 20px;
  cursor: pointer;
`,fv=y.div`
  width: calc(100% - 40px);
  margin: 0 auto;
  height: 1px;
  background: #CCD0CF;
`,pv=y.div`
  position: relative;
  display: flex;
  overflow: hidden;
  width: 100%;
`,hv=y.div`
  display: flex;
  transition: transform 0.5s ease; 
  flex-grow: 1;
  position: relative;
  border-bottom: 3px solid #809CAA;
  height: 1%;
`;function mv({previewImage:e}){const{selectNextProduct:t,selectPreviousProduct:n,orderProducts:r}=x.useContext(ot),o="https://camo.githubusercontent.com/b7b7dca15c743879821e7cfc14e8034ecee3588e221de0a6f436423e304d95f5/68747470733a2f2f7a7562652e696f2f66696c65732f706f722d756d612d626f612d63617573612f33363664616462316461323032353338616531333332396261333464393030362d696d6167652e706e67",i=(a,s)=>{var m;const f=(s.findIndex(h=>h.image===a.target.src)+1)%s.length;a.target.src=((m=s[f])==null?void 0:m.image)||o},l=r.map(a=>a.images);return c.jsxs(hv,{children:[c.jsx(pv,{children:l.map((a,s)=>c.jsx(sv,{id:`image-${s}`,children:c.jsx(uv,{src:e||a[0].image,onError:u=>i(u,a)})},`${a}${s}`))}),c.jsx(cv,{src:lv,onClick:n}),c.jsx(dv,{src:av,onClick:t})]})}const gv=y.div`
  padding: 6px 0px;
`,yv=y.p`
  color: #024650;
  font-family: Roboto;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
`,vv=y.span`
  color: #001A1E;
  font-family: Roboto;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
`,xv=y.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  color: #024650;
  font-family: Roboto;
  font-size: 22px;
  font-style: normal;
  font-weight: 300;
  padding: 8px 20px;
`,wv=y.p`
  color: #024650;
  text-align: center;
  font-family: Roboto;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
`,_v=y.span`
  color: #001A1E;
  font-family: Roboto;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
`,Sv=y.p`
  color: #809CAA;
  font-family: Roboto;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  text-align: center;
  `;y.p`
  text-align: center;
  color: #024650;
  font-family: Roboto;
  font-size: 21px;
  font-style: normal;
  font-weight: 300;
`;function Cv(){const{currentProduct:e}=x.useContext(ot),t=e==null?void 0:e.reference,n=e==null?void 0:e.price,r=e==null?void 0:e.name;return c.jsxs(gv,{children:[c.jsxs(xv,{children:[c.jsxs(yv,{children:["REF:"," ",c.jsx(vv,{children:t})]}),c.jsxs(wv,{children:["R$"," ",c.jsx(_v,{children:n==null?void 0:n.toFixed(2)})]})]}),c.jsx(Sv,{children:r==null?void 0:r.replace(/├â/g,"Ã")})]})}const Ev="/assets/equal-icon-7dcc2cdb.svg",kv=y.div`
  position: relative;
  padding: 0px 10px;
  border-radius: 5px;
  background: #fff;
  color: #6f97ab;
  font-family: Roboto;
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
`,jv=y.div`
  display: flex;
  flex-direction: column;
  justify-content: end;
  position: relative;
`,Pv=y.div`
  position: absolute;
  font-size: 0px;
  top: -13px;
  right: -12px;
`,Iv=y.span`
  text-align: center;
  color: #fff;
  font-family: Roboto;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  position: absolute;
  top: -14px;
  width: 100%;
`;function Sc({size:e,isPack:t,quantity:n}){return c.jsxs(jv,{children:[t&&c.jsx(Iv,{children:"PACK"}),c.jsxs(kv,{children:[n,!t&&c.jsx(Pv,{children:c.jsxs("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",children:[c.jsx("circle",{cx:"12",cy:"12",r:"12",fill:"#fff",stroke:"#809CAB"}),c.jsx("text",{x:"50%",y:"50%",dominantBaseline:"middle",textAnchor:"middle",fill:"#809CAB",fontSize:14,children:e.toUpperCase()})]})})]})]})}const Rv=y.div`
  display: flex;
  justify-content: center;
  gap: 16px;
  align-items: center;
  padding-top: 16px;
  padding-bottom: 15px;
  background-color: #809CAB;
`,Ov=y.img`
  object-fit: contain;
  width: 18px;
  height: 11px;
`;function zv(){const{currentProduct:e}=x.useContext(ot),t=(e==null?void 0:e.sizes)||{},n=Object.keys(t),r=Object.values(t),o=r.reduce((i,l)=>l+i,0);return c.jsxs(Rv,{children:[n.map((i,l)=>c.jsx(Sc,{quantity:r[l],size:i},l)),c.jsx(Ov,{src:Ev,alt:"Icone de igual;"}),c.jsx(Sc,{isPack:!0,quantity:o})]})}const Nv="/assets/cart-icon-a076ef18.svg",Av="/assets/eye-icon-b07b8d1a.svg",Tv="/assets/info-icon-a7b6ddc0.svg",Lv="/assets/search-icon-b3be287d.svg",Fv=y.section`
  display: flex;
  justify-content: center;
  gap: 16px;
  align-items: center;
  padding: 4px 0px;
`,Mv=y.div`
  display: flex;
  justify-content: center;
  gap: 6px;
  align-items: center;
  
`,$v=y.img`
  padding: 1px;
  border: 1px solid #5DA0AD;
  width: 44px;
  height: 44px;
  object-fit: contain;
  cursor: pointer;
`,So=y.img`
  width: 34px;
  height: 34px;
  object-fit: contain;
  cursor: pointer;
`;function Dv({setPreviewImage:e}){const{currentProduct:t}=x.useContext(ot),{setInfoCard:n,setSearchCard:r,setSeeAll:o,seeAll:i,setErrorRef:l}=x.useContext(Xr),{currentProductOrder:a}=x.useContext(Ye),s=(t==null?void 0:t.images)||[],u=Jr(),f=()=>{r(!0),l(!1)},m=()=>{Object.keys(a).length&&u("/order")};return c.jsxs(c.Fragment,{children:[c.jsxs(Fv,{children:[c.jsx(So,{src:Tv,onClick:()=>n(!0)}),c.jsx(So,{src:Lv,onClick:f}),c.jsx(Mv,{children:s.map(({image:h},v)=>c.jsx($v,{onClick:w=>e(w.target.src),src:h},v))}),c.jsx(So,{src:Av,onClick:()=>o(!i)}),c.jsx(So,{src:Nv,onClick:m})]}),c.jsx(fv,{color:"#EEEEEE",margin:20,height:1})]})}const Bv=y.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
`;function bv(){const{currentProductIndex:e,setOrderProducts:t,setCurrentProduct:n}=x.useContext(ot),{currentProductOrder:r}=x.useContext(Ye),[o,i]=x.useState(!1);return x.useEffect(()=>{const a=(JSON.parse(localStorage.getItem("selectedProducts"))||[]).sort((s,u)=>s.category_name-u.category_name);t(a),n(a[0])},[n,t]),x.useEffect(()=>{i(!1)},[e]),c.jsxs(yp,{children:[c.jsxs(Bv,{children:[c.jsx(Gy,{routeBack:"/avaliableProducts",routeNext:Object.keys(r).length&&"/order"}),c.jsx(mv,{previewImage:o}),c.jsx(Dv,{setPreviewImage:i}),c.jsx(Cv,{}),c.jsx(Hy,{accumulatedRef:50,accumulatedPrice:500}),c.jsx(zv,{})]}),c.jsx(iv,{})]})}const Uv="/assets/logo-65009681.png",Vv=y.div`
  height: 100svh;
  width: 100svw;
  display: flex;
  justify-content: center;
  padding: 0px 20px;
`,Hv=y.main`
  width: 100%;
  height: 100svh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
`;function Wv({children:e}){return c.jsx(Vv,{children:c.jsx(Hv,{children:e})})}const xp=y.button`
  font-family: Poppins;
  font-weight: 500;
  cursor: pointer;
  text-transform: uppercase;
`,qv=y.div`
  margin-top: 18px;
  border-radius: 20px;
  background: #21C4E6;
  padding: 5px 80px;
  color: #FFF;
  font-size: 24px;
  transition-duration: 200ms;
  &:hover {
  color: #001A1E;  
}
`,Gv=y.div`
  display: flex;
  align-items: center;
  border-radius: 20px;
  color: #FFF;
  text-align: center;
  font-size: 24px;
  font-style: normal;
  padding: 4px 25px;
  background: #F00;
  margin-top: 18px;
  font-weight: 600;
  text-transform: uppercase;
  transition-duration: 200ms;
  &:hover {
  color: #001A1E;  
}
`;function Qv(){return c.jsx(xp,{children:c.jsx(qv,{children:"Login"})})}function Yv(){return c.jsx(xp,{children:c.jsxs(Gv,{children:[c.jsx(em,{style:{marginRight:"4px"},size:32}),"Tutorial App"]})})}const Kv=y.div`
  border: 1px solid;
  border-color: ${({$error:e})=>e?"red;":"black;"};
  padding: 4px 12px;
  background-color: #F9F8F8;
  border-radius: 10px;
  display: flex;
  align-items: center;
`,Xv=y.input`
  color: #4B4B4B;
  font-family: Roboto;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  vertical-align: center;
  background-color: #F9F8F8;
  width: 100%;
`,Jv=y.div`
  margin-right: 20px;
  vertical-align: center;
  display: flex;
`,Zv=y.label`
  margin: 0px 6px;
`,e4=y.p`
  color: #000;
  font-family: Roboto;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  margin-bottom: 4px;
  margin-left: 12px;
`;y.div`
  padding-right: 4px;
`;const t4=y.span`
  margin-left: 12px;
  color: red;
  font-weight: 300;
  font-size: 12px;
  margin-top: 4px;
`;function Sl({label:e,icon:t,placeholder:n,password:r,name:o,onChange:i,value:l,error:a}){const s={name:"O nome deve ter no mínimo 3 caracteres",login:"O login deve ter no mínimo 4 caracteres",password:"A senha deve ter no mínimo 6 caracteres"};return c.jsxs(Zv,{children:[c.jsx(e4,{children:e}),c.jsxs(Kv,{$error:a,children:[c.jsx(Jv,{children:c.jsx(t,{size:32,fill:a?"red":"#024650"})}),c.jsx(Xv,{value:l,onChange:i,name:o,type:r?"password":"text",placeholder:n})]}),c.jsx(t4,{children:a&&s[o]})]})}const n4=y.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 350px;
  @media (min-width: 730px) {
  max-width: 400px;
}
`,r4=y.div`
  padding-top: 24px;
  width: 100%;
`,o4=y.p`
  color: red;
  font-weight: 300;
  font-size: 12px;
  margin-top: 4px;
`;function i4(){const e=Jr(),[t,n]=x.useState({name:"",login:"",password:""}),[r,o]=x.useState(!1),[i,l]=x.useState(!1),[a,s]=x.useState(!1),[u,f]=x.useState(!1),m=(w,S)=>{if(w==="name"){const p=S.length<3;o(p)}if(w==="login"){const p=S.length<4;l(p)}if(w==="password"){const p=S.length<6;s(p)}},h=({target:{name:w,value:S}})=>{n(j=>({...j,[w]:S})),m(w,S)},v=w=>{if(w.preventDefault(),Object.values(t).some(S=>S===""))return f(!0);r||i||a||e("/clients")};return c.jsxs(n4,{onSubmit:v,children:[c.jsxs(r4,{children:[c.jsx(Sl,{onChange:h,error:r,name:"name",value:t.name,label:"Nome",icon:Qh,placeholder:"Seu nome"}),c.jsx(Sl,{onChange:h,error:i,name:"login",value:t.login,label:"Login",icon:Zh,placeholder:"Seu Login"}),c.jsx(Sl,{onChange:h,error:a,name:"password",value:t.password,password:!0,label:"Senha",icon:Kh,placeholder:"Sua senha"})]}),u&&c.jsx(o4,{children:"Preencha todos os valores!"}),c.jsx(Qv,{})]})}const l4=y.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
`,a4=y.img`
  max-width: 256px;
  max-height: 256px;
  width: 25vh;
  height: 25vh;
  cursor: pointer;
`;function s4(){return c.jsx(Wv,{children:c.jsxs(l4,{children:[c.jsx(a4,{src:Uv}),c.jsx(i4,{}),c.jsx(Yv,{})]})})}const u4=[{path:"/",component:s4},{path:"/clients",component:C2},{path:"/brands",component:Xg},{path:"/purchase",component:bv},{path:"/avaliableProducts",component:Vg},{path:"/order",component:Ty},{path:"/export",component:Q2}];function c4(){return c.jsx(bh,{children:c.jsx(Dh,{children:c.jsx(ya,{children:c.jsx(c.Fragment,{children:u4.map((e,t)=>c.jsx(ya,{path:e.path,element:c.jsx(e.component,{})},t))})})})})}const d4=sg`
   body {
    margin: 0;
    padding: 0;
    font-family: Roboto, Helvetica, Sans-Serif;
    height: 100%;
    overflow: hidden; /* para não aparecer barra de rolagem */
  }

  #root {
    width: 100%;
    height: 100%; /* 100% da altura da janela de visualização */
    overflow: hidden; /* para não aparecer barra de rolagem */
  }

  input:-webkit-autofill,
    input:-webkit-autofill:hover,
    input:-webkit-autofill:focus,
    input:-webkit-autofill:active{
      -webkit-box-shadow: 0 0 0 30px white inset !important;
    }

    button, select {
        border: none;
        background-color: transparent;
    }

    textarea:focus, input:focus {
      box-shadow: 0 0 0 0;
      outline: 0;
    }

    p, h1, span, a, label, button, input, textarea {
      margin: 0;
    }

    input {
      border: none;
      margin: 0;
      padding: 0;
    }
    
    * {
      box-sizing: border-box;
    }
    
`;Cl.createRoot(document.getElementById("root")).render(c.jsx(re.StrictMode,{children:c.jsx(Q1,{children:c.jsx(Y1,{children:c.jsxs(K1,{children:[c.jsx(d4,{}),c.jsx(c4,{})]})})})}));
