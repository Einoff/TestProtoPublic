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
        galleryImgClickEvent();
        closeModal();
        gModalNav();
        showMyOrders();
        hideMyOrders();
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

const galleryImgClickEvent = () => {
    const getAllImg = document.querySelectorAll('.imgMododalJs');
    // add event listener for all img
    getAllImg.forEach(item => {
        item.addEventListener('click', e =>{
            addCurrentImgUrlInModal(e);
            openModalGalleryImg();
        })
    })
}

const openModalGalleryImg = () => {
    const getModal = document.querySelector('.cl-p_gallery-modal');
    const getClientPanel = document.querySelector('.client-panel');    
    getModal.classList.remove('display-none');
    getClientPanel.classList.add('o-hidden');
}

const addCurrentImgUrlInModal = (e) => {
    const getClickTarget = e.currentTarget;
    const getModalImg = document.querySelector('.cl-p_gallery-modal-img');
    const getClickTargetImgUrl = getClickTarget.getAttribute('src'); 
    getModalImg.setAttribute('src', getClickTargetImgUrl);

}

const closeModal = () => {
    // const getModalCloseBtn = document.querySelector('.cl-p_gallery-modal-close');
    const getModal = document.querySelector('.cl-p_gallery-modal');
    const getClientPanel = document.querySelector('.client-panel');
    
    getModal.addEventListener('click', e => {
        if(e.target.id === 'clGalleryModalWrap' || e.target.id === 'clGalleryClose'){
            getModal.classList.add('display-none');
            getClientPanel.classList.remove('o-hidden');
        }

    })
}

const gModalNav = () => {
    const getModalNav = document.querySelector('.cl-p_gallery-modal-nav');
    const getAllImg = document.querySelectorAll('.imgMododalJs');
    
    getModalNav.addEventListener('click', e => {
        const getCurrentModalImgUrl = document.querySelector('.cl-p_gallery-modal-img').getAttribute('src');
        const getCurrentModalImgEl = document.querySelector('.cl-p_gallery-modal-img');
        if(e.target.id === 'g-modal-prev'){
            openPrevImg(getCurrentModalImgUrl, getCurrentModalImgEl);
        }else if(e.target.id === 'g-modal-next'){
            openNextImg(getCurrentModalImgUrl, getCurrentModalImgEl);
        }
    })

    const openPrevImg = (getCurrentModalImgUrl, getCurrentModalImgEl) => {

        // get curent url img
        let getImgIndex;
        getAllImg.forEach((item, index) => {
            if(item.getAttribute('src') === getCurrentModalImgUrl){
                getImgIndex = index;
            }
        })
        // get new url img
        const getPrevImgUrl = getImgIndex === 0 ? getAllImg[getAllImg.length - 1].getAttribute('src') : getAllImg[getImgIndex - 1].getAttribute('src');
        // set new img url
        getCurrentModalImgEl.setAttribute('src', getPrevImgUrl);
    }

    const openNextImg = (getCurrentModalImgUrl, getCurrentModalImgEl) => {

             // get curent url img
             let getImgIndex;
             getAllImg.forEach((item, index) => {
                 if(item.getAttribute('src') === getCurrentModalImgUrl){
                     getImgIndex = index;
                 }
             })
             
             // get new url img
             const getPrevImgUrl = getImgIndex === getAllImg.length - 1 ? getAllImg[0].getAttribute('src') : getAllImg[getImgIndex + 1].getAttribute('src');
             // set new img url
             getCurrentModalImgEl.setAttribute('src', getPrevImgUrl);
    }
}

const showMyOrders = () => {
    const myOrdersBtn = document.getElementById('myOrders');
    const ordersMenu = document.querySelector('.client-panel__myorders');
    const ordersMenuWrap = document.querySelector('.client-panel__myorders-wrapp');

    myOrdersBtn.addEventListener('click', e => {
        ordersMenuWrap.classList.toggle('display-none');
        setTimeout(()=> {
            ordersMenu.classList.toggle('myorders-active');
        }, 100)
        
    })
}

const hideMyOrders = () => {
    const ordersMenuWrap = document.getElementById('myordersWrap');
    const ordersMenu = document.querySelector('.client-panel__myorders');
    ordersMenuWrap.addEventListener('click', e => {
        if(e.target.id === 'myordersWrap'){
            ordersMenu.classList.toggle('myorders-active');
            setTimeout(() => {
                ordersMenuWrap.classList.toggle('display-none');
            }, 320)
        }
        
        
    })
    
}

const switchMyOrders = () => {
    
}
export default ClPanel