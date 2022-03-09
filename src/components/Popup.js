import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import './componentStyling/popupStyle.css'

const Popup = ({text, closePopup}) => {
    const [curFunc, setCurFunc] = useState("login");

    const [curHighestIndex, setCurHighestIndex] = useState();

    const [inputUser, setInputUser] = useState("");
    const [inputPass, setInputPass] = useState("");


    const [regUser, setRegUser] = useState("");
    const [regPass, setRegPass] = useState("");
    const [regFirst, setRegFirst] = useState("");
    const [regLast, setRegLast] = useState("");
    const [regEmail, setRegEmail] = useState("");


    const [searUser, setSearUser] = useState([]);
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);

    const [allUsers, setAllUsers] = useState();


    useEffect(() => {
        let url = 'https://th5xc3ohk1.execute-api.us-west-1.amazonaws.com/testing/user/getAll'
        let encode = window.btoa("admin:admin");
        fetch(url, {
            headers: {
                'Authorization':  'Basic ' + encode }}
        )
            .then(res => res.json())
            .then(
                (result) => {
                    setIsLoaded(true);
                    setAllUsers(result);
                },
                (error) => {
                    setIsLoaded(true);
                    setError(error);
                }
            )
            
            let url2 = "https://th5xc3ohk1.execute-api.us-west-1.amazonaws.com/testing/user/gethighestindex"
            fetch(url2)
                .then(res => res.json())
                .then(
                    (result) => {
                        setIsLoaded(true);
                        setCurHighestIndex(result);
                    },
                    (error) => {
                        setIsLoaded(true);
                        setError(error);
                    }
                )
    }, [])

    function changeForm() {
        if(curFunc === "login")
            setCurFunc("register")
        if(curFunc === "register")
            setCurFunc("login")
    }

    function checkIfUser() {
        let match;



        console.log("LOGIN ATTEMPT : " + allUsers)
        for(let i = 0; i < allUsers.length; i++)
        {
            console.log(i + ":  " + allUsers[i].username)
            if(inputUser === allUsers[i].username)
            {
                // STILL NEED TO CHECK FOR PASSWORD CORRECTION
                match = true;
            }
        }



        return match;
    }


    function loginUser() {
        function check() { checkIfUser(); return checkIfUser();}

        if(check() === true) {
            localStorage.setItem('username', inputUser)
            localStorage.setItem('password', inputPass)
            console.log("cur Username : " + localStorage.getItem("username"))
            console.log("cur Password : " + localStorage.getItem("password"))
            localStorage.setItem('cart', "")
            closePopup()
        }



    }


    function registerUser() {
        
        let f_id = curHighestIndex
        let f_firstname = regFirst
        let f_lastname = regLast
        let f_username = regUser
        let f_email = regEmail
        let f_password = regPass
        let f_ownedBooks = []
        let f_balance = 0
        let url = "https://th5xc3ohk1.execute-api.us-west-1.amazonaws.com/testing/user" + 
                            "?Id=" + f_id + "&balance=" + f_balance + "&email=" + 
                            f_email + "&firstName=" + f_firstname + "&lastName=" + 
                            f_lastname + 
                            "&password=" + f_password + "&username=" + f_username;
        fetch(url, {
                    method: 'POST', // or 'PUT'
                    headers: {
                      'Content-Type': 'application/json',
                    },
                  })
                  .then(response => response.json())
                  .then(data => {
                    console.log('Success:', data);
                  })
                  .catch((error) => {
                    console.error('Error:', error);
                  });
        console.log("REGISTERED USER" + f_username);
        closePopup()
    }



    function performSwitch() {
        switch(curFunc) {
            case 'login':
                return <div style={{position: "relative"}}>
                    <h1>Login</h1>
                    <button onClick={closePopup} style={{float: "right", borderRadius: "10px", width: "25px", height: "25px"}}>X</button>

                    <div style={{display: "inline-block"}}>
                        <p> Username: </p><br/>
                        <input style={{height: "40px"}} onChange={({ target }) => setInputUser(target.value)}/> <br/>
                    </div>
                    <br/>
                    <br/>
                    <br/>
                    <div style={{display: "inline-block"}}>
                        <p> Password: </p>
                        <input style={{height: "40px", margin: "0 auto", float: "right"}} onChange={({ target }) => setInputPass(target.value)}/> <br/>
                    </div>
                    <br/>
                    <br/>

                    <button onClick={loginUser} style={{width: "90px", height: "32px"}}> Submit </button>
                    <button onClick={changeForm} style={{width: "90px", height: "32px"}}> Register </button>
                </div>;
            case 'register':
                return <div style={{height: "auto"}}>
                    <h1>Register</h1>
                    <button onClick={closePopup} style={{float: "right", borderRadius: "10px", width: "25px", height: "25px"}}>X</button>
                    <div style={{display: "inline-block"}}>
                        <p> First Name: </p><br/>
                        <input style={{height: "40px"}} onChange={({ target }) => setRegFirst(target.value)}/> <br/>
                    </div>
                    <br/>
                    <div style={{display: "inline-block"}}>
                        <p> Last Name: </p><br/>
                        <input style={{height: "40px"}} onChange={({ target }) => setRegLast(target.value)}/> <br/>
                    </div>
                    <br/>
                    <div style={{display: "inline-block"}}>
                        <p> Username: </p><br/>
                        <input style={{height: "40px"}} onChange={({ target }) => setRegUser(target.value)}/> <br/>
                    </div>
                    <br/>
                    <div style={{display: "inline-block"}}>
                        <p> Email: </p><br/>
                        <input style={{height: "40px"}} onChange={({ target }) => setRegEmail(target.value)}/> <br/>
                    </div>
                    <br/>
                    <div style={{display: "inline-block"}}>
                        <p> Password: </p>
                        <input style={{height: "40px", margin: "0 auto"}} onChange={({ target }) => setRegPass(target.value)}/> <br/>
                    </div>
                    <br/>
                    <br/>
                    <button onClick={registerUser} style={{width: "90px", height: "32px"}}> Submit </button>
                    <button onClick={changeForm} style={{width: "90px", height: "32px"}}> Login </button>
                </div>
            default:
                return <p>DEFAULT</p>;
        }
    }

    return (
        <div className='popup'>
            <div className='popup_open'>
                {performSwitch()}

            </div>
        </div>
    );
};
export default Popup;