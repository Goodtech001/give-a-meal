export default function ReadyToScale() {
  return (
    <div className="pt-14">
      <div className="flex flex-col items-center justify-center text-center px-4 py-12">
        <h1 className="text-[#00304C] text-4xl font-bold">
          Ready to Scale Your Impact?
        </h1>

        <p className="text-[#00304C] text-lg max-w-2xl mt-6 leading-relaxed">
          We’re looking for partners who share our vision for a hunger-free
          world. Whether you’re ready to collaborate or simply want to learn
          more about our global mission, we’re here to start the conversation.
          Let’s build a nourished future together.
        </p>

        <button
          className="btn-secondary px-20 py-3 mt-8 rounded-xl text-white cursor-pointer 
             transition-transform transition-colors duration-300 ease-in-out 
              hover:scale-105"
        >
          Contact Us
        </button>
      </div>
    </div>
  );
}
