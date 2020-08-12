const { default: Component } = require("../../../../core/Component");
import './orders.css'
import ordersHtml from './orders.templ.-html';
import { store } from '../../../../index';

class Order extends Component {
    constructor(id, orderId) {
        super(id);
        this.orderId = orderId;
        this.orders = store.getState().orders;
        this.currentOrders = this.orders.find(order => order.id == this.orderId);
        this.insertHTML(getCurrentOrder(this.currentOrders));
        // getCurrentOrder(this.currentOrders);
        closeOrderModal();
    }

}


const getCurrentOrder = (currentOrders) => {
    const html = ordersHtml(currentOrders);
    return html
}

const closeOrderModal = () => {
    const order = document.getElementById('order');
    if(order){
        order.addEventListener('click', (e) => {
            if (e.target.id == 'order-close' || e.target.id == 'order') {
                order.remove();
            }
        })
    }

}

export default Order