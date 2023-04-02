import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import "slick-carousel/slick/slick.css"; 
import { PersistGate } from 'redux-persist/integration/react';
import { store,persistor } from './redux/store'
import { Provider } from 'react-redux'
import firebaseConfig from './firebase.config';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
   <PersistGate Loading={"loading"} persistor={persistor}>
   <App />
   </PersistGate>
  </Provider>
);


