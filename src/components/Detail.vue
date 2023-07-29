<template>
  <div>
    <h4>상세페이지</h4>
    <h5>{{ 블로그글[id].title }}</h5>
    <p>{{ 블로그글[id].content }}</p>
  </div>
  <router-view></router-view>
</template>

<script>
export default {
  name: "DetaiL",
  data() {
    return {
      id: this.$route.params.id,
    };
  },
  props: {
    블로그글: Array,
  },
};
</script>

<style>
</style>