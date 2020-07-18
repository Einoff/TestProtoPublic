const { default: Component } = require("../../../core/Component");
import './top-panel.css'

class TopPanel extends Component{
    constructor(id){
        super(id)
        this.insertHTML(html);
    }

       
}

const html =`
    <div class="top-panel">
        <div class="top-panel__profile">
            <div class="top-panel__profile-name" id="pf-name">Pasha</div>
            <div class="top-panel__profile-status" id="pf-status">Admin</div>
            <ul class="top-panel__profile-nav">
                <li><a href="#" class="top-panel__profile-nav-link">Element 1</a></li>
                <li><a href="#" class="top-panel__profile-nav-link">Element 2</a></li>
                <li><a href="#" class="top-panel__profile-nav-link">Element 3</a></li>
                <li><a href="#" class="top-panel__profile-nav-link">Element 4</a></li>
            </ul>
        </div>
    </div>
`
   


export default TopPanel