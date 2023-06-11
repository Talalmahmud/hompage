import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Photo from "./pages/Photo";
import Video from "./pages/Video";
import Contact from "./pages/Contact";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Photos from "./pages/Photos";
import Nav from "./components/Nav";
import Message from "./components/Message";

function App() {
    useEffect(() => {
        AOS.init();
    }, []);
    return (
        <BrowserRouter>
            <Nav />
            <Routes>
                <Route path={"/"} element={<Home />} />
                <Route path={"/photos"} element={<Photos />} />
                <Route path={"/photo/:id"} element={<Photo />} />
                <Route path={"/video"} element={<Video />} />
                <Route path={"/contact"} element={<Contact />} />
            </Routes>
            <Message />
            <Footer />
        </BrowserRouter>
    );
}

export default App;
