import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import pen from './pen.png';
import arrow from './arrow.png';
import Pricing from './components/Pricing/Pricing';
import Features from './components/Features/Features';
import Button from './components/Button/Button';

import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
const featureInfos1 = ["1 logo variations", "4 revisions", "color palette", ".ai.pdf.svg.png.delivery", "Est. 3 days of delivery"]
const featureInfos2 = ["2 logo variations", "10 revisions", "color palette", ".ai.pdf.svg.png.delivery", "Est. 7 days of delivery"]
const featureInfos3 = ["5 logo variations", "Unlimitted revisions", "color palette", ".ai.pdf.svg.png.delivery", "Est. 14 days of delivery"]
root.render(
  <>
    <section>
      <div className='pricing-options'><Pricing image={pen} title='STANDARD LOGO DESIGN' dollar='$500' text=' I desing the logo that reflects the identity of your brand in a professional and unique way. ' />
        <div className='feature'>
          {featureInfos1.map((f, i) => <Features key={i} name={f} imgSource={arrow} />)}
        </div>
        <Button button='Click here to get started!' />
      </div>
      <div className='pricing-options highlighted-price'><Pricing image={pen} title='STANDARD LOGO DESIGN' dollar='$500' text=' I desing the logo that reflects the identity of your brand in a professional and unique way. ' />
        <div className='feature'>
          {featureInfos2.map((f, i) => <Features key={i} name={f} imgSource={arrow} />)}

        </div>
        <div className='buy-button'><Button button='Click here to get started!' /></div>
      </div>
      <div className='pricing-options'><Pricing image={pen} title='STANDARD LOGO DESIGN' dollar='$500' text=' I desing the logo that reflects the identity of your brand in a professional and unique way. ' />
        <div className='feature'>
          {featureInfos3.map((f, i) => <Features key={i} name={f} imgSource={arrow} />)}
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
