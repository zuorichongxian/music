<template>
  <div class="tab">
    <tab :line-width="1" custom-bar-width="60px">
      <tab-item :selected="path=='#/recommend'">
        <router-link tag="div" class="tab-item" to="/recommend">推荐</router-link>
      </tab-item>

      <tab-item :selected="path=='#/rank'">
        <router-link tag="div" class="tab-item" to="/rank">排行</router-link>
      </tab-item>
      <tab-item :selected="path=='#/singer'">
        <router-link tag="div" class="tab-item" to="/singer">歌手</router-link>
      </tab-item>
      <tab-item :selected="path=='#/search'">
        <router-link tag="div" class="tab-item" to="/search">搜索</router-link>
      </tab-item>

    </tab>
  </div>
</template>

<script>
import { Tab, TabItem } from "vux";
export default {
  data() {
    return {
      path: ""
    };
  },

  beforeCreate() {},

  created() {
    this.path = location.hash;
  },

  beforeMount() {},

  mounted() {
    
    
  },

  beforeUpdate() {},

  updated() {},

  beforeDestroy() {},

  destroyed() {},

  methods: {},

  components: {
    Tab,
    TabItem
  }
};
</script>
<style scoped lang="stylus" rel="stylesheet/stylus">
</style>
