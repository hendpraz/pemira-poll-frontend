import React from 'react'
import Button from 'components/Button';
import QuestModal from './QuestModal'

const Quest = ({tab, item, last, index}) => {

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
						{tab==="accepted" &&
								<Button
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

export default Quest
