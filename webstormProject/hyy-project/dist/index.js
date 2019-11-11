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
/******/ 	return __webpack_require__(__webpack_require__.s = 91);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.apiUrl = {
  resUrl: 'http://192.168.1.108:8081/src/images/'
};
exports.appConfig = {
  lineColor: '#e3e3e3'
};

/***/ }),
/* 1 */
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
/* 2 */
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
/* 3 */
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
/* 4 */
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
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(6)
)

/* script */
__vue_exports__ = __webpack_require__(7)

/* template */
var __vue_template__ = __webpack_require__(8)
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
__vue_options__.__file = "D:\\important\\githubRepository\\webstormProject\\hyy-project\\src\\Home\\homeShopCenterItem.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-0f9b6644"
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
/* 6 */
/***/ (function(module, exports) {

module.exports = {
  "container": {
    "backgroundColor": "#FFFFFF",
    "width": "300",
    "marginLeft": "20",
    "alignItems": "center"
  }
}

/***/ }),
/* 7 */
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

exports.default = {
    props: {
        imageStr: '',
        title: '',
        tagTitle: ''
    },
    data: function data() {}
};

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["container"]
  }, [_c('image', {
    staticStyle: {
      width: "300px",
      height: "200px",
      marginTop: "20px",
      borderRadius: "5px"
    },
    attrs: {
      "src": _vm.imageStr
    }
  }), _c('text', {
    staticStyle: {
      color: "black",
      fontSize: "34px",
      marginLeft: "15px",
      marginTop: "10px"
    }
  }, [_vm._v(_vm._s(_vm.title))]), _c('text', {
    staticStyle: {
      color: "black",
      fontSize: "34px",
      position: "absolute",
      top: "150px",
      backgroundColor: "darkorange",
      color: "white",
      paddingLeft: "5px",
      paddingRight: "5px"
    }
  }, [_vm._v(_vm._s(_vm.tagTitle))])])
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),
/* 9 */
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


/***/ }),
/* 10 */
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
/* 11 */
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
/* 12 */
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
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(14)
)

/* script */
__vue_exports__ = __webpack_require__(15)

/* template */
var __vue_template__ = __webpack_require__(16)
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
__vue_options__.__file = "D:\\important\\githubRepository\\webstormProject\\hyy-project\\src\\Home\\homeMiddleView.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-4bdbd080"
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
/* 14 */
/***/ (function(module, exports) {

module.exports = {
  "container": {
    "backgroundColor": "#e8e8e8",
    "height": "340",
    "marginTop": "20",
    "flexDirection": "row"
  },
  "leftView": {
    "flexDirection": "column",
    "width": "375",
    "height": "340",
    "alignItems": "center",
    "backgroundColor": "#FFFFFF"
  },
  "rightView": {
    "backgroundColor": "#e8e8e8",
    "marginLeft": "2",
    "width": "373",
    "height": "340"
  },
  "rightViewTopView": {
    "flexDirection": "row",
    "backgroundColor": "#FFFFFF",
    "height": "168",
    "alignItems": "center",
    "justifyContent": "space-between"
  },
  "rightViewBottomView": {
    "flexDirection": "row",
    "marginTop": "2",
    "backgroundColor": "#FFFFFF",
    "height": "170",
    "alignItems": "center",
    "justifyContent": "space-between"
  }
}

/***/ }),
/* 15 */
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

var globalDefine = __webpack_require__(0);

exports.default = {
    data: function data() {
        return {
            leftViewTopImage: globalDefine.apiUrl.resUrl + 'mdqg.png',
            leftViewMiddleImage: globalDefine.apiUrl.resUrl + 'yyms.png',
            rightViewTopImage: globalDefine.apiUrl.resUrl + 'tttj.png',
            rightViewBtttomImage: globalDefine.apiUrl.resUrl + 'yyms.png'

        };
    }
};

/***/ }),
/* 16 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["container"]
  }, [_c('div', {
    staticClass: ["leftView"]
  }, [_c('image', {
    staticStyle: {
      width: "240px",
      height: "60px",
      marginTop: "40px"
    },
    attrs: {
      "src": _vm.leftViewTopImage
    }
  }), _c('image', {
    staticStyle: {
      width: "240px",
      height: "120px"
    },
    attrs: {
      "src": _vm.leftViewMiddleImage
    }
  }), _c('text', {
    staticStyle: {
      color: "darkgray",
      fontSize: "34px"
    }
  }, [_vm._v("探路组碳烤鱼")]), _vm._m(0)]), _c('div', {
    staticClass: ["rightView"]
  }, [_c('div', {
    staticClass: ["rightViewTopView"]
  }, [_vm._m(1), _c('image', {
    staticStyle: {
      width: "150px",
      height: "120px"
    },
    attrs: {
      "src": _vm.rightViewTopImage
    }
  })]), _c('div', {
    staticClass: ["rightViewBottomView"]
  }, [_vm._m(2), _c('image', {
    staticStyle: {
      width: "150px",
      height: "120px"
    },
    attrs: {
      "src": _vm.rightViewBtttomImage
    }
  })])])])
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticStyle: {
      flexDirection: "row"
    }
  }, [_c('text', {
    staticStyle: {
      color: "cyan",
      fontSize: "28px"
    }
  }, [_vm._v("￥9.5")]), _c('text', {
    staticStyle: {
      color: "darkorange",
      backgroundColor: "khaki",
      fontSize: "28px"
    }
  }, [_vm._v("再减3元")])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('text', {
    staticStyle: {
      color: "darkorange",
      fontSize: "32px",
      marginLeft: "20px"
    }
  }, [_vm._v("天天特价")]), _c('text', {
    staticStyle: {
      color: "#717171",
      fontSize: "32px",
      marginLeft: "20px",
      marginTop: "10px"
    }
  }, [_vm._v("特惠不打烊")])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('text', {
    staticStyle: {
      color: "crimson",
      fontSize: "32px",
      marginLeft: "20px"
    }
  }, [_vm._v("一元吃")]), _c('text', {
    staticStyle: {
      color: "#717171",
      fontSize: "32px",
      marginLeft: "20px",
      marginTop: "10px"
    }
  }, [_vm._v("一元吃美食")])])
}]}
module.exports.render._withStripped = true

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(18)
)

/* script */
__vue_exports__ = __webpack_require__(19)

