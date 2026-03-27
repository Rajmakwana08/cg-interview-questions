(function(){const re=document.createElement("link").relList;if(re&&re.supports&&re.supports("modulepreload"))return;for(const N of document.querySelectorAll('link[rel="modulepreload"]'))m(N);new MutationObserver(N=>{for(const J of N)if(J.type==="childList")for(const he of J.addedNodes)he.tagName==="LINK"&&he.rel==="modulepreload"&&m(he)}).observe(document,{childList:!0,subtree:!0});function W(N){const J={};return N.integrity&&(J.integrity=N.integrity),N.referrerPolicy&&(J.referrerPolicy=N.referrerPolicy),N.crossOrigin==="use-credentials"?J.credentials="include":N.crossOrigin==="anonymous"?J.credentials="omit":J.credentials="same-origin",J}function m(N){if(N.ep)return;N.ep=!0;const J=W(N);fetch(N.href,J)}})();var ao={exports:{}},vi={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var yd;function F0(){if(yd)return vi;yd=1;var O=Symbol.for("react.transitional.element"),re=Symbol.for("react.fragment");function W(m,N,J){var he=null;if(J!==void 0&&(he=""+J),N.key!==void 0&&(he=""+N.key),"key"in N){J={};for(var Ne in N)Ne!=="key"&&(J[Ne]=N[Ne])}else J=N;return N=J.ref,{$$typeof:O,type:m,key:he,ref:N!==void 0?N:null,props:J}}return vi.Fragment=re,vi.jsx=W,vi.jsxs=W,vi}var hd;function J0(){return hd||(hd=1,ao.exports=F0()),ao.exports}var Be=J0(),io={exports:{}},L={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var md;function I0(){if(md)return L;md=1;var O=Symbol.for("react.transitional.element"),re=Symbol.for("react.portal"),W=Symbol.for("react.fragment"),m=Symbol.for("react.strict_mode"),N=Symbol.for("react.profiler"),J=Symbol.for("react.consumer"),he=Symbol.for("react.context"),Ne=Symbol.for("react.forward_ref"),z=Symbol.for("react.suspense"),T=Symbol.for("react.memo"),k=Symbol.for("react.lazy"),w=Symbol.for("react.activity"),fe=Symbol.iterator;function Je(s){return s===null||typeof s!="object"?null:(s=fe&&s[fe]||s["@@iterator"],typeof s=="function"?s:null)}var Ge={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},we=Object.assign,Mt={};function Ie(s,E,A){this.props=s,this.context=E,this.refs=Mt,this.updater=A||Ge}Ie.prototype.isReactComponent={},Ie.prototype.setState=function(s,E){if(typeof s!="object"&&typeof s!="function"&&s!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,s,E,"setState")},Ie.prototype.forceUpdate=function(s){this.updater.enqueueForceUpdate(this,s,"forceUpdate")};function Jt(){}Jt.prototype=Ie.prototype;function ze(s,E,A){this.props=s,this.context=E,this.refs=Mt,this.updater=A||Ge}var ut=ze.prototype=new Jt;ut.constructor=ze,we(ut,Ie.prototype),ut.isPureReactComponent=!0;var Et=Array.isArray;function He(){}var Q={H:null,A:null,T:null,S:null},qe=Object.prototype.hasOwnProperty;function Tt(s,E,A){var D=A.ref;return{$$typeof:O,type:s,key:E,ref:D!==void 0?D:null,props:A}}function Yl(s,E){return Tt(s.type,E,s.props)}function bt(s){return typeof s=="object"&&s!==null&&s.$$typeof===O}function Ye(s){var E={"=":"=0",":":"=2"};return"$"+s.replace(/[=:]/g,function(A){return E[A]})}var Sl=/\/+/g;function Rt(s,E){return typeof s=="object"&&s!==null&&s.key!=null?Ye(""+s.key):E.toString(36)}function pt(s){switch(s.status){case"fulfilled":return s.value;case"rejected":throw s.reason;default:switch(typeof s.status=="string"?s.then(He,He):(s.status="pending",s.then(function(E){s.status==="pending"&&(s.status="fulfilled",s.value=E)},function(E){s.status==="pending"&&(s.status="rejected",s.reason=E)})),s.status){case"fulfilled":return s.value;case"rejected":throw s.reason}}throw s}function v(s,E,A,D,B){var q=typeof s;(q==="undefined"||q==="boolean")&&(s=null);var P=!1;if(s===null)P=!0;else switch(q){case"bigint":case"string":case"number":P=!0;break;case"object":switch(s.$$typeof){case O:case re:P=!0;break;case k:return P=s._init,v(P(s._payload),E,A,D,B)}}if(P)return B=B(s),P=D===""?"."+Rt(s,0):D,Et(B)?(A="",P!=null&&(A=P.replace(Sl,"$&/")+"/"),v(B,E,A,"",function(Ca){return Ca})):B!=null&&(bt(B)&&(B=Yl(B,A+(B.key==null||s&&s.key===B.key?"":(""+B.key).replace(Sl,"$&/")+"/")+P)),E.push(B)),1;P=0;var Ue=D===""?".":D+":";if(Et(s))for(var me=0;me<s.length;me++)D=s[me],q=Ue+Rt(D,me),P+=v(D,E,A,q,B);else if(me=Je(s),typeof me=="function")for(s=me.call(s),me=0;!(D=s.next()).done;)D=D.value,q=Ue+Rt(D,me++),P+=v(D,E,A,q,B);else if(q==="object"){if(typeof s.then=="function")return v(pt(s),E,A,D,B);throw E=String(s),Error("Objects are not valid as a React child (found: "+(E==="[object Object]"?"object with keys {"+Object.keys(s).join(", ")+"}":E)+"). If you meant to render a collection of children, use an array instead.")}return P}function b(s,E,A){if(s==null)return s;var D=[],B=0;return v(s,D,"","",function(q){return E.call(A,q,B++)}),D}function U(s){if(s._status===-1){var E=s._result;E=E(),E.then(function(A){(s._status===0||s._status===-1)&&(s._status=1,s._result=A)},function(A){(s._status===0||s._status===-1)&&(s._status=2,s._result=A)}),s._status===-1&&(s._status=0,s._result=E)}if(s._status===1)return s._result.default;throw s._result}var te=typeof reportError=="function"?reportError:function(s){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var E=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof s=="object"&&s!==null&&typeof s.message=="string"?String(s.message):String(s),error:s});if(!window.dispatchEvent(E))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",s);return}console.error(s)},ne={map:b,forEach:function(s,E,A){b(s,function(){E.apply(this,arguments)},A)},count:function(s){var E=0;return b(s,function(){E++}),E},toArray:function(s){return b(s,function(E){return E})||[]},only:function(s){if(!bt(s))throw Error("React.Children.only expected to receive a single React element child.");return s}};return L.Activity=w,L.Children=ne,L.Component=Ie,L.Fragment=W,L.Profiler=N,L.PureComponent=ze,L.StrictMode=m,L.Suspense=z,L.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=Q,L.__COMPILER_RUNTIME={__proto__:null,c:function(s){return Q.H.useMemoCache(s)}},L.cache=function(s){return function(){return s.apply(null,arguments)}},L.cacheSignal=function(){return null},L.cloneElement=function(s,E,A){if(s==null)throw Error("The argument must be a React element, but you passed "+s+".");var D=we({},s.props),B=s.key;if(E!=null)for(q in E.key!==void 0&&(B=""+E.key),E)!qe.call(E,q)||q==="key"||q==="__self"||q==="__source"||q==="ref"&&E.ref===void 0||(D[q]=E[q]);var q=arguments.length-2;if(q===1)D.children=A;else if(1<q){for(var P=Array(q),Ue=0;Ue<q;Ue++)P[Ue]=arguments[Ue+2];D.children=P}return Tt(s.type,B,D)},L.createContext=function(s){return s={$$typeof:he,_currentValue:s,_currentValue2:s,_threadCount:0,Provider:null,Consumer:null},s.Provider=s,s.Consumer={$$typeof:J,_context:s},s},L.createElement=function(s,E,A){var D,B={},q=null;if(E!=null)for(D in E.key!==void 0&&(q=""+E.key),E)qe.call(E,D)&&D!=="key"&&D!=="__self"&&D!=="__source"&&(B[D]=E[D]);var P=arguments.length-2;if(P===1)B.children=A;else if(1<P){for(var Ue=Array(P),me=0;me<P;me++)Ue[me]=arguments[me+2];B.children=Ue}if(s&&s.defaultProps)for(D in P=s.defaultProps,P)B[D]===void 0&&(B[D]=P[D]);return Tt(s,q,B)},L.createRef=function(){return{current:null}},L.forwardRef=function(s){return{$$typeof:Ne,render:s}},L.isValidElement=bt,L.lazy=function(s){return{$$typeof:k,_payload:{_status:-1,_result:s},_init:U}},L.memo=function(s,E){return{$$typeof:T,type:s,compare:E===void 0?null:E}},L.startTransition=function(s){var E=Q.T,A={};Q.T=A;try{var D=s(),B=Q.S;B!==null&&B(A,D),typeof D=="object"&&D!==null&&typeof D.then=="function"&&D.then(He,te)}catch(q){te(q)}finally{E!==null&&A.types!==null&&(E.types=A.types),Q.T=E}},L.unstable_useCacheRefresh=function(){return Q.H.useCacheRefresh()},L.use=function(s){return Q.H.use(s)},L.useActionState=function(s,E,A){return Q.H.useActionState(s,E,A)},L.useCallback=function(s,E){return Q.H.useCallback(s,E)},L.useContext=function(s){return Q.H.useContext(s)},L.useDebugValue=function(){},L.useDeferredValue=function(s,E){return Q.H.useDeferredValue(s,E)},L.useEffect=function(s,E){return Q.H.useEffect(s,E)},L.useEffectEvent=function(s){return Q.H.useEffectEvent(s)},L.useId=function(){return Q.H.useId()},L.useImperativeHandle=function(s,E,A){return Q.H.useImperativeHandle(s,E,A)},L.useInsertionEffect=function(s,E){return Q.H.useInsertionEffect(s,E)},L.useLayoutEffect=function(s,E){return Q.H.useLayoutEffect(s,E)},L.useMemo=function(s,E){return Q.H.useMemo(s,E)},L.useOptimistic=function(s,E){return Q.H.useOptimistic(s,E)},L.useReducer=function(s,E,A){return Q.H.useReducer(s,E,A)},L.useRef=function(s){return Q.H.useRef(s)},L.useState=function(s){return Q.H.useState(s)},L.useSyncExternalStore=function(s,E,A){return Q.H.useSyncExternalStore(s,E,A)},L.useTransition=function(){return Q.H.useTransition()},L.version="19.2.4",L}var gd;function fo(){return gd||(gd=1,io.exports=I0()),io.exports}var bd=fo(),no={exports:{}},xi={},uo={exports:{}},co={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var pd;function W0(){return pd||(pd=1,(function(O){function re(v,b){var U=v.length;v.push(b);e:for(;0<U;){var te=U-1>>>1,ne=v[te];if(0<N(ne,b))v[te]=b,v[U]=ne,U=te;else break e}}function W(v){return v.length===0?null:v[0]}function m(v){if(v.length===0)return null;var b=v[0],U=v.pop();if(U!==b){v[0]=U;e:for(var te=0,ne=v.length,s=ne>>>1;te<s;){var E=2*(te+1)-1,A=v[E],D=E+1,B=v[D];if(0>N(A,U))D<ne&&0>N(B,A)?(v[te]=B,v[D]=U,te=D):(v[te]=A,v[E]=U,te=E);else if(D<ne&&0>N(B,U))v[te]=B,v[D]=U,te=D;else break e}}return b}function N(v,b){var U=v.sortIndex-b.sortIndex;return U!==0?U:v.id-b.id}if(O.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var J=performance;O.unstable_now=function(){return J.now()}}else{var he=Date,Ne=he.now();O.unstable_now=function(){return he.now()-Ne}}var z=[],T=[],k=1,w=null,fe=3,Je=!1,Ge=!1,we=!1,Mt=!1,Ie=typeof setTimeout=="function"?setTimeout:null,Jt=typeof clearTimeout=="function"?clearTimeout:null,ze=typeof setImmediate<"u"?setImmediate:null;function ut(v){for(var b=W(T);b!==null;){if(b.callback===null)m(T);else if(b.startTime<=v)m(T),b.sortIndex=b.expirationTime,re(z,b);else break;b=W(T)}}function Et(v){if(we=!1,ut(v),!Ge)if(W(z)!==null)Ge=!0,He||(He=!0,Ye());else{var b=W(T);b!==null&&pt(Et,b.startTime-v)}}var He=!1,Q=-1,qe=5,Tt=-1;function Yl(){return Mt?!0:!(O.unstable_now()-Tt<qe)}function bt(){if(Mt=!1,He){var v=O.unstable_now();Tt=v;var b=!0;try{e:{Ge=!1,we&&(we=!1,Jt(Q),Q=-1),Je=!0;var U=fe;try{t:{for(ut(v),w=W(z);w!==null&&!(w.expirationTime>v&&Yl());){var te=w.callback;if(typeof te=="function"){w.callback=null,fe=w.priorityLevel;var ne=te(w.expirationTime<=v);if(v=O.unstable_now(),typeof ne=="function"){w.callback=ne,ut(v),b=!0;break t}w===W(z)&&m(z),ut(v)}else m(z);w=W(z)}if(w!==null)b=!0;else{var s=W(T);s!==null&&pt(Et,s.startTime-v),b=!1}}break e}finally{w=null,fe=U,Je=!1}b=void 0}}finally{b?Ye():He=!1}}}var Ye;if(typeof ze=="function")Ye=function(){ze(bt)};else if(typeof MessageChannel<"u"){var Sl=new MessageChannel,Rt=Sl.port2;Sl.port1.onmessage=bt,Ye=function(){Rt.postMessage(null)}}else Ye=function(){Ie(bt,0)};function pt(v,b){Q=Ie(function(){v(O.unstable_now())},b)}O.unstable_IdlePriority=5,O.unstable_ImmediatePriority=1,O.unstable_LowPriority=4,O.unstable_NormalPriority=3,O.unstable_Profiling=null,O.unstable_UserBlockingPriority=2,O.unstable_cancelCallback=function(v){v.callback=null},O.unstable_forceFrameRate=function(v){0>v||125<v?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):qe=0<v?Math.floor(1e3/v):5},O.unstable_getCurrentPriorityLevel=function(){return fe},O.unstable_next=function(v){switch(fe){case 1:case 2:case 3:var b=3;break;default:b=fe}var U=fe;fe=b;try{return v()}finally{fe=U}},O.unstable_requestPaint=function(){Mt=!0},O.unstable_runWithPriority=function(v,b){switch(v){case 1:case 2:case 3:case 4:case 5:break;default:v=3}var U=fe;fe=v;try{return b()}finally{fe=U}},O.unstable_scheduleCallback=function(v,b,U){var te=O.unstable_now();switch(typeof U=="object"&&U!==null?(U=U.delay,U=typeof U=="number"&&0<U?te+U:te):U=te,v){case 1:var ne=-1;break;case 2:ne=250;break;case 5:ne=1073741823;break;case 4:ne=1e4;break;default:ne=5e3}return ne=U+ne,v={id:k++,callback:b,priorityLevel:v,startTime:U,expirationTime:ne,sortIndex:-1},U>te?(v.sortIndex=U,re(T,v),W(z)===null&&v===W(T)&&(we?(Jt(Q),Q=-1):we=!0,pt(Et,U-te))):(v.sortIndex=ne,re(z,v),Ge||Je||(Ge=!0,He||(He=!0,Ye()))),v},O.unstable_shouldYield=Yl,O.unstable_wrapCallback=function(v){var b=fe;return function(){var U=fe;fe=b;try{return v.apply(this,arguments)}finally{fe=U}}}})(co)),co}var vd;function k0(){return vd||(vd=1,uo.exports=W0()),uo.exports}var oo={exports:{}},_e={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var xd;function P0(){if(xd)return _e;xd=1;var O=fo();function re(z){var T="https://react.dev/errors/"+z;if(1<arguments.length){T+="?args[]="+encodeURIComponent(arguments[1]);for(var k=2;k<arguments.length;k++)T+="&args[]="+encodeURIComponent(arguments[k])}return"Minified React error #"+z+"; visit "+T+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function W(){}var m={d:{f:W,r:function(){throw Error(re(522))},D:W,C:W,L:W,m:W,X:W,S:W,M:W},p:0,findDOMNode:null},N=Symbol.for("react.portal");function J(z,T,k){var w=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:N,key:w==null?null:""+w,children:z,containerInfo:T,implementation:k}}var he=O.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function Ne(z,T){if(z==="font")return"";if(typeof T=="string")return T==="use-credentials"?T:""}return _e.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=m,_e.createPortal=function(z,T){var k=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!T||T.nodeType!==1&&T.nodeType!==9&&T.nodeType!==11)throw Error(re(299));return J(z,T,null,k)},_e.flushSync=function(z){var T=he.T,k=m.p;try{if(he.T=null,m.p=2,z)return z()}finally{he.T=T,m.p=k,m.d.f()}},_e.preconnect=function(z,T){typeof z=="string"&&(T?(T=T.crossOrigin,T=typeof T=="string"?T==="use-credentials"?T:"":void 0):T=null,m.d.C(z,T))},_e.prefetchDNS=function(z){typeof z=="string"&&m.d.D(z)},_e.preinit=function(z,T){if(typeof z=="string"&&T&&typeof T.as=="string"){var k=T.as,w=Ne(k,T.crossOrigin),fe=typeof T.integrity=="string"?T.integrity:void 0,Je=typeof T.fetchPriority=="string"?T.fetchPriority:void 0;k==="style"?m.d.S(z,typeof T.precedence=="string"?T.precedence:void 0,{crossOrigin:w,integrity:fe,fetchPriority:Je}):k==="script"&&m.d.X(z,{crossOrigin:w,integrity:fe,fetchPriority:Je,nonce:typeof T.nonce=="string"?T.nonce:void 0})}},_e.preinitModule=function(z,T){if(typeof z=="string")if(typeof T=="object"&&T!==null){if(T.as==null||T.as==="script"){var k=Ne(T.as,T.crossOrigin);m.d.M(z,{crossOrigin:k,integrity:typeof T.integrity=="string"?T.integrity:void 0,nonce:typeof T.nonce=="string"?T.nonce:void 0})}}else T==null&&m.d.M(z)},_e.preload=function(z,T){if(typeof z=="string"&&typeof T=="object"&&T!==null&&typeof T.as=="string"){var k=T.as,w=Ne(k,T.crossOrigin);m.d.L(z,k,{crossOrigin:w,integrity:typeof T.integrity=="string"?T.integrity:void 0,nonce:typeof T.nonce=="string"?T.nonce:void 0,type:typeof T.type=="string"?T.type:void 0,fetchPriority:typeof T.fetchPriority=="string"?T.fetchPriority:void 0,referrerPolicy:typeof T.referrerPolicy=="string"?T.referrerPolicy:void 0,imageSrcSet:typeof T.imageSrcSet=="string"?T.imageSrcSet:void 0,imageSizes:typeof T.imageSizes=="string"?T.imageSizes:void 0,media:typeof T.media=="string"?T.media:void 0})}},_e.preloadModule=function(z,T){if(typeof z=="string")if(T){var k=Ne(T.as,T.crossOrigin);m.d.m(z,{as:typeof T.as=="string"&&T.as!=="script"?T.as:void 0,crossOrigin:k,integrity:typeof T.integrity=="string"?T.integrity:void 0})}else m.d.m(z)},_e.requestFormReset=function(z){m.d.r(z)},_e.unstable_batchedUpdates=function(z,T){return z(T)},_e.useFormState=function(z,T,k){return he.H.useFormState(z,T,k)},_e.useFormStatus=function(){return he.H.useHostTransitionStatus()},_e.version="19.2.4",_e}var Sd;function $0(){if(Sd)return oo.exports;Sd=1;function O(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(O)}catch(re){console.error(re)}}return O(),oo.exports=P0(),oo.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ed;function eh(){if(Ed)return xi;Ed=1;var O=k0(),re=fo(),W=$0();function m(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var l=2;l<arguments.length;l++)t+="&args[]="+encodeURIComponent(arguments[l])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function N(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function J(e){var t=e,l=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(l=t.return),e=t.return;while(e)}return t.tag===3?l:null}function he(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Ne(e){if(e.tag===31){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function z(e){if(J(e)!==e)throw Error(m(188))}function T(e){var t=e.alternate;if(!t){if(t=J(e),t===null)throw Error(m(188));return t!==e?null:e}for(var l=e,a=t;;){var i=l.return;if(i===null)break;var n=i.alternate;if(n===null){if(a=i.return,a!==null){l=a;continue}break}if(i.child===n.child){for(n=i.child;n;){if(n===l)return z(i),e;if(n===a)return z(i),t;n=n.sibling}throw Error(m(188))}if(l.return!==a.return)l=i,a=n;else{for(var u=!1,c=i.child;c;){if(c===l){u=!0,l=i,a=n;break}if(c===a){u=!0,a=i,l=n;break}c=c.sibling}if(!u){for(c=n.child;c;){if(c===l){u=!0,l=n,a=i;break}if(c===a){u=!0,a=n,l=i;break}c=c.sibling}if(!u)throw Error(m(189))}}if(l.alternate!==a)throw Error(m(190))}if(l.tag!==3)throw Error(m(188));return l.stateNode.current===l?e:t}function k(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=k(e),t!==null)return t;e=e.sibling}return null}var w=Object.assign,fe=Symbol.for("react.element"),Je=Symbol.for("react.transitional.element"),Ge=Symbol.for("react.portal"),we=Symbol.for("react.fragment"),Mt=Symbol.for("react.strict_mode"),Ie=Symbol.for("react.profiler"),Jt=Symbol.for("react.consumer"),ze=Symbol.for("react.context"),ut=Symbol.for("react.forward_ref"),Et=Symbol.for("react.suspense"),He=Symbol.for("react.suspense_list"),Q=Symbol.for("react.memo"),qe=Symbol.for("react.lazy"),Tt=Symbol.for("react.activity"),Yl=Symbol.for("react.memo_cache_sentinel"),bt=Symbol.iterator;function Ye(e){return e===null||typeof e!="object"?null:(e=bt&&e[bt]||e["@@iterator"],typeof e=="function"?e:null)}var Sl=Symbol.for("react.client.reference");function Rt(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===Sl?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case we:return"Fragment";case Ie:return"Profiler";case Mt:return"StrictMode";case Et:return"Suspense";case He:return"SuspenseList";case Tt:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case Ge:return"Portal";case ze:return e.displayName||"Context";case Jt:return(e._context.displayName||"Context")+".Consumer";case ut:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Q:return t=e.displayName||null,t!==null?t:Rt(e.type)||"Memo";case qe:t=e._payload,e=e._init;try{return Rt(e(t))}catch{}}return null}var pt=Array.isArray,v=re.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,b=W.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,U={pending:!1,data:null,method:null,action:null},te=[],ne=-1;function s(e){return{current:e}}function E(e){0>ne||(e.current=te[ne],te[ne]=null,ne--)}function A(e,t){ne++,te[ne]=e.current,e.current=t}var D=s(null),B=s(null),q=s(null),P=s(null);function Ue(e,t){switch(A(q,t),A(B,e),A(D,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?Br(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=Br(t),e=Gr(t,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}E(D),A(D,e)}function me(){E(D),E(B),E(q)}function Ca(e){e.memoizedState!==null&&A(P,e);var t=D.current,l=Gr(t,e.type);t!==l&&(A(B,e),A(D,l))}function Si(e){B.current===e&&(E(D),E(B)),P.current===e&&(E(P),hi._currentValue=U)}var qn,so;function El(e){if(qn===void 0)try{throw Error()}catch(l){var t=l.stack.trim().match(/\n( *(at )?)/);qn=t&&t[1]||"",so=-1<l.stack.indexOf(`
    at`)?" (<anonymous>)":-1<l.stack.indexOf("@")?"@unknown:0:0":""}return`
`+qn+e+so}var Yn=!1;function Vn(e,t){if(!e||Yn)return"";Yn=!0;var l=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var a={DetermineComponentFrameRoot:function(){try{if(t){var S=function(){throw Error()};if(Object.defineProperty(S.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(S,[])}catch(g){var h=g}Reflect.construct(e,[],S)}else{try{S.call()}catch(g){h=g}e.call(S.prototype)}}else{try{throw Error()}catch(g){h=g}(S=e())&&typeof S.catch=="function"&&S.catch(function(){})}}catch(g){if(g&&h&&typeof g.stack=="string")return[g.stack,h.stack]}return[null,null]}};a.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var i=Object.getOwnPropertyDescriptor(a.DetermineComponentFrameRoot,"name");i&&i.configurable&&Object.defineProperty(a.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var n=a.DetermineComponentFrameRoot(),u=n[0],c=n[1];if(u&&c){var o=u.split(`
`),y=c.split(`
`);for(i=a=0;a<o.length&&!o[a].includes("DetermineComponentFrameRoot");)a++;for(;i<y.length&&!y[i].includes("DetermineComponentFrameRoot");)i++;if(a===o.length||i===y.length)for(a=o.length-1,i=y.length-1;1<=a&&0<=i&&o[a]!==y[i];)i--;for(;1<=a&&0<=i;a--,i--)if(o[a]!==y[i]){if(a!==1||i!==1)do if(a--,i--,0>i||o[a]!==y[i]){var p=`
`+o[a].replace(" at new "," at ");return e.displayName&&p.includes("<anonymous>")&&(p=p.replace("<anonymous>",e.displayName)),p}while(1<=a&&0<=i);break}}}finally{Yn=!1,Error.prepareStackTrace=l}return(l=e?e.displayName||e.name:"")?El(l):""}function Ad(e,t){switch(e.tag){case 26:case 27:case 5:return El(e.type);case 16:return El("Lazy");case 13:return e.child!==t&&t!==null?El("Suspense Fallback"):El("Suspense");case 19:return El("SuspenseList");case 0:case 15:return Vn(e.type,!1);case 11:return Vn(e.type.render,!1);case 1:return Vn(e.type,!0);case 31:return El("Activity");default:return""}}function ro(e){try{var t="",l=null;do t+=Ad(e,l),l=e,e=e.return;while(e);return t}catch(a){return`
Error generating stack: `+a.message+`
`+a.stack}}var jn=Object.prototype.hasOwnProperty,Xn=O.unstable_scheduleCallback,Qn=O.unstable_cancelCallback,Cd=O.unstable_shouldYield,Od=O.unstable_requestPaint,We=O.unstable_now,Dd=O.unstable_getCurrentPriorityLevel,yo=O.unstable_ImmediatePriority,ho=O.unstable_UserBlockingPriority,Ei=O.unstable_NormalPriority,Md=O.unstable_LowPriority,mo=O.unstable_IdlePriority,Rd=O.log,zd=O.unstable_setDisableYieldValue,Oa=null,ke=null;function It(e){if(typeof Rd=="function"&&zd(e),ke&&typeof ke.setStrictMode=="function")try{ke.setStrictMode(Oa,e)}catch{}}var Pe=Math.clz32?Math.clz32:wd,_d=Math.log,Nd=Math.LN2;function wd(e){return e>>>=0,e===0?32:31-(_d(e)/Nd|0)|0}var Ti=256,bi=262144,Ai=4194304;function Tl(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function Ci(e,t,l){var a=e.pendingLanes;if(a===0)return 0;var i=0,n=e.suspendedLanes,u=e.pingedLanes;e=e.warmLanes;var c=a&134217727;return c!==0?(a=c&~n,a!==0?i=Tl(a):(u&=c,u!==0?i=Tl(u):l||(l=c&~e,l!==0&&(i=Tl(l))))):(c=a&~n,c!==0?i=Tl(c):u!==0?i=Tl(u):l||(l=a&~e,l!==0&&(i=Tl(l)))),i===0?0:t!==0&&t!==i&&(t&n)===0&&(n=i&-i,l=t&-t,n>=l||n===32&&(l&4194048)!==0)?t:i}function Da(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function Ud(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function go(){var e=Ai;return Ai<<=1,(Ai&62914560)===0&&(Ai=4194304),e}function Zn(e){for(var t=[],l=0;31>l;l++)t.push(e);return t}function Ma(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function Ld(e,t,l,a,i,n){var u=e.pendingLanes;e.pendingLanes=l,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=l,e.entangledLanes&=l,e.errorRecoveryDisabledLanes&=l,e.shellSuspendCounter=0;var c=e.entanglements,o=e.expirationTimes,y=e.hiddenUpdates;for(l=u&~l;0<l;){var p=31-Pe(l),S=1<<p;c[p]=0,o[p]=-1;var h=y[p];if(h!==null)for(y[p]=null,p=0;p<h.length;p++){var g=h[p];g!==null&&(g.lane&=-536870913)}l&=~S}a!==0&&po(e,a,0),n!==0&&i===0&&e.tag!==0&&(e.suspendedLanes|=n&~(u&~t))}function po(e,t,l){e.pendingLanes|=t,e.suspendedLanes&=~t;var a=31-Pe(t);e.entangledLanes|=t,e.entanglements[a]=e.entanglements[a]|1073741824|l&261930}function vo(e,t){var l=e.entangledLanes|=t;for(e=e.entanglements;l;){var a=31-Pe(l),i=1<<a;i&t|e[a]&t&&(e[a]|=t),l&=~i}}function xo(e,t){var l=t&-t;return l=(l&42)!==0?1:Kn(l),(l&(e.suspendedLanes|t))!==0?0:l}function Kn(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function Fn(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function So(){var e=b.p;return e!==0?e:(e=window.event,e===void 0?32:ud(e.type))}function Eo(e,t){var l=b.p;try{return b.p=e,t()}finally{b.p=l}}var Wt=Math.random().toString(36).slice(2),Ce="__reactFiber$"+Wt,Ve="__reactProps$"+Wt,Vl="__reactContainer$"+Wt,Jn="__reactEvents$"+Wt,Bd="__reactListeners$"+Wt,Gd="__reactHandles$"+Wt,To="__reactResources$"+Wt,Ra="__reactMarker$"+Wt;function In(e){delete e[Ce],delete e[Ve],delete e[Jn],delete e[Bd],delete e[Gd]}function jl(e){var t=e[Ce];if(t)return t;for(var l=e.parentNode;l;){if(t=l[Vl]||l[Ce]){if(l=t.alternate,t.child!==null||l!==null&&l.child!==null)for(e=Qr(e);e!==null;){if(l=e[Ce])return l;e=Qr(e)}return t}e=l,l=e.parentNode}return null}function Xl(e){if(e=e[Ce]||e[Vl]){var t=e.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return e}return null}function za(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(m(33))}function Ql(e){var t=e[To];return t||(t=e[To]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function be(e){e[Ra]=!0}var bo=new Set,Ao={};function bl(e,t){Zl(e,t),Zl(e+"Capture",t)}function Zl(e,t){for(Ao[e]=t,e=0;e<t.length;e++)bo.add(t[e])}var Hd=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Co={},Oo={};function qd(e){return jn.call(Oo,e)?!0:jn.call(Co,e)?!1:Hd.test(e)?Oo[e]=!0:(Co[e]=!0,!1)}function Oi(e,t,l){if(qd(t))if(l===null)e.removeAttribute(t);else{switch(typeof l){case"undefined":case"function":case"symbol":e.removeAttribute(t);return;case"boolean":var a=t.toLowerCase().slice(0,5);if(a!=="data-"&&a!=="aria-"){e.removeAttribute(t);return}}e.setAttribute(t,""+l)}}function Di(e,t,l){if(l===null)e.removeAttribute(t);else{switch(typeof l){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttribute(t,""+l)}}function zt(e,t,l,a){if(a===null)e.removeAttribute(l);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(l);return}e.setAttributeNS(t,l,""+a)}}function ct(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Do(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Yd(e,t,l){var a=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var i=a.get,n=a.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(u){l=""+u,n.call(this,u)}}),Object.defineProperty(e,t,{enumerable:a.enumerable}),{getValue:function(){return l},setValue:function(u){l=""+u},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Wn(e){if(!e._valueTracker){var t=Do(e)?"checked":"value";e._valueTracker=Yd(e,t,""+e[t])}}function Mo(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var l=t.getValue(),a="";return e&&(a=Do(e)?e.checked?"true":"false":e.value),e=a,e!==l?(t.setValue(e),!0):!1}function Mi(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var Vd=/[\n"\\]/g;function ot(e){return e.replace(Vd,function(t){return"\\"+t.charCodeAt(0).toString(16)+" "})}function kn(e,t,l,a,i,n,u,c){e.name="",u!=null&&typeof u!="function"&&typeof u!="symbol"&&typeof u!="boolean"?e.type=u:e.removeAttribute("type"),t!=null?u==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+ct(t)):e.value!==""+ct(t)&&(e.value=""+ct(t)):u!=="submit"&&u!=="reset"||e.removeAttribute("value"),t!=null?Pn(e,u,ct(t)):l!=null?Pn(e,u,ct(l)):a!=null&&e.removeAttribute("value"),i==null&&n!=null&&(e.defaultChecked=!!n),i!=null&&(e.checked=i&&typeof i!="function"&&typeof i!="symbol"),c!=null&&typeof c!="function"&&typeof c!="symbol"&&typeof c!="boolean"?e.name=""+ct(c):e.removeAttribute("name")}function Ro(e,t,l,a,i,n,u,c){if(n!=null&&typeof n!="function"&&typeof n!="symbol"&&typeof n!="boolean"&&(e.type=n),t!=null||l!=null){if(!(n!=="submit"&&n!=="reset"||t!=null)){Wn(e);return}l=l!=null?""+ct(l):"",t=t!=null?""+ct(t):l,c||t===e.value||(e.value=t),e.defaultValue=t}a=a??i,a=typeof a!="function"&&typeof a!="symbol"&&!!a,e.checked=c?e.checked:!!a,e.defaultChecked=!!a,u!=null&&typeof u!="function"&&typeof u!="symbol"&&typeof u!="boolean"&&(e.name=u),Wn(e)}function Pn(e,t,l){t==="number"&&Mi(e.ownerDocument)===e||e.defaultValue===""+l||(e.defaultValue=""+l)}function Kl(e,t,l,a){if(e=e.options,t){t={};for(var i=0;i<l.length;i++)t["$"+l[i]]=!0;for(l=0;l<e.length;l++)i=t.hasOwnProperty("$"+e[l].value),e[l].selected!==i&&(e[l].selected=i),i&&a&&(e[l].defaultSelected=!0)}else{for(l=""+ct(l),t=null,i=0;i<e.length;i++){if(e[i].value===l){e[i].selected=!0,a&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function zo(e,t,l){if(t!=null&&(t=""+ct(t),t!==e.value&&(e.value=t),l==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=l!=null?""+ct(l):""}function _o(e,t,l,a){if(t==null){if(a!=null){if(l!=null)throw Error(m(92));if(pt(a)){if(1<a.length)throw Error(m(93));a=a[0]}l=a}l==null&&(l=""),t=l}l=ct(t),e.defaultValue=l,a=e.textContent,a===l&&a!==""&&a!==null&&(e.value=a),Wn(e)}function Fl(e,t){if(t){var l=e.firstChild;if(l&&l===e.lastChild&&l.nodeType===3){l.nodeValue=t;return}}e.textContent=t}var jd=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function No(e,t,l){var a=t.indexOf("--")===0;l==null||typeof l=="boolean"||l===""?a?e.setProperty(t,""):t==="float"?e.cssFloat="":e[t]="":a?e.setProperty(t,l):typeof l!="number"||l===0||jd.has(t)?t==="float"?e.cssFloat=l:e[t]=(""+l).trim():e[t]=l+"px"}function wo(e,t,l){if(t!=null&&typeof t!="object")throw Error(m(62));if(e=e.style,l!=null){for(var a in l)!l.hasOwnProperty(a)||t!=null&&t.hasOwnProperty(a)||(a.indexOf("--")===0?e.setProperty(a,""):a==="float"?e.cssFloat="":e[a]="");for(var i in t)a=t[i],t.hasOwnProperty(i)&&l[i]!==a&&No(e,i,a)}else for(var n in t)t.hasOwnProperty(n)&&No(e,n,t[n])}function $n(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Xd=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Qd=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Ri(e){return Qd.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function _t(){}var eu=null;function tu(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Jl=null,Il=null;function Uo(e){var t=Xl(e);if(t&&(e=t.stateNode)){var l=e[Ve]||null;e:switch(e=t.stateNode,t.type){case"input":if(kn(e,l.value,l.defaultValue,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name),t=l.name,l.type==="radio"&&t!=null){for(l=e;l.parentNode;)l=l.parentNode;for(l=l.querySelectorAll('input[name="'+ot(""+t)+'"][type="radio"]'),t=0;t<l.length;t++){var a=l[t];if(a!==e&&a.form===e.form){var i=a[Ve]||null;if(!i)throw Error(m(90));kn(a,i.value,i.defaultValue,i.defaultValue,i.checked,i.defaultChecked,i.type,i.name)}}for(t=0;t<l.length;t++)a=l[t],a.form===e.form&&Mo(a)}break e;case"textarea":zo(e,l.value,l.defaultValue);break e;case"select":t=l.value,t!=null&&Kl(e,!!l.multiple,t,!1)}}}var lu=!1;function Lo(e,t,l){if(lu)return e(t,l);lu=!0;try{var a=e(t);return a}finally{if(lu=!1,(Jl!==null||Il!==null)&&(pn(),Jl&&(t=Jl,e=Il,Il=Jl=null,Uo(t),e)))for(t=0;t<e.length;t++)Uo(e[t])}}function _a(e,t){var l=e.stateNode;if(l===null)return null;var a=l[Ve]||null;if(a===null)return null;l=a[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(a=!a.disabled)||(e=e.type,a=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!a;break e;default:e=!1}if(e)return null;if(l&&typeof l!="function")throw Error(m(231,t,typeof l));return l}var Nt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),au=!1;if(Nt)try{var Na={};Object.defineProperty(Na,"passive",{get:function(){au=!0}}),window.addEventListener("test",Na,Na),window.removeEventListener("test",Na,Na)}catch{au=!1}var kt=null,iu=null,zi=null;function Bo(){if(zi)return zi;var e,t=iu,l=t.length,a,i="value"in kt?kt.value:kt.textContent,n=i.length;for(e=0;e<l&&t[e]===i[e];e++);var u=l-e;for(a=1;a<=u&&t[l-a]===i[n-a];a++);return zi=i.slice(e,1<a?1-a:void 0)}function _i(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Ni(){return!0}function Go(){return!1}function je(e){function t(l,a,i,n,u){this._reactName=l,this._targetInst=i,this.type=a,this.nativeEvent=n,this.target=u,this.currentTarget=null;for(var c in e)e.hasOwnProperty(c)&&(l=e[c],this[c]=l?l(n):n[c]);return this.isDefaultPrevented=(n.defaultPrevented!=null?n.defaultPrevented:n.returnValue===!1)?Ni:Go,this.isPropagationStopped=Go,this}return w(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var l=this.nativeEvent;l&&(l.preventDefault?l.preventDefault():typeof l.returnValue!="unknown"&&(l.returnValue=!1),this.isDefaultPrevented=Ni)},stopPropagation:function(){var l=this.nativeEvent;l&&(l.stopPropagation?l.stopPropagation():typeof l.cancelBubble!="unknown"&&(l.cancelBubble=!0),this.isPropagationStopped=Ni)},persist:function(){},isPersistent:Ni}),t}var Al={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},wi=je(Al),wa=w({},Al,{view:0,detail:0}),Zd=je(wa),nu,uu,Ua,Ui=w({},wa,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ou,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Ua&&(Ua&&e.type==="mousemove"?(nu=e.screenX-Ua.screenX,uu=e.screenY-Ua.screenY):uu=nu=0,Ua=e),nu)},movementY:function(e){return"movementY"in e?e.movementY:uu}}),Ho=je(Ui),Kd=w({},Ui,{dataTransfer:0}),Fd=je(Kd),Jd=w({},wa,{relatedTarget:0}),cu=je(Jd),Id=w({},Al,{animationName:0,elapsedTime:0,pseudoElement:0}),Wd=je(Id),kd=w({},Al,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Pd=je(kd),$d=w({},Al,{data:0}),qo=je($d),ey={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},ty={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},ly={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function ay(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=ly[e])?!!t[e]:!1}function ou(){return ay}var iy=w({},wa,{key:function(e){if(e.key){var t=ey[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=_i(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?ty[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ou,charCode:function(e){return e.type==="keypress"?_i(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?_i(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),ny=je(iy),uy=w({},Ui,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Yo=je(uy),cy=w({},wa,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ou}),oy=je(cy),fy=w({},Al,{propertyName:0,elapsedTime:0,pseudoElement:0}),sy=je(fy),ry=w({},Ui,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),dy=je(ry),yy=w({},Al,{newState:0,oldState:0}),hy=je(yy),my=[9,13,27,32],fu=Nt&&"CompositionEvent"in window,La=null;Nt&&"documentMode"in document&&(La=document.documentMode);var gy=Nt&&"TextEvent"in window&&!La,Vo=Nt&&(!fu||La&&8<La&&11>=La),jo=" ",Xo=!1;function Qo(e,t){switch(e){case"keyup":return my.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Zo(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Wl=!1;function py(e,t){switch(e){case"compositionend":return Zo(t);case"keypress":return t.which!==32?null:(Xo=!0,jo);case"textInput":return e=t.data,e===jo&&Xo?null:e;default:return null}}function vy(e,t){if(Wl)return e==="compositionend"||!fu&&Qo(e,t)?(e=Bo(),zi=iu=kt=null,Wl=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Vo&&t.locale!=="ko"?null:t.data;default:return null}}var xy={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Ko(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!xy[e.type]:t==="textarea"}function Fo(e,t,l,a){Jl?Il?Il.push(a):Il=[a]:Jl=a,t=An(t,"onChange"),0<t.length&&(l=new wi("onChange","change",null,l,a),e.push({event:l,listeners:t}))}var Ba=null,Ga=null;function Sy(e){zr(e,0)}function Li(e){var t=za(e);if(Mo(t))return e}function Jo(e,t){if(e==="change")return t}var Io=!1;if(Nt){var su;if(Nt){var ru="oninput"in document;if(!ru){var Wo=document.createElement("div");Wo.setAttribute("oninput","return;"),ru=typeof Wo.oninput=="function"}su=ru}else su=!1;Io=su&&(!document.documentMode||9<document.documentMode)}function ko(){Ba&&(Ba.detachEvent("onpropertychange",Po),Ga=Ba=null)}function Po(e){if(e.propertyName==="value"&&Li(Ga)){var t=[];Fo(t,Ga,e,tu(e)),Lo(Sy,t)}}function Ey(e,t,l){e==="focusin"?(ko(),Ba=t,Ga=l,Ba.attachEvent("onpropertychange",Po)):e==="focusout"&&ko()}function Ty(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Li(Ga)}function by(e,t){if(e==="click")return Li(t)}function Ay(e,t){if(e==="input"||e==="change")return Li(t)}function Cy(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var $e=typeof Object.is=="function"?Object.is:Cy;function Ha(e,t){if($e(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var l=Object.keys(e),a=Object.keys(t);if(l.length!==a.length)return!1;for(a=0;a<l.length;a++){var i=l[a];if(!jn.call(t,i)||!$e(e[i],t[i]))return!1}return!0}function $o(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function ef(e,t){var l=$o(e);e=0;for(var a;l;){if(l.nodeType===3){if(a=e+l.textContent.length,e<=t&&a>=t)return{node:l,offset:t-e};e=a}e:{for(;l;){if(l.nextSibling){l=l.nextSibling;break e}l=l.parentNode}l=void 0}l=$o(l)}}function tf(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?tf(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function lf(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=Mi(e.document);t instanceof e.HTMLIFrameElement;){try{var l=typeof t.contentWindow.location.href=="string"}catch{l=!1}if(l)e=t.contentWindow;else break;t=Mi(e.document)}return t}function du(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}var Oy=Nt&&"documentMode"in document&&11>=document.documentMode,kl=null,yu=null,qa=null,hu=!1;function af(e,t,l){var a=l.window===l?l.document:l.nodeType===9?l:l.ownerDocument;hu||kl==null||kl!==Mi(a)||(a=kl,"selectionStart"in a&&du(a)?a={start:a.selectionStart,end:a.selectionEnd}:(a=(a.ownerDocument&&a.ownerDocument.defaultView||window).getSelection(),a={anchorNode:a.anchorNode,anchorOffset:a.anchorOffset,focusNode:a.focusNode,focusOffset:a.focusOffset}),qa&&Ha(qa,a)||(qa=a,a=An(yu,"onSelect"),0<a.length&&(t=new wi("onSelect","select",null,t,l),e.push({event:t,listeners:a}),t.target=kl)))}function Cl(e,t){var l={};return l[e.toLowerCase()]=t.toLowerCase(),l["Webkit"+e]="webkit"+t,l["Moz"+e]="moz"+t,l}var Pl={animationend:Cl("Animation","AnimationEnd"),animationiteration:Cl("Animation","AnimationIteration"),animationstart:Cl("Animation","AnimationStart"),transitionrun:Cl("Transition","TransitionRun"),transitionstart:Cl("Transition","TransitionStart"),transitioncancel:Cl("Transition","TransitionCancel"),transitionend:Cl("Transition","TransitionEnd")},mu={},nf={};Nt&&(nf=document.createElement("div").style,"AnimationEvent"in window||(delete Pl.animationend.animation,delete Pl.animationiteration.animation,delete Pl.animationstart.animation),"TransitionEvent"in window||delete Pl.transitionend.transition);function Ol(e){if(mu[e])return mu[e];if(!Pl[e])return e;var t=Pl[e],l;for(l in t)if(t.hasOwnProperty(l)&&l in nf)return mu[e]=t[l];return e}var uf=Ol("animationend"),cf=Ol("animationiteration"),of=Ol("animationstart"),Dy=Ol("transitionrun"),My=Ol("transitionstart"),Ry=Ol("transitioncancel"),ff=Ol("transitionend"),sf=new Map,gu="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");gu.push("scrollEnd");function vt(e,t){sf.set(e,t),bl(t,[e])}var Bi=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},ft=[],$l=0,pu=0;function Gi(){for(var e=$l,t=pu=$l=0;t<e;){var l=ft[t];ft[t++]=null;var a=ft[t];ft[t++]=null;var i=ft[t];ft[t++]=null;var n=ft[t];if(ft[t++]=null,a!==null&&i!==null){var u=a.pending;u===null?i.next=i:(i.next=u.next,u.next=i),a.pending=i}n!==0&&rf(l,i,n)}}function Hi(e,t,l,a){ft[$l++]=e,ft[$l++]=t,ft[$l++]=l,ft[$l++]=a,pu|=a,e.lanes|=a,e=e.alternate,e!==null&&(e.lanes|=a)}function vu(e,t,l,a){return Hi(e,t,l,a),qi(e)}function Dl(e,t){return Hi(e,null,null,t),qi(e)}function rf(e,t,l){e.lanes|=l;var a=e.alternate;a!==null&&(a.lanes|=l);for(var i=!1,n=e.return;n!==null;)n.childLanes|=l,a=n.alternate,a!==null&&(a.childLanes|=l),n.tag===22&&(e=n.stateNode,e===null||e._visibility&1||(i=!0)),e=n,n=n.return;return e.tag===3?(n=e.stateNode,i&&t!==null&&(i=31-Pe(l),e=n.hiddenUpdates,a=e[i],a===null?e[i]=[t]:a.push(t),t.lane=l|536870912),n):null}function qi(e){if(50<ci)throw ci=0,Dc=null,Error(m(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var ea={};function zy(e,t,l,a){this.tag=e,this.key=l,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=a,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function et(e,t,l,a){return new zy(e,t,l,a)}function xu(e){return e=e.prototype,!(!e||!e.isReactComponent)}function wt(e,t){var l=e.alternate;return l===null?(l=et(e.tag,t,e.key,e.mode),l.elementType=e.elementType,l.type=e.type,l.stateNode=e.stateNode,l.alternate=e,e.alternate=l):(l.pendingProps=t,l.type=e.type,l.flags=0,l.subtreeFlags=0,l.deletions=null),l.flags=e.flags&65011712,l.childLanes=e.childLanes,l.lanes=e.lanes,l.child=e.child,l.memoizedProps=e.memoizedProps,l.memoizedState=e.memoizedState,l.updateQueue=e.updateQueue,t=e.dependencies,l.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},l.sibling=e.sibling,l.index=e.index,l.ref=e.ref,l.refCleanup=e.refCleanup,l}function df(e,t){e.flags&=65011714;var l=e.alternate;return l===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=l.childLanes,e.lanes=l.lanes,e.child=l.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=l.memoizedProps,e.memoizedState=l.memoizedState,e.updateQueue=l.updateQueue,e.type=l.type,t=l.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function Yi(e,t,l,a,i,n){var u=0;if(a=e,typeof e=="function")xu(e)&&(u=1);else if(typeof e=="string")u=L0(e,l,D.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case Tt:return e=et(31,l,t,i),e.elementType=Tt,e.lanes=n,e;case we:return Ml(l.children,i,n,t);case Mt:u=8,i|=24;break;case Ie:return e=et(12,l,t,i|2),e.elementType=Ie,e.lanes=n,e;case Et:return e=et(13,l,t,i),e.elementType=Et,e.lanes=n,e;case He:return e=et(19,l,t,i),e.elementType=He,e.lanes=n,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case ze:u=10;break e;case Jt:u=9;break e;case ut:u=11;break e;case Q:u=14;break e;case qe:u=16,a=null;break e}u=29,l=Error(m(130,e===null?"null":typeof e,"")),a=null}return t=et(u,l,t,i),t.elementType=e,t.type=a,t.lanes=n,t}function Ml(e,t,l,a){return e=et(7,e,a,t),e.lanes=l,e}function Su(e,t,l){return e=et(6,e,null,t),e.lanes=l,e}function yf(e){var t=et(18,null,null,0);return t.stateNode=e,t}function Eu(e,t,l){return t=et(4,e.children!==null?e.children:[],e.key,t),t.lanes=l,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var hf=new WeakMap;function st(e,t){if(typeof e=="object"&&e!==null){var l=hf.get(e);return l!==void 0?l:(t={value:e,source:t,stack:ro(t)},hf.set(e,t),t)}return{value:e,source:t,stack:ro(t)}}var ta=[],la=0,Vi=null,Ya=0,rt=[],dt=0,Pt=null,At=1,Ct="";function Ut(e,t){ta[la++]=Ya,ta[la++]=Vi,Vi=e,Ya=t}function mf(e,t,l){rt[dt++]=At,rt[dt++]=Ct,rt[dt++]=Pt,Pt=e;var a=At;e=Ct;var i=32-Pe(a)-1;a&=~(1<<i),l+=1;var n=32-Pe(t)+i;if(30<n){var u=i-i%5;n=(a&(1<<u)-1).toString(32),a>>=u,i-=u,At=1<<32-Pe(t)+i|l<<i|a,Ct=n+e}else At=1<<n|l<<i|a,Ct=e}function Tu(e){e.return!==null&&(Ut(e,1),mf(e,1,0))}function bu(e){for(;e===Vi;)Vi=ta[--la],ta[la]=null,Ya=ta[--la],ta[la]=null;for(;e===Pt;)Pt=rt[--dt],rt[dt]=null,Ct=rt[--dt],rt[dt]=null,At=rt[--dt],rt[dt]=null}function gf(e,t){rt[dt++]=At,rt[dt++]=Ct,rt[dt++]=Pt,At=t.id,Ct=t.overflow,Pt=e}var Oe=null,ce=null,Z=!1,$t=null,yt=!1,Au=Error(m(519));function el(e){var t=Error(m(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw Va(st(t,e)),Au}function pf(e){var t=e.stateNode,l=e.type,a=e.memoizedProps;switch(t[Ce]=e,t[Ve]=a,l){case"dialog":V("cancel",t),V("close",t);break;case"iframe":case"object":case"embed":V("load",t);break;case"video":case"audio":for(l=0;l<fi.length;l++)V(fi[l],t);break;case"source":V("error",t);break;case"img":case"image":case"link":V("error",t),V("load",t);break;case"details":V("toggle",t);break;case"input":V("invalid",t),Ro(t,a.value,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name,!0);break;case"select":V("invalid",t);break;case"textarea":V("invalid",t),_o(t,a.value,a.defaultValue,a.children)}l=a.children,typeof l!="string"&&typeof l!="number"&&typeof l!="bigint"||t.textContent===""+l||a.suppressHydrationWarning===!0||Ur(t.textContent,l)?(a.popover!=null&&(V("beforetoggle",t),V("toggle",t)),a.onScroll!=null&&V("scroll",t),a.onScrollEnd!=null&&V("scrollend",t),a.onClick!=null&&(t.onclick=_t),t=!0):t=!1,t||el(e,!0)}function vf(e){for(Oe=e.return;Oe;)switch(Oe.tag){case 5:case 31:case 13:yt=!1;return;case 27:case 3:yt=!0;return;default:Oe=Oe.return}}function aa(e){if(e!==Oe)return!1;if(!Z)return vf(e),Z=!0,!1;var t=e.tag,l;if((l=t!==3&&t!==27)&&((l=t===5)&&(l=e.type,l=!(l!=="form"&&l!=="button")||jc(e.type,e.memoizedProps)),l=!l),l&&ce&&el(e),vf(e),t===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(m(317));ce=Xr(e)}else if(t===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(m(317));ce=Xr(e)}else t===27?(t=ce,hl(e.type)?(e=Fc,Fc=null,ce=e):ce=t):ce=Oe?mt(e.stateNode.nextSibling):null;return!0}function Rl(){ce=Oe=null,Z=!1}function Cu(){var e=$t;return e!==null&&(Ke===null?Ke=e:Ke.push.apply(Ke,e),$t=null),e}function Va(e){$t===null?$t=[e]:$t.push(e)}var Ou=s(null),zl=null,Lt=null;function tl(e,t,l){A(Ou,t._currentValue),t._currentValue=l}function Bt(e){e._currentValue=Ou.current,E(Ou)}function Du(e,t,l){for(;e!==null;){var a=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,a!==null&&(a.childLanes|=t)):a!==null&&(a.childLanes&t)!==t&&(a.childLanes|=t),e===l)break;e=e.return}}function Mu(e,t,l,a){var i=e.child;for(i!==null&&(i.return=e);i!==null;){var n=i.dependencies;if(n!==null){var u=i.child;n=n.firstContext;e:for(;n!==null;){var c=n;n=i;for(var o=0;o<t.length;o++)if(c.context===t[o]){n.lanes|=l,c=n.alternate,c!==null&&(c.lanes|=l),Du(n.return,l,e),a||(u=null);break e}n=c.next}}else if(i.tag===18){if(u=i.return,u===null)throw Error(m(341));u.lanes|=l,n=u.alternate,n!==null&&(n.lanes|=l),Du(u,l,e),u=null}else u=i.child;if(u!==null)u.return=i;else for(u=i;u!==null;){if(u===e){u=null;break}if(i=u.sibling,i!==null){i.return=u.return,u=i;break}u=u.return}i=u}}function ia(e,t,l,a){e=null;for(var i=t,n=!1;i!==null;){if(!n){if((i.flags&524288)!==0)n=!0;else if((i.flags&262144)!==0)break}if(i.tag===10){var u=i.alternate;if(u===null)throw Error(m(387));if(u=u.memoizedProps,u!==null){var c=i.type;$e(i.pendingProps.value,u.value)||(e!==null?e.push(c):e=[c])}}else if(i===P.current){if(u=i.alternate,u===null)throw Error(m(387));u.memoizedState.memoizedState!==i.memoizedState.memoizedState&&(e!==null?e.push(hi):e=[hi])}i=i.return}e!==null&&Mu(t,e,l,a),t.flags|=262144}function ji(e){for(e=e.firstContext;e!==null;){if(!$e(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function _l(e){zl=e,Lt=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function De(e){return xf(zl,e)}function Xi(e,t){return zl===null&&_l(e),xf(e,t)}function xf(e,t){var l=t._currentValue;if(t={context:t,memoizedValue:l,next:null},Lt===null){if(e===null)throw Error(m(308));Lt=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else Lt=Lt.next=t;return l}var _y=typeof AbortController<"u"?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(l,a){e.push(a)}};this.abort=function(){t.aborted=!0,e.forEach(function(l){return l()})}},Ny=O.unstable_scheduleCallback,wy=O.unstable_NormalPriority,ve={$$typeof:ze,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Ru(){return{controller:new _y,data:new Map,refCount:0}}function ja(e){e.refCount--,e.refCount===0&&Ny(wy,function(){e.controller.abort()})}var Xa=null,zu=0,na=0,ua=null;function Uy(e,t){if(Xa===null){var l=Xa=[];zu=0,na=wc(),ua={status:"pending",value:void 0,then:function(a){l.push(a)}}}return zu++,t.then(Sf,Sf),t}function Sf(){if(--zu===0&&Xa!==null){ua!==null&&(ua.status="fulfilled");var e=Xa;Xa=null,na=0,ua=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function Ly(e,t){var l=[],a={status:"pending",value:null,reason:null,then:function(i){l.push(i)}};return e.then(function(){a.status="fulfilled",a.value=t;for(var i=0;i<l.length;i++)(0,l[i])(t)},function(i){for(a.status="rejected",a.reason=i,i=0;i<l.length;i++)(0,l[i])(void 0)}),a}var Ef=v.S;v.S=function(e,t){ir=We(),typeof t=="object"&&t!==null&&typeof t.then=="function"&&Uy(e,t),Ef!==null&&Ef(e,t)};var Nl=s(null);function _u(){var e=Nl.current;return e!==null?e:ue.pooledCache}function Qi(e,t){t===null?A(Nl,Nl.current):A(Nl,t.pool)}function Tf(){var e=_u();return e===null?null:{parent:ve._currentValue,pool:e}}var ca=Error(m(460)),Nu=Error(m(474)),Zi=Error(m(542)),Ki={then:function(){}};function bf(e){return e=e.status,e==="fulfilled"||e==="rejected"}function Af(e,t,l){switch(l=e[l],l===void 0?e.push(t):l!==t&&(t.then(_t,_t),t=l),t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,Of(e),e;default:if(typeof t.status=="string")t.then(_t,_t);else{if(e=ue,e!==null&&100<e.shellSuspendCounter)throw Error(m(482));e=t,e.status="pending",e.then(function(a){if(t.status==="pending"){var i=t;i.status="fulfilled",i.value=a}},function(a){if(t.status==="pending"){var i=t;i.status="rejected",i.reason=a}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,Of(e),e}throw Ul=t,ca}}function wl(e){try{var t=e._init;return t(e._payload)}catch(l){throw l!==null&&typeof l=="object"&&typeof l.then=="function"?(Ul=l,ca):l}}var Ul=null;function Cf(){if(Ul===null)throw Error(m(459));var e=Ul;return Ul=null,e}function Of(e){if(e===ca||e===Zi)throw Error(m(483))}var oa=null,Qa=0;function Fi(e){var t=Qa;return Qa+=1,oa===null&&(oa=[]),Af(oa,e,t)}function Za(e,t){t=t.props.ref,e.ref=t!==void 0?t:null}function Ji(e,t){throw t.$$typeof===fe?Error(m(525)):(e=Object.prototype.toString.call(t),Error(m(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)))}function Df(e){function t(r,f){if(e){var d=r.deletions;d===null?(r.deletions=[f],r.flags|=16):d.push(f)}}function l(r,f){if(!e)return null;for(;f!==null;)t(r,f),f=f.sibling;return null}function a(r){for(var f=new Map;r!==null;)r.key!==null?f.set(r.key,r):f.set(r.index,r),r=r.sibling;return f}function i(r,f){return r=wt(r,f),r.index=0,r.sibling=null,r}function n(r,f,d){return r.index=d,e?(d=r.alternate,d!==null?(d=d.index,d<f?(r.flags|=67108866,f):d):(r.flags|=67108866,f)):(r.flags|=1048576,f)}function u(r){return e&&r.alternate===null&&(r.flags|=67108866),r}function c(r,f,d,x){return f===null||f.tag!==6?(f=Su(d,r.mode,x),f.return=r,f):(f=i(f,d),f.return=r,f)}function o(r,f,d,x){var R=d.type;return R===we?p(r,f,d.props.children,x,d.key):f!==null&&(f.elementType===R||typeof R=="object"&&R!==null&&R.$$typeof===qe&&wl(R)===f.type)?(f=i(f,d.props),Za(f,d),f.return=r,f):(f=Yi(d.type,d.key,d.props,null,r.mode,x),Za(f,d),f.return=r,f)}function y(r,f,d,x){return f===null||f.tag!==4||f.stateNode.containerInfo!==d.containerInfo||f.stateNode.implementation!==d.implementation?(f=Eu(d,r.mode,x),f.return=r,f):(f=i(f,d.children||[]),f.return=r,f)}function p(r,f,d,x,R){return f===null||f.tag!==7?(f=Ml(d,r.mode,x,R),f.return=r,f):(f=i(f,d),f.return=r,f)}function S(r,f,d){if(typeof f=="string"&&f!==""||typeof f=="number"||typeof f=="bigint")return f=Su(""+f,r.mode,d),f.return=r,f;if(typeof f=="object"&&f!==null){switch(f.$$typeof){case Je:return d=Yi(f.type,f.key,f.props,null,r.mode,d),Za(d,f),d.return=r,d;case Ge:return f=Eu(f,r.mode,d),f.return=r,f;case qe:return f=wl(f),S(r,f,d)}if(pt(f)||Ye(f))return f=Ml(f,r.mode,d,null),f.return=r,f;if(typeof f.then=="function")return S(r,Fi(f),d);if(f.$$typeof===ze)return S(r,Xi(r,f),d);Ji(r,f)}return null}function h(r,f,d,x){var R=f!==null?f.key:null;if(typeof d=="string"&&d!==""||typeof d=="number"||typeof d=="bigint")return R!==null?null:c(r,f,""+d,x);if(typeof d=="object"&&d!==null){switch(d.$$typeof){case Je:return d.key===R?o(r,f,d,x):null;case Ge:return d.key===R?y(r,f,d,x):null;case qe:return d=wl(d),h(r,f,d,x)}if(pt(d)||Ye(d))return R!==null?null:p(r,f,d,x,null);if(typeof d.then=="function")return h(r,f,Fi(d),x);if(d.$$typeof===ze)return h(r,f,Xi(r,d),x);Ji(r,d)}return null}function g(r,f,d,x,R){if(typeof x=="string"&&x!==""||typeof x=="number"||typeof x=="bigint")return r=r.get(d)||null,c(f,r,""+x,R);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case Je:return r=r.get(x.key===null?d:x.key)||null,o(f,r,x,R);case Ge:return r=r.get(x.key===null?d:x.key)||null,y(f,r,x,R);case qe:return x=wl(x),g(r,f,d,x,R)}if(pt(x)||Ye(x))return r=r.get(d)||null,p(f,r,x,R,null);if(typeof x.then=="function")return g(r,f,d,Fi(x),R);if(x.$$typeof===ze)return g(r,f,d,Xi(f,x),R);Ji(f,x)}return null}function C(r,f,d,x){for(var R=null,K=null,M=f,H=f=0,X=null;M!==null&&H<d.length;H++){M.index>H?(X=M,M=null):X=M.sibling;var F=h(r,M,d[H],x);if(F===null){M===null&&(M=X);break}e&&M&&F.alternate===null&&t(r,M),f=n(F,f,H),K===null?R=F:K.sibling=F,K=F,M=X}if(H===d.length)return l(r,M),Z&&Ut(r,H),R;if(M===null){for(;H<d.length;H++)M=S(r,d[H],x),M!==null&&(f=n(M,f,H),K===null?R=M:K.sibling=M,K=M);return Z&&Ut(r,H),R}for(M=a(M);H<d.length;H++)X=g(M,r,H,d[H],x),X!==null&&(e&&X.alternate!==null&&M.delete(X.key===null?H:X.key),f=n(X,f,H),K===null?R=X:K.sibling=X,K=X);return e&&M.forEach(function(xl){return t(r,xl)}),Z&&Ut(r,H),R}function _(r,f,d,x){if(d==null)throw Error(m(151));for(var R=null,K=null,M=f,H=f=0,X=null,F=d.next();M!==null&&!F.done;H++,F=d.next()){M.index>H?(X=M,M=null):X=M.sibling;var xl=h(r,M,F.value,x);if(xl===null){M===null&&(M=X);break}e&&M&&xl.alternate===null&&t(r,M),f=n(xl,f,H),K===null?R=xl:K.sibling=xl,K=xl,M=X}if(F.done)return l(r,M),Z&&Ut(r,H),R;if(M===null){for(;!F.done;H++,F=d.next())F=S(r,F.value,x),F!==null&&(f=n(F,f,H),K===null?R=F:K.sibling=F,K=F);return Z&&Ut(r,H),R}for(M=a(M);!F.done;H++,F=d.next())F=g(M,r,H,F.value,x),F!==null&&(e&&F.alternate!==null&&M.delete(F.key===null?H:F.key),f=n(F,f,H),K===null?R=F:K.sibling=F,K=F);return e&&M.forEach(function(K0){return t(r,K0)}),Z&&Ut(r,H),R}function ie(r,f,d,x){if(typeof d=="object"&&d!==null&&d.type===we&&d.key===null&&(d=d.props.children),typeof d=="object"&&d!==null){switch(d.$$typeof){case Je:e:{for(var R=d.key;f!==null;){if(f.key===R){if(R=d.type,R===we){if(f.tag===7){l(r,f.sibling),x=i(f,d.props.children),x.return=r,r=x;break e}}else if(f.elementType===R||typeof R=="object"&&R!==null&&R.$$typeof===qe&&wl(R)===f.type){l(r,f.sibling),x=i(f,d.props),Za(x,d),x.return=r,r=x;break e}l(r,f);break}else t(r,f);f=f.sibling}d.type===we?(x=Ml(d.props.children,r.mode,x,d.key),x.return=r,r=x):(x=Yi(d.type,d.key,d.props,null,r.mode,x),Za(x,d),x.return=r,r=x)}return u(r);case Ge:e:{for(R=d.key;f!==null;){if(f.key===R)if(f.tag===4&&f.stateNode.containerInfo===d.containerInfo&&f.stateNode.implementation===d.implementation){l(r,f.sibling),x=i(f,d.children||[]),x.return=r,r=x;break e}else{l(r,f);break}else t(r,f);f=f.sibling}x=Eu(d,r.mode,x),x.return=r,r=x}return u(r);case qe:return d=wl(d),ie(r,f,d,x)}if(pt(d))return C(r,f,d,x);if(Ye(d)){if(R=Ye(d),typeof R!="function")throw Error(m(150));return d=R.call(d),_(r,f,d,x)}if(typeof d.then=="function")return ie(r,f,Fi(d),x);if(d.$$typeof===ze)return ie(r,f,Xi(r,d),x);Ji(r,d)}return typeof d=="string"&&d!==""||typeof d=="number"||typeof d=="bigint"?(d=""+d,f!==null&&f.tag===6?(l(r,f.sibling),x=i(f,d),x.return=r,r=x):(l(r,f),x=Su(d,r.mode,x),x.return=r,r=x),u(r)):l(r,f)}return function(r,f,d,x){try{Qa=0;var R=ie(r,f,d,x);return oa=null,R}catch(M){if(M===ca||M===Zi)throw M;var K=et(29,M,null,r.mode);return K.lanes=x,K.return=r,K}finally{}}}var Ll=Df(!0),Mf=Df(!1),ll=!1;function wu(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Uu(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function al(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function il(e,t,l){var a=e.updateQueue;if(a===null)return null;if(a=a.shared,(I&2)!==0){var i=a.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),a.pending=t,t=qi(e),rf(e,null,l),t}return Hi(e,a,t,l),qi(e)}function Ka(e,t,l){if(t=t.updateQueue,t!==null&&(t=t.shared,(l&4194048)!==0)){var a=t.lanes;a&=e.pendingLanes,l|=a,t.lanes=l,vo(e,l)}}function Lu(e,t){var l=e.updateQueue,a=e.alternate;if(a!==null&&(a=a.updateQueue,l===a)){var i=null,n=null;if(l=l.firstBaseUpdate,l!==null){do{var u={lane:l.lane,tag:l.tag,payload:l.payload,callback:null,next:null};n===null?i=n=u:n=n.next=u,l=l.next}while(l!==null);n===null?i=n=t:n=n.next=t}else i=n=t;l={baseState:a.baseState,firstBaseUpdate:i,lastBaseUpdate:n,shared:a.shared,callbacks:a.callbacks},e.updateQueue=l;return}e=l.lastBaseUpdate,e===null?l.firstBaseUpdate=t:e.next=t,l.lastBaseUpdate=t}var Bu=!1;function Fa(){if(Bu){var e=ua;if(e!==null)throw e}}function Ja(e,t,l,a){Bu=!1;var i=e.updateQueue;ll=!1;var n=i.firstBaseUpdate,u=i.lastBaseUpdate,c=i.shared.pending;if(c!==null){i.shared.pending=null;var o=c,y=o.next;o.next=null,u===null?n=y:u.next=y,u=o;var p=e.alternate;p!==null&&(p=p.updateQueue,c=p.lastBaseUpdate,c!==u&&(c===null?p.firstBaseUpdate=y:c.next=y,p.lastBaseUpdate=o))}if(n!==null){var S=i.baseState;u=0,p=y=o=null,c=n;do{var h=c.lane&-536870913,g=h!==c.lane;if(g?(j&h)===h:(a&h)===h){h!==0&&h===na&&(Bu=!0),p!==null&&(p=p.next={lane:0,tag:c.tag,payload:c.payload,callback:null,next:null});e:{var C=e,_=c;h=t;var ie=l;switch(_.tag){case 1:if(C=_.payload,typeof C=="function"){S=C.call(ie,S,h);break e}S=C;break e;case 3:C.flags=C.flags&-65537|128;case 0:if(C=_.payload,h=typeof C=="function"?C.call(ie,S,h):C,h==null)break e;S=w({},S,h);break e;case 2:ll=!0}}h=c.callback,h!==null&&(e.flags|=64,g&&(e.flags|=8192),g=i.callbacks,g===null?i.callbacks=[h]:g.push(h))}else g={lane:h,tag:c.tag,payload:c.payload,callback:c.callback,next:null},p===null?(y=p=g,o=S):p=p.next=g,u|=h;if(c=c.next,c===null){if(c=i.shared.pending,c===null)break;g=c,c=g.next,g.next=null,i.lastBaseUpdate=g,i.shared.pending=null}}while(!0);p===null&&(o=S),i.baseState=o,i.firstBaseUpdate=y,i.lastBaseUpdate=p,n===null&&(i.shared.lanes=0),fl|=u,e.lanes=u,e.memoizedState=S}}function Rf(e,t){if(typeof e!="function")throw Error(m(191,e));e.call(t)}function zf(e,t){var l=e.callbacks;if(l!==null)for(e.callbacks=null,e=0;e<l.length;e++)Rf(l[e],t)}var fa=s(null),Ii=s(0);function _f(e,t){e=Zt,A(Ii,e),A(fa,t),Zt=e|t.baseLanes}function Gu(){A(Ii,Zt),A(fa,fa.current)}function Hu(){Zt=Ii.current,E(fa),E(Ii)}var tt=s(null),ht=null;function nl(e){var t=e.alternate;A(ge,ge.current&1),A(tt,e),ht===null&&(t===null||fa.current!==null||t.memoizedState!==null)&&(ht=e)}function qu(e){A(ge,ge.current),A(tt,e),ht===null&&(ht=e)}function Nf(e){e.tag===22?(A(ge,ge.current),A(tt,e),ht===null&&(ht=e)):ul()}function ul(){A(ge,ge.current),A(tt,tt.current)}function lt(e){E(tt),ht===e&&(ht=null),E(ge)}var ge=s(0);function Wi(e){for(var t=e;t!==null;){if(t.tag===13){var l=t.memoizedState;if(l!==null&&(l=l.dehydrated,l===null||Zc(l)||Kc(l)))return t}else if(t.tag===19&&(t.memoizedProps.revealOrder==="forwards"||t.memoizedProps.revealOrder==="backwards"||t.memoizedProps.revealOrder==="unstable_legacy-backwards"||t.memoizedProps.revealOrder==="together")){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Gt=0,G=null,le=null,xe=null,ki=!1,sa=!1,Bl=!1,Pi=0,Ia=0,ra=null,By=0;function de(){throw Error(m(321))}function Yu(e,t){if(t===null)return!1;for(var l=0;l<t.length&&l<e.length;l++)if(!$e(e[l],t[l]))return!1;return!0}function Vu(e,t,l,a,i,n){return Gt=n,G=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,v.H=e===null||e.memoizedState===null?ms:lc,Bl=!1,n=l(a,i),Bl=!1,sa&&(n=Uf(t,l,a,i)),wf(e),n}function wf(e){v.H=Pa;var t=le!==null&&le.next!==null;if(Gt=0,xe=le=G=null,ki=!1,Ia=0,ra=null,t)throw Error(m(300));e===null||Se||(e=e.dependencies,e!==null&&ji(e)&&(Se=!0))}function Uf(e,t,l,a){G=e;var i=0;do{if(sa&&(ra=null),Ia=0,sa=!1,25<=i)throw Error(m(301));if(i+=1,xe=le=null,e.updateQueue!=null){var n=e.updateQueue;n.lastEffect=null,n.events=null,n.stores=null,n.memoCache!=null&&(n.memoCache.index=0)}v.H=gs,n=t(l,a)}while(sa);return n}function Gy(){var e=v.H,t=e.useState()[0];return t=typeof t.then=="function"?Wa(t):t,e=e.useState()[0],(le!==null?le.memoizedState:null)!==e&&(G.flags|=1024),t}function ju(){var e=Pi!==0;return Pi=0,e}function Xu(e,t,l){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~l}function Qu(e){if(ki){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}ki=!1}Gt=0,xe=le=G=null,sa=!1,Ia=Pi=0,ra=null}function Le(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return xe===null?G.memoizedState=xe=e:xe=xe.next=e,xe}function pe(){if(le===null){var e=G.alternate;e=e!==null?e.memoizedState:null}else e=le.next;var t=xe===null?G.memoizedState:xe.next;if(t!==null)xe=t,le=e;else{if(e===null)throw G.alternate===null?Error(m(467)):Error(m(310));le=e,e={memoizedState:le.memoizedState,baseState:le.baseState,baseQueue:le.baseQueue,queue:le.queue,next:null},xe===null?G.memoizedState=xe=e:xe=xe.next=e}return xe}function $i(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Wa(e){var t=Ia;return Ia+=1,ra===null&&(ra=[]),e=Af(ra,e,t),t=G,(xe===null?t.memoizedState:xe.next)===null&&(t=t.alternate,v.H=t===null||t.memoizedState===null?ms:lc),e}function en(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return Wa(e);if(e.$$typeof===ze)return De(e)}throw Error(m(438,String(e)))}function Zu(e){var t=null,l=G.updateQueue;if(l!==null&&(t=l.memoCache),t==null){var a=G.alternate;a!==null&&(a=a.updateQueue,a!==null&&(a=a.memoCache,a!=null&&(t={data:a.data.map(function(i){return i.slice()}),index:0})))}if(t==null&&(t={data:[],index:0}),l===null&&(l=$i(),G.updateQueue=l),l.memoCache=t,l=t.data[t.index],l===void 0)for(l=t.data[t.index]=Array(e),a=0;a<e;a++)l[a]=Yl;return t.index++,l}function Ht(e,t){return typeof t=="function"?t(e):t}function tn(e){var t=pe();return Ku(t,le,e)}function Ku(e,t,l){var a=e.queue;if(a===null)throw Error(m(311));a.lastRenderedReducer=l;var i=e.baseQueue,n=a.pending;if(n!==null){if(i!==null){var u=i.next;i.next=n.next,n.next=u}t.baseQueue=i=n,a.pending=null}if(n=e.baseState,i===null)e.memoizedState=n;else{t=i.next;var c=u=null,o=null,y=t,p=!1;do{var S=y.lane&-536870913;if(S!==y.lane?(j&S)===S:(Gt&S)===S){var h=y.revertLane;if(h===0)o!==null&&(o=o.next={lane:0,revertLane:0,gesture:null,action:y.action,hasEagerState:y.hasEagerState,eagerState:y.eagerState,next:null}),S===na&&(p=!0);else if((Gt&h)===h){y=y.next,h===na&&(p=!0);continue}else S={lane:0,revertLane:y.revertLane,gesture:null,action:y.action,hasEagerState:y.hasEagerState,eagerState:y.eagerState,next:null},o===null?(c=o=S,u=n):o=o.next=S,G.lanes|=h,fl|=h;S=y.action,Bl&&l(n,S),n=y.hasEagerState?y.eagerState:l(n,S)}else h={lane:S,revertLane:y.revertLane,gesture:y.gesture,action:y.action,hasEagerState:y.hasEagerState,eagerState:y.eagerState,next:null},o===null?(c=o=h,u=n):o=o.next=h,G.lanes|=S,fl|=S;y=y.next}while(y!==null&&y!==t);if(o===null?u=n:o.next=c,!$e(n,e.memoizedState)&&(Se=!0,p&&(l=ua,l!==null)))throw l;e.memoizedState=n,e.baseState=u,e.baseQueue=o,a.lastRenderedState=n}return i===null&&(a.lanes=0),[e.memoizedState,a.dispatch]}function Fu(e){var t=pe(),l=t.queue;if(l===null)throw Error(m(311));l.lastRenderedReducer=e;var a=l.dispatch,i=l.pending,n=t.memoizedState;if(i!==null){l.pending=null;var u=i=i.next;do n=e(n,u.action),u=u.next;while(u!==i);$e(n,t.memoizedState)||(Se=!0),t.memoizedState=n,t.baseQueue===null&&(t.baseState=n),l.lastRenderedState=n}return[n,a]}function Lf(e,t,l){var a=G,i=pe(),n=Z;if(n){if(l===void 0)throw Error(m(407));l=l()}else l=t();var u=!$e((le||i).memoizedState,l);if(u&&(i.memoizedState=l,Se=!0),i=i.queue,Wu(Hf.bind(null,a,i,e),[e]),i.getSnapshot!==t||u||xe!==null&&xe.memoizedState.tag&1){if(a.flags|=2048,da(9,{destroy:void 0},Gf.bind(null,a,i,l,t),null),ue===null)throw Error(m(349));n||(Gt&127)!==0||Bf(a,t,l)}return l}function Bf(e,t,l){e.flags|=16384,e={getSnapshot:t,value:l},t=G.updateQueue,t===null?(t=$i(),G.updateQueue=t,t.stores=[e]):(l=t.stores,l===null?t.stores=[e]:l.push(e))}function Gf(e,t,l,a){t.value=l,t.getSnapshot=a,qf(t)&&Yf(e)}function Hf(e,t,l){return l(function(){qf(t)&&Yf(e)})}function qf(e){var t=e.getSnapshot;e=e.value;try{var l=t();return!$e(e,l)}catch{return!0}}function Yf(e){var t=Dl(e,2);t!==null&&Fe(t,e,2)}function Ju(e){var t=Le();if(typeof e=="function"){var l=e;if(e=l(),Bl){It(!0);try{l()}finally{It(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ht,lastRenderedState:e},t}function Vf(e,t,l,a){return e.baseState=l,Ku(e,le,typeof a=="function"?a:Ht)}function Hy(e,t,l,a,i){if(nn(e))throw Error(m(485));if(e=t.action,e!==null){var n={payload:i,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(u){n.listeners.push(u)}};v.T!==null?l(!0):n.isTransition=!1,a(n),l=t.pending,l===null?(n.next=t.pending=n,jf(t,n)):(n.next=l.next,t.pending=l.next=n)}}function jf(e,t){var l=t.action,a=t.payload,i=e.state;if(t.isTransition){var n=v.T,u={};v.T=u;try{var c=l(i,a),o=v.S;o!==null&&o(u,c),Xf(e,t,c)}catch(y){Iu(e,t,y)}finally{n!==null&&u.types!==null&&(n.types=u.types),v.T=n}}else try{n=l(i,a),Xf(e,t,n)}catch(y){Iu(e,t,y)}}function Xf(e,t,l){l!==null&&typeof l=="object"&&typeof l.then=="function"?l.then(function(a){Qf(e,t,a)},function(a){return Iu(e,t,a)}):Qf(e,t,l)}function Qf(e,t,l){t.status="fulfilled",t.value=l,Zf(t),e.state=l,t=e.pending,t!==null&&(l=t.next,l===t?e.pending=null:(l=l.next,t.next=l,jf(e,l)))}function Iu(e,t,l){var a=e.pending;if(e.pending=null,a!==null){a=a.next;do t.status="rejected",t.reason=l,Zf(t),t=t.next;while(t!==a)}e.action=null}function Zf(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function Kf(e,t){return t}function Ff(e,t){if(Z){var l=ue.formState;if(l!==null){e:{var a=G;if(Z){if(ce){t:{for(var i=ce,n=yt;i.nodeType!==8;){if(!n){i=null;break t}if(i=mt(i.nextSibling),i===null){i=null;break t}}n=i.data,i=n==="F!"||n==="F"?i:null}if(i){ce=mt(i.nextSibling),a=i.data==="F!";break e}}el(a)}a=!1}a&&(t=l[0])}}return l=Le(),l.memoizedState=l.baseState=t,a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Kf,lastRenderedState:t},l.queue=a,l=ds.bind(null,G,a),a.dispatch=l,a=Ju(!1),n=tc.bind(null,G,!1,a.queue),a=Le(),i={state:t,dispatch:null,action:e,pending:null},a.queue=i,l=Hy.bind(null,G,i,n,l),i.dispatch=l,a.memoizedState=e,[t,l,!1]}function Jf(e){var t=pe();return If(t,le,e)}function If(e,t,l){if(t=Ku(e,t,Kf)[0],e=tn(Ht)[0],typeof t=="object"&&t!==null&&typeof t.then=="function")try{var a=Wa(t)}catch(u){throw u===ca?Zi:u}else a=t;t=pe();var i=t.queue,n=i.dispatch;return l!==t.memoizedState&&(G.flags|=2048,da(9,{destroy:void 0},qy.bind(null,i,l),null)),[a,n,e]}function qy(e,t){e.action=t}function Wf(e){var t=pe(),l=le;if(l!==null)return If(t,l,e);pe(),t=t.memoizedState,l=pe();var a=l.queue.dispatch;return l.memoizedState=e,[t,a,!1]}function da(e,t,l,a){return e={tag:e,create:l,deps:a,inst:t,next:null},t=G.updateQueue,t===null&&(t=$i(),G.updateQueue=t),l=t.lastEffect,l===null?t.lastEffect=e.next=e:(a=l.next,l.next=e,e.next=a,t.lastEffect=e),e}function kf(){return pe().memoizedState}function ln(e,t,l,a){var i=Le();G.flags|=e,i.memoizedState=da(1|t,{destroy:void 0},l,a===void 0?null:a)}function an(e,t,l,a){var i=pe();a=a===void 0?null:a;var n=i.memoizedState.inst;le!==null&&a!==null&&Yu(a,le.memoizedState.deps)?i.memoizedState=da(t,n,l,a):(G.flags|=e,i.memoizedState=da(1|t,n,l,a))}function Pf(e,t){ln(8390656,8,e,t)}function Wu(e,t){an(2048,8,e,t)}function Yy(e){G.flags|=4;var t=G.updateQueue;if(t===null)t=$i(),G.updateQueue=t,t.events=[e];else{var l=t.events;l===null?t.events=[e]:l.push(e)}}function $f(e){var t=pe().memoizedState;return Yy({ref:t,nextImpl:e}),function(){if((I&2)!==0)throw Error(m(440));return t.impl.apply(void 0,arguments)}}function es(e,t){return an(4,2,e,t)}function ts(e,t){return an(4,4,e,t)}function ls(e,t){if(typeof t=="function"){e=e();var l=t(e);return function(){typeof l=="function"?l():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function as(e,t,l){l=l!=null?l.concat([e]):null,an(4,4,ls.bind(null,t,e),l)}function ku(){}function is(e,t){var l=pe();t=t===void 0?null:t;var a=l.memoizedState;return t!==null&&Yu(t,a[1])?a[0]:(l.memoizedState=[e,t],e)}function ns(e,t){var l=pe();t=t===void 0?null:t;var a=l.memoizedState;if(t!==null&&Yu(t,a[1]))return a[0];if(a=e(),Bl){It(!0);try{e()}finally{It(!1)}}return l.memoizedState=[a,t],a}function Pu(e,t,l){return l===void 0||(Gt&1073741824)!==0&&(j&261930)===0?e.memoizedState=t:(e.memoizedState=l,e=ur(),G.lanes|=e,fl|=e,l)}function us(e,t,l,a){return $e(l,t)?l:fa.current!==null?(e=Pu(e,l,a),$e(e,t)||(Se=!0),e):(Gt&42)===0||(Gt&1073741824)!==0&&(j&261930)===0?(Se=!0,e.memoizedState=l):(e=ur(),G.lanes|=e,fl|=e,t)}function cs(e,t,l,a,i){var n=b.p;b.p=n!==0&&8>n?n:8;var u=v.T,c={};v.T=c,tc(e,!1,t,l);try{var o=i(),y=v.S;if(y!==null&&y(c,o),o!==null&&typeof o=="object"&&typeof o.then=="function"){var p=Ly(o,a);ka(e,t,p,nt(e))}else ka(e,t,a,nt(e))}catch(S){ka(e,t,{then:function(){},status:"rejected",reason:S},nt())}finally{b.p=n,u!==null&&c.types!==null&&(u.types=c.types),v.T=u}}function Vy(){}function $u(e,t,l,a){if(e.tag!==5)throw Error(m(476));var i=os(e).queue;cs(e,i,t,U,l===null?Vy:function(){return fs(e),l(a)})}function os(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:U,baseState:U,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ht,lastRenderedState:U},next:null};var l={};return t.next={memoizedState:l,baseState:l,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ht,lastRenderedState:l},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function fs(e){var t=os(e);t.next===null&&(t=e.alternate.memoizedState),ka(e,t.next.queue,{},nt())}function ec(){return De(hi)}function ss(){return pe().memoizedState}function rs(){return pe().memoizedState}function jy(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var l=nt();e=al(l);var a=il(t,e,l);a!==null&&(Fe(a,t,l),Ka(a,t,l)),t={cache:Ru()},e.payload=t;return}t=t.return}}function Xy(e,t,l){var a=nt();l={lane:a,revertLane:0,gesture:null,action:l,hasEagerState:!1,eagerState:null,next:null},nn(e)?ys(t,l):(l=vu(e,t,l,a),l!==null&&(Fe(l,e,a),hs(l,t,a)))}function ds(e,t,l){var a=nt();ka(e,t,l,a)}function ka(e,t,l,a){var i={lane:a,revertLane:0,gesture:null,action:l,hasEagerState:!1,eagerState:null,next:null};if(nn(e))ys(t,i);else{var n=e.alternate;if(e.lanes===0&&(n===null||n.lanes===0)&&(n=t.lastRenderedReducer,n!==null))try{var u=t.lastRenderedState,c=n(u,l);if(i.hasEagerState=!0,i.eagerState=c,$e(c,u))return Hi(e,t,i,0),ue===null&&Gi(),!1}catch{}finally{}if(l=vu(e,t,i,a),l!==null)return Fe(l,e,a),hs(l,t,a),!0}return!1}function tc(e,t,l,a){if(a={lane:2,revertLane:wc(),gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},nn(e)){if(t)throw Error(m(479))}else t=vu(e,l,a,2),t!==null&&Fe(t,e,2)}function nn(e){var t=e.alternate;return e===G||t!==null&&t===G}function ys(e,t){sa=ki=!0;var l=e.pending;l===null?t.next=t:(t.next=l.next,l.next=t),e.pending=t}function hs(e,t,l){if((l&4194048)!==0){var a=t.lanes;a&=e.pendingLanes,l|=a,t.lanes=l,vo(e,l)}}var Pa={readContext:De,use:en,useCallback:de,useContext:de,useEffect:de,useImperativeHandle:de,useLayoutEffect:de,useInsertionEffect:de,useMemo:de,useReducer:de,useRef:de,useState:de,useDebugValue:de,useDeferredValue:de,useTransition:de,useSyncExternalStore:de,useId:de,useHostTransitionStatus:de,useFormState:de,useActionState:de,useOptimistic:de,useMemoCache:de,useCacheRefresh:de};Pa.useEffectEvent=de;var ms={readContext:De,use:en,useCallback:function(e,t){return Le().memoizedState=[e,t===void 0?null:t],e},useContext:De,useEffect:Pf,useImperativeHandle:function(e,t,l){l=l!=null?l.concat([e]):null,ln(4194308,4,ls.bind(null,t,e),l)},useLayoutEffect:function(e,t){return ln(4194308,4,e,t)},useInsertionEffect:function(e,t){ln(4,2,e,t)},useMemo:function(e,t){var l=Le();t=t===void 0?null:t;var a=e();if(Bl){It(!0);try{e()}finally{It(!1)}}return l.memoizedState=[a,t],a},useReducer:function(e,t,l){var a=Le();if(l!==void 0){var i=l(t);if(Bl){It(!0);try{l(t)}finally{It(!1)}}}else i=t;return a.memoizedState=a.baseState=i,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:i},a.queue=e,e=e.dispatch=Xy.bind(null,G,e),[a.memoizedState,e]},useRef:function(e){var t=Le();return e={current:e},t.memoizedState=e},useState:function(e){e=Ju(e);var t=e.queue,l=ds.bind(null,G,t);return t.dispatch=l,[e.memoizedState,l]},useDebugValue:ku,useDeferredValue:function(e,t){var l=Le();return Pu(l,e,t)},useTransition:function(){var e=Ju(!1);return e=cs.bind(null,G,e.queue,!0,!1),Le().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,l){var a=G,i=Le();if(Z){if(l===void 0)throw Error(m(407));l=l()}else{if(l=t(),ue===null)throw Error(m(349));(j&127)!==0||Bf(a,t,l)}i.memoizedState=l;var n={value:l,getSnapshot:t};return i.queue=n,Pf(Hf.bind(null,a,n,e),[e]),a.flags|=2048,da(9,{destroy:void 0},Gf.bind(null,a,n,l,t),null),l},useId:function(){var e=Le(),t=ue.identifierPrefix;if(Z){var l=Ct,a=At;l=(a&~(1<<32-Pe(a)-1)).toString(32)+l,t="_"+t+"R_"+l,l=Pi++,0<l&&(t+="H"+l.toString(32)),t+="_"}else l=By++,t="_"+t+"r_"+l.toString(32)+"_";return e.memoizedState=t},useHostTransitionStatus:ec,useFormState:Ff,useActionState:Ff,useOptimistic:function(e){var t=Le();t.memoizedState=t.baseState=e;var l={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=l,t=tc.bind(null,G,!0,l),l.dispatch=t,[e,t]},useMemoCache:Zu,useCacheRefresh:function(){return Le().memoizedState=jy.bind(null,G)},useEffectEvent:function(e){var t=Le(),l={impl:e};return t.memoizedState=l,function(){if((I&2)!==0)throw Error(m(440));return l.impl.apply(void 0,arguments)}}},lc={readContext:De,use:en,useCallback:is,useContext:De,useEffect:Wu,useImperativeHandle:as,useInsertionEffect:es,useLayoutEffect:ts,useMemo:ns,useReducer:tn,useRef:kf,useState:function(){return tn(Ht)},useDebugValue:ku,useDeferredValue:function(e,t){var l=pe();return us(l,le.memoizedState,e,t)},useTransition:function(){var e=tn(Ht)[0],t=pe().memoizedState;return[typeof e=="boolean"?e:Wa(e),t]},useSyncExternalStore:Lf,useId:ss,useHostTransitionStatus:ec,useFormState:Jf,useActionState:Jf,useOptimistic:function(e,t){var l=pe();return Vf(l,le,e,t)},useMemoCache:Zu,useCacheRefresh:rs};lc.useEffectEvent=$f;var gs={readContext:De,use:en,useCallback:is,useContext:De,useEffect:Wu,useImperativeHandle:as,useInsertionEffect:es,useLayoutEffect:ts,useMemo:ns,useReducer:Fu,useRef:kf,useState:function(){return Fu(Ht)},useDebugValue:ku,useDeferredValue:function(e,t){var l=pe();return le===null?Pu(l,e,t):us(l,le.memoizedState,e,t)},useTransition:function(){var e=Fu(Ht)[0],t=pe().memoizedState;return[typeof e=="boolean"?e:Wa(e),t]},useSyncExternalStore:Lf,useId:ss,useHostTransitionStatus:ec,useFormState:Wf,useActionState:Wf,useOptimistic:function(e,t){var l=pe();return le!==null?Vf(l,le,e,t):(l.baseState=e,[e,l.queue.dispatch])},useMemoCache:Zu,useCacheRefresh:rs};gs.useEffectEvent=$f;function ac(e,t,l,a){t=e.memoizedState,l=l(a,t),l=l==null?t:w({},t,l),e.memoizedState=l,e.lanes===0&&(e.updateQueue.baseState=l)}var ic={enqueueSetState:function(e,t,l){e=e._reactInternals;var a=nt(),i=al(a);i.payload=t,l!=null&&(i.callback=l),t=il(e,i,a),t!==null&&(Fe(t,e,a),Ka(t,e,a))},enqueueReplaceState:function(e,t,l){e=e._reactInternals;var a=nt(),i=al(a);i.tag=1,i.payload=t,l!=null&&(i.callback=l),t=il(e,i,a),t!==null&&(Fe(t,e,a),Ka(t,e,a))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var l=nt(),a=al(l);a.tag=2,t!=null&&(a.callback=t),t=il(e,a,l),t!==null&&(Fe(t,e,l),Ka(t,e,l))}};function ps(e,t,l,a,i,n,u){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(a,n,u):t.prototype&&t.prototype.isPureReactComponent?!Ha(l,a)||!Ha(i,n):!0}function vs(e,t,l,a){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(l,a),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(l,a),t.state!==e&&ic.enqueueReplaceState(t,t.state,null)}function Gl(e,t){var l=t;if("ref"in t){l={};for(var a in t)a!=="ref"&&(l[a]=t[a])}if(e=e.defaultProps){l===t&&(l=w({},l));for(var i in e)l[i]===void 0&&(l[i]=e[i])}return l}function xs(e){Bi(e)}function Ss(e){console.error(e)}function Es(e){Bi(e)}function un(e,t){try{var l=e.onUncaughtError;l(t.value,{componentStack:t.stack})}catch(a){setTimeout(function(){throw a})}}function Ts(e,t,l){try{var a=e.onCaughtError;a(l.value,{componentStack:l.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(i){setTimeout(function(){throw i})}}function nc(e,t,l){return l=al(l),l.tag=3,l.payload={element:null},l.callback=function(){un(e,t)},l}function bs(e){return e=al(e),e.tag=3,e}function As(e,t,l,a){var i=l.type.getDerivedStateFromError;if(typeof i=="function"){var n=a.value;e.payload=function(){return i(n)},e.callback=function(){Ts(t,l,a)}}var u=l.stateNode;u!==null&&typeof u.componentDidCatch=="function"&&(e.callback=function(){Ts(t,l,a),typeof i!="function"&&(sl===null?sl=new Set([this]):sl.add(this));var c=a.stack;this.componentDidCatch(a.value,{componentStack:c!==null?c:""})})}function Qy(e,t,l,a,i){if(l.flags|=32768,a!==null&&typeof a=="object"&&typeof a.then=="function"){if(t=l.alternate,t!==null&&ia(t,l,i,!0),l=tt.current,l!==null){switch(l.tag){case 31:case 13:return ht===null?vn():l.alternate===null&&ye===0&&(ye=3),l.flags&=-257,l.flags|=65536,l.lanes=i,a===Ki?l.flags|=16384:(t=l.updateQueue,t===null?l.updateQueue=new Set([a]):t.add(a),zc(e,a,i)),!1;case 22:return l.flags|=65536,a===Ki?l.flags|=16384:(t=l.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([a])},l.updateQueue=t):(l=t.retryQueue,l===null?t.retryQueue=new Set([a]):l.add(a)),zc(e,a,i)),!1}throw Error(m(435,l.tag))}return zc(e,a,i),vn(),!1}if(Z)return t=tt.current,t!==null?((t.flags&65536)===0&&(t.flags|=256),t.flags|=65536,t.lanes=i,a!==Au&&(e=Error(m(422),{cause:a}),Va(st(e,l)))):(a!==Au&&(t=Error(m(423),{cause:a}),Va(st(t,l))),e=e.current.alternate,e.flags|=65536,i&=-i,e.lanes|=i,a=st(a,l),i=nc(e.stateNode,a,i),Lu(e,i),ye!==4&&(ye=2)),!1;var n=Error(m(520),{cause:a});if(n=st(n,l),ui===null?ui=[n]:ui.push(n),ye!==4&&(ye=2),t===null)return!0;a=st(a,l),l=t;do{switch(l.tag){case 3:return l.flags|=65536,e=i&-i,l.lanes|=e,e=nc(l.stateNode,a,e),Lu(l,e),!1;case 1:if(t=l.type,n=l.stateNode,(l.flags&128)===0&&(typeof t.getDerivedStateFromError=="function"||n!==null&&typeof n.componentDidCatch=="function"&&(sl===null||!sl.has(n))))return l.flags|=65536,i&=-i,l.lanes|=i,i=bs(i),As(i,e,l,a),Lu(l,i),!1}l=l.return}while(l!==null);return!1}var uc=Error(m(461)),Se=!1;function Me(e,t,l,a){t.child=e===null?Mf(t,null,l,a):Ll(t,e.child,l,a)}function Cs(e,t,l,a,i){l=l.render;var n=t.ref;if("ref"in a){var u={};for(var c in a)c!=="ref"&&(u[c]=a[c])}else u=a;return _l(t),a=Vu(e,t,l,u,n,i),c=ju(),e!==null&&!Se?(Xu(e,t,i),qt(e,t,i)):(Z&&c&&Tu(t),t.flags|=1,Me(e,t,a,i),t.child)}function Os(e,t,l,a,i){if(e===null){var n=l.type;return typeof n=="function"&&!xu(n)&&n.defaultProps===void 0&&l.compare===null?(t.tag=15,t.type=n,Ds(e,t,n,a,i)):(e=Yi(l.type,null,a,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(n=e.child,!hc(e,i)){var u=n.memoizedProps;if(l=l.compare,l=l!==null?l:Ha,l(u,a)&&e.ref===t.ref)return qt(e,t,i)}return t.flags|=1,e=wt(n,a),e.ref=t.ref,e.return=t,t.child=e}function Ds(e,t,l,a,i){if(e!==null){var n=e.memoizedProps;if(Ha(n,a)&&e.ref===t.ref)if(Se=!1,t.pendingProps=a=n,hc(e,i))(e.flags&131072)!==0&&(Se=!0);else return t.lanes=e.lanes,qt(e,t,i)}return cc(e,t,l,a,i)}function Ms(e,t,l,a){var i=a.children,n=e!==null?e.memoizedState:null;if(e===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),a.mode==="hidden"){if((t.flags&128)!==0){if(n=n!==null?n.baseLanes|l:l,e!==null){for(a=t.child=e.child,i=0;a!==null;)i=i|a.lanes|a.childLanes,a=a.sibling;a=i&~n}else a=0,t.child=null;return Rs(e,t,n,l,a)}if((l&536870912)!==0)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&Qi(t,n!==null?n.cachePool:null),n!==null?_f(t,n):Gu(),Nf(t);else return a=t.lanes=536870912,Rs(e,t,n!==null?n.baseLanes|l:l,l,a)}else n!==null?(Qi(t,n.cachePool),_f(t,n),ul(),t.memoizedState=null):(e!==null&&Qi(t,null),Gu(),ul());return Me(e,t,i,l),t.child}function $a(e,t){return e!==null&&e.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function Rs(e,t,l,a,i){var n=_u();return n=n===null?null:{parent:ve._currentValue,pool:n},t.memoizedState={baseLanes:l,cachePool:n},e!==null&&Qi(t,null),Gu(),Nf(t),e!==null&&ia(e,t,a,!0),t.childLanes=i,null}function cn(e,t){return t=fn({mode:t.mode,children:t.children},e.mode),t.ref=e.ref,e.child=t,t.return=e,t}function zs(e,t,l){return Ll(t,e.child,null,l),e=cn(t,t.pendingProps),e.flags|=2,lt(t),t.memoizedState=null,e}function Zy(e,t,l){var a=t.pendingProps,i=(t.flags&128)!==0;if(t.flags&=-129,e===null){if(Z){if(a.mode==="hidden")return e=cn(t,a),t.lanes=536870912,$a(null,e);if(qu(t),(e=ce)?(e=jr(e,yt),e=e!==null&&e.data==="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:Pt!==null?{id:At,overflow:Ct}:null,retryLane:536870912,hydrationErrors:null},l=yf(e),l.return=t,t.child=l,Oe=t,ce=null)):e=null,e===null)throw el(t);return t.lanes=536870912,null}return cn(t,a)}var n=e.memoizedState;if(n!==null){var u=n.dehydrated;if(qu(t),i)if(t.flags&256)t.flags&=-257,t=zs(e,t,l);else if(t.memoizedState!==null)t.child=e.child,t.flags|=128,t=null;else throw Error(m(558));else if(Se||ia(e,t,l,!1),i=(l&e.childLanes)!==0,Se||i){if(a=ue,a!==null&&(u=xo(a,l),u!==0&&u!==n.retryLane))throw n.retryLane=u,Dl(e,u),Fe(a,e,u),uc;vn(),t=zs(e,t,l)}else e=n.treeContext,ce=mt(u.nextSibling),Oe=t,Z=!0,$t=null,yt=!1,e!==null&&gf(t,e),t=cn(t,a),t.flags|=4096;return t}return e=wt(e.child,{mode:a.mode,children:a.children}),e.ref=t.ref,t.child=e,e.return=t,e}function on(e,t){var l=t.ref;if(l===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof l!="function"&&typeof l!="object")throw Error(m(284));(e===null||e.ref!==l)&&(t.flags|=4194816)}}function cc(e,t,l,a,i){return _l(t),l=Vu(e,t,l,a,void 0,i),a=ju(),e!==null&&!Se?(Xu(e,t,i),qt(e,t,i)):(Z&&a&&Tu(t),t.flags|=1,Me(e,t,l,i),t.child)}function _s(e,t,l,a,i,n){return _l(t),t.updateQueue=null,l=Uf(t,a,l,i),wf(e),a=ju(),e!==null&&!Se?(Xu(e,t,n),qt(e,t,n)):(Z&&a&&Tu(t),t.flags|=1,Me(e,t,l,n),t.child)}function Ns(e,t,l,a,i){if(_l(t),t.stateNode===null){var n=ea,u=l.contextType;typeof u=="object"&&u!==null&&(n=De(u)),n=new l(a,n),t.memoizedState=n.state!==null&&n.state!==void 0?n.state:null,n.updater=ic,t.stateNode=n,n._reactInternals=t,n=t.stateNode,n.props=a,n.state=t.memoizedState,n.refs={},wu(t),u=l.contextType,n.context=typeof u=="object"&&u!==null?De(u):ea,n.state=t.memoizedState,u=l.getDerivedStateFromProps,typeof u=="function"&&(ac(t,l,u,a),n.state=t.memoizedState),typeof l.getDerivedStateFromProps=="function"||typeof n.getSnapshotBeforeUpdate=="function"||typeof n.UNSAFE_componentWillMount!="function"&&typeof n.componentWillMount!="function"||(u=n.state,typeof n.componentWillMount=="function"&&n.componentWillMount(),typeof n.UNSAFE_componentWillMount=="function"&&n.UNSAFE_componentWillMount(),u!==n.state&&ic.enqueueReplaceState(n,n.state,null),Ja(t,a,n,i),Fa(),n.state=t.memoizedState),typeof n.componentDidMount=="function"&&(t.flags|=4194308),a=!0}else if(e===null){n=t.stateNode;var c=t.memoizedProps,o=Gl(l,c);n.props=o;var y=n.context,p=l.contextType;u=ea,typeof p=="object"&&p!==null&&(u=De(p));var S=l.getDerivedStateFromProps;p=typeof S=="function"||typeof n.getSnapshotBeforeUpdate=="function",c=t.pendingProps!==c,p||typeof n.UNSAFE_componentWillReceiveProps!="function"&&typeof n.componentWillReceiveProps!="function"||(c||y!==u)&&vs(t,n,a,u),ll=!1;var h=t.memoizedState;n.state=h,Ja(t,a,n,i),Fa(),y=t.memoizedState,c||h!==y||ll?(typeof S=="function"&&(ac(t,l,S,a),y=t.memoizedState),(o=ll||ps(t,l,o,a,h,y,u))?(p||typeof n.UNSAFE_componentWillMount!="function"&&typeof n.componentWillMount!="function"||(typeof n.componentWillMount=="function"&&n.componentWillMount(),typeof n.UNSAFE_componentWillMount=="function"&&n.UNSAFE_componentWillMount()),typeof n.componentDidMount=="function"&&(t.flags|=4194308)):(typeof n.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=a,t.memoizedState=y),n.props=a,n.state=y,n.context=u,a=o):(typeof n.componentDidMount=="function"&&(t.flags|=4194308),a=!1)}else{n=t.stateNode,Uu(e,t),u=t.memoizedProps,p=Gl(l,u),n.props=p,S=t.pendingProps,h=n.context,y=l.contextType,o=ea,typeof y=="object"&&y!==null&&(o=De(y)),c=l.getDerivedStateFromProps,(y=typeof c=="function"||typeof n.getSnapshotBeforeUpdate=="function")||typeof n.UNSAFE_componentWillReceiveProps!="function"&&typeof n.componentWillReceiveProps!="function"||(u!==S||h!==o)&&vs(t,n,a,o),ll=!1,h=t.memoizedState,n.state=h,Ja(t,a,n,i),Fa();var g=t.memoizedState;u!==S||h!==g||ll||e!==null&&e.dependencies!==null&&ji(e.dependencies)?(typeof c=="function"&&(ac(t,l,c,a),g=t.memoizedState),(p=ll||ps(t,l,p,a,h,g,o)||e!==null&&e.dependencies!==null&&ji(e.dependencies))?(y||typeof n.UNSAFE_componentWillUpdate!="function"&&typeof n.componentWillUpdate!="function"||(typeof n.componentWillUpdate=="function"&&n.componentWillUpdate(a,g,o),typeof n.UNSAFE_componentWillUpdate=="function"&&n.UNSAFE_componentWillUpdate(a,g,o)),typeof n.componentDidUpdate=="function"&&(t.flags|=4),typeof n.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof n.componentDidUpdate!="function"||u===e.memoizedProps&&h===e.memoizedState||(t.flags|=4),typeof n.getSnapshotBeforeUpdate!="function"||u===e.memoizedProps&&h===e.memoizedState||(t.flags|=1024),t.memoizedProps=a,t.memoizedState=g),n.props=a,n.state=g,n.context=o,a=p):(typeof n.componentDidUpdate!="function"||u===e.memoizedProps&&h===e.memoizedState||(t.flags|=4),typeof n.getSnapshotBeforeUpdate!="function"||u===e.memoizedProps&&h===e.memoizedState||(t.flags|=1024),a=!1)}return n=a,on(e,t),a=(t.flags&128)!==0,n||a?(n=t.stateNode,l=a&&typeof l.getDerivedStateFromError!="function"?null:n.render(),t.flags|=1,e!==null&&a?(t.child=Ll(t,e.child,null,i),t.child=Ll(t,null,l,i)):Me(e,t,l,i),t.memoizedState=n.state,e=t.child):e=qt(e,t,i),e}function ws(e,t,l,a){return Rl(),t.flags|=256,Me(e,t,l,a),t.child}var oc={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function fc(e){return{baseLanes:e,cachePool:Tf()}}function sc(e,t,l){return e=e!==null?e.childLanes&~l:0,t&&(e|=it),e}function Us(e,t,l){var a=t.pendingProps,i=!1,n=(t.flags&128)!==0,u;if((u=n)||(u=e!==null&&e.memoizedState===null?!1:(ge.current&2)!==0),u&&(i=!0,t.flags&=-129),u=(t.flags&32)!==0,t.flags&=-33,e===null){if(Z){if(i?nl(t):ul(),(e=ce)?(e=jr(e,yt),e=e!==null&&e.data!=="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:Pt!==null?{id:At,overflow:Ct}:null,retryLane:536870912,hydrationErrors:null},l=yf(e),l.return=t,t.child=l,Oe=t,ce=null)):e=null,e===null)throw el(t);return Kc(e)?t.lanes=32:t.lanes=536870912,null}var c=a.children;return a=a.fallback,i?(ul(),i=t.mode,c=fn({mode:"hidden",children:c},i),a=Ml(a,i,l,null),c.return=t,a.return=t,c.sibling=a,t.child=c,a=t.child,a.memoizedState=fc(l),a.childLanes=sc(e,u,l),t.memoizedState=oc,$a(null,a)):(nl(t),rc(t,c))}var o=e.memoizedState;if(o!==null&&(c=o.dehydrated,c!==null)){if(n)t.flags&256?(nl(t),t.flags&=-257,t=dc(e,t,l)):t.memoizedState!==null?(ul(),t.child=e.child,t.flags|=128,t=null):(ul(),c=a.fallback,i=t.mode,a=fn({mode:"visible",children:a.children},i),c=Ml(c,i,l,null),c.flags|=2,a.return=t,c.return=t,a.sibling=c,t.child=a,Ll(t,e.child,null,l),a=t.child,a.memoizedState=fc(l),a.childLanes=sc(e,u,l),t.memoizedState=oc,t=$a(null,a));else if(nl(t),Kc(c)){if(u=c.nextSibling&&c.nextSibling.dataset,u)var y=u.dgst;u=y,a=Error(m(419)),a.stack="",a.digest=u,Va({value:a,source:null,stack:null}),t=dc(e,t,l)}else if(Se||ia(e,t,l,!1),u=(l&e.childLanes)!==0,Se||u){if(u=ue,u!==null&&(a=xo(u,l),a!==0&&a!==o.retryLane))throw o.retryLane=a,Dl(e,a),Fe(u,e,a),uc;Zc(c)||vn(),t=dc(e,t,l)}else Zc(c)?(t.flags|=192,t.child=e.child,t=null):(e=o.treeContext,ce=mt(c.nextSibling),Oe=t,Z=!0,$t=null,yt=!1,e!==null&&gf(t,e),t=rc(t,a.children),t.flags|=4096);return t}return i?(ul(),c=a.fallback,i=t.mode,o=e.child,y=o.sibling,a=wt(o,{mode:"hidden",children:a.children}),a.subtreeFlags=o.subtreeFlags&65011712,y!==null?c=wt(y,c):(c=Ml(c,i,l,null),c.flags|=2),c.return=t,a.return=t,a.sibling=c,t.child=a,$a(null,a),a=t.child,c=e.child.memoizedState,c===null?c=fc(l):(i=c.cachePool,i!==null?(o=ve._currentValue,i=i.parent!==o?{parent:o,pool:o}:i):i=Tf(),c={baseLanes:c.baseLanes|l,cachePool:i}),a.memoizedState=c,a.childLanes=sc(e,u,l),t.memoizedState=oc,$a(e.child,a)):(nl(t),l=e.child,e=l.sibling,l=wt(l,{mode:"visible",children:a.children}),l.return=t,l.sibling=null,e!==null&&(u=t.deletions,u===null?(t.deletions=[e],t.flags|=16):u.push(e)),t.child=l,t.memoizedState=null,l)}function rc(e,t){return t=fn({mode:"visible",children:t},e.mode),t.return=e,e.child=t}function fn(e,t){return e=et(22,e,null,t),e.lanes=0,e}function dc(e,t,l){return Ll(t,e.child,null,l),e=rc(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Ls(e,t,l){e.lanes|=t;var a=e.alternate;a!==null&&(a.lanes|=t),Du(e.return,t,l)}function yc(e,t,l,a,i,n){var u=e.memoizedState;u===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:a,tail:l,tailMode:i,treeForkCount:n}:(u.isBackwards=t,u.rendering=null,u.renderingStartTime=0,u.last=a,u.tail=l,u.tailMode=i,u.treeForkCount=n)}function Bs(e,t,l){var a=t.pendingProps,i=a.revealOrder,n=a.tail;a=a.children;var u=ge.current,c=(u&2)!==0;if(c?(u=u&1|2,t.flags|=128):u&=1,A(ge,u),Me(e,t,a,l),a=Z?Ya:0,!c&&e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Ls(e,l,t);else if(e.tag===19)Ls(e,l,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(i){case"forwards":for(l=t.child,i=null;l!==null;)e=l.alternate,e!==null&&Wi(e)===null&&(i=l),l=l.sibling;l=i,l===null?(i=t.child,t.child=null):(i=l.sibling,l.sibling=null),yc(t,!1,i,l,n,a);break;case"backwards":case"unstable_legacy-backwards":for(l=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&Wi(e)===null){t.child=i;break}e=i.sibling,i.sibling=l,l=i,i=e}yc(t,!0,l,null,n,a);break;case"together":yc(t,!1,null,null,void 0,a);break;default:t.memoizedState=null}return t.child}function qt(e,t,l){if(e!==null&&(t.dependencies=e.dependencies),fl|=t.lanes,(l&t.childLanes)===0)if(e!==null){if(ia(e,t,l,!1),(l&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(m(153));if(t.child!==null){for(e=t.child,l=wt(e,e.pendingProps),t.child=l,l.return=t;e.sibling!==null;)e=e.sibling,l=l.sibling=wt(e,e.pendingProps),l.return=t;l.sibling=null}return t.child}function hc(e,t){return(e.lanes&t)!==0?!0:(e=e.dependencies,!!(e!==null&&ji(e)))}function Ky(e,t,l){switch(t.tag){case 3:Ue(t,t.stateNode.containerInfo),tl(t,ve,e.memoizedState.cache),Rl();break;case 27:case 5:Ca(t);break;case 4:Ue(t,t.stateNode.containerInfo);break;case 10:tl(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,qu(t),null;break;case 13:var a=t.memoizedState;if(a!==null)return a.dehydrated!==null?(nl(t),t.flags|=128,null):(l&t.child.childLanes)!==0?Us(e,t,l):(nl(t),e=qt(e,t,l),e!==null?e.sibling:null);nl(t);break;case 19:var i=(e.flags&128)!==0;if(a=(l&t.childLanes)!==0,a||(ia(e,t,l,!1),a=(l&t.childLanes)!==0),i){if(a)return Bs(e,t,l);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),A(ge,ge.current),a)break;return null;case 22:return t.lanes=0,Ms(e,t,l,t.pendingProps);case 24:tl(t,ve,e.memoizedState.cache)}return qt(e,t,l)}function Gs(e,t,l){if(e!==null)if(e.memoizedProps!==t.pendingProps)Se=!0;else{if(!hc(e,l)&&(t.flags&128)===0)return Se=!1,Ky(e,t,l);Se=(e.flags&131072)!==0}else Se=!1,Z&&(t.flags&1048576)!==0&&mf(t,Ya,t.index);switch(t.lanes=0,t.tag){case 16:e:{var a=t.pendingProps;if(e=wl(t.elementType),t.type=e,typeof e=="function")xu(e)?(a=Gl(e,a),t.tag=1,t=Ns(null,t,e,a,l)):(t.tag=0,t=cc(null,t,e,a,l));else{if(e!=null){var i=e.$$typeof;if(i===ut){t.tag=11,t=Cs(null,t,e,a,l);break e}else if(i===Q){t.tag=14,t=Os(null,t,e,a,l);break e}}throw t=Rt(e)||e,Error(m(306,t,""))}}return t;case 0:return cc(e,t,t.type,t.pendingProps,l);case 1:return a=t.type,i=Gl(a,t.pendingProps),Ns(e,t,a,i,l);case 3:e:{if(Ue(t,t.stateNode.containerInfo),e===null)throw Error(m(387));a=t.pendingProps;var n=t.memoizedState;i=n.element,Uu(e,t),Ja(t,a,null,l);var u=t.memoizedState;if(a=u.cache,tl(t,ve,a),a!==n.cache&&Mu(t,[ve],l,!0),Fa(),a=u.element,n.isDehydrated)if(n={element:a,isDehydrated:!1,cache:u.cache},t.updateQueue.baseState=n,t.memoizedState=n,t.flags&256){t=ws(e,t,a,l);break e}else if(a!==i){i=st(Error(m(424)),t),Va(i),t=ws(e,t,a,l);break e}else{switch(e=t.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(ce=mt(e.firstChild),Oe=t,Z=!0,$t=null,yt=!0,l=Mf(t,null,a,l),t.child=l;l;)l.flags=l.flags&-3|4096,l=l.sibling}else{if(Rl(),a===i){t=qt(e,t,l);break e}Me(e,t,a,l)}t=t.child}return t;case 26:return on(e,t),e===null?(l=Jr(t.type,null,t.pendingProps,null))?t.memoizedState=l:Z||(l=t.type,e=t.pendingProps,a=Cn(q.current).createElement(l),a[Ce]=t,a[Ve]=e,Re(a,l,e),be(a),t.stateNode=a):t.memoizedState=Jr(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return Ca(t),e===null&&Z&&(a=t.stateNode=Zr(t.type,t.pendingProps,q.current),Oe=t,yt=!0,i=ce,hl(t.type)?(Fc=i,ce=mt(a.firstChild)):ce=i),Me(e,t,t.pendingProps.children,l),on(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&Z&&((i=a=ce)&&(a=T0(a,t.type,t.pendingProps,yt),a!==null?(t.stateNode=a,Oe=t,ce=mt(a.firstChild),yt=!1,i=!0):i=!1),i||el(t)),Ca(t),i=t.type,n=t.pendingProps,u=e!==null?e.memoizedProps:null,a=n.children,jc(i,n)?a=null:u!==null&&jc(i,u)&&(t.flags|=32),t.memoizedState!==null&&(i=Vu(e,t,Gy,null,null,l),hi._currentValue=i),on(e,t),Me(e,t,a,l),t.child;case 6:return e===null&&Z&&((e=l=ce)&&(l=b0(l,t.pendingProps,yt),l!==null?(t.stateNode=l,Oe=t,ce=null,e=!0):e=!1),e||el(t)),null;case 13:return Us(e,t,l);case 4:return Ue(t,t.stateNode.containerInfo),a=t.pendingProps,e===null?t.child=Ll(t,null,a,l):Me(e,t,a,l),t.child;case 11:return Cs(e,t,t.type,t.pendingProps,l);case 7:return Me(e,t,t.pendingProps,l),t.child;case 8:return Me(e,t,t.pendingProps.children,l),t.child;case 12:return Me(e,t,t.pendingProps.children,l),t.child;case 10:return a=t.pendingProps,tl(t,t.type,a.value),Me(e,t,a.children,l),t.child;case 9:return i=t.type._context,a=t.pendingProps.children,_l(t),i=De(i),a=a(i),t.flags|=1,Me(e,t,a,l),t.child;case 14:return Os(e,t,t.type,t.pendingProps,l);case 15:return Ds(e,t,t.type,t.pendingProps,l);case 19:return Bs(e,t,l);case 31:return Zy(e,t,l);case 22:return Ms(e,t,l,t.pendingProps);case 24:return _l(t),a=De(ve),e===null?(i=_u(),i===null&&(i=ue,n=Ru(),i.pooledCache=n,n.refCount++,n!==null&&(i.pooledCacheLanes|=l),i=n),t.memoizedState={parent:a,cache:i},wu(t),tl(t,ve,i)):((e.lanes&l)!==0&&(Uu(e,t),Ja(t,null,null,l),Fa()),i=e.memoizedState,n=t.memoizedState,i.parent!==a?(i={parent:a,cache:a},t.memoizedState=i,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=i),tl(t,ve,a)):(a=n.cache,tl(t,ve,a),a!==i.cache&&Mu(t,[ve],l,!0))),Me(e,t,t.pendingProps.children,l),t.child;case 29:throw t.pendingProps}throw Error(m(156,t.tag))}function Yt(e){e.flags|=4}function mc(e,t,l,a,i){if((t=(e.mode&32)!==0)&&(t=!1),t){if(e.flags|=16777216,(i&335544128)===i)if(e.stateNode.complete)e.flags|=8192;else if(sr())e.flags|=8192;else throw Ul=Ki,Nu}else e.flags&=-16777217}function Hs(e,t){if(t.type!=="stylesheet"||(t.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!$r(t))if(sr())e.flags|=8192;else throw Ul=Ki,Nu}function sn(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag!==22?go():536870912,e.lanes|=t,ga|=t)}function ei(e,t){if(!Z)switch(e.tailMode){case"hidden":t=e.tail;for(var l=null;t!==null;)t.alternate!==null&&(l=t),t=t.sibling;l===null?e.tail=null:l.sibling=null;break;case"collapsed":l=e.tail;for(var a=null;l!==null;)l.alternate!==null&&(a=l),l=l.sibling;a===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:a.sibling=null}}function oe(e){var t=e.alternate!==null&&e.alternate.child===e.child,l=0,a=0;if(t)for(var i=e.child;i!==null;)l|=i.lanes|i.childLanes,a|=i.subtreeFlags&65011712,a|=i.flags&65011712,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)l|=i.lanes|i.childLanes,a|=i.subtreeFlags,a|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=a,e.childLanes=l,t}function Fy(e,t,l){var a=t.pendingProps;switch(bu(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return oe(t),null;case 1:return oe(t),null;case 3:return l=t.stateNode,a=null,e!==null&&(a=e.memoizedState.cache),t.memoizedState.cache!==a&&(t.flags|=2048),Bt(ve),me(),l.pendingContext&&(l.context=l.pendingContext,l.pendingContext=null),(e===null||e.child===null)&&(aa(t)?Yt(t):e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,Cu())),oe(t),null;case 26:var i=t.type,n=t.memoizedState;return e===null?(Yt(t),n!==null?(oe(t),Hs(t,n)):(oe(t),mc(t,i,null,a,l))):n?n!==e.memoizedState?(Yt(t),oe(t),Hs(t,n)):(oe(t),t.flags&=-16777217):(e=e.memoizedProps,e!==a&&Yt(t),oe(t),mc(t,i,e,a,l)),null;case 27:if(Si(t),l=q.current,i=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==a&&Yt(t);else{if(!a){if(t.stateNode===null)throw Error(m(166));return oe(t),null}e=D.current,aa(t)?pf(t):(e=Zr(i,a,l),t.stateNode=e,Yt(t))}return oe(t),null;case 5:if(Si(t),i=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==a&&Yt(t);else{if(!a){if(t.stateNode===null)throw Error(m(166));return oe(t),null}if(n=D.current,aa(t))pf(t);else{var u=Cn(q.current);switch(n){case 1:n=u.createElementNS("http://www.w3.org/2000/svg",i);break;case 2:n=u.createElementNS("http://www.w3.org/1998/Math/MathML",i);break;default:switch(i){case"svg":n=u.createElementNS("http://www.w3.org/2000/svg",i);break;case"math":n=u.createElementNS("http://www.w3.org/1998/Math/MathML",i);break;case"script":n=u.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild);break;case"select":n=typeof a.is=="string"?u.createElement("select",{is:a.is}):u.createElement("select"),a.multiple?n.multiple=!0:a.size&&(n.size=a.size);break;default:n=typeof a.is=="string"?u.createElement(i,{is:a.is}):u.createElement(i)}}n[Ce]=t,n[Ve]=a;e:for(u=t.child;u!==null;){if(u.tag===5||u.tag===6)n.appendChild(u.stateNode);else if(u.tag!==4&&u.tag!==27&&u.child!==null){u.child.return=u,u=u.child;continue}if(u===t)break e;for(;u.sibling===null;){if(u.return===null||u.return===t)break e;u=u.return}u.sibling.return=u.return,u=u.sibling}t.stateNode=n;e:switch(Re(n,i,a),i){case"button":case"input":case"select":case"textarea":a=!!a.autoFocus;break e;case"img":a=!0;break e;default:a=!1}a&&Yt(t)}}return oe(t),mc(t,t.type,e===null?null:e.memoizedProps,t.pendingProps,l),null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==a&&Yt(t);else{if(typeof a!="string"&&t.stateNode===null)throw Error(m(166));if(e=q.current,aa(t)){if(e=t.stateNode,l=t.memoizedProps,a=null,i=Oe,i!==null)switch(i.tag){case 27:case 5:a=i.memoizedProps}e[Ce]=t,e=!!(e.nodeValue===l||a!==null&&a.suppressHydrationWarning===!0||Ur(e.nodeValue,l)),e||el(t,!0)}else e=Cn(e).createTextNode(a),e[Ce]=t,t.stateNode=e}return oe(t),null;case 31:if(l=t.memoizedState,e===null||e.memoizedState!==null){if(a=aa(t),l!==null){if(e===null){if(!a)throw Error(m(318));if(e=t.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(m(557));e[Ce]=t}else Rl(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;oe(t),e=!1}else l=Cu(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=l),e=!0;if(!e)return t.flags&256?(lt(t),t):(lt(t),null);if((t.flags&128)!==0)throw Error(m(558))}return oe(t),null;case 13:if(a=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(i=aa(t),a!==null&&a.dehydrated!==null){if(e===null){if(!i)throw Error(m(318));if(i=t.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(m(317));i[Ce]=t}else Rl(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;oe(t),i=!1}else i=Cu(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=i),i=!0;if(!i)return t.flags&256?(lt(t),t):(lt(t),null)}return lt(t),(t.flags&128)!==0?(t.lanes=l,t):(l=a!==null,e=e!==null&&e.memoizedState!==null,l&&(a=t.child,i=null,a.alternate!==null&&a.alternate.memoizedState!==null&&a.alternate.memoizedState.cachePool!==null&&(i=a.alternate.memoizedState.cachePool.pool),n=null,a.memoizedState!==null&&a.memoizedState.cachePool!==null&&(n=a.memoizedState.cachePool.pool),n!==i&&(a.flags|=2048)),l!==e&&l&&(t.child.flags|=8192),sn(t,t.updateQueue),oe(t),null);case 4:return me(),e===null&&Gc(t.stateNode.containerInfo),oe(t),null;case 10:return Bt(t.type),oe(t),null;case 19:if(E(ge),a=t.memoizedState,a===null)return oe(t),null;if(i=(t.flags&128)!==0,n=a.rendering,n===null)if(i)ei(a,!1);else{if(ye!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(n=Wi(e),n!==null){for(t.flags|=128,ei(a,!1),e=n.updateQueue,t.updateQueue=e,sn(t,e),t.subtreeFlags=0,e=l,l=t.child;l!==null;)df(l,e),l=l.sibling;return A(ge,ge.current&1|2),Z&&Ut(t,a.treeForkCount),t.child}e=e.sibling}a.tail!==null&&We()>mn&&(t.flags|=128,i=!0,ei(a,!1),t.lanes=4194304)}else{if(!i)if(e=Wi(n),e!==null){if(t.flags|=128,i=!0,e=e.updateQueue,t.updateQueue=e,sn(t,e),ei(a,!0),a.tail===null&&a.tailMode==="hidden"&&!n.alternate&&!Z)return oe(t),null}else 2*We()-a.renderingStartTime>mn&&l!==536870912&&(t.flags|=128,i=!0,ei(a,!1),t.lanes=4194304);a.isBackwards?(n.sibling=t.child,t.child=n):(e=a.last,e!==null?e.sibling=n:t.child=n,a.last=n)}return a.tail!==null?(e=a.tail,a.rendering=e,a.tail=e.sibling,a.renderingStartTime=We(),e.sibling=null,l=ge.current,A(ge,i?l&1|2:l&1),Z&&Ut(t,a.treeForkCount),e):(oe(t),null);case 22:case 23:return lt(t),Hu(),a=t.memoizedState!==null,e!==null?e.memoizedState!==null!==a&&(t.flags|=8192):a&&(t.flags|=8192),a?(l&536870912)!==0&&(t.flags&128)===0&&(oe(t),t.subtreeFlags&6&&(t.flags|=8192)):oe(t),l=t.updateQueue,l!==null&&sn(t,l.retryQueue),l=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(l=e.memoizedState.cachePool.pool),a=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),a!==l&&(t.flags|=2048),e!==null&&E(Nl),null;case 24:return l=null,e!==null&&(l=e.memoizedState.cache),t.memoizedState.cache!==l&&(t.flags|=2048),Bt(ve),oe(t),null;case 25:return null;case 30:return null}throw Error(m(156,t.tag))}function Jy(e,t){switch(bu(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Bt(ve),me(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return Si(t),null;case 31:if(t.memoizedState!==null){if(lt(t),t.alternate===null)throw Error(m(340));Rl()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 13:if(lt(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(m(340));Rl()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return E(ge),null;case 4:return me(),null;case 10:return Bt(t.type),null;case 22:case 23:return lt(t),Hu(),e!==null&&E(Nl),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return Bt(ve),null;case 25:return null;default:return null}}function qs(e,t){switch(bu(t),t.tag){case 3:Bt(ve),me();break;case 26:case 27:case 5:Si(t);break;case 4:me();break;case 31:t.memoizedState!==null&&lt(t);break;case 13:lt(t);break;case 19:E(ge);break;case 10:Bt(t.type);break;case 22:case 23:lt(t),Hu(),e!==null&&E(Nl);break;case 24:Bt(ve)}}function ti(e,t){try{var l=t.updateQueue,a=l!==null?l.lastEffect:null;if(a!==null){var i=a.next;l=i;do{if((l.tag&e)===e){a=void 0;var n=l.create,u=l.inst;a=n(),u.destroy=a}l=l.next}while(l!==i)}}catch(c){ee(t,t.return,c)}}function cl(e,t,l){try{var a=t.updateQueue,i=a!==null?a.lastEffect:null;if(i!==null){var n=i.next;a=n;do{if((a.tag&e)===e){var u=a.inst,c=u.destroy;if(c!==void 0){u.destroy=void 0,i=t;var o=l,y=c;try{y()}catch(p){ee(i,o,p)}}}a=a.next}while(a!==n)}}catch(p){ee(t,t.return,p)}}function Ys(e){var t=e.updateQueue;if(t!==null){var l=e.stateNode;try{zf(t,l)}catch(a){ee(e,e.return,a)}}}function Vs(e,t,l){l.props=Gl(e.type,e.memoizedProps),l.state=e.memoizedState;try{l.componentWillUnmount()}catch(a){ee(e,t,a)}}function li(e,t){try{var l=e.ref;if(l!==null){switch(e.tag){case 26:case 27:case 5:var a=e.stateNode;break;case 30:a=e.stateNode;break;default:a=e.stateNode}typeof l=="function"?e.refCleanup=l(a):l.current=a}}catch(i){ee(e,t,i)}}function Ot(e,t){var l=e.ref,a=e.refCleanup;if(l!==null)if(typeof a=="function")try{a()}catch(i){ee(e,t,i)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof l=="function")try{l(null)}catch(i){ee(e,t,i)}else l.current=null}function js(e){var t=e.type,l=e.memoizedProps,a=e.stateNode;try{e:switch(t){case"button":case"input":case"select":case"textarea":l.autoFocus&&a.focus();break e;case"img":l.src?a.src=l.src:l.srcSet&&(a.srcset=l.srcSet)}}catch(i){ee(e,e.return,i)}}function gc(e,t,l){try{var a=e.stateNode;g0(a,e.type,l,t),a[Ve]=t}catch(i){ee(e,e.return,i)}}function Xs(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&hl(e.type)||e.tag===4}function pc(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Xs(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&hl(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function vc(e,t,l){var a=e.tag;if(a===5||a===6)e=e.stateNode,t?(l.nodeType===9?l.body:l.nodeName==="HTML"?l.ownerDocument.body:l).insertBefore(e,t):(t=l.nodeType===9?l.body:l.nodeName==="HTML"?l.ownerDocument.body:l,t.appendChild(e),l=l._reactRootContainer,l!=null||t.onclick!==null||(t.onclick=_t));else if(a!==4&&(a===27&&hl(e.type)&&(l=e.stateNode,t=null),e=e.child,e!==null))for(vc(e,t,l),e=e.sibling;e!==null;)vc(e,t,l),e=e.sibling}function rn(e,t,l){var a=e.tag;if(a===5||a===6)e=e.stateNode,t?l.insertBefore(e,t):l.appendChild(e);else if(a!==4&&(a===27&&hl(e.type)&&(l=e.stateNode),e=e.child,e!==null))for(rn(e,t,l),e=e.sibling;e!==null;)rn(e,t,l),e=e.sibling}function Qs(e){var t=e.stateNode,l=e.memoizedProps;try{for(var a=e.type,i=t.attributes;i.length;)t.removeAttributeNode(i[0]);Re(t,a,l),t[Ce]=e,t[Ve]=l}catch(n){ee(e,e.return,n)}}var Vt=!1,Ee=!1,xc=!1,Zs=typeof WeakSet=="function"?WeakSet:Set,Ae=null;function Iy(e,t){if(e=e.containerInfo,Yc=Nn,e=lf(e),du(e)){if("selectionStart"in e)var l={start:e.selectionStart,end:e.selectionEnd};else e:{l=(l=e.ownerDocument)&&l.defaultView||window;var a=l.getSelection&&l.getSelection();if(a&&a.rangeCount!==0){l=a.anchorNode;var i=a.anchorOffset,n=a.focusNode;a=a.focusOffset;try{l.nodeType,n.nodeType}catch{l=null;break e}var u=0,c=-1,o=-1,y=0,p=0,S=e,h=null;t:for(;;){for(var g;S!==l||i!==0&&S.nodeType!==3||(c=u+i),S!==n||a!==0&&S.nodeType!==3||(o=u+a),S.nodeType===3&&(u+=S.nodeValue.length),(g=S.firstChild)!==null;)h=S,S=g;for(;;){if(S===e)break t;if(h===l&&++y===i&&(c=u),h===n&&++p===a&&(o=u),(g=S.nextSibling)!==null)break;S=h,h=S.parentNode}S=g}l=c===-1||o===-1?null:{start:c,end:o}}else l=null}l=l||{start:0,end:0}}else l=null;for(Vc={focusedElem:e,selectionRange:l},Nn=!1,Ae=t;Ae!==null;)if(t=Ae,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,Ae=e;else for(;Ae!==null;){switch(t=Ae,n=t.alternate,e=t.flags,t.tag){case 0:if((e&4)!==0&&(e=t.updateQueue,e=e!==null?e.events:null,e!==null))for(l=0;l<e.length;l++)i=e[l],i.ref.impl=i.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&n!==null){e=void 0,l=t,i=n.memoizedProps,n=n.memoizedState,a=l.stateNode;try{var C=Gl(l.type,i);e=a.getSnapshotBeforeUpdate(C,n),a.__reactInternalSnapshotBeforeUpdate=e}catch(_){ee(l,l.return,_)}}break;case 3:if((e&1024)!==0){if(e=t.stateNode.containerInfo,l=e.nodeType,l===9)Qc(e);else if(l===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":Qc(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(m(163))}if(e=t.sibling,e!==null){e.return=t.return,Ae=e;break}Ae=t.return}}function Ks(e,t,l){var a=l.flags;switch(l.tag){case 0:case 11:case 15:Xt(e,l),a&4&&ti(5,l);break;case 1:if(Xt(e,l),a&4)if(e=l.stateNode,t===null)try{e.componentDidMount()}catch(u){ee(l,l.return,u)}else{var i=Gl(l.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(i,t,e.__reactInternalSnapshotBeforeUpdate)}catch(u){ee(l,l.return,u)}}a&64&&Ys(l),a&512&&li(l,l.return);break;case 3:if(Xt(e,l),a&64&&(e=l.updateQueue,e!==null)){if(t=null,l.child!==null)switch(l.child.tag){case 27:case 5:t=l.child.stateNode;break;case 1:t=l.child.stateNode}try{zf(e,t)}catch(u){ee(l,l.return,u)}}break;case 27:t===null&&a&4&&Qs(l);case 26:case 5:Xt(e,l),t===null&&a&4&&js(l),a&512&&li(l,l.return);break;case 12:Xt(e,l);break;case 31:Xt(e,l),a&4&&Is(e,l);break;case 13:Xt(e,l),a&4&&Ws(e,l),a&64&&(e=l.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(l=i0.bind(null,l),A0(e,l))));break;case 22:if(a=l.memoizedState!==null||Vt,!a){t=t!==null&&t.memoizedState!==null||Ee,i=Vt;var n=Ee;Vt=a,(Ee=t)&&!n?Qt(e,l,(l.subtreeFlags&8772)!==0):Xt(e,l),Vt=i,Ee=n}break;case 30:break;default:Xt(e,l)}}function Fs(e){var t=e.alternate;t!==null&&(e.alternate=null,Fs(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&In(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var se=null,Xe=!1;function jt(e,t,l){for(l=l.child;l!==null;)Js(e,t,l),l=l.sibling}function Js(e,t,l){if(ke&&typeof ke.onCommitFiberUnmount=="function")try{ke.onCommitFiberUnmount(Oa,l)}catch{}switch(l.tag){case 26:Ee||Ot(l,t),jt(e,t,l),l.memoizedState?l.memoizedState.count--:l.stateNode&&(l=l.stateNode,l.parentNode.removeChild(l));break;case 27:Ee||Ot(l,t);var a=se,i=Xe;hl(l.type)&&(se=l.stateNode,Xe=!1),jt(e,t,l),ri(l.stateNode),se=a,Xe=i;break;case 5:Ee||Ot(l,t);case 6:if(a=se,i=Xe,se=null,jt(e,t,l),se=a,Xe=i,se!==null)if(Xe)try{(se.nodeType===9?se.body:se.nodeName==="HTML"?se.ownerDocument.body:se).removeChild(l.stateNode)}catch(n){ee(l,t,n)}else try{se.removeChild(l.stateNode)}catch(n){ee(l,t,n)}break;case 18:se!==null&&(Xe?(e=se,Yr(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,l.stateNode),Aa(e)):Yr(se,l.stateNode));break;case 4:a=se,i=Xe,se=l.stateNode.containerInfo,Xe=!0,jt(e,t,l),se=a,Xe=i;break;case 0:case 11:case 14:case 15:cl(2,l,t),Ee||cl(4,l,t),jt(e,t,l);break;case 1:Ee||(Ot(l,t),a=l.stateNode,typeof a.componentWillUnmount=="function"&&Vs(l,t,a)),jt(e,t,l);break;case 21:jt(e,t,l);break;case 22:Ee=(a=Ee)||l.memoizedState!==null,jt(e,t,l),Ee=a;break;default:jt(e,t,l)}}function Is(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{Aa(e)}catch(l){ee(t,t.return,l)}}}function Ws(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Aa(e)}catch(l){ee(t,t.return,l)}}function Wy(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new Zs),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new Zs),t;default:throw Error(m(435,e.tag))}}function dn(e,t){var l=Wy(e);t.forEach(function(a){if(!l.has(a)){l.add(a);var i=n0.bind(null,e,a);a.then(i,i)}})}function Qe(e,t){var l=t.deletions;if(l!==null)for(var a=0;a<l.length;a++){var i=l[a],n=e,u=t,c=u;e:for(;c!==null;){switch(c.tag){case 27:if(hl(c.type)){se=c.stateNode,Xe=!1;break e}break;case 5:se=c.stateNode,Xe=!1;break e;case 3:case 4:se=c.stateNode.containerInfo,Xe=!0;break e}c=c.return}if(se===null)throw Error(m(160));Js(n,u,i),se=null,Xe=!1,n=i.alternate,n!==null&&(n.return=null),i.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)ks(t,e),t=t.sibling}var xt=null;function ks(e,t){var l=e.alternate,a=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:Qe(t,e),Ze(e),a&4&&(cl(3,e,e.return),ti(3,e),cl(5,e,e.return));break;case 1:Qe(t,e),Ze(e),a&512&&(Ee||l===null||Ot(l,l.return)),a&64&&Vt&&(e=e.updateQueue,e!==null&&(a=e.callbacks,a!==null&&(l=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=l===null?a:l.concat(a))));break;case 26:var i=xt;if(Qe(t,e),Ze(e),a&512&&(Ee||l===null||Ot(l,l.return)),a&4){var n=l!==null?l.memoizedState:null;if(a=e.memoizedState,l===null)if(a===null)if(e.stateNode===null){e:{a=e.type,l=e.memoizedProps,i=i.ownerDocument||i;t:switch(a){case"title":n=i.getElementsByTagName("title")[0],(!n||n[Ra]||n[Ce]||n.namespaceURI==="http://www.w3.org/2000/svg"||n.hasAttribute("itemprop"))&&(n=i.createElement(a),i.head.insertBefore(n,i.querySelector("head > title"))),Re(n,a,l),n[Ce]=e,be(n),a=n;break e;case"link":var u=kr("link","href",i).get(a+(l.href||""));if(u){for(var c=0;c<u.length;c++)if(n=u[c],n.getAttribute("href")===(l.href==null||l.href===""?null:l.href)&&n.getAttribute("rel")===(l.rel==null?null:l.rel)&&n.getAttribute("title")===(l.title==null?null:l.title)&&n.getAttribute("crossorigin")===(l.crossOrigin==null?null:l.crossOrigin)){u.splice(c,1);break t}}n=i.createElement(a),Re(n,a,l),i.head.appendChild(n);break;case"meta":if(u=kr("meta","content",i).get(a+(l.content||""))){for(c=0;c<u.length;c++)if(n=u[c],n.getAttribute("content")===(l.content==null?null:""+l.content)&&n.getAttribute("name")===(l.name==null?null:l.name)&&n.getAttribute("property")===(l.property==null?null:l.property)&&n.getAttribute("http-equiv")===(l.httpEquiv==null?null:l.httpEquiv)&&n.getAttribute("charset")===(l.charSet==null?null:l.charSet)){u.splice(c,1);break t}}n=i.createElement(a),Re(n,a,l),i.head.appendChild(n);break;default:throw Error(m(468,a))}n[Ce]=e,be(n),a=n}e.stateNode=a}else Pr(i,e.type,e.stateNode);else e.stateNode=Wr(i,a,e.memoizedProps);else n!==a?(n===null?l.stateNode!==null&&(l=l.stateNode,l.parentNode.removeChild(l)):n.count--,a===null?Pr(i,e.type,e.stateNode):Wr(i,a,e.memoizedProps)):a===null&&e.stateNode!==null&&gc(e,e.memoizedProps,l.memoizedProps)}break;case 27:Qe(t,e),Ze(e),a&512&&(Ee||l===null||Ot(l,l.return)),l!==null&&a&4&&gc(e,e.memoizedProps,l.memoizedProps);break;case 5:if(Qe(t,e),Ze(e),a&512&&(Ee||l===null||Ot(l,l.return)),e.flags&32){i=e.stateNode;try{Fl(i,"")}catch(C){ee(e,e.return,C)}}a&4&&e.stateNode!=null&&(i=e.memoizedProps,gc(e,i,l!==null?l.memoizedProps:i)),a&1024&&(xc=!0);break;case 6:if(Qe(t,e),Ze(e),a&4){if(e.stateNode===null)throw Error(m(162));a=e.memoizedProps,l=e.stateNode;try{l.nodeValue=a}catch(C){ee(e,e.return,C)}}break;case 3:if(Mn=null,i=xt,xt=On(t.containerInfo),Qe(t,e),xt=i,Ze(e),a&4&&l!==null&&l.memoizedState.isDehydrated)try{Aa(t.containerInfo)}catch(C){ee(e,e.return,C)}xc&&(xc=!1,Ps(e));break;case 4:a=xt,xt=On(e.stateNode.containerInfo),Qe(t,e),Ze(e),xt=a;break;case 12:Qe(t,e),Ze(e);break;case 31:Qe(t,e),Ze(e),a&4&&(a=e.updateQueue,a!==null&&(e.updateQueue=null,dn(e,a)));break;case 13:Qe(t,e),Ze(e),e.child.flags&8192&&e.memoizedState!==null!=(l!==null&&l.memoizedState!==null)&&(hn=We()),a&4&&(a=e.updateQueue,a!==null&&(e.updateQueue=null,dn(e,a)));break;case 22:i=e.memoizedState!==null;var o=l!==null&&l.memoizedState!==null,y=Vt,p=Ee;if(Vt=y||i,Ee=p||o,Qe(t,e),Ee=p,Vt=y,Ze(e),a&8192)e:for(t=e.stateNode,t._visibility=i?t._visibility&-2:t._visibility|1,i&&(l===null||o||Vt||Ee||Hl(e)),l=null,t=e;;){if(t.tag===5||t.tag===26){if(l===null){o=l=t;try{if(n=o.stateNode,i)u=n.style,typeof u.setProperty=="function"?u.setProperty("display","none","important"):u.display="none";else{c=o.stateNode;var S=o.memoizedProps.style,h=S!=null&&S.hasOwnProperty("display")?S.display:null;c.style.display=h==null||typeof h=="boolean"?"":(""+h).trim()}}catch(C){ee(o,o.return,C)}}}else if(t.tag===6){if(l===null){o=t;try{o.stateNode.nodeValue=i?"":o.memoizedProps}catch(C){ee(o,o.return,C)}}}else if(t.tag===18){if(l===null){o=t;try{var g=o.stateNode;i?Vr(g,!0):Vr(o.stateNode,!1)}catch(C){ee(o,o.return,C)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;l===t&&(l=null),t=t.return}l===t&&(l=null),t.sibling.return=t.return,t=t.sibling}a&4&&(a=e.updateQueue,a!==null&&(l=a.retryQueue,l!==null&&(a.retryQueue=null,dn(e,l))));break;case 19:Qe(t,e),Ze(e),a&4&&(a=e.updateQueue,a!==null&&(e.updateQueue=null,dn(e,a)));break;case 30:break;case 21:break;default:Qe(t,e),Ze(e)}}function Ze(e){var t=e.flags;if(t&2){try{for(var l,a=e.return;a!==null;){if(Xs(a)){l=a;break}a=a.return}if(l==null)throw Error(m(160));switch(l.tag){case 27:var i=l.stateNode,n=pc(e);rn(e,n,i);break;case 5:var u=l.stateNode;l.flags&32&&(Fl(u,""),l.flags&=-33);var c=pc(e);rn(e,c,u);break;case 3:case 4:var o=l.stateNode.containerInfo,y=pc(e);vc(e,y,o);break;default:throw Error(m(161))}}catch(p){ee(e,e.return,p)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Ps(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;Ps(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function Xt(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)Ks(e,t.alternate,t),t=t.sibling}function Hl(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:cl(4,t,t.return),Hl(t);break;case 1:Ot(t,t.return);var l=t.stateNode;typeof l.componentWillUnmount=="function"&&Vs(t,t.return,l),Hl(t);break;case 27:ri(t.stateNode);case 26:case 5:Ot(t,t.return),Hl(t);break;case 22:t.memoizedState===null&&Hl(t);break;case 30:Hl(t);break;default:Hl(t)}e=e.sibling}}function Qt(e,t,l){for(l=l&&(t.subtreeFlags&8772)!==0,t=t.child;t!==null;){var a=t.alternate,i=e,n=t,u=n.flags;switch(n.tag){case 0:case 11:case 15:Qt(i,n,l),ti(4,n);break;case 1:if(Qt(i,n,l),a=n,i=a.stateNode,typeof i.componentDidMount=="function")try{i.componentDidMount()}catch(y){ee(a,a.return,y)}if(a=n,i=a.updateQueue,i!==null){var c=a.stateNode;try{var o=i.shared.hiddenCallbacks;if(o!==null)for(i.shared.hiddenCallbacks=null,i=0;i<o.length;i++)Rf(o[i],c)}catch(y){ee(a,a.return,y)}}l&&u&64&&Ys(n),li(n,n.return);break;case 27:Qs(n);case 26:case 5:Qt(i,n,l),l&&a===null&&u&4&&js(n),li(n,n.return);break;case 12:Qt(i,n,l);break;case 31:Qt(i,n,l),l&&u&4&&Is(i,n);break;case 13:Qt(i,n,l),l&&u&4&&Ws(i,n);break;case 22:n.memoizedState===null&&Qt(i,n,l),li(n,n.return);break;case 30:break;default:Qt(i,n,l)}t=t.sibling}}function Sc(e,t){var l=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(l=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==l&&(e!=null&&e.refCount++,l!=null&&ja(l))}function Ec(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&ja(e))}function St(e,t,l,a){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)$s(e,t,l,a),t=t.sibling}function $s(e,t,l,a){var i=t.flags;switch(t.tag){case 0:case 11:case 15:St(e,t,l,a),i&2048&&ti(9,t);break;case 1:St(e,t,l,a);break;case 3:St(e,t,l,a),i&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&ja(e)));break;case 12:if(i&2048){St(e,t,l,a),e=t.stateNode;try{var n=t.memoizedProps,u=n.id,c=n.onPostCommit;typeof c=="function"&&c(u,t.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(o){ee(t,t.return,o)}}else St(e,t,l,a);break;case 31:St(e,t,l,a);break;case 13:St(e,t,l,a);break;case 23:break;case 22:n=t.stateNode,u=t.alternate,t.memoizedState!==null?n._visibility&2?St(e,t,l,a):ai(e,t):n._visibility&2?St(e,t,l,a):(n._visibility|=2,ya(e,t,l,a,(t.subtreeFlags&10256)!==0||!1)),i&2048&&Sc(u,t);break;case 24:St(e,t,l,a),i&2048&&Ec(t.alternate,t);break;default:St(e,t,l,a)}}function ya(e,t,l,a,i){for(i=i&&((t.subtreeFlags&10256)!==0||!1),t=t.child;t!==null;){var n=e,u=t,c=l,o=a,y=u.flags;switch(u.tag){case 0:case 11:case 15:ya(n,u,c,o,i),ti(8,u);break;case 23:break;case 22:var p=u.stateNode;u.memoizedState!==null?p._visibility&2?ya(n,u,c,o,i):ai(n,u):(p._visibility|=2,ya(n,u,c,o,i)),i&&y&2048&&Sc(u.alternate,u);break;case 24:ya(n,u,c,o,i),i&&y&2048&&Ec(u.alternate,u);break;default:ya(n,u,c,o,i)}t=t.sibling}}function ai(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var l=e,a=t,i=a.flags;switch(a.tag){case 22:ai(l,a),i&2048&&Sc(a.alternate,a);break;case 24:ai(l,a),i&2048&&Ec(a.alternate,a);break;default:ai(l,a)}t=t.sibling}}var ii=8192;function ha(e,t,l){if(e.subtreeFlags&ii)for(e=e.child;e!==null;)er(e,t,l),e=e.sibling}function er(e,t,l){switch(e.tag){case 26:ha(e,t,l),e.flags&ii&&e.memoizedState!==null&&B0(l,xt,e.memoizedState,e.memoizedProps);break;case 5:ha(e,t,l);break;case 3:case 4:var a=xt;xt=On(e.stateNode.containerInfo),ha(e,t,l),xt=a;break;case 22:e.memoizedState===null&&(a=e.alternate,a!==null&&a.memoizedState!==null?(a=ii,ii=16777216,ha(e,t,l),ii=a):ha(e,t,l));break;default:ha(e,t,l)}}function tr(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function ni(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var l=0;l<t.length;l++){var a=t[l];Ae=a,ar(a,e)}tr(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)lr(e),e=e.sibling}function lr(e){switch(e.tag){case 0:case 11:case 15:ni(e),e.flags&2048&&cl(9,e,e.return);break;case 3:ni(e);break;case 12:ni(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,yn(e)):ni(e);break;default:ni(e)}}function yn(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var l=0;l<t.length;l++){var a=t[l];Ae=a,ar(a,e)}tr(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:cl(8,t,t.return),yn(t);break;case 22:l=t.stateNode,l._visibility&2&&(l._visibility&=-3,yn(t));break;default:yn(t)}e=e.sibling}}function ar(e,t){for(;Ae!==null;){var l=Ae;switch(l.tag){case 0:case 11:case 15:cl(8,l,t);break;case 23:case 22:if(l.memoizedState!==null&&l.memoizedState.cachePool!==null){var a=l.memoizedState.cachePool.pool;a!=null&&a.refCount++}break;case 24:ja(l.memoizedState.cache)}if(a=l.child,a!==null)a.return=l,Ae=a;else e:for(l=e;Ae!==null;){a=Ae;var i=a.sibling,n=a.return;if(Fs(a),a===l){Ae=null;break e}if(i!==null){i.return=n,Ae=i;break e}Ae=n}}}var ky={getCacheForType:function(e){var t=De(ve),l=t.data.get(e);return l===void 0&&(l=e(),t.data.set(e,l)),l},cacheSignal:function(){return De(ve).controller.signal}},Py=typeof WeakMap=="function"?WeakMap:Map,I=0,ue=null,Y=null,j=0,$=0,at=null,ol=!1,ma=!1,Tc=!1,Zt=0,ye=0,fl=0,ql=0,bc=0,it=0,ga=0,ui=null,Ke=null,Ac=!1,hn=0,ir=0,mn=1/0,gn=null,sl=null,Te=0,rl=null,pa=null,Kt=0,Cc=0,Oc=null,nr=null,ci=0,Dc=null;function nt(){return(I&2)!==0&&j!==0?j&-j:v.T!==null?wc():So()}function ur(){if(it===0)if((j&536870912)===0||Z){var e=bi;bi<<=1,(bi&3932160)===0&&(bi=262144),it=e}else it=536870912;return e=tt.current,e!==null&&(e.flags|=32),it}function Fe(e,t,l){(e===ue&&($===2||$===9)||e.cancelPendingCommit!==null)&&(va(e,0),dl(e,j,it,!1)),Ma(e,l),((I&2)===0||e!==ue)&&(e===ue&&((I&2)===0&&(ql|=l),ye===4&&dl(e,j,it,!1)),Dt(e))}function cr(e,t,l){if((I&6)!==0)throw Error(m(327));var a=!l&&(t&127)===0&&(t&e.expiredLanes)===0||Da(e,t),i=a?t0(e,t):Rc(e,t,!0),n=a;do{if(i===0){ma&&!a&&dl(e,t,0,!1);break}else{if(l=e.current.alternate,n&&!$y(l)){i=Rc(e,t,!1),n=!1;continue}if(i===2){if(n=t,e.errorRecoveryDisabledLanes&n)var u=0;else u=e.pendingLanes&-536870913,u=u!==0?u:u&536870912?536870912:0;if(u!==0){t=u;e:{var c=e;i=ui;var o=c.current.memoizedState.isDehydrated;if(o&&(va(c,u).flags|=256),u=Rc(c,u,!1),u!==2){if(Tc&&!o){c.errorRecoveryDisabledLanes|=n,ql|=n,i=4;break e}n=Ke,Ke=i,n!==null&&(Ke===null?Ke=n:Ke.push.apply(Ke,n))}i=u}if(n=!1,i!==2)continue}}if(i===1){va(e,0),dl(e,t,0,!0);break}e:{switch(a=e,n=i,n){case 0:case 1:throw Error(m(345));case 4:if((t&4194048)!==t)break;case 6:dl(a,t,it,!ol);break e;case 2:Ke=null;break;case 3:case 5:break;default:throw Error(m(329))}if((t&62914560)===t&&(i=hn+300-We(),10<i)){if(dl(a,t,it,!ol),Ci(a,0,!0)!==0)break e;Kt=t,a.timeoutHandle=Hr(or.bind(null,a,l,Ke,gn,Ac,t,it,ql,ga,ol,n,"Throttled",-0,0),i);break e}or(a,l,Ke,gn,Ac,t,it,ql,ga,ol,n,null,-0,0)}}break}while(!0);Dt(e)}function or(e,t,l,a,i,n,u,c,o,y,p,S,h,g){if(e.timeoutHandle=-1,S=t.subtreeFlags,S&8192||(S&16785408)===16785408){S={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:_t},er(t,n,S);var C=(n&62914560)===n?hn-We():(n&4194048)===n?ir-We():0;if(C=G0(S,C),C!==null){Kt=n,e.cancelPendingCommit=C(gr.bind(null,e,t,n,l,a,i,u,c,o,p,S,null,h,g)),dl(e,n,u,!y);return}}gr(e,t,n,l,a,i,u,c,o)}function $y(e){for(var t=e;;){var l=t.tag;if((l===0||l===11||l===15)&&t.flags&16384&&(l=t.updateQueue,l!==null&&(l=l.stores,l!==null)))for(var a=0;a<l.length;a++){var i=l[a],n=i.getSnapshot;i=i.value;try{if(!$e(n(),i))return!1}catch{return!1}}if(l=t.child,t.subtreeFlags&16384&&l!==null)l.return=t,t=l;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function dl(e,t,l,a){t&=~bc,t&=~ql,e.suspendedLanes|=t,e.pingedLanes&=~t,a&&(e.warmLanes|=t),a=e.expirationTimes;for(var i=t;0<i;){var n=31-Pe(i),u=1<<n;a[n]=-1,i&=~u}l!==0&&po(e,l,t)}function pn(){return(I&6)===0?(oi(0),!1):!0}function Mc(){if(Y!==null){if($===0)var e=Y.return;else e=Y,Lt=zl=null,Qu(e),oa=null,Qa=0,e=Y;for(;e!==null;)qs(e.alternate,e),e=e.return;Y=null}}function va(e,t){var l=e.timeoutHandle;l!==-1&&(e.timeoutHandle=-1,x0(l)),l=e.cancelPendingCommit,l!==null&&(e.cancelPendingCommit=null,l()),Kt=0,Mc(),ue=e,Y=l=wt(e.current,null),j=t,$=0,at=null,ol=!1,ma=Da(e,t),Tc=!1,ga=it=bc=ql=fl=ye=0,Ke=ui=null,Ac=!1,(t&8)!==0&&(t|=t&32);var a=e.entangledLanes;if(a!==0)for(e=e.entanglements,a&=t;0<a;){var i=31-Pe(a),n=1<<i;t|=e[i],a&=~n}return Zt=t,Gi(),l}function fr(e,t){G=null,v.H=Pa,t===ca||t===Zi?(t=Cf(),$=3):t===Nu?(t=Cf(),$=4):$=t===uc?8:t!==null&&typeof t=="object"&&typeof t.then=="function"?6:1,at=t,Y===null&&(ye=1,un(e,st(t,e.current)))}function sr(){var e=tt.current;return e===null?!0:(j&4194048)===j?ht===null:(j&62914560)===j||(j&536870912)!==0?e===ht:!1}function rr(){var e=v.H;return v.H=Pa,e===null?Pa:e}function dr(){var e=v.A;return v.A=ky,e}function vn(){ye=4,ol||(j&4194048)!==j&&tt.current!==null||(ma=!0),(fl&134217727)===0&&(ql&134217727)===0||ue===null||dl(ue,j,it,!1)}function Rc(e,t,l){var a=I;I|=2;var i=rr(),n=dr();(ue!==e||j!==t)&&(gn=null,va(e,t)),t=!1;var u=ye;e:do try{if($!==0&&Y!==null){var c=Y,o=at;switch($){case 8:Mc(),u=6;break e;case 3:case 2:case 9:case 6:tt.current===null&&(t=!0);var y=$;if($=0,at=null,xa(e,c,o,y),l&&ma){u=0;break e}break;default:y=$,$=0,at=null,xa(e,c,o,y)}}e0(),u=ye;break}catch(p){fr(e,p)}while(!0);return t&&e.shellSuspendCounter++,Lt=zl=null,I=a,v.H=i,v.A=n,Y===null&&(ue=null,j=0,Gi()),u}function e0(){for(;Y!==null;)yr(Y)}function t0(e,t){var l=I;I|=2;var a=rr(),i=dr();ue!==e||j!==t?(gn=null,mn=We()+500,va(e,t)):ma=Da(e,t);e:do try{if($!==0&&Y!==null){t=Y;var n=at;t:switch($){case 1:$=0,at=null,xa(e,t,n,1);break;case 2:case 9:if(bf(n)){$=0,at=null,hr(t);break}t=function(){$!==2&&$!==9||ue!==e||($=7),Dt(e)},n.then(t,t);break e;case 3:$=7;break e;case 4:$=5;break e;case 7:bf(n)?($=0,at=null,hr(t)):($=0,at=null,xa(e,t,n,7));break;case 5:var u=null;switch(Y.tag){case 26:u=Y.memoizedState;case 5:case 27:var c=Y;if(u?$r(u):c.stateNode.complete){$=0,at=null;var o=c.sibling;if(o!==null)Y=o;else{var y=c.return;y!==null?(Y=y,xn(y)):Y=null}break t}}$=0,at=null,xa(e,t,n,5);break;case 6:$=0,at=null,xa(e,t,n,6);break;case 8:Mc(),ye=6;break e;default:throw Error(m(462))}}l0();break}catch(p){fr(e,p)}while(!0);return Lt=zl=null,v.H=a,v.A=i,I=l,Y!==null?0:(ue=null,j=0,Gi(),ye)}function l0(){for(;Y!==null&&!Cd();)yr(Y)}function yr(e){var t=Gs(e.alternate,e,Zt);e.memoizedProps=e.pendingProps,t===null?xn(e):Y=t}function hr(e){var t=e,l=t.alternate;switch(t.tag){case 15:case 0:t=_s(l,t,t.pendingProps,t.type,void 0,j);break;case 11:t=_s(l,t,t.pendingProps,t.type.render,t.ref,j);break;case 5:Qu(t);default:qs(l,t),t=Y=df(t,Zt),t=Gs(l,t,Zt)}e.memoizedProps=e.pendingProps,t===null?xn(e):Y=t}function xa(e,t,l,a){Lt=zl=null,Qu(t),oa=null,Qa=0;var i=t.return;try{if(Qy(e,i,t,l,j)){ye=1,un(e,st(l,e.current)),Y=null;return}}catch(n){if(i!==null)throw Y=i,n;ye=1,un(e,st(l,e.current)),Y=null;return}t.flags&32768?(Z||a===1?e=!0:ma||(j&536870912)!==0?e=!1:(ol=e=!0,(a===2||a===9||a===3||a===6)&&(a=tt.current,a!==null&&a.tag===13&&(a.flags|=16384))),mr(t,e)):xn(t)}function xn(e){var t=e;do{if((t.flags&32768)!==0){mr(t,ol);return}e=t.return;var l=Fy(t.alternate,t,Zt);if(l!==null){Y=l;return}if(t=t.sibling,t!==null){Y=t;return}Y=t=e}while(t!==null);ye===0&&(ye=5)}function mr(e,t){do{var l=Jy(e.alternate,e);if(l!==null){l.flags&=32767,Y=l;return}if(l=e.return,l!==null&&(l.flags|=32768,l.subtreeFlags=0,l.deletions=null),!t&&(e=e.sibling,e!==null)){Y=e;return}Y=e=l}while(e!==null);ye=6,Y=null}function gr(e,t,l,a,i,n,u,c,o){e.cancelPendingCommit=null;do Sn();while(Te!==0);if((I&6)!==0)throw Error(m(327));if(t!==null){if(t===e.current)throw Error(m(177));if(n=t.lanes|t.childLanes,n|=pu,Ld(e,l,n,u,c,o),e===ue&&(Y=ue=null,j=0),pa=t,rl=e,Kt=l,Cc=n,Oc=i,nr=a,(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,u0(Ei,function(){return Er(),null})):(e.callbackNode=null,e.callbackPriority=0),a=(t.flags&13878)!==0,(t.subtreeFlags&13878)!==0||a){a=v.T,v.T=null,i=b.p,b.p=2,u=I,I|=4;try{Iy(e,t,l)}finally{I=u,b.p=i,v.T=a}}Te=1,pr(),vr(),xr()}}function pr(){if(Te===1){Te=0;var e=rl,t=pa,l=(t.flags&13878)!==0;if((t.subtreeFlags&13878)!==0||l){l=v.T,v.T=null;var a=b.p;b.p=2;var i=I;I|=4;try{ks(t,e);var n=Vc,u=lf(e.containerInfo),c=n.focusedElem,o=n.selectionRange;if(u!==c&&c&&c.ownerDocument&&tf(c.ownerDocument.documentElement,c)){if(o!==null&&du(c)){var y=o.start,p=o.end;if(p===void 0&&(p=y),"selectionStart"in c)c.selectionStart=y,c.selectionEnd=Math.min(p,c.value.length);else{var S=c.ownerDocument||document,h=S&&S.defaultView||window;if(h.getSelection){var g=h.getSelection(),C=c.textContent.length,_=Math.min(o.start,C),ie=o.end===void 0?_:Math.min(o.end,C);!g.extend&&_>ie&&(u=ie,ie=_,_=u);var r=ef(c,_),f=ef(c,ie);if(r&&f&&(g.rangeCount!==1||g.anchorNode!==r.node||g.anchorOffset!==r.offset||g.focusNode!==f.node||g.focusOffset!==f.offset)){var d=S.createRange();d.setStart(r.node,r.offset),g.removeAllRanges(),_>ie?(g.addRange(d),g.extend(f.node,f.offset)):(d.setEnd(f.node,f.offset),g.addRange(d))}}}}for(S=[],g=c;g=g.parentNode;)g.nodeType===1&&S.push({element:g,left:g.scrollLeft,top:g.scrollTop});for(typeof c.focus=="function"&&c.focus(),c=0;c<S.length;c++){var x=S[c];x.element.scrollLeft=x.left,x.element.scrollTop=x.top}}Nn=!!Yc,Vc=Yc=null}finally{I=i,b.p=a,v.T=l}}e.current=t,Te=2}}function vr(){if(Te===2){Te=0;var e=rl,t=pa,l=(t.flags&8772)!==0;if((t.subtreeFlags&8772)!==0||l){l=v.T,v.T=null;var a=b.p;b.p=2;var i=I;I|=4;try{Ks(e,t.alternate,t)}finally{I=i,b.p=a,v.T=l}}Te=3}}function xr(){if(Te===4||Te===3){Te=0,Od();var e=rl,t=pa,l=Kt,a=nr;(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?Te=5:(Te=0,pa=rl=null,Sr(e,e.pendingLanes));var i=e.pendingLanes;if(i===0&&(sl=null),Fn(l),t=t.stateNode,ke&&typeof ke.onCommitFiberRoot=="function")try{ke.onCommitFiberRoot(Oa,t,void 0,(t.current.flags&128)===128)}catch{}if(a!==null){t=v.T,i=b.p,b.p=2,v.T=null;try{for(var n=e.onRecoverableError,u=0;u<a.length;u++){var c=a[u];n(c.value,{componentStack:c.stack})}}finally{v.T=t,b.p=i}}(Kt&3)!==0&&Sn(),Dt(e),i=e.pendingLanes,(l&261930)!==0&&(i&42)!==0?e===Dc?ci++:(ci=0,Dc=e):ci=0,oi(0)}}function Sr(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,ja(t)))}function Sn(){return pr(),vr(),xr(),Er()}function Er(){if(Te!==5)return!1;var e=rl,t=Cc;Cc=0;var l=Fn(Kt),a=v.T,i=b.p;try{b.p=32>l?32:l,v.T=null,l=Oc,Oc=null;var n=rl,u=Kt;if(Te=0,pa=rl=null,Kt=0,(I&6)!==0)throw Error(m(331));var c=I;if(I|=4,lr(n.current),$s(n,n.current,u,l),I=c,oi(0,!1),ke&&typeof ke.onPostCommitFiberRoot=="function")try{ke.onPostCommitFiberRoot(Oa,n)}catch{}return!0}finally{b.p=i,v.T=a,Sr(e,t)}}function Tr(e,t,l){t=st(l,t),t=nc(e.stateNode,t,2),e=il(e,t,2),e!==null&&(Ma(e,2),Dt(e))}function ee(e,t,l){if(e.tag===3)Tr(e,e,l);else for(;t!==null;){if(t.tag===3){Tr(t,e,l);break}else if(t.tag===1){var a=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof a.componentDidCatch=="function"&&(sl===null||!sl.has(a))){e=st(l,e),l=bs(2),a=il(t,l,2),a!==null&&(As(l,a,t,e),Ma(a,2),Dt(a));break}}t=t.return}}function zc(e,t,l){var a=e.pingCache;if(a===null){a=e.pingCache=new Py;var i=new Set;a.set(t,i)}else i=a.get(t),i===void 0&&(i=new Set,a.set(t,i));i.has(l)||(Tc=!0,i.add(l),e=a0.bind(null,e,t,l),t.then(e,e))}function a0(e,t,l){var a=e.pingCache;a!==null&&a.delete(t),e.pingedLanes|=e.suspendedLanes&l,e.warmLanes&=~l,ue===e&&(j&l)===l&&(ye===4||ye===3&&(j&62914560)===j&&300>We()-hn?(I&2)===0&&va(e,0):bc|=l,ga===j&&(ga=0)),Dt(e)}function br(e,t){t===0&&(t=go()),e=Dl(e,t),e!==null&&(Ma(e,t),Dt(e))}function i0(e){var t=e.memoizedState,l=0;t!==null&&(l=t.retryLane),br(e,l)}function n0(e,t){var l=0;switch(e.tag){case 31:case 13:var a=e.stateNode,i=e.memoizedState;i!==null&&(l=i.retryLane);break;case 19:a=e.stateNode;break;case 22:a=e.stateNode._retryCache;break;default:throw Error(m(314))}a!==null&&a.delete(t),br(e,l)}function u0(e,t){return Xn(e,t)}var En=null,Sa=null,_c=!1,Tn=!1,Nc=!1,yl=0;function Dt(e){e!==Sa&&e.next===null&&(Sa===null?En=Sa=e:Sa=Sa.next=e),Tn=!0,_c||(_c=!0,o0())}function oi(e,t){if(!Nc&&Tn){Nc=!0;do for(var l=!1,a=En;a!==null;){if(e!==0){var i=a.pendingLanes;if(i===0)var n=0;else{var u=a.suspendedLanes,c=a.pingedLanes;n=(1<<31-Pe(42|e)+1)-1,n&=i&~(u&~c),n=n&201326741?n&201326741|1:n?n|2:0}n!==0&&(l=!0,Dr(a,n))}else n=j,n=Ci(a,a===ue?n:0,a.cancelPendingCommit!==null||a.timeoutHandle!==-1),(n&3)===0||Da(a,n)||(l=!0,Dr(a,n));a=a.next}while(l);Nc=!1}}function c0(){Ar()}function Ar(){Tn=_c=!1;var e=0;yl!==0&&v0()&&(e=yl);for(var t=We(),l=null,a=En;a!==null;){var i=a.next,n=Cr(a,t);n===0?(a.next=null,l===null?En=i:l.next=i,i===null&&(Sa=l)):(l=a,(e!==0||(n&3)!==0)&&(Tn=!0)),a=i}Te!==0&&Te!==5||oi(e),yl!==0&&(yl=0)}function Cr(e,t){for(var l=e.suspendedLanes,a=e.pingedLanes,i=e.expirationTimes,n=e.pendingLanes&-62914561;0<n;){var u=31-Pe(n),c=1<<u,o=i[u];o===-1?((c&l)===0||(c&a)!==0)&&(i[u]=Ud(c,t)):o<=t&&(e.expiredLanes|=c),n&=~c}if(t=ue,l=j,l=Ci(e,e===t?l:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),a=e.callbackNode,l===0||e===t&&($===2||$===9)||e.cancelPendingCommit!==null)return a!==null&&a!==null&&Qn(a),e.callbackNode=null,e.callbackPriority=0;if((l&3)===0||Da(e,l)){if(t=l&-l,t===e.callbackPriority)return t;switch(a!==null&&Qn(a),Fn(l)){case 2:case 8:l=ho;break;case 32:l=Ei;break;case 268435456:l=mo;break;default:l=Ei}return a=Or.bind(null,e),l=Xn(l,a),e.callbackPriority=t,e.callbackNode=l,t}return a!==null&&a!==null&&Qn(a),e.callbackPriority=2,e.callbackNode=null,2}function Or(e,t){if(Te!==0&&Te!==5)return e.callbackNode=null,e.callbackPriority=0,null;var l=e.callbackNode;if(Sn()&&e.callbackNode!==l)return null;var a=j;return a=Ci(e,e===ue?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),a===0?null:(cr(e,a,t),Cr(e,We()),e.callbackNode!=null&&e.callbackNode===l?Or.bind(null,e):null)}function Dr(e,t){if(Sn())return null;cr(e,t,!0)}function o0(){S0(function(){(I&6)!==0?Xn(yo,c0):Ar()})}function wc(){if(yl===0){var e=na;e===0&&(e=Ti,Ti<<=1,(Ti&261888)===0&&(Ti=256)),yl=e}return yl}function Mr(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:Ri(""+e)}function Rr(e,t){var l=t.ownerDocument.createElement("input");return l.name=t.name,l.value=t.value,e.id&&l.setAttribute("form",e.id),t.parentNode.insertBefore(l,t),e=new FormData(e),l.parentNode.removeChild(l),e}function f0(e,t,l,a,i){if(t==="submit"&&l&&l.stateNode===i){var n=Mr((i[Ve]||null).action),u=a.submitter;u&&(t=(t=u[Ve]||null)?Mr(t.formAction):u.getAttribute("formAction"),t!==null&&(n=t,u=null));var c=new wi("action","action",null,a,i);e.push({event:c,listeners:[{instance:null,listener:function(){if(a.defaultPrevented){if(yl!==0){var o=u?Rr(i,u):new FormData(i);$u(l,{pending:!0,data:o,method:i.method,action:n},null,o)}}else typeof n=="function"&&(c.preventDefault(),o=u?Rr(i,u):new FormData(i),$u(l,{pending:!0,data:o,method:i.method,action:n},n,o))},currentTarget:i}]})}}for(var Uc=0;Uc<gu.length;Uc++){var Lc=gu[Uc],s0=Lc.toLowerCase(),r0=Lc[0].toUpperCase()+Lc.slice(1);vt(s0,"on"+r0)}vt(uf,"onAnimationEnd"),vt(cf,"onAnimationIteration"),vt(of,"onAnimationStart"),vt("dblclick","onDoubleClick"),vt("focusin","onFocus"),vt("focusout","onBlur"),vt(Dy,"onTransitionRun"),vt(My,"onTransitionStart"),vt(Ry,"onTransitionCancel"),vt(ff,"onTransitionEnd"),Zl("onMouseEnter",["mouseout","mouseover"]),Zl("onMouseLeave",["mouseout","mouseover"]),Zl("onPointerEnter",["pointerout","pointerover"]),Zl("onPointerLeave",["pointerout","pointerover"]),bl("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),bl("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),bl("onBeforeInput",["compositionend","keypress","textInput","paste"]),bl("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),bl("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),bl("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var fi="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),d0=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(fi));function zr(e,t){t=(t&4)!==0;for(var l=0;l<e.length;l++){var a=e[l],i=a.event;a=a.listeners;e:{var n=void 0;if(t)for(var u=a.length-1;0<=u;u--){var c=a[u],o=c.instance,y=c.currentTarget;if(c=c.listener,o!==n&&i.isPropagationStopped())break e;n=c,i.currentTarget=y;try{n(i)}catch(p){Bi(p)}i.currentTarget=null,n=o}else for(u=0;u<a.length;u++){if(c=a[u],o=c.instance,y=c.currentTarget,c=c.listener,o!==n&&i.isPropagationStopped())break e;n=c,i.currentTarget=y;try{n(i)}catch(p){Bi(p)}i.currentTarget=null,n=o}}}}function V(e,t){var l=t[Jn];l===void 0&&(l=t[Jn]=new Set);var a=e+"__bubble";l.has(a)||(_r(t,e,2,!1),l.add(a))}function Bc(e,t,l){var a=0;t&&(a|=4),_r(l,e,a,t)}var bn="_reactListening"+Math.random().toString(36).slice(2);function Gc(e){if(!e[bn]){e[bn]=!0,bo.forEach(function(l){l!=="selectionchange"&&(d0.has(l)||Bc(l,!1,e),Bc(l,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[bn]||(t[bn]=!0,Bc("selectionchange",!1,t))}}function _r(e,t,l,a){switch(ud(t)){case 2:var i=Y0;break;case 8:i=V0;break;default:i=Pc}l=i.bind(null,t,l,e),i=void 0,!au||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),a?i!==void 0?e.addEventListener(t,l,{capture:!0,passive:i}):e.addEventListener(t,l,!0):i!==void 0?e.addEventListener(t,l,{passive:i}):e.addEventListener(t,l,!1)}function Hc(e,t,l,a,i){var n=a;if((t&1)===0&&(t&2)===0&&a!==null)e:for(;;){if(a===null)return;var u=a.tag;if(u===3||u===4){var c=a.stateNode.containerInfo;if(c===i)break;if(u===4)for(u=a.return;u!==null;){var o=u.tag;if((o===3||o===4)&&u.stateNode.containerInfo===i)return;u=u.return}for(;c!==null;){if(u=jl(c),u===null)return;if(o=u.tag,o===5||o===6||o===26||o===27){a=n=u;continue e}c=c.parentNode}}a=a.return}Lo(function(){var y=n,p=tu(l),S=[];e:{var h=sf.get(e);if(h!==void 0){var g=wi,C=e;switch(e){case"keypress":if(_i(l)===0)break e;case"keydown":case"keyup":g=ny;break;case"focusin":C="focus",g=cu;break;case"focusout":C="blur",g=cu;break;case"beforeblur":case"afterblur":g=cu;break;case"click":if(l.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":g=Ho;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":g=Fd;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":g=oy;break;case uf:case cf:case of:g=Wd;break;case ff:g=sy;break;case"scroll":case"scrollend":g=Zd;break;case"wheel":g=dy;break;case"copy":case"cut":case"paste":g=Pd;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":g=Yo;break;case"toggle":case"beforetoggle":g=hy}var _=(t&4)!==0,ie=!_&&(e==="scroll"||e==="scrollend"),r=_?h!==null?h+"Capture":null:h;_=[];for(var f=y,d;f!==null;){var x=f;if(d=x.stateNode,x=x.tag,x!==5&&x!==26&&x!==27||d===null||r===null||(x=_a(f,r),x!=null&&_.push(si(f,x,d))),ie)break;f=f.return}0<_.length&&(h=new g(h,C,null,l,p),S.push({event:h,listeners:_}))}}if((t&7)===0){e:{if(h=e==="mouseover"||e==="pointerover",g=e==="mouseout"||e==="pointerout",h&&l!==eu&&(C=l.relatedTarget||l.fromElement)&&(jl(C)||C[Vl]))break e;if((g||h)&&(h=p.window===p?p:(h=p.ownerDocument)?h.defaultView||h.parentWindow:window,g?(C=l.relatedTarget||l.toElement,g=y,C=C?jl(C):null,C!==null&&(ie=J(C),_=C.tag,C!==ie||_!==5&&_!==27&&_!==6)&&(C=null)):(g=null,C=y),g!==C)){if(_=Ho,x="onMouseLeave",r="onMouseEnter",f="mouse",(e==="pointerout"||e==="pointerover")&&(_=Yo,x="onPointerLeave",r="onPointerEnter",f="pointer"),ie=g==null?h:za(g),d=C==null?h:za(C),h=new _(x,f+"leave",g,l,p),h.target=ie,h.relatedTarget=d,x=null,jl(p)===y&&(_=new _(r,f+"enter",C,l,p),_.target=d,_.relatedTarget=ie,x=_),ie=x,g&&C)t:{for(_=y0,r=g,f=C,d=0,x=r;x;x=_(x))d++;x=0;for(var R=f;R;R=_(R))x++;for(;0<d-x;)r=_(r),d--;for(;0<x-d;)f=_(f),x--;for(;d--;){if(r===f||f!==null&&r===f.alternate){_=r;break t}r=_(r),f=_(f)}_=null}else _=null;g!==null&&Nr(S,h,g,_,!1),C!==null&&ie!==null&&Nr(S,ie,C,_,!0)}}e:{if(h=y?za(y):window,g=h.nodeName&&h.nodeName.toLowerCase(),g==="select"||g==="input"&&h.type==="file")var K=Jo;else if(Ko(h))if(Io)K=Ay;else{K=Ty;var M=Ey}else g=h.nodeName,!g||g.toLowerCase()!=="input"||h.type!=="checkbox"&&h.type!=="radio"?y&&$n(y.elementType)&&(K=Jo):K=by;if(K&&(K=K(e,y))){Fo(S,K,l,p);break e}M&&M(e,h,y),e==="focusout"&&y&&h.type==="number"&&y.memoizedProps.value!=null&&Pn(h,"number",h.value)}switch(M=y?za(y):window,e){case"focusin":(Ko(M)||M.contentEditable==="true")&&(kl=M,yu=y,qa=null);break;case"focusout":qa=yu=kl=null;break;case"mousedown":hu=!0;break;case"contextmenu":case"mouseup":case"dragend":hu=!1,af(S,l,p);break;case"selectionchange":if(Oy)break;case"keydown":case"keyup":af(S,l,p)}var H;if(fu)e:{switch(e){case"compositionstart":var X="onCompositionStart";break e;case"compositionend":X="onCompositionEnd";break e;case"compositionupdate":X="onCompositionUpdate";break e}X=void 0}else Wl?Qo(e,l)&&(X="onCompositionEnd"):e==="keydown"&&l.keyCode===229&&(X="onCompositionStart");X&&(Vo&&l.locale!=="ko"&&(Wl||X!=="onCompositionStart"?X==="onCompositionEnd"&&Wl&&(H=Bo()):(kt=p,iu="value"in kt?kt.value:kt.textContent,Wl=!0)),M=An(y,X),0<M.length&&(X=new qo(X,e,null,l,p),S.push({event:X,listeners:M}),H?X.data=H:(H=Zo(l),H!==null&&(X.data=H)))),(H=gy?py(e,l):vy(e,l))&&(X=An(y,"onBeforeInput"),0<X.length&&(M=new qo("onBeforeInput","beforeinput",null,l,p),S.push({event:M,listeners:X}),M.data=H)),f0(S,e,y,l,p)}zr(S,t)})}function si(e,t,l){return{instance:e,listener:t,currentTarget:l}}function An(e,t){for(var l=t+"Capture",a=[];e!==null;){var i=e,n=i.stateNode;if(i=i.tag,i!==5&&i!==26&&i!==27||n===null||(i=_a(e,l),i!=null&&a.unshift(si(e,i,n)),i=_a(e,t),i!=null&&a.push(si(e,i,n))),e.tag===3)return a;e=e.return}return[]}function y0(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function Nr(e,t,l,a,i){for(var n=t._reactName,u=[];l!==null&&l!==a;){var c=l,o=c.alternate,y=c.stateNode;if(c=c.tag,o!==null&&o===a)break;c!==5&&c!==26&&c!==27||y===null||(o=y,i?(y=_a(l,n),y!=null&&u.unshift(si(l,y,o))):i||(y=_a(l,n),y!=null&&u.push(si(l,y,o)))),l=l.return}u.length!==0&&e.push({event:t,listeners:u})}var h0=/\r\n?/g,m0=/\u0000|\uFFFD/g;function wr(e){return(typeof e=="string"?e:""+e).replace(h0,`
`).replace(m0,"")}function Ur(e,t){return t=wr(t),wr(e)===t}function ae(e,t,l,a,i,n){switch(l){case"children":typeof a=="string"?t==="body"||t==="textarea"&&a===""||Fl(e,a):(typeof a=="number"||typeof a=="bigint")&&t!=="body"&&Fl(e,""+a);break;case"className":Di(e,"class",a);break;case"tabIndex":Di(e,"tabindex",a);break;case"dir":case"role":case"viewBox":case"width":case"height":Di(e,l,a);break;case"style":wo(e,a,n);break;case"data":if(t!=="object"){Di(e,"data",a);break}case"src":case"href":if(a===""&&(t!=="a"||l!=="href")){e.removeAttribute(l);break}if(a==null||typeof a=="function"||typeof a=="symbol"||typeof a=="boolean"){e.removeAttribute(l);break}a=Ri(""+a),e.setAttribute(l,a);break;case"action":case"formAction":if(typeof a=="function"){e.setAttribute(l,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof n=="function"&&(l==="formAction"?(t!=="input"&&ae(e,t,"name",i.name,i,null),ae(e,t,"formEncType",i.formEncType,i,null),ae(e,t,"formMethod",i.formMethod,i,null),ae(e,t,"formTarget",i.formTarget,i,null)):(ae(e,t,"encType",i.encType,i,null),ae(e,t,"method",i.method,i,null),ae(e,t,"target",i.target,i,null)));if(a==null||typeof a=="symbol"||typeof a=="boolean"){e.removeAttribute(l);break}a=Ri(""+a),e.setAttribute(l,a);break;case"onClick":a!=null&&(e.onclick=_t);break;case"onScroll":a!=null&&V("scroll",e);break;case"onScrollEnd":a!=null&&V("scrollend",e);break;case"dangerouslySetInnerHTML":if(a!=null){if(typeof a!="object"||!("__html"in a))throw Error(m(61));if(l=a.__html,l!=null){if(i.children!=null)throw Error(m(60));e.innerHTML=l}}break;case"multiple":e.multiple=a&&typeof a!="function"&&typeof a!="symbol";break;case"muted":e.muted=a&&typeof a!="function"&&typeof a!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(a==null||typeof a=="function"||typeof a=="boolean"||typeof a=="symbol"){e.removeAttribute("xlink:href");break}l=Ri(""+a),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",l);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":a!=null&&typeof a!="function"&&typeof a!="symbol"?e.setAttribute(l,""+a):e.removeAttribute(l);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":a&&typeof a!="function"&&typeof a!="symbol"?e.setAttribute(l,""):e.removeAttribute(l);break;case"capture":case"download":a===!0?e.setAttribute(l,""):a!==!1&&a!=null&&typeof a!="function"&&typeof a!="symbol"?e.setAttribute(l,a):e.removeAttribute(l);break;case"cols":case"rows":case"size":case"span":a!=null&&typeof a!="function"&&typeof a!="symbol"&&!isNaN(a)&&1<=a?e.setAttribute(l,a):e.removeAttribute(l);break;case"rowSpan":case"start":a==null||typeof a=="function"||typeof a=="symbol"||isNaN(a)?e.removeAttribute(l):e.setAttribute(l,a);break;case"popover":V("beforetoggle",e),V("toggle",e),Oi(e,"popover",a);break;case"xlinkActuate":zt(e,"http://www.w3.org/1999/xlink","xlink:actuate",a);break;case"xlinkArcrole":zt(e,"http://www.w3.org/1999/xlink","xlink:arcrole",a);break;case"xlinkRole":zt(e,"http://www.w3.org/1999/xlink","xlink:role",a);break;case"xlinkShow":zt(e,"http://www.w3.org/1999/xlink","xlink:show",a);break;case"xlinkTitle":zt(e,"http://www.w3.org/1999/xlink","xlink:title",a);break;case"xlinkType":zt(e,"http://www.w3.org/1999/xlink","xlink:type",a);break;case"xmlBase":zt(e,"http://www.w3.org/XML/1998/namespace","xml:base",a);break;case"xmlLang":zt(e,"http://www.w3.org/XML/1998/namespace","xml:lang",a);break;case"xmlSpace":zt(e,"http://www.w3.org/XML/1998/namespace","xml:space",a);break;case"is":Oi(e,"is",a);break;case"innerText":case"textContent":break;default:(!(2<l.length)||l[0]!=="o"&&l[0]!=="O"||l[1]!=="n"&&l[1]!=="N")&&(l=Xd.get(l)||l,Oi(e,l,a))}}function qc(e,t,l,a,i,n){switch(l){case"style":wo(e,a,n);break;case"dangerouslySetInnerHTML":if(a!=null){if(typeof a!="object"||!("__html"in a))throw Error(m(61));if(l=a.__html,l!=null){if(i.children!=null)throw Error(m(60));e.innerHTML=l}}break;case"children":typeof a=="string"?Fl(e,a):(typeof a=="number"||typeof a=="bigint")&&Fl(e,""+a);break;case"onScroll":a!=null&&V("scroll",e);break;case"onScrollEnd":a!=null&&V("scrollend",e);break;case"onClick":a!=null&&(e.onclick=_t);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Ao.hasOwnProperty(l))e:{if(l[0]==="o"&&l[1]==="n"&&(i=l.endsWith("Capture"),t=l.slice(2,i?l.length-7:void 0),n=e[Ve]||null,n=n!=null?n[l]:null,typeof n=="function"&&e.removeEventListener(t,n,i),typeof a=="function")){typeof n!="function"&&n!==null&&(l in e?e[l]=null:e.hasAttribute(l)&&e.removeAttribute(l)),e.addEventListener(t,a,i);break e}l in e?e[l]=a:a===!0?e.setAttribute(l,""):Oi(e,l,a)}}}function Re(e,t,l){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":V("error",e),V("load",e);var a=!1,i=!1,n;for(n in l)if(l.hasOwnProperty(n)){var u=l[n];if(u!=null)switch(n){case"src":a=!0;break;case"srcSet":i=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(m(137,t));default:ae(e,t,n,u,l,null)}}i&&ae(e,t,"srcSet",l.srcSet,l,null),a&&ae(e,t,"src",l.src,l,null);return;case"input":V("invalid",e);var c=n=u=i=null,o=null,y=null;for(a in l)if(l.hasOwnProperty(a)){var p=l[a];if(p!=null)switch(a){case"name":i=p;break;case"type":u=p;break;case"checked":o=p;break;case"defaultChecked":y=p;break;case"value":n=p;break;case"defaultValue":c=p;break;case"children":case"dangerouslySetInnerHTML":if(p!=null)throw Error(m(137,t));break;default:ae(e,t,a,p,l,null)}}Ro(e,n,c,o,y,u,i,!1);return;case"select":V("invalid",e),a=u=n=null;for(i in l)if(l.hasOwnProperty(i)&&(c=l[i],c!=null))switch(i){case"value":n=c;break;case"defaultValue":u=c;break;case"multiple":a=c;default:ae(e,t,i,c,l,null)}t=n,l=u,e.multiple=!!a,t!=null?Kl(e,!!a,t,!1):l!=null&&Kl(e,!!a,l,!0);return;case"textarea":V("invalid",e),n=i=a=null;for(u in l)if(l.hasOwnProperty(u)&&(c=l[u],c!=null))switch(u){case"value":a=c;break;case"defaultValue":i=c;break;case"children":n=c;break;case"dangerouslySetInnerHTML":if(c!=null)throw Error(m(91));break;default:ae(e,t,u,c,l,null)}_o(e,a,i,n);return;case"option":for(o in l)if(l.hasOwnProperty(o)&&(a=l[o],a!=null))switch(o){case"selected":e.selected=a&&typeof a!="function"&&typeof a!="symbol";break;default:ae(e,t,o,a,l,null)}return;case"dialog":V("beforetoggle",e),V("toggle",e),V("cancel",e),V("close",e);break;case"iframe":case"object":V("load",e);break;case"video":case"audio":for(a=0;a<fi.length;a++)V(fi[a],e);break;case"image":V("error",e),V("load",e);break;case"details":V("toggle",e);break;case"embed":case"source":case"link":V("error",e),V("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(y in l)if(l.hasOwnProperty(y)&&(a=l[y],a!=null))switch(y){case"children":case"dangerouslySetInnerHTML":throw Error(m(137,t));default:ae(e,t,y,a,l,null)}return;default:if($n(t)){for(p in l)l.hasOwnProperty(p)&&(a=l[p],a!==void 0&&qc(e,t,p,a,l,void 0));return}}for(c in l)l.hasOwnProperty(c)&&(a=l[c],a!=null&&ae(e,t,c,a,l,null))}function g0(e,t,l,a){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var i=null,n=null,u=null,c=null,o=null,y=null,p=null;for(g in l){var S=l[g];if(l.hasOwnProperty(g)&&S!=null)switch(g){case"checked":break;case"value":break;case"defaultValue":o=S;default:a.hasOwnProperty(g)||ae(e,t,g,null,a,S)}}for(var h in a){var g=a[h];if(S=l[h],a.hasOwnProperty(h)&&(g!=null||S!=null))switch(h){case"type":n=g;break;case"name":i=g;break;case"checked":y=g;break;case"defaultChecked":p=g;break;case"value":u=g;break;case"defaultValue":c=g;break;case"children":case"dangerouslySetInnerHTML":if(g!=null)throw Error(m(137,t));break;default:g!==S&&ae(e,t,h,g,a,S)}}kn(e,u,c,o,y,p,n,i);return;case"select":g=u=c=h=null;for(n in l)if(o=l[n],l.hasOwnProperty(n)&&o!=null)switch(n){case"value":break;case"multiple":g=o;default:a.hasOwnProperty(n)||ae(e,t,n,null,a,o)}for(i in a)if(n=a[i],o=l[i],a.hasOwnProperty(i)&&(n!=null||o!=null))switch(i){case"value":h=n;break;case"defaultValue":c=n;break;case"multiple":u=n;default:n!==o&&ae(e,t,i,n,a,o)}t=c,l=u,a=g,h!=null?Kl(e,!!l,h,!1):!!a!=!!l&&(t!=null?Kl(e,!!l,t,!0):Kl(e,!!l,l?[]:"",!1));return;case"textarea":g=h=null;for(c in l)if(i=l[c],l.hasOwnProperty(c)&&i!=null&&!a.hasOwnProperty(c))switch(c){case"value":break;case"children":break;default:ae(e,t,c,null,a,i)}for(u in a)if(i=a[u],n=l[u],a.hasOwnProperty(u)&&(i!=null||n!=null))switch(u){case"value":h=i;break;case"defaultValue":g=i;break;case"children":break;case"dangerouslySetInnerHTML":if(i!=null)throw Error(m(91));break;default:i!==n&&ae(e,t,u,i,a,n)}zo(e,h,g);return;case"option":for(var C in l)if(h=l[C],l.hasOwnProperty(C)&&h!=null&&!a.hasOwnProperty(C))switch(C){case"selected":e.selected=!1;break;default:ae(e,t,C,null,a,h)}for(o in a)if(h=a[o],g=l[o],a.hasOwnProperty(o)&&h!==g&&(h!=null||g!=null))switch(o){case"selected":e.selected=h&&typeof h!="function"&&typeof h!="symbol";break;default:ae(e,t,o,h,a,g)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var _ in l)h=l[_],l.hasOwnProperty(_)&&h!=null&&!a.hasOwnProperty(_)&&ae(e,t,_,null,a,h);for(y in a)if(h=a[y],g=l[y],a.hasOwnProperty(y)&&h!==g&&(h!=null||g!=null))switch(y){case"children":case"dangerouslySetInnerHTML":if(h!=null)throw Error(m(137,t));break;default:ae(e,t,y,h,a,g)}return;default:if($n(t)){for(var ie in l)h=l[ie],l.hasOwnProperty(ie)&&h!==void 0&&!a.hasOwnProperty(ie)&&qc(e,t,ie,void 0,a,h);for(p in a)h=a[p],g=l[p],!a.hasOwnProperty(p)||h===g||h===void 0&&g===void 0||qc(e,t,p,h,a,g);return}}for(var r in l)h=l[r],l.hasOwnProperty(r)&&h!=null&&!a.hasOwnProperty(r)&&ae(e,t,r,null,a,h);for(S in a)h=a[S],g=l[S],!a.hasOwnProperty(S)||h===g||h==null&&g==null||ae(e,t,S,h,a,g)}function Lr(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function p0(){if(typeof performance.getEntriesByType=="function"){for(var e=0,t=0,l=performance.getEntriesByType("resource"),a=0;a<l.length;a++){var i=l[a],n=i.transferSize,u=i.initiatorType,c=i.duration;if(n&&c&&Lr(u)){for(u=0,c=i.responseEnd,a+=1;a<l.length;a++){var o=l[a],y=o.startTime;if(y>c)break;var p=o.transferSize,S=o.initiatorType;p&&Lr(S)&&(o=o.responseEnd,u+=p*(o<c?1:(c-y)/(o-y)))}if(--a,t+=8*(n+u)/(i.duration/1e3),e++,10<e)break}}if(0<e)return t/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var Yc=null,Vc=null;function Cn(e){return e.nodeType===9?e:e.ownerDocument}function Br(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Gr(e,t){if(e===0)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&t==="foreignObject"?0:e}function jc(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.children=="bigint"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Xc=null;function v0(){var e=window.event;return e&&e.type==="popstate"?e===Xc?!1:(Xc=e,!0):(Xc=null,!1)}var Hr=typeof setTimeout=="function"?setTimeout:void 0,x0=typeof clearTimeout=="function"?clearTimeout:void 0,qr=typeof Promise=="function"?Promise:void 0,S0=typeof queueMicrotask=="function"?queueMicrotask:typeof qr<"u"?function(e){return qr.resolve(null).then(e).catch(E0)}:Hr;function E0(e){setTimeout(function(){throw e})}function hl(e){return e==="head"}function Yr(e,t){var l=t,a=0;do{var i=l.nextSibling;if(e.removeChild(l),i&&i.nodeType===8)if(l=i.data,l==="/$"||l==="/&"){if(a===0){e.removeChild(i),Aa(t);return}a--}else if(l==="$"||l==="$?"||l==="$~"||l==="$!"||l==="&")a++;else if(l==="html")ri(e.ownerDocument.documentElement);else if(l==="head"){l=e.ownerDocument.head,ri(l);for(var n=l.firstChild;n;){var u=n.nextSibling,c=n.nodeName;n[Ra]||c==="SCRIPT"||c==="STYLE"||c==="LINK"&&n.rel.toLowerCase()==="stylesheet"||l.removeChild(n),n=u}}else l==="body"&&ri(e.ownerDocument.body);l=i}while(l);Aa(t)}function Vr(e,t){var l=e;e=0;do{var a=l.nextSibling;if(l.nodeType===1?t?(l._stashedDisplay=l.style.display,l.style.display="none"):(l.style.display=l._stashedDisplay||"",l.getAttribute("style")===""&&l.removeAttribute("style")):l.nodeType===3&&(t?(l._stashedText=l.nodeValue,l.nodeValue=""):l.nodeValue=l._stashedText||""),a&&a.nodeType===8)if(l=a.data,l==="/$"){if(e===0)break;e--}else l!=="$"&&l!=="$?"&&l!=="$~"&&l!=="$!"||e++;l=a}while(l)}function Qc(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var l=t;switch(t=t.nextSibling,l.nodeName){case"HTML":case"HEAD":case"BODY":Qc(l),In(l);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(l.rel.toLowerCase()==="stylesheet")continue}e.removeChild(l)}}function T0(e,t,l,a){for(;e.nodeType===1;){var i=l;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!a&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(a){if(!e[Ra])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(n=e.getAttribute("rel"),n==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(n!==i.rel||e.getAttribute("href")!==(i.href==null||i.href===""?null:i.href)||e.getAttribute("crossorigin")!==(i.crossOrigin==null?null:i.crossOrigin)||e.getAttribute("title")!==(i.title==null?null:i.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(n=e.getAttribute("src"),(n!==(i.src==null?null:i.src)||e.getAttribute("type")!==(i.type==null?null:i.type)||e.getAttribute("crossorigin")!==(i.crossOrigin==null?null:i.crossOrigin))&&n&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(t==="input"&&e.type==="hidden"){var n=i.name==null?null:""+i.name;if(i.type==="hidden"&&e.getAttribute("name")===n)return e}else return e;if(e=mt(e.nextSibling),e===null)break}return null}function b0(e,t,l){if(t==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!l||(e=mt(e.nextSibling),e===null))return null;return e}function jr(e,t){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!t||(e=mt(e.nextSibling),e===null))return null;return e}function Zc(e){return e.data==="$?"||e.data==="$~"}function Kc(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function A0(e,t){var l=e.ownerDocument;if(e.data==="$~")e._reactRetry=t;else if(e.data!=="$?"||l.readyState!=="loading")t();else{var a=function(){t(),l.removeEventListener("DOMContentLoaded",a)};l.addEventListener("DOMContentLoaded",a),e._reactRetry=a}}function mt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?"||t==="$~"||t==="&"||t==="F!"||t==="F")break;if(t==="/$"||t==="/&")return null}}return e}var Fc=null;function Xr(e){e=e.nextSibling;for(var t=0;e;){if(e.nodeType===8){var l=e.data;if(l==="/$"||l==="/&"){if(t===0)return mt(e.nextSibling);t--}else l!=="$"&&l!=="$!"&&l!=="$?"&&l!=="$~"&&l!=="&"||t++}e=e.nextSibling}return null}function Qr(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var l=e.data;if(l==="$"||l==="$!"||l==="$?"||l==="$~"||l==="&"){if(t===0)return e;t--}else l!=="/$"&&l!=="/&"||t++}e=e.previousSibling}return null}function Zr(e,t,l){switch(t=Cn(l),e){case"html":if(e=t.documentElement,!e)throw Error(m(452));return e;case"head":if(e=t.head,!e)throw Error(m(453));return e;case"body":if(e=t.body,!e)throw Error(m(454));return e;default:throw Error(m(451))}}function ri(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);In(e)}var gt=new Map,Kr=new Set;function On(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var Ft=b.d;b.d={f:C0,r:O0,D:D0,C:M0,L:R0,m:z0,X:N0,S:_0,M:w0};function C0(){var e=Ft.f(),t=pn();return e||t}function O0(e){var t=Xl(e);t!==null&&t.tag===5&&t.type==="form"?fs(t):Ft.r(e)}var Ea=typeof document>"u"?null:document;function Fr(e,t,l){var a=Ea;if(a&&typeof t=="string"&&t){var i=ot(t);i='link[rel="'+e+'"][href="'+i+'"]',typeof l=="string"&&(i+='[crossorigin="'+l+'"]'),Kr.has(i)||(Kr.add(i),e={rel:e,crossOrigin:l,href:t},a.querySelector(i)===null&&(t=a.createElement("link"),Re(t,"link",e),be(t),a.head.appendChild(t)))}}function D0(e){Ft.D(e),Fr("dns-prefetch",e,null)}function M0(e,t){Ft.C(e,t),Fr("preconnect",e,t)}function R0(e,t,l){Ft.L(e,t,l);var a=Ea;if(a&&e&&t){var i='link[rel="preload"][as="'+ot(t)+'"]';t==="image"&&l&&l.imageSrcSet?(i+='[imagesrcset="'+ot(l.imageSrcSet)+'"]',typeof l.imageSizes=="string"&&(i+='[imagesizes="'+ot(l.imageSizes)+'"]')):i+='[href="'+ot(e)+'"]';var n=i;switch(t){case"style":n=Ta(e);break;case"script":n=ba(e)}gt.has(n)||(e=w({rel:"preload",href:t==="image"&&l&&l.imageSrcSet?void 0:e,as:t},l),gt.set(n,e),a.querySelector(i)!==null||t==="style"&&a.querySelector(di(n))||t==="script"&&a.querySelector(yi(n))||(t=a.createElement("link"),Re(t,"link",e),be(t),a.head.appendChild(t)))}}function z0(e,t){Ft.m(e,t);var l=Ea;if(l&&e){var a=t&&typeof t.as=="string"?t.as:"script",i='link[rel="modulepreload"][as="'+ot(a)+'"][href="'+ot(e)+'"]',n=i;switch(a){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":n=ba(e)}if(!gt.has(n)&&(e=w({rel:"modulepreload",href:e},t),gt.set(n,e),l.querySelector(i)===null)){switch(a){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(l.querySelector(yi(n)))return}a=l.createElement("link"),Re(a,"link",e),be(a),l.head.appendChild(a)}}}function _0(e,t,l){Ft.S(e,t,l);var a=Ea;if(a&&e){var i=Ql(a).hoistableStyles,n=Ta(e);t=t||"default";var u=i.get(n);if(!u){var c={loading:0,preload:null};if(u=a.querySelector(di(n)))c.loading=5;else{e=w({rel:"stylesheet",href:e,"data-precedence":t},l),(l=gt.get(n))&&Jc(e,l);var o=u=a.createElement("link");be(o),Re(o,"link",e),o._p=new Promise(function(y,p){o.onload=y,o.onerror=p}),o.addEventListener("load",function(){c.loading|=1}),o.addEventListener("error",function(){c.loading|=2}),c.loading|=4,Dn(u,t,a)}u={type:"stylesheet",instance:u,count:1,state:c},i.set(n,u)}}}function N0(e,t){Ft.X(e,t);var l=Ea;if(l&&e){var a=Ql(l).hoistableScripts,i=ba(e),n=a.get(i);n||(n=l.querySelector(yi(i)),n||(e=w({src:e,async:!0},t),(t=gt.get(i))&&Ic(e,t),n=l.createElement("script"),be(n),Re(n,"link",e),l.head.appendChild(n)),n={type:"script",instance:n,count:1,state:null},a.set(i,n))}}function w0(e,t){Ft.M(e,t);var l=Ea;if(l&&e){var a=Ql(l).hoistableScripts,i=ba(e),n=a.get(i);n||(n=l.querySelector(yi(i)),n||(e=w({src:e,async:!0,type:"module"},t),(t=gt.get(i))&&Ic(e,t),n=l.createElement("script"),be(n),Re(n,"link",e),l.head.appendChild(n)),n={type:"script",instance:n,count:1,state:null},a.set(i,n))}}function Jr(e,t,l,a){var i=(i=q.current)?On(i):null;if(!i)throw Error(m(446));switch(e){case"meta":case"title":return null;case"style":return typeof l.precedence=="string"&&typeof l.href=="string"?(t=Ta(l.href),l=Ql(i).hoistableStyles,a=l.get(t),a||(a={type:"style",instance:null,count:0,state:null},l.set(t,a)),a):{type:"void",instance:null,count:0,state:null};case"link":if(l.rel==="stylesheet"&&typeof l.href=="string"&&typeof l.precedence=="string"){e=Ta(l.href);var n=Ql(i).hoistableStyles,u=n.get(e);if(u||(i=i.ownerDocument||i,u={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},n.set(e,u),(n=i.querySelector(di(e)))&&!n._p&&(u.instance=n,u.state.loading=5),gt.has(e)||(l={rel:"preload",as:"style",href:l.href,crossOrigin:l.crossOrigin,integrity:l.integrity,media:l.media,hrefLang:l.hrefLang,referrerPolicy:l.referrerPolicy},gt.set(e,l),n||U0(i,e,l,u.state))),t&&a===null)throw Error(m(528,""));return u}if(t&&a!==null)throw Error(m(529,""));return null;case"script":return t=l.async,l=l.src,typeof l=="string"&&t&&typeof t!="function"&&typeof t!="symbol"?(t=ba(l),l=Ql(i).hoistableScripts,a=l.get(t),a||(a={type:"script",instance:null,count:0,state:null},l.set(t,a)),a):{type:"void",instance:null,count:0,state:null};default:throw Error(m(444,e))}}function Ta(e){return'href="'+ot(e)+'"'}function di(e){return'link[rel="stylesheet"]['+e+"]"}function Ir(e){return w({},e,{"data-precedence":e.precedence,precedence:null})}function U0(e,t,l,a){e.querySelector('link[rel="preload"][as="style"]['+t+"]")?a.loading=1:(t=e.createElement("link"),a.preload=t,t.addEventListener("load",function(){return a.loading|=1}),t.addEventListener("error",function(){return a.loading|=2}),Re(t,"link",l),be(t),e.head.appendChild(t))}function ba(e){return'[src="'+ot(e)+'"]'}function yi(e){return"script[async]"+e}function Wr(e,t,l){if(t.count++,t.instance===null)switch(t.type){case"style":var a=e.querySelector('style[data-href~="'+ot(l.href)+'"]');if(a)return t.instance=a,be(a),a;var i=w({},l,{"data-href":l.href,"data-precedence":l.precedence,href:null,precedence:null});return a=(e.ownerDocument||e).createElement("style"),be(a),Re(a,"style",i),Dn(a,l.precedence,e),t.instance=a;case"stylesheet":i=Ta(l.href);var n=e.querySelector(di(i));if(n)return t.state.loading|=4,t.instance=n,be(n),n;a=Ir(l),(i=gt.get(i))&&Jc(a,i),n=(e.ownerDocument||e).createElement("link"),be(n);var u=n;return u._p=new Promise(function(c,o){u.onload=c,u.onerror=o}),Re(n,"link",a),t.state.loading|=4,Dn(n,l.precedence,e),t.instance=n;case"script":return n=ba(l.src),(i=e.querySelector(yi(n)))?(t.instance=i,be(i),i):(a=l,(i=gt.get(n))&&(a=w({},l),Ic(a,i)),e=e.ownerDocument||e,i=e.createElement("script"),be(i),Re(i,"link",a),e.head.appendChild(i),t.instance=i);case"void":return null;default:throw Error(m(443,t.type))}else t.type==="stylesheet"&&(t.state.loading&4)===0&&(a=t.instance,t.state.loading|=4,Dn(a,l.precedence,e));return t.instance}function Dn(e,t,l){for(var a=l.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),i=a.length?a[a.length-1]:null,n=i,u=0;u<a.length;u++){var c=a[u];if(c.dataset.precedence===t)n=c;else if(n!==i)break}n?n.parentNode.insertBefore(e,n.nextSibling):(t=l.nodeType===9?l.head:l,t.insertBefore(e,t.firstChild))}function Jc(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.title==null&&(e.title=t.title)}function Ic(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.integrity==null&&(e.integrity=t.integrity)}var Mn=null;function kr(e,t,l){if(Mn===null){var a=new Map,i=Mn=new Map;i.set(l,a)}else i=Mn,a=i.get(l),a||(a=new Map,i.set(l,a));if(a.has(e))return a;for(a.set(e,null),l=l.getElementsByTagName(e),i=0;i<l.length;i++){var n=l[i];if(!(n[Ra]||n[Ce]||e==="link"&&n.getAttribute("rel")==="stylesheet")&&n.namespaceURI!=="http://www.w3.org/2000/svg"){var u=n.getAttribute(t)||"";u=e+u;var c=a.get(u);c?c.push(n):a.set(u,[n])}}return a}function Pr(e,t,l){e=e.ownerDocument||e,e.head.insertBefore(l,t==="title"?e.querySelector("head > title"):null)}function L0(e,t,l){if(l===1||t.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof t.precedence!="string"||typeof t.href!="string"||t.href==="")break;return!0;case"link":if(typeof t.rel!="string"||typeof t.href!="string"||t.href===""||t.onLoad||t.onError)break;switch(t.rel){case"stylesheet":return e=t.disabled,typeof t.precedence=="string"&&e==null;default:return!0}case"script":if(t.async&&typeof t.async!="function"&&typeof t.async!="symbol"&&!t.onLoad&&!t.onError&&t.src&&typeof t.src=="string")return!0}return!1}function $r(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function B0(e,t,l,a){if(l.type==="stylesheet"&&(typeof a.media!="string"||matchMedia(a.media).matches!==!1)&&(l.state.loading&4)===0){if(l.instance===null){var i=Ta(a.href),n=t.querySelector(di(i));if(n){t=n._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(e.count++,e=Rn.bind(e),t.then(e,e)),l.state.loading|=4,l.instance=n,be(n);return}n=t.ownerDocument||t,a=Ir(a),(i=gt.get(i))&&Jc(a,i),n=n.createElement("link"),be(n);var u=n;u._p=new Promise(function(c,o){u.onload=c,u.onerror=o}),Re(n,"link",a),l.instance=n}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(l,t),(t=l.state.preload)&&(l.state.loading&3)===0&&(e.count++,l=Rn.bind(e),t.addEventListener("load",l),t.addEventListener("error",l))}}var Wc=0;function G0(e,t){return e.stylesheets&&e.count===0&&_n(e,e.stylesheets),0<e.count||0<e.imgCount?function(l){var a=setTimeout(function(){if(e.stylesheets&&_n(e,e.stylesheets),e.unsuspend){var n=e.unsuspend;e.unsuspend=null,n()}},6e4+t);0<e.imgBytes&&Wc===0&&(Wc=62500*p0());var i=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&_n(e,e.stylesheets),e.unsuspend)){var n=e.unsuspend;e.unsuspend=null,n()}},(e.imgBytes>Wc?50:800)+t);return e.unsuspend=l,function(){e.unsuspend=null,clearTimeout(a),clearTimeout(i)}}:null}function Rn(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)_n(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var zn=null;function _n(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,zn=new Map,t.forEach(H0,e),zn=null,Rn.call(e))}function H0(e,t){if(!(t.state.loading&4)){var l=zn.get(e);if(l)var a=l.get(null);else{l=new Map,zn.set(e,l);for(var i=e.querySelectorAll("link[data-precedence],style[data-precedence]"),n=0;n<i.length;n++){var u=i[n];(u.nodeName==="LINK"||u.getAttribute("media")!=="not all")&&(l.set(u.dataset.precedence,u),a=u)}a&&l.set(null,a)}i=t.instance,u=i.getAttribute("data-precedence"),n=l.get(u)||a,n===a&&l.set(null,i),l.set(u,i),this.count++,a=Rn.bind(this),i.addEventListener("load",a),i.addEventListener("error",a),n?n.parentNode.insertBefore(i,n.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(i,e.firstChild)),t.state.loading|=4}}var hi={$$typeof:ze,Provider:null,Consumer:null,_currentValue:U,_currentValue2:U,_threadCount:0};function q0(e,t,l,a,i,n,u,c,o){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Zn(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Zn(0),this.hiddenUpdates=Zn(null),this.identifierPrefix=a,this.onUncaughtError=i,this.onCaughtError=n,this.onRecoverableError=u,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=o,this.incompleteTransitions=new Map}function ed(e,t,l,a,i,n,u,c,o,y,p,S){return e=new q0(e,t,l,u,o,y,p,S,c),t=1,n===!0&&(t|=24),n=et(3,null,null,t),e.current=n,n.stateNode=e,t=Ru(),t.refCount++,e.pooledCache=t,t.refCount++,n.memoizedState={element:a,isDehydrated:l,cache:t},wu(n),e}function td(e){return e?(e=ea,e):ea}function ld(e,t,l,a,i,n){i=td(i),a.context===null?a.context=i:a.pendingContext=i,a=al(t),a.payload={element:l},n=n===void 0?null:n,n!==null&&(a.callback=n),l=il(e,a,t),l!==null&&(Fe(l,e,t),Ka(l,e,t))}function ad(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var l=e.retryLane;e.retryLane=l!==0&&l<t?l:t}}function kc(e,t){ad(e,t),(e=e.alternate)&&ad(e,t)}function id(e){if(e.tag===13||e.tag===31){var t=Dl(e,67108864);t!==null&&Fe(t,e,67108864),kc(e,67108864)}}function nd(e){if(e.tag===13||e.tag===31){var t=nt();t=Kn(t);var l=Dl(e,t);l!==null&&Fe(l,e,t),kc(e,t)}}var Nn=!0;function Y0(e,t,l,a){var i=v.T;v.T=null;var n=b.p;try{b.p=2,Pc(e,t,l,a)}finally{b.p=n,v.T=i}}function V0(e,t,l,a){var i=v.T;v.T=null;var n=b.p;try{b.p=8,Pc(e,t,l,a)}finally{b.p=n,v.T=i}}function Pc(e,t,l,a){if(Nn){var i=$c(a);if(i===null)Hc(e,t,a,wn,l),cd(e,a);else if(X0(i,e,t,l,a))a.stopPropagation();else if(cd(e,a),t&4&&-1<j0.indexOf(e)){for(;i!==null;){var n=Xl(i);if(n!==null)switch(n.tag){case 3:if(n=n.stateNode,n.current.memoizedState.isDehydrated){var u=Tl(n.pendingLanes);if(u!==0){var c=n;for(c.pendingLanes|=2,c.entangledLanes|=2;u;){var o=1<<31-Pe(u);c.entanglements[1]|=o,u&=~o}Dt(n),(I&6)===0&&(mn=We()+500,oi(0))}}break;case 31:case 13:c=Dl(n,2),c!==null&&Fe(c,n,2),pn(),kc(n,2)}if(n=$c(a),n===null&&Hc(e,t,a,wn,l),n===i)break;i=n}i!==null&&a.stopPropagation()}else Hc(e,t,a,null,l)}}function $c(e){return e=tu(e),eo(e)}var wn=null;function eo(e){if(wn=null,e=jl(e),e!==null){var t=J(e);if(t===null)e=null;else{var l=t.tag;if(l===13){if(e=he(t),e!==null)return e;e=null}else if(l===31){if(e=Ne(t),e!==null)return e;e=null}else if(l===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return wn=e,null}function ud(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Dd()){case yo:return 2;case ho:return 8;case Ei:case Md:return 32;case mo:return 268435456;default:return 32}default:return 32}}var to=!1,ml=null,gl=null,pl=null,mi=new Map,gi=new Map,vl=[],j0="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function cd(e,t){switch(e){case"focusin":case"focusout":ml=null;break;case"dragenter":case"dragleave":gl=null;break;case"mouseover":case"mouseout":pl=null;break;case"pointerover":case"pointerout":mi.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":gi.delete(t.pointerId)}}function pi(e,t,l,a,i,n){return e===null||e.nativeEvent!==n?(e={blockedOn:t,domEventName:l,eventSystemFlags:a,nativeEvent:n,targetContainers:[i]},t!==null&&(t=Xl(t),t!==null&&id(t)),e):(e.eventSystemFlags|=a,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function X0(e,t,l,a,i){switch(t){case"focusin":return ml=pi(ml,e,t,l,a,i),!0;case"dragenter":return gl=pi(gl,e,t,l,a,i),!0;case"mouseover":return pl=pi(pl,e,t,l,a,i),!0;case"pointerover":var n=i.pointerId;return mi.set(n,pi(mi.get(n)||null,e,t,l,a,i)),!0;case"gotpointercapture":return n=i.pointerId,gi.set(n,pi(gi.get(n)||null,e,t,l,a,i)),!0}return!1}function od(e){var t=jl(e.target);if(t!==null){var l=J(t);if(l!==null){if(t=l.tag,t===13){if(t=he(l),t!==null){e.blockedOn=t,Eo(e.priority,function(){nd(l)});return}}else if(t===31){if(t=Ne(l),t!==null){e.blockedOn=t,Eo(e.priority,function(){nd(l)});return}}else if(t===3&&l.stateNode.current.memoizedState.isDehydrated){e.blockedOn=l.tag===3?l.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Un(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var l=$c(e.nativeEvent);if(l===null){l=e.nativeEvent;var a=new l.constructor(l.type,l);eu=a,l.target.dispatchEvent(a),eu=null}else return t=Xl(l),t!==null&&id(t),e.blockedOn=l,!1;t.shift()}return!0}function fd(e,t,l){Un(e)&&l.delete(t)}function Q0(){to=!1,ml!==null&&Un(ml)&&(ml=null),gl!==null&&Un(gl)&&(gl=null),pl!==null&&Un(pl)&&(pl=null),mi.forEach(fd),gi.forEach(fd)}function Ln(e,t){e.blockedOn===t&&(e.blockedOn=null,to||(to=!0,O.unstable_scheduleCallback(O.unstable_NormalPriority,Q0)))}var Bn=null;function sd(e){Bn!==e&&(Bn=e,O.unstable_scheduleCallback(O.unstable_NormalPriority,function(){Bn===e&&(Bn=null);for(var t=0;t<e.length;t+=3){var l=e[t],a=e[t+1],i=e[t+2];if(typeof a!="function"){if(eo(a||l)===null)continue;break}var n=Xl(l);n!==null&&(e.splice(t,3),t-=3,$u(n,{pending:!0,data:i,method:l.method,action:a},a,i))}}))}function Aa(e){function t(o){return Ln(o,e)}ml!==null&&Ln(ml,e),gl!==null&&Ln(gl,e),pl!==null&&Ln(pl,e),mi.forEach(t),gi.forEach(t);for(var l=0;l<vl.length;l++){var a=vl[l];a.blockedOn===e&&(a.blockedOn=null)}for(;0<vl.length&&(l=vl[0],l.blockedOn===null);)od(l),l.blockedOn===null&&vl.shift();if(l=(e.ownerDocument||e).$$reactFormReplay,l!=null)for(a=0;a<l.length;a+=3){var i=l[a],n=l[a+1],u=i[Ve]||null;if(typeof n=="function")u||sd(l);else if(u){var c=null;if(n&&n.hasAttribute("formAction")){if(i=n,u=n[Ve]||null)c=u.formAction;else if(eo(i)!==null)continue}else c=u.action;typeof c=="function"?l[a+1]=c:(l.splice(a,3),a-=3),sd(l)}}}function rd(){function e(n){n.canIntercept&&n.info==="react-transition"&&n.intercept({handler:function(){return new Promise(function(u){return i=u})},focusReset:"manual",scroll:"manual"})}function t(){i!==null&&(i(),i=null),a||setTimeout(l,20)}function l(){if(!a&&!navigation.transition){var n=navigation.currentEntry;n&&n.url!=null&&navigation.navigate(n.url,{state:n.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var a=!1,i=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",t),navigation.addEventListener("navigateerror",t),setTimeout(l,100),function(){a=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",t),navigation.removeEventListener("navigateerror",t),i!==null&&(i(),i=null)}}}function lo(e){this._internalRoot=e}Gn.prototype.render=lo.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(m(409));var l=t.current,a=nt();ld(l,a,e,t,null,null)},Gn.prototype.unmount=lo.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;ld(e.current,2,null,e,null,null),pn(),t[Vl]=null}};function Gn(e){this._internalRoot=e}Gn.prototype.unstable_scheduleHydration=function(e){if(e){var t=So();e={blockedOn:null,target:e,priority:t};for(var l=0;l<vl.length&&t!==0&&t<vl[l].priority;l++);vl.splice(l,0,e),l===0&&od(e)}};var dd=re.version;if(dd!=="19.2.4")throw Error(m(527,dd,"19.2.4"));b.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(m(188)):(e=Object.keys(e).join(","),Error(m(268,e)));return e=T(t),e=e!==null?k(e):null,e=e===null?null:e.stateNode,e};var Z0={bundleType:0,version:"19.2.4",rendererPackageName:"react-dom",currentDispatcherRef:v,reconcilerVersion:"19.2.4"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Hn=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Hn.isDisabled&&Hn.supportsFiber)try{Oa=Hn.inject(Z0),ke=Hn}catch{}}return xi.createRoot=function(e,t){if(!N(e))throw Error(m(299));var l=!1,a="",i=xs,n=Ss,u=Es;return t!=null&&(t.unstable_strictMode===!0&&(l=!0),t.identifierPrefix!==void 0&&(a=t.identifierPrefix),t.onUncaughtError!==void 0&&(i=t.onUncaughtError),t.onCaughtError!==void 0&&(n=t.onCaughtError),t.onRecoverableError!==void 0&&(u=t.onRecoverableError)),t=ed(e,1,!1,null,null,l,a,null,i,n,u,rd),e[Vl]=t.current,Gc(e),new lo(t)},xi.hydrateRoot=function(e,t,l){if(!N(e))throw Error(m(299));var a=!1,i="",n=xs,u=Ss,c=Es,o=null;return l!=null&&(l.unstable_strictMode===!0&&(a=!0),l.identifierPrefix!==void 0&&(i=l.identifierPrefix),l.onUncaughtError!==void 0&&(n=l.onUncaughtError),l.onCaughtError!==void 0&&(u=l.onCaughtError),l.onRecoverableError!==void 0&&(c=l.onRecoverableError),l.formState!==void 0&&(o=l.formState)),t=ed(e,1,!0,t,l??null,a,i,o,n,u,c,rd),t.context=td(null),l=t.current,a=nt(),a=Kn(a),i=al(a),i.callback=null,il(l,i,a),l=a,t.current.lanes=l,Ma(t,l),Dt(t),e[Vl]=t.current,Gc(e),new Gn(t)},xi.version="19.2.4",xi}var Td;function th(){if(Td)return no.exports;Td=1;function O(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(O)}catch(re){console.error(re)}}return O(),no.exports=eh(),no.exports}var lh=th();function ah(){const[O,re]=bd.useState(null),W=[{id:1,question:"1. Explain Raster Scan and Random Scan Display. 👉 Draw diagram + Differences (VERY IMPORTANT)",answer:"📌 100% exam question type",codeExample:`
⭐ Raster Scan Display

✅ Simple Meaning

Raster scan display draws picture line by line from top to bottom, like TV screen scanning.

📌 Working

Screen divided into small dots → Pixels
Pixel data stored in Frame Buffer (memory)
Electron beam scans row by row


📊 Raster Scan Diagram

-------------------------
| → → → → → → → → → → → |
| → → → → → → → → → → → |
| → → → → → → → → → → → |
| → → → → → → → → → → → |
 -------------------------

 Scanning line by line (Top → Bottom)

✅ Features

✔ Used in modern monitors
✔ Supports filled shapes, images, shading
✔ Cheaper technology



⭐ Random Scan Display (Vector Display)

✅ Simple Meaning

Random scan display draws picture only where lines are required (not full screen).

📌 Working

Stores line drawing instructions
Beam directly moves to draw lines
Draws one line at a time


📊 Random Scan Diagram

Screen

   \\        /
    \\      /
     \\____/
     /    \\
    /      \\

Beam directly draws required lines only


✅ Features

✔ Very smooth lines
✔ Used in old CAD systems
✔ Good for wireframe drawings



⭐ ⭐ Difference Between Raster Scan & Random Scan (VERY IMPORTANT)

| Raster Scan                 | Random Scan                  |
| --------------------------- | ---------------------------- |
| Line by line scanning       | Draws only required lines    |
| Pixel based picture         | Line based picture           |
| Uses Frame Buffer memory    | Stores line drawing commands |
| Slower for line drawing     | Faster for line drawing      |
| Low cost                    | High cost                    |
| Good for images             | Best for line drawings       |
| Used in TV, modern monitors | Used in old CAD systems      |


⭐ Easy Memory Trick 🧠

👉 Raster = Rows scanning
👉 Random = Direct line drawing


⭐ One Line Exam Definition

✅ Raster Scan:
Display where image is drawn using pixels scanned line by line.

✅ Random Scan:
Display where electron beam draws only required lines of picture.
      
      `},{id:2,question:"2. Explain DDA Line Drawing Algorithm with example.",answer:"📌 Most repeated question",codeExample:`
⭐ DDA Line Drawing Algorithm
✅ Simple Meaning

DDA (Digital Differential Analyzer) is a line drawing algorithm used to draw a straight line on screen by 
calculating intermediate points between two endpoints.

It works by calculating small steps in x or y direction and finding the next pixel position.



⭐ Formula Used

For line between two points:
(x₁, y₁) → (x₂, y₂)


Step 1: Calculate Differences
Δx = x2 – x1
Δy = y2 – y1


Step 2: Find max number 
Steps = max(|Δx|, |Δy|)


Step 3: Find increment

Xinc = Δx / Steps
Yinc = Δy / Steps


step 3: increment with X and Y

x = x + Xinc
y = y + Yinc

👉 Each calculated value is rounded to nearest integer pixel.
These incremental calculations are the base of DDA line generation. 


---------------------------------------------------------


⭐ Steps of DDA Algorithm

Step 1

Input starting point (x₁, y₁) and ending point (x₂, y₂)


Step 2

Calculate
Δx and Δy


Step 3
Find number of steps

Steps = max(|Δx|, |Δy|)


Step 4
Find increment

Xinc = Δx / Steps
Yinc = Δy / Steps


Step 5

Plot first point


Step 6

Repeat steps times
Add increments and plot next point


---------------------------------------------------------


⭐ Example (Very Important)

Given

(x₁, y₁) = (5, 6)
(x₂, y₂) = (13, 10)

Step 1
Δx = 13 – 5 = 8
Δy = 10 – 6 = 4


Step 2
Steps = max(8,4) = 8


Step 3
Xinc = 8 / 8 = 1
Yinc = 4 / 8 = 0.5


Step 4 Plot Points

| Step  | X  | Y        |
| ----- | -- | -------- |
| Start | 5  | 6        |
| 1     | 6  | 6.5 → 7  |
| 2     | 7  | 7        |
| 3     | 8  | 7.5 → 8  |
| 4     | 9  | 8        |
| 5     | 10 | 8.5 → 9  |
| 6     | 11 | 9        |
| 7     | 12 | 9.5 → 10 |
| 8     | 13 | 10       |



⭐ Advantages of DDA

✅ Simple and easy to implement
✅ Easy mathematical calculation
✅ Faster than basic line equation method
✅ Less complex logic


⭐ Disadvantages of DDA

❌ Uses floating point calculation
❌ Uses round function → increases time
❌ Less accurate than Bresenham
❌ Line may not be perfectly smooth


⭐ One Line Exam Definition

DDA is an incremental scan conversion algorithm that calculates intermediate points using slope to draw 
a straight line.

      `},{id:3,question:"3. Explain Bresenham’s Line Drawing Algorithm with example. Decision parameter Comparison with DDA ",answer:"📌 High scoring + numerical example",codeExample:`
⭐ Bresenham’s Line Drawing Algorithm
✅ Simple Meaning

Bresenham’s Line Drawing Algorithm is an efficient algorithm used to draw a straight line using only 
integer calculations.

It avoids floating point operations and rounding, so it is faster and more accurate than DDA.


⭐ Basic Idea

Instead of calculating slope (m), it uses a Decision Parameter (P) to decide which pixel to choose next.

At each step, we choose between:

  East pixel (E)
  North-East pixel (NE)

depending on the value of the decision parameter.



⭐ Decision Parameter Formula (For |m| < 1)

Given line from

      (x0​,y0​)→(xn​,yn​)


Step 1: Calculate

      Δx=xn​−x0​
      Δy=yn​−y0
      
      
Step 2: Initial Decision Parameter

      P0​=2Δy−Δx


Step 3: Update Rules

if Pk < 0
      Pk+1​=Pk​+2Δy

👉 Choose E pixel
👉 x increases by 1
👉 y remains same


if Pk >= 0
      Pk+1​=Pk​+2Δy−2Δx

👉 Choose NE pixel
👉 x increases by 1
👉 y increases by 1


⭐ Steps of Algorithm

1️⃣ Input starting and ending points
2️⃣ Calculate Δx and Δy
3️⃣ Calculate initial decision parameter
4️⃣ Plot first point
5️⃣ For each x:
If P < 0 → choose E
Else → choose NE
  6️⃣ Repeat until end point reached




⭐ Numerical Example (Very Important)

Given:

      (x0​,y0​)=(5,6)
      (xn​,yn​)=(13,10)

  
Step 1: Calculate Differences
      Δx=13−5=8
      Δy=10−6=4


Step 2: Initial Decision Parameter

      P0​=2(4)−8
      P0​=8−8=0


Step 3: Constants

      2Δy=8
      2Δy−2Δx=8−16=−8


Step 4: Iteration Table

| Step  | Pk            | Decision   | Next Point |
| ----- | ------------- | ---------- | ---------- |
| Start | 0             | P ≥ 0 → NE | (6,7)      |
| 1     | 0 + (-8) = -8 | P < 0 → E  | (7,7)      |
| 2     | -8 + 8 = 0    | NE         | (8,8)      |
| 3     | 0 + (-8) = -8 | E          | (9,8)      |
| 4     | -8 + 8 = 0    | NE         | (10,9)     |
| 5     | 0 + (-8) = -8 | E          | (11,9)     |
| 6     | -8 + 8 = 0    | NE         | (12,10)    |
| 7     | 0 + (-8) = -8 | E          | (13,10)    |



⭐ Advantages of Bresenham

✔ Uses only integer calculations
✔ No floating point
✔ Faster than DDA
✔ More accurate
✔ Less memory usage

⭐ Disadvantages

❌ Slightly complex logic
❌ Basic version works for |m| < 1 (needs modification for other slopes)



⭐ Comparison: Bresenham vs DDA (⭐ VERY IMPORTANT)

| DDA Algorithm                  | Bresenham Algorithm     |
| ------------------------------ | ----------------------- |
| Uses floating point arithmetic | Uses integer arithmetic |
| Uses rounding function         | No rounding required    |
| Less accurate                  | More accurate           |
| Slightly slower                | Faster                  |
| Easy to understand             | Slightly complex        |
| Uses slope (m)                 | Uses decision parameter |



⭐ Short Exam Definition

Bresenham’s algorithm is an incremental scan conversion algorithm that uses a decision parameter to 
determine the next pixel using integer calculations.

      `},{id:4,question:"4. Explain Midpoint Circle Algorithm with example.",answer:"📌 Very important circle algorithm",codeExample:`
⭐ Midpoint Circle Algorithm
✅ Simple Meaning

Midpoint Circle Algorithm is used to draw a circle using only integer calculations.

It is based on the circle equation:
      x2+y2=r2

Instead of calculating every point, it checks the midpoint between two possible pixels and decides which 
pixel is closer to the circle.



⭐ Basic Idea

For each step, we choose between:

  East (E) → (x+1, y)
  South-East (SE) → (x+1, y-1)

Decision depends on the Decision Parameter (P).

Because circle is symmetric, we calculate points for one octant only and use symmetry to get remaining 7 
octants.



⭐ Initial Conditions

For circle centered at (0,0):

Starting point:

      (x0​,y0​)=(0,r)

Initial decision parameter:

      P0​=1−r


⭐ Decision Parameter Update

If Pk​<0

👉 Midpoint is inside circle
Choose East pixel

      Pk+1​=Pk​+2xk​+3


If Pk​≥0

👉 Midpoint is outside circle
Choose South-East pixel

      Pk+1​=Pk​+2xk​−2yk​+5


Repeat until x≥y



⭐ Steps of Algorithm

1️⃣ Input radius r and center (xc, yc)
2️⃣ Set x = 0, y = r
3️⃣ Compute initial P = 1 − r
4️⃣ Plot 8 symmetric points
5️⃣ While x < y:
  x = x + 1
  If P < 0 → update using first formula
  Else → y = y − 1 and update using second formula
  6️⃣ Repeat



⭐ Numerical Example (Very Important)

Given:

Radius r = 10
Center = (0,0)


Step 1: Initial Values

  x0​=0
  y0​=10
  P0​=1−10=−9


Step 2: Iterations

| Step | x | y  | P  | Decision          |
| ---- | - | -- | -- | ----------------- |
| 0    | 0 | 10 | -9 | P<0 → E           |
| 1    | 1 | 10 | -6 | E                 |
| 2    | 2 | 10 | -1 | E                 |
| 3    | 3 | 10 | 6  | SE                |
| 4    | 4 | 9  | 1  | SE                |
| 5    | 5 | 8  | 2  | SE                |
| 6    | 6 | 7  | 9  | Stop (x ≥ y soon) |

Now reflect these points in all 8 octants.


⭐ 8-Way Symmetry of Circle

If calculated point is (x, y)

Other points are:

(x,y)
(y,x)
(−x,y)
(−y,x)
(−x,−y)
(−y,−x)
(x,−y)
(y,−x)




⭐ Advantages

✔ Uses only integer arithmetic
✔ Faster than direct equation method
✔ Efficient for raster display
✔ Easy to implement

⭐ Disadvantages

❌ Slight inaccuracy due to pixel approximation
❌ Circle may not be perfectly smooth


⭐ Short Exam Definition

Midpoint Circle Algorithm is an incremental algorithm that uses a decision parameter to determine the 
nearest pixel to form a circle using 8-way symmetry.


`},{id:5,question:"5. Explain Midpoint Ellipse Algorithm (steps + decision parameter).",answer:"📌 10–12 mark long answer possibility",codeExample:`
-----------------------------------------
MIDPOINT ELLIPSE ALGORITHM
-----------------------------------------

-----------------------------------------
SIMPLE MEANING
-----------------------------------------

The Midpoint Ellipse Algorithm is used to draw
an ellipse using an incremental method.

It is based on the ellipse equation:

   x²        y²
  ----  +  ----  = 1
  rx²       ry²

It uses a decision parameter to choose the
next pixel position.

Ellipse uses 4-way symmetry.


-----------------------------------------
BASIC IDEA
-----------------------------------------

Ellipse is divided into two regions:

Region 1:
Slope > -1
Move in x-direction

Region 2:
Slope < -1
Move in y-direction

After computing first quadrant,
reflect points to other quadrants.


-----------------------------------------
INITIAL SETUP
-----------------------------------------

Given:
rx = x-radius
ry = y-radius
Center = (xc , yc)

Start point:
(x0 , y0) = (0 , ry)


-----------------------------------------
REGION 1 DECISION PARAMETER
-----------------------------------------

Initial value:

P1(0) = ry² − rx²·ry + (1/4)rx²


-----------------------------------------
REGION 1 CONDITION
-----------------------------------------

While:
2ry²x < 2rx²y


Case 1: P1 < 0
→ Midpoint inside
→ Next point: (x+1 , y)

P1(k+1) = P1k + 2ry²x + ry²


Case 2: P1 ≥ 0
→ Midpoint outside
→ Next point: (x+1 , y−1)

P1(k+1) = P1k + 2ry²x − 2rx²y + ry²


-----------------------------------------
REGION 2 DECISION PARAMETER
-----------------------------------------

Initial value:

P2(0) = ry²(x + 1/2)² + rx²(y − 1)² − rx²ry²


-----------------------------------------
REGION 2 CONDITION
-----------------------------------------

While y ≥ 0


Case 1: P2 > 0
→ Next point: (x , y−1)

P2(k+1) = P2k − 2rx²y + rx²


Case 2: P2 ≤ 0
→ Next point: (x+1 , y−1)

P2(k+1) = P2k + 2ry²x − 2rx²y + rx²


-----------------------------------------
COMPLETE ALGORITHM STEPS
-----------------------------------------

1. Input rx, ry and center (xc , yc)
2. Initialize x = 0, y = ry
3. Compute P1
4. Process Region 1
5. Compute P2
6. Process Region 2
7. Apply 4-way symmetry


-----------------------------------------
4-WAY SYMMETRY
-----------------------------------------

For point (x , y):

(x , y)
(-x , y)
(x , -y)
(-x , -y)

Add center:

x = x + xc
y = y + yc


-----------------------------------------
ADVANTAGES
-----------------------------------------

✔ Efficient incremental method
✔ No floating point calculation
✔ Fast for raster display


-----------------------------------------
DISADVANTAGES
-----------------------------------------

❌ Slight approximation error
❌ More complex than circle algorithm


-----------------------------------------
SHORT EXAM DEFINITION
-----------------------------------------

Midpoint Ellipse Algorithm is an incremental
scan conversion algorithm that uses decision
parameters to generate ellipse points in two
regions using 4-way symmetry.




-----------------------------------------
NUMERICAL EXAMPLE
-----------------------------------------

Given:
rx = 8
ry = 6
Center = (0,0)

rx² = 64
ry² = 36


-----------------------------------------
INITIAL VALUES
-----------------------------------------

x = 0
y = 6

P1 = ry² − rx²·ry + (1/4)rx²
P1 = 36 − (64×6) + 16
P1 = -332


-----------------------------------------
REGION 1 TABLE
-----------------------------------------

Condition:
2ry²x < 2rx²y

| Iter | x | y | P1   | Decision          |
|------|---|---|------|-------------------|
| 0    | 0 | 6 | -332 | P1<0 → (x+1,y)    |
| 1    | 1 | 6 | -224 | P1<0 → (x+1,y)    |
| 2    | 2 | 6 | -44  | P1<0 → (x+1,y)    |
| 3    | 3 | 6 | 208  | P1≥0 → (x+1,y-1)  |
| 4    | 4 | 5 | -108 | P1<0 → (x+1,y)    |
| 5    | 5 | 5 | 288  | P1≥0 → (x+1,y-1)  |
| 6    | 6 | 4 | 148  | P1≥0 → (x+1,y-1)  |
| 7    | 7 | 3 | Exit Region 1            |


-----------------------------------------
REGION 2 INITIAL VALUE
-----------------------------------------

x = 7
y = 3

P2 = 36(7.5)² + 64(2)² − 2304
P2 = 2025 + 256 − 2304
P2 = -23


-----------------------------------------
REGION 2 TABLE
-----------------------------------------

| Iter | x | y | P2   | Decision          |
|------|---|---|------|-------------------|
| 0    | 7 | 3 | -23  | P2≤0 → (x+1,y-1)  |
| 1    | 8 | 2 | 233  | P2>0 → (x,y-1)    |
| 2    | 8 | 1 | 169  | P2>0 → (x,y-1)    |
| 3    | 8 | 0 | Stop | End               |


-----------------------------------------
FINAL POINTS (FIRST QUADRANT)
-----------------------------------------

Region 1:
(0,6)
(1,6)
(2,6)
(3,6)
(4,5)
(5,5)
(6,4)
(7,3)

Region 2:
(8,2)
(8,1)
(8,0)


-----------------------------------------
EXAM TIPS
-----------------------------------------

✔ Draw table neatly
✔ Show iterations
✔ Mention both regions
✔ Write symmetry clearly
✔ Final points must be shown


`},{id:6,question:"6. short questions",answer:"",codeExample:`
Elips for your exam :

-----------------------------------------
MIDPOINT ELLIPSE ALGORITHM (WITH EXAMPLE)
-----------------------------------------

Definition:
Midpoint Ellipse Algorithm is used to draw an ellipse
using decision parameters and 4-way symmetry.


-----------------------------------------
BASIC IDEA
-----------------------------------------

Ellipse is divided into 2 regions:

Region 1 → slope > -1 (move in x)
Region 2 → slope < -1 (move in y)


-----------------------------------------
INITIAL VALUES
-----------------------------------------

x = 0
y = ry

P1 = ry² − rx²·ry + (1/4)rx²


-----------------------------------------
REGION 1
-----------------------------------------

Condition:
2ry²x < 2rx²y

If P1 < 0 → (x+1 , y)
If P1 ≥ 0 → (x+1 , y−1)


-----------------------------------------
REGION 2
-----------------------------------------

P2 = ry²(x+1/2)² + rx²(y−1)² − rx²ry²

If P2 > 0 → (x , y−1)
If P2 ≤ 0 → (x+1 , y−1)


-----------------------------------------
SYMMETRY
-----------------------------------------

(x,y), (-x,y), (x,-y), (-x,-y)


-----------------------------------------
EXAMPLE
-----------------------------------------

Given:
rx = 4
ry = 3
Center = (0,0)

rx² = 16
ry² = 9

Initial point:
x = 0
y = 3

P1 = ry² − rx²·ry + (1/4)rx²
P1 = 9 − (16×3) + 4
P1 = -35


Now apply Region 1 (only 2–3 steps enough):

Step 1:
P1 < 0 → (1 , 3)

Step 2:
P1 < 0 → (2 , 3)

Step 3:
P1 ≥ 0 → (3 , 2)


Region 2 (only 1–2 steps):

Next:
(4 , 1)
(4 , 0)


-----------------------------------------
FINAL POINTS (FIRST QUADRANT)
-----------------------------------------

(0,3), (1,3), (2,3), (3,2), (4,1), (4,0)


-----------------------------------------
DIAGRAM
-----------------------------------------

      *
   *     *
 *         *
   *     *
      *

(draw simple ellipse)


🧠 2 MARK / MCQ – JUST READ

Pixel = Smallest screen element
Frame buffer = Stores intensity values
Resolution = Number of pixels
Refresh rate = ≥ 60 times per second
Equation of circle → x² + y² = r²
DDA uses → floating point
Bresenham uses → integer arithmetic
      
      `},{id:11,question:"11. Explain Scan Line Polygon Fill Algorithm with steps and diagram.  Must write: Steps of algorithm, Intersection points, Filling pairs of pixels",answer:"📌 Very common exam question.",codeExample:`
⭐ What is a Polygon?
✅ Simple Meaning

A polygon is a closed shape made using straight lines.
The lines connect to form a closed figure.


Examples

Triangle (3 sides)

   /\\
  /  \\
 /____\\

 Rectangle (4 sides)
 _______
|       |
|       |
|_______|

Pentagon (5 sides)

   /\\
  /  \\
 /    \\
|      |
 \\____/


👉 In computer graphics, polygons are used to draw shapes like:

triangle
rectangle
square
pentagon
hexagon
      

-------------------------------------


⭐ What is Polygon Filling?

Sometimes we want to color the inside of the shape.

Example:

Before filling

 _______
|       |
|       |
|_______|


After filling
 _______
|#######|
|#######|
|#######|

The algorithm fills the inside pixels.


-------------------------------------


⭐ Scan Line Polygon Fill (Very Simple Idea)

Imagine a horizontal line moving from top to bottom.

Polygon

   /\\ 
  /  \\
 /____\\

Scan line →

--------

The scan line cuts the polygon edges.
Where it cuts is called intersection points.


⭐ Example

Scan line

--------x1------x2--------

x1 = first intersection
x2 = second intersection

Pixels between them are filled.

--------######--------
      

-------------------------------------


⭐ If There Are 4 Intersections

--------x1---x2---x3---x4--------

Fill in pairs:

Fill x1 → x2
Skip x2 → x3
Fill x3 → x4

Result:

----#####----#####----


-------------------------------------


⭐ Simple Steps

1️⃣ Draw horizontal scan line
2️⃣ Find where it touches polygon edges
3️⃣ These points are intersection points
4️⃣ Fill pixels between pairs



⭐ Very Easy Example
Polygon

     /\\
    /  \\
---/----\\---
   \\    /
    \\__/

Scan line touches edges at:

x1        x2

Fill:

###########


⭐ One Line Definition (Exam)

A polygon is a closed shape made of straight lines, and the scan line algorithm fills the inside of the 
polygon using horizontal scanning lines.


final output like this:

        /\\
       /  \\
      /    \\
   x1/######\\x2
    /        \\
   /          \\
  /____________\\

`},{id:12,question:"12. Explain Flood Fill Algorithm with algorithm and advantages/disadvantages.  Include: 4-connected method, 8-connected method, Algorithm steps",answer:"📌 Frequently asked question.",codeExample:`
Flood Fill Algorithm

The Flood Fill Algorithm works by starting from a seed pixel and spreading to neighboring pixels that have 
the same target color until the boundary is reached.

Basic Idea

1. Start from a seed point (x, y).
2. Check if the pixel has the target color.
3. Change it to the replacement color.
4. Repeat the process for neighboring pixels.
5. Stop when pixels are different from the target color or already filled.
      

Types of Connectivity

Flood fill can be implemented using two connectivity methods.


1. 4-Connected Method

In the 4-connected method, a pixel is connected to four neighbors:

Left (x−1, y)
Right (x+1, y)
Up (x, y−1)
Down (x, y+1)


Diagram

       (x,y-1)
          |
(x-1,y) (x,y) (x+1,y)
          |
       (x,y+1)


Characteristics

  Checks only horizontal and vertical neighbors.
  Diagonal pixels are not considered connected.


Algorithm (4-Connected Flood Fill):

FloodFill4(x, y, targetColor, replacementColor)

1. If pixel(x, y) ≠ targetColor
       return

2. Set pixel(x, y) = replacementColor

3. FloodFill4(x+1, y, targetColor, replacementColor)
4. FloodFill4(x-1, y, targetColor, replacementColor)
5. FloodFill4(x, y+1, targetColor, replacementColor)
6. FloodFill4(x, y-1, targetColor, replacementColor)
      

-----------------------------------

2. 8-Connected Method

In the 8-connected method, a pixel is connected to eight neighbors, including diagonals.

Neighbors:

Left (x−1, y)
Right (x+1, y)
Up (x, y−1)
Down (x, y+1)
Top-left (x−1, y−1)
Top-right (x+1, y−1)
Bottom-left (x−1, y+1)
Bottom-right (x+1, y+1)


Diagram

(x-1,y-1) (x,y-1) (x+1,y-1)
(x-1,y)   (x,y)   (x+1,y)
(x-1,y+1) (x,y+1) (x+1,y+1)


Characteristics

  Includes diagonal connectivity.
  Covers more pixels faster than the 4-connected method.


Algorithm (8-Connected Flood Fill):

FloodFill8(x, y, targetColor, replacementColor)

1. If pixel(x, y) ≠ targetColor
       return

2. Set pixel(x, y) = replacementColor

3. FloodFill8(x+1, y, targetColor, replacementColor)
4. FloodFill8(x-1, y, targetColor, replacementColor)
5. FloodFill8(x, y+1, targetColor, replacementColor)
6. FloodFill8(x, y-1, targetColor, replacementColor)

7. FloodFill8(x+1, y+1, targetColor, replacementColor)
8. FloodFill8(x-1, y-1, targetColor, replacementColor)
9. FloodFill8(x+1, y-1, targetColor, replacementColor)
10. FloodFill8(x-1, y+1, targetColor, replacementColor)


Advantages of Flood Fill Algorithm

Simple to understand and implement.
Efficient for filling large connected areas.
Used in graphics editors and image processing applications.
Works well for region filling in computer graphics.


Disadvantages of Flood Fill Algorithm

High memory usage when recursion is deep.
Stack overflow risk for large images with recursive implementation.
Slow for very large regions because many pixels are checked.
Sometimes leaks outside boundaries if the region is not perfectly closed.


✅ Summary

| Method      | Connectivity                     | Neighbor Count |
| ----------- | -------------------------------- | -------------- |
| 4-connected | Horizontal + Vertical            | 4              |
| 8-connected | Horizontal + Vertical + Diagonal | 8              |

`},{id:13,question:"13. Explain Boundary Fill Algorithm with 4-connected and 8-connected method.  Write: Definition, Steps, Example",answer:"📌 Important for theory + algorithm",codeExample:`
Boundary Fill Algorithm
Definition

The Boundary Fill Algorithm is a computer graphics algorithm used to fill a region with a specified color 
starting from a seed point until a boundary color is reached.

The algorithm stops filling when it encounters the boundary color of the region.

It is commonly used in paint and drawing applications to color enclosed shapes.


Working Principle

1. A seed point inside the region is selected.
2. The algorithm checks the color of the pixel.
3. If the pixel is not the boundary color and not already filled, it fills the pixel.
4. The algorithm then repeats the process for neighboring pixels.
5. The process continues until the boundary color is encountered.


--------------------------------------


4-Connected Boundary Fill Method

In the 4-connected method, the algorithm checks four neighboring pixels:

Left (x−1, y)
Right (x+1, y)
Up (x, y−1)
Down (x, y+1)


Steps (Algorithm):

BoundaryFill4(x, y, fillColor, boundaryColor)

1. If pixel(x, y) is not boundaryColor 
   and pixel(x, y) is not fillColor then

2. Set pixel(x, y) = fillColor

3. Call BoundaryFill4(x+1, y, fillColor, boundaryColor)
4. Call BoundaryFill4(x-1, y, fillColor, boundaryColor)
5. Call BoundaryFill4(x, y+1, fillColor, boundaryColor)
6. Call BoundaryFill4(x, y-1, fillColor, boundaryColor)


Neighbor Structure

       (x,y-1)
          |
(x-1,y) (x,y) (x+1,y)
          |
       (x,y+1)


   
8-Connected Boundary Fill Method

In the 8-connected method, the algorithm checks eight neighboring pixels including diagonals.

Neighbors:

Left (x−1, y)
Right (x+1, y)
Up (x, y−1)
Down (x, y+1)
Top-left (x−1, y−1)
Top-right (x+1, y−1)
Bottom-left (x−1, y+1)
Bottom-right (x+1, y+1)


Steps (Algorithm):

BoundaryFill8(x, y, fillColor, boundaryColor)

1. If pixel(x, y) is not boundaryColor 
   and pixel(x, y) is not fillColor then

2. Set pixel(x, y) = fillColor

3. BoundaryFill8(x+1, y, fillColor, boundaryColor)
4. BoundaryFill8(x-1, y, fillColor, boundaryColor)
5. BoundaryFill8(x, y+1, fillColor, boundaryColor)
6. BoundaryFill8(x, y-1, fillColor, boundaryColor)

7. BoundaryFill8(x+1, y+1, fillColor, boundaryColor)
8. BoundaryFill8(x-1, y-1, fillColor, boundaryColor)
9. BoundaryFill8(x+1, y-1, fillColor, boundaryColor)
10. BoundaryFill8(x-1, y+1, fillColor, boundaryColor)


Neighbor Structure

(x-1,y-1) (x,y-1) (x+1,y-1)
(x-1,y)   (x,y)   (x+1,y)
(x-1,y+1) (x,y+1) (x+1,y+1)


Example

Suppose we have a circle drawn with a black boundary and the inside is white.

  Boundary color = Black
  Fill color = Blue
  Seed point = Any pixel inside the circle

Steps:

1. Select a pixel inside the circle.
2. Check whether it is boundary color.
3. Fill it with blue.
4. Repeat for neighboring pixels.
5. Stop when black boundary pixels are reached.

Result:
The entire region inside the circle becomes blue while the boundary remains black.


✅ Summary

| Method      | Neighbors Checked | Description                                      |
| ----------- | ----------------- | ------------------------------------------------ |
| 4-Connected | 4                 | Checks only horizontal and vertical pixels       |
| 8-Connected | 8                 | Checks horizontal, vertical, and diagonal pixels |

      `},{id:14,question:"14. Difference Between Flood Fill and Boundary Fill",answer:"",codeExample:`
1️⃣ Flood Fill Algorithm

Flood Fill looks at the color inside the shape.

Example:

Before fill

########
#      #
#      #
#      #
########

Inside color = white


If you click inside with red, it fills all white pixels.

########
#RRRRRR#
#RRRRRR#
#RRRRRR#
########

👉 It fills all connected pixels of the same color.


2️⃣ Boundary Fill Algorithm

Boundary Fill looks at the border color.

Example:

Boundary color = #

########
#      #
#      #
#      #
########


When filling starts:

It keeps filling until it touches # (boundary).
It stops at the border.

      
Easy Trick to Remember

🟢 Flood Fill → checks INSIDE color
🔵 Boundary Fill → checks BORDER color



1️⃣ Flood Fill Algorithm

Idea: Fill all connected pixels having the same interior color.

Algorithm

1. Start with a seed point (x, y) inside the region.
2. Check the color of the pixel.
3. If the pixel color = old color, change it to new color.
4. Repeat the process for neighbor pixels:

    (x+1, y)
    (x-1, y)
    (x, y+1)
    (x, y-1)

5. Continue until all connected pixels of the old color are filled.


Short Definition (Exam)

Flood Fill: A filling algorithm that replaces all connected pixels of the same interior color starting from a 
seed point.



2️⃣ Boundary Fill Algorithm

Idea: Fill the region until the boundary color is reached.

Algorithm

1. Start with a seed point (x, y) inside the region.
2. Check the pixel color.
3. If pixel color ≠ boundary color and ≠ fill color, then:
    Change it to fill color.
4. Repeat for neighboring pixels:

(x+1, y)
(x-1, y)
(x, y+1)
(x, y-1)

5. Stop when boundary color is reached.



Short Definition (Exam)

Boundary Fill: A filling algorithm that fills a region until a specified boundary color is encountered.


3️⃣ Difference Between Flood Fill and Boundary Fill

| Flood Fill Algorithm                | Boundary Fill Algorithm              |
| ------------------------------------| -------------------------------------|
| Uses interior color                 | Uses boundary color                  |
| Replaces pixels of the same color   | Stops when boundary color is reached |
| Works when region has uniform color | Works when region has clear border   |
| Does not need boundary color        | Requires boundary color              |

`},{id:15,question:"15. Explain Anti-Aliasing and its methods.",answer:"📌 Theory question often asked.",codeExample:`
What is Anti-Aliasing?

When we draw a line or curve on a computer screen, the edges look zig-zag or stair-shaped because the 
screen uses square pixels.

Example (jagged edge):

#####
    #####
         #####

This stair shape is called aliasing.
Anti-Aliasing is a method used to make edges look smooth.


Example (smoother edge):

######
  ######
    ######

The computer changes pixel brightness (color intensity) near the edges so the line looks smoother.



Methods of Anti-Aliasing

1. High Resolution Display

Idea

Use more pixels on the screen.
When pixels are very small, edges look smoother.

Example:

Low resolution

#  #  #
 #  # 

High resolution

########
 #######
  ######

Simple Meaning
More pixels → smoother image.



2. Post Filtering (Supersampling)

Idea

Each pixel is divided into smaller parts (sub-pixels).

Example:

Pixel

|----|
|____|

Divide into 4 parts:

|--|--|
|__|__|

The computer checks color in each small part and then averages them.

Result → smoother edges.



3. Pre Filtering
Idea

The computer checks how much of a pixel is covered by the object.

Example:

Pixel coverage

[████ ] 80% covered

The pixel color becomes 80% bright.
If only 20% is covered → lighter color.
This creates a smooth edge effect.



4. Pixel Phasing

Idea

The computer slightly changes pixel brightness near edges.

Example:

Dark pixel
Medium pixel
Light pixel

### 
 ## 
  #

By changing brightness, the edge looks smoother.


Very Simple Summary

| Method          | Idea                                |
| --------------- | ----------------------------------- |
| High Resolution | Use more pixels                     |
| Supersampling   | Divide pixels into small parts      |
| Pre Filtering   | Calculate how much pixel is covered |
| Pixel Phasing   | Adjust pixel brightness             |


One Line Definition (for exam)

Anti-Aliasing is a technique used to remove jagged edges in computer graphics and produce smooth 
images.
      
      `},{id:16,question:"16. Explain 2D Transformations.",answer:"📌 Write definition + matrix",codeExample:`
⭐ VERY IMPORTANT TRANSFORMATION QUESTIONS
These are almost guaranteed.

What is 2D Transformation?

In 2D Transformation, we change the position, size, or shape of an object in 2D space (x, y plane).

Example:

Move an object
Rotate an object
Increase size
Flip shape

All these are transformations.


Types of 2D Transformations

We will learn 5 types:

1. Translation
2. Rotation
3. Scaling
4. Reflection
5. Shearing
      


-----------------------------------------
TRANSLATION IN 2D TRANSFORMATION
-----------------------------------------

Definition:
Translation moves an object from one position to another 
without changing its size, shape, or orientation.

If a point P(x, y) is translated by:
Tx = translation in x-direction
Ty = translation in y-direction

New coordinates become:

x' = x + Tx
y' = y + Ty


-----------------------------------------
HOMOGENEOUS COORDINATES
-----------------------------------------

To use matrix multiplication in computer graphics,
we convert the point (x, y) into homogeneous form:

P = (x, y, 1)


-----------------------------------------
2D TRANSLATION MATRIX
-----------------------------------------

T = | 1   0   Tx |
    | 0   1   Ty |
    | 0   0   1  |


-----------------------------------------
MATRIX MULTIPLICATION
-----------------------------------------

| 1  0  Tx |     | x |     | x' |
| 0  1  Ty |  ×  | y |  =  | y' |
| 0  0  1  |     | 1 |     | 1  |


After multiplication:

x' = x + Tx
y' = y + Ty


-----------------------------------------
EXAMPLE
-----------------------------------------

Original Point:
P(2, 3)

Translation values:
Tx = 4
Ty = 2

Translation Matrix:

| 1  0  4 |
| 0  1  2 |
| 0  0  1 |

Point Matrix:

| 2 |
| 3 |
| 1 |

Multiplication:

x' = (1*2) + (0*3) + (4*1) = 6
y' = (0*2) + (1*3) + (2*1) = 5

New Point:
P'(6, 5)


-----------------------------------------
KEY POINTS
-----------------------------------------

1. Translation moves an object from one location to another.
2. Shape and size do NOT change.
3. Translation uses Tx and Ty values.
4. Homogeneous coordinates (x, y, 1) are used.
5. Translation matrix is 3×3.


------------------------------------------------------------------------------------


-----------------------------------------
ROTATION IN 2D TRANSFORMATION
-----------------------------------------

Definition:
Rotation means turning an object around a fixed point
(usually the origin) by a certain angle.

Rotation changes the orientation of the object
but the shape and size remain the same.

Angle of rotation = θ (theta)

Positive angle  → Counter-clockwise rotation
Negative angle  → Clockwise rotation


-----------------------------------------
ROTATION FORMULA
-----------------------------------------

If a point P(x, y) is rotated by angle θ about the origin,
the new coordinates become:

x' = x cosθ − y sinθ
y' = x sinθ + y cosθ


-----------------------------------------
2D ROTATION MATRIX
-----------------------------------------

R = | cosθ   -sinθ |
    | sinθ    cosθ |


-----------------------------------------
MATRIX MULTIPLICATION
-----------------------------------------

| cosθ  -sinθ |     | x |     | x' |
| sinθ   cosθ |  ×  | y |  =  | y' |


After multiplication:

x' = x cosθ − y sinθ
y' = x sinθ + y cosθ


-----------------------------------------
EXAMPLE
-----------------------------------------

Rotate point P(1, 0) by 90° counter-clockwise.

Values:
cos90° = 0
sin90° = 1

Rotation Matrix:

| 0  -1 |
| 1   0 |

Point Matrix:

| 1 |
| 0 |

Multiplication:

x' = (0*1) + (-1*0) = 0
y' = (1*1) + (0*0) = 1

New Point:
P'(0, 1)


-----------------------------------------
KEY POINTS
-----------------------------------------

1. Rotation turns an object around a fixed point.
2. Shape and size do NOT change.
3. Angle θ determines how much the object rotates.
4. Rotation matrix uses cosθ and sinθ.
5. Counter-clockwise rotation is considered positive.


------------------------------------------------------------------------------------


-----------------------------------------
SCALING IN 2D TRANSFORMATION
-----------------------------------------

Definition:
Scaling changes the size of an object in computer graphics.

It can either enlarge or shrink the object.

Sx = scaling factor in x-direction
Sy = scaling factor in y-direction


-----------------------------------------
SCALING FORMULA
-----------------------------------------

x' = Sx * x
y' = Sy * y


-----------------------------------------
2D SCALING MATRIX
-----------------------------------------

S = | Sx   0 |
    | 0    Sy |


-----------------------------------------
MATRIX MULTIPLICATION
-----------------------------------------

| Sx  0 |     | x |     | x' |
| 0  Sy |  ×  | y |  =  | y' |


After multiplication:

x' = Sx * x
y' = Sy * y


-----------------------------------------
EXAMPLE
-----------------------------------------

Original Point:
P(2, 3)

Scaling factors:
Sx = 2
Sy = 3

Scaling Matrix:

| 2  0 |
| 0  3 |

Point Matrix:

| 2 |
| 3 |

Multiplication:

x' = 2 * 2 = 4
y' = 3 * 3 = 9

New Point:
P'(4, 9)


-----------------------------------------
KEY POINTS
-----------------------------------------

1. Scaling changes the size of an object.
2. Shape remains the same.
3. Uses scaling factors Sx and Sy.
4. If Sx = Sy → Uniform scaling.
5. If Sx ≠ Sy → Differential scaling.


------------------------------------------------------------------------------------


-----------------------------------------
REFLECTION IN 2D TRANSFORMATION
-----------------------------------------

Definition:
Reflection creates a mirror image of an object
with respect to a line or axis.

The size and shape of the object remain the same,
but the orientation is reversed.


-----------------------------------------
REFLECTION ABOUT X-AXIS
-----------------------------------------

Formula:

x' = x
y' = -y

Matrix:

| 1   0 |
| 0  -1 |

Example:
(3,4) → (3,-4)


-----------------------------------------
REFLECTION ABOUT Y-AXIS
-----------------------------------------

Formula:

x' = -x
y' = y

Matrix:

| -1   0 |
|  0   1 |

Example:
(3,4) → (-3,4)


-----------------------------------------
REFLECTION ABOUT ORIGIN
-----------------------------------------

Formula:

x' = -x
y' = -y

Matrix:

| -1   0 |
|  0  -1 |

Example:
(3,4) → (-3,-4)


-----------------------------------------
KEY POINTS
-----------------------------------------

1. Reflection produces a mirror image.
2. Shape and size do not change.
3. Only the direction/orientation changes.
4. Reflection can occur about X-axis, Y-axis,
   origin, or line y = x.


------------------------------------------------------------------------------------


-----------------------------------------
SHEARING IN 2D TRANSFORMATION
-----------------------------------------

Definition:
Shearing is a transformation that shifts one part
of an object in a particular direction while
keeping the other part fixed.

It changes the shape of the object but the area
remains the same.

Shearing makes objects look slanted or tilted.

Shx = shear factor in x-direction
Shy = shear factor in y-direction


-----------------------------------------
X-SHEARING FORMULA
-----------------------------------------

x' = x + Shx * y
y' = y


-----------------------------------------
X-SHEARING MATRIX
-----------------------------------------

Shx = | 1   Shx |
      | 0    1  |


-----------------------------------------
MATRIX MULTIPLICATION
-----------------------------------------

| 1  Shx |     | x |     | x' |
| 0   1  |  ×  | y |  =  | y' |


After multiplication:

x' = x + Shx * y
y' = y


-----------------------------------------
Y-SHEARING FORMULA
-----------------------------------------

x' = x
y' = y + Shy * x


-----------------------------------------
Y-SHEARING MATRIX
-----------------------------------------

Shy = | 1   0 |
      | Shy 1 |


-----------------------------------------
MATRIX MULTIPLICATION
-----------------------------------------

| 1   0 |     | x |     | x' |
| Shy 1 |  ×  | y |  =  | y' |


After multiplication:

x' = x
y' = y + Shy * x


-----------------------------------------
EXAMPLE
-----------------------------------------

Original Point:
P(2,3)

Shear factor:
Shx = 2

X-Shearing Matrix:

| 1  2 |
| 0  1 |

Point Matrix:

| 2 |
| 3 |

Multiplication:

x' = 2 + (2*3) = 8
y' = 3

New Point:
P'(8,3)


-----------------------------------------
KEY POINTS
-----------------------------------------

1. Shearing shifts part of the object.
2. Shape changes but area remains the same.
3. There are two types: X-shear and Y-shear.
4. X-shear shifts points horizontally.
5. Y-shear shifts points vertically.


------------------------------------------------------------------------------------



      `},{id:17,question:"17. SHORT QUESTIONS",answer:"",codeExample:`
Just read these:

Regular vs Irregular polygon
Convex vs Concave polygon
Inside Outside Test (Odd-Parity rule)
Homogeneous coordinate system
Character generation methods
      
      `},{id:21,question:"21. Explain Window and Viewport with diagram.",answer:"📌 Very common theory question.",codeExample:`
1️⃣ What is a Window?

A Window is the area of the scene we choose to see.
Imagine a large picture, but you look at only one small part.
That selected part is called Window.

Example

Think of a map of India, but you only want to see Gujarat.
The selected part (Gujarat) = Window

Diagram

Whole Scene (World Coordinate)

+-----------------------------+
|                             |
|       +-----------+         |
|       |  WINDOW   |         |
|       | (selected |         |
|       |   area)   |         |
|       +-----------+         |
|                             |
+-----------------------------+

The small box is the Window.



2️⃣ What is a Viewport?

A Viewport is the area on the screen where the window is displayed.

So:

Window → what part of scene we select
Viewport → where it appears on screen

Diagram
Screen (Display Device)

+-----------------------------+
|                             |
|      +-----------+          |
|      | VIEWPORT  |          |
|      | (display  |          |
|      |   area)   |          |
|      +-----------+          |
|                             |
+-----------------------------+

The selected window is shown inside this viewport.



3️⃣ Relationship (Very Important)

Process:

World Scene
     ↓
Select Window
     ↓
Map it to Viewport
     ↓
Display on Screen

So the window content is mapped to the viewport.


4️⃣ Simple Real-Life Example

Imagine:

📷 Camera

Camera frame = Window
Phone screen where photo appears = Viewport



5️⃣ Difference Between Window and Viewport

| Window                              | Viewport                         |
| ----------------------------------- | -------------------------------- |
| Area selected from the world scene  | Area on the display screen       |
| Defined in world coordinates        | Defined in screen coordinates    |
| Shows what part of scene to display | Shows where it appears on screen |
| Exists in virtual world             | Exists on display device         |



6️⃣ Very Short Exam Definition

Window:
A window is the selected area of the world coordinate system that we want to display.

Viewport:
A viewport is the area of the display device where the window is mapped.

      `},{id:22,question:"22. Explain Viewing Transformation Pipeline.",answer:"📌 Important long answer.",codeExample:`
In Computer Graphics, objects are created in a big virtual world, but the computer must convert them 
step-by-step to screen pixels.

This process is called Viewing Transformation Pipeline.



Viewing Transformation Pipeline

It is the process of converting object coordinates from world space to screen display coordinates.

Simple flow:

World Coordinates
       ↓
Viewing Coordinates
       ↓
Normalized Coordinates
       ↓
Device Coordinates (Screen)



1️⃣ World Coordinate System (WCS)

This is the original coordinate system where objects are created.
All objects exist in a large virtual world.

Example coordinates:

A (10 , 20)
B (30 , 40)
C (50 , 60)


Diagram idea:

World Coordinate System

      Y
      |
      |        *
      |    *
      |
------|---------------- X
      |
      |           *

So WCS = complete scene or world space.



2️⃣ Viewing Coordinate System (VCS)

Now we choose which part of the world we want to see.
This is done by placing a camera or viewing position.
It converts world coordinates → viewer coordinates.
Think of it like placing a camera in the world.

Example:

    Camera sees only selected objects



3️⃣ Normalized Viewing Coordinates (NVC)

Now the selected area is scaled into a standard range.

Usually the range is:

    0 to 1

So all coordinates become normalized.

Example:

    Original range → 0 to 1 range

Example conversion:

    (20 , 40)  →  (0.4 , 0.6)

This makes calculations easier for the system.



4️⃣ Device Coordinates (DC)

Finally the normalized coordinates are converted into screen pixels.

Example screen resolution:

    800 × 600 pixels

Example:

    (0.4 , 0.6) → (320 , 360)

Now the point can be drawn on the monitor.



Complete Viewing Pipeline Diagram
You can draw this in the exam:

World Coordinate System
          ↓
Viewing Transformation
          ↓
Viewing Coordinate System
          ↓
Normalization
          ↓
Normalized Viewing Coordinates
          ↓
Device Mapping
          ↓
Device Coordinates (Screen)



Very Short Table (for quick revision)

| Stage                  | Meaning                            |
| ---------------------- | ---------------------------------- |
| WCS                    | Objects in virtual world           |
| Viewing Coordinates    | Scene relative to camera           |
| Normalized Coordinates | Coordinates scaled between 0 and 1 |
| Device Coordinates     | Final screen pixels                |

      `},{id:23,question:"23. Explain Window to Viewport Transformation.",answer:"📌 Sometimes asked with formula explanation.",codeExample:`
Window to Viewport Transformation

It is the process of converting coordinates from the window to the viewport so that the selected scene 
appears correctly on the screen.


Simple meaning:

Selected scene (Window)
        ↓
Mapped to
        ↓
Screen area (Viewport)



Diagram (Very Important for Exam)
World Coordinate System

+----------------------------+
|                            |
|        +----------+        |
|        | Window   |        |
|        |   *      |        |
|        +----------+        |
|                            |
+----------------------------+


Screen (Display Device)

+----------------------------+
|                            |
|        +----------+        |
|        | Viewport |        |
|        |   *      |        |
|        +----------+        |
|                            |
+----------------------------+

The object inside the window appears inside the viewport.



1️⃣ Scaling Transformation

The size of the window and viewport may be different, so we must scale the object.

Example:

Window size  = 100 × 100
Viewport size = 500 × 500

So the object becomes larger.

Scaling formulas:

Sx = Viewport Width / Window Width
Sy = Viewport Height / Window Height

Meaning:

Sx → horizontal scaling
Sy → vertical scaling

This resizes the object to fit inside the viewport.



2️⃣ Translation

After scaling, the object must be moved to the correct viewport position.
So we apply translation.

Example:

Move object to viewport starting position
Translation moves the coordinates so they align with the viewport location.



3️⃣ Maintaining Relative Position

This means:

Objects inside the window keep their same relative positions after mapping.

Example:

Window

A        B
   C


After transformation:

Viewport

A        B
   C

The distance ratio between objects stays the same.

Only size and position change, not the layout.
Complete Transformation Idea



The process is:

1. Select Window
2. Scale objects to match viewport size
3. Translate to viewport position
4. Maintain relative position


Simple Table (for exam writing)

| Step              | Purpose                          |
| ----------------- | -------------------------------- |
| Scaling           | Adjust size to fit viewport      |
| Translation       | Move object to viewport position |
| Relative Position | Maintain object layout           |



One Line Exam Definition

Window to Viewport Transformation is the prceoss of mapping coordinates from the window to the 
viewport using scaling and translation while maintaining atirelve positions.
      

------------------------------------------------------------------------


Example: Window → Viewport Transformation

Given

Window coordinates

xwmin = 10
ywmin = 20
xwmax = 60
ywmax = 70


Viewport coordinates

xvmin = 100
yvmin = 200
xvmax = 300
yvmax = 400


Point inside window

P (20 , 40)

We want to find the viewport point (xv , yv).



Step 1️⃣ Find Window Size

Window width

= xwmax − xwmin
= 60 − 10
= 50

Window height

= ywmax − ywmin
= 70 − 20
= 50


Step 2️⃣ Find Viewport Size

Viewport width

= xvmax − xvmin
= 300 − 100
= 200

Viewport height

= yvmax − yvmin
= 400 − 200
= 200



Step 3️⃣ Scaling Factors

Sx = (xvmax − xvmin) / (xwmax − xwmin)
Sy = (yvmax − yvmin) / (ywmax − ywmin)

Calculate:

Sx = 200 / 50 = 4
Sy = 200 / 50 = 4



Step 4️⃣ Transformation Formula

Viewport coordinates:

xv = xvmin + (xw − xwmin) Sx
yv = yvmin + (yw − ywmin) Sy



Step 5️⃣ Substitute Values

X coordinate

xv = 100 + (20 − 10) × 4
xv = 100 + 10 × 4
xv = 100 + 40
xv = 140


Y coordinate

yv = 200 + (40 − 20) × 4
yv = 200 + 20 × 4
yv = 200 + 80
yv = 280


Final Answer

Window Point  : (20 , 40)
Viewport Point: (140 , 280)

So the point moves from window to viewport.



Short Exam Format (You Can Copy)

Sx = (xvmax − xvmin) / (xwmax − xwmin)
Sy = (yvmax − yvmin) / (ywmax − ywmin)

xv = xvmin + (xw − xwmin) Sx
yv = yvmin + (yw − ywmin) Sy

      `},{id:24,question:"24. What is Clipping? Explain its types.",answer:"📌 Basic important question.",codeExample:`
1️⃣ First idea: What problem does clipping solve?

Imagine a window (visible area) on the screen.

+-------------+
|             |
|   Visible   |
|    Area     |
|             |
+-------------+


Some objects may be:

    inside the window
    outside the window
    partly inside

The computer should display only the part inside the window.
That process is called Clipping.


Simple Definition

Clipping is the process of removing the parts of objects that lie outside the viewing window.

Types:

Point Clipping
Line Clipping
Polygon Clipping
Curve Clipping
Text Clipping


Types of Clipping

1️⃣ Point Clipping

This checks whether a point lies inside the window or outside.

Window boundaries:

xmin ≤ x ≤ xmax
ymin ≤ y ≤ ymax

Example:

Window

+---------+
|         |
|   •A    |
|         |
+---------+

Point A is inside → it will be displayed.
If a point is outside → it will not be displayed.



2️⃣ Line Clipping

Sometimes a line crosses the window boundary.

Example:

Line before clipping

      /
     /
+---------+
|        /|
|       / |
|      /  |
+-----/---+

After clipping:

+---------+
|        /|
|       / |
|      /  |
+---------+

Only the part of line inside the window is shown.



3️⃣ Polygon Clipping

A polygon is a shape with many sides.

Example:

Triangle / Rectangle / Pentagon
If a polygon crosses the window boundary, the system removes the outside part.

Before clipping

     /\\ 
    /  \\ 
+--------+
|   /\\   |
|  /  \\  |
+--------+

After clipping

+--------+
|   /\\   |
|  /  \\  |
+--------+

Only the visible part remains.



4️⃣ Curve Clipping

This is used for curves like circles or arcs.

Example:

Circle before clipping

   ( )
 +------+
 |      |
 |      |
 +------+

After clipping:

 +------+
 |  )   |
 |      |
 +------+

Only the curve inside the window is shown.



5️⃣ Text Clipping

This is used when text goes outside the window.

Example:

Before clipping

HELLO WORLD
+------+
|HELLO |
|WORLD |
+------+

After clipping:

+------+
|HELLO |
|WORL  |
+------+

Only the text inside the window is displayed.



Quick Table (Good for Exam)

| Type             | Meaning                                |
| ---------------- | -------------------------------------- |
| Point Clipping   | Checks if a point is inside the window |
| Line Clipping    | Removes line parts outside window      |
| Polygon Clipping | Removes outside parts of polygons      |
| Curve Clipping   | Clips curves like circles              |
| Text Clipping    | Clips characters outside window        |

      `},{id:25,question:"25. Explain Cohen–Sutherland Line Clipping Algorithm.",answer:"📌 Most important algorithm in this unit",codeExample:`
Explain:

Region codes
9 regions concept
Inside / outside test
Logical AND operation
      


Cohen–Sutherland Line Clipping Algorithm

It is a line clipping algorithm used to remove the parts of a line that lie outside the clipping window.
Only the portion inside the window is displayed.


1️⃣ 9 Regions Concept

The window divides the space into 9 regions.

        TOP-LEFT    TOP      TOP-RIGHT
           1001     1000       1010

        LEFT       WINDOW      RIGHT
           0001     0000       0010

        BOTTOM-LEFT BOTTOM  BOTTOM-RIGHT
           0101      0100       0110

Center region 0000 is the window.
All other regions are outside areas.
Each region has a 4-bit region code.



2️⃣ Region Codes

Each point of the line gets a 4-bit binary code.

The bits represent:

TOP
BOTTOM
RIGHT
LEFT

Example format:

TOP  BOTTOM  RIGHT  LEFT

Examples:

| Position        | Code |
| --------------- | ---- |
| Inside window   | 0000 |
| Left of window  | 0001 |
| Right of window | 0010 |
| Bottom          | 0100 |
| Top             | 1000 |

So every point of the line gets a region code.



3️⃣ Inside Test (Trivial Accept)

If both endpoints have region code 0000

Point1 = 0000
Point2 = 0000

Then the line is completely inside the window.

Result:

Accept the line (draw it completely)



4️⃣ Outside Test (Trivial Reject)

If the logical AND of both region codes ≠ 0

Example:

Point1 = 1000
Point2 = 1000

Logical AND:

1000
1000
-----
1000  (not zero)

This means the line is completely outside the window.

Result:

Reject the line



5️⃣ Logical AND Operation

The algorithm performs bitwise AND on the region codes.

Example:

Code1 = 1001
Code2 = 1000
1001
1000
-----
1000

If result ≠ 0, the line is outside.
If result = 0, the line may intersect the window and must be clipped.



6️⃣ Partial Line Case

If:

Code1 ≠ 0000
Code2 ≠ 0000
AND result = 0

Then the line crosses the window boundary.
The algorithm finds the intersection point with the window edge and clips the outside part.


Steps of the Algorithm (Exam Format)

1. Assign region codes to both endpoints of the line.
2. If both codes are 0000, accept the line.
3. If logical AND of codes ≠ 0, reject the line.
4. Otherwise, calculate the intersection with window boundary.
5. Replace the outside point with the intersection point.
6. Repeat until the line is accepted or rejected.


Small Diagram Idea for Exam

          1001 | 1000 | 1010
        -----------------------
          0001 | 0000 | 0010
        -----------------------
          0101 | 0100 | 0110

Middle region 0000 = clipping window.



Quick Revision Table

| Concept      | Meaning                         |
| ------------ | ------------------------------- |
| Region Code  | 4-bit code for point location   |
| 9 Regions    | Space divided around window     |
| Inside Test  | Both codes = 0000               |
| Outside Test | Logical AND ≠ 0                 |
| Clipping     | Find intersection and trim line |
      


-----------------------------------------------------------------------------


-----------------------------------------
COHEN–SUTHERLAND LINE CLIPPING EXAMPLE
-----------------------------------------

Clipping Window:

xmin = 10
xmax = 50
ymin = 10
ymax = 50


-----------------------------------------
LINE ENDPOINTS
-----------------------------------------

P1 (5 , 20)
P2 (40 , 60)

We must check if the line is inside or outside
the clipping window.


-----------------------------------------
STEP 1 : FIND REGION CODES
-----------------------------------------

Region code format:

TOP  BOTTOM  RIGHT  LEFT


For Point P1 (5 , 20)

Check position:

x = 5  < xmin (10)  → LEFT
y = 20 is inside vertical range

Region code:

0001


For Point P2 (40 , 60)

Check position:

x = 40 inside horizontal range
y = 60 > ymax (50) → TOP

Region code:

1000


-----------------------------------------
STEP 2 : INSIDE TEST
-----------------------------------------

If both region codes = 0000
→ line is completely inside.

Here:

P1 = 0001
P2 = 1000

So the line is NOT completely inside.


-----------------------------------------
STEP 3 : OUTSIDE TEST (LOGICAL AND)
-----------------------------------------

0001
1000
-----
0000

Result = 0000

So the line is NOT completely outside.

Meaning:
The line partially intersects the window.

Therefore the line must be clipped.


-----------------------------------------
STEP 4 : FIND INTERSECTION
-----------------------------------------

We clip the point that is outside.

P1 is LEFT → intersect with left boundary.

Left boundary:

x = xmin = 10


Line equation:

y = y1 + (y2 − y1) * (x − x1) / (x2 − x1)


Substitute values:

y = 20 + (60 − 20) * (10 − 5) / (40 − 5)

y = 20 + 40 * 5 / 35

y ≈ 20 + 5.7

y ≈ 25.7


New point:

P1' (10 , 25.7)


-----------------------------------------
STEP 5 : CLIP TOP POINT
-----------------------------------------

P2 is TOP → intersect with top boundary.

Top boundary:

y = ymax = 50


Formula:

x = x1 + (x2 − x1) * (y − y1) / (y2 − y1)


Substitute values:

x = 5 + (40 − 5) * (50 − 20) / (60 − 20)

x = 5 + 35 * 30 / 40

x = 5 + 26.25

x ≈ 31.25


New point:

P2' (31.25 , 50)


-----------------------------------------
FINAL CLIPPED LINE
-----------------------------------------

Original Line:

P1 (5 , 20)
P2 (40 , 60)

After Clipping:

P1' (10 , 25.7)
P2' (31.25 , 50)

Only this portion of the line inside the
clipping window is drawn.


-----------------------------------------
SIMPLE VISUAL
-----------------------------------------

Before Clipping

       *
      /
     /
+---------+
|        /
|       /
|      *
+---------+


After Clipping

+---------+
|        *
|       /
|      *
+---------+


-----------------------------------------
LOGICAL AND (BITWISE AND)
-----------------------------------------

Logical AND compares two binary numbers.

Rule:

Bit1   Bit2   Result
0      0      0
0      1      0
1      0      0
1      1      1


Important rule:

Only 1 AND 1 = 1
All other cases = 0

`},{id:27,question:"27. Explain Polygon Clipping (Sutherland–Hodgman Algorithm).",answer:"📌 Important algorithm question.",codeExample:`
1️⃣ Idea of Polygon Clipping

Polygon clipping removes the parts of a polygon that lie outside the clipping window and keeps only the 
visible portion inside the window.

One commonly used algorithm is:

Sutherland–Hodgman Polygon Clipping Algorithm

It clips the polygon edge by edge against the boundaries of the clipping window.


2️⃣ How the Algorithm Works

The clipping window has four boundaries:

Left boundary
Right boundary
Bottom boundary
Top boundary

The polygon is processed one boundary at a time.

After clipping against one boundary, the resulting vertices become the input for the next boundary.



3️⃣ Clipping Polygon Edges

The algorithm checks each edge of the polygon.
For each pair of vertices:

Previous vertex
Current vertex

It determines whether the points are inside or outside the boundary.


There are four possible cases.

| Case | Previous | Current | Action                               |
| ---- | -------- | ------- | ------------------------------------ |
| 1    | Inside   | Inside  | Output current vertex                |
| 2    | Inside   | Outside | Output intersection point            |
| 3    | Outside  | Inside  | Output intersection + current vertex |
| 4    | Outside  | Outside | Output nothing                       |


-----------------------------------------
CLIPPING POLYGON EDGES
-----------------------------------------

The polygon is processed edge by edge.

For each pair of vertices:
Previous vertex
Current vertex

The algorithm determines whether the points
are inside or outside the clipping boundary.

Four cases are considered:

Case 1:
Previous inside, Current inside
→ Output current vertex

Case 2:
Previous inside, Current outside
→ Output intersection point

Case 3:
Previous outside, Current inside
→ Output intersection point and current vertex

Case 4:
Previous outside, Current outside
→ Output nothing



PROCESSING AGAINST BOUNDARIES
-----------------------------------------

The polygon is clipped against each boundary
of the clipping window sequentially.

Boundaries are:

1. Left boundary
2. Right boundary
3. Bottom boundary
4. Top boundary

After clipping against one boundary,
the resulting polygon becomes the input
for the next boundary.



-------------------------------------------------------

-----------------------------------------
PREVIOUS AND CURRENT VERTEX
(SUTHERLAND–HODGMAN ALGORITHM)
-----------------------------------------

1️⃣ WHAT IS PREVIOUS AND CURRENT VERTEX?

When clipping a polygon, the algorithm checks
each edge of the polygon one by one.

An edge is formed by two vertices.

Example polygon vertices:

A → B → C → D → A


While processing edges:

Edge    Previous Vertex    Current Vertex
AB      A                  B
BC      B                  C
CD      C                  D
DA      D                  A


So:

Previous vertex = starting point of the edge
Current vertex  = ending point of the edge

The algorithm moves around the polygon
vertex by vertex.


-----------------------------------------
2️⃣ SIMPLE POLYGON EXAMPLE
-----------------------------------------

Polygon:

A(20,20)
B(60,20)
C(60,60)
D(20,60)

Traversal order:

A → B → C → D → A


Edges processed:

Edge 1 : A → B
Edge 2 : B → C
Edge 3 : C → D
Edge 4 : D → A


For edge AB

Previous = A
Current  = B


For edge BC

Previous = B
Current  = C


-----------------------------------------
3️⃣ DIAGRAM (POLYGON + CLIPPING WINDOW)
-----------------------------------------

Example clipping window:

          C
          *
      +---------+
      |         |
      |   * D   |
      |         |
      +---------+
  A *            * B


Polygon vertices:

A ---- B
|      |
|      |
D ---- C


Clipping window:

+---------+
|         |
|         |
|         |
+---------+

The algorithm checks each edge
against the window boundaries.


-----------------------------------------
4️⃣ EDGE PROCESSING DIAGRAM
-----------------------------------------

Example edge:

Previous (P) -------- Current (C)


CASE 1 — BOTH INSIDE

+-------------+
|   P ---- C  |
|             |
+-------------+

Output:
C


CASE 2 — INSIDE → OUTSIDE

+-------------+
|   P ---- *  |
|        /    |
+------X------+
         C

Output:
Intersection point


CASE 3 — OUTSIDE → INSIDE

      P
      *
+------X------+
|      /      |
|     C       |
+-------------+

Output:
Intersection + C


CASE 4 — OUTSIDE → OUTSIDE

P -------- C

+-------------+
|             |
|             |
+-------------+

Output:
Nothing


-----------------------------------------
5️⃣ SIMPLE RULE TO REMEMBER
-----------------------------------------

While checking each edge:

Previous = first vertex of edge
Current  = next vertex of edge


The algorithm moves like this:

P = first vertex
C = next vertex

Process edge P → C

Then move forward:

P = C
C = next vertex
      
      `},{id:28,question:"28. 2–3 MARK QUESTIONS",answer:"",codeExample:`
-----------------------------------------
POINT CLIPPING CONDITIONS
-----------------------------------------

Point clipping determines whether a point
lies inside or outside the clipping window.

A point P(x, y) is inside the clipping window if:

xmin ≤ x ≤ xmax
ymin ≤ y ≤ ymax

If both conditions are satisfied:
→ Point is accepted.

If any condition is not satisfied:
→ Point is rejected.


-----------------------------------------
REGION CODE MEANING
-----------------------------------------

Region code (Outcode) is a 4-bit binary code
used in the Cohen–Sutherland Line Clipping Algorithm.

It represents the position of a point relative
to the clipping window.

Bit order:

TOP  BOTTOM  RIGHT  LEFT

Meaning:

0000 → Point is inside the window
1000 → Point is above the window
0100 → Point is below the window
0010 → Point is right of the window
0001 → Point is left of the window

Region codes help quickly determine whether
a line is inside, outside, or partially inside
the clipping window.


-----------------------------------------
VIEW VOLUME
-----------------------------------------

View volume is the 3D region of space that
contains the objects to be displayed.

Only the objects inside the view volume
are visible on the screen.

Objects outside the view volume are clipped.

The view volume acts as the viewing area
for 3D graphics.


-----------------------------------------
NORMALIZED VIEW VOLUME
-----------------------------------------

Normalized view volume is a standard
coordinate system used in computer graphics.

After viewing transformation, the view volume
is mapped into a normalized cube.

The coordinates are typically transformed
into the range:

0 ≤ x ≤ 1
0 ≤ y ≤ 1
0 ≤ z ≤ 1

This standard form simplifies further
processing and rendering in the graphics system.
      
      `},{id:1,question:"1. ",answer:"",codeExample:""},{id:11111,question:"Mid Paper.",answer:"",codeExample:`
=========================================
GRAPHICS PROGRAMMING - SOLVED PAPER
=========================================


-----------------------------------------
Q1 (a) (i)
Question: Define Flood Fill Algorithm.
-----------------------------------------

Answer:
Flood Fill Algorithm is used to fill a connected
region with a specified color starting from a
seed point until the boundary is reached.


-----------------------------------------
Q1 (a) (ii)
Question: What is 2D Translation transformation?
-----------------------------------------

Answer:
2D Translation is a transformation that moves
an object from one position to another by adding
a constant value to its coordinates.

x' = x + tx
y' = y + ty


-----------------------------------------
Q1 (a) (iii)
Question: What is a Viewport?
-----------------------------------------

Answer:
Viewport is the rectangular area on the display
screen where the final image is shown.


-----------------------------------------
Q1 (b) MCQs
-----------------------------------------

1. Flood Fill Algorithm
2. Bresenham’s Algorithm
3. Translation
4. Viewport
5. Line style
6. (0, r)
7. Antialiasing



-----------------------------------------
Q2 (a) (i)
Question: Difference between DDA and Bresenham
-----------------------------------------

Answer:

DDA Algorithm:
- Uses floating point calculations
- Slower
- Less efficient

Bresenham Algorithm:
- Uses integer calculations
- Faster
- More efficient


-----------------------------------------
Q2 (a) (ii)
Question: Difference between Flood Fill and Boundary Fill
-----------------------------------------

Answer:

Flood Fill:
- Fills area until boundary color is found
- Uses interior color

Boundary Fill:
- Fills area until boundary is reached
- Uses boundary color


-----------------------------------------
Q2 (b) (i)
Question: Raster Scan vs Random Scan
-----------------------------------------

Answer:

Raster Scan:
- Draws image line by line
- Used in TV, monitors
- Advantage: Simple and low cost

Random Scan:
- Draws only required lines
- Used in vector displays
- Advantage: High resolution


-----------------------------------------
Q2 (b) (ii)
Question: Midpoint Circle vs Bresenham Circle
-----------------------------------------
-----------------------------------------
MIDPOINT CIRCLE vs BRESENHAM CIRCLE
-----------------------------------------

-----------------------------------------
MIDPOINT CIRCLE ALGORITHM
-----------------------------------------

Definition:
Midpoint Circle Algorithm is used to draw a
circle using a decision parameter to choose
the next pixel.

It checks whether the midpoint is inside or
outside the circle.


-----------------------------------------
INITIAL VALUES
-----------------------------------------

x = 0
y = r

Decision parameter:

p = 1 - r


-----------------------------------------
ALGORITHM STEPS
-----------------------------------------

1. Input radius r and center (xc , yc)
2. Initialize x = 0, y = r
3. Calculate p = 1 - r
4. Plot initial point (x , y)

5. While x < y:

   If p < 0:
      x = x + 1
      p = p + 2x + 1

   Else:
      x = x + 1
      y = y - 1
      p = p + 2x + 1 - 2y

6. Plot symmetric points using 8-way symmetry


-----------------------------------------
FEATURES
-----------------------------------------

✔ Uses decision parameter
✔ Based on midpoint concept
❌ May involve floating calculations


-----------------------------------------
BRESENHAM CIRCLE ALGORITHM
-----------------------------------------

Definition:
Bresenham Circle Algorithm is an efficient
algorithm that uses only integer calculations
to draw a circle.


-----------------------------------------
INITIAL VALUES
-----------------------------------------

x = 0
y = r

Decision parameter:

p = 3 - 2r


-----------------------------------------
ALGORITHM STEPS
-----------------------------------------

1. Input radius r and center (xc , yc)
2. Initialize x = 0, y = r
3. Calculate p = 3 - 2r
4. Plot initial point (x , y)

5. While x < y:

   If p < 0:
      x = x + 1
      p = p + 4x + 6

   Else:
      x = x + 1
      y = y - 1
      p = p + 4x + 6 - 4y

6. Plot symmetric points using 8-way symmetry


-----------------------------------------
FEATURES
-----------------------------------------

✔ Uses only integer arithmetic
✔ Faster and more efficient
✔ Widely used in graphics systems


-----------------------------------------
DIFFERENCE BETWEEN BOTH
-----------------------------------------

Midpoint Circle:
- Uses p = 1 - r
- Concept based on midpoint
- Slightly slower
- May use floating operations

Bresenham Circle:
- Uses p = 3 - 2r
- Uses integer calculations only
- Faster and efficient
- More practical for implementation




-----------------------------------------
Q3 (i)
Question: Scan-line Polygon Fill Algorithm
-----------------------------------------

Answer:

Steps:
1. Find intersections of scan line with polygon edges
2. Sort intersection points
3. Fill pixels between pairs of intersections
4. Repeat for all scan lines

Used to fill polygons efficiently.


-----------------------------------------
Q3 (ii)
Question: Transformation of point P(2,3)
-----------------------------------------

Answer:

Given:
P = (2,3)

Step 1: Translation (2,1)
(2+2 , 3+1) = (4,4)

Step 2: Rotation 90° anticlockwise
(x,y) → (-y,x)

(4,4) → (-4,4)

Step 3: Scaling (2,2)
(-4×2 , 4×2) = (-8 , 8)

Final Answer:
(-8 , 8)


-----------------------------------------
Q3 (iii)
Question: Importance of Computer Graphics
-----------------------------------------

Answer:

1. Education:
Visual learning, simulations

2. Medical:
CT scan, MRI visualization

3. Entertainment:
Games, movies, animation

CG improves understanding and visualization.



-----------------------------------------
Q4 (a)
Question: DDA Line from (2,3) to (10,7)
-----------------------------------------

-----------------------------------------
DDA LINE DRAWING ALGORITHM
-----------------------------------------

1. Input: (x1, y1) and (x2, y2)
2. Calculate:
   dx = x2 - x1
   dy = y2 - y1
3. steps = max(|dx|, |dy|)
4. x_inc = dx / steps
   y_inc = dy / steps
5. Initialize:
   x = x1
   y = y1
6. Plot (x, y)
7. Repeat for steps:
   x = x + x_inc
   y = y + y_inc
   Plot (round(x), round(y))


-----------------------------------------
CALCULATION
-----------------------------------------

Given:
(2,3) to (10,7)

dx = 8
dy = 4

steps = 8

x_inc = 1
y_inc = 0.5


-----------------------------------------
POINTS
-----------------------------------------

(2,3)
(3,3.5)
(4,4)
(5,4.5)
(6,5)
(7,5.5)
(8,6)
(9,6.5)
(10,7)


-----------------------------------------
Q4 (b)
Question: Rotation of point (3,4)
-----------------------------------------

-----------------------------------------
2D ROTATION ALGORITHM
-----------------------------------------

1. Input point (x, y)
2. Choose angle θ
3. Apply formula:

x' = x cosθ - y sinθ
y' = x sinθ + y cosθ


-----------------------------------------
FOR 90° ANTICLOCKWISE
-----------------------------------------

cos90 = 0
sin90 = 1

So:

x' = -y
y' = x


-----------------------------------------
CALCULATION
-----------------------------------------

Given:
(3,4)

x' = -4
y' = 3

Final Answer:
(-4 , 3)


-----------------------------------------
Q4 (b) OR
Question: Bresenham Line from (0,0) to (6,3)
-----------------------------------------

-----------------------------------------
BRESENHAM LINE ALGORITHM
-----------------------------------------

1. Input: (x1, y1), (x2, y2)
2. Calculate:
   dx = x2 - x1
   dy = y2 - y1
3. Decision parameter:
   p = 2dy - dx
4. Initialize:
   x = x1
   y = y1
5. Plot (x, y)

6. Repeat until x = x2:

   If p < 0:
      x = x + 1
      p = p + 2dy

   Else:
      x = x + 1
      y = y + 1
      p = p + 2dy - 2dx

   Plot (x, y)


-----------------------------------------
CALCULATION
-----------------------------------------

dx = 6
dy = 3

p = 2dy - dx = 6 - 6 = 0


-----------------------------------------
POINTS
-----------------------------------------

(0,0)
(1,0)
(2,1)
(3,1)
(4,2)
(5,2)
(6,3)

`},{id:1,question:"1. ",answer:"",codeExample:""},{id:1,question:"1. ",answer:"",codeExample:""},{id:1,question:"1. ",answer:"",codeExample:""},{id:1,question:"1. ",answer:"",codeExample:""},{id:1,question:"1. ",answer:"",codeExample:""},{id:1.1,question:"1. DDA Line Drawing Algorithm",answer:"",codeExample:`
#include <GL/glut.h>
#include <math.h>

void drawDDA(int x1, int y1, int x2, int y2) {
    float dx = x2 - x1;
    float dy = y2 - y1;
    float steps = (fabs(dx) > fabs(dy)) ? fabs(dx) : fabs(dy);

    float Xinc = dx / steps;
    float Yinc = dy / steps;

    float x = x1;
    float y = y1;

    glBegin(GL_POINTS);
    for (int i = 0; i <= (int)steps; i++) {
        glVertex2i(round(x), round(y));
        x += Xinc;
        y += Yinc;
    }
    glEnd();
    glFlush();
}

void display() {
    glClear(GL_COLOR_BUFFER_BIT);
    // Draw a line from (50, 100) to (300, 250)
    drawDDA(50, 100, 300, 250);
}

void init() {
    glClearColor(0.0, 0.0, 0.0, 1.0); // Set background color to black
    glMatrixMode(GL_PROJECTION);
    gluOrtho2D(0, 500, 0, 500); // Set coordinate system
}

int main(int argc, char** argv) {
    glutInit(&argc, argv);
    glutInitDisplayMode(GLUT_SINGLE | GLUT_RGB);
    glutInitWindowSize(500, 500);
    glutInitWindowPosition(100, 100);
    glutCreateWindow("DDA Line Drawing Algorithm");

    init();
    glutDisplayFunc(display);
    glutMainLoop();

    return 0;
}

      
      `},{id:2.2,question:"2. Bresenham's Line Drawing Algorithm",answer:"",codeExample:`
#include <GL/glut.h>
#include <stdlib.h>

/* Bresenham Line Drawing Algorithm */
void drawLine(int x0, int y0, int x1, int y1) {
    int dx = x1 - x0;
    int dy = y1 - y0;
    int p = 2 * dy - dx; // Initial decision parameter P0 = 2Δy - Δx
    int x = x0;
    int y = y0;

    glBegin(GL_POINTS);
    // Step 2: Plot the first point
    glVertex2i(x, y);

    // Step 5: Repeat Δx times
    for (int k = 0; k < dx; k++) {
        if (p < 0) {
            // Decision: Choose East pixel
            x = x + 1;
            p = p + 2 * dy;
        } else {
            // Decision: Choose North-East pixel
            x = x + 1;
            y = y + 1;
            p = p + 2 * dy - 2 * dx;
        }
        glVertex2i(x, y); // Plot next point
    }
    glEnd();
}

/* Display callback */
void display() {
    glClear(GL_COLOR_BUFFER_BIT);
    glColor3f(1.0, 0.0, 0.0); // Set line color to Red

    // Example: Line from (50, 100) to (300, 250)
    drawLine(50, 100, 300, 250);
    glFlush();
}

/* Initialize OpenGL */
void init() {
    glClearColor(1.0, 1.0, 1.0, 1.0); // White background
    glMatrixMode(GL_PROJECTION);
    glLoadIdentity();
    gluOrtho2D(0, 500, 0, 500); // 2D coordinate system setup
}

/* Main function */
int main(int argc, char **argv) {
    glutInit(&argc, argv);
    glutInitDisplayMode(GLUT_SINGLE | GLUT_RGB);
    glutInitWindowSize(500, 500);
    glutInitWindowPosition(100, 100);
    glutCreateWindow("Bresenham Line Drawing Algorithm");

    init();
    glutDisplayFunc(display);
    glutMainLoop();

    return 0;
}



      
      `},{id:3.3,question:"3. Draw a circle using the Midpoint Circle Algorithm.",answer:"",codeExample:`
#include <GL/glut.h>
#include <stdio.h>

// Circle center and radius
int xc = 0, yc = 0, r;

/* Function to plot 8 symmetric points of the circle */
void plotPoints(int x, int y) {
    glBegin(GL_POINTS);
    glVertex2i(xc + x, yc + y);
    glVertex2i(xc - x, yc + y);
    glVertex2i(xc + x, yc - y);
    glVertex2i(xc - x, yc - y);
    glVertex2i(xc + y, yc + x);
    glVertex2i(xc - y, yc + x);
    glVertex2i(xc + y, yc - x);
    glVertex2i(xc - y, yc - x);
    glEnd();
}

/* Midpoint Circle Algorithm */
void drawCircle() {
    int x = 0;
    int y = r;
    int p = 1 - r; // Initial decision parameter

    plotPoints(x, y);

    while (x < y) {
        x++;
        if (p < 0) {
            p = p + 2 * x + 1;
        } else {
            y--;
            p = p + 2 * (x - y) + 1;
        }
        plotPoints(x, y);
    }
}

/* Display function */
void display() {
    glClear(GL_COLOR_BUFFER_BIT);
    glColor3f(1.0, 0.0, 0.0); // Red color for the circle
    glPointSize(2.0);         // Makes the line thicker

    drawCircle();
    glFlush();
}

/* Initialize OpenGL settings */
void init() {
    glClearColor(1.0, 1.0, 1.0, 1.0); // White background
    glMatrixMode(GL_PROJECTION);
    gluOrtho2D(-200, 200, -200, 200); // 2D coordinate system centered at (0,0)
}

/* Main function */
int main(int argc, char** argv) {
    printf("Enter radius: ");
    if (scanf("%d", &r) != 1) return 1;

    glutInit(&argc, argv);
    glutInitDisplayMode(GLUT_SINGLE | GLUT_RGB);
    glutInitWindowSize(500, 500);
    glutInitWindowPosition(100, 100);
    glutCreateWindow("Midpoint Circle Algorithm");

    init();
    glutDisplayFunc(display);
    glutMainLoop();

    return 0;
}


      `},{id:4.4,question:"4. Implement Bresenham’s circle drawing algorithm to generate a circle.",answer:"",codeExample:`
#include <GL/glut.h>
#include <stdio.h>

int radius;

/* Function to plot 8-way symmetric points */
void plotCirclePoints(int xc, int yc, int x, int y) {
    glBegin(GL_POINTS);
    glVertex2i(xc + x, yc + y);
    glVertex2i(xc - x, yc + y);
    glVertex2i(xc + x, yc - y);
    glVertex2i(xc - x, yc - y);
    glVertex2i(xc + y, yc + x);
    glVertex2i(xc - y, yc + x);
    glVertex2i(xc + y, yc - x);
    glVertex2i(xc - y, yc - x);
    glEnd();
}

/* Bresenham's Circle Drawing Algorithm */
void drawCircle(int xc, int yc, int r) {
    int x = 0;
    int y = r;
    int d = 3 - 2 * r; // Initial decision parameter

    plotCirclePoints(xc, yc, x, y);

    while (x <= y) {
        x++;
        if (d < 0) {
            d = d + 4 * x + 6;
        } else {
            y--;
            d = d + 4 * (x - y) + 10;
        }
        plotCirclePoints(xc, yc, x, y);
    }
}

/* Display Function */
void display() {
    glClear(GL_COLOR_BUFFER_BIT);
    glColor3f(1.0, 0.0, 0.0); // Red color for the circle
    glPointSize(2.0);

    drawCircle(0, 0, radius); // Draw circle at origin (0,0)
    glFlush();
}

/* Initialization */
void init() {
    glClearColor(0.0, 0.0, 0.0, 1.0); // Black background
    glMatrixMode(GL_PROJECTION);
    glLoadIdentity();
    gluOrtho2D(-200, 200, -200, 200); // Set coordinate system
}

/* Main Function */
int main(int argc, char** argv) {
    printf("Enter the radius of the circle: ");
    if (scanf("%d", &radius) != 1) return 1;

    glutInit(&argc, argv);
    glutInitDisplayMode(GLUT_SINGLE | GLUT_RGB);
    glutInitWindowSize(500, 500);
    glutInitWindowPosition(100, 100);
    glutCreateWindow("Bresenham Circle Drawing Algorithm");

    init();
    glutDisplayFunc(display);
    glutMainLoop();

    return 0;
}

      
      `},{id:5.5,question:"5. Draw an ellipse using the Midpoint Ellipse Algorithm.",answer:"",codeExample:`
#include <GL/glut.h>
#include <stdio.h>
#include <math.h>

int rx, ry, xc = 0, yc = 0;

/* Function to plot 4 symmetric points of the ellipse */
void plotPoints(int x, int y) {
    glBegin(GL_POINTS);
    glVertex2i(xc + x, yc + y);
    glVertex2i(xc - x, yc + y);
    glVertex2i(xc + x, yc - y);
    glVertex2i(xc - x, yc - y);
    glEnd();
}

/* Midpoint Ellipse Algorithm */
void midpointEllipse() {
    float dx, dy, d1, d2, x, y;
    x = 0;
    y = ry;

    // Initial decision parameter for Region 1
    d1 = (ry * ry) - (rx * rx * ry) + (0.25 * rx * rx);
    dx = 2 * ry * ry * x;
    dy = 2 * rx * rx * y;

    // -------- Region 1 --------
    while (dx < dy) {
        plotPoints(x, y);
        if (d1 < 0) {
            x++;
            dx = dx + (2 * ry * ry);
            d1 = d1 + dx + (ry * ry);
        } else {
            x++;
            y--;
            dx = dx + (2 * ry * ry);
            dy = dy - (2 * rx * rx);
            d1 = d1 + dx - dy + (ry * ry);
        }
    }

    // Initial decision parameter for Region 2
    d2 = ((ry * ry) * ((x + 0.5) * (x + 0.5))) +
         ((rx * rx) * ((y - 1) * (y - 1))) -
         (rx * rx * ry * ry);

    // -------- Region 2 --------
    while (y >= 0) {
        plotPoints(x, y);
        if (d2 > 0) {
            y--;
            dy = dy - (2 * rx * rx);
            d2 = d2 + (rx * rx) - dy;
        } else {
            y--;
            x++;
            dx = dx + (2 * ry * ry);
            dy = dy - (2 * rx * rx);
            d2 = d2 + dx - dy + (rx * rx);
        }
    }
}

/* Display function */
void display() {
    glClear(GL_COLOR_BUFFER_BIT);
    glColor3f(1.0, 1.0, 1.0); // White ellipse
    midpointEllipse();
    glFlush();
}

/* Initialization */
void init() {
    glClearColor(0.0, 0.0, 0.0, 1.0); // Black background
    glMatrixMode(GL_PROJECTION);
    glLoadIdentity();
    gluOrtho2D(-500, 500, -500, 500); // 2D coordinate system
}

/* Main function */
int main(int argc, char** argv) {
    printf("Enter rx: ");
    if (scanf("%d", &rx) != 1) return 1;
    printf("Enter ry: ");
    if (scanf("%d", &ry) != 1) return 1;

    glutInit(&argc, argv);
    glutInitDisplayMode(GLUT_SINGLE | GLUT_RGB);
    glutInitWindowSize(800, 800);
    glutInitWindowPosition(100, 100);
    glutCreateWindow("Midpoint Ellipse Algorithm - OpenGL");

    init();
    glutDisplayFunc(display);
    glutMainLoop();

    return 0;
}

      
      `},{id:6.6,question:"6. Scan-line",answer:"",codeExample:`
#include <GL/glut.h>
#include <stdio.h>
#include <stdlib.h>

int x[10], y[10];   // Polygon vertices
int n = 4;          // Number of vertices

// Function to draw a pixel
void drawPixel(int px, int py) {
    glBegin(GL_POINTS);
    glVertex2i(px, py);
    glEnd();
}

// Scan-line filling function
void scanline() {
    int i, j, k;
    int ymin = 500, ymax = 0;
    int interx[10];

    // Find ymin and ymax of the polygon
    for (i = 0; i < n; i++) {
        if (y[i] < ymin) ymin = y[i];
        if (y[i] > ymax) ymax = y[i];
    }

    // Move scanline from ymin to ymax
    for (int scan = ymin; scan <= ymax; scan++) {
        k = 0; // Reset intersection counter

        // Check each edge for intersection with the current scanline
        for (i = 0; i < n; i++) {
            int next = (i + 1) % n;

            // Ignore horizontal edges to avoid division by zero
            if (y[i] == y[next]) continue;

            // Check if scanline intersects the edge
            if (scan >= (y[i] < y[next] ? y[i] : y[next]) &&
                scan < (y[i] > y[next] ? y[i] : y[next])) {
                
                // Calculate x-intersection using the line equation
                interx[k] = x[i] + (float)(scan - y[i]) * (x[next] - x[i]) / (y[next] - y[i]);
                k++;
            }
        }

        // Sort intersection points (simple bubble sort)
        for (i = 0; i < k - 1; i++) {
            for (j = i + 1; j < k; j++) {
                if (interx[i] > interx[j]) {
                    int temp = interx[i];
                    interx[i] = interx[j];
                    interx[j] = temp;
                }
            }
        }

        // Fill pixels between pairs of intersections
        for (i = 0; i < k; i += 2) {
            for (j = interx[i]; j <= interx[i + 1]; j++) {
                drawPixel(j, scan);
            }
        }
    }
}

// Display function
void display() {
    glClear(GL_COLOR_BUFFER_BIT);
    glColor3f(1.0, 0.0, 0.0); // Red fill color
    scanline();
    glFlush();
}

// Initialization
void init() {
    glClearColor(1.0, 1.0, 1.0, 1.0); // White background
    glMatrixMode(GL_PROJECTION);
    glLoadIdentity();
    gluOrtho2D(0, 500, 0, 500); // 2D coordinate system
}

// Main function
int main(int argc, char** argv) {
    // Define polygon vertices
    x[0] = 100; y[0] = 100;
    x[1] = 200; y[1] = 300;
    x[2] = 350; y[2] = 250;
    x[3] = 300; y[3] = 100;

    glutInit(&argc, argv);
    glutInitDisplayMode(GLUT_SINGLE | GLUT_RGB);
    glutInitWindowSize(500, 500);
    glutInitWindowPosition(100, 100);
    glutCreateWindow("Scan Line Polygon Fill - C");

    init();
    glutDisplayFunc(display);
    glutMainLoop();

    return 0;
}

      `},{id:7.7,question:"7. boundary-fill",answer:"",codeExample:`
#include <GL/glut.h>
#include <stdio.h>

// Global colors
float boundaryColor[3] = {0.0, 0.0, 0.0}; // Black boundary
float fillColor[3]     = {1.0, 0.0, 0.0}; // Red fill

// Function to set pixel
void setPixel(int x, int y) {
    glColor3fv(fillColor);
    glBegin(GL_POINTS);
    glVertex2i(x, y);
    glEnd();
    glFlush();
}

// Function to get pixel color
void getPixel(int x, int y, float color[3]) {
    glReadPixels(x, y, 1, 1, GL_RGB, GL_FLOAT, color);
}

// Boundary Fill Function (4-connected recursion)
void boundaryFill(int x, int y) {
    float currentColor[3];
    getPixel(x, y, currentColor);

    // If current pixel is NOT boundary and NOT already filled
    if ((currentColor[0] != boundaryColor[0] || currentColor[1] != boundaryColor[1] || currentColor[2] != boundaryColor[2]) &&
        (currentColor[0] != fillColor[0] || currentColor[1] != fillColor[1] || currentColor[2] != fillColor[2])) {
        
        setPixel(x, y);

        // Recursive calls in 4 directions
        boundaryFill(x + 1, y);
        boundaryFill(x - 1, y);
        boundaryFill(x, y + 1);
        boundaryFill(x, y - 1);
    }
}

// Draw the polygon boundary to be filled
void drawPolygon() {
    glColor3fv(boundaryColor);
    glBegin(GL_LINE_LOOP);
        glVertex2i(150, 150);
        glVertex2i(350, 150);
        glVertex2i(350, 350);
        glVertex2i(150, 350);
    glEnd();
    glFlush();
}

// Mouse function: Filling starts where you click
void mouse(int button, int state, int x, int y) {
    if (button == GLUT_LEFT_BUTTON && state == GLUT_DOWN) {
        boundaryFill(x, 500 - y); // Invert y for OpenGL coordinates
    }
}

void display() {
    glClear(GL_COLOR_BUFFER_BIT);
    drawPolygon();
}

void init() {
    glClearColor(1.0, 1.0, 1.0, 1.0); // White background
    glMatrixMode(GL_PROJECTION);
    glLoadIdentity();
    gluOrtho2D(0, 500, 0, 500);
}

int main(int argc, char** argv) {
    glutInit(&argc, argv);
    glutInitDisplayMode(GLUT_SINGLE | GLUT_RGB);
    glutInitWindowSize(500, 500);
    glutCreateWindow("Boundary Fill Algorithm - C");

    init();
    glutDisplayFunc(display);
    glutMouseFunc(mouse);
    glutMainLoop();

    return 0;
}

      
      `},{id:8.8,question:"8. Flood Fill Algorithm.",answer:"",codeExample:`
#include <GL/glut.h>
#include <stdio.h>

float fillColor[] = {1.0, 0.0, 0.0};   // Red
float oldColor[]  = {1.0, 1.0, 1.0};   // White

// Get pixel color
void getPixel(int x, int y, float color[3])
{
    glReadPixels(x, y, 1, 1, GL_RGB, GL_FLOAT, color);
}

// Set pixel color
void setPixel(int x, int y)
{
    glColor3fv(fillColor);
    glBegin(GL_POINTS);
    glVertex2i(x, y);
    glEnd();
    glFlush();
}

// Flood Fill Function
void floodFill(int x, int y)
{
    float current[3];
    getPixel(x, y, current);

    if (current[0] == oldColor[0] &&
        current[1] == oldColor[1] &&
        current[2] == oldColor[2])
    {
        setPixel(x, y);

        floodFill(x + 1, y);
        floodFill(x - 1, y);
        floodFill(x, y + 1);
        floodFill(x, y - 1);
    }
}

// Display Function
void display()
{
    glClear(GL_COLOR_BUFFER_BIT);

    // Draw Square
    glColor3f(0.0, 0.0, 0.0);
    glBegin(GL_LINE_LOOP);
        glVertex2i(200, 200);
        glVertex2i(400, 200);
        glVertex2i(400, 400);
        glVertex2i(200, 400);
    glEnd();

    // Start Flood Fill from inside point
    floodFill(300, 300);

    glFlush();
}

// Initialization
void init()
{
    glClearColor(1.0, 1.0, 1.0, 1.0); // White background
    gluOrtho2D(0, 500, 0, 500);
}

// Main
int main(int argc, char** argv)
{
    glutInit(&argc, argv);
    glutInitDisplayMode(GLUT_SINGLE | GLUT_RGB);
    glutInitWindowSize(500, 500);
    glutCreateWindow("Simple Flood Fill");

    init();
    glutDisplayFunc(display);

    glutMainLoop();
    return 0;
}
      `},{id:9.9,question:"9. Transformation",answer:"",codeExample:`
#include <GL/glut.h>
#include <stdio.h>

int tx = 100, ty = 50;   // Translation values

// Original rectangle coordinates
int x1 = 100, y1 = 100;
int x2 = 200, y2 = 200;

// Function to draw rectangle
void drawRectangle(int x1, int y1, int x2, int y2)
{
    glBegin(GL_LINE_LOOP);
        glVertex2i(x1, y1);
        glVertex2i(x2, y1);
        glVertex2i(x2, y2);
        glVertex2i(x1, y2);
    glEnd();
}

// Display function
void display()
{
    glClear(GL_COLOR_BUFFER_BIT);

    // Original Rectangle (Black)
    glColor3f(0.0, 0.0, 0.0);
    drawRectangle(x1, y1, x2, y2);

    // Translated Rectangle (Red)
    glColor3f(1.0, 0.0, 0.0);
    drawRectangle(x1 + tx, y1 + ty, x2 + tx, y2 + ty);

    glFlush();
}

// Initialization
void init()
{
    glClearColor(1.0, 1.0, 1.0, 1.0);
    gluOrtho2D(0, 500, 0, 500);
}

// Main function
int main(int argc, char** argv)
{
    glutInit(&argc, argv);
    glutInitDisplayMode(GLUT_SINGLE | GLUT_RGB);
    glutInitWindowSize(500, 500);
    glutCreateWindow("2D Translation");

    init();
    glutDisplayFunc(display);

    glutMainLoop();
    return 0;
}

      `},{id:1,question:"1. ",answer:"",codeExample:""},{id:1,question:"1. ",answer:"",codeExample:""}],m=N=>{re(O===N?null:N)};return Be.jsxs("div",{className:"app-container",children:[Be.jsx("h1",{children:"Computer Graphics Interview Questions"}),Be.jsx("div",{className:"questions-container",children:W.map(N=>Be.jsxs("div",{className:"question-item",children:[Be.jsx("button",{className:`question-button ${O===N.id?"active":""}`,onClick:()=>m(N.id),children:N.question}),O===N.id&&Be.jsxs("div",{className:"answer-container",children:[Be.jsxs("div",{className:"answer",children:[Be.jsx("h3",{children:"Answer:"}),Be.jsx("p",{children:N.answer})]}),N.codeExample&&Be.jsxs("div",{className:"code-example",children:[Be.jsx("h3",{children:"Code Example:"}),Be.jsx("pre",{children:Be.jsx("code",{children:N.codeExample})})]})]})]},N.id))})]})}lh.createRoot(document.getElementById("root")).render(Be.jsx(bd.StrictMode,{children:Be.jsx(ah,{})}));
