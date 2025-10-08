import{N as O}from"./Thing-CudV9i7l.js";import{d as E,c as _,a as h,b as c,i as G,e as H,f as b,g as u,h as x,j as m,u as N,k as T,l as y,p as S,t as V,m as K,n as A,o as F,q as W,r as U,s as Z,v as e,w as r,x as i,F as J,y as C,z as Q,A as X,B as Y,C as n,D as oo}from"./index-CbtgB5oQ.js";function eo(t){const{textColor2:l,cardColor:o,modalColor:s,popoverColor:g,dividerColor:p,borderRadius:f,fontSize:d,hoverColor:v}=t;return{textColor:l,color:o,colorHover:v,colorModal:s,colorHoverModal:_(s,v),colorPopover:g,colorHoverPopover:_(g,v),borderColor:p,borderColorModal:_(s,p),borderColorPopover:_(g,p),borderRadius:f,fontSize:d}}const ro={common:E,self:eo},to=h([c("list",`
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
 `,[b("show-divider",[c("list-item",[h("&:not(:last-child)",[u("divider",`
 background-color: var(--n-merged-border-color);
 `)])])]),b("clickable",[c("list-item",`
 cursor: pointer;
 `)]),b("bordered",`
 border: 1px solid var(--n-merged-border-color);
 border-radius: var(--n-border-radius);
 `),b("hoverable",[c("list-item",`
 border-radius: var(--n-border-radius);
 `,[h("&:hover",`
 background-color: var(--n-merged-color-hover);
 `,[u("divider",`
 background-color: transparent;
 `)])])]),b("bordered, hoverable",[c("list-item",`
 padding: 12px 20px;
 `),u("header, footer",`
 padding: 12px 20px;
 `)]),u("header, footer",`
 padding: 12px 0;
 box-sizing: border-box;
 transition: border-color .3s var(--n-bezier);
 `,[h("&:not(:last-child)",`
 border-bottom: 1px solid var(--n-merged-border-color);
 `)]),c("list-item",`
 position: relative;
 padding: 12px 0; 
 box-sizing: border-box;
 display: flex;
 flex-wrap: nowrap;
 align-items: center;
 transition:
 background-color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 `,[u("prefix",`
 margin-right: 20px;
 flex: 0;
 `),u("suffix",`
 margin-left: 20px;
 flex: 0;
 `),u("main",`
 flex: 1;
 `),u("divider",`
 height: 1px;
 position: absolute;
 bottom: 0;
 left: 0;
 right: 0;
 background-color: transparent;
 transition: background-color .3s var(--n-bezier);
 pointer-events: none;
 `)])]),G(c("list",`
 --n-merged-color-hover: var(--n-color-hover-modal);
 --n-merged-color: var(--n-color-modal);
 --n-merged-border-color: var(--n-border-color-modal);
 `)),H(c("list",`
 --n-merged-color-hover: var(--n-color-hover-popover);
 --n-merged-color: var(--n-color-popover);
 --n-merged-border-color: var(--n-border-color-popover);
 `))]),lo=Object.assign(Object.assign({},y.props),{size:{type:String,default:"medium"},bordered:Boolean,clickable:Boolean,hoverable:Boolean,showDivider:{type:Boolean,default:!0}}),k=F("n-list"),so=x({name:"List",props:lo,slots:Object,setup(t){const{mergedClsPrefixRef:l,inlineThemeDisabled:o,mergedRtlRef:s}=N(t),g=T("List",s,l),p=y("List","-list",to,ro,t,l);S(k,{showDividerRef:V(t,"showDivider"),mergedClsPrefixRef:l});const f=K(()=>{const{common:{cubicBezierEaseInOut:v},self:{fontSize:w,textColor:z,color:B,colorModal:D,colorPopover:R,borderColor:P,borderColorModal:$,borderColorPopover:L,borderRadius:q,colorHover:j,colorHoverModal:M,colorHoverPopover:I}}=p.value;return{"--n-font-size":w,"--n-bezier":v,"--n-text-color":z,"--n-color":B,"--n-border-radius":q,"--n-border-color":P,"--n-border-color-modal":$,"--n-border-color-popover":L,"--n-color-modal":D,"--n-color-popover":R,"--n-color-hover":j,"--n-color-hover-modal":M,"--n-color-hover-popover":I}}),d=o?A("list",void 0,f,t):void 0;return{mergedClsPrefix:l,rtlEnabled:g,cssVars:o?void 0:f,themeClass:d==null?void 0:d.themeClass,onRender:d==null?void 0:d.onRender}},render(){var t;const{$slots:l,mergedClsPrefix:o,onRender:s}=this;return s==null||s(),m("ul",{class:[`${o}-list`,this.rtlEnabled&&`${o}-list--rtl`,this.bordered&&`${o}-list--bordered`,this.showDivider&&`${o}-list--show-divider`,this.hoverable&&`${o}-list--hoverable`,this.clickable&&`${o}-list--clickable`,this.themeClass],style:this.cssVars},l.header?m("div",{class:`${o}-list__header`},l.header()):null,(t=l.default)===null||t===void 0?void 0:t.call(l),l.footer?m("div",{class:`${o}-list__footer`},l.footer()):null)}}),a=x({name:"ListItem",slots:Object,setup(){const t=W(k,null);return t||U("list-item","`n-list-item` must be placed in `n-list`."),{showDivider:t.showDividerRef,mergedClsPrefix:t.mergedClsPrefixRef}},render(){const{$slots:t,mergedClsPrefix:l}=this;return m("li",{class:`${l}-list-item`},t.prefix?m("div",{class:`${l}-list-item__prefix`},t.prefix()):null,t.default?m("div",{class:`${l}-list-item__main`},t):null,t.suffix?m("div",{class:`${l}-list-item__suffix`},t.suffix()):null,this.showDivider&&m("div",{class:`${l}-list-item__divider`}))}}),io="/assets/onepiece_tcg-DihSsBQE.webp",no="/assets/Pok%C3%A9mon_Trading_Card_Game_logo-BrKDB9tp.svg",ao="/assets/gundam-C4VzJl1p.webp",co="/assets/lorcana_tcg-B_UnkWzf.webp",uo="/assets/riftbound_logo-CHjpdBNU.png",mo="/assets/Magicthegathering_logo-Cp0AZpUX.svg",go="/assets/Flesh_and_Blood_Logo-mKlSyq-W.webp",po="/assets/yugioh_tcg-CGI5tBWZ.png",vo="/assets/digimon_tcg-BIIsdoOt.png",bo="/assets/Star_Wars_Logo-CcDuecGK.webp",fo="/assets/DungeonsAndDragons_Logo-C87lGoZO.svg",_o=x({__name:"tf-main",setup(t){return(l,o)=>{const s=Q("RouterLink");return C(),Z(J,null,[e(i(O),{style:{"align-self":"center","max-width":"400px","white-space":"preserve","text-align":"center"}},{default:r(()=>[X(Y(l.$t("home.introduction")),1)]),_:1}),e(i(so),null,{default:r(()=>[e(i(a),null,{default:r(()=>[e(s,{to:{name:"/events",query:{tcg:"onepiece"}}},{default:r(()=>o[0]||(o[0]=[n("img",{src:io,alt:"One Piece",style:{width:"100px",height:"auto",display:"block",margin:"0 auto"}},null,-1)])),_:1,__:[0]})]),_:1}),e(i(a),null,{default:r(()=>[e(s,{to:{name:"/events",query:{tcg:"pokemon"}}},{default:r(()=>o[1]||(o[1]=[n("img",{src:no,alt:"Pokemon Trading Card Game",style:{width:"100px",height:"auto",display:"block",margin:"0 auto"}},null,-1)])),_:1,__:[1]})]),_:1}),e(i(a),null,{default:r(()=>[e(s,{to:{name:"/events",query:{tcg:"gundam"}}},{default:r(()=>o[2]||(o[2]=[n("img",{src:ao,alt:"Gundam",style:{width:"100px",height:"auto",display:"block",margin:"0 auto"}},null,-1)])),_:1,__:[2]})]),_:1}),e(i(a),null,{default:r(()=>[e(s,{to:{name:"/events",query:{tcg:"lorcana"}}},{default:r(()=>o[3]||(o[3]=[n("img",{src:co,alt:"Lorcana",style:{width:"100px",height:"auto",display:"block",margin:"0 auto"}},null,-1)])),_:1,__:[3]})]),_:1}),e(i(a),null,{default:r(()=>[e(s,{to:{name:"/events",query:{tcg:"riftbound"}}},{default:r(()=>o[4]||(o[4]=[n("img",{src:uo,alt:"Riftbound",style:{width:"100px",height:"auto",display:"block",margin:"0 auto"}},null,-1)])),_:1,__:[4]})]),_:1}),e(i(a),null,{default:r(()=>[e(s,{to:{name:"/events",query:{tcg:"mtg"}}},{default:r(()=>o[5]||(o[5]=[n("img",{src:mo,alt:"Magic The Gathering",style:{width:"100px",height:"auto",display:"block",margin:"0 auto"}},null,-1)])),_:1,__:[5]})]),_:1}),e(i(a),null,{default:r(()=>[e(s,{to:{name:"/events"}},{default:r(()=>o[6]||(o[6]=[n("img",{src:go,alt:"Flesh and Blood",style:{width:"100px",height:"auto",display:"block",margin:"0 auto"}},null,-1)])),_:1,__:[6]})]),_:1}),e(i(a),null,{default:r(()=>[e(s,{to:{name:"/events",query:{tcg:"ygo"}}},{default:r(()=>o[7]||(o[7]=[n("img",{src:po,alt:"Yu-Gi-Oh!",style:{width:"100px",height:"auto",display:"block",margin:"0 auto"}},null,-1)])),_:1,__:[7]})]),_:1}),e(i(a),null,{default:r(()=>[e(s,{to:{name:"/events",query:{tcg:"digimon"}}},{default:r(()=>o[8]||(o[8]=[n("img",{src:vo,alt:"Digimon",style:{width:"100px",height:"auto",display:"block",margin:"0 auto"}},null,-1)])),_:1,__:[8]})]),_:1}),e(i(a),null,{default:r(()=>[e(s,{to:{name:"/events",query:{tcg:"starwars"}}},{default:r(()=>o[9]||(o[9]=[n("img",{src:bo,alt:"Digimon",style:{width:"100px",height:"auto",display:"block",margin:"0 auto"}},null,-1)])),_:1,__:[9]})]),_:1}),e(i(a),null,{default:r(()=>[e(s,{to:{name:"/events"}},{default:r(()=>o[10]||(o[10]=[n("img",{src:fo,alt:"Dungeons and Dragons",style:{width:"100px",height:"auto",display:"block",margin:"0 auto"}},null,-1)])),_:1,__:[10]})]),_:1})]),_:1})],64)}}}),yo=x({__name:"index",setup(t){return(l,o)=>(C(),oo(_o))}});export{yo as default};
