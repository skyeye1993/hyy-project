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
/******/ 	return __webpack_require__(__webpack_require__.s = 74);
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

/***/ 74:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _homeGuessYouLikeDetail = __webpack_require__(75);

var _homeGuessYouLikeDetail2 = _interopRequireDefault(_homeGuessYouLikeDetail);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_homeGuessYouLikeDetail2.default.el = '#root';
new Vue(_homeGuessYouLikeDetail2.default);

/***/ }),

/***/ 75:
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(76)
)

/* script */
__vue_exports__ = __webpack_require__(77)

/* template */
var __vue_template__ = __webpack_require__(79)
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
__vue_options__.__file = "D:\\important\\githubRepository\\webstormProject\\hyy-project\\src\\Home\\homeGuessYouLikeDetail.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-24358556"
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

/***/ 76:
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

/***/ 77:
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


var navigator = weex.requireModule('navigator');
var globalDefine = __webpack_require__(0);
var homeBottomCommonCell = __webpack_require__(1);
var homeHotData = __webpack_require__(78);

var stream = weex.requireModule('stream');
var modal = weex.requireModule('modal');
var dom = weex.requireModule('dom');

exports.default = {
    data: function data() {
        return {
            rightViewBtttomImage: globalDefine.apiUrl.resUrl + 'cnxh.png',
            lists: homeHotData,
            listHeight: ''
        };
    },

    computed: {
        currentIndex: function currentIndex() {
            // 计算出要高亮的index，即是要高亮的meun-warpper的index,也就是在那个高度区间
            for (var i = 0; i < this.listHeight.length; i++) {
                var height1 = this.listHeight[i];
                var height2 = this.listHeight[i + 1];
                if (!height2 || this.scrollY >= height1 && this.scrollY < height2) {
                    // 因为最后一个i+1不存在，因此需要加上!height2进行判定
                    return i;
                }
            }
            return 0;
        },
        selectFoods: function selectFoods() {
            var foods = [];
            this.goods.forEach(function (good) {
                good.foods.forEach(function (food) {
                    if (food.count) {
                        foods.push(food);
                    }
                });
            });
            return foods;
        }
    },
    components: {
        homeBottomCommonCell: homeBottomCommonCell
    },
    created: function created() {
        var self = this;
        this.listHeight = 4 * 220 + 3 + 'px';
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

        toggle: function toggle(item) {}
    }
};

/***/ }),

/***/ 78:
/***/ (function(module, exports) {

module.exports = [{"name":"皮蛋瘦肉粥","price":10,"oldPrice":"","description":"咸粥","sellCount":229,"rating":100,"info":"一碗皮蛋瘦肉粥，总是我到粥店时的不二之选。香浓软滑，饱腹暖心，皮蛋的Q弹与瘦肉的滑嫩伴着粥香溢于满口，让人喝这样的一碗粥也觉得心满意足","icon":"http://fuss10.elemecdn.com/c/cd/c12745ed8a5171e13b427dbc39401jpeg.jpeg?imageView2/1/w/114/h/114","image":"http://fuss10.elemecdn.com/c/cd/c12745ed8a5171e13b427dbc39401jpeg.jpeg?imageView2/1/w/750/h/750"},{"name":"扁豆焖面","price":14,"oldPrice":"","description":"","sellCount":188,"rating":96,"info":"","icon":"http://fuss10.elemecdn.com/c/6b/29e3d29b0db63d36f7c500bca31d8jpeg.jpeg?imageView2/1/w/114/h/114","image":"http://fuss10.elemecdn.com/c/6b/29e3d29b0db63d36f7c500bca31d8jpeg.jpeg?imageView2/1/w/750/h/750"},{"name":"葱花饼","price":10,"oldPrice":"","description":"","sellCount":124,"rating":85,"info":"","icon":"http://fuss10.elemecdn.com/f/28/a51e7b18751bcdf871648a23fd3b4jpeg.jpeg?imageView2/1/w/114/h/114","image":"http://fuss10.elemecdn.com/f/28/a51e7b18751bcdf871648a23fd3b4jpeg.jpeg?imageView2/1/w/750/h/750"},{"name":"牛肉馅饼","price":14,"oldPrice":"","description":"","sellCount":114,"rating":91,"info":"","icon":"http://fuss10.elemecdn.com/d/b9/bcab0e8ad97758e65ae5a62b2664ejpeg.jpeg?imageView2/1/w/114/h/114","image":"http://fuss10.elemecdn.com/d/b9/bcab0e8ad97758e65ae5a62b2664ejpeg.jpeg?imageView2/1/w/750/h/750"}]

/***/ }),

/***/ 79:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["container"]
  }, [_c('homeBottomCommonCell', {
    ref: "homeBottomCommonCell",
    attrs: {
      "rightViewBtttomImage": _vm.rightViewBtttomImage,
      "leftTitle": "菜品"
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
  }, _vm._l((_vm.lists), function(food, index) {
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
          _vm.toggle(food)
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
        "src": _vm.dealWithImgUrl(food.image)
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
    }, [_vm._v(_vm._s(food.name))])]), _c('text', {
      staticStyle: {
        color: "darkgray",
        fontSize: "28px",
        marginRight: "20px",
        marginTop: "10px",
        lines: "2",
        textOverflow: "ellipsis"
      }
    }, [_vm._v(_vm._s(food.subTitle))]), _c('div', {
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
    }, [_vm._v("月售" + _vm._s(food.sellCount))]), _c('text', {
      staticStyle: {
        color: "black",
        fontSize: "28px",
        marginRight: "20px"
      }
    }, [_vm._v(_vm._s(food.price))])])])]), _c('div', {
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

/***/ })

/******/ });