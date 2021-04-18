(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["pages/chat/chat"],{

/***/ 46:
/*!****************************************************************************!*\
  !*** C:/Users/wang/Desktop/we-chat/main.js?{"page":"pages%2Fchat%2Fchat"} ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(createPage) {__webpack_require__(/*! uni-pages */ 4);
var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 2));
var _chat = _interopRequireDefault(__webpack_require__(/*! ./pages/chat/chat.nvue */ 47));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}
createPage(_chat.default);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["createPage"]))

/***/ }),

/***/ 47:
/*!**********************************************************!*\
  !*** C:/Users/wang/Desktop/we-chat/pages/chat/chat.nvue ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _chat_nvue_vue_type_template_id_6e1957d8_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./chat.nvue?vue&type=template&id=6e1957d8&scoped=true& */ 48);
/* harmony import */ var _chat_nvue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./chat.nvue?vue&type=script&lang=js& */ 50);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _chat_nvue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _chat_nvue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _chat_nvue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./chat.nvue?vue&type=style&index=0&lang=css& */ 52);
/* harmony import */ var _H_HBuilderX_2_9_3_20201014_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 10);

var renderjs





/* normalize component */

var component = Object(_H_HBuilderX_2_9_3_20201014_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
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

/***/ 48:
/*!*****************************************************************************************************!*\
  !*** C:/Users/wang/Desktop/we-chat/pages/chat/chat.nvue?vue&type=template&id=6e1957d8&scoped=true& ***!
  \*****************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _H_HBuilderX_2_9_3_20201014_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_H_HBuilderX_2_9_3_20201014_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_H_HBuilderX_2_9_3_20201014_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_H_HBuilderX_2_9_3_20201014_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_H_HBuilderX_2_9_3_20201014_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_H_HBuilderX_2_9_3_20201014_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_chat_nvue_vue_type_template_id_6e1957d8_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--16-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./chat.nvue?vue&type=template&id=6e1957d8&scoped=true& */ 49);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _H_HBuilderX_2_9_3_20201014_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_H_HBuilderX_2_9_3_20201014_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_H_HBuilderX_2_9_3_20201014_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_H_HBuilderX_2_9_3_20201014_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_H_HBuilderX_2_9_3_20201014_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_H_HBuilderX_2_9_3_20201014_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_chat_nvue_vue_type_template_id_6e1957d8_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _H_HBuilderX_2_9_3_20201014_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_H_HBuilderX_2_9_3_20201014_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_H_HBuilderX_2_9_3_20201014_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_H_HBuilderX_2_9_3_20201014_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_H_HBuilderX_2_9_3_20201014_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_H_HBuilderX_2_9_3_20201014_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_chat_nvue_vue_type_template_id_6e1957d8_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _H_HBuilderX_2_9_3_20201014_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_H_HBuilderX_2_9_3_20201014_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_H_HBuilderX_2_9_3_20201014_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_H_HBuilderX_2_9_3_20201014_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_H_HBuilderX_2_9_3_20201014_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_H_HBuilderX_2_9_3_20201014_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_chat_nvue_vue_type_template_id_6e1957d8_scoped_true___WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _H_HBuilderX_2_9_3_20201014_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_H_HBuilderX_2_9_3_20201014_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_H_HBuilderX_2_9_3_20201014_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_H_HBuilderX_2_9_3_20201014_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_H_HBuilderX_2_9_3_20201014_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_H_HBuilderX_2_9_3_20201014_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_chat_nvue_vue_type_template_id_6e1957d8_scoped_true___WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),

/***/ 49:
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--16-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!C:/Users/wang/Desktop/we-chat/pages/chat/chat.nvue?vue&type=template&id=6e1957d8&scoped=true& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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

/***/ 50:
/*!***********************************************************************************!*\
  !*** C:/Users/wang/Desktop/we-chat/pages/chat/chat.nvue?vue&type=script&lang=js& ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _H_HBuilderX_2_9_3_20201014_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_H_HBuilderX_2_9_3_20201014_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_H_HBuilderX_2_9_3_20201014_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_H_HBuilderX_2_9_3_20201014_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_H_HBuilderX_2_9_3_20201014_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_chat_nvue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./chat.nvue?vue&type=script&lang=js& */ 51);
