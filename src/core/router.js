import Authorization from '../components/authorization/Authorization'
import AdminPanel from '../components/admin-panel/admin-panel'
import Sidebar from '../components/admin-panel/sidebar/sidebar'
import TopPanel from '../components/admin-panel/top-panel/top-panel';
import AddNewUsers from '../components/admin-panel/main-content/add-users/add-users';
import AllUsersItem from '../components/admin-panel/main-content/add-users/all-users-item/all-users-item';
import ListOfOrder from '../components/admin-panel/main-content/list-of-orders/list-of-orders';
import AddOrders from '../components/admin-panel/main-content/add-orders/add-orders';
import getAuthUserData from '../service/getAuthUserData';
import getUsersFromServer from '../service/getUsers';
import getOrdersFromServer from '../service/getOrders';
import setCurrentTitle from './setCurrentTitle';
import Settings from '../components/admin-panel/main-content/settings/settings'
import getProdItems from '../service/getProdItmes';
import ProdItems from '../components/admin-panel/main-content/settings/prod-settings/prod-items/prod-items'
import ProdSettings from '../components/admin-panel/main-content/settings/prod-settings/prod-settings';



export const routEvent = () => {
    let routUrlValue = window.location.hash.slice(1);
    const root = document.getElementById('root');
    switch (routUrlValue) {
        case 'authorization':
            authorizationCr();
            break;
        case 'admin':
            adminPanelCr();
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
        case 'setting':
            settings();
            break;
        
    }
}

// ссылки на DOM элементы
const DOMlinks = {
    mainContent: document.getElementById('main-content')
}


//страница авторизации
const authorizationCr = () => {
    const root = document.getElementById('root');
    root.innerHTML = '';
    const authorization = new Authorization('root');
}

// базовая страница
const adminPanelCr = async () => {
    const root = document.getElementById('root');
    root.innerHTML = '';
    await getAuthUserData();
    await getUsersFromServer();
    await getOrdersFromServer();
    await getProdItems();
    const adminPanel = await new AdminPanel('root');
    const sidebar = new Sidebar('sidebar');
    const topPanel = new TopPanel('t-panel');
    setCurrentTitle('>> Dashboard');

}

// добавление пользователя
const addUserCr = () => {
    const mainContent = document.getElementById('main-content');
    mainContent.innerHTML = '';
    const addNewUsers = new AddNewUsers('main-content');
    setCurrentTitle('>> Добавить нового пользователя');
}

//все пользователи
const allUsers = () => {
    const mainContent = document.getElementById('main-content');
    mainContent.innerHTML = '';
    // const allUsers = new AllUsers('main-content');
    const allUsersItem = new AllUsersItem('main-content');
    setCurrentTitle('>> Список пользователей');
}

//order list
const ordersList = () => {
    const mainContent = document.getElementById('main-content');
    mainContent.innerHTML = '';
    const ordersList = new ListOfOrder('main-content');
    setCurrentTitle('>> Список заказов');
}

//add orders

const addOrders = () => {
    const mainContent = document.getElementById('main-content');
    mainContent.innerHTML = '';
    const addOrders = new AddOrders('main-content');
    setCurrentTitle('>> Добавить новый заказ');
}

//settings

const settings = () => {
    const mainContent = document.getElementById('main-content');
    mainContent.innerHTML = '';
    const settings = new Settings('main-content');
    const prodSettings = new ProdSettings('settings');
    const prodItems = new ProdItems('prodItems');
    setCurrentTitle('>> Настройки');
}



