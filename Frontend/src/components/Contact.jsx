const Contact = () => {
  return (
    <div className="flex items-center justify-center  h-[100vh]">
      <div className="flex flex-col bg-gray-100 w-[50%] h-[500px] p-[50px]">
        <label htmlFor="" className="text-[18px] mt-[10px]">
          First Name
        </label>
        <input type="text" className="w-[350px] p-[15px]" placeholder="John" />
        <label htmlFor="" className="text-[18px] mt-[10px]">
          Last Name
        </label>
        <input type="text" className="w-[350px] p-[15px]" placeholder="Doe" />
        <label htmlFor="" className="text-[18px] mt-[10px]">
          Telephone
        </label>
        <input
          type="Number"
          className="w-[350px] p-[15px]"
          placeholder="+234 678 908"
        />
        <button className="bg-red-500 p-3 mt-3 w-[350px] cursor-pointer text-white">
          Submit
        </button>
      </div>
    </div>
  );
};

export default Contact;
