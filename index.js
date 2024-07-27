import React,{Fragment} from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter } from "react-router-dom";



ReactDOM.render(
  <>
  <BrowserRouter>
  <App></App>
  </BrowserRouter>
  </>,
  document.getElementById("root")
)
