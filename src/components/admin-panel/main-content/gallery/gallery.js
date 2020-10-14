const { default: Component } = require("../../../../core/Component");
import galleryHtml from './gallery.templ-html'
import './gallery.css'
import fetchPost from '../../../../service/fetchPost';
import { store } from '../../../../index';
import updateState from '../../../../service/updateState';
import reRenderEl from '../../../../service/reRenderEl';


class Gallery extends Component {
    constructor(id, onum) {
        super(id);
        this.insertHTML(galleryHtml(onum, store));
        addGalleryImg();
        removeSelectImgFromGallery();
    }
}

const addGalleryImg = () => {
    const galleryAddImgBtn = document.getElementById('order-gallery-submit');
    const addGalleryImgForm = document.getElementById('addGalleryImgForm');
    const addFormInput = addGalleryImgForm.querySelector('input');
    const url = store.getState().fetchUrl.addGalleryImg;
    galleryAddImgBtn.addEventListener('click', (e) => {
        e.preventDefault();
        if(addFormInput.files[0]){
            const data = new FormData(addGalleryImgForm);
            fetchPost(url, data);
        }
    })
}


const removeSelectImgFromGallery = () => {
    const galleryImgForm = document.getElementById('galleryWrap');
    const onum = galleryImgForm.dataset.onum;

    galleryImgForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const allImg = document.querySelectorAll('.select-img-js');

        // for table
        const imgNames = Array.from(allImg)
            .reduce((accum, item) => {
                let imgName = !item.checked ? item.dataset.img + ',' : '';
                return accum + imgName
            }, '')
            .replace(/,$/, '');

        const url = store.getState().fetchUrl.removeImgItem;
        const formData = new FormData();
        formData.append('gimg', imgNames);
        formData.append('onum', onum);
        fetchAndUpdate(url, formData);
    })
}

const fetchAndUpdate = async (url, formData) => {
    await fetchPost(url, formData);
    await updateState('gallery');
    const targetInsertEl = document.getElementById('order-gallery-items');
    const onum = targetInsertEl.dataset.onum;
    targetInsertEl.innerHTML = '';
    const newGallery = new Gallery('order-gallery-items', onum);
    // reRenderEl('order-gallery-items', Gallery, onum);
}



export default Gallery