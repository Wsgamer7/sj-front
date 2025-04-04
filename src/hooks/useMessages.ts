import { MessageApi } from "@/api";
import apiClient from "@/lib/apiConfig";
import { useEffect, useState } from "react";
import { toast } from "sonner";
function getRandomInt() {
  return Math.floor(Math.random() * (10000 - 0 + 1)) + 0;
}
import { ModelsMessageModel } from "@/api/models/ModelsMessageModel";
export enum MessageType {
  User = 1,
  AI = 2,
}
export interface Message {
  id: number;
  content: string;
  type: MessageType;
}
const messageApi = new MessageApi(apiClient);

export default function useMessages(conversationId?: number) {
  const [messages, setMessages] = useState<Message[]>([]);

  useEffect(() => {
    if (!conversationId) return;
    const fetchMessages = async () => {
      const res = await messageApi.messageGetHistoryMsgPost({
        data: {
          conversationID: conversationId,
        },
      });
      if (res.code) {
        toast.error(res.msg);
      }
      setMessages(
        res.data?.message_list?.map((item) => ({
          id: item.id ?? 0,
          content: item.content ?? "",
          type: item.message_type ?? MessageType.User,
        })) ?? []
      );
    };
    fetchMessages();
  }, [conversationId]);
  const sendMessage = async (content: string) => {
    if (!conversationId) return;
    const newMessages = [
      ...messages,
      { id: getRandomInt(), content, type: MessageType.User },
    ];
    setMessages(newMessages);
    messageApi
      .messageSendMsgPost({
        data: {
          conversationID: conversationId,
          content,
        },
      })
      .then((res) => {
        if (res.code) {
          toast.error(res.msg);
        }
        setMessages((prev) => [
          ...prev,
          {
            id: getRandomInt(),
            content: res.data?.message ?? "",
            type: MessageType.AI,
          },
        ]);
      });
  };

  return {
    messages,
    setMessages,
    sendMessage,
  };
}
