const { default: Component } = require("../../../../core/Component");
import './orders.css'
import ordersHtml from './orders.templ.-html';

class Order extends Component {
    constructor(id) {
        super(id);
        this.insertHTML(html);
        closeOrderModal();
    }
}

const closeOrderModal = () => {
    const order = document.getElementById('order');
    order.addEventListener('click', (e) => {
        if (e.target.id == 'order-close' || e.target.id == 'order') {
            order.remove();
        }
    })
}

const html = ordersHtml();

export default Order