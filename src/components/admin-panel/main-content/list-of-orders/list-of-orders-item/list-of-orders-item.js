const { default: Component } = require("../../../../../core/Component");
import './list-of-orders-item.css'
import Order from '../../users-profile/orders/orders';
import Gallery from '../../gallery/gallery';

class ListOfOrderItem extends Component {
    constructor(id) {
        super(id);
        this.insertHTML(html);
        showOrderModals();
    }
}

const html = `
    <div class="orders-item" data-id="1">
    <div class="orders-item__name">orders-item</div>
    </div>
    <div class="orders-item" data-id="2">
    <div class="orders-item__name">orders-item</div>
    </div>
    <div class="orders-item" data-id="3">
    <div class="orders-item__name">orders-item</div>
    </div>
    
`
const showOrderModals = () => {
    const insertTarget = document.querySelectorAll('.orders-item');
    insertTarget.forEach(el => {
        
        el.addEventListener('click', (e) => {
            const orderModal = new Order('l-order');
            const gallery = new Gallery('order-gallery');
        })
    })
}  
    

export default ListOfOrderItem