import React from 'react';
import { Link } from 'react-router-dom'
import 'styles/Footer.scss'

const hashtags = [
    {
        link: '#',
        name: 'Intro Pemira'
    },
    {
        link: '#',
        name: 'Top 5 Lembaga'
    },
    {
        link: '#',
        name: 'Kandidat 2021'
    },
    {
        link: '#',
        name: 'Top 5 Quest'
    },
    {
        link: '#',
        name: 'FAQ'
    },
    {
        link: '#',
        name: 'Tutorial'
    },
    {
        link: '#',
        name: 'Sponsor'
    }
]

function Footer({ hashtag }) {
    return (
        <div className="footerContainer" style={hashtag === 'true' ? {"height": "128px"} : {"height": "95px"}}>
            
            <div className="hashtag" style={hashtag === 'true' ? {display: 'block'} : {display: 'none'}}>
                {hashtags.map((item, index) => {
                    return (
                        <Link key={index} className="hashtag-item" to={item.link}>
                            {`#${item.name}`}
                        </Link>
                    )
                })}
            </div>
            <hr />
            <div className="footer">
                <h2>Pemira KM</h2>
                <p>All Right Reserved</p>
            </div>
        </div>
    );
}

export default Footer;