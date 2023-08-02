import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from "react-router-dom"
import { EmailContext, EmailProvider } from './context/EmailContext';
import { DataContext, DataProvider } from './radiobuttonexample/contexts/DataContext';
import { CheckBoxContext, CheckboxProvider } from './checkboxexample/contexts/CheckBoxContext';
import { SelectContext, SelectProvider } from './selectInputexample/contexts/SelectContext';
import { BasicContext, BasicProvider } from './basicexample/contexts/BasicContext';

const root = ReactDOM.createRoot(document.getElementById('root'));

export { CheckBoxContext, EmailContext, SelectContext, BasicContext }


root.render(
  <React.StrictMode>
    <BrowserRouter>
    <EmailProvider>
      <DataProvider>
        <CheckboxProvider>
          <SelectProvider>
            <BasicProvider>
    <App />
    </BasicProvider>
    </SelectProvider>
    </CheckboxProvider>
    </DataProvider>
    </EmailProvider>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
