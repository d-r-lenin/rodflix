import Bar from "./components/Bar/Bar";
import SideNav from "./components/SideNav/SideNav";

import "./App.scss";

function App() {
  return (
    <>
    <div className="container">
        <div className="container__left">
          <SideNav />
        </div>
        <div className="container__right">
          <Bar />
        </div>
    </div>
    </>
  );
}

export default App;
