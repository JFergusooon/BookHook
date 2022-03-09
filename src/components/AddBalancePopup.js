import PropTypes from "prop-types";
import { Button } from "react-bootstrap";
import { useEffect, useState } from "react";


const AddBalancePopup = () => {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [balanceToAdd, setBalanceToAdd] = useState();


    const addFundsToUser = () => {
        let username = localStorage.getItem('username')
        let amount = balanceToAdd;
        let url = "https://th5xc3ohk1.execute-api.us-west-1.amazonaws.com/testing/user/balance?toAdd=" + amount + "&username=" + username
        fetch(url, {
                    method: 'POST',
                    headers: {
                      'Content-Type': 'application/json',
                      'Authorization': 'User'
                    },
                  })
                  .then(response => response.json())
                  .then(data => {
                    console.log('Success:', data);
                  })
                  .catch((error) => {
                    console.error('Error:', error);
                  });
                
    }


    return (<div style={{background: "white", width: "500px", height: "90px", borderRadius: "10px",
                        paddingTop: "8px", marginTop: "75px", float: "left", marginBottom: "10px"}}>
            
            <h3>Funding Amount</h3>
            <div style={{display: "inline-block"}}>
                <h3 style={{float:"left"}}>$</h3>
                <input type={"number"} style={{float:"right", fontSize:"20px", width:"150px"}} onChange={({ target }) => setBalanceToAdd(target.value)}></input>
            </div>
            <br/>
            <button onClick={() => {
                        addFundsToUser(balanceToAdd)
                    }}> Add Funds </button>
            </div>
    )
}

AddBalancePopup.defaultProps = {

}
AddBalancePopup.propTypes = {
}

export default AddBalancePopup;