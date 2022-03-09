import PropTypes from "prop-types";
import PopBookPopup from "./PopBookPopup";
import { useState } from "react";

const PopularBooksPopup = ({books}) => {
    return (<div style={{background: "white", width: "600px", height: "500px", borderRadius: "15px",
                        paddingTop: "30px", marginTop: "75px", float: "left", marginLeft: "21%", overflowY:"auto"}}>

                <p style = {{"fontSize": "30px", "fontWeight": "bold"}}> Popular Books </p>
                <div style={{}}>
            


                    {books.map((profile, index) => (



                        <div style={{}}>
                            <PopBookPopup key={profile.Id} book={profile}/>
                            <br/>
                        </div>
                    
                    ))}
                </div>
            </div>
    )
}

PopularBooksPopup.defaultProps = {

}
PopularBooksPopup.propTypes = {
    books: PropTypes.array.isRequired
}

export default PopularBooksPopup;