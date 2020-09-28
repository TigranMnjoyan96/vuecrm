import Vue from 'vue'
import Router from 'vue-router'

import Home from "@/views/Home"
import Login from "@/views/Login"
import Categories from "@/views/Categories"
import Registration from "@/views/Registration"
import History from "@/views/History"
import DetailRecord from '@/views/DetailRecord'
import Planning from "@/views/Planning"
import Profile from "@/views/Profile"
import Record from "@/views/Record"

Vue.use(Router)


export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home,
            meta: {
                layout: 'main'
            }
        },
        {
            path: '/login',
            name: 'login',
            component: Login,
            meta: {
                layout: 'auth'
            }
        },
        {
            path: '/registration',
            name: 'registration',
            component: Registration,
            meta: {
                layout: 'auth'
            }
        },
        {
            path: '/categories',
            name: 'categories',
            component: Categories,
            meta: {
                layout: 'main'
            }
        },
        {
            path: '/detail-record',
            name: 'detail-record',
            component: DetailRecord,
            meta: {
                layout: 'main'
            }
        },
        {
            path: '/history',
            name: 'history',
            component: History,
            meta: {
                layout: 'main'
            }
        },
        {
            path: '/planning',
            name: 'planning',
            component: Planning,
            meta: {
                layout: 'main'
            }
        },
        {
            path: '/profile',
            name: 'profile',
            component: Profile,
            meta: {
                layout: 'main'
            }
        },
        {
            path: '/record',
            name: 'record',
            component: Record,
            meta: {
                layout: 'main'
            }
        }
    ]
})