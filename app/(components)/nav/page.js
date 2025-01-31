import Link from "next/link";

export default function Navbar(){
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary shadow-lg">
        <div className="container">
          <Link className="navbar-brand" href="/">Amreli District Schemes</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a className="nav-link" href="#about">About</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#schemes">Schemes</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#services">Services</a>
              </li>
              <li className="nav-item">
                <Link href="/chatbot" className="nav-link">Chatbot</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    )
}