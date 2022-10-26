export default {
  path: "summary",
  name: "config-summary",
  redirect: { name: "config-summary-list" },
  meta: {
    title: "요약",
  },
  children: [
    {
      path: "/config/summary",
      name: "config-summary-list",
      component: () => import("@/views/config/Form"),
      meta: {
        title: "목록",
        doc_title: "설정 - 요약",
      },
    },
  ],
};
