import React, { useState, useEffect } from 'react'
import config from 'config'
import 'styles/pages/Quest.scss'
import { useAppContext } from 'libs/contextLib'
import {useHistory} from 'react-router-dom'

const QuestSideNav = ({nav, setNav}) => {

    const history = useHistory()
    const { user } = useAppContext()
    const {assetsURL: {
            image
        }} = config

    const clickNav = clickedNav => {
        setNav(prev => {
            console.log(prev)
            if (clickedNav !== prev) {
                document
                    .querySelector(`.${prev}`)
                    .classList
                    .remove("active")
            }

            return clickedNav
        })
        document
            .querySelector(`.${clickedNav}`)
            .classList
            .add("active")
    }

    const [pageUser, setPageUser] = useState({})

    useEffect(() => {
        if (user) {
            setPageUser(user)
        }
    }, [user])

    const defaultContent = () => {
        return (
            <>
                <li>
                    <div className="home" onClick={() => clickNav("home")}>Home</div>
                </li>
                <li>
                    <div>-</div>
                </li>
                <li>
                    <div>-</div>
                </li>
                <li>
                    <div>-</div>
                </li>
                <li>
                    <div>-</div>
                </li>
                <li>
                    <div>-</div>
                </li>
            </>
        )
    }

    const getSideNavContent = () => {
        if (pageUser) {
            switch (pageUser.groups) {
                case 3:
                    return (
                        <>
                            <li>
                                <div className="home" onClick={() => clickNav("home")}>Home</div>
                            </li>
                            <li>
                                <div className="vote-k3m" onClick={() => history.push("/vote-k3m")}>Pemilihan K3M</div>
                            </li>
                            <li>
                                <div className="vote-mwa" onClick={() => history.push("/vote-mwawm")}>Pemilihan MWAWM</div>
                            </li>
                            <li>
                                <div className="quest-wall" onClick={() => clickNav("quest-wall")}>Quest Wall</div>
                            </li>
                            <li>
                                <div>-</div>
                            </li>
                            <li>
                                <div>-</div>
                            </li>
                        </>
                    )
                case 4:
                    return defaultContent()
                case 5:
                    return (
                        <>
                            <li>
                                <div className="home" onClick={() => clickNav("home")}>Home</div>
                            </li>
                            <li>
                                <div className="quest-wall" onClick={() => clickNav("quest-wall")}>Quest Wall</div>
                            </li>
                            <li>
                                <div className="duel-wall" onClick={() => clickNav("duel-wall")}>Duel Wall</div>
                            </li>
                            <li>
                                <div className="tim-sukses" onClick={() => clickNav("tim-sukses")}>Tim Sukses</div>
                            </li>
                            <li>
                                <div className="algojo" onClick={() => clickNav("algojo")}>Algojo</div>
                            </li>
                            <li>
                                <div className="hasil-pemira" onClick={() => clickNav("hasil-pemira")}>Hasil Pemira</div>
                            </li>
                        </>
                    )
                default:
                    return defaultContent()
            }
        } else {
            return defaultContent()
        }
    }

return (
    <div
        className="quest-side is-hidden-mobile"
        style={{
            backgroundImage: `url(${image}/sidenavquest.png)`
        }}
    >
        {getSideNavContent()}
    </div>
)
}

export default QuestSideNav
