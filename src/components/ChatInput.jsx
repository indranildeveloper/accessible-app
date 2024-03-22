import { useState } from "react";

const ChatInput = () => {
  const [inputValue, setInputValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <section className="flex items-center justify-center h-24 px-4">
      <form className="flex items-end gap-2 w-full" onSubmit={handleSubmit}>
        <div className="flex flex-col flex-1 flex-grow">
          <label htmlFor="chat-input">Enter message:</label>
          <input
            id="chat-input"
            type="text"
            className="border mt-1 px-2 h-10 rounded-md outline-blue-600"
            placeholder="e.g. hello how are you?"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
        </div>
        <button
          type="submit"
          className="text-sm font-semibold px-4 h-10 rounded-md bg-blue-600 text-white hover:bg-blue-500 transition-all duration-300"
        >
          Send
        </button>
      </form>
    </section>
  );
};

export default ChatInput;
