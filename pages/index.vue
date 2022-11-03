<template>
  <!-- 인트로 페이지 -->
  <main v-if="page === 0"></main>
  <!-- 퀴즈 페이지 -->
  <main v-else></main>
</template>
<script>
export default {
  computed: {
    page() {
      return 0
    },
    quiz() {
      return []
    }
  }
}
</script>
<style>
  main {
    padding: 30px 0;
    width: 100%;
    max-width: 360px;
    margin: auto;
  }
</style>