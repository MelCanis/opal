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
import Thought from "./pages/display/thought"

function App() {

  const { signedin, display, setDisplay, item, attributes, updated, set } = session(s => s);
  useMemo(() => {
    getUser() && checkUser(getUser()).then(x => set({user: x, signedin: true, display: "realm"}));
  }, [signedin]);

  return (
    display == "signin" || (!getUser() && !signedin) ? <SignIn /> :
    <>
    <div className="exo">
      {display != "loading" && <Sidebar />}
      {display !=  "realm" && display != "loading" && <Topbar />}
    </div>
    {display == "loading" && <OpalIcon className="loading" />}
    {updated && <div className={"main" + (display != "realm" ? " main-app" : "")}>
      {display == "realm" && <RealmDisplay />}
      {display != "realm" && <>
        {item && attributes && <Attributes />}
        {display =="thought" && <Thought />}
        {display == "grid" && <Collection />}
        {display == "editor" && <Editor />}
        {/* <Drawer /> */}
        {/* <Search /> */}
      </>}
    </div>}
    </>
  )
}

export default App