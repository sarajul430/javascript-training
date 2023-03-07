import './Pricing.css';

const Pricing = ({ image, title, dollar, text }) => {
    return (
        <div className="Pricing">

            <img src={image} className="Pricing-image" alt="image" />
            <label className='pricing-option-label'>
            <span>{title}</span>
            </label>
            <h2>{dollar}</h2>
            <p>{text}</p> 

        </div>
    );
};

export default Pricing;