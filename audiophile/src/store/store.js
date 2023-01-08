import { compose, applyMiddleware } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
// import { logger } from 'redux-logger';

import { rootReducer } from './root-reducer';

const loggerMiddleware = (store) => (next) => (action) => {
    if (!action.type) {
        return next(action);
    }

    console.log(`Type: ${action.type}`);
    console.log(`Payload: ${action.payload}`);
    console.log(`Current state ${store.getState()}`);

    next(action);
    console.log(`Next state ${store.getState()}`);
}


// const middleWares = [logger];
const middleWares = [loggerMiddleware];
const composedEnhancers = compose(applyMiddleware(...middleWares));

// createStore is already deprecated
// export const store = createStore(rootReducer, undefined, composedEnhancers);

export const store = configureStore({
    reducer: rootReducer,
    middleware: middleWares,
    enhancers: [composedEnhancers],
});

