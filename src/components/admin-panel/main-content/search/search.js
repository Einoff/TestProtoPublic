const { default: Component } = require("../../../../core/Component");
import './search.css'
import searchHtml from './search.templ-html';

class Search extends Component{
    constructor(id, target){
        super(id, target);
        this.insertHTML(html, target);
        searchListener();
    }
}

const html = searchHtml();


const searchListener = () => {
    let searchInput = document.querySelector('.search-input');
    let searchTarget = document.querySelectorAll('.search-js');

    searchInput.addEventListener('input', (e) => {
        let inputSearchValue = e.target.value.toLowerCase();

        searchTarget.forEach(el => {
            
            if(el.innerText.toLowerCase().search(inputSearchValue) == -1){
                el.parentNode.classList.add('display-none')
            }
            else{
                el.parentNode.classList.remove('display-none')
            }
            
        })

    })
}



export default Search
