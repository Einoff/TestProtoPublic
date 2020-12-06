const { default: Component } = require("../../../../core/Component");
import './updateButtom.css';
import reRenderEl from '../../../../service/reRenderEl';
import DefaultListsItems from '../settings/defaultLists/defaultListsItems';
import updateState from '../../../../service/updateState';

class UpdateButtom extends Component {
    constructor(id){
        super(id);
        this.tableName = id;
        this.insertHTML(html(this.tableName));
        updateEvent(this.tableName);
    }
}


const html = (tableName) => {
    return `
    <div class="updateBtn" id="${tableName}Btn">
        
    </div>
`
}

const updateEvent = (tableName) => {
    const nameId = tableName + 'Btn'
    const targetBtn = document.getElementById(nameId);
    targetBtn.addEventListener('click', async (e) => {
        const stateName = tableName;
        targetBtn.style.transform = 'rotate(180deg)';
        await updateState('list');
        reRenderEl(tableName, DefaultListsItems, stateName);
    })
}
export default UpdateButtom