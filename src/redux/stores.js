
import { createStore } from 'redux';
import rootReducer from './reducer';

const stores = createStore(rootReducer);

export default stores;
