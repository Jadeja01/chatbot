import "./globals.css";
import "./importjs.js";


export const metadata = {
  title: "Amreli District Portal",
  description: "We are here for you.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
        
      </body>
    </html>
  );
}
