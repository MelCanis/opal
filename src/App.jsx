import Attributes from "./components/attributes"
import Sidebar from "./components/sidebar"
import Topbar from "./components/topbar"
import Collection from "./pages/display/collection"
import Editor from "./pages/display/editor"
import RealmDisplay from "./pages/realm"

function App() {
  return (
    <>
    <div className="exo">
      <Sidebar />
      <Topbar />
    </div>
    <div className="main">
      {/* <RealmDisplay /> */}
      <Attributes />
      {/* <Collection /> */}
      <Editor />
    </div>
    </>
  )
}

export default App