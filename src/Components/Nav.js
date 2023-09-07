import React from "react";
import "../App.css";
import { NavLink } from "react-router-dom";

const Nav = ({ size}) => {
  return (
    <>
      <div className="container-fluid nav_bg">
        <div className="row">
          <div className="col-11 mx-auto">
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
              <div className="container-fluid">
                <NavLink className="navbar-brand" to="#">
                  <img src="https://clovercarte.in/logo.png" alt="error" />
                </NavLink>
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
                  <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                      <NavLink
                        className="nav-link active"
                        aria-current="page"
                        to="#"
                      >
                        Home
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink className="nav-link" to="#">
                        Order
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink className="nav-link" to="#">
                        Wallet
                      </NavLink>
                    </li>
                  </ul>
                  <ul className="cart_img">
                    <li className="nav-item">
                      <NavLink className="nav-link" to="/cart">
                        <img
                          src="https://pngimg.com/d/shopping_cart_PNG38.png"
                          alt=""
                        />
                      </NavLink>
                      <span className="num_size">{size}</span>
                    </li>
                  </ul>
                  <form className="d-flex" role="search">
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
        </div>
      </div>
    </>
  );
};

export default Nav;
