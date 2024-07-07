const Navbar = () => {
  return (
    <div className="flex items-center justify-between h-[100px] px-[200px]">
        <img src="/logo1.png" alt="" height={200} width={200} className="cursor-pointer"/>
        <div className="flex items-center justify-evenly cursor-pointer">
            <span className="mr-3 text-[18px]">Home</span>
            <span className="mr-3  text-[18px]">About Us</span>
            <span className="mr-3  text-[18px]">Contact Us</span>
        </div>
    </div>
  )
}

export default Navbar