import{u as N,i as R,j as s,k as E,l as I,o as u,c as v,a as l,b as t,w as n,T as $,m as j,n as z,C as G,F as H,e as J,d as f,p as b,t as K,h as g,q as M,s as O,B as Q,v as W}from"./index.c2119dc6.js";import{p as X,s as Y}from"./index.0b33c463.js";/* empty css               *//* empty css               *//* empty css               *//* empty css               */import{_ as Z}from"./plugin-vue_export-helper.21dcd24c.js";const ee={class:"page"},ae={class:"tabs-box"},te={class:"form-box"},oe=g("\u53D1\u9001\u9A8C\u8BC1\u7801"),se={key:1},le={class:"form-button-box"},ne=g("\u767B\u5F55"),re={class:"page-footer"},ue={class:"page-footer-wrap van-safe-area-bottom"},ce=g("\u7528\u6237\u534F\u8BAE"),de={__name:"LoginPage",setup(me){const c=N(),h=R();function B(){c.replace({path:"/register"})}function P(){c.replace({path:"/forget"})}const y=[{label:"\u9A8C\u8BC1\u7801\u767B\u5F55",value:1},{label:"\u5BC6\u7801\u767B\u5F55",value:0}],r=s(y[0].value),V=s(),x=s("aaa"),k=s("123456"),w=s(""),q=s(""),i=s(!0),p=s(!0),_=E({time:60*1e3,onFinish:()=>{p.value=!0,_.reset()}});function S(){V.value.validate("phone").then(o=>{p.value=!1,_.start()}).catch(o=>{console.log(o)})}const U=I(),L=o=>{if(!i.value)return $.fail("\u8BF7\u9605\u8BFB\u5E76\u52FE\u9009\u7528\u6237\u534F\u8BAE"),!1;let e;r.value===0?e={username:o.username,password:o.password,tabActive:r.value}:e={phone:o.phone,sms:o.sms,tabActive:r.value},U.loginInFn(e).then(d=>{h.query.from?c.push({name:h.query.from}):c.push({path:"/user"})}).catch(d=>{console.log(d)})};return(o,e)=>{const d=W,T=j,m=M,F=O,C=Q,A=z,D=G;return u(),v("div",ee,[l("div",ae,[t(T,{active:r.value,"onUpdate:active":e[0]||(e[0]=a=>r.value=a)},{default:n(()=>[(u(),v(H,null,J(y,a=>t(d,{key:a.value,title:a.label,name:a.value},null,8,["title","name"])),64))]),_:1},8,["active"])]),l("div",te,[t(A,{ref_key:"logoForm",ref:V,onSubmit:L},{default:n(()=>[r.value===0?(u(),f(F,{key:0},{default:n(()=>[t(m,{modelValue:x.value,"onUpdate:modelValue":e[1]||(e[1]=a=>x.value=a),name:"username",label:"\u7528\u6237\u540D",required:"",clearable:"",center:"",autocomplete:"username",placeholder:"\u8BF7\u8F93\u5165\u7528\u6237\u540D",rules:[{required:!0,message:"\u8BF7\u8F93\u5165\u7528\u6237\u540D"}]},null,8,["modelValue"]),t(m,{modelValue:k.value,"onUpdate:modelValue":e[2]||(e[2]=a=>k.value=a),type:"password",name:"password",label:"\u5BC6\u7801",required:"",clearable:"",center:"",autocomplete:"current-password",placeholder:"\u8BF7\u8F93\u5165\u5BC6\u7801",rules:[{required:!0,message:"\u8BF7\u8F93\u5165\u5BC6\u7801"}]},null,8,["modelValue"])]),_:1})):(u(),f(F,{key:1},{default:n(()=>[t(m,{modelValue:w.value,"onUpdate:modelValue":e[3]||(e[3]=a=>w.value=a),name:"phone",label:"\u624B\u673A\u53F7",required:"",clearable:"",center:"",autocomplete:"tel",placeholder:"\u8BF7\u8F93\u5165\u624B\u673A\u53F7",rules:[{required:!0,message:"\u8BF7\u8F93\u5165\u624B\u673A\u53F7"},{pattern:b(X),message:"\u624B\u673A\u53F7\u683C\u5F0F\u6709\u8BEF"}]},null,8,["modelValue","rules"]),t(m,{modelValue:q.value,"onUpdate:modelValue":e[4]||(e[4]=a=>q.value=a),name:"sms",label:"\u77ED\u4FE1\u9A8C\u8BC1\u7801",required:"",clearable:"",center:"",autocomplete:"off",placeholder:"\u8BF7\u8F93\u5165\u77ED\u4FE1\u9A8C\u8BC1\u7801",rules:[{required:!0,message:"\u8BF7\u8F93\u5165\u77ED\u4FE1\u9A8C\u8BC1\u7801"},{pattern:b(Y),message:"\u77ED\u4FE1\u9A8C\u8BC1\u7801\u683C\u5F0F\u6709\u8BEF"}]},{button:n(()=>[p.value?(u(),f(C,{key:0,size:"small",type:"primary",onClick:S},{default:n(()=>[oe]),_:1})):(u(),v("div",se,K(b(_).current.value.seconds)+"\u79D2",1))]),_:1},8,["modelValue","rules"])]),_:1})),l("div",le,[t(C,{round:"",block:"",type:"primary","native-type":"submit"},{default:n(()=>[ne]),_:1})])]),_:1},512)]),l("div",{class:"display-flex-between mg-small"},[l("div",{class:"button-text",onClick:B},"\u6CE8\u518C"),l("div",{class:"button-text",onClick:P},"\u5FD8\u8BB0\u5BC6\u7801")]),l("div",re,[l("div",ue,[t(D,{modelValue:i.value,"onUpdate:modelValue":e[5]||(e[5]=a=>i.value=a)},{default:n(()=>[ce]),_:1},8,["modelValue"])])])])}}};var he=Z(de,[["__scopeId","data-v-dbfc1cae"]]);export{he as default};