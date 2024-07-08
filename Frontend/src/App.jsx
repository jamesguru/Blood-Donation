import {createBrowserRouter,Outlet, RouterProvider} from "react-router-dom"
import Home from "./pages/Home";
import Admin from "./pages/Admin";
import Login from "./pages/Login";
import Menu from "./pages/Menu";
import Donors from "./pages/Donors";
function App() {

  const Layout = () =>{

    return (
      <div className="flex">
          <div>
            <Menu />
          </div>
          <div>
            <Outlet />
          </div>
      </div>
    )
  }

  const router = createBrowserRouter([
    {
      path:"/admin",
      element:<Layout />,
      children:[
        {
          path:"/admin",
          element: <Admin />
        },
        {
          path:"/admin/donors",
          element:<Donors />
        }
        
      ]
    },
    {
      path:"/",
      element:<Home />
    },
    {
      path:"/login",
      element:<Login />
    }
  ])

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
