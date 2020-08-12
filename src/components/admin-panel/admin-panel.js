import Component from '../../core/Component'
import './admin-panel.css'
import adminPanelHtml from './admin-panel.templ-html'
// import getUsersFromServer from '../../service/getUsers';
// import getOrdersFromServer from '../../service/getOrders';
// import getAuthUserData from '../../service/getAuthUserData';

class AdminPanel extends Component {
    constructor(id) {
        super(id);
        this.insertHTML(html);
        // getAuthUserData();
        // getUsersFromServer();
        // getOrdersFromServer();
        log();
    }
    
}

const html = adminPanelHtml();
const log = () => {console.log('adminpanel');}

export default AdminPanel