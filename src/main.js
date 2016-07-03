import Vue from 'vue';
import VueRouter from 'vue-router';
import VueI18n from 'vue-i18n';
import Students from './components/pages/Students';
import App from './App';
import locales from './i18n/locales';

Vue.use(VueRouter);
Vue.use(VueI18n);

// set lang
Vue.config.lang = 'pt-br';
Vue.config.debug = true;

Object.keys(locales).forEach((lang) => {
  Vue.locale(lang, locales[lang]);
});

const router = new VueRouter();
router.map({
  '/students/new': {
    component: Students,
  },
});

router.start(App, '#app');
