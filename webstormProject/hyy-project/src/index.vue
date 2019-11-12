<template>
  <div class="wrapper">
    <Home></Home>
    <shop></shop>
    <mine></mine>
    <more></more>
  </div>
</template>

<script>
import Home from '@/Home/Home'
import shop from '@/Shop/Shop'
import mine from '@/Mine/Mine'
import more from '@/More/More'

export default {
  name: 'App',
  components: {
    Home,
    more,
    mine,
    shop
  },
  data () {
    return {
      logo: 'https://gw.alicdn.com/tfs/TB1yopEdgoQMeJjy1XaXXcSsFXa-640-302.png'
    }
  }
}
</script>

<style scoped lang='scss'>

  .wrapper {
     /*justify-content: center;
    align-items: center;*/
  }
   .logo {
    width: 424px;
    height: 200px;
  }
  .greeting {
    text-align: center;
    margin-top: 70px;
    font-size: 50px;
    color: #41B883;
  }
  .message {
    margin: 30px;
    font-size: 32px;
    color: #727272;
  }
</style>
