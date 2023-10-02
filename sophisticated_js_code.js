/**
 * filename: sophisticated_js_code.js
 * 
 * This code showcases a sophisticated implementation of a chat application using WebSockets and React.
 */
 
// Import necessary modules and libraries
import React from 'react';
import { render } from 'react-dom';
import io from 'socket.io-client';

// WebSocket connection URL
const socketUrl = 'ws://localhost:3000';

// Chat application component
class ChatApp extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      messages: [],
      currentMessage: '',
    };
    
    // WebSocket connection initialization
    this.socket = io(socketUrl);
    
    // Bind methods to the class
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  
  componentDidMount() {
    // Event listener for new messages
    this.socket.on('message', (message) => {
      const { messages } = this.state;
      messages.push(message);
      
      this.setState({ messages });
    });
  }
  
  handleSubmit(event) {
    event.preventDefault();
    
    const { currentMessage } = this.state;
    
    // Send message to WebSocket server
    if (currentMessage.trim() !== '') {
      this.socket.emit('message', currentMessage);
      this.setState({ currentMessage: '' });
    }
  }
  
  handleChange(event) {
    this.setState({ currentMessage: event.target.value });
  }
  
  render() {
    const { messages, currentMessage } = this.state;
    
    return (
      <div>
        <h1>Chat Application</h1>
        <div>
          {messages.map((message, index) => (
            <div key={index}>{message}</div>
          ))}
        </div>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            value={currentMessage}
            onChange={this.handleChange}
          />
          <button type="submit">Send Message</button>
        </form>
      </div>
    );
  }
}

// Render the chat application to the DOM
render(<ChatApp />, document.getElementById('root'));