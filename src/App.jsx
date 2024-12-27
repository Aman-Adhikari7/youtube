import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Feed from "./Componenents/Feed";
import Navbar from "./Componenents/Navbar";
import Sidebar from "./Componenents/Sidebar";
import Body from "./Componenents/Body";
import Watch from "./Componenents/Watch";


const appRouter= createBrowserRouter([
  {
    path:'/',
    element:<Body/>,
    children:[
      {
        path:'/',
        element:<Feed/>
      },
      {
         path:"/watch",
         element:<Watch/>
      }
    ]
  }
])




const App = () => {
  return (
    <div className="relative flex flex-col">
      
      <Navbar/>
      <RouterProvider router={appRouter}/>
    

  </div>
  );
};

export default App;
