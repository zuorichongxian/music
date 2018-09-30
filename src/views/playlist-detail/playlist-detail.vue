<template>
  <div class="playlist-detail">
    <x-header style="background-color:#31c27c;" :title="playlistDetailData.name"></x-header>
    <div class="cover">
      <div class="bg-image" :style="bgStyle" v-if="playlistDetailData.coverImgUrl">
        <div class="filter"></div>
      </div>
    </div>
    <scroll class="music-list" :data='songList'>
      <div class="music-content">
        <panel :header="playlistDetailData.description" :list="songList" @on-click-item="handleListClick"></panel>
      </div>


    </scroll>

  </div>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";
import { XHeader, Panel } from "vux";
import scroll from "@/base/scroll/scroll.vue";
import { playlistDetail } from "@/api/api.js";
export default {
  data() {
    return {
      playlistDetailData: {},
      songList: []
    };
  },

  beforeCreate() {},

  created() {
    this._playlistDetail();
  },

  beforeMount() {},

  mounted() {},

  beforeUpdate() {},

  updated() {},

  beforeDestroy() {},

  destroyed() {},

  methods: {
    _playlistDetail() {
      const id = this.$route.params.id;
      this.$vux.loading.show({
        text: "Loading"
      });
      playlistDetail(id).then(res => {
        this.playlistDetailData = res.result;
        this.songList = res.result.tracks.map(item => {
          return {
            title: item.name,
            desc: item.artists[0].name,
            src: item.album.picUrl,
            id: item.id
          };
        });

        this.$vux.loading.hide();
      });
    },
    handleListClick(song) {
     
      this.setPlayList(song);
    },
    // 映射vuex的方法
    ...mapMutations({
      setPlayList: "SET_PLAYLIST"
    })
  },
  computed: {
    bgStyle() {
      return `background-image:url(${this.playlistDetailData.coverImgUrl})`;
    },
    // 获取vuex的state
    ...mapGetters(["playList"])
  },
  components: {
    XHeader,
    Panel,
    scroll
  }
};
</script>
<style scoped lang="stylus" rel="stylesheet/stylus">
.playlist-detail {
    position: fixed;
    top: 0;
    bottom: 0;
    z-index: 100;
    width: 100%;
    background: #fff;

    .cover {
        .bg-image {
            position: relative;
            width: 100%;
            height: 0;
            padding-top: 70%;
            transform-origin: top;
            background-size: cover;

            .filter {
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background: rgba(7, 17, 27, 0.4);
            }
        }
    }

    .music-list {
        height: 100%;
        overflow: hidden;
    }
}
</style>
