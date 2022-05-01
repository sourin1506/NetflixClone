import Home from "./Pages/home";

import Browse from "./Pages/browse";

import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Signin from "./Pages/signin";
import Signup from "./Pages/signup";

import ProtectedRoute from "./helpers/protectedroutes";
import { useContext } from "react";
import { LoggedContext } from "./context/loggedstatus";
import Profile from "./Pages/profile";
import ProfilescreenContainer from "./containers/profilescreen";
import Pricing_Table from "./containers/pricingtable";

function App() {
  const { islogged } = useContext(LoggedContext);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<Home />} />
        <Route
          path="/browse"
          element={
            <ProtectedRoute>
              <Browse />
            </ProtectedRoute>
          }
        />
        {/* <Route path="/browse" element={<Browse />} /> */}
        <Route path="/profile" element={<Profile />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
        <Route
          path="/profilescreen"
          element={
            <ProtectedRoute>
              <ProfilescreenContainer />
            </ProtectedRoute>
          }
        />
        {/* <Route
          path="/plans"
          element={
            <ProtectedRoute>
              <Pricing_Table />
            </ProtectedRoute>
          }
        /> */}
        {/* <Route path="/profilescreen" element={<ProfilescreenContainer />} /> */}
        <Route path="/plans" element={<Pricing_Table />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
