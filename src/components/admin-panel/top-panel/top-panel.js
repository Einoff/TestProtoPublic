const { default: Component } = require("../../../core/Component");
import './top-panel.css'
import { store } from '../../../index';
import topPanelHtml from './top-panel.templ-html';

class TopPanel extends Component{
    constructor(id){
        super(id)
        this.state = store.getState()
        this.insertHTML(topPanelHtml(this.state));
        // topPanelHtml(this.state);
    }

}


export default TopPanel