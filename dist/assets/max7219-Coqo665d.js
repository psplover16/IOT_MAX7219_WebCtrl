import{r as v,i as V,o as M,c as _,j as N,F as x,b as c,n as D,u as F,d as B,w as P,k as G,t as I,p as Q}from"./index-CWEHxLDz.js";import"./screenWidth-5dzakojF.js";import{_ as y}from"./_plugin-vue_export-helper-DlAUqK2U.js";const S=["data-col","data-row","data-tableNum"],W=16,A=8,$=8,U={__name:"func",props:{penMode:Number},emits:["getNoticeWord"],setup(T,{emit:h}){const p=T;v(0);const s=v([]),b=v(!1),i=n=>{b.value=n},f=(n,o,a)=>{b.value&&(s.value[n][o][a]=p.penMode)},g=()=>{const o=window.event.touches[0],a=o.clientX,l=o.clientY,u=document.elementFromPoint(a,l),d=u.getAttribute("data-col"),m=u.getAttribute("data-row"),C=u.getAttribute("data-tableNum");d&&f(C-1,m-1,d-1)},w=n=>{const o=n.clientX,a=n.clientY,l=document.elementFromPoint(o,a),u=l.getAttribute("data-col"),d=l.getAttribute("data-row"),m=l.getAttribute("data-tableNum");u&&f(m-1,d-1,u-1)},e=()=>{i(!1)},t=()=>{i(!0)},r=h,k=()=>{r("getNoticeWord",s.value)};return V(()=>{for(let n=0;n<W;n++){s.value[n]=s.value[n]||[];for(let o=0;o<$;o++){s.value[n][o]=s.value[n][o]||[];for(let a=0;a<A;a++)s.value[n][o][a]=0}}k()}),(n,o)=>(M(),_(x,null,N(W,a=>c("table",{border:"1",onTouchstart:o[0]||(o[0]=l=>i(!0)),onTouchend:o[1]||(o[1]=l=>i(!1)),onTouchmove:o[2]||(o[2]=l=>g()),onMousedown:t,onMouseup:e,onMousemove:w},[(M(),_(x,null,N($,l=>c("tr",null,[(M(),_(x,null,N(A,u=>{var d,m;return c("td",{"data-col":u,"data-row":l,"data-tableNum":a,class:D([(m=(d=s.value[a-1])==null?void 0:d[l-1])!=null&&m[u-1]?"bgred":"bgwhite"])},null,10,S)}),64))])),64))],32)),64))}},X=y(U,[["__scopeId","data-v-b252a309"]]),Y={class:"max7219"},q={class:"max7219View"},z={class:"btnGroup"},E={__name:"max7219",props:{msg:String},setup(T){const h=F(),p=v("max7219-mqtt1"),s=v(1),b=v(),i=e=>{b.value=e},f=()=>{const e=b.value,t=[];return t[0]=e[15],t[1]=e[14],t[2]=e[13],t[3]=e[12],t[4]=e[7],t[5]=e[6],t[6]=e[5],t[7]=e[4],t[8]=e[11],t[9]=e[10],t[10]=e[9],t[11]=e[8],t[12]=e[3],t[13]=e[2],t[14]=e[1],t[15]=e[0],t},g=e=>{let t="";for(let r=0;r<e.length;r++)Array.isArray(e[r])?t+=g(e[r]):t+=e[r];return t},w=()=>{console.log(g(f())),Q(p.value,g(f())),h.push("/")};return(e,t)=>(M(),_("div",Y,[c("div",q,[B(X,{penMode:s.value,onGetNoticeWord:i},null,8,["penMode"])]),c("div",z,[P(c("input",{type:"text","onUpdate:modelValue":t[0]||(t[0]=r=>p.value=r),placeholder:"pub至哪個MQTT"},null,512),[[G,p.value]]),c("button",{onClick:w},"send"),c("button",{onClick:t[1]||(t[1]=r=>s.value=s.value==1?0:1)},I(s.value==1?"pen":"eraser"),1),c("button",{onClick:t[2]||(t[2]=r=>e.$router.push("/"))},"back")])]))}},j=y(E,[["__scopeId","data-v-4772732c"]]);export{j as default};