/* template */
var __vue_template__ = __webpack_require__(20)
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
__vue_options__.__file = "D:\\important\\githubRepository\\webstormProject\\hyy-project\\src\\Home\\homeMiddleBottomView.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-b03454ea"
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
/* 18 */
/***/ (function(module, exports) {

module.exports = {
  "container": {
    "backgroundColor": "#e8e8e8",
    "height": "510",
    "marginTop": "20",
    "flexDirection": "column"
  },
  "topView": {
    "backgroundColor": "#FFFFFF",
    "height": "150",
    "width": "750",
    "marginBottom": "2",
    "flexDirection": "row"
  },
  "topRightView": {
    "width": "375",
    "flexDirection": "row",
    "justifyContent": "center",
    "alignItems": "center"
  },
  "bottomView": {
    "flexDirection": "row",
    "width": "750",
    "height": "340"
  },
  "leftView": {
    "width": "375",
    "height": "340"
  },
  "rightView": {
    "backgroundColor": "#e8e8e8",
    "marginLeft": "2",
    "width": "373",
    "height": "340"
  },
  "leftViewTopView": {
    "flexDirection": "row",
    "backgroundColor": "#FFFFFF",
    "height": "168",
    "alignItems": "center",
    "justifyContent": "space-between"
  },
  "leftViewBottomView": {
    "flexDirection": "row",
    "marginTop": "2",
    "backgroundColor": "#FFFFFF",
    "height": "170",
    "alignItems": "center",
    "justifyContent": "space-between"
  },
  "rightViewTopView": {
    "flexDirection": "row",
    "backgroundColor": "#FFFFFF",
    "height": "168",
    "alignItems": "center",
    "justifyContent": "space-between"
  },
  "rightViewBottomView": {
    "flexDirection": "row",
    "marginTop": "2",
    "backgroundColor": "#FFFFFF",
    "height": "170",
    "alignItems": "center",
    "justifyContent": "space-between"
  }
}

/***/ }),
/* 19 */
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

var globalDefine = __webpack_require__(0);

exports.default = {
    data: function data() {
        return {
            topViewRightImage: globalDefine.apiUrl.resUrl + 'nsj.png',
            leftViewTopImage: 'http://p0.meituan.net/64.43/groupop/9aa35eed64db45aa33f9e74726c59d938450.png',
            leftViewBtttomImage: 'http://p0.meituan.net/64.43/groupop/b8fb2def2c0063c9acabed6cbf1c65449452.png',
            rightViewTopImage: 'http://p0.meituan.net/64.43/groupop/e1855577efd5280c905ab7a438b83f3d5000.png',
            rightViewBtttomImage: 'http://p1.meituan.net/64.43/groupop/286f56222bac7bfd7462af56a64ce4a59032.png'
        };
    }
};

/***/ }),
/* 20 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["container"]
  }, [_c('div', {
    staticClass: ["topView"]
  }, [_vm._m(0), _c('div', {
    staticClass: ["topRightView"]
  }, [_c('image', {
    staticStyle: {
      width: "250px",
      height: "120px"
    },
    attrs: {
      "src": _vm.topViewRightImage
    }
  })])]), _c('div', {
    staticClass: ["bottomView"]
  }, [_c('div', {
    staticClass: ["leftView"]
  }, [_c('div', {
    staticClass: ["leftViewTopView"]
  }, [_vm._m(1), _c('image', {
    staticStyle: {
      width: "150px",
      height: "120px"
    },
    attrs: {
      "src": _vm.leftViewTopImage
    }
  })]), _c('div', {
    staticClass: ["leftViewBottomView"]
  }, [_vm._m(2), _c('image', {
    staticStyle: {
      width: "150px",
      height: "120px"
    },
    attrs: {
      "src": _vm.leftViewBtttomImage
    }
  })])]), _c('div', {
    staticClass: ["rightView"]
  }, [_c('div', {
    staticClass: ["rightViewTopView"]
  }, [_vm._m(3), _c('image', {
    staticStyle: {
      width: "150px",
      height: "120px"
    },
    attrs: {
      "src": _vm.rightViewTopImage
    }
  })]), _c('div', {
    staticClass: ["rightViewBottomView"]
  }, [_vm._m(4), _c('image', {
    staticStyle: {
      width: "150px",
      height: "120px"
    },
    attrs: {
      "src": _vm.rightViewBtttomImage
    }
  })])])])])
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["topLeftView"]
  }, [_c('text', {
    staticStyle: {
      color: "magenta",
      fontSize: "38px",
      marginLeft: "30px",
      marginTop: "25px"
    }
  }, [_vm._v("最高立减25")]), _c('text', {
    staticStyle: {
      color: "#717171",
      fontSize: "32px",
      marginLeft: "30px"
    }
  }, [_vm._v("美味享不停，赶快行动吧")])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('text', {
    staticStyle: {
      color: "darkorange",
      fontSize: "32px",
      marginLeft: "20px"
    }
  }, [_vm._v("1元肯德基")]), _c('text', {
    staticStyle: {
      color: "#717171",
      fontSize: "32px",
      marginLeft: "20px",
      marginTop: "10px"
    }
  }, [_vm._v("1元能吃肯德基")])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('text', {
    staticStyle: {
      color: "crimson",
      fontSize: "32px",
      marginLeft: "20px"
    }
  }, [_vm._v("4月开春大促")]), _c('text', {
    staticStyle: {
      color: "#717171",
      fontSize: "32px",
      marginLeft: "20px",
      marginTop: "10px"
    }
  }, [_vm._v("领21元红包")])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('text', {
    staticStyle: {
      color: "darkorange",
      fontSize: "32px",
      marginLeft: "20px"
    }
  }, [_vm._v("新用户专享")]), _c('text', {
    staticStyle: {
      color: "#717171",
      fontSize: "32px",
      marginLeft: "20px",
      marginTop: "10px"
    }
  }, [_vm._v("小长假美美哒")])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('text', {
    staticStyle: {
      color: "crimson",
      fontSize: "32px",
      marginLeft: "20px"
    }
  }, [_vm._v("一元抢吧")]), _c('text', {
    staticStyle: {
      color: "#717171",
      fontSize: "32px",
      marginLeft: "20px",
      marginTop: "10px"
    }
  }, [_vm._v("爆品抢到手软")])])
}]}
module.exports.render._withStripped = true

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(22)
)

/* script */
__vue_exports__ = __webpack_require__(23)

