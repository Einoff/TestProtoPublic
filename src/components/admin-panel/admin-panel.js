import Component from '../../core/Component'
import './admin-panel.css'

class AdminPanel extends Component {
    constructor(id) {
        super(id)
        this.insertHTML(html)

    }
}

const html = `<div class="admin-panel" id="admin-panel">
    <div class="admin-panel__inner">
            <div class="ap__left-nav" id="sidebar"></div>
            <div class="ap__content">
                <div class="ap__top" id="t-panel"></div>
                <div class="ap__main-content" id="main-content">constent</div>
            </div>
        </div>
    </div>
             `



export default AdminPanel