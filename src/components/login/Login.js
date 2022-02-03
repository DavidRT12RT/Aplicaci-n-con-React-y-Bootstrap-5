import {useContext} from "react";
import {Link, useNavigate} from "react-router-dom";

import {AuthContext} from "../../auth/authContext";
import {useForm} from "../../Hooks/useForm";
import {types} from "../../types/types";
import './Style.css';

//Note: You must use htmlfor instead of for in label tags when react is use 

export const Login = () => {

    const navigate = useNavigate();
    const {dispatch} = useContext(AuthContext);
   
    //Hook personalizado para el formulario
    const [values,handleInputChange] = useForm({
        email:'',
        password:''
    });

    //Destructurando los valores para el formulario

    const {email,password} = values;

    const handleLogin=(e)=>{
        e.preventDefault();
        //const correo = document.querySelector("#email").value;
        const correo = email;
        const action = {
            type:types.login,
            payload:{correo}
        }
        //Look for lastPath in localStorage 
        const lastPath = localStorage.getItem('lastPath') || "/aplication";
        dispatch(action);
        //replacing the history to avoid the user can go back in log page after login
        navigate(lastPath,{
            replace:true
        });
    }
    

    return (
    <div className="w-100 d-md-block container w-75 bg-primary rounded shadow mt-5">
        <div className="row align-items-lg-stretch">
            <div className="col bg d-none d-lg-block col-md-5 col-lg-5 col-xl-6 rounded">
            </div>
            <div className="col bg-white p-5 rounded-end">
                <div className="text-end">
                    <img src={require('../../assets/Login/img/logo.png')} width="100" alt="logo"/>
                </div>
                <h2 className="fw-bold text-center py-5">Bienvenido</h2>
                <form id="iniciarSesion" className="needs-validation" noValidate>
                    <div className="mb-4">
                        <label for="email" className="form-label">Correo Electronico</label>
                        <input 
                            type="email" 
                            name="email" 
                            value={email}
                            onChange={handleInputChange}
                            id="email"  
                            placeholder="example@example.com"
                            className="form-control" 
                            required/>

                        <div className="valid-feedback">Luce bien!</div>
                        <div className="invalid-feedback">Complete los datos</div>
                    </div>
                    <div className="mb-4">
                        <label for="password" className="form-label">Password</label>

                        <input 
                            type="password" 
                            name="password" 
                            value={password}
                            onChange={handleInputChange}
                            id="password" 
                            placeholder="*****"
                            className="form-control" 
                            required/>

                        <div className="valid-feedback">Luce bien!</div>
                        <div className="invalid-feedback">Complete los datos</div>
                    </div>
                    <div className="mb4 form-check">
                        <input type="checkbox" name="connected" className="form-check-input" id="" checked/>
                        <label for="connected" className="form-check-label">Stay connected</label>
                    </div>
                    <div className="d-grid mt-5">
                        <button type="submit" onClick={handleLogin} className="btn btn-primary" id="btnEnviar">Login</button>
                    </div>
                    <div className="my-3">
                        <span>No tienes cuenta? 
                        <Link to="#">Registrate</Link>
                        </span><br/>
                        <span><Link to="#">Recuperar password</Link></span>
                    </div>
                </form>
                <div className="container w-100 my-5">
                    <div className="row text-center">
                        <div className="col-12">Iniciar sesión con</div>
                    </div>
                    <div className="row mt-3">
                        <div className="col">
                            <button className="btn btn-outline-danger w-100 my-1 ">
                                <div className="row align-items-center">
                                    <div className="col-2 d-none d-md-block">
                                        <img src={require('../../assets/Login/img/google.png')} width="32" alt="facebooklogo"/>
                                    </div>
                                    <div className="col-12 col-md-10 text-center">
                                        Google
                                    </div>
                                </div>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div> 
    );
};
