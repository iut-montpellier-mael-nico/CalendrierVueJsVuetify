import Vue from "vue";
import Router from "vue-router";
import Accueil from "./views/Accueil.vue";
import Calendrier from "./components/Calendar.vue";
import EventForm from  "./components/EventForm.vue";
import ListEvent from "./components/ListEvent.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "accueil",
      component: Accueil
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
    },
      {
          path: "/event/list",
          name: "listEvents",
          component:ListEvent
      }
  ]
});
