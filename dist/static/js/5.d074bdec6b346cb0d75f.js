webpackJsonp([5],{"3e0L":function(e,n,t){"use strict";function i(e){t("IYFf")}Object.defineProperty(n,"__esModule",{value:!0});var o=t("T8/m"),r=t("P9l9"),s=(o.a,{data:function(){return{rankingList:[]}},beforeCreate:function(){},created:function(){this._getRank()},beforeMount:function(){},mounted:function(){},beforeUpdate:function(){},updated:function(){},beforeDestroy:function(){},destroyed:function(){},methods:{_getRank:function(){var e=this;this.$vux.loading.show({text:"Loading"}),Object(r.e)().then(function(n){e.rankingList=n.list.map(function(e){return{title:e.name,desc:e.description,src:e.coverImgUrl,id:e.id}}),e.$vux.loading.hide()})},handleListClick:function(e){this.$router.push({path:"/recommend/"+e.id})}},computed:{},components:{Panel:o.a}}),a=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticClass:"rank"},[t("panel",{attrs:{header:"排行榜",list:e.rankingList},on:{"on-click-item":e.handleListClick}})],1)},c=[],u={render:a,staticRenderFns:c},f=u,d=t("VU/8"),l=i,p=d(s,f,!1,l,"data-v-0f31fb1f",null);n.default=p.exports},IYFf:function(e,n,t){var i=t("UhQs");"string"==typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);t("rjj0")("a6e41c3c",i,!0,{})},UhQs:function(e,n,t){n=e.exports=t("FZ+f")(!0),n.push([e.i,"","",{version:3,sources:[],names:[],mappings:"",file:"rank.vue",sourceRoot:""}])}});
//# sourceMappingURL=5.d074bdec6b346cb0d75f.js.map