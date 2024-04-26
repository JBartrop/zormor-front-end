import React, { useEffect } from "react";
import {createBrowserRouter, RouterProvider} from "react-router-dom"
import Main from "./layout/main";
import Create, { createaction } from "./pages/createpage";
import Dashboard from "./pages/dashboard";
import Error from "./pages/errorpage";
import Postpage, { postpageloader } from "./pages/postpage";

function App() {

  // const getUser = () => {
  //   fetch("/poster")
  //   .then(res => res.json())
  //   .then(json => console.log(json))
  // }

  // useEffect(() => {
  //   getUser()
  // }, [])

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
          element: <Create />,
          action: createaction
        },
        {
          index:true,
          path:"post/:id",
          element: <Postpage />
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
