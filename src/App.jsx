import session from "./data/session"
import Attributes from "./components/attributes"
import Drawer from "./components/drawer"
import Search from "./components/search"
import Sidebar from "./components/sidebar"
import Topbar from "./components/topbar"
import Collection from "./pages/display/collection"
import Editor from "./pages/display/editor"
import RealmDisplay from "./pages/realm"
import SignIn from "./pages/signin"
import { useMemo } from "react"
import { getUser } from "./data/local"
import { checkUser } from "./data/firebase/firestore"
import { OpalIcon } from "./assets/icons"

function App() {

  const { signedin, display, item, attributes, updated, set } = session(s => s);
  useMemo(() => {
    getUser() && checkUser(getUser()).then(x => set({user: x, signedin: true}));
  }, []);

  return (
    display == "signin" || !signedin ? <SignIn /> :
    <>
    <div className="exo">
      <Sidebar />
      {display !=  "realm" && <Topbar />}
    </div>
    {/* {!updated && <OpalIcon className="loading" />} */}
    {updated && <div className={"main" + (display != "realm" ? " main-app" : "")}>
      {display == "realm" && <RealmDisplay />}
      {display != "realm" && <>
        {item && attributes && <Attributes />}
        {display == "grid" && <Collection />}
        {/* <Drawer /> */}
        {display == "editor" && <Editor />}
        {/* <Search /> */}
      </>}
    </div>}
    </>
  )
}

export default App