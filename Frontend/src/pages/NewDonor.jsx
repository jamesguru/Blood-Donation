const NewDonor = () => {
  return (
    <div className="m-[30px] bg-[#fff] p-[20px]">
      <h2 className="font-semibold">New Donor</h2>
      <div className="flex">
        <div className="m-[20px]">
          <div className="flex flex-col my-[20px]">
            <label htmlFor="">Name</label>
            <input
              type="text"
              name="name"
              placeholder="James Kruger"
              className="border-2 border-[#555] border-solid p-[10px] w-[300px]"
            />
          </div>
          <div className="flex flex-col my-[20px]">
            <label htmlFor="">Address</label>
            <input
              type="text"
              name="address"
              placeholder="Michigan, USA"
              className="border-2 border-[#555] border-solid p-[10px] w-[300px]"
            />
          </div>
          <div className="flex flex-col my-[20px]">
            <label htmlFor="">Tel</label>
            <input
              type="text"
              name="address"
              placeholder="+123 568 908"
              className="border-2 border-[#555] border-solid p-[10px] w-[300px]"
            />
          </div>
          <div className="flex flex-col my-[20px]">
            <label htmlFor="">Blood Group</label>
            <input
              type="text"
              name="bloodtype"
              placeholder="AB+"
              className="border-2 border-[#555] border-solid p-[10px] w-[300px]"
            />
          </div>
          <div className="flex flex-col my-[20px]">
            <label htmlFor="">Email</label>
            <input
              type="text"
              name="email"
              placeholder="jameskruger@gmail.com"
              className="border-2 border-[#555] border-solid p-[10px] w-[300px]"
            />
          </div>

          
        </div>
        <div className="m-[20px]">
          <div className="flex flex-col my-[20px]">
            <label htmlFor="">Weight</label>
            <input
              type="Number"
              name="weight"
              placeholder="200 pounds"
              className="border-2 border-[#555] border-solid p-[10px] w-[300px]"
            />
          </div>
          
          <div className="flex flex-col my-[20px]">
            <label htmlFor="">Date</label>
            <input
              type="date"
              name="date"
              placeholder="20/06/2024"
              className="border-2 border-[#555] border-solid p-[10px] w-[300px]"
            />
          </div>
          <div className="flex flex-col my-[20px]">
            <label htmlFor="">Diseases</label>
            <textarea
              type="text"
              name="disease"
              placeholder="Hypertension"
              className="border-2 border-[#555] border-solid p-[10px] w-[300px]"
            />
          </div>
          <button className="bg-[#1e1e1e] cursor-pointer text-white p-[10px] w-[300px]">
            Create
          </button>
        </div>
      </div>
    </div>
  );
};

export default NewDonor;
