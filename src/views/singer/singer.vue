<template>
     <div class="singer">
       <div class="singer-list">
         <ul>
           <li class="singer-item" v-for="(item, index) in singers" :key="index" @click="selectItem(item)">
             <img :src='item.img1v1Url' class="avatar"></img>
             <span class="name">{{item.name}}</span>
           </li>
         </ul>
       </div>
     </div>
</template>

 <script>
import { getHotSinger, getArtists } from "@/api/api.js";
export default {
  data() {
    return {
      singers: []
    };
  },

  beforeCreate() {},

  created() {
    this._getHotSinger();
  },

  beforeMount() {},

  mounted() {},

  beforeUpdate() {},

  updated() {},

  beforeDestroy() {},

  destroyed() {},

  methods: {
    _getHotSinger() {
      getHotSinger().then(res => {
        this.singers = res.artists;
      });
    },
    selectItem(data) {
      const id = data.id;
      getArtists(id).then(res => {});
    }
  },
  computed: {},
  components: {}
};
</script>
<style scoped lang="stylus" rel="stylesheet/stylus">
.singer {
  .singer-list {
    ul {
      .singer-item {
        width: 100%;
        display: flex;
        align-items: center;
        padding: 20px;

        .avatar {
          width: 120px;
          height: 120px;
          border-radius: 50%;
        }

        .name {
          margin-left: 70px;
          font-size: 32px;
        }
      }
    }
  }
}
</style>