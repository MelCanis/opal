import session from "./data/session"
import Attributes from "./components/attributes"
import Search from "./components/search"
import Sidebar from "./components/sidebar"
import Topbar from "./components/topbar"
import Collection from "./pages/display/collection"
import Editor from "./pages/display/editor"
import RealmDisplay from "./pages/realm"
import SignIn from "./pages/signin"
import { useMemo} from "react"
import { getUser } from "./data/local"
import { checkUser } from "./data/firebase/firestore"
import Thought from "./pages/display/thought"
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom"
import Auth from "./utils/auth"
import Panel from "./components/panel"
import Tools from "./components/utils/tools"

function App() {
  const { signedin, display, thoughtspace, item, attributes, panel, search, updated, set, set2 } = session(s => s);
  useMemo(() => {
    getUser() && checkUser(getUser()).then( x=> set({user: x, signedin: true, display: "realm"}));
    window.location.pathname == "realms" && set2({display: "realm"})
  }, [signedin]);

  return (<>
    <BrowserRouter>
    <div className="exo">
      {display != "loading" && <Sidebar />}
      {display != "realm" && display != "loading" && <Topbar />}
    </div>
    <Routes>
      <Route exact path="/" element={(!getUser() && !signedin) ? <Navigate to="/login" /> : <Navigate to="/realms" />}/>
      <Route exact path="/login" element={(!getUser() && !signedin) ? <SignIn /> : <Navigate to="/realms" />}/>
      <Route exact path="/realms" element={updated && display == "realm" && <RealmDisplay />} />
      <Route path="/:item" element={<div className={"main" + (display != "realm" ? " main-app" : "")}>
        <Auth />
        {updated && search && <Search />}
        {updated && <>
          {item && <Attributes />}
          {/* {panel && <Panel/>} */}
          {display == "grid" && <>
            {thoughtspace && <Thought />}
            {!thoughtspace && <Collection />}
          </>}
          {display == "editor" && <Editor />}
        </>}
      </div>}/>
    </Routes>
    <Tools />
    </BrowserRouter>
  </>
  )
}

export default App