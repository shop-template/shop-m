import{u as P,i as F,j as l,k as q,o as i,c as b,a as e,b as o,w as s,T as R,n as S,C as D,p as m,d as N,t as T,h as d,q as U,B as E,s as j}from"./index.c2119dc6.js";import{p as z,s as A}from"./index.0b33c463.js";/* empty css               *//* empty css               *//* empty css               *//* empty css               */import{_ as G}from"./plugin-vue_export-helper.21dcd24c.js";const I={class:"page"},L={class:"form-box"},H=d("\u53D1\u9001\u9A8C\u8BC1\u7801"),J={key:1},K={class:"form-button-box"},M=d("\u6CE8\u518C"),O={class:"page-footer"},Q={class:"page-footer-wrap van-safe-area-bottom"},W=d("\u7528\u6237\u534F\u8BAE"),X={__name:"RegisterPage",setup(Y){const _=P();F();function k(){_.replace({path:"/login"})}function x(){_.replace({path:"/forget"})}const p=l(),v=l(""),f=l(""),r=l(!1),u=l(!0),c=q({time:60*1e3,onFinish:()=>{u.value=!0,c.reset()}});function y(){p.value.validate("phone").then(a=>{u.value=!1,c.start()}).catch(a=>{console.log(a)})}const V=a=>{if(console.log("submit",a),!r.value)return R.fail("\u8BF7\u9605\u8BFB\u5E76\u52FE\u9009\u7528\u6237\u534F\u8BAE"),!1};return(a,t)=>{const g=U,h=E,C=j,w=S,B=D;return i(),b("div",I,[e("div",L,[o(w,{ref_key:"logoForm",ref:p,onSubmit:V},{default:s(()=>[o(C,null,{default:s(()=>[o(g,{modelValue:v.value,"onUpdate:modelValue":t[0]||(t[0]=n=>v.value=n),name:"phone",label:"\u624B\u673A\u53F7",required:"",clearable:"",center:"",autocomplete:"tel",placeholder:"\u8BF7\u8F93\u5165\u624B\u673A\u53F7",rules:[{required:!0,message:"\u8BF7\u8F93\u5165\u624B\u673A\u53F7"},{pattern:m(z),message:"\u624B\u673A\u53F7\u683C\u5F0F\u6709\u8BEF"}]},null,8,["modelValue","rules"]),o(g,{modelValue:f.value,"onUpdate:modelValue":t[1]||(t[1]=n=>f.value=n),name:"sms",label:"\u77ED\u4FE1\u9A8C\u8BC1\u7801",required:"",clearable:"",center:"",autocomplete:"off",placeholder:"\u8BF7\u8F93\u5165\u77ED\u4FE1\u9A8C\u8BC1\u7801",rules:[{required:!0,message:"\u8BF7\u8F93\u5165\u77ED\u4FE1\u9A8C\u8BC1\u7801"},{pattern:m(A),message:"\u77ED\u4FE1\u9A8C\u8BC1\u7801\u683C\u5F0F\u6709\u8BEF"}]},{button:s(()=>[u.value?(i(),N(h,{key:0,size:"small",type:"primary",onClick:y},{default:s(()=>[H]),_:1})):(i(),b("div",J,T(m(c).current.value.seconds)+"\u79D2",1))]),_:1},8,["modelValue","rules"])]),_:1}),e("div",K,[o(h,{round:"",block:"",type:"primary","native-type":"submit"},{default:s(()=>[M]),_:1})])]),_:1},512)]),e("div",{class:"display-flex-between mg-small"},[e("div",{class:"button-text",onClick:k},"\u767B\u5F55"),e("div",{class:"button-text",onClick:x},"\u5FD8\u8BB0\u5BC6\u7801")]),e("div",O,[e("div",Q,[o(B,{modelValue:r.value,"onUpdate:modelValue":t[2]||(t[2]=n=>r.value=n)},{default:s(()=>[W]),_:1},8,["modelValue"])])])])}}};var ne=G(X,[["__scopeId","data-v-62c36c47"]]);export{ne as default};
