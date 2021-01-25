import React from 'react'
import "./Item.scss";
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
const Item = ({bg, title, subtitle, oneBtnText, twoBtnText, arrow, subtitlebig = false}) => {

    const isBig = subtitlebig ? `item-subtitle_big` : '';

    return (
        <section style={{background: `url(${bg})`, backgroundPosition: "center", backgroundSize: "cover", backgroundRepeat: "no-repeat"}} className="item">
            <div>
                <h2 className="item-title">{title}</h2>
                {subtitle && <h2 className={`item-subtitle ${isBig}`}>{subtitle}</h2>}
            </div>
            <div className="bottom">
                <div className="item-buttons">
                    <button className="item-button item-oneButton">{oneBtnText}</button>
                    {twoBtnText ? <button className="item-button item-twoButton">{twoBtnText}</button> : null}
                </div>
                {arrow && (
                    <KeyboardArrowDownIcon className="item-bottom"/>
                )}
            </div>
        </section>
    )
}

export default Item
