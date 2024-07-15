const Contact = () => {
  return (
    <div className="flex items-center justify-center  h-auto my-[100px]">
      <div className="flex flex-col bg-gray-100 w-[50%] h-auto p-[50px]">
        <span className="text-[20px] my-[20px]">
          Do you want to donate blood? Fill in the information.
        </span>
        <label htmlFor="" className="text-[18px] mt-[10px]">
          Name
        </label>
        <input
          type="text"
          className="w-[350px] p-[15px]"
          placeholder="John Doe"
        />

        <label htmlFor="" className="text-[18px] mt-[10px]">
          Telephone
        </label>
        <input
          type="Number"
          className="w-[350px] p-[15px]"
          placeholder="+234 678 908"
        />
        <label htmlFor="" className="text-[18px] mt-[10px]">
          Email
        </label>
        <input
          type="Number"
          className="w-[350px] p-[15px]"
          placeholder="jamesdoe@gmail.com"
        />
        <label htmlFor="" className="text-[18px] mt-[10px]">
          Weight
        </label>
        <input
          type="Number"
          className="w-[350px] p-[15px]"
          placeholder="50kg"
        />
        <label htmlFor="" className="text-[18px] mt-[10px]">
          Age
        </label>
        <input
          type="Number"
          className="w-[350px] p-[15px]"
          placeholder="30 years"
        />
        <label htmlFor="bloodGroup">Select Blood Group:</label>
        <select id="bloodGroup" name="bloodGroup"  className="w-[350px] p-[15px]">
          <option value="A+">A+</option>
          <option value="A-">A-</option>
          <option value="B+">B+</option>
          <option value="B-">B-</option>
          <option value="AB+">AB+</option>
          <option value="AB-">AB-</option>
          <option value="O+">O+</option>
          <option value="O-">O-</option>
        </select>
        <label htmlFor="" className="text-[18px] mt-[10px]">
          Do you have any diseases?
        </label>
        <textarea
          type="Number"
          className="w-[350px] p-[15px]"
          placeholder="I have a hypertension."
        />
        <button className="bg-red-500 p-3 mt-3 w-[350px] cursor-pointer text-white">
          Submit
        </button>
      </div>
    </div>
  );
};

export default Contact;
