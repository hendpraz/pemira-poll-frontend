import React, { useState, useEffect } from 'react'
import QuestSideNav from 'components/Navbar/QuestSideNav'
import Footer from 'components/Footer'
import Button from 'components/Button'
import config from 'config'
import NavNoBrands from 'components/Navbar/NavNoBrands'
import QuestBox from 'components/QuestBox'
import Authenticated from 'layouts/Authenticated'
import { useHistory } from 'react-router-dom'
import { useAppContext } from 'libs/contextLib'
import DuelBox from 'components/Duel'
import HomeProfile from 'components/HomeProfile'

const Profile = (props) => {

    const history = useHistory()
    const { userHasAuthenticated } = useAppContext()
    const {assetsURL: {
        image
    }} = config

    async function handleLogout() {
        // sign out
        localStorage.removeItem('token');
      
        userHasAuthenticated(false);
        history.push("/")
    }

    const [nav, setNav] = useState('quest-wall')
    
    useEffect(() => {
        let navLink = document.getElementsByClassName(nav)[0]

        navLink
            .classList
            .add("active")

    }, [nav])

    return (
        <Authenticated>
            <div className="quest">
                <div className="myContent columns  ">
                    <div className="left-quest is-one-third column">
                        <QuestSideNav nav={nav} setNav={setNav} />
                        <div className="btn-quest">
                            <div className="btn-container">
                                <Button file="cream-btn"/>
                                <img src={`${image}/hourglass.png`} className="hourglass" alt="hourglass"/>
                            </div>
                            <br/>
                            <div className="btn-container">
                                <Button file="logout-button" onClick={handleLogout}/>
                                <img src={`${image}/lonceng.png`} className="lonceng" alt="hourglass"/>
                            </div>
                        </div>

                    </div>
                    <div className="right-quest is-two-thirds column mr-4-desktop">
                        <NavNoBrands />
                        {nav === "home" && <HomeProfile />}
                        {nav === "quest-wall" && <QuestBox />}
                        {nav === "duel-wall" && <DuelBox />}
                        

                    </div>
                </div>
                <Footer/>
            </div>
        </Authenticated>
    )
}

export default Profile
