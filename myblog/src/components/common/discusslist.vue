<template>
    <div class="discuss-list">
      <discuss v-for="item in 10" :key="item"></discuss>
    </div>
</template>

<script type="text/ecmascript-6">
import discuss from './discuss'
export default {
  components: {
    discuss
  },
  name: 'discusslist'
}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .discuss-list
    width 100%
</style>
