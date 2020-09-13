<template>
  <div class="main">
    <header-com ref="header"></header-com>

    <div class="clr"></div>

    <div class="content">
      <div class="content_resize">
        <div class="mainbar">

          <div class="article" v-for="(item,index) in articleList" :key="index">
            <!--获取标题和链接-->
            <h2><a @click="locationto(item.id)">{{item.title}}</a></h2>
            <div class="clr"></div>
            <!--获取文章创建时间-->
            <p> {{username}} <span>&nbsp;&bull;&nbsp;</span> {{item.createdAt}} </p>
            <div class="clr"></div>
            <!--获取文章摘要-->
            {{item.desc}}
            <!--获取文章id拼接链接-->
            <p><a @click="locationto(item.id)">阅读更多</a></p>
          </div>

          <el-pagination
            background
            @current-change="handleCurrentChange"
            layout="prev, pager, next"
            :current-page="curPage"
            :page-size="rows"
            :total="total">
          </el-pagination>

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
        articleList: {},
        username: Cookies.get('username'),
        total: 0,
        curPage: 1,
        rows: 3,
        cateid: 0
      }
    },
    components: {
      headerCom,
      footerCom,
      navbarCom
    },
    mounted() {
      console.log(this)
      this.getArticle();
    },
    methods: {
      handleCurrentChange(val) {
        this.curPage = val;
        this.getArticle();
      },
      getArticle() {
        this.cateid = this.$route.params.id;
        let params = {
          page: this.curPage,
          rows: this.rows,
          cate: this.cateid
        };
        articleApi
          .articleList(params)
          .then(res => {
            this.articleList = res.data.list;
            this.total = parseInt(res.data.count);
          })
          .catch(err => {
            console.log(err);
          });
      },
      locationto(id) {
        let url = '/article/' + id;
        this.$router.push({path: url});
      }
    }
  }
</script>
