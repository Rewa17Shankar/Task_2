import React from 'react';

const Nav: React.FC = () => {
  console.log("Navbar component rendered");  // Test log

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary" style={{ backgroundColor: 'black', padding: '10px' }}>
      <div className="container-fluid">
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
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item" style={{ marginLeft: '30px' }}>
              <a className="nav-link active" aria-current="page" href="/">Your Name</a>
            </li>

            <li className="nav-item dropdown">
              <button
                className="nav-link dropdown-toggle"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                style={{ marginLeft: '75px', background: 'none', border: 'none', color: 'white' }}
              >
                Select Device
              </button>
              <ul className="dropdown-menu">
                <li><a className="dropdown-item" href="/">FaceBook</a></li>
                <li><a className="dropdown-item" href="/">Samsung</a></li>
                <li><a className="dropdown-item" href="/">Google</a></li>
                <li><a className="dropdown-item" href="/">Twitter</a></li>
                <li><a className="dropdown-item" href="/">JoyPixels</a></li>
                <li><a className="dropdown-item" href="/">Windows</a></li>
              </ul>
            </li>
          </ul>
          <div>
            <form className="d-flex" role="search">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
              <button className="btn btn-outline-success" type="submit">Search</button>
            </form>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
