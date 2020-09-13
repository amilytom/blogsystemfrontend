<template>
  <div class="main">
    <header-com ref="header"></header-com>

    <div class="clr"></div>

    <div class="content">
      <div class="content_resize">
        <div class="mainbar">

          <div class="article">
            <!--获取文章标题-->
            <h2>{{articleInfo.title}}</h2>
            <div class="clr"></div>
            <!--获取分类名称和链接-->
            <p><a href="'/cate/'+ articleInfo.cate">{{articleInfo.cateName}}</a></p>
            <!--获取文章创建时间-->
            <p> {{username}} <span>&nbsp;&bull;&nbsp;</span> {{articleInfo.createdAt}} </p>
            <!--获取文章内容-->
            {{articleInfo.content}}
          </div>

        </div>

        <!--引入公共侧边栏-->
        <navbar-com ref="navbar"></navbar-com>

        <div class="clr"></div>

      </div>
    </div>

    <div class="clr"></div>

    <footer-com ref="footer"></footer-com>

  </div>
</template>

<script>
  import headerCom from '../components/header';
  import footerCom from '../components/footer';
  import navbarCom from '../components/navbar';
  import articleApi from '../api/articleApi';
  import Cookies from 'js-cookie';

  export default {
    data() {
      return {
        articleInfo: {},
        username: Cookies.get('username'),
        aid: 0
      }
    },
    components: {
      headerCom,
      footerCom,
      navbarCom
    },
    mounted() {
      this.getArticleInfo();
    },
    methods: {
      getArticleInfo() {
        this.aid = this.$route.params.id;
        articleApi
          .getarticleById(this.aid)
          .then(res => {
            console.log(res)
            this.articleInfo = res.data;
          })
          .catch(err => {
            console.log(err);
          });
      }
    }
  }
</script>
