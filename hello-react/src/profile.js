import './App.css';


const Profile = ({ image, name,text, text2, text3, position, companyName, country }) => {
    return (
        <div className="profile">

            <img src={image} className="profile-image" alt="image" />
            <h1>{name}</h1>
            <p>{text} <b>{position}</b> {text2} <b>{companyName}</b> {text3} <b>{country}</b></p>
            <h2>Skill in</h2>
            <div className="skill">
            <div>Java</div>
            <div>Javascript</div>
            <div>HTML</div>
            <div>ReactJS</div>
            <div>Kubernetes</div>

            
        </div>

            

        </div>
    );
};

export default Profile;