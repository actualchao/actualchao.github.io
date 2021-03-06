(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{312:function(t,e,a){},318:function(t,e,a){},324:function(t,e,a){},325:function(t,e,a){},337:function(t,e,a){"use strict";var n=a(312);a.n(n).a},348:function(t,e,a){"use strict";var n=a(318);a.n(n).a},356:function(t,e,a){"use strict";var n=a(324);a.n(n).a},359:function(t,e,a){"use strict";var n=a(325);a.n(n).a},389:function(t,e,a){"use strict";a.r(e);var n={name:"Home",components:{NavLink:a(327).a},computed:{data:function(){return this.$page.frontmatter},actionLink:function(){return{link:this.data.actionLink,text:this.data.actionText}}}},i=(a(337),a(25)),r=Object(i.a)(n,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("main",{staticClass:"home",attrs:{"aria-labelledby":null!==t.data.heroText?"main-title":null}},[a("header",{staticClass:"hero"},[t.data.heroImage?a("img",{attrs:{src:t.$withBase(t.data.heroImage),alt:t.data.heroAlt||"hero"}}):t._e(),t._v(" "),null!==t.data.heroText?a("h1",{attrs:{id:"main-title"}},[t._v("\n      "+t._s(t.data.heroText||t.$title||"Hello")+"\n    ")]):t._e(),t._v(" "),null!==t.data.tagline?a("p",{staticClass:"description"},[t._v("\n      "+t._s(t.data.tagline||t.$description||"Welcome to your VuePress site")+"\n    ")]):t._e(),t._v(" "),t.data.actionText&&t.data.actionLink?a("p",{staticClass:"action"},[a("NavLink",{staticClass:"action-button",attrs:{item:t.actionLink}})],1):t._e()]),t._v(" "),t.data.features&&t.data.features.length?a("div",{staticClass:"features"},t._l(t.data.features,(function(e,n){return a("div",{key:n,staticClass:"feature"},[a("h2",[t._v(t._s(e.title))]),t._v(" "),a("p",[t._v(t._s(e.details))])])})),0):t._e(),t._v(" "),a("Content",{staticClass:"theme-default-content custom"}),t._v(" "),t.data.footer?a("div",{staticClass:"footer"},[t._v("\n    "+t._s(t.data.footer)+"\n  ")]):t._e()],1)}),[],!1,null,null,null).exports,s=(a(338),a(340)),o=a(387),l=a(388),h=a(332);function c(t,e){return t.ownerDocument.defaultView.getComputedStyle(t,null)[e]}var u={name:"Navbar",components:{SidebarButton:l.a,NavLinks:h.a,SearchBox:o.a,AlgoliaSearchBox:s.a},data:function(){return{linksWrapMaxWidth:null}},computed:{algolia:function(){return this.$themeLocaleConfig.algolia||this.$site.themeConfig.algolia||{}},isAlgoliaSearch:function(){return this.algolia&&this.algolia.apiKey&&this.algolia.indexName}},mounted:function(){var t=this,e=parseInt(c(this.$el,"paddingLeft"))+parseInt(c(this.$el,"paddingRight")),a=function(){document.documentElement.clientWidth<719?t.linksWrapMaxWidth=null:t.linksWrapMaxWidth=t.$el.offsetWidth-e-(t.$refs.siteName&&t.$refs.siteName.offsetWidth||0)};a(),window.addEventListener("resize",a,!1)}},d=(a(348),Object(i.a)(u,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("header",{staticClass:"navbar"},[a("SidebarButton",{on:{"toggle-sidebar":function(e){return t.$emit("toggle-sidebar")}}}),t._v(" "),a("RouterLink",{staticClass:"home-link",attrs:{to:t.$localePath}},[t.$site.themeConfig.logo?a("img",{staticClass:"logo",attrs:{src:t.$withBase(t.$site.themeConfig.logo),alt:t.$siteTitle}}):t._e(),t._v(" "),t.$siteTitle?a("span",{ref:"siteName",staticClass:"site-name",class:{"can-hide":t.$site.themeConfig.logo}},[t._v(t._s(t.$siteTitle))]):t._e()]),t._v(" "),a("div",{staticClass:"links",style:t.linksWrapMaxWidth?{"max-width":t.linksWrapMaxWidth+"px"}:{}},[t.isAlgoliaSearch?a("AlgoliaSearchBox",{attrs:{options:t.algolia}}):!1!==t.$site.themeConfig.search&&!1!==t.$page.frontmatter.search?a("SearchBox"):t._e(),t._v(" "),a("NavLinks",{staticClass:"can-hide"})],1)],1)}),[],!1,null,null,null).exports),f=a(386),p={name:"Sidebar",components:{SidebarLinks:a(331).default,NavLinks:h.a},props:["items"]},v=(a(356),Object(i.a)(p,(function(){var t=this.$createElement,e=this._self._c||t;return e("aside",{staticClass:"sidebar"},[e("NavLinks"),this._v(" "),this._t("top"),this._v(" "),e("SidebarLinks",{attrs:{depth:0,items:this.items}}),this._v(" "),this._t("bottom")],2)}),[],!1,null,null,null).exports),g=(a(26),a(97),a(168),a(98),a(169),a(69),a(45),a(310),a(70),a(311),a(101),/#.*$/),m=/\.(md|html)$/,b=/\/$/,y=/^[a-z]+:/i;function x(t){return decodeURI(t).replace(g,"").replace(m,"")}function _(t){return y.test(t)}function S(t){if(_(t))return t;var e=t.match(g),a=e?e[0]:"",n=x(t);return b.test(n)?t:n+".html"+a}function $(t,e,a){if(_(e))return{type:"external",path:e};a&&(e=function(t,e,a){var n=t.charAt(0);if("/"===n)return t;if("?"===n||"#"===n)return e+t;var i=e.split("/");a&&i[i.length-1]||i.pop();for(var r=t.replace(/^\//,"").split("/"),s=0;s<r.length;s++){var o=r[s];".."===o?i.pop():"."!==o&&i.push(o)}""!==i[0]&&i.unshift("");return i.join("/")}(e,a));for(var n=x(e),i=0;i<t.length;i++)if(x(t[i].regularPath)===n)return Object.assign({},t[i],{type:"page",path:S(t[i].path)});return console.error('[vuepress] No matching page found for sidebar item "'.concat(e,'"')),{}}function k(t,e,a,n){var i=a.pages,r=a.themeConfig,s=n&&r.locales&&r.locales[n]||r;if("auto"===(t.frontmatter.sidebar||s.sidebar||r.sidebar))return w(t);var o=s.sidebar||r.sidebar;if(o){var l=function(t,e){if(Array.isArray(e))return{base:"/",config:e};for(var a in e)if(0===(n=t,/(\.html|\/)$/.test(n)?n:n+"/").indexOf(encodeURI(a)))return{base:a,config:e[a]};var n;return{}}(e,o),h=l.base,c=l.config;return"auto"===c?w(t):c?c.map((function(t){return function t(e,a,n){var i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:1;if("string"==typeof e)return $(a,e,n);if(Array.isArray(e))return Object.assign($(a,e[0],n),{title:e[1]});var r=e.children||[];return 0===r.length&&e.path?Object.assign($(a,e.path,n),{title:e.title}):{type:"group",path:e.path,title:e.title,sidebarDepth:e.sidebarDepth,initialOpenGroupIndex:e.initialOpenGroupIndex,children:r.map((function(e){return t(e,a,n,i+1)})),collapsable:!1!==e.collapsable}}(t,i,h)})):[]}return[]}function w(t){var e=function(t){var e;return(t=t.map((function(t){return Object.assign({},t)}))).forEach((function(t){2===t.level?e=t:e&&(e.children||(e.children=[])).push(t)})),t.filter((function(t){return 2===t.level}))}(t.headers||[]);return[{type:"group",collapsable:!1,title:t.title,path:null,children:e.map((function(e){return{type:"auto",title:e.title,basePath:t.path,path:t.path+"#"+e.slug,children:e.children||[]}}))}]}a(174);var C=a(43),M={getOffset:function(t){var e={x:0,y:0};return t.addEventListener("mousemove",(function(t){var a=M.eventWrapper(t),n=a.x,i=a.y;e.x=n,e.y=i})),e},eventWrapper:function(t){var e=t.pageX,a=t.pageY,n=t.target.getBoundingClientRect();return{x:e-n.left,y:a-n.top}},toRad:function(t){return t*Math.PI/180},toAngle:function(t){return 180*t/Math.PI},rp:function(t,e){var a=Math.max.apply(Math,Object(C.a)(t)),n=Math.min.apply(Math,Object(C.a)(t)),i=Math.random()*(a-n)+n;return e?Math.round(i):i},createColor:function(){return"rgb(".concat(M.rp([55,255],!0),", ").concat(M.rp([55,255],!0),", ").concat(M.rp([55,255],!0),")")},rectDuang:function(t,e){return t.x+t.w>=e.x&&t.x<=e.x+e.w&&t.y+t.h>=e.y&&t.y<=e.y+e.h},getDist:function(t,e,a,n){return Math.sqrt(Math.pow(a-t,2)+Math.pow(n-e,2))},checkBallBounce:function(t,e,a,n){t.x-t.r<=0?(t.x=t.r,t.vx*=n):t.x+t.r>=e&&(t.x=e-t.r,t.vx*=n),t.y-t.r<=0?(t.y=t.r,t.vy*=n):t.y+t.r>=a&&(t.y=a-t.r,t.vy*=n)},checkBallHit:function(t,e){var a=e.x-t.x,n=e.y-t.y;if(Math.sqrt(Math.pow(a,2)+Math.pow(n,2))<t.r+e.r){var i=Math.atan2(n,a),r=Math.sin(i),s=Math.cos(i),o=0,l=a*s+n*r,h=n*s-a*r,c=t.vx*s+t.vy*r,u=t.vy*s-t.vx*r,d=e.vx*s+e.vy*r,f=e.vy*s-e.vx*r,p=((t.m-e.m)*c+2*e.m*d)/(t.m+e.m),v=((e.m-t.m)*d+2*t.m*c)/(t.m+e.m),g=t.r+e.r-Math.abs(l-o);o+=p<0?-g/2:g/2,l+=v<0?-g/2:g/2,e.x=t.x+(l*s-h*r),e.y=t.y+(h*s+l*r),t.x=t.x+(o*s-0*r),t.y=t.y+(0*s+o*r),t.vx=p*s-u*r,t.vy=u*s+p*r,e.vx=v*s-f*r,e.vy=f*s+v*r}}},O=M,L=(a(357),a(30)),T=a(64),W=function(){function t(e){return Object(L.a)(this,t),this.x=0,this.y=0,this.x3d=0,this.y3d=0,this.z3d=0,this.r=20,this.vx=0,this.vy=0,this.vz=0,this.scaleX=1,this.scaleY=1,this.strokeStyle="rgba(0, 0, 0, 0)",this.fillStyle="rgb(57, 119, 224)",this.alpha=1,Object.assign(this,e),this}return Object(T.a)(t,[{key:"render",value:function(t){var e=this.x,a=this.y,n=this.r,i=this.scaleX,r=this.scaleY,s=this.fillStyle,o=this.strokeStyle,l=this.alpha;return t.save(),t.translate(e,a),t.scale(i,r),t.strokeStyle=o,t.fillStyle=s,t.globalAlpha=l,t.beginPath(),t.arc(0,0,n,0,2*Math.PI),t.fill(),t.stroke(),t.restore(),this}},{key:"isPoint",value:function(t){var e=t.x,a=t.y;return this.r>=Math.sqrt(Math.pow(e-this.x,2)+Math.pow(a-this.y,2))}}]),t}(),N=!0,A={mounted:function(){N=!0;var t,e,a=this.$refs.canvas,n=a.getContext("2d"),i=[];function r(a,n){a.x+=a.vx,a.y+=a.vy;for(var r=n+1;r<i.length;r++){var o=i[r];s(a,o),O.checkBallHit(a,o)}a.x-a.r>t?a.x=-a.r:a.x+a.r<0&&(a.x=t+a.r),a.y-a.r>e?a.y=-a.r:a.y+a.r<0&&(a.y=e+a.r)}function s(a,i){var r=i.x-a.x,s=i.y-a.y,o=Math.sqrt(Math.pow(r,2)+Math.pow(s,2)),l=t>e?t/10:e/5;if(o<l){!function(t,e,a,i){n.save(),n.lineWidth=2*Math.max(0,1-a/i),n.globalAlpha=Math.max(0,1-a/i),n.strokeStyle="rgba(62,175,124,0.4)",n.beginPath(),n.lineTo(t.x,t.y),n.lineTo(e.x,e.y),n.stroke(),n.restore()}(a,i,o,l);var h=5e-5*r,c=5e-5*s;a.vx+=h/a.m,a.vy+=c/a.m,i.vx-=h/i.m,i.vy-=c/i.m}}function o(t){t.render(n)}window.onresize=function(){t=a.width=window.innerWidth,e=a.height=window.innerHeight,function(a){a!==i.length&&(i.length=0);for(var n=0;n<a;n++){var r=O.rp([1,3]);i.push(new W({x:O.rp([0,t]),y:O.rp([0,e]),fillStyle:"rgba(62,175,124,0.4)",vx:O.rp([-1.5,1.5]),vy:O.rp([-1.5,1.5]),r:r,m:r}))}}(t*e/17e3)},window.onresize(),function a(){N&&window.requestAnimationFrame(a),n.clearRect(0,0,t,e),i.forEach(r),i.forEach(o)}()},beforeDestroy:function(){N=!1}},j=(a(359),Object(i.a)(A,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"home-animation"}},[e("canvas",{ref:"canvas"})])}),[],!1,null,"8b2dc338",null).exports),I={name:"Layout",components:{Home:r,Page:f.a,Sidebar:v,Navbar:d,HomeAnimation:j},data:function(){return{isSidebarOpen:!1}},computed:{shouldShowNavbar:function(){var t=this.$site.themeConfig;return!1!==this.$page.frontmatter.navbar&&!1!==t.navbar&&(this.$title||t.logo||t.repo||t.nav||this.$themeLocaleConfig.nav)},shouldShowSidebar:function(){var t=this.$page.frontmatter;return!t.home&&!1!==t.sidebar&&this.sidebarItems.length},sidebarItems:function(){return k(this.$page,this.$page.regularPath,this.$site,this.$localePath)},pageClasses:function(){var t=this.$page.frontmatter.pageClass;return[{"no-navbar":!this.shouldShowNavbar,"sidebar-open":this.isSidebarOpen,"no-sidebar":!this.shouldShowSidebar},t]}},mounted:function(){var t=this;this.$router.afterEach((function(){t.isSidebarOpen=!1}))},methods:{toggleSidebar:function(t){this.isSidebarOpen="boolean"==typeof t?t:!this.isSidebarOpen,this.$emit("toggle-sidebar",this.isSidebarOpen)},onTouchStart:function(t){this.touchStart={x:t.changedTouches[0].clientX,y:t.changedTouches[0].clientY}},onTouchEnd:function(t){var e=t.changedTouches[0].clientX-this.touchStart.x,a=t.changedTouches[0].clientY-this.touchStart.y;Math.abs(e)>Math.abs(a)&&Math.abs(e)>40&&(e>0&&this.touchStart.x<=80?this.toggleSidebar(!0):this.toggleSidebar(!1))}}},E=Object(i.a)(I,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"theme-container",class:t.pageClasses,on:{touchstart:t.onTouchStart,touchend:t.onTouchEnd}},[t.$page.frontmatter.home?a("HomeAnimation"):t._e(),t._v(" "),t.shouldShowNavbar?a("Navbar",{on:{"toggle-sidebar":t.toggleSidebar}}):t._e(),t._v(" "),a("div",{staticClass:"sidebar-mask",on:{click:function(e){return t.toggleSidebar(!1)}}}),t._v(" "),a("Sidebar",{attrs:{items:t.sidebarItems},on:{"toggle-sidebar":t.toggleSidebar},scopedSlots:t._u([{key:"top",fn:function(){return[t._t("sidebar-top")]},proxy:!0},{key:"bottom",fn:function(){return[t._t("sidebar-bottom")]},proxy:!0}],null,!0)}),t._v(" "),t.$page.frontmatter.home?a("Home"):a("Page",{attrs:{"sidebar-items":t.sidebarItems},scopedSlots:t._u([{key:"top",fn:function(){return[t._t("page-top")]},proxy:!0},{key:"bottom",fn:function(){return[t._t("page-bottom")]},proxy:!0}],null,!0)})],1)}),[],!1,null,null,null);e.default=E.exports}}]);