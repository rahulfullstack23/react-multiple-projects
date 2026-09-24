import { Routes, Route, NavLink } from "react-router-dom";
import {Link} from "react-router-dom";

const App = () => {
  return (
    <>
    <Routes>
      <Route path="/" element={<h1>Home Page</h1>} />
      <Route path="/about" element={<h1>About Page</h1>} />
      <Route path="/contact" element={<h1>Contact Page</h1>} />
    </Routes>
<div>
    <h1>Home</h1>
    <Link to="/abouts">Go to about</Link>
</div>

<NavLink to="/Home" className={({isActive})=> isActive ? "active" : ""}>Home Navlink</NavLink>

</>
  );
};

export default App;
