import{g as ie,E as se,l as le,s as ue,b as v,d as L,m as b,_ as g,j as t,V as l,n as ce,H as de,f as pe,o as P,i as X,k as fe,S as me,p as ve,q as he,e as ge,u as be,X as xe,v as we,w as ye,x as Ee,y as h,z as d,A as Ce,B as Y,D as G,r as k,F as je,G as Be,J as Se,K as Fe,M as _e,N as Te,O as q,P as y}from"./vendors.5f89d091.js";import{c as B,P as ke,B as j,C as Ne,a as Ae,b as Pe,d as De,t as I,T as He}from"./common.c7cd8a45.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))n(o);new MutationObserver(o=>{for(const i of o)if(i.type==="childList")for(const s of i.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&n(s)}).observe(document,{childList:!0,subtree:!0});function r(o){const i={};return o.integrity&&(i.integrity=o.integrity),o.referrerPolicy&&(i.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?i.credentials="include":o.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function n(o){if(o.ep)return;o.ep=!0;const i=r(o);fetch(o.href,i)}})();var Oe=`
/* H5 端隐藏 TabBar 空图标（只隐藏没有 src 的图标） */
.weui-tabbar__icon:not([src]),
.weui-tabbar__icon[src=''] {
  display: none !important;
}

.weui-tabbar__item:has(.weui-tabbar__icon:not([src])) .weui-tabbar__label,
.weui-tabbar__item:has(.weui-tabbar__icon[src='']) .weui-tabbar__label {
  margin-top: 0 !important;
}

/* Vite 错误覆盖层无法选择文本的问题 */
vite-error-overlay {
  /* stylelint-disable-next-line property-no-vendor-prefix */
  -webkit-user-select: text !important;
}

vite-error-overlay::part(window) {
  max-width: 90vw;
  padding: 10px;
}

.taro_page {
  overflow: auto;
}

::-webkit-scrollbar {
  width: 4px;
  height: 4px;
}

::-webkit-scrollbar-track {
  background: transparent;
}

::-webkit-scrollbar-thumb {
  background: rgba(0, 0, 0, 0.2);
  border-radius: 2px;
}

::-webkit-scrollbar-thumb:hover {
  background: rgba(0, 0, 0, 0.3);
}

/* H5 导航栏页面自动添加顶部间距 */
body.h5-navbar-visible .taro_page {
  padding-top: 44px;
}

body.h5-navbar-visible .toaster[data-position^="top"] {
  top: 44px !important;
}

/* Sheet 组件在 H5 导航栏下的位置修正 */
body.h5-navbar-visible .sheet-content:not([data-side="bottom"]) {
    top: 44px !important;
}

/*
 * H5 端 rem 适配：与小程序 rpx 缩放一致
 * 375px 屏幕：1rem = 16px，小程序 32rpx = 16px
 */
html {
    font-size: 4vw !important;
}

/* H5 端组件默认样式修复 */
taro-view-core {
    display: block;
}

taro-text-core {
    display: inline;
}

taro-input-core {
    display: block;
    width: 100%;
}

taro-input-core input {
    width: 100%;
    background: transparent;
    border: none;
    outline: none;
}

taro-input-core.taro-otp-hidden-input input {
    color: transparent;
    caret-color: transparent;
    -webkit-text-fill-color: transparent;
}

/* 全局按钮样式重置 */
taro-button-core,
button {
    margin: 0 !important;
    padding: 0 !important;
    line-height: inherit;
    display: flex;
    align-items: center;
    justify-content: center;
}

taro-button-core::after,
button::after {
    border: none;
}

taro-textarea-core > textarea,
.taro-textarea,
textarea.taro-textarea {
    resize: none !important;
}
`,Re=`
/* PC 宽屏适配 - 基础布局 */
@media (min-width: 769px) {
  html {
    font-size: 15px !important;
  }

  body {
    background-color: #f3f4f6 !important;
    display: flex !important;
    justify-content: center !important;
    align-items: center !important;
    min-height: 100vh !important;
  }
}
`,ze=`
/* PC 宽屏适配 - 手机框样式（有 TabBar 页面） */
@media (min-width: 769px) {
  .taro-tabbar__container {
    width: 375px !important;
    max-width: 375px !important;
    height: calc(100vh - 40px) !important;
    max-height: 900px !important;
    background-color: #fff !important;
    transform: translateX(0) !important;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.1) !important;
    border-radius: 20px !important;
    overflow: hidden !important;
    position: relative !important;
  }

  .taro-tabbar__panel {
    height: 100% !important;
    overflow: auto !important;
  }
}

