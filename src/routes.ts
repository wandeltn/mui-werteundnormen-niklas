// src/routes.ts

// pages
import Home from "./pages/home";
import Quiz from "./pages/quiz";
import Orte from "./pages/orte";
import Diaspora from "./pages/diaspora"
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
    component: FC<{}>,
    hidden: boolean
}

export const breadcrumbNameMap: { [key: string]: string } = {
    "/orte": "Orte",
    "/orte/diaspora": "Diaspora",
    "/essensvorschriften": "Essensvorschriften",
    '/gottesvorstellungen': 'Gottesvorstellungen',
    '/quiz': 'Quiz',
    "/quellenverzeichnis": "Quellenverzeichnis"
};

export const routes: Array<Array<Route>> = [
    [
        {
            key: 'home-route',
            title: 'Home',
            path: '/',
            enabled: true,
            component: Home,
            hidden: false
        },
    ],
    [
        {
            key: "orte-route",
            title: "Orte",
            path: "/orte",
            enabled: true,
            component: Orte,
            hidden: false
        },
        {
            key: "orte-diaspora-route",
            title: "Diaspora",
            path: "/orte/diaspora",
            enabled: true,
            component: Diaspora,
            hidden: true
        }
    ],
    [
        {
            key: 'gottesvorstellungen-route',
            title: 'G´tt',
            path: '/gottesvorstellungen',
            enabled: true,
            component: Products,
            hidden: false
        },
    ],
    [
        {   
            key: 'quiz-route',
            title: 'Quiz',
            path: '/quiz',
            enabled: true,
            component: Quiz,
            hidden: true
        },
    ],
    [
        {
            key: 'quellenverzeichnis-route',
            title: "Quellen",
            path: "/quellenverzeichnis",
            enabled: true,
            component: Quellenverzeichnis,
            hidden: true
        },
    ]
]