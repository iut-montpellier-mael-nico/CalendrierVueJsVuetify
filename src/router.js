import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import Accueil from "./views/Accueil.vue";
import Calendrier from "./components/Calendar.vue";
import EventForm from  "./components/EventForm.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "accueil",
      component: Accueil
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/About.vue")
    },
    {
      path: "/calendrier",
      name: "calendrier",
      component: Calendrier
    },
    {
      path: "/event/add",
      name: "eventAdd",
      component: EventForm
    }
  ]
});
