import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Photo from "./pages/Photo";
import Video from "./pages/Video";
import Contact from "./pages/Contact";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";
import Photos from "./pages/Photos";
import ButtonContex from "./context/ButtonContext";
import Nav from "./components/Nav";

function App() {
    const [toggle, setToggle] = useState(false);
    useEffect(() => {
        AOS.init();
    }, []);
    return (
        <BrowserRouter>
            <ButtonContex.Provider value={{ toggle, setToggle }}>
                <Nav />
                <Routes>
                    <Route path={"/"} element={<Home />} />
                    <Route path={"/photos"} element={<Photos />} />
                    <Route path={"/photo/:id"} element={<Photo />} />
                    <Route path={"/video"} element={<Video />} />
                    <Route path={"/contact"} element={<Contact />} />
                </Routes>
                <Footer />
            </ButtonContex.Provider>
        </BrowserRouter>
    );
}

export default App;
