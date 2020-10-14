import { store } from '../../index';
import ClPanelHtml from './client-panel-html';
import './client-panel.css';
const { default: Component } = require("../../core/Component");

class ClPanel extends Component {
    constructor(id, onum) {
        super(id);
        this.state = store.getState();
        this.insertHTML(ClPanelHtml(onum, this.state));
    }
}


export default ClPanel