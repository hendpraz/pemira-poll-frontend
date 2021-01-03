import React from 'react';
import config from 'config'
import 'styles/layouts/DarkBlue.scss'

function DarkBlue({ hashtag }) {
    const { assetsURL } = config;
    const { image } = assetsURL;

    return (
        <div className="dark-blue" style={hashtag === "true" ? {"minHeight": "125vh"} : {"minHeight": "118vh"}}>
            <div className="star-left">
                <img src={`${image}/star2left.png`} alt="" />
            </div>
    
            <div className="star-right">
                <img src={`${image}/star2right.png`} alt="" />
            </div>

            <div className="cloud-left">
                <img src={`${image}/cloudleft.png`} alt="" />
            </div>

            <div className="cloud-right">
                <img src={`${image}/cloudright.png`} alt="" />
            </div>
        </div>
    )
}

export default DarkBlue