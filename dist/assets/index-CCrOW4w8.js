(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function t(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(i){if(i.ep)return;i.ep=!0;const s=t(i);fetch(i.href,s)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Ua="170",ru=0,_l=1,ou=2,Jc=1,Qc=2,In=3,On=0,Nt=1,pt=2,Fn=0,Qn=1,Lr=2,vl=3,xl=4,au=5,pi=100,lu=101,cu=102,hu=103,uu=104,du=200,fu=201,pu=202,mu=203,ko=204,Go=205,gu=206,_u=207,vu=208,xu=209,yu=210,Mu=211,Su=212,Tu=213,bu=214,Ho=0,Vo=1,Wo=2,ji=3,Xo=4,qo=5,Yo=6,jo=7,eh=0,wu=1,Eu=2,ei=0,th=1,nh=2,ih=3,Fa=4,Au=5,sh=6,rh=7,yl="attached",Cu="detached",oh=300,Ki=301,$i=302,Ko=303,$o=304,Or=306,Zi=1e3,Zn=1001,Ir=1002,Ut=1003,ah=1004,Es=1005,Wt=1006,br=1007,Nn=1008,zn=1009,lh=1010,ch=1011,Us=1012,Ba=1013,gi=1014,ln=1015,gn=1016,Oa=1017,za=1018,Ji=1020,hh=35902,uh=1021,dh=1022,Zt=1023,fh=1024,ph=1025,Wi=1026,Qi=1027,ka=1028,Ga=1029,mh=1030,Ha=1031,Va=1033,wr=33776,Er=33777,Ar=33778,Cr=33779,Zo=35840,Jo=35841,Qo=35842,ea=35843,ta=36196,na=37492,ia=37496,sa=37808,ra=37809,oa=37810,aa=37811,la=37812,ca=37813,ha=37814,ua=37815,da=37816,fa=37817,pa=37818,ma=37819,ga=37820,_a=37821,Rr=36492,va=36494,xa=36495,gh=36283,ya=36284,Ma=36285,Sa=36286,Ru=2200,Pu=2201,Lu=2202,Fs=2300,Bs=2301,qr=2302,Gi=2400,Hi=2401,Dr=2402,Wa=2500,Iu=2501,Du=0,_h=1,Ta=2,Nu=3200,Uu=3201,vh=0,Fu=1,$n="",bt="srgb",Ft="srgb-linear",zr="linear",Je="srgb",yi=7680,Ml=519,Bu=512,Ou=513,zu=514,xh=515,ku=516,Gu=517,Hu=518,Vu=519,ba=35044,Sl="300 es",Un=2e3,Nr=2001;class vi{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const i=this._listeners[e];if(i!==void 0){const s=i.indexOf(t);s!==-1&&i.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let s=0,o=i.length;s<o;s++)i[s].call(this,e);e.target=null}}}const Et=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Tl=1234567;const Rs=Math.PI/180,es=180/Math.PI;function cn(){const r=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Et[r&255]+Et[r>>8&255]+Et[r>>16&255]+Et[r>>24&255]+"-"+Et[e&255]+Et[e>>8&255]+"-"+Et[e>>16&15|64]+Et[e>>24&255]+"-"+Et[t&63|128]+Et[t>>8&255]+"-"+Et[t>>16&255]+Et[t>>24&255]+Et[n&255]+Et[n>>8&255]+Et[n>>16&255]+Et[n>>24&255]).toLowerCase()}function gt(r,e,t){return Math.max(e,Math.min(t,r))}function Xa(r,e){return(r%e+e)%e}function Wu(r,e,t,n,i){return n+(r-e)*(i-n)/(t-e)}function Xu(r,e,t){return r!==e?(t-r)/(e-r):0}function Ps(r,e,t){return(1-t)*r+t*e}function qu(r,e,t,n){return Ps(r,e,1-Math.exp(-t*n))}function Yu(r,e=1){return e-Math.abs(Xa(r,e*2)-e)}function ju(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*(3-2*r))}function Ku(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*r*(r*(r*6-15)+10))}function $u(r,e){return r+Math.floor(Math.random()*(e-r+1))}function Zu(r,e){return r+Math.random()*(e-r)}function Ju(r){return r*(.5-Math.random())}function Qu(r){r!==void 0&&(Tl=r);let e=Tl+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function ed(r){return r*Rs}function td(r){return r*es}function nd(r){return(r&r-1)===0&&r!==0}function id(r){return Math.pow(2,Math.ceil(Math.log(r)/Math.LN2))}function sd(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function rd(r,e,t,n,i){const s=Math.cos,o=Math.sin,a=s(t/2),l=o(t/2),h=s((e+n)/2),u=o((e+n)/2),c=s((e-n)/2),d=o((e-n)/2),f=s((n-e)/2),g=o((n-e)/2);switch(i){case"XYX":r.set(a*u,l*c,l*d,a*h);break;case"YZY":r.set(l*d,a*u,l*c,a*h);break;case"ZXZ":r.set(l*c,l*d,a*u,a*h);break;case"XZX":r.set(a*u,l*g,l*f,a*h);break;case"YXY":r.set(l*f,a*u,l*g,a*h);break;case"ZYZ":r.set(l*g,l*f,a*u,a*h);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function an(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function Qe(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}const od={DEG2RAD:Rs,RAD2DEG:es,generateUUID:cn,clamp:gt,euclideanModulo:Xa,mapLinear:Wu,inverseLerp:Xu,lerp:Ps,damp:qu,pingpong:Yu,smoothstep:ju,smootherstep:Ku,randInt:$u,randFloat:Zu,randFloatSpread:Ju,seededRandom:Qu,degToRad:ed,radToDeg:td,isPowerOfTwo:nd,ceilPowerOfTwo:id,floorPowerOfTwo:sd,setQuaternionFromProperEuler:rd,normalize:Qe,denormalize:an};class Q{constructor(e=0,t=0){Q.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(gt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*n-o*i+e.x,this.y=s*i+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ne{constructor(e,t,n,i,s,o,a,l,h){Ne.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,o,a,l,h)}set(e,t,n,i,s,o,a,l,h){const u=this.elements;return u[0]=e,u[1]=i,u[2]=a,u[3]=t,u[4]=s,u[5]=l,u[6]=n,u[7]=o,u[8]=h,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,o=n[0],a=n[3],l=n[6],h=n[1],u=n[4],c=n[7],d=n[2],f=n[5],g=n[8],_=i[0],m=i[3],p=i[6],v=i[1],M=i[4],x=i[7],C=i[2],w=i[5],A=i[8];return s[0]=o*_+a*v+l*C,s[3]=o*m+a*M+l*w,s[6]=o*p+a*x+l*A,s[1]=h*_+u*v+c*C,s[4]=h*m+u*M+c*w,s[7]=h*p+u*x+c*A,s[2]=d*_+f*v+g*C,s[5]=d*m+f*M+g*w,s[8]=d*p+f*x+g*A,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],o=e[4],a=e[5],l=e[6],h=e[7],u=e[8];return t*o*u-t*a*h-n*s*u+n*a*l+i*s*h-i*o*l}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],o=e[4],a=e[5],l=e[6],h=e[7],u=e[8],c=u*o-a*h,d=a*l-u*s,f=h*s-o*l,g=t*c+n*d+i*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return e[0]=c*_,e[1]=(i*h-u*n)*_,e[2]=(a*n-i*o)*_,e[3]=d*_,e[4]=(u*t-i*l)*_,e[5]=(i*s-a*t)*_,e[6]=f*_,e[7]=(n*l-h*t)*_,e[8]=(o*t-n*s)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,s,o,a){const l=Math.cos(s),h=Math.sin(s);return this.set(n*l,n*h,-n*(l*o+h*a)+o+e,-i*h,i*l,-i*(-h*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(Yr.makeScale(e,t)),this}rotate(e){return this.premultiply(Yr.makeRotation(-e)),this}translate(e,t){return this.premultiply(Yr.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Yr=new Ne;function yh(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}function Os(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function ad(){const r=Os("canvas");return r.style.display="block",r}const bl={};function As(r){r in bl||(bl[r]=!0,console.warn(r))}function ld(r,e,t){return new Promise(function(n,i){function s(){switch(r.clientWaitSync(e,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:i();break;case r.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:n()}}setTimeout(s,t)})}function cd(r){const e=r.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function hd(r){const e=r.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const ke={enabled:!0,workingColorSpace:Ft,spaces:{},convert:function(r,e,t){return this.enabled===!1||e===t||!e||!t||(this.spaces[e].transfer===Je&&(r.r=Bn(r.r),r.g=Bn(r.g),r.b=Bn(r.b)),this.spaces[e].primaries!==this.spaces[t].primaries&&(r.applyMatrix3(this.spaces[e].toXYZ),r.applyMatrix3(this.spaces[t].fromXYZ)),this.spaces[t].transfer===Je&&(r.r=Xi(r.r),r.g=Xi(r.g),r.b=Xi(r.b))),r},fromWorkingColorSpace:function(r,e){return this.convert(r,this.workingColorSpace,e)},toWorkingColorSpace:function(r,e){return this.convert(r,e,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===$n?zr:this.spaces[r].transfer},getLuminanceCoefficients:function(r,e=this.workingColorSpace){return r.fromArray(this.spaces[e].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,e,t){return r.copy(this.spaces[e].toXYZ).multiply(this.spaces[t].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace}};function Bn(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function Xi(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}const wl=[.64,.33,.3,.6,.15,.06],El=[.2126,.7152,.0722],Al=[.3127,.329],Cl=new Ne().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Rl=new Ne().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);ke.define({[Ft]:{primaries:wl,whitePoint:Al,transfer:zr,toXYZ:Cl,fromXYZ:Rl,luminanceCoefficients:El,workingColorSpaceConfig:{unpackColorSpace:bt},outputColorSpaceConfig:{drawingBufferColorSpace:bt}},[bt]:{primaries:wl,whitePoint:Al,transfer:Je,toXYZ:Cl,fromXYZ:Rl,luminanceCoefficients:El,outputColorSpaceConfig:{drawingBufferColorSpace:bt}}});let Mi;class ud{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Mi===void 0&&(Mi=Os("canvas")),Mi.width=e.width,Mi.height=e.height;const n=Mi.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=Mi}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Os("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),s=i.data;for(let o=0;o<s.length;o++)s[o]=Bn(s[o]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Bn(t[n]/255)*255):t[n]=Bn(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let dd=0;class Mh{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:dd++}),this.uuid=cn(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?s.push(jr(i[o].image)):s.push(jr(i[o]))}else s=jr(i);n.url=s}return t||(e.images[this.uuid]=n),n}}function jr(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?ud.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let fd=0;class xt extends vi{constructor(e=xt.DEFAULT_IMAGE,t=xt.DEFAULT_MAPPING,n=Zn,i=Zn,s=Wt,o=Nn,a=Zt,l=zn,h=xt.DEFAULT_ANISOTROPY,u=$n){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:fd++}),this.uuid=cn(),this.name="",this.source=new Mh(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=o,this.anisotropy=h,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Q(0,0),this.repeat=new Q(1,1),this.center=new Q(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ne,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==oh)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Zi:e.x=e.x-Math.floor(e.x);break;case Zn:e.x=e.x<0?0:1;break;case Ir:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Zi:e.y=e.y-Math.floor(e.y);break;case Zn:e.y=e.y<0?0:1;break;case Ir:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}xt.DEFAULT_IMAGE=null;xt.DEFAULT_MAPPING=oh;xt.DEFAULT_ANISOTROPY=1;class Ye{constructor(e=0,t=0,n=0,i=1){Ye.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*i+o[12]*s,this.y=o[1]*t+o[5]*n+o[9]*i+o[13]*s,this.z=o[2]*t+o[6]*n+o[10]*i+o[14]*s,this.w=o[3]*t+o[7]*n+o[11]*i+o[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,s;const l=e.elements,h=l[0],u=l[4],c=l[8],d=l[1],f=l[5],g=l[9],_=l[2],m=l[6],p=l[10];if(Math.abs(u-d)<.01&&Math.abs(c-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+d)<.1&&Math.abs(c+_)<.1&&Math.abs(g+m)<.1&&Math.abs(h+f+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const M=(h+1)/2,x=(f+1)/2,C=(p+1)/2,w=(u+d)/4,A=(c+_)/4,L=(g+m)/4;return M>x&&M>C?M<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(M),i=w/n,s=A/n):x>C?x<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(x),n=w/i,s=L/i):C<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(C),n=A/s,i=L/s),this.set(n,i,s,t),this}let v=Math.sqrt((m-g)*(m-g)+(c-_)*(c-_)+(d-u)*(d-u));return Math.abs(v)<.001&&(v=1),this.x=(m-g)/v,this.y=(c-_)/v,this.z=(d-u)/v,this.w=Math.acos((h+f+p-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class pd extends vi{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Ye(0,0,e,t),this.scissorTest=!1,this.viewport=new Ye(0,0,e,t);const i={width:e,height:t,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Wt,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const s=new xt(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);s.flipY=!1,s.generateMipmaps=n.generateMipmaps,s.internalFormat=n.internalFormat,this.textures=[];const o=n.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let i=0,s=this.textures.length;i<s;i++)this.textures[i].image.width=e,this.textures[i].image.height=t,this.textures[i].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,i=e.textures.length;n<i;n++)this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Mh(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Jt extends pd{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class Sh extends xt{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Ut,this.minFilter=Ut,this.wrapR=Zn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class md extends xt{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Ut,this.minFilter=Ut,this.wrapR=Zn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Qt{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,s,o,a){let l=n[i+0],h=n[i+1],u=n[i+2],c=n[i+3];const d=s[o+0],f=s[o+1],g=s[o+2],_=s[o+3];if(a===0){e[t+0]=l,e[t+1]=h,e[t+2]=u,e[t+3]=c;return}if(a===1){e[t+0]=d,e[t+1]=f,e[t+2]=g,e[t+3]=_;return}if(c!==_||l!==d||h!==f||u!==g){let m=1-a;const p=l*d+h*f+u*g+c*_,v=p>=0?1:-1,M=1-p*p;if(M>Number.EPSILON){const C=Math.sqrt(M),w=Math.atan2(C,p*v);m=Math.sin(m*w)/C,a=Math.sin(a*w)/C}const x=a*v;if(l=l*m+d*x,h=h*m+f*x,u=u*m+g*x,c=c*m+_*x,m===1-a){const C=1/Math.sqrt(l*l+h*h+u*u+c*c);l*=C,h*=C,u*=C,c*=C}}e[t]=l,e[t+1]=h,e[t+2]=u,e[t+3]=c}static multiplyQuaternionsFlat(e,t,n,i,s,o){const a=n[i],l=n[i+1],h=n[i+2],u=n[i+3],c=s[o],d=s[o+1],f=s[o+2],g=s[o+3];return e[t]=a*g+u*c+l*f-h*d,e[t+1]=l*g+u*d+h*c-a*f,e[t+2]=h*g+u*f+a*d-l*c,e[t+3]=u*g-a*c-l*d-h*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,i=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,h=a(n/2),u=a(i/2),c=a(s/2),d=l(n/2),f=l(i/2),g=l(s/2);switch(o){case"XYZ":this._x=d*u*c+h*f*g,this._y=h*f*c-d*u*g,this._z=h*u*g+d*f*c,this._w=h*u*c-d*f*g;break;case"YXZ":this._x=d*u*c+h*f*g,this._y=h*f*c-d*u*g,this._z=h*u*g-d*f*c,this._w=h*u*c+d*f*g;break;case"ZXY":this._x=d*u*c-h*f*g,this._y=h*f*c+d*u*g,this._z=h*u*g+d*f*c,this._w=h*u*c-d*f*g;break;case"ZYX":this._x=d*u*c-h*f*g,this._y=h*f*c+d*u*g,this._z=h*u*g-d*f*c,this._w=h*u*c+d*f*g;break;case"YZX":this._x=d*u*c+h*f*g,this._y=h*f*c+d*u*g,this._z=h*u*g-d*f*c,this._w=h*u*c-d*f*g;break;case"XZY":this._x=d*u*c-h*f*g,this._y=h*f*c-d*u*g,this._z=h*u*g+d*f*c,this._w=h*u*c+d*f*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],s=t[8],o=t[1],a=t[5],l=t[9],h=t[2],u=t[6],c=t[10],d=n+a+c;if(d>0){const f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(u-l)*f,this._y=(s-h)*f,this._z=(o-i)*f}else if(n>a&&n>c){const f=2*Math.sqrt(1+n-a-c);this._w=(u-l)/f,this._x=.25*f,this._y=(i+o)/f,this._z=(s+h)/f}else if(a>c){const f=2*Math.sqrt(1+a-n-c);this._w=(s-h)/f,this._x=(i+o)/f,this._y=.25*f,this._z=(l+u)/f}else{const f=2*Math.sqrt(1+c-n-a);this._w=(o-i)/f,this._x=(s+h)/f,this._y=(l+u)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(gt(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,s=e._z,o=e._w,a=t._x,l=t._y,h=t._z,u=t._w;return this._x=n*u+o*a+i*h-s*l,this._y=i*u+o*l+s*a-n*h,this._z=s*u+o*h+n*l-i*a,this._w=o*u-n*a-i*l-s*h,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,i=this._y,s=this._z,o=this._w;let a=o*e._w+n*e._x+i*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=i,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const f=1-t;return this._w=f*o+t*this._w,this._x=f*n+t*this._x,this._y=f*i+t*this._y,this._z=f*s+t*this._z,this.normalize(),this}const h=Math.sqrt(l),u=Math.atan2(h,a),c=Math.sin((1-t)*u)/h,d=Math.sin(t*u)/h;return this._w=o*c+this._w*d,this._x=n*c+this._x*d,this._y=i*c+this._y*d,this._z=s*c+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(i*Math.sin(e),i*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class E{constructor(e=0,t=0,n=0){E.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Pl.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Pl.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*i,this.y=s[1]*t+s[4]*n+s[7]*i,this.z=s[2]*t+s[5]*n+s[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=e.elements,o=1/(s[3]*t+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*i+s[12])*o,this.y=(s[1]*t+s[5]*n+s[9]*i+s[13])*o,this.z=(s[2]*t+s[6]*n+s[10]*i+s[14])*o,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,s=e.x,o=e.y,a=e.z,l=e.w,h=2*(o*i-a*n),u=2*(a*t-s*i),c=2*(s*n-o*t);return this.x=t+l*h+o*c-a*u,this.y=n+l*u+a*h-s*c,this.z=i+l*c+s*u-o*h,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*i,this.y=s[1]*t+s[5]*n+s[9]*i,this.z=s[2]*t+s[6]*n+s[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,s=e.z,o=t.x,a=t.y,l=t.z;return this.x=i*l-s*a,this.y=s*o-n*l,this.z=n*a-i*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Kr.copy(this).projectOnVector(e),this.sub(Kr)}reflect(e){return this.sub(Kr.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(gt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Kr=new E,Pl=new Qt;class Rt{constructor(e=new E(1/0,1/0,1/0),t=new E(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(sn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(sn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=sn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,sn):sn.fromBufferAttribute(s,o),sn.applyMatrix4(e.matrixWorld),this.expandByPoint(sn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),qs.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),qs.copy(n.boundingBox)),qs.applyMatrix4(e.matrixWorld),this.union(qs)}const i=e.children;for(let s=0,o=i.length;s<o;s++)this.expandByObject(i[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,sn),sn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(fs),Ys.subVectors(this.max,fs),Si.subVectors(e.a,fs),Ti.subVectors(e.b,fs),bi.subVectors(e.c,fs),Hn.subVectors(Ti,Si),Vn.subVectors(bi,Ti),ni.subVectors(Si,bi);let t=[0,-Hn.z,Hn.y,0,-Vn.z,Vn.y,0,-ni.z,ni.y,Hn.z,0,-Hn.x,Vn.z,0,-Vn.x,ni.z,0,-ni.x,-Hn.y,Hn.x,0,-Vn.y,Vn.x,0,-ni.y,ni.x,0];return!$r(t,Si,Ti,bi,Ys)||(t=[1,0,0,0,1,0,0,0,1],!$r(t,Si,Ti,bi,Ys))?!1:(js.crossVectors(Hn,Vn),t=[js.x,js.y,js.z],$r(t,Si,Ti,bi,Ys))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,sn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(sn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Tn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Tn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Tn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Tn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Tn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Tn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Tn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Tn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Tn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Tn=[new E,new E,new E,new E,new E,new E,new E,new E],sn=new E,qs=new Rt,Si=new E,Ti=new E,bi=new E,Hn=new E,Vn=new E,ni=new E,fs=new E,Ys=new E,js=new E,ii=new E;function $r(r,e,t,n,i){for(let s=0,o=r.length-3;s<=o;s+=3){ii.fromArray(r,s);const a=i.x*Math.abs(ii.x)+i.y*Math.abs(ii.y)+i.z*Math.abs(ii.z),l=e.dot(ii),h=t.dot(ii),u=n.dot(ii);if(Math.max(-Math.max(l,h,u),Math.min(l,h,u))>a)return!1}return!0}const gd=new Rt,ps=new E,Zr=new E;class _n{constructor(e=new E,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):gd.setFromPoints(e).getCenter(n);let i=0;for(let s=0,o=e.length;s<o;s++)i=Math.max(i,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ps.subVectors(e,this.center);const t=ps.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(ps,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Zr.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ps.copy(e.center).add(Zr)),this.expandByPoint(ps.copy(e.center).sub(Zr))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const bn=new E,Jr=new E,Ks=new E,Wn=new E,Qr=new E,$s=new E,eo=new E;class Gs{constructor(e=new E,t=new E(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,bn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=bn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(bn.copy(this.origin).addScaledVector(this.direction,t),bn.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){Jr.copy(e).add(t).multiplyScalar(.5),Ks.copy(t).sub(e).normalize(),Wn.copy(this.origin).sub(Jr);const s=e.distanceTo(t)*.5,o=-this.direction.dot(Ks),a=Wn.dot(this.direction),l=-Wn.dot(Ks),h=Wn.lengthSq(),u=Math.abs(1-o*o);let c,d,f,g;if(u>0)if(c=o*l-a,d=o*a-l,g=s*u,c>=0)if(d>=-g)if(d<=g){const _=1/u;c*=_,d*=_,f=c*(c+o*d+2*a)+d*(o*c+d+2*l)+h}else d=s,c=Math.max(0,-(o*d+a)),f=-c*c+d*(d+2*l)+h;else d=-s,c=Math.max(0,-(o*d+a)),f=-c*c+d*(d+2*l)+h;else d<=-g?(c=Math.max(0,-(-o*s+a)),d=c>0?-s:Math.min(Math.max(-s,-l),s),f=-c*c+d*(d+2*l)+h):d<=g?(c=0,d=Math.min(Math.max(-s,-l),s),f=d*(d+2*l)+h):(c=Math.max(0,-(o*s+a)),d=c>0?s:Math.min(Math.max(-s,-l),s),f=-c*c+d*(d+2*l)+h);else d=o>0?-s:s,c=Math.max(0,-(o*d+a)),f=-c*c+d*(d+2*l)+h;return n&&n.copy(this.origin).addScaledVector(this.direction,c),i&&i.copy(Jr).addScaledVector(Ks,d),f}intersectSphere(e,t){bn.subVectors(e.center,this.origin);const n=bn.dot(this.direction),i=bn.dot(bn)-n*n,s=e.radius*e.radius;if(i>s)return null;const o=Math.sqrt(s-i),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,s,o,a,l;const h=1/this.direction.x,u=1/this.direction.y,c=1/this.direction.z,d=this.origin;return h>=0?(n=(e.min.x-d.x)*h,i=(e.max.x-d.x)*h):(n=(e.max.x-d.x)*h,i=(e.min.x-d.x)*h),u>=0?(s=(e.min.y-d.y)*u,o=(e.max.y-d.y)*u):(s=(e.max.y-d.y)*u,o=(e.min.y-d.y)*u),n>o||s>i||((s>n||isNaN(n))&&(n=s),(o<i||isNaN(i))&&(i=o),c>=0?(a=(e.min.z-d.z)*c,l=(e.max.z-d.z)*c):(a=(e.max.z-d.z)*c,l=(e.min.z-d.z)*c),n>l||a>i)||((a>n||n!==n)&&(n=a),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,bn)!==null}intersectTriangle(e,t,n,i,s){Qr.subVectors(t,e),$s.subVectors(n,e),eo.crossVectors(Qr,$s);let o=this.direction.dot(eo),a;if(o>0){if(i)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Wn.subVectors(this.origin,e);const l=a*this.direction.dot($s.crossVectors(Wn,$s));if(l<0)return null;const h=a*this.direction.dot(Qr.cross(Wn));if(h<0||l+h>o)return null;const u=-a*Wn.dot(eo);return u<0?null:this.at(u/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Re{constructor(e,t,n,i,s,o,a,l,h,u,c,d,f,g,_,m){Re.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,o,a,l,h,u,c,d,f,g,_,m)}set(e,t,n,i,s,o,a,l,h,u,c,d,f,g,_,m){const p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=i,p[1]=s,p[5]=o,p[9]=a,p[13]=l,p[2]=h,p[6]=u,p[10]=c,p[14]=d,p[3]=f,p[7]=g,p[11]=_,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Re().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,i=1/wi.setFromMatrixColumn(e,0).length(),s=1/wi.setFromMatrixColumn(e,1).length(),o=1/wi.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,s=e.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(i),h=Math.sin(i),u=Math.cos(s),c=Math.sin(s);if(e.order==="XYZ"){const d=o*u,f=o*c,g=a*u,_=a*c;t[0]=l*u,t[4]=-l*c,t[8]=h,t[1]=f+g*h,t[5]=d-_*h,t[9]=-a*l,t[2]=_-d*h,t[6]=g+f*h,t[10]=o*l}else if(e.order==="YXZ"){const d=l*u,f=l*c,g=h*u,_=h*c;t[0]=d+_*a,t[4]=g*a-f,t[8]=o*h,t[1]=o*c,t[5]=o*u,t[9]=-a,t[2]=f*a-g,t[6]=_+d*a,t[10]=o*l}else if(e.order==="ZXY"){const d=l*u,f=l*c,g=h*u,_=h*c;t[0]=d-_*a,t[4]=-o*c,t[8]=g+f*a,t[1]=f+g*a,t[5]=o*u,t[9]=_-d*a,t[2]=-o*h,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const d=o*u,f=o*c,g=a*u,_=a*c;t[0]=l*u,t[4]=g*h-f,t[8]=d*h+_,t[1]=l*c,t[5]=_*h+d,t[9]=f*h-g,t[2]=-h,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const d=o*l,f=o*h,g=a*l,_=a*h;t[0]=l*u,t[4]=_-d*c,t[8]=g*c+f,t[1]=c,t[5]=o*u,t[9]=-a*u,t[2]=-h*u,t[6]=f*c+g,t[10]=d-_*c}else if(e.order==="XZY"){const d=o*l,f=o*h,g=a*l,_=a*h;t[0]=l*u,t[4]=-c,t[8]=h*u,t[1]=d*c+_,t[5]=o*u,t[9]=f*c-g,t[2]=g*c-f,t[6]=a*u,t[10]=_*c+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(_d,e,vd)}lookAt(e,t,n){const i=this.elements;return kt.subVectors(e,t),kt.lengthSq()===0&&(kt.z=1),kt.normalize(),Xn.crossVectors(n,kt),Xn.lengthSq()===0&&(Math.abs(n.z)===1?kt.x+=1e-4:kt.z+=1e-4,kt.normalize(),Xn.crossVectors(n,kt)),Xn.normalize(),Zs.crossVectors(kt,Xn),i[0]=Xn.x,i[4]=Zs.x,i[8]=kt.x,i[1]=Xn.y,i[5]=Zs.y,i[9]=kt.y,i[2]=Xn.z,i[6]=Zs.z,i[10]=kt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,o=n[0],a=n[4],l=n[8],h=n[12],u=n[1],c=n[5],d=n[9],f=n[13],g=n[2],_=n[6],m=n[10],p=n[14],v=n[3],M=n[7],x=n[11],C=n[15],w=i[0],A=i[4],L=i[8],b=i[12],S=i[1],P=i[5],F=i[9],O=i[13],V=i[2],X=i[6],W=i[10],Z=i[14],H=i[3],se=i[7],he=i[11],Se=i[15];return s[0]=o*w+a*S+l*V+h*H,s[4]=o*A+a*P+l*X+h*se,s[8]=o*L+a*F+l*W+h*he,s[12]=o*b+a*O+l*Z+h*Se,s[1]=u*w+c*S+d*V+f*H,s[5]=u*A+c*P+d*X+f*se,s[9]=u*L+c*F+d*W+f*he,s[13]=u*b+c*O+d*Z+f*Se,s[2]=g*w+_*S+m*V+p*H,s[6]=g*A+_*P+m*X+p*se,s[10]=g*L+_*F+m*W+p*he,s[14]=g*b+_*O+m*Z+p*Se,s[3]=v*w+M*S+x*V+C*H,s[7]=v*A+M*P+x*X+C*se,s[11]=v*L+M*F+x*W+C*he,s[15]=v*b+M*O+x*Z+C*Se,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],s=e[12],o=e[1],a=e[5],l=e[9],h=e[13],u=e[2],c=e[6],d=e[10],f=e[14],g=e[3],_=e[7],m=e[11],p=e[15];return g*(+s*l*c-i*h*c-s*a*d+n*h*d+i*a*f-n*l*f)+_*(+t*l*f-t*h*d+s*o*d-i*o*f+i*h*u-s*l*u)+m*(+t*h*c-t*a*f-s*o*c+n*o*f+s*a*u-n*h*u)+p*(-i*a*u-t*l*c+t*a*d+i*o*c-n*o*d+n*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],o=e[4],a=e[5],l=e[6],h=e[7],u=e[8],c=e[9],d=e[10],f=e[11],g=e[12],_=e[13],m=e[14],p=e[15],v=c*m*h-_*d*h+_*l*f-a*m*f-c*l*p+a*d*p,M=g*d*h-u*m*h-g*l*f+o*m*f+u*l*p-o*d*p,x=u*_*h-g*c*h+g*a*f-o*_*f-u*a*p+o*c*p,C=g*c*l-u*_*l-g*a*d+o*_*d+u*a*m-o*c*m,w=t*v+n*M+i*x+s*C;if(w===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const A=1/w;return e[0]=v*A,e[1]=(_*d*s-c*m*s-_*i*f+n*m*f+c*i*p-n*d*p)*A,e[2]=(a*m*s-_*l*s+_*i*h-n*m*h-a*i*p+n*l*p)*A,e[3]=(c*l*s-a*d*s-c*i*h+n*d*h+a*i*f-n*l*f)*A,e[4]=M*A,e[5]=(u*m*s-g*d*s+g*i*f-t*m*f-u*i*p+t*d*p)*A,e[6]=(g*l*s-o*m*s-g*i*h+t*m*h+o*i*p-t*l*p)*A,e[7]=(o*d*s-u*l*s+u*i*h-t*d*h-o*i*f+t*l*f)*A,e[8]=x*A,e[9]=(g*c*s-u*_*s-g*n*f+t*_*f+u*n*p-t*c*p)*A,e[10]=(o*_*s-g*a*s+g*n*h-t*_*h-o*n*p+t*a*p)*A,e[11]=(u*a*s-o*c*s-u*n*h+t*c*h+o*n*f-t*a*f)*A,e[12]=C*A,e[13]=(u*_*i-g*c*i+g*n*d-t*_*d-u*n*m+t*c*m)*A,e[14]=(g*a*i-o*_*i-g*n*l+t*_*l+o*n*m-t*a*m)*A,e[15]=(o*c*i-u*a*i+u*n*l-t*c*l-o*n*d+t*a*d)*A,this}scale(e){const t=this.elements,n=e.x,i=e.y,s=e.z;return t[0]*=n,t[4]*=i,t[8]*=s,t[1]*=n,t[5]*=i,t[9]*=s,t[2]*=n,t[6]*=i,t[10]*=s,t[3]*=n,t[7]*=i,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),s=1-n,o=e.x,a=e.y,l=e.z,h=s*o,u=s*a;return this.set(h*o+n,h*a-i*l,h*l+i*a,0,h*a+i*l,u*a+n,u*l-i*o,0,h*l-i*a,u*l+i*o,s*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,s,o){return this.set(1,n,s,0,e,1,o,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,s=t._x,o=t._y,a=t._z,l=t._w,h=s+s,u=o+o,c=a+a,d=s*h,f=s*u,g=s*c,_=o*u,m=o*c,p=a*c,v=l*h,M=l*u,x=l*c,C=n.x,w=n.y,A=n.z;return i[0]=(1-(_+p))*C,i[1]=(f+x)*C,i[2]=(g-M)*C,i[3]=0,i[4]=(f-x)*w,i[5]=(1-(d+p))*w,i[6]=(m+v)*w,i[7]=0,i[8]=(g+M)*A,i[9]=(m-v)*A,i[10]=(1-(d+_))*A,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;let s=wi.set(i[0],i[1],i[2]).length();const o=wi.set(i[4],i[5],i[6]).length(),a=wi.set(i[8],i[9],i[10]).length();this.determinant()<0&&(s=-s),e.x=i[12],e.y=i[13],e.z=i[14],rn.copy(this);const h=1/s,u=1/o,c=1/a;return rn.elements[0]*=h,rn.elements[1]*=h,rn.elements[2]*=h,rn.elements[4]*=u,rn.elements[5]*=u,rn.elements[6]*=u,rn.elements[8]*=c,rn.elements[9]*=c,rn.elements[10]*=c,t.setFromRotationMatrix(rn),n.x=s,n.y=o,n.z=a,this}makePerspective(e,t,n,i,s,o,a=Un){const l=this.elements,h=2*s/(t-e),u=2*s/(n-i),c=(t+e)/(t-e),d=(n+i)/(n-i);let f,g;if(a===Un)f=-(o+s)/(o-s),g=-2*o*s/(o-s);else if(a===Nr)f=-o/(o-s),g=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=h,l[4]=0,l[8]=c,l[12]=0,l[1]=0,l[5]=u,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=f,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,i,s,o,a=Un){const l=this.elements,h=1/(t-e),u=1/(n-i),c=1/(o-s),d=(t+e)*h,f=(n+i)*u;let g,_;if(a===Un)g=(o+s)*c,_=-2*c;else if(a===Nr)g=s*c,_=-1*c;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*h,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-f,l[2]=0,l[6]=0,l[10]=_,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const wi=new E,rn=new Re,_d=new E(0,0,0),vd=new E(1,1,1),Xn=new E,Zs=new E,kt=new E,Ll=new Re,Il=new Qt;class un{constructor(e=0,t=0,n=0,i=un.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,s=i[0],o=i[4],a=i[8],l=i[1],h=i[5],u=i[9],c=i[2],d=i[6],f=i[10];switch(t){case"XYZ":this._y=Math.asin(gt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,f),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(d,h),this._z=0);break;case"YXZ":this._x=Math.asin(-gt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(l,h)):(this._y=Math.atan2(-c,s),this._z=0);break;case"ZXY":this._x=Math.asin(gt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-c,f),this._z=Math.atan2(-o,h)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-gt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,h));break;case"YZX":this._z=Math.asin(gt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,h),this._y=Math.atan2(-c,s)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-gt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,h),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Ll.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Ll,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Il.setFromEuler(this),this.setFromQuaternion(Il,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}un.DEFAULT_ORDER="XYZ";class qa{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let xd=0;const Dl=new E,Ei=new Qt,wn=new Re,Js=new E,ms=new E,yd=new E,Md=new Qt,Nl=new E(1,0,0),Ul=new E(0,1,0),Fl=new E(0,0,1),Bl={type:"added"},Sd={type:"removed"},Ai={type:"childadded",child:null},to={type:"childremoved",child:null};class st extends vi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:xd++}),this.uuid=cn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=st.DEFAULT_UP.clone();const e=new E,t=new un,n=new Qt,i=new E(1,1,1);function s(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Re},normalMatrix:{value:new Ne}}),this.matrix=new Re,this.matrixWorld=new Re,this.matrixAutoUpdate=st.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=st.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new qa,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Ei.setFromAxisAngle(e,t),this.quaternion.multiply(Ei),this}rotateOnWorldAxis(e,t){return Ei.setFromAxisAngle(e,t),this.quaternion.premultiply(Ei),this}rotateX(e){return this.rotateOnAxis(Nl,e)}rotateY(e){return this.rotateOnAxis(Ul,e)}rotateZ(e){return this.rotateOnAxis(Fl,e)}translateOnAxis(e,t){return Dl.copy(e).applyQuaternion(this.quaternion),this.position.add(Dl.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Nl,e)}translateY(e){return this.translateOnAxis(Ul,e)}translateZ(e){return this.translateOnAxis(Fl,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(wn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Js.copy(e):Js.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),ms.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?wn.lookAt(ms,Js,this.up):wn.lookAt(Js,ms,this.up),this.quaternion.setFromRotationMatrix(wn),i&&(wn.extractRotation(i.matrixWorld),Ei.setFromRotationMatrix(wn),this.quaternion.premultiply(Ei.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Bl),Ai.child=e,this.dispatchEvent(Ai),Ai.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Sd),to.child=e,this.dispatchEvent(to),to.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),wn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),wn.multiply(e.parent.matrixWorld)),e.applyMatrix4(wn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Bl),Ai.child=e,this.dispatchEvent(Ai),Ai.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const i=this.children;for(let s=0,o=i.length;s<o;s++)i[s].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ms,e,yd),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ms,Md,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const i=this.children;for(let s=0,o=i.length;s<o;s++)i[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let h=0,u=l.length;h<u;h++){const c=l[h];s(e.shapes,c)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,h=this.material.length;l<h;l++)a.push(s(e.materials,this.material[l]));i.material=a}else i.material=s(e.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];i.animations.push(s(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),h=o(e.textures),u=o(e.images),c=o(e.shapes),d=o(e.skeletons),f=o(e.animations),g=o(e.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),h.length>0&&(n.textures=h),u.length>0&&(n.images=u),c.length>0&&(n.shapes=c),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),g.length>0&&(n.nodes=g)}return n.object=i,n;function o(a){const l=[];for(const h in a){const u=a[h];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}st.DEFAULT_UP=new E(0,1,0);st.DEFAULT_MATRIX_AUTO_UPDATE=!0;st.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const on=new E,En=new E,no=new E,An=new E,Ci=new E,Ri=new E,Ol=new E,io=new E,so=new E,ro=new E,oo=new Ye,ao=new Ye,lo=new Ye;class $t{constructor(e=new E,t=new E,n=new E){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),on.subVectors(e,t),i.cross(on);const s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(e,t,n,i,s){on.subVectors(i,t),En.subVectors(n,t),no.subVectors(e,t);const o=on.dot(on),a=on.dot(En),l=on.dot(no),h=En.dot(En),u=En.dot(no),c=o*h-a*a;if(c===0)return s.set(0,0,0),null;const d=1/c,f=(h*l-a*u)*d,g=(o*u-a*l)*d;return s.set(1-f-g,g,f)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,An)===null?!1:An.x>=0&&An.y>=0&&An.x+An.y<=1}static getInterpolation(e,t,n,i,s,o,a,l){return this.getBarycoord(e,t,n,i,An)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,An.x),l.addScaledVector(o,An.y),l.addScaledVector(a,An.z),l)}static getInterpolatedAttribute(e,t,n,i,s,o){return oo.setScalar(0),ao.setScalar(0),lo.setScalar(0),oo.fromBufferAttribute(e,t),ao.fromBufferAttribute(e,n),lo.fromBufferAttribute(e,i),o.setScalar(0),o.addScaledVector(oo,s.x),o.addScaledVector(ao,s.y),o.addScaledVector(lo,s.z),o}static isFrontFacing(e,t,n,i){return on.subVectors(n,t),En.subVectors(e,t),on.cross(En).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return on.subVectors(this.c,this.b),En.subVectors(this.a,this.b),on.cross(En).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return $t.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return $t.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,i,s){return $t.getInterpolation(e,this.a,this.b,this.c,t,n,i,s)}containsPoint(e){return $t.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return $t.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,s=this.c;let o,a;Ci.subVectors(i,n),Ri.subVectors(s,n),io.subVectors(e,n);const l=Ci.dot(io),h=Ri.dot(io);if(l<=0&&h<=0)return t.copy(n);so.subVectors(e,i);const u=Ci.dot(so),c=Ri.dot(so);if(u>=0&&c<=u)return t.copy(i);const d=l*c-u*h;if(d<=0&&l>=0&&u<=0)return o=l/(l-u),t.copy(n).addScaledVector(Ci,o);ro.subVectors(e,s);const f=Ci.dot(ro),g=Ri.dot(ro);if(g>=0&&f<=g)return t.copy(s);const _=f*h-l*g;if(_<=0&&h>=0&&g<=0)return a=h/(h-g),t.copy(n).addScaledVector(Ri,a);const m=u*g-f*c;if(m<=0&&c-u>=0&&f-g>=0)return Ol.subVectors(s,i),a=(c-u)/(c-u+(f-g)),t.copy(i).addScaledVector(Ol,a);const p=1/(m+_+d);return o=_*p,a=d*p,t.copy(n).addScaledVector(Ci,o).addScaledVector(Ri,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Th={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},qn={h:0,s:0,l:0},Qs={h:0,s:0,l:0};function co(r,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?r+(e-r)*6*t:t<1/2?e:t<2/3?r+(e-r)*6*(2/3-t):r}class pe{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=bt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,ke.toWorkingColorSpace(this,t),this}setRGB(e,t,n,i=ke.workingColorSpace){return this.r=e,this.g=t,this.b=n,ke.toWorkingColorSpace(this,i),this}setHSL(e,t,n,i=ke.workingColorSpace){if(e=Xa(e,1),t=gt(t,0,1),n=gt(n,0,1),t===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,o=2*n-s;this.r=co(o,s,e+1/3),this.g=co(o,s,e),this.b=co(o,s,e-1/3)}return ke.toWorkingColorSpace(this,i),this}setStyle(e,t=bt){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=i[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=bt){const n=Th[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Bn(e.r),this.g=Bn(e.g),this.b=Bn(e.b),this}copyLinearToSRGB(e){return this.r=Xi(e.r),this.g=Xi(e.g),this.b=Xi(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=bt){return ke.fromWorkingColorSpace(At.copy(this),e),Math.round(gt(At.r*255,0,255))*65536+Math.round(gt(At.g*255,0,255))*256+Math.round(gt(At.b*255,0,255))}getHexString(e=bt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=ke.workingColorSpace){ke.fromWorkingColorSpace(At.copy(this),t);const n=At.r,i=At.g,s=At.b,o=Math.max(n,i,s),a=Math.min(n,i,s);let l,h;const u=(a+o)/2;if(a===o)l=0,h=0;else{const c=o-a;switch(h=u<=.5?c/(o+a):c/(2-o-a),o){case n:l=(i-s)/c+(i<s?6:0);break;case i:l=(s-n)/c+2;break;case s:l=(n-i)/c+4;break}l/=6}return e.h=l,e.s=h,e.l=u,e}getRGB(e,t=ke.workingColorSpace){return ke.fromWorkingColorSpace(At.copy(this),t),e.r=At.r,e.g=At.g,e.b=At.b,e}getStyle(e=bt){ke.fromWorkingColorSpace(At.copy(this),e);const t=At.r,n=At.g,i=At.b;return e!==bt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(qn),this.setHSL(qn.h+e,qn.s+t,qn.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(qn),e.getHSL(Qs);const n=Ps(qn.h,Qs.h,t),i=Ps(qn.s,Qs.s,t),s=Ps(qn.l,Qs.l,t);return this.setHSL(n,i,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,i=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*i,this.g=s[1]*t+s[4]*n+s[7]*i,this.b=s[2]*t+s[5]*n+s[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const At=new pe;pe.NAMES=Th;let Td=0;class hn extends vi{static get type(){return"Material"}get type(){return this.constructor.type}set type(e){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Td++}),this.uuid=cn(),this.name="",this.blending=Qn,this.side=On,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ko,this.blendDst=Go,this.blendEquation=pi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new pe(0,0,0),this.blendAlpha=0,this.depthFunc=ji,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Ml,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=yi,this.stencilZFail=yi,this.stencilZPass=yi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Qn&&(n.blending=this.blending),this.side!==On&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==ko&&(n.blendSrc=this.blendSrc),this.blendDst!==Go&&(n.blendDst=this.blendDst),this.blendEquation!==pi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==ji&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Ml&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==yi&&(n.stencilFail=this.stencilFail),this.stencilZFail!==yi&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==yi&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(t){const s=i(e.textures),o=i(e.images);s.length>0&&(n.textures=s),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class _t extends hn{static get type(){return"MeshBasicMaterial"}constructor(e){super(),this.isMeshBasicMaterial=!0,this.color=new pe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new un,this.combine=eh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const dt=new E,er=new Q;class yt{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=ba,this.updateRanges=[],this.gpuType=ln,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)er.fromBufferAttribute(this,t),er.applyMatrix3(e),this.setXY(t,er.x,er.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)dt.fromBufferAttribute(this,t),dt.applyMatrix3(e),this.setXYZ(t,dt.x,dt.y,dt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)dt.fromBufferAttribute(this,t),dt.applyMatrix4(e),this.setXYZ(t,dt.x,dt.y,dt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)dt.fromBufferAttribute(this,t),dt.applyNormalMatrix(e),this.setXYZ(t,dt.x,dt.y,dt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)dt.fromBufferAttribute(this,t),dt.transformDirection(e),this.setXYZ(t,dt.x,dt.y,dt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=an(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Qe(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=an(t,this.array)),t}setX(e,t){return this.normalized&&(t=Qe(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=an(t,this.array)),t}setY(e,t){return this.normalized&&(t=Qe(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=an(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Qe(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=an(t,this.array)),t}setW(e,t){return this.normalized&&(t=Qe(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Qe(t,this.array),n=Qe(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=Qe(t,this.array),n=Qe(n,this.array),i=Qe(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e*=this.itemSize,this.normalized&&(t=Qe(t,this.array),n=Qe(n,this.array),i=Qe(i,this.array),s=Qe(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==ba&&(e.usage=this.usage),e}}class bh extends yt{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class wh extends yt{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class et extends yt{constructor(e,t,n){super(new Float32Array(e),t,n)}}let bd=0;const jt=new Re,ho=new st,Pi=new E,Gt=new Rt,gs=new Rt,Tt=new E;class mt extends vi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:bd++}),this.uuid=cn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(yh(e)?wh:bh)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new Ne().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return jt.makeRotationFromQuaternion(e),this.applyMatrix4(jt),this}rotateX(e){return jt.makeRotationX(e),this.applyMatrix4(jt),this}rotateY(e){return jt.makeRotationY(e),this.applyMatrix4(jt),this}rotateZ(e){return jt.makeRotationZ(e),this.applyMatrix4(jt),this}translate(e,t,n){return jt.makeTranslation(e,t,n),this.applyMatrix4(jt),this}scale(e,t,n){return jt.makeScale(e,t,n),this.applyMatrix4(jt),this}lookAt(e){return ho.lookAt(e),ho.updateMatrix(),this.applyMatrix4(ho.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Pi).negate(),this.translate(Pi.x,Pi.y,Pi.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let i=0,s=e.length;i<s;i++){const o=e[i];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new et(n,3))}else{for(let n=0,i=t.count;n<i;n++){const s=e[n];t.setXYZ(n,s.x,s.y,s.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Rt);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new E(-1/0,-1/0,-1/0),new E(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const s=t[n];Gt.setFromBufferAttribute(s),this.morphTargetsRelative?(Tt.addVectors(this.boundingBox.min,Gt.min),this.boundingBox.expandByPoint(Tt),Tt.addVectors(this.boundingBox.max,Gt.max),this.boundingBox.expandByPoint(Tt)):(this.boundingBox.expandByPoint(Gt.min),this.boundingBox.expandByPoint(Gt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new _n);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new E,1/0);return}if(e){const n=this.boundingSphere.center;if(Gt.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const a=t[s];gs.setFromBufferAttribute(a),this.morphTargetsRelative?(Tt.addVectors(Gt.min,gs.min),Gt.expandByPoint(Tt),Tt.addVectors(Gt.max,gs.max),Gt.expandByPoint(Tt)):(Gt.expandByPoint(gs.min),Gt.expandByPoint(gs.max))}Gt.getCenter(n);let i=0;for(let s=0,o=e.count;s<o;s++)Tt.fromBufferAttribute(e,s),i=Math.max(i,n.distanceToSquared(Tt));if(t)for(let s=0,o=t.length;s<o;s++){const a=t[s],l=this.morphTargetsRelative;for(let h=0,u=a.count;h<u;h++)Tt.fromBufferAttribute(a,h),l&&(Pi.fromBufferAttribute(e,h),Tt.add(Pi)),i=Math.max(i,n.distanceToSquared(Tt))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,i=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new yt(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let L=0;L<n.count;L++)a[L]=new E,l[L]=new E;const h=new E,u=new E,c=new E,d=new Q,f=new Q,g=new Q,_=new E,m=new E;function p(L,b,S){h.fromBufferAttribute(n,L),u.fromBufferAttribute(n,b),c.fromBufferAttribute(n,S),d.fromBufferAttribute(s,L),f.fromBufferAttribute(s,b),g.fromBufferAttribute(s,S),u.sub(h),c.sub(h),f.sub(d),g.sub(d);const P=1/(f.x*g.y-g.x*f.y);isFinite(P)&&(_.copy(u).multiplyScalar(g.y).addScaledVector(c,-f.y).multiplyScalar(P),m.copy(c).multiplyScalar(f.x).addScaledVector(u,-g.x).multiplyScalar(P),a[L].add(_),a[b].add(_),a[S].add(_),l[L].add(m),l[b].add(m),l[S].add(m))}let v=this.groups;v.length===0&&(v=[{start:0,count:e.count}]);for(let L=0,b=v.length;L<b;++L){const S=v[L],P=S.start,F=S.count;for(let O=P,V=P+F;O<V;O+=3)p(e.getX(O+0),e.getX(O+1),e.getX(O+2))}const M=new E,x=new E,C=new E,w=new E;function A(L){C.fromBufferAttribute(i,L),w.copy(C);const b=a[L];M.copy(b),M.sub(C.multiplyScalar(C.dot(b))).normalize(),x.crossVectors(w,b);const P=x.dot(l[L])<0?-1:1;o.setXYZW(L,M.x,M.y,M.z,P)}for(let L=0,b=v.length;L<b;++L){const S=v[L],P=S.start,F=S.count;for(let O=P,V=P+F;O<V;O+=3)A(e.getX(O+0)),A(e.getX(O+1)),A(e.getX(O+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new yt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);const i=new E,s=new E,o=new E,a=new E,l=new E,h=new E,u=new E,c=new E;if(e)for(let d=0,f=e.count;d<f;d+=3){const g=e.getX(d+0),_=e.getX(d+1),m=e.getX(d+2);i.fromBufferAttribute(t,g),s.fromBufferAttribute(t,_),o.fromBufferAttribute(t,m),u.subVectors(o,s),c.subVectors(i,s),u.cross(c),a.fromBufferAttribute(n,g),l.fromBufferAttribute(n,_),h.fromBufferAttribute(n,m),a.add(u),l.add(u),h.add(u),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(m,h.x,h.y,h.z)}else for(let d=0,f=t.count;d<f;d+=3)i.fromBufferAttribute(t,d+0),s.fromBufferAttribute(t,d+1),o.fromBufferAttribute(t,d+2),u.subVectors(o,s),c.subVectors(i,s),u.cross(c),n.setXYZ(d+0,u.x,u.y,u.z),n.setXYZ(d+1,u.x,u.y,u.z),n.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Tt.fromBufferAttribute(e,t),Tt.normalize(),e.setXYZ(t,Tt.x,Tt.y,Tt.z)}toNonIndexed(){function e(a,l){const h=a.array,u=a.itemSize,c=a.normalized,d=new h.constructor(l.length*u);let f=0,g=0;for(let _=0,m=l.length;_<m;_++){a.isInterleavedBufferAttribute?f=l[_]*a.data.stride+a.offset:f=l[_]*u;for(let p=0;p<u;p++)d[g++]=h[f++]}return new yt(d,u,c)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new mt,n=this.index.array,i=this.attributes;for(const a in i){const l=i[a],h=e(l,n);t.setAttribute(a,h)}const s=this.morphAttributes;for(const a in s){const l=[],h=s[a];for(let u=0,c=h.length;u<c;u++){const d=h[u],f=e(d,n);l.push(f)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const h=o[a];t.addGroup(h.start,h.count,h.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const h in l)l[h]!==void 0&&(e[h]=l[h]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const h=n[l];e.data.attributes[l]=h.toJSON(e.data)}const i={};let s=!1;for(const l in this.morphAttributes){const h=this.morphAttributes[l],u=[];for(let c=0,d=h.length;c<d;c++){const f=h[c];u.push(f.toJSON(e.data))}u.length>0&&(i[l]=u,s=!0)}s&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const i=e.attributes;for(const h in i){const u=i[h];this.setAttribute(h,u.clone(t))}const s=e.morphAttributes;for(const h in s){const u=[],c=s[h];for(let d=0,f=c.length;d<f;d++)u.push(c[d].clone(t));this.morphAttributes[h]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let h=0,u=o.length;h<u;h++){const c=o[h];this.addGroup(c.start,c.count,c.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const zl=new Re,si=new Gs,tr=new _n,kl=new E,nr=new E,ir=new E,sr=new E,uo=new E,rr=new E,Gl=new E,or=new E;class be extends st{constructor(e=new mt,t=new _t){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){const a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){const n=this.geometry,i=n.attributes.position,s=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(i,e);const a=this.morphTargetInfluences;if(s&&a){rr.set(0,0,0);for(let l=0,h=s.length;l<h;l++){const u=a[l],c=s[l];u!==0&&(uo.fromBufferAttribute(c,e),o?rr.addScaledVector(uo,u):rr.addScaledVector(uo.sub(t),u))}t.add(rr)}return t}raycast(e,t){const n=this.geometry,i=this.material,s=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),tr.copy(n.boundingSphere),tr.applyMatrix4(s),si.copy(e.ray).recast(e.near),!(tr.containsPoint(si.origin)===!1&&(si.intersectSphere(tr,kl)===null||si.origin.distanceToSquared(kl)>(e.far-e.near)**2))&&(zl.copy(s).invert(),si.copy(e.ray).applyMatrix4(zl),!(n.boundingBox!==null&&si.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,si)))}_computeIntersections(e,t,n){let i;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,h=s.attributes.uv,u=s.attributes.uv1,c=s.attributes.normal,d=s.groups,f=s.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,_=d.length;g<_;g++){const m=d[g],p=o[m.materialIndex],v=Math.max(m.start,f.start),M=Math.min(a.count,Math.min(m.start+m.count,f.start+f.count));for(let x=v,C=M;x<C;x+=3){const w=a.getX(x),A=a.getX(x+1),L=a.getX(x+2);i=ar(this,p,e,n,h,u,c,w,A,L),i&&(i.faceIndex=Math.floor(x/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{const g=Math.max(0,f.start),_=Math.min(a.count,f.start+f.count);for(let m=g,p=_;m<p;m+=3){const v=a.getX(m),M=a.getX(m+1),x=a.getX(m+2);i=ar(this,o,e,n,h,u,c,v,M,x),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,_=d.length;g<_;g++){const m=d[g],p=o[m.materialIndex],v=Math.max(m.start,f.start),M=Math.min(l.count,Math.min(m.start+m.count,f.start+f.count));for(let x=v,C=M;x<C;x+=3){const w=x,A=x+1,L=x+2;i=ar(this,p,e,n,h,u,c,w,A,L),i&&(i.faceIndex=Math.floor(x/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{const g=Math.max(0,f.start),_=Math.min(l.count,f.start+f.count);for(let m=g,p=_;m<p;m+=3){const v=m,M=m+1,x=m+2;i=ar(this,o,e,n,h,u,c,v,M,x),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}}}function wd(r,e,t,n,i,s,o,a){let l;if(e.side===Nt?l=n.intersectTriangle(o,s,i,!0,a):l=n.intersectTriangle(i,s,o,e.side===On,a),l===null)return null;or.copy(a),or.applyMatrix4(r.matrixWorld);const h=t.ray.origin.distanceTo(or);return h<t.near||h>t.far?null:{distance:h,point:or.clone(),object:r}}function ar(r,e,t,n,i,s,o,a,l,h){r.getVertexPosition(a,nr),r.getVertexPosition(l,ir),r.getVertexPosition(h,sr);const u=wd(r,e,t,n,nr,ir,sr,Gl);if(u){const c=new E;$t.getBarycoord(Gl,nr,ir,sr,c),i&&(u.uv=$t.getInterpolatedAttribute(i,a,l,h,c,new Q)),s&&(u.uv1=$t.getInterpolatedAttribute(s,a,l,h,c,new Q)),o&&(u.normal=$t.getInterpolatedAttribute(o,a,l,h,c,new E),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const d={a,b:l,c:h,normal:new E,materialIndex:0};$t.getNormal(nr,ir,sr,d.normal),u.face=d,u.barycoord=c}return u}class _i extends mt{constructor(e=1,t=1,n=1,i=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:s,depthSegments:o};const a=this;i=Math.floor(i),s=Math.floor(s),o=Math.floor(o);const l=[],h=[],u=[],c=[];let d=0,f=0;g("z","y","x",-1,-1,n,t,e,o,s,0),g("z","y","x",1,-1,n,t,-e,o,s,1),g("x","z","y",1,1,e,n,t,i,o,2),g("x","z","y",1,-1,e,n,-t,i,o,3),g("x","y","z",1,-1,e,t,n,i,s,4),g("x","y","z",-1,-1,e,t,-n,i,s,5),this.setIndex(l),this.setAttribute("position",new et(h,3)),this.setAttribute("normal",new et(u,3)),this.setAttribute("uv",new et(c,2));function g(_,m,p,v,M,x,C,w,A,L,b){const S=x/A,P=C/L,F=x/2,O=C/2,V=w/2,X=A+1,W=L+1;let Z=0,H=0;const se=new E;for(let he=0;he<W;he++){const Se=he*P-O;for(let Be=0;Be<X;Be++){const tt=Be*S-F;se[_]=tt*v,se[m]=Se*M,se[p]=V,h.push(se.x,se.y,se.z),se[_]=0,se[m]=0,se[p]=w>0?1:-1,u.push(se.x,se.y,se.z),c.push(Be/A),c.push(1-he/L),Z+=1}}for(let he=0;he<L;he++)for(let Se=0;Se<A;Se++){const Be=d+Se+X*he,tt=d+Se+X*(he+1),Y=d+(Se+1)+X*(he+1),te=d+(Se+1)+X*he;l.push(Be,tt,te),l.push(tt,Y,te),H+=6}a.addGroup(f,H,b),f+=H,d+=Z}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new _i(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function ts(r){const e={};for(const t in r){e[t]={};for(const n in r[t]){const i=r[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function It(r){const e={};for(let t=0;t<r.length;t++){const n=ts(r[t]);for(const i in n)e[i]=n[i]}return e}function Ed(r){const e=[];for(let t=0;t<r.length;t++)e.push(r[t].clone());return e}function Eh(r){const e=r.getRenderTarget();return e===null?r.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:ke.workingColorSpace}const zs={clone:ts,merge:It};var Ad=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Cd=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class vt extends hn{static get type(){return"ShaderMaterial"}constructor(e){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Ad,this.fragmentShader=Cd,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ts(e.uniforms),this.uniformsGroups=Ed(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const o=this.uniforms[i].value;o&&o.isTexture?t.uniforms[i]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[i]={type:"m4",value:o.toArray()}:t.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}let Ah=class extends st{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Re,this.projectionMatrix=new Re,this.projectionMatrixInverse=new Re,this.coordinateSystem=Un}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}};const Yn=new E,Hl=new Q,Vl=new Q;class Dt extends Ah{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=es*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Rs*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return es*2*Math.atan(Math.tan(Rs*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Yn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Yn.x,Yn.y).multiplyScalar(-e/Yn.z),Yn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Yn.x,Yn.y).multiplyScalar(-e/Yn.z)}getViewSize(e,t){return this.getViewBounds(e,Hl,Vl),t.subVectors(Vl,Hl)}setViewOffset(e,t,n,i,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Rs*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,s=-.5*i;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,h=o.fullHeight;s+=o.offsetX*i/l,t-=o.offsetY*n/h,i*=o.width/l,n*=o.height/h}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Li=-90,Ii=1;class Rd extends st{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new Dt(Li,Ii,e,t);i.layers=this.layers,this.add(i);const s=new Dt(Li,Ii,e,t);s.layers=this.layers,this.add(s);const o=new Dt(Li,Ii,e,t);o.layers=this.layers,this.add(o);const a=new Dt(Li,Ii,e,t);a.layers=this.layers,this.add(a);const l=new Dt(Li,Ii,e,t);l.layers=this.layers,this.add(l);const h=new Dt(Li,Ii,e,t);h.layers=this.layers,this.add(h)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,i,s,o,a,l]=t;for(const h of t)this.remove(h);if(e===Un)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Nr)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const h of t)this.add(h),h.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,h,u]=this.children,c=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,i),e.render(t,s),e.setRenderTarget(n,1,i),e.render(t,o),e.setRenderTarget(n,2,i),e.render(t,a),e.setRenderTarget(n,3,i),e.render(t,l),e.setRenderTarget(n,4,i),e.render(t,h),n.texture.generateMipmaps=_,e.setRenderTarget(n,5,i),e.render(t,u),e.setRenderTarget(c,d,f),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class Ch extends xt{constructor(e,t,n,i,s,o,a,l,h,u){e=e!==void 0?e:[],t=t!==void 0?t:Ki,super(e,t,n,i,s,o,a,l,h,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Pd extends Jt{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new Ch(i,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Wt}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new _i(5,5,5),s=new vt({name:"CubemapFromEquirect",uniforms:ts(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Nt,blending:Fn});s.uniforms.tEquirect.value=t;const o=new be(i,s),a=t.minFilter;return t.minFilter===Nn&&(t.minFilter=Wt),new Rd(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,n,i){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,i);e.setRenderTarget(s)}}const fo=new E,Ld=new E,Id=new Ne;class di{constructor(e=new E(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=fo.subVectors(n,t).cross(Ld.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(fo),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/i;return s<0||s>1?null:t.copy(e.start).addScaledVector(n,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||Id.getNormalMatrix(e),i=this.coplanarPoint(fo).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ri=new _n,lr=new E;class Ya{constructor(e=new di,t=new di,n=new di,i=new di,s=new di,o=new di){this.planes=[e,t,n,i,s,o]}set(e,t,n,i,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(i),a[4].copy(s),a[5].copy(o),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Un){const n=this.planes,i=e.elements,s=i[0],o=i[1],a=i[2],l=i[3],h=i[4],u=i[5],c=i[6],d=i[7],f=i[8],g=i[9],_=i[10],m=i[11],p=i[12],v=i[13],M=i[14],x=i[15];if(n[0].setComponents(l-s,d-h,m-f,x-p).normalize(),n[1].setComponents(l+s,d+h,m+f,x+p).normalize(),n[2].setComponents(l+o,d+u,m+g,x+v).normalize(),n[3].setComponents(l-o,d-u,m-g,x-v).normalize(),n[4].setComponents(l-a,d-c,m-_,x-M).normalize(),t===Un)n[5].setComponents(l+a,d+c,m+_,x+M).normalize();else if(t===Nr)n[5].setComponents(a,c,_,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ri.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),ri.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ri)}intersectsSprite(e){return ri.center.set(0,0,0),ri.radius=.7071067811865476,ri.applyMatrix4(e.matrixWorld),this.intersectsSphere(ri)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(lr.x=i.normal.x>0?e.max.x:e.min.x,lr.y=i.normal.y>0?e.max.y:e.min.y,lr.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(lr)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Rh(){let r=null,e=!1,t=null,n=null;function i(s,o){t(s,o),n=r.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=r.requestAnimationFrame(i),e=!0)},stop:function(){r.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){r=s}}}function Dd(r){const e=new WeakMap;function t(a,l){const h=a.array,u=a.usage,c=h.byteLength,d=r.createBuffer();r.bindBuffer(l,d),r.bufferData(l,h,u),a.onUploadCallback();let f;if(h instanceof Float32Array)f=r.FLOAT;else if(h instanceof Uint16Array)a.isFloat16BufferAttribute?f=r.HALF_FLOAT:f=r.UNSIGNED_SHORT;else if(h instanceof Int16Array)f=r.SHORT;else if(h instanceof Uint32Array)f=r.UNSIGNED_INT;else if(h instanceof Int32Array)f=r.INT;else if(h instanceof Int8Array)f=r.BYTE;else if(h instanceof Uint8Array)f=r.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)f=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:d,type:f,bytesPerElement:h.BYTES_PER_ELEMENT,version:a.version,size:c}}function n(a,l,h){const u=l.array,c=l.updateRanges;if(r.bindBuffer(h,a),c.length===0)r.bufferSubData(h,0,u);else{c.sort((f,g)=>f.start-g.start);let d=0;for(let f=1;f<c.length;f++){const g=c[d],_=c[f];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++d,c[d]=_)}c.length=d+1;for(let f=0,g=c.length;f<g;f++){const _=c[f];r.bufferSubData(h,_.start*u.BYTES_PER_ELEMENT,u,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function i(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(r.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const h=e.get(a);if(h===void 0)e.set(a,t(a,l));else if(h.version<a.version){if(h.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(h.buffer,a,l),h.version=a.version}}return{get:i,remove:s,update:o}}class Ot extends mt{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const s=e/2,o=t/2,a=Math.floor(n),l=Math.floor(i),h=a+1,u=l+1,c=e/a,d=t/l,f=[],g=[],_=[],m=[];for(let p=0;p<u;p++){const v=p*d-o;for(let M=0;M<h;M++){const x=M*c-s;g.push(x,-v,0),_.push(0,0,1),m.push(M/a),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let v=0;v<a;v++){const M=v+h*p,x=v+h*(p+1),C=v+1+h*(p+1),w=v+1+h*p;f.push(M,x,w),f.push(x,C,w)}this.setIndex(f),this.setAttribute("position",new et(g,3)),this.setAttribute("normal",new et(_,3)),this.setAttribute("uv",new et(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ot(e.width,e.height,e.widthSegments,e.heightSegments)}}var Nd=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Ud=`#ifdef USE_ALPHAHASH
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
#endif`,Fd=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Bd=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Od=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,zd=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,kd=`#ifdef USE_AOMAP
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
#endif`,Gd=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Hd=`#ifdef USE_BATCHING
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
#endif`,Vd=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Wd=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Xd=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,qd=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Yd=`#ifdef USE_IRIDESCENCE
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
#endif`,jd=`#ifdef USE_BUMPMAP
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
#endif`,Kd=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,$d=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Zd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Jd=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Qd=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,ef=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,tf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,nf=`#if defined( USE_COLOR_ALPHA )
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
#endif`,sf=`#define PI 3.141592653589793
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
} // validated`,rf=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,of=`vec3 transformedNormal = objectNormal;
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
#endif`,af=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,lf=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,cf=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,hf=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,uf="gl_FragColor = linearToOutputTexel( gl_FragColor );",df=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,ff=`#ifdef USE_ENVMAP
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
#endif`,pf=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,mf=`#ifdef USE_ENVMAP
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
#endif`,gf=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,_f=`#ifdef USE_ENVMAP
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
#endif`,vf=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,xf=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,yf=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Mf=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Sf=`#ifdef USE_GRADIENTMAP
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
}`,Tf=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,bf=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,wf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Ef=`uniform bool receiveShadow;
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
#endif`,Af=`#ifdef USE_ENVMAP
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
#endif`,Cf=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Rf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Pf=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Lf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,If=`PhysicalMaterial material;
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
#endif`,Df=`struct PhysicalMaterial {
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
}`,Nf=`
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
#endif`,Uf=`#if defined( RE_IndirectDiffuse )
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
#endif`,Ff=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Bf=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Of=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,zf=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,kf=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Gf=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Hf=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Vf=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Wf=`#if defined( USE_POINTS_UV )
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
#endif`,Xf=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,qf=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Yf=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,jf=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Kf=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,$f=`#ifdef USE_MORPHTARGETS
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
#endif`,Zf=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Jf=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Qf=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,ep=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,tp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,np=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,ip=`#ifdef USE_NORMALMAP
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
#endif`,sp=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,rp=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,op=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,ap=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,lp=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,cp=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,hp=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,up=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,dp=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,fp=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,pp=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,mp=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,gp=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,_p=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,vp=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,xp=`float getShadowMask() {
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
}`,yp=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Mp=`#ifdef USE_SKINNING
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
#endif`,Sp=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Tp=`#ifdef USE_SKINNING
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
#endif`,bp=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,wp=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Ep=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Ap=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Cp=`#ifdef USE_TRANSMISSION
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
#endif`,Rp=`#ifdef USE_TRANSMISSION
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
#endif`,Pp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Lp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Ip=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Dp=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Np=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Up=`uniform sampler2D t2D;
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
}`,Fp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Bp=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Op=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,zp=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,kp=`#include <common>
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
}`,Gp=`#if DEPTH_PACKING == 3200
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
}`,Hp=`#define DISTANCE
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
}`,Vp=`#define DISTANCE
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
}`,Wp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Xp=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,qp=`uniform float scale;
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
}`,Yp=`uniform vec3 diffuse;
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
}`,jp=`#include <common>
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
}`,Kp=`uniform vec3 diffuse;
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
}`,$p=`#define LAMBERT
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
}`,Zp=`#define LAMBERT
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
}`,Jp=`#define MATCAP
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
}`,Qp=`#define MATCAP
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
}`,em=`#define NORMAL
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
}`,tm=`#define NORMAL
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
}`,nm=`#define PHONG
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
}`,im=`#define PHONG
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
}`,sm=`#define STANDARD
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
}`,rm=`#define STANDARD
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
}`,om=`#define TOON
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
}`,am=`#define TOON
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
}`,lm=`uniform float size;
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
}`,cm=`uniform vec3 diffuse;
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
}`,hm=`#include <common>
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
}`,um=`uniform vec3 color;
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
}`,dm=`uniform float rotation;
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
}`,fm=`uniform vec3 diffuse;
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
}`,Fe={alphahash_fragment:Nd,alphahash_pars_fragment:Ud,alphamap_fragment:Fd,alphamap_pars_fragment:Bd,alphatest_fragment:Od,alphatest_pars_fragment:zd,aomap_fragment:kd,aomap_pars_fragment:Gd,batching_pars_vertex:Hd,batching_vertex:Vd,begin_vertex:Wd,beginnormal_vertex:Xd,bsdfs:qd,iridescence_fragment:Yd,bumpmap_pars_fragment:jd,clipping_planes_fragment:Kd,clipping_planes_pars_fragment:$d,clipping_planes_pars_vertex:Zd,clipping_planes_vertex:Jd,color_fragment:Qd,color_pars_fragment:ef,color_pars_vertex:tf,color_vertex:nf,common:sf,cube_uv_reflection_fragment:rf,defaultnormal_vertex:of,displacementmap_pars_vertex:af,displacementmap_vertex:lf,emissivemap_fragment:cf,emissivemap_pars_fragment:hf,colorspace_fragment:uf,colorspace_pars_fragment:df,envmap_fragment:ff,envmap_common_pars_fragment:pf,envmap_pars_fragment:mf,envmap_pars_vertex:gf,envmap_physical_pars_fragment:Af,envmap_vertex:_f,fog_vertex:vf,fog_pars_vertex:xf,fog_fragment:yf,fog_pars_fragment:Mf,gradientmap_pars_fragment:Sf,lightmap_pars_fragment:Tf,lights_lambert_fragment:bf,lights_lambert_pars_fragment:wf,lights_pars_begin:Ef,lights_toon_fragment:Cf,lights_toon_pars_fragment:Rf,lights_phong_fragment:Pf,lights_phong_pars_fragment:Lf,lights_physical_fragment:If,lights_physical_pars_fragment:Df,lights_fragment_begin:Nf,lights_fragment_maps:Uf,lights_fragment_end:Ff,logdepthbuf_fragment:Bf,logdepthbuf_pars_fragment:Of,logdepthbuf_pars_vertex:zf,logdepthbuf_vertex:kf,map_fragment:Gf,map_pars_fragment:Hf,map_particle_fragment:Vf,map_particle_pars_fragment:Wf,metalnessmap_fragment:Xf,metalnessmap_pars_fragment:qf,morphinstance_vertex:Yf,morphcolor_vertex:jf,morphnormal_vertex:Kf,morphtarget_pars_vertex:$f,morphtarget_vertex:Zf,normal_fragment_begin:Jf,normal_fragment_maps:Qf,normal_pars_fragment:ep,normal_pars_vertex:tp,normal_vertex:np,normalmap_pars_fragment:ip,clearcoat_normal_fragment_begin:sp,clearcoat_normal_fragment_maps:rp,clearcoat_pars_fragment:op,iridescence_pars_fragment:ap,opaque_fragment:lp,packing:cp,premultiplied_alpha_fragment:hp,project_vertex:up,dithering_fragment:dp,dithering_pars_fragment:fp,roughnessmap_fragment:pp,roughnessmap_pars_fragment:mp,shadowmap_pars_fragment:gp,shadowmap_pars_vertex:_p,shadowmap_vertex:vp,shadowmask_pars_fragment:xp,skinbase_vertex:yp,skinning_pars_vertex:Mp,skinning_vertex:Sp,skinnormal_vertex:Tp,specularmap_fragment:bp,specularmap_pars_fragment:wp,tonemapping_fragment:Ep,tonemapping_pars_fragment:Ap,transmission_fragment:Cp,transmission_pars_fragment:Rp,uv_pars_fragment:Pp,uv_pars_vertex:Lp,uv_vertex:Ip,worldpos_vertex:Dp,background_vert:Np,background_frag:Up,backgroundCube_vert:Fp,backgroundCube_frag:Bp,cube_vert:Op,cube_frag:zp,depth_vert:kp,depth_frag:Gp,distanceRGBA_vert:Hp,distanceRGBA_frag:Vp,equirect_vert:Wp,equirect_frag:Xp,linedashed_vert:qp,linedashed_frag:Yp,meshbasic_vert:jp,meshbasic_frag:Kp,meshlambert_vert:$p,meshlambert_frag:Zp,meshmatcap_vert:Jp,meshmatcap_frag:Qp,meshnormal_vert:em,meshnormal_frag:tm,meshphong_vert:nm,meshphong_frag:im,meshphysical_vert:sm,meshphysical_frag:rm,meshtoon_vert:om,meshtoon_frag:am,points_vert:lm,points_frag:cm,shadow_vert:hm,shadow_frag:um,sprite_vert:dm,sprite_frag:fm},ne={common:{diffuse:{value:new pe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ne},alphaMap:{value:null},alphaMapTransform:{value:new Ne},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ne}},envmap:{envMap:{value:null},envMapRotation:{value:new Ne},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ne}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ne}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ne},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ne},normalScale:{value:new Q(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ne},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ne}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ne}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ne}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new pe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new pe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ne},alphaTest:{value:0},uvTransform:{value:new Ne}},sprite:{diffuse:{value:new pe(16777215)},opacity:{value:1},center:{value:new Q(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ne},alphaMap:{value:null},alphaMapTransform:{value:new Ne},alphaTest:{value:0}}},pn={basic:{uniforms:It([ne.common,ne.specularmap,ne.envmap,ne.aomap,ne.lightmap,ne.fog]),vertexShader:Fe.meshbasic_vert,fragmentShader:Fe.meshbasic_frag},lambert:{uniforms:It([ne.common,ne.specularmap,ne.envmap,ne.aomap,ne.lightmap,ne.emissivemap,ne.bumpmap,ne.normalmap,ne.displacementmap,ne.fog,ne.lights,{emissive:{value:new pe(0)}}]),vertexShader:Fe.meshlambert_vert,fragmentShader:Fe.meshlambert_frag},phong:{uniforms:It([ne.common,ne.specularmap,ne.envmap,ne.aomap,ne.lightmap,ne.emissivemap,ne.bumpmap,ne.normalmap,ne.displacementmap,ne.fog,ne.lights,{emissive:{value:new pe(0)},specular:{value:new pe(1118481)},shininess:{value:30}}]),vertexShader:Fe.meshphong_vert,fragmentShader:Fe.meshphong_frag},standard:{uniforms:It([ne.common,ne.envmap,ne.aomap,ne.lightmap,ne.emissivemap,ne.bumpmap,ne.normalmap,ne.displacementmap,ne.roughnessmap,ne.metalnessmap,ne.fog,ne.lights,{emissive:{value:new pe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Fe.meshphysical_vert,fragmentShader:Fe.meshphysical_frag},toon:{uniforms:It([ne.common,ne.aomap,ne.lightmap,ne.emissivemap,ne.bumpmap,ne.normalmap,ne.displacementmap,ne.gradientmap,ne.fog,ne.lights,{emissive:{value:new pe(0)}}]),vertexShader:Fe.meshtoon_vert,fragmentShader:Fe.meshtoon_frag},matcap:{uniforms:It([ne.common,ne.bumpmap,ne.normalmap,ne.displacementmap,ne.fog,{matcap:{value:null}}]),vertexShader:Fe.meshmatcap_vert,fragmentShader:Fe.meshmatcap_frag},points:{uniforms:It([ne.points,ne.fog]),vertexShader:Fe.points_vert,fragmentShader:Fe.points_frag},dashed:{uniforms:It([ne.common,ne.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Fe.linedashed_vert,fragmentShader:Fe.linedashed_frag},depth:{uniforms:It([ne.common,ne.displacementmap]),vertexShader:Fe.depth_vert,fragmentShader:Fe.depth_frag},normal:{uniforms:It([ne.common,ne.bumpmap,ne.normalmap,ne.displacementmap,{opacity:{value:1}}]),vertexShader:Fe.meshnormal_vert,fragmentShader:Fe.meshnormal_frag},sprite:{uniforms:It([ne.sprite,ne.fog]),vertexShader:Fe.sprite_vert,fragmentShader:Fe.sprite_frag},background:{uniforms:{uvTransform:{value:new Ne},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Fe.background_vert,fragmentShader:Fe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ne}},vertexShader:Fe.backgroundCube_vert,fragmentShader:Fe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Fe.cube_vert,fragmentShader:Fe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Fe.equirect_vert,fragmentShader:Fe.equirect_frag},distanceRGBA:{uniforms:It([ne.common,ne.displacementmap,{referencePosition:{value:new E},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Fe.distanceRGBA_vert,fragmentShader:Fe.distanceRGBA_frag},shadow:{uniforms:It([ne.lights,ne.fog,{color:{value:new pe(0)},opacity:{value:1}}]),vertexShader:Fe.shadow_vert,fragmentShader:Fe.shadow_frag}};pn.physical={uniforms:It([pn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ne},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ne},clearcoatNormalScale:{value:new Q(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ne},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ne},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ne},sheen:{value:0},sheenColor:{value:new pe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ne},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ne},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ne},transmissionSamplerSize:{value:new Q},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ne},attenuationDistance:{value:0},attenuationColor:{value:new pe(0)},specularColor:{value:new pe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ne},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ne},anisotropyVector:{value:new Q},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ne}}]),vertexShader:Fe.meshphysical_vert,fragmentShader:Fe.meshphysical_frag};const cr={r:0,b:0,g:0},oi=new un,pm=new Re;function mm(r,e,t,n,i,s,o){const a=new pe(0);let l=s===!0?0:1,h,u,c=null,d=0,f=null;function g(v){let M=v.isScene===!0?v.background:null;return M&&M.isTexture&&(M=(v.backgroundBlurriness>0?t:e).get(M)),M}function _(v){let M=!1;const x=g(v);x===null?p(a,l):x&&x.isColor&&(p(x,1),M=!0);const C=r.xr.getEnvironmentBlendMode();C==="additive"?n.buffers.color.setClear(0,0,0,1,o):C==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(r.autoClear||M)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function m(v,M){const x=g(M);x&&(x.isCubeTexture||x.mapping===Or)?(u===void 0&&(u=new be(new _i(1,1,1),new vt({name:"BackgroundCubeMaterial",uniforms:ts(pn.backgroundCube.uniforms),vertexShader:pn.backgroundCube.vertexShader,fragmentShader:pn.backgroundCube.fragmentShader,side:Nt,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(C,w,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(u)),oi.copy(M.backgroundRotation),oi.x*=-1,oi.y*=-1,oi.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(oi.y*=-1,oi.z*=-1),u.material.uniforms.envMap.value=x,u.material.uniforms.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=M.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(pm.makeRotationFromEuler(oi)),u.material.toneMapped=ke.getTransfer(x.colorSpace)!==Je,(c!==x||d!==x.version||f!==r.toneMapping)&&(u.material.needsUpdate=!0,c=x,d=x.version,f=r.toneMapping),u.layers.enableAll(),v.unshift(u,u.geometry,u.material,0,0,null)):x&&x.isTexture&&(h===void 0&&(h=new be(new Ot(2,2),new vt({name:"BackgroundMaterial",uniforms:ts(pn.background.uniforms),vertexShader:pn.background.vertexShader,fragmentShader:pn.background.fragmentShader,side:On,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),Object.defineProperty(h.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(h)),h.material.uniforms.t2D.value=x,h.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,h.material.toneMapped=ke.getTransfer(x.colorSpace)!==Je,x.matrixAutoUpdate===!0&&x.updateMatrix(),h.material.uniforms.uvTransform.value.copy(x.matrix),(c!==x||d!==x.version||f!==r.toneMapping)&&(h.material.needsUpdate=!0,c=x,d=x.version,f=r.toneMapping),h.layers.enableAll(),v.unshift(h,h.geometry,h.material,0,0,null))}function p(v,M){v.getRGB(cr,Eh(r)),n.buffers.color.setClear(cr.r,cr.g,cr.b,M,o)}return{getClearColor:function(){return a},setClearColor:function(v,M=1){a.set(v),l=M,p(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(v){l=v,p(a,l)},render:_,addToRenderList:m}}function gm(r,e){const t=r.getParameter(r.MAX_VERTEX_ATTRIBS),n={},i=d(null);let s=i,o=!1;function a(S,P,F,O,V){let X=!1;const W=c(O,F,P);s!==W&&(s=W,h(s.object)),X=f(S,O,F,V),X&&g(S,O,F,V),V!==null&&e.update(V,r.ELEMENT_ARRAY_BUFFER),(X||o)&&(o=!1,x(S,P,F,O),V!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,e.get(V).buffer))}function l(){return r.createVertexArray()}function h(S){return r.bindVertexArray(S)}function u(S){return r.deleteVertexArray(S)}function c(S,P,F){const O=F.wireframe===!0;let V=n[S.id];V===void 0&&(V={},n[S.id]=V);let X=V[P.id];X===void 0&&(X={},V[P.id]=X);let W=X[O];return W===void 0&&(W=d(l()),X[O]=W),W}function d(S){const P=[],F=[],O=[];for(let V=0;V<t;V++)P[V]=0,F[V]=0,O[V]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:P,enabledAttributes:F,attributeDivisors:O,object:S,attributes:{},index:null}}function f(S,P,F,O){const V=s.attributes,X=P.attributes;let W=0;const Z=F.getAttributes();for(const H in Z)if(Z[H].location>=0){const he=V[H];let Se=X[H];if(Se===void 0&&(H==="instanceMatrix"&&S.instanceMatrix&&(Se=S.instanceMatrix),H==="instanceColor"&&S.instanceColor&&(Se=S.instanceColor)),he===void 0||he.attribute!==Se||Se&&he.data!==Se.data)return!0;W++}return s.attributesNum!==W||s.index!==O}function g(S,P,F,O){const V={},X=P.attributes;let W=0;const Z=F.getAttributes();for(const H in Z)if(Z[H].location>=0){let he=X[H];he===void 0&&(H==="instanceMatrix"&&S.instanceMatrix&&(he=S.instanceMatrix),H==="instanceColor"&&S.instanceColor&&(he=S.instanceColor));const Se={};Se.attribute=he,he&&he.data&&(Se.data=he.data),V[H]=Se,W++}s.attributes=V,s.attributesNum=W,s.index=O}function _(){const S=s.newAttributes;for(let P=0,F=S.length;P<F;P++)S[P]=0}function m(S){p(S,0)}function p(S,P){const F=s.newAttributes,O=s.enabledAttributes,V=s.attributeDivisors;F[S]=1,O[S]===0&&(r.enableVertexAttribArray(S),O[S]=1),V[S]!==P&&(r.vertexAttribDivisor(S,P),V[S]=P)}function v(){const S=s.newAttributes,P=s.enabledAttributes;for(let F=0,O=P.length;F<O;F++)P[F]!==S[F]&&(r.disableVertexAttribArray(F),P[F]=0)}function M(S,P,F,O,V,X,W){W===!0?r.vertexAttribIPointer(S,P,F,V,X):r.vertexAttribPointer(S,P,F,O,V,X)}function x(S,P,F,O){_();const V=O.attributes,X=F.getAttributes(),W=P.defaultAttributeValues;for(const Z in X){const H=X[Z];if(H.location>=0){let se=V[Z];if(se===void 0&&(Z==="instanceMatrix"&&S.instanceMatrix&&(se=S.instanceMatrix),Z==="instanceColor"&&S.instanceColor&&(se=S.instanceColor)),se!==void 0){const he=se.normalized,Se=se.itemSize,Be=e.get(se);if(Be===void 0)continue;const tt=Be.buffer,Y=Be.type,te=Be.bytesPerElement,xe=Y===r.INT||Y===r.UNSIGNED_INT||se.gpuType===Ba;if(se.isInterleavedBufferAttribute){const re=se.data,Ae=re.stride,Le=se.offset;if(re.isInstancedInterleavedBuffer){for(let Oe=0;Oe<H.locationSize;Oe++)p(H.location+Oe,re.meshPerAttribute);S.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=re.meshPerAttribute*re.count)}else for(let Oe=0;Oe<H.locationSize;Oe++)m(H.location+Oe);r.bindBuffer(r.ARRAY_BUFFER,tt);for(let Oe=0;Oe<H.locationSize;Oe++)M(H.location+Oe,Se/H.locationSize,Y,he,Ae*te,(Le+Se/H.locationSize*Oe)*te,xe)}else{if(se.isInstancedBufferAttribute){for(let re=0;re<H.locationSize;re++)p(H.location+re,se.meshPerAttribute);S.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=se.meshPerAttribute*se.count)}else for(let re=0;re<H.locationSize;re++)m(H.location+re);r.bindBuffer(r.ARRAY_BUFFER,tt);for(let re=0;re<H.locationSize;re++)M(H.location+re,Se/H.locationSize,Y,he,Se*te,Se/H.locationSize*re*te,xe)}}else if(W!==void 0){const he=W[Z];if(he!==void 0)switch(he.length){case 2:r.vertexAttrib2fv(H.location,he);break;case 3:r.vertexAttrib3fv(H.location,he);break;case 4:r.vertexAttrib4fv(H.location,he);break;default:r.vertexAttrib1fv(H.location,he)}}}}v()}function C(){L();for(const S in n){const P=n[S];for(const F in P){const O=P[F];for(const V in O)u(O[V].object),delete O[V];delete P[F]}delete n[S]}}function w(S){if(n[S.id]===void 0)return;const P=n[S.id];for(const F in P){const O=P[F];for(const V in O)u(O[V].object),delete O[V];delete P[F]}delete n[S.id]}function A(S){for(const P in n){const F=n[P];if(F[S.id]===void 0)continue;const O=F[S.id];for(const V in O)u(O[V].object),delete O[V];delete F[S.id]}}function L(){b(),o=!0,s!==i&&(s=i,h(s.object))}function b(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:a,reset:L,resetDefaultState:b,dispose:C,releaseStatesOfGeometry:w,releaseStatesOfProgram:A,initAttributes:_,enableAttribute:m,disableUnusedAttributes:v}}function _m(r,e,t){let n;function i(h){n=h}function s(h,u){r.drawArrays(n,h,u),t.update(u,n,1)}function o(h,u,c){c!==0&&(r.drawArraysInstanced(n,h,u,c),t.update(u,n,c))}function a(h,u,c){if(c===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,h,0,u,0,c);let f=0;for(let g=0;g<c;g++)f+=u[g];t.update(f,n,1)}function l(h,u,c,d){if(c===0)return;const f=e.get("WEBGL_multi_draw");if(f===null)for(let g=0;g<h.length;g++)o(h[g],u[g],d[g]);else{f.multiDrawArraysInstancedWEBGL(n,h,0,u,0,d,0,c);let g=0;for(let _=0;_<c;_++)g+=u[_]*d[_];t.update(g,n,1)}}this.setMode=i,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function vm(r,e,t,n){let i;function s(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const A=e.get("EXT_texture_filter_anisotropic");i=r.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(A){return!(A!==Zt&&n.convert(A)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(A){const L=A===gn&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(A!==zn&&n.convert(A)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&A!==ln&&!L)}function l(A){if(A==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let h=t.precision!==void 0?t.precision:"highp";const u=l(h);u!==h&&(console.warn("THREE.WebGLRenderer:",h,"not supported, using",u,"instead."),h=u);const c=t.logarithmicDepthBuffer===!0,d=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),f=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),g=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=r.getParameter(r.MAX_TEXTURE_SIZE),m=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),p=r.getParameter(r.MAX_VERTEX_ATTRIBS),v=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),M=r.getParameter(r.MAX_VARYING_VECTORS),x=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),C=g>0,w=r.getParameter(r.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:h,logarithmicDepthBuffer:c,reverseDepthBuffer:d,maxTextures:f,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:v,maxVaryings:M,maxFragmentUniforms:x,vertexTextures:C,maxSamples:w}}function xm(r){const e=this;let t=null,n=0,i=!1,s=!1;const o=new di,a=new Ne,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(c,d){const f=c.length!==0||d||n!==0||i;return i=d,n=c.length,f},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(c,d){t=u(c,d,0)},this.setState=function(c,d,f){const g=c.clippingPlanes,_=c.clipIntersection,m=c.clipShadows,p=r.get(c);if(!i||g===null||g.length===0||s&&!m)s?u(null):h();else{const v=s?0:n,M=v*4;let x=p.clippingState||null;l.value=x,x=u(g,d,M,f);for(let C=0;C!==M;++C)x[C]=t[C];p.clippingState=x,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=v}};function h(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(c,d,f,g){const _=c!==null?c.length:0;let m=null;if(_!==0){if(m=l.value,g!==!0||m===null){const p=f+_*4,v=d.matrixWorldInverse;a.getNormalMatrix(v),(m===null||m.length<p)&&(m=new Float32Array(p));for(let M=0,x=f;M!==_;++M,x+=4)o.copy(c[M]).applyMatrix4(v,a),o.normal.toArray(m,x),m[x+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,m}}function ym(r){let e=new WeakMap;function t(o,a){return a===Ko?o.mapping=Ki:a===$o&&(o.mapping=$i),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===Ko||a===$o)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const h=new Pd(l.height);return h.fromEquirectangularTexture(r,o),e.set(o,h),o.addEventListener("dispose",i),t(h.texture,o.mapping)}else return null}}return o}function i(o){const a=o.target;a.removeEventListener("dispose",i);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:n,dispose:s}}class kr extends Ah{constructor(e=-1,t=1,n=1,i=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let s=n-e,o=n+e,a=i+t,l=i-t;if(this.view!==null&&this.view.enabled){const h=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=h*this.view.offsetX,o=s+h*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Vi=4,Wl=[.125,.215,.35,.446,.526,.582],mi=20,po=new kr,Xl=new pe;let mo=null,go=0,_o=0,vo=!1;const fi=(1+Math.sqrt(5))/2,Di=1/fi,ql=[new E(-fi,Di,0),new E(fi,Di,0),new E(-Di,0,fi),new E(Di,0,fi),new E(0,fi,-Di),new E(0,fi,Di),new E(-1,1,-1),new E(1,1,-1),new E(-1,1,1),new E(1,1,1)];class Yl{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100){mo=this._renderer.getRenderTarget(),go=this._renderer.getActiveCubeFace(),_o=this._renderer.getActiveMipmapLevel(),vo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,n,i,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=$l(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Kl(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(mo,go,_o),this._renderer.xr.enabled=vo,e.scissorTest=!1,hr(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Ki||e.mapping===$i?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),mo=this._renderer.getRenderTarget(),go=this._renderer.getActiveCubeFace(),_o=this._renderer.getActiveMipmapLevel(),vo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Wt,minFilter:Wt,generateMipmaps:!1,type:gn,format:Zt,colorSpace:Ft,depthBuffer:!1},i=jl(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=jl(e,t,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Mm(s)),this._blurMaterial=Sm(s,e,t)}return i}_compileMaterial(e){const t=new be(this._lodPlanes[0],e);this._renderer.compile(t,po)}_sceneToCubeUV(e,t,n,i){const a=new Dt(90,1,t,n),l=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],u=this._renderer,c=u.autoClear,d=u.toneMapping;u.getClearColor(Xl),u.toneMapping=ei,u.autoClear=!1;const f=new _t({name:"PMREM.Background",side:Nt,depthWrite:!1,depthTest:!1}),g=new be(new _i,f);let _=!1;const m=e.background;m?m.isColor&&(f.color.copy(m),e.background=null,_=!0):(f.color.copy(Xl),_=!0);for(let p=0;p<6;p++){const v=p%3;v===0?(a.up.set(0,l[p],0),a.lookAt(h[p],0,0)):v===1?(a.up.set(0,0,l[p]),a.lookAt(0,h[p],0)):(a.up.set(0,l[p],0),a.lookAt(0,0,h[p]));const M=this._cubeSize;hr(i,v*M,p>2?M:0,M,M),u.setRenderTarget(i),_&&u.render(g,a),u.render(e,a)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=d,u.autoClear=c,e.background=m}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===Ki||e.mapping===$i;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=$l()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Kl());const s=i?this._cubemapMaterial:this._equirectMaterial,o=new be(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;hr(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(o,po)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const i=this._lodPlanes.length;for(let s=1;s<i;s++){const o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=ql[(i-s-1)%ql.length];this._blur(e,s-1,s,o,a)}t.autoClear=n}_blur(e,t,n,i,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,i,"latitudinal",s),this._halfBlur(o,e,n,n,i,"longitudinal",s)}_halfBlur(e,t,n,i,s,o,a){const l=this._renderer,h=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,c=new be(this._lodPlanes[i],h),d=h.uniforms,f=this._sizeLods[n]-1,g=isFinite(s)?Math.PI/(2*f):2*Math.PI/(2*mi-1),_=s/g,m=isFinite(s)?1+Math.floor(u*_):mi;m>mi&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${mi}`);const p=[];let v=0;for(let A=0;A<mi;++A){const L=A/_,b=Math.exp(-L*L/2);p.push(b),A===0?v+=b:A<m&&(v+=2*b)}for(let A=0;A<p.length;A++)p[A]=p[A]/v;d.envMap.value=e.texture,d.samples.value=m,d.weights.value=p,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:M}=this;d.dTheta.value=g,d.mipInt.value=M-n;const x=this._sizeLods[i],C=3*x*(i>M-Vi?i-M+Vi:0),w=4*(this._cubeSize-x);hr(t,C,w,3*x,2*x),l.setRenderTarget(t),l.render(c,po)}}function Mm(r){const e=[],t=[],n=[];let i=r;const s=r-Vi+1+Wl.length;for(let o=0;o<s;o++){const a=Math.pow(2,i);t.push(a);let l=1/a;o>r-Vi?l=Wl[o-r+Vi-1]:o===0&&(l=0),n.push(l);const h=1/(a-2),u=-h,c=1+h,d=[u,u,c,u,c,c,u,u,c,c,u,c],f=6,g=6,_=3,m=2,p=1,v=new Float32Array(_*g*f),M=new Float32Array(m*g*f),x=new Float32Array(p*g*f);for(let w=0;w<f;w++){const A=w%3*2/3-1,L=w>2?0:-1,b=[A,L,0,A+2/3,L,0,A+2/3,L+1,0,A,L,0,A+2/3,L+1,0,A,L+1,0];v.set(b,_*g*w),M.set(d,m*g*w);const S=[w,w,w,w,w,w];x.set(S,p*g*w)}const C=new mt;C.setAttribute("position",new yt(v,_)),C.setAttribute("uv",new yt(M,m)),C.setAttribute("faceIndex",new yt(x,p)),e.push(C),i>Vi&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function jl(r,e,t){const n=new Jt(r,e,t);return n.texture.mapping=Or,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function hr(r,e,t,n,i){r.viewport.set(e,t,n,i),r.scissor.set(e,t,n,i)}function Sm(r,e,t){const n=new Float32Array(mi),i=new E(0,1,0);return new vt({name:"SphericalGaussianBlur",defines:{n:mi,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:ja(),fragmentShader:`

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
		`,blending:Fn,depthTest:!1,depthWrite:!1})}function Kl(){return new vt({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ja(),fragmentShader:`

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
		`,blending:Fn,depthTest:!1,depthWrite:!1})}function $l(){return new vt({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ja(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Fn,depthTest:!1,depthWrite:!1})}function ja(){return`

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
	`}function Tm(r){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){const l=a.mapping,h=l===Ko||l===$o,u=l===Ki||l===$i;if(h||u){let c=e.get(a);const d=c!==void 0?c.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return t===null&&(t=new Yl(r)),c=h?t.fromEquirectangular(a,c):t.fromCubemap(a,c),c.texture.pmremVersion=a.pmremVersion,e.set(a,c),c.texture;if(c!==void 0)return c.texture;{const f=a.image;return h&&f&&f.height>0||u&&f&&i(f)?(t===null&&(t=new Yl(r)),c=h?t.fromEquirectangular(a):t.fromCubemap(a),c.texture.pmremVersion=a.pmremVersion,e.set(a,c),a.addEventListener("dispose",s),c.texture):null}}}return a}function i(a){let l=0;const h=6;for(let u=0;u<h;u++)a[u]!==void 0&&l++;return l===h}function s(a){const l=a.target;l.removeEventListener("dispose",s);const h=e.get(l);h!==void 0&&(e.delete(l),h.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function bm(r){const e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=r.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const i=t(n);return i===null&&As("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function wm(r,e,t,n){const i={},s=new WeakMap;function o(c){const d=c.target;d.index!==null&&e.remove(d.index);for(const g in d.attributes)e.remove(d.attributes[g]);for(const g in d.morphAttributes){const _=d.morphAttributes[g];for(let m=0,p=_.length;m<p;m++)e.remove(_[m])}d.removeEventListener("dispose",o),delete i[d.id];const f=s.get(d);f&&(e.remove(f),s.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function a(c,d){return i[d.id]===!0||(d.addEventListener("dispose",o),i[d.id]=!0,t.memory.geometries++),d}function l(c){const d=c.attributes;for(const g in d)e.update(d[g],r.ARRAY_BUFFER);const f=c.morphAttributes;for(const g in f){const _=f[g];for(let m=0,p=_.length;m<p;m++)e.update(_[m],r.ARRAY_BUFFER)}}function h(c){const d=[],f=c.index,g=c.attributes.position;let _=0;if(f!==null){const v=f.array;_=f.version;for(let M=0,x=v.length;M<x;M+=3){const C=v[M+0],w=v[M+1],A=v[M+2];d.push(C,w,w,A,A,C)}}else if(g!==void 0){const v=g.array;_=g.version;for(let M=0,x=v.length/3-1;M<x;M+=3){const C=M+0,w=M+1,A=M+2;d.push(C,w,w,A,A,C)}}else return;const m=new(yh(d)?wh:bh)(d,1);m.version=_;const p=s.get(c);p&&e.remove(p),s.set(c,m)}function u(c){const d=s.get(c);if(d){const f=c.index;f!==null&&d.version<f.version&&h(c)}else h(c);return s.get(c)}return{get:a,update:l,getWireframeAttribute:u}}function Em(r,e,t){let n;function i(d){n=d}let s,o;function a(d){s=d.type,o=d.bytesPerElement}function l(d,f){r.drawElements(n,f,s,d*o),t.update(f,n,1)}function h(d,f,g){g!==0&&(r.drawElementsInstanced(n,f,s,d*o,g),t.update(f,n,g))}function u(d,f,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,s,d,0,g);let m=0;for(let p=0;p<g;p++)m+=f[p];t.update(m,n,1)}function c(d,f,g,_){if(g===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<d.length;p++)h(d[p]/o,f[p],_[p]);else{m.multiDrawElementsInstancedWEBGL(n,f,0,s,d,0,_,0,g);let p=0;for(let v=0;v<g;v++)p+=f[v]*_[v];t.update(p,n,1)}}this.setMode=i,this.setIndex=a,this.render=l,this.renderInstances=h,this.renderMultiDraw=u,this.renderMultiDrawInstances=c}function Am(r){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,o,a){switch(t.calls++,o){case r.TRIANGLES:t.triangles+=a*(s/3);break;case r.LINES:t.lines+=a*(s/2);break;case r.LINE_STRIP:t.lines+=a*(s-1);break;case r.LINE_LOOP:t.lines+=a*s;break;case r.POINTS:t.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function Cm(r,e,t){const n=new WeakMap,i=new Ye;function s(o,a,l){const h=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,c=u!==void 0?u.length:0;let d=n.get(a);if(d===void 0||d.count!==c){let S=function(){L.dispose(),n.delete(a),a.removeEventListener("dispose",S)};var f=S;d!==void 0&&d.texture.dispose();const g=a.morphAttributes.position!==void 0,_=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],v=a.morphAttributes.normal||[],M=a.morphAttributes.color||[];let x=0;g===!0&&(x=1),_===!0&&(x=2),m===!0&&(x=3);let C=a.attributes.position.count*x,w=1;C>e.maxTextureSize&&(w=Math.ceil(C/e.maxTextureSize),C=e.maxTextureSize);const A=new Float32Array(C*w*4*c),L=new Sh(A,C,w,c);L.type=ln,L.needsUpdate=!0;const b=x*4;for(let P=0;P<c;P++){const F=p[P],O=v[P],V=M[P],X=C*w*4*P;for(let W=0;W<F.count;W++){const Z=W*b;g===!0&&(i.fromBufferAttribute(F,W),A[X+Z+0]=i.x,A[X+Z+1]=i.y,A[X+Z+2]=i.z,A[X+Z+3]=0),_===!0&&(i.fromBufferAttribute(O,W),A[X+Z+4]=i.x,A[X+Z+5]=i.y,A[X+Z+6]=i.z,A[X+Z+7]=0),m===!0&&(i.fromBufferAttribute(V,W),A[X+Z+8]=i.x,A[X+Z+9]=i.y,A[X+Z+10]=i.z,A[X+Z+11]=V.itemSize===4?i.w:1)}}d={count:c,texture:L,size:new Q(C,w)},n.set(a,d),a.addEventListener("dispose",S)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(r,"morphTexture",o.morphTexture,t);else{let g=0;for(let m=0;m<h.length;m++)g+=h[m];const _=a.morphTargetsRelative?1:1-g;l.getUniforms().setValue(r,"morphTargetBaseInfluence",_),l.getUniforms().setValue(r,"morphTargetInfluences",h)}l.getUniforms().setValue(r,"morphTargetsTexture",d.texture,t),l.getUniforms().setValue(r,"morphTargetsTextureSize",d.size)}return{update:s}}function Rm(r,e,t,n){let i=new WeakMap;function s(l){const h=n.render.frame,u=l.geometry,c=e.get(l,u);if(i.get(c)!==h&&(e.update(c),i.set(c,h)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),i.get(l)!==h&&(t.update(l.instanceMatrix,r.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,r.ARRAY_BUFFER),i.set(l,h))),l.isSkinnedMesh){const d=l.skeleton;i.get(d)!==h&&(d.update(),i.set(d,h))}return c}function o(){i=new WeakMap}function a(l){const h=l.target;h.removeEventListener("dispose",a),t.remove(h.instanceMatrix),h.instanceColor!==null&&t.remove(h.instanceColor)}return{update:s,dispose:o}}class Ph extends xt{constructor(e,t,n,i,s,o,a,l,h,u=Wi){if(u!==Wi&&u!==Qi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===Wi&&(n=gi),n===void 0&&u===Qi&&(n=Ji),super(null,i,s,o,a,l,u,n,h),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:Ut,this.minFilter=l!==void 0?l:Ut,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const Lh=new xt,Zl=new Ph(1,1),Ih=new Sh,Dh=new md,Nh=new Ch,Jl=[],Ql=[],ec=new Float32Array(16),tc=new Float32Array(9),nc=new Float32Array(4);function os(r,e,t){const n=r[0];if(n<=0||n>0)return r;const i=e*t;let s=Jl[i];if(s===void 0&&(s=new Float32Array(i),Jl[i]=s),e!==0){n.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,r[o].toArray(s,a)}return s}function Mt(r,e){if(r.length!==e.length)return!1;for(let t=0,n=r.length;t<n;t++)if(r[t]!==e[t])return!1;return!0}function St(r,e){for(let t=0,n=e.length;t<n;t++)r[t]=e[t]}function Gr(r,e){let t=Ql[e];t===void 0&&(t=new Int32Array(e),Ql[e]=t);for(let n=0;n!==e;++n)t[n]=r.allocateTextureUnit();return t}function Pm(r,e){const t=this.cache;t[0]!==e&&(r.uniform1f(this.addr,e),t[0]=e)}function Lm(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Mt(t,e))return;r.uniform2fv(this.addr,e),St(t,e)}}function Im(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(r.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Mt(t,e))return;r.uniform3fv(this.addr,e),St(t,e)}}function Dm(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Mt(t,e))return;r.uniform4fv(this.addr,e),St(t,e)}}function Nm(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(Mt(t,e))return;r.uniformMatrix2fv(this.addr,!1,e),St(t,e)}else{if(Mt(t,n))return;nc.set(n),r.uniformMatrix2fv(this.addr,!1,nc),St(t,n)}}function Um(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(Mt(t,e))return;r.uniformMatrix3fv(this.addr,!1,e),St(t,e)}else{if(Mt(t,n))return;tc.set(n),r.uniformMatrix3fv(this.addr,!1,tc),St(t,n)}}function Fm(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(Mt(t,e))return;r.uniformMatrix4fv(this.addr,!1,e),St(t,e)}else{if(Mt(t,n))return;ec.set(n),r.uniformMatrix4fv(this.addr,!1,ec),St(t,n)}}function Bm(r,e){const t=this.cache;t[0]!==e&&(r.uniform1i(this.addr,e),t[0]=e)}function Om(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Mt(t,e))return;r.uniform2iv(this.addr,e),St(t,e)}}function zm(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Mt(t,e))return;r.uniform3iv(this.addr,e),St(t,e)}}function km(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Mt(t,e))return;r.uniform4iv(this.addr,e),St(t,e)}}function Gm(r,e){const t=this.cache;t[0]!==e&&(r.uniform1ui(this.addr,e),t[0]=e)}function Hm(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Mt(t,e))return;r.uniform2uiv(this.addr,e),St(t,e)}}function Vm(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Mt(t,e))return;r.uniform3uiv(this.addr,e),St(t,e)}}function Wm(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Mt(t,e))return;r.uniform4uiv(this.addr,e),St(t,e)}}function Xm(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i);let s;this.type===r.SAMPLER_2D_SHADOW?(Zl.compareFunction=xh,s=Zl):s=Lh,t.setTexture2D(e||s,i)}function qm(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||Dh,i)}function Ym(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||Nh,i)}function jm(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||Ih,i)}function Km(r){switch(r){case 5126:return Pm;case 35664:return Lm;case 35665:return Im;case 35666:return Dm;case 35674:return Nm;case 35675:return Um;case 35676:return Fm;case 5124:case 35670:return Bm;case 35667:case 35671:return Om;case 35668:case 35672:return zm;case 35669:case 35673:return km;case 5125:return Gm;case 36294:return Hm;case 36295:return Vm;case 36296:return Wm;case 35678:case 36198:case 36298:case 36306:case 35682:return Xm;case 35679:case 36299:case 36307:return qm;case 35680:case 36300:case 36308:case 36293:return Ym;case 36289:case 36303:case 36311:case 36292:return jm}}function $m(r,e){r.uniform1fv(this.addr,e)}function Zm(r,e){const t=os(e,this.size,2);r.uniform2fv(this.addr,t)}function Jm(r,e){const t=os(e,this.size,3);r.uniform3fv(this.addr,t)}function Qm(r,e){const t=os(e,this.size,4);r.uniform4fv(this.addr,t)}function eg(r,e){const t=os(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,t)}function tg(r,e){const t=os(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,t)}function ng(r,e){const t=os(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,t)}function ig(r,e){r.uniform1iv(this.addr,e)}function sg(r,e){r.uniform2iv(this.addr,e)}function rg(r,e){r.uniform3iv(this.addr,e)}function og(r,e){r.uniform4iv(this.addr,e)}function ag(r,e){r.uniform1uiv(this.addr,e)}function lg(r,e){r.uniform2uiv(this.addr,e)}function cg(r,e){r.uniform3uiv(this.addr,e)}function hg(r,e){r.uniform4uiv(this.addr,e)}function ug(r,e,t){const n=this.cache,i=e.length,s=Gr(t,i);Mt(n,s)||(r.uniform1iv(this.addr,s),St(n,s));for(let o=0;o!==i;++o)t.setTexture2D(e[o]||Lh,s[o])}function dg(r,e,t){const n=this.cache,i=e.length,s=Gr(t,i);Mt(n,s)||(r.uniform1iv(this.addr,s),St(n,s));for(let o=0;o!==i;++o)t.setTexture3D(e[o]||Dh,s[o])}function fg(r,e,t){const n=this.cache,i=e.length,s=Gr(t,i);Mt(n,s)||(r.uniform1iv(this.addr,s),St(n,s));for(let o=0;o!==i;++o)t.setTextureCube(e[o]||Nh,s[o])}function pg(r,e,t){const n=this.cache,i=e.length,s=Gr(t,i);Mt(n,s)||(r.uniform1iv(this.addr,s),St(n,s));for(let o=0;o!==i;++o)t.setTexture2DArray(e[o]||Ih,s[o])}function mg(r){switch(r){case 5126:return $m;case 35664:return Zm;case 35665:return Jm;case 35666:return Qm;case 35674:return eg;case 35675:return tg;case 35676:return ng;case 5124:case 35670:return ig;case 35667:case 35671:return sg;case 35668:case 35672:return rg;case 35669:case 35673:return og;case 5125:return ag;case 36294:return lg;case 36295:return cg;case 36296:return hg;case 35678:case 36198:case 36298:case 36306:case 35682:return ug;case 35679:case 36299:case 36307:return dg;case 35680:case 36300:case 36308:case 36293:return fg;case 36289:case 36303:case 36311:case 36292:return pg}}class gg{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Km(t.type)}}class _g{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=mg(t.type)}}class vg{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let s=0,o=i.length;s!==o;++s){const a=i[s];a.setValue(e,t[a.id],n)}}}const xo=/(\w+)(\])?(\[|\.)?/g;function ic(r,e){r.seq.push(e),r.map[e.id]=e}function xg(r,e,t){const n=r.name,i=n.length;for(xo.lastIndex=0;;){const s=xo.exec(n),o=xo.lastIndex;let a=s[1];const l=s[2]==="]",h=s[3];if(l&&(a=a|0),h===void 0||h==="["&&o+2===i){ic(t,h===void 0?new gg(a,r,e):new _g(a,r,e));break}else{let c=t.map[a];c===void 0&&(c=new vg(a),ic(t,c)),t=c}}}class Pr{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const s=e.getActiveUniform(t,i),o=e.getUniformLocation(t,s.name);xg(s,o,this)}}setValue(e,t,n,i){const s=this.map[t];s!==void 0&&s.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let s=0,o=t.length;s!==o;++s){const a=t[s],l=n[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,s=e.length;i!==s;++i){const o=e[i];o.id in t&&n.push(o)}return n}}function sc(r,e,t){const n=r.createShader(e);return r.shaderSource(n,t),r.compileShader(n),n}const yg=37297;let Mg=0;function Sg(r,e){const t=r.split(`
`),n=[],i=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=i;o<s;o++){const a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}const rc=new Ne;function Tg(r){ke._getMatrix(rc,ke.workingColorSpace,r);const e=`mat3( ${rc.elements.map(t=>t.toFixed(4))} )`;switch(ke.getTransfer(r)){case zr:return[e,"LinearTransferOETF"];case Je:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",r),[e,"LinearTransferOETF"]}}function oc(r,e,t){const n=r.getShaderParameter(e,r.COMPILE_STATUS),i=r.getShaderInfoLog(e).trim();if(n&&i==="")return"";const s=/ERROR: 0:(\d+)/.exec(i);if(s){const o=parseInt(s[1]);return t.toUpperCase()+`

`+i+`

`+Sg(r.getShaderSource(e),o)}else return i}function bg(r,e){const t=Tg(e);return[`vec4 ${r}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function wg(r,e){let t;switch(e){case th:t="Linear";break;case nh:t="Reinhard";break;case ih:t="Cineon";break;case Fa:t="ACESFilmic";break;case sh:t="AgX";break;case rh:t="Neutral";break;case Au:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+r+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const ur=new E;function Eg(){ke.getLuminanceCoefficients(ur);const r=ur.x.toFixed(4),e=ur.y.toFixed(4),t=ur.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Ag(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Cs).join(`
`)}function Cg(r){const e=[];for(const t in r){const n=r[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Rg(r,e){const t={},n=r.getProgramParameter(e,r.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const s=r.getActiveAttrib(e,i),o=s.name;let a=1;s.type===r.FLOAT_MAT2&&(a=2),s.type===r.FLOAT_MAT3&&(a=3),s.type===r.FLOAT_MAT4&&(a=4),t[o]={type:s.type,location:r.getAttribLocation(e,o),locationSize:a}}return t}function Cs(r){return r!==""}function ac(r,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function lc(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Pg=/^[ \t]*#include +<([\w\d./]+)>/gm;function wa(r){return r.replace(Pg,Ig)}const Lg=new Map;function Ig(r,e){let t=Fe[e];if(t===void 0){const n=Lg.get(e);if(n!==void 0)t=Fe[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return wa(t)}const Dg=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function cc(r){return r.replace(Dg,Ng)}function Ng(r,e,t,n){let i="";for(let s=parseInt(e);s<parseInt(t);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function hc(r){let e=`precision ${r.precision} float;
	precision ${r.precision} int;
	precision ${r.precision} sampler2D;
	precision ${r.precision} samplerCube;
	precision ${r.precision} sampler3D;
	precision ${r.precision} sampler2DArray;
	precision ${r.precision} sampler2DShadow;
	precision ${r.precision} samplerCubeShadow;
	precision ${r.precision} sampler2DArrayShadow;
	precision ${r.precision} isampler2D;
	precision ${r.precision} isampler3D;
	precision ${r.precision} isamplerCube;
	precision ${r.precision} isampler2DArray;
	precision ${r.precision} usampler2D;
	precision ${r.precision} usampler3D;
	precision ${r.precision} usamplerCube;
	precision ${r.precision} usampler2DArray;
	`;return r.precision==="highp"?e+=`
#define HIGH_PRECISION`:r.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Ug(r){let e="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===Jc?e="SHADOWMAP_TYPE_PCF":r.shadowMapType===Qc?e="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===In&&(e="SHADOWMAP_TYPE_VSM"),e}function Fg(r){let e="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case Ki:case $i:e="ENVMAP_TYPE_CUBE";break;case Or:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Bg(r){let e="ENVMAP_MODE_REFLECTION";if(r.envMap)switch(r.envMapMode){case $i:e="ENVMAP_MODE_REFRACTION";break}return e}function Og(r){let e="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case eh:e="ENVMAP_BLENDING_MULTIPLY";break;case wu:e="ENVMAP_BLENDING_MIX";break;case Eu:e="ENVMAP_BLENDING_ADD";break}return e}function zg(r){const e=r.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function kg(r,e,t,n){const i=r.getContext(),s=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=Ug(t),h=Fg(t),u=Bg(t),c=Og(t),d=zg(t),f=Ag(t),g=Cg(s),_=i.createProgram();let m,p,v=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Cs).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Cs).join(`
`),p.length>0&&(p+=`
`)):(m=[hc(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Cs).join(`
`),p=[hc(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",t.envMap?"#define "+c:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==ei?"#define TONE_MAPPING":"",t.toneMapping!==ei?Fe.tonemapping_pars_fragment:"",t.toneMapping!==ei?wg("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Fe.colorspace_pars_fragment,bg("linearToOutputTexel",t.outputColorSpace),Eg(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Cs).join(`
`)),o=wa(o),o=ac(o,t),o=lc(o,t),a=wa(a),a=ac(a,t),a=lc(a,t),o=cc(o),a=cc(a),t.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",t.glslVersion===Sl?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Sl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const M=v+m+o,x=v+p+a,C=sc(i,i.VERTEX_SHADER,M),w=sc(i,i.FRAGMENT_SHADER,x);i.attachShader(_,C),i.attachShader(_,w),t.index0AttributeName!==void 0?i.bindAttribLocation(_,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(_,0,"position"),i.linkProgram(_);function A(P){if(r.debug.checkShaderErrors){const F=i.getProgramInfoLog(_).trim(),O=i.getShaderInfoLog(C).trim(),V=i.getShaderInfoLog(w).trim();let X=!0,W=!0;if(i.getProgramParameter(_,i.LINK_STATUS)===!1)if(X=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(i,_,C,w);else{const Z=oc(i,C,"vertex"),H=oc(i,w,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(_,i.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+F+`
`+Z+`
`+H)}else F!==""?console.warn("THREE.WebGLProgram: Program Info Log:",F):(O===""||V==="")&&(W=!1);W&&(P.diagnostics={runnable:X,programLog:F,vertexShader:{log:O,prefix:m},fragmentShader:{log:V,prefix:p}})}i.deleteShader(C),i.deleteShader(w),L=new Pr(i,_),b=Rg(i,_)}let L;this.getUniforms=function(){return L===void 0&&A(this),L};let b;this.getAttributes=function(){return b===void 0&&A(this),b};let S=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return S===!1&&(S=i.getProgramParameter(_,yg)),S},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Mg++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=C,this.fragmentShader=w,this}let Gg=0;class Hg{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),s=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new Vg(e),t.set(e,n)),n}}class Vg{constructor(e){this.id=Gg++,this.code=e,this.usedTimes=0}}function Wg(r,e,t,n,i,s,o){const a=new qa,l=new Hg,h=new Set,u=[],c=i.logarithmicDepthBuffer,d=i.vertexTextures;let f=i.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(b){return h.add(b),b===0?"uv":`uv${b}`}function m(b,S,P,F,O){const V=F.fog,X=O.geometry,W=b.isMeshStandardMaterial?F.environment:null,Z=(b.isMeshStandardMaterial?t:e).get(b.envMap||W),H=Z&&Z.mapping===Or?Z.image.height:null,se=g[b.type];b.precision!==null&&(f=i.getMaxPrecision(b.precision),f!==b.precision&&console.warn("THREE.WebGLProgram.getParameters:",b.precision,"not supported, using",f,"instead."));const he=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,Se=he!==void 0?he.length:0;let Be=0;X.morphAttributes.position!==void 0&&(Be=1),X.morphAttributes.normal!==void 0&&(Be=2),X.morphAttributes.color!==void 0&&(Be=3);let tt,Y,te,xe;if(se){const Ze=pn[se];tt=Ze.vertexShader,Y=Ze.fragmentShader}else tt=b.vertexShader,Y=b.fragmentShader,l.update(b),te=l.getVertexShaderID(b),xe=l.getFragmentShaderID(b);const re=r.getRenderTarget(),Ae=r.state.buffers.depth.getReversed(),Le=O.isInstancedMesh===!0,Oe=O.isBatchedMesh===!0,ct=!!b.map,We=!!b.matcap,ut=!!Z,U=!!b.aoMap,qt=!!b.lightMap,Ge=!!b.bumpMap,He=!!b.normalMap,we=!!b.displacementMap,rt=!!b.emissiveMap,Te=!!b.metalnessMap,R=!!b.roughnessMap,y=b.anisotropy>0,B=b.clearcoat>0,j=b.dispersion>0,$=b.iridescence>0,q=b.sheen>0,ye=b.transmission>0,oe=y&&!!b.anisotropyMap,ue=B&&!!b.clearcoatMap,Xe=B&&!!b.clearcoatNormalMap,J=B&&!!b.clearcoatRoughnessMap,de=$&&!!b.iridescenceMap,Ee=$&&!!b.iridescenceThicknessMap,Ce=q&&!!b.sheenColorMap,fe=q&&!!b.sheenRoughnessMap,Ve=!!b.specularMap,Ue=!!b.specularColorMap,nt=!!b.specularIntensityMap,I=ye&&!!b.transmissionMap,ie=ye&&!!b.thicknessMap,G=!!b.gradientMap,K=!!b.alphaMap,ce=b.alphaTest>0,ae=!!b.alphaHash,Ie=!!b.extensions;let ht=ei;b.toneMapped&&(re===null||re.isXRRenderTarget===!0)&&(ht=r.toneMapping);const wt={shaderID:se,shaderType:b.type,shaderName:b.name,vertexShader:tt,fragmentShader:Y,defines:b.defines,customVertexShaderID:te,customFragmentShaderID:xe,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:f,batching:Oe,batchingColor:Oe&&O._colorsTexture!==null,instancing:Le,instancingColor:Le&&O.instanceColor!==null,instancingMorph:Le&&O.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:re===null?r.outputColorSpace:re.isXRRenderTarget===!0?re.texture.colorSpace:Ft,alphaToCoverage:!!b.alphaToCoverage,map:ct,matcap:We,envMap:ut,envMapMode:ut&&Z.mapping,envMapCubeUVHeight:H,aoMap:U,lightMap:qt,bumpMap:Ge,normalMap:He,displacementMap:d&&we,emissiveMap:rt,normalMapObjectSpace:He&&b.normalMapType===Fu,normalMapTangentSpace:He&&b.normalMapType===vh,metalnessMap:Te,roughnessMap:R,anisotropy:y,anisotropyMap:oe,clearcoat:B,clearcoatMap:ue,clearcoatNormalMap:Xe,clearcoatRoughnessMap:J,dispersion:j,iridescence:$,iridescenceMap:de,iridescenceThicknessMap:Ee,sheen:q,sheenColorMap:Ce,sheenRoughnessMap:fe,specularMap:Ve,specularColorMap:Ue,specularIntensityMap:nt,transmission:ye,transmissionMap:I,thicknessMap:ie,gradientMap:G,opaque:b.transparent===!1&&b.blending===Qn&&b.alphaToCoverage===!1,alphaMap:K,alphaTest:ce,alphaHash:ae,combine:b.combine,mapUv:ct&&_(b.map.channel),aoMapUv:U&&_(b.aoMap.channel),lightMapUv:qt&&_(b.lightMap.channel),bumpMapUv:Ge&&_(b.bumpMap.channel),normalMapUv:He&&_(b.normalMap.channel),displacementMapUv:we&&_(b.displacementMap.channel),emissiveMapUv:rt&&_(b.emissiveMap.channel),metalnessMapUv:Te&&_(b.metalnessMap.channel),roughnessMapUv:R&&_(b.roughnessMap.channel),anisotropyMapUv:oe&&_(b.anisotropyMap.channel),clearcoatMapUv:ue&&_(b.clearcoatMap.channel),clearcoatNormalMapUv:Xe&&_(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:J&&_(b.clearcoatRoughnessMap.channel),iridescenceMapUv:de&&_(b.iridescenceMap.channel),iridescenceThicknessMapUv:Ee&&_(b.iridescenceThicknessMap.channel),sheenColorMapUv:Ce&&_(b.sheenColorMap.channel),sheenRoughnessMapUv:fe&&_(b.sheenRoughnessMap.channel),specularMapUv:Ve&&_(b.specularMap.channel),specularColorMapUv:Ue&&_(b.specularColorMap.channel),specularIntensityMapUv:nt&&_(b.specularIntensityMap.channel),transmissionMapUv:I&&_(b.transmissionMap.channel),thicknessMapUv:ie&&_(b.thicknessMap.channel),alphaMapUv:K&&_(b.alphaMap.channel),vertexTangents:!!X.attributes.tangent&&(He||y),vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,pointsUvs:O.isPoints===!0&&!!X.attributes.uv&&(ct||K),fog:!!V,useFog:b.fog===!0,fogExp2:!!V&&V.isFogExp2,flatShading:b.flatShading===!0,sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:c,reverseDepthBuffer:Ae,skinning:O.isSkinnedMesh===!0,morphTargets:X.morphAttributes.position!==void 0,morphNormals:X.morphAttributes.normal!==void 0,morphColors:X.morphAttributes.color!==void 0,morphTargetsCount:Se,morphTextureStride:Be,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:b.dithering,shadowMapEnabled:r.shadowMap.enabled&&P.length>0,shadowMapType:r.shadowMap.type,toneMapping:ht,decodeVideoTexture:ct&&b.map.isVideoTexture===!0&&ke.getTransfer(b.map.colorSpace)===Je,decodeVideoTextureEmissive:rt&&b.emissiveMap.isVideoTexture===!0&&ke.getTransfer(b.emissiveMap.colorSpace)===Je,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===pt,flipSided:b.side===Nt,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionClipCullDistance:Ie&&b.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ie&&b.extensions.multiDraw===!0||Oe)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:b.customProgramCacheKey()};return wt.vertexUv1s=h.has(1),wt.vertexUv2s=h.has(2),wt.vertexUv3s=h.has(3),h.clear(),wt}function p(b){const S=[];if(b.shaderID?S.push(b.shaderID):(S.push(b.customVertexShaderID),S.push(b.customFragmentShaderID)),b.defines!==void 0)for(const P in b.defines)S.push(P),S.push(b.defines[P]);return b.isRawShaderMaterial===!1&&(v(S,b),M(S,b),S.push(r.outputColorSpace)),S.push(b.customProgramCacheKey),S.join()}function v(b,S){b.push(S.precision),b.push(S.outputColorSpace),b.push(S.envMapMode),b.push(S.envMapCubeUVHeight),b.push(S.mapUv),b.push(S.alphaMapUv),b.push(S.lightMapUv),b.push(S.aoMapUv),b.push(S.bumpMapUv),b.push(S.normalMapUv),b.push(S.displacementMapUv),b.push(S.emissiveMapUv),b.push(S.metalnessMapUv),b.push(S.roughnessMapUv),b.push(S.anisotropyMapUv),b.push(S.clearcoatMapUv),b.push(S.clearcoatNormalMapUv),b.push(S.clearcoatRoughnessMapUv),b.push(S.iridescenceMapUv),b.push(S.iridescenceThicknessMapUv),b.push(S.sheenColorMapUv),b.push(S.sheenRoughnessMapUv),b.push(S.specularMapUv),b.push(S.specularColorMapUv),b.push(S.specularIntensityMapUv),b.push(S.transmissionMapUv),b.push(S.thicknessMapUv),b.push(S.combine),b.push(S.fogExp2),b.push(S.sizeAttenuation),b.push(S.morphTargetsCount),b.push(S.morphAttributeCount),b.push(S.numDirLights),b.push(S.numPointLights),b.push(S.numSpotLights),b.push(S.numSpotLightMaps),b.push(S.numHemiLights),b.push(S.numRectAreaLights),b.push(S.numDirLightShadows),b.push(S.numPointLightShadows),b.push(S.numSpotLightShadows),b.push(S.numSpotLightShadowsWithMaps),b.push(S.numLightProbes),b.push(S.shadowMapType),b.push(S.toneMapping),b.push(S.numClippingPlanes),b.push(S.numClipIntersection),b.push(S.depthPacking)}function M(b,S){a.disableAll(),S.supportsVertexTextures&&a.enable(0),S.instancing&&a.enable(1),S.instancingColor&&a.enable(2),S.instancingMorph&&a.enable(3),S.matcap&&a.enable(4),S.envMap&&a.enable(5),S.normalMapObjectSpace&&a.enable(6),S.normalMapTangentSpace&&a.enable(7),S.clearcoat&&a.enable(8),S.iridescence&&a.enable(9),S.alphaTest&&a.enable(10),S.vertexColors&&a.enable(11),S.vertexAlphas&&a.enable(12),S.vertexUv1s&&a.enable(13),S.vertexUv2s&&a.enable(14),S.vertexUv3s&&a.enable(15),S.vertexTangents&&a.enable(16),S.anisotropy&&a.enable(17),S.alphaHash&&a.enable(18),S.batching&&a.enable(19),S.dispersion&&a.enable(20),S.batchingColor&&a.enable(21),b.push(a.mask),a.disableAll(),S.fog&&a.enable(0),S.useFog&&a.enable(1),S.flatShading&&a.enable(2),S.logarithmicDepthBuffer&&a.enable(3),S.reverseDepthBuffer&&a.enable(4),S.skinning&&a.enable(5),S.morphTargets&&a.enable(6),S.morphNormals&&a.enable(7),S.morphColors&&a.enable(8),S.premultipliedAlpha&&a.enable(9),S.shadowMapEnabled&&a.enable(10),S.doubleSided&&a.enable(11),S.flipSided&&a.enable(12),S.useDepthPacking&&a.enable(13),S.dithering&&a.enable(14),S.transmission&&a.enable(15),S.sheen&&a.enable(16),S.opaque&&a.enable(17),S.pointsUvs&&a.enable(18),S.decodeVideoTexture&&a.enable(19),S.decodeVideoTextureEmissive&&a.enable(20),S.alphaToCoverage&&a.enable(21),b.push(a.mask)}function x(b){const S=g[b.type];let P;if(S){const F=pn[S];P=zs.clone(F.uniforms)}else P=b.uniforms;return P}function C(b,S){let P;for(let F=0,O=u.length;F<O;F++){const V=u[F];if(V.cacheKey===S){P=V,++P.usedTimes;break}}return P===void 0&&(P=new kg(r,S,b,s),u.push(P)),P}function w(b){if(--b.usedTimes===0){const S=u.indexOf(b);u[S]=u[u.length-1],u.pop(),b.destroy()}}function A(b){l.remove(b)}function L(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:x,acquireProgram:C,releaseProgram:w,releaseShaderCache:A,programs:u,dispose:L}}function Xg(){let r=new WeakMap;function e(o){return r.has(o)}function t(o){let a=r.get(o);return a===void 0&&(a={},r.set(o,a)),a}function n(o){r.delete(o)}function i(o,a,l){r.get(o)[a]=l}function s(){r=new WeakMap}return{has:e,get:t,remove:n,update:i,dispose:s}}function qg(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.z!==e.z?r.z-e.z:r.id-e.id}function uc(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function dc(){const r=[];let e=0;const t=[],n=[],i=[];function s(){e=0,t.length=0,n.length=0,i.length=0}function o(c,d,f,g,_,m){let p=r[e];return p===void 0?(p={id:c.id,object:c,geometry:d,material:f,groupOrder:g,renderOrder:c.renderOrder,z:_,group:m},r[e]=p):(p.id=c.id,p.object=c,p.geometry=d,p.material=f,p.groupOrder=g,p.renderOrder=c.renderOrder,p.z=_,p.group=m),e++,p}function a(c,d,f,g,_,m){const p=o(c,d,f,g,_,m);f.transmission>0?n.push(p):f.transparent===!0?i.push(p):t.push(p)}function l(c,d,f,g,_,m){const p=o(c,d,f,g,_,m);f.transmission>0?n.unshift(p):f.transparent===!0?i.unshift(p):t.unshift(p)}function h(c,d){t.length>1&&t.sort(c||qg),n.length>1&&n.sort(d||uc),i.length>1&&i.sort(d||uc)}function u(){for(let c=e,d=r.length;c<d;c++){const f=r[c];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:t,transmissive:n,transparent:i,init:s,push:a,unshift:l,finish:u,sort:h}}function Yg(){let r=new WeakMap;function e(n,i){const s=r.get(n);let o;return s===void 0?(o=new dc,r.set(n,[o])):i>=s.length?(o=new dc,s.push(o)):o=s[i],o}function t(){r=new WeakMap}return{get:e,dispose:t}}function jg(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new E,color:new pe};break;case"SpotLight":t={position:new E,direction:new E,color:new pe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new E,color:new pe,distance:0,decay:0};break;case"HemisphereLight":t={direction:new E,skyColor:new pe,groundColor:new pe};break;case"RectAreaLight":t={color:new pe,position:new E,halfWidth:new E,halfHeight:new E};break}return r[e.id]=t,t}}}function Kg(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Q};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Q};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Q,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[e.id]=t,t}}}let $g=0;function Zg(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}function Jg(r){const e=new jg,t=Kg(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)n.probe.push(new E);const i=new E,s=new Re,o=new Re;function a(h){let u=0,c=0,d=0;for(let b=0;b<9;b++)n.probe[b].set(0,0,0);let f=0,g=0,_=0,m=0,p=0,v=0,M=0,x=0,C=0,w=0,A=0;h.sort(Zg);for(let b=0,S=h.length;b<S;b++){const P=h[b],F=P.color,O=P.intensity,V=P.distance,X=P.shadow&&P.shadow.map?P.shadow.map.texture:null;if(P.isAmbientLight)u+=F.r*O,c+=F.g*O,d+=F.b*O;else if(P.isLightProbe){for(let W=0;W<9;W++)n.probe[W].addScaledVector(P.sh.coefficients[W],O);A++}else if(P.isDirectionalLight){const W=e.get(P);if(W.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){const Z=P.shadow,H=t.get(P);H.shadowIntensity=Z.intensity,H.shadowBias=Z.bias,H.shadowNormalBias=Z.normalBias,H.shadowRadius=Z.radius,H.shadowMapSize=Z.mapSize,n.directionalShadow[f]=H,n.directionalShadowMap[f]=X,n.directionalShadowMatrix[f]=P.shadow.matrix,v++}n.directional[f]=W,f++}else if(P.isSpotLight){const W=e.get(P);W.position.setFromMatrixPosition(P.matrixWorld),W.color.copy(F).multiplyScalar(O),W.distance=V,W.coneCos=Math.cos(P.angle),W.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),W.decay=P.decay,n.spot[_]=W;const Z=P.shadow;if(P.map&&(n.spotLightMap[C]=P.map,C++,Z.updateMatrices(P),P.castShadow&&w++),n.spotLightMatrix[_]=Z.matrix,P.castShadow){const H=t.get(P);H.shadowIntensity=Z.intensity,H.shadowBias=Z.bias,H.shadowNormalBias=Z.normalBias,H.shadowRadius=Z.radius,H.shadowMapSize=Z.mapSize,n.spotShadow[_]=H,n.spotShadowMap[_]=X,x++}_++}else if(P.isRectAreaLight){const W=e.get(P);W.color.copy(F).multiplyScalar(O),W.halfWidth.set(P.width*.5,0,0),W.halfHeight.set(0,P.height*.5,0),n.rectArea[m]=W,m++}else if(P.isPointLight){const W=e.get(P);if(W.color.copy(P.color).multiplyScalar(P.intensity),W.distance=P.distance,W.decay=P.decay,P.castShadow){const Z=P.shadow,H=t.get(P);H.shadowIntensity=Z.intensity,H.shadowBias=Z.bias,H.shadowNormalBias=Z.normalBias,H.shadowRadius=Z.radius,H.shadowMapSize=Z.mapSize,H.shadowCameraNear=Z.camera.near,H.shadowCameraFar=Z.camera.far,n.pointShadow[g]=H,n.pointShadowMap[g]=X,n.pointShadowMatrix[g]=P.shadow.matrix,M++}n.point[g]=W,g++}else if(P.isHemisphereLight){const W=e.get(P);W.skyColor.copy(P.color).multiplyScalar(O),W.groundColor.copy(P.groundColor).multiplyScalar(O),n.hemi[p]=W,p++}}m>0&&(r.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ne.LTC_FLOAT_1,n.rectAreaLTC2=ne.LTC_FLOAT_2):(n.rectAreaLTC1=ne.LTC_HALF_1,n.rectAreaLTC2=ne.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=c,n.ambient[2]=d;const L=n.hash;(L.directionalLength!==f||L.pointLength!==g||L.spotLength!==_||L.rectAreaLength!==m||L.hemiLength!==p||L.numDirectionalShadows!==v||L.numPointShadows!==M||L.numSpotShadows!==x||L.numSpotMaps!==C||L.numLightProbes!==A)&&(n.directional.length=f,n.spot.length=_,n.rectArea.length=m,n.point.length=g,n.hemi.length=p,n.directionalShadow.length=v,n.directionalShadowMap.length=v,n.pointShadow.length=M,n.pointShadowMap.length=M,n.spotShadow.length=x,n.spotShadowMap.length=x,n.directionalShadowMatrix.length=v,n.pointShadowMatrix.length=M,n.spotLightMatrix.length=x+C-w,n.spotLightMap.length=C,n.numSpotLightShadowsWithMaps=w,n.numLightProbes=A,L.directionalLength=f,L.pointLength=g,L.spotLength=_,L.rectAreaLength=m,L.hemiLength=p,L.numDirectionalShadows=v,L.numPointShadows=M,L.numSpotShadows=x,L.numSpotMaps=C,L.numLightProbes=A,n.version=$g++)}function l(h,u){let c=0,d=0,f=0,g=0,_=0;const m=u.matrixWorldInverse;for(let p=0,v=h.length;p<v;p++){const M=h[p];if(M.isDirectionalLight){const x=n.directional[c];x.direction.setFromMatrixPosition(M.matrixWorld),i.setFromMatrixPosition(M.target.matrixWorld),x.direction.sub(i),x.direction.transformDirection(m),c++}else if(M.isSpotLight){const x=n.spot[f];x.position.setFromMatrixPosition(M.matrixWorld),x.position.applyMatrix4(m),x.direction.setFromMatrixPosition(M.matrixWorld),i.setFromMatrixPosition(M.target.matrixWorld),x.direction.sub(i),x.direction.transformDirection(m),f++}else if(M.isRectAreaLight){const x=n.rectArea[g];x.position.setFromMatrixPosition(M.matrixWorld),x.position.applyMatrix4(m),o.identity(),s.copy(M.matrixWorld),s.premultiply(m),o.extractRotation(s),x.halfWidth.set(M.width*.5,0,0),x.halfHeight.set(0,M.height*.5,0),x.halfWidth.applyMatrix4(o),x.halfHeight.applyMatrix4(o),g++}else if(M.isPointLight){const x=n.point[d];x.position.setFromMatrixPosition(M.matrixWorld),x.position.applyMatrix4(m),d++}else if(M.isHemisphereLight){const x=n.hemi[_];x.direction.setFromMatrixPosition(M.matrixWorld),x.direction.transformDirection(m),_++}}}return{setup:a,setupView:l,state:n}}function fc(r){const e=new Jg(r),t=[],n=[];function i(u){h.camera=u,t.length=0,n.length=0}function s(u){t.push(u)}function o(u){n.push(u)}function a(){e.setup(t)}function l(u){e.setupView(t,u)}const h={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:i,state:h,setupLights:a,setupLightsView:l,pushLight:s,pushShadow:o}}function Qg(r){let e=new WeakMap;function t(i,s=0){const o=e.get(i);let a;return o===void 0?(a=new fc(r),e.set(i,[a])):s>=o.length?(a=new fc(r),o.push(a)):a=o[s],a}function n(){e=new WeakMap}return{get:t,dispose:n}}class e0 extends hn{static get type(){return"MeshDepthMaterial"}constructor(e){super(),this.isMeshDepthMaterial=!0,this.depthPacking=Nu,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class t0 extends hn{static get type(){return"MeshDistanceMaterial"}constructor(e){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const n0=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,i0=`uniform sampler2D shadow_pass;
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
}`;function s0(r,e,t){let n=new Ya;const i=new Q,s=new Q,o=new Ye,a=new e0({depthPacking:Uu}),l=new t0,h={},u=t.maxTextureSize,c={[On]:Nt,[Nt]:On,[pt]:pt},d=new vt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Q},radius:{value:4}},vertexShader:n0,fragmentShader:i0}),f=d.clone();f.defines.HORIZONTAL_PASS=1;const g=new mt;g.setAttribute("position",new yt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new be(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Jc;let p=this.type;this.render=function(w,A,L){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||w.length===0)return;const b=r.getRenderTarget(),S=r.getActiveCubeFace(),P=r.getActiveMipmapLevel(),F=r.state;F.setBlending(Fn),F.buffers.color.setClear(1,1,1,1),F.buffers.depth.setTest(!0),F.setScissorTest(!1);const O=p!==In&&this.type===In,V=p===In&&this.type!==In;for(let X=0,W=w.length;X<W;X++){const Z=w[X],H=Z.shadow;if(H===void 0){console.warn("THREE.WebGLShadowMap:",Z,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;i.copy(H.mapSize);const se=H.getFrameExtents();if(i.multiply(se),s.copy(H.mapSize),(i.x>u||i.y>u)&&(i.x>u&&(s.x=Math.floor(u/se.x),i.x=s.x*se.x,H.mapSize.x=s.x),i.y>u&&(s.y=Math.floor(u/se.y),i.y=s.y*se.y,H.mapSize.y=s.y)),H.map===null||O===!0||V===!0){const Se=this.type!==In?{minFilter:Ut,magFilter:Ut}:{};H.map!==null&&H.map.dispose(),H.map=new Jt(i.x,i.y,Se),H.map.texture.name=Z.name+".shadowMap",H.camera.updateProjectionMatrix()}r.setRenderTarget(H.map),r.clear();const he=H.getViewportCount();for(let Se=0;Se<he;Se++){const Be=H.getViewport(Se);o.set(s.x*Be.x,s.y*Be.y,s.x*Be.z,s.y*Be.w),F.viewport(o),H.updateMatrices(Z,Se),n=H.getFrustum(),x(A,L,H.camera,Z,this.type)}H.isPointLightShadow!==!0&&this.type===In&&v(H,L),H.needsUpdate=!1}p=this.type,m.needsUpdate=!1,r.setRenderTarget(b,S,P)};function v(w,A){const L=e.update(_);d.defines.VSM_SAMPLES!==w.blurSamples&&(d.defines.VSM_SAMPLES=w.blurSamples,f.defines.VSM_SAMPLES=w.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),w.mapPass===null&&(w.mapPass=new Jt(i.x,i.y)),d.uniforms.shadow_pass.value=w.map.texture,d.uniforms.resolution.value=w.mapSize,d.uniforms.radius.value=w.radius,r.setRenderTarget(w.mapPass),r.clear(),r.renderBufferDirect(A,null,L,d,_,null),f.uniforms.shadow_pass.value=w.mapPass.texture,f.uniforms.resolution.value=w.mapSize,f.uniforms.radius.value=w.radius,r.setRenderTarget(w.map),r.clear(),r.renderBufferDirect(A,null,L,f,_,null)}function M(w,A,L,b){let S=null;const P=L.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(P!==void 0)S=P;else if(S=L.isPointLight===!0?l:a,r.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0){const F=S.uuid,O=A.uuid;let V=h[F];V===void 0&&(V={},h[F]=V);let X=V[O];X===void 0&&(X=S.clone(),V[O]=X,A.addEventListener("dispose",C)),S=X}if(S.visible=A.visible,S.wireframe=A.wireframe,b===In?S.side=A.shadowSide!==null?A.shadowSide:A.side:S.side=A.shadowSide!==null?A.shadowSide:c[A.side],S.alphaMap=A.alphaMap,S.alphaTest=A.alphaTest,S.map=A.map,S.clipShadows=A.clipShadows,S.clippingPlanes=A.clippingPlanes,S.clipIntersection=A.clipIntersection,S.displacementMap=A.displacementMap,S.displacementScale=A.displacementScale,S.displacementBias=A.displacementBias,S.wireframeLinewidth=A.wireframeLinewidth,S.linewidth=A.linewidth,L.isPointLight===!0&&S.isMeshDistanceMaterial===!0){const F=r.properties.get(S);F.light=L}return S}function x(w,A,L,b,S){if(w.visible===!1)return;if(w.layers.test(A.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&S===In)&&(!w.frustumCulled||n.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(L.matrixWorldInverse,w.matrixWorld);const O=e.update(w),V=w.material;if(Array.isArray(V)){const X=O.groups;for(let W=0,Z=X.length;W<Z;W++){const H=X[W],se=V[H.materialIndex];if(se&&se.visible){const he=M(w,se,b,S);w.onBeforeShadow(r,w,A,L,O,he,H),r.renderBufferDirect(L,null,O,he,w,H),w.onAfterShadow(r,w,A,L,O,he,H)}}}else if(V.visible){const X=M(w,V,b,S);w.onBeforeShadow(r,w,A,L,O,X,null),r.renderBufferDirect(L,null,O,X,w,null),w.onAfterShadow(r,w,A,L,O,X,null)}}const F=w.children;for(let O=0,V=F.length;O<V;O++)x(F[O],A,L,b,S)}function C(w){w.target.removeEventListener("dispose",C);for(const L in h){const b=h[L],S=w.target.uuid;S in b&&(b[S].dispose(),delete b[S])}}}const r0={[Ho]:Vo,[Wo]:Yo,[Xo]:jo,[ji]:qo,[Vo]:Ho,[Yo]:Wo,[jo]:Xo,[qo]:ji};function o0(r,e){function t(){let I=!1;const ie=new Ye;let G=null;const K=new Ye(0,0,0,0);return{setMask:function(ce){G!==ce&&!I&&(r.colorMask(ce,ce,ce,ce),G=ce)},setLocked:function(ce){I=ce},setClear:function(ce,ae,Ie,ht,wt){wt===!0&&(ce*=ht,ae*=ht,Ie*=ht),ie.set(ce,ae,Ie,ht),K.equals(ie)===!1&&(r.clearColor(ce,ae,Ie,ht),K.copy(ie))},reset:function(){I=!1,G=null,K.set(-1,0,0,0)}}}function n(){let I=!1,ie=!1,G=null,K=null,ce=null;return{setReversed:function(ae){if(ie!==ae){const Ie=e.get("EXT_clip_control");ie?Ie.clipControlEXT(Ie.LOWER_LEFT_EXT,Ie.ZERO_TO_ONE_EXT):Ie.clipControlEXT(Ie.LOWER_LEFT_EXT,Ie.NEGATIVE_ONE_TO_ONE_EXT);const ht=ce;ce=null,this.setClear(ht)}ie=ae},getReversed:function(){return ie},setTest:function(ae){ae?re(r.DEPTH_TEST):Ae(r.DEPTH_TEST)},setMask:function(ae){G!==ae&&!I&&(r.depthMask(ae),G=ae)},setFunc:function(ae){if(ie&&(ae=r0[ae]),K!==ae){switch(ae){case Ho:r.depthFunc(r.NEVER);break;case Vo:r.depthFunc(r.ALWAYS);break;case Wo:r.depthFunc(r.LESS);break;case ji:r.depthFunc(r.LEQUAL);break;case Xo:r.depthFunc(r.EQUAL);break;case qo:r.depthFunc(r.GEQUAL);break;case Yo:r.depthFunc(r.GREATER);break;case jo:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}K=ae}},setLocked:function(ae){I=ae},setClear:function(ae){ce!==ae&&(ie&&(ae=1-ae),r.clearDepth(ae),ce=ae)},reset:function(){I=!1,G=null,K=null,ce=null,ie=!1}}}function i(){let I=!1,ie=null,G=null,K=null,ce=null,ae=null,Ie=null,ht=null,wt=null;return{setTest:function(Ze){I||(Ze?re(r.STENCIL_TEST):Ae(r.STENCIL_TEST))},setMask:function(Ze){ie!==Ze&&!I&&(r.stencilMask(Ze),ie=Ze)},setFunc:function(Ze,tn,Mn){(G!==Ze||K!==tn||ce!==Mn)&&(r.stencilFunc(Ze,tn,Mn),G=Ze,K=tn,ce=Mn)},setOp:function(Ze,tn,Mn){(ae!==Ze||Ie!==tn||ht!==Mn)&&(r.stencilOp(Ze,tn,Mn),ae=Ze,Ie=tn,ht=Mn)},setLocked:function(Ze){I=Ze},setClear:function(Ze){wt!==Ze&&(r.clearStencil(Ze),wt=Ze)},reset:function(){I=!1,ie=null,G=null,K=null,ce=null,ae=null,Ie=null,ht=null,wt=null}}}const s=new t,o=new n,a=new i,l=new WeakMap,h=new WeakMap;let u={},c={},d=new WeakMap,f=[],g=null,_=!1,m=null,p=null,v=null,M=null,x=null,C=null,w=null,A=new pe(0,0,0),L=0,b=!1,S=null,P=null,F=null,O=null,V=null;const X=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let W=!1,Z=0;const H=r.getParameter(r.VERSION);H.indexOf("WebGL")!==-1?(Z=parseFloat(/^WebGL (\d)/.exec(H)[1]),W=Z>=1):H.indexOf("OpenGL ES")!==-1&&(Z=parseFloat(/^OpenGL ES (\d)/.exec(H)[1]),W=Z>=2);let se=null,he={};const Se=r.getParameter(r.SCISSOR_BOX),Be=r.getParameter(r.VIEWPORT),tt=new Ye().fromArray(Se),Y=new Ye().fromArray(Be);function te(I,ie,G,K){const ce=new Uint8Array(4),ae=r.createTexture();r.bindTexture(I,ae),r.texParameteri(I,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(I,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let Ie=0;Ie<G;Ie++)I===r.TEXTURE_3D||I===r.TEXTURE_2D_ARRAY?r.texImage3D(ie,0,r.RGBA,1,1,K,0,r.RGBA,r.UNSIGNED_BYTE,ce):r.texImage2D(ie+Ie,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,ce);return ae}const xe={};xe[r.TEXTURE_2D]=te(r.TEXTURE_2D,r.TEXTURE_2D,1),xe[r.TEXTURE_CUBE_MAP]=te(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),xe[r.TEXTURE_2D_ARRAY]=te(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),xe[r.TEXTURE_3D]=te(r.TEXTURE_3D,r.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),re(r.DEPTH_TEST),o.setFunc(ji),Ge(!1),He(_l),re(r.CULL_FACE),U(Fn);function re(I){u[I]!==!0&&(r.enable(I),u[I]=!0)}function Ae(I){u[I]!==!1&&(r.disable(I),u[I]=!1)}function Le(I,ie){return c[I]!==ie?(r.bindFramebuffer(I,ie),c[I]=ie,I===r.DRAW_FRAMEBUFFER&&(c[r.FRAMEBUFFER]=ie),I===r.FRAMEBUFFER&&(c[r.DRAW_FRAMEBUFFER]=ie),!0):!1}function Oe(I,ie){let G=f,K=!1;if(I){G=d.get(ie),G===void 0&&(G=[],d.set(ie,G));const ce=I.textures;if(G.length!==ce.length||G[0]!==r.COLOR_ATTACHMENT0){for(let ae=0,Ie=ce.length;ae<Ie;ae++)G[ae]=r.COLOR_ATTACHMENT0+ae;G.length=ce.length,K=!0}}else G[0]!==r.BACK&&(G[0]=r.BACK,K=!0);K&&r.drawBuffers(G)}function ct(I){return g!==I?(r.useProgram(I),g=I,!0):!1}const We={[pi]:r.FUNC_ADD,[lu]:r.FUNC_SUBTRACT,[cu]:r.FUNC_REVERSE_SUBTRACT};We[hu]=r.MIN,We[uu]=r.MAX;const ut={[du]:r.ZERO,[fu]:r.ONE,[pu]:r.SRC_COLOR,[ko]:r.SRC_ALPHA,[yu]:r.SRC_ALPHA_SATURATE,[vu]:r.DST_COLOR,[gu]:r.DST_ALPHA,[mu]:r.ONE_MINUS_SRC_COLOR,[Go]:r.ONE_MINUS_SRC_ALPHA,[xu]:r.ONE_MINUS_DST_COLOR,[_u]:r.ONE_MINUS_DST_ALPHA,[Mu]:r.CONSTANT_COLOR,[Su]:r.ONE_MINUS_CONSTANT_COLOR,[Tu]:r.CONSTANT_ALPHA,[bu]:r.ONE_MINUS_CONSTANT_ALPHA};function U(I,ie,G,K,ce,ae,Ie,ht,wt,Ze){if(I===Fn){_===!0&&(Ae(r.BLEND),_=!1);return}if(_===!1&&(re(r.BLEND),_=!0),I!==au){if(I!==m||Ze!==b){if((p!==pi||x!==pi)&&(r.blendEquation(r.FUNC_ADD),p=pi,x=pi),Ze)switch(I){case Qn:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Lr:r.blendFunc(r.ONE,r.ONE);break;case vl:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case xl:r.blendFuncSeparate(r.ZERO,r.SRC_COLOR,r.ZERO,r.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}else switch(I){case Qn:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Lr:r.blendFunc(r.SRC_ALPHA,r.ONE);break;case vl:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case xl:r.blendFunc(r.ZERO,r.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}v=null,M=null,C=null,w=null,A.set(0,0,0),L=0,m=I,b=Ze}return}ce=ce||ie,ae=ae||G,Ie=Ie||K,(ie!==p||ce!==x)&&(r.blendEquationSeparate(We[ie],We[ce]),p=ie,x=ce),(G!==v||K!==M||ae!==C||Ie!==w)&&(r.blendFuncSeparate(ut[G],ut[K],ut[ae],ut[Ie]),v=G,M=K,C=ae,w=Ie),(ht.equals(A)===!1||wt!==L)&&(r.blendColor(ht.r,ht.g,ht.b,wt),A.copy(ht),L=wt),m=I,b=!1}function qt(I,ie){I.side===pt?Ae(r.CULL_FACE):re(r.CULL_FACE);let G=I.side===Nt;ie&&(G=!G),Ge(G),I.blending===Qn&&I.transparent===!1?U(Fn):U(I.blending,I.blendEquation,I.blendSrc,I.blendDst,I.blendEquationAlpha,I.blendSrcAlpha,I.blendDstAlpha,I.blendColor,I.blendAlpha,I.premultipliedAlpha),o.setFunc(I.depthFunc),o.setTest(I.depthTest),o.setMask(I.depthWrite),s.setMask(I.colorWrite);const K=I.stencilWrite;a.setTest(K),K&&(a.setMask(I.stencilWriteMask),a.setFunc(I.stencilFunc,I.stencilRef,I.stencilFuncMask),a.setOp(I.stencilFail,I.stencilZFail,I.stencilZPass)),rt(I.polygonOffset,I.polygonOffsetFactor,I.polygonOffsetUnits),I.alphaToCoverage===!0?re(r.SAMPLE_ALPHA_TO_COVERAGE):Ae(r.SAMPLE_ALPHA_TO_COVERAGE)}function Ge(I){S!==I&&(I?r.frontFace(r.CW):r.frontFace(r.CCW),S=I)}function He(I){I!==ru?(re(r.CULL_FACE),I!==P&&(I===_l?r.cullFace(r.BACK):I===ou?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):Ae(r.CULL_FACE),P=I}function we(I){I!==F&&(W&&r.lineWidth(I),F=I)}function rt(I,ie,G){I?(re(r.POLYGON_OFFSET_FILL),(O!==ie||V!==G)&&(r.polygonOffset(ie,G),O=ie,V=G)):Ae(r.POLYGON_OFFSET_FILL)}function Te(I){I?re(r.SCISSOR_TEST):Ae(r.SCISSOR_TEST)}function R(I){I===void 0&&(I=r.TEXTURE0+X-1),se!==I&&(r.activeTexture(I),se=I)}function y(I,ie,G){G===void 0&&(se===null?G=r.TEXTURE0+X-1:G=se);let K=he[G];K===void 0&&(K={type:void 0,texture:void 0},he[G]=K),(K.type!==I||K.texture!==ie)&&(se!==G&&(r.activeTexture(G),se=G),r.bindTexture(I,ie||xe[I]),K.type=I,K.texture=ie)}function B(){const I=he[se];I!==void 0&&I.type!==void 0&&(r.bindTexture(I.type,null),I.type=void 0,I.texture=void 0)}function j(){try{r.compressedTexImage2D.apply(r,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function $(){try{r.compressedTexImage3D.apply(r,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function q(){try{r.texSubImage2D.apply(r,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ye(){try{r.texSubImage3D.apply(r,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function oe(){try{r.compressedTexSubImage2D.apply(r,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ue(){try{r.compressedTexSubImage3D.apply(r,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Xe(){try{r.texStorage2D.apply(r,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function J(){try{r.texStorage3D.apply(r,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function de(){try{r.texImage2D.apply(r,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Ee(){try{r.texImage3D.apply(r,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Ce(I){tt.equals(I)===!1&&(r.scissor(I.x,I.y,I.z,I.w),tt.copy(I))}function fe(I){Y.equals(I)===!1&&(r.viewport(I.x,I.y,I.z,I.w),Y.copy(I))}function Ve(I,ie){let G=h.get(ie);G===void 0&&(G=new WeakMap,h.set(ie,G));let K=G.get(I);K===void 0&&(K=r.getUniformBlockIndex(ie,I.name),G.set(I,K))}function Ue(I,ie){const K=h.get(ie).get(I);l.get(ie)!==K&&(r.uniformBlockBinding(ie,K,I.__bindingPointIndex),l.set(ie,K))}function nt(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),o.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),u={},se=null,he={},c={},d=new WeakMap,f=[],g=null,_=!1,m=null,p=null,v=null,M=null,x=null,C=null,w=null,A=new pe(0,0,0),L=0,b=!1,S=null,P=null,F=null,O=null,V=null,tt.set(0,0,r.canvas.width,r.canvas.height),Y.set(0,0,r.canvas.width,r.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:re,disable:Ae,bindFramebuffer:Le,drawBuffers:Oe,useProgram:ct,setBlending:U,setMaterial:qt,setFlipSided:Ge,setCullFace:He,setLineWidth:we,setPolygonOffset:rt,setScissorTest:Te,activeTexture:R,bindTexture:y,unbindTexture:B,compressedTexImage2D:j,compressedTexImage3D:$,texImage2D:de,texImage3D:Ee,updateUBOMapping:Ve,uniformBlockBinding:Ue,texStorage2D:Xe,texStorage3D:J,texSubImage2D:q,texSubImage3D:ye,compressedTexSubImage2D:oe,compressedTexSubImage3D:ue,scissor:Ce,viewport:fe,reset:nt}}function pc(r,e,t,n){const i=a0(n);switch(t){case uh:return r*e;case fh:return r*e;case ph:return r*e*2;case ka:return r*e/i.components*i.byteLength;case Ga:return r*e/i.components*i.byteLength;case mh:return r*e*2/i.components*i.byteLength;case Ha:return r*e*2/i.components*i.byteLength;case dh:return r*e*3/i.components*i.byteLength;case Zt:return r*e*4/i.components*i.byteLength;case Va:return r*e*4/i.components*i.byteLength;case wr:case Er:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case Ar:case Cr:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case Jo:case ea:return Math.max(r,16)*Math.max(e,8)/4;case Zo:case Qo:return Math.max(r,8)*Math.max(e,8)/2;case ta:case na:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case ia:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case sa:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case ra:return Math.floor((r+4)/5)*Math.floor((e+3)/4)*16;case oa:return Math.floor((r+4)/5)*Math.floor((e+4)/5)*16;case aa:return Math.floor((r+5)/6)*Math.floor((e+4)/5)*16;case la:return Math.floor((r+5)/6)*Math.floor((e+5)/6)*16;case ca:return Math.floor((r+7)/8)*Math.floor((e+4)/5)*16;case ha:return Math.floor((r+7)/8)*Math.floor((e+5)/6)*16;case ua:return Math.floor((r+7)/8)*Math.floor((e+7)/8)*16;case da:return Math.floor((r+9)/10)*Math.floor((e+4)/5)*16;case fa:return Math.floor((r+9)/10)*Math.floor((e+5)/6)*16;case pa:return Math.floor((r+9)/10)*Math.floor((e+7)/8)*16;case ma:return Math.floor((r+9)/10)*Math.floor((e+9)/10)*16;case ga:return Math.floor((r+11)/12)*Math.floor((e+9)/10)*16;case _a:return Math.floor((r+11)/12)*Math.floor((e+11)/12)*16;case Rr:case va:case xa:return Math.ceil(r/4)*Math.ceil(e/4)*16;case gh:case ya:return Math.ceil(r/4)*Math.ceil(e/4)*8;case Ma:case Sa:return Math.ceil(r/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function a0(r){switch(r){case zn:case lh:return{byteLength:1,components:1};case Us:case ch:case gn:return{byteLength:2,components:1};case Oa:case za:return{byteLength:2,components:4};case gi:case Ba:case ln:return{byteLength:4,components:1};case hh:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${r}.`)}function l0(r,e,t,n,i,s,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new Q,u=new WeakMap;let c;const d=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(R,y){return f?new OffscreenCanvas(R,y):Os("canvas")}function _(R,y,B){let j=1;const $=Te(R);if(($.width>B||$.height>B)&&(j=B/Math.max($.width,$.height)),j<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){const q=Math.floor(j*$.width),ye=Math.floor(j*$.height);c===void 0&&(c=g(q,ye));const oe=y?g(q,ye):c;return oe.width=q,oe.height=ye,oe.getContext("2d").drawImage(R,0,0,q,ye),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+$.width+"x"+$.height+") to ("+q+"x"+ye+")."),oe}else return"data"in R&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+$.width+"x"+$.height+")."),R;return R}function m(R){return R.generateMipmaps}function p(R){r.generateMipmap(R)}function v(R){return R.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:R.isWebGL3DRenderTarget?r.TEXTURE_3D:R.isWebGLArrayRenderTarget||R.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function M(R,y,B,j,$=!1){if(R!==null){if(r[R]!==void 0)return r[R];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let q=y;if(y===r.RED&&(B===r.FLOAT&&(q=r.R32F),B===r.HALF_FLOAT&&(q=r.R16F),B===r.UNSIGNED_BYTE&&(q=r.R8)),y===r.RED_INTEGER&&(B===r.UNSIGNED_BYTE&&(q=r.R8UI),B===r.UNSIGNED_SHORT&&(q=r.R16UI),B===r.UNSIGNED_INT&&(q=r.R32UI),B===r.BYTE&&(q=r.R8I),B===r.SHORT&&(q=r.R16I),B===r.INT&&(q=r.R32I)),y===r.RG&&(B===r.FLOAT&&(q=r.RG32F),B===r.HALF_FLOAT&&(q=r.RG16F),B===r.UNSIGNED_BYTE&&(q=r.RG8)),y===r.RG_INTEGER&&(B===r.UNSIGNED_BYTE&&(q=r.RG8UI),B===r.UNSIGNED_SHORT&&(q=r.RG16UI),B===r.UNSIGNED_INT&&(q=r.RG32UI),B===r.BYTE&&(q=r.RG8I),B===r.SHORT&&(q=r.RG16I),B===r.INT&&(q=r.RG32I)),y===r.RGB_INTEGER&&(B===r.UNSIGNED_BYTE&&(q=r.RGB8UI),B===r.UNSIGNED_SHORT&&(q=r.RGB16UI),B===r.UNSIGNED_INT&&(q=r.RGB32UI),B===r.BYTE&&(q=r.RGB8I),B===r.SHORT&&(q=r.RGB16I),B===r.INT&&(q=r.RGB32I)),y===r.RGBA_INTEGER&&(B===r.UNSIGNED_BYTE&&(q=r.RGBA8UI),B===r.UNSIGNED_SHORT&&(q=r.RGBA16UI),B===r.UNSIGNED_INT&&(q=r.RGBA32UI),B===r.BYTE&&(q=r.RGBA8I),B===r.SHORT&&(q=r.RGBA16I),B===r.INT&&(q=r.RGBA32I)),y===r.RGB&&B===r.UNSIGNED_INT_5_9_9_9_REV&&(q=r.RGB9_E5),y===r.RGBA){const ye=$?zr:ke.getTransfer(j);B===r.FLOAT&&(q=r.RGBA32F),B===r.HALF_FLOAT&&(q=r.RGBA16F),B===r.UNSIGNED_BYTE&&(q=ye===Je?r.SRGB8_ALPHA8:r.RGBA8),B===r.UNSIGNED_SHORT_4_4_4_4&&(q=r.RGBA4),B===r.UNSIGNED_SHORT_5_5_5_1&&(q=r.RGB5_A1)}return(q===r.R16F||q===r.R32F||q===r.RG16F||q===r.RG32F||q===r.RGBA16F||q===r.RGBA32F)&&e.get("EXT_color_buffer_float"),q}function x(R,y){let B;return R?y===null||y===gi||y===Ji?B=r.DEPTH24_STENCIL8:y===ln?B=r.DEPTH32F_STENCIL8:y===Us&&(B=r.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):y===null||y===gi||y===Ji?B=r.DEPTH_COMPONENT24:y===ln?B=r.DEPTH_COMPONENT32F:y===Us&&(B=r.DEPTH_COMPONENT16),B}function C(R,y){return m(R)===!0||R.isFramebufferTexture&&R.minFilter!==Ut&&R.minFilter!==Wt?Math.log2(Math.max(y.width,y.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?y.mipmaps.length:1}function w(R){const y=R.target;y.removeEventListener("dispose",w),L(y),y.isVideoTexture&&u.delete(y)}function A(R){const y=R.target;y.removeEventListener("dispose",A),S(y)}function L(R){const y=n.get(R);if(y.__webglInit===void 0)return;const B=R.source,j=d.get(B);if(j){const $=j[y.__cacheKey];$.usedTimes--,$.usedTimes===0&&b(R),Object.keys(j).length===0&&d.delete(B)}n.remove(R)}function b(R){const y=n.get(R);r.deleteTexture(y.__webglTexture);const B=R.source,j=d.get(B);delete j[y.__cacheKey],o.memory.textures--}function S(R){const y=n.get(R);if(R.depthTexture&&(R.depthTexture.dispose(),n.remove(R.depthTexture)),R.isWebGLCubeRenderTarget)for(let j=0;j<6;j++){if(Array.isArray(y.__webglFramebuffer[j]))for(let $=0;$<y.__webglFramebuffer[j].length;$++)r.deleteFramebuffer(y.__webglFramebuffer[j][$]);else r.deleteFramebuffer(y.__webglFramebuffer[j]);y.__webglDepthbuffer&&r.deleteRenderbuffer(y.__webglDepthbuffer[j])}else{if(Array.isArray(y.__webglFramebuffer))for(let j=0;j<y.__webglFramebuffer.length;j++)r.deleteFramebuffer(y.__webglFramebuffer[j]);else r.deleteFramebuffer(y.__webglFramebuffer);if(y.__webglDepthbuffer&&r.deleteRenderbuffer(y.__webglDepthbuffer),y.__webglMultisampledFramebuffer&&r.deleteFramebuffer(y.__webglMultisampledFramebuffer),y.__webglColorRenderbuffer)for(let j=0;j<y.__webglColorRenderbuffer.length;j++)y.__webglColorRenderbuffer[j]&&r.deleteRenderbuffer(y.__webglColorRenderbuffer[j]);y.__webglDepthRenderbuffer&&r.deleteRenderbuffer(y.__webglDepthRenderbuffer)}const B=R.textures;for(let j=0,$=B.length;j<$;j++){const q=n.get(B[j]);q.__webglTexture&&(r.deleteTexture(q.__webglTexture),o.memory.textures--),n.remove(B[j])}n.remove(R)}let P=0;function F(){P=0}function O(){const R=P;return R>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+i.maxTextures),P+=1,R}function V(R){const y=[];return y.push(R.wrapS),y.push(R.wrapT),y.push(R.wrapR||0),y.push(R.magFilter),y.push(R.minFilter),y.push(R.anisotropy),y.push(R.internalFormat),y.push(R.format),y.push(R.type),y.push(R.generateMipmaps),y.push(R.premultiplyAlpha),y.push(R.flipY),y.push(R.unpackAlignment),y.push(R.colorSpace),y.join()}function X(R,y){const B=n.get(R);if(R.isVideoTexture&&we(R),R.isRenderTargetTexture===!1&&R.version>0&&B.__version!==R.version){const j=R.image;if(j===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(j.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Y(B,R,y);return}}t.bindTexture(r.TEXTURE_2D,B.__webglTexture,r.TEXTURE0+y)}function W(R,y){const B=n.get(R);if(R.version>0&&B.__version!==R.version){Y(B,R,y);return}t.bindTexture(r.TEXTURE_2D_ARRAY,B.__webglTexture,r.TEXTURE0+y)}function Z(R,y){const B=n.get(R);if(R.version>0&&B.__version!==R.version){Y(B,R,y);return}t.bindTexture(r.TEXTURE_3D,B.__webglTexture,r.TEXTURE0+y)}function H(R,y){const B=n.get(R);if(R.version>0&&B.__version!==R.version){te(B,R,y);return}t.bindTexture(r.TEXTURE_CUBE_MAP,B.__webglTexture,r.TEXTURE0+y)}const se={[Zi]:r.REPEAT,[Zn]:r.CLAMP_TO_EDGE,[Ir]:r.MIRRORED_REPEAT},he={[Ut]:r.NEAREST,[ah]:r.NEAREST_MIPMAP_NEAREST,[Es]:r.NEAREST_MIPMAP_LINEAR,[Wt]:r.LINEAR,[br]:r.LINEAR_MIPMAP_NEAREST,[Nn]:r.LINEAR_MIPMAP_LINEAR},Se={[Bu]:r.NEVER,[Vu]:r.ALWAYS,[Ou]:r.LESS,[xh]:r.LEQUAL,[zu]:r.EQUAL,[Hu]:r.GEQUAL,[ku]:r.GREATER,[Gu]:r.NOTEQUAL};function Be(R,y){if(y.type===ln&&e.has("OES_texture_float_linear")===!1&&(y.magFilter===Wt||y.magFilter===br||y.magFilter===Es||y.magFilter===Nn||y.minFilter===Wt||y.minFilter===br||y.minFilter===Es||y.minFilter===Nn)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(R,r.TEXTURE_WRAP_S,se[y.wrapS]),r.texParameteri(R,r.TEXTURE_WRAP_T,se[y.wrapT]),(R===r.TEXTURE_3D||R===r.TEXTURE_2D_ARRAY)&&r.texParameteri(R,r.TEXTURE_WRAP_R,se[y.wrapR]),r.texParameteri(R,r.TEXTURE_MAG_FILTER,he[y.magFilter]),r.texParameteri(R,r.TEXTURE_MIN_FILTER,he[y.minFilter]),y.compareFunction&&(r.texParameteri(R,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(R,r.TEXTURE_COMPARE_FUNC,Se[y.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(y.magFilter===Ut||y.minFilter!==Es&&y.minFilter!==Nn||y.type===ln&&e.has("OES_texture_float_linear")===!1)return;if(y.anisotropy>1||n.get(y).__currentAnisotropy){const B=e.get("EXT_texture_filter_anisotropic");r.texParameterf(R,B.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(y.anisotropy,i.getMaxAnisotropy())),n.get(y).__currentAnisotropy=y.anisotropy}}}function tt(R,y){let B=!1;R.__webglInit===void 0&&(R.__webglInit=!0,y.addEventListener("dispose",w));const j=y.source;let $=d.get(j);$===void 0&&($={},d.set(j,$));const q=V(y);if(q!==R.__cacheKey){$[q]===void 0&&($[q]={texture:r.createTexture(),usedTimes:0},o.memory.textures++,B=!0),$[q].usedTimes++;const ye=$[R.__cacheKey];ye!==void 0&&($[R.__cacheKey].usedTimes--,ye.usedTimes===0&&b(y)),R.__cacheKey=q,R.__webglTexture=$[q].texture}return B}function Y(R,y,B){let j=r.TEXTURE_2D;(y.isDataArrayTexture||y.isCompressedArrayTexture)&&(j=r.TEXTURE_2D_ARRAY),y.isData3DTexture&&(j=r.TEXTURE_3D);const $=tt(R,y),q=y.source;t.bindTexture(j,R.__webglTexture,r.TEXTURE0+B);const ye=n.get(q);if(q.version!==ye.__version||$===!0){t.activeTexture(r.TEXTURE0+B);const oe=ke.getPrimaries(ke.workingColorSpace),ue=y.colorSpace===$n?null:ke.getPrimaries(y.colorSpace),Xe=y.colorSpace===$n||oe===ue?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,y.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,y.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Xe);let J=_(y.image,!1,i.maxTextureSize);J=rt(y,J);const de=s.convert(y.format,y.colorSpace),Ee=s.convert(y.type);let Ce=M(y.internalFormat,de,Ee,y.colorSpace,y.isVideoTexture);Be(j,y);let fe;const Ve=y.mipmaps,Ue=y.isVideoTexture!==!0,nt=ye.__version===void 0||$===!0,I=q.dataReady,ie=C(y,J);if(y.isDepthTexture)Ce=x(y.format===Qi,y.type),nt&&(Ue?t.texStorage2D(r.TEXTURE_2D,1,Ce,J.width,J.height):t.texImage2D(r.TEXTURE_2D,0,Ce,J.width,J.height,0,de,Ee,null));else if(y.isDataTexture)if(Ve.length>0){Ue&&nt&&t.texStorage2D(r.TEXTURE_2D,ie,Ce,Ve[0].width,Ve[0].height);for(let G=0,K=Ve.length;G<K;G++)fe=Ve[G],Ue?I&&t.texSubImage2D(r.TEXTURE_2D,G,0,0,fe.width,fe.height,de,Ee,fe.data):t.texImage2D(r.TEXTURE_2D,G,Ce,fe.width,fe.height,0,de,Ee,fe.data);y.generateMipmaps=!1}else Ue?(nt&&t.texStorage2D(r.TEXTURE_2D,ie,Ce,J.width,J.height),I&&t.texSubImage2D(r.TEXTURE_2D,0,0,0,J.width,J.height,de,Ee,J.data)):t.texImage2D(r.TEXTURE_2D,0,Ce,J.width,J.height,0,de,Ee,J.data);else if(y.isCompressedTexture)if(y.isCompressedArrayTexture){Ue&&nt&&t.texStorage3D(r.TEXTURE_2D_ARRAY,ie,Ce,Ve[0].width,Ve[0].height,J.depth);for(let G=0,K=Ve.length;G<K;G++)if(fe=Ve[G],y.format!==Zt)if(de!==null)if(Ue){if(I)if(y.layerUpdates.size>0){const ce=pc(fe.width,fe.height,y.format,y.type);for(const ae of y.layerUpdates){const Ie=fe.data.subarray(ae*ce/fe.data.BYTES_PER_ELEMENT,(ae+1)*ce/fe.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,G,0,0,ae,fe.width,fe.height,1,de,Ie)}y.clearLayerUpdates()}else t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,G,0,0,0,fe.width,fe.height,J.depth,de,fe.data)}else t.compressedTexImage3D(r.TEXTURE_2D_ARRAY,G,Ce,fe.width,fe.height,J.depth,0,fe.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ue?I&&t.texSubImage3D(r.TEXTURE_2D_ARRAY,G,0,0,0,fe.width,fe.height,J.depth,de,Ee,fe.data):t.texImage3D(r.TEXTURE_2D_ARRAY,G,Ce,fe.width,fe.height,J.depth,0,de,Ee,fe.data)}else{Ue&&nt&&t.texStorage2D(r.TEXTURE_2D,ie,Ce,Ve[0].width,Ve[0].height);for(let G=0,K=Ve.length;G<K;G++)fe=Ve[G],y.format!==Zt?de!==null?Ue?I&&t.compressedTexSubImage2D(r.TEXTURE_2D,G,0,0,fe.width,fe.height,de,fe.data):t.compressedTexImage2D(r.TEXTURE_2D,G,Ce,fe.width,fe.height,0,fe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ue?I&&t.texSubImage2D(r.TEXTURE_2D,G,0,0,fe.width,fe.height,de,Ee,fe.data):t.texImage2D(r.TEXTURE_2D,G,Ce,fe.width,fe.height,0,de,Ee,fe.data)}else if(y.isDataArrayTexture)if(Ue){if(nt&&t.texStorage3D(r.TEXTURE_2D_ARRAY,ie,Ce,J.width,J.height,J.depth),I)if(y.layerUpdates.size>0){const G=pc(J.width,J.height,y.format,y.type);for(const K of y.layerUpdates){const ce=J.data.subarray(K*G/J.data.BYTES_PER_ELEMENT,(K+1)*G/J.data.BYTES_PER_ELEMENT);t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,K,J.width,J.height,1,de,Ee,ce)}y.clearLayerUpdates()}else t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,J.width,J.height,J.depth,de,Ee,J.data)}else t.texImage3D(r.TEXTURE_2D_ARRAY,0,Ce,J.width,J.height,J.depth,0,de,Ee,J.data);else if(y.isData3DTexture)Ue?(nt&&t.texStorage3D(r.TEXTURE_3D,ie,Ce,J.width,J.height,J.depth),I&&t.texSubImage3D(r.TEXTURE_3D,0,0,0,0,J.width,J.height,J.depth,de,Ee,J.data)):t.texImage3D(r.TEXTURE_3D,0,Ce,J.width,J.height,J.depth,0,de,Ee,J.data);else if(y.isFramebufferTexture){if(nt)if(Ue)t.texStorage2D(r.TEXTURE_2D,ie,Ce,J.width,J.height);else{let G=J.width,K=J.height;for(let ce=0;ce<ie;ce++)t.texImage2D(r.TEXTURE_2D,ce,Ce,G,K,0,de,Ee,null),G>>=1,K>>=1}}else if(Ve.length>0){if(Ue&&nt){const G=Te(Ve[0]);t.texStorage2D(r.TEXTURE_2D,ie,Ce,G.width,G.height)}for(let G=0,K=Ve.length;G<K;G++)fe=Ve[G],Ue?I&&t.texSubImage2D(r.TEXTURE_2D,G,0,0,de,Ee,fe):t.texImage2D(r.TEXTURE_2D,G,Ce,de,Ee,fe);y.generateMipmaps=!1}else if(Ue){if(nt){const G=Te(J);t.texStorage2D(r.TEXTURE_2D,ie,Ce,G.width,G.height)}I&&t.texSubImage2D(r.TEXTURE_2D,0,0,0,de,Ee,J)}else t.texImage2D(r.TEXTURE_2D,0,Ce,de,Ee,J);m(y)&&p(j),ye.__version=q.version,y.onUpdate&&y.onUpdate(y)}R.__version=y.version}function te(R,y,B){if(y.image.length!==6)return;const j=tt(R,y),$=y.source;t.bindTexture(r.TEXTURE_CUBE_MAP,R.__webglTexture,r.TEXTURE0+B);const q=n.get($);if($.version!==q.__version||j===!0){t.activeTexture(r.TEXTURE0+B);const ye=ke.getPrimaries(ke.workingColorSpace),oe=y.colorSpace===$n?null:ke.getPrimaries(y.colorSpace),ue=y.colorSpace===$n||ye===oe?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,y.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,y.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,ue);const Xe=y.isCompressedTexture||y.image[0].isCompressedTexture,J=y.image[0]&&y.image[0].isDataTexture,de=[];for(let K=0;K<6;K++)!Xe&&!J?de[K]=_(y.image[K],!0,i.maxCubemapSize):de[K]=J?y.image[K].image:y.image[K],de[K]=rt(y,de[K]);const Ee=de[0],Ce=s.convert(y.format,y.colorSpace),fe=s.convert(y.type),Ve=M(y.internalFormat,Ce,fe,y.colorSpace),Ue=y.isVideoTexture!==!0,nt=q.__version===void 0||j===!0,I=$.dataReady;let ie=C(y,Ee);Be(r.TEXTURE_CUBE_MAP,y);let G;if(Xe){Ue&&nt&&t.texStorage2D(r.TEXTURE_CUBE_MAP,ie,Ve,Ee.width,Ee.height);for(let K=0;K<6;K++){G=de[K].mipmaps;for(let ce=0;ce<G.length;ce++){const ae=G[ce];y.format!==Zt?Ce!==null?Ue?I&&t.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+K,ce,0,0,ae.width,ae.height,Ce,ae.data):t.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+K,ce,Ve,ae.width,ae.height,0,ae.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ue?I&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+K,ce,0,0,ae.width,ae.height,Ce,fe,ae.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+K,ce,Ve,ae.width,ae.height,0,Ce,fe,ae.data)}}}else{if(G=y.mipmaps,Ue&&nt){G.length>0&&ie++;const K=Te(de[0]);t.texStorage2D(r.TEXTURE_CUBE_MAP,ie,Ve,K.width,K.height)}for(let K=0;K<6;K++)if(J){Ue?I&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,0,0,de[K].width,de[K].height,Ce,fe,de[K].data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,Ve,de[K].width,de[K].height,0,Ce,fe,de[K].data);for(let ce=0;ce<G.length;ce++){const Ie=G[ce].image[K].image;Ue?I&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+K,ce+1,0,0,Ie.width,Ie.height,Ce,fe,Ie.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+K,ce+1,Ve,Ie.width,Ie.height,0,Ce,fe,Ie.data)}}else{Ue?I&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,0,0,Ce,fe,de[K]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,Ve,Ce,fe,de[K]);for(let ce=0;ce<G.length;ce++){const ae=G[ce];Ue?I&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+K,ce+1,0,0,Ce,fe,ae.image[K]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+K,ce+1,Ve,Ce,fe,ae.image[K])}}}m(y)&&p(r.TEXTURE_CUBE_MAP),q.__version=$.version,y.onUpdate&&y.onUpdate(y)}R.__version=y.version}function xe(R,y,B,j,$,q){const ye=s.convert(B.format,B.colorSpace),oe=s.convert(B.type),ue=M(B.internalFormat,ye,oe,B.colorSpace),Xe=n.get(y),J=n.get(B);if(J.__renderTarget=y,!Xe.__hasExternalTextures){const de=Math.max(1,y.width>>q),Ee=Math.max(1,y.height>>q);$===r.TEXTURE_3D||$===r.TEXTURE_2D_ARRAY?t.texImage3D($,q,ue,de,Ee,y.depth,0,ye,oe,null):t.texImage2D($,q,ue,de,Ee,0,ye,oe,null)}t.bindFramebuffer(r.FRAMEBUFFER,R),He(y)?a.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,j,$,J.__webglTexture,0,Ge(y)):($===r.TEXTURE_2D||$>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&$<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,j,$,J.__webglTexture,q),t.bindFramebuffer(r.FRAMEBUFFER,null)}function re(R,y,B){if(r.bindRenderbuffer(r.RENDERBUFFER,R),y.depthBuffer){const j=y.depthTexture,$=j&&j.isDepthTexture?j.type:null,q=x(y.stencilBuffer,$),ye=y.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,oe=Ge(y);He(y)?a.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,oe,q,y.width,y.height):B?r.renderbufferStorageMultisample(r.RENDERBUFFER,oe,q,y.width,y.height):r.renderbufferStorage(r.RENDERBUFFER,q,y.width,y.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,ye,r.RENDERBUFFER,R)}else{const j=y.textures;for(let $=0;$<j.length;$++){const q=j[$],ye=s.convert(q.format,q.colorSpace),oe=s.convert(q.type),ue=M(q.internalFormat,ye,oe,q.colorSpace),Xe=Ge(y);B&&He(y)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,Xe,ue,y.width,y.height):He(y)?a.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,Xe,ue,y.width,y.height):r.renderbufferStorage(r.RENDERBUFFER,ue,y.width,y.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function Ae(R,y){if(y&&y.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(r.FRAMEBUFFER,R),!(y.depthTexture&&y.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const j=n.get(y.depthTexture);j.__renderTarget=y,(!j.__webglTexture||y.depthTexture.image.width!==y.width||y.depthTexture.image.height!==y.height)&&(y.depthTexture.image.width=y.width,y.depthTexture.image.height=y.height,y.depthTexture.needsUpdate=!0),X(y.depthTexture,0);const $=j.__webglTexture,q=Ge(y);if(y.depthTexture.format===Wi)He(y)?a.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,$,0,q):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,$,0);else if(y.depthTexture.format===Qi)He(y)?a.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,$,0,q):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,$,0);else throw new Error("Unknown depthTexture format")}function Le(R){const y=n.get(R),B=R.isWebGLCubeRenderTarget===!0;if(y.__boundDepthTexture!==R.depthTexture){const j=R.depthTexture;if(y.__depthDisposeCallback&&y.__depthDisposeCallback(),j){const $=()=>{delete y.__boundDepthTexture,delete y.__depthDisposeCallback,j.removeEventListener("dispose",$)};j.addEventListener("dispose",$),y.__depthDisposeCallback=$}y.__boundDepthTexture=j}if(R.depthTexture&&!y.__autoAllocateDepthBuffer){if(B)throw new Error("target.depthTexture not supported in Cube render targets");Ae(y.__webglFramebuffer,R)}else if(B){y.__webglDepthbuffer=[];for(let j=0;j<6;j++)if(t.bindFramebuffer(r.FRAMEBUFFER,y.__webglFramebuffer[j]),y.__webglDepthbuffer[j]===void 0)y.__webglDepthbuffer[j]=r.createRenderbuffer(),re(y.__webglDepthbuffer[j],R,!1);else{const $=R.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,q=y.__webglDepthbuffer[j];r.bindRenderbuffer(r.RENDERBUFFER,q),r.framebufferRenderbuffer(r.FRAMEBUFFER,$,r.RENDERBUFFER,q)}}else if(t.bindFramebuffer(r.FRAMEBUFFER,y.__webglFramebuffer),y.__webglDepthbuffer===void 0)y.__webglDepthbuffer=r.createRenderbuffer(),re(y.__webglDepthbuffer,R,!1);else{const j=R.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,$=y.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,$),r.framebufferRenderbuffer(r.FRAMEBUFFER,j,r.RENDERBUFFER,$)}t.bindFramebuffer(r.FRAMEBUFFER,null)}function Oe(R,y,B){const j=n.get(R);y!==void 0&&xe(j.__webglFramebuffer,R,R.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),B!==void 0&&Le(R)}function ct(R){const y=R.texture,B=n.get(R),j=n.get(y);R.addEventListener("dispose",A);const $=R.textures,q=R.isWebGLCubeRenderTarget===!0,ye=$.length>1;if(ye||(j.__webglTexture===void 0&&(j.__webglTexture=r.createTexture()),j.__version=y.version,o.memory.textures++),q){B.__webglFramebuffer=[];for(let oe=0;oe<6;oe++)if(y.mipmaps&&y.mipmaps.length>0){B.__webglFramebuffer[oe]=[];for(let ue=0;ue<y.mipmaps.length;ue++)B.__webglFramebuffer[oe][ue]=r.createFramebuffer()}else B.__webglFramebuffer[oe]=r.createFramebuffer()}else{if(y.mipmaps&&y.mipmaps.length>0){B.__webglFramebuffer=[];for(let oe=0;oe<y.mipmaps.length;oe++)B.__webglFramebuffer[oe]=r.createFramebuffer()}else B.__webglFramebuffer=r.createFramebuffer();if(ye)for(let oe=0,ue=$.length;oe<ue;oe++){const Xe=n.get($[oe]);Xe.__webglTexture===void 0&&(Xe.__webglTexture=r.createTexture(),o.memory.textures++)}if(R.samples>0&&He(R)===!1){B.__webglMultisampledFramebuffer=r.createFramebuffer(),B.__webglColorRenderbuffer=[],t.bindFramebuffer(r.FRAMEBUFFER,B.__webglMultisampledFramebuffer);for(let oe=0;oe<$.length;oe++){const ue=$[oe];B.__webglColorRenderbuffer[oe]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,B.__webglColorRenderbuffer[oe]);const Xe=s.convert(ue.format,ue.colorSpace),J=s.convert(ue.type),de=M(ue.internalFormat,Xe,J,ue.colorSpace,R.isXRRenderTarget===!0),Ee=Ge(R);r.renderbufferStorageMultisample(r.RENDERBUFFER,Ee,de,R.width,R.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+oe,r.RENDERBUFFER,B.__webglColorRenderbuffer[oe])}r.bindRenderbuffer(r.RENDERBUFFER,null),R.depthBuffer&&(B.__webglDepthRenderbuffer=r.createRenderbuffer(),re(B.__webglDepthRenderbuffer,R,!0)),t.bindFramebuffer(r.FRAMEBUFFER,null)}}if(q){t.bindTexture(r.TEXTURE_CUBE_MAP,j.__webglTexture),Be(r.TEXTURE_CUBE_MAP,y);for(let oe=0;oe<6;oe++)if(y.mipmaps&&y.mipmaps.length>0)for(let ue=0;ue<y.mipmaps.length;ue++)xe(B.__webglFramebuffer[oe][ue],R,y,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+oe,ue);else xe(B.__webglFramebuffer[oe],R,y,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0);m(y)&&p(r.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ye){for(let oe=0,ue=$.length;oe<ue;oe++){const Xe=$[oe],J=n.get(Xe);t.bindTexture(r.TEXTURE_2D,J.__webglTexture),Be(r.TEXTURE_2D,Xe),xe(B.__webglFramebuffer,R,Xe,r.COLOR_ATTACHMENT0+oe,r.TEXTURE_2D,0),m(Xe)&&p(r.TEXTURE_2D)}t.unbindTexture()}else{let oe=r.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(oe=R.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),t.bindTexture(oe,j.__webglTexture),Be(oe,y),y.mipmaps&&y.mipmaps.length>0)for(let ue=0;ue<y.mipmaps.length;ue++)xe(B.__webglFramebuffer[ue],R,y,r.COLOR_ATTACHMENT0,oe,ue);else xe(B.__webglFramebuffer,R,y,r.COLOR_ATTACHMENT0,oe,0);m(y)&&p(oe),t.unbindTexture()}R.depthBuffer&&Le(R)}function We(R){const y=R.textures;for(let B=0,j=y.length;B<j;B++){const $=y[B];if(m($)){const q=v(R),ye=n.get($).__webglTexture;t.bindTexture(q,ye),p(q),t.unbindTexture()}}}const ut=[],U=[];function qt(R){if(R.samples>0){if(He(R)===!1){const y=R.textures,B=R.width,j=R.height;let $=r.COLOR_BUFFER_BIT;const q=R.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,ye=n.get(R),oe=y.length>1;if(oe)for(let ue=0;ue<y.length;ue++)t.bindFramebuffer(r.FRAMEBUFFER,ye.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+ue,r.RENDERBUFFER,null),t.bindFramebuffer(r.FRAMEBUFFER,ye.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+ue,r.TEXTURE_2D,null,0);t.bindFramebuffer(r.READ_FRAMEBUFFER,ye.__webglMultisampledFramebuffer),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,ye.__webglFramebuffer);for(let ue=0;ue<y.length;ue++){if(R.resolveDepthBuffer&&(R.depthBuffer&&($|=r.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&($|=r.STENCIL_BUFFER_BIT)),oe){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,ye.__webglColorRenderbuffer[ue]);const Xe=n.get(y[ue]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,Xe,0)}r.blitFramebuffer(0,0,B,j,0,0,B,j,$,r.NEAREST),l===!0&&(ut.length=0,U.length=0,ut.push(r.COLOR_ATTACHMENT0+ue),R.depthBuffer&&R.resolveDepthBuffer===!1&&(ut.push(q),U.push(q),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,U)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,ut))}if(t.bindFramebuffer(r.READ_FRAMEBUFFER,null),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),oe)for(let ue=0;ue<y.length;ue++){t.bindFramebuffer(r.FRAMEBUFFER,ye.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+ue,r.RENDERBUFFER,ye.__webglColorRenderbuffer[ue]);const Xe=n.get(y[ue]).__webglTexture;t.bindFramebuffer(r.FRAMEBUFFER,ye.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+ue,r.TEXTURE_2D,Xe,0)}t.bindFramebuffer(r.DRAW_FRAMEBUFFER,ye.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.resolveDepthBuffer===!1&&l){const y=R.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[y])}}}function Ge(R){return Math.min(i.maxSamples,R.samples)}function He(R){const y=n.get(R);return R.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&y.__useRenderToTexture!==!1}function we(R){const y=o.render.frame;u.get(R)!==y&&(u.set(R,y),R.update())}function rt(R,y){const B=R.colorSpace,j=R.format,$=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||B!==Ft&&B!==$n&&(ke.getTransfer(B)===Je?(j!==Zt||$!==zn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",B)),y}function Te(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(h.width=R.naturalWidth||R.width,h.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(h.width=R.displayWidth,h.height=R.displayHeight):(h.width=R.width,h.height=R.height),h}this.allocateTextureUnit=O,this.resetTextureUnits=F,this.setTexture2D=X,this.setTexture2DArray=W,this.setTexture3D=Z,this.setTextureCube=H,this.rebindTextures=Oe,this.setupRenderTarget=ct,this.updateRenderTargetMipmap=We,this.updateMultisampleRenderTarget=qt,this.setupDepthRenderbuffer=Le,this.setupFrameBufferTexture=xe,this.useMultisampledRTT=He}function c0(r,e){function t(n,i=$n){let s;const o=ke.getTransfer(i);if(n===zn)return r.UNSIGNED_BYTE;if(n===Oa)return r.UNSIGNED_SHORT_4_4_4_4;if(n===za)return r.UNSIGNED_SHORT_5_5_5_1;if(n===hh)return r.UNSIGNED_INT_5_9_9_9_REV;if(n===lh)return r.BYTE;if(n===ch)return r.SHORT;if(n===Us)return r.UNSIGNED_SHORT;if(n===Ba)return r.INT;if(n===gi)return r.UNSIGNED_INT;if(n===ln)return r.FLOAT;if(n===gn)return r.HALF_FLOAT;if(n===uh)return r.ALPHA;if(n===dh)return r.RGB;if(n===Zt)return r.RGBA;if(n===fh)return r.LUMINANCE;if(n===ph)return r.LUMINANCE_ALPHA;if(n===Wi)return r.DEPTH_COMPONENT;if(n===Qi)return r.DEPTH_STENCIL;if(n===ka)return r.RED;if(n===Ga)return r.RED_INTEGER;if(n===mh)return r.RG;if(n===Ha)return r.RG_INTEGER;if(n===Va)return r.RGBA_INTEGER;if(n===wr||n===Er||n===Ar||n===Cr)if(o===Je)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===wr)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Er)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Ar)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Cr)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===wr)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Er)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Ar)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Cr)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Zo||n===Jo||n===Qo||n===ea)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===Zo)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Jo)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Qo)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===ea)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===ta||n===na||n===ia)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(n===ta||n===na)return o===Je?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===ia)return o===Je?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===sa||n===ra||n===oa||n===aa||n===la||n===ca||n===ha||n===ua||n===da||n===fa||n===pa||n===ma||n===ga||n===_a)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(n===sa)return o===Je?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===ra)return o===Je?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===oa)return o===Je?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===aa)return o===Je?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===la)return o===Je?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===ca)return o===Je?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===ha)return o===Je?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===ua)return o===Je?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===da)return o===Je?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===fa)return o===Je?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===pa)return o===Je?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===ma)return o===Je?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===ga)return o===Je?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===_a)return o===Je?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Rr||n===va||n===xa)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(n===Rr)return o===Je?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===va)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===xa)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===gh||n===ya||n===Ma||n===Sa)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(n===Rr)return s.COMPRESSED_RED_RGTC1_EXT;if(n===ya)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Ma)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Sa)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Ji?r.UNSIGNED_INT_24_8:r[n]!==void 0?r[n]:null}return{convert:t}}class h0 extends Dt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Xt extends st{constructor(){super(),this.isGroup=!0,this.type="Group"}}const u0={type:"move"};class yo{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Xt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Xt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new E,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new E),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Xt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new E,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new E),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,s=null,o=null;const a=this._targetRay,l=this._grip,h=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(h&&e.hand){o=!0;for(const _ of e.hand.values()){const m=t.getJointPose(_,n),p=this._getHandJoint(h,_);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const u=h.joints["index-finger-tip"],c=h.joints["thumb-tip"],d=u.position.distanceTo(c.position),f=.02,g=.005;h.inputState.pinching&&d>f+g?(h.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!h.inputState.pinching&&d<=f-g&&(h.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&s!==null&&(i=s),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(u0)))}return a!==null&&(a.visible=i!==null),l!==null&&(l.visible=s!==null),h!==null&&(h.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new Xt;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const d0=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,f0=`
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

}`;class p0{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){const i=new xt,s=e.properties.get(i);s.__webglTexture=t.texture,(t.depthNear!=n.depthNear||t.depthFar!=n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new vt({vertexShader:d0,fragmentShader:f0,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new be(new Ot(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class m0 extends vi{constructor(e,t){super();const n=this;let i=null,s=1,o=null,a="local-floor",l=1,h=null,u=null,c=null,d=null,f=null,g=null;const _=new p0,m=t.getContextAttributes();let p=null,v=null;const M=[],x=[],C=new Q;let w=null;const A=new Dt;A.viewport=new Ye;const L=new Dt;L.viewport=new Ye;const b=[A,L],S=new h0;let P=null,F=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Y){let te=M[Y];return te===void 0&&(te=new yo,M[Y]=te),te.getTargetRaySpace()},this.getControllerGrip=function(Y){let te=M[Y];return te===void 0&&(te=new yo,M[Y]=te),te.getGripSpace()},this.getHand=function(Y){let te=M[Y];return te===void 0&&(te=new yo,M[Y]=te),te.getHandSpace()};function O(Y){const te=x.indexOf(Y.inputSource);if(te===-1)return;const xe=M[te];xe!==void 0&&(xe.update(Y.inputSource,Y.frame,h||o),xe.dispatchEvent({type:Y.type,data:Y.inputSource}))}function V(){i.removeEventListener("select",O),i.removeEventListener("selectstart",O),i.removeEventListener("selectend",O),i.removeEventListener("squeeze",O),i.removeEventListener("squeezestart",O),i.removeEventListener("squeezeend",O),i.removeEventListener("end",V),i.removeEventListener("inputsourceschange",X);for(let Y=0;Y<M.length;Y++){const te=x[Y];te!==null&&(x[Y]=null,M[Y].disconnect(te))}P=null,F=null,_.reset(),e.setRenderTarget(p),f=null,d=null,c=null,i=null,v=null,tt.stop(),n.isPresenting=!1,e.setPixelRatio(w),e.setSize(C.width,C.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Y){s=Y,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Y){a=Y,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return h||o},this.setReferenceSpace=function(Y){h=Y},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return c},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function(Y){if(i=Y,i!==null){if(p=e.getRenderTarget(),i.addEventListener("select",O),i.addEventListener("selectstart",O),i.addEventListener("selectend",O),i.addEventListener("squeeze",O),i.addEventListener("squeezestart",O),i.addEventListener("squeezeend",O),i.addEventListener("end",V),i.addEventListener("inputsourceschange",X),m.xrCompatible!==!0&&await t.makeXRCompatible(),w=e.getPixelRatio(),e.getSize(C),i.renderState.layers===void 0){const te={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:s};f=new XRWebGLLayer(i,t,te),i.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),v=new Jt(f.framebufferWidth,f.framebufferHeight,{format:Zt,type:zn,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil})}else{let te=null,xe=null,re=null;m.depth&&(re=m.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,te=m.stencil?Qi:Wi,xe=m.stencil?Ji:gi);const Ae={colorFormat:t.RGBA8,depthFormat:re,scaleFactor:s};c=new XRWebGLBinding(i,t),d=c.createProjectionLayer(Ae),i.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),v=new Jt(d.textureWidth,d.textureHeight,{format:Zt,type:zn,depthTexture:new Ph(d.textureWidth,d.textureHeight,xe,void 0,void 0,void 0,void 0,void 0,void 0,te),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(l),h=null,o=await i.requestReferenceSpace(a),tt.setContext(i),tt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function X(Y){for(let te=0;te<Y.removed.length;te++){const xe=Y.removed[te],re=x.indexOf(xe);re>=0&&(x[re]=null,M[re].disconnect(xe))}for(let te=0;te<Y.added.length;te++){const xe=Y.added[te];let re=x.indexOf(xe);if(re===-1){for(let Le=0;Le<M.length;Le++)if(Le>=x.length){x.push(xe),re=Le;break}else if(x[Le]===null){x[Le]=xe,re=Le;break}if(re===-1)break}const Ae=M[re];Ae&&Ae.connect(xe)}}const W=new E,Z=new E;function H(Y,te,xe){W.setFromMatrixPosition(te.matrixWorld),Z.setFromMatrixPosition(xe.matrixWorld);const re=W.distanceTo(Z),Ae=te.projectionMatrix.elements,Le=xe.projectionMatrix.elements,Oe=Ae[14]/(Ae[10]-1),ct=Ae[14]/(Ae[10]+1),We=(Ae[9]+1)/Ae[5],ut=(Ae[9]-1)/Ae[5],U=(Ae[8]-1)/Ae[0],qt=(Le[8]+1)/Le[0],Ge=Oe*U,He=Oe*qt,we=re/(-U+qt),rt=we*-U;if(te.matrixWorld.decompose(Y.position,Y.quaternion,Y.scale),Y.translateX(rt),Y.translateZ(we),Y.matrixWorld.compose(Y.position,Y.quaternion,Y.scale),Y.matrixWorldInverse.copy(Y.matrixWorld).invert(),Ae[10]===-1)Y.projectionMatrix.copy(te.projectionMatrix),Y.projectionMatrixInverse.copy(te.projectionMatrixInverse);else{const Te=Oe+we,R=ct+we,y=Ge-rt,B=He+(re-rt),j=We*ct/R*Te,$=ut*ct/R*Te;Y.projectionMatrix.makePerspective(y,B,j,$,Te,R),Y.projectionMatrixInverse.copy(Y.projectionMatrix).invert()}}function se(Y,te){te===null?Y.matrixWorld.copy(Y.matrix):Y.matrixWorld.multiplyMatrices(te.matrixWorld,Y.matrix),Y.matrixWorldInverse.copy(Y.matrixWorld).invert()}this.updateCamera=function(Y){if(i===null)return;let te=Y.near,xe=Y.far;_.texture!==null&&(_.depthNear>0&&(te=_.depthNear),_.depthFar>0&&(xe=_.depthFar)),S.near=L.near=A.near=te,S.far=L.far=A.far=xe,(P!==S.near||F!==S.far)&&(i.updateRenderState({depthNear:S.near,depthFar:S.far}),P=S.near,F=S.far),A.layers.mask=Y.layers.mask|2,L.layers.mask=Y.layers.mask|4,S.layers.mask=A.layers.mask|L.layers.mask;const re=Y.parent,Ae=S.cameras;se(S,re);for(let Le=0;Le<Ae.length;Le++)se(Ae[Le],re);Ae.length===2?H(S,A,L):S.projectionMatrix.copy(A.projectionMatrix),he(Y,S,re)};function he(Y,te,xe){xe===null?Y.matrix.copy(te.matrixWorld):(Y.matrix.copy(xe.matrixWorld),Y.matrix.invert(),Y.matrix.multiply(te.matrixWorld)),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale),Y.updateMatrixWorld(!0),Y.projectionMatrix.copy(te.projectionMatrix),Y.projectionMatrixInverse.copy(te.projectionMatrixInverse),Y.isPerspectiveCamera&&(Y.fov=es*2*Math.atan(1/Y.projectionMatrix.elements[5]),Y.zoom=1)}this.getCamera=function(){return S},this.getFoveation=function(){if(!(d===null&&f===null))return l},this.setFoveation=function(Y){l=Y,d!==null&&(d.fixedFoveation=Y),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=Y)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(S)};let Se=null;function Be(Y,te){if(u=te.getViewerPose(h||o),g=te,u!==null){const xe=u.views;f!==null&&(e.setRenderTargetFramebuffer(v,f.framebuffer),e.setRenderTarget(v));let re=!1;xe.length!==S.cameras.length&&(S.cameras.length=0,re=!0);for(let Le=0;Le<xe.length;Le++){const Oe=xe[Le];let ct=null;if(f!==null)ct=f.getViewport(Oe);else{const ut=c.getViewSubImage(d,Oe);ct=ut.viewport,Le===0&&(e.setRenderTargetTextures(v,ut.colorTexture,d.ignoreDepthValues?void 0:ut.depthStencilTexture),e.setRenderTarget(v))}let We=b[Le];We===void 0&&(We=new Dt,We.layers.enable(Le),We.viewport=new Ye,b[Le]=We),We.matrix.fromArray(Oe.transform.matrix),We.matrix.decompose(We.position,We.quaternion,We.scale),We.projectionMatrix.fromArray(Oe.projectionMatrix),We.projectionMatrixInverse.copy(We.projectionMatrix).invert(),We.viewport.set(ct.x,ct.y,ct.width,ct.height),Le===0&&(S.matrix.copy(We.matrix),S.matrix.decompose(S.position,S.quaternion,S.scale)),re===!0&&S.cameras.push(We)}const Ae=i.enabledFeatures;if(Ae&&Ae.includes("depth-sensing")){const Le=c.getDepthInformation(xe[0]);Le&&Le.isValid&&Le.texture&&_.init(e,Le,i.renderState)}}for(let xe=0;xe<M.length;xe++){const re=x[xe],Ae=M[xe];re!==null&&Ae!==void 0&&Ae.update(re,te,h||o)}Se&&Se(Y,te),te.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:te}),g=null}const tt=new Rh;tt.setAnimationLoop(Be),this.setAnimationLoop=function(Y){Se=Y},this.dispose=function(){}}}const ai=new un,g0=new Re;function _0(r,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,Eh(r)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function i(m,p,v,M,x){p.isMeshBasicMaterial||p.isMeshLambertMaterial?s(m,p):p.isMeshToonMaterial?(s(m,p),c(m,p)):p.isMeshPhongMaterial?(s(m,p),u(m,p)):p.isMeshStandardMaterial?(s(m,p),d(m,p),p.isMeshPhysicalMaterial&&f(m,p,x)):p.isMeshMatcapMaterial?(s(m,p),g(m,p)):p.isMeshDepthMaterial?s(m,p):p.isMeshDistanceMaterial?(s(m,p),_(m,p)):p.isMeshNormalMaterial?s(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?l(m,p,v,M):p.isSpriteMaterial?h(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===Nt&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===Nt&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const v=e.get(p),M=v.envMap,x=v.envMapRotation;M&&(m.envMap.value=M,ai.copy(x),ai.x*=-1,ai.y*=-1,ai.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(ai.y*=-1,ai.z*=-1),m.envMapRotation.value.setFromMatrix4(g0.makeRotationFromEuler(ai)),m.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,v,M){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*v,m.scale.value=M*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function u(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function c(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function d(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,v){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Nt&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=v.texture,m.transmissionSamplerSize.value.set(v.width,v.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function _(m,p){const v=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(v.matrixWorld),m.nearDistance.value=v.shadow.camera.near,m.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function v0(r,e,t,n){let i={},s={},o=[];const a=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function l(v,M){const x=M.program;n.uniformBlockBinding(v,x)}function h(v,M){let x=i[v.id];x===void 0&&(g(v),x=u(v),i[v.id]=x,v.addEventListener("dispose",m));const C=M.program;n.updateUBOMapping(v,C);const w=e.render.frame;s[v.id]!==w&&(d(v),s[v.id]=w)}function u(v){const M=c();v.__bindingPointIndex=M;const x=r.createBuffer(),C=v.__size,w=v.usage;return r.bindBuffer(r.UNIFORM_BUFFER,x),r.bufferData(r.UNIFORM_BUFFER,C,w),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,M,x),x}function c(){for(let v=0;v<a;v++)if(o.indexOf(v)===-1)return o.push(v),v;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(v){const M=i[v.id],x=v.uniforms,C=v.__cache;r.bindBuffer(r.UNIFORM_BUFFER,M);for(let w=0,A=x.length;w<A;w++){const L=Array.isArray(x[w])?x[w]:[x[w]];for(let b=0,S=L.length;b<S;b++){const P=L[b];if(f(P,w,b,C)===!0){const F=P.__offset,O=Array.isArray(P.value)?P.value:[P.value];let V=0;for(let X=0;X<O.length;X++){const W=O[X],Z=_(W);typeof W=="number"||typeof W=="boolean"?(P.__data[0]=W,r.bufferSubData(r.UNIFORM_BUFFER,F+V,P.__data)):W.isMatrix3?(P.__data[0]=W.elements[0],P.__data[1]=W.elements[1],P.__data[2]=W.elements[2],P.__data[3]=0,P.__data[4]=W.elements[3],P.__data[5]=W.elements[4],P.__data[6]=W.elements[5],P.__data[7]=0,P.__data[8]=W.elements[6],P.__data[9]=W.elements[7],P.__data[10]=W.elements[8],P.__data[11]=0):(W.toArray(P.__data,V),V+=Z.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,F,P.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function f(v,M,x,C){const w=v.value,A=M+"_"+x;if(C[A]===void 0)return typeof w=="number"||typeof w=="boolean"?C[A]=w:C[A]=w.clone(),!0;{const L=C[A];if(typeof w=="number"||typeof w=="boolean"){if(L!==w)return C[A]=w,!0}else if(L.equals(w)===!1)return L.copy(w),!0}return!1}function g(v){const M=v.uniforms;let x=0;const C=16;for(let A=0,L=M.length;A<L;A++){const b=Array.isArray(M[A])?M[A]:[M[A]];for(let S=0,P=b.length;S<P;S++){const F=b[S],O=Array.isArray(F.value)?F.value:[F.value];for(let V=0,X=O.length;V<X;V++){const W=O[V],Z=_(W),H=x%C,se=H%Z.boundary,he=H+se;x+=se,he!==0&&C-he<Z.storage&&(x+=C-he),F.__data=new Float32Array(Z.storage/Float32Array.BYTES_PER_ELEMENT),F.__offset=x,x+=Z.storage}}}const w=x%C;return w>0&&(x+=C-w),v.__size=x,v.__cache={},this}function _(v){const M={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(M.boundary=4,M.storage=4):v.isVector2?(M.boundary=8,M.storage=8):v.isVector3||v.isColor?(M.boundary=16,M.storage=12):v.isVector4?(M.boundary=16,M.storage=16):v.isMatrix3?(M.boundary=48,M.storage=48):v.isMatrix4?(M.boundary=64,M.storage=64):v.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",v),M}function m(v){const M=v.target;M.removeEventListener("dispose",m);const x=o.indexOf(M.__bindingPointIndex);o.splice(x,1),r.deleteBuffer(i[M.id]),delete i[M.id],delete s[M.id]}function p(){for(const v in i)r.deleteBuffer(i[v]);o=[],i={},s={}}return{bind:l,update:h,dispose:p}}class x0{constructor(e={}){const{canvas:t=ad(),context:n=null,depth:i=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:h=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:c=!1,reverseDepthBuffer:d=!1}=e;this.isWebGLRenderer=!0;let f;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=n.getContextAttributes().alpha}else f=o;const g=new Uint32Array(4),_=new Int32Array(4);let m=null,p=null;const v=[],M=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=bt,this.toneMapping=ei,this.toneMappingExposure=1;const x=this;let C=!1,w=0,A=0,L=null,b=-1,S=null;const P=new Ye,F=new Ye;let O=null;const V=new pe(0);let X=0,W=t.width,Z=t.height,H=1,se=null,he=null;const Se=new Ye(0,0,W,Z),Be=new Ye(0,0,W,Z);let tt=!1;const Y=new Ya;let te=!1,xe=!1;const re=new Re,Ae=new Re,Le=new E,Oe=new Ye,ct={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let We=!1;function ut(){return L===null?H:1}let U=n;function qt(T,D){return t.getContext(T,D)}try{const T={alpha:!0,depth:i,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:h,powerPreference:u,failIfMajorPerformanceCaveat:c};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Ua}`),t.addEventListener("webglcontextlost",K,!1),t.addEventListener("webglcontextrestored",ce,!1),t.addEventListener("webglcontextcreationerror",ae,!1),U===null){const D="webgl2";if(U=qt(D,T),U===null)throw qt(D)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(T){throw console.error("THREE.WebGLRenderer: "+T.message),T}let Ge,He,we,rt,Te,R,y,B,j,$,q,ye,oe,ue,Xe,J,de,Ee,Ce,fe,Ve,Ue,nt,I;function ie(){Ge=new bm(U),Ge.init(),Ue=new c0(U,Ge),He=new vm(U,Ge,e,Ue),we=new o0(U,Ge),He.reverseDepthBuffer&&d&&we.buffers.depth.setReversed(!0),rt=new Am(U),Te=new Xg,R=new l0(U,Ge,we,Te,He,Ue,rt),y=new ym(x),B=new Tm(x),j=new Dd(U),nt=new gm(U,j),$=new wm(U,j,rt,nt),q=new Rm(U,$,j,rt),Ce=new Cm(U,He,R),J=new xm(Te),ye=new Wg(x,y,B,Ge,He,nt,J),oe=new _0(x,Te),ue=new Yg,Xe=new Qg(Ge),Ee=new mm(x,y,B,we,q,f,l),de=new s0(x,q,He),I=new v0(U,rt,He,we),fe=new _m(U,Ge,rt),Ve=new Em(U,Ge,rt),rt.programs=ye.programs,x.capabilities=He,x.extensions=Ge,x.properties=Te,x.renderLists=ue,x.shadowMap=de,x.state=we,x.info=rt}ie();const G=new m0(x,U);this.xr=G,this.getContext=function(){return U},this.getContextAttributes=function(){return U.getContextAttributes()},this.forceContextLoss=function(){const T=Ge.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){const T=Ge.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return H},this.setPixelRatio=function(T){T!==void 0&&(H=T,this.setSize(W,Z,!1))},this.getSize=function(T){return T.set(W,Z)},this.setSize=function(T,D,z=!0){if(G.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}W=T,Z=D,t.width=Math.floor(T*H),t.height=Math.floor(D*H),z===!0&&(t.style.width=T+"px",t.style.height=D+"px"),this.setViewport(0,0,T,D)},this.getDrawingBufferSize=function(T){return T.set(W*H,Z*H).floor()},this.setDrawingBufferSize=function(T,D,z){W=T,Z=D,H=z,t.width=Math.floor(T*z),t.height=Math.floor(D*z),this.setViewport(0,0,T,D)},this.getCurrentViewport=function(T){return T.copy(P)},this.getViewport=function(T){return T.copy(Se)},this.setViewport=function(T,D,z,k){T.isVector4?Se.set(T.x,T.y,T.z,T.w):Se.set(T,D,z,k),we.viewport(P.copy(Se).multiplyScalar(H).round())},this.getScissor=function(T){return T.copy(Be)},this.setScissor=function(T,D,z,k){T.isVector4?Be.set(T.x,T.y,T.z,T.w):Be.set(T,D,z,k),we.scissor(F.copy(Be).multiplyScalar(H).round())},this.getScissorTest=function(){return tt},this.setScissorTest=function(T){we.setScissorTest(tt=T)},this.setOpaqueSort=function(T){se=T},this.setTransparentSort=function(T){he=T},this.getClearColor=function(T){return T.copy(Ee.getClearColor())},this.setClearColor=function(){Ee.setClearColor.apply(Ee,arguments)},this.getClearAlpha=function(){return Ee.getClearAlpha()},this.setClearAlpha=function(){Ee.setClearAlpha.apply(Ee,arguments)},this.clear=function(T=!0,D=!0,z=!0){let k=0;if(T){let N=!1;if(L!==null){const ee=L.texture.format;N=ee===Va||ee===Ha||ee===Ga}if(N){const ee=L.texture.type,le=ee===zn||ee===gi||ee===Us||ee===Ji||ee===Oa||ee===za,ge=Ee.getClearColor(),_e=Ee.getClearAlpha(),Pe=ge.r,De=ge.g,ve=ge.b;le?(g[0]=Pe,g[1]=De,g[2]=ve,g[3]=_e,U.clearBufferuiv(U.COLOR,0,g)):(_[0]=Pe,_[1]=De,_[2]=ve,_[3]=_e,U.clearBufferiv(U.COLOR,0,_))}else k|=U.COLOR_BUFFER_BIT}D&&(k|=U.DEPTH_BUFFER_BIT),z&&(k|=U.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),U.clear(k)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",K,!1),t.removeEventListener("webglcontextrestored",ce,!1),t.removeEventListener("webglcontextcreationerror",ae,!1),ue.dispose(),Xe.dispose(),Te.dispose(),y.dispose(),B.dispose(),q.dispose(),nt.dispose(),I.dispose(),ye.dispose(),G.dispose(),G.removeEventListener("sessionstart",cl),G.removeEventListener("sessionend",hl),ti.stop()};function K(T){T.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),C=!0}function ce(){console.log("THREE.WebGLRenderer: Context Restored."),C=!1;const T=rt.autoReset,D=de.enabled,z=de.autoUpdate,k=de.needsUpdate,N=de.type;ie(),rt.autoReset=T,de.enabled=D,de.autoUpdate=z,de.needsUpdate=k,de.type=N}function ae(T){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function Ie(T){const D=T.target;D.removeEventListener("dispose",Ie),ht(D)}function ht(T){wt(T),Te.remove(T)}function wt(T){const D=Te.get(T).programs;D!==void 0&&(D.forEach(function(z){ye.releaseProgram(z)}),T.isShaderMaterial&&ye.releaseShaderCache(T))}this.renderBufferDirect=function(T,D,z,k,N,ee){D===null&&(D=ct);const le=N.isMesh&&N.matrixWorld.determinant()<0,ge=nu(T,D,z,k,N);we.setMaterial(k,le);let _e=z.index,Pe=1;if(k.wireframe===!0){if(_e=$.getWireframeAttribute(z),_e===void 0)return;Pe=2}const De=z.drawRange,ve=z.attributes.position;let qe=De.start*Pe,it=(De.start+De.count)*Pe;ee!==null&&(qe=Math.max(qe,ee.start*Pe),it=Math.min(it,(ee.start+ee.count)*Pe)),_e!==null?(qe=Math.max(qe,0),it=Math.min(it,_e.count)):ve!=null&&(qe=Math.max(qe,0),it=Math.min(it,ve.count));const ot=it-qe;if(ot<0||ot===1/0)return;nt.setup(N,k,ge,z,_e);let Bt,je=fe;if(_e!==null&&(Bt=j.get(_e),je=Ve,je.setIndex(Bt)),N.isMesh)k.wireframe===!0?(we.setLineWidth(k.wireframeLinewidth*ut()),je.setMode(U.LINES)):je.setMode(U.TRIANGLES);else if(N.isLine){let Me=k.linewidth;Me===void 0&&(Me=1),we.setLineWidth(Me*ut()),N.isLineSegments?je.setMode(U.LINES):N.isLineLoop?je.setMode(U.LINE_LOOP):je.setMode(U.LINE_STRIP)}else N.isPoints?je.setMode(U.POINTS):N.isSprite&&je.setMode(U.TRIANGLES);if(N.isBatchedMesh)if(N._multiDrawInstances!==null)je.renderMultiDrawInstances(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount,N._multiDrawInstances);else if(Ge.get("WEBGL_multi_draw"))je.renderMultiDraw(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount);else{const Me=N._multiDrawStarts,Sn=N._multiDrawCounts,Ke=N._multiDrawCount,nn=_e?j.get(_e).bytesPerElement:1,xi=Te.get(k).currentProgram.getUniforms();for(let zt=0;zt<Ke;zt++)xi.setValue(U,"_gl_DrawID",zt),je.render(Me[zt]/nn,Sn[zt])}else if(N.isInstancedMesh)je.renderInstances(qe,ot,N.count);else if(z.isInstancedBufferGeometry){const Me=z._maxInstanceCount!==void 0?z._maxInstanceCount:1/0,Sn=Math.min(z.instanceCount,Me);je.renderInstances(qe,ot,Sn)}else je.render(qe,ot)};function Ze(T,D,z){T.transparent===!0&&T.side===pt&&T.forceSinglePass===!1?(T.side=Nt,T.needsUpdate=!0,Xs(T,D,z),T.side=On,T.needsUpdate=!0,Xs(T,D,z),T.side=pt):Xs(T,D,z)}this.compile=function(T,D,z=null){z===null&&(z=T),p=Xe.get(z),p.init(D),M.push(p),z.traverseVisible(function(N){N.isLight&&N.layers.test(D.layers)&&(p.pushLight(N),N.castShadow&&p.pushShadow(N))}),T!==z&&T.traverseVisible(function(N){N.isLight&&N.layers.test(D.layers)&&(p.pushLight(N),N.castShadow&&p.pushShadow(N))}),p.setupLights();const k=new Set;return T.traverse(function(N){if(!(N.isMesh||N.isPoints||N.isLine||N.isSprite))return;const ee=N.material;if(ee)if(Array.isArray(ee))for(let le=0;le<ee.length;le++){const ge=ee[le];Ze(ge,z,N),k.add(ge)}else Ze(ee,z,N),k.add(ee)}),M.pop(),p=null,k},this.compileAsync=function(T,D,z=null){const k=this.compile(T,D,z);return new Promise(N=>{function ee(){if(k.forEach(function(le){Te.get(le).currentProgram.isReady()&&k.delete(le)}),k.size===0){N(T);return}setTimeout(ee,10)}Ge.get("KHR_parallel_shader_compile")!==null?ee():setTimeout(ee,10)})};let tn=null;function Mn(T){tn&&tn(T)}function cl(){ti.stop()}function hl(){ti.start()}const ti=new Rh;ti.setAnimationLoop(Mn),typeof self<"u"&&ti.setContext(self),this.setAnimationLoop=function(T){tn=T,G.setAnimationLoop(T),T===null?ti.stop():ti.start()},G.addEventListener("sessionstart",cl),G.addEventListener("sessionend",hl),this.render=function(T,D){if(D!==void 0&&D.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(C===!0)return;if(T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),D.parent===null&&D.matrixWorldAutoUpdate===!0&&D.updateMatrixWorld(),G.enabled===!0&&G.isPresenting===!0&&(G.cameraAutoUpdate===!0&&G.updateCamera(D),D=G.getCamera()),T.isScene===!0&&T.onBeforeRender(x,T,D,L),p=Xe.get(T,M.length),p.init(D),M.push(p),Ae.multiplyMatrices(D.projectionMatrix,D.matrixWorldInverse),Y.setFromProjectionMatrix(Ae),xe=this.localClippingEnabled,te=J.init(this.clippingPlanes,xe),m=ue.get(T,v.length),m.init(),v.push(m),G.enabled===!0&&G.isPresenting===!0){const ee=x.xr.getDepthSensingMesh();ee!==null&&Xr(ee,D,-1/0,x.sortObjects)}Xr(T,D,0,x.sortObjects),m.finish(),x.sortObjects===!0&&m.sort(se,he),We=G.enabled===!1||G.isPresenting===!1||G.hasDepthSensing()===!1,We&&Ee.addToRenderList(m,T),this.info.render.frame++,te===!0&&J.beginShadows();const z=p.state.shadowsArray;de.render(z,T,D),te===!0&&J.endShadows(),this.info.autoReset===!0&&this.info.reset();const k=m.opaque,N=m.transmissive;if(p.setupLights(),D.isArrayCamera){const ee=D.cameras;if(N.length>0)for(let le=0,ge=ee.length;le<ge;le++){const _e=ee[le];dl(k,N,T,_e)}We&&Ee.render(T);for(let le=0,ge=ee.length;le<ge;le++){const _e=ee[le];ul(m,T,_e,_e.viewport)}}else N.length>0&&dl(k,N,T,D),We&&Ee.render(T),ul(m,T,D);L!==null&&(R.updateMultisampleRenderTarget(L),R.updateRenderTargetMipmap(L)),T.isScene===!0&&T.onAfterRender(x,T,D),nt.resetDefaultState(),b=-1,S=null,M.pop(),M.length>0?(p=M[M.length-1],te===!0&&J.setGlobalState(x.clippingPlanes,p.state.camera)):p=null,v.pop(),v.length>0?m=v[v.length-1]:m=null};function Xr(T,D,z,k){if(T.visible===!1)return;if(T.layers.test(D.layers)){if(T.isGroup)z=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(D);else if(T.isLight)p.pushLight(T),T.castShadow&&p.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||Y.intersectsSprite(T)){k&&Oe.setFromMatrixPosition(T.matrixWorld).applyMatrix4(Ae);const le=q.update(T),ge=T.material;ge.visible&&m.push(T,le,ge,z,Oe.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||Y.intersectsObject(T))){const le=q.update(T),ge=T.material;if(k&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),Oe.copy(T.boundingSphere.center)):(le.boundingSphere===null&&le.computeBoundingSphere(),Oe.copy(le.boundingSphere.center)),Oe.applyMatrix4(T.matrixWorld).applyMatrix4(Ae)),Array.isArray(ge)){const _e=le.groups;for(let Pe=0,De=_e.length;Pe<De;Pe++){const ve=_e[Pe],qe=ge[ve.materialIndex];qe&&qe.visible&&m.push(T,le,qe,z,Oe.z,ve)}}else ge.visible&&m.push(T,le,ge,z,Oe.z,null)}}const ee=T.children;for(let le=0,ge=ee.length;le<ge;le++)Xr(ee[le],D,z,k)}function ul(T,D,z,k){const N=T.opaque,ee=T.transmissive,le=T.transparent;p.setupLightsView(z),te===!0&&J.setGlobalState(x.clippingPlanes,z),k&&we.viewport(P.copy(k)),N.length>0&&Ws(N,D,z),ee.length>0&&Ws(ee,D,z),le.length>0&&Ws(le,D,z),we.buffers.depth.setTest(!0),we.buffers.depth.setMask(!0),we.buffers.color.setMask(!0),we.setPolygonOffset(!1)}function dl(T,D,z,k){if((z.isScene===!0?z.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[k.id]===void 0&&(p.state.transmissionRenderTarget[k.id]=new Jt(1,1,{generateMipmaps:!0,type:Ge.has("EXT_color_buffer_half_float")||Ge.has("EXT_color_buffer_float")?gn:zn,minFilter:Nn,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ke.workingColorSpace}));const ee=p.state.transmissionRenderTarget[k.id],le=k.viewport||P;ee.setSize(le.z,le.w);const ge=x.getRenderTarget();x.setRenderTarget(ee),x.getClearColor(V),X=x.getClearAlpha(),X<1&&x.setClearColor(16777215,.5),x.clear(),We&&Ee.render(z);const _e=x.toneMapping;x.toneMapping=ei;const Pe=k.viewport;if(k.viewport!==void 0&&(k.viewport=void 0),p.setupLightsView(k),te===!0&&J.setGlobalState(x.clippingPlanes,k),Ws(T,z,k),R.updateMultisampleRenderTarget(ee),R.updateRenderTargetMipmap(ee),Ge.has("WEBGL_multisampled_render_to_texture")===!1){let De=!1;for(let ve=0,qe=D.length;ve<qe;ve++){const it=D[ve],ot=it.object,Bt=it.geometry,je=it.material,Me=it.group;if(je.side===pt&&ot.layers.test(k.layers)){const Sn=je.side;je.side=Nt,je.needsUpdate=!0,fl(ot,z,k,Bt,je,Me),je.side=Sn,je.needsUpdate=!0,De=!0}}De===!0&&(R.updateMultisampleRenderTarget(ee),R.updateRenderTargetMipmap(ee))}x.setRenderTarget(ge),x.setClearColor(V,X),Pe!==void 0&&(k.viewport=Pe),x.toneMapping=_e}function Ws(T,D,z){const k=D.isScene===!0?D.overrideMaterial:null;for(let N=0,ee=T.length;N<ee;N++){const le=T[N],ge=le.object,_e=le.geometry,Pe=k===null?le.material:k,De=le.group;ge.layers.test(z.layers)&&fl(ge,D,z,_e,Pe,De)}}function fl(T,D,z,k,N,ee){T.onBeforeRender(x,D,z,k,N,ee),T.modelViewMatrix.multiplyMatrices(z.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),N.onBeforeRender(x,D,z,k,T,ee),N.transparent===!0&&N.side===pt&&N.forceSinglePass===!1?(N.side=Nt,N.needsUpdate=!0,x.renderBufferDirect(z,D,k,N,T,ee),N.side=On,N.needsUpdate=!0,x.renderBufferDirect(z,D,k,N,T,ee),N.side=pt):x.renderBufferDirect(z,D,k,N,T,ee),T.onAfterRender(x,D,z,k,N,ee)}function Xs(T,D,z){D.isScene!==!0&&(D=ct);const k=Te.get(T),N=p.state.lights,ee=p.state.shadowsArray,le=N.state.version,ge=ye.getParameters(T,N.state,ee,D,z),_e=ye.getProgramCacheKey(ge);let Pe=k.programs;k.environment=T.isMeshStandardMaterial?D.environment:null,k.fog=D.fog,k.envMap=(T.isMeshStandardMaterial?B:y).get(T.envMap||k.environment),k.envMapRotation=k.environment!==null&&T.envMap===null?D.environmentRotation:T.envMapRotation,Pe===void 0&&(T.addEventListener("dispose",Ie),Pe=new Map,k.programs=Pe);let De=Pe.get(_e);if(De!==void 0){if(k.currentProgram===De&&k.lightsStateVersion===le)return ml(T,ge),De}else ge.uniforms=ye.getUniforms(T),T.onBeforeCompile(ge,x),De=ye.acquireProgram(ge,_e),Pe.set(_e,De),k.uniforms=ge.uniforms;const ve=k.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(ve.clippingPlanes=J.uniform),ml(T,ge),k.needsLights=su(T),k.lightsStateVersion=le,k.needsLights&&(ve.ambientLightColor.value=N.state.ambient,ve.lightProbe.value=N.state.probe,ve.directionalLights.value=N.state.directional,ve.directionalLightShadows.value=N.state.directionalShadow,ve.spotLights.value=N.state.spot,ve.spotLightShadows.value=N.state.spotShadow,ve.rectAreaLights.value=N.state.rectArea,ve.ltc_1.value=N.state.rectAreaLTC1,ve.ltc_2.value=N.state.rectAreaLTC2,ve.pointLights.value=N.state.point,ve.pointLightShadows.value=N.state.pointShadow,ve.hemisphereLights.value=N.state.hemi,ve.directionalShadowMap.value=N.state.directionalShadowMap,ve.directionalShadowMatrix.value=N.state.directionalShadowMatrix,ve.spotShadowMap.value=N.state.spotShadowMap,ve.spotLightMatrix.value=N.state.spotLightMatrix,ve.spotLightMap.value=N.state.spotLightMap,ve.pointShadowMap.value=N.state.pointShadowMap,ve.pointShadowMatrix.value=N.state.pointShadowMatrix),k.currentProgram=De,k.uniformsList=null,De}function pl(T){if(T.uniformsList===null){const D=T.currentProgram.getUniforms();T.uniformsList=Pr.seqWithValue(D.seq,T.uniforms)}return T.uniformsList}function ml(T,D){const z=Te.get(T);z.outputColorSpace=D.outputColorSpace,z.batching=D.batching,z.batchingColor=D.batchingColor,z.instancing=D.instancing,z.instancingColor=D.instancingColor,z.instancingMorph=D.instancingMorph,z.skinning=D.skinning,z.morphTargets=D.morphTargets,z.morphNormals=D.morphNormals,z.morphColors=D.morphColors,z.morphTargetsCount=D.morphTargetsCount,z.numClippingPlanes=D.numClippingPlanes,z.numIntersection=D.numClipIntersection,z.vertexAlphas=D.vertexAlphas,z.vertexTangents=D.vertexTangents,z.toneMapping=D.toneMapping}function nu(T,D,z,k,N){D.isScene!==!0&&(D=ct),R.resetTextureUnits();const ee=D.fog,le=k.isMeshStandardMaterial?D.environment:null,ge=L===null?x.outputColorSpace:L.isXRRenderTarget===!0?L.texture.colorSpace:Ft,_e=(k.isMeshStandardMaterial?B:y).get(k.envMap||le),Pe=k.vertexColors===!0&&!!z.attributes.color&&z.attributes.color.itemSize===4,De=!!z.attributes.tangent&&(!!k.normalMap||k.anisotropy>0),ve=!!z.morphAttributes.position,qe=!!z.morphAttributes.normal,it=!!z.morphAttributes.color;let ot=ei;k.toneMapped&&(L===null||L.isXRRenderTarget===!0)&&(ot=x.toneMapping);const Bt=z.morphAttributes.position||z.morphAttributes.normal||z.morphAttributes.color,je=Bt!==void 0?Bt.length:0,Me=Te.get(k),Sn=p.state.lights;if(te===!0&&(xe===!0||T!==S)){const Yt=T===S&&k.id===b;J.setState(k,T,Yt)}let Ke=!1;k.version===Me.__version?(Me.needsLights&&Me.lightsStateVersion!==Sn.state.version||Me.outputColorSpace!==ge||N.isBatchedMesh&&Me.batching===!1||!N.isBatchedMesh&&Me.batching===!0||N.isBatchedMesh&&Me.batchingColor===!0&&N.colorTexture===null||N.isBatchedMesh&&Me.batchingColor===!1&&N.colorTexture!==null||N.isInstancedMesh&&Me.instancing===!1||!N.isInstancedMesh&&Me.instancing===!0||N.isSkinnedMesh&&Me.skinning===!1||!N.isSkinnedMesh&&Me.skinning===!0||N.isInstancedMesh&&Me.instancingColor===!0&&N.instanceColor===null||N.isInstancedMesh&&Me.instancingColor===!1&&N.instanceColor!==null||N.isInstancedMesh&&Me.instancingMorph===!0&&N.morphTexture===null||N.isInstancedMesh&&Me.instancingMorph===!1&&N.morphTexture!==null||Me.envMap!==_e||k.fog===!0&&Me.fog!==ee||Me.numClippingPlanes!==void 0&&(Me.numClippingPlanes!==J.numPlanes||Me.numIntersection!==J.numIntersection)||Me.vertexAlphas!==Pe||Me.vertexTangents!==De||Me.morphTargets!==ve||Me.morphNormals!==qe||Me.morphColors!==it||Me.toneMapping!==ot||Me.morphTargetsCount!==je)&&(Ke=!0):(Ke=!0,Me.__version=k.version);let nn=Me.currentProgram;Ke===!0&&(nn=Xs(k,D,N));let xi=!1,zt=!1,us=!1;const at=nn.getUniforms(),dn=Me.uniforms;if(we.useProgram(nn.program)&&(xi=!0,zt=!0,us=!0),k.id!==b&&(b=k.id,zt=!0),xi||S!==T){we.buffers.depth.getReversed()?(re.copy(T.projectionMatrix),cd(re),hd(re),at.setValue(U,"projectionMatrix",re)):at.setValue(U,"projectionMatrix",T.projectionMatrix),at.setValue(U,"viewMatrix",T.matrixWorldInverse);const kn=at.map.cameraPosition;kn!==void 0&&kn.setValue(U,Le.setFromMatrixPosition(T.matrixWorld)),He.logarithmicDepthBuffer&&at.setValue(U,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),(k.isMeshPhongMaterial||k.isMeshToonMaterial||k.isMeshLambertMaterial||k.isMeshBasicMaterial||k.isMeshStandardMaterial||k.isShaderMaterial)&&at.setValue(U,"isOrthographic",T.isOrthographicCamera===!0),S!==T&&(S=T,zt=!0,us=!0)}if(N.isSkinnedMesh){at.setOptional(U,N,"bindMatrix"),at.setOptional(U,N,"bindMatrixInverse");const Yt=N.skeleton;Yt&&(Yt.boneTexture===null&&Yt.computeBoneTexture(),at.setValue(U,"boneTexture",Yt.boneTexture,R))}N.isBatchedMesh&&(at.setOptional(U,N,"batchingTexture"),at.setValue(U,"batchingTexture",N._matricesTexture,R),at.setOptional(U,N,"batchingIdTexture"),at.setValue(U,"batchingIdTexture",N._indirectTexture,R),at.setOptional(U,N,"batchingColorTexture"),N._colorsTexture!==null&&at.setValue(U,"batchingColorTexture",N._colorsTexture,R));const ds=z.morphAttributes;if((ds.position!==void 0||ds.normal!==void 0||ds.color!==void 0)&&Ce.update(N,z,nn),(zt||Me.receiveShadow!==N.receiveShadow)&&(Me.receiveShadow=N.receiveShadow,at.setValue(U,"receiveShadow",N.receiveShadow)),k.isMeshGouraudMaterial&&k.envMap!==null&&(dn.envMap.value=_e,dn.flipEnvMap.value=_e.isCubeTexture&&_e.isRenderTargetTexture===!1?-1:1),k.isMeshStandardMaterial&&k.envMap===null&&D.environment!==null&&(dn.envMapIntensity.value=D.environmentIntensity),zt&&(at.setValue(U,"toneMappingExposure",x.toneMappingExposure),Me.needsLights&&iu(dn,us),ee&&k.fog===!0&&oe.refreshFogUniforms(dn,ee),oe.refreshMaterialUniforms(dn,k,H,Z,p.state.transmissionRenderTarget[T.id]),Pr.upload(U,pl(Me),dn,R)),k.isShaderMaterial&&k.uniformsNeedUpdate===!0&&(Pr.upload(U,pl(Me),dn,R),k.uniformsNeedUpdate=!1),k.isSpriteMaterial&&at.setValue(U,"center",N.center),at.setValue(U,"modelViewMatrix",N.modelViewMatrix),at.setValue(U,"normalMatrix",N.normalMatrix),at.setValue(U,"modelMatrix",N.matrixWorld),k.isShaderMaterial||k.isRawShaderMaterial){const Yt=k.uniformsGroups;for(let kn=0,Gn=Yt.length;kn<Gn;kn++){const gl=Yt[kn];I.update(gl,nn),I.bind(gl,nn)}}return nn}function iu(T,D){T.ambientLightColor.needsUpdate=D,T.lightProbe.needsUpdate=D,T.directionalLights.needsUpdate=D,T.directionalLightShadows.needsUpdate=D,T.pointLights.needsUpdate=D,T.pointLightShadows.needsUpdate=D,T.spotLights.needsUpdate=D,T.spotLightShadows.needsUpdate=D,T.rectAreaLights.needsUpdate=D,T.hemisphereLights.needsUpdate=D}function su(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return w},this.getActiveMipmapLevel=function(){return A},this.getRenderTarget=function(){return L},this.setRenderTargetTextures=function(T,D,z){Te.get(T.texture).__webglTexture=D,Te.get(T.depthTexture).__webglTexture=z;const k=Te.get(T);k.__hasExternalTextures=!0,k.__autoAllocateDepthBuffer=z===void 0,k.__autoAllocateDepthBuffer||Ge.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),k.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(T,D){const z=Te.get(T);z.__webglFramebuffer=D,z.__useDefaultFramebuffer=D===void 0},this.setRenderTarget=function(T,D=0,z=0){L=T,w=D,A=z;let k=!0,N=null,ee=!1,le=!1;if(T){const _e=Te.get(T);if(_e.__useDefaultFramebuffer!==void 0)we.bindFramebuffer(U.FRAMEBUFFER,null),k=!1;else if(_e.__webglFramebuffer===void 0)R.setupRenderTarget(T);else if(_e.__hasExternalTextures)R.rebindTextures(T,Te.get(T.texture).__webglTexture,Te.get(T.depthTexture).__webglTexture);else if(T.depthBuffer){const ve=T.depthTexture;if(_e.__boundDepthTexture!==ve){if(ve!==null&&Te.has(ve)&&(T.width!==ve.image.width||T.height!==ve.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");R.setupDepthRenderbuffer(T)}}const Pe=T.texture;(Pe.isData3DTexture||Pe.isDataArrayTexture||Pe.isCompressedArrayTexture)&&(le=!0);const De=Te.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(De[D])?N=De[D][z]:N=De[D],ee=!0):T.samples>0&&R.useMultisampledRTT(T)===!1?N=Te.get(T).__webglMultisampledFramebuffer:Array.isArray(De)?N=De[z]:N=De,P.copy(T.viewport),F.copy(T.scissor),O=T.scissorTest}else P.copy(Se).multiplyScalar(H).floor(),F.copy(Be).multiplyScalar(H).floor(),O=tt;if(we.bindFramebuffer(U.FRAMEBUFFER,N)&&k&&we.drawBuffers(T,N),we.viewport(P),we.scissor(F),we.setScissorTest(O),ee){const _e=Te.get(T.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_CUBE_MAP_POSITIVE_X+D,_e.__webglTexture,z)}else if(le){const _e=Te.get(T.texture),Pe=D||0;U.framebufferTextureLayer(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,_e.__webglTexture,z||0,Pe)}b=-1},this.readRenderTargetPixels=function(T,D,z,k,N,ee,le){if(!(T&&T.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ge=Te.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&le!==void 0&&(ge=ge[le]),ge){we.bindFramebuffer(U.FRAMEBUFFER,ge);try{const _e=T.texture,Pe=_e.format,De=_e.type;if(!He.textureFormatReadable(Pe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!He.textureTypeReadable(De)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}D>=0&&D<=T.width-k&&z>=0&&z<=T.height-N&&U.readPixels(D,z,k,N,Ue.convert(Pe),Ue.convert(De),ee)}finally{const _e=L!==null?Te.get(L).__webglFramebuffer:null;we.bindFramebuffer(U.FRAMEBUFFER,_e)}}},this.readRenderTargetPixelsAsync=async function(T,D,z,k,N,ee,le){if(!(T&&T.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ge=Te.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&le!==void 0&&(ge=ge[le]),ge){const _e=T.texture,Pe=_e.format,De=_e.type;if(!He.textureFormatReadable(Pe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!He.textureTypeReadable(De))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(D>=0&&D<=T.width-k&&z>=0&&z<=T.height-N){we.bindFramebuffer(U.FRAMEBUFFER,ge);const ve=U.createBuffer();U.bindBuffer(U.PIXEL_PACK_BUFFER,ve),U.bufferData(U.PIXEL_PACK_BUFFER,ee.byteLength,U.STREAM_READ),U.readPixels(D,z,k,N,Ue.convert(Pe),Ue.convert(De),0);const qe=L!==null?Te.get(L).__webglFramebuffer:null;we.bindFramebuffer(U.FRAMEBUFFER,qe);const it=U.fenceSync(U.SYNC_GPU_COMMANDS_COMPLETE,0);return U.flush(),await ld(U,it,4),U.bindBuffer(U.PIXEL_PACK_BUFFER,ve),U.getBufferSubData(U.PIXEL_PACK_BUFFER,0,ee),U.deleteBuffer(ve),U.deleteSync(it),ee}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(T,D=null,z=0){T.isTexture!==!0&&(As("WebGLRenderer: copyFramebufferToTexture function signature has changed."),D=arguments[0]||null,T=arguments[1]);const k=Math.pow(2,-z),N=Math.floor(T.image.width*k),ee=Math.floor(T.image.height*k),le=D!==null?D.x:0,ge=D!==null?D.y:0;R.setTexture2D(T,0),U.copyTexSubImage2D(U.TEXTURE_2D,z,0,0,le,ge,N,ee),we.unbindTexture()},this.copyTextureToTexture=function(T,D,z=null,k=null,N=0){T.isTexture!==!0&&(As("WebGLRenderer: copyTextureToTexture function signature has changed."),k=arguments[0]||null,T=arguments[1],D=arguments[2],N=arguments[3]||0,z=null);let ee,le,ge,_e,Pe,De,ve,qe,it;const ot=T.isCompressedTexture?T.mipmaps[N]:T.image;z!==null?(ee=z.max.x-z.min.x,le=z.max.y-z.min.y,ge=z.isBox3?z.max.z-z.min.z:1,_e=z.min.x,Pe=z.min.y,De=z.isBox3?z.min.z:0):(ee=ot.width,le=ot.height,ge=ot.depth||1,_e=0,Pe=0,De=0),k!==null?(ve=k.x,qe=k.y,it=k.z):(ve=0,qe=0,it=0);const Bt=Ue.convert(D.format),je=Ue.convert(D.type);let Me;D.isData3DTexture?(R.setTexture3D(D,0),Me=U.TEXTURE_3D):D.isDataArrayTexture||D.isCompressedArrayTexture?(R.setTexture2DArray(D,0),Me=U.TEXTURE_2D_ARRAY):(R.setTexture2D(D,0),Me=U.TEXTURE_2D),U.pixelStorei(U.UNPACK_FLIP_Y_WEBGL,D.flipY),U.pixelStorei(U.UNPACK_PREMULTIPLY_ALPHA_WEBGL,D.premultiplyAlpha),U.pixelStorei(U.UNPACK_ALIGNMENT,D.unpackAlignment);const Sn=U.getParameter(U.UNPACK_ROW_LENGTH),Ke=U.getParameter(U.UNPACK_IMAGE_HEIGHT),nn=U.getParameter(U.UNPACK_SKIP_PIXELS),xi=U.getParameter(U.UNPACK_SKIP_ROWS),zt=U.getParameter(U.UNPACK_SKIP_IMAGES);U.pixelStorei(U.UNPACK_ROW_LENGTH,ot.width),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,ot.height),U.pixelStorei(U.UNPACK_SKIP_PIXELS,_e),U.pixelStorei(U.UNPACK_SKIP_ROWS,Pe),U.pixelStorei(U.UNPACK_SKIP_IMAGES,De);const us=T.isDataArrayTexture||T.isData3DTexture,at=D.isDataArrayTexture||D.isData3DTexture;if(T.isRenderTargetTexture||T.isDepthTexture){const dn=Te.get(T),ds=Te.get(D),Yt=Te.get(dn.__renderTarget),kn=Te.get(ds.__renderTarget);we.bindFramebuffer(U.READ_FRAMEBUFFER,Yt.__webglFramebuffer),we.bindFramebuffer(U.DRAW_FRAMEBUFFER,kn.__webglFramebuffer);for(let Gn=0;Gn<ge;Gn++)us&&U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,Te.get(T).__webglTexture,N,De+Gn),T.isDepthTexture?(at&&U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,Te.get(D).__webglTexture,N,it+Gn),U.blitFramebuffer(_e,Pe,ee,le,ve,qe,ee,le,U.DEPTH_BUFFER_BIT,U.NEAREST)):at?U.copyTexSubImage3D(Me,N,ve,qe,it+Gn,_e,Pe,ee,le):U.copyTexSubImage2D(Me,N,ve,qe,it+Gn,_e,Pe,ee,le);we.bindFramebuffer(U.READ_FRAMEBUFFER,null),we.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else at?T.isDataTexture||T.isData3DTexture?U.texSubImage3D(Me,N,ve,qe,it,ee,le,ge,Bt,je,ot.data):D.isCompressedArrayTexture?U.compressedTexSubImage3D(Me,N,ve,qe,it,ee,le,ge,Bt,ot.data):U.texSubImage3D(Me,N,ve,qe,it,ee,le,ge,Bt,je,ot):T.isDataTexture?U.texSubImage2D(U.TEXTURE_2D,N,ve,qe,ee,le,Bt,je,ot.data):T.isCompressedTexture?U.compressedTexSubImage2D(U.TEXTURE_2D,N,ve,qe,ot.width,ot.height,Bt,ot.data):U.texSubImage2D(U.TEXTURE_2D,N,ve,qe,ee,le,Bt,je,ot);U.pixelStorei(U.UNPACK_ROW_LENGTH,Sn),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,Ke),U.pixelStorei(U.UNPACK_SKIP_PIXELS,nn),U.pixelStorei(U.UNPACK_SKIP_ROWS,xi),U.pixelStorei(U.UNPACK_SKIP_IMAGES,zt),N===0&&D.generateMipmaps&&U.generateMipmap(Me),we.unbindTexture()},this.copyTextureToTexture3D=function(T,D,z=null,k=null,N=0){return T.isTexture!==!0&&(As("WebGLRenderer: copyTextureToTexture3D function signature has changed."),z=arguments[0]||null,k=arguments[1]||null,T=arguments[2],D=arguments[3],N=arguments[4]||0),As('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(T,D,z,k,N)},this.initRenderTarget=function(T){Te.get(T).__webglFramebuffer===void 0&&R.setupRenderTarget(T)},this.initTexture=function(T){T.isCubeTexture?R.setTextureCube(T,0):T.isData3DTexture?R.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?R.setTexture2DArray(T,0):R.setTexture2D(T,0),we.unbindTexture()},this.resetState=function(){w=0,A=0,L=null,we.reset(),nt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Un}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorspace=ke._getDrawingBufferColorSpace(e),t.unpackColorSpace=ke._getUnpackColorSpace()}}class Hr{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new pe(e),this.density=t}clone(){return new Hr(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class y0 extends st{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new un,this.environmentIntensity=1,this.environmentRotation=new un,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class Uh{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=ba,this.updateRanges=[],this.version=0,this.uuid=cn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let i=0,s=this.stride;i<s;i++)this.array[e+i]=t.array[n+i];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=cn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=cn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Pt=new E;class ks{constructor(e,t,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)Pt.fromBufferAttribute(this,t),Pt.applyMatrix4(e),this.setXYZ(t,Pt.x,Pt.y,Pt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Pt.fromBufferAttribute(this,t),Pt.applyNormalMatrix(e),this.setXYZ(t,Pt.x,Pt.y,Pt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Pt.fromBufferAttribute(this,t),Pt.transformDirection(e),this.setXYZ(t,Pt.x,Pt.y,Pt.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=an(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Qe(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=Qe(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=Qe(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=Qe(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=Qe(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=an(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=an(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=an(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=an(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=Qe(t,this.array),n=Qe(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=Qe(t,this.array),n=Qe(n,this.array),i=Qe(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=Qe(t,this.array),n=Qe(n,this.array),i=Qe(i,this.array),s=Qe(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this.data.array[e+3]=s,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[i+s])}return new yt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new ks(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[i+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class Ea extends hn{static get type(){return"SpriteMaterial"}constructor(e){super(),this.isSpriteMaterial=!0,this.color=new pe(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let Ni;const _s=new E,Ui=new E,Fi=new E,Bi=new Q,vs=new Q,Fh=new Re,dr=new E,xs=new E,fr=new E,mc=new Q,Mo=new Q,gc=new Q;class _c extends st{constructor(e=new Ea){if(super(),this.isSprite=!0,this.type="Sprite",Ni===void 0){Ni=new mt;const t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new Uh(t,5);Ni.setIndex([0,1,2,0,2,3]),Ni.setAttribute("position",new ks(n,3,0,!1)),Ni.setAttribute("uv",new ks(n,2,3,!1))}this.geometry=Ni,this.material=e,this.center=new Q(.5,.5)}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Ui.setFromMatrixScale(this.matrixWorld),Fh.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),Fi.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Ui.multiplyScalar(-Fi.z);const n=this.material.rotation;let i,s;n!==0&&(s=Math.cos(n),i=Math.sin(n));const o=this.center;pr(dr.set(-.5,-.5,0),Fi,o,Ui,i,s),pr(xs.set(.5,-.5,0),Fi,o,Ui,i,s),pr(fr.set(.5,.5,0),Fi,o,Ui,i,s),mc.set(0,0),Mo.set(1,0),gc.set(1,1);let a=e.ray.intersectTriangle(dr,xs,fr,!1,_s);if(a===null&&(pr(xs.set(-.5,.5,0),Fi,o,Ui,i,s),Mo.set(0,1),a=e.ray.intersectTriangle(dr,fr,xs,!1,_s),a===null))return;const l=e.ray.origin.distanceTo(_s);l<e.near||l>e.far||t.push({distance:l,point:_s.clone(),uv:$t.getInterpolation(_s,dr,xs,fr,mc,Mo,gc,new Q),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function pr(r,e,t,n,i,s){Bi.subVectors(r,t).addScalar(.5).multiply(n),i!==void 0?(vs.x=s*Bi.x-i*Bi.y,vs.y=i*Bi.x+s*Bi.y):vs.copy(Bi),r.copy(e),r.x+=vs.x,r.y+=vs.y,r.applyMatrix4(Fh)}const vc=new E,xc=new Ye,yc=new Ye,M0=new E,Mc=new Re,mr=new E,So=new _n,Sc=new Re,To=new Gs;class S0 extends be{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=yl,this.bindMatrix=new Re,this.bindMatrixInverse=new Re,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new Rt),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,mr),this.boundingBox.expandByPoint(mr)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new _n),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,mr),this.boundingSphere.expandByPoint(mr)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const n=this.material,i=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),So.copy(this.boundingSphere),So.applyMatrix4(i),e.ray.intersectsSphere(So)!==!1&&(Sc.copy(i).invert(),To.copy(e.ray).applyMatrix4(Sc),!(this.boundingBox!==null&&To.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,To)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new Ye,t=this.geometry.attributes.skinWeight;for(let n=0,i=t.count;n<i;n++){e.fromBufferAttribute(t,n);const s=1/e.manhattanLength();s!==1/0?e.multiplyScalar(s):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===yl?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===Cu?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const n=this.skeleton,i=this.geometry;xc.fromBufferAttribute(i.attributes.skinIndex,e),yc.fromBufferAttribute(i.attributes.skinWeight,e),vc.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let s=0;s<4;s++){const o=yc.getComponent(s);if(o!==0){const a=xc.getComponent(s);Mc.multiplyMatrices(n.bones[a].matrixWorld,n.boneInverses[a]),t.addScaledVector(M0.copy(vc).applyMatrix4(Mc),o)}}return t.applyMatrix4(this.bindMatrixInverse)}}class Bh extends st{constructor(){super(),this.isBone=!0,this.type="Bone"}}class Oh extends xt{constructor(e=null,t=1,n=1,i,s,o,a,l,h=Ut,u=Ut,c,d){super(null,o,a,l,h,u,i,s,c,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Tc=new Re,T0=new Re;class Ka{constructor(e=[],t=[]){this.uuid=cn(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new Re)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const n=new Re;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const e=this.bones,t=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let s=0,o=e.length;s<o;s++){const a=e[s]?e[s].matrixWorld:T0;Tc.multiplyMatrices(a,t[s]),Tc.toArray(n,s*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new Ka(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const n=new Oh(t,e,e,Zt,ln);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){const i=this.bones[t];if(i.name===e)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,i=e.bones.length;n<i;n++){const s=e.bones[n];let o=t[s];o===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",s),o=new Bh),this.bones.push(o),this.boneInverses.push(new Re().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){const e={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,n=this.boneInverses;for(let i=0,s=t.length;i<s;i++){const o=t[i];e.bones.push(o.uuid);const a=n[i];e.boneInverses.push(a.toArray())}return e}}class Aa extends yt{constructor(e,t,n,i=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const Oi=new Re,bc=new Re,gr=[],wc=new Rt,b0=new Re,ys=new be,Ms=new _n;class zh extends be{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Aa(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,b0)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Rt),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Oi),wc.copy(e.boundingBox).applyMatrix4(Oi),this.boundingBox.union(wc)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new _n),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Oi),Ms.copy(e.boundingSphere).applyMatrix4(Oi),this.boundingSphere.union(Ms)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const n=t.morphTargetInfluences,i=this.morphTexture.source.data.data,s=n.length+1,o=e*s+1;for(let a=0;a<n.length;a++)n[a]=i[o+a]}raycast(e,t){const n=this.matrixWorld,i=this.count;if(ys.geometry=this.geometry,ys.material=this.material,ys.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Ms.copy(this.boundingSphere),Ms.applyMatrix4(n),e.ray.intersectsSphere(Ms)!==!1))for(let s=0;s<i;s++){this.getMatrixAt(s,Oi),bc.multiplyMatrices(n,Oi),ys.matrixWorld=bc,ys.raycast(e,gr);for(let o=0,a=gr.length;o<a;o++){const l=gr[o];l.instanceId=s,l.object=this,t.push(l)}gr.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Aa(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const n=t.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new Oh(new Float32Array(i*this.count),i,this.count,ka,ln));const s=this.morphTexture.source.data.data;let o=0;for(let h=0;h<n.length;h++)o+=n[h];const a=this.geometry.morphTargetsRelative?1:1-o,l=i*e;s[l]=a,s.set(n,l+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}class kh extends hn{static get type(){return"LineBasicMaterial"}constructor(e){super(),this.isLineBasicMaterial=!0,this.color=new pe(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Ur=new E,Fr=new E,Ec=new Re,Ss=new Gs,_r=new _n,bo=new E,Ac=new E;class $a extends st{constructor(e=new mt,t=new kh){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let i=1,s=t.count;i<s;i++)Ur.fromBufferAttribute(t,i-1),Fr.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=Ur.distanceTo(Fr);e.setAttribute("lineDistance",new et(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,s=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),_r.copy(n.boundingSphere),_r.applyMatrix4(i),_r.radius+=s,e.ray.intersectsSphere(_r)===!1)return;Ec.copy(i).invert(),Ss.copy(e.ray).applyMatrix4(Ec);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,h=this.isLineSegments?2:1,u=n.index,d=n.attributes.position;if(u!==null){const f=Math.max(0,o.start),g=Math.min(u.count,o.start+o.count);for(let _=f,m=g-1;_<m;_+=h){const p=u.getX(_),v=u.getX(_+1),M=vr(this,e,Ss,l,p,v);M&&t.push(M)}if(this.isLineLoop){const _=u.getX(g-1),m=u.getX(f),p=vr(this,e,Ss,l,_,m);p&&t.push(p)}}else{const f=Math.max(0,o.start),g=Math.min(d.count,o.start+o.count);for(let _=f,m=g-1;_<m;_+=h){const p=vr(this,e,Ss,l,_,_+1);p&&t.push(p)}if(this.isLineLoop){const _=vr(this,e,Ss,l,g-1,f);_&&t.push(_)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){const a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function vr(r,e,t,n,i,s){const o=r.geometry.attributes.position;if(Ur.fromBufferAttribute(o,i),Fr.fromBufferAttribute(o,s),t.distanceSqToSegment(Ur,Fr,bo,Ac)>n)return;bo.applyMatrix4(r.matrixWorld);const l=e.ray.origin.distanceTo(bo);if(!(l<e.near||l>e.far))return{distance:l,point:Ac.clone().applyMatrix4(r.matrixWorld),index:i,face:null,faceIndex:null,barycoord:null,object:r}}const Cc=new E,Rc=new E;class w0 extends $a{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let i=0,s=t.count;i<s;i+=2)Cc.fromBufferAttribute(t,i),Rc.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+Cc.distanceTo(Rc);e.setAttribute("lineDistance",new et(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class E0 extends $a{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class Za extends hn{static get type(){return"PointsMaterial"}constructor(e){super(),this.isPointsMaterial=!0,this.color=new pe(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Pc=new Re,Ca=new Gs,xr=new _n,yr=new E;class Gh extends st{constructor(e=new mt,t=new Za){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,s=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),xr.copy(n.boundingSphere),xr.applyMatrix4(i),xr.radius+=s,e.ray.intersectsSphere(xr)===!1)return;Pc.copy(i).invert(),Ca.copy(e.ray).applyMatrix4(Pc);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,h=n.index,c=n.attributes.position;if(h!==null){const d=Math.max(0,o.start),f=Math.min(h.count,o.start+o.count);for(let g=d,_=f;g<_;g++){const m=h.getX(g);yr.fromBufferAttribute(c,m),Lc(yr,m,l,i,e,t,this)}}else{const d=Math.max(0,o.start),f=Math.min(c.count,o.start+o.count);for(let g=d,_=f;g<_;g++)yr.fromBufferAttribute(c,g),Lc(yr,g,l,i,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){const a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function Lc(r,e,t,n,i,s,o){const a=Ca.distanceSqToPoint(r);if(a<t){const l=new E;Ca.closestPointToPoint(r,l),l.applyMatrix4(n);const h=i.ray.origin.distanceTo(l);if(h<i.near||h>i.far)return;s.push({distance:h,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}class Br extends xt{constructor(e,t,n,i,s,o,a,l,h){super(e,t,n,i,s,o,a,l,h),this.isCanvasTexture=!0,this.needsUpdate=!0}}class vn{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){const n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let n,i=this.getPoint(0),s=0;t.push(0);for(let o=1;o<=e;o++)n=this.getPoint(o/e),s+=n.distanceTo(i),t.push(s),i=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){const n=this.getLengths();let i=0;const s=n.length;let o;t?o=t:o=e*n[s-1];let a=0,l=s-1,h;for(;a<=l;)if(i=Math.floor(a+(l-a)/2),h=n[i]-o,h<0)a=i+1;else if(h>0)l=i-1;else{l=i;break}if(i=l,n[i]===o)return i/(s-1);const u=n[i],d=n[i+1]-u,f=(o-u)/d;return(i+f)/(s-1)}getTangent(e,t){let i=e-1e-4,s=e+1e-4;i<0&&(i=0),s>1&&(s=1);const o=this.getPoint(i),a=this.getPoint(s),l=t||(o.isVector2?new Q:new E);return l.copy(a).sub(o).normalize(),l}getTangentAt(e,t){const n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t){const n=new E,i=[],s=[],o=[],a=new E,l=new Re;for(let f=0;f<=e;f++){const g=f/e;i[f]=this.getTangentAt(g,new E)}s[0]=new E,o[0]=new E;let h=Number.MAX_VALUE;const u=Math.abs(i[0].x),c=Math.abs(i[0].y),d=Math.abs(i[0].z);u<=h&&(h=u,n.set(1,0,0)),c<=h&&(h=c,n.set(0,1,0)),d<=h&&n.set(0,0,1),a.crossVectors(i[0],n).normalize(),s[0].crossVectors(i[0],a),o[0].crossVectors(i[0],s[0]);for(let f=1;f<=e;f++){if(s[f]=s[f-1].clone(),o[f]=o[f-1].clone(),a.crossVectors(i[f-1],i[f]),a.length()>Number.EPSILON){a.normalize();const g=Math.acos(gt(i[f-1].dot(i[f]),-1,1));s[f].applyMatrix4(l.makeRotationAxis(a,g))}o[f].crossVectors(i[f],s[f])}if(t===!0){let f=Math.acos(gt(s[0].dot(s[e]),-1,1));f/=e,i[0].dot(a.crossVectors(s[0],s[e]))>0&&(f=-f);for(let g=1;g<=e;g++)s[g].applyMatrix4(l.makeRotationAxis(i[g],f*g)),o[g].crossVectors(i[g],s[g])}return{tangents:i,normals:s,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class Ja extends vn{constructor(e=0,t=0,n=1,i=1,s=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=i,this.aStartAngle=s,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(e,t=new Q){const n=t,i=Math.PI*2;let s=this.aEndAngle-this.aStartAngle;const o=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=i;for(;s>i;)s-=i;s<Number.EPSILON&&(o?s=0:s=i),this.aClockwise===!0&&!o&&(s===i?s=-i:s=s-i);const a=this.aStartAngle+e*s;let l=this.aX+this.xRadius*Math.cos(a),h=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const u=Math.cos(this.aRotation),c=Math.sin(this.aRotation),d=l-this.aX,f=h-this.aY;l=d*u-f*c+this.aX,h=d*c+f*u+this.aY}return n.set(l,h)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class A0 extends Ja{constructor(e,t,n,i,s,o){super(e,t,n,n,i,s,o),this.isArcCurve=!0,this.type="ArcCurve"}}function Qa(){let r=0,e=0,t=0,n=0;function i(s,o,a,l){r=s,e=a,t=-3*s+3*o-2*a-l,n=2*s-2*o+a+l}return{initCatmullRom:function(s,o,a,l,h){i(o,a,h*(a-s),h*(l-o))},initNonuniformCatmullRom:function(s,o,a,l,h,u,c){let d=(o-s)/h-(a-s)/(h+u)+(a-o)/u,f=(a-o)/u-(l-o)/(u+c)+(l-a)/c;d*=u,f*=u,i(o,a,d,f)},calc:function(s){const o=s*s,a=o*s;return r+e*s+t*o+n*a}}}const Mr=new E,wo=new Qa,Eo=new Qa,Ao=new Qa;class C0 extends vn{constructor(e=[],t=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=i}getPoint(e,t=new E){const n=t,i=this.points,s=i.length,o=(s-(this.closed?0:1))*e;let a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/s)+1)*s:l===0&&a===s-1&&(a=s-2,l=1);let h,u;this.closed||a>0?h=i[(a-1)%s]:(Mr.subVectors(i[0],i[1]).add(i[0]),h=Mr);const c=i[a%s],d=i[(a+1)%s];if(this.closed||a+2<s?u=i[(a+2)%s]:(Mr.subVectors(i[s-1],i[s-2]).add(i[s-1]),u=Mr),this.curveType==="centripetal"||this.curveType==="chordal"){const f=this.curveType==="chordal"?.5:.25;let g=Math.pow(h.distanceToSquared(c),f),_=Math.pow(c.distanceToSquared(d),f),m=Math.pow(d.distanceToSquared(u),f);_<1e-4&&(_=1),g<1e-4&&(g=_),m<1e-4&&(m=_),wo.initNonuniformCatmullRom(h.x,c.x,d.x,u.x,g,_,m),Eo.initNonuniformCatmullRom(h.y,c.y,d.y,u.y,g,_,m),Ao.initNonuniformCatmullRom(h.z,c.z,d.z,u.z,g,_,m)}else this.curveType==="catmullrom"&&(wo.initCatmullRom(h.x,c.x,d.x,u.x,this.tension),Eo.initCatmullRom(h.y,c.y,d.y,u.y,this.tension),Ao.initCatmullRom(h.z,c.z,d.z,u.z,this.tension));return n.set(wo.calc(l),Eo.calc(l),Ao.calc(l)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(i.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const i=this.points[t];e.points.push(i.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(new E().fromArray(i))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function Ic(r,e,t,n,i){const s=(n-e)*.5,o=(i-t)*.5,a=r*r,l=r*a;return(2*t-2*n+s+o)*l+(-3*t+3*n-2*s-o)*a+s*r+t}function R0(r,e){const t=1-r;return t*t*e}function P0(r,e){return 2*(1-r)*r*e}function L0(r,e){return r*r*e}function Ls(r,e,t,n){return R0(r,e)+P0(r,t)+L0(r,n)}function I0(r,e){const t=1-r;return t*t*t*e}function D0(r,e){const t=1-r;return 3*t*t*r*e}function N0(r,e){return 3*(1-r)*r*r*e}function U0(r,e){return r*r*r*e}function Is(r,e,t,n,i){return I0(r,e)+D0(r,t)+N0(r,n)+U0(r,i)}class Hh extends vn{constructor(e=new Q,t=new Q,n=new Q,i=new Q){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new Q){const n=t,i=this.v0,s=this.v1,o=this.v2,a=this.v3;return n.set(Is(e,i.x,s.x,o.x,a.x),Is(e,i.y,s.y,o.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class F0 extends vn{constructor(e=new E,t=new E,n=new E,i=new E){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new E){const n=t,i=this.v0,s=this.v1,o=this.v2,a=this.v3;return n.set(Is(e,i.x,s.x,o.x,a.x),Is(e,i.y,s.y,o.y,a.y),Is(e,i.z,s.z,o.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class Vh extends vn{constructor(e=new Q,t=new Q){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new Q){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new Q){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class B0 extends vn{constructor(e=new E,t=new E){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new E){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new E){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Wh extends vn{constructor(e=new Q,t=new Q,n=new Q){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new Q){const n=t,i=this.v0,s=this.v1,o=this.v2;return n.set(Ls(e,i.x,s.x,o.x),Ls(e,i.y,s.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class O0 extends vn{constructor(e=new E,t=new E,n=new E){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new E){const n=t,i=this.v0,s=this.v1,o=this.v2;return n.set(Ls(e,i.x,s.x,o.x),Ls(e,i.y,s.y,o.y),Ls(e,i.z,s.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Xh extends vn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new Q){const n=t,i=this.points,s=(i.length-1)*e,o=Math.floor(s),a=s-o,l=i[o===0?o:o-1],h=i[o],u=i[o>i.length-2?i.length-1:o+1],c=i[o>i.length-3?i.length-1:o+2];return n.set(Ic(a,l.x,h.x,u.x,c.x),Ic(a,l.y,h.y,u.y,c.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(i.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const i=this.points[t];e.points.push(i.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(new Q().fromArray(i))}return this}}var Dc=Object.freeze({__proto__:null,ArcCurve:A0,CatmullRomCurve3:C0,CubicBezierCurve:Hh,CubicBezierCurve3:F0,EllipseCurve:Ja,LineCurve:Vh,LineCurve3:B0,QuadraticBezierCurve:Wh,QuadraticBezierCurve3:O0,SplineCurve:Xh});class z0 extends vn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){const n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Dc[n](t,e))}return this}getPoint(e,t){const n=e*this.getLength(),i=this.getCurveLengths();let s=0;for(;s<i.length;){if(i[s]>=n){const o=i[s]-n,a=this.curves[s],l=a.getLength(),h=l===0?0:1-o/l;return a.getPointAt(h,t)}s++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let n=0,i=this.curves.length;n<i;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let n;for(let i=0,s=this.curves;i<s.length;i++){const o=s[i],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,l=o.getPoints(a);for(let h=0;h<l.length;h++){const u=l[h];n&&n.equals(u)||(t.push(u),n=u)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const i=e.curves[t];this.curves.push(i.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){const i=this.curves[t];e.curves.push(i.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const i=e.curves[t];this.curves.push(new Dc[i.type]().fromJSON(i))}return this}}class k0 extends z0{constructor(e){super(),this.type="Path",this.currentPoint=new Q,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){const n=new Vh(this.currentPoint.clone(),new Q(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,i){const s=new Wh(this.currentPoint.clone(),new Q(e,t),new Q(n,i));return this.curves.push(s),this.currentPoint.set(n,i),this}bezierCurveTo(e,t,n,i,s,o){const a=new Hh(this.currentPoint.clone(),new Q(e,t),new Q(n,i),new Q(s,o));return this.curves.push(a),this.currentPoint.set(s,o),this}splineThru(e){const t=[this.currentPoint.clone()].concat(e),n=new Xh(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,i,s,o){const a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+a,t+l,n,i,s,o),this}absarc(e,t,n,i,s,o){return this.absellipse(e,t,n,n,i,s,o),this}ellipse(e,t,n,i,s,o,a,l){const h=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(e+h,t+u,n,i,s,o,a,l),this}absellipse(e,t,n,i,s,o,a,l){const h=new Ja(e,t,n,i,s,o,a,l);if(this.curves.length>0){const c=h.getPoint(0);c.equals(this.currentPoint)||this.lineTo(c.x,c.y)}this.curves.push(h);const u=h.getPoint(1);return this.currentPoint.copy(u),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class el extends mt{constructor(e=[new Q(0,-.5),new Q(.5,0),new Q(0,.5)],t=12,n=0,i=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:n,phiLength:i},t=Math.floor(t),i=gt(i,0,Math.PI*2);const s=[],o=[],a=[],l=[],h=[],u=1/t,c=new E,d=new Q,f=new E,g=new E,_=new E;let m=0,p=0;for(let v=0;v<=e.length-1;v++)switch(v){case 0:m=e[v+1].x-e[v].x,p=e[v+1].y-e[v].y,f.x=p*1,f.y=-m,f.z=p*0,_.copy(f),f.normalize(),l.push(f.x,f.y,f.z);break;case e.length-1:l.push(_.x,_.y,_.z);break;default:m=e[v+1].x-e[v].x,p=e[v+1].y-e[v].y,f.x=p*1,f.y=-m,f.z=p*0,g.copy(f),f.x+=_.x,f.y+=_.y,f.z+=_.z,f.normalize(),l.push(f.x,f.y,f.z),_.copy(g)}for(let v=0;v<=t;v++){const M=n+v*u*i,x=Math.sin(M),C=Math.cos(M);for(let w=0;w<=e.length-1;w++){c.x=e[w].x*x,c.y=e[w].y,c.z=e[w].x*C,o.push(c.x,c.y,c.z),d.x=v/t,d.y=w/(e.length-1),a.push(d.x,d.y);const A=l[3*w+0]*x,L=l[3*w+1],b=l[3*w+0]*C;h.push(A,L,b)}}for(let v=0;v<t;v++)for(let M=0;M<e.length-1;M++){const x=M+v*e.length,C=x,w=x+e.length,A=x+e.length+1,L=x+1;s.push(C,w,L),s.push(A,L,w)}this.setIndex(s),this.setAttribute("position",new et(o,3)),this.setAttribute("uv",new et(a,2)),this.setAttribute("normal",new et(h,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new el(e.points,e.segments,e.phiStart,e.phiLength)}}class tl extends el{constructor(e=1,t=1,n=4,i=8){const s=new k0;s.absarc(0,-t/2,e,Math.PI*1.5,0),s.absarc(0,t/2,e,0,Math.PI*.5),super(s.getPoints(n),i),this.type="CapsuleGeometry",this.parameters={radius:e,length:t,capSegments:n,radialSegments:i}}static fromJSON(e){return new tl(e.radius,e.length,e.capSegments,e.radialSegments)}}class mn extends mt{constructor(e=1,t=1,n=1,i=32,s=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:i,heightSegments:s,openEnded:o,thetaStart:a,thetaLength:l};const h=this;i=Math.floor(i),s=Math.floor(s);const u=[],c=[],d=[],f=[];let g=0;const _=[],m=n/2;let p=0;v(),o===!1&&(e>0&&M(!0),t>0&&M(!1)),this.setIndex(u),this.setAttribute("position",new et(c,3)),this.setAttribute("normal",new et(d,3)),this.setAttribute("uv",new et(f,2));function v(){const x=new E,C=new E;let w=0;const A=(t-e)/n;for(let L=0;L<=s;L++){const b=[],S=L/s,P=S*(t-e)+e;for(let F=0;F<=i;F++){const O=F/i,V=O*l+a,X=Math.sin(V),W=Math.cos(V);C.x=P*X,C.y=-S*n+m,C.z=P*W,c.push(C.x,C.y,C.z),x.set(X,A,W).normalize(),d.push(x.x,x.y,x.z),f.push(O,1-S),b.push(g++)}_.push(b)}for(let L=0;L<i;L++)for(let b=0;b<s;b++){const S=_[b][L],P=_[b+1][L],F=_[b+1][L+1],O=_[b][L+1];(e>0||b!==0)&&(u.push(S,P,O),w+=3),(t>0||b!==s-1)&&(u.push(P,F,O),w+=3)}h.addGroup(p,w,0),p+=w}function M(x){const C=g,w=new Q,A=new E;let L=0;const b=x===!0?e:t,S=x===!0?1:-1;for(let F=1;F<=i;F++)c.push(0,m*S,0),d.push(0,S,0),f.push(.5,.5),g++;const P=g;for(let F=0;F<=i;F++){const V=F/i*l+a,X=Math.cos(V),W=Math.sin(V);A.x=b*W,A.y=m*S,A.z=b*X,c.push(A.x,A.y,A.z),d.push(0,S,0),w.x=X*.5+.5,w.y=W*.5*S+.5,f.push(w.x,w.y),g++}for(let F=0;F<i;F++){const O=C+F,V=P+F;x===!0?u.push(V,V+1,O):u.push(V+1,V,O),L+=3}h.addGroup(p,L,x===!0?1:2),p+=L}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new mn(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class nl extends mt{constructor(e=[],t=[],n=1,i=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:i};const s=[],o=[];a(i),h(n),u(),this.setAttribute("position",new et(s,3)),this.setAttribute("normal",new et(s.slice(),3)),this.setAttribute("uv",new et(o,2)),i===0?this.computeVertexNormals():this.normalizeNormals();function a(v){const M=new E,x=new E,C=new E;for(let w=0;w<t.length;w+=3)f(t[w+0],M),f(t[w+1],x),f(t[w+2],C),l(M,x,C,v)}function l(v,M,x,C){const w=C+1,A=[];for(let L=0;L<=w;L++){A[L]=[];const b=v.clone().lerp(x,L/w),S=M.clone().lerp(x,L/w),P=w-L;for(let F=0;F<=P;F++)F===0&&L===w?A[L][F]=b:A[L][F]=b.clone().lerp(S,F/P)}for(let L=0;L<w;L++)for(let b=0;b<2*(w-L)-1;b++){const S=Math.floor(b/2);b%2===0?(d(A[L][S+1]),d(A[L+1][S]),d(A[L][S])):(d(A[L][S+1]),d(A[L+1][S+1]),d(A[L+1][S]))}}function h(v){const M=new E;for(let x=0;x<s.length;x+=3)M.x=s[x+0],M.y=s[x+1],M.z=s[x+2],M.normalize().multiplyScalar(v),s[x+0]=M.x,s[x+1]=M.y,s[x+2]=M.z}function u(){const v=new E;for(let M=0;M<s.length;M+=3){v.x=s[M+0],v.y=s[M+1],v.z=s[M+2];const x=m(v)/2/Math.PI+.5,C=p(v)/Math.PI+.5;o.push(x,1-C)}g(),c()}function c(){for(let v=0;v<o.length;v+=6){const M=o[v+0],x=o[v+2],C=o[v+4],w=Math.max(M,x,C),A=Math.min(M,x,C);w>.9&&A<.1&&(M<.2&&(o[v+0]+=1),x<.2&&(o[v+2]+=1),C<.2&&(o[v+4]+=1))}}function d(v){s.push(v.x,v.y,v.z)}function f(v,M){const x=v*3;M.x=e[x+0],M.y=e[x+1],M.z=e[x+2]}function g(){const v=new E,M=new E,x=new E,C=new E,w=new Q,A=new Q,L=new Q;for(let b=0,S=0;b<s.length;b+=9,S+=6){v.set(s[b+0],s[b+1],s[b+2]),M.set(s[b+3],s[b+4],s[b+5]),x.set(s[b+6],s[b+7],s[b+8]),w.set(o[S+0],o[S+1]),A.set(o[S+2],o[S+3]),L.set(o[S+4],o[S+5]),C.copy(v).add(M).add(x).divideScalar(3);const P=m(C);_(w,S+0,v,P),_(A,S+2,M,P),_(L,S+4,x,P)}}function _(v,M,x,C){C<0&&v.x===1&&(o[M]=v.x-1),x.x===0&&x.z===0&&(o[M]=C/2/Math.PI+.5)}function m(v){return Math.atan2(v.z,-v.x)}function p(v){return Math.atan2(-v.y,Math.sqrt(v.x*v.x+v.z*v.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new nl(e.vertices,e.indices,e.radius,e.details)}}class il extends nl{constructor(e=1,t=0){const n=(1+Math.sqrt(5))/2,i=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],s=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(i,s,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new il(e.radius,e.detail)}}class Hs extends mt{constructor(e=.5,t=1,n=32,i=1,s=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:i,thetaStart:s,thetaLength:o},n=Math.max(3,n),i=Math.max(1,i);const a=[],l=[],h=[],u=[];let c=e;const d=(t-e)/i,f=new E,g=new Q;for(let _=0;_<=i;_++){for(let m=0;m<=n;m++){const p=s+m/n*o;f.x=c*Math.cos(p),f.y=c*Math.sin(p),l.push(f.x,f.y,f.z),h.push(0,0,1),g.x=(f.x/t+1)/2,g.y=(f.y/t+1)/2,u.push(g.x,g.y)}c+=d}for(let _=0;_<i;_++){const m=_*(n+1);for(let p=0;p<n;p++){const v=p+m,M=v,x=v+n+1,C=v+n+2,w=v+1;a.push(M,x,w),a.push(x,C,w)}}this.setIndex(a),this.setAttribute("position",new et(l,3)),this.setAttribute("normal",new et(h,3)),this.setAttribute("uv",new et(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Hs(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class en extends mt{constructor(e=1,t=32,n=16,i=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:i,phiLength:s,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const l=Math.min(o+a,Math.PI);let h=0;const u=[],c=new E,d=new E,f=[],g=[],_=[],m=[];for(let p=0;p<=n;p++){const v=[],M=p/n;let x=0;p===0&&o===0?x=.5/t:p===n&&l===Math.PI&&(x=-.5/t);for(let C=0;C<=t;C++){const w=C/t;c.x=-e*Math.cos(i+w*s)*Math.sin(o+M*a),c.y=e*Math.cos(o+M*a),c.z=e*Math.sin(i+w*s)*Math.sin(o+M*a),g.push(c.x,c.y,c.z),d.copy(c).normalize(),_.push(d.x,d.y,d.z),m.push(w+x,1-M),v.push(h++)}u.push(v)}for(let p=0;p<n;p++)for(let v=0;v<t;v++){const M=u[p][v+1],x=u[p][v],C=u[p+1][v],w=u[p+1][v+1];(p!==0||o>0)&&f.push(M,x,w),(p!==n-1||l<Math.PI)&&f.push(x,C,w)}this.setIndex(f),this.setAttribute("position",new et(g,3)),this.setAttribute("normal",new et(_,3)),this.setAttribute("uv",new et(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new en(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class sl extends mt{constructor(e=1,t=.4,n=12,i=48,s=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:i,arc:s},n=Math.floor(n),i=Math.floor(i);const o=[],a=[],l=[],h=[],u=new E,c=new E,d=new E;for(let f=0;f<=n;f++)for(let g=0;g<=i;g++){const _=g/i*s,m=f/n*Math.PI*2;c.x=(e+t*Math.cos(m))*Math.cos(_),c.y=(e+t*Math.cos(m))*Math.sin(_),c.z=t*Math.sin(m),a.push(c.x,c.y,c.z),u.x=e*Math.cos(_),u.y=e*Math.sin(_),d.subVectors(c,u).normalize(),l.push(d.x,d.y,d.z),h.push(g/i),h.push(f/n)}for(let f=1;f<=n;f++)for(let g=1;g<=i;g++){const _=(i+1)*f+g-1,m=(i+1)*(f-1)+g-1,p=(i+1)*(f-1)+g,v=(i+1)*f+g;o.push(_,m,v),o.push(m,p,v)}this.setIndex(o),this.setAttribute("position",new et(a,3)),this.setAttribute("normal",new et(l,3)),this.setAttribute("uv",new et(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new sl(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class G0 extends vt{static get type(){return"RawShaderMaterial"}constructor(e){super(e),this.isRawShaderMaterial=!0}}class lt extends hn{static get type(){return"MeshStandardMaterial"}constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new pe(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new pe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=vh,this.normalScale=new Q(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new un,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class xn extends lt{static get type(){return"MeshPhysicalMaterial"}constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Q(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return gt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new pe(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new pe(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new pe(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}function Sr(r,e,t){return!r||!t&&r.constructor===e?r:typeof e.BYTES_PER_ELEMENT=="number"?new e(r):Array.prototype.slice.call(r)}function H0(r){return ArrayBuffer.isView(r)&&!(r instanceof DataView)}function V0(r){function e(i,s){return r[i]-r[s]}const t=r.length,n=new Array(t);for(let i=0;i!==t;++i)n[i]=i;return n.sort(e),n}function Nc(r,e,t){const n=r.length,i=new r.constructor(n);for(let s=0,o=0;o!==n;++s){const a=t[s]*e;for(let l=0;l!==e;++l)i[o++]=r[a+l]}return i}function qh(r,e,t,n){let i=1,s=r[0];for(;s!==void 0&&s[n]===void 0;)s=r[i++];if(s===void 0)return;let o=s[n];if(o!==void 0)if(Array.isArray(o))do o=s[n],o!==void 0&&(e.push(s.time),t.push.apply(t,o)),s=r[i++];while(s!==void 0);else if(o.toArray!==void 0)do o=s[n],o!==void 0&&(e.push(s.time),o.toArray(t,t.length)),s=r[i++];while(s!==void 0);else do o=s[n],o!==void 0&&(e.push(s.time),t.push(o)),s=r[i++];while(s!==void 0)}class Vs{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let n=this._cachedIndex,i=t[n],s=t[n-1];e:{t:{let o;n:{i:if(!(e<i)){for(let a=n+2;;){if(i===void 0){if(e<s)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(s=i,i=t[++n],e<i)break t}o=t.length;break n}if(!(e>=s)){const a=t[1];e<a&&(n=2,s=a);for(let l=n-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(i=s,s=t[--n-1],e>=s)break t}o=n,n=0;break n}break e}for(;n<o;){const a=n+o>>>1;e<t[a]?o=a:n=a+1}if(i=t[n],s=t[n-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,s,i)}return this.interpolate_(n,s,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,s=e*i;for(let o=0;o!==i;++o)t[o]=n[s+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class W0 extends Vs{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Gi,endingEnd:Gi}}intervalChanged_(e,t,n){const i=this.parameterPositions;let s=e-2,o=e+1,a=i[s],l=i[o];if(a===void 0)switch(this.getSettings_().endingStart){case Hi:s=e,a=2*t-n;break;case Dr:s=i.length-2,a=t+i[s]-i[s+1];break;default:s=e,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Hi:o=e,l=2*n-t;break;case Dr:o=1,l=n+i[1]-i[0];break;default:o=e-1,l=t}const h=(n-t)*.5,u=this.valueSize;this._weightPrev=h/(t-a),this._weightNext=h/(l-n),this._offsetPrev=s*u,this._offsetNext=o*u}interpolate_(e,t,n,i){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,h=l-a,u=this._offsetPrev,c=this._offsetNext,d=this._weightPrev,f=this._weightNext,g=(n-t)/(i-t),_=g*g,m=_*g,p=-d*m+2*d*_-d*g,v=(1+d)*m+(-1.5-2*d)*_+(-.5+d)*g+1,M=(-1-f)*m+(1.5+f)*_+.5*g,x=f*m-f*_;for(let C=0;C!==a;++C)s[C]=p*o[u+C]+v*o[h+C]+M*o[l+C]+x*o[c+C];return s}}class Yh extends Vs{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,h=l-a,u=(n-t)/(i-t),c=1-u;for(let d=0;d!==a;++d)s[d]=o[h+d]*c+o[l+d]*u;return s}}class X0 extends Vs{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}}class yn{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Sr(t,this.TimeBufferType),this.values=Sr(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Sr(e.times,Array),values:Sr(e.values,Array)};const i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new X0(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Yh(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new W0(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Fs:t=this.InterpolantFactoryMethodDiscrete;break;case Bs:t=this.InterpolantFactoryMethodLinear;break;case qr:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Fs;case this.InterpolantFactoryMethodLinear:return Bs;case this.InterpolantFactoryMethodSmooth:return qr}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e}return this}trim(e,t){const n=this.times,i=n.length;let s=0,o=i-1;for(;s!==i&&n[s]<e;)++s;for(;o!==-1&&n[o]>t;)--o;if(++o,s!==0||o!==i){s>=o&&(o=Math.max(o,1),s=o-1);const a=this.getValueSize();this.times=n.slice(s,o),this.values=this.values.slice(s*a,o*a)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const n=this.times,i=this.values,s=n.length;s===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==s;a++){const l=n[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(i!==void 0&&H0(i))for(let a=0,l=i.length;a!==l;++a){const h=i[a];if(isNaN(h)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,h),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===qr,s=e.length-1;let o=1;for(let a=1;a<s;++a){let l=!1;const h=e[a],u=e[a+1];if(h!==u&&(a!==1||h!==e[0]))if(i)l=!0;else{const c=a*n,d=c-n,f=c+n;for(let g=0;g!==n;++g){const _=t[c+g];if(_!==t[d+g]||_!==t[f+g]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];const c=a*n,d=o*n;for(let f=0;f!==n;++f)t[d+f]=t[c+f]}++o}}if(s>0){e[o]=e[s];for(let a=s*n,l=o*n,h=0;h!==n;++h)t[l+h]=t[a+h];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*n)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),n=this.constructor,i=new n(this.name,e,t);return i.createInterpolant=this.createInterpolant,i}}yn.prototype.TimeBufferType=Float32Array;yn.prototype.ValueBufferType=Float32Array;yn.prototype.DefaultInterpolation=Bs;class as extends yn{constructor(e,t,n){super(e,t,n)}}as.prototype.ValueTypeName="bool";as.prototype.ValueBufferType=Array;as.prototype.DefaultInterpolation=Fs;as.prototype.InterpolantFactoryMethodLinear=void 0;as.prototype.InterpolantFactoryMethodSmooth=void 0;class jh extends yn{}jh.prototype.ValueTypeName="color";class ns extends yn{}ns.prototype.ValueTypeName="number";class q0 extends Vs{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-t)/(i-t);let h=e*a;for(let u=h+a;h!==u;h+=4)Qt.slerpFlat(s,0,o,h-a,o,h,l);return s}}class is extends yn{InterpolantFactoryMethodLinear(e){return new q0(this.times,this.values,this.getValueSize(),e)}}is.prototype.ValueTypeName="quaternion";is.prototype.InterpolantFactoryMethodSmooth=void 0;class ls extends yn{constructor(e,t,n){super(e,t,n)}}ls.prototype.ValueTypeName="string";ls.prototype.ValueBufferType=Array;ls.prototype.DefaultInterpolation=Fs;ls.prototype.InterpolantFactoryMethodLinear=void 0;ls.prototype.InterpolantFactoryMethodSmooth=void 0;class ss extends yn{}ss.prototype.ValueTypeName="vector";class Ra{constructor(e="",t=-1,n=[],i=Wa){this.name=e,this.tracks=n,this.duration=t,this.blendMode=i,this.uuid=cn(),this.duration<0&&this.resetDuration()}static parse(e){const t=[],n=e.tracks,i=1/(e.fps||1);for(let o=0,a=n.length;o!==a;++o)t.push(j0(n[o]).scale(i));const s=new this(e.name,e.duration,t,e.blendMode);return s.uuid=e.uuid,s}static toJSON(e){const t=[],n=e.tracks,i={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let s=0,o=n.length;s!==o;++s)t.push(yn.toJSON(n[s]));return i}static CreateFromMorphTargetSequence(e,t,n,i){const s=t.length,o=[];for(let a=0;a<s;a++){let l=[],h=[];l.push((a+s-1)%s,a,(a+1)%s),h.push(0,1,0);const u=V0(l);l=Nc(l,1,u),h=Nc(h,1,u),!i&&l[0]===0&&(l.push(s),h.push(h[0])),o.push(new ns(".morphTargetInfluences["+t[a].name+"]",l,h).scale(1/n))}return new this(e,-1,o)}static findByName(e,t){let n=e;if(!Array.isArray(e)){const i=e;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===t)return n[i];return null}static CreateClipsFromMorphTargetSequences(e,t,n){const i={},s=/^([\w-]*?)([\d]+)$/;for(let a=0,l=e.length;a<l;a++){const h=e[a],u=h.name.match(s);if(u&&u.length>1){const c=u[1];let d=i[c];d||(i[c]=d=[]),d.push(h)}}const o=[];for(const a in i)o.push(this.CreateFromMorphTargetSequence(a,i[a],t,n));return o}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const n=function(c,d,f,g,_){if(f.length!==0){const m=[],p=[];qh(f,m,p,g),m.length!==0&&_.push(new c(d,m,p))}},i=[],s=e.name||"default",o=e.fps||30,a=e.blendMode;let l=e.length||-1;const h=e.hierarchy||[];for(let c=0;c<h.length;c++){const d=h[c].keys;if(!(!d||d.length===0))if(d[0].morphTargets){const f={};let g;for(g=0;g<d.length;g++)if(d[g].morphTargets)for(let _=0;_<d[g].morphTargets.length;_++)f[d[g].morphTargets[_]]=-1;for(const _ in f){const m=[],p=[];for(let v=0;v!==d[g].morphTargets.length;++v){const M=d[g];m.push(M.time),p.push(M.morphTarget===_?1:0)}i.push(new ns(".morphTargetInfluence["+_+"]",m,p))}l=f.length*o}else{const f=".bones["+t[c].name+"]";n(ss,f+".position",d,"pos",i),n(is,f+".quaternion",d,"rot",i),n(ss,f+".scale",d,"scl",i)}}return i.length===0?null:new this(s,l,i,a)}resetDuration(){const e=this.tracks;let t=0;for(let n=0,i=e.length;n!==i;++n){const s=this.tracks[n];t=Math.max(t,s.times[s.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function Y0(r){switch(r.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return ns;case"vector":case"vector2":case"vector3":case"vector4":return ss;case"color":return jh;case"quaternion":return is;case"bool":case"boolean":return as;case"string":return ls}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+r)}function j0(r){if(r.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=Y0(r.type);if(r.times===void 0){const t=[],n=[];qh(r.keys,t,n,"value"),r.times=t,r.values=n}return e.parse!==void 0?e.parse(r):new e(r.name,r.times,r.values,r.interpolation)}const Jn={enabled:!1,files:{},add:function(r,e){this.enabled!==!1&&(this.files[r]=e)},get:function(r){if(this.enabled!==!1)return this.files[r]},remove:function(r){delete this.files[r]},clear:function(){this.files={}}};class K0{constructor(e,t,n){const i=this;let s=!1,o=0,a=0,l;const h=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(u){a++,s===!1&&i.onStart!==void 0&&i.onStart(u,o,a),s=!0},this.itemEnd=function(u){o++,i.onProgress!==void 0&&i.onProgress(u,o,a),o===a&&(s=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(u){i.onError!==void 0&&i.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,c){return h.push(u,c),this},this.removeHandler=function(u){const c=h.indexOf(u);return c!==-1&&h.splice(c,2),this},this.getHandler=function(u){for(let c=0,d=h.length;c<d;c+=2){const f=h[c],g=h[c+1];if(f.global&&(f.lastIndex=0),f.test(u))return g}return null}}}const Pa=new K0;class cs{constructor(e){this.manager=e!==void 0?e:Pa,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(i,s){n.load(e,i,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}cs.DEFAULT_MATERIAL_NAME="__DEFAULT";const Cn={};class $0 extends Error{constructor(e,t){super(e),this.response=t}}class Kh extends cs{constructor(e){super(e)}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=Jn.get(e);if(s!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(s),this.manager.itemEnd(e)},0),s;if(Cn[e]!==void 0){Cn[e].push({onLoad:t,onProgress:n,onError:i});return}Cn[e]=[],Cn[e].push({onLoad:t,onProgress:n,onError:i});const o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,l=this.responseType;fetch(o).then(h=>{if(h.status===200||h.status===0){if(h.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||h.body===void 0||h.body.getReader===void 0)return h;const u=Cn[e],c=h.body.getReader(),d=h.headers.get("X-File-Size")||h.headers.get("Content-Length"),f=d?parseInt(d):0,g=f!==0;let _=0;const m=new ReadableStream({start(p){v();function v(){c.read().then(({done:M,value:x})=>{if(M)p.close();else{_+=x.byteLength;const C=new ProgressEvent("progress",{lengthComputable:g,loaded:_,total:f});for(let w=0,A=u.length;w<A;w++){const L=u[w];L.onProgress&&L.onProgress(C)}p.enqueue(x),v()}},M=>{p.error(M)})}}});return new Response(m)}else throw new $0(`fetch for "${h.url}" responded with ${h.status}: ${h.statusText}`,h)}).then(h=>{switch(l){case"arraybuffer":return h.arrayBuffer();case"blob":return h.blob();case"document":return h.text().then(u=>new DOMParser().parseFromString(u,a));case"json":return h.json();default:if(a===void 0)return h.text();{const c=/charset="?([^;"\s]*)"?/i.exec(a),d=c&&c[1]?c[1].toLowerCase():void 0,f=new TextDecoder(d);return h.arrayBuffer().then(g=>f.decode(g))}}}).then(h=>{Jn.add(e,h);const u=Cn[e];delete Cn[e];for(let c=0,d=u.length;c<d;c++){const f=u[c];f.onLoad&&f.onLoad(h)}}).catch(h=>{const u=Cn[e];if(u===void 0)throw this.manager.itemError(e),h;delete Cn[e];for(let c=0,d=u.length;c<d;c++){const f=u[c];f.onError&&f.onError(h)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class Z0 extends cs{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,o=Jn.get(e);if(o!==void 0)return s.manager.itemStart(e),setTimeout(function(){t&&t(o),s.manager.itemEnd(e)},0),o;const a=Os("img");function l(){u(),Jn.add(e,this),t&&t(this),s.manager.itemEnd(e)}function h(c){u(),i&&i(c),s.manager.itemError(e),s.manager.itemEnd(e)}function u(){a.removeEventListener("load",l,!1),a.removeEventListener("error",h,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",h,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),s.manager.itemStart(e),a.src=e,a}}class $h extends cs{constructor(e){super(e)}load(e,t,n,i){const s=new xt,o=new Z0(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){s.image=a,s.needsUpdate=!0,t!==void 0&&t(s)},n,i),s}}class Vr extends st{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new pe(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}class J0 extends Vr{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(st.DEFAULT_UP),this.updateMatrix(),this.groundColor=new pe(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const Co=new Re,Uc=new E,Fc=new E;class rl{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Q(512,512),this.map=null,this.mapPass=null,this.matrix=new Re,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ya,this._frameExtents=new Q(1,1),this._viewportCount=1,this._viewports=[new Ye(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;Uc.setFromMatrixPosition(e.matrixWorld),t.position.copy(Uc),Fc.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Fc),t.updateMatrixWorld(),Co.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Co),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Co)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class Q0 extends rl{constructor(){super(new Dt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){const t=this.camera,n=es*2*e.angle*this.focus,i=this.mapSize.width/this.mapSize.height,s=e.distance||t.far;(n!==t.fov||i!==t.aspect||s!==t.far)&&(t.fov=n,t.aspect=i,t.far=s,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class e_ extends Vr{constructor(e,t,n=0,i=Math.PI/3,s=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(st.DEFAULT_UP),this.updateMatrix(),this.target=new st,this.distance=n,this.angle=i,this.penumbra=s,this.decay=o,this.map=null,this.shadow=new Q0}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const Bc=new Re,Ts=new E,Ro=new E;class t_ extends rl{constructor(){super(new Dt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Q(4,2),this._viewportCount=6,this._viewports=[new Ye(2,1,1,1),new Ye(0,1,1,1),new Ye(3,1,1,1),new Ye(1,1,1,1),new Ye(3,0,1,1),new Ye(1,0,1,1)],this._cubeDirections=[new E(1,0,0),new E(-1,0,0),new E(0,0,1),new E(0,0,-1),new E(0,1,0),new E(0,-1,0)],this._cubeUps=[new E(0,1,0),new E(0,1,0),new E(0,1,0),new E(0,1,0),new E(0,0,1),new E(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,i=this.matrix,s=e.distance||n.far;s!==n.far&&(n.far=s,n.updateProjectionMatrix()),Ts.setFromMatrixPosition(e.matrixWorld),n.position.copy(Ts),Ro.copy(n.position),Ro.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(Ro),n.updateMatrixWorld(),i.makeTranslation(-Ts.x,-Ts.y,-Ts.z),Bc.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Bc)}}class Zh extends Vr{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new t_}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class n_ extends rl{constructor(){super(new kr(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class La extends Vr{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(st.DEFAULT_UP),this.updateMatrix(),this.target=new st,this.shadow=new n_}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class Ds{static decodeText(e){if(console.warn("THREE.LoaderUtils: decodeText() has been deprecated with r165 and will be removed with r175. Use TextDecoder instead."),typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let n=0,i=e.length;n<i;n++)t+=String.fromCharCode(e[n]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}class i_ extends cs{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,o=Jn.get(e);if(o!==void 0){if(s.manager.itemStart(e),o.then){o.then(h=>{t&&t(h),s.manager.itemEnd(e)}).catch(h=>{i&&i(h)});return}return setTimeout(function(){t&&t(o),s.manager.itemEnd(e)},0),o}const a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader;const l=fetch(e,a).then(function(h){return h.blob()}).then(function(h){return createImageBitmap(h,Object.assign(s.options,{colorSpaceConversion:"none"}))}).then(function(h){return Jn.add(e,h),t&&t(h),s.manager.itemEnd(e),h}).catch(function(h){i&&i(h),Jn.remove(e),s.manager.itemError(e),s.manager.itemEnd(e)});Jn.add(e,l),s.manager.itemStart(e)}}class s_{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Oc(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=Oc();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function Oc(){return performance.now()}class r_{constructor(e,t,n){this.binding=e,this.valueSize=n;let i,s,o;switch(t){case"quaternion":i=this._slerp,s=this._slerpAdditive,o=this._setAdditiveIdentityQuaternion,this.buffer=new Float64Array(n*6),this._workIndex=5;break;case"string":case"bool":i=this._select,s=this._select,o=this._setAdditiveIdentityOther,this.buffer=new Array(n*5);break;default:i=this._lerp,s=this._lerpAdditive,o=this._setAdditiveIdentityNumeric,this.buffer=new Float64Array(n*5)}this._mixBufferRegion=i,this._mixBufferRegionAdditive=s,this._setIdentity=o,this._origIndex=3,this._addIndex=4,this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,this.useCount=0,this.referenceCount=0}accumulate(e,t){const n=this.buffer,i=this.valueSize,s=e*i+i;let o=this.cumulativeWeight;if(o===0){for(let a=0;a!==i;++a)n[s+a]=n[a];o=t}else{o+=t;const a=t/o;this._mixBufferRegion(n,s,0,a,i)}this.cumulativeWeight=o}accumulateAdditive(e){const t=this.buffer,n=this.valueSize,i=n*this._addIndex;this.cumulativeWeightAdditive===0&&this._setIdentity(),this._mixBufferRegionAdditive(t,i,0,e,n),this.cumulativeWeightAdditive+=e}apply(e){const t=this.valueSize,n=this.buffer,i=e*t+t,s=this.cumulativeWeight,o=this.cumulativeWeightAdditive,a=this.binding;if(this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,s<1){const l=t*this._origIndex;this._mixBufferRegion(n,i,l,1-s,t)}o>0&&this._mixBufferRegionAdditive(n,i,this._addIndex*t,1,t);for(let l=t,h=t+t;l!==h;++l)if(n[l]!==n[l+t]){a.setValue(n,i);break}}saveOriginalState(){const e=this.binding,t=this.buffer,n=this.valueSize,i=n*this._origIndex;e.getValue(t,i);for(let s=n,o=i;s!==o;++s)t[s]=t[i+s%n];this._setIdentity(),this.cumulativeWeight=0,this.cumulativeWeightAdditive=0}restoreOriginalState(){const e=this.valueSize*3;this.binding.setValue(this.buffer,e)}_setAdditiveIdentityNumeric(){const e=this._addIndex*this.valueSize,t=e+this.valueSize;for(let n=e;n<t;n++)this.buffer[n]=0}_setAdditiveIdentityQuaternion(){this._setAdditiveIdentityNumeric(),this.buffer[this._addIndex*this.valueSize+3]=1}_setAdditiveIdentityOther(){const e=this._origIndex*this.valueSize,t=this._addIndex*this.valueSize;for(let n=0;n<this.valueSize;n++)this.buffer[t+n]=this.buffer[e+n]}_select(e,t,n,i,s){if(i>=.5)for(let o=0;o!==s;++o)e[t+o]=e[n+o]}_slerp(e,t,n,i){Qt.slerpFlat(e,t,e,t,e,n,i)}_slerpAdditive(e,t,n,i,s){const o=this._workIndex*s;Qt.multiplyQuaternionsFlat(e,o,e,t,e,n),Qt.slerpFlat(e,t,e,t,e,o,i)}_lerp(e,t,n,i,s){const o=1-i;for(let a=0;a!==s;++a){const l=t+a;e[l]=e[l]*o+e[n+a]*i}}_lerpAdditive(e,t,n,i,s){for(let o=0;o!==s;++o){const a=t+o;e[a]=e[a]+e[n+o]*i}}}const ol="\\[\\]\\.:\\/",o_=new RegExp("["+ol+"]","g"),al="[^"+ol+"]",a_="[^"+ol.replace("\\.","")+"]",l_=/((?:WC+[\/:])*)/.source.replace("WC",al),c_=/(WCOD+)?/.source.replace("WCOD",a_),h_=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",al),u_=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",al),d_=new RegExp("^"+l_+c_+h_+u_+"$"),f_=["material","materials","bones","map"];class p_{constructor(e,t,n){const i=n||$e.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();const n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(e,t)}setValue(e,t){const n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,s=n.length;i!==s;++i)n[i].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}}class $e{constructor(e,t,n){this.path=t,this.parsedPath=n||$e.parseTrackName(t),this.node=$e.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new $e.Composite(e,t,n):new $e(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(o_,"")}static parseTrackName(e){const t=d_.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){const s=n.nodeName.substring(i+1);f_.indexOf(s)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=s)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){const n=function(s){for(let o=0;o<s.length;o++){const a=s[o];if(a.name===t||a.uuid===t)return a;const l=n(a.children);if(l)return l}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,n=t.objectName,i=t.propertyName;let s=t.propertyIndex;if(e||(e=$e.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let h=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===h){h=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(h!==void 0){if(e[h]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[h]}}const o=e[i];if(o===void 0){const h=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+h+"."+i+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(s!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[s]!==void 0&&(s=e.morphTargetDictionary[s])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=s}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}$e.Composite=p_;$e.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};$e.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};$e.prototype.GetterByBindingType=[$e.prototype._getValue_direct,$e.prototype._getValue_array,$e.prototype._getValue_arrayElement,$e.prototype._getValue_toArray];$e.prototype.SetterByBindingTypeAndVersioning=[[$e.prototype._setValue_direct,$e.prototype._setValue_direct_setNeedsUpdate,$e.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[$e.prototype._setValue_array,$e.prototype._setValue_array_setNeedsUpdate,$e.prototype._setValue_array_setMatrixWorldNeedsUpdate],[$e.prototype._setValue_arrayElement,$e.prototype._setValue_arrayElement_setNeedsUpdate,$e.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[$e.prototype._setValue_fromArray,$e.prototype._setValue_fromArray_setNeedsUpdate,$e.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class m_{constructor(e,t,n=null,i=t.blendMode){this._mixer=e,this._clip=t,this._localRoot=n,this.blendMode=i;const s=t.tracks,o=s.length,a=new Array(o),l={endingStart:Gi,endingEnd:Gi};for(let h=0;h!==o;++h){const u=s[h].createInterpolant(null);a[h]=u,u.settings=l}this._interpolantSettings=l,this._interpolants=a,this._propertyBindings=new Array(o),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._weightInterpolant=null,this.loop=Pu,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=1/0,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0}play(){return this._mixer._activateAction(this),this}stop(){return this._mixer._deactivateAction(this),this.reset()}reset(){return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()}isRunning(){return this.enabled&&!this.paused&&this.timeScale!==0&&this._startTime===null&&this._mixer._isActiveAction(this)}isScheduled(){return this._mixer._isActiveAction(this)}startAt(e){return this._startTime=e,this}setLoop(e,t){return this.loop=e,this.repetitions=t,this}setEffectiveWeight(e){return this.weight=e,this._effectiveWeight=this.enabled?e:0,this.stopFading()}getEffectiveWeight(){return this._effectiveWeight}fadeIn(e){return this._scheduleFading(e,0,1)}fadeOut(e){return this._scheduleFading(e,1,0)}crossFadeFrom(e,t,n){if(e.fadeOut(t),this.fadeIn(t),n){const i=this._clip.duration,s=e._clip.duration,o=s/i,a=i/s;e.warp(1,o,t),this.warp(a,1,t)}return this}crossFadeTo(e,t,n){return e.crossFadeFrom(this,t,n)}stopFading(){const e=this._weightInterpolant;return e!==null&&(this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}setEffectiveTimeScale(e){return this.timeScale=e,this._effectiveTimeScale=this.paused?0:e,this.stopWarping()}getEffectiveTimeScale(){return this._effectiveTimeScale}setDuration(e){return this.timeScale=this._clip.duration/e,this.stopWarping()}syncWith(e){return this.time=e.time,this.timeScale=e.timeScale,this.stopWarping()}halt(e){return this.warp(this._effectiveTimeScale,0,e)}warp(e,t,n){const i=this._mixer,s=i.time,o=this.timeScale;let a=this._timeScaleInterpolant;a===null&&(a=i._lendControlInterpolant(),this._timeScaleInterpolant=a);const l=a.parameterPositions,h=a.sampleValues;return l[0]=s,l[1]=s+n,h[0]=e/o,h[1]=t/o,this}stopWarping(){const e=this._timeScaleInterpolant;return e!==null&&(this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}getMixer(){return this._mixer}getClip(){return this._clip}getRoot(){return this._localRoot||this._mixer._root}_update(e,t,n,i){if(!this.enabled){this._updateWeight(e);return}const s=this._startTime;if(s!==null){const l=(e-s)*n;l<0||n===0?t=0:(this._startTime=null,t=n*l)}t*=this._updateTimeScale(e);const o=this._updateTime(t),a=this._updateWeight(e);if(a>0){const l=this._interpolants,h=this._propertyBindings;switch(this.blendMode){case Iu:for(let u=0,c=l.length;u!==c;++u)l[u].evaluate(o),h[u].accumulateAdditive(a);break;case Wa:default:for(let u=0,c=l.length;u!==c;++u)l[u].evaluate(o),h[u].accumulate(i,a)}}}_updateWeight(e){let t=0;if(this.enabled){t=this.weight;const n=this._weightInterpolant;if(n!==null){const i=n.evaluate(e)[0];t*=i,e>n.parameterPositions[1]&&(this.stopFading(),i===0&&(this.enabled=!1))}}return this._effectiveWeight=t,t}_updateTimeScale(e){let t=0;if(!this.paused){t=this.timeScale;const n=this._timeScaleInterpolant;if(n!==null){const i=n.evaluate(e)[0];t*=i,e>n.parameterPositions[1]&&(this.stopWarping(),t===0?this.paused=!0:this.timeScale=t)}}return this._effectiveTimeScale=t,t}_updateTime(e){const t=this._clip.duration,n=this.loop;let i=this.time+e,s=this._loopCount;const o=n===Lu;if(e===0)return s===-1?i:o&&(s&1)===1?t-i:i;if(n===Ru){s===-1&&(this._loopCount=0,this._setEndings(!0,!0,!1));e:{if(i>=t)i=t;else if(i<0)i=0;else{this.time=i;break e}this.clampWhenFinished?this.paused=!0:this.enabled=!1,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:e<0?-1:1})}}else{if(s===-1&&(e>=0?(s=0,this._setEndings(!0,this.repetitions===0,o)):this._setEndings(this.repetitions===0,!0,o)),i>=t||i<0){const a=Math.floor(i/t);i-=t*a,s+=Math.abs(a);const l=this.repetitions-s;if(l<=0)this.clampWhenFinished?this.paused=!0:this.enabled=!1,i=e>0?t:0,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:e>0?1:-1});else{if(l===1){const h=e<0;this._setEndings(h,!h,o)}else this._setEndings(!1,!1,o);this._loopCount=s,this.time=i,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:a})}}else this.time=i;if(o&&(s&1)===1)return t-i}return i}_setEndings(e,t,n){const i=this._interpolantSettings;n?(i.endingStart=Hi,i.endingEnd=Hi):(e?i.endingStart=this.zeroSlopeAtStart?Hi:Gi:i.endingStart=Dr,t?i.endingEnd=this.zeroSlopeAtEnd?Hi:Gi:i.endingEnd=Dr)}_scheduleFading(e,t,n){const i=this._mixer,s=i.time;let o=this._weightInterpolant;o===null&&(o=i._lendControlInterpolant(),this._weightInterpolant=o);const a=o.parameterPositions,l=o.sampleValues;return a[0]=s,l[0]=t,a[1]=s+e,l[1]=n,this}}const g_=new Float32Array(1);class Ns extends vi{constructor(e){super(),this._root=e,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1}_bindAction(e,t){const n=e._localRoot||this._root,i=e._clip.tracks,s=i.length,o=e._propertyBindings,a=e._interpolants,l=n.uuid,h=this._bindingsByRootAndName;let u=h[l];u===void 0&&(u={},h[l]=u);for(let c=0;c!==s;++c){const d=i[c],f=d.name;let g=u[f];if(g!==void 0)++g.referenceCount,o[c]=g;else{if(g=o[c],g!==void 0){g._cacheIndex===null&&(++g.referenceCount,this._addInactiveBinding(g,l,f));continue}const _=t&&t._propertyBindings[c].binding.parsedPath;g=new r_($e.create(n,f,_),d.ValueTypeName,d.getValueSize()),++g.referenceCount,this._addInactiveBinding(g,l,f),o[c]=g}a[c].resultBuffer=g.buffer}}_activateAction(e){if(!this._isActiveAction(e)){if(e._cacheIndex===null){const n=(e._localRoot||this._root).uuid,i=e._clip.uuid,s=this._actionsByClip[i];this._bindAction(e,s&&s.knownActions[0]),this._addInactiveAction(e,i,n)}const t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){const s=t[n];s.useCount++===0&&(this._lendBinding(s),s.saveOriginalState())}this._lendAction(e)}}_deactivateAction(e){if(this._isActiveAction(e)){const t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){const s=t[n];--s.useCount===0&&(s.restoreOriginalState(),this._takeBackBinding(s))}this._takeBackAction(e)}}_initMemoryManager(){this._actions=[],this._nActiveActions=0,this._actionsByClip={},this._bindings=[],this._nActiveBindings=0,this._bindingsByRootAndName={},this._controlInterpolants=[],this._nActiveControlInterpolants=0;const e=this;this.stats={actions:{get total(){return e._actions.length},get inUse(){return e._nActiveActions}},bindings:{get total(){return e._bindings.length},get inUse(){return e._nActiveBindings}},controlInterpolants:{get total(){return e._controlInterpolants.length},get inUse(){return e._nActiveControlInterpolants}}}}_isActiveAction(e){const t=e._cacheIndex;return t!==null&&t<this._nActiveActions}_addInactiveAction(e,t,n){const i=this._actions,s=this._actionsByClip;let o=s[t];if(o===void 0)o={knownActions:[e],actionByRoot:{}},e._byClipCacheIndex=0,s[t]=o;else{const a=o.knownActions;e._byClipCacheIndex=a.length,a.push(e)}e._cacheIndex=i.length,i.push(e),o.actionByRoot[n]=e}_removeInactiveAction(e){const t=this._actions,n=t[t.length-1],i=e._cacheIndex;n._cacheIndex=i,t[i]=n,t.pop(),e._cacheIndex=null;const s=e._clip.uuid,o=this._actionsByClip,a=o[s],l=a.knownActions,h=l[l.length-1],u=e._byClipCacheIndex;h._byClipCacheIndex=u,l[u]=h,l.pop(),e._byClipCacheIndex=null;const c=a.actionByRoot,d=(e._localRoot||this._root).uuid;delete c[d],l.length===0&&delete o[s],this._removeInactiveBindingsForAction(e)}_removeInactiveBindingsForAction(e){const t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){const s=t[n];--s.referenceCount===0&&this._removeInactiveBinding(s)}}_lendAction(e){const t=this._actions,n=e._cacheIndex,i=this._nActiveActions++,s=t[i];e._cacheIndex=i,t[i]=e,s._cacheIndex=n,t[n]=s}_takeBackAction(e){const t=this._actions,n=e._cacheIndex,i=--this._nActiveActions,s=t[i];e._cacheIndex=i,t[i]=e,s._cacheIndex=n,t[n]=s}_addInactiveBinding(e,t,n){const i=this._bindingsByRootAndName,s=this._bindings;let o=i[t];o===void 0&&(o={},i[t]=o),o[n]=e,e._cacheIndex=s.length,s.push(e)}_removeInactiveBinding(e){const t=this._bindings,n=e.binding,i=n.rootNode.uuid,s=n.path,o=this._bindingsByRootAndName,a=o[i],l=t[t.length-1],h=e._cacheIndex;l._cacheIndex=h,t[h]=l,t.pop(),delete a[s],Object.keys(a).length===0&&delete o[i]}_lendBinding(e){const t=this._bindings,n=e._cacheIndex,i=this._nActiveBindings++,s=t[i];e._cacheIndex=i,t[i]=e,s._cacheIndex=n,t[n]=s}_takeBackBinding(e){const t=this._bindings,n=e._cacheIndex,i=--this._nActiveBindings,s=t[i];e._cacheIndex=i,t[i]=e,s._cacheIndex=n,t[n]=s}_lendControlInterpolant(){const e=this._controlInterpolants,t=this._nActiveControlInterpolants++;let n=e[t];return n===void 0&&(n=new Yh(new Float32Array(2),new Float32Array(2),1,g_),n.__cacheIndex=t,e[t]=n),n}_takeBackControlInterpolant(e){const t=this._controlInterpolants,n=e.__cacheIndex,i=--this._nActiveControlInterpolants,s=t[i];e.__cacheIndex=i,t[i]=e,s.__cacheIndex=n,t[n]=s}clipAction(e,t,n){const i=t||this._root,s=i.uuid;let o=typeof e=="string"?Ra.findByName(i,e):e;const a=o!==null?o.uuid:e,l=this._actionsByClip[a];let h=null;if(n===void 0&&(o!==null?n=o.blendMode:n=Wa),l!==void 0){const c=l.actionByRoot[s];if(c!==void 0&&c.blendMode===n)return c;h=l.knownActions[0],o===null&&(o=h._clip)}if(o===null)return null;const u=new m_(this,o,t,n);return this._bindAction(u,h),this._addInactiveAction(u,a,s),u}existingAction(e,t){const n=t||this._root,i=n.uuid,s=typeof e=="string"?Ra.findByName(n,e):e,o=s?s.uuid:e,a=this._actionsByClip[o];return a!==void 0&&a.actionByRoot[i]||null}stopAllAction(){const e=this._actions,t=this._nActiveActions;for(let n=t-1;n>=0;--n)e[n].stop();return this}update(e){e*=this.timeScale;const t=this._actions,n=this._nActiveActions,i=this.time+=e,s=Math.sign(e),o=this._accuIndex^=1;for(let h=0;h!==n;++h)t[h]._update(i,e,s,o);const a=this._bindings,l=this._nActiveBindings;for(let h=0;h!==l;++h)a[h].apply(o);return this}setTime(e){this.time=0;for(let t=0;t<this._actions.length;t++)this._actions[t].time=0;return this.update(e)}getRoot(){return this._root}uncacheClip(e){const t=this._actions,n=e.uuid,i=this._actionsByClip,s=i[n];if(s!==void 0){const o=s.knownActions;for(let a=0,l=o.length;a!==l;++a){const h=o[a];this._deactivateAction(h);const u=h._cacheIndex,c=t[t.length-1];h._cacheIndex=null,h._byClipCacheIndex=null,c._cacheIndex=u,t[u]=c,t.pop(),this._removeInactiveBindingsForAction(h)}delete i[n]}}uncacheRoot(e){const t=e.uuid,n=this._actionsByClip;for(const o in n){const a=n[o].actionByRoot,l=a[t];l!==void 0&&(this._deactivateAction(l),this._removeInactiveAction(l))}const i=this._bindingsByRootAndName,s=i[t];if(s!==void 0)for(const o in s){const a=s[o];a.restoreOriginalState(),this._removeInactiveBinding(a)}}uncacheAction(e,t){const n=this.existingAction(e,t);n!==null&&(this._deactivateAction(n),this._removeInactiveAction(n))}}const zc=new Re;class __{constructor(e,t,n=0,i=1/0){this.ray=new Gs(e,t),this.near=n,this.far=i,this.camera=null,this.layers=new qa,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return zc.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(zc),this}intersectObject(e,t=!0,n=[]){return Ia(e,this,n,t),n.sort(kc),n}intersectObjects(e,t=!0,n=[]){for(let i=0,s=e.length;i<s;i++)Ia(e[i],this,n,t);return n.sort(kc),n}}function kc(r,e){return r.distance-e.distance}function Ia(r,e,t,n){let i=!0;if(r.layers.test(e.layers)&&r.raycast(e,t)===!1&&(i=!1),i===!0&&n===!0){const s=r.children;for(let o=0,a=s.length;o<a;o++)Ia(s[o],e,t,!0)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Ua}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Ua);const Jh={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};class hs{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const v_=new kr(-1,1,1,-1,0,1);class x_ extends mt{constructor(){super(),this.setAttribute("position",new et([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new et([0,2,0,0,2,0],2))}}const y_=new x_;class ll{constructor(e){this._mesh=new be(y_,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,v_)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}class M_ extends hs{constructor(e,t){super(),this.textureID=t!==void 0?t:"tDiffuse",e instanceof vt?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=zs.clone(e.uniforms),this.material=new vt({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this.fsQuad=new ll(this.material)}render(e,t,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this.fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}class Gc extends hs{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){const i=e.getContext(),s=e.state;s.buffers.color.setMask(!1),s.buffers.depth.setMask(!1),s.buffers.color.setLocked(!0),s.buffers.depth.setLocked(!0);let o,a;this.inverse?(o=0,a=1):(o=1,a=0),s.buffers.stencil.setTest(!0),s.buffers.stencil.setOp(i.REPLACE,i.REPLACE,i.REPLACE),s.buffers.stencil.setFunc(i.ALWAYS,o,4294967295),s.buffers.stencil.setClear(a),s.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),s.buffers.color.setLocked(!1),s.buffers.depth.setLocked(!1),s.buffers.color.setMask(!0),s.buffers.depth.setMask(!0),s.buffers.stencil.setLocked(!1),s.buffers.stencil.setFunc(i.EQUAL,1,4294967295),s.buffers.stencil.setOp(i.KEEP,i.KEEP,i.KEEP),s.buffers.stencil.setLocked(!0)}}class S_ extends hs{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}}class T_{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){const n=e.getSize(new Q);this._width=n.width,this._height=n.height,t=new Jt(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:gn}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new M_(Jh),this.copyPass.material.blending=Fn,this.clock=new s_}swapBuffers(){const e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){const t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());const t=this.renderer.getRenderTarget();let n=!1;for(let i=0,s=this.passes.length;i<s;i++){const o=this.passes[i];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(i),o.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),o.needsSwap){if(n){const a=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),l.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}Gc!==void 0&&(o instanceof Gc?n=!0:o instanceof S_&&(n=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){const t=this.renderer.getSize(new Q);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;const n=this._width*this._pixelRatio,i=this._height*this._pixelRatio;this.renderTarget1.setSize(n,i),this.renderTarget2.setSize(n,i);for(let s=0;s<this.passes.length;s++)this.passes[s].setSize(n,i)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class b_ extends hs{constructor(e,t,n=null,i=null,s=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=n,this.clearColor=i,this.clearAlpha=s,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new pe}render(e,t,n){const i=e.autoClear;e.autoClear=!1;let s,o;this.overrideMaterial!==null&&(o=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(s=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(s),this.overrideMaterial!==null&&(this.scene.overrideMaterial=o),e.autoClear=i}}const w_={uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new pe(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};class rs extends hs{constructor(e,t,n,i){super(),this.strength=t!==void 0?t:1,this.radius=n,this.threshold=i,this.resolution=e!==void 0?new Q(e.x,e.y):new Q(256,256),this.clearColor=new pe(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let s=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);this.renderTargetBright=new Jt(s,o,{type:gn}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let c=0;c<this.nMips;c++){const d=new Jt(s,o,{type:gn});d.texture.name="UnrealBloomPass.h"+c,d.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(d);const f=new Jt(s,o,{type:gn});f.texture.name="UnrealBloomPass.v"+c,f.texture.generateMipmaps=!1,this.renderTargetsVertical.push(f),s=Math.round(s/2),o=Math.round(o/2)}const a=w_;this.highPassUniforms=zs.clone(a.uniforms),this.highPassUniforms.luminosityThreshold.value=i,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new vt({uniforms:this.highPassUniforms,vertexShader:a.vertexShader,fragmentShader:a.fragmentShader}),this.separableBlurMaterials=[];const l=[3,5,7,9,11];s=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);for(let c=0;c<this.nMips;c++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(l[c])),this.separableBlurMaterials[c].uniforms.invSize.value=new Q(1/s,1/o),s=Math.round(s/2),o=Math.round(o/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;const h=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=h,this.bloomTintColors=[new E(1,1,1),new E(1,1,1),new E(1,1,1),new E(1,1,1),new E(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors;const u=Jh;this.copyUniforms=zs.clone(u.uniforms),this.blendMaterial=new vt({uniforms:this.copyUniforms,vertexShader:u.vertexShader,fragmentShader:u.fragmentShader,blending:Lr,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new pe,this.oldClearAlpha=1,this.basic=new _t,this.fsQuad=new ll(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(e,t){let n=Math.round(e/2),i=Math.round(t/2);this.renderTargetBright.setSize(n,i);for(let s=0;s<this.nMips;s++)this.renderTargetsHorizontal[s].setSize(n,i),this.renderTargetsVertical[s].setSize(n,i),this.separableBlurMaterials[s].uniforms.invSize.value=new Q(1/n,1/i),n=Math.round(n/2),i=Math.round(i/2)}render(e,t,n,i,s){e.getClearColor(this._oldClearColor),this.oldClearAlpha=e.getClearAlpha();const o=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),s&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=n.texture,e.setRenderTarget(null),e.clear(),this.fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this.fsQuad.render(e);let a=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this.fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=a.texture,this.separableBlurMaterials[l].uniforms.direction.value=rs.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[l]),e.clear(),this.fsQuad.render(e),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=rs.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[l]),e.clear(),this.fsQuad.render(e),a=this.renderTargetsVertical[l];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this.fsQuad.render(e),this.fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,s&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(n),this.fsQuad.render(e)),e.setClearColor(this._oldClearColor,this.oldClearAlpha),e.autoClear=o}getSeperableBlurMaterial(e){const t=[];for(let n=0;n<e;n++)t.push(.39894*Math.exp(-.5*n*n/(e*e))/e);return new vt({defines:{KERNEL_RADIUS:e},uniforms:{colorTexture:{value:null},invSize:{value:new Q(.5,.5)},direction:{value:new Q(.5,.5)},gaussianCoefficients:{value:t}},vertexShader:`varying vec2 vUv;
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
				}`})}getCompositeMaterial(e){return new vt({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
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
				}`})}}rs.BlurDirectionX=new Q(1,0);rs.BlurDirectionY=new Q(0,1);const E_={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

		}`};class A_ extends hs{constructor(){super();const e=E_;this.uniforms=zs.clone(e.uniforms),this.material=new G0({name:e.name,uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader}),this.fsQuad=new ll(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},ke.getTransfer(this._outputColorSpace)===Je&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===th?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===nh?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===ih?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===Fa?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===sh?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===rh&&(this.material.defines.NEUTRAL_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}class C_{constructor(e){this.canvas=e,this.time=0,this._initRenderer(),this._initScene(),this._initCamera(),this._initLighting(),this._initPostProcessing(),this.entities=[]}_initRenderer(){this.renderer=new x0({canvas:this.canvas,antialias:!0,powerPreference:"high-performance",stencil:!1}),this.renderer.setSize(window.innerWidth,window.innerHeight),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,1.25)),this.renderer.outputColorSpace=bt,this.renderer.toneMapping=Fa,this.renderer.toneMappingExposure=1.15,this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=Qc}_initPostProcessing(){const e=this.renderer.getDrawingBufferSize(new Q),t=new Jt(e.width,e.height,{type:gn});this.composer=new T_(this.renderer,t);const n=new b_(this.scene,this.camera);this.composer.addPass(n);const i=new rs(new Q(window.innerWidth,window.innerHeight),.25,.8,.9);this.composer.addPass(i);const s=new A_;this.composer.addPass(s)}_initScene(){this.scene=new y0,this._buildSkyDome(),this.scene.fog=new Hr(13164784,.0015)}_buildSkyDome(){const e=new en(800,32,15),t=new vt({uniforms:{topColor:{value:new pe(26333)},horizonColor:{value:new pe(8900331)},bottomColor:{value:new pe(16774614)},sunColor:{value:new pe(16770229)},sunDirection:{value:new E(.4,.5,-.3).normalize()},offset:{value:20},exponent:{value:.5}},vertexShader:`
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
      `,side:Nt,depthWrite:!1}),n=new be(e,t);this.scene.add(n)}_initCamera(){this.camera=new Dt(60,window.innerWidth/window.innerHeight,.1,1200),this.camera.position.set(0,10,50)}_initLighting(){const e=new J0(8900331,12759680,1);e.position.set(0,200,0),this.scene.add(e),this.sunLight=new La(16774373,3),this.sunLight.position.set(150,200,-80),this.sunLight.castShadow=!0,this.sunLight.shadow.mapSize.width=1024,this.sunLight.shadow.mapSize.height=1024,this.sunLight.shadow.bias=-4e-4,this.sunLight.shadow.normalBias=.02;const t=200;this.sunLight.shadow.camera.near=10,this.sunLight.shadow.camera.far=600,this.sunLight.shadow.camera.left=-t,this.sunLight.shadow.camera.right=t,this.sunLight.shadow.camera.top=t,this.sunLight.shadow.camera.bottom=-t,this.scene.add(this.sunLight),this.scene.add(this.sunLight.target);const n=new La(16772829,.3);n.position.set(-50,5,50),this.scene.add(n)}add(e){this.entities.push(e)}resize(){this.camera.aspect=window.innerWidth/window.innerHeight,this.camera.updateProjectionMatrix(),this.renderer.setSize(window.innerWidth,window.innerHeight),this.composer.setSize(window.innerWidth,window.innerHeight)}render(e){this.time+=e;for(const n of this.entities)n.update&&n.update(e,this.time);const t=.005;this.sunLight.position.set(150+Math.sin(this.time*t)*30,200,-80+Math.cos(this.time*t)*80),this.composer.render()}}class R_{constructor(){this.keys={w:!1,a:!1,s:!1,d:!1,shift:!1,space:!1,e:!1,r:!1,q:!1},this.mouse={dx:0,dy:0,leftDown:!1,rightDown:!1,locked:!1},this._mouseDeltaX=0,this._mouseDeltaY=0,this._bindEvents()}_bindEvents(){window.addEventListener("keydown",e=>{const t=e.key.toLowerCase();t in this.keys&&(this.keys[t]=!0),t===" "&&(this.keys.space=!0,e.preventDefault())}),window.addEventListener("keyup",e=>{const t=e.key.toLowerCase();t in this.keys&&(this.keys[t]=!1),t===" "&&(this.keys.space=!1)}),document.addEventListener("mousemove",e=>{document.pointerLockElement&&(this._mouseDeltaX+=e.movementX,this._mouseDeltaY+=e.movementY,this.mouse.locked=!0)}),document.addEventListener("mousedown",e=>{e.button===0&&(this.mouse.leftDown=!0),e.button===2&&(this.mouse.rightDown=!0)}),document.addEventListener("mouseup",e=>{e.button===0&&(this.mouse.leftDown=!1),e.button===2&&(this.mouse.rightDown=!1)}),document.addEventListener("pointerlockchange",()=>{this.mouse.locked=!!document.pointerLockElement}),document.addEventListener("contextmenu",e=>e.preventDefault())}consumeMouseDelta(){this.mouse.dx=this._mouseDeltaX,this.mouse.dy=this._mouseDeltaY,this._mouseDeltaX=0,this._mouseDeltaY=0}getMovementInput(){let e=0,t=0;this.keys.w&&(t-=1),this.keys.s&&(t+=1),this.keys.a&&(e-=1),this.keys.d&&(e+=1);const n=Math.sqrt(e*e+t*t);return n>0&&(e/=n,t/=n),{x:e,z:t,magnitude:n>0?1:0}}get isSprinting(){return this.keys.shift}get isShooting(){return this.mouse.leftDown}get isJumping(){return this.keys.space}}class P_{constructor(e,t){this.camera=e,this.input=t,this.yaw=0,this.pitch=.35,this.baseDistance=22,this.currentDistance=22,this.minDistance=5,this.maxDistance=35,this.currentPos=new E,this.targetPos=new E,this.mouseSensitivity=.003,this.pitchMin=-.05,this.pitchMax=Math.PI/6,this.smoothness=8,this.heightOffset=3.5,this.raycaster=new __,this.collisionLayers=[]}addCollisionObject(e){this.collisionLayers.push(e)}update(e,t){this.input.consumeMouseDelta(),this.input.mouse.locked&&(this.yaw+=this.input.mouse.dx*this.mouseSensitivity,this.pitch-=this.input.mouse.dy*this.mouseSensitivity,this.pitch=Math.max(this.pitchMin,Math.min(this.pitchMax,this.pitch)));const n=Math.cos(this.pitch),i=Math.sin(this.pitch),s=Math.sin(this.yaw),o=Math.cos(this.yaw),a=t.x-this.baseDistance*s*n,l=t.y+this.baseDistance*i+this.heightOffset,h=t.z+this.baseDistance*o*n;this.targetPos.set(a,l,h);const u=new E(t.x,t.y+this.heightOffset,t.z),c=new E().subVectors(this.targetPos,u).normalize(),d=this.targetPos.distanceTo(u);if(this.raycaster.set(u,c),this.raycaster.far=d,this.raycaster.near=.1,this.collisionLayers.length>0){const g=this.raycaster.intersectObjects(this.collisionLayers,!0);if(g.length>0&&g[0].distance<d){const m=Math.max(this.minDistance,g[0].distance-1)/d;this.targetPos.lerpVectors(u,this.targetPos,m)}}const f=1-Math.exp(-this.smoothness*e);this.currentPos.lerp(this.targetPos,f),this.camera.position.copy(this.currentPos),this.camera.lookAt(u)}}function L_(r,e=!1){const t=r[0].index!==null,n=new Set(Object.keys(r[0].attributes)),i=new Set(Object.keys(r[0].morphAttributes)),s={},o={},a=r[0].morphTargetsRelative,l=new mt;let h=0;for(let u=0;u<r.length;++u){const c=r[u];let d=0;if(t!==(c.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const f in c.attributes){if(!n.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+'. All geometries must have compatible attributes; make sure "'+f+'" attribute exists among all geometries, or in none of them.'),null;s[f]===void 0&&(s[f]=[]),s[f].push(c.attributes[f]),d++}if(d!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". Make sure all geometries have the same number of attributes."),null;if(a!==c.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const f in c.morphAttributes){if(!i.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+".  .morphAttributes must be consistent throughout all geometries."),null;o[f]===void 0&&(o[f]=[]),o[f].push(c.morphAttributes[f])}if(e){let f;if(t)f=c.index.count;else if(c.attributes.position!==void 0)f=c.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". The geometry must have either an index or a position attribute"),null;l.addGroup(h,f,u),h+=f}}if(t){let u=0;const c=[];for(let d=0;d<r.length;++d){const f=r[d].index;for(let g=0;g<f.count;++g)c.push(f.getX(g)+u);u+=r[d].attributes.position.count}l.setIndex(c)}for(const u in s){const c=Hc(s[u]);if(!c)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" attribute."),null;l.setAttribute(u,c)}for(const u in o){const c=o[u][0].length;if(c===0)break;l.morphAttributes=l.morphAttributes||{},l.morphAttributes[u]=[];for(let d=0;d<c;++d){const f=[];for(let _=0;_<o[u].length;++_)f.push(o[u][_][d]);const g=Hc(f);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" morphAttribute."),null;l.morphAttributes[u].push(g)}}return l}function Hc(r){let e,t,n,i=-1,s=0;for(let h=0;h<r.length;++h){const u=r[h];if(e===void 0&&(e=u.array.constructor),e!==u.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=u.itemSize),t!==u.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=u.normalized),n!==u.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(i===-1&&(i=u.gpuType),i!==u.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;s+=u.count*t}const o=new e(s),a=new yt(o,t,n);let l=0;for(let h=0;h<r.length;++h){const u=r[h];if(u.isInterleavedBufferAttribute){const c=l/t;for(let d=0,f=u.count;d<f;d++)for(let g=0;g<t;g++){const _=u.getComponent(d,g);a.setComponent(d+c,g,_)}}else o.set(u.array,l);l+=u.count*t}return i!==void 0&&(a.gpuType=i),a}function Vc(r,e){if(e===Du)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),r;if(e===Ta||e===_h){let t=r.getIndex();if(t===null){const o=[],a=r.getAttribute("position");if(a!==void 0){for(let l=0;l<a.count;l++)o.push(l);r.setIndex(o),t=r.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),r}const n=t.count-2,i=[];if(e===Ta)for(let o=1;o<=n;o++)i.push(t.getX(0)),i.push(t.getX(o)),i.push(t.getX(o+1));else for(let o=0;o<n;o++)o%2===0?(i.push(t.getX(o)),i.push(t.getX(o+1)),i.push(t.getX(o+2))):(i.push(t.getX(o+2)),i.push(t.getX(o+1)),i.push(t.getX(o)));i.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const s=r.clone();return s.setIndex(i),s.clearGroups(),s}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),r}class Wr extends cs{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new F_(t)}),this.register(function(t){return new B_(t)}),this.register(function(t){return new q_(t)}),this.register(function(t){return new Y_(t)}),this.register(function(t){return new j_(t)}),this.register(function(t){return new z_(t)}),this.register(function(t){return new k_(t)}),this.register(function(t){return new G_(t)}),this.register(function(t){return new H_(t)}),this.register(function(t){return new U_(t)}),this.register(function(t){return new V_(t)}),this.register(function(t){return new O_(t)}),this.register(function(t){return new X_(t)}),this.register(function(t){return new W_(t)}),this.register(function(t){return new D_(t)}),this.register(function(t){return new K_(t)}),this.register(function(t){return new $_(t)})}load(e,t,n,i){const s=this;let o;if(this.resourcePath!=="")o=this.resourcePath;else if(this.path!==""){const h=Ds.extractUrlBase(e);o=Ds.resolveURL(h,this.path)}else o=Ds.extractUrlBase(e);this.manager.itemStart(e);const a=function(h){i?i(h):console.error(h),s.manager.itemError(e),s.manager.itemEnd(e)},l=new Kh(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(h){try{s.parse(h,o,function(u){t(u),s.manager.itemEnd(e)},a)}catch(u){a(u)}},n,a)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,i){let s;const o={},a={},l=new TextDecoder;if(typeof e=="string")s=JSON.parse(e);else if(e instanceof ArrayBuffer)if(l.decode(new Uint8Array(e,0,4))===Qh){try{o[ze.KHR_BINARY_GLTF]=new Z_(e)}catch(c){i&&i(c);return}s=JSON.parse(o[ze.KHR_BINARY_GLTF].content)}else s=JSON.parse(l.decode(e));else s=e;if(s.asset===void 0||s.asset.version[0]<2){i&&i(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const h=new hv(s,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});h.fileLoader.setRequestHeader(this.requestHeader);for(let u=0;u<this.pluginCallbacks.length;u++){const c=this.pluginCallbacks[u](h);c.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),a[c.name]=c,o[c.name]=!0}if(s.extensionsUsed)for(let u=0;u<s.extensionsUsed.length;++u){const c=s.extensionsUsed[u],d=s.extensionsRequired||[];switch(c){case ze.KHR_MATERIALS_UNLIT:o[c]=new N_;break;case ze.KHR_DRACO_MESH_COMPRESSION:o[c]=new J_(s,this.dracoLoader);break;case ze.KHR_TEXTURE_TRANSFORM:o[c]=new Q_;break;case ze.KHR_MESH_QUANTIZATION:o[c]=new ev;break;default:d.indexOf(c)>=0&&a[c]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+c+'".')}}h.setExtensions(o),h.setPlugins(a),h.parse(n,i)}parseAsync(e,t){const n=this;return new Promise(function(i,s){n.parse(e,t,i,s)})}}function I_(){let r={};return{get:function(e){return r[e]},add:function(e,t){r[e]=t},remove:function(e){delete r[e]},removeAll:function(){r={}}}}const ze={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class D_{constructor(e){this.parser=e,this.name=ze.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let n=0,i=t.length;n<i;n++){const s=t[n];s.extensions&&s.extensions[this.name]&&s.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,s.extensions[this.name].light)}}_loadLight(e){const t=this.parser,n="light:"+e;let i=t.cache.get(n);if(i)return i;const s=t.json,l=((s.extensions&&s.extensions[this.name]||{}).lights||[])[e];let h;const u=new pe(16777215);l.color!==void 0&&u.setRGB(l.color[0],l.color[1],l.color[2],Ft);const c=l.range!==void 0?l.range:0;switch(l.type){case"directional":h=new La(u),h.target.position.set(0,0,-1),h.add(h.target);break;case"point":h=new Zh(u),h.distance=c;break;case"spot":h=new e_(u),h.distance=c,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,h.angle=l.spot.outerConeAngle,h.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,h.target.position.set(0,0,-1),h.add(h.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return h.position.set(0,0,0),h.decay=2,Dn(h,l),l.intensity!==void 0&&(h.intensity=l.intensity),h.name=t.createUniqueName(l.name||"light_"+e),i=Promise.resolve(h),t.cache.add(n,i),i}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){const t=this,n=this.parser,s=n.json.nodes[e],a=(s.extensions&&s.extensions[this.name]||{}).light;return a===void 0?null:this._loadLight(a).then(function(l){return n._getNodeRef(t.cache,a,l)})}}class N_{constructor(){this.name=ze.KHR_MATERIALS_UNLIT}getMaterialType(){return _t}extendParams(e,t,n){const i=[];e.color=new pe(1,1,1),e.opacity=1;const s=t.pbrMetallicRoughness;if(s){if(Array.isArray(s.baseColorFactor)){const o=s.baseColorFactor;e.color.setRGB(o[0],o[1],o[2],Ft),e.opacity=o[3]}s.baseColorTexture!==void 0&&i.push(n.assignTexture(e,"map",s.baseColorTexture,bt))}return Promise.all(i)}}class U_{constructor(e){this.parser=e,this.name=ze.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=i.extensions[this.name].emissiveStrength;return s!==void 0&&(t.emissiveIntensity=s),Promise.resolve()}}class F_{constructor(e){this.parser=e,this.name=ze.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:xn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],o=i.extensions[this.name];if(o.clearcoatFactor!==void 0&&(t.clearcoat=o.clearcoatFactor),o.clearcoatTexture!==void 0&&s.push(n.assignTexture(t,"clearcoatMap",o.clearcoatTexture)),o.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=o.clearcoatRoughnessFactor),o.clearcoatRoughnessTexture!==void 0&&s.push(n.assignTexture(t,"clearcoatRoughnessMap",o.clearcoatRoughnessTexture)),o.clearcoatNormalTexture!==void 0&&(s.push(n.assignTexture(t,"clearcoatNormalMap",o.clearcoatNormalTexture)),o.clearcoatNormalTexture.scale!==void 0)){const a=o.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new Q(a,a)}return Promise.all(s)}}class B_{constructor(e){this.parser=e,this.name=ze.KHR_MATERIALS_DISPERSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:xn}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=i.extensions[this.name];return t.dispersion=s.dispersion!==void 0?s.dispersion:0,Promise.resolve()}}class O_{constructor(e){this.parser=e,this.name=ze.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:xn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],o=i.extensions[this.name];return o.iridescenceFactor!==void 0&&(t.iridescence=o.iridescenceFactor),o.iridescenceTexture!==void 0&&s.push(n.assignTexture(t,"iridescenceMap",o.iridescenceTexture)),o.iridescenceIor!==void 0&&(t.iridescenceIOR=o.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),o.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=o.iridescenceThicknessMinimum),o.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=o.iridescenceThicknessMaximum),o.iridescenceThicknessTexture!==void 0&&s.push(n.assignTexture(t,"iridescenceThicknessMap",o.iridescenceThicknessTexture)),Promise.all(s)}}class z_{constructor(e){this.parser=e,this.name=ze.KHR_MATERIALS_SHEEN}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:xn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[];t.sheenColor=new pe(0,0,0),t.sheenRoughness=0,t.sheen=1;const o=i.extensions[this.name];if(o.sheenColorFactor!==void 0){const a=o.sheenColorFactor;t.sheenColor.setRGB(a[0],a[1],a[2],Ft)}return o.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=o.sheenRoughnessFactor),o.sheenColorTexture!==void 0&&s.push(n.assignTexture(t,"sheenColorMap",o.sheenColorTexture,bt)),o.sheenRoughnessTexture!==void 0&&s.push(n.assignTexture(t,"sheenRoughnessMap",o.sheenRoughnessTexture)),Promise.all(s)}}class k_{constructor(e){this.parser=e,this.name=ze.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:xn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],o=i.extensions[this.name];return o.transmissionFactor!==void 0&&(t.transmission=o.transmissionFactor),o.transmissionTexture!==void 0&&s.push(n.assignTexture(t,"transmissionMap",o.transmissionTexture)),Promise.all(s)}}class G_{constructor(e){this.parser=e,this.name=ze.KHR_MATERIALS_VOLUME}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:xn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],o=i.extensions[this.name];t.thickness=o.thicknessFactor!==void 0?o.thicknessFactor:0,o.thicknessTexture!==void 0&&s.push(n.assignTexture(t,"thicknessMap",o.thicknessTexture)),t.attenuationDistance=o.attenuationDistance||1/0;const a=o.attenuationColor||[1,1,1];return t.attenuationColor=new pe().setRGB(a[0],a[1],a[2],Ft),Promise.all(s)}}class H_{constructor(e){this.parser=e,this.name=ze.KHR_MATERIALS_IOR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:xn}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=i.extensions[this.name];return t.ior=s.ior!==void 0?s.ior:1.5,Promise.resolve()}}class V_{constructor(e){this.parser=e,this.name=ze.KHR_MATERIALS_SPECULAR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:xn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],o=i.extensions[this.name];t.specularIntensity=o.specularFactor!==void 0?o.specularFactor:1,o.specularTexture!==void 0&&s.push(n.assignTexture(t,"specularIntensityMap",o.specularTexture));const a=o.specularColorFactor||[1,1,1];return t.specularColor=new pe().setRGB(a[0],a[1],a[2],Ft),o.specularColorTexture!==void 0&&s.push(n.assignTexture(t,"specularColorMap",o.specularColorTexture,bt)),Promise.all(s)}}class W_{constructor(e){this.parser=e,this.name=ze.EXT_MATERIALS_BUMP}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:xn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],o=i.extensions[this.name];return t.bumpScale=o.bumpFactor!==void 0?o.bumpFactor:1,o.bumpTexture!==void 0&&s.push(n.assignTexture(t,"bumpMap",o.bumpTexture)),Promise.all(s)}}class X_{constructor(e){this.parser=e,this.name=ze.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:xn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],o=i.extensions[this.name];return o.anisotropyStrength!==void 0&&(t.anisotropy=o.anisotropyStrength),o.anisotropyRotation!==void 0&&(t.anisotropyRotation=o.anisotropyRotation),o.anisotropyTexture!==void 0&&s.push(n.assignTexture(t,"anisotropyMap",o.anisotropyTexture)),Promise.all(s)}}class q_{constructor(e){this.parser=e,this.name=ze.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,n=t.json,i=n.textures[e];if(!i.extensions||!i.extensions[this.name])return null;const s=i.extensions[this.name],o=t.options.ktx2Loader;if(!o){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,s.source,o)}}class Y_{constructor(e){this.parser=e,this.name=ze.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(e){const t=this.name,n=this.parser,i=n.json,s=i.textures[e];if(!s.extensions||!s.extensions[t])return null;const o=s.extensions[t],a=i.images[o.source];let l=n.textureLoader;if(a.uri){const h=n.options.manager.getHandler(a.uri);h!==null&&(l=h)}return this.detectSupport().then(function(h){if(h)return n.loadTextureImage(e,o.source,l);if(i.extensionsRequired&&i.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class j_{constructor(e){this.parser=e,this.name=ze.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(e){const t=this.name,n=this.parser,i=n.json,s=i.textures[e];if(!s.extensions||!s.extensions[t])return null;const o=s.extensions[t],a=i.images[o.source];let l=n.textureLoader;if(a.uri){const h=n.options.manager.getHandler(a.uri);h!==null&&(l=h)}return this.detectSupport().then(function(h){if(h)return n.loadTextureImage(e,o.source,l);if(i.extensionsRequired&&i.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class K_{constructor(e){this.name=ze.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){const t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){const i=n.extensions[this.name],s=this.parser.getDependency("buffer",i.buffer),o=this.parser.options.meshoptDecoder;if(!o||!o.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return s.then(function(a){const l=i.byteOffset||0,h=i.byteLength||0,u=i.count,c=i.byteStride,d=new Uint8Array(a,l,h);return o.decodeGltfBufferAsync?o.decodeGltfBufferAsync(u,c,d,i.mode,i.filter).then(function(f){return f.buffer}):o.ready.then(function(){const f=new ArrayBuffer(u*c);return o.decodeGltfBuffer(new Uint8Array(f),u,c,d,i.mode,i.filter),f})})}else return null}}class $_{constructor(e){this.name=ze.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;const i=t.meshes[n.mesh];for(const h of i.primitives)if(h.mode!==Kt.TRIANGLES&&h.mode!==Kt.TRIANGLE_STRIP&&h.mode!==Kt.TRIANGLE_FAN&&h.mode!==void 0)return null;const o=n.extensions[this.name].attributes,a=[],l={};for(const h in o)a.push(this.parser.getDependency("accessor",o[h]).then(u=>(l[h]=u,l[h])));return a.length<1?null:(a.push(this.parser.createNodeMesh(e)),Promise.all(a).then(h=>{const u=h.pop(),c=u.isGroup?u.children:[u],d=h[0].count,f=[];for(const g of c){const _=new Re,m=new E,p=new Qt,v=new E(1,1,1),M=new zh(g.geometry,g.material,d);for(let x=0;x<d;x++)l.TRANSLATION&&m.fromBufferAttribute(l.TRANSLATION,x),l.ROTATION&&p.fromBufferAttribute(l.ROTATION,x),l.SCALE&&v.fromBufferAttribute(l.SCALE,x),M.setMatrixAt(x,_.compose(m,p,v));for(const x in l)if(x==="_COLOR_0"){const C=l[x];M.instanceColor=new Aa(C.array,C.itemSize,C.normalized)}else x!=="TRANSLATION"&&x!=="ROTATION"&&x!=="SCALE"&&g.geometry.setAttribute(x,l[x]);st.prototype.copy.call(M,g),this.parser.assignFinalMaterial(M),f.push(M)}return u.isGroup?(u.clear(),u.add(...f),u):f[0]}))}}const Qh="glTF",bs=12,Wc={JSON:1313821514,BIN:5130562};class Z_{constructor(e){this.name=ze.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,bs),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==Qh)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const i=this.header.length-bs,s=new DataView(e,bs);let o=0;for(;o<i;){const a=s.getUint32(o,!0);o+=4;const l=s.getUint32(o,!0);if(o+=4,l===Wc.JSON){const h=new Uint8Array(e,bs+o,a);this.content=n.decode(h)}else if(l===Wc.BIN){const h=bs+o;this.body=e.slice(h,h+a)}o+=a}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class J_{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=ze.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const n=this.json,i=this.dracoLoader,s=e.extensions[this.name].bufferView,o=e.extensions[this.name].attributes,a={},l={},h={};for(const u in o){const c=Da[u]||u.toLowerCase();a[c]=o[u]}for(const u in e.attributes){const c=Da[u]||u.toLowerCase();if(o[u]!==void 0){const d=n.accessors[e.attributes[u]],f=qi[d.componentType];h[c]=f.name,l[c]=d.normalized===!0}}return t.getDependency("bufferView",s).then(function(u){return new Promise(function(c,d){i.decodeDracoFile(u,function(f){for(const g in f.attributes){const _=f.attributes[g],m=l[g];m!==void 0&&(_.normalized=m)}c(f)},a,h,Ft,d)})})}}class Q_{constructor(){this.name=ze.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}}class ev{constructor(){this.name=ze.KHR_MESH_QUANTIZATION}}class eu extends Vs{constructor(e,t,n,i){super(e,t,n,i)}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,s=e*i*3+i;for(let o=0;o!==i;o++)t[o]=n[s+o];return t}interpolate_(e,t,n,i){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=a*2,h=a*3,u=i-t,c=(n-t)/u,d=c*c,f=d*c,g=e*h,_=g-h,m=-2*f+3*d,p=f-d,v=1-m,M=p-d+c;for(let x=0;x!==a;x++){const C=o[_+x+a],w=o[_+x+l]*u,A=o[g+x+a],L=o[g+x]*u;s[x]=v*C+M*w+m*A+p*L}return s}}const tv=new Qt;class nv extends eu{interpolate_(e,t,n,i){const s=super.interpolate_(e,t,n,i);return tv.fromArray(s).normalize().toArray(s),s}}const Kt={POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6},qi={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},Xc={9728:Ut,9729:Wt,9984:ah,9985:br,9986:Es,9987:Nn},qc={33071:Zn,33648:Ir,10497:Zi},Po={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},Da={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},jn={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},iv={CUBICSPLINE:void 0,LINEAR:Bs,STEP:Fs},Lo={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function sv(r){return r.DefaultMaterial===void 0&&(r.DefaultMaterial=new lt({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:On})),r.DefaultMaterial}function li(r,e,t){for(const n in t.extensions)r[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function Dn(r,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(r.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function rv(r,e,t){let n=!1,i=!1,s=!1;for(let h=0,u=e.length;h<u;h++){const c=e[h];if(c.POSITION!==void 0&&(n=!0),c.NORMAL!==void 0&&(i=!0),c.COLOR_0!==void 0&&(s=!0),n&&i&&s)break}if(!n&&!i&&!s)return Promise.resolve(r);const o=[],a=[],l=[];for(let h=0,u=e.length;h<u;h++){const c=e[h];if(n){const d=c.POSITION!==void 0?t.getDependency("accessor",c.POSITION):r.attributes.position;o.push(d)}if(i){const d=c.NORMAL!==void 0?t.getDependency("accessor",c.NORMAL):r.attributes.normal;a.push(d)}if(s){const d=c.COLOR_0!==void 0?t.getDependency("accessor",c.COLOR_0):r.attributes.color;l.push(d)}}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l)]).then(function(h){const u=h[0],c=h[1],d=h[2];return n&&(r.morphAttributes.position=u),i&&(r.morphAttributes.normal=c),s&&(r.morphAttributes.color=d),r.morphTargetsRelative=!0,r})}function ov(r,e){if(r.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)r.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(r.morphTargetInfluences.length===t.length){r.morphTargetDictionary={};for(let n=0,i=t.length;n<i;n++)r.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function av(r){let e;const t=r.extensions&&r.extensions[ze.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+Io(t.attributes):e=r.indices+":"+Io(r.attributes)+":"+r.mode,r.targets!==void 0)for(let n=0,i=r.targets.length;n<i;n++)e+=":"+Io(r.targets[n]);return e}function Io(r){let e="";const t=Object.keys(r).sort();for(let n=0,i=t.length;n<i;n++)e+=t[n]+":"+r[t[n]]+";";return e}function Na(r){switch(r){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function lv(r){return r.search(/\.jpe?g($|\?)/i)>0||r.search(/^data\:image\/jpeg/)===0?"image/jpeg":r.search(/\.webp($|\?)/i)>0||r.search(/^data\:image\/webp/)===0?"image/webp":r.search(/\.ktx2($|\?)/i)>0||r.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}const cv=new Re;class hv{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new I_,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,i=-1,s=!1,o=-1;if(typeof navigator<"u"){const a=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(a)===!0;const l=a.match(/Version\/(\d+)/);i=n&&l?parseInt(l[1],10):-1,s=a.indexOf("Firefox")>-1,o=s?a.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||n&&i<17||s&&o<98?this.textureLoader=new $h(this.options.manager):this.textureLoader=new i_(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new Kh(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const n=this,i=this.json,s=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(o){return o._markDefs&&o._markDefs()}),Promise.all(this._invokeAll(function(o){return o.beforeRoot&&o.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(o){const a={scene:o[0][i.scene||0],scenes:o[0],animations:o[1],cameras:o[2],asset:i.asset,parser:n,userData:{}};return li(s,a,i),Dn(a,i),Promise.all(n._invokeAll(function(l){return l.afterRoot&&l.afterRoot(a)})).then(function(){for(const l of a.scenes)l.updateMatrixWorld();e(a)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let i=0,s=t.length;i<s;i++){const o=t[i].joints;for(let a=0,l=o.length;a<l;a++)e[o[a]].isBone=!0}for(let i=0,s=e.length;i<s;i++){const o=e[i];o.mesh!==void 0&&(this._addNodeRef(this.meshCache,o.mesh),o.skin!==void 0&&(n[o.mesh].isSkinnedMesh=!0)),o.camera!==void 0&&this._addNodeRef(this.cameraCache,o.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;const i=n.clone(),s=(o,a)=>{const l=this.associations.get(o);l!=null&&this.associations.set(a,l);for(const[h,u]of o.children.entries())s(u,a.children[h])};return s(n,i),i.name+="_instance_"+e.uses[t]++,i}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){const i=e(t[n]);if(i)return i}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const n=[];for(let i=0;i<t.length;i++){const s=e(t[i]);s&&n.push(s)}return n}getDependency(e,t){const n=e+":"+t;let i=this.cache.get(n);if(!i){switch(e){case"scene":i=this.loadScene(t);break;case"node":i=this._invokeOne(function(s){return s.loadNode&&s.loadNode(t)});break;case"mesh":i=this._invokeOne(function(s){return s.loadMesh&&s.loadMesh(t)});break;case"accessor":i=this.loadAccessor(t);break;case"bufferView":i=this._invokeOne(function(s){return s.loadBufferView&&s.loadBufferView(t)});break;case"buffer":i=this.loadBuffer(t);break;case"material":i=this._invokeOne(function(s){return s.loadMaterial&&s.loadMaterial(t)});break;case"texture":i=this._invokeOne(function(s){return s.loadTexture&&s.loadTexture(t)});break;case"skin":i=this.loadSkin(t);break;case"animation":i=this._invokeOne(function(s){return s.loadAnimation&&s.loadAnimation(t)});break;case"camera":i=this.loadCamera(t);break;default:if(i=this._invokeOne(function(s){return s!=this&&s.getDependency&&s.getDependency(e,t)}),!i)throw new Error("Unknown type: "+e);break}this.cache.add(n,i)}return i}getDependencies(e){let t=this.cache.get(e);if(!t){const n=this,i=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(i.map(function(s,o){return n.getDependency(e,o)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[ze.KHR_BINARY_GLTF].body);const i=this.options;return new Promise(function(s,o){n.load(Ds.resolveURL(t.uri,i.path),s,void 0,function(){o(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){const i=t.byteLength||0,s=t.byteOffset||0;return n.slice(s,s+i)})}loadAccessor(e){const t=this,n=this.json,i=this.json.accessors[e];if(i.bufferView===void 0&&i.sparse===void 0){const o=Po[i.type],a=qi[i.componentType],l=i.normalized===!0,h=new a(i.count*o);return Promise.resolve(new yt(h,o,l))}const s=[];return i.bufferView!==void 0?s.push(this.getDependency("bufferView",i.bufferView)):s.push(null),i.sparse!==void 0&&(s.push(this.getDependency("bufferView",i.sparse.indices.bufferView)),s.push(this.getDependency("bufferView",i.sparse.values.bufferView))),Promise.all(s).then(function(o){const a=o[0],l=Po[i.type],h=qi[i.componentType],u=h.BYTES_PER_ELEMENT,c=u*l,d=i.byteOffset||0,f=i.bufferView!==void 0?n.bufferViews[i.bufferView].byteStride:void 0,g=i.normalized===!0;let _,m;if(f&&f!==c){const p=Math.floor(d/f),v="InterleavedBuffer:"+i.bufferView+":"+i.componentType+":"+p+":"+i.count;let M=t.cache.get(v);M||(_=new h(a,p*f,i.count*f/u),M=new Uh(_,f/u),t.cache.add(v,M)),m=new ks(M,l,d%f/u,g)}else a===null?_=new h(i.count*l):_=new h(a,d,i.count*l),m=new yt(_,l,g);if(i.sparse!==void 0){const p=Po.SCALAR,v=qi[i.sparse.indices.componentType],M=i.sparse.indices.byteOffset||0,x=i.sparse.values.byteOffset||0,C=new v(o[1],M,i.sparse.count*p),w=new h(o[2],x,i.sparse.count*l);a!==null&&(m=new yt(m.array.slice(),m.itemSize,m.normalized)),m.normalized=!1;for(let A=0,L=C.length;A<L;A++){const b=C[A];if(m.setX(b,w[A*l]),l>=2&&m.setY(b,w[A*l+1]),l>=3&&m.setZ(b,w[A*l+2]),l>=4&&m.setW(b,w[A*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}m.normalized=g}return m})}loadTexture(e){const t=this.json,n=this.options,s=t.textures[e].source,o=t.images[s];let a=this.textureLoader;if(o.uri){const l=n.manager.getHandler(o.uri);l!==null&&(a=l)}return this.loadTextureImage(e,s,a)}loadTextureImage(e,t,n){const i=this,s=this.json,o=s.textures[e],a=s.images[t],l=(a.uri||a.bufferView)+":"+o.sampler;if(this.textureCache[l])return this.textureCache[l];const h=this.loadImageSource(t,n).then(function(u){u.flipY=!1,u.name=o.name||a.name||"",u.name===""&&typeof a.uri=="string"&&a.uri.startsWith("data:image/")===!1&&(u.name=a.uri);const d=(s.samplers||{})[o.sampler]||{};return u.magFilter=Xc[d.magFilter]||Wt,u.minFilter=Xc[d.minFilter]||Nn,u.wrapS=qc[d.wrapS]||Zi,u.wrapT=qc[d.wrapT]||Zi,u.generateMipmaps=!u.isCompressedTexture&&u.minFilter!==Ut&&u.minFilter!==Wt,i.associations.set(u,{textures:e}),u}).catch(function(){return null});return this.textureCache[l]=h,h}loadImageSource(e,t){const n=this,i=this.json,s=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(c=>c.clone());const o=i.images[e],a=self.URL||self.webkitURL;let l=o.uri||"",h=!1;if(o.bufferView!==void 0)l=n.getDependency("bufferView",o.bufferView).then(function(c){h=!0;const d=new Blob([c],{type:o.mimeType});return l=a.createObjectURL(d),l});else if(o.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const u=Promise.resolve(l).then(function(c){return new Promise(function(d,f){let g=d;t.isImageBitmapLoader===!0&&(g=function(_){const m=new xt(_);m.needsUpdate=!0,d(m)}),t.load(Ds.resolveURL(c,s.path),g,void 0,f)})}).then(function(c){return h===!0&&a.revokeObjectURL(l),Dn(c,o),c.userData.mimeType=o.mimeType||lv(o.uri),c}).catch(function(c){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),c});return this.sourceCache[e]=u,u}assignTexture(e,t,n,i){const s=this;return this.getDependency("texture",n.index).then(function(o){if(!o)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(o=o.clone(),o.channel=n.texCoord),s.extensions[ze.KHR_TEXTURE_TRANSFORM]){const a=n.extensions!==void 0?n.extensions[ze.KHR_TEXTURE_TRANSFORM]:void 0;if(a){const l=s.associations.get(o);o=s.extensions[ze.KHR_TEXTURE_TRANSFORM].extendTexture(o,a),s.associations.set(o,l)}}return i!==void 0&&(o.colorSpace=i),e[t]=o,o})}assignFinalMaterial(e){const t=e.geometry;let n=e.material;const i=t.attributes.tangent===void 0,s=t.attributes.color!==void 0,o=t.attributes.normal===void 0;if(e.isPoints){const a="PointsMaterial:"+n.uuid;let l=this.cache.get(a);l||(l=new Za,hn.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,l.sizeAttenuation=!1,this.cache.add(a,l)),n=l}else if(e.isLine){const a="LineBasicMaterial:"+n.uuid;let l=this.cache.get(a);l||(l=new kh,hn.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,this.cache.add(a,l)),n=l}if(i||s||o){let a="ClonedMaterial:"+n.uuid+":";i&&(a+="derivative-tangents:"),s&&(a+="vertex-colors:"),o&&(a+="flat-shading:");let l=this.cache.get(a);l||(l=n.clone(),s&&(l.vertexColors=!0),o&&(l.flatShading=!0),i&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(a,l),this.associations.set(l,this.associations.get(n))),n=l}e.material=n}getMaterialType(){return lt}loadMaterial(e){const t=this,n=this.json,i=this.extensions,s=n.materials[e];let o;const a={},l=s.extensions||{},h=[];if(l[ze.KHR_MATERIALS_UNLIT]){const c=i[ze.KHR_MATERIALS_UNLIT];o=c.getMaterialType(),h.push(c.extendParams(a,s,t))}else{const c=s.pbrMetallicRoughness||{};if(a.color=new pe(1,1,1),a.opacity=1,Array.isArray(c.baseColorFactor)){const d=c.baseColorFactor;a.color.setRGB(d[0],d[1],d[2],Ft),a.opacity=d[3]}c.baseColorTexture!==void 0&&h.push(t.assignTexture(a,"map",c.baseColorTexture,bt)),a.metalness=c.metallicFactor!==void 0?c.metallicFactor:1,a.roughness=c.roughnessFactor!==void 0?c.roughnessFactor:1,c.metallicRoughnessTexture!==void 0&&(h.push(t.assignTexture(a,"metalnessMap",c.metallicRoughnessTexture)),h.push(t.assignTexture(a,"roughnessMap",c.metallicRoughnessTexture))),o=this._invokeOne(function(d){return d.getMaterialType&&d.getMaterialType(e)}),h.push(Promise.all(this._invokeAll(function(d){return d.extendMaterialParams&&d.extendMaterialParams(e,a)})))}s.doubleSided===!0&&(a.side=pt);const u=s.alphaMode||Lo.OPAQUE;if(u===Lo.BLEND?(a.transparent=!0,a.depthWrite=!1):(a.transparent=!1,u===Lo.MASK&&(a.alphaTest=s.alphaCutoff!==void 0?s.alphaCutoff:.5)),s.normalTexture!==void 0&&o!==_t&&(h.push(t.assignTexture(a,"normalMap",s.normalTexture)),a.normalScale=new Q(1,1),s.normalTexture.scale!==void 0)){const c=s.normalTexture.scale;a.normalScale.set(c,c)}if(s.occlusionTexture!==void 0&&o!==_t&&(h.push(t.assignTexture(a,"aoMap",s.occlusionTexture)),s.occlusionTexture.strength!==void 0&&(a.aoMapIntensity=s.occlusionTexture.strength)),s.emissiveFactor!==void 0&&o!==_t){const c=s.emissiveFactor;a.emissive=new pe().setRGB(c[0],c[1],c[2],Ft)}return s.emissiveTexture!==void 0&&o!==_t&&h.push(t.assignTexture(a,"emissiveMap",s.emissiveTexture,bt)),Promise.all(h).then(function(){const c=new o(a);return s.name&&(c.name=s.name),Dn(c,s),t.associations.set(c,{materials:e}),s.extensions&&li(i,c,s),c})}createUniqueName(e){const t=$e.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){const t=this,n=this.extensions,i=this.primitiveCache;function s(a){return n[ze.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a,t).then(function(l){return Yc(l,a,t)})}const o=[];for(let a=0,l=e.length;a<l;a++){const h=e[a],u=av(h),c=i[u];if(c)o.push(c.promise);else{let d;h.extensions&&h.extensions[ze.KHR_DRACO_MESH_COMPRESSION]?d=s(h):d=Yc(new mt,h,t),i[u]={primitive:h,promise:d},o.push(d)}}return Promise.all(o)}loadMesh(e){const t=this,n=this.json,i=this.extensions,s=n.meshes[e],o=s.primitives,a=[];for(let l=0,h=o.length;l<h;l++){const u=o[l].material===void 0?sv(this.cache):this.getDependency("material",o[l].material);a.push(u)}return a.push(t.loadGeometries(o)),Promise.all(a).then(function(l){const h=l.slice(0,l.length-1),u=l[l.length-1],c=[];for(let f=0,g=u.length;f<g;f++){const _=u[f],m=o[f];let p;const v=h[f];if(m.mode===Kt.TRIANGLES||m.mode===Kt.TRIANGLE_STRIP||m.mode===Kt.TRIANGLE_FAN||m.mode===void 0)p=s.isSkinnedMesh===!0?new S0(_,v):new be(_,v),p.isSkinnedMesh===!0&&p.normalizeSkinWeights(),m.mode===Kt.TRIANGLE_STRIP?p.geometry=Vc(p.geometry,_h):m.mode===Kt.TRIANGLE_FAN&&(p.geometry=Vc(p.geometry,Ta));else if(m.mode===Kt.LINES)p=new w0(_,v);else if(m.mode===Kt.LINE_STRIP)p=new $a(_,v);else if(m.mode===Kt.LINE_LOOP)p=new E0(_,v);else if(m.mode===Kt.POINTS)p=new Gh(_,v);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+m.mode);Object.keys(p.geometry.morphAttributes).length>0&&ov(p,s),p.name=t.createUniqueName(s.name||"mesh_"+e),Dn(p,s),m.extensions&&li(i,p,m),t.assignFinalMaterial(p),c.push(p)}for(let f=0,g=c.length;f<g;f++)t.associations.set(c[f],{meshes:e,primitives:f});if(c.length===1)return s.extensions&&li(i,c[0],s),c[0];const d=new Xt;s.extensions&&li(i,d,s),t.associations.set(d,{meshes:e});for(let f=0,g=c.length;f<g;f++)d.add(c[f]);return d})}loadCamera(e){let t;const n=this.json.cameras[e],i=n[n.type];if(!i){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new Dt(od.radToDeg(i.yfov),i.aspectRatio||1,i.znear||1,i.zfar||2e6):n.type==="orthographic"&&(t=new kr(-i.xmag,i.xmag,i.ymag,-i.ymag,i.znear,i.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),Dn(t,n),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],n=[];for(let i=0,s=t.joints.length;i<s;i++)n.push(this._loadNodeShallow(t.joints[i]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(i){const s=i.pop(),o=i,a=[],l=[];for(let h=0,u=o.length;h<u;h++){const c=o[h];if(c){a.push(c);const d=new Re;s!==null&&d.fromArray(s.array,h*16),l.push(d)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[h])}return new Ka(a,l)})}loadAnimation(e){const t=this.json,n=this,i=t.animations[e],s=i.name?i.name:"animation_"+e,o=[],a=[],l=[],h=[],u=[];for(let c=0,d=i.channels.length;c<d;c++){const f=i.channels[c],g=i.samplers[f.sampler],_=f.target,m=_.node,p=i.parameters!==void 0?i.parameters[g.input]:g.input,v=i.parameters!==void 0?i.parameters[g.output]:g.output;_.node!==void 0&&(o.push(this.getDependency("node",m)),a.push(this.getDependency("accessor",p)),l.push(this.getDependency("accessor",v)),h.push(g),u.push(_))}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l),Promise.all(h),Promise.all(u)]).then(function(c){const d=c[0],f=c[1],g=c[2],_=c[3],m=c[4],p=[];for(let v=0,M=d.length;v<M;v++){const x=d[v],C=f[v],w=g[v],A=_[v],L=m[v];if(x===void 0)continue;x.updateMatrix&&x.updateMatrix();const b=n._createAnimationTracks(x,C,w,A,L);if(b)for(let S=0;S<b.length;S++)p.push(b[S])}return new Ra(s,void 0,p)})}createNodeMesh(e){const t=this.json,n=this,i=t.nodes[e];return i.mesh===void 0?null:n.getDependency("mesh",i.mesh).then(function(s){const o=n._getNodeRef(n.meshCache,i.mesh,s);return i.weights!==void 0&&o.traverse(function(a){if(a.isMesh)for(let l=0,h=i.weights.length;l<h;l++)a.morphTargetInfluences[l]=i.weights[l]}),o})}loadNode(e){const t=this.json,n=this,i=t.nodes[e],s=n._loadNodeShallow(e),o=[],a=i.children||[];for(let h=0,u=a.length;h<u;h++)o.push(n.getDependency("node",a[h]));const l=i.skin===void 0?Promise.resolve(null):n.getDependency("skin",i.skin);return Promise.all([s,Promise.all(o),l]).then(function(h){const u=h[0],c=h[1],d=h[2];d!==null&&u.traverse(function(f){f.isSkinnedMesh&&f.bind(d,cv)});for(let f=0,g=c.length;f<g;f++)u.add(c[f]);return u})}_loadNodeShallow(e){const t=this.json,n=this.extensions,i=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];const s=t.nodes[e],o=s.name?i.createUniqueName(s.name):"",a=[],l=i._invokeOne(function(h){return h.createNodeMesh&&h.createNodeMesh(e)});return l&&a.push(l),s.camera!==void 0&&a.push(i.getDependency("camera",s.camera).then(function(h){return i._getNodeRef(i.cameraCache,s.camera,h)})),i._invokeAll(function(h){return h.createNodeAttachment&&h.createNodeAttachment(e)}).forEach(function(h){a.push(h)}),this.nodeCache[e]=Promise.all(a).then(function(h){let u;if(s.isBone===!0?u=new Bh:h.length>1?u=new Xt:h.length===1?u=h[0]:u=new st,u!==h[0])for(let c=0,d=h.length;c<d;c++)u.add(h[c]);if(s.name&&(u.userData.name=s.name,u.name=o),Dn(u,s),s.extensions&&li(n,u,s),s.matrix!==void 0){const c=new Re;c.fromArray(s.matrix),u.applyMatrix4(c)}else s.translation!==void 0&&u.position.fromArray(s.translation),s.rotation!==void 0&&u.quaternion.fromArray(s.rotation),s.scale!==void 0&&u.scale.fromArray(s.scale);return i.associations.has(u)||i.associations.set(u,{}),i.associations.get(u).nodes=e,u}),this.nodeCache[e]}loadScene(e){const t=this.extensions,n=this.json.scenes[e],i=this,s=new Xt;n.name&&(s.name=i.createUniqueName(n.name)),Dn(s,n),n.extensions&&li(t,s,n);const o=n.nodes||[],a=[];for(let l=0,h=o.length;l<h;l++)a.push(i.getDependency("node",o[l]));return Promise.all(a).then(function(l){for(let u=0,c=l.length;u<c;u++)s.add(l[u]);const h=u=>{const c=new Map;for(const[d,f]of i.associations)(d instanceof hn||d instanceof xt)&&c.set(d,f);return u.traverse(d=>{const f=i.associations.get(d);f!=null&&c.set(d,f)}),c};return i.associations=h(s),s})}_createAnimationTracks(e,t,n,i,s){const o=[],a=e.name?e.name:e.uuid,l=[];jn[s.path]===jn.weights?e.traverse(function(d){d.morphTargetInfluences&&l.push(d.name?d.name:d.uuid)}):l.push(a);let h;switch(jn[s.path]){case jn.weights:h=ns;break;case jn.rotation:h=is;break;case jn.position:case jn.scale:h=ss;break;default:switch(n.itemSize){case 1:h=ns;break;case 2:case 3:default:h=ss;break}break}const u=i.interpolation!==void 0?iv[i.interpolation]:Bs,c=this._getArrayFromAccessor(n);for(let d=0,f=l.length;d<f;d++){const g=new h(l[d]+"."+jn[s.path],t.array,c,u);i.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(g),o.push(g)}return o}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){const n=Na(t.constructor),i=new Float32Array(t.length);for(let s=0,o=t.length;s<o;s++)i[s]=t[s]*n;t=i}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){const i=this instanceof is?nv:eu;return new i(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function uv(r,e,t){const n=e.attributes,i=new Rt;if(n.POSITION!==void 0){const a=t.json.accessors[n.POSITION],l=a.min,h=a.max;if(l!==void 0&&h!==void 0){if(i.set(new E(l[0],l[1],l[2]),new E(h[0],h[1],h[2])),a.normalized){const u=Na(qi[a.componentType]);i.min.multiplyScalar(u),i.max.multiplyScalar(u)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const s=e.targets;if(s!==void 0){const a=new E,l=new E;for(let h=0,u=s.length;h<u;h++){const c=s[h];if(c.POSITION!==void 0){const d=t.json.accessors[c.POSITION],f=d.min,g=d.max;if(f!==void 0&&g!==void 0){if(l.setX(Math.max(Math.abs(f[0]),Math.abs(g[0]))),l.setY(Math.max(Math.abs(f[1]),Math.abs(g[1]))),l.setZ(Math.max(Math.abs(f[2]),Math.abs(g[2]))),d.normalized){const _=Na(qi[d.componentType]);l.multiplyScalar(_)}a.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}i.expandByVector(a)}r.boundingBox=i;const o=new _n;i.getCenter(o.center),o.radius=i.min.distanceTo(i.max)/2,r.boundingSphere=o}function Yc(r,e,t){const n=e.attributes,i=[];function s(o,a){return t.getDependency("accessor",o).then(function(l){r.setAttribute(a,l)})}for(const o in n){const a=Da[o]||o.toLowerCase();a in r.attributes||i.push(s(n[o],a))}if(e.indices!==void 0&&!r.index){const o=t.getDependency("accessor",e.indices).then(function(a){r.setIndex(a)});i.push(o)}return ke.workingColorSpace!==Ft&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${ke.workingColorSpace}" not supported.`),Dn(r,e),uv(r,e,t),Promise.all(i).then(function(){return e.targets!==void 0?rv(r,e.targets,t):r})}function Yi(r){const e=new Map,t=new Map,n=r.clone();return tu(r,n,function(i,s){e.set(s,i),t.set(i,s)}),n.traverse(function(i){if(!i.isSkinnedMesh)return;const s=i,o=e.get(i),a=o.skeleton.bones;s.skeleton=o.skeleton.clone(),s.bindMatrix.copy(o.bindMatrix),s.skeleton.bones=a.map(function(l){return t.get(l)}),s.bind(s.skeleton,s.bindMatrix)}),n}function tu(r,e,t){t(r,e);for(let n=0;n<r.children.length;n++)tu(r.children[n],e.children[n],t)}class dv{constructor(e){this.scene=e,this.loader=new Wr,this.sand=null,this.ocean=null,this.trees=[],this.rocks=[],this.props=[],this.colliders=[],this.terrainSize=700,this.sandCanvas=null,this.sandCtx=null,this.sandTexture=null,this.colorCanvas=null,this.colorCtx=null,this.colorTexture=null,this.lastFootprintPos=new E,this._buildTerrain(),this._buildOcean(),this._loadRocks(),this._spawnVegetation(),this._spawnBeachProps(),this._loadTrees(),this._loadFerns(),this._spawnSeagulls(),this.scene.background=new pe(8900331),this.scene.fog=new Hr(8900331,.0035)}getTerrainHeight(e,t){const n=Math.sin(t*.05)*15,i=e+n;let s=2;if(i<-120?s+=Math.pow(Math.abs(i+120)*.08,1.8):i>30&&(s-=(i-30)*.15,s<-20&&(s=-20)),Math.abs(t)>130){const o=Math.abs(t)-130;let a=Math.pow(o*.15,1.5);if(e>-30){let l=1-(e+30)/60;l<0&&(l=0),a*=l}s+=a}return s+=Math.sin(e*.2)*.2+Math.cos(t*.2)*.2,Math.abs(e)<10&&Math.abs(t-40)<10&&(s=2),s}_buildTerrain(){const t=new Ot(this.terrainSize,this.terrainSize,192,192);t.rotateX(-Math.PI/2);const n=t.attributes.position;for(let a=0;a<n.count;a++){const l=n.getX(a),h=n.getZ(a);n.setY(a,this.getTerrainHeight(l,h))}t.computeVertexNormals(),this.sandCanvas=document.createElement("canvas"),this.sandCanvas.width=1024,this.sandCanvas.height=1024,this.sandCtx=this.sandCanvas.getContext("2d"),this.sandCtx.fillStyle="#000000",this.sandCtx.fillRect(0,0,1024,1024),this.sandTexture=new Br(this.sandCanvas),this.sandTexture.anisotropy=4,this.colorCanvas=document.createElement("canvas"),this.colorCanvas.width=1024,this.colorCanvas.height=1024,this.colorCtx=this.colorCanvas.getContext("2d"),this.colorCtx.fillStyle="#d4a86a",this.colorCtx.fillRect(0,0,1024,1024);const i=this.colorCtx.getImageData(0,0,1024,1024),s=i.data;for(let a=0;a<s.length;a+=4){const l=(Math.random()-.5)*20;s[a]+=l,s[a+1]+=l*.8,s[a+2]+=l*.5}this.colorCtx.putImageData(i,0,0),this.colorTexture=new Br(this.colorCanvas),this.colorTexture.anisotropy=4;const o=new lt({map:this.colorTexture,bumpMap:this.sandTexture,bumpScale:3,roughness:.85,metalness:.05,color:16777215});this.sand=new be(t,o),this.sand.receiveShadow=!0,this.scene.add(this.sand),this._buildWetSandStrip()}_buildWetSandStrip(){const i=new Ot(25,this.terrainSize,32,160);i.rotateX(-Math.PI/2);const s=i.attributes.position,o=new Float32Array(s.count*4);for(let h=0;h<s.count;h++){const u=s.getX(h),c=s.getZ(h),d=Math.sin(c*.05)*15,f=20+u/(25/2)*(25/2)-d*.2;let g=this.getTerrainHeight(f,c)+.03;s.setX(h,f),s.setY(h,g);const _=(u+25/2)/25,m=Math.sin(_*Math.PI)*.45;o[h*4]=.4,o[h*4+1]=.3,o[h*4+2]=.2,o[h*4+3]=m}i.setAttribute("color",new yt(o,4)),i.computeVertexNormals();const a=new lt({vertexColors:!0,roughness:.35,metalness:.15,transparent:!0,depthWrite:!1}),l=new be(i,a);l.receiveShadow=!0,this.scene.add(l)}_buildOcean(){const n=new Ot(500,750,100,100);n.rotateX(-Math.PI/2);const i=n.attributes.position;for(let o=0;o<i.count;o++)i.setX(o,i.getX(o)+500/2+25);n.computeBoundingBox(),n.computeBoundingSphere();const s=new vt({uniforms:{time:{value:0},cameraPos:{value:new E}},vertexShader:`
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

        void main() {
          // Per-pixel normals
          float dx = 0.15 * cos(vWorldPos.x * 0.15 + time * 1.2) * cos(vWorldPos.z * 0.12 + time * 0.8) +
                     0.04 * cos(vWorldPos.x * 0.04 - time * 0.6) * sin(vWorldPos.z * 0.06 + time * 0.5);
          float dz = -0.12 * sin(vWorldPos.x * 0.15 + time * 1.2) * sin(vWorldPos.z * 0.12 + time * 0.8) +
                      0.06 * sin(vWorldPos.x * 0.04 - time * 0.6) * cos(vWorldPos.z * 0.06 + time * 0.5);
          vec3 normal = normalize(vec3(-dx, 1.0, -dz));

          // Depth-based color
          float shoreDist = clamp((vWorldPos.x - 25.0) / 120.0, 0.0, 1.0);

          vec3 shallowColor = vec3(0.1, 0.75, 0.82);  // Bright tropical cyan
          vec3 midColor = vec3(0.02, 0.35, 0.65);      // Rich blue
          vec3 deepColor = vec3(0.01, 0.08, 0.28);     // Deep navy

          float depth = clamp(shoreDist - vElevation * 0.08, 0.0, 1.0);
          vec3 baseColor = mix(shallowColor, midColor, min(1.0, depth * 2.0));
          baseColor = mix(baseColor, deepColor, max(0.0, depth * 2.0 - 1.0));

          // Sun specular
          vec3 lightDir = normalize(vec3(1.0, 1.5, -0.5));
          vec3 viewDir = normalize(cameraPos - vWorldPos);
          vec3 halfVec = normalize(lightDir + viewDir);
          float spec = pow(max(0.0, dot(normal, halfVec)), 512.0) * 3.5;

          // Fresnel reflection
          float fresnel = pow(1.0 - max(0.0, dot(viewDir, normal)), 5.0);
          vec3 skyColor = vec3(0.55, 0.75, 0.98);
          baseColor = mix(baseColor, skyColor, fresnel * 0.4);

          // Caustics
          vec2 p = vWorldPos.xz * 0.25;
          float c1 = sin(p.x + time * 0.8) + sin(p.y - time * 0.7);
          float c2 = sin(p.x * 0.6 - p.y * 0.5 + time * 1.2) * sin(p.x * 0.4 + p.y * 0.7 - time * 0.6);
          float caustic = smoothstep(0.0, 1.5, max(0.0, c1 + c2 * 2.0)) * 0.2;
          baseColor += caustic * shallowColor * (1.0 - shoreDist) * 1.2;

          // Shore foam — rolling tide effect
          float tidePhase = time * 0.8;
          float tidePos = sin(tidePhase) * 8.0 + 35.0; // Tide moves back and forth
          float distToTide = abs(vWorldPos.x - tidePos);
          float tideFoam = smoothstep(5.0, 0.0, distToTide) * 0.8;

          // Secondary foam lines
          float foam2 = smoothstep(3.0, 0.0, abs(vWorldPos.x - tidePos - 10.0)) * 0.3;
          float foam3 = smoothstep(2.0, 0.0, abs(vWorldPos.x - tidePos - 18.0)) * 0.15;

          // Foam detail texture
          float foamNoise = sin(vWorldPos.z * 1.5 + time * 2.0) * 0.5 + 0.5;
          float totalFoam = (tideFoam + foam2 + foam3) * (0.4 + foamNoise * 0.6);

          vec3 foamColor = vec3(1.0, 1.0, 1.0) * totalFoam;

          // Edge transparency — fully transparent at shore edge
          float edgeAlpha = smoothstep(25.0, 35.0, vWorldPos.x);
          float alpha = mix(0.0, 0.88, edgeAlpha);

          // Subsurface scattering for shallow water
          float sss = max(0.0, dot(lightDir, -normal)) * (1.0 - shoreDist) * 0.12;
          baseColor += vec3(0.0, 0.25, 0.18) * sss;

          gl_FragColor = vec4(baseColor + foamColor + vec3(spec), alpha);
        }
      `,transparent:!0,depthWrite:!1});this.ocean=new be(n,s),this.ocean.position.y=1.2,this.scene.add(this.ocean)}_loadRocks(){this.loader.load("/models/simple_rock_iv.glb",e=>{this._placeRocks(e.scene,"simple_rock",20),console.log("✓ Rocks loaded")})}_placeRocks(e,t,n){for(let i=0;i<n;i++){const s=e.clone();let o,a;if(t==="mountain"){const u=[{x:-80,z:-100},{x:-90,z:80},{x:-100,z:-30},{x:-85,z:180}],c=u[i%u.length];o=c.x+(Math.random()-.5)*10,a=c.z+(Math.random()-.5)*20}else{const u=Math.random();u<.4?(o=15+Math.random()*25,a=-190+Math.random()*380):u<.7?(o=-10+Math.random()*40,a=-190+Math.random()*380):(o=-30-Math.random()*90,a=-190+Math.random()*380)}Math.abs(o)<12&&Math.abs(a-40)<25&&(o+=o>0?18:-18);const l=this.getTerrainHeight(o,a);let h;t==="mountain"?(h=4+Math.random()*3,s.position.set(o,l+h*.1,a)):(h=1.2+Math.random()*2,s.position.set(o,l+h*.15,a)),s.scale.setScalar(h),s.rotation.y=Math.random()*Math.PI*2,t==="simple_rock"&&(s.rotation.x=(Math.random()-.5)*.3,s.rotation.z=(Math.random()-.5)*.2),s.traverse(u=>{u.isMesh&&(u.castShadow=!0,u.receiveShadow=!0)}),this.scene.add(s),this.rocks.push(s),this.colliders.push({x:o,z:a,radius:h*(t==="mountain"?1.5:.8)})}}_spawnVegetation(){const e=new lt({roughness:.8,metalness:.1,side:pt,vertexColors:!0});e.onBeforeCompile=a=>{a.uniforms.time={value:0},this.grassShader=a,a.vertexShader=`
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
        `)};const t=this._createTuftGeometry(),n=15e3,i=new zh(t,e,n);i.castShadow=!0,i.receiveShadow=!0;const s=new st;let o=0;for(let a=0;a<n;a++){const l=Math.random(),h=-130+Math.pow(l,1.5)*150,u=Math.random()<.5?-1:1,c=Math.pow(Math.random(),.8)*190,d=u*c,f=this.getTerrainHeight(h,d);if(f<4)continue;s.position.set(h,f-.1,d),s.rotation.y=Math.random()*Math.PI*2;const g=Math.random(),_=.3+Math.pow(g,2)*2.2;s.scale.setScalar(_),s.updateMatrix(),i.setMatrixAt(o,s.matrix),o++}i.count=o,i.instanceMatrix.needsUpdate=!0,this.scene.add(i)}_createTuftGeometry(){const e=[];for(let n=0;n<16;n++){const i=1.5+Math.random()*2,s=.2+Math.random()*.2,o=new Ot(s,i,1,4);o.translate(0,i/2,0);const a=o.attributes.position,l=new yt(new Float32Array(a.count*3),3),h=.5+Math.random()*1;for(let M=0;M<a.count;M++){const x=a.getX(M),C=a.getY(M),w=a.getZ(M),A=Math.max(0,C/i),L=1-Math.pow(A,2);a.setX(M,x*L);const b=Math.pow(A,1.5)*h;a.setZ(M,w+b);const S=new pe(2968606),P=new pe(7119666),F=S.clone().lerp(P,A);l.setXYZ(M,F.r,F.g,F.b)}o.setAttribute("color",l),o.computeVertexNormals();const u=n/16*Math.PI*2+Math.random()*.5,c=Math.random()*.2,d=new Re,f=(Math.random()-.5)*.2,g=-u+Math.PI/2,_=new un(f,g,0,"XYZ"),m=new Qt().setFromEuler(_),p=new E(Math.cos(u)*c,0,Math.sin(u)*c),v=new E(1,1,1);d.compose(p,m,v),o.applyMatrix4(d),e.push(o)}return L_(e)}_spawnBeachProps(){const e=new lt({color:9136404,roughness:.95,metalness:0});for(let n=0;n<12;n++){const i=-10+Math.random()*35,s=-190+Math.random()*380,o=this.getTerrainHeight(i,s);if(o<1||o>5)continue;const a=2+Math.random()*4,l=new mn(.15,.25,a,6),h=l.attributes.position;for(let c=0;c<h.count;c++)h.setX(c,h.getX(c)+(Math.random()-.5)*.1),h.setZ(c,h.getZ(c)+(Math.random()-.5)*.1);l.computeVertexNormals();const u=new be(l,e);u.position.set(i,o+.1,s),u.rotation.x=Math.PI/2,u.rotation.z=Math.random()*Math.PI,u.castShadow=!0,u.receiveShadow=!0,this.scene.add(u),this.props.push(u)}const t=[16774625,16770244,16113331,16767673,16444375];for(let n=0;n<30;n++){const i=-5+Math.random()*30,s=-190+Math.random()*380,o=this.getTerrainHeight(i,s);if(o<1||o>4)continue;const a=new en(.3,6,4);a.scale(1,.3,1.3);const l=new lt({color:t[n%5],roughness:.5,metalness:.2}),h=new be(a,l);h.position.set(i,o+.05,s),h.rotation.y=Math.random()*Math.PI*2,h.scale.setScalar(.5+Math.random()*.8),h.castShadow=!0,this.scene.add(h),this.props.push(h)}}_loadTrees(){this.loader.load("/models/coconut_tree.glb",e=>{for(let t=0;t<15;t++){const n=e.scene.clone(),i=-20-Math.random()*100,s=-190+Math.random()*380;let o=this.getTerrainHeight(i,s);n.position.set(i,o-1.5,s),n.rotation.y=Math.random()*Math.PI*2,n.rotation.z=(Math.random()-.5)*.15;const a=14+Math.random()*10;n.scale.setScalar(a),n.traverse(l=>{l.isMesh&&(l.castShadow=!0,l.receiveShadow=!0,l.material&&(l.material.side=pt,l.material.alphaTest=.5,l.material.transparent=!1,l.material.depthWrite=!0))}),this.scene.add(n),this.trees.push(n),this.colliders.push({x:i,z:s,radius:a*.35})}for(let t=0;t<60;t++){const n=Yi(e.scene),i=Math.random(),s=-130+Math.pow(i,2)*120,o=Math.random()<.5?-1:1,a=Math.pow(Math.random(),.6)*190,l=o*a,h=this.getTerrainHeight(s,l);n.position.set(s,h-.5,l),n.rotation.y=Math.random()*Math.PI*2,n.rotation.z=(Math.random()-.5)*1.5,n.rotation.x=(Math.random()-.5)*1.5;const u=2+Math.random()*5;n.scale.setScalar(u),n.traverse(c=>{c.isMesh&&(c.castShadow=!0,c.receiveShadow=!0,c.material&&(c.material.side=pt,c.material.alphaTest=.5,c.material.transparent=!1,c.material.depthWrite=!0))}),this.scene.add(n)}console.log("✓ Coconut trees loaded")})}_loadFerns(){this.loader.load("/models/fern_grass_02.glb",e=>{const n=new Rt().setFromObject(e.scene).getSize(new E),i=Math.max(n.x,n.y,n.z),s=i>0?40/i:1,o=[{x:-95,z:-140},{x:-65,z:-60},{x:-85,z:140}];for(let a=0;a<3;a++){const l=Yi(e.scene),h=o[a];let u=this.getTerrainHeight(h.x,h.z);l.position.set(h.x,u-.1,h.z),l.rotation.y=Math.random()*Math.PI*2;const c=s*(1+Math.random()*.5);l.scale.setScalar(c),l.traverse(d=>{d.isMesh&&(d.castShadow=!0,d.receiveShadow=!0,d.material&&(d.material.side=pt,d.material.alphaTest=.5,d.material.transparent=!1,d.material.depthWrite=!0))}),this.scene.add(l)}console.log("✓ Ferns loaded prominently")},void 0,e=>console.log("Failed to load ferns",e))}_spawnSeagulls(){this.seagulls=[];const e=new lt({color:16777215,roughness:.8,side:pt}),t=new lt({color:15658734,roughness:.6});for(let n=0;n<5;n++){const i=new Xt,s=new tl(.3,1.2,4,8);s.rotateZ(Math.PI/2),i.add(new be(s,t));const o=new Ot(2,.6),a=new be(o,e);a.position.set(0,.1,1),i.add(a);const l=new be(o,e);l.position.set(0,.1,-1),i.add(l);const h=40+Math.random()*100,u=.15+Math.random()*.2,c=50+Math.random()*60,d=Math.random()*Math.PI*2,f=-20+Math.random()*40,g=Math.random()*60;i.position.set(f,c,g),this.scene.add(i),this.seagulls.push({group:i,leftWing:a,rightWing:l,orbitR:h,orbitS:u,h:c,phase:d,cx:f,cz:g})}}stampFootprint(e,t,n){if(e.distanceTo(this.lastFootprintPos)<.8)return;const s=this.terrainSize/2,o=1024,a=Math.floor((e.x+s)/this.terrainSize*o),l=Math.floor((e.z+s)/this.terrainSize*o);if(a<8||a>o-8||l<8||l>o-8)return;this._footprintCount=(this._footprintCount||0)+1;const h=this._footprintCount%2===0?-1:1;for(let u=-1;u<=1;u+=2){const c=a+h*3+u*1,d=l+u*2;this.sandCtx.save(),this.sandCtx.translate(c,d),this.sandCtx.rotate(Math.random()*.5-.25),this.sandCtx.scale(1,1.8);const f=this.sandCtx.createRadialGradient(0,0,0,0,0,3);f.addColorStop(0,"rgba(255,255,255,0.6)"),f.addColorStop(1,"rgba(255,255,255,0)"),this.sandCtx.fillStyle=f,this.sandCtx.beginPath(),this.sandCtx.arc(0,0,3,0,Math.PI*2),this.sandCtx.fill(),this.sandCtx.restore(),this.colorCtx.save(),this.colorCtx.translate(c,d),this.colorCtx.rotate(Math.random()*.5-.25),this.colorCtx.scale(1,1.8);const g=this.colorCtx.createRadialGradient(0,0,0,0,0,3);g.addColorStop(0,"rgba(160, 120, 75, 0.5)"),g.addColorStop(1,"rgba(160, 120, 75, 0)"),this.colorCtx.fillStyle=g,this.colorCtx.beginPath(),this.colorCtx.arc(0,0,3,0,Math.PI*2),this.colorCtx.fill(),this.colorCtx.restore()}this.sandTexture.needsUpdate=!0,this.colorTexture.needsUpdate=!0,this.lastFootprintPos.copy(e)}update(e,t){this.ocean&&this.ocean.material.uniforms&&(this.ocean.material.uniforms.time.value=t),this._fadeTimer=(this._fadeTimer||0)+e,this._fadeTimer>.3&&(this._fadeTimer=0,this.sandCtx.fillStyle="rgba(0, 0, 0, 0.08)",this.sandCtx.fillRect(0,0,1024,1024),this.sandTexture.needsUpdate=!0,this.colorCtx.fillStyle="rgba(212, 168, 106, 0.08)",this.colorCtx.fillRect(0,0,1024,1024),this.colorTexture.needsUpdate=!0);for(const n of this.seagulls){const i=t*n.orbitS+n.phase;n.group.position.x=n.cx+Math.cos(i)*n.orbitR,n.group.position.z=n.cz+Math.sin(i)*n.orbitR,n.group.position.y=n.h+Math.sin(i*2)*3,n.group.rotation.y=-i+Math.PI/2;const s=Math.sin(t*4+n.phase)*.35;n.leftWing.rotation.x=s,n.rightWing.rotation.x=-s}this.grassShader&&(this.grassShader.uniforms.time.value=t)}}const Kn={IDLE:"idle",WALK:"walk",RUN:"run",ATTACK:"attack"};class fv{constructor(e,t,n,i){this.scene=e,this.world=t,this.input=n,this.cameraController=i,this.model=null,this.mixer=null,this.animations={},this.currentState=Kn.IDLE,this._singleAnimMode=!1,this._targetTimeScale=.15,this.loaded=!1,this.walkSpeed=25,this.runSpeed=45,this.rotationSmoothing=10,this.targetRotationY=Math.PI,this.position=new E(0,2.5,40),this.velocity=new E(0,0,0),this.maxAmmo=100,this.currentAmmo=100,this.sandBurstCooldown=0,this.sandBurstCooldownMax=7,this._initSandBurstParticles(),this.isInWater=!1,this.maxHealth=100,this.health=100,this._damageFlashTimer=0,this.coins=0,this.coinMultiplier=1,this.weaponType="pistol",this.weaponLevels={pistol:1,shotgun:1,charger:1},this.utilityLevels={maxHealth:1,waterCapacity:1,burrowStrength:1,minionCapacity:1,minionHealth:1},this._initSandBurstParticles(),this._load()}_initSandBurstParticles(){this.sandParticleCount=1500;const e=new mt,t=new Float32Array(this.sandParticleCount*3),n=[];for(let c=0;c<this.sandParticleCount*3;c++)t[c]=9999;for(let c=0;c<this.sandParticleCount;c++)n.push(new E);e.setAttribute("position",new yt(t,3));const i=document.createElement("canvas");i.width=16,i.height=16;const s=i.getContext("2d"),o=s.createRadialGradient(8,8,0,8,8,8);o.addColorStop(0,"rgba(255, 230, 150, 1)"),o.addColorStop(1,"rgba(255, 230, 150, 0)"),s.fillStyle=o,s.fillRect(0,0,16,16);const a=new Br(i),l=new Za({color:15654280,size:.8,map:a,transparent:!0,opacity:.9,depthWrite:!1,blending:Qn});this.sandParticleSystem=new Gh(e,l),this.sandParticleSystem.frustumCulled=!1,this.scene.add(this.sandParticleSystem),this.sandParticleVelocities=n,this.sandBurstActive=!1,this.sandBurstTimer=0;const h=new Hs(.1,15,64,64);this._sandShockwaveUniforms={uTime:{value:0},uSpeed:{value:25},uFrequency:{value:1.5},uAmplitude:{value:4},uDecay:{value:.2},uThickness:{value:.6},uDuration:{value:1.5}};const u=new vt({uniforms:this._sandShockwaveUniforms,vertexShader:`
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
          vDist = d / 15.0; // 0 to 1 normalized radius
          
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
          
          // Mix color based on height
          vec3 color = mix(baseColor, peakColor, clamp(vElevation * 0.5, 0.0, 1.0));
          
          float timeFade = max(0.0, 1.0 - (uTime / uDuration));
          
          float edgeFade = 1.0 - smoothstep(0.8, 1.0, vDist);
          
          // Make flat areas highly transparent, peaks opaque
          float alpha = (0.05 + abs(vElevation) * 0.8) * timeFade * edgeFade;
          
          gl_FragColor = vec4(color, alpha);
        }
      `,transparent:!0,side:pt,depthWrite:!1,blending:Qn,wireframe:!1});this._sandShockwave=new be(h,u),this._sandShockwave.rotation.x=-Math.PI/2,this._sandShockwave.visible=!1,this.scene.add(this._sandShockwave)}_load(){const e=new Wr;e.load("/models/sweet_crab_sketchfabweekly.glb",t=>this._onModelLoaded(t),void 0,t=>{console.warn("Sweet crab failed, falling back to animated_crab.glb",t),e.load("/models/animated_crab.glb",n=>this._onModelLoaded(n),void 0,n=>console.error("Failed to load any crab model",n))})}_onModelLoaded(e){this.model=e.scene;const t=new Rt().setFromObject(this.model),n=t.getSize(new E),s=4/Math.max(n.x,n.y,n.z);if(this.model.scale.setScalar(s),t.setFromObject(this.model),this._modelBottomOffset=t.min.y*s,this.model.position.copy(this.position),this.model.traverse(o=>{o.isMesh&&(o.castShadow=!0,o.receiveShadow=!0,o.material&&o.material.isMeshStandardMaterial&&(o.material.roughness=Math.min(o.material.roughness,.7),o.material.envMapIntensity=.5))}),this.scene.add(this.model),e.animations&&e.animations.length>0){this.mixer=new Ns(this.model),console.log(`Crab: ${e.animations.length} animation(s):`),e.animations.forEach((a,l)=>console.log(`  [${l}] "${a.name}" — ${a.duration.toFixed(2)}s`));for(const a of e.animations){const l=a.name.toLowerCase(),h=this.mixer.clipAction(a);l.includes("idle")||l.includes("breath")?this.animations.idle=h:l.includes("walk")||l.includes("crawl")?this.animations.walk=h:l.includes("run")||l.includes("sprint")?this.animations.run=h:(l.includes("attack")||l.includes("shoot"))&&(this.animations.attack=h)}if(e.animations.length===1){const a=this.mixer.clipAction(e.animations[0]);this.animations.idle=a,this.animations.walk=a,this.animations.run=a,this._singleAnimMode=!0}const o=this.animations.idle||this.animations.walk;o&&(o.play(),o.timeScale=.15)}this.loaded=!0,console.log("✓ Crab loaded and ready"),this._hasSpokenIntro=!1}_transitionTo(e){if(this.currentState===e)return;if(this.currentState=e,this._singleAnimMode){const n={[Kn.IDLE]:.12,[Kn.WALK]:3.5,[Kn.RUN]:7,[Kn.ATTACK]:.8};this._targetTimeScale=n[e]||1;return}const t=this.animations[e];if(t){for(const[n,i]of Object.entries(this.animations))i&&i!==t&&i.fadeOut(.3);t.reset().fadeIn(.3).play()}}update(e,t,n=!0){if(!this.loaded||!this.model)return;const i=n?this.input.getMovementInput():{x:0,z:0,magnitude:0},s=i.magnitude>0,o=n&&this.input.isSprinting&&s;if(s?this._transitionTo(o?Kn.RUN:Kn.WALK):this._transitionTo(Kn.IDLE),s){const C=o?this.runSpeed:this.walkSpeed,w=this.cameraController.yaw,A=Math.sin(w),L=Math.cos(w),b=i.x*L-i.z*A,S=i.z*L+i.x*A;this.velocity.x=b*C,this.velocity.z=S*C,this.targetRotationY=Math.atan2(b,S)}else this.velocity.x*=.85,this.velocity.z*=.85;let a=this.position.x+this.velocity.x*e,l=this.position.z+this.velocity.z*e;const h=this.world.getTerrainHeight(a,l),u=Math.sin(l*.05)*15,c=a+u;if(c<-125){const C=Math.pow(Math.abs(c+125)*.06,2);C>1.5&&(a+=C*.3*e*60)}const d=3;for(const C of this.world.colliders)if(Math.sqrt((a-C.x)**2+(l-C.z)**2)<C.radius+d){const A=Math.atan2(l-C.z,a-C.x);a=C.x+Math.cos(A)*(C.radius+d),l=C.z+Math.sin(A)*(C.radius+d)}a=Math.max(-130,Math.min(70,a)),l=Math.max(-190,Math.min(190,l)),this.position.x=a,this.position.z=l;const f=h-.1;this.position.y+=(f-this.position.y)*Math.min(1,15*e),s?this.position.y+=Math.abs(Math.sin(t*22))*.08:this.position.y+=Math.sin(t*2)*.02,this.model.position.copy(this.position);let g=this.targetRotationY-this.model.rotation.y;for(;g>Math.PI;)g-=Math.PI*2;for(;g<-Math.PI;)g+=Math.PI*2;if(this.model.rotation.y+=g*Math.min(1,this.rotationSmoothing*e),this.isInWater=h<1.5&&a>25,this.isInWater&&this.currentAmmo<this.maxAmmo&&(this.currentAmmo=Math.min(this.maxAmmo,this.currentAmmo+30*e),this.audio&&this.audio.playReloadSound()),this._singleAnimMode&&this.animations.idle){const C=this.animations.idle;C.timeScale+=(this._targetTimeScale-C.timeScale)*Math.min(1,15*e)}this.sandBurstCooldown>0&&(this.sandBurstCooldown-=e,this.sandBurstCooldown<0&&(this.sandBurstCooldown=0));const _=document.getElementById("sandburst-fill");if(_)if(this.sandBurstCooldown<=0)_.style.width="100%",_.style.background="#EEDD88";else{const C=1-this.sandBurstCooldown/this.sandBurstCooldownMax;_.style.width=`${C*100}%`,_.style.background="rgba(238, 221, 136, 0.3)"}if(this.sandBurstActive){this.sandBurstTimer-=e;const C=this.sandParticleSystem.geometry.attributes.position.array;for(let w=0;w<this.sandParticleCount;w++){const A=this.sandParticleVelocities[w];A.y-=45*e,A.x*=.94,A.z*=.94,C[w*3]+=A.x*e,C[w*3+1]+=A.y*e,C[w*3+2]+=A.z*e,C[w*3+1]<.1&&(C[w*3+1]=.1,A.y*=-.3,A.x*=.8,A.z*=.8)}if(this.sandParticleSystem.geometry.attributes.position.needsUpdate=!0,this.sandParticleSystem.material.opacity=Math.max(0,this.sandBurstTimer/1.5),this._sandShockwave&&this._sandShockwave.visible){const w=1.5-this.sandBurstTimer;this._sandShockwaveUniforms.uTime.value=w,this.sandBurstTimer<=0&&(this._sandShockwave.visible=!1)}if(this.sandBurstTimer<=0){this.sandBurstActive=!1;for(let w=0;w<this.sandParticleCount*3;w++)C[w]=9999;this.sandParticleSystem.geometry.attributes.position.needsUpdate=!0}}if(this.mixer&&this.mixer.update(e),this._damageFlashTimer>0){this._damageFlashTimer-=e;const C=this._damageFlashTimer/.2;this.model.traverse(w=>{w.isMesh&&w.material&&(w.material.emissive=w.material.emissive||new pe,w.material.emissive.setRGB(C*.8,0,0))})}const m=document.getElementById("ammo-count"),p=document.getElementById("ammo-fill");if(m&&(m.textContent=Math.round(this.currentAmmo)),p){const C=this.currentAmmo/this.maxAmmo;p.style.width=`${C*100}%`,C<.3?p.style.background="#ff4444":C<.6?p.style.background="#ffaa00":p.style.background="linear-gradient(90deg, #00BFFF, #00FF88)"}const v=document.getElementById("health-fill");v&&(v.style.width=`${this.health/this.maxHealth*100}%`);const M=document.getElementById("health-count");M&&(M.textContent=Math.round(this.health));const x=document.getElementById("gun-tier");if(x){const C={pistol:"Pistol",shotgun:"Shotgun",charger:"Charger"},w=this.weaponLevels[this.weaponType]||1;x.textContent=`${C[this.weaponType]||"Pistol"} Lv.${w}`}this.cameraController.update(e,this.position)}takeDamage(e){this.health=Math.max(0,this.health-e),this._damageFlashTimer=.2;const t=document.getElementById("damage-overlay");t&&(t.style.opacity="0.4",setTimeout(()=>{t.style.opacity="0"},200)),this.health<=0?console.log("💀 Game Over!"):this.dialogue&&Math.random()<.25&&this.health<40&&(!this._lastLowHealthVoice||performance.now()-this._lastLowHealthVoice>15e3)&&(this._lastLowHealthVoice=performance.now(),this.dialogue.heroCooldown=0,this.dialogue.speak(this.model,"Need more water... hold on.","hero",3))}addCoins(e){const t=Math.round(e*this.coinMultiplier);this.coins+=t;const n=document.getElementById("coin-count");n&&(n.textContent=this.coins)}triggerSandBurst(e,t){if(this.sandBurstCooldown>0||!this.loaded||this.isDead)return!1;this.sandBurstCooldown=this.sandBurstCooldownMax,t&&t.initialized&&t.playSandBurstSound&&t.playSandBurstSound();const n=this.sandParticleSystem.geometry.attributes.position.array;for(let a=0;a<this.sandParticleCount;a++){n[a*3]=this.position.x+(Math.random()-.5)*1.5,n[a*3+1]=this.position.y+.2+Math.random()*.8,n[a*3+2]=this.position.z+(Math.random()-.5)*1.5;const l=Math.random()*Math.PI*2,h=(Math.random()-.2)*.5,u=25+Math.random()*25;this.sandParticleVelocities[a].set(Math.cos(l)*u,Math.sin(h)*u,Math.sin(l)*u)}this.sandParticleSystem.geometry.attributes.position.needsUpdate=!0,this._sandShockwave&&(this._sandShockwave.position.copy(this.position),this._sandShockwave.position.y+=.05,this._sandShockwaveUniforms.uTime.value=0,this._sandShockwave.visible=!0),this.sandBurstActive=!0,this.sandBurstTimer=1.5;const i=15,s=25,o=25;if(e)for(const a of e.enemies){if(a.state==="dead"||a.state==="dying")continue;if(a.position.distanceTo(this.position)<=i){e.damageEnemy(a,o);const h=a.position.clone().sub(this.position).normalize();h.y=0,a._knockbackVelocity=h.multiplyScalar(s),a._staggerTimer=1.5}}return!0}}class pv{constructor(){this.ctx=null;try{this.ctx=new(window.AudioContext||window.webkitAudioContext)}catch(e){console.warn("Web Audio not supported:",e)}this.masterGain=null,this.initialized=!1,this.oceanGain=null,this.windGain=null,this.scuttleGain=null,this.gunBuffers=[null,null,null,null],this.hitBuffer=null,this.reloadBuffer=null,this.turtleHitBuffer=null,this.turtleAttackBuffer=null,this.turtleDieBuffer=null,this.bossHitBuffer=null,this.bossAttackBuffer=null,this.bossDieBuffer=null,this.isMoving=!1,this._scuttleTimer=0,this._wavePhase=0,this.ctx&&this._loadSounds()}init(){this.initialized||!this.ctx||(this.masterGain=this.ctx.createGain(),this.masterGain.gain.value=.7,this.compressor=this.ctx.createDynamicsCompressor(),this.compressor.threshold.value=-12,this.compressor.knee.value=10,this.compressor.ratio.value=12,this.compressor.attack.value=.003,this.compressor.release.value=.25,this.masterGain.connect(this.compressor),this.compressor.connect(this.ctx.destination),this._createOceanSound(),this._createWindSound(),this._createScuttleSystem(),this.initialized=!0,console.log("✓ Audio initialized"))}_createOceanSound(){const e=this.ctx.sampleRate*4,t=this.ctx.createBuffer(1,e,this.ctx.sampleRate),n=t.getChannelData(0);let i=0,s=0,o=0,a=0,l=0,h=0,u=0;for(let x=0;x<e;x++){const C=Math.random()*2-1;i=.99886*i+C*.0555179,s=.99332*s+C*.0750759,o=.969*o+C*.153852,a=.8665*a+C*.3104856,l=.55*l+C*.5329522,h=-.7616*h-C*.016898,n[x]=(i+s+o+a+l+h+u+C*.5362)*.05,u=C*.115926}const c=this.ctx.createBufferSource();c.buffer=t,c.loop=!0;const d=this.ctx.createBiquadFilter();d.type="lowpass",d.frequency.value=400,d.Q.value=.7;const f=this.ctx.createBiquadFilter();f.type="bandpass",f.frequency.value=200,f.Q.value=.5,this.oceanGain=this.ctx.createGain(),this.oceanGain.gain.value=.35,c.connect(d),d.connect(f),f.connect(this.oceanGain),this.oceanGain.connect(this.masterGain),c.start(),this._oceanLFO=this.ctx.createOscillator(),this._oceanLFO.type="sine",this._oceanLFO.frequency.value=.15;const g=this.ctx.createGain();g.gain.value=.12,this._oceanLFO.connect(g),g.connect(this.oceanGain.gain),this._oceanLFO.start();const _=this.ctx.createBufferSource();_.buffer=t,_.loop=!0;const m=this.ctx.createBiquadFilter();m.type="highpass",m.frequency.value=2e3;const p=this.ctx.createGain();p.gain.value=.06,_.connect(m),m.connect(p),p.connect(this.masterGain),_.start();const v=this.ctx.createOscillator();v.type="sine",v.frequency.value=.12;const M=this.ctx.createGain();M.gain.value=.04,v.connect(M),M.connect(p.gain),v.start()}_createWindSound(){const e=this.ctx.sampleRate*3,t=this.ctx.createBuffer(1,e,this.ctx.sampleRate),n=t.getChannelData(0);for(let u=0;u<e;u++)n[u]=(Math.random()*2-1)*.5;const i=this.ctx.createBufferSource();i.buffer=t,i.loop=!0;const s=this.ctx.createBiquadFilter();s.type="bandpass",s.frequency.value=600,s.Q.value=.3,this.windGain=this.ctx.createGain(),this.windGain.gain.value=.08,i.connect(s),s.connect(this.windGain),this.windGain.connect(this.masterGain),i.start();const o=this.ctx.createOscillator();o.type="sine",o.frequency.value=.08;const a=this.ctx.createGain();a.gain.value=.05,o.connect(a),a.connect(this.windGain.gain),o.start();const l=this.ctx.createOscillator();l.type="triangle",l.frequency.value=.03;const h=this.ctx.createGain();h.gain.value=.03,l.connect(h),h.connect(s.frequency),l.start()}_createScuttleSystem(){const e=Math.floor(this.ctx.sampleRate*.08);this._shuffleBuffer=this.ctx.createBuffer(1,e,this.ctx.sampleRate);const t=this._shuffleBuffer.getChannelData(0);for(let n=0;n<e;n++){const i=Math.sin(n/e*Math.PI);t[n]=(Math.random()*2-1)*i*.3}}_playScuttleTap(){if(!this.ctx)return;const e=this.ctx.currentTime,t=this.ctx.createBufferSource();t.buffer=this._shuffleBuffer;const n=this.ctx.createBiquadFilter();n.type="lowpass",n.frequency.value=300+Math.random()*200,n.Q.value=.5;const i=this.ctx.createGain();i.gain.setValueAtTime(.06+Math.random()*.03,e),i.gain.linearRampToValueAtTime(0,e+.08),t.connect(n),n.connect(i),i.connect(this.masterGain),t.start(e),t.stop(e+.08)}update(e,t,n){if(this.initialized)if(this.isMoving=t,t){const i=n?.09:.14;this._scuttleTimer+=e,this._scuttleTimer>i&&(this._scuttleTimer=0,this._playScuttleTap())}else this._scuttleTimer=0}setVolume(e){this.masterGain&&(this.masterGain.gain.value=Math.max(0,Math.min(1,e)))}resume(){this.ctx&&this.ctx.state==="suspended"&&this.ctx.resume()}async _loadSounds(){const e=["/sounds/pistol.mp3","/sounds/shotgun.mp3","/sounds/smg.mp3","/sounds/heavy.mp3"];for(let n=0;n<e.length;n++)try{const s=await(await fetch(e[n])).arrayBuffer();this.gunBuffers[n]=await this.ctx.decodeAudioData(s),console.log(`✓ Loaded gun sound: ${e[n]}`)}catch(i){console.warn(`Failed to load ${e[n]}:`,i)}try{const n=await fetch("/sounds/hit.mp3");if(n.ok){const i=await n.arrayBuffer();this.hitBuffer=await this.ctx.decodeAudioData(i),console.log("✓ Loaded hit sound")}}catch(n){console.warn("Failed to load hit sound:",n)}try{const n=await fetch("/sounds/reload.wav");if(n.ok){const i=await n.arrayBuffer();this.reloadBuffer=await this.ctx.decodeAudioData(i),console.log("✓ Loaded reload sound")}}catch(n){console.warn("Failed to load reload sound:",n)}const t={turtleHitBuffer:"/sounds/turtle_hit.mp3",turtleAttackBuffer:"/sounds/turtle_attack.mp3",turtleDieBuffer:"/sounds/turtle_die.mp3",bossHitBuffer:"/sounds/boss_hit.mp3",bossAttackBuffer:"/sounds/boss_attack.mp3",bossDieBuffer:"/sounds/boss_die.mp3"};for(const[n,i]of Object.entries(t))try{const s=await fetch(i);if(s.ok){const o=await s.arrayBuffer();this[n]=await this.ctx.decodeAudioData(o),console.log(`✓ Loaded enemy sound: ${i}`)}else console.warn(`Missing audio file: ${i}`)}catch(s){console.warn(`Failed to load ${i}:`,s)}}playShootSound(e){if(!this.ctx)return;const t=this.gunBuffers[e];if(!t&&e===1){this._playProceduralShotgun();return}if(!t)return;const n=this.ctx.createBufferSource();n.buffer=t;const i=[.5,.6,.35,.7],s=this.ctx.createGain();s.gain.value=i[e]||.5,e===2&&(n.playbackRate.value=1.5),n.connect(s),s.connect(this.masterGain),n.start()}playEnemyHitSound(e){if(!this.ctx)return;const t=e?this.bossHitBuffer:this.turtleHitBuffer;if(!t){if(this.hitBuffer){const s=this.ctx.createBufferSource();s.buffer=this.hitBuffer,s.playbackRate.value=e?.6:.8+Math.random()*.6;const o=this.ctx.createGain();o.gain.value=.4,s.connect(o),o.connect(this.masterGain),s.start()}return}const n=this.ctx.createBufferSource();n.buffer=t,n.playbackRate.value=.9+Math.random()*.2;const i=this.ctx.createGain();i.gain.value=e?.8:.5,n.connect(i),i.connect(this.masterGain),n.start()}playShellDropSound(){if(!this.ctx||!this.hitBuffer)return;const e=this.ctx.currentTime;if(this._lastShellTime&&e-this._lastShellTime<.15)return;this._lastShellTime=e;const t=this.ctx.createBufferSource();t.buffer=this.hitBuffer,t.playbackRate.value=.8+Math.random()*.4;const n=this.ctx.createGain();n.gain.value=.3,t.connect(n),n.connect(this.masterGain),t.start(this.ctx.currentTime+.4)}playReloadSound(){if(!this.ctx||!this.reloadBuffer)return;const e=this.ctx.currentTime;if(this._lastReloadTime&&e-this._lastReloadTime<.9)return;this._lastReloadTime=e;const t=this.ctx.createBufferSource();t.buffer=this.reloadBuffer,t.playbackRate.value=.8+Math.random()*.4;const n=this.ctx.createGain();n.gain.value=.6,t.connect(n),n.connect(this.masterGain),t.start()}playEnemyAttackSound(e){if(!this.ctx)return;const t=e?this.bossAttackBuffer:this.turtleAttackBuffer;if(!t)return;const n=this.ctx.createBufferSource();n.buffer=t,n.playbackRate.value=.9+Math.random()*.2;const i=this.ctx.createGain();i.gain.value=e?.9:.6,n.connect(i),i.connect(this.masterGain),n.start()}playEnemyDeathSound(e){if(!this.ctx)return;const t=e?this.bossDieBuffer:this.turtleDieBuffer;if(!t){const s=this.ctx.currentTime,o=this.ctx.createOscillator();o.type="sine",o.frequency.setValueAtTime(e?300:600,s),o.frequency.exponentialRampToValueAtTime(e?50:100,s+.2);const a=this.ctx.createGain();a.gain.setValueAtTime(e?.4:.2,s),a.gain.linearRampToValueAtTime(0,s+.25),o.connect(a),a.connect(this.masterGain),o.start(s),o.stop(s+.25);return}const n=this.ctx.createBufferSource();n.buffer=t,n.playbackRate.value=.9+Math.random()*.2;const i=this.ctx.createGain();i.gain.value=e?1:.7,n.connect(i),i.connect(this.masterGain),n.start()}playUpgradeSound(){if(!this.ctx)return;const e=this.ctx.currentTime;[523,659,784].forEach((n,i)=>{const s=this.ctx.createOscillator();s.type="sine",s.frequency.value=n;const o=this.ctx.createGain();o.gain.setValueAtTime(0,e+i*.1),o.gain.linearRampToValueAtTime(.12,e+i*.1+.05),o.gain.linearRampToValueAtTime(0,e+i*.1+.2),s.connect(o),o.connect(this.masterGain),s.start(e+i*.1),s.stop(e+i*.1+.25)})}_playProceduralShotgun(){if(!this.ctx)return;const e=this.ctx.currentTime,t=this.ctx.sampleRate*.5,n=this.ctx.createBuffer(1,t,this.ctx.sampleRate),i=n.getChannelData(0);for(let u=0;u<t;u++)i[u]=Math.random()*2-1;const s=this.ctx.createBufferSource();s.buffer=n;const o=this.ctx.createBiquadFilter();o.type="lowpass",o.frequency.setValueAtTime(2e3,e),o.frequency.exponentialRampToValueAtTime(100,e+.25);const a=this.ctx.createGain();a.gain.setValueAtTime(1,e),a.gain.exponentialRampToValueAtTime(.01,e+.3),s.connect(o),o.connect(a),a.connect(this.masterGain);const l=this.ctx.createOscillator();l.type="sine",l.frequency.setValueAtTime(150,e),l.frequency.exponentialRampToValueAtTime(40,e+.1);const h=this.ctx.createGain();h.gain.setValueAtTime(.8,e),h.gain.exponentialRampToValueAtTime(.01,e+.2),l.connect(h),h.connect(this.masterGain),s.start(e),l.start(e),s.stop(e+.4),l.stop(e+.3)}playChargeSound(e=3){if(!this.ctx)return;const t=this.ctx.currentTime,n=this.ctx.createOscillator();n.type="sawtooth",n.frequency.setValueAtTime(100,t),n.frequency.exponentialRampToValueAtTime(800,t+e);const i=this.ctx.createOscillator();i.type="sine",i.frequency.setValueAtTime(5,t),i.frequency.linearRampToValueAtTime(25,t+e);const s=this.ctx.createGain();s.gain.value=200,i.connect(s),s.connect(n.frequency);const o=this.ctx.createGain();o.gain.setValueAtTime(.01,t),o.gain.linearRampToValueAtTime(.5,t+e),n.connect(o),o.connect(this.masterGain),n.start(t),i.start(t),n.stop(t+e),i.stop(t+e),this._currentChargeOsc=n,this._currentChargeLfo=i}playDischargeSound(e=5){if(!this.ctx)return;const t=this.ctx.currentTime;if(this._currentChargeOsc){try{this._currentChargeOsc.stop(),this._currentChargeLfo.stop()}catch{}this._currentChargeOsc=null}const n=this.ctx.sampleRate*e,i=this.ctx.createBuffer(1,n,this.ctx.sampleRate),s=i.getChannelData(0);for(let h=0;h<n;h++)s[h]=Math.random()*2-1;const o=this.ctx.createBufferSource();o.buffer=i;const a=this.ctx.createBiquadFilter();a.type="lowpass",a.frequency.setValueAtTime(3e3,t),a.frequency.exponentialRampToValueAtTime(500,t+.5);const l=this.ctx.createGain();l.gain.setValueAtTime(.8,t),l.gain.setValueAtTime(.8,t+e-1),l.gain.linearRampToValueAtTime(.01,t+e),o.connect(a),a.connect(l),l.connect(this.masterGain),o.start(t),o.stop(t+e)}playSandBurstSound(){if(!this.ctx)return;const e=this.ctx.currentTime,t=this.ctx.createOscillator();t.type="sine",t.frequency.setValueAtTime(150,e),t.frequency.exponentialRampToValueAtTime(20,e+.3);const n=this.ctx.createGain();n.gain.setValueAtTime(1.8,e),n.gain.exponentialRampToValueAtTime(.01,e+.5),t.connect(n),n.connect(this.masterGain),t.start(e),t.stop(e+.5);const i=this.ctx.sampleRate*2,s=this.ctx.createBuffer(1,i,this.ctx.sampleRate),o=s.getChannelData(0);let a=0;for(let g=0;g<i;g++){const _=Math.random()*2-1;o[g]=(a+.02*_)/1.02,a=o[g],o[g]*=4}const l=this.ctx.createBufferSource();l.buffer=s;const h=this.ctx.createBiquadFilter();h.type="lowpass",h.frequency.setValueAtTime(5e3,e),h.frequency.exponentialRampToValueAtTime(200,e+1.5);const u=this.ctx.createGain();u.gain.setValueAtTime(0,e),u.gain.linearRampToValueAtTime(1.5,e+.05),u.gain.linearRampToValueAtTime(.3,e+.5),u.gain.linearRampToValueAtTime(.01,e+2),l.connect(h),h.connect(u),u.connect(this.masterGain),l.start(e),l.stop(e+2);const c=this.ctx.createBufferSource();c.buffer=s;const d=this.ctx.createBiquadFilter();d.type="bandpass",d.Q.value=4,d.frequency.setValueAtTime(800,e),d.frequency.linearRampToValueAtTime(300,e+1.5);const f=this.ctx.createGain();f.gain.setValueAtTime(0,e),f.gain.linearRampToValueAtTime(.8,e+.2),f.gain.linearRampToValueAtTime(.01,e+1.5),c.connect(d),d.connect(f),f.connect(this.masterGain),c.start(e),c.stop(e+1.5)}}const jc={pistol:{name:"Pistol",baseFireRate:3,baseDamage:10,baseAmmoPerShot:2,projectileSpeed:120,spread:0,baseProjectilesPerShot:1,color:52479,barrelLength:1.2,barrelRadius:.12,tankSize:.3,isDual:!1,isCharge:!1,maxLevel:10,baseCritChance:.1,baseCritDamage:2,levelUpDamage:5,levelUpFireRate:2,levelUpProjectiles:0,levelUpCritChance:.02},shotgun:{name:"Shotgun",baseFireRate:1.8,baseDamage:8,baseAmmoPerShot:6,projectileSpeed:100,spread:.15,baseProjectilesPerShot:3,color:35071,barrelLength:1.5,barrelRadius:.18,tankSize:.45,isDual:!1,isCharge:!1,maxLevel:10,baseCritChance:.05,baseCritDamage:1.5,levelUpDamage:2,levelUpFireRate:0,levelUpProjectiles:3,levelUpCritChance:.01},charger:{name:"Charger",baseFireRate:.33,baseDamage:80,baseAmmoPerShot:50,projectileSpeed:200,spread:.01,baseProjectilesPerShot:1,color:65416,barrelLength:3,barrelRadius:.4,tankSize:.9,isDual:!1,isCharge:!0,chargeTime:3,hoseDuration:5,maxLevel:10,baseCritChance:.15,baseCritDamage:2.5,levelUpDamage:5,levelUpFireRate:0,levelUpProjectiles:0,levelUpAmmoPerShot:25,levelUpHoseDuration:.5,levelUpCritChance:.02}};class mv{constructor(e,t){this.scene=e,this.audio=t,this.currentType="pistol",this.currentLevel=1,this.gunMeshes=[],this.muzzlePoints=[],this._muzzleFlashes=[],this._fireCooldown=0,this._muzzleFlashTimer=0,this._isCharging=!1,this._chargeTimer=0,this._chargeIndicator=null,this._buildGuns(this.getEffectiveStats()),this._createChargeIndicator()}getEffectiveStats(e,t){e=e||this.currentType,t=t||this.currentLevel;const n=jc[e];if(!n)return jc.pistol;const i=t-1;return{name:n.name+(t>1?` Lv.${t}`:""),fireRate:n.baseFireRate+n.levelUpFireRate*i,damage:n.baseDamage+n.levelUpDamage*i,ammoPerShot:n.baseAmmoPerShot+(n.levelUpAmmoPerShot||0)*i,projectileSpeed:n.projectileSpeed,spread:n.spread,projectilesPerShot:n.baseProjectilesPerShot+n.levelUpProjectiles*i,color:n.color,barrelLength:n.barrelLength,barrelRadius:n.barrelRadius,tankSize:n.tankSize,isDual:n.isDual,isCharge:n.isCharge||!1,chargeTime:n.chargeTime||0,hoseDuration:(n.hoseDuration||0)+(n.levelUpHoseDuration||0)*i,critChance:(n.baseCritChance||0)+(n.levelUpCritChance||0)*i,critDamage:n.baseCritDamage||1.5}}get stats(){return this.getEffectiveStats()}setWeapon(e,t){this.currentType=e,this.currentLevel=t,this._isCharging=!1,this._chargeTimer=0,this._buildGuns(this.getEffectiveStats()),console.log(`🔫 Weapon: ${e} Lv.${t}`)}_buildGunModel(e){const t=new Xt;if(this.currentType==="shotgun"){for(let d=-1;d<=1;d++){const f=new mn(e.barrelRadius,e.barrelRadius*.8,e.barrelLength,8);f.rotateX(Math.PI/2);const g=new lt({color:e.color,roughness:.3,metalness:.6}),_=new be(f,g);_.position.set(d*e.barrelRadius*2.2,0,e.barrelLength/2),_.castShadow=!0,t.add(_)}const o=new _i(.8,.4,.6),a=new lt({color:3355443,roughness:.9}),l=new be(o,a);l.position.set(0,-.1,-.2),t.add(l);const h=new _i(e.tankSize*2,e.tankSize*1.5,e.tankSize*1.5),u=new lt({color:4500223,roughness:.1,metalness:.2,transparent:!0,opacity:.6}),c=new be(h,u);c.position.set(0,e.tankSize*.5,.2),t.add(c)}else if(this.currentType==="charger"){const o=new mn(e.barrelRadius,e.barrelRadius,e.barrelLength,12);o.rotateX(Math.PI/2);const a=new lt({color:e.color,roughness:.2,metalness:.8}),l=new be(o,a);l.position.z=e.barrelLength/2,l.castShadow=!0,t.add(l);const h=new sl(e.barrelRadius*1.5,e.barrelRadius*.3,8,16);h.rotateX(Math.PI/2);const u=new lt({color:65416,emissive:65416,emissiveIntensity:.8,roughness:.1,metalness:.9});for(let g=1;g<=3;g++){const _=new be(h,u);_.position.z=e.barrelLength/4*g,t.add(_)}const c=new en(e.tankSize,16,12),d=new lt({color:65416,roughness:.1,metalness:.3,transparent:!0,opacity:.8}),f=new be(c,d);f.position.set(0,e.tankSize*.8,-.5),t.add(f)}else{const o=new mn(e.barrelRadius,e.barrelRadius*.8,e.barrelLength,8);o.rotateX(Math.PI/2);const a=new lt({color:e.color,roughness:.3,metalness:.6}),l=new be(o,a);l.position.z=e.barrelLength/2,l.castShadow=!0,t.add(l);const h=new en(e.tankSize,8,6),u=new lt({color:4500223,roughness:.1,metalness:.2,transparent:!0,opacity:.6}),c=new be(h,u);c.position.set(0,e.tankSize*.6,-.1),t.add(c)}const n=new mn(.08,.1,.6,6),i=new lt({color:8934707,roughness:.8}),s=new be(n,i);return s.position.set(0,-.35,-.2),s.rotation.x=.2,t.add(s),t.scale.setScalar(this.currentType==="charger"?1.8:1.5),t}_createMuzzleFlashModel(){const e=new en(.4,6,6),t=new _t({color:8969727,transparent:!0,opacity:0}),n=new be(e,t);return this.scene.add(n),n}_createChargeIndicator(){let e=document.getElementById("charge-bar-container");if(!e){e=document.createElement("div"),e.id="charge-bar-container",e.style.cssText="position:fixed; bottom:120px; left:50%; transform:translateX(-50%); width:200px; height:8px; background:rgba(0,0,0,0.5); border-radius:4px; z-index:12; pointer-events:none; display:none; border:1px solid rgba(0,255,136,0.3);";const t=document.createElement("div");t.id="charge-bar-fill",t.style.cssText="height:100%; width:0%; background:linear-gradient(90deg, #00ff88, #ffdd00); border-radius:4px; transition:none;",e.appendChild(t),document.body.appendChild(e)}this._chargeBarContainer=e,this._chargeBarFill=e.querySelector("#charge-bar-fill")}_buildGuns(e){for(const n of this.gunMeshes)this.scene.remove(n);for(const n of this._muzzleFlashes)this.scene.remove(n);this.gunMeshes=[],this.muzzlePoints=[],this._muzzleFlashes=[];const t=this._buildGunModel(e);if(this.scene.add(t),this.gunMeshes.push(t),this.muzzlePoints.push(new E),this._muzzleFlashes.push(this._createMuzzleFlashModel()),e.isDual){const n=this._buildGunModel(e);this.scene.add(n),this.gunMeshes.push(n),this.muzzlePoints.push(new E),this._muzzleFlashes.push(this._createMuzzleFlashModel())}}startCharge(){this.stats.isCharge&&(this._isCharging||(this._isCharging=!0,this._chargeTimer=0,this.audio&&this.audio.playChargeSound(this.stats.chargeTime)))}releaseCharge(e,t,n){if(!this._isCharging)return null;this._isCharging=!1,this._chargeBarContainer&&(this._chargeBarContainer.style.display="none");const i=this.stats,s=Math.min(1,this._chargeTimer/i.chargeTime);if(this._chargeTimer=0,s<.2||n<i.ammoPerShot){if(this.audio&&this.audio._currentChargeOsc){try{this.audio._currentChargeOsc.stop(),this.audio._currentChargeLfo.stop()}catch{}this.audio._currentChargeOsc=null}return null}this._muzzleFlashTimer=.1;for(const o of this._muzzleFlashes)o.material.opacity=.9;return this.audio&&this.audio.initialized&&(this.audio.playDischargeSound(i.hoseDuration),this.audio.playShellDropSound()),this._isFiringHose=!0,this._hoseTimer=i.hoseDuration,this._hoseChargeRatio=s,this._hoseCooldown=0,{projectiles:[],ammoCost:i.ammoPerShot}}getHoseProjectiles(e,t){if(!this._isFiringHose)return null;const n=this.stats;if(this._hoseTimer-=e,this._hoseTimer<=0)return this._isFiringHose=!1,null;if(this._hoseCooldown-=e,this._hoseCooldown>0)return null;this._hoseCooldown=1/15;const i=new E(Math.sin(t),0,-Math.cos(t)),s=[],o=n.damage*this._hoseChargeRatio*.2,a=n.projectileSpeed;for(let l=0;l<this.muzzlePoints.length;l++){const h=this.muzzlePoints[l],u=i.clone();u.y=.03,u.normalize();const c=Math.random()<n.critChance,d=c?o*n.critDamage:o;s.push({position:h.clone().add(u.clone().multiplyScalar(.5)),velocity:u.multiplyScalar(a),damage:d,tier:2,options:{penetrating:!0,isChargerHose:!0,hitScale:6,isCrit:c}})}return{projectiles:s}}tryFire(e,t,n){const i=this.stats;if(i.isCharge||this._fireCooldown>0||n<i.ammoPerShot)return null;this._fireCooldown=1/i.fireRate,this._muzzleFlashTimer=.06;for(const a of this._muzzleFlashes)a.material.opacity=.9;this.audio&&this.audio.initialized&&(this.audio.playShootSound(this.currentType==="shotgun"?1:0),this.audio.playShellDropSound());const s=new E(Math.sin(t),0,-Math.cos(t)),o=[];for(let a=0;a<this.muzzlePoints.length;a++){const l=this.muzzlePoints[a];for(let h=0;h<i.projectilesPerShot;h++){const u=s.clone();if(i.spread>0){const f=(Math.random()-.5)*i.spread*2,g=Math.cos(f),_=Math.sin(f),m=u.x*g-u.z*_,p=u.x*_+u.z*g;u.x=m,u.z=p}u.y=.05,u.normalize();const c=Math.random()<i.critChance,d=c?i.damage*i.critDamage:i.damage;o.push({position:l.clone().add(u.clone().multiplyScalar(.2)),velocity:u.multiplyScalar(i.projectileSpeed),damage:d,tier:this.currentType==="shotgun"?1:0,options:{isShotgun:this.currentType==="shotgun",isCrit:c}})}}return{projectiles:o,ammoCost:i.ammoPerShot}}update(e,t,n){if(this._fireCooldown=Math.max(0,this._fireCooldown-e),this._muzzleFlashTimer-=e,this._isCharging){const g=this.stats;this._chargeTimer=Math.min(g.chargeTime,this._chargeTimer+e);const _=this._chargeTimer/g.chargeTime;this._chargeBarContainer&&(this._chargeBarContainer.style.display="block",this._chargeBarFill.style.width=`${_*100}%`,_>=1?this._chargeBarFill.style.background="linear-gradient(90deg, #ffdd00, #ff6b35)":this._chargeBarFill.style.background="linear-gradient(90deg, #00ff88, #ffdd00)");for(const m of this.gunMeshes)m.traverse(p=>{p.isMesh&&p.material&&p.material.emissive&&(p.material.emissiveIntensity=.15+_*.8)})}const i=Math.sin(n),s=Math.cos(n),o=i,a=-s,l=s,h=i,u=1,c=1.2,d=[1.5,-1.5],f=this.stats;for(let g=0;g<this.gunMeshes.length;g++){const _=this.gunMeshes[g],m=d[g];_.position.set(t.x+l*m+o*u,t.y+c,t.z+h*m+a*u),_.rotation.y=Math.atan2(o,a),this.muzzlePoints[g].set(_.position.x+o*f.barrelLength*1.5,_.position.y,_.position.z+a*f.barrelLength*1.5);const p=this._muzzleFlashes[g];this._muzzleFlashTimer>0?(p.position.copy(this.muzzlePoints[g]),p.material.opacity=this._muzzleFlashTimer/.06,p.scale.setScalar(1+(1-this._muzzleFlashTimer/.06)*2)):p.material.opacity=0}}}const gv=40,_v=3,vv=20,xv=8;class yv{constructor(e){this.scene=e,this.pool=[],this._geo=new en(.3,6,4),this._trailGeo=new en(.15,4,3);for(let t=0;t<gv;t++){const n=new _t({color:4513279,transparent:!0,opacity:.9}),i=new be(this._geo,n);i.visible=!1,e.add(i);const s=[];for(let o=0;o<3;o++){const a=new _t({color:8974079,transparent:!0,opacity:.4}),l=new be(this._trailGeo,a);l.visible=!1,e.add(l),s.push(l)}this.pool.push({mesh:i,trails:s,velocity:new E,damage:0,tier:0,lifetime:0,active:!1,trailPositions:[new E,new E,new E],options:null,hitEnemies:null})}this._splashGeo=new en(.2,4,3),this.splashPool=[];for(let t=0;t<vv;t++){const n=[];for(let a=0;a<xv;a++){const l=new _t({color:6741503,transparent:!0,opacity:.8}),h=new be(this._splashGeo,l);h.visible=!1,e.add(h),n.push({mesh:h,velocity:new E})}const i=new Hs(.2,.5,12),s=new _t({color:8974079,transparent:!0,opacity:.7,side:pt}),o=new be(i,s);o.rotation.x=-Math.PI/2,o.visible=!1,e.add(o),this.splashPool.push({particles:n,ring:o,timer:0,active:!1,origin:new E})}}spawn(e,t,n,i,s={}){const o=this.pool.find(h=>!h.active);if(!o)return;o.mesh.position.copy(e),o.velocity.copy(t),o.damage=n,o.tier=i,o.lifetime=0,o.active=!0,o.options=s,o.hitEnemies=s.penetrating?new Set:null,o.mesh.visible=!0;const a=[4513279,35071,65416,16755200];o.mesh.material.color.setHex(a[i]||4513279),o.mesh.material.opacity=.9;const l=[1,1.2,.8,2];o.mesh.scale.setScalar((l[i]||1)*(s.hitScale||1));for(let h=0;h<o.trails.length;h++)o.trails[h].visible=!1,o.trailPositions[h].copy(e)}_spawnSplash(e,t){const n=this.splashPool.find(o=>!o.active);if(!n)return;n.active=!0,n.timer=0,n.origin.copy(e),n.ring.position.copy(e),n.ring.visible=!0,n.ring.scale.setScalar(.5),n.ring.material.opacity=.8;const s=[4513279,35071,65416,16755200,16724736][t]||4513279;for(const o of n.particles){o.mesh.position.copy(e),o.mesh.visible=!0,o.mesh.material.color.setHex(s),o.mesh.material.opacity=.9;const a=Math.random()*Math.PI*2,l=8+Math.random()*12,h=4+Math.random()*8;o.velocity.set(Math.cos(a)*h,l,Math.sin(a)*h);const u=.3+Math.random()*.4;o.mesh.scale.setScalar(u)}}update(e,t){const n=[];for(const i of this.pool)if(i.active){if(i.lifetime+=e,i.lifetime>_v){this._deactivate(i);continue}if(i.velocity.y-=12*e,i.mesh.position.addScaledVector(i.velocity,e),i.mesh.position.y<0){this._spawnSplash(i.mesh.position,i.tier),this._deactivate(i);continue}for(let s=i.trails.length-1;s>0;s--)i.trailPositions[s].copy(i.trailPositions[s-1]);i.trailPositions[0].copy(i.mesh.position);for(let s=0;s<i.trails.length;s++)i.trails[s].visible=i.lifetime>.02*(s+1),i.trails[s].position.copy(i.trailPositions[s]),i.trails[s].material.opacity=.4*(1-s/i.trails.length),i.trails[s].scale.setScalar(.7*(1-s/i.trails.length));if(t)for(const s of t){if(!s.alive)continue;let o=s.hitRadius;if(i.options&&i.options.isChargerHose&&(o*=3),i.mesh.position.distanceTo(s.position)<o){if(i.hitEnemies&&i.hitEnemies.has(s))continue;let l=i.damage;if(i.options&&i.options.isShotgun){const u=i.lifetime*i.velocity.length();let c=1;u<8?c=3:u<25&&(c=3-2*((u-8)/17)),l=i.damage*c}n.push({enemy:s,damage:l,position:i.mesh.position.clone(),isCrit:i.options&&i.options.isCrit});const h=i.options&&i.options.isCrit?4:i.tier;if(this._spawnSplash(i.mesh.position,h),i.options&&i.options.penetrating)i.hitEnemies.add(s);else{this._deactivate(i);break}}}}for(const i of this.splashPool)if(i.active){i.timer+=e;for(const s of i.particles){s.velocity.y-=25*e,s.mesh.position.addScaledVector(s.velocity,e);const o=1-i.timer/.6;s.mesh.material.opacity=Math.max(0,o*.9),s.mesh.scale.multiplyScalar(.97)}if(i.ring.scale.addScalar(e*8),i.ring.material.opacity=Math.max(0,.8-i.timer*2),i.timer>.6){i.active=!1,i.ring.visible=!1;for(const s of i.particles)s.mesh.visible=!1}}return n}_deactivate(e){e.active=!1,e.mesh.visible=!1;for(const t of e.trails)t.visible=!1}}const ft={SPAWNING:"spawning",WALKING:"walking",ATTACKING:"attacking",COOLDOWN:"cooldown",DYING:"dying",DEAD:"dead"},zi={boss:2,octopus:3,turtle:8},Kc={octopus:{spreader:{extraProjectiles:2,cooldownMod:1,tint:6684876},hunter:{speedMod:1.5,cooldownMod:-1,tint:13369446},corruptor:{poolDurationMod:5,tint:13056}},turtle:{charger:{dash:!0,tint:16729088},tank:{hpMultiplier:3,speedMod:.9,tint:4473992},swarm:{hpMultiplier:.7,speedMod:2,tint:8978176}},boss:{enraged:{dashCooldownMod:-2,tint:16711680},summoner:{spawnAdds:!0,tint:8913151},corrupter:{slamCreatesPool:!0,tint:26112}}},Do={};function $c(r){if(Do[r])return Do[r];const e=document.createElement("canvas");e.width=128,e.height=48;const t=e.getContext("2d");t.font="bold 32px Outfit, sans-serif",t.textAlign="center",t.fillStyle="#ffffff",t.strokeStyle="#000000",t.lineWidth=3,t.strokeText(r,64,34),t.fillText(r,64,34);const n=new Br(e);return n.needsUpdate=!0,Do[r]=n,n}class Mv{constructor(e,t,n,i){this.scene=e,this.world=t,this.audio=n,this.dialogue=i,this.loader=new Wr,this.enemies=[],this.turtleModel=null,this.turtleAnimClip=null,this._modelLoaded=!1,this.bossModel=null,this.bossAnimClip=null,this._bossModelLoaded=!1,this._bossLoadStarted=!1,this.octopusModel=null,this.octopusAnimClip=null,this._octopusModelLoaded=!1,this.currentWave=0,this.waveActive=!1,this.enemiesAliveInWave=0,this.totalKills=0,this.waveSpawnTimer=0,this.waveBudget=0,this._waveDelay=3,this._waveTimer=this._waveDelay,this.testBossMode=new URLSearchParams(window.location.search).get("test_boss")==="true",this.collectibles=[],this.spawnDialogueQueue=[],this._globalTauntTimer=5+Math.random()*5,this.waveJustCompleted=!1,this._summonerTimer=0,this._loadModel()}_getAliveCount(e){let t=0;for(const n of this.enemies)n.state===ft.DEAD||n.state===ft.DYING||(e==="boss"&&n.isBoss||e==="octopus"&&n.isOctopus||e==="turtle"&&!n.isBoss&&!n.isOctopus)&&t++;return t}_applyModifiers(e,t){let n=1;if(this.currentWave>=5&&(n=Math.min(3,Math.floor((this.currentWave-5)/3)+2)),e.level=n,n>=2&&(e.maxHealth*=2,e.health=e.maxHealth),n>=3&&(e.maxHealth*=1.5,e.health=e.maxHealth,e.speed*=1.2,e._attackCooldown*=.85),n>=2){const i=`Lv.${n}`,s=$c(i),o=new Ea({map:s,transparent:!0,depthTest:!1}),a=new _c(o);a.scale.set(2.5,1,1);const l=e.healthBarGroup?e.healthBarGroup.position.y:5;a.position.y=l+1.5,e.model.add(a),e._levelSprite=a}if(this.currentWave>=5&&Kc[t]){const i=Kc[t],s=Object.keys(i),o=s[Math.floor(Math.random()*s.length)],a=i[o];if(e.variant=o,e.variantMods=a,a.hpMultiplier&&(e.maxHealth*=a.hpMultiplier,e.health=e.maxHealth),a.speedMod&&(e.speed*=a.speedMod),a.cooldownMod!==void 0&&(e._attackCooldown=Math.max(.5,e._attackCooldown+a.cooldownMod)),a.dash&&(e._canDash=!0),a.dashCooldownMod&&(e._dashTimer=Math.max(1,(e._dashTimer||7)+a.dashCooldownMod)),a.extraProjectiles&&(e._extraProjectiles=a.extraProjectiles),a.spawnAdds&&(e._spawnAdds=!0),a.slamCreatesPool&&(e._slamCreatesPool=!0),a.tint){const l=new pe(a.tint);e.model.traverse(h=>{h.isMesh&&h.material&&h.material.emissive&&(h.material.emissive.copy(l),h.material.emissiveIntensity=.3,h.userData.originalEmissive=l.clone())})}}if(this.currentWave>=7&&Math.random()<.25){e.isElite=!0,e.maxHealth*=2,e.health=e.maxHealth,e.attackDamage*=2,e.model.traverse(l=>{l.isMesh&&l.material&&l.material.emissive&&(l.material.emissive.setHex(16755200),l.material.emissiveIntensity=.6,l.userData.originalEmissive=new pe(16755200))});const i=$c("ELITE"),s=new Ea({map:i,transparent:!0,depthTest:!1}),o=new _c(s);o.scale.set(3,1.2,1);const a=e.healthBarGroup?e.healthBarGroup.position.y:5;o.position.y=a+3,e.model.add(o)}}_loadModel(){this.loader.load("/models/stylized_turtle.glb",e=>{this.turtleModel=e.scene;const n=new Rt().setFromObject(this.turtleModel).getSize(new E),s=5/Math.max(n.x,n.y,n.z);this.turtleModel.scale.setScalar(s),e.animations&&e.animations.length>0&&(this.turtleAnimClip=e.animations[0],console.log(`Turtle anim: "${this.turtleAnimClip.name}" — ${this.turtleAnimClip.duration.toFixed(2)}s`)),this._modelLoaded=!0,console.log("✓ Turtle model loaded");const o=Pa.onLoad;Pa.onLoad=()=>{o&&o(),this._bossLoadStarted||this._lazyLoadBoss()},this.loader.load("/models/dave_the_octopus_rig_animation.glb",a=>{this.octopusModel=a.scene;const h=new Rt().setFromObject(this.octopusModel).getSize(new E),c=20/Math.max(h.x,h.y,h.z);this.octopusModel.scale.setScalar(c),a.animations&&a.animations.length>0&&(this.octopusAnimClip=a.animations[0],this.octopusAnimClip.tracks=this.octopusAnimClip.tracks.filter(d=>!d.name.endsWith(".position"))),this._octopusModelLoaded=!0,console.log("✓ Octopus model loaded")},void 0,a=>console.error("Failed to load octopus model:",a))},void 0,e=>console.error("Failed to load turtle model:",e))}_lazyLoadBoss(){this._bossLoadStarted||(this._bossLoadStarted=!0,this.loader.load("/models/zombie_monster_slasher_necromorph.glb",e=>{this.bossModel=e.scene;const n=new Rt().setFromObject(this.bossModel).getSize(new E),s=12/Math.max(n.x,n.y,n.z);this.bossModel.scale.setScalar(s),e.animations&&e.animations.length>0&&(this.bossAnimClip=e.animations.find(o=>o.name==="anim")||e.animations[0]),this._bossModelLoaded=!0,console.log("✓ Boss zombie monster loaded"),this.testBossMode&&this.waveActive&&this.bossesToSpawn===0&&(this.bossesToSpawn=1)},void 0,e=>console.error("Failed to load boss model:",e)))}startWave(){this.currentWave++,this.testBossMode&&!this._bossLoadStarted&&this._lazyLoadBoss(),this.waveBudget=10+this.currentWave*10,this.currentWave>5&&(this.waveBudget+=(this.currentWave-5)*5),this.enemiesAliveInWave=0,this.waveActive=!0,this.waveSpawnTimer=0,window.showNotification&&window.showNotification(`Wave ${this.currentWave}`,"Defend the Burrow!"),this._bossSpokeThisWave=!1,this._octopusSpokeThisWave=!1,this.currentWave>=3&&this.dialogue&&this.crab&&this.crab.model&&Math.random()<.3&&this.dialogue.speak(this.crab.model,"They are bringing the heavy hitters.","hero",4,4),console.log(`Wave ${this.currentWave} starting with budget: ${this.waveBudget}`);const e=document.getElementById("wave-number");e&&(e.textContent=this.currentWave)}_spawnTurtle(){if(!this._modelLoaded||this._getAliveCount("turtle")>=zi.turtle)return;const e=Yi(this.turtleModel),t=55+Math.random()*20,n=-190+Math.random()*380,i=this.world.getTerrainHeight(t,n);e.position.set(t,i,n),e.rotation.y=Math.PI,e.traverse(u=>{u.isMesh&&(u.castShadow=!0,u.receiveShadow=!0,u.material&&(u.material=u.material.clone(),u.userData.originalColor=u.material.color.clone(),u.userData.originalEmissive=u.material.emissive?u.material.emissive.clone():new pe(0)))}),this.scene.add(e);let s=null,o=null;this.turtleAnimClip&&(s=new Ns(e),o=s.clipAction(this.turtleAnimClip),o.play(),o.timeScale=1);const a=this._createHealthBar();e.add(a),a.position.y=3.5;const l=40+this.currentWave*10,h={model:e,mixer:s,walkAction:o,healthBarGroup:a,healthBarFill:a.children[1],maxHealth:l,health:l,speed:12+this.currentWave*.75,attackDamage:8+this.currentWave*2,attackRange:5,hitRadius:5,state:ft.SPAWNING,alive:!0,position:e.position,_spawnTimer:0,_attackTimer:0,_attackCooldown:1.5,_cooldownTimer:0,_deathTimer:0,_flashTimer:0,_lungeDir:new E,_lungeProgress:0,targetEntity:Math.random()>.5?"burrow":"crab"};this._applyModifiers(h,"turtle"),this.enemies.push(h),this.enemiesAliveInWave++,this.dialogue&&Math.random()<.25&&this.dialogue.speak(e,"The beach belongs to us!","monster",2.5,4.5)}_spawnOctopus(){if(!this._octopusModelLoaded||this._getAliveCount("octopus")>=zi.octopus)return;const e=Yi(this.octopusModel),n=new Rt().setFromObject(e).getCenter(new E);e.position.x=-n.x,e.position.z=-n.z,e.position.y=-12;const i=new Xt;i.add(e);const s=55+Math.random()*20,o=-190+Math.random()*380,a=0,l=this.world.getTerrainHeight(s,o)+a;i.position.set(s,l,o),i.rotation.y=Math.PI,e.traverse(v=>{v.isMesh&&(v.castShadow=!0,v.receiveShadow=!0,v.frustumCulled=!1,v.material&&(v.material=v.material.clone(),v.userData.originalColor=v.material.color.clone(),v.userData.originalEmissive=v.material.emissive?v.material.emissive.clone():new pe(0)))}),this.scene.add(i);let h=null,u=null;this.octopusAnimClip&&(h=new Ns(e),u=h.clipAction(this.octopusAnimClip),u.play(),u.timeScale=1);const c=this._createHealthBar();i.add(c),c.position.y=13,c.scale.set(2.5,2.5,2.5);const f=(60+this.currentWave*20)*2,g=8+this.currentWave*2,_=g*2,m=g*.3,p={model:i,mixer:h,walkAction:u,healthBarGroup:c,healthBarFill:c.children[1],isOctopus:!0,maxHealth:f,health:f,speed:10+this.currentWave*.5,attackDamage:_,tickDamage:m,attackRange:40,hitRadius:4,state:ft.SPAWNING,alive:!0,position:i.position,yOffset:a,_spawnTimer:0,_attackTimer:0,_attackCooldown:5,_cooldownTimer:0,_deathTimer:0,_flashTimer:0,_lungeDir:new E,_lungeProgress:0,targetEntity:"crab",throwCount:0,_dialogueTimer:12};this._applyModifiers(p,"octopus"),this.enemies.push(p),this.dialogue&&!this._octopusSpokeThisWave&&(this._octopusSpokeThisWave=!0,this.spawnDialogueQueue.push({entity:p,text:"You hear it too… don’t you The call of the abyss… it calls for you.",heightOffset:15})),this.enemiesAliveInWave++}_spawnBoss(){if(!this._bossModelLoaded||this._getAliveCount("boss")>=zi.boss)return;const e=Yi(this.bossModel);this.isBigBossWave&&e.scale.multiplyScalar(2);const t=new Xt;t.add(e);const n=55+Math.random()*20,i=-190+Math.random()*380,s=this.world.getTerrainHeight(n,i);t.position.set(n,s,i),t.rotation.y=Math.PI,e.traverse(c=>{c.isMesh&&(c.castShadow=!0,c.receiveShadow=!0,c.material&&(c.material=c.material.clone(),c.userData.originalColor=c.material.color.clone(),c.userData.originalEmissive=c.material.emissive?c.material.emissive.clone():new pe(0)))}),this.scene.add(t);let o=null,a=null;this.bossAnimClip&&(o=new Ns(e),a=o.clipAction(this.bossAnimClip),a.play(),a.timeScale=1);const l=this._createHealthBar();t.add(l),this.isBigBossWave?(l.position.y=26,l.scale.set(7,7,7)):(l.position.y=14,l.scale.set(4,4,4));const h=this.isBigBossWave?600+this.currentWave*100:400+this.currentWave*50,u={model:t,mixer:o,walkAction:a,healthBarGroup:l,healthBarFill:l.children[1],isBoss:!0,maxHealth:h,health:h,speed:this.isBigBossWave?8+this.currentWave*.2:10+this.currentWave*.5,attackDamage:this.isBigBossWave?40+this.currentWave*5:20+this.currentWave*5,attackRange:this.isBigBossWave?12:8,hitRadius:this.isBigBossWave?12:8,state:ft.SPAWNING,alive:!0,position:t.position,_spawnTimer:0,_attackTimer:0,_attackCooldown:this.isBigBossWave?2.5:1.5,_cooldownTimer:0,_deathTimer:0,_flashTimer:0,_lungeDir:new E,_lungeProgress:0,_needsFlashReset:!1,targetEntity:"crab",_isDashing:!1,isBigBoss:this.isBigBossWave};if(this._applyModifiers(u,"boss"),this.enemies.push(u),this.enemiesAliveInWave++,this.dialogue&&!this._bossSpokeThisWave){this._bossSpokeThisWave=!0;const c=["I am the terror of the deep! Your water gun is nothing!","The tide washes all away... starting with you!"],d=c[Math.floor(Math.random()*c.length)],f=this.isBigBossWave?22:15;this.spawnDialogueQueue.push({entity:u,text:d,heightOffset:f})}}_createHealthBar(){const e=new Xt,t=new Ot(2,.25),n=new _t({color:3355443,side:pt}),i=new be(t,n);e.add(i);const s=new Ot(1.9,.18),o=new _t({color:4521796,side:pt}),a=new be(s,o);return a.position.z=.01,e.add(a),e}damageEnemy(e,t){if(!e.alive)return;e.health-=t,e._flashTimer=.15;const n=Math.max(0,e.health/e.maxHealth);e.healthBarFill.scale.x=n,e.healthBarFill.position.x=-(1-n)*.95;const i=n<.5?1:(1-n)*2,s=n>.5?1:n*2;if(e.healthBarFill.material.color.setRGB(i,s,0),e.health<=0)this._killEnemy(e);else if(this.dialogue&&Math.random()<.1)if(e.isBoss){const o=["Your pathetic squirt gun cannot pierce my armor!","I am the terror of the deep! Your water gun is nothing!","The tide washes all away... starting with you!"],a=o[Math.floor(Math.random()*o.length)],l=e.healthBarGroup.position.y-1;this.dialogue.speak(e.model,a,"monster",3.5,l)}else{const o=["You're gonna feel my wrath, shell-face!","Snap him in half!","The beach belongs to us!"],a=o[Math.floor(Math.random()*o.length)];this.dialogue.speak(e.model,a,"monster",2.5,4.5)}this.audio&&this.audio.initialized&&this.audio.playEnemyHitSound(e.isBoss)}_triggerRandomTaunt(){const e=this.enemies.filter(s=>s.alive);if(e.length===0)return;const t=e[Math.floor(Math.random()*e.length)];let n="",i=15;if(t.isBoss){const s=["Your pathetic squirt gun cannot pierce my armor!","I am the terror of the deep! Your water gun is nothing!","The tide washes all away... starting with you!"];n=s[Math.floor(Math.random()*s.length)],i=t.healthBarGroup?t.healthBarGroup.position.y-1:20}else if(t.isOctopus){const s=["The call of Cthulhu echoes.","The abyss is awake.... Wakey wakey!!!"];n=s[Math.floor(Math.random()*s.length)],i=15}else{const s=["You're gonna feel my wrath, shell-face!","Snap him in half!","The beach belongs to us!"];n=s[Math.floor(Math.random()*s.length)],i=4.5}this.dialogue.speak(t.model,n,"monster",3,i)}_killEnemy(e){e.alive=!1,e.state=ft.DYING,e._deathTimer=0,e._deathDuration=e.isOctopus?4:.6,this.totalKills++,this.enemiesAliveInWave--,e.isOctopus&&this.dialogue&&(this.dialogue.monsterCooldown=0,this.dialogue.speak(e.model,"Ahh, The abyss… remembers you.","monster",4,15)),this._spawnDrops(e);const t=document.getElementById("kill-count");t&&(t.textContent=this.totalKills),this.audio&&this.audio.initialized&&this.audio.playEnemyDeathSound(e.isBoss)}_spawnDrops(e){const t=e.isBoss,n=e.isBigBoss,i=e.isOctopus;e.type;const s=e.position;if(t){const o=n?15:8;for(let a=0;a<o;a++){const l=new E((Math.random()-.5)*8,0,(Math.random()-.5)*8);this._spawnDrop(s.clone().add(l),"coin",3+Math.floor(Math.random()*3))}this._spawnDrop(s.clone(),"health",150+Math.floor(Math.random()*100));return}if(e.isElite){for(let o=0;o<4;o++){const a=new E((Math.random()-.5)*5,0,(Math.random()-.5)*5);this._spawnDrop(s.clone().add(a),"coin",2+Math.floor(Math.random()*3))}Math.random()<.5&&this._spawnDrop(s.clone(),"health",50+Math.floor(Math.random()*50));return}if(i){for(let o=0;o<2;o++){const a=new E((Math.random()-.5)*4,0,(Math.random()-.5)*4);this._spawnDrop(s.clone().add(a),"coin",1+Math.floor(Math.random()*2))}Math.random()<.2&&this._spawnDrop(s.clone(),"health",30+Math.floor(Math.random()*20));return}if(Math.random()<.6){const o=new E((Math.random()-.5)*3,0,(Math.random()-.5)*3);this._spawnDrop(s.clone().add(o),"coin",1)}Math.random()<.05&&this._spawnDrop(s.clone(),"health",15+Math.floor(Math.random()*10))}_spawnDrop(e,t,n=1){const i=new il(.5,0);let s,o;t==="health"?(s=4521830,o=65348):(s=16768324,o=16755200);const a=new lt({color:s,emissive:o,emissiveIntensity:.6,roughness:.2,metalness:.8}),l=new be(i,a);l.position.copy(e),l.position.y+=1.5,l.castShadow=!0,this.scene.add(l);const h=new Hs(.6,.9,12),u=new _t({color:t==="health"?4521830:16768324,transparent:!0,opacity:.4,side:pt}),c=new be(h,u);c.rotation.x=-Math.PI/2,l.add(c),this.collectibles.push({mesh:l,baseY:e.y+1.5,collected:!1,dropType:t,value:n})}update(e,t,n,i,s,o,a){if(this.dialogue&&!this.dialogue.isMonsterSpeaking())if(this.spawnDialogueQueue.length>0){const c=this.spawnDialogueQueue.shift();c.entity&&c.entity.alive&&this.dialogue.speak(c.entity.model,c.text,"monster",4,c.heightOffset)}else this._globalTauntTimer!==void 0&&(this._globalTauntTimer-=e,this._globalTauntTimer<=0&&(this._triggerRandomTaunt(),this._globalTauntTimer=5+Math.random()*5));if(this.waveJustCompleted=!1,!this.waveActive)this._waveTimer-=e,this._waveTimer<=0&&this.startWave();else{let c=0;for(const d of this.enemies)d.state!==ft.DEAD&&d.state!==ft.DYING&&(d.isBoss?c+=10:d.isOctopus?c+=3:c+=1);if(this.waveBudget>0){this.waveSpawnTimer+=e;const d=.5+Math.random()*.5;if(this.waveSpawnTimer>d&&c<20){this.waveSpawnTimer=0;let f=!1;this.currentWave>=3&&this._bossModelLoaded&&this.waveBudget>=10&&c+10<=20&&this._getAliveCount("boss")<zi.boss&&(Math.random()<.1||this.waveBudget===10)&&(this.isBigBossWave=this.currentWave>=6&&this.currentWave%2===0&&Math.random()<.5,this._spawnBoss(),this.waveBudget-=10,f=!0),!f&&this.currentWave>=2&&this._octopusModelLoaded&&this.waveBudget>=3&&c+3<=20&&this._getAliveCount("octopus")<zi.octopus&&Math.random()<.25&&(this._spawnOctopus(),this.waveBudget-=3,f=!0),!f&&this.waveBudget>=1&&c+1<=20&&this._getAliveCount("turtle")<zi.turtle&&(this._spawnTurtle(),this.waveBudget-=1)}}this.waveBudget<=0&&c===0&&(this.waveActive=!1,this._waveTimer=this._waveDelay,this.waveJustCompleted=!0,console.log(`Wave ${this.currentWave} complete!`))}let l=0;for(const c of this.enemies){if(c.state===ft.DEAD)continue;if(c.mixer&&c.mixer.update(e),c._knockbackVelocity&&c._knockbackVelocity.lengthSq()>.01&&(c.position.addScaledVector(c._knockbackVelocity,e*10),c._knockbackVelocity.multiplyScalar(.8),c.position.y=this.world.getTerrainHeight(c.position.x,c.position.z)+(c.yOffset||0)),c._staggerTimer>0){c._staggerTimer-=e,c.walkAction&&(c.walkAction.timeScale=.2),c.healthBarGroup&&i&&c.healthBarGroup.lookAt(i.position);continue}if(c.healthBarGroup&&i&&c.healthBarGroup.lookAt(i.position),c._flashTimer>0){c._flashTimer-=e;const m=c._flashTimer/.15;c.model.traverse(p=>{p.isMesh&&p.material&&p.material.emissive&&p.material.emissive.setRGB(m,0,0)}),c._needsFlashReset=!0}else c._needsFlashReset&&(c._needsFlashReset=!1,c.model.traverse(m=>{m.isMesh&&m.material&&m.material.emissive&&(m.userData.originalEmissive?m.material.emissive.copy(m.userData.originalEmissive):m.material.emissive.setRGB(0,0,0))}));let d=n,f=!1,g=null;if(c.targetEntity==="burrow"&&s&&s.health>0&&(d=s.position,f=!0),s&&s.minions){let m=c.position.distanceTo(d);for(const p of s.minions){if(p.health<=0)continue;const v=c.position.distanceTo(p.model.position);v<m&&(m=v,d=p.model.position,g=p,f=!1)}}const _=c.position.distanceTo(d);switch(c.state){case ft.SPAWNING:c._spawnTimer+=e,c._spawnTimer>1&&(c.state=ft.WALKING);break;case ft.WALKING:if(c.isOctopus){c._cooldownTimer-=e;const P=d.x-c.position.x,F=d.z-c.position.z,O=Math.sqrt(P*P+F*F);if(O>.1&&(c.model.rotation.y=Math.atan2(P,F)),c.position.x>25){const V=P/O,X=F/O,W=Math.min(-.5,V);c.position.x+=W*c.speed*2*e,c.position.z+=X*c.speed*2*e,c.position.y=this.world.getTerrainHeight(c.position.x,c.position.z)+(c.yOffset||0),c.walkAction&&(c.walkAction.timeScale=2)}else if(O>20){const V=P/O,X=F/O;c.position.x+=V*c.speed*.5*e,c.position.z+=X*c.speed*.5*e,c.position.y=this.world.getTerrainHeight(c.position.x,c.position.z)+(c.yOffset||0),c.walkAction&&(c.walkAction.timeScale=.5)}else c.walkAction&&(c.walkAction.timeScale=0);if(c._cooldownTimer<=0&&(c._cooldownTimer=c._attackCooldown,c.throwCount++,Math.random()<.25&&this.dialogue&&!this.dialogue.isMonsterSpeaking()&&this.dialogue.speak(c.model,"Swallow my darkness!","monster",3,15),a)){const V=d.clone(),X=c.position.clone();X.y+=6,a.throwBlob(X,V,c.attackDamage,c.tickDamage)}break}let m=c.speed,p=1;c.isBoss&&(c._dashTimer-=e,c._isDashing?c._dashTimer<=0?(c._isDashing=!1,c._dashTimer=7):(m*=3,p=3):c._dashTimer<=0&&(c._isDashing=!0,c._dashTimer=3)),c.walkAction&&(c.walkAction.timeScale=p);const v=d.x-c.position.x,M=d.z-c.position.z,x=Math.sqrt(v*v+M*M);if(x>.1){const P=v/x,F=M/x;c.position.x+=P*m*e,c.position.z+=F*m*e,c.position.y=this.world.getTerrainHeight(c.position.x,c.position.z)+(c.yOffset||0),c.model.rotation.y=Math.atan2(P,F)}const C=f?c.attackRange+3:c.attackRange;_<C&&(c.state=ft.ATTACKING,c._attackTimer=0,c._lungeProgress=0,c._lungeDir.set(v/x,0,M/x),this.audio&&this.audio.initialized&&this.audio.playEnemyAttackSound(c.isBoss),c.walkAction&&(c.walkAction.timeScale=4));break;case ft.ATTACKING:c._attackTimer+=e,c._lungeProgress=Math.min(1,c._attackTimer/.3);const w=c.speed*3;if(c._lungeProgress<1&&(c.position.x+=c._lungeDir.x*w*e,c.position.z+=c._lungeDir.z*w*e,c.position.y=this.world.getTerrainHeight(c.position.x,c.position.z)+(c.yOffset||0),c.model.traverse(P=>{P.isMesh&&P.material&&P.material.emissive&&P.material.emissive.setRGB(.8,.1,0)})),c._attackTimer>.25&&c._attackTimer<.35){const P=f?c.attackRange+5:c.attackRange+2;_<P&&(g&&g.health!==void 0?g.health-=c.attackDamage:f?s.takeDamage(c.attackDamage):(l+=c.attackDamage,i&&(i.position.x+=(Math.random()-.5)*.8,i.position.y+=(Math.random()-.5)*.5))),c.state=ft.COOLDOWN,c._cooldownTimer=0,c._needsFlashReset=!0}break;case ft.COOLDOWN:c._cooldownTimer+=e,c._cooldownTimer<.4&&(c.position.x-=c._lungeDir.x*c.speed*.5*e,c.position.z-=c._lungeDir.z*c.speed*.5*e,c.position.y=this.world.getTerrainHeight(c.position.x,c.position.z)),c.walkAction&&(c.walkAction.timeScale=.3),c._cooldownTimer>c._attackCooldown&&(c.state=ft.WALKING);break;case ft.DYING:c._deathTimer+=e;const A=c._deathDuration||.6,L=c._deathTimer/A;c._materialsFaded||(c._materialsFaded=!0,c.model.traverse(P=>{P.isMesh&&P.material&&(P.material.transparent=!0,P.material.needsUpdate=!0)}));const b=c.isBoss||c.isOctopus?1:this.turtleModel.scale.x;c.model.scale.setScalar(b*Math.max(0,1-L)),c.model.traverse(P=>{P.isMesh&&P.material&&(P.material.opacity=Math.max(0,1-L))});const S=c.isOctopus?2:12;c.model.rotation.y+=e*S,c.model.position.y+=e*(c.isOctopus?.5:2),c.walkAction&&(c.walkAction.timeScale=c.isOctopus?2:8),c._deathTimer>A&&(c.state=ft.DEAD,this.scene.remove(c.model));break}}let h=0,u=0;for(const c of this.collectibles){if(c.collected)continue;const d=c.mesh.position.distanceTo(n);if(d<15){const f=new E().subVectors(n,c.mesh.position);f.y+=1,f.normalize(),c.mesh.position.addScaledVector(f,e*25),c.baseY=c.mesh.position.y}else c.mesh.position.y=c.baseY+Math.sin(t*3)*.5,c.mesh.rotation.y=t*2;d<4&&(c.collected=!0,this.scene.remove(c.mesh),c.dropType==="health"?u+=c.value:h+=c.value,this.audio&&this.audio.initialized&&this.audio.playUpgradeSound())}return this.enemies.length>50&&(this.enemies=this.enemies.filter(c=>c.state!==ft.DEAD)),this.collectibles.length>50&&(this.collectibles=this.collectibles.filter(c=>!c.collected)),{damageToPlayer:l,coinsCollected:h,healthCollected:u,waveJustCompleted:this.waveJustCompleted}}}const ci={SPAWNING:"spawning",PATROL:"patrol",ATTACK:"attack"},Ht={ACTIVE:"active",DESTROYED:"destroyed",REBUILDING:"rebuilding"};class Sv{constructor(e,t,n){this.scene=e,this.world=t,this.audio=n,this.loader=new Wr,this.level=1,this.maxHealth=400,this.health=400,this.position=new E(-60,0,0),this.depositRadius=10,this.state=Ht.ACTIVE,this.maxMinions=3,this.repairCost=15,this.rebuildTimer=0,this.rebuildDuration=15,this.burrowGroup=new Xt,this.burrowGroup.position.copy(this.position),this.scene.add(this.burrowGroup),this.eggs=[],this.minions=[],this.minionModel=null,this.minionAnimClips=null,this._buildBurrow(),this._loadMinionModel(),this._updateHUD()}_buildBurrow(){this.loader.load("/models/simple_rock_iv.glb",e=>{const t=e.scene,n=14,i=6;for(let f=0;f<n;f++){if(f===0)continue;const g=t.clone(),_=f/n*Math.PI*2,m=Math.cos(_)*i,p=Math.sin(_)*i;if(g.position.set(m,0,p),g.scale.setScalar(3+Math.random()*2.5),g.rotation.y=Math.random()*Math.PI,g.rotation.z=(Math.random()-.5)*.5,g.traverse(v=>{v.isMesh&&(v.castShadow=!0,v.receiveShadow=!0)}),this.burrowGroup.add(g),Math.random()<.4){const v=new mn(.2,.4,4+Math.random()*3,6),M=new lt({color:9136404,roughness:.95,metalness:0}),x=new be(v,M);x.position.set(m+(Math.random()-.5),1.5,p+(Math.random()-.5)),x.rotation.set(Math.random()*Math.PI,Math.random()*Math.PI,Math.random()*Math.PI),x.castShadow=!0,this.burrowGroup.add(x)}}const s=new mn(.1,5.5,1.5,16),o=new lt({color:13936746,roughness:1}),a=new be(s,o);a.position.y=.75,a.receiveShadow=!0,this.burrowGroup.add(a);const l=new Zh(16755200,3,25);l.position.y=2,this.burrowGroup.add(l);const h=new mn(1.5,.4,60,12),u=new _t({color:16766720,transparent:!0,opacity:.2,blending:Lr,depthWrite:!1}),c=new be(h,u);c.position.y=20,this.burrowGroup.add(c),this.burrowGroup.position.y=this.world.getTerrainHeight(this.position.x,this.position.z)-.2;const d=document.getElementById("burrow-hud");d&&(d.style.display="block")})}_loadMinionModel(){this.loader.load("/models/animated_crab.glb",e=>{this.minionModel=e.scene,this.minionAnimClips=e.animations;const n=new Rt().setFromObject(this.minionModel).getSize(new E),s=2/Math.max(n.x,n.y,n.z);this.minionModel.scale.setScalar(s),this.minionModel.traverse(o=>{o.isMesh&&(o.castShadow=!0,o.receiveShadow=!0,o.material&&(o.material=o.material.clone(),o.material.color.setHex(16733491)))}),console.log("✓ Minion model loaded")})}tryInteract(e){if(this.state===Ht.DESTROYED){if(e>=this.repairCost)return this._startRebuilding(),this.repairCost}else if(this.state===Ht.ACTIVE){if(this.eggs.length+this.minions.length>=this.maxMinions)return 0;let t=0;for(;this.eggs.length+this.minions.length<this.maxMinions;){const n=this.eggs.length+this.minions.length,i=5*Math.pow(2,n);if(e>=i)e-=i,t+=i,this._layEgg();else break}return t}return 0}_layEgg(){const e=new en(.8,16,16),t=new lt({color:16755200,emissive:16729088,emissiveIntensity:.8,roughness:.2,metalness:.1}),n=new be(e,t),i=Math.random()*Math.PI*2,s=Math.random()*1.5;n.position.set(Math.cos(i)*s,1.2,Math.sin(i)*s),n.castShadow=!0,this.burrowGroup.add(n),this.eggs.push({mesh:n,timer:5,baseY:1,phase:Math.random()*Math.PI}),this.audio&&this.audio.playUpgradeSound(),window.showNotification&&window.showNotification("Egg Laid!","A Baby Crab will hatch in 5 seconds."),this.dialogue&&this.crab&&this.crab.model&&this.dialogue.speak(this.crab.model,"Little one is on the way!","hero",2.5),this._updateHUD()}_hatchEgg(e){const t=this.eggs[e];if(this.burrowGroup.remove(t.mesh),this.eggs.splice(e,1),!this.minionModel)return;const n=Yi(this.minionModel),i=new E;t.mesh.getWorldPosition(i),n.position.copy(i),this.scene.add(n);let s=null,o=null,a=null;if(this.minionAnimClips&&this.minionAnimClips.length>0){if(s=new Ns(n),this.minionAnimClips.length===1)o=s.clipAction(this.minionAnimClips[0]),a=s.clipAction(this.minionAnimClips[0]);else{const h=this.minionAnimClips.find(c=>c.name.toLowerCase().includes("run"))||this.minionAnimClips[0],u=this.minionAnimClips.find(c=>c.name.toLowerCase().includes("attack"))||this.minionAnimClips[0];o=s.clipAction(h),a=s.clipAction(u)}o.play()}const l={model:n,mixer:s,runAction:o,attackAction:a,state:ci.SPAWNING,health:400*this.level,speed:14+this.level*2,damage:15+this.level*5,target:null,timer:0,attackCooldown:0,scalePhase:0};n.scale.setScalar(.1),this.minions.push(l),window.showNotification&&window.showNotification("Hatched!","A Minion Crab joined the fight!"),this.dialogue&&this.crab&&this.crab.model&&this.dialogue.speak(this.crab.model,"Go get 'em, little buddy!","hero",2.5),this._updateHUD()}takeDamage(e){this.health<=0||this.state!==Ht.ACTIVE||(this.health-=e,this.burrowGroup.traverse(t=>{if(t.isMesh&&t.material&&t.material.emissive){const n=t.material.emissive.clone();t.material.emissive.setHex(16711680),setTimeout(()=>{t.material&&t.material.emissive.copy(n)},150)}}),this.health<=0&&(this.health=0,this._destroyBurrow()),this._updateHUD())}_destroyBurrow(){this.state=Ht.DESTROYED,console.log("Burrow Destroyed!");for(const e of this.eggs)this.burrowGroup.remove(e.mesh);this.eggs=[],this.level=1,this.maxMinions=3,this.burrowGroup.position.y-=2,window.showNotification&&window.showNotification("Burrow Destroyed!","Deposit 15 Shells to rebuild it."),this.dialogue&&this.crab&&this.crab.model&&(this.dialogue.heroCooldown=0,this.dialogue.speak(this.crab.model,"Oh no! The burrow is destroyed!","hero",3)),this._updateHUD()}_startRebuilding(){this.state=Ht.REBUILDING,this.rebuildTimer=0;const e=new Ot(5,.5),t=new _t({color:3355443,depthTest:!1});this.rebuildBg=new be(e,t),this.rebuildBg.position.y=8;const n=new Ot(5,.5),i=new _t({color:16766720,depthTest:!1});this.rebuildFill=new be(n,i),this.rebuildFill.position.y=8,this.rebuildFill.position.z=.01,this.rebuildFill.scale.x=.01,this.burrowGroup.add(this.rebuildBg),this.burrowGroup.add(this.rebuildFill),window.showNotification&&window.showNotification("Rebuilding!","Defend the Burrow while it rebuilds!"),this.dialogue&&this.crab&&this.crab.model&&(this.dialogue.heroCooldown=0,this.dialogue.speak(this.crab.model,"Rebuilding the burrow... hold them off!","hero",3)),this._updateHUD()}update(e,t,n){const i=n.enemies;if(this.state===Ht.REBUILDING){this.rebuildTimer+=e;const s=Math.min(1,this.rebuildTimer/this.rebuildDuration);this.rebuildFill.scale.x=Math.max(.01,s),this.rebuildFill.position.x=-2.5+2.5*s,this.burrowGroup.position.y+=2/this.rebuildDuration*e,s>=1&&(this.state=Ht.ACTIVE,this.health=this.maxHealth,this.burrowGroup.position.y=this.world.getTerrainHeight(this.position.x,this.position.z)-.2,this.burrowGroup.remove(this.rebuildBg),this.burrowGroup.remove(this.rebuildFill),window.showNotification&&window.showNotification("Burrow Restored!","Your Burrow is back online."),this.dialogue&&this.crab&&this.crab.model&&(this.dialogue.heroCooldown=0,this.dialogue.speak(this.crab.model,"The burrow is back online!","hero",3))),this._updateHUD()}for(let s=this.eggs.length-1;s>=0;s--){const o=this.eggs[s];o.timer-=e;const a=Math.sin(t*4+o.phase)*.1+1;o.mesh.scale.setScalar(a),o.mesh.material.emissiveIntensity=.5+a*.5,o.timer<=0&&this._hatchEgg(s)}for(let s=this.minions.length-1;s>=0;s--){const o=this.minions[s];if(o.health<=0){this.scene.remove(o.model),this.minions.splice(s,1),this._updateHUD();continue}switch(o.mixer&&o.mixer.update(e),o.state){case ci.SPAWNING:o.scalePhase+=e*2;const a=this.minionModel?this.minionModel.scale.x:.5;o.model.scale.setScalar(Math.min(a,o.scalePhase*a)),o.scalePhase>=1&&(o.state=ci.PATROL);break;case ci.PATROL:o.runAction&&(o.runAction.timeScale=1,o.runAction.play());let l=40,h=null;for(const f of i){if(f.state==="dead"||f.state==="dying")continue;const g=o.model.position.distanceTo(f.position);g<l&&(l=g,h=f)}if(h)o.target=h,o.state=ci.ATTACK;else{o.timer+=e;const f=8,g=this.position.x+Math.cos(o.timer*.5+s)*f,_=this.position.z+Math.sin(o.timer*.5+s)*f,m=g-o.model.position.x,p=_-o.model.position.z;o.model.position.x+=m*e*2,o.model.position.z+=p*e*2,o.model.position.y=this.world.getTerrainHeight(o.model.position.x,o.model.position.z),(Math.abs(m)>.1||Math.abs(p)>.1)&&(o.model.rotation.y=Math.atan2(m,p))}break;case ci.ATTACK:if(!o.target||o.target.state==="dead"||o.target.state==="dying"){o.target=null,o.state=ci.PATROL;break}const u=o.target.position.x-o.model.position.x,c=o.target.position.z-o.model.position.z,d=Math.sqrt(u*u+c*c);d>3?(o.runAction&&(o.runAction.timeScale=3),o.model.position.x+=u/d*o.speed*e,o.model.position.z+=c/d*o.speed*e,o.model.position.y=this.world.getTerrainHeight(o.model.position.x,o.model.position.z),o.model.rotation.y=Math.atan2(u,c)):(o.runAction&&(o.runAction.timeScale=1),o.model.rotation.y=Math.atan2(u,c),o.attackCooldown-=e,o.attackCooldown<=0&&(o.attackCooldown=.5,n.damageEnemy(o.target,o.damage),o.model.position.x+=u/d*1.5,o.model.position.z+=c/d*1.5));break}}}_updateHUD(){const e=document.getElementById("burrow-health"),t=document.getElementById("burrow-minions"),n=document.getElementById("burrow-level"),i=document.getElementById("burrow-cost");if(e&&(this.state===Ht.DESTROYED?(e.textContent="DESTROYED",e.style.color="#555555"):this.state===Ht.REBUILDING?(e.textContent="REBUILDING...",e.style.color="#FFD700"):(e.textContent=`${Math.max(0,Math.floor(this.health))}/${this.maxHealth} HP`,this.health<this.maxHealth*.3?e.style.color="#FF0000":e.style.color="#44FF44")),t&&(this.state===Ht.ACTIVE?t.textContent=`${this.eggs.length+this.minions.length}/${this.maxMinions}`:t.textContent="OFFLINE"),n&&(n.textContent=this.level),i)if(this.state===Ht.DESTROYED)i.textContent="Rebuild: 15 Shells",i.style.color="#FF4444";else if(this.state===Ht.REBUILDING)i.textContent="Please Wait...",i.style.color="#FFD700";else if(this.eggs.length+this.minions.length>=this.maxMinions)i.textContent="MAX CAPACITY",i.style.color="#AAAAAA";else{const s=this.eggs.length+this.minions.length,o=5*Math.pow(2,s);i.textContent=`Cost: ${o} Shells`,i.style.color="#FFD700"}}}class Tv{constructor(e,t){this.camera=e,this.audioManager=t,this.layer=document.getElementById("dialogue-layer"),this.activeDialogues=[],this.dialogueFiles={"I am the terror of the deep! Your water gun is nothing!":"I am the terror of the deep! Your water gun is nothing!.mp3","Need more water... hold on.":"Need more water... hold on.mp3","Oh crab... here comes the big one.":"Oh crab... here comes the big one.mp3","Snap him in half!":"Snap him in half!.mp3","The beach belongs to us!":"The beach belongs to us!.mp3","The tide washes all away... starting with you!":"The tide washes all away... starting with you!.mp3","Time to clean up this beach.":"Time to clean up this beach.mp3","Your pathetic squirt gun cannot pierce my armor!":"Your pathetic squirt gun cannot pierce my armor!.mp3","You're gonna feel my wrath, shell-face!":"yourgonnafeelmywrathshellface_turtle.mp3","Oh no! The burrow is destroyed!":"Oh no! The burrow is destroyed!.mp3","Rebuilding the burrow... hold them off!":"Rebuilding the burrow... hold them off!.mp3","The burrow is back online!":"The burrow is back online!.mp3","Little one is on the way!":"Little one is on the way!.mp3","Go get 'em, little buddy!":"Go get 'em, little buddy!.mp3","You hear it too… don’t you The call of the abyss… it calls for you.":"You hear it too… don’t you The call of the abyss… it calls for you.mp3","The call of Cthulhu echoes.":"The call of Cthulhu echoes.mp3","The abyss is awake.... Wakey wakey!!!":"The abyss is awake.... Wakey wakey!!!.mp3","Swallow my darkness!":"Swallow my darkness!.mp3","Ahh, The abyss… remembers you.":"Ahh, The abyss… remembers you.mp3"},this.audioBuffers={},this.monsterCooldown=0,this.heroCooldown=0,this._preloadAudio()}async _preloadAudio(){Object.entries(this.dialogueFiles).forEach(([e,t])=>{fetch(`/models/dialogues/${t}`).then(n=>n.arrayBuffer()).then(n=>{this.audioManager&&this.audioManager.ctx?this.audioManager.ctx.decodeAudioData(n).then(i=>{this.audioBuffers[t]=i,console.log(`✓ Pre-decoded dialogue: ${t}`)}).catch(i=>console.error(`Failed to decode ${t}:`,i)):this.audioBuffers[t]=n}).catch(n=>console.error(`Failed to preload ${t}:`,n))})}isMonsterSpeaking(){return this.monsterCooldown>0}speak(e,t,n="monster",i=3,s=2.5){if(n==="monster"&&this.monsterCooldown>0||n==="hero"&&this.heroCooldown>0)return!1;let o=i;const a=this.dialogueFiles[t];a&&this.audioBuffers[a]&&this.audioBuffers[a]instanceof AudioBuffer&&(o=this.audioBuffers[a].duration),n==="monster"?this.monsterCooldown=o+.1:this.heroCooldown=o+.5,this._playAudioForText(t,n);const l=document.createElement("div");return l.className=`speech-bubble ${n}`,l.textContent=t,this.layer.appendChild(l),this.activeDialogues.push({entity:e,el:l,text:t,timer:o,heightOffset:s}),!0}async _playAudioForText(e,t){if(!this.audioManager||!this.audioManager.ctx)return;const n=this.dialogueFiles[e];if(!n)return;let i=this.audioManager[`dialogue_${n}`];if(!i&&this.audioBuffers[n])if(this.audioBuffers[n]instanceof AudioBuffer)i=this.audioBuffers[n],this.audioManager[`dialogue_${n}`]=i;else try{const a=this.audioBuffers[n].slice(0);i=await this.audioManager.ctx.decodeAudioData(a),this.audioManager[`dialogue_${n}`]=i}catch(a){console.warn(`Decode failed for ${n}`,a);return}if(!i||!this.audioManager.masterGain)return;const s=this.audioManager.ctx.createBufferSource();s.buffer=i;const o=this.audioManager.ctx.createGain();o.gain.value=t==="monster"?1:.8,s.connect(o),o.connect(this.audioManager.masterGain),s.start()}update(e){this.monsterCooldown>0&&(this.monsterCooldown-=e),this.heroCooldown>0&&(this.heroCooldown-=e);const t=window.innerWidth/2,n=window.innerHeight/2;for(let i=this.activeDialogues.length-1;i>=0;i--){const s=this.activeDialogues[i];if(s.timer-=e,s.timer<=0){s.el.style.opacity="0",s.el.style.transform=`${s.el.style.transform} scale(0.8)`,setTimeout(()=>s.el.remove(),200),this.activeDialogues.splice(i,1);continue}if(s.entity&&s.entity.position){let a=1.2-(this.camera.position.distanceTo(s.entity.position)-20)/80*.7;a=Math.max(.4,Math.min(1.2,a));const l=s.entity.position.clone();if(l.y+=s.heightOffset,l.project(this.camera),l.z>1)s.el.style.display="none";else{s.el.style.display="block";const h=l.x*t+t,u=-(l.y*n)+n,c=Math.sin(s.timer*4)*5;s.el.style.left=`${h}px`,s.el.style.top=`${u+c}px`,s.el.style.transform=`translate(-50%, -100%) scale(${a})`}}}}}const bv=20,wv=15,No=13.5;class Ev{constructor(e){this.scene=e,this.blobs=[],this.poisonAreas=[],this._blobGeo=new en(.8,8,6),this._blobMat=new lt({color:6750003,emissive:2375706,roughness:.2,metalness:.1});const n=new $h().load("/textures/toxic_splash.png");this._poisonMat=new vt({uniforms:{tDiffuse:{value:n},opacity:{value:1}},vertexShader:`
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
      `,transparent:!0,depthWrite:!1});for(let i=0;i<bv;i++){const s=new be(this._blobGeo,this._blobMat);s.visible=!1,s.castShadow=!0,this.scene.add(s),this.blobs.push({mesh:s,velocity:new E,active:!1,damage:0,tickDamage:0});const o=new Ot(No*2,No*2,12,12);o.rotateX(-Math.PI/2);const a=new be(o,this._poisonMat);a.visible=!1,this.scene.add(a),this.poisonAreas.push({mesh:a,active:!1,timer:0,tickDamage:0,tickTimer:0})}}throwBlob(e,t,n,i){const s=this.blobs.find(c=>!c.active);if(!s)return;s.active=!0,s.mesh.visible=!0,s.mesh.position.copy(e),s.damage=n,s.tickDamage=i;const o=new E().subVectors(t,e),l=o.length()/20;o.normalize(),s.velocity.x=o.x*20,s.velocity.z=o.z*20;const u=(t.y-e.y+.5*30*l*l)/l;s.velocity.y=u}_spawnPoisonArea(e,t,n=1){const i=this.poisonAreas.find(s=>!s.active);i&&(i.active=!0,i.mesh.visible=!0,i.mesh.position.copy(e),i.mesh.scale.set(.1,1,.1),i.targetScale=n,i.timer=wv,i.tickDamage=t,i.tickTimer=0)}update(e,t,n){const i=[];for(const a of this.blobs){if(!a.active)continue;if(a.velocity.y-=30*e,a.mesh.position.addScaledVector(a.velocity,e),a.mesh.rotation.x+=e*5,a.mesh.rotation.y+=e*3,n&&n.loaded&&a.mesh.position.distanceTo(n.position)<4){i.push({damage:a.damage}),this._spawnPoisonArea(a.mesh.position,a.tickDamage),a.active=!1,a.mesh.visible=!1;continue}const l=t.getTerrainHeight(a.mesh.position.x,a.mesh.position.z);a.mesh.position.y<=l&&(a.mesh.position.y=l,this._spawnPoisonArea(a.mesh.position,a.tickDamage),a.active=!1,a.mesh.visible=!1)}let o=0;for(const a of this.poisonAreas){if(!a.active)continue;if(a.timer-=e,a.timer<=0){a.active=!1,a.mesh.visible=!1;continue}const l=a.targetScale||1;a.mesh.scale.x<l&&(a.mesh.scale.x=Math.min(l,a.mesh.scale.x+e*5*l),a.mesh.scale.z=a.mesh.scale.x);const h=.9;a.mesh.material.uniforms&&(a.mesh.material.uniforms.opacity.value=h);const u=a.mesh.geometry.attributes.position,c=a.mesh.scale.x,d=a.mesh.position.x,f=a.mesh.position.z,g=a.mesh.position.y;for(let _=0;_<u.count;_++){const m=u.getX(_),p=u.getZ(_),v=d+m*c,M=f+p*c,x=t.getTerrainHeight(v,M);u.setY(_,(x-g)/c+.1)}if(u.needsUpdate=!0,n&&n.loaded&&a.mesh.scale.x>l*.5){const _=Math.pow(n.position.x-a.mesh.position.x,2)+Math.pow(n.position.z-a.mesh.position.z,2),m=No*a.mesh.scale.x;_<m*m&&(a.tickTimer-=e,a.tickTimer<=0&&(o+=a.tickDamage,a.tickTimer=.5))}}return o>0&&i.push({damage:o}),i}}const Uo=["pistol","shotgun","charger"],Fo={pistol:"Pistol",shotgun:"Shotgun",charger:"Charger"};class Av{constructor(){this.isActive=!1,this._overlay=null,this._resolve=null,this._wavesCompleted=0}onWaveComplete(){return this._wavesCompleted++,this._wavesCompleted%2===0}show(e,t,n){return this.isActive=!0,this.crab=e,this.weapons=t,this.burrowManager=n,this._buildUI(),new Promise(i=>{this._resolve=i})}_buildUI(){this._overlay&&this._overlay.remove();const e=document.createElement("div");e.className="shop-overlay",e.innerHTML=`
      <div class="shop-panel">
        <div class="shop-header">
          <div class="shop-title">UPGRADE SHOP</div>
          <div class="shop-coins">Coins: <span id="shop-coin-count">${this.crab.coins}</span></div>
        </div>
        <div class="shop-grid" id="shop-cards"></div>
        <button class="shop-done-btn" id="shop-done-btn">DONE</button>
      </div>
    `,document.body.appendChild(e),this._overlay=e,this._renderCards(),e.querySelector("#shop-done-btn").addEventListener("click",()=>{this._close()})}_renderCards(){const e=this._overlay.querySelector("#shop-cards");e.innerHTML="";const t=this.crab,n=[],i=t.weaponType,s=t.weaponLevels[i]||1,o=s>=10,a=s*50;n.push({id:"weapon_upgrade",title:`Upgrade ${Fo[i]}`,icon:"⬆️",levelText:o?"MAX":`Lv.${s} → Lv.${s+1}`,desc:o?"Maximum power reached":"+Damage, +Crit Chance",cost:o?0:a,color:"#00ddff",canBuy:!o&&t.coins>=a,action:()=>{t.coins-=a,t.weaponLevels[i]++,this.weapons.setWeapon(i,t.weaponLevels[i]),this._playBuySound()}});const l=Uo.indexOf(i),h=Uo[(l+1)%Uo.length],u=20;n.push({id:"switch_weapon",title:`Switch to ${Fo[h]}`,icon:"🔄",levelText:`Currently Lv.${t.weaponLevels[h]||1}`,desc:"Change weapon track completely",cost:u,color:"#ff6b35",canBuy:t.coins>=u,action:()=>{t.coins-=u,t.weaponType=h,this.weapons.setWeapon(h,t.weaponLevels[h]||1),this._playBuySound()}});const c=t.utilityLevels.maxHealth||1,d=c>=10,f=c*30;n.push({id:"max_health",title:"Thick Shell",icon:"❤️",levelText:d?"MAX":`Lv.${c} → Lv.${c+1}`,desc:"+50 Max HP & Full Heal",cost:d?0:f,color:"#44ff88",canBuy:!d&&t.coins>=f,action:()=>{t.coins-=f,t.utilityLevels.maxHealth++,t.maxHealth+=50,t.health=t.maxHealth,this._playBuySound()}});const g=t.utilityLevels.waterCapacity||1,_=g>=10,m=g*30;n.push({id:"water_cap",title:"Deep Reservoir",icon:"💧",levelText:_?"MAX":`Lv.${g} → Lv.${g+1}`,desc:"+50 Ammo Capacity",cost:_?0:m,color:"#44ddff",canBuy:!_&&t.coins>=m,action:()=>{t.coins-=m,t.utilityLevels.waterCapacity++,t.maxAmmo+=50,t.currentAmmo=t.maxAmmo,this._playBuySound()}});const p=t.utilityLevels.burrowStrength||1,v=p>=10,M=p*40;n.push({id:"burrow_hp",title:"Fortified Burrow",icon:"🏰",levelText:v?"MAX":`Lv.${p} → Lv.${p+1}`,desc:"+200 Burrow Max HP & Heal",cost:v?0:M,color:"#ffdd44",canBuy:!v&&t.coins>=M,action:()=>{t.coins-=M,t.utilityLevels.burrowStrength++,this.burrowManager&&(this.burrowManager.maxHealth+=200,this.burrowManager.health+=200),this._playBuySound()}});const x=t.utilityLevels.minionCapacity||1,C=x>=5,w=x*50;n.push({id:"minion_cap",title:"Crab Army",icon:"🦀",levelText:C?"MAX":`Lv.${x} → Lv.${x+1}`,desc:"+1 Minion Capacity",cost:C?0:w,color:"#ff88aa",canBuy:!C&&t.coins>=w,action:()=>{t.coins-=w,t.utilityLevels.minionCapacity++,this.burrowManager&&(this.burrowManager.maxMinions=(this.burrowManager.maxMinions||0)+1),this._playBuySound()}}),n.forEach(A=>{const L=document.createElement("div");L.className="shop-card"+(A.canBuy?"":" disabled"),L.style.setProperty("--card-color",A.color);let b="";A.cost===0?b='<div class="shop-cost">MAX LEVEL</div>':b=`<div class="shop-cost">🪙 ${A.cost}</div>`,L.innerHTML=`
        <div class="shop-icon">${A.icon}</div>
        <div class="shop-card-title">${A.title}</div>
        <div class="shop-level">${A.levelText}</div>
        <div class="shop-desc">${A.desc}</div>
        ${b}
      `,A.canBuy&&L.addEventListener("click",()=>{A.action(),this._updateHUD(),this._renderCards()}),e.appendChild(L)})}_updateHUD(){const e=this._overlay.querySelector("#shop-coin-count");e&&(e.textContent=this.crab.coins);const t=document.getElementById("coin-count");t&&(t.textContent=this.crab.coins);const n=document.getElementById("gun-tier");n&&(n.textContent=`${Fo[this.crab.weaponType]} Lv.${this.crab.weaponLevels[this.crab.weaponType]}`)}_playBuySound(){}_close(){this.isActive=!1,this._overlay&&(this._overlay.style.animation="upgradeOverlayOut 0.3s forwards",setTimeout(()=>{this._overlay&&(this._overlay.remove(),this._overlay=null)},300)),this._resolve&&(this._resolve(),this._resolve=null)}}let Ct,ki,hi,Vt,me,Rn,Pn,Lt,ws,ui,Ln,Bo,Oo,zo=0,Tr=0;const Zc=document.getElementById("fps-counter");let fn="MENU";document.addEventListener("DOMContentLoaded",()=>{const r=document.getElementById("game-canvas");if(!r){console.error("Canvas not found");return}Ct=new C_(r),ki=new R_,Rn=new pv,hi=new P_(Ct.camera,ki),Vt=new dv(Ct.scene),Vt.sand&&hi.addCollisionObject(Vt.sand),me=new fv(Ct.scene,Vt,ki,hi),Pn=new Tv(Ct.camera,Rn),me.dialogue=Pn,Lt=new mv(Ct.scene,Rn),ws=new yv(Ct.scene),ui=new Mv(Ct.scene,Vt,Rn,Pn),ui.crab=me,Ln=new Sv(Ct.scene,Vt,Rn),Ln.dialogue=Pn,Ln.crab=me,Bo=new Ev(Ct.scene),Oo=new Av;const e=document.getElementById("main-menu"),t=document.getElementById("how-to-play"),n=document.getElementById("ui-layer"),i=document.getElementById("btn-play"),s=document.getElementById("btn-how-to-play"),o=document.getElementById("btn-back"),a=()=>{Rn.init(),Rn.resume(),r.requestPointerLock()};i.addEventListener("click",a),s.addEventListener("click",()=>{e.classList.add("hidden"),t.classList.remove("hidden")}),o.addEventListener("click",()=>{t.classList.add("hidden"),e.classList.remove("hidden")}),document.addEventListener("pointerlockchange",()=>{document.pointerLockElement===r?(e.classList.add("hidden"),n.style.display="flex",setTimeout(()=>{fn="PLAYING",me&&me.loaded&&me.dialogue&&!me._hasSpokenIntro&&(me._hasSpokenIntro=!0,setTimeout(()=>{me.dialogue.speak(me.model,"Time to clean up this beach.","hero",4)},500))},50)):(l=!1,fn="MENU",e.classList.remove("hidden"),n.style.display="none",i.textContent="RESUME GAME")}),document.addEventListener("pointerlockerror",()=>{console.warn("Pointer lock failed. Please wait a second and try again."),i.textContent="TRY AGAIN"}),document.addEventListener("contextmenu",c=>{fn==="PLAYING"&&c.preventDefault()});let l=!1;document.addEventListener("mousedown",c=>{fn==="PLAYING"&&(c.button===0?(l=!0,Lt.stats.isCharge&&Lt.startCharge()):c.button===2&&me.triggerSandBurst(ui,Rn))}),document.addEventListener("mouseup",c=>{if(c.button===0){if(l&&Lt.stats.isCharge&&me.loaded){const d=Lt.releaseCharge(me.position,hi.yaw,me.currentAmmo);if(d){me.currentAmmo-=d.ammoCost;for(const f of d.projectiles)ws.spawn(f.position,f.velocity,f.damage,f.tier,f.options)}else me.currentAmmo<Lt.stats.ammoPerShot&&Pn&&me.model&&(!me._lastLowWaterVoice||Date.now()-me._lastLowWaterVoice>5e3)&&(me._lastLowWaterVoice=Date.now(),Pn.speak(me.model,"Need more water... hold on.","hero",3))}l=!1}}),Ct.add({update:(c,d)=>{if(Lt.stats.isCharge&&(Lt._isCharging||Lt._isFiringHose)?(me.walkSpeed=10,me.runSpeed=10):(me.walkSpeed=25,me.runSpeed=45),me.update(c,d,fn==="PLAYING"),Vt.update(c,d),Vt.ocean&&Vt.ocean.material.uniforms.cameraPos&&Vt.ocean.material.uniforms.cameraPos.value.copy(Ct.camera.position),fn!=="PLAYING")return;if(me.loaded&&me.model&&Lt.update(c,me.position,hi.yaw),l&&document.pointerLockElement&&me.loaded){const p=hi.yaw,v=Lt.tryFire(me.position,p,me.currentAmmo);if(v){me.currentAmmo-=v.ammoCost;for(const M of v.projectiles)ws.spawn(M.position,M.velocity,M.damage,M.tier,M.options)}else me.currentAmmo<Lt.stats.ammoPerShot&&!Lt.stats.isCharge&&Pn&&me.model&&(!me._lastLowWaterVoice||Date.now()-me._lastLowWaterVoice>5e3)&&(me._lastLowWaterVoice=Date.now(),Pn.speak(me.model,"Need more water... hold on.","hero",3))}if(me.loaded&&me.model){const p=Lt.getHoseProjectiles(c,hi.yaw);if(p&&p.projectiles&&p.projectiles.length>0)for(const v of p.projectiles)ws.spawn(v.position,v.velocity,v.damage,v.tier,v.options)}const f=ws.update(c,ui.enemies);for(const p of f)if(ui.damageEnemy(p.enemy,p.damage),fn==="PLAYING"){const v=p.position.clone();v.project(Ct.camera);const M=(v.x*.5+.5)*window.innerWidth,x=(v.y*-.5+.5)*window.innerHeight;if(v.z<1){const C=document.createElement("div");C.textContent=Math.round(p.damage),C.style.position="fixed",C.style.left=`${M}px`,C.style.top=`${x}px`,C.style.pointerEvents="none",C.style.fontWeight="900",C.style.zIndex="20",C.style.transform="translate(-50%, -50%)",C.style.transition="all 0.5s ease-out",p.isCrit?(C.style.fontSize="28px",C.style.color="#ff3300",C.style.textShadow="0 0 10px #ffaa00, 2px 2px 0px #000",C.textContent=`${Math.round(p.damage)}!`):(C.style.fontSize="18px",C.style.color="#ffffff",C.style.textShadow="1px 1px 0px #000"),document.body.appendChild(C),setTimeout(()=>{C.style.top=`${x-50}px`,C.style.opacity="0",setTimeout(()=>C.remove(),500)},10)}}const g=Bo.update(c,Vt,me);for(const p of g)me.takeDamage(p.damage);const _=ui.update(c,d,me.position,Ct.camera,Ln,fn==="PLAYING",Bo);if(_.damageToPlayer>0&&me.takeDamage(_.damageToPlayer),Pn.update(c),Ln.update(c,d,ui),me.coins>0&&me.position.distanceTo(Ln.position)<Ln.depositRadius){const p=Ln.tryInteract(me.coins);if(p>0){me.coins-=p;const v=document.getElementById("coin-count");v&&(v.textContent=me.coins)}}if(_.coinsCollected>0&&me.addCoins(_.coinsCollected),_.healthCollected>0&&(me.health=Math.min(me.maxHealth,me.health+_.healthCollected)),_.waveJustCompleted&&Oo.onWaveComplete()&&(fn="UPGRADING",document.exitPointerLock(),l=!1,Oo.show(me,Lt,Ln).then(()=>{fn="PLAYING";const p=document.getElementById("game-canvas");p&&p.requestPointerLock()})),me.loaded&&me.model){const p=me.position,v=Vt.getTerrainHeight(p.x,p.z),M=ki.getMovementInput();Math.abs(p.y-v)<2&&M.magnitude>0&&Vt.stampFootprint(p)}const m=ki.getMovementInput();Rn.update(c,m.magnitude>0,ki.isSprinting)}}),window.addEventListener("resize",()=>Ct.resize());let h=performance.now();function u(c){requestAnimationFrame(u);const d=Math.min((c-h)/1e3,.1);h=c,Ct.render(d),zo++,Tr+=d,Tr>=1&&(Zc&&(Zc.textContent=`${Math.round(zo/Tr)} FPS`),zo=0,Tr=0)}requestAnimationFrame(u),console.log("🦀 Shell Shock: Crab Wave Shooter — running")});
