
import React from 'react';
import ReactDOM from 'react-dom/client';

// style file
import './index.css';

// app component
import App from './App';
// redux store provider
import { Provider } from 'react-redux';
// redux store
import { store } from './Redux/Store/store';

// for toast notification
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* redux store */}
    <Provider store={store}>
      {/* for toast notification */}
      <ToastContainer 
        position="top-right"
        autoClose={400}/>
      {/* render the app */}
      <App />
    </Provider>
  </React.StrictMode>
);
