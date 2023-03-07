import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import pen from './pen.png';
import arrow from './arrow.png';
import Pricing from './components/pricings/Pricing';
import Features from './components/feautures/Features';
import Button from './components/buyButton/Button';

import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <section>
      <div className='pricing-options'><Pricing image={pen} tital='STANDARD LOGO DESIGN' dollar='$500' text=' I desing the logo that reflects the identity of your brand in a professional and unique way. ' />
        <div className='feature'>
          {/* {features.map((icon, i) => <Features key={i} name={icon.name} imgSource={icon.src}/>)} */}
          <Features imgSource={arrow} name='1 logo variation' />
          <Features imgSource={arrow} name='4 revisions' />
          <Features imgSource={arrow} name='Color palette' />
          <Features imgSource={arrow} name='.ai.pdf.svg.png.delivery' />
          <Features imgSource={arrow} name='Est. 3 days of delivery' />
        </div>
        <Button button='Click here to get started!' />
      </div>
      <div className='pricing-options highlighted-price'><Pricing image={pen} tital='STANDARD LOGO DESIGN' dollar='$500' text=' I desing the logo that reflects the identity of your brand in a professional and unique way. ' />
        <div className='feature'>
          <Features imgSource={arrow} name='2 logo variation' />
          <Features imgSource={arrow} name='10 revisions' />
          <Features imgSource={arrow} name='Color palette' />
          <Features imgSource={arrow} name='.ai.pdf.svg.png.delivery' />
          <Features imgSource={arrow} name='Est. 7 days of delivery' />
        </div>
        <div className='buy-button'><Button button='Click here to get started!' /></div>
      </div>
      <div className='pricing-options'><Pricing image={pen} tital='STANDARD LOGO DESIGN' dollar='$500' text=' I desing the logo that reflects the identity of your brand in a professional and unique way. ' />
      <div className='feature'>
          <Features imgSource={arrow} name='5 logo variation' />
          <Features imgSource={arrow} name='Unlimitted revisions' />
          <Features imgSource={arrow} name='Color palette' />
          <Features imgSource={arrow} name='.ai.pdf.svg.png.delivery' />
          <Features imgSource={arrow} name='Est. 14 days of delivery' />
        </div>
        <Button button='Click here to get started!' />
      </div>
    </section>


  </>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
