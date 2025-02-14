import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Feed from "./Componenents/Feed";
import Navbar from "./Componenents/Navbar";
import Sidebar from "./Componenents/Sidebar";
import Body from "./Componenents/Body";
import Watch from "./Componenents/Watch";
// import Vediocontainer from "./Componenents/vediocontainer";
import Shorts from "./Componenents/SidebarsComp/Shorts";


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
      },
      {
           path:'/home',
           element:<Feed/>
      },{
        path:'Shorts',
        element:<Shorts/>
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
