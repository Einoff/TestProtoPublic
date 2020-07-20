const { default: Component } = require("../../../../core/Component");
const { default: addOrdersHtml } = require("./add-orders.templ-html");
import './add-orders.css'

class AddOrders extends Component{
    constructor(id){
        super(id);
        this.insertHTML(html);
    }
}

let html = addOrdersHtml();

export default AddOrders
