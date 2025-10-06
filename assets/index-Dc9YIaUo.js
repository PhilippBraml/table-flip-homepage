import{N as E}from"./Thing-CeP3Cfjj.js";import{d as H,c as f,a as _,b as s,i as N,e as T,f as b,g as i,h as x,j as c,u as V,k as S,l as C,p as G,t as A,m as Z,n as F,o as K,q as U,r as W,s as q,v as n,w as a,x as d,F as Q,y,z as X,A as Y,B as m,C as J}from"./index-DAdcDXF2.js";function oo(e){const{textColor2:r,cardColor:o,modalColor:l,popoverColor:u,dividerColor:g,borderRadius:h,fontSize:t,hoverColor:v}=e;return{textColor:r,color:o,colorHover:v,colorModal:l,colorHoverModal:f(l,v),colorPopover:u,colorHoverPopover:f(u,v),borderColor:g,borderColorModal:f(l,g),borderColorPopover:f(u,g),borderRadius:h,fontSize:t}}const eo={common:H,self:oo},ro=_([s("list",`
 --n-merged-border-color: var(--n-border-color);
 --n-merged-color: var(--n-color);
 --n-merged-color-hover: var(--n-color-hover);
 margin: 0;
 font-size: var(--n-font-size);
 transition:
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 padding: 0;
 list-style-type: none;
 color: var(--n-text-color);
 background-color: var(--n-merged-color);
 `,[b("show-divider",[s("list-item",[_("&:not(:last-child)",[i("divider",`
 background-color: var(--n-merged-border-color);
 `)])])]),b("clickable",[s("list-item",`
 cursor: pointer;
 `)]),b("bordered",`
 border: 1px solid var(--n-merged-border-color);
 border-radius: var(--n-border-radius);
 `),b("hoverable",[s("list-item",`
 border-radius: var(--n-border-radius);
 `,[_("&:hover",`
 background-color: var(--n-merged-color-hover);
 `,[i("divider",`
 background-color: transparent;
 `)])])]),b("bordered, hoverable",[s("list-item",`
 padding: 12px 20px;
 `),i("header, footer",`
 padding: 12px 20px;
 `)]),i("header, footer",`
 padding: 12px 0;
 box-sizing: border-box;
 transition: border-color .3s var(--n-bezier);
 `,[_("&:not(:last-child)",`
 border-bottom: 1px solid var(--n-merged-border-color);
 `)]),s("list-item",`
 position: relative;
 padding: 12px 0; 
 box-sizing: border-box;
 display: flex;
 flex-wrap: nowrap;
 align-items: center;
 transition:
 background-color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 `,[i("prefix",`
 margin-right: 20px;
 flex: 0;
 `),i("suffix",`
 margin-left: 20px;
 flex: 0;
 `),i("main",`
 flex: 1;
 `),i("divider",`
 height: 1px;
 position: absolute;
 bottom: 0;
 left: 0;
 right: 0;
 background-color: transparent;
 transition: background-color .3s var(--n-bezier);
 pointer-events: none;
 `)])]),N(s("list",`
 --n-merged-color-hover: var(--n-color-hover-modal);
 --n-merged-color: var(--n-color-modal);
 --n-merged-border-color: var(--n-border-color-modal);
 `)),T(s("list",`
 --n-merged-color-hover: var(--n-color-hover-popover);
 --n-merged-color: var(--n-color-popover);
 --n-merged-border-color: var(--n-border-color-popover);
 `))]),lo=Object.assign(Object.assign({},C.props),{size:{type:String,default:"medium"},bordered:Boolean,clickable:Boolean,hoverable:Boolean,showDivider:{type:Boolean,default:!0}}),k=K("n-list"),to=x({name:"List",props:lo,slots:Object,setup(e){const{mergedClsPrefixRef:r,inlineThemeDisabled:o,mergedRtlRef:l}=V(e),u=S("List",l,r),g=C("List","-list",ro,eo,e,r);G(k,{showDividerRef:A(e,"showDivider"),mergedClsPrefixRef:r});const h=Z(()=>{const{common:{cubicBezierEaseInOut:v},self:{fontSize:w,textColor:z,color:$,colorModal:R,colorPopover:B,borderColor:D,borderColorModal:P,borderColorPopover:M,borderRadius:j,colorHover:I,colorHoverModal:L,colorHoverPopover:O}}=g.value;return{"--n-font-size":w,"--n-bezier":v,"--n-text-color":z,"--n-color":$,"--n-border-radius":j,"--n-border-color":D,"--n-border-color-modal":P,"--n-border-color-popover":M,"--n-color-modal":R,"--n-color-popover":B,"--n-color-hover":I,"--n-color-hover-modal":L,"--n-color-hover-popover":O}}),t=o?F("list",void 0,h,e):void 0;return{mergedClsPrefix:r,rtlEnabled:u,cssVars:o?void 0:h,themeClass:t==null?void 0:t.themeClass,onRender:t==null?void 0:t.onRender}},render(){var e;const{$slots:r,mergedClsPrefix:o,onRender:l}=this;return l==null||l(),c("ul",{class:[`${o}-list`,this.rtlEnabled&&`${o}-list--rtl`,this.bordered&&`${o}-list--bordered`,this.showDivider&&`${o}-list--show-divider`,this.hoverable&&`${o}-list--hoverable`,this.clickable&&`${o}-list--clickable`,this.themeClass],style:this.cssVars},r.header?c("div",{class:`${o}-list__header`},r.header()):null,(e=r.default)===null||e===void 0?void 0:e.call(r),r.footer?c("div",{class:`${o}-list__footer`},r.footer()):null)}}),p=x({name:"ListItem",slots:Object,setup(){const e=U(k,null);return e||W("list-item","`n-list-item` must be placed in `n-list`."),{showDivider:e.showDividerRef,mergedClsPrefix:e.mergedClsPrefixRef}},render(){const{$slots:e,mergedClsPrefix:r}=this;return c("li",{class:`${r}-list-item`},e.prefix?c("div",{class:`${r}-list-item__prefix`},e.prefix()):null,e.default?c("div",{class:`${r}-list-item__main`},e):null,e.suffix?c("div",{class:`${r}-list-item__suffix`},e.suffix()):null,this.showDivider&&c("div",{class:`${r}-list-item__divider`}))}}),so="/table-flip-homepage/assets/onepiece_tcg-DihSsBQE.webp",io="/table-flip-homepage/assets/lorcana_tcg-B_UnkWzf.webp",no="/table-flip-homepage/assets/Magicthegathering-logo-Cp0AZpUX.svg",ao="/table-flip-homepage/assets/yugioh_tcg-CGI5tBWZ.png",co="/table-flip-homepage/assets/digimon_tcg-BIIsdoOt.png",mo="/table-flip-homepage/assets/DungeonsAndDragons_Logo-C87lGoZO.svg",po=x({__name:"tf-main",setup(e){return(r,o)=>(y(),q(Q,null,[n(d(E),{style:{"align-self":"center"}},{default:a(()=>[X(Y(r.$t("home.introduction")),1)]),_:1}),n(d(to),null,{default:a(()=>[n(d(p),null,{default:a(()=>o[0]||(o[0]=[m("img",{src:so,alt:"One Piece",style:{width:"100px",height:"auto",display:"block",margin:"0 auto"}},null,-1)])),_:1,__:[0]}),n(d(p),null,{default:a(()=>o[1]||(o[1]=[m("img",{src:io,alt:"Lorcana",style:{width:"100px",height:"auto",display:"block",margin:"0 auto"}},null,-1)])),_:1,__:[1]}),n(d(p),null,{default:a(()=>o[2]||(o[2]=[m("img",{src:no,alt:"Magic The Gathering",style:{width:"100px",height:"auto",display:"block",margin:"0 auto"}},null,-1)])),_:1,__:[2]}),n(d(p),null,{default:a(()=>o[3]||(o[3]=[m("img",{src:ao,alt:"Yu-Gi-Oh!",style:{width:"100px",height:"auto",display:"block",margin:"0 auto"}},null,-1)])),_:1,__:[3]}),n(d(p),null,{default:a(()=>o[4]||(o[4]=[m("img",{src:co,alt:"Digimon",style:{width:"100px",height:"auto",display:"block",margin:"0 auto"}},null,-1)])),_:1,__:[4]}),n(d(p),null,{default:a(()=>o[5]||(o[5]=[m("img",{src:mo,alt:"Dungeons and Dragons",style:{width:"100px",height:"auto",display:"block",margin:"0 auto"}},null,-1)])),_:1,__:[5]})]),_:1})],64))}}),vo=x({__name:"index",setup(e){return(r,o)=>(y(),J(po))}});export{vo as default};
