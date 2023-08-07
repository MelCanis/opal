import session from "./data/session"
import Attributes from "./components/attributes"
import Drawer from "./components/drawer"
import Search from "./components/search"
import Sidebar from "./components/sidebar"
import Topbar from "./components/topbar"
import Collection from "./pages/display/collection"
import Editor from "./pages/display/editor"
import RealmDisplay from "./pages/realm"

function App() {

  const { display, realmedit, item, attributes } = session(s => s);

  return (
    <>
    <div className="exo">
      <Sidebar />
      {display != "realm" && <Topbar />}
    </div>
    <div className={"main" + (display != "realm" ? " main-app" : "")}>
      {display == "realm" && <RealmDisplay />}
      {display != "realm" && <>
        {item && attributes && <Attributes />}
        {display == "grid" && <Collection />}
        {/* <Drawer /> */}
        {display == "editor" && <Editor />}
        {/* <Search /> */}
      </>}
    </div>
    </>
  )
}

export default App