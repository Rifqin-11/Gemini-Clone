import './Main.css';
import React, { useState } from 'react';
import { assets } from '../../assets/assets';
import { getAIResponse } from '../../config/gemini';

const Main = ({ chatHistory, setChatHistory }) => {
  const [input, setInput] = useState('');

  const handleSend = async () => {
    if (input.trim()) {
      const userMessage = input;
      setInput('');
      setChatHistory((prev) => [...prev, { type: 'user', text: userMessage }]);

      const aiResponse = await getAIResponse(userMessage);
      setChatHistory((prev) => [...prev, { type: 'ai', text: aiResponse }]);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleSend();
    }
  };

  return (
    <div className='main'>
      <div className='nav'>
        <p>Artificial Intelligence V1</p>
        <img src={assets.user_icon} alt="" />
      </div>
      <div className="main-container">
        {chatHistory.length === 0 ? (
          <>
            <div className="greet">
              <p><span>Hello, Rifqi.</span></p>
              <p>How can I help u today?</p>
            </div>
            <div className="cards">
              <div className="card">
                <p>Suggest beautiful place to see on an upcoming road trip</p>
                <img src={assets.compass_icon} alt="" />
              </div>
              <div className="card">
                <p>Briefly summarize this concept: urban planning</p>
                <img src={assets.bulb_icon} alt="" />
              </div>
              <div className="card">
                <p>Brainstorm team bonding activities for our work retreat</p>
                <img src={assets.message_icon} alt="" />
              </div>
              <div className="card">
                <p>Improve the readability of the following code</p>
                <img src={assets.code_icon} alt="" />
              </div>
            </div>
          </>
        ) : (
          <div className="chat-container">
            {chatHistory.map((chat, index) => (
              <div
                key={index}
                className={`chat-bubble ${chat.type === 'user' ? 'user' : 'ai'}`}
              >
                <p>{chat.text}</p>
              </div>
            ))}
          </div>
        )}

        <div className="main-bottom">
          <div className="search-box">
            <input
              type="text"
              placeholder='Enter a prompt here'
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
            />
            <div>
              <img src={assets.gallery_icon} alt="" />
              <img src={assets.mic_icon} alt="" />
              <img src={assets.send_icon} alt="" onClick={handleSend} />
            </div>
          </div>
          <p className="bottom-info">AI ini mungkin menampilkan info yang tidak akurat, termasuk tentang orang, jadi periksa kembali responsnya. Privasi Anda & Aplikasi</p>
        </div>
      </div>
    </div>
  );
};

export default Main;
