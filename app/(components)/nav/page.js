"use client"
import Link from "next/link";
import { useSession, signIn, signOut } from "next-auth/react";

export default function Navbar() {
  const { data: session } = useSession();

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary shadow-lg">
      <div className="container">
        <Link className="navbar-brand" href="/">Amreli District Portal</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link" href="#about">About</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="#schemes">Schemes</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="#services">Services</Link>
            </li>
            <li className="nav-item">
              <Link href="/chatbot" className="nav-link">Chatbot</Link>
            </li>
            
            {session ? (
              <li className="nav-item">
                Signed in as {session.user.email} <br/>
                <button onClick={() => signOut()} className="btn btn-light">Logout</button>
              </li>
            ) : (
              <li className="nav-item">
                Not signed in <br/>
                <button onClick={() => signIn()} className="btn btn-light">Login</button>
              </li>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
}
