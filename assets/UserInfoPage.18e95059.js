import{u as pe,i as be,l as ye,y as we,J as Be,j as xe,o as k,c as ae,b as D,w as z,F as re,s as Ue,B as _e,a as Re,p as A,d as ie,f as Te,K as Oe,L as Ie,e as ke,h as De,T as F,I as Ae,U as Ce,H as Ee}from"./index.c2119dc6.js";/* empty css               *//* empty css               */import{_ as Pe}from"./plugin-vue_export-helper.21dcd24c.js";/*!
 * Compressor.js v1.1.1
 * https://fengyuanchen.github.io/compressorjs
 *
 * Copyright 2018-present Chen Fengyuan
 * Released under the MIT license
 *
 * Date: 2021-10-05T02:32:40.212Z
 */function ne(r,e){var t=Object.keys(r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(r);e&&(a=a.filter(function(o){return Object.getOwnPropertyDescriptor(r,o).enumerable})),t.push.apply(t,a)}return t}function C(r){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?arguments[e]:{};e%2?ne(Object(t),!0).forEach(function(a){je(r,a,t[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(t)):ne(Object(t)).forEach(function(a){Object.defineProperty(r,a,Object.getOwnPropertyDescriptor(t,a))})}return r}function Le(r,e){if(!(r instanceof e))throw new TypeError("Cannot call a class as a function")}function oe(r,e){for(var t=0;t<e.length;t++){var a=e[t];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(r,a.key,a)}}function Me(r,e,t){return e&&oe(r.prototype,e),t&&oe(r,t),r}function je(r,e,t){return e in r?Object.defineProperty(r,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):r[e]=t,r}function E(){return E=Object.assign||function(r){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(r[a]=t[a])}return r},E.apply(this,arguments)}var ce={exports:{}};(function(r){typeof window!="undefined"&&function(e){var t=e.HTMLCanvasElement&&e.HTMLCanvasElement.prototype,a=e.Blob&&function(){try{return Boolean(new Blob)}catch{return!1}}(),o=a&&e.Uint8Array&&function(){try{return new Blob([new Uint8Array(100)]).size===100}catch{return!1}}(),i=e.BlobBuilder||e.WebKitBlobBuilder||e.MozBlobBuilder||e.MSBlobBuilder,u=/^data:((.*?)(;charset=.*?)?)(;base64)?,/,c=(a||i)&&e.atob&&e.ArrayBuffer&&e.Uint8Array&&function(s){var l,f,h,m,g,n,d,v,w;if(l=s.match(u),!l)throw new Error("invalid data URI");for(f=l[2]?l[1]:"text/plain"+(l[3]||";charset=US-ASCII"),h=!!l[4],m=s.slice(l[0].length),h?g=atob(m):g=decodeURIComponent(m),n=new ArrayBuffer(g.length),d=new Uint8Array(n),v=0;v<g.length;v+=1)d[v]=g.charCodeAt(v);return a?new Blob([o?d:n],{type:f}):(w=new i,w.append(n),w.getBlob(f))};e.HTMLCanvasElement&&!t.toBlob&&(t.mozGetAsFile?t.toBlob=function(s,l,f){var h=this;setTimeout(function(){f&&t.toDataURL&&c?s(c(h.toDataURL(l,f))):s(h.mozGetAsFile("blob",l))})}:t.toDataURL&&c&&(t.msToBlob?t.toBlob=function(s,l,f){var h=this;setTimeout(function(){(l&&l!=="image/png"||f)&&t.toDataURL&&c?s(c(h.toDataURL(l,f))):s(h.msToBlob(l))})}:t.toBlob=function(s,l,f){var h=this;setTimeout(function(){s(c(h.toDataURL(l,f)))})})),r.exports?r.exports=c:e.dataURLtoBlob=c}(window)})(ce);var ze=ce.exports,Fe=function(e){return typeof Blob=="undefined"?!1:e instanceof Blob||Object.prototype.toString.call(e)==="[object Blob]"},se={strict:!0,checkOrientation:!0,maxWidth:1/0,maxHeight:1/0,minWidth:0,minHeight:0,width:void 0,height:void 0,resize:"none",quality:.8,mimeType:"auto",convertTypes:["image/png"],convertSize:5e6,beforeDraw:null,drew:null,success:null,error:null},He=typeof window!="undefined"&&typeof window.document!="undefined",B=He?window:{},P=function(e){return e>0&&e<1/0},We=Array.prototype.slice;function Se(r){return Array.from?Array.from(r):We.call(r)}var Ne=/^image\/.+$/;function H(r){return Ne.test(r)}function Ve(r){var e=H(r)?r.substr(6):"";return e==="jpeg"&&(e="jpg"),".".concat(e)}var fe=String.fromCharCode;function Xe(r,e,t){var a="",o;for(t+=e,o=e;o<t;o+=1)a+=fe(r.getUint8(o));return a}var Ge=B.btoa;function Ye(r,e){for(var t=[],a=8192,o=new Uint8Array(r);o.length>0;)t.push(fe.apply(null,Se(o.subarray(0,a)))),o=o.subarray(a);return"data:".concat(e,";base64,").concat(Ge(t.join("")))}function $e(r){var e=new DataView(r),t;try{var a,o,i;if(e.getUint8(0)===255&&e.getUint8(1)===216)for(var u=e.byteLength,c=2;c+1<u;){if(e.getUint8(c)===255&&e.getUint8(c+1)===225){o=c;break}c+=1}if(o){var s=o+4,l=o+10;if(Xe(e,s,4)==="Exif"){var f=e.getUint16(l);if(a=f===18761,(a||f===19789)&&e.getUint16(l+2,a)===42){var h=e.getUint32(l+4,a);h>=8&&(i=l+h)}}}if(i){var m=e.getUint16(i,a),g,n;for(n=0;n<m;n+=1)if(g=i+n*12+2,e.getUint16(g,a)===274){g+=8,t=e.getUint16(g,a),e.setUint16(g,1,a);break}}}catch{t=1}return t}function Ke(r){var e=0,t=1,a=1;switch(r){case 2:t=-1;break;case 3:e=-180;break;case 4:a=-1;break;case 5:e=90,a=-1;break;case 6:e=90;break;case 7:e=90,t=-1;break;case 8:e=-90;break}return{rotate:e,scaleX:t,scaleY:a}}var qe=/\.\d*(?:0|9){12}\d*$/;function le(r){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:1e11;return qe.test(r)?Math.round(r*e)/e:r}function I(r){var e=r.aspectRatio,t=r.height,a=r.width,o=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"none",i=P(a),u=P(t);if(i&&u){var c=t*e;(o==="contain"||o==="none")&&c>a||o==="cover"&&c<a?t=a/e:a=t*e}else i?t=a/e:u&&(a=t*e);return{width:a,height:t}}var Je=B.ArrayBuffer,ue=B.FileReader,x=B.URL||B.webkitURL,Qe=/\.\w+$/,Ze=B.Compressor,et=function(){function r(e,t){Le(this,r),this.file=e,this.image=new Image,this.options=C(C({},se),t),this.aborted=!1,this.result=null,this.init()}return Me(r,[{key:"init",value:function(){var t=this,a=this.file,o=this.options;if(!Fe(a)){this.fail(new Error("The first argument must be a File or Blob object."));return}var i=a.type;if(!H(i)){this.fail(new Error("The first argument must be an image File or Blob object."));return}if(!x||!ue){this.fail(new Error("The current browser does not support image compression."));return}if(Je||(o.checkOrientation=!1),x&&!o.checkOrientation)this.load({url:x.createObjectURL(a)});else{var u=new ue,c=o.checkOrientation&&i==="image/jpeg";this.reader=u,u.onload=function(s){var l=s.target,f=l.result,h={};if(c){var m=$e(f);m>1||!x?(h.url=Ye(f,i),m>1&&E(h,Ke(m))):h.url=x.createObjectURL(a)}else h.url=f;t.load(h)},u.onabort=function(){t.fail(new Error("Aborted to read the image with FileReader."))},u.onerror=function(){t.fail(new Error("Failed to read the image with FileReader."))},u.onloadend=function(){t.reader=null},c?u.readAsArrayBuffer(a):u.readAsDataURL(a)}}},{key:"load",value:function(t){var a=this,o=this.file,i=this.image;i.onload=function(){a.draw(C(C({},t),{},{naturalWidth:i.naturalWidth,naturalHeight:i.naturalHeight}))},i.onabort=function(){a.fail(new Error("Aborted to load the image."))},i.onerror=function(){a.fail(new Error("Failed to load the image."))},B.navigator&&/(?:iPad|iPhone|iPod).*?AppleWebKit/i.test(B.navigator.userAgent)&&(i.crossOrigin="anonymous"),i.alt=o.name,i.src=t.url}},{key:"draw",value:function(t){var a=this,o=t.naturalWidth,i=t.naturalHeight,u=t.rotate,c=u===void 0?0:u,s=t.scaleX,l=s===void 0?1:s,f=t.scaleY,h=f===void 0?1:f,m=this.file,g=this.image,n=this.options,d=document.createElement("canvas"),v=d.getContext("2d"),w=Math.abs(c)%180===90,_=(n.resize==="contain"||n.resize==="cover")&&P(n.width)&&P(n.height),y=Math.max(n.maxWidth,0)||1/0,R=Math.max(n.maxHeight,0)||1/0,T=Math.max(n.minWidth,0)||0,O=Math.max(n.minHeight,0)||0,U=o/i,p=n.width,b=n.height;if(w){var W=[R,y];y=W[0],R=W[1];var S=[O,T];T=S[0],O=S[1];var N=[b,p];p=N[0],b=N[1]}_&&(U=p/b);var V=I({aspectRatio:U,width:y,height:R},"contain");y=V.width,R=V.height;var X=I({aspectRatio:U,width:T,height:O},"cover");if(T=X.width,O=X.height,_){var G=I({aspectRatio:U,width:p,height:b},n.resize);p=G.width,b=G.height}else{var Y=I({aspectRatio:U,width:p,height:b}),$=Y.width;p=$===void 0?o:$;var K=Y.height;b=K===void 0?i:K}p=Math.floor(le(Math.min(Math.max(p,T),y))),b=Math.floor(le(Math.min(Math.max(b,O),R)));var he=-p/2,me=-b/2,ve=p,de=b,L=[];if(_){var q=0,J=0,M=o,j=i,Q=I({aspectRatio:U,width:o,height:i},{contain:"cover",cover:"contain"}[n.resize]);M=Q.width,j=Q.height,q=(o-M)/2,J=(i-j)/2,L.push(q,J,M,j)}if(L.push(he,me,ve,de),w){var Z=[b,p];p=Z[0],b=Z[1]}d.width=p,d.height=b,H(n.mimeType)||(n.mimeType=m.type);var ee="transparent";if(m.size>n.convertSize&&n.convertTypes.indexOf(n.mimeType)>=0&&(n.mimeType="image/jpeg"),n.mimeType==="image/jpeg"&&(ee="#fff"),v.fillStyle=ee,v.fillRect(0,0,p,b),n.beforeDraw&&n.beforeDraw.call(this,v,d),!this.aborted&&(v.save(),v.translate(p/2,b/2),v.rotate(c*Math.PI/180),v.scale(l,h),v.drawImage.apply(v,[g].concat(L)),v.restore(),n.drew&&n.drew.call(this,v,d),!this.aborted)){var te=function(ge){a.aborted||a.done({naturalWidth:o,naturalHeight:i,result:ge})};d.toBlob?d.toBlob(te,n.mimeType,n.quality):te(ze(d.toDataURL(n.mimeType,n.quality)))}}},{key:"done",value:function(t){var a=t.naturalWidth,o=t.naturalHeight,i=t.result,u=this.file,c=this.image,s=this.options;if(x&&!s.checkOrientation&&x.revokeObjectURL(c.src),i)if(s.strict&&i.size>u.size&&s.mimeType===u.type&&!(s.width>a||s.height>o||s.minWidth>a||s.minHeight>o||s.maxWidth<a||s.maxHeight<o))i=u;else{var l=new Date;i.lastModified=l.getTime(),i.lastModifiedDate=l,i.name=u.name,i.name&&i.type!==u.type&&(i.name=i.name.replace(Qe,Ve(i.type)))}else i=u;this.result=i,s.success&&s.success.call(this,i)}},{key:"fail",value:function(t){var a=this.options;if(a.error)a.error.call(this,t);else throw t}},{key:"abort",value:function(){this.aborted||(this.aborted=!0,this.reader?this.reader.abort():this.image.complete?this.fail(new Error("The compression process has been aborted.")):(this.image.onload=null,this.image.onabort()))}}],[{key:"noConflict",value:function(){return window.Compressor=Ze,r}},{key:"setDefaults",value:function(t){E(se,t)}}]),r}();const tt={class:"user-img-box",style:{width:"100%",display:"flex","justify-content":"flex-end"}},at=De("\u9000\u51FA"),rt={__name:"UserInfoPage",setup(r){const e=pe();be();const t=ye(),{userInfo:a}=we(t),o=Be(()=>[{title:"\u540D\u79F0",value:a.value.name,to:"/changeName"},{title:"\u4FEE\u6539\u5BC6\u7801",value:"",to:"/changePassword"},{title:"\u6211\u7684\u5730\u5740",value:"",to:"/addressList"}]),i=5*1024*1024,u=xe();function c(){u.value.chooseFile()}function s(m){const g=F.loading({message:"\u6587\u4EF6\u538B\u7F29\u4E2D..."});return new Promise(n=>{new et(m,{success:d=>{g.clear(),n(d)},error(d){console.log(d.message)}})})}function l(m){F("\u6587\u4EF6\u5927\u5C0F\u4E0D\u80FD\u8D85\u8FC7 5M")}function f(m){console.log(m),new FormData().append("file",m.file);const n=F.loading({message:"\u6587\u4EF6\u4E0A\u4F20\u4E2D..."});setTimeout(()=>{n.clear(),t.userInfo.headerImg=m.content},1e3)}function h(){t.loginOutFn().then(m=>{e.replace("/login")}).catch(m=>{console.log(m)})}return(m,g)=>{const n=Ae,d=Ce,v=Ee,w=Ue,_=_e;return k(),ae(re,null,[D(w,null,{default:z(()=>[D(v,{title:"\u5934\u50CF","is-link":"",center:"",onClick:c},{default:z(()=>[Re("div",tt,[A(a).headerImg?(k(),ie(n,{key:0,class:"user-img","lazy-load":"",src:A(a).headerImg},null,8,["src"])):Te("",!0),Oe(D(d,{ref_key:"userImgUploader",ref:u,"max-size":i,onOversize:l,"before-read":s,"after-read":f,"preview-size":"68"},null,512),[[Ie,!A(a).headerImg]])])]),_:1}),(k(!0),ae(re,null,ke(A(o),y=>(k(),ie(v,{title:y.title,value:y.value,to:y.to,"is-link":""},null,8,["title","value","to"]))),256))]),_:1}),D(_,{type:"primary",plain:"",block:"",color:"#fff",onClick:h,class:"button--text-blank_white-bg mgt-middle"},{default:z(()=>[at]),_:1})],64)}}};var ut=Pe(rt,[["__scopeId","data-v-441f2b78"]]);export{ut as default};
