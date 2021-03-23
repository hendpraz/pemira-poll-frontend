import config from 'config'
import React, { useState, useEffect } from 'react'
import { topQuest } from 'resources/quest'
import { topLembaga } from 'resources/user'

const TopFive = () => {
    const { assetsURL: {image} } = config
    const [lembaga, setLembaga] = useState([])
    const [quest, setQuest] = useState([])

    useEffect(() => {
        async function loadLembaga() {
            try {
                const response = await topLembaga(5)

                if (response.status >= 200 && response.status < 400) {
                    setLembaga(response.data)
                } else {
                    alert("Terdapat masalah saat loading data top 5 lembaga")
                }
                
                const response2 = await topQuest(5)

                if (response2.status >= 200 && response2.status < 400) {
                    setQuest(response2.data)
                } else {
                    alert("Terdapat masalah saat loading data top 5 quest")
                }
            } catch (e) {
                console.log(e)
            }
        }

        async function onLoad() {
            loadLembaga()
        }
        
        onLoad()
    }, []) /* eslint-disable-line */

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
                                                    <div  className="has-text-black">
                                                        <ol>
                                                        {lembaga.map((item => {
                                                            return (
                                                                <li key={item}>
                                                                    {item.fullname} ({item.game_point} point)
                                                                </li>
                                                            )
                                                        }))}
                                                        </ol>
                                                    </div>
                                               </div>
                                           </div>
                                       </div>
                                       <div className="column right-top-five">
                                           <div className="background-image" style={{backgroundImage: `url('${image}/scroll-medium.png')`}}>
                                               <div className="top-lembaga">
                                                    <h3 className="has-text-black">Top 5 Quest</h3>
                                                    <br />
                                                    <div  className="has-text-black">
                                                        <ol>
                                                        {quest.map((item => {
                                                            return (
                                                                <li key={item}>
                                                                    {item.judul} ({item.upvotes} upvote)
                                                                </li>
                                                            )
                                                        }))} 
                                                        </ol>
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
        </div>
    )
}

export default TopFive