/* template */
var __vue_template__ = __webpack_require__(25)
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
__vue_options__.__file = "D:\\important\\githubRepository\\webstormProject\\hyy-project\\src\\Home\\homeShopCenter.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-4a45a5de"
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
/* 22 */
/***/ (function(module, exports) {

module.exports = {
  "container": {
    "backgroundColor": "#FFFFFF",
    "height": "400"
  },
  "scrollerClass": {
    "flexDirection": "row"
  }
}

/***/ }),
/* 23 */
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

var globalDefine = __webpack_require__(0);
var homeBottomCommonCell = __webpack_require__(1);
var homeShopCenterItem = __webpack_require__(5);
var homeShopCenterData = __webpack_require__(24);

exports.default = {
    data: function data() {
        return {
            rightViewBtttomImage: globalDefine.apiUrl.resUrl + 'gw.png',
            homeShopCenterData: homeShopCenterData
        };
    },

    components: {
        homeBottomCommonCell: homeBottomCommonCell,
        homeShopCenterItem: homeShopCenterItem
    }
};

/***/ }),
/* 24 */
/***/ (function(module, exports) {

module.exports = {"count":4,"data":[{"detailurl":"imeituan://www.meituan.com/web/?url=http://i.meituan.com/shoppingmall/smDetail/4374715","promotionIcon":"","name":"正佳广场","img":"http://p0.meituan.net/codeman/b4686ddc7270363868fcff917d3526cd37899.jpg","showtext":{"text":"离我最近","count":84,"color":""},"longitude":113.327086,"latitude":23.131909,"smid":4374715,"promotionText":"送福利 商品低至1.5折"},{"detailurl":"imeituan://www.meituan.com/web/?url=http://i.meituan.com/shoppingmall/smDetail/50606658","promotionIcon":"","name":"白云万达广场","img":"http://p0.meituan.net/codeman/c217fffcbf9b434844434a0acbdb434827837.jpg","showtext":{"text":"55家优惠","count":55,"color":""},"longitude":113.26605,"latitude":23.17151,"smid":50606658,"promotionText":"春来花开 满100最高减60"},{"detailurl":"imeituan://www.meituan.com/web/?url=http://i.meituan.com/shoppingmall/smDetail/75813274","promotionIcon":"","name":"凯德广场●云尚","img":"http://p0.meituan.net/codeman/2ad0711b7ffa9433bdc2577e7896082937607.jpg","showtext":{"text":"61家优惠","count":61,"color":""},"longitude":113.269668,"latitude":23.1818,"smid":75813274,"promotionText":"新春送福利 购物满额有好礼"},{"detailurl":"imeituan://www.meituan.com/web/?url=http://i.meituan.com/shoppingmall/smDetail/41692498","promotionIcon":"","name":"来又来广场","img":"http://p0.meituan.net/codeman/d675f4ad9b7ece9f0593db298beb082d31800.jpg","showtext":{"text":"48家优惠","count":48,"color":""},"longitude":113.232008,"latitude":23.397758,"smid":41692498,"promotionText":"48家品牌优惠中：瑞可爷爷的店每满30减5，全单9折（买单立享）"}],"tips":"全部4家","jumpto":"imeituan://www.meituan.com/web/?url=http://i.meituan.com/shoppingmall/smList?sid=@geodist:asc"}

/***/ }),
/* 25 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["container"]
  }, [_c('homeBottomCommonCell', {
    attrs: {
      "rightViewBtttomImage": _vm.rightViewBtttomImage,
      "leftTitle": "购物中心",
      "rightTitle": "全部4家"
    }
  }), _c('scroller', {
    staticClass: ["scrollerClass"],
    attrs: {
      "scrollDirection": "horizontal"
    }
  }, _vm._l((_vm.homeShopCenterData.data), function(obj) {
    return _c('homeShopCenterItem', {
      attrs: {
        "imageStr": obj.img,
        "title": obj.name,
        "tagTitle": obj.showtext.text
      }
    })
  }))], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),
/* 26 */
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
/* 27 */
/***/ (function(module, exports) {

module.exports = {
  "container": {
    "backgroundColor": "#FFFFFF",
    "height": "100",
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
/* 28 */
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
/* 29 */
/***/ (function(module, exports) {

module.exports = {"topData":[{"title":"演出赛事","subTitle":"精彩不容错过","hotImage":"hot_play"},{"title":"汽车服务","subTitle":"汽车打蜡特惠","hotImage":"hot_car"}],"bottomData":[{"title":"订机票","subTitle":"一折票马上抢","hotImage":"hot_air"},{"title":"温泉","subTitle":"品质暖冬专享","hotImage":"hot_water"},{"title":"火锅","subTitle":"冬日必吃美食","hotImage":"hot_eat"},{"title":"亲子游玩","subTitle":"宝贝去哪儿了","hotImage":"hot_wash"}]}

/***/ }),
/* 30 */
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
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(32)
)

/* script */
__vue_exports__ = __webpack_require__(33)

/* template */
var __vue_template__ = __webpack_require__(35)
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
__vue_options__.__file = "D:\\important\\githubRepository\\webstormProject\\hyy-project\\src\\Home\\homeGuessYouLike.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-18eb01b6"
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
/* 32 */
/***/ (function(module, exports) {

module.exports = {
  "container": {
    "marginTop": "20"
  },
  "list": {
    "width": "750",
    "justifyContent": "center",
    "alignItems": "center",
    "backgroundColor": "#FFFFFF"
  },
  "cell": {
    "width": "750",
    "height": "220"
  },
  "panel": {
    "width": "750",
    "marginTop": "20"
  },
  "panelLeftView": {
    "justifyContent": "center",
    "flex": 0.36
  },
  "panelRightView": {
    "marginLeft": "15",
    "flex": 0.64
  }
}

/***/ }),
/* 33 */
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

var navigator = weex.requireModule('navigator');
var globalDefine = __webpack_require__(0);
var homeBottomCommonCell = __webpack_require__(1);
var homeHotData = __webpack_require__(34);
var stream = weex.requireModule('stream');
var modal = weex.requireModule('modal');
var dom = weex.requireModule('dom');

exports.default = {
    data: function data() {
        return {
            rightViewBtttomImage: globalDefine.apiUrl.resUrl + 'cnxh.png',
            lists: homeHotData,
            listHeight: '',
            baseURL: ''
        };
    },

    components: {
        homeBottomCommonCell: homeBottomCommonCell
    },
    created: function created() {
        var self = this;
        this.listHeight = 18 * 220 + 3 + 'px';

        var bundleUrl = this.$getConfig().bundleUrl;

        bundleUrl = new String(bundleUrl);
        var nativeBase;
        var isAndroidAssets = bundleUrl.indexOf('file://assets/') >= 0;

        var isiOSAssets = bundleUrl.indexOf('file:///') >= 0 && bundleUrl.indexOf('WeexDemo.app') > 0;
        if (isAndroidAssets) {
            nativeBase = 'file://assets/dist/';
        } else if (isiOSAssets) {
            nativeBase = bundleUrl.substring(0, bundleUrl.lastIndexOf('/') + 1);
        } else {
            var host = 'localhost:8080';
            var matches = /\/\/([^\/]+?)\//.exec(bundleUrl);
            if (matches && matches.length >= 2) {
                host = matches[1];
            }
            nativeBase = 'http://' + host + '/index.html?page=./dist/';
        }
        this.baseURL = nativeBase;
    },

    methods: {
        // 处理图像的尺寸
        dealWithImgUrl: function dealWithImgUrl(url) {
            if (url.search('w.h') == -1) {
                // 没有找到,正常返回
                return url;
            } else {
                return url.replace('w.h', '240.180');
            }
        },
        onappear: function onappear(event) {},
        scrollHandler: function scrollHandler(e) {},
        scrollStart: function scrollStart(e) {
            // this.listHeight = e.contentSize.height;
        },

        toggle: function toggle(item) {
            alert(this.baseURL + 'Home/homeGuessYouLikeDetail.js?id=' + item._id);
            var params = { url: this.baseURL + 'Home/homeGuessYouLikeDetail.js?id=' + item._id, animated: "true" };
            navigator.push(params, function (e) {
                console.log('i am the callback.');
            });
        }
    }

};

/***/ }),
/* 34 */
/***/ (function(module, exports) {

module.exports = [{"imageUrl":"http://p1.meituan.net/business/39d9dba3efa34994090ad9b9a3630833233263.png.webp","title":"湛江烧烤撸串烤吧(员村店)","subTitle":"34分钟送达","subMessage":"满38减20, 满68...","bottomRightInfo":"月售4761","_id":"814399992","index":0},{"imageUrl":"http://p0.meituan.net/waimaipoi/8c744ff6670986b62365b626dbd0403455288.jpg.webp","title":"加州汉堡（荷光路）","subTitle":"30分钟送达","subMessage":"满28减13, 满35...","bottomRightInfo":"月售1582","_id":"40407144","index":1},{"imageUrl":"http://p1.meituan.net/waimaipoi/80fc4df421945dccbbb932e80a422190118543.jpg.webp","title":"欧记柳州螺蛳粉（棠下店）","subTitle":"30分钟送达","subMessage":"满16减14, 满35...","bottomRightInfo":"月售2021","_id":"194392119","index":2},{"imageUrl":"http://p1.meituan.net/waimaipoi/6e4c7db35ee8a65dc83a887522411421146231.jpg.webp","title":"小龙粉面.湖南名小吃","subTitle":"30分钟送达","subMessage":"满17减8, 满35减...","bottomRightInfo":"月售4749","_id":"179388331","index":3},{"imageUrl":"http://p1.meituan.net/w.h/tdchotel/0449435a173fdb96a3ee6abff2281ba2987509.jpg","title":"文星连锁酒店(学院站店)","subTitle":"不错: 4.2分    5000+人消费","subMessage":"起","bottomRightInfo":"2小时前有人预订","_id":"643391","index":4},{"imageUrl":"http://p1.meituan.net/business/9779479ab541b195f72fc1c979f102a0724817.png.webp","title":"叫了只炸鸡（棠下店）","subTitle":"30分钟送达","subMessage":"满20减18, 满50...","_id":"169154638","index":5},{"imageUrl":"http://p1.meituan.net/waimaipoi/a1ff0174093199b39a6755ba2a1bcf0635417.jpg.webp","title":"小二烧烤（上社总店）","subTitle":"35分钟送达","subMessage":"满33减5, 满59减...","_id":"97664096","index":6},{"imageUrl":"http://p0.meituan.net/w.h/tdchoteldark/44804a23fc324c2872126da7f80afc043967055.jpg","title":"广州鑫隆酒店(上社城市公寓旁店)","subTitle":"3.9分    5000+人消费","subMessage":"起","topRightInfo":"291m","bottomRightInfo":"52分钟前有人预订","_id":"2622605","index":7},{"imageUrl":"http://p0.meituan.net/waimaipoi/30fb8d46a04a59d5c07e0cf89cd06356542072.jpg.webp","title":"潮汕汤粉肠粉（粥、粉、面、饭）","subTitle":"32分钟送达","subMessage":"满28减3, 满48减...","bottomRightInfo":"月售789","_id":"97841101","index":8},{"imageUrl":"http://p0.meituan.net/business/d7070bf4b8864182d927dfcc0480adfd177370.png.webp","title":"老上海馄饨+点心王","subTitle":"30分钟送达","subMessage":"满18减3, 满26减...","bottomRightInfo":"月售2858","_id":"194729441","index":9},{"imageUrl":"http://p0.meituan.net/w.h/travel/af4c986da3a084618e3c18e50238ed06159630.jpg","title":"广州长隆欢乐世界(5A)","subTitle":"4.8分 | 138789人评价","subMessage":"起","_id":"61734","index":10},{"imageUrl":"http://p0.meituan.net/business/67032621a8561966581d33957542d97834237.jpg.webp","title":"大叔小馆烧烤（上社店）","subTitle":"38分钟送达","subMessage":"满30减15, 满60...","bottomRightInfo":"月售291","_id":"521567821","index":11},{"imageUrl":"http://p0.meituan.net/waimaipoi/07cbd7fc25723beb93a7bdb099806c7343008.jpg.webp","title":"辣秋秋柳州螺蛳粉（上社店）","subTitle":"30分钟送达","subMessage":"满12减11, 满30...","bottomRightInfo":"月售1616","_id":"77504726","index":12},{"imageUrl":"http://p0.meituan.net/w.h/travel/9f422fe103e204f54c19022092c3458a949528.png","title":"广州塔(4A)","subTitle":"4.0分 | 44907人评价","subMessage":"起","bottomRightInfo":"已售13.9万+","_id":"83473","index":13},{"imageUrl":"http://p0.meituan.net/waimaipoi/de52fac01b416467ea99565813baf583265457.jpg.webp","title":"营养筒子骨鲜粉","subTitle":"35分钟送达","subMessage":"满23减9, 满40减...","bottomRightInfo":"月售4597","_id":"174311279","index":14},{"imageUrl":"http://p0.meituan.net/waimaipoi/a656c47bdf3127d10f7bc3d1834c0bed597006.jpg.webp","title":"老上海馄饨王(棠下店)","subTitle":"30分钟送达","subMessage":"满26减10, 满37...","bottomRightInfo":"月售2609","_id":"159421492","index":15},{"imageUrl":"http://p0.meituan.net/waimaipoi/5b12de311e3f26fa9087eab1cfa3599b47104.jpg.webp","title":"神仙烧烤","subTitle":"52分钟送达","subMessage":"满40减20, 满65...","bottomRightInfo":"月售1850","_id":"164576744","index":16},{"imageUrl":"http://p0.meituan.net/waimaipoi/41de6a5c746bba3ae6a1d85e05d68ee4218541.jpg.webp","title":"张亮麻辣烫（上社店）","subTitle":"30分钟送达","subMessage":"满27减15, 满38...","bottomRightInfo":"月售1739","_id":"41075013","index":17}]

/***/ }),
/* 35 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["container"]
  }, [_c('homeBottomCommonCell', {
    ref: "homeBottomCommonCell",
    attrs: {
      "rightViewBtttomImage": _vm.rightViewBtttomImage,
      "leftTitle": "猜你喜欢"
    }
  }), _c('list', {
    ref: "guessList",
    staticClass: ["list"],
    style: {
      height: _vm.listHeight
    },
    attrs: {
      "showScrollbar": "false",
      "offsetAccuracy": "10"
    },
    on: {
      "appear": _vm.onappear,
      "scroll": _vm.scrollHandler,
      "scrollstart": _vm.scrollStart
    }
  }, _vm._l((_vm.lists), function(shop, index) {
    return _c('cell', {
      ref: "item",
      refInFor: true,
      staticClass: ["cell"],
      appendAsTree: true,
      attrs: {
        "append": "tree"
      },
      on: {
        "click": function($event) {
          _vm.toggle(shop)
        }
      }
    }, [_c('div', {
      staticClass: ["panel"]
    }, [_c('div', {
      staticStyle: {
        flexDirection: "row"
      }
    }, [_c('div', {
      staticClass: ["panelLeftView"]
    }, [_c('image', {
      staticStyle: {
        width: "240px",
        height: "180px",
        marginLeft: "20px"
      },
      attrs: {
        "src": _vm.dealWithImgUrl(shop.imageUrl)
      }
    })]), _c('div', {
      staticClass: ["panelRightView"]
    }, [_c('div', {
      staticStyle: {
        flexDirection: "row",
        justifyContent: "space-between"
      }
    }, [_c('text', {
      staticStyle: {
        color: "black",
        fontSize: "28px",
        marginRight: "20px",
        lines: "1",
        textOverflow: "ellipsis",
        flex: "0.8"
      }
    }, [_vm._v(_vm._s(shop.title))]), _c('text', {
      staticStyle: {
        color: "black",
        fontSize: "28px",
        flex: "0.3"
      }
    }, [_vm._v(_vm._s(shop.topRightInfo))])]), _c('text', {
      staticStyle: {
        color: "darkgray",
        fontSize: "28px",
        marginRight: "20px",
        marginTop: "10px",
        lines: "2",
        textOverflow: "ellipsis"
      }
    }, [_vm._v(_vm._s(shop.subTitle))]), _c('div', {
      staticStyle: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: "10px"
      }
    }, [_c('text', {
      staticStyle: {
        color: "crimson",
        fontSize: "28px"
      }
    }, [_vm._v(_vm._s(shop.subMessage))]), _c('text', {
      staticStyle: {
        color: "black",
        fontSize: "28px",
        marginRight: "20px"
      }
    }, [_vm._v(_vm._s(shop.bottomRightInfo))])])])]), _c('div', {
      staticStyle: {
        flex: "1",
        height: "1px",
        backgroundColor: "#c4c4c4",
        marginTop: "20px"
      }
    })])])
  }))], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(37)
)

/* script */
__vue_exports__ = __webpack_require__(38)

/* template */
var __vue_template__ = __webpack_require__(39)
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
__vue_options__.__file = "D:\\important\\githubRepository\\webstormProject\\hyy-project\\src\\Mine\\mineHeaderView.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-17bc09f8"
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
/* 37 */
/***/ (function(module, exports) {

module.exports = {
  "container": {
    "height": "420",
    "backgroundColor": "rgba(255,96,0,1)"
  },
  "headerIconClass": {
    "width": "160",
    "height": "160",
    "marginLeft": "30",
    "marginTop": "110",
    "borderRadius": "80",
    "borderWidth": "8",
    "borderColor": "rgba(255,255,255,0.7)"
  },
  "topView": {
    "flexDirection": "row",
    "flex": 0.7
  },
  "bottomView": {
    "flexDirection": "row",
    "flex": 0.3,
    "backgroundColor": "rgba(255,255,255,0.3)"
  },
  "leftView": {
    "flex": 0.33,
    "justifyContent": "center",
    "alignItems": "center"
  },
  "middleView": {
    "flex": 0.33,
    "justifyContent": "center",
    "alignItems": "center"
  },
  "rightView": {
    "flex": 0.33,
    "justifyContent": "center",
    "alignItems": "center"
  }
}

/***/ }),
/* 38 */
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

var globalDefine = __webpack_require__(0);

exports.default = {
    data: function data() {
        return {
            headerIcon: globalDefine.apiUrl.resUrl + 'wd.png',
            nickName: '入夜、渐微凉',
            vipImg: globalDefine.apiUrl.resUrl + 'avatar_vip.png',
            arrowImg: globalDefine.apiUrl.resUrl + 'icon_cell_rightarrow.png'
        };
    }
};

/***/ }),
/* 39 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["container"]
  }, [_c('div', {
    staticClass: ["topView"]
  }, [_c('image', {
    staticClass: ["headerIconClass"],
    attrs: {
      "src": _vm.headerIcon
    }
  }), _c('text', {
    staticStyle: {
      color: "white",
      fontSize: "38px",
      fontWeight: "bold",
      marginLeft: "25px",
      marginTop: "165px"
    }
  }, [_vm._v(_vm._s(_vm.nickName))]), _c('image', {
    staticStyle: {
      width: "45px",
      height: "45px",
      marginLeft: "15px",
      marginTop: "172px"
    },
    attrs: {
      "src": _vm.vipImg
    }
  }), _c('image', {
    staticStyle: {
      position: "absolute",
      width: "22px",
      height: "35px",
      right: "25px",
      marginTop: "175px"
    },
    attrs: {
      "src": _vm.arrowImg
    }
  })]), _vm._m(0)])
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["bottomView"]
  }, [_c('div', {
    staticClass: ["leftView"]
  }, [_c('text', {
    staticStyle: {
      color: "white",
      fontSize: "32px"
    }
  }, [_vm._v("100")]), _c('text', {
    staticStyle: {
      color: "white",
      fontSize: "35px"
    }
  }, [_vm._v("优惠券")])]), _c('div', {
    staticStyle: {
      width: "1px",
      height: "100px",
      marginTop: "15px",
      backgroundColor: "white"
    }
  }), _c('div', {
    staticClass: ["middleView"]
  }, [_c('text', {
    staticStyle: {
      color: "white",
      fontSize: "32px"
    }
  }, [_vm._v("12")]), _c('text', {
    staticStyle: {
      color: "white",
      fontSize: "35px"
    }
  }, [_vm._v("评价")])]), _c('div', {
    staticStyle: {
      width: "1px",
      height: "100px",
      marginTop: "15px",
      backgroundColor: "white"
    }
  }), _c('div', {
    staticClass: ["rightView"]
  }, [_c('text', {
    staticStyle: {
      color: "white",
      fontSize: "32px"
    }
  }, [_vm._v("50")]), _c('text', {
    staticStyle: {
      color: "white",
      fontSize: "35px"
    }
  }, [_vm._v("收藏")])])])
}]}
module.exports.render._withStripped = true

/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(41)
)

/* script */
__vue_exports__ = __webpack_require__(42)

