import React from 'react'
import Button from 'components/Button';

const Quest = ({ tab, item, last, index }) => {


        return (
            <div>
                <div className={`quest-container columns${index == 0 ? ` mt-10` : ` go-top`}  ${last && ` bor-btm`} ${index % 2 ? ' red' : ` blue`}`}>
                    <div className="quest-name column has-text-left">
                        {index + 1}. {item.name}
                    </div>
                    <div className="quest-btn column">
                        <Button file={item.status == "acc" ? "cancel-btn" : "upvote-btn"} />
                    </div>
                </div>
            </div>
        )

}

export default Quest
