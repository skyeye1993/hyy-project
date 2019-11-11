// { "framework": "Vue"} 

/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 102);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.apiUrl = {
  resUrl: 'http://192.168.1.108:8081/src/images/'
};
exports.appConfig = {
  lineColor: '#e3e3e3'
};

/***/ }),

/***/ 102:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Shop = __webpack_require__(56);

var _Shop2 = _interopRequireDefault(_Shop);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_Shop2.default.el = '#root';
new Vue(_Shop2.default);

/***/ }),

/***/ 56:
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(57)
)

/* script */
__vue_exports__ = __webpack_require__(58)

/* template */
var __vue_template__ = __webpack_require__(59)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "D:\\important\\githubRepository\\webstormProject\\hyy-project\\src\\Shop\\Shop.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-159fe786"
__vue_options__.style = __vue_options__.style || {}
__vue_styles__.forEach(function (module) {
  for (var name in module) {
    __vue_options__.style[name] = module[name]
  }
})
if (typeof __register_static_styles__ === "function") {
  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
}

module.exports = __vue_exports__


/***/ }),

/***/ 57:
/***/ (function(module, exports) {

module.exports = {
  "container": {
    "backgroundColor": "#e8e8e8"
  },
  "navgationContainer": {
    "height": "128",
    "backgroundColor": "rgba(255,96,0,1)"
  },
  "navigation": {
    "flexDirection": "row",
    "height": "88",
    "marginTop": "40",
    "alignItems": "center",
    "justifyContent": "center"
  },
  "pageTitle": {
    "color": "#FFFFFF",
    "fontSize": "40"
  },
  "webClass": {
    "flex": 1
  }
}

/***/ }),

/***/ 58:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

var globalDefine = __webpack_require__(0);
var modal = weex.requireModule('modal');

exports.default = {
    data: function data() {
        return {
            searchIcon: globalDefine.apiUrl.resUrl + 'icon_shop_search.png',
            mapIcon: globalDefine.apiUrl.resUrl + 'icon_shop_local.png',
            detailUrl: 'http://i.meituan.com/topic/huilife'
        };
    },

    methods: {
        onPageStart: function onPageStart(e) {
            modal.toast({ message: '开始加载:' + e.url, duration: 0.5 });
        },
        onPageFinish: function onPageFinish(e) {
            modal.toast({ message: '加载成功:' + e.title, duration: 0.5 });
        },
        onError: function onError(e) {
            modal.toast({ message: '加载失败', duration: 0.5 });
        }
    }
};

/***/ }),

/***/ 59:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["container"]
  }, [_c('div', {
    staticClass: ["navgationContainer"]
  }, [_c('div', {
    staticClass: ["navigation"]
  }, [_c('image', {
    staticStyle: {
      position: "absolute",
      width: "60px",
      height: "60px",
      left: "25px",
      top: "13px"
    },
    attrs: {
      "src": _vm.mapIcon
    }
  }), _c('text', {
    staticClass: ["pageTitle"]
  }, [_vm._v("商家")]), _c('image', {
    staticStyle: {
      position: "absolute",
      width: "60px",
      height: "60px",
      right: "25px",
      top: "10px"
    },
    attrs: {
      "src": _vm.searchIcon
    }
  })])]), _c('web', {
    staticClass: ["webClass"],
    attrs: {
      "src": _vm.detailUrl
    },
    on: {
      "pagestart": _vm.onPageStart,
      "pagefinish": _vm.onPageFinish,
      "error": _vm.onError
    }
  })])
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ })

/******/ });