/* harmony import */ var _H_HBuilderX_2_9_3_20201014_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_H_HBuilderX_2_9_3_20201014_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_H_HBuilderX_2_9_3_20201014_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_H_HBuilderX_2_9_3_20201014_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_H_HBuilderX_2_9_3_20201014_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_chat_nvue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_H_HBuilderX_2_9_3_20201014_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_H_HBuilderX_2_9_3_20201014_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_H_HBuilderX_2_9_3_20201014_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_H_HBuilderX_2_9_3_20201014_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_H_HBuilderX_2_9_3_20201014_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_chat_nvue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _H_HBuilderX_2_9_3_20201014_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_H_HBuilderX_2_9_3_20201014_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_H_HBuilderX_2_9_3_20201014_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_H_HBuilderX_2_9_3_20201014_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_H_HBuilderX_2_9_3_20201014_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_chat_nvue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _H_HBuilderX_2_9_3_20201014_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_H_HBuilderX_2_9_3_20201014_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_H_HBuilderX_2_9_3_20201014_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_H_HBuilderX_2_9_3_20201014_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_H_HBuilderX_2_9_3_20201014_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_chat_nvue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_H_HBuilderX_2_9_3_20201014_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_H_HBuilderX_2_9_3_20201014_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_H_HBuilderX_2_9_3_20201014_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_H_HBuilderX_2_9_3_20201014_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_H_HBuilderX_2_9_3_20201014_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_chat_nvue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 51:
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!C:/Users/wang/Desktop/we-chat/pages/chat/chat.nvue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;




































































































































