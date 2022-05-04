import { useSelector } from "react-redux";
import Header from "./components/header/Header";
import Loader from "./components/loader/Loader";
import Main from "./components/main/Main";

function App() {
  const loader = useSelector((state) => state.user.loading);
  return (
    <div className="App">
      <Header />
      {loader && <Loader />}
      <Main />
    </div>
  );
}

export default App;
