import React, {useState} from 'react';
import CheaterModal from "./CheaterModal";
// import Button from 'components/Button';

const CheaterItem = ({tab, item, last, index, id}) => {

    console.log(item);

    const [numOfUpvotes,
        setNumOfUpvotes] = useState(item.upvotes)

    const openModal = () => {
        var modal = document.getElementById(`cheater-${index}`);
        var quest = document.getElementById(`cheaterItem-${index}`);

        quest.onclick = function () {
            modal.style.display = "flex";
        }

        window.onclick = function (event) {
            if (event.target === modal) {
                modal.style.display = "none";
            }
        }
    }

    if (id === 5) { // Kandidat
        console.log(index)
        return (
            <div id={`cheaterItem-${index}`} onClick={() => openModal()}>
                <div
                    className={`quest-container columns
                        ${index % 3 === 0 ? ` mt-10`: ` go-top`} 
                        ${last && ` bor-btm`} 
                        ${index % 2 ? ' blue' : ` red`}`}>
                    <div className="quest-name column has-text-left">
                        {index + 1}. {item.accused}
                    </div>
                </div>
                <CheaterModal item={item} index={index} />
            </div>
        )
    } else { // Massa or Lembaga or Admin
        return (
            <div id={`cheaterItem-${index}`} onClick={() => openModal()}>
                <div
                    className={`quest-container columns${index % 3 === 0
                    ? ` mt-10`
                    : ` go-top`} ${last && ` bor-btm`} ${index % 2
                        ? ' blue'
                        : ` red`}`}>
                    <div className="quest-name column has-text-left">
                        {index + 1}. {item.title}
                    </div>
                    <div className="quest-btn column">
                        Tertuduh: {item.accused}
                    </div>
                </div>
                <CheaterModal item={item} index={index} />
            </div>
        )
    }

}

export default CheaterItem;
