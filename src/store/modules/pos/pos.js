
const getters = {
    displayItems:(state)=>state.items
}


const actions = {}


const mutations = {}


export default {
    namespaced: true,
    auth_token: localStorage.getItem('user-token'),
    items: [],
    state(){
        return {
           items:[
            {
                'id':'1',
                'item_name':'Fanta'
            },
            {
                'id':'2',
                'item_name':'Coke'
            },
            {
                'id':'3',
                'item_name':'Sobo'
            }
           ] 
        }
    },
    getters,
    actions,
    mutations
}

// import axios from "axios";

// const getters = {
//     displayItems:(state)=>state.items
// }


// const actions = {}


// const mutations = {}


// export default {
//     namespaced: true,

//     methods:{
//         get_Items(){
//             axios.get('http://localhost:8000/api/v1/items/', {
//                     headers: {
//                     Authorization: "Token " + `${localStorage.getItem("user-token")}`
//                     }
//                 }).then(response => this.items = response.data)
//         }
//     },

//     state(){
//         return {
//            items:[
//             axios.get('http://localhost:8000/api/v1/items/', {
//                     headers: {
//                     Authorization: "Token " + `${localStorage.getItem("user-token")}`
//                     }
//                 }).then(response => this.items = response.data)
//            ] 
//         }
//     },
//     getters,
//     actions,
//     mutations
// }



