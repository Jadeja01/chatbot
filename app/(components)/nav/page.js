"use client";
import Link from "next/link";
import {  signOut, useSession } from "next-auth/react";
import Profile from "../user/profile/page";

export default function Navbar() {
  const { data: session } = useSession();
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary shadow-lg">
      <div className="container">
        <Link className="navbar-brand" href="/">
          Amreli District Portal
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link" href="#about">
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="#schemes">
                Schemes
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="#services">
                Services
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/chatbot" className="nav-link">
                Chatbot
              </Link>
            </li>
            {session ? (
             <Profile/>
            ) : (
              <div>
            <Link href="/user/login" className="nav-item ml-2">
              <button className="btn btn-primary">Login</button>
            </Link>
            <Link href="/user/signup" className="nav-item mr-2">
              <button className="btn btn-primary">Signup</button>
            </Link></div>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
}
