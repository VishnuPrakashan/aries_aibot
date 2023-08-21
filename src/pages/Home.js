import React from "react";
import "./Home.css";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as BsIcons from "react-icons/bs";

const Home = () => {
  return (
    <>
      <div className="chat-container">
        <div className="chat outgoing">
          <div className="chat-content">
            <div className="chat-details">
              <img src="./images/user.jpg" alt="user-img" />
              <p>Hello</p>
            </div>
          </div>
        </div>
        <div className="chat incoming">
          <div className="chat-content">
            <div className="chat-details">
              <img src="./images/animation.gif" alt="animation" />
              <p>Hello! Welcome to Aries Bot! How can I assist you today?</p>
            </div>
            <span className="material-symbols-rounded">
              <FaIcons.FaRegCopy />
            </span>
          </div>
        </div>
        <div className="chat incoming">
          <div className="chat-content">
            <div className="chat-details">
              <img src="./images/animation.gif" alt="animation" />
              <div className="typing-animation">
                <div className="typing-dot dotone"></div>
                <div className="typing-dot dottwo"></div>
                <div className="typing-dot dotthree"></div>
              </div>
            </div>
            <span className="material-symbols-rounded">
              <FaIcons.FaRegCopy />
            </span>
          </div>
        </div>

        <div className="chat outgoing">
          <div className="chat-content">
            <div className="chat-details">
              <img src="./images/user.jpg" alt="user-img" />
              <p>Tell me about Aries</p>
            </div>
          </div>
        </div>
        <div className="chat incoming">
          <div className="chat-content">
            <div className="chat-details">
              <img src="./images/animation.gif" alt="animated-logo" />
              <p>
                Aries is a group of companies which works in marine industry.
              </p>
            </div>
            <span className="material-symbols-rounded">
              <FaIcons.FaRegCopy />
            </span>
          </div>
        </div>
        <div className="chat outgoing">
          <div className="chat-content">
            <div className="chat-details">
              <img src="./images/user.jpg" alt="user-img" />
              <p>
                Who is the founder of aries group of companies?Tell me more
                information about the company
              </p>
            </div>
          </div>
        </div>
        <div className="chat incoming">
          <div className="chat-content">
            <div className="chat-details">
              <img src="./images/animation.gif" alt="animated-logo" />
              <p>
                Founded by Mr. Sohan Roy on 28th March 1998 in UAE, Aries Group
                was started with its flagship unit, Aries Marine, and then grown
                to become one of the largest multinational conglomerates in the
                Middle East with 59 companies operating in 25 countries across
                the world. Within a short span of 25 years, Aries Group has
                collaborated with more than 8243 national and international
                clients and executed more than 85,312 projects successfully.
              </p>
            </div>
            <span className="material-symbols-rounded">
              <FaIcons.FaRegCopy />
            </span>
          </div>
        </div>
        <div className="chat outgoing">
          <div className="chat-content">
            <div className="chat-details">
              <img src="./images/user.jpg" alt="user-img" />
              <p>Hello</p>
            </div>
          </div>
        </div>
        <div className="chat incoming">
          <div className="chat-content">
            <div className="chat-details">
              <img src="./images/animation.gif" alt="animated-logo" />
              <p>Hello! Welcome to Aries Bot! How can I assist you today?</p>
            </div>
            <span className="material-symbols-rounded">
              <FaIcons.FaRegCopy />
            </span>
          </div>
        </div>
      </div>

      {/* typing container */}
      <div className="typing-container">
        <div className="typing-content">
          <div className="typing-textarea">
            <textarea
              id="chat-input"
              placeholder="Enter your doubts here"
              required
            />
            <span id="send-btn" className="material-symbols-rounded">
              <AiIcons.AiOutlineSend />
            </span>
          </div>
          <div className="typing-controls">
            <span id="theme-btn" className="material-symbols-rounded">
              <BsIcons.BsBrightnessHigh />
            </span>
            <span id="delete-btn" className="material-symbols-rounded">
              <AiIcons.AiOutlineDelete />
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
