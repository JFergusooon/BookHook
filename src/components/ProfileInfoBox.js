import PropTypes from "prop-types";
import {useState} from "react";
import AddBalancePopup from "./AddBalancePopup";

const ProfileInfoBox = ({username, firstname, lastname, email, balance}) => {
    
    const [showAdd, setShowAdd] = useState(false);

    function changeAdd() {
        setShowAdd(!showAdd)
    }




    return (<div style={{background: "white", width: "500px", height: "465px", paddingTop: "75px", float: "left", marginLeft: "280px"}}>
            <div style={{marginLeft: "30%", height: "200px", background: "maroon", "width": "200px"}} />
            <h1>{firstname} {lastname}</h1>
            <h1>{username}</h1>
            <br/>
            <br/>
            <h2>{email}</h2>
            <h3>Balance : {balance}</h3>

            <button onClick={changeAdd}> Add To Balance</button>
            {showAdd ? <AddBalancePopup /> : ""}
        </div>
    )
}

ProfileInfoBox.defaultProps = {

}
ProfileInfoBox.propTypes = {
    username: PropTypes.string.isRequired,
    firstname: PropTypes.string.isRequired,
    lastname: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    balance: PropTypes.number.isRequired
}

export default ProfileInfoBox;