import { store } from "../../../../../index";
import reRenderEl from "../../../../../service/reRenderEl";
import DefaultListsItems from "./defaultListsItems";
import updateState from "../../../../../service/updateState";
import removeElData from "../../../../../service/removeElData";
import addFormHandler from "../../../../../service/addFormHandler";
import UpdateButtom from "../../updateButtom/updateButtom";


// import addDataToServer from "../../../../../service/addDataToServer";


const { default: Component } = require("../../../../../core/Component");

class DefaultLists extends Component {
    constructor(id, title, tableName) {
        super(id);
        this.formName = tableName + 'form';
        this.fetchUrl = store.getState().fetchUrl.addListItem
        this.insertHTML(html(title, tableName, this.formName));
        reRenderEl(tableName, DefaultListsItems, tableName);
        addFormHandler(this.formName, this.fetchUrl, functionList(tableName));
        // updateBtn(tableName);
        // removeItemLists(tableName);
        // editItemLists();
    }
}

// get main html
const html = (title, tableName, formName) => {
    return `
    <div class="settings-item setItemJs">
        <div class="settings-title">
            ${title}:
        </div>
        <div class="settings-item__wrapp">
            <div class="settings-product list-set-js" id="${tableName}">
            </div>
            <div class="settings-product">
                <form class="product__add" id="${formName}">
                    Добавить новый:
                    <input type="text" class="settings-add-input" name="name">
                    <input type="hidden" class="settings-add-input" name="table" value="${tableName}">

                    <div class="add__wrap">
                        <button class="add-product-btn addListsFormBtn">Добавить</button>
                        <div class="add-check display-none">
                            &#10003;
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
`
}


//добовление нового item list
const functionList = (tableName) => {
    return async() => {
        await updateState('list');
        await reRenderEl(tableName, DefaultListsItems, tableName);
        
    }
}




export default DefaultLists