import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import "./assets/scss/main.scss";
import Layout from "./layout";
import Home from "./pages/home";
import Shop from "./pages/shop";
import Overlay from "./components/overlay";
import PrivateRout from "./routes/PrivateRout";
import Profile from "./pages/profile";
import Admin from "./pages/admin";

function App() {
  return (
    <>
      <Overlay />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/shop" element={<Shop />} />
            <Route
              element={<PrivateRout roles={["user", "admin", "superAdmin"]} />}
            >
              <Route path="/profile" element={<Profile />} />
            </Route>
          </Route>
          <Route element={<PrivateRout roles={[ "admin", "superAdmin"]}/>}>
            <Route path="/admin" element={<Admin/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
