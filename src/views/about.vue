<template>
  <div class="main">
    <header-com ref="header"></header-com>

    <div class="clr"></div>

    <div class="content">
      <div class="content_resize">
        <div class="mainbar">

          <div class="article">
            <h2>关于我们</h2>
            <div class="clr"></div>
            <!--获取关于我们内容-->
            {{about}}
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
  import infoApi from '../api/infoApi';

  export default {
    data() {
      return {
        about: ''
      }
    },
    components: {
      headerCom,
      footerCom,
      navbarCom
    },
    mounted() {
      this.getInfo();
    },
    methods: {
      getInfo() {
        let params = {};
        infoApi
          .getinfo(params)
          .then(res => {
            this.about = res.data.about;
          })
          .catch(err => {
            console.log(err);
          });
      }
    }
  }
</script>
