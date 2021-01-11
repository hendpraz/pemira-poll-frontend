import React from 'react'
import config from 'config'
import 'styles/pages/Quest.scss'

const QuestSideNav = () => {

    const { assetsURL: {image}} = config

    return (
        <div className="quest-side is-hidden-mobile" style={{backgroundImage: `url(${image}/sidenavquest.png)`}}>
            <li><div>Home</div></li>
            <li><div>Quest Wall</div></li>
            <li><div>Duel Wall</div></li>
            <li><div>Tim Sukses</div></li>
            <li><div>Algojo</div></li>
            <li><div>Hasil Pemira</div></li>
            <li><div>-</div></li>
        </div>
    )
}

export default QuestSideNav
