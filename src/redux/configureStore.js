import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from './reducers';
import reduxInmutableStateInvariant from 'redux-immutable-state-invariant';

const configureStore = initialState => {
  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSIONS_COMPOSE__ || compose;

  return createStore(
    rootReducer,
    initialState,
    composeEnhancers(applyMiddleware(reduxInmutableStateInvariant())),
  );
};

export default configureStore;
