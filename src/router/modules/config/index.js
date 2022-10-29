import addressRoutes from "./address";
import summaryRoutes from "./summary";

export default {
  path: "/config",
  name: "config",
  redirect: { name: "config-summary" },
  meta: {
    title: "설정",
  },
  children: [addressRoutes, summaryRoutes],
};
