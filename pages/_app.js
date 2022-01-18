import "../styles/globals.css";
import { AuthContextProvider } from "../context/AuthContext";
import Layout from "../components/layout/Layout";

function MyApp({ Component, pageProps }) {
  return (
    <AuthContextProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </AuthContextProvider>
  );
}

export default MyApp;
