import './Footer.css'
import {Link} from "react-router-dom";


export const Footer = () =>{
    return (
        <section className="py-5 text-center container-fluid color-fondo"> 
            <div className="row py-lg-5">
                <div className="col-lg-6 col-md-8 mx-auto">
                    <img className="d-block mb-4 mx-auto" src={require('../../assets/imgs/pokebolaa.png')} alt="" width="100"/>
                    <h1 className="fw-light">Get more noticed about pokemon</h1>
                    <p className="lead text-muted">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Recusandae ratione odit ducimus, nisi, quisquam nulla quos nihil labore magnam, vero quae minima quidem nesciunt asperiores enim aperiam autem consectetur vel!</p>
                    <p>
                    <Link to="/" className="btn btn-secondary mx-2">Go back</Link>
                    <Link to="/" className="btn btn-primary mx-2">Lest's do it!</Link>
                    </p>
                </div>
            </div>
        </section> 
    );
}
