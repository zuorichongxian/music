<template>
  <div class="recommend">
    <scroll class="recommend-content" :data='recommendList'>
      <!-- scroll组件必须只有一个子元素 -->
      <div>
        <swiper :aspect-ratio="172/375" auto loop dots-position="center">
          <swiper-item class="swiper-demo-img" v-for="(item, index) in banners" :key="index"><img :src="item.picUrl"
              style="width:100%"></swiper-item>
        </swiper>
        <panel header="热门歌单推荐" :list="recommendList" @on-click-item="handleListClick"></panel>
      </div>
    </scroll>
     <router-view></router-view>
  </div>
</template>

<script>

import { Swiper, SwiperItem, Panel } from "vux";
import scroll from "@/base/scroll/scroll.vue";
import { getBanner, getPersonalized } from "@/api/api";
export default {
  data() {
    return {
      banners: [],
      recommendList: []
    };
  },

  beforeCreate() {},

  created() {
    this._getBanner();
    this._getPersonalized();
  },

  beforeMount() {},

  mounted() {},

  beforeUpdate() {},

  updated() {},

  beforeDestroy() {},

  destroyed() {},

  methods: {
    _getBanner() {
      this.$vux.loading.show({
        text: "Loading"
      });
      getBanner().then(res => {
        this.$vux.loading.hide();
        this.banners = res.banners;
      });
    },
    _getPersonalized() {
      getPersonalized().then(res => {
        this.recommendList = res.result.map(item => {
          return {
            title: item.name,
            desc: item.copywriter,
            src: item.picUrl,
            id: item.id
          };
        });
      });
    },
    handleListClick(item) {
      console.log(item);

      this.$router.push({
        path: `/recommend/${item.id}`
      });
    },
    
  },
  computed: {
   
  },
  components: {
    Swiper,
    SwiperItem,
    Panel,
    scroll
  }
};
</script>
<style scoped lang="stylus" rel="stylesheet/stylus">
.recommend {
  position: fixed;
  width: 100%;
  top: 188px;
  bottom: 0;

  .recommend-content {
    height: 100%;
    overflow: hidden;
  }
}
</style>
