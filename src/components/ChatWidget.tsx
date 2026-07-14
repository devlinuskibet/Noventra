"use client";

import { useState } from "react";
import { MessageCircle, X, Send } from "lucide-react";

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="chat-widget">
      {isOpen && (
        <div className="chat-widget__panel">
          <div className="chat-widget__header">
            <h4>Ask Noventra</h4>
            <p>How can we help your organization?</p>
          </div>
          <div className="chat-widget__body">
            <p>
              Welcome to Noventra Technologies. I can help you find the right
              service for your organization, answer questions about our
              capabilities, or connect you with a specialist. What would you
              like to know?
            </p>
          </div>
          <div className="chat-widget__input">
            <input
              className="form-input"
              type="text"
              placeholder="Type your question..."
              aria-label="Chat message"
            />
            <button className="btn btn--primary btn--small" aria-label="Send message">
              <Send size={16} />
            </button>
          </div>
        </div>
      )}
      <button
        className="chat-widget__button"
        onClick={() => setIsOpen(!isOpen)}
        aria-label={isOpen ? "Close chat" : "Open chat assistant"}
      >
        {isOpen ? <X size={24} /> : <MessageCircle size={24} />}
      </button>
    </div>
  );
}
