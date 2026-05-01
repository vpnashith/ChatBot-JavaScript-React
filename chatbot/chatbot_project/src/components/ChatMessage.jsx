import RobotImage from '../assets/robot.png'
import UserImage from '../assets/user.png'
import './ChatMessage.css'

// Component for chat message
export function ChatMessage({message, sender}){
    /* const message = props.message;
        const sender = props.sender; */
    // OR
    // const {message, sender} = props;

    /*if (sender === "robot"){
    return (
    <div>
    <img src="robot.png" width="50" />
    {message}
    </div>
    );
    }*/

    return (
    <div className={sender === "user"? "chat-message-user": "chat-message-robot"}>
    {sender === "robot" && <img src={RobotImage} width="50" />}
    {message}
    {sender === "user" && <img src={UserImage} width="50" />}
    </div>
    )
};