import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { useState } from "react";

import Home from "./pages/Home";
import Profile from "./pages/Profile";
import ProfileDetails from "./pages/ProfileDetails";
import ProfileSettings from "./pages/ProfileSettings";
import Login from "./pages/Login";
import BlogPost from "./pages/BlogPost";
import ProtectedRoute from "./components/ProtectedRoute";

/*
Nested routes implemented
Dynamic routing implemented
Protected route component created
Protected route implemented
*/

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <BrowserRouter>
      <div>
        <nav>
          <Link to="/">Home</Link> |{" "}
          <Link to="/profile">Profile</Link> |{" "}
          <Link to="/blog/1">Blog Post</Link> |{" "}
          <button onClick={() => setIsAuthenticated(!isAuthenticated)}>
            Toggle Auth
          </button>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />

          <Route
            path="/profile"
            element={
              <ProtectedRoute isAuthenticated={isAuthenticated}>
                <Profile />
              </ProtectedRoute>
            }
          >
            <Route path="details" element={<ProfileDetails />} />
            <Route path="settings" element={<ProfileSettings />} />
          </Route>

          {/* Dynamic routing implemented */}
          <Route path="/blog/:id" element={<BlogPost />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;