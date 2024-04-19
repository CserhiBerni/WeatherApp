import {
    useNavigate
} from "react-router-dom";
import errorImage from '../images/error-image.gif'
import './NoPage.css'

export const NoPage = () => {
    const navigate = useNavigate();

    return (
        <div className="error-page">
            <h1>Nem várt hiba történt!</h1>
            <img src={errorImage} alt="error-image" />
            <button onClick={() => navigate("/")}>Vissza</button>
        </div>
    );
};