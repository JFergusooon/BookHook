import { useState, useEffect } from "react";
import BookBox from "../BookBox";
import CartPopup from "../CartPopup";






const Store = () => {


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


    const [availableBooks, setAvailableBooks] = useState();
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);

    const [showCart, setShowCart] = useState(false);

    function changeShowCart() {
        if(showCart === true)
            setShowCart(false)
        if(showCart === false)
            setShowCart(true)
    }

    let url = 'https://th5xc3ohk1.execute-api.us-west-1.amazonaws.com/testing/books/getallbystore';
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(
                (result) => {
                    setIsLoaded(true);
                    setAvailableBooks(result);
                },
                (error) => {
                    setIsLoaded(true);
                    setError(error);
                }
            )
    }, [])

    console.log(availableBooks)

    return (
        <div style={{textAlign: "center"}}>
            <br/>
            {localStorage.getItem('cart') ? <button onClick={() => { changeShowCart() }} style={cartStyle}> Cart </button> : ""}
            <br/>
            {showCart ? <CartPopup /> : ""}
        
            {availableBooks ? <BookBox availableBooks={availableBooks}/> : ""}


        </div>
    )
}
export default Store