import { useState, createContext } from "react";
import Content from "./Content";
import "./App.css";
export const themeContext = createContext();
function App() {
    const [show, setShow] = useState(true);
    const [color, setColor] = useState("red");
    const handleShow = () => {
        return setShow(!show);
    };
    const handleColor = () => {
        return setColor(color === "red" ? "blue" : "red");
    };
    return (
        <themeContext.Provider value={color}>
            <div>
                <button onClick={handleShow}>SHOW</button>
                <br></br>
                <button onClick={handleColor}>Color</button>

                {show && <Content color={color} />}
            </div>
        </themeContext.Provider>
    );
}
export default App;
