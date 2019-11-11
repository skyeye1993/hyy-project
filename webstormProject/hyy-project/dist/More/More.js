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
/******/ 	return __webpack_require__(__webpack_require__.s = 100);
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

/***/ 100:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _More = __webpack_require__(64);

var _More2 = _interopRequireDefault(_More);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_More2.default.el = '#root';
new Vue(_More2.default);

/***/ }),

/***/ 48:
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(49)
)

/* script */
__vue_exports__ = __webpack_require__(50)

/* template */
var __vue_template__ = __webpack_require__(51)
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
__vue_options__.__file = "D:\\important\\githubRepository\\webstormProject\\hyy-project\\src\\More\\moreCommonCell.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-17809cd3"
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

/***/ 49:
/***/ (function(module, exports) {

module.exports = {
  "container": {
    "backgroundColor": "#FFFFFF"
  },
  "PeterSwitch": {
    "width": "100",
    "height": "60",
    "marginRight": "20"
  }
}

/***/ }),

/***/ 50:
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

var modal = weex.requireModule('modal');
var globalDefine = __webpack_require__(0);

exports.default = {
    props: {
        title: "", // 标题
        isSwitch: false, // 是否展示开关
        rightTitle: ""
    },
    data: function data() {
        return {
            isOn: true,
            arrowImg: globalDefine.apiUrl.resUrl + 'icon_cell_rightarrow.png',
            thumbTintColor: "#ff4855"
        };
    },

    methods: {
        renderRightTitle: function renderRightTitle() {
            if (this.rightTitle.length > 0) {
                return true;
            } else {
                return false;
            }
        },
        onSwitch: function onSwitch(e) {
            // modal.toast({message:JSON.stringify(e),duration:5.0});
            // modal.toast({message:e.isSwitchOn,duration:1.0});

            this.isOn = e.isSwitchOn;

            var r = Math.floor(Math.random() * 256);
            var g = Math.floor(Math.random() * 256);
            var b = Math.floor(Math.random() * 256);
            var color = '#' + r.toString(16) + g.toString(16) + b.toString(16);
            this.thumbTintColor = color;
        }
    }
};

/***/ }),

/***/ 51:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["container"]
  }, [_c('div', {
    staticStyle: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      width: "750px",
      height: "100px"
    }
  }, [_c('text', {
    staticStyle: {
      color: "black",
      fontSize: "34px",
      marginLeft: "25px"
    }
  }, [_vm._v(_vm._s(_vm.title))]), (_vm.isSwitch) ? _c('PeterSwitch', {
    staticClass: ["PeterSwitch"],
    attrs: {
      "tintColor": "#0088fb",
      "onTintColor": "#bfed5a",
      "thumbTintColor": _vm.thumbTintColor,
      "isOn": _vm.isOn
    },
    on: {
      "onSwitch": _vm.onSwitch
    }
  }) : _c('div', {
    staticStyle: {
      flexDirection: "row"
    }
  }, [(_vm.renderRightTitle()) ? _c('text', {
    staticStyle: {
      color: "#404040",
      fontSize: "34px",
      marginLeft: "25px"
    }
  }, [_vm._v(_vm._s(_vm.rightTitle))]) : _vm._e(), _c('image', {
    staticStyle: {
      width: "22px",
      height: "35px",
      marginRight: "25px",
      marginLeft: "15px",
      marginTop: "3px"
    },
    attrs: {
      "src": _vm.arrowImg
    }
  })])], 1), _c('div', {
    staticStyle: {
      width: "750px",
      height: "1px",
      backgroundColor: "#e8e8e8"
    }
  })])
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),

/***/ 64:
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(65)
)

/* script */
__vue_exports__ = __webpack_require__(66)

/* template */
var __vue_template__ = __webpack_require__(67)
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
__vue_options__.__file = "D:\\important\\githubRepository\\webstormProject\\hyy-project\\src\\More\\More.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-0910ca34"
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

/***/ 65:
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
  }
}

/***/ }),

/***/ 66:
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
//
//
//
//
//
//

var globalDefine = __webpack_require__(0);
var moreCommonCell = __webpack_require__(48);

exports.default = {
    data: function data() {
        return {
            settingIcon: globalDefine.apiUrl.resUrl + 'icon_mine_setting.png'
        };
    },

    components: {
        moreCommonCell: moreCommonCell
    }
};

/***/ }),

/***/ 67:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["container"]
  }, [_c('div', {
    staticClass: ["navgationContainer"]
  }, [_c('div', {
    staticClass: ["navigation"]
  }, [_c('text', {
    staticClass: ["pageTitle"]
  }, [_vm._v("更多")]), _c('image', {
    staticStyle: {
      position: "absolute",
      width: "60px",
      height: "60px",
      right: "25px",
      top: "10px"
    },
    attrs: {
      "src": _vm.settingIcon
    }
  })])]), _c('scroller', [_c('div', {
    staticStyle: {
      marginTop: "20px"
    }
  }, [_c('moreCommonCell', {
    attrs: {
      "title": "扫一扫",
      "rightTitle": ""
    }
  })], 1), _c('div', {
    staticStyle: {
      marginTop: "20px"
    }
  }, [_c('moreCommonCell', {
    attrs: {
      "title": "省流量模式",
      "rightTitle": "",
      "isSwitch": "true"
    }
  }), _c('moreCommonCell', {
    attrs: {
      "title": "消息提醒",
      "rightTitle": ""
    }
  }), _c('moreCommonCell', {
    attrs: {
      "title": "邀请好友使用美团",
      "rightTitle": ""
    }
  }), _c('moreCommonCell', {
    attrs: {
      "title": "清空缓存",
      "rightTitle": "1.99M"
    }
  })], 1), _c('div', {
    staticStyle: {
      marginTop: "20px"
    }
  }, [_c('moreCommonCell', {
    attrs: {
      "title": "问卷调查",
      "rightTitle": ""
    }
  }), _c('moreCommonCell', {
    attrs: {
      "title": "支付帮助",
      "rightTitle": ""
    }
  }), _c('moreCommonCell', {
    attrs: {
      "title": "网络诊断",
      "rightTitle": ""
    }
  }), _c('moreCommonCell', {
    attrs: {
      "title": "关于美团",
      "rightTitle": ""
    }
  }), _c('moreCommonCell', {
    attrs: {
      "title": "我要应聘",
      "rightTitle": ""
    }
  })], 1), _c('div', {
    staticStyle: {
      marginTop: "20px"
    }
  }, [_c('moreCommonCell', {
    attrs: {
      "title": "精品应用"
    }
  })], 1)])])
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ })

/******/ });