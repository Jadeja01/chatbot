import React from "react";
import MyApp from "./importjs.js";
import SessionProviderWrapper from "./(components)/Auth/sessionProviderWrapper.js";


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <SessionProviderWrapper>
        <body>
          <MyApp>{children}</MyApp>
        </body>
      </SessionProviderWrapper>
    </html>
  );
}
