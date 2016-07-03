<template>
  <div >
    <left-menu></left-menu>
    <div class="col-xs-10 app-shell">
        <router-view></router-view>
    </div>
    <div v-if="isLoading" class="shell-loading-div"><i class="fa fa-spin fa-spinner fa-5x"></i></div>
  </div>
</template>

<script>
  import LeftMenu from './components/layout/LeftMenu';

  export default {
    data() {
      return {
        isLoading: false,
      };
    },
    ready() {
      this.initializeListeners();
    },
    methods: {
      initializeListeners() {
        this.$on('loading-start', () => {
          this.isLoading = true;
        });
        this.$on('loading-finish', () => {
          this.isLoading = false;
        });
      },
    },
    components: {
      LeftMenu,
    },
  };
</script>

<style scoped>
  .shell-loading-div {
    color: #2EC4B6;
    background-color: white;
    opacity: 0.8;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index:99;
  }

  .shell-loading-div i {
    position: absolute;
    left: calc((100% - 65px)/2);
    top: calc((100% - 65px)/2);
  }
</style>
