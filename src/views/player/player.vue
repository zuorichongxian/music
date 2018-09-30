<template>
     <div class="player">
           <x-header :right-options="{showMore: true}" style="background-color:#31c27c;" title="播放页面"></x-header>
     </div>
</template>

 <script>
import { XHeader } from "vux";
export default {
  data() {
    return {
      preventGoBack: true
    };
  },

  beforeCreate() {},

  created() {},

  beforeMount() {},

  mounted() {},

  beforeUpdate() {},

  updated() {},

  beforeDestroy() {},

  destroyed() {},

  methods: {},
  computed: {},
  components: {
    XHeader
  }
};
</script>
<style scoped lang="stylus">
.player {
    position: fixed;
    top: 0;
    bottom: 0;
    width: 100%;
    background: #fff;
}
</style>