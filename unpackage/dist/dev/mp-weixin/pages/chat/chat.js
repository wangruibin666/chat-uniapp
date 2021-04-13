(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["pages/chat/chat"],{

/***/ 43:
/*!****************************************************************************************************!*\
  !*** C:/Users/Administrator/Documents/HBuilderProjects/仿微信/main.js?{"page":"pages%2Fchat%2Fchat"} ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(createPage) {__webpack_require__(/*! uni-pages */ 4);
var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 2));
var _chat = _interopRequireDefault(__webpack_require__(/*! ./pages/chat/chat.nvue */ 44));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}
createPage(_chat.default);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["createPage"]))

/***/ }),

/***/ 44:
/*!**********************************************************************************!*\
  !*** C:/Users/Administrator/Documents/HBuilderProjects/仿微信/pages/chat/chat.nvue ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _chat_nvue_vue_type_template_id_6e1957d8_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./chat.nvue?vue&type=template&id=6e1957d8&scoped=true& */ 45);
/* harmony import */ var _chat_nvue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./chat.nvue?vue&type=script&lang=js& */ 47);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _chat_nvue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _chat_nvue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _chat_nvue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./chat.nvue?vue&type=style&index=0&lang=css& */ 49);
/* harmony import */ var _E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 10);

var renderjs





/* normalize component */

var component = Object(_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _chat_nvue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _chat_nvue_vue_type_template_id_6e1957d8_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _chat_nvue_vue_type_template_id_6e1957d8_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "6e1957d8",
  null,
  false,
  _chat_nvue_vue_type_template_id_6e1957d8_scoped_true___WEBPACK_IMPORTED_MODULE_0__["components"],
  renderjs
)

component.options.__file = "pages/chat/chat.nvue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 45:
/*!*****************************************************************************************************************************!*\
  !*** C:/Users/Administrator/Documents/HBuilderProjects/仿微信/pages/chat/chat.nvue?vue&type=template&id=6e1957d8&scoped=true& ***!
  \*****************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_chat_nvue_vue_type_template_id_6e1957d8_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--16-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./chat.nvue?vue&type=template&id=6e1957d8&scoped=true& */ 46);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_chat_nvue_vue_type_template_id_6e1957d8_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_chat_nvue_vue_type_template_id_6e1957d8_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_chat_nvue_vue_type_template_id_6e1957d8_scoped_true___WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_chat_nvue_vue_type_template_id_6e1957d8_scoped_true___WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),

/***/ 46:
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--16-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!C:/Users/Administrator/Documents/HBuilderProjects/仿微信/pages/chat/chat.nvue?vue&type=template&id=6e1957d8&scoped=true& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  if (!_vm._isMounted) {
    _vm.e0 = function($event) {
      _vm.keyboardHeight = 0
    }
  }
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ 47:
/*!***********************************************************************************************************!*\
  !*** C:/Users/Administrator/Documents/HBuilderProjects/仿微信/pages/chat/chat.nvue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _E_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_chat_nvue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./chat.nvue?vue&type=script&lang=js& */ 48);
/* harmony import */ var _E_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_chat_nvue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_E_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_chat_nvue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _E_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_chat_nvue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _E_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_chat_nvue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_E_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_chat_nvue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 48:
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!C:/Users/Administrator/Documents/HBuilderProjects/仿微信/pages/chat/chat.nvue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var freePopup = function freePopup() {__webpack_require__.e(/*! require.ensure | components/free-ui/free-popup */ "components/free-ui/free-popup").then((function () {return resolve(__webpack_require__(/*! @/components/free-ui/free-popup.vue */ 56));}).bind(null, __webpack_require__)).catch(__webpack_require__.oe);};var freeChatItem = function freeChatItem() {Promise.all(/*! require.ensure | components/free-ui/free-chat-item */[__webpack_require__.e("common/vendor"), __webpack_require__.e("components/free-ui/free-chat-item")]).then((function () {return resolve(__webpack_require__(/*! @/components/free-ui/free-chat-item.vue */ 90));}).bind(null, __webpack_require__)).catch(__webpack_require__.oe);};var freeIconButton = function freeIconButton() {__webpack_require__.e(/*! require.ensure | components/free-ui/free-icon-button */ "components/free-ui/free-icon-button").then((function () {return resolve(__webpack_require__(/*! @/components/free-ui/free-icon-button.vue */ 85));}).bind(null, __webpack_require__)).catch(__webpack_require__.oe);};var freeNavBar = function freeNavBar() {__webpack_require__.e(/*! require.ensure | components/free-ui/free-nav-bar */ "components/free-ui/free-nav-bar").then((function () {return resolve(__webpack_require__(/*! @/components/free-ui/free-nav-bar.vue */ 51));}).bind(null, __webpack_require__)).catch(__webpack_require__.oe);};var _default =


























































































































