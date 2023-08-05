import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <header>
            {/* // < !--Navbar -- > */}
            <nav className="navbar navbar-expand-lg navbar-light bg-white">
                {/* <!-- Container wrapper --> */}
                <div className="container">
                    {/* <!-- Toggle button --> */}
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-mdb-toggle="collapse"
                        data-mdb-target="#navbarSupportedContent1"
                        aria-controls="navbarSupportedContent1"
                        aria-expanded="false"
                        aria-label="Toggle navigation">
                        <i className="fas fa-bars"></i>
                    </button>

                    {/* <!-- Collapsible wrapper --> */}
                    <div className="collapse navbar-collapse" id="navbarSupportedContent1">
                        {/* <!-- Navbar brand --> */}
                        <Link className="navbar-brand mt-2 mt-sm-0" to="/">
                            <img src="https://mdbcdn.b-cdn.net/img/logo/mdb-transaprent-noshadows.webp" height="20" alt="MDB Logo" loading="lazy" />
                        </Link>
                        {/* <!-- Left links --> */}
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item active">
                                <Link className="nav-link" to="/">Cloths</Link>
                            </li>
                            <li className="nav-item active">
                                <Link className="nav-link" to="/">Smartphones</Link>
                            </li>
                            <li className="nav-item active">
                                <Link className="nav-link" to="/">Electronics</Link>
                            </li>
                            <li className="nav-item active">
                                <Link className="nav-link" to="/">Headphones & Earbuds</Link>
                            </li>
                        </ul>
                        {/* <!-- Left links --> */}
                    </div>
                    {/* <!-- Collapsible wrapper --> */}

                    {/* <!-- Right elements --> */}
                    <div className="d-flex align-items-center">
                        {/* <!-- Icon --> */}
                        <Link className="nav-link me-3" to="#!">
                            <i className="fas fa-shopping-cart"></i>
                            <span className="badge rounded-pill badge-notification bg-danger">1</span>
                        </Link>

                        <Link to="https://github.com/mdbootstrap/bootstrap-material-design" className="border rounded px-2 nav-link" target="_blank"> <i className="fab fa-github me-2"></i>MDB GitHub </Link>
                    </div>
                    {/* <!-- Right elements --> */}
                </div>
                {/* <!-- Container wrapper --> */}
            </nav>
            {/* <!--Navbar-- > */}
        </header>
    )
}

export default Header