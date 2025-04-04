import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
export enum MessageRole {
  User = 1,
  AI = 2,
}
export interface Message {
  content: string;
  role: MessageRole;
}

export default function useMessages(chatId?: string) {
  const [messages, setMessages] = useState<Message[]>([]);

  useEffect(() => {
    if (!chatId) return;
    const fetchMessages = async () => {
      const messages = await getMessages(chatId);
      setMessages(messages);
    };
    fetchMessages();
  }, [chatId]);
  const sendMessage = async (content: string) => {
    if (!chatId) return;
    const newMessages = [
      ...messages,
      { id: uuidv4(), content, role: MessageRole.User },
    ];
    setMessages(newMessages);
    const response = await sendMessage(message);
    const newMessages = [...messages, response];
    setMessages(newMessages);
  };

  return {
    messages,
    setMessages,
    sendMessage,
  };
}
