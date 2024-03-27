const Sidebar = () => {
  return (
    <section className="w-[300px] border-r p-4 hidden sm:block">
      <h2 className="text-center font-bold text-lg">Chat with GPT</h2>
      <div className="mt-4 flex gap-2 flex-col">
        <button
          type="button"
          className="w-full p-2 rounded-md bg-blue-600 text-white"
          tabIndex="0"
        >
          Active Chat
        </button>
        <button
          type="button"
          className="w-full p-2 rounded-md border"
          tabIndex="0"
        >
          Inactive Chat
        </button>
      </div>
    </section>
  );
};

export default Sidebar;
