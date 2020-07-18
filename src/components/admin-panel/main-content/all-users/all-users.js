const { default: Component } = require("../../../../core/Component");
import './all-users.css'

class AllUsers extends Component {
    constructor(id){
        super(id);
        this.insertHTML(html);
    }
}

const html = `
    <div class="all-users" id="all-users">
        Все пользователи
    </div>
`



export default AllUsers