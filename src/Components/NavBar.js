import React from "react"

class Navbar extends React.Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-sm navbar-light bg-light fixed-top">
          <div className="container-fluid">
            <a
              className="navbar-brand"
              href="https://thespringfieldschool.com/"
            >
              SpringField Logo
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#mynavbar"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse d-flex row justify-content-end"
              id="mynavbar"
            >
              <ul className="navbar-nav me-auto">
                <li className="nav-item">
                  <a
                    className="nav-link"
                    href="https://thespringfieldschool.com/"
                  >
                    Home
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    )
  }
}

export default Navbar
