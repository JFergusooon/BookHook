import PropTypes from "prop-types";
import { useState, useEffect } from "react";

const CartPopup = () => {
    const [cartTitles, setCartTitles] = useState();
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);

    function submitFinalBuys() {
        let curCart = localStorage.getItem('cart').substring(0, localStorage.getItem('cart').length - 1);

        let cartSplit = curCart.split(",")

        cartSplit.forEach(bookId =>{
            let username = localStorage.getItem('username')
            let url = "https://th5xc3ohk1.execute-api.us-west-1.amazonaws.com/testing/user/buyBook?bookId=" + bookId + "&username=" + username
            fetch(url, {
                    method: 'POST', // or 'PUT'
                    headers: {
                      'Content-Type': 'application/json'
                      
                    },
                  })
                  .then(response => response.json())
                  .then(data => {
                    console.log('Success:', data);
                  })
                  .catch((error) => {
                    console.error('Error:', error);
                  });
        })

        localStorage.setItem('cart', "")
        //window.location.reload();
    }

    const cartStyle = {
        background: "#ffae00",
        backgroundImage: "-webkit-linear-gradient(top, #ffae00, #b08506)",
        backgroundImage: "-moz-linear-gradient(top, #ffae00, #b08506)",
        backgroundImage: "-ms-linear-gradient(top, #ffae00, #b08506)",
        backgroundImage: "-o-linear-gradient(top, #ffae00, #b08506)",
        backgroundImage: "linear-gradient(to bottom, #ffae00, #b08506)",
        borderRadius: "12px",
        textAlign: "center",
        fontFamily: "Courier New",
        fontWeight: "bold",
        color: "#000000",
        fontSize: "12px",
        padding: "10px 20px 10px 20px",
        textDecoration: "none",
        width: "150px"
    }
      let curCart = localStorage.getItem('cart').substring(0, localStorage.getItem('cart').length);
      console.log("CUR CART: " + curCart)
      let url = "https://th5xc3ohk1.execute-api.us-west-1.amazonaws.com/testing/books/gettitlebyid?cartString=" + curCart
      useEffect(() => {
          fetch(url)
              .then(res => res.json())
              .then(
                  (result) => {
                      setIsLoaded(true);
                      setCartTitles(result);
                  },
                  (error) => {
                      setIsLoaded(true);
                      setError(error);
                  }
              )
      }, [])
      console.log(localStorage.getItem('cart'))
      console.log(cartTitles)

      
      
    const getString = () => {
      let final = "";
      cartTitles.forEach(c => final += c + "")
      return final
    }
      
    return (<div style={{marginLeft: "34%", background: "white", width: "600px", height: "150px", borderRadius: "10px",
                        textAlign: "center", paddingTop: "30px", marginTop: "5px", float: "left"}}>
            
            

            {cartTitles ? <p>{getString()}</p> : "NO TITLES"}






            {localStorage.getItem('username') ? <button style={cartStyle} onClick={() => {
                submitFinalBuys()
            }}> Confirm Order </button> : "not logged in.."}
            
            
            

            </div>
    )
}

CartPopup.defaultProps = {

}
CartPopup.propTypes = {
}

export default CartPopup;