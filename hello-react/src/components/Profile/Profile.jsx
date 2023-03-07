import './Profile.css';

const Profile = ({ image, name, position, companyName, country }) => {
    return (
        <div className="profile">

            <img src={image} className="profile-image" alt="image" />
            <h1>{name}</h1>
            <p>{position} Work at {companyName} Live in {country}</p>  

        </div>
    );
};

export default Profile;