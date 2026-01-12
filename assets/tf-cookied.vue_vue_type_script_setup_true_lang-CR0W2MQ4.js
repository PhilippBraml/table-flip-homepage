import{h as l,l as S,P as c,k as r,o as de,d as R,ac as le,p as se,N as ie,e as ce,M as be,O as ge,ad as ue,Q as b,ae as x,y as fe,u as j,R as ve,c as M,a2 as P,af as pe,A as he,ag as me,ah as z,ai as Ce,a1 as N,aj as xe,X as v,W as p,Y as O,_ as k,$,V as L,ak as F}from"./index-BK5CtlMl.js";import{r as ze}from"./replaceable-HhOzjDNt.js";const Se=ze("close",()=>l("svg",{viewBox:"0 0 12 12",version:"1.1",xmlns:"http://www.w3.org/2000/svg","aria-hidden":!0},l("g",{stroke:"none","stroke-width":"1",fill:"none","fill-rule":"evenodd"},l("g",{fill:"currentColor","fill-rule":"nonzero"},l("path",{d:"M2.08859116,2.2156945 L2.14644661,2.14644661 C2.32001296,1.97288026 2.58943736,1.95359511 2.7843055,2.08859116 L2.85355339,2.14644661 L6,5.293 L9.14644661,2.14644661 C9.34170876,1.95118446 9.65829124,1.95118446 9.85355339,2.14644661 C10.0488155,2.34170876 10.0488155,2.65829124 9.85355339,2.85355339 L6.707,6 L9.85355339,9.14644661 C10.0271197,9.32001296 10.0464049,9.58943736 9.91140884,9.7843055 L9.85355339,9.85355339 C9.67998704,10.0271197 9.41056264,10.0464049 9.2156945,9.91140884 L9.14644661,9.85355339 L6,6.707 L2.85355339,9.85355339 C2.65829124,10.0488155 2.34170876,10.0488155 2.14644661,9.85355339 C1.95118446,9.65829124 1.95118446,9.34170876 2.14644661,9.14644661 L5.293,6 L2.14644661,2.85355339 C1.97288026,2.67998704 1.95359511,2.41056264 2.08859116,2.2156945 L2.14644661,2.14644661 L2.08859116,2.2156945 Z"}))))),ye=S("base-close",`
 display: flex;
 align-items: center;
 justify-content: center;
 cursor: pointer;
 background-color: transparent;
 color: var(--n-close-icon-color);
 border-radius: var(--n-close-border-radius);
 height: var(--n-close-size);
 width: var(--n-close-size);
 font-size: var(--n-close-icon-size);
 outline: none;
 border: none;
 position: relative;
 padding: 0;
`,[c("absolute",`
 height: var(--n-close-icon-size);
 width: var(--n-close-icon-size);
 `),r("&::before",`
 content: "";
 position: absolute;
 width: var(--n-close-size);
 height: var(--n-close-size);
 left: 50%;
 top: 50%;
 transform: translateY(-50%) translateX(-50%);
 transition: inherit;
 border-radius: inherit;
 `),de("disabled",[r("&:hover",`
 color: var(--n-close-icon-color-hover);
 `),r("&:hover::before",`
 background-color: var(--n-close-color-hover);
 `),r("&:focus::before",`
 background-color: var(--n-close-color-hover);
 `),r("&:active",`
 color: var(--n-close-icon-color-pressed);
 `),r("&:active::before",`
 background-color: var(--n-close-color-pressed);
 `)]),c("disabled",`
 cursor: not-allowed;
 color: var(--n-close-icon-color-disabled);
 background-color: transparent;
 `),c("round",[r("&::before",`
 border-radius: 50%;
 `)])]),ke=R({name:"BaseClose",props:{isButtonTag:{type:Boolean,default:!0},clsPrefix:{type:String,required:!0},disabled:{type:Boolean,default:void 0},focusable:{type:Boolean,default:!0},round:Boolean,onClick:Function,absolute:Boolean},setup(o){return le("-base-close",ye,se(o,"clsPrefix")),()=>{const{clsPrefix:g,disabled:n,absolute:e,round:d,isButtonTag:s}=o;return l(s?"button":"div",{type:s?"button":void 0,tabindex:n||!o.focusable?-1:0,"aria-disabled":n,"aria-label":"close",role:s?void 0:"button",disabled:n,class:[`${g}-base-close`,e&&`${g}-base-close--absolute`,n&&`${g}-base-close--disabled`,d&&`${g}-base-close--round`],onMousedown:f=>{o.focusable||f.preventDefault()},onClick:o.onClick},l(ie,{clsPrefix:g},{default:()=>l(Se,null)}))}}}),$e={paddingSmall:"12px 16px 12px",paddingMedium:"19px 24px 20px",paddingLarge:"23px 32px 24px",paddingHuge:"27px 40px 28px",titleFontSizeSmall:"16px",titleFontSizeMedium:"18px",titleFontSizeLarge:"18px",titleFontSizeHuge:"18px",closeIconSize:"18px",closeSize:"22px"};function we(o){const{primaryColor:g,borderRadius:n,lineHeight:e,fontSize:d,cardColor:s,textColor2:h,textColor1:f,dividerColor:i,fontWeightStrong:a,closeIconColor:t,closeIconColorHover:u,closeIconColorPressed:y,closeColorHover:m,closeColorPressed:w,modalColor:B,boxShadow1:E,popoverColor:T,actionColor:C}=o;return Object.assign(Object.assign({},$e),{lineHeight:e,color:s,colorModal:B,colorPopover:T,colorTarget:g,colorEmbedded:C,colorEmbeddedModal:C,colorEmbeddedPopover:C,textColor:h,titleTextColor:f,borderColor:i,actionColor:C,titleFontWeight:a,closeColorHover:m,closeColorPressed:w,closeBorderRadius:n,closeIconColor:t,closeIconColorHover:u,closeIconColorPressed:y,fontSizeSmall:d,fontSizeMedium:d,fontSizeLarge:d,fontSizeHuge:d,boxShadow:E,borderRadius:n})}const Be={common:ce,self:we},Ee=r([S("card",`
 font-size: var(--n-font-size);
 line-height: var(--n-line-height);
 display: flex;
 flex-direction: column;
 width: 100%;
 box-sizing: border-box;
 position: relative;
 border-radius: var(--n-border-radius);
 background-color: var(--n-color);
 color: var(--n-text-color);
 word-break: break-word;
 transition: 
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 `,[ue({background:"var(--n-color-modal)"}),c("hoverable",[r("&:hover","box-shadow: var(--n-box-shadow);")]),c("content-segmented",[r(">",[b("content",{paddingTop:"var(--n-padding-bottom)"})])]),c("content-soft-segmented",[r(">",[b("content",`
 margin: 0 var(--n-padding-left);
 padding: var(--n-padding-bottom) 0;
 `)])]),c("footer-segmented",[r(">",[b("footer",{paddingTop:"var(--n-padding-bottom)"})])]),c("footer-soft-segmented",[r(">",[b("footer",`
 padding: var(--n-padding-bottom) 0;
 margin: 0 var(--n-padding-left);
 `)])]),r(">",[S("card-header",`
 box-sizing: border-box;
 display: flex;
 align-items: center;
 font-size: var(--n-title-font-size);
 padding:
 var(--n-padding-top)
 var(--n-padding-left)
 var(--n-padding-bottom)
 var(--n-padding-left);
 `,[b("main",`
 font-weight: var(--n-title-font-weight);
 transition: color .3s var(--n-bezier);
 flex: 1;
 min-width: 0;
 color: var(--n-title-text-color);
 `),b("extra",`
 display: flex;
 align-items: center;
 font-size: var(--n-font-size);
 font-weight: 400;
 transition: color .3s var(--n-bezier);
 color: var(--n-text-color);
 `),b("close",`
 margin: 0 0 0 8px;
 transition:
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 `)]),b("action",`
 box-sizing: border-box;
 transition:
 background-color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 background-clip: padding-box;
 background-color: var(--n-action-color);
 `),b("content","flex: 1; min-width: 0;"),b("content, footer",`
 box-sizing: border-box;
 padding: 0 var(--n-padding-left) var(--n-padding-bottom) var(--n-padding-left);
 font-size: var(--n-font-size);
 `,[r("&:first-child",{paddingTop:"var(--n-padding-bottom)"})]),b("action",`
 background-color: var(--n-action-color);
 padding: var(--n-padding-bottom) var(--n-padding-left);
 border-bottom-left-radius: var(--n-border-radius);
 border-bottom-right-radius: var(--n-border-radius);
 `)]),S("card-cover",`
 overflow: hidden;
 width: 100%;
 border-radius: var(--n-border-radius) var(--n-border-radius) 0 0;
 `,[r("img",`
 display: block;
 width: 100%;
 `)]),c("bordered",`
 border: 1px solid var(--n-border-color);
 `,[r("&:target","border-color: var(--n-color-target);")]),c("action-segmented",[r(">",[b("action",[r("&:not(:first-child)",{borderTop:"1px solid var(--n-border-color)"})])])]),c("content-segmented, content-soft-segmented",[r(">",[b("content",{transition:"border-color 0.3s var(--n-bezier)"},[r("&:not(:first-child)",{borderTop:"1px solid var(--n-border-color)"})])])]),c("footer-segmented, footer-soft-segmented",[r(">",[b("footer",{transition:"border-color 0.3s var(--n-bezier)"},[r("&:not(:first-child)",{borderTop:"1px solid var(--n-border-color)"})])])]),c("embedded",`
 background-color: var(--n-color-embedded);
 `)]),be(S("card",`
 background: var(--n-color-modal);
 `,[c("embedded",`
 background-color: var(--n-color-embedded-modal);
 `)])),ge(S("card",`
 background: var(--n-color-popover);
 `,[c("embedded",`
 background-color: var(--n-color-embedded-popover);
 `)]))]),Te={title:[String,Function],contentClass:String,contentStyle:[Object,String],headerClass:String,headerStyle:[Object,String],headerExtraClass:String,headerExtraStyle:[Object,String],footerClass:String,footerStyle:[Object,String],embedded:Boolean,segmented:{type:[Boolean,Object],default:!1},size:{type:String,default:"medium"},bordered:{type:Boolean,default:!0},closable:Boolean,hoverable:Boolean,role:String,onClose:[Function,Array],tag:{type:String,default:"div"},cover:Function,content:[String,Function],footer:Function,action:Function,headerExtra:Function},Pe=Object.assign(Object.assign({},j.props),Te),_=R({name:"Card",props:Pe,slots:Object,setup(o){const g=()=>{const{onClose:a}=o;a&&me(a)},{inlineThemeDisabled:n,mergedClsPrefixRef:e,mergedRtlRef:d}=fe(o),s=j("Card","-card",Ee,Be,o,e),h=ve("Card",d,e),f=M(()=>{const{size:a}=o,{self:{color:t,colorModal:u,colorTarget:y,textColor:m,titleTextColor:w,titleFontWeight:B,borderColor:E,actionColor:T,borderRadius:C,lineHeight:I,closeIconColor:H,closeIconColorHover:V,closeIconColorPressed:W,closeColorHover:D,closeColorPressed:K,closeBorderRadius:A,closeIconSize:U,closeSize:X,boxShadow:Y,colorPopover:q,colorEmbedded:Q,colorEmbeddedModal:Z,colorEmbeddedPopover:G,[P("padding",a)]:J,[P("fontSize",a)]:ee,[P("titleFontSize",a)]:oe},common:{cubicBezierEaseInOut:re}}=s.value,{top:te,left:ne,bottom:ae}=pe(J);return{"--n-bezier":re,"--n-border-radius":C,"--n-color":t,"--n-color-modal":u,"--n-color-popover":q,"--n-color-embedded":Q,"--n-color-embedded-modal":Z,"--n-color-embedded-popover":G,"--n-color-target":y,"--n-text-color":m,"--n-line-height":I,"--n-action-color":T,"--n-title-text-color":w,"--n-title-font-weight":B,"--n-close-icon-color":H,"--n-close-icon-color-hover":V,"--n-close-icon-color-pressed":W,"--n-close-color-hover":D,"--n-close-color-pressed":K,"--n-border-color":E,"--n-box-shadow":Y,"--n-padding-top":te,"--n-padding-bottom":ae,"--n-padding-left":ne,"--n-font-size":ee,"--n-title-font-size":oe,"--n-close-size":X,"--n-close-icon-size":U,"--n-close-border-radius":A}}),i=n?he("card",M(()=>o.size[0]),f,o):void 0;return{rtlEnabled:h,mergedClsPrefix:e,mergedTheme:s,handleCloseClick:g,cssVars:n?void 0:f,themeClass:i==null?void 0:i.themeClass,onRender:i==null?void 0:i.onRender}},render(){const{segmented:o,bordered:g,hoverable:n,mergedClsPrefix:e,rtlEnabled:d,onRender:s,embedded:h,tag:f,$slots:i}=this;return s==null||s(),l(f,{class:[`${e}-card`,this.themeClass,h&&`${e}-card--embedded`,{[`${e}-card--rtl`]:d,[`${e}-card--content${typeof o!="boolean"&&o.content==="soft"?"-soft":""}-segmented`]:o===!0||o!==!1&&o.content,[`${e}-card--footer${typeof o!="boolean"&&o.footer==="soft"?"-soft":""}-segmented`]:o===!0||o!==!1&&o.footer,[`${e}-card--action-segmented`]:o===!0||o!==!1&&o.action,[`${e}-card--bordered`]:g,[`${e}-card--hoverable`]:n}],style:this.cssVars,role:this.role},x(i.cover,a=>{const t=this.cover?z([this.cover()]):a;return t&&l("div",{class:`${e}-card-cover`,role:"none"},t)}),x(i.header,a=>{const{title:t}=this,u=t?z(typeof t=="function"?[t()]:[t]):a;return u||this.closable?l("div",{class:[`${e}-card-header`,this.headerClass],style:this.headerStyle,role:"heading"},l("div",{class:`${e}-card-header__main`,role:"heading"},u),x(i["header-extra"],y=>{const m=this.headerExtra?z([this.headerExtra()]):y;return m&&l("div",{class:[`${e}-card-header__extra`,this.headerExtraClass],style:this.headerExtraStyle},m)}),this.closable&&l(ke,{clsPrefix:e,class:`${e}-card-header__close`,onClick:this.handleCloseClick,absolute:!0})):null}),x(i.default,a=>{const{content:t}=this,u=t?z(typeof t=="function"?[t()]:[t]):a;return u&&l("div",{class:[`${e}-card__content`,this.contentClass],style:this.contentStyle,role:"none"},u)}),x(i.footer,a=>{const t=this.footer?z([this.footer()]):a;return t&&l("div",{class:[`${e}-card__footer`,this.footerClass],style:this.footerStyle,role:"none"},t)}),x(i.action,a=>{const t=this.action?z([this.action()]):a;return t&&l("div",{class:`${e}-card__action`,role:"none"},t)}))}}),Re=R({__name:"tf-cookied",props:{localstorageKey:{}},setup(o){const n=Ce(o.localstorageKey,"UNKOWN");return(e,d)=>v(n)==="UNKOWN"?(O(),N(v(_),{key:0,style:{"max-width":"700px","align-self":"center"}},{action:p(()=>[L(v(F),{style:{"margin-inline-end":"5px"},onClick:d[0]||(d[0]=s=>n.value="ACCEPTED")},{default:p(()=>[k($(e.$t("cookies.accept")),1)]),_:1}),L(v(F),{onClick:d[1]||(d[1]=s=>n.value="DECLINED")},{default:p(()=>[k($(e.$t("cookies.decline")),1)]),_:1})]),default:p(()=>[k($(e.$t("cookies.prompt"))+" ",1)]),_:1})):v(n)==="ACCEPTED"?xe(e.$slots,"default",{key:1}):(O(),N(v(_),{key:2,style:{"max-width":"700px","align-self":"center"}},{action:p(()=>[L(v(F),{onClick:d[2]||(d[2]=s=>n.value="UNKOWN")},{default:p(()=>[k($(e.$t("cookies.changeSettings")),1)]),_:1})]),default:p(()=>[k($(e.$t("cookies.declineText"))+" ",1)]),_:1}))}});export{Re as _};
