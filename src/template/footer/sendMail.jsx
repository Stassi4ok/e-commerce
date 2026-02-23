import SendIcon from '../../assets/SVG/send.svg?react'
import './sendMail.css'
export function SendMail({placeholder}){

    return(
        <div className="sendMail-container">
            <input className="sendMail-input" placeholder={placeholder}/>
            <button className="send-button"><SendIcon /></button>
            
        </div>
    );
}