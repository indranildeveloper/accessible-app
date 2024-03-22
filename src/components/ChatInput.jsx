import { useContext, useEffect, useState } from "react";
import { UserContext } from "../context/UserContext";
import { useRef } from "react";

const ChatInput = () => {
  const [inputValue, setInputValue] = useState("");
  const { setChatMessages } = useContext(UserContext);

  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setChatMessages((prevChat) => [
      ...prevChat,
      { id: Math.random(), message: inputValue },
    ]);
    setInputValue("");
  };

  return (
    <section className="flex items-center justify-center h-24 px-4">
      <form className="flex items-end gap-2 w-full" onSubmit={handleSubmit}>
        <div className="flex flex-col flex-1 flex-grow">
          <label htmlFor="chat-input">Enter message:</label>
          <input
            ref={inputRef}
            id="chat-input"
            type="text"
            className="border mt-1 px-2 h-10 rounded-md outline-blue-600"
            placeholder="example hello how are you?"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            tabIndex="0"
            aria-label="Write messages here to send."
          />
        </div>
        <button
          type="submit"
          className="text-sm font-semibold px-4 h-10 rounded-md bg-blue-600 text-white hover:bg-blue-500 transition-all duration-300 disabled:bg-opacity-50 disabled:cursor-not-allowed"
          tabIndex="0"
          disabled={inputValue === ""}
          aria-label="Send Message"
          aria-describedby="Send Message Button"
        >
          Send
        </button>
      </form>
    </section>
  );
};

export default ChatInput;
