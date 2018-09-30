<template>
     <div class="rank">
       <panel header="排行榜"  :list="rankingList"  @on-click-item="handleListClick"></panel>
     </div>
</template>

 <script>
import { Panel } from "vux";
import { getRank } from "@/api/api";
export default {
  data() {
    return {
      rankingList: []
    };
  },

  beforeCreate() {},

  created() {
    this._getRank();
  },

  beforeMount() {},

  mounted() {},

  beforeUpdate() {},

  updated() {},

  beforeDestroy() {},

  destroyed() {},

  methods: {
    _getRank() {
      this.$vux.loading.show({
        text: "Loading"
      });
      getRank().then(res => {
        this.rankingList = res.list.map(item => {
          return {
            title: item.name,
            desc: item.description,
            src: item.coverImgUrl,
            id: item.id
          };
        });
        this.$vux.loading.hide();
      });
    },
    handleListClick(item) {
     
      this.$router.push({
        path: `/recommend/${item.id}`
      });
    }
  },
  computed: {},
  components: {
    Panel
  }
};
</script>
<style scoped lang="stylus" rel="stylesheet/stylus">
</style>