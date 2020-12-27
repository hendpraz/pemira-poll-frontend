import React from 'react';

const hashtag = [
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

function Footer() {
    return (
        <div className="footerContainer">
            
            <div className="hashtag">
                {hashtag.map((item, index) => {
                    return (
                        <a className="hashtag-item" href={item.link}>
                            {`#${item.name}`}
                        </a>
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