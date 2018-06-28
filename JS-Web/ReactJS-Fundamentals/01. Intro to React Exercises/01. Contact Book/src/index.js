import ReactDOM from 'react-dom'
import './index.css'
import createApp from './app/app'
import registerServiceWorker from './registerServiceWorker'

function clickHandler(id) {
    const app = createApp(clickHandler, id);

    ReactDOM.render(app, document.getElementById('app'));
}

clickHandler(0);
registerServiceWorker();