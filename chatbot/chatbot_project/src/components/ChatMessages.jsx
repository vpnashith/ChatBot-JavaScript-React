import { ChatMessage } from "./ChatMessage";
import './ChatMessages.css'


function ChatMessages({chatMessages}){
    return (
    <div className="chat-messages-container">
    {chatMessages.map((chatMessage, index) => {
        return (
        <ChatMessage 
            key={index} 
            message={chatMessage.message} 
            sender={chatMessage.sender} 
        />
        );
    })}
    </div>
    );
}

export default ChatMessages; // We can use this to export.