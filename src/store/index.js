import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);
export default new Vuex.Store({
    state:{
        items: [
            {
                id: 0,
                date: '01.02.2009',
                name: "ИП Бирюков Михаил Алексеевич",
                bankName: "monobank",
                payment: "Сайт Volkswagen",
                typeWork: "Продвижение",
                typePayment: "Оплата за продвижение Google Adwords июнь-июль",
                status: true,
                rise: true,
                amount: '+21 239'
            },
            {
                id: 1,
                date: '01.04.2009',
                name: "Роман Мельников",
                bankName: "monobank",
                payment: "ИП Eltron",
                typeWork: "Зарплата сотрудникам",
                typePayment: "Аванс Июль",
                status: true,
                rise: false,
                amount: '-56 000'
            },
            {
                id: 2,
                date: '01.05.2009',
                name: "ООО «Кранкомплект»",
                bankName: "monobank",
                payment: "Сайт Кранкомплект",
                typeWork: "Разработка",
                typePayment: "Аванс за разработку",
                status: true,
                rise: true,
                amount: '+170 000'
            },
        ]
    },
    getters: {
        getItems(state) {
            return state.items;
        }
    },
    mutations: {
        setRemoveItems(state, payload) {
            let index = state.items.findIndex( el => el.id == +payload );
            state.items = state.items.filter((el, key) => !(key == index))
        }
    },
    actions: {
        removeItem(context, payload){
            context.commit('setRemoveItems', payload);
        },
        // addItems(context, payload){
        //     context.commit('setItems', payload);
        // }
    }
})