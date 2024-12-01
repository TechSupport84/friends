import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.css';


import "bootstrap/dist/js/bootstrap.bundle.min";
import './index.css'
import App from './App.jsx'
import { Provider } from 'react-redux';
import {store} from "./hooks/store.jsx"

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <Provider store={store}>
    <App />
    </Provider>
  </StrictMode>,

)
