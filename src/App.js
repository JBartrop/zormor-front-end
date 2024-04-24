import React from "react";
import {createBrowserRouter, RouterProvider} from "react-router-dom"
import Main from "./layout/main";
import Create from "./pages/createpage";
import Dashboard from "./pages/dashboard";
import Error from "./pages/errorpage";

function App() {

  // const getUser = () => {
  //   fetch("http://localhost:3500/")
  //   .then(res => res.json())
  //   .then(json => console.log(json))
  // }

  const router = createBrowserRouter([
    {
      path:"/",
      element: <Main />,
      children: [
        {
          index:true,
          path:"/",
          element: <Dashboard />
        },
        {
          index:true,
          path:"create",
          element: <Create />
        }
      ]
    },
    {
      path:"*",
      element: <Error />
    }
  ])

  return (
    <div className="App">
    <RouterProvider router={router} />
    </div>
  );
}

export default App;