/* template */
var __vue_template__ = __webpack_require__(43)
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
__vue_options__.__file = "D:\\important\\githubRepository\\webstormProject\\hyy-project\\src\\Mine\\mineCommonCell.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-53b7bb93"
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
/* 41 */
/***/ (function(module, exports) {

module.exports = {
  "container": {
    "height": "120",
    "backgroundColor": "#FFFFFF"
  }
}

/***/ }),
/* 42 */
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

var modal = weex.requireModule('modal');
var globalDefine = __webpack_require__(0);

exports.default = {
    props: {
        leftIcon: "",
        leftTitle: "", // 标题
        rightTitle: "",
        rightIcon: ""
    },
    data: function data() {
        return {
            arrowImg: globalDefine.apiUrl.resUrl + 'icon_cell_rightarrow.png'
        };
    },

    methods: {
        renderRightIcon: function renderRightIcon() {
            if (this.rightIcon.length > 0) {
                return true;
            } else {
                return false;
            }
        }
    }
};

/***/ }),
/* 43 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["container"]
  }, [_c('div', {
    staticStyle: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      flex: "1"
    }
  }, [_c('div', {
    staticStyle: {
      flexDirection: "row",
      alignItems: "center"
    }
  }, [_c('image', {
    staticStyle: {
      width: "70px",
      height: "70px",
      marginLeft: "25px",
      borderRadius: "35px"
    },
    attrs: {
      "src": _vm.leftIcon
    }
  }), _c('text', {
    staticStyle: {
      color: "black",
      fontSize: "34px",
      marginLeft: "20px"
    }
  }, [_vm._v(_vm._s(_vm.leftTitle))])]), _c('div', {
    staticStyle: {
      flexDirection: "row"
    }
  }, [_c('text', {
    staticStyle: {
      color: "#848484",
      fontSize: "30px",
      marginLeft: "25px"
    }
  }, [_vm._v(_vm._s(_vm.rightTitle))]), (_vm.renderRightIcon()) ? _c('image', {
    staticStyle: {
      width: "60px",
      height: "35px"
    },
    attrs: {
      "src": _vm.rightIcon
    }
  }) : _vm._e(), _c('image', {
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
  })])]), _c('div', {
    staticStyle: {
      width: "750px",
      height: "1px",
      backgroundColor: "#e8e8e8"
    }
  })])
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(45)
)

/* script */
__vue_exports__ = __webpack_require__(46)

