import React from "react";

//Styling
import "styles/pages/GiftShop.scss";
import "styles/pages/Home.scss";

//Components
import NavMain from 'components/Navbar/NavMain.js'
import NavLoggedIn from 'components/Navbar/NavLoggedIn.js'
import BarangMenarik from "components/BarangMenarik";
import TopFive from "pages/Home/TopFive";
import Footer from "components/Footer";

//Assets
import config from "config";
import Authenticated from "layouts/Authenticated";

const GiftShop = () => {
    const {
        assetsURL: { image },
    } = config;

    const isAuthenticated = localStorage.getItem('token')
    ? true
    : false

    return (
        <Authenticated>
            <div className="gift-shop-page">
                {isAuthenticated
                ? <NavLoggedIn />
                : <NavMain />}
                <div className="container-kematian mt-5">
                    <div className="border-luar-item">
                        <div className="border-luar-kuning">
                            <div className="border-dalem-item">
                                <div className="border-dalem-kuning">
                                    <div className="border-dalem-item contentnyacok">
                                        <div className="ads"></div>
                                        <div className="judul-container">
                                            <h2
                                                className="has-text-centered"
                                                id="Top5"
                                            >
                                                Barang-barang menarik
                                            </h2>
                                        </div>
                                        <div className="content-container ct2">
                                            <div className="barang-menarik">
                                                <BarangMenarik />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <TopFive />
                <Footer />
            </div>
        </Authenticated>
    );
};

export default GiftShop;
