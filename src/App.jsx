import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomeV1 from "./pages/homeV1";
import Blogs from "./pages/blogs";
import BlogDetails from "./pages/blogDetails";
import AboutPage from "./pages/about";
import MintPageOne from "./pages/mint";
import Vote from "./pages/vote";
import Login from "./pages/login";
import Disclaimer from "./pages/disclaimer";
import Terms from "./pages/terms";
import Custom from "./pages/customNFT";
import Version from "./pages/version";
import Privacy from "./pages/privacyandcookies";
import ConnectWallet from "./components/section/connectWallet/ConnectWallet";
import ProtectedRoute from "./components/section/protectedRoute/ProtectedRoute";
import MainComponent from "./components/section/main/MainComponent";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<HomeV1 />} />
        <Route path="/connect-your-wallet" element={<ConnectWallet />} />
        <Route 
          path="/suiduckz-story" 
          element={
            <ProtectedRoute>
              <Blogs />
            </ProtectedRoute>
          } 
        />
        <Route path="/post" element={<BlogDetails />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/mint" element={<MintPageOne />} />
        <Route path="/vote" element={<Vote />} />
        <Route path="/disclaimer" element={<Disclaimer />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/customNFT" element={<Custom />} />
        <Route path="/version" element={<Version />} />
        <Route path="/Privacy-Policy-and-Cookies-Statement" element={<Privacy />} />
        <Route path="/main" element={<MainComponent />} />
      </Routes>
    </Router>
  );
}

export default App;
