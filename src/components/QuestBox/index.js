import React from 'react'
import config from "config";
import Button from 'components/Button';

const QuestBox = () => {

    const {assetsURL: {
        image
    }} = config
    
    return (
        <div className="quest-box p-4 mt-5" style={{backgroundImage: `url(${image}/paper-parchment.png)`}}>
            <div className="banner p-4 m-5 mt-6" style={{background: "#C4C4C4"}}> 
                Banner ads
            </div>
            <div className="quest-nav">
                <ul>
                    <li><div>Daftar Quest</div></li>
                    <li><div>Quest Berjalan</div></li>
                    <li><div>Quest Sukses</div></li>
                    <li><div>Quest Gagal</div></li>
                </ul>
            </div>
            <div className="quest-container columns mt-10 blue">
                <div className="quest-name column has-text-left">
                    1. Judul Quest
                </div>
                <div className="quest-btn column">
                    <Button file="terima-btn" />
                    <Button file="tolak-btn" />
                </div>
            </div>
            <div className="quest-container columns red go-top">
                <div className="quest-name column has-text-left">
                    2. Judul Quest
                </div>
                <div className="quest-btn column">
                    <Button file="terima-btn" />
                    <Button file="tolak-btn" />
                </div>
            </div>
            <div className="quest-container columns blue go-top">
                <div className="quest-name column has-text-left">
                    2. Judul Quest
                </div>
                <div className="quest-btn column">
                    <Button file="terima-btn" />
                    <Button file="tolak-btn" />
                </div>
            </div>
            <div className="quest-container columns red go-top bor-btm">
                <div className="quest-name column has-text-left">
                    2. Judul Quest
                </div>
                <div className="quest-btn column">
                    <Button file="terima-btn" />
                    <Button file="tolak-btn" />
                </div>
            </div>
            
        </div>
    )
}

export default QuestBox
