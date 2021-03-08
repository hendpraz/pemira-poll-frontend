import React, {useState} from 'react'
// import Button from 'components/Button';
import DuelModal from './DuelModal'

const Duel = ({tab, item, last, index, id}) => {

    // const modalTab = tab

    const [numOfUpvotes,
        setNumOfUpvotes] = useState(item.upvotes)

    const openModal = () => {
        var modal = document.getElementById(`myModal-${index}`);
        var duel = document.getElementById(`duelItem-${index}`);

        duel.onclick = function () {
            modal.style.display = "block";
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
            <div id={`duelItem-${index}`} onClick={() => openModal()}>
                <div
                    className={`duel-container columns
                        ${index % 3 === 0 ? ` mt-10`: ` go-top`} 
                        ${last && ` bor-btm`} 
                        ${index % 2 ? ' blue' : ` red`}`}>
                    <div className="duel-name column has-text-left">
                        {index + 1}. {item.judul}
                    </div>
                </div>

                <DuelModal
                    index={index}
                    tab={tab}
                    id={id}
                    item={item}
                    numOfUpvotes={numOfUpvotes}
                    setNumOfUpvotes={setNumOfUpvotes}/>
            </div>
        )
    } else { // Massa or Lembaga or Admin
        return (
            <div id={`duelItem-${index}`} onClick={() => openModal()}>
                <div
                    className={`duel-container columns${index % 3 === 0
                    ? ` mt-10`
                    : ` go-top`} ${last && ` bor-btm`} ${index % 2
                        ? ' blue'
                        : ` red`}`}>
                    <div className="duel-name column has-text-left">
                        {index + 1}. {item.judul}
                    </div>
                    <div className="duel-btn column">
                        {<div style={{marginLeft: "auto"}}>
                            {
                                item.tipe === "mandatory" && "Wajib"
                            }
                        </div>
                        }
                    </div>
                </div>

                <DuelModal
                    index={index}
                    tab={tab}
                    id={id}
                    item={item}/>
            </div>
        )
    }

}

export default Duel
