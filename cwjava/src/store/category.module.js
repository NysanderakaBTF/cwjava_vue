import axios from "axios";

let API_BASE = 'http://127.0.0.1:8000/api/category'

export const category = {
    namespaced: true,
    namespace:'category',
    state: {
        categories:[]
    },
    actions: {
       getCategores({commit}){
           return axios.get(API_BASE + '/all').then(
               value =>{
                   let cats = value.data;
                   commit('setCategoriest', cats);
                   return Promise.resolve(cats);
               }
           )
       }
    },
    mutations: {
        setCategoriest(state, cats){
            state.categories = cats;
        }
    },
    getters:{
        getCats(state){
            return state.categories;
        }

    }
};