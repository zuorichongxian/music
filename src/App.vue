<template>
  <div id="app">
    <m-header></m-header>
    <tab></tab>
    <router-view></router-view>
    <!-- <player></player> -->
  </div>
</template>

<script>
import mHeader from "@/views/m-header/m-header.vue";
import tab from "@/views/tab/tab.vue";
import player from "@/views/player/player.vue";
export default {
  name: "app",
  components: {
    tab,
    mHeader,
    player
  }
};
</script>

<style lang="less">
@import "~vux/src/styles/reset.less";

body {
  background-color: #fbf9fe;
}
</style>
