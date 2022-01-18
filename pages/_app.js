import "../styles/globals.css";
import { AuthContextProvider } from "../context/AuthContext";
import Navbar from "../components/navigation/NavBar";
import { useRouter } from "next/router";
import { useState } from "react"
import Drawer from "../components/navigation/Drawer";

function MyApp({ Component, pageProps }) {
  const [isDrawerOpen, setDrawerIsOpen] = useState(false);

  const router = useRouter();
  var isDynamic = false;

  if (router.pathname == "/" || router.pathname == "/app"){
    isDynamic = true
  } 

  return (
    <AuthContextProvider>
      <Drawer isOpen={isDrawerOpen} setIsOpen={setDrawerIsOpen} />
      {router.pathname.indexOf("auth") < 1 && (
        <Navbar isDynamic={isDynamic} setIsOpen={setDrawerIsOpen} />
      )}
      <div className="debug-screens">
        <Component {...pageProps} />
      </div>
    </AuthContextProvider>
  );
}

export default MyApp;
