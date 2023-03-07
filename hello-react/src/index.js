import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import my from './my.png';
import Profile from './components/Profile/Profile';
import SkillsTag from './components/SkillsTag/SkillsTag';
import SocialIcon from './components/SocialIcon/SocialIcon';
import socialIcons from './SocialIconDef';

import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
const skills = ["Docker", "Java", "HTML", "Javascript", "ReactJS"]

root.render(
  <>
    <Profile image={my} name='S Haque' position='Software Engineer'  companyName=' Google ' country='India'/>
    <div className='skill-heading'>Skill in</div>
    <div className='skil'>{skills.map((s, i) => (<SkillsTag key={i} skills={s}/>))}</div>
    <div className='container'>
      {socialIcons.map((icon, i) => <SocialIcon key={i} name={icon.name} imgSource={icon.src}/>)}
    </div>

  </>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
