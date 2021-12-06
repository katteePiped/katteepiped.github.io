(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-9ddeb252"],{"269a":function(e,t){e.exports=function(e,t){var s="function"===typeof e.exports?e.exports.extendOptions:e.options;for(var r in"function"===typeof e.exports&&(s.directives=e.exports.options.directives),s.directives=s.directives||{},t)s.directives[r]=s.directives[r]||t[r]}},7445:function(e,t,s){"use strict";s.r(t);var r=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("v-container",{attrs:{fluid:""}},[s("h5",{staticClass:"text-h5 text-center"},[e._v(" "+e._s(e.$route.query.search_query)+" ")]),s("v-select",{attrs:{label:"Filter videos",items:e.availableFilters},model:{value:e.selectedFilter,callback:function(t){e.selectedFilter=t},expression:"selectedFilter"}}),s("v-divider",{staticClass:"my-4"}),e.results&&e.results.items?s("div",[e._l(e.chunkedByFour,(function(t,r){return s("v-row",{key:r},e._l(t,(function(e,t){return s("v-col",{key:t,attrs:{md:"3"}},["VIDEO"===e.type?s("VideoItem",{attrs:{height:270,width:480,video:e,"max-height":""}}):s("GenericDisplayItem",{attrs:{height:270,width:480,item:e}})],1)})),1)})),null!=e.results.nextpage?s("v-progress-linear",{directives:[{name:"intersect",rawName:"v-intersect",value:e.onSearchResultsEndIntersect,expression:"onSearchResultsEndIntersect"}],attrs:{indeterminate:""}}):e._e()],2):e._e()],1)},i=[],a=s("6419"),l=s("40d3"),n=s("5fdc"),u=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("v-card",{attrs:{link:"",to:e.item.url}},[s("v-img",{attrs:{height:e.height,width:e.width,src:e.item.thumbnail,alt:"thumbnail"}}),s("v-card-title",{staticClass:"text-subtitle-1"},[e._v(e._s(e.item.title))]),s("v-card-subtitle",[e._v(e._s(e.item.type))]),s("v-card-text",[e.item.uploaderUrl&&e.item.uploaderName&&!e.hideChannel?s("router-link",{staticClass:"text-subtitle-1 text-decoration-none",attrs:{to:e.item.uploaderUrl,custom:""},scopedSlots:e._u([{key:"default",fn:function(t){var r=t.navigate;return[s("h5",{attrs:{role:"link"},on:{click:r,keypress:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:r.apply(null,arguments)}}},[e._v(e._s(e.item.uploaderName))])]}}],null,!1,2841598826)}):e.item.uploaderName?s("span",[e._v(e._s(e.item.uploaderName)),s("br")]):e._e(),e.isNumber(e.item.videos)?s("span",[e._v(e._s(e.$tc("counts.videos",e.item.videos)))]):e._e()],1)],1)},c=[],o=s("f0ce"),d=s("1147"),h="[object Number]";function m(e){return"number"==typeof e||Object(d["a"])(e)&&Object(o["a"])(e)==h}var p=m,v={props:{item:Object,height:Number,width:Number,hideChannel:Boolean},methods:{isNumber(...e){return p(...e)}}},f=v,y=s("2877"),b=s("6544"),_=s.n(b),x=s("b0af"),k=s("99d9"),g=s("adda"),N=Object(y["a"])(f,u,c,!1,null,null,null),R=N.exports;_()(N,{VCard:x["a"],VCardSubtitle:k["b"],VCardText:k["c"],VCardTitle:k["d"],VImg:g["a"]});var w={components:{GenericDisplayItem:R,VideoItem:n["a"]},data(){return{results:null,availableFilters:["all","videos","channels","playlists","music_songs","music_videos","music_albums","music_playlists"],selectedFilter:"all"}},metaInfo(){return{title:this.$route.query.search_query}},mounted(){this.updateResults()},computed:{chunkedByFour(){return Object(a["a"])(this.results.items,4)}},watch:{selectedFilter(){this.updateResults()},"$route.query.search_query"(){this.updateResults()}},methods:{rationalizeSearchResult(e){let t;return e.url.startsWith("/watch")?t="VIDEO":e.url.startsWith("/playlist")?t="PLAYLIST":e.url.startsWith("/channel")?t="CHANNEL":(console.warn("WARNING: UNKNOWN VIDEO URL TYPE FOUND:",e.url),t="VIDEO"),{title:e.name,type:t,uploaderName:e.uploader,uploadedDate:e.uploadDate,...e}},async fetchResults(){return this.$store.dispatch("auth/makeRequest",{path:"search",params:{q:this.$route.query.search_query,filter:this.selectedFilter}})},numberFormat(...e){return l["a"].numberFormat(...e)},timeFormat(...e){return l["a"].timeFormat(...e)},async updateResults(){this.results=this.fetchResults().then(e=>{e.items=e.items.map(this.rationalizeSearchResult),this.results=e})},onSearchResultsEndIntersect(e){e[0].isIntersecting&&this.fetchMoreResults()},fetchMoreResults(){this.$store.dispatch("auth/makeRequest",{path:"/nextpage/search",params:{nextpage:this.results.nextpage,q:this.$route.query.search_query,filter:this.selectedFilter}}).then(e=>{this.results.nextpage=e.nextpage,this.results.id=e.id,this.results.items=this.results.items.concat(e.items.map(this.rationalizeSearchResult))})}}},F=w,I=s("62ad"),V=s("a523"),q=s("ce7e"),C=s("8e36"),O=s("0fd9"),E=s("b974"),D=s("269a"),S=s.n(D),$=s("90a2"),j=Object(y["a"])(F,r,i,!1,null,null,null);t["default"]=j.exports;_()(j,{VCol:I["a"],VContainer:V["a"],VDivider:q["a"],VProgressLinear:C["a"],VRow:O["a"],VSelect:E["a"]}),S()(j,{Intersect:$["a"]})}}]);
//# sourceMappingURL=chunk-9ddeb252.57747720.js.map