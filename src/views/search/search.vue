<template>
  <div class="search">
    <group>
      <x-input placeholder="搜索歌曲,歌手">

        <icon slot="label" type="search"></icon>
      </x-input>
    </group>
    <div class="hots">
      <h3 class="title">热门搜索</h3>
      
      <ul>
        <li class="list-item" v-for="hot in hots"><span class="hot-name">{{hot.first}}</span></li>
      </ul>
    </div>

  </div>
</template>

<script>
import { XInput, Group, Icon } from "vux";
import { searchHot } from "@/api/api.js";
export default {
  data() {
    return {
      hots: []
    };
  },

  beforeCreate() {},

  created() {
    this._searchHot();
  },

  beforeMount() {},

  mounted() {},

  beforeUpdate() {},

  updated() {},

  beforeDestroy() {},

  destroyed() {},

  methods: {
    _searchHot() {
      searchHot().then(res => {
        this.hots = res.result.hots;
      });
    }
  },
  computed: {},
  components: {
    XInput,
    Group,
    Icon
  }
};
</script>
<style scoped lang="stylus" rel="stylesheet/stylus">
.search
 padding 0 20px
 .hots
   margin-top 10px
   .title
     font-size 30px   
     color: rgba(0,0,0,.6)  
   ul
    margin-top 10px
    .list-item
      display inline-block
      padding: 10px 20px
      margin: 0 20px 15px 0
      border: 1px solid rgba(0,0,0,.6);
      border-radius: 99px;
      font-size 26px
      .hot-name
        color #000
        

</style>
