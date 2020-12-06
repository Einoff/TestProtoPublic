const { default: Component } = require("../../../../core/Component");
import './orders.css'
import ordersHtml from './orders.templ-html';
import { store } from '../../../../index';
import UsersProfile from '../users-profile/users-profile';
import OrdersEditForm from './orders-edit-form';
import InsertListItems from '../get-lists-item/get-lists-item';
import fetchPost from '../../../../service/fetchPost';
import updateState from '../../../../service/updateState';
import reRenderEl from '../../../../service/reRenderEl';
import Gallery from '../gallery/gallery';
import removeElData from '../../../../service/removeElData';
import ListOfOrder from '../list-of-orders/list-of-orders';
import ClPanel from '../../../client-panel/client-panel';


class Order extends Component {
    constructor(id, orderId) {
        super(id);
        this.orderId = orderId;
        this.orders = store.getState().orders;
        this.users = store.getState().users;
        this.currentOrders = this.orders.find(order => order.onum == this.orderId);
        this.currentUser = this.users.find(user => user.id === this.currentOrders.id);
        this.insertHTML(getCurrentOrder(this.currentOrders, this.currentUser));
        createOrdersEditForm(this.currentOrders);
        orderEditFormBtn();
        closeOrderModal();
        openUsers();
        createGallery(this.currentOrders);
        removeOrder(this.currentOrders);
        clientPanelPreview(this.currentOrders.onum);
        // orderEditCancelHandler(this.currentOrders);
    }
}

const log = (info) => {
    console.log(info);
}

const getCurrentOrder = (currentOrders, user) => {
    const html = ordersHtml(currentOrders, user);
    return html
}

const closeOrderModal = () => {
    const order = document.getElementById('order');
    if (order) {
        order.addEventListener('click', (e) => {
            if (e.target.id == 'order-close' || e.target.id == 'order') {
                order.remove();
            }
        })
    }

}

const autoCloseOrderModal = () => {
    const order = document.getElementById('order');
    if (order) {
        order.remove();
    }
}

const openUsers = () => {
    const userRef = document.querySelector('.order__top-user');
    const isProfileModal = document.getElementById('profile-modal');

    userRef.addEventListener('click', (e) => {
        const userId = e.currentTarget.dataset.uid;
        if (isProfileModal) {
            autoCloseOrderModal();
            console.log('true');
        } else {
            autoCloseOrderModal();
            const newUserProfile = new UsersProfile('main-content', userId);
            console.log('false');
        }
    })
}

const createOrdersEditForm = (currentOrders) => {
    const orderInfoDetails = document.getElementById('orderInfoDetails');
    orderInfoDetails.innerHTML = '';
    const updateCurrentOrders = store.getState().orders.find(order => order.onum == currentOrders.onum);
    const newOrdersEditForm = new OrdersEditForm('orderInfoDetails', updateCurrentOrders);
    addSelectionLists(updateCurrentOrders);
    orderEditSubmit(updateCurrentOrders);
    orderEditCancelHandler(currentOrders);
}

const orderEditFormBtn = () => {
    const getEditFormBtn = document.getElementById('orderEditBtn');

    getEditFormBtn.addEventListener('click', (e) => {
        const getOrderEditInputs = document.querySelectorAll('.orderEditInput');
        const orderEditImg = document.getElementById('orderEditImg');
        const orderEditSubmit = document.getElementById('orderEditSubmit');
        const orderEditCancel = document.getElementById('orderEditCancel');
        const orderItemProd = document.querySelector('.order__itemProd');
        const orderItemProdEdit = document.querySelector('.order__prod-edit');
        const orderArchivInput = document.getElementById('orderArchivInput');

        getEditFormBtn.classList.add('edit');
        getOrderEditInputs.forEach(input => {
            input.disabled = false;
            input.classList.add('orderEditInputActiv');

        })
        orderEditImg.classList.remove('display-none');
        orderEditSubmit.classList.remove('display-none');
        orderEditCancel.classList.remove('display-none');
        orderItemProd.classList.add('display-none');
        orderItemProdEdit.classList.remove('display-none');
        // orderArchivInput.classList.remove('display-none');
    })
}

const addSelectionLists = (currentOrders) => {
    let { ostatus, osource, tsession } = currentOrders;
    const tsessionList = new InsertListItems('typesessionlist', tsession);
    const osourceList = new InsertListItems('sourceorderlist', osource);
    const ostatuslist = new InsertListItems('ostatuslist', ostatus);
}

const orderEditSubmit = (updateCurrentOrders) => {
    const orderEditFormId = document.getElementById('orderEditFormId');
    const url = store.getState().fetchUrl.updateOrderEdit;
    orderEditFormId.addEventListener('submit', async (e) => {
        e.preventDefault();
        const data = new FormData(orderEditFormId);
        await fetchPost(url, data);
        await updateState('orders');
        createOrdersEditForm(updateCurrentOrders);
    })
}

const orderEditCancelHandler = (currentOrders) => {
    const orderEditCancel = document.getElementById('orderEditCancel');
    orderEditCancel.addEventListener('click', e => {
        createOrdersEditForm(currentOrders);
    })
}

const createGallery = (currentOrders) => {
    const onum = currentOrders.onum;
    const newGallery = new Gallery('order-gallery-items', onum);
}

const removeOrder = (currentOrders) => {
    const removeOrderBtn = document.getElementById('orderRemoveBtn');
    removeOrderBtn.addEventListener('click', e => {
        removeOrderAlert(currentOrders);
    })
}

const removeOrderAlert = (currentOrders) => {
    const targetEl = document.getElementById('admin-panel');
    const removeOrderAlertHtml  = `
        <div class="alert-modal">
            <div class="alert-modal-inner">
                <div class="alert-modal-text">Удалить заказ безвозвратно?</div>
                <div class="alert-modal-btn-wrap">
                    <div class="alert-modal-btn" id="alert-modal-btn-true">Да</div>
                    <div class="alert-modal-btn" id="alert-modal-btn-false">Нет</div>
                </div>
            </div>
        </div>
    `
    targetEl.insertAdjacentHTML('afterbegin', removeOrderAlertHtml);
    
    removeOrderAlertEventBtn(currentOrders);
    
}

const removeOrderAlertEventBtn = (currentOrders) => {
    const alertModal = document.querySelector('.alert-modal');
    const onum = currentOrders.onum;
    alertModal.addEventListener('click', async(e) => {
        if(e.target.id === 'alert-modal-btn-true'){
            const order = document.getElementById('order');
            await removeElData(onum, 'cab_orders', 'onum', true);
            await removeElData(onum, 'gallery');
            await updateState('orders');
            alertModal.remove();
            order.remove();
            reRenderEl('main-content', ListOfOrder);

        }else if(e.target.id === 'alert-modal-btn-false'){
            alertModal.remove();
        }
    })
}

const clientPanelPreview = (onum) => {
    const orderPrevBtn = document.getElementById('orderPrevBtn');
    orderPrevBtn.addEventListener('click', (e) => {
        const newCPanel = new ClPanel('root', onum);
    })
}
export default Order