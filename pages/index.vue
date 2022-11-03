<template>
  <!-- 인트로 페이지 -->
  <main v-if="page === 0">
    <img src="" alt="개발자 이미지">
    <h1>나에게 어울리는 개발자 스타일 찾기!</h1>
    <h2>나에게 어울리는 개발자는 무엇일까요?</h2>
    <Mbti-Button text="테스트 시작!" styleType="blue" />
  </main>
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
    max-width: 430px;
    margin: auto;
  }
  h1 {
    font-size: 1.6em;
    margin-bottom: 25px;
  }
  h2 {
    font-size: 1.2em;
    color: #b9b8b7;
    margin-bottom: 25px;
    text-align: center;
  }
</style>