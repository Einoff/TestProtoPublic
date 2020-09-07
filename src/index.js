import './style.css'
import Authorization from './components/authorization/Authorization'
import { routEvent } from './core/router.js';
import Store from './store/store';

export const store = new Store();
const authorization = new Authorization('root');
window.store = store;
export const routerInit = () => {
    window.addEventListener('hashchange', routEvent);
}






