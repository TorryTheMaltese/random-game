<template>
  <div :class="getTheme">
    <header-box />
    <div class="game-table">
      <HelloWorld msg="Welcome to Your Vue.js App" />
    </div>
  </div>
</template>

<script>
import store from "./stores/store.js";
import HelloWorld from "./components/HelloWorld.vue";
import HeaderBox from "./components/HeaderBox.vue";

export default {
  name: "App",
  store,
  components: {
    HeaderBox,
    HelloWorld,
  },
  computed: {
    getTheme() {
      return store.state.theme;
    },
  },
};
</script>

<style lang="scss">
@import "./styles/themes.scss";
@import "./styles/variables.scss";

@each $theme in $themes {
  .#{map-get($theme, "name")} {
    background-color: map-get($map: $theme, $key: "background");
    color: map-get($map: $theme, $key: "text");
    width: 100%;
    min-height: 100%;

    .game-table {
      max-width: $max-width;
      background-color: map-get($map: $theme, $key: "light-color");
      margin: auto;
      border-radius: 20px;
      padding: 20px;
      box-sizing: border-box;
      position: relative;
    }
  }
}
</style>
