export default {
    path: "/",
    name: "홈",
    hidden: true,
    children: [
        {
            path: "/",
            component: () => import("@/views/Home"),
            name: "home"
        }
    ]
};
