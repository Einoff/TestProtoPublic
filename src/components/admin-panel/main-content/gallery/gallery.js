const { default: Component } = require("../../../../core/Component");
import galleryHtml from './gallery.templ-html'
import './gallery.css'


class Gallery extends Component{
    constructor(id){
        super(id);
        this.insertHTML(html);
    }
}

const html = galleryHtml();
export default Gallery