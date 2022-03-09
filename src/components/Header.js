import 'react-bootstrap'
import Popup from "./Popup";
import {useState} from "react";

const port = 3001;
const full = "http://localhost:" + port + "/"

const Header = ({ title }) => {
    console.log("u: " + localStorage.getItem('username'))
    console.log("p: " + localStorage.getItem('password'))
    const [showPopup, setShowPopup] = useState(false);
    const togglePopup = () => {
        if(loginState === "Logout" && localStorage.getItem('username') !== "" && localStorage.getItem('password') !== "")
        {
            localStorage.setItem('username', '')
            localStorage.setItem('password', '')
            localStorage.setItem('cart', "")
            window.location.reload()
        }
        else
        {
            setShowPopup(!showPopup);
        }

    }

    let loginState = ""
    if(localStorage.getItem('username') !== "")
    {
        loginState = "Logout";
    }
    else
    {
        loginState = "Login";
    }

    
    let privateUrl = "http://localhost:3001/private/" + localStorage.getItem('username')
    return (
        <header className="header">
            <div className="wrap">
                <header className="logo">
                    <h1 className="logo-title">

                        <a href="http://localhost:3001/home" className="logo-link" style={{marginLeft: "15px"}}>
                            BookHook
                        </a>

                    </h1>

                </header>

                {/* <a style={{fontSize: "14px", marginTop: "65px"}} href={publicUrl}>{localStorage.getItem('username') !== "" ? localStorage.getItem('username') : ""}</a> */}
                <nav className="menu">
                    <ul className="menu-list">
                    <li className="menu-item is-active menu-item--play">
                            <a href='http://localhost:3001/home' className="menu-link">
                                Home
                            </a>
                        </li>
                        <li className="menu-item is-active menu-item--play">
                            <a href='http://localhost:3001/store' className="menu-link">
                                Store
                            </a>
                        </li>
                        <li className="menu-item is-active menu-item--play">
                            <a href="#" className="menu-link" onClick={togglePopup}>
                                {loginState}
                            </a>
                        </li>
                        <li className="menu-item is-active menu-item--play">
                            <a href={privateUrl} className="menu-link">
                                Account
                            </a>
                        </li>

                    </ul>
                </nav>
                {showPopup ?
                    <Popup
                        text='Login'
                        closePopup={togglePopup}
                    />
                    : null
                }
            </div>
        </header>
    );
}

export default Header