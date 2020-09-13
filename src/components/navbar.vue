<template>
  <div class="sidebar">
    <div class="gadget">
      <h2>推荐文章</h2>
      <div class="clr"></div>
      <ul class="ex_menu">
        <li v-for="(item,index) in articleList" :key="index"><a :href="'/article/' + item.id" :title="item.title">{{item.title}}</a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  import articleApi from '../api/articleApi';

  export default {
    name: 'navbar',
    data() {
      return {
        articleList: []
      }
    },
    mounted() {
      this.getArticleList();
    },
    methods: {
      getArticleList() {
        let params = {
          page: 1,
          rows: 6
        };
        articleApi
          .articleList(params)
          .then(res => {
            this.articleList = res.data.list;
          })
          .catch(err => {
            console.log(err);
          });
      }
    }
  }
</script>

