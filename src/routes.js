import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import Operations from "./peges/Operations.vue"
import Reports from "./peges/Reports.vue"
import Counterparties from "./peges/Counterparties.vue"
import Projects from "./peges/Projects.vue"
import Expenditure from "./peges/Expenditure.vue"
import Employees from "./peges/Employees.vue"

export default new VueRouter({
    routes: [
        {
            path: '/',
            component: Operations
        },
        {
            path: '/reports',
            component: Reports
        },
        {
            path: '/counterparties',
            component: Counterparties
        },
        {
            path: '/projects',
            component: Projects
        },
        {
            path: '/expenditure',
            component: Expenditure
        },
        {
            path: '/employees',
            component: Employees
        },
    ],
    mode: 'history'
})