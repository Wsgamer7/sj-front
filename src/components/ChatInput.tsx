import { Message } from "@/hooks/useMessages";
import { ImageIcon, SendHorizontal, X } from "lucide-react";
import React, { useState } from "react";

const ChatInput = ({ onSend }: { onSend?: (content: string) => void }) => {
  const [content, setContent] = useState("");

  const handleSend = () => {
    if (!content.trim()) return;

    onSend?.(content);

    setContent("");
  };

  return (
    <div className="border-t p-4">
      <div className="flex items-center gap-2">
        <input
          type="text"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          className="flex-1 bg-transparent outline-none"
          placeholder="Type a message..."
          onKeyDown={(e) => {
            if (e.key === "Enter" && !e.shiftKey) {
              e.preventDefault();
              handleSend();
            }
          }}
        />
        <SendBtn onClick={handleSend} />
      </div>
    </div>
  );
};
const SendBtn = ({ onClick }: { onClick?: () => void }) => {
  return (
    <button
      onClick={() => {
        onClick?.();
      }}
      className="flex h-8 w-8 items-center justify-center rounded-md hover:bg-muted"
    >
      <SendHorizontal className="h-5 w-5" />
    </button>
  );
};

export default ChatInput;
