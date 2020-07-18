const { default: Component } = require("../../../../core/Component");
import './list-of-orders.css'

class ListOfOrder extends Component {
    constructor(id) {
        super(id);
        this.insertHTML(html);
    }
}

const html = `
    <div class="list-of-order" id="l-order">OrderList</div>
`

export default ListOfOrder