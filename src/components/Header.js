import {LOGO_URL} from "../../src/utils/constants";
import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {

    const [btnName, setBtnName ] = useState("Login")

    return (
        <div className="flex justify-between bg-pink-50">
            <div className="logocontainer">
                <img className="w-24"
                src= {LOGO_URL} 
                alt="logo"/>
            </div>
            <div className="flex items-center">
                <ul className="flex p-4 m-4">
                    <li className="px-4"><Link to="/">Home</Link></li>
                    <li className="px-4"><Link to="/about">About Us</Link></li>
                    <li className="px-4"><Link to ="/contact">Contact Us</Link></li>
                    <li className="px-4"><Link to ="/grocery">Grocery</Link></li>

                    <li className="px-4">Cart</li>
                    <button className="login-btn"
                    onClick = {() => {setBtnName("Logout")}}>{btnName}</button>
                </ul>
            </div>
        </div>
    )
}

export default Header;