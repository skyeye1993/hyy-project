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
/******/ 	return __webpack_require__(__webpack_require__.s = 45);
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

/***/ 1:
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(2)
)

/* script */
__vue_exports__ = __webpack_require__(3)

/* template */
var __vue_template__ = __webpack_require__(4)
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
__vue_options__.__file = "D:\\important\\githubRepository\\webstormProject\\hyy-project\\src\\Home\\homeBottomCommonCell.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-056b60c4"
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

/***/ 2:
/***/ (function(module, exports) {

module.exports = {
  "container": {
    "backgroundColor": "#e8e8e8",
    "height": "100"
  },
  "innerView": {
    "backgroundColor": "#FFFFFF",
    "flexDirection": "row",
    "justifyContent": "space-between",
    "height": "98"
  },
  "leftView": {
    "flexDirection": "row",
    "height": "100",
    "alignItems": "center"
  },
  "rightView": {
    "flexDirection": "row",
    "height": "100",
    "alignItems": "center"
  }
}

/***/ }),

/***/ 26:
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(27)
)

/* script */
__vue_exports__ = __webpack_require__(28)

/* template */
var __vue_template__ = __webpack_require__(30)
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
__vue_options__.__file = "D:\\important\\githubRepository\\webstormProject\\hyy-project\\src\\Home\\homeHotChannel.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-66012c9c"
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

/***/ 27:
/***/ (function(module, exports) {

module.exports = {
  "container": {
    "backgroundColor": "#FFFFFF",
    "height": "600",
    "marginTop": "20"
  },
  "bottomView": {
    "height": "500",
    "backgroundColor": "#FFFFFF"
  },
  "bottomTopView": {
    "flex": 0.45,
    "flexDirection": "row",
    "marginLeft": "15",
    "marginTop": "15"
  },
  "bottomTopItemView": {
    "flex": 1
  },
  "bottomTopItemInnerView": {
    "flexDirection": "row",
    "backgroundColor": "#f8f8f8",
    "flex": 1,
    "marginRight": "15",
    "marginBottom": "15",
    "alignItems": "center"
  },
  "bottomBottomView": {
    "flex": 0.55,
    "flexDirection": "row",
    "marginLeft": "15"
  },
  "bottomBottomItemView": {
    "flex": 1
  },
  "bottomBottomItemInnerView": {
    "backgroundColor": "#f8f8f8",
    "flex": 1,
    "marginRight": "15",
    "marginBottom": "15",
    "alignItems": "center"
  }
}

/***/ }),

/***/ 28:
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

var homeBottomCommonCell = __webpack_require__(1);
var globalDefine = __webpack_require__(0);
var homeHotData = __webpack_require__(29);

exports.default = {
    data: function data() {
        return {
            globalDefine: globalDefine,
            rightViewBtttomImage: globalDefine.apiUrl.resUrl + 'rm.png',
            homeHotData: homeHotData,
            icon_hot: globalDefine.apiUrl.resUrl + 'icon_hot.png'
        };
    },

    components: {
        homeBottomCommonCell: homeBottomCommonCell

    }
};

/***/ }),

/***/ 29:
/***/ (function(module, exports) {

module.exports = {"topData":[{"title":"演出赛事","subTitle":"精彩不容错过","hotImage":"hot_play"},{"title":"汽车服务","subTitle":"汽车打蜡特惠","hotImage":"hot_car"}],"bottomData":[{"title":"订机票","subTitle":"一折票马上抢","hotImage":"hot_air"},{"title":"温泉","subTitle":"品质暖冬专享","hotImage":"hot_water"},{"title":"火锅","subTitle":"冬日必吃美食","hotImage":"hot_eat"},{"title":"亲子游玩","subTitle":"宝贝去哪儿了","hotImage":"hot_wash"}]}

/***/ }),

/***/ 3:
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

