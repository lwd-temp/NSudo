(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{326:function(t,e,r){},327:function(t,e,r){},340:function(t,e,r){},348:function(t,e,r){"use strict";var a={computed:{footer:function(){return this.$themeConfig.footer||this.$themeLocaleConfig.footer||this.$site.themeConfig.footer||{}}}},o=(r(353),r(28)),n=Object(o.a)(a,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return t.footer.actor?r("div",{staticClass:"page-footer"},[r("ul",{staticClass:"inner"},[t.footer.createUpdate?r("li",[t._v("\n      Copyright © "+t._s(t.footer.createYear)+"-"+t._s((new Date).getFullYear())+"\n      "),t.footer.actorLink?r("a",{attrs:{href:t.footer.actorLink,target:"_blank",rel:"noopener noreferrer"}},[t._v(" "+t._s(t.footer.actor)+" ")]):t._e(),t._v(" and Contributors. All rights reserved.\n    ")]):t.footer.createYear?r("li",[t._v("\n      Copyright © "+t._s(t.footer.createYear)+" "),t.footer.actorLink?r("a",{attrs:{href:t.footer.actorLink,target:"_blank",rel:"noopener noreferrer"}},[t._v(" "+t._s(t.footer.actor)+" ")]):t._e(),t._v(" and Contributors. All rights reserved.\n    ")]):t.footer.actorLink?r("li",[t._v("\n      Copyright © "),t.footer.actorLink?r("a",{attrs:{href:t.footer.actorLink,target:"_blank",rel:"noopener noreferrer"}},[t._v(" "+t._s(t.footer.actor)+" ")]):t._e(),t._v(" and Contributors. All rights reserved.\n    ")]):t.footer.actor?r("li",[t._v("\n      Copyright © "+t._s(t.footer.actor)+" and Contributors. All rights reserved.\n    ")]):t._e(),t._v(" "),t.footer.licensedLink?r("li",[r("a",{attrs:{href:t.footer.licensedLink,target:"_blank",rel:"noopener noreferrer"}},[t._v(t._s(t.footer.licensed))]),t._v(" Licensed\n    ")]):t._e(),t._v(" "),t._l(t.footer.copyright,(function(e){return r("li",{key:e.link},[e.link?r("a",{attrs:{href:e.link,target:"_blank",rel:"noopener noreferrer"}},[t._v(t._s(e.text))]):[r("span",{domProps:{innerHTML:t._s(e.text)}},[t._v(t._s(e.text))])]],2)}))],2)]):t._e()}),[],!1,null,null,null);e.a=n.exports},353:function(t,e,r){"use strict";r(326)},354:function(t,e,r){"use strict";r(327)},368:function(t,e,r){"use strict";r(340)},379:function(t,e,r){"use strict";var a=r(324),o=r(348),n={name:"Home",components:{NavLink:a.a,PageFooter:o.a},computed:{data:function(){return this.$page.frontmatter},actionLink:function(){return{link:this.data.actionLink,text:this.data.actionText}}}},i=(r(354),r(28)),s=Object(i.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("main",{staticClass:"home",attrs:{"aria-labelledby":null!==t.data.heroText?"main-title":null}},[r("header",{staticClass:"hero"},[t.data.heroImage?r("img",{attrs:{src:t.$withBase(t.data.heroImage),alt:t.data.heroAlt||"hero"}}):t._e(),t._v(" "),null!==t.data.heroText?r("h1",{attrs:{id:"main-title"}},[t._v("\n      "+t._s(t.data.heroText||t.$title||"Hello")+"\n    ")]):t._e(),t._v(" "),null!==t.data.tagline?r("p",{staticClass:"description"},[t._v("\n      "+t._s(t.data.tagline||t.$description||"Welcome to your VuePress site")+"\n    ")]):t._e(),t._v(" "),t.data.actionText&&t.data.actionLink?r("p",{staticClass:"action"},[r("NavLink",{staticClass:"action-button",attrs:{item:t.actionLink}})],1):t._e()]),t._v(" "),t.data.features&&t.data.features.length?r("div",{staticClass:"features"},t._l(t.data.features,(function(e,a){return r("div",{key:a,staticClass:"feature"},[r("h2",[t._v(t._s(e.title))]),t._v(" "),r("p",[t._v(t._s(e.details))])])})),0):t._e(),t._v(" "),r("Content",{staticClass:"theme-default-content custom"}),t._v(" "),r("PageFooter")],1)}),[],!1,null,null,null);e.a=s.exports},380:function(t,e,r){"use strict";var a=r(381),o=r(382),n=r(348),i={components:{PageEdit:a.a,PageNav:o.a,PageFooter:n.a},props:["sidebarItems"]},s=(r(368),r(28)),l=Object(s.a)(i,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("main",{staticClass:"page"},[t._t("top"),t._v(" "),r("Content",{staticClass:"theme-default-content"}),t._v(" "),r("PageEdit"),t._v(" "),r("PageNav",t._b({},"PageNav",{sidebarItems:t.sidebarItems},!1)),t._v(" "),r("PageFooter"),t._v(" "),t._t("bottom")],2)}),[],!1,null,null,null);e.a=l.exports}}]);