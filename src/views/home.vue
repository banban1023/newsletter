<template>
  <div class="home">
    <!-- Sign-up form start -->
    <img src="../assets/images/illustration-sign-up-mobile.svg" alt="" class="bg-pic">
    <div class="content">
      <header>
        <h1>Stay updated!</h1>
      </header>
      <main>
        <article>Join 60,000+ product managers receiving monthly updates on:</article>
        <ul>
          <li>Product discovery and building what matters</li>
          <li>Measuring to ensure updates are a success</li>
          <li>And much more!</li>
        </ul>
        <h2>Email address<span v-if="isShow">Valid email required</span></h2>
        <input @keyup.enter="SubmitEmail" :class="{error: isError}" v-model="email" type="text" placeholder="email@company.com">
        <button @click="SubmitEmail">Subscribe to monthly newsletter</button>
      </main>
    </div>
    <!-- Sign-up form end -->
  </div>
</template>

<script>
export default {
  name: 'HomePage',
  data () {
    return {
      email: '',
      isShow: false,
      isError: false
    }
  },
  methods: {
    valiFn () {
      if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(this.email)) {
        this.isShow = true
        this.isError = true
      } else {
        this.$router.push('/success')
        this.email = ''
      }
    },
    SubmitEmail () {
      this.valiFn()
      console.log(111)
    }
  }
}
</script>

<style lang="less">
@import '@/styles/home.less';
</style>