{
  components: {
    freeNavBar: freeNavBar,
    freeIconButton: freeIconButton,
    // freeAvatar,
    freeChatItem: freeChatItem,
    freePopup: freePopup },

  computed: {
    // 获取mask位置
    getMaskBottom: function getMaskBottom() {
      return this.keyboardHeight + uni.upx2px(105);
    },
    // 动态获取菜单高度
    getMenusHeight: function getMenusHeight() {
      var H = 100;
      return this.menus.length * H;
    },
    // 获取菜单样式
    getMenusStyle: function getMenusStyle() {
      return "height: ".concat(this.getMenusHeight, "rpx");
    },
    // 判断是否是本人操作
    isdoSelf: function isdoSelf() {
      var id = 1;
      var user_id = this.propIndex > -1 ? this.list[this.propIndex].user_id : 0;
      return user_id === id;
    },
    // 回去操作菜单
    menuslist: function menuslist() {var _this = this;
      return this.menus.filter(function (i) {return !(i.name == '撤回' && !_this.isdoSelf);});
    },
    // 聊天区域bottom
    chatBodyBottom: function chatBodyBottom() {
      return "bottom:".concat(uni.upx2px(105) + this.keyboardHeight, "px;top:").concat(this.navBarHeight, "px;");
    },
    // 获取操作或者表情包列表
    emotionOrActionList: function emotionOrActionList() {
      return this.mode === 'emotion' || this.mode === 'action' ? this[this.mode + 'List'] : [];
    },
    // 聊天区域所有信息的图片地址
    imageList: function imageList() {
      var arr = [];
      this.list.forEach(function (i) {
        if (i.type == 'emotion' || i.type == 'image') {
          arr.push(i.data);
        }
      });
      return arr;
    } },

  created: function created() {
    this.__init();
  },
  mounted: function mounted() {var _this2 = this;



    this.navBarHeight = statusBarHeight + uni.upx2px(90);

    // 监听键盘高度变化
    uni.onKeyboardHeightChange(function (res) {
      console.log(res.height);
      if (_this2.mode != 'action' && _this2.mode != 'emotion') {
        _this2.keyboardHeight = res.height;
        _this2.keyHight = res.height;
      }
      if (_this2.keyboardHeight) {
        _this2.pageToBottom();
      }
    });
  },
  data: function data() {
    return {
      emotionList: [
      [
      {
        name: '吃手',
        icon: '/static/images/emotion/cizhua.jpeg',
        event: 'sendEmotion' },

      {
        name: '抽烟',
        icon: '/static/images/emotion/chouyan.jpeg',
        event: 'sendEmotion' },

      {
        name: '嗨起来',
        icon: '/static/images/emotion/hai.gif',
        event: 'sendEmotion' },

      {
        name: '可怜',
        icon: '/static/images/emotion/kelian.gif',
        event: 'sendEmotion' },

      {
        name: '辣眼睛',
        icon: '/static/images/emotion/layanjing.jpeg',
        event: 'sendEmotion' },

      {
        name: '唱歌',
        icon: '/static/images/emotion/sing.gif',
        event: 'sendEmotion' },

      {
        name: '摇头',
        icon: '/static/images/emotion/yaotou.gif',
        event: 'sendEmotion' },

      {
        name: '单身',
        icon: '/static/images/emotion/danshen.jpg',
        event: 'sendEmotion' }],


      [
      {
        name: '吃手',
        icon: '/static/images/emotion/cizhua.jpeg',
        event: 'sendEmotion' },

      {
        name: '抽烟',
        icon: '/static/images/emotion/chouyan.jpeg',
        event: 'sendEmotion' },

      {
        name: '嗨起来',
        icon: '/static/images/emotion/hai.gif',
        event: 'sendEmotion' },

      {
        name: '可怜',
        icon: '/static/images/emotion/kelian.gif',
        event: 'sendEmotion' },

      {
        name: '辣眼睛',
        icon: '/static/images/emotion/layanjing.jpeg',
        event: 'sendEmotion' },

      {
        name: '唱歌',
        icon: '/static/images/emotion/sing.gif',
        event: 'sendEmotion' },

      {
        name: '摇头',
        icon: '/static/images/emotion/yaotou.gif',
        event: 'sendEmotion' },

      {
        name: '单身',
        icon: '/static/images/emotion/danshen.jpg',
        event: 'sendEmotion' }],


      [
      {
        name: '吃手',
        icon: '/static/images/emotion/cizhua.jpeg',
        event: 'sendEmotion' },

      {
        name: '抽烟',
        icon: '/static/images/emotion/chouyan.jpeg',
        event: 'sendEmotion' },

      {
        name: '嗨起来',
        icon: '/static/images/emotion/hai.gif',
        event: 'sendEmotion' },

      {
        name: '可怜',
        icon: '/static/images/emotion/kelian.gif',
        event: 'sendEmotion' },

      {
        name: '辣眼睛',
        icon: '/static/images/emotion/layanjing.jpeg',
        event: 'sendEmotion' },

      {
        name: '唱歌',
        icon: '/static/images/emotion/sing.gif',
        event: 'sendEmotion' },

      {
        name: '摇头',
        icon: '/static/images/emotion/yaotou.gif',
        event: 'sendEmotion' },

      {
        name: '单身',
        icon: '/static/images/emotion/danshen.jpg',
        event: 'sendEmotion' }]],




      keyHight: 0, //备用键盘高度
      mode: 'text', //模式  text文字 emotion表情 action操作 audio音频
      // 扩展菜单列表
      actionList: [
      [
      {
        name: '相册',
        icon: '/static/images/extends/pic.png',
        event: 'uploadImage' },

      {
        name: '拍摄',
        icon: '/static/images/extends/video.png',
        event: '' },

      {
        name: '收藏',
        icon: '/static/images/extends/shoucan.png',
        event: '' },

      {
        name: '名片',
        icon: '/static/images/extends/man.png',
        event: '' },

      {
        name: '语音通话',
        icon: '/static/images/extends/phone.png',
        event: '' },

      {
        name: '位置',
        icon: '/static/images/extends/path.png',
        event: '' }]],




      text: '', //输入文字
      // 键盘高度
      keyboardHeight: 0,
      propIndex: -1, //当前操作气泡的索引
      navBarHeight: 0,
      menus: [
      {
        name: "复制",
        event: "setTop" },

      {
        name: "发送给朋友",
        event: "delChat" },

      {
        name: "收藏",
        event: "delChat" },

      {
        name: "删除",
        event: "delChat" },

      {
        name: "多选",
        event: "delChat" },

      {
        name: "撤回",
        event: "removeChatItem" }],



      list: [
      {
        avatar: '/static/images/mail/group.png',
        user_id: 2,
        type: 'text',
        data: '你好你好啊啊啊啊啊啊啊  啊   啊啊啊啊啊啊啊啊啊啊 啊啊啊啊啊啊啊啊啊aaaaaaaa',
        nickname: '昵称',
        create_time: 156931227,
        isremove: true },


      {
        avatar: '/static/images/mail/group.png',
        user_id: 2,
        type: 'text',
        data: '你好你好啊啊啊啊啊啊啊  啊   啊啊啊啊啊啊啊啊啊啊 啊啊啊啊啊啊啊啊啊aaaaaaaa',
        nickname: '昵称',
        create_time: 156931227,
        isremove: false },


      {
        avatar: '/static/images/mail/group.png',
        user_id: 2,
        type: 'text',
        data: '你好你好啊啊啊啊啊啊啊  啊   啊啊啊啊啊啊啊啊啊啊 啊啊啊啊啊啊啊啊啊aaaaaaaa',
        nickname: '昵称',
        create_time: 156931227,
        isremove: false },


      {
        avatar: '/static/images/mail/group.png',
        user_id: 1,
        type: 'text',
        data: '哈哈你好你好啊啊啊啊啊啊啊  啊   啊啊啊啊啊啊啊啊啊啊 啊啊啊啊啊啊啊啊啊aaaaaaaa',
        nickname: '昵称',
        create_time: 156937327,
        isremove: false },


      {
        avatar: '/static/images/mail/group.png',
        user_id: 1,
        type: 'audio',
        data: '/static/audio/1.mp3',
        nickname: '昵称',
        create_time: 156991427,
        isremove: false },


      {
        avatar: '/static/images/mail/group.png',
        user_id: 1,
        type: 'audio',
        data: '/static/audio/1.mp3',
        nickname: '昵称',
        create_time: 156991427,
        isremove: false },


      {
        avatar: '/static/images/mail/group.png',
        user_id: 1,
        type: 'audio',
        data: '/static/audio/1.mp3',
        nickname: '昵称',
        create_time: 156991427,
        isremove: false }],



      urls: [] };

  },
  watch: {
    mode: function mode(n, o) {
      if (n !== 'action' && n !== 'emotion') {
        this.$refs.action.hide();
      }
      if (n !== 'text') {
        uni.hideKeyboard();
      }
    } },

  methods: {
    preview: function preview(url) {
      uni.previewImage({
        current: url,
        urls: this.imageList,
        indicator: "default" });

    },
    __init: function __init() {
      var total = 30;
      var page = Math.ceil(total / 8);
      var arr = [];

    },
    clickPage: function clickPage() {
      this.mode = '';
    },
    // 输入框聚焦
    onInputFocus: function onInputFocus() {
      this.mode = 'text';
    },
    // 扩展菜单点击事件
    actionEvent: function actionEvent(e) {var _this3 = this;
      switch (e.event) {
        case 'uploadImage':
          uni.chooseImage({
            count: 9,
            success: function success(res) {
              console.log(res);
              res.tempFilePaths.forEach(function (item) {
                _this3.send('image', item);
              });
            } });

          break;
        default:
          this.send('emotion', e.icon);
          break;}

    },
    // 表情包
    openEmotion: function openEmotion() {
      this.mode = 'emotion';
      this.$refs.action.show();
      uni.hideKeyboard();
      this.keyboardHeight = 282;
    },
    // 打开扩展菜单
    openAction: function openAction() {
      this.mode = 'action';
      this.$refs.action.show();
      uni.hideKeyboard();
      this.keyboardHeight = 282;
    },
    // 发送
    send: function send(type) {var _this4 = this;var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
      if (type == 'text' && !this.text) return;
      var time = new Date().getTime();
      var obj = {
        avatar: '/static/images/mail/group.png',
        user_id: 1,
        type: type, //text,image,audio,video,emotion
        data: '',
        nickname: '昵称',
        create_time: time,
        isremove: false };

      switch (type) {
        case 'text':
          obj.data = this.text;

          break;
        default:
          obj.data = data;
          break;}

      this.list.push(obj);
      if (type == 'text') {
        this.text = '';
      }
      this.$nextTick(function () {
        _this4.pageToBottom();
      });

    },
    // 回到顶部
    pageToBottom: function pageToBottom() {













    },

    //  长按消息气泡
    long: function long(_ref) {var x = _ref.x,y = _ref.y,index = _ref.index;
      //弹出菜单的初始化
      //索引
      this.propIndex = index;

      this.$refs.extend.show(x, y, index);
    },
    clickEvent: function clickEvent(event) {
      switch (event) {
        case 'removeChatItem':
          // 拿到当前操作的信息
          if (this.propIndex > -1) {
            this.list[this.propIndex].isremove = true;
          }
          break;
        default:
          break;}

      // 关闭菜单
      this.$refs.extend.hide();
    } } };exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["default"]))

/***/ }),

/***/ 49:
/*!*******************************************************************************************************************!*\
  !*** C:/Users/Administrator/Documents/HBuilderProjects/仿微信/pages/chat/chat.nvue?vue&type=style&index=0&lang=css& ***!
  \*******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _E_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_E_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_E_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_chat_nvue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-2!./node_modules/postcss-loader/src??ref--6-oneOf-1-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./chat.nvue?vue&type=style&index=0&lang=css& */ 50);
/* harmony import */ var _E_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_E_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_E_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_chat_nvue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_E_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_E_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_E_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_chat_nvue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _E_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_E_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_E_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_chat_nvue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _E_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_E_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_E_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_chat_nvue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_E_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_E_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_E_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_chat_nvue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 50:
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-2!./node_modules/postcss-loader/src??ref--6-oneOf-1-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!C:/Users/Administrator/Documents/HBuilderProjects/仿微信/pages/chat/chat.nvue?vue&type=style&index=0&lang=css& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(false) { var cssReload; }
  

/***/ })

},[[43,"common/runtime","common/vendor"]]]);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/chat/chat.js.map