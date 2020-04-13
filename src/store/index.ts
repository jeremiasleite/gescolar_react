import {
  createStore,
  //applyMiddleware, 
  Store
} from 'redux';
//import createSagaMiddleware from 'redux-saga';
import { RepositoriesState } from './ducks/repositories/types';
import { ThemeState } from './ducks/themes/types';

import rootReducer from './ducks/rootReducer';

//import rootSaga from './ducks/rootSaga';

export interface ApplicationState {
  repositories: RepositoriesState,
  themes: ThemeState
}

//const sagaMiddleware = createSagaMiddleware();

const store: Store<ApplicationState> = createStore(
  rootReducer,
  //applyMiddleware(sagaMiddleware)
);

//sagaMiddleware.run(rootSaga);

export default store;