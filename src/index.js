import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App';

const root = ReactDOM.createRoot(document.getElementById('root'));
// const reduxStore = createStore(reducers, applyMiddleware(thunk))


root.render(
    // <Provider store={reduxStore}>
        <App/>
    // </Provider>
);

