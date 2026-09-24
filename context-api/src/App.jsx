import { useContext } from "react"
import ThemeContext from "./context/ThemeContext"




const App = () => {
const {theme,toggleTheme}=useContext(ThemeContext);

  return (
    <div
     style={{
        minHeight: "100vh",
        backgroundColor: theme === "light" ? "white" : "#222",
        color: theme === "light" ? "black" : "white",
        padding: "40px",
        textAlign: "center"
      }}
    >
      <h1>Theme Switcher</h1>
      <p>Current Theme : {theme}</p>
      <button onClick={toggleTheme}>Switch to {theme === "light" ? "Dark" : "Light"}</button>
    </div>
  )
}

export default App
