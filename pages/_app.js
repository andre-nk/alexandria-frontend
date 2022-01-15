import "../styles/globals.css";
import { AuthContextProvider } from "../context/AuthContext";
import Navbar from "../components/NavBar";
import { useRouter } from "next/router";

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  return (
    <AuthContextProvider>
      {router.pathname.indexOf("auth") < 1 && <Navbar />}
      <div className="debug-screens">
        <Component {...pageProps} />
      </div>
    </AuthContextProvider>
  );
}

export default MyApp;