/* template */
var __vue_template__ = __webpack_require__(47)
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
__vue_options__.__file = "D:\\important\\githubRepository\\webstormProject\\hyy-project\\src\\Mine\\mineOrderCell.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-a593fdcc"
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
/* 45 */
/***/ (function(module, exports) {

module.exports = {
  "container": {
    "height": "180",
    "backgroundColor": "#FFFFFF",
    "flexDirection": "row"
  }
}

/***/ }),
/* 46 */
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

var globalDefine = __webpack_require__(0);

exports.default = {
    data: function data() {
        return {
            items: [{ name: '待付款', icon: globalDefine.apiUrl.resUrl + 'order1.png' }, { name: '待使用', icon: globalDefine.apiUrl.resUrl + 'order2.png' }, { name: '待评价', icon: globalDefine.apiUrl.resUrl + 'order3.png' }, { name: '退款/售后', icon: globalDefine.apiUrl.resUrl + 'order4.png' }]
        };
    }
};

/***/ }),
/* 47 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["container"]
  }, _vm._l((_vm.items), function(item) {
    return _c('div', {
      staticStyle: {
        flex: "1",
        justifyContent: "center",
        alignItems: "center"
      }
    }, [_c('image', {
      staticStyle: {
        width: "120px",
        height: "85px"
      },
      attrs: {
        "src": item.icon
      }
    }), _c('text', {
      staticStyle: {
        color: "#848484",
        fontSize: "34px",
        marginTop: "10px"
      }
    }, [_vm._v(_vm._s(item.name))])])
  }))
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),
/* 48 */
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
/* 49 */
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
/* 50 */
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
/* 51 */
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
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(53)
)

