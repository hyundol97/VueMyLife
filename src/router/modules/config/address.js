export default {
  path: "/config/address",
  name: "address",
  component: () => import("@/views/config/Form"),
  meta: {
    title: "정보",
    doc_title: "설정 - 정보",
  },
};
