const { default: Component } = require("../../../../core/Component");
import './list-of-orders.css'
import { store } from '../../../../index'
import Order from '../orders/orders';

class ListOfOrder extends Component {
    constructor(id, usersId, isProfile) {
        super(id);
        this.usersId = usersId;
        this.orders = store.getState().orders
        this.insertHTML(getOrderItemsHtml(this.orders, this.usersId, isProfile));
        ordersItemEventHandler(isProfile);
    }
}

const getOrderItemsHtml = (orders, usersId, isProfile) => {

    if (orders.length > 0 && !usersId) {
        return reduceOrders(orders, isProfile)

    } else if (orders.length > 0 && usersId) {
        const filtrOrdersById = orders.filter(elem => {
            return elem.id == usersId
        })

        return reduceOrders(filtrOrdersById, isProfile)
    } else {
        return 'заказы не найдены'
    }
}

const reduceOrders = (orders, isProfile) => {
    const initial = '';
    let orderItemHtml = orders.reduce((accumHtml, order) => {
        let html = `
                <div class="order-item ${isProfile || ''}" data-id="${order.onum}">
                    <div class="order-item__photo-wrapp">
                        <img src="../../../../assets/image/templ-img/avatars/${order.oimg}" alt="photo-session"
                            class="order-item__photo">
                    </div>
                    <div class="order-item__content-block">
                        <div class="order-item__text">Покупка: <span>${order.onum}</span></div>
                        <div class="order-item__text">Название сессии: <span>${order.oname}</span></div>
                        <div class="order-item__text">Дата создания: <span>${order.cdate}</span></div>
                        <div class="order-item__text">Статус:<span>Новый</span></div>
                    </div>
                </div>
            `
        return accumHtml + html
    }, initial)

    return `<div class="list-of-order" id="l-order">${orderItemHtml}</div>`
}

const ordersItemEventHandler = (isProfile) => {
    const orderItems = document.querySelectorAll(`.${isProfile || 'order-item'}`);
    orderItems.forEach(item => {
        item.addEventListener('click', () => {
            openOrder(item);
        })
    })

}
const openOrder = (item) => {
    const itemId = item.dataset.id;
    const orderDetails = new Order('main-content', itemId);
}

export default ListOfOrder