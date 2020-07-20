const { default: Component } = require("../../../core/Component");
import './sidebar.css'
import sidebarHtml from './sidebar.templ-html';

class Sidbar extends Component{
    constructor(id){
        super(id)
        this.insertHTML(html)
    }
}

const html = sidebarHtml();


export default Sidbar