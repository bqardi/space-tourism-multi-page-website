import "./App.scss";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Crew from "./pages/Crew";
import Technology from "./pages/Technology";
import Destination from "./pages/Destination";
import DataContext from "./contexts/data";
import useData from "./hooks/useData";
import Header from "./components/Header";

function App() {
  const data = useData();

  return (
    <DataContext.Provider value={data}>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/crew" element={<Crew />} />
          <Route path="/crew/:slug" element={<Crew />} />
          <Route path="/technology" element={<Technology />} />
          <Route path="/technology/:slug" element={<Technology />} />
          <Route path="/destination" element={<Destination />} />
          <Route path="/destination/:slug" element={<Destination />} />
        </Routes>
      </div>
    </DataContext.Provider>
  );
}

export default App;
