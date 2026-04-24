import { Routes, Route } from "react-router-dom";
import Admin from "./pages/admin/admin";  
import Login from "./pages/login"
import Books from "./pages/books/index"



function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/login" element={<Login />} />
      <Route path="/admin" element={<Admin />} />
      <Route path="/books" element={<Books />} />
    </Routes>
  );
}

export default App;
