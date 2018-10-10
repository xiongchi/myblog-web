<template>
    <div class="meme">
      <div class="icon" @click="memeShow=!memeShow"></div>
      <div v-show="memeShow" class="feelings">
        <img style="width: 40px; height: 40px" v-for="item in 10" :key="item" src="../../../static/img/smile.png"/>
      </div>
    </div>
</template>

<script type="text/ecmascript-6">
export default {
  data () {
    return {
      memeShow: false
    }
  },
  name: 'meme'
}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .meme
    .icon
      width 34px
      height 34px
      background-image url("../../../static/img/smile.png")
      &:hover
        background-image url("../../../static/img/smile2.png")
    .feelings
      display flow
      position absolute
      margin-top 5px
      margin-left -50px
      width 350px
      height 200px
      background blue
</style>
