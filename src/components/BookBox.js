import PropTypes from "prop-types";
import BuyBookPopup from "./BuyBookPopup";

const BookBox = ({availableBooks}) => {

    console.log(availableBooks[0])

    return (
        <>

            <div style={{}}>
            
                {availableBooks.map((profile, index) => (
                    <div style={{}}>
                        <BuyBookPopup key={profile.Id} book={profile}/>
                        <br/>
                    </div>
                    
                ))}
            </div>
        </>
)
}

BookBox.defaultProps = {

}
BookBox.propTypes = {
    availableBooks: PropTypes.array.isRequired
}

export default BookBox