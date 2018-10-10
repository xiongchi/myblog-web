<template>
    <div class="files">
      <div class="add-file">
        <img src="../../../static/img/add2.png"/>
        <label>新建文章</label>
      </div>
      <div v-for="item in 10" :key="item" @click="toggleCss(item - 1)"
           class="file" :class="fileClickFlag[item - 1]?'file-change':''">
        <img src="../../../static/img/article.png"/>
        <label>第一篇文章</label>
        <img style="margin-top: 37px;" src="../../../static/img/todo2.png"/>
      </div>
    </div>
</template>

<script type="text/ecmascript-6">
export default {
  data () {
    return {
      fileClickFlag: []
    }
  },
  mounted () {
    for (let i = 0; i < 10; i++) {
      if (i === 0) {
        this.fileClickFlag.push(true)
      } else {
        this.fileClickFlag.push(false)
      }
    }
  },
  methods: {
    toggleCss (item) {
      this.fileClickFlag.splice(this.fileClickFlag.indexOf(true), 1, false)
      this.fileClickFlag.splice(item, 1, true)
    }
  },
  name: 'files'
}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .files
    .add-file
      width 100%
      height 60px
      img
        float left
        margin-top 20px
        margin-left 40px
      label
        float left
        font-size 20px
        letter-spacing 3px
        margin-left 15px
        margin-top 20px
        color #1196DB
    .file
      height 100px
      border-top 1px solid #CCCCCC
      img
        float left
        margin-top 25px
        margin-left 20px
      label
        float left
        width 130px
        height 20px
        margin-top 40px
        margin-left 10px
        text-overflow ellipsis
        white-space nowrap
        overflow hidden
      &:hover
        background #DFDFDF
    .file-change
      background #DFDFDF
      border-left 4px solid #E6773B
</style>
