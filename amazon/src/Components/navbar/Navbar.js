import React from 'react';
import './navbar.css';

const  Navbar = () => {
    return (
        <div className='container'>
          <nav className="navbar navbar-expand-lg navbar-light bg-primary">
   <div className="container-fluid">
       {/* eslint-disable-next-line */}
      <a className="navbar-brand" href="#">Jackie's Store</a>
      <button
         className="navbar-toggle"
         type="button"
         data-bs-toggle="collapse"
         data-bs-target="#navbarSupportedContent"
         aria-controls="navbarSupportedContent"
         aria-expanded="false"
         aria-label="Toggle navigation"
      >
         <span className="navbar-toggle-icon"></span>
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
               <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
               >
                  Dropdown
               </a>
               <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li><a className="dropdown-item" href="#">Action</a></li>
                  <li><a className="dropdown-item" href="#">Another action</a></li>
                  <li><hr className="dropdown-divider" /></li>
                  <li>
                     <a className="dropdown-item" href="#">Something else here</a>
                  </li>
               </ul>
            </li>
            <li className="nav-item">
               <a
                  className="nav-link disabled"
                  href="#"
                  tabIndex="-1"
                  aria-disabled="true"
                  >Disabled</a
               >
            </li>
         </ul>
         <i className="fa-solid fa-cart-shopping"></i>
         <form className="d-flex">
            <input
               className="form-control me-2"
               type="search"
               placeholder="Search"
               aria-label="Search"
            />
            <button className="btn btn-outline-success" type="submit">
               Search
            </button>
         </form>
      </div>
   </div>
</nav>  
        </div>
    );
}

 

 
export default Navbar;