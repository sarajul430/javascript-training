import './Button.css';

const Button = ({button}) => {
    return (
        <div className="button">

            <button> {button}<span>&#8599;</span></button>
            
        </div>
    );
};

export default Button;