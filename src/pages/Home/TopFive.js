import config from 'config'
import React from 'react'

const TopFive = () => {
    const { assetsURL: {image} } = config

    return (
        <div className="container-kematian" >
            <div className="border-luar-item">
                <div className="border-luar-kuning">
                    <div className="border-dalem-item">
                        <div className="border-dalem-kuning">
                            <div className="border-dalem-item contentnyacok">
                                <div className="judul-container">
                                    <h2 className="has-text-centered" id="Top5">Top 5</h2>
                                </div>
                                <div className="content-container">
                                   <div className="columns">
                                       <div className="column left-top-five">
                                           <div className="background-image" style={{backgroundImage: `url('${image}/scroll-medium.png')`}}>
                                               <div className="top-lembaga">
                                                    <h3 className="has-text-black">Top 5 Lembaga</h3>
                                                    <br />
                                                    <p  className="has-text-black">
                                                        <ol>
                                                            <li>Lembaga a (12000 ppoint)</li>
                                                            <li>Lembaga b (12000 ppoint)</li>
                                                            <li>Lembaga b (12000 ppoint)</li>
                                                            <li>Lembaga d (12000 ppoint)</li>
                                                            <li>Lembaga e (12000 ppoint)</li>   
                                                        </ol>
                                                    </p>
                                               </div>
                                           </div>
                                       </div>
                                       <div className="column right-top-five">
                                           <div className="background-image" style={{backgroundImage: `url('${image}/scroll-medium.png')`}}>
                                               <div className="top-lembaga">
                                                    <h3 className="has-text-black">Top 5 Quest</h3>
                                                    <br />
                                                    <p  className="has-text-black">
                                                        <ol>
                                                            <li>Lembaga a (12000 ppoint)</li>
                                                            <li>Lembaga b (12000 ppoint)</li>
                                                            <li>Lembaga b (12000 ppoint)</li>
                                                            <li>Lembaga d (12000 ppoint)</li>
                                                            <li>Lembaga e (12000 ppoint)</li>   
                                                        </ol>
                                                    </p>
                                               </div>
                                           </div>
                                       </div>
                                   </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TopFive
