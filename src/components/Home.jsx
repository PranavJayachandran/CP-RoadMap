import React from "react";
import Navbar from "./Navbar";
import Banner from "./Home-container/Banner";
import Cards from "./Home-container/Cards";
import Footer from "./Footer";

const Home = () => {
    return (
        <div>
            <Navbar />
            <Banner />
            <Cards />
            <Footer />
        </div>
    )
}
export default Home;