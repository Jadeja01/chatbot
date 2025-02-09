import Link from "next/link";
import Footer from "../footer/page";
import Navbar from "../nav/page";

export default function Schemes(){
    return (
        <div>
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
                        <Link href="/chatbot" className="btn btn-warning btn-lg">
                          Chat with our Bot
                        </Link>
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
                        <Link href="/chatbot" className="btn btn-warning btn-lg">
                          Chat with our Bot
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="card h-100">
                      <div className="card-body">
                        <h5 className="card-title">National Health Mission (NHM)</h5>
                        <p className="card-text">Brief description of the scheme.</p>
                        <Link href="/chatbot" className="btn btn-warning btn-lg">
                          Chat with our Bot
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              </div>
    )
}