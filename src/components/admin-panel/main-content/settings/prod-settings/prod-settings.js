const { default: Component } = require("../../../../../core/Component");
import './prod-settings.css'
import prodSettingsHtml from './prod-settings.html';
import updateState from '../../../../../service/updateState';
import ProdItems from './prod-items/prod-items';

class ProdSettings extends Component {
    constructor(id){
        super(id);
        this.insertHTML(prodSettingsHtml());
        addProdItem();
    }
}

const updateProdItems = async () => {
    await updateState('prod');
    const prodTarget = document.getElementById('prodItems');
    prodTarget.innerHTML = '';
    const prodItems = new ProdItems('prodItems');

}

const addProdItem = () => {
    const addProdItemForm = document.getElementById('addProdForm');
    const addProductCheck = document.querySelector('.add-check');
    addProdItemForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const url = 'http://localhost:8080/api/backend/addProdItem.php'
        const formData = new FormData(addProdItemForm);
        fetch(url, {
            method: 'POST',
            body: formData
        })
        .then(()=> {
            updateProdItems();
            addProdItemForm.reset();
            addProductCheck.classList.remove('display-none');
            setTimeout(()=> {
                addProductCheck.classList.add('display-none');
              
            }, 1500)
        })

        
    })

    
}


export default ProdSettings