var _vuex = __webpack_require__(/*! vuex */ 12);function ownKeys(object, enumerableOnly) {var keys = Object.keys(object);if (Object.getOwnPropertySymbols) {var symbols = Object.getOwnPropertySymbols(object);if (enumerableOnly) symbols = symbols.filter(function (sym) {return Object.getOwnPropertyDescriptor(object, sym).enumerable;});keys.push.apply(keys, symbols);}return keys;}function _objectSpread(target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i] != null ? arguments[i] : {};if (i % 2) {ownKeys(Object(source), true).forEach(function (key) {_defineProperty(target, key, source[key]);});} else if (Object.getOwnPropertyDescriptors) {Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));} else {ownKeys(Object(source)).forEach(function (key) {Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));});}}return target;}function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}var freeMainButton = function freeMainButton() {__webpack_require__.e(/*! require.ensure | components/free-ui/free-main-button */ "components/free-ui/free-main-button").then((function () {return resolve(__webpack_require__(/*! @/components/free-ui/free-main-button.vue */ 141));}).bind(null, __webpack_require__)).catch(__webpack_require__.oe);};var freePopup = function freePopup() {__webpack_require__.e(/*! require.ensure | components/free-ui/free-popup */ "components/free-ui/free-popup").then((function () {return resolve(__webpack_require__(/*! @/components/free-ui/free-popup.vue */ 107));}).bind(null, __webpack_require__)).catch(__webpack_require__.oe);};var freeChatItem = function freeChatItem() {Promise.all(/*! require.ensure | components/free-ui/free-chat-item */[__webpack_require__.e("common/vendor"), __webpack_require__.e("components/free-ui/free-chat-item")]).then((function () {return resolve(__webpack_require__(/*! @/components/free-ui/free-chat-item.vue */ 146));}).bind(null, __webpack_require__)).catch(__webpack_require__.oe);};var freeIconButton = function freeIconButton() {__webpack_require__.e(/*! require.ensure | components/free-ui/free-icon-button */ "components/free-ui/free-icon-button").then((function () {return resolve(__webpack_require__(/*! @/components/free-ui/free-icon-button.vue */ 136));}).bind(null, __webpack_require__)).catch(__webpack_require__.oe);};var freeNavBar = function freeNavBar() {__webpack_require__.e(/*! require.ensure | components/free-ui/free-nav-bar */ "components/free-ui/free-nav-bar").then((function () {return resolve(__webpack_require__(/*! @/components/free-ui/free-nav-bar.vue */ 102));}).bind(null, __webpack_require__)).catch(__webpack_require__.oe);};var _default =
{
  components: {
    freeMainButton: freeMainButton,
    freeNavBar: freeNavBar,
    freeIconButton: freeIconButton,
    // freeAvatar,
    freeChatItem: freeChatItem,
    freePopup: freePopup },

  computed: _objectSpread(_objectSpread({},
  (0, _vuex.mapState)({
    RECORD: function RECORD(state) {return state.audio.RECORD;},
    RecordTime: function RecordTime(state) {return state.audio.RecordTime;} })), {}, {

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
    // 操作菜单
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
    } }),

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
    //注册发送音频事件
    this.regSendVoiceEvent(function (url) {
      if (!_this2.unRecord) {
        _this2.send('audio', url, { time: _this2.RecordTime });
      }
    });
    // //监听录音开始
    // RECORD.onStart(()=>{
    // 	this.RECORDTIMER = setInterval(()=>{
    // 		this.RecordTime++
    // 	},1000)
    // })
    // // 监听录音结束
    // RECORD.onStop((e)=>{
    // 	if(this.RECORDTIMER){
    // 		clearInterval(this.RECORDTIMER)
    // 		this.RECORDTIMER = null
    // 	}
    // 	!this.unRecord && this.send('audio', e.tempFilePath, {time: this.RecordTime})
    // })
  },
  data: function data() {
    return {
      // RECORDTIMER:null,//定时
      // 音频录制状态
      isRecording: false,
      // 录音时长
      // RecordTime: 0,
      RecordingStartY: 0,
      //是否取消录音
      unRecord: false,
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
      mode: 'audio', //模式  text文字 emotion表情 action操作 audio音频
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
        event: 'uploadVideo' },

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
        options: {
          time: 30 },

        nickname: '昵称',
        create_time: 156991427,
        isremove: false },


      {
        avatar: '/static/images/mail/group.png',
        user_id: 1,
        type: 'audio',
        data: '/static/audio/1.mp3',
        options: {
          time: 20 },

        nickname: '昵称',
        create_time: 156991427,
        isremove: false },


      {
        avatar: '/static/images/mail/group.png',
        user_id: 1,
        type: 'audio',
        data: '/static/audio/1.mp3',
        options: {
          time: 10 },

        nickname: '昵称',
        create_time: 156991427,
        isremove: false },


      {
        avatar: '/static/images/mail/group.png',
        user_id: 2,
        type: 'audio',
        data: '/static/audio/1.mp3',
        options: {
          time: 10 },

        nickname: '昵称',
        create_time: 156991427,
        isremove: false },


      {
        avatar: '/static/images/mail/group.png',
        user_id: 1,
        type: 'video',
        data: '/static/video/demo.mp4',
        nickname: '昵称',
        create_time: 156991427,
        isremove: false,
        options: {
          poster: '/static/video/demo.jpg' } }],




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

  methods: _objectSpread(_objectSpread({},
  (0, _vuex.mapMutations)(['regSendVoiceEvent'])), {}, {

    //点击右上角三点跳转聊天对象信息设置页面
    openChatSet: function openChatSet() {
      uni.navigateTo({
        url: 'chat-set/chat-set' });

    },
    // 音频录制操作
    voiceTouchStart: function voiceTouchStart(e) {
      this.isRecording = true;
      this.unRecord = false;
      this.RecordingStartY = e.changedTouches[0].screenY;
      // 录音开始
      this.RECORD.start({
        format: "mp3" });

    },
    voiceTouchEnd: function voiceTouchEnd(e) {
      this.isRecording = false;
      this.RECORD.stop();
    },
    voiceTouchMove: function voiceTouchMove(e) {
      var Y = Math.abs(e.changedTouches[0].screenY - this.RecordingStartY);
      this.unRecord = Y > 80;
    },
    voiceTouchCancel: function voiceTouchCancel() {
      // console.log('cancel')
      this.isRecording = false;
      // 打断停止发送
      this.unRecord = true;
      this.RECORD.stop();
    },
    // 切换音频和文本输入
    changeVoiceOrText: function changeVoiceOrText() {
      this.mode = this.mode !== 'audio' ? 'audio' : 'text';
    },
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
              res.tempFilePaths.forEach(function (item) {
                _this3.send('image', item);
              });
            } });

        case 'uploadVideo':
          uni.chooseVideo({
            maxDuration: 3,
            sourceType: ['camera', 'album'],
            success: function success(res) {
              console.log(res);
              //渲染页面
              _this3.send('video', res.tempFilePath);
              //发送服务端（获取视频封面，返回url）

              //修改本地的发送状态
            },
            fail: function fail(err) {
              console.log(err);
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
    send: function send(type) {var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      if (type == 'text' && !this.text) return;
      var time = new Date().getTime();
      var obj = {
        avatar: '/static/images/mail/group.png',
        user_id: 1,
        type: type, //text,image,audio,video,emotion
        data: data,
        options: options,
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
      this.pageToBottom();

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
    } }) };exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["default"]))

