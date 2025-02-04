import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./importjs.js";
import "./globals.css";
import Navbar from "./(components)/nav/page.js";
import Link from "next/link.js";
import Footer from "./(components)/footer/page.js";
import About from "./(components)/about/page.js";
import Services from "./(components)/services/page.js";
import Schemes from "./(components)/schemes/page.js";

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
            Chat with our website Bot
          </Link>
          <div className="row mt-5">
            <div className="col-12 text-center">
              <a
                href="https://t.me/amreliinfo_bot"
                className="btn btn-primary btn-lg"
                target="_blank"
                rel="noopener noreferrer"
              >
                Chat with our Telegram Bot
              </a>
            </div>
          </div>
        </div>
      </div>
      <About />
      <Schemes/>
      <Services />
      <Footer />
    </div>
  );
}
