<template>
    <div class="active-info">
      <div class="replay-div">
        <replay></replay>
      </div>
    </div>
</template>

<script type="text/ecmascript-6">
import replay from '../common/replay'
export default {
  components: {
    replay
  },
  name: 'articleinfo'
}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .active-info
    margin-top 180px
    width 100%
    height 400px
    .replay-div
      width 600px
      height 800px
      margin-left 200px
</style>
