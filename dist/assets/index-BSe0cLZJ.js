(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const r of s.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&n(r)}).observe(document,{childList:!0,subtree:!0});function t(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(i){if(i.ep)return;i.ep=!0;const s=t(i);fetch(i.href,s)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Ga="170",mu=0,Tl=1,gu=2,oh=1,ah=2,Un=3,Hn=0,kt=1,vt=2,kn=0,ri=1,Br=2,bl=3,El=4,_u=5,vi=100,vu=101,xu=102,yu=103,Mu=104,Su=200,wu=201,Tu=202,bu=203,Xo=204,qo=205,Eu=206,Au=207,Cu=208,Ru=209,Pu=210,Lu=211,Du=212,Iu=213,Nu=214,Yo=0,jo=1,Ko=2,Ji=3,$o=4,Zo=5,Jo=6,Qo=7,lh=0,Uu=1,Bu=2,oi=0,ch=1,hh=2,uh=3,Ha=4,Fu=5,dh=6,fh=7,Al="attached",Ou="detached",ph=300,Qi=301,es=302,ea=303,ta=304,Wr=306,ts=1e3,ii=1001,Fr=1002,zt=1003,mh=1004,Rs=1005,Kt=1006,Rr=1007,Fn=1008,Vn=1009,gh=1010,_h=1011,Fs=1012,Va=1013,Mi=1014,dn=1015,Mn=1016,Wa=1017,Xa=1018,ns=1020,vh=35902,xh=1021,yh=1022,tn=1023,Mh=1024,Sh=1025,Ki=1026,is=1027,qa=1028,Ya=1029,wh=1030,ja=1031,Ka=1033,Pr=33776,Lr=33777,Dr=33778,Ir=33779,na=35840,ia=35841,sa=35842,ra=35843,oa=36196,aa=37492,la=37496,ca=37808,ha=37809,ua=37810,da=37811,fa=37812,pa=37813,ma=37814,ga=37815,_a=37816,va=37817,xa=37818,ya=37819,Ma=37820,Sa=37821,Nr=36492,wa=36494,Ta=36495,Th=36283,ba=36284,Ea=36285,Aa=36286,ku=2200,zu=2201,Gu=2202,Os=2300,ks=2301,Jr=2302,Xi=2400,qi=2401,Or=2402,$a=2500,Hu=2501,Vu=0,bh=1,Ca=2,Wu=3200,Xu=3201,Eh=0,qu=1,ni="",Rt="srgb",Gt="srgb-linear",Xr="linear",it="srgb",bi=7680,Cl=519,Yu=512,ju=513,Ku=514,Ah=515,$u=516,Zu=517,Ju=518,Qu=519,Ra=35044,Rl="300 es",On=2e3,kr=2001;class wi{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const i=this._listeners[e];if(i!==void 0){const s=i.indexOf(t);s!==-1&&i.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let s=0,r=i.length;s<r;s++)i[s].call(this,e);e.target=null}}}const Dt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Pl=1234567;const Ds=Math.PI/180,ss=180/Math.PI;function fn(){const o=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Dt[o&255]+Dt[o>>8&255]+Dt[o>>16&255]+Dt[o>>24&255]+"-"+Dt[e&255]+Dt[e>>8&255]+"-"+Dt[e>>16&15|64]+Dt[e>>24&255]+"-"+Dt[t&63|128]+Dt[t>>8&255]+"-"+Dt[t>>16&255]+Dt[t>>24&255]+Dt[n&255]+Dt[n>>8&255]+Dt[n>>16&255]+Dt[n>>24&255]).toLowerCase()}function Mt(o,e,t){return Math.max(e,Math.min(t,o))}function Za(o,e){return(o%e+e)%e}function ed(o,e,t,n,i){return n+(o-e)*(i-n)/(t-e)}function td(o,e,t){return o!==e?(t-o)/(e-o):0}function Is(o,e,t){return(1-t)*o+t*e}function nd(o,e,t,n){return Is(o,e,1-Math.exp(-t*n))}function id(o,e=1){return e-Math.abs(Za(o,e*2)-e)}function sd(o,e,t){return o<=e?0:o>=t?1:(o=(o-e)/(t-e),o*o*(3-2*o))}function rd(o,e,t){return o<=e?0:o>=t?1:(o=(o-e)/(t-e),o*o*o*(o*(o*6-15)+10))}function od(o,e){return o+Math.floor(Math.random()*(e-o+1))}function ad(o,e){return o+Math.random()*(e-o)}function ld(o){return o*(.5-Math.random())}function cd(o){o!==void 0&&(Pl=o);let e=Pl+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function hd(o){return o*Ds}function ud(o){return o*ss}function dd(o){return(o&o-1)===0&&o!==0}function fd(o){return Math.pow(2,Math.ceil(Math.log(o)/Math.LN2))}function pd(o){return Math.pow(2,Math.floor(Math.log(o)/Math.LN2))}function md(o,e,t,n,i){const s=Math.cos,r=Math.sin,a=s(t/2),l=r(t/2),h=s((e+n)/2),u=r((e+n)/2),c=s((e-n)/2),d=r((e-n)/2),f=s((n-e)/2),g=r((n-e)/2);switch(i){case"XYX":o.set(a*u,l*c,l*d,a*h);break;case"YZY":o.set(l*d,a*u,l*c,a*h);break;case"ZXZ":o.set(l*c,l*d,a*u,a*h);break;case"XZX":o.set(a*u,l*g,l*f,a*h);break;case"YXY":o.set(l*f,a*u,l*g,a*h);break;case"ZYZ":o.set(l*g,l*f,a*u,a*h);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function un(o,e){switch(e.constructor){case Float32Array:return o;case Uint32Array:return o/4294967295;case Uint16Array:return o/65535;case Uint8Array:return o/255;case Int32Array:return Math.max(o/2147483647,-1);case Int16Array:return Math.max(o/32767,-1);case Int8Array:return Math.max(o/127,-1);default:throw new Error("Invalid component type.")}}function st(o,e){switch(e.constructor){case Float32Array:return o;case Uint32Array:return Math.round(o*4294967295);case Uint16Array:return Math.round(o*65535);case Uint8Array:return Math.round(o*255);case Int32Array:return Math.round(o*2147483647);case Int16Array:return Math.round(o*32767);case Int8Array:return Math.round(o*127);default:throw new Error("Invalid component type.")}}const gd={DEG2RAD:Ds,RAD2DEG:ss,generateUUID:fn,clamp:Mt,euclideanModulo:Za,mapLinear:ed,inverseLerp:td,lerp:Is,damp:nd,pingpong:id,smoothstep:sd,smootherstep:rd,randInt:od,randFloat:ad,randFloatSpread:ld,seededRandom:cd,degToRad:hd,radToDeg:ud,isPowerOfTwo:dd,ceilPowerOfTwo:fd,floorPowerOfTwo:pd,setQuaternionFromProperEuler:md,normalize:st,denormalize:un};class se{constructor(e=0,t=0){se.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Mt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),s=this.x-e.x,r=this.y-e.y;return this.x=s*n-r*i+e.x,this.y=s*i+r*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class ke{constructor(e,t,n,i,s,r,a,l,h){ke.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,r,a,l,h)}set(e,t,n,i,s,r,a,l,h){const u=this.elements;return u[0]=e,u[1]=i,u[2]=a,u[3]=t,u[4]=s,u[5]=l,u[6]=n,u[7]=r,u[8]=h,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,r=n[0],a=n[3],l=n[6],h=n[1],u=n[4],c=n[7],d=n[2],f=n[5],g=n[8],_=i[0],m=i[3],p=i[6],x=i[1],M=i[4],v=i[7],P=i[2],C=i[5],E=i[8];return s[0]=r*_+a*x+l*P,s[3]=r*m+a*M+l*C,s[6]=r*p+a*v+l*E,s[1]=h*_+u*x+c*P,s[4]=h*m+u*M+c*C,s[7]=h*p+u*v+c*E,s[2]=d*_+f*x+g*P,s[5]=d*m+f*M+g*C,s[8]=d*p+f*v+g*E,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],r=e[4],a=e[5],l=e[6],h=e[7],u=e[8];return t*r*u-t*a*h-n*s*u+n*a*l+i*s*h-i*r*l}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],r=e[4],a=e[5],l=e[6],h=e[7],u=e[8],c=u*r-a*h,d=a*l-u*s,f=h*s-r*l,g=t*c+n*d+i*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return e[0]=c*_,e[1]=(i*h-u*n)*_,e[2]=(a*n-i*r)*_,e[3]=d*_,e[4]=(u*t-i*l)*_,e[5]=(i*s-a*t)*_,e[6]=f*_,e[7]=(n*l-h*t)*_,e[8]=(r*t-n*s)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,s,r,a){const l=Math.cos(s),h=Math.sin(s);return this.set(n*l,n*h,-n*(l*r+h*a)+r+e,-i*h,i*l,-i*(-h*r+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(Qr.makeScale(e,t)),this}rotate(e){return this.premultiply(Qr.makeRotation(-e)),this}translate(e,t){return this.premultiply(Qr.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Qr=new ke;function Ch(o){for(let e=o.length-1;e>=0;--e)if(o[e]>=65535)return!0;return!1}function zs(o){return document.createElementNS("http://www.w3.org/1999/xhtml",o)}function _d(){const o=zs("canvas");return o.style.display="block",o}const Ll={};function Ps(o){o in Ll||(Ll[o]=!0,console.warn(o))}function vd(o,e,t){return new Promise(function(n,i){function s(){switch(o.clientWaitSync(e,o.SYNC_FLUSH_COMMANDS_BIT,0)){case o.WAIT_FAILED:i();break;case o.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:n()}}setTimeout(s,t)})}function xd(o){const e=o.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function yd(o){const e=o.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const Xe={enabled:!0,workingColorSpace:Gt,spaces:{},convert:function(o,e,t){return this.enabled===!1||e===t||!e||!t||(this.spaces[e].transfer===it&&(o.r=zn(o.r),o.g=zn(o.g),o.b=zn(o.b)),this.spaces[e].primaries!==this.spaces[t].primaries&&(o.applyMatrix3(this.spaces[e].toXYZ),o.applyMatrix3(this.spaces[t].fromXYZ)),this.spaces[t].transfer===it&&(o.r=$i(o.r),o.g=$i(o.g),o.b=$i(o.b))),o},fromWorkingColorSpace:function(o,e){return this.convert(o,this.workingColorSpace,e)},toWorkingColorSpace:function(o,e){return this.convert(o,e,this.workingColorSpace)},getPrimaries:function(o){return this.spaces[o].primaries},getTransfer:function(o){return o===ni?Xr:this.spaces[o].transfer},getLuminanceCoefficients:function(o,e=this.workingColorSpace){return o.fromArray(this.spaces[e].luminanceCoefficients)},define:function(o){Object.assign(this.spaces,o)},_getMatrix:function(o,e,t){return o.copy(this.spaces[e].toXYZ).multiply(this.spaces[t].fromXYZ)},_getDrawingBufferColorSpace:function(o){return this.spaces[o].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(o=this.workingColorSpace){return this.spaces[o].workingColorSpaceConfig.unpackColorSpace}};function zn(o){return o<.04045?o*.0773993808:Math.pow(o*.9478672986+.0521327014,2.4)}function $i(o){return o<.0031308?o*12.92:1.055*Math.pow(o,.41666)-.055}const Dl=[.64,.33,.3,.6,.15,.06],Il=[.2126,.7152,.0722],Nl=[.3127,.329],Ul=new ke().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Bl=new ke().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);Xe.define({[Gt]:{primaries:Dl,whitePoint:Nl,transfer:Xr,toXYZ:Ul,fromXYZ:Bl,luminanceCoefficients:Il,workingColorSpaceConfig:{unpackColorSpace:Rt},outputColorSpaceConfig:{drawingBufferColorSpace:Rt}},[Rt]:{primaries:Dl,whitePoint:Nl,transfer:it,toXYZ:Ul,fromXYZ:Bl,luminanceCoefficients:Il,outputColorSpaceConfig:{drawingBufferColorSpace:Rt}}});let Ei;class Md{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Ei===void 0&&(Ei=zs("canvas")),Ei.width=e.width,Ei.height=e.height;const n=Ei.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=Ei}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=zs("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),s=i.data;for(let r=0;r<s.length;r++)s[r]=zn(s[r]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(zn(t[n]/255)*255):t[n]=zn(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Sd=0;class Rh{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Sd++}),this.uuid=fn(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let r=0,a=i.length;r<a;r++)i[r].isDataTexture?s.push(eo(i[r].image)):s.push(eo(i[r]))}else s=eo(i);n.url=s}return t||(e.images[this.uuid]=n),n}}function eo(o){return typeof HTMLImageElement<"u"&&o instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&o instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&o instanceof ImageBitmap?Md.getDataURL(o):o.data?{data:Array.from(o.data),width:o.width,height:o.height,type:o.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let wd=0;class Tt extends wi{constructor(e=Tt.DEFAULT_IMAGE,t=Tt.DEFAULT_MAPPING,n=ii,i=ii,s=Kt,r=Fn,a=tn,l=Vn,h=Tt.DEFAULT_ANISOTROPY,u=ni){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:wd++}),this.uuid=fn(),this.name="",this.source=new Rh(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=r,this.anisotropy=h,this.format=a,this.internalFormat=null,this.type=l,this.offset=new se(0,0),this.repeat=new se(1,1),this.center=new se(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ke,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==ph)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case ts:e.x=e.x-Math.floor(e.x);break;case ii:e.x=e.x<0?0:1;break;case Fr:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case ts:e.y=e.y-Math.floor(e.y);break;case ii:e.y=e.y<0?0:1;break;case Fr:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Tt.DEFAULT_IMAGE=null;Tt.DEFAULT_MAPPING=ph;Tt.DEFAULT_ANISOTROPY=1;class Ze{constructor(e=0,t=0,n=0,i=1){Ze.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=this.w,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*i+r[12]*s,this.y=r[1]*t+r[5]*n+r[9]*i+r[13]*s,this.z=r[2]*t+r[6]*n+r[10]*i+r[14]*s,this.w=r[3]*t+r[7]*n+r[11]*i+r[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,s;const l=e.elements,h=l[0],u=l[4],c=l[8],d=l[1],f=l[5],g=l[9],_=l[2],m=l[6],p=l[10];if(Math.abs(u-d)<.01&&Math.abs(c-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+d)<.1&&Math.abs(c+_)<.1&&Math.abs(g+m)<.1&&Math.abs(h+f+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const M=(h+1)/2,v=(f+1)/2,P=(p+1)/2,C=(u+d)/4,E=(c+_)/4,L=(g+m)/4;return M>v&&M>P?M<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(M),i=C/n,s=E/n):v>P?v<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(v),n=C/i,s=L/i):P<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(P),n=E/s,i=L/s),this.set(n,i,s,t),this}let x=Math.sqrt((m-g)*(m-g)+(c-_)*(c-_)+(d-u)*(d-u));return Math.abs(x)<.001&&(x=1),this.x=(m-g)/x,this.y=(c-_)/x,this.z=(d-u)/x,this.w=Math.acos((h+f+p-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Td extends wi{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Ze(0,0,e,t),this.scissorTest=!1,this.viewport=new Ze(0,0,e,t);const i={width:e,height:t,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Kt,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const s=new Tt(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);s.flipY=!1,s.generateMipmaps=n.generateMipmaps,s.internalFormat=n.internalFormat,this.textures=[];const r=n.count;for(let a=0;a<r;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let i=0,s=this.textures.length;i<s;i++)this.textures[i].image.width=e,this.textures[i].image.height=t,this.textures[i].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,i=e.textures.length;n<i;n++)this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Rh(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class nn extends Td{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class Ph extends Tt{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=zt,this.minFilter=zt,this.wrapR=ii,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class bd extends Tt{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=zt,this.minFilter=zt,this.wrapR=ii,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class sn{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,s,r,a){let l=n[i+0],h=n[i+1],u=n[i+2],c=n[i+3];const d=s[r+0],f=s[r+1],g=s[r+2],_=s[r+3];if(a===0){e[t+0]=l,e[t+1]=h,e[t+2]=u,e[t+3]=c;return}if(a===1){e[t+0]=d,e[t+1]=f,e[t+2]=g,e[t+3]=_;return}if(c!==_||l!==d||h!==f||u!==g){let m=1-a;const p=l*d+h*f+u*g+c*_,x=p>=0?1:-1,M=1-p*p;if(M>Number.EPSILON){const P=Math.sqrt(M),C=Math.atan2(P,p*x);m=Math.sin(m*C)/P,a=Math.sin(a*C)/P}const v=a*x;if(l=l*m+d*v,h=h*m+f*v,u=u*m+g*v,c=c*m+_*v,m===1-a){const P=1/Math.sqrt(l*l+h*h+u*u+c*c);l*=P,h*=P,u*=P,c*=P}}e[t]=l,e[t+1]=h,e[t+2]=u,e[t+3]=c}static multiplyQuaternionsFlat(e,t,n,i,s,r){const a=n[i],l=n[i+1],h=n[i+2],u=n[i+3],c=s[r],d=s[r+1],f=s[r+2],g=s[r+3];return e[t]=a*g+u*c+l*f-h*d,e[t+1]=l*g+u*d+h*c-a*f,e[t+2]=h*g+u*f+a*d-l*c,e[t+3]=u*g-a*c-l*d-h*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,i=e._y,s=e._z,r=e._order,a=Math.cos,l=Math.sin,h=a(n/2),u=a(i/2),c=a(s/2),d=l(n/2),f=l(i/2),g=l(s/2);switch(r){case"XYZ":this._x=d*u*c+h*f*g,this._y=h*f*c-d*u*g,this._z=h*u*g+d*f*c,this._w=h*u*c-d*f*g;break;case"YXZ":this._x=d*u*c+h*f*g,this._y=h*f*c-d*u*g,this._z=h*u*g-d*f*c,this._w=h*u*c+d*f*g;break;case"ZXY":this._x=d*u*c-h*f*g,this._y=h*f*c+d*u*g,this._z=h*u*g+d*f*c,this._w=h*u*c-d*f*g;break;case"ZYX":this._x=d*u*c-h*f*g,this._y=h*f*c+d*u*g,this._z=h*u*g-d*f*c,this._w=h*u*c+d*f*g;break;case"YZX":this._x=d*u*c+h*f*g,this._y=h*f*c+d*u*g,this._z=h*u*g-d*f*c,this._w=h*u*c-d*f*g;break;case"XZY":this._x=d*u*c-h*f*g,this._y=h*f*c-d*u*g,this._z=h*u*g+d*f*c,this._w=h*u*c+d*f*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+r)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],s=t[8],r=t[1],a=t[5],l=t[9],h=t[2],u=t[6],c=t[10],d=n+a+c;if(d>0){const f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(u-l)*f,this._y=(s-h)*f,this._z=(r-i)*f}else if(n>a&&n>c){const f=2*Math.sqrt(1+n-a-c);this._w=(u-l)/f,this._x=.25*f,this._y=(i+r)/f,this._z=(s+h)/f}else if(a>c){const f=2*Math.sqrt(1+a-n-c);this._w=(s-h)/f,this._x=(i+r)/f,this._y=.25*f,this._z=(l+u)/f}else{const f=2*Math.sqrt(1+c-n-a);this._w=(r-i)/f,this._x=(s+h)/f,this._y=(l+u)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Mt(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,s=e._z,r=e._w,a=t._x,l=t._y,h=t._z,u=t._w;return this._x=n*u+r*a+i*h-s*l,this._y=i*u+r*l+s*a-n*h,this._z=s*u+r*h+n*l-i*a,this._w=r*u-n*a-i*l-s*h,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,i=this._y,s=this._z,r=this._w;let a=r*e._w+n*e._x+i*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=r,this._x=n,this._y=i,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const f=1-t;return this._w=f*r+t*this._w,this._x=f*n+t*this._x,this._y=f*i+t*this._y,this._z=f*s+t*this._z,this.normalize(),this}const h=Math.sqrt(l),u=Math.atan2(h,a),c=Math.sin((1-t)*u)/h,d=Math.sin(t*u)/h;return this._w=r*c+this._w*d,this._x=n*c+this._x*d,this._y=i*c+this._y*d,this._z=s*c+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(i*Math.sin(e),i*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class A{constructor(e=0,t=0,n=0){A.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Fl.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Fl.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*i,this.y=s[1]*t+s[4]*n+s[7]*i,this.z=s[2]*t+s[5]*n+s[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=e.elements,r=1/(s[3]*t+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*i+s[12])*r,this.y=(s[1]*t+s[5]*n+s[9]*i+s[13])*r,this.z=(s[2]*t+s[6]*n+s[10]*i+s[14])*r,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,s=e.x,r=e.y,a=e.z,l=e.w,h=2*(r*i-a*n),u=2*(a*t-s*i),c=2*(s*n-r*t);return this.x=t+l*h+r*c-a*u,this.y=n+l*u+a*h-s*c,this.z=i+l*c+s*u-r*h,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*i,this.y=s[1]*t+s[5]*n+s[9]*i,this.z=s[2]*t+s[6]*n+s[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,s=e.z,r=t.x,a=t.y,l=t.z;return this.x=i*l-s*a,this.y=s*r-n*l,this.z=n*a-i*r,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return to.copy(this).projectOnVector(e),this.sub(to)}reflect(e){return this.sub(to.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Mt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const to=new A,Fl=new sn;class Pt{constructor(e=new A(1/0,1/0,1/0),t=new A(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(ln.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(ln.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=ln.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let r=0,a=s.count;r<a;r++)e.isMesh===!0?e.getVertexPosition(r,ln):ln.fromBufferAttribute(s,r),ln.applyMatrix4(e.matrixWorld),this.expandByPoint(ln);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),js.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),js.copy(n.boundingBox)),js.applyMatrix4(e.matrixWorld),this.union(js)}const i=e.children;for(let s=0,r=i.length;s<r;s++)this.expandByObject(i[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,ln),ln.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(_s),Ks.subVectors(this.max,_s),Ai.subVectors(e.a,_s),Ci.subVectors(e.b,_s),Ri.subVectors(e.c,_s),qn.subVectors(Ci,Ai),Yn.subVectors(Ri,Ci),li.subVectors(Ai,Ri);let t=[0,-qn.z,qn.y,0,-Yn.z,Yn.y,0,-li.z,li.y,qn.z,0,-qn.x,Yn.z,0,-Yn.x,li.z,0,-li.x,-qn.y,qn.x,0,-Yn.y,Yn.x,0,-li.y,li.x,0];return!no(t,Ai,Ci,Ri,Ks)||(t=[1,0,0,0,1,0,0,0,1],!no(t,Ai,Ci,Ri,Ks))?!1:($s.crossVectors(qn,Yn),t=[$s.x,$s.y,$s.z],no(t,Ai,Ci,Ri,Ks))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,ln).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(ln).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Cn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Cn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Cn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Cn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Cn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Cn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Cn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Cn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Cn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Cn=[new A,new A,new A,new A,new A,new A,new A,new A],ln=new A,js=new Pt,Ai=new A,Ci=new A,Ri=new A,qn=new A,Yn=new A,li=new A,_s=new A,Ks=new A,$s=new A,ci=new A;function no(o,e,t,n,i){for(let s=0,r=o.length-3;s<=r;s+=3){ci.fromArray(o,s);const a=i.x*Math.abs(ci.x)+i.y*Math.abs(ci.y)+i.z*Math.abs(ci.z),l=e.dot(ci),h=t.dot(ci),u=n.dot(ci);if(Math.max(-Math.max(l,h,u),Math.min(l,h,u))>a)return!1}return!0}const Ed=new Pt,vs=new A,io=new A;class Sn{constructor(e=new A,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):Ed.setFromPoints(e).getCenter(n);let i=0;for(let s=0,r=e.length;s<r;s++)i=Math.max(i,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;vs.subVectors(e,this.center);const t=vs.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(vs,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(io.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(vs.copy(e.center).add(io)),this.expandByPoint(vs.copy(e.center).sub(io))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Rn=new A,so=new A,Zs=new A,jn=new A,ro=new A,Js=new A,oo=new A;class Vs{constructor(e=new A,t=new A(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Rn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Rn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Rn.copy(this.origin).addScaledVector(this.direction,t),Rn.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){so.copy(e).add(t).multiplyScalar(.5),Zs.copy(t).sub(e).normalize(),jn.copy(this.origin).sub(so);const s=e.distanceTo(t)*.5,r=-this.direction.dot(Zs),a=jn.dot(this.direction),l=-jn.dot(Zs),h=jn.lengthSq(),u=Math.abs(1-r*r);let c,d,f,g;if(u>0)if(c=r*l-a,d=r*a-l,g=s*u,c>=0)if(d>=-g)if(d<=g){const _=1/u;c*=_,d*=_,f=c*(c+r*d+2*a)+d*(r*c+d+2*l)+h}else d=s,c=Math.max(0,-(r*d+a)),f=-c*c+d*(d+2*l)+h;else d=-s,c=Math.max(0,-(r*d+a)),f=-c*c+d*(d+2*l)+h;else d<=-g?(c=Math.max(0,-(-r*s+a)),d=c>0?-s:Math.min(Math.max(-s,-l),s),f=-c*c+d*(d+2*l)+h):d<=g?(c=0,d=Math.min(Math.max(-s,-l),s),f=d*(d+2*l)+h):(c=Math.max(0,-(r*s+a)),d=c>0?s:Math.min(Math.max(-s,-l),s),f=-c*c+d*(d+2*l)+h);else d=r>0?-s:s,c=Math.max(0,-(r*d+a)),f=-c*c+d*(d+2*l)+h;return n&&n.copy(this.origin).addScaledVector(this.direction,c),i&&i.copy(so).addScaledVector(Zs,d),f}intersectSphere(e,t){Rn.subVectors(e.center,this.origin);const n=Rn.dot(this.direction),i=Rn.dot(Rn)-n*n,s=e.radius*e.radius;if(i>s)return null;const r=Math.sqrt(s-i),a=n-r,l=n+r;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,s,r,a,l;const h=1/this.direction.x,u=1/this.direction.y,c=1/this.direction.z,d=this.origin;return h>=0?(n=(e.min.x-d.x)*h,i=(e.max.x-d.x)*h):(n=(e.max.x-d.x)*h,i=(e.min.x-d.x)*h),u>=0?(s=(e.min.y-d.y)*u,r=(e.max.y-d.y)*u):(s=(e.max.y-d.y)*u,r=(e.min.y-d.y)*u),n>r||s>i||((s>n||isNaN(n))&&(n=s),(r<i||isNaN(i))&&(i=r),c>=0?(a=(e.min.z-d.z)*c,l=(e.max.z-d.z)*c):(a=(e.max.z-d.z)*c,l=(e.min.z-d.z)*c),n>l||a>i)||((a>n||n!==n)&&(n=a),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,Rn)!==null}intersectTriangle(e,t,n,i,s){ro.subVectors(t,e),Js.subVectors(n,e),oo.crossVectors(ro,Js);let r=this.direction.dot(oo),a;if(r>0){if(i)return null;a=1}else if(r<0)a=-1,r=-r;else return null;jn.subVectors(this.origin,e);const l=a*this.direction.dot(Js.crossVectors(jn,Js));if(l<0)return null;const h=a*this.direction.dot(ro.cross(jn));if(h<0||l+h>r)return null;const u=-a*jn.dot(oo);return u<0?null:this.at(u/r,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class De{constructor(e,t,n,i,s,r,a,l,h,u,c,d,f,g,_,m){De.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,r,a,l,h,u,c,d,f,g,_,m)}set(e,t,n,i,s,r,a,l,h,u,c,d,f,g,_,m){const p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=i,p[1]=s,p[5]=r,p[9]=a,p[13]=l,p[2]=h,p[6]=u,p[10]=c,p[14]=d,p[3]=f,p[7]=g,p[11]=_,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new De().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,i=1/Pi.setFromMatrixColumn(e,0).length(),s=1/Pi.setFromMatrixColumn(e,1).length(),r=1/Pi.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*r,t[9]=n[9]*r,t[10]=n[10]*r,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,s=e.z,r=Math.cos(n),a=Math.sin(n),l=Math.cos(i),h=Math.sin(i),u=Math.cos(s),c=Math.sin(s);if(e.order==="XYZ"){const d=r*u,f=r*c,g=a*u,_=a*c;t[0]=l*u,t[4]=-l*c,t[8]=h,t[1]=f+g*h,t[5]=d-_*h,t[9]=-a*l,t[2]=_-d*h,t[6]=g+f*h,t[10]=r*l}else if(e.order==="YXZ"){const d=l*u,f=l*c,g=h*u,_=h*c;t[0]=d+_*a,t[4]=g*a-f,t[8]=r*h,t[1]=r*c,t[5]=r*u,t[9]=-a,t[2]=f*a-g,t[6]=_+d*a,t[10]=r*l}else if(e.order==="ZXY"){const d=l*u,f=l*c,g=h*u,_=h*c;t[0]=d-_*a,t[4]=-r*c,t[8]=g+f*a,t[1]=f+g*a,t[5]=r*u,t[9]=_-d*a,t[2]=-r*h,t[6]=a,t[10]=r*l}else if(e.order==="ZYX"){const d=r*u,f=r*c,g=a*u,_=a*c;t[0]=l*u,t[4]=g*h-f,t[8]=d*h+_,t[1]=l*c,t[5]=_*h+d,t[9]=f*h-g,t[2]=-h,t[6]=a*l,t[10]=r*l}else if(e.order==="YZX"){const d=r*l,f=r*h,g=a*l,_=a*h;t[0]=l*u,t[4]=_-d*c,t[8]=g*c+f,t[1]=c,t[5]=r*u,t[9]=-a*u,t[2]=-h*u,t[6]=f*c+g,t[10]=d-_*c}else if(e.order==="XZY"){const d=r*l,f=r*h,g=a*l,_=a*h;t[0]=l*u,t[4]=-c,t[8]=h*u,t[1]=d*c+_,t[5]=r*u,t[9]=f*c-g,t[2]=g*c-f,t[6]=a*u,t[10]=_*c+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Ad,e,Cd)}lookAt(e,t,n){const i=this.elements;return Yt.subVectors(e,t),Yt.lengthSq()===0&&(Yt.z=1),Yt.normalize(),Kn.crossVectors(n,Yt),Kn.lengthSq()===0&&(Math.abs(n.z)===1?Yt.x+=1e-4:Yt.z+=1e-4,Yt.normalize(),Kn.crossVectors(n,Yt)),Kn.normalize(),Qs.crossVectors(Yt,Kn),i[0]=Kn.x,i[4]=Qs.x,i[8]=Yt.x,i[1]=Kn.y,i[5]=Qs.y,i[9]=Yt.y,i[2]=Kn.z,i[6]=Qs.z,i[10]=Yt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,r=n[0],a=n[4],l=n[8],h=n[12],u=n[1],c=n[5],d=n[9],f=n[13],g=n[2],_=n[6],m=n[10],p=n[14],x=n[3],M=n[7],v=n[11],P=n[15],C=i[0],E=i[4],L=i[8],w=i[12],S=i[1],R=i[5],D=i[9],I=i[13],k=i[2],X=i[6],q=i[10],J=i[14],V=i[3],ne=i[7],he=i[11],we=i[15];return s[0]=r*C+a*S+l*k+h*V,s[4]=r*E+a*R+l*X+h*ne,s[8]=r*L+a*D+l*q+h*he,s[12]=r*w+a*I+l*J+h*we,s[1]=u*C+c*S+d*k+f*V,s[5]=u*E+c*R+d*X+f*ne,s[9]=u*L+c*D+d*q+f*he,s[13]=u*w+c*I+d*J+f*we,s[2]=g*C+_*S+m*k+p*V,s[6]=g*E+_*R+m*X+p*ne,s[10]=g*L+_*D+m*q+p*he,s[14]=g*w+_*I+m*J+p*we,s[3]=x*C+M*S+v*k+P*V,s[7]=x*E+M*R+v*X+P*ne,s[11]=x*L+M*D+v*q+P*he,s[15]=x*w+M*I+v*J+P*we,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],s=e[12],r=e[1],a=e[5],l=e[9],h=e[13],u=e[2],c=e[6],d=e[10],f=e[14],g=e[3],_=e[7],m=e[11],p=e[15];return g*(+s*l*c-i*h*c-s*a*d+n*h*d+i*a*f-n*l*f)+_*(+t*l*f-t*h*d+s*r*d-i*r*f+i*h*u-s*l*u)+m*(+t*h*c-t*a*f-s*r*c+n*r*f+s*a*u-n*h*u)+p*(-i*a*u-t*l*c+t*a*d+i*r*c-n*r*d+n*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],r=e[4],a=e[5],l=e[6],h=e[7],u=e[8],c=e[9],d=e[10],f=e[11],g=e[12],_=e[13],m=e[14],p=e[15],x=c*m*h-_*d*h+_*l*f-a*m*f-c*l*p+a*d*p,M=g*d*h-u*m*h-g*l*f+r*m*f+u*l*p-r*d*p,v=u*_*h-g*c*h+g*a*f-r*_*f-u*a*p+r*c*p,P=g*c*l-u*_*l-g*a*d+r*_*d+u*a*m-r*c*m,C=t*x+n*M+i*v+s*P;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const E=1/C;return e[0]=x*E,e[1]=(_*d*s-c*m*s-_*i*f+n*m*f+c*i*p-n*d*p)*E,e[2]=(a*m*s-_*l*s+_*i*h-n*m*h-a*i*p+n*l*p)*E,e[3]=(c*l*s-a*d*s-c*i*h+n*d*h+a*i*f-n*l*f)*E,e[4]=M*E,e[5]=(u*m*s-g*d*s+g*i*f-t*m*f-u*i*p+t*d*p)*E,e[6]=(g*l*s-r*m*s-g*i*h+t*m*h+r*i*p-t*l*p)*E,e[7]=(r*d*s-u*l*s+u*i*h-t*d*h-r*i*f+t*l*f)*E,e[8]=v*E,e[9]=(g*c*s-u*_*s-g*n*f+t*_*f+u*n*p-t*c*p)*E,e[10]=(r*_*s-g*a*s+g*n*h-t*_*h-r*n*p+t*a*p)*E,e[11]=(u*a*s-r*c*s-u*n*h+t*c*h+r*n*f-t*a*f)*E,e[12]=P*E,e[13]=(u*_*i-g*c*i+g*n*d-t*_*d-u*n*m+t*c*m)*E,e[14]=(g*a*i-r*_*i-g*n*l+t*_*l+r*n*m-t*a*m)*E,e[15]=(r*c*i-u*a*i+u*n*l-t*c*l-r*n*d+t*a*d)*E,this}scale(e){const t=this.elements,n=e.x,i=e.y,s=e.z;return t[0]*=n,t[4]*=i,t[8]*=s,t[1]*=n,t[5]*=i,t[9]*=s,t[2]*=n,t[6]*=i,t[10]*=s,t[3]*=n,t[7]*=i,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),s=1-n,r=e.x,a=e.y,l=e.z,h=s*r,u=s*a;return this.set(h*r+n,h*a-i*l,h*l+i*a,0,h*a+i*l,u*a+n,u*l-i*r,0,h*l-i*a,u*l+i*r,s*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,s,r){return this.set(1,n,s,0,e,1,r,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,s=t._x,r=t._y,a=t._z,l=t._w,h=s+s,u=r+r,c=a+a,d=s*h,f=s*u,g=s*c,_=r*u,m=r*c,p=a*c,x=l*h,M=l*u,v=l*c,P=n.x,C=n.y,E=n.z;return i[0]=(1-(_+p))*P,i[1]=(f+v)*P,i[2]=(g-M)*P,i[3]=0,i[4]=(f-v)*C,i[5]=(1-(d+p))*C,i[6]=(m+x)*C,i[7]=0,i[8]=(g+M)*E,i[9]=(m-x)*E,i[10]=(1-(d+_))*E,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;let s=Pi.set(i[0],i[1],i[2]).length();const r=Pi.set(i[4],i[5],i[6]).length(),a=Pi.set(i[8],i[9],i[10]).length();this.determinant()<0&&(s=-s),e.x=i[12],e.y=i[13],e.z=i[14],cn.copy(this);const h=1/s,u=1/r,c=1/a;return cn.elements[0]*=h,cn.elements[1]*=h,cn.elements[2]*=h,cn.elements[4]*=u,cn.elements[5]*=u,cn.elements[6]*=u,cn.elements[8]*=c,cn.elements[9]*=c,cn.elements[10]*=c,t.setFromRotationMatrix(cn),n.x=s,n.y=r,n.z=a,this}makePerspective(e,t,n,i,s,r,a=On){const l=this.elements,h=2*s/(t-e),u=2*s/(n-i),c=(t+e)/(t-e),d=(n+i)/(n-i);let f,g;if(a===On)f=-(r+s)/(r-s),g=-2*r*s/(r-s);else if(a===kr)f=-r/(r-s),g=-r*s/(r-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=h,l[4]=0,l[8]=c,l[12]=0,l[1]=0,l[5]=u,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=f,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,i,s,r,a=On){const l=this.elements,h=1/(t-e),u=1/(n-i),c=1/(r-s),d=(t+e)*h,f=(n+i)*u;let g,_;if(a===On)g=(r+s)*c,_=-2*c;else if(a===kr)g=s*c,_=-1*c;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*h,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-f,l[2]=0,l[6]=0,l[10]=_,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const Pi=new A,cn=new De,Ad=new A(0,0,0),Cd=new A(1,1,1),Kn=new A,Qs=new A,Yt=new A,Ol=new De,kl=new sn;class mn{constructor(e=0,t=0,n=0,i=mn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,s=i[0],r=i[4],a=i[8],l=i[1],h=i[5],u=i[9],c=i[2],d=i[6],f=i[10];switch(t){case"XYZ":this._y=Math.asin(Mt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,f),this._z=Math.atan2(-r,s)):(this._x=Math.atan2(d,h),this._z=0);break;case"YXZ":this._x=Math.asin(-Mt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(l,h)):(this._y=Math.atan2(-c,s),this._z=0);break;case"ZXY":this._x=Math.asin(Mt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-c,f),this._z=Math.atan2(-r,h)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Mt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-r,h));break;case"YZX":this._z=Math.asin(Mt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,h),this._y=Math.atan2(-c,s)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-Mt(r,-1,1)),Math.abs(r)<.9999999?(this._x=Math.atan2(d,h),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Ol.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Ol,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return kl.setFromEuler(this),this.setFromQuaternion(kl,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}mn.DEFAULT_ORDER="XYZ";class Ja{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Rd=0;const zl=new A,Li=new sn,Pn=new De,er=new A,xs=new A,Pd=new A,Ld=new sn,Gl=new A(1,0,0),Hl=new A(0,1,0),Vl=new A(0,0,1),Wl={type:"added"},Dd={type:"removed"},Di={type:"childadded",child:null},ao={type:"childremoved",child:null};class lt extends wi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Rd++}),this.uuid=fn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=lt.DEFAULT_UP.clone();const e=new A,t=new mn,n=new sn,i=new A(1,1,1);function s(){n.setFromEuler(t,!1)}function r(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(r),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new De},normalMatrix:{value:new ke}}),this.matrix=new De,this.matrixWorld=new De,this.matrixAutoUpdate=lt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=lt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Ja,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Li.setFromAxisAngle(e,t),this.quaternion.multiply(Li),this}rotateOnWorldAxis(e,t){return Li.setFromAxisAngle(e,t),this.quaternion.premultiply(Li),this}rotateX(e){return this.rotateOnAxis(Gl,e)}rotateY(e){return this.rotateOnAxis(Hl,e)}rotateZ(e){return this.rotateOnAxis(Vl,e)}translateOnAxis(e,t){return zl.copy(e).applyQuaternion(this.quaternion),this.position.add(zl.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Gl,e)}translateY(e){return this.translateOnAxis(Hl,e)}translateZ(e){return this.translateOnAxis(Vl,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Pn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?er.copy(e):er.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),xs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Pn.lookAt(xs,er,this.up):Pn.lookAt(er,xs,this.up),this.quaternion.setFromRotationMatrix(Pn),i&&(Pn.extractRotation(i.matrixWorld),Li.setFromRotationMatrix(Pn),this.quaternion.premultiply(Li.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Wl),Di.child=e,this.dispatchEvent(Di),Di.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Dd),ao.child=e,this.dispatchEvent(ao),ao.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Pn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Pn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Pn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Wl),Di.child=e,this.dispatchEvent(Di),Di.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const r=this.children[n].getObjectByProperty(e,t);if(r!==void 0)return r}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const i=this.children;for(let s=0,r=i.length;s<r;s++)i[s].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(xs,e,Pd),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(xs,Ld,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const i=this.children;for(let s=0,r=i.length;s<r;s++)i[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let h=0,u=l.length;h<u;h++){const c=l[h];s(e.shapes,c)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,h=this.material.length;l<h;l++)a.push(s(e.materials,this.material[l]));i.material=a}else i.material=s(e.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];i.animations.push(s(e.animations,l))}}if(t){const a=r(e.geometries),l=r(e.materials),h=r(e.textures),u=r(e.images),c=r(e.shapes),d=r(e.skeletons),f=r(e.animations),g=r(e.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),h.length>0&&(n.textures=h),u.length>0&&(n.images=u),c.length>0&&(n.shapes=c),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),g.length>0&&(n.nodes=g)}return n.object=i,n;function r(a){const l=[];for(const h in a){const u=a[h];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}lt.DEFAULT_UP=new A(0,1,0);lt.DEFAULT_MATRIX_AUTO_UPDATE=!0;lt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const hn=new A,Ln=new A,lo=new A,Dn=new A,Ii=new A,Ni=new A,Xl=new A,co=new A,ho=new A,uo=new A,fo=new Ze,po=new Ze,mo=new Ze;class en{constructor(e=new A,t=new A,n=new A){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),hn.subVectors(e,t),i.cross(hn);const s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(e,t,n,i,s){hn.subVectors(i,t),Ln.subVectors(n,t),lo.subVectors(e,t);const r=hn.dot(hn),a=hn.dot(Ln),l=hn.dot(lo),h=Ln.dot(Ln),u=Ln.dot(lo),c=r*h-a*a;if(c===0)return s.set(0,0,0),null;const d=1/c,f=(h*l-a*u)*d,g=(r*u-a*l)*d;return s.set(1-f-g,g,f)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,Dn)===null?!1:Dn.x>=0&&Dn.y>=0&&Dn.x+Dn.y<=1}static getInterpolation(e,t,n,i,s,r,a,l){return this.getBarycoord(e,t,n,i,Dn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Dn.x),l.addScaledVector(r,Dn.y),l.addScaledVector(a,Dn.z),l)}static getInterpolatedAttribute(e,t,n,i,s,r){return fo.setScalar(0),po.setScalar(0),mo.setScalar(0),fo.fromBufferAttribute(e,t),po.fromBufferAttribute(e,n),mo.fromBufferAttribute(e,i),r.setScalar(0),r.addScaledVector(fo,s.x),r.addScaledVector(po,s.y),r.addScaledVector(mo,s.z),r}static isFrontFacing(e,t,n,i){return hn.subVectors(n,t),Ln.subVectors(e,t),hn.cross(Ln).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return hn.subVectors(this.c,this.b),Ln.subVectors(this.a,this.b),hn.cross(Ln).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return en.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return en.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,i,s){return en.getInterpolation(e,this.a,this.b,this.c,t,n,i,s)}containsPoint(e){return en.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return en.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,s=this.c;let r,a;Ii.subVectors(i,n),Ni.subVectors(s,n),co.subVectors(e,n);const l=Ii.dot(co),h=Ni.dot(co);if(l<=0&&h<=0)return t.copy(n);ho.subVectors(e,i);const u=Ii.dot(ho),c=Ni.dot(ho);if(u>=0&&c<=u)return t.copy(i);const d=l*c-u*h;if(d<=0&&l>=0&&u<=0)return r=l/(l-u),t.copy(n).addScaledVector(Ii,r);uo.subVectors(e,s);const f=Ii.dot(uo),g=Ni.dot(uo);if(g>=0&&f<=g)return t.copy(s);const _=f*h-l*g;if(_<=0&&h>=0&&g<=0)return a=h/(h-g),t.copy(n).addScaledVector(Ni,a);const m=u*g-f*c;if(m<=0&&c-u>=0&&f-g>=0)return Xl.subVectors(s,i),a=(c-u)/(c-u+(f-g)),t.copy(i).addScaledVector(Xl,a);const p=1/(m+_+d);return r=_*p,a=d*p,t.copy(n).addScaledVector(Ii,r).addScaledVector(Ni,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Lh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},$n={h:0,s:0,l:0},tr={h:0,s:0,l:0};function go(o,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?o+(e-o)*6*t:t<1/2?e:t<2/3?o+(e-o)*6*(2/3-t):o}class le{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Rt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Xe.toWorkingColorSpace(this,t),this}setRGB(e,t,n,i=Xe.workingColorSpace){return this.r=e,this.g=t,this.b=n,Xe.toWorkingColorSpace(this,i),this}setHSL(e,t,n,i=Xe.workingColorSpace){if(e=Za(e,1),t=Mt(t,0,1),n=Mt(n,0,1),t===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,r=2*n-s;this.r=go(r,s,e+1/3),this.g=go(r,s,e),this.b=go(r,s,e-1/3)}return Xe.toWorkingColorSpace(this,i),this}setStyle(e,t=Rt){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const r=i[1],a=i[2];switch(r){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=i[1],r=s.length;if(r===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(r===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Rt){const n=Lh[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=zn(e.r),this.g=zn(e.g),this.b=zn(e.b),this}copyLinearToSRGB(e){return this.r=$i(e.r),this.g=$i(e.g),this.b=$i(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Rt){return Xe.fromWorkingColorSpace(It.copy(this),e),Math.round(Mt(It.r*255,0,255))*65536+Math.round(Mt(It.g*255,0,255))*256+Math.round(Mt(It.b*255,0,255))}getHexString(e=Rt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Xe.workingColorSpace){Xe.fromWorkingColorSpace(It.copy(this),t);const n=It.r,i=It.g,s=It.b,r=Math.max(n,i,s),a=Math.min(n,i,s);let l,h;const u=(a+r)/2;if(a===r)l=0,h=0;else{const c=r-a;switch(h=u<=.5?c/(r+a):c/(2-r-a),r){case n:l=(i-s)/c+(i<s?6:0);break;case i:l=(s-n)/c+2;break;case s:l=(n-i)/c+4;break}l/=6}return e.h=l,e.s=h,e.l=u,e}getRGB(e,t=Xe.workingColorSpace){return Xe.fromWorkingColorSpace(It.copy(this),t),e.r=It.r,e.g=It.g,e.b=It.b,e}getStyle(e=Rt){Xe.fromWorkingColorSpace(It.copy(this),e);const t=It.r,n=It.g,i=It.b;return e!==Rt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL($n),this.setHSL($n.h+e,$n.s+t,$n.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL($n),e.getHSL(tr);const n=Is($n.h,tr.h,t),i=Is($n.s,tr.s,t),s=Is($n.l,tr.l,t);return this.setHSL(n,i,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,i=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*i,this.g=s[1]*t+s[4]*n+s[7]*i,this.b=s[2]*t+s[5]*n+s[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const It=new le;le.NAMES=Lh;let Id=0;class pn extends wi{static get type(){return"Material"}get type(){return this.constructor.type}set type(e){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Id++}),this.uuid=fn(),this.name="",this.blending=ri,this.side=Hn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Xo,this.blendDst=qo,this.blendEquation=vi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new le(0,0,0),this.blendAlpha=0,this.depthFunc=Ji,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Cl,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=bi,this.stencilZFail=bi,this.stencilZPass=bi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==ri&&(n.blending=this.blending),this.side!==Hn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Xo&&(n.blendSrc=this.blendSrc),this.blendDst!==qo&&(n.blendDst=this.blendDst),this.blendEquation!==vi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Ji&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Cl&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==bi&&(n.stencilFail=this.stencilFail),this.stencilZFail!==bi&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==bi&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(s){const r=[];for(const a in s){const l=s[a];delete l.metadata,r.push(l)}return r}if(t){const s=i(e.textures),r=i(e.images);s.length>0&&(n.textures=s),r.length>0&&(n.images=r)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class St extends pn{static get type(){return"MeshBasicMaterial"}constructor(e){super(),this.isMeshBasicMaterial=!0,this.color=new le(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new mn,this.combine=lh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const gt=new A,nr=new se;class bt{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Ra,this.updateRanges=[],this.gpuType=dn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)nr.fromBufferAttribute(this,t),nr.applyMatrix3(e),this.setXY(t,nr.x,nr.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)gt.fromBufferAttribute(this,t),gt.applyMatrix3(e),this.setXYZ(t,gt.x,gt.y,gt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)gt.fromBufferAttribute(this,t),gt.applyMatrix4(e),this.setXYZ(t,gt.x,gt.y,gt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)gt.fromBufferAttribute(this,t),gt.applyNormalMatrix(e),this.setXYZ(t,gt.x,gt.y,gt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)gt.fromBufferAttribute(this,t),gt.transformDirection(e),this.setXYZ(t,gt.x,gt.y,gt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=un(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=st(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=un(t,this.array)),t}setX(e,t){return this.normalized&&(t=st(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=un(t,this.array)),t}setY(e,t){return this.normalized&&(t=st(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=un(t,this.array)),t}setZ(e,t){return this.normalized&&(t=st(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=un(t,this.array)),t}setW(e,t){return this.normalized&&(t=st(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=st(t,this.array),n=st(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=st(t,this.array),n=st(n,this.array),i=st(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e*=this.itemSize,this.normalized&&(t=st(t,this.array),n=st(n,this.array),i=st(i,this.array),s=st(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Ra&&(e.usage=this.usage),e}}class Dh extends bt{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Ih extends bt{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class rt extends bt{constructor(e,t,n){super(new Float32Array(e),t,n)}}let Nd=0;const Zt=new De,_o=new lt,Ui=new A,jt=new Pt,ys=new Pt,Ct=new A;class xt extends wi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Nd++}),this.uuid=fn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Ch(e)?Ih:Dh)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new ke().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Zt.makeRotationFromQuaternion(e),this.applyMatrix4(Zt),this}rotateX(e){return Zt.makeRotationX(e),this.applyMatrix4(Zt),this}rotateY(e){return Zt.makeRotationY(e),this.applyMatrix4(Zt),this}rotateZ(e){return Zt.makeRotationZ(e),this.applyMatrix4(Zt),this}translate(e,t,n){return Zt.makeTranslation(e,t,n),this.applyMatrix4(Zt),this}scale(e,t,n){return Zt.makeScale(e,t,n),this.applyMatrix4(Zt),this}lookAt(e){return _o.lookAt(e),_o.updateMatrix(),this.applyMatrix4(_o.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ui).negate(),this.translate(Ui.x,Ui.y,Ui.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let i=0,s=e.length;i<s;i++){const r=e[i];n.push(r.x,r.y,r.z||0)}this.setAttribute("position",new rt(n,3))}else{for(let n=0,i=t.count;n<i;n++){const s=e[n];t.setXYZ(n,s.x,s.y,s.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Pt);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new A(-1/0,-1/0,-1/0),new A(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const s=t[n];jt.setFromBufferAttribute(s),this.morphTargetsRelative?(Ct.addVectors(this.boundingBox.min,jt.min),this.boundingBox.expandByPoint(Ct),Ct.addVectors(this.boundingBox.max,jt.max),this.boundingBox.expandByPoint(Ct)):(this.boundingBox.expandByPoint(jt.min),this.boundingBox.expandByPoint(jt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Sn);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new A,1/0);return}if(e){const n=this.boundingSphere.center;if(jt.setFromBufferAttribute(e),t)for(let s=0,r=t.length;s<r;s++){const a=t[s];ys.setFromBufferAttribute(a),this.morphTargetsRelative?(Ct.addVectors(jt.min,ys.min),jt.expandByPoint(Ct),Ct.addVectors(jt.max,ys.max),jt.expandByPoint(Ct)):(jt.expandByPoint(ys.min),jt.expandByPoint(ys.max))}jt.getCenter(n);let i=0;for(let s=0,r=e.count;s<r;s++)Ct.fromBufferAttribute(e,s),i=Math.max(i,n.distanceToSquared(Ct));if(t)for(let s=0,r=t.length;s<r;s++){const a=t[s],l=this.morphTargetsRelative;for(let h=0,u=a.count;h<u;h++)Ct.fromBufferAttribute(a,h),l&&(Ui.fromBufferAttribute(e,h),Ct.add(Ui)),i=Math.max(i,n.distanceToSquared(Ct))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,i=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new bt(new Float32Array(4*n.count),4));const r=this.getAttribute("tangent"),a=[],l=[];for(let L=0;L<n.count;L++)a[L]=new A,l[L]=new A;const h=new A,u=new A,c=new A,d=new se,f=new se,g=new se,_=new A,m=new A;function p(L,w,S){h.fromBufferAttribute(n,L),u.fromBufferAttribute(n,w),c.fromBufferAttribute(n,S),d.fromBufferAttribute(s,L),f.fromBufferAttribute(s,w),g.fromBufferAttribute(s,S),u.sub(h),c.sub(h),f.sub(d),g.sub(d);const R=1/(f.x*g.y-g.x*f.y);isFinite(R)&&(_.copy(u).multiplyScalar(g.y).addScaledVector(c,-f.y).multiplyScalar(R),m.copy(c).multiplyScalar(f.x).addScaledVector(u,-g.x).multiplyScalar(R),a[L].add(_),a[w].add(_),a[S].add(_),l[L].add(m),l[w].add(m),l[S].add(m))}let x=this.groups;x.length===0&&(x=[{start:0,count:e.count}]);for(let L=0,w=x.length;L<w;++L){const S=x[L],R=S.start,D=S.count;for(let I=R,k=R+D;I<k;I+=3)p(e.getX(I+0),e.getX(I+1),e.getX(I+2))}const M=new A,v=new A,P=new A,C=new A;function E(L){P.fromBufferAttribute(i,L),C.copy(P);const w=a[L];M.copy(w),M.sub(P.multiplyScalar(P.dot(w))).normalize(),v.crossVectors(C,w);const R=v.dot(l[L])<0?-1:1;r.setXYZW(L,M.x,M.y,M.z,R)}for(let L=0,w=x.length;L<w;++L){const S=x[L],R=S.start,D=S.count;for(let I=R,k=R+D;I<k;I+=3)E(e.getX(I+0)),E(e.getX(I+1)),E(e.getX(I+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new bt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);const i=new A,s=new A,r=new A,a=new A,l=new A,h=new A,u=new A,c=new A;if(e)for(let d=0,f=e.count;d<f;d+=3){const g=e.getX(d+0),_=e.getX(d+1),m=e.getX(d+2);i.fromBufferAttribute(t,g),s.fromBufferAttribute(t,_),r.fromBufferAttribute(t,m),u.subVectors(r,s),c.subVectors(i,s),u.cross(c),a.fromBufferAttribute(n,g),l.fromBufferAttribute(n,_),h.fromBufferAttribute(n,m),a.add(u),l.add(u),h.add(u),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(m,h.x,h.y,h.z)}else for(let d=0,f=t.count;d<f;d+=3)i.fromBufferAttribute(t,d+0),s.fromBufferAttribute(t,d+1),r.fromBufferAttribute(t,d+2),u.subVectors(r,s),c.subVectors(i,s),u.cross(c),n.setXYZ(d+0,u.x,u.y,u.z),n.setXYZ(d+1,u.x,u.y,u.z),n.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Ct.fromBufferAttribute(e,t),Ct.normalize(),e.setXYZ(t,Ct.x,Ct.y,Ct.z)}toNonIndexed(){function e(a,l){const h=a.array,u=a.itemSize,c=a.normalized,d=new h.constructor(l.length*u);let f=0,g=0;for(let _=0,m=l.length;_<m;_++){a.isInterleavedBufferAttribute?f=l[_]*a.data.stride+a.offset:f=l[_]*u;for(let p=0;p<u;p++)d[g++]=h[f++]}return new bt(d,u,c)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new xt,n=this.index.array,i=this.attributes;for(const a in i){const l=i[a],h=e(l,n);t.setAttribute(a,h)}const s=this.morphAttributes;for(const a in s){const l=[],h=s[a];for(let u=0,c=h.length;u<c;u++){const d=h[u],f=e(d,n);l.push(f)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const r=this.groups;for(let a=0,l=r.length;a<l;a++){const h=r[a];t.addGroup(h.start,h.count,h.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const h in l)l[h]!==void 0&&(e[h]=l[h]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const h=n[l];e.data.attributes[l]=h.toJSON(e.data)}const i={};let s=!1;for(const l in this.morphAttributes){const h=this.morphAttributes[l],u=[];for(let c=0,d=h.length;c<d;c++){const f=h[c];u.push(f.toJSON(e.data))}u.length>0&&(i[l]=u,s=!0)}s&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const r=this.groups;r.length>0&&(e.data.groups=JSON.parse(JSON.stringify(r)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const i=e.attributes;for(const h in i){const u=i[h];this.setAttribute(h,u.clone(t))}const s=e.morphAttributes;for(const h in s){const u=[],c=s[h];for(let d=0,f=c.length;d<f;d++)u.push(c[d].clone(t));this.morphAttributes[h]=u}this.morphTargetsRelative=e.morphTargetsRelative;const r=e.groups;for(let h=0,u=r.length;h<u;h++){const c=r[h];this.addGroup(c.start,c.count,c.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const ql=new De,hi=new Vs,ir=new Sn,Yl=new A,sr=new A,rr=new A,or=new A,vo=new A,ar=new A,jl=new A,lr=new A;class Re extends lt{constructor(e=new xt,t=new St){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,r=i.length;s<r;s++){const a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){const n=this.geometry,i=n.attributes.position,s=n.morphAttributes.position,r=n.morphTargetsRelative;t.fromBufferAttribute(i,e);const a=this.morphTargetInfluences;if(s&&a){ar.set(0,0,0);for(let l=0,h=s.length;l<h;l++){const u=a[l],c=s[l];u!==0&&(vo.fromBufferAttribute(c,e),r?ar.addScaledVector(vo,u):ar.addScaledVector(vo.sub(t),u))}t.add(ar)}return t}raycast(e,t){const n=this.geometry,i=this.material,s=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),ir.copy(n.boundingSphere),ir.applyMatrix4(s),hi.copy(e.ray).recast(e.near),!(ir.containsPoint(hi.origin)===!1&&(hi.intersectSphere(ir,Yl)===null||hi.origin.distanceToSquared(Yl)>(e.far-e.near)**2))&&(ql.copy(s).invert(),hi.copy(e.ray).applyMatrix4(ql),!(n.boundingBox!==null&&hi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,hi)))}_computeIntersections(e,t,n){let i;const s=this.geometry,r=this.material,a=s.index,l=s.attributes.position,h=s.attributes.uv,u=s.attributes.uv1,c=s.attributes.normal,d=s.groups,f=s.drawRange;if(a!==null)if(Array.isArray(r))for(let g=0,_=d.length;g<_;g++){const m=d[g],p=r[m.materialIndex],x=Math.max(m.start,f.start),M=Math.min(a.count,Math.min(m.start+m.count,f.start+f.count));for(let v=x,P=M;v<P;v+=3){const C=a.getX(v),E=a.getX(v+1),L=a.getX(v+2);i=cr(this,p,e,n,h,u,c,C,E,L),i&&(i.faceIndex=Math.floor(v/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{const g=Math.max(0,f.start),_=Math.min(a.count,f.start+f.count);for(let m=g,p=_;m<p;m+=3){const x=a.getX(m),M=a.getX(m+1),v=a.getX(m+2);i=cr(this,r,e,n,h,u,c,x,M,v),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}else if(l!==void 0)if(Array.isArray(r))for(let g=0,_=d.length;g<_;g++){const m=d[g],p=r[m.materialIndex],x=Math.max(m.start,f.start),M=Math.min(l.count,Math.min(m.start+m.count,f.start+f.count));for(let v=x,P=M;v<P;v+=3){const C=v,E=v+1,L=v+2;i=cr(this,p,e,n,h,u,c,C,E,L),i&&(i.faceIndex=Math.floor(v/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{const g=Math.max(0,f.start),_=Math.min(l.count,f.start+f.count);for(let m=g,p=_;m<p;m+=3){const x=m,M=m+1,v=m+2;i=cr(this,r,e,n,h,u,c,x,M,v),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}}}function Ud(o,e,t,n,i,s,r,a){let l;if(e.side===kt?l=n.intersectTriangle(r,s,i,!0,a):l=n.intersectTriangle(i,s,r,e.side===Hn,a),l===null)return null;lr.copy(a),lr.applyMatrix4(o.matrixWorld);const h=t.ray.origin.distanceTo(lr);return h<t.near||h>t.far?null:{distance:h,point:lr.clone(),object:o}}function cr(o,e,t,n,i,s,r,a,l,h){o.getVertexPosition(a,sr),o.getVertexPosition(l,rr),o.getVertexPosition(h,or);const u=Ud(o,e,t,n,sr,rr,or,jl);if(u){const c=new A;en.getBarycoord(jl,sr,rr,or,c),i&&(u.uv=en.getInterpolatedAttribute(i,a,l,h,c,new se)),s&&(u.uv1=en.getInterpolatedAttribute(s,a,l,h,c,new se)),r&&(u.normal=en.getInterpolatedAttribute(r,a,l,h,c,new A),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const d={a,b:l,c:h,normal:new A,materialIndex:0};en.getNormal(sr,rr,or,d.normal),u.face=d,u.barycoord=c}return u}class Si extends xt{constructor(e=1,t=1,n=1,i=1,s=1,r=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:s,depthSegments:r};const a=this;i=Math.floor(i),s=Math.floor(s),r=Math.floor(r);const l=[],h=[],u=[],c=[];let d=0,f=0;g("z","y","x",-1,-1,n,t,e,r,s,0),g("z","y","x",1,-1,n,t,-e,r,s,1),g("x","z","y",1,1,e,n,t,i,r,2),g("x","z","y",1,-1,e,n,-t,i,r,3),g("x","y","z",1,-1,e,t,n,i,s,4),g("x","y","z",-1,-1,e,t,-n,i,s,5),this.setIndex(l),this.setAttribute("position",new rt(h,3)),this.setAttribute("normal",new rt(u,3)),this.setAttribute("uv",new rt(c,2));function g(_,m,p,x,M,v,P,C,E,L,w){const S=v/E,R=P/L,D=v/2,I=P/2,k=C/2,X=E+1,q=L+1;let J=0,V=0;const ne=new A;for(let he=0;he<q;he++){const we=he*R-I;for(let Be=0;Be<X;Be++){const Ke=Be*S-D;ne[_]=Ke*x,ne[m]=we*M,ne[p]=k,h.push(ne.x,ne.y,ne.z),ne[_]=0,ne[m]=0,ne[p]=C>0?1:-1,u.push(ne.x,ne.y,ne.z),c.push(Be/E),c.push(1-he/L),J+=1}}for(let he=0;he<L;he++)for(let we=0;we<E;we++){const Be=d+we+X*he,Ke=d+we+X*(he+1),K=d+(we+1)+X*(he+1),te=d+(we+1)+X*he;l.push(Be,Ke,te),l.push(Ke,K,te),V+=6}a.addGroup(f,V,w),f+=V,d+=J}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Si(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function rs(o){const e={};for(const t in o){e[t]={};for(const n in o[t]){const i=o[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function Ft(o){const e={};for(let t=0;t<o.length;t++){const n=rs(o[t]);for(const i in n)e[i]=n[i]}return e}function Bd(o){const e=[];for(let t=0;t<o.length;t++)e.push(o[t].clone());return e}function Nh(o){const e=o.getRenderTarget();return e===null?o.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Xe.workingColorSpace}const Gs={clone:rs,merge:Ft};var Fd=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Od=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class wt extends pn{static get type(){return"ShaderMaterial"}constructor(e){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Fd,this.fragmentShader=Od,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=rs(e.uniforms),this.uniformsGroups=Bd(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const r=this.uniforms[i].value;r&&r.isTexture?t.uniforms[i]={type:"t",value:r.toJSON(e).uuid}:r&&r.isColor?t.uniforms[i]={type:"c",value:r.getHex()}:r&&r.isVector2?t.uniforms[i]={type:"v2",value:r.toArray()}:r&&r.isVector3?t.uniforms[i]={type:"v3",value:r.toArray()}:r&&r.isVector4?t.uniforms[i]={type:"v4",value:r.toArray()}:r&&r.isMatrix3?t.uniforms[i]={type:"m3",value:r.toArray()}:r&&r.isMatrix4?t.uniforms[i]={type:"m4",value:r.toArray()}:t.uniforms[i]={value:r}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}let Uh=class extends lt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new De,this.projectionMatrix=new De,this.projectionMatrixInverse=new De,this.coordinateSystem=On}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}};const Zn=new A,Kl=new se,$l=new se;class Ot extends Uh{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=ss*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Ds*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return ss*2*Math.atan(Math.tan(Ds*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Zn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Zn.x,Zn.y).multiplyScalar(-e/Zn.z),Zn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Zn.x,Zn.y).multiplyScalar(-e/Zn.z)}getViewSize(e,t){return this.getViewBounds(e,Kl,$l),t.subVectors($l,Kl)}setViewOffset(e,t,n,i,s,r){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Ds*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,s=-.5*i;const r=this.view;if(this.view!==null&&this.view.enabled){const l=r.fullWidth,h=r.fullHeight;s+=r.offsetX*i/l,t-=r.offsetY*n/h,i*=r.width/l,n*=r.height/h}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Bi=-90,Fi=1;class kd extends lt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new Ot(Bi,Fi,e,t);i.layers=this.layers,this.add(i);const s=new Ot(Bi,Fi,e,t);s.layers=this.layers,this.add(s);const r=new Ot(Bi,Fi,e,t);r.layers=this.layers,this.add(r);const a=new Ot(Bi,Fi,e,t);a.layers=this.layers,this.add(a);const l=new Ot(Bi,Fi,e,t);l.layers=this.layers,this.add(l);const h=new Ot(Bi,Fi,e,t);h.layers=this.layers,this.add(h)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,i,s,r,a,l]=t;for(const h of t)this.remove(h);if(e===On)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),r.up.set(0,0,1),r.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===kr)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),r.up.set(0,0,-1),r.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const h of t)this.add(h),h.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,r,a,l,h,u]=this.children,c=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,i),e.render(t,s),e.setRenderTarget(n,1,i),e.render(t,r),e.setRenderTarget(n,2,i),e.render(t,a),e.setRenderTarget(n,3,i),e.render(t,l),e.setRenderTarget(n,4,i),e.render(t,h),n.texture.generateMipmaps=_,e.setRenderTarget(n,5,i),e.render(t,u),e.setRenderTarget(c,d,f),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class Bh extends Tt{constructor(e,t,n,i,s,r,a,l,h,u){e=e!==void 0?e:[],t=t!==void 0?t:Qi,super(e,t,n,i,s,r,a,l,h,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class zd extends nn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new Bh(i,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Kt}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new Si(5,5,5),s=new wt({name:"CubemapFromEquirect",uniforms:rs(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:kt,blending:kn});s.uniforms.tEquirect.value=t;const r=new Re(i,s),a=t.minFilter;return t.minFilter===Fn&&(t.minFilter=Kt),new kd(1,10,this).update(e,r),t.minFilter=a,r.geometry.dispose(),r.material.dispose(),this}clear(e,t,n,i){const s=e.getRenderTarget();for(let r=0;r<6;r++)e.setRenderTarget(this,r),e.clear(t,n,i);e.setRenderTarget(s)}}const xo=new A,Gd=new A,Hd=new ke;class gi{constructor(e=new A(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=xo.subVectors(n,t).cross(Gd.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(xo),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/i;return s<0||s>1?null:t.copy(e.start).addScaledVector(n,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||Hd.getNormalMatrix(e),i=this.coplanarPoint(xo).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ui=new Sn,hr=new A;class Qa{constructor(e=new gi,t=new gi,n=new gi,i=new gi,s=new gi,r=new gi){this.planes=[e,t,n,i,s,r]}set(e,t,n,i,s,r){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(i),a[4].copy(s),a[5].copy(r),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=On){const n=this.planes,i=e.elements,s=i[0],r=i[1],a=i[2],l=i[3],h=i[4],u=i[5],c=i[6],d=i[7],f=i[8],g=i[9],_=i[10],m=i[11],p=i[12],x=i[13],M=i[14],v=i[15];if(n[0].setComponents(l-s,d-h,m-f,v-p).normalize(),n[1].setComponents(l+s,d+h,m+f,v+p).normalize(),n[2].setComponents(l+r,d+u,m+g,v+x).normalize(),n[3].setComponents(l-r,d-u,m-g,v-x).normalize(),n[4].setComponents(l-a,d-c,m-_,v-M).normalize(),t===On)n[5].setComponents(l+a,d+c,m+_,v+M).normalize();else if(t===kr)n[5].setComponents(a,c,_,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ui.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),ui.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ui)}intersectsSprite(e){return ui.center.set(0,0,0),ui.radius=.7071067811865476,ui.applyMatrix4(e.matrixWorld),this.intersectsSphere(ui)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(hr.x=i.normal.x>0?e.max.x:e.min.x,hr.y=i.normal.y>0?e.max.y:e.min.y,hr.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(hr)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Fh(){let o=null,e=!1,t=null,n=null;function i(s,r){t(s,r),n=o.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=o.requestAnimationFrame(i),e=!0)},stop:function(){o.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){o=s}}}function Vd(o){const e=new WeakMap;function t(a,l){const h=a.array,u=a.usage,c=h.byteLength,d=o.createBuffer();o.bindBuffer(l,d),o.bufferData(l,h,u),a.onUploadCallback();let f;if(h instanceof Float32Array)f=o.FLOAT;else if(h instanceof Uint16Array)a.isFloat16BufferAttribute?f=o.HALF_FLOAT:f=o.UNSIGNED_SHORT;else if(h instanceof Int16Array)f=o.SHORT;else if(h instanceof Uint32Array)f=o.UNSIGNED_INT;else if(h instanceof Int32Array)f=o.INT;else if(h instanceof Int8Array)f=o.BYTE;else if(h instanceof Uint8Array)f=o.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)f=o.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:d,type:f,bytesPerElement:h.BYTES_PER_ELEMENT,version:a.version,size:c}}function n(a,l,h){const u=l.array,c=l.updateRanges;if(o.bindBuffer(h,a),c.length===0)o.bufferSubData(h,0,u);else{c.sort((f,g)=>f.start-g.start);let d=0;for(let f=1;f<c.length;f++){const g=c[d],_=c[f];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++d,c[d]=_)}c.length=d+1;for(let f=0,g=c.length;f<g;f++){const _=c[f];o.bufferSubData(h,_.start*u.BYTES_PER_ELEMENT,u,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function i(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(o.deleteBuffer(l.buffer),e.delete(a))}function r(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const h=e.get(a);if(h===void 0)e.set(a,t(a,l));else if(h.version<a.version){if(h.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(h.buffer,a,l),h.version=a.version}}return{get:i,remove:s,update:r}}class Wt extends xt{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const s=e/2,r=t/2,a=Math.floor(n),l=Math.floor(i),h=a+1,u=l+1,c=e/a,d=t/l,f=[],g=[],_=[],m=[];for(let p=0;p<u;p++){const x=p*d-r;for(let M=0;M<h;M++){const v=M*c-s;g.push(v,-x,0),_.push(0,0,1),m.push(M/a),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let x=0;x<a;x++){const M=x+h*p,v=x+h*(p+1),P=x+1+h*(p+1),C=x+1+h*p;f.push(M,v,C),f.push(v,P,C)}this.setIndex(f),this.setAttribute("position",new rt(g,3)),this.setAttribute("normal",new rt(_,3)),this.setAttribute("uv",new rt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Wt(e.width,e.height,e.widthSegments,e.heightSegments)}}var Wd=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Xd=`#ifdef USE_ALPHAHASH
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
#endif`,qd=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Yd=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,jd=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Kd=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,$d=`#ifdef USE_AOMAP
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
#endif`,Zd=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Jd=`#ifdef USE_BATCHING
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
#endif`,Qd=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,ef=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,tf=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,nf=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,sf=`#ifdef USE_IRIDESCENCE
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
#endif`,rf=`#ifdef USE_BUMPMAP
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
#endif`,of=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,af=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,lf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,cf=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,hf=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,uf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,df=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,ff=`#if defined( USE_COLOR_ALPHA )
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
#endif`,pf=`#define PI 3.141592653589793
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
} // validated`,mf=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,gf=`vec3 transformedNormal = objectNormal;
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
#endif`,_f=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,vf=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,xf=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,yf=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Mf="gl_FragColor = linearToOutputTexel( gl_FragColor );",Sf=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,wf=`#ifdef USE_ENVMAP
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
#endif`,Tf=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,bf=`#ifdef USE_ENVMAP
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
#endif`,Ef=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Af=`#ifdef USE_ENVMAP
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
#endif`,Cf=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Rf=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Pf=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Lf=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Df=`#ifdef USE_GRADIENTMAP
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
}`,If=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Nf=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Uf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Bf=`uniform bool receiveShadow;
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
#endif`,Ff=`#ifdef USE_ENVMAP
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
#endif`,Of=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,kf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,zf=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Gf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Hf=`PhysicalMaterial material;
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
#endif`,Vf=`struct PhysicalMaterial {
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
}`,Wf=`
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
#endif`,Xf=`#if defined( RE_IndirectDiffuse )
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
#endif`,qf=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Yf=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,jf=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Kf=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,$f=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Zf=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Jf=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Qf=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,ep=`#if defined( USE_POINTS_UV )
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
#endif`,tp=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,np=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,ip=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,sp=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,rp=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,op=`#ifdef USE_MORPHTARGETS
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
#endif`,ap=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,lp=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,cp=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,hp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,up=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,dp=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,fp=`#ifdef USE_NORMALMAP
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
#endif`,pp=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,mp=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,gp=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,_p=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,vp=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,xp=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,yp=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Mp=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Sp=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,wp=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Tp=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,bp=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Ep=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Ap=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Cp=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Rp=`float getShadowMask() {
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
}`,Pp=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Lp=`#ifdef USE_SKINNING
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
#endif`,Dp=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Ip=`#ifdef USE_SKINNING
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
#endif`,Np=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Up=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Bp=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Fp=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Op=`#ifdef USE_TRANSMISSION
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
#endif`,kp=`#ifdef USE_TRANSMISSION
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
#endif`,zp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Gp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Hp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Vp=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Wp=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Xp=`uniform sampler2D t2D;
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
}`,qp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Yp=`#ifdef ENVMAP_TYPE_CUBE
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
}`,jp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Kp=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,$p=`#include <common>
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
}`,Zp=`#if DEPTH_PACKING == 3200
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
}`,Jp=`#define DISTANCE
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
}`,Qp=`#define DISTANCE
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
}`,em=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,tm=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,nm=`uniform float scale;
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
}`,im=`uniform vec3 diffuse;
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
}`,sm=`#include <common>
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
}`,rm=`uniform vec3 diffuse;
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
}`,om=`#define LAMBERT
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
}`,am=`#define LAMBERT
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
}`,lm=`#define MATCAP
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
}`,cm=`#define MATCAP
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
}`,hm=`#define NORMAL
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
}`,um=`#define NORMAL
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
}`,dm=`#define PHONG
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
}`,fm=`#define PHONG
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
}`,pm=`#define STANDARD
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
}`,mm=`#define STANDARD
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
}`,gm=`#define TOON
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
}`,_m=`#define TOON
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
}`,vm=`uniform float size;
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
}`,xm=`uniform vec3 diffuse;
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
}`,ym=`#include <common>
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
}`,Mm=`uniform vec3 color;
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
}`,Sm=`uniform float rotation;
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
}`,wm=`uniform vec3 diffuse;
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
}`,Ge={alphahash_fragment:Wd,alphahash_pars_fragment:Xd,alphamap_fragment:qd,alphamap_pars_fragment:Yd,alphatest_fragment:jd,alphatest_pars_fragment:Kd,aomap_fragment:$d,aomap_pars_fragment:Zd,batching_pars_vertex:Jd,batching_vertex:Qd,begin_vertex:ef,beginnormal_vertex:tf,bsdfs:nf,iridescence_fragment:sf,bumpmap_pars_fragment:rf,clipping_planes_fragment:of,clipping_planes_pars_fragment:af,clipping_planes_pars_vertex:lf,clipping_planes_vertex:cf,color_fragment:hf,color_pars_fragment:uf,color_pars_vertex:df,color_vertex:ff,common:pf,cube_uv_reflection_fragment:mf,defaultnormal_vertex:gf,displacementmap_pars_vertex:_f,displacementmap_vertex:vf,emissivemap_fragment:xf,emissivemap_pars_fragment:yf,colorspace_fragment:Mf,colorspace_pars_fragment:Sf,envmap_fragment:wf,envmap_common_pars_fragment:Tf,envmap_pars_fragment:bf,envmap_pars_vertex:Ef,envmap_physical_pars_fragment:Ff,envmap_vertex:Af,fog_vertex:Cf,fog_pars_vertex:Rf,fog_fragment:Pf,fog_pars_fragment:Lf,gradientmap_pars_fragment:Df,lightmap_pars_fragment:If,lights_lambert_fragment:Nf,lights_lambert_pars_fragment:Uf,lights_pars_begin:Bf,lights_toon_fragment:Of,lights_toon_pars_fragment:kf,lights_phong_fragment:zf,lights_phong_pars_fragment:Gf,lights_physical_fragment:Hf,lights_physical_pars_fragment:Vf,lights_fragment_begin:Wf,lights_fragment_maps:Xf,lights_fragment_end:qf,logdepthbuf_fragment:Yf,logdepthbuf_pars_fragment:jf,logdepthbuf_pars_vertex:Kf,logdepthbuf_vertex:$f,map_fragment:Zf,map_pars_fragment:Jf,map_particle_fragment:Qf,map_particle_pars_fragment:ep,metalnessmap_fragment:tp,metalnessmap_pars_fragment:np,morphinstance_vertex:ip,morphcolor_vertex:sp,morphnormal_vertex:rp,morphtarget_pars_vertex:op,morphtarget_vertex:ap,normal_fragment_begin:lp,normal_fragment_maps:cp,normal_pars_fragment:hp,normal_pars_vertex:up,normal_vertex:dp,normalmap_pars_fragment:fp,clearcoat_normal_fragment_begin:pp,clearcoat_normal_fragment_maps:mp,clearcoat_pars_fragment:gp,iridescence_pars_fragment:_p,opaque_fragment:vp,packing:xp,premultiplied_alpha_fragment:yp,project_vertex:Mp,dithering_fragment:Sp,dithering_pars_fragment:wp,roughnessmap_fragment:Tp,roughnessmap_pars_fragment:bp,shadowmap_pars_fragment:Ep,shadowmap_pars_vertex:Ap,shadowmap_vertex:Cp,shadowmask_pars_fragment:Rp,skinbase_vertex:Pp,skinning_pars_vertex:Lp,skinning_vertex:Dp,skinnormal_vertex:Ip,specularmap_fragment:Np,specularmap_pars_fragment:Up,tonemapping_fragment:Bp,tonemapping_pars_fragment:Fp,transmission_fragment:Op,transmission_pars_fragment:kp,uv_pars_fragment:zp,uv_pars_vertex:Gp,uv_vertex:Hp,worldpos_vertex:Vp,background_vert:Wp,background_frag:Xp,backgroundCube_vert:qp,backgroundCube_frag:Yp,cube_vert:jp,cube_frag:Kp,depth_vert:$p,depth_frag:Zp,distanceRGBA_vert:Jp,distanceRGBA_frag:Qp,equirect_vert:em,equirect_frag:tm,linedashed_vert:nm,linedashed_frag:im,meshbasic_vert:sm,meshbasic_frag:rm,meshlambert_vert:om,meshlambert_frag:am,meshmatcap_vert:lm,meshmatcap_frag:cm,meshnormal_vert:hm,meshnormal_frag:um,meshphong_vert:dm,meshphong_frag:fm,meshphysical_vert:pm,meshphysical_frag:mm,meshtoon_vert:gm,meshtoon_frag:_m,points_vert:vm,points_frag:xm,shadow_vert:ym,shadow_frag:Mm,sprite_vert:Sm,sprite_frag:wm},ce={common:{diffuse:{value:new le(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ke},alphaMap:{value:null},alphaMapTransform:{value:new ke},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ke}},envmap:{envMap:{value:null},envMapRotation:{value:new ke},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ke}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ke}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ke},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ke},normalScale:{value:new se(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ke},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ke}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ke}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ke}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new le(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new le(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ke},alphaTest:{value:0},uvTransform:{value:new ke}},sprite:{diffuse:{value:new le(16777215)},opacity:{value:1},center:{value:new se(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ke},alphaMap:{value:null},alphaMapTransform:{value:new ke},alphaTest:{value:0}}},xn={basic:{uniforms:Ft([ce.common,ce.specularmap,ce.envmap,ce.aomap,ce.lightmap,ce.fog]),vertexShader:Ge.meshbasic_vert,fragmentShader:Ge.meshbasic_frag},lambert:{uniforms:Ft([ce.common,ce.specularmap,ce.envmap,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.fog,ce.lights,{emissive:{value:new le(0)}}]),vertexShader:Ge.meshlambert_vert,fragmentShader:Ge.meshlambert_frag},phong:{uniforms:Ft([ce.common,ce.specularmap,ce.envmap,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.fog,ce.lights,{emissive:{value:new le(0)},specular:{value:new le(1118481)},shininess:{value:30}}]),vertexShader:Ge.meshphong_vert,fragmentShader:Ge.meshphong_frag},standard:{uniforms:Ft([ce.common,ce.envmap,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.roughnessmap,ce.metalnessmap,ce.fog,ce.lights,{emissive:{value:new le(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ge.meshphysical_vert,fragmentShader:Ge.meshphysical_frag},toon:{uniforms:Ft([ce.common,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.gradientmap,ce.fog,ce.lights,{emissive:{value:new le(0)}}]),vertexShader:Ge.meshtoon_vert,fragmentShader:Ge.meshtoon_frag},matcap:{uniforms:Ft([ce.common,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.fog,{matcap:{value:null}}]),vertexShader:Ge.meshmatcap_vert,fragmentShader:Ge.meshmatcap_frag},points:{uniforms:Ft([ce.points,ce.fog]),vertexShader:Ge.points_vert,fragmentShader:Ge.points_frag},dashed:{uniforms:Ft([ce.common,ce.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ge.linedashed_vert,fragmentShader:Ge.linedashed_frag},depth:{uniforms:Ft([ce.common,ce.displacementmap]),vertexShader:Ge.depth_vert,fragmentShader:Ge.depth_frag},normal:{uniforms:Ft([ce.common,ce.bumpmap,ce.normalmap,ce.displacementmap,{opacity:{value:1}}]),vertexShader:Ge.meshnormal_vert,fragmentShader:Ge.meshnormal_frag},sprite:{uniforms:Ft([ce.sprite,ce.fog]),vertexShader:Ge.sprite_vert,fragmentShader:Ge.sprite_frag},background:{uniforms:{uvTransform:{value:new ke},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ge.background_vert,fragmentShader:Ge.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ke}},vertexShader:Ge.backgroundCube_vert,fragmentShader:Ge.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ge.cube_vert,fragmentShader:Ge.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ge.equirect_vert,fragmentShader:Ge.equirect_frag},distanceRGBA:{uniforms:Ft([ce.common,ce.displacementmap,{referencePosition:{value:new A},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ge.distanceRGBA_vert,fragmentShader:Ge.distanceRGBA_frag},shadow:{uniforms:Ft([ce.lights,ce.fog,{color:{value:new le(0)},opacity:{value:1}}]),vertexShader:Ge.shadow_vert,fragmentShader:Ge.shadow_frag}};xn.physical={uniforms:Ft([xn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ke},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ke},clearcoatNormalScale:{value:new se(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ke},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ke},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ke},sheen:{value:0},sheenColor:{value:new le(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ke},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ke},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ke},transmissionSamplerSize:{value:new se},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ke},attenuationDistance:{value:0},attenuationColor:{value:new le(0)},specularColor:{value:new le(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ke},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ke},anisotropyVector:{value:new se},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ke}}]),vertexShader:Ge.meshphysical_vert,fragmentShader:Ge.meshphysical_frag};const ur={r:0,b:0,g:0},di=new mn,Tm=new De;function bm(o,e,t,n,i,s,r){const a=new le(0);let l=s===!0?0:1,h,u,c=null,d=0,f=null;function g(x){let M=x.isScene===!0?x.background:null;return M&&M.isTexture&&(M=(x.backgroundBlurriness>0?t:e).get(M)),M}function _(x){let M=!1;const v=g(x);v===null?p(a,l):v&&v.isColor&&(p(v,1),M=!0);const P=o.xr.getEnvironmentBlendMode();P==="additive"?n.buffers.color.setClear(0,0,0,1,r):P==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,r),(o.autoClear||M)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),o.clear(o.autoClearColor,o.autoClearDepth,o.autoClearStencil))}function m(x,M){const v=g(M);v&&(v.isCubeTexture||v.mapping===Wr)?(u===void 0&&(u=new Re(new Si(1,1,1),new wt({name:"BackgroundCubeMaterial",uniforms:rs(xn.backgroundCube.uniforms),vertexShader:xn.backgroundCube.vertexShader,fragmentShader:xn.backgroundCube.fragmentShader,side:kt,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(P,C,E){this.matrixWorld.copyPosition(E.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(u)),di.copy(M.backgroundRotation),di.x*=-1,di.y*=-1,di.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(di.y*=-1,di.z*=-1),u.material.uniforms.envMap.value=v,u.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=M.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(Tm.makeRotationFromEuler(di)),u.material.toneMapped=Xe.getTransfer(v.colorSpace)!==it,(c!==v||d!==v.version||f!==o.toneMapping)&&(u.material.needsUpdate=!0,c=v,d=v.version,f=o.toneMapping),u.layers.enableAll(),x.unshift(u,u.geometry,u.material,0,0,null)):v&&v.isTexture&&(h===void 0&&(h=new Re(new Wt(2,2),new wt({name:"BackgroundMaterial",uniforms:rs(xn.background.uniforms),vertexShader:xn.background.vertexShader,fragmentShader:xn.background.fragmentShader,side:Hn,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),Object.defineProperty(h.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(h)),h.material.uniforms.t2D.value=v,h.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,h.material.toneMapped=Xe.getTransfer(v.colorSpace)!==it,v.matrixAutoUpdate===!0&&v.updateMatrix(),h.material.uniforms.uvTransform.value.copy(v.matrix),(c!==v||d!==v.version||f!==o.toneMapping)&&(h.material.needsUpdate=!0,c=v,d=v.version,f=o.toneMapping),h.layers.enableAll(),x.unshift(h,h.geometry,h.material,0,0,null))}function p(x,M){x.getRGB(ur,Nh(o)),n.buffers.color.setClear(ur.r,ur.g,ur.b,M,r)}return{getClearColor:function(){return a},setClearColor:function(x,M=1){a.set(x),l=M,p(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(x){l=x,p(a,l)},render:_,addToRenderList:m}}function Em(o,e){const t=o.getParameter(o.MAX_VERTEX_ATTRIBS),n={},i=d(null);let s=i,r=!1;function a(S,R,D,I,k){let X=!1;const q=c(I,D,R);s!==q&&(s=q,h(s.object)),X=f(S,I,D,k),X&&g(S,I,D,k),k!==null&&e.update(k,o.ELEMENT_ARRAY_BUFFER),(X||r)&&(r=!1,v(S,R,D,I),k!==null&&o.bindBuffer(o.ELEMENT_ARRAY_BUFFER,e.get(k).buffer))}function l(){return o.createVertexArray()}function h(S){return o.bindVertexArray(S)}function u(S){return o.deleteVertexArray(S)}function c(S,R,D){const I=D.wireframe===!0;let k=n[S.id];k===void 0&&(k={},n[S.id]=k);let X=k[R.id];X===void 0&&(X={},k[R.id]=X);let q=X[I];return q===void 0&&(q=d(l()),X[I]=q),q}function d(S){const R=[],D=[],I=[];for(let k=0;k<t;k++)R[k]=0,D[k]=0,I[k]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:R,enabledAttributes:D,attributeDivisors:I,object:S,attributes:{},index:null}}function f(S,R,D,I){const k=s.attributes,X=R.attributes;let q=0;const J=D.getAttributes();for(const V in J)if(J[V].location>=0){const he=k[V];let we=X[V];if(we===void 0&&(V==="instanceMatrix"&&S.instanceMatrix&&(we=S.instanceMatrix),V==="instanceColor"&&S.instanceColor&&(we=S.instanceColor)),he===void 0||he.attribute!==we||we&&he.data!==we.data)return!0;q++}return s.attributesNum!==q||s.index!==I}function g(S,R,D,I){const k={},X=R.attributes;let q=0;const J=D.getAttributes();for(const V in J)if(J[V].location>=0){let he=X[V];he===void 0&&(V==="instanceMatrix"&&S.instanceMatrix&&(he=S.instanceMatrix),V==="instanceColor"&&S.instanceColor&&(he=S.instanceColor));const we={};we.attribute=he,he&&he.data&&(we.data=he.data),k[V]=we,q++}s.attributes=k,s.attributesNum=q,s.index=I}function _(){const S=s.newAttributes;for(let R=0,D=S.length;R<D;R++)S[R]=0}function m(S){p(S,0)}function p(S,R){const D=s.newAttributes,I=s.enabledAttributes,k=s.attributeDivisors;D[S]=1,I[S]===0&&(o.enableVertexAttribArray(S),I[S]=1),k[S]!==R&&(o.vertexAttribDivisor(S,R),k[S]=R)}function x(){const S=s.newAttributes,R=s.enabledAttributes;for(let D=0,I=R.length;D<I;D++)R[D]!==S[D]&&(o.disableVertexAttribArray(D),R[D]=0)}function M(S,R,D,I,k,X,q){q===!0?o.vertexAttribIPointer(S,R,D,k,X):o.vertexAttribPointer(S,R,D,I,k,X)}function v(S,R,D,I){_();const k=I.attributes,X=D.getAttributes(),q=R.defaultAttributeValues;for(const J in X){const V=X[J];if(V.location>=0){let ne=k[J];if(ne===void 0&&(J==="instanceMatrix"&&S.instanceMatrix&&(ne=S.instanceMatrix),J==="instanceColor"&&S.instanceColor&&(ne=S.instanceColor)),ne!==void 0){const he=ne.normalized,we=ne.itemSize,Be=e.get(ne);if(Be===void 0)continue;const Ke=Be.buffer,K=Be.type,te=Be.bytesPerElement,Se=K===o.INT||K===o.UNSIGNED_INT||ne.gpuType===Va;if(ne.isInterleavedBufferAttribute){const oe=ne.data,Te=oe.stride,Me=ne.offset;if(oe.isInstancedInterleavedBuffer){for(let Ne=0;Ne<V.locationSize;Ne++)p(V.location+Ne,oe.meshPerAttribute);S.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=oe.meshPerAttribute*oe.count)}else for(let Ne=0;Ne<V.locationSize;Ne++)m(V.location+Ne);o.bindBuffer(o.ARRAY_BUFFER,Ke);for(let Ne=0;Ne<V.locationSize;Ne++)M(V.location+Ne,we/V.locationSize,K,he,Te*te,(Me+we/V.locationSize*Ne)*te,Se)}else{if(ne.isInstancedBufferAttribute){for(let oe=0;oe<V.locationSize;oe++)p(V.location+oe,ne.meshPerAttribute);S.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=ne.meshPerAttribute*ne.count)}else for(let oe=0;oe<V.locationSize;oe++)m(V.location+oe);o.bindBuffer(o.ARRAY_BUFFER,Ke);for(let oe=0;oe<V.locationSize;oe++)M(V.location+oe,we/V.locationSize,K,he,we*te,we/V.locationSize*oe*te,Se)}}else if(q!==void 0){const he=q[J];if(he!==void 0)switch(he.length){case 2:o.vertexAttrib2fv(V.location,he);break;case 3:o.vertexAttrib3fv(V.location,he);break;case 4:o.vertexAttrib4fv(V.location,he);break;default:o.vertexAttrib1fv(V.location,he)}}}}x()}function P(){L();for(const S in n){const R=n[S];for(const D in R){const I=R[D];for(const k in I)u(I[k].object),delete I[k];delete R[D]}delete n[S]}}function C(S){if(n[S.id]===void 0)return;const R=n[S.id];for(const D in R){const I=R[D];for(const k in I)u(I[k].object),delete I[k];delete R[D]}delete n[S.id]}function E(S){for(const R in n){const D=n[R];if(D[S.id]===void 0)continue;const I=D[S.id];for(const k in I)u(I[k].object),delete I[k];delete D[S.id]}}function L(){w(),r=!0,s!==i&&(s=i,h(s.object))}function w(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:a,reset:L,resetDefaultState:w,dispose:P,releaseStatesOfGeometry:C,releaseStatesOfProgram:E,initAttributes:_,enableAttribute:m,disableUnusedAttributes:x}}function Am(o,e,t){let n;function i(h){n=h}function s(h,u){o.drawArrays(n,h,u),t.update(u,n,1)}function r(h,u,c){c!==0&&(o.drawArraysInstanced(n,h,u,c),t.update(u,n,c))}function a(h,u,c){if(c===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,h,0,u,0,c);let f=0;for(let g=0;g<c;g++)f+=u[g];t.update(f,n,1)}function l(h,u,c,d){if(c===0)return;const f=e.get("WEBGL_multi_draw");if(f===null)for(let g=0;g<h.length;g++)r(h[g],u[g],d[g]);else{f.multiDrawArraysInstancedWEBGL(n,h,0,u,0,d,0,c);let g=0;for(let _=0;_<c;_++)g+=u[_]*d[_];t.update(g,n,1)}}this.setMode=i,this.render=s,this.renderInstances=r,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function Cm(o,e,t,n){let i;function s(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const E=e.get("EXT_texture_filter_anisotropic");i=o.getParameter(E.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function r(E){return!(E!==tn&&n.convert(E)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(E){const L=E===Mn&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(E!==Vn&&n.convert(E)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_TYPE)&&E!==dn&&!L)}function l(E){if(E==="highp"){if(o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.HIGH_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.HIGH_FLOAT).precision>0)return"highp";E="mediump"}return E==="mediump"&&o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.MEDIUM_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let h=t.precision!==void 0?t.precision:"highp";const u=l(h);u!==h&&(console.warn("THREE.WebGLRenderer:",h,"not supported, using",u,"instead."),h=u);const c=t.logarithmicDepthBuffer===!0,d=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),f=o.getParameter(o.MAX_TEXTURE_IMAGE_UNITS),g=o.getParameter(o.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=o.getParameter(o.MAX_TEXTURE_SIZE),m=o.getParameter(o.MAX_CUBE_MAP_TEXTURE_SIZE),p=o.getParameter(o.MAX_VERTEX_ATTRIBS),x=o.getParameter(o.MAX_VERTEX_UNIFORM_VECTORS),M=o.getParameter(o.MAX_VARYING_VECTORS),v=o.getParameter(o.MAX_FRAGMENT_UNIFORM_VECTORS),P=g>0,C=o.getParameter(o.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:r,textureTypeReadable:a,precision:h,logarithmicDepthBuffer:c,reverseDepthBuffer:d,maxTextures:f,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:x,maxVaryings:M,maxFragmentUniforms:v,vertexTextures:P,maxSamples:C}}function Rm(o){const e=this;let t=null,n=0,i=!1,s=!1;const r=new gi,a=new ke,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(c,d){const f=c.length!==0||d||n!==0||i;return i=d,n=c.length,f},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(c,d){t=u(c,d,0)},this.setState=function(c,d,f){const g=c.clippingPlanes,_=c.clipIntersection,m=c.clipShadows,p=o.get(c);if(!i||g===null||g.length===0||s&&!m)s?u(null):h();else{const x=s?0:n,M=x*4;let v=p.clippingState||null;l.value=v,v=u(g,d,M,f);for(let P=0;P!==M;++P)v[P]=t[P];p.clippingState=v,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=x}};function h(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(c,d,f,g){const _=c!==null?c.length:0;let m=null;if(_!==0){if(m=l.value,g!==!0||m===null){const p=f+_*4,x=d.matrixWorldInverse;a.getNormalMatrix(x),(m===null||m.length<p)&&(m=new Float32Array(p));for(let M=0,v=f;M!==_;++M,v+=4)r.copy(c[M]).applyMatrix4(x,a),r.normal.toArray(m,v),m[v+3]=r.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,m}}function Pm(o){let e=new WeakMap;function t(r,a){return a===ea?r.mapping=Qi:a===ta&&(r.mapping=es),r}function n(r){if(r&&r.isTexture){const a=r.mapping;if(a===ea||a===ta)if(e.has(r)){const l=e.get(r).texture;return t(l,r.mapping)}else{const l=r.image;if(l&&l.height>0){const h=new zd(l.height);return h.fromEquirectangularTexture(o,r),e.set(r,h),r.addEventListener("dispose",i),t(h.texture,r.mapping)}else return null}}return r}function i(r){const a=r.target;a.removeEventListener("dispose",i);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:n,dispose:s}}class qr extends Uh{constructor(e=-1,t=1,n=1,i=-1,s=.1,r=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=s,this.far=r,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,s,r){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let s=n-e,r=n+e,a=i+t,l=i-t;if(this.view!==null&&this.view.enabled){const h=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=h*this.view.offsetX,r=s+h*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,r,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Yi=4,Zl=[.125,.215,.35,.446,.526,.582],xi=20,yo=new qr,Jl=new le;let Mo=null,So=0,wo=0,To=!1;const _i=(1+Math.sqrt(5))/2,Oi=1/_i,Ql=[new A(-_i,Oi,0),new A(_i,Oi,0),new A(-Oi,0,_i),new A(Oi,0,_i),new A(0,_i,-Oi),new A(0,_i,Oi),new A(-1,1,-1),new A(1,1,-1),new A(-1,1,1),new A(1,1,1)];class ec{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100){Mo=this._renderer.getRenderTarget(),So=this._renderer.getActiveCubeFace(),wo=this._renderer.getActiveMipmapLevel(),To=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,n,i,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=ic(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=nc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Mo,So,wo),this._renderer.xr.enabled=To,e.scissorTest=!1,dr(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Qi||e.mapping===es?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Mo=this._renderer.getRenderTarget(),So=this._renderer.getActiveCubeFace(),wo=this._renderer.getActiveMipmapLevel(),To=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Kt,minFilter:Kt,generateMipmaps:!1,type:Mn,format:tn,colorSpace:Gt,depthBuffer:!1},i=tc(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=tc(e,t,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Lm(s)),this._blurMaterial=Dm(s,e,t)}return i}_compileMaterial(e){const t=new Re(this._lodPlanes[0],e);this._renderer.compile(t,yo)}_sceneToCubeUV(e,t,n,i){const a=new Ot(90,1,t,n),l=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],u=this._renderer,c=u.autoClear,d=u.toneMapping;u.getClearColor(Jl),u.toneMapping=oi,u.autoClear=!1;const f=new St({name:"PMREM.Background",side:kt,depthWrite:!1,depthTest:!1}),g=new Re(new Si,f);let _=!1;const m=e.background;m?m.isColor&&(f.color.copy(m),e.background=null,_=!0):(f.color.copy(Jl),_=!0);for(let p=0;p<6;p++){const x=p%3;x===0?(a.up.set(0,l[p],0),a.lookAt(h[p],0,0)):x===1?(a.up.set(0,0,l[p]),a.lookAt(0,h[p],0)):(a.up.set(0,l[p],0),a.lookAt(0,0,h[p]));const M=this._cubeSize;dr(i,x*M,p>2?M:0,M,M),u.setRenderTarget(i),_&&u.render(g,a),u.render(e,a)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=d,u.autoClear=c,e.background=m}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===Qi||e.mapping===es;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=ic()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=nc());const s=i?this._cubemapMaterial:this._equirectMaterial,r=new Re(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;dr(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(r,yo)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const i=this._lodPlanes.length;for(let s=1;s<i;s++){const r=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=Ql[(i-s-1)%Ql.length];this._blur(e,s-1,s,r,a)}t.autoClear=n}_blur(e,t,n,i,s){const r=this._pingPongRenderTarget;this._halfBlur(e,r,t,n,i,"latitudinal",s),this._halfBlur(r,e,n,n,i,"longitudinal",s)}_halfBlur(e,t,n,i,s,r,a){const l=this._renderer,h=this._blurMaterial;r!=="latitudinal"&&r!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,c=new Re(this._lodPlanes[i],h),d=h.uniforms,f=this._sizeLods[n]-1,g=isFinite(s)?Math.PI/(2*f):2*Math.PI/(2*xi-1),_=s/g,m=isFinite(s)?1+Math.floor(u*_):xi;m>xi&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${xi}`);const p=[];let x=0;for(let E=0;E<xi;++E){const L=E/_,w=Math.exp(-L*L/2);p.push(w),E===0?x+=w:E<m&&(x+=2*w)}for(let E=0;E<p.length;E++)p[E]=p[E]/x;d.envMap.value=e.texture,d.samples.value=m,d.weights.value=p,d.latitudinal.value=r==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:M}=this;d.dTheta.value=g,d.mipInt.value=M-n;const v=this._sizeLods[i],P=3*v*(i>M-Yi?i-M+Yi:0),C=4*(this._cubeSize-v);dr(t,P,C,3*v,2*v),l.setRenderTarget(t),l.render(c,yo)}}function Lm(o){const e=[],t=[],n=[];let i=o;const s=o-Yi+1+Zl.length;for(let r=0;r<s;r++){const a=Math.pow(2,i);t.push(a);let l=1/a;r>o-Yi?l=Zl[r-o+Yi-1]:r===0&&(l=0),n.push(l);const h=1/(a-2),u=-h,c=1+h,d=[u,u,c,u,c,c,u,u,c,c,u,c],f=6,g=6,_=3,m=2,p=1,x=new Float32Array(_*g*f),M=new Float32Array(m*g*f),v=new Float32Array(p*g*f);for(let C=0;C<f;C++){const E=C%3*2/3-1,L=C>2?0:-1,w=[E,L,0,E+2/3,L,0,E+2/3,L+1,0,E,L,0,E+2/3,L+1,0,E,L+1,0];x.set(w,_*g*C),M.set(d,m*g*C);const S=[C,C,C,C,C,C];v.set(S,p*g*C)}const P=new xt;P.setAttribute("position",new bt(x,_)),P.setAttribute("uv",new bt(M,m)),P.setAttribute("faceIndex",new bt(v,p)),e.push(P),i>Yi&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function tc(o,e,t){const n=new nn(o,e,t);return n.texture.mapping=Wr,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function dr(o,e,t,n,i){o.viewport.set(e,t,n,i),o.scissor.set(e,t,n,i)}function Dm(o,e,t){const n=new Float32Array(xi),i=new A(0,1,0);return new wt({name:"SphericalGaussianBlur",defines:{n:xi,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:el(),fragmentShader:`

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
		`,blending:kn,depthTest:!1,depthWrite:!1})}function nc(){return new wt({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:el(),fragmentShader:`

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
		`,blending:kn,depthTest:!1,depthWrite:!1})}function ic(){return new wt({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:el(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:kn,depthTest:!1,depthWrite:!1})}function el(){return`

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
	`}function Im(o){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){const l=a.mapping,h=l===ea||l===ta,u=l===Qi||l===es;if(h||u){let c=e.get(a);const d=c!==void 0?c.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return t===null&&(t=new ec(o)),c=h?t.fromEquirectangular(a,c):t.fromCubemap(a,c),c.texture.pmremVersion=a.pmremVersion,e.set(a,c),c.texture;if(c!==void 0)return c.texture;{const f=a.image;return h&&f&&f.height>0||u&&f&&i(f)?(t===null&&(t=new ec(o)),c=h?t.fromEquirectangular(a):t.fromCubemap(a),c.texture.pmremVersion=a.pmremVersion,e.set(a,c),a.addEventListener("dispose",s),c.texture):null}}}return a}function i(a){let l=0;const h=6;for(let u=0;u<h;u++)a[u]!==void 0&&l++;return l===h}function s(a){const l=a.target;l.removeEventListener("dispose",s);const h=e.get(l);h!==void 0&&(e.delete(l),h.dispose())}function r(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:r}}function Nm(o){const e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=o.getExtension("WEBGL_depth_texture")||o.getExtension("MOZ_WEBGL_depth_texture")||o.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=o.getExtension("EXT_texture_filter_anisotropic")||o.getExtension("MOZ_EXT_texture_filter_anisotropic")||o.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=o.getExtension("WEBGL_compressed_texture_s3tc")||o.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=o.getExtension("WEBGL_compressed_texture_pvrtc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=o.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const i=t(n);return i===null&&Ps("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function Um(o,e,t,n){const i={},s=new WeakMap;function r(c){const d=c.target;d.index!==null&&e.remove(d.index);for(const g in d.attributes)e.remove(d.attributes[g]);for(const g in d.morphAttributes){const _=d.morphAttributes[g];for(let m=0,p=_.length;m<p;m++)e.remove(_[m])}d.removeEventListener("dispose",r),delete i[d.id];const f=s.get(d);f&&(e.remove(f),s.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function a(c,d){return i[d.id]===!0||(d.addEventListener("dispose",r),i[d.id]=!0,t.memory.geometries++),d}function l(c){const d=c.attributes;for(const g in d)e.update(d[g],o.ARRAY_BUFFER);const f=c.morphAttributes;for(const g in f){const _=f[g];for(let m=0,p=_.length;m<p;m++)e.update(_[m],o.ARRAY_BUFFER)}}function h(c){const d=[],f=c.index,g=c.attributes.position;let _=0;if(f!==null){const x=f.array;_=f.version;for(let M=0,v=x.length;M<v;M+=3){const P=x[M+0],C=x[M+1],E=x[M+2];d.push(P,C,C,E,E,P)}}else if(g!==void 0){const x=g.array;_=g.version;for(let M=0,v=x.length/3-1;M<v;M+=3){const P=M+0,C=M+1,E=M+2;d.push(P,C,C,E,E,P)}}else return;const m=new(Ch(d)?Ih:Dh)(d,1);m.version=_;const p=s.get(c);p&&e.remove(p),s.set(c,m)}function u(c){const d=s.get(c);if(d){const f=c.index;f!==null&&d.version<f.version&&h(c)}else h(c);return s.get(c)}return{get:a,update:l,getWireframeAttribute:u}}function Bm(o,e,t){let n;function i(d){n=d}let s,r;function a(d){s=d.type,r=d.bytesPerElement}function l(d,f){o.drawElements(n,f,s,d*r),t.update(f,n,1)}function h(d,f,g){g!==0&&(o.drawElementsInstanced(n,f,s,d*r,g),t.update(f,n,g))}function u(d,f,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,s,d,0,g);let m=0;for(let p=0;p<g;p++)m+=f[p];t.update(m,n,1)}function c(d,f,g,_){if(g===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<d.length;p++)h(d[p]/r,f[p],_[p]);else{m.multiDrawElementsInstancedWEBGL(n,f,0,s,d,0,_,0,g);let p=0;for(let x=0;x<g;x++)p+=f[x]*_[x];t.update(p,n,1)}}this.setMode=i,this.setIndex=a,this.render=l,this.renderInstances=h,this.renderMultiDraw=u,this.renderMultiDrawInstances=c}function Fm(o){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,r,a){switch(t.calls++,r){case o.TRIANGLES:t.triangles+=a*(s/3);break;case o.LINES:t.lines+=a*(s/2);break;case o.LINE_STRIP:t.lines+=a*(s-1);break;case o.LINE_LOOP:t.lines+=a*s;break;case o.POINTS:t.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",r);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function Om(o,e,t){const n=new WeakMap,i=new Ze;function s(r,a,l){const h=r.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,c=u!==void 0?u.length:0;let d=n.get(a);if(d===void 0||d.count!==c){let S=function(){L.dispose(),n.delete(a),a.removeEventListener("dispose",S)};var f=S;d!==void 0&&d.texture.dispose();const g=a.morphAttributes.position!==void 0,_=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],x=a.morphAttributes.normal||[],M=a.morphAttributes.color||[];let v=0;g===!0&&(v=1),_===!0&&(v=2),m===!0&&(v=3);let P=a.attributes.position.count*v,C=1;P>e.maxTextureSize&&(C=Math.ceil(P/e.maxTextureSize),P=e.maxTextureSize);const E=new Float32Array(P*C*4*c),L=new Ph(E,P,C,c);L.type=dn,L.needsUpdate=!0;const w=v*4;for(let R=0;R<c;R++){const D=p[R],I=x[R],k=M[R],X=P*C*4*R;for(let q=0;q<D.count;q++){const J=q*w;g===!0&&(i.fromBufferAttribute(D,q),E[X+J+0]=i.x,E[X+J+1]=i.y,E[X+J+2]=i.z,E[X+J+3]=0),_===!0&&(i.fromBufferAttribute(I,q),E[X+J+4]=i.x,E[X+J+5]=i.y,E[X+J+6]=i.z,E[X+J+7]=0),m===!0&&(i.fromBufferAttribute(k,q),E[X+J+8]=i.x,E[X+J+9]=i.y,E[X+J+10]=i.z,E[X+J+11]=k.itemSize===4?i.w:1)}}d={count:c,texture:L,size:new se(P,C)},n.set(a,d),a.addEventListener("dispose",S)}if(r.isInstancedMesh===!0&&r.morphTexture!==null)l.getUniforms().setValue(o,"morphTexture",r.morphTexture,t);else{let g=0;for(let m=0;m<h.length;m++)g+=h[m];const _=a.morphTargetsRelative?1:1-g;l.getUniforms().setValue(o,"morphTargetBaseInfluence",_),l.getUniforms().setValue(o,"morphTargetInfluences",h)}l.getUniforms().setValue(o,"morphTargetsTexture",d.texture,t),l.getUniforms().setValue(o,"morphTargetsTextureSize",d.size)}return{update:s}}function km(o,e,t,n){let i=new WeakMap;function s(l){const h=n.render.frame,u=l.geometry,c=e.get(l,u);if(i.get(c)!==h&&(e.update(c),i.set(c,h)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),i.get(l)!==h&&(t.update(l.instanceMatrix,o.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,o.ARRAY_BUFFER),i.set(l,h))),l.isSkinnedMesh){const d=l.skeleton;i.get(d)!==h&&(d.update(),i.set(d,h))}return c}function r(){i=new WeakMap}function a(l){const h=l.target;h.removeEventListener("dispose",a),t.remove(h.instanceMatrix),h.instanceColor!==null&&t.remove(h.instanceColor)}return{update:s,dispose:r}}class Oh extends Tt{constructor(e,t,n,i,s,r,a,l,h,u=Ki){if(u!==Ki&&u!==is)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===Ki&&(n=Mi),n===void 0&&u===is&&(n=ns),super(null,i,s,r,a,l,u,n,h),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:zt,this.minFilter=l!==void 0?l:zt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const kh=new Tt,sc=new Oh(1,1),zh=new Ph,Gh=new bd,Hh=new Bh,rc=[],oc=[],ac=new Float32Array(16),lc=new Float32Array(9),cc=new Float32Array(4);function hs(o,e,t){const n=o[0];if(n<=0||n>0)return o;const i=e*t;let s=rc[i];if(s===void 0&&(s=new Float32Array(i),rc[i]=s),e!==0){n.toArray(s,0);for(let r=1,a=0;r!==e;++r)a+=t,o[r].toArray(s,a)}return s}function Et(o,e){if(o.length!==e.length)return!1;for(let t=0,n=o.length;t<n;t++)if(o[t]!==e[t])return!1;return!0}function At(o,e){for(let t=0,n=e.length;t<n;t++)o[t]=e[t]}function Yr(o,e){let t=oc[e];t===void 0&&(t=new Int32Array(e),oc[e]=t);for(let n=0;n!==e;++n)t[n]=o.allocateTextureUnit();return t}function zm(o,e){const t=this.cache;t[0]!==e&&(o.uniform1f(this.addr,e),t[0]=e)}function Gm(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(o.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Et(t,e))return;o.uniform2fv(this.addr,e),At(t,e)}}function Hm(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(o.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(o.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Et(t,e))return;o.uniform3fv(this.addr,e),At(t,e)}}function Vm(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(o.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Et(t,e))return;o.uniform4fv(this.addr,e),At(t,e)}}function Wm(o,e){const t=this.cache,n=e.elements;if(n===void 0){if(Et(t,e))return;o.uniformMatrix2fv(this.addr,!1,e),At(t,e)}else{if(Et(t,n))return;cc.set(n),o.uniformMatrix2fv(this.addr,!1,cc),At(t,n)}}function Xm(o,e){const t=this.cache,n=e.elements;if(n===void 0){if(Et(t,e))return;o.uniformMatrix3fv(this.addr,!1,e),At(t,e)}else{if(Et(t,n))return;lc.set(n),o.uniformMatrix3fv(this.addr,!1,lc),At(t,n)}}function qm(o,e){const t=this.cache,n=e.elements;if(n===void 0){if(Et(t,e))return;o.uniformMatrix4fv(this.addr,!1,e),At(t,e)}else{if(Et(t,n))return;ac.set(n),o.uniformMatrix4fv(this.addr,!1,ac),At(t,n)}}function Ym(o,e){const t=this.cache;t[0]!==e&&(o.uniform1i(this.addr,e),t[0]=e)}function jm(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(o.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Et(t,e))return;o.uniform2iv(this.addr,e),At(t,e)}}function Km(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(o.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Et(t,e))return;o.uniform3iv(this.addr,e),At(t,e)}}function $m(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(o.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Et(t,e))return;o.uniform4iv(this.addr,e),At(t,e)}}function Zm(o,e){const t=this.cache;t[0]!==e&&(o.uniform1ui(this.addr,e),t[0]=e)}function Jm(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(o.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Et(t,e))return;o.uniform2uiv(this.addr,e),At(t,e)}}function Qm(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(o.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Et(t,e))return;o.uniform3uiv(this.addr,e),At(t,e)}}function eg(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(o.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Et(t,e))return;o.uniform4uiv(this.addr,e),At(t,e)}}function tg(o,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(o.uniform1i(this.addr,i),n[0]=i);let s;this.type===o.SAMPLER_2D_SHADOW?(sc.compareFunction=Ah,s=sc):s=kh,t.setTexture2D(e||s,i)}function ng(o,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(o.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||Gh,i)}function ig(o,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(o.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||Hh,i)}function sg(o,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(o.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||zh,i)}function rg(o){switch(o){case 5126:return zm;case 35664:return Gm;case 35665:return Hm;case 35666:return Vm;case 35674:return Wm;case 35675:return Xm;case 35676:return qm;case 5124:case 35670:return Ym;case 35667:case 35671:return jm;case 35668:case 35672:return Km;case 35669:case 35673:return $m;case 5125:return Zm;case 36294:return Jm;case 36295:return Qm;case 36296:return eg;case 35678:case 36198:case 36298:case 36306:case 35682:return tg;case 35679:case 36299:case 36307:return ng;case 35680:case 36300:case 36308:case 36293:return ig;case 36289:case 36303:case 36311:case 36292:return sg}}function og(o,e){o.uniform1fv(this.addr,e)}function ag(o,e){const t=hs(e,this.size,2);o.uniform2fv(this.addr,t)}function lg(o,e){const t=hs(e,this.size,3);o.uniform3fv(this.addr,t)}function cg(o,e){const t=hs(e,this.size,4);o.uniform4fv(this.addr,t)}function hg(o,e){const t=hs(e,this.size,4);o.uniformMatrix2fv(this.addr,!1,t)}function ug(o,e){const t=hs(e,this.size,9);o.uniformMatrix3fv(this.addr,!1,t)}function dg(o,e){const t=hs(e,this.size,16);o.uniformMatrix4fv(this.addr,!1,t)}function fg(o,e){o.uniform1iv(this.addr,e)}function pg(o,e){o.uniform2iv(this.addr,e)}function mg(o,e){o.uniform3iv(this.addr,e)}function gg(o,e){o.uniform4iv(this.addr,e)}function _g(o,e){o.uniform1uiv(this.addr,e)}function vg(o,e){o.uniform2uiv(this.addr,e)}function xg(o,e){o.uniform3uiv(this.addr,e)}function yg(o,e){o.uniform4uiv(this.addr,e)}function Mg(o,e,t){const n=this.cache,i=e.length,s=Yr(t,i);Et(n,s)||(o.uniform1iv(this.addr,s),At(n,s));for(let r=0;r!==i;++r)t.setTexture2D(e[r]||kh,s[r])}function Sg(o,e,t){const n=this.cache,i=e.length,s=Yr(t,i);Et(n,s)||(o.uniform1iv(this.addr,s),At(n,s));for(let r=0;r!==i;++r)t.setTexture3D(e[r]||Gh,s[r])}function wg(o,e,t){const n=this.cache,i=e.length,s=Yr(t,i);Et(n,s)||(o.uniform1iv(this.addr,s),At(n,s));for(let r=0;r!==i;++r)t.setTextureCube(e[r]||Hh,s[r])}function Tg(o,e,t){const n=this.cache,i=e.length,s=Yr(t,i);Et(n,s)||(o.uniform1iv(this.addr,s),At(n,s));for(let r=0;r!==i;++r)t.setTexture2DArray(e[r]||zh,s[r])}function bg(o){switch(o){case 5126:return og;case 35664:return ag;case 35665:return lg;case 35666:return cg;case 35674:return hg;case 35675:return ug;case 35676:return dg;case 5124:case 35670:return fg;case 35667:case 35671:return pg;case 35668:case 35672:return mg;case 35669:case 35673:return gg;case 5125:return _g;case 36294:return vg;case 36295:return xg;case 36296:return yg;case 35678:case 36198:case 36298:case 36306:case 35682:return Mg;case 35679:case 36299:case 36307:return Sg;case 35680:case 36300:case 36308:case 36293:return wg;case 36289:case 36303:case 36311:case 36292:return Tg}}class Eg{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=rg(t.type)}}class Ag{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=bg(t.type)}}class Cg{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let s=0,r=i.length;s!==r;++s){const a=i[s];a.setValue(e,t[a.id],n)}}}const bo=/(\w+)(\])?(\[|\.)?/g;function hc(o,e){o.seq.push(e),o.map[e.id]=e}function Rg(o,e,t){const n=o.name,i=n.length;for(bo.lastIndex=0;;){const s=bo.exec(n),r=bo.lastIndex;let a=s[1];const l=s[2]==="]",h=s[3];if(l&&(a=a|0),h===void 0||h==="["&&r+2===i){hc(t,h===void 0?new Eg(a,o,e):new Ag(a,o,e));break}else{let c=t.map[a];c===void 0&&(c=new Cg(a),hc(t,c)),t=c}}}class Ur{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const s=e.getActiveUniform(t,i),r=e.getUniformLocation(t,s.name);Rg(s,r,this)}}setValue(e,t,n,i){const s=this.map[t];s!==void 0&&s.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let s=0,r=t.length;s!==r;++s){const a=t[s],l=n[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,s=e.length;i!==s;++i){const r=e[i];r.id in t&&n.push(r)}return n}}function uc(o,e,t){const n=o.createShader(e);return o.shaderSource(n,t),o.compileShader(n),n}const Pg=37297;let Lg=0;function Dg(o,e){const t=o.split(`
`),n=[],i=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let r=i;r<s;r++){const a=r+1;n.push(`${a===e?">":" "} ${a}: ${t[r]}`)}return n.join(`
`)}const dc=new ke;function Ig(o){Xe._getMatrix(dc,Xe.workingColorSpace,o);const e=`mat3( ${dc.elements.map(t=>t.toFixed(4))} )`;switch(Xe.getTransfer(o)){case Xr:return[e,"LinearTransferOETF"];case it:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",o),[e,"LinearTransferOETF"]}}function fc(o,e,t){const n=o.getShaderParameter(e,o.COMPILE_STATUS),i=o.getShaderInfoLog(e).trim();if(n&&i==="")return"";const s=/ERROR: 0:(\d+)/.exec(i);if(s){const r=parseInt(s[1]);return t.toUpperCase()+`

`+i+`

`+Dg(o.getShaderSource(e),r)}else return i}function Ng(o,e){const t=Ig(e);return[`vec4 ${o}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function Ug(o,e){let t;switch(e){case ch:t="Linear";break;case hh:t="Reinhard";break;case uh:t="Cineon";break;case Ha:t="ACESFilmic";break;case dh:t="AgX";break;case fh:t="Neutral";break;case Fu:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+o+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const fr=new A;function Bg(){Xe.getLuminanceCoefficients(fr);const o=fr.x.toFixed(4),e=fr.y.toFixed(4),t=fr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${o}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Fg(o){return[o.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",o.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ls).join(`
`)}function Og(o){const e=[];for(const t in o){const n=o[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function kg(o,e){const t={},n=o.getProgramParameter(e,o.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const s=o.getActiveAttrib(e,i),r=s.name;let a=1;s.type===o.FLOAT_MAT2&&(a=2),s.type===o.FLOAT_MAT3&&(a=3),s.type===o.FLOAT_MAT4&&(a=4),t[r]={type:s.type,location:o.getAttribLocation(e,r),locationSize:a}}return t}function Ls(o){return o!==""}function pc(o,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return o.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function mc(o,e){return o.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const zg=/^[ \t]*#include +<([\w\d./]+)>/gm;function Pa(o){return o.replace(zg,Hg)}const Gg=new Map;function Hg(o,e){let t=Ge[e];if(t===void 0){const n=Gg.get(e);if(n!==void 0)t=Ge[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Pa(t)}const Vg=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function gc(o){return o.replace(Vg,Wg)}function Wg(o,e,t,n){let i="";for(let s=parseInt(e);s<parseInt(t);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function _c(o){let e=`precision ${o.precision} float;
	precision ${o.precision} int;
	precision ${o.precision} sampler2D;
	precision ${o.precision} samplerCube;
	precision ${o.precision} sampler3D;
	precision ${o.precision} sampler2DArray;
	precision ${o.precision} sampler2DShadow;
	precision ${o.precision} samplerCubeShadow;
	precision ${o.precision} sampler2DArrayShadow;
	precision ${o.precision} isampler2D;
	precision ${o.precision} isampler3D;
	precision ${o.precision} isamplerCube;
	precision ${o.precision} isampler2DArray;
	precision ${o.precision} usampler2D;
	precision ${o.precision} usampler3D;
	precision ${o.precision} usamplerCube;
	precision ${o.precision} usampler2DArray;
	`;return o.precision==="highp"?e+=`
#define HIGH_PRECISION`:o.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:o.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Xg(o){let e="SHADOWMAP_TYPE_BASIC";return o.shadowMapType===oh?e="SHADOWMAP_TYPE_PCF":o.shadowMapType===ah?e="SHADOWMAP_TYPE_PCF_SOFT":o.shadowMapType===Un&&(e="SHADOWMAP_TYPE_VSM"),e}function qg(o){let e="ENVMAP_TYPE_CUBE";if(o.envMap)switch(o.envMapMode){case Qi:case es:e="ENVMAP_TYPE_CUBE";break;case Wr:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Yg(o){let e="ENVMAP_MODE_REFLECTION";if(o.envMap)switch(o.envMapMode){case es:e="ENVMAP_MODE_REFRACTION";break}return e}function jg(o){let e="ENVMAP_BLENDING_NONE";if(o.envMap)switch(o.combine){case lh:e="ENVMAP_BLENDING_MULTIPLY";break;case Uu:e="ENVMAP_BLENDING_MIX";break;case Bu:e="ENVMAP_BLENDING_ADD";break}return e}function Kg(o){const e=o.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function $g(o,e,t,n){const i=o.getContext(),s=t.defines;let r=t.vertexShader,a=t.fragmentShader;const l=Xg(t),h=qg(t),u=Yg(t),c=jg(t),d=Kg(t),f=Fg(t),g=Og(s),_=i.createProgram();let m,p,x=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Ls).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Ls).join(`
`),p.length>0&&(p+=`
`)):(m=[_c(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ls).join(`
`),p=[_c(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",t.envMap?"#define "+c:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==oi?"#define TONE_MAPPING":"",t.toneMapping!==oi?Ge.tonemapping_pars_fragment:"",t.toneMapping!==oi?Ug("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ge.colorspace_pars_fragment,Ng("linearToOutputTexel",t.outputColorSpace),Bg(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Ls).join(`
`)),r=Pa(r),r=pc(r,t),r=mc(r,t),a=Pa(a),a=pc(a,t),a=mc(a,t),r=gc(r),a=gc(a),t.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",t.glslVersion===Rl?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Rl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const M=x+m+r,v=x+p+a,P=uc(i,i.VERTEX_SHADER,M),C=uc(i,i.FRAGMENT_SHADER,v);i.attachShader(_,P),i.attachShader(_,C),t.index0AttributeName!==void 0?i.bindAttribLocation(_,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(_,0,"position"),i.linkProgram(_);function E(R){if(o.debug.checkShaderErrors){const D=i.getProgramInfoLog(_).trim(),I=i.getShaderInfoLog(P).trim(),k=i.getShaderInfoLog(C).trim();let X=!0,q=!0;if(i.getProgramParameter(_,i.LINK_STATUS)===!1)if(X=!1,typeof o.debug.onShaderError=="function")o.debug.onShaderError(i,_,P,C);else{const J=fc(i,P,"vertex"),V=fc(i,C,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(_,i.VALIDATE_STATUS)+`

Material Name: `+R.name+`
Material Type: `+R.type+`

Program Info Log: `+D+`
`+J+`
`+V)}else D!==""?console.warn("THREE.WebGLProgram: Program Info Log:",D):(I===""||k==="")&&(q=!1);q&&(R.diagnostics={runnable:X,programLog:D,vertexShader:{log:I,prefix:m},fragmentShader:{log:k,prefix:p}})}i.deleteShader(P),i.deleteShader(C),L=new Ur(i,_),w=kg(i,_)}let L;this.getUniforms=function(){return L===void 0&&E(this),L};let w;this.getAttributes=function(){return w===void 0&&E(this),w};let S=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return S===!1&&(S=i.getProgramParameter(_,Pg)),S},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Lg++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=P,this.fragmentShader=C,this}let Zg=0;class Jg{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),s=this._getShaderStage(n),r=this._getShaderCacheForMaterial(e);return r.has(i)===!1&&(r.add(i),i.usedTimes++),r.has(s)===!1&&(r.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new Qg(e),t.set(e,n)),n}}class Qg{constructor(e){this.id=Zg++,this.code=e,this.usedTimes=0}}function e0(o,e,t,n,i,s,r){const a=new Ja,l=new Jg,h=new Set,u=[],c=i.logarithmicDepthBuffer,d=i.vertexTextures;let f=i.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(w){return h.add(w),w===0?"uv":`uv${w}`}function m(w,S,R,D,I){const k=D.fog,X=I.geometry,q=w.isMeshStandardMaterial?D.environment:null,J=(w.isMeshStandardMaterial?t:e).get(w.envMap||q),V=J&&J.mapping===Wr?J.image.height:null,ne=g[w.type];w.precision!==null&&(f=i.getMaxPrecision(w.precision),f!==w.precision&&console.warn("THREE.WebGLProgram.getParameters:",w.precision,"not supported, using",f,"instead."));const he=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,we=he!==void 0?he.length:0;let Be=0;X.morphAttributes.position!==void 0&&(Be=1),X.morphAttributes.normal!==void 0&&(Be=2),X.morphAttributes.color!==void 0&&(Be=3);let Ke,K,te,Se;if(ne){const nt=xn[ne];Ke=nt.vertexShader,K=nt.fragmentShader}else Ke=w.vertexShader,K=w.fragmentShader,l.update(w),te=l.getVertexShaderID(w),Se=l.getFragmentShaderID(w);const oe=o.getRenderTarget(),Te=o.state.buffers.depth.getReversed(),Me=I.isInstancedMesh===!0,Ne=I.isBatchedMesh===!0,tt=!!w.map,Ue=!!w.matcap,ct=!!J,F=!!w.aoMap,Nt=!!w.lightMap,Ve=!!w.bumpMap,Z=!!w.normalMap,$=!!w.displacementMap,_e=!!w.emissiveMap,fe=!!w.metalnessMap,b=!!w.roughnessMap,y=w.anisotropy>0,O=w.clearcoat>0,z=w.dispersion>0,W=w.iridescence>0,Y=w.sheen>0,ve=w.transmission>0,ee=y&&!!w.anisotropyMap,ue=O&&!!w.clearcoatMap,qe=O&&!!w.clearcoatNormalMap,ie=O&&!!w.clearcoatRoughnessMap,xe=W&&!!w.iridescenceMap,Pe=W&&!!w.iridescenceThicknessMap,Le=Y&&!!w.sheenColorMap,ye=Y&&!!w.sheenRoughnessMap,je=!!w.specularMap,ze=!!w.specularColorMap,ot=!!w.specularIntensityMap,N=ve&&!!w.transmissionMap,de=ve&&!!w.thicknessMap,j=!!w.gradientMap,Q=!!w.alphaMap,ge=w.alphaTest>0,pe=!!w.alphaHash,Fe=!!w.extensions;let pt=oi;w.toneMapped&&(oe===null||oe.isXRRenderTarget===!0)&&(pt=o.toneMapping);const Lt={shaderID:ne,shaderType:w.type,shaderName:w.name,vertexShader:Ke,fragmentShader:K,defines:w.defines,customVertexShaderID:te,customFragmentShaderID:Se,isRawShaderMaterial:w.isRawShaderMaterial===!0,glslVersion:w.glslVersion,precision:f,batching:Ne,batchingColor:Ne&&I._colorsTexture!==null,instancing:Me,instancingColor:Me&&I.instanceColor!==null,instancingMorph:Me&&I.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:oe===null?o.outputColorSpace:oe.isXRRenderTarget===!0?oe.texture.colorSpace:Gt,alphaToCoverage:!!w.alphaToCoverage,map:tt,matcap:Ue,envMap:ct,envMapMode:ct&&J.mapping,envMapCubeUVHeight:V,aoMap:F,lightMap:Nt,bumpMap:Ve,normalMap:Z,displacementMap:d&&$,emissiveMap:_e,normalMapObjectSpace:Z&&w.normalMapType===qu,normalMapTangentSpace:Z&&w.normalMapType===Eh,metalnessMap:fe,roughnessMap:b,anisotropy:y,anisotropyMap:ee,clearcoat:O,clearcoatMap:ue,clearcoatNormalMap:qe,clearcoatRoughnessMap:ie,dispersion:z,iridescence:W,iridescenceMap:xe,iridescenceThicknessMap:Pe,sheen:Y,sheenColorMap:Le,sheenRoughnessMap:ye,specularMap:je,specularColorMap:ze,specularIntensityMap:ot,transmission:ve,transmissionMap:N,thicknessMap:de,gradientMap:j,opaque:w.transparent===!1&&w.blending===ri&&w.alphaToCoverage===!1,alphaMap:Q,alphaTest:ge,alphaHash:pe,combine:w.combine,mapUv:tt&&_(w.map.channel),aoMapUv:F&&_(w.aoMap.channel),lightMapUv:Nt&&_(w.lightMap.channel),bumpMapUv:Ve&&_(w.bumpMap.channel),normalMapUv:Z&&_(w.normalMap.channel),displacementMapUv:$&&_(w.displacementMap.channel),emissiveMapUv:_e&&_(w.emissiveMap.channel),metalnessMapUv:fe&&_(w.metalnessMap.channel),roughnessMapUv:b&&_(w.roughnessMap.channel),anisotropyMapUv:ee&&_(w.anisotropyMap.channel),clearcoatMapUv:ue&&_(w.clearcoatMap.channel),clearcoatNormalMapUv:qe&&_(w.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ie&&_(w.clearcoatRoughnessMap.channel),iridescenceMapUv:xe&&_(w.iridescenceMap.channel),iridescenceThicknessMapUv:Pe&&_(w.iridescenceThicknessMap.channel),sheenColorMapUv:Le&&_(w.sheenColorMap.channel),sheenRoughnessMapUv:ye&&_(w.sheenRoughnessMap.channel),specularMapUv:je&&_(w.specularMap.channel),specularColorMapUv:ze&&_(w.specularColorMap.channel),specularIntensityMapUv:ot&&_(w.specularIntensityMap.channel),transmissionMapUv:N&&_(w.transmissionMap.channel),thicknessMapUv:de&&_(w.thicknessMap.channel),alphaMapUv:Q&&_(w.alphaMap.channel),vertexTangents:!!X.attributes.tangent&&(Z||y),vertexColors:w.vertexColors,vertexAlphas:w.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,pointsUvs:I.isPoints===!0&&!!X.attributes.uv&&(tt||Q),fog:!!k,useFog:w.fog===!0,fogExp2:!!k&&k.isFogExp2,flatShading:w.flatShading===!0,sizeAttenuation:w.sizeAttenuation===!0,logarithmicDepthBuffer:c,reverseDepthBuffer:Te,skinning:I.isSkinnedMesh===!0,morphTargets:X.morphAttributes.position!==void 0,morphNormals:X.morphAttributes.normal!==void 0,morphColors:X.morphAttributes.color!==void 0,morphTargetsCount:we,morphTextureStride:Be,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:w.dithering,shadowMapEnabled:o.shadowMap.enabled&&R.length>0,shadowMapType:o.shadowMap.type,toneMapping:pt,decodeVideoTexture:tt&&w.map.isVideoTexture===!0&&Xe.getTransfer(w.map.colorSpace)===it,decodeVideoTextureEmissive:_e&&w.emissiveMap.isVideoTexture===!0&&Xe.getTransfer(w.emissiveMap.colorSpace)===it,premultipliedAlpha:w.premultipliedAlpha,doubleSided:w.side===vt,flipSided:w.side===kt,useDepthPacking:w.depthPacking>=0,depthPacking:w.depthPacking||0,index0AttributeName:w.index0AttributeName,extensionClipCullDistance:Fe&&w.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Fe&&w.extensions.multiDraw===!0||Ne)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:w.customProgramCacheKey()};return Lt.vertexUv1s=h.has(1),Lt.vertexUv2s=h.has(2),Lt.vertexUv3s=h.has(3),h.clear(),Lt}function p(w){const S=[];if(w.shaderID?S.push(w.shaderID):(S.push(w.customVertexShaderID),S.push(w.customFragmentShaderID)),w.defines!==void 0)for(const R in w.defines)S.push(R),S.push(w.defines[R]);return w.isRawShaderMaterial===!1&&(x(S,w),M(S,w),S.push(o.outputColorSpace)),S.push(w.customProgramCacheKey),S.join()}function x(w,S){w.push(S.precision),w.push(S.outputColorSpace),w.push(S.envMapMode),w.push(S.envMapCubeUVHeight),w.push(S.mapUv),w.push(S.alphaMapUv),w.push(S.lightMapUv),w.push(S.aoMapUv),w.push(S.bumpMapUv),w.push(S.normalMapUv),w.push(S.displacementMapUv),w.push(S.emissiveMapUv),w.push(S.metalnessMapUv),w.push(S.roughnessMapUv),w.push(S.anisotropyMapUv),w.push(S.clearcoatMapUv),w.push(S.clearcoatNormalMapUv),w.push(S.clearcoatRoughnessMapUv),w.push(S.iridescenceMapUv),w.push(S.iridescenceThicknessMapUv),w.push(S.sheenColorMapUv),w.push(S.sheenRoughnessMapUv),w.push(S.specularMapUv),w.push(S.specularColorMapUv),w.push(S.specularIntensityMapUv),w.push(S.transmissionMapUv),w.push(S.thicknessMapUv),w.push(S.combine),w.push(S.fogExp2),w.push(S.sizeAttenuation),w.push(S.morphTargetsCount),w.push(S.morphAttributeCount),w.push(S.numDirLights),w.push(S.numPointLights),w.push(S.numSpotLights),w.push(S.numSpotLightMaps),w.push(S.numHemiLights),w.push(S.numRectAreaLights),w.push(S.numDirLightShadows),w.push(S.numPointLightShadows),w.push(S.numSpotLightShadows),w.push(S.numSpotLightShadowsWithMaps),w.push(S.numLightProbes),w.push(S.shadowMapType),w.push(S.toneMapping),w.push(S.numClippingPlanes),w.push(S.numClipIntersection),w.push(S.depthPacking)}function M(w,S){a.disableAll(),S.supportsVertexTextures&&a.enable(0),S.instancing&&a.enable(1),S.instancingColor&&a.enable(2),S.instancingMorph&&a.enable(3),S.matcap&&a.enable(4),S.envMap&&a.enable(5),S.normalMapObjectSpace&&a.enable(6),S.normalMapTangentSpace&&a.enable(7),S.clearcoat&&a.enable(8),S.iridescence&&a.enable(9),S.alphaTest&&a.enable(10),S.vertexColors&&a.enable(11),S.vertexAlphas&&a.enable(12),S.vertexUv1s&&a.enable(13),S.vertexUv2s&&a.enable(14),S.vertexUv3s&&a.enable(15),S.vertexTangents&&a.enable(16),S.anisotropy&&a.enable(17),S.alphaHash&&a.enable(18),S.batching&&a.enable(19),S.dispersion&&a.enable(20),S.batchingColor&&a.enable(21),w.push(a.mask),a.disableAll(),S.fog&&a.enable(0),S.useFog&&a.enable(1),S.flatShading&&a.enable(2),S.logarithmicDepthBuffer&&a.enable(3),S.reverseDepthBuffer&&a.enable(4),S.skinning&&a.enable(5),S.morphTargets&&a.enable(6),S.morphNormals&&a.enable(7),S.morphColors&&a.enable(8),S.premultipliedAlpha&&a.enable(9),S.shadowMapEnabled&&a.enable(10),S.doubleSided&&a.enable(11),S.flipSided&&a.enable(12),S.useDepthPacking&&a.enable(13),S.dithering&&a.enable(14),S.transmission&&a.enable(15),S.sheen&&a.enable(16),S.opaque&&a.enable(17),S.pointsUvs&&a.enable(18),S.decodeVideoTexture&&a.enable(19),S.decodeVideoTextureEmissive&&a.enable(20),S.alphaToCoverage&&a.enable(21),w.push(a.mask)}function v(w){const S=g[w.type];let R;if(S){const D=xn[S];R=Gs.clone(D.uniforms)}else R=w.uniforms;return R}function P(w,S){let R;for(let D=0,I=u.length;D<I;D++){const k=u[D];if(k.cacheKey===S){R=k,++R.usedTimes;break}}return R===void 0&&(R=new $g(o,S,w,s),u.push(R)),R}function C(w){if(--w.usedTimes===0){const S=u.indexOf(w);u[S]=u[u.length-1],u.pop(),w.destroy()}}function E(w){l.remove(w)}function L(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:v,acquireProgram:P,releaseProgram:C,releaseShaderCache:E,programs:u,dispose:L}}function t0(){let o=new WeakMap;function e(r){return o.has(r)}function t(r){let a=o.get(r);return a===void 0&&(a={},o.set(r,a)),a}function n(r){o.delete(r)}function i(r,a,l){o.get(r)[a]=l}function s(){o=new WeakMap}return{has:e,get:t,remove:n,update:i,dispose:s}}function n0(o,e){return o.groupOrder!==e.groupOrder?o.groupOrder-e.groupOrder:o.renderOrder!==e.renderOrder?o.renderOrder-e.renderOrder:o.material.id!==e.material.id?o.material.id-e.material.id:o.z!==e.z?o.z-e.z:o.id-e.id}function vc(o,e){return o.groupOrder!==e.groupOrder?o.groupOrder-e.groupOrder:o.renderOrder!==e.renderOrder?o.renderOrder-e.renderOrder:o.z!==e.z?e.z-o.z:o.id-e.id}function xc(){const o=[];let e=0;const t=[],n=[],i=[];function s(){e=0,t.length=0,n.length=0,i.length=0}function r(c,d,f,g,_,m){let p=o[e];return p===void 0?(p={id:c.id,object:c,geometry:d,material:f,groupOrder:g,renderOrder:c.renderOrder,z:_,group:m},o[e]=p):(p.id=c.id,p.object=c,p.geometry=d,p.material=f,p.groupOrder=g,p.renderOrder=c.renderOrder,p.z=_,p.group=m),e++,p}function a(c,d,f,g,_,m){const p=r(c,d,f,g,_,m);f.transmission>0?n.push(p):f.transparent===!0?i.push(p):t.push(p)}function l(c,d,f,g,_,m){const p=r(c,d,f,g,_,m);f.transmission>0?n.unshift(p):f.transparent===!0?i.unshift(p):t.unshift(p)}function h(c,d){t.length>1&&t.sort(c||n0),n.length>1&&n.sort(d||vc),i.length>1&&i.sort(d||vc)}function u(){for(let c=e,d=o.length;c<d;c++){const f=o[c];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:t,transmissive:n,transparent:i,init:s,push:a,unshift:l,finish:u,sort:h}}function i0(){let o=new WeakMap;function e(n,i){const s=o.get(n);let r;return s===void 0?(r=new xc,o.set(n,[r])):i>=s.length?(r=new xc,s.push(r)):r=s[i],r}function t(){o=new WeakMap}return{get:e,dispose:t}}function s0(){const o={};return{get:function(e){if(o[e.id]!==void 0)return o[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new A,color:new le};break;case"SpotLight":t={position:new A,direction:new A,color:new le,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new A,color:new le,distance:0,decay:0};break;case"HemisphereLight":t={direction:new A,skyColor:new le,groundColor:new le};break;case"RectAreaLight":t={color:new le,position:new A,halfWidth:new A,halfHeight:new A};break}return o[e.id]=t,t}}}function r0(){const o={};return{get:function(e){if(o[e.id]!==void 0)return o[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new se};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new se};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new se,shadowCameraNear:1,shadowCameraFar:1e3};break}return o[e.id]=t,t}}}let o0=0;function a0(o,e){return(e.castShadow?2:0)-(o.castShadow?2:0)+(e.map?1:0)-(o.map?1:0)}function l0(o){const e=new s0,t=r0(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)n.probe.push(new A);const i=new A,s=new De,r=new De;function a(h){let u=0,c=0,d=0;for(let w=0;w<9;w++)n.probe[w].set(0,0,0);let f=0,g=0,_=0,m=0,p=0,x=0,M=0,v=0,P=0,C=0,E=0;h.sort(a0);for(let w=0,S=h.length;w<S;w++){const R=h[w],D=R.color,I=R.intensity,k=R.distance,X=R.shadow&&R.shadow.map?R.shadow.map.texture:null;if(R.isAmbientLight)u+=D.r*I,c+=D.g*I,d+=D.b*I;else if(R.isLightProbe){for(let q=0;q<9;q++)n.probe[q].addScaledVector(R.sh.coefficients[q],I);E++}else if(R.isDirectionalLight){const q=e.get(R);if(q.color.copy(R.color).multiplyScalar(R.intensity),R.castShadow){const J=R.shadow,V=t.get(R);V.shadowIntensity=J.intensity,V.shadowBias=J.bias,V.shadowNormalBias=J.normalBias,V.shadowRadius=J.radius,V.shadowMapSize=J.mapSize,n.directionalShadow[f]=V,n.directionalShadowMap[f]=X,n.directionalShadowMatrix[f]=R.shadow.matrix,x++}n.directional[f]=q,f++}else if(R.isSpotLight){const q=e.get(R);q.position.setFromMatrixPosition(R.matrixWorld),q.color.copy(D).multiplyScalar(I),q.distance=k,q.coneCos=Math.cos(R.angle),q.penumbraCos=Math.cos(R.angle*(1-R.penumbra)),q.decay=R.decay,n.spot[_]=q;const J=R.shadow;if(R.map&&(n.spotLightMap[P]=R.map,P++,J.updateMatrices(R),R.castShadow&&C++),n.spotLightMatrix[_]=J.matrix,R.castShadow){const V=t.get(R);V.shadowIntensity=J.intensity,V.shadowBias=J.bias,V.shadowNormalBias=J.normalBias,V.shadowRadius=J.radius,V.shadowMapSize=J.mapSize,n.spotShadow[_]=V,n.spotShadowMap[_]=X,v++}_++}else if(R.isRectAreaLight){const q=e.get(R);q.color.copy(D).multiplyScalar(I),q.halfWidth.set(R.width*.5,0,0),q.halfHeight.set(0,R.height*.5,0),n.rectArea[m]=q,m++}else if(R.isPointLight){const q=e.get(R);if(q.color.copy(R.color).multiplyScalar(R.intensity),q.distance=R.distance,q.decay=R.decay,R.castShadow){const J=R.shadow,V=t.get(R);V.shadowIntensity=J.intensity,V.shadowBias=J.bias,V.shadowNormalBias=J.normalBias,V.shadowRadius=J.radius,V.shadowMapSize=J.mapSize,V.shadowCameraNear=J.camera.near,V.shadowCameraFar=J.camera.far,n.pointShadow[g]=V,n.pointShadowMap[g]=X,n.pointShadowMatrix[g]=R.shadow.matrix,M++}n.point[g]=q,g++}else if(R.isHemisphereLight){const q=e.get(R);q.skyColor.copy(R.color).multiplyScalar(I),q.groundColor.copy(R.groundColor).multiplyScalar(I),n.hemi[p]=q,p++}}m>0&&(o.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ce.LTC_FLOAT_1,n.rectAreaLTC2=ce.LTC_FLOAT_2):(n.rectAreaLTC1=ce.LTC_HALF_1,n.rectAreaLTC2=ce.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=c,n.ambient[2]=d;const L=n.hash;(L.directionalLength!==f||L.pointLength!==g||L.spotLength!==_||L.rectAreaLength!==m||L.hemiLength!==p||L.numDirectionalShadows!==x||L.numPointShadows!==M||L.numSpotShadows!==v||L.numSpotMaps!==P||L.numLightProbes!==E)&&(n.directional.length=f,n.spot.length=_,n.rectArea.length=m,n.point.length=g,n.hemi.length=p,n.directionalShadow.length=x,n.directionalShadowMap.length=x,n.pointShadow.length=M,n.pointShadowMap.length=M,n.spotShadow.length=v,n.spotShadowMap.length=v,n.directionalShadowMatrix.length=x,n.pointShadowMatrix.length=M,n.spotLightMatrix.length=v+P-C,n.spotLightMap.length=P,n.numSpotLightShadowsWithMaps=C,n.numLightProbes=E,L.directionalLength=f,L.pointLength=g,L.spotLength=_,L.rectAreaLength=m,L.hemiLength=p,L.numDirectionalShadows=x,L.numPointShadows=M,L.numSpotShadows=v,L.numSpotMaps=P,L.numLightProbes=E,n.version=o0++)}function l(h,u){let c=0,d=0,f=0,g=0,_=0;const m=u.matrixWorldInverse;for(let p=0,x=h.length;p<x;p++){const M=h[p];if(M.isDirectionalLight){const v=n.directional[c];v.direction.setFromMatrixPosition(M.matrixWorld),i.setFromMatrixPosition(M.target.matrixWorld),v.direction.sub(i),v.direction.transformDirection(m),c++}else if(M.isSpotLight){const v=n.spot[f];v.position.setFromMatrixPosition(M.matrixWorld),v.position.applyMatrix4(m),v.direction.setFromMatrixPosition(M.matrixWorld),i.setFromMatrixPosition(M.target.matrixWorld),v.direction.sub(i),v.direction.transformDirection(m),f++}else if(M.isRectAreaLight){const v=n.rectArea[g];v.position.setFromMatrixPosition(M.matrixWorld),v.position.applyMatrix4(m),r.identity(),s.copy(M.matrixWorld),s.premultiply(m),r.extractRotation(s),v.halfWidth.set(M.width*.5,0,0),v.halfHeight.set(0,M.height*.5,0),v.halfWidth.applyMatrix4(r),v.halfHeight.applyMatrix4(r),g++}else if(M.isPointLight){const v=n.point[d];v.position.setFromMatrixPosition(M.matrixWorld),v.position.applyMatrix4(m),d++}else if(M.isHemisphereLight){const v=n.hemi[_];v.direction.setFromMatrixPosition(M.matrixWorld),v.direction.transformDirection(m),_++}}}return{setup:a,setupView:l,state:n}}function yc(o){const e=new l0(o),t=[],n=[];function i(u){h.camera=u,t.length=0,n.length=0}function s(u){t.push(u)}function r(u){n.push(u)}function a(){e.setup(t)}function l(u){e.setupView(t,u)}const h={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:i,state:h,setupLights:a,setupLightsView:l,pushLight:s,pushShadow:r}}function c0(o){let e=new WeakMap;function t(i,s=0){const r=e.get(i);let a;return r===void 0?(a=new yc(o),e.set(i,[a])):s>=r.length?(a=new yc(o),r.push(a)):a=r[s],a}function n(){e=new WeakMap}return{get:t,dispose:n}}class h0 extends pn{static get type(){return"MeshDepthMaterial"}constructor(e){super(),this.isMeshDepthMaterial=!0,this.depthPacking=Wu,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class u0 extends pn{static get type(){return"MeshDistanceMaterial"}constructor(e){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const d0=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,f0=`uniform sampler2D shadow_pass;
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
}`;function p0(o,e,t){let n=new Qa;const i=new se,s=new se,r=new Ze,a=new h0({depthPacking:Xu}),l=new u0,h={},u=t.maxTextureSize,c={[Hn]:kt,[kt]:Hn,[vt]:vt},d=new wt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new se},radius:{value:4}},vertexShader:d0,fragmentShader:f0}),f=d.clone();f.defines.HORIZONTAL_PASS=1;const g=new xt;g.setAttribute("position",new bt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new Re(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=oh;let p=this.type;this.render=function(C,E,L){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||C.length===0)return;const w=o.getRenderTarget(),S=o.getActiveCubeFace(),R=o.getActiveMipmapLevel(),D=o.state;D.setBlending(kn),D.buffers.color.setClear(1,1,1,1),D.buffers.depth.setTest(!0),D.setScissorTest(!1);const I=p!==Un&&this.type===Un,k=p===Un&&this.type!==Un;for(let X=0,q=C.length;X<q;X++){const J=C[X],V=J.shadow;if(V===void 0){console.warn("THREE.WebGLShadowMap:",J,"has no shadow.");continue}if(V.autoUpdate===!1&&V.needsUpdate===!1)continue;i.copy(V.mapSize);const ne=V.getFrameExtents();if(i.multiply(ne),s.copy(V.mapSize),(i.x>u||i.y>u)&&(i.x>u&&(s.x=Math.floor(u/ne.x),i.x=s.x*ne.x,V.mapSize.x=s.x),i.y>u&&(s.y=Math.floor(u/ne.y),i.y=s.y*ne.y,V.mapSize.y=s.y)),V.map===null||I===!0||k===!0){const we=this.type!==Un?{minFilter:zt,magFilter:zt}:{};V.map!==null&&V.map.dispose(),V.map=new nn(i.x,i.y,we),V.map.texture.name=J.name+".shadowMap",V.camera.updateProjectionMatrix()}o.setRenderTarget(V.map),o.clear();const he=V.getViewportCount();for(let we=0;we<he;we++){const Be=V.getViewport(we);r.set(s.x*Be.x,s.y*Be.y,s.x*Be.z,s.y*Be.w),D.viewport(r),V.updateMatrices(J,we),n=V.getFrustum(),v(E,L,V.camera,J,this.type)}V.isPointLightShadow!==!0&&this.type===Un&&x(V,L),V.needsUpdate=!1}p=this.type,m.needsUpdate=!1,o.setRenderTarget(w,S,R)};function x(C,E){const L=e.update(_);d.defines.VSM_SAMPLES!==C.blurSamples&&(d.defines.VSM_SAMPLES=C.blurSamples,f.defines.VSM_SAMPLES=C.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),C.mapPass===null&&(C.mapPass=new nn(i.x,i.y)),d.uniforms.shadow_pass.value=C.map.texture,d.uniforms.resolution.value=C.mapSize,d.uniforms.radius.value=C.radius,o.setRenderTarget(C.mapPass),o.clear(),o.renderBufferDirect(E,null,L,d,_,null),f.uniforms.shadow_pass.value=C.mapPass.texture,f.uniforms.resolution.value=C.mapSize,f.uniforms.radius.value=C.radius,o.setRenderTarget(C.map),o.clear(),o.renderBufferDirect(E,null,L,f,_,null)}function M(C,E,L,w){let S=null;const R=L.isPointLight===!0?C.customDistanceMaterial:C.customDepthMaterial;if(R!==void 0)S=R;else if(S=L.isPointLight===!0?l:a,o.localClippingEnabled&&E.clipShadows===!0&&Array.isArray(E.clippingPlanes)&&E.clippingPlanes.length!==0||E.displacementMap&&E.displacementScale!==0||E.alphaMap&&E.alphaTest>0||E.map&&E.alphaTest>0){const D=S.uuid,I=E.uuid;let k=h[D];k===void 0&&(k={},h[D]=k);let X=k[I];X===void 0&&(X=S.clone(),k[I]=X,E.addEventListener("dispose",P)),S=X}if(S.visible=E.visible,S.wireframe=E.wireframe,w===Un?S.side=E.shadowSide!==null?E.shadowSide:E.side:S.side=E.shadowSide!==null?E.shadowSide:c[E.side],S.alphaMap=E.alphaMap,S.alphaTest=E.alphaTest,S.map=E.map,S.clipShadows=E.clipShadows,S.clippingPlanes=E.clippingPlanes,S.clipIntersection=E.clipIntersection,S.displacementMap=E.displacementMap,S.displacementScale=E.displacementScale,S.displacementBias=E.displacementBias,S.wireframeLinewidth=E.wireframeLinewidth,S.linewidth=E.linewidth,L.isPointLight===!0&&S.isMeshDistanceMaterial===!0){const D=o.properties.get(S);D.light=L}return S}function v(C,E,L,w,S){if(C.visible===!1)return;if(C.layers.test(E.layers)&&(C.isMesh||C.isLine||C.isPoints)&&(C.castShadow||C.receiveShadow&&S===Un)&&(!C.frustumCulled||n.intersectsObject(C))){C.modelViewMatrix.multiplyMatrices(L.matrixWorldInverse,C.matrixWorld);const I=e.update(C),k=C.material;if(Array.isArray(k)){const X=I.groups;for(let q=0,J=X.length;q<J;q++){const V=X[q],ne=k[V.materialIndex];if(ne&&ne.visible){const he=M(C,ne,w,S);C.onBeforeShadow(o,C,E,L,I,he,V),o.renderBufferDirect(L,null,I,he,C,V),C.onAfterShadow(o,C,E,L,I,he,V)}}}else if(k.visible){const X=M(C,k,w,S);C.onBeforeShadow(o,C,E,L,I,X,null),o.renderBufferDirect(L,null,I,X,C,null),C.onAfterShadow(o,C,E,L,I,X,null)}}const D=C.children;for(let I=0,k=D.length;I<k;I++)v(D[I],E,L,w,S)}function P(C){C.target.removeEventListener("dispose",P);for(const L in h){const w=h[L],S=C.target.uuid;S in w&&(w[S].dispose(),delete w[S])}}}const m0={[Yo]:jo,[Ko]:Jo,[$o]:Qo,[Ji]:Zo,[jo]:Yo,[Jo]:Ko,[Qo]:$o,[Zo]:Ji};function g0(o,e){function t(){let N=!1;const de=new Ze;let j=null;const Q=new Ze(0,0,0,0);return{setMask:function(ge){j!==ge&&!N&&(o.colorMask(ge,ge,ge,ge),j=ge)},setLocked:function(ge){N=ge},setClear:function(ge,pe,Fe,pt,Lt){Lt===!0&&(ge*=pt,pe*=pt,Fe*=pt),de.set(ge,pe,Fe,pt),Q.equals(de)===!1&&(o.clearColor(ge,pe,Fe,pt),Q.copy(de))},reset:function(){N=!1,j=null,Q.set(-1,0,0,0)}}}function n(){let N=!1,de=!1,j=null,Q=null,ge=null;return{setReversed:function(pe){if(de!==pe){const Fe=e.get("EXT_clip_control");de?Fe.clipControlEXT(Fe.LOWER_LEFT_EXT,Fe.ZERO_TO_ONE_EXT):Fe.clipControlEXT(Fe.LOWER_LEFT_EXT,Fe.NEGATIVE_ONE_TO_ONE_EXT);const pt=ge;ge=null,this.setClear(pt)}de=pe},getReversed:function(){return de},setTest:function(pe){pe?oe(o.DEPTH_TEST):Te(o.DEPTH_TEST)},setMask:function(pe){j!==pe&&!N&&(o.depthMask(pe),j=pe)},setFunc:function(pe){if(de&&(pe=m0[pe]),Q!==pe){switch(pe){case Yo:o.depthFunc(o.NEVER);break;case jo:o.depthFunc(o.ALWAYS);break;case Ko:o.depthFunc(o.LESS);break;case Ji:o.depthFunc(o.LEQUAL);break;case $o:o.depthFunc(o.EQUAL);break;case Zo:o.depthFunc(o.GEQUAL);break;case Jo:o.depthFunc(o.GREATER);break;case Qo:o.depthFunc(o.NOTEQUAL);break;default:o.depthFunc(o.LEQUAL)}Q=pe}},setLocked:function(pe){N=pe},setClear:function(pe){ge!==pe&&(de&&(pe=1-pe),o.clearDepth(pe),ge=pe)},reset:function(){N=!1,j=null,Q=null,ge=null,de=!1}}}function i(){let N=!1,de=null,j=null,Q=null,ge=null,pe=null,Fe=null,pt=null,Lt=null;return{setTest:function(nt){N||(nt?oe(o.STENCIL_TEST):Te(o.STENCIL_TEST))},setMask:function(nt){de!==nt&&!N&&(o.stencilMask(nt),de=nt)},setFunc:function(nt,on,En){(j!==nt||Q!==on||ge!==En)&&(o.stencilFunc(nt,on,En),j=nt,Q=on,ge=En)},setOp:function(nt,on,En){(pe!==nt||Fe!==on||pt!==En)&&(o.stencilOp(nt,on,En),pe=nt,Fe=on,pt=En)},setLocked:function(nt){N=nt},setClear:function(nt){Lt!==nt&&(o.clearStencil(nt),Lt=nt)},reset:function(){N=!1,de=null,j=null,Q=null,ge=null,pe=null,Fe=null,pt=null,Lt=null}}}const s=new t,r=new n,a=new i,l=new WeakMap,h=new WeakMap;let u={},c={},d=new WeakMap,f=[],g=null,_=!1,m=null,p=null,x=null,M=null,v=null,P=null,C=null,E=new le(0,0,0),L=0,w=!1,S=null,R=null,D=null,I=null,k=null;const X=o.getParameter(o.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let q=!1,J=0;const V=o.getParameter(o.VERSION);V.indexOf("WebGL")!==-1?(J=parseFloat(/^WebGL (\d)/.exec(V)[1]),q=J>=1):V.indexOf("OpenGL ES")!==-1&&(J=parseFloat(/^OpenGL ES (\d)/.exec(V)[1]),q=J>=2);let ne=null,he={};const we=o.getParameter(o.SCISSOR_BOX),Be=o.getParameter(o.VIEWPORT),Ke=new Ze().fromArray(we),K=new Ze().fromArray(Be);function te(N,de,j,Q){const ge=new Uint8Array(4),pe=o.createTexture();o.bindTexture(N,pe),o.texParameteri(N,o.TEXTURE_MIN_FILTER,o.NEAREST),o.texParameteri(N,o.TEXTURE_MAG_FILTER,o.NEAREST);for(let Fe=0;Fe<j;Fe++)N===o.TEXTURE_3D||N===o.TEXTURE_2D_ARRAY?o.texImage3D(de,0,o.RGBA,1,1,Q,0,o.RGBA,o.UNSIGNED_BYTE,ge):o.texImage2D(de+Fe,0,o.RGBA,1,1,0,o.RGBA,o.UNSIGNED_BYTE,ge);return pe}const Se={};Se[o.TEXTURE_2D]=te(o.TEXTURE_2D,o.TEXTURE_2D,1),Se[o.TEXTURE_CUBE_MAP]=te(o.TEXTURE_CUBE_MAP,o.TEXTURE_CUBE_MAP_POSITIVE_X,6),Se[o.TEXTURE_2D_ARRAY]=te(o.TEXTURE_2D_ARRAY,o.TEXTURE_2D_ARRAY,1,1),Se[o.TEXTURE_3D]=te(o.TEXTURE_3D,o.TEXTURE_3D,1,1),s.setClear(0,0,0,1),r.setClear(1),a.setClear(0),oe(o.DEPTH_TEST),r.setFunc(Ji),Ve(!1),Z(Tl),oe(o.CULL_FACE),F(kn);function oe(N){u[N]!==!0&&(o.enable(N),u[N]=!0)}function Te(N){u[N]!==!1&&(o.disable(N),u[N]=!1)}function Me(N,de){return c[N]!==de?(o.bindFramebuffer(N,de),c[N]=de,N===o.DRAW_FRAMEBUFFER&&(c[o.FRAMEBUFFER]=de),N===o.FRAMEBUFFER&&(c[o.DRAW_FRAMEBUFFER]=de),!0):!1}function Ne(N,de){let j=f,Q=!1;if(N){j=d.get(de),j===void 0&&(j=[],d.set(de,j));const ge=N.textures;if(j.length!==ge.length||j[0]!==o.COLOR_ATTACHMENT0){for(let pe=0,Fe=ge.length;pe<Fe;pe++)j[pe]=o.COLOR_ATTACHMENT0+pe;j.length=ge.length,Q=!0}}else j[0]!==o.BACK&&(j[0]=o.BACK,Q=!0);Q&&o.drawBuffers(j)}function tt(N){return g!==N?(o.useProgram(N),g=N,!0):!1}const Ue={[vi]:o.FUNC_ADD,[vu]:o.FUNC_SUBTRACT,[xu]:o.FUNC_REVERSE_SUBTRACT};Ue[yu]=o.MIN,Ue[Mu]=o.MAX;const ct={[Su]:o.ZERO,[wu]:o.ONE,[Tu]:o.SRC_COLOR,[Xo]:o.SRC_ALPHA,[Pu]:o.SRC_ALPHA_SATURATE,[Cu]:o.DST_COLOR,[Eu]:o.DST_ALPHA,[bu]:o.ONE_MINUS_SRC_COLOR,[qo]:o.ONE_MINUS_SRC_ALPHA,[Ru]:o.ONE_MINUS_DST_COLOR,[Au]:o.ONE_MINUS_DST_ALPHA,[Lu]:o.CONSTANT_COLOR,[Du]:o.ONE_MINUS_CONSTANT_COLOR,[Iu]:o.CONSTANT_ALPHA,[Nu]:o.ONE_MINUS_CONSTANT_ALPHA};function F(N,de,j,Q,ge,pe,Fe,pt,Lt,nt){if(N===kn){_===!0&&(Te(o.BLEND),_=!1);return}if(_===!1&&(oe(o.BLEND),_=!0),N!==_u){if(N!==m||nt!==w){if((p!==vi||v!==vi)&&(o.blendEquation(o.FUNC_ADD),p=vi,v=vi),nt)switch(N){case ri:o.blendFuncSeparate(o.ONE,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case Br:o.blendFunc(o.ONE,o.ONE);break;case bl:o.blendFuncSeparate(o.ZERO,o.ONE_MINUS_SRC_COLOR,o.ZERO,o.ONE);break;case El:o.blendFuncSeparate(o.ZERO,o.SRC_COLOR,o.ZERO,o.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}else switch(N){case ri:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case Br:o.blendFunc(o.SRC_ALPHA,o.ONE);break;case bl:o.blendFuncSeparate(o.ZERO,o.ONE_MINUS_SRC_COLOR,o.ZERO,o.ONE);break;case El:o.blendFunc(o.ZERO,o.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}x=null,M=null,P=null,C=null,E.set(0,0,0),L=0,m=N,w=nt}return}ge=ge||de,pe=pe||j,Fe=Fe||Q,(de!==p||ge!==v)&&(o.blendEquationSeparate(Ue[de],Ue[ge]),p=de,v=ge),(j!==x||Q!==M||pe!==P||Fe!==C)&&(o.blendFuncSeparate(ct[j],ct[Q],ct[pe],ct[Fe]),x=j,M=Q,P=pe,C=Fe),(pt.equals(E)===!1||Lt!==L)&&(o.blendColor(pt.r,pt.g,pt.b,Lt),E.copy(pt),L=Lt),m=N,w=!1}function Nt(N,de){N.side===vt?Te(o.CULL_FACE):oe(o.CULL_FACE);let j=N.side===kt;de&&(j=!j),Ve(j),N.blending===ri&&N.transparent===!1?F(kn):F(N.blending,N.blendEquation,N.blendSrc,N.blendDst,N.blendEquationAlpha,N.blendSrcAlpha,N.blendDstAlpha,N.blendColor,N.blendAlpha,N.premultipliedAlpha),r.setFunc(N.depthFunc),r.setTest(N.depthTest),r.setMask(N.depthWrite),s.setMask(N.colorWrite);const Q=N.stencilWrite;a.setTest(Q),Q&&(a.setMask(N.stencilWriteMask),a.setFunc(N.stencilFunc,N.stencilRef,N.stencilFuncMask),a.setOp(N.stencilFail,N.stencilZFail,N.stencilZPass)),_e(N.polygonOffset,N.polygonOffsetFactor,N.polygonOffsetUnits),N.alphaToCoverage===!0?oe(o.SAMPLE_ALPHA_TO_COVERAGE):Te(o.SAMPLE_ALPHA_TO_COVERAGE)}function Ve(N){S!==N&&(N?o.frontFace(o.CW):o.frontFace(o.CCW),S=N)}function Z(N){N!==mu?(oe(o.CULL_FACE),N!==R&&(N===Tl?o.cullFace(o.BACK):N===gu?o.cullFace(o.FRONT):o.cullFace(o.FRONT_AND_BACK))):Te(o.CULL_FACE),R=N}function $(N){N!==D&&(q&&o.lineWidth(N),D=N)}function _e(N,de,j){N?(oe(o.POLYGON_OFFSET_FILL),(I!==de||k!==j)&&(o.polygonOffset(de,j),I=de,k=j)):Te(o.POLYGON_OFFSET_FILL)}function fe(N){N?oe(o.SCISSOR_TEST):Te(o.SCISSOR_TEST)}function b(N){N===void 0&&(N=o.TEXTURE0+X-1),ne!==N&&(o.activeTexture(N),ne=N)}function y(N,de,j){j===void 0&&(ne===null?j=o.TEXTURE0+X-1:j=ne);let Q=he[j];Q===void 0&&(Q={type:void 0,texture:void 0},he[j]=Q),(Q.type!==N||Q.texture!==de)&&(ne!==j&&(o.activeTexture(j),ne=j),o.bindTexture(N,de||Se[N]),Q.type=N,Q.texture=de)}function O(){const N=he[ne];N!==void 0&&N.type!==void 0&&(o.bindTexture(N.type,null),N.type=void 0,N.texture=void 0)}function z(){try{o.compressedTexImage2D.apply(o,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function W(){try{o.compressedTexImage3D.apply(o,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Y(){try{o.texSubImage2D.apply(o,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function ve(){try{o.texSubImage3D.apply(o,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function ee(){try{o.compressedTexSubImage2D.apply(o,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function ue(){try{o.compressedTexSubImage3D.apply(o,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function qe(){try{o.texStorage2D.apply(o,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function ie(){try{o.texStorage3D.apply(o,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function xe(){try{o.texImage2D.apply(o,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Pe(){try{o.texImage3D.apply(o,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Le(N){Ke.equals(N)===!1&&(o.scissor(N.x,N.y,N.z,N.w),Ke.copy(N))}function ye(N){K.equals(N)===!1&&(o.viewport(N.x,N.y,N.z,N.w),K.copy(N))}function je(N,de){let j=h.get(de);j===void 0&&(j=new WeakMap,h.set(de,j));let Q=j.get(N);Q===void 0&&(Q=o.getUniformBlockIndex(de,N.name),j.set(N,Q))}function ze(N,de){const Q=h.get(de).get(N);l.get(de)!==Q&&(o.uniformBlockBinding(de,Q,N.__bindingPointIndex),l.set(de,Q))}function ot(){o.disable(o.BLEND),o.disable(o.CULL_FACE),o.disable(o.DEPTH_TEST),o.disable(o.POLYGON_OFFSET_FILL),o.disable(o.SCISSOR_TEST),o.disable(o.STENCIL_TEST),o.disable(o.SAMPLE_ALPHA_TO_COVERAGE),o.blendEquation(o.FUNC_ADD),o.blendFunc(o.ONE,o.ZERO),o.blendFuncSeparate(o.ONE,o.ZERO,o.ONE,o.ZERO),o.blendColor(0,0,0,0),o.colorMask(!0,!0,!0,!0),o.clearColor(0,0,0,0),o.depthMask(!0),o.depthFunc(o.LESS),r.setReversed(!1),o.clearDepth(1),o.stencilMask(4294967295),o.stencilFunc(o.ALWAYS,0,4294967295),o.stencilOp(o.KEEP,o.KEEP,o.KEEP),o.clearStencil(0),o.cullFace(o.BACK),o.frontFace(o.CCW),o.polygonOffset(0,0),o.activeTexture(o.TEXTURE0),o.bindFramebuffer(o.FRAMEBUFFER,null),o.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),o.bindFramebuffer(o.READ_FRAMEBUFFER,null),o.useProgram(null),o.lineWidth(1),o.scissor(0,0,o.canvas.width,o.canvas.height),o.viewport(0,0,o.canvas.width,o.canvas.height),u={},ne=null,he={},c={},d=new WeakMap,f=[],g=null,_=!1,m=null,p=null,x=null,M=null,v=null,P=null,C=null,E=new le(0,0,0),L=0,w=!1,S=null,R=null,D=null,I=null,k=null,Ke.set(0,0,o.canvas.width,o.canvas.height),K.set(0,0,o.canvas.width,o.canvas.height),s.reset(),r.reset(),a.reset()}return{buffers:{color:s,depth:r,stencil:a},enable:oe,disable:Te,bindFramebuffer:Me,drawBuffers:Ne,useProgram:tt,setBlending:F,setMaterial:Nt,setFlipSided:Ve,setCullFace:Z,setLineWidth:$,setPolygonOffset:_e,setScissorTest:fe,activeTexture:b,bindTexture:y,unbindTexture:O,compressedTexImage2D:z,compressedTexImage3D:W,texImage2D:xe,texImage3D:Pe,updateUBOMapping:je,uniformBlockBinding:ze,texStorage2D:qe,texStorage3D:ie,texSubImage2D:Y,texSubImage3D:ve,compressedTexSubImage2D:ee,compressedTexSubImage3D:ue,scissor:Le,viewport:ye,reset:ot}}function Mc(o,e,t,n){const i=_0(n);switch(t){case xh:return o*e;case Mh:return o*e;case Sh:return o*e*2;case qa:return o*e/i.components*i.byteLength;case Ya:return o*e/i.components*i.byteLength;case wh:return o*e*2/i.components*i.byteLength;case ja:return o*e*2/i.components*i.byteLength;case yh:return o*e*3/i.components*i.byteLength;case tn:return o*e*4/i.components*i.byteLength;case Ka:return o*e*4/i.components*i.byteLength;case Pr:case Lr:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*8;case Dr:case Ir:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case ia:case ra:return Math.max(o,16)*Math.max(e,8)/4;case na:case sa:return Math.max(o,8)*Math.max(e,8)/2;case oa:case aa:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*8;case la:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case ca:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case ha:return Math.floor((o+4)/5)*Math.floor((e+3)/4)*16;case ua:return Math.floor((o+4)/5)*Math.floor((e+4)/5)*16;case da:return Math.floor((o+5)/6)*Math.floor((e+4)/5)*16;case fa:return Math.floor((o+5)/6)*Math.floor((e+5)/6)*16;case pa:return Math.floor((o+7)/8)*Math.floor((e+4)/5)*16;case ma:return Math.floor((o+7)/8)*Math.floor((e+5)/6)*16;case ga:return Math.floor((o+7)/8)*Math.floor((e+7)/8)*16;case _a:return Math.floor((o+9)/10)*Math.floor((e+4)/5)*16;case va:return Math.floor((o+9)/10)*Math.floor((e+5)/6)*16;case xa:return Math.floor((o+9)/10)*Math.floor((e+7)/8)*16;case ya:return Math.floor((o+9)/10)*Math.floor((e+9)/10)*16;case Ma:return Math.floor((o+11)/12)*Math.floor((e+9)/10)*16;case Sa:return Math.floor((o+11)/12)*Math.floor((e+11)/12)*16;case Nr:case wa:case Ta:return Math.ceil(o/4)*Math.ceil(e/4)*16;case Th:case ba:return Math.ceil(o/4)*Math.ceil(e/4)*8;case Ea:case Aa:return Math.ceil(o/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function _0(o){switch(o){case Vn:case gh:return{byteLength:1,components:1};case Fs:case _h:case Mn:return{byteLength:2,components:1};case Wa:case Xa:return{byteLength:2,components:4};case Mi:case Va:case dn:return{byteLength:4,components:1};case vh:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${o}.`)}function v0(o,e,t,n,i,s,r){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new se,u=new WeakMap;let c;const d=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(b,y){return f?new OffscreenCanvas(b,y):zs("canvas")}function _(b,y,O){let z=1;const W=fe(b);if((W.width>O||W.height>O)&&(z=O/Math.max(W.width,W.height)),z<1)if(typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&b instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&b instanceof ImageBitmap||typeof VideoFrame<"u"&&b instanceof VideoFrame){const Y=Math.floor(z*W.width),ve=Math.floor(z*W.height);c===void 0&&(c=g(Y,ve));const ee=y?g(Y,ve):c;return ee.width=Y,ee.height=ve,ee.getContext("2d").drawImage(b,0,0,Y,ve),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+W.width+"x"+W.height+") to ("+Y+"x"+ve+")."),ee}else return"data"in b&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+W.width+"x"+W.height+")."),b;return b}function m(b){return b.generateMipmaps}function p(b){o.generateMipmap(b)}function x(b){return b.isWebGLCubeRenderTarget?o.TEXTURE_CUBE_MAP:b.isWebGL3DRenderTarget?o.TEXTURE_3D:b.isWebGLArrayRenderTarget||b.isCompressedArrayTexture?o.TEXTURE_2D_ARRAY:o.TEXTURE_2D}function M(b,y,O,z,W=!1){if(b!==null){if(o[b]!==void 0)return o[b];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+b+"'")}let Y=y;if(y===o.RED&&(O===o.FLOAT&&(Y=o.R32F),O===o.HALF_FLOAT&&(Y=o.R16F),O===o.UNSIGNED_BYTE&&(Y=o.R8)),y===o.RED_INTEGER&&(O===o.UNSIGNED_BYTE&&(Y=o.R8UI),O===o.UNSIGNED_SHORT&&(Y=o.R16UI),O===o.UNSIGNED_INT&&(Y=o.R32UI),O===o.BYTE&&(Y=o.R8I),O===o.SHORT&&(Y=o.R16I),O===o.INT&&(Y=o.R32I)),y===o.RG&&(O===o.FLOAT&&(Y=o.RG32F),O===o.HALF_FLOAT&&(Y=o.RG16F),O===o.UNSIGNED_BYTE&&(Y=o.RG8)),y===o.RG_INTEGER&&(O===o.UNSIGNED_BYTE&&(Y=o.RG8UI),O===o.UNSIGNED_SHORT&&(Y=o.RG16UI),O===o.UNSIGNED_INT&&(Y=o.RG32UI),O===o.BYTE&&(Y=o.RG8I),O===o.SHORT&&(Y=o.RG16I),O===o.INT&&(Y=o.RG32I)),y===o.RGB_INTEGER&&(O===o.UNSIGNED_BYTE&&(Y=o.RGB8UI),O===o.UNSIGNED_SHORT&&(Y=o.RGB16UI),O===o.UNSIGNED_INT&&(Y=o.RGB32UI),O===o.BYTE&&(Y=o.RGB8I),O===o.SHORT&&(Y=o.RGB16I),O===o.INT&&(Y=o.RGB32I)),y===o.RGBA_INTEGER&&(O===o.UNSIGNED_BYTE&&(Y=o.RGBA8UI),O===o.UNSIGNED_SHORT&&(Y=o.RGBA16UI),O===o.UNSIGNED_INT&&(Y=o.RGBA32UI),O===o.BYTE&&(Y=o.RGBA8I),O===o.SHORT&&(Y=o.RGBA16I),O===o.INT&&(Y=o.RGBA32I)),y===o.RGB&&O===o.UNSIGNED_INT_5_9_9_9_REV&&(Y=o.RGB9_E5),y===o.RGBA){const ve=W?Xr:Xe.getTransfer(z);O===o.FLOAT&&(Y=o.RGBA32F),O===o.HALF_FLOAT&&(Y=o.RGBA16F),O===o.UNSIGNED_BYTE&&(Y=ve===it?o.SRGB8_ALPHA8:o.RGBA8),O===o.UNSIGNED_SHORT_4_4_4_4&&(Y=o.RGBA4),O===o.UNSIGNED_SHORT_5_5_5_1&&(Y=o.RGB5_A1)}return(Y===o.R16F||Y===o.R32F||Y===o.RG16F||Y===o.RG32F||Y===o.RGBA16F||Y===o.RGBA32F)&&e.get("EXT_color_buffer_float"),Y}function v(b,y){let O;return b?y===null||y===Mi||y===ns?O=o.DEPTH24_STENCIL8:y===dn?O=o.DEPTH32F_STENCIL8:y===Fs&&(O=o.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):y===null||y===Mi||y===ns?O=o.DEPTH_COMPONENT24:y===dn?O=o.DEPTH_COMPONENT32F:y===Fs&&(O=o.DEPTH_COMPONENT16),O}function P(b,y){return m(b)===!0||b.isFramebufferTexture&&b.minFilter!==zt&&b.minFilter!==Kt?Math.log2(Math.max(y.width,y.height))+1:b.mipmaps!==void 0&&b.mipmaps.length>0?b.mipmaps.length:b.isCompressedTexture&&Array.isArray(b.image)?y.mipmaps.length:1}function C(b){const y=b.target;y.removeEventListener("dispose",C),L(y),y.isVideoTexture&&u.delete(y)}function E(b){const y=b.target;y.removeEventListener("dispose",E),S(y)}function L(b){const y=n.get(b);if(y.__webglInit===void 0)return;const O=b.source,z=d.get(O);if(z){const W=z[y.__cacheKey];W.usedTimes--,W.usedTimes===0&&w(b),Object.keys(z).length===0&&d.delete(O)}n.remove(b)}function w(b){const y=n.get(b);o.deleteTexture(y.__webglTexture);const O=b.source,z=d.get(O);delete z[y.__cacheKey],r.memory.textures--}function S(b){const y=n.get(b);if(b.depthTexture&&(b.depthTexture.dispose(),n.remove(b.depthTexture)),b.isWebGLCubeRenderTarget)for(let z=0;z<6;z++){if(Array.isArray(y.__webglFramebuffer[z]))for(let W=0;W<y.__webglFramebuffer[z].length;W++)o.deleteFramebuffer(y.__webglFramebuffer[z][W]);else o.deleteFramebuffer(y.__webglFramebuffer[z]);y.__webglDepthbuffer&&o.deleteRenderbuffer(y.__webglDepthbuffer[z])}else{if(Array.isArray(y.__webglFramebuffer))for(let z=0;z<y.__webglFramebuffer.length;z++)o.deleteFramebuffer(y.__webglFramebuffer[z]);else o.deleteFramebuffer(y.__webglFramebuffer);if(y.__webglDepthbuffer&&o.deleteRenderbuffer(y.__webglDepthbuffer),y.__webglMultisampledFramebuffer&&o.deleteFramebuffer(y.__webglMultisampledFramebuffer),y.__webglColorRenderbuffer)for(let z=0;z<y.__webglColorRenderbuffer.length;z++)y.__webglColorRenderbuffer[z]&&o.deleteRenderbuffer(y.__webglColorRenderbuffer[z]);y.__webglDepthRenderbuffer&&o.deleteRenderbuffer(y.__webglDepthRenderbuffer)}const O=b.textures;for(let z=0,W=O.length;z<W;z++){const Y=n.get(O[z]);Y.__webglTexture&&(o.deleteTexture(Y.__webglTexture),r.memory.textures--),n.remove(O[z])}n.remove(b)}let R=0;function D(){R=0}function I(){const b=R;return b>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+b+" texture units while this GPU supports only "+i.maxTextures),R+=1,b}function k(b){const y=[];return y.push(b.wrapS),y.push(b.wrapT),y.push(b.wrapR||0),y.push(b.magFilter),y.push(b.minFilter),y.push(b.anisotropy),y.push(b.internalFormat),y.push(b.format),y.push(b.type),y.push(b.generateMipmaps),y.push(b.premultiplyAlpha),y.push(b.flipY),y.push(b.unpackAlignment),y.push(b.colorSpace),y.join()}function X(b,y){const O=n.get(b);if(b.isVideoTexture&&$(b),b.isRenderTargetTexture===!1&&b.version>0&&O.__version!==b.version){const z=b.image;if(z===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(z.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{K(O,b,y);return}}t.bindTexture(o.TEXTURE_2D,O.__webglTexture,o.TEXTURE0+y)}function q(b,y){const O=n.get(b);if(b.version>0&&O.__version!==b.version){K(O,b,y);return}t.bindTexture(o.TEXTURE_2D_ARRAY,O.__webglTexture,o.TEXTURE0+y)}function J(b,y){const O=n.get(b);if(b.version>0&&O.__version!==b.version){K(O,b,y);return}t.bindTexture(o.TEXTURE_3D,O.__webglTexture,o.TEXTURE0+y)}function V(b,y){const O=n.get(b);if(b.version>0&&O.__version!==b.version){te(O,b,y);return}t.bindTexture(o.TEXTURE_CUBE_MAP,O.__webglTexture,o.TEXTURE0+y)}const ne={[ts]:o.REPEAT,[ii]:o.CLAMP_TO_EDGE,[Fr]:o.MIRRORED_REPEAT},he={[zt]:o.NEAREST,[mh]:o.NEAREST_MIPMAP_NEAREST,[Rs]:o.NEAREST_MIPMAP_LINEAR,[Kt]:o.LINEAR,[Rr]:o.LINEAR_MIPMAP_NEAREST,[Fn]:o.LINEAR_MIPMAP_LINEAR},we={[Yu]:o.NEVER,[Qu]:o.ALWAYS,[ju]:o.LESS,[Ah]:o.LEQUAL,[Ku]:o.EQUAL,[Ju]:o.GEQUAL,[$u]:o.GREATER,[Zu]:o.NOTEQUAL};function Be(b,y){if(y.type===dn&&e.has("OES_texture_float_linear")===!1&&(y.magFilter===Kt||y.magFilter===Rr||y.magFilter===Rs||y.magFilter===Fn||y.minFilter===Kt||y.minFilter===Rr||y.minFilter===Rs||y.minFilter===Fn)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),o.texParameteri(b,o.TEXTURE_WRAP_S,ne[y.wrapS]),o.texParameteri(b,o.TEXTURE_WRAP_T,ne[y.wrapT]),(b===o.TEXTURE_3D||b===o.TEXTURE_2D_ARRAY)&&o.texParameteri(b,o.TEXTURE_WRAP_R,ne[y.wrapR]),o.texParameteri(b,o.TEXTURE_MAG_FILTER,he[y.magFilter]),o.texParameteri(b,o.TEXTURE_MIN_FILTER,he[y.minFilter]),y.compareFunction&&(o.texParameteri(b,o.TEXTURE_COMPARE_MODE,o.COMPARE_REF_TO_TEXTURE),o.texParameteri(b,o.TEXTURE_COMPARE_FUNC,we[y.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(y.magFilter===zt||y.minFilter!==Rs&&y.minFilter!==Fn||y.type===dn&&e.has("OES_texture_float_linear")===!1)return;if(y.anisotropy>1||n.get(y).__currentAnisotropy){const O=e.get("EXT_texture_filter_anisotropic");o.texParameterf(b,O.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(y.anisotropy,i.getMaxAnisotropy())),n.get(y).__currentAnisotropy=y.anisotropy}}}function Ke(b,y){let O=!1;b.__webglInit===void 0&&(b.__webglInit=!0,y.addEventListener("dispose",C));const z=y.source;let W=d.get(z);W===void 0&&(W={},d.set(z,W));const Y=k(y);if(Y!==b.__cacheKey){W[Y]===void 0&&(W[Y]={texture:o.createTexture(),usedTimes:0},r.memory.textures++,O=!0),W[Y].usedTimes++;const ve=W[b.__cacheKey];ve!==void 0&&(W[b.__cacheKey].usedTimes--,ve.usedTimes===0&&w(y)),b.__cacheKey=Y,b.__webglTexture=W[Y].texture}return O}function K(b,y,O){let z=o.TEXTURE_2D;(y.isDataArrayTexture||y.isCompressedArrayTexture)&&(z=o.TEXTURE_2D_ARRAY),y.isData3DTexture&&(z=o.TEXTURE_3D);const W=Ke(b,y),Y=y.source;t.bindTexture(z,b.__webglTexture,o.TEXTURE0+O);const ve=n.get(Y);if(Y.version!==ve.__version||W===!0){t.activeTexture(o.TEXTURE0+O);const ee=Xe.getPrimaries(Xe.workingColorSpace),ue=y.colorSpace===ni?null:Xe.getPrimaries(y.colorSpace),qe=y.colorSpace===ni||ee===ue?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,y.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,y.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,qe);let ie=_(y.image,!1,i.maxTextureSize);ie=_e(y,ie);const xe=s.convert(y.format,y.colorSpace),Pe=s.convert(y.type);let Le=M(y.internalFormat,xe,Pe,y.colorSpace,y.isVideoTexture);Be(z,y);let ye;const je=y.mipmaps,ze=y.isVideoTexture!==!0,ot=ve.__version===void 0||W===!0,N=Y.dataReady,de=P(y,ie);if(y.isDepthTexture)Le=v(y.format===is,y.type),ot&&(ze?t.texStorage2D(o.TEXTURE_2D,1,Le,ie.width,ie.height):t.texImage2D(o.TEXTURE_2D,0,Le,ie.width,ie.height,0,xe,Pe,null));else if(y.isDataTexture)if(je.length>0){ze&&ot&&t.texStorage2D(o.TEXTURE_2D,de,Le,je[0].width,je[0].height);for(let j=0,Q=je.length;j<Q;j++)ye=je[j],ze?N&&t.texSubImage2D(o.TEXTURE_2D,j,0,0,ye.width,ye.height,xe,Pe,ye.data):t.texImage2D(o.TEXTURE_2D,j,Le,ye.width,ye.height,0,xe,Pe,ye.data);y.generateMipmaps=!1}else ze?(ot&&t.texStorage2D(o.TEXTURE_2D,de,Le,ie.width,ie.height),N&&t.texSubImage2D(o.TEXTURE_2D,0,0,0,ie.width,ie.height,xe,Pe,ie.data)):t.texImage2D(o.TEXTURE_2D,0,Le,ie.width,ie.height,0,xe,Pe,ie.data);else if(y.isCompressedTexture)if(y.isCompressedArrayTexture){ze&&ot&&t.texStorage3D(o.TEXTURE_2D_ARRAY,de,Le,je[0].width,je[0].height,ie.depth);for(let j=0,Q=je.length;j<Q;j++)if(ye=je[j],y.format!==tn)if(xe!==null)if(ze){if(N)if(y.layerUpdates.size>0){const ge=Mc(ye.width,ye.height,y.format,y.type);for(const pe of y.layerUpdates){const Fe=ye.data.subarray(pe*ge/ye.data.BYTES_PER_ELEMENT,(pe+1)*ge/ye.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,j,0,0,pe,ye.width,ye.height,1,xe,Fe)}y.clearLayerUpdates()}else t.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,j,0,0,0,ye.width,ye.height,ie.depth,xe,ye.data)}else t.compressedTexImage3D(o.TEXTURE_2D_ARRAY,j,Le,ye.width,ye.height,ie.depth,0,ye.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ze?N&&t.texSubImage3D(o.TEXTURE_2D_ARRAY,j,0,0,0,ye.width,ye.height,ie.depth,xe,Pe,ye.data):t.texImage3D(o.TEXTURE_2D_ARRAY,j,Le,ye.width,ye.height,ie.depth,0,xe,Pe,ye.data)}else{ze&&ot&&t.texStorage2D(o.TEXTURE_2D,de,Le,je[0].width,je[0].height);for(let j=0,Q=je.length;j<Q;j++)ye=je[j],y.format!==tn?xe!==null?ze?N&&t.compressedTexSubImage2D(o.TEXTURE_2D,j,0,0,ye.width,ye.height,xe,ye.data):t.compressedTexImage2D(o.TEXTURE_2D,j,Le,ye.width,ye.height,0,ye.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ze?N&&t.texSubImage2D(o.TEXTURE_2D,j,0,0,ye.width,ye.height,xe,Pe,ye.data):t.texImage2D(o.TEXTURE_2D,j,Le,ye.width,ye.height,0,xe,Pe,ye.data)}else if(y.isDataArrayTexture)if(ze){if(ot&&t.texStorage3D(o.TEXTURE_2D_ARRAY,de,Le,ie.width,ie.height,ie.depth),N)if(y.layerUpdates.size>0){const j=Mc(ie.width,ie.height,y.format,y.type);for(const Q of y.layerUpdates){const ge=ie.data.subarray(Q*j/ie.data.BYTES_PER_ELEMENT,(Q+1)*j/ie.data.BYTES_PER_ELEMENT);t.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,Q,ie.width,ie.height,1,xe,Pe,ge)}y.clearLayerUpdates()}else t.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,0,ie.width,ie.height,ie.depth,xe,Pe,ie.data)}else t.texImage3D(o.TEXTURE_2D_ARRAY,0,Le,ie.width,ie.height,ie.depth,0,xe,Pe,ie.data);else if(y.isData3DTexture)ze?(ot&&t.texStorage3D(o.TEXTURE_3D,de,Le,ie.width,ie.height,ie.depth),N&&t.texSubImage3D(o.TEXTURE_3D,0,0,0,0,ie.width,ie.height,ie.depth,xe,Pe,ie.data)):t.texImage3D(o.TEXTURE_3D,0,Le,ie.width,ie.height,ie.depth,0,xe,Pe,ie.data);else if(y.isFramebufferTexture){if(ot)if(ze)t.texStorage2D(o.TEXTURE_2D,de,Le,ie.width,ie.height);else{let j=ie.width,Q=ie.height;for(let ge=0;ge<de;ge++)t.texImage2D(o.TEXTURE_2D,ge,Le,j,Q,0,xe,Pe,null),j>>=1,Q>>=1}}else if(je.length>0){if(ze&&ot){const j=fe(je[0]);t.texStorage2D(o.TEXTURE_2D,de,Le,j.width,j.height)}for(let j=0,Q=je.length;j<Q;j++)ye=je[j],ze?N&&t.texSubImage2D(o.TEXTURE_2D,j,0,0,xe,Pe,ye):t.texImage2D(o.TEXTURE_2D,j,Le,xe,Pe,ye);y.generateMipmaps=!1}else if(ze){if(ot){const j=fe(ie);t.texStorage2D(o.TEXTURE_2D,de,Le,j.width,j.height)}N&&t.texSubImage2D(o.TEXTURE_2D,0,0,0,xe,Pe,ie)}else t.texImage2D(o.TEXTURE_2D,0,Le,xe,Pe,ie);m(y)&&p(z),ve.__version=Y.version,y.onUpdate&&y.onUpdate(y)}b.__version=y.version}function te(b,y,O){if(y.image.length!==6)return;const z=Ke(b,y),W=y.source;t.bindTexture(o.TEXTURE_CUBE_MAP,b.__webglTexture,o.TEXTURE0+O);const Y=n.get(W);if(W.version!==Y.__version||z===!0){t.activeTexture(o.TEXTURE0+O);const ve=Xe.getPrimaries(Xe.workingColorSpace),ee=y.colorSpace===ni?null:Xe.getPrimaries(y.colorSpace),ue=y.colorSpace===ni||ve===ee?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,y.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,y.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,ue);const qe=y.isCompressedTexture||y.image[0].isCompressedTexture,ie=y.image[0]&&y.image[0].isDataTexture,xe=[];for(let Q=0;Q<6;Q++)!qe&&!ie?xe[Q]=_(y.image[Q],!0,i.maxCubemapSize):xe[Q]=ie?y.image[Q].image:y.image[Q],xe[Q]=_e(y,xe[Q]);const Pe=xe[0],Le=s.convert(y.format,y.colorSpace),ye=s.convert(y.type),je=M(y.internalFormat,Le,ye,y.colorSpace),ze=y.isVideoTexture!==!0,ot=Y.__version===void 0||z===!0,N=W.dataReady;let de=P(y,Pe);Be(o.TEXTURE_CUBE_MAP,y);let j;if(qe){ze&&ot&&t.texStorage2D(o.TEXTURE_CUBE_MAP,de,je,Pe.width,Pe.height);for(let Q=0;Q<6;Q++){j=xe[Q].mipmaps;for(let ge=0;ge<j.length;ge++){const pe=j[ge];y.format!==tn?Le!==null?ze?N&&t.compressedTexSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Q,ge,0,0,pe.width,pe.height,Le,pe.data):t.compressedTexImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Q,ge,je,pe.width,pe.height,0,pe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):ze?N&&t.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Q,ge,0,0,pe.width,pe.height,Le,ye,pe.data):t.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Q,ge,je,pe.width,pe.height,0,Le,ye,pe.data)}}}else{if(j=y.mipmaps,ze&&ot){j.length>0&&de++;const Q=fe(xe[0]);t.texStorage2D(o.TEXTURE_CUBE_MAP,de,je,Q.width,Q.height)}for(let Q=0;Q<6;Q++)if(ie){ze?N&&t.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,0,0,xe[Q].width,xe[Q].height,Le,ye,xe[Q].data):t.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,je,xe[Q].width,xe[Q].height,0,Le,ye,xe[Q].data);for(let ge=0;ge<j.length;ge++){const Fe=j[ge].image[Q].image;ze?N&&t.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Q,ge+1,0,0,Fe.width,Fe.height,Le,ye,Fe.data):t.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Q,ge+1,je,Fe.width,Fe.height,0,Le,ye,Fe.data)}}else{ze?N&&t.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,0,0,Le,ye,xe[Q]):t.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,je,Le,ye,xe[Q]);for(let ge=0;ge<j.length;ge++){const pe=j[ge];ze?N&&t.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Q,ge+1,0,0,Le,ye,pe.image[Q]):t.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Q,ge+1,je,Le,ye,pe.image[Q])}}}m(y)&&p(o.TEXTURE_CUBE_MAP),Y.__version=W.version,y.onUpdate&&y.onUpdate(y)}b.__version=y.version}function Se(b,y,O,z,W,Y){const ve=s.convert(O.format,O.colorSpace),ee=s.convert(O.type),ue=M(O.internalFormat,ve,ee,O.colorSpace),qe=n.get(y),ie=n.get(O);if(ie.__renderTarget=y,!qe.__hasExternalTextures){const xe=Math.max(1,y.width>>Y),Pe=Math.max(1,y.height>>Y);W===o.TEXTURE_3D||W===o.TEXTURE_2D_ARRAY?t.texImage3D(W,Y,ue,xe,Pe,y.depth,0,ve,ee,null):t.texImage2D(W,Y,ue,xe,Pe,0,ve,ee,null)}t.bindFramebuffer(o.FRAMEBUFFER,b),Z(y)?a.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,z,W,ie.__webglTexture,0,Ve(y)):(W===o.TEXTURE_2D||W>=o.TEXTURE_CUBE_MAP_POSITIVE_X&&W<=o.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&o.framebufferTexture2D(o.FRAMEBUFFER,z,W,ie.__webglTexture,Y),t.bindFramebuffer(o.FRAMEBUFFER,null)}function oe(b,y,O){if(o.bindRenderbuffer(o.RENDERBUFFER,b),y.depthBuffer){const z=y.depthTexture,W=z&&z.isDepthTexture?z.type:null,Y=v(y.stencilBuffer,W),ve=y.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,ee=Ve(y);Z(y)?a.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,ee,Y,y.width,y.height):O?o.renderbufferStorageMultisample(o.RENDERBUFFER,ee,Y,y.width,y.height):o.renderbufferStorage(o.RENDERBUFFER,Y,y.width,y.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,ve,o.RENDERBUFFER,b)}else{const z=y.textures;for(let W=0;W<z.length;W++){const Y=z[W],ve=s.convert(Y.format,Y.colorSpace),ee=s.convert(Y.type),ue=M(Y.internalFormat,ve,ee,Y.colorSpace),qe=Ve(y);O&&Z(y)===!1?o.renderbufferStorageMultisample(o.RENDERBUFFER,qe,ue,y.width,y.height):Z(y)?a.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,qe,ue,y.width,y.height):o.renderbufferStorage(o.RENDERBUFFER,ue,y.width,y.height)}}o.bindRenderbuffer(o.RENDERBUFFER,null)}function Te(b,y){if(y&&y.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(o.FRAMEBUFFER,b),!(y.depthTexture&&y.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const z=n.get(y.depthTexture);z.__renderTarget=y,(!z.__webglTexture||y.depthTexture.image.width!==y.width||y.depthTexture.image.height!==y.height)&&(y.depthTexture.image.width=y.width,y.depthTexture.image.height=y.height,y.depthTexture.needsUpdate=!0),X(y.depthTexture,0);const W=z.__webglTexture,Y=Ve(y);if(y.depthTexture.format===Ki)Z(y)?a.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.TEXTURE_2D,W,0,Y):o.framebufferTexture2D(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.TEXTURE_2D,W,0);else if(y.depthTexture.format===is)Z(y)?a.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.TEXTURE_2D,W,0,Y):o.framebufferTexture2D(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.TEXTURE_2D,W,0);else throw new Error("Unknown depthTexture format")}function Me(b){const y=n.get(b),O=b.isWebGLCubeRenderTarget===!0;if(y.__boundDepthTexture!==b.depthTexture){const z=b.depthTexture;if(y.__depthDisposeCallback&&y.__depthDisposeCallback(),z){const W=()=>{delete y.__boundDepthTexture,delete y.__depthDisposeCallback,z.removeEventListener("dispose",W)};z.addEventListener("dispose",W),y.__depthDisposeCallback=W}y.__boundDepthTexture=z}if(b.depthTexture&&!y.__autoAllocateDepthBuffer){if(O)throw new Error("target.depthTexture not supported in Cube render targets");Te(y.__webglFramebuffer,b)}else if(O){y.__webglDepthbuffer=[];for(let z=0;z<6;z++)if(t.bindFramebuffer(o.FRAMEBUFFER,y.__webglFramebuffer[z]),y.__webglDepthbuffer[z]===void 0)y.__webglDepthbuffer[z]=o.createRenderbuffer(),oe(y.__webglDepthbuffer[z],b,!1);else{const W=b.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,Y=y.__webglDepthbuffer[z];o.bindRenderbuffer(o.RENDERBUFFER,Y),o.framebufferRenderbuffer(o.FRAMEBUFFER,W,o.RENDERBUFFER,Y)}}else if(t.bindFramebuffer(o.FRAMEBUFFER,y.__webglFramebuffer),y.__webglDepthbuffer===void 0)y.__webglDepthbuffer=o.createRenderbuffer(),oe(y.__webglDepthbuffer,b,!1);else{const z=b.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,W=y.__webglDepthbuffer;o.bindRenderbuffer(o.RENDERBUFFER,W),o.framebufferRenderbuffer(o.FRAMEBUFFER,z,o.RENDERBUFFER,W)}t.bindFramebuffer(o.FRAMEBUFFER,null)}function Ne(b,y,O){const z=n.get(b);y!==void 0&&Se(z.__webglFramebuffer,b,b.texture,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,0),O!==void 0&&Me(b)}function tt(b){const y=b.texture,O=n.get(b),z=n.get(y);b.addEventListener("dispose",E);const W=b.textures,Y=b.isWebGLCubeRenderTarget===!0,ve=W.length>1;if(ve||(z.__webglTexture===void 0&&(z.__webglTexture=o.createTexture()),z.__version=y.version,r.memory.textures++),Y){O.__webglFramebuffer=[];for(let ee=0;ee<6;ee++)if(y.mipmaps&&y.mipmaps.length>0){O.__webglFramebuffer[ee]=[];for(let ue=0;ue<y.mipmaps.length;ue++)O.__webglFramebuffer[ee][ue]=o.createFramebuffer()}else O.__webglFramebuffer[ee]=o.createFramebuffer()}else{if(y.mipmaps&&y.mipmaps.length>0){O.__webglFramebuffer=[];for(let ee=0;ee<y.mipmaps.length;ee++)O.__webglFramebuffer[ee]=o.createFramebuffer()}else O.__webglFramebuffer=o.createFramebuffer();if(ve)for(let ee=0,ue=W.length;ee<ue;ee++){const qe=n.get(W[ee]);qe.__webglTexture===void 0&&(qe.__webglTexture=o.createTexture(),r.memory.textures++)}if(b.samples>0&&Z(b)===!1){O.__webglMultisampledFramebuffer=o.createFramebuffer(),O.__webglColorRenderbuffer=[],t.bindFramebuffer(o.FRAMEBUFFER,O.__webglMultisampledFramebuffer);for(let ee=0;ee<W.length;ee++){const ue=W[ee];O.__webglColorRenderbuffer[ee]=o.createRenderbuffer(),o.bindRenderbuffer(o.RENDERBUFFER,O.__webglColorRenderbuffer[ee]);const qe=s.convert(ue.format,ue.colorSpace),ie=s.convert(ue.type),xe=M(ue.internalFormat,qe,ie,ue.colorSpace,b.isXRRenderTarget===!0),Pe=Ve(b);o.renderbufferStorageMultisample(o.RENDERBUFFER,Pe,xe,b.width,b.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+ee,o.RENDERBUFFER,O.__webglColorRenderbuffer[ee])}o.bindRenderbuffer(o.RENDERBUFFER,null),b.depthBuffer&&(O.__webglDepthRenderbuffer=o.createRenderbuffer(),oe(O.__webglDepthRenderbuffer,b,!0)),t.bindFramebuffer(o.FRAMEBUFFER,null)}}if(Y){t.bindTexture(o.TEXTURE_CUBE_MAP,z.__webglTexture),Be(o.TEXTURE_CUBE_MAP,y);for(let ee=0;ee<6;ee++)if(y.mipmaps&&y.mipmaps.length>0)for(let ue=0;ue<y.mipmaps.length;ue++)Se(O.__webglFramebuffer[ee][ue],b,y,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+ee,ue);else Se(O.__webglFramebuffer[ee],b,y,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0);m(y)&&p(o.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ve){for(let ee=0,ue=W.length;ee<ue;ee++){const qe=W[ee],ie=n.get(qe);t.bindTexture(o.TEXTURE_2D,ie.__webglTexture),Be(o.TEXTURE_2D,qe),Se(O.__webglFramebuffer,b,qe,o.COLOR_ATTACHMENT0+ee,o.TEXTURE_2D,0),m(qe)&&p(o.TEXTURE_2D)}t.unbindTexture()}else{let ee=o.TEXTURE_2D;if((b.isWebGL3DRenderTarget||b.isWebGLArrayRenderTarget)&&(ee=b.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),t.bindTexture(ee,z.__webglTexture),Be(ee,y),y.mipmaps&&y.mipmaps.length>0)for(let ue=0;ue<y.mipmaps.length;ue++)Se(O.__webglFramebuffer[ue],b,y,o.COLOR_ATTACHMENT0,ee,ue);else Se(O.__webglFramebuffer,b,y,o.COLOR_ATTACHMENT0,ee,0);m(y)&&p(ee),t.unbindTexture()}b.depthBuffer&&Me(b)}function Ue(b){const y=b.textures;for(let O=0,z=y.length;O<z;O++){const W=y[O];if(m(W)){const Y=x(b),ve=n.get(W).__webglTexture;t.bindTexture(Y,ve),p(Y),t.unbindTexture()}}}const ct=[],F=[];function Nt(b){if(b.samples>0){if(Z(b)===!1){const y=b.textures,O=b.width,z=b.height;let W=o.COLOR_BUFFER_BIT;const Y=b.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,ve=n.get(b),ee=y.length>1;if(ee)for(let ue=0;ue<y.length;ue++)t.bindFramebuffer(o.FRAMEBUFFER,ve.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+ue,o.RENDERBUFFER,null),t.bindFramebuffer(o.FRAMEBUFFER,ve.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+ue,o.TEXTURE_2D,null,0);t.bindFramebuffer(o.READ_FRAMEBUFFER,ve.__webglMultisampledFramebuffer),t.bindFramebuffer(o.DRAW_FRAMEBUFFER,ve.__webglFramebuffer);for(let ue=0;ue<y.length;ue++){if(b.resolveDepthBuffer&&(b.depthBuffer&&(W|=o.DEPTH_BUFFER_BIT),b.stencilBuffer&&b.resolveStencilBuffer&&(W|=o.STENCIL_BUFFER_BIT)),ee){o.framebufferRenderbuffer(o.READ_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.RENDERBUFFER,ve.__webglColorRenderbuffer[ue]);const qe=n.get(y[ue]).__webglTexture;o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,qe,0)}o.blitFramebuffer(0,0,O,z,0,0,O,z,W,o.NEAREST),l===!0&&(ct.length=0,F.length=0,ct.push(o.COLOR_ATTACHMENT0+ue),b.depthBuffer&&b.resolveDepthBuffer===!1&&(ct.push(Y),F.push(Y),o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,F)),o.invalidateFramebuffer(o.READ_FRAMEBUFFER,ct))}if(t.bindFramebuffer(o.READ_FRAMEBUFFER,null),t.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),ee)for(let ue=0;ue<y.length;ue++){t.bindFramebuffer(o.FRAMEBUFFER,ve.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+ue,o.RENDERBUFFER,ve.__webglColorRenderbuffer[ue]);const qe=n.get(y[ue]).__webglTexture;t.bindFramebuffer(o.FRAMEBUFFER,ve.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+ue,o.TEXTURE_2D,qe,0)}t.bindFramebuffer(o.DRAW_FRAMEBUFFER,ve.__webglMultisampledFramebuffer)}else if(b.depthBuffer&&b.resolveDepthBuffer===!1&&l){const y=b.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,[y])}}}function Ve(b){return Math.min(i.maxSamples,b.samples)}function Z(b){const y=n.get(b);return b.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&y.__useRenderToTexture!==!1}function $(b){const y=r.render.frame;u.get(b)!==y&&(u.set(b,y),b.update())}function _e(b,y){const O=b.colorSpace,z=b.format,W=b.type;return b.isCompressedTexture===!0||b.isVideoTexture===!0||O!==Gt&&O!==ni&&(Xe.getTransfer(O)===it?(z!==tn||W!==Vn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",O)),y}function fe(b){return typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement?(h.width=b.naturalWidth||b.width,h.height=b.naturalHeight||b.height):typeof VideoFrame<"u"&&b instanceof VideoFrame?(h.width=b.displayWidth,h.height=b.displayHeight):(h.width=b.width,h.height=b.height),h}this.allocateTextureUnit=I,this.resetTextureUnits=D,this.setTexture2D=X,this.setTexture2DArray=q,this.setTexture3D=J,this.setTextureCube=V,this.rebindTextures=Ne,this.setupRenderTarget=tt,this.updateRenderTargetMipmap=Ue,this.updateMultisampleRenderTarget=Nt,this.setupDepthRenderbuffer=Me,this.setupFrameBufferTexture=Se,this.useMultisampledRTT=Z}function x0(o,e){function t(n,i=ni){let s;const r=Xe.getTransfer(i);if(n===Vn)return o.UNSIGNED_BYTE;if(n===Wa)return o.UNSIGNED_SHORT_4_4_4_4;if(n===Xa)return o.UNSIGNED_SHORT_5_5_5_1;if(n===vh)return o.UNSIGNED_INT_5_9_9_9_REV;if(n===gh)return o.BYTE;if(n===_h)return o.SHORT;if(n===Fs)return o.UNSIGNED_SHORT;if(n===Va)return o.INT;if(n===Mi)return o.UNSIGNED_INT;if(n===dn)return o.FLOAT;if(n===Mn)return o.HALF_FLOAT;if(n===xh)return o.ALPHA;if(n===yh)return o.RGB;if(n===tn)return o.RGBA;if(n===Mh)return o.LUMINANCE;if(n===Sh)return o.LUMINANCE_ALPHA;if(n===Ki)return o.DEPTH_COMPONENT;if(n===is)return o.DEPTH_STENCIL;if(n===qa)return o.RED;if(n===Ya)return o.RED_INTEGER;if(n===wh)return o.RG;if(n===ja)return o.RG_INTEGER;if(n===Ka)return o.RGBA_INTEGER;if(n===Pr||n===Lr||n===Dr||n===Ir)if(r===it)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===Pr)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Lr)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Dr)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Ir)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===Pr)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Lr)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Dr)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Ir)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===na||n===ia||n===sa||n===ra)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===na)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===ia)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===sa)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===ra)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===oa||n===aa||n===la)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(n===oa||n===aa)return r===it?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===la)return r===it?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===ca||n===ha||n===ua||n===da||n===fa||n===pa||n===ma||n===ga||n===_a||n===va||n===xa||n===ya||n===Ma||n===Sa)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(n===ca)return r===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===ha)return r===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===ua)return r===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===da)return r===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===fa)return r===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===pa)return r===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===ma)return r===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===ga)return r===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===_a)return r===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===va)return r===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===xa)return r===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===ya)return r===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Ma)return r===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Sa)return r===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Nr||n===wa||n===Ta)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(n===Nr)return r===it?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===wa)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Ta)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Th||n===ba||n===Ea||n===Aa)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(n===Nr)return s.COMPRESSED_RED_RGTC1_EXT;if(n===ba)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Ea)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Aa)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===ns?o.UNSIGNED_INT_24_8:o[n]!==void 0?o[n]:null}return{convert:t}}class y0 extends Ot{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Xt extends lt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const M0={type:"move"};class Eo{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Xt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Xt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new A,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new A),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Xt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new A,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new A),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,s=null,r=null;const a=this._targetRay,l=this._grip,h=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(h&&e.hand){r=!0;for(const _ of e.hand.values()){const m=t.getJointPose(_,n),p=this._getHandJoint(h,_);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const u=h.joints["index-finger-tip"],c=h.joints["thumb-tip"],d=u.position.distanceTo(c.position),f=.02,g=.005;h.inputState.pinching&&d>f+g?(h.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!h.inputState.pinching&&d<=f-g&&(h.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&s!==null&&(i=s),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(M0)))}return a!==null&&(a.visible=i!==null),l!==null&&(l.visible=s!==null),h!==null&&(h.visible=r!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new Xt;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const S0=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,w0=`
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

}`;class T0{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){const i=new Tt,s=e.properties.get(i);s.__webglTexture=t.texture,(t.depthNear!=n.depthNear||t.depthFar!=n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new wt({vertexShader:S0,fragmentShader:w0,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Re(new Wt(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class b0 extends wi{constructor(e,t){super();const n=this;let i=null,s=1,r=null,a="local-floor",l=1,h=null,u=null,c=null,d=null,f=null,g=null;const _=new T0,m=t.getContextAttributes();let p=null,x=null;const M=[],v=[],P=new se;let C=null;const E=new Ot;E.viewport=new Ze;const L=new Ot;L.viewport=new Ze;const w=[E,L],S=new y0;let R=null,D=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(K){let te=M[K];return te===void 0&&(te=new Eo,M[K]=te),te.getTargetRaySpace()},this.getControllerGrip=function(K){let te=M[K];return te===void 0&&(te=new Eo,M[K]=te),te.getGripSpace()},this.getHand=function(K){let te=M[K];return te===void 0&&(te=new Eo,M[K]=te),te.getHandSpace()};function I(K){const te=v.indexOf(K.inputSource);if(te===-1)return;const Se=M[te];Se!==void 0&&(Se.update(K.inputSource,K.frame,h||r),Se.dispatchEvent({type:K.type,data:K.inputSource}))}function k(){i.removeEventListener("select",I),i.removeEventListener("selectstart",I),i.removeEventListener("selectend",I),i.removeEventListener("squeeze",I),i.removeEventListener("squeezestart",I),i.removeEventListener("squeezeend",I),i.removeEventListener("end",k),i.removeEventListener("inputsourceschange",X);for(let K=0;K<M.length;K++){const te=v[K];te!==null&&(v[K]=null,M[K].disconnect(te))}R=null,D=null,_.reset(),e.setRenderTarget(p),f=null,d=null,c=null,i=null,x=null,Ke.stop(),n.isPresenting=!1,e.setPixelRatio(C),e.setSize(P.width,P.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(K){s=K,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(K){a=K,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return h||r},this.setReferenceSpace=function(K){h=K},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return c},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function(K){if(i=K,i!==null){if(p=e.getRenderTarget(),i.addEventListener("select",I),i.addEventListener("selectstart",I),i.addEventListener("selectend",I),i.addEventListener("squeeze",I),i.addEventListener("squeezestart",I),i.addEventListener("squeezeend",I),i.addEventListener("end",k),i.addEventListener("inputsourceschange",X),m.xrCompatible!==!0&&await t.makeXRCompatible(),C=e.getPixelRatio(),e.getSize(P),i.renderState.layers===void 0){const te={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:s};f=new XRWebGLLayer(i,t,te),i.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),x=new nn(f.framebufferWidth,f.framebufferHeight,{format:tn,type:Vn,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil})}else{let te=null,Se=null,oe=null;m.depth&&(oe=m.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,te=m.stencil?is:Ki,Se=m.stencil?ns:Mi);const Te={colorFormat:t.RGBA8,depthFormat:oe,scaleFactor:s};c=new XRWebGLBinding(i,t),d=c.createProjectionLayer(Te),i.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),x=new nn(d.textureWidth,d.textureHeight,{format:tn,type:Vn,depthTexture:new Oh(d.textureWidth,d.textureHeight,Se,void 0,void 0,void 0,void 0,void 0,void 0,te),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}x.isXRRenderTarget=!0,this.setFoveation(l),h=null,r=await i.requestReferenceSpace(a),Ke.setContext(i),Ke.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function X(K){for(let te=0;te<K.removed.length;te++){const Se=K.removed[te],oe=v.indexOf(Se);oe>=0&&(v[oe]=null,M[oe].disconnect(Se))}for(let te=0;te<K.added.length;te++){const Se=K.added[te];let oe=v.indexOf(Se);if(oe===-1){for(let Me=0;Me<M.length;Me++)if(Me>=v.length){v.push(Se),oe=Me;break}else if(v[Me]===null){v[Me]=Se,oe=Me;break}if(oe===-1)break}const Te=M[oe];Te&&Te.connect(Se)}}const q=new A,J=new A;function V(K,te,Se){q.setFromMatrixPosition(te.matrixWorld),J.setFromMatrixPosition(Se.matrixWorld);const oe=q.distanceTo(J),Te=te.projectionMatrix.elements,Me=Se.projectionMatrix.elements,Ne=Te[14]/(Te[10]-1),tt=Te[14]/(Te[10]+1),Ue=(Te[9]+1)/Te[5],ct=(Te[9]-1)/Te[5],F=(Te[8]-1)/Te[0],Nt=(Me[8]+1)/Me[0],Ve=Ne*F,Z=Ne*Nt,$=oe/(-F+Nt),_e=$*-F;if(te.matrixWorld.decompose(K.position,K.quaternion,K.scale),K.translateX(_e),K.translateZ($),K.matrixWorld.compose(K.position,K.quaternion,K.scale),K.matrixWorldInverse.copy(K.matrixWorld).invert(),Te[10]===-1)K.projectionMatrix.copy(te.projectionMatrix),K.projectionMatrixInverse.copy(te.projectionMatrixInverse);else{const fe=Ne+$,b=tt+$,y=Ve-_e,O=Z+(oe-_e),z=Ue*tt/b*fe,W=ct*tt/b*fe;K.projectionMatrix.makePerspective(y,O,z,W,fe,b),K.projectionMatrixInverse.copy(K.projectionMatrix).invert()}}function ne(K,te){te===null?K.matrixWorld.copy(K.matrix):K.matrixWorld.multiplyMatrices(te.matrixWorld,K.matrix),K.matrixWorldInverse.copy(K.matrixWorld).invert()}this.updateCamera=function(K){if(i===null)return;let te=K.near,Se=K.far;_.texture!==null&&(_.depthNear>0&&(te=_.depthNear),_.depthFar>0&&(Se=_.depthFar)),S.near=L.near=E.near=te,S.far=L.far=E.far=Se,(R!==S.near||D!==S.far)&&(i.updateRenderState({depthNear:S.near,depthFar:S.far}),R=S.near,D=S.far),E.layers.mask=K.layers.mask|2,L.layers.mask=K.layers.mask|4,S.layers.mask=E.layers.mask|L.layers.mask;const oe=K.parent,Te=S.cameras;ne(S,oe);for(let Me=0;Me<Te.length;Me++)ne(Te[Me],oe);Te.length===2?V(S,E,L):S.projectionMatrix.copy(E.projectionMatrix),he(K,S,oe)};function he(K,te,Se){Se===null?K.matrix.copy(te.matrixWorld):(K.matrix.copy(Se.matrixWorld),K.matrix.invert(),K.matrix.multiply(te.matrixWorld)),K.matrix.decompose(K.position,K.quaternion,K.scale),K.updateMatrixWorld(!0),K.projectionMatrix.copy(te.projectionMatrix),K.projectionMatrixInverse.copy(te.projectionMatrixInverse),K.isPerspectiveCamera&&(K.fov=ss*2*Math.atan(1/K.projectionMatrix.elements[5]),K.zoom=1)}this.getCamera=function(){return S},this.getFoveation=function(){if(!(d===null&&f===null))return l},this.setFoveation=function(K){l=K,d!==null&&(d.fixedFoveation=K),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=K)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(S)};let we=null;function Be(K,te){if(u=te.getViewerPose(h||r),g=te,u!==null){const Se=u.views;f!==null&&(e.setRenderTargetFramebuffer(x,f.framebuffer),e.setRenderTarget(x));let oe=!1;Se.length!==S.cameras.length&&(S.cameras.length=0,oe=!0);for(let Me=0;Me<Se.length;Me++){const Ne=Se[Me];let tt=null;if(f!==null)tt=f.getViewport(Ne);else{const ct=c.getViewSubImage(d,Ne);tt=ct.viewport,Me===0&&(e.setRenderTargetTextures(x,ct.colorTexture,d.ignoreDepthValues?void 0:ct.depthStencilTexture),e.setRenderTarget(x))}let Ue=w[Me];Ue===void 0&&(Ue=new Ot,Ue.layers.enable(Me),Ue.viewport=new Ze,w[Me]=Ue),Ue.matrix.fromArray(Ne.transform.matrix),Ue.matrix.decompose(Ue.position,Ue.quaternion,Ue.scale),Ue.projectionMatrix.fromArray(Ne.projectionMatrix),Ue.projectionMatrixInverse.copy(Ue.projectionMatrix).invert(),Ue.viewport.set(tt.x,tt.y,tt.width,tt.height),Me===0&&(S.matrix.copy(Ue.matrix),S.matrix.decompose(S.position,S.quaternion,S.scale)),oe===!0&&S.cameras.push(Ue)}const Te=i.enabledFeatures;if(Te&&Te.includes("depth-sensing")){const Me=c.getDepthInformation(Se[0]);Me&&Me.isValid&&Me.texture&&_.init(e,Me,i.renderState)}}for(let Se=0;Se<M.length;Se++){const oe=v[Se],Te=M[Se];oe!==null&&Te!==void 0&&Te.update(oe,te,h||r)}we&&we(K,te),te.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:te}),g=null}const Ke=new Fh;Ke.setAnimationLoop(Be),this.setAnimationLoop=function(K){we=K},this.dispose=function(){}}}const fi=new mn,E0=new De;function A0(o,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,Nh(o)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function i(m,p,x,M,v){p.isMeshBasicMaterial||p.isMeshLambertMaterial?s(m,p):p.isMeshToonMaterial?(s(m,p),c(m,p)):p.isMeshPhongMaterial?(s(m,p),u(m,p)):p.isMeshStandardMaterial?(s(m,p),d(m,p),p.isMeshPhysicalMaterial&&f(m,p,v)):p.isMeshMatcapMaterial?(s(m,p),g(m,p)):p.isMeshDepthMaterial?s(m,p):p.isMeshDistanceMaterial?(s(m,p),_(m,p)):p.isMeshNormalMaterial?s(m,p):p.isLineBasicMaterial?(r(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?l(m,p,x,M):p.isSpriteMaterial?h(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===kt&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===kt&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const x=e.get(p),M=x.envMap,v=x.envMapRotation;M&&(m.envMap.value=M,fi.copy(v),fi.x*=-1,fi.y*=-1,fi.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(fi.y*=-1,fi.z*=-1),m.envMapRotation.value.setFromMatrix4(E0.makeRotationFromEuler(fi)),m.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function r(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,x,M){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*x,m.scale.value=M*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function u(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function c(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function d(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,x){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===kt&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=x.texture,m.transmissionSamplerSize.value.set(x.width,x.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function _(m,p){const x=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(x.matrixWorld),m.nearDistance.value=x.shadow.camera.near,m.farDistance.value=x.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function C0(o,e,t,n){let i={},s={},r=[];const a=o.getParameter(o.MAX_UNIFORM_BUFFER_BINDINGS);function l(x,M){const v=M.program;n.uniformBlockBinding(x,v)}function h(x,M){let v=i[x.id];v===void 0&&(g(x),v=u(x),i[x.id]=v,x.addEventListener("dispose",m));const P=M.program;n.updateUBOMapping(x,P);const C=e.render.frame;s[x.id]!==C&&(d(x),s[x.id]=C)}function u(x){const M=c();x.__bindingPointIndex=M;const v=o.createBuffer(),P=x.__size,C=x.usage;return o.bindBuffer(o.UNIFORM_BUFFER,v),o.bufferData(o.UNIFORM_BUFFER,P,C),o.bindBuffer(o.UNIFORM_BUFFER,null),o.bindBufferBase(o.UNIFORM_BUFFER,M,v),v}function c(){for(let x=0;x<a;x++)if(r.indexOf(x)===-1)return r.push(x),x;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(x){const M=i[x.id],v=x.uniforms,P=x.__cache;o.bindBuffer(o.UNIFORM_BUFFER,M);for(let C=0,E=v.length;C<E;C++){const L=Array.isArray(v[C])?v[C]:[v[C]];for(let w=0,S=L.length;w<S;w++){const R=L[w];if(f(R,C,w,P)===!0){const D=R.__offset,I=Array.isArray(R.value)?R.value:[R.value];let k=0;for(let X=0;X<I.length;X++){const q=I[X],J=_(q);typeof q=="number"||typeof q=="boolean"?(R.__data[0]=q,o.bufferSubData(o.UNIFORM_BUFFER,D+k,R.__data)):q.isMatrix3?(R.__data[0]=q.elements[0],R.__data[1]=q.elements[1],R.__data[2]=q.elements[2],R.__data[3]=0,R.__data[4]=q.elements[3],R.__data[5]=q.elements[4],R.__data[6]=q.elements[5],R.__data[7]=0,R.__data[8]=q.elements[6],R.__data[9]=q.elements[7],R.__data[10]=q.elements[8],R.__data[11]=0):(q.toArray(R.__data,k),k+=J.storage/Float32Array.BYTES_PER_ELEMENT)}o.bufferSubData(o.UNIFORM_BUFFER,D,R.__data)}}}o.bindBuffer(o.UNIFORM_BUFFER,null)}function f(x,M,v,P){const C=x.value,E=M+"_"+v;if(P[E]===void 0)return typeof C=="number"||typeof C=="boolean"?P[E]=C:P[E]=C.clone(),!0;{const L=P[E];if(typeof C=="number"||typeof C=="boolean"){if(L!==C)return P[E]=C,!0}else if(L.equals(C)===!1)return L.copy(C),!0}return!1}function g(x){const M=x.uniforms;let v=0;const P=16;for(let E=0,L=M.length;E<L;E++){const w=Array.isArray(M[E])?M[E]:[M[E]];for(let S=0,R=w.length;S<R;S++){const D=w[S],I=Array.isArray(D.value)?D.value:[D.value];for(let k=0,X=I.length;k<X;k++){const q=I[k],J=_(q),V=v%P,ne=V%J.boundary,he=V+ne;v+=ne,he!==0&&P-he<J.storage&&(v+=P-he),D.__data=new Float32Array(J.storage/Float32Array.BYTES_PER_ELEMENT),D.__offset=v,v+=J.storage}}}const C=v%P;return C>0&&(v+=P-C),x.__size=v,x.__cache={},this}function _(x){const M={boundary:0,storage:0};return typeof x=="number"||typeof x=="boolean"?(M.boundary=4,M.storage=4):x.isVector2?(M.boundary=8,M.storage=8):x.isVector3||x.isColor?(M.boundary=16,M.storage=12):x.isVector4?(M.boundary=16,M.storage=16):x.isMatrix3?(M.boundary=48,M.storage=48):x.isMatrix4?(M.boundary=64,M.storage=64):x.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",x),M}function m(x){const M=x.target;M.removeEventListener("dispose",m);const v=r.indexOf(M.__bindingPointIndex);r.splice(v,1),o.deleteBuffer(i[M.id]),delete i[M.id],delete s[M.id]}function p(){for(const x in i)o.deleteBuffer(i[x]);r=[],i={},s={}}return{bind:l,update:h,dispose:p}}class R0{constructor(e={}){const{canvas:t=_d(),context:n=null,depth:i=!0,stencil:s=!1,alpha:r=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:h=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:c=!1,reverseDepthBuffer:d=!1}=e;this.isWebGLRenderer=!0;let f;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=n.getContextAttributes().alpha}else f=r;const g=new Uint32Array(4),_=new Int32Array(4);let m=null,p=null;const x=[],M=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Rt,this.toneMapping=oi,this.toneMappingExposure=1;const v=this;let P=!1,C=0,E=0,L=null,w=-1,S=null;const R=new Ze,D=new Ze;let I=null;const k=new le(0);let X=0,q=t.width,J=t.height,V=1,ne=null,he=null;const we=new Ze(0,0,q,J),Be=new Ze(0,0,q,J);let Ke=!1;const K=new Qa;let te=!1,Se=!1;const oe=new De,Te=new De,Me=new A,Ne=new Ze,tt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Ue=!1;function ct(){return L===null?V:1}let F=n;function Nt(T,U){return t.getContext(T,U)}try{const T={alpha:!0,depth:i,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:h,powerPreference:u,failIfMajorPerformanceCaveat:c};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Ga}`),t.addEventListener("webglcontextlost",Q,!1),t.addEventListener("webglcontextrestored",ge,!1),t.addEventListener("webglcontextcreationerror",pe,!1),F===null){const U="webgl2";if(F=Nt(U,T),F===null)throw Nt(U)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(T){throw console.error("THREE.WebGLRenderer: "+T.message),T}let Ve,Z,$,_e,fe,b,y,O,z,W,Y,ve,ee,ue,qe,ie,xe,Pe,Le,ye,je,ze,ot,N;function de(){Ve=new Nm(F),Ve.init(),ze=new x0(F,Ve),Z=new Cm(F,Ve,e,ze),$=new g0(F,Ve),Z.reverseDepthBuffer&&d&&$.buffers.depth.setReversed(!0),_e=new Fm(F),fe=new t0,b=new v0(F,Ve,$,fe,Z,ze,_e),y=new Pm(v),O=new Im(v),z=new Vd(F),ot=new Em(F,z),W=new Um(F,z,_e,ot),Y=new km(F,W,z,_e),Le=new Om(F,Z,b),ie=new Rm(fe),ve=new e0(v,y,O,Ve,Z,ot,ie),ee=new A0(v,fe),ue=new i0,qe=new c0(Ve),Pe=new bm(v,y,O,$,Y,f,l),xe=new p0(v,Y,Z),N=new C0(F,_e,Z,$),ye=new Am(F,Ve,_e),je=new Bm(F,Ve,_e),_e.programs=ve.programs,v.capabilities=Z,v.extensions=Ve,v.properties=fe,v.renderLists=ue,v.shadowMap=xe,v.state=$,v.info=_e}de();const j=new b0(v,F);this.xr=j,this.getContext=function(){return F},this.getContextAttributes=function(){return F.getContextAttributes()},this.forceContextLoss=function(){const T=Ve.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){const T=Ve.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return V},this.setPixelRatio=function(T){T!==void 0&&(V=T,this.setSize(q,J,!1))},this.getSize=function(T){return T.set(q,J)},this.setSize=function(T,U,G=!0){if(j.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}q=T,J=U,t.width=Math.floor(T*V),t.height=Math.floor(U*V),G===!0&&(t.style.width=T+"px",t.style.height=U+"px"),this.setViewport(0,0,T,U)},this.getDrawingBufferSize=function(T){return T.set(q*V,J*V).floor()},this.setDrawingBufferSize=function(T,U,G){q=T,J=U,V=G,t.width=Math.floor(T*G),t.height=Math.floor(U*G),this.setViewport(0,0,T,U)},this.getCurrentViewport=function(T){return T.copy(R)},this.getViewport=function(T){return T.copy(we)},this.setViewport=function(T,U,G,H){T.isVector4?we.set(T.x,T.y,T.z,T.w):we.set(T,U,G,H),$.viewport(R.copy(we).multiplyScalar(V).round())},this.getScissor=function(T){return T.copy(Be)},this.setScissor=function(T,U,G,H){T.isVector4?Be.set(T.x,T.y,T.z,T.w):Be.set(T,U,G,H),$.scissor(D.copy(Be).multiplyScalar(V).round())},this.getScissorTest=function(){return Ke},this.setScissorTest=function(T){$.setScissorTest(Ke=T)},this.setOpaqueSort=function(T){ne=T},this.setTransparentSort=function(T){he=T},this.getClearColor=function(T){return T.copy(Pe.getClearColor())},this.setClearColor=function(){Pe.setClearColor.apply(Pe,arguments)},this.getClearAlpha=function(){return Pe.getClearAlpha()},this.setClearAlpha=function(){Pe.setClearAlpha.apply(Pe,arguments)},this.clear=function(T=!0,U=!0,G=!0){let H=0;if(T){let B=!1;if(L!==null){const re=L.texture.format;B=re===Ka||re===ja||re===Ya}if(B){const re=L.texture.type,me=re===Vn||re===Mi||re===Fs||re===ns||re===Wa||re===Xa,be=Pe.getClearColor(),Ee=Pe.getClearAlpha(),Ie=be.r,Oe=be.g,Ae=be.b;me?(g[0]=Ie,g[1]=Oe,g[2]=Ae,g[3]=Ee,F.clearBufferuiv(F.COLOR,0,g)):(_[0]=Ie,_[1]=Oe,_[2]=Ae,_[3]=Ee,F.clearBufferiv(F.COLOR,0,_))}else H|=F.COLOR_BUFFER_BIT}U&&(H|=F.DEPTH_BUFFER_BIT),G&&(H|=F.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),F.clear(H)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Q,!1),t.removeEventListener("webglcontextrestored",ge,!1),t.removeEventListener("webglcontextcreationerror",pe,!1),ue.dispose(),qe.dispose(),fe.dispose(),y.dispose(),O.dispose(),Y.dispose(),ot.dispose(),N.dispose(),ve.dispose(),j.dispose(),j.removeEventListener("sessionstart",gl),j.removeEventListener("sessionend",_l),ai.stop()};function Q(T){T.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),P=!0}function ge(){console.log("THREE.WebGLRenderer: Context Restored."),P=!1;const T=_e.autoReset,U=xe.enabled,G=xe.autoUpdate,H=xe.needsUpdate,B=xe.type;de(),_e.autoReset=T,xe.enabled=U,xe.autoUpdate=G,xe.needsUpdate=H,xe.type=B}function pe(T){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function Fe(T){const U=T.target;U.removeEventListener("dispose",Fe),pt(U)}function pt(T){Lt(T),fe.remove(T)}function Lt(T){const U=fe.get(T).programs;U!==void 0&&(U.forEach(function(G){ve.releaseProgram(G)}),T.isShaderMaterial&&ve.releaseShaderCache(T))}this.renderBufferDirect=function(T,U,G,H,B,re){U===null&&(U=tt);const me=B.isMesh&&B.matrixWorld.determinant()<0,be=du(T,U,G,H,B);$.setMaterial(H,me);let Ee=G.index,Ie=1;if(H.wireframe===!0){if(Ee=W.getWireframeAttribute(G),Ee===void 0)return;Ie=2}const Oe=G.drawRange,Ae=G.attributes.position;let $e=Oe.start*Ie,at=(Oe.start+Oe.count)*Ie;re!==null&&($e=Math.max($e,re.start*Ie),at=Math.min(at,(re.start+re.count)*Ie)),Ee!==null?($e=Math.max($e,0),at=Math.min(at,Ee.count)):Ae!=null&&($e=Math.max($e,0),at=Math.min(at,Ae.count));const ht=at-$e;if(ht<0||ht===1/0)return;ot.setup(B,H,be,G,Ee);let Ht,Je=ye;if(Ee!==null&&(Ht=z.get(Ee),Je=je,Je.setIndex(Ht)),B.isMesh)H.wireframe===!0?($.setLineWidth(H.wireframeLinewidth*ct()),Je.setMode(F.LINES)):Je.setMode(F.TRIANGLES);else if(B.isLine){let Ce=H.linewidth;Ce===void 0&&(Ce=1),$.setLineWidth(Ce*ct()),B.isLineSegments?Je.setMode(F.LINES):B.isLineLoop?Je.setMode(F.LINE_LOOP):Je.setMode(F.LINE_STRIP)}else B.isPoints?Je.setMode(F.POINTS):B.isSprite&&Je.setMode(F.TRIANGLES);if(B.isBatchedMesh)if(B._multiDrawInstances!==null)Je.renderMultiDrawInstances(B._multiDrawStarts,B._multiDrawCounts,B._multiDrawCount,B._multiDrawInstances);else if(Ve.get("WEBGL_multi_draw"))Je.renderMultiDraw(B._multiDrawStarts,B._multiDrawCounts,B._multiDrawCount);else{const Ce=B._multiDrawStarts,An=B._multiDrawCounts,Qe=B._multiDrawCount,an=Ee?z.get(Ee).bytesPerElement:1,Ti=fe.get(H).currentProgram.getUniforms();for(let qt=0;qt<Qe;qt++)Ti.setValue(F,"_gl_DrawID",qt),Je.render(Ce[qt]/an,An[qt])}else if(B.isInstancedMesh)Je.renderInstances($e,ht,B.count);else if(G.isInstancedBufferGeometry){const Ce=G._maxInstanceCount!==void 0?G._maxInstanceCount:1/0,An=Math.min(G.instanceCount,Ce);Je.renderInstances($e,ht,An)}else Je.render($e,ht)};function nt(T,U,G){T.transparent===!0&&T.side===vt&&T.forceSinglePass===!1?(T.side=kt,T.needsUpdate=!0,Ys(T,U,G),T.side=Hn,T.needsUpdate=!0,Ys(T,U,G),T.side=vt):Ys(T,U,G)}this.compile=function(T,U,G=null){G===null&&(G=T),p=qe.get(G),p.init(U),M.push(p),G.traverseVisible(function(B){B.isLight&&B.layers.test(U.layers)&&(p.pushLight(B),B.castShadow&&p.pushShadow(B))}),T!==G&&T.traverseVisible(function(B){B.isLight&&B.layers.test(U.layers)&&(p.pushLight(B),B.castShadow&&p.pushShadow(B))}),p.setupLights();const H=new Set;return T.traverse(function(B){if(!(B.isMesh||B.isPoints||B.isLine||B.isSprite))return;const re=B.material;if(re)if(Array.isArray(re))for(let me=0;me<re.length;me++){const be=re[me];nt(be,G,B),H.add(be)}else nt(re,G,B),H.add(re)}),M.pop(),p=null,H},this.compileAsync=function(T,U,G=null){const H=this.compile(T,U,G);return new Promise(B=>{function re(){if(H.forEach(function(me){fe.get(me).currentProgram.isReady()&&H.delete(me)}),H.size===0){B(T);return}setTimeout(re,10)}Ve.get("KHR_parallel_shader_compile")!==null?re():setTimeout(re,10)})};let on=null;function En(T){on&&on(T)}function gl(){ai.stop()}function _l(){ai.start()}const ai=new Fh;ai.setAnimationLoop(En),typeof self<"u"&&ai.setContext(self),this.setAnimationLoop=function(T){on=T,j.setAnimationLoop(T),T===null?ai.stop():ai.start()},j.addEventListener("sessionstart",gl),j.addEventListener("sessionend",_l),this.render=function(T,U){if(U!==void 0&&U.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(P===!0)return;if(T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),j.enabled===!0&&j.isPresenting===!0&&(j.cameraAutoUpdate===!0&&j.updateCamera(U),U=j.getCamera()),T.isScene===!0&&T.onBeforeRender(v,T,U,L),p=qe.get(T,M.length),p.init(U),M.push(p),Te.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),K.setFromProjectionMatrix(Te),Se=this.localClippingEnabled,te=ie.init(this.clippingPlanes,Se),m=ue.get(T,x.length),m.init(),x.push(m),j.enabled===!0&&j.isPresenting===!0){const re=v.xr.getDepthSensingMesh();re!==null&&Zr(re,U,-1/0,v.sortObjects)}Zr(T,U,0,v.sortObjects),m.finish(),v.sortObjects===!0&&m.sort(ne,he),Ue=j.enabled===!1||j.isPresenting===!1||j.hasDepthSensing()===!1,Ue&&Pe.addToRenderList(m,T),this.info.render.frame++,te===!0&&ie.beginShadows();const G=p.state.shadowsArray;xe.render(G,T,U),te===!0&&ie.endShadows(),this.info.autoReset===!0&&this.info.reset();const H=m.opaque,B=m.transmissive;if(p.setupLights(),U.isArrayCamera){const re=U.cameras;if(B.length>0)for(let me=0,be=re.length;me<be;me++){const Ee=re[me];xl(H,B,T,Ee)}Ue&&Pe.render(T);for(let me=0,be=re.length;me<be;me++){const Ee=re[me];vl(m,T,Ee,Ee.viewport)}}else B.length>0&&xl(H,B,T,U),Ue&&Pe.render(T),vl(m,T,U);L!==null&&(b.updateMultisampleRenderTarget(L),b.updateRenderTargetMipmap(L)),T.isScene===!0&&T.onAfterRender(v,T,U),ot.resetDefaultState(),w=-1,S=null,M.pop(),M.length>0?(p=M[M.length-1],te===!0&&ie.setGlobalState(v.clippingPlanes,p.state.camera)):p=null,x.pop(),x.length>0?m=x[x.length-1]:m=null};function Zr(T,U,G,H){if(T.visible===!1)return;if(T.layers.test(U.layers)){if(T.isGroup)G=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(U);else if(T.isLight)p.pushLight(T),T.castShadow&&p.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||K.intersectsSprite(T)){H&&Ne.setFromMatrixPosition(T.matrixWorld).applyMatrix4(Te);const me=Y.update(T),be=T.material;be.visible&&m.push(T,me,be,G,Ne.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||K.intersectsObject(T))){const me=Y.update(T),be=T.material;if(H&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),Ne.copy(T.boundingSphere.center)):(me.boundingSphere===null&&me.computeBoundingSphere(),Ne.copy(me.boundingSphere.center)),Ne.applyMatrix4(T.matrixWorld).applyMatrix4(Te)),Array.isArray(be)){const Ee=me.groups;for(let Ie=0,Oe=Ee.length;Ie<Oe;Ie++){const Ae=Ee[Ie],$e=be[Ae.materialIndex];$e&&$e.visible&&m.push(T,me,$e,G,Ne.z,Ae)}}else be.visible&&m.push(T,me,be,G,Ne.z,null)}}const re=T.children;for(let me=0,be=re.length;me<be;me++)Zr(re[me],U,G,H)}function vl(T,U,G,H){const B=T.opaque,re=T.transmissive,me=T.transparent;p.setupLightsView(G),te===!0&&ie.setGlobalState(v.clippingPlanes,G),H&&$.viewport(R.copy(H)),B.length>0&&qs(B,U,G),re.length>0&&qs(re,U,G),me.length>0&&qs(me,U,G),$.buffers.depth.setTest(!0),$.buffers.depth.setMask(!0),$.buffers.color.setMask(!0),$.setPolygonOffset(!1)}function xl(T,U,G,H){if((G.isScene===!0?G.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[H.id]===void 0&&(p.state.transmissionRenderTarget[H.id]=new nn(1,1,{generateMipmaps:!0,type:Ve.has("EXT_color_buffer_half_float")||Ve.has("EXT_color_buffer_float")?Mn:Vn,minFilter:Fn,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Xe.workingColorSpace}));const re=p.state.transmissionRenderTarget[H.id],me=H.viewport||R;re.setSize(me.z,me.w);const be=v.getRenderTarget();v.setRenderTarget(re),v.getClearColor(k),X=v.getClearAlpha(),X<1&&v.setClearColor(16777215,.5),v.clear(),Ue&&Pe.render(G);const Ee=v.toneMapping;v.toneMapping=oi;const Ie=H.viewport;if(H.viewport!==void 0&&(H.viewport=void 0),p.setupLightsView(H),te===!0&&ie.setGlobalState(v.clippingPlanes,H),qs(T,G,H),b.updateMultisampleRenderTarget(re),b.updateRenderTargetMipmap(re),Ve.has("WEBGL_multisampled_render_to_texture")===!1){let Oe=!1;for(let Ae=0,$e=U.length;Ae<$e;Ae++){const at=U[Ae],ht=at.object,Ht=at.geometry,Je=at.material,Ce=at.group;if(Je.side===vt&&ht.layers.test(H.layers)){const An=Je.side;Je.side=kt,Je.needsUpdate=!0,yl(ht,G,H,Ht,Je,Ce),Je.side=An,Je.needsUpdate=!0,Oe=!0}}Oe===!0&&(b.updateMultisampleRenderTarget(re),b.updateRenderTargetMipmap(re))}v.setRenderTarget(be),v.setClearColor(k,X),Ie!==void 0&&(H.viewport=Ie),v.toneMapping=Ee}function qs(T,U,G){const H=U.isScene===!0?U.overrideMaterial:null;for(let B=0,re=T.length;B<re;B++){const me=T[B],be=me.object,Ee=me.geometry,Ie=H===null?me.material:H,Oe=me.group;be.layers.test(G.layers)&&yl(be,U,G,Ee,Ie,Oe)}}function yl(T,U,G,H,B,re){T.onBeforeRender(v,U,G,H,B,re),T.modelViewMatrix.multiplyMatrices(G.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),B.onBeforeRender(v,U,G,H,T,re),B.transparent===!0&&B.side===vt&&B.forceSinglePass===!1?(B.side=kt,B.needsUpdate=!0,v.renderBufferDirect(G,U,H,B,T,re),B.side=Hn,B.needsUpdate=!0,v.renderBufferDirect(G,U,H,B,T,re),B.side=vt):v.renderBufferDirect(G,U,H,B,T,re),T.onAfterRender(v,U,G,H,B,re)}function Ys(T,U,G){U.isScene!==!0&&(U=tt);const H=fe.get(T),B=p.state.lights,re=p.state.shadowsArray,me=B.state.version,be=ve.getParameters(T,B.state,re,U,G),Ee=ve.getProgramCacheKey(be);let Ie=H.programs;H.environment=T.isMeshStandardMaterial?U.environment:null,H.fog=U.fog,H.envMap=(T.isMeshStandardMaterial?O:y).get(T.envMap||H.environment),H.envMapRotation=H.environment!==null&&T.envMap===null?U.environmentRotation:T.envMapRotation,Ie===void 0&&(T.addEventListener("dispose",Fe),Ie=new Map,H.programs=Ie);let Oe=Ie.get(Ee);if(Oe!==void 0){if(H.currentProgram===Oe&&H.lightsStateVersion===me)return Sl(T,be),Oe}else be.uniforms=ve.getUniforms(T),T.onBeforeCompile(be,v),Oe=ve.acquireProgram(be,Ee),Ie.set(Ee,Oe),H.uniforms=be.uniforms;const Ae=H.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(Ae.clippingPlanes=ie.uniform),Sl(T,be),H.needsLights=pu(T),H.lightsStateVersion=me,H.needsLights&&(Ae.ambientLightColor.value=B.state.ambient,Ae.lightProbe.value=B.state.probe,Ae.directionalLights.value=B.state.directional,Ae.directionalLightShadows.value=B.state.directionalShadow,Ae.spotLights.value=B.state.spot,Ae.spotLightShadows.value=B.state.spotShadow,Ae.rectAreaLights.value=B.state.rectArea,Ae.ltc_1.value=B.state.rectAreaLTC1,Ae.ltc_2.value=B.state.rectAreaLTC2,Ae.pointLights.value=B.state.point,Ae.pointLightShadows.value=B.state.pointShadow,Ae.hemisphereLights.value=B.state.hemi,Ae.directionalShadowMap.value=B.state.directionalShadowMap,Ae.directionalShadowMatrix.value=B.state.directionalShadowMatrix,Ae.spotShadowMap.value=B.state.spotShadowMap,Ae.spotLightMatrix.value=B.state.spotLightMatrix,Ae.spotLightMap.value=B.state.spotLightMap,Ae.pointShadowMap.value=B.state.pointShadowMap,Ae.pointShadowMatrix.value=B.state.pointShadowMatrix),H.currentProgram=Oe,H.uniformsList=null,Oe}function Ml(T){if(T.uniformsList===null){const U=T.currentProgram.getUniforms();T.uniformsList=Ur.seqWithValue(U.seq,T.uniforms)}return T.uniformsList}function Sl(T,U){const G=fe.get(T);G.outputColorSpace=U.outputColorSpace,G.batching=U.batching,G.batchingColor=U.batchingColor,G.instancing=U.instancing,G.instancingColor=U.instancingColor,G.instancingMorph=U.instancingMorph,G.skinning=U.skinning,G.morphTargets=U.morphTargets,G.morphNormals=U.morphNormals,G.morphColors=U.morphColors,G.morphTargetsCount=U.morphTargetsCount,G.numClippingPlanes=U.numClippingPlanes,G.numIntersection=U.numClipIntersection,G.vertexAlphas=U.vertexAlphas,G.vertexTangents=U.vertexTangents,G.toneMapping=U.toneMapping}function du(T,U,G,H,B){U.isScene!==!0&&(U=tt),b.resetTextureUnits();const re=U.fog,me=H.isMeshStandardMaterial?U.environment:null,be=L===null?v.outputColorSpace:L.isXRRenderTarget===!0?L.texture.colorSpace:Gt,Ee=(H.isMeshStandardMaterial?O:y).get(H.envMap||me),Ie=H.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,Oe=!!G.attributes.tangent&&(!!H.normalMap||H.anisotropy>0),Ae=!!G.morphAttributes.position,$e=!!G.morphAttributes.normal,at=!!G.morphAttributes.color;let ht=oi;H.toneMapped&&(L===null||L.isXRRenderTarget===!0)&&(ht=v.toneMapping);const Ht=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,Je=Ht!==void 0?Ht.length:0,Ce=fe.get(H),An=p.state.lights;if(te===!0&&(Se===!0||T!==S)){const $t=T===S&&H.id===w;ie.setState(H,T,$t)}let Qe=!1;H.version===Ce.__version?(Ce.needsLights&&Ce.lightsStateVersion!==An.state.version||Ce.outputColorSpace!==be||B.isBatchedMesh&&Ce.batching===!1||!B.isBatchedMesh&&Ce.batching===!0||B.isBatchedMesh&&Ce.batchingColor===!0&&B.colorTexture===null||B.isBatchedMesh&&Ce.batchingColor===!1&&B.colorTexture!==null||B.isInstancedMesh&&Ce.instancing===!1||!B.isInstancedMesh&&Ce.instancing===!0||B.isSkinnedMesh&&Ce.skinning===!1||!B.isSkinnedMesh&&Ce.skinning===!0||B.isInstancedMesh&&Ce.instancingColor===!0&&B.instanceColor===null||B.isInstancedMesh&&Ce.instancingColor===!1&&B.instanceColor!==null||B.isInstancedMesh&&Ce.instancingMorph===!0&&B.morphTexture===null||B.isInstancedMesh&&Ce.instancingMorph===!1&&B.morphTexture!==null||Ce.envMap!==Ee||H.fog===!0&&Ce.fog!==re||Ce.numClippingPlanes!==void 0&&(Ce.numClippingPlanes!==ie.numPlanes||Ce.numIntersection!==ie.numIntersection)||Ce.vertexAlphas!==Ie||Ce.vertexTangents!==Oe||Ce.morphTargets!==Ae||Ce.morphNormals!==$e||Ce.morphColors!==at||Ce.toneMapping!==ht||Ce.morphTargetsCount!==Je)&&(Qe=!0):(Qe=!0,Ce.__version=H.version);let an=Ce.currentProgram;Qe===!0&&(an=Ys(H,U,B));let Ti=!1,qt=!1,ms=!1;const ut=an.getUniforms(),gn=Ce.uniforms;if($.useProgram(an.program)&&(Ti=!0,qt=!0,ms=!0),H.id!==w&&(w=H.id,qt=!0),Ti||S!==T){$.buffers.depth.getReversed()?(oe.copy(T.projectionMatrix),xd(oe),yd(oe),ut.setValue(F,"projectionMatrix",oe)):ut.setValue(F,"projectionMatrix",T.projectionMatrix),ut.setValue(F,"viewMatrix",T.matrixWorldInverse);const Wn=ut.map.cameraPosition;Wn!==void 0&&Wn.setValue(F,Me.setFromMatrixPosition(T.matrixWorld)),Z.logarithmicDepthBuffer&&ut.setValue(F,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),(H.isMeshPhongMaterial||H.isMeshToonMaterial||H.isMeshLambertMaterial||H.isMeshBasicMaterial||H.isMeshStandardMaterial||H.isShaderMaterial)&&ut.setValue(F,"isOrthographic",T.isOrthographicCamera===!0),S!==T&&(S=T,qt=!0,ms=!0)}if(B.isSkinnedMesh){ut.setOptional(F,B,"bindMatrix"),ut.setOptional(F,B,"bindMatrixInverse");const $t=B.skeleton;$t&&($t.boneTexture===null&&$t.computeBoneTexture(),ut.setValue(F,"boneTexture",$t.boneTexture,b))}B.isBatchedMesh&&(ut.setOptional(F,B,"batchingTexture"),ut.setValue(F,"batchingTexture",B._matricesTexture,b),ut.setOptional(F,B,"batchingIdTexture"),ut.setValue(F,"batchingIdTexture",B._indirectTexture,b),ut.setOptional(F,B,"batchingColorTexture"),B._colorsTexture!==null&&ut.setValue(F,"batchingColorTexture",B._colorsTexture,b));const gs=G.morphAttributes;if((gs.position!==void 0||gs.normal!==void 0||gs.color!==void 0)&&Le.update(B,G,an),(qt||Ce.receiveShadow!==B.receiveShadow)&&(Ce.receiveShadow=B.receiveShadow,ut.setValue(F,"receiveShadow",B.receiveShadow)),H.isMeshGouraudMaterial&&H.envMap!==null&&(gn.envMap.value=Ee,gn.flipEnvMap.value=Ee.isCubeTexture&&Ee.isRenderTargetTexture===!1?-1:1),H.isMeshStandardMaterial&&H.envMap===null&&U.environment!==null&&(gn.envMapIntensity.value=U.environmentIntensity),qt&&(ut.setValue(F,"toneMappingExposure",v.toneMappingExposure),Ce.needsLights&&fu(gn,ms),re&&H.fog===!0&&ee.refreshFogUniforms(gn,re),ee.refreshMaterialUniforms(gn,H,V,J,p.state.transmissionRenderTarget[T.id]),Ur.upload(F,Ml(Ce),gn,b)),H.isShaderMaterial&&H.uniformsNeedUpdate===!0&&(Ur.upload(F,Ml(Ce),gn,b),H.uniformsNeedUpdate=!1),H.isSpriteMaterial&&ut.setValue(F,"center",B.center),ut.setValue(F,"modelViewMatrix",B.modelViewMatrix),ut.setValue(F,"normalMatrix",B.normalMatrix),ut.setValue(F,"modelMatrix",B.matrixWorld),H.isShaderMaterial||H.isRawShaderMaterial){const $t=H.uniformsGroups;for(let Wn=0,Xn=$t.length;Wn<Xn;Wn++){const wl=$t[Wn];N.update(wl,an),N.bind(wl,an)}}return an}function fu(T,U){T.ambientLightColor.needsUpdate=U,T.lightProbe.needsUpdate=U,T.directionalLights.needsUpdate=U,T.directionalLightShadows.needsUpdate=U,T.pointLights.needsUpdate=U,T.pointLightShadows.needsUpdate=U,T.spotLights.needsUpdate=U,T.spotLightShadows.needsUpdate=U,T.rectAreaLights.needsUpdate=U,T.hemisphereLights.needsUpdate=U}function pu(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return C},this.getActiveMipmapLevel=function(){return E},this.getRenderTarget=function(){return L},this.setRenderTargetTextures=function(T,U,G){fe.get(T.texture).__webglTexture=U,fe.get(T.depthTexture).__webglTexture=G;const H=fe.get(T);H.__hasExternalTextures=!0,H.__autoAllocateDepthBuffer=G===void 0,H.__autoAllocateDepthBuffer||Ve.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),H.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(T,U){const G=fe.get(T);G.__webglFramebuffer=U,G.__useDefaultFramebuffer=U===void 0},this.setRenderTarget=function(T,U=0,G=0){L=T,C=U,E=G;let H=!0,B=null,re=!1,me=!1;if(T){const Ee=fe.get(T);if(Ee.__useDefaultFramebuffer!==void 0)$.bindFramebuffer(F.FRAMEBUFFER,null),H=!1;else if(Ee.__webglFramebuffer===void 0)b.setupRenderTarget(T);else if(Ee.__hasExternalTextures)b.rebindTextures(T,fe.get(T.texture).__webglTexture,fe.get(T.depthTexture).__webglTexture);else if(T.depthBuffer){const Ae=T.depthTexture;if(Ee.__boundDepthTexture!==Ae){if(Ae!==null&&fe.has(Ae)&&(T.width!==Ae.image.width||T.height!==Ae.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");b.setupDepthRenderbuffer(T)}}const Ie=T.texture;(Ie.isData3DTexture||Ie.isDataArrayTexture||Ie.isCompressedArrayTexture)&&(me=!0);const Oe=fe.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(Oe[U])?B=Oe[U][G]:B=Oe[U],re=!0):T.samples>0&&b.useMultisampledRTT(T)===!1?B=fe.get(T).__webglMultisampledFramebuffer:Array.isArray(Oe)?B=Oe[G]:B=Oe,R.copy(T.viewport),D.copy(T.scissor),I=T.scissorTest}else R.copy(we).multiplyScalar(V).floor(),D.copy(Be).multiplyScalar(V).floor(),I=Ke;if($.bindFramebuffer(F.FRAMEBUFFER,B)&&H&&$.drawBuffers(T,B),$.viewport(R),$.scissor(D),$.setScissorTest(I),re){const Ee=fe.get(T.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_CUBE_MAP_POSITIVE_X+U,Ee.__webglTexture,G)}else if(me){const Ee=fe.get(T.texture),Ie=U||0;F.framebufferTextureLayer(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,Ee.__webglTexture,G||0,Ie)}w=-1},this.readRenderTargetPixels=function(T,U,G,H,B,re,me){if(!(T&&T.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let be=fe.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&me!==void 0&&(be=be[me]),be){$.bindFramebuffer(F.FRAMEBUFFER,be);try{const Ee=T.texture,Ie=Ee.format,Oe=Ee.type;if(!Z.textureFormatReadable(Ie)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Z.textureTypeReadable(Oe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=T.width-H&&G>=0&&G<=T.height-B&&F.readPixels(U,G,H,B,ze.convert(Ie),ze.convert(Oe),re)}finally{const Ee=L!==null?fe.get(L).__webglFramebuffer:null;$.bindFramebuffer(F.FRAMEBUFFER,Ee)}}},this.readRenderTargetPixelsAsync=async function(T,U,G,H,B,re,me){if(!(T&&T.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let be=fe.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&me!==void 0&&(be=be[me]),be){const Ee=T.texture,Ie=Ee.format,Oe=Ee.type;if(!Z.textureFormatReadable(Ie))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Z.textureTypeReadable(Oe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(U>=0&&U<=T.width-H&&G>=0&&G<=T.height-B){$.bindFramebuffer(F.FRAMEBUFFER,be);const Ae=F.createBuffer();F.bindBuffer(F.PIXEL_PACK_BUFFER,Ae),F.bufferData(F.PIXEL_PACK_BUFFER,re.byteLength,F.STREAM_READ),F.readPixels(U,G,H,B,ze.convert(Ie),ze.convert(Oe),0);const $e=L!==null?fe.get(L).__webglFramebuffer:null;$.bindFramebuffer(F.FRAMEBUFFER,$e);const at=F.fenceSync(F.SYNC_GPU_COMMANDS_COMPLETE,0);return F.flush(),await vd(F,at,4),F.bindBuffer(F.PIXEL_PACK_BUFFER,Ae),F.getBufferSubData(F.PIXEL_PACK_BUFFER,0,re),F.deleteBuffer(Ae),F.deleteSync(at),re}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(T,U=null,G=0){T.isTexture!==!0&&(Ps("WebGLRenderer: copyFramebufferToTexture function signature has changed."),U=arguments[0]||null,T=arguments[1]);const H=Math.pow(2,-G),B=Math.floor(T.image.width*H),re=Math.floor(T.image.height*H),me=U!==null?U.x:0,be=U!==null?U.y:0;b.setTexture2D(T,0),F.copyTexSubImage2D(F.TEXTURE_2D,G,0,0,me,be,B,re),$.unbindTexture()},this.copyTextureToTexture=function(T,U,G=null,H=null,B=0){T.isTexture!==!0&&(Ps("WebGLRenderer: copyTextureToTexture function signature has changed."),H=arguments[0]||null,T=arguments[1],U=arguments[2],B=arguments[3]||0,G=null);let re,me,be,Ee,Ie,Oe,Ae,$e,at;const ht=T.isCompressedTexture?T.mipmaps[B]:T.image;G!==null?(re=G.max.x-G.min.x,me=G.max.y-G.min.y,be=G.isBox3?G.max.z-G.min.z:1,Ee=G.min.x,Ie=G.min.y,Oe=G.isBox3?G.min.z:0):(re=ht.width,me=ht.height,be=ht.depth||1,Ee=0,Ie=0,Oe=0),H!==null?(Ae=H.x,$e=H.y,at=H.z):(Ae=0,$e=0,at=0);const Ht=ze.convert(U.format),Je=ze.convert(U.type);let Ce;U.isData3DTexture?(b.setTexture3D(U,0),Ce=F.TEXTURE_3D):U.isDataArrayTexture||U.isCompressedArrayTexture?(b.setTexture2DArray(U,0),Ce=F.TEXTURE_2D_ARRAY):(b.setTexture2D(U,0),Ce=F.TEXTURE_2D),F.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,U.flipY),F.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),F.pixelStorei(F.UNPACK_ALIGNMENT,U.unpackAlignment);const An=F.getParameter(F.UNPACK_ROW_LENGTH),Qe=F.getParameter(F.UNPACK_IMAGE_HEIGHT),an=F.getParameter(F.UNPACK_SKIP_PIXELS),Ti=F.getParameter(F.UNPACK_SKIP_ROWS),qt=F.getParameter(F.UNPACK_SKIP_IMAGES);F.pixelStorei(F.UNPACK_ROW_LENGTH,ht.width),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,ht.height),F.pixelStorei(F.UNPACK_SKIP_PIXELS,Ee),F.pixelStorei(F.UNPACK_SKIP_ROWS,Ie),F.pixelStorei(F.UNPACK_SKIP_IMAGES,Oe);const ms=T.isDataArrayTexture||T.isData3DTexture,ut=U.isDataArrayTexture||U.isData3DTexture;if(T.isRenderTargetTexture||T.isDepthTexture){const gn=fe.get(T),gs=fe.get(U),$t=fe.get(gn.__renderTarget),Wn=fe.get(gs.__renderTarget);$.bindFramebuffer(F.READ_FRAMEBUFFER,$t.__webglFramebuffer),$.bindFramebuffer(F.DRAW_FRAMEBUFFER,Wn.__webglFramebuffer);for(let Xn=0;Xn<be;Xn++)ms&&F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,fe.get(T).__webglTexture,B,Oe+Xn),T.isDepthTexture?(ut&&F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,fe.get(U).__webglTexture,B,at+Xn),F.blitFramebuffer(Ee,Ie,re,me,Ae,$e,re,me,F.DEPTH_BUFFER_BIT,F.NEAREST)):ut?F.copyTexSubImage3D(Ce,B,Ae,$e,at+Xn,Ee,Ie,re,me):F.copyTexSubImage2D(Ce,B,Ae,$e,at+Xn,Ee,Ie,re,me);$.bindFramebuffer(F.READ_FRAMEBUFFER,null),$.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else ut?T.isDataTexture||T.isData3DTexture?F.texSubImage3D(Ce,B,Ae,$e,at,re,me,be,Ht,Je,ht.data):U.isCompressedArrayTexture?F.compressedTexSubImage3D(Ce,B,Ae,$e,at,re,me,be,Ht,ht.data):F.texSubImage3D(Ce,B,Ae,$e,at,re,me,be,Ht,Je,ht):T.isDataTexture?F.texSubImage2D(F.TEXTURE_2D,B,Ae,$e,re,me,Ht,Je,ht.data):T.isCompressedTexture?F.compressedTexSubImage2D(F.TEXTURE_2D,B,Ae,$e,ht.width,ht.height,Ht,ht.data):F.texSubImage2D(F.TEXTURE_2D,B,Ae,$e,re,me,Ht,Je,ht);F.pixelStorei(F.UNPACK_ROW_LENGTH,An),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,Qe),F.pixelStorei(F.UNPACK_SKIP_PIXELS,an),F.pixelStorei(F.UNPACK_SKIP_ROWS,Ti),F.pixelStorei(F.UNPACK_SKIP_IMAGES,qt),B===0&&U.generateMipmaps&&F.generateMipmap(Ce),$.unbindTexture()},this.copyTextureToTexture3D=function(T,U,G=null,H=null,B=0){return T.isTexture!==!0&&(Ps("WebGLRenderer: copyTextureToTexture3D function signature has changed."),G=arguments[0]||null,H=arguments[1]||null,T=arguments[2],U=arguments[3],B=arguments[4]||0),Ps('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(T,U,G,H,B)},this.initRenderTarget=function(T){fe.get(T).__webglFramebuffer===void 0&&b.setupRenderTarget(T)},this.initTexture=function(T){T.isCubeTexture?b.setTextureCube(T,0):T.isData3DTexture?b.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?b.setTexture2DArray(T,0):b.setTexture2D(T,0),$.unbindTexture()},this.resetState=function(){C=0,E=0,L=null,$.reset(),ot.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return On}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorspace=Xe._getDrawingBufferColorSpace(e),t.unpackColorSpace=Xe._getUnpackColorSpace()}}class jr{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new le(e),this.density=t}clone(){return new jr(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class P0 extends lt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new mn,this.environmentIntensity=1,this.environmentRotation=new mn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class Vh{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Ra,this.updateRanges=[],this.version=0,this.uuid=fn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let i=0,s=this.stride;i<s;i++)this.array[e+i]=t.array[n+i];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=fn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=fn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Ut=new A;class Hs{constructor(e,t,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)Ut.fromBufferAttribute(this,t),Ut.applyMatrix4(e),this.setXYZ(t,Ut.x,Ut.y,Ut.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Ut.fromBufferAttribute(this,t),Ut.applyNormalMatrix(e),this.setXYZ(t,Ut.x,Ut.y,Ut.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Ut.fromBufferAttribute(this,t),Ut.transformDirection(e),this.setXYZ(t,Ut.x,Ut.y,Ut.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=un(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=st(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=st(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=st(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=st(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=st(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=un(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=un(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=un(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=un(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=st(t,this.array),n=st(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=st(t,this.array),n=st(n,this.array),i=st(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=st(t,this.array),n=st(n,this.array),i=st(i,this.array),s=st(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this.data.array[e+3]=s,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[i+s])}return new bt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new Hs(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[i+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class La extends pn{static get type(){return"SpriteMaterial"}constructor(e){super(),this.isSpriteMaterial=!0,this.color=new le(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let ki;const Ms=new A,zi=new A,Gi=new A,Hi=new se,Ss=new se,Wh=new De,pr=new A,ws=new A,mr=new A,Sc=new se,Ao=new se,wc=new se;class Tc extends lt{constructor(e=new La){if(super(),this.isSprite=!0,this.type="Sprite",ki===void 0){ki=new xt;const t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new Vh(t,5);ki.setIndex([0,1,2,0,2,3]),ki.setAttribute("position",new Hs(n,3,0,!1)),ki.setAttribute("uv",new Hs(n,2,3,!1))}this.geometry=ki,this.material=e,this.center=new se(.5,.5)}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),zi.setFromMatrixScale(this.matrixWorld),Wh.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),Gi.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&zi.multiplyScalar(-Gi.z);const n=this.material.rotation;let i,s;n!==0&&(s=Math.cos(n),i=Math.sin(n));const r=this.center;gr(pr.set(-.5,-.5,0),Gi,r,zi,i,s),gr(ws.set(.5,-.5,0),Gi,r,zi,i,s),gr(mr.set(.5,.5,0),Gi,r,zi,i,s),Sc.set(0,0),Ao.set(1,0),wc.set(1,1);let a=e.ray.intersectTriangle(pr,ws,mr,!1,Ms);if(a===null&&(gr(ws.set(-.5,.5,0),Gi,r,zi,i,s),Ao.set(0,1),a=e.ray.intersectTriangle(pr,mr,ws,!1,Ms),a===null))return;const l=e.ray.origin.distanceTo(Ms);l<e.near||l>e.far||t.push({distance:l,point:Ms.clone(),uv:en.getInterpolation(Ms,pr,ws,mr,Sc,Ao,wc,new se),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function gr(o,e,t,n,i,s){Hi.subVectors(o,t).addScalar(.5).multiply(n),i!==void 0?(Ss.x=s*Hi.x-i*Hi.y,Ss.y=i*Hi.x+s*Hi.y):Ss.copy(Hi),o.copy(e),o.x+=Ss.x,o.y+=Ss.y,o.applyMatrix4(Wh)}const bc=new A,Ec=new Ze,Ac=new Ze,L0=new A,Cc=new De,_r=new A,Co=new Sn,Rc=new De,Ro=new Vs;class D0 extends Re{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=Al,this.bindMatrix=new De,this.bindMatrixInverse=new De,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new Pt),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,_r),this.boundingBox.expandByPoint(_r)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Sn),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,_r),this.boundingSphere.expandByPoint(_r)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const n=this.material,i=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Co.copy(this.boundingSphere),Co.applyMatrix4(i),e.ray.intersectsSphere(Co)!==!1&&(Rc.copy(i).invert(),Ro.copy(e.ray).applyMatrix4(Rc),!(this.boundingBox!==null&&Ro.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,Ro)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new Ze,t=this.geometry.attributes.skinWeight;for(let n=0,i=t.count;n<i;n++){e.fromBufferAttribute(t,n);const s=1/e.manhattanLength();s!==1/0?e.multiplyScalar(s):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===Al?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===Ou?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const n=this.skeleton,i=this.geometry;Ec.fromBufferAttribute(i.attributes.skinIndex,e),Ac.fromBufferAttribute(i.attributes.skinWeight,e),bc.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let s=0;s<4;s++){const r=Ac.getComponent(s);if(r!==0){const a=Ec.getComponent(s);Cc.multiplyMatrices(n.bones[a].matrixWorld,n.boneInverses[a]),t.addScaledVector(L0.copy(bc).applyMatrix4(Cc),r)}}return t.applyMatrix4(this.bindMatrixInverse)}}class Xh extends lt{constructor(){super(),this.isBone=!0,this.type="Bone"}}class qh extends Tt{constructor(e=null,t=1,n=1,i,s,r,a,l,h=zt,u=zt,c,d){super(null,r,a,l,h,u,i,s,c,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Pc=new De,I0=new De;class tl{constructor(e=[],t=[]){this.uuid=fn(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new De)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const n=new De;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const e=this.bones,t=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let s=0,r=e.length;s<r;s++){const a=e[s]?e[s].matrixWorld:I0;Pc.multiplyMatrices(a,t[s]),Pc.toArray(n,s*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new tl(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const n=new qh(t,e,e,tn,dn);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){const i=this.bones[t];if(i.name===e)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,i=e.bones.length;n<i;n++){const s=e.bones[n];let r=t[s];r===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",s),r=new Xh),this.bones.push(r),this.boneInverses.push(new De().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){const e={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,n=this.boneInverses;for(let i=0,s=t.length;i<s;i++){const r=t[i];e.bones.push(r.uuid);const a=n[i];e.boneInverses.push(a.toArray())}return e}}class Da extends bt{constructor(e,t,n,i=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const Vi=new De,Lc=new De,vr=[],Dc=new Pt,N0=new De,Ts=new Re,bs=new Sn;class Yh extends Re{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Da(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,N0)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Pt),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Vi),Dc.copy(e.boundingBox).applyMatrix4(Vi),this.boundingBox.union(Dc)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Sn),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Vi),bs.copy(e.boundingSphere).applyMatrix4(Vi),this.boundingSphere.union(bs)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const n=t.morphTargetInfluences,i=this.morphTexture.source.data.data,s=n.length+1,r=e*s+1;for(let a=0;a<n.length;a++)n[a]=i[r+a]}raycast(e,t){const n=this.matrixWorld,i=this.count;if(Ts.geometry=this.geometry,Ts.material=this.material,Ts.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),bs.copy(this.boundingSphere),bs.applyMatrix4(n),e.ray.intersectsSphere(bs)!==!1))for(let s=0;s<i;s++){this.getMatrixAt(s,Vi),Lc.multiplyMatrices(n,Vi),Ts.matrixWorld=Lc,Ts.raycast(e,vr);for(let r=0,a=vr.length;r<a;r++){const l=vr[r];l.instanceId=s,l.object=this,t.push(l)}vr.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Da(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const n=t.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new qh(new Float32Array(i*this.count),i,this.count,qa,dn));const s=this.morphTexture.source.data.data;let r=0;for(let h=0;h<n.length;h++)r+=n[h];const a=this.geometry.morphTargetsRelative?1:1-r,l=i*e;s[l]=a,s.set(n,l+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}class jh extends pn{static get type(){return"LineBasicMaterial"}constructor(e){super(),this.isLineBasicMaterial=!0,this.color=new le(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const zr=new A,Gr=new A,Ic=new De,Es=new Vs,xr=new Sn,Po=new A,Nc=new A;class nl extends lt{constructor(e=new xt,t=new jh){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let i=1,s=t.count;i<s;i++)zr.fromBufferAttribute(t,i-1),Gr.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=zr.distanceTo(Gr);e.setAttribute("lineDistance",new rt(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,s=e.params.Line.threshold,r=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),xr.copy(n.boundingSphere),xr.applyMatrix4(i),xr.radius+=s,e.ray.intersectsSphere(xr)===!1)return;Ic.copy(i).invert(),Es.copy(e.ray).applyMatrix4(Ic);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,h=this.isLineSegments?2:1,u=n.index,d=n.attributes.position;if(u!==null){const f=Math.max(0,r.start),g=Math.min(u.count,r.start+r.count);for(let _=f,m=g-1;_<m;_+=h){const p=u.getX(_),x=u.getX(_+1),M=yr(this,e,Es,l,p,x);M&&t.push(M)}if(this.isLineLoop){const _=u.getX(g-1),m=u.getX(f),p=yr(this,e,Es,l,_,m);p&&t.push(p)}}else{const f=Math.max(0,r.start),g=Math.min(d.count,r.start+r.count);for(let _=f,m=g-1;_<m;_+=h){const p=yr(this,e,Es,l,_,_+1);p&&t.push(p)}if(this.isLineLoop){const _=yr(this,e,Es,l,g-1,f);_&&t.push(_)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,r=i.length;s<r;s++){const a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function yr(o,e,t,n,i,s){const r=o.geometry.attributes.position;if(zr.fromBufferAttribute(r,i),Gr.fromBufferAttribute(r,s),t.distanceSqToSegment(zr,Gr,Po,Nc)>n)return;Po.applyMatrix4(o.matrixWorld);const l=e.ray.origin.distanceTo(Po);if(!(l<e.near||l>e.far))return{distance:l,point:Nc.clone().applyMatrix4(o.matrixWorld),index:i,face:null,faceIndex:null,barycoord:null,object:o}}const Uc=new A,Bc=new A;class U0 extends nl{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let i=0,s=t.count;i<s;i+=2)Uc.fromBufferAttribute(t,i),Bc.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+Uc.distanceTo(Bc);e.setAttribute("lineDistance",new rt(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class B0 extends nl{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class il extends pn{static get type(){return"PointsMaterial"}constructor(e){super(),this.isPointsMaterial=!0,this.color=new le(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Fc=new De,Ia=new Vs,Mr=new Sn,Sr=new A;class Kh extends lt{constructor(e=new xt,t=new il){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,s=e.params.Points.threshold,r=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Mr.copy(n.boundingSphere),Mr.applyMatrix4(i),Mr.radius+=s,e.ray.intersectsSphere(Mr)===!1)return;Fc.copy(i).invert(),Ia.copy(e.ray).applyMatrix4(Fc);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,h=n.index,c=n.attributes.position;if(h!==null){const d=Math.max(0,r.start),f=Math.min(h.count,r.start+r.count);for(let g=d,_=f;g<_;g++){const m=h.getX(g);Sr.fromBufferAttribute(c,m),Oc(Sr,m,l,i,e,t,this)}}else{const d=Math.max(0,r.start),f=Math.min(c.count,r.start+r.count);for(let g=d,_=f;g<_;g++)Sr.fromBufferAttribute(c,g),Oc(Sr,g,l,i,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,r=i.length;s<r;s++){const a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function Oc(o,e,t,n,i,s,r){const a=Ia.distanceSqToPoint(o);if(a<t){const l=new A;Ia.closestPointToPoint(o,l),l.applyMatrix4(n);const h=i.ray.origin.distanceTo(l);if(h<i.near||h>i.far)return;s.push({distance:h,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:r})}}class Hr extends Tt{constructor(e,t,n,i,s,r,a,l,h){super(e,t,n,i,s,r,a,l,h),this.isCanvasTexture=!0,this.needsUpdate=!0}}class wn{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){const n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let n,i=this.getPoint(0),s=0;t.push(0);for(let r=1;r<=e;r++)n=this.getPoint(r/e),s+=n.distanceTo(i),t.push(s),i=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){const n=this.getLengths();let i=0;const s=n.length;let r;t?r=t:r=e*n[s-1];let a=0,l=s-1,h;for(;a<=l;)if(i=Math.floor(a+(l-a)/2),h=n[i]-r,h<0)a=i+1;else if(h>0)l=i-1;else{l=i;break}if(i=l,n[i]===r)return i/(s-1);const u=n[i],d=n[i+1]-u,f=(r-u)/d;return(i+f)/(s-1)}getTangent(e,t){let i=e-1e-4,s=e+1e-4;i<0&&(i=0),s>1&&(s=1);const r=this.getPoint(i),a=this.getPoint(s),l=t||(r.isVector2?new se:new A);return l.copy(a).sub(r).normalize(),l}getTangentAt(e,t){const n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t){const n=new A,i=[],s=[],r=[],a=new A,l=new De;for(let f=0;f<=e;f++){const g=f/e;i[f]=this.getTangentAt(g,new A)}s[0]=new A,r[0]=new A;let h=Number.MAX_VALUE;const u=Math.abs(i[0].x),c=Math.abs(i[0].y),d=Math.abs(i[0].z);u<=h&&(h=u,n.set(1,0,0)),c<=h&&(h=c,n.set(0,1,0)),d<=h&&n.set(0,0,1),a.crossVectors(i[0],n).normalize(),s[0].crossVectors(i[0],a),r[0].crossVectors(i[0],s[0]);for(let f=1;f<=e;f++){if(s[f]=s[f-1].clone(),r[f]=r[f-1].clone(),a.crossVectors(i[f-1],i[f]),a.length()>Number.EPSILON){a.normalize();const g=Math.acos(Mt(i[f-1].dot(i[f]),-1,1));s[f].applyMatrix4(l.makeRotationAxis(a,g))}r[f].crossVectors(i[f],s[f])}if(t===!0){let f=Math.acos(Mt(s[0].dot(s[e]),-1,1));f/=e,i[0].dot(a.crossVectors(s[0],s[e]))>0&&(f=-f);for(let g=1;g<=e;g++)s[g].applyMatrix4(l.makeRotationAxis(i[g],f*g)),r[g].crossVectors(i[g],s[g])}return{tangents:i,normals:s,binormals:r}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class sl extends wn{constructor(e=0,t=0,n=1,i=1,s=0,r=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=i,this.aStartAngle=s,this.aEndAngle=r,this.aClockwise=a,this.aRotation=l}getPoint(e,t=new se){const n=t,i=Math.PI*2;let s=this.aEndAngle-this.aStartAngle;const r=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=i;for(;s>i;)s-=i;s<Number.EPSILON&&(r?s=0:s=i),this.aClockwise===!0&&!r&&(s===i?s=-i:s=s-i);const a=this.aStartAngle+e*s;let l=this.aX+this.xRadius*Math.cos(a),h=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const u=Math.cos(this.aRotation),c=Math.sin(this.aRotation),d=l-this.aX,f=h-this.aY;l=d*u-f*c+this.aX,h=d*c+f*u+this.aY}return n.set(l,h)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class F0 extends sl{constructor(e,t,n,i,s,r){super(e,t,n,n,i,s,r),this.isArcCurve=!0,this.type="ArcCurve"}}function rl(){let o=0,e=0,t=0,n=0;function i(s,r,a,l){o=s,e=a,t=-3*s+3*r-2*a-l,n=2*s-2*r+a+l}return{initCatmullRom:function(s,r,a,l,h){i(r,a,h*(a-s),h*(l-r))},initNonuniformCatmullRom:function(s,r,a,l,h,u,c){let d=(r-s)/h-(a-s)/(h+u)+(a-r)/u,f=(a-r)/u-(l-r)/(u+c)+(l-a)/c;d*=u,f*=u,i(r,a,d,f)},calc:function(s){const r=s*s,a=r*s;return o+e*s+t*r+n*a}}}const wr=new A,Lo=new rl,Do=new rl,Io=new rl;class O0 extends wn{constructor(e=[],t=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=i}getPoint(e,t=new A){const n=t,i=this.points,s=i.length,r=(s-(this.closed?0:1))*e;let a=Math.floor(r),l=r-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/s)+1)*s:l===0&&a===s-1&&(a=s-2,l=1);let h,u;this.closed||a>0?h=i[(a-1)%s]:(wr.subVectors(i[0],i[1]).add(i[0]),h=wr);const c=i[a%s],d=i[(a+1)%s];if(this.closed||a+2<s?u=i[(a+2)%s]:(wr.subVectors(i[s-1],i[s-2]).add(i[s-1]),u=wr),this.curveType==="centripetal"||this.curveType==="chordal"){const f=this.curveType==="chordal"?.5:.25;let g=Math.pow(h.distanceToSquared(c),f),_=Math.pow(c.distanceToSquared(d),f),m=Math.pow(d.distanceToSquared(u),f);_<1e-4&&(_=1),g<1e-4&&(g=_),m<1e-4&&(m=_),Lo.initNonuniformCatmullRom(h.x,c.x,d.x,u.x,g,_,m),Do.initNonuniformCatmullRom(h.y,c.y,d.y,u.y,g,_,m),Io.initNonuniformCatmullRom(h.z,c.z,d.z,u.z,g,_,m)}else this.curveType==="catmullrom"&&(Lo.initCatmullRom(h.x,c.x,d.x,u.x,this.tension),Do.initCatmullRom(h.y,c.y,d.y,u.y,this.tension),Io.initCatmullRom(h.z,c.z,d.z,u.z,this.tension));return n.set(Lo.calc(l),Do.calc(l),Io.calc(l)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(i.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const i=this.points[t];e.points.push(i.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(new A().fromArray(i))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function kc(o,e,t,n,i){const s=(n-e)*.5,r=(i-t)*.5,a=o*o,l=o*a;return(2*t-2*n+s+r)*l+(-3*t+3*n-2*s-r)*a+s*o+t}function k0(o,e){const t=1-o;return t*t*e}function z0(o,e){return 2*(1-o)*o*e}function G0(o,e){return o*o*e}function Ns(o,e,t,n){return k0(o,e)+z0(o,t)+G0(o,n)}function H0(o,e){const t=1-o;return t*t*t*e}function V0(o,e){const t=1-o;return 3*t*t*o*e}function W0(o,e){return 3*(1-o)*o*o*e}function X0(o,e){return o*o*o*e}function Us(o,e,t,n,i){return H0(o,e)+V0(o,t)+W0(o,n)+X0(o,i)}class $h extends wn{constructor(e=new se,t=new se,n=new se,i=new se){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new se){const n=t,i=this.v0,s=this.v1,r=this.v2,a=this.v3;return n.set(Us(e,i.x,s.x,r.x,a.x),Us(e,i.y,s.y,r.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class q0 extends wn{constructor(e=new A,t=new A,n=new A,i=new A){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new A){const n=t,i=this.v0,s=this.v1,r=this.v2,a=this.v3;return n.set(Us(e,i.x,s.x,r.x,a.x),Us(e,i.y,s.y,r.y,a.y),Us(e,i.z,s.z,r.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class Zh extends wn{constructor(e=new se,t=new se){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new se){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new se){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Y0 extends wn{constructor(e=new A,t=new A){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new A){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new A){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Jh extends wn{constructor(e=new se,t=new se,n=new se){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new se){const n=t,i=this.v0,s=this.v1,r=this.v2;return n.set(Ns(e,i.x,s.x,r.x),Ns(e,i.y,s.y,r.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class j0 extends wn{constructor(e=new A,t=new A,n=new A){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new A){const n=t,i=this.v0,s=this.v1,r=this.v2;return n.set(Ns(e,i.x,s.x,r.x),Ns(e,i.y,s.y,r.y),Ns(e,i.z,s.z,r.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Qh extends wn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new se){const n=t,i=this.points,s=(i.length-1)*e,r=Math.floor(s),a=s-r,l=i[r===0?r:r-1],h=i[r],u=i[r>i.length-2?i.length-1:r+1],c=i[r>i.length-3?i.length-1:r+2];return n.set(kc(a,l.x,h.x,u.x,c.x),kc(a,l.y,h.y,u.y,c.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(i.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const i=this.points[t];e.points.push(i.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(new se().fromArray(i))}return this}}var zc=Object.freeze({__proto__:null,ArcCurve:F0,CatmullRomCurve3:O0,CubicBezierCurve:$h,CubicBezierCurve3:q0,EllipseCurve:sl,LineCurve:Zh,LineCurve3:Y0,QuadraticBezierCurve:Jh,QuadraticBezierCurve3:j0,SplineCurve:Qh});class K0 extends wn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){const n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new zc[n](t,e))}return this}getPoint(e,t){const n=e*this.getLength(),i=this.getCurveLengths();let s=0;for(;s<i.length;){if(i[s]>=n){const r=i[s]-n,a=this.curves[s],l=a.getLength(),h=l===0?0:1-r/l;return a.getPointAt(h,t)}s++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let n=0,i=this.curves.length;n<i;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let n;for(let i=0,s=this.curves;i<s.length;i++){const r=s[i],a=r.isEllipseCurve?e*2:r.isLineCurve||r.isLineCurve3?1:r.isSplineCurve?e*r.points.length:e,l=r.getPoints(a);for(let h=0;h<l.length;h++){const u=l[h];n&&n.equals(u)||(t.push(u),n=u)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const i=e.curves[t];this.curves.push(i.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){const i=this.curves[t];e.curves.push(i.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const i=e.curves[t];this.curves.push(new zc[i.type]().fromJSON(i))}return this}}class $0 extends K0{constructor(e){super(),this.type="Path",this.currentPoint=new se,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){const n=new Zh(this.currentPoint.clone(),new se(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,i){const s=new Jh(this.currentPoint.clone(),new se(e,t),new se(n,i));return this.curves.push(s),this.currentPoint.set(n,i),this}bezierCurveTo(e,t,n,i,s,r){const a=new $h(this.currentPoint.clone(),new se(e,t),new se(n,i),new se(s,r));return this.curves.push(a),this.currentPoint.set(s,r),this}splineThru(e){const t=[this.currentPoint.clone()].concat(e),n=new Qh(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,i,s,r){const a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+a,t+l,n,i,s,r),this}absarc(e,t,n,i,s,r){return this.absellipse(e,t,n,n,i,s,r),this}ellipse(e,t,n,i,s,r,a,l){const h=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(e+h,t+u,n,i,s,r,a,l),this}absellipse(e,t,n,i,s,r,a,l){const h=new sl(e,t,n,i,s,r,a,l);if(this.curves.length>0){const c=h.getPoint(0);c.equals(this.currentPoint)||this.lineTo(c.x,c.y)}this.curves.push(h);const u=h.getPoint(1);return this.currentPoint.copy(u),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class ol extends xt{constructor(e=[new se(0,-.5),new se(.5,0),new se(0,.5)],t=12,n=0,i=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:n,phiLength:i},t=Math.floor(t),i=Mt(i,0,Math.PI*2);const s=[],r=[],a=[],l=[],h=[],u=1/t,c=new A,d=new se,f=new A,g=new A,_=new A;let m=0,p=0;for(let x=0;x<=e.length-1;x++)switch(x){case 0:m=e[x+1].x-e[x].x,p=e[x+1].y-e[x].y,f.x=p*1,f.y=-m,f.z=p*0,_.copy(f),f.normalize(),l.push(f.x,f.y,f.z);break;case e.length-1:l.push(_.x,_.y,_.z);break;default:m=e[x+1].x-e[x].x,p=e[x+1].y-e[x].y,f.x=p*1,f.y=-m,f.z=p*0,g.copy(f),f.x+=_.x,f.y+=_.y,f.z+=_.z,f.normalize(),l.push(f.x,f.y,f.z),_.copy(g)}for(let x=0;x<=t;x++){const M=n+x*u*i,v=Math.sin(M),P=Math.cos(M);for(let C=0;C<=e.length-1;C++){c.x=e[C].x*v,c.y=e[C].y,c.z=e[C].x*P,r.push(c.x,c.y,c.z),d.x=x/t,d.y=C/(e.length-1),a.push(d.x,d.y);const E=l[3*C+0]*v,L=l[3*C+1],w=l[3*C+0]*P;h.push(E,L,w)}}for(let x=0;x<t;x++)for(let M=0;M<e.length-1;M++){const v=M+x*e.length,P=v,C=v+e.length,E=v+e.length+1,L=v+1;s.push(P,C,L),s.push(E,L,C)}this.setIndex(s),this.setAttribute("position",new rt(r,3)),this.setAttribute("uv",new rt(a,2)),this.setAttribute("normal",new rt(h,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ol(e.points,e.segments,e.phiStart,e.phiLength)}}class al extends ol{constructor(e=1,t=1,n=4,i=8){const s=new $0;s.absarc(0,-t/2,e,Math.PI*1.5,0),s.absarc(0,t/2,e,0,Math.PI*.5),super(s.getPoints(n),i),this.type="CapsuleGeometry",this.parameters={radius:e,length:t,capSegments:n,radialSegments:i}}static fromJSON(e){return new al(e.radius,e.length,e.capSegments,e.radialSegments)}}class yn extends xt{constructor(e=1,t=1,n=1,i=32,s=1,r=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:i,heightSegments:s,openEnded:r,thetaStart:a,thetaLength:l};const h=this;i=Math.floor(i),s=Math.floor(s);const u=[],c=[],d=[],f=[];let g=0;const _=[],m=n/2;let p=0;x(),r===!1&&(e>0&&M(!0),t>0&&M(!1)),this.setIndex(u),this.setAttribute("position",new rt(c,3)),this.setAttribute("normal",new rt(d,3)),this.setAttribute("uv",new rt(f,2));function x(){const v=new A,P=new A;let C=0;const E=(t-e)/n;for(let L=0;L<=s;L++){const w=[],S=L/s,R=S*(t-e)+e;for(let D=0;D<=i;D++){const I=D/i,k=I*l+a,X=Math.sin(k),q=Math.cos(k);P.x=R*X,P.y=-S*n+m,P.z=R*q,c.push(P.x,P.y,P.z),v.set(X,E,q).normalize(),d.push(v.x,v.y,v.z),f.push(I,1-S),w.push(g++)}_.push(w)}for(let L=0;L<i;L++)for(let w=0;w<s;w++){const S=_[w][L],R=_[w+1][L],D=_[w+1][L+1],I=_[w][L+1];(e>0||w!==0)&&(u.push(S,R,I),C+=3),(t>0||w!==s-1)&&(u.push(R,D,I),C+=3)}h.addGroup(p,C,0),p+=C}function M(v){const P=g,C=new se,E=new A;let L=0;const w=v===!0?e:t,S=v===!0?1:-1;for(let D=1;D<=i;D++)c.push(0,m*S,0),d.push(0,S,0),f.push(.5,.5),g++;const R=g;for(let D=0;D<=i;D++){const k=D/i*l+a,X=Math.cos(k),q=Math.sin(k);E.x=w*q,E.y=m*S,E.z=w*X,c.push(E.x,E.y,E.z),d.push(0,S,0),C.x=X*.5+.5,C.y=q*.5*S+.5,f.push(C.x,C.y),g++}for(let D=0;D<i;D++){const I=P+D,k=R+D;v===!0?u.push(k,k+1,I):u.push(k+1,k,I),L+=3}h.addGroup(p,L,v===!0?1:2),p+=L}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new yn(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class ll extends xt{constructor(e=[],t=[],n=1,i=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:i};const s=[],r=[];a(i),h(n),u(),this.setAttribute("position",new rt(s,3)),this.setAttribute("normal",new rt(s.slice(),3)),this.setAttribute("uv",new rt(r,2)),i===0?this.computeVertexNormals():this.normalizeNormals();function a(x){const M=new A,v=new A,P=new A;for(let C=0;C<t.length;C+=3)f(t[C+0],M),f(t[C+1],v),f(t[C+2],P),l(M,v,P,x)}function l(x,M,v,P){const C=P+1,E=[];for(let L=0;L<=C;L++){E[L]=[];const w=x.clone().lerp(v,L/C),S=M.clone().lerp(v,L/C),R=C-L;for(let D=0;D<=R;D++)D===0&&L===C?E[L][D]=w:E[L][D]=w.clone().lerp(S,D/R)}for(let L=0;L<C;L++)for(let w=0;w<2*(C-L)-1;w++){const S=Math.floor(w/2);w%2===0?(d(E[L][S+1]),d(E[L+1][S]),d(E[L][S])):(d(E[L][S+1]),d(E[L+1][S+1]),d(E[L+1][S]))}}function h(x){const M=new A;for(let v=0;v<s.length;v+=3)M.x=s[v+0],M.y=s[v+1],M.z=s[v+2],M.normalize().multiplyScalar(x),s[v+0]=M.x,s[v+1]=M.y,s[v+2]=M.z}function u(){const x=new A;for(let M=0;M<s.length;M+=3){x.x=s[M+0],x.y=s[M+1],x.z=s[M+2];const v=m(x)/2/Math.PI+.5,P=p(x)/Math.PI+.5;r.push(v,1-P)}g(),c()}function c(){for(let x=0;x<r.length;x+=6){const M=r[x+0],v=r[x+2],P=r[x+4],C=Math.max(M,v,P),E=Math.min(M,v,P);C>.9&&E<.1&&(M<.2&&(r[x+0]+=1),v<.2&&(r[x+2]+=1),P<.2&&(r[x+4]+=1))}}function d(x){s.push(x.x,x.y,x.z)}function f(x,M){const v=x*3;M.x=e[v+0],M.y=e[v+1],M.z=e[v+2]}function g(){const x=new A,M=new A,v=new A,P=new A,C=new se,E=new se,L=new se;for(let w=0,S=0;w<s.length;w+=9,S+=6){x.set(s[w+0],s[w+1],s[w+2]),M.set(s[w+3],s[w+4],s[w+5]),v.set(s[w+6],s[w+7],s[w+8]),C.set(r[S+0],r[S+1]),E.set(r[S+2],r[S+3]),L.set(r[S+4],r[S+5]),P.copy(x).add(M).add(v).divideScalar(3);const R=m(P);_(C,S+0,x,R),_(E,S+2,M,R),_(L,S+4,v,R)}}function _(x,M,v,P){P<0&&x.x===1&&(r[M]=x.x-1),v.x===0&&v.z===0&&(r[M]=P/2/Math.PI+.5)}function m(x){return Math.atan2(x.z,-x.x)}function p(x){return Math.atan2(-x.y,Math.sqrt(x.x*x.x+x.z*x.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ll(e.vertices,e.indices,e.radius,e.details)}}class cl extends ll{constructor(e=1,t=0){const n=(1+Math.sqrt(5))/2,i=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],s=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(i,s,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new cl(e.radius,e.detail)}}class Ws extends xt{constructor(e=.5,t=1,n=32,i=1,s=0,r=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:i,thetaStart:s,thetaLength:r},n=Math.max(3,n),i=Math.max(1,i);const a=[],l=[],h=[],u=[];let c=e;const d=(t-e)/i,f=new A,g=new se;for(let _=0;_<=i;_++){for(let m=0;m<=n;m++){const p=s+m/n*r;f.x=c*Math.cos(p),f.y=c*Math.sin(p),l.push(f.x,f.y,f.z),h.push(0,0,1),g.x=(f.x/t+1)/2,g.y=(f.y/t+1)/2,u.push(g.x,g.y)}c+=d}for(let _=0;_<i;_++){const m=_*(n+1);for(let p=0;p<n;p++){const x=p+m,M=x,v=x+n+1,P=x+n+2,C=x+1;a.push(M,v,C),a.push(v,P,C)}}this.setIndex(a),this.setAttribute("position",new rt(l,3)),this.setAttribute("normal",new rt(h,3)),this.setAttribute("uv",new rt(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ws(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class rn extends xt{constructor(e=1,t=32,n=16,i=0,s=Math.PI*2,r=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:i,phiLength:s,thetaStart:r,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const l=Math.min(r+a,Math.PI);let h=0;const u=[],c=new A,d=new A,f=[],g=[],_=[],m=[];for(let p=0;p<=n;p++){const x=[],M=p/n;let v=0;p===0&&r===0?v=.5/t:p===n&&l===Math.PI&&(v=-.5/t);for(let P=0;P<=t;P++){const C=P/t;c.x=-e*Math.cos(i+C*s)*Math.sin(r+M*a),c.y=e*Math.cos(r+M*a),c.z=e*Math.sin(i+C*s)*Math.sin(r+M*a),g.push(c.x,c.y,c.z),d.copy(c).normalize(),_.push(d.x,d.y,d.z),m.push(C+v,1-M),x.push(h++)}u.push(x)}for(let p=0;p<n;p++)for(let x=0;x<t;x++){const M=u[p][x+1],v=u[p][x],P=u[p+1][x],C=u[p+1][x+1];(p!==0||r>0)&&f.push(M,v,C),(p!==n-1||l<Math.PI)&&f.push(v,P,C)}this.setIndex(f),this.setAttribute("position",new rt(g,3)),this.setAttribute("normal",new rt(_,3)),this.setAttribute("uv",new rt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new rn(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class hl extends xt{constructor(e=1,t=.4,n=12,i=48,s=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:i,arc:s},n=Math.floor(n),i=Math.floor(i);const r=[],a=[],l=[],h=[],u=new A,c=new A,d=new A;for(let f=0;f<=n;f++)for(let g=0;g<=i;g++){const _=g/i*s,m=f/n*Math.PI*2;c.x=(e+t*Math.cos(m))*Math.cos(_),c.y=(e+t*Math.cos(m))*Math.sin(_),c.z=t*Math.sin(m),a.push(c.x,c.y,c.z),u.x=e*Math.cos(_),u.y=e*Math.sin(_),d.subVectors(c,u).normalize(),l.push(d.x,d.y,d.z),h.push(g/i),h.push(f/n)}for(let f=1;f<=n;f++)for(let g=1;g<=i;g++){const _=(i+1)*f+g-1,m=(i+1)*(f-1)+g-1,p=(i+1)*(f-1)+g,x=(i+1)*f+g;r.push(_,m,x),r.push(m,p,x)}this.setIndex(r),this.setAttribute("position",new rt(a,3)),this.setAttribute("normal",new rt(l,3)),this.setAttribute("uv",new rt(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new hl(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class Z0 extends wt{static get type(){return"RawShaderMaterial"}constructor(e){super(e),this.isRawShaderMaterial=!0}}class dt extends pn{static get type(){return"MeshStandardMaterial"}constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new le(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new le(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Eh,this.normalScale=new se(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new mn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Tn extends dt{static get type(){return"MeshPhysicalMaterial"}constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new se(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Mt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new le(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new le(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new le(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}function Tr(o,e,t){return!o||!t&&o.constructor===e?o:typeof e.BYTES_PER_ELEMENT=="number"?new e(o):Array.prototype.slice.call(o)}function J0(o){return ArrayBuffer.isView(o)&&!(o instanceof DataView)}function Q0(o){function e(i,s){return o[i]-o[s]}const t=o.length,n=new Array(t);for(let i=0;i!==t;++i)n[i]=i;return n.sort(e),n}function Gc(o,e,t){const n=o.length,i=new o.constructor(n);for(let s=0,r=0;r!==n;++s){const a=t[s]*e;for(let l=0;l!==e;++l)i[r++]=o[a+l]}return i}function eu(o,e,t,n){let i=1,s=o[0];for(;s!==void 0&&s[n]===void 0;)s=o[i++];if(s===void 0)return;let r=s[n];if(r!==void 0)if(Array.isArray(r))do r=s[n],r!==void 0&&(e.push(s.time),t.push.apply(t,r)),s=o[i++];while(s!==void 0);else if(r.toArray!==void 0)do r=s[n],r!==void 0&&(e.push(s.time),r.toArray(t,t.length)),s=o[i++];while(s!==void 0);else do r=s[n],r!==void 0&&(e.push(s.time),t.push(r)),s=o[i++];while(s!==void 0)}class Xs{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let n=this._cachedIndex,i=t[n],s=t[n-1];e:{t:{let r;n:{i:if(!(e<i)){for(let a=n+2;;){if(i===void 0){if(e<s)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(s=i,i=t[++n],e<i)break t}r=t.length;break n}if(!(e>=s)){const a=t[1];e<a&&(n=2,s=a);for(let l=n-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(i=s,s=t[--n-1],e>=s)break t}r=n,n=0;break n}break e}for(;n<r;){const a=n+r>>>1;e<t[a]?r=a:n=a+1}if(i=t[n],s=t[n-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,s,i)}return this.interpolate_(n,s,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,s=e*i;for(let r=0;r!==i;++r)t[r]=n[s+r];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class e_ extends Xs{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Xi,endingEnd:Xi}}intervalChanged_(e,t,n){const i=this.parameterPositions;let s=e-2,r=e+1,a=i[s],l=i[r];if(a===void 0)switch(this.getSettings_().endingStart){case qi:s=e,a=2*t-n;break;case Or:s=i.length-2,a=t+i[s]-i[s+1];break;default:s=e,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case qi:r=e,l=2*n-t;break;case Or:r=1,l=n+i[1]-i[0];break;default:r=e-1,l=t}const h=(n-t)*.5,u=this.valueSize;this._weightPrev=h/(t-a),this._weightNext=h/(l-n),this._offsetPrev=s*u,this._offsetNext=r*u}interpolate_(e,t,n,i){const s=this.resultBuffer,r=this.sampleValues,a=this.valueSize,l=e*a,h=l-a,u=this._offsetPrev,c=this._offsetNext,d=this._weightPrev,f=this._weightNext,g=(n-t)/(i-t),_=g*g,m=_*g,p=-d*m+2*d*_-d*g,x=(1+d)*m+(-1.5-2*d)*_+(-.5+d)*g+1,M=(-1-f)*m+(1.5+f)*_+.5*g,v=f*m-f*_;for(let P=0;P!==a;++P)s[P]=p*r[u+P]+x*r[h+P]+M*r[l+P]+v*r[c+P];return s}}class tu extends Xs{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const s=this.resultBuffer,r=this.sampleValues,a=this.valueSize,l=e*a,h=l-a,u=(n-t)/(i-t),c=1-u;for(let d=0;d!==a;++d)s[d]=r[h+d]*c+r[l+d]*u;return s}}class t_ extends Xs{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}}class bn{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Tr(t,this.TimeBufferType),this.values=Tr(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Tr(e.times,Array),values:Tr(e.values,Array)};const i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new t_(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new tu(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new e_(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Os:t=this.InterpolantFactoryMethodDiscrete;break;case ks:t=this.InterpolantFactoryMethodLinear;break;case Jr:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Os;case this.InterpolantFactoryMethodLinear:return ks;case this.InterpolantFactoryMethodSmooth:return Jr}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e}return this}trim(e,t){const n=this.times,i=n.length;let s=0,r=i-1;for(;s!==i&&n[s]<e;)++s;for(;r!==-1&&n[r]>t;)--r;if(++r,s!==0||r!==i){s>=r&&(r=Math.max(r,1),s=r-1);const a=this.getValueSize();this.times=n.slice(s,r),this.values=this.values.slice(s*a,r*a)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const n=this.times,i=this.values,s=n.length;s===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let r=null;for(let a=0;a!==s;a++){const l=n[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(r!==null&&r>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,r),e=!1;break}r=l}if(i!==void 0&&J0(i))for(let a=0,l=i.length;a!==l;++a){const h=i[a];if(isNaN(h)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,h),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===Jr,s=e.length-1;let r=1;for(let a=1;a<s;++a){let l=!1;const h=e[a],u=e[a+1];if(h!==u&&(a!==1||h!==e[0]))if(i)l=!0;else{const c=a*n,d=c-n,f=c+n;for(let g=0;g!==n;++g){const _=t[c+g];if(_!==t[d+g]||_!==t[f+g]){l=!0;break}}}if(l){if(a!==r){e[r]=e[a];const c=a*n,d=r*n;for(let f=0;f!==n;++f)t[d+f]=t[c+f]}++r}}if(s>0){e[r]=e[s];for(let a=s*n,l=r*n,h=0;h!==n;++h)t[l+h]=t[a+h];++r}return r!==e.length?(this.times=e.slice(0,r),this.values=t.slice(0,r*n)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),n=this.constructor,i=new n(this.name,e,t);return i.createInterpolant=this.createInterpolant,i}}bn.prototype.TimeBufferType=Float32Array;bn.prototype.ValueBufferType=Float32Array;bn.prototype.DefaultInterpolation=ks;class us extends bn{constructor(e,t,n){super(e,t,n)}}us.prototype.ValueTypeName="bool";us.prototype.ValueBufferType=Array;us.prototype.DefaultInterpolation=Os;us.prototype.InterpolantFactoryMethodLinear=void 0;us.prototype.InterpolantFactoryMethodSmooth=void 0;class nu extends bn{}nu.prototype.ValueTypeName="color";class os extends bn{}os.prototype.ValueTypeName="number";class n_ extends Xs{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const s=this.resultBuffer,r=this.sampleValues,a=this.valueSize,l=(n-t)/(i-t);let h=e*a;for(let u=h+a;h!==u;h+=4)sn.slerpFlat(s,0,r,h-a,r,h,l);return s}}class as extends bn{InterpolantFactoryMethodLinear(e){return new n_(this.times,this.values,this.getValueSize(),e)}}as.prototype.ValueTypeName="quaternion";as.prototype.InterpolantFactoryMethodSmooth=void 0;class ds extends bn{constructor(e,t,n){super(e,t,n)}}ds.prototype.ValueTypeName="string";ds.prototype.ValueBufferType=Array;ds.prototype.DefaultInterpolation=Os;ds.prototype.InterpolantFactoryMethodLinear=void 0;ds.prototype.InterpolantFactoryMethodSmooth=void 0;class ls extends bn{}ls.prototype.ValueTypeName="vector";class Na{constructor(e="",t=-1,n=[],i=$a){this.name=e,this.tracks=n,this.duration=t,this.blendMode=i,this.uuid=fn(),this.duration<0&&this.resetDuration()}static parse(e){const t=[],n=e.tracks,i=1/(e.fps||1);for(let r=0,a=n.length;r!==a;++r)t.push(s_(n[r]).scale(i));const s=new this(e.name,e.duration,t,e.blendMode);return s.uuid=e.uuid,s}static toJSON(e){const t=[],n=e.tracks,i={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let s=0,r=n.length;s!==r;++s)t.push(bn.toJSON(n[s]));return i}static CreateFromMorphTargetSequence(e,t,n,i){const s=t.length,r=[];for(let a=0;a<s;a++){let l=[],h=[];l.push((a+s-1)%s,a,(a+1)%s),h.push(0,1,0);const u=Q0(l);l=Gc(l,1,u),h=Gc(h,1,u),!i&&l[0]===0&&(l.push(s),h.push(h[0])),r.push(new os(".morphTargetInfluences["+t[a].name+"]",l,h).scale(1/n))}return new this(e,-1,r)}static findByName(e,t){let n=e;if(!Array.isArray(e)){const i=e;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===t)return n[i];return null}static CreateClipsFromMorphTargetSequences(e,t,n){const i={},s=/^([\w-]*?)([\d]+)$/;for(let a=0,l=e.length;a<l;a++){const h=e[a],u=h.name.match(s);if(u&&u.length>1){const c=u[1];let d=i[c];d||(i[c]=d=[]),d.push(h)}}const r=[];for(const a in i)r.push(this.CreateFromMorphTargetSequence(a,i[a],t,n));return r}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const n=function(c,d,f,g,_){if(f.length!==0){const m=[],p=[];eu(f,m,p,g),m.length!==0&&_.push(new c(d,m,p))}},i=[],s=e.name||"default",r=e.fps||30,a=e.blendMode;let l=e.length||-1;const h=e.hierarchy||[];for(let c=0;c<h.length;c++){const d=h[c].keys;if(!(!d||d.length===0))if(d[0].morphTargets){const f={};let g;for(g=0;g<d.length;g++)if(d[g].morphTargets)for(let _=0;_<d[g].morphTargets.length;_++)f[d[g].morphTargets[_]]=-1;for(const _ in f){const m=[],p=[];for(let x=0;x!==d[g].morphTargets.length;++x){const M=d[g];m.push(M.time),p.push(M.morphTarget===_?1:0)}i.push(new os(".morphTargetInfluence["+_+"]",m,p))}l=f.length*r}else{const f=".bones["+t[c].name+"]";n(ls,f+".position",d,"pos",i),n(as,f+".quaternion",d,"rot",i),n(ls,f+".scale",d,"scl",i)}}return i.length===0?null:new this(s,l,i,a)}resetDuration(){const e=this.tracks;let t=0;for(let n=0,i=e.length;n!==i;++n){const s=this.tracks[n];t=Math.max(t,s.times[s.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function i_(o){switch(o.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return os;case"vector":case"vector2":case"vector3":case"vector4":return ls;case"color":return nu;case"quaternion":return as;case"bool":case"boolean":return us;case"string":return ds}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+o)}function s_(o){if(o.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=i_(o.type);if(o.times===void 0){const t=[],n=[];eu(o.keys,t,n,"value"),o.times=t,o.values=n}return e.parse!==void 0?e.parse(o):new e(o.name,o.times,o.values,o.interpolation)}const si={enabled:!1,files:{},add:function(o,e){this.enabled!==!1&&(this.files[o]=e)},get:function(o){if(this.enabled!==!1)return this.files[o]},remove:function(o){delete this.files[o]},clear:function(){this.files={}}};class r_{constructor(e,t,n){const i=this;let s=!1,r=0,a=0,l;const h=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(u){a++,s===!1&&i.onStart!==void 0&&i.onStart(u,r,a),s=!0},this.itemEnd=function(u){r++,i.onProgress!==void 0&&i.onProgress(u,r,a),r===a&&(s=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(u){i.onError!==void 0&&i.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,c){return h.push(u,c),this},this.removeHandler=function(u){const c=h.indexOf(u);return c!==-1&&h.splice(c,2),this},this.getHandler=function(u){for(let c=0,d=h.length;c<d;c+=2){const f=h[c],g=h[c+1];if(f.global&&(f.lastIndex=0),f.test(u))return g}return null}}}const Ua=new r_;class fs{constructor(e){this.manager=e!==void 0?e:Ua,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(i,s){n.load(e,i,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}fs.DEFAULT_MATERIAL_NAME="__DEFAULT";const In={};class o_ extends Error{constructor(e,t){super(e),this.response=t}}class iu extends fs{constructor(e){super(e)}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=si.get(e);if(s!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(s),this.manager.itemEnd(e)},0),s;if(In[e]!==void 0){In[e].push({onLoad:t,onProgress:n,onError:i});return}In[e]=[],In[e].push({onLoad:t,onProgress:n,onError:i});const r=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,l=this.responseType;fetch(r).then(h=>{if(h.status===200||h.status===0){if(h.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||h.body===void 0||h.body.getReader===void 0)return h;const u=In[e],c=h.body.getReader(),d=h.headers.get("X-File-Size")||h.headers.get("Content-Length"),f=d?parseInt(d):0,g=f!==0;let _=0;const m=new ReadableStream({start(p){x();function x(){c.read().then(({done:M,value:v})=>{if(M)p.close();else{_+=v.byteLength;const P=new ProgressEvent("progress",{lengthComputable:g,loaded:_,total:f});for(let C=0,E=u.length;C<E;C++){const L=u[C];L.onProgress&&L.onProgress(P)}p.enqueue(v),x()}},M=>{p.error(M)})}}});return new Response(m)}else throw new o_(`fetch for "${h.url}" responded with ${h.status}: ${h.statusText}`,h)}).then(h=>{switch(l){case"arraybuffer":return h.arrayBuffer();case"blob":return h.blob();case"document":return h.text().then(u=>new DOMParser().parseFromString(u,a));case"json":return h.json();default:if(a===void 0)return h.text();{const c=/charset="?([^;"\s]*)"?/i.exec(a),d=c&&c[1]?c[1].toLowerCase():void 0,f=new TextDecoder(d);return h.arrayBuffer().then(g=>f.decode(g))}}}).then(h=>{si.add(e,h);const u=In[e];delete In[e];for(let c=0,d=u.length;c<d;c++){const f=u[c];f.onLoad&&f.onLoad(h)}}).catch(h=>{const u=In[e];if(u===void 0)throw this.manager.itemError(e),h;delete In[e];for(let c=0,d=u.length;c<d;c++){const f=u[c];f.onError&&f.onError(h)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class a_ extends fs{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,r=si.get(e);if(r!==void 0)return s.manager.itemStart(e),setTimeout(function(){t&&t(r),s.manager.itemEnd(e)},0),r;const a=zs("img");function l(){u(),si.add(e,this),t&&t(this),s.manager.itemEnd(e)}function h(c){u(),i&&i(c),s.manager.itemError(e),s.manager.itemEnd(e)}function u(){a.removeEventListener("load",l,!1),a.removeEventListener("error",h,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",h,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),s.manager.itemStart(e),a.src=e,a}}class su extends fs{constructor(e){super(e)}load(e,t,n,i){const s=new Tt,r=new a_(this.manager);return r.setCrossOrigin(this.crossOrigin),r.setPath(this.path),r.load(e,function(a){s.image=a,s.needsUpdate=!0,t!==void 0&&t(s)},n,i),s}}class Kr extends lt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new le(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}class l_ extends Kr{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(lt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new le(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const No=new De,Hc=new A,Vc=new A;class ul{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new se(512,512),this.map=null,this.mapPass=null,this.matrix=new De,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Qa,this._frameExtents=new se(1,1),this._viewportCount=1,this._viewports=[new Ze(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;Hc.setFromMatrixPosition(e.matrixWorld),t.position.copy(Hc),Vc.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Vc),t.updateMatrixWorld(),No.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(No),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(No)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class c_ extends ul{constructor(){super(new Ot(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){const t=this.camera,n=ss*2*e.angle*this.focus,i=this.mapSize.width/this.mapSize.height,s=e.distance||t.far;(n!==t.fov||i!==t.aspect||s!==t.far)&&(t.fov=n,t.aspect=i,t.far=s,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class h_ extends Kr{constructor(e,t,n=0,i=Math.PI/3,s=0,r=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(lt.DEFAULT_UP),this.updateMatrix(),this.target=new lt,this.distance=n,this.angle=i,this.penumbra=s,this.decay=r,this.map=null,this.shadow=new c_}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const Wc=new De,As=new A,Uo=new A;class u_ extends ul{constructor(){super(new Ot(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new se(4,2),this._viewportCount=6,this._viewports=[new Ze(2,1,1,1),new Ze(0,1,1,1),new Ze(3,1,1,1),new Ze(1,1,1,1),new Ze(3,0,1,1),new Ze(1,0,1,1)],this._cubeDirections=[new A(1,0,0),new A(-1,0,0),new A(0,0,1),new A(0,0,-1),new A(0,1,0),new A(0,-1,0)],this._cubeUps=[new A(0,1,0),new A(0,1,0),new A(0,1,0),new A(0,1,0),new A(0,0,1),new A(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,i=this.matrix,s=e.distance||n.far;s!==n.far&&(n.far=s,n.updateProjectionMatrix()),As.setFromMatrixPosition(e.matrixWorld),n.position.copy(As),Uo.copy(n.position),Uo.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(Uo),n.updateMatrixWorld(),i.makeTranslation(-As.x,-As.y,-As.z),Wc.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Wc)}}class ru extends Kr{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new u_}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class d_ extends ul{constructor(){super(new qr(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Ba extends Kr{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(lt.DEFAULT_UP),this.updateMatrix(),this.target=new lt,this.shadow=new d_}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class Bs{static decodeText(e){if(console.warn("THREE.LoaderUtils: decodeText() has been deprecated with r165 and will be removed with r175. Use TextDecoder instead."),typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let n=0,i=e.length;n<i;n++)t+=String.fromCharCode(e[n]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}class f_ extends fs{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,r=si.get(e);if(r!==void 0){if(s.manager.itemStart(e),r.then){r.then(h=>{t&&t(h),s.manager.itemEnd(e)}).catch(h=>{i&&i(h)});return}return setTimeout(function(){t&&t(r),s.manager.itemEnd(e)},0),r}const a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader;const l=fetch(e,a).then(function(h){return h.blob()}).then(function(h){return createImageBitmap(h,Object.assign(s.options,{colorSpaceConversion:"none"}))}).then(function(h){return si.add(e,h),t&&t(h),s.manager.itemEnd(e),h}).catch(function(h){i&&i(h),si.remove(e),s.manager.itemError(e),s.manager.itemEnd(e)});si.add(e,l),s.manager.itemStart(e)}}class p_{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Xc(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=Xc();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function Xc(){return performance.now()}class m_{constructor(e,t,n){this.binding=e,this.valueSize=n;let i,s,r;switch(t){case"quaternion":i=this._slerp,s=this._slerpAdditive,r=this._setAdditiveIdentityQuaternion,this.buffer=new Float64Array(n*6),this._workIndex=5;break;case"string":case"bool":i=this._select,s=this._select,r=this._setAdditiveIdentityOther,this.buffer=new Array(n*5);break;default:i=this._lerp,s=this._lerpAdditive,r=this._setAdditiveIdentityNumeric,this.buffer=new Float64Array(n*5)}this._mixBufferRegion=i,this._mixBufferRegionAdditive=s,this._setIdentity=r,this._origIndex=3,this._addIndex=4,this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,this.useCount=0,this.referenceCount=0}accumulate(e,t){const n=this.buffer,i=this.valueSize,s=e*i+i;let r=this.cumulativeWeight;if(r===0){for(let a=0;a!==i;++a)n[s+a]=n[a];r=t}else{r+=t;const a=t/r;this._mixBufferRegion(n,s,0,a,i)}this.cumulativeWeight=r}accumulateAdditive(e){const t=this.buffer,n=this.valueSize,i=n*this._addIndex;this.cumulativeWeightAdditive===0&&this._setIdentity(),this._mixBufferRegionAdditive(t,i,0,e,n),this.cumulativeWeightAdditive+=e}apply(e){const t=this.valueSize,n=this.buffer,i=e*t+t,s=this.cumulativeWeight,r=this.cumulativeWeightAdditive,a=this.binding;if(this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,s<1){const l=t*this._origIndex;this._mixBufferRegion(n,i,l,1-s,t)}r>0&&this._mixBufferRegionAdditive(n,i,this._addIndex*t,1,t);for(let l=t,h=t+t;l!==h;++l)if(n[l]!==n[l+t]){a.setValue(n,i);break}}saveOriginalState(){const e=this.binding,t=this.buffer,n=this.valueSize,i=n*this._origIndex;e.getValue(t,i);for(let s=n,r=i;s!==r;++s)t[s]=t[i+s%n];this._setIdentity(),this.cumulativeWeight=0,this.cumulativeWeightAdditive=0}restoreOriginalState(){const e=this.valueSize*3;this.binding.setValue(this.buffer,e)}_setAdditiveIdentityNumeric(){const e=this._addIndex*this.valueSize,t=e+this.valueSize;for(let n=e;n<t;n++)this.buffer[n]=0}_setAdditiveIdentityQuaternion(){this._setAdditiveIdentityNumeric(),this.buffer[this._addIndex*this.valueSize+3]=1}_setAdditiveIdentityOther(){const e=this._origIndex*this.valueSize,t=this._addIndex*this.valueSize;for(let n=0;n<this.valueSize;n++)this.buffer[t+n]=this.buffer[e+n]}_select(e,t,n,i,s){if(i>=.5)for(let r=0;r!==s;++r)e[t+r]=e[n+r]}_slerp(e,t,n,i){sn.slerpFlat(e,t,e,t,e,n,i)}_slerpAdditive(e,t,n,i,s){const r=this._workIndex*s;sn.multiplyQuaternionsFlat(e,r,e,t,e,n),sn.slerpFlat(e,t,e,t,e,r,i)}_lerp(e,t,n,i,s){const r=1-i;for(let a=0;a!==s;++a){const l=t+a;e[l]=e[l]*r+e[n+a]*i}}_lerpAdditive(e,t,n,i,s){for(let r=0;r!==s;++r){const a=t+r;e[a]=e[a]+e[n+r]*i}}}const dl="\\[\\]\\.:\\/",g_=new RegExp("["+dl+"]","g"),fl="[^"+dl+"]",__="[^"+dl.replace("\\.","")+"]",v_=/((?:WC+[\/:])*)/.source.replace("WC",fl),x_=/(WCOD+)?/.source.replace("WCOD",__),y_=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",fl),M_=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",fl),S_=new RegExp("^"+v_+x_+y_+M_+"$"),w_=["material","materials","bones","map"];class T_{constructor(e,t,n){const i=n||et.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();const n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(e,t)}setValue(e,t){const n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,s=n.length;i!==s;++i)n[i].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}}class et{constructor(e,t,n){this.path=t,this.parsedPath=n||et.parseTrackName(t),this.node=et.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new et.Composite(e,t,n):new et(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(g_,"")}static parseTrackName(e){const t=S_.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){const s=n.nodeName.substring(i+1);w_.indexOf(s)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=s)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){const n=function(s){for(let r=0;r<s.length;r++){const a=s[r];if(a.name===t||a.uuid===t)return a;const l=n(a.children);if(l)return l}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,n=t.objectName,i=t.propertyName;let s=t.propertyIndex;if(e||(e=et.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let h=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===h){h=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(h!==void 0){if(e[h]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[h]}}const r=e[i];if(r===void 0){const h=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+h+"."+i+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(s!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[s]!==void 0&&(s=e.morphTargetDictionary[s])}l=this.BindingType.ArrayElement,this.resolvedProperty=r,this.propertyIndex=s}else r.fromArray!==void 0&&r.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=r):Array.isArray(r)?(l=this.BindingType.EntireArray,this.resolvedProperty=r):this.propertyName=i;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}et.Composite=T_;et.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};et.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};et.prototype.GetterByBindingType=[et.prototype._getValue_direct,et.prototype._getValue_array,et.prototype._getValue_arrayElement,et.prototype._getValue_toArray];et.prototype.SetterByBindingTypeAndVersioning=[[et.prototype._setValue_direct,et.prototype._setValue_direct_setNeedsUpdate,et.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[et.prototype._setValue_array,et.prototype._setValue_array_setNeedsUpdate,et.prototype._setValue_array_setMatrixWorldNeedsUpdate],[et.prototype._setValue_arrayElement,et.prototype._setValue_arrayElement_setNeedsUpdate,et.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[et.prototype._setValue_fromArray,et.prototype._setValue_fromArray_setNeedsUpdate,et.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class b_{constructor(e,t,n=null,i=t.blendMode){this._mixer=e,this._clip=t,this._localRoot=n,this.blendMode=i;const s=t.tracks,r=s.length,a=new Array(r),l={endingStart:Xi,endingEnd:Xi};for(let h=0;h!==r;++h){const u=s[h].createInterpolant(null);a[h]=u,u.settings=l}this._interpolantSettings=l,this._interpolants=a,this._propertyBindings=new Array(r),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._weightInterpolant=null,this.loop=zu,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=1/0,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0}play(){return this._mixer._activateAction(this),this}stop(){return this._mixer._deactivateAction(this),this.reset()}reset(){return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()}isRunning(){return this.enabled&&!this.paused&&this.timeScale!==0&&this._startTime===null&&this._mixer._isActiveAction(this)}isScheduled(){return this._mixer._isActiveAction(this)}startAt(e){return this._startTime=e,this}setLoop(e,t){return this.loop=e,this.repetitions=t,this}setEffectiveWeight(e){return this.weight=e,this._effectiveWeight=this.enabled?e:0,this.stopFading()}getEffectiveWeight(){return this._effectiveWeight}fadeIn(e){return this._scheduleFading(e,0,1)}fadeOut(e){return this._scheduleFading(e,1,0)}crossFadeFrom(e,t,n){if(e.fadeOut(t),this.fadeIn(t),n){const i=this._clip.duration,s=e._clip.duration,r=s/i,a=i/s;e.warp(1,r,t),this.warp(a,1,t)}return this}crossFadeTo(e,t,n){return e.crossFadeFrom(this,t,n)}stopFading(){const e=this._weightInterpolant;return e!==null&&(this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}setEffectiveTimeScale(e){return this.timeScale=e,this._effectiveTimeScale=this.paused?0:e,this.stopWarping()}getEffectiveTimeScale(){return this._effectiveTimeScale}setDuration(e){return this.timeScale=this._clip.duration/e,this.stopWarping()}syncWith(e){return this.time=e.time,this.timeScale=e.timeScale,this.stopWarping()}halt(e){return this.warp(this._effectiveTimeScale,0,e)}warp(e,t,n){const i=this._mixer,s=i.time,r=this.timeScale;let a=this._timeScaleInterpolant;a===null&&(a=i._lendControlInterpolant(),this._timeScaleInterpolant=a);const l=a.parameterPositions,h=a.sampleValues;return l[0]=s,l[1]=s+n,h[0]=e/r,h[1]=t/r,this}stopWarping(){const e=this._timeScaleInterpolant;return e!==null&&(this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}getMixer(){return this._mixer}getClip(){return this._clip}getRoot(){return this._localRoot||this._mixer._root}_update(e,t,n,i){if(!this.enabled){this._updateWeight(e);return}const s=this._startTime;if(s!==null){const l=(e-s)*n;l<0||n===0?t=0:(this._startTime=null,t=n*l)}t*=this._updateTimeScale(e);const r=this._updateTime(t),a=this._updateWeight(e);if(a>0){const l=this._interpolants,h=this._propertyBindings;switch(this.blendMode){case Hu:for(let u=0,c=l.length;u!==c;++u)l[u].evaluate(r),h[u].accumulateAdditive(a);break;case $a:default:for(let u=0,c=l.length;u!==c;++u)l[u].evaluate(r),h[u].accumulate(i,a)}}}_updateWeight(e){let t=0;if(this.enabled){t=this.weight;const n=this._weightInterpolant;if(n!==null){const i=n.evaluate(e)[0];t*=i,e>n.parameterPositions[1]&&(this.stopFading(),i===0&&(this.enabled=!1))}}return this._effectiveWeight=t,t}_updateTimeScale(e){let t=0;if(!this.paused){t=this.timeScale;const n=this._timeScaleInterpolant;if(n!==null){const i=n.evaluate(e)[0];t*=i,e>n.parameterPositions[1]&&(this.stopWarping(),t===0?this.paused=!0:this.timeScale=t)}}return this._effectiveTimeScale=t,t}_updateTime(e){const t=this._clip.duration,n=this.loop;let i=this.time+e,s=this._loopCount;const r=n===Gu;if(e===0)return s===-1?i:r&&(s&1)===1?t-i:i;if(n===ku){s===-1&&(this._loopCount=0,this._setEndings(!0,!0,!1));e:{if(i>=t)i=t;else if(i<0)i=0;else{this.time=i;break e}this.clampWhenFinished?this.paused=!0:this.enabled=!1,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:e<0?-1:1})}}else{if(s===-1&&(e>=0?(s=0,this._setEndings(!0,this.repetitions===0,r)):this._setEndings(this.repetitions===0,!0,r)),i>=t||i<0){const a=Math.floor(i/t);i-=t*a,s+=Math.abs(a);const l=this.repetitions-s;if(l<=0)this.clampWhenFinished?this.paused=!0:this.enabled=!1,i=e>0?t:0,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:e>0?1:-1});else{if(l===1){const h=e<0;this._setEndings(h,!h,r)}else this._setEndings(!1,!1,r);this._loopCount=s,this.time=i,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:a})}}else this.time=i;if(r&&(s&1)===1)return t-i}return i}_setEndings(e,t,n){const i=this._interpolantSettings;n?(i.endingStart=qi,i.endingEnd=qi):(e?i.endingStart=this.zeroSlopeAtStart?qi:Xi:i.endingStart=Or,t?i.endingEnd=this.zeroSlopeAtEnd?qi:Xi:i.endingEnd=Or)}_scheduleFading(e,t,n){const i=this._mixer,s=i.time;let r=this._weightInterpolant;r===null&&(r=i._lendControlInterpolant(),this._weightInterpolant=r);const a=r.parameterPositions,l=r.sampleValues;return a[0]=s,l[0]=t,a[1]=s+e,l[1]=n,this}}const E_=new Float32Array(1);class ji extends wi{constructor(e){super(),this._root=e,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1}_bindAction(e,t){const n=e._localRoot||this._root,i=e._clip.tracks,s=i.length,r=e._propertyBindings,a=e._interpolants,l=n.uuid,h=this._bindingsByRootAndName;let u=h[l];u===void 0&&(u={},h[l]=u);for(let c=0;c!==s;++c){const d=i[c],f=d.name;let g=u[f];if(g!==void 0)++g.referenceCount,r[c]=g;else{if(g=r[c],g!==void 0){g._cacheIndex===null&&(++g.referenceCount,this._addInactiveBinding(g,l,f));continue}const _=t&&t._propertyBindings[c].binding.parsedPath;g=new m_(et.create(n,f,_),d.ValueTypeName,d.getValueSize()),++g.referenceCount,this._addInactiveBinding(g,l,f),r[c]=g}a[c].resultBuffer=g.buffer}}_activateAction(e){if(!this._isActiveAction(e)){if(e._cacheIndex===null){const n=(e._localRoot||this._root).uuid,i=e._clip.uuid,s=this._actionsByClip[i];this._bindAction(e,s&&s.knownActions[0]),this._addInactiveAction(e,i,n)}const t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){const s=t[n];s.useCount++===0&&(this._lendBinding(s),s.saveOriginalState())}this._lendAction(e)}}_deactivateAction(e){if(this._isActiveAction(e)){const t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){const s=t[n];--s.useCount===0&&(s.restoreOriginalState(),this._takeBackBinding(s))}this._takeBackAction(e)}}_initMemoryManager(){this._actions=[],this._nActiveActions=0,this._actionsByClip={},this._bindings=[],this._nActiveBindings=0,this._bindingsByRootAndName={},this._controlInterpolants=[],this._nActiveControlInterpolants=0;const e=this;this.stats={actions:{get total(){return e._actions.length},get inUse(){return e._nActiveActions}},bindings:{get total(){return e._bindings.length},get inUse(){return e._nActiveBindings}},controlInterpolants:{get total(){return e._controlInterpolants.length},get inUse(){return e._nActiveControlInterpolants}}}}_isActiveAction(e){const t=e._cacheIndex;return t!==null&&t<this._nActiveActions}_addInactiveAction(e,t,n){const i=this._actions,s=this._actionsByClip;let r=s[t];if(r===void 0)r={knownActions:[e],actionByRoot:{}},e._byClipCacheIndex=0,s[t]=r;else{const a=r.knownActions;e._byClipCacheIndex=a.length,a.push(e)}e._cacheIndex=i.length,i.push(e),r.actionByRoot[n]=e}_removeInactiveAction(e){const t=this._actions,n=t[t.length-1],i=e._cacheIndex;n._cacheIndex=i,t[i]=n,t.pop(),e._cacheIndex=null;const s=e._clip.uuid,r=this._actionsByClip,a=r[s],l=a.knownActions,h=l[l.length-1],u=e._byClipCacheIndex;h._byClipCacheIndex=u,l[u]=h,l.pop(),e._byClipCacheIndex=null;const c=a.actionByRoot,d=(e._localRoot||this._root).uuid;delete c[d],l.length===0&&delete r[s],this._removeInactiveBindingsForAction(e)}_removeInactiveBindingsForAction(e){const t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){const s=t[n];--s.referenceCount===0&&this._removeInactiveBinding(s)}}_lendAction(e){const t=this._actions,n=e._cacheIndex,i=this._nActiveActions++,s=t[i];e._cacheIndex=i,t[i]=e,s._cacheIndex=n,t[n]=s}_takeBackAction(e){const t=this._actions,n=e._cacheIndex,i=--this._nActiveActions,s=t[i];e._cacheIndex=i,t[i]=e,s._cacheIndex=n,t[n]=s}_addInactiveBinding(e,t,n){const i=this._bindingsByRootAndName,s=this._bindings;let r=i[t];r===void 0&&(r={},i[t]=r),r[n]=e,e._cacheIndex=s.length,s.push(e)}_removeInactiveBinding(e){const t=this._bindings,n=e.binding,i=n.rootNode.uuid,s=n.path,r=this._bindingsByRootAndName,a=r[i],l=t[t.length-1],h=e._cacheIndex;l._cacheIndex=h,t[h]=l,t.pop(),delete a[s],Object.keys(a).length===0&&delete r[i]}_lendBinding(e){const t=this._bindings,n=e._cacheIndex,i=this._nActiveBindings++,s=t[i];e._cacheIndex=i,t[i]=e,s._cacheIndex=n,t[n]=s}_takeBackBinding(e){const t=this._bindings,n=e._cacheIndex,i=--this._nActiveBindings,s=t[i];e._cacheIndex=i,t[i]=e,s._cacheIndex=n,t[n]=s}_lendControlInterpolant(){const e=this._controlInterpolants,t=this._nActiveControlInterpolants++;let n=e[t];return n===void 0&&(n=new tu(new Float32Array(2),new Float32Array(2),1,E_),n.__cacheIndex=t,e[t]=n),n}_takeBackControlInterpolant(e){const t=this._controlInterpolants,n=e.__cacheIndex,i=--this._nActiveControlInterpolants,s=t[i];e.__cacheIndex=i,t[i]=e,s.__cacheIndex=n,t[n]=s}clipAction(e,t,n){const i=t||this._root,s=i.uuid;let r=typeof e=="string"?Na.findByName(i,e):e;const a=r!==null?r.uuid:e,l=this._actionsByClip[a];let h=null;if(n===void 0&&(r!==null?n=r.blendMode:n=$a),l!==void 0){const c=l.actionByRoot[s];if(c!==void 0&&c.blendMode===n)return c;h=l.knownActions[0],r===null&&(r=h._clip)}if(r===null)return null;const u=new b_(this,r,t,n);return this._bindAction(u,h),this._addInactiveAction(u,a,s),u}existingAction(e,t){const n=t||this._root,i=n.uuid,s=typeof e=="string"?Na.findByName(n,e):e,r=s?s.uuid:e,a=this._actionsByClip[r];return a!==void 0&&a.actionByRoot[i]||null}stopAllAction(){const e=this._actions,t=this._nActiveActions;for(let n=t-1;n>=0;--n)e[n].stop();return this}update(e){e*=this.timeScale;const t=this._actions,n=this._nActiveActions,i=this.time+=e,s=Math.sign(e),r=this._accuIndex^=1;for(let h=0;h!==n;++h)t[h]._update(i,e,s,r);const a=this._bindings,l=this._nActiveBindings;for(let h=0;h!==l;++h)a[h].apply(r);return this}setTime(e){this.time=0;for(let t=0;t<this._actions.length;t++)this._actions[t].time=0;return this.update(e)}getRoot(){return this._root}uncacheClip(e){const t=this._actions,n=e.uuid,i=this._actionsByClip,s=i[n];if(s!==void 0){const r=s.knownActions;for(let a=0,l=r.length;a!==l;++a){const h=r[a];this._deactivateAction(h);const u=h._cacheIndex,c=t[t.length-1];h._cacheIndex=null,h._byClipCacheIndex=null,c._cacheIndex=u,t[u]=c,t.pop(),this._removeInactiveBindingsForAction(h)}delete i[n]}}uncacheRoot(e){const t=e.uuid,n=this._actionsByClip;for(const r in n){const a=n[r].actionByRoot,l=a[t];l!==void 0&&(this._deactivateAction(l),this._removeInactiveAction(l))}const i=this._bindingsByRootAndName,s=i[t];if(s!==void 0)for(const r in s){const a=s[r];a.restoreOriginalState(),this._removeInactiveBinding(a)}}uncacheAction(e,t){const n=this.existingAction(e,t);n!==null&&(this._deactivateAction(n),this._removeInactiveAction(n))}}const qc=new De;class A_{constructor(e,t,n=0,i=1/0){this.ray=new Vs(e,t),this.near=n,this.far=i,this.camera=null,this.layers=new Ja,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return qc.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(qc),this}intersectObject(e,t=!0,n=[]){return Fa(e,this,n,t),n.sort(Yc),n}intersectObjects(e,t=!0,n=[]){for(let i=0,s=e.length;i<s;i++)Fa(e[i],this,n,t);return n.sort(Yc),n}}function Yc(o,e){return o.distance-e.distance}function Fa(o,e,t,n){let i=!0;if(o.layers.test(e.layers)&&o.raycast(e,t)===!1&&(i=!1),i===!0&&n===!0){const s=o.children;for(let r=0,a=s.length;r<a;r++)Fa(s[r],e,t,!0)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Ga}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Ga);const ou={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`};class ps{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const C_=new qr(-1,1,1,-1,0,1);class R_ extends xt{constructor(){super(),this.setAttribute("position",new rt([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new rt([0,2,0,0,2,0],2))}}const P_=new R_;class pl{constructor(e){this._mesh=new Re(P_,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,C_)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}class L_ extends ps{constructor(e,t){super(),this.textureID=t!==void 0?t:"tDiffuse",e instanceof wt?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=Gs.clone(e.uniforms),this.material=new wt({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this.fsQuad=new pl(this.material)}render(e,t,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this.fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}class jc extends ps{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){const i=e.getContext(),s=e.state;s.buffers.color.setMask(!1),s.buffers.depth.setMask(!1),s.buffers.color.setLocked(!0),s.buffers.depth.setLocked(!0);let r,a;this.inverse?(r=0,a=1):(r=1,a=0),s.buffers.stencil.setTest(!0),s.buffers.stencil.setOp(i.REPLACE,i.REPLACE,i.REPLACE),s.buffers.stencil.setFunc(i.ALWAYS,r,4294967295),s.buffers.stencil.setClear(a),s.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),s.buffers.color.setLocked(!1),s.buffers.depth.setLocked(!1),s.buffers.color.setMask(!0),s.buffers.depth.setMask(!0),s.buffers.stencil.setLocked(!1),s.buffers.stencil.setFunc(i.EQUAL,1,4294967295),s.buffers.stencil.setOp(i.KEEP,i.KEEP,i.KEEP),s.buffers.stencil.setLocked(!0)}}class D_ extends ps{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}}class I_{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){const n=e.getSize(new se);this._width=n.width,this._height=n.height,t=new nn(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:Mn}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new L_(ou),this.copyPass.material.blending=kn,this.clock=new p_}swapBuffers(){const e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){const t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());const t=this.renderer.getRenderTarget();let n=!1;for(let i=0,s=this.passes.length;i<s;i++){const r=this.passes[i];if(r.enabled!==!1){if(r.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(i),r.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),r.needsSwap){if(n){const a=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),l.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}jc!==void 0&&(r instanceof jc?n=!0:r instanceof D_&&(n=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){const t=this.renderer.getSize(new se);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;const n=this._width*this._pixelRatio,i=this._height*this._pixelRatio;this.renderTarget1.setSize(n,i),this.renderTarget2.setSize(n,i);for(let s=0;s<this.passes.length;s++)this.passes[s].setSize(n,i)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class N_ extends ps{constructor(e,t,n=null,i=null,s=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=n,this.clearColor=i,this.clearAlpha=s,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new le}render(e,t,n){const i=e.autoClear;e.autoClear=!1;let s,r;this.overrideMaterial!==null&&(r=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(s=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(s),this.overrideMaterial!==null&&(this.scene.overrideMaterial=r),e.autoClear=i}}const U_={uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new le(0)},defaultOpacity:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec3 defaultColor;
		uniform float defaultOpacity;
		uniform float luminosityThreshold;
		uniform float smoothWidth;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			float v = luminance( texel.xyz );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`};class cs extends ps{constructor(e,t,n,i){super(),this.strength=t!==void 0?t:1,this.radius=n,this.threshold=i,this.resolution=e!==void 0?new se(e.x,e.y):new se(256,256),this.clearColor=new le(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let s=Math.round(this.resolution.x/2),r=Math.round(this.resolution.y/2);this.renderTargetBright=new nn(s,r,{type:Mn}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let c=0;c<this.nMips;c++){const d=new nn(s,r,{type:Mn});d.texture.name="UnrealBloomPass.h"+c,d.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(d);const f=new nn(s,r,{type:Mn});f.texture.name="UnrealBloomPass.v"+c,f.texture.generateMipmaps=!1,this.renderTargetsVertical.push(f),s=Math.round(s/2),r=Math.round(r/2)}const a=U_;this.highPassUniforms=Gs.clone(a.uniforms),this.highPassUniforms.luminosityThreshold.value=i,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new wt({uniforms:this.highPassUniforms,vertexShader:a.vertexShader,fragmentShader:a.fragmentShader}),this.separableBlurMaterials=[];const l=[3,5,7,9,11];s=Math.round(this.resolution.x/2),r=Math.round(this.resolution.y/2);for(let c=0;c<this.nMips;c++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(l[c])),this.separableBlurMaterials[c].uniforms.invSize.value=new se(1/s,1/r),s=Math.round(s/2),r=Math.round(r/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;const h=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=h,this.bloomTintColors=[new A(1,1,1),new A(1,1,1),new A(1,1,1),new A(1,1,1),new A(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors;const u=ou;this.copyUniforms=Gs.clone(u.uniforms),this.blendMaterial=new wt({uniforms:this.copyUniforms,vertexShader:u.vertexShader,fragmentShader:u.fragmentShader,blending:Br,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new le,this.oldClearAlpha=1,this.basic=new St,this.fsQuad=new pl(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(e,t){let n=Math.round(e/2),i=Math.round(t/2);this.renderTargetBright.setSize(n,i);for(let s=0;s<this.nMips;s++)this.renderTargetsHorizontal[s].setSize(n,i),this.renderTargetsVertical[s].setSize(n,i),this.separableBlurMaterials[s].uniforms.invSize.value=new se(1/n,1/i),n=Math.round(n/2),i=Math.round(i/2)}render(e,t,n,i,s){e.getClearColor(this._oldClearColor),this.oldClearAlpha=e.getClearAlpha();const r=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),s&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=n.texture,e.setRenderTarget(null),e.clear(),this.fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this.fsQuad.render(e);let a=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this.fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=a.texture,this.separableBlurMaterials[l].uniforms.direction.value=cs.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[l]),e.clear(),this.fsQuad.render(e),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=cs.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[l]),e.clear(),this.fsQuad.render(e),a=this.renderTargetsVertical[l];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this.fsQuad.render(e),this.fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,s&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(n),this.fsQuad.render(e)),e.setClearColor(this._oldClearColor,this.oldClearAlpha),e.autoClear=r}getSeperableBlurMaterial(e){const t=[];for(let n=0;n<e;n++)t.push(.39894*Math.exp(-.5*n*n/(e*e))/e);return new wt({defines:{KERNEL_RADIUS:e},uniforms:{colorTexture:{value:null},invSize:{value:new se(.5,.5)},direction:{value:new se(.5,.5)},gaussianCoefficients:{value:t}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`#include <common>
				varying vec2 vUv;
				uniform sampler2D colorTexture;
				uniform vec2 invSize;
				uniform vec2 direction;
				uniform float gaussianCoefficients[KERNEL_RADIUS];

				void main() {
					float weightSum = gaussianCoefficients[0];
					vec3 diffuseSum = texture2D( colorTexture, vUv ).rgb * weightSum;
					for( int i = 1; i < KERNEL_RADIUS; i ++ ) {
						float x = float(i);
						float w = gaussianCoefficients[i];
						vec2 uvOffset = direction * invSize * x;
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset ).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset ).rgb;
						diffuseSum += (sample1 + sample2) * w;
						weightSum += 2.0 * w;
					}
					gl_FragColor = vec4(diffuseSum/weightSum, 1.0);
				}`})}getCompositeMaterial(e){return new wt({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`varying vec2 vUv;
				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor(const in float factor) {
					float mirrorFactor = 1.2 - factor;
					return mix(factor, mirrorFactor, bloomRadius);
				}

				void main() {
					gl_FragColor = bloomStrength * ( lerpBloomFactor(bloomFactors[0]) * vec4(bloomTintColors[0], 1.0) * texture2D(blurTexture1, vUv) +
						lerpBloomFactor(bloomFactors[1]) * vec4(bloomTintColors[1], 1.0) * texture2D(blurTexture2, vUv) +
						lerpBloomFactor(bloomFactors[2]) * vec4(bloomTintColors[2], 1.0) * texture2D(blurTexture3, vUv) +
						lerpBloomFactor(bloomFactors[3]) * vec4(bloomTintColors[3], 1.0) * texture2D(blurTexture4, vUv) +
						lerpBloomFactor(bloomFactors[4]) * vec4(bloomTintColors[4], 1.0) * texture2D(blurTexture5, vUv) );
				}`})}}cs.BlurDirectionX=new se(1,0);cs.BlurDirectionY=new se(0,1);const B_={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
		precision highp float;

		uniform mat4 modelViewMatrix;
		uniform mat4 projectionMatrix;

		attribute vec3 position;
		attribute vec2 uv;

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`
	
		precision highp float;

		uniform sampler2D tDiffuse;

		#include <tonemapping_pars_fragment>
		#include <colorspace_pars_fragment>

		varying vec2 vUv;

		void main() {

			gl_FragColor = texture2D( tDiffuse, vUv );

			// tone mapping

			#ifdef LINEAR_TONE_MAPPING

				gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );

			#elif defined( REINHARD_TONE_MAPPING )

				gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );

			#elif defined( CINEON_TONE_MAPPING )

				gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );

			#elif defined( ACES_FILMIC_TONE_MAPPING )

				gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );

			#elif defined( AGX_TONE_MAPPING )

				gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );

			#elif defined( NEUTRAL_TONE_MAPPING )

				gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );

			#endif

			// color space

			#ifdef SRGB_TRANSFER

				gl_FragColor = sRGBTransferOETF( gl_FragColor );

			#endif

		}`};class F_ extends ps{constructor(){super();const e=B_;this.uniforms=Gs.clone(e.uniforms),this.material=new Z0({name:e.name,uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader}),this.fsQuad=new pl(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},Xe.getTransfer(this._outputColorSpace)===it&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===ch?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===hh?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===uh?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===Ha?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===dh?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===fh&&(this.material.defines.NEUTRAL_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}class O_{constructor(e){this.canvas=e,this.time=0,this._initRenderer(),this._initScene(),this._initCamera(),this._initLighting(),this._initPostProcessing(),this.entities=[]}_initRenderer(){this.renderer=new R0({canvas:this.canvas,antialias:!0,powerPreference:"high-performance",stencil:!1}),this.renderer.setSize(window.innerWidth,window.innerHeight),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,1.5)),this.renderer.outputColorSpace=Rt,this.renderer.toneMapping=Ha,this.renderer.toneMappingExposure=1.15,this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=ah}_initPostProcessing(){const e=this.renderer.getDrawingBufferSize(new se),t=new nn(e.width,e.height,{type:Mn});this.composer=new I_(this.renderer,t);const n=new N_(this.scene,this.camera);this.composer.addPass(n);const i=new cs(new se(window.innerWidth,window.innerHeight),.25,.8,.9);this.composer.addPass(i);const s=new F_;this.composer.addPass(s)}_initScene(){this.scene=new P0,this._buildSkyDome(),this.scene.fog=new jr(13164784,.0015)}_buildSkyDome(){const e=new rn(800,32,15),t=new wt({uniforms:{topColor:{value:new le(26333)},horizonColor:{value:new le(8900331)},bottomColor:{value:new le(16774614)},sunColor:{value:new le(16770229)},sunDirection:{value:new A(.4,.5,-.3).normalize()},offset:{value:20},exponent:{value:.5}},vertexShader:`
        varying vec3 vWorldPosition;
        varying vec3 vDirection;
        void main() {
          vec4 worldPosition = modelMatrix * vec4(position, 1.0);
          vWorldPosition = worldPosition.xyz;
          vDirection = normalize(position);
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,fragmentShader:`
        uniform vec3 topColor;
        uniform vec3 horizonColor;
        uniform vec3 bottomColor;
        uniform vec3 sunColor;
        uniform vec3 sunDirection;
        uniform float offset;
        uniform float exponent;
        varying vec3 vWorldPosition;
        varying vec3 vDirection;

        void main() {
          float h = normalize(vWorldPosition + offset).y;
          float t = max(pow(max(h, 0.0), exponent), 0.0);

          // Three-way gradient: bottom → horizon → top
          vec3 color;
          if (t < 0.3) {
            color = mix(bottomColor, horizonColor, t / 0.3);
          } else {
            color = mix(horizonColor, topColor, (t - 0.3) / 0.7);
          }

          // Sun glow
          float sunDot = max(0.0, dot(vDirection, sunDirection));
          float sunGlow = pow(sunDot, 32.0) * 0.8;
          float sunDisc = pow(sunDot, 256.0) * 2.0;
          color += sunColor * (sunGlow + sunDisc);

          // Subtle warm haze near horizon
          float haze = exp(-abs(h) * 8.0) * 0.15;
          color += vec3(1.0, 0.9, 0.7) * haze;

          gl_FragColor = vec4(color, 1.0);
        }
      `,side:kt,depthWrite:!1}),n=new Re(e,t);this.scene.add(n),this.skyUniforms=t.uniforms}_initCamera(){this.camera=new Ot(60,window.innerWidth/window.innerHeight,.1,1200),this.camera.position.set(0,10,50)}_initLighting(){this.hemiLight=new l_(8900331,12759680,1),this.hemiLight.position.set(0,200,0),this.scene.add(this.hemiLight),this.sunLight=new Ba(16774373,3),this.sunLight.position.set(150,200,-80),this.sunLight.castShadow=!0,this.sunLight.shadow.mapSize.width=1024,this.sunLight.shadow.mapSize.height=1024,this.sunLight.shadow.bias=-4e-4,this.sunLight.shadow.normalBias=.02;const e=200;this.sunLight.shadow.camera.near=10,this.sunLight.shadow.camera.far=600,this.sunLight.shadow.camera.left=-e,this.sunLight.shadow.camera.right=e,this.sunLight.shadow.camera.top=e,this.sunLight.shadow.camera.bottom=-e,this.scene.add(this.sunLight),this.scene.add(this.sunLight.target);const t=new Ba(16772829,.3);t.position.set(-50,5,50),this.scene.add(t)}add(e){this.entities.push(e)}resize(){this.camera.aspect=window.innerWidth/window.innerHeight,this.camera.updateProjectionMatrix(),this.renderer.setSize(window.innerWidth,window.innerHeight),this.composer.setSize(window.innerWidth,window.innerHeight)}render(e){this.time+=e;for(const n of this.entities)n.update&&n.update(e,this.time);const t=.005;this.sunLight.position.set(150+Math.sin(this.time*t)*30,200,-80+Math.cos(this.time*t)*80),this.composer.render()}}class k_{constructor(){this.keys={w:!1,a:!1,s:!1,d:!1,shift:!1,space:!1,e:!1,r:!1,q:!1},this.mouse={dx:0,dy:0,leftDown:!1,rightDown:!1,locked:!1},this._mouseDeltaX=0,this._mouseDeltaY=0,this._jumpRequested=!1,this.analogMove=null,this._touchSprint=!1,this._bindEvents()}_bindEvents(){window.addEventListener("keydown",e=>{const t=e.key.toLowerCase();t in this.keys&&(this.keys[t]=!0),t===" "&&(this.keys.space=!0,e.preventDefault(),e.repeat||(this._jumpRequested=!0))}),window.addEventListener("keyup",e=>{const t=e.key.toLowerCase();t in this.keys&&(this.keys[t]=!1),t===" "&&(this.keys.space=!1)}),document.addEventListener("mousemove",e=>{document.pointerLockElement&&(this._mouseDeltaX+=e.movementX,this._mouseDeltaY+=e.movementY,this.mouse.locked=!0)}),document.addEventListener("mousedown",e=>{e.button===0&&(this.mouse.leftDown=!0),e.button===2&&(this.mouse.rightDown=!0)}),document.addEventListener("mouseup",e=>{e.button===0&&(this.mouse.leftDown=!1),e.button===2&&(this.mouse.rightDown=!1)}),document.addEventListener("pointerlockchange",()=>{this.mouse.locked=!!document.pointerLockElement}),document.addEventListener("contextmenu",e=>e.preventDefault())}consumeMouseDelta(){this.mouse.dx=this._mouseDeltaX,this.mouse.dy=this._mouseDeltaY,this._mouseDeltaX=0,this._mouseDeltaY=0}getMovementInput(){if(this.analogMove&&this.analogMove.magnitude>.05)return{x:this.analogMove.x,z:this.analogMove.z,magnitude:this.analogMove.magnitude};let e=0,t=0;this.keys.w&&(t-=1),this.keys.s&&(t+=1),this.keys.a&&(e-=1),this.keys.d&&(e+=1);const n=Math.sqrt(e*e+t*t);return n>0&&(e/=n,t/=n),{x:e,z:t,magnitude:n>0?1:0}}get isSprinting(){return this._touchSprint?!0:this.keys.shift}get isShooting(){return this.mouse.leftDown}get isJumping(){return this.keys.space}consumeJump(){const e=this._jumpRequested;return this._jumpRequested=!1,e}}class z_{constructor(e,t){this.camera=e,this.input=t,this.yaw=0,this.pitch=.35,this.baseDistance=22,this.currentDistance=22,this.minDistance=5,this.maxDistance=35,this.currentPos=new A,this.targetPos=new A,this.mouseSensitivity=.003,this.pitchMin=-.05,this.pitchMax=Math.PI/6,this.smoothness=8,this.heightOffset=3.5,this.raycaster=new A_,this.collisionLayers=[]}addCollisionObject(e){this.collisionLayers.push(e)}update(e,t){this.input.consumeMouseDelta(),this.input.mouse.locked&&(this.yaw+=this.input.mouse.dx*this.mouseSensitivity,this.pitch+=this.input.mouse.dy*this.mouseSensitivity,this.pitch=Math.max(this.pitchMin,Math.min(this.pitchMax,this.pitch)));const n=Math.cos(this.pitch),i=Math.sin(this.pitch),s=Math.sin(this.yaw),r=Math.cos(this.yaw),a=t.x-this.baseDistance*s*n,l=t.y+this.baseDistance*i+this.heightOffset,h=t.z+this.baseDistance*r*n;this.targetPos.set(a,l,h);const u=new A(t.x,t.y+this.heightOffset,t.z),c=new A().subVectors(this.targetPos,u).normalize(),d=this.targetPos.distanceTo(u);if(this.raycaster.set(u,c),this.raycaster.far=d,this.raycaster.near=.1,this.collisionLayers.length>0){const g=this.raycaster.intersectObjects(this.collisionLayers,!0);if(g.length>0&&g[0].distance<d){const m=Math.max(this.minDistance,g[0].distance-1)/d;this.targetPos.lerpVectors(u,this.targetPos,m)}}const f=1-Math.exp(-this.smoothness*e);this.currentPos.lerp(this.targetPos,f),this.camera.position.copy(this.currentPos),this.camera.lookAt(u)}}function G_(o,e=!1){const t=o[0].index!==null,n=new Set(Object.keys(o[0].attributes)),i=new Set(Object.keys(o[0].morphAttributes)),s={},r={},a=o[0].morphTargetsRelative,l=new xt;let h=0;for(let u=0;u<o.length;++u){const c=o[u];let d=0;if(t!==(c.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const f in c.attributes){if(!n.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+'. All geometries must have compatible attributes; make sure "'+f+'" attribute exists among all geometries, or in none of them.'),null;s[f]===void 0&&(s[f]=[]),s[f].push(c.attributes[f]),d++}if(d!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". Make sure all geometries have the same number of attributes."),null;if(a!==c.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const f in c.morphAttributes){if(!i.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+".  .morphAttributes must be consistent throughout all geometries."),null;r[f]===void 0&&(r[f]=[]),r[f].push(c.morphAttributes[f])}if(e){let f;if(t)f=c.index.count;else if(c.attributes.position!==void 0)f=c.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". The geometry must have either an index or a position attribute"),null;l.addGroup(h,f,u),h+=f}}if(t){let u=0;const c=[];for(let d=0;d<o.length;++d){const f=o[d].index;for(let g=0;g<f.count;++g)c.push(f.getX(g)+u);u+=o[d].attributes.position.count}l.setIndex(c)}for(const u in s){const c=Kc(s[u]);if(!c)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" attribute."),null;l.setAttribute(u,c)}for(const u in r){const c=r[u][0].length;if(c===0)break;l.morphAttributes=l.morphAttributes||{},l.morphAttributes[u]=[];for(let d=0;d<c;++d){const f=[];for(let _=0;_<r[u].length;++_)f.push(r[u][_][d]);const g=Kc(f);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" morphAttribute."),null;l.morphAttributes[u].push(g)}}return l}function Kc(o){let e,t,n,i=-1,s=0;for(let h=0;h<o.length;++h){const u=o[h];if(e===void 0&&(e=u.array.constructor),e!==u.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=u.itemSize),t!==u.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=u.normalized),n!==u.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(i===-1&&(i=u.gpuType),i!==u.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;s+=u.count*t}const r=new e(s),a=new bt(r,t,n);let l=0;for(let h=0;h<o.length;++h){const u=o[h];if(u.isInterleavedBufferAttribute){const c=l/t;for(let d=0,f=u.count;d<f;d++)for(let g=0;g<t;g++){const _=u.getComponent(d,g);a.setComponent(d+c,g,_)}}else r.set(u.array,l);l+=u.count*t}return i!==void 0&&(a.gpuType=i),a}function $c(o,e){if(e===Vu)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),o;if(e===Ca||e===bh){let t=o.getIndex();if(t===null){const r=[],a=o.getAttribute("position");if(a!==void 0){for(let l=0;l<a.count;l++)r.push(l);o.setIndex(r),t=o.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),o}const n=t.count-2,i=[];if(e===Ca)for(let r=1;r<=n;r++)i.push(t.getX(0)),i.push(t.getX(r)),i.push(t.getX(r+1));else for(let r=0;r<n;r++)r%2===0?(i.push(t.getX(r)),i.push(t.getX(r+1)),i.push(t.getX(r+2))):(i.push(t.getX(r+2)),i.push(t.getX(r+1)),i.push(t.getX(r)));i.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const s=o.clone();return s.setIndex(i),s.clearGroups(),s}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),o}class $r extends fs{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new q_(t)}),this.register(function(t){return new Y_(t)}),this.register(function(t){return new nv(t)}),this.register(function(t){return new iv(t)}),this.register(function(t){return new sv(t)}),this.register(function(t){return new K_(t)}),this.register(function(t){return new $_(t)}),this.register(function(t){return new Z_(t)}),this.register(function(t){return new J_(t)}),this.register(function(t){return new X_(t)}),this.register(function(t){return new Q_(t)}),this.register(function(t){return new j_(t)}),this.register(function(t){return new tv(t)}),this.register(function(t){return new ev(t)}),this.register(function(t){return new V_(t)}),this.register(function(t){return new rv(t)}),this.register(function(t){return new ov(t)})}load(e,t,n,i){const s=this;let r;if(this.resourcePath!=="")r=this.resourcePath;else if(this.path!==""){const h=Bs.extractUrlBase(e);r=Bs.resolveURL(h,this.path)}else r=Bs.extractUrlBase(e);this.manager.itemStart(e);const a=function(h){i?i(h):console.error(h),s.manager.itemError(e),s.manager.itemEnd(e)},l=new iu(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(h){try{s.parse(h,r,function(u){t(u),s.manager.itemEnd(e)},a)}catch(u){a(u)}},n,a)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,i){let s;const r={},a={},l=new TextDecoder;if(typeof e=="string")s=JSON.parse(e);else if(e instanceof ArrayBuffer)if(l.decode(new Uint8Array(e,0,4))===au){try{r[We.KHR_BINARY_GLTF]=new av(e)}catch(c){i&&i(c);return}s=JSON.parse(r[We.KHR_BINARY_GLTF].content)}else s=JSON.parse(l.decode(e));else s=e;if(s.asset===void 0||s.asset.version[0]<2){i&&i(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const h=new yv(s,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});h.fileLoader.setRequestHeader(this.requestHeader);for(let u=0;u<this.pluginCallbacks.length;u++){const c=this.pluginCallbacks[u](h);c.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),a[c.name]=c,r[c.name]=!0}if(s.extensionsUsed)for(let u=0;u<s.extensionsUsed.length;++u){const c=s.extensionsUsed[u],d=s.extensionsRequired||[];switch(c){case We.KHR_MATERIALS_UNLIT:r[c]=new W_;break;case We.KHR_DRACO_MESH_COMPRESSION:r[c]=new lv(s,this.dracoLoader);break;case We.KHR_TEXTURE_TRANSFORM:r[c]=new cv;break;case We.KHR_MESH_QUANTIZATION:r[c]=new hv;break;default:d.indexOf(c)>=0&&a[c]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+c+'".')}}h.setExtensions(r),h.setPlugins(a),h.parse(n,i)}parseAsync(e,t){const n=this;return new Promise(function(i,s){n.parse(e,t,i,s)})}}function H_(){let o={};return{get:function(e){return o[e]},add:function(e,t){o[e]=t},remove:function(e){delete o[e]},removeAll:function(){o={}}}}const We={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class V_{constructor(e){this.parser=e,this.name=We.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let n=0,i=t.length;n<i;n++){const s=t[n];s.extensions&&s.extensions[this.name]&&s.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,s.extensions[this.name].light)}}_loadLight(e){const t=this.parser,n="light:"+e;let i=t.cache.get(n);if(i)return i;const s=t.json,l=((s.extensions&&s.extensions[this.name]||{}).lights||[])[e];let h;const u=new le(16777215);l.color!==void 0&&u.setRGB(l.color[0],l.color[1],l.color[2],Gt);const c=l.range!==void 0?l.range:0;switch(l.type){case"directional":h=new Ba(u),h.target.position.set(0,0,-1),h.add(h.target);break;case"point":h=new ru(u),h.distance=c;break;case"spot":h=new h_(u),h.distance=c,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,h.angle=l.spot.outerConeAngle,h.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,h.target.position.set(0,0,-1),h.add(h.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return h.position.set(0,0,0),h.decay=2,Bn(h,l),l.intensity!==void 0&&(h.intensity=l.intensity),h.name=t.createUniqueName(l.name||"light_"+e),i=Promise.resolve(h),t.cache.add(n,i),i}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){const t=this,n=this.parser,s=n.json.nodes[e],a=(s.extensions&&s.extensions[this.name]||{}).light;return a===void 0?null:this._loadLight(a).then(function(l){return n._getNodeRef(t.cache,a,l)})}}class W_{constructor(){this.name=We.KHR_MATERIALS_UNLIT}getMaterialType(){return St}extendParams(e,t,n){const i=[];e.color=new le(1,1,1),e.opacity=1;const s=t.pbrMetallicRoughness;if(s){if(Array.isArray(s.baseColorFactor)){const r=s.baseColorFactor;e.color.setRGB(r[0],r[1],r[2],Gt),e.opacity=r[3]}s.baseColorTexture!==void 0&&i.push(n.assignTexture(e,"map",s.baseColorTexture,Rt))}return Promise.all(i)}}class X_{constructor(e){this.parser=e,this.name=We.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=i.extensions[this.name].emissiveStrength;return s!==void 0&&(t.emissiveIntensity=s),Promise.resolve()}}class q_{constructor(e){this.parser=e,this.name=We.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Tn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],r=i.extensions[this.name];if(r.clearcoatFactor!==void 0&&(t.clearcoat=r.clearcoatFactor),r.clearcoatTexture!==void 0&&s.push(n.assignTexture(t,"clearcoatMap",r.clearcoatTexture)),r.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=r.clearcoatRoughnessFactor),r.clearcoatRoughnessTexture!==void 0&&s.push(n.assignTexture(t,"clearcoatRoughnessMap",r.clearcoatRoughnessTexture)),r.clearcoatNormalTexture!==void 0&&(s.push(n.assignTexture(t,"clearcoatNormalMap",r.clearcoatNormalTexture)),r.clearcoatNormalTexture.scale!==void 0)){const a=r.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new se(a,a)}return Promise.all(s)}}class Y_{constructor(e){this.parser=e,this.name=We.KHR_MATERIALS_DISPERSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Tn}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=i.extensions[this.name];return t.dispersion=s.dispersion!==void 0?s.dispersion:0,Promise.resolve()}}class j_{constructor(e){this.parser=e,this.name=We.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Tn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],r=i.extensions[this.name];return r.iridescenceFactor!==void 0&&(t.iridescence=r.iridescenceFactor),r.iridescenceTexture!==void 0&&s.push(n.assignTexture(t,"iridescenceMap",r.iridescenceTexture)),r.iridescenceIor!==void 0&&(t.iridescenceIOR=r.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),r.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=r.iridescenceThicknessMinimum),r.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=r.iridescenceThicknessMaximum),r.iridescenceThicknessTexture!==void 0&&s.push(n.assignTexture(t,"iridescenceThicknessMap",r.iridescenceThicknessTexture)),Promise.all(s)}}class K_{constructor(e){this.parser=e,this.name=We.KHR_MATERIALS_SHEEN}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Tn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[];t.sheenColor=new le(0,0,0),t.sheenRoughness=0,t.sheen=1;const r=i.extensions[this.name];if(r.sheenColorFactor!==void 0){const a=r.sheenColorFactor;t.sheenColor.setRGB(a[0],a[1],a[2],Gt)}return r.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=r.sheenRoughnessFactor),r.sheenColorTexture!==void 0&&s.push(n.assignTexture(t,"sheenColorMap",r.sheenColorTexture,Rt)),r.sheenRoughnessTexture!==void 0&&s.push(n.assignTexture(t,"sheenRoughnessMap",r.sheenRoughnessTexture)),Promise.all(s)}}class $_{constructor(e){this.parser=e,this.name=We.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Tn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],r=i.extensions[this.name];return r.transmissionFactor!==void 0&&(t.transmission=r.transmissionFactor),r.transmissionTexture!==void 0&&s.push(n.assignTexture(t,"transmissionMap",r.transmissionTexture)),Promise.all(s)}}class Z_{constructor(e){this.parser=e,this.name=We.KHR_MATERIALS_VOLUME}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Tn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],r=i.extensions[this.name];t.thickness=r.thicknessFactor!==void 0?r.thicknessFactor:0,r.thicknessTexture!==void 0&&s.push(n.assignTexture(t,"thicknessMap",r.thicknessTexture)),t.attenuationDistance=r.attenuationDistance||1/0;const a=r.attenuationColor||[1,1,1];return t.attenuationColor=new le().setRGB(a[0],a[1],a[2],Gt),Promise.all(s)}}class J_{constructor(e){this.parser=e,this.name=We.KHR_MATERIALS_IOR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Tn}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=i.extensions[this.name];return t.ior=s.ior!==void 0?s.ior:1.5,Promise.resolve()}}class Q_{constructor(e){this.parser=e,this.name=We.KHR_MATERIALS_SPECULAR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Tn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],r=i.extensions[this.name];t.specularIntensity=r.specularFactor!==void 0?r.specularFactor:1,r.specularTexture!==void 0&&s.push(n.assignTexture(t,"specularIntensityMap",r.specularTexture));const a=r.specularColorFactor||[1,1,1];return t.specularColor=new le().setRGB(a[0],a[1],a[2],Gt),r.specularColorTexture!==void 0&&s.push(n.assignTexture(t,"specularColorMap",r.specularColorTexture,Rt)),Promise.all(s)}}class ev{constructor(e){this.parser=e,this.name=We.EXT_MATERIALS_BUMP}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Tn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],r=i.extensions[this.name];return t.bumpScale=r.bumpFactor!==void 0?r.bumpFactor:1,r.bumpTexture!==void 0&&s.push(n.assignTexture(t,"bumpMap",r.bumpTexture)),Promise.all(s)}}class tv{constructor(e){this.parser=e,this.name=We.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Tn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],r=i.extensions[this.name];return r.anisotropyStrength!==void 0&&(t.anisotropy=r.anisotropyStrength),r.anisotropyRotation!==void 0&&(t.anisotropyRotation=r.anisotropyRotation),r.anisotropyTexture!==void 0&&s.push(n.assignTexture(t,"anisotropyMap",r.anisotropyTexture)),Promise.all(s)}}class nv{constructor(e){this.parser=e,this.name=We.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,n=t.json,i=n.textures[e];if(!i.extensions||!i.extensions[this.name])return null;const s=i.extensions[this.name],r=t.options.ktx2Loader;if(!r){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,s.source,r)}}class iv{constructor(e){this.parser=e,this.name=We.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(e){const t=this.name,n=this.parser,i=n.json,s=i.textures[e];if(!s.extensions||!s.extensions[t])return null;const r=s.extensions[t],a=i.images[r.source];let l=n.textureLoader;if(a.uri){const h=n.options.manager.getHandler(a.uri);h!==null&&(l=h)}return this.detectSupport().then(function(h){if(h)return n.loadTextureImage(e,r.source,l);if(i.extensionsRequired&&i.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class sv{constructor(e){this.parser=e,this.name=We.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(e){const t=this.name,n=this.parser,i=n.json,s=i.textures[e];if(!s.extensions||!s.extensions[t])return null;const r=s.extensions[t],a=i.images[r.source];let l=n.textureLoader;if(a.uri){const h=n.options.manager.getHandler(a.uri);h!==null&&(l=h)}return this.detectSupport().then(function(h){if(h)return n.loadTextureImage(e,r.source,l);if(i.extensionsRequired&&i.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class rv{constructor(e){this.name=We.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){const t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){const i=n.extensions[this.name],s=this.parser.getDependency("buffer",i.buffer),r=this.parser.options.meshoptDecoder;if(!r||!r.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return s.then(function(a){const l=i.byteOffset||0,h=i.byteLength||0,u=i.count,c=i.byteStride,d=new Uint8Array(a,l,h);return r.decodeGltfBufferAsync?r.decodeGltfBufferAsync(u,c,d,i.mode,i.filter).then(function(f){return f.buffer}):r.ready.then(function(){const f=new ArrayBuffer(u*c);return r.decodeGltfBuffer(new Uint8Array(f),u,c,d,i.mode,i.filter),f})})}else return null}}class ov{constructor(e){this.name=We.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;const i=t.meshes[n.mesh];for(const h of i.primitives)if(h.mode!==Qt.TRIANGLES&&h.mode!==Qt.TRIANGLE_STRIP&&h.mode!==Qt.TRIANGLE_FAN&&h.mode!==void 0)return null;const r=n.extensions[this.name].attributes,a=[],l={};for(const h in r)a.push(this.parser.getDependency("accessor",r[h]).then(u=>(l[h]=u,l[h])));return a.length<1?null:(a.push(this.parser.createNodeMesh(e)),Promise.all(a).then(h=>{const u=h.pop(),c=u.isGroup?u.children:[u],d=h[0].count,f=[];for(const g of c){const _=new De,m=new A,p=new sn,x=new A(1,1,1),M=new Yh(g.geometry,g.material,d);for(let v=0;v<d;v++)l.TRANSLATION&&m.fromBufferAttribute(l.TRANSLATION,v),l.ROTATION&&p.fromBufferAttribute(l.ROTATION,v),l.SCALE&&x.fromBufferAttribute(l.SCALE,v),M.setMatrixAt(v,_.compose(m,p,x));for(const v in l)if(v==="_COLOR_0"){const P=l[v];M.instanceColor=new Da(P.array,P.itemSize,P.normalized)}else v!=="TRANSLATION"&&v!=="ROTATION"&&v!=="SCALE"&&g.geometry.setAttribute(v,l[v]);lt.prototype.copy.call(M,g),this.parser.assignFinalMaterial(M),f.push(M)}return u.isGroup?(u.clear(),u.add(...f),u):f[0]}))}}const au="glTF",Cs=12,Zc={JSON:1313821514,BIN:5130562};class av{constructor(e){this.name=We.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,Cs),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==au)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const i=this.header.length-Cs,s=new DataView(e,Cs);let r=0;for(;r<i;){const a=s.getUint32(r,!0);r+=4;const l=s.getUint32(r,!0);if(r+=4,l===Zc.JSON){const h=new Uint8Array(e,Cs+r,a);this.content=n.decode(h)}else if(l===Zc.BIN){const h=Cs+r;this.body=e.slice(h,h+a)}r+=a}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class lv{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=We.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const n=this.json,i=this.dracoLoader,s=e.extensions[this.name].bufferView,r=e.extensions[this.name].attributes,a={},l={},h={};for(const u in r){const c=Oa[u]||u.toLowerCase();a[c]=r[u]}for(const u in e.attributes){const c=Oa[u]||u.toLowerCase();if(r[u]!==void 0){const d=n.accessors[e.attributes[u]],f=Zi[d.componentType];h[c]=f.name,l[c]=d.normalized===!0}}return t.getDependency("bufferView",s).then(function(u){return new Promise(function(c,d){i.decodeDracoFile(u,function(f){for(const g in f.attributes){const _=f.attributes[g],m=l[g];m!==void 0&&(_.normalized=m)}c(f)},a,h,Gt,d)})})}}class cv{constructor(){this.name=We.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}}class hv{constructor(){this.name=We.KHR_MESH_QUANTIZATION}}class lu extends Xs{constructor(e,t,n,i){super(e,t,n,i)}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,s=e*i*3+i;for(let r=0;r!==i;r++)t[r]=n[s+r];return t}interpolate_(e,t,n,i){const s=this.resultBuffer,r=this.sampleValues,a=this.valueSize,l=a*2,h=a*3,u=i-t,c=(n-t)/u,d=c*c,f=d*c,g=e*h,_=g-h,m=-2*f+3*d,p=f-d,x=1-m,M=p-d+c;for(let v=0;v!==a;v++){const P=r[_+v+a],C=r[_+v+l]*u,E=r[g+v+a],L=r[g+v]*u;s[v]=x*P+M*C+m*E+p*L}return s}}const uv=new sn;class dv extends lu{interpolate_(e,t,n,i){const s=super.interpolate_(e,t,n,i);return uv.fromArray(s).normalize().toArray(s),s}}const Qt={POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6},Zi={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},Jc={9728:zt,9729:Kt,9984:mh,9985:Rr,9986:Rs,9987:Fn},Qc={33071:ii,33648:Fr,10497:ts},Bo={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},Oa={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},Jn={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},fv={CUBICSPLINE:void 0,LINEAR:ks,STEP:Os},Fo={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function pv(o){return o.DefaultMaterial===void 0&&(o.DefaultMaterial=new dt({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:Hn})),o.DefaultMaterial}function pi(o,e,t){for(const n in t.extensions)o[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function Bn(o,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(o.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function mv(o,e,t){let n=!1,i=!1,s=!1;for(let h=0,u=e.length;h<u;h++){const c=e[h];if(c.POSITION!==void 0&&(n=!0),c.NORMAL!==void 0&&(i=!0),c.COLOR_0!==void 0&&(s=!0),n&&i&&s)break}if(!n&&!i&&!s)return Promise.resolve(o);const r=[],a=[],l=[];for(let h=0,u=e.length;h<u;h++){const c=e[h];if(n){const d=c.POSITION!==void 0?t.getDependency("accessor",c.POSITION):o.attributes.position;r.push(d)}if(i){const d=c.NORMAL!==void 0?t.getDependency("accessor",c.NORMAL):o.attributes.normal;a.push(d)}if(s){const d=c.COLOR_0!==void 0?t.getDependency("accessor",c.COLOR_0):o.attributes.color;l.push(d)}}return Promise.all([Promise.all(r),Promise.all(a),Promise.all(l)]).then(function(h){const u=h[0],c=h[1],d=h[2];return n&&(o.morphAttributes.position=u),i&&(o.morphAttributes.normal=c),s&&(o.morphAttributes.color=d),o.morphTargetsRelative=!0,o})}function gv(o,e){if(o.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)o.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(o.morphTargetInfluences.length===t.length){o.morphTargetDictionary={};for(let n=0,i=t.length;n<i;n++)o.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function _v(o){let e;const t=o.extensions&&o.extensions[We.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+Oo(t.attributes):e=o.indices+":"+Oo(o.attributes)+":"+o.mode,o.targets!==void 0)for(let n=0,i=o.targets.length;n<i;n++)e+=":"+Oo(o.targets[n]);return e}function Oo(o){let e="";const t=Object.keys(o).sort();for(let n=0,i=t.length;n<i;n++)e+=t[n]+":"+o[t[n]]+";";return e}function ka(o){switch(o){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function vv(o){return o.search(/\.jpe?g($|\?)/i)>0||o.search(/^data\:image\/jpeg/)===0?"image/jpeg":o.search(/\.webp($|\?)/i)>0||o.search(/^data\:image\/webp/)===0?"image/webp":o.search(/\.ktx2($|\?)/i)>0||o.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}const xv=new De;class yv{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new H_,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,i=-1,s=!1,r=-1;if(typeof navigator<"u"){const a=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(a)===!0;const l=a.match(/Version\/(\d+)/);i=n&&l?parseInt(l[1],10):-1,s=a.indexOf("Firefox")>-1,r=s?a.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||n&&i<17||s&&r<98?this.textureLoader=new su(this.options.manager):this.textureLoader=new f_(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new iu(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const n=this,i=this.json,s=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(r){return r._markDefs&&r._markDefs()}),Promise.all(this._invokeAll(function(r){return r.beforeRoot&&r.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(r){const a={scene:r[0][i.scene||0],scenes:r[0],animations:r[1],cameras:r[2],asset:i.asset,parser:n,userData:{}};return pi(s,a,i),Bn(a,i),Promise.all(n._invokeAll(function(l){return l.afterRoot&&l.afterRoot(a)})).then(function(){for(const l of a.scenes)l.updateMatrixWorld();e(a)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let i=0,s=t.length;i<s;i++){const r=t[i].joints;for(let a=0,l=r.length;a<l;a++)e[r[a]].isBone=!0}for(let i=0,s=e.length;i<s;i++){const r=e[i];r.mesh!==void 0&&(this._addNodeRef(this.meshCache,r.mesh),r.skin!==void 0&&(n[r.mesh].isSkinnedMesh=!0)),r.camera!==void 0&&this._addNodeRef(this.cameraCache,r.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;const i=n.clone(),s=(r,a)=>{const l=this.associations.get(r);l!=null&&this.associations.set(a,l);for(const[h,u]of r.children.entries())s(u,a.children[h])};return s(n,i),i.name+="_instance_"+e.uses[t]++,i}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){const i=e(t[n]);if(i)return i}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const n=[];for(let i=0;i<t.length;i++){const s=e(t[i]);s&&n.push(s)}return n}getDependency(e,t){const n=e+":"+t;let i=this.cache.get(n);if(!i){switch(e){case"scene":i=this.loadScene(t);break;case"node":i=this._invokeOne(function(s){return s.loadNode&&s.loadNode(t)});break;case"mesh":i=this._invokeOne(function(s){return s.loadMesh&&s.loadMesh(t)});break;case"accessor":i=this.loadAccessor(t);break;case"bufferView":i=this._invokeOne(function(s){return s.loadBufferView&&s.loadBufferView(t)});break;case"buffer":i=this.loadBuffer(t);break;case"material":i=this._invokeOne(function(s){return s.loadMaterial&&s.loadMaterial(t)});break;case"texture":i=this._invokeOne(function(s){return s.loadTexture&&s.loadTexture(t)});break;case"skin":i=this.loadSkin(t);break;case"animation":i=this._invokeOne(function(s){return s.loadAnimation&&s.loadAnimation(t)});break;case"camera":i=this.loadCamera(t);break;default:if(i=this._invokeOne(function(s){return s!=this&&s.getDependency&&s.getDependency(e,t)}),!i)throw new Error("Unknown type: "+e);break}this.cache.add(n,i)}return i}getDependencies(e){let t=this.cache.get(e);if(!t){const n=this,i=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(i.map(function(s,r){return n.getDependency(e,r)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[We.KHR_BINARY_GLTF].body);const i=this.options;return new Promise(function(s,r){n.load(Bs.resolveURL(t.uri,i.path),s,void 0,function(){r(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){const i=t.byteLength||0,s=t.byteOffset||0;return n.slice(s,s+i)})}loadAccessor(e){const t=this,n=this.json,i=this.json.accessors[e];if(i.bufferView===void 0&&i.sparse===void 0){const r=Bo[i.type],a=Zi[i.componentType],l=i.normalized===!0,h=new a(i.count*r);return Promise.resolve(new bt(h,r,l))}const s=[];return i.bufferView!==void 0?s.push(this.getDependency("bufferView",i.bufferView)):s.push(null),i.sparse!==void 0&&(s.push(this.getDependency("bufferView",i.sparse.indices.bufferView)),s.push(this.getDependency("bufferView",i.sparse.values.bufferView))),Promise.all(s).then(function(r){const a=r[0],l=Bo[i.type],h=Zi[i.componentType],u=h.BYTES_PER_ELEMENT,c=u*l,d=i.byteOffset||0,f=i.bufferView!==void 0?n.bufferViews[i.bufferView].byteStride:void 0,g=i.normalized===!0;let _,m;if(f&&f!==c){const p=Math.floor(d/f),x="InterleavedBuffer:"+i.bufferView+":"+i.componentType+":"+p+":"+i.count;let M=t.cache.get(x);M||(_=new h(a,p*f,i.count*f/u),M=new Vh(_,f/u),t.cache.add(x,M)),m=new Hs(M,l,d%f/u,g)}else a===null?_=new h(i.count*l):_=new h(a,d,i.count*l),m=new bt(_,l,g);if(i.sparse!==void 0){const p=Bo.SCALAR,x=Zi[i.sparse.indices.componentType],M=i.sparse.indices.byteOffset||0,v=i.sparse.values.byteOffset||0,P=new x(r[1],M,i.sparse.count*p),C=new h(r[2],v,i.sparse.count*l);a!==null&&(m=new bt(m.array.slice(),m.itemSize,m.normalized)),m.normalized=!1;for(let E=0,L=P.length;E<L;E++){const w=P[E];if(m.setX(w,C[E*l]),l>=2&&m.setY(w,C[E*l+1]),l>=3&&m.setZ(w,C[E*l+2]),l>=4&&m.setW(w,C[E*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}m.normalized=g}return m})}loadTexture(e){const t=this.json,n=this.options,s=t.textures[e].source,r=t.images[s];let a=this.textureLoader;if(r.uri){const l=n.manager.getHandler(r.uri);l!==null&&(a=l)}return this.loadTextureImage(e,s,a)}loadTextureImage(e,t,n){const i=this,s=this.json,r=s.textures[e],a=s.images[t],l=(a.uri||a.bufferView)+":"+r.sampler;if(this.textureCache[l])return this.textureCache[l];const h=this.loadImageSource(t,n).then(function(u){u.flipY=!1,u.name=r.name||a.name||"",u.name===""&&typeof a.uri=="string"&&a.uri.startsWith("data:image/")===!1&&(u.name=a.uri);const d=(s.samplers||{})[r.sampler]||{};return u.magFilter=Jc[d.magFilter]||Kt,u.minFilter=Jc[d.minFilter]||Fn,u.wrapS=Qc[d.wrapS]||ts,u.wrapT=Qc[d.wrapT]||ts,u.generateMipmaps=!u.isCompressedTexture&&u.minFilter!==zt&&u.minFilter!==Kt,i.associations.set(u,{textures:e}),u}).catch(function(){return null});return this.textureCache[l]=h,h}loadImageSource(e,t){const n=this,i=this.json,s=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(c=>c.clone());const r=i.images[e],a=self.URL||self.webkitURL;let l=r.uri||"",h=!1;if(r.bufferView!==void 0)l=n.getDependency("bufferView",r.bufferView).then(function(c){h=!0;const d=new Blob([c],{type:r.mimeType});return l=a.createObjectURL(d),l});else if(r.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const u=Promise.resolve(l).then(function(c){return new Promise(function(d,f){let g=d;t.isImageBitmapLoader===!0&&(g=function(_){const m=new Tt(_);m.needsUpdate=!0,d(m)}),t.load(Bs.resolveURL(c,s.path),g,void 0,f)})}).then(function(c){return h===!0&&a.revokeObjectURL(l),Bn(c,r),c.userData.mimeType=r.mimeType||vv(r.uri),c}).catch(function(c){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),c});return this.sourceCache[e]=u,u}assignTexture(e,t,n,i){const s=this;return this.getDependency("texture",n.index).then(function(r){if(!r)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(r=r.clone(),r.channel=n.texCoord),s.extensions[We.KHR_TEXTURE_TRANSFORM]){const a=n.extensions!==void 0?n.extensions[We.KHR_TEXTURE_TRANSFORM]:void 0;if(a){const l=s.associations.get(r);r=s.extensions[We.KHR_TEXTURE_TRANSFORM].extendTexture(r,a),s.associations.set(r,l)}}return i!==void 0&&(r.colorSpace=i),e[t]=r,r})}assignFinalMaterial(e){const t=e.geometry;let n=e.material;const i=t.attributes.tangent===void 0,s=t.attributes.color!==void 0,r=t.attributes.normal===void 0;if(e.isPoints){const a="PointsMaterial:"+n.uuid;let l=this.cache.get(a);l||(l=new il,pn.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,l.sizeAttenuation=!1,this.cache.add(a,l)),n=l}else if(e.isLine){const a="LineBasicMaterial:"+n.uuid;let l=this.cache.get(a);l||(l=new jh,pn.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,this.cache.add(a,l)),n=l}if(i||s||r){let a="ClonedMaterial:"+n.uuid+":";i&&(a+="derivative-tangents:"),s&&(a+="vertex-colors:"),r&&(a+="flat-shading:");let l=this.cache.get(a);l||(l=n.clone(),s&&(l.vertexColors=!0),r&&(l.flatShading=!0),i&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(a,l),this.associations.set(l,this.associations.get(n))),n=l}e.material=n}getMaterialType(){return dt}loadMaterial(e){const t=this,n=this.json,i=this.extensions,s=n.materials[e];let r;const a={},l=s.extensions||{},h=[];if(l[We.KHR_MATERIALS_UNLIT]){const c=i[We.KHR_MATERIALS_UNLIT];r=c.getMaterialType(),h.push(c.extendParams(a,s,t))}else{const c=s.pbrMetallicRoughness||{};if(a.color=new le(1,1,1),a.opacity=1,Array.isArray(c.baseColorFactor)){const d=c.baseColorFactor;a.color.setRGB(d[0],d[1],d[2],Gt),a.opacity=d[3]}c.baseColorTexture!==void 0&&h.push(t.assignTexture(a,"map",c.baseColorTexture,Rt)),a.metalness=c.metallicFactor!==void 0?c.metallicFactor:1,a.roughness=c.roughnessFactor!==void 0?c.roughnessFactor:1,c.metallicRoughnessTexture!==void 0&&(h.push(t.assignTexture(a,"metalnessMap",c.metallicRoughnessTexture)),h.push(t.assignTexture(a,"roughnessMap",c.metallicRoughnessTexture))),r=this._invokeOne(function(d){return d.getMaterialType&&d.getMaterialType(e)}),h.push(Promise.all(this._invokeAll(function(d){return d.extendMaterialParams&&d.extendMaterialParams(e,a)})))}s.doubleSided===!0&&(a.side=vt);const u=s.alphaMode||Fo.OPAQUE;if(u===Fo.BLEND?(a.transparent=!0,a.depthWrite=!1):(a.transparent=!1,u===Fo.MASK&&(a.alphaTest=s.alphaCutoff!==void 0?s.alphaCutoff:.5)),s.normalTexture!==void 0&&r!==St&&(h.push(t.assignTexture(a,"normalMap",s.normalTexture)),a.normalScale=new se(1,1),s.normalTexture.scale!==void 0)){const c=s.normalTexture.scale;a.normalScale.set(c,c)}if(s.occlusionTexture!==void 0&&r!==St&&(h.push(t.assignTexture(a,"aoMap",s.occlusionTexture)),s.occlusionTexture.strength!==void 0&&(a.aoMapIntensity=s.occlusionTexture.strength)),s.emissiveFactor!==void 0&&r!==St){const c=s.emissiveFactor;a.emissive=new le().setRGB(c[0],c[1],c[2],Gt)}return s.emissiveTexture!==void 0&&r!==St&&h.push(t.assignTexture(a,"emissiveMap",s.emissiveTexture,Rt)),Promise.all(h).then(function(){const c=new r(a);return s.name&&(c.name=s.name),Bn(c,s),t.associations.set(c,{materials:e}),s.extensions&&pi(i,c,s),c})}createUniqueName(e){const t=et.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){const t=this,n=this.extensions,i=this.primitiveCache;function s(a){return n[We.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a,t).then(function(l){return eh(l,a,t)})}const r=[];for(let a=0,l=e.length;a<l;a++){const h=e[a],u=_v(h),c=i[u];if(c)r.push(c.promise);else{let d;h.extensions&&h.extensions[We.KHR_DRACO_MESH_COMPRESSION]?d=s(h):d=eh(new xt,h,t),i[u]={primitive:h,promise:d},r.push(d)}}return Promise.all(r)}loadMesh(e){const t=this,n=this.json,i=this.extensions,s=n.meshes[e],r=s.primitives,a=[];for(let l=0,h=r.length;l<h;l++){const u=r[l].material===void 0?pv(this.cache):this.getDependency("material",r[l].material);a.push(u)}return a.push(t.loadGeometries(r)),Promise.all(a).then(function(l){const h=l.slice(0,l.length-1),u=l[l.length-1],c=[];for(let f=0,g=u.length;f<g;f++){const _=u[f],m=r[f];let p;const x=h[f];if(m.mode===Qt.TRIANGLES||m.mode===Qt.TRIANGLE_STRIP||m.mode===Qt.TRIANGLE_FAN||m.mode===void 0)p=s.isSkinnedMesh===!0?new D0(_,x):new Re(_,x),p.isSkinnedMesh===!0&&p.normalizeSkinWeights(),m.mode===Qt.TRIANGLE_STRIP?p.geometry=$c(p.geometry,bh):m.mode===Qt.TRIANGLE_FAN&&(p.geometry=$c(p.geometry,Ca));else if(m.mode===Qt.LINES)p=new U0(_,x);else if(m.mode===Qt.LINE_STRIP)p=new nl(_,x);else if(m.mode===Qt.LINE_LOOP)p=new B0(_,x);else if(m.mode===Qt.POINTS)p=new Kh(_,x);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+m.mode);Object.keys(p.geometry.morphAttributes).length>0&&gv(p,s),p.name=t.createUniqueName(s.name||"mesh_"+e),Bn(p,s),m.extensions&&pi(i,p,m),t.assignFinalMaterial(p),c.push(p)}for(let f=0,g=c.length;f<g;f++)t.associations.set(c[f],{meshes:e,primitives:f});if(c.length===1)return s.extensions&&pi(i,c[0],s),c[0];const d=new Xt;s.extensions&&pi(i,d,s),t.associations.set(d,{meshes:e});for(let f=0,g=c.length;f<g;f++)d.add(c[f]);return d})}loadCamera(e){let t;const n=this.json.cameras[e],i=n[n.type];if(!i){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new Ot(gd.radToDeg(i.yfov),i.aspectRatio||1,i.znear||1,i.zfar||2e6):n.type==="orthographic"&&(t=new qr(-i.xmag,i.xmag,i.ymag,-i.ymag,i.znear,i.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),Bn(t,n),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],n=[];for(let i=0,s=t.joints.length;i<s;i++)n.push(this._loadNodeShallow(t.joints[i]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(i){const s=i.pop(),r=i,a=[],l=[];for(let h=0,u=r.length;h<u;h++){const c=r[h];if(c){a.push(c);const d=new De;s!==null&&d.fromArray(s.array,h*16),l.push(d)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[h])}return new tl(a,l)})}loadAnimation(e){const t=this.json,n=this,i=t.animations[e],s=i.name?i.name:"animation_"+e,r=[],a=[],l=[],h=[],u=[];for(let c=0,d=i.channels.length;c<d;c++){const f=i.channels[c],g=i.samplers[f.sampler],_=f.target,m=_.node,p=i.parameters!==void 0?i.parameters[g.input]:g.input,x=i.parameters!==void 0?i.parameters[g.output]:g.output;_.node!==void 0&&(r.push(this.getDependency("node",m)),a.push(this.getDependency("accessor",p)),l.push(this.getDependency("accessor",x)),h.push(g),u.push(_))}return Promise.all([Promise.all(r),Promise.all(a),Promise.all(l),Promise.all(h),Promise.all(u)]).then(function(c){const d=c[0],f=c[1],g=c[2],_=c[3],m=c[4],p=[];for(let x=0,M=d.length;x<M;x++){const v=d[x],P=f[x],C=g[x],E=_[x],L=m[x];if(v===void 0)continue;v.updateMatrix&&v.updateMatrix();const w=n._createAnimationTracks(v,P,C,E,L);if(w)for(let S=0;S<w.length;S++)p.push(w[S])}return new Na(s,void 0,p)})}createNodeMesh(e){const t=this.json,n=this,i=t.nodes[e];return i.mesh===void 0?null:n.getDependency("mesh",i.mesh).then(function(s){const r=n._getNodeRef(n.meshCache,i.mesh,s);return i.weights!==void 0&&r.traverse(function(a){if(a.isMesh)for(let l=0,h=i.weights.length;l<h;l++)a.morphTargetInfluences[l]=i.weights[l]}),r})}loadNode(e){const t=this.json,n=this,i=t.nodes[e],s=n._loadNodeShallow(e),r=[],a=i.children||[];for(let h=0,u=a.length;h<u;h++)r.push(n.getDependency("node",a[h]));const l=i.skin===void 0?Promise.resolve(null):n.getDependency("skin",i.skin);return Promise.all([s,Promise.all(r),l]).then(function(h){const u=h[0],c=h[1],d=h[2];d!==null&&u.traverse(function(f){f.isSkinnedMesh&&f.bind(d,xv)});for(let f=0,g=c.length;f<g;f++)u.add(c[f]);return u})}_loadNodeShallow(e){const t=this.json,n=this.extensions,i=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];const s=t.nodes[e],r=s.name?i.createUniqueName(s.name):"",a=[],l=i._invokeOne(function(h){return h.createNodeMesh&&h.createNodeMesh(e)});return l&&a.push(l),s.camera!==void 0&&a.push(i.getDependency("camera",s.camera).then(function(h){return i._getNodeRef(i.cameraCache,s.camera,h)})),i._invokeAll(function(h){return h.createNodeAttachment&&h.createNodeAttachment(e)}).forEach(function(h){a.push(h)}),this.nodeCache[e]=Promise.all(a).then(function(h){let u;if(s.isBone===!0?u=new Xh:h.length>1?u=new Xt:h.length===1?u=h[0]:u=new lt,u!==h[0])for(let c=0,d=h.length;c<d;c++)u.add(h[c]);if(s.name&&(u.userData.name=s.name,u.name=r),Bn(u,s),s.extensions&&pi(n,u,s),s.matrix!==void 0){const c=new De;c.fromArray(s.matrix),u.applyMatrix4(c)}else s.translation!==void 0&&u.position.fromArray(s.translation),s.rotation!==void 0&&u.quaternion.fromArray(s.rotation),s.scale!==void 0&&u.scale.fromArray(s.scale);return i.associations.has(u)||i.associations.set(u,{}),i.associations.get(u).nodes=e,u}),this.nodeCache[e]}loadScene(e){const t=this.extensions,n=this.json.scenes[e],i=this,s=new Xt;n.name&&(s.name=i.createUniqueName(n.name)),Bn(s,n),n.extensions&&pi(t,s,n);const r=n.nodes||[],a=[];for(let l=0,h=r.length;l<h;l++)a.push(i.getDependency("node",r[l]));return Promise.all(a).then(function(l){for(let u=0,c=l.length;u<c;u++)s.add(l[u]);const h=u=>{const c=new Map;for(const[d,f]of i.associations)(d instanceof pn||d instanceof Tt)&&c.set(d,f);return u.traverse(d=>{const f=i.associations.get(d);f!=null&&c.set(d,f)}),c};return i.associations=h(s),s})}_createAnimationTracks(e,t,n,i,s){const r=[],a=e.name?e.name:e.uuid,l=[];Jn[s.path]===Jn.weights?e.traverse(function(d){d.morphTargetInfluences&&l.push(d.name?d.name:d.uuid)}):l.push(a);let h;switch(Jn[s.path]){case Jn.weights:h=os;break;case Jn.rotation:h=as;break;case Jn.position:case Jn.scale:h=ls;break;default:switch(n.itemSize){case 1:h=os;break;case 2:case 3:default:h=ls;break}break}const u=i.interpolation!==void 0?fv[i.interpolation]:ks,c=this._getArrayFromAccessor(n);for(let d=0,f=l.length;d<f;d++){const g=new h(l[d]+"."+Jn[s.path],t.array,c,u);i.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(g),r.push(g)}return r}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){const n=ka(t.constructor),i=new Float32Array(t.length);for(let s=0,r=t.length;s<r;s++)i[s]=t[s]*n;t=i}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){const i=this instanceof as?dv:lu;return new i(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function Mv(o,e,t){const n=e.attributes,i=new Pt;if(n.POSITION!==void 0){const a=t.json.accessors[n.POSITION],l=a.min,h=a.max;if(l!==void 0&&h!==void 0){if(i.set(new A(l[0],l[1],l[2]),new A(h[0],h[1],h[2])),a.normalized){const u=ka(Zi[a.componentType]);i.min.multiplyScalar(u),i.max.multiplyScalar(u)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const s=e.targets;if(s!==void 0){const a=new A,l=new A;for(let h=0,u=s.length;h<u;h++){const c=s[h];if(c.POSITION!==void 0){const d=t.json.accessors[c.POSITION],f=d.min,g=d.max;if(f!==void 0&&g!==void 0){if(l.setX(Math.max(Math.abs(f[0]),Math.abs(g[0]))),l.setY(Math.max(Math.abs(f[1]),Math.abs(g[1]))),l.setZ(Math.max(Math.abs(f[2]),Math.abs(g[2]))),d.normalized){const _=ka(Zi[d.componentType]);l.multiplyScalar(_)}a.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}i.expandByVector(a)}o.boundingBox=i;const r=new Sn;i.getCenter(r.center),r.radius=i.min.distanceTo(i.max)/2,o.boundingSphere=r}function eh(o,e,t){const n=e.attributes,i=[];function s(r,a){return t.getDependency("accessor",r).then(function(l){o.setAttribute(a,l)})}for(const r in n){const a=Oa[r]||r.toLowerCase();a in o.attributes||i.push(s(n[r],a))}if(e.indices!==void 0&&!o.index){const r=t.getDependency("accessor",e.indices).then(function(a){o.setIndex(a)});i.push(r)}return Xe.workingColorSpace!==Gt&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${Xe.workingColorSpace}" not supported.`),Bn(o,e),Mv(o,e,t),Promise.all(i).then(function(){return e.targets!==void 0?mv(o,e.targets,t):o})}function yi(o){const e=new Map,t=new Map,n=o.clone();return cu(o,n,function(i,s){e.set(s,i),t.set(i,s)}),n.traverse(function(i){if(!i.isSkinnedMesh)return;const s=i,r=e.get(i),a=r.skeleton.bones;s.skeleton=r.skeleton.clone(),s.bindMatrix.copy(r.bindMatrix),s.skeleton.bones=a.map(function(l){return t.get(l)}),s.bind(s.skeleton,s.bindMatrix)}),n}function cu(o,e,t){t(o,e);for(let n=0;n<o.children.length;n++)cu(o.children[n],e.children[n],t)}class Sv{constructor(e){this.scene=e,this.loader=new $r,this.sand=null,this.ocean=null,this.trees=[],this.rocks=[],this.props=[],this.colliders=[],this.terrainSize=700,this.sandCanvas=null,this.sandCtx=null,this.sandTexture=null,this.colorCanvas=null,this.colorCtx=null,this.colorTexture=null,this.lastFootprintPos=new A,this._buildTerrain(),this._buildOcean(),this._loadRocks(),this._spawnVegetation(),this._spawnBeachProps(),this._loadTrees(),this._loadFerns(),this._spawnSeagulls(),this.scene.background=new le(8900331),this.scene.fog=new jr(8900331,.0035)}getTerrainHeight(e,t){const n=Math.sin(t*.05)*15,i=e+n;let s=2;if(i<-120?s+=Math.pow(Math.abs(i+120)*.08,1.8):i>30&&(s-=(i-30)*.15,s<-20&&(s=-20)),Math.abs(t)>130){const r=Math.abs(t)-130;let a=Math.pow(r*.15,1.5);if(e>-30){let l=1-(e+30)/60;l<0&&(l=0),a*=l}s+=a}return s+=Math.sin(e*.2)*.2+Math.cos(t*.2)*.2,Math.abs(e)<10&&Math.abs(t-40)<10&&(s=2),s}_buildTerrain(){const t=new Wt(this.terrainSize,this.terrainSize,192,192);t.rotateX(-Math.PI/2);const n=t.attributes.position;for(let a=0;a<n.count;a++){const l=n.getX(a),h=n.getZ(a);n.setY(a,this.getTerrainHeight(l,h))}t.computeVertexNormals(),this.sandCanvas=document.createElement("canvas"),this.sandCanvas.width=1024,this.sandCanvas.height=1024,this.sandCtx=this.sandCanvas.getContext("2d"),this.sandCtx.fillStyle="#000000",this.sandCtx.fillRect(0,0,1024,1024),this.sandTexture=new Hr(this.sandCanvas),this.sandTexture.anisotropy=4,this.colorCanvas=document.createElement("canvas"),this.colorCanvas.width=1024,this.colorCanvas.height=1024,this.colorCtx=this.colorCanvas.getContext("2d"),this.colorCtx.fillStyle="#d4a86a",this.colorCtx.fillRect(0,0,1024,1024);const i=this.colorCtx.getImageData(0,0,1024,1024),s=i.data;for(let a=0;a<s.length;a+=4){const l=(Math.random()-.5)*20;s[a]+=l,s[a+1]+=l*.8,s[a+2]+=l*.5}this.colorCtx.putImageData(i,0,0),this.colorTexture=new Hr(this.colorCanvas),this.colorTexture.anisotropy=4;const r=new dt({map:this.colorTexture,bumpMap:this.sandTexture,bumpScale:3,roughness:.85,metalness:.05,color:16777215});this.sand=new Re(t,r),this.sand.receiveShadow=!0,this.scene.add(this.sand),this._buildWetSandStrip()}_buildWetSandStrip(){const i=new Wt(25,this.terrainSize,32,160);i.rotateX(-Math.PI/2);const s=i.attributes.position,r=new Float32Array(s.count*4);for(let h=0;h<s.count;h++){const u=s.getX(h),c=s.getZ(h),d=Math.sin(c*.05)*15,f=20+u/(25/2)*(25/2)-d*.2;let g=this.getTerrainHeight(f,c)+.03;s.setX(h,f),s.setY(h,g);const _=(u+25/2)/25,m=Math.sin(_*Math.PI)*.45;r[h*4]=.4,r[h*4+1]=.3,r[h*4+2]=.2,r[h*4+3]=m}i.setAttribute("color",new bt(r,4)),i.computeVertexNormals();const a=new dt({vertexColors:!0,roughness:.35,metalness:.15,transparent:!0,depthWrite:!1}),l=new Re(i,a);l.receiveShadow=!0,this.scene.add(l)}_buildOcean(){const n=new Wt(500,750,64,64);n.rotateX(-Math.PI/2);const i=n.attributes.position;for(let r=0;r<i.count;r++)i.setX(r,i.getX(r)+500/2+25);n.computeBoundingBox(),n.computeBoundingSphere();const s=new wt({uniforms:{time:{value:0},cameraPos:{value:new A}},vertexShader:`
        uniform float time;
        varying vec3 vWorldPos;
        varying float vElevation;

        void main() {
          vec3 pos = position;
          vec4 worldPos = modelMatrix * vec4(pos, 1.0);

          // Multi-octave waves
          float wave1 = sin(worldPos.x * 0.15 + time * 1.2) * cos(worldPos.z * 0.12 + time * 0.8);
          float wave2 = sin(worldPos.x * 0.04 - time * 0.6) * sin(worldPos.z * 0.06 + time * 0.5);
          float detail = sin(worldPos.x * 1.0 + time * 2.5) * sin(worldPos.z * 0.8 - time * 1.5) * 0.08;
          float swell = sin(worldPos.x * 0.015 + time * 0.2) * 1.5;

          // Shore waves — bigger near shore, calmer deep
          float shoreProximity = 1.0 - clamp((worldPos.x - 25.0) / 80.0, 0.0, 1.0);
          float shoreWave = sin(worldPos.x * 0.3 - time * 2.0 + worldPos.z * 0.1) * shoreProximity * 1.2;

          vElevation = wave1 * 0.6 + wave2 * 1.0 + detail + swell + shoreWave;

          vec3 newPos = position;
          newPos.y += vElevation;

          // Reduce wave height near the very edge (smooth transition)
          float edgeFade = smoothstep(25.0, 40.0, worldPos.x);
          newPos.y *= edgeFade;

          vWorldPos = (modelMatrix * vec4(newPos, 1.0)).xyz;
          gl_Position = projectionMatrix * viewMatrix * vec4(newPos, 1.0);
        }
      `,fragmentShader:`
        uniform float time;
        uniform vec3 cameraPos;

        varying vec3 vWorldPos;
        varying float vElevation;

        // ── Procedural value noise (no texture asset, cheap on GPU) ──
        float hash21(vec2 p) {
          p = fract(p * vec2(123.34, 456.21));
          p += dot(p, p + 34.345);
          return fract(p.x * p.y);
        }
        float vnoise(vec2 p) {
          vec2 i = floor(p);
          vec2 f = fract(p);
          float a = hash21(i);
          float b = hash21(i + vec2(1.0, 0.0));
          float c = hash21(i + vec2(0.0, 1.0));
          float d = hash21(i + vec2(1.0, 1.0));
          vec2 u = f * f * (3.0 - 2.0 * f);
          return mix(mix(a, b, u.x), mix(c, d, u.x), u.y);
        }
        // 2 octaves is enough for the dither effect on foam — perceptually
        // identical to 4 at our zoom levels but ~half the noise samples.
        float fbm(vec2 p) {
          float v = 0.5 * vnoise(p);
          v += 0.25 * vnoise(p * 2.13 + vec2(13.0, 7.0));
          return v;
        }

        void main() {
          // ── Coarse analytic normal from the same wave field as the vertex shader
          float dx = 0.15 * cos(vWorldPos.x * 0.15 + time * 1.2) * cos(vWorldPos.z * 0.12 + time * 0.8) +
                     0.04 * cos(vWorldPos.x * 0.04 - time * 0.6) * sin(vWorldPos.z * 0.06 + time * 0.5);
          float dz = -0.12 * sin(vWorldPos.x * 0.15 + time * 1.2) * sin(vWorldPos.z * 0.12 + time * 0.8) +
                      0.06 * sin(vWorldPos.x * 0.04 - time * 0.6) * cos(vWorldPos.z * 0.06 + time * 0.5);

          // ── High-frequency noise normal (2 layers, scrolling opposite directions)
          // Adds the "ripple" detail that pure analytic waves can't produce.
          vec2 nuv1 = vWorldPos.xz * 0.55 + vec2( time * 0.30, -time * 0.18);
          vec2 nuv2 = vWorldPos.xz * 1.25 + vec2(-time * 0.21,  time * 0.27);
          float n1 = vnoise(nuv1);
          float n2 = vnoise(nuv2);
          // Centred derivatives via finite differences (cheap, 2 extra samples)
          float h = 0.35;
          float nDX = (vnoise(nuv1 + vec2(h, 0.0)) - n1) * 0.6
                    + (vnoise(nuv2 + vec2(h, 0.0)) - n2) * 0.4;
          float nDZ = (vnoise(nuv1 + vec2(0.0, h)) - n1) * 0.6
                    + (vnoise(nuv2 + vec2(0.0, h)) - n2) * 0.4;

          vec3 normal = normalize(vec3(-(dx + nDX * 1.4), 1.0, -(dz + nDZ * 1.4)));

          // ── Depth-based color
          float shoreDist = clamp((vWorldPos.x - 25.0) / 120.0, 0.0, 1.0);

          vec3 shallowColor = vec3(0.10, 0.78, 0.82);
          vec3 midColor     = vec3(0.02, 0.35, 0.65);
          vec3 deepColor    = vec3(0.01, 0.06, 0.22);

          float depth = clamp(shoreDist - vElevation * 0.08, 0.0, 1.0);
          vec3 baseColor = mix(shallowColor, midColor, min(1.0, depth * 2.0));
          baseColor = mix(baseColor, deepColor, max(0.0, depth * 2.0 - 1.0));

          // ── Lighting setup
          vec3 lightDir = normalize(vec3(1.0, 1.5, -0.5));
          vec3 viewDir  = normalize(cameraPos - vWorldPos);

          // ── Soft, slightly anisotropic sun glint (replaces the hard pow 512)
          // Combine a tight inner highlight with a wider halo for a cinematic look.
          vec3 halfVec = normalize(lightDir + viewDir);
          float ndoth  = max(0.0, dot(normal, halfVec));
          float specSharp = pow(ndoth, 220.0) * 1.6;
          float specHalo  = pow(ndoth,  32.0) * 0.35;
          // Stretch slightly along the wave-crest axis so the glint isn't a perfect circle
          float stretch = 1.0 - abs(normal.x) * 0.55;
          float sunGlint = (specSharp + specHalo) * stretch;

          // ── Sky-gradient reflection (zenith → horizon) for a nicer fresnel
          // Reflect view direction roughly upward; the higher the bounce, the
          // more zenith colour shows through.
          vec3 reflDir = normalize(reflect(-viewDir, normal));
          float skyT   = clamp(reflDir.y * 0.5 + 0.5, 0.0, 1.0);
          vec3 zenith  = vec3(0.42, 0.66, 0.95);
          vec3 horizon = vec3(0.78, 0.88, 1.00);
          vec3 skyColor = mix(horizon, zenith, smoothstep(0.0, 0.85, skyT));

          float fresnel = pow(1.0 - max(0.0, dot(viewDir, normal)), 5.0);
          baseColor = mix(baseColor, skyColor, fresnel * 0.55);

          // ── Caustics (slight reduction; the high-freq normals carry detail now)
          vec2 p = vWorldPos.xz * 0.25;
          float c1 = sin(p.x + time * 0.8) + sin(p.y - time * 0.7);
          float c2 = sin(p.x * 0.6 - p.y * 0.5 + time * 1.2) * sin(p.x * 0.4 + p.y * 0.7 - time * 0.6);
          float caustic = smoothstep(0.0, 1.5, max(0.0, c1 + c2 * 2.0)) * 0.18;
          baseColor += caustic * shallowColor * (1.0 - shoreDist) * 1.0;

          // ── Shore foam — rolling tide
          float tidePhase = time * 0.8;
          float tidePos = sin(tidePhase) * 8.0 + 35.0;
          float distToTide = abs(vWorldPos.x - tidePos);
          float tideFoam = smoothstep(5.0, 0.0, distToTide) * 0.8;
          float foam2 = smoothstep(3.0, 0.0, abs(vWorldPos.x - tidePos - 10.0)) * 0.3;
          float foam3 = smoothstep(2.0, 0.0, abs(vWorldPos.x - tidePos - 18.0)) * 0.15;

          // Multi-octave foam dither — replaces single sine for a textured look
          vec2 foamUv = vWorldPos.xz * vec2(0.4, 0.85) + vec2(time * 0.5, time * 0.3);
          float foamDetail = fbm(foamUv);
          float totalFoam = (tideFoam + foam2 + foam3) * mix(0.45, 1.05, foamDetail);

          // Tiny scattered whitecaps far from shore where wave amplitude is high
          float capMask = smoothstep(0.55, 1.0, abs(vElevation) * 0.85)
                        * smoothstep(0.10, 0.30, fbm(vWorldPos.xz * 0.6 + time * 0.15))
                        * (1.0 - shoreDist);
          totalFoam += capMask * 0.65;

          vec3 foamColor = vec3(1.0, 1.0, 1.0) * totalFoam;

          // Subtle horizon haze — only kicks in past x=240 and tops out at
          // 35% mix so the deep ocean keeps most of its color.
          float fogMix = smoothstep(240.0, 480.0, vWorldPos.x);
          vec3 hazeColor = vec3(0.69, 0.79, 0.88);
          baseColor = mix(baseColor, hazeColor, fogMix * 0.35);

          // ── Edge transparency at shore
          float edgeAlpha = smoothstep(25.0, 35.0, vWorldPos.x);
          float alpha = mix(0.0, 0.92, edgeAlpha);

          // ── Subsurface scattering — soft green-blue translucency near shore
          float sss = max(0.0, dot(lightDir, -normal)) * (1.0 - shoreDist) * 0.12;
          baseColor += vec3(0.0, 0.25, 0.18) * sss;

          gl_FragColor = vec4(baseColor + foamColor + vec3(sunGlint), alpha);
        }
      `,transparent:!0,depthWrite:!1});this.ocean=new Re(n,s),this.ocean.position.y=1.2,this.scene.add(this.ocean)}_loadRocks(){this.loader.load("./models/simple_rock_iv.glb",e=>{this._placeRocks(e.scene,"simple_rock",20),console.log("✓ Rocks loaded")})}_placeRocks(e,t,n){for(let i=0;i<n;i++){const s=e.clone();let r,a;if(t==="mountain"){const u=[{x:-80,z:-100},{x:-90,z:80},{x:-100,z:-30},{x:-85,z:180}],c=u[i%u.length];r=c.x+(Math.random()-.5)*10,a=c.z+(Math.random()-.5)*20}else{const u=Math.random();u<.4?(r=15+Math.random()*25,a=-190+Math.random()*380):u<.7?(r=-10+Math.random()*40,a=-190+Math.random()*380):(r=-30-Math.random()*90,a=-190+Math.random()*380)}Math.abs(r)<12&&Math.abs(a-40)<25&&(r+=r>0?18:-18);const l=this.getTerrainHeight(r,a);let h;t==="mountain"?(h=4+Math.random()*3,s.position.set(r,l+h*.1,a)):(h=1.2+Math.random()*2,s.position.set(r,l+h*.15,a)),s.scale.setScalar(h),s.rotation.y=Math.random()*Math.PI*2,t==="simple_rock"&&(s.rotation.x=(Math.random()-.5)*.3,s.rotation.z=(Math.random()-.5)*.2),s.traverse(u=>{u.isMesh&&(u.castShadow=!0,u.receiveShadow=!0)}),this.scene.add(s),this.rocks.push(s),this.colliders.push({x:r,z:a,radius:h*(t==="mountain"?1.5:.8)})}}_spawnVegetation(){const e=new dt({roughness:.8,metalness:.1,side:vt,vertexColors:!0});e.onBeforeCompile=a=>{a.uniforms.time={value:0},this.grassShader=a,a.vertexShader=`
        uniform float time;
        ${a.vertexShader}
      `,a.vertexShader=a.vertexShader.replace("#include <begin_vertex>",`
        #include <begin_vertex>
        // instanceMatrix[3] contains world position translations
        vec3 worldPos = vec3(instanceMatrix[3][0], instanceMatrix[3][1], instanceMatrix[3][2]);
        // Sway based on world x and z, and time. Height amplifies sway.
        float swayX = sin(time * 1.5 + worldPos.x * 0.1) * 0.15 * position.y;
        float swayZ = cos(time * 1.2 + worldPos.z * 0.1) * 0.1 * position.y;
        transformed.x += swayX;
        transformed.z += swayZ;
        `)};const t=this._createTuftGeometry(),n=15e3,i=new Yh(t,e,n);i.castShadow=!0,i.receiveShadow=!0;const s=new lt;let r=0;for(let a=0;a<n;a++){const l=Math.random(),h=-130+Math.pow(l,1.5)*150,u=Math.random()<.5?-1:1,c=Math.pow(Math.random(),.8)*190,d=u*c,f=this.getTerrainHeight(h,d);if(f<4)continue;s.position.set(h,f-.1,d),s.rotation.y=Math.random()*Math.PI*2;const g=Math.random(),_=.3+Math.pow(g,2)*2.2;s.scale.setScalar(_),s.updateMatrix(),i.setMatrixAt(r,s.matrix),r++}i.count=r,i.instanceMatrix.needsUpdate=!0,this.scene.add(i)}_createTuftGeometry(){const e=[];for(let n=0;n<16;n++){const i=1.5+Math.random()*2,s=.2+Math.random()*.2,r=new Wt(s,i,1,4);r.translate(0,i/2,0);const a=r.attributes.position,l=new bt(new Float32Array(a.count*3),3),h=.5+Math.random()*1;for(let M=0;M<a.count;M++){const v=a.getX(M),P=a.getY(M),C=a.getZ(M),E=Math.max(0,P/i),L=1-Math.pow(E,2);a.setX(M,v*L);const w=Math.pow(E,1.5)*h;a.setZ(M,C+w);const S=new le(2968606),R=new le(7119666),D=S.clone().lerp(R,E);l.setXYZ(M,D.r,D.g,D.b)}r.setAttribute("color",l),r.computeVertexNormals();const u=n/16*Math.PI*2+Math.random()*.5,c=Math.random()*.2,d=new De,f=(Math.random()-.5)*.2,g=-u+Math.PI/2,_=new mn(f,g,0,"XYZ"),m=new sn().setFromEuler(_),p=new A(Math.cos(u)*c,0,Math.sin(u)*c),x=new A(1,1,1);d.compose(p,m,x),r.applyMatrix4(d),e.push(r)}return G_(e)}_spawnBeachProps(){const e=new dt({color:9136404,roughness:.95,metalness:0});for(let n=0;n<12;n++){const i=-10+Math.random()*35,s=-190+Math.random()*380,r=this.getTerrainHeight(i,s);if(r<1||r>5)continue;const a=2+Math.random()*4,l=new yn(.15,.25,a,6),h=l.attributes.position;for(let c=0;c<h.count;c++)h.setX(c,h.getX(c)+(Math.random()-.5)*.1),h.setZ(c,h.getZ(c)+(Math.random()-.5)*.1);l.computeVertexNormals();const u=new Re(l,e);u.position.set(i,r+.1,s),u.rotation.x=Math.PI/2,u.rotation.z=Math.random()*Math.PI,u.castShadow=!0,u.receiveShadow=!0,this.scene.add(u),this.props.push(u)}const t=[16774625,16770244,16113331,16767673,16444375];for(let n=0;n<30;n++){const i=-5+Math.random()*30,s=-190+Math.random()*380,r=this.getTerrainHeight(i,s);if(r<1||r>4)continue;const a=new rn(.3,6,4);a.scale(1,.3,1.3);const l=new dt({color:t[n%5],roughness:.5,metalness:.2}),h=new Re(a,l);h.position.set(i,r+.05,s),h.rotation.y=Math.random()*Math.PI*2,h.scale.setScalar(.5+Math.random()*.8),h.castShadow=!0,this.scene.add(h),this.props.push(h)}}_loadTrees(){this.loader.load("./models/coconut_tree.glb",e=>{for(let t=0;t<15;t++){const n=e.scene.clone(),i=-20-Math.random()*100,s=-190+Math.random()*380;let r=this.getTerrainHeight(i,s);n.position.set(i,r-1.5,s),n.rotation.y=Math.random()*Math.PI*2,n.rotation.z=(Math.random()-.5)*.15;const a=14+Math.random()*10;n.scale.setScalar(a),n.traverse(l=>{l.isMesh&&(l.castShadow=!0,l.receiveShadow=!0,l.material&&(l.material.side=vt,l.material.alphaTest=.5,l.material.transparent=!1,l.material.depthWrite=!0))}),this.scene.add(n),this.trees.push(n),this.colliders.push({x:i,z:s,radius:a*.35})}for(let t=0;t<60;t++){const n=yi(e.scene),i=Math.random(),s=-130+Math.pow(i,2)*120,r=Math.random()<.5?-1:1,a=Math.pow(Math.random(),.6)*190,l=r*a,h=this.getTerrainHeight(s,l);n.position.set(s,h-.5,l),n.rotation.y=Math.random()*Math.PI*2,n.rotation.z=(Math.random()-.5)*1.5,n.rotation.x=(Math.random()-.5)*1.5;const u=2+Math.random()*5;n.scale.setScalar(u),n.traverse(c=>{c.isMesh&&(c.castShadow=!0,c.receiveShadow=!0,c.material&&(c.material.side=vt,c.material.alphaTest=.5,c.material.transparent=!1,c.material.depthWrite=!0))}),this.scene.add(n)}console.log("✓ Coconut trees loaded")})}_loadFerns(){this.loader.load("./models/fern_grass_02.glb",e=>{const n=new Pt().setFromObject(e.scene).getSize(new A),i=Math.max(n.x,n.y,n.z),s=i>0?40/i:1,r=[{x:-95,z:-140},{x:-65,z:-60},{x:-85,z:140}],a=[];for(let h=0;h<9;h++)a.push({x:-150+Math.random()*30,z:-170+h/8*340+(Math.random()-.5)*18});const l=r.concat(a);for(let h=0;h<l.length;h++){const u=yi(e.scene),c=l[h];let d=this.getTerrainHeight(c.x,c.z);u.position.set(c.x,d-.1,c.z),u.rotation.y=Math.random()*Math.PI*2;const g=h<r.length?s*(1+Math.random()*.5):s*(.45+Math.random()*.35);u.scale.setScalar(g),u.traverse(_=>{_.isMesh&&(_.castShadow=!0,_.receiveShadow=!0,_.material&&(_.material.side=vt,_.material.alphaTest=.5,_.material.transparent=!1,_.material.depthWrite=!0))}),this.scene.add(u)}console.log("✓ Ferns loaded prominently")},void 0,e=>console.log("Failed to load ferns",e))}_spawnSeagulls(){this.seagulls=[];const e=new dt({color:16777215,roughness:.8,side:vt}),t=new dt({color:15658734,roughness:.6});for(let n=0;n<5;n++){const i=new Xt,s=new al(.3,1.2,4,8);s.rotateZ(Math.PI/2),i.add(new Re(s,t));const r=new Wt(2,.6),a=new Re(r,e);a.position.set(0,.1,1),i.add(a);const l=new Re(r,e);l.position.set(0,.1,-1),i.add(l);const h=40+Math.random()*100,u=.15+Math.random()*.2,c=50+Math.random()*60,d=Math.random()*Math.PI*2,f=-20+Math.random()*40,g=Math.random()*60;i.position.set(f,c,g),this.scene.add(i),this.seagulls.push({group:i,leftWing:a,rightWing:l,orbitR:h,orbitS:u,h:c,phase:d,cx:f,cz:g})}}stampFootprint(e,t,n){if(e.distanceTo(this.lastFootprintPos)<.8)return;const s=this.terrainSize/2,r=1024,a=Math.floor((e.x+s)/this.terrainSize*r),l=Math.floor((e.z+s)/this.terrainSize*r);if(a<8||a>r-8||l<8||l>r-8)return;this._footprintCount=(this._footprintCount||0)+1;const h=this._footprintCount%2===0?-1:1;for(let u=-1;u<=1;u+=2){const c=a+h*3+u*1,d=l+u*2;this.sandCtx.save(),this.sandCtx.translate(c,d),this.sandCtx.rotate(Math.random()*.5-.25),this.sandCtx.scale(1,1.8);const f=this.sandCtx.createRadialGradient(0,0,0,0,0,3);f.addColorStop(0,"rgba(255,255,255,0.6)"),f.addColorStop(1,"rgba(255,255,255,0)"),this.sandCtx.fillStyle=f,this.sandCtx.beginPath(),this.sandCtx.arc(0,0,3,0,Math.PI*2),this.sandCtx.fill(),this.sandCtx.restore(),this.colorCtx.save(),this.colorCtx.translate(c,d),this.colorCtx.rotate(Math.random()*.5-.25),this.colorCtx.scale(1,1.8);const g=this.colorCtx.createRadialGradient(0,0,0,0,0,3);g.addColorStop(0,"rgba(160, 120, 75, 0.5)"),g.addColorStop(1,"rgba(160, 120, 75, 0)"),this.colorCtx.fillStyle=g,this.colorCtx.beginPath(),this.colorCtx.arc(0,0,3,0,Math.PI*2),this.colorCtx.fill(),this.colorCtx.restore()}this.sandTexture.needsUpdate=!0,this.colorTexture.needsUpdate=!0,this.lastFootprintPos.copy(e)}update(e,t){this.ocean&&this.ocean.material.uniforms&&(this.ocean.material.uniforms.time.value=t),this._fadeTimer=(this._fadeTimer||0)+e,this._fadeTimer>.3&&(this._fadeTimer=0,this.sandCtx.fillStyle="rgba(0, 0, 0, 0.08)",this.sandCtx.fillRect(0,0,1024,1024),this.sandTexture.needsUpdate=!0,this.colorCtx.fillStyle="rgba(212, 168, 106, 0.08)",this.colorCtx.fillRect(0,0,1024,1024),this.colorTexture.needsUpdate=!0);for(const n of this.seagulls){const i=t*n.orbitS+n.phase;n.group.position.x=n.cx+Math.cos(i)*n.orbitR,n.group.position.z=n.cz+Math.sin(i)*n.orbitR,n.group.position.y=n.h+Math.sin(i*2)*3,n.group.rotation.y=-i+Math.PI/2;const s=Math.sin(t*4+n.phase)*.35;n.leftWing.rotation.x=s,n.rightWing.rotation.x=-s}this.grassShader&&(this.grassShader.uniforms.time.value=t)}}const Qn={IDLE:"idle",WALK:"walk",RUN:"run",ATTACK:"attack"};class wv{constructor(e,t,n,i){this.scene=e,this.world=t,this.input=n,this.cameraController=i,this.model=null,this.mixer=null,this.animations={},this.currentState=Qn.IDLE,this._singleAnimMode=!1,this._targetTimeScale=.15,this.loaded=!1,this.walkSpeed=25,this.runSpeed=45,this.rotationSmoothing=10,this.targetRotationY=Math.PI,this.position=new A(0,2.5,40),this.velocity=new A(0,0,0),this.verticalVelocity=0,this.isAirborne=!1,this.jumpForce=25,this.gravity=55,this.maxAmmo=100,this.currentAmmo=100,this.sandBurstCooldown=0,this.sandBurstCooldownMax=15,this._initSandBurstParticles(),this.isInWater=!1,this.maxHealth=100,this.health=100,this._damageFlashTimer=0,this._dropletOpacity=0,this.isDead=!1,this.deathTimer=0,this._deathTriggered=!1,this.coins=0,this.totalCoinsCollected=0,this.coinMultiplier=1,this.weaponType="pistol",this.weaponLevels={pistol:1,shotgun:1,charger:1},this.utilityLevels={maxHealth:1,waterCapacity:1,burrowStrength:1,minionCapacity:1,minionLevel:1,sandBurst:1,jumpPower:1},this._initSandBurstParticles(),this._load()}_initSandBurstParticles(){this.sandParticleCount=1500;const e=new xt,t=new Float32Array(this.sandParticleCount*3),n=[];for(let c=0;c<this.sandParticleCount*3;c++)t[c]=9999;for(let c=0;c<this.sandParticleCount;c++)n.push(new A);e.setAttribute("position",new bt(t,3));const i=document.createElement("canvas");i.width=16,i.height=16;const s=i.getContext("2d"),r=s.createRadialGradient(8,8,0,8,8,8);r.addColorStop(0,"rgba(255, 230, 150, 1)"),r.addColorStop(1,"rgba(255, 230, 150, 0)"),s.fillStyle=r,s.fillRect(0,0,16,16);const a=new Hr(i),l=new il({color:15654280,size:.8,map:a,transparent:!0,opacity:.9,depthWrite:!1,blending:ri});this.sandParticleSystem=new Kh(e,l),this.sandParticleSystem.frustumCulled=!1,this.scene.add(this.sandParticleSystem),this.sandParticleVelocities=n,this.sandBurstActive=!1,this.sandBurstTimer=0;const h=new Ws(.1,30,96,96);this._sandShockwaveUniforms={uTime:{value:0},uSpeed:{value:50},uFrequency:{value:1.5},uAmplitude:{value:4},uDecay:{value:.15},uThickness:{value:.4},uDuration:{value:1.5}};const u=new wt({uniforms:this._sandShockwaveUniforms,vertexShader:`
        uniform float uTime;
        uniform float uSpeed;
        uniform float uFrequency;
        uniform float uAmplitude;
        uniform float uDecay;
        uniform float uThickness;
        
        varying float vElevation;
        varying float vDist;
        
        void main() {
          float d = length(position.xy);
          vDist = d / 30.0; // 0 to 1 normalized radius (matches doubled ring outer)
          
          float currentRadius = uTime * uSpeed;
          
          float mask = exp(-pow((d - currentRadius) * uThickness, 2.0));
          float wave = sin((d - currentRadius) * uFrequency);
          float amp = uAmplitude / (1.0 + d * uDecay);
          
          float elevation = wave * mask * amp;
          elevation *= smoothstep(0.0, 1.5, d); // fade center so it doesn't clip crab
          
          vElevation = elevation;
          
          vec3 newPosition = position;
          newPosition.z += elevation; 
          
          gl_Position = projectionMatrix * modelViewMatrix * vec4(newPosition, 1.0);
        }
      `,fragmentShader:`
        uniform float uTime;
        uniform float uDuration;

        varying float vElevation;
        varying float vDist;

        void main() {
          vec3 baseColor = vec3(0.93, 0.86, 0.53);
          vec3 peakColor = vec3(1.0, 0.95, 0.7);

          vec3 color = mix(baseColor, peakColor, clamp(vElevation * 0.5, 0.0, 1.0));

          float timeFade = max(0.0, 1.0 - (uTime / uDuration));

          float edgeFade = 1.0 - smoothstep(0.85, 1.0, vDist);

          float alpha = (0.05 + abs(vElevation) * 0.8) * timeFade * edgeFade;

          gl_FragColor = vec4(color, alpha);
        }
      `,transparent:!0,side:vt,depthWrite:!1,blending:ri,wireframe:!1});this._sandShockwave=new Re(h,u),this._sandShockwave.rotation.x=-Math.PI/2,this._sandShockwave.visible=!1,this.scene.add(this._sandShockwave)}_load(){const e=new $r;e.load("./models/sweet_crab_sketchfabweekly.glb",t=>this._onModelLoaded(t),void 0,t=>{console.warn("Sweet crab failed, falling back to animated_crab.glb",t),e.load("./models/animated_crab.glb",n=>this._onModelLoaded(n),void 0,n=>console.error("Failed to load any crab model",n))})}_onModelLoaded(e){this.model=e.scene;const t=new Pt().setFromObject(this.model),n=t.getSize(new A),s=4/Math.max(n.x,n.y,n.z);if(this.model.scale.setScalar(s),t.setFromObject(this.model),this._modelBottomOffset=t.min.y*s,this.model.position.copy(this.position),this.model.traverse(r=>{r.isMesh&&(r.castShadow=!0,r.receiveShadow=!0,r.material&&r.material.isMeshStandardMaterial&&(r.material.roughness=Math.min(r.material.roughness,.7),r.material.envMapIntensity=.5))}),this.scene.add(this.model),e.animations&&e.animations.length>0){this.mixer=new ji(this.model),console.log(`Crab: ${e.animations.length} animation(s):`),e.animations.forEach((a,l)=>console.log(`  [${l}] "${a.name}" — ${a.duration.toFixed(2)}s`));for(const a of e.animations){const l=a.name.toLowerCase(),h=this.mixer.clipAction(a);l.includes("idle")||l.includes("breath")?this.animations.idle=h:l.includes("walk")||l.includes("crawl")?this.animations.walk=h:l.includes("run")||l.includes("sprint")?this.animations.run=h:(l.includes("attack")||l.includes("shoot"))&&(this.animations.attack=h)}if(e.animations.length===1){const a=this.mixer.clipAction(e.animations[0]);this.animations.idle=a,this.animations.walk=a,this.animations.run=a,this._singleAnimMode=!0}const r=this.animations.idle||this.animations.walk;r&&(r.play(),r.timeScale=.15)}this.loaded=!0,console.log("✓ Crab loaded and ready"),this._hasSpokenIntro=!1}_transitionTo(e){if(this.currentState===e)return;if(this.currentState=e,this._singleAnimMode){const n={[Qn.IDLE]:.12,[Qn.WALK]:3.5,[Qn.RUN]:7,[Qn.ATTACK]:.8};this._targetTimeScale=n[e]||1;return}const t=this.animations[e];if(t){for(const[n,i]of Object.entries(this.animations))i&&i!==t&&i.fadeOut(.3);t.reset().fadeIn(.3).play()}}update(e,t,n=!0){if(!this.loaded||!this.model)return;this.isDead&&this.deathTimer>0&&(this.deathTimer=Math.max(0,this.deathTimer-e));const i=n&&!this.isDead,s=i?this.input.getMovementInput():{x:0,z:0,magnitude:0},r=s.magnitude>0,a=i&&this.input.isSprinting&&r;if(r?this._transitionTo(a?Qn.RUN:Qn.WALK):this._transitionTo(Qn.IDLE),r){const D=a?this.runSpeed:this.walkSpeed,I=this.cameraController.yaw,k=Math.sin(I),X=Math.cos(I),q=s.x*X-s.z*k,J=s.z*X+s.x*k;this.velocity.x=q*D,this.velocity.z=J*D,this.targetRotationY=Math.atan2(q,J)}else this.velocity.x*=.85,this.velocity.z*=.85;let l=this.position.x+this.velocity.x*e,h=this.position.z+this.velocity.z*e;const u=this.world.getTerrainHeight(l,h),c=Math.sin(h*.05)*15,d=l+c;if(d<-145){const D=Math.pow(Math.abs(d+145)*.08,2);D>.4&&(l+=D*.35*e*60)}const f=3;for(const D of this.world.colliders)if(Math.sqrt((l-D.x)**2+(h-D.z)**2)<D.radius+f){const k=Math.atan2(h-D.z,l-D.x);l=D.x+Math.cos(k)*(D.radius+f),h=D.z+Math.sin(k)*(D.radius+f)}l=Math.max(-160,Math.min(70,l)),h=Math.max(-190,Math.min(190,h)),this.position.x=l,this.position.z=h,i&&!this.isAirborne&&this.input.consumeJump()&&(this.verticalVelocity=this.jumpForce,this.isAirborne=!0);const g=u-.1;this.isAirborne?(this.verticalVelocity-=this.gravity*e,this.position.y+=this.verticalVelocity*e,this.position.y<=g&&(this.position.y=g,this.verticalVelocity=0,this.isAirborne=!1)):(this.position.y+=(g-this.position.y)*Math.min(1,15*e),r?this.position.y+=Math.abs(Math.sin(t*22))*.08:this.position.y+=Math.sin(t*2)*.02),this.model.position.copy(this.position);let _=this.targetRotationY-this.model.rotation.y;for(;_>Math.PI;)_-=Math.PI*2;for(;_<-Math.PI;)_+=Math.PI*2;this.model.rotation.y+=_*Math.min(1,this.rotationSmoothing*e);const m=this.isInWater;this.isInWater=u<1.5&&l>25,this.isInWater&&!m&&this._dropletOpacity<.05&&this._generateDropletTexture();const p=this.isInWater?1:0,x=this.isInWater?.3:.5;this._dropletOpacity<p?this._dropletOpacity=Math.min(p,this._dropletOpacity+x*e):this._dropletOpacity>p&&(this._dropletOpacity=Math.max(p,this._dropletOpacity-x*e));const M=document.getElementById("water-droplets-overlay");if(M&&(M.style.opacity=this._dropletOpacity.toFixed(3)),this.isInWater&&this.currentAmmo<this.maxAmmo&&(this.currentAmmo=Math.min(this.maxAmmo,this.currentAmmo+30*e),this.audio&&this.audio.playReloadSound()),this._singleAnimMode&&this.animations.idle){const D=this.animations.idle;D.timeScale+=(this._targetTimeScale-D.timeScale)*Math.min(1,15*e)}this.sandBurstCooldown>0&&(this.sandBurstCooldown-=e,this.sandBurstCooldown<0&&(this.sandBurstCooldown=0));const v=document.getElementById("sandburst-fill");if(v)if(this.sandBurstCooldown<=0)v.style.strokeDashoffset="0",v.style.stroke="#FFD55A";else{const I=1-this.sandBurstCooldown/this.sandBurstCooldownMax;v.style.strokeDashoffset=(276.46*(1-I)).toFixed(2),v.style.stroke="#7a6a3a"}const P=document.getElementById("btn-burst");if(P)if(this.sandBurstCooldown<=0)P.style.setProperty("--cd","0"),P.classList.add("ready"),P.classList.remove("cooldown");else{const D=this.sandBurstCooldown/this.sandBurstCooldownMax;P.style.setProperty("--cd",(D*360).toFixed(1)),P.classList.add("cooldown"),P.classList.remove("ready")}if(this.sandBurstActive){this.sandBurstTimer-=e;const D=this.sandParticleSystem.geometry.attributes.position.array;for(let I=0;I<this.sandParticleCount;I++){const k=this.sandParticleVelocities[I];k.y-=45*e,k.x*=.94,k.z*=.94,D[I*3]+=k.x*e,D[I*3+1]+=k.y*e,D[I*3+2]+=k.z*e,D[I*3+1]<.1&&(D[I*3+1]=.1,k.y*=-.3,k.x*=.8,k.z*=.8)}if(this.sandParticleSystem.geometry.attributes.position.needsUpdate=!0,this.sandParticleSystem.material.opacity=Math.max(0,this.sandBurstTimer/1.5),this._sandShockwave&&this._sandShockwave.visible){const I=1.5-this.sandBurstTimer;this._sandShockwaveUniforms.uTime.value=I,this.sandBurstTimer<=0&&(this._sandShockwave.visible=!1)}if(this.sandBurstTimer<=0){this.sandBurstActive=!1;for(let I=0;I<this.sandParticleCount*3;I++)D[I]=9999;this.sandParticleSystem.geometry.attributes.position.needsUpdate=!0}}if(this.mixer&&this.mixer.update(e),this._damageFlashTimer>0){this._damageFlashTimer-=e;const D=this._damageFlashTimer/.2;this._flashMaterials||(this._flashMaterials=[],this.model.traverse(I=>{I.isMesh&&I.material&&(I.material.emissive||(I.material.emissive=new le),this._flashMaterials.push(I.material))}));for(let I=0;I<this._flashMaterials.length;I++)this._flashMaterials[I].emissive.setRGB(D*.8,0,0)}else if(this._flashMaterials&&this._flashWasNonZero){for(let D=0;D<this._flashMaterials.length;D++)this._flashMaterials[D].emissive.setRGB(0,0,0);this._flashWasNonZero=!1}this._flashWasNonZero=this._damageFlashTimer>0;const C=document.getElementById("ammo-count"),E=document.getElementById("ammo-fill");if(C&&(C.textContent=Math.round(this.currentAmmo)),E){const D=this.currentAmmo/this.maxAmmo;E.style.width=`${D*100}%`,D<.3?E.style.background="#ff4444":D<.6?E.style.background="#ffaa00":E.style.background="linear-gradient(90deg, #00BFFF, #00FF88)"}const L=document.getElementById("health-fill");L&&(L.style.width=`${this.health/this.maxHealth*100}%`);const w=document.getElementById("health-count");w&&(w.textContent=Math.round(this.health));const S=document.getElementById("low-health-overlay");if(S){const D=this.health/this.maxHealth;let I=0;D<.3&&(I=(.3-D)/.3),D<.1&&(I=Math.min(1,I+.35)),S.style.opacity=I.toFixed(3)}const R=document.getElementById("gun-tier");if(R){const D={pistol:"Pistol",shotgun:"Shotgun",charger:"Charger"},I=this.weaponLevels[this.weaponType]||1;R.textContent=`${D[this.weaponType]||"Pistol"} Lv.${I}`}this.cameraController.update(e,this.position)}takeDamage(e){this.health=Math.max(0,this.health-e),this._damageFlashTimer=.2;const t=document.getElementById("damage-overlay");t&&(t.style.opacity="0.4",setTimeout(()=>{t.style.opacity="0"},200)),this.health<=0?this._deathTriggered||(this._deathTriggered=!0,this.isDead=!0,this.deathTimer=7,this._onDeath?.()):this.dialogue&&Math.random()<.25&&this.health<40&&(!this._lastLowHealthVoice||performance.now()-this._lastLowHealthVoice>15e3)&&(this._lastLowHealthVoice=performance.now(),this.dialogue.heroCooldown=0,this.dialogue.speak(this.model,"Need more water... hold on.","hero",3))}_generateDropletTexture(){const e=document.getElementById("water-droplets-overlay");if(!e)return;const t=document.createElement("canvas");t.width=1920,t.height=1080;const n=t.getContext("2d"),i=40+Math.floor(Math.random()*90);for(let s=0;s<i;s++){const r=Math.random()*t.width,a=Math.random()*t.height,l=4+Math.random()*22,h=n.createRadialGradient(r,a,0,r,a,l);h.addColorStop(0,"rgba(220, 240, 255, 0.55)"),h.addColorStop(.55,"rgba(180, 220, 255, 0.22)"),h.addColorStop(1,"rgba(100, 180, 255, 0.00)"),n.fillStyle=h,n.beginPath(),n.arc(r,a,l,0,Math.PI*2),n.fill();const u=r-l*.3,c=a-l*.3,d=n.createRadialGradient(u,c,0,u,c,l*.42);d.addColorStop(0,"rgba(255, 255, 255, 0.9)"),d.addColorStop(1,"rgba(255, 255, 255, 0)"),n.fillStyle=d,n.beginPath(),n.arc(u,c,l*.42,0,Math.PI*2),n.fill(),n.fillStyle="rgba(20, 60, 110, 0.25)",n.beginPath(),n.arc(r+l*.05,a+l*.55,l*.55,.1,Math.PI*.95),n.fill()}e.style.backgroundImage=`url(${t.toDataURL("image/png")})`}reset(){this.maxHealth=100,this.maxAmmo=100,this.health=this.maxHealth,this.currentAmmo=this.maxAmmo,this.coins=0,this.totalCoinsCollected=0,this.isDead=!1,this.deathTimer=0,this._deathTriggered=!1,this._damageFlashTimer=0,this._lastLowHealthVoice=0,this._lastLowWaterVoice=0,this.weaponType="pistol",this.weaponLevels={pistol:1,shotgun:1,charger:1},this.utilityLevels={maxHealth:1,waterCapacity:1,burrowStrength:1,minionCapacity:1,minionLevel:1,sandBurst:1,jumpPower:1},this.coinMultiplier=1,this.sandBurstCooldown=0,this.sandBurstActive=!1,this.sandBurstTimer=0,this.position.set(0,2.5,40),this.velocity.set(0,0,0),this.targetRotationY=Math.PI,this.verticalVelocity=0,this.isAirborne=!1,this.jumpForce=25,this._dropletOpacity=0;const e=document.getElementById("water-droplets-overlay");if(e&&(e.style.opacity="0"),this.model&&(this.model.position.copy(this.position),this.model.rotation.y=this.targetRotationY,this.model.traverse(u=>{u.isMesh&&u.material&&u.material.emissive&&u.material.emissive.setRGB(0,0,0)})),this._sandShockwave&&(this._sandShockwave.visible=!1),this.sandParticleSystem){const u=this.sandParticleSystem.geometry.attributes.position.array;for(let c=0;c<u.length;c++)u[c]=9999;this.sandParticleSystem.geometry.attributes.position.needsUpdate=!0}const t=document.getElementById("coin-count");t&&(t.textContent="0");const n=document.getElementById("ammo-count");n&&(n.textContent=String(Math.round(this.maxAmmo)));const i=document.getElementById("ammo-fill");i&&(i.style.width="100%");const s=document.getElementById("health-fill");s&&(s.style.width="100%");const r=document.getElementById("health-count");r&&(r.textContent=String(Math.round(this.maxHealth)));const a=document.getElementById("sandburst-fill");a&&(a.style.strokeDashoffset="0",a.style.stroke="#FFD55A");const l=document.getElementById("btn-burst");l&&(l.style.setProperty("--cd","0"),l.classList.add("ready"),l.classList.remove("cooldown"));const h=document.getElementById("gun-tier");h&&(h.textContent="Pistol Lv.1")}addCoins(e){const t=Math.round(e*this.coinMultiplier);this.coins+=t,this.totalCoinsCollected+=t;const n=document.getElementById("coin-count");n&&(n.textContent=this.coins)}triggerSandBurst(e,t){if(this.sandBurstCooldown>0||!this.loaded||this.isDead)return!1;const n=this.utilityLevels.sandBurst||1;let i=30,s=25,r=15;n>=2&&(i=40),n>=3&&(r=12),n>=4&&(s=50),n>=5&&(i=50,s=75,r=10),this.sandBurstCooldownMax=r,this.sandBurstCooldown=this.sandBurstCooldownMax,t&&t.initialized&&t.playSandBurstSound&&t.playSandBurstSound();const a=this.sandParticleSystem.geometry.attributes.position.array;for(let h=0;h<this.sandParticleCount;h++){a[h*3]=this.position.x+(Math.random()-.5)*1.5,a[h*3+1]=this.position.y+.2+Math.random()*.8,a[h*3+2]=this.position.z+(Math.random()-.5)*1.5;const u=Math.random()*Math.PI*2,c=(Math.random()-.2)*.5,d=25+Math.random()*25;this.sandParticleVelocities[h].set(Math.cos(u)*d,Math.sin(c)*d,Math.sin(u)*d)}this.sandParticleSystem.geometry.attributes.position.needsUpdate=!0,this._sandShockwave&&(this._sandShockwave.position.copy(this.position),this._sandShockwave.position.y+=.05,this._sandShockwaveUniforms.uTime.value=0,this._sandShockwave.visible=!0),this.sandBurstActive=!0,this.sandBurstTimer=1.5;const l=25+n*2;if(e)for(const h of e.enemies){if(h.state==="dead"||h.state==="dying")continue;if(h.position.distanceTo(this.position)<=i){e.damageEnemy(h,s);const c=h.position.clone().sub(this.position).normalize();c.y=0,h._knockbackVelocity=c.multiplyScalar(l),h._staggerTimer=1.5}}return!0}}class Tv{constructor(){this.ctx=null;try{this.ctx=new(window.AudioContext||window.webkitAudioContext)}catch(e){console.warn("Web Audio not supported:",e)}this.masterGain=null,this.initialized=!1,this.oceanGain=null,this.windGain=null,this.scuttleGain=null,this.gunBuffers=[null,null,null,null],this.hitBuffer=null,this.reloadBuffer=null,this.turtleHitBuffer=null,this.turtleAttackBuffer=null,this.turtleDieBuffer=null,this.bossHitBuffer=null,this.bossAttackBuffer=null,this.bossDieBuffer=null,this.isMoving=!1,this._scuttleTimer=0,this._wavePhase=0,this.ctx&&this._loadSounds()}init(){if(!(this.initialized||!this.ctx)){this.masterGain=this.ctx.createGain(),this.masterGain.gain.value=.7,this.compressor=this.ctx.createDynamicsCompressor(),this.compressor.threshold.value=-12,this.compressor.knee.value=10,this.compressor.ratio.value=12,this.compressor.attack.value=.003,this.compressor.release.value=.25,this.softClip=this.ctx.createWaveShaper();{const t=new Float32Array(4096),n=.95;for(let i=0;i<4096;i++){const s=i*2/4095-1;t[i]=Math.tanh(s*n)}this.softClip.curve=t,this.softClip.oversample="4x"}this.masterGain.connect(this.compressor),this.compressor.connect(this.softClip),this.softClip.connect(this.ctx.destination),this._createOceanSound(),this._createWindSound(),this._createScuttleSystem(),this.initialized=!0,console.log("✓ Audio initialized")}}_createOceanSound(){const e=this.ctx.sampleRate*4,t=this.ctx.createBuffer(1,e,this.ctx.sampleRate),n=t.getChannelData(0);let i=0,s=0,r=0,a=0,l=0,h=0,u=0;for(let v=0;v<e;v++){const P=Math.random()*2-1;i=.99886*i+P*.0555179,s=.99332*s+P*.0750759,r=.969*r+P*.153852,a=.8665*a+P*.3104856,l=.55*l+P*.5329522,h=-.7616*h-P*.016898,n[v]=(i+s+r+a+l+h+u+P*.5362)*.05,u=P*.115926}const c=this.ctx.createBufferSource();c.buffer=t,c.loop=!0;const d=this.ctx.createBiquadFilter();d.type="lowpass",d.frequency.value=400,d.Q.value=.7;const f=this.ctx.createBiquadFilter();f.type="bandpass",f.frequency.value=200,f.Q.value=.5,this.oceanGain=this.ctx.createGain(),this.oceanGain.gain.value=.35,c.connect(d),d.connect(f),f.connect(this.oceanGain),this.oceanGain.connect(this.masterGain),c.start(),this._oceanLFO=this.ctx.createOscillator(),this._oceanLFO.type="sine",this._oceanLFO.frequency.value=.15;const g=this.ctx.createGain();g.gain.value=.12,this._oceanLFO.connect(g),g.connect(this.oceanGain.gain),this._oceanLFO.start();const _=this.ctx.createBufferSource();_.buffer=t,_.loop=!0;const m=this.ctx.createBiquadFilter();m.type="highpass",m.frequency.value=2e3;const p=this.ctx.createGain();p.gain.value=.06,_.connect(m),m.connect(p),p.connect(this.masterGain),_.start();const x=this.ctx.createOscillator();x.type="sine",x.frequency.value=.12;const M=this.ctx.createGain();M.gain.value=.04,x.connect(M),M.connect(p.gain),x.start()}_createWindSound(){const e=this.ctx.sampleRate*3,t=this.ctx.createBuffer(1,e,this.ctx.sampleRate),n=t.getChannelData(0);for(let u=0;u<e;u++)n[u]=(Math.random()*2-1)*.5;const i=this.ctx.createBufferSource();i.buffer=t,i.loop=!0;const s=this.ctx.createBiquadFilter();s.type="bandpass",s.frequency.value=600,s.Q.value=.3,this.windGain=this.ctx.createGain(),this.windGain.gain.value=.08,i.connect(s),s.connect(this.windGain),this.windGain.connect(this.masterGain),i.start();const r=this.ctx.createOscillator();r.type="sine",r.frequency.value=.08;const a=this.ctx.createGain();a.gain.value=.05,r.connect(a),a.connect(this.windGain.gain),r.start();const l=this.ctx.createOscillator();l.type="triangle",l.frequency.value=.03;const h=this.ctx.createGain();h.gain.value=.03,l.connect(h),h.connect(s.frequency),l.start()}_createScuttleSystem(){const e=Math.floor(this.ctx.sampleRate*.08);this._shuffleBuffer=this.ctx.createBuffer(1,e,this.ctx.sampleRate);const t=this._shuffleBuffer.getChannelData(0);for(let n=0;n<e;n++){const i=Math.sin(n/e*Math.PI);t[n]=(Math.random()*2-1)*i*.3}}_playScuttleTap(){if(!this.ctx)return;const e=this.ctx.currentTime,t=this.ctx.createBufferSource();t.buffer=this._shuffleBuffer;const n=this.ctx.createBiquadFilter();n.type="lowpass",n.frequency.value=300+Math.random()*200,n.Q.value=.5;const i=this.ctx.createGain();i.gain.setValueAtTime(.06+Math.random()*.03,e),i.gain.linearRampToValueAtTime(0,e+.08),t.connect(n),n.connect(i),i.connect(this.masterGain),t.start(e),t.stop(e+.08)}update(e,t,n){if(this.initialized)if(this.isMoving=t,t){const i=n?.09:.14;this._scuttleTimer+=e,this._scuttleTimer>i&&(this._scuttleTimer=0,this._playScuttleTap())}else this._scuttleTimer=0}updateListener(e){if(!this.ctx||!this.ctx.listener||!e)return;const t=this.ctx.listener,n=e.position,i=this._listenerFwd||(this._listenerFwd={x:0,y:0,z:-1}),s=e.matrixWorld.elements;if(i.x=-s[8],i.y=-s[9],i.z=-s[10],t.positionX){const r=this.ctx.currentTime;t.positionX.setValueAtTime(n.x,r),t.positionY.setValueAtTime(n.y,r),t.positionZ.setValueAtTime(n.z,r),t.forwardX.setValueAtTime(i.x,r),t.forwardY.setValueAtTime(i.y,r),t.forwardZ.setValueAtTime(i.z,r),t.upX.setValueAtTime(0,r),t.upY.setValueAtTime(1,r),t.upZ.setValueAtTime(0,r)}else t.setPosition&&(t.setPosition(n.x,n.y,n.z),t.setOrientation(i.x,i.y,i.z,0,1,0))}createPositionalPanner(e,t,n){if(!this.ctx)return null;const i=this.ctx.createPanner();if(i.panningModel="HRTF",i.distanceModel="inverse",i.refDistance=50,i.maxDistance=250,i.rolloffFactor=.35,i.coneInnerAngle=360,i.coneOuterAngle=0,i.coneOuterGain=0,i.positionX){const s=this.ctx.currentTime;i.positionX.setValueAtTime(e,s),i.positionY.setValueAtTime(t,s),i.positionZ.setValueAtTime(n,s)}else i.setPosition&&i.setPosition(e,t,n);return i}setVolume(e){this.masterGain&&(this.masterGain.gain.value=Math.max(0,Math.min(1,e)))}resume(){this.ctx&&this.ctx.state==="suspended"&&this.ctx.resume()}async _loadSounds(){const e=["./sounds/pistol.mp3","./sounds/shotgun.mp3","./sounds/smg.mp3","./sounds/heavy.mp3"];for(let n=0;n<e.length;n++)try{const s=await(await fetch(e[n])).arrayBuffer();this.gunBuffers[n]=await this.ctx.decodeAudioData(s),console.log(`✓ Loaded gun sound: ${e[n]}`)}catch(i){console.warn(`Failed to load ${e[n]}:`,i)}try{const n=await fetch("./sounds/hit.mp3");if(n.ok){const i=await n.arrayBuffer();this.hitBuffer=await this.ctx.decodeAudioData(i),console.log("✓ Loaded hit sound")}}catch(n){console.warn("Failed to load hit sound:",n)}try{const n=await fetch("./sounds/reload.wav");if(n.ok){const i=await n.arrayBuffer();this.reloadBuffer=await this.ctx.decodeAudioData(i),console.log("✓ Loaded reload sound")}}catch(n){console.warn("Failed to load reload sound:",n)}const t={turtleHitBuffer:"./sounds/turtle_hit.mp3",turtleAttackBuffer:"./sounds/turtle_attack.mp3",turtleDieBuffer:"./sounds/turtle_die.mp3",bossHitBuffer:"./sounds/boss_hit.mp3",bossAttackBuffer:"./sounds/boss_attack.mp3",bossDieBuffer:"./sounds/boss_die.mp3"};for(const[n,i]of Object.entries(t))try{const s=await fetch(i);if(s.ok){const r=await s.arrayBuffer();this[n]=await this.ctx.decodeAudioData(r),console.log(`✓ Loaded enemy sound: ${i}`)}else console.warn(`Missing audio file: ${i}`)}catch(s){console.warn(`Failed to load ${i}:`,s)}}playShootSound(e){if(!this.ctx)return;const t=this.gunBuffers[e];if(!t&&e===1){this._playProceduralShotgun();return}if(!t)return;const n=this.ctx.createBufferSource();n.buffer=t;const s=[.35,.42,.245,.49][e]||.35,r=this.ctx.createGain();e===2&&(n.playbackRate.value=1.5);const a=this.ctx.currentTime,l=.18,h=.1;r.gain.setValueAtTime(s,a),r.gain.setValueAtTime(s,a+l),r.gain.linearRampToValueAtTime(1e-4,a+l+h),n.connect(r),r.connect(this.masterGain),n.start(a),n.stop(a+l+h+.02)}playEnemyHitSound(e){if(!this.ctx)return;const t=this.ctx.currentTime,n=e?.05:.07;if(this._lastHitTime&&t-this._lastHitTime<n)return;this._lastHitTime=t;const i=e?this.bossHitBuffer:this.turtleHitBuffer;if(!i){if(this.hitBuffer){const h=this.ctx.createBufferSource();h.buffer=this.hitBuffer,h.playbackRate.value=e?.6:.8+Math.random()*.6;const u=this.ctx.createGain();u.gain.value=.4,h.connect(u),u.connect(this.masterGain),h.start()}return}const s=this.ctx.createBufferSource();s.buffer=i,s.playbackRate.value=.9+Math.random()*.2;const r=this.ctx.createGain();r.gain.value=e?.8:.5;const a=.18,l=.08;r.gain.setValueAtTime(r.gain.value,t),r.gain.setValueAtTime(r.gain.value,t+a),r.gain.linearRampToValueAtTime(1e-4,t+a+l),s.connect(r),r.connect(this.masterGain),s.start(t),s.stop(t+a+l+.02)}playShellDropSound(){if(!this.ctx||!this.hitBuffer)return;if(this._shellSource){try{this._shellSource.stop()}catch{}this._shellSource=null}const e=this.ctx.createBufferSource();e.buffer=this.hitBuffer,e.playbackRate.value=.8+Math.random()*.4;const t=this.ctx.createGain();t.gain.value=.3,e.connect(t),t.connect(this.masterGain),e.start(this.ctx.currentTime+.4),this._shellSource=e,e.onended=()=>{this._shellSource===e&&(this._shellSource=null)}}playSplashSound(){if(!this.ctx||!this.masterGain)return;const e=this.ctx.currentTime,t=Math.floor(this.ctx.sampleRate*.5),n=this.ctx.createBuffer(1,t,this.ctx.sampleRate),i=n.getChannelData(0);for(let u=0;u<t;u++)i[u]=(Math.random()*2-1)*Math.exp(-u/(t*.35));const s=this.ctx.createBufferSource();s.buffer=n;const r=this.ctx.createBiquadFilter();r.type="lowpass",r.frequency.setValueAtTime(5e3,e),r.frequency.exponentialRampToValueAtTime(700,e+.28);const a=this.ctx.createGain();a.gain.setValueAtTime(.55,e),a.gain.exponentialRampToValueAtTime(.01,e+.4),s.connect(r),r.connect(a),a.connect(this.masterGain),s.start(e),s.stop(e+.5);const l=this.ctx.createOscillator();l.type="sine",l.frequency.setValueAtTime(280,e),l.frequency.exponentialRampToValueAtTime(55,e+.18);const h=this.ctx.createGain();h.gain.setValueAtTime(.45,e),h.gain.exponentialRampToValueAtTime(.01,e+.28),l.connect(h),h.connect(this.masterGain),l.start(e),l.stop(e+.32)}playReloadSound(){if(!this.ctx||!this.reloadBuffer)return;const e=this.ctx.currentTime;if(this._lastReloadTime&&e-this._lastReloadTime<.9)return;this._lastReloadTime=e;const t=this.ctx.createBufferSource();t.buffer=this.reloadBuffer,t.playbackRate.value=.8+Math.random()*.4;const n=this.ctx.createGain();n.gain.value=.1,t.connect(n),n.connect(this.masterGain),t.start()}_preloadCthuluCinematic(e,t){if(!this.ctx)return;const n=`_${e}Buffer`,i=`_${e}Loading`,s=`_${e}PlayPending`;this[n]||this[i]||(this[i]=!0,fetch(`./models/dialogues/${t}`).then(r=>r.arrayBuffer()).then(r=>this.ctx.decodeAudioData(r)).then(r=>{this[n]=r,this[i]=!1,this[s]&&(this[s]=!1,this._fireCthuluCinematic(e))}).catch(r=>{this[i]=!1,console.warn(`Failed to load ${t}:`,r)}))}_fireCthuluCinematic(e){const t=`_${e}Buffer`,n=`_${e}Active`,i=`_${e}EndTimer`,s=this[t];if(!this.ctx||!s||!this.masterGain)return;const r=this.ctx.currentTime,a=this.ctx.createBufferSource();a.buffer=s;const l=this.ctx.createGain();l.gain.value=1.6;const h=this.ctx.createDelay(2);h.delayTime.value=.38;const u=this.ctx.createGain();u.gain.value=.55;const c=this.ctx.createBiquadFilter();c.type="lowpass",c.frequency.value=1200;const d=this.ctx.createGain();d.gain.value=.9,a.connect(l),l.connect(this.masterGain),a.connect(h),h.connect(c),c.connect(d),d.connect(this.masterGain),h.connect(u),u.connect(h),a.start(r);const f=s.duration,g=3;d.gain.setValueAtTime(.9,r+f),d.gain.linearRampToValueAtTime(0,r+f+g),this[n]=!0,this[i]&&clearTimeout(this[i]),this[i]=setTimeout(()=>{this[n]=!1},(f+g)*1e3)}preloadCthuluRises(){this._preloadCthuluCinematic("cthuluRises","cthulu-rises.mp3")}playCthuluRises(){if(this.ctx){if(this._cthuluRisesBuffer){this._fireCthuluCinematic("cthuluRises");return}this._cthuluRisesPlayPending=!0,this._cthuluRisesLoading||this.preloadCthuluRises()}}preloadCthuluDies(){this._preloadCthuluCinematic("cthuluDies","cthulu-dies.mp3")}playCthuluDies(){if(this.ctx){if(this._cthuluDiesBuffer){this._fireCthuluCinematic("cthuluDies");return}this._cthuluDiesPlayPending=!0,this._cthuluDiesLoading||this.preloadCthuluDies()}}playEnemyAttackSound(e){if(!this.ctx)return;const t=e?this.bossAttackBuffer:this.turtleAttackBuffer;if(!t)return;const n=this.ctx.createBufferSource();n.buffer=t,n.playbackRate.value=.9+Math.random()*.2;const i=this.ctx.createGain();i.gain.value=e?.9:.6,n.connect(i),i.connect(this.masterGain),n.start()}playEnemyDeathSound(e){if(!this.ctx)return;const t=e?this.bossDieBuffer:this.turtleDieBuffer;if(!t){const s=this.ctx.currentTime,r=this.ctx.createOscillator();r.type="sine",r.frequency.setValueAtTime(e?300:600,s),r.frequency.exponentialRampToValueAtTime(e?50:100,s+.2);const a=this.ctx.createGain();a.gain.setValueAtTime(e?.4:.2,s),a.gain.linearRampToValueAtTime(0,s+.25),r.connect(a),a.connect(this.masterGain),r.start(s),r.stop(s+.25);return}const n=this.ctx.createBufferSource();n.buffer=t,n.playbackRate.value=.9+Math.random()*.2;const i=this.ctx.createGain();i.gain.value=e?1:.35,n.connect(i),i.connect(this.masterGain),n.start()}playUpgradeSound(){if(!this.ctx)return;const e=this.ctx.currentTime;[523,659,784].forEach((n,i)=>{const s=this.ctx.createOscillator();s.type="sine",s.frequency.value=n;const r=this.ctx.createGain();r.gain.setValueAtTime(0,e+i*.1),r.gain.linearRampToValueAtTime(.12,e+i*.1+.05),r.gain.linearRampToValueAtTime(0,e+i*.1+.2),s.connect(r),r.connect(this.masterGain),s.start(e+i*.1),s.stop(e+i*.1+.25)})}_playProceduralShotgun(){if(!this.ctx)return;const e=this.ctx.currentTime,t=this.ctx.sampleRate*.5,n=this.ctx.createBuffer(1,t,this.ctx.sampleRate),i=n.getChannelData(0);for(let u=0;u<t;u++)i[u]=Math.random()*2-1;const s=this.ctx.createBufferSource();s.buffer=n;const r=this.ctx.createBiquadFilter();r.type="lowpass",r.frequency.setValueAtTime(2e3,e),r.frequency.exponentialRampToValueAtTime(100,e+.25);const a=this.ctx.createGain();a.gain.setValueAtTime(1,e),a.gain.exponentialRampToValueAtTime(.01,e+.3),s.connect(r),r.connect(a),a.connect(this.masterGain);const l=this.ctx.createOscillator();l.type="sine",l.frequency.setValueAtTime(150,e),l.frequency.exponentialRampToValueAtTime(40,e+.1);const h=this.ctx.createGain();h.gain.setValueAtTime(.8,e),h.gain.exponentialRampToValueAtTime(.01,e+.2),l.connect(h),h.connect(this.masterGain),s.start(e),l.start(e),s.stop(e+.4),l.stop(e+.3)}playChargeSound(e=3){if(!this.ctx)return;const t=this.ctx.currentTime,n=this.ctx.createOscillator();n.type="sawtooth",n.frequency.setValueAtTime(100,t),n.frequency.exponentialRampToValueAtTime(800,t+e);const i=this.ctx.createOscillator();i.type="sine",i.frequency.setValueAtTime(5,t),i.frequency.linearRampToValueAtTime(25,t+e);const s=this.ctx.createGain();s.gain.value=200,i.connect(s),s.connect(n.frequency);const r=this.ctx.createGain();r.gain.setValueAtTime(.01,t),r.gain.linearRampToValueAtTime(.5,t+Math.max(.05,e-.05)),r.gain.linearRampToValueAtTime(.001,t+e),n.connect(r),r.connect(this.masterGain),n.start(t),i.start(t),n.stop(t+e+.02),i.stop(t+e+.02),this._currentChargeOsc=n,this._currentChargeLfo=i,this._currentChargeGain=r}playDischargeSound(e=5){if(!this.ctx)return;const t=this.ctx.currentTime;if(this._currentChargeOsc){try{this._currentChargeGain&&(this._currentChargeGain.gain.cancelScheduledValues(t),this._currentChargeGain.gain.setValueAtTime(this._currentChargeGain.gain.value,t),this._currentChargeGain.gain.linearRampToValueAtTime(1e-4,t+.03)),this._currentChargeOsc.stop(t+.04),this._currentChargeLfo.stop(t+.04)}catch{}this._currentChargeOsc=null,this._currentChargeLfo=null,this._currentChargeGain=null}const n=this.ctx.sampleRate*e,i=this.ctx.createBuffer(1,n,this.ctx.sampleRate),s=i.getChannelData(0);for(let h=0;h<n;h++)s[h]=Math.random()*2-1;const r=this.ctx.createBufferSource();r.buffer=i;const a=this.ctx.createBiquadFilter();a.type="lowpass",a.frequency.setValueAtTime(3e3,t),a.frequency.exponentialRampToValueAtTime(500,t+.5);const l=this.ctx.createGain();l.gain.setValueAtTime(.8,t),l.gain.setValueAtTime(.8,t+e-1),l.gain.linearRampToValueAtTime(.01,t+e),r.connect(a),a.connect(l),l.connect(this.masterGain),r.start(t),r.stop(t+e)}loadWaveDrums(){this.ctx&&(this.waveDrumsBuffer||this._waveDrumsLoading||(this._waveDrumsLoading=!0,fetch("./sounds/alec_koff-epic-drums-tribal.ogg").then(e=>e.ok?e.arrayBuffer():Promise.reject(new Error("HTTP "+e.status))).then(e=>this.ctx.decodeAudioData(e)).then(e=>{this.waveDrumsBuffer=e,this._waveDrumsLoading=!1,console.log("✓ Loaded wave drums")}).catch(e=>{this._waveDrumsLoading=!1,console.warn("Failed to load wave drums:",e)})))}playWaveDrums(){if(!this.ctx||!this.masterGain||!this.waveDrumsBuffer||this._waveDrumsSrc)return;const e=this.ctx.currentTime,t=this.ctx.createBufferSource();t.buffer=this.waveDrumsBuffer,t.loop=!0;const n=this.ctx.createGain();n.gain.setValueAtTime(0,e),n.gain.linearRampToValueAtTime(.85,e+.4),n.gain.setValueAtTime(.85,e+10),n.gain.linearRampToValueAtTime(.3,e+25),n.gain.linearRampToValueAtTime(.2,e+55),t.connect(n),n.connect(this.masterGain),t.start(e),this._waveDrumsSrc=t,this._waveDrumsGain=n,t.onended=()=>{this._waveDrumsSrc===t&&(this._waveDrumsSrc=null,this._waveDrumsGain=null)}}stopWaveDrums(){if(!this._waveDrumsSrc||!this.ctx)return;const e=this._waveDrumsSrc,t=this._waveDrumsGain,n=this.ctx.currentTime;try{t.gain.cancelScheduledValues(n),t.gain.setValueAtTime(t.gain.value,n),t.gain.linearRampToValueAtTime(0,n+.6),e.stop(n+.65)}catch{}this._waveDrumsSrc=null,this._waveDrumsGain=null}playDeathDialogueWithEcho(e){if(!this.ctx||!this.masterGain||!e)return 0;const t=this.ctx.currentTime,n=c=>{if(c)try{const d=c.gain.value;c.gain.cancelScheduledValues(t),c.gain.setValueAtTime(d,t),c.gain.linearRampToValueAtTime(0,t+.4)}catch{}};n(this.oceanGain),n(this.windGain),n(this.scuttleGain),n(this._waveDrumsGain);const i=this.ctx.createBufferSource();i.buffer=e;const s=this.ctx.createGain();s.gain.value=1.4;const r=this.ctx.createDelay(2);r.delayTime.value=.38;const a=this.ctx.createGain();a.gain.value=.55;const l=this.ctx.createBiquadFilter();l.type="lowpass",l.frequency.value=1200;const h=this.ctx.createGain();h.gain.value=.9,i.connect(s),s.connect(this.masterGain),i.connect(r),r.connect(l),l.connect(h),h.connect(this.masterGain),r.connect(a),a.connect(r),i.start(t);const u=e.duration;return h.gain.setValueAtTime(.9,t+u),h.gain.linearRampToValueAtTime(0,t+u+3),this._deathAudioActive=!0,u}playThunderSound(){if(!this.ctx||!this.masterGain)return;const e=this.ctx.currentTime,t=1.6+Math.random()*.8,n=Math.floor(this.ctx.sampleRate*t),i=this.ctx.createBuffer(1,n,this.ctx.sampleRate),s=i.getChannelData(0);let r=0;for(let u=0;u<n;u++){const c=Math.random()*2-1;r=r*.92+c*.08;const d=Math.exp(-u/(n*.45));s[u]=r*d*1.4}const a=this.ctx.createBufferSource();a.buffer=i;const l=this.ctx.createBiquadFilter();l.type="lowpass",l.frequency.setValueAtTime(450,e),l.frequency.exponentialRampToValueAtTime(120,e+t*.8),l.Q.value=.6;const h=this.ctx.createGain();h.gain.setValueAtTime(0,e),h.gain.linearRampToValueAtTime(1.05,e+.04),h.gain.exponentialRampToValueAtTime(.001,e+t),a.connect(l),l.connect(h),h.connect(this.masterGain),a.start(e),a.stop(e+t+.05)}playSandBurstSound(){if(!this.ctx)return;const e=this.ctx.currentTime,t=this.ctx.createOscillator();t.type="sine",t.frequency.setValueAtTime(150,e),t.frequency.exponentialRampToValueAtTime(20,e+.3);const n=this.ctx.createGain();n.gain.setValueAtTime(1.8,e),n.gain.exponentialRampToValueAtTime(.01,e+.5),t.connect(n),n.connect(this.masterGain),t.start(e),t.stop(e+.5);const i=this.ctx.createOscillator();i.type="sine",i.frequency.setValueAtTime(70,e),i.frequency.exponentialRampToValueAtTime(28,e+.55);const s=this.ctx.createGain();s.gain.setValueAtTime(0,e),s.gain.linearRampToValueAtTime(2.5,e+.02),s.gain.exponentialRampToValueAtTime(.01,e+.9);const r=this.ctx.createBiquadFilter();r.type="lowpass",r.frequency.value=220,r.Q.value=.8,i.connect(r),r.connect(s),s.connect(this.masterGain),i.start(e),i.stop(e+.95);const a=Math.floor(this.ctx.sampleRate*.04),l=this.ctx.createBuffer(1,a,this.ctx.sampleRate),h=l.getChannelData(0);for(let E=0;E<a;E++){const L=Math.exp(-E/(a*.25));h[E]=(Math.random()*2-1)*L}const u=this.ctx.createBufferSource();u.buffer=l;const c=this.ctx.createBiquadFilter();c.type="lowpass",c.frequency.value=1500;const d=this.ctx.createGain();d.gain.value=.6,u.connect(c),c.connect(d),d.connect(this.masterGain),u.start(e);const f=this.ctx.sampleRate*2,g=this.ctx.createBuffer(1,f,this.ctx.sampleRate),_=g.getChannelData(0);let m=0;for(let E=0;E<f;E++){const L=Math.random()*2-1;_[E]=(m+.02*L)/1.02,m=_[E],_[E]*=4}const p=this.ctx.createBufferSource();p.buffer=g;const x=this.ctx.createBiquadFilter();x.type="lowpass",x.frequency.setValueAtTime(5e3,e),x.frequency.exponentialRampToValueAtTime(200,e+1.5);const M=this.ctx.createGain();M.gain.setValueAtTime(0,e),M.gain.linearRampToValueAtTime(1.5,e+.05),M.gain.linearRampToValueAtTime(.3,e+.5),M.gain.linearRampToValueAtTime(.01,e+2),p.connect(x),x.connect(M),M.connect(this.masterGain),p.start(e),p.stop(e+2);const v=this.ctx.createBufferSource();v.buffer=g;const P=this.ctx.createBiquadFilter();P.type="bandpass",P.Q.value=4,P.frequency.setValueAtTime(800,e),P.frequency.linearRampToValueAtTime(300,e+1.5);const C=this.ctx.createGain();C.gain.setValueAtTime(0,e),C.gain.linearRampToValueAtTime(.8,e+.2),C.gain.linearRampToValueAtTime(.01,e+1.5),v.connect(P),P.connect(C),C.connect(this.masterGain),v.start(e),v.stop(e+1.5)}}const th={pistol:{name:"Pistol",baseFireRate:3,baseDamage:10,baseAmmoPerShot:2,projectileSpeed:120,spread:0,baseProjectilesPerShot:1,color:52479,barrelLength:1.2,barrelRadius:.12,tankSize:.3,isDual:!1,isCharge:!1,maxLevel:10,baseCritChance:.1,baseCritDamage:2,levelUpDamage:5,levelUpFireRate:2,levelUpProjectiles:0,levelUpCritChance:.02},shotgun:{name:"Shotgun",baseFireRate:1.8,baseDamage:8,baseAmmoPerShot:6,projectileSpeed:100,spread:.15,baseProjectilesPerShot:3,color:35071,barrelLength:1.5,barrelRadius:.18,tankSize:.45,isDual:!1,isCharge:!1,maxLevel:10,baseCritChance:.05,baseCritDamage:1.5,levelUpDamage:2,levelUpFireRate:0,levelUpProjectiles:3,levelUpCritChance:.01},charger:{name:"Charger",baseFireRate:.33,baseDamage:80,baseAmmoPerShot:50,projectileSpeed:200,spread:.01,baseProjectilesPerShot:1,color:65416,barrelLength:3,barrelRadius:.4,tankSize:.9,isDual:!1,isCharge:!0,chargeTime:3,hoseDuration:1,maxLevel:10,baseCritChance:.15,baseCritDamage:2.5,levelUpDamage:5,levelUpFireRate:0,levelUpProjectiles:0,levelUpAmmoPerShot:25,levelUpHoseDuration:.5,levelUpCritChance:.02}};class bv{constructor(e,t){this.scene=e,this.audio=t,this.currentType="pistol",this.currentLevel=1,this.gunMeshes=[],this.muzzlePoints=[],this._muzzleFlashes=[],this._fireCooldown=0,this._muzzleFlashTimer=0,this._isCharging=!1,this._chargeTimer=0,this._chargeIndicator=null,this._buildGuns(this.getEffectiveStats()),this._createChargeIndicator()}getEffectiveStats(e,t){e=e||this.currentType,t=t||this.currentLevel;const n=th[e];if(!n)return th.pistol;const i=t-1;return{name:n.name+(t>1?` Lv.${t}`:""),fireRate:n.baseFireRate+n.levelUpFireRate*i,damage:n.baseDamage+n.levelUpDamage*i,ammoPerShot:n.baseAmmoPerShot+(n.levelUpAmmoPerShot||0)*i,projectileSpeed:n.projectileSpeed,spread:n.spread,projectilesPerShot:n.baseProjectilesPerShot+n.levelUpProjectiles*i,color:n.color,barrelLength:n.barrelLength,barrelRadius:n.barrelRadius,tankSize:n.tankSize,isDual:n.isDual,isCharge:n.isCharge||!1,chargeTime:n.chargeTime||0,hoseDuration:(n.hoseDuration||0)+(n.levelUpHoseDuration||0)*i,critChance:(n.baseCritChance||0)+(n.levelUpCritChance||0)*i,critDamage:n.baseCritDamage||1.5}}get stats(){return this.getEffectiveStats()}setWeapon(e,t){this.currentType=e,this.currentLevel=t,this._isCharging=!1,this._chargeTimer=0,this._buildGuns(this.getEffectiveStats()),console.log(`🔫 Weapon: ${e} Lv.${t}`)}_buildGunModel(e){const t=new Xt;if(this.currentType==="shotgun"){for(let d=-1;d<=1;d++){const f=new yn(e.barrelRadius,e.barrelRadius*.8,e.barrelLength,8);f.rotateX(Math.PI/2);const g=new dt({color:e.color,roughness:.3,metalness:.6}),_=new Re(f,g);_.position.set(d*e.barrelRadius*2.2,0,e.barrelLength/2),_.castShadow=!0,t.add(_)}const r=new Si(.8,.4,.6),a=new dt({color:3355443,roughness:.9}),l=new Re(r,a);l.position.set(0,-.1,-.2),t.add(l);const h=new Si(e.tankSize*2,e.tankSize*1.5,e.tankSize*1.5),u=new dt({color:4500223,roughness:.1,metalness:.2,transparent:!0,opacity:.6}),c=new Re(h,u);c.position.set(0,e.tankSize*.5,.2),t.add(c)}else if(this.currentType==="charger"){const r=new yn(e.barrelRadius,e.barrelRadius,e.barrelLength,12);r.rotateX(Math.PI/2);const a=new dt({color:e.color,roughness:.2,metalness:.8}),l=new Re(r,a);l.position.z=e.barrelLength/2,l.castShadow=!0,t.add(l);const h=new hl(e.barrelRadius*1.5,e.barrelRadius*.3,8,16);h.rotateX(Math.PI/2);const u=new dt({color:65416,emissive:65416,emissiveIntensity:.8,roughness:.1,metalness:.9});for(let g=1;g<=3;g++){const _=new Re(h,u);_.position.z=e.barrelLength/4*g,t.add(_)}const c=new rn(e.tankSize,16,12),d=new dt({color:65416,roughness:.1,metalness:.3,transparent:!0,opacity:.8}),f=new Re(c,d);f.position.set(0,e.tankSize*.8,-.5),t.add(f)}else{const r=new yn(e.barrelRadius,e.barrelRadius*.8,e.barrelLength,8);r.rotateX(Math.PI/2);const a=new dt({color:e.color,roughness:.3,metalness:.6}),l=new Re(r,a);l.position.z=e.barrelLength/2,l.castShadow=!0,t.add(l);const h=new rn(e.tankSize,8,6),u=new dt({color:4500223,roughness:.1,metalness:.2,transparent:!0,opacity:.6}),c=new Re(h,u);c.position.set(0,e.tankSize*.6,-.1),t.add(c)}const n=new yn(.08,.1,.6,6),i=new dt({color:8934707,roughness:.8}),s=new Re(n,i);return s.position.set(0,-.35,-.2),s.rotation.x=.2,t.add(s),t.scale.setScalar(this.currentType==="charger"?1.8:1.5),t}_createMuzzleFlashModel(){const e=new rn(.4,6,6),t=new St({color:8969727,transparent:!0,opacity:0}),n=new Re(e,t);return this.scene.add(n),n}_createChargeIndicator(){let e=document.getElementById("charge-bar-container");if(!e){e=document.createElement("div"),e.id="charge-bar-container",e.style.cssText="position:fixed; bottom:120px; left:50%; transform:translateX(-50%); width:200px; height:8px; background:rgba(0,0,0,0.5); border-radius:4px; z-index:12; pointer-events:none; display:none; border:1px solid rgba(0,255,136,0.3);";const t=document.createElement("div");t.id="charge-bar-fill",t.style.cssText="height:100%; width:0%; background:linear-gradient(90deg, #00ff88, #ffdd00); border-radius:4px; transition:none;",e.appendChild(t),document.body.appendChild(e)}this._chargeBarContainer=e,this._chargeBarFill=e.querySelector("#charge-bar-fill")}_buildGuns(e){for(const n of this.gunMeshes)this.scene.remove(n);for(const n of this._muzzleFlashes)this.scene.remove(n);this.gunMeshes=[],this.muzzlePoints=[],this._muzzleFlashes=[];const t=this._buildGunModel(e);if(this.scene.add(t),this.gunMeshes.push(t),this.muzzlePoints.push(new A),this._muzzleFlashes.push(this._createMuzzleFlashModel()),e.isDual){const n=this._buildGunModel(e);this.scene.add(n),this.gunMeshes.push(n),this.muzzlePoints.push(new A),this._muzzleFlashes.push(this._createMuzzleFlashModel())}}startCharge(){this.stats.isCharge&&(this._isCharging||(this._isCharging=!0,this._chargeTimer=0,this.audio&&this.audio.playChargeSound(this.stats.chargeTime)))}releaseCharge(e,t,n){if(!this._isCharging)return null;this._isCharging=!1,this._chargeBarContainer&&(this._chargeBarContainer.style.display="none");const i=this.stats,s=Math.min(1,this._chargeTimer/i.chargeTime);if(this._chargeTimer=0,s<.2||n<i.ammoPerShot){if(this.audio&&this.audio._currentChargeOsc){try{this.audio._currentChargeOsc.stop(),this.audio._currentChargeLfo.stop()}catch{}this.audio._currentChargeOsc=null}return null}this._muzzleFlashTimer=.1;for(const r of this._muzzleFlashes)r.material.opacity=.9;return this.audio&&this.audio.initialized&&this.audio.playDischargeSound(i.hoseDuration),this._isFiringHose=!0,this._hoseTimer=i.hoseDuration,this._hoseChargeRatio=s,this._hoseCooldown=0,{projectiles:[],ammoCost:i.ammoPerShot}}getHoseProjectiles(e,t){if(!this._isFiringHose)return null;const n=this.stats;if(this._hoseTimer-=e,this._hoseTimer<=0)return this._isFiringHose=!1,null;if(this._hoseCooldown-=e,this._hoseCooldown>0)return null;this._hoseCooldown=1/15;const i=new A(Math.sin(t),0,-Math.cos(t)),s=[],r=n.damage*this._hoseChargeRatio*1,a=n.projectileSpeed;for(let l=0;l<this.muzzlePoints.length;l++){const h=this.muzzlePoints[l],u=i.clone();u.y=.03,u.normalize();const c=Math.random()<n.critChance,d=c?r*n.critDamage:r;s.push({position:h.clone().add(u.clone().multiplyScalar(.5)),velocity:u.multiplyScalar(a),damage:d,tier:2,options:{penetrating:!0,isChargerHose:!0,hitScale:6,isCrit:c}})}return{projectiles:s}}tryFire(e,t,n){const i=this.stats;if(i.isCharge||this._fireCooldown>0||n<i.ammoPerShot)return null;this._fireCooldown=1/i.fireRate,this._muzzleFlashTimer=.06;for(const a of this._muzzleFlashes)a.material.opacity=.9;this.audio&&this.audio.initialized&&(this.audio.playShootSound(this.currentType==="shotgun"?1:0),this.audio.playShellDropSound());const s=new A(Math.sin(t),0,-Math.cos(t)),r=[];for(let a=0;a<this.muzzlePoints.length;a++){const l=this.muzzlePoints[a];for(let h=0;h<i.projectilesPerShot;h++){const u=s.clone();if(i.spread>0){const f=(Math.random()-.5)*i.spread*2,g=Math.cos(f),_=Math.sin(f),m=u.x*g-u.z*_,p=u.x*_+u.z*g;u.x=m,u.z=p}u.y=.05,u.normalize();const c=Math.random()<i.critChance,d=c?i.damage*i.critDamage:i.damage;r.push({position:l.clone().add(u.clone().multiplyScalar(.2)),velocity:u.multiplyScalar(i.projectileSpeed),damage:d,tier:this.currentType==="shotgun"?1:0,options:{isShotgun:this.currentType==="shotgun",isCrit:c}})}}return{projectiles:r,ammoCost:i.ammoPerShot}}update(e,t,n){if(this._fireCooldown=Math.max(0,this._fireCooldown-e),this._muzzleFlashTimer-=e,this._isCharging){const g=this.stats;this._chargeTimer=Math.min(g.chargeTime,this._chargeTimer+e);const _=this._chargeTimer/g.chargeTime;this._chargeBarContainer&&(this._chargeBarContainer.style.display="block",this._chargeBarFill.style.width=`${_*100}%`,_>=1?this._chargeBarFill.style.background="linear-gradient(90deg, #ffdd00, #ff6b35)":this._chargeBarFill.style.background="linear-gradient(90deg, #00ff88, #ffdd00)");for(const m of this.gunMeshes)m.traverse(p=>{p.isMesh&&p.material&&p.material.emissive&&(p.material.emissiveIntensity=.15+_*.8)})}const i=Math.sin(n),s=Math.cos(n),r=i,a=-s,l=s,h=i,u=1,c=1.2,d=[1.5,-1.5],f=this.stats;for(let g=0;g<this.gunMeshes.length;g++){const _=this.gunMeshes[g],m=d[g];_.position.set(t.x+l*m+r*u,t.y+c,t.z+h*m+a*u),_.rotation.y=Math.atan2(r,a),this.muzzlePoints[g].set(_.position.x+r*f.barrelLength*1.5,_.position.y,_.position.z+a*f.barrelLength*1.5);const p=this._muzzleFlashes[g];this._muzzleFlashTimer>0?(p.position.copy(this.muzzlePoints[g]),p.material.opacity=this._muzzleFlashTimer/.06,p.scale.setScalar(1+(1-this._muzzleFlashTimer/.06)*2)):p.material.opacity=0}}}const Ev=40,Av=3,Cv=20,Rv=8;class Pv{constructor(e){this.scene=e,this.pool=[],this._geo=new rn(.3,6,4),this._trailGeo=new rn(.15,4,3);for(let t=0;t<Ev;t++){const n=new St({color:4513279,transparent:!0,opacity:.9}),i=new Re(this._geo,n);i.visible=!1,e.add(i);const s=[];for(let r=0;r<3;r++){const a=new St({color:8974079,transparent:!0,opacity:.4}),l=new Re(this._trailGeo,a);l.visible=!1,e.add(l),s.push(l)}this.pool.push({mesh:i,trails:s,velocity:new A,damage:0,tier:0,lifetime:0,active:!1,trailPositions:[new A,new A,new A],options:null,hitEnemies:null})}this._splashGeo=new rn(.2,4,3),this.splashPool=[];for(let t=0;t<Cv;t++){const n=[];for(let a=0;a<Rv;a++){const l=new St({color:6741503,transparent:!0,opacity:.8}),h=new Re(this._splashGeo,l);h.visible=!1,e.add(h),n.push({mesh:h,velocity:new A})}const i=new Ws(.2,.5,12),s=new St({color:8974079,transparent:!0,opacity:.7,side:vt}),r=new Re(i,s);r.rotation.x=-Math.PI/2,r.visible=!1,e.add(r),this.splashPool.push({particles:n,ring:r,timer:0,active:!1,origin:new A})}}reset(){for(const e of this.pool)e.active=!1,e.mesh&&(e.mesh.visible=!1),e.trails&&e.trails.forEach(t=>{t&&(t.visible=!1)});for(const e of this.splashPool)e.active=!1,e.ring&&(e.ring.visible=!1),e.particles&&e.particles.forEach(t=>{t&&(t.visible=!1)})}spawn(e,t,n,i,s={}){const r=this.pool.find(h=>!h.active);if(!r)return;r.mesh.position.copy(e),r.velocity.copy(t),r.damage=n,r.tier=i,r.lifetime=0,r.active=!0,r.options=s,r.hitEnemies=s.penetrating?new Set:null,r.mesh.visible=!0;const a=[4513279,35071,65416,16755200];r.mesh.material.color.setHex(a[i]||4513279),r.mesh.material.opacity=.9;const l=[1,1.2,.8,2];r.mesh.scale.setScalar((l[i]||1)*(s.hitScale||1));for(let h=0;h<r.trails.length;h++)r.trails[h].visible=!1,r.trailPositions[h].copy(e)}_spawnSplash(e,t){const n=this.splashPool.find(r=>!r.active);if(!n)return;n.active=!0,n.timer=0,n.origin.copy(e),n.ring.position.copy(e),n.ring.visible=!0,n.ring.scale.setScalar(.5),n.ring.material.opacity=.8;const s=[4513279,35071,65416,16755200,16724736][t]||4513279;for(const r of n.particles){r.mesh.position.copy(e),r.mesh.visible=!0,r.mesh.material.color.setHex(s),r.mesh.material.opacity=.9;const a=Math.random()*Math.PI*2,l=8+Math.random()*12,h=4+Math.random()*8;r.velocity.set(Math.cos(a)*h,l,Math.sin(a)*h);const u=.3+Math.random()*.4;r.mesh.scale.setScalar(u)}}update(e,t){const n=[];for(const i of this.pool)if(i.active){if(i.lifetime+=e,i.lifetime>Av){this._deactivate(i);continue}if(i.velocity.y-=12*e,i.mesh.position.addScaledVector(i.velocity,e),i.mesh.position.y<0){this._spawnSplash(i.mesh.position,i.tier),this._deactivate(i);continue}for(let s=i.trails.length-1;s>0;s--)i.trailPositions[s].copy(i.trailPositions[s-1]);i.trailPositions[0].copy(i.mesh.position);for(let s=0;s<i.trails.length;s++)i.trails[s].visible=i.lifetime>.02*(s+1),i.trails[s].position.copy(i.trailPositions[s]),i.trails[s].material.opacity=.4*(1-s/i.trails.length),i.trails[s].scale.setScalar(.7*(1-s/i.trails.length));if(t)for(const s of t){if(!s.alive)continue;let r=s.hitRadius;if(i.options&&i.options.isChargerHose&&(r*=3),i.mesh.position.distanceTo(s.position)<r){if(i.hitEnemies&&i.hitEnemies.has(s))continue;let l=i.damage;if(i.options&&i.options.isShotgun){const u=i.lifetime*i.velocity.length();let c=1;u<8?c=3:u<25&&(c=3-2*((u-8)/17)),l=i.damage*c}n.push({enemy:s,damage:l,position:i.mesh.position.clone(),isCrit:i.options&&i.options.isCrit});const h=i.options&&i.options.isCrit?4:i.tier;if(this._spawnSplash(i.mesh.position,h),i.options&&i.options.penetrating)i.hitEnemies.add(s);else{this._deactivate(i);break}}}}for(const i of this.splashPool)if(i.active){i.timer+=e;for(const s of i.particles){s.velocity.y-=25*e,s.mesh.position.addScaledVector(s.velocity,e);const r=1-i.timer/.6;s.mesh.material.opacity=Math.max(0,r*.9),s.mesh.scale.multiplyScalar(.97)}if(i.ring.scale.addScalar(e*8),i.ring.material.opacity=Math.max(0,.8-i.timer*2),i.timer>.6){i.active=!1,i.ring.visible=!1;for(const s of i.particles)s.mesh.visible=!1}}return n}_deactivate(e){e.active=!1,e.mesh.visible=!1;for(const t of e.trails)t.visible=!1}}const mt={SPAWNING:"spawning",WALKING:"walking",ATTACKING:"attacking",COOLDOWN:"cooldown",DYING:"dying",DEAD:"dead"},Wi={boss:2,octopus:3,turtle:8},Lv=new A,nh={octopus:{spreader:{extraProjectiles:2,cooldownMod:1,tint:6684876},hunter:{speedMod:1.5,cooldownMod:-1,tint:13369446},corruptor:{poolDurationMod:5,tint:13056}},turtle:{charger:{dash:!0,tint:16729088},tank:{hpMultiplier:3,speedMod:.9,tint:4473992},swarm:{hpMultiplier:.7,speedMod:2,tint:8978176}},boss:{enraged:{dashCooldownMod:-2,tint:16711680},summoner:{spawnAdds:!0,tint:8913151},corrupter:{slamCreatesPool:!0,tint:26112}}},ko={};function ih(o){if(ko[o])return ko[o];const e=document.createElement("canvas");e.width=128,e.height=48;const t=e.getContext("2d");t.font="bold 32px Outfit, sans-serif",t.textAlign="center",t.fillStyle="#ffffff",t.strokeStyle="#000000",t.lineWidth=3,t.strokeText(o,64,34),t.fillText(o,64,34);const n=new Hr(e);return n.needsUpdate=!0,ko[o]=n,n}class Dv{constructor(e,t,n,i){this.scene=e,this.world=t,this.audio=n,this.dialogue=i,this.loader=new $r,this.enemies=[],this.turtleModel=null,this.turtleAnimClip=null,this._modelLoaded=!1,this.bossModel=null,this.bossAnimClip=null,this._bossModelLoaded=!1,this._bossLoadStarted=!1,this.octopusModel=null,this.octopusAnimClip=null,this._octopusModelLoaded=!1,this.cthulhuModel=null,this.cthulhuAnimClip=null,this._cthulhuModelLoaded=!1,this._cthulhuLoadStarted=!1,this._cthulhuPending=!1,this._cthulhuAlive=!1,this.currentWave=0,this.waveActive=!1,this.enemiesAliveInWave=0,this.totalKills=0,this.waveSpawnTimer=0,this.waveBudget=0,this._waveDelay=3,this._waveTimer=this._waveDelay,this.testBossMode=new URLSearchParams(window.location.search).get("test_boss")==="true",this.collectibles=[],this.spawnDialogueQueue=[],this._globalTauntTimer=5+Math.random()*5,this.waveJustCompleted=!1,this._summonerTimer=0,this._loadModel()}reset(){for(const i of this.enemies)i.model&&this.scene.remove(i.model);this.enemies=[];for(const i of this.collectibles)i.mesh&&this.scene.remove(i.mesh);this.collectibles=[],this.currentWave=0,this.waveActive=!1,this.enemiesAliveInWave=0,this.totalKills=0,this.waveSpawnTimer=0,this.waveBudget=0,this._waveTimer=this._waveDelay,this.waveJustCompleted=!1,this._summonerTimer=0,this._globalTauntTimer=5+Math.random()*5,this.spawnDialogueQueue.length=0,this._cthulhuAlive=!1,this._cthulhuPending=!1,this._cthulhuRiseGrace=0;const e=document.getElementById("cthulhu-bossbar");e&&e.classList.remove("visible");const t=document.getElementById("kill-count");t&&(t.textContent="0");const n=document.getElementById("wave-number");n&&(n.textContent="—")}_getAliveCount(e){let t=0;for(const n of this.enemies)n.state===mt.DEAD||n.state===mt.DYING||(e==="boss"&&n.isBoss||e==="octopus"&&n.isOctopus||e==="turtle"&&!n.isBoss&&!n.isOctopus)&&t++;return t}_applyModifiers(e,t){let n=1;if(this.currentWave>=5&&(n=Math.min(3,Math.floor((this.currentWave-5)/3)+2)),e.level=n,n>=2&&(e.maxHealth*=2,e.health=e.maxHealth),n>=3&&(e.maxHealth*=1.5,e.health=e.maxHealth,e.speed*=1.2,e._attackCooldown*=.85),n>=2){const i=`Lv.${n}`,s=ih(i),r=new La({map:s,transparent:!0,depthTest:!1}),a=new Tc(r);a.scale.set(2.5,1,1);const l=e.healthBarGroup?e.healthBarGroup.position.y:5;a.position.y=l+1.5,e.model.add(a),e._levelSprite=a}if(this.currentWave>=5&&nh[t]){const i=nh[t],s=Object.keys(i),r=s[Math.floor(Math.random()*s.length)],a=i[r];if(e.variant=r,e.variantMods=a,a.hpMultiplier&&(e.maxHealth*=a.hpMultiplier,e.health=e.maxHealth),a.speedMod&&(e.speed*=a.speedMod),a.cooldownMod!==void 0&&(e._attackCooldown=Math.max(.5,e._attackCooldown+a.cooldownMod)),a.dash&&(e._canDash=!0,e._dashTimer=3+Math.random()*2,e._dashCooldown=0,e._isDashing=!1),a.dashCooldownMod&&(e._dashTimer=Math.max(1,(e._dashTimer||7)+a.dashCooldownMod)),a.extraProjectiles&&(e._extraProjectiles=a.extraProjectiles),a.spawnAdds&&(e._spawnAdds=!0),a.slamCreatesPool&&(e._slamCreatesPool=!0),a.tint){const l=new le(a.tint);e.model.traverse(h=>{h.isMesh&&h.material&&h.material.emissive&&(h.material.emissive.copy(l),h.material.emissiveIntensity=.3,h.userData.originalEmissive=l.clone())})}}if(this.currentWave>=7&&Math.random()<.25){e.isElite=!0,e.maxHealth*=2,e.health=e.maxHealth,e.attackDamage*=2,e.model.traverse(l=>{l.isMesh&&l.material&&l.material.emissive&&(l.material.emissive.setHex(16755200),l.material.emissiveIntensity=.6,l.userData.originalEmissive=new le(16755200))});const i=ih("ELITE"),s=new La({map:i,transparent:!0,depthTest:!1}),r=new Tc(s);r.scale.set(3,1.2,1);const a=e.healthBarGroup?e.healthBarGroup.position.y:5;r.position.y=a+3,e.model.add(r)}}_loadModel(){this.loader.load("./models/stylized_turtle.glb",e=>{this.turtleModel=e.scene;const n=new Pt().setFromObject(this.turtleModel).getSize(new A),s=5/Math.max(n.x,n.y,n.z);this.turtleModel.scale.setScalar(s),e.animations&&e.animations.length>0&&(this.turtleAnimClip=e.animations[0],console.log(`Turtle anim: "${this.turtleAnimClip.name}" — ${this.turtleAnimClip.duration.toFixed(2)}s`)),this._modelLoaded=!0,console.log("✓ Turtle model loaded");const r=Ua.onLoad;Ua.onLoad=()=>{r&&r(),this._bossLoadStarted||this._lazyLoadBoss()},this.loader.load("./models/dave_the_octopus_rig_animation.glb",a=>{this.octopusModel=a.scene;const h=new Pt().setFromObject(this.octopusModel).getSize(new A),c=20/Math.max(h.x,h.y,h.z);this.octopusModel.scale.setScalar(c),a.animations&&a.animations.length>0&&(this.octopusAnimClip=a.animations[0],this.octopusAnimClip.tracks=this.octopusAnimClip.tracks.filter(d=>!d.name.endsWith(".position"))),this._octopusModelLoaded=!0,console.log("✓ Octopus model loaded")},void 0,a=>console.error("Failed to load octopus model:",a))},void 0,e=>console.error("Failed to load turtle model:",e))}_lazyLoadBoss(){this._bossLoadStarted||(this._bossLoadStarted=!0,this.audio&&this.audio.loadWaveDrums&&this.audio.loadWaveDrums(),this.loader.load("./models/zombie_monster_slasher_necromorph.glb",e=>{this.bossModel=e.scene;const n=new Pt().setFromObject(this.bossModel).getSize(new A),s=12/Math.max(n.x,n.y,n.z);this.bossModel.scale.setScalar(s),e.animations&&e.animations.length>0&&(this.bossAnimClip=e.animations.find(r=>r.name==="anim")||e.animations[0]),this._bossModelLoaded=!0,console.log("✓ Boss zombie monster loaded"),this.testBossMode&&this.waveActive&&this.bossesToSpawn===0&&(this.bossesToSpawn=1)},void 0,e=>console.error("Failed to load boss model:",e)))}_lazyLoadCthulhu(){this._cthulhuLoadStarted||(this._cthulhuLoadStarted=!0,this.audio&&this.audio.preloadCthuluRises&&this.audio.preloadCthuluRises(),this.audio&&this.audio.preloadCthuluDies&&this.audio.preloadCthuluDies(),this.loader.load("./models/boss_octopus.glb",e=>{this.cthulhuModel=e.scene;const n=new Pt().setFromObject(this.cthulhuModel).getSize(new A),s=600/(Math.max(n.x,n.y,n.z)||1);this.cthulhuModel.scale.setScalar(s),e.animations&&e.animations.length>0&&(this.cthulhuAnimClip=e.animations[0]),this._cthulhuModelLoaded=!0,console.log("✓ Cthulhu mega-boss loaded")},void 0,e=>console.error("Failed to load Cthulhu model:",e)))}_isCthulhuWave(e){return e>=7&&(e-7)%5===0}_spawnCthulhu(){if(!this._cthulhuModelLoaded||!this.cthulhuModel){this._cthulhuPending=!0;return}const e=yi(this.cthulhuModel),t=1+Math.max(0,(this.currentWave-7)/12);e.scale.multiplyScalar(t);const n=new Xt;n.add(e);const i=240,s=(Math.random()-.5)*60,r=-10,a=-140;n.position.set(i,a,s),n.rotation.y=-Math.PI/2,n.traverse(p=>{p.isMesh&&(p.castShadow=!0,p.receiveShadow=!1)}),this.scene.add(n);let l=null,h=null;this.cthulhuAnimClip&&(l=new ji(e),h=l.clipAction(this.cthulhuAnimClip),h.play(),h.timeScale=.7);const u=3e3+(this.currentWave-7)*800,c=25+this.currentWave*2,d=c*.4,f=this._createHealthBar();f.visible=!1,n.add(f);const g=document.getElementById("cthulhu-bossbar"),_=document.getElementById("cthulhu-bossbar-fill");g&&g.classList.add("visible"),_&&(_.style.width="100%");const m={model:n,innerModel:e,mixer:l,walkAction:h,healthBarGroup:f,healthBarFill:f.children[1],isCthulhu:!0,isBoss:!0,isStationary:!0,maxHealth:u,health:u,speed:0,attackDamage:c,tickDamage:d,attackRange:9999,hitRadius:120*t,state:mt.SPAWNING,alive:!0,position:n.position,yOffset:0,_emergeStartY:a,_emergeFinalY:r,_emergeDuration:5,_spawnTimer:0,_attackTimer:0,_attackCooldown:1,_cooldownTimer:.5,_deathTimer:0,_flashTimer:0,_knockbackVelocity:new A,_staggerTimer:0,_bobTimer:0,targetEntity:"crab",throwCount:0,_dialogueTimer:8};this.enemies.push(m),this._cthulhuAlive=!0,this.enemiesAliveInWave++,this.audio&&this.audio.playCthuluRises&&this.audio.playCthuluRises(),this._cthulhuRiseGrace=20}startWave(){this.currentWave++,this.testBossMode&&!this._bossLoadStarted&&this._lazyLoadBoss(),(this.currentWave===6||this._isCthulhuWave(this.currentWave+1))&&this._lazyLoadCthulhu(),this._isCthulhuWave(this.currentWave)&&(this._cthulhuLoadStarted||this._lazyLoadCthulhu(),setTimeout(()=>this._spawnCthulhu(),200)),this._isCthulhuWave(this.currentWave)?this.waveBudget=10:this.waveBudget=Math.floor(4+this.currentWave*3),this.waveSpecialSpawned={octopus:0,boss:0},this.maxOctopusPerWave=this._isCthulhuWave(this.currentWave)?1:Math.floor(this.currentWave/2),this.testBossMode?this.maxBossPerWave=1:this.currentWave>=4&&(this.currentWave%2===0||this.currentWave%5===0)?this.maxBossPerWave=1:this.maxBossPerWave=0,this.enemiesAliveInWave=0,this.waveActive=!0,this.waveSpawnTimer=0,window.showNotification&&window.showNotification(`Wave ${this.currentWave}`,"Defend the Burrow!"),this._bossSpokeThisWave=!1,this._octopusSpokeThisWave=!1,this.currentWave>=3&&this.dialogue&&this.crab&&this.crab.model&&Math.random()<.3&&this.dialogue.speak(this.crab.model,"They are bringing the heavy hitters.","hero",4,4),console.log(`Wave ${this.currentWave} starting with budget: ${this.waveBudget}`);const e=document.getElementById("wave-number");e&&(e.textContent=this.currentWave)}_spawnTurtle(){if(!this._modelLoaded||this._getAliveCount("turtle")>=Wi.turtle)return;const e=yi(this.turtleModel),t=55+Math.random()*20,n=-190+Math.random()*380,i=this.world.getTerrainHeight(t,n);e.position.set(t,i,n),e.rotation.y=Math.PI,e.traverse(u=>{u.isMesh&&(u.castShadow=!0,u.receiveShadow=!0,u.material&&(u.material=u.material.clone(),u.userData.originalColor=u.material.color.clone(),u.userData.originalEmissive=u.material.emissive?u.material.emissive.clone():new le(0)))}),this.scene.add(e);let s=null,r=null;this.turtleAnimClip&&(s=new ji(e),r=s.clipAction(this.turtleAnimClip),r.play(),r.timeScale=1);const a=this._createHealthBar();e.add(a),a.position.y=3.5;const l=40+this.currentWave*10,h={model:e,mixer:s,walkAction:r,healthBarGroup:a,healthBarFill:a.children[1],maxHealth:l,health:l,speed:12+this.currentWave*.75,attackDamage:8+this.currentWave*2,attackRange:5,hitRadius:5,state:mt.SPAWNING,alive:!0,position:e.position,_spawnTimer:0,_attackTimer:0,_attackCooldown:1.5,_cooldownTimer:0,_deathTimer:0,_flashTimer:0,_lungeDir:new A,_lungeProgress:0,targetEntity:Math.random()>.5?"burrow":"crab"};this._applyModifiers(h,"turtle"),this.enemies.push(h),this.enemiesAliveInWave++,this.dialogue&&Math.random()<.25&&this.dialogue.speak(e,"The beach belongs to us!","monster",2.5,4.5)}_spawnOctopus(){if(!this._octopusModelLoaded||this._getAliveCount("octopus")>=Wi.octopus)return;const e=yi(this.octopusModel),n=new Pt().setFromObject(e).getCenter(new A);e.position.x=-n.x,e.position.z=-n.z,e.position.y=-12;const i=new Xt;i.add(e);const s=55+Math.random()*20,r=-190+Math.random()*380,a=0,l=this.world.getTerrainHeight(s,r)+a;i.position.set(s,l,r),i.rotation.y=Math.PI,e.traverse(x=>{x.isMesh&&(x.castShadow=!0,x.receiveShadow=!0,x.frustumCulled=!1,x.material&&(x.material=x.material.clone(),x.userData.originalColor=x.material.color.clone(),x.userData.originalEmissive=x.material.emissive?x.material.emissive.clone():new le(0)))}),this.scene.add(i);let h=null,u=null;this.octopusAnimClip&&(h=new ji(e),u=h.clipAction(this.octopusAnimClip),u.play(),u.timeScale=1);const c=this._createHealthBar();i.add(c),c.position.y=13,c.scale.set(2.5,2.5,2.5);const f=(60+this.currentWave*20)*2,g=8+this.currentWave*2,_=g*2,m=g*.3,p={model:i,mixer:h,walkAction:u,healthBarGroup:c,healthBarFill:c.children[1],isOctopus:!0,maxHealth:f,health:f,speed:10+this.currentWave*.5,attackDamage:_,tickDamage:m,attackRange:40,hitRadius:4,state:mt.SPAWNING,alive:!0,position:i.position,yOffset:a,_spawnTimer:0,_attackTimer:0,_attackCooldown:5,_cooldownTimer:0,_deathTimer:0,_flashTimer:0,_lungeDir:new A,_lungeProgress:0,targetEntity:"crab",throwCount:0,_dialogueTimer:12};this._applyModifiers(p,"octopus"),this.enemies.push(p),this.dialogue&&!this._octopusSpokeThisWave&&(this._octopusSpokeThisWave=!0,this.spawnDialogueQueue.push({entity:p,text:"You hear it too… don’t you The call of the abyss… it calls for you.",heightOffset:15})),this.enemiesAliveInWave++}_spawnBoss(){if(!this._bossModelLoaded||this._getAliveCount("boss")>=Wi.boss)return;const e=yi(this.bossModel);this.isBigBossWave&&e.scale.multiplyScalar(2);const t=new Xt;t.add(e);const n=55+Math.random()*20,i=-190+Math.random()*380,s=this.world.getTerrainHeight(n,i);t.position.set(n,s,i),t.rotation.y=Math.PI,e.traverse(c=>{c.isMesh&&(c.castShadow=!0,c.receiveShadow=!0,c.material&&(c.material=c.material.clone(),c.userData.originalColor=c.material.color.clone(),c.userData.originalEmissive=c.material.emissive?c.material.emissive.clone():new le(0)))}),this.scene.add(t);let r=null,a=null;this.bossAnimClip&&(r=new ji(e),a=r.clipAction(this.bossAnimClip),a.play(),a.timeScale=1);const l=this._createHealthBar();t.add(l),this.isBigBossWave?(l.position.y=26,l.scale.set(7,7,7)):(l.position.y=14,l.scale.set(4,4,4));const h=this.isBigBossWave?600+this.currentWave*100:400+this.currentWave*50,u={model:t,mixer:r,walkAction:a,healthBarGroup:l,healthBarFill:l.children[1],isBoss:!0,maxHealth:h,health:h,speed:this.isBigBossWave?8+this.currentWave*.2:10+this.currentWave*.5,attackDamage:this.isBigBossWave?40+this.currentWave*5:20+this.currentWave*5,attackRange:this.isBigBossWave?12:8,hitRadius:this.isBigBossWave?12:8,state:mt.SPAWNING,alive:!0,position:t.position,_spawnTimer:0,_attackTimer:0,_attackCooldown:this.isBigBossWave?2.5:1.5,_cooldownTimer:0,_deathTimer:0,_flashTimer:0,_lungeDir:new A,_lungeProgress:0,_needsFlashReset:!1,targetEntity:"crab",_isDashing:!1,_dashTimer:7,_dashCooldown:0,isBigBoss:this.isBigBossWave};if(this._applyModifiers(u,"boss"),this.enemies.push(u),this.enemiesAliveInWave++,this.dialogue&&!this._bossSpokeThisWave){this._bossSpokeThisWave=!0;const c=["I am the terror of the deep! Your water gun is nothing!","The tide washes all away... starting with you!"],d=c[Math.floor(Math.random()*c.length)],f=this.isBigBossWave?22:15;this.spawnDialogueQueue.push({entity:u,text:d,heightOffset:f})}}_createHealthBar(){const e=new Xt,t=new Wt(2,.25),n=new St({color:3355443,side:vt}),i=new Re(t,n);e.add(i);const s=new Wt(1.9,.18),r=new St({color:4521796,side:vt}),a=new Re(s,r);return a.position.z=.01,e.add(a),e}damageEnemy(e,t){if(!e.alive)return;e.health-=t,e._flashTimer=.15;const n=Math.max(0,e.health/e.maxHealth);if(e.healthBarFill.scale.x=n,e.healthBarFill.position.x=-(1-n)*.95,e.isCthulhu){const i=document.getElementById("cthulhu-bossbar-fill");i&&(i.style.width=`${n*100}%`)}else{const i=n<.5?1:(1-n)*2,s=n>.5?1:n*2;e.healthBarFill.material.color.setRGB(i,s,0)}if(e.health<=0)this._killEnemy(e);else if(this.dialogue&&!e.isCthulhu&&Math.random()<.1)if(e.isBoss){const i=["Your pathetic squirt gun cannot pierce my armor!","I am the terror of the deep! Your water gun is nothing!","The tide washes all away... starting with you!"],s=i[Math.floor(Math.random()*i.length)],r=e.healthBarGroup.position.y-1;this.dialogue.speak(e.model,s,"monster",3.5,r)}else{const i=["You're gonna feel my wrath, shell-face!","Snap him in half!","The beach belongs to us!"],s=i[Math.floor(Math.random()*i.length)];this.dialogue.speak(e.model,s,"monster",2.5,4.5)}this.audio&&this.audio.initialized&&this.audio.playEnemyHitSound(e.isBoss)}_triggerRandomTaunt(){const e=this.enemies.filter(s=>s.alive&&!s.isCthulhu);if(e.length===0)return;const t=e[Math.floor(Math.random()*e.length)];let n="",i=15;if(t.isBoss){const s=["Your pathetic squirt gun cannot pierce my armor!","I am the terror of the deep! Your water gun is nothing!","The tide washes all away... starting with you!"];n=s[Math.floor(Math.random()*s.length)],i=t.healthBarGroup?t.healthBarGroup.position.y-1:20}else if(t.isOctopus){const s=["The call of Cthulhu echoes.","The abyss is awake.... Wakey wakey!!!"];n=s[Math.floor(Math.random()*s.length)],i=15}else{const s=["You're gonna feel my wrath, shell-face!","Snap him in half!","The beach belongs to us!"];n=s[Math.floor(Math.random()*s.length)],i=4.5}this.dialogue.speak(t.model,n,"monster",3,i)}_killEnemy(e){if(e.alive=!1,e.state=mt.DYING,e._deathTimer=0,e._deathDuration=e.isCthulhu?6:e.isOctopus?4:.6,this.totalKills++,this.enemiesAliveInWave--,e.isCthulhu){this._cthulhuAlive=!1,this.audio&&this.audio.playCthuluDies&&this.audio.playCthuluDies();const n=document.getElementById("cthulhu-bossbar");n&&n.classList.remove("visible")}e.isOctopus&&this.dialogue&&(this.dialogue.monsterCooldown=0,this.dialogue.speak(e.model,"Ahh, The abyss… remembers you.","monster",4,15)),this._spawnDrops(e);const t=document.getElementById("kill-count");t&&(t.textContent=this.totalKills),this.audio&&this.audio.initialized&&this.audio.playEnemyDeathSound(e.isBoss)}_spawnDrops(e){const t=e.isBoss,n=e.isBigBoss,i=e.isOctopus;e.type;const s=e.position,r=Lv,a=h=>(r.set(s.x+(Math.random()-.5)*h,s.y,s.z+(Math.random()-.5)*h),r);if(t){const h=n?15:8;for(let u=0;u<h;u++)this._spawnDrop(a(8),"coin",3+Math.floor(Math.random()*3));this._spawnDrop(s,"health",150+Math.floor(Math.random()*100));return}if(e.isElite){for(let h=0;h<4;h++)this._spawnDrop(a(5),"coin",2+Math.floor(Math.random()*3));Math.random()<.5&&this._spawnDrop(s,"health",50+Math.floor(Math.random()*50));return}if(i){for(let h=0;h<2;h++)this._spawnDrop(a(4),"coin",1+Math.floor(Math.random()*2));Math.random()<.2&&this._spawnDrop(s,"health",30+Math.floor(Math.random()*20));return}const l=Math.random();if(l<.02)for(let h=0;h<4;h++)this._spawnDrop(a(4),"coin",2+Math.floor(Math.random()*3));else if(l<.17)for(let h=0;h<2;h++)this._spawnDrop(a(3),"coin",1+Math.floor(Math.random()*2));else l<.77&&this._spawnDrop(a(2),"coin",1);Math.random()<.1&&this._spawnDrop(s,"health",15+Math.floor(Math.random()*10))}_spawnDrop(e,t,n=1){const i=new cl(.5,0);let s,r;t==="health"?(s=4521830,r=65348):(s=16768324,r=16755200);const a=new dt({color:s,emissive:r,emissiveIntensity:.6,roughness:.2,metalness:.8}),l=new Re(i,a);l.position.copy(e),l.position.y+=1.5,l.castShadow=!0,this.scene.add(l);const h=new Ws(.6,.9,12),u=new St({color:t==="health"?4521830:16768324,transparent:!0,opacity:.4,side:vt}),c=new Re(h,u);c.rotation.x=-Math.PI/2,l.add(c),this.collectibles.push({mesh:l,baseY:e.y+1.5,collected:!1,dropType:t,value:n})}update(e,t,n,i,s,r,a){if(this.dialogue&&!(this.audio&&(this.audio._cthuluRisesActive||this.audio._cthuluDiesActive))&&!this.dialogue.isMonsterSpeaking())if(this.spawnDialogueQueue.length>0){const d=this.spawnDialogueQueue.shift();d.entity&&d.entity.alive&&this.dialogue.speak(d.entity.model,d.text,"monster",4,d.heightOffset)}else this._globalTauntTimer!==void 0&&(this._globalTauntTimer-=e,this._globalTauntTimer<=0&&(this._triggerRandomTaunt(),this._globalTauntTimer=5+Math.random()*5));if(this.waveJustCompleted=!1,!this.waveActive)this._waveTimer-=e,this._waveTimer<=0&&this.startWave();else{let c=0;for(const f of this.enemies)f.state!==mt.DEAD&&f.state!==mt.DYING&&(f.isBoss?c+=10:f.isOctopus?c+=3:c+=1);this._cthulhuRiseGrace>0&&(this._cthulhuRiseGrace=Math.max(0,this._cthulhuRiseGrace-e));const d=this._cthulhuRiseGrace>0;if(this.waveBudget>0&&!d){this.waveSpawnTimer+=e;const f=.5+Math.random()*.5,g=Math.min(20,3+this.currentWave*2);if(this.waveSpawnTimer>f&&c<g){this.waveSpawnTimer=0;let _=!1;this.currentWave>=4&&this._bossModelLoaded&&this.waveBudget>=10&&c+10<=g&&this._getAliveCount("boss")<Wi.boss&&this.waveSpecialSpawned.boss<this.maxBossPerWave&&(Math.random()<.2||this.waveBudget<=15)&&(this.isBigBossWave=this.currentWave%5===0,this._spawnBoss(),this.waveSpecialSpawned.boss++,this.waveBudget-=10,_=!0),!_&&this.currentWave>=2&&this._octopusModelLoaded&&this.waveBudget>=3&&c+3<=g&&this._getAliveCount("octopus")<Wi.octopus&&this.waveSpecialSpawned.octopus<this.maxOctopusPerWave&&(Math.random()<.25||this.waveBudget===3)&&(this._spawnOctopus(),this.waveSpecialSpawned.octopus++,this.waveBudget-=3,_=!0),!_&&this.waveBudget>=1&&c+1<=g&&this._getAliveCount("turtle")<Wi.turtle&&(this._spawnTurtle(),this.waveBudget-=1)}}this._cthulhuAlive&&this.waveBudget<=0&&c===0&&(this.waveBudget=10,this.waveSpawnTimer=0,this.waveSpecialSpawned.octopus=0,this.waveSpecialSpawned.boss=0),this.waveBudget<=0&&c===0&&!this._cthulhuAlive&&(this.waveActive=!1,this._waveTimer=this._waveDelay,this.waveJustCompleted=!0,console.log(`Wave ${this.currentWave} complete!`))}let l=0;for(const c of this.enemies){if(c.state===mt.DEAD)continue;if(c.mixer&&c.mixer.update(e),c._knockbackVelocity&&c._knockbackVelocity.lengthSq()>.01&&(c.position.addScaledVector(c._knockbackVelocity,e*10),c._knockbackVelocity.multiplyScalar(.8),c.position.y=this.world.getTerrainHeight(c.position.x,c.position.z)+(c.yOffset||0)),c._staggerTimer>0){c._staggerTimer-=e,c.walkAction&&(c.walkAction.timeScale=.2),c.healthBarGroup&&i&&c.healthBarGroup.lookAt(i.position);continue}if(c.healthBarGroup&&i&&c.healthBarGroup.lookAt(i.position),c._flashTimer>0){c._flashTimer-=e;const m=c._flashTimer/.15;c.model.traverse(p=>{p.isMesh&&p.material&&p.material.emissive&&p.material.emissive.setRGB(m,0,0)}),c._needsFlashReset=!0}else c._needsFlashReset&&(c._needsFlashReset=!1,c.model.traverse(m=>{m.isMesh&&m.material&&m.material.emissive&&(m.userData.originalEmissive?m.material.emissive.copy(m.userData.originalEmissive):m.material.emissive.setRGB(0,0,0))}));let d=n,f=!1,g=null;if(c.targetEntity==="burrow"&&s&&s.health>0&&(d=s.position,f=!0),s&&s.minions){let m=c.position.distanceTo(d);for(const p of s.minions){if(p.health<=0)continue;const x=c.position.distanceTo(p.model.position);x<m&&(m=x,d=p.model.position,g=p,f=!1)}}const _=c.position.distanceTo(d);switch(c.state){case mt.SPAWNING:if(c._spawnTimer+=e,c.isCthulhu){const R=Math.min(1,c._spawnTimer/(c._emergeDuration||5)),D=1-Math.pow(1-R,3),I=c._emergeStartY??-45,k=c._emergeFinalY??-2;c.position.y=I+(k-I)*D,c.walkAction&&(c.walkAction.timeScale=.35),R>=1&&(c.state=mt.WALKING,c._cooldownTimer=.4);break}c._spawnTimer>1&&(c.state=mt.WALKING);break;case mt.WALKING:if(c.isCthulhu){c._bobTimer+=e,c.position.y=(c._emergeFinalY??-2)+Math.sin(c._bobTimer*.7)*1.4,c.walkAction&&(c.walkAction.timeScale=.6);const R=d.x-c.position.x,D=d.z-c.position.z;if(Math.abs(R)>.1||Math.abs(D)>.1){const I=Math.atan2(R,D);let k=c.model.rotation.y,X=I-k;for(;X>Math.PI;)X-=Math.PI*2;for(;X<-Math.PI;)X+=Math.PI*2;c.model.rotation.y=k+X*Math.min(1,e*.8)}if(c._cooldownTimer-=e,c._cooldownTimer<=0&&(c._cooldownTimer=c._attackCooldown,c.throwCount++,a&&a.throwBlob)){const I=c.position.clone();I.y+=18;const k=d.clone();a.throwBlob(I,k,c.attackDamage*2,c.tickDamage*2,5)}break}if(c.isOctopus){c._cooldownTimer-=e;const R=d.x-c.position.x,D=d.z-c.position.z,I=Math.sqrt(R*R+D*D);if(I>.1&&(c.model.rotation.y=Math.atan2(R,D)),c.position.x>25){const k=R/I,X=D/I,q=Math.min(-.5,k);c.position.x+=q*c.speed*2*e,c.position.z+=X*c.speed*2*e,c.position.y=this.world.getTerrainHeight(c.position.x,c.position.z)+(c.yOffset||0),c.walkAction&&(c.walkAction.timeScale=2)}else if(I>20){const k=R/I,X=D/I;c.position.x+=k*c.speed*.5*e,c.position.z+=X*c.speed*.5*e,c.position.y=this.world.getTerrainHeight(c.position.x,c.position.z)+(c.yOffset||0),c.walkAction&&(c.walkAction.timeScale=.5)}else c.walkAction&&(c.walkAction.timeScale=0);if(c._cooldownTimer<=0&&(c._cooldownTimer=c._attackCooldown,c.throwCount++,Math.random()<.25&&this.dialogue&&!this.dialogue.isMonsterSpeaking()&&this.dialogue.speak(c.model,"Swallow my darkness!","monster",3,15),a)){const k=d.clone(),X=c.position.clone();X.y+=6,a.throwBlob(X,k,c.attackDamage,c.tickDamage)}break}let m=c.speed,p=1;if(c.isBoss)c._dashTimer-=e,c._isDashing?c._dashTimer<=0?(c._isDashing=!1,c._dashTimer=7):(m*=3,p=3,_<c.hitRadius+2&&c._dashTimer<2.8&&(g&&g.health!==void 0?g.health-=c.attackDamage*e*2:f?s.takeDamage(c.attackDamage*e*2):(l+=c.attackDamage*e*2,i&&(i.position.x+=(Math.random()-.5)*.4,i.position.y+=(Math.random()-.5)*.4)))):c._dashTimer<=0&&(c._isDashing=!0,c._dashTimer=3);else if(c._canDash){if(c._dashCooldown&&c._dashCooldown>0)c._dashCooldown-=e,m=.1,p=.1;else if(c._dashTimer-=e,c._isDashing)if(c._dashTimer<=0)c._isDashing=!1,c._dashTimer=4,c._dashCooldown=.5;else{m*=6,p=3;const R=c._dashDir.x,D=c._dashDir.z;c.position.x+=R*m*e,c.position.z+=D*m*e,c.position.y=this.world.getTerrainHeight(c.position.x,c.position.z)+(c.yOffset||0),c.model.rotation.y=Math.atan2(R,D),_<c.hitRadius+2&&c._dashTimer<.4&&(g&&g.health!==void 0?g.health-=c.attackDamage*e*3:f?s.takeDamage(c.attackDamage*e*3):(l+=c.attackDamage*e*3,i&&(i.position.x+=(Math.random()-.5)*.6,i.position.y+=(Math.random()-.5)*.6))),c.walkAction&&(c.walkAction.timeScale=p);continue}else if(c._dashTimer<=0&&_<30){c._isDashing=!0,c._dashTimer=.5;const R=Math.sqrt((d.x-c.position.x)**2+(d.z-c.position.z)**2);c._dashDir=new A((d.x-c.position.x)/R,0,(d.z-c.position.z)/R)}}c.walkAction&&(c.walkAction.timeScale=p);const x=d.x-c.position.x,M=d.z-c.position.z,v=Math.sqrt(x*x+M*M);if(v>.1){const R=x/v,D=M/v;c.position.x+=R*m*e,c.position.z+=D*m*e,c.position.y=this.world.getTerrainHeight(c.position.x,c.position.z)+(c.yOffset||0),c.model.rotation.y=Math.atan2(R,D)}const P=f?c.attackRange+8:c.attackRange;_<P&&(c.state=mt.ATTACKING,c._attackTimer=0,c._lungeProgress=0,c._lungeDir.set(x/v,0,M/v),this.audio&&this.audio.initialized&&this.audio.playEnemyAttackSound(c.isBoss),c.walkAction&&(c.walkAction.timeScale=4));break;case mt.ATTACKING:c._attackTimer+=e,c._lungeProgress=Math.min(1,c._attackTimer/.3);const C=c.speed*3;if(c._lungeProgress<1&&(c.position.x+=c._lungeDir.x*C*e,c.position.z+=c._lungeDir.z*C*e,c.position.y=this.world.getTerrainHeight(c.position.x,c.position.z)+(c.yOffset||0),c.model.traverse(R=>{R.isMesh&&R.material&&R.material.emissive&&R.material.emissive.setRGB(.8,.1,0)})),c._attackTimer>.25&&c._attackTimer<.35){const R=f?c.attackRange+5:c.attackRange+2;_<R&&(g&&g.health!==void 0?g.health-=c.attackDamage:f?s.takeDamage(c.attackDamage):(l+=c.attackDamage,i&&(i.position.x+=(Math.random()-.5)*.8,i.position.y+=(Math.random()-.5)*.5))),c.state=mt.COOLDOWN,c._cooldownTimer=0,c._needsFlashReset=!0}break;case mt.COOLDOWN:c._cooldownTimer+=e,c._cooldownTimer<.4&&(c.position.x-=c._lungeDir.x*c.speed*.5*e,c.position.z-=c._lungeDir.z*c.speed*.5*e,c.position.y=this.world.getTerrainHeight(c.position.x,c.position.z)),c.walkAction&&(c.walkAction.timeScale=.3),c._cooldownTimer>c._attackCooldown&&(c.state=mt.WALKING);break;case mt.DYING:c._deathTimer+=e;const E=c._deathDuration||.6,L=c._deathTimer/E;c._materialsFaded||(c._materialsFaded=!0,c.model.traverse(R=>{R.isMesh&&R.material&&(R.material.transparent=!0,R.material.needsUpdate=!0)}));const w=c.isBoss||c.isOctopus?1:this.turtleModel.scale.x;c.model.scale.setScalar(w*Math.max(0,1-L)),c.model.traverse(R=>{R.isMesh&&R.material&&(R.material.opacity=Math.max(0,1-L))});const S=c.isOctopus?2:12;c.model.rotation.y+=e*S,c.model.position.y+=e*(c.isOctopus?.5:2),c.walkAction&&(c.walkAction.timeScale=c.isOctopus?2:8),c._deathTimer>E&&(c.state=mt.DEAD,this.scene.remove(c.model));break}}let h=0,u=0;for(const c of this.collectibles){if(c.collected)continue;const d=c.mesh.position.distanceTo(n);if(d<15){const f=new A().subVectors(n,c.mesh.position);f.y+=1,f.normalize(),c.mesh.position.addScaledVector(f,e*25),c.baseY=c.mesh.position.y}else c.mesh.position.y=c.baseY+Math.sin(t*3)*.5,c.mesh.rotation.y=t*2;d<4&&(c.collected=!0,this.scene.remove(c.mesh),c.dropType==="health"?u+=c.value:h+=c.value,this.audio&&this.audio.initialized&&this.audio.playUpgradeSound())}return this.enemies.length>50&&(this.enemies=this.enemies.filter(c=>c.state!==mt.DEAD)),this.collectibles.length>50&&(this.collectibles=this.collectibles.filter(c=>!c.collected)),{damageToPlayer:l,coinsCollected:h,healthCollected:u,waveJustCompleted:this.waveJustCompleted}}}const ei={SPAWNING:"spawning",PATROL:"patrol",ATTACK:"attack"},Bt={ACTIVE:"active",DESTROYED:"destroyed",REBUILDING:"rebuilding"};class Iv{constructor(e,t,n){this.scene=e,this.world=t,this.audio=n,this.loader=new $r,this.level=1,this.maxHealth=400,this.health=400,this.position=new A(-60,0,0),this.depositRadius=10,this.state=Bt.ACTIVE,this.maxMinions=3,this.repairCost=15,this.rebuildTimer=0,this.rebuildDuration=15,this.coinTimer=0,this.burrowGroup=new Xt,this.burrowGroup.position.copy(this.position),this.scene.add(this.burrowGroup),this.eggs=[],this.minions=[],this.minionModel=null,this.minionAnimClips=null,this._buildBurrow(),this._loadMinionModel(),this._updateHUD()}reset(){for(const e of this.eggs)e.mesh&&this.burrowGroup.remove(e.mesh);this.eggs=[];for(const e of this.minions)e.model&&this.scene.remove(e.model);this.minions=[],this.maxHealth=400,this.maxMinions=3,this.health=this.maxHealth,this.level=1,this.state=Bt.ACTIVE,this.rebuildTimer=0,this.coinTimer=0,this.world?this.burrowGroup.position.y=this.world.getTerrainHeight(this.position.x,this.position.z)-.2:this.burrowGroup.position.copy(this.position),this._updateHUD()}_buildBurrow(){this.loader.load("./models/simple_rock_iv.glb",e=>{const t=e.scene,n=20,i=9;for(let f=0;f<n;f++){if(f===0)continue;const g=t.clone(),_=f/n*Math.PI*2,m=Math.cos(_)*i,p=Math.sin(_)*i;if(g.position.set(m,0,p),g.scale.setScalar(4+Math.random()*3.5),g.rotation.y=Math.random()*Math.PI,g.rotation.z=(Math.random()-.5)*.5,g.traverse(x=>{x.isMesh&&(x.castShadow=!0,x.receiveShadow=!0,x.material&&(x.material=x.material.clone()))}),this.burrowGroup.add(g),Math.random()<.4){const x=new yn(.2,.4,4+Math.random()*3,6),M=new dt({color:9136404,roughness:.95,metalness:0}),v=new Re(x,M);v.position.set(m+(Math.random()-.5),1.5,p+(Math.random()-.5)),v.rotation.set(Math.random()*Math.PI,Math.random()*Math.PI,Math.random()*Math.PI),v.castShadow=!0,this.burrowGroup.add(v)}}const s=new yn(.1,8.5,2.5,16),r=new dt({color:13936746,roughness:1}),a=new Re(s,r);a.position.y=.75,a.receiveShadow=!0,this.burrowGroup.add(a);const l=new ru(16755200,3,25);l.position.y=2,this.burrowGroup.add(l);const h=new yn(1.5,.4,60,12),u=new St({color:16766720,transparent:!0,opacity:.2,blending:Br,depthWrite:!1}),c=new Re(h,u);c.position.y=20,this.burrowGroup.add(c),this.burrowGroup.position.y=this.world.getTerrainHeight(this.position.x,this.position.z)-.2;const d=document.getElementById("burrow-hud");d&&(d.style.display="block")})}_loadMinionModel(){this.loader.load("./models/animated_crab.glb",e=>{this.minionModel=e.scene,this.minionAnimClips=e.animations;const n=new Pt().setFromObject(this.minionModel).getSize(new A),s=2/Math.max(n.x,n.y,n.z);this.minionModel.scale.setScalar(s),this.minionModel.traverse(r=>{r.isMesh&&(r.castShadow=!0,r.receiveShadow=!0,r.material&&(r.material=r.material.clone(),r.material.color.setHex(16733491)))}),console.log("✓ Minion model loaded")})}tryInteract(e){return this.state===Bt.DESTROYED&&e>=this.repairCost?(this._startRebuilding(),this.repairCost):0}spawnMinion(){return this.state===Bt.ACTIVE&&this.eggs.length+this.minions.length<this.maxMinions?(this._layEgg(),!0):!1}_layEgg(){const e=new rn(.8,16,16),t=new dt({color:16755200,emissive:16729088,emissiveIntensity:.8,roughness:.2,metalness:.1}),n=new Re(e,t),i=Math.random()*Math.PI*2,s=Math.random()*1.5;n.position.set(Math.cos(i)*s,1.2,Math.sin(i)*s),n.castShadow=!0,this.burrowGroup.add(n),this.eggs.push({mesh:n,timer:5,baseY:1,phase:Math.random()*Math.PI}),this.audio&&this.audio.playUpgradeSound(),window.showNotification&&window.showNotification("Egg Laid!","A Baby Crab will hatch in 5 seconds."),this.dialogue&&this.crab&&this.crab.model&&this.dialogue.speak(this.crab.model,"Little one is on the way!","hero",2.5),this._updateHUD()}_hatchEgg(e){const t=this.eggs[e];if(this.burrowGroup.remove(t.mesh),this.eggs.splice(e,1),!this.minionModel)return;const n=yi(this.minionModel),i=new A;t.mesh.getWorldPosition(i),n.position.copy(i),this.scene.add(n);let s=null,r=null,a=null;if(this.minionAnimClips&&this.minionAnimClips.length>0){if(s=new ji(n),this.minionAnimClips.length===1)r=s.clipAction(this.minionAnimClips[0]),a=s.clipAction(this.minionAnimClips[0]);else{const h=this.minionAnimClips.find(c=>c.name.toLowerCase().includes("run"))||this.minionAnimClips[0],u=this.minionAnimClips.find(c=>c.name.toLowerCase().includes("attack"))||this.minionAnimClips[0];r=s.clipAction(h),a=s.clipAction(u)}r.play()}const l={model:n,mixer:s,runAction:r,attackAction:a,state:ei.SPAWNING,health:400*(this.crab&&this.crab.utilityLevels?this.crab.utilityLevels.minionLevel:1),speed:14+(this.crab&&this.crab.utilityLevels?this.crab.utilityLevels.minionLevel:1)*2,damage:15+(this.crab&&this.crab.utilityLevels?this.crab.utilityLevels.minionLevel:1)*5,target:null,timer:0,attackCooldown:0,scalePhase:0};n.scale.setScalar(.1),this.minions.push(l),window.showNotification&&window.showNotification("Hatched!","A Minion Crab joined the fight!"),this.dialogue&&this.crab&&this.crab.model&&this.dialogue.speak(this.crab.model,"Go get 'em, little buddy!","hero",2.5),this._updateHUD()}takeDamage(e){this.health<=0||this.state!==Bt.ACTIVE||(this.health-=e,this.burrowGroup.traverse(t=>{t.isMesh&&t.material&&t.material.emissive&&(t.userData.originalEmissive||(t.userData.originalEmissive=t.material.emissive.clone()),t.material.emissive.setHex(16711680),t.userData.flashTimeout&&clearTimeout(t.userData.flashTimeout),t.userData.flashTimeout=setTimeout(()=>{t.material&&t.material.emissive.copy(t.userData.originalEmissive)},150))}),this.health<=0&&(this.health=0,this._destroyBurrow()),this._updateHUD())}_destroyBurrow(){this.state=Bt.DESTROYED,console.log("Burrow Destroyed!");for(const e of this.eggs)this.burrowGroup.remove(e.mesh);this.eggs=[],this.level=1,this.maxMinions=3,this.burrowGroup.position.y-=2,window.showNotification&&window.showNotification("Burrow Destroyed!","Deposit 15 Shells to rebuild it."),this.dialogue&&this.crab&&this.crab.model&&(this.dialogue.heroCooldown=0,this.dialogue.speak(this.crab.model,"Oh no! The burrow is destroyed!","hero",3)),this._updateHUD()}_startRebuilding(){this.state=Bt.REBUILDING,this.rebuildTimer=0;const e=new Wt(5,.5),t=new St({color:3355443,depthTest:!1});this.rebuildBg=new Re(e,t),this.rebuildBg.position.y=8;const n=new Wt(5,.5),i=new St({color:16766720,depthTest:!1});this.rebuildFill=new Re(n,i),this.rebuildFill.position.y=8,this.rebuildFill.position.z=.01,this.rebuildFill.scale.x=.01,this.burrowGroup.add(this.rebuildBg),this.burrowGroup.add(this.rebuildFill),window.showNotification&&window.showNotification("Rebuilding!","Defend the Burrow while it rebuilds!"),this.dialogue&&this.crab&&this.crab.model&&(this.dialogue.heroCooldown=0,this.dialogue.speak(this.crab.model,"Rebuilding the burrow... hold them off!","hero",3)),this._updateHUD()}update(e,t,n){const i=n.enemies;if(this.state===Bt.ACTIVE&&(this.coinTimer+=e,this.coinTimer>=3)){this.coinTimer=0;const s=Math.random()*Math.PI*2,r=2+Math.random()*2,a=this.position.clone();a.x+=Math.cos(s)*r,a.z+=Math.sin(s)*r,n._spawnDrop(a,"coin",1)}if(this.state===Bt.REBUILDING){this.rebuildTimer+=e;const s=Math.min(1,this.rebuildTimer/this.rebuildDuration);this.rebuildFill.scale.x=Math.max(.01,s),this.rebuildFill.position.x=-2.5+2.5*s,this.burrowGroup.position.y+=2/this.rebuildDuration*e,s>=1&&(this.state=Bt.ACTIVE,this.health=this.maxHealth,this.burrowGroup.position.y=this.world.getTerrainHeight(this.position.x,this.position.z)-.2,this.burrowGroup.remove(this.rebuildBg),this.burrowGroup.remove(this.rebuildFill),window.showNotification&&window.showNotification("Burrow Restored!","Your Burrow is back online."),this.dialogue&&this.crab&&this.crab.model&&(this.dialogue.heroCooldown=0,this.dialogue.speak(this.crab.model,"The burrow is back online!","hero",3))),this._updateHUD()}for(let s=this.eggs.length-1;s>=0;s--){const r=this.eggs[s];r.timer-=e;const a=Math.sin(t*4+r.phase)*.1+1;r.mesh.scale.setScalar(a),r.mesh.material.emissiveIntensity=.5+a*.5,r.timer<=0&&this._hatchEgg(s)}for(let s=this.minions.length-1;s>=0;s--){const r=this.minions[s];if(r.health<=0){this.scene.remove(r.model),this.minions.splice(s,1),this._updateHUD();continue}switch(r.mixer&&r.mixer.update(e),r.state){case ei.SPAWNING:r.scalePhase+=e*2;const c=this.minionModel?this.minionModel.scale.x:.5;r.model.scale.setScalar(Math.min(c,r.scalePhase*c)),r.scalePhase>=1&&(r.state=ei.PATROL);break;case ei.PATROL:r.runAction&&(r.runAction.timeScale=1,r.runAction.play());const d=28;let g=25,_=null;for(const P of i){if(P.state==="dead"||P.state==="dying"||Math.sqrt(Math.pow(P.position.x-this.position.x,2)+Math.pow(P.position.z-this.position.z,2))>d)continue;const E=r.model.position.distanceTo(P.position);E<g&&(g=E,_=P)}if(_)r.target=_,r.state=ei.ATTACK;else{r.timer+=e;const P=8,C=this.position.x+Math.cos(r.timer*.5+s)*P,E=this.position.z+Math.sin(r.timer*.5+s)*P,L=C-r.model.position.x,w=E-r.model.position.z;r.model.position.x+=L*e*2,r.model.position.z+=w*e*2,r.model.position.y=this.world.getTerrainHeight(r.model.position.x,r.model.position.z),(Math.abs(L)>.1||Math.abs(w)>.1)&&(r.model.rotation.y=Math.atan2(L,w))}break;case ei.ATTACK:const m=28;if(!r.target||r.target.state==="dead"||r.target.state==="dying"){r.target=null,r.state=ei.PATROL;break}if(Math.sqrt(Math.pow(r.target.position.x-this.position.x,2)+Math.pow(r.target.position.z-this.position.z,2))>m){r.target=null,r.state=ei.PATROL;break}const x=r.target.position.x-r.model.position.x,M=r.target.position.z-r.model.position.z,v=Math.sqrt(x*x+M*M);v>3?(r.runAction&&(r.runAction.timeScale=3),r.model.position.x+=x/v*r.speed*e,r.model.position.z+=M/v*r.speed*e,r.model.position.y=this.world.getTerrainHeight(r.model.position.x,r.model.position.z),r.model.rotation.y=Math.atan2(x,M)):(r.runAction&&(r.runAction.timeScale=1),r.model.rotation.y=Math.atan2(x,M),r.attackCooldown-=e,r.attackCooldown<=0&&(r.attackCooldown=.5,n.damageEnemy(r.target,r.damage),r.model.position.x+=x/v*1.5,r.model.position.z+=M/v*1.5));break}const a=28,l=r.model.position.x-this.position.x,h=r.model.position.z-this.position.z,u=Math.sqrt(l*l+h*h);if(u>a){const c=l/u,d=h/u;r.model.position.x=this.position.x+c*a,r.model.position.z=this.position.z+d*a,r.model.position.y=this.world.getTerrainHeight(r.model.position.x,r.model.position.z)}}}_updateHUD(){const e=document.getElementById("burrow-health"),t=document.getElementById("burrow-minions"),n=document.getElementById("burrow-level"),i=document.getElementById("burrow-cost");if(e&&(this.state===Bt.DESTROYED?(e.textContent="DESTROYED",e.style.color="#555555"):this.state===Bt.REBUILDING?(e.textContent="REBUILDING...",e.style.color="#FFD700"):(e.textContent=`${Math.max(0,Math.floor(this.health))}/${this.maxHealth} HP`,this.health<this.maxHealth*.3?e.style.color="#FF0000":e.style.color="#44FF44")),t&&(this.state===Bt.ACTIVE?t.textContent=`${this.eggs.length+this.minions.length}/${this.maxMinions}`:t.textContent="OFFLINE"),n&&(n.textContent=this.level),i)if(this.state===Bt.DESTROYED)i.textContent="Rebuild: 15 Shells",i.style.color="#FF4444";else if(this.state===Bt.REBUILDING)i.textContent="Please Wait...",i.style.color="#FFD700";else if(this.eggs.length+this.minions.length>=this.maxMinions)i.textContent="MAX CAPACITY",i.style.color="#AAAAAA";else{const s=this.eggs.length+this.minions.length,r=5*Math.pow(2,s);i.textContent=`Cost: ${r} Shells`,i.style.color="#FFD700"}}}class Nv{constructor(e,t){this.camera=e,this.audioManager=t,this.layer=document.getElementById("dialogue-layer"),this.activeDialogues=[],this.dialogueFiles={"I am the terror of the deep! Your water gun is nothing!":"terror-of-the-deep.mp3","Need more water... hold on.":"need-more-water.mp3","Oh crab... here comes the big one.":"oh-crab-big-one.mp3","Snap him in half!":"snap-him-in-half.mp3","The beach belongs to us!":"beach-belongs-to-us.mp3","The tide washes all away... starting with you!":"tide-washes-all-away.mp3","Time to clean up this beach.":"time-to-clean-up.mp3","Your pathetic squirt gun cannot pierce my armor!":"pathetic-squirt-gun.mp3","You're gonna feel my wrath, shell-face!":"yourgonnafeelmywrathshellface_turtle.mp3","Oh no! The burrow is destroyed!":"burrow-destroyed.mp3","Rebuilding the burrow... hold them off!":"rebuilding-burrow.mp3","The burrow is back online!":"burrow-back-online.mp3","Little one is on the way!":"little-one-on-the-way.mp3","Go get 'em, little buddy!":"go-get-em-little-buddy.mp3","You hear it too… don't you The call of the abyss… it calls for you.":"hear-it-too-call-of-abyss.mp3","The call of Cthulhu echoes.":"call-of-cthulhu-echoes.mp3","The abyss is awake.... Wakey wakey!!!":"abyss-is-awake.mp3","Swallow my darkness!":"swallow-my-darkness.mp3","Ahh, The abyss… remembers you.":"abyss-remembers-you.mp3","You belong to the deep now… Cthulhu waits below.":"belong-to-the-deep.mp3","Sink without fear… the deep has already claimed you.":"sink-without-fear.mp3"},this.audioBuffers={},this.monsterCooldown=0,this.heroCooldown=0,this._preloadAudio()}async _preloadAudio(){Object.entries(this.dialogueFiles).forEach(([e,t])=>{fetch(`./models/dialogues/${t}`).then(n=>n.arrayBuffer()).then(n=>{this.audioManager&&this.audioManager.ctx?this.audioManager.ctx.decodeAudioData(n).then(i=>{this.audioBuffers[t]=i,console.log(`✓ Pre-decoded dialogue: ${t}`)}).catch(i=>console.error(`Failed to decode ${t}:`,i)):this.audioBuffers[t]=n}).catch(n=>console.error(`Failed to preload ${t}:`,n))})}isMonsterSpeaking(){return this.monsterCooldown>0}speak(e,t,n="monster",i=3,s=2.5){if(this.audioManager&&(this.audioManager._cthuluRisesActive||this.audioManager._cthuluDiesActive)||n==="monster"&&this.monsterCooldown>0||n==="hero"&&this.heroCooldown>0)return!1;let r=i;const a=this.dialogueFiles[t];a&&this.audioBuffers[a]&&this.audioBuffers[a]instanceof AudioBuffer&&(r=this.audioBuffers[a].duration),n==="monster"?this.monsterCooldown=r+.1:this.heroCooldown=r+.5;const l=document.createElement("div");l.className=`speech-bubble ${n}`,l.textContent=t,this.layer.appendChild(l);const h={entity:e,el:l,text:t,timer:r,heightOffset:s,panner:null};return this._playAudioForText(t,n,e,h),this.activeDialogues.push(h),!0}async _playAudioForText(e,t,n,i){if(!this.audioManager||!this.audioManager.ctx)return;const s=this.dialogueFiles[e];if(!s)return;let r=this.audioManager[`dialogue_${s}`];if(!r&&this.audioBuffers[s])if(this.audioBuffers[s]instanceof AudioBuffer)r=this.audioBuffers[s],this.audioManager[`dialogue_${s}`]=r;else try{const c=this.audioBuffers[s].slice(0);r=await this.audioManager.ctx.decodeAudioData(c),this.audioManager[`dialogue_${s}`]=r}catch(c){console.warn(`Decode failed for ${s}`,c);return}if(!r||!this.audioManager.masterGain)return;const a=this.audioManager.ctx,l=a.createBufferSource();l.buffer=r;const h=a.createGain();h.gain.value=t==="monster"?1:.8;let u=null;t==="monster"&&n&&n.position&&this.audioManager.createPositionalPanner&&(u=this.audioManager.createPositionalPanner(n.position.x,n.position.y+2,n.position.z)),l.connect(h),u?(h.connect(u),u.connect(this.audioManager.masterGain),i&&(i.panner=u)):h.connect(this.audioManager.masterGain),l.start()}update(e){this.monsterCooldown>0&&(this.monsterCooldown-=e),this.heroCooldown>0&&(this.heroCooldown-=e);const t=window.innerWidth/2,n=window.innerHeight/2;for(let i=this.activeDialogues.length-1;i>=0;i--){const s=this.activeDialogues[i];if(s.timer-=e,s.timer<=0){s.el.style.opacity="0",s.el.style.transform=`${s.el.style.transform} scale(0.8)`,setTimeout(()=>s.el.remove(),200),this.activeDialogues.splice(i,1);continue}if(s.panner&&s.entity&&s.entity.position){const r=s.entity.position;if(s.panner.positionX){const a=this.audioManager.ctx.currentTime;s.panner.positionX.setValueAtTime(r.x,a),s.panner.positionY.setValueAtTime(r.y+2,a),s.panner.positionZ.setValueAtTime(r.z,a)}else s.panner.setPosition&&s.panner.setPosition(r.x,r.y+2,r.z)}if(s.entity&&s.entity.position){let a=1.2-(this.camera.position.distanceTo(s.entity.position)-20)/80*.7;a=Math.max(.4,Math.min(1.2,a));const l=s.entity.position.clone();if(l.y+=s.heightOffset,l.project(this.camera),l.z>1)s.el.style.display="none";else{s.el.style.display="block";const h=l.x*t+t,u=-(l.y*n)+n,c=Math.sin(s.timer*4)*5;s.el.style.left=`${h}px`,s.el.style.top=`${u+c}px`,s.el.style.transform=`translate(-50%, -100%) scale(${a})`}}}}}const Uv=20,sh=15,zo=13.5;class Bv{constructor(e){this.scene=e,this.blobs=[],this.poisonAreas=[],this._blobGeo=new rn(.8,8,6),this._blobMat=new dt({color:6750003,emissive:2375706,roughness:.2,metalness:.1});const n=new su().load("./textures/toxic_splash.png");this._poisonMat=new wt({uniforms:{tDiffuse:{value:n},opacity:{value:1}},vertexShader:`
        varying vec2 vUv;
        void main() {
          vUv = uv;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,fragmentShader:`
        uniform sampler2D tDiffuse;
        uniform float opacity;
        varying vec2 vUv;
        void main() {
          vec4 texColor = texture2D(tDiffuse, vUv);
          
          vec2 offset1 = vec2(-0.015, 0.015);
          vec2 offset2 = vec2(-0.030, 0.030);
          vec4 shadow1 = texture2D(tDiffuse, vUv + offset1);
          vec4 shadow2 = texture2D(tDiffuse, vUv + offset2);
          
          float brightness = max(texColor.r, max(texColor.g, texColor.b));
          float s1 = max(shadow1.r, max(shadow1.g, shadow1.b));
          float s2 = max(shadow2.r, max(shadow2.g, shadow2.b));
          
          float alpha = smoothstep(0.01, 0.1, brightness);
          float alphaS1 = smoothstep(0.01, 0.1, s1);
          float alphaS2 = smoothstep(0.01, 0.1, s2);
          
          vec3 finalColor = texColor.rgb * 0.5;
          
          if (alpha < 0.05) {
             if (alphaS1 > 0.05) {
                gl_FragColor = vec4(shadow1.rgb * 0.25, alphaS1 * opacity);
                return;
             }
             if (alphaS2 > 0.05) {
                gl_FragColor = vec4(shadow2.rgb * 0.15, alphaS2 * opacity);
                return;
             }
             discard;
          }
          
          gl_FragColor = vec4(finalColor, alpha * opacity);
        }
      `,transparent:!0,depthWrite:!1});for(let i=0;i<Uv;i++){const s=new Re(this._blobGeo,this._blobMat);s.visible=!1,s.castShadow=!0,this.scene.add(s),this.blobs.push({mesh:s,velocity:new A,active:!1,damage:0,tickDamage:0});const r=new Wt(zo*2,zo*2,12,12);r.rotateX(-Math.PI/2);const a=new Re(r,this._poisonMat);a.visible=!1,this.scene.add(a),this.poisonAreas.push({mesh:a,active:!1,timer:0,tickDamage:0,tickTimer:0})}}reset(){for(const e of this.blobs)e.active=!1,e.mesh&&(e.mesh.visible=!1);for(const e of this.poisonAreas)e.active=!1,e.mesh&&(e.mesh.visible=!1),e.timer=0,e.tickTimer=0}throwBlob(e,t,n,i,s){const r=this.blobs.find(d=>!d.active);if(!r)return;r.active=!0,r.mesh.visible=!0,r.mesh.position.copy(e),r.damage=n,r.tickDamage=i,r.puddleDuration=typeof s=="number"?s:sh;const a=new A().subVectors(t,e),h=a.length()/20;a.normalize(),r.velocity.x=a.x*20,r.velocity.z=a.z*20;const c=(t.y-e.y+.5*30*h*h)/h;r.velocity.y=c}_spawnPoisonArea(e,t,n=1,i){const s=this.poisonAreas.find(r=>!r.active);s&&(s.active=!0,s.mesh.visible=!0,s.mesh.position.copy(e),s.mesh.scale.set(.1,1,.1),s.targetScale=n,s.timer=typeof i=="number"?i:sh,s.tickDamage=t,s.tickTimer=0)}update(e,t,n){const i=[];for(const a of this.blobs){if(!a.active)continue;if(a.velocity.y-=30*e,a.mesh.position.addScaledVector(a.velocity,e),a.mesh.rotation.x+=e*5,a.mesh.rotation.y+=e*3,n&&n.loaded&&a.mesh.position.distanceTo(n.position)<4){i.push({damage:a.damage}),this._spawnPoisonArea(a.mesh.position,a.tickDamage,1,a.puddleDuration),a.active=!1,a.mesh.visible=!1;continue}const l=t.getTerrainHeight(a.mesh.position.x,a.mesh.position.z);a.mesh.position.y<=l&&(a.mesh.position.y=l,this._spawnPoisonArea(a.mesh.position,a.tickDamage,1,a.puddleDuration),a.active=!1,a.mesh.visible=!1)}let r=0;for(const a of this.poisonAreas){if(!a.active)continue;if(a.timer-=e,a.timer<=0){a.active=!1,a.mesh.visible=!1;continue}const l=a.targetScale||1;a.mesh.scale.x<l&&(a.mesh.scale.x=Math.min(l,a.mesh.scale.x+e*5*l),a.mesh.scale.z=a.mesh.scale.x);const h=.9;a.mesh.material.uniforms&&(a.mesh.material.uniforms.opacity.value=h);const u=a.mesh.geometry.attributes.position,c=a.mesh.scale.x,d=a.mesh.position.x,f=a.mesh.position.z,g=a.mesh.position.y;for(let _=0;_<u.count;_++){const m=u.getX(_),p=u.getZ(_),x=d+m*c,M=f+p*c,v=t.getTerrainHeight(x,M);u.setY(_,(v-g)/c+.1)}if(u.needsUpdate=!0,n&&n.loaded&&!n.isAirborne&&a.mesh.scale.x>l*.5){const _=Math.pow(n.position.x-a.mesh.position.x,2)+Math.pow(n.position.z-a.mesh.position.z,2),m=zo*a.mesh.scale.x;_<m*m&&(a.tickTimer-=e,a.tickTimer<=0&&(r+=a.tickDamage,a.tickTimer=.5))}}return r>0&&i.push({damage:r}),i}}const Go=["pistol","shotgun","charger"],Ho={pistol:"Pistol",shotgun:"Shotgun",charger:"Charger"};class Fv{constructor(){this.isActive=!1,this._overlay=null,this._resolve=null,this._wavesCompleted=0}onWaveComplete(){return this._wavesCompleted++,this._wavesCompleted%2===0}reset(){if(this._wavesCompleted=0,this.isActive=!1,this._overlay){try{this._overlay.remove()}catch{}this._overlay=null}this._resolve=null}show(e,t,n){return this.isActive=!0,this.crab=e,this.weapons=t,this.burrowManager=n,this._buildUI(),new Promise(i=>{this._resolve=i})}_buildUI(){this._overlay&&this._overlay.remove();const e=document.createElement("div");e.className="shop-overlay",e.innerHTML=`
      <div class="shop-panel">
        <div class="shop-header">
          <div class="shop-title">UPGRADE SHOP</div>
          <div class="shop-coins">Coins: <span id="shop-coin-count">${this.crab.coins}</span></div>
        </div>
        <div class="shop-grid" id="shop-cards"></div>
        <button class="shop-done-btn" id="shop-done-btn">DONE</button>
      </div>
    `,document.body.appendChild(e),this._overlay=e,this._renderCards(),e.querySelector("#shop-done-btn").addEventListener("click",()=>{this._close()})}_renderCards(){const e=this._overlay.querySelector("#shop-cards");e.innerHTML="";const t=this.crab,n=[],i=t.weaponType,s=t.weaponLevels[i]||1,r=s>=10,a=20+(s-1)*15;n.push({id:"weapon_upgrade",title:`Upgrade ${Ho[i]}`,icon:"⬆️",levelText:r?"MAX":`Lv.${s} → Lv.${s+1}`,desc:r?"Maximum power reached":"+Damage, +Crit Chance",cost:r?0:a,color:"#00ddff",canBuy:!r&&t.coins>=a,action:()=>{t.coins-=a,t.weaponLevels[i]++,this.weapons.setWeapon(i,t.weaponLevels[i]),this._playBuySound()}});const l=Go.indexOf(i),h=Go[(l+1)%Go.length],u=10;n.push({id:"switch_weapon",title:`Switch to ${Ho[h]}`,icon:"🔄",levelText:`Currently Lv.${t.weaponLevels[h]||1}`,desc:"Change weapon track completely",cost:u,color:"#ff6b35",canBuy:t.coins>=u,action:()=>{t.coins-=u,t.weaponType=h,this.weapons.setWeapon(h,t.weaponLevels[h]||1),this._playBuySound()}});const c=t.utilityLevels.maxHealth||1,d=c>=10,f=15+(c-1)*10;n.push({id:"max_health",title:"Thick Shell",icon:"❤️",levelText:d?"MAX":`Lv.${c} → Lv.${c+1}`,desc:"+50 Max HP & Full Heal",cost:d?0:f,color:"#44ff88",canBuy:!d&&t.coins>=f,action:()=>{t.coins-=f,t.utilityLevels.maxHealth++,t.maxHealth+=50,t.health=t.maxHealth,this._playBuySound()}});const g=t.utilityLevels.waterCapacity||1,_=g>=10,m=15+(g-1)*10;n.push({id:"water_cap",title:"Deep Reservoir",icon:"💧",levelText:_?"MAX":`Lv.${g} → Lv.${g+1}`,desc:"+50 Ammo Capacity",cost:_?0:m,color:"#44ddff",canBuy:!_&&t.coins>=m,action:()=>{t.coins-=m,t.utilityLevels.waterCapacity++,t.maxAmmo+=50,t.currentAmmo=t.maxAmmo,this._playBuySound()}});const p=t.utilityLevels.burrowStrength||1,x=p>=10,M=20+(p-1)*10;n.push({id:"burrow_hp",title:"Fortified Burrow",icon:"🏰",levelText:x?"MAX":`Lv.${p} → Lv.${p+1}`,desc:"+200 Burrow Max HP & Heal",cost:x?0:M,color:"#ffdd44",canBuy:!x&&t.coins>=M,action:()=>{t.coins-=M,t.utilityLevels.burrowStrength++,this.burrowManager&&(this.burrowManager.maxHealth+=200,this.burrowManager.health+=200),this._playBuySound()}});const v=t.utilityLevels.minionCapacity||1,P=v>=5,C=30+(v-1)*20;n.push({id:"minion_cap",title:"Crab Army",icon:"🦀",levelText:P?"MAX":`Lv.${v} → Lv.${v+1}`,desc:"+1 Minion Capacity",cost:P?0:C,color:"#ff88aa",canBuy:!P&&t.coins>=C,action:()=>{t.coins-=C,t.utilityLevels.minionCapacity++,this.burrowManager&&(this.burrowManager.maxMinions=(this.burrowManager.maxMinions||0)+1),this._playBuySound()}});let E=0,L=!1,w="OFFLINE";if(this.burrowManager&&this.burrowManager.state==="active"){const ne=this.burrowManager.eggs.length+this.burrowManager.minions.length;ne>=this.burrowManager.maxMinions?w="MAX CAPACITY":(E=5*Math.pow(2,ne),w=`${ne}/${this.burrowManager.maxMinions} Alive`,L=t.coins>=E)}n.push({id:"spawn_minion",title:"Hatch Minion",icon:"🥚",levelText:w,desc:"Spawn a minion crab now",cost:L?E:w==="MAX CAPACITY"||w==="OFFLINE"?0:E,color:"#ffaa00",canBuy:L,action:()=>{this.burrowManager&&this.burrowManager.spawnMinion()&&(t.coins-=E,this._playBuySound())}});const S=t.utilityLevels.minionLevel||1,R=S>=5,D=40+(S-1)*30;n.push({id:"upgrade_minion",title:"Minion Power",icon:"💪",levelText:R?"MAX":`Lv.${S} → Lv.${S+1}`,desc:"Increases minion HP & Damage",cost:R?0:D,color:"#dd5555",canBuy:!R&&t.coins>=D,action:()=>{t.coins-=D,t.utilityLevels.minionLevel++,this._playBuySound()}});const I=t.utilityLevels.sandBurst||1,k=I>=5,X=50+(I-1)*40;n.push({id:"upgrade_burst",title:"Sand Burst",icon:"🌪️",levelText:k?"MAX":`Lv.${I} → Lv.${I+1}`,desc:I===1?"+Radius":I===2?"-Cooldown":I===3?"+Damage":"Max Power",cost:k?0:X,color:"#eedd88",canBuy:!k&&t.coins>=X,action:()=>{t.coins-=X,t.utilityLevels.sandBurst++,this._playBuySound()}});const q=t.utilityLevels.jumpPower||1,J=q>=5,V=25+(q-1)*20;n.push({id:"upgrade_jump",title:"Spring Legs",icon:"🦘",levelText:J?"MAX":`Lv.${q} → Lv.${q+1}`,desc:"+Jump height & distance",cost:J?0:V,color:"#88ffaa",canBuy:!J&&t.coins>=V,action:()=>{t.coins-=V,t.utilityLevels.jumpPower++,t.jumpForce=25+(t.utilityLevels.jumpPower-1)*7,this._playBuySound()}}),n.forEach(ne=>{const he=document.createElement("div");he.className="shop-card"+(ne.canBuy?"":" disabled"),he.style.setProperty("--card-color",ne.color);let we="";ne.cost===0?we='<div class="shop-cost">MAX LEVEL</div>':we=`<div class="shop-cost">🪙 ${ne.cost}</div>`,he.innerHTML=`
        <div class="shop-icon">${ne.icon}</div>
        <div class="shop-card-title">${ne.title}</div>
        <div class="shop-level">${ne.levelText}</div>
        <div class="shop-desc">${ne.desc}</div>
        ${we}
      `,ne.canBuy&&he.addEventListener("click",Be=>{ne.action(),this._updateHUD();const Ke=Be.currentTarget;Ke.classList.add("flash-green"),setTimeout(()=>{Ke&&Ke.classList.remove("flash-green"),this._renderCards()},300)}),e.appendChild(he)})}_updateHUD(){const e=this._overlay.querySelector("#shop-coin-count");e&&(e.textContent=this.crab.coins);const t=document.getElementById("coin-count");t&&(t.textContent=this.crab.coins);const n=document.getElementById("gun-tier");n&&(n.textContent=`${Ho[this.crab.weaponType]} Lv.${this.crab.weaponLevels[this.crab.weaponType]}`)}_playBuySound(){}_close(){this.isActive=!1,this._overlay&&(this._overlay.style.animation="upgradeOverlayOut 0.3s forwards",setTimeout(()=>{this._overlay&&(this._overlay.remove(),this._overlay=null)},300)),this._resolve&&(this._resolve(),this._resolve=null)}}var hu=window.Wavedash;if(!hu)throw new Error("Wavedash is not initialized. If you're running your game locally use the `wavedash dev` command to ensure the Wavedash SDK is loaded.");var Gn=hu;let za=!1;const Ov="high-scores";let Vo=null;function ml(){return za?(Vo||(Vo=(async()=>{try{const o=await Gn.getOrCreateLeaderboard(Ov,Gn.LeaderboardSortOrder.DESC,Gn.LeaderboardDisplayType.NUMERIC);return o.success?o.data.id:(console.warn("[wavedash] getOrCreateLeaderboard failed:",o.message),null)}catch(o){return console.warn("[wavedash] getOrCreateLeaderboard error:",o),null}})()),Vo):Promise.resolve(null)}function kv(o,e){return Math.max(0,Math.floor(o||0))*1e4+Math.max(0,Math.floor(e||0))}function uu(o){const e=Math.max(0,Math.floor(o||0));return{wave:Math.floor(e/1e4),kills:e%1e4}}function zv(){try{Gn.init({debug:!0}),za=!0;const o=Gn.getUsername?Gn.getUsername():null;return o?{username:o}:null}catch{return za=!1,null}}async function Gv({wave:o,kills:e}){try{const t=await ml();if(!t)return null;const n=kv(o,e),i=await Gn.uploadLeaderboardScore(t,n,!0);return i.success?i.data.globalRank:(console.warn("[wavedash] uploadLeaderboardScore failed:",i.message),null)}catch(t){return console.warn("[wavedash] submitScore error:",t),null}}async function Hv(o=10){try{const e=await ml();if(!e)return[];const t=await Gn.listLeaderboardEntries(e,0,o,!1);return t.success?t.data.map(n=>{const{wave:i,kills:s}=uu(n.score);return{name:n.username||"Anonymous",wave:i,kills:s,coins:0,globalRank:n.globalRank}}):[]}catch(e){return console.warn("[wavedash] fetchTopScores error:",e),[]}}async function Vv(){try{const o=await ml();if(!o)return null;const e=await Gn.getMyLeaderboardEntries(o);if(!e.success||!e.data||e.data.length===0)return null;const t=e.data[0],{wave:n,kills:i}=uu(t.score);return{entry:{name:t.username||"You",wave:n,kills:i,coins:0},rank:t.globalRank}}catch(o){return console.warn("[wavedash] fetchPlayerRank error:",o),null}}const Wv=.12,Xv=.85;class qv{constructor(e,t={}){this.input=e,this.onPause=t.onPause||(()=>{}),this.onSandBurst=t.onSandBurst||(()=>{}),this.lookSensitivity=t.lookSensitivity||3,this._touches={},this._moveDX=0,this._moveDY=0,this._maxMoveRadius=56,this._bindEvents()}_el(e){return document.getElementById(e)}_bindEvents(){const e=this._el("move-stick-base"),t=this._el("look-area"),n=this._el("btn-fire"),i=this._el("btn-jump"),s=this._el("btn-burst"),r=this._el("btn-pause");if(!e||!t){console.warn("[TouchControls] mobile UI elements missing");return}e.addEventListener("touchstart",u=>{u.preventDefault(),u.stopPropagation();for(const c of u.changedTouches){if(this._anyKind("move"))continue;const d=e.getBoundingClientRect();this._touches[c.identifier]={kind:"move",baseX:d.left+d.width/2,baseY:d.top+d.height/2},this._updateMoveFromTouch(c)}},{passive:!1}),t.addEventListener("touchstart",u=>{u.preventDefault(),u.stopPropagation();for(const c of u.changedTouches)this._anyKind("look")||(this._touches[c.identifier]={kind:"look",lastX:c.clientX,lastY:c.clientY})},{passive:!1});const a=u=>{let c=!1;for(const d of u.changedTouches){const f=this._touches[d.identifier];if(f){if(c=!0,f.kind==="move")this._updateMoveFromTouch(d);else if(f.kind==="look"){const g=d.clientX-f.lastX,_=d.clientY-f.lastY;f.lastX=d.clientX,f.lastY=d.clientY;const m=Math.sqrt(g*g+_*_),p=1+Math.min(2,m/30);this.input._mouseDeltaX+=g*this.lookSensitivity*p,this.input._mouseDeltaY+=_*this.lookSensitivity*p,this.input.mouse.locked=!0}}}c&&u.preventDefault()},l=u=>{for(const c of u.changedTouches){const d=this._touches[c.identifier];d&&(d.kind==="move"&&(this._moveDX=0,this._moveDY=0,this.input.analogMove=null,this.input._touchSprint=!1,this._renderKnob()),delete this._touches[c.identifier])}};document.addEventListener("touchmove",a,{passive:!1}),document.addEventListener("touchend",l,{passive:!1}),document.addEventListener("touchcancel",l,{passive:!1});const h=(u,c,d)=>{if(!u)return;u.addEventListener("touchstart",g=>{g.preventDefault(),g.stopPropagation(),u.classList.add("pressed"),c()},{passive:!1});const f=g=>{u.classList.remove("pressed"),d&&d()};u.addEventListener("touchend",f,{passive:!1}),u.addEventListener("touchcancel",f,{passive:!1})};h(n,()=>{this.input.mouse.leftDown=!0},()=>{this.input.mouse.leftDown=!1}),h(i,()=>{this.input.keys.space||(this.input._jumpRequested=!0),this.input.keys.space=!0},()=>{this.input.keys.space=!1}),s&&s.addEventListener("touchstart",u=>{u.preventDefault(),u.stopPropagation(),s.classList.add("pressed"),this.onSandBurst(),setTimeout(()=>s.classList.remove("pressed"),120)},{passive:!1}),r&&r.addEventListener("touchstart",u=>{u.preventDefault(),u.stopPropagation(),this.onPause()},{passive:!1})}_anyKind(e){for(const t in this._touches)if(this._touches[t].kind===e)return!0;return!1}_updateMoveFromTouch(e){const t=this._touches[e.identifier];if(!t)return;let n=e.clientX-t.baseX,i=e.clientY-t.baseY;const s=Math.sqrt(n*n+i*i);s>this._maxMoveRadius&&(n=n/s*this._maxMoveRadius,i=i/s*this._maxMoveRadius),this._moveDX=n,this._moveDY=i;const r=n/this._maxMoveRadius,a=i/this._maxMoveRadius,l=Math.min(1,s/this._maxMoveRadius);l<Wv?(this.input.analogMove=null,this.input._touchSprint=!1):(this.input.analogMove={x:r,z:a,magnitude:l},this.input._touchSprint=l>Xv),this._renderKnob()}_renderKnob(){const e=this._el("move-stick-knob");e&&(e.style.transform=`translate(calc(-50% + ${this._moveDX}px), calc(-50% + ${this._moveDY}px))`)}}const Vr=typeof window<"u"?new URLSearchParams(window.location.search):null,Yv=Vr&&Vr.get("touch")==="1",jv=typeof window<"u"&&window.matchMedia?window.matchMedia("(pointer: coarse)").matches:!1,vn=Yv||jv||typeof window<"u"&&("ontouchstart"in window||navigator.maxTouchPoints&&navigator.maxTouchPoints>0);vn&&(document.documentElement.classList.add("touch-mode"),document.body&&document.body.classList.add("touch-mode"));let Ye,Nn,ti,Vt,ae,He,Jt,ft,mi,_t,_n,br,Er,Wo=0,Ar=0;const rh=document.getElementById("fps-counter");let Cr=0,yt="MENU";document.addEventListener("DOMContentLoaded",()=>{const o=document.getElementById("game-canvas");if(!o){console.error("Canvas not found");return}const e=zv();vn&&document.body&&document.body.classList.add("touch-mode");const t=()=>{if(!vn)return;const Z=window.innerHeight>window.innerWidth;document.body.classList.toggle("portrait",Z)};t(),window.addEventListener("resize",t),window.addEventListener("orientationchange",t),Ye=new O_(o),Nn=new k_,He=new Tv,ti=new z_(Ye.camera,Nn),Vt=new Sv(Ye.scene),Vt.sand&&ti.addCollisionObject(Vt.sand),ae=new wv(Ye.scene,Vt,Nn,ti),Jt=new Nv(Ye.camera,He),ae.dialogue=Jt,ae.audio=He;let n=!1;if(ae._onDeath=()=>{console.log("💀 Crab died — starting death sequence"),te=!1,yt="DEAD";const Z=["belong-to-the-deep.mp3","sink-without-fear.mp3"],$=Z[Math.floor(Math.random()*Z.length)];(()=>{const O=Jt&&Jt.audioBuffers?Jt.audioBuffers[$]:null;O&&O instanceof AudioBuffer?He.playDeathDialogueWithEcho(O):O&&He&&He.ctx&&He.ctx.decodeAudioData(O.slice(0)).then(z=>{He.playDeathDialogueWithEcho(z)}).catch(()=>{})})();const fe=document.getElementById("death-overlay");fe&&fe.classList.add("dying");const b={wave:_t.currentWave||0,kills:_t.totalKills||0,coins:ae.totalCoinsCollected||0},y=Gv(b);setTimeout(()=>{if(n)return;n=!0;try{document.exitPointerLock()}catch{}const O=document.getElementById("death-wave"),z=document.getElementById("death-kills"),W=document.getElementById("death-coins");O&&(O.textContent=b.wave),z&&(z.textContent=b.kills),W&&(W.textContent=b.coins);const Y=document.querySelector("#death-window .death-subtitle");Y&&window.playerName&&(Y.textContent=`${window.playerName}, the abyss has claimed you`);const ve=document.getElementById("death-window");ve&&ve.classList.add("visible"),y.then(()=>p("death-leaderboard",3))},7e3)},ft=new bv(Ye.scene,He),mi=new Pv(Ye.scene),_t=new Dv(Ye.scene,Vt,He,Jt),_t.crab=ae,window.enemyManager=_t,window.crab=ae,window.world=Vt,window.audio=He,window.weapons=ft,Vr){const Z=parseInt(Vr.get("startWave"),10);Number.isFinite(Z)&&Z>1&&(_t.currentWave=Z-1,Z>=6&&_t._lazyLoadCthulhu(),Z>=4&&_t._lazyLoadBoss())}_n=new Iv(Ye.scene,Vt,He),_n.dialogue=Jt,_n.crab=ae,br=new Bv(Ye.scene),Er=new Fv;const i=document.getElementById("main-menu"),s=document.getElementById("how-to-play"),r=document.getElementById("ui-layer"),a="cota_playerName",l=document.getElementById("name-entry-overlay"),h=document.getElementById("player-name-input"),u=document.getElementById("btn-name-confirm"),c=document.getElementById("player-name-badge"),d=Z=>{const $=String(Z||"").trim().slice(0,20);if(!$)return!1;window.playerName=$;try{sessionStorage.setItem(a,$)}catch{}return c&&(c.textContent=`Playing as ${$}`),!0},f=()=>{if(!d(h.value)){h.focus();return}l.classList.add("hidden"),i.classList.remove("hidden")};let g="";try{g=sessionStorage.getItem(a)||""}catch{}if(e&&e.username?(d(e.username),l.classList.add("hidden"),i.classList.remove("hidden")):g?(d(g),l.classList.add("hidden"),i.classList.remove("hidden")):setTimeout(()=>h&&h.focus(),100),u){let Z=!1;const $=_e=>{Z||(Z=!0,_e&&_e.preventDefault&&_e.preventDefault(),f(),setTimeout(()=>{Z=!1},400))};u.addEventListener("pointerdown",$),u.addEventListener("click",$)}h&&h.addEventListener("keydown",Z=>{Z.key==="Enter"&&(Z.preventDefault(),f())});const _=Z=>String(Z).replace(/[&<>"']/g,$=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[$]);function m(Z,$,_e){return`
      <div class="leaderboard-row${_e?" you":""}">
        <div class="lb-rank">${Z}</div>
        <div class="lb-name">${_($.name||"Anonymous")}</div>
        <div class="lb-num">${$.wave||0}</div>
        <div class="lb-num">${$.kills||0}</div>
        <div class="lb-num">${$.coins||0}</div>
      </div>
    `}async function p(Z,$=10){const _e=document.getElementById(Z);if(!_e)return;_e.innerHTML='<div class="leaderboard-title">Loading…</div>';const fe=await Hv($),b=window.playerName,y=fe.some(ue=>b&&ue.name===b);let O=null,z=null;if(b&&!y){const ue=await Vv();ue&&(O=ue.entry,z=ue.rank)}const W=`<div class="leaderboard-title">Top ${$} Survivors</div>`;if(!fe.length){_e.innerHTML=`${W}<div class="leaderboard-empty">No runs yet — be the first.</div>`;return}const Y=`
      <div class="leaderboard-row header">
        <div class="lb-rank">#</div><div>Name</div>
        <div class="lb-num">Wave</div><div class="lb-num">Kills</div><div class="lb-num">Coins</div>
      </div>
    `,ve=fe.map((ue,qe)=>{const ie=b&&ue.name===b;return m(qe+1,ue,ie)}).join("");let ee="";O&&z&&(ee=`
        <div class="leaderboard-divider">⋯ Your rank ⋯</div>
        ${m(z,O,!0)}
      `),_e.innerHTML=`${W}${Y}${ve}${ee}`}const x=document.getElementById("btn-play"),M=document.getElementById("btn-retry"),v=document.getElementById("btn-how-to-play"),P=document.getElementById("btn-back"),C=document.getElementById("btn-death-retry");vn&&new qv(Nn,{onPause:()=>{yt==="PLAYING"&&(te=!1,Nn.mouse.leftDown=!1,yt="MENU",i.classList.remove("hidden"),r.style.display="none",x.textContent="RESUME GAME",M&&(M.style.display="inline-block"))},onSandBurst:()=>{yt==="PLAYING"&&ae&&ae.triggerSandBurst&&ae.triggerSandBurst(_t,He)},lookSensitivity:1});const E=()=>{const Z=document.getElementById("death-window");Z&&Z.classList.remove("visible");const $=document.getElementById("death-overlay");$&&($.classList.remove("dying"),$.style.opacity="0");const _e=document.getElementById("low-health-overlay");_e&&(_e.style.opacity="0");const fe=document.getElementById("damage-overlay");if(fe&&(fe.style.opacity="0"),i.classList.add("hidden"),ae.reset(),_t.reset(),_n.reset(),mi.reset(),br.reset(),Er.reset(),ft.setWeapon&&ft.setWeapon("pistol",1),He.stopWaveDrums&&He.stopWaveDrums(),Cr=0,He&&He.ctx){const b=He.ctx.currentTime,y=(O,z)=>{if(O)try{O.gain.cancelScheduledValues(b),O.gain.setValueAtTime(O.gain.value,b),O.gain.linearRampToValueAtTime(z,b+.4)}catch{}};y(He.oceanGain,.35),y(He.windGain,.08),y(He.scuttleGain,1)}n=!1,r.style.display="flex",yt="PLAYING",vn||o.requestPointerLock()};let L=!1;const w=Z=>{L||(L=!0,Z&&Z.preventDefault&&Z.preventDefault(),E(),setTimeout(()=>{L=!1},600))};M&&(M.addEventListener("pointerdown",w),M.addEventListener("click",w)),C&&(C.addEventListener("pointerdown",w),C.addEventListener("click",w));const S=()=>{const Z=i&&!i.classList.contains("hidden")||s&&!s.classList.contains("hidden")||document.getElementById("leaderboard-screen")&&!document.getElementById("leaderboard-screen").classList.contains("hidden")||document.getElementById("credits-screen")&&!document.getElementById("credits-screen").classList.contains("hidden")||document.getElementById("death-window")&&document.getElementById("death-window").classList.contains("visible")||document.getElementById("name-entry-overlay")&&!document.getElementById("name-entry-overlay").classList.contains("hidden");document.body.classList.toggle("in-modal",!!Z)};S();const R=[i,s,document.getElementById("leaderboard-screen"),document.getElementById("credits-screen"),document.getElementById("death-window"),document.getElementById("name-entry-overlay")].filter(Boolean),D=new MutationObserver(S);for(const Z of R)D.observe(Z,{attributes:!0,attributeFilter:["class"]});const I=()=>{i.classList.add("hidden"),r.style.display="flex",setTimeout(()=>{yt="PLAYING",ae&&ae.loaded&&ae.dialogue&&!ae._hasSpokenIntro&&(ae._hasSpokenIntro=!0,setTimeout(()=>{ae.dialogue.speak(ae.model,"Time to clean up this beach.","hero",4)},500))},50)};let k=!1;const X=Z=>{if(!k){k=!0,Z&&Z.preventDefault&&Z.preventDefault();try{He.init&&He.init()}catch($){console.warn("audio.init failed",$)}try{const $=He.resume&&He.resume();$&&typeof $.catch=="function"&&$.catch(()=>{})}catch($){console.warn("audio.resume failed",$)}if(vn)try{I()}catch($){console.error("startMobileSession failed",$),i.classList.add("hidden"),r.style.display="flex",yt="PLAYING"}else try{o.requestPointerLock()}catch{}setTimeout(()=>{k=!1},600)}};x.addEventListener("pointerdown",X),x.addEventListener("click",X),v.addEventListener("click",()=>{i.classList.add("hidden"),s.classList.remove("hidden")}),P.addEventListener("click",()=>{s.classList.add("hidden"),i.classList.remove("hidden")});const q=document.getElementById("leaderboard-screen"),J=document.getElementById("btn-leaderboard"),V=document.getElementById("btn-leaderboard-back");J&&J.addEventListener("click",()=>{i.classList.add("hidden"),q.classList.remove("hidden"),p("full-leaderboard",50)}),V&&V.addEventListener("click",()=>{q.classList.add("hidden"),i.classList.remove("hidden")});const ne=document.getElementById("credits-screen"),he=document.getElementById("btn-credits-link"),we=document.getElementById("btn-credits-back");he&&he.addEventListener("click",()=>{i.classList.add("hidden"),ne&&ne.classList.remove("hidden")}),we&&we.addEventListener("click",()=>{ne&&ne.classList.add("hidden"),i.classList.remove("hidden")});const Be=document.querySelectorAll(".htp-tab"),Ke=document.querySelectorAll(".htp-page"),K=document.querySelectorAll(".htp-dot");Be.forEach(Z=>{Z.addEventListener("click",()=>{const $=Z.dataset.tab;Be.forEach(_e=>_e.classList.remove("active")),Ke.forEach(_e=>_e.classList.remove("active")),K.forEach(_e=>_e.classList.remove("active")),Z.classList.add("active"),document.getElementById("htp-"+$).classList.add("active"),document.querySelector(`.htp-dot[data-tab="${$}"]`).classList.add("active")})}),document.addEventListener("pointerlockchange",()=>{if(document.pointerLockElement===o)i.classList.add("hidden"),r.style.display="flex",setTimeout(()=>{yt="PLAYING",ae&&ae.loaded&&ae.dialogue&&!ae._hasSpokenIntro&&(ae._hasSpokenIntro=!0,setTimeout(()=>{ae.dialogue.speak(ae.model,"Time to clean up this beach.","hero",4)},500))},50);else{if(te=!1,ae&&ae.isDead||yt==="UPGRADING")return;yt="MENU",i.classList.remove("hidden"),r.style.display="none",x.textContent="RESUME GAME",M&&(M.style.display="inline-block")}}),document.addEventListener("pointerlockerror",()=>{console.warn("Pointer lock failed. Please wait a second and try again."),x.textContent="TRY AGAIN"}),document.addEventListener("contextmenu",Z=>{yt==="PLAYING"&&Z.preventDefault()});let te=!1,Se=!1;document.addEventListener("mousedown",Z=>{yt==="PLAYING"&&(Z.button===0?(te=!0,ft.stats.isCharge&&ft.startCharge()):Z.button===2&&ae.triggerSandBurst(_t,He))}),document.addEventListener("mouseup",Z=>{if(Z.button===0){if(te&&ft.stats.isCharge&&ae.loaded){const $=ft.releaseCharge(ae.position,ti.yaw,ae.currentAmmo);if($){ae.currentAmmo-=$.ammoCost;for(const _e of $.projectiles)mi.spawn(_e.position,_e.velocity,_e.damage,_e.tier,_e.options)}else ae.currentAmmo<ft.stats.ammoPerShot&&Jt&&ae.model&&(!ae._lastLowWaterVoice||Date.now()-ae._lastLowWaterVoice>5e3)&&(ae._lastLowWaterVoice=Date.now(),Jt.speak(ae.model,"Need more water... hold on.","hero",3))}te=!1}});const oe={top:new le(26333),horiz:new le(8900331),bottom:new le(16774614),sun:new le(16770229),fogColor:new le(8900331),fogDensity:.0035,sunLightColor:new le(16774373),sunLightIntensity:3,hemiSky:new le(8900331),hemiGround:new le(12759680),hemiIntensity:1},Te={top:new le(660789),horiz:new le(3822200),bottom:new le(1713472),sun:new le(13162751),fogColor:new le(2766936),fogDensity:.005,sunLightColor:new le(11585791),sunLightIntensity:1.4,hemiSky:new le(2766936),hemiGround:new le(1710632),hemiIntensity:.55};let Me=0,Ne=0;const tt=document.getElementById("lightning-overlay"),Ue=(Z,$,_e,fe)=>{Z.r=$.r+(_e.r-$.r)*fe,Z.g=$.g+(_e.g-$.g)*fe,Z.b=$.b+(_e.b-$.b)*fe},ct=(Z,$,_e)=>Z+($-Z)*_e;function F(Z,$){const _e=_t&&_t._cthulhuAlive,fe=_e?1:0;if(Me<fe?Me=Math.min(fe,Me+Z*.5):Me>fe&&(Me=Math.max(fe,Me-Z*.4)),Ye.skyUniforms&&(Ue(Ye.skyUniforms.topColor.value,oe.top,Te.top,Me),Ue(Ye.skyUniforms.horizonColor.value,oe.horiz,Te.horiz,Me),Ue(Ye.skyUniforms.bottomColor.value,oe.bottom,Te.bottom,Me),Ue(Ye.skyUniforms.sunColor.value,oe.sun,Te.sun,Me)),Ye.scene.fog&&(Ue(Ye.scene.fog.color,oe.fogColor,Te.fogColor,Me),Ye.scene.fog.density=ct(oe.fogDensity,Te.fogDensity,Me)),Ye.scene.background&&Ye.scene.background.isColor&&Ue(Ye.scene.background,oe.fogColor,Te.fogColor,Me),Ye.sunLight&&(Ue(Ye.sunLight.color,oe.sunLightColor,Te.sunLightColor,Me),Ye.sunLight.intensity=ct(oe.sunLightIntensity,Te.sunLightIntensity,Me)),Ye.hemiLight&&(Ue(Ye.hemiLight.color,oe.hemiSky,Te.hemiSky,Me),Ue(Ye.hemiLight.groundColor,oe.hemiGround,Te.hemiGround,Me),Ye.hemiLight.intensity=ct(oe.hemiIntensity,Te.hemiIntensity,Me)),Me>.4&&_e){if(Ne===0&&(Ne=$+.8+Math.random()*1.2),$>=Ne){const b=y=>setTimeout(()=>{tt&&(tt.classList.add("flash"),setTimeout(()=>tt.classList.remove("flash"),80+Math.random()*70))},y);b(0),b(90),b(180),b(280),Math.random()<.7&&b(400),Math.random()<.4&&b(520),setTimeout(()=>{He&&He.playThunderSound&&He.playThunderSound()},120+Math.random()*280),Math.random()<.45&&setTimeout(()=>{He&&He.playThunderSound&&He.playThunderSound()},700+Math.random()*600),Ne=$+1.2+Math.random()*2.6}}else _e||(Ne=0,tt&&tt.classList.remove("flash"))}Ye.add({update:(Z,$)=>{if(ft.stats.isCharge&&(ft._isCharging||ft._isFiringHose)?(ae.walkSpeed=10,ae.runSpeed=10):(ae.walkSpeed=25,ae.runSpeed=45),F(Z,$),He.updateListener(Ye.camera),ae.update(Z,$,yt==="PLAYING"),Vt.update(Z,$),Vt.ocean&&Vt.ocean.material.uniforms.cameraPos&&Vt.ocean.material.uniforms.cameraPos.value.copy(Ye.camera.position),yt!=="PLAYING")return;ae.loaded&&ae.model&&ft.update(Z,ae.position,ti.yaw);const _e=vn?Nn.mouse.leftDown&&ae.loaded&&yt==="PLAYING":te&&document.pointerLockElement&&ae.loaded;if(vn&&ft&&ft.stats&&ft.stats.isCharge){if(_e&&!Se)ft.startCharge();else if(!_e&&Se&&ae.loaded){const z=ft.releaseCharge(ae.position,ti.yaw,ae.currentAmmo);if(z){ae.currentAmmo-=z.ammoCost;for(const W of z.projectiles)mi.spawn(W.position,W.velocity,W.damage,W.tier,W.options)}}}if(Se=_e,_e){const z=ti.yaw,W=ft.tryFire(ae.position,z,ae.currentAmmo);if(W){ae.currentAmmo-=W.ammoCost;for(const Y of W.projectiles)mi.spawn(Y.position,Y.velocity,Y.damage,Y.tier,Y.options)}else ae.currentAmmo<ft.stats.ammoPerShot&&!ft.stats.isCharge&&Jt&&ae.model&&(!ae._lastLowWaterVoice||Date.now()-ae._lastLowWaterVoice>5e3)&&(ae._lastLowWaterVoice=Date.now(),Jt.speak(ae.model,"Need more water... hold on.","hero",3))}if(ae.loaded&&ae.model){const z=ft.getHoseProjectiles(Z,ti.yaw);if(z&&z.projectiles&&z.projectiles.length>0)for(const W of z.projectiles)mi.spawn(W.position,W.velocity,W.damage,W.tier,W.options)}const fe=mi.update(Z,_t.enemies);for(const z of fe)if(_t.damageEnemy(z.enemy,z.damage),yt==="PLAYING"){const W=z.position.clone();W.project(Ye.camera);const Y=(W.x*.5+.5)*window.innerWidth,ve=(W.y*-.5+.5)*window.innerHeight;if(W.z<1){const ee=document.createElement("div");ee.textContent=Math.round(z.damage),ee.style.position="fixed",ee.style.left=`${Y}px`,ee.style.top=`${ve}px`,ee.style.pointerEvents="none",ee.style.fontWeight="900",ee.style.zIndex="20",ee.style.transform="translate(-50%, -50%)",ee.style.transition="all 0.5s ease-out",z.isCrit?(ee.style.fontSize="28px",ee.style.color="#ff3300",ee.style.textShadow="0 0 10px #ffaa00, 2px 2px 0px #000",ee.textContent=`${Math.round(z.damage)}!`):(ee.style.fontSize="18px",ee.style.color="#ffffff",ee.style.textShadow="1px 1px 0px #000"),document.body.appendChild(ee),setTimeout(()=>{ee.style.top=`${ve-50}px`,ee.style.opacity="0",setTimeout(()=>ee.remove(),500)},10)}}const b=br.update(Z,Vt,ae);for(const z of b)ae.takeDamage(z.damage);const y=_t.update(Z,$,ae.position,Ye.camera,_n,yt==="PLAYING",br);if(_t.currentWave!==Cr&&(_t.currentWave>Cr&&He.playWaveDrums&&He.playWaveDrums(),Cr=_t.currentWave),y.waveJustCompleted&&He.stopWaveDrums&&He.stopWaveDrums(),y.damageToPlayer>0&&ae.takeDamage(y.damageToPlayer),Jt.update(Z),_n.update(Z,$,_t),ae.coins>0&&ae.position.distanceTo(_n.position)<_n.depositRadius){const z=_n.tryInteract(ae.coins);if(z>0){ae.coins-=z;const W=document.getElementById("coin-count");W&&(W.textContent=ae.coins)}}if(y.coinsCollected>0&&ae.addCoins(y.coinsCollected),y.healthCollected>0&&(ae.health=Math.min(ae.maxHealth,ae.health+y.healthCollected)),y.waveJustCompleted&&Er.onWaveComplete()&&(yt="UPGRADING",vn||document.exitPointerLock(),te=!1,Er.show(ae,ft,_n).then(()=>{if(yt="PLAYING",!vn){const z=document.getElementById("game-canvas");z&&z.requestPointerLock()}})),ae.loaded&&ae.model){const z=ae.position,W=Vt.getTerrainHeight(z.x,z.z),Y=Nn.getMovementInput();Math.abs(z.y-W)<2&&Y.magnitude>0&&Vt.stampFootprint(z)}const O=Nn.getMovementInput();He.update(Z,O.magnitude>0,Nn.isSprinting)}}),window.addEventListener("resize",()=>Ye.resize());let Nt=performance.now();function Ve(Z){requestAnimationFrame(Ve);const $=Math.min((Z-Nt)/1e3,.1);Nt=Z,Ye.render($),Wo++,Ar+=$,Ar>=1&&(rh&&(rh.textContent=`${Math.round(Wo/Ar)} FPS`),Wo=0,Ar=0)}requestAnimationFrame(Ve),console.log("🦀 Call Of The Abyss: A Crab's Last Stand — running")});
