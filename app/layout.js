import React from "react";
import MyApp from "./importjs.js";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <MyApp>
          {children}
        </MyApp>
      </body>
    </html>
  );
}