/***/ }),

/***/ 52:
/*!*******************************************************************************************!*\
  !*** C:/Users/wang/Desktop/we-chat/pages/chat/chat.nvue?vue&type=style&index=0&lang=css& ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _H_HBuilderX_2_9_3_20201014_full_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_H_HBuilderX_2_9_3_20201014_full_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_H_HBuilderX_2_9_3_20201014_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_H_HBuilderX_2_9_3_20201014_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_H_HBuilderX_2_9_3_20201014_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_H_HBuilderX_2_9_3_20201014_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_H_HBuilderX_2_9_3_20201014_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_chat_nvue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-2!./node_modules/postcss-loader/src??ref--6-oneOf-1-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./chat.nvue?vue&type=style&index=0&lang=css& */ 53);
/* harmony import */ var _H_HBuilderX_2_9_3_20201014_full_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_H_HBuilderX_2_9_3_20201014_full_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_H_HBuilderX_2_9_3_20201014_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_H_HBuilderX_2_9_3_20201014_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_H_HBuilderX_2_9_3_20201014_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_H_HBuilderX_2_9_3_20201014_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_H_HBuilderX_2_9_3_20201014_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_chat_nvue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_H_HBuilderX_2_9_3_20201014_full_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_H_HBuilderX_2_9_3_20201014_full_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_H_HBuilderX_2_9_3_20201014_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_H_HBuilderX_2_9_3_20201014_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_H_HBuilderX_2_9_3_20201014_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_H_HBuilderX_2_9_3_20201014_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_H_HBuilderX_2_9_3_20201014_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_chat_nvue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _H_HBuilderX_2_9_3_20201014_full_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_H_HBuilderX_2_9_3_20201014_full_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_H_HBuilderX_2_9_3_20201014_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_H_HBuilderX_2_9_3_20201014_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_H_HBuilderX_2_9_3_20201014_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_H_HBuilderX_2_9_3_20201014_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_H_HBuilderX_2_9_3_20201014_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_chat_nvue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _H_HBuilderX_2_9_3_20201014_full_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_H_HBuilderX_2_9_3_20201014_full_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_H_HBuilderX_2_9_3_20201014_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_H_HBuilderX_2_9_3_20201014_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_H_HBuilderX_2_9_3_20201014_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_H_HBuilderX_2_9_3_20201014_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_H_HBuilderX_2_9_3_20201014_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_chat_nvue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_H_HBuilderX_2_9_3_20201014_full_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_H_HBuilderX_2_9_3_20201014_full_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_H_HBuilderX_2_9_3_20201014_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_H_HBuilderX_2_9_3_20201014_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_H_HBuilderX_2_9_3_20201014_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_H_HBuilderX_2_9_3_20201014_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_H_HBuilderX_2_9_3_20201014_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_chat_nvue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 53:
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-2!./node_modules/postcss-loader/src??ref--6-oneOf-1-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!C:/Users/wang/Desktop/we-chat/pages/chat/chat.nvue?vue&type=style&index=0&lang=css& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(false) { var cssReload; }
  

/***/ })

},[[46,"common/runtime","common/vendor"]]]);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/chat/chat.js.map