var globalDefine = __webpack_require__(0);
exports.default = {
    props: {
        rightViewBtttomImage: '',
        leftTitle: '',
        rightTitle: ''
    },

    data: function data() {
        return {
            rightarrow: globalDefine.apiUrl.resUrl + 'icon_cell_rightarrow.png'
        };
    }
};

/***/ }),

/***/ 30:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["container"]
  }, [_c('homeBottomCommonCell', {
    attrs: {
      "rightViewBtttomImage": _vm.rightViewBtttomImage,
      "leftTitle": "热门频道",
      "rightTitle": "查看全部"
    }
  }), _c('div', {
    staticClass: ["bottomView"]
  }, [_c('div', {
    staticClass: ["bottomTopView"]
  }, _vm._l((_vm.homeHotData.topData), function(obj) {
    return _c('div', {
      staticClass: ["bottomTopItemView"]
    }, [_c('div', {
      staticClass: ["bottomTopItemInnerView"]
    }, [_c('div', [_c('text', {
      staticStyle: {
        color: "black",
        fontSize: "30px",
        marginLeft: "15px",
        marginTop: "25px"
      }
    }, [_vm._v(_vm._s(obj.title))]), _c('text', {
      staticStyle: {
        color: "darkgray",
        fontSize: "26px",
        marginLeft: "15px",
        marginTop: "7px"
      }
    }, [_vm._v(_vm._s(obj.subTitle))]), _c('image', {
      staticStyle: {
        width: "60px",
        height: "40px",
        marginLeft: "20px",
        marginTop: "7px"
      },
      attrs: {
        "src": _vm.icon_hot
      }
    })]), _c('image', {
      staticStyle: {
        width: "150px",
        height: "150px",
        marginLeft: "10px"
      },
      attrs: {
        "src": _vm.globalDefine.apiUrl.resUrl + obj.hotImage + '.png'
      }
    })])])
  })), _c('div', {
    staticClass: ["bottomBottomView"]
  }, _vm._l((_vm.homeHotData.bottomData), function(obj) {
    return _c('div', {
      staticClass: ["bottomBottomItemView"]
    }, [_c('div', {
      staticClass: ["bottomBottomItemInnerView"]
    }, [_c('text', {
      staticStyle: {
        color: "black",
        fontSize: "30px",
        marginTop: "20px"
      }
    }, [_vm._v(_vm._s(obj.title))]), _c('text', {
      staticStyle: {
        color: "darkgray",
        fontSize: "26px",
        marginTop: "7px"
      }
    }, [_vm._v(_vm._s(obj.subTitle))]), _c('image', {
      staticStyle: {
        width: "140px",
        height: "100px",
        marginTop: "10px"
      },
      attrs: {
        "src": _vm.globalDefine.apiUrl.resUrl + obj.hotImage + '.png'
      }
    })])])
  }))])], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),

/***/ 4:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["container"]
  }, [_c('div', {
    staticClass: ["innerView"]
  }, [_c('div', {
    staticClass: ["leftView"]
  }, [_c('image', {
    staticStyle: {
      width: "50px",
      height: "50px",
      marginLeft: "20px"
    },
    attrs: {
      "src": _vm.rightViewBtttomImage
    }
  }), _c('text', {
    staticStyle: {
      color: "black",
      fontSize: "34px",
      marginLeft: "15px"
    }
  }, [_vm._v(_vm._s(_vm.leftTitle))])]), _c('div', {
    staticClass: ["rightView"]
  }, [_c('text', {
    staticStyle: {
      color: "#717171",
      fontSize: "28px"
    }
  }, [_vm._v(_vm._s(_vm.rightTitle))]), _c('image', {
    staticStyle: {
      width: "20px",
      height: "25px",
      marginLeft: "10px",
      marginRight: "20px"
    },
    attrs: {
      "src": _vm.rightarrow
    }
  })])])])
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),

/***/ 45:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _homeHotChannel = __webpack_require__(26);

var _homeHotChannel2 = _interopRequireDefault(_homeHotChannel);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_homeHotChannel2.default.el = '#root';
new Vue(_homeHotChannel2.default);

/***/ })

/******/ });