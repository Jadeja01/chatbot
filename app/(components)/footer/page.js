export default function Footer(){
    return (
        <div>
            <footer className="bg-primary text-white py-4">
        <div className="container text-center">
          <p>
            &copy; {new Date().getFullYear()} Amreli District Schemes. All
            rights reserved.
          </p>
        </div>
      </footer>
        </div>
    )
}