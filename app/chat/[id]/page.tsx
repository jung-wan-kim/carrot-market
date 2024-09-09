'use client';

import { useState, KeyboardEvent, useEffect, useRef } from 'react';
import Link from 'next/link';

export default function ChatPage({ params }: { params: { id: string } }) {
  const [messages, setMessages] = useState<{ text: string; sender: 'user' | 'seller' }[]>([]);
  const [inputMessage, setInputMessage] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const handleSendMessage = () => {
    if (inputMessage.trim()) {
      setMessages([...messages, { text: inputMessage, sender: 'user' }]);
      setInputMessage('');
    }
  };

  const handleKeyPress = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  useEffect(() => {
    const setVh = () => {
      const vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty('--vh', `${vh}px`);
    };

    setVh();
    window.addEventListener('resize', setVh);

    return () => window.removeEventListener('resize', setVh);
  }, []);

  return (
    <div className="flex flex-col h-screen pt-14" style={{ height: 'calc(var(--vh, 1vh) * 100)' }}>
      <header className="bg-carrot-orange text-white p-4 fixed top-0 left-0 right-0 z-10">
        <Link href={`/detail/${params.id}`} className="font-bold">← 뒤로 가기</Link>
      </header>
      <div className="flex-1 overflow-y-auto p-4 pb-20">
        {messages.map((message, index) => (
          <div key={index} className={`mb-2 ${message.sender === 'user' ? 'text-right' : 'text-left'}`}>
            <span className={`inline-block p-2 rounded-lg ${message.sender === 'user' ? 'bg-carrot-orange text-white' : 'bg-gray-200'}`}>
              {message.text}
            </span>
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>
      <div className="p-4 border-t fixed bottom-0 left-0 right-0 bg-white">
        <div className="flex">
          <input
            type="text"
            value={inputMessage}
            onChange={(e) => setInputMessage(e.target.value)}
            onKeyPress={handleKeyPress}
            className="flex-1 border rounded-l-lg p-2"
            placeholder="메시지를 입력하세요..."
          />
          <button
            onClick={handleSendMessage}
            className="bg-carrot-orange text-white px-4 py-2 rounded-r-lg"
          >
            보내기
          </button>
        </div>
      </div>
    </div>
  );
}