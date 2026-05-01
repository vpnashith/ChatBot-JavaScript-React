import { useState } from 'react'
import { Chatbot } from 'supersimpledev'
import './ChatInput.css'

//this is a React component, it is a function that returns JSX (a syntax extension for JavaScript that looks similar to HTML)
export function ChatInput({chatMessages, setChatMessages}){
  const [inputText, setInputText] = useState(""); // this is a state variable, it will hold the value of the input text, and setInputText is a function that we can use to update the value of inputText
  
  function saveInputText(event){
    setInputText(event.target.value);
  }

  function sendMessage(){
  // setChatMessages works s.t it will update the current value with whatever we are given.
  // Since we are using this function to update the array, react will rerun the code internally and HTML will updated
    
    let newChatMessages = [
        ...chatMessages, // copy the chatMessages array . <spread operator>
        {
          message: inputText,
          sender: "user"
        }
      ]
    setChatMessages(newChatMessages);

    const chatResponse = Chatbot.getResponse(inputText);
    newChatMessages = [
      ...newChatMessages,
      {
        message: chatResponse,
        sender: "robot"
      }
    ]
    setChatMessages(newChatMessages);
    
    
    setInputText(""); // Clear the input text after sending the message
  }
  return (
    //this is a React Fragment, it allows us to return multiple elements without adding an extra node to the DOM
    <div className="chat-input-container">
      <input 
        placeholder= "Send a message to chatbot" 
        size="30" 
        onChange={saveInputText}
        value={inputText}
        className="chat-input"
      />
      <button onClick={sendMessage} className="send-button">
        Send
      </button>
    </div>
  )
};