/* script */
__vue_exports__ = __webpack_require__(54)

/* template */
var __vue_template__ = __webpack_require__(55)
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
__vue_options__.__file = "D:\\important\\githubRepository\\webstormProject\\hyy-project\\src\\Home\\Home.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-5a82e126"
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
/* 53 */
/***/ (function(module, exports) {

module.exports = {
  "navgationContainer": {
    "height": "128",
    "backgroundColor": "rgba(255,96,0,1)"
  },
  "navigation": {
    "flexDirection": "row",
    "height": "88",
    "marginTop": "40",
    "alignItems": "center"
  },
  "search": {
    "flex": 1,
    "flexDirection": "row",
    "backgroundColor": "#FFFFFF",
    "justifyContent": "space-between",
    "alignItems": "center",
    "marginLeft": "20",
    "marginRight": "20",
    "borderRadius": "8",
    "height": "60"
  },
  "refresh": {
    "alignItems": "center",
    "width": "750"
  },
  "indicator-text": {
    "color": "#888888",
    "fontSize": "42",
    "textAlign": "center"
  },
  "indicator": {
    "marginTop": "16",
    "height": "40",
    "width": "40",
    "color": "#0000FF"
  }
}

/***/ }),
/* 54 */
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

var modal = weex.requireModule('modal');
var globalDefine = __webpack_require__(0);
var homeTopView = __webpack_require__(9);
var homeMiddleView = __webpack_require__(13);
var homeMiddleBottomView = __webpack_require__(17);
var homeShopCenter = __webpack_require__(21);
var homeHotChannel = __webpack_require__(26);
var homeGuessYouLike = __webpack_require__(31);

