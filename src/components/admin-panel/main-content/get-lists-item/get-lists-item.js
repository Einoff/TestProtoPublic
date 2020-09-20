const { default: Component } = require("../../../../core/Component");
import './get-lists-item.css';
import { store } from '../../../../index';

class InsertListItems extends Component {
    constructor(id, selectedValue){
        super(id)
        this.listName = id;
        this.insertHTML(getListHtml(this.listName, selectedValue));
    }
}

const getListHtml = (listName, selectedValue = []) => {  
    const lists = store.getState().listsSetings[listName];
    const getTargetId = document.getElementById(listName);
    getTargetId.innerHTML = '';
    const initial = '';
    const htmlLists = lists.reduce((accumHtml, item) => {
        const isSelected = selectedValue.includes(item.id) ? 'selected' : '';
        const html = `<option ${isSelected} value="${item.id}">${item.name}</option>`;
        return accumHtml + html;
    }, initial)
    
    return htmlLists
}
export default InsertListItems