import React from 'react';
import Badge from 'react-bootstrap/Badge';
import {Store} from "../../Store.js"
import {useContext} from "react";
import Nav from 'react-bootstrap/Nav';
import {Link} from "react-router-dom";


const Navbar = () => {
    const {state}=useContext(Store);
   const {cart}= state;
   console.log(cart)

    return (
        <div>
            <nav className="navbar navbar-expand-sm bg-light">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">Jackie's Store</a>
                    <button className="bg-primary navbar-toggler" type="button " data-bs-toggle="collapse"
                            data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                            aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Link</a>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
                                   aria-expanded="false">
                                    Dropdown
                                </a>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="#">Action</a></li>
                                    <li><a className="dropdown-item" href="#">Another action</a></li>
                                    <li>
                                        <hr className="dropdown-divider"></hr>
                                    </li>
                                    <Nav className="me-auto">

                                    </Nav>
                                </ul>
                            </li>

                            <Link to="/cart" className="Badge">
                                <img  className={"cart-img"}  src="/images/shopping-cart.jpg" alt={"cart"} />
                                {cart.cartItems.length > 0 && (

                                    <Badge pill bg="danger" className={'Badge'}>
                                        {cart.cartItems.length}
                                    </Badge>
                                )}
                            </Link>
                        </ul>

                        <form className="d-flex" role="search">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                                <button className="btn btn-outline-success" type="submit">Search</button>
                        </form>
                    </div>
                </div>
            </nav>

        </div>
    );
};

export default Navbar;