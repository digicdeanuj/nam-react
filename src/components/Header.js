import { LOGO_URL } from "../utils/constants";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { UseSelector, useSelector } from "react-redux";

const Header = () => {
    const [btnName, setBtnName] = useState('Login');
    const onlineStatus = useOnlineStatus();
    const data = useContext(UserContext);
    const cartItems = useSelector((store) => store.cart.items);
    return (
        <div className="header">
            <div className="logoContainer">
                <img className="logo" src={LOGO_URL}></img>
            </div>
            <div className="nav-items">
                <ul>
                    <li>
                        Online Status: {onlineStatus ? "🟢" : "🔴"}
                    </li>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                    <li>
                        <Link to="/contact">Contact</Link>
                    </li>
                    <li>
                        <Link to="/grocery">Grocery</Link>
                    </li>
                    <li className="">Cart- {cartItems.length}</li>
                    <button className="login-btn" onClick={() => {
                        btnName === "Login" ? setBtnName("Logout") : setBtnName("Login");
                    }}>{btnName}</button>
                    <li>Hi, {data.loggedInUser}</li>

                </ul>
            </div>
        </div>
    )
};
export default Header;