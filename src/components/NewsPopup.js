import PropTypes from "prop-types";

const NewsPopup = () => {
    var date = new Date();

    return (<div style={{background: "white", width: "600px", height: "500px", borderRadius: "15px",
                        paddingTop: "30px", marginTop: "75px", float: "left", marginLeft: "8%"}}>

                <p style = {{"fontSize": "30px", "fontWeight": "bold"}}> News {date.now} </p>
                <br/>

                <p> This month we added 209 new books!!</p>
                <br/>
                <p> With your help, we donated $4.2 Billion to Ukraine</p>

                <br/>
                <p>Best Book Store in South Bay</p>

                <br/>
                <p>Book Drive Begins 3/15</p><br/>

                <br/>
                <h3>Book Of The Month : Hunger Games</h3>
                <p>=========================================================</p>

                <br/>
                <p>Issue with shop displaying incorrectly has been fixed.</p>

                <br/>
                <p>New Hires start tuesday, show them tons of love.</p>

                <br/>
                <p>New Security Methods Implemented</p>

                <br/>
                <p>Have a Fantastic St. Patrick's Day</p>


        </div>
    )
}

NewsPopup.defaultProps = {

}
NewsPopup.propTypes = {
}

export default NewsPopup;