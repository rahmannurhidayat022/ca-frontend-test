import { createRouter, createWebHistory } from "vue-router";
import BrowseSection from "../views/Browse.vue";
import CorrelationSection from "../views/Correlation.vue";
import SummarySection from "../views/Summary.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "browse",
      component: BrowseSection,
    },
    {
      path: "/",
      name: "summary",
      component: SummarySection,
    },
    {
      path: "/",
      name: "correlation",
      component: CorrelationSection,
    },
  ],
});

export default router;
