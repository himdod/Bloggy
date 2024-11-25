import "./App.css";
import Footer from "./components/footer";
import Header from "./components/header";
import "bootstrap/dist/css/bootstrap.min.css";
import Sidebar from "./components/sidebar";
import CreatePost from "./components/CreatePost";
import PostList from "./components/PostList";
import { useState } from "react";
import PostStoreProvider from "./store/postStore";
import { Outlet } from "react-router-dom";

function App() {
  const [selectedTab, setSelectedTab] = useState("Home");

  return (
    <>
      <PostStoreProvider>
        <div className="app-container">
          <Sidebar selectedTab={selectedTab} setSelectedTab={setSelectedTab} />

          <div className="content">
            <Header />
            <Outlet/>
            <Footer />
          </div>
        </div>
      </PostStoreProvider>
    </>
  );
}

export default App;
