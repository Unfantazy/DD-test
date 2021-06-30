import axios from "axios";
import {appealPropsType} from "../Components/Appeal/Appeal";

const instance = axios.create({
    baseURL: 'https://fronttestcrud.ddplanet.ru/',
    withCredentials: true
})

export const appealApi = {

    getAppeals() {
        return instance.get<{ orders: responseType[], total: number }>('orders/getAllOrders/,/,/')
    },

    createAppeal(body: appealPropsType) {
        return instance.post<responseType>('orders/createOrder', body)
    },

    deleteAppeal(orderId: number) {
        return instance.delete(`orders/deleteOrder/${orderId}`)
    }

}

type responseType = {
    _id: string,
    firstName: string,
    lastName: string,
    middleName: string,
    withoutMiddleName: boolean,
    userPhone: string,
    text: string,
    date: string,
    orderId: number,
    __v: number
}
