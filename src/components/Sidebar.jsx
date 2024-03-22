const Sidebar = () => {
  return (
    <section className="w-[300px] border-r p-2">
      <h2 className="text-center font-bold text-lg">Chat with GPT</h2>
      <div className="mt-4 flex gap-2 flex-col">
        <button
          type="button"
          className="w-full p-2 rounded-md bg-blue-600 text-white"
        >
          Active Chat
        </button>
        <button type="button" className="w-full p-2 rounded-md border">
          Inactive Chat
        </button>
      </div>
    </section>
  );
};

export default Sidebar;