exports.default = {
    data: function data() {
        return {
            refreshing: false,
            searchIcon: globalDefine.apiUrl.resUrl + 'search.png',
            scanIcon: globalDefine.apiUrl.resUrl + 'scan.png',
            mapIcon: globalDefine.apiUrl.resUrl + 'map.png'
        };
    },

    components: {
        homeTopView: homeTopView,
        homeMiddleView: homeMiddleView,
        homeMiddleBottomView: homeMiddleBottomView,
        homeShopCenter: homeShopCenter,
        homeHotChannel: homeHotChannel,
        homeGuessYouLike: homeGuessYouLike
    },
    methods: {
        onrefresh: function onrefresh(event) {
            var _this = this;

            if (this.refreshing == false) {
                modal.toast({ message: 'Refreshing', duration: 0.2 });
                this.refreshing = true;
                setTimeout(function () {
                    _this.refreshing = false;
                    weex.requireModule("HomeViewController").iosRender();
                }, 500);
            }
        }
    }
};

/***/ }),
/* 55 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('scroller', {
    staticStyle: {
      backgroundColor: "#e8e8e8"
    }
  }, [_c('div', {
    staticClass: ["container"]
  }, [_c('div', {
    staticClass: ["navgationContainer"]
  }, [_c('div', {
    staticClass: ["navigation"]
  }, [_vm._m(0), _c('div', {
    staticClass: ["search"]
  }, [_c('image', {
    staticStyle: {
      width: "44px",
      height: "44px",
      marginLeft: "10px"
    },
    attrs: {
      "src": _vm.searchIcon
    }
  }), _c('input', {
    staticStyle: {
      marginRight: "10px",
      marginLeft: "10px",
      fontSize: "30px",
      flex: "1"
    },
    attrs: {
      "placeholder": "输入商家、品类、商圈"
    }
  }), _c('image', {
    staticStyle: {
      width: "44px",
      height: "44px",
      marginRight: "10px"
    },
    attrs: {
      "src": _vm.scanIcon
    }
  })]), _c('div', {
    staticStyle: {
      flexDirection: "row",
      flex: "0.3",
      justifyContent: "center",
      alignItems: "center"
    }
  }, [_c('image', {
    staticStyle: {
      width: "44px",
      height: "44px",
      marginRight: "5px"
    },
    attrs: {
      "src": _vm.mapIcon
    }
  }), _c('text', {
    staticStyle: {
      color: "white"
    }
  }, [_vm._v("地图")])])])]), _c('homeTopView'), _c('homeMiddleView'), _c('homeMiddleBottomView'), _c('homeShopCenter'), _c('homeHotChannel'), _c('homeGuessYouLike')], 1)])
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["locationContainer"]
  }, [_c('text', {
    staticStyle: {
      color: "white"
    }
  }, [_vm._v("上海")])])
}]}
module.exports.render._withStripped = true

/***/ }),
/* 56 */
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
/* 57 */
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
/* 58 */
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
/* 59 */
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

