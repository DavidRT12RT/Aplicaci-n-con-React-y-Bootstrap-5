import React from "react";
import { Link, NavLink } from "react-router-dom";
/*Link y Navlink son componentes 
 1.-Link es como un enlace normalito y se acompaña con la etiqueta to
 es decir a donde ira y la diferencia de esto con un a normal es que 
 el a carga el dom completo y hace la petición al servidor otra vez
 2.-Switch componente que elige condicionalmente por la ruta que componente
 3.-El componente navbar al utilizar un componete o mas de link tiene que ir dentro del Router pero fuera del switch
 */

export const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-sm navbar-light bg-light fixed-top mb-5">
            <div className="container">
                <Link className="navbar-brand" to="/">
                    <img
                        src={require("../../assets/imgs/pokebolaa.png")}
                        alt="pokemonLogo"
                        width="30"
                        height="30"
                    />
                    Pokedex website
                </Link>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div
                    className="collapse navbar-collapse"
                    id="navbarSupportedContent"
                >
                    <ul className="navbar-nav me-auto mb-lg-0">
                        <li className="nav-item">
                            <NavLink
                                aria-current="page"
                                to="/"
                                className={({ isActive }) =>
                                    "nav-link" + (isActive ? " active" : "")
                                }
                            >
                                Home
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink
                                aria-current="page"
                                to="/about"
                                className={({ isActive }) =>
                                    "nav-link" + (isActive ? " active" : "")
                                }
                            >
                                About us
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink
                                aria-current="page"
                                to="/features"
                                className={({ isActive }) =>
                                    "nav-link" + (isActive ? " active" : "")
                                }
                            >
                                features
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink
                                aria-current="page"
                                to="/contact"
                                className={({ isActive }) =>
                                    "nav-link" + (isActive ? " active" : "")
                                }
                            >
                                Contact
                            </NavLink>
                        </li>
                    </ul>
                    <NavLink aria-current="page" to="/login" 
                        className={({isActive})=>
                            "btn btn-secondary" + (isActive ? " active": "")
                        }>
                        Login
                   </NavLink>
                   <NavLink aria-current="page" to="/login" 
                        className={({isActive})=>
                            "btn btn-primary ms-2" + (isActive ? " active": "")
                        }>
                        Register
                   </NavLink>
                </div>
            </div>
        </nav>
    );
};
