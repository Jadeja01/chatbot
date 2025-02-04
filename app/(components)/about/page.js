import Footer from "../footer/page";
import Navbar from "../nav/page";

export default function About(){
    return (
        <div>
            <Navbar/>
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
      <Footer/>
      </div>
    )
}