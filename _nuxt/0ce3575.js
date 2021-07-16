(window.webpackJsonp=window.webpackJsonp||[]).push([[8,2,3,6,7],{262:function(t,e,r){"use strict";r.r(e);var n={props:["article"]},c=r(32),component=Object(c.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("NuxtLink",{staticClass:"block p-6 rounded-lg bg-white shadow-md hover:shadow-lg transition-shadow duration-75 items-start",attrs:{to:{name:"blog-slug",params:{slug:t.article.slug}}}},[r("div",[r("h2",{staticClass:"text-lg  font-medium title-font mb-2"},[t._v("\n      "+t._s(t.article.title)+"\n    ")]),t._v(" "),r("p",{staticClass:"leading-relaxed text-base"},[t._v("\n      "+t._s(t.article.description)+"\n    ")]),t._v(" "),t.article.categories?r("div",{staticClass:"mt-2 leading-none w-full"},t._l(t.article.categories,(function(e){return r("span",{key:e,staticClass:"mr-3 inline-flex items-center leading-none text-sm  py-1"},[r("svg",{staticClass:"fill-current w-5 h-5 mr-2 text-blue-500",attrs:{viewBox:"0 0 512 512",xmlns:"http://www.w3.org/2000/svg"}},[r("path",{attrs:{d:"M414.08,204.373L222.187,12.48C214.4,4.8,203.733,0,192,0H42.667C19.093,0,0,19.093,0,42.667V192    c0,11.84,4.8,22.507,12.587,30.187l192,192c7.68,7.68,18.347,12.48,30.08,12.48s22.507-4.8,30.187-12.48l149.333-149.333    c7.68-7.787,12.48-18.453,12.48-30.187C426.667,222.827,421.867,212.16,414.08,204.373z M74.667,106.667    c-17.707,0-32-14.293-32-32s14.293-32,32-32s32,14.293,32,32S92.373,106.667,74.667,106.667z"}})]),t._v("\n        "+t._s(e)+"\n      ")])})),0):t._e()])])}),[],!1,null,null,null);e.default=component.exports},263:function(t,e,r){var content=r(265);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(57).default)("6c7d0c52",content,!0,{sourceMap:!1})},264:function(t,e,r){"use strict";r(263)},265:function(t,e,r){var n=r(56)((function(i){return i[1]}));n.push([t.i,".table-of-contents .toc2{\n  padding-left:1rem;\n  padding-right:1rem\n}\n.table-of-contents .toc3{\n  padding-right:1rem;\n  padding-left:2rem\n}",""]),n.locals={},t.exports=n},267:function(t,e,r){"use strict";r.r(e);var n=r(6),c=(r(37),{props:["toc","activeToc"],asyncData:function(t){return Object(n.a)(regeneratorRuntime.mark((function e(){var r,n,article;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.$content,n=t.params,e.next=3,r("articles",n.slug).fetch();case 3:return article=e.sent,e.abrupt("return",{article:article});case 5:case"end":return e.stop()}}),e)})))()},methods:{tableOfContentsHeadingClick:function(t){this.$emit("updateActiveToc",t.id)}}}),l=(r(264),r(32)),component=Object(l.a)(c,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"sticky top-0 table-of-contents bg-gray-100 border-l-4 border-gray-400"},[r("ul",{staticClass:"py-2"},t._l(t.toc,(function(e){return r("li",{key:e.id,staticClass:"text-gray-600 hover:text-gray-900 hover:bg-gray-200",class:{"toc2 font-light":2===e.depth,"toc3 font-extralight":3===e.depth,"bg-gray-200":e.id===t.activeToc},on:{click:function(r){return r.preventDefault(),t.tableOfContentsHeadingClick(e)}}},[r("NuxtLink",{staticClass:"block",attrs:{to:"#"+e.id}},[t._v(t._s(e.text))])],1)})),0)])}),[],!1,null,null,null);e.default=component.exports},268:function(t,e,r){"use strict";r.r(e);r(188);var n={filters:{trim:function(t){return t?t.trim():""}},props:{author:{type:Object,required:!0}}},c=r(32),component=Object(c.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("div",{staticClass:"flex items-center"},[r("div",{staticClass:"w-36 mr-4"},[r("img",{staticClass:"rounded-full shadow-inner",attrs:{src:t.author.avatarUrl}})]),t._v(" "),r("blockquote",[r("p",{staticClass:"mb-2 whitespace-pre-wrap"},[t._v(t._s(t._f("trim")(t.author.bio)))]),t._v(" "),r("div",{staticClass:"flex"},[r("a",{staticClass:"mx-1",attrs:{href:t.author.links.twitter,target:"_blank"}},[r("svg",{staticClass:"w-8 fill-current text-gray-600",attrs:{xmlns:"http://www.w3.org/2000/svg",version:"1.1",viewBox:"0 0 512 512","xml:space":"preserve"}},[r("path",{attrs:{xmlns:"http://www.w3.org/2000/svg",d:"M512,97.248c-19.04,8.352-39.328,13.888-60.48,16.576c21.76-12.992,38.368-33.408,46.176-58.016    c-20.288,12.096-42.688,20.64-66.56,25.408C411.872,60.704,384.416,48,354.464,48c-58.112,0-104.896,47.168-104.896,104.992    c0,8.32,0.704,16.32,2.432,23.936c-87.264-4.256-164.48-46.08-216.352-109.792c-9.056,15.712-14.368,33.696-14.368,53.056    c0,36.352,18.72,68.576,46.624,87.232c-16.864-0.32-33.408-5.216-47.424-12.928c0,0.32,0,0.736,0,1.152    c0,51.008,36.384,93.376,84.096,103.136c-8.544,2.336-17.856,3.456-27.52,3.456c-6.72,0-13.504-0.384-19.872-1.792    c13.6,41.568,52.192,72.128,98.08,73.12c-35.712,27.936-81.056,44.768-130.144,44.768c-8.608,0-16.864-0.384-25.12-1.44    C46.496,446.88,101.6,464,161.024,464c193.152,0,298.752-160,298.752-298.688c0-4.64-0.16-9.12-0.384-13.568    C480.224,136.96,497.728,118.496,512,97.248z"}})])]),t._v(" "),r("a",{staticClass:"mx-1",attrs:{href:t.author.links.github,target:"_blank"}},[r("svg",{staticClass:"w-8 fill-current text-gray-600",attrs:{xmlns:"http://www.w3.org/2000/svg",version:"1.1",viewBox:"0 0 24 24","xml:space":"preserve"}},[r("path",{attrs:{xmlns:"http://www.w3.org/2000/svg",d:"m12 .5c-6.63 0-12 5.28-12 11.792 0 5.211 3.438 9.63 8.205 11.188.6.111.82-.254.82-.567 0-.28-.01-1.022-.015-2.005-3.338.711-4.042-1.582-4.042-1.582-.546-1.361-1.335-1.725-1.335-1.725-1.087-.731.084-.716.084-.716 1.205.082 1.838 1.215 1.838 1.215 1.07 1.803 2.809 1.282 3.495.981.108-.763.417-1.282.76-1.577-2.665-.295-5.466-1.309-5.466-5.827 0-1.287.465-2.339 1.235-3.164-.135-.298-.54-1.497.105-3.121 0 0 1.005-.316 3.3 1.209.96-.262 1.98-.392 3-.398 1.02.006 2.04.136 3 .398 2.28-1.525 3.285-1.209 3.285-1.209.645 1.624.24 2.823.12 3.121.765.825 1.23 1.877 1.23 3.164 0 4.53-2.805 5.527-5.475 5.817.42.354.81 1.077.81 2.182 0 1.578-.015 2.846-.015 3.229 0 .309.21.678.825.56 4.801-1.548 8.236-5.97 8.236-11.173 0-6.512-5.373-11.792-12-11.792z"}})])]),t._v(" "),r("NuxtLink",{attrs:{to:"/blog/author/"+t.author.slug}},[t._v("More articles by "+t._s(t.author.name))])],1)])])])}),[],!1,null,null,null);e.default=component.exports},269:function(t,e,r){"use strict";r.r(e);var n={props:{prev:{type:Object,default:function(){return null}},next:{type:Object,default:function(){return null}}}},c=r(32),component=Object(c.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"flex items-stretch gap-4"},[t.prev?r("article-listing",{staticClass:"flex items-start w-1/2",attrs:{article:t.prev}}):t._e(),t._v(" "),t.next?r("article-listing",{staticClass:"flex items-start w-1/2",attrs:{article:t.next}}):t._e()],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{ArticleListing:r(262).default})},286:function(t,e,r){"use strict";r.r(e);var n=r(20),c=r(6),l=(r(37),r(188),r(27),{filters:{trim:function(t){return t?t.trim():""}},asyncData:function(t){return Object(c.a)(regeneratorRuntime.mark((function e(){var r,c,article,l,o,v,f,d;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.$content,c=t.params,e.next=3,r("articles",c.slug).fetch();case 3:return article=e.sent,e.next=6,r("authors").where({slug:article.author.slug}).fetch();case 6:return l=e.sent,e.next=9,r("articles").only(["title","description","slug"]).sortBy("createdAt","asc").surround(c.slug).fetch();case 9:return o=e.sent,v=Object(n.a)(o,2),f=v[0],d=v[1],e.abrupt("return",{article:article,author:l,prev:f,next:d});case 14:case"end":return e.stop()}}),e)})))()},data:function(){return{currentlyActiveToc:"",observer:null,observerOptions:{root:this.$refs.nuxtContent,threshold:0}}},mounted:function(){var t=this;this.observer=new IntersectionObserver((function(e){e.forEach((function(e){var r=e.target.getAttribute("id");e.isIntersecting&&(t.currentlyActiveToc=r)}))}),this.observerOptions),document.querySelectorAll(".nuxt-content h2[id], .nuxt-content h3[id]").forEach((function(section){t.observer.observe(section)}))},beforeDestroy:function(){this.observer.disconnect()},methods:{formatDate:function(t){return new Date(t).toLocaleDateString("en",{year:"numeric",month:"long",day:"numeric"})},updateActiveToc:function(t){console.log("Updated to ",t),this.currentlyActiveToc=t}}}),o=r(32),component=Object(o.a)(l,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"flex pt-12"},[r("aside",{staticClass:"w-1/4 px-6"},[r("table-of-contents",{attrs:{"active-toc":t.currentlyActiveToc,toc:t.article.toc},on:{"update-active-toc":t.updateActiveToc}})],1),t._v(" "),r("article",{staticClass:"blog-content w-2/4 pt-12"},[r("div",{},[r("div",{staticClass:"w-full mb-12"},[r("h1",{staticClass:"mb-4"},[t._v(t._s(t.article.title))]),t._v(" "),r("p",{staticClass:"w-full"},[t._v(t._s(t.article.description))])]),t._v(" "),r("div",{staticClass:"w-full"},[r("nuxt-content",{attrs:{document:t.article}})],1),t._v(" "),r("hr"),t._v(" "),r("h2",{staticClass:"mb-8 mt-8"},[t._v("Author")]),t._v(" "),r("div",{staticClass:"w-full"},[r("author",{attrs:{author:t.author}})],1),t._v(" "),r("hr"),t._v(" "),r("div",{staticClass:"w-full mb-12 mt-12"},[r("prev-next",{attrs:{prev:t.prev,next:t.next}})],1)])])])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{TableOfContents:r(267).default,Author:r(268).default,PrevNext:r(269).default})}}]);