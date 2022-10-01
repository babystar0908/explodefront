import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { MuiThemeProvider, ToastifyProvider } from "./providers";
import "react-toastify/dist/ReactToastify.css"
import "./assets/css/home.scss";
import "./assets/css/toast.scss";
import "aos/dist/aos.css"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <MuiThemeProvider>
        <ToastifyProvider>
          <App />
        </ToastifyProvider>
      </MuiThemeProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
