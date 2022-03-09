import PropTypes from "prop-types";
import {useState, useEffect} from "react";

let addToCartStyle = {
  "position": "absolute",
  "bottom": 0,
  "background": "#ffae00",
  "backgroundImage": "-webkit-linear-gradient(top, #ffae00, #b08506)",
  "backgroundImage": "-moz-linear-gradient(top, #ffae00, #b08506)",
  "backgroundImage": "-ms-linear-gradient(top, #ffae00, #b08506)",
  "backgroundImage": "-o-linear-gradient(top, #ffae00, #b08506)",
  "backgroundImage": "linear-gradient(to bottom, #ffae00, #b08506)",
  "borderRadius": "12px",
  "fontFamily": "Courier New",
  "fontWeight": "bold",
  "color": "#000000",
  "fontSize": "12px",
  "padding": "10px 20px 10px 20px",
  textDecoration: "none",
  width: "150px", marginBottom: "25px", marginLeft: "20px"
}

const OwnedBookPopup = ({bookId}) => {
    const [book, setBook] = useState();
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        let url = "https://th5xc3ohk1.execute-api.us-west-1.amazonaws.com/testing/books?Id=" + bookId
        fetch(url)
            .then(res => res.json())
            .then(
                (result) => {
                    console.log(result)
                    setIsLoaded(true);
                    setBook(result);
                },
                (error) => {
                    setIsLoaded(true);
                    setError(error);
                }
            )
    }, [])



    return (<div style={{position: "relative", display: "inline-block", background: "white", width: "300px", height: "200px", borderRadius: "15px",
                        paddingTop: "35px", marginLeft: "30px", overflowX:"auto", overflowY: "hidden"}}>
                
                {book ? 
                    <div>
                        <div style={{float:"left", background: "gray", marginLeft: "10px", width: "100px", height: "150px"}}></div>
                        <div style={{}}>
                            <p style = {{fontSize: "16px", fontWeight: "bold", marginLeft: "28px"}}> {book.title} </p>
                            <p style={{fontSize: "16px", marginLeft: "0px"}}> {book.author} </p>
                            
                            {book.isHardcover == "true" ? <p style={{paddingTop: "6px", marginLeft: "22px"}}>HARDCOVER</p> : <p style={{paddingTop: "6px", marginLeft: "22px"}}>SOFTCOVER</p>}
                            <p style={{paddingTop: "6px"}}>GENRE: {book.genre}</p>
                            <p style={{paddingTop: "6px"}}>PAGES: {book.pages}</p>
                            <p style={{fontSize: "22px"}}> ${book.cost} </p>
                            
                        </div>
                    </div> : <p style={{fontWeight: "bold"}}> Loading...</p>}
                


                
                
        </div>
    )
}


OwnedBookPopup.propTypes = {
  bookId: PropTypes.number.isRequired
}

export default OwnedBookPopup;