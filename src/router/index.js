import { createWebHistory, createRouter } from "vue-router";
import ContactBook from "@/views/contactbook.vue";
const routes = [
{
path: "/",
name: "contactbook",
component: ContactBook,
},
{
path: "/:pathMatch(.*)*",
name: "notfound",
component: () => import("@/views/NotFound.vue"),
},
{
path: "/contacts/create",
name: "contact.create",
component: () => import("@/views/ContactCreate.vue"),
},
{
path: "/contacts/:id",
name: "contact.edit",
component: () => import("@/views/ContactEdit.vue"),
props: true // Truyền các biến trong $route.params vào làm props
},
];
const router = createRouter({
history: createWebHistory(import.meta.env.BASE_URL),
routes,
});
export default router;