import React from "react";
import Head from "next/head";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./importjs.js"
import "./globals.css"

export default function Home() {
  return (
    <div>
      <Head>
        <title>Amreli District Schemes</title>
        <meta
          name="description"
          content="Explore government schemes for the Amreli district. Chat with our AI-powered bot for more information."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary shadow-lg">
        <div className="container">
          <a className="navbar-brand" href="#home">Amreli District Schemes</a>
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
                <a className="nav-link" href="#chat">Chatbot</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div
        className="d-flex align-items-center justify-content-center text-center text-white bg-primary py-5"
        style={{ height: "60vh"}}
      >
        <div className="p-4 bg-dark bg-opacity-50 rounded">
          <h1 className="display-4 fw-bold">Welcome to Amreli District Schemes Portal</h1>
          <p className="lead">Discover and explore government schemes tailored for you.</p>
          <a href="#chat" className="btn btn-warning btn-lg">Chat with our Bot</a>
        </div>
      </div>

      {/* About Section */}
      <section id="about" className="py-5 bg-light">
        <div className="container">
          <h2 className="text-center mb-4">About Us</h2>
          <p className="lead text-center mb-4">
            Welcome to the Amreli District Portal. Our mission is to provide transparent and efficient access to government schemes and services for the residents of Amreli district.
          </p>
          <div className="row">
            <div className="col-md-6">
              <h3>Our Vision</h3>
              <p>
                To create a digitally empowered society where every citizen has access to government services and schemes with ease and transparency.
              </p>
            </div>
            <div className="col-md-6">
              <h3>Our Mission</h3>
              <p>
                To ensure that all government schemes and services are accessible to the residents of Amreli district through a user-friendly and efficient online portal.
              </p>
            </div>
          </div>
          <div className="row mt-4">
            <div className="col-md-12">
              <h3>Contact Us</h3>
              <p>
                If you have any questions or need assistance, please contact us at:
              </p>
              <ul>
                <li>Email: support@amrelidistrict.gov.in</li>
                <li>Phone: +91-1234567890</li>
                <li>Address: Amreli District Office, Amreli, Gujarat, India</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Schemes Section */}
      <div id="schemes" className="container py-5">
        <h2 className="text-center mb-4">Our Schemes</h2>
        <div className="row g-4">
          <div className="col-md-4">
            <div className="card h-100">
              <div className="card-body">
                <h5 className="card-title">National Social Assistance Programme (NSAP)</h5>
                <p className="card-text">Brief description of the scheme.</p>
                <a href="#chat" className="btn btn-warning btn-lg">Chat with our Bot </a>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card h-100">
              <div className="card-body">
                <h5 className="card-title">Pradhan Mantri Jeevan Jyoti Bima Yojana (PMJJBY)</h5>
                <p className="card-text">Brief description of the scheme.</p>
                <a href="#chat" className="btn btn-warning btn-lg">Chat with our Bot</a>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card h-100">
              <div className="card-body">
                <h5 className="card-title">National Health Mission (NHM)</h5>
                <p className="card-text">Brief description of the scheme.</p>
                <a href="#chat" className="btn btn-warning btn-lg">Chat with our Bot</a>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card h-100">
              <div className="card-body">
                <h5 className="card-title">Pradhan Mantri Suraksha Bima Yojana (PMSBY)</h5>
                <p className="card-text">Brief description of the scheme.</p>
                <a href="#chat" className="btn btn-warning btn-lg">Chat with our Bot</a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Chatbot Section */}
      <div id="chat" className="container py-5 text-center">
        <h2 className="mb-4">Chat with Our Bot</h2>
        <p className="lead mb-4">
          Get instant assistance and explore government schemes with our AI-powered chatbot.
        </p>
        <iframe
          src={process.env.bot_url}
          className="w-100"
          style={{ height: "600px", border: "none" }}
          allow="microphone"
        ></iframe>
      </div>

      {/* Footer */}
      <footer className="bg-primary text-white py-4">
        <div className="container text-center">
          <p>&copy; {new Date().getFullYear()} Amreli District Schemes. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
