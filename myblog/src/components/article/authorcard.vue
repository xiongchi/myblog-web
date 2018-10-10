<template>
    <div class="author-card card-shadow">
      <div class="icon card-shadow"></div>
    </div>
</template>

<script type="text/ecmascript-6">
export default {
  name: 'authorcard'
}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .author-card
    position absolute
    left 930px
    width 300px
    height 450px
    background -webkit-repeating-radial-gradient(#ffd, #fff, #ffd)
    .icon
      width 120px
      height 120px
      margin-top 20px
      margin-left 85px
      border-radius 100px
      background-color #fff
      box-shadow 5px 5px 15px #ccc
</style>
