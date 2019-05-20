import React from 'react';

const header = () => {
    return(
        <header>
            <nav className="navbar navbar-expand-lg navbar-light bg-light p-0" height="50px">
                <div className="d-flex align-items-center h-100">
                    <a id='salutation' className="navbar-brand ml-3" height="50px" href="/">
                        <img alt="" height="50px" className="d-inline-block align-top" src="/assets/logo/logo-top-bar.png"/>
                    </a>
                    <a className="h-100" href="profile">Hi</a>
                </div>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <a id="logInOut" className="nav-link" href="/login">Login</a>
                        </li>
                        <li className="nav-item">
                            <a id="reg" className="nav-link" href="/register">Register</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    );
}

export default header;