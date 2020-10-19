import { store } from '../../index';
import ClPanelHtml from './client-panel-html';
import './client-panel.css';
const { default: Component } = require("../../core/Component");

class ClPanel extends Component {
    constructor(id, onum) {
        super(id);
        this.state = store.getState();
        this.insertHTML(ClPanelHtml(onum, this.state));
        addClassOrientImages();
        closeCPanelPrev();
    }
}

const addClassOrientImages = () => {
    setTimeout(() => {
        const galleryImg = document.querySelectorAll('.client-panel__gallery-item-img');
        galleryImg.forEach(item => {
            if(item.naturalWidth > item.naturalHeight){
                item.parentElement.classList.add('w4');
            }else{
                item.parentElement.classList.add('w2');
            }
        })

    },200)

}

const closeCPanelPrev = () => {
    const closeBtn = document.getElementById('cpCloseBtn');
    closeBtn.addEventListener('click', e => {
        document.querySelector('.client-panel').remove();
    })
}

export default ClPanel