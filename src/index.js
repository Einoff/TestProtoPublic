import './style.css'
import Authorization from './components/authorization/Authorization'
import { routEvent } from './core/router.js';

const authorization = new Authorization('root');

window.addEventListener('hashchange', routEvent);

window.location.hash = '#admin';



