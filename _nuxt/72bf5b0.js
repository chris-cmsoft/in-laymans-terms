(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{278:function(t,e,n){var content=n(280);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(61).default)("6c7d0c52",content,!0,{sourceMap:!1})},279:function(t,e,n){"use strict";n(278)},280:function(t,e,n){var r=n(60)((function(i){return i[1]}));r.push([t.i,".table-of-contents .toc2{\n  padding-left:1rem;\n  padding-right:1rem\n}\n.table-of-contents .toc3{\n  padding-right:1rem;\n  padding-left:2rem\n}",""]),r.locals={},t.exports=r},282:function(t,e,n){"use strict";n.r(e);var r=n(7),c=(n(39),{props:{toc:{type:Array,required:!0},activeToc:{type:String,required:!0}},asyncData:function(t){return Object(r.a)(regeneratorRuntime.mark((function e(){var n,r,article;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.$content,r=t.params,e.next=3,n("articles",r.slug).fetch();case 3:return article=e.sent,e.abrupt("return",{article:article});case 5:case"end":return e.stop()}}),e)})))()},methods:{tableOfContentsHeadingClick:function(t){this.$emit("updateActiveToc",t.id)}}}),o=(n(279),n(34)),component=Object(o.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"sticky top-0 table-of-contents bg-gray-100 border-l-4 border-gray-400"},[n("ul",{staticClass:"py-2"},t._l(t.toc,(function(e){return n("li",{key:e.id,staticClass:"text-gray-600 hover:text-gray-900 hover:bg-gray-200",class:{"toc2 font-light":2===e.depth,"toc3 font-extralight":3===e.depth,"bg-gray-200":e.id===t.activeToc},on:{click:function(n){return n.preventDefault(),t.tableOfContentsHeadingClick(e)}}},[n("NuxtLink",{staticClass:"block",attrs:{to:"#"+e.id}},[t._v("\n        "+t._s(e.text)+"\n      ")])],1)})),0)])}),[],!1,null,null,null);e.default=component.exports}}]);