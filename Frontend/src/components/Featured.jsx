const Featured = () => {
  return (
    <div className="flex px-[200px] mt-[100px]">
      <div className="bg-gray-100 h-[400px] w-[500px] z-10 mt-[20px] ">
        <div className="m-10">
          <h3 className="text-[25px]">Who We Are?</h3>
          <hr className="bg-red-500 w-[100px] h-[3px] my-[5px]" />
          <span className="mt-[20px]">
            BloodBridge is for public donation center with blood donation
            members in the changing health care system.
          </span>
          <ul>
            <li className="mt-3">1. Specialist blood donors and clinical supervision.</li>
            <li className="mt-3">2. Increasing communication with our members.</li>
            <li className="mt-3">3. High quality assessment, diagnosis and treatment.</li>
            <li className="mt-3">4. Examine critically to ensure alignment.</li>
            <li className="mt-3">5. The extra care of a multi-disciplinary team.</li>
          </ul>
        </div>
      </div>
      <div className="h-[450px] w-[500px] ml-[-30px]">
        <video
          src="/video.mp4"
          height="450px"
          width="500px"
          loop
          muted
          autoPlay
        />
      </div>
    </div>
  );
};

export default Featured;
