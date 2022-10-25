export default {
  path: "/",
  hidden: true,
  children: [
    {
      path: "/",
      component: () => import("@/views/Home"),
      name: "home",
      path: "/",
      children: [
        {
          path: "/home",
          component: () => import("@/views/Home"),
          name: "home",
          meta: {
            title: "홈",
          },
        },
      ],
    },
  ],
};
