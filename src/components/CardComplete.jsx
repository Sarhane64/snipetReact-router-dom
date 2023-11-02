import { useState } from 'react';
import '../components/CardComplete.css';

const CardComplete = ({ first_name, last_name, gender, email, job_title, city }) => {
    const [isActive, setIsActive] = useState(false);

    const handleContact = () => {
        setIsActive(!isActive);
    };

    return (
        <div className="card-general">
            <div className="general-card">
                <div className="name">
                    <h2>{first_name}</h2>
                    <h2>{last_name}</h2>
                </div>
                <p>{gender}</p>
                <p>{city}</p>
                <p>{job_title}</p>
                <input
                    value={isActive ? email :"Contactez-moi"}
                    type="button"
                    onClick={handleContact} 
                />
            </div>
        </div>
    );
};

export default CardComplete;
