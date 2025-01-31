import Link from "next/link";
import Navbar from "../nav/page";
import Footer from "../footer/page";

export default function Chatbot() {
  return (
    <div>
      <Navbar />
      <div className="container mt-5">
        <div className="row">
          <div className="col-12">
            
              <Link href="/" className="btn btn-secondary mb-4">Go back</Link>
          
          </div>
          <div className="row mt-5">
          <div className="col-12">
            <h2 className="text-center mb-4">How to Use</h2>
            <p className="text-center lead">
              Follow just three steps:
            </p>
            <ol className="list-group list-group-numbered">
              <li className="list-group-item">Send a Hi message to start the bot</li>
              <li className="list-group-item">Select the scheme for which you want information</li>
              <li className="list-group-item">Ask your question related to that scheme</li>
            </ol>
          </div>
        </div>
        </div>
        <div className="row">
          <div className="col-12 text-center">
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
        </div>
      </div>
      <Footer />
    </div>
  );
}