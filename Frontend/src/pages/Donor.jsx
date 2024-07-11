const Donor = () => {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="m-[20px] p-[20px] h-[80vh] w-[450px] shadow-lg">
      <h2 className="font-semibold">Donor</h2>
        <div className="flex flex-col my-[20px]">
          <label htmlFor="">Name</label>
          <input
            type="text"
            name="name"
            placeholder="James Kruger"
            className="border-b-2 border-b-[#555] border-solid outline-none p-[10px] w-[300px]"
          />
        </div>
        <div className="flex flex-col my-[20px]">
          <label htmlFor="">Address</label>
          <input
            type="text"
            name="address"
            placeholder="Michigan, USA"
            className="border-b-2 border-b-[#555] outline-none border-solid p-[10px] w-[300px]"
          />
        </div>
        <div className="flex flex-col my-[20px]">
          <label htmlFor="">Tel</label>
          <input
            type="text"
            name="tel"
            placeholder="+123 568 908"
            className="border-b-2 border-b-[#555] outline-none border-solid p-[10px] w-[300px]"
          />
        </div>
        <div className="flex flex-col my-[20px]">
          <label htmlFor="">Blood Group</label>
          <input
            type="text"
            name="bloodtype"
            placeholder="AB+"
            className="border-b-2 border-b-[#555] outline-none border-solid p-[10px] w-[300px]"
          />
        </div>
        <div className="flex flex-col my-[20px]">
          <label htmlFor="">Email</label>
          <input
            type="text"
            name="email"
            placeholder="jameskruger@gmail.com"
            className="border-b-2 border-b-[#555] outline-none border-solid p-[10px] w-[300px]"
          />
        </div>
      </div>
      <div className="p-[20px] h-[80vh] w-[450px] shadow-lg m-[20px]">
        <div className="flex flex-col my-[20px]">
          <label htmlFor="">Weight</label>
          <input
            type="number"
            name="weight"
            placeholder="200 pounds"
            className="border-b-2 border-b-[#555] outline-none border-solid p-[10px] w-[300px]"
          />
        </div>

        <div className="flex flex-col my-[20px]">
          <label htmlFor="">Date</label>
          <input
            type="date"
            name="date"
            placeholder="20/06/2024"
            className="border-b-2 border-b-[#555] outline-none border-solid p-[10px] w-[300px]"
          />
        </div>
        <div className="flex flex-col my-[20px]">
          <label htmlFor="">Diseases</label>
          <textarea
            type="text"
            name="disease"
            placeholder="Hypertension"
            className="border-b-2 border-b-[#555] outline-none border-solid p-[10px] w-[300px]"
          />
        </div>
        <button className="bg-[#444242] cursor-pointer text-white p-[10px] w-[300px]">
          Update
        </button>
      </div>
    </div>
  );
};

export default Donor;