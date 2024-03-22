import { useContext } from "react";
import { UserContext } from "../context/UserContext";

const ChatWindow = () => {
  const { chatMessages } = useContext(UserContext);

  return (
    <section
      className="h-[calc(100%-6rem)] border-b w-full p-4 overflow-y-auto flex"
      aria-labelledby="textLabel"
    >
      <p
        id="textLabel"
        className="sr-only"
        aria-label="Messages List"
        tabIndex="1"
      >
        Messages List
      </p>
      {chatMessages.length > 0 ? (
        <ul
          className="flex flex-col gap-2 mt-auto justify-end items-end w-full"
          aria-describedby="Chat message list"
        >
          {chatMessages.map((message) => (
            <li
              key={message.id}
              className="border max-w-96 mt-auto rounded-md px-4 py-2"
            >
              <p tabIndex="0">{message.message}</p>
            </li>
          ))}
        </ul>
      ) : (
        <div className="flex items-center justify-center text-center w-full">
          <h1 className="text-2xl" tabIndex="0">
            Your messages are empty.
          </h1>
        </div>
      )}
    </section>
  );
};

export default ChatWindow;
