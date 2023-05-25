// src/routes.ts

// pages
import Home from "./pages/home";
import Quiz from "./pages/quiz";
import Products from "./pages/gottesvorstellungen";
import Quellenverzeichnis from "./pages/quellenverzeichnis";

// other
import {FC} from "react";

// interface
export interface Route {
    key: string,
    title: string,
    path: string,
    enabled: boolean,
    component: FC<{}>
}

export const breadcrumbNameMap: { [key: string]: string } = {
    '/gottesvorstellungen': 'Gottesvorstellungen',
    '/quiz': 'Quiz',
    "/essensvorschriften": "Essensvorschriften",
    "/quellenverzeichnis": "Quellenverzeichnis"
};

export const routes: Array<Array<Route>> = [
    [
        {
            key: 'home-route',
            title: 'Home',
            path: '/',
            enabled: true,
            component: Home
        },
    ],
    [
        {
            key: 'gottesvorstellungen-route',
            title: 'G´tt',
            path: '/gottesvorstellungen',
            enabled: true,
            component: Products
        },
    ],
    [
        {   
        key: 'quiz-route',
        title: 'Quiz',
        path: '/quiz',
            enabled: true,
            component: Quiz
        },
    ],
    [
        {
            key: 'quellenverzeichnis-route',
            title: "Quellen",
            path: "/quellenverzeichnis",
            enabled: true,
            component: Quellenverzeichnis
        },
    ]
]