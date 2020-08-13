const { default: Component } = require("../../../../../../core/Component");
import { store } from "../../../../../../index";
import './prod-items.css'
import ProdItemsHtml from "./prod-items.html";
import fetchPost from "../../../../../../service/fetchPost";
import updateState from "../../../../../../service/updateState";
class ProdItems extends Component {
    constructor(id) {
        super(id);
        this.prodItems = store.getState().prodItems;
        this.state = store.getState();
        this.insertHTML(ProdItemsHtml(this.prodItems));
        prodItemHandler(this.state);
        prodUpdateSubmitHandler(this.state);
    }
}

const prodItemHandler = (state) => {
    const prodItemEl = document.querySelectorAll('.prod-item');
    prodItemEl.forEach(item => {
        item.addEventListener('click', (e) => {
            if (e.target.id == 'p-i-edit') {
                const prodItemEdit = document.querySelector(`.prod-item__inputs[data-id="${e.currentTarget.dataset.id}"]`);
                closeAllEditInputs();
                prodItemEdit.classList.remove('display-none');
                
            } else if (e.target.id == 'p-i-close') {
                const id = e.currentTarget.dataset.id;
                const targetTable = 'prod'
                //удалить продукт
                removeEl(id, targetTable, state);
            }
            else if(e.target.id == 'prodEditClose'){
                const prodItemEdit = document.querySelector(`.prod-item__inputs[data-id="${e.currentTarget.dataset.id}"]`);
                prodItemEdit.classList.add('display-none');
            }
        })
    })
}


const removeEl = async (id, targetTable, state) => {
    let data = new FormData();
    data.append('id', id);
    data.append('targetTable', targetTable);
    const url = state.fetchUrl.removeElUrl;
    await fetchPost(url, data);
    await updateState('prod');
    const prodTarget = document.getElementById('prodItems');
    prodTarget.innerHTML = '';
    const prodItems = new ProdItems('prodItems');
}

const prodUpdateSubmitHandler = (state) => {
    const prodFormJs = document.querySelectorAll('.prodFormJs');
    prodFormJs.forEach(form => {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            updateServEl(form, state);
            e.target.parentElement.classList.add('display-none');
        });
    })
}

const updateServEl = async (form, state) => {
    const data = new FormData(form);
    const url = state.fetchUrl.updateElUrl
    await fetchPost(url, data);
    await updateState('prod');
    renderEl();
}

const renderEl = () => {
    const prodItemsEl = document.getElementById('prodItems');
    prodItemsEl.innerHTML = '';
    const prodItems = new ProdItems('prodItems');
}

const closeAllEditInputs = () => {
    const editInputs = document.querySelectorAll('.prod-item__inputs');
    editInputs.forEach(item => {
        item.classList.add('display-none');
    })
}

export default ProdItems