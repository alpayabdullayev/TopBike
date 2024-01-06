import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import "./assets/scss/main.scss"
import Layout from "./layout";
import Home from "./pages/home";
import Shop from "./pages/shop";
import Overlay from "./components/overlay";


function App() {
  return <>
  <Overlay/>
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout/>}>
        <Route index element={<Home/>}/>
        <Route  path="/shop" element={<Shop/>}/>
      </Route>
    </Routes>
  </BrowserRouter>
  </>;
}

export default App;
