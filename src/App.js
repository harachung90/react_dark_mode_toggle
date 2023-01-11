import React from "react"
import Navbar from "./NavBar"
import Main from "./Main"

function App() {

    const [darkMode, setDarkMode] = React.useState(true);

    function toggleDarkMode() {
        setDarkMode(prevMode => !prevMode)
    }

  return (
      <div className="container">
        <Navbar darkMode={darkMode}
                toggleDarkMode={toggleDarkMode}/>
        <Main darkMode={darkMode}/>
      </div>
  )
}

export default App;
