import './Feature.css';

const Feature = ({ name, imgSource}) => (
   
        <div className="features">
            <img src={imgSource} alt="" />
            <p>{name}</p>
        </div>
  )

export default Feature;