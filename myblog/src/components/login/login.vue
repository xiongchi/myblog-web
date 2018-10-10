<template>
    <div class="login-div">
      <label class="reminds">{{remind}}</label>
      <input @change="nameChange" v-model="username" class="username comm-input" placeholder=" Username  "/>
      <input @change="passwordChange" v-model="password" class="password comm-input" placeholder=" Password  "/>
      <button :style="{cursor: (canCommit?'pointer': 'no-drop')}" v-bind:disabled="!canCommit" class="sign-in comm-input" @click="commitLogin">Sign In</button>
    </div>
</template>

<script type="text/ecmascript-6">
export default {
  data () {
    return {
      username: '',
      password: '',
      remind: ''
    }
  },
  computed: {
    canCommit () {
      // 提交按钮是否可用
      return this.username !== '' && this.remind === '' && this.password !== ''
    }
  },
  methods: {
    commitLogin () {
    },
    nameChange () {
      if (this.username === '') {
        this.remind = '请输入用户名'
      } else {
        this.remind = ''
      }
    },
    passwordChange () {
      if (this.password === '') {
        this.remind = '请输入密码'
      } else {
        this.remind = ''
      }
    }
  },
  name: 'login'
}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .login-div
    position relative
    width 480px
    height 400px
    top 100px
    .reminds
      position absolute
      top 25px
      left 55px
      font-size 16px
      font-family Arial
      color red
    .username
      margin-left 50px
      margin-top 50px
    .password
      margin-left 50px
      margin-top 30px
    .sign-in
      margin-left 50px
      margin-top 30px
      color white
      background-color dodgerblue
</style>
