import horse from '../images/gorogvanafaloban.jpg'
import thunder from '../images/thunder.jpg'
import './Home.css'

export const Home = () => {
    return (
        <div className="home">
            <div className="first-section">
                <h1 className="flagship-slogan">Feel The <div className='wrapper'>Thunder</div> Of The Racing Hooves!</h1>

            </div>
            <div className="second-section">
                <img className='zeus-horse' src={horse} alt="horse" />
            </div>
        </div>
    );
};
