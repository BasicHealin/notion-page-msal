import { MsalProvider } from "@azure/msal-react";
import { msalInstance } from "services/msal";
import "styles/globals.css";

import "styles/globals.css";
import "react-notion-x/src/styles.css";

function MyApp({ Component, pageProps }) {
  return (
    <MsalProvider instance={msalInstance}>
      <Component {...pageProps} />
    </MsalProvider>
  );
}

export default MyApp;
