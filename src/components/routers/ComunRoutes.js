import {Route, Routes} from "react-router-dom"
import { LandingPage } from "../LandingPage";
import { About } from "../About";
import { Contact } from "../Contact";
import {Login} from "../login/Login";
import { Component404 } from "../Component404";
import {Navbar} from "../ui/NavbarBootstrap";
import {Features} from "../Features";
import {PublicRoute} from "./PublicRoute";

export const ComunRoutes = () =>{
    return (
        <>
            <Navbar />
            <Routes>
                <Route path="/" element={<LandingPage />} />
                <Route path="/about" element={<About />} />
                <Route path="/features" element={<Features/>} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/login" element={
                    <PublicRoute>
                        <Login/>
                    </PublicRoute>
                } />
                <Route path="/*" element={<Component404 />} />
        </Routes>
        </>
    )
}
