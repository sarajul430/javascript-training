import React from 'react';
import ReactDOM from 'react-dom/client';
import './Price.css';
import my from './my.png';
import Pricing from './pricings/Pricing/Pricing';


// import reportWebVitals from './reportWebVitals';


root.render(
  <>
    <Pricing image={my} tital='STANDARD LOGO DESIGN' dollar='$500'  text=' I desing the logo that reflects the identity of your brand in a professional and unique way. ' />
   
  </>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
