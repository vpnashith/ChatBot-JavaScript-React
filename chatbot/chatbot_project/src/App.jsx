import { useState } from 'react'
import { ChatInput } from './components/ChatInput';
import ChatMessages from './components/ChatMessages'; //Sice the expor is default export, {} is not required
import './App.css'

// Best practice is to create a component for the app and render it to the DOM, 
// Which represent the whole application and it can contain other components inside it.
function App(){
  // We have to make the chat messages to states for when an update is hapening , it shoud update the HTML also, otherwise it only 
  // update the list, it wont reflect the HTML 
  // To make it as a state, we can use "React.useState()"
  // Note: in react we use state to save the data that changes over time
  const [chatMessages, setChatMessages] = useState(  //This will return two variable: 1. the current data 2. a function that used to update the data
    [
      // {
      //   message: "Hello chatbot",
      //   sender: "user"
      // },
      // {
      //   message: "Hi how can I help",
      //   sender: "robot"
      // },
      // {
      //   message: "what is react?",
      //   sender: "user"
      // },
      // {
      //   message: "react is JS library for building UI",
      //   sender: "robot"
      // }
    ]
  );
  // const chatMessages = array[0];
  // const setChatMessages = array[1]; // In react we do not update the data directly, we have to use this function, otherwise the HTML won't get updated

return (
      <div className="app-container">
        <ChatInput 
          chatMessages={chatMessages} 
          setChatMessages={setChatMessages}
        />
        <ChatMessages 
          chatMessages={chatMessages}
        />
      </div>
  );
}
export default App
