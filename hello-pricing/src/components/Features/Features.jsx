import './Features.css';

const Features = ({ name, imgSource}) => (
   
        <div className="features">
            <img src={imgSource} alt="" />
            <p>{name}</p>
        </div>
  )

export default Features;