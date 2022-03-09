import PropTypes from "prop-types";

const AboutPopup = () => {
    return (<div style={{background: "white", width: "1800px", height: "150px", borderRadius: "10px",
                        paddingTop: "30px", marginTop: "75px", float: "left", marginLeft: "50px", marginBottom: "10px"}}>
            <h3>Any data on this page is made up or unrealisticly altered and must not be taken seriously</h3>
            <h3>This is a mock-up assignment used exclusively for AWS training purposes.
                All Data used for this site is fake.
                There is no affiliation with Books of Any Sort.</h3>
            <br/>
            <h2> This Page was Coded by Jeffrey Ferguson</h2>
            <h3>&copy;2022</h3>

            </div>
    )
}

AboutPopup.defaultProps = {

}
AboutPopup.propTypes = {
}

export default AboutPopup;