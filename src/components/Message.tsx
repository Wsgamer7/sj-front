import { Message, MessageType } from "@/hooks/useMessages";
import { cn } from "@/lib/utils";
import Markdown from "markdown-to-jsx";
const SingleMessageAI = ({
  message,
  className,
}: {
  message: Message;
  className?: string;
}) => {
  return (
    <div className={cn("flex gap-3 p-4 rounded-md", className)}>
      <div className="flex h-8 w-8 shrink-0 select-none items-center justify-center rounded-md border bg-background shadow">
        <span className="text-sm font-medium">AI</span>
      </div>
      <div className="flex-1 space-y-2">
        <div className="prose prose-sm dark:prose-invert">
          <Markdown>{message.content}</Markdown>
        </div>
      </div>
    </div>
  );
};

const SingleMessageUser = ({
  message,
  className,
}: {
  message: Message;
  className?: string;
}) => {
  return (
    <div className={cn("flex gap-3 p-4 rounded-md", className)}>
      <div className="flex-1 space-y-2">
        <div className="prose prose-sm dark:prose-invert">
          <Markdown>{message.content}</Markdown>
        </div>
      </div>
    </div>
  );
};

const Messages = ({
  messagesData,
  className,
}: {
  messagesData: Message[];
  className?: string;
}) => {
  if (messagesData.length === 0) {
    return <NoMessagesUI className={className} />;
  }
  return (
    <div className={cn("flex flex-col gap-4 p-4 overflow-y-auto", className)}>
      {messagesData.map((message, index) => (
        <div
          key={index}
          className={cn(
            "w-full",
            message.type === MessageType.User
              ? "flex justify-end"
              : "flex justify-start"
          )}
        >
          <div
            className={cn(
              "max-w-[80%]",
              message.type === MessageType.User
                ? "flex-row-reverse"
                : "flex-row"
            )}
          >
            {message.type === MessageType.User ? (
              <SingleMessageUser message={message} className="bg-muted" />
            ) : (
              <SingleMessageAI message={message} className="bg-muted" />
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

const NoMessagesUI = ({ className }: { className?: string }) => {
  return (
    <div
      className={cn(
        "flex h-full w-full justify-center items-center",
        className
      )}
    >
      <div className="text-center text-sm text-muted-foreground">
        无聊天记录
      </div>
    </div>
  );
};

export default Messages;
