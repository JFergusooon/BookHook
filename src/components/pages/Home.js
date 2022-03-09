import NewsPopup from "../NewsPopup"
import PopularBooksPopup from "../PopularBooksPopup"
import AboutPopup from "../AboutPopup"
import { useState, useEffect } from "react";

const Home = () => {
    const [popularBooks, setPopularBooks] = useState();
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);

    let url = 'https://th5xc3ohk1.execute-api.us-west-1.amazonaws.com/testing/books/getRandomThree';
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(
                (result) => {
                    setIsLoaded(true);
                    setPopularBooks(result);
                },
                (error) => {
                    setIsLoaded(true);
                    setError(error);
                }
            )
    }, [])

    return (
        <div style={{textAlign: "center"}}>
            <br/>
            <div style={{}}>
                <h1> Home </h1>
            </div>

        <NewsPopup />
        {popularBooks ? <PopularBooksPopup books={popularBooks}/> : "Loading..."}
        
        <AboutPopup />

        </div>
    )
}
export default Home
