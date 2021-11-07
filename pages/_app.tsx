import * as React from "react";
import Head from "next/head";
import CssBaseline from "@material-ui/core/CssBaseline";

import FirebaseProvider from "../utils/useFirestore";

const MyApp = ({ Component, pageProps, ...extras }: any) => {
  React.useEffect(() => {
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles) {
      jssStyles.parentElement?.removeChild(jssStyles);
    }
  }, []);

  return (
    <FirebaseProvider firebaseConfig={extras.props.config}>
      <React.Fragment>
        <Head>
          <title>Saas App</title>
          <meta
            name="viewport"
            content="minimum-scale=1, initial-scale=1, width=device-width"
          />
        </Head>

        <CssBaseline />
        <Component {...pageProps} />
      </React.Fragment>
    </FirebaseProvider>
  );
};

MyApp.getInitialProps = async () => {
  const { getFirebaseConfig } = await import("../utils/firebase");

  const { firebaseConfig } = getFirebaseConfig();

  return {
    props: { config: firebaseConfig },
  };
};

export default MyApp;
