import PropTypes from "prop-types";
import {useState} from "react";
import OwnedBookPopup from "./OwnedBookPopup";

const ProfileBookBox = ({books}) => {


    return (<div style={{background: "beige", width: "500px", height: "100%", paddingTop: "15px", float: "left", marginLeft: "280px", overflowY : "auto"}}>
                <h1>Owned Books</h1>
                <div style={{}}>
            


                    {books.map((profile, index) => (



                        <div style={{}}>
                            <OwnedBookPopup key={profile.Id} bookId={profile}/>
                            <br/>
                        </div>
                    
                    ))}
                </div>
            </div>
    )
}

ProfileBookBox.defaultProps = {

}
ProfileBookBox.propTypes = {
    books: PropTypes.array.isRequired
}

export default ProfileBookBox;