import { store } from "../../../../../index";
import removeElData from "../../../../../service/removeElData";
import updateState from "../../../../../service/updateState";
import reRenderEl from "../../../../../service/reRenderEl";
import fetchPost from "../../../../../service/fetchPost";
import UpdateButtom from "../../updateButtom/updateButtom";

const { default: Component } = require("../../../../../core/Component");

class DefaultListsItems extends Component{
    constructor(id, tableName){
        super(id);
        this.clearHtml(id);
        this.table = store.getState().listsSetings[tableName]
        
        this.insertHTML(getItemsHtml(this.table, tableName));
        editItemSubmit(tableName);
        removeItem(tableName);
        editItem(tableName);
        updateBtn(tableName);
        // removeItemLists(tableName);
    }
}

const getItemsHtml = (table, tableName) => {
    const initial = '';
    const html = table.reduce((accumHtml, listItem) => {

    let html = `
    <div class="prod-item" id="${tableName}Item">
        <div class="prod-item__name">${listItem.name}</div>
    
        <div class="prod-item__wrapp">
            <div class="prod-item__btn ${tableName}Edit" data-id="${tableName + listItem.id}">&#9998;</div>
            <div class="prod-item__btn ${tableName}Remove" data-id="${listItem.id}">&#10008;</div>
        </div>
        <div class="prod-item__inputs editSetModal display-none" id="${tableName + listItem.id}">
            <form class="prod-item__inputs-wrapp editFormJs">
                <input type="hidden" class="prod-item__input" name="id" value="${listItem.id}">
                <input type="hidden" class="prod-item__input" name="table" value="${tableName}">
                <input type="text" class="prod-item__input" name="name" placeholder="название">
                <button class="prod-item__edit">Изменить</button>
                <div class="prod-item__edit-close closeModalEdit">&#10008;</div>
            </form>
            <div class="prod-item__edit-bg"></div>
        </div>
    </div>
    `
    return accumHtml + html
    }, initial)
    
    return html
    }

    const editItemSubmit = (tableName) => {
        const forms = document.querySelectorAll('.editFormJs');
        forms.forEach(form => {
            form.addEventListener('submit', async(e) => {
                e.preventDefault();
                const formData = new FormData(form);
                const url = store.getState().fetchUrl.updateList;
                fetchPost(url, formData);
                await updateState('list');
                reRenderEl(tableName, DefaultListsItems, tableName);
                const editSetModal = document.querySelectorAll('.editSetModal');
                editSetModal.forEach(item => {
                    item.classList.add('display-none');
                })
            })
        })
        
    }

    const removeItem = (tableName) => {
        const itemId = tableName + 'Remove';
        const removeBtns = document.querySelectorAll(`.${itemId}`);
        removeBtns.forEach(btn => {
            btn.addEventListener('click', async(e) => {
                const id = e.currentTarget.dataset.id;
                removeElData(id, tableName);
                await updateState('list');
                reRenderEl(tableName, DefaultListsItems, tableName);
            })
        })
    }

    const editItem = (tableName) => {
        const itemId = tableName + 'Edit';
        const editBtns = document.querySelectorAll(`.${itemId}`);
        openEditModal(editBtns);
        closeEditModal();
    }

    const openEditModal = (editBtns) => {
        editBtns.forEach(btn => {
            btn.addEventListener('click', (e) => {
                const editModalId = e.currentTarget.dataset.id;
                const editModal = document.getElementById(editModalId);
                const editSetModal = document.querySelectorAll('.editSetModal');
                editSetModal.forEach(item => {
                    item.classList.add('display-none');
                })
                editModal.classList.remove('display-none');
            })
        })
    }

    const closeEditModal = () => {
        const closeModalBtn = document.querySelectorAll('.closeModalEdit');
        const editSetModal = document.querySelectorAll('.editSetModal');
        closeModalBtn.forEach(item => {
            item.addEventListener('click', (e) => {
                editSetModal.forEach(item => {
                    item.classList.add('display-none');
                })
            })
        })

    }

    //update buttom 
    const updateBtn = (tableName) => {
    const createUpdateBtn = new UpdateButtom(tableName);
    }
    
    export default DefaultListsItems