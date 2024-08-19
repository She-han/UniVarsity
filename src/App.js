import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";

import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Feed from "./pages/Feed";
import Notifications from "./pages/Notifications";
import Messanger from "./pages/Messanger";

import Account from "./pages/Account";
import Wishlist from "./pages/Wishlist";
import Feedbacks from "./pages/Feedbacks";
import Reminder from "./pages/Reminder";
import Settings from "./pages/Settings";
import Contact from "./pages/Contact";
import About from "./pages/About";

import Events from "./pages/Events";
import Competitions from "./pages/Competitions";
import Workshops from "./pages/Workshops";

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen((prev) => !prev);
  };

  return (
    <>
      <div className="flex flex-col min-h-screen">
        <BrowserRouter>
          <Header toggleSidebar={toggleSidebar} isOpen={isSidebarOpen} />
          <div className="flex flex-1 lg:w-[1/4]">
            {/* Sidebar takes up 25% on large screens */}
            <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />

            {/* Main content area takes up 75% on large screens */}
            <main className="flex flex-1 w-full lg:w-3/4">
              <Routes>
                <Route path="/" element={<Home />} />

                <Route path="/home" element={<Home />} />
                <Route path="/feed" element={<Feed />} />
                <Route path="/notifications" element={<Notifications />} />
                <Route path="/messanger" element={<Messanger />} />

                <Route path="/account" element={<Account />} />
                <Route path="/wishlist" element={<Wishlist />} />
                <Route path="/feedbacks" element={<Feedbacks />} />
                <Route path="/reminder" element={<Reminder />} />
                <Route path="/settings" element={<Settings />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/about" element={<About />} />

                <Route path="/events" element={<Events />} />
                <Route path="/competitions" element={<Competitions />} />
                <Route path="/workshops" element={<Workshops />} />
              </Routes>
            </main>
          </div>
        </BrowserRouter>
        <Footer />
      </div>
    </>
  );
}

export default App;