/* PC 宽屏适配 - Toast 定位到手机框范围内 */
@media (min-width: 769px) {
  body .toaster {
    left: 50% !important;
    right: auto !important;
    width: 375px !important;
    max-width: 375px !important;
    transform: translateX(-50%) !important;
    box-sizing: border-box !important;
  }
}

/* PC 宽屏适配 - 手机框样式（无 TabBar 页面，通过 JS 添加 no-tabbar 类） */
@media (min-width: 769px) {
  body.no-tabbar #app {
    width: 375px !important;
    max-width: 375px !important;
    height: calc(100vh - 40px) !important;
    max-height: 900px !important;
    background-color: #fff !important;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.1) !important;
    border-radius: 20px !important;
    overflow: hidden !important;
    position: relative !important;
    transform: translateX(0) !important;
  }

  body.no-tabbar #app .taro_router {
    height: 100% !important;
    overflow: auto !important;
  }
}
`;function Le(){var a=document.createElement("style");a.innerHTML=Oe+Re+ze,document.head.appendChild(a)}function Ie(){var a=function(){var n=!!document.querySelector(".taro-tabbar__container");document.body.classList.toggle("no-tabbar",!n)};a();var e=new MutationObserver(a);e.observe(document.body,{childList:!0,subtree:!0})}function Ve(){Le(),Ie()}function Me(){var a=ie();if(a===se.WEAPP)try{var e=le(),r=e.miniProgram.envVersion;console.log("[Debug] envVersion:",r),r!=="release"&&ue({enableDebug:!0})}catch(n){console.error("[Debug] 开启调试模式失败:",n)}}var Ue={visible:!1,title:"",bgColor:"#ffffff",textStyle:"black",navStyle:"default",transparent:"none",leftIcon:"none"},We=function(){var e,r=P();return(r==null||(e=r.config)===null||e===void 0?void 0:e.window)||{}},$e=function(){var e,r,n=(e=P())===null||e===void 0||(e=e.config)===null||e===void 0?void 0:e.tabBar;return new Set((n==null||(r=n.list)===null||r===void 0?void 0:r.map(function(o){return o.pagePath}))||[])},V=function(){var e,r=P();return(r==null||(e=r.config)===null||e===void 0||(e=e.pages)===null||e===void 0?void 0:e[0])||"pages/index/index"},S=function(e){return e.replace(/^\//,"")},Xe=function(e,r,n,o){if(!e)return"none";var i=S(e),s=S(o),m=i===s,u=r.has(i)||r.has("/".concat(i)),p=n>1;return u||m?"none":p?"back":"home"},Ye=function(){var e=v.useState(Ue),r=L(e,2),n=r[0],o=r[1],i=v.useState(0),s=L(i,2),m=s[0],u=s[1],p=v.useCallback(function(){var c=b.getCurrentPages();if(c.length===0){o(function(oe){return g(g({},oe),{},{visible:!1})});return}var f=c[c.length-1],O=(f==null?void 0:f.route)||"";if(O){var x=(f==null?void 0:f.config)||{},w=We(),E=$e(),ne=V(),C=S(O),R=S(ne),te=C===R,ae=E.has(C)||E.has("/".concat(C)),z=E.size<=1&&c.length<=1&&(te||ae);o({visible:!z,title:document.title||x.navigationBarTitleText||w.navigationBarTitleText||"",bgColor:x.navigationBarBackgroundColor||w.navigationBarBackgroundColor||"#ffffff",textStyle:x.navigationBarTextStyle||w.navigationBarTextStyle||"black",navStyle:x.navigationStyle||w.navigationStyle||"default",transparent:x.transparentTitle||w.transparentTitle||"none",leftIcon:z?"none":Xe(C,E,c.length,R)})}},[]);b.useDidShow(function(){p()}),b.usePageScroll(function(c){var f=c.scrollTop;n.transparent==="auto"&&u(Math.min(f/100,1))}),v.useEffect(function(){var c=null,f=new MutationObserver(function(){c&&clearTimeout(c),c=setTimeout(function(){p()},50)});return f.observe(document.head,{subtree:!0,childList:!0,characterData:!0}),p(),function(){f.disconnect(),c&&clearTimeout(c)}},[p]);var T=n.visible&&n.navStyle!=="custom";if(v.useEffect(function(){T?document.body.classList.add("h5-navbar-visible"):document.body.classList.remove("h5-navbar-visible")},[T]),!T)return t.jsx(t.Fragment,{});var H=n.textStyle==="white"?"#fff":"#333",Q=n.textStyle==="white"?"text-white":"text-gray-800",Z=function(){return n.transparent==="always"?{backgroundColor:"transparent"}:n.transparent==="auto"?{backgroundColor:n.bgColor,opacity:m}:{backgroundColor:n.bgColor}},ee=function(){return b.navigateBack()},re=function(){var f=V();b.reLaunch({url:"/".concat(f)})};return t.jsxs(t.Fragment,{children:[t.jsxs(l,{className:"fixed top-0 left-0 right-0 h-11 flex items-center justify-center z-1000",style:Z(),children:[n.leftIcon==="back"&&t.jsx(l,{className:"absolute left-2 top-1/2 -translate-y-1/2 p-1 flex items-center justify-center",onClick:ee,children:t.jsx(ce,{size:24,color:H})}),n.leftIcon==="home"&&t.jsx(l,{className:"absolute left-2 top-1/2 -translate-y-1/2 p-1 flex items-center justify-center",onClick:re,children:t.jsx(de,{size:22,color:H})}),t.jsx(pe,{className:"text-base font-medium max-w-3/5 truncate ".concat(Q),children:n.title})]}),t.jsx(l,{className:"h-11 shrink-0"})]})},Ge=function(e){var r=e.children;return t.jsxs(t.Fragment,{children:[t.jsx(Ye,{}),r]})},qe=["className","variant"],Je=fe("inline-flex items-center rounded-full border px-3 py-1 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",{variants:{variant:{default:"border-transparent bg-primary text-primary-foreground hover:bg-primary hover:bg-opacity-80",secondary:"border-transparent bg-secondary text-secondary-foreground hover:bg-secondary hover:bg-opacity-80",destructive:"border-transparent bg-destructive text-destructive-foreground hover:bg-destructive hover:bg-opacity-80",outline:"text-foreground"}},defaultVariants:{variant:"default"}});function N(a){var e=a.className,r=a.variant,n=X(a,qe);return t.jsx(l,g({className:B(Je({variant:r}),e)},n))}var Ke=["className","children","orientation"],J=v.forwardRef(function(a,e){var r=a.className,n=a.children,o=a.orientation,i=o===void 0?"vertical":o,s=X(a,Ke),m=i==="horizontal"||i==="both",u=i==="vertical"||i==="both";return t.jsx(me,g(g({ref:e,className:B("relative",r),scrollY:u,scrollX:m,style:{overflowX:m?"auto":"hidden",overflowY:u?"auto":"hidden"}},s),{},{children:n}))});J.displayName="ScrollArea";var Qe={error:null,report:"",source:"",visible:!1,open:!1,timestamp:""},M="hsl(360, 100%, 45%)",U=!1,F=Qe,A=new Set,Ze=function(){A.forEach(function(e){return e()})},er=function(e){return A.add(e),function(){return A.delete(e)}},W=function(){return F},K=function(e){F=e,Ze()},rr=function(){var a=h(d().m(function e(r){var n,o,i,s,m;return d().w(function(u){for(;;)switch(u.p=u.n){case 0:if(typeof window!="undefined"){u.n=1;break}return u.a(2,!1);case 1:if(u.p=1,!((n=navigator.clipboard)!==null&&n!==void 0&&n.writeText)){u.n=3;break}return u.n=2,navigator.clipboard.writeText(r);case 2:return u.a(2,!0);case 3:u.n=5;break;case 4:u.p=4,s=u.v,console.warn("[H5ErrorBoundary] Clipboard API copy failed:",s);case 5:return u.p=5,o=document.createElement("textarea"),o.value=r,o.setAttribute("readonly","true"),o.style.position="fixed",o.style.opacity="0",document.body.appendChild(o),o.select(),i=document.execCommand("copy"),document.body.removeChild(o),u.a(2,i);case 6:return u.p=6,m=u.v,console.warn("[H5ErrorBoundary] Fallback copy failed:",m),u.a(2,!1)}},e,null,[[5,6],[1,4]])}));return function(r){return a.apply(this,arguments)}}(),nr=function(e){if(e instanceof Error)return e;if(typeof e=="string")return new Error(e);try{return new Error(JSON.stringify(e))}catch(r){return new Error(String(e))}},tr=function(e){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=["[H5 Runtime Error]","Time: ".concat(new Date().toISOString()),r.source?"Source: ".concat(r.source):"","Name: ".concat(e.name),"Message: ".concat(e.message),e.stack?`Stack:
`.concat(e.stack):"",r.componentStack?`Component Stack:
`.concat(r.componentStack):"",typeof navigator!="undefined"?"User Agent: ".concat(navigator.userAgent):""].filter(Boolean);return n.join(`

