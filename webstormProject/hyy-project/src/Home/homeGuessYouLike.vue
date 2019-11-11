<template>
    <div class="container">
        <homeBottomCommonCell ref="homeBottomCommonCell"
                              :rightViewBtttomImage = rightViewBtttomImage
                              leftTitle = "猜你喜欢"
        ></homeBottomCommonCell>

        <list class="list" ref="guessList" show-scrollbar='false'  v-bind:style="{height:listHeight}" offset-accuracy="10" @appear="onappear" @scroll="scrollHandler" @scrollstart="scrollStart">
            <cell class="cell" v-for="(shop, index) in lists" ref="item" @click="toggle(shop)">
                <div class="panel">
                    <div style="flex-direction: row">
                        <div class="panelLeftView">
                            <image :src="dealWithImgUrl(shop.imageUrl)" style="width: 240px;height: 180px;margin-left: 20px"></image>
                        </div>
                        <div class="panelRightView">
                            <div style="flex-direction: row;justify-content: space-between">
                                <text style="color: black;font-size: 28px;margin-right: 20px;lines:1;text-overflow:ellipsis;flex: 0.8">{{shop.title}}</text>
                                <text style="color: black;font-size: 28px;flex: 0.3">{{shop.topRightInfo}}</text>
                            </div>
                            <text style="color: darkgray;font-size: 28px;margin-right: 20px;margin-top: 10px;lines:2;text-overflow:ellipsis">{{shop.subTitle}}</text>
                            <div style="flex-direction: row;justify-content: space-between;margin-top: 10px">
                                <text style="color: crimson;font-size: 28px">{{shop.subMessage}}</text>
                                <text style="color: black;font-size: 28px;margin-right: 20px">{{shop.bottomRightInfo}}</text>
                            </div>
                        </div>
                    </div>
                    <div style="flex: 1;height: 1px;background-color: #c4c4c4;margin-top: 20px"></div>
                </div>
            </cell>
        </list>
    </div>
</template>

<script>
    var navigator = weex.requireModule('navigator');
    var globalDefine = require('../globalDefine');
    var homeBottomCommonCell = require('./homeBottomCommonCell');
    var homeHotData = require('../resource/gusyoulike');
    var stream = weex.requireModule('stream');
    const modal = weex.requireModule('modal');
    const dom = weex.requireModule('dom');

    export default {
        data () {
            return{
                rightViewBtttomImage:globalDefine.apiUrl.resUrl + 'cnxh.png',
                lists: homeHotData,
                listHeight:'',
                baseURL : ''
            }
        },
        components:{
            homeBottomCommonCell,
        },
        created(){
            const self = this;
            this.listHeight = 18 * 220 + 3 +'px';

            var bundleUrl = this.$getConfig().bundleUrl;

            bundleUrl = new String(bundleUrl);
            var nativeBase;
            var isAndroidAssets = bundleUrl.indexOf('file://assets/') >= 0;

            var isiOSAssets = bundleUrl.indexOf('file:///') >= 0 && bundleUrl.indexOf('WeexDemo.app') > 0;
            if (isAndroidAssets) {
                nativeBase = 'file://assets/dist/';
            }
            else if (isiOSAssets) {
                nativeBase = bundleUrl.substring(0, bundleUrl.lastIndexOf('/') + 1);
            }
            else {
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
            dealWithImgUrl(url){
                if (url.search('w.h') == -1){ // 没有找到,正常返回
                    return url;
                }else{
                    return url.replace('w.h', '240.180');
                }
            },
            onappear (event) {
            },
            scrollHandler (e) {
            },
            scrollStart (e) {
                // this.listHeight = e.contentSize.height;
            },
            toggle: function(item) {
                alert(this.baseURL+ 'Home/homeGuessYouLikeDetail.js?id='+item._id);
                var params = { url : this.baseURL + 'Home/homeGuessYouLikeDetail.js?id='+item._id,animated: "true"};
                navigator.push(params, function(e) {
                    console.log('i am the callback.');
                });
            }
        }

    }
</script>

<style scoped>
    .container{
        margin-top: 20px;
    }
    .list{
        width: 750px;
        justify-content: center;
        align-items: center;
        background-color: white;
    }
    .cell{
        width: 750px;
        height: 220px;
    }
    .panel {
        width: 750px;
        margin-top: 20px;
        /*margin-bottom: 10px;*/
    }
    .panelLeftView{
        justify-content: center;
        flex: 0.36;
    }
    .panelRightView{
        margin-left: 15px;
        flex: 0.64;
    }
</style>

