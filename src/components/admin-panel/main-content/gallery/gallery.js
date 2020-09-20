const { default: Component } = require("../../../../core/Component");
import galleryHtml from './gallery.templ-html'
import './gallery.css'
import fetchPost from '../../../../service/fetchPost';
import { store } from '../../../../index';


class Gallery extends Component{
    constructor(id, onum){
        super(id);
        this.insertHTML(galleryHtml(onum, store));
        addGalleryImg();
    }
}

const addGalleryImg = () => {
    const galleryAddImgBtn = document.getElementById('order-gallery-submit');
    const addGalleryImgForm = document.getElementById('addGalleryImgForm');
    const url = store.getState().fetchUrl.addGalleryImg;
    galleryAddImgBtn.addEventListener('click', (e) => {
        e.preventDefault();

        const data = new FormData(addGalleryImgForm);
        fetchPost(url, data);
    })
}

const insertGalleryImg = () => {
    
}



export default Gallery