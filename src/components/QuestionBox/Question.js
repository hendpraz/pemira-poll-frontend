import React from 'react'
import QuestionModal from './QuestionModal'

const Question = ({tab, item, last, index, id}) => {
    const openModal = () => {
        var modal = document.getElementById(`myModal-${index}`)
        var quest = document.getElementById(`questItem-${index}`)

        quest.onclick = function () {
            modal.style.display = "block"
        }

        window.onclick = function (event) {
            if (event.target === modal) {
                modal.style.display = "none"
            }
        }
    }

    return (
        <div id={`questItem-${index}`} onClick={() => openModal()}>
            <div
                className={`quest-container columns${index % 3 === 0
                ? ` mt-10`
                : ` go-top`} ${last && ` bor-btm`} ${index % 2
                    ? ' blue'
                    : ` red`}`}>
                <div className="quest-name column has-text-left">
                    {index + 1}. {tab === "my" && item.question ? item.question.judul : item.judul}
                </div>
                <div className="quest-btn column">
                </div>
            </div>

            <QuestionModal
                index={index}
                tab={tab}
                id={id}
                item={item}
                isAvailable={tab==="available"}
                />
        </div>
    )
}

export default Question
