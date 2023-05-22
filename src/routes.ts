// src/routes.ts

// pages
import Home from "./pages/home";
import Quiz from "./pages/quiz";
import Products from "./pages/products";

// other
import {FC} from "react";

// interface
interface Route {
    key: string,
    title: string,
    path: string,
    enabled: boolean,
    component: FC<{}>
}

export const routes: Array<Route> = [
    {
        key: 'home-route',
        title: 'Home',
        path: '/',
        enabled: true,
        component: Home
    },
    {
        key: 'quiz-route',
        title: 'About',
        path: '/quiz',
        enabled: true,
        component: Quiz
    },
    {
        key: 'products-route',
        title: 'Products',
        path: '/products',
        enabled: true,
        component: Products
    }
]