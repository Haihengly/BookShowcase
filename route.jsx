import {BrowserRouter, Route, Routes} from "react-router-dom";
import Firstpage from "./firstPage";
import Home from "./home";
import Featured from "./featured";
import Arrivals from "./arrivals";
import Blogs from "./blogs";
const RouteAPI = () => {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Firstpage/>}></Route>
                    <Route path="/home" element={<Home/>}></Route>
                    <Route path="/Featured" element={<Featured/>}></Route>
                    <Route path="/Arrivals" element={<Arrivals/>}></Route>
                    <Route path="/Blogs" element={<Blogs/>}></Route>
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default RouteAPI;