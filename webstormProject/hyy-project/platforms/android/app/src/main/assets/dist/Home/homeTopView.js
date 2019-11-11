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
/******/ 	return __webpack_require__(__webpack_require__.s = 50);
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

/***/ 10:
/***/ (function(module, exports) {

module.exports = {
  "slider": {
    "width": "750",
    "height": "340"
  },
  "scrollerClass": {
    "flexDirection": "row"
  },
  "indicatorClass": {
    "width": "750",
    "height": "30",
    "itemColor": "#A9A9A9",
    "itemSelectedColor": "#FFA500",
    "itemSize": "15",
    "top": "340",
    "left": "0"
  }
}

/***/ }),

/***/ 11:
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
//
//
//
//
//

var globalDefine = __webpack_require__(0);

exports.default = {
    data: function data() {
        return {
            widths: 750,
            items2: [[{ name: '美食', icon: globalDefine.apiUrl.resUrl + 'ms.png' }, { name: '电影', icon: globalDefine.apiUrl.resUrl + 'dy.png' }, { name: '酒店', icon: globalDefine.apiUrl.resUrl + 'jd.png' }, { name: '休闲娱乐', icon: globalDefine.apiUrl.resUrl + 'xxyl.png' }, { name: '外卖', icon: globalDefine.apiUrl.resUrl + 'wm.png' }], [{ name: '自助餐', icon: globalDefine.apiUrl.resUrl + 'zzc.png' }, { name: 'KTV', icon: globalDefine.apiUrl.resUrl + 'ktv.png' }, { name: '火车票机票', icon: globalDefine.apiUrl.resUrl + 'hcpjp.png' }, { name: '丽人', icon: globalDefine.apiUrl.resUrl + 'lr.png' }, { name: '周边游', icon: globalDefine.apiUrl.resUrl + 'zby.png' }]],
            items3: [[{ name: '足疗按摩', icon: globalDefine.apiUrl.resUrl + 'zlam.png' }, { name: '购物', icon: globalDefine.apiUrl.resUrl + 'gw.png' }, { name: '今日新单', icon: globalDefine.apiUrl.resUrl + 'jrxd.png' }, { name: '小吃快餐', icon: globalDefine.apiUrl.resUrl + 'xckc.png' }, { name: '生活服务', icon: globalDefine.apiUrl.resUrl + 'shfw.png' }], [{ name: '甜点饮品', icon: globalDefine.apiUrl.resUrl + 'tdyp.png' }, { name: '美甲', icon: globalDefine.apiUrl.resUrl + 'mj.png' }, { name: '景点门票', icon: globalDefine.apiUrl.resUrl + 'jdmp.png' }, { name: '旅游', icon: globalDefine.apiUrl.resUrl + 'ly.png' }, { name: '全部分类', icon: globalDefine.apiUrl.resUrl + 'qbfl.png' }]]
        };
    },

    methods: {
        onchange: function onchange(event) {
            //console.log('changed:', event.index)
        }
    }
};

/***/ }),

/***/ 12:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["tab"],
    staticStyle: {
      backgroundColor: "white",
      flex: "1",
      height: "380px"
    }
  }, [_c('slider', {
    staticClass: ["slider"],
    attrs: {
      "autoPlay": "true",
      "interval": "3000"
    },
    on: {
      "change": _vm.onchange
    }
  }, [_c('div', {
    staticStyle: {
      width: "750px"
    }
  }, _vm._l((_vm.items2), function(v, i) {
    return _c('div', {
      staticStyle: {
        flexDirection: "row",
        marginTop: "36px",
        width: "750px"
      }
    }, _vm._l((v), function(item, k) {
      return _c('div', {
        staticStyle: {
          flex: "1",
          justifyContent: "center",
          alignItems: "center"
        }
      }, [_c('image', {
        staticStyle: {
          width: "88px",
          height: "88px"
        },
        attrs: {
          "src": item.icon
        }
      }), _c('text', {
        staticStyle: {
          fontSize: "30px"
        }
      }, [_vm._v(_vm._s(item.name))])])
    }))
  })), _c('div', {
    staticStyle: {
      width: "750px"
    }
  }, _vm._l((_vm.items3), function(v, i) {
    return _c('div', {
      staticStyle: {
        flexDirection: "row",
        marginTop: "36px",
        width: "750px"
      }
    }, _vm._l((v), function(item, k) {
      return _c('div', {
        staticStyle: {
          flex: "1",
          justifyContent: "center",
          alignItems: "center"
        }
      }, [_c('image', {
        staticStyle: {
          width: "88px",
          height: "88px"
        },
        attrs: {
          "src": item.icon
        }
      }), _c('text', {
        staticStyle: {
          fontSize: "30px"
        }
      }, [_vm._v(_vm._s(item.name))])])
    }))
  })), _c('indicator', {
    staticClass: ["indicatorClass"]
  })])])
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),

/***/ 50:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _homeTopView = __webpack_require__(9);

var _homeTopView2 = _interopRequireDefault(_homeTopView);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_homeTopView2.default.el = '#root';
new Vue(_homeTopView2.default);

/***/ }),

/***/ 9:
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(10)
)

/* script */
__vue_exports__ = __webpack_require__(11)

/* template */
var __vue_template__ = __webpack_require__(12)
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
__vue_options__.__file = "D:\\important\\githubRepository\\webstormProject\\hyy-project\\src\\Home\\homeTopView.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-d7480e38"
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


/***/ })

/******/ });