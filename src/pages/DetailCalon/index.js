import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import "styles/pages/DetailCalon.scss";
import config from "config";
import Footer from "components/Footer";
import Biodata from "components/DetailCalon/Biodata";
import Resume from "components/DetailCalon/Resume";
import Quest from "components/DetailCalon/Quest";

const DetailCalon = () => {
    const {
        assetsURL: { image },
    } = config;

    const history = useHistory();

    const [tab, setTab] = useState("biodata");

    return (
        <div className="detail-calon-page">
            <nav>
                <div className="nav-wrapper">
                    <div
                        className="left"
                        onClick={() => history.goBack()}
                    >{`<Kembali`}</div>
                    <div className="right">
                        <span>FAQ</span>
                        <span onClick={() => history.push("/about-us")}>
                            About Us
                        </span>
                    </div>
                </div>
            </nav>
            <div className="content-wrapper">
                <div className="left-content">
                    <div
                        className="bg-image"
                        style={{
                            backgroundImage: `url('${image}/bg-kandidat.png')`,
                        }}
                    >
                        <div className="img-container">
                            <img
                                alt="foto-calon"
                                src={`${image}/hourglass.png`}
                            />
                        </div>
                    </div>
                </div>
                <div
                    className="right-content"
                    style={{
                        backgroundImage: `url('${image}/paper-parchment.png')`,
                    }}
                >
                    <div className="right-content-box">
                        <div className="right-box-nav">
                            <div className="right-box-nav-wrapper">
                                <span>
                                    <div
                                        className={
                                            tab === "biodata" && `active`
                                        }
                                        onClick={() => setTab("biodata")}
                                    >
                                        Biodata
                                    </div>
                                </span>
                                <span>
                                    <div
                                        className={tab === "resume" && `active`}
                                        onClick={() => setTab("resume")}
                                    >
                                        Resume
                                    </div>
                                </span>
                                <span>
                                    <div
                                        className={tab === "quest" && `active`}
                                        onClick={() => setTab("quest")}
                                    >
                                        Quest dijalankan
                                    </div>
                                </span>
                            </div>
                        </div>
                        <div className="content">
                            {tab === "biodata" && <Biodata />}
                            {tab === "resume" && <Resume />}
                            {tab === "quest" && <Quest />}
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default DetailCalon;
