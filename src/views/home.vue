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
        <h2>Email address</h2>
        <input type="text" placeholder="email@company.com">
        <button>Subscribe to monthly newsletter</button>
      </main>
    </div>
    <!-- Sign-up form end -->
  </div>
</template>

<script>
export default {
  name: 'HomePage'
}
</script>

<style lang="less">
@import '@/styles/home.less';
</style>
