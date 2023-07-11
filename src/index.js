import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/index";
import GetInvolved from "./pages/GetInvolved";
import Contact from "./pages/Contact";
import NoPage from "./pages/NoPage";

export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<index />} />
                    <Route path="getinvolved" element={<GetInvolved />} />
                    <Route path="contact" element={<Contact />} />
                    <Route path="*" element={<NoPage />} />
                </Route>
            </Routes>
        </BrowserRouter>);
}

ReactDOM.render(<App />, document.getElementById("root"));