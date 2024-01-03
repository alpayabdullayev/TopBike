import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Layout from "./layout";
import Home from "./pages/home";
import Shop from "./pages/shop";

function App() {
  return <>
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
