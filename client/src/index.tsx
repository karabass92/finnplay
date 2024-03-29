import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { store } from './app/appStore'
import App from './app/appEntry'
import './index.scss'


const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
)


root.render(
    <Provider store={store}>
        <App />
    </Provider>
)