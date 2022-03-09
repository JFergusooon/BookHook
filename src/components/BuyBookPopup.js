import PropTypes from "prop-types";

let addToCartStyle = {
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

function buyerBuysBook(bookId) {
  let curCart = localStorage.getItem('cart').substring(0, localStorage.getItem('cart').length - 1);

  let cartSplit = curCart.split(",")
  console.log(cartSplit)

  let contains = false;
  cartSplit.forEach(c => {
    if(c == bookId) {
      contains = true
    }
  })


  if(contains == false) {
    localStorage.setItem('cart', localStorage.getItem('cart') + bookId + ",")
  }
  window.location.reload();
}




const BuyBookPopup = ({book}) => {

    return (<div style={{ display: "inline-block", background: "white", width: "1200px", height: "300px", borderRadius: "15px",
                        paddingTop: "25px", marginLeft: "30px", marginTop: "50px"}}>
                

                <div>
                  <div style={{float:"left", background: "gray", marginLeft: "15%", width: "200px", height: "250px"}}></div>
                  <div style={{float: "left", marginLeft: "22px", marginTop: "20px", textAlign: "left"}}>
                      <p style = {{float: "left", fontSize: "30px", fontWeight: "bold"}}> {book.title} </p>
                      <br/>
                      <p style={{fontSize: "24px"}}> {book.author} </p>
                      
                      {book.isHardcover == "true" ? <p style={{paddingTop: "6px"}}>HARDCOVER</p> : <p style={{paddingTop: "6px"}}>SOFTCOVER</p>}
                      <p style={{paddingTop: "6px"}}>GENRE: {book.genre}</p>
                      <p style={{paddingTop: "6px"}}>PAGES: {book.pages}</p>
                      <br/><br/>
                      <div style={{display: "inline-block"}}>
                          <p style={{fontSize: "22px"}}> ${book.cost} </p> <br />
                          <button style={addToCartStyle} onClick={() => {buyerBuysBook(book.Id)}}> Add To Cart </button>
                      </div>
                      
                  </div>
                </div>


                
                
        </div>
    )
}


BuyBookPopup.propTypes = {
  book: PropTypes.object.isRequired
}

export default BuyBookPopup;