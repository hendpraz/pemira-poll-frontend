import React from "react";
import { useHistory } from "react-router-dom";

// Component
import Button from "components/Button";
import HomeBottom from "pages/Home/HomeBottom";

// Styling
import "styles/pages/Referendum.scss";

// Resource
import config from "config";
import Footer from "components/Footer";

const Referendum = () => {
    const { assetsURL: { image } } = config;

    const history = useHistory();

    const goToRefProfile = () => {
        history.push("/referendum/profile")
    }
    
    return (
        <div className="container-kematian referendum-page">
            <div className="contentnyacok">
                <div className="judul-container referendum">
                    <h1 className="has-text-centered">Referendum KM ITB</h1>
                </div>
                <div className="content-container">
                    <div className="referendum-content">
                        <p>
                            Suatu wadah untuk menyalurkan aspirasi <br />{" "}
                            blablabla
                        </p>
                        <Button file="masuk-btn" onClick={goToRefProfile} />
                    </div>
                </div>
                <Footer />
                <div className="cloud-container">
                    <div className="cloud-left is-hidden-mobile">
                        <img src={`${image}/cloudleft.png`} alt="" />
                    </div>

                    <div className="cloud-right is-hidden-mobile">
                        <img src={`${image}/cloudright.png`} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Referendum;
