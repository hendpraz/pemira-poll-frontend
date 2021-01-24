import CarouselV3 from 'components/Carousel-v3'
import ModalSubmit from 'components/Vote/ModalSubmit'
import DarkBlue from 'layouts/DarkBlue'
import React from 'react'
import {useHistory} from 'react-router-dom'

const VoteBefore = () => {
    const history = useHistory()

    const onClick = () => {
        history.push('votesuccess')
    }

    return (
        <div className="vote-before">
            <DarkBlue />
            <nav className="voteNav">
                <a onClick={() => {history.goBack()}}>Kembali</a>
            </nav>
            <div className="container-asik">
                <CarouselV3 />
            </div>
            <ModalSubmit onClick={onClick}/>
        </div>
    )
}

export default VoteBefore
