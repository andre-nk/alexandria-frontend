import { useState } from "react";
import { useRouter } from "next/router";

import Navbar from "../navigation/NavBar";
import Drawer from "../navigation/Drawer";
import { useAuthContext } from "../../hooks/useAuthContext";

export default function Layout(props) {
  const { user, authIsReady } = useAuthContext();
  const [isDrawerOpen, setDrawerIsOpen] = useState(false);

  const router = useRouter();
  var isDynamic = false;

  if (router.pathname.indexOf("auth") < 1) {
    if (authIsReady && !user) {
        router.push("/")
    }
  }

  if (router.pathname == "/" || router.pathname == "/app") {
    isDynamic = true;
  }

  return (
    <div>
      <Drawer isOpen={isDrawerOpen} setIsOpen={setDrawerIsOpen} />
      {router.pathname.indexOf("auth") < 1 && (
        <Navbar isDynamic={isDynamic} setIsOpen={setDrawerIsOpen} />
      )}
      <div className="debug-screens">{props.children}</div>
    </div>
  );
}
