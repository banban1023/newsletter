<template>
  <div class="success">
    <div class="card">
      <!-- Success message start -->
      <div class="content">
        <img src="@/assets/images/icon-success.svg" alt="">
        <h1>Thanks for subscribing!</h1>
        <article>
          A confirmation email has been sent to <b>{{emailId}}</b>.
          Please open it and click the button inside to confirm your subscription.
        </article>
      </div>
      <button @click="$router.push('./')">Dismiss message</button>
    </div>

    <!-- Success message end -->
  </div>
</template>

<script>
export default {
  name: 'SuccessPage',
  computed: {
    emailId () {
      return this.$route.query.emailId
    }
  }
}
</script>

<style lang="less">
@import '@/styles/success.less';
</style>
