<template>
    <div class="folder">
      <div class="btn">
        回首页
      </div>
      <div class="add-fold">
        <img src="../../../static/img/add.png"/>
        <label>新建文件夹</label>
      </div>
      <div :class="clickFlag[0]?'flods-change':''" class="folds" @click="toggleCss(0)">
        <p>默认文件夹</p>
        <img src="../../../static/img/todo.png"/>
      </div>
      <div class="folds" v-for="item in 10" :key="item" :class="clickFlag[item]?'flods-change':''"  @click="toggleCss(item)">
        <p>{{item}}</p>
        <img src="../../../static/img/todo.png"/>
      </div>
    </div>
</template>

<script type="text/ecmascript-6">
export default {
  data () {
    return {
      clickFlag: []
    }
  },
  mounted () {
    for (let i = 0; i <= 10; i++) {
      if (i === 0) {
        this.clickFlag.push(true)
      } else {
        this.clickFlag.push(false)
      }
    }
  },
  methods: {
    toggleCss (item) {
      this.clickFlag.splice(this.clickFlag.indexOf(true), 1, false)
      this.clickFlag.splice(item, 1, true)
    }
  },
  name: 'contents'
}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .folder
    .btn
      width 80%
      height 50px
      margin-top 40px
      margin-left 10%
      border-radius 25px
      text-align center
      line-height 50px
      border 1px solid #E6773B
      color #E6773B
      &:hover
        background #E6773B
        color #fff
    .add-fold
      margin-top 20px
      height 50px
      img
        float left
        margin-top 10px
        margin-left 20px
      label
        float left
        width 100px
        height 20px
        margin-left 5px
        margin-top 15px
        color white
    .folds
      height 50px
      p
        float left
        width 100px
        height 18px
        padding-left 30px
        margin-top 15px
        overflow hidden
        text-overflow ellipsis
        white-space nowrap
        color white
      img
        float left
        margin-top 13px
        margin-left 20px
    .flods-change
        background #666666
        border-left 4px solid #E6773B
</style>
