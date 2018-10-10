<template>
    <div class="meditor">
      <div class="top">
        <input class="title" placeholder=" 请输入标题"/>
      </div>
      <div class="save">
        保存
      </div>
      <div class="save publish">
        发布
      </div>
      <mavon-editor style="min-height: 600px;" v-model="editText"></mavon-editor>
    </div>
</template>

<script type="text/ecmascript-6">
import 'mavon-editor/dist/css/index.css'
var mavonEditor = require('mavon-editor')
export default {
  props: {
    subfield: true // 默认双开编辑
  },
  data () {
    return {
      editText: ''
    }
  },
  components: {
    'mavon-editor': mavonEditor.mavonEditor
  },
  name: 'meditor'
}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .meditor
    .top
      width 100%
      height 60px
      .title
        width 100%
        height 100%
        letter-spacing 2px
        line-height 60px
        font-size 26px
    .save
      position fixed
      width 7%
      height 50px
      top 75%
      left 93%
      border-radius 25px 0 0 25px
      text-align center
      line-height 50px
      z-index 3000
      color white
      letter-spacing 4px
      background dodgerblue
      &:hover
        background #2962DD
    .publish
      top 85%
      background #E6773B
      &:hover
        background #f05600
</style>
