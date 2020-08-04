import Authorization from '../components/authorization/Authorization'
import AdminPanel from '../components/admin-panel/admin-panel'
import Sidebar from '../components/admin-panel/sidebar/sidebar'
import TopPanel from '../components/admin-panel/top-panel/top-panel';
import AddNewUsers from '../components/admin-panel/main-content/add-users/add-users';
import AllUsers from '../components/admin-panel/main-content/all-users/all-users';
import AllUsersItem from '../components/admin-panel/main-content/all-users/all-users-item/all-users-item';
import ListOfOrder from '../components/admin-panel/main-content/list-of-orders/list-of-orders';
import ListOfOrderItem from '../components/admin-panel/main-content/list-of-orders/list-of-orders-item/list-of-orders-item';
import Order from '../components/admin-panel/main-content/orders/orders';
import Gallery from '../components/admin-panel/main-content/gallery/gallery';
import AddOrders from '../components/admin-panel/main-content/add-orders/add-orders';




export const routEvent = () => {
    let routUrlValue = window.location.hash.slice(1);
    const root = document.getElementById('root');
    switch(routUrlValue){
        case 'authorization':
            authorizationCr(root);
            
            break;
        case 'admin':
            adminPanelCr(root);
            addOrders();
            break;
        case 'addusers':
            addUserCr();
            break;
        case 'allusers':
            allUsers();
            break;
        case 'allorders':
            ordersList();
            break;
        case 'addorders':
            addOrders();
            break;
    }
}

// ссылки на DOM элементы
const DOMlinks = {
    mainContent: document.getElementById('main-content')
}  


//страница авторизации
const authorizationCr = (root) => {
    root.innerHTML = '';
    const authorization = new Authorization('root');
}

// базовая страница
const adminPanelCr = (root) => {
    root.innerHTML = '';
    const adminPanel = new AdminPanel('root');
    const sidebar = new Sidebar('sidebar');
    const topPanel = new TopPanel('t-panel')
}

// добавление пользователя
const addUserCr = () => {
    const mainContent = document.getElementById('main-content');
    mainContent.innerHTML = '';
    const addNewUsers = new AddNewUsers('main-content');
}

//все пользователи
const allUsers = () => {
    const mainContent = document.getElementById('main-content');
    mainContent.innerHTML = '';
    // const allUsers = new AllUsers('main-content');
    const allUsersItem = new AllUsersItem('main-content')
}

//order list
const ordersList = () => {
    const mainContent = document.getElementById('main-content');
    mainContent.innerHTML = '';
    const ordersList = new ListOfOrder('main-content');
    const ordersListItem = new ListOfOrderItem('l-order');
    
}

//add orders

const addOrders = () => {
    const mainContent = document.getElementById('main-content');
    mainContent.innerHTML = '';
    const addOrders = new AddOrders('main-content');
}



