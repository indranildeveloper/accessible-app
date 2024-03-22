const ChatWindow = () => {
  return (
    <section className="h-[calc(100%-6rem)] border-b w-full p-4 overflow-y-auto flex">
      {/* <div>
        <h1 className="text-2xl">Your messages are empty</h1>
      </div> */}

      <ul className="flex flex-col gap-2 mt-auto">
        <li className="border max-w-60 mt-auto rounded-md p-2">
          <p>hello how are you?</p>
        </li>
        <li className="border max-w-60 mt-auto rounded-md p-2">
          <p>hello how are you 2?</p>
        </li>
        <li className="border max-w-60 mt-auto rounded-md p-2">
          <p>hello how are you 3?</p>
        </li>
      </ul>
    </section>
  );
};

export default ChatWindow;
