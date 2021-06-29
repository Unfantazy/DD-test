import axios from "axios";
import {appealPropsType} from "../Components/Appeal/Appeal";

const instance = axios.create({
    baseURL: 'https://fronttestcrud.ddplanet.ru/',
})

export const appealApi = {

    getAppeals() {
        return instance.get('orders/getAllOrders/,/,/')
    },

    createAppeal(body: appealPropsType) {
        return instance.post('/orders/createOrder', body)
    },

    deleteAppeal(orderId: number) {
        return instance.delete(`orders/deleteOrder/${orderId}`)
    }

}
