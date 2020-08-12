const { default: Component } = require("../../../../../../core/Component");
import { store } from "../../../../../../index";
import './prod-items.css'
import ProdItemsHtml from "./prod-items.html";
class ProdItems extends Component {
    constructor(id) {
        super(id);
        this.prodItems = store.getState().prodItems;
        this.insertHTML(ProdItemsHtml(this.prodItems));
    }
}

export default ProdItems