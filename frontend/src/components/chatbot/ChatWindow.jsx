import { useEffect, useRef } from "react";

import ChatMessage from "./ChatMessage";
import EmptyState from "./EmptyState";
import TypingIndicator from "./TypingIndicator";

function ChatWindow({ messages, loading, onSendMessage }) {
  const bottomRef = useRef(null);

  // Automatically scroll to the latest message
  useEffect(() => {
    bottomRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  }, [messages, loading]);

  // Empty chat state
  if (messages.length === 0 && !loading) {
    return (
      <div className="h-full overflow-y-auto">
        <div className="mx-auto flex min-h-full w-full max-w-3xl items-center justify-center px-4 py-12 sm:px-6">
          <EmptyState
            onSelectQuestion={onSendMessage}
          />
        </div>
      </div>
    );
  }

  return (
    <div className="h-full overflow-y-auto">
      <div className="mx-auto w-full max-w-3xl px-4 py-8 sm:px-6">

        {/* Messages */}
        <div className="flex flex-col gap-8">

          {messages.map((message, index) => (
            <ChatMessage
              key={index}
              message={message}
              isStreaming={
                loading &&
                index === messages.length - 1 &&
                message.role === "assistant"
              }
            />
          ))}

          {/* Typing indicator */}
          {loading &&
            messages[messages.length - 1]?.role === "assistant" &&
            messages[messages.length - 1]?.content === "" && (
              <TypingIndicator />
            )}

          {/* Auto-scroll target */}
          <div ref={bottomRef} />

        </div>

      </div>
    </div>
  );
}

export default ChatWindow;