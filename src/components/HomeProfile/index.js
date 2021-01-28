import React, {useState, useEffect} from 'react'
import config from "config";
// import Button from 'components/Button';
import {useAppContext} from "libs/contextLib"
import 'styles/HomeProfile.scss';

const HomeProfile = () => {
    const {user} = useAppContext()
    const [pageUser, setPageUser] = useState({})

    const {assetsURL: {
            image
        }} = config

    useEffect(() => {
        if (user) {
            setPageUser(user)
        }
    }, [user])

    return (
        <div className="home-profile">
            <div
                className="quest-box p-4 mt-5"
                style={{
                backgroundImage: `url('${image}/paper-parchment.png')`
            }}>
                <div
                    className="banner p-4 m-5 mt-6"
                    style={{
                    background: "#C4C4C4"
                }}>
                    Banner ads
                </div>

                <div className="quest-nav">
                    <h2>Biodata</h2>
                </div>

                <div className="home-profile-content is-flex">
                    <div className="photo-container">
                        <div
                            className="background-profile"
                            style={{
                            backgroundImage: `url('${image}/Tameng v2 2.png')`
                        }}>
                            <img src={`${image}/stone 2.png`} alt="prof-pic"/>
                        </div>
                    </div>
                    <div className="user-profile-content">
                        <table>
                            <tbody>
                                <tr>
                                    <td>Nama</td>
                                    <td>: {pageUser.fullname}
                                    </td>
                                </tr>
                                <tr>
                                    <td>NIM</td>
                                    <td>: {pageUser.nim}{pageUser.nim_2 ? `, ${item.nim_2}` : ""}
                                    </td>
                                </tr>
                                <tr>
                                    <td>Fakultas/Sekolah</td>
                                    <td>: {pageUser.ou}
                                    </td>
                                </tr>
                                <tr>
                                    <td>Email</td>
                                    <td>: {pageUser.email_non_itb}, {pageUser.email}
                                    </td>
                                </tr>
                                <tr>
                                    <td>Nomor HP</td>
                                    <td>: {pageUser.phone_number}
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <div className="home-profile-btm is-flex">
                    <div className="left-side-btm is-flex">
                        <div className="user-gain">
                            <p>Status Pemilihan K3M</p>
                            <div
                                className="hijau-btn"
                                style={{
                                backgroundImage: `url('${image}/hijau-btn.png')`
                            }}>
                                <div>{pageUser.vote_k3m_status === "notyet" ? <>&#10006;</> : <>&#x2714;</>}</div>
                            </div>
                        </div>
                        <div className="user-gain">
                            <p>Status Pemilihan MWA-WM</p>
                            <div
                                className="hijau-btn"
                                style={{
                                backgroundImage: `url('${image}/hijau-btn.png')`
                            }}>
                                <div>{pageUser.vote_mwa_status === "notyet" ? <>&#10006;</> : <>&#x2714;</>}</div>
                            </div>
                        </div>
                        <div className="user-gain">
                            <p>Total Point</p>
                            <div
                                className="hijau-btn"
                                style={{
                                backgroundImage: `url('${image}/hijau-btn.png')`
                            }}>
                                <div>{pageUser.game_point}</div>
                            </div>
                        </div>
                        <div className="right-side-btm">
                            {/* <p>Terafiliasi dengan organisasi</p>
                            <div className="is-flex sponsor-container">
                                <div className="user-gain ">
                                    <img src={`${image}/loedroek.png`} alt="" />
                                    <p>Loedroek ITB</p>
                                </div>
                                <div className="user-gain">
                                    <img src={`${image}/lfm.png`} alt="" />
                                    <p>LFM ITB</p>
                                </div>
                            </div> */}
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default HomeProfile
