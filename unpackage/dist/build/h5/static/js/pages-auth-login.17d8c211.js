(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-auth-login"],{1611:function(t,e,n){"use strict";var a=n("9978"),i=n.n(a);i.a},"24b1":function(t,e,n){"use strict";n.r(e);var a=n("5344"),i=n("e966");for(var o in i)"default"!==o&&function(t){n.d(e,t,(function(){return i[t]}))}(o);n("1611");var r,c=n("f0c5"),s=Object(c["a"])(i["default"],a["b"],a["c"],!1,null,"21a63062",null,!1,a["a"],r);e["default"]=s.exports},"422c":function(t,e,n){"use strict";var a=n("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,n("96cf");var i=a(n("1da1")),o=a(n("0b53")),r={data:function(){return{mobile:"",code:"",loading:!1,agreement:!0}},methods:{login:function(){var t=this;return(0,i.default)(regeneratorRuntime.mark((function e(){var n,a,i;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(t.agreement){e.next=3;break}return t.$util.msg("请阅读并同意用户服务及隐私协议"),e.abrupt("return");case 3:if(n=t.mobile,a=t.code,t.$util.checkStr(n,"mobile")){e.next=7;break}return t.$util.msg("请输入有效手机号码"),e.abrupt("return");case 7:if(t.$util.checkStr(a,"mobileCode")){e.next=10;break}return t.$util.msg("验证码输入错误"),e.abrupt("return");case 10:return t.loading=!0,uni.showLoading({title:"登录中",mask:!0}),e.next=14,o.default.login({mobile:n,code:a});case 14:i=e.sent,t.loading=!1,uni.hideLoading(),2e4===i.code?t.loginSuccessCallBack(i.data):t.$util.msg(i.message);case 18:case"end":return e.stop()}}),e)})))()},loginSuccessCallBack:function(t){var e=this;this.$util.msg("登录成功"),this.$store.commit("setToken",t),setTimeout((function(){e.navBack()}),500)},toProviderLogin:function(t){var e=this;this.agreement?(uni.showLoading({mask:!0}),uni.login({provider:t,success:function(t){e.getServiceUserInfo(data)},fail:function(t){e.$util.msg("授权登录失败"),uni.hideLoading()}})):this.$util.msg("请阅读并同意用户服务及隐私协议")},getServiceUserInfo:function(t){var e=this;return(0,i.default)(regeneratorRuntime.mark((function n(){var a,i,r,c;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,o.default.loginByProvider(t);case 2:if(a=n.sent,i=a.code,r=a.message,c=a.data,uni.hideLoading(),2e4===i){n.next=10;break}return e.$util.msg(r),n.abrupt("return");case 10:c.userInfo.mobile&&c.access_token?e.loginSuccessCallBack(c):(e.$util.msg("授权成功，请绑定手机号"),e.navTo("/pages/auth/bind-mobile?data="+JSON.stringify(c)));case 11:case"end":return n.stop()}}),n)})))()},checkAgreement:function(){this.agreement=!this.agreement}}};e.default=r},5241:function(t,e,n){var a=n("24fb");e=a(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/*文本基本颜色*/\r\n/* 下划线 */.app[data-v-21a63062]{padding-top:%?200?%}\r\n/* 关闭按钮 */.back-btn[data-v-21a63062]{position:absolute;left:%?20?%;top:calc(0px + %?20?%);z-index:90;padding:%?20?%;font-size:%?39?%;color:#606266}.left-top-sign[data-v-21a63062]{font-size:%?120?%;color:#f8f8f8}.welcome[data-v-21a63062]{position:relative;top:%?-90?%;padding-left:%?60?%;font-size:%?46?%;color:#555;text-shadow:1px 0 1px rgba(0,0,0,.3)}.input-content[data-v-21a63062]{padding:0 %?60?%}.input-item[data-v-21a63062]{display:flex;flex-direction:column;justify-content:center;align-items:flex-start;padding-left:%?30?%;background:#f8f6fc;height:%?120?%;border-radius:4px;margin-bottom:%?50?%}.input-item[data-v-21a63062]:last-child{margin-bottom:0}.input-item .row[data-v-21a63062]{width:100%}.input-item .tit[data-v-21a63062]{height:%?50?%;line-height:%?56?%;font-size:%?26?%;color:#606266}.input-item uni-input[data-v-21a63062]{flex:1;height:%?60?%;font-size:%?30?%;color:#303133;width:100%}uni-button[type=primary][data-v-21a63062]{background-color:#345dc2!important}.button-hover[type=primary][data-v-21a63062]{background-color:#007aff!important}\r\n/* 其他登录方式 */.other-wrapper[data-v-21a63062]{display:flex;flex-direction:column;align-items:center;padding-top:%?20?%;margin-top:%?80?%}.other-wrapper .weixin[data-v-21a63062]{border:0}.other-wrapper .line[data-v-21a63062]{margin-bottom:%?40?%}.other-wrapper .line .tit[data-v-21a63062]{margin:0 %?32?%;font-size:%?24?%;color:#606266}.other-wrapper .line[data-v-21a63062]:before, .other-wrapper .line[data-v-21a63062]:after{content:"";width:%?160?%;height:0;border-top:1px solid #e0e0e0}.other-wrapper .icon[data-v-21a63062]{width:%?80?%;height:%?80?%;margin:0 %?50?%}.agreement[data-v-21a63062]{position:absolute;left:0;bottom:%?10?%;width:%?750?%;height:%?90?%;font-size:%?24?%;color:#999}.agreement .iconfont[data-v-21a63062]{font-size:%?36?%;color:#ccc;margin-right:%?8?%}.agreement .iconfont.active[data-v-21a63062]{color:#345dc2}.agreement .tit[data-v-21a63062]{color:#40a2ff}',""]),t.exports=e},5344:function(t,e,n){"use strict";n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return o})),n.d(e,"a",(function(){return a}));var a={mxgCode:n("ad08").default},i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"app"},[n("v-uni-text",{staticClass:"back-btn iconfont icon-close",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.navBack(1)}}}),n("v-uni-view",{staticClass:"left-top-sign"},[t._v("LOGIN")]),n("v-uni-view",{staticClass:"welcome"},[t._v("欢迎回来,李光亚！")]),n("v-uni-view",{staticClass:"input-content"},[n("v-uni-view",{staticClass:"input-item"},[n("v-uni-text",{staticClass:"tit"},[t._v("手机号码")]),n("v-uni-view",[n("v-uni-input",{attrs:{maxlength:"11",type:"number",placeholder:"请输入手机号码","placeholder-style":"color: #909399"},model:{value:t.mobile,callback:function(e){t.mobile=e},expression:"mobile"}})],1)],1),n("v-uni-view",{staticClass:"input-item"},[n("v-uni-text",{staticClass:"tit"},[t._v("验证码")]),n("v-uni-view",{staticClass:"row"},[n("v-uni-input",{attrs:{maxlength:"6",type:"number",placeholder:"请输入手机验证码","placeholder-style":"color: #909399"},model:{value:t.code,callback:function(e){t.code=e},expression:"code"}}),n("mxg-code",{attrs:{mobile:t.mobile,templateCode:"MSM_1999123123"}})],1)],1),n("v-uni-button",{attrs:{loading:t.loading,type:"primary"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.login.apply(void 0,arguments)}}},[t._v("登录")])],1),n("v-uni-view",{staticClass:"agreement center"},[n("v-uni-text",{staticClass:" iconfont icon-roundcheckfill",class:{active:t.agreement},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.checkAgreement.apply(void 0,arguments)}}}),n("v-uni-text",{on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.checkAgreement.apply(void 0,arguments)}}},[t._v("请认真阅读并同意")]),n("v-uni-text",{staticClass:"tit",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.navTo("/pages/public/xieyi")}}},[t._v("《用户服务协议》")]),n("v-uni-text",{staticClass:"tit",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.navTo("/pages/public/yinsi")}}},[t._v("《隐私权政策》")])],1)],1)},o=[]},9978:function(t,e,n){var a=n("5241");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var i=n("4f06").default;i("1d06351e",a,!0,{sourceMap:!1,shadowMode:!1})},e966:function(t,e,n){"use strict";n.r(e);var a=n("422c"),i=n.n(a);for(var o in a)"default"!==o&&function(t){n.d(e,t,(function(){return a[t]}))}(o);e["default"]=i.a}}]);