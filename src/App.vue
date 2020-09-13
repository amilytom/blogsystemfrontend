<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>

  export default {
    name: 'App',
    data() {
      return {}
    },
    created() {
      var self = this;
      setTimeout(function () {
        self.login();
      }.bind(this), 3600)
    },
    methods: {
      login() {
        this.$store.dispatch('login')
          .then(res => {
            if (res.data.token) {
              console.log('TOKEN成功');
            } else {
              console.log('TOKEN失败');
            }
          })
          .catch(err => {
            console.log(err);
          });
      }

    }
  }
</script>

