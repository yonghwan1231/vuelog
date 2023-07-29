<template>
  <div v-for="(el, idx) in 블로그글" :key="idx">
    <h5>
      <router-link :to="'/detail/' + el.number">{{ el.title }}</router-link>
    </h5>
    <p>{{ el.date }}</p>
  </div>
</template>

<script>
export default {
  name: "LisT",
  props: {
    블로그글: Array,
  },
};
</script>

<style>
</style>