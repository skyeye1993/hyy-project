<template lang="html">
  <div class="shopcart">
    <div class="content">
      <div class="content-left" @click.stop.prevent="toggleList">
        <div class="logo-wrapper">
          <div class="logo" :class="{'highlight': totalCount > 0}">
            <i class="icon-shopping_cart"></i>
          </div>
          <div class="num" v-show="totalCount>0">
            {{totalCount}}
          </div>
        </div>
        <div class="price" :class="{'highlight': totalPrice>0}">
          ￥{{totalPrice}}
        </div>
        <div class="desc">
          另需配送费￥{{deliveryPrice}}元
        </div>
      </div>
      <div class="content-right" @click="pay">
        <div class="pay" :class="payClass">
          {{payDesc}}
        </div>
      </div>
    </div>
    <div class="ball-container">
      <div v-for="ball in balls">
        <transition name="drop" @before-enter="beforeDrop" @enter="dropping" @after-enter="afterDrop">
          <div class="ball" v-show="ball.show">
            <div class="inner inner-hook"></div>
          </div>
        </transition>
      </div>
      <!-- <transition-group name="drop" @before-enter="beforeEnter" @enter="enter" @after-enter="afterEnter">
        <div class="ball" v-for="ball in balls" v-show="ball.show" :key="ball">
          <div class="inner inner-hook"></div>
        </div>
      </transition-group> -->
    </div>
    <transition name="fold">
      <div class="shopcart-list" v-show="listShow">
        <div class="list-header clearfix">
          <h1 class="title">购物车</h1>
          <span class="empty" @click="empty">清空</span>
        </div>
        <div class="list-content" ref="listContent">
          <ul>
            <li class="food border-1px" v-for="food in selectFoods">
              <span class="name">{{food.name}}</span>
              <div class="price">
                <span>￥{{food.price * food.count}}</span>
              </div>
              <div class="cartcontrol-wrapper">
                <cartcontrol :food="food"  @cartAdd="drop"></cartcontrol>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </transition>
  </div>
</template>


<script>
export default {
  props: {
    food: { // 购物车按钮的信息由父组件传入
      type: Object
    }
  },
  created() {
    // console.log(this.food)
  },
  methods: {
  }
}
</script>

<style lang="scss">
@import '../common/sass/mixin.scss';

.shopcart {
    position: fixed;
    z-index: 50;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 46px;
    background: #ccc;
    .content {
        display: flex;
        height: 100%;
        color: rgba(255,255,255,0.4);
        background: #141d27;
        .content-left {
            flex-grow: 1;
            font-size: 0;
            .logo-wrapper {
                display: inline-block;
                position: relative;
                top: -10px;
                margin: 0 12px;
                padding: 6px;
                width: 56px;
                height: 56px;
                border-radius: 50%;
                background: #141d27;
                box-sizing: border-box;
                vertical-align: top;
                text-align: center;
                .logo {
                    width: 100%;
                    height: 100%;
                    border-radius: 50%;
                    background: #2b333b;
                    &.highlight {
                        background: rgb(0,160,220);
                        .icon-shopping_cart {
                            color: #fff;
                        }
                    }
                    .icon-shopping_cart {
                        line-height: 44px;
                        font-size: 24px;
                        color: rgba(255,255,255,0.4);
                    }
                }
                .num {
                    position: absolute;
                    top: 0;
                    right: 0;
                    width: 24px;
                    height: 16px;
                    line-height: 16px;
                    text-align: center;
                    border-radius: 16px;
                    font-size: 9px;
                    font-weight: 700;
                    color: #fff;
                    background: rgb(240,20,20);
                    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.4);
                }
            }
            .price {
                display: inline-block;
                vertical-align: top;
                line-height: 24px;
                margin-top: 12px;
                padding-right: 12px;
                border-right: 1px solid rgba(255,255,255,0.1);
                color: rgba(255,255,255,0.4);
                font-size: 18px;
                font-weight: 700;
                &.highlight {
                    color: #fff;
                }
            }
            .desc {
                display: inline-block;
                vertical-align: top;
                margin: 12px 0 0 12px;
                line-height: 24px;
                font-size: 12px;
            }
        }
        .content-right {
            flex: 0 0 105px;
            width: 105px;
            background: #2b333b;
            .pay {
                line-height: 48px;
                text-align: center;
                font-size: 14px;
                font-weight: 700;
                &.not-enough {
                    background: #2b333b;
                }
                &.enough {
                    background: #00b43c;
                    color: #fff;
                }
            }
        }
    }
    .ball-container {
        .ball {
            position: fixed;
            left: 32px;
            bottom: 22px;
            z-index: 200;
            transition: all 0.4s cubic-bezier(0.49,-0.29,0.75,0.41); /* bezier曲线，详情看"http://cubic-bezier.com/#.49,-0.29,.75,.41" */
            .inner {
                width: 16px;
                height: 16px;
                border-radius: 50%;
                background: rgb(0,160,220);
                transition: all 0.4s linear;
            }
        }
    }
    .shopcart-list {
      position: absolute;
      left: 0;
      top: 0;
      z-index: -1;
      width: 100%;
      transform: translate3d(0,-100%,0);
      &.fold-enter-active, &.fold-leave-active {
        transition: all .5s
      }
      &.fold-enter, &.fold-leave-to {
        transform: translate3d(0,0,0);
      }
      .list-header {
        height: 40px;
        line-height: 40px;
        padding: 0 18px;
        background: #f3f5f7;
        border-bottom: 1px solid rgba(7,17,27,0.1);
        .title {
          float: left;
          font-size: 14px;
          font-weight: 400;
          color: rgb(7,17,27);
        }
        .empty {
          float: right;
          font-size: 12px;
          color: rgb(0,160,220);
        }
      }
      .list-content {
        max-height: 220px;
        overflow: hidden;
        background: #fff;
        padding: 0 18px;
        .food {
          position: relative;
          padding: 12px 0;
          box-sizing: border-box;
          @include border-1px(rgba(7,17,27,0.1));
          height: 48px;
          .name {
            line-height: 24px;
            font-size: 14px;
            color: rgb(7,17,27);
          }
          .price {
            position: absolute;
            right: 90px;
            bottom: 12px;
            line-height: 24px;
            font-weight: 14px;
            font-weight: 700;
            color: rgb(240,20,20)
          }
          .cartcontrol-wrapper {
            position: absolute;
            right: 0;
            bottom: 6px;
          }
        }
      }
    }
    .list-mask {
      position: fixed;
      z-index: -10;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      transition: all .5s;
      background: rgba(7,17,27,0.6);
      filter: blur(10px);
      &.fade-enter-active, &.fade-leave-active {
        transition: all .5s;
      }
      &.fade-enter, &.fade-leave-to {
        opacity: 0;
      }
    }
}
</style>
