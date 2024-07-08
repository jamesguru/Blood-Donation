import { FaTrash } from "react-icons/fa";
import { DataGrid } from '@mui/x-data-grid';

const Donors = () => {
  
    const columns = [
      { field: "id", headerName: "ID", width: 90 },
      { field: "name", headerName: "Name", width: 150 },
      { field: "address", headerName: "Address", width: 150 },
      { field: "bloodType", headerName: "BloodType", width: 130 },
      
      
      {
        field: "delete",
        headerName: "Delete",
        width: 150,
        renderCell: () => {
          return (
            <>
              <FaTrash
                className="text-red-500 cursor-pointer m-2"
               
              />
            </>
          );
        },
      },
    ];
  
  const rows = [
    { id: 1, name: "John Doe", address: "123 Main St, Anytown, USA", bloodType: "A+" },
    { id: 2, name: "Jane Smith", address: "456 Oak St, Somecity, USA", bloodType: "B+" },
    { id: 3, name: "Tom Johnson", address: "789 Pine St, Othercity, USA", bloodType: "O-" },
    { id: 4, name: "Emily Davis", address: "321 Maple St, Anothertown, USA", bloodType: "AB+" },
    { id: 5, name: "Michael Brown", address: "654 Elm St, Anycity, USA", bloodType: "A-" },
    { id: 6, name: "Sarah Wilson", address: "987 Cedar St, Thistown, USA", bloodType: "B-" },
    { id: 7, name: "David Lee", address: "741 Spruce St, Thatcity, USA", bloodType: "O+" },
    { id: 8, name: "Laura White", address: "852 Birch St, Someothertown, USA", bloodType: "AB-" },
    { id: 9, name: "Chris Harris", address: "963 Walnut St, Yourcity, USA", bloodType: "A+" },
    { id: 10, name: "Patricia Clark", address: "159 Chestnut St, Mytown, USA", bloodType: "O-" },
  ];
  return (
    <div className="w-[70vw]">
      <div className="flex items-center justify-between m-[30px]">
        <h1 className="m-[20px] text-[20px]">All Donors</h1>
      
          <button className="bg-[#1e1e1e] text-white p-[10px] cursor-pointer">
            New Donor
          </button>
    
      </div>
      <div className="mx-[30px]">
      <DataGrid columns={columns} rows={rows} />;
      </div>
    </div>
  );
};

export default Donors;
