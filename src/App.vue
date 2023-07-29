<template>
  <nav class="navbar navbar-expand-lg bg-body-tertiary">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">Vuelog</a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#">
              <router-link to="/">Home</router-link>
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">
              <router-link to="/list">List</router-link>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </nav>

  <div class="mt-4">
    <router-view :블로그글="블로그글"></router-view>
  </div>

  <div class="pr">
    <div class="ch blue">zz</div>
  </div>

  <!-- <List v-for="(el, idx) in 블로그글" :key="idx" :data="el" /> -->
</template>

<script>
// import List from "./components/List.vue";
import post from "./assets/post";

export default {
  name: "App",
  data() {
    return {
      블로그글: post,
    };
  },
  components: {
    // List,
  },
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.pr {
  .ch {
    color: blue;
  }
}
</style>
