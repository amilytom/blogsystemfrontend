<template>
  <div class="header">
    <div class="header_resize">
      <div class="logo">
        <h1>{{title}}
          <small>{{subtitle}}</small>
        </h1>
      </div>
      <div class="clr"></div>
      <div class="menu_nav">
        <ul>
          <li :class="$route.path == '/' ? 'active' : ''"><a href="/">首页</a></li>
          <li :class="$route.params.id == item.id ? 'active' : ''" v-for="(item,index) in cateList" :key="index"><a
            :href="'/cate/'+item.id">{{item.name}}</a></li>
          <li :class="$route.path == '/about' ? 'active' : ''"><a href="/about">关于我们</a></li>
        </ul>
      </div>
      <div class="clr"></div>
    </div>
  </div>
</template>

<script>
  import infoApi from '../api/infoApi';
  import cateApi from '../api/cateApi';

  export default {
    data() {
      return {
        title: '',
        subtitle: '',
        cateList: []
      }
    },
    created() {
      console.log(this)
      this.getInfo();
      this.getCateList();
    },
    methods: {
      getInfo() {
        let params = {};
        infoApi
          .getinfo(params)
          .then(res => {
            //console.log(res)
            this.title = res.data.title;
            this.subtitle = res.data.subtitle;
          })
          .catch(err => {
            console.log(err);
          });
      },
      getCateList() {
        let params = {
          page: 1,
          rows: 8
        };
        cateApi
          .cateList(params)
          .then(res => {
            //console.log(res);
            this.cateList = res.data.list;
          })
          .catch(err => {
            console.log(err);
          });
      }
    }
  }
</script>

<style scoped>

</style>
