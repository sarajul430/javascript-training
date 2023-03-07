import './SocialIcon.css';

const SocialIcon = ({ name, imgSource}) => (
   
        <div className="socialIcon">
            <img src={imgSource} alt="" />
        </div>
  )

export default SocialIcon;