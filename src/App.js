import { Routes, Route, BrowserRouter } from "react-router-dom";

import Home from "./components/pages/Home";
import Users from "./components/pages/Users";
import UserBlog from "./components/pages/UserBlog";
import UserPostForm from "./components/pages/UserPostForm";

import "./styles/normalize.css";
import "./styles/fontawesome.min.css";
import "./styles/main.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/users" element={<Users />}></Route>
        <Route path="/users/:UserId" element={<UserBlog />}></Route>
        <Route path="/users/:UserId/post" element={<UserPostForm />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
