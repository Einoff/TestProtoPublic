import Component from '../../core/Component'
import './admin-panel.css'
import adminPanelHtml from './admin-panel.templ-html'
import { store } from '../../index'

class AdminPanel extends Component {
    constructor(id) {
        super(id);
        this.insertHTML(html);
        getUsersFromServer();
        getOrdersFromServer();
    }
}

const html = adminPanelHtml();

const getUsersFromServer = () => {
    const url = `http://localhost:8080/api/backend/getUsers.php`;
    fetch(url)
        .then(response => response.json())
        .then(data => {
            const state = store.getState();
            state.users = data;
        });
}
const getOrdersFromServer = () => {
    const url = `http://localhost:8080/api/backend/getorders.php`;
    fetch(url)
        .then(response => response.json())
        .then(data => {
            const state = store.getState();
            state.orders = data;
        });
}


export default AdminPanel