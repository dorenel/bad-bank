function NavBar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark custom-navbar">
            <div className="container-fluid">
                <a className="navbar-brand" aria-current="page" href="#" title="Welcome page">Bad Bank</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                        <a className="nav-link" href="#/create-account" title="Create new user accounts">Create Account</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link" href="#/deposit" title="Deposit to account">Deposit</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link" href="#/withdraw" title="Withdraw from account">Withdraw</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link" href="#/all-data" title="Display all user data">All Data</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default NavBar;