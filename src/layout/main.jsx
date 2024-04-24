import React from "react";
import { Outlet } from "react-router-dom";
import Nav from "../components/nav";


function Main(){
    return(
        <div className="main">
            <Nav />
            <Outlet />
        </div>
    )
}

export default Main;