const Renting = () => {
  return (
    <div>
      <div className="bg-tower bg-cover bg-center w-full h-96 flex justify-start items-center px-4 md:px-16">
        <div className="bg-[rgba(0,0,0,0.5)] backdrop-blur-md text-white w-full max-w-md md:max-w-[400px] rounded-2xl p-4 md:p-6">
          <p className="text-xl md:text-2xl font-bold">
            Own commercial parking? Earn Money By Hosting
          </p>
          {/* renting */}
          <p className="text-xs md:text-sm mt-4 mb-3">
            Earn money by hosting your parking space. Start renting it out today
            and generate passive income.
          </p>
          <button className="bg-[#FF3D00] hover:bg-[#e84210] transition rounded-md px-4 py-3">
            Start Renting
          </button>
        </div>
      </div>
    </div>
  );
};

export default Renting;
