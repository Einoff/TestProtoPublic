const { default: Component } = require("../../../../core/Component");
import './get-lists-item.css';
import { store } from '../../../../index';

class InsertListItems extends Component {
    constructor(id){
        super(id)
        this.listName = id;
        this.insertHTML(getListHtml(this.listName));
    }
}

const getListHtml = (listName) => {
    const lists = store.getState().listsSetings[listName];
    const getTargetId = document.getElementById(listName);
    getTargetId.innerHTML = '';
    const initial = '';
    const htmlLists = lists.reduce((accumHtml, item) => {
        const html = `<option value="${item.id}">${item.name}</option>`;
        return accumHtml + html;
    }, initial)
    
    return htmlLists
}
export default InsertListItems