import React, { useState } from 'react'
import Button from 'components/Button';
import QuestModal from './QuestModal'

const Quest = ({tab, item, last, index, id}) => {

    const [numOfUpvotes, setNumOfUpvotes] = useState(item.upvotes)

    const openModal = () => {
        var modal = document.getElementById(`myModal-${index}`);
        var quest = document.getElementById(`questItem-${index}`);

        quest.onclick = function () {
            modal.style.display = "block";
        }

        window.onclick = function (event) {
            if (event.target === modal) {
                modal.style.display = "none";
            }
        }
    }

    if (id === 5) { // Kandidat
		console.log("masuk pak eko")
        return (
            <div id={`questItem-${index}`} onClick={() => openModal()}>
                <div
                    className={`quest-container columns${index === 0
                    ? ` mt-10`
                    : ` go-top`} ${last && ` bor-btm`} ${index % 2
                        ? ' blue'
                        : ` red`}`}>
                    <div className="quest-name column has-text-left">
                        {index + 1}. {item.judul}
                    </div>
                    {tab === "quest-berjalan" && <div className="quest-btn column">
                        <Button file="unggah-bukti-btn"/>
                        <Button file="menyerah-btn"/>
                    </div>}
					{tab === "quest" && <div className="quest-btn column">
                        <Button file="terima-btn"/>
                        <Button file="tolak-btn"/>
                    </div>}

                </div>

                <QuestModal index={index} item={item}/>
            </div>
        )
    } else { // Massa or Lembaga or Admin
        return (
            <div id={`questItem-${index}`} onClick={() => openModal()}>
                <div
                    className={`quest-container columns${index === 0
                    ? ` mt-10`
                    : ` go-top`} ${last && ` bor-btm`} ${index % 2
                        ? ' blue'
                        : ` red`}`}>
                    <div className="quest-name column has-text-left">
                        {index + 1}. {item.judul}
                    </div>
                    <div className="quest-btn column">
                        {tab === "accepted" && 
                            <div style={{marginLeft: "auto"}}>Upvote: {numOfUpvotes}</div>
                        }
                    </div>
                </div>

                <QuestModal index={index} item={item} numOfUpvotes={numOfUpvotes} setNumOfUpvotes={setNumOfUpvotes}/>
            </div>
        )
    }

}

export default Quest
