import{N as O}from"./Thing-7kYSUujn.js";import{d as I,c as g,a as x,b as s,i as N,e as T,f,g as t,h as _,j as n,u as V,k as S,l as C,p as F,t as K,m as q,n as A,o as G,q as Y,r as J,s as Q,v as d,w as a,x as c,F as U,y as z,z as v,A as W,B as X}from"./index-BIBf3ml_.js";function Z(e){const{textColor2:r,cardColor:o,modalColor:l,popoverColor:u,dividerColor:m,borderRadius:h,fontSize:i,hoverColor:b}=e;return{textColor:r,color:o,colorHover:b,colorModal:l,colorHoverModal:g(l,b),colorPopover:u,colorHoverPopover:g(u,b),borderColor:m,borderColorModal:g(l,m),borderColorPopover:g(u,m),borderRadius:h,fontSize:i}}const oo={common:I,self:Z},eo=x([s("list",`
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
 `,[f("show-divider",[s("list-item",[x("&:not(:last-child)",[t("divider",`
 background-color: var(--n-merged-border-color);
 `)])])]),f("clickable",[s("list-item",`
 cursor: pointer;
 `)]),f("bordered",`
 border: 1px solid var(--n-merged-border-color);
 border-radius: var(--n-border-radius);
 `),f("hoverable",[s("list-item",`
 border-radius: var(--n-border-radius);
 `,[x("&:hover",`
 background-color: var(--n-merged-color-hover);
 `,[t("divider",`
 background-color: transparent;
 `)])])]),f("bordered, hoverable",[s("list-item",`
 padding: 12px 20px;
 `),t("header, footer",`
 padding: 12px 20px;
 `)]),t("header, footer",`
 padding: 12px 0;
 box-sizing: border-box;
 transition: border-color .3s var(--n-bezier);
 `,[x("&:not(:last-child)",`
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
 `,[t("prefix",`
 margin-right: 20px;
 flex: 0;
 `),t("suffix",`
 margin-left: 20px;
 flex: 0;
 `),t("main",`
 flex: 1;
 `),t("divider",`
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
 `))]),ro=Object.assign(Object.assign({},C.props),{size:{type:String,default:"medium"},bordered:Boolean,clickable:Boolean,hoverable:Boolean,showDivider:{type:Boolean,default:!0}}),$=G("n-list"),lo=_({name:"List",props:ro,slots:Object,setup(e){const{mergedClsPrefixRef:r,inlineThemeDisabled:o,mergedRtlRef:l}=V(e),u=S("List",l,r),m=C("List","-list",eo,oo,e,r);F($,{showDividerRef:K(e,"showDivider"),mergedClsPrefixRef:r});const h=q(()=>{const{common:{cubicBezierEaseInOut:b},self:{fontSize:k,textColor:R,color:P,colorModal:w,colorPopover:y,borderColor:D,borderColorModal:B,borderColorPopover:j,borderRadius:M,colorHover:L,colorHoverModal:E,colorHoverPopover:H}}=m.value;return{"--n-font-size":k,"--n-bezier":b,"--n-text-color":R,"--n-color":P,"--n-border-radius":M,"--n-border-color":D,"--n-border-color-modal":B,"--n-border-color-popover":j,"--n-color-modal":w,"--n-color-popover":y,"--n-color-hover":L,"--n-color-hover-modal":E,"--n-color-hover-popover":H}}),i=o?A("list",void 0,h,e):void 0;return{mergedClsPrefix:r,rtlEnabled:u,cssVars:o?void 0:h,themeClass:i==null?void 0:i.themeClass,onRender:i==null?void 0:i.onRender}},render(){var e;const{$slots:r,mergedClsPrefix:o,onRender:l}=this;return l==null||l(),n("ul",{class:[`${o}-list`,this.rtlEnabled&&`${o}-list--rtl`,this.bordered&&`${o}-list--bordered`,this.showDivider&&`${o}-list--show-divider`,this.hoverable&&`${o}-list--hoverable`,this.clickable&&`${o}-list--clickable`,this.themeClass],style:this.cssVars},r.header?n("div",{class:`${o}-list__header`},r.header()):null,(e=r.default)===null||e===void 0?void 0:e.call(r),r.footer?n("div",{class:`${o}-list__footer`},r.footer()):null)}}),p=_({name:"ListItem",slots:Object,setup(){const e=Y($,null);return e||J("list-item","`n-list-item` must be placed in `n-list`."),{showDivider:e.showDividerRef,mergedClsPrefix:e.mergedClsPrefixRef}},render(){const{$slots:e,mergedClsPrefix:r}=this;return n("li",{class:`${r}-list-item`},e.prefix?n("div",{class:`${r}-list-item__prefix`},e.prefix()):null,e.default?n("div",{class:`${r}-list-item__main`},e):null,e.suffix?n("div",{class:`${r}-list-item__suffix`},e.suffix()):null,this.showDivider&&n("div",{class:`${r}-list-item__divider`}))}}),io=_({__name:"tf-main",setup(e){return(r,o)=>(z(),Q(U,null,[d(c(O),null,{default:a(()=>[v(W(r.$t("home.introduction")),1)]),_:1}),d(c(lo),null,{default:a(()=>[d(c(p),null,{default:a(()=>o[0]||(o[0]=[v("One Piece")])),_:1,__:[0]}),d(c(p),null,{default:a(()=>o[1]||(o[1]=[v("Lorcana")])),_:1,__:[1]}),d(c(p),null,{default:a(()=>o[2]||(o[2]=[v("Magic")])),_:1,__:[2]}),d(c(p),null,{default:a(()=>o[3]||(o[3]=[v("YuGiOh")])),_:1,__:[3]}),d(c(p),null,{default:a(()=>o[4]||(o[4]=[v("DnD")])),_:1,__:[4]})]),_:1})],64))}}),no=_({__name:"index",setup(e){return(r,o)=>(z(),X(io))}});export{no as default};
