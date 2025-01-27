import React from "react";
import Head from "next/head";
import 'bootstrap/dist/css/bootstrap.min.css';

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

      {/* Header */}
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

      {/* Hero Section */}
      <div
        className="d-flex align-items-center justify-content-center text-center text-white bg-primary py-5"
        style={{ height: "60vh", backgroundImage: "url('/background.jpg')", backgroundSize: "cover", backgroundPosition: "center" }}
      >
        <div className="p-4 bg-dark bg-opacity-50 rounded">
          <h1 className="display-4 fw-bold">Welcome to Amreli District Schemes Portal</h1>
          <p className="lead">Discover and explore government schemes tailored for you.</p>
          <a href="#chat" className="btn btn-warning btn-lg">Chat with our Bot</a>
        </div>
      </div>

      {/* About Section */}
      <div id="about" className="container py-5 text-center">
        <h2 className="mb-4">About Us</h2>
        <p className="lead">
          The Amreli District Schemes Portal is your one-stop destination to learn about various government schemes and initiatives tailored for the residents of the Amreli district. Use our chatbot for instant assistance and guidance.
        </p>
      </div>

      {/* Schemes Section */}
      <div id="schemes" className="container py-5">
        <h2 className="text-center mb-4">Our Schemes</h2>
        <div className="row g-4">
          <div className="col-md-4">
            <div className="card h-100">
              <div className="card-body">
                <h5 className="card-title">Scheme 1</h5>
                <p className="card-text">Brief description of the scheme.</p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card h-100">
              <div className="card-body">
                <h5 className="card-title">Scheme 2</h5>
                <p className="card-text">Brief description of the scheme.</p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card h-100">
              <div className="card-body">
                <h5 className="card-title">Scheme 3</h5>
                <p className="card-text">Brief description of the scheme.</p>
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
          src="https://cdn.botpress.cloud/webchat/v2.2/shareable.html?configUrl=https://files.bpcontent.cloud/2025/01/27/15/20250127151749-A667ZVUL.json"
          title="Amreli District Bot"
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
