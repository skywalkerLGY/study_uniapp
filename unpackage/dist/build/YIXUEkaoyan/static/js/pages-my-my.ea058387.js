(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-my-my"],{"0b4e":function(t,e,n){"use strict";n.r(e);var a=n("73a8"),i=n.n(a);for(var r in a)"default"!==r&&function(t){n.d(e,t,(function(){return a[t]}))}(r);e["default"]=i.a},"28e7":function(t,e,n){var a=n("24fb");e=a(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/*文本基本颜色*/\r\n/* 下划线 */.list-box[data-v-51653a30]{background-color:#f8f9fb;padding-top:%?20?%}.list-box .list[data-v-51653a30]{background-color:#fff;margin-bottom:%?20?%}.list-box .list .list-item[data-v-51653a30]{padding:%?26?% %?39?%;border-bottom:.5px solid #efeff4}.list-box .list .left[data-v-51653a30]{font-size:%?33?%}.list-box .list .left uni-text[data-v-51653a30]:first-child{margin-right:%?20?%}.list-box .list .right uni-text[data-v-51653a30]{font-size:%?35?%;color:#959da5;margin-left:%?15?%}.list-box .list .right uni-image[data-v-51653a30]{width:%?120?%;height:%?120?%;border-radius:%?60?%}.list-box .list .right uni-switch[data-v-51653a30]{margin-right:%?-10?%}.list-box .list .active[data-v-51653a30]{background-color:#fafafa}uni-image[data-v-51653a30]{width:%?80?%;height:%?80?%}',""]),t.exports=e},"4d70":function(t,e,n){"use strict";var a=n("b774"),i=n.n(a);i.a},"73a8":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a={props:{list:Array},methods:{clickHandler:function(t){t.page?this.navTo(t.page,{login:t.login}):t.event&&this.$emit(t.event,t)}}};e.default=a},"82b4":function(t,e,n){var a=n("28e7");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var i=n("4f06").default;i("cd23e92c",a,!0,{sourceMap:!1,shadowMode:!1})},8699:function(t,e,n){"use strict";n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return r})),n.d(e,"a",(function(){return a}));var a={mxgList:n("e261").default},i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",[n("v-uni-view",{staticClass:"status_bar"}),n("v-uni-view",{staticClass:"my-header"},[n("v-uni-view",{staticClass:"header-content space-between center",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.hasLogin?t.navTo("/pages/my/user"):t.navTo("/pages/auth/login")}}},[n("v-uni-view",{staticClass:"left center"},[n("v-uni-image",{staticClass:"header-image",attrs:{src:t.userInfo.imageUrl||"/static/logo.png"}}),t.hasLogin?n("v-uni-view",{staticClass:"header-info column"},[n("v-uni-text",{staticClass:"nickname"},[t._v(t._s(t.userInfo.nickName))]),n("v-uni-text",{staticClass:"username"},[t._v("用户名："+t._s(t.userInfo.username))])],1):n("v-uni-view",{staticClass:"header-info"},[n("v-uni-text",{staticClass:"nickname"},[t._v("欢迎回来，请登录")])],1)],1),n("v-uni-text",{staticClass:"iconfont icon-right"})],1)],1),n("mxg-list",{attrs:{list:t.list}})],1)},r=[]},"9fed":function(t,e,n){"use strict";n.r(e);var a=n("b203"),i=n.n(a);for(var r in a)"default"!==r&&function(t){n.d(e,t,(function(){return a[t]}))}(r);e["default"]=i.a},abaf:function(t,e,n){"use strict";var a=n("82b4"),i=n.n(a);i.a},b203:function(t,e,n){"use strict";var a=n("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=a(n("5530")),r=a(n("e769")),c=n("26cb"),o={data:function(){return{list:(0,r.default)()}},computed:(0,i.default)((0,i.default)({},(0,c.mapState)(["userInfo"])),(0,c.mapGetters)(["hasLogin"])),methods:{}};e.default=o},b774:function(t,e,n){var a=n("c692");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var i=n("4f06").default;i("dd724ffe",a,!0,{sourceMap:!1,shadowMode:!1})},c2b4:function(t,e,n){"use strict";n.r(e);var a=n("8699"),i=n("9fed");for(var r in i)"default"!==r&&function(t){n.d(e,t,(function(){return i[t]}))}(r);n("4d70");var c,o=n("f0c5"),s=Object(o["a"])(i["default"],a["b"],a["c"],!1,null,"f8e4d9b0",null,!1,a["a"],c);e["default"]=s.exports},c692:function(t,e,n){var a=n("24fb");e=a(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/*文本基本颜色*/\r\n/* 下划线 */.status_bar[data-v-f8e4d9b0]{height:calc(0px + 48px);width:100%;background-color:#345dc2}.my-header[data-v-f8e4d9b0]{background-color:#345dc2}.my-header .header-content[data-v-f8e4d9b0]{padding:%?50?% %?39?%;background-color:#fff;border-radius:%?30?% %?30?% 0 0}.my-header .left .header-image[data-v-f8e4d9b0]{width:%?150?%;height:%?150?%;border-radius:%?80?%}.my-header .left .header-info[data-v-f8e4d9b0]{margin-left:%?30?%}.my-header .left .header-info .nickname[data-v-f8e4d9b0]{font-size:%?39?%;font-weight:700}.my-header .left .header-info .username[data-v-f8e4d9b0]{font-size:%?33?%;color:#959da5}.my-header .icon-right[data-v-f8e4d9b0]{font-size:%?35?%;color:#959da5}',""]),t.exports=e},e261:function(t,e,n){"use strict";n.r(e);var a=n("ea7c"),i=n("0b4e");for(var r in i)"default"!==r&&function(t){n.d(e,t,(function(){return i[t]}))}(r);n("abaf");var c,o=n("f0c5"),s=Object(o["a"])(i["default"],a["b"],a["c"],!1,null,"51653a30",null,!1,a["a"],c);e["default"]=s.exports},e769:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a="iconfont icon-right",i=function(){return[[{icon:"mxg-icon mxg-icon-host-color",title:"我的订单",rightIcon:a,page:"/pages/order/order",login:!0},{icon:"mxg-icon mxg-icon-lock-color",title:"我的余额",rightIcon:a,page:"/pages/order/my-balance",login:!0},{icon:"mxg-icon mxg-icon-warn",title:"我的学习",rightIcon:a,page:"/pages/my/study",login:!0}],[{icon:"mxg-icon mxg-icon-set-color",title:"设置",rightIcon:a,page:"/pages/my/setting"},{icon:"mxg-icon mxg-icon-notice-color",title:"意见反馈",rightIcon:a,page:"/pages/my/feedback"}],[{icon:"mxg-icon mxg-icon-model-color",title:"关于我们",rightIcon:a,page:"/pages/my/about"}]]};e.default=i},ea7c:function(t,e,n){"use strict";var a;n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return r})),n.d(e,"a",(function(){return a}));var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"list-box"},t._l(t.list,(function(e,a){return n("v-uni-view",{key:a,staticClass:"list"},t._l(e,(function(e,a){return n("v-uni-view",{key:a,staticClass:"list-item space-between center",attrs:{"hover-class":e.checked||!1===e.checked?"":"active","hover-start-time":50},on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.clickHandler(e)}}},[n("v-uni-view",{staticClass:"left center"},[e.icon?n("v-uni-text",{class:e.icon}):t._e(),n("v-uni-text",[t._v(t._s(e.title))])],1),n("v-uni-view",{staticClass:"right center"},[e.text?n("v-uni-text",[t._v(t._s(e.text))]):t._e(),e.checked||!1===e.checked?n("v-uni-switch",{attrs:{checked:e.checked,color:"#345DC2"},on:{click:function(e){e.stopPropagation(),arguments[0]=e=t.$handleEvent(e),function(){}.apply(void 0,arguments)},change:function(n){arguments[0]=n=t.$handleEvent(n),t.clickHandler(e)}}}):t._e(),e.src?n("v-uni-image",{attrs:{src:e.src}}):t._e(),e.rightIcon?n("v-uni-text",{class:e.rightIcon}):t._e()],1)],1)})),1)})),1)},r=[]}}]);