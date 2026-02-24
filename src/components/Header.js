import {LOGO_URL} from "../../src/utils/constants";
import { useState, useContext} from "react";
import { Link } from "react-router-dom";
import userContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {

    const [btnName, setBtnName ] = useState("Login")
    const {loggedInUser} = useContext(userContext)

    //subscribing to the store using the selector hook
    const cartItems = useSelector((store) => store.cart.items)    

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

                    <li className="px-4"><Link to ="/cart">Cart({cartItems.length})</Link></li>

                    <button className="login-btn"
                    onClick = {() => {setBtnName("Logout")}}>{btnName}</button>
                    <li className="px-4 font-bold ">{loggedInUser}</li>

                </ul>
            </div>
        </div>
    )
}

export default Header;