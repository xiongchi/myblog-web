<template>
    <div class="writer">
      <div class="folder-div">
        <folder></folder>
      </div>
      <div class="files-div">
        <files></files>
      </div>
      <div class="editor-div">
        <meditor></meditor>
      </div>
    </div>
</template>

<script type="text/ecmascript-6">
import meditor from './meditor'
import folder from './folder'
import files from './files'
export default {
  components: {
    meditor,
    folder,
    files
  },
  name: 'writer'
}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .writer
    .folder-div
      float left
      width 15%
      height 800px
      background #404040
      overflow scroll
    .files-div
      float left
      width 20%
      height 800px
      overflow scroll
    .editor-div
      float left
      width 65%
      height 800px
</style>
