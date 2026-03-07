// components/PortfolioCard.js
import Header from "./Header";
import Avatar from "./Avatar";
import PersonalInfo from "./PersonalInfo";
import Bio from "./Bio";

import './PortfolioCard.css';


const PortfolioCard = () => {
    return (
        <div className="portfolio-card">
            <Header />
            <div className="portfolio-body">
                <Avatar />
                <PersonalInfo />
                <Bio />
            </div>
        </div>

    );

}

export default PortfolioCard;