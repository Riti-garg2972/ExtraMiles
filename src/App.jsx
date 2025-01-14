// import react router
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./pages/about";
import Home from "./pages/home";
import Events from "./pages/events";
import Communities from "./pages/communities";
import Profile from "./pages/profile";
import Login from "./pages/login";
import Logout from "./pages/logout";
import Handler from "./pages/handler";
// import pages
// import components

export default function App() {
  return (
    <BrowserRouter>
      <div className="w-100 h-screen">
        <Routes>
          <Route path="/">
            <Route index element={<Home />} />
          </Route>
          <Route path="/about">
            <Route index element={<About />} />
          </Route>
          <Route path="/communities">
            <Route index element={<Communities />} />
          </Route>{" "}
          <Route path="/events">
            <Route index element={<Events />} />
          </Route>{" "}
          <Route path="/profile">
            <Route index element={<Profile />} />
          </Route>
          <Route path="/auth/login"><Route index element={<Login />} /></Route>
          <Route path="/auth/logout"><Route index element={<Logout />} /></Route>
          <Route path="/auth/handler"><Route index element={<Handler />} /></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}
