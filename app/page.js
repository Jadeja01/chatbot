import React from "react";
import Head from "next/head";
import "bootstrap/dist/css/bootstrap.min.css";
import "./importjs.js";
import "./globals.css";
import Navbar from "./(components)/nav/page.js";
import Link from "next/link.js";
import Footer from "./(components)/footer/page.js";

export default function Home() {
  return (
    <div>
      <Navbar />
      <div
        className="d-flex align-items-center justify-content-center text-center text-white bg-primary py-5"
        style={{ height: "60vh" }}
      >
        <div className="p-4 bg-dark bg-opacity-50 rounded">
          <h1 className="display-4 fw-bold">
            Welcome to Amreli District Schemes Portal
          </h1>
          <p className="lead">
            Discover and explore government schemes tailored for you.
          </p>
          <Link href="/chatbot" className="btn btn-warning btn-lg">
            Chat with our Bot
          </Link>
        </div>
      </div>

      {/* About Section */}
      <section id="about" className="py-5 bg-light">
        <div className="container">
          <h2 className="text-center mb-4">About Us</h2>
          <p className="lead text-center mb-4">
            Welcome to the Amreli District Portal. Our mission is to provide
            transparent and efficient access to government schemes and services
            for the residents of Amreli district.
          </p>
          <div className="row">
            <div className="col-md-6">
              <h3>Our Vision</h3>
              <p>
                To create a digitally empowered society where every citizen has
                access to government services and schemes with ease and
                transparency.
              </p>
            </div>
            <div className="col-md-6">
              <h3>Our Mission</h3>
              <p>
                To ensure that all government schemes and services are
                accessible to the residents of Amreli district through a
                user-friendly and efficient online portal.
              </p>
            </div>
          </div>
          <div className="row mt-4">
            <div className="col-md-12">
              <h3>Contact Us</h3>
              <p>
                If you have any questions or need assistance, please contact us
                at:
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
        <h2 className="text-center mb-4">Current on going Schemes</h2>
        <div className="row g-4">
          <div className="col-md-4">
            <div className="card h-100">
              <div className="card-body">
                <h5 className="card-title">
                  National Social Assistance Programme (NSAP)
                </h5>
                <p className="card-text">Brief description of the scheme.</p>
                <a href="#chat" className="btn btn-warning btn-lg">
                  Chat with our Bot{" "}
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card h-100">
              <div className="card-body">
                <h5 className="card-title">
                  Pradhan Mantri Jeevan Jyoti Bima Yojana (PMJJBY)
                </h5>
                <p className="card-text">Brief description of the scheme.</p>
                <a href="#chat" className="btn btn-warning btn-lg">
                  Chat with our Bot
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card h-100">
              <div className="card-body">
                <h5 className="card-title">National Health Mission (NHM)</h5>
                <p className="card-text">Brief description of the scheme.</p>
                <a href="#chat" className="btn btn-warning btn-lg">
                  Chat with our Bot
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <section id="services" className="py-5 bg-light">
        <div className="container">
          <h2 className="text-center mb-4">Our Services</h2>
          <div className="row">
            <div className="col-md-4">
              <div className="card h-100">
                <div className="card-body">
                  <h5 className="card-title">Service 1</h5>
                  <p className="card-text">Description of Service 1.</p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card h-100">
                <div className="card-body">
                  <h5 className="card-title">Service 2</h5>
                  <p className="card-text">Description of Service 2.</p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card h-100">
                <div className="card-body">
                  <h5 className="card-title">Service 3</h5>
                  <p className="card-text">Description of Service 3.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer/>
    </div>
  );
}
