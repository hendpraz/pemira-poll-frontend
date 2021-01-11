import React, { useState, useEffect } from 'react'
import Button from 'components/Button';
import QuestModal from './QuestModal'
import { useAppContext } from "libs/contextLib"

const Quest = ({tab, item, last, index}) => {
    const { user } = useAppContext()
	console.log("ini dari quest", user)
	const [id, setId] = useState(null)
	console.log(tab)

	useEffect(() => {
		if (user) {
			setId(user.groups_id)
		}
	}, user)
	

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

    if (id == 5) {
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
    } else {
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
                        {tab === "accepted" && <Button
                            file={item.is_upvoted
                            ? "cancel-btn"
                            : "upvote-btn"}/>
}
                    </div>
                </div>

                <QuestModal index={index} item={item}/>
            </div>
        )
    }

}

export default Quest