`)},$=function(e){F.visible&&K(g(g({},F),{},{open:e}))},D=function(e){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};if(typeof window!="undefined"){var n=nr(e),o=tr(n,r),i=new Date().toLocaleTimeString("zh-CN",{hour:"2-digit",minute:"2-digit",second:"2-digit"});K({error:n,report:o,source:r.source||"runtime",timestamp:i,visible:!0,open:!1}),console.error("[H5ErrorOverlay] Showing error overlay:",n,r)}},ar=function(e){var r=e.error||new Error(e.message||"Unknown H5 runtime error");D(r,{source:"window.error"})},or=function(e){D(e.reason,{source:"window.unhandledrejection"})},ir=function(){typeof window=="undefined"||U||(U=!0,window.addEventListener("error",ar),window.addEventListener("unhandledrejection",or))},sr=function(){var e,r,n=v.useSyncExternalStore(er,W,W);if(!n.visible)return null;var o=((e=n.error)===null||e===void 0?void 0:e.name)||"Error";return t.jsx(ke,{children:t.jsxs(l,{className:"pointer-events-none fixed inset-0 z-[2147483646]",children:[t.jsx(l,{className:"pointer-events-auto fixed bottom-5 left-5",children:t.jsx(j,{variant:"outline",size:"icon",className:B("h-11 w-11 rounded-full shadow-md transition-transform"),style:{backgroundColor:"hsl(359, 100%, 97%)",borderColor:"hsl(359, 100%, 94%)",color:M},onClick:function(){return $(!n.open)},children:t.jsx(ge,{size:22,color:M})})}),n.open&&t.jsx(l,{className:"pointer-events-none fixed inset-0 bg-white bg-opacity-15 supports-[backdrop-filter]:backdrop-blur-md",children:t.jsx(l,{className:"absolute inset-0 flex items-center justify-center px-4 py-4",children:t.jsx(l,{className:"w-full max-w-md",style:{width:"min(calc(100vw - 32px), var(--h5-phone-width, 390px))",height:"min(calc(100vh - 32px), 900px)"},children:t.jsx(Ne,{className:B("pointer-events-auto h-full rounded-2xl border border-border bg-background text-foreground shadow-2xl"),children:t.jsxs(l,{className:"relative flex h-full flex-col",children:[t.jsxs(Ae,{className:"gap-2 p-4 pb-2",children:[t.jsxs(l,{className:"flex items-start justify-between gap-3",children:[t.jsxs(l,{className:"flex flex-wrap items-center gap-2",children:[t.jsx(N,{variant:"destructive",className:"border-none bg-red-500 px-3 py-1 text-xs font-medium text-white",children:"Runtime Error"}),t.jsx(N,{variant:"outline",className:"px-3 py-1 text-xs",children:n.source})]}),t.jsxs(l,{className:"flex shrink-0 items-center gap-1",children:[t.jsx(j,{variant:"ghost",size:"icon",className:"h-8 w-8 rounded-full",onClick:function(){return window.location.reload()},children:t.jsx(be,{size:15,color:"inherit"})}),t.jsx(j,{variant:"ghost",size:"icon",className:"h-8 w-8 rounded-full",onClick:function(){return $(!1)},children:t.jsx(xe,{size:17,color:"inherit"})})]})]}),t.jsxs(l,{className:"flex items-center justify-between gap-3",children:[t.jsx(Pe,{className:"text-left text-lg",children:o}),t.jsxs(j,{variant:"outline",size:"sm",className:"shrink-0 rounded-lg",onClick:function(){var i=h(d().m(function m(){var u;return d().w(function(p){for(;;)switch(p.n){case 0:return p.n=1,rr(n.report);case 1:if(u=p.v,!u){p.n=2;break}return I.success("已复制错误信息",{description:"可发送给 Agent 进行自动修复",position:"top-center"}),p.a(2);case 2:I.warning("复制失败",{description:"请直接选中文本后手动复制。",position:"top-center"});case 3:return p.a(2)}},m)}));function s(){return i.apply(this,arguments)}return s}(),children:[t.jsx(we,{size:15,color:"inherit"}),t.jsx(l,{children:"复制错误"})]})]})]}),t.jsx(De,{className:"min-h-0 flex-1 overflow-hidden px-4 pb-4 pt-2",children:t.jsxs(l,{className:"flex h-full min-h-0 flex-col gap-2",children:[t.jsxs(l,{className:"flex flex-wrap items-center gap-x-4 gap-y-2 rounded-lg border border-border px-3 py-2 text-sm",children:[t.jsxs(l,{className:"flex items-center gap-2",children:[t.jsx(l,{className:"text-muted-foreground",children:"Error"}),t.jsx(l,{className:"font-medium text-foreground",children:((r=n.error)===null||r===void 0?void 0:r.name)||"Error"})]}),t.jsx(l,{className:"h-4 w-px bg-border"}),t.jsxs(l,{className:"flex items-center gap-2",children:[t.jsx(l,{className:"text-muted-foreground",children:"Source"}),t.jsx(l,{className:"font-medium text-foreground",children:n.source})]})]}),t.jsxs(l,{className:"min-h-0 flex flex-1 flex-col overflow-hidden rounded-xl border border-border bg-black text-white",children:[t.jsxs(l,{className:"flex items-center justify-between border-b border-white border-opacity-10 px-3 py-3",children:[t.jsx(l,{className:"text-xs font-medium uppercase tracking-wide text-zinc-400",children:"Full Report"}),t.jsx(N,{variant:"outline",className:"border-zinc-700 bg-transparent px-2 py-1 text-xs text-zinc-400",children:n.timestamp})]}),t.jsx(J,{className:"min-h-0 flex-1 w-full",orientation:"both",children:t.jsx(l,{className:"inline-block min-w-full whitespace-pre px-3 py-3 pb-8 font-mono text-xs leading-6 text-zinc-200",children:n.report})})]})]})})]})})})})})]})})},lr=function(a){function e(){var r;ye(this,e);for(var n=arguments.length,o=new Array(n),i=0;i<n;i++)o[i]=arguments[i];return r=Ee(this,e,[].concat(o)),r.state={error:null},r}return ve(e,a),he(e,[{key:"componentDidUpdate",value:function(n){this.state.error&&n.children!==this.props.children&&this.setState({error:null})}},{key:"componentDidCatch",value:function(n,o){D(n,{source:"React Error Boundary",componentStack:o.componentStack||""})}},{key:"render",value:function(){return t.jsxs(t.Fragment,{children:[t.jsx(sr,{}),this.state.error?null:this.props.children]})}}],[{key:"getDerivedStateFromError",value:function(n){return{error:n}}}])}(v.Component),ur=function(e){var r=e.children;return t.jsx(lr,{children:r})},cr=function(e){var r=e.children;return ir(),b.useLaunch(function(){Me(),Ve()}),t.jsx(ur,{children:t.jsx(Ge,{children:r})})},dr=function(e){var r=e.children;return t.jsxs(Ce,{defaultColor:"#000",defaultSize:24,children:[t.jsx(cr,{children:r}),t.jsx(He,{})]})},_=Y.__taroAppConfig={router:{mode:"hash"},pages:["pages/index/index","pages/ai-gardener/index","pages/course/index","pages/course-detail/index","pages/literacy/index"],window:{backgroundTextStyle:"light",navigationBarBackgroundColor:"#0f172a",navigationBarTitleText:"园丁",navigationBarTextStyle:"white"}};_.routes=[Object.assign({path:"pages/index/index",load:function(){var a=h(d().m(function r(n,o){var i;return d().w(function(s){for(;;)switch(s.n){case 0:return s.n=1,y(()=>import("./index.6b4d5a36.js"),["./index.6b4d5a36.js","./vendors.5f89d091.js","../css/vendors.8886af03.css","./common.c7cd8a45.js"],import.meta.url);case 1:return i=s.v,s.a(2,[i,n,o])}},r)}));function e(r,n){return a.apply(this,arguments)}return e}()},{navigationBarTitleText:"园丁",navigationBarBackgroundColor:"#0f172a",navigationBarTextStyle:"white"}),Object.assign({path:"pages/ai-gardener/index",load:function(){var a=h(d().m(function r(n,o){var i;return d().w(function(s){for(;;)switch(s.n){case 0:return s.n=1,y(()=>import("./index.22da7a12.js"),["./index.22da7a12.js","./vendors.5f89d091.js","../css/vendors.8886af03.css","./common.c7cd8a45.js"],import.meta.url);case 1:return i=s.v,s.a(2,[i,n,o])}},r)}));function e(r,n){return a.apply(this,arguments)}return e}()},{navigationBarTitleText:"AI 园丁",navigationBarBackgroundColor:"#0f172a",navigationBarTextStyle:"white"}),Object.assign({path:"pages/course/index",load:function(){var a=h(d().m(function r(n,o){var i;return d().w(function(s){for(;;)switch(s.n){case 0:return s.n=1,y(()=>import("./index.ba0dc96b.js"),["./index.ba0dc96b.js","./vendors.5f89d091.js","../css/vendors.8886af03.css","./common.c7cd8a45.js"],import.meta.url);case 1:return i=s.v,s.a(2,[i,n,o])}},r)}));function e(r,n){return a.apply(this,arguments)}return e}()},{navigationBarTitleText:"课程学习",navigationBarBackgroundColor:"#0f172a",navigationBarTextStyle:"white"}),Object.assign({path:"pages/course-detail/index",load:function(){var a=h(d().m(function r(n,o){var i;return d().w(function(s){for(;;)switch(s.n){case 0:return s.n=1,y(()=>import("./index.45e2b945.js"),["./index.45e2b945.js","./vendors.5f89d091.js","../css/vendors.8886af03.css","./common.c7cd8a45.js"],import.meta.url);case 1:return i=s.v,s.a(2,[i,n,o])}},r)}));function e(r,n){return a.apply(this,arguments)}return e}()},{navigationBarTitleText:"课程详情",navigationBarBackgroundColor:"#0f172a",navigationBarTextStyle:"white"}),Object.assign({path:"pages/literacy/index",load:function(){var a=h(d().m(function r(n,o){var i;return d().w(function(s){for(;;)switch(s.n){case 0:return s.n=1,y(()=>import("./index.56028d0c.js"),["./index.56028d0c.js","./vendors.5f89d091.js","../css/vendors.8886af03.css","./common.c7cd8a45.js"],import.meta.url);case 1:return i=s.v,s.a(2,[i,n,o])}},r)}));function e(r,n){return a.apply(this,arguments)}return e}()},{navigationBarTitleText:"素养提升",navigationBarBackgroundColor:"#0f172a",navigationBarTextStyle:"white"})];Object.assign(G,{findDOMNode:k.findDOMNode,render:k.render,unstable_batchedUpdates:k.unstable_batchedUpdates});je();var pr=Be(dr,q,G,_),fr=Se({window:Y});Fe(_);_e(fr,pr,_,q);Te({designWidth:750,deviceRatio:{375:2,640:1.17,750:1,828:.905},baseFontSize:20,unitPrecision:void 0,targetUnit:void 0});
