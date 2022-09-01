import Content from "feature/Content";
import Sidebar from "feature/Sidebar/Sidebar";
import Topbar from "feature/Topbar/Topbar";

function App() {
  return (
    <>
      <Topbar />
      <div className="wrapper">
        <Sidebar />
        <Content />
      </div>
    </>
  );
}

export default App;
