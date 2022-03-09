import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import ProfileInfoBox from "../ProfileInfoBox";
import ProfileBookBox from "../ProfileBookBox";

const Account = () => {

    const [loggedIn, setLoggedIn] = useState(false);

    const [user, setUser] = useState();
    const [ownedBooks, setOwnedBooks] = useState();
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    let username = localStorage.getItem('username');
    console.log("curDomainUser: " + username)

    useEffect(() => {
        let url = "https://th5xc3ohk1.execute-api.us-west-1.amazonaws.com/testing/user/getbyusername?username=" + username
        fetch(url)
            .then(res => res.json())
            .then(
                (result) => {
                    console.log(result)
                    setIsLoaded(true);
                    setUser(result);
                },
                (error) => {
                    setIsLoaded(true);
                    setError(error);
                }
            )
    }, [])



    return (
        <div style={{textAlign: "center"}}>
            {localStorage.getItem('username') === window.location.pathname.split('/')[2] ?


                <div style={{textAlign: "center"}}>
                    {user ? <ProfileInfoBox username={user.username} firstname={user.firstName} lastname={user.lastName} email={user.email} balance={user.balance} ownedBooks={user.ownedBooks}/> : "Loading..."}
                    {user ? <ProfileBookBox books={user.ownedBooks}/> : <h2> ... </h2>}
                    {localStorage.getItem('username') ? "" : "no credentials"}
                </div> : <p>"Not Logged In"</p>}
        </div>


    )
}

Account.defaultProps = {

}
Account.propTypes = {
}


export default Account
