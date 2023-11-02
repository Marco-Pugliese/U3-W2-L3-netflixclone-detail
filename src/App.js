import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import MyHeader from "./components/MyHeader";
import MyBody from "./components/MyBody";
import MyFooter from "./components/MyFooter";
import SettingPage from "./settingPageComponents/SettingPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Detail from "./components/Detail";
import TvShows from "./components/TV-Shows";

function App() {
  return (
    <BrowserRouter>
      <div fluid className="my-bg d-flex flex-column h-100">
        <MyHeader />

        <div className="flex-grow-1">
          <Routes>
            <Route element={<MyBody />} path="/" />
            <Route element={<Detail />} path="/Detail/:filmId" />
            <Route element={<TvShows />} path="/TvShows" />
            <Route element={<SettingPage />} path="/Settings" />
          </Routes>
        </div>

        <MyFooter />
      </div>
    </BrowserRouter>
  );
}

export default App;
