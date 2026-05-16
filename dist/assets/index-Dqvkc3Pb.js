(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const r of s.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&n(r)}).observe(document,{childList:!0,subtree:!0});function t(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(i){if(i.ep)return;i.ep=!0;const s=t(i);fetch(i.href,s)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Ha="170",mu=0,Tl=1,gu=2,lh=1,ch=2,Bn=3,Hn=0,Wt=1,vt=2,kn=0,ri=1,Ji=2,El=3,Al=4,_u=5,vi=100,vu=101,xu=102,yu=103,Mu=104,Su=200,wu=201,bu=202,Tu=203,qo=204,Yo=205,Eu=206,Au=207,Cu=208,Ru=209,Pu=210,Lu=211,Du=212,Iu=213,Nu=214,jo=0,Ko=1,$o=2,Qi=3,Zo=4,Jo=5,Qo=6,ea=7,hh=0,Uu=1,Bu=2,oi=0,uh=1,dh=2,fh=3,Va=4,Fu=5,ph=6,mh=7,Cl="attached",Ou="detached",gh=300,es=301,ts=302,ta=303,na=304,Xr=306,ns=1e3,ii=1001,Or=1002,Xt=1003,_h=1004,Ps=1005,Zt=1006,Lr=1007,On=1008,Vn=1009,vh=1010,xh=1011,Os=1012,Wa=1013,Mi=1014,dn=1015,Mn=1016,Xa=1017,qa=1018,is=1020,yh=35902,Mh=1021,Sh=1022,nn=1023,wh=1024,bh=1025,Ki=1026,ss=1027,Ya=1028,ja=1029,Th=1030,Ka=1031,$a=1033,Dr=33776,Ir=33777,Nr=33778,Ur=33779,ia=35840,sa=35841,ra=35842,oa=35843,aa=36196,la=37492,ca=37496,ha=37808,ua=37809,da=37810,fa=37811,pa=37812,ma=37813,ga=37814,_a=37815,va=37816,xa=37817,ya=37818,Ma=37819,Sa=37820,wa=37821,Br=36492,ba=36494,Ta=36495,Eh=36283,Ea=36284,Aa=36285,Ca=36286,zu=2200,ku=2201,Gu=2202,zs=2300,ks=2301,Qr=2302,Xi=2400,qi=2401,zr=2402,Za=2500,Hu=2501,Vu=0,Ah=1,Ra=2,Wu=3200,Xu=3201,Ch=0,qu=1,ni="",Dt="srgb",qt="srgb-linear",qr="linear",st="srgb",Ti=7680,Rl=519,Yu=512,ju=513,Ku=514,Rh=515,$u=516,Zu=517,Ju=518,Qu=519,Pa=35044,Pl="300 es",zn=2e3,kr=2001;class wi{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const i=this._listeners[e];if(i!==void 0){const s=i.indexOf(t);s!==-1&&i.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let s=0,r=i.length;s<r;s++)i[s].call(this,e);e.target=null}}}const Ut=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Ll=1234567;const Is=Math.PI/180,rs=180/Math.PI;function pn(){const o=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Ut[o&255]+Ut[o>>8&255]+Ut[o>>16&255]+Ut[o>>24&255]+"-"+Ut[e&255]+Ut[e>>8&255]+"-"+Ut[e>>16&15|64]+Ut[e>>24&255]+"-"+Ut[t&63|128]+Ut[t>>8&255]+"-"+Ut[t>>16&255]+Ut[t>>24&255]+Ut[n&255]+Ut[n>>8&255]+Ut[n>>16&255]+Ut[n>>24&255]).toLowerCase()}function bt(o,e,t){return Math.max(e,Math.min(t,o))}function Ja(o,e){return(o%e+e)%e}function ed(o,e,t,n,i){return n+(o-e)*(i-n)/(t-e)}function td(o,e,t){return o!==e?(t-o)/(e-o):0}function Ns(o,e,t){return(1-t)*o+t*e}function nd(o,e,t,n){return Ns(o,e,1-Math.exp(-t*n))}function id(o,e=1){return e-Math.abs(Ja(o,e*2)-e)}function sd(o,e,t){return o<=e?0:o>=t?1:(o=(o-e)/(t-e),o*o*(3-2*o))}function rd(o,e,t){return o<=e?0:o>=t?1:(o=(o-e)/(t-e),o*o*o*(o*(o*6-15)+10))}function od(o,e){return o+Math.floor(Math.random()*(e-o+1))}function ad(o,e){return o+Math.random()*(e-o)}function ld(o){return o*(.5-Math.random())}function cd(o){o!==void 0&&(Ll=o);let e=Ll+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function hd(o){return o*Is}function ud(o){return o*rs}function dd(o){return(o&o-1)===0&&o!==0}function fd(o){return Math.pow(2,Math.ceil(Math.log(o)/Math.LN2))}function pd(o){return Math.pow(2,Math.floor(Math.log(o)/Math.LN2))}function md(o,e,t,n,i){const s=Math.cos,r=Math.sin,a=s(t/2),l=r(t/2),c=s((e+n)/2),u=r((e+n)/2),d=s((e-n)/2),h=r((e-n)/2),f=s((n-e)/2),g=r((n-e)/2);switch(i){case"XYX":o.set(a*u,l*d,l*h,a*c);break;case"YZY":o.set(l*h,a*u,l*d,a*c);break;case"ZXZ":o.set(l*d,l*h,a*u,a*c);break;case"XZX":o.set(a*u,l*g,l*f,a*c);break;case"YXY":o.set(l*f,a*u,l*g,a*c);break;case"ZYZ":o.set(l*g,l*f,a*u,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function un(o,e){switch(e.constructor){case Float32Array:return o;case Uint32Array:return o/4294967295;case Uint16Array:return o/65535;case Uint8Array:return o/255;case Int32Array:return Math.max(o/2147483647,-1);case Int16Array:return Math.max(o/32767,-1);case Int8Array:return Math.max(o/127,-1);default:throw new Error("Invalid component type.")}}function rt(o,e){switch(e.constructor){case Float32Array:return o;case Uint32Array:return Math.round(o*4294967295);case Uint16Array:return Math.round(o*65535);case Uint8Array:return Math.round(o*255);case Int32Array:return Math.round(o*2147483647);case Int16Array:return Math.round(o*32767);case Int8Array:return Math.round(o*127);default:throw new Error("Invalid component type.")}}const gd={DEG2RAD:Is,RAD2DEG:rs,generateUUID:pn,clamp:bt,euclideanModulo:Ja,mapLinear:ed,inverseLerp:td,lerp:Ns,damp:nd,pingpong:id,smoothstep:sd,smootherstep:rd,randInt:od,randFloat:ad,randFloatSpread:ld,seededRandom:cd,degToRad:hd,radToDeg:ud,isPowerOfTwo:dd,ceilPowerOfTwo:fd,floorPowerOfTwo:pd,setQuaternionFromProperEuler:md,normalize:rt,denormalize:un};class ae{constructor(e=0,t=0){ae.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(bt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),s=this.x-e.x,r=this.y-e.y;return this.x=s*n-r*i+e.x,this.y=s*i+r*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class ke{constructor(e,t,n,i,s,r,a,l,c){ke.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,r,a,l,c)}set(e,t,n,i,s,r,a,l,c){const u=this.elements;return u[0]=e,u[1]=i,u[2]=a,u[3]=t,u[4]=s,u[5]=l,u[6]=n,u[7]=r,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,r=n[0],a=n[3],l=n[6],c=n[1],u=n[4],d=n[7],h=n[2],f=n[5],g=n[8],_=i[0],m=i[3],p=i[6],v=i[1],y=i[4],x=i[7],P=i[2],T=i[5],A=i[8];return s[0]=r*_+a*v+l*P,s[3]=r*m+a*y+l*T,s[6]=r*p+a*x+l*A,s[1]=c*_+u*v+d*P,s[4]=c*m+u*y+d*T,s[7]=c*p+u*x+d*A,s[2]=h*_+f*v+g*P,s[5]=h*m+f*y+g*T,s[8]=h*p+f*x+g*A,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],r=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return t*r*u-t*a*c-n*s*u+n*a*l+i*s*c-i*r*l}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],r=e[4],a=e[5],l=e[6],c=e[7],u=e[8],d=u*r-a*c,h=a*l-u*s,f=c*s-r*l,g=t*d+n*h+i*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return e[0]=d*_,e[1]=(i*c-u*n)*_,e[2]=(a*n-i*r)*_,e[3]=h*_,e[4]=(u*t-i*l)*_,e[5]=(i*s-a*t)*_,e[6]=f*_,e[7]=(n*l-c*t)*_,e[8]=(r*t-n*s)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,s,r,a){const l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*r+c*a)+r+e,-i*c,i*l,-i*(-c*r+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(eo.makeScale(e,t)),this}rotate(e){return this.premultiply(eo.makeRotation(-e)),this}translate(e,t){return this.premultiply(eo.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const eo=new ke;function Ph(o){for(let e=o.length-1;e>=0;--e)if(o[e]>=65535)return!0;return!1}function Gs(o){return document.createElementNS("http://www.w3.org/1999/xhtml",o)}function _d(){const o=Gs("canvas");return o.style.display="block",o}const Dl={};function Ls(o){o in Dl||(Dl[o]=!0,console.warn(o))}function vd(o,e,t){return new Promise(function(n,i){function s(){switch(o.clientWaitSync(e,o.SYNC_FLUSH_COMMANDS_BIT,0)){case o.WAIT_FAILED:i();break;case o.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:n()}}setTimeout(s,t)})}function xd(o){const e=o.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function yd(o){const e=o.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const qe={enabled:!0,workingColorSpace:qt,spaces:{},convert:function(o,e,t){return this.enabled===!1||e===t||!e||!t||(this.spaces[e].transfer===st&&(o.r=Gn(o.r),o.g=Gn(o.g),o.b=Gn(o.b)),this.spaces[e].primaries!==this.spaces[t].primaries&&(o.applyMatrix3(this.spaces[e].toXYZ),o.applyMatrix3(this.spaces[t].fromXYZ)),this.spaces[t].transfer===st&&(o.r=$i(o.r),o.g=$i(o.g),o.b=$i(o.b))),o},fromWorkingColorSpace:function(o,e){return this.convert(o,this.workingColorSpace,e)},toWorkingColorSpace:function(o,e){return this.convert(o,e,this.workingColorSpace)},getPrimaries:function(o){return this.spaces[o].primaries},getTransfer:function(o){return o===ni?qr:this.spaces[o].transfer},getLuminanceCoefficients:function(o,e=this.workingColorSpace){return o.fromArray(this.spaces[e].luminanceCoefficients)},define:function(o){Object.assign(this.spaces,o)},_getMatrix:function(o,e,t){return o.copy(this.spaces[e].toXYZ).multiply(this.spaces[t].fromXYZ)},_getDrawingBufferColorSpace:function(o){return this.spaces[o].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(o=this.workingColorSpace){return this.spaces[o].workingColorSpaceConfig.unpackColorSpace}};function Gn(o){return o<.04045?o*.0773993808:Math.pow(o*.9478672986+.0521327014,2.4)}function $i(o){return o<.0031308?o*12.92:1.055*Math.pow(o,.41666)-.055}const Il=[.64,.33,.3,.6,.15,.06],Nl=[.2126,.7152,.0722],Ul=[.3127,.329],Bl=new ke().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Fl=new ke().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);qe.define({[qt]:{primaries:Il,whitePoint:Ul,transfer:qr,toXYZ:Bl,fromXYZ:Fl,luminanceCoefficients:Nl,workingColorSpaceConfig:{unpackColorSpace:Dt},outputColorSpaceConfig:{drawingBufferColorSpace:Dt}},[Dt]:{primaries:Il,whitePoint:Ul,transfer:st,toXYZ:Bl,fromXYZ:Fl,luminanceCoefficients:Nl,outputColorSpaceConfig:{drawingBufferColorSpace:Dt}}});let Ei;class Md{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Ei===void 0&&(Ei=Gs("canvas")),Ei.width=e.width,Ei.height=e.height;const n=Ei.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=Ei}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Gs("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),s=i.data;for(let r=0;r<s.length;r++)s[r]=Gn(s[r]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Gn(t[n]/255)*255):t[n]=Gn(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Sd=0;class Lh{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Sd++}),this.uuid=pn(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let r=0,a=i.length;r<a;r++)i[r].isDataTexture?s.push(to(i[r].image)):s.push(to(i[r]))}else s=to(i);n.url=s}return t||(e.images[this.uuid]=n),n}}function to(o){return typeof HTMLImageElement<"u"&&o instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&o instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&o instanceof ImageBitmap?Md.getDataURL(o):o.data?{data:Array.from(o.data),width:o.width,height:o.height,type:o.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let wd=0;class Et extends wi{constructor(e=Et.DEFAULT_IMAGE,t=Et.DEFAULT_MAPPING,n=ii,i=ii,s=Zt,r=On,a=nn,l=Vn,c=Et.DEFAULT_ANISOTROPY,u=ni){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:wd++}),this.uuid=pn(),this.name="",this.source=new Lh(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=r,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new ae(0,0),this.repeat=new ae(1,1),this.center=new ae(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ke,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==gh)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case ns:e.x=e.x-Math.floor(e.x);break;case ii:e.x=e.x<0?0:1;break;case Or:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case ns:e.y=e.y-Math.floor(e.y);break;case ii:e.y=e.y<0?0:1;break;case Or:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Et.DEFAULT_IMAGE=null;Et.DEFAULT_MAPPING=gh;Et.DEFAULT_ANISOTROPY=1;class Je{constructor(e=0,t=0,n=0,i=1){Je.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=this.w,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*i+r[12]*s,this.y=r[1]*t+r[5]*n+r[9]*i+r[13]*s,this.z=r[2]*t+r[6]*n+r[10]*i+r[14]*s,this.w=r[3]*t+r[7]*n+r[11]*i+r[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,s;const l=e.elements,c=l[0],u=l[4],d=l[8],h=l[1],f=l[5],g=l[9],_=l[2],m=l[6],p=l[10];if(Math.abs(u-h)<.01&&Math.abs(d-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+h)<.1&&Math.abs(d+_)<.1&&Math.abs(g+m)<.1&&Math.abs(c+f+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const y=(c+1)/2,x=(f+1)/2,P=(p+1)/2,T=(u+h)/4,A=(d+_)/4,D=(g+m)/4;return y>x&&y>P?y<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(y),i=T/n,s=A/n):x>P?x<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(x),n=T/i,s=D/i):P<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(P),n=A/s,i=D/s),this.set(n,i,s,t),this}let v=Math.sqrt((m-g)*(m-g)+(d-_)*(d-_)+(h-u)*(h-u));return Math.abs(v)<.001&&(v=1),this.x=(m-g)/v,this.y=(d-_)/v,this.z=(h-u)/v,this.w=Math.acos((c+f+p-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class bd extends wi{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Je(0,0,e,t),this.scissorTest=!1,this.viewport=new Je(0,0,e,t);const i={width:e,height:t,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Zt,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const s=new Et(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);s.flipY=!1,s.generateMipmaps=n.generateMipmaps,s.internalFormat=n.internalFormat,this.textures=[];const r=n.count;for(let a=0;a<r;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let i=0,s=this.textures.length;i<s;i++)this.textures[i].image.width=e,this.textures[i].image.height=t,this.textures[i].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,i=e.textures.length;n<i;n++)this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Lh(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class sn extends bd{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class Dh extends Et{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Xt,this.minFilter=Xt,this.wrapR=ii,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Td extends Et{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Xt,this.minFilter=Xt,this.wrapR=ii,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class rn{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,s,r,a){let l=n[i+0],c=n[i+1],u=n[i+2],d=n[i+3];const h=s[r+0],f=s[r+1],g=s[r+2],_=s[r+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=d;return}if(a===1){e[t+0]=h,e[t+1]=f,e[t+2]=g,e[t+3]=_;return}if(d!==_||l!==h||c!==f||u!==g){let m=1-a;const p=l*h+c*f+u*g+d*_,v=p>=0?1:-1,y=1-p*p;if(y>Number.EPSILON){const P=Math.sqrt(y),T=Math.atan2(P,p*v);m=Math.sin(m*T)/P,a=Math.sin(a*T)/P}const x=a*v;if(l=l*m+h*x,c=c*m+f*x,u=u*m+g*x,d=d*m+_*x,m===1-a){const P=1/Math.sqrt(l*l+c*c+u*u+d*d);l*=P,c*=P,u*=P,d*=P}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=d}static multiplyQuaternionsFlat(e,t,n,i,s,r){const a=n[i],l=n[i+1],c=n[i+2],u=n[i+3],d=s[r],h=s[r+1],f=s[r+2],g=s[r+3];return e[t]=a*g+u*d+l*f-c*h,e[t+1]=l*g+u*h+c*d-a*f,e[t+2]=c*g+u*f+a*h-l*d,e[t+3]=u*g-a*d-l*h-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,i=e._y,s=e._z,r=e._order,a=Math.cos,l=Math.sin,c=a(n/2),u=a(i/2),d=a(s/2),h=l(n/2),f=l(i/2),g=l(s/2);switch(r){case"XYZ":this._x=h*u*d+c*f*g,this._y=c*f*d-h*u*g,this._z=c*u*g+h*f*d,this._w=c*u*d-h*f*g;break;case"YXZ":this._x=h*u*d+c*f*g,this._y=c*f*d-h*u*g,this._z=c*u*g-h*f*d,this._w=c*u*d+h*f*g;break;case"ZXY":this._x=h*u*d-c*f*g,this._y=c*f*d+h*u*g,this._z=c*u*g+h*f*d,this._w=c*u*d-h*f*g;break;case"ZYX":this._x=h*u*d-c*f*g,this._y=c*f*d+h*u*g,this._z=c*u*g-h*f*d,this._w=c*u*d+h*f*g;break;case"YZX":this._x=h*u*d+c*f*g,this._y=c*f*d+h*u*g,this._z=c*u*g-h*f*d,this._w=c*u*d-h*f*g;break;case"XZY":this._x=h*u*d-c*f*g,this._y=c*f*d-h*u*g,this._z=c*u*g+h*f*d,this._w=c*u*d+h*f*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+r)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],s=t[8],r=t[1],a=t[5],l=t[9],c=t[2],u=t[6],d=t[10],h=n+a+d;if(h>0){const f=.5/Math.sqrt(h+1);this._w=.25/f,this._x=(u-l)*f,this._y=(s-c)*f,this._z=(r-i)*f}else if(n>a&&n>d){const f=2*Math.sqrt(1+n-a-d);this._w=(u-l)/f,this._x=.25*f,this._y=(i+r)/f,this._z=(s+c)/f}else if(a>d){const f=2*Math.sqrt(1+a-n-d);this._w=(s-c)/f,this._x=(i+r)/f,this._y=.25*f,this._z=(l+u)/f}else{const f=2*Math.sqrt(1+d-n-a);this._w=(r-i)/f,this._x=(s+c)/f,this._y=(l+u)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(bt(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,s=e._z,r=e._w,a=t._x,l=t._y,c=t._z,u=t._w;return this._x=n*u+r*a+i*c-s*l,this._y=i*u+r*l+s*a-n*c,this._z=s*u+r*c+n*l-i*a,this._w=r*u-n*a-i*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,i=this._y,s=this._z,r=this._w;let a=r*e._w+n*e._x+i*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=r,this._x=n,this._y=i,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const f=1-t;return this._w=f*r+t*this._w,this._x=f*n+t*this._x,this._y=f*i+t*this._y,this._z=f*s+t*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,a),d=Math.sin((1-t)*u)/c,h=Math.sin(t*u)/c;return this._w=r*d+this._w*h,this._x=n*d+this._x*h,this._y=i*d+this._y*h,this._z=s*d+this._z*h,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(i*Math.sin(e),i*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class E{constructor(e=0,t=0,n=0){E.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Ol.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Ol.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*i,this.y=s[1]*t+s[4]*n+s[7]*i,this.z=s[2]*t+s[5]*n+s[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=e.elements,r=1/(s[3]*t+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*i+s[12])*r,this.y=(s[1]*t+s[5]*n+s[9]*i+s[13])*r,this.z=(s[2]*t+s[6]*n+s[10]*i+s[14])*r,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,s=e.x,r=e.y,a=e.z,l=e.w,c=2*(r*i-a*n),u=2*(a*t-s*i),d=2*(s*n-r*t);return this.x=t+l*c+r*d-a*u,this.y=n+l*u+a*c-s*d,this.z=i+l*d+s*u-r*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*i,this.y=s[1]*t+s[5]*n+s[9]*i,this.z=s[2]*t+s[6]*n+s[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,s=e.z,r=t.x,a=t.y,l=t.z;return this.x=i*l-s*a,this.y=s*r-n*l,this.z=n*a-i*r,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return no.copy(this).projectOnVector(e),this.sub(no)}reflect(e){return this.sub(no.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(bt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const no=new E,Ol=new rn;class It{constructor(e=new E(1/0,1/0,1/0),t=new E(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(ln.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(ln.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=ln.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let r=0,a=s.count;r<a;r++)e.isMesh===!0?e.getVertexPosition(r,ln):ln.fromBufferAttribute(s,r),ln.applyMatrix4(e.matrixWorld),this.expandByPoint(ln);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),$s.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),$s.copy(n.boundingBox)),$s.applyMatrix4(e.matrixWorld),this.union($s)}const i=e.children;for(let s=0,r=i.length;s<r;s++)this.expandByObject(i[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,ln),ln.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(vs),Zs.subVectors(this.max,vs),Ai.subVectors(e.a,vs),Ci.subVectors(e.b,vs),Ri.subVectors(e.c,vs),qn.subVectors(Ci,Ai),Yn.subVectors(Ri,Ci),li.subVectors(Ai,Ri);let t=[0,-qn.z,qn.y,0,-Yn.z,Yn.y,0,-li.z,li.y,qn.z,0,-qn.x,Yn.z,0,-Yn.x,li.z,0,-li.x,-qn.y,qn.x,0,-Yn.y,Yn.x,0,-li.y,li.x,0];return!io(t,Ai,Ci,Ri,Zs)||(t=[1,0,0,0,1,0,0,0,1],!io(t,Ai,Ci,Ri,Zs))?!1:(Js.crossVectors(qn,Yn),t=[Js.x,Js.y,Js.z],io(t,Ai,Ci,Ri,Zs))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,ln).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(ln).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Cn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Cn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Cn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Cn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Cn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Cn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Cn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Cn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Cn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Cn=[new E,new E,new E,new E,new E,new E,new E,new E],ln=new E,$s=new It,Ai=new E,Ci=new E,Ri=new E,qn=new E,Yn=new E,li=new E,vs=new E,Zs=new E,Js=new E,ci=new E;function io(o,e,t,n,i){for(let s=0,r=o.length-3;s<=r;s+=3){ci.fromArray(o,s);const a=i.x*Math.abs(ci.x)+i.y*Math.abs(ci.y)+i.z*Math.abs(ci.z),l=e.dot(ci),c=t.dot(ci),u=n.dot(ci);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const Ed=new It,xs=new E,so=new E;class Sn{constructor(e=new E,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):Ed.setFromPoints(e).getCenter(n);let i=0;for(let s=0,r=e.length;s<r;s++)i=Math.max(i,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;xs.subVectors(e,this.center);const t=xs.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(xs,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(so.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(xs.copy(e.center).add(so)),this.expandByPoint(xs.copy(e.center).sub(so))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Rn=new E,ro=new E,Qs=new E,jn=new E,oo=new E,er=new E,ao=new E;class Xs{constructor(e=new E,t=new E(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Rn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Rn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Rn.copy(this.origin).addScaledVector(this.direction,t),Rn.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){ro.copy(e).add(t).multiplyScalar(.5),Qs.copy(t).sub(e).normalize(),jn.copy(this.origin).sub(ro);const s=e.distanceTo(t)*.5,r=-this.direction.dot(Qs),a=jn.dot(this.direction),l=-jn.dot(Qs),c=jn.lengthSq(),u=Math.abs(1-r*r);let d,h,f,g;if(u>0)if(d=r*l-a,h=r*a-l,g=s*u,d>=0)if(h>=-g)if(h<=g){const _=1/u;d*=_,h*=_,f=d*(d+r*h+2*a)+h*(r*d+h+2*l)+c}else h=s,d=Math.max(0,-(r*h+a)),f=-d*d+h*(h+2*l)+c;else h=-s,d=Math.max(0,-(r*h+a)),f=-d*d+h*(h+2*l)+c;else h<=-g?(d=Math.max(0,-(-r*s+a)),h=d>0?-s:Math.min(Math.max(-s,-l),s),f=-d*d+h*(h+2*l)+c):h<=g?(d=0,h=Math.min(Math.max(-s,-l),s),f=h*(h+2*l)+c):(d=Math.max(0,-(r*s+a)),h=d>0?s:Math.min(Math.max(-s,-l),s),f=-d*d+h*(h+2*l)+c);else h=r>0?-s:s,d=Math.max(0,-(r*h+a)),f=-d*d+h*(h+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,d),i&&i.copy(ro).addScaledVector(Qs,h),f}intersectSphere(e,t){Rn.subVectors(e.center,this.origin);const n=Rn.dot(this.direction),i=Rn.dot(Rn)-n*n,s=e.radius*e.radius;if(i>s)return null;const r=Math.sqrt(s-i),a=n-r,l=n+r;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,s,r,a,l;const c=1/this.direction.x,u=1/this.direction.y,d=1/this.direction.z,h=this.origin;return c>=0?(n=(e.min.x-h.x)*c,i=(e.max.x-h.x)*c):(n=(e.max.x-h.x)*c,i=(e.min.x-h.x)*c),u>=0?(s=(e.min.y-h.y)*u,r=(e.max.y-h.y)*u):(s=(e.max.y-h.y)*u,r=(e.min.y-h.y)*u),n>r||s>i||((s>n||isNaN(n))&&(n=s),(r<i||isNaN(i))&&(i=r),d>=0?(a=(e.min.z-h.z)*d,l=(e.max.z-h.z)*d):(a=(e.max.z-h.z)*d,l=(e.min.z-h.z)*d),n>l||a>i)||((a>n||n!==n)&&(n=a),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,Rn)!==null}intersectTriangle(e,t,n,i,s){oo.subVectors(t,e),er.subVectors(n,e),ao.crossVectors(oo,er);let r=this.direction.dot(ao),a;if(r>0){if(i)return null;a=1}else if(r<0)a=-1,r=-r;else return null;jn.subVectors(this.origin,e);const l=a*this.direction.dot(er.crossVectors(jn,er));if(l<0)return null;const c=a*this.direction.dot(oo.cross(jn));if(c<0||l+c>r)return null;const u=-a*jn.dot(ao);return u<0?null:this.at(u/r,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Ie{constructor(e,t,n,i,s,r,a,l,c,u,d,h,f,g,_,m){Ie.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,r,a,l,c,u,d,h,f,g,_,m)}set(e,t,n,i,s,r,a,l,c,u,d,h,f,g,_,m){const p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=i,p[1]=s,p[5]=r,p[9]=a,p[13]=l,p[2]=c,p[6]=u,p[10]=d,p[14]=h,p[3]=f,p[7]=g,p[11]=_,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ie().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,i=1/Pi.setFromMatrixColumn(e,0).length(),s=1/Pi.setFromMatrixColumn(e,1).length(),r=1/Pi.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*r,t[9]=n[9]*r,t[10]=n[10]*r,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,s=e.z,r=Math.cos(n),a=Math.sin(n),l=Math.cos(i),c=Math.sin(i),u=Math.cos(s),d=Math.sin(s);if(e.order==="XYZ"){const h=r*u,f=r*d,g=a*u,_=a*d;t[0]=l*u,t[4]=-l*d,t[8]=c,t[1]=f+g*c,t[5]=h-_*c,t[9]=-a*l,t[2]=_-h*c,t[6]=g+f*c,t[10]=r*l}else if(e.order==="YXZ"){const h=l*u,f=l*d,g=c*u,_=c*d;t[0]=h+_*a,t[4]=g*a-f,t[8]=r*c,t[1]=r*d,t[5]=r*u,t[9]=-a,t[2]=f*a-g,t[6]=_+h*a,t[10]=r*l}else if(e.order==="ZXY"){const h=l*u,f=l*d,g=c*u,_=c*d;t[0]=h-_*a,t[4]=-r*d,t[8]=g+f*a,t[1]=f+g*a,t[5]=r*u,t[9]=_-h*a,t[2]=-r*c,t[6]=a,t[10]=r*l}else if(e.order==="ZYX"){const h=r*u,f=r*d,g=a*u,_=a*d;t[0]=l*u,t[4]=g*c-f,t[8]=h*c+_,t[1]=l*d,t[5]=_*c+h,t[9]=f*c-g,t[2]=-c,t[6]=a*l,t[10]=r*l}else if(e.order==="YZX"){const h=r*l,f=r*c,g=a*l,_=a*c;t[0]=l*u,t[4]=_-h*d,t[8]=g*d+f,t[1]=d,t[5]=r*u,t[9]=-a*u,t[2]=-c*u,t[6]=f*d+g,t[10]=h-_*d}else if(e.order==="XZY"){const h=r*l,f=r*c,g=a*l,_=a*c;t[0]=l*u,t[4]=-d,t[8]=c*u,t[1]=h*d+_,t[5]=r*u,t[9]=f*d-g,t[2]=g*d-f,t[6]=a*u,t[10]=_*d+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Ad,e,Cd)}lookAt(e,t,n){const i=this.elements;return Kt.subVectors(e,t),Kt.lengthSq()===0&&(Kt.z=1),Kt.normalize(),Kn.crossVectors(n,Kt),Kn.lengthSq()===0&&(Math.abs(n.z)===1?Kt.x+=1e-4:Kt.z+=1e-4,Kt.normalize(),Kn.crossVectors(n,Kt)),Kn.normalize(),tr.crossVectors(Kt,Kn),i[0]=Kn.x,i[4]=tr.x,i[8]=Kt.x,i[1]=Kn.y,i[5]=tr.y,i[9]=Kt.y,i[2]=Kn.z,i[6]=tr.z,i[10]=Kt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,r=n[0],a=n[4],l=n[8],c=n[12],u=n[1],d=n[5],h=n[9],f=n[13],g=n[2],_=n[6],m=n[10],p=n[14],v=n[3],y=n[7],x=n[11],P=n[15],T=i[0],A=i[4],D=i[8],w=i[12],M=i[1],I=i[5],L=i[9],N=i[13],k=i[2],K=i[6],H=i[10],te=i[14],q=i[3],re=i[7],de=i[11],ve=i[15];return s[0]=r*T+a*M+l*k+c*q,s[4]=r*A+a*I+l*K+c*re,s[8]=r*D+a*L+l*H+c*de,s[12]=r*w+a*N+l*te+c*ve,s[1]=u*T+d*M+h*k+f*q,s[5]=u*A+d*I+h*K+f*re,s[9]=u*D+d*L+h*H+f*de,s[13]=u*w+d*N+h*te+f*ve,s[2]=g*T+_*M+m*k+p*q,s[6]=g*A+_*I+m*K+p*re,s[10]=g*D+_*L+m*H+p*de,s[14]=g*w+_*N+m*te+p*ve,s[3]=v*T+y*M+x*k+P*q,s[7]=v*A+y*I+x*K+P*re,s[11]=v*D+y*L+x*H+P*de,s[15]=v*w+y*N+x*te+P*ve,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],s=e[12],r=e[1],a=e[5],l=e[9],c=e[13],u=e[2],d=e[6],h=e[10],f=e[14],g=e[3],_=e[7],m=e[11],p=e[15];return g*(+s*l*d-i*c*d-s*a*h+n*c*h+i*a*f-n*l*f)+_*(+t*l*f-t*c*h+s*r*h-i*r*f+i*c*u-s*l*u)+m*(+t*c*d-t*a*f-s*r*d+n*r*f+s*a*u-n*c*u)+p*(-i*a*u-t*l*d+t*a*h+i*r*d-n*r*h+n*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],r=e[4],a=e[5],l=e[6],c=e[7],u=e[8],d=e[9],h=e[10],f=e[11],g=e[12],_=e[13],m=e[14],p=e[15],v=d*m*c-_*h*c+_*l*f-a*m*f-d*l*p+a*h*p,y=g*h*c-u*m*c-g*l*f+r*m*f+u*l*p-r*h*p,x=u*_*c-g*d*c+g*a*f-r*_*f-u*a*p+r*d*p,P=g*d*l-u*_*l-g*a*h+r*_*h+u*a*m-r*d*m,T=t*v+n*y+i*x+s*P;if(T===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const A=1/T;return e[0]=v*A,e[1]=(_*h*s-d*m*s-_*i*f+n*m*f+d*i*p-n*h*p)*A,e[2]=(a*m*s-_*l*s+_*i*c-n*m*c-a*i*p+n*l*p)*A,e[3]=(d*l*s-a*h*s-d*i*c+n*h*c+a*i*f-n*l*f)*A,e[4]=y*A,e[5]=(u*m*s-g*h*s+g*i*f-t*m*f-u*i*p+t*h*p)*A,e[6]=(g*l*s-r*m*s-g*i*c+t*m*c+r*i*p-t*l*p)*A,e[7]=(r*h*s-u*l*s+u*i*c-t*h*c-r*i*f+t*l*f)*A,e[8]=x*A,e[9]=(g*d*s-u*_*s-g*n*f+t*_*f+u*n*p-t*d*p)*A,e[10]=(r*_*s-g*a*s+g*n*c-t*_*c-r*n*p+t*a*p)*A,e[11]=(u*a*s-r*d*s-u*n*c+t*d*c+r*n*f-t*a*f)*A,e[12]=P*A,e[13]=(u*_*i-g*d*i+g*n*h-t*_*h-u*n*m+t*d*m)*A,e[14]=(g*a*i-r*_*i-g*n*l+t*_*l+r*n*m-t*a*m)*A,e[15]=(r*d*i-u*a*i+u*n*l-t*d*l-r*n*h+t*a*h)*A,this}scale(e){const t=this.elements,n=e.x,i=e.y,s=e.z;return t[0]*=n,t[4]*=i,t[8]*=s,t[1]*=n,t[5]*=i,t[9]*=s,t[2]*=n,t[6]*=i,t[10]*=s,t[3]*=n,t[7]*=i,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),s=1-n,r=e.x,a=e.y,l=e.z,c=s*r,u=s*a;return this.set(c*r+n,c*a-i*l,c*l+i*a,0,c*a+i*l,u*a+n,u*l-i*r,0,c*l-i*a,u*l+i*r,s*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,s,r){return this.set(1,n,s,0,e,1,r,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,s=t._x,r=t._y,a=t._z,l=t._w,c=s+s,u=r+r,d=a+a,h=s*c,f=s*u,g=s*d,_=r*u,m=r*d,p=a*d,v=l*c,y=l*u,x=l*d,P=n.x,T=n.y,A=n.z;return i[0]=(1-(_+p))*P,i[1]=(f+x)*P,i[2]=(g-y)*P,i[3]=0,i[4]=(f-x)*T,i[5]=(1-(h+p))*T,i[6]=(m+v)*T,i[7]=0,i[8]=(g+y)*A,i[9]=(m-v)*A,i[10]=(1-(h+_))*A,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;let s=Pi.set(i[0],i[1],i[2]).length();const r=Pi.set(i[4],i[5],i[6]).length(),a=Pi.set(i[8],i[9],i[10]).length();this.determinant()<0&&(s=-s),e.x=i[12],e.y=i[13],e.z=i[14],cn.copy(this);const c=1/s,u=1/r,d=1/a;return cn.elements[0]*=c,cn.elements[1]*=c,cn.elements[2]*=c,cn.elements[4]*=u,cn.elements[5]*=u,cn.elements[6]*=u,cn.elements[8]*=d,cn.elements[9]*=d,cn.elements[10]*=d,t.setFromRotationMatrix(cn),n.x=s,n.y=r,n.z=a,this}makePerspective(e,t,n,i,s,r,a=zn){const l=this.elements,c=2*s/(t-e),u=2*s/(n-i),d=(t+e)/(t-e),h=(n+i)/(n-i);let f,g;if(a===zn)f=-(r+s)/(r-s),g=-2*r*s/(r-s);else if(a===kr)f=-r/(r-s),g=-r*s/(r-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=u,l[9]=h,l[13]=0,l[2]=0,l[6]=0,l[10]=f,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,i,s,r,a=zn){const l=this.elements,c=1/(t-e),u=1/(n-i),d=1/(r-s),h=(t+e)*c,f=(n+i)*u;let g,_;if(a===zn)g=(r+s)*d,_=-2*d;else if(a===kr)g=s*d,_=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-h,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-f,l[2]=0,l[6]=0,l[10]=_,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const Pi=new E,cn=new Ie,Ad=new E(0,0,0),Cd=new E(1,1,1),Kn=new E,tr=new E,Kt=new E,zl=new Ie,kl=new rn;class gn{constructor(e=0,t=0,n=0,i=gn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,s=i[0],r=i[4],a=i[8],l=i[1],c=i[5],u=i[9],d=i[2],h=i[6],f=i[10];switch(t){case"XYZ":this._y=Math.asin(bt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,f),this._z=Math.atan2(-r,s)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-bt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,s),this._z=0);break;case"ZXY":this._x=Math.asin(bt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-d,f),this._z=Math.atan2(-r,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-bt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(h,f),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-r,c));break;case"YZX":this._z=Math.asin(bt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-d,s)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-bt(r,-1,1)),Math.abs(r)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return zl.makeRotationFromQuaternion(e),this.setFromRotationMatrix(zl,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return kl.setFromEuler(this),this.setFromQuaternion(kl,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}gn.DEFAULT_ORDER="XYZ";class Qa{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Rd=0;const Gl=new E,Li=new rn,Pn=new Ie,nr=new E,ys=new E,Pd=new E,Ld=new rn,Hl=new E(1,0,0),Vl=new E(0,1,0),Wl=new E(0,0,1),Xl={type:"added"},Dd={type:"removed"},Di={type:"childadded",child:null},lo={type:"childremoved",child:null};class dt extends wi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Rd++}),this.uuid=pn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=dt.DEFAULT_UP.clone();const e=new E,t=new gn,n=new rn,i=new E(1,1,1);function s(){n.setFromEuler(t,!1)}function r(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(r),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Ie},normalMatrix:{value:new ke}}),this.matrix=new Ie,this.matrixWorld=new Ie,this.matrixAutoUpdate=dt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=dt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Qa,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Li.setFromAxisAngle(e,t),this.quaternion.multiply(Li),this}rotateOnWorldAxis(e,t){return Li.setFromAxisAngle(e,t),this.quaternion.premultiply(Li),this}rotateX(e){return this.rotateOnAxis(Hl,e)}rotateY(e){return this.rotateOnAxis(Vl,e)}rotateZ(e){return this.rotateOnAxis(Wl,e)}translateOnAxis(e,t){return Gl.copy(e).applyQuaternion(this.quaternion),this.position.add(Gl.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Hl,e)}translateY(e){return this.translateOnAxis(Vl,e)}translateZ(e){return this.translateOnAxis(Wl,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Pn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?nr.copy(e):nr.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),ys.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Pn.lookAt(ys,nr,this.up):Pn.lookAt(nr,ys,this.up),this.quaternion.setFromRotationMatrix(Pn),i&&(Pn.extractRotation(i.matrixWorld),Li.setFromRotationMatrix(Pn),this.quaternion.premultiply(Li.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Xl),Di.child=e,this.dispatchEvent(Di),Di.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Dd),lo.child=e,this.dispatchEvent(lo),lo.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Pn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Pn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Pn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Xl),Di.child=e,this.dispatchEvent(Di),Di.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const r=this.children[n].getObjectByProperty(e,t);if(r!==void 0)return r}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const i=this.children;for(let s=0,r=i.length;s<r;s++)i[s].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ys,e,Pd),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ys,Ld,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const i=this.children;for(let s=0,r=i.length;s<r;s++)i[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const d=l[c];s(e.shapes,d)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));i.material=a}else i.material=s(e.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];i.animations.push(s(e.animations,l))}}if(t){const a=r(e.geometries),l=r(e.materials),c=r(e.textures),u=r(e.images),d=r(e.shapes),h=r(e.skeletons),f=r(e.animations),g=r(e.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),d.length>0&&(n.shapes=d),h.length>0&&(n.skeletons=h),f.length>0&&(n.animations=f),g.length>0&&(n.nodes=g)}return n.object=i,n;function r(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}dt.DEFAULT_UP=new E(0,1,0);dt.DEFAULT_MATRIX_AUTO_UPDATE=!0;dt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const hn=new E,Ln=new E,co=new E,Dn=new E,Ii=new E,Ni=new E,ql=new E,ho=new E,uo=new E,fo=new E,po=new Je,mo=new Je,go=new Je;class tn{constructor(e=new E,t=new E,n=new E){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),hn.subVectors(e,t),i.cross(hn);const s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(e,t,n,i,s){hn.subVectors(i,t),Ln.subVectors(n,t),co.subVectors(e,t);const r=hn.dot(hn),a=hn.dot(Ln),l=hn.dot(co),c=Ln.dot(Ln),u=Ln.dot(co),d=r*c-a*a;if(d===0)return s.set(0,0,0),null;const h=1/d,f=(c*l-a*u)*h,g=(r*u-a*l)*h;return s.set(1-f-g,g,f)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,Dn)===null?!1:Dn.x>=0&&Dn.y>=0&&Dn.x+Dn.y<=1}static getInterpolation(e,t,n,i,s,r,a,l){return this.getBarycoord(e,t,n,i,Dn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Dn.x),l.addScaledVector(r,Dn.y),l.addScaledVector(a,Dn.z),l)}static getInterpolatedAttribute(e,t,n,i,s,r){return po.setScalar(0),mo.setScalar(0),go.setScalar(0),po.fromBufferAttribute(e,t),mo.fromBufferAttribute(e,n),go.fromBufferAttribute(e,i),r.setScalar(0),r.addScaledVector(po,s.x),r.addScaledVector(mo,s.y),r.addScaledVector(go,s.z),r}static isFrontFacing(e,t,n,i){return hn.subVectors(n,t),Ln.subVectors(e,t),hn.cross(Ln).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return hn.subVectors(this.c,this.b),Ln.subVectors(this.a,this.b),hn.cross(Ln).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return tn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return tn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,i,s){return tn.getInterpolation(e,this.a,this.b,this.c,t,n,i,s)}containsPoint(e){return tn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return tn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,s=this.c;let r,a;Ii.subVectors(i,n),Ni.subVectors(s,n),ho.subVectors(e,n);const l=Ii.dot(ho),c=Ni.dot(ho);if(l<=0&&c<=0)return t.copy(n);uo.subVectors(e,i);const u=Ii.dot(uo),d=Ni.dot(uo);if(u>=0&&d<=u)return t.copy(i);const h=l*d-u*c;if(h<=0&&l>=0&&u<=0)return r=l/(l-u),t.copy(n).addScaledVector(Ii,r);fo.subVectors(e,s);const f=Ii.dot(fo),g=Ni.dot(fo);if(g>=0&&f<=g)return t.copy(s);const _=f*c-l*g;if(_<=0&&c>=0&&g<=0)return a=c/(c-g),t.copy(n).addScaledVector(Ni,a);const m=u*g-f*d;if(m<=0&&d-u>=0&&f-g>=0)return ql.subVectors(s,i),a=(d-u)/(d-u+(f-g)),t.copy(i).addScaledVector(ql,a);const p=1/(m+_+h);return r=_*p,a=h*p,t.copy(n).addScaledVector(Ii,r).addScaledVector(Ni,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Ih={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},$n={h:0,s:0,l:0},ir={h:0,s:0,l:0};function _o(o,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?o+(e-o)*6*t:t<1/2?e:t<2/3?o+(e-o)*6*(2/3-t):o}class se{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Dt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,qe.toWorkingColorSpace(this,t),this}setRGB(e,t,n,i=qe.workingColorSpace){return this.r=e,this.g=t,this.b=n,qe.toWorkingColorSpace(this,i),this}setHSL(e,t,n,i=qe.workingColorSpace){if(e=Ja(e,1),t=bt(t,0,1),n=bt(n,0,1),t===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,r=2*n-s;this.r=_o(r,s,e+1/3),this.g=_o(r,s,e),this.b=_o(r,s,e-1/3)}return qe.toWorkingColorSpace(this,i),this}setStyle(e,t=Dt){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const r=i[1],a=i[2];switch(r){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=i[1],r=s.length;if(r===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(r===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Dt){const n=Ih[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Gn(e.r),this.g=Gn(e.g),this.b=Gn(e.b),this}copyLinearToSRGB(e){return this.r=$i(e.r),this.g=$i(e.g),this.b=$i(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Dt){return qe.fromWorkingColorSpace(Bt.copy(this),e),Math.round(bt(Bt.r*255,0,255))*65536+Math.round(bt(Bt.g*255,0,255))*256+Math.round(bt(Bt.b*255,0,255))}getHexString(e=Dt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=qe.workingColorSpace){qe.fromWorkingColorSpace(Bt.copy(this),t);const n=Bt.r,i=Bt.g,s=Bt.b,r=Math.max(n,i,s),a=Math.min(n,i,s);let l,c;const u=(a+r)/2;if(a===r)l=0,c=0;else{const d=r-a;switch(c=u<=.5?d/(r+a):d/(2-r-a),r){case n:l=(i-s)/d+(i<s?6:0);break;case i:l=(s-n)/d+2;break;case s:l=(n-i)/d+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=qe.workingColorSpace){return qe.fromWorkingColorSpace(Bt.copy(this),t),e.r=Bt.r,e.g=Bt.g,e.b=Bt.b,e}getStyle(e=Dt){qe.fromWorkingColorSpace(Bt.copy(this),e);const t=Bt.r,n=Bt.g,i=Bt.b;return e!==Dt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL($n),this.setHSL($n.h+e,$n.s+t,$n.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL($n),e.getHSL(ir);const n=Ns($n.h,ir.h,t),i=Ns($n.s,ir.s,t),s=Ns($n.l,ir.l,t);return this.setHSL(n,i,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,i=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*i,this.g=s[1]*t+s[4]*n+s[7]*i,this.b=s[2]*t+s[5]*n+s[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Bt=new se;se.NAMES=Ih;let Id=0;class mn extends wi{static get type(){return"Material"}get type(){return this.constructor.type}set type(e){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Id++}),this.uuid=pn(),this.name="",this.blending=ri,this.side=Hn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=qo,this.blendDst=Yo,this.blendEquation=vi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new se(0,0,0),this.blendAlpha=0,this.depthFunc=Qi,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Rl,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ti,this.stencilZFail=Ti,this.stencilZPass=Ti,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==ri&&(n.blending=this.blending),this.side!==Hn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==qo&&(n.blendSrc=this.blendSrc),this.blendDst!==Yo&&(n.blendDst=this.blendDst),this.blendEquation!==vi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Qi&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Rl&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ti&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Ti&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Ti&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(s){const r=[];for(const a in s){const l=s[a];delete l.metadata,r.push(l)}return r}if(t){const s=i(e.textures),r=i(e.images);s.length>0&&(n.textures=s),r.length>0&&(n.images=r)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Mt extends mn{static get type(){return"MeshBasicMaterial"}constructor(e){super(),this.isMeshBasicMaterial=!0,this.color=new se(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new gn,this.combine=hh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const St=new E,sr=new ae;class At{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Pa,this.updateRanges=[],this.gpuType=dn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)sr.fromBufferAttribute(this,t),sr.applyMatrix3(e),this.setXY(t,sr.x,sr.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)St.fromBufferAttribute(this,t),St.applyMatrix3(e),this.setXYZ(t,St.x,St.y,St.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)St.fromBufferAttribute(this,t),St.applyMatrix4(e),this.setXYZ(t,St.x,St.y,St.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)St.fromBufferAttribute(this,t),St.applyNormalMatrix(e),this.setXYZ(t,St.x,St.y,St.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)St.fromBufferAttribute(this,t),St.transformDirection(e),this.setXYZ(t,St.x,St.y,St.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=un(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=rt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=un(t,this.array)),t}setX(e,t){return this.normalized&&(t=rt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=un(t,this.array)),t}setY(e,t){return this.normalized&&(t=rt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=un(t,this.array)),t}setZ(e,t){return this.normalized&&(t=rt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=un(t,this.array)),t}setW(e,t){return this.normalized&&(t=rt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=rt(t,this.array),n=rt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=rt(t,this.array),n=rt(n,this.array),i=rt(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e*=this.itemSize,this.normalized&&(t=rt(t,this.array),n=rt(n,this.array),i=rt(i,this.array),s=rt(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Pa&&(e.usage=this.usage),e}}class Nh extends At{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Uh extends At{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class ot extends At{constructor(e,t,n){super(new Float32Array(e),t,n)}}let Nd=0;const Qt=new Ie,vo=new dt,Ui=new E,$t=new It,Ms=new It,Pt=new E;class wt extends wi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Nd++}),this.uuid=pn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Ph(e)?Uh:Nh)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new ke().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Qt.makeRotationFromQuaternion(e),this.applyMatrix4(Qt),this}rotateX(e){return Qt.makeRotationX(e),this.applyMatrix4(Qt),this}rotateY(e){return Qt.makeRotationY(e),this.applyMatrix4(Qt),this}rotateZ(e){return Qt.makeRotationZ(e),this.applyMatrix4(Qt),this}translate(e,t,n){return Qt.makeTranslation(e,t,n),this.applyMatrix4(Qt),this}scale(e,t,n){return Qt.makeScale(e,t,n),this.applyMatrix4(Qt),this}lookAt(e){return vo.lookAt(e),vo.updateMatrix(),this.applyMatrix4(vo.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ui).negate(),this.translate(Ui.x,Ui.y,Ui.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let i=0,s=e.length;i<s;i++){const r=e[i];n.push(r.x,r.y,r.z||0)}this.setAttribute("position",new ot(n,3))}else{for(let n=0,i=t.count;n<i;n++){const s=e[n];t.setXYZ(n,s.x,s.y,s.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new It);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new E(-1/0,-1/0,-1/0),new E(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const s=t[n];$t.setFromBufferAttribute(s),this.morphTargetsRelative?(Pt.addVectors(this.boundingBox.min,$t.min),this.boundingBox.expandByPoint(Pt),Pt.addVectors(this.boundingBox.max,$t.max),this.boundingBox.expandByPoint(Pt)):(this.boundingBox.expandByPoint($t.min),this.boundingBox.expandByPoint($t.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Sn);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new E,1/0);return}if(e){const n=this.boundingSphere.center;if($t.setFromBufferAttribute(e),t)for(let s=0,r=t.length;s<r;s++){const a=t[s];Ms.setFromBufferAttribute(a),this.morphTargetsRelative?(Pt.addVectors($t.min,Ms.min),$t.expandByPoint(Pt),Pt.addVectors($t.max,Ms.max),$t.expandByPoint(Pt)):($t.expandByPoint(Ms.min),$t.expandByPoint(Ms.max))}$t.getCenter(n);let i=0;for(let s=0,r=e.count;s<r;s++)Pt.fromBufferAttribute(e,s),i=Math.max(i,n.distanceToSquared(Pt));if(t)for(let s=0,r=t.length;s<r;s++){const a=t[s],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)Pt.fromBufferAttribute(a,c),l&&(Ui.fromBufferAttribute(e,c),Pt.add(Ui)),i=Math.max(i,n.distanceToSquared(Pt))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,i=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new At(new Float32Array(4*n.count),4));const r=this.getAttribute("tangent"),a=[],l=[];for(let D=0;D<n.count;D++)a[D]=new E,l[D]=new E;const c=new E,u=new E,d=new E,h=new ae,f=new ae,g=new ae,_=new E,m=new E;function p(D,w,M){c.fromBufferAttribute(n,D),u.fromBufferAttribute(n,w),d.fromBufferAttribute(n,M),h.fromBufferAttribute(s,D),f.fromBufferAttribute(s,w),g.fromBufferAttribute(s,M),u.sub(c),d.sub(c),f.sub(h),g.sub(h);const I=1/(f.x*g.y-g.x*f.y);isFinite(I)&&(_.copy(u).multiplyScalar(g.y).addScaledVector(d,-f.y).multiplyScalar(I),m.copy(d).multiplyScalar(f.x).addScaledVector(u,-g.x).multiplyScalar(I),a[D].add(_),a[w].add(_),a[M].add(_),l[D].add(m),l[w].add(m),l[M].add(m))}let v=this.groups;v.length===0&&(v=[{start:0,count:e.count}]);for(let D=0,w=v.length;D<w;++D){const M=v[D],I=M.start,L=M.count;for(let N=I,k=I+L;N<k;N+=3)p(e.getX(N+0),e.getX(N+1),e.getX(N+2))}const y=new E,x=new E,P=new E,T=new E;function A(D){P.fromBufferAttribute(i,D),T.copy(P);const w=a[D];y.copy(w),y.sub(P.multiplyScalar(P.dot(w))).normalize(),x.crossVectors(T,w);const I=x.dot(l[D])<0?-1:1;r.setXYZW(D,y.x,y.y,y.z,I)}for(let D=0,w=v.length;D<w;++D){const M=v[D],I=M.start,L=M.count;for(let N=I,k=I+L;N<k;N+=3)A(e.getX(N+0)),A(e.getX(N+1)),A(e.getX(N+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new At(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let h=0,f=n.count;h<f;h++)n.setXYZ(h,0,0,0);const i=new E,s=new E,r=new E,a=new E,l=new E,c=new E,u=new E,d=new E;if(e)for(let h=0,f=e.count;h<f;h+=3){const g=e.getX(h+0),_=e.getX(h+1),m=e.getX(h+2);i.fromBufferAttribute(t,g),s.fromBufferAttribute(t,_),r.fromBufferAttribute(t,m),u.subVectors(r,s),d.subVectors(i,s),u.cross(d),a.fromBufferAttribute(n,g),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,m),a.add(u),l.add(u),c.add(u),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let h=0,f=t.count;h<f;h+=3)i.fromBufferAttribute(t,h+0),s.fromBufferAttribute(t,h+1),r.fromBufferAttribute(t,h+2),u.subVectors(r,s),d.subVectors(i,s),u.cross(d),n.setXYZ(h+0,u.x,u.y,u.z),n.setXYZ(h+1,u.x,u.y,u.z),n.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Pt.fromBufferAttribute(e,t),Pt.normalize(),e.setXYZ(t,Pt.x,Pt.y,Pt.z)}toNonIndexed(){function e(a,l){const c=a.array,u=a.itemSize,d=a.normalized,h=new c.constructor(l.length*u);let f=0,g=0;for(let _=0,m=l.length;_<m;_++){a.isInterleavedBufferAttribute?f=l[_]*a.data.stride+a.offset:f=l[_]*u;for(let p=0;p<u;p++)h[g++]=c[f++]}return new At(h,u,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new wt,n=this.index.array,i=this.attributes;for(const a in i){const l=i[a],c=e(l,n);t.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let u=0,d=c.length;u<d;u++){const h=c[u],f=e(h,n);l.push(f)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const r=this.groups;for(let a=0,l=r.length;a<l;a++){const c=r[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const i={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let d=0,h=c.length;d<h;d++){const f=c[d];u.push(f.toJSON(e.data))}u.length>0&&(i[l]=u,s=!0)}s&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const r=this.groups;r.length>0&&(e.data.groups=JSON.parse(JSON.stringify(r)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const i=e.attributes;for(const c in i){const u=i[c];this.setAttribute(c,u.clone(t))}const s=e.morphAttributes;for(const c in s){const u=[],d=s[c];for(let h=0,f=d.length;h<f;h++)u.push(d[h].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const r=e.groups;for(let c=0,u=r.length;c<u;c++){const d=r[c];this.addGroup(d.start,d.count,d.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Yl=new Ie,hi=new Xs,rr=new Sn,jl=new E,or=new E,ar=new E,lr=new E,xo=new E,cr=new E,Kl=new E,hr=new E;class Te extends dt{constructor(e=new wt,t=new Mt){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,r=i.length;s<r;s++){const a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){const n=this.geometry,i=n.attributes.position,s=n.morphAttributes.position,r=n.morphTargetsRelative;t.fromBufferAttribute(i,e);const a=this.morphTargetInfluences;if(s&&a){cr.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=a[l],d=s[l];u!==0&&(xo.fromBufferAttribute(d,e),r?cr.addScaledVector(xo,u):cr.addScaledVector(xo.sub(t),u))}t.add(cr)}return t}raycast(e,t){const n=this.geometry,i=this.material,s=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),rr.copy(n.boundingSphere),rr.applyMatrix4(s),hi.copy(e.ray).recast(e.near),!(rr.containsPoint(hi.origin)===!1&&(hi.intersectSphere(rr,jl)===null||hi.origin.distanceToSquared(jl)>(e.far-e.near)**2))&&(Yl.copy(s).invert(),hi.copy(e.ray).applyMatrix4(Yl),!(n.boundingBox!==null&&hi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,hi)))}_computeIntersections(e,t,n){let i;const s=this.geometry,r=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,d=s.attributes.normal,h=s.groups,f=s.drawRange;if(a!==null)if(Array.isArray(r))for(let g=0,_=h.length;g<_;g++){const m=h[g],p=r[m.materialIndex],v=Math.max(m.start,f.start),y=Math.min(a.count,Math.min(m.start+m.count,f.start+f.count));for(let x=v,P=y;x<P;x+=3){const T=a.getX(x),A=a.getX(x+1),D=a.getX(x+2);i=ur(this,p,e,n,c,u,d,T,A,D),i&&(i.faceIndex=Math.floor(x/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{const g=Math.max(0,f.start),_=Math.min(a.count,f.start+f.count);for(let m=g,p=_;m<p;m+=3){const v=a.getX(m),y=a.getX(m+1),x=a.getX(m+2);i=ur(this,r,e,n,c,u,d,v,y,x),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}else if(l!==void 0)if(Array.isArray(r))for(let g=0,_=h.length;g<_;g++){const m=h[g],p=r[m.materialIndex],v=Math.max(m.start,f.start),y=Math.min(l.count,Math.min(m.start+m.count,f.start+f.count));for(let x=v,P=y;x<P;x+=3){const T=x,A=x+1,D=x+2;i=ur(this,p,e,n,c,u,d,T,A,D),i&&(i.faceIndex=Math.floor(x/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{const g=Math.max(0,f.start),_=Math.min(l.count,f.start+f.count);for(let m=g,p=_;m<p;m+=3){const v=m,y=m+1,x=m+2;i=ur(this,r,e,n,c,u,d,v,y,x),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}}}function Ud(o,e,t,n,i,s,r,a){let l;if(e.side===Wt?l=n.intersectTriangle(r,s,i,!0,a):l=n.intersectTriangle(i,s,r,e.side===Hn,a),l===null)return null;hr.copy(a),hr.applyMatrix4(o.matrixWorld);const c=t.ray.origin.distanceTo(hr);return c<t.near||c>t.far?null:{distance:c,point:hr.clone(),object:o}}function ur(o,e,t,n,i,s,r,a,l,c){o.getVertexPosition(a,or),o.getVertexPosition(l,ar),o.getVertexPosition(c,lr);const u=Ud(o,e,t,n,or,ar,lr,Kl);if(u){const d=new E;tn.getBarycoord(Kl,or,ar,lr,d),i&&(u.uv=tn.getInterpolatedAttribute(i,a,l,c,d,new ae)),s&&(u.uv1=tn.getInterpolatedAttribute(s,a,l,c,d,new ae)),r&&(u.normal=tn.getInterpolatedAttribute(r,a,l,c,d,new E),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const h={a,b:l,c,normal:new E,materialIndex:0};tn.getNormal(or,ar,lr,h.normal),u.face=h,u.barycoord=d}return u}class Si extends wt{constructor(e=1,t=1,n=1,i=1,s=1,r=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:s,depthSegments:r};const a=this;i=Math.floor(i),s=Math.floor(s),r=Math.floor(r);const l=[],c=[],u=[],d=[];let h=0,f=0;g("z","y","x",-1,-1,n,t,e,r,s,0),g("z","y","x",1,-1,n,t,-e,r,s,1),g("x","z","y",1,1,e,n,t,i,r,2),g("x","z","y",1,-1,e,n,-t,i,r,3),g("x","y","z",1,-1,e,t,n,i,s,4),g("x","y","z",-1,-1,e,t,-n,i,s,5),this.setIndex(l),this.setAttribute("position",new ot(c,3)),this.setAttribute("normal",new ot(u,3)),this.setAttribute("uv",new ot(d,2));function g(_,m,p,v,y,x,P,T,A,D,w){const M=x/A,I=P/D,L=x/2,N=P/2,k=T/2,K=A+1,H=D+1;let te=0,q=0;const re=new E;for(let de=0;de<H;de++){const ve=de*I-N;for(let Be=0;Be<K;Be++){const je=Be*M-L;re[_]=je*v,re[m]=ve*y,re[p]=k,c.push(re.x,re.y,re.z),re[_]=0,re[m]=0,re[p]=T>0?1:-1,u.push(re.x,re.y,re.z),d.push(Be/A),d.push(1-de/D),te+=1}}for(let de=0;de<D;de++)for(let ve=0;ve<A;ve++){const Be=h+ve+K*de,je=h+ve+K*(de+1),$=h+(ve+1)+K*(de+1),oe=h+(ve+1)+K*de;l.push(Be,je,oe),l.push(je,$,oe),q+=6}a.addGroup(f,q,w),f+=q,h+=te}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Si(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function os(o){const e={};for(const t in o){e[t]={};for(const n in o[t]){const i=o[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function kt(o){const e={};for(let t=0;t<o.length;t++){const n=os(o[t]);for(const i in n)e[i]=n[i]}return e}function Bd(o){const e=[];for(let t=0;t<o.length;t++)e.push(o[t].clone());return e}function Bh(o){const e=o.getRenderTarget();return e===null?o.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:qe.workingColorSpace}const Hs={clone:os,merge:kt};var Fd=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Od=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Tt extends mn{static get type(){return"ShaderMaterial"}constructor(e){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Fd,this.fragmentShader=Od,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=os(e.uniforms),this.uniformsGroups=Bd(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const r=this.uniforms[i].value;r&&r.isTexture?t.uniforms[i]={type:"t",value:r.toJSON(e).uuid}:r&&r.isColor?t.uniforms[i]={type:"c",value:r.getHex()}:r&&r.isVector2?t.uniforms[i]={type:"v2",value:r.toArray()}:r&&r.isVector3?t.uniforms[i]={type:"v3",value:r.toArray()}:r&&r.isVector4?t.uniforms[i]={type:"v4",value:r.toArray()}:r&&r.isMatrix3?t.uniforms[i]={type:"m3",value:r.toArray()}:r&&r.isMatrix4?t.uniforms[i]={type:"m4",value:r.toArray()}:t.uniforms[i]={value:r}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}let Fh=class extends dt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ie,this.projectionMatrix=new Ie,this.projectionMatrixInverse=new Ie,this.coordinateSystem=zn}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}};const Zn=new E,$l=new ae,Zl=new ae;class Gt extends Fh{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=rs*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Is*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return rs*2*Math.atan(Math.tan(Is*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Zn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Zn.x,Zn.y).multiplyScalar(-e/Zn.z),Zn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Zn.x,Zn.y).multiplyScalar(-e/Zn.z)}getViewSize(e,t){return this.getViewBounds(e,$l,Zl),t.subVectors(Zl,$l)}setViewOffset(e,t,n,i,s,r){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Is*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,s=-.5*i;const r=this.view;if(this.view!==null&&this.view.enabled){const l=r.fullWidth,c=r.fullHeight;s+=r.offsetX*i/l,t-=r.offsetY*n/c,i*=r.width/l,n*=r.height/c}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Bi=-90,Fi=1;class zd extends dt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new Gt(Bi,Fi,e,t);i.layers=this.layers,this.add(i);const s=new Gt(Bi,Fi,e,t);s.layers=this.layers,this.add(s);const r=new Gt(Bi,Fi,e,t);r.layers=this.layers,this.add(r);const a=new Gt(Bi,Fi,e,t);a.layers=this.layers,this.add(a);const l=new Gt(Bi,Fi,e,t);l.layers=this.layers,this.add(l);const c=new Gt(Bi,Fi,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,i,s,r,a,l]=t;for(const c of t)this.remove(c);if(e===zn)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),r.up.set(0,0,1),r.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===kr)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),r.up.set(0,0,-1),r.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,r,a,l,c,u]=this.children,d=e.getRenderTarget(),h=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,i),e.render(t,s),e.setRenderTarget(n,1,i),e.render(t,r),e.setRenderTarget(n,2,i),e.render(t,a),e.setRenderTarget(n,3,i),e.render(t,l),e.setRenderTarget(n,4,i),e.render(t,c),n.texture.generateMipmaps=_,e.setRenderTarget(n,5,i),e.render(t,u),e.setRenderTarget(d,h,f),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class Oh extends Et{constructor(e,t,n,i,s,r,a,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:es,super(e,t,n,i,s,r,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class kd extends sn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new Oh(i,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Zt}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new Si(5,5,5),s=new Tt({name:"CubemapFromEquirect",uniforms:os(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Wt,blending:kn});s.uniforms.tEquirect.value=t;const r=new Te(i,s),a=t.minFilter;return t.minFilter===On&&(t.minFilter=Zt),new zd(1,10,this).update(e,r),t.minFilter=a,r.geometry.dispose(),r.material.dispose(),this}clear(e,t,n,i){const s=e.getRenderTarget();for(let r=0;r<6;r++)e.setRenderTarget(this,r),e.clear(t,n,i);e.setRenderTarget(s)}}const yo=new E,Gd=new E,Hd=new ke;class gi{constructor(e=new E(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=yo.subVectors(n,t).cross(Gd.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(yo),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/i;return s<0||s>1?null:t.copy(e.start).addScaledVector(n,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||Hd.getNormalMatrix(e),i=this.coplanarPoint(yo).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ui=new Sn,dr=new E;class el{constructor(e=new gi,t=new gi,n=new gi,i=new gi,s=new gi,r=new gi){this.planes=[e,t,n,i,s,r]}set(e,t,n,i,s,r){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(i),a[4].copy(s),a[5].copy(r),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=zn){const n=this.planes,i=e.elements,s=i[0],r=i[1],a=i[2],l=i[3],c=i[4],u=i[5],d=i[6],h=i[7],f=i[8],g=i[9],_=i[10],m=i[11],p=i[12],v=i[13],y=i[14],x=i[15];if(n[0].setComponents(l-s,h-c,m-f,x-p).normalize(),n[1].setComponents(l+s,h+c,m+f,x+p).normalize(),n[2].setComponents(l+r,h+u,m+g,x+v).normalize(),n[3].setComponents(l-r,h-u,m-g,x-v).normalize(),n[4].setComponents(l-a,h-d,m-_,x-y).normalize(),t===zn)n[5].setComponents(l+a,h+d,m+_,x+y).normalize();else if(t===kr)n[5].setComponents(a,d,_,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ui.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),ui.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ui)}intersectsSprite(e){return ui.center.set(0,0,0),ui.radius=.7071067811865476,ui.applyMatrix4(e.matrixWorld),this.intersectsSphere(ui)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(dr.x=i.normal.x>0?e.max.x:e.min.x,dr.y=i.normal.y>0?e.max.y:e.min.y,dr.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(dr)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function zh(){let o=null,e=!1,t=null,n=null;function i(s,r){t(s,r),n=o.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=o.requestAnimationFrame(i),e=!0)},stop:function(){o.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){o=s}}}function Vd(o){const e=new WeakMap;function t(a,l){const c=a.array,u=a.usage,d=c.byteLength,h=o.createBuffer();o.bindBuffer(l,h),o.bufferData(l,c,u),a.onUploadCallback();let f;if(c instanceof Float32Array)f=o.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?f=o.HALF_FLOAT:f=o.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=o.SHORT;else if(c instanceof Uint32Array)f=o.UNSIGNED_INT;else if(c instanceof Int32Array)f=o.INT;else if(c instanceof Int8Array)f=o.BYTE;else if(c instanceof Uint8Array)f=o.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=o.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:h,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:d}}function n(a,l,c){const u=l.array,d=l.updateRanges;if(o.bindBuffer(c,a),d.length===0)o.bufferSubData(c,0,u);else{d.sort((f,g)=>f.start-g.start);let h=0;for(let f=1;f<d.length;f++){const g=d[h],_=d[f];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++h,d[h]=_)}d.length=h+1;for(let f=0,g=d.length;f<g;f++){const _=d[f];o.bufferSubData(c,_.start*u.BYTES_PER_ELEMENT,u,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function i(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(o.deleteBuffer(l.buffer),e.delete(a))}function r(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:i,remove:s,update:r}}class Ht extends wt{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const s=e/2,r=t/2,a=Math.floor(n),l=Math.floor(i),c=a+1,u=l+1,d=e/a,h=t/l,f=[],g=[],_=[],m=[];for(let p=0;p<u;p++){const v=p*h-r;for(let y=0;y<c;y++){const x=y*d-s;g.push(x,-v,0),_.push(0,0,1),m.push(y/a),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let v=0;v<a;v++){const y=v+c*p,x=v+c*(p+1),P=v+1+c*(p+1),T=v+1+c*p;f.push(y,x,T),f.push(x,P,T)}this.setIndex(f),this.setAttribute("position",new ot(g,3)),this.setAttribute("normal",new ot(_,3)),this.setAttribute("uv",new ot(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ht(e.width,e.height,e.widthSegments,e.heightSegments)}}var Wd=`#ifdef USE_ALPHAHASH
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
#endif`,bf=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Tf=`#ifdef USE_ENVMAP
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
material.diffuseColor = diffuseColor.rgb;`,zf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,kf=`BlinnPhongMaterial material;
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
#endif`,bp=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Tp=`#ifdef USE_ROUGHNESSMAP
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
#endif`,zp=`#ifdef USE_TRANSMISSION
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
#endif`,kp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
}`,Ve={alphahash_fragment:Wd,alphahash_pars_fragment:Xd,alphamap_fragment:qd,alphamap_pars_fragment:Yd,alphatest_fragment:jd,alphatest_pars_fragment:Kd,aomap_fragment:$d,aomap_pars_fragment:Zd,batching_pars_vertex:Jd,batching_vertex:Qd,begin_vertex:ef,beginnormal_vertex:tf,bsdfs:nf,iridescence_fragment:sf,bumpmap_pars_fragment:rf,clipping_planes_fragment:of,clipping_planes_pars_fragment:af,clipping_planes_pars_vertex:lf,clipping_planes_vertex:cf,color_fragment:hf,color_pars_fragment:uf,color_pars_vertex:df,color_vertex:ff,common:pf,cube_uv_reflection_fragment:mf,defaultnormal_vertex:gf,displacementmap_pars_vertex:_f,displacementmap_vertex:vf,emissivemap_fragment:xf,emissivemap_pars_fragment:yf,colorspace_fragment:Mf,colorspace_pars_fragment:Sf,envmap_fragment:wf,envmap_common_pars_fragment:bf,envmap_pars_fragment:Tf,envmap_pars_vertex:Ef,envmap_physical_pars_fragment:Ff,envmap_vertex:Af,fog_vertex:Cf,fog_pars_vertex:Rf,fog_fragment:Pf,fog_pars_fragment:Lf,gradientmap_pars_fragment:Df,lightmap_pars_fragment:If,lights_lambert_fragment:Nf,lights_lambert_pars_fragment:Uf,lights_pars_begin:Bf,lights_toon_fragment:Of,lights_toon_pars_fragment:zf,lights_phong_fragment:kf,lights_phong_pars_fragment:Gf,lights_physical_fragment:Hf,lights_physical_pars_fragment:Vf,lights_fragment_begin:Wf,lights_fragment_maps:Xf,lights_fragment_end:qf,logdepthbuf_fragment:Yf,logdepthbuf_pars_fragment:jf,logdepthbuf_pars_vertex:Kf,logdepthbuf_vertex:$f,map_fragment:Zf,map_pars_fragment:Jf,map_particle_fragment:Qf,map_particle_pars_fragment:ep,metalnessmap_fragment:tp,metalnessmap_pars_fragment:np,morphinstance_vertex:ip,morphcolor_vertex:sp,morphnormal_vertex:rp,morphtarget_pars_vertex:op,morphtarget_vertex:ap,normal_fragment_begin:lp,normal_fragment_maps:cp,normal_pars_fragment:hp,normal_pars_vertex:up,normal_vertex:dp,normalmap_pars_fragment:fp,clearcoat_normal_fragment_begin:pp,clearcoat_normal_fragment_maps:mp,clearcoat_pars_fragment:gp,iridescence_pars_fragment:_p,opaque_fragment:vp,packing:xp,premultiplied_alpha_fragment:yp,project_vertex:Mp,dithering_fragment:Sp,dithering_pars_fragment:wp,roughnessmap_fragment:bp,roughnessmap_pars_fragment:Tp,shadowmap_pars_fragment:Ep,shadowmap_pars_vertex:Ap,shadowmap_vertex:Cp,shadowmask_pars_fragment:Rp,skinbase_vertex:Pp,skinning_pars_vertex:Lp,skinning_vertex:Dp,skinnormal_vertex:Ip,specularmap_fragment:Np,specularmap_pars_fragment:Up,tonemapping_fragment:Bp,tonemapping_pars_fragment:Fp,transmission_fragment:Op,transmission_pars_fragment:zp,uv_pars_fragment:kp,uv_pars_vertex:Gp,uv_vertex:Hp,worldpos_vertex:Vp,background_vert:Wp,background_frag:Xp,backgroundCube_vert:qp,backgroundCube_frag:Yp,cube_vert:jp,cube_frag:Kp,depth_vert:$p,depth_frag:Zp,distanceRGBA_vert:Jp,distanceRGBA_frag:Qp,equirect_vert:em,equirect_frag:tm,linedashed_vert:nm,linedashed_frag:im,meshbasic_vert:sm,meshbasic_frag:rm,meshlambert_vert:om,meshlambert_frag:am,meshmatcap_vert:lm,meshmatcap_frag:cm,meshnormal_vert:hm,meshnormal_frag:um,meshphong_vert:dm,meshphong_frag:fm,meshphysical_vert:pm,meshphysical_frag:mm,meshtoon_vert:gm,meshtoon_frag:_m,points_vert:vm,points_frag:xm,shadow_vert:ym,shadow_frag:Mm,sprite_vert:Sm,sprite_frag:wm},he={common:{diffuse:{value:new se(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ke},alphaMap:{value:null},alphaMapTransform:{value:new ke},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ke}},envmap:{envMap:{value:null},envMapRotation:{value:new ke},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ke}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ke}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ke},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ke},normalScale:{value:new ae(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ke},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ke}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ke}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ke}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new se(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new se(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ke},alphaTest:{value:0},uvTransform:{value:new ke}},sprite:{diffuse:{value:new se(16777215)},opacity:{value:1},center:{value:new ae(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ke},alphaMap:{value:null},alphaMapTransform:{value:new ke},alphaTest:{value:0}}},xn={basic:{uniforms:kt([he.common,he.specularmap,he.envmap,he.aomap,he.lightmap,he.fog]),vertexShader:Ve.meshbasic_vert,fragmentShader:Ve.meshbasic_frag},lambert:{uniforms:kt([he.common,he.specularmap,he.envmap,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.fog,he.lights,{emissive:{value:new se(0)}}]),vertexShader:Ve.meshlambert_vert,fragmentShader:Ve.meshlambert_frag},phong:{uniforms:kt([he.common,he.specularmap,he.envmap,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.fog,he.lights,{emissive:{value:new se(0)},specular:{value:new se(1118481)},shininess:{value:30}}]),vertexShader:Ve.meshphong_vert,fragmentShader:Ve.meshphong_frag},standard:{uniforms:kt([he.common,he.envmap,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.roughnessmap,he.metalnessmap,he.fog,he.lights,{emissive:{value:new se(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ve.meshphysical_vert,fragmentShader:Ve.meshphysical_frag},toon:{uniforms:kt([he.common,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.gradientmap,he.fog,he.lights,{emissive:{value:new se(0)}}]),vertexShader:Ve.meshtoon_vert,fragmentShader:Ve.meshtoon_frag},matcap:{uniforms:kt([he.common,he.bumpmap,he.normalmap,he.displacementmap,he.fog,{matcap:{value:null}}]),vertexShader:Ve.meshmatcap_vert,fragmentShader:Ve.meshmatcap_frag},points:{uniforms:kt([he.points,he.fog]),vertexShader:Ve.points_vert,fragmentShader:Ve.points_frag},dashed:{uniforms:kt([he.common,he.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ve.linedashed_vert,fragmentShader:Ve.linedashed_frag},depth:{uniforms:kt([he.common,he.displacementmap]),vertexShader:Ve.depth_vert,fragmentShader:Ve.depth_frag},normal:{uniforms:kt([he.common,he.bumpmap,he.normalmap,he.displacementmap,{opacity:{value:1}}]),vertexShader:Ve.meshnormal_vert,fragmentShader:Ve.meshnormal_frag},sprite:{uniforms:kt([he.sprite,he.fog]),vertexShader:Ve.sprite_vert,fragmentShader:Ve.sprite_frag},background:{uniforms:{uvTransform:{value:new ke},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ve.background_vert,fragmentShader:Ve.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ke}},vertexShader:Ve.backgroundCube_vert,fragmentShader:Ve.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ve.cube_vert,fragmentShader:Ve.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ve.equirect_vert,fragmentShader:Ve.equirect_frag},distanceRGBA:{uniforms:kt([he.common,he.displacementmap,{referencePosition:{value:new E},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ve.distanceRGBA_vert,fragmentShader:Ve.distanceRGBA_frag},shadow:{uniforms:kt([he.lights,he.fog,{color:{value:new se(0)},opacity:{value:1}}]),vertexShader:Ve.shadow_vert,fragmentShader:Ve.shadow_frag}};xn.physical={uniforms:kt([xn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ke},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ke},clearcoatNormalScale:{value:new ae(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ke},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ke},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ke},sheen:{value:0},sheenColor:{value:new se(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ke},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ke},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ke},transmissionSamplerSize:{value:new ae},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ke},attenuationDistance:{value:0},attenuationColor:{value:new se(0)},specularColor:{value:new se(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ke},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ke},anisotropyVector:{value:new ae},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ke}}]),vertexShader:Ve.meshphysical_vert,fragmentShader:Ve.meshphysical_frag};const fr={r:0,b:0,g:0},di=new gn,bm=new Ie;function Tm(o,e,t,n,i,s,r){const a=new se(0);let l=s===!0?0:1,c,u,d=null,h=0,f=null;function g(v){let y=v.isScene===!0?v.background:null;return y&&y.isTexture&&(y=(v.backgroundBlurriness>0?t:e).get(y)),y}function _(v){let y=!1;const x=g(v);x===null?p(a,l):x&&x.isColor&&(p(x,1),y=!0);const P=o.xr.getEnvironmentBlendMode();P==="additive"?n.buffers.color.setClear(0,0,0,1,r):P==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,r),(o.autoClear||y)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),o.clear(o.autoClearColor,o.autoClearDepth,o.autoClearStencil))}function m(v,y){const x=g(y);x&&(x.isCubeTexture||x.mapping===Xr)?(u===void 0&&(u=new Te(new Si(1,1,1),new Tt({name:"BackgroundCubeMaterial",uniforms:os(xn.backgroundCube.uniforms),vertexShader:xn.backgroundCube.vertexShader,fragmentShader:xn.backgroundCube.fragmentShader,side:Wt,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(P,T,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(u)),di.copy(y.backgroundRotation),di.x*=-1,di.y*=-1,di.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(di.y*=-1,di.z*=-1),u.material.uniforms.envMap.value=x,u.material.uniforms.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(bm.makeRotationFromEuler(di)),u.material.toneMapped=qe.getTransfer(x.colorSpace)!==st,(d!==x||h!==x.version||f!==o.toneMapping)&&(u.material.needsUpdate=!0,d=x,h=x.version,f=o.toneMapping),u.layers.enableAll(),v.unshift(u,u.geometry,u.material,0,0,null)):x&&x.isTexture&&(c===void 0&&(c=new Te(new Ht(2,2),new Tt({name:"BackgroundMaterial",uniforms:os(xn.background.uniforms),vertexShader:xn.background.vertexShader,fragmentShader:xn.background.fragmentShader,side:Hn,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=x,c.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,c.material.toneMapped=qe.getTransfer(x.colorSpace)!==st,x.matrixAutoUpdate===!0&&x.updateMatrix(),c.material.uniforms.uvTransform.value.copy(x.matrix),(d!==x||h!==x.version||f!==o.toneMapping)&&(c.material.needsUpdate=!0,d=x,h=x.version,f=o.toneMapping),c.layers.enableAll(),v.unshift(c,c.geometry,c.material,0,0,null))}function p(v,y){v.getRGB(fr,Bh(o)),n.buffers.color.setClear(fr.r,fr.g,fr.b,y,r)}return{getClearColor:function(){return a},setClearColor:function(v,y=1){a.set(v),l=y,p(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(v){l=v,p(a,l)},render:_,addToRenderList:m}}function Em(o,e){const t=o.getParameter(o.MAX_VERTEX_ATTRIBS),n={},i=h(null);let s=i,r=!1;function a(M,I,L,N,k){let K=!1;const H=d(N,L,I);s!==H&&(s=H,c(s.object)),K=f(M,N,L,k),K&&g(M,N,L,k),k!==null&&e.update(k,o.ELEMENT_ARRAY_BUFFER),(K||r)&&(r=!1,x(M,I,L,N),k!==null&&o.bindBuffer(o.ELEMENT_ARRAY_BUFFER,e.get(k).buffer))}function l(){return o.createVertexArray()}function c(M){return o.bindVertexArray(M)}function u(M){return o.deleteVertexArray(M)}function d(M,I,L){const N=L.wireframe===!0;let k=n[M.id];k===void 0&&(k={},n[M.id]=k);let K=k[I.id];K===void 0&&(K={},k[I.id]=K);let H=K[N];return H===void 0&&(H=h(l()),K[N]=H),H}function h(M){const I=[],L=[],N=[];for(let k=0;k<t;k++)I[k]=0,L[k]=0,N[k]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:I,enabledAttributes:L,attributeDivisors:N,object:M,attributes:{},index:null}}function f(M,I,L,N){const k=s.attributes,K=I.attributes;let H=0;const te=L.getAttributes();for(const q in te)if(te[q].location>=0){const de=k[q];let ve=K[q];if(ve===void 0&&(q==="instanceMatrix"&&M.instanceMatrix&&(ve=M.instanceMatrix),q==="instanceColor"&&M.instanceColor&&(ve=M.instanceColor)),de===void 0||de.attribute!==ve||ve&&de.data!==ve.data)return!0;H++}return s.attributesNum!==H||s.index!==N}function g(M,I,L,N){const k={},K=I.attributes;let H=0;const te=L.getAttributes();for(const q in te)if(te[q].location>=0){let de=K[q];de===void 0&&(q==="instanceMatrix"&&M.instanceMatrix&&(de=M.instanceMatrix),q==="instanceColor"&&M.instanceColor&&(de=M.instanceColor));const ve={};ve.attribute=de,de&&de.data&&(ve.data=de.data),k[q]=ve,H++}s.attributes=k,s.attributesNum=H,s.index=N}function _(){const M=s.newAttributes;for(let I=0,L=M.length;I<L;I++)M[I]=0}function m(M){p(M,0)}function p(M,I){const L=s.newAttributes,N=s.enabledAttributes,k=s.attributeDivisors;L[M]=1,N[M]===0&&(o.enableVertexAttribArray(M),N[M]=1),k[M]!==I&&(o.vertexAttribDivisor(M,I),k[M]=I)}function v(){const M=s.newAttributes,I=s.enabledAttributes;for(let L=0,N=I.length;L<N;L++)I[L]!==M[L]&&(o.disableVertexAttribArray(L),I[L]=0)}function y(M,I,L,N,k,K,H){H===!0?o.vertexAttribIPointer(M,I,L,k,K):o.vertexAttribPointer(M,I,L,N,k,K)}function x(M,I,L,N){_();const k=N.attributes,K=L.getAttributes(),H=I.defaultAttributeValues;for(const te in K){const q=K[te];if(q.location>=0){let re=k[te];if(re===void 0&&(te==="instanceMatrix"&&M.instanceMatrix&&(re=M.instanceMatrix),te==="instanceColor"&&M.instanceColor&&(re=M.instanceColor)),re!==void 0){const de=re.normalized,ve=re.itemSize,Be=e.get(re);if(Be===void 0)continue;const je=Be.buffer,$=Be.type,oe=Be.bytesPerElement,xe=$===o.INT||$===o.UNSIGNED_INT||re.gpuType===Wa;if(re.isInterleavedBufferAttribute){const ue=re.data,Ce=ue.stride,Ne=re.offset;if(ue.isInstancedInterleavedBuffer){for(let Le=0;Le<q.locationSize;Le++)p(q.location+Le,ue.meshPerAttribute);M.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=ue.meshPerAttribute*ue.count)}else for(let Le=0;Le<q.locationSize;Le++)m(q.location+Le);o.bindBuffer(o.ARRAY_BUFFER,je);for(let Le=0;Le<q.locationSize;Le++)y(q.location+Le,ve/q.locationSize,$,de,Ce*oe,(Ne+ve/q.locationSize*Le)*oe,xe)}else{if(re.isInstancedBufferAttribute){for(let ue=0;ue<q.locationSize;ue++)p(q.location+ue,re.meshPerAttribute);M.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=re.meshPerAttribute*re.count)}else for(let ue=0;ue<q.locationSize;ue++)m(q.location+ue);o.bindBuffer(o.ARRAY_BUFFER,je);for(let ue=0;ue<q.locationSize;ue++)y(q.location+ue,ve/q.locationSize,$,de,ve*oe,ve/q.locationSize*ue*oe,xe)}}else if(H!==void 0){const de=H[te];if(de!==void 0)switch(de.length){case 2:o.vertexAttrib2fv(q.location,de);break;case 3:o.vertexAttrib3fv(q.location,de);break;case 4:o.vertexAttrib4fv(q.location,de);break;default:o.vertexAttrib1fv(q.location,de)}}}}v()}function P(){D();for(const M in n){const I=n[M];for(const L in I){const N=I[L];for(const k in N)u(N[k].object),delete N[k];delete I[L]}delete n[M]}}function T(M){if(n[M.id]===void 0)return;const I=n[M.id];for(const L in I){const N=I[L];for(const k in N)u(N[k].object),delete N[k];delete I[L]}delete n[M.id]}function A(M){for(const I in n){const L=n[I];if(L[M.id]===void 0)continue;const N=L[M.id];for(const k in N)u(N[k].object),delete N[k];delete L[M.id]}}function D(){w(),r=!0,s!==i&&(s=i,c(s.object))}function w(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:a,reset:D,resetDefaultState:w,dispose:P,releaseStatesOfGeometry:T,releaseStatesOfProgram:A,initAttributes:_,enableAttribute:m,disableUnusedAttributes:v}}function Am(o,e,t){let n;function i(c){n=c}function s(c,u){o.drawArrays(n,c,u),t.update(u,n,1)}function r(c,u,d){d!==0&&(o.drawArraysInstanced(n,c,u,d),t.update(u,n,d))}function a(c,u,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,u,0,d);let f=0;for(let g=0;g<d;g++)f+=u[g];t.update(f,n,1)}function l(c,u,d,h){if(d===0)return;const f=e.get("WEBGL_multi_draw");if(f===null)for(let g=0;g<c.length;g++)r(c[g],u[g],h[g]);else{f.multiDrawArraysInstancedWEBGL(n,c,0,u,0,h,0,d);let g=0;for(let _=0;_<d;_++)g+=u[_]*h[_];t.update(g,n,1)}}this.setMode=i,this.render=s,this.renderInstances=r,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function Cm(o,e,t,n){let i;function s(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const A=e.get("EXT_texture_filter_anisotropic");i=o.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function r(A){return!(A!==nn&&n.convert(A)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(A){const D=A===Mn&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(A!==Vn&&n.convert(A)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_TYPE)&&A!==dn&&!D)}function l(A){if(A==="highp"){if(o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.HIGH_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.MEDIUM_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const d=t.logarithmicDepthBuffer===!0,h=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),f=o.getParameter(o.MAX_TEXTURE_IMAGE_UNITS),g=o.getParameter(o.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=o.getParameter(o.MAX_TEXTURE_SIZE),m=o.getParameter(o.MAX_CUBE_MAP_TEXTURE_SIZE),p=o.getParameter(o.MAX_VERTEX_ATTRIBS),v=o.getParameter(o.MAX_VERTEX_UNIFORM_VECTORS),y=o.getParameter(o.MAX_VARYING_VECTORS),x=o.getParameter(o.MAX_FRAGMENT_UNIFORM_VECTORS),P=g>0,T=o.getParameter(o.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:r,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:d,reverseDepthBuffer:h,maxTextures:f,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:v,maxVaryings:y,maxFragmentUniforms:x,vertexTextures:P,maxSamples:T}}function Rm(o){const e=this;let t=null,n=0,i=!1,s=!1;const r=new gi,a=new ke,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,h){const f=d.length!==0||h||n!==0||i;return i=h,n=d.length,f},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(d,h){t=u(d,h,0)},this.setState=function(d,h,f){const g=d.clippingPlanes,_=d.clipIntersection,m=d.clipShadows,p=o.get(d);if(!i||g===null||g.length===0||s&&!m)s?u(null):c();else{const v=s?0:n,y=v*4;let x=p.clippingState||null;l.value=x,x=u(g,h,y,f);for(let P=0;P!==y;++P)x[P]=t[P];p.clippingState=x,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=v}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(d,h,f,g){const _=d!==null?d.length:0;let m=null;if(_!==0){if(m=l.value,g!==!0||m===null){const p=f+_*4,v=h.matrixWorldInverse;a.getNormalMatrix(v),(m===null||m.length<p)&&(m=new Float32Array(p));for(let y=0,x=f;y!==_;++y,x+=4)r.copy(d[y]).applyMatrix4(v,a),r.normal.toArray(m,x),m[x+3]=r.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,m}}function Pm(o){let e=new WeakMap;function t(r,a){return a===ta?r.mapping=es:a===na&&(r.mapping=ts),r}function n(r){if(r&&r.isTexture){const a=r.mapping;if(a===ta||a===na)if(e.has(r)){const l=e.get(r).texture;return t(l,r.mapping)}else{const l=r.image;if(l&&l.height>0){const c=new kd(l.height);return c.fromEquirectangularTexture(o,r),e.set(r,c),r.addEventListener("dispose",i),t(c.texture,r.mapping)}else return null}}return r}function i(r){const a=r.target;a.removeEventListener("dispose",i);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:n,dispose:s}}class Yr extends Fh{constructor(e=-1,t=1,n=1,i=-1,s=.1,r=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=s,this.far=r,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,s,r){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let s=n-e,r=n+e,a=i+t,l=i-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,r=s+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,r,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Yi=4,Jl=[.125,.215,.35,.446,.526,.582],xi=20,Mo=new Yr,Ql=new se;let So=null,wo=0,bo=0,To=!1;const _i=(1+Math.sqrt(5))/2,Oi=1/_i,ec=[new E(-_i,Oi,0),new E(_i,Oi,0),new E(-Oi,0,_i),new E(Oi,0,_i),new E(0,_i,-Oi),new E(0,_i,Oi),new E(-1,1,-1),new E(1,1,-1),new E(-1,1,1),new E(1,1,1)];class tc{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100){So=this._renderer.getRenderTarget(),wo=this._renderer.getActiveCubeFace(),bo=this._renderer.getActiveMipmapLevel(),To=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,n,i,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=sc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=ic(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(So,wo,bo),this._renderer.xr.enabled=To,e.scissorTest=!1,pr(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===es||e.mapping===ts?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),So=this._renderer.getRenderTarget(),wo=this._renderer.getActiveCubeFace(),bo=this._renderer.getActiveMipmapLevel(),To=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Zt,minFilter:Zt,generateMipmaps:!1,type:Mn,format:nn,colorSpace:qt,depthBuffer:!1},i=nc(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=nc(e,t,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Lm(s)),this._blurMaterial=Dm(s,e,t)}return i}_compileMaterial(e){const t=new Te(this._lodPlanes[0],e);this._renderer.compile(t,Mo)}_sceneToCubeUV(e,t,n,i){const a=new Gt(90,1,t,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,d=u.autoClear,h=u.toneMapping;u.getClearColor(Ql),u.toneMapping=oi,u.autoClear=!1;const f=new Mt({name:"PMREM.Background",side:Wt,depthWrite:!1,depthTest:!1}),g=new Te(new Si,f);let _=!1;const m=e.background;m?m.isColor&&(f.color.copy(m),e.background=null,_=!0):(f.color.copy(Ql),_=!0);for(let p=0;p<6;p++){const v=p%3;v===0?(a.up.set(0,l[p],0),a.lookAt(c[p],0,0)):v===1?(a.up.set(0,0,l[p]),a.lookAt(0,c[p],0)):(a.up.set(0,l[p],0),a.lookAt(0,0,c[p]));const y=this._cubeSize;pr(i,v*y,p>2?y:0,y,y),u.setRenderTarget(i),_&&u.render(g,a),u.render(e,a)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=h,u.autoClear=d,e.background=m}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===es||e.mapping===ts;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=sc()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=ic());const s=i?this._cubemapMaterial:this._equirectMaterial,r=new Te(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;pr(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(r,Mo)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const i=this._lodPlanes.length;for(let s=1;s<i;s++){const r=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=ec[(i-s-1)%ec.length];this._blur(e,s-1,s,r,a)}t.autoClear=n}_blur(e,t,n,i,s){const r=this._pingPongRenderTarget;this._halfBlur(e,r,t,n,i,"latitudinal",s),this._halfBlur(r,e,n,n,i,"longitudinal",s)}_halfBlur(e,t,n,i,s,r,a){const l=this._renderer,c=this._blurMaterial;r!=="latitudinal"&&r!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,d=new Te(this._lodPlanes[i],c),h=c.uniforms,f=this._sizeLods[n]-1,g=isFinite(s)?Math.PI/(2*f):2*Math.PI/(2*xi-1),_=s/g,m=isFinite(s)?1+Math.floor(u*_):xi;m>xi&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${xi}`);const p=[];let v=0;for(let A=0;A<xi;++A){const D=A/_,w=Math.exp(-D*D/2);p.push(w),A===0?v+=w:A<m&&(v+=2*w)}for(let A=0;A<p.length;A++)p[A]=p[A]/v;h.envMap.value=e.texture,h.samples.value=m,h.weights.value=p,h.latitudinal.value=r==="latitudinal",a&&(h.poleAxis.value=a);const{_lodMax:y}=this;h.dTheta.value=g,h.mipInt.value=y-n;const x=this._sizeLods[i],P=3*x*(i>y-Yi?i-y+Yi:0),T=4*(this._cubeSize-x);pr(t,P,T,3*x,2*x),l.setRenderTarget(t),l.render(d,Mo)}}function Lm(o){const e=[],t=[],n=[];let i=o;const s=o-Yi+1+Jl.length;for(let r=0;r<s;r++){const a=Math.pow(2,i);t.push(a);let l=1/a;r>o-Yi?l=Jl[r-o+Yi-1]:r===0&&(l=0),n.push(l);const c=1/(a-2),u=-c,d=1+c,h=[u,u,d,u,d,d,u,u,d,d,u,d],f=6,g=6,_=3,m=2,p=1,v=new Float32Array(_*g*f),y=new Float32Array(m*g*f),x=new Float32Array(p*g*f);for(let T=0;T<f;T++){const A=T%3*2/3-1,D=T>2?0:-1,w=[A,D,0,A+2/3,D,0,A+2/3,D+1,0,A,D,0,A+2/3,D+1,0,A,D+1,0];v.set(w,_*g*T),y.set(h,m*g*T);const M=[T,T,T,T,T,T];x.set(M,p*g*T)}const P=new wt;P.setAttribute("position",new At(v,_)),P.setAttribute("uv",new At(y,m)),P.setAttribute("faceIndex",new At(x,p)),e.push(P),i>Yi&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function nc(o,e,t){const n=new sn(o,e,t);return n.texture.mapping=Xr,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function pr(o,e,t,n,i){o.viewport.set(e,t,n,i),o.scissor.set(e,t,n,i)}function Dm(o,e,t){const n=new Float32Array(xi),i=new E(0,1,0);return new Tt({name:"SphericalGaussianBlur",defines:{n:xi,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:tl(),fragmentShader:`

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
		`,blending:kn,depthTest:!1,depthWrite:!1})}function ic(){return new Tt({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:tl(),fragmentShader:`

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
		`,blending:kn,depthTest:!1,depthWrite:!1})}function sc(){return new Tt({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:tl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:kn,depthTest:!1,depthWrite:!1})}function tl(){return`

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
	`}function Im(o){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){const l=a.mapping,c=l===ta||l===na,u=l===es||l===ts;if(c||u){let d=e.get(a);const h=d!==void 0?d.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==h)return t===null&&(t=new tc(o)),d=c?t.fromEquirectangular(a,d):t.fromCubemap(a,d),d.texture.pmremVersion=a.pmremVersion,e.set(a,d),d.texture;if(d!==void 0)return d.texture;{const f=a.image;return c&&f&&f.height>0||u&&f&&i(f)?(t===null&&(t=new tc(o)),d=c?t.fromEquirectangular(a):t.fromCubemap(a),d.texture.pmremVersion=a.pmremVersion,e.set(a,d),a.addEventListener("dispose",s),d.texture):null}}}return a}function i(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function r(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:r}}function Nm(o){const e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=o.getExtension("WEBGL_depth_texture")||o.getExtension("MOZ_WEBGL_depth_texture")||o.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=o.getExtension("EXT_texture_filter_anisotropic")||o.getExtension("MOZ_EXT_texture_filter_anisotropic")||o.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=o.getExtension("WEBGL_compressed_texture_s3tc")||o.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=o.getExtension("WEBGL_compressed_texture_pvrtc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=o.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const i=t(n);return i===null&&Ls("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function Um(o,e,t,n){const i={},s=new WeakMap;function r(d){const h=d.target;h.index!==null&&e.remove(h.index);for(const g in h.attributes)e.remove(h.attributes[g]);for(const g in h.morphAttributes){const _=h.morphAttributes[g];for(let m=0,p=_.length;m<p;m++)e.remove(_[m])}h.removeEventListener("dispose",r),delete i[h.id];const f=s.get(h);f&&(e.remove(f),s.delete(h)),n.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,t.memory.geometries--}function a(d,h){return i[h.id]===!0||(h.addEventListener("dispose",r),i[h.id]=!0,t.memory.geometries++),h}function l(d){const h=d.attributes;for(const g in h)e.update(h[g],o.ARRAY_BUFFER);const f=d.morphAttributes;for(const g in f){const _=f[g];for(let m=0,p=_.length;m<p;m++)e.update(_[m],o.ARRAY_BUFFER)}}function c(d){const h=[],f=d.index,g=d.attributes.position;let _=0;if(f!==null){const v=f.array;_=f.version;for(let y=0,x=v.length;y<x;y+=3){const P=v[y+0],T=v[y+1],A=v[y+2];h.push(P,T,T,A,A,P)}}else if(g!==void 0){const v=g.array;_=g.version;for(let y=0,x=v.length/3-1;y<x;y+=3){const P=y+0,T=y+1,A=y+2;h.push(P,T,T,A,A,P)}}else return;const m=new(Ph(h)?Uh:Nh)(h,1);m.version=_;const p=s.get(d);p&&e.remove(p),s.set(d,m)}function u(d){const h=s.get(d);if(h){const f=d.index;f!==null&&h.version<f.version&&c(d)}else c(d);return s.get(d)}return{get:a,update:l,getWireframeAttribute:u}}function Bm(o,e,t){let n;function i(h){n=h}let s,r;function a(h){s=h.type,r=h.bytesPerElement}function l(h,f){o.drawElements(n,f,s,h*r),t.update(f,n,1)}function c(h,f,g){g!==0&&(o.drawElementsInstanced(n,f,s,h*r,g),t.update(f,n,g))}function u(h,f,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,s,h,0,g);let m=0;for(let p=0;p<g;p++)m+=f[p];t.update(m,n,1)}function d(h,f,g,_){if(g===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<h.length;p++)c(h[p]/r,f[p],_[p]);else{m.multiDrawElementsInstancedWEBGL(n,f,0,s,h,0,_,0,g);let p=0;for(let v=0;v<g;v++)p+=f[v]*_[v];t.update(p,n,1)}}this.setMode=i,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=d}function Fm(o){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,r,a){switch(t.calls++,r){case o.TRIANGLES:t.triangles+=a*(s/3);break;case o.LINES:t.lines+=a*(s/2);break;case o.LINE_STRIP:t.lines+=a*(s-1);break;case o.LINE_LOOP:t.lines+=a*s;break;case o.POINTS:t.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",r);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function Om(o,e,t){const n=new WeakMap,i=new Je;function s(r,a,l){const c=r.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=u!==void 0?u.length:0;let h=n.get(a);if(h===void 0||h.count!==d){let w=function(){A.dispose(),n.delete(a),a.removeEventListener("dispose",w)};h!==void 0&&h.texture.dispose();const f=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,_=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],p=a.morphAttributes.normal||[],v=a.morphAttributes.color||[];let y=0;f===!0&&(y=1),g===!0&&(y=2),_===!0&&(y=3);let x=a.attributes.position.count*y,P=1;x>e.maxTextureSize&&(P=Math.ceil(x/e.maxTextureSize),x=e.maxTextureSize);const T=new Float32Array(x*P*4*d),A=new Dh(T,x,P,d);A.type=dn,A.needsUpdate=!0;const D=y*4;for(let M=0;M<d;M++){const I=m[M],L=p[M],N=v[M],k=x*P*4*M;for(let K=0;K<I.count;K++){const H=K*D;f===!0&&(i.fromBufferAttribute(I,K),T[k+H+0]=i.x,T[k+H+1]=i.y,T[k+H+2]=i.z,T[k+H+3]=0),g===!0&&(i.fromBufferAttribute(L,K),T[k+H+4]=i.x,T[k+H+5]=i.y,T[k+H+6]=i.z,T[k+H+7]=0),_===!0&&(i.fromBufferAttribute(N,K),T[k+H+8]=i.x,T[k+H+9]=i.y,T[k+H+10]=i.z,T[k+H+11]=N.itemSize===4?i.w:1)}}h={count:d,texture:A,size:new ae(x,P)},n.set(a,h),a.addEventListener("dispose",w)}if(r.isInstancedMesh===!0&&r.morphTexture!==null)l.getUniforms().setValue(o,"morphTexture",r.morphTexture,t);else{let f=0;for(let _=0;_<c.length;_++)f+=c[_];const g=a.morphTargetsRelative?1:1-f;l.getUniforms().setValue(o,"morphTargetBaseInfluence",g),l.getUniforms().setValue(o,"morphTargetInfluences",c)}l.getUniforms().setValue(o,"morphTargetsTexture",h.texture,t),l.getUniforms().setValue(o,"morphTargetsTextureSize",h.size)}return{update:s}}function zm(o,e,t,n){let i=new WeakMap;function s(l){const c=n.render.frame,u=l.geometry,d=e.get(l,u);if(i.get(d)!==c&&(e.update(d),i.set(d,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),i.get(l)!==c&&(t.update(l.instanceMatrix,o.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,o.ARRAY_BUFFER),i.set(l,c))),l.isSkinnedMesh){const h=l.skeleton;i.get(h)!==c&&(h.update(),i.set(h,c))}return d}function r(){i=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:r}}class kh extends Et{constructor(e,t,n,i,s,r,a,l,c,u=Ki){if(u!==Ki&&u!==ss)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===Ki&&(n=Mi),n===void 0&&u===ss&&(n=is),super(null,i,s,r,a,l,u,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:Xt,this.minFilter=l!==void 0?l:Xt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const Gh=new Et,rc=new kh(1,1),Hh=new Dh,Vh=new Td,Wh=new Oh,oc=[],ac=[],lc=new Float32Array(16),cc=new Float32Array(9),hc=new Float32Array(4);function us(o,e,t){const n=o[0];if(n<=0||n>0)return o;const i=e*t;let s=oc[i];if(s===void 0&&(s=new Float32Array(i),oc[i]=s),e!==0){n.toArray(s,0);for(let r=1,a=0;r!==e;++r)a+=t,o[r].toArray(s,a)}return s}function Ct(o,e){if(o.length!==e.length)return!1;for(let t=0,n=o.length;t<n;t++)if(o[t]!==e[t])return!1;return!0}function Rt(o,e){for(let t=0,n=e.length;t<n;t++)o[t]=e[t]}function jr(o,e){let t=ac[e];t===void 0&&(t=new Int32Array(e),ac[e]=t);for(let n=0;n!==e;++n)t[n]=o.allocateTextureUnit();return t}function km(o,e){const t=this.cache;t[0]!==e&&(o.uniform1f(this.addr,e),t[0]=e)}function Gm(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(o.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ct(t,e))return;o.uniform2fv(this.addr,e),Rt(t,e)}}function Hm(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(o.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(o.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Ct(t,e))return;o.uniform3fv(this.addr,e),Rt(t,e)}}function Vm(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(o.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ct(t,e))return;o.uniform4fv(this.addr,e),Rt(t,e)}}function Wm(o,e){const t=this.cache,n=e.elements;if(n===void 0){if(Ct(t,e))return;o.uniformMatrix2fv(this.addr,!1,e),Rt(t,e)}else{if(Ct(t,n))return;hc.set(n),o.uniformMatrix2fv(this.addr,!1,hc),Rt(t,n)}}function Xm(o,e){const t=this.cache,n=e.elements;if(n===void 0){if(Ct(t,e))return;o.uniformMatrix3fv(this.addr,!1,e),Rt(t,e)}else{if(Ct(t,n))return;cc.set(n),o.uniformMatrix3fv(this.addr,!1,cc),Rt(t,n)}}function qm(o,e){const t=this.cache,n=e.elements;if(n===void 0){if(Ct(t,e))return;o.uniformMatrix4fv(this.addr,!1,e),Rt(t,e)}else{if(Ct(t,n))return;lc.set(n),o.uniformMatrix4fv(this.addr,!1,lc),Rt(t,n)}}function Ym(o,e){const t=this.cache;t[0]!==e&&(o.uniform1i(this.addr,e),t[0]=e)}function jm(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(o.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ct(t,e))return;o.uniform2iv(this.addr,e),Rt(t,e)}}function Km(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(o.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ct(t,e))return;o.uniform3iv(this.addr,e),Rt(t,e)}}function $m(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(o.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ct(t,e))return;o.uniform4iv(this.addr,e),Rt(t,e)}}function Zm(o,e){const t=this.cache;t[0]!==e&&(o.uniform1ui(this.addr,e),t[0]=e)}function Jm(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(o.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ct(t,e))return;o.uniform2uiv(this.addr,e),Rt(t,e)}}function Qm(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(o.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ct(t,e))return;o.uniform3uiv(this.addr,e),Rt(t,e)}}function eg(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(o.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ct(t,e))return;o.uniform4uiv(this.addr,e),Rt(t,e)}}function tg(o,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(o.uniform1i(this.addr,i),n[0]=i);let s;this.type===o.SAMPLER_2D_SHADOW?(rc.compareFunction=Rh,s=rc):s=Gh,t.setTexture2D(e||s,i)}function ng(o,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(o.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||Vh,i)}function ig(o,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(o.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||Wh,i)}function sg(o,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(o.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||Hh,i)}function rg(o){switch(o){case 5126:return km;case 35664:return Gm;case 35665:return Hm;case 35666:return Vm;case 35674:return Wm;case 35675:return Xm;case 35676:return qm;case 5124:case 35670:return Ym;case 35667:case 35671:return jm;case 35668:case 35672:return Km;case 35669:case 35673:return $m;case 5125:return Zm;case 36294:return Jm;case 36295:return Qm;case 36296:return eg;case 35678:case 36198:case 36298:case 36306:case 35682:return tg;case 35679:case 36299:case 36307:return ng;case 35680:case 36300:case 36308:case 36293:return ig;case 36289:case 36303:case 36311:case 36292:return sg}}function og(o,e){o.uniform1fv(this.addr,e)}function ag(o,e){const t=us(e,this.size,2);o.uniform2fv(this.addr,t)}function lg(o,e){const t=us(e,this.size,3);o.uniform3fv(this.addr,t)}function cg(o,e){const t=us(e,this.size,4);o.uniform4fv(this.addr,t)}function hg(o,e){const t=us(e,this.size,4);o.uniformMatrix2fv(this.addr,!1,t)}function ug(o,e){const t=us(e,this.size,9);o.uniformMatrix3fv(this.addr,!1,t)}function dg(o,e){const t=us(e,this.size,16);o.uniformMatrix4fv(this.addr,!1,t)}function fg(o,e){o.uniform1iv(this.addr,e)}function pg(o,e){o.uniform2iv(this.addr,e)}function mg(o,e){o.uniform3iv(this.addr,e)}function gg(o,e){o.uniform4iv(this.addr,e)}function _g(o,e){o.uniform1uiv(this.addr,e)}function vg(o,e){o.uniform2uiv(this.addr,e)}function xg(o,e){o.uniform3uiv(this.addr,e)}function yg(o,e){o.uniform4uiv(this.addr,e)}function Mg(o,e,t){const n=this.cache,i=e.length,s=jr(t,i);Ct(n,s)||(o.uniform1iv(this.addr,s),Rt(n,s));for(let r=0;r!==i;++r)t.setTexture2D(e[r]||Gh,s[r])}function Sg(o,e,t){const n=this.cache,i=e.length,s=jr(t,i);Ct(n,s)||(o.uniform1iv(this.addr,s),Rt(n,s));for(let r=0;r!==i;++r)t.setTexture3D(e[r]||Vh,s[r])}function wg(o,e,t){const n=this.cache,i=e.length,s=jr(t,i);Ct(n,s)||(o.uniform1iv(this.addr,s),Rt(n,s));for(let r=0;r!==i;++r)t.setTextureCube(e[r]||Wh,s[r])}function bg(o,e,t){const n=this.cache,i=e.length,s=jr(t,i);Ct(n,s)||(o.uniform1iv(this.addr,s),Rt(n,s));for(let r=0;r!==i;++r)t.setTexture2DArray(e[r]||Hh,s[r])}function Tg(o){switch(o){case 5126:return og;case 35664:return ag;case 35665:return lg;case 35666:return cg;case 35674:return hg;case 35675:return ug;case 35676:return dg;case 5124:case 35670:return fg;case 35667:case 35671:return pg;case 35668:case 35672:return mg;case 35669:case 35673:return gg;case 5125:return _g;case 36294:return vg;case 36295:return xg;case 36296:return yg;case 35678:case 36198:case 36298:case 36306:case 35682:return Mg;case 35679:case 36299:case 36307:return Sg;case 35680:case 36300:case 36308:case 36293:return wg;case 36289:case 36303:case 36311:case 36292:return bg}}class Eg{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=rg(t.type)}}class Ag{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Tg(t.type)}}class Cg{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let s=0,r=i.length;s!==r;++s){const a=i[s];a.setValue(e,t[a.id],n)}}}const Eo=/(\w+)(\])?(\[|\.)?/g;function uc(o,e){o.seq.push(e),o.map[e.id]=e}function Rg(o,e,t){const n=o.name,i=n.length;for(Eo.lastIndex=0;;){const s=Eo.exec(n),r=Eo.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&r+2===i){uc(t,c===void 0?new Eg(a,o,e):new Ag(a,o,e));break}else{let d=t.map[a];d===void 0&&(d=new Cg(a),uc(t,d)),t=d}}}class Fr{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const s=e.getActiveUniform(t,i),r=e.getUniformLocation(t,s.name);Rg(s,r,this)}}setValue(e,t,n,i){const s=this.map[t];s!==void 0&&s.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let s=0,r=t.length;s!==r;++s){const a=t[s],l=n[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,s=e.length;i!==s;++i){const r=e[i];r.id in t&&n.push(r)}return n}}function dc(o,e,t){const n=o.createShader(e);return o.shaderSource(n,t),o.compileShader(n),n}const Pg=37297;let Lg=0;function Dg(o,e){const t=o.split(`
`),n=[],i=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let r=i;r<s;r++){const a=r+1;n.push(`${a===e?">":" "} ${a}: ${t[r]}`)}return n.join(`
`)}const fc=new ke;function Ig(o){qe._getMatrix(fc,qe.workingColorSpace,o);const e=`mat3( ${fc.elements.map(t=>t.toFixed(4))} )`;switch(qe.getTransfer(o)){case qr:return[e,"LinearTransferOETF"];case st:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",o),[e,"LinearTransferOETF"]}}function pc(o,e,t){const n=o.getShaderParameter(e,o.COMPILE_STATUS),i=o.getShaderInfoLog(e).trim();if(n&&i==="")return"";const s=/ERROR: 0:(\d+)/.exec(i);if(s){const r=parseInt(s[1]);return t.toUpperCase()+`

`+i+`

`+Dg(o.getShaderSource(e),r)}else return i}function Ng(o,e){const t=Ig(e);return[`vec4 ${o}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function Ug(o,e){let t;switch(e){case uh:t="Linear";break;case dh:t="Reinhard";break;case fh:t="Cineon";break;case Va:t="ACESFilmic";break;case ph:t="AgX";break;case mh:t="Neutral";break;case Fu:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+o+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const mr=new E;function Bg(){qe.getLuminanceCoefficients(mr);const o=mr.x.toFixed(4),e=mr.y.toFixed(4),t=mr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${o}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Fg(o){return[o.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",o.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ds).join(`
`)}function Og(o){const e=[];for(const t in o){const n=o[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function zg(o,e){const t={},n=o.getProgramParameter(e,o.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const s=o.getActiveAttrib(e,i),r=s.name;let a=1;s.type===o.FLOAT_MAT2&&(a=2),s.type===o.FLOAT_MAT3&&(a=3),s.type===o.FLOAT_MAT4&&(a=4),t[r]={type:s.type,location:o.getAttribLocation(e,r),locationSize:a}}return t}function Ds(o){return o!==""}function mc(o,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return o.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function gc(o,e){return o.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const kg=/^[ \t]*#include +<([\w\d./]+)>/gm;function La(o){return o.replace(kg,Hg)}const Gg=new Map;function Hg(o,e){let t=Ve[e];if(t===void 0){const n=Gg.get(e);if(n!==void 0)t=Ve[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return La(t)}const Vg=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function _c(o){return o.replace(Vg,Wg)}function Wg(o,e,t,n){let i="";for(let s=parseInt(e);s<parseInt(t);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function vc(o){let e=`precision ${o.precision} float;
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
#define LOW_PRECISION`),e}function Xg(o){let e="SHADOWMAP_TYPE_BASIC";return o.shadowMapType===lh?e="SHADOWMAP_TYPE_PCF":o.shadowMapType===ch?e="SHADOWMAP_TYPE_PCF_SOFT":o.shadowMapType===Bn&&(e="SHADOWMAP_TYPE_VSM"),e}function qg(o){let e="ENVMAP_TYPE_CUBE";if(o.envMap)switch(o.envMapMode){case es:case ts:e="ENVMAP_TYPE_CUBE";break;case Xr:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Yg(o){let e="ENVMAP_MODE_REFLECTION";if(o.envMap)switch(o.envMapMode){case ts:e="ENVMAP_MODE_REFRACTION";break}return e}function jg(o){let e="ENVMAP_BLENDING_NONE";if(o.envMap)switch(o.combine){case hh:e="ENVMAP_BLENDING_MULTIPLY";break;case Uu:e="ENVMAP_BLENDING_MIX";break;case Bu:e="ENVMAP_BLENDING_ADD";break}return e}function Kg(o){const e=o.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function $g(o,e,t,n){const i=o.getContext(),s=t.defines;let r=t.vertexShader,a=t.fragmentShader;const l=Xg(t),c=qg(t),u=Yg(t),d=jg(t),h=Kg(t),f=Fg(t),g=Og(s),_=i.createProgram();let m,p,v=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Ds).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Ds).join(`
`),p.length>0&&(p+=`
`)):(m=[vc(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ds).join(`
`),p=[vc(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+d:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==oi?"#define TONE_MAPPING":"",t.toneMapping!==oi?Ve.tonemapping_pars_fragment:"",t.toneMapping!==oi?Ug("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ve.colorspace_pars_fragment,Ng("linearToOutputTexel",t.outputColorSpace),Bg(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Ds).join(`
`)),r=La(r),r=mc(r,t),r=gc(r,t),a=La(a),a=mc(a,t),a=gc(a,t),r=_c(r),a=_c(a),t.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",t.glslVersion===Pl?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Pl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const y=v+m+r,x=v+p+a,P=dc(i,i.VERTEX_SHADER,y),T=dc(i,i.FRAGMENT_SHADER,x);i.attachShader(_,P),i.attachShader(_,T),t.index0AttributeName!==void 0?i.bindAttribLocation(_,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(_,0,"position"),i.linkProgram(_);function A(I){if(o.debug.checkShaderErrors){const L=i.getProgramInfoLog(_).trim(),N=i.getShaderInfoLog(P).trim(),k=i.getShaderInfoLog(T).trim();let K=!0,H=!0;if(i.getProgramParameter(_,i.LINK_STATUS)===!1)if(K=!1,typeof o.debug.onShaderError=="function")o.debug.onShaderError(i,_,P,T);else{const te=pc(i,P,"vertex"),q=pc(i,T,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(_,i.VALIDATE_STATUS)+`

Material Name: `+I.name+`
Material Type: `+I.type+`

Program Info Log: `+L+`
`+te+`
`+q)}else L!==""?console.warn("THREE.WebGLProgram: Program Info Log:",L):(N===""||k==="")&&(H=!1);H&&(I.diagnostics={runnable:K,programLog:L,vertexShader:{log:N,prefix:m},fragmentShader:{log:k,prefix:p}})}i.deleteShader(P),i.deleteShader(T),D=new Fr(i,_),w=zg(i,_)}let D;this.getUniforms=function(){return D===void 0&&A(this),D};let w;this.getAttributes=function(){return w===void 0&&A(this),w};let M=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=i.getProgramParameter(_,Pg)),M},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Lg++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=P,this.fragmentShader=T,this}let Zg=0;class Jg{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),s=this._getShaderStage(n),r=this._getShaderCacheForMaterial(e);return r.has(i)===!1&&(r.add(i),i.usedTimes++),r.has(s)===!1&&(r.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new Qg(e),t.set(e,n)),n}}class Qg{constructor(e){this.id=Zg++,this.code=e,this.usedTimes=0}}function e0(o,e,t,n,i,s,r){const a=new Qa,l=new Jg,c=new Set,u=[],d=i.logarithmicDepthBuffer,h=i.vertexTextures;let f=i.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(w){return c.add(w),w===0?"uv":`uv${w}`}function m(w,M,I,L,N){const k=L.fog,K=N.geometry,H=w.isMeshStandardMaterial?L.environment:null,te=(w.isMeshStandardMaterial?t:e).get(w.envMap||H),q=te&&te.mapping===Xr?te.image.height:null,re=g[w.type];w.precision!==null&&(f=i.getMaxPrecision(w.precision),f!==w.precision&&console.warn("THREE.WebGLProgram.getParameters:",w.precision,"not supported, using",f,"instead."));const de=K.morphAttributes.position||K.morphAttributes.normal||K.morphAttributes.color,ve=de!==void 0?de.length:0;let Be=0;K.morphAttributes.position!==void 0&&(Be=1),K.morphAttributes.normal!==void 0&&(Be=2),K.morphAttributes.color!==void 0&&(Be=3);let je,$,oe,xe;if(re){const it=xn[re];je=it.vertexShader,$=it.fragmentShader}else je=w.vertexShader,$=w.fragmentShader,l.update(w),oe=l.getVertexShaderID(w),xe=l.getFragmentShaderID(w);const ue=o.getRenderTarget(),Ce=o.state.buffers.depth.getReversed(),Ne=N.isInstancedMesh===!0,Le=N.isBatchedMesh===!0,lt=!!w.map,Pe=!!w.matcap,mt=!!te,z=!!w.aoMap,Ke=!!w.lightMap,Ge=!!w.bumpMap,He=!!w.normalMap,ye=!!w.displacementMap,nt=!!w.emissiveMap,Ee=!!w.metalnessMap,C=!!w.roughnessMap,S=w.anisotropy>0,R=w.clearcoat>0,B=w.dispersion>0,G=w.iridescence>0,X=w.sheen>0,ce=w.transmission>0,J=S&&!!w.anisotropyMap,ne=R&&!!w.clearcoatMap,Re=R&&!!w.clearcoatNormalMap,j=R&&!!w.clearcoatRoughnessMap,ee=G&&!!w.iridescenceMap,_e=G&&!!w.iridescenceThicknessMap,Ae=X&&!!w.sheenColorMap,ie=X&&!!w.sheenRoughnessMap,Xe=!!w.specularMap,Fe=!!w.specularColorMap,ht=!!w.specularIntensityMap,U=ce&&!!w.transmissionMap,fe=ce&&!!w.thicknessMap,Y=!!w.gradientMap,Z=!!w.alphaMap,ge=w.alphaTest>0,pe=!!w.alphaHash,Oe=!!w.extensions;let gt=oi;w.toneMapped&&(ue===null||ue.isXRRenderTarget===!0)&&(gt=o.toneMapping);const Nt={shaderID:re,shaderType:w.type,shaderName:w.name,vertexShader:je,fragmentShader:$,defines:w.defines,customVertexShaderID:oe,customFragmentShaderID:xe,isRawShaderMaterial:w.isRawShaderMaterial===!0,glslVersion:w.glslVersion,precision:f,batching:Le,batchingColor:Le&&N._colorsTexture!==null,instancing:Ne,instancingColor:Ne&&N.instanceColor!==null,instancingMorph:Ne&&N.morphTexture!==null,supportsVertexTextures:h,outputColorSpace:ue===null?o.outputColorSpace:ue.isXRRenderTarget===!0?ue.texture.colorSpace:qt,alphaToCoverage:!!w.alphaToCoverage,map:lt,matcap:Pe,envMap:mt,envMapMode:mt&&te.mapping,envMapCubeUVHeight:q,aoMap:z,lightMap:Ke,bumpMap:Ge,normalMap:He,displacementMap:h&&ye,emissiveMap:nt,normalMapObjectSpace:He&&w.normalMapType===qu,normalMapTangentSpace:He&&w.normalMapType===Ch,metalnessMap:Ee,roughnessMap:C,anisotropy:S,anisotropyMap:J,clearcoat:R,clearcoatMap:ne,clearcoatNormalMap:Re,clearcoatRoughnessMap:j,dispersion:B,iridescence:G,iridescenceMap:ee,iridescenceThicknessMap:_e,sheen:X,sheenColorMap:Ae,sheenRoughnessMap:ie,specularMap:Xe,specularColorMap:Fe,specularIntensityMap:ht,transmission:ce,transmissionMap:U,thicknessMap:fe,gradientMap:Y,opaque:w.transparent===!1&&w.blending===ri&&w.alphaToCoverage===!1,alphaMap:Z,alphaTest:ge,alphaHash:pe,combine:w.combine,mapUv:lt&&_(w.map.channel),aoMapUv:z&&_(w.aoMap.channel),lightMapUv:Ke&&_(w.lightMap.channel),bumpMapUv:Ge&&_(w.bumpMap.channel),normalMapUv:He&&_(w.normalMap.channel),displacementMapUv:ye&&_(w.displacementMap.channel),emissiveMapUv:nt&&_(w.emissiveMap.channel),metalnessMapUv:Ee&&_(w.metalnessMap.channel),roughnessMapUv:C&&_(w.roughnessMap.channel),anisotropyMapUv:J&&_(w.anisotropyMap.channel),clearcoatMapUv:ne&&_(w.clearcoatMap.channel),clearcoatNormalMapUv:Re&&_(w.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:j&&_(w.clearcoatRoughnessMap.channel),iridescenceMapUv:ee&&_(w.iridescenceMap.channel),iridescenceThicknessMapUv:_e&&_(w.iridescenceThicknessMap.channel),sheenColorMapUv:Ae&&_(w.sheenColorMap.channel),sheenRoughnessMapUv:ie&&_(w.sheenRoughnessMap.channel),specularMapUv:Xe&&_(w.specularMap.channel),specularColorMapUv:Fe&&_(w.specularColorMap.channel),specularIntensityMapUv:ht&&_(w.specularIntensityMap.channel),transmissionMapUv:U&&_(w.transmissionMap.channel),thicknessMapUv:fe&&_(w.thicknessMap.channel),alphaMapUv:Z&&_(w.alphaMap.channel),vertexTangents:!!K.attributes.tangent&&(He||S),vertexColors:w.vertexColors,vertexAlphas:w.vertexColors===!0&&!!K.attributes.color&&K.attributes.color.itemSize===4,pointsUvs:N.isPoints===!0&&!!K.attributes.uv&&(lt||Z),fog:!!k,useFog:w.fog===!0,fogExp2:!!k&&k.isFogExp2,flatShading:w.flatShading===!0,sizeAttenuation:w.sizeAttenuation===!0,logarithmicDepthBuffer:d,reverseDepthBuffer:Ce,skinning:N.isSkinnedMesh===!0,morphTargets:K.morphAttributes.position!==void 0,morphNormals:K.morphAttributes.normal!==void 0,morphColors:K.morphAttributes.color!==void 0,morphTargetsCount:ve,morphTextureStride:Be,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:w.dithering,shadowMapEnabled:o.shadowMap.enabled&&I.length>0,shadowMapType:o.shadowMap.type,toneMapping:gt,decodeVideoTexture:lt&&w.map.isVideoTexture===!0&&qe.getTransfer(w.map.colorSpace)===st,decodeVideoTextureEmissive:nt&&w.emissiveMap.isVideoTexture===!0&&qe.getTransfer(w.emissiveMap.colorSpace)===st,premultipliedAlpha:w.premultipliedAlpha,doubleSided:w.side===vt,flipSided:w.side===Wt,useDepthPacking:w.depthPacking>=0,depthPacking:w.depthPacking||0,index0AttributeName:w.index0AttributeName,extensionClipCullDistance:Oe&&w.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Oe&&w.extensions.multiDraw===!0||Le)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:w.customProgramCacheKey()};return Nt.vertexUv1s=c.has(1),Nt.vertexUv2s=c.has(2),Nt.vertexUv3s=c.has(3),c.clear(),Nt}function p(w){const M=[];if(w.shaderID?M.push(w.shaderID):(M.push(w.customVertexShaderID),M.push(w.customFragmentShaderID)),w.defines!==void 0)for(const I in w.defines)M.push(I),M.push(w.defines[I]);return w.isRawShaderMaterial===!1&&(v(M,w),y(M,w),M.push(o.outputColorSpace)),M.push(w.customProgramCacheKey),M.join()}function v(w,M){w.push(M.precision),w.push(M.outputColorSpace),w.push(M.envMapMode),w.push(M.envMapCubeUVHeight),w.push(M.mapUv),w.push(M.alphaMapUv),w.push(M.lightMapUv),w.push(M.aoMapUv),w.push(M.bumpMapUv),w.push(M.normalMapUv),w.push(M.displacementMapUv),w.push(M.emissiveMapUv),w.push(M.metalnessMapUv),w.push(M.roughnessMapUv),w.push(M.anisotropyMapUv),w.push(M.clearcoatMapUv),w.push(M.clearcoatNormalMapUv),w.push(M.clearcoatRoughnessMapUv),w.push(M.iridescenceMapUv),w.push(M.iridescenceThicknessMapUv),w.push(M.sheenColorMapUv),w.push(M.sheenRoughnessMapUv),w.push(M.specularMapUv),w.push(M.specularColorMapUv),w.push(M.specularIntensityMapUv),w.push(M.transmissionMapUv),w.push(M.thicknessMapUv),w.push(M.combine),w.push(M.fogExp2),w.push(M.sizeAttenuation),w.push(M.morphTargetsCount),w.push(M.morphAttributeCount),w.push(M.numDirLights),w.push(M.numPointLights),w.push(M.numSpotLights),w.push(M.numSpotLightMaps),w.push(M.numHemiLights),w.push(M.numRectAreaLights),w.push(M.numDirLightShadows),w.push(M.numPointLightShadows),w.push(M.numSpotLightShadows),w.push(M.numSpotLightShadowsWithMaps),w.push(M.numLightProbes),w.push(M.shadowMapType),w.push(M.toneMapping),w.push(M.numClippingPlanes),w.push(M.numClipIntersection),w.push(M.depthPacking)}function y(w,M){a.disableAll(),M.supportsVertexTextures&&a.enable(0),M.instancing&&a.enable(1),M.instancingColor&&a.enable(2),M.instancingMorph&&a.enable(3),M.matcap&&a.enable(4),M.envMap&&a.enable(5),M.normalMapObjectSpace&&a.enable(6),M.normalMapTangentSpace&&a.enable(7),M.clearcoat&&a.enable(8),M.iridescence&&a.enable(9),M.alphaTest&&a.enable(10),M.vertexColors&&a.enable(11),M.vertexAlphas&&a.enable(12),M.vertexUv1s&&a.enable(13),M.vertexUv2s&&a.enable(14),M.vertexUv3s&&a.enable(15),M.vertexTangents&&a.enable(16),M.anisotropy&&a.enable(17),M.alphaHash&&a.enable(18),M.batching&&a.enable(19),M.dispersion&&a.enable(20),M.batchingColor&&a.enable(21),w.push(a.mask),a.disableAll(),M.fog&&a.enable(0),M.useFog&&a.enable(1),M.flatShading&&a.enable(2),M.logarithmicDepthBuffer&&a.enable(3),M.reverseDepthBuffer&&a.enable(4),M.skinning&&a.enable(5),M.morphTargets&&a.enable(6),M.morphNormals&&a.enable(7),M.morphColors&&a.enable(8),M.premultipliedAlpha&&a.enable(9),M.shadowMapEnabled&&a.enable(10),M.doubleSided&&a.enable(11),M.flipSided&&a.enable(12),M.useDepthPacking&&a.enable(13),M.dithering&&a.enable(14),M.transmission&&a.enable(15),M.sheen&&a.enable(16),M.opaque&&a.enable(17),M.pointsUvs&&a.enable(18),M.decodeVideoTexture&&a.enable(19),M.decodeVideoTextureEmissive&&a.enable(20),M.alphaToCoverage&&a.enable(21),w.push(a.mask)}function x(w){const M=g[w.type];let I;if(M){const L=xn[M];I=Hs.clone(L.uniforms)}else I=w.uniforms;return I}function P(w,M){let I;for(let L=0,N=u.length;L<N;L++){const k=u[L];if(k.cacheKey===M){I=k,++I.usedTimes;break}}return I===void 0&&(I=new $g(o,M,w,s),u.push(I)),I}function T(w){if(--w.usedTimes===0){const M=u.indexOf(w);u[M]=u[u.length-1],u.pop(),w.destroy()}}function A(w){l.remove(w)}function D(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:x,acquireProgram:P,releaseProgram:T,releaseShaderCache:A,programs:u,dispose:D}}function t0(){let o=new WeakMap;function e(r){return o.has(r)}function t(r){let a=o.get(r);return a===void 0&&(a={},o.set(r,a)),a}function n(r){o.delete(r)}function i(r,a,l){o.get(r)[a]=l}function s(){o=new WeakMap}return{has:e,get:t,remove:n,update:i,dispose:s}}function n0(o,e){return o.groupOrder!==e.groupOrder?o.groupOrder-e.groupOrder:o.renderOrder!==e.renderOrder?o.renderOrder-e.renderOrder:o.material.id!==e.material.id?o.material.id-e.material.id:o.z!==e.z?o.z-e.z:o.id-e.id}function xc(o,e){return o.groupOrder!==e.groupOrder?o.groupOrder-e.groupOrder:o.renderOrder!==e.renderOrder?o.renderOrder-e.renderOrder:o.z!==e.z?e.z-o.z:o.id-e.id}function yc(){const o=[];let e=0;const t=[],n=[],i=[];function s(){e=0,t.length=0,n.length=0,i.length=0}function r(d,h,f,g,_,m){let p=o[e];return p===void 0?(p={id:d.id,object:d,geometry:h,material:f,groupOrder:g,renderOrder:d.renderOrder,z:_,group:m},o[e]=p):(p.id=d.id,p.object=d,p.geometry=h,p.material=f,p.groupOrder=g,p.renderOrder=d.renderOrder,p.z=_,p.group=m),e++,p}function a(d,h,f,g,_,m){const p=r(d,h,f,g,_,m);f.transmission>0?n.push(p):f.transparent===!0?i.push(p):t.push(p)}function l(d,h,f,g,_,m){const p=r(d,h,f,g,_,m);f.transmission>0?n.unshift(p):f.transparent===!0?i.unshift(p):t.unshift(p)}function c(d,h){t.length>1&&t.sort(d||n0),n.length>1&&n.sort(h||xc),i.length>1&&i.sort(h||xc)}function u(){for(let d=e,h=o.length;d<h;d++){const f=o[d];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:t,transmissive:n,transparent:i,init:s,push:a,unshift:l,finish:u,sort:c}}function i0(){let o=new WeakMap;function e(n,i){const s=o.get(n);let r;return s===void 0?(r=new yc,o.set(n,[r])):i>=s.length?(r=new yc,s.push(r)):r=s[i],r}function t(){o=new WeakMap}return{get:e,dispose:t}}function s0(){const o={};return{get:function(e){if(o[e.id]!==void 0)return o[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new E,color:new se};break;case"SpotLight":t={position:new E,direction:new E,color:new se,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new E,color:new se,distance:0,decay:0};break;case"HemisphereLight":t={direction:new E,skyColor:new se,groundColor:new se};break;case"RectAreaLight":t={color:new se,position:new E,halfWidth:new E,halfHeight:new E};break}return o[e.id]=t,t}}}function r0(){const o={};return{get:function(e){if(o[e.id]!==void 0)return o[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ae};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ae};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ae,shadowCameraNear:1,shadowCameraFar:1e3};break}return o[e.id]=t,t}}}let o0=0;function a0(o,e){return(e.castShadow?2:0)-(o.castShadow?2:0)+(e.map?1:0)-(o.map?1:0)}function l0(o){const e=new s0,t=r0(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new E);const i=new E,s=new Ie,r=new Ie;function a(c){let u=0,d=0,h=0;for(let w=0;w<9;w++)n.probe[w].set(0,0,0);let f=0,g=0,_=0,m=0,p=0,v=0,y=0,x=0,P=0,T=0,A=0;c.sort(a0);for(let w=0,M=c.length;w<M;w++){const I=c[w],L=I.color,N=I.intensity,k=I.distance,K=I.shadow&&I.shadow.map?I.shadow.map.texture:null;if(I.isAmbientLight)u+=L.r*N,d+=L.g*N,h+=L.b*N;else if(I.isLightProbe){for(let H=0;H<9;H++)n.probe[H].addScaledVector(I.sh.coefficients[H],N);A++}else if(I.isDirectionalLight){const H=e.get(I);if(H.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){const te=I.shadow,q=t.get(I);q.shadowIntensity=te.intensity,q.shadowBias=te.bias,q.shadowNormalBias=te.normalBias,q.shadowRadius=te.radius,q.shadowMapSize=te.mapSize,n.directionalShadow[f]=q,n.directionalShadowMap[f]=K,n.directionalShadowMatrix[f]=I.shadow.matrix,v++}n.directional[f]=H,f++}else if(I.isSpotLight){const H=e.get(I);H.position.setFromMatrixPosition(I.matrixWorld),H.color.copy(L).multiplyScalar(N),H.distance=k,H.coneCos=Math.cos(I.angle),H.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),H.decay=I.decay,n.spot[_]=H;const te=I.shadow;if(I.map&&(n.spotLightMap[P]=I.map,P++,te.updateMatrices(I),I.castShadow&&T++),n.spotLightMatrix[_]=te.matrix,I.castShadow){const q=t.get(I);q.shadowIntensity=te.intensity,q.shadowBias=te.bias,q.shadowNormalBias=te.normalBias,q.shadowRadius=te.radius,q.shadowMapSize=te.mapSize,n.spotShadow[_]=q,n.spotShadowMap[_]=K,x++}_++}else if(I.isRectAreaLight){const H=e.get(I);H.color.copy(L).multiplyScalar(N),H.halfWidth.set(I.width*.5,0,0),H.halfHeight.set(0,I.height*.5,0),n.rectArea[m]=H,m++}else if(I.isPointLight){const H=e.get(I);if(H.color.copy(I.color).multiplyScalar(I.intensity),H.distance=I.distance,H.decay=I.decay,I.castShadow){const te=I.shadow,q=t.get(I);q.shadowIntensity=te.intensity,q.shadowBias=te.bias,q.shadowNormalBias=te.normalBias,q.shadowRadius=te.radius,q.shadowMapSize=te.mapSize,q.shadowCameraNear=te.camera.near,q.shadowCameraFar=te.camera.far,n.pointShadow[g]=q,n.pointShadowMap[g]=K,n.pointShadowMatrix[g]=I.shadow.matrix,y++}n.point[g]=H,g++}else if(I.isHemisphereLight){const H=e.get(I);H.skyColor.copy(I.color).multiplyScalar(N),H.groundColor.copy(I.groundColor).multiplyScalar(N),n.hemi[p]=H,p++}}m>0&&(o.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=he.LTC_FLOAT_1,n.rectAreaLTC2=he.LTC_FLOAT_2):(n.rectAreaLTC1=he.LTC_HALF_1,n.rectAreaLTC2=he.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=d,n.ambient[2]=h;const D=n.hash;(D.directionalLength!==f||D.pointLength!==g||D.spotLength!==_||D.rectAreaLength!==m||D.hemiLength!==p||D.numDirectionalShadows!==v||D.numPointShadows!==y||D.numSpotShadows!==x||D.numSpotMaps!==P||D.numLightProbes!==A)&&(n.directional.length=f,n.spot.length=_,n.rectArea.length=m,n.point.length=g,n.hemi.length=p,n.directionalShadow.length=v,n.directionalShadowMap.length=v,n.pointShadow.length=y,n.pointShadowMap.length=y,n.spotShadow.length=x,n.spotShadowMap.length=x,n.directionalShadowMatrix.length=v,n.pointShadowMatrix.length=y,n.spotLightMatrix.length=x+P-T,n.spotLightMap.length=P,n.numSpotLightShadowsWithMaps=T,n.numLightProbes=A,D.directionalLength=f,D.pointLength=g,D.spotLength=_,D.rectAreaLength=m,D.hemiLength=p,D.numDirectionalShadows=v,D.numPointShadows=y,D.numSpotShadows=x,D.numSpotMaps=P,D.numLightProbes=A,n.version=o0++)}function l(c,u){let d=0,h=0,f=0,g=0,_=0;const m=u.matrixWorldInverse;for(let p=0,v=c.length;p<v;p++){const y=c[p];if(y.isDirectionalLight){const x=n.directional[d];x.direction.setFromMatrixPosition(y.matrixWorld),i.setFromMatrixPosition(y.target.matrixWorld),x.direction.sub(i),x.direction.transformDirection(m),d++}else if(y.isSpotLight){const x=n.spot[f];x.position.setFromMatrixPosition(y.matrixWorld),x.position.applyMatrix4(m),x.direction.setFromMatrixPosition(y.matrixWorld),i.setFromMatrixPosition(y.target.matrixWorld),x.direction.sub(i),x.direction.transformDirection(m),f++}else if(y.isRectAreaLight){const x=n.rectArea[g];x.position.setFromMatrixPosition(y.matrixWorld),x.position.applyMatrix4(m),r.identity(),s.copy(y.matrixWorld),s.premultiply(m),r.extractRotation(s),x.halfWidth.set(y.width*.5,0,0),x.halfHeight.set(0,y.height*.5,0),x.halfWidth.applyMatrix4(r),x.halfHeight.applyMatrix4(r),g++}else if(y.isPointLight){const x=n.point[h];x.position.setFromMatrixPosition(y.matrixWorld),x.position.applyMatrix4(m),h++}else if(y.isHemisphereLight){const x=n.hemi[_];x.direction.setFromMatrixPosition(y.matrixWorld),x.direction.transformDirection(m),_++}}}return{setup:a,setupView:l,state:n}}function Mc(o){const e=new l0(o),t=[],n=[];function i(u){c.camera=u,t.length=0,n.length=0}function s(u){t.push(u)}function r(u){n.push(u)}function a(){e.setup(t)}function l(u){e.setupView(t,u)}const c={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:i,state:c,setupLights:a,setupLightsView:l,pushLight:s,pushShadow:r}}function c0(o){let e=new WeakMap;function t(i,s=0){const r=e.get(i);let a;return r===void 0?(a=new Mc(o),e.set(i,[a])):s>=r.length?(a=new Mc(o),r.push(a)):a=r[s],a}function n(){e=new WeakMap}return{get:t,dispose:n}}class h0 extends mn{static get type(){return"MeshDepthMaterial"}constructor(e){super(),this.isMeshDepthMaterial=!0,this.depthPacking=Wu,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class u0 extends mn{static get type(){return"MeshDistanceMaterial"}constructor(e){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const d0=`void main() {
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
}`;function p0(o,e,t){let n=new el;const i=new ae,s=new ae,r=new Je,a=new h0({depthPacking:Xu}),l=new u0,c={},u=t.maxTextureSize,d={[Hn]:Wt,[Wt]:Hn,[vt]:vt},h=new Tt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ae},radius:{value:4}},vertexShader:d0,fragmentShader:f0}),f=h.clone();f.defines.HORIZONTAL_PASS=1;const g=new wt;g.setAttribute("position",new At(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new Te(g,h),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=lh;let p=this.type;this.render=function(T,A,D){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||T.length===0)return;const w=o.getRenderTarget(),M=o.getActiveCubeFace(),I=o.getActiveMipmapLevel(),L=o.state;L.setBlending(kn),L.buffers.color.setClear(1,1,1,1),L.buffers.depth.setTest(!0),L.setScissorTest(!1);const N=p!==Bn&&this.type===Bn,k=p===Bn&&this.type!==Bn;for(let K=0,H=T.length;K<H;K++){const te=T[K],q=te.shadow;if(q===void 0){console.warn("THREE.WebGLShadowMap:",te,"has no shadow.");continue}if(q.autoUpdate===!1&&q.needsUpdate===!1)continue;i.copy(q.mapSize);const re=q.getFrameExtents();if(i.multiply(re),s.copy(q.mapSize),(i.x>u||i.y>u)&&(i.x>u&&(s.x=Math.floor(u/re.x),i.x=s.x*re.x,q.mapSize.x=s.x),i.y>u&&(s.y=Math.floor(u/re.y),i.y=s.y*re.y,q.mapSize.y=s.y)),q.map===null||N===!0||k===!0){const ve=this.type!==Bn?{minFilter:Xt,magFilter:Xt}:{};q.map!==null&&q.map.dispose(),q.map=new sn(i.x,i.y,ve),q.map.texture.name=te.name+".shadowMap",q.camera.updateProjectionMatrix()}o.setRenderTarget(q.map),o.clear();const de=q.getViewportCount();for(let ve=0;ve<de;ve++){const Be=q.getViewport(ve);r.set(s.x*Be.x,s.y*Be.y,s.x*Be.z,s.y*Be.w),L.viewport(r),q.updateMatrices(te,ve),n=q.getFrustum(),x(A,D,q.camera,te,this.type)}q.isPointLightShadow!==!0&&this.type===Bn&&v(q,D),q.needsUpdate=!1}p=this.type,m.needsUpdate=!1,o.setRenderTarget(w,M,I)};function v(T,A){const D=e.update(_);h.defines.VSM_SAMPLES!==T.blurSamples&&(h.defines.VSM_SAMPLES=T.blurSamples,f.defines.VSM_SAMPLES=T.blurSamples,h.needsUpdate=!0,f.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new sn(i.x,i.y)),h.uniforms.shadow_pass.value=T.map.texture,h.uniforms.resolution.value=T.mapSize,h.uniforms.radius.value=T.radius,o.setRenderTarget(T.mapPass),o.clear(),o.renderBufferDirect(A,null,D,h,_,null),f.uniforms.shadow_pass.value=T.mapPass.texture,f.uniforms.resolution.value=T.mapSize,f.uniforms.radius.value=T.radius,o.setRenderTarget(T.map),o.clear(),o.renderBufferDirect(A,null,D,f,_,null)}function y(T,A,D,w){let M=null;const I=D.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(I!==void 0)M=I;else if(M=D.isPointLight===!0?l:a,o.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0){const L=M.uuid,N=A.uuid;let k=c[L];k===void 0&&(k={},c[L]=k);let K=k[N];K===void 0&&(K=M.clone(),k[N]=K,A.addEventListener("dispose",P)),M=K}if(M.visible=A.visible,M.wireframe=A.wireframe,w===Bn?M.side=A.shadowSide!==null?A.shadowSide:A.side:M.side=A.shadowSide!==null?A.shadowSide:d[A.side],M.alphaMap=A.alphaMap,M.alphaTest=A.alphaTest,M.map=A.map,M.clipShadows=A.clipShadows,M.clippingPlanes=A.clippingPlanes,M.clipIntersection=A.clipIntersection,M.displacementMap=A.displacementMap,M.displacementScale=A.displacementScale,M.displacementBias=A.displacementBias,M.wireframeLinewidth=A.wireframeLinewidth,M.linewidth=A.linewidth,D.isPointLight===!0&&M.isMeshDistanceMaterial===!0){const L=o.properties.get(M);L.light=D}return M}function x(T,A,D,w,M){if(T.visible===!1)return;if(T.layers.test(A.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&M===Bn)&&(!T.frustumCulled||n.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(D.matrixWorldInverse,T.matrixWorld);const N=e.update(T),k=T.material;if(Array.isArray(k)){const K=N.groups;for(let H=0,te=K.length;H<te;H++){const q=K[H],re=k[q.materialIndex];if(re&&re.visible){const de=y(T,re,w,M);T.onBeforeShadow(o,T,A,D,N,de,q),o.renderBufferDirect(D,null,N,de,T,q),T.onAfterShadow(o,T,A,D,N,de,q)}}}else if(k.visible){const K=y(T,k,w,M);T.onBeforeShadow(o,T,A,D,N,K,null),o.renderBufferDirect(D,null,N,K,T,null),T.onAfterShadow(o,T,A,D,N,K,null)}}const L=T.children;for(let N=0,k=L.length;N<k;N++)x(L[N],A,D,w,M)}function P(T){T.target.removeEventListener("dispose",P);for(const D in c){const w=c[D],M=T.target.uuid;M in w&&(w[M].dispose(),delete w[M])}}}const m0={[jo]:Ko,[$o]:Qo,[Zo]:ea,[Qi]:Jo,[Ko]:jo,[Qo]:$o,[ea]:Zo,[Jo]:Qi};function g0(o,e){function t(){let U=!1;const fe=new Je;let Y=null;const Z=new Je(0,0,0,0);return{setMask:function(ge){Y!==ge&&!U&&(o.colorMask(ge,ge,ge,ge),Y=ge)},setLocked:function(ge){U=ge},setClear:function(ge,pe,Oe,gt,Nt){Nt===!0&&(ge*=gt,pe*=gt,Oe*=gt),fe.set(ge,pe,Oe,gt),Z.equals(fe)===!1&&(o.clearColor(ge,pe,Oe,gt),Z.copy(fe))},reset:function(){U=!1,Y=null,Z.set(-1,0,0,0)}}}function n(){let U=!1,fe=!1,Y=null,Z=null,ge=null;return{setReversed:function(pe){if(fe!==pe){const Oe=e.get("EXT_clip_control");fe?Oe.clipControlEXT(Oe.LOWER_LEFT_EXT,Oe.ZERO_TO_ONE_EXT):Oe.clipControlEXT(Oe.LOWER_LEFT_EXT,Oe.NEGATIVE_ONE_TO_ONE_EXT);const gt=ge;ge=null,this.setClear(gt)}fe=pe},getReversed:function(){return fe},setTest:function(pe){pe?ue(o.DEPTH_TEST):Ce(o.DEPTH_TEST)},setMask:function(pe){Y!==pe&&!U&&(o.depthMask(pe),Y=pe)},setFunc:function(pe){if(fe&&(pe=m0[pe]),Z!==pe){switch(pe){case jo:o.depthFunc(o.NEVER);break;case Ko:o.depthFunc(o.ALWAYS);break;case $o:o.depthFunc(o.LESS);break;case Qi:o.depthFunc(o.LEQUAL);break;case Zo:o.depthFunc(o.EQUAL);break;case Jo:o.depthFunc(o.GEQUAL);break;case Qo:o.depthFunc(o.GREATER);break;case ea:o.depthFunc(o.NOTEQUAL);break;default:o.depthFunc(o.LEQUAL)}Z=pe}},setLocked:function(pe){U=pe},setClear:function(pe){ge!==pe&&(fe&&(pe=1-pe),o.clearDepth(pe),ge=pe)},reset:function(){U=!1,Y=null,Z=null,ge=null,fe=!1}}}function i(){let U=!1,fe=null,Y=null,Z=null,ge=null,pe=null,Oe=null,gt=null,Nt=null;return{setTest:function(it){U||(it?ue(o.STENCIL_TEST):Ce(o.STENCIL_TEST))},setMask:function(it){fe!==it&&!U&&(o.stencilMask(it),fe=it)},setFunc:function(it,on,En){(Y!==it||Z!==on||ge!==En)&&(o.stencilFunc(it,on,En),Y=it,Z=on,ge=En)},setOp:function(it,on,En){(pe!==it||Oe!==on||gt!==En)&&(o.stencilOp(it,on,En),pe=it,Oe=on,gt=En)},setLocked:function(it){U=it},setClear:function(it){Nt!==it&&(o.clearStencil(it),Nt=it)},reset:function(){U=!1,fe=null,Y=null,Z=null,ge=null,pe=null,Oe=null,gt=null,Nt=null}}}const s=new t,r=new n,a=new i,l=new WeakMap,c=new WeakMap;let u={},d={},h=new WeakMap,f=[],g=null,_=!1,m=null,p=null,v=null,y=null,x=null,P=null,T=null,A=new se(0,0,0),D=0,w=!1,M=null,I=null,L=null,N=null,k=null;const K=o.getParameter(o.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let H=!1,te=0;const q=o.getParameter(o.VERSION);q.indexOf("WebGL")!==-1?(te=parseFloat(/^WebGL (\d)/.exec(q)[1]),H=te>=1):q.indexOf("OpenGL ES")!==-1&&(te=parseFloat(/^OpenGL ES (\d)/.exec(q)[1]),H=te>=2);let re=null,de={};const ve=o.getParameter(o.SCISSOR_BOX),Be=o.getParameter(o.VIEWPORT),je=new Je().fromArray(ve),$=new Je().fromArray(Be);function oe(U,fe,Y,Z){const ge=new Uint8Array(4),pe=o.createTexture();o.bindTexture(U,pe),o.texParameteri(U,o.TEXTURE_MIN_FILTER,o.NEAREST),o.texParameteri(U,o.TEXTURE_MAG_FILTER,o.NEAREST);for(let Oe=0;Oe<Y;Oe++)U===o.TEXTURE_3D||U===o.TEXTURE_2D_ARRAY?o.texImage3D(fe,0,o.RGBA,1,1,Z,0,o.RGBA,o.UNSIGNED_BYTE,ge):o.texImage2D(fe+Oe,0,o.RGBA,1,1,0,o.RGBA,o.UNSIGNED_BYTE,ge);return pe}const xe={};xe[o.TEXTURE_2D]=oe(o.TEXTURE_2D,o.TEXTURE_2D,1),xe[o.TEXTURE_CUBE_MAP]=oe(o.TEXTURE_CUBE_MAP,o.TEXTURE_CUBE_MAP_POSITIVE_X,6),xe[o.TEXTURE_2D_ARRAY]=oe(o.TEXTURE_2D_ARRAY,o.TEXTURE_2D_ARRAY,1,1),xe[o.TEXTURE_3D]=oe(o.TEXTURE_3D,o.TEXTURE_3D,1,1),s.setClear(0,0,0,1),r.setClear(1),a.setClear(0),ue(o.DEPTH_TEST),r.setFunc(Qi),Ge(!1),He(Tl),ue(o.CULL_FACE),z(kn);function ue(U){u[U]!==!0&&(o.enable(U),u[U]=!0)}function Ce(U){u[U]!==!1&&(o.disable(U),u[U]=!1)}function Ne(U,fe){return d[U]!==fe?(o.bindFramebuffer(U,fe),d[U]=fe,U===o.DRAW_FRAMEBUFFER&&(d[o.FRAMEBUFFER]=fe),U===o.FRAMEBUFFER&&(d[o.DRAW_FRAMEBUFFER]=fe),!0):!1}function Le(U,fe){let Y=f,Z=!1;if(U){Y=h.get(fe),Y===void 0&&(Y=[],h.set(fe,Y));const ge=U.textures;if(Y.length!==ge.length||Y[0]!==o.COLOR_ATTACHMENT0){for(let pe=0,Oe=ge.length;pe<Oe;pe++)Y[pe]=o.COLOR_ATTACHMENT0+pe;Y.length=ge.length,Z=!0}}else Y[0]!==o.BACK&&(Y[0]=o.BACK,Z=!0);Z&&o.drawBuffers(Y)}function lt(U){return g!==U?(o.useProgram(U),g=U,!0):!1}const Pe={[vi]:o.FUNC_ADD,[vu]:o.FUNC_SUBTRACT,[xu]:o.FUNC_REVERSE_SUBTRACT};Pe[yu]=o.MIN,Pe[Mu]=o.MAX;const mt={[Su]:o.ZERO,[wu]:o.ONE,[bu]:o.SRC_COLOR,[qo]:o.SRC_ALPHA,[Pu]:o.SRC_ALPHA_SATURATE,[Cu]:o.DST_COLOR,[Eu]:o.DST_ALPHA,[Tu]:o.ONE_MINUS_SRC_COLOR,[Yo]:o.ONE_MINUS_SRC_ALPHA,[Ru]:o.ONE_MINUS_DST_COLOR,[Au]:o.ONE_MINUS_DST_ALPHA,[Lu]:o.CONSTANT_COLOR,[Du]:o.ONE_MINUS_CONSTANT_COLOR,[Iu]:o.CONSTANT_ALPHA,[Nu]:o.ONE_MINUS_CONSTANT_ALPHA};function z(U,fe,Y,Z,ge,pe,Oe,gt,Nt,it){if(U===kn){_===!0&&(Ce(o.BLEND),_=!1);return}if(_===!1&&(ue(o.BLEND),_=!0),U!==_u){if(U!==m||it!==w){if((p!==vi||x!==vi)&&(o.blendEquation(o.FUNC_ADD),p=vi,x=vi),it)switch(U){case ri:o.blendFuncSeparate(o.ONE,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case Ji:o.blendFunc(o.ONE,o.ONE);break;case El:o.blendFuncSeparate(o.ZERO,o.ONE_MINUS_SRC_COLOR,o.ZERO,o.ONE);break;case Al:o.blendFuncSeparate(o.ZERO,o.SRC_COLOR,o.ZERO,o.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}else switch(U){case ri:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case Ji:o.blendFunc(o.SRC_ALPHA,o.ONE);break;case El:o.blendFuncSeparate(o.ZERO,o.ONE_MINUS_SRC_COLOR,o.ZERO,o.ONE);break;case Al:o.blendFunc(o.ZERO,o.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}v=null,y=null,P=null,T=null,A.set(0,0,0),D=0,m=U,w=it}return}ge=ge||fe,pe=pe||Y,Oe=Oe||Z,(fe!==p||ge!==x)&&(o.blendEquationSeparate(Pe[fe],Pe[ge]),p=fe,x=ge),(Y!==v||Z!==y||pe!==P||Oe!==T)&&(o.blendFuncSeparate(mt[Y],mt[Z],mt[pe],mt[Oe]),v=Y,y=Z,P=pe,T=Oe),(gt.equals(A)===!1||Nt!==D)&&(o.blendColor(gt.r,gt.g,gt.b,Nt),A.copy(gt),D=Nt),m=U,w=!1}function Ke(U,fe){U.side===vt?Ce(o.CULL_FACE):ue(o.CULL_FACE);let Y=U.side===Wt;fe&&(Y=!Y),Ge(Y),U.blending===ri&&U.transparent===!1?z(kn):z(U.blending,U.blendEquation,U.blendSrc,U.blendDst,U.blendEquationAlpha,U.blendSrcAlpha,U.blendDstAlpha,U.blendColor,U.blendAlpha,U.premultipliedAlpha),r.setFunc(U.depthFunc),r.setTest(U.depthTest),r.setMask(U.depthWrite),s.setMask(U.colorWrite);const Z=U.stencilWrite;a.setTest(Z),Z&&(a.setMask(U.stencilWriteMask),a.setFunc(U.stencilFunc,U.stencilRef,U.stencilFuncMask),a.setOp(U.stencilFail,U.stencilZFail,U.stencilZPass)),nt(U.polygonOffset,U.polygonOffsetFactor,U.polygonOffsetUnits),U.alphaToCoverage===!0?ue(o.SAMPLE_ALPHA_TO_COVERAGE):Ce(o.SAMPLE_ALPHA_TO_COVERAGE)}function Ge(U){M!==U&&(U?o.frontFace(o.CW):o.frontFace(o.CCW),M=U)}function He(U){U!==mu?(ue(o.CULL_FACE),U!==I&&(U===Tl?o.cullFace(o.BACK):U===gu?o.cullFace(o.FRONT):o.cullFace(o.FRONT_AND_BACK))):Ce(o.CULL_FACE),I=U}function ye(U){U!==L&&(H&&o.lineWidth(U),L=U)}function nt(U,fe,Y){U?(ue(o.POLYGON_OFFSET_FILL),(N!==fe||k!==Y)&&(o.polygonOffset(fe,Y),N=fe,k=Y)):Ce(o.POLYGON_OFFSET_FILL)}function Ee(U){U?ue(o.SCISSOR_TEST):Ce(o.SCISSOR_TEST)}function C(U){U===void 0&&(U=o.TEXTURE0+K-1),re!==U&&(o.activeTexture(U),re=U)}function S(U,fe,Y){Y===void 0&&(re===null?Y=o.TEXTURE0+K-1:Y=re);let Z=de[Y];Z===void 0&&(Z={type:void 0,texture:void 0},de[Y]=Z),(Z.type!==U||Z.texture!==fe)&&(re!==Y&&(o.activeTexture(Y),re=Y),o.bindTexture(U,fe||xe[U]),Z.type=U,Z.texture=fe)}function R(){const U=de[re];U!==void 0&&U.type!==void 0&&(o.bindTexture(U.type,null),U.type=void 0,U.texture=void 0)}function B(){try{o.compressedTexImage2D.apply(o,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function G(){try{o.compressedTexImage3D.apply(o,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function X(){try{o.texSubImage2D.apply(o,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function ce(){try{o.texSubImage3D.apply(o,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function J(){try{o.compressedTexSubImage2D.apply(o,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function ne(){try{o.compressedTexSubImage3D.apply(o,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Re(){try{o.texStorage2D.apply(o,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function j(){try{o.texStorage3D.apply(o,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function ee(){try{o.texImage2D.apply(o,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function _e(){try{o.texImage3D.apply(o,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Ae(U){je.equals(U)===!1&&(o.scissor(U.x,U.y,U.z,U.w),je.copy(U))}function ie(U){$.equals(U)===!1&&(o.viewport(U.x,U.y,U.z,U.w),$.copy(U))}function Xe(U,fe){let Y=c.get(fe);Y===void 0&&(Y=new WeakMap,c.set(fe,Y));let Z=Y.get(U);Z===void 0&&(Z=o.getUniformBlockIndex(fe,U.name),Y.set(U,Z))}function Fe(U,fe){const Z=c.get(fe).get(U);l.get(fe)!==Z&&(o.uniformBlockBinding(fe,Z,U.__bindingPointIndex),l.set(fe,Z))}function ht(){o.disable(o.BLEND),o.disable(o.CULL_FACE),o.disable(o.DEPTH_TEST),o.disable(o.POLYGON_OFFSET_FILL),o.disable(o.SCISSOR_TEST),o.disable(o.STENCIL_TEST),o.disable(o.SAMPLE_ALPHA_TO_COVERAGE),o.blendEquation(o.FUNC_ADD),o.blendFunc(o.ONE,o.ZERO),o.blendFuncSeparate(o.ONE,o.ZERO,o.ONE,o.ZERO),o.blendColor(0,0,0,0),o.colorMask(!0,!0,!0,!0),o.clearColor(0,0,0,0),o.depthMask(!0),o.depthFunc(o.LESS),r.setReversed(!1),o.clearDepth(1),o.stencilMask(4294967295),o.stencilFunc(o.ALWAYS,0,4294967295),o.stencilOp(o.KEEP,o.KEEP,o.KEEP),o.clearStencil(0),o.cullFace(o.BACK),o.frontFace(o.CCW),o.polygonOffset(0,0),o.activeTexture(o.TEXTURE0),o.bindFramebuffer(o.FRAMEBUFFER,null),o.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),o.bindFramebuffer(o.READ_FRAMEBUFFER,null),o.useProgram(null),o.lineWidth(1),o.scissor(0,0,o.canvas.width,o.canvas.height),o.viewport(0,0,o.canvas.width,o.canvas.height),u={},re=null,de={},d={},h=new WeakMap,f=[],g=null,_=!1,m=null,p=null,v=null,y=null,x=null,P=null,T=null,A=new se(0,0,0),D=0,w=!1,M=null,I=null,L=null,N=null,k=null,je.set(0,0,o.canvas.width,o.canvas.height),$.set(0,0,o.canvas.width,o.canvas.height),s.reset(),r.reset(),a.reset()}return{buffers:{color:s,depth:r,stencil:a},enable:ue,disable:Ce,bindFramebuffer:Ne,drawBuffers:Le,useProgram:lt,setBlending:z,setMaterial:Ke,setFlipSided:Ge,setCullFace:He,setLineWidth:ye,setPolygonOffset:nt,setScissorTest:Ee,activeTexture:C,bindTexture:S,unbindTexture:R,compressedTexImage2D:B,compressedTexImage3D:G,texImage2D:ee,texImage3D:_e,updateUBOMapping:Xe,uniformBlockBinding:Fe,texStorage2D:Re,texStorage3D:j,texSubImage2D:X,texSubImage3D:ce,compressedTexSubImage2D:J,compressedTexSubImage3D:ne,scissor:Ae,viewport:ie,reset:ht}}function Sc(o,e,t,n){const i=_0(n);switch(t){case Mh:return o*e;case wh:return o*e;case bh:return o*e*2;case Ya:return o*e/i.components*i.byteLength;case ja:return o*e/i.components*i.byteLength;case Th:return o*e*2/i.components*i.byteLength;case Ka:return o*e*2/i.components*i.byteLength;case Sh:return o*e*3/i.components*i.byteLength;case nn:return o*e*4/i.components*i.byteLength;case $a:return o*e*4/i.components*i.byteLength;case Dr:case Ir:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*8;case Nr:case Ur:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case sa:case oa:return Math.max(o,16)*Math.max(e,8)/4;case ia:case ra:return Math.max(o,8)*Math.max(e,8)/2;case aa:case la:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*8;case ca:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case ha:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case ua:return Math.floor((o+4)/5)*Math.floor((e+3)/4)*16;case da:return Math.floor((o+4)/5)*Math.floor((e+4)/5)*16;case fa:return Math.floor((o+5)/6)*Math.floor((e+4)/5)*16;case pa:return Math.floor((o+5)/6)*Math.floor((e+5)/6)*16;case ma:return Math.floor((o+7)/8)*Math.floor((e+4)/5)*16;case ga:return Math.floor((o+7)/8)*Math.floor((e+5)/6)*16;case _a:return Math.floor((o+7)/8)*Math.floor((e+7)/8)*16;case va:return Math.floor((o+9)/10)*Math.floor((e+4)/5)*16;case xa:return Math.floor((o+9)/10)*Math.floor((e+5)/6)*16;case ya:return Math.floor((o+9)/10)*Math.floor((e+7)/8)*16;case Ma:return Math.floor((o+9)/10)*Math.floor((e+9)/10)*16;case Sa:return Math.floor((o+11)/12)*Math.floor((e+9)/10)*16;case wa:return Math.floor((o+11)/12)*Math.floor((e+11)/12)*16;case Br:case ba:case Ta:return Math.ceil(o/4)*Math.ceil(e/4)*16;case Eh:case Ea:return Math.ceil(o/4)*Math.ceil(e/4)*8;case Aa:case Ca:return Math.ceil(o/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function _0(o){switch(o){case Vn:case vh:return{byteLength:1,components:1};case Os:case xh:case Mn:return{byteLength:2,components:1};case Xa:case qa:return{byteLength:2,components:4};case Mi:case Wa:case dn:return{byteLength:4,components:1};case yh:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${o}.`)}function v0(o,e,t,n,i,s,r){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new ae,u=new WeakMap;let d;const h=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(C,S){return f?new OffscreenCanvas(C,S):Gs("canvas")}function _(C,S,R){let B=1;const G=Ee(C);if((G.width>R||G.height>R)&&(B=R/Math.max(G.width,G.height)),B<1)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap||typeof VideoFrame<"u"&&C instanceof VideoFrame){const X=Math.floor(B*G.width),ce=Math.floor(B*G.height);d===void 0&&(d=g(X,ce));const J=S?g(X,ce):d;return J.width=X,J.height=ce,J.getContext("2d").drawImage(C,0,0,X,ce),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+G.width+"x"+G.height+") to ("+X+"x"+ce+")."),J}else return"data"in C&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+G.width+"x"+G.height+")."),C;return C}function m(C){return C.generateMipmaps}function p(C){o.generateMipmap(C)}function v(C){return C.isWebGLCubeRenderTarget?o.TEXTURE_CUBE_MAP:C.isWebGL3DRenderTarget?o.TEXTURE_3D:C.isWebGLArrayRenderTarget||C.isCompressedArrayTexture?o.TEXTURE_2D_ARRAY:o.TEXTURE_2D}function y(C,S,R,B,G=!1){if(C!==null){if(o[C]!==void 0)return o[C];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let X=S;if(S===o.RED&&(R===o.FLOAT&&(X=o.R32F),R===o.HALF_FLOAT&&(X=o.R16F),R===o.UNSIGNED_BYTE&&(X=o.R8)),S===o.RED_INTEGER&&(R===o.UNSIGNED_BYTE&&(X=o.R8UI),R===o.UNSIGNED_SHORT&&(X=o.R16UI),R===o.UNSIGNED_INT&&(X=o.R32UI),R===o.BYTE&&(X=o.R8I),R===o.SHORT&&(X=o.R16I),R===o.INT&&(X=o.R32I)),S===o.RG&&(R===o.FLOAT&&(X=o.RG32F),R===o.HALF_FLOAT&&(X=o.RG16F),R===o.UNSIGNED_BYTE&&(X=o.RG8)),S===o.RG_INTEGER&&(R===o.UNSIGNED_BYTE&&(X=o.RG8UI),R===o.UNSIGNED_SHORT&&(X=o.RG16UI),R===o.UNSIGNED_INT&&(X=o.RG32UI),R===o.BYTE&&(X=o.RG8I),R===o.SHORT&&(X=o.RG16I),R===o.INT&&(X=o.RG32I)),S===o.RGB_INTEGER&&(R===o.UNSIGNED_BYTE&&(X=o.RGB8UI),R===o.UNSIGNED_SHORT&&(X=o.RGB16UI),R===o.UNSIGNED_INT&&(X=o.RGB32UI),R===o.BYTE&&(X=o.RGB8I),R===o.SHORT&&(X=o.RGB16I),R===o.INT&&(X=o.RGB32I)),S===o.RGBA_INTEGER&&(R===o.UNSIGNED_BYTE&&(X=o.RGBA8UI),R===o.UNSIGNED_SHORT&&(X=o.RGBA16UI),R===o.UNSIGNED_INT&&(X=o.RGBA32UI),R===o.BYTE&&(X=o.RGBA8I),R===o.SHORT&&(X=o.RGBA16I),R===o.INT&&(X=o.RGBA32I)),S===o.RGB&&R===o.UNSIGNED_INT_5_9_9_9_REV&&(X=o.RGB9_E5),S===o.RGBA){const ce=G?qr:qe.getTransfer(B);R===o.FLOAT&&(X=o.RGBA32F),R===o.HALF_FLOAT&&(X=o.RGBA16F),R===o.UNSIGNED_BYTE&&(X=ce===st?o.SRGB8_ALPHA8:o.RGBA8),R===o.UNSIGNED_SHORT_4_4_4_4&&(X=o.RGBA4),R===o.UNSIGNED_SHORT_5_5_5_1&&(X=o.RGB5_A1)}return(X===o.R16F||X===o.R32F||X===o.RG16F||X===o.RG32F||X===o.RGBA16F||X===o.RGBA32F)&&e.get("EXT_color_buffer_float"),X}function x(C,S){let R;return C?S===null||S===Mi||S===is?R=o.DEPTH24_STENCIL8:S===dn?R=o.DEPTH32F_STENCIL8:S===Os&&(R=o.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):S===null||S===Mi||S===is?R=o.DEPTH_COMPONENT24:S===dn?R=o.DEPTH_COMPONENT32F:S===Os&&(R=o.DEPTH_COMPONENT16),R}function P(C,S){return m(C)===!0||C.isFramebufferTexture&&C.minFilter!==Xt&&C.minFilter!==Zt?Math.log2(Math.max(S.width,S.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?S.mipmaps.length:1}function T(C){const S=C.target;S.removeEventListener("dispose",T),D(S),S.isVideoTexture&&u.delete(S)}function A(C){const S=C.target;S.removeEventListener("dispose",A),M(S)}function D(C){const S=n.get(C);if(S.__webglInit===void 0)return;const R=C.source,B=h.get(R);if(B){const G=B[S.__cacheKey];G.usedTimes--,G.usedTimes===0&&w(C),Object.keys(B).length===0&&h.delete(R)}n.remove(C)}function w(C){const S=n.get(C);o.deleteTexture(S.__webglTexture);const R=C.source,B=h.get(R);delete B[S.__cacheKey],r.memory.textures--}function M(C){const S=n.get(C);if(C.depthTexture&&(C.depthTexture.dispose(),n.remove(C.depthTexture)),C.isWebGLCubeRenderTarget)for(let B=0;B<6;B++){if(Array.isArray(S.__webglFramebuffer[B]))for(let G=0;G<S.__webglFramebuffer[B].length;G++)o.deleteFramebuffer(S.__webglFramebuffer[B][G]);else o.deleteFramebuffer(S.__webglFramebuffer[B]);S.__webglDepthbuffer&&o.deleteRenderbuffer(S.__webglDepthbuffer[B])}else{if(Array.isArray(S.__webglFramebuffer))for(let B=0;B<S.__webglFramebuffer.length;B++)o.deleteFramebuffer(S.__webglFramebuffer[B]);else o.deleteFramebuffer(S.__webglFramebuffer);if(S.__webglDepthbuffer&&o.deleteRenderbuffer(S.__webglDepthbuffer),S.__webglMultisampledFramebuffer&&o.deleteFramebuffer(S.__webglMultisampledFramebuffer),S.__webglColorRenderbuffer)for(let B=0;B<S.__webglColorRenderbuffer.length;B++)S.__webglColorRenderbuffer[B]&&o.deleteRenderbuffer(S.__webglColorRenderbuffer[B]);S.__webglDepthRenderbuffer&&o.deleteRenderbuffer(S.__webglDepthRenderbuffer)}const R=C.textures;for(let B=0,G=R.length;B<G;B++){const X=n.get(R[B]);X.__webglTexture&&(o.deleteTexture(X.__webglTexture),r.memory.textures--),n.remove(R[B])}n.remove(C)}let I=0;function L(){I=0}function N(){const C=I;return C>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+C+" texture units while this GPU supports only "+i.maxTextures),I+=1,C}function k(C){const S=[];return S.push(C.wrapS),S.push(C.wrapT),S.push(C.wrapR||0),S.push(C.magFilter),S.push(C.minFilter),S.push(C.anisotropy),S.push(C.internalFormat),S.push(C.format),S.push(C.type),S.push(C.generateMipmaps),S.push(C.premultiplyAlpha),S.push(C.flipY),S.push(C.unpackAlignment),S.push(C.colorSpace),S.join()}function K(C,S){const R=n.get(C);if(C.isVideoTexture&&ye(C),C.isRenderTargetTexture===!1&&C.version>0&&R.__version!==C.version){const B=C.image;if(B===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(B.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{$(R,C,S);return}}t.bindTexture(o.TEXTURE_2D,R.__webglTexture,o.TEXTURE0+S)}function H(C,S){const R=n.get(C);if(C.version>0&&R.__version!==C.version){$(R,C,S);return}t.bindTexture(o.TEXTURE_2D_ARRAY,R.__webglTexture,o.TEXTURE0+S)}function te(C,S){const R=n.get(C);if(C.version>0&&R.__version!==C.version){$(R,C,S);return}t.bindTexture(o.TEXTURE_3D,R.__webglTexture,o.TEXTURE0+S)}function q(C,S){const R=n.get(C);if(C.version>0&&R.__version!==C.version){oe(R,C,S);return}t.bindTexture(o.TEXTURE_CUBE_MAP,R.__webglTexture,o.TEXTURE0+S)}const re={[ns]:o.REPEAT,[ii]:o.CLAMP_TO_EDGE,[Or]:o.MIRRORED_REPEAT},de={[Xt]:o.NEAREST,[_h]:o.NEAREST_MIPMAP_NEAREST,[Ps]:o.NEAREST_MIPMAP_LINEAR,[Zt]:o.LINEAR,[Lr]:o.LINEAR_MIPMAP_NEAREST,[On]:o.LINEAR_MIPMAP_LINEAR},ve={[Yu]:o.NEVER,[Qu]:o.ALWAYS,[ju]:o.LESS,[Rh]:o.LEQUAL,[Ku]:o.EQUAL,[Ju]:o.GEQUAL,[$u]:o.GREATER,[Zu]:o.NOTEQUAL};function Be(C,S){if(S.type===dn&&e.has("OES_texture_float_linear")===!1&&(S.magFilter===Zt||S.magFilter===Lr||S.magFilter===Ps||S.magFilter===On||S.minFilter===Zt||S.minFilter===Lr||S.minFilter===Ps||S.minFilter===On)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),o.texParameteri(C,o.TEXTURE_WRAP_S,re[S.wrapS]),o.texParameteri(C,o.TEXTURE_WRAP_T,re[S.wrapT]),(C===o.TEXTURE_3D||C===o.TEXTURE_2D_ARRAY)&&o.texParameteri(C,o.TEXTURE_WRAP_R,re[S.wrapR]),o.texParameteri(C,o.TEXTURE_MAG_FILTER,de[S.magFilter]),o.texParameteri(C,o.TEXTURE_MIN_FILTER,de[S.minFilter]),S.compareFunction&&(o.texParameteri(C,o.TEXTURE_COMPARE_MODE,o.COMPARE_REF_TO_TEXTURE),o.texParameteri(C,o.TEXTURE_COMPARE_FUNC,ve[S.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(S.magFilter===Xt||S.minFilter!==Ps&&S.minFilter!==On||S.type===dn&&e.has("OES_texture_float_linear")===!1)return;if(S.anisotropy>1||n.get(S).__currentAnisotropy){const R=e.get("EXT_texture_filter_anisotropic");o.texParameterf(C,R.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,i.getMaxAnisotropy())),n.get(S).__currentAnisotropy=S.anisotropy}}}function je(C,S){let R=!1;C.__webglInit===void 0&&(C.__webglInit=!0,S.addEventListener("dispose",T));const B=S.source;let G=h.get(B);G===void 0&&(G={},h.set(B,G));const X=k(S);if(X!==C.__cacheKey){G[X]===void 0&&(G[X]={texture:o.createTexture(),usedTimes:0},r.memory.textures++,R=!0),G[X].usedTimes++;const ce=G[C.__cacheKey];ce!==void 0&&(G[C.__cacheKey].usedTimes--,ce.usedTimes===0&&w(S)),C.__cacheKey=X,C.__webglTexture=G[X].texture}return R}function $(C,S,R){let B=o.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(B=o.TEXTURE_2D_ARRAY),S.isData3DTexture&&(B=o.TEXTURE_3D);const G=je(C,S),X=S.source;t.bindTexture(B,C.__webglTexture,o.TEXTURE0+R);const ce=n.get(X);if(X.version!==ce.__version||G===!0){t.activeTexture(o.TEXTURE0+R);const J=qe.getPrimaries(qe.workingColorSpace),ne=S.colorSpace===ni?null:qe.getPrimaries(S.colorSpace),Re=S.colorSpace===ni||J===ne?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,S.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,S.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,Re);let j=_(S.image,!1,i.maxTextureSize);j=nt(S,j);const ee=s.convert(S.format,S.colorSpace),_e=s.convert(S.type);let Ae=y(S.internalFormat,ee,_e,S.colorSpace,S.isVideoTexture);Be(B,S);let ie;const Xe=S.mipmaps,Fe=S.isVideoTexture!==!0,ht=ce.__version===void 0||G===!0,U=X.dataReady,fe=P(S,j);if(S.isDepthTexture)Ae=x(S.format===ss,S.type),ht&&(Fe?t.texStorage2D(o.TEXTURE_2D,1,Ae,j.width,j.height):t.texImage2D(o.TEXTURE_2D,0,Ae,j.width,j.height,0,ee,_e,null));else if(S.isDataTexture)if(Xe.length>0){Fe&&ht&&t.texStorage2D(o.TEXTURE_2D,fe,Ae,Xe[0].width,Xe[0].height);for(let Y=0,Z=Xe.length;Y<Z;Y++)ie=Xe[Y],Fe?U&&t.texSubImage2D(o.TEXTURE_2D,Y,0,0,ie.width,ie.height,ee,_e,ie.data):t.texImage2D(o.TEXTURE_2D,Y,Ae,ie.width,ie.height,0,ee,_e,ie.data);S.generateMipmaps=!1}else Fe?(ht&&t.texStorage2D(o.TEXTURE_2D,fe,Ae,j.width,j.height),U&&t.texSubImage2D(o.TEXTURE_2D,0,0,0,j.width,j.height,ee,_e,j.data)):t.texImage2D(o.TEXTURE_2D,0,Ae,j.width,j.height,0,ee,_e,j.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){Fe&&ht&&t.texStorage3D(o.TEXTURE_2D_ARRAY,fe,Ae,Xe[0].width,Xe[0].height,j.depth);for(let Y=0,Z=Xe.length;Y<Z;Y++)if(ie=Xe[Y],S.format!==nn)if(ee!==null)if(Fe){if(U)if(S.layerUpdates.size>0){const ge=Sc(ie.width,ie.height,S.format,S.type);for(const pe of S.layerUpdates){const Oe=ie.data.subarray(pe*ge/ie.data.BYTES_PER_ELEMENT,(pe+1)*ge/ie.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,Y,0,0,pe,ie.width,ie.height,1,ee,Oe)}S.clearLayerUpdates()}else t.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,Y,0,0,0,ie.width,ie.height,j.depth,ee,ie.data)}else t.compressedTexImage3D(o.TEXTURE_2D_ARRAY,Y,Ae,ie.width,ie.height,j.depth,0,ie.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Fe?U&&t.texSubImage3D(o.TEXTURE_2D_ARRAY,Y,0,0,0,ie.width,ie.height,j.depth,ee,_e,ie.data):t.texImage3D(o.TEXTURE_2D_ARRAY,Y,Ae,ie.width,ie.height,j.depth,0,ee,_e,ie.data)}else{Fe&&ht&&t.texStorage2D(o.TEXTURE_2D,fe,Ae,Xe[0].width,Xe[0].height);for(let Y=0,Z=Xe.length;Y<Z;Y++)ie=Xe[Y],S.format!==nn?ee!==null?Fe?U&&t.compressedTexSubImage2D(o.TEXTURE_2D,Y,0,0,ie.width,ie.height,ee,ie.data):t.compressedTexImage2D(o.TEXTURE_2D,Y,Ae,ie.width,ie.height,0,ie.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Fe?U&&t.texSubImage2D(o.TEXTURE_2D,Y,0,0,ie.width,ie.height,ee,_e,ie.data):t.texImage2D(o.TEXTURE_2D,Y,Ae,ie.width,ie.height,0,ee,_e,ie.data)}else if(S.isDataArrayTexture)if(Fe){if(ht&&t.texStorage3D(o.TEXTURE_2D_ARRAY,fe,Ae,j.width,j.height,j.depth),U)if(S.layerUpdates.size>0){const Y=Sc(j.width,j.height,S.format,S.type);for(const Z of S.layerUpdates){const ge=j.data.subarray(Z*Y/j.data.BYTES_PER_ELEMENT,(Z+1)*Y/j.data.BYTES_PER_ELEMENT);t.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,Z,j.width,j.height,1,ee,_e,ge)}S.clearLayerUpdates()}else t.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,0,j.width,j.height,j.depth,ee,_e,j.data)}else t.texImage3D(o.TEXTURE_2D_ARRAY,0,Ae,j.width,j.height,j.depth,0,ee,_e,j.data);else if(S.isData3DTexture)Fe?(ht&&t.texStorage3D(o.TEXTURE_3D,fe,Ae,j.width,j.height,j.depth),U&&t.texSubImage3D(o.TEXTURE_3D,0,0,0,0,j.width,j.height,j.depth,ee,_e,j.data)):t.texImage3D(o.TEXTURE_3D,0,Ae,j.width,j.height,j.depth,0,ee,_e,j.data);else if(S.isFramebufferTexture){if(ht)if(Fe)t.texStorage2D(o.TEXTURE_2D,fe,Ae,j.width,j.height);else{let Y=j.width,Z=j.height;for(let ge=0;ge<fe;ge++)t.texImage2D(o.TEXTURE_2D,ge,Ae,Y,Z,0,ee,_e,null),Y>>=1,Z>>=1}}else if(Xe.length>0){if(Fe&&ht){const Y=Ee(Xe[0]);t.texStorage2D(o.TEXTURE_2D,fe,Ae,Y.width,Y.height)}for(let Y=0,Z=Xe.length;Y<Z;Y++)ie=Xe[Y],Fe?U&&t.texSubImage2D(o.TEXTURE_2D,Y,0,0,ee,_e,ie):t.texImage2D(o.TEXTURE_2D,Y,Ae,ee,_e,ie);S.generateMipmaps=!1}else if(Fe){if(ht){const Y=Ee(j);t.texStorage2D(o.TEXTURE_2D,fe,Ae,Y.width,Y.height)}U&&t.texSubImage2D(o.TEXTURE_2D,0,0,0,ee,_e,j)}else t.texImage2D(o.TEXTURE_2D,0,Ae,ee,_e,j);m(S)&&p(B),ce.__version=X.version,S.onUpdate&&S.onUpdate(S)}C.__version=S.version}function oe(C,S,R){if(S.image.length!==6)return;const B=je(C,S),G=S.source;t.bindTexture(o.TEXTURE_CUBE_MAP,C.__webglTexture,o.TEXTURE0+R);const X=n.get(G);if(G.version!==X.__version||B===!0){t.activeTexture(o.TEXTURE0+R);const ce=qe.getPrimaries(qe.workingColorSpace),J=S.colorSpace===ni?null:qe.getPrimaries(S.colorSpace),ne=S.colorSpace===ni||ce===J?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,S.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,S.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,ne);const Re=S.isCompressedTexture||S.image[0].isCompressedTexture,j=S.image[0]&&S.image[0].isDataTexture,ee=[];for(let Z=0;Z<6;Z++)!Re&&!j?ee[Z]=_(S.image[Z],!0,i.maxCubemapSize):ee[Z]=j?S.image[Z].image:S.image[Z],ee[Z]=nt(S,ee[Z]);const _e=ee[0],Ae=s.convert(S.format,S.colorSpace),ie=s.convert(S.type),Xe=y(S.internalFormat,Ae,ie,S.colorSpace),Fe=S.isVideoTexture!==!0,ht=X.__version===void 0||B===!0,U=G.dataReady;let fe=P(S,_e);Be(o.TEXTURE_CUBE_MAP,S);let Y;if(Re){Fe&&ht&&t.texStorage2D(o.TEXTURE_CUBE_MAP,fe,Xe,_e.width,_e.height);for(let Z=0;Z<6;Z++){Y=ee[Z].mipmaps;for(let ge=0;ge<Y.length;ge++){const pe=Y[ge];S.format!==nn?Ae!==null?Fe?U&&t.compressedTexSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ge,0,0,pe.width,pe.height,Ae,pe.data):t.compressedTexImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ge,Xe,pe.width,pe.height,0,pe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Fe?U&&t.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ge,0,0,pe.width,pe.height,Ae,ie,pe.data):t.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ge,Xe,pe.width,pe.height,0,Ae,ie,pe.data)}}}else{if(Y=S.mipmaps,Fe&&ht){Y.length>0&&fe++;const Z=Ee(ee[0]);t.texStorage2D(o.TEXTURE_CUBE_MAP,fe,Xe,Z.width,Z.height)}for(let Z=0;Z<6;Z++)if(j){Fe?U&&t.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,0,0,ee[Z].width,ee[Z].height,Ae,ie,ee[Z].data):t.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,Xe,ee[Z].width,ee[Z].height,0,Ae,ie,ee[Z].data);for(let ge=0;ge<Y.length;ge++){const Oe=Y[ge].image[Z].image;Fe?U&&t.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ge+1,0,0,Oe.width,Oe.height,Ae,ie,Oe.data):t.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ge+1,Xe,Oe.width,Oe.height,0,Ae,ie,Oe.data)}}else{Fe?U&&t.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,0,0,Ae,ie,ee[Z]):t.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,Xe,Ae,ie,ee[Z]);for(let ge=0;ge<Y.length;ge++){const pe=Y[ge];Fe?U&&t.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ge+1,0,0,Ae,ie,pe.image[Z]):t.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ge+1,Xe,Ae,ie,pe.image[Z])}}}m(S)&&p(o.TEXTURE_CUBE_MAP),X.__version=G.version,S.onUpdate&&S.onUpdate(S)}C.__version=S.version}function xe(C,S,R,B,G,X){const ce=s.convert(R.format,R.colorSpace),J=s.convert(R.type),ne=y(R.internalFormat,ce,J,R.colorSpace),Re=n.get(S),j=n.get(R);if(j.__renderTarget=S,!Re.__hasExternalTextures){const ee=Math.max(1,S.width>>X),_e=Math.max(1,S.height>>X);G===o.TEXTURE_3D||G===o.TEXTURE_2D_ARRAY?t.texImage3D(G,X,ne,ee,_e,S.depth,0,ce,J,null):t.texImage2D(G,X,ne,ee,_e,0,ce,J,null)}t.bindFramebuffer(o.FRAMEBUFFER,C),He(S)?a.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,B,G,j.__webglTexture,0,Ge(S)):(G===o.TEXTURE_2D||G>=o.TEXTURE_CUBE_MAP_POSITIVE_X&&G<=o.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&o.framebufferTexture2D(o.FRAMEBUFFER,B,G,j.__webglTexture,X),t.bindFramebuffer(o.FRAMEBUFFER,null)}function ue(C,S,R){if(o.bindRenderbuffer(o.RENDERBUFFER,C),S.depthBuffer){const B=S.depthTexture,G=B&&B.isDepthTexture?B.type:null,X=x(S.stencilBuffer,G),ce=S.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,J=Ge(S);He(S)?a.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,J,X,S.width,S.height):R?o.renderbufferStorageMultisample(o.RENDERBUFFER,J,X,S.width,S.height):o.renderbufferStorage(o.RENDERBUFFER,X,S.width,S.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,ce,o.RENDERBUFFER,C)}else{const B=S.textures;for(let G=0;G<B.length;G++){const X=B[G],ce=s.convert(X.format,X.colorSpace),J=s.convert(X.type),ne=y(X.internalFormat,ce,J,X.colorSpace),Re=Ge(S);R&&He(S)===!1?o.renderbufferStorageMultisample(o.RENDERBUFFER,Re,ne,S.width,S.height):He(S)?a.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,Re,ne,S.width,S.height):o.renderbufferStorage(o.RENDERBUFFER,ne,S.width,S.height)}}o.bindRenderbuffer(o.RENDERBUFFER,null)}function Ce(C,S){if(S&&S.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(o.FRAMEBUFFER,C),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const B=n.get(S.depthTexture);B.__renderTarget=S,(!B.__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),K(S.depthTexture,0);const G=B.__webglTexture,X=Ge(S);if(S.depthTexture.format===Ki)He(S)?a.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.TEXTURE_2D,G,0,X):o.framebufferTexture2D(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.TEXTURE_2D,G,0);else if(S.depthTexture.format===ss)He(S)?a.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.TEXTURE_2D,G,0,X):o.framebufferTexture2D(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.TEXTURE_2D,G,0);else throw new Error("Unknown depthTexture format")}function Ne(C){const S=n.get(C),R=C.isWebGLCubeRenderTarget===!0;if(S.__boundDepthTexture!==C.depthTexture){const B=C.depthTexture;if(S.__depthDisposeCallback&&S.__depthDisposeCallback(),B){const G=()=>{delete S.__boundDepthTexture,delete S.__depthDisposeCallback,B.removeEventListener("dispose",G)};B.addEventListener("dispose",G),S.__depthDisposeCallback=G}S.__boundDepthTexture=B}if(C.depthTexture&&!S.__autoAllocateDepthBuffer){if(R)throw new Error("target.depthTexture not supported in Cube render targets");Ce(S.__webglFramebuffer,C)}else if(R){S.__webglDepthbuffer=[];for(let B=0;B<6;B++)if(t.bindFramebuffer(o.FRAMEBUFFER,S.__webglFramebuffer[B]),S.__webglDepthbuffer[B]===void 0)S.__webglDepthbuffer[B]=o.createRenderbuffer(),ue(S.__webglDepthbuffer[B],C,!1);else{const G=C.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,X=S.__webglDepthbuffer[B];o.bindRenderbuffer(o.RENDERBUFFER,X),o.framebufferRenderbuffer(o.FRAMEBUFFER,G,o.RENDERBUFFER,X)}}else if(t.bindFramebuffer(o.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer===void 0)S.__webglDepthbuffer=o.createRenderbuffer(),ue(S.__webglDepthbuffer,C,!1);else{const B=C.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,G=S.__webglDepthbuffer;o.bindRenderbuffer(o.RENDERBUFFER,G),o.framebufferRenderbuffer(o.FRAMEBUFFER,B,o.RENDERBUFFER,G)}t.bindFramebuffer(o.FRAMEBUFFER,null)}function Le(C,S,R){const B=n.get(C);S!==void 0&&xe(B.__webglFramebuffer,C,C.texture,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,0),R!==void 0&&Ne(C)}function lt(C){const S=C.texture,R=n.get(C),B=n.get(S);C.addEventListener("dispose",A);const G=C.textures,X=C.isWebGLCubeRenderTarget===!0,ce=G.length>1;if(ce||(B.__webglTexture===void 0&&(B.__webglTexture=o.createTexture()),B.__version=S.version,r.memory.textures++),X){R.__webglFramebuffer=[];for(let J=0;J<6;J++)if(S.mipmaps&&S.mipmaps.length>0){R.__webglFramebuffer[J]=[];for(let ne=0;ne<S.mipmaps.length;ne++)R.__webglFramebuffer[J][ne]=o.createFramebuffer()}else R.__webglFramebuffer[J]=o.createFramebuffer()}else{if(S.mipmaps&&S.mipmaps.length>0){R.__webglFramebuffer=[];for(let J=0;J<S.mipmaps.length;J++)R.__webglFramebuffer[J]=o.createFramebuffer()}else R.__webglFramebuffer=o.createFramebuffer();if(ce)for(let J=0,ne=G.length;J<ne;J++){const Re=n.get(G[J]);Re.__webglTexture===void 0&&(Re.__webglTexture=o.createTexture(),r.memory.textures++)}if(C.samples>0&&He(C)===!1){R.__webglMultisampledFramebuffer=o.createFramebuffer(),R.__webglColorRenderbuffer=[],t.bindFramebuffer(o.FRAMEBUFFER,R.__webglMultisampledFramebuffer);for(let J=0;J<G.length;J++){const ne=G[J];R.__webglColorRenderbuffer[J]=o.createRenderbuffer(),o.bindRenderbuffer(o.RENDERBUFFER,R.__webglColorRenderbuffer[J]);const Re=s.convert(ne.format,ne.colorSpace),j=s.convert(ne.type),ee=y(ne.internalFormat,Re,j,ne.colorSpace,C.isXRRenderTarget===!0),_e=Ge(C);o.renderbufferStorageMultisample(o.RENDERBUFFER,_e,ee,C.width,C.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+J,o.RENDERBUFFER,R.__webglColorRenderbuffer[J])}o.bindRenderbuffer(o.RENDERBUFFER,null),C.depthBuffer&&(R.__webglDepthRenderbuffer=o.createRenderbuffer(),ue(R.__webglDepthRenderbuffer,C,!0)),t.bindFramebuffer(o.FRAMEBUFFER,null)}}if(X){t.bindTexture(o.TEXTURE_CUBE_MAP,B.__webglTexture),Be(o.TEXTURE_CUBE_MAP,S);for(let J=0;J<6;J++)if(S.mipmaps&&S.mipmaps.length>0)for(let ne=0;ne<S.mipmaps.length;ne++)xe(R.__webglFramebuffer[J][ne],C,S,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+J,ne);else xe(R.__webglFramebuffer[J],C,S,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+J,0);m(S)&&p(o.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ce){for(let J=0,ne=G.length;J<ne;J++){const Re=G[J],j=n.get(Re);t.bindTexture(o.TEXTURE_2D,j.__webglTexture),Be(o.TEXTURE_2D,Re),xe(R.__webglFramebuffer,C,Re,o.COLOR_ATTACHMENT0+J,o.TEXTURE_2D,0),m(Re)&&p(o.TEXTURE_2D)}t.unbindTexture()}else{let J=o.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(J=C.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),t.bindTexture(J,B.__webglTexture),Be(J,S),S.mipmaps&&S.mipmaps.length>0)for(let ne=0;ne<S.mipmaps.length;ne++)xe(R.__webglFramebuffer[ne],C,S,o.COLOR_ATTACHMENT0,J,ne);else xe(R.__webglFramebuffer,C,S,o.COLOR_ATTACHMENT0,J,0);m(S)&&p(J),t.unbindTexture()}C.depthBuffer&&Ne(C)}function Pe(C){const S=C.textures;for(let R=0,B=S.length;R<B;R++){const G=S[R];if(m(G)){const X=v(C),ce=n.get(G).__webglTexture;t.bindTexture(X,ce),p(X),t.unbindTexture()}}}const mt=[],z=[];function Ke(C){if(C.samples>0){if(He(C)===!1){const S=C.textures,R=C.width,B=C.height;let G=o.COLOR_BUFFER_BIT;const X=C.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,ce=n.get(C),J=S.length>1;if(J)for(let ne=0;ne<S.length;ne++)t.bindFramebuffer(o.FRAMEBUFFER,ce.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+ne,o.RENDERBUFFER,null),t.bindFramebuffer(o.FRAMEBUFFER,ce.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+ne,o.TEXTURE_2D,null,0);t.bindFramebuffer(o.READ_FRAMEBUFFER,ce.__webglMultisampledFramebuffer),t.bindFramebuffer(o.DRAW_FRAMEBUFFER,ce.__webglFramebuffer);for(let ne=0;ne<S.length;ne++){if(C.resolveDepthBuffer&&(C.depthBuffer&&(G|=o.DEPTH_BUFFER_BIT),C.stencilBuffer&&C.resolveStencilBuffer&&(G|=o.STENCIL_BUFFER_BIT)),J){o.framebufferRenderbuffer(o.READ_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.RENDERBUFFER,ce.__webglColorRenderbuffer[ne]);const Re=n.get(S[ne]).__webglTexture;o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,Re,0)}o.blitFramebuffer(0,0,R,B,0,0,R,B,G,o.NEAREST),l===!0&&(mt.length=0,z.length=0,mt.push(o.COLOR_ATTACHMENT0+ne),C.depthBuffer&&C.resolveDepthBuffer===!1&&(mt.push(X),z.push(X),o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,z)),o.invalidateFramebuffer(o.READ_FRAMEBUFFER,mt))}if(t.bindFramebuffer(o.READ_FRAMEBUFFER,null),t.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),J)for(let ne=0;ne<S.length;ne++){t.bindFramebuffer(o.FRAMEBUFFER,ce.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+ne,o.RENDERBUFFER,ce.__webglColorRenderbuffer[ne]);const Re=n.get(S[ne]).__webglTexture;t.bindFramebuffer(o.FRAMEBUFFER,ce.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+ne,o.TEXTURE_2D,Re,0)}t.bindFramebuffer(o.DRAW_FRAMEBUFFER,ce.__webglMultisampledFramebuffer)}else if(C.depthBuffer&&C.resolveDepthBuffer===!1&&l){const S=C.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,[S])}}}function Ge(C){return Math.min(i.maxSamples,C.samples)}function He(C){const S=n.get(C);return C.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function ye(C){const S=r.render.frame;u.get(C)!==S&&(u.set(C,S),C.update())}function nt(C,S){const R=C.colorSpace,B=C.format,G=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||R!==qt&&R!==ni&&(qe.getTransfer(R)===st?(B!==nn||G!==Vn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",R)),S}function Ee(C){return typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement?(c.width=C.naturalWidth||C.width,c.height=C.naturalHeight||C.height):typeof VideoFrame<"u"&&C instanceof VideoFrame?(c.width=C.displayWidth,c.height=C.displayHeight):(c.width=C.width,c.height=C.height),c}this.allocateTextureUnit=N,this.resetTextureUnits=L,this.setTexture2D=K,this.setTexture2DArray=H,this.setTexture3D=te,this.setTextureCube=q,this.rebindTextures=Le,this.setupRenderTarget=lt,this.updateRenderTargetMipmap=Pe,this.updateMultisampleRenderTarget=Ke,this.setupDepthRenderbuffer=Ne,this.setupFrameBufferTexture=xe,this.useMultisampledRTT=He}function x0(o,e){function t(n,i=ni){let s;const r=qe.getTransfer(i);if(n===Vn)return o.UNSIGNED_BYTE;if(n===Xa)return o.UNSIGNED_SHORT_4_4_4_4;if(n===qa)return o.UNSIGNED_SHORT_5_5_5_1;if(n===yh)return o.UNSIGNED_INT_5_9_9_9_REV;if(n===vh)return o.BYTE;if(n===xh)return o.SHORT;if(n===Os)return o.UNSIGNED_SHORT;if(n===Wa)return o.INT;if(n===Mi)return o.UNSIGNED_INT;if(n===dn)return o.FLOAT;if(n===Mn)return o.HALF_FLOAT;if(n===Mh)return o.ALPHA;if(n===Sh)return o.RGB;if(n===nn)return o.RGBA;if(n===wh)return o.LUMINANCE;if(n===bh)return o.LUMINANCE_ALPHA;if(n===Ki)return o.DEPTH_COMPONENT;if(n===ss)return o.DEPTH_STENCIL;if(n===Ya)return o.RED;if(n===ja)return o.RED_INTEGER;if(n===Th)return o.RG;if(n===Ka)return o.RG_INTEGER;if(n===$a)return o.RGBA_INTEGER;if(n===Dr||n===Ir||n===Nr||n===Ur)if(r===st)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===Dr)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Ir)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Nr)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Ur)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===Dr)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Ir)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Nr)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Ur)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===ia||n===sa||n===ra||n===oa)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===ia)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===sa)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===ra)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===oa)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===aa||n===la||n===ca)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(n===aa||n===la)return r===st?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===ca)return r===st?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===ha||n===ua||n===da||n===fa||n===pa||n===ma||n===ga||n===_a||n===va||n===xa||n===ya||n===Ma||n===Sa||n===wa)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(n===ha)return r===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===ua)return r===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===da)return r===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===fa)return r===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===pa)return r===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===ma)return r===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===ga)return r===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===_a)return r===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===va)return r===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===xa)return r===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===ya)return r===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Ma)return r===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Sa)return r===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===wa)return r===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Br||n===ba||n===Ta)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(n===Br)return r===st?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===ba)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Ta)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Eh||n===Ea||n===Aa||n===Ca)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(n===Br)return s.COMPRESSED_RED_RGTC1_EXT;if(n===Ea)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Aa)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Ca)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===is?o.UNSIGNED_INT_24_8:o[n]!==void 0?o[n]:null}return{convert:t}}class y0 extends Gt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Vt extends dt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const M0={type:"move"};class Ao{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Vt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Vt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new E,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new E),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Vt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new E,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new E),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,s=null,r=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){r=!0;for(const _ of e.hand.values()){const m=t.getJointPose(_,n),p=this._getHandJoint(c,_);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const u=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],h=u.position.distanceTo(d.position),f=.02,g=.005;c.inputState.pinching&&h>f+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&h<=f-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&s!==null&&(i=s),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(M0)))}return a!==null&&(a.visible=i!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=r!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new Vt;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const S0=`
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

}`;class b0{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){const i=new Et,s=e.properties.get(i);s.__webglTexture=t.texture,(t.depthNear!=n.depthNear||t.depthFar!=n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new Tt({vertexShader:S0,fragmentShader:w0,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Te(new Ht(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class T0 extends wi{constructor(e,t){super();const n=this;let i=null,s=1,r=null,a="local-floor",l=1,c=null,u=null,d=null,h=null,f=null,g=null;const _=new b0,m=t.getContextAttributes();let p=null,v=null;const y=[],x=[],P=new ae;let T=null;const A=new Gt;A.viewport=new Je;const D=new Gt;D.viewport=new Je;const w=[A,D],M=new y0;let I=null,L=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function($){let oe=y[$];return oe===void 0&&(oe=new Ao,y[$]=oe),oe.getTargetRaySpace()},this.getControllerGrip=function($){let oe=y[$];return oe===void 0&&(oe=new Ao,y[$]=oe),oe.getGripSpace()},this.getHand=function($){let oe=y[$];return oe===void 0&&(oe=new Ao,y[$]=oe),oe.getHandSpace()};function N($){const oe=x.indexOf($.inputSource);if(oe===-1)return;const xe=y[oe];xe!==void 0&&(xe.update($.inputSource,$.frame,c||r),xe.dispatchEvent({type:$.type,data:$.inputSource}))}function k(){i.removeEventListener("select",N),i.removeEventListener("selectstart",N),i.removeEventListener("selectend",N),i.removeEventListener("squeeze",N),i.removeEventListener("squeezestart",N),i.removeEventListener("squeezeend",N),i.removeEventListener("end",k),i.removeEventListener("inputsourceschange",K);for(let $=0;$<y.length;$++){const oe=x[$];oe!==null&&(x[$]=null,y[$].disconnect(oe))}I=null,L=null,_.reset(),e.setRenderTarget(p),f=null,h=null,d=null,i=null,v=null,je.stop(),n.isPresenting=!1,e.setPixelRatio(T),e.setSize(P.width,P.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function($){s=$,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function($){a=$,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||r},this.setReferenceSpace=function($){c=$},this.getBaseLayer=function(){return h!==null?h:f},this.getBinding=function(){return d},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function($){if(i=$,i!==null){if(p=e.getRenderTarget(),i.addEventListener("select",N),i.addEventListener("selectstart",N),i.addEventListener("selectend",N),i.addEventListener("squeeze",N),i.addEventListener("squeezestart",N),i.addEventListener("squeezeend",N),i.addEventListener("end",k),i.addEventListener("inputsourceschange",K),m.xrCompatible!==!0&&await t.makeXRCompatible(),T=e.getPixelRatio(),e.getSize(P),i.renderState.layers===void 0){const oe={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:s};f=new XRWebGLLayer(i,t,oe),i.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),v=new sn(f.framebufferWidth,f.framebufferHeight,{format:nn,type:Vn,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil})}else{let oe=null,xe=null,ue=null;m.depth&&(ue=m.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,oe=m.stencil?ss:Ki,xe=m.stencil?is:Mi);const Ce={colorFormat:t.RGBA8,depthFormat:ue,scaleFactor:s};d=new XRWebGLBinding(i,t),h=d.createProjectionLayer(Ce),i.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),v=new sn(h.textureWidth,h.textureHeight,{format:nn,type:Vn,depthTexture:new kh(h.textureWidth,h.textureHeight,xe,void 0,void 0,void 0,void 0,void 0,void 0,oe),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(l),c=null,r=await i.requestReferenceSpace(a),je.setContext(i),je.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function K($){for(let oe=0;oe<$.removed.length;oe++){const xe=$.removed[oe],ue=x.indexOf(xe);ue>=0&&(x[ue]=null,y[ue].disconnect(xe))}for(let oe=0;oe<$.added.length;oe++){const xe=$.added[oe];let ue=x.indexOf(xe);if(ue===-1){for(let Ne=0;Ne<y.length;Ne++)if(Ne>=x.length){x.push(xe),ue=Ne;break}else if(x[Ne]===null){x[Ne]=xe,ue=Ne;break}if(ue===-1)break}const Ce=y[ue];Ce&&Ce.connect(xe)}}const H=new E,te=new E;function q($,oe,xe){H.setFromMatrixPosition(oe.matrixWorld),te.setFromMatrixPosition(xe.matrixWorld);const ue=H.distanceTo(te),Ce=oe.projectionMatrix.elements,Ne=xe.projectionMatrix.elements,Le=Ce[14]/(Ce[10]-1),lt=Ce[14]/(Ce[10]+1),Pe=(Ce[9]+1)/Ce[5],mt=(Ce[9]-1)/Ce[5],z=(Ce[8]-1)/Ce[0],Ke=(Ne[8]+1)/Ne[0],Ge=Le*z,He=Le*Ke,ye=ue/(-z+Ke),nt=ye*-z;if(oe.matrixWorld.decompose($.position,$.quaternion,$.scale),$.translateX(nt),$.translateZ(ye),$.matrixWorld.compose($.position,$.quaternion,$.scale),$.matrixWorldInverse.copy($.matrixWorld).invert(),Ce[10]===-1)$.projectionMatrix.copy(oe.projectionMatrix),$.projectionMatrixInverse.copy(oe.projectionMatrixInverse);else{const Ee=Le+ye,C=lt+ye,S=Ge-nt,R=He+(ue-nt),B=Pe*lt/C*Ee,G=mt*lt/C*Ee;$.projectionMatrix.makePerspective(S,R,B,G,Ee,C),$.projectionMatrixInverse.copy($.projectionMatrix).invert()}}function re($,oe){oe===null?$.matrixWorld.copy($.matrix):$.matrixWorld.multiplyMatrices(oe.matrixWorld,$.matrix),$.matrixWorldInverse.copy($.matrixWorld).invert()}this.updateCamera=function($){if(i===null)return;let oe=$.near,xe=$.far;_.texture!==null&&(_.depthNear>0&&(oe=_.depthNear),_.depthFar>0&&(xe=_.depthFar)),M.near=D.near=A.near=oe,M.far=D.far=A.far=xe,(I!==M.near||L!==M.far)&&(i.updateRenderState({depthNear:M.near,depthFar:M.far}),I=M.near,L=M.far),A.layers.mask=$.layers.mask|2,D.layers.mask=$.layers.mask|4,M.layers.mask=A.layers.mask|D.layers.mask;const ue=$.parent,Ce=M.cameras;re(M,ue);for(let Ne=0;Ne<Ce.length;Ne++)re(Ce[Ne],ue);Ce.length===2?q(M,A,D):M.projectionMatrix.copy(A.projectionMatrix),de($,M,ue)};function de($,oe,xe){xe===null?$.matrix.copy(oe.matrixWorld):($.matrix.copy(xe.matrixWorld),$.matrix.invert(),$.matrix.multiply(oe.matrixWorld)),$.matrix.decompose($.position,$.quaternion,$.scale),$.updateMatrixWorld(!0),$.projectionMatrix.copy(oe.projectionMatrix),$.projectionMatrixInverse.copy(oe.projectionMatrixInverse),$.isPerspectiveCamera&&($.fov=rs*2*Math.atan(1/$.projectionMatrix.elements[5]),$.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(h===null&&f===null))return l},this.setFoveation=function($){l=$,h!==null&&(h.fixedFoveation=$),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=$)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(M)};let ve=null;function Be($,oe){if(u=oe.getViewerPose(c||r),g=oe,u!==null){const xe=u.views;f!==null&&(e.setRenderTargetFramebuffer(v,f.framebuffer),e.setRenderTarget(v));let ue=!1;xe.length!==M.cameras.length&&(M.cameras.length=0,ue=!0);for(let Ne=0;Ne<xe.length;Ne++){const Le=xe[Ne];let lt=null;if(f!==null)lt=f.getViewport(Le);else{const mt=d.getViewSubImage(h,Le);lt=mt.viewport,Ne===0&&(e.setRenderTargetTextures(v,mt.colorTexture,h.ignoreDepthValues?void 0:mt.depthStencilTexture),e.setRenderTarget(v))}let Pe=w[Ne];Pe===void 0&&(Pe=new Gt,Pe.layers.enable(Ne),Pe.viewport=new Je,w[Ne]=Pe),Pe.matrix.fromArray(Le.transform.matrix),Pe.matrix.decompose(Pe.position,Pe.quaternion,Pe.scale),Pe.projectionMatrix.fromArray(Le.projectionMatrix),Pe.projectionMatrixInverse.copy(Pe.projectionMatrix).invert(),Pe.viewport.set(lt.x,lt.y,lt.width,lt.height),Ne===0&&(M.matrix.copy(Pe.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),ue===!0&&M.cameras.push(Pe)}const Ce=i.enabledFeatures;if(Ce&&Ce.includes("depth-sensing")){const Ne=d.getDepthInformation(xe[0]);Ne&&Ne.isValid&&Ne.texture&&_.init(e,Ne,i.renderState)}}for(let xe=0;xe<y.length;xe++){const ue=x[xe],Ce=y[xe];ue!==null&&Ce!==void 0&&Ce.update(ue,oe,c||r)}ve&&ve($,oe),oe.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:oe}),g=null}const je=new zh;je.setAnimationLoop(Be),this.setAnimationLoop=function($){ve=$},this.dispose=function(){}}}const fi=new gn,E0=new Ie;function A0(o,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,Bh(o)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function i(m,p,v,y,x){p.isMeshBasicMaterial||p.isMeshLambertMaterial?s(m,p):p.isMeshToonMaterial?(s(m,p),d(m,p)):p.isMeshPhongMaterial?(s(m,p),u(m,p)):p.isMeshStandardMaterial?(s(m,p),h(m,p),p.isMeshPhysicalMaterial&&f(m,p,x)):p.isMeshMatcapMaterial?(s(m,p),g(m,p)):p.isMeshDepthMaterial?s(m,p):p.isMeshDistanceMaterial?(s(m,p),_(m,p)):p.isMeshNormalMaterial?s(m,p):p.isLineBasicMaterial?(r(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?l(m,p,v,y):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===Wt&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===Wt&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const v=e.get(p),y=v.envMap,x=v.envMapRotation;y&&(m.envMap.value=y,fi.copy(x),fi.x*=-1,fi.y*=-1,fi.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(fi.y*=-1,fi.z*=-1),m.envMapRotation.value.setFromMatrix4(E0.makeRotationFromEuler(fi)),m.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function r(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,v,y){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*v,m.scale.value=y*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function u(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function d(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function h(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,v){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Wt&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=v.texture,m.transmissionSamplerSize.value.set(v.width,v.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function _(m,p){const v=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(v.matrixWorld),m.nearDistance.value=v.shadow.camera.near,m.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function C0(o,e,t,n){let i={},s={},r=[];const a=o.getParameter(o.MAX_UNIFORM_BUFFER_BINDINGS);function l(v,y){const x=y.program;n.uniformBlockBinding(v,x)}function c(v,y){let x=i[v.id];x===void 0&&(g(v),x=u(v),i[v.id]=x,v.addEventListener("dispose",m));const P=y.program;n.updateUBOMapping(v,P);const T=e.render.frame;s[v.id]!==T&&(h(v),s[v.id]=T)}function u(v){const y=d();v.__bindingPointIndex=y;const x=o.createBuffer(),P=v.__size,T=v.usage;return o.bindBuffer(o.UNIFORM_BUFFER,x),o.bufferData(o.UNIFORM_BUFFER,P,T),o.bindBuffer(o.UNIFORM_BUFFER,null),o.bindBufferBase(o.UNIFORM_BUFFER,y,x),x}function d(){for(let v=0;v<a;v++)if(r.indexOf(v)===-1)return r.push(v),v;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(v){const y=i[v.id],x=v.uniforms,P=v.__cache;o.bindBuffer(o.UNIFORM_BUFFER,y);for(let T=0,A=x.length;T<A;T++){const D=Array.isArray(x[T])?x[T]:[x[T]];for(let w=0,M=D.length;w<M;w++){const I=D[w];if(f(I,T,w,P)===!0){const L=I.__offset,N=Array.isArray(I.value)?I.value:[I.value];let k=0;for(let K=0;K<N.length;K++){const H=N[K],te=_(H);typeof H=="number"||typeof H=="boolean"?(I.__data[0]=H,o.bufferSubData(o.UNIFORM_BUFFER,L+k,I.__data)):H.isMatrix3?(I.__data[0]=H.elements[0],I.__data[1]=H.elements[1],I.__data[2]=H.elements[2],I.__data[3]=0,I.__data[4]=H.elements[3],I.__data[5]=H.elements[4],I.__data[6]=H.elements[5],I.__data[7]=0,I.__data[8]=H.elements[6],I.__data[9]=H.elements[7],I.__data[10]=H.elements[8],I.__data[11]=0):(H.toArray(I.__data,k),k+=te.storage/Float32Array.BYTES_PER_ELEMENT)}o.bufferSubData(o.UNIFORM_BUFFER,L,I.__data)}}}o.bindBuffer(o.UNIFORM_BUFFER,null)}function f(v,y,x,P){const T=v.value,A=y+"_"+x;if(P[A]===void 0)return typeof T=="number"||typeof T=="boolean"?P[A]=T:P[A]=T.clone(),!0;{const D=P[A];if(typeof T=="number"||typeof T=="boolean"){if(D!==T)return P[A]=T,!0}else if(D.equals(T)===!1)return D.copy(T),!0}return!1}function g(v){const y=v.uniforms;let x=0;const P=16;for(let A=0,D=y.length;A<D;A++){const w=Array.isArray(y[A])?y[A]:[y[A]];for(let M=0,I=w.length;M<I;M++){const L=w[M],N=Array.isArray(L.value)?L.value:[L.value];for(let k=0,K=N.length;k<K;k++){const H=N[k],te=_(H),q=x%P,re=q%te.boundary,de=q+re;x+=re,de!==0&&P-de<te.storage&&(x+=P-de),L.__data=new Float32Array(te.storage/Float32Array.BYTES_PER_ELEMENT),L.__offset=x,x+=te.storage}}}const T=x%P;return T>0&&(x+=P-T),v.__size=x,v.__cache={},this}function _(v){const y={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(y.boundary=4,y.storage=4):v.isVector2?(y.boundary=8,y.storage=8):v.isVector3||v.isColor?(y.boundary=16,y.storage=12):v.isVector4?(y.boundary=16,y.storage=16):v.isMatrix3?(y.boundary=48,y.storage=48):v.isMatrix4?(y.boundary=64,y.storage=64):v.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",v),y}function m(v){const y=v.target;y.removeEventListener("dispose",m);const x=r.indexOf(y.__bindingPointIndex);r.splice(x,1),o.deleteBuffer(i[y.id]),delete i[y.id],delete s[y.id]}function p(){for(const v in i)o.deleteBuffer(i[v]);r=[],i={},s={}}return{bind:l,update:c,dispose:p}}class R0{constructor(e={}){const{canvas:t=_d(),context:n=null,depth:i=!0,stencil:s=!1,alpha:r=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:d=!1,reverseDepthBuffer:h=!1}=e;this.isWebGLRenderer=!0;let f;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=n.getContextAttributes().alpha}else f=r;const g=new Uint32Array(4),_=new Int32Array(4);let m=null,p=null;const v=[],y=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Dt,this.toneMapping=oi,this.toneMappingExposure=1;const x=this;let P=!1,T=0,A=0,D=null,w=-1,M=null;const I=new Je,L=new Je;let N=null;const k=new se(0);let K=0,H=t.width,te=t.height,q=1,re=null,de=null;const ve=new Je(0,0,H,te),Be=new Je(0,0,H,te);let je=!1;const $=new el;let oe=!1,xe=!1;const ue=new Ie,Ce=new Ie,Ne=new E,Le=new Je,lt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Pe=!1;function mt(){return D===null?q:1}let z=n;function Ke(b,F){return t.getContext(b,F)}try{const b={alpha:!0,depth:i,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Ha}`),t.addEventListener("webglcontextlost",Z,!1),t.addEventListener("webglcontextrestored",ge,!1),t.addEventListener("webglcontextcreationerror",pe,!1),z===null){const F="webgl2";if(z=Ke(F,b),z===null)throw Ke(F)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(b){throw console.error("THREE.WebGLRenderer: "+b.message),b}let Ge,He,ye,nt,Ee,C,S,R,B,G,X,ce,J,ne,Re,j,ee,_e,Ae,ie,Xe,Fe,ht,U;function fe(){Ge=new Nm(z),Ge.init(),Fe=new x0(z,Ge),He=new Cm(z,Ge,e,Fe),ye=new g0(z,Ge),He.reverseDepthBuffer&&h&&ye.buffers.depth.setReversed(!0),nt=new Fm(z),Ee=new t0,C=new v0(z,Ge,ye,Ee,He,Fe,nt),S=new Pm(x),R=new Im(x),B=new Vd(z),ht=new Em(z,B),G=new Um(z,B,nt,ht),X=new zm(z,G,B,nt),Ae=new Om(z,He,C),j=new Rm(Ee),ce=new e0(x,S,R,Ge,He,ht,j),J=new A0(x,Ee),ne=new i0,Re=new c0(Ge),_e=new Tm(x,S,R,ye,X,f,l),ee=new p0(x,X,He),U=new C0(z,nt,He,ye),ie=new Am(z,Ge,nt),Xe=new Bm(z,Ge,nt),nt.programs=ce.programs,x.capabilities=He,x.extensions=Ge,x.properties=Ee,x.renderLists=ne,x.shadowMap=ee,x.state=ye,x.info=nt}fe();const Y=new T0(x,z);this.xr=Y,this.getContext=function(){return z},this.getContextAttributes=function(){return z.getContextAttributes()},this.forceContextLoss=function(){const b=Ge.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){const b=Ge.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return q},this.setPixelRatio=function(b){b!==void 0&&(q=b,this.setSize(H,te,!1))},this.getSize=function(b){return b.set(H,te)},this.setSize=function(b,F,V=!0){if(Y.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}H=b,te=F,t.width=Math.floor(b*q),t.height=Math.floor(F*q),V===!0&&(t.style.width=b+"px",t.style.height=F+"px"),this.setViewport(0,0,b,F)},this.getDrawingBufferSize=function(b){return b.set(H*q,te*q).floor()},this.setDrawingBufferSize=function(b,F,V){H=b,te=F,q=V,t.width=Math.floor(b*V),t.height=Math.floor(F*V),this.setViewport(0,0,b,F)},this.getCurrentViewport=function(b){return b.copy(I)},this.getViewport=function(b){return b.copy(ve)},this.setViewport=function(b,F,V,W){b.isVector4?ve.set(b.x,b.y,b.z,b.w):ve.set(b,F,V,W),ye.viewport(I.copy(ve).multiplyScalar(q).round())},this.getScissor=function(b){return b.copy(Be)},this.setScissor=function(b,F,V,W){b.isVector4?Be.set(b.x,b.y,b.z,b.w):Be.set(b,F,V,W),ye.scissor(L.copy(Be).multiplyScalar(q).round())},this.getScissorTest=function(){return je},this.setScissorTest=function(b){ye.setScissorTest(je=b)},this.setOpaqueSort=function(b){re=b},this.setTransparentSort=function(b){de=b},this.getClearColor=function(b){return b.copy(_e.getClearColor())},this.setClearColor=function(){_e.setClearColor.apply(_e,arguments)},this.getClearAlpha=function(){return _e.getClearAlpha()},this.setClearAlpha=function(){_e.setClearAlpha.apply(_e,arguments)},this.clear=function(b=!0,F=!0,V=!0){let W=0;if(b){let O=!1;if(D!==null){const le=D.texture.format;O=le===$a||le===Ka||le===ja}if(O){const le=D.texture.type,me=le===Vn||le===Mi||le===Os||le===is||le===Xa||le===qa,Me=_e.getClearColor(),Se=_e.getClearAlpha(),Ue=Me.r,ze=Me.g,we=Me.b;me?(g[0]=Ue,g[1]=ze,g[2]=we,g[3]=Se,z.clearBufferuiv(z.COLOR,0,g)):(_[0]=Ue,_[1]=ze,_[2]=we,_[3]=Se,z.clearBufferiv(z.COLOR,0,_))}else W|=z.COLOR_BUFFER_BIT}F&&(W|=z.DEPTH_BUFFER_BIT),V&&(W|=z.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),z.clear(W)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Z,!1),t.removeEventListener("webglcontextrestored",ge,!1),t.removeEventListener("webglcontextcreationerror",pe,!1),ne.dispose(),Re.dispose(),Ee.dispose(),S.dispose(),R.dispose(),X.dispose(),ht.dispose(),U.dispose(),ce.dispose(),Y.dispose(),Y.removeEventListener("sessionstart",_l),Y.removeEventListener("sessionend",vl),ai.stop()};function Z(b){b.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),P=!0}function ge(){console.log("THREE.WebGLRenderer: Context Restored."),P=!1;const b=nt.autoReset,F=ee.enabled,V=ee.autoUpdate,W=ee.needsUpdate,O=ee.type;fe(),nt.autoReset=b,ee.enabled=F,ee.autoUpdate=V,ee.needsUpdate=W,ee.type=O}function pe(b){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function Oe(b){const F=b.target;F.removeEventListener("dispose",Oe),gt(F)}function gt(b){Nt(b),Ee.remove(b)}function Nt(b){const F=Ee.get(b).programs;F!==void 0&&(F.forEach(function(V){ce.releaseProgram(V)}),b.isShaderMaterial&&ce.releaseShaderCache(b))}this.renderBufferDirect=function(b,F,V,W,O,le){F===null&&(F=lt);const me=O.isMesh&&O.matrixWorld.determinant()<0,Me=du(b,F,V,W,O);ye.setMaterial(W,me);let Se=V.index,Ue=1;if(W.wireframe===!0){if(Se=G.getWireframeAttribute(V),Se===void 0)return;Ue=2}const ze=V.drawRange,we=V.attributes.position;let $e=ze.start*Ue,ut=(ze.start+ze.count)*Ue;le!==null&&($e=Math.max($e,le.start*Ue),ut=Math.min(ut,(le.start+le.count)*Ue)),Se!==null?($e=Math.max($e,0),ut=Math.min(ut,Se.count)):we!=null&&($e=Math.max($e,0),ut=Math.min(ut,we.count));const ft=ut-$e;if(ft<0||ft===1/0)return;ht.setup(O,W,Me,V,Se);let Yt,Qe=ie;if(Se!==null&&(Yt=B.get(Se),Qe=Xe,Qe.setIndex(Yt)),O.isMesh)W.wireframe===!0?(ye.setLineWidth(W.wireframeLinewidth*mt()),Qe.setMode(z.LINES)):Qe.setMode(z.TRIANGLES);else if(O.isLine){let be=W.linewidth;be===void 0&&(be=1),ye.setLineWidth(be*mt()),O.isLineSegments?Qe.setMode(z.LINES):O.isLineLoop?Qe.setMode(z.LINE_LOOP):Qe.setMode(z.LINE_STRIP)}else O.isPoints?Qe.setMode(z.POINTS):O.isSprite&&Qe.setMode(z.TRIANGLES);if(O.isBatchedMesh)if(O._multiDrawInstances!==null)Qe.renderMultiDrawInstances(O._multiDrawStarts,O._multiDrawCounts,O._multiDrawCount,O._multiDrawInstances);else if(Ge.get("WEBGL_multi_draw"))Qe.renderMultiDraw(O._multiDrawStarts,O._multiDrawCounts,O._multiDrawCount);else{const be=O._multiDrawStarts,An=O._multiDrawCounts,et=O._multiDrawCount,an=Se?B.get(Se).bytesPerElement:1,bi=Ee.get(W).currentProgram.getUniforms();for(let jt=0;jt<et;jt++)bi.setValue(z,"_gl_DrawID",jt),Qe.render(be[jt]/an,An[jt])}else if(O.isInstancedMesh)Qe.renderInstances($e,ft,O.count);else if(V.isInstancedBufferGeometry){const be=V._maxInstanceCount!==void 0?V._maxInstanceCount:1/0,An=Math.min(V.instanceCount,be);Qe.renderInstances($e,ft,An)}else Qe.render($e,ft)};function it(b,F,V){b.transparent===!0&&b.side===vt&&b.forceSinglePass===!1?(b.side=Wt,b.needsUpdate=!0,Ks(b,F,V),b.side=Hn,b.needsUpdate=!0,Ks(b,F,V),b.side=vt):Ks(b,F,V)}this.compile=function(b,F,V=null){V===null&&(V=b),p=Re.get(V),p.init(F),y.push(p),V.traverseVisible(function(O){O.isLight&&O.layers.test(F.layers)&&(p.pushLight(O),O.castShadow&&p.pushShadow(O))}),b!==V&&b.traverseVisible(function(O){O.isLight&&O.layers.test(F.layers)&&(p.pushLight(O),O.castShadow&&p.pushShadow(O))}),p.setupLights();const W=new Set;return b.traverse(function(O){if(!(O.isMesh||O.isPoints||O.isLine||O.isSprite))return;const le=O.material;if(le)if(Array.isArray(le))for(let me=0;me<le.length;me++){const Me=le[me];it(Me,V,O),W.add(Me)}else it(le,V,O),W.add(le)}),y.pop(),p=null,W},this.compileAsync=function(b,F,V=null){const W=this.compile(b,F,V);return new Promise(O=>{function le(){if(W.forEach(function(me){Ee.get(me).currentProgram.isReady()&&W.delete(me)}),W.size===0){O(b);return}setTimeout(le,10)}Ge.get("KHR_parallel_shader_compile")!==null?le():setTimeout(le,10)})};let on=null;function En(b){on&&on(b)}function _l(){ai.stop()}function vl(){ai.start()}const ai=new zh;ai.setAnimationLoop(En),typeof self<"u"&&ai.setContext(self),this.setAnimationLoop=function(b){on=b,Y.setAnimationLoop(b),b===null?ai.stop():ai.start()},Y.addEventListener("sessionstart",_l),Y.addEventListener("sessionend",vl),this.render=function(b,F){if(F!==void 0&&F.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(P===!0)return;if(b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),F.parent===null&&F.matrixWorldAutoUpdate===!0&&F.updateMatrixWorld(),Y.enabled===!0&&Y.isPresenting===!0&&(Y.cameraAutoUpdate===!0&&Y.updateCamera(F),F=Y.getCamera()),b.isScene===!0&&b.onBeforeRender(x,b,F,D),p=Re.get(b,y.length),p.init(F),y.push(p),Ce.multiplyMatrices(F.projectionMatrix,F.matrixWorldInverse),$.setFromProjectionMatrix(Ce),xe=this.localClippingEnabled,oe=j.init(this.clippingPlanes,xe),m=ne.get(b,v.length),m.init(),v.push(m),Y.enabled===!0&&Y.isPresenting===!0){const le=x.xr.getDepthSensingMesh();le!==null&&Jr(le,F,-1/0,x.sortObjects)}Jr(b,F,0,x.sortObjects),m.finish(),x.sortObjects===!0&&m.sort(re,de),Pe=Y.enabled===!1||Y.isPresenting===!1||Y.hasDepthSensing()===!1,Pe&&_e.addToRenderList(m,b),this.info.render.frame++,oe===!0&&j.beginShadows();const V=p.state.shadowsArray;ee.render(V,b,F),oe===!0&&j.endShadows(),this.info.autoReset===!0&&this.info.reset();const W=m.opaque,O=m.transmissive;if(p.setupLights(),F.isArrayCamera){const le=F.cameras;if(O.length>0)for(let me=0,Me=le.length;me<Me;me++){const Se=le[me];yl(W,O,b,Se)}Pe&&_e.render(b);for(let me=0,Me=le.length;me<Me;me++){const Se=le[me];xl(m,b,Se,Se.viewport)}}else O.length>0&&yl(W,O,b,F),Pe&&_e.render(b),xl(m,b,F);D!==null&&(C.updateMultisampleRenderTarget(D),C.updateRenderTargetMipmap(D)),b.isScene===!0&&b.onAfterRender(x,b,F),ht.resetDefaultState(),w=-1,M=null,y.pop(),y.length>0?(p=y[y.length-1],oe===!0&&j.setGlobalState(x.clippingPlanes,p.state.camera)):p=null,v.pop(),v.length>0?m=v[v.length-1]:m=null};function Jr(b,F,V,W){if(b.visible===!1)return;if(b.layers.test(F.layers)){if(b.isGroup)V=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(F);else if(b.isLight)p.pushLight(b),b.castShadow&&p.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||$.intersectsSprite(b)){W&&Le.setFromMatrixPosition(b.matrixWorld).applyMatrix4(Ce);const me=X.update(b),Me=b.material;Me.visible&&m.push(b,me,Me,V,Le.z,null)}}else if((b.isMesh||b.isLine||b.isPoints)&&(!b.frustumCulled||$.intersectsObject(b))){const me=X.update(b),Me=b.material;if(W&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),Le.copy(b.boundingSphere.center)):(me.boundingSphere===null&&me.computeBoundingSphere(),Le.copy(me.boundingSphere.center)),Le.applyMatrix4(b.matrixWorld).applyMatrix4(Ce)),Array.isArray(Me)){const Se=me.groups;for(let Ue=0,ze=Se.length;Ue<ze;Ue++){const we=Se[Ue],$e=Me[we.materialIndex];$e&&$e.visible&&m.push(b,me,$e,V,Le.z,we)}}else Me.visible&&m.push(b,me,Me,V,Le.z,null)}}const le=b.children;for(let me=0,Me=le.length;me<Me;me++)Jr(le[me],F,V,W)}function xl(b,F,V,W){const O=b.opaque,le=b.transmissive,me=b.transparent;p.setupLightsView(V),oe===!0&&j.setGlobalState(x.clippingPlanes,V),W&&ye.viewport(I.copy(W)),O.length>0&&js(O,F,V),le.length>0&&js(le,F,V),me.length>0&&js(me,F,V),ye.buffers.depth.setTest(!0),ye.buffers.depth.setMask(!0),ye.buffers.color.setMask(!0),ye.setPolygonOffset(!1)}function yl(b,F,V,W){if((V.isScene===!0?V.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[W.id]===void 0&&(p.state.transmissionRenderTarget[W.id]=new sn(1,1,{generateMipmaps:!0,type:Ge.has("EXT_color_buffer_half_float")||Ge.has("EXT_color_buffer_float")?Mn:Vn,minFilter:On,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:qe.workingColorSpace}));const le=p.state.transmissionRenderTarget[W.id],me=W.viewport||I;le.setSize(me.z,me.w);const Me=x.getRenderTarget();x.setRenderTarget(le),x.getClearColor(k),K=x.getClearAlpha(),K<1&&x.setClearColor(16777215,.5),x.clear(),Pe&&_e.render(V);const Se=x.toneMapping;x.toneMapping=oi;const Ue=W.viewport;if(W.viewport!==void 0&&(W.viewport=void 0),p.setupLightsView(W),oe===!0&&j.setGlobalState(x.clippingPlanes,W),js(b,V,W),C.updateMultisampleRenderTarget(le),C.updateRenderTargetMipmap(le),Ge.has("WEBGL_multisampled_render_to_texture")===!1){let ze=!1;for(let we=0,$e=F.length;we<$e;we++){const ut=F[we],ft=ut.object,Yt=ut.geometry,Qe=ut.material,be=ut.group;if(Qe.side===vt&&ft.layers.test(W.layers)){const An=Qe.side;Qe.side=Wt,Qe.needsUpdate=!0,Ml(ft,V,W,Yt,Qe,be),Qe.side=An,Qe.needsUpdate=!0,ze=!0}}ze===!0&&(C.updateMultisampleRenderTarget(le),C.updateRenderTargetMipmap(le))}x.setRenderTarget(Me),x.setClearColor(k,K),Ue!==void 0&&(W.viewport=Ue),x.toneMapping=Se}function js(b,F,V){const W=F.isScene===!0?F.overrideMaterial:null;for(let O=0,le=b.length;O<le;O++){const me=b[O],Me=me.object,Se=me.geometry,Ue=W===null?me.material:W,ze=me.group;Me.layers.test(V.layers)&&Ml(Me,F,V,Se,Ue,ze)}}function Ml(b,F,V,W,O,le){b.onBeforeRender(x,F,V,W,O,le),b.modelViewMatrix.multiplyMatrices(V.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),O.onBeforeRender(x,F,V,W,b,le),O.transparent===!0&&O.side===vt&&O.forceSinglePass===!1?(O.side=Wt,O.needsUpdate=!0,x.renderBufferDirect(V,F,W,O,b,le),O.side=Hn,O.needsUpdate=!0,x.renderBufferDirect(V,F,W,O,b,le),O.side=vt):x.renderBufferDirect(V,F,W,O,b,le),b.onAfterRender(x,F,V,W,O,le)}function Ks(b,F,V){F.isScene!==!0&&(F=lt);const W=Ee.get(b),O=p.state.lights,le=p.state.shadowsArray,me=O.state.version,Me=ce.getParameters(b,O.state,le,F,V),Se=ce.getProgramCacheKey(Me);let Ue=W.programs;W.environment=b.isMeshStandardMaterial?F.environment:null,W.fog=F.fog,W.envMap=(b.isMeshStandardMaterial?R:S).get(b.envMap||W.environment),W.envMapRotation=W.environment!==null&&b.envMap===null?F.environmentRotation:b.envMapRotation,Ue===void 0&&(b.addEventListener("dispose",Oe),Ue=new Map,W.programs=Ue);let ze=Ue.get(Se);if(ze!==void 0){if(W.currentProgram===ze&&W.lightsStateVersion===me)return wl(b,Me),ze}else Me.uniforms=ce.getUniforms(b),b.onBeforeCompile(Me,x),ze=ce.acquireProgram(Me,Se),Ue.set(Se,ze),W.uniforms=Me.uniforms;const we=W.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(we.clippingPlanes=j.uniform),wl(b,Me),W.needsLights=pu(b),W.lightsStateVersion=me,W.needsLights&&(we.ambientLightColor.value=O.state.ambient,we.lightProbe.value=O.state.probe,we.directionalLights.value=O.state.directional,we.directionalLightShadows.value=O.state.directionalShadow,we.spotLights.value=O.state.spot,we.spotLightShadows.value=O.state.spotShadow,we.rectAreaLights.value=O.state.rectArea,we.ltc_1.value=O.state.rectAreaLTC1,we.ltc_2.value=O.state.rectAreaLTC2,we.pointLights.value=O.state.point,we.pointLightShadows.value=O.state.pointShadow,we.hemisphereLights.value=O.state.hemi,we.directionalShadowMap.value=O.state.directionalShadowMap,we.directionalShadowMatrix.value=O.state.directionalShadowMatrix,we.spotShadowMap.value=O.state.spotShadowMap,we.spotLightMatrix.value=O.state.spotLightMatrix,we.spotLightMap.value=O.state.spotLightMap,we.pointShadowMap.value=O.state.pointShadowMap,we.pointShadowMatrix.value=O.state.pointShadowMatrix),W.currentProgram=ze,W.uniformsList=null,ze}function Sl(b){if(b.uniformsList===null){const F=b.currentProgram.getUniforms();b.uniformsList=Fr.seqWithValue(F.seq,b.uniforms)}return b.uniformsList}function wl(b,F){const V=Ee.get(b);V.outputColorSpace=F.outputColorSpace,V.batching=F.batching,V.batchingColor=F.batchingColor,V.instancing=F.instancing,V.instancingColor=F.instancingColor,V.instancingMorph=F.instancingMorph,V.skinning=F.skinning,V.morphTargets=F.morphTargets,V.morphNormals=F.morphNormals,V.morphColors=F.morphColors,V.morphTargetsCount=F.morphTargetsCount,V.numClippingPlanes=F.numClippingPlanes,V.numIntersection=F.numClipIntersection,V.vertexAlphas=F.vertexAlphas,V.vertexTangents=F.vertexTangents,V.toneMapping=F.toneMapping}function du(b,F,V,W,O){F.isScene!==!0&&(F=lt),C.resetTextureUnits();const le=F.fog,me=W.isMeshStandardMaterial?F.environment:null,Me=D===null?x.outputColorSpace:D.isXRRenderTarget===!0?D.texture.colorSpace:qt,Se=(W.isMeshStandardMaterial?R:S).get(W.envMap||me),Ue=W.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,ze=!!V.attributes.tangent&&(!!W.normalMap||W.anisotropy>0),we=!!V.morphAttributes.position,$e=!!V.morphAttributes.normal,ut=!!V.morphAttributes.color;let ft=oi;W.toneMapped&&(D===null||D.isXRRenderTarget===!0)&&(ft=x.toneMapping);const Yt=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,Qe=Yt!==void 0?Yt.length:0,be=Ee.get(W),An=p.state.lights;if(oe===!0&&(xe===!0||b!==M)){const Jt=b===M&&W.id===w;j.setState(W,b,Jt)}let et=!1;W.version===be.__version?(be.needsLights&&be.lightsStateVersion!==An.state.version||be.outputColorSpace!==Me||O.isBatchedMesh&&be.batching===!1||!O.isBatchedMesh&&be.batching===!0||O.isBatchedMesh&&be.batchingColor===!0&&O.colorTexture===null||O.isBatchedMesh&&be.batchingColor===!1&&O.colorTexture!==null||O.isInstancedMesh&&be.instancing===!1||!O.isInstancedMesh&&be.instancing===!0||O.isSkinnedMesh&&be.skinning===!1||!O.isSkinnedMesh&&be.skinning===!0||O.isInstancedMesh&&be.instancingColor===!0&&O.instanceColor===null||O.isInstancedMesh&&be.instancingColor===!1&&O.instanceColor!==null||O.isInstancedMesh&&be.instancingMorph===!0&&O.morphTexture===null||O.isInstancedMesh&&be.instancingMorph===!1&&O.morphTexture!==null||be.envMap!==Se||W.fog===!0&&be.fog!==le||be.numClippingPlanes!==void 0&&(be.numClippingPlanes!==j.numPlanes||be.numIntersection!==j.numIntersection)||be.vertexAlphas!==Ue||be.vertexTangents!==ze||be.morphTargets!==we||be.morphNormals!==$e||be.morphColors!==ut||be.toneMapping!==ft||be.morphTargetsCount!==Qe)&&(et=!0):(et=!0,be.__version=W.version);let an=be.currentProgram;et===!0&&(an=Ks(W,F,O));let bi=!1,jt=!1,gs=!1;const pt=an.getUniforms(),_n=be.uniforms;if(ye.useProgram(an.program)&&(bi=!0,jt=!0,gs=!0),W.id!==w&&(w=W.id,jt=!0),bi||M!==b){ye.buffers.depth.getReversed()?(ue.copy(b.projectionMatrix),xd(ue),yd(ue),pt.setValue(z,"projectionMatrix",ue)):pt.setValue(z,"projectionMatrix",b.projectionMatrix),pt.setValue(z,"viewMatrix",b.matrixWorldInverse);const Wn=pt.map.cameraPosition;Wn!==void 0&&Wn.setValue(z,Ne.setFromMatrixPosition(b.matrixWorld)),He.logarithmicDepthBuffer&&pt.setValue(z,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),(W.isMeshPhongMaterial||W.isMeshToonMaterial||W.isMeshLambertMaterial||W.isMeshBasicMaterial||W.isMeshStandardMaterial||W.isShaderMaterial)&&pt.setValue(z,"isOrthographic",b.isOrthographicCamera===!0),M!==b&&(M=b,jt=!0,gs=!0)}if(O.isSkinnedMesh){pt.setOptional(z,O,"bindMatrix"),pt.setOptional(z,O,"bindMatrixInverse");const Jt=O.skeleton;Jt&&(Jt.boneTexture===null&&Jt.computeBoneTexture(),pt.setValue(z,"boneTexture",Jt.boneTexture,C))}O.isBatchedMesh&&(pt.setOptional(z,O,"batchingTexture"),pt.setValue(z,"batchingTexture",O._matricesTexture,C),pt.setOptional(z,O,"batchingIdTexture"),pt.setValue(z,"batchingIdTexture",O._indirectTexture,C),pt.setOptional(z,O,"batchingColorTexture"),O._colorsTexture!==null&&pt.setValue(z,"batchingColorTexture",O._colorsTexture,C));const _s=V.morphAttributes;if((_s.position!==void 0||_s.normal!==void 0||_s.color!==void 0)&&Ae.update(O,V,an),(jt||be.receiveShadow!==O.receiveShadow)&&(be.receiveShadow=O.receiveShadow,pt.setValue(z,"receiveShadow",O.receiveShadow)),W.isMeshGouraudMaterial&&W.envMap!==null&&(_n.envMap.value=Se,_n.flipEnvMap.value=Se.isCubeTexture&&Se.isRenderTargetTexture===!1?-1:1),W.isMeshStandardMaterial&&W.envMap===null&&F.environment!==null&&(_n.envMapIntensity.value=F.environmentIntensity),jt&&(pt.setValue(z,"toneMappingExposure",x.toneMappingExposure),be.needsLights&&fu(_n,gs),le&&W.fog===!0&&J.refreshFogUniforms(_n,le),J.refreshMaterialUniforms(_n,W,q,te,p.state.transmissionRenderTarget[b.id]),Fr.upload(z,Sl(be),_n,C)),W.isShaderMaterial&&W.uniformsNeedUpdate===!0&&(Fr.upload(z,Sl(be),_n,C),W.uniformsNeedUpdate=!1),W.isSpriteMaterial&&pt.setValue(z,"center",O.center),pt.setValue(z,"modelViewMatrix",O.modelViewMatrix),pt.setValue(z,"normalMatrix",O.normalMatrix),pt.setValue(z,"modelMatrix",O.matrixWorld),W.isShaderMaterial||W.isRawShaderMaterial){const Jt=W.uniformsGroups;for(let Wn=0,Xn=Jt.length;Wn<Xn;Wn++){const bl=Jt[Wn];U.update(bl,an),U.bind(bl,an)}}return an}function fu(b,F){b.ambientLightColor.needsUpdate=F,b.lightProbe.needsUpdate=F,b.directionalLights.needsUpdate=F,b.directionalLightShadows.needsUpdate=F,b.pointLights.needsUpdate=F,b.pointLightShadows.needsUpdate=F,b.spotLights.needsUpdate=F,b.spotLightShadows.needsUpdate=F,b.rectAreaLights.needsUpdate=F,b.hemisphereLights.needsUpdate=F}function pu(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return T},this.getActiveMipmapLevel=function(){return A},this.getRenderTarget=function(){return D},this.setRenderTargetTextures=function(b,F,V){Ee.get(b.texture).__webglTexture=F,Ee.get(b.depthTexture).__webglTexture=V;const W=Ee.get(b);W.__hasExternalTextures=!0,W.__autoAllocateDepthBuffer=V===void 0,W.__autoAllocateDepthBuffer||Ge.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),W.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(b,F){const V=Ee.get(b);V.__webglFramebuffer=F,V.__useDefaultFramebuffer=F===void 0},this.setRenderTarget=function(b,F=0,V=0){D=b,T=F,A=V;let W=!0,O=null,le=!1,me=!1;if(b){const Se=Ee.get(b);if(Se.__useDefaultFramebuffer!==void 0)ye.bindFramebuffer(z.FRAMEBUFFER,null),W=!1;else if(Se.__webglFramebuffer===void 0)C.setupRenderTarget(b);else if(Se.__hasExternalTextures)C.rebindTextures(b,Ee.get(b.texture).__webglTexture,Ee.get(b.depthTexture).__webglTexture);else if(b.depthBuffer){const we=b.depthTexture;if(Se.__boundDepthTexture!==we){if(we!==null&&Ee.has(we)&&(b.width!==we.image.width||b.height!==we.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");C.setupDepthRenderbuffer(b)}}const Ue=b.texture;(Ue.isData3DTexture||Ue.isDataArrayTexture||Ue.isCompressedArrayTexture)&&(me=!0);const ze=Ee.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray(ze[F])?O=ze[F][V]:O=ze[F],le=!0):b.samples>0&&C.useMultisampledRTT(b)===!1?O=Ee.get(b).__webglMultisampledFramebuffer:Array.isArray(ze)?O=ze[V]:O=ze,I.copy(b.viewport),L.copy(b.scissor),N=b.scissorTest}else I.copy(ve).multiplyScalar(q).floor(),L.copy(Be).multiplyScalar(q).floor(),N=je;if(ye.bindFramebuffer(z.FRAMEBUFFER,O)&&W&&ye.drawBuffers(b,O),ye.viewport(I),ye.scissor(L),ye.setScissorTest(N),le){const Se=Ee.get(b.texture);z.framebufferTexture2D(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_CUBE_MAP_POSITIVE_X+F,Se.__webglTexture,V)}else if(me){const Se=Ee.get(b.texture),Ue=F||0;z.framebufferTextureLayer(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,Se.__webglTexture,V||0,Ue)}w=-1},this.readRenderTargetPixels=function(b,F,V,W,O,le,me){if(!(b&&b.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Me=Ee.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&me!==void 0&&(Me=Me[me]),Me){ye.bindFramebuffer(z.FRAMEBUFFER,Me);try{const Se=b.texture,Ue=Se.format,ze=Se.type;if(!He.textureFormatReadable(Ue)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!He.textureTypeReadable(ze)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}F>=0&&F<=b.width-W&&V>=0&&V<=b.height-O&&z.readPixels(F,V,W,O,Fe.convert(Ue),Fe.convert(ze),le)}finally{const Se=D!==null?Ee.get(D).__webglFramebuffer:null;ye.bindFramebuffer(z.FRAMEBUFFER,Se)}}},this.readRenderTargetPixelsAsync=async function(b,F,V,W,O,le,me){if(!(b&&b.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Me=Ee.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&me!==void 0&&(Me=Me[me]),Me){const Se=b.texture,Ue=Se.format,ze=Se.type;if(!He.textureFormatReadable(Ue))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!He.textureTypeReadable(ze))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(F>=0&&F<=b.width-W&&V>=0&&V<=b.height-O){ye.bindFramebuffer(z.FRAMEBUFFER,Me);const we=z.createBuffer();z.bindBuffer(z.PIXEL_PACK_BUFFER,we),z.bufferData(z.PIXEL_PACK_BUFFER,le.byteLength,z.STREAM_READ),z.readPixels(F,V,W,O,Fe.convert(Ue),Fe.convert(ze),0);const $e=D!==null?Ee.get(D).__webglFramebuffer:null;ye.bindFramebuffer(z.FRAMEBUFFER,$e);const ut=z.fenceSync(z.SYNC_GPU_COMMANDS_COMPLETE,0);return z.flush(),await vd(z,ut,4),z.bindBuffer(z.PIXEL_PACK_BUFFER,we),z.getBufferSubData(z.PIXEL_PACK_BUFFER,0,le),z.deleteBuffer(we),z.deleteSync(ut),le}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(b,F=null,V=0){b.isTexture!==!0&&(Ls("WebGLRenderer: copyFramebufferToTexture function signature has changed."),F=arguments[0]||null,b=arguments[1]);const W=Math.pow(2,-V),O=Math.floor(b.image.width*W),le=Math.floor(b.image.height*W),me=F!==null?F.x:0,Me=F!==null?F.y:0;C.setTexture2D(b,0),z.copyTexSubImage2D(z.TEXTURE_2D,V,0,0,me,Me,O,le),ye.unbindTexture()},this.copyTextureToTexture=function(b,F,V=null,W=null,O=0){b.isTexture!==!0&&(Ls("WebGLRenderer: copyTextureToTexture function signature has changed."),W=arguments[0]||null,b=arguments[1],F=arguments[2],O=arguments[3]||0,V=null);let le,me,Me,Se,Ue,ze,we,$e,ut;const ft=b.isCompressedTexture?b.mipmaps[O]:b.image;V!==null?(le=V.max.x-V.min.x,me=V.max.y-V.min.y,Me=V.isBox3?V.max.z-V.min.z:1,Se=V.min.x,Ue=V.min.y,ze=V.isBox3?V.min.z:0):(le=ft.width,me=ft.height,Me=ft.depth||1,Se=0,Ue=0,ze=0),W!==null?(we=W.x,$e=W.y,ut=W.z):(we=0,$e=0,ut=0);const Yt=Fe.convert(F.format),Qe=Fe.convert(F.type);let be;F.isData3DTexture?(C.setTexture3D(F,0),be=z.TEXTURE_3D):F.isDataArrayTexture||F.isCompressedArrayTexture?(C.setTexture2DArray(F,0),be=z.TEXTURE_2D_ARRAY):(C.setTexture2D(F,0),be=z.TEXTURE_2D),z.pixelStorei(z.UNPACK_FLIP_Y_WEBGL,F.flipY),z.pixelStorei(z.UNPACK_PREMULTIPLY_ALPHA_WEBGL,F.premultiplyAlpha),z.pixelStorei(z.UNPACK_ALIGNMENT,F.unpackAlignment);const An=z.getParameter(z.UNPACK_ROW_LENGTH),et=z.getParameter(z.UNPACK_IMAGE_HEIGHT),an=z.getParameter(z.UNPACK_SKIP_PIXELS),bi=z.getParameter(z.UNPACK_SKIP_ROWS),jt=z.getParameter(z.UNPACK_SKIP_IMAGES);z.pixelStorei(z.UNPACK_ROW_LENGTH,ft.width),z.pixelStorei(z.UNPACK_IMAGE_HEIGHT,ft.height),z.pixelStorei(z.UNPACK_SKIP_PIXELS,Se),z.pixelStorei(z.UNPACK_SKIP_ROWS,Ue),z.pixelStorei(z.UNPACK_SKIP_IMAGES,ze);const gs=b.isDataArrayTexture||b.isData3DTexture,pt=F.isDataArrayTexture||F.isData3DTexture;if(b.isRenderTargetTexture||b.isDepthTexture){const _n=Ee.get(b),_s=Ee.get(F),Jt=Ee.get(_n.__renderTarget),Wn=Ee.get(_s.__renderTarget);ye.bindFramebuffer(z.READ_FRAMEBUFFER,Jt.__webglFramebuffer),ye.bindFramebuffer(z.DRAW_FRAMEBUFFER,Wn.__webglFramebuffer);for(let Xn=0;Xn<Me;Xn++)gs&&z.framebufferTextureLayer(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,Ee.get(b).__webglTexture,O,ze+Xn),b.isDepthTexture?(pt&&z.framebufferTextureLayer(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,Ee.get(F).__webglTexture,O,ut+Xn),z.blitFramebuffer(Se,Ue,le,me,we,$e,le,me,z.DEPTH_BUFFER_BIT,z.NEAREST)):pt?z.copyTexSubImage3D(be,O,we,$e,ut+Xn,Se,Ue,le,me):z.copyTexSubImage2D(be,O,we,$e,ut+Xn,Se,Ue,le,me);ye.bindFramebuffer(z.READ_FRAMEBUFFER,null),ye.bindFramebuffer(z.DRAW_FRAMEBUFFER,null)}else pt?b.isDataTexture||b.isData3DTexture?z.texSubImage3D(be,O,we,$e,ut,le,me,Me,Yt,Qe,ft.data):F.isCompressedArrayTexture?z.compressedTexSubImage3D(be,O,we,$e,ut,le,me,Me,Yt,ft.data):z.texSubImage3D(be,O,we,$e,ut,le,me,Me,Yt,Qe,ft):b.isDataTexture?z.texSubImage2D(z.TEXTURE_2D,O,we,$e,le,me,Yt,Qe,ft.data):b.isCompressedTexture?z.compressedTexSubImage2D(z.TEXTURE_2D,O,we,$e,ft.width,ft.height,Yt,ft.data):z.texSubImage2D(z.TEXTURE_2D,O,we,$e,le,me,Yt,Qe,ft);z.pixelStorei(z.UNPACK_ROW_LENGTH,An),z.pixelStorei(z.UNPACK_IMAGE_HEIGHT,et),z.pixelStorei(z.UNPACK_SKIP_PIXELS,an),z.pixelStorei(z.UNPACK_SKIP_ROWS,bi),z.pixelStorei(z.UNPACK_SKIP_IMAGES,jt),O===0&&F.generateMipmaps&&z.generateMipmap(be),ye.unbindTexture()},this.copyTextureToTexture3D=function(b,F,V=null,W=null,O=0){return b.isTexture!==!0&&(Ls("WebGLRenderer: copyTextureToTexture3D function signature has changed."),V=arguments[0]||null,W=arguments[1]||null,b=arguments[2],F=arguments[3],O=arguments[4]||0),Ls('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(b,F,V,W,O)},this.initRenderTarget=function(b){Ee.get(b).__webglFramebuffer===void 0&&C.setupRenderTarget(b)},this.initTexture=function(b){b.isCubeTexture?C.setTextureCube(b,0):b.isData3DTexture?C.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?C.setTexture2DArray(b,0):C.setTexture2D(b,0),ye.unbindTexture()},this.resetState=function(){T=0,A=0,D=null,ye.reset(),ht.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return zn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorspace=qe._getDrawingBufferColorSpace(e),t.unpackColorSpace=qe._getUnpackColorSpace()}}class Kr{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new se(e),this.density=t}clone(){return new Kr(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class P0 extends dt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new gn,this.environmentIntensity=1,this.environmentRotation=new gn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class Xh{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Pa,this.updateRanges=[],this.version=0,this.uuid=pn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let i=0,s=this.stride;i<s;i++)this.array[e+i]=t.array[n+i];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=pn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=pn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Ot=new E;class Vs{constructor(e,t,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)Ot.fromBufferAttribute(this,t),Ot.applyMatrix4(e),this.setXYZ(t,Ot.x,Ot.y,Ot.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Ot.fromBufferAttribute(this,t),Ot.applyNormalMatrix(e),this.setXYZ(t,Ot.x,Ot.y,Ot.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Ot.fromBufferAttribute(this,t),Ot.transformDirection(e),this.setXYZ(t,Ot.x,Ot.y,Ot.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=un(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=rt(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=rt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=rt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=rt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=rt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=un(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=un(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=un(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=un(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=rt(t,this.array),n=rt(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=rt(t,this.array),n=rt(n,this.array),i=rt(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=rt(t,this.array),n=rt(n,this.array),i=rt(i,this.array),s=rt(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this.data.array[e+3]=s,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[i+s])}return new At(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new Vs(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[i+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class Da extends mn{static get type(){return"SpriteMaterial"}constructor(e){super(),this.isSpriteMaterial=!0,this.color=new se(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let zi;const Ss=new E,ki=new E,Gi=new E,Hi=new ae,ws=new ae,qh=new Ie,gr=new E,bs=new E,_r=new E,wc=new ae,Co=new ae,bc=new ae;class Tc extends dt{constructor(e=new Da){if(super(),this.isSprite=!0,this.type="Sprite",zi===void 0){zi=new wt;const t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new Xh(t,5);zi.setIndex([0,1,2,0,2,3]),zi.setAttribute("position",new Vs(n,3,0,!1)),zi.setAttribute("uv",new Vs(n,2,3,!1))}this.geometry=zi,this.material=e,this.center=new ae(.5,.5)}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),ki.setFromMatrixScale(this.matrixWorld),qh.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),Gi.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&ki.multiplyScalar(-Gi.z);const n=this.material.rotation;let i,s;n!==0&&(s=Math.cos(n),i=Math.sin(n));const r=this.center;vr(gr.set(-.5,-.5,0),Gi,r,ki,i,s),vr(bs.set(.5,-.5,0),Gi,r,ki,i,s),vr(_r.set(.5,.5,0),Gi,r,ki,i,s),wc.set(0,0),Co.set(1,0),bc.set(1,1);let a=e.ray.intersectTriangle(gr,bs,_r,!1,Ss);if(a===null&&(vr(bs.set(-.5,.5,0),Gi,r,ki,i,s),Co.set(0,1),a=e.ray.intersectTriangle(gr,_r,bs,!1,Ss),a===null))return;const l=e.ray.origin.distanceTo(Ss);l<e.near||l>e.far||t.push({distance:l,point:Ss.clone(),uv:tn.getInterpolation(Ss,gr,bs,_r,wc,Co,bc,new ae),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function vr(o,e,t,n,i,s){Hi.subVectors(o,t).addScalar(.5).multiply(n),i!==void 0?(ws.x=s*Hi.x-i*Hi.y,ws.y=i*Hi.x+s*Hi.y):ws.copy(Hi),o.copy(e),o.x+=ws.x,o.y+=ws.y,o.applyMatrix4(qh)}const Ec=new E,Ac=new Je,Cc=new Je,L0=new E,Rc=new Ie,xr=new E,Ro=new Sn,Pc=new Ie,Po=new Xs;class D0 extends Te{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=Cl,this.bindMatrix=new Ie,this.bindMatrixInverse=new Ie,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new It),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,xr),this.boundingBox.expandByPoint(xr)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Sn),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,xr),this.boundingSphere.expandByPoint(xr)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const n=this.material,i=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Ro.copy(this.boundingSphere),Ro.applyMatrix4(i),e.ray.intersectsSphere(Ro)!==!1&&(Pc.copy(i).invert(),Po.copy(e.ray).applyMatrix4(Pc),!(this.boundingBox!==null&&Po.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,Po)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new Je,t=this.geometry.attributes.skinWeight;for(let n=0,i=t.count;n<i;n++){e.fromBufferAttribute(t,n);const s=1/e.manhattanLength();s!==1/0?e.multiplyScalar(s):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===Cl?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===Ou?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const n=this.skeleton,i=this.geometry;Ac.fromBufferAttribute(i.attributes.skinIndex,e),Cc.fromBufferAttribute(i.attributes.skinWeight,e),Ec.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let s=0;s<4;s++){const r=Cc.getComponent(s);if(r!==0){const a=Ac.getComponent(s);Rc.multiplyMatrices(n.bones[a].matrixWorld,n.boneInverses[a]),t.addScaledVector(L0.copy(Ec).applyMatrix4(Rc),r)}}return t.applyMatrix4(this.bindMatrixInverse)}}class Yh extends dt{constructor(){super(),this.isBone=!0,this.type="Bone"}}class jh extends Et{constructor(e=null,t=1,n=1,i,s,r,a,l,c=Xt,u=Xt,d,h){super(null,r,a,l,c,u,i,s,d,h),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Lc=new Ie,I0=new Ie;class nl{constructor(e=[],t=[]){this.uuid=pn(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new Ie)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const n=new Ie;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const e=this.bones,t=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let s=0,r=e.length;s<r;s++){const a=e[s]?e[s].matrixWorld:I0;Lc.multiplyMatrices(a,t[s]),Lc.toArray(n,s*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new nl(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const n=new jh(t,e,e,nn,dn);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){const i=this.bones[t];if(i.name===e)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,i=e.bones.length;n<i;n++){const s=e.bones[n];let r=t[s];r===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",s),r=new Yh),this.bones.push(r),this.boneInverses.push(new Ie().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){const e={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,n=this.boneInverses;for(let i=0,s=t.length;i<s;i++){const r=t[i];e.bones.push(r.uuid);const a=n[i];e.boneInverses.push(a.toArray())}return e}}class Ia extends At{constructor(e,t,n,i=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const Vi=new Ie,Dc=new Ie,yr=[],Ic=new It,N0=new Ie,Ts=new Te,Es=new Sn;class Kh extends Te{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Ia(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,N0)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new It),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Vi),Ic.copy(e.boundingBox).applyMatrix4(Vi),this.boundingBox.union(Ic)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Sn),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Vi),Es.copy(e.boundingSphere).applyMatrix4(Vi),this.boundingSphere.union(Es)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const n=t.morphTargetInfluences,i=this.morphTexture.source.data.data,s=n.length+1,r=e*s+1;for(let a=0;a<n.length;a++)n[a]=i[r+a]}raycast(e,t){const n=this.matrixWorld,i=this.count;if(Ts.geometry=this.geometry,Ts.material=this.material,Ts.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Es.copy(this.boundingSphere),Es.applyMatrix4(n),e.ray.intersectsSphere(Es)!==!1))for(let s=0;s<i;s++){this.getMatrixAt(s,Vi),Dc.multiplyMatrices(n,Vi),Ts.matrixWorld=Dc,Ts.raycast(e,yr);for(let r=0,a=yr.length;r<a;r++){const l=yr[r];l.instanceId=s,l.object=this,t.push(l)}yr.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Ia(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const n=t.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new jh(new Float32Array(i*this.count),i,this.count,Ya,dn));const s=this.morphTexture.source.data.data;let r=0;for(let c=0;c<n.length;c++)r+=n[c];const a=this.geometry.morphTargetsRelative?1:1-r,l=i*e;s[l]=a,s.set(n,l+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}class $h extends mn{static get type(){return"LineBasicMaterial"}constructor(e){super(),this.isLineBasicMaterial=!0,this.color=new se(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Gr=new E,Hr=new E,Nc=new Ie,As=new Xs,Mr=new Sn,Lo=new E,Uc=new E;class il extends dt{constructor(e=new wt,t=new $h){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let i=1,s=t.count;i<s;i++)Gr.fromBufferAttribute(t,i-1),Hr.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=Gr.distanceTo(Hr);e.setAttribute("lineDistance",new ot(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,s=e.params.Line.threshold,r=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Mr.copy(n.boundingSphere),Mr.applyMatrix4(i),Mr.radius+=s,e.ray.intersectsSphere(Mr)===!1)return;Nc.copy(i).invert(),As.copy(e.ray).applyMatrix4(Nc);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,u=n.index,h=n.attributes.position;if(u!==null){const f=Math.max(0,r.start),g=Math.min(u.count,r.start+r.count);for(let _=f,m=g-1;_<m;_+=c){const p=u.getX(_),v=u.getX(_+1),y=Sr(this,e,As,l,p,v);y&&t.push(y)}if(this.isLineLoop){const _=u.getX(g-1),m=u.getX(f),p=Sr(this,e,As,l,_,m);p&&t.push(p)}}else{const f=Math.max(0,r.start),g=Math.min(h.count,r.start+r.count);for(let _=f,m=g-1;_<m;_+=c){const p=Sr(this,e,As,l,_,_+1);p&&t.push(p)}if(this.isLineLoop){const _=Sr(this,e,As,l,g-1,f);_&&t.push(_)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,r=i.length;s<r;s++){const a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function Sr(o,e,t,n,i,s){const r=o.geometry.attributes.position;if(Gr.fromBufferAttribute(r,i),Hr.fromBufferAttribute(r,s),t.distanceSqToSegment(Gr,Hr,Lo,Uc)>n)return;Lo.applyMatrix4(o.matrixWorld);const l=e.ray.origin.distanceTo(Lo);if(!(l<e.near||l>e.far))return{distance:l,point:Uc.clone().applyMatrix4(o.matrixWorld),index:i,face:null,faceIndex:null,barycoord:null,object:o}}const Bc=new E,Fc=new E;class U0 extends il{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let i=0,s=t.count;i<s;i+=2)Bc.fromBufferAttribute(t,i),Fc.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+Bc.distanceTo(Fc);e.setAttribute("lineDistance",new ot(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class B0 extends il{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class sl extends mn{static get type(){return"PointsMaterial"}constructor(e){super(),this.isPointsMaterial=!0,this.color=new se(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Oc=new Ie,Na=new Xs,wr=new Sn,br=new E;class Zh extends dt{constructor(e=new wt,t=new sl){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,s=e.params.Points.threshold,r=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),wr.copy(n.boundingSphere),wr.applyMatrix4(i),wr.radius+=s,e.ray.intersectsSphere(wr)===!1)return;Oc.copy(i).invert(),Na.copy(e.ray).applyMatrix4(Oc);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,d=n.attributes.position;if(c!==null){const h=Math.max(0,r.start),f=Math.min(c.count,r.start+r.count);for(let g=h,_=f;g<_;g++){const m=c.getX(g);br.fromBufferAttribute(d,m),zc(br,m,l,i,e,t,this)}}else{const h=Math.max(0,r.start),f=Math.min(d.count,r.start+r.count);for(let g=h,_=f;g<_;g++)br.fromBufferAttribute(d,g),zc(br,g,l,i,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,r=i.length;s<r;s++){const a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function zc(o,e,t,n,i,s,r){const a=Na.distanceSqToPoint(o);if(a<t){const l=new E;Na.closestPointToPoint(o,l),l.applyMatrix4(n);const c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;s.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:r})}}class Ws extends Et{constructor(e,t,n,i,s,r,a,l,c){super(e,t,n,i,s,r,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class wn{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){const n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let n,i=this.getPoint(0),s=0;t.push(0);for(let r=1;r<=e;r++)n=this.getPoint(r/e),s+=n.distanceTo(i),t.push(s),i=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){const n=this.getLengths();let i=0;const s=n.length;let r;t?r=t:r=e*n[s-1];let a=0,l=s-1,c;for(;a<=l;)if(i=Math.floor(a+(l-a)/2),c=n[i]-r,c<0)a=i+1;else if(c>0)l=i-1;else{l=i;break}if(i=l,n[i]===r)return i/(s-1);const u=n[i],h=n[i+1]-u,f=(r-u)/h;return(i+f)/(s-1)}getTangent(e,t){let i=e-1e-4,s=e+1e-4;i<0&&(i=0),s>1&&(s=1);const r=this.getPoint(i),a=this.getPoint(s),l=t||(r.isVector2?new ae:new E);return l.copy(a).sub(r).normalize(),l}getTangentAt(e,t){const n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t){const n=new E,i=[],s=[],r=[],a=new E,l=new Ie;for(let f=0;f<=e;f++){const g=f/e;i[f]=this.getTangentAt(g,new E)}s[0]=new E,r[0]=new E;let c=Number.MAX_VALUE;const u=Math.abs(i[0].x),d=Math.abs(i[0].y),h=Math.abs(i[0].z);u<=c&&(c=u,n.set(1,0,0)),d<=c&&(c=d,n.set(0,1,0)),h<=c&&n.set(0,0,1),a.crossVectors(i[0],n).normalize(),s[0].crossVectors(i[0],a),r[0].crossVectors(i[0],s[0]);for(let f=1;f<=e;f++){if(s[f]=s[f-1].clone(),r[f]=r[f-1].clone(),a.crossVectors(i[f-1],i[f]),a.length()>Number.EPSILON){a.normalize();const g=Math.acos(bt(i[f-1].dot(i[f]),-1,1));s[f].applyMatrix4(l.makeRotationAxis(a,g))}r[f].crossVectors(i[f],s[f])}if(t===!0){let f=Math.acos(bt(s[0].dot(s[e]),-1,1));f/=e,i[0].dot(a.crossVectors(s[0],s[e]))>0&&(f=-f);for(let g=1;g<=e;g++)s[g].applyMatrix4(l.makeRotationAxis(i[g],f*g)),r[g].crossVectors(i[g],s[g])}return{tangents:i,normals:s,binormals:r}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class rl extends wn{constructor(e=0,t=0,n=1,i=1,s=0,r=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=i,this.aStartAngle=s,this.aEndAngle=r,this.aClockwise=a,this.aRotation=l}getPoint(e,t=new ae){const n=t,i=Math.PI*2;let s=this.aEndAngle-this.aStartAngle;const r=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=i;for(;s>i;)s-=i;s<Number.EPSILON&&(r?s=0:s=i),this.aClockwise===!0&&!r&&(s===i?s=-i:s=s-i);const a=this.aStartAngle+e*s;let l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const u=Math.cos(this.aRotation),d=Math.sin(this.aRotation),h=l-this.aX,f=c-this.aY;l=h*u-f*d+this.aX,c=h*d+f*u+this.aY}return n.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class F0 extends rl{constructor(e,t,n,i,s,r){super(e,t,n,n,i,s,r),this.isArcCurve=!0,this.type="ArcCurve"}}function ol(){let o=0,e=0,t=0,n=0;function i(s,r,a,l){o=s,e=a,t=-3*s+3*r-2*a-l,n=2*s-2*r+a+l}return{initCatmullRom:function(s,r,a,l,c){i(r,a,c*(a-s),c*(l-r))},initNonuniformCatmullRom:function(s,r,a,l,c,u,d){let h=(r-s)/c-(a-s)/(c+u)+(a-r)/u,f=(a-r)/u-(l-r)/(u+d)+(l-a)/d;h*=u,f*=u,i(r,a,h,f)},calc:function(s){const r=s*s,a=r*s;return o+e*s+t*r+n*a}}}const Tr=new E,Do=new ol,Io=new ol,No=new ol;class O0 extends wn{constructor(e=[],t=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=i}getPoint(e,t=new E){const n=t,i=this.points,s=i.length,r=(s-(this.closed?0:1))*e;let a=Math.floor(r),l=r-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/s)+1)*s:l===0&&a===s-1&&(a=s-2,l=1);let c,u;this.closed||a>0?c=i[(a-1)%s]:(Tr.subVectors(i[0],i[1]).add(i[0]),c=Tr);const d=i[a%s],h=i[(a+1)%s];if(this.closed||a+2<s?u=i[(a+2)%s]:(Tr.subVectors(i[s-1],i[s-2]).add(i[s-1]),u=Tr),this.curveType==="centripetal"||this.curveType==="chordal"){const f=this.curveType==="chordal"?.5:.25;let g=Math.pow(c.distanceToSquared(d),f),_=Math.pow(d.distanceToSquared(h),f),m=Math.pow(h.distanceToSquared(u),f);_<1e-4&&(_=1),g<1e-4&&(g=_),m<1e-4&&(m=_),Do.initNonuniformCatmullRom(c.x,d.x,h.x,u.x,g,_,m),Io.initNonuniformCatmullRom(c.y,d.y,h.y,u.y,g,_,m),No.initNonuniformCatmullRom(c.z,d.z,h.z,u.z,g,_,m)}else this.curveType==="catmullrom"&&(Do.initCatmullRom(c.x,d.x,h.x,u.x,this.tension),Io.initCatmullRom(c.y,d.y,h.y,u.y,this.tension),No.initCatmullRom(c.z,d.z,h.z,u.z,this.tension));return n.set(Do.calc(l),Io.calc(l),No.calc(l)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(i.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const i=this.points[t];e.points.push(i.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(new E().fromArray(i))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function kc(o,e,t,n,i){const s=(n-e)*.5,r=(i-t)*.5,a=o*o,l=o*a;return(2*t-2*n+s+r)*l+(-3*t+3*n-2*s-r)*a+s*o+t}function z0(o,e){const t=1-o;return t*t*e}function k0(o,e){return 2*(1-o)*o*e}function G0(o,e){return o*o*e}function Us(o,e,t,n){return z0(o,e)+k0(o,t)+G0(o,n)}function H0(o,e){const t=1-o;return t*t*t*e}function V0(o,e){const t=1-o;return 3*t*t*o*e}function W0(o,e){return 3*(1-o)*o*o*e}function X0(o,e){return o*o*o*e}function Bs(o,e,t,n,i){return H0(o,e)+V0(o,t)+W0(o,n)+X0(o,i)}class Jh extends wn{constructor(e=new ae,t=new ae,n=new ae,i=new ae){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new ae){const n=t,i=this.v0,s=this.v1,r=this.v2,a=this.v3;return n.set(Bs(e,i.x,s.x,r.x,a.x),Bs(e,i.y,s.y,r.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class q0 extends wn{constructor(e=new E,t=new E,n=new E,i=new E){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new E){const n=t,i=this.v0,s=this.v1,r=this.v2,a=this.v3;return n.set(Bs(e,i.x,s.x,r.x,a.x),Bs(e,i.y,s.y,r.y,a.y),Bs(e,i.z,s.z,r.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class Qh extends wn{constructor(e=new ae,t=new ae){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new ae){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new ae){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Y0 extends wn{constructor(e=new E,t=new E){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new E){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new E){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class eu extends wn{constructor(e=new ae,t=new ae,n=new ae){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new ae){const n=t,i=this.v0,s=this.v1,r=this.v2;return n.set(Us(e,i.x,s.x,r.x),Us(e,i.y,s.y,r.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class j0 extends wn{constructor(e=new E,t=new E,n=new E){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new E){const n=t,i=this.v0,s=this.v1,r=this.v2;return n.set(Us(e,i.x,s.x,r.x),Us(e,i.y,s.y,r.y),Us(e,i.z,s.z,r.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class tu extends wn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new ae){const n=t,i=this.points,s=(i.length-1)*e,r=Math.floor(s),a=s-r,l=i[r===0?r:r-1],c=i[r],u=i[r>i.length-2?i.length-1:r+1],d=i[r>i.length-3?i.length-1:r+2];return n.set(kc(a,l.x,c.x,u.x,d.x),kc(a,l.y,c.y,u.y,d.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(i.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const i=this.points[t];e.points.push(i.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(new ae().fromArray(i))}return this}}var Gc=Object.freeze({__proto__:null,ArcCurve:F0,CatmullRomCurve3:O0,CubicBezierCurve:Jh,CubicBezierCurve3:q0,EllipseCurve:rl,LineCurve:Qh,LineCurve3:Y0,QuadraticBezierCurve:eu,QuadraticBezierCurve3:j0,SplineCurve:tu});class K0 extends wn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){const n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Gc[n](t,e))}return this}getPoint(e,t){const n=e*this.getLength(),i=this.getCurveLengths();let s=0;for(;s<i.length;){if(i[s]>=n){const r=i[s]-n,a=this.curves[s],l=a.getLength(),c=l===0?0:1-r/l;return a.getPointAt(c,t)}s++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let n=0,i=this.curves.length;n<i;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let n;for(let i=0,s=this.curves;i<s.length;i++){const r=s[i],a=r.isEllipseCurve?e*2:r.isLineCurve||r.isLineCurve3?1:r.isSplineCurve?e*r.points.length:e,l=r.getPoints(a);for(let c=0;c<l.length;c++){const u=l[c];n&&n.equals(u)||(t.push(u),n=u)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const i=e.curves[t];this.curves.push(i.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){const i=this.curves[t];e.curves.push(i.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const i=e.curves[t];this.curves.push(new Gc[i.type]().fromJSON(i))}return this}}class $0 extends K0{constructor(e){super(),this.type="Path",this.currentPoint=new ae,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){const n=new Qh(this.currentPoint.clone(),new ae(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,i){const s=new eu(this.currentPoint.clone(),new ae(e,t),new ae(n,i));return this.curves.push(s),this.currentPoint.set(n,i),this}bezierCurveTo(e,t,n,i,s,r){const a=new Jh(this.currentPoint.clone(),new ae(e,t),new ae(n,i),new ae(s,r));return this.curves.push(a),this.currentPoint.set(s,r),this}splineThru(e){const t=[this.currentPoint.clone()].concat(e),n=new tu(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,i,s,r){const a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+a,t+l,n,i,s,r),this}absarc(e,t,n,i,s,r){return this.absellipse(e,t,n,n,i,s,r),this}ellipse(e,t,n,i,s,r,a,l){const c=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(e+c,t+u,n,i,s,r,a,l),this}absellipse(e,t,n,i,s,r,a,l){const c=new rl(e,t,n,i,s,r,a,l);if(this.curves.length>0){const d=c.getPoint(0);d.equals(this.currentPoint)||this.lineTo(d.x,d.y)}this.curves.push(c);const u=c.getPoint(1);return this.currentPoint.copy(u),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class al extends wt{constructor(e=[new ae(0,-.5),new ae(.5,0),new ae(0,.5)],t=12,n=0,i=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:n,phiLength:i},t=Math.floor(t),i=bt(i,0,Math.PI*2);const s=[],r=[],a=[],l=[],c=[],u=1/t,d=new E,h=new ae,f=new E,g=new E,_=new E;let m=0,p=0;for(let v=0;v<=e.length-1;v++)switch(v){case 0:m=e[v+1].x-e[v].x,p=e[v+1].y-e[v].y,f.x=p*1,f.y=-m,f.z=p*0,_.copy(f),f.normalize(),l.push(f.x,f.y,f.z);break;case e.length-1:l.push(_.x,_.y,_.z);break;default:m=e[v+1].x-e[v].x,p=e[v+1].y-e[v].y,f.x=p*1,f.y=-m,f.z=p*0,g.copy(f),f.x+=_.x,f.y+=_.y,f.z+=_.z,f.normalize(),l.push(f.x,f.y,f.z),_.copy(g)}for(let v=0;v<=t;v++){const y=n+v*u*i,x=Math.sin(y),P=Math.cos(y);for(let T=0;T<=e.length-1;T++){d.x=e[T].x*x,d.y=e[T].y,d.z=e[T].x*P,r.push(d.x,d.y,d.z),h.x=v/t,h.y=T/(e.length-1),a.push(h.x,h.y);const A=l[3*T+0]*x,D=l[3*T+1],w=l[3*T+0]*P;c.push(A,D,w)}}for(let v=0;v<t;v++)for(let y=0;y<e.length-1;y++){const x=y+v*e.length,P=x,T=x+e.length,A=x+e.length+1,D=x+1;s.push(P,T,D),s.push(A,D,T)}this.setIndex(s),this.setAttribute("position",new ot(r,3)),this.setAttribute("uv",new ot(a,2)),this.setAttribute("normal",new ot(c,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new al(e.points,e.segments,e.phiStart,e.phiLength)}}class ll extends al{constructor(e=1,t=1,n=4,i=8){const s=new $0;s.absarc(0,-t/2,e,Math.PI*1.5,0),s.absarc(0,t/2,e,0,Math.PI*.5),super(s.getPoints(n),i),this.type="CapsuleGeometry",this.parameters={radius:e,length:t,capSegments:n,radialSegments:i}}static fromJSON(e){return new ll(e.radius,e.length,e.capSegments,e.radialSegments)}}class fn extends wt{constructor(e=1,t=1,n=1,i=32,s=1,r=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:i,heightSegments:s,openEnded:r,thetaStart:a,thetaLength:l};const c=this;i=Math.floor(i),s=Math.floor(s);const u=[],d=[],h=[],f=[];let g=0;const _=[],m=n/2;let p=0;v(),r===!1&&(e>0&&y(!0),t>0&&y(!1)),this.setIndex(u),this.setAttribute("position",new ot(d,3)),this.setAttribute("normal",new ot(h,3)),this.setAttribute("uv",new ot(f,2));function v(){const x=new E,P=new E;let T=0;const A=(t-e)/n;for(let D=0;D<=s;D++){const w=[],M=D/s,I=M*(t-e)+e;for(let L=0;L<=i;L++){const N=L/i,k=N*l+a,K=Math.sin(k),H=Math.cos(k);P.x=I*K,P.y=-M*n+m,P.z=I*H,d.push(P.x,P.y,P.z),x.set(K,A,H).normalize(),h.push(x.x,x.y,x.z),f.push(N,1-M),w.push(g++)}_.push(w)}for(let D=0;D<i;D++)for(let w=0;w<s;w++){const M=_[w][D],I=_[w+1][D],L=_[w+1][D+1],N=_[w][D+1];(e>0||w!==0)&&(u.push(M,I,N),T+=3),(t>0||w!==s-1)&&(u.push(I,L,N),T+=3)}c.addGroup(p,T,0),p+=T}function y(x){const P=g,T=new ae,A=new E;let D=0;const w=x===!0?e:t,M=x===!0?1:-1;for(let L=1;L<=i;L++)d.push(0,m*M,0),h.push(0,M,0),f.push(.5,.5),g++;const I=g;for(let L=0;L<=i;L++){const k=L/i*l+a,K=Math.cos(k),H=Math.sin(k);A.x=w*H,A.y=m*M,A.z=w*K,d.push(A.x,A.y,A.z),h.push(0,M,0),T.x=K*.5+.5,T.y=H*.5*M+.5,f.push(T.x,T.y),g++}for(let L=0;L<i;L++){const N=P+L,k=I+L;x===!0?u.push(k,k+1,N):u.push(k+1,k,N),D+=3}c.addGroup(p,D,x===!0?1:2),p+=D}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new fn(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class cl extends wt{constructor(e=[],t=[],n=1,i=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:i};const s=[],r=[];a(i),c(n),u(),this.setAttribute("position",new ot(s,3)),this.setAttribute("normal",new ot(s.slice(),3)),this.setAttribute("uv",new ot(r,2)),i===0?this.computeVertexNormals():this.normalizeNormals();function a(v){const y=new E,x=new E,P=new E;for(let T=0;T<t.length;T+=3)f(t[T+0],y),f(t[T+1],x),f(t[T+2],P),l(y,x,P,v)}function l(v,y,x,P){const T=P+1,A=[];for(let D=0;D<=T;D++){A[D]=[];const w=v.clone().lerp(x,D/T),M=y.clone().lerp(x,D/T),I=T-D;for(let L=0;L<=I;L++)L===0&&D===T?A[D][L]=w:A[D][L]=w.clone().lerp(M,L/I)}for(let D=0;D<T;D++)for(let w=0;w<2*(T-D)-1;w++){const M=Math.floor(w/2);w%2===0?(h(A[D][M+1]),h(A[D+1][M]),h(A[D][M])):(h(A[D][M+1]),h(A[D+1][M+1]),h(A[D+1][M]))}}function c(v){const y=new E;for(let x=0;x<s.length;x+=3)y.x=s[x+0],y.y=s[x+1],y.z=s[x+2],y.normalize().multiplyScalar(v),s[x+0]=y.x,s[x+1]=y.y,s[x+2]=y.z}function u(){const v=new E;for(let y=0;y<s.length;y+=3){v.x=s[y+0],v.y=s[y+1],v.z=s[y+2];const x=m(v)/2/Math.PI+.5,P=p(v)/Math.PI+.5;r.push(x,1-P)}g(),d()}function d(){for(let v=0;v<r.length;v+=6){const y=r[v+0],x=r[v+2],P=r[v+4],T=Math.max(y,x,P),A=Math.min(y,x,P);T>.9&&A<.1&&(y<.2&&(r[v+0]+=1),x<.2&&(r[v+2]+=1),P<.2&&(r[v+4]+=1))}}function h(v){s.push(v.x,v.y,v.z)}function f(v,y){const x=v*3;y.x=e[x+0],y.y=e[x+1],y.z=e[x+2]}function g(){const v=new E,y=new E,x=new E,P=new E,T=new ae,A=new ae,D=new ae;for(let w=0,M=0;w<s.length;w+=9,M+=6){v.set(s[w+0],s[w+1],s[w+2]),y.set(s[w+3],s[w+4],s[w+5]),x.set(s[w+6],s[w+7],s[w+8]),T.set(r[M+0],r[M+1]),A.set(r[M+2],r[M+3]),D.set(r[M+4],r[M+5]),P.copy(v).add(y).add(x).divideScalar(3);const I=m(P);_(T,M+0,v,I),_(A,M+2,y,I),_(D,M+4,x,I)}}function _(v,y,x,P){P<0&&v.x===1&&(r[y]=v.x-1),x.x===0&&x.z===0&&(r[y]=P/2/Math.PI+.5)}function m(v){return Math.atan2(v.z,-v.x)}function p(v){return Math.atan2(-v.y,Math.sqrt(v.x*v.x+v.z*v.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new cl(e.vertices,e.indices,e.radius,e.details)}}class hl extends cl{constructor(e=1,t=0){const n=(1+Math.sqrt(5))/2,i=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],s=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(i,s,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new hl(e.radius,e.detail)}}class qs extends wt{constructor(e=.5,t=1,n=32,i=1,s=0,r=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:i,thetaStart:s,thetaLength:r},n=Math.max(3,n),i=Math.max(1,i);const a=[],l=[],c=[],u=[];let d=e;const h=(t-e)/i,f=new E,g=new ae;for(let _=0;_<=i;_++){for(let m=0;m<=n;m++){const p=s+m/n*r;f.x=d*Math.cos(p),f.y=d*Math.sin(p),l.push(f.x,f.y,f.z),c.push(0,0,1),g.x=(f.x/t+1)/2,g.y=(f.y/t+1)/2,u.push(g.x,g.y)}d+=h}for(let _=0;_<i;_++){const m=_*(n+1);for(let p=0;p<n;p++){const v=p+m,y=v,x=v+n+1,P=v+n+2,T=v+1;a.push(y,x,T),a.push(x,P,T)}}this.setIndex(a),this.setAttribute("position",new ot(l,3)),this.setAttribute("normal",new ot(c,3)),this.setAttribute("uv",new ot(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new qs(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class Ft extends wt{constructor(e=1,t=32,n=16,i=0,s=Math.PI*2,r=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:i,phiLength:s,thetaStart:r,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const l=Math.min(r+a,Math.PI);let c=0;const u=[],d=new E,h=new E,f=[],g=[],_=[],m=[];for(let p=0;p<=n;p++){const v=[],y=p/n;let x=0;p===0&&r===0?x=.5/t:p===n&&l===Math.PI&&(x=-.5/t);for(let P=0;P<=t;P++){const T=P/t;d.x=-e*Math.cos(i+T*s)*Math.sin(r+y*a),d.y=e*Math.cos(r+y*a),d.z=e*Math.sin(i+T*s)*Math.sin(r+y*a),g.push(d.x,d.y,d.z),h.copy(d).normalize(),_.push(h.x,h.y,h.z),m.push(T+x,1-y),v.push(c++)}u.push(v)}for(let p=0;p<n;p++)for(let v=0;v<t;v++){const y=u[p][v+1],x=u[p][v],P=u[p+1][v],T=u[p+1][v+1];(p!==0||r>0)&&f.push(y,x,T),(p!==n-1||l<Math.PI)&&f.push(x,P,T)}this.setIndex(f),this.setAttribute("position",new ot(g,3)),this.setAttribute("normal",new ot(_,3)),this.setAttribute("uv",new ot(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ft(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class ul extends wt{constructor(e=1,t=.4,n=12,i=48,s=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:i,arc:s},n=Math.floor(n),i=Math.floor(i);const r=[],a=[],l=[],c=[],u=new E,d=new E,h=new E;for(let f=0;f<=n;f++)for(let g=0;g<=i;g++){const _=g/i*s,m=f/n*Math.PI*2;d.x=(e+t*Math.cos(m))*Math.cos(_),d.y=(e+t*Math.cos(m))*Math.sin(_),d.z=t*Math.sin(m),a.push(d.x,d.y,d.z),u.x=e*Math.cos(_),u.y=e*Math.sin(_),h.subVectors(d,u).normalize(),l.push(h.x,h.y,h.z),c.push(g/i),c.push(f/n)}for(let f=1;f<=n;f++)for(let g=1;g<=i;g++){const _=(i+1)*f+g-1,m=(i+1)*(f-1)+g-1,p=(i+1)*(f-1)+g,v=(i+1)*f+g;r.push(_,m,v),r.push(m,p,v)}this.setIndex(r),this.setAttribute("position",new ot(a,3)),this.setAttribute("normal",new ot(l,3)),this.setAttribute("uv",new ot(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ul(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class Z0 extends Tt{static get type(){return"RawShaderMaterial"}constructor(e){super(e),this.isRawShaderMaterial=!0}}class ct extends mn{static get type(){return"MeshStandardMaterial"}constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new se(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new se(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ch,this.normalScale=new ae(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new gn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class bn extends ct{static get type(){return"MeshPhysicalMaterial"}constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new ae(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return bt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new se(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new se(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new se(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}function Er(o,e,t){return!o||!t&&o.constructor===e?o:typeof e.BYTES_PER_ELEMENT=="number"?new e(o):Array.prototype.slice.call(o)}function J0(o){return ArrayBuffer.isView(o)&&!(o instanceof DataView)}function Q0(o){function e(i,s){return o[i]-o[s]}const t=o.length,n=new Array(t);for(let i=0;i!==t;++i)n[i]=i;return n.sort(e),n}function Hc(o,e,t){const n=o.length,i=new o.constructor(n);for(let s=0,r=0;r!==n;++s){const a=t[s]*e;for(let l=0;l!==e;++l)i[r++]=o[a+l]}return i}function nu(o,e,t,n){let i=1,s=o[0];for(;s!==void 0&&s[n]===void 0;)s=o[i++];if(s===void 0)return;let r=s[n];if(r!==void 0)if(Array.isArray(r))do r=s[n],r!==void 0&&(e.push(s.time),t.push.apply(t,r)),s=o[i++];while(s!==void 0);else if(r.toArray!==void 0)do r=s[n],r!==void 0&&(e.push(s.time),r.toArray(t,t.length)),s=o[i++];while(s!==void 0);else do r=s[n],r!==void 0&&(e.push(s.time),t.push(r)),s=o[i++];while(s!==void 0)}class Ys{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let n=this._cachedIndex,i=t[n],s=t[n-1];e:{t:{let r;n:{i:if(!(e<i)){for(let a=n+2;;){if(i===void 0){if(e<s)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(s=i,i=t[++n],e<i)break t}r=t.length;break n}if(!(e>=s)){const a=t[1];e<a&&(n=2,s=a);for(let l=n-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(i=s,s=t[--n-1],e>=s)break t}r=n,n=0;break n}break e}for(;n<r;){const a=n+r>>>1;e<t[a]?r=a:n=a+1}if(i=t[n],s=t[n-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,s,i)}return this.interpolate_(n,s,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,s=e*i;for(let r=0;r!==i;++r)t[r]=n[s+r];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class e_ extends Ys{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Xi,endingEnd:Xi}}intervalChanged_(e,t,n){const i=this.parameterPositions;let s=e-2,r=e+1,a=i[s],l=i[r];if(a===void 0)switch(this.getSettings_().endingStart){case qi:s=e,a=2*t-n;break;case zr:s=i.length-2,a=t+i[s]-i[s+1];break;default:s=e,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case qi:r=e,l=2*n-t;break;case zr:r=1,l=n+i[1]-i[0];break;default:r=e-1,l=t}const c=(n-t)*.5,u=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(l-n),this._offsetPrev=s*u,this._offsetNext=r*u}interpolate_(e,t,n,i){const s=this.resultBuffer,r=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=this._offsetPrev,d=this._offsetNext,h=this._weightPrev,f=this._weightNext,g=(n-t)/(i-t),_=g*g,m=_*g,p=-h*m+2*h*_-h*g,v=(1+h)*m+(-1.5-2*h)*_+(-.5+h)*g+1,y=(-1-f)*m+(1.5+f)*_+.5*g,x=f*m-f*_;for(let P=0;P!==a;++P)s[P]=p*r[u+P]+v*r[c+P]+y*r[l+P]+x*r[d+P];return s}}class iu extends Ys{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const s=this.resultBuffer,r=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=(n-t)/(i-t),d=1-u;for(let h=0;h!==a;++h)s[h]=r[c+h]*d+r[l+h]*u;return s}}class t_ extends Ys{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}}class Tn{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Er(t,this.TimeBufferType),this.values=Er(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Er(e.times,Array),values:Er(e.values,Array)};const i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new t_(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new iu(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new e_(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case zs:t=this.InterpolantFactoryMethodDiscrete;break;case ks:t=this.InterpolantFactoryMethodLinear;break;case Qr:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return zs;case this.InterpolantFactoryMethodLinear:return ks;case this.InterpolantFactoryMethodSmooth:return Qr}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e}return this}trim(e,t){const n=this.times,i=n.length;let s=0,r=i-1;for(;s!==i&&n[s]<e;)++s;for(;r!==-1&&n[r]>t;)--r;if(++r,s!==0||r!==i){s>=r&&(r=Math.max(r,1),s=r-1);const a=this.getValueSize();this.times=n.slice(s,r),this.values=this.values.slice(s*a,r*a)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const n=this.times,i=this.values,s=n.length;s===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let r=null;for(let a=0;a!==s;a++){const l=n[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(r!==null&&r>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,r),e=!1;break}r=l}if(i!==void 0&&J0(i))for(let a=0,l=i.length;a!==l;++a){const c=i[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===Qr,s=e.length-1;let r=1;for(let a=1;a<s;++a){let l=!1;const c=e[a],u=e[a+1];if(c!==u&&(a!==1||c!==e[0]))if(i)l=!0;else{const d=a*n,h=d-n,f=d+n;for(let g=0;g!==n;++g){const _=t[d+g];if(_!==t[h+g]||_!==t[f+g]){l=!0;break}}}if(l){if(a!==r){e[r]=e[a];const d=a*n,h=r*n;for(let f=0;f!==n;++f)t[h+f]=t[d+f]}++r}}if(s>0){e[r]=e[s];for(let a=s*n,l=r*n,c=0;c!==n;++c)t[l+c]=t[a+c];++r}return r!==e.length?(this.times=e.slice(0,r),this.values=t.slice(0,r*n)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),n=this.constructor,i=new n(this.name,e,t);return i.createInterpolant=this.createInterpolant,i}}Tn.prototype.TimeBufferType=Float32Array;Tn.prototype.ValueBufferType=Float32Array;Tn.prototype.DefaultInterpolation=ks;class ds extends Tn{constructor(e,t,n){super(e,t,n)}}ds.prototype.ValueTypeName="bool";ds.prototype.ValueBufferType=Array;ds.prototype.DefaultInterpolation=zs;ds.prototype.InterpolantFactoryMethodLinear=void 0;ds.prototype.InterpolantFactoryMethodSmooth=void 0;class su extends Tn{}su.prototype.ValueTypeName="color";class as extends Tn{}as.prototype.ValueTypeName="number";class n_ extends Ys{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const s=this.resultBuffer,r=this.sampleValues,a=this.valueSize,l=(n-t)/(i-t);let c=e*a;for(let u=c+a;c!==u;c+=4)rn.slerpFlat(s,0,r,c-a,r,c,l);return s}}class ls extends Tn{InterpolantFactoryMethodLinear(e){return new n_(this.times,this.values,this.getValueSize(),e)}}ls.prototype.ValueTypeName="quaternion";ls.prototype.InterpolantFactoryMethodSmooth=void 0;class fs extends Tn{constructor(e,t,n){super(e,t,n)}}fs.prototype.ValueTypeName="string";fs.prototype.ValueBufferType=Array;fs.prototype.DefaultInterpolation=zs;fs.prototype.InterpolantFactoryMethodLinear=void 0;fs.prototype.InterpolantFactoryMethodSmooth=void 0;class cs extends Tn{}cs.prototype.ValueTypeName="vector";class Ua{constructor(e="",t=-1,n=[],i=Za){this.name=e,this.tracks=n,this.duration=t,this.blendMode=i,this.uuid=pn(),this.duration<0&&this.resetDuration()}static parse(e){const t=[],n=e.tracks,i=1/(e.fps||1);for(let r=0,a=n.length;r!==a;++r)t.push(s_(n[r]).scale(i));const s=new this(e.name,e.duration,t,e.blendMode);return s.uuid=e.uuid,s}static toJSON(e){const t=[],n=e.tracks,i={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let s=0,r=n.length;s!==r;++s)t.push(Tn.toJSON(n[s]));return i}static CreateFromMorphTargetSequence(e,t,n,i){const s=t.length,r=[];for(let a=0;a<s;a++){let l=[],c=[];l.push((a+s-1)%s,a,(a+1)%s),c.push(0,1,0);const u=Q0(l);l=Hc(l,1,u),c=Hc(c,1,u),!i&&l[0]===0&&(l.push(s),c.push(c[0])),r.push(new as(".morphTargetInfluences["+t[a].name+"]",l,c).scale(1/n))}return new this(e,-1,r)}static findByName(e,t){let n=e;if(!Array.isArray(e)){const i=e;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===t)return n[i];return null}static CreateClipsFromMorphTargetSequences(e,t,n){const i={},s=/^([\w-]*?)([\d]+)$/;for(let a=0,l=e.length;a<l;a++){const c=e[a],u=c.name.match(s);if(u&&u.length>1){const d=u[1];let h=i[d];h||(i[d]=h=[]),h.push(c)}}const r=[];for(const a in i)r.push(this.CreateFromMorphTargetSequence(a,i[a],t,n));return r}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const n=function(d,h,f,g,_){if(f.length!==0){const m=[],p=[];nu(f,m,p,g),m.length!==0&&_.push(new d(h,m,p))}},i=[],s=e.name||"default",r=e.fps||30,a=e.blendMode;let l=e.length||-1;const c=e.hierarchy||[];for(let d=0;d<c.length;d++){const h=c[d].keys;if(!(!h||h.length===0))if(h[0].morphTargets){const f={};let g;for(g=0;g<h.length;g++)if(h[g].morphTargets)for(let _=0;_<h[g].morphTargets.length;_++)f[h[g].morphTargets[_]]=-1;for(const _ in f){const m=[],p=[];for(let v=0;v!==h[g].morphTargets.length;++v){const y=h[g];m.push(y.time),p.push(y.morphTarget===_?1:0)}i.push(new as(".morphTargetInfluence["+_+"]",m,p))}l=f.length*r}else{const f=".bones["+t[d].name+"]";n(cs,f+".position",h,"pos",i),n(ls,f+".quaternion",h,"rot",i),n(cs,f+".scale",h,"scl",i)}}return i.length===0?null:new this(s,l,i,a)}resetDuration(){const e=this.tracks;let t=0;for(let n=0,i=e.length;n!==i;++n){const s=this.tracks[n];t=Math.max(t,s.times[s.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function i_(o){switch(o.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return as;case"vector":case"vector2":case"vector3":case"vector4":return cs;case"color":return su;case"quaternion":return ls;case"bool":case"boolean":return ds;case"string":return fs}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+o)}function s_(o){if(o.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=i_(o.type);if(o.times===void 0){const t=[],n=[];nu(o.keys,t,n,"value"),o.times=t,o.values=n}return e.parse!==void 0?e.parse(o):new e(o.name,o.times,o.values,o.interpolation)}const si={enabled:!1,files:{},add:function(o,e){this.enabled!==!1&&(this.files[o]=e)},get:function(o){if(this.enabled!==!1)return this.files[o]},remove:function(o){delete this.files[o]},clear:function(){this.files={}}};class r_{constructor(e,t,n){const i=this;let s=!1,r=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(u){a++,s===!1&&i.onStart!==void 0&&i.onStart(u,r,a),s=!0},this.itemEnd=function(u){r++,i.onProgress!==void 0&&i.onProgress(u,r,a),r===a&&(s=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(u){i.onError!==void 0&&i.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,d){return c.push(u,d),this},this.removeHandler=function(u){const d=c.indexOf(u);return d!==-1&&c.splice(d,2),this},this.getHandler=function(u){for(let d=0,h=c.length;d<h;d+=2){const f=c[d],g=c[d+1];if(f.global&&(f.lastIndex=0),f.test(u))return g}return null}}}const Ba=new r_;class ps{constructor(e){this.manager=e!==void 0?e:Ba,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(i,s){n.load(e,i,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}ps.DEFAULT_MATERIAL_NAME="__DEFAULT";const In={};class o_ extends Error{constructor(e,t){super(e),this.response=t}}class ru extends ps{constructor(e){super(e)}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=si.get(e);if(s!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(s),this.manager.itemEnd(e)},0),s;if(In[e]!==void 0){In[e].push({onLoad:t,onProgress:n,onError:i});return}In[e]=[],In[e].push({onLoad:t,onProgress:n,onError:i});const r=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,l=this.responseType;fetch(r).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const u=In[e],d=c.body.getReader(),h=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),f=h?parseInt(h):0,g=f!==0;let _=0;const m=new ReadableStream({start(p){v();function v(){d.read().then(({done:y,value:x})=>{if(y)p.close();else{_+=x.byteLength;const P=new ProgressEvent("progress",{lengthComputable:g,loaded:_,total:f});for(let T=0,A=u.length;T<A;T++){const D=u[T];D.onProgress&&D.onProgress(P)}p.enqueue(x),v()}},y=>{p.error(y)})}}});return new Response(m)}else throw new o_(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(u=>new DOMParser().parseFromString(u,a));case"json":return c.json();default:if(a===void 0)return c.text();{const d=/charset="?([^;"\s]*)"?/i.exec(a),h=d&&d[1]?d[1].toLowerCase():void 0,f=new TextDecoder(h);return c.arrayBuffer().then(g=>f.decode(g))}}}).then(c=>{si.add(e,c);const u=In[e];delete In[e];for(let d=0,h=u.length;d<h;d++){const f=u[d];f.onLoad&&f.onLoad(c)}}).catch(c=>{const u=In[e];if(u===void 0)throw this.manager.itemError(e),c;delete In[e];for(let d=0,h=u.length;d<h;d++){const f=u[d];f.onError&&f.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class a_ extends ps{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,r=si.get(e);if(r!==void 0)return s.manager.itemStart(e),setTimeout(function(){t&&t(r),s.manager.itemEnd(e)},0),r;const a=Gs("img");function l(){u(),si.add(e,this),t&&t(this),s.manager.itemEnd(e)}function c(d){u(),i&&i(d),s.manager.itemError(e),s.manager.itemEnd(e)}function u(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),s.manager.itemStart(e),a.src=e,a}}class ou extends ps{constructor(e){super(e)}load(e,t,n,i){const s=new Et,r=new a_(this.manager);return r.setCrossOrigin(this.crossOrigin),r.setPath(this.path),r.load(e,function(a){s.image=a,s.needsUpdate=!0,t!==void 0&&t(s)},n,i),s}}class $r extends dt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new se(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}class l_ extends $r{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(dt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new se(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const Uo=new Ie,Vc=new E,Wc=new E;class dl{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ae(512,512),this.map=null,this.mapPass=null,this.matrix=new Ie,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new el,this._frameExtents=new ae(1,1),this._viewportCount=1,this._viewports=[new Je(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;Vc.setFromMatrixPosition(e.matrixWorld),t.position.copy(Vc),Wc.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Wc),t.updateMatrixWorld(),Uo.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Uo),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Uo)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class c_ extends dl{constructor(){super(new Gt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){const t=this.camera,n=rs*2*e.angle*this.focus,i=this.mapSize.width/this.mapSize.height,s=e.distance||t.far;(n!==t.fov||i!==t.aspect||s!==t.far)&&(t.fov=n,t.aspect=i,t.far=s,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class h_ extends $r{constructor(e,t,n=0,i=Math.PI/3,s=0,r=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(dt.DEFAULT_UP),this.updateMatrix(),this.target=new dt,this.distance=n,this.angle=i,this.penumbra=s,this.decay=r,this.map=null,this.shadow=new c_}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const Xc=new Ie,Cs=new E,Bo=new E;class u_ extends dl{constructor(){super(new Gt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new ae(4,2),this._viewportCount=6,this._viewports=[new Je(2,1,1,1),new Je(0,1,1,1),new Je(3,1,1,1),new Je(1,1,1,1),new Je(3,0,1,1),new Je(1,0,1,1)],this._cubeDirections=[new E(1,0,0),new E(-1,0,0),new E(0,0,1),new E(0,0,-1),new E(0,1,0),new E(0,-1,0)],this._cubeUps=[new E(0,1,0),new E(0,1,0),new E(0,1,0),new E(0,1,0),new E(0,0,1),new E(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,i=this.matrix,s=e.distance||n.far;s!==n.far&&(n.far=s,n.updateProjectionMatrix()),Cs.setFromMatrixPosition(e.matrixWorld),n.position.copy(Cs),Bo.copy(n.position),Bo.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(Bo),n.updateMatrixWorld(),i.makeTranslation(-Cs.x,-Cs.y,-Cs.z),Xc.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Xc)}}class Vr extends $r{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new u_}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class d_ extends dl{constructor(){super(new Yr(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Fa extends $r{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(dt.DEFAULT_UP),this.updateMatrix(),this.target=new dt,this.shadow=new d_}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class Fs{static decodeText(e){if(console.warn("THREE.LoaderUtils: decodeText() has been deprecated with r165 and will be removed with r175. Use TextDecoder instead."),typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let n=0,i=e.length;n<i;n++)t+=String.fromCharCode(e[n]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}class f_ extends ps{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,r=si.get(e);if(r!==void 0){if(s.manager.itemStart(e),r.then){r.then(c=>{t&&t(c),s.manager.itemEnd(e)}).catch(c=>{i&&i(c)});return}return setTimeout(function(){t&&t(r),s.manager.itemEnd(e)},0),r}const a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader;const l=fetch(e,a).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign(s.options,{colorSpaceConversion:"none"}))}).then(function(c){return si.add(e,c),t&&t(c),s.manager.itemEnd(e),c}).catch(function(c){i&&i(c),si.remove(e),s.manager.itemError(e),s.manager.itemEnd(e)});si.add(e,l),s.manager.itemStart(e)}}class p_{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=qc(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=qc();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function qc(){return performance.now()}class m_{constructor(e,t,n){this.binding=e,this.valueSize=n;let i,s,r;switch(t){case"quaternion":i=this._slerp,s=this._slerpAdditive,r=this._setAdditiveIdentityQuaternion,this.buffer=new Float64Array(n*6),this._workIndex=5;break;case"string":case"bool":i=this._select,s=this._select,r=this._setAdditiveIdentityOther,this.buffer=new Array(n*5);break;default:i=this._lerp,s=this._lerpAdditive,r=this._setAdditiveIdentityNumeric,this.buffer=new Float64Array(n*5)}this._mixBufferRegion=i,this._mixBufferRegionAdditive=s,this._setIdentity=r,this._origIndex=3,this._addIndex=4,this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,this.useCount=0,this.referenceCount=0}accumulate(e,t){const n=this.buffer,i=this.valueSize,s=e*i+i;let r=this.cumulativeWeight;if(r===0){for(let a=0;a!==i;++a)n[s+a]=n[a];r=t}else{r+=t;const a=t/r;this._mixBufferRegion(n,s,0,a,i)}this.cumulativeWeight=r}accumulateAdditive(e){const t=this.buffer,n=this.valueSize,i=n*this._addIndex;this.cumulativeWeightAdditive===0&&this._setIdentity(),this._mixBufferRegionAdditive(t,i,0,e,n),this.cumulativeWeightAdditive+=e}apply(e){const t=this.valueSize,n=this.buffer,i=e*t+t,s=this.cumulativeWeight,r=this.cumulativeWeightAdditive,a=this.binding;if(this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,s<1){const l=t*this._origIndex;this._mixBufferRegion(n,i,l,1-s,t)}r>0&&this._mixBufferRegionAdditive(n,i,this._addIndex*t,1,t);for(let l=t,c=t+t;l!==c;++l)if(n[l]!==n[l+t]){a.setValue(n,i);break}}saveOriginalState(){const e=this.binding,t=this.buffer,n=this.valueSize,i=n*this._origIndex;e.getValue(t,i);for(let s=n,r=i;s!==r;++s)t[s]=t[i+s%n];this._setIdentity(),this.cumulativeWeight=0,this.cumulativeWeightAdditive=0}restoreOriginalState(){const e=this.valueSize*3;this.binding.setValue(this.buffer,e)}_setAdditiveIdentityNumeric(){const e=this._addIndex*this.valueSize,t=e+this.valueSize;for(let n=e;n<t;n++)this.buffer[n]=0}_setAdditiveIdentityQuaternion(){this._setAdditiveIdentityNumeric(),this.buffer[this._addIndex*this.valueSize+3]=1}_setAdditiveIdentityOther(){const e=this._origIndex*this.valueSize,t=this._addIndex*this.valueSize;for(let n=0;n<this.valueSize;n++)this.buffer[t+n]=this.buffer[e+n]}_select(e,t,n,i,s){if(i>=.5)for(let r=0;r!==s;++r)e[t+r]=e[n+r]}_slerp(e,t,n,i){rn.slerpFlat(e,t,e,t,e,n,i)}_slerpAdditive(e,t,n,i,s){const r=this._workIndex*s;rn.multiplyQuaternionsFlat(e,r,e,t,e,n),rn.slerpFlat(e,t,e,t,e,r,i)}_lerp(e,t,n,i,s){const r=1-i;for(let a=0;a!==s;++a){const l=t+a;e[l]=e[l]*r+e[n+a]*i}}_lerpAdditive(e,t,n,i,s){for(let r=0;r!==s;++r){const a=t+r;e[a]=e[a]+e[n+r]*i}}}const fl="\\[\\]\\.:\\/",g_=new RegExp("["+fl+"]","g"),pl="[^"+fl+"]",__="[^"+fl.replace("\\.","")+"]",v_=/((?:WC+[\/:])*)/.source.replace("WC",pl),x_=/(WCOD+)?/.source.replace("WCOD",__),y_=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",pl),M_=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",pl),S_=new RegExp("^"+v_+x_+y_+M_+"$"),w_=["material","materials","bones","map"];class b_{constructor(e,t,n){const i=n||tt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();const n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(e,t)}setValue(e,t){const n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,s=n.length;i!==s;++i)n[i].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}}class tt{constructor(e,t,n){this.path=t,this.parsedPath=n||tt.parseTrackName(t),this.node=tt.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new tt.Composite(e,t,n):new tt(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(g_,"")}static parseTrackName(e){const t=S_.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){const s=n.nodeName.substring(i+1);w_.indexOf(s)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=s)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){const n=function(s){for(let r=0;r<s.length;r++){const a=s[r];if(a.name===t||a.uuid===t)return a;const l=n(a.children);if(l)return l}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,n=t.objectName,i=t.propertyName;let s=t.propertyIndex;if(e||(e=tt.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===c){c=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}const r=e[i];if(r===void 0){const c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+i+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(s!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[s]!==void 0&&(s=e.morphTargetDictionary[s])}l=this.BindingType.ArrayElement,this.resolvedProperty=r,this.propertyIndex=s}else r.fromArray!==void 0&&r.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=r):Array.isArray(r)?(l=this.BindingType.EntireArray,this.resolvedProperty=r):this.propertyName=i;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}tt.Composite=b_;tt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};tt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};tt.prototype.GetterByBindingType=[tt.prototype._getValue_direct,tt.prototype._getValue_array,tt.prototype._getValue_arrayElement,tt.prototype._getValue_toArray];tt.prototype.SetterByBindingTypeAndVersioning=[[tt.prototype._setValue_direct,tt.prototype._setValue_direct_setNeedsUpdate,tt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[tt.prototype._setValue_array,tt.prototype._setValue_array_setNeedsUpdate,tt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[tt.prototype._setValue_arrayElement,tt.prototype._setValue_arrayElement_setNeedsUpdate,tt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[tt.prototype._setValue_fromArray,tt.prototype._setValue_fromArray_setNeedsUpdate,tt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class T_{constructor(e,t,n=null,i=t.blendMode){this._mixer=e,this._clip=t,this._localRoot=n,this.blendMode=i;const s=t.tracks,r=s.length,a=new Array(r),l={endingStart:Xi,endingEnd:Xi};for(let c=0;c!==r;++c){const u=s[c].createInterpolant(null);a[c]=u,u.settings=l}this._interpolantSettings=l,this._interpolants=a,this._propertyBindings=new Array(r),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._weightInterpolant=null,this.loop=ku,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=1/0,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0}play(){return this._mixer._activateAction(this),this}stop(){return this._mixer._deactivateAction(this),this.reset()}reset(){return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()}isRunning(){return this.enabled&&!this.paused&&this.timeScale!==0&&this._startTime===null&&this._mixer._isActiveAction(this)}isScheduled(){return this._mixer._isActiveAction(this)}startAt(e){return this._startTime=e,this}setLoop(e,t){return this.loop=e,this.repetitions=t,this}setEffectiveWeight(e){return this.weight=e,this._effectiveWeight=this.enabled?e:0,this.stopFading()}getEffectiveWeight(){return this._effectiveWeight}fadeIn(e){return this._scheduleFading(e,0,1)}fadeOut(e){return this._scheduleFading(e,1,0)}crossFadeFrom(e,t,n){if(e.fadeOut(t),this.fadeIn(t),n){const i=this._clip.duration,s=e._clip.duration,r=s/i,a=i/s;e.warp(1,r,t),this.warp(a,1,t)}return this}crossFadeTo(e,t,n){return e.crossFadeFrom(this,t,n)}stopFading(){const e=this._weightInterpolant;return e!==null&&(this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}setEffectiveTimeScale(e){return this.timeScale=e,this._effectiveTimeScale=this.paused?0:e,this.stopWarping()}getEffectiveTimeScale(){return this._effectiveTimeScale}setDuration(e){return this.timeScale=this._clip.duration/e,this.stopWarping()}syncWith(e){return this.time=e.time,this.timeScale=e.timeScale,this.stopWarping()}halt(e){return this.warp(this._effectiveTimeScale,0,e)}warp(e,t,n){const i=this._mixer,s=i.time,r=this.timeScale;let a=this._timeScaleInterpolant;a===null&&(a=i._lendControlInterpolant(),this._timeScaleInterpolant=a);const l=a.parameterPositions,c=a.sampleValues;return l[0]=s,l[1]=s+n,c[0]=e/r,c[1]=t/r,this}stopWarping(){const e=this._timeScaleInterpolant;return e!==null&&(this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}getMixer(){return this._mixer}getClip(){return this._clip}getRoot(){return this._localRoot||this._mixer._root}_update(e,t,n,i){if(!this.enabled){this._updateWeight(e);return}const s=this._startTime;if(s!==null){const l=(e-s)*n;l<0||n===0?t=0:(this._startTime=null,t=n*l)}t*=this._updateTimeScale(e);const r=this._updateTime(t),a=this._updateWeight(e);if(a>0){const l=this._interpolants,c=this._propertyBindings;switch(this.blendMode){case Hu:for(let u=0,d=l.length;u!==d;++u)l[u].evaluate(r),c[u].accumulateAdditive(a);break;case Za:default:for(let u=0,d=l.length;u!==d;++u)l[u].evaluate(r),c[u].accumulate(i,a)}}}_updateWeight(e){let t=0;if(this.enabled){t=this.weight;const n=this._weightInterpolant;if(n!==null){const i=n.evaluate(e)[0];t*=i,e>n.parameterPositions[1]&&(this.stopFading(),i===0&&(this.enabled=!1))}}return this._effectiveWeight=t,t}_updateTimeScale(e){let t=0;if(!this.paused){t=this.timeScale;const n=this._timeScaleInterpolant;if(n!==null){const i=n.evaluate(e)[0];t*=i,e>n.parameterPositions[1]&&(this.stopWarping(),t===0?this.paused=!0:this.timeScale=t)}}return this._effectiveTimeScale=t,t}_updateTime(e){const t=this._clip.duration,n=this.loop;let i=this.time+e,s=this._loopCount;const r=n===Gu;if(e===0)return s===-1?i:r&&(s&1)===1?t-i:i;if(n===zu){s===-1&&(this._loopCount=0,this._setEndings(!0,!0,!1));e:{if(i>=t)i=t;else if(i<0)i=0;else{this.time=i;break e}this.clampWhenFinished?this.paused=!0:this.enabled=!1,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:e<0?-1:1})}}else{if(s===-1&&(e>=0?(s=0,this._setEndings(!0,this.repetitions===0,r)):this._setEndings(this.repetitions===0,!0,r)),i>=t||i<0){const a=Math.floor(i/t);i-=t*a,s+=Math.abs(a);const l=this.repetitions-s;if(l<=0)this.clampWhenFinished?this.paused=!0:this.enabled=!1,i=e>0?t:0,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:e>0?1:-1});else{if(l===1){const c=e<0;this._setEndings(c,!c,r)}else this._setEndings(!1,!1,r);this._loopCount=s,this.time=i,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:a})}}else this.time=i;if(r&&(s&1)===1)return t-i}return i}_setEndings(e,t,n){const i=this._interpolantSettings;n?(i.endingStart=qi,i.endingEnd=qi):(e?i.endingStart=this.zeroSlopeAtStart?qi:Xi:i.endingStart=zr,t?i.endingEnd=this.zeroSlopeAtEnd?qi:Xi:i.endingEnd=zr)}_scheduleFading(e,t,n){const i=this._mixer,s=i.time;let r=this._weightInterpolant;r===null&&(r=i._lendControlInterpolant(),this._weightInterpolant=r);const a=r.parameterPositions,l=r.sampleValues;return a[0]=s,l[0]=t,a[1]=s+e,l[1]=n,this}}const E_=new Float32Array(1);class ji extends wi{constructor(e){super(),this._root=e,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1}_bindAction(e,t){const n=e._localRoot||this._root,i=e._clip.tracks,s=i.length,r=e._propertyBindings,a=e._interpolants,l=n.uuid,c=this._bindingsByRootAndName;let u=c[l];u===void 0&&(u={},c[l]=u);for(let d=0;d!==s;++d){const h=i[d],f=h.name;let g=u[f];if(g!==void 0)++g.referenceCount,r[d]=g;else{if(g=r[d],g!==void 0){g._cacheIndex===null&&(++g.referenceCount,this._addInactiveBinding(g,l,f));continue}const _=t&&t._propertyBindings[d].binding.parsedPath;g=new m_(tt.create(n,f,_),h.ValueTypeName,h.getValueSize()),++g.referenceCount,this._addInactiveBinding(g,l,f),r[d]=g}a[d].resultBuffer=g.buffer}}_activateAction(e){if(!this._isActiveAction(e)){if(e._cacheIndex===null){const n=(e._localRoot||this._root).uuid,i=e._clip.uuid,s=this._actionsByClip[i];this._bindAction(e,s&&s.knownActions[0]),this._addInactiveAction(e,i,n)}const t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){const s=t[n];s.useCount++===0&&(this._lendBinding(s),s.saveOriginalState())}this._lendAction(e)}}_deactivateAction(e){if(this._isActiveAction(e)){const t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){const s=t[n];--s.useCount===0&&(s.restoreOriginalState(),this._takeBackBinding(s))}this._takeBackAction(e)}}_initMemoryManager(){this._actions=[],this._nActiveActions=0,this._actionsByClip={},this._bindings=[],this._nActiveBindings=0,this._bindingsByRootAndName={},this._controlInterpolants=[],this._nActiveControlInterpolants=0;const e=this;this.stats={actions:{get total(){return e._actions.length},get inUse(){return e._nActiveActions}},bindings:{get total(){return e._bindings.length},get inUse(){return e._nActiveBindings}},controlInterpolants:{get total(){return e._controlInterpolants.length},get inUse(){return e._nActiveControlInterpolants}}}}_isActiveAction(e){const t=e._cacheIndex;return t!==null&&t<this._nActiveActions}_addInactiveAction(e,t,n){const i=this._actions,s=this._actionsByClip;let r=s[t];if(r===void 0)r={knownActions:[e],actionByRoot:{}},e._byClipCacheIndex=0,s[t]=r;else{const a=r.knownActions;e._byClipCacheIndex=a.length,a.push(e)}e._cacheIndex=i.length,i.push(e),r.actionByRoot[n]=e}_removeInactiveAction(e){const t=this._actions,n=t[t.length-1],i=e._cacheIndex;n._cacheIndex=i,t[i]=n,t.pop(),e._cacheIndex=null;const s=e._clip.uuid,r=this._actionsByClip,a=r[s],l=a.knownActions,c=l[l.length-1],u=e._byClipCacheIndex;c._byClipCacheIndex=u,l[u]=c,l.pop(),e._byClipCacheIndex=null;const d=a.actionByRoot,h=(e._localRoot||this._root).uuid;delete d[h],l.length===0&&delete r[s],this._removeInactiveBindingsForAction(e)}_removeInactiveBindingsForAction(e){const t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){const s=t[n];--s.referenceCount===0&&this._removeInactiveBinding(s)}}_lendAction(e){const t=this._actions,n=e._cacheIndex,i=this._nActiveActions++,s=t[i];e._cacheIndex=i,t[i]=e,s._cacheIndex=n,t[n]=s}_takeBackAction(e){const t=this._actions,n=e._cacheIndex,i=--this._nActiveActions,s=t[i];e._cacheIndex=i,t[i]=e,s._cacheIndex=n,t[n]=s}_addInactiveBinding(e,t,n){const i=this._bindingsByRootAndName,s=this._bindings;let r=i[t];r===void 0&&(r={},i[t]=r),r[n]=e,e._cacheIndex=s.length,s.push(e)}_removeInactiveBinding(e){const t=this._bindings,n=e.binding,i=n.rootNode.uuid,s=n.path,r=this._bindingsByRootAndName,a=r[i],l=t[t.length-1],c=e._cacheIndex;l._cacheIndex=c,t[c]=l,t.pop(),delete a[s],Object.keys(a).length===0&&delete r[i]}_lendBinding(e){const t=this._bindings,n=e._cacheIndex,i=this._nActiveBindings++,s=t[i];e._cacheIndex=i,t[i]=e,s._cacheIndex=n,t[n]=s}_takeBackBinding(e){const t=this._bindings,n=e._cacheIndex,i=--this._nActiveBindings,s=t[i];e._cacheIndex=i,t[i]=e,s._cacheIndex=n,t[n]=s}_lendControlInterpolant(){const e=this._controlInterpolants,t=this._nActiveControlInterpolants++;let n=e[t];return n===void 0&&(n=new iu(new Float32Array(2),new Float32Array(2),1,E_),n.__cacheIndex=t,e[t]=n),n}_takeBackControlInterpolant(e){const t=this._controlInterpolants,n=e.__cacheIndex,i=--this._nActiveControlInterpolants,s=t[i];e.__cacheIndex=i,t[i]=e,s.__cacheIndex=n,t[n]=s}clipAction(e,t,n){const i=t||this._root,s=i.uuid;let r=typeof e=="string"?Ua.findByName(i,e):e;const a=r!==null?r.uuid:e,l=this._actionsByClip[a];let c=null;if(n===void 0&&(r!==null?n=r.blendMode:n=Za),l!==void 0){const d=l.actionByRoot[s];if(d!==void 0&&d.blendMode===n)return d;c=l.knownActions[0],r===null&&(r=c._clip)}if(r===null)return null;const u=new T_(this,r,t,n);return this._bindAction(u,c),this._addInactiveAction(u,a,s),u}existingAction(e,t){const n=t||this._root,i=n.uuid,s=typeof e=="string"?Ua.findByName(n,e):e,r=s?s.uuid:e,a=this._actionsByClip[r];return a!==void 0&&a.actionByRoot[i]||null}stopAllAction(){const e=this._actions,t=this._nActiveActions;for(let n=t-1;n>=0;--n)e[n].stop();return this}update(e){e*=this.timeScale;const t=this._actions,n=this._nActiveActions,i=this.time+=e,s=Math.sign(e),r=this._accuIndex^=1;for(let c=0;c!==n;++c)t[c]._update(i,e,s,r);const a=this._bindings,l=this._nActiveBindings;for(let c=0;c!==l;++c)a[c].apply(r);return this}setTime(e){this.time=0;for(let t=0;t<this._actions.length;t++)this._actions[t].time=0;return this.update(e)}getRoot(){return this._root}uncacheClip(e){const t=this._actions,n=e.uuid,i=this._actionsByClip,s=i[n];if(s!==void 0){const r=s.knownActions;for(let a=0,l=r.length;a!==l;++a){const c=r[a];this._deactivateAction(c);const u=c._cacheIndex,d=t[t.length-1];c._cacheIndex=null,c._byClipCacheIndex=null,d._cacheIndex=u,t[u]=d,t.pop(),this._removeInactiveBindingsForAction(c)}delete i[n]}}uncacheRoot(e){const t=e.uuid,n=this._actionsByClip;for(const r in n){const a=n[r].actionByRoot,l=a[t];l!==void 0&&(this._deactivateAction(l),this._removeInactiveAction(l))}const i=this._bindingsByRootAndName,s=i[t];if(s!==void 0)for(const r in s){const a=s[r];a.restoreOriginalState(),this._removeInactiveBinding(a)}}uncacheAction(e,t){const n=this.existingAction(e,t);n!==null&&(this._deactivateAction(n),this._removeInactiveAction(n))}}const Yc=new Ie;class A_{constructor(e,t,n=0,i=1/0){this.ray=new Xs(e,t),this.near=n,this.far=i,this.camera=null,this.layers=new Qa,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return Yc.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Yc),this}intersectObject(e,t=!0,n=[]){return Oa(e,this,n,t),n.sort(jc),n}intersectObjects(e,t=!0,n=[]){for(let i=0,s=e.length;i<s;i++)Oa(e[i],this,n,t);return n.sort(jc),n}}function jc(o,e){return o.distance-e.distance}function Oa(o,e,t,n){let i=!0;if(o.layers.test(e.layers)&&o.raycast(e,t)===!1&&(i=!1),i===!0&&n===!0){const s=o.children;for(let r=0,a=s.length;r<a;r++)Oa(s[r],e,t,!0)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Ha}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Ha);const au={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};class ms{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const C_=new Yr(-1,1,1,-1,0,1);class R_ extends wt{constructor(){super(),this.setAttribute("position",new ot([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new ot([0,2,0,0,2,0],2))}}const P_=new R_;class ml{constructor(e){this._mesh=new Te(P_,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,C_)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}class L_ extends ms{constructor(e,t){super(),this.textureID=t!==void 0?t:"tDiffuse",e instanceof Tt?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=Hs.clone(e.uniforms),this.material=new Tt({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this.fsQuad=new ml(this.material)}render(e,t,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this.fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}class Kc extends ms{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){const i=e.getContext(),s=e.state;s.buffers.color.setMask(!1),s.buffers.depth.setMask(!1),s.buffers.color.setLocked(!0),s.buffers.depth.setLocked(!0);let r,a;this.inverse?(r=0,a=1):(r=1,a=0),s.buffers.stencil.setTest(!0),s.buffers.stencil.setOp(i.REPLACE,i.REPLACE,i.REPLACE),s.buffers.stencil.setFunc(i.ALWAYS,r,4294967295),s.buffers.stencil.setClear(a),s.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),s.buffers.color.setLocked(!1),s.buffers.depth.setLocked(!1),s.buffers.color.setMask(!0),s.buffers.depth.setMask(!0),s.buffers.stencil.setLocked(!1),s.buffers.stencil.setFunc(i.EQUAL,1,4294967295),s.buffers.stencil.setOp(i.KEEP,i.KEEP,i.KEEP),s.buffers.stencil.setLocked(!0)}}class D_ extends ms{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}}class I_{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){const n=e.getSize(new ae);this._width=n.width,this._height=n.height,t=new sn(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:Mn}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new L_(au),this.copyPass.material.blending=kn,this.clock=new p_}swapBuffers(){const e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){const t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());const t=this.renderer.getRenderTarget();let n=!1;for(let i=0,s=this.passes.length;i<s;i++){const r=this.passes[i];if(r.enabled!==!1){if(r.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(i),r.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),r.needsSwap){if(n){const a=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),l.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}Kc!==void 0&&(r instanceof Kc?n=!0:r instanceof D_&&(n=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){const t=this.renderer.getSize(new ae);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;const n=this._width*this._pixelRatio,i=this._height*this._pixelRatio;this.renderTarget1.setSize(n,i),this.renderTarget2.setSize(n,i);for(let s=0;s<this.passes.length;s++)this.passes[s].setSize(n,i)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class N_ extends ms{constructor(e,t,n=null,i=null,s=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=n,this.clearColor=i,this.clearAlpha=s,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new se}render(e,t,n){const i=e.autoClear;e.autoClear=!1;let s,r;this.overrideMaterial!==null&&(r=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(s=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(s),this.overrideMaterial!==null&&(this.scene.overrideMaterial=r),e.autoClear=i}}const U_={uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new se(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};class hs extends ms{constructor(e,t,n,i){super(),this.strength=t!==void 0?t:1,this.radius=n,this.threshold=i,this.resolution=e!==void 0?new ae(e.x,e.y):new ae(256,256),this.clearColor=new se(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let s=Math.round(this.resolution.x/2),r=Math.round(this.resolution.y/2);this.renderTargetBright=new sn(s,r,{type:Mn}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let d=0;d<this.nMips;d++){const h=new sn(s,r,{type:Mn});h.texture.name="UnrealBloomPass.h"+d,h.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(h);const f=new sn(s,r,{type:Mn});f.texture.name="UnrealBloomPass.v"+d,f.texture.generateMipmaps=!1,this.renderTargetsVertical.push(f),s=Math.round(s/2),r=Math.round(r/2)}const a=U_;this.highPassUniforms=Hs.clone(a.uniforms),this.highPassUniforms.luminosityThreshold.value=i,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new Tt({uniforms:this.highPassUniforms,vertexShader:a.vertexShader,fragmentShader:a.fragmentShader}),this.separableBlurMaterials=[];const l=[3,5,7,9,11];s=Math.round(this.resolution.x/2),r=Math.round(this.resolution.y/2);for(let d=0;d<this.nMips;d++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(l[d])),this.separableBlurMaterials[d].uniforms.invSize.value=new ae(1/s,1/r),s=Math.round(s/2),r=Math.round(r/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;const c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new E(1,1,1),new E(1,1,1),new E(1,1,1),new E(1,1,1),new E(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors;const u=au;this.copyUniforms=Hs.clone(u.uniforms),this.blendMaterial=new Tt({uniforms:this.copyUniforms,vertexShader:u.vertexShader,fragmentShader:u.fragmentShader,blending:Ji,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new se,this.oldClearAlpha=1,this.basic=new Mt,this.fsQuad=new ml(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(e,t){let n=Math.round(e/2),i=Math.round(t/2);this.renderTargetBright.setSize(n,i);for(let s=0;s<this.nMips;s++)this.renderTargetsHorizontal[s].setSize(n,i),this.renderTargetsVertical[s].setSize(n,i),this.separableBlurMaterials[s].uniforms.invSize.value=new ae(1/n,1/i),n=Math.round(n/2),i=Math.round(i/2)}render(e,t,n,i,s){e.getClearColor(this._oldClearColor),this.oldClearAlpha=e.getClearAlpha();const r=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),s&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=n.texture,e.setRenderTarget(null),e.clear(),this.fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this.fsQuad.render(e);let a=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this.fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=a.texture,this.separableBlurMaterials[l].uniforms.direction.value=hs.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[l]),e.clear(),this.fsQuad.render(e),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=hs.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[l]),e.clear(),this.fsQuad.render(e),a=this.renderTargetsVertical[l];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this.fsQuad.render(e),this.fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,s&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(n),this.fsQuad.render(e)),e.setClearColor(this._oldClearColor,this.oldClearAlpha),e.autoClear=r}getSeperableBlurMaterial(e){const t=[];for(let n=0;n<e;n++)t.push(.39894*Math.exp(-.5*n*n/(e*e))/e);return new Tt({defines:{KERNEL_RADIUS:e},uniforms:{colorTexture:{value:null},invSize:{value:new ae(.5,.5)},direction:{value:new ae(.5,.5)},gaussianCoefficients:{value:t}},vertexShader:`varying vec2 vUv;
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
				}`})}getCompositeMaterial(e){return new Tt({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
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
				}`})}}hs.BlurDirectionX=new ae(1,0);hs.BlurDirectionY=new ae(0,1);const B_={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

		}`};class F_ extends ms{constructor(){super();const e=B_;this.uniforms=Hs.clone(e.uniforms),this.material=new Z0({name:e.name,uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader}),this.fsQuad=new ml(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},qe.getTransfer(this._outputColorSpace)===st&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===uh?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===dh?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===fh?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===Va?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===ph?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===mh&&(this.material.defines.NEUTRAL_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}class O_{constructor(e){this.canvas=e,this.time=0,this._initRenderer(),this._initScene(),this._initCamera(),this._initLighting(),this._initPostProcessing(),this.entities=[]}_initRenderer(){this.renderer=new R0({canvas:this.canvas,antialias:!0,powerPreference:"high-performance",stencil:!1}),this.renderer.setSize(window.innerWidth,window.innerHeight),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,1.5)),this.renderer.outputColorSpace=Dt,this.renderer.toneMapping=Va,this.renderer.toneMappingExposure=1.15,this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=ch}_initPostProcessing(){const e=this.renderer.getDrawingBufferSize(new ae),t=new sn(e.width,e.height,{type:Mn});this.composer=new I_(this.renderer,t);const n=new N_(this.scene,this.camera);this.composer.addPass(n);const i=new hs(new ae(window.innerWidth,window.innerHeight),.25,.8,.9);this.composer.addPass(i);const s=new F_;this.composer.addPass(s)}_initScene(){this.scene=new P0,this._buildSkyDome(),this.scene.fog=new Kr(13164784,.0015)}_buildSkyDome(){const e=new Ft(800,32,15),t=new Tt({uniforms:{topColor:{value:new se(26333)},horizonColor:{value:new se(8900331)},bottomColor:{value:new se(16774614)},sunColor:{value:new se(16770229)},sunDirection:{value:new E(.4,.5,-.3).normalize()},offset:{value:20},exponent:{value:.5}},vertexShader:`
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
      `,side:Wt,depthWrite:!1}),n=new Te(e,t);this.scene.add(n),this.skyUniforms=t.uniforms}_initCamera(){this.camera=new Gt(60,window.innerWidth/window.innerHeight,.1,1200),this.camera.position.set(0,10,50)}_initLighting(){this.hemiLight=new l_(8900331,12759680,1),this.hemiLight.position.set(0,200,0),this.scene.add(this.hemiLight),this.sunLight=new Fa(16774373,3),this.sunLight.position.set(150,200,-80),this.sunLight.castShadow=!0,this.sunLight.shadow.mapSize.width=1024,this.sunLight.shadow.mapSize.height=1024,this.sunLight.shadow.bias=-4e-4,this.sunLight.shadow.normalBias=.02;const e=200;this.sunLight.shadow.camera.near=10,this.sunLight.shadow.camera.far=600,this.sunLight.shadow.camera.left=-e,this.sunLight.shadow.camera.right=e,this.sunLight.shadow.camera.top=e,this.sunLight.shadow.camera.bottom=-e,this.scene.add(this.sunLight),this.scene.add(this.sunLight.target);const t=new Fa(16772829,.3);t.position.set(-50,5,50),this.scene.add(t)}add(e){this.entities.push(e)}resize(){this.camera.aspect=window.innerWidth/window.innerHeight,this.camera.updateProjectionMatrix(),this.renderer.setSize(window.innerWidth,window.innerHeight),this.composer.setSize(window.innerWidth,window.innerHeight)}render(e){this.time+=e;for(const n of this.entities)n.update&&n.update(e,this.time);const t=.005;this.sunLight.position.set(150+Math.sin(this.time*t)*30,200,-80+Math.cos(this.time*t)*80),this.composer.render()}}class z_{constructor(){this.keys={w:!1,a:!1,s:!1,d:!1,shift:!1,space:!1,e:!1,r:!1,q:!1},this.mouse={dx:0,dy:0,leftDown:!1,rightDown:!1,locked:!1},this._mouseDeltaX=0,this._mouseDeltaY=0,this._jumpRequested=!1,this.analogMove=null,this._touchSprint=!1,this._bindEvents()}_bindEvents(){window.addEventListener("keydown",e=>{const t=e.key.toLowerCase();t in this.keys&&(this.keys[t]=!0),t===" "&&(this.keys.space=!0,e.preventDefault(),e.repeat||(this._jumpRequested=!0))}),window.addEventListener("keyup",e=>{const t=e.key.toLowerCase();t in this.keys&&(this.keys[t]=!1),t===" "&&(this.keys.space=!1)}),document.addEventListener("mousemove",e=>{document.pointerLockElement&&(this._mouseDeltaX+=e.movementX,this._mouseDeltaY+=e.movementY,this.mouse.locked=!0)}),document.addEventListener("mousedown",e=>{e.button===0&&(this.mouse.leftDown=!0),e.button===2&&(this.mouse.rightDown=!0)}),document.addEventListener("mouseup",e=>{e.button===0&&(this.mouse.leftDown=!1),e.button===2&&(this.mouse.rightDown=!1)}),document.addEventListener("pointerlockchange",()=>{this.mouse.locked=!!document.pointerLockElement}),document.addEventListener("contextmenu",e=>e.preventDefault())}consumeMouseDelta(){this.mouse.dx=this._mouseDeltaX,this.mouse.dy=this._mouseDeltaY,this._mouseDeltaX=0,this._mouseDeltaY=0}getMovementInput(){if(this.analogMove&&this.analogMove.magnitude>.05)return{x:this.analogMove.x,z:this.analogMove.z,magnitude:this.analogMove.magnitude};let e=0,t=0;this.keys.w&&(t-=1),this.keys.s&&(t+=1),this.keys.a&&(e-=1),this.keys.d&&(e+=1);const n=Math.sqrt(e*e+t*t);return n>0&&(e/=n,t/=n),{x:e,z:t,magnitude:n>0?1:0}}get isSprinting(){return this._touchSprint?!0:this.keys.shift}get isShooting(){return this.mouse.leftDown}get isJumping(){return this.keys.space}consumeJump(){const e=this._jumpRequested;return this._jumpRequested=!1,e}}class k_{constructor(e,t){this.camera=e,this.input=t,this.yaw=0,this.pitch=.35,this.baseDistance=22,this.currentDistance=22,this.minDistance=5,this.maxDistance=35,this.currentPos=new E,this.targetPos=new E,this.mouseSensitivity=.003,this.pitchMin=-.05,this.pitchMax=Math.PI/6,this.smoothness=8,this.heightOffset=3.5,this.raycaster=new A_,this.collisionLayers=[]}addCollisionObject(e){this.collisionLayers.push(e)}update(e,t){this.input.consumeMouseDelta(),this.input.mouse.locked&&(this.yaw+=this.input.mouse.dx*this.mouseSensitivity,this.pitch+=this.input.mouse.dy*this.mouseSensitivity,this.pitch=Math.max(this.pitchMin,Math.min(this.pitchMax,this.pitch)));const n=Math.cos(this.pitch),i=Math.sin(this.pitch),s=Math.sin(this.yaw),r=Math.cos(this.yaw),a=t.x-this.baseDistance*s*n,l=t.y+this.baseDistance*i+this.heightOffset,c=t.z+this.baseDistance*r*n;this.targetPos.set(a,l,c);const u=new E(t.x,t.y+this.heightOffset,t.z),d=new E().subVectors(this.targetPos,u).normalize(),h=this.targetPos.distanceTo(u);if(this.raycaster.set(u,d),this.raycaster.far=h,this.raycaster.near=.1,this.collisionLayers.length>0){const g=this.raycaster.intersectObjects(this.collisionLayers,!0);if(g.length>0&&g[0].distance<h){const m=Math.max(this.minDistance,g[0].distance-1)/h;this.targetPos.lerpVectors(u,this.targetPos,m)}}const f=1-Math.exp(-this.smoothness*e);this.currentPos.lerp(this.targetPos,f),this.camera.position.copy(this.currentPos),this.camera.lookAt(u)}}function G_(o,e=!1){const t=o[0].index!==null,n=new Set(Object.keys(o[0].attributes)),i=new Set(Object.keys(o[0].morphAttributes)),s={},r={},a=o[0].morphTargetsRelative,l=new wt;let c=0;for(let u=0;u<o.length;++u){const d=o[u];let h=0;if(t!==(d.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const f in d.attributes){if(!n.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+'. All geometries must have compatible attributes; make sure "'+f+'" attribute exists among all geometries, or in none of them.'),null;s[f]===void 0&&(s[f]=[]),s[f].push(d.attributes[f]),h++}if(h!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". Make sure all geometries have the same number of attributes."),null;if(a!==d.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const f in d.morphAttributes){if(!i.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+".  .morphAttributes must be consistent throughout all geometries."),null;r[f]===void 0&&(r[f]=[]),r[f].push(d.morphAttributes[f])}if(e){let f;if(t)f=d.index.count;else if(d.attributes.position!==void 0)f=d.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,f,u),c+=f}}if(t){let u=0;const d=[];for(let h=0;h<o.length;++h){const f=o[h].index;for(let g=0;g<f.count;++g)d.push(f.getX(g)+u);u+=o[h].attributes.position.count}l.setIndex(d)}for(const u in s){const d=$c(s[u]);if(!d)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" attribute."),null;l.setAttribute(u,d)}for(const u in r){const d=r[u][0].length;if(d===0)break;l.morphAttributes=l.morphAttributes||{},l.morphAttributes[u]=[];for(let h=0;h<d;++h){const f=[];for(let _=0;_<r[u].length;++_)f.push(r[u][_][h]);const g=$c(f);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" morphAttribute."),null;l.morphAttributes[u].push(g)}}return l}function $c(o){let e,t,n,i=-1,s=0;for(let c=0;c<o.length;++c){const u=o[c];if(e===void 0&&(e=u.array.constructor),e!==u.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=u.itemSize),t!==u.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=u.normalized),n!==u.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(i===-1&&(i=u.gpuType),i!==u.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;s+=u.count*t}const r=new e(s),a=new At(r,t,n);let l=0;for(let c=0;c<o.length;++c){const u=o[c];if(u.isInterleavedBufferAttribute){const d=l/t;for(let h=0,f=u.count;h<f;h++)for(let g=0;g<t;g++){const _=u.getComponent(h,g);a.setComponent(h+d,g,_)}}else r.set(u.array,l);l+=u.count*t}return i!==void 0&&(a.gpuType=i),a}function Zc(o,e){if(e===Vu)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),o;if(e===Ra||e===Ah){let t=o.getIndex();if(t===null){const r=[],a=o.getAttribute("position");if(a!==void 0){for(let l=0;l<a.count;l++)r.push(l);o.setIndex(r),t=o.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),o}const n=t.count-2,i=[];if(e===Ra)for(let r=1;r<=n;r++)i.push(t.getX(0)),i.push(t.getX(r)),i.push(t.getX(r+1));else for(let r=0;r<n;r++)r%2===0?(i.push(t.getX(r)),i.push(t.getX(r+1)),i.push(t.getX(r+2))):(i.push(t.getX(r+2)),i.push(t.getX(r+1)),i.push(t.getX(r)));i.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const s=o.clone();return s.setIndex(i),s.clearGroups(),s}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),o}class Zr extends ps{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new q_(t)}),this.register(function(t){return new Y_(t)}),this.register(function(t){return new nv(t)}),this.register(function(t){return new iv(t)}),this.register(function(t){return new sv(t)}),this.register(function(t){return new K_(t)}),this.register(function(t){return new $_(t)}),this.register(function(t){return new Z_(t)}),this.register(function(t){return new J_(t)}),this.register(function(t){return new X_(t)}),this.register(function(t){return new Q_(t)}),this.register(function(t){return new j_(t)}),this.register(function(t){return new tv(t)}),this.register(function(t){return new ev(t)}),this.register(function(t){return new V_(t)}),this.register(function(t){return new rv(t)}),this.register(function(t){return new ov(t)})}load(e,t,n,i){const s=this;let r;if(this.resourcePath!=="")r=this.resourcePath;else if(this.path!==""){const c=Fs.extractUrlBase(e);r=Fs.resolveURL(c,this.path)}else r=Fs.extractUrlBase(e);this.manager.itemStart(e);const a=function(c){i?i(c):console.error(c),s.manager.itemError(e),s.manager.itemEnd(e)},l=new ru(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(c){try{s.parse(c,r,function(u){t(u),s.manager.itemEnd(e)},a)}catch(u){a(u)}},n,a)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,i){let s;const r={},a={},l=new TextDecoder;if(typeof e=="string")s=JSON.parse(e);else if(e instanceof ArrayBuffer)if(l.decode(new Uint8Array(e,0,4))===lu){try{r[We.KHR_BINARY_GLTF]=new av(e)}catch(d){i&&i(d);return}s=JSON.parse(r[We.KHR_BINARY_GLTF].content)}else s=JSON.parse(l.decode(e));else s=e;if(s.asset===void 0||s.asset.version[0]<2){i&&i(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const c=new yv(s,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let u=0;u<this.pluginCallbacks.length;u++){const d=this.pluginCallbacks[u](c);d.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),a[d.name]=d,r[d.name]=!0}if(s.extensionsUsed)for(let u=0;u<s.extensionsUsed.length;++u){const d=s.extensionsUsed[u],h=s.extensionsRequired||[];switch(d){case We.KHR_MATERIALS_UNLIT:r[d]=new W_;break;case We.KHR_DRACO_MESH_COMPRESSION:r[d]=new lv(s,this.dracoLoader);break;case We.KHR_TEXTURE_TRANSFORM:r[d]=new cv;break;case We.KHR_MESH_QUANTIZATION:r[d]=new hv;break;default:h.indexOf(d)>=0&&a[d]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+d+'".')}}c.setExtensions(r),c.setPlugins(a),c.parse(n,i)}parseAsync(e,t){const n=this;return new Promise(function(i,s){n.parse(e,t,i,s)})}}function H_(){let o={};return{get:function(e){return o[e]},add:function(e,t){o[e]=t},remove:function(e){delete o[e]},removeAll:function(){o={}}}}const We={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class V_{constructor(e){this.parser=e,this.name=We.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let n=0,i=t.length;n<i;n++){const s=t[n];s.extensions&&s.extensions[this.name]&&s.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,s.extensions[this.name].light)}}_loadLight(e){const t=this.parser,n="light:"+e;let i=t.cache.get(n);if(i)return i;const s=t.json,l=((s.extensions&&s.extensions[this.name]||{}).lights||[])[e];let c;const u=new se(16777215);l.color!==void 0&&u.setRGB(l.color[0],l.color[1],l.color[2],qt);const d=l.range!==void 0?l.range:0;switch(l.type){case"directional":c=new Fa(u),c.target.position.set(0,0,-1),c.add(c.target);break;case"point":c=new Vr(u),c.distance=d;break;case"spot":c=new h_(u),c.distance=d,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,c.angle=l.spot.outerConeAngle,c.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,c.target.position.set(0,0,-1),c.add(c.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return c.position.set(0,0,0),c.decay=2,Fn(c,l),l.intensity!==void 0&&(c.intensity=l.intensity),c.name=t.createUniqueName(l.name||"light_"+e),i=Promise.resolve(c),t.cache.add(n,i),i}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){const t=this,n=this.parser,s=n.json.nodes[e],a=(s.extensions&&s.extensions[this.name]||{}).light;return a===void 0?null:this._loadLight(a).then(function(l){return n._getNodeRef(t.cache,a,l)})}}class W_{constructor(){this.name=We.KHR_MATERIALS_UNLIT}getMaterialType(){return Mt}extendParams(e,t,n){const i=[];e.color=new se(1,1,1),e.opacity=1;const s=t.pbrMetallicRoughness;if(s){if(Array.isArray(s.baseColorFactor)){const r=s.baseColorFactor;e.color.setRGB(r[0],r[1],r[2],qt),e.opacity=r[3]}s.baseColorTexture!==void 0&&i.push(n.assignTexture(e,"map",s.baseColorTexture,Dt))}return Promise.all(i)}}class X_{constructor(e){this.parser=e,this.name=We.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=i.extensions[this.name].emissiveStrength;return s!==void 0&&(t.emissiveIntensity=s),Promise.resolve()}}class q_{constructor(e){this.parser=e,this.name=We.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:bn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],r=i.extensions[this.name];if(r.clearcoatFactor!==void 0&&(t.clearcoat=r.clearcoatFactor),r.clearcoatTexture!==void 0&&s.push(n.assignTexture(t,"clearcoatMap",r.clearcoatTexture)),r.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=r.clearcoatRoughnessFactor),r.clearcoatRoughnessTexture!==void 0&&s.push(n.assignTexture(t,"clearcoatRoughnessMap",r.clearcoatRoughnessTexture)),r.clearcoatNormalTexture!==void 0&&(s.push(n.assignTexture(t,"clearcoatNormalMap",r.clearcoatNormalTexture)),r.clearcoatNormalTexture.scale!==void 0)){const a=r.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new ae(a,a)}return Promise.all(s)}}class Y_{constructor(e){this.parser=e,this.name=We.KHR_MATERIALS_DISPERSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:bn}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=i.extensions[this.name];return t.dispersion=s.dispersion!==void 0?s.dispersion:0,Promise.resolve()}}class j_{constructor(e){this.parser=e,this.name=We.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:bn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],r=i.extensions[this.name];return r.iridescenceFactor!==void 0&&(t.iridescence=r.iridescenceFactor),r.iridescenceTexture!==void 0&&s.push(n.assignTexture(t,"iridescenceMap",r.iridescenceTexture)),r.iridescenceIor!==void 0&&(t.iridescenceIOR=r.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),r.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=r.iridescenceThicknessMinimum),r.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=r.iridescenceThicknessMaximum),r.iridescenceThicknessTexture!==void 0&&s.push(n.assignTexture(t,"iridescenceThicknessMap",r.iridescenceThicknessTexture)),Promise.all(s)}}class K_{constructor(e){this.parser=e,this.name=We.KHR_MATERIALS_SHEEN}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:bn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[];t.sheenColor=new se(0,0,0),t.sheenRoughness=0,t.sheen=1;const r=i.extensions[this.name];if(r.sheenColorFactor!==void 0){const a=r.sheenColorFactor;t.sheenColor.setRGB(a[0],a[1],a[2],qt)}return r.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=r.sheenRoughnessFactor),r.sheenColorTexture!==void 0&&s.push(n.assignTexture(t,"sheenColorMap",r.sheenColorTexture,Dt)),r.sheenRoughnessTexture!==void 0&&s.push(n.assignTexture(t,"sheenRoughnessMap",r.sheenRoughnessTexture)),Promise.all(s)}}class $_{constructor(e){this.parser=e,this.name=We.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:bn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],r=i.extensions[this.name];return r.transmissionFactor!==void 0&&(t.transmission=r.transmissionFactor),r.transmissionTexture!==void 0&&s.push(n.assignTexture(t,"transmissionMap",r.transmissionTexture)),Promise.all(s)}}class Z_{constructor(e){this.parser=e,this.name=We.KHR_MATERIALS_VOLUME}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:bn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],r=i.extensions[this.name];t.thickness=r.thicknessFactor!==void 0?r.thicknessFactor:0,r.thicknessTexture!==void 0&&s.push(n.assignTexture(t,"thicknessMap",r.thicknessTexture)),t.attenuationDistance=r.attenuationDistance||1/0;const a=r.attenuationColor||[1,1,1];return t.attenuationColor=new se().setRGB(a[0],a[1],a[2],qt),Promise.all(s)}}class J_{constructor(e){this.parser=e,this.name=We.KHR_MATERIALS_IOR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:bn}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=i.extensions[this.name];return t.ior=s.ior!==void 0?s.ior:1.5,Promise.resolve()}}class Q_{constructor(e){this.parser=e,this.name=We.KHR_MATERIALS_SPECULAR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:bn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],r=i.extensions[this.name];t.specularIntensity=r.specularFactor!==void 0?r.specularFactor:1,r.specularTexture!==void 0&&s.push(n.assignTexture(t,"specularIntensityMap",r.specularTexture));const a=r.specularColorFactor||[1,1,1];return t.specularColor=new se().setRGB(a[0],a[1],a[2],qt),r.specularColorTexture!==void 0&&s.push(n.assignTexture(t,"specularColorMap",r.specularColorTexture,Dt)),Promise.all(s)}}class ev{constructor(e){this.parser=e,this.name=We.EXT_MATERIALS_BUMP}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:bn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],r=i.extensions[this.name];return t.bumpScale=r.bumpFactor!==void 0?r.bumpFactor:1,r.bumpTexture!==void 0&&s.push(n.assignTexture(t,"bumpMap",r.bumpTexture)),Promise.all(s)}}class tv{constructor(e){this.parser=e,this.name=We.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:bn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],r=i.extensions[this.name];return r.anisotropyStrength!==void 0&&(t.anisotropy=r.anisotropyStrength),r.anisotropyRotation!==void 0&&(t.anisotropyRotation=r.anisotropyRotation),r.anisotropyTexture!==void 0&&s.push(n.assignTexture(t,"anisotropyMap",r.anisotropyTexture)),Promise.all(s)}}class nv{constructor(e){this.parser=e,this.name=We.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,n=t.json,i=n.textures[e];if(!i.extensions||!i.extensions[this.name])return null;const s=i.extensions[this.name],r=t.options.ktx2Loader;if(!r){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,s.source,r)}}class iv{constructor(e){this.parser=e,this.name=We.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(e){const t=this.name,n=this.parser,i=n.json,s=i.textures[e];if(!s.extensions||!s.extensions[t])return null;const r=s.extensions[t],a=i.images[r.source];let l=n.textureLoader;if(a.uri){const c=n.options.manager.getHandler(a.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return n.loadTextureImage(e,r.source,l);if(i.extensionsRequired&&i.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class sv{constructor(e){this.parser=e,this.name=We.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(e){const t=this.name,n=this.parser,i=n.json,s=i.textures[e];if(!s.extensions||!s.extensions[t])return null;const r=s.extensions[t],a=i.images[r.source];let l=n.textureLoader;if(a.uri){const c=n.options.manager.getHandler(a.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return n.loadTextureImage(e,r.source,l);if(i.extensionsRequired&&i.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class rv{constructor(e){this.name=We.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){const t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){const i=n.extensions[this.name],s=this.parser.getDependency("buffer",i.buffer),r=this.parser.options.meshoptDecoder;if(!r||!r.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return s.then(function(a){const l=i.byteOffset||0,c=i.byteLength||0,u=i.count,d=i.byteStride,h=new Uint8Array(a,l,c);return r.decodeGltfBufferAsync?r.decodeGltfBufferAsync(u,d,h,i.mode,i.filter).then(function(f){return f.buffer}):r.ready.then(function(){const f=new ArrayBuffer(u*d);return r.decodeGltfBuffer(new Uint8Array(f),u,d,h,i.mode,i.filter),f})})}else return null}}class ov{constructor(e){this.name=We.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;const i=t.meshes[n.mesh];for(const c of i.primitives)if(c.mode!==en.TRIANGLES&&c.mode!==en.TRIANGLE_STRIP&&c.mode!==en.TRIANGLE_FAN&&c.mode!==void 0)return null;const r=n.extensions[this.name].attributes,a=[],l={};for(const c in r)a.push(this.parser.getDependency("accessor",r[c]).then(u=>(l[c]=u,l[c])));return a.length<1?null:(a.push(this.parser.createNodeMesh(e)),Promise.all(a).then(c=>{const u=c.pop(),d=u.isGroup?u.children:[u],h=c[0].count,f=[];for(const g of d){const _=new Ie,m=new E,p=new rn,v=new E(1,1,1),y=new Kh(g.geometry,g.material,h);for(let x=0;x<h;x++)l.TRANSLATION&&m.fromBufferAttribute(l.TRANSLATION,x),l.ROTATION&&p.fromBufferAttribute(l.ROTATION,x),l.SCALE&&v.fromBufferAttribute(l.SCALE,x),y.setMatrixAt(x,_.compose(m,p,v));for(const x in l)if(x==="_COLOR_0"){const P=l[x];y.instanceColor=new Ia(P.array,P.itemSize,P.normalized)}else x!=="TRANSLATION"&&x!=="ROTATION"&&x!=="SCALE"&&g.geometry.setAttribute(x,l[x]);dt.prototype.copy.call(y,g),this.parser.assignFinalMaterial(y),f.push(y)}return u.isGroup?(u.clear(),u.add(...f),u):f[0]}))}}const lu="glTF",Rs=12,Jc={JSON:1313821514,BIN:5130562};class av{constructor(e){this.name=We.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,Rs),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==lu)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const i=this.header.length-Rs,s=new DataView(e,Rs);let r=0;for(;r<i;){const a=s.getUint32(r,!0);r+=4;const l=s.getUint32(r,!0);if(r+=4,l===Jc.JSON){const c=new Uint8Array(e,Rs+r,a);this.content=n.decode(c)}else if(l===Jc.BIN){const c=Rs+r;this.body=e.slice(c,c+a)}r+=a}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class lv{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=We.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const n=this.json,i=this.dracoLoader,s=e.extensions[this.name].bufferView,r=e.extensions[this.name].attributes,a={},l={},c={};for(const u in r){const d=za[u]||u.toLowerCase();a[d]=r[u]}for(const u in e.attributes){const d=za[u]||u.toLowerCase();if(r[u]!==void 0){const h=n.accessors[e.attributes[u]],f=Zi[h.componentType];c[d]=f.name,l[d]=h.normalized===!0}}return t.getDependency("bufferView",s).then(function(u){return new Promise(function(d,h){i.decodeDracoFile(u,function(f){for(const g in f.attributes){const _=f.attributes[g],m=l[g];m!==void 0&&(_.normalized=m)}d(f)},a,c,qt,h)})})}}class cv{constructor(){this.name=We.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}}class hv{constructor(){this.name=We.KHR_MESH_QUANTIZATION}}class cu extends Ys{constructor(e,t,n,i){super(e,t,n,i)}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,s=e*i*3+i;for(let r=0;r!==i;r++)t[r]=n[s+r];return t}interpolate_(e,t,n,i){const s=this.resultBuffer,r=this.sampleValues,a=this.valueSize,l=a*2,c=a*3,u=i-t,d=(n-t)/u,h=d*d,f=h*d,g=e*c,_=g-c,m=-2*f+3*h,p=f-h,v=1-m,y=p-h+d;for(let x=0;x!==a;x++){const P=r[_+x+a],T=r[_+x+l]*u,A=r[g+x+a],D=r[g+x]*u;s[x]=v*P+y*T+m*A+p*D}return s}}const uv=new rn;class dv extends cu{interpolate_(e,t,n,i){const s=super.interpolate_(e,t,n,i);return uv.fromArray(s).normalize().toArray(s),s}}const en={POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6},Zi={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},Qc={9728:Xt,9729:Zt,9984:_h,9985:Lr,9986:Ps,9987:On},eh={33071:ii,33648:Or,10497:ns},Fo={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},za={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},Jn={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},fv={CUBICSPLINE:void 0,LINEAR:ks,STEP:zs},Oo={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function pv(o){return o.DefaultMaterial===void 0&&(o.DefaultMaterial=new ct({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:Hn})),o.DefaultMaterial}function pi(o,e,t){for(const n in t.extensions)o[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function Fn(o,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(o.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function mv(o,e,t){let n=!1,i=!1,s=!1;for(let c=0,u=e.length;c<u;c++){const d=e[c];if(d.POSITION!==void 0&&(n=!0),d.NORMAL!==void 0&&(i=!0),d.COLOR_0!==void 0&&(s=!0),n&&i&&s)break}if(!n&&!i&&!s)return Promise.resolve(o);const r=[],a=[],l=[];for(let c=0,u=e.length;c<u;c++){const d=e[c];if(n){const h=d.POSITION!==void 0?t.getDependency("accessor",d.POSITION):o.attributes.position;r.push(h)}if(i){const h=d.NORMAL!==void 0?t.getDependency("accessor",d.NORMAL):o.attributes.normal;a.push(h)}if(s){const h=d.COLOR_0!==void 0?t.getDependency("accessor",d.COLOR_0):o.attributes.color;l.push(h)}}return Promise.all([Promise.all(r),Promise.all(a),Promise.all(l)]).then(function(c){const u=c[0],d=c[1],h=c[2];return n&&(o.morphAttributes.position=u),i&&(o.morphAttributes.normal=d),s&&(o.morphAttributes.color=h),o.morphTargetsRelative=!0,o})}function gv(o,e){if(o.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)o.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(o.morphTargetInfluences.length===t.length){o.morphTargetDictionary={};for(let n=0,i=t.length;n<i;n++)o.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function _v(o){let e;const t=o.extensions&&o.extensions[We.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+zo(t.attributes):e=o.indices+":"+zo(o.attributes)+":"+o.mode,o.targets!==void 0)for(let n=0,i=o.targets.length;n<i;n++)e+=":"+zo(o.targets[n]);return e}function zo(o){let e="";const t=Object.keys(o).sort();for(let n=0,i=t.length;n<i;n++)e+=t[n]+":"+o[t[n]]+";";return e}function ka(o){switch(o){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function vv(o){return o.search(/\.jpe?g($|\?)/i)>0||o.search(/^data\:image\/jpeg/)===0?"image/jpeg":o.search(/\.webp($|\?)/i)>0||o.search(/^data\:image\/webp/)===0?"image/webp":o.search(/\.ktx2($|\?)/i)>0||o.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}const xv=new Ie;class yv{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new H_,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,i=-1,s=!1,r=-1;if(typeof navigator<"u"){const a=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(a)===!0;const l=a.match(/Version\/(\d+)/);i=n&&l?parseInt(l[1],10):-1,s=a.indexOf("Firefox")>-1,r=s?a.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||n&&i<17||s&&r<98?this.textureLoader=new ou(this.options.manager):this.textureLoader=new f_(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new ru(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const n=this,i=this.json,s=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(r){return r._markDefs&&r._markDefs()}),Promise.all(this._invokeAll(function(r){return r.beforeRoot&&r.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(r){const a={scene:r[0][i.scene||0],scenes:r[0],animations:r[1],cameras:r[2],asset:i.asset,parser:n,userData:{}};return pi(s,a,i),Fn(a,i),Promise.all(n._invokeAll(function(l){return l.afterRoot&&l.afterRoot(a)})).then(function(){for(const l of a.scenes)l.updateMatrixWorld();e(a)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let i=0,s=t.length;i<s;i++){const r=t[i].joints;for(let a=0,l=r.length;a<l;a++)e[r[a]].isBone=!0}for(let i=0,s=e.length;i<s;i++){const r=e[i];r.mesh!==void 0&&(this._addNodeRef(this.meshCache,r.mesh),r.skin!==void 0&&(n[r.mesh].isSkinnedMesh=!0)),r.camera!==void 0&&this._addNodeRef(this.cameraCache,r.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;const i=n.clone(),s=(r,a)=>{const l=this.associations.get(r);l!=null&&this.associations.set(a,l);for(const[c,u]of r.children.entries())s(u,a.children[c])};return s(n,i),i.name+="_instance_"+e.uses[t]++,i}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){const i=e(t[n]);if(i)return i}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const n=[];for(let i=0;i<t.length;i++){const s=e(t[i]);s&&n.push(s)}return n}getDependency(e,t){const n=e+":"+t;let i=this.cache.get(n);if(!i){switch(e){case"scene":i=this.loadScene(t);break;case"node":i=this._invokeOne(function(s){return s.loadNode&&s.loadNode(t)});break;case"mesh":i=this._invokeOne(function(s){return s.loadMesh&&s.loadMesh(t)});break;case"accessor":i=this.loadAccessor(t);break;case"bufferView":i=this._invokeOne(function(s){return s.loadBufferView&&s.loadBufferView(t)});break;case"buffer":i=this.loadBuffer(t);break;case"material":i=this._invokeOne(function(s){return s.loadMaterial&&s.loadMaterial(t)});break;case"texture":i=this._invokeOne(function(s){return s.loadTexture&&s.loadTexture(t)});break;case"skin":i=this.loadSkin(t);break;case"animation":i=this._invokeOne(function(s){return s.loadAnimation&&s.loadAnimation(t)});break;case"camera":i=this.loadCamera(t);break;default:if(i=this._invokeOne(function(s){return s!=this&&s.getDependency&&s.getDependency(e,t)}),!i)throw new Error("Unknown type: "+e);break}this.cache.add(n,i)}return i}getDependencies(e){let t=this.cache.get(e);if(!t){const n=this,i=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(i.map(function(s,r){return n.getDependency(e,r)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[We.KHR_BINARY_GLTF].body);const i=this.options;return new Promise(function(s,r){n.load(Fs.resolveURL(t.uri,i.path),s,void 0,function(){r(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){const i=t.byteLength||0,s=t.byteOffset||0;return n.slice(s,s+i)})}loadAccessor(e){const t=this,n=this.json,i=this.json.accessors[e];if(i.bufferView===void 0&&i.sparse===void 0){const r=Fo[i.type],a=Zi[i.componentType],l=i.normalized===!0,c=new a(i.count*r);return Promise.resolve(new At(c,r,l))}const s=[];return i.bufferView!==void 0?s.push(this.getDependency("bufferView",i.bufferView)):s.push(null),i.sparse!==void 0&&(s.push(this.getDependency("bufferView",i.sparse.indices.bufferView)),s.push(this.getDependency("bufferView",i.sparse.values.bufferView))),Promise.all(s).then(function(r){const a=r[0],l=Fo[i.type],c=Zi[i.componentType],u=c.BYTES_PER_ELEMENT,d=u*l,h=i.byteOffset||0,f=i.bufferView!==void 0?n.bufferViews[i.bufferView].byteStride:void 0,g=i.normalized===!0;let _,m;if(f&&f!==d){const p=Math.floor(h/f),v="InterleavedBuffer:"+i.bufferView+":"+i.componentType+":"+p+":"+i.count;let y=t.cache.get(v);y||(_=new c(a,p*f,i.count*f/u),y=new Xh(_,f/u),t.cache.add(v,y)),m=new Vs(y,l,h%f/u,g)}else a===null?_=new c(i.count*l):_=new c(a,h,i.count*l),m=new At(_,l,g);if(i.sparse!==void 0){const p=Fo.SCALAR,v=Zi[i.sparse.indices.componentType],y=i.sparse.indices.byteOffset||0,x=i.sparse.values.byteOffset||0,P=new v(r[1],y,i.sparse.count*p),T=new c(r[2],x,i.sparse.count*l);a!==null&&(m=new At(m.array.slice(),m.itemSize,m.normalized)),m.normalized=!1;for(let A=0,D=P.length;A<D;A++){const w=P[A];if(m.setX(w,T[A*l]),l>=2&&m.setY(w,T[A*l+1]),l>=3&&m.setZ(w,T[A*l+2]),l>=4&&m.setW(w,T[A*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}m.normalized=g}return m})}loadTexture(e){const t=this.json,n=this.options,s=t.textures[e].source,r=t.images[s];let a=this.textureLoader;if(r.uri){const l=n.manager.getHandler(r.uri);l!==null&&(a=l)}return this.loadTextureImage(e,s,a)}loadTextureImage(e,t,n){const i=this,s=this.json,r=s.textures[e],a=s.images[t],l=(a.uri||a.bufferView)+":"+r.sampler;if(this.textureCache[l])return this.textureCache[l];const c=this.loadImageSource(t,n).then(function(u){u.flipY=!1,u.name=r.name||a.name||"",u.name===""&&typeof a.uri=="string"&&a.uri.startsWith("data:image/")===!1&&(u.name=a.uri);const h=(s.samplers||{})[r.sampler]||{};return u.magFilter=Qc[h.magFilter]||Zt,u.minFilter=Qc[h.minFilter]||On,u.wrapS=eh[h.wrapS]||ns,u.wrapT=eh[h.wrapT]||ns,u.generateMipmaps=!u.isCompressedTexture&&u.minFilter!==Xt&&u.minFilter!==Zt,i.associations.set(u,{textures:e}),u}).catch(function(){return null});return this.textureCache[l]=c,c}loadImageSource(e,t){const n=this,i=this.json,s=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(d=>d.clone());const r=i.images[e],a=self.URL||self.webkitURL;let l=r.uri||"",c=!1;if(r.bufferView!==void 0)l=n.getDependency("bufferView",r.bufferView).then(function(d){c=!0;const h=new Blob([d],{type:r.mimeType});return l=a.createObjectURL(h),l});else if(r.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const u=Promise.resolve(l).then(function(d){return new Promise(function(h,f){let g=h;t.isImageBitmapLoader===!0&&(g=function(_){const m=new Et(_);m.needsUpdate=!0,h(m)}),t.load(Fs.resolveURL(d,s.path),g,void 0,f)})}).then(function(d){return c===!0&&a.revokeObjectURL(l),Fn(d,r),d.userData.mimeType=r.mimeType||vv(r.uri),d}).catch(function(d){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),d});return this.sourceCache[e]=u,u}assignTexture(e,t,n,i){const s=this;return this.getDependency("texture",n.index).then(function(r){if(!r)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(r=r.clone(),r.channel=n.texCoord),s.extensions[We.KHR_TEXTURE_TRANSFORM]){const a=n.extensions!==void 0?n.extensions[We.KHR_TEXTURE_TRANSFORM]:void 0;if(a){const l=s.associations.get(r);r=s.extensions[We.KHR_TEXTURE_TRANSFORM].extendTexture(r,a),s.associations.set(r,l)}}return i!==void 0&&(r.colorSpace=i),e[t]=r,r})}assignFinalMaterial(e){const t=e.geometry;let n=e.material;const i=t.attributes.tangent===void 0,s=t.attributes.color!==void 0,r=t.attributes.normal===void 0;if(e.isPoints){const a="PointsMaterial:"+n.uuid;let l=this.cache.get(a);l||(l=new sl,mn.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,l.sizeAttenuation=!1,this.cache.add(a,l)),n=l}else if(e.isLine){const a="LineBasicMaterial:"+n.uuid;let l=this.cache.get(a);l||(l=new $h,mn.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,this.cache.add(a,l)),n=l}if(i||s||r){let a="ClonedMaterial:"+n.uuid+":";i&&(a+="derivative-tangents:"),s&&(a+="vertex-colors:"),r&&(a+="flat-shading:");let l=this.cache.get(a);l||(l=n.clone(),s&&(l.vertexColors=!0),r&&(l.flatShading=!0),i&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(a,l),this.associations.set(l,this.associations.get(n))),n=l}e.material=n}getMaterialType(){return ct}loadMaterial(e){const t=this,n=this.json,i=this.extensions,s=n.materials[e];let r;const a={},l=s.extensions||{},c=[];if(l[We.KHR_MATERIALS_UNLIT]){const d=i[We.KHR_MATERIALS_UNLIT];r=d.getMaterialType(),c.push(d.extendParams(a,s,t))}else{const d=s.pbrMetallicRoughness||{};if(a.color=new se(1,1,1),a.opacity=1,Array.isArray(d.baseColorFactor)){const h=d.baseColorFactor;a.color.setRGB(h[0],h[1],h[2],qt),a.opacity=h[3]}d.baseColorTexture!==void 0&&c.push(t.assignTexture(a,"map",d.baseColorTexture,Dt)),a.metalness=d.metallicFactor!==void 0?d.metallicFactor:1,a.roughness=d.roughnessFactor!==void 0?d.roughnessFactor:1,d.metallicRoughnessTexture!==void 0&&(c.push(t.assignTexture(a,"metalnessMap",d.metallicRoughnessTexture)),c.push(t.assignTexture(a,"roughnessMap",d.metallicRoughnessTexture))),r=this._invokeOne(function(h){return h.getMaterialType&&h.getMaterialType(e)}),c.push(Promise.all(this._invokeAll(function(h){return h.extendMaterialParams&&h.extendMaterialParams(e,a)})))}s.doubleSided===!0&&(a.side=vt);const u=s.alphaMode||Oo.OPAQUE;if(u===Oo.BLEND?(a.transparent=!0,a.depthWrite=!1):(a.transparent=!1,u===Oo.MASK&&(a.alphaTest=s.alphaCutoff!==void 0?s.alphaCutoff:.5)),s.normalTexture!==void 0&&r!==Mt&&(c.push(t.assignTexture(a,"normalMap",s.normalTexture)),a.normalScale=new ae(1,1),s.normalTexture.scale!==void 0)){const d=s.normalTexture.scale;a.normalScale.set(d,d)}if(s.occlusionTexture!==void 0&&r!==Mt&&(c.push(t.assignTexture(a,"aoMap",s.occlusionTexture)),s.occlusionTexture.strength!==void 0&&(a.aoMapIntensity=s.occlusionTexture.strength)),s.emissiveFactor!==void 0&&r!==Mt){const d=s.emissiveFactor;a.emissive=new se().setRGB(d[0],d[1],d[2],qt)}return s.emissiveTexture!==void 0&&r!==Mt&&c.push(t.assignTexture(a,"emissiveMap",s.emissiveTexture,Dt)),Promise.all(c).then(function(){const d=new r(a);return s.name&&(d.name=s.name),Fn(d,s),t.associations.set(d,{materials:e}),s.extensions&&pi(i,d,s),d})}createUniqueName(e){const t=tt.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){const t=this,n=this.extensions,i=this.primitiveCache;function s(a){return n[We.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a,t).then(function(l){return th(l,a,t)})}const r=[];for(let a=0,l=e.length;a<l;a++){const c=e[a],u=_v(c),d=i[u];if(d)r.push(d.promise);else{let h;c.extensions&&c.extensions[We.KHR_DRACO_MESH_COMPRESSION]?h=s(c):h=th(new wt,c,t),i[u]={primitive:c,promise:h},r.push(h)}}return Promise.all(r)}loadMesh(e){const t=this,n=this.json,i=this.extensions,s=n.meshes[e],r=s.primitives,a=[];for(let l=0,c=r.length;l<c;l++){const u=r[l].material===void 0?pv(this.cache):this.getDependency("material",r[l].material);a.push(u)}return a.push(t.loadGeometries(r)),Promise.all(a).then(function(l){const c=l.slice(0,l.length-1),u=l[l.length-1],d=[];for(let f=0,g=u.length;f<g;f++){const _=u[f],m=r[f];let p;const v=c[f];if(m.mode===en.TRIANGLES||m.mode===en.TRIANGLE_STRIP||m.mode===en.TRIANGLE_FAN||m.mode===void 0)p=s.isSkinnedMesh===!0?new D0(_,v):new Te(_,v),p.isSkinnedMesh===!0&&p.normalizeSkinWeights(),m.mode===en.TRIANGLE_STRIP?p.geometry=Zc(p.geometry,Ah):m.mode===en.TRIANGLE_FAN&&(p.geometry=Zc(p.geometry,Ra));else if(m.mode===en.LINES)p=new U0(_,v);else if(m.mode===en.LINE_STRIP)p=new il(_,v);else if(m.mode===en.LINE_LOOP)p=new B0(_,v);else if(m.mode===en.POINTS)p=new Zh(_,v);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+m.mode);Object.keys(p.geometry.morphAttributes).length>0&&gv(p,s),p.name=t.createUniqueName(s.name||"mesh_"+e),Fn(p,s),m.extensions&&pi(i,p,m),t.assignFinalMaterial(p),d.push(p)}for(let f=0,g=d.length;f<g;f++)t.associations.set(d[f],{meshes:e,primitives:f});if(d.length===1)return s.extensions&&pi(i,d[0],s),d[0];const h=new Vt;s.extensions&&pi(i,h,s),t.associations.set(h,{meshes:e});for(let f=0,g=d.length;f<g;f++)h.add(d[f]);return h})}loadCamera(e){let t;const n=this.json.cameras[e],i=n[n.type];if(!i){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new Gt(gd.radToDeg(i.yfov),i.aspectRatio||1,i.znear||1,i.zfar||2e6):n.type==="orthographic"&&(t=new Yr(-i.xmag,i.xmag,i.ymag,-i.ymag,i.znear,i.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),Fn(t,n),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],n=[];for(let i=0,s=t.joints.length;i<s;i++)n.push(this._loadNodeShallow(t.joints[i]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(i){const s=i.pop(),r=i,a=[],l=[];for(let c=0,u=r.length;c<u;c++){const d=r[c];if(d){a.push(d);const h=new Ie;s!==null&&h.fromArray(s.array,c*16),l.push(h)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[c])}return new nl(a,l)})}loadAnimation(e){const t=this.json,n=this,i=t.animations[e],s=i.name?i.name:"animation_"+e,r=[],a=[],l=[],c=[],u=[];for(let d=0,h=i.channels.length;d<h;d++){const f=i.channels[d],g=i.samplers[f.sampler],_=f.target,m=_.node,p=i.parameters!==void 0?i.parameters[g.input]:g.input,v=i.parameters!==void 0?i.parameters[g.output]:g.output;_.node!==void 0&&(r.push(this.getDependency("node",m)),a.push(this.getDependency("accessor",p)),l.push(this.getDependency("accessor",v)),c.push(g),u.push(_))}return Promise.all([Promise.all(r),Promise.all(a),Promise.all(l),Promise.all(c),Promise.all(u)]).then(function(d){const h=d[0],f=d[1],g=d[2],_=d[3],m=d[4],p=[];for(let v=0,y=h.length;v<y;v++){const x=h[v],P=f[v],T=g[v],A=_[v],D=m[v];if(x===void 0)continue;x.updateMatrix&&x.updateMatrix();const w=n._createAnimationTracks(x,P,T,A,D);if(w)for(let M=0;M<w.length;M++)p.push(w[M])}return new Ua(s,void 0,p)})}createNodeMesh(e){const t=this.json,n=this,i=t.nodes[e];return i.mesh===void 0?null:n.getDependency("mesh",i.mesh).then(function(s){const r=n._getNodeRef(n.meshCache,i.mesh,s);return i.weights!==void 0&&r.traverse(function(a){if(a.isMesh)for(let l=0,c=i.weights.length;l<c;l++)a.morphTargetInfluences[l]=i.weights[l]}),r})}loadNode(e){const t=this.json,n=this,i=t.nodes[e],s=n._loadNodeShallow(e),r=[],a=i.children||[];for(let c=0,u=a.length;c<u;c++)r.push(n.getDependency("node",a[c]));const l=i.skin===void 0?Promise.resolve(null):n.getDependency("skin",i.skin);return Promise.all([s,Promise.all(r),l]).then(function(c){const u=c[0],d=c[1],h=c[2];h!==null&&u.traverse(function(f){f.isSkinnedMesh&&f.bind(h,xv)});for(let f=0,g=d.length;f<g;f++)u.add(d[f]);return u})}_loadNodeShallow(e){const t=this.json,n=this.extensions,i=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];const s=t.nodes[e],r=s.name?i.createUniqueName(s.name):"",a=[],l=i._invokeOne(function(c){return c.createNodeMesh&&c.createNodeMesh(e)});return l&&a.push(l),s.camera!==void 0&&a.push(i.getDependency("camera",s.camera).then(function(c){return i._getNodeRef(i.cameraCache,s.camera,c)})),i._invokeAll(function(c){return c.createNodeAttachment&&c.createNodeAttachment(e)}).forEach(function(c){a.push(c)}),this.nodeCache[e]=Promise.all(a).then(function(c){let u;if(s.isBone===!0?u=new Yh:c.length>1?u=new Vt:c.length===1?u=c[0]:u=new dt,u!==c[0])for(let d=0,h=c.length;d<h;d++)u.add(c[d]);if(s.name&&(u.userData.name=s.name,u.name=r),Fn(u,s),s.extensions&&pi(n,u,s),s.matrix!==void 0){const d=new Ie;d.fromArray(s.matrix),u.applyMatrix4(d)}else s.translation!==void 0&&u.position.fromArray(s.translation),s.rotation!==void 0&&u.quaternion.fromArray(s.rotation),s.scale!==void 0&&u.scale.fromArray(s.scale);return i.associations.has(u)||i.associations.set(u,{}),i.associations.get(u).nodes=e,u}),this.nodeCache[e]}loadScene(e){const t=this.extensions,n=this.json.scenes[e],i=this,s=new Vt;n.name&&(s.name=i.createUniqueName(n.name)),Fn(s,n),n.extensions&&pi(t,s,n);const r=n.nodes||[],a=[];for(let l=0,c=r.length;l<c;l++)a.push(i.getDependency("node",r[l]));return Promise.all(a).then(function(l){for(let u=0,d=l.length;u<d;u++)s.add(l[u]);const c=u=>{const d=new Map;for(const[h,f]of i.associations)(h instanceof mn||h instanceof Et)&&d.set(h,f);return u.traverse(h=>{const f=i.associations.get(h);f!=null&&d.set(h,f)}),d};return i.associations=c(s),s})}_createAnimationTracks(e,t,n,i,s){const r=[],a=e.name?e.name:e.uuid,l=[];Jn[s.path]===Jn.weights?e.traverse(function(h){h.morphTargetInfluences&&l.push(h.name?h.name:h.uuid)}):l.push(a);let c;switch(Jn[s.path]){case Jn.weights:c=as;break;case Jn.rotation:c=ls;break;case Jn.position:case Jn.scale:c=cs;break;default:switch(n.itemSize){case 1:c=as;break;case 2:case 3:default:c=cs;break}break}const u=i.interpolation!==void 0?fv[i.interpolation]:ks,d=this._getArrayFromAccessor(n);for(let h=0,f=l.length;h<f;h++){const g=new c(l[h]+"."+Jn[s.path],t.array,d,u);i.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(g),r.push(g)}return r}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){const n=ka(t.constructor),i=new Float32Array(t.length);for(let s=0,r=t.length;s<r;s++)i[s]=t[s]*n;t=i}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){const i=this instanceof ls?dv:cu;return new i(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function Mv(o,e,t){const n=e.attributes,i=new It;if(n.POSITION!==void 0){const a=t.json.accessors[n.POSITION],l=a.min,c=a.max;if(l!==void 0&&c!==void 0){if(i.set(new E(l[0],l[1],l[2]),new E(c[0],c[1],c[2])),a.normalized){const u=ka(Zi[a.componentType]);i.min.multiplyScalar(u),i.max.multiplyScalar(u)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const s=e.targets;if(s!==void 0){const a=new E,l=new E;for(let c=0,u=s.length;c<u;c++){const d=s[c];if(d.POSITION!==void 0){const h=t.json.accessors[d.POSITION],f=h.min,g=h.max;if(f!==void 0&&g!==void 0){if(l.setX(Math.max(Math.abs(f[0]),Math.abs(g[0]))),l.setY(Math.max(Math.abs(f[1]),Math.abs(g[1]))),l.setZ(Math.max(Math.abs(f[2]),Math.abs(g[2]))),h.normalized){const _=ka(Zi[h.componentType]);l.multiplyScalar(_)}a.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}i.expandByVector(a)}o.boundingBox=i;const r=new Sn;i.getCenter(r.center),r.radius=i.min.distanceTo(i.max)/2,o.boundingSphere=r}function th(o,e,t){const n=e.attributes,i=[];function s(r,a){return t.getDependency("accessor",r).then(function(l){o.setAttribute(a,l)})}for(const r in n){const a=za[r]||r.toLowerCase();a in o.attributes||i.push(s(n[r],a))}if(e.indices!==void 0&&!o.index){const r=t.getDependency("accessor",e.indices).then(function(a){o.setIndex(a)});i.push(r)}return qe.workingColorSpace!==qt&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${qe.workingColorSpace}" not supported.`),Fn(o,e),Mv(o,e,t),Promise.all(i).then(function(){return e.targets!==void 0?mv(o,e.targets,t):o})}function yi(o){const e=new Map,t=new Map,n=o.clone();return hu(o,n,function(i,s){e.set(s,i),t.set(i,s)}),n.traverse(function(i){if(!i.isSkinnedMesh)return;const s=i,r=e.get(i),a=r.skeleton.bones;s.skeleton=r.skeleton.clone(),s.bindMatrix.copy(r.bindMatrix),s.skeleton.bones=a.map(function(l){return t.get(l)}),s.bind(s.skeleton,s.bindMatrix)}),n}function hu(o,e,t){t(o,e);for(let n=0;n<o.children.length;n++)hu(o.children[n],e.children[n],t)}class Sv{constructor(e){this.scene=e,this.loader=new Zr,this.sand=null,this.ocean=null,this.trees=[],this.rocks=[],this.props=[],this.colliders=[],this.terrainSize=700,this.sandCanvas=null,this.sandCtx=null,this.sandTexture=null,this.colorCanvas=null,this.colorCtx=null,this.colorTexture=null,this.lastFootprintPos=new E,this._buildTerrain(),this._buildOcean(),this._loadRocks(),this._spawnVegetation(),this._spawnBeachProps(),this._loadTrees(),this._loadFerns(),this._spawnSeagulls(),this.scene.background=new se(8900331),this.scene.fog=new Kr(8900331,.0035)}getTerrainHeight(e,t){const n=Math.sin(t*.05)*15,i=e+n;let s=2;if(i<-120?s+=Math.pow(Math.abs(i+120)*.08,1.8):i>30&&(s-=(i-30)*.15,s<-20&&(s=-20)),Math.abs(t)>130){const r=Math.abs(t)-130;let a=Math.pow(r*.15,1.5);if(e>-30){let l=1-(e+30)/60;l<0&&(l=0),a*=l}s+=a}return s+=Math.sin(e*.2)*.2+Math.cos(t*.2)*.2,Math.abs(e)<10&&Math.abs(t-40)<10&&(s=2),s}_buildTerrain(){const t=new Ht(this.terrainSize,this.terrainSize,192,192);t.rotateX(-Math.PI/2);const n=t.attributes.position;for(let a=0;a<n.count;a++){const l=n.getX(a),c=n.getZ(a);n.setY(a,this.getTerrainHeight(l,c))}t.computeVertexNormals(),this.sandCanvas=document.createElement("canvas"),this.sandCanvas.width=1024,this.sandCanvas.height=1024,this.sandCtx=this.sandCanvas.getContext("2d"),this.sandCtx.fillStyle="#000000",this.sandCtx.fillRect(0,0,1024,1024),this.sandTexture=new Ws(this.sandCanvas),this.sandTexture.anisotropy=4,this.colorCanvas=document.createElement("canvas"),this.colorCanvas.width=1024,this.colorCanvas.height=1024,this.colorCtx=this.colorCanvas.getContext("2d"),this.colorCtx.fillStyle="#d4a86a",this.colorCtx.fillRect(0,0,1024,1024);const i=this.colorCtx.getImageData(0,0,1024,1024),s=i.data;for(let a=0;a<s.length;a+=4){const l=(Math.random()-.5)*20;s[a]+=l,s[a+1]+=l*.8,s[a+2]+=l*.5}this.colorCtx.putImageData(i,0,0),this.colorTexture=new Ws(this.colorCanvas),this.colorTexture.anisotropy=4;const r=new ct({map:this.colorTexture,bumpMap:this.sandTexture,bumpScale:3,roughness:.85,metalness:.05,color:16777215});this.sand=new Te(t,r),this.sand.receiveShadow=!0,this.scene.add(this.sand),this._buildWetSandStrip()}_buildWetSandStrip(){const i=new Ht(25,this.terrainSize,32,160);i.rotateX(-Math.PI/2);const s=i.attributes.position,r=new Float32Array(s.count*4);for(let c=0;c<s.count;c++){const u=s.getX(c),d=s.getZ(c),h=Math.sin(d*.05)*15,f=20+u/(25/2)*(25/2)-h*.2;let g=this.getTerrainHeight(f,d)+.03;s.setX(c,f),s.setY(c,g);const _=(u+25/2)/25,m=Math.sin(_*Math.PI)*.45;r[c*4]=.4,r[c*4+1]=.3,r[c*4+2]=.2,r[c*4+3]=m}i.setAttribute("color",new At(r,4)),i.computeVertexNormals();const a=new ct({vertexColors:!0,roughness:.35,metalness:.15,transparent:!0,depthWrite:!1}),l=new Te(i,a);l.receiveShadow=!0,this.scene.add(l)}_buildOcean(){const n=new Ht(500,750,64,64);n.rotateX(-Math.PI/2);const i=n.attributes.position;for(let r=0;r<i.count;r++)i.setX(r,i.getX(r)+500/2+25);n.computeBoundingBox(),n.computeBoundingSphere();const s=new Tt({uniforms:{time:{value:0},cameraPos:{value:new E},tintColor:{value:new se(1,1,1)}},vertexShader:`
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
        uniform vec3 tintColor;

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

          gl_FragColor = vec4((baseColor + foamColor + vec3(sunGlint)) * tintColor, alpha);
        }
      `,transparent:!0,depthWrite:!1});this.ocean=new Te(n,s),this.ocean.position.y=1.2,this.scene.add(this.ocean)}_loadRocks(){this.loader.load("./models/simple_rock_iv.glb",e=>{this._placeRocks(e.scene,"simple_rock",20),console.log("✓ Rocks loaded")})}_placeRocks(e,t,n){for(let i=0;i<n;i++){const s=e.clone();let r,a;if(t==="mountain"){const d=[{x:-80,z:-100},{x:-90,z:80},{x:-100,z:-30},{x:-85,z:180}],h=d[i%d.length];r=h.x+(Math.random()-.5)*10,a=h.z+(Math.random()-.5)*20}else{const d=Math.random();d<.4?(r=15+Math.random()*25,a=-190+Math.random()*380):d<.7?(r=-10+Math.random()*40,a=-190+Math.random()*380):(r=-30-Math.random()*90,a=-190+Math.random()*380)}if(Math.abs(r)<12&&Math.abs(a-40)<25&&(r+=r>0?18:-18),Math.sqrt((r+60)**2+a**2)<35)continue;const c=this.getTerrainHeight(r,a);let u;t==="mountain"?(u=4+Math.random()*3,s.position.set(r,c+u*.1,a)):(u=1.2+Math.random()*2,s.position.set(r,c+u*.15,a)),s.scale.setScalar(u),s.rotation.y=Math.random()*Math.PI*2,t==="simple_rock"&&(s.rotation.x=(Math.random()-.5)*.3,s.rotation.z=(Math.random()-.5)*.2),s.traverse(d=>{d.isMesh&&(d.castShadow=!0,d.receiveShadow=!0)}),this.scene.add(s),this.rocks.push(s),this.colliders.push({x:r,z:a,radius:u*(t==="mountain"?1.5:.8)})}}_spawnVegetation(){const e=new ct({roughness:.8,metalness:.1,side:vt,vertexColors:!0});e.onBeforeCompile=a=>{a.uniforms.time={value:0},this.grassShader=a,a.vertexShader=`
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
        `)};const t=this._createTuftGeometry(),n=15e3,i=new Kh(t,e,n);i.castShadow=!0,i.receiveShadow=!0;const s=new dt;let r=0;for(let a=0;a<n;a++){const l=Math.random(),c=-130+Math.pow(l,1.5)*150,u=Math.random()<.5?-1:1,d=Math.pow(Math.random(),.8)*190,h=u*d,f=this.getTerrainHeight(c,h);if(f<4||Math.sqrt((c+60)**2+h**2)<35)continue;s.position.set(c,f-.1,h),s.rotation.y=Math.random()*Math.PI*2;const _=Math.random(),m=.3+Math.pow(_,2)*2.2;s.scale.setScalar(m),s.updateMatrix(),i.setMatrixAt(r,s.matrix),r++}i.count=r,i.instanceMatrix.needsUpdate=!0,this.scene.add(i)}_createTuftGeometry(){const e=[];for(let n=0;n<16;n++){const i=1.5+Math.random()*2,s=.2+Math.random()*.2,r=new Ht(s,i,1,4);r.translate(0,i/2,0);const a=r.attributes.position,l=new At(new Float32Array(a.count*3),3),c=.5+Math.random()*1;for(let y=0;y<a.count;y++){const x=a.getX(y),P=a.getY(y),T=a.getZ(y),A=Math.max(0,P/i),D=1-Math.pow(A,2);a.setX(y,x*D);const w=Math.pow(A,1.5)*c;a.setZ(y,T+w);const M=new se(2968606),I=new se(7119666),L=M.clone().lerp(I,A);l.setXYZ(y,L.r,L.g,L.b)}r.setAttribute("color",l),r.computeVertexNormals();const u=n/16*Math.PI*2+Math.random()*.5,d=Math.random()*.2,h=new Ie,f=(Math.random()-.5)*.2,g=-u+Math.PI/2,_=new gn(f,g,0,"XYZ"),m=new rn().setFromEuler(_),p=new E(Math.cos(u)*d,0,Math.sin(u)*d),v=new E(1,1,1);h.compose(p,m,v),r.applyMatrix4(h),e.push(r)}return G_(e)}_spawnBeachProps(){const e=new ct({color:9136404,roughness:.95,metalness:0});for(let n=0;n<12;n++){const i=-10+Math.random()*35,s=-190+Math.random()*380,r=this.getTerrainHeight(i,s);if(r<1||r>5)continue;const a=2+Math.random()*4,l=new fn(.15,.25,a,6),c=l.attributes.position;for(let d=0;d<c.count;d++)c.setX(d,c.getX(d)+(Math.random()-.5)*.1),c.setZ(d,c.getZ(d)+(Math.random()-.5)*.1);l.computeVertexNormals();const u=new Te(l,e);u.position.set(i,r+.1,s),u.rotation.x=Math.PI/2,u.rotation.z=Math.random()*Math.PI,u.castShadow=!0,u.receiveShadow=!0,this.scene.add(u),this.props.push(u)}const t=[16774625,16770244,16113331,16767673,16444375];for(let n=0;n<30;n++){const i=-5+Math.random()*30,s=-190+Math.random()*380,r=this.getTerrainHeight(i,s);if(r<1||r>4)continue;const a=new Ft(.3,6,4);a.scale(1,.3,1.3);const l=new ct({color:t[n%5],roughness:.5,metalness:.2}),c=new Te(a,l);c.position.set(i,r+.05,s),c.rotation.y=Math.random()*Math.PI*2,c.scale.setScalar(.5+Math.random()*.8),c.castShadow=!0,this.scene.add(c),this.props.push(c)}}_loadTrees(){this.loader.load("./models/coconut_tree.glb",e=>{const i=(c,u,d,h=0,f=!0)=>{const g=e.scene.clone(),_=this.getTerrainHeight(c,u);g.position.set(c,_-1.5,u),g.rotation.y=Math.random()*Math.PI*2,g.rotation.z=h,g.scale.setScalar(d),g.traverse(m=>{m.isMesh&&(m.castShadow=f,m.receiveShadow=!0,m.material&&(m.material.side=vt,m.material.alphaTest=.5,m.material.transparent=!1,m.material.depthWrite=!0))}),this.scene.add(g),this.trees.push(g),c>-80&&this.colliders.push({x:c,z:u,radius:d*.35})};i(-80,-40,16,0),i(-45,-45,14,0),i(-80,40,17,0),i(-45,45,15,0),i(-20,-80,16,0),i(-15,-30,14,0),i(-18,50,18,0),i(-25,110,15,0),i(-22,160,17,0);const s=[{x:-100,z:-180},{x:-120,z:-140},{x:-140,z:-100},{x:-130,z:-50},{x:-150,z:0},{x:-140,z:50},{x:-120,z:100},{x:-100,z:140},{x:-130,z:180},{x:-110,z:-160},{x:-150,z:-80},{x:-160,z:-20},{x:-135,z:30},{x:-155,z:80},{x:-115,z:160},{x:-145,z:-120},{x:-125,z:70},{x:-135,z:-170},{x:-110,z:200},{x:-150,z:130}];for(const c of s)i(c.x+(Math.random()-.5)*10,c.z+(Math.random()-.5)*15,14+Math.random()*10,(Math.random()-.5)*.15,!1);const r=[{x:-40,z:-150},{x:-60,z:-170},{x:-80,z:-160},{x:-50,z:-190},{x:-40,z:150},{x:-60,z:170},{x:-80,z:160},{x:-50,z:190}];for(const c of r)i(c.x+(Math.random()-.5)*8,c.z+(Math.random()-.5)*10,12+Math.random()*8,(Math.random()-.5)*.2);const a=[{x:-90,z:60,rotY:-.4},{x:-100,z:-50,rotY:.6}];for(const c of a){const u=e.scene.clone(),d=this.getTerrainHeight(c.x,c.z);u.position.set(c.x,d-4,c.z),u.rotation.set(Math.PI*.45,c.rotY,0),u.scale.setScalar(14),u.traverse(h=>{h.isMesh&&(h.castShadow=!0,h.receiveShadow=!0,h.material&&(h.material.side=vt,h.material.alphaTest=.5,h.material.transparent=!1,h.material.depthWrite=!0))}),this.scene.add(u),this.colliders.push({x:c.x,z:c.z,radius:6,height:2.5})}const l=120;for(let c=0;c<l;c++){const u=yi(e.scene),d=Math.random(),h=-160+Math.pow(d,1.8)*150,f=Math.random()<.5?-1:1,g=Math.pow(Math.random(),.6)*220,_=f*g;if(Math.sqrt((h- -60)**2+(_-0)**2)<35)continue;const p=this.getTerrainHeight(h,_),v=2+Math.random()*5;u.position.set(h,p-1,_),u.rotation.y=Math.random()*Math.PI*2,u.rotation.z=(Math.random()-.5)*.2,u.rotation.x=(Math.random()-.5)*.2,u.scale.setScalar(v),u.traverse(y=>{y.isMesh&&(y.castShadow=!1,y.receiveShadow=!0,y.material&&(y.material.side=vt,y.material.alphaTest=.5,y.material.transparent=!1,y.material.depthWrite=!0))}),this.scene.add(u)}console.log("✓ Trees loaded (purposeful placement)")})}_loadFerns(){this.loader.load("./models/fern_grass_02.glb",e=>{const n=new It().setFromObject(e.scene).getSize(new E),i=Math.max(n.x,n.y,n.z),s=i>0?40/i:1,r=[{x:-95,z:-140},{x:-65,z:-60},{x:-85,z:140},{x:-40,z:-180},{x:-50,z:190}],a=[];for(let u=0;u<18;u++)a.push({x:-160+Math.random()*40,z:-200+u/17*400+(Math.random()-.5)*20});const l=[];for(let u=0;u<10;u++)l.push({x:-60-Math.random()*60,z:-180+Math.random()*360});const c=r.concat(a,l);for(let u=0;u<c.length;u++){const d=yi(e.scene),h=c[u];let f=this.getTerrainHeight(h.x,h.z);d.position.set(h.x,f-.1,h.z),d.rotation.y=Math.random()*Math.PI*2;const g=u<r.length,_=g?s*(1+Math.random()*.5):s*(.4+Math.random()*.4);d.scale.setScalar(_),d.traverse(m=>{m.isMesh&&(m.castShadow=g,m.receiveShadow=!0,m.material&&(m.material.side=vt,m.material.alphaTest=.5,m.material.transparent=!1,m.material.depthWrite=!0))}),this.scene.add(d)}console.log("✓ Ferns loaded (dense jungle)")},void 0,e=>console.log("Failed to load ferns",e))}_spawnSeagulls(){this.seagulls=[];const e=new ct({color:16777215,roughness:.8,side:vt}),t=new ct({color:15658734,roughness:.6});for(let n=0;n<5;n++){const i=new Vt,s=new ll(.3,1.2,4,8);s.rotateZ(Math.PI/2),i.add(new Te(s,t));const r=new Ht(2,.6),a=new Te(r,e);a.position.set(0,.1,1),i.add(a);const l=new Te(r,e);l.position.set(0,.1,-1),i.add(l);const c=40+Math.random()*100,u=.15+Math.random()*.2,d=50+Math.random()*60,h=Math.random()*Math.PI*2,f=-20+Math.random()*40,g=Math.random()*60;i.position.set(f,d,g),this.scene.add(i),this.seagulls.push({group:i,leftWing:a,rightWing:l,orbitR:c,orbitS:u,h:d,phase:h,cx:f,cz:g})}}stampFootprint(e,t,n){if(e.distanceTo(this.lastFootprintPos)<.8)return;const s=this.terrainSize/2,r=1024,a=Math.floor((e.x+s)/this.terrainSize*r),l=Math.floor((e.z+s)/this.terrainSize*r);if(a<8||a>r-8||l<8||l>r-8)return;this._footprintCount=(this._footprintCount||0)+1;const c=this._footprintCount%2===0?-1:1;for(let u=-1;u<=1;u+=2){const d=a+c*3+u*1,h=l+u*2;this.sandCtx.save(),this.sandCtx.translate(d,h),this.sandCtx.rotate(Math.random()*.5-.25),this.sandCtx.scale(1,1.8);const f=this.sandCtx.createRadialGradient(0,0,0,0,0,3);f.addColorStop(0,"rgba(255,255,255,0.6)"),f.addColorStop(1,"rgba(255,255,255,0)"),this.sandCtx.fillStyle=f,this.sandCtx.beginPath(),this.sandCtx.arc(0,0,3,0,Math.PI*2),this.sandCtx.fill(),this.sandCtx.restore(),this.colorCtx.save(),this.colorCtx.translate(d,h),this.colorCtx.rotate(Math.random()*.5-.25),this.colorCtx.scale(1,1.8);const g=this.colorCtx.createRadialGradient(0,0,0,0,0,3);g.addColorStop(0,"rgba(160, 120, 75, 0.5)"),g.addColorStop(1,"rgba(160, 120, 75, 0)"),this.colorCtx.fillStyle=g,this.colorCtx.beginPath(),this.colorCtx.arc(0,0,3,0,Math.PI*2),this.colorCtx.fill(),this.colorCtx.restore()}this.sandTexture.needsUpdate=!0,this.colorTexture.needsUpdate=!0,this.lastFootprintPos.copy(e)}update(e,t){this.ocean&&this.ocean.material.uniforms&&(this.ocean.material.uniforms.time.value=t),this._fadeTimer=(this._fadeTimer||0)+e,this._fadeTimer>.3&&(this._fadeTimer=0,this.sandCtx.fillStyle="rgba(0, 0, 0, 0.08)",this.sandCtx.fillRect(0,0,1024,1024),this.sandTexture.needsUpdate=!0,this.colorCtx.fillStyle="rgba(212, 168, 106, 0.08)",this.colorCtx.fillRect(0,0,1024,1024),this.colorTexture.needsUpdate=!0);for(const n of this.seagulls){const i=t*n.orbitS+n.phase;n.group.position.x=n.cx+Math.cos(i)*n.orbitR,n.group.position.z=n.cz+Math.sin(i)*n.orbitR,n.group.position.y=n.h+Math.sin(i*2)*3,n.group.rotation.y=-i+Math.PI/2;const s=Math.sin(t*4+n.phase)*.35;n.leftWing.rotation.x=s,n.rightWing.rotation.x=-s}this.grassShader&&(this.grassShader.uniforms.time.value=t)}}const Qn={IDLE:"idle",WALK:"walk",RUN:"run",ATTACK:"attack"};class wv{constructor(e,t,n,i){this.scene=e,this.world=t,this.input=n,this.cameraController=i,this.model=null,this.mixer=null,this.animations={},this.currentState=Qn.IDLE,this._singleAnimMode=!1,this._targetTimeScale=.15,this.loaded=!1,this.walkSpeed=25,this.runSpeed=45,this.rotationSmoothing=10,this.targetRotationY=Math.PI,this.position=new E(0,2.5,40),this.velocity=new E(0,0,0),this.verticalVelocity=0,this.isAirborne=!1,this.jumpForce=25,this.gravity=55,this.maxAmmo=100,this.currentAmmo=100,this.sandBurstCooldown=0,this.sandBurstCooldownMax=15,this._initSandBurstParticles(),this.isInWater=!1,this.maxHealth=100,this.health=100,this._damageFlashTimer=0,this._dropletOpacity=0,this.isDead=!1,this.deathTimer=0,this._deathTriggered=!1,this.hasResurrection=!0,this.isRaging=!1,this.rageTimer=0,this.rageDuration=30,this._ragePhase=null,this._ragePhaseTimer=0,this._rageBeamLight=null,this._originalScale=4,this._originalMaterials=[],this.coins=0,this.totalCoinsCollected=0,this.coinMultiplier=1,this.weaponType="pistol",this.weaponLevels={pistol:1,shotgun:1,charger:1},this.utilityLevels={maxHealth:1,waterCapacity:1,burrowStrength:1,minionCapacity:1,minionLevel:1,sandBurst:1,jumpPower:1},this._initSandBurstParticles(),this._load()}_initSandBurstParticles(){this.sandParticleCount=1500;const e=new wt,t=new Float32Array(this.sandParticleCount*3),n=[];for(let d=0;d<this.sandParticleCount*3;d++)t[d]=9999;for(let d=0;d<this.sandParticleCount;d++)n.push(new E);e.setAttribute("position",new At(t,3));const i=document.createElement("canvas");i.width=16,i.height=16;const s=i.getContext("2d"),r=s.createRadialGradient(8,8,0,8,8,8);r.addColorStop(0,"rgba(255, 230, 150, 1)"),r.addColorStop(1,"rgba(255, 230, 150, 0)"),s.fillStyle=r,s.fillRect(0,0,16,16);const a=new Ws(i),l=new sl({color:15654280,size:.8,map:a,transparent:!0,opacity:.9,depthWrite:!1,blending:ri});this.sandParticleSystem=new Zh(e,l),this.sandParticleSystem.frustumCulled=!1,this.scene.add(this.sandParticleSystem),this.sandParticleVelocities=n,this.sandBurstActive=!1,this.sandBurstTimer=0;const c=new qs(.1,30,96,96);this._sandShockwaveUniforms={uTime:{value:0},uSpeed:{value:50},uFrequency:{value:1.5},uAmplitude:{value:4},uDecay:{value:.15},uThickness:{value:.4},uDuration:{value:1.5}};const u=new Tt({uniforms:this._sandShockwaveUniforms,vertexShader:`
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
      `,transparent:!0,side:vt,depthWrite:!1,blending:ri,wireframe:!1});this._sandShockwave=new Te(c,u),this._sandShockwave.rotation.x=-Math.PI/2,this._sandShockwave.visible=!1,this.scene.add(this._sandShockwave)}_load(){const e=new Zr;e.load("./models/sweet_crab_sketchfabweekly.glb",t=>this._onModelLoaded(t),void 0,t=>{console.warn("Sweet crab failed, falling back to animated_crab.glb",t),e.load("./models/animated_crab.glb",n=>this._onModelLoaded(n),void 0,n=>console.error("Failed to load any crab model",n))})}_onModelLoaded(e){this.model=e.scene;const t=new It().setFromObject(this.model),n=t.getSize(new E),s=4/Math.max(n.x,n.y,n.z);if(this.model.scale.setScalar(s),this._originalScale=s,t.setFromObject(this.model),this._modelBottomOffset=t.min.y*s,this.model.position.copy(this.position),this.model.traverse(r=>{r.isMesh&&(r.castShadow=!0,r.receiveShadow=!0,r.material&&r.material.isMeshStandardMaterial&&(r.material.roughness=Math.min(r.material.roughness,.7),r.material.envMapIntensity=.5))}),this.scene.add(this.model),e.animations&&e.animations.length>0){this.mixer=new ji(this.model),console.log(`Crab: ${e.animations.length} animation(s):`),e.animations.forEach((a,l)=>console.log(`  [${l}] "${a.name}" — ${a.duration.toFixed(2)}s`));for(const a of e.animations){const l=a.name.toLowerCase(),c=this.mixer.clipAction(a);l.includes("idle")||l.includes("breath")?this.animations.idle=c:l.includes("walk")||l.includes("crawl")?this.animations.walk=c:l.includes("run")||l.includes("sprint")?this.animations.run=c:(l.includes("attack")||l.includes("shoot"))&&(this.animations.attack=c)}if(e.animations.length===1){const a=this.mixer.clipAction(e.animations[0]);this.animations.idle=a,this.animations.walk=a,this.animations.run=a,this._singleAnimMode=!0}const r=this.animations.idle||this.animations.walk;r&&(r.play(),r.timeScale=.15)}this.loaded=!0,console.log("✓ Crab loaded and ready"),this._hasSpokenIntro=!1}_transitionTo(e){if(this.currentState===e)return;if(this.currentState=e,this._singleAnimMode){const n={[Qn.IDLE]:.12,[Qn.WALK]:3.5,[Qn.RUN]:7,[Qn.ATTACK]:.8};this._targetTimeScale=n[e]||1;return}const t=this.animations[e];if(t){for(const[n,i]of Object.entries(this.animations))i&&i!==t&&i.fadeOut(.3);t.reset().fadeIn(.3).play()}}update(e,t,n=!0){if(!this.loaded||!this.model)return;if(this.isDead&&this.deathTimer>0&&(this.deathTimer=Math.max(0,this.deathTimer-e)),this._ragePhase){if(n)if(this._ragePhaseTimer-=e,this._ragePhase==="ascend")this.position.y+=10*e,this._ragePhaseTimer<=0&&(this._ragePhase="transform",this._ragePhaseTimer=1,this.model&&this.model.scale.setScalar(this._originalScale*3));else if(this._ragePhase==="transform")this._ragePhaseTimer<=0&&(this._ragePhase="descend",this._ragePhaseTimer=.4,this._sandShockwave&&(this._sandShockwave.position.copy(this.position),this._sandShockwave.position.y+=.05,this._sandShockwaveUniforms.uTime.value=0,this._sandShockwave.scale.setScalar(1.5),this._sandShockwave.visible=!0,this.sandBurstActive=!0,this.sandBurstTimer=1.5));else if(this._ragePhase==="descend"){const L=this.world.getTerrainHeight(this.position.x,this.position.z);this.position.y-=40*e,(this.position.y<=L+.5||this._ragePhaseTimer<=0)&&(this.position.y=L,this._ragePhase="active",this.rageTimer=this.rageDuration,this._rageBeamLight&&(this.scene.remove(this._rageBeamLight),this._rageBeamLight=null),this._onRageLand?.())}else this._ragePhase==="active"&&(this.rageTimer-=e,this.rageTimer<=0&&this.deactivateRage());if(this._ragePhase&&this._ragePhase!=="active"){this.model&&this.model.position.copy(this.position),this.mixer&&this.mixer.update(e);return}}const i=n&&!this.isDead,s=i?this.input.getMovementInput():{x:0,z:0,magnitude:0},r=s.magnitude>0,a=i&&this.input.isSprinting&&r;if(r?this._transitionTo(a?Qn.RUN:Qn.WALK):this._transitionTo(Qn.IDLE),r){const L=a?this.runSpeed:this.walkSpeed,N=this.cameraController.yaw,k=Math.sin(N),K=Math.cos(N),H=s.x*K-s.z*k,te=s.z*K+s.x*k;this.velocity.x=H*L,this.velocity.z=te*L,this.targetRotationY=Math.atan2(H,te)}else this.velocity.x*=.85,this.velocity.z*=.85;let l=this.position.x+this.velocity.x*e,c=this.position.z+this.velocity.z*e;const u=this.world.getTerrainHeight(l,c),d=Math.sin(c*.05)*15,h=l+d;if(h<-145){const L=Math.pow(Math.abs(h+145)*.08,2);L>.4&&(l+=L*.35*e*60)}const f=3;for(const L of this.world.colliders){if(L.height&&this.position.y>u+L.height)continue;if(Math.sqrt((l-L.x)**2+(c-L.z)**2)<L.radius+f){const k=Math.atan2(c-L.z,l-L.x);l=L.x+Math.cos(k)*(L.radius+f),c=L.z+Math.sin(k)*(L.radius+f)}}l=Math.max(-160,Math.min(70,l)),c=Math.max(-190,Math.min(190,c)),this.position.x=l,this.position.z=c,i&&!this.isAirborne&&this.input.consumeJump()&&(this.verticalVelocity=this.jumpForce,this.isAirborne=!0);const g=u-.1;this.isAirborne?(this.verticalVelocity-=this.gravity*e,this.position.y+=this.verticalVelocity*e,this.position.y<=g&&(this.position.y=g,this.verticalVelocity=0,this.isAirborne=!1)):(this.position.y+=(g-this.position.y)*Math.min(1,15*e),r?this.position.y+=Math.abs(Math.sin(t*22))*.08:this.position.y+=Math.sin(t*2)*.02),this.model.position.copy(this.position);let _=this.targetRotationY-this.model.rotation.y;for(;_>Math.PI;)_-=Math.PI*2;for(;_<-Math.PI;)_+=Math.PI*2;this.model.rotation.y+=_*Math.min(1,this.rotationSmoothing*e);const m=this.isInWater;this.isInWater=u<1.5&&l>25,this.isInWater&&!m&&this._dropletOpacity<.05&&this._generateDropletTexture();const p=this.isInWater?1:0,v=this.isInWater?.3:.5;this._dropletOpacity<p?this._dropletOpacity=Math.min(p,this._dropletOpacity+v*e):this._dropletOpacity>p&&(this._dropletOpacity=Math.max(p,this._dropletOpacity-v*e));const y=document.getElementById("water-droplets-overlay");if(y&&(y.style.opacity=this._dropletOpacity.toFixed(3)),this.isInWater&&this.currentAmmo<this.maxAmmo&&(this.currentAmmo=Math.min(this.maxAmmo,this.currentAmmo+30*e),this.audio&&this.audio.playReloadSound()),this._singleAnimMode&&this.animations.idle){const L=this.animations.idle;L.timeScale+=(this._targetTimeScale-L.timeScale)*Math.min(1,15*e)}this.sandBurstCooldown>0&&(this.sandBurstCooldown-=e,this.sandBurstCooldown<0&&(this.sandBurstCooldown=0));const x=document.getElementById("sandburst-fill");if(x)if(this.sandBurstCooldown<=0)x.style.strokeDashoffset="0",x.style.stroke="#FFD55A";else{const N=1-this.sandBurstCooldown/this.sandBurstCooldownMax;x.style.strokeDashoffset=(276.46*(1-N)).toFixed(2),x.style.stroke="#7a6a3a"}const P=document.getElementById("btn-burst");if(P)if(this.sandBurstCooldown<=0)P.style.setProperty("--cd","0"),P.classList.add("ready"),P.classList.remove("cooldown");else{const L=this.sandBurstCooldown/this.sandBurstCooldownMax;P.style.setProperty("--cd",(L*360).toFixed(1)),P.classList.add("cooldown"),P.classList.remove("ready")}if(this.sandBurstActive){this.sandBurstTimer-=e;const L=this.sandParticleSystem.geometry.attributes.position.array;for(let N=0;N<this.sandParticleCount;N++){const k=this.sandParticleVelocities[N];k.y-=45*e,k.x*=.94,k.z*=.94,L[N*3]+=k.x*e,L[N*3+1]+=k.y*e,L[N*3+2]+=k.z*e,L[N*3+1]<.1&&(L[N*3+1]=.1,k.y*=-.3,k.x*=.8,k.z*=.8)}if(this.sandParticleSystem.geometry.attributes.position.needsUpdate=!0,this.sandParticleSystem.material.opacity=Math.max(0,this.sandBurstTimer/1.5),this._sandShockwave&&this._sandShockwave.visible){const N=1.5-this.sandBurstTimer;this._sandShockwaveUniforms.uTime.value=N,this.sandBurstTimer<=0&&(this._sandShockwave.visible=!1)}if(this.sandBurstTimer<=0){this.sandBurstActive=!1;for(let N=0;N<this.sandParticleCount*3;N++)L[N]=9999;this.sandParticleSystem.geometry.attributes.position.needsUpdate=!0}}if(this.mixer&&this.mixer.update(e),this._damageFlashTimer>0){this._damageFlashTimer-=e;const L=this._damageFlashTimer/.2;this._flashMaterials||(this._flashMaterials=[],this.model.traverse(N=>{N.isMesh&&N.material&&(N.material.emissive||(N.material.emissive=new se),this._flashMaterials.push(N.material))}));for(let N=0;N<this._flashMaterials.length;N++)this._flashMaterials[N].emissive.setRGB(L*.8,0,0)}else if(this._flashMaterials&&this._flashWasNonZero){for(let L=0;L<this._flashMaterials.length;L++)this._flashMaterials[L].emissive.setRGB(0,0,0);this._flashWasNonZero=!1}this._flashWasNonZero=this._damageFlashTimer>0;const T=document.getElementById("ammo-count"),A=document.getElementById("ammo-fill");if(T&&(T.textContent=Math.round(this.currentAmmo)),A){const L=this.currentAmmo/this.maxAmmo;A.style.width=`${L*100}%`,L<.3?A.style.background="#ff4444":L<.6?A.style.background="#ffaa00":A.style.background="linear-gradient(90deg, #00BFFF, #00FF88)"}const D=document.getElementById("health-fill");D&&(D.style.width=`${this.health/this.maxHealth*100}%`);const w=document.getElementById("health-count");w&&(w.textContent=Math.round(this.health));const M=document.getElementById("low-health-overlay");if(M){const L=this.health/this.maxHealth;let N=0;L<.3&&(N=(.3-L)/.3),L<.1&&(N=Math.min(1,N+.35)),M.style.opacity=N.toFixed(3)}const I=document.getElementById("gun-tier");if(I){const L={pistol:"Pistol",shotgun:"Shotgun",charger:"Charger"},N=this.weaponLevels[this.weaponType]||1;I.textContent=`${L[this.weaponType]||"Pistol"} Lv.${N}`}this._devilSymbol&&(this._devilSymbol.rotation.z+=e*.2,this._devilSymbolScale<1&&(this._devilSymbolScale=Math.min(1,this._devilSymbolScale+e*1),this._devilSymbol.scale.setScalar(this._devilSymbolScale),this._devilSymbol.material.opacity=this._devilSymbolScale),!this.isDead&&!this.isRaging&&this._devilSymbolScale>=1&&(this._devilSymbolFadeOut=!0),this._devilSymbolFadeOut&&(this._devilSymbol.material.opacity-=e*2,this._devilSymbol.material.opacity<=0&&(this.scene.remove(this._devilSymbol),this._devilSymbol.material.map.dispose(),this._devilSymbol.material.dispose(),this._devilSymbol.geometry.dispose(),this._devilSymbol=null,this._devilSymbolFadeOut=!1))),this.cameraController.update(e,this.position)}takeDamage(e){if(this.isRaging)return;this.health=Math.max(0,this.health-e),this._damageFlashTimer=.2;const t=document.getElementById("damage-overlay");t&&(t.style.opacity="0.4",setTimeout(()=>{t.style.opacity="0"},200)),this.health<=0?this._deathTriggered||(this._deathTriggered=!0,this.hasResurrection?(this.isDead=!0,this.deathTimer=7,this._showDevilSymbol(),this._onDeath?.()):(this.isDead=!0,this.deathTimer=7,this._onDeath?.())):this.dialogue&&Math.random()<.25&&this.health<40&&(!this._lastLowHealthVoice||performance.now()-this._lastLowHealthVoice>15e3)&&(this._lastLowHealthVoice=performance.now(),this.dialogue.heroCooldown=0,this.dialogue.speak(this.model,"Need more water... hold on.","hero",3))}_showDevilSymbol(){if(this._devilSymbol)return;const e=document.createElement("canvas");e.width=512,e.height=512;const t=e.getContext("2d");t.clearRect(0,0,512,512),t.strokeStyle="#ff2222",t.lineWidth=14,t.shadowColor="#ff0000",t.shadowBlur=25;const n=256,i=256,s=210;t.beginPath(),t.arc(n,i,s,0,Math.PI*2),t.stroke(),t.beginPath();for(let u=0;u<=5;u++){const d=u*4*Math.PI/5-Math.PI/2,h=n+Math.cos(d)*s,f=i+Math.sin(d)*s;u===0?t.moveTo(h,f):t.lineTo(h,f)}t.stroke(),t.lineWidth=6;for(let u=0;u<5;u++){const d=u*2*Math.PI/5-Math.PI/2,h=n+Math.cos(d)*(s*.5),f=i+Math.sin(d)*(s*.5);t.beginPath(),t.arc(h,f,15,0,Math.PI*2),t.stroke()}const r=new Ws(e),a=new Mt({map:r,transparent:!0,blending:Ji,depthWrite:!1,color:16729156}),l=new Ht(18,18);this._devilSymbol=new Te(l,a),this._devilSymbol.rotation.x=-Math.PI/2;const c=this.world.getTerrainHeight(this.position.x,this.position.z);this._devilSymbol.position.set(this.position.x,c+.1,this.position.z),this._devilSymbol.material.opacity=0,this._devilSymbolScale=.2,this._devilSymbol.scale.setScalar(this._devilSymbolScale),this.scene.add(this._devilSymbol)}_generateDropletTexture(){const e=document.getElementById("water-droplets-overlay");if(!e)return;const t=document.createElement("canvas");t.width=1920,t.height=1080;const n=t.getContext("2d"),i=40+Math.floor(Math.random()*90);for(let s=0;s<i;s++){const r=Math.random()*t.width,a=Math.random()*t.height,l=4+Math.random()*22,c=n.createRadialGradient(r,a,0,r,a,l);c.addColorStop(0,"rgba(220, 240, 255, 0.55)"),c.addColorStop(.55,"rgba(180, 220, 255, 0.22)"),c.addColorStop(1,"rgba(100, 180, 255, 0.00)"),n.fillStyle=c,n.beginPath(),n.arc(r,a,l,0,Math.PI*2),n.fill();const u=r-l*.3,d=a-l*.3,h=n.createRadialGradient(u,d,0,u,d,l*.42);h.addColorStop(0,"rgba(255, 255, 255, 0.9)"),h.addColorStop(1,"rgba(255, 255, 255, 0)"),n.fillStyle=h,n.beginPath(),n.arc(u,d,l*.42,0,Math.PI*2),n.fill(),n.fillStyle="rgba(20, 60, 110, 0.25)",n.beginPath(),n.arc(r+l*.05,a+l*.55,l*.55,.1,Math.PI*.95),n.fill()}e.style.backgroundImage=`url(${t.toDataURL("image/png")})`}reset(){this.maxHealth=100,this.maxAmmo=100,this.health=this.maxHealth,this.currentAmmo=this.maxAmmo,this.coins=0,this.totalCoinsCollected=0,this.isDead=!1,this.deathTimer=0,this._deathTriggered=!1,this._damageFlashTimer=0,this._lastLowHealthVoice=0,this._lastLowWaterVoice=0,this.weaponType="pistol",this.weaponLevels={pistol:1,shotgun:1,charger:1},this.utilityLevels={maxHealth:1,waterCapacity:1,burrowStrength:1,minionCapacity:1,minionLevel:1,sandBurst:1,jumpPower:1},this.coinMultiplier=1,this.sandBurstCooldown=0,this.sandBurstActive=!1,this.sandBurstTimer=0,this.hasResurrection=!0,this.isRaging=!1,this.rageTimer=0,this._ragePhase=null,this._ragePhaseTimer=0,this._rageBeamLight&&(this.scene.remove(this._rageBeamLight),this._rageBeamLight=null),this.model&&this.model.scale.setScalar(this._originalScale),this._clearRageTint(),this.position.set(0,2.5,40),this.velocity.set(0,0,0),this.targetRotationY=Math.PI,this.verticalVelocity=0,this.isAirborne=!1,this.jumpForce=25,this._dropletOpacity=0;const e=document.getElementById("water-droplets-overlay");if(e&&(e.style.opacity="0"),this.model&&(this.model.position.copy(this.position),this.model.rotation.y=this.targetRotationY,this.model.traverse(u=>{u.isMesh&&u.material&&u.material.emissive&&u.material.emissive.setRGB(0,0,0)})),this._sandShockwave&&(this._sandShockwave.visible=!1),this.sandParticleSystem){const u=this.sandParticleSystem.geometry.attributes.position.array;for(let d=0;d<u.length;d++)u[d]=9999;this.sandParticleSystem.geometry.attributes.position.needsUpdate=!0}const t=document.getElementById("coin-count");t&&(t.textContent="0");const n=document.getElementById("ammo-count");n&&(n.textContent=String(Math.round(this.maxAmmo)));const i=document.getElementById("ammo-fill");i&&(i.style.width="100%");const s=document.getElementById("health-fill");s&&(s.style.width="100%");const r=document.getElementById("health-count");r&&(r.textContent=String(Math.round(this.maxHealth)));const a=document.getElementById("sandburst-fill");a&&(a.style.strokeDashoffset="0",a.style.stroke="#FFD55A");const l=document.getElementById("btn-burst");l&&(l.style.setProperty("--cd","0"),l.classList.add("ready"),l.classList.remove("cooldown"));const c=document.getElementById("gun-tier");c&&(c.textContent="Pistol Lv.1")}addCoins(e){const t=Math.round(e*this.coinMultiplier);this.coins+=t,this.totalCoinsCollected+=t;const n=document.getElementById("coin-count");n&&(n.textContent=this.coins)}activateRage(){this.hasResurrection=!1,this.isRaging=!0,this.isDead=!1,this._deathTriggered=!1,this.health=this.maxHealth,this._originalMaterials=[],this.model&&this.model.traverse(i=>{i.isMesh&&i.material&&i.material.color&&this._originalMaterials.push({mesh:i,color:i.material.color.clone(),emissive:i.material.emissive?i.material.emissive.clone():null})}),this._ragePhase="ascend",this._ragePhaseTimer=2,this.audio&&this.audio.playRageMusic&&this.audio.playRageMusic();const e=new fn(1.5,4,40,8,1,!0),t=new Mt({color:16777164,transparent:!0,opacity:.15,blending:Ji,side:vt,depthWrite:!1});this._rageBeamLight=new Te(e,t),this._rageBeamLight.position.copy(this.position),this._rageBeamLight.position.y+=20,this.scene.add(this._rageBeamLight);const n=new Vr(16777164,4,30);n.position.set(0,10,0),this._rageBeamLight.add(n)}deactivateRage(){this.isRaging=!1,this._ragePhase=null,this.rageTimer=0,this.audio&&this.audio.playRageEndSound&&this.audio.playRageEndSound(),this.audio&&this.audio.stopRageMusic&&this.audio.stopRageMusic(),this.model&&this.model.scale.setScalar(this._originalScale),this._clearRageTint(),this.health=Math.round(this.maxHealth*.5),this._rageBeamLight&&(this.scene.remove(this._rageBeamLight),this._rageBeamLight=null);const e=document.getElementById("health-fill");e&&(e.style.width=`${this.health/this.maxHealth*100}%`);const t=document.getElementById("health-count");t&&(t.textContent=String(Math.round(this.health)))}_applyRageTint(){this.model&&this.model.traverse(e=>{e.isMesh&&e.material&&(e.material.color.setHex(13378048),e.material.emissive&&(e.material.emissive.setHex(16724736),e.material.emissiveIntensity=.6))})}_clearRageTint(){for(const e of this._originalMaterials)e.mesh&&e.mesh.material&&(e.mesh.material.color.copy(e.color),e.emissive&&e.mesh.material.emissive&&(e.mesh.material.emissive.copy(e.emissive),e.mesh.material.emissiveIntensity=0));this._originalMaterials=[]}triggerSandBurst(e,t){if(this.sandBurstCooldown>0||!this.loaded||this.isDead)return!1;const n=this.utilityLevels.sandBurst||1;let i=30,s=25,r=15;n>=2&&(i=40),n>=3&&(r=12),n>=4&&(s=50),n>=5&&(i=50,s=75,r=10),this.sandBurstCooldownMax=r,this.sandBurstCooldown=this.sandBurstCooldownMax,t&&t.initialized&&t.playSandBurstSound&&t.playSandBurstSound();const a=this.sandParticleSystem.geometry.attributes.position.array;for(let c=0;c<this.sandParticleCount;c++){a[c*3]=this.position.x+(Math.random()-.5)*1.5,a[c*3+1]=this.position.y+.2+Math.random()*.8,a[c*3+2]=this.position.z+(Math.random()-.5)*1.5;const u=Math.random()*Math.PI*2,d=(Math.random()-.2)*.5,h=25+Math.random()*25;this.sandParticleVelocities[c].set(Math.cos(u)*h,Math.sin(d)*h,Math.sin(u)*h)}this.sandParticleSystem.geometry.attributes.position.needsUpdate=!0,this._sandShockwave&&(this._sandShockwave.position.copy(this.position),this._sandShockwave.position.y+=.05,this._sandShockwaveUniforms.uTime.value=0,this._sandShockwave.visible=!0),this.sandBurstActive=!0,this.sandBurstTimer=1.5;const l=25+n*2;if(e)for(const c of e.enemies){if(c.state==="dead"||c.state==="dying")continue;if(c.position.distanceTo(this.position)<=i){e.damageEnemy(c,s);const d=c.position.clone().sub(this.position).normalize();d.y=0,c._knockbackVelocity=d.multiplyScalar(l),c._staggerTimer=1.5}}return!0}triggerRageBurst(e,t){t&&t.initialized&&t.playSandBurstSound&&t.playSandBurstSound();const n=this.sandParticleSystem.geometry.attributes.position.array;for(let i=0;i<this.sandParticleCount;i++){n[i*3]=this.position.x+(Math.random()-.5)*1.5,n[i*3+1]=this.position.y+.2+Math.random()*.8,n[i*3+2]=this.position.z+(Math.random()-.5)*1.5;const s=Math.random()*Math.PI*2,r=(Math.random()-.2)*.5,a=(25+Math.random()*25)*1.5;this.sandParticleVelocities[i].set(Math.cos(s)*a,Math.sin(r)*a,Math.sin(s)*a)}if(this.sandParticleSystem.geometry.attributes.position.needsUpdate=!0,this._sandShockwave&&(this._sandShockwave.position.copy(this.position),this._sandShockwave.position.y+=.05,this._sandShockwaveUniforms.uTime.value=0,this._sandShockwave.scale.setScalar(2),this._sandShockwave.visible=!0),this.sandBurstActive=!0,this.sandBurstTimer=1.5,e)for(const i of e.enemies){if(i.state==="dead"||i.state==="dying")continue;const s=i.position.clone().sub(this.position).normalize();s.y=0,i._knockbackVelocity=s.multiplyScalar(40),i._staggerTimer=3}}}class bv{constructor(){this.ctx=null;try{this.ctx=new(window.AudioContext||window.webkitAudioContext)}catch(e){console.warn("Web Audio not supported:",e)}this.masterGain=null,this.initialized=!1,this.oceanGain=null,this.windGain=null,this.scuttleGain=null,this.gunBuffers=[null,null,null,null],this.hitBuffer=null,this.reloadBuffer=null,this.turtleHitBuffer=null,this.turtleAttackBuffer=null,this.turtleDieBuffer=null,this.bossHitBuffer=null,this.bossAttackBuffer=null,this.bossDieBuffer=null,this.isMoving=!1,this._scuttleTimer=0,this._wavePhase=0,this.ctx&&this._loadSounds()}init(){if(!(this.initialized||!this.ctx)){this.masterGain=this.ctx.createGain(),this.masterGain.gain.value=.7,this.compressor=this.ctx.createDynamicsCompressor(),this.compressor.threshold.value=-12,this.compressor.knee.value=10,this.compressor.ratio.value=12,this.compressor.attack.value=.003,this.compressor.release.value=.25,this.softClip=this.ctx.createWaveShaper();{const t=new Float32Array(4096),n=.95;for(let i=0;i<4096;i++){const s=i*2/4095-1;t[i]=Math.tanh(s*n)}this.softClip.curve=t,this.softClip.oversample="4x"}this.masterGain.connect(this.compressor),this.compressor.connect(this.softClip),this.softClip.connect(this.ctx.destination),this._createOceanSound(),this._createWindSound(),this._createScuttleSystem(),this.initialized=!0,console.log("✓ Audio initialized")}}_createOceanSound(){const e=this.ctx.sampleRate*4,t=this.ctx.createBuffer(1,e,this.ctx.sampleRate),n=t.getChannelData(0);let i=0,s=0,r=0,a=0,l=0,c=0,u=0;for(let x=0;x<e;x++){const P=Math.random()*2-1;i=.99886*i+P*.0555179,s=.99332*s+P*.0750759,r=.969*r+P*.153852,a=.8665*a+P*.3104856,l=.55*l+P*.5329522,c=-.7616*c-P*.016898,n[x]=(i+s+r+a+l+c+u+P*.5362)*.05,u=P*.115926}const d=this.ctx.createBufferSource();d.buffer=t,d.loop=!0;const h=this.ctx.createBiquadFilter();h.type="lowpass",h.frequency.value=400,h.Q.value=.7;const f=this.ctx.createBiquadFilter();f.type="bandpass",f.frequency.value=200,f.Q.value=.5,this.oceanGain=this.ctx.createGain(),this.oceanGain.gain.value=.35,d.connect(h),h.connect(f),f.connect(this.oceanGain),this.oceanGain.connect(this.masterGain),d.start(),this._oceanLFO=this.ctx.createOscillator(),this._oceanLFO.type="sine",this._oceanLFO.frequency.value=.15;const g=this.ctx.createGain();g.gain.value=.12,this._oceanLFO.connect(g),g.connect(this.oceanGain.gain),this._oceanLFO.start();const _=this.ctx.createBufferSource();_.buffer=t,_.loop=!0;const m=this.ctx.createBiquadFilter();m.type="highpass",m.frequency.value=2e3;const p=this.ctx.createGain();p.gain.value=.06,_.connect(m),m.connect(p),p.connect(this.masterGain),_.start();const v=this.ctx.createOscillator();v.type="sine",v.frequency.value=.12;const y=this.ctx.createGain();y.gain.value=.04,v.connect(y),y.connect(p.gain),v.start()}_createWindSound(){const e=this.ctx.sampleRate*3,t=this.ctx.createBuffer(1,e,this.ctx.sampleRate),n=t.getChannelData(0);for(let u=0;u<e;u++)n[u]=(Math.random()*2-1)*.5;const i=this.ctx.createBufferSource();i.buffer=t,i.loop=!0;const s=this.ctx.createBiquadFilter();s.type="bandpass",s.frequency.value=600,s.Q.value=.3,this.windGain=this.ctx.createGain(),this.windGain.gain.value=.08,i.connect(s),s.connect(this.windGain),this.windGain.connect(this.masterGain),i.start();const r=this.ctx.createOscillator();r.type="sine",r.frequency.value=.08;const a=this.ctx.createGain();a.gain.value=.05,r.connect(a),a.connect(this.windGain.gain),r.start();const l=this.ctx.createOscillator();l.type="triangle",l.frequency.value=.03;const c=this.ctx.createGain();c.gain.value=.03,l.connect(c),c.connect(s.frequency),l.start()}_createScuttleSystem(){const e=Math.floor(this.ctx.sampleRate*.08);this._shuffleBuffer=this.ctx.createBuffer(1,e,this.ctx.sampleRate);const t=this._shuffleBuffer.getChannelData(0);for(let n=0;n<e;n++){const i=Math.sin(n/e*Math.PI);t[n]=(Math.random()*2-1)*i*.3}}_playScuttleTap(){if(!this.ctx)return;const e=this.ctx.currentTime,t=this.ctx.createBufferSource();t.buffer=this._shuffleBuffer;const n=this.ctx.createBiquadFilter();n.type="lowpass",n.frequency.value=300+Math.random()*200,n.Q.value=.5;const i=this.ctx.createGain();i.gain.setValueAtTime(.06+Math.random()*.03,e),i.gain.linearRampToValueAtTime(0,e+.08),t.connect(n),n.connect(i),i.connect(this.masterGain),t.start(e),t.stop(e+.08)}update(e,t,n){if(this.initialized)if(this.isMoving=t,t){const i=n?.09:.14;this._scuttleTimer+=e,this._scuttleTimer>i&&(this._scuttleTimer=0,this._playScuttleTap())}else this._scuttleTimer=0}updateListener(e){if(!this.ctx||!this.ctx.listener||!e)return;const t=this.ctx.listener,n=e.position,i=this._listenerFwd||(this._listenerFwd={x:0,y:0,z:-1}),s=e.matrixWorld.elements;if(i.x=-s[8],i.y=-s[9],i.z=-s[10],t.positionX){const r=this.ctx.currentTime;t.positionX.setValueAtTime(n.x,r),t.positionY.setValueAtTime(n.y,r),t.positionZ.setValueAtTime(n.z,r),t.forwardX.setValueAtTime(i.x,r),t.forwardY.setValueAtTime(i.y,r),t.forwardZ.setValueAtTime(i.z,r),t.upX.setValueAtTime(0,r),t.upY.setValueAtTime(1,r),t.upZ.setValueAtTime(0,r)}else t.setPosition&&(t.setPosition(n.x,n.y,n.z),t.setOrientation(i.x,i.y,i.z,0,1,0))}createPositionalPanner(e,t,n){if(!this.ctx)return null;const i=this.ctx.createPanner();if(i.panningModel="HRTF",i.distanceModel="inverse",i.refDistance=50,i.maxDistance=250,i.rolloffFactor=.35,i.coneInnerAngle=360,i.coneOuterAngle=0,i.coneOuterGain=0,i.positionX){const s=this.ctx.currentTime;i.positionX.setValueAtTime(e,s),i.positionY.setValueAtTime(t,s),i.positionZ.setValueAtTime(n,s)}else i.setPosition&&i.setPosition(e,t,n);return i}setVolume(e){this.masterGain&&(this.masterGain.gain.value=Math.max(0,Math.min(1,e)))}resume(){this.ctx&&this.ctx.state==="suspended"&&this.ctx.resume()}async _loadSounds(){const e=["./sounds/pistol.mp3","./sounds/shotgun.mp3","./sounds/smg.mp3","./sounds/heavy.mp3"];for(let n=0;n<e.length;n++)try{const s=await(await fetch(e[n])).arrayBuffer();this.gunBuffers[n]=await this.ctx.decodeAudioData(s),console.log(`✓ Loaded gun sound: ${e[n]}`)}catch(i){console.warn(`Failed to load ${e[n]}:`,i)}try{const n=await fetch("./sounds/hit.mp3");if(n.ok){const i=await n.arrayBuffer();this.hitBuffer=await this.ctx.decodeAudioData(i),console.log("✓ Loaded hit sound")}}catch(n){console.warn("Failed to load hit sound:",n)}try{const n=await fetch("./sounds/reload.wav");if(n.ok){const i=await n.arrayBuffer();this.reloadBuffer=await this.ctx.decodeAudioData(i),console.log("✓ Loaded reload sound")}}catch(n){console.warn("Failed to load reload sound:",n)}const t={turtleHitBuffer:"./sounds/turtle_hit.mp3",turtleAttackBuffer:"./sounds/turtle_attack.mp3",turtleDieBuffer:"./sounds/turtle_die.mp3",bossHitBuffer:"./sounds/boss_hit.mp3",bossAttackBuffer:"./sounds/boss_attack.mp3",bossDieBuffer:"./sounds/boss_die.mp3"};for(const[n,i]of Object.entries(t))try{const s=await fetch(i);if(s.ok){const r=await s.arrayBuffer();this[n]=await this.ctx.decodeAudioData(r),console.log(`✓ Loaded enemy sound: ${i}`)}else console.warn(`Missing audio file: ${i}`)}catch(s){console.warn(`Failed to load ${i}:`,s)}}playShootSound(e){if(!this.ctx)return;const t=this.gunBuffers[e];if(!t&&e===1){this._playProceduralShotgun();return}if(!t)return;const n=this.ctx.createBufferSource();n.buffer=t;const s=[.35,.42,.245,.49][e]||.35,r=this.ctx.createGain();e===2&&(n.playbackRate.value=1.5);const a=this.ctx.currentTime,l=.18,c=.1;r.gain.setValueAtTime(s,a),r.gain.setValueAtTime(s,a+l),r.gain.linearRampToValueAtTime(1e-4,a+l+c),n.connect(r),r.connect(this.masterGain),n.start(a),n.stop(a+l+c+.02)}playEnemyHitSound(e){if(!this.ctx)return;const t=this.ctx.currentTime,n=e?.05:.07;if(this._lastHitTime&&t-this._lastHitTime<n)return;this._lastHitTime=t;const i=e?this.bossHitBuffer:this.turtleHitBuffer;if(!i){if(this.hitBuffer){const c=this.ctx.createBufferSource();c.buffer=this.hitBuffer,c.playbackRate.value=e?.6:.8+Math.random()*.6;const u=this.ctx.createGain();u.gain.value=.4,c.connect(u),u.connect(this.masterGain),c.start()}return}const s=this.ctx.createBufferSource();s.buffer=i,s.playbackRate.value=.9+Math.random()*.2;const r=this.ctx.createGain();r.gain.value=e?.8:.5;const a=.18,l=.08;r.gain.setValueAtTime(r.gain.value,t),r.gain.setValueAtTime(r.gain.value,t+a),r.gain.linearRampToValueAtTime(1e-4,t+a+l),s.connect(r),r.connect(this.masterGain),s.start(t),s.stop(t+a+l+.02)}playShellDropSound(){if(!this.ctx||!this.hitBuffer)return;if(this._shellSource){try{this._shellSource.stop()}catch{}this._shellSource=null}const e=this.ctx.createBufferSource();e.buffer=this.hitBuffer,e.playbackRate.value=.8+Math.random()*.4;const t=this.ctx.createGain();t.gain.value=.3,e.connect(t),t.connect(this.masterGain),e.start(this.ctx.currentTime+.4),this._shellSource=e,e.onended=()=>{this._shellSource===e&&(this._shellSource=null)}}playSplashSound(){if(!this.ctx||!this.masterGain)return;const e=this.ctx.currentTime,t=Math.floor(this.ctx.sampleRate*.5),n=this.ctx.createBuffer(1,t,this.ctx.sampleRate),i=n.getChannelData(0);for(let u=0;u<t;u++)i[u]=(Math.random()*2-1)*Math.exp(-u/(t*.35));const s=this.ctx.createBufferSource();s.buffer=n;const r=this.ctx.createBiquadFilter();r.type="lowpass",r.frequency.setValueAtTime(5e3,e),r.frequency.exponentialRampToValueAtTime(700,e+.28);const a=this.ctx.createGain();a.gain.setValueAtTime(.55,e),a.gain.exponentialRampToValueAtTime(.01,e+.4),s.connect(r),r.connect(a),a.connect(this.masterGain),s.start(e),s.stop(e+.5);const l=this.ctx.createOscillator();l.type="sine",l.frequency.setValueAtTime(280,e),l.frequency.exponentialRampToValueAtTime(55,e+.18);const c=this.ctx.createGain();c.gain.setValueAtTime(.45,e),c.gain.exponentialRampToValueAtTime(.01,e+.28),l.connect(c),c.connect(this.masterGain),l.start(e),l.stop(e+.32)}playReloadSound(){if(!this.ctx||!this.reloadBuffer)return;const e=this.ctx.currentTime;if(this._lastReloadTime&&e-this._lastReloadTime<.9)return;this._lastReloadTime=e;const t=this.ctx.createBufferSource();t.buffer=this.reloadBuffer,t.playbackRate.value=.8+Math.random()*.4;const n=this.ctx.createGain();n.gain.value=.1,t.connect(n),n.connect(this.masterGain),t.start()}_preloadCthuluCinematic(e,t){if(!this.ctx)return;const n=`_${e}Buffer`,i=`_${e}Loading`,s=`_${e}PlayPending`;this[n]||this[i]||(this[i]=!0,fetch(`./models/dialogues/${t}`).then(r=>r.arrayBuffer()).then(r=>this.ctx.decodeAudioData(r)).then(r=>{this[n]=r,this[i]=!1,this[s]&&(this[s]=!1,this._fireCthuluCinematic(e))}).catch(r=>{this[i]=!1,console.warn(`Failed to load ${t}:`,r)}))}_fireCthuluCinematic(e){const t=`_${e}Buffer`,n=`_${e}Active`,i=`_${e}EndTimer`,s=this[t];if(!this.ctx||!s||!this.masterGain)return;const r=this.ctx.currentTime,a=this.ctx.createBufferSource();a.buffer=s;const l=this.ctx.createGain();l.gain.value=1.6;const c=this.ctx.createDelay(2);c.delayTime.value=.38;const u=this.ctx.createGain();u.gain.value=.55;const d=this.ctx.createBiquadFilter();d.type="lowpass",d.frequency.value=1200;const h=this.ctx.createGain();h.gain.value=.9,a.connect(l),l.connect(this.masterGain),a.connect(c),c.connect(d),d.connect(h),h.connect(this.masterGain),c.connect(u),u.connect(c),a.start(r);const f=s.duration,g=3;h.gain.setValueAtTime(.9,r+f),h.gain.linearRampToValueAtTime(0,r+f+g),this[n]=!0,this[i]&&clearTimeout(this[i]),this[i]=setTimeout(()=>{this[n]=!1},(f+g)*1e3)}preloadCthuluRises(){this._preloadCthuluCinematic("cthuluRises","cthulu-rises.mp3")}playCthuluRises(){if(this.ctx){if(this._cthuluRisesBuffer){this._fireCthuluCinematic("cthuluRises");return}this._cthuluRisesPlayPending=!0,this._cthuluRisesLoading||this.preloadCthuluRises()}}preloadCthuluDies(){this._preloadCthuluCinematic("cthuluDies","cthulu-dies.mp3")}playCthuluDies(){if(this.ctx){if(this._cthuluDiesBuffer){this._fireCthuluCinematic("cthuluDies");return}this._cthuluDiesPlayPending=!0,this._cthuluDiesLoading||this.preloadCthuluDies()}}playEnemyAttackSound(e){if(!this.ctx)return;const t=e?this.bossAttackBuffer:this.turtleAttackBuffer;if(!t)return;const n=this.ctx.createBufferSource();n.buffer=t,n.playbackRate.value=.9+Math.random()*.2;const i=this.ctx.createGain();i.gain.value=e?.9:.6,n.connect(i),i.connect(this.masterGain),n.start()}playRageResurrectSound(){if(this.ctx){if(this._rageResurrectBuffer){const e=this.ctx.createBufferSource();e.buffer=this._rageResurrectBuffer;const t=this.ctx.createGain();t.gain.value=1,e.connect(t),t.connect(this.masterGain),e.start();return}this._rageResurrectLoading||(this._rageResurrectLoading=!0,fetch("./sounds/Back from the deep. now it's YOUR turn.mp3").then(e=>e.arrayBuffer()).then(e=>this.ctx.decodeAudioData(e)).then(e=>{this._rageResurrectBuffer=e,this._rageResurrectLoading=!1,this.playRageResurrectSound()}).catch(e=>{this._rageResurrectLoading=!1,console.warn("Failed to load rage resurrect sound",e)}))}}playRageEndSound(){if(this.ctx){if(this._rageEndBuffer){const e=this.ctx.createBufferSource();e.buffer=this._rageEndBuffer;const t=this.ctx.createGain();t.gain.value=1,e.connect(t),t.connect(this.masterGain),e.start();return}this._rageEndLoading||(this._rageEndLoading=!0,fetch("./sounds/Alright Alright … maybe I overdid that.mp3").then(e=>e.arrayBuffer()).then(e=>this.ctx.decodeAudioData(e)).then(e=>{this._rageEndBuffer=e,this._rageEndLoading=!1,this.playRageEndSound()}).catch(e=>{this._rageEndLoading=!1,console.warn("Failed to load rage end sound",e)}))}}playRageMusic(){if(this.ctx&&!this._rageMusicSource){if(this._rageMusicBuffer){const e=this.ctx.createBufferSource();e.buffer=this._rageMusicBuffer;const t=this.ctx.createGain();t.gain.value=1,e.connect(t),t.connect(this.masterGain);const n=this.ctx.currentTime;e.start(n,30),this._rageMusicSource=e,this._rageMusicGain=t;return}this._rageMusicLoading||(this._rageMusicLoading=!0,fetch("./sounds/alec_koff-epic-drums-tribal.ogg").then(e=>e.arrayBuffer()).then(e=>this.ctx.decodeAudioData(e)).then(e=>{this._rageMusicBuffer=e,this._rageMusicLoading=!1,this.playRageMusic()}).catch(e=>{this._rageMusicLoading=!1,console.warn("Failed to load rage music",e)}))}}stopRageMusic(){if(this._rageMusicSource&&this._rageMusicGain){const e=this.ctx.currentTime;this._rageMusicGain.gain.linearRampToValueAtTime(0,e+1);try{this._rageMusicSource.stop(e+1)}catch{}this._rageMusicSource=null}}playRageResurrectSound(){if(this.ctx){if(this._rageResurrectBuffer){const e=this.ctx.createBufferSource();e.buffer=this._rageResurrectBuffer;const t=this.ctx.createGain();t.gain.value=1.4,e.connect(t),t.connect(this.masterGain),e.start();return}this._rageResurrectLoading||(this._rageResurrectLoading=!0,fetch("./sounds/Back from the deep… now it’s YOUR turn.mp3").then(e=>e.arrayBuffer()).then(e=>this.ctx.decodeAudioData(e)).then(e=>{this._rageResurrectBuffer=e,this._rageResurrectLoading=!1,this.playRageResurrectSound()}).catch(e=>{this._rageResurrectLoading=!1,console.warn("Failed to load rage resurrect sound",e)}))}}playEnemyDeathSound(e){if(!this.ctx)return;const t=e?this.bossDieBuffer:this.turtleDieBuffer;if(!t){const s=this.ctx.currentTime,r=this.ctx.createOscillator();r.type="sine",r.frequency.setValueAtTime(e?300:600,s),r.frequency.exponentialRampToValueAtTime(e?50:100,s+.2);const a=this.ctx.createGain();a.gain.setValueAtTime(e?.4:.2,s),a.gain.linearRampToValueAtTime(0,s+.25),r.connect(a),a.connect(this.masterGain),r.start(s),r.stop(s+.25);return}const n=this.ctx.createBufferSource();n.buffer=t,n.playbackRate.value=.9+Math.random()*.2;const i=this.ctx.createGain();i.gain.value=e?1:.35,n.connect(i),i.connect(this.masterGain),n.start()}playUpgradeSound(){if(!this.ctx)return;const e=this.ctx.currentTime;[523,659,784].forEach((n,i)=>{const s=this.ctx.createOscillator();s.type="sine",s.frequency.value=n;const r=this.ctx.createGain();r.gain.setValueAtTime(0,e+i*.1),r.gain.linearRampToValueAtTime(.12,e+i*.1+.05),r.gain.linearRampToValueAtTime(0,e+i*.1+.2),s.connect(r),r.connect(this.masterGain),s.start(e+i*.1),s.stop(e+i*.1+.25)})}_playProceduralShotgun(){if(!this.ctx)return;const e=this.ctx.currentTime,t=this.ctx.sampleRate*.5,n=this.ctx.createBuffer(1,t,this.ctx.sampleRate),i=n.getChannelData(0);for(let u=0;u<t;u++)i[u]=Math.random()*2-1;const s=this.ctx.createBufferSource();s.buffer=n;const r=this.ctx.createBiquadFilter();r.type="lowpass",r.frequency.setValueAtTime(2e3,e),r.frequency.exponentialRampToValueAtTime(100,e+.25);const a=this.ctx.createGain();a.gain.setValueAtTime(1,e),a.gain.exponentialRampToValueAtTime(.01,e+.3),s.connect(r),r.connect(a),a.connect(this.masterGain);const l=this.ctx.createOscillator();l.type="sine",l.frequency.setValueAtTime(150,e),l.frequency.exponentialRampToValueAtTime(40,e+.1);const c=this.ctx.createGain();c.gain.setValueAtTime(.8,e),c.gain.exponentialRampToValueAtTime(.01,e+.2),l.connect(c),c.connect(this.masterGain),s.start(e),l.start(e),s.stop(e+.4),l.stop(e+.3)}playChargeSound(e=3){if(!this.ctx)return;const t=this.ctx.currentTime,n=this.ctx.createOscillator();n.type="sawtooth",n.frequency.setValueAtTime(100,t),n.frequency.exponentialRampToValueAtTime(800,t+e);const i=this.ctx.createOscillator();i.type="sine",i.frequency.setValueAtTime(5,t),i.frequency.linearRampToValueAtTime(25,t+e);const s=this.ctx.createGain();s.gain.value=200,i.connect(s),s.connect(n.frequency);const r=this.ctx.createGain();r.gain.setValueAtTime(.01,t),r.gain.linearRampToValueAtTime(.5,t+Math.max(.05,e-.05)),r.gain.linearRampToValueAtTime(.001,t+e),n.connect(r),r.connect(this.masterGain),n.start(t),i.start(t),n.stop(t+e+.02),i.stop(t+e+.02),this._currentChargeOsc=n,this._currentChargeLfo=i,this._currentChargeGain=r}playDischargeSound(e=5){if(!this.ctx)return;const t=this.ctx.currentTime;if(this._currentChargeOsc){try{this._currentChargeGain&&(this._currentChargeGain.gain.cancelScheduledValues(t),this._currentChargeGain.gain.setValueAtTime(this._currentChargeGain.gain.value,t),this._currentChargeGain.gain.linearRampToValueAtTime(1e-4,t+.03)),this._currentChargeOsc.stop(t+.04),this._currentChargeLfo.stop(t+.04)}catch{}this._currentChargeOsc=null,this._currentChargeLfo=null,this._currentChargeGain=null}const n=this.ctx.sampleRate*e,i=this.ctx.createBuffer(1,n,this.ctx.sampleRate),s=i.getChannelData(0);for(let c=0;c<n;c++)s[c]=Math.random()*2-1;const r=this.ctx.createBufferSource();r.buffer=i;const a=this.ctx.createBiquadFilter();a.type="lowpass",a.frequency.setValueAtTime(3e3,t),a.frequency.exponentialRampToValueAtTime(500,t+.5);const l=this.ctx.createGain();l.gain.setValueAtTime(.8,t),l.gain.setValueAtTime(.8,t+e-1),l.gain.linearRampToValueAtTime(.01,t+e),r.connect(a),a.connect(l),l.connect(this.masterGain),r.start(t),r.stop(t+e)}loadWaveDrums(){this.ctx&&(this.waveDrumsBuffer||this._waveDrumsLoading||(this._waveDrumsLoading=!0,fetch("./sounds/alec_koff-epic-drums-tribal.ogg").then(e=>e.ok?e.arrayBuffer():Promise.reject(new Error("HTTP "+e.status))).then(e=>this.ctx.decodeAudioData(e)).then(e=>{this.waveDrumsBuffer=e,this._waveDrumsLoading=!1,console.log("✓ Loaded wave drums")}).catch(e=>{this._waveDrumsLoading=!1,console.warn("Failed to load wave drums:",e)})))}playWaveDrums(){if(!this.ctx||!this.masterGain||!this.waveDrumsBuffer||this._waveDrumsSrc)return;const e=this.ctx.currentTime,t=this.ctx.createBufferSource();t.buffer=this.waveDrumsBuffer,t.loop=!0;const n=this.ctx.createGain();n.gain.setValueAtTime(0,e),n.gain.linearRampToValueAtTime(.85,e+.4),n.gain.setValueAtTime(.85,e+10),n.gain.linearRampToValueAtTime(.3,e+25),n.gain.linearRampToValueAtTime(.2,e+55),t.connect(n),n.connect(this.masterGain),t.start(e),this._waveDrumsSrc=t,this._waveDrumsGain=n,t.onended=()=>{this._waveDrumsSrc===t&&(this._waveDrumsSrc=null,this._waveDrumsGain=null)}}stopWaveDrums(){if(!this._waveDrumsSrc||!this.ctx)return;const e=this._waveDrumsSrc,t=this._waveDrumsGain,n=this.ctx.currentTime;try{t.gain.cancelScheduledValues(n),t.gain.setValueAtTime(t.gain.value,n),t.gain.linearRampToValueAtTime(0,n+.6),e.stop(n+.65)}catch{}this._waveDrumsSrc=null,this._waveDrumsGain=null}playDeathDialogueWithEcho(e){if(!this.ctx||!this.masterGain||!e)return 0;const t=this.ctx.currentTime,n=d=>{if(d)try{const h=d.gain.value;d.gain.cancelScheduledValues(t),d.gain.setValueAtTime(h,t),d.gain.linearRampToValueAtTime(0,t+.4)}catch{}};n(this.oceanGain),n(this.windGain),n(this.scuttleGain),n(this._waveDrumsGain);const i=this.ctx.createBufferSource();i.buffer=e;const s=this.ctx.createGain();s.gain.value=1.4;const r=this.ctx.createDelay(2);r.delayTime.value=.38;const a=this.ctx.createGain();a.gain.value=.55;const l=this.ctx.createBiquadFilter();l.type="lowpass",l.frequency.value=1200;const c=this.ctx.createGain();c.gain.value=.9,i.connect(s),s.connect(this.masterGain),i.connect(r),r.connect(l),l.connect(c),c.connect(this.masterGain),r.connect(a),a.connect(r),i.start(t),this._deathEchoNodes={src:i,dryGain:s,wetGain:c,delay:r,feedback:a};const u=e.duration;return c.gain.setValueAtTime(.9,t+u),c.gain.linearRampToValueAtTime(0,t+u+3),this._deathAudioActive=!0,u}stopDeathDialogueWithEcho(){if(this._deathEchoNodes){const{src:e,dryGain:t,wetGain:n,delay:i,feedback:s}=this._deathEchoNodes;try{e.stop()}catch{}try{t.disconnect()}catch{}try{n.disconnect()}catch{}try{i.disconnect()}catch{}try{s.disconnect()}catch{}this._deathEchoNodes=null}this._deathAudioActive=!1}playThunderSound(){if(!this.ctx||!this.masterGain)return;const e=this.ctx.currentTime,t=1.6+Math.random()*.8,n=Math.floor(this.ctx.sampleRate*t),i=this.ctx.createBuffer(1,n,this.ctx.sampleRate),s=i.getChannelData(0);let r=0;for(let u=0;u<n;u++){const d=Math.random()*2-1;r=r*.92+d*.08;const h=Math.exp(-u/(n*.45));s[u]=r*h*1.4}const a=this.ctx.createBufferSource();a.buffer=i;const l=this.ctx.createBiquadFilter();l.type="lowpass",l.frequency.setValueAtTime(450,e),l.frequency.exponentialRampToValueAtTime(120,e+t*.8),l.Q.value=.6;const c=this.ctx.createGain();c.gain.setValueAtTime(0,e),c.gain.linearRampToValueAtTime(1.05,e+.04),c.gain.exponentialRampToValueAtTime(.001,e+t),a.connect(l),l.connect(c),c.connect(this.masterGain),a.start(e),a.stop(e+t+.05)}playSandBurstSound(){if(!this.ctx)return;const e=this.ctx.currentTime,t=this.ctx.createOscillator();t.type="sine",t.frequency.setValueAtTime(150,e),t.frequency.exponentialRampToValueAtTime(20,e+.3);const n=this.ctx.createGain();n.gain.setValueAtTime(1.8,e),n.gain.exponentialRampToValueAtTime(.01,e+.5),t.connect(n),n.connect(this.masterGain),t.start(e),t.stop(e+.5);const i=this.ctx.createOscillator();i.type="sine",i.frequency.setValueAtTime(70,e),i.frequency.exponentialRampToValueAtTime(28,e+.55);const s=this.ctx.createGain();s.gain.setValueAtTime(0,e),s.gain.linearRampToValueAtTime(2.5,e+.02),s.gain.exponentialRampToValueAtTime(.01,e+.9);const r=this.ctx.createBiquadFilter();r.type="lowpass",r.frequency.value=220,r.Q.value=.8,i.connect(r),r.connect(s),s.connect(this.masterGain),i.start(e),i.stop(e+.95);const a=Math.floor(this.ctx.sampleRate*.04),l=this.ctx.createBuffer(1,a,this.ctx.sampleRate),c=l.getChannelData(0);for(let A=0;A<a;A++){const D=Math.exp(-A/(a*.25));c[A]=(Math.random()*2-1)*D}const u=this.ctx.createBufferSource();u.buffer=l;const d=this.ctx.createBiquadFilter();d.type="lowpass",d.frequency.value=1500;const h=this.ctx.createGain();h.gain.value=.6,u.connect(d),d.connect(h),h.connect(this.masterGain),u.start(e);const f=this.ctx.sampleRate*2,g=this.ctx.createBuffer(1,f,this.ctx.sampleRate),_=g.getChannelData(0);let m=0;for(let A=0;A<f;A++){const D=Math.random()*2-1;_[A]=(m+.02*D)/1.02,m=_[A],_[A]*=4}const p=this.ctx.createBufferSource();p.buffer=g;const v=this.ctx.createBiquadFilter();v.type="lowpass",v.frequency.setValueAtTime(5e3,e),v.frequency.exponentialRampToValueAtTime(200,e+1.5);const y=this.ctx.createGain();y.gain.setValueAtTime(0,e),y.gain.linearRampToValueAtTime(1.5,e+.05),y.gain.linearRampToValueAtTime(.3,e+.5),y.gain.linearRampToValueAtTime(.01,e+2),p.connect(v),v.connect(y),y.connect(this.masterGain),p.start(e),p.stop(e+2);const x=this.ctx.createBufferSource();x.buffer=g;const P=this.ctx.createBiquadFilter();P.type="bandpass",P.Q.value=4,P.frequency.setValueAtTime(800,e),P.frequency.linearRampToValueAtTime(300,e+1.5);const T=this.ctx.createGain();T.gain.setValueAtTime(0,e),T.gain.linearRampToValueAtTime(.8,e+.2),T.gain.linearRampToValueAtTime(.01,e+1.5),x.connect(P),P.connect(T),T.connect(this.masterGain),x.start(e),x.stop(e+1.5)}}const nh={pistol:{name:"Pistol",baseFireRate:3,baseDamage:10,baseAmmoPerShot:2,projectileSpeed:120,spread:0,baseProjectilesPerShot:1,color:52479,barrelLength:1.2,barrelRadius:.12,tankSize:.3,isDual:!1,isCharge:!1,maxLevel:10,baseCritChance:.1,baseCritDamage:2,levelUpDamage:5,levelUpFireRate:2,levelUpProjectiles:0,levelUpCritChance:.02},shotgun:{name:"Shotgun",baseFireRate:1.8,baseDamage:8,baseAmmoPerShot:6,projectileSpeed:100,spread:.15,baseProjectilesPerShot:3,color:35071,barrelLength:1.5,barrelRadius:.18,tankSize:.45,isDual:!1,isCharge:!1,maxLevel:10,baseCritChance:.05,baseCritDamage:1.5,levelUpDamage:2,levelUpFireRate:0,levelUpProjectiles:3,levelUpCritChance:.01},charger:{name:"Charger",baseFireRate:.33,baseDamage:80,baseAmmoPerShot:50,projectileSpeed:200,spread:.01,baseProjectilesPerShot:1,color:65416,barrelLength:3,barrelRadius:.4,tankSize:.9,isDual:!1,isCharge:!0,chargeTime:3,hoseDuration:1,maxLevel:10,baseCritChance:.15,baseCritDamage:2.5,levelUpDamage:5,levelUpFireRate:0,levelUpProjectiles:0,levelUpAmmoPerShot:25,levelUpHoseDuration:.5,levelUpCritChance:.02}};class Tv{constructor(e,t){this.scene=e,this.audio=t,this.currentType="pistol",this.currentLevel=1,this.gunMeshes=[],this.muzzlePoints=[],this._muzzleFlashes=[],this._fireCooldown=0,this._muzzleFlashTimer=0,this._isRageMode=!1,this._preRageType=null,this._preRageLevel=null,this._isCharging=!1,this._chargeTimer=0,this._chargeIndicator=null,this._buildGuns(this.getEffectiveStats()),this._createChargeIndicator()}getEffectiveStats(e,t){e=e||this.currentType,t=t||this.currentLevel;const n=nh[e];if(!n)return nh.pistol;const i=t-1;return{name:n.name+(t>1?` Lv.${t}`:""),fireRate:n.baseFireRate+n.levelUpFireRate*i,damage:n.baseDamage+n.levelUpDamage*i,ammoPerShot:n.baseAmmoPerShot+(n.levelUpAmmoPerShot||0)*i,projectileSpeed:n.projectileSpeed,spread:n.spread,projectilesPerShot:n.baseProjectilesPerShot+n.levelUpProjectiles*i,color:n.color,barrelLength:n.barrelLength,barrelRadius:n.barrelRadius,tankSize:n.tankSize,isDual:n.isDual,isCharge:n.isCharge||!1,chargeTime:n.chargeTime||0,hoseDuration:(n.hoseDuration||0)+(n.levelUpHoseDuration||0)*i,critChance:(n.baseCritChance||0)+(n.levelUpCritChance||0)*i,critDamage:n.baseCritDamage||1.5}}get stats(){return this.getEffectiveStats()}setWeapon(e,t){if(this._isRageMode){this._preRageType=e,this._preRageLevel=t,console.log(`🔫 Weapon upgraded during rage: ${e} Lv.${t}`);return}this.currentType=e,this.currentLevel=t,this._isCharging=!1,this._chargeTimer=0,this._buildGuns(this.getEffectiveStats()),console.log(`🔫 Weapon: ${e} Lv.${t}`)}_buildGunModel(e){const t=new Vt;if(this.currentType==="shotgun"){for(let h=-1;h<=1;h++){const f=new fn(e.barrelRadius,e.barrelRadius*.8,e.barrelLength,8);f.rotateX(Math.PI/2);const g=new ct({color:e.color,roughness:.3,metalness:.6}),_=new Te(f,g);_.position.set(h*e.barrelRadius*2.2,0,e.barrelLength/2),_.castShadow=!0,t.add(_)}const r=new Si(.8,.4,.6),a=new ct({color:3355443,roughness:.9}),l=new Te(r,a);l.position.set(0,-.1,-.2),t.add(l);const c=new Si(e.tankSize*2,e.tankSize*1.5,e.tankSize*1.5),u=new ct({color:4500223,roughness:.1,metalness:.2,transparent:!0,opacity:.6}),d=new Te(c,u);d.position.set(0,e.tankSize*.5,.2),t.add(d)}else if(this.currentType==="charger"){const r=new fn(e.barrelRadius,e.barrelRadius,e.barrelLength,12);r.rotateX(Math.PI/2);const a=new ct({color:e.color,roughness:.2,metalness:.8}),l=new Te(r,a);l.position.z=e.barrelLength/2,l.castShadow=!0,t.add(l);const c=new ul(e.barrelRadius*1.5,e.barrelRadius*.3,8,16);c.rotateX(Math.PI/2);const u=new ct({color:65416,emissive:65416,emissiveIntensity:.8,roughness:.1,metalness:.9});for(let g=1;g<=3;g++){const _=new Te(c,u);_.position.z=e.barrelLength/4*g,t.add(_)}const d=new Ft(e.tankSize,16,12),h=new ct({color:65416,roughness:.1,metalness:.3,transparent:!0,opacity:.8}),f=new Te(d,h);f.position.set(0,e.tankSize*.8,-.5),t.add(f)}else{const r=new fn(e.barrelRadius,e.barrelRadius*.8,e.barrelLength,8);r.rotateX(Math.PI/2);const a=new ct({color:e.color,roughness:.3,metalness:.6}),l=new Te(r,a);l.position.z=e.barrelLength/2,l.castShadow=!0,t.add(l);const c=new Ft(e.tankSize,8,6),u=new ct({color:4500223,roughness:.1,metalness:.2,transparent:!0,opacity:.6}),d=new Te(c,u);d.position.set(0,e.tankSize*.6,-.1),t.add(d)}const n=new fn(.08,.1,.6,6),i=new ct({color:8934707,roughness:.8}),s=new Te(n,i);return s.position.set(0,-.35,-.2),s.rotation.x=.2,t.add(s),t.scale.setScalar(this.currentType==="charger"?1.8:1.5),t}_createMuzzleFlashModel(){const e=new Ft(.4,6,6),t=new Mt({color:8969727,transparent:!0,opacity:0}),n=new Te(e,t);return this.scene.add(n),n}_createChargeIndicator(){let e=document.getElementById("charge-bar-container");if(!e){e=document.createElement("div"),e.id="charge-bar-container",e.style.cssText="position:fixed; bottom:120px; left:50%; transform:translateX(-50%); width:200px; height:8px; background:rgba(0,0,0,0.5); border-radius:4px; z-index:12; pointer-events:none; display:none; border:1px solid rgba(0,255,136,0.3);";const t=document.createElement("div");t.id="charge-bar-fill",t.style.cssText="height:100%; width:0%; background:linear-gradient(90deg, #00ff88, #ffdd00); border-radius:4px; transition:none;",e.appendChild(t),document.body.appendChild(e)}this._chargeBarContainer=e,this._chargeBarFill=e.querySelector("#charge-bar-fill")}_buildGuns(e){for(const n of this.gunMeshes)this.scene.remove(n);for(const n of this._muzzleFlashes)this.scene.remove(n);this.gunMeshes=[],this.muzzlePoints=[],this._muzzleFlashes=[];const t=this._buildGunModel(e);if(this.scene.add(t),this.gunMeshes.push(t),this.muzzlePoints.push(new E),this._muzzleFlashes.push(this._createMuzzleFlashModel()),e.isDual){const n=this._buildGunModel(e);this.scene.add(n),this.gunMeshes.push(n),this.muzzlePoints.push(new E),this._muzzleFlashes.push(this._createMuzzleFlashModel())}}startCharge(){this.stats.isCharge&&(this._isCharging||(this._isCharging=!0,this._chargeTimer=0,this.audio&&this.audio.playChargeSound(this.stats.chargeTime)))}releaseCharge(e,t,n){if(!this._isCharging)return null;this._isCharging=!1,this._chargeBarContainer&&(this._chargeBarContainer.style.display="none");const i=this.stats,s=Math.min(1,this._chargeTimer/i.chargeTime);if(this._chargeTimer=0,s<.2||n<i.ammoPerShot){if(this.audio&&this.audio._currentChargeOsc){try{this.audio._currentChargeOsc.stop(),this.audio._currentChargeLfo.stop()}catch{}this.audio._currentChargeOsc=null}return n<i.ammoPerShot?{outOfAmmo:!0}:null}this._muzzleFlashTimer=.1;for(const r of this._muzzleFlashes)r.material.opacity=.9;return this.audio&&this.audio.initialized&&this.audio.playDischargeSound(i.hoseDuration),this._isFiringHose=!0,this._hoseTimer=i.hoseDuration,this._hoseChargeRatio=s,this._hoseCooldown=0,{projectiles:[],ammoCost:i.ammoPerShot}}getHoseProjectiles(e,t){if(!this._isFiringHose)return null;const n=this.stats;if(this._hoseTimer-=e,this._hoseTimer<=0)return this._isFiringHose=!1,null;if(this._hoseCooldown-=e,this._hoseCooldown>0)return null;this._hoseCooldown=1/15;const i=new E(Math.sin(t),0,-Math.cos(t)),s=[],r=n.damage*this._hoseChargeRatio*1,a=n.projectileSpeed;for(let l=0;l<this.muzzlePoints.length;l++){const c=this.muzzlePoints[l],u=i.clone();u.y=.03,u.normalize();const d=Math.random()<n.critChance,h=d?r*n.critDamage:r;s.push({position:c.clone().add(u.clone().multiplyScalar(.5)),velocity:u.multiplyScalar(a),damage:h,tier:2,options:{penetrating:!0,isChargerHose:!0,hitScale:6,isCrit:d}})}return{projectiles:s}}tryFire(e,t,n){const i=this.stats;if(i.isCharge||this._fireCooldown>0)return null;if(n<i.ammoPerShot)return{outOfAmmo:!0};this._fireCooldown=1/(i.fireRate*(this._isRageMode?2:1)),this._muzzleFlashTimer=.06;for(const a of this._muzzleFlashes)a.material.opacity=.9;this.audio&&this.audio.initialized&&(this.audio.playShootSound(this.currentType==="shotgun"?1:0),this.audio.playShellDropSound());const s=new E(Math.sin(t),0,-Math.cos(t)),r=[];for(let a=0;a<this.muzzlePoints.length;a++){const l=this.muzzlePoints[a];for(let c=0;c<i.projectilesPerShot;c++){const u=s.clone();if(i.spread>0){const f=(Math.random()-.5)*i.spread*2,g=Math.cos(f),_=Math.sin(f),m=u.x*g-u.z*_,p=u.x*_+u.z*g;u.x=m,u.z=p}u.y=.05,u.normalize();const d=Math.random()<i.critChance,h=d?i.damage*i.critDamage:i.damage;r.push({position:l.clone().add(u.clone().multiplyScalar(.2)),velocity:u.multiplyScalar(i.projectileSpeed),damage:h,tier:this.currentType==="shotgun"?1:0,options:{isShotgun:this.currentType==="shotgun",isCrit:d,hitScale:this._isRageMode?3:1}})}}return{projectiles:r,ammoCost:i.ammoPerShot}}enterRageMode(){this._isRageMode=!0,this._preRageType=this.currentType,this._preRageLevel=this.currentLevel,this.currentType="pistol",this.currentLevel=5;const e=this.getEffectiveStats();for(const t of this.gunMeshes)this.scene.remove(t);for(const t of this._muzzleFlashes)this.scene.remove(t);this.gunMeshes=[],this.muzzlePoints=[],this._muzzleFlashes=[];for(let t=0;t<4;t++){const n=this._buildGunModel(e);n.scale.multiplyScalar(2.5),this.scene.add(n),this.gunMeshes.push(n),this.muzzlePoints.push(new E),this._muzzleFlashes.push(this._createMuzzleFlashModel())}console.log("🔥 RAGE MODE: 4 guns active")}exitRageMode(){this._isRageMode=!1,this.currentType=this._preRageType||"pistol",this.currentLevel=this._preRageLevel||1,this._buildGuns(this.getEffectiveStats()),console.log("🔫 Rage ended, weapon restored")}update(e,t,n){if(this._fireCooldown=Math.max(0,this._fireCooldown-e),this._muzzleFlashTimer-=e,this._isCharging){const _=this.stats;this._chargeTimer=Math.min(_.chargeTime,this._chargeTimer+e);const m=this._chargeTimer/_.chargeTime;this._chargeBarContainer&&(this._chargeBarContainer.style.display="block",this._chargeBarFill.style.width=`${m*100}%`,m>=1?this._chargeBarFill.style.background="linear-gradient(90deg, #ffdd00, #ff6b35)":this._chargeBarFill.style.background="linear-gradient(90deg, #00ff88, #ffdd00)");for(const p of this.gunMeshes)p.traverse(v=>{v.isMesh&&v.material&&v.material.emissive&&(v.material.emissiveIntensity=.15+m*.8)})}const i=Math.sin(n),s=Math.cos(n),r=i,a=-s,l=s,c=i,u=1,d=this._isRageMode?2.5:1.2,h=this._isRageMode?[3.5,3.5,-3.5,-3.5]:[1.5,-1.5],f=this._isRageMode?[d+1,d-.8,d+1,d-.8]:[d,d],g=this.stats;for(let _=0;_<this.gunMeshes.length;_++){const m=this.gunMeshes[_],p=h[_],v=f[_];m.position.set(t.x+l*p+r*u,t.y+v,t.z+c*p+a*u),m.rotation.y=Math.atan2(r,a);const y=g.barrelLength*(this._isRageMode?3.5:1.5);this.muzzlePoints[_].set(m.position.x+r*y,m.position.y,m.position.z+a*y);const x=this._muzzleFlashes[_];this._muzzleFlashTimer>0?(x.position.copy(this.muzzlePoints[_]),x.material.opacity=this._muzzleFlashTimer/.06,x.scale.setScalar((1+(1-this._muzzleFlashTimer/.06)*2)*(this._isRageMode?2.5:1))):x.material.opacity=0}}}const Ev=40,Av=3,Cv=20,Rv=8;class Pv{constructor(e){this.scene=e,this.pool=[],this._geo=new Ft(.3,6,4),this._trailGeo=new Ft(.15,4,3);for(let t=0;t<Ev;t++){const n=new Mt({color:4513279,transparent:!0,opacity:.9}),i=new Te(this._geo,n);i.visible=!1,e.add(i);const s=[];for(let r=0;r<3;r++){const a=new Mt({color:8974079,transparent:!0,opacity:.4}),l=new Te(this._trailGeo,a);l.visible=!1,e.add(l),s.push(l)}this.pool.push({mesh:i,trails:s,velocity:new E,damage:0,tier:0,lifetime:0,active:!1,trailPositions:[new E,new E,new E],options:null,hitEnemies:null})}this._splashGeo=new Ft(.2,4,3),this.splashPool=[];for(let t=0;t<Cv;t++){const n=[];for(let a=0;a<Rv;a++){const l=new Mt({color:6741503,transparent:!0,opacity:.8}),c=new Te(this._splashGeo,l);c.visible=!1,e.add(c),n.push({mesh:c,velocity:new E})}const i=new qs(.2,.5,12),s=new Mt({color:8974079,transparent:!0,opacity:.7,side:vt}),r=new Te(i,s);r.rotation.x=-Math.PI/2,r.visible=!1,e.add(r),this.splashPool.push({particles:n,ring:r,timer:0,active:!1,origin:new E})}}reset(){for(const e of this.pool)e.active=!1,e.mesh&&(e.mesh.visible=!1),e.trails&&e.trails.forEach(t=>{t&&(t.visible=!1)});for(const e of this.splashPool)e.active=!1,e.ring&&(e.ring.visible=!1),e.particles&&e.particles.forEach(t=>{t&&(t.visible=!1)})}spawn(e,t,n,i,s={}){const r=this.pool.find(c=>!c.active);if(!r)return;r.mesh.position.copy(e),r.velocity.copy(t),r.damage=n,r.tier=i,r.lifetime=0,r.active=!0,r.options=s,r.hitEnemies=s.penetrating?new Set:null,r.mesh.visible=!0;const a=[4513279,35071,65416,16755200];r.mesh.material.color.setHex(a[i]||4513279),r.mesh.material.opacity=.9;const l=[1,1.2,.8,2];r.mesh.scale.setScalar((l[i]||1)*(s.hitScale||1));for(let c=0;c<r.trails.length;c++)r.trails[c].visible=!1,r.trailPositions[c].copy(e)}_spawnSplash(e,t){const n=this.splashPool.find(r=>!r.active);if(!n)return;n.active=!0,n.timer=0,n.origin.copy(e),n.ring.position.copy(e),n.ring.visible=!0,n.ring.scale.setScalar(.5),n.ring.material.opacity=.8;const s=[4513279,35071,65416,16755200,16724736][t]||4513279;for(const r of n.particles){r.mesh.position.copy(e),r.mesh.visible=!0,r.mesh.material.color.setHex(s),r.mesh.material.opacity=.9;const a=Math.random()*Math.PI*2,l=8+Math.random()*12,c=4+Math.random()*8;r.velocity.set(Math.cos(a)*c,l,Math.sin(a)*c);const u=.3+Math.random()*.4;r.mesh.scale.setScalar(u)}}update(e,t){const n=[];for(const i of this.pool)if(i.active){if(i.lifetime+=e,i.lifetime>Av){this._deactivate(i);continue}if(i.velocity.y-=12*e,i.mesh.position.addScaledVector(i.velocity,e),i.mesh.position.y<0){this._spawnSplash(i.mesh.position,i.tier),this._deactivate(i);continue}for(let s=i.trails.length-1;s>0;s--)i.trailPositions[s].copy(i.trailPositions[s-1]);i.trailPositions[0].copy(i.mesh.position);for(let s=0;s<i.trails.length;s++)i.trails[s].visible=i.lifetime>.02*(s+1),i.trails[s].position.copy(i.trailPositions[s]),i.trails[s].material.opacity=.4*(1-s/i.trails.length),i.trails[s].scale.setScalar(.7*(1-s/i.trails.length));if(t)for(const s of t){if(!s.alive)continue;let r=s.hitRadius;if(i.options&&i.options.isChargerHose&&(r*=3),i.mesh.position.distanceTo(s.position)<r){if(i.hitEnemies&&i.hitEnemies.has(s))continue;let l=i.damage;if(i.options&&i.options.isShotgun){const u=i.lifetime*i.velocity.length();let d=1;u<8?d=3:u<25&&(d=3-2*((u-8)/17)),l=i.damage*d}n.push({enemy:s,damage:l,position:i.mesh.position.clone(),isCrit:i.options&&i.options.isCrit});const c=i.options&&i.options.isCrit?4:i.tier;if(this._spawnSplash(i.mesh.position,c),i.options&&i.options.penetrating)i.hitEnemies.add(s);else{this._deactivate(i);break}}}}for(const i of this.splashPool)if(i.active){i.timer+=e;for(const s of i.particles){s.velocity.y-=25*e,s.mesh.position.addScaledVector(s.velocity,e);const r=1-i.timer/.6;s.mesh.material.opacity=Math.max(0,r*.9),s.mesh.scale.multiplyScalar(.97)}if(i.ring.scale.addScalar(e*8),i.ring.material.opacity=Math.max(0,.8-i.timer*2),i.timer>.6){i.active=!1,i.ring.visible=!1;for(const s of i.particles)s.mesh.visible=!1}}return n}_deactivate(e){e.active=!1,e.mesh.visible=!1;for(const t of e.trails)t.visible=!1}}const at={SPAWNING:"spawning",WALKING:"walking",ATTACKING:"attacking",COOLDOWN:"cooldown",DYING:"dying",DEAD:"dead"},Wi={boss:2,octopus:3,turtle:8},Lv=new E,ih={octopus:{spreader:{extraProjectiles:2,cooldownMod:1,tint:6684876},hunter:{speedMod:1.5,cooldownMod:-1,tint:13369446},corruptor:{poolDurationMod:5,tint:13056}},turtle:{charger:{dash:!0,tint:16729088},tank:{hpMultiplier:3,speedMod:.9,tint:4473992},swarm:{hpMultiplier:.7,speedMod:2,tint:8978176}},boss:{enraged:{dashCooldownMod:-2,tint:16711680},summoner:{spawnAdds:!0,tint:8913151},corrupter:{slamCreatesPool:!0,tint:26112}}},ko={};function sh(o){if(ko[o])return ko[o];const e=document.createElement("canvas");e.width=128,e.height=48;const t=e.getContext("2d");t.font="bold 32px Outfit, sans-serif",t.textAlign="center",t.fillStyle="#ffffff",t.strokeStyle="#000000",t.lineWidth=3,t.strokeText(o,64,34),t.fillText(o,64,34);const n=new Ws(e);return n.needsUpdate=!0,ko[o]=n,n}class Dv{constructor(e,t,n,i){this.scene=e,this.world=t,this.audio=n,this.dialogue=i,this.loader=new Zr,this.enemies=[],this.turtleModel=null,this.turtleAnimClip=null,this._modelLoaded=!1,this.bossModel=null,this.bossAnimClip=null,this._bossModelLoaded=!1,this._bossLoadStarted=!1,this.octopusModel=null,this.octopusAnimClip=null,this._octopusModelLoaded=!1,this.cthulhuModel=null,this.cthulhuAnimClip=null,this._cthulhuModelLoaded=!1,this._cthulhuLoadStarted=!1,this._cthulhuPending=!1,this._cthulhuAlive=!1,this.currentWave=0,this.waveActive=!1,this.enemiesAliveInWave=0,this.totalKills=0,this.waveSpawnTimer=0,this.waveBudget=0,this._waveDelay=3,this._waveTimer=this._waveDelay,this.testBossMode=new URLSearchParams(window.location.search).get("test_boss")==="true",this.collectibles=[],this.spawnDialogueQueue=[],this._globalTauntTimer=5+Math.random()*5,this.waveJustCompleted=!1,this._summonerTimer=0,this._loadModel()}_enforceBurrowCollision(e){const s=e.position.x- -60,r=e.position.z-0,a=Math.sqrt(s*s+r*r);if(a<14&&a>.01){const l=Math.atan2(r,s);e.position.x=-60+Math.cos(l)*14,e.position.z=0+Math.sin(l)*14}}reset(){for(const i of this.enemies)i.model&&this.scene.remove(i.model);this.enemies=[];for(const i of this.collectibles)i.mesh&&this.scene.remove(i.mesh);this.collectibles=[],this.currentWave=0,this.waveActive=!1,this.enemiesAliveInWave=0,this.totalKills=0,this.waveSpawnTimer=0,this.waveBudget=0,this._waveTimer=this._waveDelay,this.waveJustCompleted=!1,this._summonerTimer=0,this._globalTauntTimer=5+Math.random()*5,this.spawnDialogueQueue.length=0,this._cthulhuAlive=!1,this._cthulhuPending=!1,this._cthulhuRiseGrace=0;const e=document.getElementById("cthulhu-bossbar");e&&e.classList.remove("visible");const t=document.getElementById("kill-count");t&&(t.textContent="0");const n=document.getElementById("wave-number");n&&(n.textContent="—")}_getAliveCount(e){let t=0;for(const n of this.enemies)n.state===at.DEAD||n.state===at.DYING||(e==="boss"&&n.isBoss||e==="octopus"&&n.isOctopus||e==="turtle"&&!n.isBoss&&!n.isOctopus)&&t++;return t}_applyModifiers(e,t){let n=1;if(this.currentWave>=5&&(n=Math.min(3,Math.floor((this.currentWave-5)/3)+2)),e.level=n,n>=2&&(e.maxHealth*=2,e.health=e.maxHealth),n>=3&&(e.maxHealth*=1.5,e.health=e.maxHealth,e.speed*=1.2,e._attackCooldown*=.85),n>=2){const i=`Lv.${n}`,s=sh(i),r=new Da({map:s,transparent:!0,depthTest:!1}),a=new Tc(r);a.scale.set(2.5,1,1);const l=e.healthBarGroup?e.healthBarGroup.position.y:5;a.position.y=l+1.5,e.model.add(a),e._levelSprite=a}if(this.currentWave>=5&&ih[t]){const i=ih[t],s=Object.keys(i),r=s[Math.floor(Math.random()*s.length)],a=i[r];if(e.variant=r,e.variantMods=a,a.hpMultiplier&&(e.maxHealth*=a.hpMultiplier,e.health=e.maxHealth),a.speedMod&&(e.speed*=a.speedMod),a.cooldownMod!==void 0&&(e._attackCooldown=Math.max(.5,e._attackCooldown+a.cooldownMod)),a.dash&&(e._canDash=!0,e._dashTimer=3+Math.random()*2,e._dashCooldown=0,e._isDashing=!1),a.dashCooldownMod&&(e._dashTimer=Math.max(1,(e._dashTimer||7)+a.dashCooldownMod)),a.extraProjectiles&&(e._extraProjectiles=a.extraProjectiles),a.spawnAdds&&(e._spawnAdds=!0),a.slamCreatesPool&&(e._slamCreatesPool=!0),a.tint){const l=new se(a.tint);e.model.traverse(c=>{c.isMesh&&c.material&&c.material.emissive&&(c.material.emissive.copy(l),c.material.emissiveIntensity=.3,c.userData.originalEmissive=l.clone())})}}if(this.currentWave>=7&&Math.random()<.25){e.isElite=!0,e.maxHealth*=2,e.health=e.maxHealth,e.attackDamage*=2,e.model.traverse(l=>{l.isMesh&&l.material&&l.material.emissive&&(l.material.emissive.setHex(16755200),l.material.emissiveIntensity=.6,l.userData.originalEmissive=new se(16755200))});const i=sh("ELITE"),s=new Da({map:i,transparent:!0,depthTest:!1}),r=new Tc(s);r.scale.set(3,1.2,1);const a=e.healthBarGroup?e.healthBarGroup.position.y:5;r.position.y=a+3,e.model.add(r)}}_loadModel(){this.loader.load("./models/stylized_turtle.glb",e=>{this.turtleModel=e.scene;const n=new It().setFromObject(this.turtleModel).getSize(new E),s=5/Math.max(n.x,n.y,n.z);this.turtleModel.scale.setScalar(s),e.animations&&e.animations.length>0&&(this.turtleAnimClip=e.animations[0],console.log(`Turtle anim: "${this.turtleAnimClip.name}" — ${this.turtleAnimClip.duration.toFixed(2)}s`)),this._modelLoaded=!0,console.log("✓ Turtle model loaded");const r=Ba.onLoad;Ba.onLoad=()=>{r&&r(),this._bossLoadStarted||this._lazyLoadBoss()},this.loader.load("./models/dave_the_octopus_rig_animation.glb",a=>{this.octopusModel=a.scene;const c=new It().setFromObject(this.octopusModel).getSize(new E),d=20/Math.max(c.x,c.y,c.z);this.octopusModel.scale.setScalar(d),a.animations&&a.animations.length>0&&(this.octopusAnimClip=a.animations[0],this.octopusAnimClip.tracks=this.octopusAnimClip.tracks.filter(h=>!h.name.endsWith(".position"))),this._octopusModelLoaded=!0,console.log("✓ Octopus model loaded")},void 0,a=>console.error("Failed to load octopus model:",a))},void 0,e=>console.error("Failed to load turtle model:",e))}_lazyLoadBoss(){this._bossLoadStarted||(this._bossLoadStarted=!0,this.audio&&this.audio.loadWaveDrums&&this.audio.loadWaveDrums(),this.loader.load("./models/zombie_monster_slasher_necromorph.glb",e=>{this.bossModel=e.scene;const n=new It().setFromObject(this.bossModel).getSize(new E),s=12/Math.max(n.x,n.y,n.z);this.bossModel.scale.setScalar(s),e.animations&&e.animations.length>0&&(this.bossAnimClip=e.animations.find(r=>r.name==="anim")||e.animations[0]),this._bossModelLoaded=!0,console.log("✓ Boss zombie monster loaded"),this.testBossMode&&this.waveActive&&this.bossesToSpawn===0&&(this.bossesToSpawn=1)},void 0,e=>console.error("Failed to load boss model:",e)))}_lazyLoadCthulhu(){this._cthulhuLoadStarted||(this._cthulhuLoadStarted=!0,this.audio&&this.audio.preloadCthuluRises&&this.audio.preloadCthuluRises(),this.audio&&this.audio.preloadCthuluDies&&this.audio.preloadCthuluDies(),this.loader.load("./models/boss_octopus.glb",e=>{this.cthulhuModel=e.scene;const n=new It().setFromObject(this.cthulhuModel).getSize(new E),s=600/(Math.max(n.x,n.y,n.z)||1);this.cthulhuModel.scale.setScalar(s),e.animations&&e.animations.length>0&&(this.cthulhuAnimClip=e.animations[0]),this._cthulhuModelLoaded=!0,console.log("✓ Cthulhu mega-boss loaded")},void 0,e=>console.error("Failed to load Cthulhu model:",e)))}_isCthulhuWave(e){return e>=7&&(e-7)%5===0}_spawnCthulhu(){if(!this._cthulhuModelLoaded||!this.cthulhuModel){this._cthulhuPending=!0;return}const e=yi(this.cthulhuModel),t=1+Math.max(0,(this.currentWave-7)/12);e.scale.multiplyScalar(t);const n=new Vt;n.add(e);const i=240,s=(Math.random()-.5)*60,r=-10,a=-140;n.position.set(i,a,s),n.rotation.y=-Math.PI/2,n.traverse(p=>{p.isMesh&&(p.castShadow=!0,p.receiveShadow=!1)}),this.scene.add(n);let l=null,c=null;this.cthulhuAnimClip&&(l=new ji(e),c=l.clipAction(this.cthulhuAnimClip),c.play(),c.timeScale=.7);const u=3e3+(this.currentWave-7)*800,d=25+this.currentWave*2,h=d*.4,f=this._createHealthBar();f.visible=!1,n.add(f);const g=document.getElementById("cthulhu-bossbar"),_=document.getElementById("cthulhu-bossbar-fill");g&&g.classList.add("visible"),_&&(_.style.width="100%");const m={model:n,innerModel:e,mixer:l,walkAction:c,healthBarGroup:f,healthBarFill:f.children[1],isCthulhu:!0,isBoss:!0,isStationary:!0,maxHealth:u,health:u,speed:0,attackDamage:d,tickDamage:h,attackRange:9999,hitRadius:120*t,state:at.SPAWNING,alive:!0,position:n.position,yOffset:0,_emergeStartY:a,_emergeFinalY:r,_emergeDuration:5,_spawnTimer:0,_attackTimer:0,_attackCooldown:1,_cooldownTimer:.5,_deathTimer:0,_flashTimer:0,_knockbackVelocity:new E,_staggerTimer:0,_bobTimer:0,targetEntity:"crab",throwCount:0,_dialogueTimer:8};this.enemies.push(m),this._cthulhuAlive=!0,this.enemiesAliveInWave++,this.audio&&this.audio.playCthuluRises&&this.audio.playCthuluRises(),this._cthulhuRiseGrace=20}startWave(){this.currentWave++,this.testBossMode&&!this._bossLoadStarted&&this._lazyLoadBoss(),(this.currentWave===6||this._isCthulhuWave(this.currentWave+1))&&this._lazyLoadCthulhu(),this._isCthulhuWave(this.currentWave)&&(this._cthulhuLoadStarted||this._lazyLoadCthulhu(),setTimeout(()=>this._spawnCthulhu(),200)),this._isCthulhuWave(this.currentWave)?this.waveBudget=10:this.waveBudget=Math.floor(4+this.currentWave*3),this.waveSpecialSpawned={octopus:0,boss:0},this.maxOctopusPerWave=this._isCthulhuWave(this.currentWave)?1:Math.floor(this.currentWave/2),this.testBossMode?this.maxBossPerWave=1:this.currentWave>=4&&(this.currentWave%2===0||this.currentWave%5===0)?this.maxBossPerWave=1:this.maxBossPerWave=0,this.enemiesAliveInWave=0,this.waveActive=!0,this.waveSpawnTimer=0,window.showNotification&&window.showNotification(`Wave ${this.currentWave}`,"Defend the Burrow!"),this._bossSpokeThisWave=!1,this._octopusSpokeThisWave=!1,this.currentWave>=3&&this.dialogue&&this.crab&&this.crab.model&&Math.random()<.3&&this.dialogue.speak(this.crab.model,"They are bringing the heavy hitters.","hero",4,4),console.log(`Wave ${this.currentWave} starting with budget: ${this.waveBudget}`);const e=document.getElementById("wave-number");e&&(e.textContent=this.currentWave)}_spawnTurtle(){if(!this._modelLoaded||this._getAliveCount("turtle")>=Wi.turtle)return;const e=yi(this.turtleModel),t=55+Math.random()*20,n=-190+Math.random()*380,i=this.world.getTerrainHeight(t,n);e.position.set(t,i,n),e.rotation.y=Math.PI,e.traverse(u=>{u.isMesh&&(u.castShadow=!0,u.receiveShadow=!0,u.material&&(u.material=u.material.clone(),u.userData.originalColor=u.material.color.clone(),u.userData.originalEmissive=u.material.emissive?u.material.emissive.clone():new se(0)))}),this.scene.add(e);let s=null,r=null;this.turtleAnimClip&&(s=new ji(e),r=s.clipAction(this.turtleAnimClip),r.play(),r.timeScale=1);const a=this._createHealthBar();e.add(a),a.position.y=3.5;const l=40+this.currentWave*10,c={model:e,mixer:s,walkAction:r,healthBarGroup:a,healthBarFill:a.children[1],maxHealth:l,health:l,speed:12+this.currentWave*.75,attackDamage:8+this.currentWave*2,attackRange:5,hitRadius:5,state:at.SPAWNING,alive:!0,position:e.position,_spawnTimer:0,_attackTimer:0,_attackCooldown:1.5,_cooldownTimer:0,_deathTimer:0,_flashTimer:0,_lungeDir:new E,_lungeProgress:0,targetEntity:Math.random()>.5?"burrow":"crab"};this._applyModifiers(c,"turtle"),this.enemies.push(c),this.enemiesAliveInWave++,this.dialogue&&Math.random()<.25&&this.dialogue.speak(e,"The beach belongs to us!","monster",2.5,4.5)}_spawnOctopus(){if(!this._octopusModelLoaded||this._getAliveCount("octopus")>=Wi.octopus)return;const e=yi(this.octopusModel),n=new It().setFromObject(e).getCenter(new E);e.position.x=-n.x,e.position.z=-n.z,e.position.y=-12;const i=new Vt;i.add(e);const s=55+Math.random()*20,r=-190+Math.random()*380,a=0,l=this.world.getTerrainHeight(s,r)+a;i.position.set(s,l,r),i.rotation.y=Math.PI,e.traverse(v=>{v.isMesh&&(v.castShadow=!0,v.receiveShadow=!0,v.frustumCulled=!1,v.material&&(v.material=v.material.clone(),v.userData.originalColor=v.material.color.clone(),v.userData.originalEmissive=v.material.emissive?v.material.emissive.clone():new se(0)))}),this.scene.add(i);let c=null,u=null;this.octopusAnimClip&&(c=new ji(e),u=c.clipAction(this.octopusAnimClip),u.play(),u.timeScale=1);const d=this._createHealthBar();i.add(d),d.position.y=13,d.scale.set(2.5,2.5,2.5);const f=(60+this.currentWave*20)*2,g=8+this.currentWave*2,_=g*2,m=g*.3,p={model:i,mixer:c,walkAction:u,healthBarGroup:d,healthBarFill:d.children[1],isOctopus:!0,maxHealth:f,health:f,speed:10+this.currentWave*.5,attackDamage:_,tickDamage:m,attackRange:40,hitRadius:4,state:at.SPAWNING,alive:!0,position:i.position,yOffset:a,_spawnTimer:0,_attackTimer:0,_attackCooldown:5,_cooldownTimer:0,_deathTimer:0,_flashTimer:0,_lungeDir:new E,_lungeProgress:0,targetEntity:"crab",throwCount:0,_dialogueTimer:12};this._applyModifiers(p,"octopus"),this.enemies.push(p),this.dialogue&&!this._octopusSpokeThisWave&&(this._octopusSpokeThisWave=!0,this.spawnDialogueQueue.push({entity:p,text:"You hear it too… don't you The call of the abyss… it calls for you.",heightOffset:15})),this.enemiesAliveInWave++}_spawnBoss(){if(!this._bossModelLoaded||this._getAliveCount("boss")>=Wi.boss)return;const e=yi(this.bossModel);this.isBigBossWave&&e.scale.multiplyScalar(2);const t=new Vt;t.add(e);const n=55+Math.random()*20,i=-190+Math.random()*380,s=this.world.getTerrainHeight(n,i);t.position.set(n,s,i),t.rotation.y=Math.PI,e.traverse(d=>{d.isMesh&&(d.castShadow=!0,d.receiveShadow=!0,d.material&&(d.material=d.material.clone(),d.userData.originalColor=d.material.color.clone(),d.userData.originalEmissive=d.material.emissive?d.material.emissive.clone():new se(0)))}),this.scene.add(t);let r=null,a=null;this.bossAnimClip&&(r=new ji(e),a=r.clipAction(this.bossAnimClip),a.play(),a.timeScale=1);const l=this._createHealthBar();t.add(l),this.isBigBossWave?(l.position.y=26,l.scale.set(7,7,7)):(l.position.y=14,l.scale.set(4,4,4));const c=this.isBigBossWave?600+this.currentWave*100:400+this.currentWave*50,u={model:t,mixer:r,walkAction:a,healthBarGroup:l,healthBarFill:l.children[1],isBoss:!0,maxHealth:c,health:c,speed:this.isBigBossWave?8+this.currentWave*.2:10+this.currentWave*.5,attackDamage:this.isBigBossWave?40+this.currentWave*5:20+this.currentWave*5,attackRange:this.isBigBossWave?12:8,hitRadius:this.isBigBossWave?12:8,state:at.SPAWNING,alive:!0,position:t.position,_spawnTimer:0,_attackTimer:0,_attackCooldown:this.isBigBossWave?2.5:1.5,_cooldownTimer:0,_deathTimer:0,_flashTimer:0,_lungeDir:new E,_lungeProgress:0,_needsFlashReset:!1,targetEntity:"crab",_isDashing:!1,_dashTimer:7,_dashCooldown:0,isBigBoss:this.isBigBossWave};if(this._applyModifiers(u,"boss"),this.enemies.push(u),this.enemiesAliveInWave++,this.dialogue&&!this._bossSpokeThisWave){this._bossSpokeThisWave=!0;const d=["I am the terror of the deep! Your water gun is nothing!","The tide washes all away... starting with you!"],h=d[Math.floor(Math.random()*d.length)],f=this.isBigBossWave?22:15;this.spawnDialogueQueue.push({entity:u,text:h,heightOffset:f})}}_createHealthBar(){const e=new Vt,t=new Ht(2,.25),n=new Mt({color:3355443,side:vt}),i=new Te(t,n);e.add(i);const s=new Ht(1.9,.18),r=new Mt({color:4521796,side:vt}),a=new Te(s,r);return a.position.z=.01,e.add(a),e}damageEnemy(e,t){if(!e.alive)return;e.health-=t,e._flashTimer=.15;const n=Math.max(0,e.health/e.maxHealth);if(e.healthBarFill.scale.x=n,e.healthBarFill.position.x=-(1-n)*.95,e.isCthulhu){const i=document.getElementById("cthulhu-bossbar-fill");i&&(i.style.width=`${n*100}%`)}else{const i=n<.5?1:(1-n)*2,s=n>.5?1:n*2;e.healthBarFill.material.color.setRGB(i,s,0)}if(e.health<=0)this._killEnemy(e);else if(this.dialogue&&!e.isCthulhu&&Math.random()<.1)if(e.isBoss){const i=["Your pathetic squirt gun cannot pierce my armor!","I am the terror of the deep! Your water gun is nothing!","The tide washes all away... starting with you!"],s=i[Math.floor(Math.random()*i.length)],r=e.healthBarGroup.position.y-1;this.dialogue.speak(e.model,s,"monster",3.5,r)}else{const i=["You're gonna feel my wrath, shell-face!","Snap him in half!","The beach belongs to us!"],s=i[Math.floor(Math.random()*i.length)];this.dialogue.speak(e.model,s,"monster",2.5,4.5)}this.audio&&this.audio.initialized&&this.audio.playEnemyHitSound(e.isBoss)}_triggerRandomTaunt(){const e=this.enemies.filter(s=>s.alive&&!s.isCthulhu);if(e.length===0)return;const t=e[Math.floor(Math.random()*e.length)];let n="",i=15;if(t.isBoss){const s=["Your pathetic squirt gun cannot pierce my armor!","I am the terror of the deep! Your water gun is nothing!","The tide washes all away... starting with you!"];n=s[Math.floor(Math.random()*s.length)],i=t.healthBarGroup?t.healthBarGroup.position.y-1:20}else if(t.isOctopus){const s=["The call of Cthulhu echoes.","The abyss is awake.... Wakey wakey!!!"];n=s[Math.floor(Math.random()*s.length)],i=15}else{const s=["You're gonna feel my wrath, shell-face!","Snap him in half!","The beach belongs to us!"];n=s[Math.floor(Math.random()*s.length)],i=4.5}this.dialogue.speak(t.model,n,"monster",3,i)}_killEnemy(e){if(e.alive=!1,e.state=at.DYING,e._deathTimer=0,e._deathDuration=e.isCthulhu?6:e.isOctopus?4:.6,this.totalKills++,this.enemiesAliveInWave--,e.isCthulhu){this._cthulhuAlive=!1,this.audio&&this.audio.playCthuluDies&&this.audio.playCthuluDies();const n=document.getElementById("cthulhu-bossbar");n&&n.classList.remove("visible")}e.isOctopus&&this.dialogue&&(this.dialogue.monsterCooldown=0,this.dialogue.speak(e.model,"Ahh, The abyss… remembers you.","monster",4,15)),this._spawnDrops(e);const t=document.getElementById("kill-count");t&&(t.textContent=this.totalKills),this.audio&&this.audio.initialized&&this.audio.playEnemyDeathSound(e.isBoss)}_spawnDrops(e){const t=e.isBoss,n=e.isBigBoss,i=e.isOctopus;e.type;const s=e.position,r=Lv,a=c=>(r.set(s.x+(Math.random()-.5)*c,s.y,s.z+(Math.random()-.5)*c),r);if(t){const c=n?15:8;for(let u=0;u<c;u++)this._spawnDrop(a(8),"coin",3+Math.floor(Math.random()*3));this._spawnDrop(s,"health",150+Math.floor(Math.random()*100));return}if(e.isElite){for(let c=0;c<4;c++)this._spawnDrop(a(5),"coin",2+Math.floor(Math.random()*3));Math.random()<.5&&this._spawnDrop(s,"health",50+Math.floor(Math.random()*50));return}if(i){for(let c=0;c<2;c++)this._spawnDrop(a(4),"coin",1+Math.floor(Math.random()*2));Math.random()<.2&&this._spawnDrop(s,"health",30+Math.floor(Math.random()*20));return}const l=Math.random();if(l<.02)for(let c=0;c<4;c++)this._spawnDrop(a(4),"coin",2+Math.floor(Math.random()*3));else if(l<.17)for(let c=0;c<2;c++)this._spawnDrop(a(3),"coin",1+Math.floor(Math.random()*2));else l<.77&&this._spawnDrop(a(2),"coin",1);Math.random()<.1&&this._spawnDrop(s,"health",15+Math.floor(Math.random()*10))}_spawnDrop(e,t,n=1){const i=new hl(.5,0);let s,r;t==="health"?(s=4521830,r=65348):(s=16768324,r=16755200);const a=new ct({color:s,emissive:r,emissiveIntensity:.6,roughness:.2,metalness:.8}),l=new Te(i,a);l.position.copy(e),l.position.y+=1.5,l.castShadow=!0,this.scene.add(l);const c=new qs(.6,.9,12),u=new Mt({color:t==="health"?4521830:16768324,transparent:!0,opacity:.4,side:vt}),d=new Te(c,u);d.rotation.x=-Math.PI/2,l.add(d),this.collectibles.push({mesh:l,baseY:e.y+1.5,collected:!1,dropType:t,value:n})}update(e,t,n,i,s,r,a){if(this.dialogue&&!(this.audio&&(this.audio._cthuluRisesActive||this.audio._cthuluDiesActive))&&!this.dialogue.isMonsterSpeaking())if(this.spawnDialogueQueue.length>0){const f=this.spawnDialogueQueue.shift();f.entity&&f.entity.alive&&this.dialogue.speak(f.entity.model,f.text,"monster",4,f.heightOffset)}else this._globalTauntTimer!==void 0&&(this._globalTauntTimer-=e,this._globalTauntTimer<=0&&(this._triggerRandomTaunt(),this._globalTauntTimer=5+Math.random()*5));if(this.waveJustCompleted=!1,!this.waveActive)this._waveTimer-=e,this._waveTimer<=0&&this.startWave();else{let h=0;for(const g of this.enemies)g.state!==at.DEAD&&g.state!==at.DYING&&(g.isBoss?h+=10:g.isOctopus?h+=3:h+=1);this._cthulhuRiseGrace>0&&(this._cthulhuRiseGrace=Math.max(0,this._cthulhuRiseGrace-e));const f=this._cthulhuRiseGrace>0;if(this.waveBudget>0&&!f){this.waveSpawnTimer+=e;const g=.5+Math.random()*.5,_=Math.min(20,3+this.currentWave*2);if(this.waveSpawnTimer>g&&h<_){this.waveSpawnTimer=0;let m=!1;this.currentWave>=4&&this._bossModelLoaded&&this.waveBudget>=10&&h+10<=_&&this._getAliveCount("boss")<Wi.boss&&this.waveSpecialSpawned.boss<this.maxBossPerWave&&(Math.random()<.2||this.waveBudget<=15)&&(this.isBigBossWave=this.currentWave%5===0,this._spawnBoss(),this.waveSpecialSpawned.boss++,this.waveBudget-=10,m=!0),!m&&this.currentWave>=2&&this._octopusModelLoaded&&this.waveBudget>=3&&h+3<=_&&this._getAliveCount("octopus")<Wi.octopus&&this.waveSpecialSpawned.octopus<this.maxOctopusPerWave&&(Math.random()<.25||this.waveBudget===3)&&(this._spawnOctopus(),this.waveSpecialSpawned.octopus++,this.waveBudget-=3,m=!0),!m&&this.waveBudget>=1&&h+1<=_&&this._getAliveCount("turtle")<Wi.turtle&&(this._spawnTurtle(),this.waveBudget-=1)}}this._cthulhuAlive&&this.waveBudget<=0&&h===0&&(this.waveBudget=10,this.waveSpawnTimer=0,this.waveSpecialSpawned.octopus=0,this.waveSpecialSpawned.boss=0),this.waveBudget<=0&&h===0&&!this._cthulhuAlive&&(this.waveActive=!1,this._waveTimer=this._waveDelay,this.waveJustCompleted=!0,console.log(`Wave ${this.currentWave} complete!`))}let l=0;for(const h of this.enemies){if(h.state===at.DEAD)continue;if(h.mixer&&h.mixer.update(e),h._knockbackVelocity&&h._knockbackVelocity.lengthSq()>.01&&(h.position.addScaledVector(h._knockbackVelocity,e*10),h._knockbackVelocity.multiplyScalar(.8),h.position.y=this.world.getTerrainHeight(h.position.x,h.position.z)+(h.yOffset||0)),h._staggerTimer>0){h._staggerTimer-=e,h.walkAction&&(h.walkAction.timeScale=.2),h.healthBarGroup&&i&&h.healthBarGroup.lookAt(i.position);continue}if(h.healthBarGroup&&i&&h.healthBarGroup.lookAt(i.position),h._flashTimer>0){h._flashTimer-=e;const p=h._flashTimer/.15;h.model.traverse(v=>{v.isMesh&&v.material&&v.material.emissive&&v.material.emissive.setRGB(p,0,0)}),h._needsFlashReset=!0}else h._needsFlashReset&&(h._needsFlashReset=!1,h.model.traverse(p=>{p.isMesh&&p.material&&p.material.emissive&&(p.userData.originalEmissive?p.material.emissive.copy(p.userData.originalEmissive):p.material.emissive.setRGB(0,0,0))}));let f=n,g=!1,_=null;if(h.targetEntity==="burrow"&&s&&s.health>0&&(f=s.position,g=!0),s&&s.minions){let p=h.position.distanceTo(f);for(const v of s.minions){if(v.health<=0)continue;const y=h.position.distanceTo(v.model.position);y<p&&(p=y,f=v.model.position,_=v,g=!1)}}const m=h.position.distanceTo(f);switch(h.state){case at.SPAWNING:if(h._spawnTimer+=e,h.isCthulhu){const L=Math.min(1,h._spawnTimer/(h._emergeDuration||5)),N=1-Math.pow(1-L,3),k=h._emergeStartY??-45,K=h._emergeFinalY??-2;h.position.y=k+(K-k)*N,h.walkAction&&(h.walkAction.timeScale=.35),L>=1&&(h.state=at.WALKING,h._cooldownTimer=.4);break}h._spawnTimer>1&&(h.state=at.WALKING);break;case at.WALKING:if(h.isCthulhu){h._bobTimer+=e,h.position.y=(h._emergeFinalY??-2)+Math.sin(h._bobTimer*.7)*1.4,h.walkAction&&(h.walkAction.timeScale=.6);const L=f.x-h.position.x,N=f.z-h.position.z;if(Math.abs(L)>.1||Math.abs(N)>.1){const k=Math.atan2(L,N);let K=h.model.rotation.y,H=k-K;for(;H>Math.PI;)H-=Math.PI*2;for(;H<-Math.PI;)H+=Math.PI*2;h.model.rotation.y=K+H*Math.min(1,e*.8)}if(h._cooldownTimer-=e,h._cooldownTimer<=0&&(h._cooldownTimer=h._attackCooldown,h.throwCount++,a&&a.throwBlob)){const k=h.position.clone();k.y+=18;const K=f.clone();a.throwBlob(k,K,h.attackDamage*2,h.tickDamage*2,5)}break}if(h.isOctopus){h._cooldownTimer-=e;const L=f.x-h.position.x,N=f.z-h.position.z,k=Math.sqrt(L*L+N*N);if(k>.1&&(h.model.rotation.y=Math.atan2(L,N)),h.position.x>25){const K=L/k,H=N/k,te=Math.min(-.5,K);h.position.x+=te*h.speed*2*e,h.position.z+=H*h.speed*2*e,this._enforceBurrowCollision(h),h.position.y=this.world.getTerrainHeight(h.position.x,h.position.z)+(h.yOffset||0),h.walkAction&&(h.walkAction.timeScale=2)}else if(k>20){const K=L/k,H=N/k;h.position.x+=K*h.speed*.5*e,h.position.z+=H*h.speed*.5*e,this._enforceBurrowCollision(h),h.position.y=this.world.getTerrainHeight(h.position.x,h.position.z)+(h.yOffset||0),h.walkAction&&(h.walkAction.timeScale=.5)}else h.walkAction&&(h.walkAction.timeScale=0);if(h._cooldownTimer<=0&&(h._cooldownTimer=h._attackCooldown,h.throwCount++,Math.random()<.25&&this.dialogue&&!this.dialogue.isMonsterSpeaking()&&this.dialogue.speak(h.model,"Swallow my darkness!","monster",3,15),a)){const K=f.clone(),H=h.position.clone();H.y+=6,a.throwBlob(H,K,h.attackDamage,h.tickDamage)}break}let p=h.speed,v=1;if(h.isBoss)h._dashTimer-=e,h._isDashing?h._dashTimer<=0?(h._isDashing=!1,h._dashTimer=7):(p*=3,v=3,m<h.hitRadius+2&&h._dashTimer<2.8&&(_&&_.health!==void 0?_.health-=h.attackDamage*e*2:g?s.takeDamage(h.attackDamage*e*2):(l+=h.attackDamage*e*2,i&&(i.position.x+=(Math.random()-.5)*.4,i.position.y+=(Math.random()-.5)*.4)))):h._dashTimer<=0&&(h._isDashing=!0,h._dashTimer=3);else if(h._canDash){if(h._dashCooldown&&h._dashCooldown>0)h._dashCooldown-=e,p=.1,v=.1;else if(h._dashTimer-=e,h._isDashing)if(h._dashTimer<=0)h._isDashing=!1,h._dashTimer=4,h._dashCooldown=.5;else{p*=6,v=3;const L=h._dashDir.x,N=h._dashDir.z;h.position.x+=L*p*e,h.position.z+=N*p*e,this._enforceBurrowCollision(h),h.position.y=this.world.getTerrainHeight(h.position.x,h.position.z)+(h.yOffset||0),h.model.rotation.y=Math.atan2(L,N),m<h.hitRadius+2&&h._dashTimer<.4&&(_&&_.health!==void 0?_.health-=h.attackDamage*e*3:g?s.takeDamage(h.attackDamage*e*3):(l+=h.attackDamage*e*3,i&&(i.position.x+=(Math.random()-.5)*.6,i.position.y+=(Math.random()-.5)*.6))),h.walkAction&&(h.walkAction.timeScale=v);continue}else if(h._dashTimer<=0&&m<30){h._isDashing=!0,h._dashTimer=.5;const L=Math.sqrt((f.x-h.position.x)**2+(f.z-h.position.z)**2);h._dashDir=new E((f.x-h.position.x)/L,0,(f.z-h.position.z)/L)}}h.walkAction&&(h.walkAction.timeScale=v);const y=f.x-h.position.x,x=f.z-h.position.z,P=Math.sqrt(y*y+x*x);if(P>.1){const L=y/P,N=x/P;h.position.x+=L*p*e,h.position.z+=N*p*e,this._enforceBurrowCollision(h),h.position.y=this.world.getTerrainHeight(h.position.x,h.position.z)+(h.yOffset||0),h.model.rotation.y=Math.atan2(L,N)}const T=g?h.attackRange+16:h.attackRange;m<T&&(h.state=at.ATTACKING,h._attackTimer=0,h._lungeProgress=0,h._lungeDir.set(y/P,0,x/P),this.audio&&this.audio.initialized&&this.audio.playEnemyAttackSound(h.isBoss),h.walkAction&&(h.walkAction.timeScale=4));break;case at.ATTACKING:h._attackTimer+=e,h._lungeProgress=Math.min(1,h._attackTimer/.3);const A=h.speed*3;if(h._lungeProgress<1&&(h.position.x+=h._lungeDir.x*A*e,h.position.z+=h._lungeDir.z*A*e,this._enforceBurrowCollision(h),h.position.y=this.world.getTerrainHeight(h.position.x,h.position.z)+(h.yOffset||0),h.model.traverse(L=>{L.isMesh&&L.material&&L.material.emissive&&L.material.emissive.setRGB(.8,.1,0)})),h._attackTimer>.25&&h._attackTimer<.35){const L=g?h.attackRange+12:h.attackRange+2;m<L&&(_&&_.health!==void 0?_.health-=h.attackDamage:g?s.takeDamage(h.attackDamage):(l+=h.attackDamage,i&&(i.position.x+=(Math.random()-.5)*.8,i.position.y+=(Math.random()-.5)*.5))),h.state=at.COOLDOWN,h._cooldownTimer=0,h._needsFlashReset=!0}break;case at.COOLDOWN:h._cooldownTimer+=e,h._cooldownTimer<.4&&(h.position.x-=h._lungeDir.x*h.speed*.5*e,h.position.z-=h._lungeDir.z*h.speed*.5*e,h.position.y=this.world.getTerrainHeight(h.position.x,h.position.z)),h.walkAction&&(h.walkAction.timeScale=.3),h._cooldownTimer>h._attackCooldown&&(h.state=at.WALKING);break;case at.DYING:h._deathTimer+=e;const D=h._deathDuration||.6,w=h._deathTimer/D;h._materialsFaded||(h._materialsFaded=!0,h.model.traverse(L=>{L.isMesh&&L.material&&(L.material.transparent=!0,L.material.needsUpdate=!0)}));const M=h.isBoss||h.isOctopus?1:this.turtleModel.scale.x;h.model.scale.setScalar(M*Math.max(0,1-w)),h.model.traverse(L=>{L.isMesh&&L.material&&(L.material.opacity=Math.max(0,1-w))});const I=h.isOctopus?2:12;h.model.rotation.y+=e*I,h.model.position.y+=e*(h.isOctopus?.5:2),h.walkAction&&(h.walkAction.timeScale=h.isOctopus?2:8),h._deathTimer>D&&(h.state=at.DEAD,this.scene.remove(h.model));break}}const c=this.enemies.length;for(let h=0;h<c;h++){const f=this.enemies[h];if(!(f.state===at.DEAD||f.state===at.DYING||f.state===at.SPAWNING))for(let g=h+1;g<c;g++){const _=this.enemies[g];if(_.state===at.DEAD||_.state===at.DYING||_.state===at.SPAWNING)continue;const m=f.position.x-_.position.x,p=f.position.z-_.position.z,v=m*m+p*p,y=f.hitRadius||1.5,x=_.hitRadius||1.5,P=(y+x)*.85;if(v>0&&v<P*P){const T=Math.sqrt(v),A=P-T,D=m/T,w=p/T,M=f.isCthulhu?100:f.isBoss?10:1,I=_.isCthulhu?100:_.isBoss?10:1,L=M+I,N=A*(I/L)*8*e,k=A*(M/L)*8*e;f.position.x+=D*N,f.position.z+=w*N,_.position.x-=D*k,_.position.z-=w*k,this._enforceBurrowCollision(f),f.position.y=this.world.getTerrainHeight(f.position.x,f.position.z)+(f.yOffset||0),this._enforceBurrowCollision(_),_.position.y=this.world.getTerrainHeight(_.position.x,_.position.z)+(_.yOffset||0)}}}let u=0,d=0;for(const h of this.collectibles){if(h.collected)continue;const f=h.mesh.position.distanceTo(n);if(f<15){const g=new E().subVectors(n,h.mesh.position);g.y+=1,g.normalize(),h.mesh.position.addScaledVector(g,e*25),h.baseY=h.mesh.position.y}else h.mesh.position.y=h.baseY+Math.sin(t*3)*.5,h.mesh.rotation.y=t*2;f<4&&(h.collected=!0,this.scene.remove(h.mesh),h.dropType==="health"?d+=h.value:u+=h.value,this.audio&&this.audio.initialized&&this.audio.playUpgradeSound())}return this.enemies.length>50&&(this.enemies=this.enemies.filter(h=>h.state!==at.DEAD)),this.collectibles.length>50&&(this.collectibles=this.collectibles.filter(h=>!h.collected)),{damageToPlayer:l,coinsCollected:u,healthCollected:d,waveJustCompleted:this.waveJustCompleted}}}const ei={SPAWNING:"spawning",PATROL:"patrol",ATTACK:"attack"},zt={ACTIVE:"active",DESTROYED:"destroyed",REBUILDING:"rebuilding"};class Iv{constructor(e,t,n){this.scene=e,this.world=t,this.audio=n,this.loader=new Zr,this.level=1,this.maxHealth=400,this.health=400,this.position=new E(-60,0,0),this.depositRadius=14,this.state=zt.ACTIVE,this.maxMinions=3,this.repairCost=15,this.rebuildTimer=0,this.rebuildDuration=15,this.coinTimer=0,this.burrowGroup=new Vt,this.burrowGroup.position.copy(this.position),this.scene.add(this.burrowGroup),this.eggs=[],this.minions=[],this.minionModel=null,this.minionAnimClips=null,this._buildBurrow(),this._loadMinionModel(),this._updateHUD()}reset(){for(const e of this.eggs)e.mesh&&this.burrowGroup.remove(e.mesh);this.eggs=[];for(const e of this.minions)e.model&&this.scene.remove(e.model);if(this.minions=[],this.maxHealth=400,this.maxMinions=3,this.health=this.maxHealth,this.level=1,this.state=zt.ACTIVE,this.rebuildTimer=0,this.coinTimer=0,this._burrowMaterials)for(const e of this._burrowMaterials)e.opacity=1,e._originalColor&&e.color.copy(e._originalColor),e.emissive&&e.emissive.setHex(0);this._burrowLight&&(this._burrowLight.intensity=2),this._beacon&&(this._beacon.visible=!0),this.world?this.burrowGroup.position.y=this.world.getTerrainHeight(this.position.x,this.position.z)-.2:this.burrowGroup.position.copy(this.position),this._updateHUD()}_buildBurrow(){this.loader.load("./models/crab_burrow.glb",e=>{const t=e.scene,i=new It().setFromObject(t).getSize(new E),r=56/(Math.max(i.x,i.y,i.z)||1);t.scale.setScalar(r),t.rotation.y=Math.PI/2,this._burrowMaterials=[],t.traverse(h=>{h.isMesh&&(h.castShadow=!0,h.receiveShadow=!0,h.material&&(h.material=h.material.clone(),h.material.transparent=!0,h.material.opacity=1,h.material._originalColor=h.material.color.clone(),this._burrowMaterials.push(h.material)))}),this.burrowGroup.add(t),this.burrowModel=t;const a=new Vr(16755200,2,20);a.position.y=3,this.burrowGroup.add(a),this._burrowLight=a;const l=new fn(.8,.3,40,8),c=new Mt({color:16766720,transparent:!0,opacity:.15,blending:Ji,depthWrite:!1}),u=new Te(l,c);u.position.y=15,this.burrowGroup.add(u),this._beacon=u,this.burrowGroup.position.y=this.world.getTerrainHeight(this.position.x,this.position.z)-.2,this.world&&this.world.colliders.push({x:this.position.x,z:this.position.z,radius:12}),this._buildHomeProps();const d=document.getElementById("burrow-hud");d&&(d.style.display="block")})}_buildHomeProps(){this.homeGroup=new Vt,this.homeGroup.position.copy(this.position),this.homeGroup.position.y=this.world.getTerrainHeight(this.position.x,this.position.z),this.scene.add(this.homeGroup);const e=8,t=2.5;for(let d=0;d<8;d++){const h=d/8*Math.PI*2,f=new Ft(.4,6,4),g=new ct({color:5592405,roughness:.9}),_=new Te(f,g);_.position.set(e+Math.cos(h)*t,.2,Math.sin(h)*t),_.scale.set(1+Math.random()*.5,.6,1+Math.random()*.5),_.castShadow=!0,this.homeGroup.add(_)}this._campfireLight=new Vr(16737792,1.5,12),this._campfireLight.position.set(e,1.5,0),this.homeGroup.add(this._campfireLight);const n=new Ft(.6,8,6),i=new ct({color:3346688,emissive:16729088,emissiveIntensity:2,roughness:1}),s=new Te(n,i);s.position.set(e,.3,0),s.scale.set(1.5,.5,1.5),this.homeGroup.add(s),this._campfireEmbers=s;const r=new ct({color:9136404,roughness:.95}),a=new Te(new fn(.3,.35,4,6),r);a.position.set(e+3.5,.4,-1.5),a.rotation.set(0,.3,Math.PI/2),a.castShadow=!0,this.homeGroup.add(a);const l=new Te(new fn(.25,.3,3.5,6),r);l.position.set(e-1.5,.3,3),l.rotation.set(0,-.4,Math.PI/2),l.castShadow=!0,this.homeGroup.add(l);const c=new ct({color:6636321,roughness:.8});for(let d=0;d<5;d++){const h=new Te(new Ft(.5,8,6),c);h.position.set(-4+(Math.random()-.5)*2,.5,6+(Math.random()-.5)*2),h.scale.set(1,.9,1),h.castShadow=!0,this.homeGroup.add(h)}const u=[16774625,16770244,16113331];for(let d=0;d<6;d++){const h=new Ft(.25,6,4);h.scale(1,.25,1.2);const f=new Te(h,new ct({color:u[d%3],roughness:.5,metalness:.15}));f.position.set(5+(Math.random()-.5)*4,.1,-4+(Math.random()-.5)*3),f.rotation.y=Math.random()*Math.PI*2,this.homeGroup.add(f)}}_loadMinionModel(){this.loader.load("./models/animated_crab.glb",e=>{this.minionModel=e.scene,this.minionAnimClips=e.animations;const n=new It().setFromObject(this.minionModel).getSize(new E),s=2/Math.max(n.x,n.y,n.z);this.minionModel.scale.setScalar(s),this.minionModel.traverse(r=>{r.isMesh&&(r.castShadow=!0,r.receiveShadow=!0,r.material&&(r.material=r.material.clone(),r.material.color.setHex(16733491)))}),console.log("✓ Minion model loaded")})}tryInteract(e){return this.state===zt.DESTROYED&&e>=this.repairCost?(this._startRebuilding(),this.repairCost):0}spawnMinion(){return this.state===zt.ACTIVE&&this.eggs.length+this.minions.length<this.maxMinions?(this._layEgg(),!0):!1}_layEgg(){const e=new Ft(.8,16,16),t=new ct({color:16755200,emissive:16729088,emissiveIntensity:.8,roughness:.2,metalness:.1}),n=new Te(e,t),i=Math.random()*Math.PI*2,s=Math.random()*1.5;n.position.set(Math.cos(i)*s,1.2,Math.sin(i)*s),n.castShadow=!0,this.burrowGroup.add(n),this.eggs.push({mesh:n,timer:5,baseY:1,phase:Math.random()*Math.PI}),this.audio&&this.audio.playUpgradeSound(),window.showNotification&&window.showNotification("Egg Laid!","A Baby Crab will hatch in 5 seconds."),this.dialogue&&this.crab&&this.crab.model&&this.dialogue.speak(this.crab.model,"Little one is on the way!","hero",2.5),this._updateHUD()}_hatchEgg(e){const t=this.eggs[e];if(this.burrowGroup.remove(t.mesh),this.eggs.splice(e,1),!this.minionModel)return;const n=yi(this.minionModel),i=new E;t.mesh.getWorldPosition(i),n.position.copy(i),this.scene.add(n);let s=null,r=null,a=null;if(this.minionAnimClips&&this.minionAnimClips.length>0){if(s=new ji(n),this.minionAnimClips.length===1)r=s.clipAction(this.minionAnimClips[0]),a=s.clipAction(this.minionAnimClips[0]);else{const c=this.minionAnimClips.find(d=>d.name.toLowerCase().includes("run"))||this.minionAnimClips[0],u=this.minionAnimClips.find(d=>d.name.toLowerCase().includes("attack"))||this.minionAnimClips[0];r=s.clipAction(c),a=s.clipAction(u)}r.play()}const l={model:n,mixer:s,runAction:r,attackAction:a,state:ei.SPAWNING,health:400*(this.crab&&this.crab.utilityLevels?this.crab.utilityLevels.minionLevel:1),speed:14+(this.crab&&this.crab.utilityLevels?this.crab.utilityLevels.minionLevel:1)*2,damage:15+(this.crab&&this.crab.utilityLevels?this.crab.utilityLevels.minionLevel:1)*5,target:null,timer:0,attackCooldown:0,scalePhase:0};n.scale.setScalar(.1),this.minions.push(l),window.showNotification&&window.showNotification("Hatched!","A Minion Crab joined the fight!"),this.dialogue&&this.crab&&this.crab.model&&this.dialogue.speak(this.crab.model,"Go get 'em, little buddy!","hero",2.5),this._updateHUD()}takeDamage(e){this.health<=0||this.state!==zt.ACTIVE||(this.health-=e,this.burrowGroup.traverse(t=>{t.isMesh&&t.material&&t.material.emissive&&(t.userData.originalEmissive||(t.userData.originalEmissive=t.material.emissive.clone()),t.material.emissive.setHex(16711680),t.userData.flashTimeout&&clearTimeout(t.userData.flashTimeout),t.userData.flashTimeout=setTimeout(()=>{t.material&&t.material.emissive.copy(t.userData.originalEmissive)},150))}),this.health<=0&&(this.health=0,this._destroyBurrow()),this._updateHUD())}_destroyBurrow(){this.state=zt.DESTROYED,console.log("Burrow Destroyed!");for(const e of this.eggs)this.burrowGroup.remove(e.mesh);if(this.eggs=[],this.level=1,this.maxMinions=3,this._burrowMaterials)for(const e of this._burrowMaterials)e.opacity=.3,e.color.multiplyScalar(.4),e.emissive&&e.emissive.setHex(2228224);this._burrowLight&&(this._burrowLight.intensity=.3),this._beacon&&(this._beacon.visible=!1),window.showNotification&&window.showNotification("Burrow Destroyed!","Deposit 15 Shells to rebuild it."),this.dialogue&&this.crab&&this.crab.model&&(this.dialogue.heroCooldown=0,this.dialogue.speak(this.crab.model,"Oh no! The burrow is destroyed!","hero",3)),this._updateHUD()}_startRebuilding(){this.state=zt.REBUILDING,this.rebuildTimer=0;const e=new Ht(5,.5),t=new Mt({color:3355443,depthTest:!1});this.rebuildBg=new Te(e,t),this.rebuildBg.position.y=8;const n=new Ht(5,.5),i=new Mt({color:16766720,depthTest:!1});this.rebuildFill=new Te(n,i),this.rebuildFill.position.y=8,this.rebuildFill.position.z=.01,this.rebuildFill.scale.x=.01,this.burrowGroup.add(this.rebuildBg),this.burrowGroup.add(this.rebuildFill),window.showNotification&&window.showNotification("Rebuilding!","Defend the Burrow while it rebuilds!"),this.dialogue&&this.crab&&this.crab.model&&(this.dialogue.heroCooldown=0,this.dialogue.speak(this.crab.model,"Rebuilding the burrow... hold them off!","hero",3)),this._updateHUD()}update(e,t,n){const i=n.enemies;if(this.state===zt.ACTIVE&&(this.coinTimer+=e,this.coinTimer>=3)){this.coinTimer=0;const s=(Math.random()-.5)*10,r=this.depositRadius+5+Math.random()*5,a=this.position.clone();a.x+=r,a.z+=s,n._spawnDrop(a,"coin",1)}if(this.state===zt.REBUILDING){this.rebuildTimer+=e;const s=Math.min(1,this.rebuildTimer/this.rebuildDuration);if(this.rebuildFill.scale.x=Math.max(.01,s),this.rebuildFill.position.x=-2.5+2.5*s,this._burrowMaterials){const r=.3+s*.7;for(const a of this._burrowMaterials)a.opacity=r}if(this._burrowLight&&(this._burrowLight.intensity=.3+s*1.7),s>=1){if(this.state=zt.ACTIVE,this.health=this.maxHealth,this._burrowMaterials)for(const r of this._burrowMaterials)r.opacity=1,r._originalColor&&r.color.copy(r._originalColor),r.emissive&&r.emissive.setHex(0);this._burrowLight&&(this._burrowLight.intensity=2),this._beacon&&(this._beacon.visible=!0),this.burrowGroup.remove(this.rebuildBg),this.burrowGroup.remove(this.rebuildFill),window.showNotification&&window.showNotification("Burrow Restored!","Your Burrow is back online."),this.dialogue&&this.crab&&this.crab.model&&(this.dialogue.heroCooldown=0,this.dialogue.speak(this.crab.model,"The burrow is back online!","hero",3))}this._updateHUD()}for(let s=this.eggs.length-1;s>=0;s--){const r=this.eggs[s];r.timer-=e;const a=Math.sin(t*4+r.phase)*.1+1;r.mesh.scale.setScalar(a),r.mesh.material.emissiveIntensity=.5+a*.5,r.timer<=0&&this._hatchEgg(s)}for(let s=this.minions.length-1;s>=0;s--){const r=this.minions[s];if(r.health<=0){this.scene.remove(r.model),this.minions.splice(s,1),this._updateHUD();continue}switch(r.mixer&&r.mixer.update(e),r.state){case ei.SPAWNING:r.scalePhase+=e*2;const d=this.minionModel?this.minionModel.scale.x:.5;r.model.scale.setScalar(Math.min(d,r.scalePhase*d)),r.scalePhase>=1&&(r.state=ei.PATROL);break;case ei.PATROL:r.runAction&&(r.runAction.timeScale=1,r.runAction.play());const h=28;let g=25,_=null;for(const P of i){if(P.state==="dead"||P.state==="dying"||Math.sqrt(Math.pow(P.position.x-this.position.x,2)+Math.pow(P.position.z-this.position.z,2))>h)continue;const A=r.model.position.distanceTo(P.position);A<g&&(g=A,_=P)}if(_)r.target=_,r.state=ei.ATTACK;else{r.timer+=e;const P=8,T=this.position.x+Math.cos(r.timer*.5+s)*P,A=this.position.z+Math.sin(r.timer*.5+s)*P,D=T-r.model.position.x,w=A-r.model.position.z;r.model.position.x+=D*e*2,r.model.position.z+=w*e*2,r.model.position.y=this.world.getTerrainHeight(r.model.position.x,r.model.position.z),(Math.abs(D)>.1||Math.abs(w)>.1)&&(r.model.rotation.y=Math.atan2(D,w))}break;case ei.ATTACK:const m=28;if(!r.target||r.target.state==="dead"||r.target.state==="dying"){r.target=null,r.state=ei.PATROL;break}if(Math.sqrt(Math.pow(r.target.position.x-this.position.x,2)+Math.pow(r.target.position.z-this.position.z,2))>m){r.target=null,r.state=ei.PATROL;break}const v=r.target.position.x-r.model.position.x,y=r.target.position.z-r.model.position.z,x=Math.sqrt(v*v+y*y);x>3?(r.runAction&&(r.runAction.timeScale=3),r.model.position.x+=v/x*r.speed*e,r.model.position.z+=y/x*r.speed*e,r.model.position.y=this.world.getTerrainHeight(r.model.position.x,r.model.position.z),r.model.rotation.y=Math.atan2(v,y)):(r.runAction&&(r.runAction.timeScale=1),r.model.rotation.y=Math.atan2(v,y),r.attackCooldown-=e,r.attackCooldown<=0&&(r.attackCooldown=.5,n.damageEnemy(r.target,r.damage),r.model.position.x+=v/x*1.5,r.model.position.z+=y/x*1.5));break}const a=28,l=r.model.position.x-this.position.x,c=r.model.position.z-this.position.z,u=Math.sqrt(l*l+c*c);if(u>a){const d=l/u,h=c/u;r.model.position.x=this.position.x+d*a,r.model.position.z=this.position.z+h*a,r.model.position.y=this.world.getTerrainHeight(r.model.position.x,r.model.position.z)}}}_updateHUD(){const e=document.getElementById("burrow-health"),t=document.getElementById("burrow-minions"),n=document.getElementById("burrow-level"),i=document.getElementById("burrow-cost");if(e&&(this.state===zt.DESTROYED?(e.textContent="DESTROYED",e.style.color="#555555"):this.state===zt.REBUILDING?(e.textContent="REBUILDING...",e.style.color="#FFD700"):(e.textContent=`${Math.max(0,Math.floor(this.health))}/${this.maxHealth} HP`,this.health<this.maxHealth*.3?e.style.color="#FF0000":e.style.color="#44FF44")),t&&(this.state===zt.ACTIVE?t.textContent=`${this.eggs.length+this.minions.length}/${this.maxMinions}`:t.textContent="OFFLINE"),n&&(n.textContent=this.level),i)if(this.state===zt.DESTROYED)i.textContent="Rebuild: 15 Shells",i.style.color="#FF4444";else if(this.state===zt.REBUILDING)i.textContent="Please Wait...",i.style.color="#FFD700";else if(this.eggs.length+this.minions.length>=this.maxMinions)i.textContent="MAX CAPACITY",i.style.color="#AAAAAA";else{const s=this.eggs.length+this.minions.length,r=5*Math.pow(2,s);i.textContent=`Cost: ${r} Shells`,i.style.color="#FFD700"}}}class Nv{constructor(e,t){this.camera=e,this.audioManager=t,this.layer=document.getElementById("dialogue-layer"),this.activeDialogues=[],this.dialogueFiles={"I am the terror of the deep! Your water gun is nothing!":"terror-of-the-deep.mp3","Need more water... hold on.":"need-more-water.mp3","Oh crab... here comes the big one.":"oh-crab-big-one.mp3","Snap him in half!":"snap-him-in-half.mp3","The beach belongs to us!":"beach-belongs-to-us.mp3","The tide washes all away... starting with you!":"tide-washes-all-away.mp3","Time to clean up this beach.":"time-to-clean-up.mp3","Your pathetic squirt gun cannot pierce my armor!":"pathetic-squirt-gun.mp3","You're gonna feel my wrath, shell-face!":"yourgonnafeelmywrathshellface_turtle.mp3","Oh no! The burrow is destroyed!":"burrow-destroyed.mp3","Rebuilding the burrow... hold them off!":"rebuilding-burrow.mp3","The burrow is back online!":"burrow-back-online.mp3","Little one is on the way!":"little-one-on-the-way.mp3","Go get 'em, little buddy!":"go-get-em-little-buddy.mp3","You hear it too… don't you The call of the abyss… it calls for you.":"hear-it-too-call-of-abyss.mp3","The call of Cthulhu echoes.":"call-of-cthulhu-echoes.mp3","The abyss is awake.... Wakey wakey!!!":"abyss-is-awake.mp3","Swallow my darkness!":"swallow-my-darkness.mp3","Ahh, The abyss… remembers you.":"abyss-remembers-you.mp3","You belong to the deep now… Cthulhu waits below.":"belong-to-the-deep.mp3","Sink without fear… the deep has already claimed you.":"sink-without-fear.mp3"},this.audioBuffers={},this.monsterCooldown=0,this.heroCooldown=0,this._preloadAudio()}async _preloadAudio(){Object.entries(this.dialogueFiles).forEach(([e,t])=>{fetch(`./models/dialogues/${t}`).then(n=>n.arrayBuffer()).then(n=>{this.audioManager&&this.audioManager.ctx?this.audioManager.ctx.decodeAudioData(n).then(i=>{this.audioBuffers[t]=i,console.log(`✓ Pre-decoded dialogue: ${t}`)}).catch(i=>console.error(`Failed to decode ${t}:`,i)):this.audioBuffers[t]=n}).catch(n=>console.error(`Failed to preload ${t}:`,n))})}isMonsterSpeaking(){return this.monsterCooldown>0}speak(e,t,n="monster",i=3,s=2.5){if(this.audioManager&&(this.audioManager._cthuluRisesActive||this.audioManager._cthuluDiesActive||this.isRageLocked)||n==="monster"&&this.monsterCooldown>0||n==="hero"&&this.heroCooldown>0)return!1;let r=i;const a=this.dialogueFiles[t];a&&this.audioBuffers[a]&&this.audioBuffers[a]instanceof AudioBuffer&&(r=this.audioBuffers[a].duration),n==="monster"?this.monsterCooldown=r+.1:this.heroCooldown=r+.5;const l=document.createElement("div");l.className=`speech-bubble ${n}`,l.textContent=t,this.layer.appendChild(l);const c={entity:e,el:l,text:t,timer:r,heightOffset:s,panner:null};return this._playAudioForText(t,n,e,c),this.activeDialogues.push(c),!0}async _playAudioForText(e,t,n,i){if(!this.audioManager||!this.audioManager.ctx)return;const s=this.dialogueFiles[e];if(!s)return;let r=this.audioManager[`dialogue_${s}`];if(!r&&this.audioBuffers[s])if(this.audioBuffers[s]instanceof AudioBuffer)r=this.audioBuffers[s],this.audioManager[`dialogue_${s}`]=r;else try{const d=this.audioBuffers[s].slice(0);r=await this.audioManager.ctx.decodeAudioData(d),this.audioManager[`dialogue_${s}`]=r}catch(d){console.warn(`Decode failed for ${s}`,d);return}if(!r||!this.audioManager.masterGain)return;const a=this.audioManager.ctx,l=a.createBufferSource();l.buffer=r;const c=a.createGain();c.gain.value=t==="monster"?1:.8;let u=null;t==="monster"&&n&&n.position&&this.audioManager.createPositionalPanner&&(u=this.audioManager.createPositionalPanner(n.position.x,n.position.y+2,n.position.z)),l.connect(c),u?(c.connect(u),u.connect(this.audioManager.masterGain),i&&(i.panner=u)):c.connect(this.audioManager.masterGain),l.start()}clearAll(){this.monsterCooldown=0,this.heroCooldown=0;for(const e of this.activeDialogues)e.el&&e.el.remove();this.activeDialogues=[]}update(e){this.monsterCooldown>0&&(this.monsterCooldown-=e),this.heroCooldown>0&&(this.heroCooldown-=e);const t=window.innerWidth/2,n=window.innerHeight/2;for(let i=this.activeDialogues.length-1;i>=0;i--){const s=this.activeDialogues[i];if(s.timer-=e,s.timer<=0){s.el.style.opacity="0",s.el.style.transform=`${s.el.style.transform} scale(0.8)`,setTimeout(()=>s.el.remove(),200),this.activeDialogues.splice(i,1);continue}if(s.panner&&s.entity&&s.entity.position){const r=s.entity.position;if(s.panner.positionX){const a=this.audioManager.ctx.currentTime;s.panner.positionX.setValueAtTime(r.x,a),s.panner.positionY.setValueAtTime(r.y+2,a),s.panner.positionZ.setValueAtTime(r.z,a)}else s.panner.setPosition&&s.panner.setPosition(r.x,r.y+2,r.z)}if(s.entity&&s.entity.position){let a=1.2-(this.camera.position.distanceTo(s.entity.position)-20)/80*.7;a=Math.max(.4,Math.min(1.2,a));const l=s.entity.position.clone();if(l.y+=s.heightOffset,l.project(this.camera),l.z>1)s.el.style.display="none";else{s.el.style.display="block";const c=l.x*t+t,u=-(l.y*n)+n,d=Math.sin(s.timer*4)*5;s.el.style.left=`${c}px`,s.el.style.top=`${u+d}px`,s.el.style.transform=`translate(-50%, -100%) scale(${a})`}}}}}const Uv=20,rh=15,Go=13.5;class Bv{constructor(e){this.scene=e,this.blobs=[],this.poisonAreas=[],this._blobGeo=new Ft(.8,8,6),this._blobMat=new ct({color:6750003,emissive:2375706,roughness:.2,metalness:.1});const n=new ou().load("./textures/toxic_splash.png");this._poisonMat=new Tt({uniforms:{tDiffuse:{value:n},opacity:{value:1}},vertexShader:`
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
      `,transparent:!0,depthWrite:!1});for(let i=0;i<Uv;i++){const s=new Te(this._blobGeo,this._blobMat);s.visible=!1,s.castShadow=!0,this.scene.add(s),this.blobs.push({mesh:s,velocity:new E,active:!1,damage:0,tickDamage:0});const r=new Ht(Go*2,Go*2,12,12);r.rotateX(-Math.PI/2);const a=new Te(r,this._poisonMat);a.visible=!1,this.scene.add(a),this.poisonAreas.push({mesh:a,active:!1,timer:0,tickDamage:0,tickTimer:0})}}reset(){for(const e of this.blobs)e.active=!1,e.mesh&&(e.mesh.visible=!1);for(const e of this.poisonAreas)e.active=!1,e.mesh&&(e.mesh.visible=!1),e.timer=0,e.tickTimer=0}throwBlob(e,t,n,i,s){const r=this.blobs.find(h=>!h.active);if(!r)return;r.active=!0,r.mesh.visible=!0,r.mesh.position.copy(e),r.damage=n,r.tickDamage=i,r.puddleDuration=typeof s=="number"?s:rh;const a=new E().subVectors(t,e),c=a.length()/20;a.normalize(),r.velocity.x=a.x*20,r.velocity.z=a.z*20;const d=(t.y-e.y+.5*30*c*c)/c;r.velocity.y=d}_spawnPoisonArea(e,t,n=1,i){const s=this.poisonAreas.find(r=>!r.active);s&&(s.active=!0,s.mesh.visible=!0,s.mesh.position.copy(e),s.mesh.scale.set(.1,1,.1),s.targetScale=n,s.timer=typeof i=="number"?i:rh,s.tickDamage=t,s.tickTimer=0)}update(e,t,n){const i=[];for(const a of this.blobs){if(!a.active)continue;if(a.velocity.y-=30*e,a.mesh.position.addScaledVector(a.velocity,e),a.mesh.rotation.x+=e*5,a.mesh.rotation.y+=e*3,n&&n.loaded&&a.mesh.position.distanceTo(n.position)<4){i.push({damage:a.damage}),this._spawnPoisonArea(a.mesh.position,a.tickDamage,1,a.puddleDuration),a.active=!1,a.mesh.visible=!1;continue}const l=t.getTerrainHeight(a.mesh.position.x,a.mesh.position.z);a.mesh.position.y<=l&&(a.mesh.position.y=l,this._spawnPoisonArea(a.mesh.position,a.tickDamage,1,a.puddleDuration),a.active=!1,a.mesh.visible=!1)}let r=0;for(const a of this.poisonAreas){if(!a.active)continue;if(a.timer-=e,a.timer<=0){a.active=!1,a.mesh.visible=!1;continue}const l=a.targetScale||1;a.mesh.scale.x<l&&(a.mesh.scale.x=Math.min(l,a.mesh.scale.x+e*5*l),a.mesh.scale.z=a.mesh.scale.x);const c=.9;a.mesh.material.uniforms&&(a.mesh.material.uniforms.opacity.value=c);const u=a.mesh.geometry.attributes.position,d=a.mesh.scale.x,h=a.mesh.position.x,f=a.mesh.position.z,g=a.mesh.position.y;for(let _=0;_<u.count;_++){const m=u.getX(_),p=u.getZ(_),v=h+m*d,y=f+p*d,x=t.getTerrainHeight(v,y);u.setY(_,(x-g)/d+.1)}if(u.needsUpdate=!0,n&&n.loaded&&!n.isAirborne&&a.mesh.scale.x>l*.5){const _=Math.pow(n.position.x-a.mesh.position.x,2)+Math.pow(n.position.z-a.mesh.position.z,2),m=Go*a.mesh.scale.x;_<m*m&&(a.tickTimer-=e,a.tickTimer<=0&&(r+=a.tickDamage,a.tickTimer=.5))}}return r>0&&i.push({damage:r}),i}}const Ho=["pistol","shotgun","charger"],Vo={pistol:"Pistol",shotgun:"Shotgun",charger:"Charger"};class Fv{constructor(){this.isActive=!1,this._overlay=null,this._resolve=null,this._wavesCompleted=0}onWaveComplete(){return this._wavesCompleted++,this._wavesCompleted%2===0}reset(){if(this._wavesCompleted=0,this.isActive=!1,this._overlay){try{this._overlay.remove()}catch{}this._overlay=null}this._resolve=null}show(e,t,n){return this.isActive=!0,this.crab=e,this.weapons=t,this.burrowManager=n,this._buildUI(),new Promise(i=>{this._resolve=i})}_buildUI(){this._overlay&&this._overlay.remove();const e=document.createElement("div");e.className="shop-overlay",e.innerHTML=`
      <div class="shop-panel">
        <div class="shop-header">
          <div class="shop-title">UPGRADE SHOP</div>
          <div class="shop-coins">Coins: <span id="shop-coin-count">${this.crab.coins}</span></div>
        </div>
        <div class="shop-grid" id="shop-cards"></div>
        <button class="shop-done-btn" id="shop-done-btn">DONE</button>
      </div>
    `,document.body.appendChild(e),this._overlay=e,this._renderCards(),e.querySelector("#shop-done-btn").addEventListener("click",()=>{this._close()})}_renderCards(){const e=this._overlay.querySelector("#shop-cards");e.innerHTML="";const t=this.crab,n=[],i=t.weaponType,s=t.weaponLevels[i]||1,r=s>=10,a=20+(s-1)*15;n.push({id:"weapon_upgrade",title:`Upgrade ${Vo[i]}`,icon:"⬆️",levelText:r?"MAX":`Lv.${s} → Lv.${s+1}`,desc:r?"Maximum power reached":"+Damage, +Crit Chance",cost:r?0:a,color:"#00ddff",canBuy:!r&&t.coins>=a,action:()=>{t.coins-=a,t.weaponLevels[i]++,this.weapons.setWeapon(i,t.weaponLevels[i]),this._playBuySound()}});const l=Ho.indexOf(i),c=Ho[(l+1)%Ho.length],u=10;n.push({id:"switch_weapon",title:`Switch to ${Vo[c]}`,icon:"🔄",levelText:`Currently Lv.${t.weaponLevels[c]||1}`,desc:"Change weapon track completely",cost:u,color:"#ff6b35",canBuy:t.coins>=u,action:()=>{t.coins-=u,t.weaponType=c,this.weapons.setWeapon(c,t.weaponLevels[c]||1),this._playBuySound()}});const d=t.utilityLevels.maxHealth||1,h=d>=10,f=15+(d-1)*10;n.push({id:"max_health",title:"Thick Shell",icon:"❤️",levelText:h?"MAX":`Lv.${d} → Lv.${d+1}`,desc:"+50 Max HP & Full Heal",cost:h?0:f,color:"#44ff88",canBuy:!h&&t.coins>=f,action:()=>{t.coins-=f,t.utilityLevels.maxHealth++,t.maxHealth+=50,t.health=t.maxHealth,this._playBuySound()}});const g=t.utilityLevels.waterCapacity||1,_=g>=10,m=15+(g-1)*10;n.push({id:"water_cap",title:"Deep Reservoir",icon:"💧",levelText:_?"MAX":`Lv.${g} → Lv.${g+1}`,desc:"+50 Ammo Capacity",cost:_?0:m,color:"#44ddff",canBuy:!_&&t.coins>=m,action:()=>{t.coins-=m,t.utilityLevels.waterCapacity++,t.maxAmmo+=50,t.currentAmmo=t.maxAmmo,this._playBuySound()}});const p=t.utilityLevels.burrowStrength||1,v=p>=10,y=20+(p-1)*10;n.push({id:"burrow_hp",title:"Fortified Burrow",icon:"🏰",levelText:v?"MAX":`Lv.${p} → Lv.${p+1}`,desc:"+200 Burrow Max HP & Heal",cost:v?0:y,color:"#ffdd44",canBuy:!v&&t.coins>=y,action:()=>{t.coins-=y,t.utilityLevels.burrowStrength++,this.burrowManager&&(this.burrowManager.maxHealth+=200,this.burrowManager.health+=200),this._playBuySound()}});const x=t.utilityLevels.minionCapacity||1,P=x>=5,T=30+(x-1)*20;n.push({id:"minion_cap",title:"Crab Army",icon:"🦀",levelText:P?"MAX":`Lv.${x} → Lv.${x+1}`,desc:"+1 Minion Capacity",cost:P?0:T,color:"#ff88aa",canBuy:!P&&t.coins>=T,action:()=>{t.coins-=T,t.utilityLevels.minionCapacity++,this.burrowManager&&(this.burrowManager.maxMinions=(this.burrowManager.maxMinions||0)+1),this._playBuySound()}});let A=0,D=!1,w="OFFLINE";if(this.burrowManager&&this.burrowManager.state==="active"){const re=this.burrowManager.eggs.length+this.burrowManager.minions.length;re>=this.burrowManager.maxMinions?w="MAX CAPACITY":(A=5*Math.pow(2,re),w=`${re}/${this.burrowManager.maxMinions} Alive`,D=t.coins>=A)}n.push({id:"spawn_minion",title:"Hatch Minion",icon:"🥚",levelText:w,desc:"Spawn a minion crab now",cost:D?A:w==="MAX CAPACITY"||w==="OFFLINE"?0:A,color:"#ffaa00",canBuy:D,action:()=>{this.burrowManager&&this.burrowManager.spawnMinion()&&(t.coins-=A,this._playBuySound())}});const M=t.utilityLevels.minionLevel||1,I=M>=5,L=40+(M-1)*30;n.push({id:"upgrade_minion",title:"Minion Power",icon:"💪",levelText:I?"MAX":`Lv.${M} → Lv.${M+1}`,desc:"Increases minion HP & Damage",cost:I?0:L,color:"#dd5555",canBuy:!I&&t.coins>=L,action:()=>{t.coins-=L,t.utilityLevels.minionLevel++,this._playBuySound()}});const N=t.utilityLevels.sandBurst||1,k=N>=5,K=50+(N-1)*40;n.push({id:"upgrade_burst",title:"Sand Burst",icon:"🌪️",levelText:k?"MAX":`Lv.${N} → Lv.${N+1}`,desc:N===1?"+Radius":N===2?"-Cooldown":N===3?"+Damage":"Max Power",cost:k?0:K,color:"#eedd88",canBuy:!k&&t.coins>=K,action:()=>{t.coins-=K,t.utilityLevels.sandBurst++,this._playBuySound()}});const H=t.utilityLevels.jumpPower||1,te=H>=5,q=25+(H-1)*20;n.push({id:"upgrade_jump",title:"Spring Legs",icon:"🦘",levelText:te?"MAX":`Lv.${H} → Lv.${H+1}`,desc:"+Jump height & distance",cost:te?0:q,color:"#88ffaa",canBuy:!te&&t.coins>=q,action:()=>{t.coins-=q,t.utilityLevels.jumpPower++,t.jumpForce=25+(t.utilityLevels.jumpPower-1)*7,this._playBuySound()}}),n.forEach(re=>{const de=document.createElement("div");de.className="shop-card"+(re.canBuy?"":" disabled"),de.style.setProperty("--card-color",re.color);let ve="";re.cost===0?ve='<div class="shop-cost">MAX LEVEL</div>':ve=`<div class="shop-cost">🪙 ${re.cost}</div>`,de.innerHTML=`
        <div class="shop-icon">${re.icon}</div>
        <div class="shop-card-title">${re.title}</div>
        <div class="shop-level">${re.levelText}</div>
        <div class="shop-desc">${re.desc}</div>
        ${ve}
      `,re.canBuy&&de.addEventListener("click",Be=>{re.action(),this._updateHUD();const je=Be.currentTarget;je.classList.add("flash-green"),setTimeout(()=>{je&&je.classList.remove("flash-green"),this._renderCards()},300)}),e.appendChild(de)})}_updateHUD(){const e=this._overlay.querySelector("#shop-coin-count");e&&(e.textContent=this.crab.coins);const t=document.getElementById("coin-count");t&&(t.textContent=this.crab.coins);const n=document.getElementById("gun-tier");n&&(n.textContent=`${Vo[this.crab.weaponType]} Lv.${this.crab.weaponLevels[this.crab.weaponType]}`)}_playBuySound(){}_close(){this.isActive=!1,this._overlay&&(this._overlay.style.animation="upgradeOverlayOut 0.3s forwards",setTimeout(()=>{this._overlay&&(this._overlay.remove(),this._overlay=null)},300)),this._resolve&&(this._resolve(),this._resolve=null)}}const Ov="modulepreload",zv=function(o,e){return new URL(o,e).href},oh={},kv=function(e,t,n){let i=Promise.resolve();if(t&&t.length>0){let r=function(u){return Promise.all(u.map(d=>Promise.resolve(d).then(h=>({status:"fulfilled",value:h}),h=>({status:"rejected",reason:h}))))};const a=document.getElementsByTagName("link"),l=document.querySelector("meta[property=csp-nonce]"),c=l?.nonce||l?.getAttribute("nonce");i=r(t.map(u=>{if(u=zv(u,n),u in oh)return;oh[u]=!0;const d=u.endsWith(".css"),h=d?'[rel="stylesheet"]':"";if(!!n)for(let _=a.length-1;_>=0;_--){const m=a[_];if(m.href===u&&(!d||m.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${u}"]${h}`))return;const g=document.createElement("link");if(g.rel=d?"stylesheet":Ov,d||(g.as="script"),g.crossOrigin="",g.href=u,c&&g.setAttribute("nonce",c),document.head.appendChild(g),d)return new Promise((_,m)=>{g.addEventListener("load",_),g.addEventListener("error",()=>m(new Error(`Unable to preload CSS for ${u}`)))})}))}function s(r){const a=new Event("vite:preloadError",{cancelable:!0});if(a.payload=r,window.dispatchEvent(a),!a.defaultPrevented)throw r}return i.then(r=>{for(const a of r||[])a.status==="rejected"&&s(a.reason);return e().catch(s)})};let Ga=!1,yn=null;const Gv="high-scores";let Wo=null;function gl(){return Ga?(Wo||(Wo=(async()=>{try{const o=await yn.getOrCreateLeaderboard(Gv,yn.LeaderboardSortOrder.DESC,yn.LeaderboardDisplayType.NUMERIC);return o.success?o.data.id:(console.warn("[wavedash] getOrCreateLeaderboard failed:",o.message),null)}catch(o){return console.warn("[wavedash] getOrCreateLeaderboard error:",o),null}})()),Wo):Promise.resolve(null)}function Hv(o,e){return Math.max(0,Math.floor(o||0))*1e4+Math.max(0,Math.floor(e||0))}function uu(o){const e=Math.max(0,Math.floor(o||0));return{wave:Math.floor(e/1e4),kills:e%1e4}}async function Vv(){try{const o=await kv(()=>import("./client-BZREnJQ0.js"),[],import.meta.url);yn=o.default||o,yn.init({debug:!0}),Ga=!0;const e=yn.getUsername?yn.getUsername():null;return e?{username:e}:null}catch{return Ga=!1,null}}async function Wv({wave:o,kills:e}){try{const t=await gl();if(!t)return null;const n=Hv(o,e),i=await yn.uploadLeaderboardScore(t,n,!0);return i.success?i.data.globalRank:(console.warn("[wavedash] uploadLeaderboardScore failed:",i.message),null)}catch(t){return console.warn("[wavedash] submitScore error:",t),null}}async function Xv(o=10){try{const e=await gl();if(!e)return[];const t=await yn.listLeaderboardEntries(e,0,o,!1);return t.success?t.data.map(n=>{const{wave:i,kills:s}=uu(n.score);return{name:n.username||"Anonymous",wave:i,kills:s,coins:0,globalRank:n.globalRank}}):[]}catch(e){return console.warn("[wavedash] fetchTopScores error:",e),[]}}async function qv(){try{const o=await gl();if(!o)return null;const e=await yn.getMyLeaderboardEntries(o);if(!e.success||!e.data||e.data.length===0)return null;const t=e.data[0],{wave:n,kills:i}=uu(t.score);return{entry:{name:t.username||"You",wave:n,kills:i,coins:0},rank:t.globalRank}}catch(o){return console.warn("[wavedash] fetchPlayerRank error:",o),null}}const Yv=.12,jv=.85;class Kv{constructor(e,t={}){this.input=e,this.onPause=t.onPause||(()=>{}),this.onSandBurst=t.onSandBurst||(()=>{}),this.lookSensitivity=t.lookSensitivity||3,this._touches={},this._moveDX=0,this._moveDY=0,this._maxMoveRadius=56,this._bindEvents()}_el(e){return document.getElementById(e)}_bindEvents(){const e=this._el("move-stick-base"),t=this._el("look-area"),n=this._el("btn-fire"),i=this._el("btn-jump"),s=this._el("btn-burst"),r=this._el("btn-pause");if(!e||!t){console.warn("[TouchControls] mobile UI elements missing");return}e.addEventListener("touchstart",u=>{u.preventDefault(),u.stopPropagation();for(const d of u.changedTouches){if(this._anyKind("move"))continue;const h=e.getBoundingClientRect();this._touches[d.identifier]={kind:"move",baseX:h.left+h.width/2,baseY:h.top+h.height/2},this._updateMoveFromTouch(d)}},{passive:!1}),t.addEventListener("touchstart",u=>{u.preventDefault(),u.stopPropagation();for(const d of u.changedTouches)this._anyKind("look")||(this._touches[d.identifier]={kind:"look",lastX:d.clientX,lastY:d.clientY})},{passive:!1});const a=u=>{let d=!1;for(const h of u.changedTouches){const f=this._touches[h.identifier];if(f){if(d=!0,f.kind==="move")this._updateMoveFromTouch(h);else if(f.kind==="look"){const g=h.clientX-f.lastX,_=h.clientY-f.lastY;f.lastX=h.clientX,f.lastY=h.clientY;const m=Math.sqrt(g*g+_*_),p=1+Math.min(2,m/30);this.input._mouseDeltaX+=g*this.lookSensitivity*p,this.input._mouseDeltaY+=_*this.lookSensitivity*p,this.input.mouse.locked=!0}}}d&&u.preventDefault()},l=u=>{for(const d of u.changedTouches){const h=this._touches[d.identifier];h&&(h.kind==="move"&&(this._moveDX=0,this._moveDY=0,this.input.analogMove=null,this.input._touchSprint=!1,this._renderKnob()),delete this._touches[d.identifier])}};document.addEventListener("touchmove",a,{passive:!1}),document.addEventListener("touchend",l,{passive:!1}),document.addEventListener("touchcancel",l,{passive:!1});const c=(u,d,h)=>{if(!u)return;u.addEventListener("touchstart",g=>{g.preventDefault(),g.stopPropagation(),u.classList.add("pressed"),d()},{passive:!1});const f=g=>{u.classList.remove("pressed"),h&&h()};u.addEventListener("touchend",f,{passive:!1}),u.addEventListener("touchcancel",f,{passive:!1})};c(n,()=>{this.input.mouse.leftDown=!0},()=>{this.input.mouse.leftDown=!1}),c(i,()=>{this.input.keys.space||(this.input._jumpRequested=!0),this.input.keys.space=!0},()=>{this.input.keys.space=!1}),s&&s.addEventListener("touchstart",u=>{u.preventDefault(),u.stopPropagation(),s.classList.add("pressed"),this.onSandBurst(),setTimeout(()=>s.classList.remove("pressed"),120)},{passive:!1}),r&&r.addEventListener("touchstart",u=>{u.preventDefault(),u.stopPropagation(),this.onPause()},{passive:!1})}_anyKind(e){for(const t in this._touches)if(this._touches[t].kind===e)return!0;return!1}_updateMoveFromTouch(e){const t=this._touches[e.identifier];if(!t)return;let n=e.clientX-t.baseX,i=e.clientY-t.baseY;const s=Math.sqrt(n*n+i*i);s>this._maxMoveRadius&&(n=n/s*this._maxMoveRadius,i=i/s*this._maxMoveRadius),this._moveDX=n,this._moveDY=i;const r=n/this._maxMoveRadius,a=i/this._maxMoveRadius,l=Math.min(1,s/this._maxMoveRadius);l<Yv?(this.input.analogMove=null,this.input._touchSprint=!1):(this.input.analogMove={x:r,z:a,magnitude:l},this.input._touchSprint=l>jv),this._renderKnob()}_renderKnob(){const e=this._el("move-stick-knob");e&&(e.style.transform=`translate(calc(-50% + ${this._moveDX}px), calc(-50% + ${this._moveDY}px))`)}}const Wr=typeof window<"u"?new URLSearchParams(window.location.search):null,$v=Wr&&Wr.get("touch")==="1",Zv=typeof window<"u"&&window.matchMedia?window.matchMedia("(pointer: coarse)").matches:!1,vn=$v||Zv||typeof window<"u"&&("ontouchstart"in window||navigator.maxTouchPoints&&navigator.maxTouchPoints>0);vn&&(document.documentElement.classList.add("touch-mode"),document.body&&document.body.classList.add("touch-mode"));let Ye,Nn,ti,Lt,Q,De,_t,Ze,mi,xt,Un,Ar,Cr,Xo=0,Rr=0;const ah=document.getElementById("fps-counter");let Pr=0,yt="MENU";document.addEventListener("DOMContentLoaded",async()=>{const o=document.getElementById("game-canvas");if(!o){console.error("Canvas not found");return}const e=await Vv();vn&&document.body&&document.body.classList.add("touch-mode");const t=()=>{if(!vn)return;const R=window.innerHeight>window.innerWidth;document.body.classList.toggle("portrait",R)};t(),window.addEventListener("resize",t),window.addEventListener("orientationchange",t),Ye=new O_(o),Nn=new z_,De=new bv,ti=new k_(Ye.camera,Nn),Lt=new Sv(Ye.scene),Lt.sand&&ti.addCollisionObject(Lt.sand),Q=new wv(Ye.scene,Lt,Nn,ti),_t=new Nv(Ye.camera,De),Q.dialogue=_t,Q.audio=De;let n=!1,i=null,s=null;Q._onDeath=()=>{if(console.log("💀 Crab died — starting death sequence"),Le=!1,Q.hasResurrection){yt="DEAD";const R=document.getElementById("death-overlay");R&&R.classList.add("dying");const B=["belong-to-the-deep.mp3","sink-without-fear.mp3"],G=B[Math.floor(Math.random()*B.length)],X=_t&&_t.audioBuffers?_t.audioBuffers[G]:null;X&&X instanceof AudioBuffer&&De.playDeathDialogueWithEcho(X),i=setTimeout(()=>{console.log("🔥 RESURRECTION RAGE MODE!"),_t&&(_t.clearAll(),_t.isRageLocked=!0),De&&De.stopDeathDialogueWithEcho&&De.stopDeathDialogueWithEcho(),De&&De.playRageResurrectSound&&De.playRageResurrectSound(),R&&R.classList.remove("dying"),Q._onRageLand=()=>{_t&&(_t.isRageLocked=!1),Q.triggerRageBurst(xt,De),Q._onRageLand=null},Q.activateRage(),Ze&&Ze.enterRageMode(),r(),yt="PLAYING";try{o.requestPointerLock()}catch{}},2e3)}else{yt="DEAD";const R=["belong-to-the-deep.mp3","sink-without-fear.mp3"],B=R[Math.floor(Math.random()*R.length)];(()=>{const ne=_t&&_t.audioBuffers?_t.audioBuffers[B]:null;ne&&ne instanceof AudioBuffer?De.playDeathDialogueWithEcho(ne):ne&&De&&De.ctx&&De.ctx.decodeAudioData(ne.slice(0)).then(Re=>{De.playDeathDialogueWithEcho(Re)}).catch(()=>{})})();const X=document.getElementById("death-overlay");X&&X.classList.add("dying");const ce={wave:xt.currentWave||0,kills:xt.totalKills||0,coins:Q.totalCoinsCollected||0},J=Wv(ce);s=setTimeout(()=>{if(n)return;n=!0;try{document.exitPointerLock()}catch{}const ne=document.getElementById("death-wave"),Re=document.getElementById("death-kills"),j=document.getElementById("death-coins");ne&&(ne.textContent=ce.wave),Re&&(Re.textContent=ce.kills),j&&(j.textContent=ce.coins);const ee=document.querySelector("#death-window .death-subtitle");ee&&window.playerName&&(ee.textContent=`${window.playerName}, the abyss has claimed you`);const _e=document.getElementById("death-window");_e&&_e.classList.add("visible"),J.then(()=>T("death-leaderboard",3))},7e3)}};function r(){let R=document.getElementById("rage-bar-container");if(!R){R=document.createElement("div"),R.id="rage-bar-container",R.style.cssText="position:fixed; top:24px; left:50%; transform:translateX(-50%); width:320px; height:10px; background:rgba(0,0,0,0.6); border-radius:5px; z-index:20; pointer-events:none; border:1px solid rgba(255,50,0,0.5);";const B=document.createElement("div");B.id="rage-bar-fill",B.style.cssText="height:100%; width:100%; background:linear-gradient(90deg, #FF2200, #FF6600, #FF2200); border-radius:5px; transition:width 0.1s linear;",R.appendChild(B);const G=document.createElement("div");G.style.cssText="position:absolute; top:-18px; left:50%; transform:translateX(-50%); color:#FF4400; font-size:12px; font-weight:bold; letter-spacing:2px; text-transform:uppercase; text-shadow:0 0 8px #FF2200;",G.textContent="🔥 RAGE",R.appendChild(G),document.body.appendChild(R)}R.style.display="block"}function a(){if(!Q.isRaging||Q._ragePhase!=="active")return;const R=document.getElementById("rage-bar-fill");if(R){const B=Math.max(0,Q.rageTimer/Q.rageDuration*100);R.style.width=`${B}%`}}function l(){const R=document.getElementById("rage-bar-container");R&&(R.style.display="none")}if(Ze=new Tv(Ye.scene,De),mi=new Pv(Ye.scene),xt=new Dv(Ye.scene,Lt,De,_t),xt.crab=Q,window.enemyManager=xt,window.crab=Q,window.world=Lt,window.audio=De,window.weapons=Ze,Wr){const R=parseInt(Wr.get("startWave"),10);Number.isFinite(R)&&R>1&&(xt.currentWave=R-1,R>=6&&xt._lazyLoadCthulhu(),R>=4&&xt._lazyLoadBoss())}Un=new Iv(Ye.scene,Lt,De),Un.dialogue=_t,Un.crab=Q,Ar=new Bv(Ye.scene),Cr=new Fv;const c=document.getElementById("main-menu"),u=document.getElementById("how-to-play"),d=document.getElementById("ui-layer"),h="cota_playerName",f=document.getElementById("name-entry-overlay"),g=document.getElementById("player-name-input"),_=document.getElementById("btn-name-confirm"),m=document.getElementById("player-name-badge"),p=R=>{const B=String(R||"").trim().slice(0,20);if(!B)return!1;window.playerName=B;try{sessionStorage.setItem(h,B)}catch{}return m&&(m.textContent=`Playing as ${B}`),!0},v=()=>{if(!p(g.value)){g.focus();return}f.classList.add("hidden"),c.classList.remove("hidden")};let y="";try{y=sessionStorage.getItem(h)||""}catch{}if(e&&e.username?(p(e.username),f&&f.classList.add("hidden"),c.classList.remove("hidden")):y?(p(y),f&&f.classList.add("hidden"),c.classList.remove("hidden")):(f&&f.classList.remove("hidden"),c.classList.add("hidden"),setTimeout(()=>{g&&g.focus()},100)),_){let R=!1;const B=G=>{R||(R=!0,G&&G.preventDefault&&G.preventDefault(),v(),setTimeout(()=>{R=!1},400))};_.addEventListener("pointerdown",B),_.addEventListener("click",B)}g&&g.addEventListener("keydown",R=>{R.key==="Enter"&&(R.preventDefault(),v())});const x=R=>String(R).replace(/[&<>"']/g,B=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[B]);function P(R,B,G){return`
      <div class="leaderboard-row${G?" you":""}">
        <div class="lb-rank">${R}</div>
        <div class="lb-name">${x(B.name||"Anonymous")}</div>
        <div class="lb-num">${B.wave||0}</div>
        <div class="lb-num">${B.kills||0}</div>
        <div class="lb-num">${B.coins||0}</div>
      </div>
    `}async function T(R,B=10){const G=document.getElementById(R);if(!G)return;G.innerHTML='<div class="leaderboard-title">Loading…</div>';const X=await Xv(B),ce=window.playerName,J=X.some(ie=>ce&&ie.name===ce);let ne=null,Re=null;if(ce&&!J){const ie=await qv();ie&&(ne=ie.entry,Re=ie.rank)}const j=`<div class="leaderboard-title">Top ${B} Survivors</div>`;if(!X.length){G.innerHTML=`${j}<div class="leaderboard-empty">No runs yet — be the first.</div>`;return}const ee=`
      <div class="leaderboard-row header">
        <div class="lb-rank">#</div><div>Name</div>
        <div class="lb-num">Wave</div><div class="lb-num">Kills</div><div class="lb-num">Coins</div>
      </div>
    `,_e=X.map((ie,Xe)=>{const Fe=ce&&ie.name===ce;return P(Xe+1,ie,Fe)}).join("");let Ae="";ne&&Re&&(Ae=`
        <div class="leaderboard-divider">⋯ Your rank ⋯</div>
        ${P(Re,ne,!0)}
      `),G.innerHTML=`${j}${ee}${_e}${Ae}`}const A=document.getElementById("btn-play"),D=document.getElementById("btn-retry"),w=document.getElementById("btn-how-to-play"),M=document.getElementById("btn-back"),I=document.getElementById("btn-death-retry");vn&&new Kv(Nn,{onPause:()=>{yt==="PLAYING"&&(Le=!1,Nn.mouse.leftDown=!1,yt="MENU",c.classList.remove("hidden"),d.style.display="none",A.textContent="RESUME GAME",D&&(D.style.display="inline-block"))},onSandBurst:()=>{yt==="PLAYING"&&Q&&Q.triggerSandBurst&&Q.triggerSandBurst(xt,De)},lookSensitivity:1});const L=()=>{const R=document.getElementById("death-window");R&&R.classList.remove("visible");const B=document.getElementById("death-overlay");B&&(B.classList.remove("dying"),B.style.opacity="0");const G=document.getElementById("low-health-overlay");G&&(G.style.opacity="0");const X=document.getElementById("damage-overlay");if(X&&(X.style.opacity="0"),c.classList.add("hidden"),Q.reset(),xt.reset(),Un.reset(),mi.reset(),Ar.reset(),Cr.reset(),Ze.setWeapon&&Ze.setWeapon("pistol",1),De.stopWaveDrums&&De.stopWaveDrums(),Pr=0,De&&De.ctx){const ce=De.ctx.currentTime,J=(ne,Re)=>{if(ne)try{ne.gain.cancelScheduledValues(ce),ne.gain.setValueAtTime(ne.gain.value,ce),ne.gain.linearRampToValueAtTime(Re,ce+.4)}catch{}};J(De.oceanGain,.35),J(De.windGain,.08),J(De.scuttleGain,1)}n=!1,i&&(clearTimeout(i),i=null),s&&(clearTimeout(s),s=null),Ze&&Ze._isRageMode&&Ze.exitRageMode(),l(),d.style.display="flex",yt="PLAYING",vn||o.requestPointerLock()};let N=!1;const k=R=>{N||(N=!0,R&&R.preventDefault&&R.preventDefault(),L(),setTimeout(()=>{N=!1},600))};D&&(D.addEventListener("pointerdown",k),D.addEventListener("click",k)),I&&(I.addEventListener("pointerdown",k),I.addEventListener("click",k));const K=()=>{const R=c&&!c.classList.contains("hidden")||u&&!u.classList.contains("hidden")||document.getElementById("leaderboard-screen")&&!document.getElementById("leaderboard-screen").classList.contains("hidden")||document.getElementById("credits-screen")&&!document.getElementById("credits-screen").classList.contains("hidden")||document.getElementById("death-window")&&document.getElementById("death-window").classList.contains("visible")||document.getElementById("name-entry-overlay")&&!document.getElementById("name-entry-overlay").classList.contains("hidden");document.body.classList.toggle("in-modal",!!R)};K();const H=[c,u,document.getElementById("leaderboard-screen"),document.getElementById("credits-screen"),document.getElementById("death-window"),document.getElementById("name-entry-overlay")].filter(Boolean),te=new MutationObserver(K);for(const R of H)te.observe(R,{attributes:!0,attributeFilter:["class"]});const q=()=>{c.classList.add("hidden"),d.style.display="flex",setTimeout(()=>{yt="PLAYING",Q&&Q.loaded&&Q.dialogue&&!Q._hasSpokenIntro&&(Q._hasSpokenIntro=!0,setTimeout(()=>{Q.dialogue.speak(Q.model,"Time to clean up this beach.","hero",4)},500))},50)};let re=!1;const de=R=>{if(!re){re=!0,R&&R.preventDefault&&R.preventDefault();try{De.init&&De.init()}catch(B){console.warn("audio.init failed",B)}try{const B=De.resume&&De.resume();B&&typeof B.catch=="function"&&B.catch(()=>{})}catch(B){console.warn("audio.resume failed",B)}if(vn)try{q()}catch(B){console.error("startMobileSession failed",B),c.classList.add("hidden"),d.style.display="flex",yt="PLAYING"}else try{o.requestPointerLock()}catch{}setTimeout(()=>{re=!1},600)}};A.addEventListener("pointerdown",de),A.addEventListener("click",de),w.addEventListener("click",()=>{c.classList.add("hidden"),u.classList.remove("hidden")}),M.addEventListener("click",()=>{u.classList.add("hidden"),c.classList.remove("hidden")});const ve=document.getElementById("leaderboard-screen"),Be=document.getElementById("btn-leaderboard"),je=document.getElementById("btn-leaderboard-back");Be&&Be.addEventListener("click",()=>{c.classList.add("hidden"),ve.classList.remove("hidden"),T("full-leaderboard",50)}),je&&je.addEventListener("click",()=>{ve.classList.add("hidden"),c.classList.remove("hidden")});const $=document.getElementById("credits-screen"),oe=document.getElementById("btn-credits-link"),xe=document.getElementById("btn-credits-back");oe&&oe.addEventListener("click",()=>{c.classList.add("hidden"),$&&$.classList.remove("hidden")}),xe&&xe.addEventListener("click",()=>{$&&$.classList.add("hidden"),c.classList.remove("hidden")});const ue=document.querySelectorAll(".htp-tab"),Ce=document.querySelectorAll(".htp-page"),Ne=document.querySelectorAll(".htp-dot");ue.forEach(R=>{R.addEventListener("click",()=>{const B=R.dataset.tab;ue.forEach(G=>G.classList.remove("active")),Ce.forEach(G=>G.classList.remove("active")),Ne.forEach(G=>G.classList.remove("active")),R.classList.add("active"),document.getElementById("htp-"+B).classList.add("active"),document.querySelector(`.htp-dot[data-tab="${B}"]`).classList.add("active")})}),document.addEventListener("pointerlockchange",()=>{if(document.pointerLockElement===o)c.classList.add("hidden"),d.style.display="flex",setTimeout(()=>{yt="PLAYING",Q&&Q.loaded&&Q.dialogue&&!Q._hasSpokenIntro&&(Q._hasSpokenIntro=!0,setTimeout(()=>{Q.dialogue.speak(Q.model,"Time to clean up this beach.","hero",4)},500))},50);else{if(Le=!1,Q&&Q.isDead||yt==="UPGRADING")return;yt="MENU",c.classList.remove("hidden"),d.style.display="none",A.textContent="RESUME GAME",D&&(D.style.display="inline-block")}}),document.addEventListener("pointerlockerror",()=>{console.warn("Pointer lock failed. Please wait a second and try again."),A.textContent="TRY AGAIN"}),document.addEventListener("contextmenu",R=>{yt==="PLAYING"&&R.preventDefault()});let Le=!1,lt=!1;document.addEventListener("mousedown",R=>{yt==="PLAYING"&&(R.button===0?(Le=!0,Ze.stats.isCharge&&Ze.startCharge()):R.button===2&&Q.triggerSandBurst(xt,De))}),document.addEventListener("mouseup",R=>{if(R.button===0){if(Le&&Ze.stats.isCharge&&Q.loaded){const B=Ze.releaseCharge(Q.position,ti.yaw,Q.currentAmmo);if(B)if(B.outOfAmmo)_t&&Q.model&&(!Q._lastLowWaterVoice||Date.now()-Q._lastLowWaterVoice>5e3)&&(Q._lastLowWaterVoice=Date.now(),_t.speak(Q.model,"Need more water... hold on.","hero",3));else{Q.currentAmmo-=B.ammoCost;for(const G of B.projectiles)mi.spawn(G.position,G.velocity,G.damage,G.tier,G.options)}}Le=!1}});const Pe={top:new se(26333),horiz:new se(8900331),bottom:new se(16774614),sun:new se(16770229),fogColor:new se(8900331),fogDensity:.0035,sunLightColor:new se(16774373),sunLightIntensity:3,hemiSky:new se(8900331),hemiGround:new se(12759680),hemiIntensity:1,oceanTint:new se(1,1,1)},mt={top:new se(660789),horiz:new se(3822200),bottom:new se(1713472),sun:new se(13162751),fogColor:new se(2766936),fogDensity:.005,sunLightColor:new se(11585791),sunLightIntensity:1.4,hemiSky:new se(2766936),hemiGround:new se(1710632),hemiIntensity:.55,oceanTint:new se(.7,.8,1)},z={top:new se(3801088),horiz:new se(9048080),bottom:new se(4195589),sun:new se(16729156),fogColor:new se(3807770),fogDensity:.004,sunLightColor:new se(16746632),sunLightIntensity:1.6,hemiSky:new se(6691354),hemiGround:new se(2755082),hemiIntensity:.8,oceanTint:new se(1,.1,.1)};let Ke=0,Ge=0;const He=document.getElementById("lightning-overlay"),ye=(R,B,G,X)=>{R.r=B.r+(G.r-B.r)*X,R.g=B.g+(G.g-B.g)*X,R.b=B.b+(G.b-B.b)*X},nt=(R,B,G)=>R+(B-R)*G;function Ee(R,B){const G=xt&&xt._cthulhuAlive,X=Q&&Q.isRaging,ce=G||X?1:0;Ke<ce?Ke=Math.min(ce,Ke+R*.5):Ke>ce&&(Ke=Math.max(ce,Ke-R*.4));const J=X?z:mt;if(Ye.skyUniforms&&(ye(Ye.skyUniforms.topColor.value,Pe.top,J.top,Ke),ye(Ye.skyUniforms.horizonColor.value,Pe.horiz,J.horiz,Ke),ye(Ye.skyUniforms.bottomColor.value,Pe.bottom,J.bottom,Ke),ye(Ye.skyUniforms.sunColor.value,Pe.sun,J.sun,Ke)),Ye.scene.fog&&(ye(Ye.scene.fog.color,Pe.fogColor,J.fogColor,Ke),Ye.scene.fog.density=nt(Pe.fogDensity,J.fogDensity,Ke)),Ye.scene.background&&Ye.scene.background.isColor&&ye(Ye.scene.background,Pe.fogColor,J.fogColor,Ke),Ye.sunLight&&(ye(Ye.sunLight.color,Pe.sunLightColor,J.sunLightColor,Ke),Ye.sunLight.intensity=nt(Pe.sunLightIntensity,J.sunLightIntensity,Ke)),Ye.hemiLight&&(ye(Ye.hemiLight.color,Pe.hemiSky,J.hemiSky,Ke),ye(Ye.hemiLight.groundColor,Pe.hemiGround,J.hemiGround,Ke),Ye.hemiLight.intensity=nt(Pe.hemiIntensity,J.hemiIntensity,Ke)),Lt.ocean&&Lt.ocean.material&&Lt.ocean.material.uniforms.tintColor&&ye(Lt.ocean.material.uniforms.tintColor.value,Pe.oceanTint,J.oceanTint,Ke),Ke>.4&&G&&!X){if(Ge===0&&(Ge=B+.8+Math.random()*1.2),B>=Ge){const ne=Re=>setTimeout(()=>{He&&(He.classList.add("flash"),setTimeout(()=>He.classList.remove("flash"),80+Math.random()*70))},Re);ne(0),ne(90),ne(180),ne(280),Math.random()<.7&&ne(400),Math.random()<.4&&ne(520),setTimeout(()=>{De&&De.playThunderSound&&De.playThunderSound()},120+Math.random()*280),Math.random()<.45&&setTimeout(()=>{De&&De.playThunderSound&&De.playThunderSound()},700+Math.random()*600),Ge=B+1.2+Math.random()*2.6}}else G||(Ge=0,He&&He.classList.remove("flash"))}Ye.add({update:(R,B)=>{if(Ze.stats.isCharge&&(Ze._isCharging||Ze._isFiringHose)?(Q.walkSpeed=10,Q.runSpeed=10):(Q.walkSpeed=25,Q.runSpeed=45),Ee(R,B),De.updateListener(Ye.camera),Q.update(R,B,yt==="PLAYING"),Lt.update(R,B),Lt.ocean&&Lt.ocean.material.uniforms.cameraPos&&Lt.ocean.material.uniforms.cameraPos.value.copy(Ye.camera.position),yt!=="PLAYING")return;Q.loaded&&Q.model&&Ze.update(R,Q.position,ti.yaw);const G=vn?Nn.mouse.leftDown&&Q.loaded&&yt==="PLAYING":Le&&document.pointerLockElement&&Q.loaded;if(vn&&Ze&&Ze.stats&&Ze.stats.isCharge){if(G&&!lt)Ze.startCharge();else if(!G&&lt&&Q.loaded){const j=Ze.releaseCharge(Q.position,ti.yaw,Q.currentAmmo);if(j)if(j.outOfAmmo)_t&&Q.model&&!Q.isRaging&&(!Q._lastLowWaterVoice||Date.now()-Q._lastLowWaterVoice>5e3)&&(Q._lastLowWaterVoice=Date.now(),_t.speak(Q.model,"Need more water... hold on.","hero",3));else{Q.currentAmmo-=j.ammoCost;for(const ee of j.projectiles)mi.spawn(ee.position,ee.velocity,ee.damage,ee.tier,ee.options)}}}if(lt=G,G){const j=ti.yaw,ee=Ze.tryFire(Q.position,j,Q.currentAmmo);if(ee)if(ee.outOfAmmo)!Ze.stats.isCharge&&_t&&Q.model&&!Q.isRaging&&(!Q._lastLowWaterVoice||Date.now()-Q._lastLowWaterVoice>5e3)&&(Q._lastLowWaterVoice=Date.now(),_t.speak(Q.model,"Need more water... hold on.","hero",3));else{Q.currentAmmo-=ee.ammoCost;for(const _e of ee.projectiles)mi.spawn(_e.position,_e.velocity,_e.damage,_e.tier,_e.options)}}if(Q.loaded&&Q.model){const j=Ze.getHoseProjectiles(R,ti.yaw);if(j&&j.projectiles&&j.projectiles.length>0)for(const ee of j.projectiles)mi.spawn(ee.position,ee.velocity,ee.damage,ee.tier,ee.options)}const X=mi.update(R,xt.enemies);for(const j of X)if(xt.damageEnemy(j.enemy,j.damage),yt==="PLAYING"){const ee=j.position.clone();ee.project(Ye.camera);const _e=(ee.x*.5+.5)*window.innerWidth,Ae=(ee.y*-.5+.5)*window.innerHeight;if(ee.z<1){const ie=document.createElement("div");ie.textContent=Math.round(j.damage),ie.style.position="fixed",ie.style.left=`${_e}px`,ie.style.top=`${Ae}px`,ie.style.pointerEvents="none",ie.style.fontWeight="900",ie.style.zIndex="20",ie.style.transform="translate(-50%, -50%)",ie.style.transition="all 0.5s ease-out",j.isCrit?(ie.style.fontSize="28px",ie.style.color="#ff3300",ie.style.textShadow="0 0 10px #ffaa00, 2px 2px 0px #000",ie.textContent=`${Math.round(j.damage)}!`):(ie.style.fontSize="18px",ie.style.color="#ffffff",ie.style.textShadow="1px 1px 0px #000"),document.body.appendChild(ie),setTimeout(()=>{ie.style.top=`${Ae-50}px`,ie.style.opacity="0",setTimeout(()=>ie.remove(),500)},10)}}const ce=Ar.update(R,Lt,Q);for(const j of ce)Q.takeDamage(j.damage);const J=xt.update(R,B,Q.position,Ye.camera,Un,yt==="PLAYING",Ar);Q.isRaging&&(Q.currentAmmo=Q.maxAmmo,a(),Q.isRaging||(Ze&&Ze.exitRageMode(),l())),!Q.isRaging&&Ze&&Ze._isRageMode&&(Ze.exitRageMode(),l()),xt.currentWave!==Pr&&(xt.currentWave>Pr&&De.playWaveDrums&&De.playWaveDrums(),Pr=xt.currentWave),J.waveJustCompleted&&De.stopWaveDrums&&De.stopWaveDrums(),J.damageToPlayer>0&&Q.takeDamage(J.damageToPlayer),_t.update(R),Un.update(R,B,xt);const ne=Un.position.clone();if(ne.x+=15,Q.coins>0&&Q.position.distanceTo(ne)<18){const j=Un.tryInteract(Q.coins);if(j>0){Q.coins-=j;const ee=document.getElementById("coin-count");ee&&(ee.textContent=Q.coins)}}if(J.coinsCollected>0&&Q.addCoins(J.coinsCollected),J.healthCollected>0&&(Q.health=Math.min(Q.maxHealth,Q.health+J.healthCollected)),J.waveJustCompleted&&Cr.onWaveComplete()&&(yt="UPGRADING",vn||document.exitPointerLock(),Le=!1,Cr.show(Q,Ze,Un).then(()=>{if(yt="PLAYING",!vn){const j=document.getElementById("game-canvas");j&&j.requestPointerLock()}})),Q.loaded&&Q.model){const j=Q.position,ee=Lt.getTerrainHeight(j.x,j.z),_e=Nn.getMovementInput();Math.abs(j.y-ee)<2&&_e.magnitude>0&&Lt.stampFootprint(j)}const Re=Nn.getMovementInput();De.update(R,Re.magnitude>0,Nn.isSprinting)}}),window.addEventListener("resize",()=>Ye.resize());let C=performance.now();function S(R){requestAnimationFrame(S);const B=Math.min((R-C)/1e3,.1);C=R,Ye.render(B),Xo++,Rr+=B,Rr>=1&&(ah&&(ah.textContent=`${Math.round(Xo/Rr)} FPS`),Xo=0,Rr=0)}requestAnimationFrame(S),console.log("🦀 Call Of The Abyss: A Crab's Last Stand — running")});
