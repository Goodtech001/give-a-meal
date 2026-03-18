export default function ReadyToScale() {
  return (
    <div className="pt-14 relative md:px-0 px-1">
      <div className="flex flex-col items-center justify-center text-center px-4 py-12">
        <h1 className="text-[#00304C] text-4xl font-bold">
          Ready to Scale Your Impact?
        </h1>

        <p className="text-[#00304C] text-lg max-w-2xl mt-6 leading-relaxed">
          We&apos;re looking for partners who share our vision for a hunger-free
          world. Whether you&apos;re ready to collaborate or simply want to
          learn more about our global mission, we&apos;re here to start the
          conversation. Let&apos;s build a nourished future together.
        </p>

        <button
          className="btn-secondary w-full md:w-auto md:px-20 py-4 mt-8 rounded-xl text-lg text-white cursor-pointer 
             transition-transform transition-colors duration-300 ease-in-out 
             hover:scale-105"
        >
          Contact Us
        </button>

        <div className="absolute top-25 left-10 w-40 h-40 bg-blue-600 rounded-full blur-3xl opacity-20"></div>
        <div className="absolute bottom-10 right-0 w-40 h-40 bg-blue-400 rounded-full blur-2xl opacity-10"></div>
      </div>
    </div>
  );
}
