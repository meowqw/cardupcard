import { createRouter, createWebHistory } from "vue-router";


import cardHome from "../components/card-home"
import cardCompany from "../components/card-company"
import cardPortfolio from "../components/card-portfolio"
import cardIndex from "../components/card-index"


let routes = [
    {
        path: '/',
        name: "index",
        component: cardIndex
    },
    {
        path: '/:catchAll(.*)',
        component: cardIndex
    },
    // home
    {
        path: "/:cardLink",
        name: "home",
        component: cardHome
    },

    // company
    {
        path: "/:cardLink/company",
        name: "company",
        component: cardCompany
    },
    // portfolio
    {
        path: "/:cardLink/portfolio",
        name: "portfolio",
        component: cardPortfolio
    },
];


const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;