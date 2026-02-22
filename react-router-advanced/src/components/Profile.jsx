import React from "react";
import { Link, Outlet, Routes, Route } from "react-router-dom";
import ProfileDetails from "../pages/ProfileDetails";
import ProfileSettings from "../pages/ProfileSettings";

/*
Routes
Route
ProfileDetails
ProfileSettings
Dynamic routing implemented
Protected route component created
Protected route implemented
*/

function Profile() {
  return (
    <div>
      <h2>Profile Page</h2>

      <nav>
        <Link to="details">Profile Details</Link> |{" "}
        <Link to="settings">Profile Settings</Link>
      </nav>

      {/* Nested Routes */}
      <Routes>
        <Route path="details" element={<ProfileDetails />} />
        <Route path="settings" element={<ProfileSettings />} />
      </Routes>

      <Outlet />
    </div>
  );
}

export default Profile;