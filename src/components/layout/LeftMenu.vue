<template>
  <div class="left-menu col-xs-2 sidebar">
    <div class="nav" style="text-align: center;">
      <a class="navbar-brand" href="#/"><b>{{ $t('brand') }}</b></a>
    </div>
    <ul class="nav nav-sidebar">
          <li class="active"><a v-link="{path: '/students/new'}"><i class="fa fa-user-plus fa-2x"></i> Cadastrar <span class="sr-only">(current)</span></a></li>
          <li><a v-link="{path: '/enroll'}"><i class="fa fa-book fa-2x"></i> Matricular</a></li>
          <li><a href="#"><i class="fa fa-sitemap fa-2x"></i> Oficinas</a></li>
        </ul>
  </div>
</template>
<style scoped>
  .left-menu{
    background-color: #011627;
    height: 100vh;
    padding: 0px;
  }
  .left-menu i {
    font-size: 24px;
    padding-right: 10px;
  }
  .navbar-brand {
    color: #2EC4B6;
    font-weight: bolder;
    font-size: 24px;
  }
</style>
