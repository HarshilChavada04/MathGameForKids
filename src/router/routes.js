const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      { path: "", component: () => import("pages/IndexPage.vue") },
      { path: "/addition", component: () => import("pages/AdditionPage.vue") },
      {
        path: "/subtraction",
        component: () => import("pages/SubtractionPage.vue"),
      },
      {
        path: "/multiplication",
        component: () => import("pages/MultiplicationPage.vue"),
      },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
  },
];

export default routes;
