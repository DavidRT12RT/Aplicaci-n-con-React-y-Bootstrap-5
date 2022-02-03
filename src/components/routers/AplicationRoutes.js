import { Routes, Route } from "react-router-dom";
import {Component404} from "../Component404";
import { AplicationLandingPage } from "../AplicationComponents/AplicationLandingPage";
//Components
import { Games } from "../AplicationComponents/Games";
import {AplicationNavbar} from "../AplicationComponents/ui/AplicationNavbar";
export const AplicationRoutes = () => {
    return (
        <>
            <AplicationNavbar/> 
            <Routes>
                <Route path="/" element={<AplicationLandingPage />} />
                <Route path="games" element={<Games />} />
                <Route path="/*" element={<Component404 />} />
            </Routes>
        </>
    );
};
