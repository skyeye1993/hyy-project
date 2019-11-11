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
/******/ 	return __webpack_require__(__webpack_require__.s = 73);
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

/***/ 31:
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

/***/ 32:
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

/***/ 33:
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

/***/ 34:
/***/ (function(module, exports) {

module.exports = [{"imageUrl":"http://p1.meituan.net/business/39d9dba3efa34994090ad9b9a3630833233263.png.webp","title":"湛江烧烤撸串烤吧(员村店)","subTitle":"34分钟送达","subMessage":"满38减20, 满68...","bottomRightInfo":"月售4761","_id":"814399992","index":0},{"imageUrl":"http://p0.meituan.net/waimaipoi/8c744ff6670986b62365b626dbd0403455288.jpg.webp","title":"加州汉堡（荷光路）","subTitle":"30分钟送达","subMessage":"满28减13, 满35...","bottomRightInfo":"月售1582","_id":"40407144","index":1},{"imageUrl":"http://p1.meituan.net/waimaipoi/80fc4df421945dccbbb932e80a422190118543.jpg.webp","title":"欧记柳州螺蛳粉（棠下店）","subTitle":"30分钟送达","subMessage":"满16减14, 满35...","bottomRightInfo":"月售2021","_id":"194392119","index":2},{"imageUrl":"http://p1.meituan.net/waimaipoi/6e4c7db35ee8a65dc83a887522411421146231.jpg.webp","title":"小龙粉面.湖南名小吃","subTitle":"30分钟送达","subMessage":"满17减8, 满35减...","bottomRightInfo":"月售4749","_id":"179388331","index":3},{"imageUrl":"http://p1.meituan.net/w.h/tdchotel/0449435a173fdb96a3ee6abff2281ba2987509.jpg","title":"文星连锁酒店(学院站店)","subTitle":"不错: 4.2分    5000+人消费","subMessage":"起","bottomRightInfo":"2小时前有人预订","_id":"643391","index":4},{"imageUrl":"http://p1.meituan.net/business/9779479ab541b195f72fc1c979f102a0724817.png.webp","title":"叫了只炸鸡（棠下店）","subTitle":"30分钟送达","subMessage":"满20减18, 满50...","_id":"169154638","index":5},{"imageUrl":"http://p1.meituan.net/waimaipoi/a1ff0174093199b39a6755ba2a1bcf0635417.jpg.webp","title":"小二烧烤（上社总店）","subTitle":"35分钟送达","subMessage":"满33减5, 满59减...","_id":"97664096","index":6},{"imageUrl":"http://p0.meituan.net/w.h/tdchoteldark/44804a23fc324c2872126da7f80afc043967055.jpg","title":"广州鑫隆酒店(上社城市公寓旁店)","subTitle":"3.9分    5000+人消费","subMessage":"起","topRightInfo":"291m","bottomRightInfo":"52分钟前有人预订","_id":"2622605","index":7},{"imageUrl":"http://p0.meituan.net/waimaipoi/30fb8d46a04a59d5c07e0cf89cd06356542072.jpg.webp","title":"潮汕汤粉肠粉（粥、粉、面、饭）","subTitle":"32分钟送达","subMessage":"满28减3, 满48减...","bottomRightInfo":"月售789","_id":"97841101","index":8},{"imageUrl":"http://p0.meituan.net/business/d7070bf4b8864182d927dfcc0480adfd177370.png.webp","title":"老上海馄饨+点心王","subTitle":"30分钟送达","subMessage":"满18减3, 满26减...","bottomRightInfo":"月售2858","_id":"194729441","index":9},{"imageUrl":"http://p0.meituan.net/w.h/travel/af4c986da3a084618e3c18e50238ed06159630.jpg","title":"广州长隆欢乐世界(5A)","subTitle":"4.8分 | 138789人评价","subMessage":"起","_id":"61734","index":10},{"imageUrl":"http://p0.meituan.net/business/67032621a8561966581d33957542d97834237.jpg.webp","title":"大叔小馆烧烤（上社店）","subTitle":"38分钟送达","subMessage":"满30减15, 满60...","bottomRightInfo":"月售291","_id":"521567821","index":11},{"imageUrl":"http://p0.meituan.net/waimaipoi/07cbd7fc25723beb93a7bdb099806c7343008.jpg.webp","title":"辣秋秋柳州螺蛳粉（上社店）","subTitle":"30分钟送达","subMessage":"满12减11, 满30...","bottomRightInfo":"月售1616","_id":"77504726","index":12},{"imageUrl":"http://p0.meituan.net/w.h/travel/9f422fe103e204f54c19022092c3458a949528.png","title":"广州塔(4A)","subTitle":"4.0分 | 44907人评价","subMessage":"起","bottomRightInfo":"已售13.9万+","_id":"83473","index":13},{"imageUrl":"http://p0.meituan.net/waimaipoi/de52fac01b416467ea99565813baf583265457.jpg.webp","title":"营养筒子骨鲜粉","subTitle":"35分钟送达","subMessage":"满23减9, 满40减...","bottomRightInfo":"月售4597","_id":"174311279","index":14},{"imageUrl":"http://p0.meituan.net/waimaipoi/a656c47bdf3127d10f7bc3d1834c0bed597006.jpg.webp","title":"老上海馄饨王(棠下店)","subTitle":"30分钟送达","subMessage":"满26减10, 满37...","bottomRightInfo":"月售2609","_id":"159421492","index":15},{"imageUrl":"http://p0.meituan.net/waimaipoi/5b12de311e3f26fa9087eab1cfa3599b47104.jpg.webp","title":"神仙烧烤","subTitle":"52分钟送达","subMessage":"满40减20, 满65...","bottomRightInfo":"月售1850","_id":"164576744","index":16},{"imageUrl":"http://p0.meituan.net/waimaipoi/41de6a5c746bba3ae6a1d85e05d68ee4218541.jpg.webp","title":"张亮麻辣烫（上社店）","subTitle":"30分钟送达","subMessage":"满27减15, 满38...","bottomRightInfo":"月售1739","_id":"41075013","index":17}]

/***/ }),

/***/ 35:
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

/***/ 73:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _homeGuessYouLike = __webpack_require__(31);

var _homeGuessYouLike2 = _interopRequireDefault(_homeGuessYouLike);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_homeGuessYouLike2.default.el = '#root';
new Vue(_homeGuessYouLike2.default);

/***/ })

/******/ });