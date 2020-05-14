import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
// import createLogger from 'redux-logger'
//引入redux-devtools-extension的可视化工具
import { composeWithDevTools } from 'redux-devtools-extension';//devToolsEnhancer,
import rootReducer from '../reducers';

// const loggerMiddleware = createLogger({collapsed:true});

const createStoreWithMiddleware = composeWithDevTools(
    applyMiddleware(
        thunkMiddleware
    )
)(createStore);


export default function configureStore (initialState) {
    const store = createStoreWithMiddleware(rootReducer, initialState);

    if (module.hot) {
        module.hot.accept('../reducers', () => {
            const nextReducer = require('../reducers');
            store.replaceReducer(nextReducer);
        });
    }

    return store;
}


export const storeAA = createStore(rootReducer);
