(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{280:function(t,e,n){"use strict";n.r(e);var r=n(5),l=(n(9),n(89),n(38),n(37),{asyncData:function(t){return Object(r.a)(regeneratorRuntime.mark((function e(){var n,r,l;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.$content,r=t.params,e.next=3,n("articles",r.slug).where({categories:{$contains:r.category}}).without("body").sortBy("createdAt","asc").fetch();case 3:return l=e.sent,e.abrupt("return",{articles:l});case 5:case"end":return e.stop()}}),e)})))()},data:function(){return{category:this.$route.params.category}},methods:{formatDate:function(t){return new Date(t).toLocaleDateString("en",{year:"numeric",month:"long",day:"numeric"})},capitalize:function(t){return t?(t=t.toString()).charAt(0).toUpperCase()+t.slice(1):""}}}),c=n(31),component=Object(c.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("section",{staticClass:"text-black"},[n("div",{staticClass:"max-w-6xl mx-auto px-5 py-24 "},[n("div",{staticClass:"flex flex-wrap w-full mb-20 flex-col items-center text-center"},[n("h1",{staticClass:" title-font mb-2 text-4xl font-extrabold leading-10 tracking-tight text-left sm:text-5xl sm:leading-none md:text-6xl"},[t._v("\n          "+t._s(t.capitalize(t.category))+"\n        ")]),t._v(" "),n("p",{staticClass:"lg:w-1/2 w-full leading-relaxed text-base"},[t._v("\n          A quick reference for understanding buzz-words in "+t._s(t.category)+", and learning more about them.\n        ")])]),t._v(" "),n("div",{staticClass:"flex flex-wrap -m-4"},t._l(t.articles,(function(article){return n("div",{key:article.slug,staticClass:"xl:w-1/3 md:w-1/2 p-4"},[n("NuxtLink",{attrs:{to:{name:"blog-slug",params:{slug:article.slug}}}},[n("div",{staticClass:"border border-gray-300 p-6 rounded-lg"},[n("h2",{staticClass:"text-lg  font-medium title-font mb-2"},[t._v("\n                "+t._s(article.title)+"\n              ")]),t._v(" "),n("p",{staticClass:"leading-relaxed text-base"},[t._v("\n                "+t._s(article.description)+"\n              ")]),t._v(" "),n("div",{staticClass:"mt-2 leading-none w-full"},t._l(article.categories,(function(e){return n("span",{key:e,staticClass:"mr-3 inline-flex items-center leading-none text-sm  py-1"},[n("svg",{staticClass:"fill-current w-5 h-5 mr-2 text-blue-500",attrs:{viewBox:"0 0 512 512",xmlns:"http://www.w3.org/2000/svg"}},[n("path",{attrs:{d:"M414.08,204.373L222.187,12.48C214.4,4.8,203.733,0,192,0H42.667C19.093,0,0,19.093,0,42.667V192    c0,11.84,4.8,22.507,12.587,30.187l192,192c7.68,7.68,18.347,12.48,30.08,12.48s22.507-4.8,30.187-12.48l149.333-149.333    c7.68-7.787,12.48-18.453,12.48-30.187C426.667,222.827,421.867,212.16,414.08,204.373z M74.667,106.667    c-17.707,0-32-14.293-32-32s14.293-32,32-32s32,14.293,32,32S92.373,106.667,74.667,106.667z"}})]),t._v("\n                  "+t._s(e)+"\n                ")])})),0)])])],1)})),0)])])])}),[],!1,null,null,null);e.default=component.exports}}]);