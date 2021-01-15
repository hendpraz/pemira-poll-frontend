import React from 'react'
import config from 'config'
import 'styles/pages/Quest.scss'
import {useHistory} from 'react-router-dom'

const QuestSideNav = ({nav, setNav}) => {

    const history = useHistory()
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


return (
    <div
        className="quest-side is-hidden-mobile"
        style={{
        backgroundImage: `url(${image}/sidenavquest.png)`
    }}>
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
    </div>
)
}

export default QuestSideNav