/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(61)
)

/* script */
__vue_exports__ = __webpack_require__(62)

/* template */
var __vue_template__ = __webpack_require__(63)
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
__vue_options__.__file = "D:\\important\\githubRepository\\webstormProject\\hyy-project\\src\\Mine\\Mine.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-358229a6"
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
/* 61 */
/***/ (function(module, exports) {

module.exports = {
  "container": {
    "backgroundColor": "#e8e8e8"
  }
}

/***/ }),
/* 62 */
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

var globalDefine = __webpack_require__(0);
var mineHeaderView = __webpack_require__(36);
var mineCommonCell = __webpack_require__(40);
var mineOrderCell = __webpack_require__(44);

exports.default = {
    data: function data() {
        return {
            globalDefine: globalDefine
        };
    },

    components: {
        mineHeaderView: mineHeaderView,
        mineCommonCell: mineCommonCell,
        mineOrderCell: mineOrderCell
    }
};

/***/ }),
/* 63 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["container"]
  }, [_c('mineHeaderView'), _c('scroller', {
    staticStyle: {
      backgroundColor: "#e8e8e8"
    }
  }, [_c('div', [_c('mineCommonCell', {
    attrs: {
      "leftIcon": _vm.globalDefine.apiUrl.resUrl + 'collect.png',
      "leftTitle": "我的订单",
      "rightTitle": "查看全部订单",
      "rightIcon": ""
    }
  }), _c('mineOrderCell')], 1), _c('div', [_c('mineCommonCell', {
    staticStyle: {
      marginTop: "20px"
    },
    attrs: {
      "leftIcon": _vm.globalDefine.apiUrl.resUrl + 'draft.png',
      "leftTitle": "我的钱包",
      "rightTitle": "账户余额:￥100",
      "rightIcon": ""
    }
  }), _c('mineCommonCell', {
    attrs: {
      "leftIcon": _vm.globalDefine.apiUrl.resUrl + 'like.png',
      "leftTitle": "抵用券",
      "rightTitle": "0",
      "rightIcon": ""
    }
  })], 1), _c('div', [_c('mineCommonCell', {
    staticStyle: {
      marginTop: "20px"
    },
    attrs: {
      "leftIcon": _vm.globalDefine.apiUrl.resUrl + 'card.png',
      "leftTitle": "积分商城",
      "rightIcon": ""
    }
  })], 1), _c('div', [_c('mineCommonCell', {
    staticStyle: {
      marginTop: "20px"
    },
    attrs: {
      "leftIcon": _vm.globalDefine.apiUrl.resUrl + 'new_friend.png',
      "leftTitle": "今日推荐",
      "rightIcon": _vm.globalDefine.apiUrl.resUrl + 'me_new.png'
    }
  })], 1), _c('div', [_c('mineCommonCell', {
    staticStyle: {
      marginTop: "20px"
    },
    attrs: {
      "leftIcon": _vm.globalDefine.apiUrl.resUrl + 'pay.png',
      "leftTitle": "我要合作",
      "rightTitle": "轻松开店,招财进宝",
      "rightIcon": ""
    }
  })], 1)])], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),
/* 64 */
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
/* 65 */
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
/* 66 */
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
/* 67 */
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

/***/ }),
/* 68 */,
/* 69 */,
/* 70 */,
/* 71 */,
/* 72 */,
/* 73 */,
/* 74 */,
/* 75 */,
/* 76 */,
/* 77 */,
/* 78 */,
/* 79 */,
/* 80 */,
/* 81 */,
/* 82 */,
/* 83 */,
/* 84 */,
/* 85 */,
/* 86 */,
/* 87 */,
/* 88 */,
/* 89 */,
/* 90 */,
/* 91 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _index = __webpack_require__(92);

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_index2.default.el = '#root';
new Vue(_index2.default);

/***/ }),
/* 92 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(93)
)

/* script */
__vue_exports__ = __webpack_require__(94)

/* template */
var __vue_template__ = __webpack_require__(95)
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
__vue_options__.__file = "D:\\important\\githubRepository\\webstormProject\\hyy-project\\src\\index.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-1a4d8e3c"
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
/* 93 */
/***/ (function(module, exports) {

module.exports = {
  "logo": {
    "width": "424",
    "height": "200"
  },
  "greeting": {
    "textAlign": "center",
    "marginTop": "70",
    "fontSize": "50",
    "color": "#41B883"
  },
  "message": {
    "marginTop": "30",
    "marginRight": "30",
    "marginBottom": "30",
    "marginLeft": "30",
    "fontSize": "32",
    "color": "#727272"
  }
}

/***/ }),
/* 94 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Home = __webpack_require__(52);

var _Home2 = _interopRequireDefault(_Home);

var _Shop = __webpack_require__(56);

var _Shop2 = _interopRequireDefault(_Shop);

var _Mine = __webpack_require__(60);

var _Mine2 = _interopRequireDefault(_Mine);

var _More = __webpack_require__(64);

var _More2 = _interopRequireDefault(_More);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//
//
//
//
//
//
//
//
//

exports.default = {
  name: 'App',
  components: {
    Home: _Home2.default,
    more: _More2.default,
    mine: _Mine2.default,
    shop: _Shop2.default
  },
  data: function data() {
    return {
      logo: 'https://gw.alicdn.com/tfs/TB1yopEdgoQMeJjy1XaXXcSsFXa-640-302.png'
    };
  }
};

/***/ }),
/* 95 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["wrapper"]
  }, [_c('Home'), _c('shop'), _c('mine'), _c('more')], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ })
/******/ ]);