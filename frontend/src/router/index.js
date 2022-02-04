import {createRouter, createWebHashHistory} from 'vue-router';

const routes = [
    {path: '/', component: import('../views/todos.vue')},
    {path: '/new-todo', component: import('../views/new-todo.vue')},
    {path: '/update-todo/:id', component: import('../views/update-todo.vue')},
];

const router = createRouter({
    history: createWebHashHistory(),
    routes
});

export default router;