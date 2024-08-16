import React, { useState } from 'react';
import { FaStar, FaRegStar } from 'react-icons/fa';

const Inbox = () => {
  const [selectedChat, setSelectedChat] = useState(null);

  const chats = Array.from({ length: 20 }, (_, index) => ({
    id: index + 1,
    name: `User ${index + 1}`,
    messages: [
      `Message ${index + 1} - 1`,
      `Message ${index + 1} - 2`,
      `Message ${index + 1} - 3`,
    ],
  }));

  return (
    <div className="flex h-screen w-full">
      <div className={`w-full bg-gray-100 p-4 overflow-y-auto border-r border-gray-200 ${selectedChat ? 'w-3/4' : 'w-full'}`}>
        <h2 className="text-xl font-bold mb-4">Inbox</h2>
        <ul>
          {chats.map(chat => (
            <li
              key={chat.id}
              className="cursor-pointer mb-4 p-2 rounded hover:bg-gray-200"
              onClick={() => setSelectedChat(chat)}
            >
              <div className="flex items-center justify-between">
                <span className="text-lg font-semibold">{chat.name}</span>
                <FaRegStar className="text-yellow-500" />
              </div>
            </li>
          ))}
        </ul>
      </div>

      {selectedChat && (
        <div className="w-3/4 p-4 overflow-y-auto">
          <h2 className="text-xl font-bold mb-4">Chat with {selectedChat.name}</h2>
          <div>
            {selectedChat.messages.map((msg, index) => (
              <div key={index} className="flex items-center justify-between mb-2 p-2 border rounded">
                <p>{msg}</p>
                <FaStar className="text-yellow-500" />
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Inbox;
