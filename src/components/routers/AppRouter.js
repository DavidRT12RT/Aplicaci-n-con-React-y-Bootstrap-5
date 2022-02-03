//Primero importaciones de 3
import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
//Componentes
//import { BarraNavegacion } from "../ui/Navbar";
import { AplicationRoutes } from "./AplicationRoutes";
import {ComunRoutes} from "./ComunRoutes";
import {PrivateRoute} from './PrivateRoute';

/* In order to work with Routes we need to wrap all the Routes in a BrowserRouter component */
export const AppRouter = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/*" element={<ComunRoutes />} />
                <Route path="/aplication/*" element={
                    <PrivateRoute>
                            <AplicationRoutes/>
                    </PrivateRoute>
                    }
                   />
            </Routes>
        </BrowserRouter>
    );
};
