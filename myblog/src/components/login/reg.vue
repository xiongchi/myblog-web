<template>
    <div class="reg-div">
      <input class="nickname comm-input" placeholder=" Nickname  "/>
      <input class="local-set comm-input" placeholder=" Email "/>
      <input class="local-set comm-input" placeholder=" Password  "/>
      <button class="reg-color local-set comm-input">Sign Up</button>
    </div>
</template>

<script type="text/ecmascript-6">
export default {
  name: 'reg'
}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .reg-div
     position relative
     width 480px
     height 470px
     top 100px
     .nickname
       margin-left 50px
       margin-top 50px
     .local-set
       margin-left 50px
       margin-top 30px
     .reg-color
       color #fff
       background #32CA55
</style>
