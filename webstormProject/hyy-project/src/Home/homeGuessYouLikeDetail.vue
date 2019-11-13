<template>
    <div class="container">
        <homeBottomCommonCell ref="homeBottomCommonCell"
                              :rightViewBtttomImage = rightViewBtttomImage
                              leftTitle = "菜品"
        ></homeBottomCommonCell>
        <list class="list" ref="guessList" show-scrollbar='false'  v-bind:style="{height:listHeight}" offset-accuracy="10" @appear="onappear" @scroll="scrollHandler" @scrollstart="scrollStart">
            <cell class="cell" v-for="(food, index) in lists" ref="item" @click="toggle(food)">
                <div class="panel">
                    <div style="flex-direction: row">
                        <div class="panelLeftView">
                            <image :src="dealWithImgUrl(food.image)" style="width: 240px;height: 180px;margin-left: 20px"></image>
                        </div>
                        <div class="panelRightView">
                            <div style="flex-direction: row;justify-content: space-between">
                                <text style="color: black;font-size: 28px;margin-right: 20px;lines:1;text-overflow:ellipsis;flex: 0.8">{{food.name}}</text>
                                <!--<text style="color: black;font-size: 28px;flex: 0.3">{{food.topRightInfo}}</text>-->
                            </div>
                            <text style="color: darkgray;font-size: 28px;margin-right: 20px;margin-top: 10px;lines:2;text-overflow:ellipsis">{{food.subTitle}}</text>
                            <div style="flex-direction: row;justify-content: space-between;margin-top: 10px">
                                <text style="color: crimson;font-size: 28px">月售{{food.sellCount}}</text>
                                <Cartcontrol :index="index" :food="food" @cartAdd="addCart" />
                            </div>
                            <text style="color: black;font-size: 28px;margin-top: 20px">￥{{food.price}}</text>
                        </div>
                    </div>
                    <div style="flex: 1;height: 1px;background-color: #c4c4c4;margin-top: 20px"></div>
                </div>
            </cell>
        </list>
        <Shopcart ref="shopcart" :selectFoods="selectFoods"></Shopcart>
    </div>
</template>

<script>
    import Shopcart from '../components/shopcart.vue';
    import Cartcontrol from '../components/cartcontrol.vue';
    var navigator = weex.requireModule('navigator');
    var globalDefine = require('../globalDefine');
    var homeBottomCommonCell = require('./homeBottomCommonCell');
    var homeHotData = require('../resource/gusyoulikedetailTemp');
    var homeHotGoods = require('../resource/gusyoulikedetailTemp');


    var stream = weex.requireModule('stream');
    const modal = weex.requireModule('modal');
    const dom = weex.requireModule('dom');

    export default {
        props: {
            seller: {
                type: Object
            }
        },
        data () {
            return{
                rightViewBtttomImage:globalDefine.apiUrl.resUrl + 'cnxh.png',
                lists: homeHotData,
                listHeight:'',
            }
        },
        computed: {
            selectFoods() {
                let foods = []
                this.lists.forEach((food) => {
                    if (food.count) {
                        foods.push(food)
                    }
                })
                return foods
            },
            currentIndex() { // 计算出要高亮的index，即是要高亮的meun-warpper的index,也就是在那个高度区间
                for (let i = 0; i < this.listHeight.length; i++) {
                    let height1 = this.listHeight[i]
                    let height2 = this.listHeight[i + 1]
                    if (!height2 || (this.scrollY >= height1 && this.scrollY < height2)) { // 因为最后一个i+1不存在，因此需要加上!height2进行判定
                        return i
                    }
                }
                return 0
            },
        },
        components:{
            homeBottomCommonCell,
            Cartcontrol,
            Shopcart
        },
        created(){
            this.lists = this.lists.map(item => {
                return {
                    name: item.name,
                    price: item.price,
                    oldPrice: item.oldPrice,
                    description: item.description,
                    sellCount: item.sellCount,
                    rating: item.rating,
                    info: item.info,
                    icon: item.icon,
                    image: item.image,
                    count: 0
                }
               
            })
            const self = this;
            this.listHeight = 4 * 220 + 3 +'px';
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
            addCart(e){
                console.log(this.lists)
            },
            onappear (event) {
            },
            scrollHandler (e) {
            },
            scrollStart (e) {
                // this.listHeight = e.contentSize.height;
            },
            toggle: function(item) {
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

