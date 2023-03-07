import './Pricing.css';

const Pricing = ({ image, tital, dollar, text }) => {
    return (
        <div className="Pricing">

            <img src={image} className="Pricing-image" alt="image" />
            <label className='pricing-option-label'>
            <span>{tital}</span>
            </label>
            <h2>{dollar}</h2>
            <p>{text}</p>  

        </div>
    );
};

export default Pricing;