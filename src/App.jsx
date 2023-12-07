import "./App.css";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import logo from './assets/logo.svg'
import Home from "./pages/Home";
import CreatePosts from "./pages/CreatePost";
import Footer from "./Components/Footer";

function App() {
  return (
    <BrowserRouter>
      <header className="w-full flex justify-between items-center bg-white sm:px-8 px-4 py-4 border-b border-b-[#e6ebf4]">
        <Link to="/">
          <img src={logo} alt="logo" className="w-28 object-contain" />
        </Link>

        <Link
          to={"/create-post"}
          className="font-inter font-medium bg-[#6469ff] text-white px-4 py-2 rounded-md"
        > 
          Create Post
        </Link>
      </header>



      <main className="bg-[#fafef9] sm:p-8 px-4 py-8 w-full   min-h-[calc(100vh-73px)]">
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/create-post" element={<CreatePosts />}/>
      </Routes>


      </main> 
    </BrowserRouter>
  );
}

export default App;
