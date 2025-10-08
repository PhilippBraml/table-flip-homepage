import{N as O}from"./Thing-BYA4EVJI.js";import{d as E,c as h,a as _,b as c,i as G,e as H,f as b,g as u,h as x,j as m,u as N,k as T,l as y,p as S,t as V,m as K,n as A,o as F,q as W,r as U,s as Z,v as o,w as r,x as i,F as J,y as C,z as Q,A as X,B as Y,C as a,D as ee}from"./index-D3CSZZHy.js";function oe(t){const{textColor2:l,cardColor:e,modalColor:s,popoverColor:p,dividerColor:g,borderRadius:f,fontSize:d,hoverColor:v}=t;return{textColor:l,color:e,colorHover:v,colorModal:s,colorHoverModal:h(s,v),colorPopover:p,colorHoverPopover:h(p,v),borderColor:g,borderColorModal:h(s,g),borderColorPopover:h(p,g),borderRadius:f,fontSize:d}}const re={common:E,self:oe},te=_([c("list",`
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
 `,[b("show-divider",[c("list-item",[_("&:not(:last-child)",[u("divider",`
 background-color: var(--n-merged-border-color);
 `)])])]),b("clickable",[c("list-item",`
 cursor: pointer;
 `)]),b("bordered",`
 border: 1px solid var(--n-merged-border-color);
 border-radius: var(--n-border-radius);
 `),b("hoverable",[c("list-item",`
 border-radius: var(--n-border-radius);
 `,[_("&:hover",`
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
 `,[_("&:not(:last-child)",`
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
 `))]),le=Object.assign(Object.assign({},y.props),{size:{type:String,default:"medium"},bordered:Boolean,clickable:Boolean,hoverable:Boolean,showDivider:{type:Boolean,default:!0}}),k=F("n-list"),se=x({name:"List",props:le,slots:Object,setup(t){const{mergedClsPrefixRef:l,inlineThemeDisabled:e,mergedRtlRef:s}=N(t),p=T("List",s,l),g=y("List","-list",te,re,t,l);S(k,{showDividerRef:V(t,"showDivider"),mergedClsPrefixRef:l});const f=K(()=>{const{common:{cubicBezierEaseInOut:v},self:{fontSize:w,textColor:z,color:B,colorModal:D,colorPopover:R,borderColor:P,borderColorModal:$,borderColorPopover:L,borderRadius:q,colorHover:j,colorHoverModal:M,colorHoverPopover:I}}=g.value;return{"--n-font-size":w,"--n-bezier":v,"--n-text-color":z,"--n-color":B,"--n-border-radius":q,"--n-border-color":P,"--n-border-color-modal":$,"--n-border-color-popover":L,"--n-color-modal":D,"--n-color-popover":R,"--n-color-hover":j,"--n-color-hover-modal":M,"--n-color-hover-popover":I}}),d=e?A("list",void 0,f,t):void 0;return{mergedClsPrefix:l,rtlEnabled:p,cssVars:e?void 0:f,themeClass:d==null?void 0:d.themeClass,onRender:d==null?void 0:d.onRender}},render(){var t;const{$slots:l,mergedClsPrefix:e,onRender:s}=this;return s==null||s(),m("ul",{class:[`${e}-list`,this.rtlEnabled&&`${e}-list--rtl`,this.bordered&&`${e}-list--bordered`,this.showDivider&&`${e}-list--show-divider`,this.hoverable&&`${e}-list--hoverable`,this.clickable&&`${e}-list--clickable`,this.themeClass],style:this.cssVars},l.header?m("div",{class:`${e}-list__header`},l.header()):null,(t=l.default)===null||t===void 0?void 0:t.call(l),l.footer?m("div",{class:`${e}-list__footer`},l.footer()):null)}}),n=x({name:"ListItem",slots:Object,setup(){const t=W(k,null);return t||U("list-item","`n-list-item` must be placed in `n-list`."),{showDivider:t.showDividerRef,mergedClsPrefix:t.mergedClsPrefixRef}},render(){const{$slots:t,mergedClsPrefix:l}=this;return m("li",{class:`${l}-list-item`},t.prefix?m("div",{class:`${l}-list-item__prefix`},t.prefix()):null,t.default?m("div",{class:`${l}-list-item__main`},t):null,t.suffix?m("div",{class:`${l}-list-item__suffix`},t.suffix()):null,this.showDivider&&m("div",{class:`${l}-list-item__divider`}))}}),ie="/table-flip-homepage/assets/onepiece_tcg-DihSsBQE.webp",ae="/table-flip-homepage/assets/Pok%C3%A9mon_Trading_Card_Game_logo-BrKDB9tp.svg",ne="/table-flip-homepage/assets/gundam-C4VzJl1p.webp",de="/table-flip-homepage/assets/lorcana_tcg-B_UnkWzf.webp",ce="/table-flip-homepage/assets/riftbound_logo-CHjpdBNU.png",ue="/table-flip-homepage/assets/Magicthegathering_logo-Cp0AZpUX.svg",me="/table-flip-homepage/assets/Flesh_and_Blood_Logo-mKlSyq-W.webp",pe="/table-flip-homepage/assets/yugioh_tcg-CGI5tBWZ.png",ge="/table-flip-homepage/assets/digimon_tcg-BIIsdoOt.png",ve="/table-flip-homepage/assets/Star_Wars_Logo-CcDuecGK.webp",be="/table-flip-homepage/assets/DungeonsAndDragons_Logo-C87lGoZO.svg",fe=x({__name:"tf-main",setup(t){return(l,e)=>{const s=Q("RouterLink");return C(),Z(J,null,[o(i(O),{style:{"align-self":"center","max-width":"400px","white-space":"preserve","text-align":"center"}},{default:r(()=>[X(Y(l.$t("home.introduction")),1)]),_:1}),o(i(se),null,{default:r(()=>[o(i(n),null,{default:r(()=>[o(s,{to:{name:"/events",query:{tcg:"onepiece"}}},{default:r(()=>e[0]||(e[0]=[a("img",{src:ie,alt:"One Piece",style:{width:"100px",height:"auto",display:"block",margin:"0 auto"}},null,-1)])),_:1,__:[0]})]),_:1}),o(i(n),null,{default:r(()=>[o(s,{to:{name:"/events",query:{tcg:"pokemon"}}},{default:r(()=>e[1]||(e[1]=[a("img",{src:ae,alt:"Pokemon Trading Card Game",style:{width:"100px",height:"auto",display:"block",margin:"0 auto"}},null,-1)])),_:1,__:[1]})]),_:1}),o(i(n),null,{default:r(()=>[o(s,{to:{name:"/events",query:{tcg:"gundam"}}},{default:r(()=>e[2]||(e[2]=[a("img",{src:ne,alt:"Gundam",style:{width:"100px",height:"auto",display:"block",margin:"0 auto"}},null,-1)])),_:1,__:[2]})]),_:1}),o(i(n),null,{default:r(()=>[o(s,{to:{name:"/events",query:{tcg:"lorcana"}}},{default:r(()=>e[3]||(e[3]=[a("img",{src:de,alt:"Lorcana",style:{width:"100px",height:"auto",display:"block",margin:"0 auto"}},null,-1)])),_:1,__:[3]})]),_:1}),o(i(n),null,{default:r(()=>[o(s,{to:{name:"/events",query:{tcg:"riftbound"}}},{default:r(()=>e[4]||(e[4]=[a("img",{src:ce,alt:"Riftbound",style:{width:"100px",height:"auto",display:"block",margin:"0 auto"}},null,-1)])),_:1,__:[4]})]),_:1}),o(i(n),null,{default:r(()=>[o(s,{to:{name:"/events",query:{tcg:"mtg"}}},{default:r(()=>e[5]||(e[5]=[a("img",{src:ue,alt:"Magic The Gathering",style:{width:"100px",height:"auto",display:"block",margin:"0 auto"}},null,-1)])),_:1,__:[5]})]),_:1}),o(i(n),null,{default:r(()=>[o(s,{to:{name:"/events"}},{default:r(()=>e[6]||(e[6]=[a("img",{src:me,alt:"Flesh and Blood",style:{width:"100px",height:"auto",display:"block",margin:"0 auto"}},null,-1)])),_:1,__:[6]})]),_:1}),o(i(n),null,{default:r(()=>[o(s,{to:{name:"/events",query:{tcg:"ygo"}}},{default:r(()=>e[7]||(e[7]=[a("img",{src:pe,alt:"Yu-Gi-Oh!",style:{width:"100px",height:"auto",display:"block",margin:"0 auto"}},null,-1)])),_:1,__:[7]})]),_:1}),o(i(n),null,{default:r(()=>[o(s,{to:{name:"/events",query:{tcg:"digimon"}}},{default:r(()=>e[8]||(e[8]=[a("img",{src:ge,alt:"Digimon",style:{width:"100px",height:"auto",display:"block",margin:"0 auto"}},null,-1)])),_:1,__:[8]})]),_:1}),o(i(n),null,{default:r(()=>[o(s,{to:{name:"/events",query:{tcg:"starwars"}}},{default:r(()=>e[9]||(e[9]=[a("img",{src:ve,alt:"Digimon",style:{width:"100px",height:"auto",display:"block",margin:"0 auto"}},null,-1)])),_:1,__:[9]})]),_:1}),o(i(n),null,{default:r(()=>[o(s,{to:{name:"/events"}},{default:r(()=>e[10]||(e[10]=[a("img",{src:be,alt:"Dungeons and Dragons",style:{width:"100px",height:"auto",display:"block",margin:"0 auto"}},null,-1)])),_:1,__:[10]})]),_:1})]),_:1})],64)}}}),xe=x({__name:"index",setup(t){return(l,e)=>(C(),ee(fe))}});export{xe as default};
